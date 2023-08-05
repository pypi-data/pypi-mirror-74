
import os

from PyQt5.QtCore import *
from PyQt5.QtGui import *
from PyQt5.QtWidgets import *


context = None
data_service = None
_dataexplore_view = None
_frame = None

g_copy_obj = None
g_cut_obj  = None

def init(context_):
    global context
    context = context_


class RootNodeCallback:
            def __init__(self, item, node):
                self._item = item
                self._node = node
            def set_name(self, event, node, old_name):
                if node != self._node:
                    return 
                name = node.get_name()
                self._item.setText(0, name)
            def set_prop(self, event, node, key, value):
                return 
            def delete(self, event, node):
                if node != self._node:
                    return
                
                global context
                context.remove_suscribe('event::DataNode::Modify::Name' , self.set_name)
                context.remove_suscribe('event::DataNode::Modify::Prop' , self.set_prop)
                context.remove_suscribe('event::DataNode::Delete' , self.delete)
                context.remove_suscribe('event::DataNode::Modify::AddChild' , self.add_child)
                context.remove_suscribe('event::DataNode::Modify::RemoveChild' , self.remove_child)

            def add_exist_child(self, item_, node, child):
                item = QTreeWidgetItem(item_)
                item.setText(0, child.get_name())
                item.setText(1, child.get_kind())
                item.setData(0, Qt.UserRole, child)
                #print("current:", item)
                #print("parent:", item.parent())

                global context
                obj = RootNodeCallback(item , child)
                item.setData(0, Qt.UserRole+1, obj)

                context.add_subscribe('event::DataNode::Modify::Name' , obj.set_name)
                context.add_subscribe('event::DataNode::Modify::Prop' , obj.set_prop)
                context.add_subscribe('event::DataNode::Delete' , obj.delete)
                context.add_subscribe('event::DataNode::Modify::AddChild' , obj.add_child)
                context.add_subscribe('event::DataNode::Modify::RemoveChild' , obj.remove_child)

                item_.setExpanded(True)

                #print("........................................")
                #print(child.get_children())
                for child_node in child.get_children():
                    self.add_exist_child(item, child, child_node)

            def add_child(self, event, node, child):
                if node != self._node:
                    return
                
                parent = child.parent()
                if not parent:
                    return 

                children = parent.get_children()
                index = 0
                for child_node in children:
                    if child == child_node:
                        break
                    index += 1

                item = QTreeWidgetItem()
                item.setText(0, child.get_name())
                item.setText(1, child.get_kind())
                item.setData(0, Qt.UserRole, child)
                #print("current:", item)
                #print("parent:", item.parent())
                #print("insert item: ", index, item)
                self._item.insertChild(index, item)

                global context
                obj = RootNodeCallback(item , child)
                item.setData(0, Qt.UserRole+1, obj)

                context.add_subscribe('event::DataNode::Modify::Name' , obj.set_name)
                context.add_subscribe('event::DataNode::Modify::Prop' , obj.set_prop)
                context.add_subscribe('event::DataNode::Delete' , obj.delete)
                context.add_subscribe('event::DataNode::Modify::AddChild' , obj.add_child)
                context.add_subscribe('event::DataNode::Modify::RemoveChild' , obj.remove_child)

                self._item.setExpanded(True)

                #print("........................................")
                #print(child.get_children())
                for child_node in child.get_children():
                    self.add_exist_child(item, child, child_node)
            
            def remove_child(self, event, node, child, index):
                if node != self._node:
                    return

                for i in range(0, self._item.childCount()):
                    item = self._item.child(i)
                    child_node = item.data(0, Qt.UserRole)
                    if child_node == child:
                        self._item.removeChild(item)
                        break

