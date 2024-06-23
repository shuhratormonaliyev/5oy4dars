// ==================== 1- misol =================

// const students = [
//     { ism: "Ali", yosh: 20, baholari: [90, 85, 88] },
//     { ism: "Vali", yosh: 21, baholari: [85, 87, 90] },
//     { ism: "Sami", yosh: 22, baholari: [88, 92, 84] }
// ];

// function result(students) {
//     let bestStudent = null;
//     let highestAverage = 0;

//     students.forEach(student => {
//         const averageGrade = student.baholari.reduce((sum, grade) => sum + grade, 0) / student.baholari.length;
        
//         if (averageGrade > highestAverage) {
//             highestAverage = averageGrade;
//             bestStudent = student.ism;
//         }
//     });

//     return bestStudent;
// }

// console.log(result(students));



// ==================== 2- misol =================

// ==================== 3- misol =================

// const students = [
//     { ism: "Ali", yosh: 20, fanlari: ["Matematika", "Fizika"] },
//     { ism: "Vali", yosh: 21, fanlari: ["Matematika", "Informatika"] },
//     { ism: "Sami", yosh: 22, fanlari: ["Fizika", "Informatika"] }
// ];

// function fan(students) {
//     const fanlar = {};

//     for (let student of students) {
//         for (let fan of student.fanlari) {
//             if (fanlar[fan]) {
//                 fanlar[fan]++;
//             } else {
//                 fanlar[fan] = 1;
//             }
//         }
//     }

//     return fanlar;
// }
// console.log((students));


// ==================== 4- misol =================



