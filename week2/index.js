var newH1 = document.createElement("h1")
newH1.textContent = "Welcome to my JS site"
var body = document.getElementById("body")
body.append(newH1)


var newP = document.createElement("p")
newP.textContent = "All this was created with Javascript"
document.body.append(newP)

var newLi = document.createElement("li")
newLi.textContent = "Dragonfruit"
var myList = document.getElementById("my-list")
myList.append(newLi)