class DragTreeWidget(QTreeWidget):
    def __init__(self):
        super().__init__()

    def selectionChanged(self, select, deselect):
        global context

        items = self.selectedItems()
        if len(items) == 1:
            context.fire('event::DataNode::Select', items[0].data(0, Qt.UserRole))
        elif len(items) > 1:
            items_nodes = [item.data(0, Qt.UserRole) for item in items]
            context.fire('event::DataNode::Select::items', items_nodes)

    
    def mousePressEvent(self, event):
        super().mousePressEvent(event)
        #print("Tree Widget mousePressEvent:", event)
        if event.button() == Qt.LeftButton:
            # 判断是否选中某个组件对象
            # 获取当前选择列表
            items = self.selectedItems()
            if len(items) == 0:
                return 

            nodes = [item.data(0, Qt.UserRole) for item in items]
            for node in nodes:
                if not node:
                    return 

            id_list = [node.get_id() for node in nodes]
            kind_list = [node.get_kind() for node in nodes]

            id = ";".join(id_list)
            kind = ";".join(kind_list)

            drag = QDrag(self)
            mimeData = QMimeData()

            #mimeData.setText("abcd")
            mimeData.setData('DragNodeID', bytes(id, encoding='UTF-8'))
            mimeData.setData('DragNodeKind', bytes(kind, encoding='UTF-8'))
            mimeData.setImageData( nodes)
            drag.setMimeData(mimeData)
            #drag.setPixmap(QPixmap("C:/Work/QtUi/goto.png"))

            dropAction = drag.exec(Qt.CopyAction | Qt.MoveAction)
    
    def dragEnterEvent(self, event):
        #if (event->mimeData()->hasFormat("text/plain"))
        #print("Tree Widget dragEnterEvent:", event)
        event.acceptProposedAction()

    def dragMoveEvent(self, event):
        global context
        #print("Tree Widget dragMoveEvent:", event, event.pos())
        parent = self.itemAt(event.pos())
        if not parent:
            event.ignore()
            return

        #print('Current Item Rect:', )
        node = parent.data(0, Qt.UserRole)
        if not node:
            event.ignore()
            return 

        shift_key = False
        ctrl_key = False
        alt_key = False

        if event.keyboardModifiers() & Qt.ShiftModifier:
            shift_key = True
        if event.keyboardModifiers() & Qt.ControlModifier:
            ctrl_key = True
        if event.keyboardModifiers() & Qt.AltModifier:
            alt_key = True

        mimeData = event.mimeData()
        drag_nodes = mimeData.imageData()
        nodeid = bytes(mimeData.data('DragNodeID')).decode('utf-8')
        nodekind = bytes(mimeData.data('DragNodeKind')).decode('utf-8')
        if nodeid == "":
            event.ignore()
            return 

        kinds = node.get_child_kinds()
        if shift_key or alt_key:
            kinds = node.parent().get_child_kinds()

        kind_list = nodekind.split(';')

        b_all_in = True
        for kind in kind_list:
            if kind != "" and kind not in kinds:
                b_all_in = False
                break
            
        if b_all_in:
            event.acceptProposedAction()
            return 
        else:
            exts = context.find_extension("DataExplore::DataNode::DragAction")
            for ext in exts:
                if ext.dragMoveEvent(event, drag_nodes, node) == 1:
                    event.acceptProposedAction()
                    return 

        event.ignore()
        
        

    def dropEvent(self, event):
        global context
        #print("Tree Widget dropEvent:", event)
        #textBrowser->setPlainText(event->mimeData()->text());
        #mimeTypeCombo->clear();
        #mimeTypeCombo->addItems(event->mimeData()->formats());

        # Qt.ShiftModifier
        # Qt.ControlModifier
        #print('Keys:', event.keyboardModifiers())
        #print('Mouse Buttons:', event.mouseButtons())

        mimeData = event.mimeData()

        nodeid = bytes(mimeData.data('DragNodeID')).decode('utf-8')
        nodekind = bytes(mimeData.data('DragNodeKind')).decode('utf-8')
        if nodeid == "":
            event.ignore()
            return 

        shift_key = False
        ctrl_key = False
        alt_key = False

        if event.keyboardModifiers() & Qt.ShiftModifier:
            shift_key = True
        if event.keyboardModifiers() & Qt.ControlModifier:
            ctrl_key = True
        if event.keyboardModifiers() & Qt.AltModifier:
            alt_key = True

        parent = self.itemAt(event.pos())
        if not parent:
            event.ignore()
            return

        node = parent.data(0, Qt.UserRole)
        if not node:
            event.ignore()
            return 

        drag_node = mimeData.imageData()

        for node_t in drag_node:
            if node.get_id() == node_t.get_id():
                return 

        kinds = node.get_child_kinds()
        if shift_key or alt_key:
            kinds = node.parent().get_child_kinds()

        kind_list = nodekind.split(';')

        b_all_in = True
        for kind in kind_list:
            if kind != "" and kind not in kinds:
                b_all_in = False
                break

        if b_all_in:
            if ctrl_key:
                drag_node = [node_t.clone() for node_t in drag_node]
            else:
                for node_t in drag_node:
                    node_t.parent().remove_child(node_t)

            if shift_key:
                # 前方插入
                for node_t in drag_node:
                    node.parent().insert_child(node_t, node)
            elif alt_key:
                # 后方插入
                for node_t in drag_node:
                    node.parent().insert_child_after(node_t, node)
            else:
                # 子节点插入
                for node_t in drag_node:
                    node.add_child(node_t)
        else:
            exts = context.find_extension("DataExplore::DataNode::DragAction")
            for ext in exts:
                ext.dropEvent(event, drag_node, node)

        event.acceptProposedAction()

