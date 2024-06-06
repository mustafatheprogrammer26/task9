let vowels = ['a', 'e', 'i', 'o', 'u']
let userValue = prompt("Enter any Alphabate")

for(let i = 0 ; i < vowels.length ; i++){
    if(vowels[i] == userValue ){
        alert("true")
        break
    }else{
        alert("false")
    }
}