var score = 85;
var level = Math.floor(score / 10);
var grade;
switch (level) {
    case 10:
    case 9:
        grade = "A";
        break;
    case 8:
        grade = "B";
        break;
    default:
        grade = "C";
}
console.log(grade);
