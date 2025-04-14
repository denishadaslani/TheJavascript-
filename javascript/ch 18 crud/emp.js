const allrecord = () => {
    return JSON.parse(localStorage.getItem("ok")) || [];
}

const addRecord = () => {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let city = document.getElementById("city").value;
    let salary = document.getElementById("salary").value;
    let degi = document.getElementById("degi").value;
    let dob = document.getElementById("dob").value;

    let row = {
        id: Math.floor(Math.random() * 100),
        name: name,
        email: email,
        city: city,
        salary: salary,
        degi: degi,
        dob: dob
    }
    let data = [...allrecord(), row];
    localStorage.setItem("ok", JSON.stringify(data));
    alert("record added successfully");
    viewRecord();
    document.getElementById("name").value = '';
    document.getElementById("email").value = '';
    document.getElementById("city").value = '';
    document.getElementById("salary").value = '';
    document.getElementById("degi").value = '';
    document.getElementById("dob").value = '';
}

const viewRecord = () => {
    let tbl = '';
    document.getElementById('edit').style.display = 'none';
    document.getElementById('add').style.display = 'block';
    allrecord().map((val) => {
        tbl += `
            <tr>
                <td>${val.id}</td>
                <td>${val.name}</td>
                <td>${val.email}</td>
                <td>${val.city}</td>
                <td>${val.salary}</td>
                <td>${val.degi}</td>
                <td>${val.dob}</td>
                <td>
                <button class="btn btn-danger" onclick="deleteRecord(${val.id})">Delete</button>
               
                <button type="button" onclick="editRecord(${val.id})" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
                 edit
            </button>
                </td>
            </tr>
        `
    })
    document.getElementById("viewRecord").innerHTML = tbl;
}
viewRecord();

const deleteRecord = (id) => {
    let data = allrecord();
    let del = data.filter((val) => {
        if (val.id != id) {
            return val;
        }
    })
    localStorage.setItem("ok", JSON.stringify(del));
    alert("record deleted successfully");
    viewRecord();
}

const editRecord = (id) => {
    document.getElementById('edit').style.display = 'block';
    document.getElementById('add').style.display = 'none';

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let city = document.getElementById('city').value;
    let salary = document.getElementById('salary').value;
    let degi = document.getElementById('degi').value;
    let dob = document.getElementById('dob').value;

    let data = allrecord();

    let up = data.find((val) => {
        if (val.id == id) {
            name = name;
            email = email;
            city = city;
            salary = salary;
            degi = degi;
            dob = dob;

            return val;
        }
    })
    localStorage.setItem("ok", JSON.stringify(data));
    document.getElementById('name').value = up.name;
    document.getElementById('email').value = up.email;
    document.getElementById('city').value = up.city;
    document.getElementById('salary').value = up.salary;
    document.getElementById('degi').value = up.degi;
    document.getElementById('dob').value = up.dob;
    document.getElementById('search').value = up.id;
}

const updateRecord = () => {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let city = document.getElementById('city').value;
    let salary = document.getElementById('salary').value;
    let degi = document.getElementById('degi').value;
    let dob = document.getElementById('dob').value;
    let id = document.getElementById('search').value;

    let data = allrecord();

    let up = data.find((val) => {
        if (val.id == id) {
            val.name = name;
            val.email = email;
            val.city = city;
            val.salary = salary;
            val.degi = degi;
            val.dob = dob;
            return val;
        }
    })
    localStorage.setItem('ok', JSON.stringify(data));
    alert("record updated successfully");
    viewRecord();
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('city').value = '';
    document.getElementById('salary').value = '';
    document.getElementById('degi').value = '';
    document.getElementById('dob').value = '';
    document.getElementById('search').value = '';

}