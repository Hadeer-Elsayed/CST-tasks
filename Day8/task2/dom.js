//change list style type
document.getElementById("nav").style.listStyleType = "circle";

//change list style position
document.getElementById("nav").style.listStylePosition = "inside";

/*Creating new node a copy of existing
node. It takes a Boolean value
true: Deep copy with all its children
or
false: Shallow copy only the node*/

//make a copy of bear image
var bearimg = document.getElementById("header").cloneNode(true);

//put bear image copy at the end of the document
bearimg.id = "bottom";
document.body.appendChild(bearimg);//To add new created node “bearimg” to DOM Tree at the end of the selected element “body”

//change alignment of upper img
document.getElementById("header").align = "right";
        
//change alignment of bottom img
document.getElementById("bottom").align = "left";