class DataExploreView(QDockWidget):
    def __init__(self):
        super().__init__()

        self._open = None
        self._menu = None

        self.treeWidget = DragTreeWidget()
        self.treeWidget.setDragEnabled(True)
        self.treeWidget.setAcceptDrops(True)
        self.treeWidget.setDefaultDropAction(Qt.MoveAction);
        self.treeWidget.setDragDropMode(QAbstractItemView.InternalMove)
        self.treeWidget.setContextMenuPolicy(Qt.CustomContextMenu)
        self.treeWidget.setColumnCount(2)
        self.treeWidget.setHeaderLabels(['Name', 'Kind'])
        self.treeWidget.setColumnWidth(0, 280)
        self.treeWidget.setMinimumWidth(360)
        self.treeWidget.setSelectionMode(QAbstractItemView.ExtendedSelection)
        

        # 右键菜单
        self.treeWidget.customContextMenuRequested.connect(self.openMenu)
        # 双击编辑名称
        self.treeWidget.itemDoubleClicked.connect(self.double_click)
        # 选择改变
        #self.treeWidget.itemPressed.connect(self.itemPressed)

        self.setWidget(self.treeWidget)
    def openMenu(self, position):
        #item = self.treeWidget.currentItem()
        items = self.treeWidget.selectedItems()
        items_nodes = [item.data(0, Qt.UserRole) for item in items]

        # 弹出菜单
        menu = QMenu()
        self._menu = menu
        
        # 获取类型节点注册的菜单
        exts = context.find_extension("PL::DataExplore::Menu")
        sort_exts = sorted(exts, key=lambda ext: ext.priorty())
        for ext in sort_exts:
            ext.add_menu(menu, items_nodes)

        menu.exec_(self.treeWidget.viewport().mapToGlobal(position))

    def double_click(self, item, col):
        node = item.data(0, Qt.UserRole)
        
        exts = context.find_extension("PL::Basic::Editor")
        for ext in exts:
            if (ext.is_match_data(node)):
                global _frame
                tabWidget = _frame.centralWidget ()
                widget = ext.create_editor(tabWidget)
                if tabWidget.indexOf(widget) == -1:
                    widget.on_init(node)
                    tabWidget.addTab(widget, node.get_name())
                tabWidget.setCurrentWidget(widget)
                break

    def itemPressed(self, item, col):
        if self._open:
            item = self._open
            self.treeWidget.closePersistentEditor(self._open,0)
            self._open = None

            node = item.data(0, Qt.UserRole)
            #print("name.....:", item.text(0))
            node.set_name(item.text(0))
        
        global context
        context.fire('event::DataNode::Select', item.data(0, Qt.UserRole))

    def close_project(self):
        global context
        #rint("Close project......................")
        if self.treeWidget.topLevelItemCount() > 0:
            self.treeWidget.takeTopLevelItem(0)

    def _new_node(self, node, parent = None):
        global context

        new_item = None
        if not parent:
            new_item = QTreeWidgetItem(self.treeWidget)
        else:
            new_item = QTreeWidgetItem(parent)

        obj = RootNodeCallback(new_item , node)

        new_item.setText(0, node.get_name())
        new_item.setText(1, node.get_kind())
        new_item.setData(0, Qt.UserRole, node)
        new_item.setData(0, Qt.UserRole+1, obj)

        global context
        context.add_subscribe('event::DataNode::Modify::Name' , obj.set_name)
        context.add_subscribe('event::DataNode::Modify::Prop' , obj.set_prop)
        context.add_subscribe('event::DataNode::Delete' , obj.delete)
        context.add_subscribe('event::DataNode::Modify::AddChild' , obj.add_child)
        context.add_subscribe('event::DataNode::Modify::RemoveChild' , obj.remove_child)

        return new_item

    

    def on_project_open(self, node):
        data_service = context.find_service("DataService")
        root = data_service.root_node()

        root_item = self._new_node(root)

        nodes = []
        items = []
        nodes.append(root)
        items.append(root_item)

        while len(nodes) > 0:
            node = nodes[0]
            item = items[0]

            nodes.pop(0)
            items.pop(0)

            children = node.get_children()
            for child in children:
                new_item = self._new_node(child, item)
                nodes.append(child)
                items.append(new_item)


