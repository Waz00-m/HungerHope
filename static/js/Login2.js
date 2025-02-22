function toggleForm() {
    document.querySelector('.cont').classList.toggle('s-signup');
}

function signIn() {
    // Set login status in localStorage
    localStorage.setItem('loggedIn', 'true');
    // Redirect to Homepage
    window.location.href = 'Homepage3.html';
}

function signUp() {
    // Set login status in localStorage
    localStorage.setItem('loggedIn', 'true');
    // Redirect to Homepage
    window.location.href = 'Homepage3.html';
}
