const allrecord = () => {
    return JSON.parse(localStorage.getItem('ok')) || [];
}

const AddRecord = () => {
    let name = document.getElementById('name').value;
    let price = document.getElementById('price').value;

    let row = {
        id: Math.floor(Math.random() * 100),
        name: name,
        price: price
    }
    let old = [...allrecord(), row];
    localStorage.setItem('ok', JSON.stringify(old));
    alert("Record ADD sucessfully")
    document.getElementById('name').value = '';
    document.getElementById('price').value = '';
    viewRecord();
}

const viewRecord = () => {
    let tbl = "";
    document.getElementById('Edit').style.display = 'none';
    document.getElementById('Add').style.display = 'block';
    allrecord().map((val) => {
        tbl += `
            <tr>
                <td>${val.id}</td>
                <td>${val.name}</td>
                <td>${val.price}</td>
                <td>
                <button onclick="deleteRecord(${val.id})">Delete</button>
                <button onclick="editRecord(${val.id})">Edit</button>
                </td>

            </tr>
            
        `
    })
    document.getElementById('viewRecord').innerHTML = tbl;
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
    alert("record delete sucessfully")
    viewRecord();
}

const editRecord = (id) => {
    document.getElementById('Edit').style.display = 'block';
    document.getElementById('Add').style.display = 'none';


    let name = document.getElementById('name').value;
    let price = document.getElementById('price').value;

    let data = allrecord();
    let up = data.find((val) => {
        if (val.id == id) {
            name = name;
            price = price;
            return val;
        }
    })

    document.getElementById('name').value = up.name;
    document.getElementById('price').value = up.price;
    document.getElementById('search').value = up.id;
}

const UpdateRecord = () => {
    let name = document.getElementById('name').value;
    let price = document.getElementById('price').value;
    let id = document.getElementById('search').value;

    let data = allrecord();
    let up = data.find((val) => {
        if (val.id == id) {
            val.name = name;
            val.price = price;
            return val;
        }
    })

    localStorage.setItem("ok", JSON.stringify(data));
    alert('updated');
    document.getElementById('name').value = '';
    document.getElementById('price').value = '';
    document.getElementById('search').value = '';
    viewRecord();
}