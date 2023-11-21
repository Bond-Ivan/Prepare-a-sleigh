const errorWindow = document.querySelector('.errorWindow');
let errorFlag;

function windowOrientation() {
    if (window.innerHeight > window.innerWidth) {
        showErrorWindow();
        errorFlag = true;
    } else {
        if (errorFlag) {
            closeErrorWindow();
        }
    }
}

window.addEventListener('resize', windowOrientation);

windowOrientation();

function showErrorWindow() {
    errorWindow.classList.add('errorWindow--active');
}

function closeErrorWindow() {
    errorWindow.classList.remove('errorWindow--active');
}