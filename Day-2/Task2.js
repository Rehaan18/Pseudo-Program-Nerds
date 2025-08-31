// Task2.js - Find Highest Marks Using For Loop

// Array of student marks
const marks = [85, 92, 78, 96, 88, 73, 91, 87, 94, 82];

console.log("=== FIND HIGHEST MARKS - FOR LOOP METHOD ===");
console.log("Student marks:", marks);
console.log("Number of students:", marks.length);
console.log();

// Function to find highest marks using for loop
function findHighestMarks(marksArray) {
    // Check if array is empty
    if (marksArray.length === 0) {
        console.log("No marks found!");
        return null;
    }
    
    // Start with the first mark as highest
    let highestMark = marksArray[0];
    let topStudentIndex = 0;
    
    console.log("Checking each student's marks:");
    
    // Loop through all marks starting from index 0
    for (let i = 0; i < marksArray.length; i++) {
        let currentMark = marksArray[i];
        
        // Display current student being checked
        console.log(`Student ${i + 1}: ${currentMark} marks`);
        
        // Check if current mark is higher than our current highest
        if (currentMark > highestMark) {
            highestMark = currentMark;
            topStudentIndex = i;
            console.log(`  → New highest found! Student ${i + 1} with ${currentMark} marks`);
        }
    }
    
    return {
        marks: highestMark,
        studentNumber: topStudentIndex + 1,
        studentIndex: topStudentIndex
    };
}

// Call the function and store result
const result = findHighestMarks(marks);


console.log();
console.log("=== FINAL RESULTS ===");
console.log(`Highest marks: ${result.marks}`);
console.log(`Top student: Student #${result.studentNumber}`);
console.log(`Position in array: Index ${result.studentIndex}`);



