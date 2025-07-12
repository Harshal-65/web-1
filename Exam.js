// Sample exam data
let exams = [
    { subject: "Maths", date: "2025-07-15", time: "10:00", location: "Room 101", semester: "2" },
    { subject: "Physics", date: "2025-07-17", time: "14:00", location: "Room 102", semester: "2" }
];

function getRole() {
    return localStorage.getItem("role") || "student";
}

function renderExams() {
    const tbody = document.getElementById('examTableBody');
    tbody.innerHTML = "";
    exams.forEach((exam, idx) => {
        let row = `<tr>
            <td>${exam.subject}</td>
            <td>${exam.date}</td>
            <td>${exam.time}</td>
            <td>${exam.location}</td>
            <td>${exam.semester}</td>`;
        if (getRole() === "admin") {
            row += `<td><button class="button admin-only" onclick="editExam(${idx})">Edit</button></td>
                    <td><button class="button admin-only" onclick="deleteExam(${idx})">Delete</button></td>`;
        } else {
            row += `<td class="admin-only"></td><td class="admin-only"></td>`;
        }
        row += `</tr>`;
        tbody.innerHTML += row;
    });
}

function showExamForm(editIdx = null) {
    if (getRole() !== "admin") {
        alert("Only admin can add or edit exams.");
        return;
    }
    document.getElementById('examFormDiv').classList.remove('hidden');
    if (editIdx !== null) {
        // Edit mode
        const exam = exams[editIdx];
        document.getElementById('subject').value = exam.subject;
        document.getElementById('date').value = exam.date;
        document.getElementById('time').value = exam.time;
        document.getElementById('location').value = exam.location;
        document.getElementById('semester').value = exam.semester;
        document.getElementById('editIndex').value = editIdx;
    } else {
        // Add mode
        document.getElementById('examForm').reset();
        document.getElementById('editIndex').value = "";
    }
}

function hideExamForm() {
    document.getElementById('examFormDiv').classList.add('hidden');
    document.getElementById('examForm').reset();
    document.getElementById('editIndex').value = "";
}

function saveExam(event) {
    event.preventDefault();
    if (getRole() !== "admin") {
        alert("Only admin can add or edit exams.");
        hideExamForm();
        return false;
    }
    const subject = document.getElementById('subject').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const location = document.getElementById('location').value;
    const semester = document.getElementById('semester').value;
    const editIdx = document.getElementById('editIndex').value;

    const examObj = { subject, date, time, location, semester };

    if (editIdx === "") {
        exams.push(examObj);
    } else {
        exams[editIdx] = examObj;
    }
    hideExamForm();
    renderExams();
    return false;
}

function editExam(idx) {
    showExamForm(idx);
}

function deleteExam(idx) {
    if (getRole() !== "admin") {
        alert("Only admin can delete exams.");
        return;
    }
    if (confirm("Are you sure you want to delete this exam?")) {
        exams.splice(idx, 1);
        renderExams();
    }
}

// Role-based UI control
window.onload = function() {
    renderExams();
    if (getRole() !== "admin") {
        // Hide admin-only controls for students
        document.querySelectorAll('.admin-only').forEach(el => el.style.display = 'none');
        document.getElementById('examFormDiv').style.display = 'none';
    }
};