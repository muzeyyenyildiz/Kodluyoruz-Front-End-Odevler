
function displayUserName(){
    let userName = prompt("Adınız:")
    let writeName;
    let info = document.querySelector("#myName")

    if (userName != null && userName.trim().length){
        writeName = userName
        info.innerHTML = `${writeName}`
    }else{
        alert("Lütfen İsminizi Giriniz!")
        displayUserName()
    }
}

function showTime(){
    let date = new Date()
    let saat = date.getHours();
    let dakika = date.getMinutes()
    let saniye = date.getSeconds();
    let writeGun = new Date().toLocaleString('tr-TR', {weekday:'long'});

      saat = saat < 10 ? "0" + saat : saat;
      dakika = dakika < 10 ? "0" + dakika : dakika;
      saniye = saniye < 10 ? "0" + saniye : saniye;

      var time = `${saat}:${dakika}:${saniye} ${writeGun}`
    document.getElementById("myClock").innerText = time;
    document.getElementById("myClock").textContent = time;
        
setTimeout(showTime, 1000);

}

displayUserName()
showTime();



  