class DataExploreExtension:
    def add_pane(self, frame):
        global _dataexplore_view
        self._dock1 = DataExploreView()
        _dataexplore_view = self._dock1
        self._dock1.setWindowTitle('DataExplore')
        frame.addDockWidget(Qt.LeftDockWidgetArea, self._dock1)

        global _frame
        _frame = frame

def OnNodeDelete(event, node):
    global _dataexplore_view
    _dataexplore_view.treeWidget.selectionChanged(0,0)

class ActionNewNode:
    def __init__(self, kind, parent = None):
        self._kind = kind
        self._parent = parent
    def get_name(self, kind):
        text, ok = QInputDialog().getText(None, "input "+kind+"'s name", "name:", QLineEdit.Normal)
        return text, ok
    def on_new_node(self, value):
        global context

        name, ok = self.get_name(self._kind)
        if not (ok and name):
            return 
        if len(self._parent) > 1:
            return 

        data_service = context.find_service("DataService")
        if len(self._parent) == 0:
            # 创建根节点
            new_node = data_service.create_rootnode(name)
        else:
            # 创建子节点
            new_node = data_service.create_node(self._kind, name)
            self._parent[0].add_child(new_node)
    def on_delete(self, value):
        for node in self._parent:
            node.delete()
    def on_rename(self, value):
        if len(self._parent) != 1:
            return 

        new_name, ok  = self.get_name(self._kind)
        if not (ok and new_name):
            return 
        self._parent[0].set_name(new_name)
    def on_copy(self, value):
        global g_copy_obj
        global g_cut_obj
        g_cut_obj = None
        g_copy_obj = self._parent
    def on_cut(self, value):
        global g_copy_obj
        global g_cut_obj
        g_cut_obj = self._parent
        g_copy_obj = None
    def on_paste(self, value):
        global g_copy_obj
        global g_cut_obj

        if len(self._parent) != 1:
            return 

        new_obj = None
        if g_cut_obj:
            for node in g_cut_obj:
                node.parent().remove_child(node)
            new_obj = g_cut_obj
        else:
            new_obj = [node.clone() for node in g_copy_obj]
        
        for node in new_obj:
            self._parent[0].add_child(node)
        g_copy_obj = None
        g_cut_obj = None



