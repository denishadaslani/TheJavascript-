const allrecord = [];
const viewuser = () => {

    let tbl = '';
    allrecord.map((val)=>{
        tbl += `
        <tr>
            <td>${val.id}</td>
            <td>${val.task}</td>
        </tr>
        `
    })
    document.getElementById('viewuser').innerHTML = tbl;

}