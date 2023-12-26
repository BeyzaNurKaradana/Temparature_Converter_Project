function calculate() {
    let celcius = document.getElementById("celcius").value;
    let fahrenheit = document.getElementById("fahrenheit").value;
    let kelvin = document.getElementById("kelvin").value;


    if (celcius!== "" && (fahrenheit ==="" || kelvin ==="" )) {
        celcius = parseFloat(celcius);

        let fahrenheit_cal = (9/5) * celcius + 32;
        let kelvin_cal = celcius + 273.15;

        document.getElementById("fahrenheit").value = fahrenheit_cal.toFixed(2);
        document.getElementById("kelvin").value = kelvin_cal.toFixed(2);
        return;

    } else if (fahrenheit!== "" && (celcius ==="" || kelvin ==="" )) {
        fahrenheit = parseFloat(fahrenheit);
        
        let celcius_cal = (5/9) * (fahrenheit-32);
        let kelvin_cal = celcius_cal + 273.15

        document.getElementById("celcius").value = celcius_cal.toFixed(2);
        document.getElementById("kelvin").value = kelvin_cal.toFixed(2);
        return;

    }else if (kelvin!== "" && (celcius ==="" || fahrenheit ==="" )) {
        kelvin = parseFloat(kelvin);

        let celcius_cal = kelvin - 273.15;
        let fahrenheit_cal = (9/5) * celcius_cal + 32;

        document.getElementById("celcius").value = celcius_cal.toFixed(2);
        document.getElementById("fahrenheit").value = fahrenheit_cal.toFixed(2);
        return;

    }


}

 document.getElementById("celcius").addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
        calculate();
    }
  });
  
  document.getElementById("fahrenheit").addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
        calculate();
    }
  });

  document.getElementById("kelvin").addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
        calculate();
    }
  }); 






document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('fire-video');
    const inputContainer = document.querySelector('.col-12 > .mt-5'); 

    video.play(); 

    setTimeout(function() {
        video.pause(); 
        inputContainer.style.display = 'block'; // Giriş kapsayıcısını göster
    }, 9000); // 9 saniye gecikme
});








 



  

 

  
  

