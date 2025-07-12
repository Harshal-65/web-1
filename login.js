function showForm(type) {
    document.getElementById('studentForm').classList.remove('active');
    document.getElementById('adminForm').classList.remove('active');
    document.getElementById('studentTab').classList.remove('active');
    document.getElementById('adminTab').classList.remove('active');
    if(type === 'student') {
        document.getElementById('studentForm').classList.add('active');
        document.getElementById('studentTab').classList.add('active');
    } else {
        document.getElementById('adminForm').classList.add('active');
        document.getElementById('adminTab').classList.add('active');
    }
}

function loginStudent(event) {
    event.preventDefault();
    const username = document.getElementById('student-username').value.trim();
    const password = document.getElementById('student-password').value.trim();
    const errorDiv = document.getElementById('studentError');

    // Username validation: min 8 chars, letters and numbers
    if (username.length < 8 || !/[a-zA-Z]/.test(username) || !/[0-9]/.test(username)) {
        errorDiv.textContent = "Username must be at least 8 characters and contain both letters and numbers.";
        return false;
    }

    // Password validation: 1 uppercase, 1 lowercase, 1 number, 1 special char
    if (
        !/[A-Z]/.test(password) ||
        !/[a-z]/.test(password) ||
        !/[0-9]/.test(password) ||
        !/[!@#$%^&*(),.?\":{}|<>]/.test(password)
    ) {
        errorDiv.textContent = "Password must have 1 uppercase, 1 lowercase, 1 number, and 1 special character.";
        return false;
    }

    window.location.href = "index.html";
    return false;
}

function loginAdmin(event) {
    event.preventDefault();
    const username = document.getElementById('admin-username').value.trim();
    const password = document.getElementById('admin-password').value.trim();
    const errorDiv = document.getElementById('adminError');

    // Username validation: min 8 chars, letters and numbers
    if (username.length < 8 || !/[a-zA-Z]/.test(username) || !/[0-9]/.test(username)) {
        errorDiv.textContent = "Username must be at least 8 characters and contain both letters and numbers.";
        return false;
    }

    // Password validation: 1 uppercase, 1 lowercase, 1 number, 1 special char
    if (
        !/[A-Z]/.test(password) ||
        !/[a-z]/.test(password) ||
        !/[0-9]/.test(password) ||
        !/[!@#$%^&*(),.?\":{}|<>]/.test(password)
    ) {
        errorDiv.textContent = "Password must have 1 uppercase, 1 lowercase, 1 number, and 1 special character.";
        return false;
    }

    window.location.href = "admin.html";
    return false;
}