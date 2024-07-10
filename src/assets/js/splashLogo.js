// JavaScript 코드
document.addEventListener("DOMContentLoaded", function() {
    var logoScreen = document.getElementById("logo-screen");
    var mainContent = document.querySelector("body");
    var images = document.querySelectorAll(".clickable-image");
    var fullscreenImage = document.getElementById("fullscreen-image");
    var fullscreenImageImg = fullscreenImage.querySelector("img");

    // 로고 화면 보이기
    logoScreen.style.display = "flex";

    // 3초 후 로고 화면 숨기기
    setTimeout(function() {
        logoScreen.style.display = "none";
    }, 3000);
});