
var h1 = document.createElement("h1")
h1.textContent = ("Hello World!")
h1.style.backgroundColor="red"
h1.style.color = "white";
document.body.append(h1)

for(var i = 0; i < 10; i++){
    var h1 = document.createElement("h1")
    h1.textContent = ("Hello World!")
    h1.style.backgroundColor="red"
h1.style.color = "white";
    document.body.append(h1)
    console.log(i)
    console.log(name[i])
}

var people = [ "Steve",   "Larry",   "Joe",   "Shirley",   "Steph",   "Nate",   "Rick",  "Emily"];


console.log(typeof people)

for(var j = 0; j <8; j++){
    console.log(j)
    console.log(people)
    var flower = document.createElement("p")
    flower.textContent = people[j]
    document.body.append(flower)
}







// var ul = document.createElement("ul")
// document.body.append(ul)

// var li = document.createElement("li")
// li.textContent = people[0]
// ul.append(li)