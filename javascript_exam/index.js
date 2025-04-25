
// let taskData = JSON.parse(localStorage.getItem("taskData")) || [];

// function addTask() {
//   const id = document.getElementById("taskId").value || Date.now();
//   const title = document.getElementById("title").value.trim();
//   const dueDate = document.getElementById("dueDate").value;
//   const description = document.getElementById("description").value.trim();
//   const priority = document.getElementById("priority").value;

//   if (!title || !dueDate) {
//     alert("Please enter both Title and Due Date.");
//     return;
//   }

//   const task = { id, title, dueDate, description, priority };

//   const existingIndex = taskData.findIndex(t => t.id == id);
//   if (existingIndex !== -1) {
//     taskData[existingIndex] = task;
//   } else {
//     taskData.push(task);
//   }

//   localStorage.setItem("taskData", JSON.stringify(taskData));
//   clearForm();
//   displayTasks();
// }

// function displayTasks() {
//   const filter = document.getElementById("priorityFilter").value;
//   const taskList = document.getElementById("taskList");
//   taskList.innerHTML = "";

//   const filteredTasks = filter === "all" ? taskData : taskData.filter(t => t.priority === filter);

//   if (filteredTasks.length === 0) {
//     taskList.innerHTML = '<p class="text-center">No tasks found.</p>';
//     return;
//   }

//   filteredTasks.forEach(task => {
//     const card = document.createElement("div");
//     card.className = "col-md-6 mb-3";
//     card.innerHTML = `
//       <div class="card ${getPriorityClass(task.priority)}">
//         <div class="card-body">
//           <h5 class="card-title">${task.title}</h5>
//           <p class="card-text">${task.description}</p>
//           <p class="card-text"><strong>Due:</strong> ${task.dueDate}</p>
//           <p class="card-text"><strong>Priority:</strong> ${task.priority}</p>
//           <button class="btn btn-sm btn-warning me-2" onclick="editTask(${task.id})">Edit</button>
//           <button class="btn btn-sm btn-danger" onclick="deleteTask(${task.id})">Delete</button>
//         </div>
//       </div>
//     `;
//     taskList.appendChild(card);
//   });
// }

// function getPriorityClass(priority) {
//   return priority === "low" ? "priority-low" :
//          priority === "medium" ? "priority-medium" : "priority-high";
// }

// function editTask(id) {
//   const task = taskData.find(t => t.id === id);
//   document.getElementById("taskId").value = task.id;
//   document.getElementById("title").value = task.title;
//   document.getElementById("dueDate").value = task.dueDate;
//   document.getElementById("description").value = task.description;
//   document.getElementById("priority").value = task.priority;
// }

//  function deleteTask(id) {
//     if (confirm("Are you sure you want to delete this task?")) {
//       taskData = taskData.filter(t => t.id != id);  // no 'let' keyword here!
//       localStorage.setItem("taskData", JSON.stringify(taskData));
//       displayTasks();
//     }
//   }

//   function clearForm() {
//   document.getElementById("taskId").value = "";
//   document.getElementById("title").value = "";
//   document.getElementById("dueDate").value = "";
//   document.getElementById("description").value = "";
//   document.getElementById("priority").value = "low";
// }

const Alltask = () => {
  return JSON.parse(localStorage.getItem('task')) || [];
}
const addTask = () => {
  let title = document.getElementById('title').value;
  let dueDate = document.getElementById('dueDate').value;
  let priority = document.getElementById('priority').value;
  let description = document.getElementById('description').value;


  let row = {
    id: Math.floor(Math.random() * 1000),
    title: title,
    dueDate: dueDate,
    priority: priority,
    description: description
  }
  let old = [...Alltask(), row];
  localStorage.setItem('task', JSON.stringify(old));
  alert("add task successfully..");
  document.getElementById('title').value = " ";
  document.getElementById('dueDate').value = " ";
  document.getElementById('priority').value = " ";
  document.getElementById('description').value = " ";


  viewRecord();

}

