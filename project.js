function validate() {
    var mymail = document.getElementById("footer_email");
    var myInfo = document.getElementById("info");
    var regx = /([a-zA-Z0-9]{3,15})+@+([a-zA-Z]{3,10})+\.+([a-zA-Z]{2,10})/
    if (regx.test(mymail.value)) {
        myInfo.style.color = "green"
        myInfo.innerHTML = "Done"
        
    }
    else {
        myInfo.style.color = "red"
        myInfo.innerHTML = "Please Enter Valid Email"

    }
}
