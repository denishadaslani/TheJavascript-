const alltask = () => {
    return JSON.parse(localStorage.getItem("task")) || [];
}


const addTask = () => {

    let task = document.getElementById("Inputtask").value;

    let row = {
        id: Math.floor(Math.random() * 1000),
        task: task
    };
    let data = [...alltask(), row];
    localStorage.setItem("task", JSON.stringify(data));
    alert("task add sucessfully");
    viewuser();
    document.getElementById("Inputtask").value = "";
}

const viewuser = () => {
    let tbl = "";
    let data = alltask();
    data.map((val) => {
        tbl += `
          <li>
          ${val.task}
          <div>  
        <button class="btn btn-sm btn-delete" onclick="deleteTask(${val.id})">❌</button>
        <button class="btn btn-sm btn-check-done" onclick="editTask(${val.id})">✔️</button>
     </div>  
</li>  
        `
    });
    localStorage.setItem("task", JSON.stringify(data));
    document.getElementById("viewuser").innerHTML = tbl;
}

viewuser();

const deleteTask = (id) => {
    let data = alltask();
    let del = data.filter((val) => {
        return val.id !== id;
    })
    localStorage.setItem("task", JSON.stringify(del));
    alert("task deleted successfully");
    viewuser();

}

const editTask = (id) => {
    let data = alltask();
    let edit = data.find((val) => {
        if (val.id == id) {
            return val;
        }
    })
    document.getElementById("Inputtask").value = edit.task;
    document.getElementById("search").value = edit.id;
}

const updateTask = () => {
    let task = document.getElementById("Inputtask").value;
    let id = document.getElementById("search").value;
    let data = alltask();
    let up = data.find((val) => {
        if (val.id == id) {
            val.task = task;
            return val;
        }
    })
    localStorage.setItem("task", JSON.stringify(data));
    alert("task updated successfully");
    document.getElementById("Inputtask").value = '';
    viewuser();
}

const searchuser = () => {
    let task = document.getElementById("Inputtask").value;
    let data = alltask();
    let search = data.filter((val) => {
        return val.task.includes(task);
    });
    let tbl = "";
    search.map((val) => {
        tbl += `
          <li>
          ${val.task}
          <div>  
                <button class="btn btn-sm btn-delete" onclick="deleteTask(${val.id})">❌</button>
                <button class="btn btn-sm btn-check-done" onclick="editTask(${val.id})">✔️</button>
         </div>  
        </li>  
        `
    });

    document.getElementById("viewuser").innerHTML = tbl;



}
searchuser();
const reset = () => {
    let data = alltask();
    localStorage.setItem("task", JSON.stringify(data));
    alert("reset successfully");
    document.getElementById("Inputtask").value = '';
    viewuser();
}