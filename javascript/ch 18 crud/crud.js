const allrecord = () => {
    return JSON.parse(localStorage.getItem('ok')) || [];
}


const addRecord = () => {
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;

    let row = {
        id: Math.floor(Math.random() * 10),
        name: name,
        phone: phone
    }
    let data = [...allrecord(), row];
    localStorage.setItem("ok", JSON.stringify(data));
    document.getElementById("name").value = '';
    document.getElementById("phone").value = '';
    viewRecord();
}

const viewRecord = () => {
    let tbl = "";

    document.getElementById('edit').style.display = 'none';
    document.getElementById('add').style.display = 'block';
    allrecord().map((val, index) => {
        tbl += `
            <tr>
                <td>${val.id}</td>
                <td>${val.name}</td>
                <td>${val.phone}</td>
                <td>
                <button onclick="deleteRecord(${val.id})">Delete</button>
                <button onclick="editRecord(${val.id})">Edit</button>
                    
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
    viewRecord();
}

const editRecord = (id) => {
    document.getElementById('edit').style.display = 'block';
    document.getElementById('add').style.display = 'none';


    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;

    let data = allrecord();
    let up = data.find((val) => {
        if (val.id == id) {
            name = name;
            phone = phone;
            return val;
        }
    })

    document.getElementById('name').value = up.name;
    document.getElementById('phone').value = up.phone;
    document.getElementById('search').value = up.id;
}

const updateRecord = () => {
    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;
    let id = document.getElementById('search').value;

    let data = allrecord();
    let up = data.find((val) => {
        if (val.id == id) {
            val.name = name;
            val.phone = phone;
            return val;
        }
    })

    localStorage.setItem("ok", JSON.stringify(data));
    alert('updated');
    document.getElementById('name').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('search').value = '';
    viewRecord();

}