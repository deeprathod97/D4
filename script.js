document.addEventListener('DOMContentLoaded', function() {
    const signInButton = document.querySelector('.sign-in button');
    
    signInButton.addEventListener('click', function() {
        const username = document.querySelector('input[type="text"]').value;
        const password = document.querySelector('input[type="password"]').value;
        
        if (username === 'admin' && password === 'admin') {
            alert('Welcome, ' + username + '!');
        } else {
            alert('Incorrect username or password.');
        }
    });
});
