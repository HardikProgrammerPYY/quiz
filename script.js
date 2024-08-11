function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        // Save login data in localStorage (for demo purposes)
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        // Hide login container and show quiz container
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('quiz-container').style.display = 'block';
    } else {
        alert('Please enter both username and password');
    }
}

function submitQuiz() {
    const form = document.getElementById('quiz-form');
    const formData = new FormData(form);
    let result = [];
    
    formData.forEach((value, key) => {
        result.push({ question: key, answer: value });
    });

    // Create a CSV file for results
    const csvContent = "data:text/csv;charset=utf-8,"
        + result.map(e => e.question + ',' + e.answer).join('\n');

    // Create a downloadable link and trigger it
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'results.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    alert('Quiz submitted! Results have been saved.');
}
