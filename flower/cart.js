const allcart = () => {
    return JSON.parse(localStorage.getItem('cart'));
}

const getcarts = () => {
    let total = 0;

    let data = allcart();
    let tbl = "";
    data.map((val) => {

        total += val.price * val.qty;
        const { id, name, price, image, qty } = val;

        tbl += `
                 <tr>
          <td class="d-flex align-items-center gap-2">
            <img src="${image}" class="product-img" alt="Plain">
            <span>${name}</span>
          </td>
          <td>Rs.${price}</td>
          <td>
            <input type="number" class="form-control form-control-sm qty-input mx-auto" value="${qty}" min="1" id ="cartqty_${id}" onchange="updatecart(${id})">
          </td>
          <td>Rs.${price * qty}</td>
          <td>
            <button class="btn btn-danger btn-sm rounded" onclick="DeleteRecord(${id})">Remove</button>
          </td>
        </tr>

        `

    })
    document.getElementById('getdata').innerHTML = tbl;
    document.getElementById('total').innerHTML = `Total Rs.${total}`;

}
getcarts();

const DeleteRecord = (id) => {
    let data = allcart();
    let del = data.filter((val, index) => {
        if (val.id != id) {
            return val;
        }
    })
    localStorage.setItem('cart', JSON.stringify(del));
    alert('Product removed from cart');
    getcarts();
}
const updatecart = (id) => {
    let data = allcart();
    let qty = document.getElementById(`cartqty_${id}`).value;
    let up = data.map((val, index) => {
        if (val.id == id) {
            val.qty = parseInt(qty);
        }
        return val;
    })
    localStorage.setItem('cart', JSON.stringify(up));
    getcarts();

}

const remove = () => {

    localStorage.setItem('cart', JSON.stringify([]));
    alert('Checkout Successfully');
    getcarts();
}