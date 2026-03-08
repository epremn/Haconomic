function education101() {
    let education = document.getElementById("education1").value.toLowerCase();
    let num2 = Number(document.getElementById("num2").value);

    if (education=="public"&&num2>=14903) {
        document.getElementById("result").innerText =
            "You are in good hands";
    }
    
    
    else if (education=="private"&&num2>=14347) {
        document.getElementById("result").innerText =
            "You are in good hands.";
    }
    
    else{
        document.getElementById("result").innerText =
            "You are not in good hands";
    }
}
