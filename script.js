const toggleSwitch = document.querySelector('.l');
const helloFont = document.querySelector('.helloText');

toggleSwitch.addEventListener('change', function() {
    if (this.checked) {
        document.body.style.backgroundColor = '#f5fffa';
        helloFont.style.color = '#21251f';
    } else {
        // Toggle is unchecked, revert to original colors
        document.body.style.backgroundColor = '#21251f';
        helloFont.style.color = '#a3fda1';
    }
});