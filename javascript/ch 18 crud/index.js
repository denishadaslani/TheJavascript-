const allrecord = () => {
    return JSON.parse(localStorage.getItem("users")) || [];
}


let user = [];

const addRecord = () => {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let gender = document.querySelector("input[name='gender']:checked").value;
    let city = document.getElementById("city").value;
    let language = document.querySelectorAll("input[name='language']:checked");

    let arr = [];
    language.forEach((val) => {
        if (val.checked) {
            arr.push(val.value);
        }
    })
    let row = {
        id: Math.floor(Math.random() * 10000),
        name: name,
        email: email,
        phone: phone,
        gender: gender,
        city: city,
        language: arr
    }

    let ans = [...allrecord(), row];

    localStorage.setItem("users", JSON.stringify(ans));

    document.getElementById("name").value = '';
    document.getElementById("email").value = '';
    document.getElementById("phone").value = '';

    document.querySelector("input[name='gender']:checked").checked = false;
    document.getElementById("city").value = '';
    document.getElementById("language").value = '';


    language.forEach((val) => {
        if (val.checked) {
            val.checked = false;
        }
    })

    viewRecord();
}

const viewRecord = () => {
    let tbl = "";


    allrecord().map((val) => {
        tbl +=
            `
            <tr>
                <td>${val.id}</td>
                <td>${val.name}</td>
                <td>${val.email}</td>
                <td>${val.phone}</td>
                <td>${val.gender}</td>
                <td>${val.city}</td>
                <td>${val.language}</td>
                <td>
                <button onclick="deleteRecord(${val.id})">Delete</button> ||
              
                
                </td>

                
            </tr>
            `
    })
    document.getElementById("viewRecord").innerHTML = tbl;

}
viewRecord();


const deleteRecord = (id) => {
    let data = allrecord();

    let ans = data.filter((val) => {
        if (val.id != id) {
            return val;
        }

    })

    localStorage.setItem("users", JSON.stringify(ans));
    viewRecord();

}





