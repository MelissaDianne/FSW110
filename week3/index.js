
var h2 = document.createElement("h2")
h2.textContent = ("Whatever text I want")

for(var i = 0; i < 5; i++){
    var h2 = document.createElement("h2")
    h2.textContent = ("Whatever text I want")
    document.body.append(h2)
    console.log(i)
    h2.style.color = "cornflowerblue";
    h2.style.fontFamily = "sans-serif";
    h2.style.fontSize = "20px";
    h2.style.fontWeight = "lighter";
    h2.classList.add("border")
}











// var states = ["California", "New York", "Texas", "Florida", "North Carolina"];
// var text = "";
// var i;
// for (i = 0; i < states.length; i++) {
//   text += states[i] + "<br>";
// }

// document.getElementById("h2").innerHTML = text;