const toggleSwitch = document.querySelector('.l');
const helloFont = document.querySelector('.helloText');
const hamburgerSwitch = document.querySelector('.hamburger input');
const navFont = document.querySelectorAll('.overlay-content a');

toggleSwitch.addEventListener('change', function() {
    if (this.checked) {
        document.body.style.backgroundColor = '#f5fffa';
        helloFont.style.color = '#21251f';
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
    });
});
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }