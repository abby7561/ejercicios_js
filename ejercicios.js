function ejercicio1() { 
    console.log("Hola mundo"); 
}

function ejercicio2(){
    let nuevoH1 = document.createElement("h1");
    nuevoH1.textContent = "Abigail";
    
    let contenedor = document.querySelector(".para-h1"); //seleccionar el div con clase 'para-h1' en html

    contenedor.innerHTML = ""; //borra el h4
    contenedor.appendChild(nuevoH1); //inserta el h1 dentro del div
}


function ejercicio3(){
    let operacion = document.getElementById("operacion").value;
    let valor1 = document.getElementById("operando1").value;
    let valor2 = document.getElementById("operando2").value;

    valor1 = Number(valor1);
    valor2 = Number(valor2);

    let result;
    
    switch(operacion){
        case "suma":
            result = valor1 + valor2;
            break;
        case "resta":
            result = valor1 - valor2;
            break;
        case "multiplicacion":
            result = valor1 * valor2;
            break;
        case "division":
            result  = valor1/valor2;
            break;
    }
    document.getElementById("resultado").value = result;
}

function ejercicio4(){
    let items = document.querySelectorAll(".list-group-item");

    items.forEach(li=> {
        console.log(li.textContent);
    });
}

function ejercicio5(){
    let texto = document.querySelector("#para-invertir p").innerText.trim();

    let textoInv = texto.split("").reverse().join("");
    
    document.querySelector("#texto-invertido p").innerText = textoInv;
}

function ejercicio6(){
    let jsonText = document.getElementById("objeto_json").textContent;

    let obj = JSON.parse(jsonText);

    let nombre = obj.nombre;

    document.querySelector("#nombre-json h6").innerText= nombre;
}

function ejercicio7(){
    let jsonText = document.getElementById("objeto_json").textContent;

    let obj  = JSON.parse(jsonText);

    let objStr = JSON.stringify(obj, null, 2);

    document.querySelector("#obj-json h6").innerText = objStr;
}

ejercicio1();
ejercicio2();
ejercicio3();
ejercicio4();
ejercicio5();
ejercicio6();
ejercicio7();

document.querySelector(".btn-primary").addEventListener("click", function(event){
    event.preventDefault();
    ejercicio3();
});