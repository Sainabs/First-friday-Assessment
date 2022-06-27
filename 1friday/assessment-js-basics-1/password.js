//passwordValidator

let password= ["Yummyfood", "yummyfood55", "YUMMYFOOD55","Yummyfoods", "Yummyfood55Yummufood55", "Yummy food55","password","letmein", "$Yummyfood55"]
let checkletter = /[a-zA-Z]/;


//console.log(`${password[0]} ${password[0].length}`);

for (let i=0; i<password.length; i++){
    console.log(password[i])
    console.log(password[i].length)

// checks for length at least 10 characters
    if(password[i].length >= 10){

// checks for if it's more than 20 characters        
        if(password[i].length <= 20){

// Checks if string contains number            
            if(/\d/.test(password[i])){

// Checks if string contains letters                
                if (checkletter.test(password[i])){
                    console.log ("Success Message - Password created")
                }else{
                    console.log("Failure message, password has no letters")
                }
            }else{
                console.log("Failure message, password has has no numbers")
            }
        }else{
            console.log ("Failure message, password has more than 20 characters")
        }
    }else{
        console.log ("Failure message, password has less than 10 characters")
    }
}


// working code with for loop that contains length at least 10, check if it contains letters and number

// console.log(`${password[0]} ${password[0].length}`);
// //Password At least 10 characters long

// for (let i=0; i<password.length; i++){
//     console.log(password[i])
//     //console.log(password[i].length)
//     if(password[i].length >= 10){
//         if(/\d/.test(password[i])){
//             if (checkletter.test(password[i])){
//                 console.log ("Success message")
//             }else{
//                 console.log ("failure message")
//                 console.log("It has no letters")
//             }
//         }else{ 
//             console.log ("Failure message")
//             console.log("It has no numbers")
//         }
//     }else{
//         console.log ("Failure message")
//         console.log ("It has less than 10 characters")
//     }
// }
