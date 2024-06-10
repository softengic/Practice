//IIFE

(function ()
{

    function Start() {
        console.log("App Started!");
    }
    let XHR = new XMLHttpRequest();

    XHR.open("GET", "../data/data.json");
    XHR.send();
    window.addEventListener("load", Start);
});