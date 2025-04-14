const Allrecord = () => {
    return JSON.parse(localStorage.getItem('user')) || [];
}

const AddRecord = () => {
    let name = document.getElementById('name');
    let email = document.getElementById('email');

    let row = {
        id: Math.floor(Math.random() * 1000),
        name: name.value,
        email: email.value
    }
    let ans = [...Allrecord(), row];
    localStorage.setItem('user', JSON.stringify(ans));
    alert("record add Suceccfully");
    ViewRecord();
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';

}



const ViewRecord = () => {
    let tbl = ''
    document.getElementById('edit').style.display = 'none';
    document.getElementById('add').style.display = 'block';
    Allrecord().map((val, index) => {
        tbl += `
            <tr>
            <td>${val.id}</td>
            <td>${val.name}</td>
            <td>${val.email}</td>
            <td>
                <button onclick="deleteRecord(${val.id})">Delete</button>
                <button onclick="editRecord(${val.id})">Edit</button>
            </td>

            </tr>
            `
    })
    document.getElementById('ViewRecord').innerHTML = tbl;
}
ViewRecord();

const deleteRecord = (id) => {
    let data = Allrecord();
    let del = data.filter((val) => {
        if (val.id != id) {
            return val;
        }
    })

    localStorage.setItem('user', JSON.stringify(del));
    alert("record deleted");
    ViewRecord();
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
}

const editRecord = (id) => {

    document.getElementById('edit').style.display = 'block';
    document.getElementById('add').style.display = 'none';

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;

    let data = Allrecord();
    let up = data.find((val) => {
        if (val.id == id) {
            name = name,
                email = email
            return val;
        }
    })
    document.getElementById('name').value = up.name;
    document.getElementById('email').value = up.email;
    document.getElementById('Search').value = id;
}

const UpdateRecord = () => {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let id = document.getElementById('Search').value;

    let data = Allrecord();

    let update = data.find((val) => {
        if (val.id == id) {
            val.name = name,
                val.email = email
            return val;
        }
    })
    localStorage.setItem('user', JSON.stringify(data));
    alert("record update");
    ViewRecord();
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('Search').value = '';

}