class DataExploreBasicOpMenu:
    def __init__(self):
        self.menus = []
    def priorty(self):
        return 1000
    def add_menu(self, menu, nodes):
        self.menus = []

        if len(nodes) == 0:
            obj = ActionNewNode("", nodes)
            action = menu.addAction("新建根节点2")
            action.triggered.connect(obj.on_new_node)
            self.menus.append(obj)
        elif len(nodes) == 1:
            node = nodes[0]
            kind = ""
            if node != None:
                kind = node.get_kind()
            
            kinds =  node.get_child_kinds()
            for k in kinds:
                action = menu.addAction("新建"+k)
                
                obj = ActionNewNode(k, nodes)
                self.menus.append(obj)
                action.triggered.connect(obj.on_new_node)


class DataExploreDeleteMenu:
    def __init__(self):
        self.menus = []
    def priorty(self):
        return 1000
    def add_menu(self, menu, nodes):
        self.menus = []

        if len(nodes) > 0:
            obj = ActionNewNode("", nodes)
            self.menus.append(obj)
            action = menu.addAction("删除")
            action.triggered.connect(obj.on_delete)

class DataExploreRenameMenu:
    def __init__(self):
        self.menus = []
    def priorty(self):
        return 1000
    def add_menu(self, menu, nodes):
        self.menus = []

        if len(nodes) == 1:
            obj = ActionNewNode("", nodes)
            self.menus.append(obj)
            action = menu.addAction("重命名")
            action.triggered.connect(obj.on_rename)

class DataExploreCopyMenu:
    def __init__(self):
        self.menus = []
    def priorty(self):
        return 1000
    def add_menu(self, menu, nodes):
        self.menus = []

        if len(nodes)>0:
            obj = ActionNewNode("", nodes)
            self.menus.append(obj)
            action = menu.addAction("复制")
            action.triggered.connect(obj.on_copy)

class DataExploreCutMenu:
    def __init__(self):
        self.menus = []
    def priorty(self):
        return 1000
    def add_menu(self, menu, nodes):
        self.menus = []

        if len(nodes) > 0:
            obj = ActionNewNode("", nodes)
            self.menus.append(obj)
            action = menu.addAction("剪切")
            action.triggered.connect(obj.on_cut)

class DataExplorePasteMenu:
    def __init__(self):
        self.menus = []
    def priorty(self):
        return 1000
    def add_menu(self, menu, nodes):
        self.menus = []

        if len(nodes) != 1:
            return

        global g_copy_obj
        global g_cut_obj

        if g_copy_obj == None and g_cut_obj == None:
            return 

        kind_ = ''
        kinds = []
        if g_copy_obj:
            kind_ = [node.get_kind() for node in g_copy_obj]
        elif g_cut_obj:
            kind_ = [node.get_kind() for node in g_cut_obj]
        kinds = nodes[0].get_child_kinds()

        for kind in kind_:
            if kind not in kinds:
                return 
        #print("copy kind:", kind)
        #print('Child kinds:', kinds)

        obj = ActionNewNode("", nodes)
        self.menus.append(obj)
        action = menu.addAction("粘贴")
        action.triggered.connect(obj.on_paste)
            

