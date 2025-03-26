let x = 5;
let y = 7;
let z = x + y;
console.log(z);

let A = "Hello ";
let B = "world!";
let C = A + B;
console.log(C);

function SumNPrint(x1, x2) {
    let x3 = x1 + x2;
    console.log(x3);
    return x3;
}

SumNPrint(x, y);
SumNPrint(A, B);

if (C.length > z) {
    console.log(C);
} else if (C.length < z) {
    console.log(z);
} else {
    console.log("good job!");
}

let L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
let L2 = ["Apple", "Banana", "Kiwi", "Orange"];

function findTheBanana(array) {
    array.forEach(element => {
        if (element == "Banana") {
            alert("We found the banana in the array!");
        }
    });
}

// findTheBanana(L1);
// findTheBanana(L2);

function greetingFunc() {
    let d = new Date();
    let h = d.getHours();
    let greeting;

    if (h >= 5 && h < 12) {
        greeting = "Good morning";
    } else if (h >= 12 && h < 18) {
        greeting = "Good afternoon";
    } else if (h >= 18 && h < 20) {
        greeting = "Good evening";
    } else {
        greeting = "Good night";
    }

    let E = document.getElementById("greeting");
    E.innerHTML = greeting + ", my name is Zdenek";
}

if (window.location.href.includes("index.html")) {
    greetingFunc();
}

function addYear() {
    const date = new Date();
    const year = date.getFullYear();
    const yearElement = document.getElementById("copyYear")
    yearElement.innerHTML = "© " + year + " designed and coded by Zdenek Rusek Kotva";
}

// function showList() {
//     document.getElementById("funList").style.display = "block";
//     document.getElementById("showListButton").style.display = "none";
// }

$("#readMoreButton").click(function () {
    $("#fullBio").toggle();
    if ($("#readMoreButton").text() === "Read More") {
        $("#readMoreButton").text("Read Less");
    } else {
        $("#readMoreButton").text("Read More");
    }
});

function validate() {
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var comment = document.getElementById("comment");
    var validationMessage = document.getElementById("validationMessage");
    if (!name.checkValidity() || !email.checkValidity() || !comment.checkValidity()) {
        validationMessage.innerHTML = "Please fill out the form correctly so I can get back to you."
    }
}

function getAdvice() {
    fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then(data => {
        document.getElementById("adviceText").innerText = data.slip.advice;
    })
    .catch(error => {
        console.error("Error fetching advice", error);
        document.getElementById("adviceText").innerText = "Something went wrong. Please try again.";
    });
}

function toggleMenu() {
    var navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("active");
}

function highlightActiveLink() {
    var currentPath = window.location.pathname;
    var navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(navLink => {
        if(navLink.href.includes(currentPath)) {
            navLink.classList.add("active");
        }
    })
}