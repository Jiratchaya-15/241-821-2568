/**
let age1=25;
let age2=30;
let age3=35;
console.log(age1, age2, age3);//25 30 35

let ages=[25,30,35];
console.log(ages);//[25,30,35]
console.log(ages[1]);//30

//แทนคที่ค่าในอาเรย์
ages=[40,45,50];
console.log(ages);//[40,45,50]

//ต่ออาเรย์
ages.push(55);
console.log(ages);//[40,45,50,55]

//ความยาวของอาเรย์
console.log(ages.length);//4

//ลบสมาชิกตัวสุดท้ายของอาเรย์
ages.pop();
console.log(ages);//[40,45,50]

if(ages.includes(45)){//true
    console.log("เจออายุ 45 ในอาเรย์");//พบ 45 ในอาเรย์
}

let numbers=[90,60,80,40,50];
numbers.sort();
console.log(numbers);//[40,50,60,80,90]

let names=["John","Jane","Doe"];
names.push("Smith");
console.log(names);
console.log(names.length);

for(let i=0;i<names.length;i++){
    console.log(names[i]);
}
let age =30
let name = "John"
let grade = 'A'

let student =[{
    age: 20,
    name: "Emma",
    grade: 'A'
},{ 
    age: 22,
    name: "Liam",
    grade: 'B'
}];
student.pop();
for (let i=0;i<student.length;i++){
    console.log("Student " + (i+1) + ":");
    console.log("Name: " + student[i].name);
    console.log("Age: " + student[i].age);
    console.log("Grade: " + student[i].grade);
}
    student.push({
    age: 21,
    name: "Olivia",
    grade: 'A'
});

console.log(student);
console.log(student.name);
*/

/**
  function
 */
 /** 
function calculate_grade(score) {
    if (score >= 90) {
        grade = 'A';
    }   else if (score >= 80) {
        grade = 'B';
    }   else if (score >= 70) {
        grade = 'C';
    }   else if (score >= 60) {
        grade = 'D';
    }   else {
        grade = 'F';    
    }
    return grade;
}


let student_score = 85;
let student_grade = calculate_grade(student_score);
console.log("Student's grade is: " + student_grade);
*/

/**
  array
 */

  let score = [10,20,30,40,50];
  for (let i=0;i<score.length;i++) {
     console.log('Score at index ' + i + ' is ' + score[i]);
     console.log(`Score at index ${i} is ${score[i]}`);
  }
  score = score.map((s) => {
        return s * 2
  })

  score.forEach((s) => {
     console.log('new score:' , s)
    })

    let scores = [10,20,30,40,50];
    for (let index = 0; index < scores.length; index++) {
        console.log('score', scores[index])
    }

    let newScores = scores.filter((s) => {
        return s >= 30
        if (scores[index] > 30) {
            newScores.push(scores[index])
        }
     })
    console.log('newScores :', newScores)

    newScores.forEach((ns) => {
        console.log('new score:', ns)
    })          


          let students=[
    {
        name: 'aa',
        score: '50',
        grade: 'A'
    },
    {
        name: 'bb',
        score: '60',
        grade: 'B'
    }
]

console.log('Student: ',students[0])

let student= students.find((s)=>{
    if(s.name=='bb'){
        return true;
    }
})
  let doublescore_student = student.map((s)=> {
    s.score =s.score * 2
    return s
  })
    
console.log('student: ', student)
console.log(doublescore_student)

 let highScore_syudent = students.filter((s)=>{
    if (s.score >=110){
        return true
    }
})

   console.log('highScore_student', highScore_student)
