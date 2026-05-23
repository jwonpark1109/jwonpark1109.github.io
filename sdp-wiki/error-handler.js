// error-handler.js
window.addEventListener('error', function (event) {
    if (event.target === window) {
        window.location.href = 'error.html';
    }
}, true);

window.addEventListener('unhandledrejection', function (event) {
    window.location.href = 'error.html';
});
