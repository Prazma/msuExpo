var topics = ["About Nuclear Science","Nuclear Waste","Nuclear Weapons","Energy by Nuclear Science","Technology and Discoveries","Jobs","Danger and Bad stuff"];

var colorCode = ["linear-gradient(135deg,rgba(59,99,245,.99),#2a37b3 54%,#120038) 50% no-repeat","linear-gradient(135deg,rgba(245, 59, 59, 0.99),#b32a2a 54%,#380000) 50% no-repeat","linear-gradient(135deg,rgba(245, 59, 59, 0.99),#b32a2a 54%,#380000) 50% no-repeat","linear-gradient(135deg,rgba(59, 245, 82, 0.99),#2ab32e 54%,#003810) 50% no-repeat","linear-gradient(135deg,rgba(208, 59, 245, 0.99),#822ab3 54%,#160038) 50% no-repeat","linear-gradient(135deg,rgba(59,99,245,.99),#2a37b3 54%,#120038) 50% no-repeat","linear-gradient(135deg,rgba(245, 59, 59, 0.99),#b32a2a 54%,#380000) 50% no-repeat"];

var onwhich = 1;

function next() {
    if(onwhich+1 == topics.length) {
        onwhich = 0;
    } else {
        onwhich += 1;
    }
    document.getElementById("sectorTitle").style.opacity = "0";
    document.getElementById("coverSmallTrans").style.opacity = "0";
    setTimeout( function () {
        document.getElementById("sectorTitle").innerHTML = topics[onwhich];
        document.getElementById("coverSmallTrans").src = "img/" + topics[onwhich] + ".png";
        document.getElementById("sectorTitle").style.opacity = "1";
        document.getElementById("coverSmallTrans").style.opacity = "0.6";
        document.body.style.background = colorCode[onwhich];
    }, 500)
}

function openSlide() {
    document.getElementById("bottomContentRevealBtn").style.bottom = "100vh";
    document.getElementById("slidePort").style.top = "0";
}
