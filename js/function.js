//* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });
}

var inContLink = document.getElementsByClassName("inContainerLink");

for (i = 0; i < inContLink.length; i++) {
    inContLink[i].addEventListener("click", function () {
        var dropdownContent = this.parentElement;
        for (var j = 0; j < dropdown.length; j++) {
            dropdown[j].classList.remove("active");
        }
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });
}




const persona = '{"nombre":"Pedro","apellido":"Alvarez","ciudad":"La Plata","provincia":"Buenos Aires","pais":"Argentina","dni":"35.648.145","anio":"1980","mes":"febrero","dia":"28","celu":"(11)11111111","email":"algunpedroalvarez@gmail.com","estudioSec":"Estudios secundarios completos en la E.E.S.T. N°8 Juan Bautista Alberdi","estudioUniv":"Cursando Analista Programador Universitario en la Universidad Nacional de La Plata","cursos":"Realizado el curso Primeros pasos del desarrollo Frontend en Ticmas Academy","idioma1":"español","idioma2":"inglés","idioma3":"japonés","cual1":"Trabajo en equipo","trabajoEquipo":"Me considero y se me ha reconocido como una persona que contribuye activamente al buen ambiente laboral y a la cooperación mutua entre compañeros. Siempre dispuesto a ayudar a quien lo necesite","cual2":"Liderazgo","liderazgo":"Reacciono eficientemente en situaciones de presión en las que hay que tomar desiciones considerando las repercusiones a futuro, principalmente para la empresa","cual3":"Atención","atencion":"Tras varios años de trabajar en atención al público, he desarrollado una capacidad para mediar en situaciones difíciles con clientes logrando mantener una relación de buenos términos con la empresa y sus empleados, sin perder de vista los intereses de la misma","anioTrabajo1":"2010-2013","exp1":"atención al público y caja en Supermercado Argenchino. Referencias: 11xxxxxxxx","anioTrabajo2":"2013-2015","exp2":"gerente de ventas en Maxiconsumo S.A. Referencias: 11xxxxxxxx","anioTrabajo3":"2015-2020","exp3":"gerente de ventas en Nini Mayorista. Referencias: 11xxxxxxxx"}';
const obj = JSON.parse(persona);
console.log(obj);

document.getElementById('exp1').innerHTML = obj.anioTrabajo1

document.getElementById('exp2').innerHTML = obj.anioTrabajo2

document.getElementById('exp3').innerHTML = obj.anioTrabajo3

document.getElementById('cual1').innerHTML = obj.cual1

document.getElementById('cual2').innerHTML = obj.cual2

document.getElementById('cual3').innerHTML = obj.cual3

document.getElementById('parrafo').innerHTML = "Mi nombre es " + obj.nombre + " " + obj.apellido + ", nacido en " + obj.pais + " el día " + obj.dia + " de " + obj.mes + " del año " + obj.anio + ".";

document.getElementById('exp1').addEventListener("click", function () {
    document.getElementById('parrafo').innerHTML = "Entre los años " + obj.anioTrabajo1 + " desempeñé tareas de " + obj.exp1 + ".";
});

document.getElementById('exp2').addEventListener("click", function () {
    document.getElementById('parrafo').innerHTML = "Entre los años " + obj.anioTrabajo2 + " estuve trabajando como " + obj.exp2 + ".";
});

document.getElementById('exp3').addEventListener("click", function () {
    document.getElementById('parrafo').innerHTML = "Entre los años " + obj.anioTrabajo3 + " cumplí con las tareas de " + obj.exp3 + ".";
});

document.getElementById('secundaria').addEventListener("click", function () {
    document.getElementById('parrafo').innerHTML = obj.estudioSec + ".";
});

document.getElementById('universitario').addEventListener("click", function () {
    document.getElementById('parrafo').innerHTML = obj.estudioUniv + ".";
});

document.getElementById('cursos').addEventListener("click", function () {
    document.getElementById('parrafo').innerHTML = obj.cursos + ".";
});

document.getElementById('materna').addEventListener("click", function () {
    document.getElementById('parrafo').innerHTML = "Mi lengua materna es el " + obj.idioma1 + ".";
});

document.getElementById('hablo').addEventListener("click", function () {
    document.getElementById('parrafo').innerHTML = "Hablo fuidamente el " + obj.idioma2 + ".";
});

document.getElementById('entiendo').addEventListener("click", function () {
    document.getElementById('parrafo').innerHTML = "Entiendo y estoy aprendiendo el " + obj.idioma3 + ".";
});

document.getElementById('quienSoy').addEventListener("click", function () {
    document.getElementById('parrafo').innerHTML = "Mi nombre es " + obj.nombre + " " + obj.apellido + " y mi DNI es: " + obj.dni + ".";;
});

document.getElementById('naci').addEventListener("click", function () {
    document.getElementById('parrafo').innerHTML = "Nací el " + obj.dia + " de " + obj.mes + " del año " + obj.anio + " en " + obj.ciudad + ", " + obj.provincia + ", " + obj.pais + ".";
});

document.getElementById('datosContacto').addEventListener("click", function () {
    document.getElementById('parrafo').innerHTML = "Mi número de teléfono celular es: " + obj.celu + ". Mi email es: " + obj.email + ".";
});

document.getElementById('cual1').addEventListener("click", function () {
    document.getElementById('parrafo').innerHTML = obj.trabajoEquipo + ".";
});

document.getElementById('cual2').addEventListener("click", function () {
    document.getElementById('parrafo').innerHTML = obj.liderazgo + ".";
});

document.getElementById('cual3').addEventListener("click", function () {
    document.getElementById('parrafo').innerHTML = obj.atencion + ".";
});

function imgclick() {
    document.getElementById('parrafo').innerHTML = "Mi nombre es " + obj.nombre + " " + obj.apellido + ", nacido en " + obj.pais + " el día " + obj.dia + " de " + obj.mes + " del año " + obj.anio + ".";

    var objx;
    var xhr = new XMLHttpRequest();
    var url = 'https://randomuser.me/api/';
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            objx = this.response;
            console.log(this.responseText);
            console.log(objx);
        }
    }
    xhr.send();

    // $.ajax({
    //     url: 'https://randomuser.me/api/',
    //     dataType: 'json',
    //     success: function (data) {
    //         console.log(data);
    //     }
    // })
}