class PaneExtensionToolbar:
    def __init__(self):
        self._file = None
    def priorty(self):
        return 1000
    def add_toolbar(self, toolBar):

        action = toolBar.addAction(QIcon(os.path.dirname(__file__) + "/images/down.png"),"Open")
        action.setToolTip("Open")
        action.triggered.connect(self.open)
        action = toolBar.addAction(QIcon(os.path.dirname(__file__) + "/images/left.png"),"Save")
        action.setToolTip("Save")
        action.triggered.connect(self.save)
        action = toolBar.addAction(QIcon(os.path.dirname(__file__) + "/images/right.png"),"Save As")
        action.setToolTip("Save As")
        action.triggered.connect(self.saveas)
    def add_menu(self, menu_bar):
        self.file_menu = menu_bar.addMenu("File")

        self.action1 = QAction("Open")
        self.action1.triggered.connect(self.open)
        self.file_menu.addAction(self.action1)
        

        self.action2 = QAction("Save")
        self.action2.triggered.connect(self.save)
        self.file_menu.addAction(self.action2)

        self.action3 = QAction("Save As")
        self.action3.triggered.connect(self.saveas)
        self.file_menu.addAction(self.action3)

    def saveas(self, obj):
        global context
        data_service = context.find_service("DataService")

        fileName, ok = QFileDialog.getSaveFileName(None, "Save Project", "", "X Project Files (*.xxx)")
        if not fileName:
            return 

        data_service.save(fileName)
        self._file = fileName
    def save(self, obj):
        if self._file:
            global context
            data_service = context.find_service("DataService")
            data_service.save(self._file)
        else:
            self.saveas("")
    def open(self, obj):
        fileName, ok = QFileDialog.getOpenFileName(None, "Open Project", "", "X Project Files (*.xxx)")
        if not fileName:
            return 

        global context
        data_service = context.find_service("DataService")
        data_service.load(fileName)
        self._file = fileName
    


def OnOpenProject(event, node):
    global _dataexplore_view
    _dataexplore_view.on_project_open(node)

def OnRootNodeNew(event, node):
    global _dataexplore_view
    _dataexplore_view._new_node(node)

def OnCloseProject(event, node):
    global _dataexplore_view
    _dataexplore_view.close_project()


DataExploreMenu = '''
class DataExploreMenu:
    def priorty(self):
        return 1000
    def add_menu(self, menu, node):
        pass
'''

DataExploreDragActionExtDef = '''
class DataExploreDragActionExtDef:
    def dragMoveEvent(self,event, node, target_node):
        return 1000
    def dropEvent(self, event, node, target_node):
        pass
'''

config = {
    'pluginid': 'UI::Core::DataExplore',
    "extensions_def" : [
        {
            "name": "PL::DataExplore::Menu",
            "define": DataExploreMenu
        },
        {
            "name": "DataExplore::DataNode::DragAction",
            "define": DataExploreDragActionExtDef
        }
        
    ],
    "extensions" : [
        {
            "name": "PL::Basic::Pane",
            "id": "PL::Basic::Pane::DataExplore",
            "impl": DataExploreExtension()
        },
        {
            "name": "PL::Basic::Menu",
            "id": "PL::Basic::Menu::OpenSave",
            "impl": PaneExtensionToolbar()
        },
        {
            "name": "PL::Basic::ToolBar",
            "id": "PL::Basic::ToolBar::OpenSave",
            "impl": PaneExtensionToolbar()
        },
        {
            'name': 'PL::DataExplore::Menu',
            'id': 'PL::DataExplore::Menu::BasicOp',
            'impl': DataExploreBasicOpMenu()
        },
        {
            'name': 'PL::DataExplore::Menu',
            'id': 'PL::DataExplore::Menu::Delete',
            'impl': DataExploreDeleteMenu()
        },
        {
            'name': 'PL::DataExplore::Menu',
            'id': 'PL::DataExplore::Menu::Rename',
            'impl': DataExploreRenameMenu()
        },
        {
            'name': 'PL::DataExplore::Menu',
            'id': 'PL::DataExplore::Menu::Paste',
            'impl': DataExplorePasteMenu()
        },
        {
            'name': 'PL::DataExplore::Menu',
            'id': 'PL::DataExplore::Menu::Copy',
            'impl': DataExploreCopyMenu()
        },
        {
            'name': 'PL::DataExplore::Menu',
            'id': 'PL::DataExplore::Menu::Cut',
            'impl': DataExploreCutMenu()
        }
    ],
    "subscribes" : [
        {
            "name": 'event::Project::Open',
            "define": OnOpenProject
        },
        {
            "name": 'event::Project::Close',
            "define": OnCloseProject
        },
        {
            "name": 'event::NewRootDataNode',
            "define": OnRootNodeNew
        },
        {
            "name": 'event::DataNode::Delete', 
            "define": OnNodeDelete
        }
    ]
}