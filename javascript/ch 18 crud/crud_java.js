
const AllRecord = () => {
    return JSON.parse(localStorage.getItem('done')) || [];
}
const addRecord = () => {
    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;

    let row = {
        id: Math.floor(Math.random() * 100),
        name: name,
        phone: phone
    }
    let user = [...AllRecord(), row];
    localStorage.setItem('done', JSON.stringify(user));
    alert('record add successfully');
    viewRecord();
    document.getElementById('name').value = '';
    document.getElementById('phone').value = '';

}

const viewRecord = () => {
    tbl = '';
    document.getElementById('add').style.display = 'block';
    document.getElementById('edit').style.display = 'none';
    AllRecord().map((val) => {
        tbl += `
            <tr>
                <td>${val.id}</td>
                <td>${val.name}</td>
                <td>${val.phone}</td>
                <td>
                <button id="delete" onclick="DeleteRecord(${val.id})">Delete</button>
                <button id="edit" onclick="editRecord(${val.id})">Edit</button>
                </td>

            </tr>
        `
    })
    document.getElementById('viewRecord').innerHTML = tbl;
}
viewRecord();

const DeleteRecord = (id) => {
    let data = AllRecord();

    let del = data.filter((val, index) => {
        if (val.id != id) {
            return val;
        }
    })

    localStorage.setItem('done', JSON.stringify(del));
    alert("record delete sucessfully");
    viewRecord();
    document.getElementById('name').value = '';
    document.getElementById('phone').value = '';
}

const editRecord = (id) => {
    document.getElementById('edit').style.display = 'block';
    document.getElementById('add').style.display = 'none';

    let name = document.getElementById('name').value
    let phone = document.getElementById('phone').value

    let data = AllRecord();

    let up = data.find((val) => {
        if (val.id == id) {
            name = name,
                phone = phone
            return val;
        }
    })
    document.getElementById('name').value = up.name;
    document.getElementById('phone').value = up.phone;
    document.getElementById('search').value = id;
}

const updateRecord = () => {
    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;
    let id = document.getElementById('search').value;

    let data = AllRecord();
    let up = data.find((val) => {
        if (val.id == id) {
            val.name = name,
                val.phone = phone
            return val;
        }
    })
    localStorage.setItem('done', JSON.stringify(data));
    alert("record update");
    viewRecord();
    document.getElementById('name').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('search').value = '';

}