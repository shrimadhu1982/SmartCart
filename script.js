let count = 0;

function addToCart() {
    count++;
    alert("Item added to cart!");
    document.getElementById("cart-count").innerText = count;
}

function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name === "" || email === "") {
        alert("Please fill all fields");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}