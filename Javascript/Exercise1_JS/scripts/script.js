function addProduct() {
    //get input
    var name = document.getElementById("product_name").value;
    console.log(name);
    //check length input
    if (name.trim().length == 0) {
        alert("Product name is null");
        return;
    }
    if (name.length > 20) {
        alert("Product name can not more than 20 characters");
        return;
    }

    var list_product = document.getElementById("list_product");
    var parent = document.createElement("div");
    parent.setAttribute("class", "node");

    //check available
    var chil = list_product.children;
    var i;
    for (i = 0; i < chil.length; i++) {
        if (chil[i].children[0].innerHTML == name) {
            alert("Product is available");
            return;
        }
    }
    //remove text in text box
    document.getElementById("product_name").value = "";
    //create node
    var x = document.createElement("p");
    x.setAttribute("id", "product-js");
    x.setAttribute("class", "product-js");
    x.innerHTML = name;

    var close = document.createElement("img");
    close.setAttribute("class", "close-js");
    close.setAttribute("src", "images/close.png");
    //set event click button delete
    close.onclick = function() {
        var deleted = close.parentNode;
        var parentDelete = deleted.parentNode;
        parentDelete.removeChild(deleted);
    }
    //add product to list
    parent.appendChild(x);
    parent.appendChild(close);
    list_product.appendChild(parent);
}