//Navbar Animation

function up() {
    let nav = document.getElementById("navbar");
    let upKey = document.getElementById("up");
    if(nav.classList.contains("down"))
    {
        nav.style.transform = "translateY(-190px)";
        nav.classList.remove("down");
        nav.classList.add("up");
        upKey.style.transform = "rotate(180deg)";
    }
    else if(nav.classList.contains("up"))
    {
        nav.style.transform = "translateY(0px)";
        nav.classList.remove("up");
        nav.classList.add("down");
        upKey.style.transform = "rotate(0deg)";
    }

}