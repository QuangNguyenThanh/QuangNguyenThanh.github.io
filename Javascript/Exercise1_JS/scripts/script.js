function addProduct() {
    //get input
    var name = document.getElementById("product_name-js").value;

    //check length input
    if (name.trim().length == 0) {
        alert("Product name is null");
        return;
    }
    if (name.length > 20) {
        alert("Product name can not more than 20 characters");
        return;
    }

    var list_product = document.getElementById("list_product-js");
    var parent = document.createElement("div");
    parent.setAttribute("class", "node-js");

    //check available
    var chil = list_product.children;
    var i;
    for (i = 0; i < chil.length; i++) {
        if (chil[i].children[1].innerHTML == name) {
            alert("Product is available");
            return;
        }
    }

    //create node
    var index = document.createElement("p");
    index.setAttribute("class", "index-js");
    index.innerHTML =  chil.length + 1;

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
        var dir = deleted.children[0].innerHTML;

        //set index
        for (i = dir - 1; i < parentDelete.children.length; i++) {
            parentDelete.children[i].children[0].innerHTML = i + 1;
        }
    }
    
    //add product to list
    parent.appendChild(index);
    parent.appendChild(x);
    parent.appendChild(close);
    list_product.appendChild(parent);
}