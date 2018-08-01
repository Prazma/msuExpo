var topics = ["What is nuclear science?","Nuclear Waste","Nuclear Weapons","Energy by Nuclear Science","Technology and Discoveries","Jobs","Danger and Bad stuff"];

var colorCode = ["linear-gradient(135deg,rgba(59,99,245,.99),#2a37b3 54%,#120038) 50% no-repeat","linear-gradient(135deg,rgba(245, 59, 59, 0.99),#b32a2a 54%,#380000) 50% no-repeat","linear-gradient(135deg,rgba(245, 59, 59, 0.99),#b32a2a 54%,#380000) 50% no-repeat","linear-gradient(135deg,rgba(59, 245, 82, 0.99),#2ab32e 54%,#003810) 50% no-repeat","linear-gradient(135deg,rgba(208, 59, 245, 0.99),#822ab3 54%,#160038) 50% no-repeat","linear-gradient(135deg,rgba(59,99,245,.99),#2a37b3 54%,#120038) 50% no-repeat"];

var onwhich = 0;

function next() {
    if(onwhich+1 == topics.length) {
        onwhich = 0;
    } else {
        onwhich += 1;
    }
}
