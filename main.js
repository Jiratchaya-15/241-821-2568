/*
let firstname = "John";
let age = 30;
let height = 1.78;
const PI = 3.14;

console.log("firstname",firstname);
console.log("age",age);
console.log("height",height);

let number1 = 10;
let number2 = 3;
let result1 = number1 + number2;
console.log("ผลบวก =",result1);


let number1 = 10;
let number2 = 20;
let condition = number1 < number2;
console.log("condition",condition);


let score = prompt;
if (score >= 80) {
    console.log("Grade A"); }
else if (score >= 70) {
    console.log("Grade B"); }
else if (score >= 60) {
    console.log("Grade C"); }
else if (score >= 50) {
    console.log("Grade D"); }
else {
    console.log("Grade F"); }
*/

/*let counter = 0;
while (counter <= 4) {
    counter += 1;
    console.log("while:",counter);
}
for (let i = 1; i <= 5; i += 1) {
    console.log("for:",i);
}
*/

/*
let age1 = 25;
let age2 = 30;
let age3 = 35;
console.log(age1,age2,age3); //25 30 35

let ages = [25,30,35];
console.log(ages); // [25,30,35]
console.log(ages[1]); //25 30 35

ages = [40,45,50];
console.log(ages);

ages.push(55);
console.log(ages);

console.log(ages.length);

ages.pop();
console.log(ages);

if (ages.includes(45)) {
    console.log("พบ 45ในอาเรย์");
}

let numbers = [90, 60, 80, 40, 50];
numbers.sort();
console.log(numbers); // [40,50,60,80,90]

let names = ["john", "jane", "Doe"];
names.push("smith");
console.log(names);
console.log(names.length);

for (let i = 0; i < names.length; i++){
    console.log(names[i]);
}*/

/*
object
*/

/*
let student = [{
    age: 20,
    names: "Emma",
    Grade: 'A'
},{
    age: 22,
    names: "Liam",
    Grade: 'B'
}]

for(let i = 0; i < student,length; i++){
    console.log("Student "+ (i + 1)+":")
    console.log("Name: "+ student[i].names)
    console.log("Age: "+ student[i].age)
    console.log("Grade: "+ student[i].Grade)

}
student.push({
    age:21,
    names: "Olivia",
    grade: 'A'
});
console.log(student);
*/
/*
function calculate_grade(score){
    if(score >= 90){
        grade = 'A';
    }else if (score >= 80){
        grade = 'B';
    }else if (score >= 70){
        grade = 'C';
    }else if (score >= 60){
        grade = 'D';
    }else{
        grade = "F"
    }
    return grade;
}

let student_score = 85;
let student_grade = calculate_grade(student_score);
console.log("Student's grade is:"+ student_grade);
*/

/*
let score = [10,20,30,40,50];
for (let i = 0; i < score.length; i++){
    console.log(`score at index ${i} is ${score[i]}`);
}
score[0] = score.map((s)=>{
        return s * 2
})
score.forEach((s) => {
    console.log('score',s)
})
    */
/*
let score = [10,20,30,40,50];
let newScore = []

for (let index = 0; index <score.length; index++){
    console.log('score', score[index])
}

let newScore = score.filter((s) => {
    if( s >=30)
        return s >= 30
})
newScore.forEach((ns)=>{
    console.log('new score: ', ns)
})
*/

let students =[ 
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
console.log('Student :', students[0])

let student = students.find((s)=>{
    if(s.name == 'bb'){
        return true
    }
})

let doublescore_student = students.map((s) =>{
    s.score = s.score * 2
    return s
})
console.log('student:',students)

console.log(doublescore_student)

let highScore_student = students.filter((s) =>{
    if (s.score >= 110){
        return true
    }
})
console.log('highScore_student',highScore_student)