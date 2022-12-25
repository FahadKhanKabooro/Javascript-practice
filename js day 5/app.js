// for(a = 1;a<=100;a = a+10){
//     // document.write(a+"<br>")
// for(var b = a;b < a+10; b++){
// document.write(b+" ")}
// document.write("<br>")
// }

// Changing CAse


var city = prompt("Enter city name ")
var firstChar = city.slice(0,1);
firstChar = firstChar.toUpperCase()
var otherChar = city.slice(1);
otherChar = otherChar.toLowerCase()
var city = firstChar + otherChar;
console.log(City)
city = city.toLowerCase()
var arr = ["Karachi","Hydrabad","Islamabad"]
for(var i = 0;i<arr.length;i++){
    if(arr[i] === city){
        alert("city has found")
        break
    }else{
        alert("City has not found")
    }
}
