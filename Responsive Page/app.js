window.onload = function()
{
    var menu = document.getElementById("menuImg");
    menu.onclick = function()
    {
        var nav = document.getElementById("nav");
        nav.style.display = "grid";
        nav.style.paddingBottom = 10 + "px";
        menu.style.display =  "none";
    }
}