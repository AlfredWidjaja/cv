
// All Event Listener for Website
window.addEventListener("scroll", scrollable, stopped);

// Show certificate
window.addEventListener("load", showcertificate);

document.getElementById("about_page").addEventListener("click", function(){
    window.location.href = "about.html";
});

document.getElementById("porto-page").addEventListener("click", function(){
    window.location.href = "portfolio.html";
});
//Function for scrollable navbar
function scrollable(){
    $("#navbar").css("background-color","#BA9A6D");
    setTimeout("stopped()", 3000);
}

function stopped(){
    $("#navbar").css({"background-color":"#DECAB6", "transition":"1s"});
}

window.addEventListener("load", function(){
    for (var i=0; i<3;i++){
        document.getElementById("certiList").innerHTML += `
        <p>fsfsd</p>`;
    }
});