document.querySelector('.email-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    if (email) {
        alert('Thank you for your interest! We will notify you when we launch.');
        this.reset();
    }
});
