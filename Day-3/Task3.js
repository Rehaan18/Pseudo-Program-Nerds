// Task3.js - Single Student Marks Calculator using ONLY MAP method

// Single student data
const student = {
    id: 132,
    name: "Muhammad Rehaan",
    age: 18,
    marks: {
        math: 85,
        science: 92,
        english: 78,
        history: 88
    }
};

console.log("=== STUDENT MARKS CALCULATOR - SINGLE STUDENT ===");
console.log(`Student: ${student.name} (ID: ${student.id}, Age: ${student.age})`);
console.log();

// 1. MAP: Convert marks object to array and analyze each subject
const subjectEntries = Object.entries(student.marks);

const subjectAnalysis = subjectEntries.map(([subject, marks]) => {
    let grade, performance;
    
    if (marks >= 90) {
        grade = "A+";
        performance = "Excellent";
    } else if (marks >= 80) {
        grade = "A";
        performance = "Very Good";
    } else if (marks >= 70) {
        grade = "B";
        performance = "Good";
    } else if (marks >= 60) {
        grade = "C";
        performance = "Average";
    } else {
        grade = "D";
        performance = "Poor";
    }
    
    return {
        subject: subject.charAt(0).toUpperCase() + subject.slice(1),
        marks: marks,
        grade: grade,
        performance: performance
    };
});

console.log("=== SUBJECT-WISE ANALYSIS ===");
subjectAnalysis.map((analysis, index) => {
    console.log(`${index + 1}. ${analysis.subject}: ${analysis.marks}/100`);
    console.log(`   Grade: ${analysis.grade} | Performance: ${analysis.performance}`);
    return analysis;
});

console.log();

// 2. MAP: Calculate overall statistics using map
const marksArray = Object.values(student.marks);

const overallStats = [student].map(s => {
    // Calculate total using map
    let total = 0;
    marksArray.map(mark => {
        total += mark;
        return mark;
    });
    
    const average = total / marksArray.length;
    const percentage = (total / 400) * 100;
    
    // Find best and worst subjects using map
    let bestSubject = subjectAnalysis[0];
    let worstSubject = subjectAnalysis[0];
    
    subjectAnalysis.map(subject => {
        if (subject.marks > bestSubject.marks) {
            bestSubject = subject;
        }
        if (subject.marks < worstSubject.marks) {
            worstSubject = subject;
        }
        return subject;
    });
    
    // Overall grade
    let overallGrade;
    if (percentage >= 90) {
        overallGrade = "A+";
    } else if (percentage >= 80) {
        overallGrade = "A";
    } else if (percentage >= 70) {
        overallGrade = "B";
    } else {
        overallGrade = "C";
    }
    
    return {
        totalMarks: total,
        average: average.toFixed(1),
        percentage: percentage.toFixed(2),
        overallGrade: overallGrade,
        bestSubject: bestSubject,
        worstSubject: worstSubject
    };
});

const stats = overallStats[0];

console.log("=== OVERALL PERFORMANCE ===");
console.log(`Total Marks: ${stats.totalMarks}/400`);
console.log(`Average: ${stats.average} marks`);
console.log(`Percentage: ${stats.percentage}%`);
console.log(`Overall Grade: ${stats.overallGrade}`);
console.log(`Best Subject: ${stats.bestSubject.subject} (${stats.bestSubject.marks} marks)`);
console.log(`Needs Work: ${stats.worstSubject.subject} (${stats.worstSubject.marks} marks)`);

console.log();

// 3. MAP: Create grade summary
const gradeSummary = subjectAnalysis.map(subject => `${subject.subject}: ${subject.grade}`);

console.log("=== GRADE SUMMARY ===");
gradeSummary.map(summary => {
    console.log(summary);
    return summary;
});

console.log();

// 4. MAP: Performance report
const performanceReport = subjectAnalysis.map(subject => {
    let improvement;
    if (subject.marks >= 90) {
        improvement = "Maintain excellence!";
    } else if (subject.marks >= 80) {
        improvement = "Push for A+";
    } else {
        improvement = "Focus more on this subject";
    }
    
    return `${subject.subject}: ${improvement}`;
});

console.log("=== IMPROVEMENT SUGGESTIONS ===");
performanceReport.map(report => {
    console.log(report);
    return report;
});
