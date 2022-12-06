let fg = document.getElementById("fg");
let fname = document.getElementById("f-name");
let pas = document.getElementById("password");
    function forgot() {
        if (fname.value == ''){
            fname.placeholder = "Введите данные";
            pas.placeholder = "Нажмите забыл";
        } else {
            fname.value = 'Сообщение отравлено';
            setTimeout(function() {
                fname.value = "";
                pas.placeholder = "Пароль";
            }, 3000)    
        }     
    }