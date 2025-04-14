let data = {
    "user": [
        {
            "id": 1,
            "name": "Denisha",
            "age": 20
        },
        {
            "id": 2,
            "name": "Ayushi",
            "age": 19
        },
    ],
    "course": [
        {
            "id": 1,
            "email": "denisha@gmail.com",
            "course": "full stack development"
        },
        {
            "id": 2,
            "email": "Ayushi@gmail.com",
            "course": "full stack"
        },
    ],

    "menu": ["home", "about", "contact"]


}

const userlist = () => {
    tbl = "";
    data.user.map((val) => {
        tbl += `
           <tr>
                <td>${val.id}</td>
                <td>${val.name}</td>
                <td>${val.age}</td>
           </tr>

        `

    })
    document.getElementById('userlist').innerHTML = tbl;

}
userlist();

const menu = () => {
    tbl = "";
    data.menu.map((val) => {
        tbl += `
        
           <li>${val}</li>

        `
        document.getElementById('menu').innerHTML = tbl;
    })

}
menu();

const course = () => {
    tbl = "";
    data.course.map((val) => {
        tbl += `
            <tr>
                <td>${val.id}</td>
                <td>${val.email}</td>
                <td>${val.course}</td>
            </tr>

        `
    })
    document.getElementById('courselist').innerHTML = tbl;
}
course();