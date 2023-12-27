const toggleSwitch = document.querySelector('.l');
const helloFont = document.querySelector('.helloText, .teamWork');
const myProjects = document.querySelector('.myProjects');
const teamWork = document.querySelector('.teamWork');
const aboutTextHeading = document.querySelector('.aboutTextHeading');
const aboutTextName = document.querySelector('.aboutTextName');
const aboutTextText = document.querySelector('.aboutTextText');
const card = document.querySelectorAll('.card');
const hamburgerSwitch = document.querySelector('.hamburger input');
const navFont = document.querySelectorAll('.overlay-content a');


toggleSwitch.addEventListener('change', function() {
    if (this.checked) {
        document.body.style.backgroundColor = '#f5fffa';
        helloFont.style.color = '#21251f';
        myProjects.style.color = '#21251f';
        teamWork.style.color = '#21251f';
        aboutTextHeading.style.color = '#707A7E';
        aboutTextName.style.color = '#495054';
        aboutTextText.style.color = '#816EA7';
        card.forEach(link => {
            link.style.border = '2px solid #925ff0';
        });
        navFont.forEach(link => {
            link.style.color = '#21251f';
        });
        navFont.forEach(link => {
            link.addEventListener('mouseover', function () {
                this.style.color = 'green';
            });
            link.addEventListener('mouseout', function () {
                this.style.color = '#21251f';
            });
        });
    } else {
        // Toggle is unchecked, revert to original colors
        document.body.style.backgroundColor = '#21251f';
        helloFont.style.color = '#a3fda1';
        myProjects.style.color = '#a3fda1';
        teamWork.style.color = '#a3fda1';
        aboutTextHeading.style.color = '#a3fda1';
        aboutTextName.style.color = '#78e276';
        aboutTextText.style.color = '#925ff0';
        card.forEach(link => {
            link.style.border = '2px solid white';
        });
        navFont.forEach(link => {
            link.style.color = '#ffffff';
        });
        navFont.forEach(link => {
            link.addEventListener('mouseover', function () {
                this.style.color = 'red';
            });
            link.addEventListener('mouseout', function () {
                this.style.color = '#ffffff';
            });
        });
    }
});

hamburgerSwitch.addEventListener('change', function() {
    if (this.checked) {
        openNav();
    } else {
        closeNav();
    }
});
navFont.forEach(link => {
    link.addEventListener('click', function () {
        closeNav();
        hamburgerSwitch.click();
    });
});
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    })
}) 

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const msg = document.querySelector(".msg");
const sumbitbtn = document.getElementById("submitbtn");

msg.addEventListener("focus", submsg);

function submsg() {
  sumbitbtn.style.display = "block";
  sumbitbtn.style.animation = "slide 0.5s ease-in-out";
}