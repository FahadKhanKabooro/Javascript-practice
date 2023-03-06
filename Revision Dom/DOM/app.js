// let list = document.getElementsByTagName("li")
// console.log(list.length)

// ATTRIBURES

// let target = document.getElementById("p1")
// SET ATTRIBUTE
// target.setAttribute('class','blue')
// CHecking SET ATTRIBUTE By CONSole.LOg
// console.log(target.hasAttribute("class"))
// console.log(target.getAttribute("class"))
// console.log(target.attributes)
// console.log(target.attributes[1].nodeName)
// console.log(target.attributes[1].nodeValue)


// GET ATTRIBUTE
// console.log(target.getAttribute("class"))
// console.log(target)

// HAS ATTRIBUTE
// if(target.hasAttribute("class")){
//     alert("available")
// }
// else{
//     alert("not available")
// }

// ADDING NODES
// CREATE ELEMENT
// let p = document.createElement("h3")

// let text = document.createTextNode("Hello KAbooro Faddy!")
// p.appendChild(text)
// console.log(p)
// let main = document.getElementById("main")
// main.appendChild(p)

function addmsg(){
    // let val = document.getElementById("val")
    // let p = document.createElement("p")
    // let textNode = document.createTextNode(val.value)
    // p.appendChild(textNode)
    // let messages = document.getElementById("messages")
    // messages.append(p)

    // val.value = ""
    
    let val = document.getElementById("val")
    let p= document.createElement("p")
    let text = document.createTextNode(val.value)
    p.appendChild(text)
    // console.log(p)
    let messages = document.getElementById("messages")
    messages.appendChild(p)
    val.value = ''
    
}





