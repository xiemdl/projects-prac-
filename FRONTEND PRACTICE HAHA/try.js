console.log("jjajaja");
 var a = 1;
 var b = 2;

function add(x, y) {
    console.log("Adding numbers:", x, y);
    return x + y;
}


// let grade = [90, 85, 78];

// for (let s = 0; s < grade.length; s++){
//     if (grade[s] <= 90){
//         console.log("passed");
//     } else if(grade[s] <= 80){
//         console.log("still passed");
//     }else{
//         console.log("failed");
//     }
// }

let grade = [90, 85, 78];
let input_grade = prompt("enter grade:");
function checkGrade(){
    if(input_grade >= 80){
        console.log("PASSED");
    }else{
        console.log("FAILED");
    }
}