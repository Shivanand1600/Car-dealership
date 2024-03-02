//NAV-SCROLL-UP-DOWN

let lastScrollTop = 0;

window.addEventListener("scroll", () => {
    let currentScroll = window.pageYOffset;

    if (currentScroll > lastScrollTop) {
        // Scroll down
        document.getElementById("nav").style.top = "-500px";
        document.getElementsByClassName("myCard")[0].style.display = "none"
        document.getElementById("loginText").value = '';
        document.getElementById("loginPass").value = '';

    } else {
        // Scroll up
        document.getElementById("nav").style.top = "0";
        document.getElementsByClassName("myCard")[0].style.display = "none"
        document.getElementById("loginText").value = '';
        document.getElementById("loginPass").value = '';

    }
    lastScrollTop = currentScroll;
});




// CHECK-INPUT-LOGIN-CARD-FIELD

function checkInput() {
    var input1Value = document.getElementById("loginText").value;
    var input2Value = document.getElementById("loginPass").value;

    let prom = new Promise((res, rej) => {
        if (input1Value == '') {
            alert("Login input must be filled!!!");
            rej()
        }
        else {
            res()
        }

    }).then((responce) => {

        new Promise((res, rej) => {
            if (input2Value == '') {
                alert("Password input must be filled!!!");
                rej()
            }
            else {
                res()
            }
        }).then(() => {
            document.getElementsByClassName("myCard")[0].style.display = "none"
            document.getElementById("loginText").value = '';
            document.getElementById("loginPass").value = '';
        })

    })
}



//APPOINMENT-DATE-FIX-INPUT-FIELD-CHECK

function getApp() {
    var inputCheck = document.querySelectorAll(".appInp");
    let checkInp1 = new Promise((res, rej) => {
        if (inputCheck[0].value !== "") {
            res()
        }
        rej(alert("Fill the input fields!!!1"))
    })

    let checkInp2 = new Promise((res1, rej1) => {
        if (inputCheck[1].value !== "") {
            res1()
        }
        else {
            rej1(alert("Fill the input fields!!!2"))
        }
    })

    let checkInp3 = new Promise((res2, rej2) => {
        if (inputCheck[2].value !== "") {
            res2()
        }
        else {
            rej2(alert("Fill the input fields!!!3"))
        }
    })

    let checkInp4 = new Promise((res3, rej3) => {
        if (inputCheck[3].value !== "") {
            res3()
        }
        else {
            rej3(alert("Fill the input fields!!!4"))
        }
    }).then((responce) => {
        let timeGenerator = () => {
            let num = Math.random() * 10
            let round = Math.round(num)
            let timeLength = String(round).length
            if (timeLength < 25) {
                return timeLength
            }
        }
        if (confirm(`Your appointment is fixed on ${inputCheck[3].value} at${timeGenerator} pm`)) {
            inputCheck[0].value = '';
            inputCheck[1].value = '';
            inputCheck[2].value = '';
            inputCheck[3].value = '';
            time = 0;
        }
        else {
            alert("Appointment is cancel!!!")
        }
    })

    async function getappointment() {
        await checkInp1;
        await checkInp2;
        await checkInp3;
        await checkInp4;
    }
    getappointment();

}


//TIME-GENERATOR







//NAVBAR-MID-BUTTONS-SCROLL-TO POSITION

let ele1 = document.getElementsByClassName("navMiddleBtn");
ele1[0].addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
})
ele1[1].addEventListener("click", () => {
    window.scrollTo({ top: 1840, behavior: 'smooth' });
})
document.getElementById("carBtn").addEventListener("click", () => {
    window.scrollTo({ top: 1840, behavior: 'smooth' });
})
ele1[2].addEventListener("click", () => {
    window.scrollTo({ top: 2420, behavior: 'smooth' });
})
ele1[3].addEventListener("click", () => {
    window.scrollTo({ top: 3200, behavior: 'smooth' });
})



//ALL-CARS-SLIDE-CHANGE
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(slideIndex) {
    slides.forEach((slide, index) => {
        if (index === slideIndex) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
    currentSlideIndex = slideIndex;
}

//ALL-CARS-SLIDE-CHANGE-BY-BUTTONS
function btnShowSlide(index) {
    var slides = document.querySelectorAll('.slide');
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[index - 1].style.display = 'block';
}


function changeSlide(data) {
    let nextSlideIndex = currentSlideIndex + data;
    if (nextSlideIndex < 0) {
        nextSlideIndex = slides.length - 1;
    } else if (nextSlideIndex >= slides.length) {
        nextSlideIndex = 0;
    }
    showSlide(nextSlideIndex);
}
showSlide(0);




//LEGAL-DISCLAIMER-NOTATION-SECTION

let ele4 = document.getElementsByClassName("legal")
let ele5 = document.getElementById("downSpan")
let ele6 = document.getElementById("icon")
function getLegal() {
    ele4[0].style.height = "240px"
    ele5.style.top = "0"
    ele6.style.opacity = 0;
}
function getLegalClose() {
    ele4[0].style.height = "60px"
    ele5.style.top = "100%"
    ele6.style.opacity = 1;
}

let clickCount = 0;
function handleClick() {
    clickCount++;
    if (clickCount == 1) {
        getLegal();
    } else if (clickCount == 2) {
        getLegalClose();
        clickCount = 0;
    }
}



//FOOTER-BACK-TO-HOME-BUTTON
let ele7 = document.getElementById("block1")

ele7.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
})




//LOGIN-FORM-BUTTONS

document.getElementsByClassName("btn-53")[0].addEventListener("click", () => {
    document.getElementsByClassName("myCard")[0].style.display = "block"
    document.getElementsByClassName("innerCard")[0].style.transform = "rotateY(0deg)"
})
document.getElementsByClassName("btn-53")[1].addEventListener("click", () => {
    document.getElementsByClassName("myCard")[0].style.display = "block"
    document.getElementsByClassName("innerCard")[0].style.transform = "rotateY(180deg)"
})




