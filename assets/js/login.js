const input = document.querySelector("input"),
emailIcon = document.querySelector(".email-icon");

        input.addEventListener("keyup", () =>  
        {
                let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
                if(input.value === ""){
                    emailIcon.classList.replace("uil-check-circle", "uil-envelope");
                    return emailIcon.style.color = "#b4b4b4"
                }
                if(input.value.match(pattern)){
                    emailIcon.classList.replace("uil-envelope", "uil-check-circle");
                    return emailIcon.style.color = "#4bb543"
                }
                emailIcon.classList.replace("uil-check-circle", "uil-envelope");
                emailIcon.style.color = "#de0611"

                

            
        })
const toggle = document.querySelector(".toggle"),
      password = document.querySelector("#id_password");

      toggle.addEventListener("click", () =>{
        if(password.type ==="password"){
            password.type = "text";
            toggle.classList.replace("uil-eye-slash", "uil-eye");
        }else{
            password.type = "password";
            toggle.classList.replace("uil-eye", "uil-eye-slash");
        }
      })