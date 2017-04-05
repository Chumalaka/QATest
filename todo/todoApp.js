var toDo = {
  toDoList: [],
  getList: function() {
    if (localStorage.getItem("toDoStorage") === null) {
      return "NULL";
    }
    var locosto = localStorage.getItem('toDoStorage');
    this.toDoList = JSON.parse(locosto);
    this.renderList();
  },
  setList: function() {
    localStorage.setItem('toDoStorage', JSON.stringify(toDo.toDoList));
  },
  clearList: function() {
    localStorage.removeItem('toDoStorage');
    this.toDoList = [];
    this.renderList();
  },
  addItem: function(taskName, status) {
    toDoListItem = function(id, taskName, status) {
      this.id = id;
      this.taskName = taskName;
      this.status = status;
    }
    var id = Date.now();
    var newItem = new toDoListItem(id, taskName, status);
    //console.log(newItem);
    this.toDoList.push(newItem);
    this.setList();
  },
  toggleDone: function(id) {
    if (this.getStatus(id)) {
      this.markItemUnDone(id);
    } else {
      this.markItemDone(id);
    }
    this.calcProgress();
    toDo.setList();
  },
  markItemDone: function(id) {
    this.toDoList[id].status = true;
    //console.log("toggled done");
  },
  markItemUnDone: function(id) {
    this.toDoList[id].status = false;
  },
  calcProgress: function() {
    document.querySelector('#progress').setAttribute('value', (document.querySelectorAll('input[type="checkbox"]:checked').length) / (document.querySelectorAll('input[type="checkbox"]').length));
  },
  editItem: function() {

  },
  getDate: function(date) {
    return this.toDoList.indexOf(this.toDoList.find(x => x.id == date));
  },
  getStatus: function(id) {
    return this.toDoList[id].status;
  },
  getTaskName: function(id) {
    return this.toDoList[id].taskName;
  },
  deleteItem: function(id) {
    this.toDoList.splice(id, 1);
    this.renderList();
    toDo.setList();
  },
  createToDoElem: function(task) {
    var taskName = task.taskName;
    var taskStatus = task.status;
    var taskDate = task.id;
    //console.log(task,taskName,taskStatus);
    
    //create Element
    var newElem = document.createElement('div');
    newElem.setAttribute('id', taskDate);
    
    //create status checkbox
    var newStatus = document.createElement('input');
    newStatus.setAttribute('type', "checkbox");
    if (taskStatus === true) {
      newStatus.setAttribute('checked', "true");
    }
    newStatus.setAttribute('onchange', 'toDo.toggleDone(toDo.getDate(parentNode.id))')
    newElem.appendChild(newStatus);
    
    //create task name text
    var newElemName = document.createElement('span');
    newElemName.innerHTML = taskName;
    newElem.appendChild(newElemName);
    
    //create delete button
    var newDelete = document.createElement('button');
    newDelete.className = 'delete';
    newDelete.innerText = "x";
    newDelete.setAttribute('onclick', 'toDo.deleteItem(toDo.getDate(parentNode.id))');
    newElem.appendChild(newDelete);
    document.querySelector('#ToDoList').appendChild(newElem);
  },
  renderList: function() {
    document.querySelector("#ToDoList").innerHTML = '';
    this.toDoList.map(this.createToDoElem);
    this.calcProgress();
  }
}

function init() {
  toDo.getList();
  toDo.renderList();
  toDo.calcProgress();
};
init();

document.querySelector('#taskNamer').addEventListener("keydown", function(event) {
  //console.log(event);
  if (event.keyCode == 13) {
    var taskNamer = document.querySelector('#taskNamer');
    toDo.addItem(taskNamer.value, false);
    toDo.renderList();
    taskNamer.value = "";
  }
});
function clearInput(){
  document.querySelector('#taskNamer').value = "";
}