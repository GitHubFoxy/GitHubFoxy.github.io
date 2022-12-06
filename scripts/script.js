"use strict";
function is_m_name() {
    if (document.getElementById('chkbmn').checked == true) {  
        document.getElementById('mdlnm').disabled = false;
    }else {
        document.getElementById('mdlnm').disabled = true;
    }
}