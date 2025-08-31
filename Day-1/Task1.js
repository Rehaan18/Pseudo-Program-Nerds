// Student object
const student = {
    name: "Muhammad Rehaan",
    age: 20,
    studentId: "0187CS241132",
    major: "Computer Science",
    cgpa: 6.67,
    isActive: true,
    courses: ["JavaScript", "Data Structures", "Web Development"],
    address: {
        city: "New York",
        state: "NY",
        zipCode: "10001"
    }
};

// Print student details using different methods
console.log("=== STUDENT DETAILS ===");
console.log("Name:", student.name);
console.log("Age:", student.age);
console.log("Student ID:", student.studentId);
console.log("Major:", student.major);
console.log("GPA:", student.gpa);
console.log("Active Status:", student.isActive);

// Print array of courses
console.log("Courses:", student.courses.join(", "));

// Print nested object (address)
console.log("Address:", student.address.city + ", " + student.address.state + " " + student.address.zipCode);

// Alternative: Print entire object
console.log("\n=== COMPLETE STUDENT OBJECT ===");
console.log(student);

// Using template literals (ES6)
console.log("\n=== FORMATTED OUTPUT ===");
console.log(`Student: ${student.name} (ID: ${student.studentId})`);
console.log(`${student.age} years old, studying ${student.major}`);
console.log(`Current GPA: ${student.cgpa}`);
console.log(`Location: ${student.address.city}, ${student.address.state}`);
