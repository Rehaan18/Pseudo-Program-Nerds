// app.js - Express API returning list of students

const express = require('express');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Sample student data
const students = [
    {
        id: 1,
        name: "Alice Johnson",
        age: 20,
        course: "Computer Science",
        email: "alice@email.com",
        marks: {
            math: 85,
            science: 92,
            english: 78,
            history: 88
        }
    },
    {
        id: 2,
        name: "Bob Smith",
        age: 19,
        course: "Mathematics",
        email: "bob@email.com",
        marks: {
            math: 76,
            science: 84,
            english: 90,
            history: 82
        }
    },
    {
        id: 3,
        name: "Charlie Brown",
        age: 21,
        course: "Physics",
        email: "charlie@email.com",
        marks: {
            math: 94,
            science: 88,
            english: 85,
            history: 91
        }
    },
    {
        id: 4,
        name: "Diana Prince",
        age: 20,
        course: "Chemistry",
        email: "diana@email.com",
        marks: {
            math: 68,
            science: 75,
            english: 82,
            history: 79
        }
    },
    {
        id: 5,
        name: "Edward King",
        age: 22,
        course: "Biology",
        email: "edward@email.com",
        marks: {
            math: 91,
            science: 87,
            english: 89,
            history: 93
        }
    }
];

// GET route - Return all students
app.get('/students', (req, res) => {
    res.json({
        success: true,
        message: "Students retrieved successfully",
        count: students.length,
        data: students
    });
});

// GET route - Return single student by ID
app.get('/students/:id', (req, res) => {
    const studentId = parseInt(req.params.id);
    const student = students.find(s => s.id === studentId);
    
    if (!student) {
        return res.status(404).json({
            success: false,
            message: "Student not found",
            data: null
        });
    }
    
    res.json({
        success: true,
        message: "Student found",
        data: student
    });
});

// POST route - Add new student
app.post('/students', (req, res) => {
    const { name, age, course, email, marks } = req.body;
    
    // Simple validation
    if (!name || !age || !course || !email) {
        return res.status(400).json({
            success: false,
            message: "Missing required fields: name, age, course, email",
            data: null
        });
    }
    
    const newStudent = {
        id: students.length + 1,
        name,
        age,
        course,
        email,
        marks: marks || { math: 0, science: 0, english: 0, history: 0 }
    };
    
    students.push(newStudent);
    
    res.status(201).json({
        success: true,
        message: "Student added successfully",
        data: newStudent
    });
});

// Root route
app.get('/', (req, res) => {
    res.json({
        message: "Welcome to Student API",
        endpoints: {
            "GET /students": "Get all students",
            "GET /students/:id": "Get student by ID",
            "POST /students": "Add new student"
        }
    });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Express Server running on http://localhost:${PORT}`);
    console.log(`📋 API Endpoints:`);
    console.log(`   GET  http://localhost:${PORT}/students - Get all students`);
    console.log(`   GET  http://localhost:${PORT}/students/:id - Get student by ID`);
    console.log(`   POST http://localhost:${PORT}/students - Add new student`);
});
