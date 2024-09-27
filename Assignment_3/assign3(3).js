
function changeText() {
    document.getElementById('header').innerHTML = "Krish Saraiya";
    document.getElementsByTagName('p')[0].innerHTML = "This paragraph has been modified.";
}

function changeStyle() {
    var div = document.getElementById('myDiv');
    div.style.color = "white";
    div.style.backgroundColor = "Red";
    div.style.position = "relative";
    div.style.left = "50px";
}

function changeImage() {
    document.getElementById('myImage').src = "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/800px-FC_Barcelona_%28crest%29.svg.png";
}


function addNode() {
    var textNode = document.createTextNode("This is a new text node.");
    document.getElementById('parentDiv').appendChild(textNode);
}


function removeNode() {
    var childNode = document.getElementById('child');
    if (childNode) {
        childNode.remove();
    } else {
        alert("Child node is already removed!");
    }
}




$(document).ready(function() {
    $('#jqButton').click(function() {
        $(this).text('Button text changed');
    });
});

$(document).ready(function() {
    $('#myDiv').css('background-image', 'url(https://via.placeholder.com/300/0000FF/FFFFFF?text=Background)');
});


function getFormData() {
    var username = $('#username').val();
    var email = $('#email').val();
    alert("Username: " + username + "\nEmail: " + email);
}


$(document).ready(function() {
    $('#myImage').attr('alt', 'Updated Image');
});
