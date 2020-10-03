var nav = document.createElement("nav")
document.body.append(nav)

var a1 = document.createElement("a")
a1.innerHTML = "Home"
nav.append(a1)

var a2 = document.createElement("a")
a2.innerHTML = "Contact"
nav.append(a2)

var a3 = document.createElement("a")
a3.innerHTML = "About"
nav.append(a3)

var h1 = document.createElement("h1")
h1.innerHTML = "I am learning JavaScript!"
document.body.append(h1)

var p = document.createElement("p")
p.innerHTML = "Here is my paragraph tag!"
document.body.append(p)


//list

var ul = document.createElement("ul")
document.body.append(ul)

var li1 = document.createElement("li")
li1.innerHTML = "Apple"
ul.append(li1)

var li2 = document.createElement("li")
li2.innerHTML = "Banana"
ul.append(li2)

var li3 = document.createElement("li")
li3.innerHTML = "Cantaloupe"
ul.append(li3)

var footer = document.createElement("footer")
footer.innerHTML = "Here is my footer"
document.body.append(footer)