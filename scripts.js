// document.querySelector('.email-form').addEventListener('submit', function(event) {
//     event.preventDefault();
//     const email = document.getElementById('email').value;
//     if (email) {
//         alert('Thank you for your interest! We will notify you when we launch.');
//         this.reset();
//     }
// });


function startCountdown() {
    const launchDate = new Date("Jan 1, 2025 00:00:00").getTime();
    const x = setInterval(function() {
        const now = new Date().getTime();
        const distance = launchDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = days < 10 ? "0" + days : days;
        document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
        document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
        document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;

        if (distance < 0) {
            clearInterval(x);
            document.querySelector('.countdown').innerHTML = "We're Live!";
        }
    }, 1000);
}

document.addEventListener('DOMContentLoaded', startCountdown);

document.querySelector('.email-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    if (email) {
        alert('Thank you for your interest! We will notify you when we launch.');
        this.reset();
    }
});
