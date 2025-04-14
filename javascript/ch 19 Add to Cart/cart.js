const getallcart = () => {
  return JSON.parse(localStorage.getItem("cart")) || [];
}


const getcart = () => {
  let total = 0;
  let data = getallcart();
  tbl = '';
  data.map((val, index) => {
    total = total + val.price * val.qty;
    const { id, name, price, qty, image } = val;
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
  document.getElementById("getdata").innerHTML = tbl;
  document.getElementById("total").innerHTML = `Total Rs.${total}`
}
getcart();

const updatecart = (id) => {
  let qty = document.getElementById(`cartqty_${id}`).value;
  let data = getallcart();


  let up = data.map((val, index) => {
    if (val.id == id) {
      val.qty = parseInt(qty);
    }
    return val;
  })
  localStorage.setItem("cart", JSON.stringify(up));
  getcart();
}

const DeleteRecord = (id) => {
  let data = getallcart();
  let up = data.filter((val, index) => {
    if (val.id != id) {
      return val;
    }

  })
  localStorage.setItem("cart", JSON.stringify(up));
  alert(" delete record successfully");
  getcart();
}

const checkout = () => {
  localStorage.removeItem("cart");
  alert("checkout successfully");
  window.location.href = "product.html";
}