const viewRecord = () => {

  document.getElementById('edit').style.display = "none";
  document.getElementById('add').style.display = "block";

  let data = Alltask();
  let tbl = " ";
  data.map((val, index) => {
    tbl += `
       <div class="col-md-4 mb-4">
          <div class="card recipe-card h-100 shadow">
          <div class="card-body">
            <h5 class="card-title">${val.title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${val.dueDate}</h6>
            <p><strong>Ingredients:</strong> ${val.description}</p>
            <p><strong>Instructions:</strong> ${val.priority}</p>
            <div class="d-flex justify-content-between">
              <button class="btn btn-warning btn-sm" onclick="edittask(${val.id})">Edit</button>
              <button class="btn btn-danger btn-sm" onclick="deletetask(${val.id})">Delete</button>
            </div>
          </div>
        </div> 
         </div>
          
          `
    document.getElementById('taskList').innerHTML = tbl;


  })

}
viewRecord();

const deletetask = (id) => {
  let data = Alltask();

  let del = data.filter((val) => {
    if (val.id != id) {
      return val;
    }

  })
  localStorage.setItem('task', JSON.stringify(del));
  alert("Delete record.");
  viewRecord();
}

const edittask = (id) => {
  document.getElementById('add').style.display = "none";
  document.getElementById('edit').style.display = "block";

  let data = Alltask();

  let up = data.find((val) => {
    if (val.id == id) {
      return val;
    }
  })

  document.getElementById('title').value = up.title;
  document.getElementById('dueDate').value = up.dueDate;
  document.getElementById('description').value = up.description;
  document.getElementById('priority').value = up.priority;
  document.getElementById('editid').value = up.id;
}

const updatetask = () => {
  let title = document.getElementById('title').value;
  let dueDate = document.getElementById('dueDate').value;
  let priority = document.getElementById('priority').value;
  let description = document.getElementById('description').value;
  let id = document.getElementById('editid').value;
  let data = Alltask();

  let update = data.map((val) => {
    if (val.id == id) {
      val.title = title;
      val.dueDate = dueDate;
      val.priority = priority;
      val.description = description;
    }
    return val;
  })
  localStorage.setItem('task', JSON.stringify(update));
  alert("Edit suceefully ..");
  document.getElementById('title').value = " ";
  document.getElementById('dueDate').value = " ";
  document.getElementById('priority').value = " ";
  document.getElementById('description').value = " ";

  document.getElementById('edit').style.display = "none";
  document.getElementById('add').style.display = "block";
  viewRecord();

}

const filterByPriority = () => {
  const filter = document.getElementById("priorityFilter").value;
  const data = Alltask();

  const filtered = filter === "all" ? data : data.filter(task => task.priority === filter);

  let tbl = "";

  if (filtered.length === 0) {
    document.getElementById('taskList').innerHTML = '<p class="text-center">No tasks found.</p>';
    return;
  }

  filtered.forEach((val) => {
    tbl += `
      <div class="col-md-4 mb-4">
        <div class="card h-100 shadow ${getPriorityClass(val.priority)}">
          <div class="card-body">
            <h5 class="card-title">${val.title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${val.dueDate}</h6>
            <p><strong>Description:</strong> ${val.description}</p>
            <p><strong>Priority:</strong> ${val.priority}</p>
            <div class="d-flex justify-content-between">
              <button class="btn btn-warning btn-sm" onclick="edittask(${val.id})">Edit</button>
              <button class="btn btn-danger btn-sm" onclick="deletetask(${val.id})">Delete</button>
            </div>
          </div>
        </div>
      </div>
    `;
  });

  document.getElementById('taskList').innerHTML = tbl;
}
const getPriorityClass = (priority) => {
  return priority === "low" ? "priority-low" :
         priority === "medium" ? "priority-medium" : "priority-high";
}



