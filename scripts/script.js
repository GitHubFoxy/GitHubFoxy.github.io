"use strict";
function is_m_name() {
    if (document.getElementById('chkbmn').checked == true) {  
        document.getElementById('mdlnm').disabled = false;
    }else {
        document.getElementById('mdlnm').disabled = true;
    }
}

let faqs = document.querySelectorAll(".faq--block");
let arror = document.querySelectorAll("arrdown");
faqs.forEach((faq) => {
    faq.addEventListener("click",() => {
        faq.classList.toggle('active');
    })
})
