// Grab all the form elements using their IDs
const productNode = document.getElementById("product");
const quantityNode = document.getElementById("quantity");
const addressNode = document.getElementById("address");
const contactNode = document.getElementById("contact");
const emailNode = document.getElementById("email");
const formNode = document.getElementById("orderForm");

// Error messages placeholders
const errorNode1 = document.getElementById("error1");
const errorNode2 = document.getElementById("error2");
const errorNode3 = document.getElementById("error3");
const errorNode4 = document.getElementById("error4");
const errorNode5 = document.getElementById("error5");
const errorNode6 = document.getElementById("error6");

const requireMessage = "This field is required";


const contactPattern = new RegExp("^[0-9]{10}$");
const emailPattern = new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$");

const invalidBorder = "4px solid red";
const validBorder = "4px solid green";

function validateProduct() {
    errorNode1.textContent = "";
    const product = productNode.value;
    productNode.style.border = invalidBorder;
    if (product === "") {
        errorNode1.textContent = requireMessage;
        return false;
    } else {
        productNode.style.border = validBorder;
        return true;
    }
}

function validateQuantity() {
    errorNode2.textContent = "";
    const quantity = quantityNode.value;
    quantityNode.style.border = invalidBorder;
    if (quantity === "") {
        errorNode2.textContent = requireMessage;
        return false;
    } else if (quantity < 1) {
        errorNode2.textContent = "Quantity must be greater than zero.";
        return false;
    } else {
        quantityNode.style.border = validBorder;
        return true;
    }
}

function validateAddress() {
    errorNode3.textContent = "";
    const address = addressNode.value;
    addressNode.style.border = invalidBorder;
    if (address === "") {
        errorNode3.textContent = requireMessage;
        return false;
    } else {
        addressNode.style.border = validBorder;
        return true;
    }
}

function validateContact() {
    errorNode4.textContent = "";
    const contact = contactNode.value;
    contactNode.style.border = invalidBorder;
    if (contact === "") {
        errorNode4.textContent = requireMessage;
        return false;
    } else if (!contactPattern.test(contact)) {
        errorNode4.textContent = "Please enter a valid contact number.";
        return false;
    } else {
        contactNode.style.border = validBorder;
        return true;
    }
}

function validateEmail() {
    errorNode5.textContent = "";
    const email = emailNode.value;
    emailNode.style.border = invalidBorder;
    if (email === "") {
        errorNode5.textContent = requireMessage;
        return false;
    } else if (!emailPattern.test(email)) {
        errorNode5.textContent = "Please enter a valid email.";
        return false;
    } else {
        emailNode.style.border = validBorder;
        return true;
    }
}



function validateAll() {
    const state1 = validateProduct();
    const state2 = validateQuantity();
    const state3 = validateAddress();
    const state4 = validateContact();
    const state5 = validateEmail();
   

    return state1 && state2 && state3 && state4 && state5;
}

// Add event listeners
productNode.addEventListener('keyup', validateProduct);
quantityNode.addEventListener('keyup', validateQuantity);
addressNode.addEventListener('keyup', validateAddress);
contactNode.addEventListener('keyup', validateContact);
emailNode.addEventListener('keyup', validateEmail);
formNode.addEventListener('submit', (e) => {
    if (!validateAll()) {
        e.preventDefault(); // Prevent form submission if validation fails
    }
});



    function validateAll() {
       
        let coffee = document.getElementById('coffee').value;
        let quantity = document.getElementById('quantity').value;
        let address = document.getElementById('address').value;
        let contact = document.getElementById('contact').value;
        let email = document.getElementById('email').value;

       
        if (!coffee || quantity <= 0 || !address || contact.length !== 10 || !email) {
            alert("Please fill out all fields correctly.");
            return false; 
        }
        alert("Order placed successfully!");
        return true; 
    }