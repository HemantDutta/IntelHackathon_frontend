//Global Variables
let VID = null;
let CANVAS = null;
let CONTEXT = null;

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

//Main Animation
function moveToAI() {
    let className = document.getElementById("classSelect").value;
    let hours = document.getElementById("hourSelect").value;
    let teacher = document.getElementById("teachSelect").value;
    let valAlert = document.getElementById("valIn");
    let errMsg = document.getElementById("errorMsg");
    let csImg = document.getElementById("csImg");
    let capture = document.getElementById("Capture");
    let table = document.getElementById("attendTable");
    let form = document.getElementById("formCont");

    if(className === "#" || hours === "#" || teacher === "#")
    {
        valAlert.classList.remove("d-none");
        errMsg.innerText = "Please Select All Options Properly.";
        setTimeout(()=>{
            valAlert.style.transform = "translateY(0px)";
        }, 10);
    }
    else{
        form.classList.add("d-none");
        table.classList.remove("d-none");
        capture.classList.remove("d-none");
        csImg.style.backgroundImage = "url()";
        let promise = navigator.mediaDevices.getUserMedia({video: true});
        CANVAS = document.getElementById("myCanvas");
        CONTEXT = CANVAS.getContext("2d");
        CANVAS.width = 500;
        CANVAS.height = 400;
        promise.then(function (signal){
            VID = document.createElement("video");
            VID.srcObject = signal;
            VID.play();

            VID.onloadeddata = () => {
                updateCanvas();
            }
        }).catch((err)=>{
            valAlert.classList.remove("d-none");
            errMsg.innerText = "Camera Error: "+err;
            setTimeout(()=>{
                valAlert.style.transform = "translateY(0px)";
            }, 10);
        })
    }
}

//Download
function download(){
    let canvasUrl = CANVAS.toDataURL("image/jpeg", 1);
    const createEl = document.createElement('a');
    createEl.href = canvasUrl;
    createEl.download = "pyImg";
    createEl.click();
    createEl.remove();
}

//Update Canvas
function updateCanvas()
{
    CONTEXT.drawImage(VID,0,0);
    window.requestAnimationFrame(updateCanvas);
}

//Alert
function closeAlert()
{
    let valAlert = document.getElementById("valIn");
    valAlert.classList.add("d-none");
    valAlert.style.transform = "translateY(120px)";
}