//Código del cuadrado
console.group("Cuadrado");

function perimetroCuadrado(lado) {
    return lado * 4;
};

function areaCuadrado(lado){
    return lado * lado;
}
console.groupEnd();

//Código del triángulo
console.group("Triangulo");

function perimetroTriangulo(lados, base) {
    return (lados * 2) + base;
};

function areaTriangulo(base, altura) {
    return ((base * altura) / 2);
};
console.groupEnd();

//Código del círculo
console.group("Círculo");

function perimetroCirculo(radio) {
    return (radio * 2) * Math.PI;
};

function areaCirculo(radio) {
    return (radio * radio) * Math.PI;
};
console.groupEnd();

//Aquí interactuamos con el HTML
//Cuadrado
//Perimetro
function calcularPerimetroCuadrado(){
const input = document.getElementById("InputCuadrado");
const value = input.value;

const perimetroSq = perimetroCuadrado(value);
alert(perimetroSq);
}

//Area
function calcularAreaCuadrado(){
const input = document.getElementById("InputCuadrado");
const value = input.value;

const areaSq = areaCuadrado(value);
alert(areaSq);
}

//Triángulo
//Perimetro
function calcularPerimetroTriangulo(){
const ladosTr = parseInt (document.getElementById("InputLadosTriangulo").value);
const baseTr = parseInt (document.getElementById("InputBaseTriangulo").value);
    
    
const perimetroTr = perimetroTriangulo(ladosTr, baseTr);
alert(perimetroTr);
}
//Area  
    function calcularAreaTriangulo(){
    const baseTr = parseInt (document.getElementById("InputBaseTriangulo").value);
    const alturaTr = parseInt (document.getElementById("InputAlturaTriangulo").value);
    
    const areaTr = areaTriangulo(baseTr, alturaTr);
    alert(areaTr);
}
    
//Circulo
//Perimetro
function calcularPerimetroCirculo(){
    const radioCir = parseInt (document.getElementById("InputRadioCirculo").value);
    const perimetroCir = parseFloat (perimetroCirculo(radioCir)).toFixed(2);
    alert(perimetroCir);
    }
    //Area  
    function calcularAreaCirculo(){
    const radioCir = parseInt (document.getElementById("InputRadioCirculo").value);
    const areaCir = parseFloat (areaCirculo(radioCir)).toFixed(2);
    alert(areaCir);
    }
    
