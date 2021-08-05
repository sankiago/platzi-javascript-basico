//Inyectar mi fixed personalizado

Number.prototype.customFixed = function(afterComma){
  if(parseInt(this) == this){
    return this
  }else{
    return this.toFixed(afterComma)
  }
}

//Código del cuadrardo
const cuadrado = {
  operations: {
    area(lado){
      return lado ** 2
    },
    perimetro(lado){
      return lado * 4
    }
  },
  nodos: {
    card: document.querySelector('.card#square'),
    side: document.querySelector('.card_field#square_side input'),
    area: document.querySelector('.card_field-computed#square_area').querySelector('div'),
    perimeter: document.querySelector('.card_field-computed#square_perimeter').querySelector('div')
  }
}


const perimetroCuadrado = (lado) => lado * 4;
const areaCuadrado = (lado) => lado ** 2;

//Código del triangulo
const triangulo = {
  operations: {
    area([lado1, lado2, lado3]){
      // s = semiperimetro = perimetro / 2
      const s = (lado1 + lado2 + lado3) / 2
      const area = Math.sqrt(s*(s-lado1)*(s-lado2)*(s-lado3))
      return area 
    },
    perimetro([lado1, lado2, lado3]){
      const perimetro = lado1 + lado2 + lado3
      console.log(perimetro)
      return perimetro
    }
  },
  nodos: {
    card: document.querySelector(".card#triangle"),
    sidea: document.querySelector(".card#triangle").querySelector('.card_field#triangle_sidea input'),
    sideb: document.querySelector(".card#triangle").querySelector('.card_field#triangle_sideb input'),
    sidec: document.querySelector(".card#triangle").querySelector('.card_field#triangle_sidec input'),
    height: document.querySelector(".card#triangle").querySelector('.card_field#triangle_height input'),
    area: document.querySelector(".card#triangle").querySelector('.card_field-computed#triangle_area').querySelector('div'),
    perimeter: document.querySelector(".card#triangle").querySelector('.card_field-computed#triangle_perimeter').querySelector('div')
  }
};

//Código círculo

const circulo = {
  operations: {
    perimetro(radio){
      const diametro = radio * 2;
      const perimetro = diametro * Math.PI;
      return perimetro
    },
    area(radio){
      const area = radio ** 2 * Math.PI;
      return area
    }
  },
  nodos:{
    card: document.querySelector(".card#circle"),
    radius: document.querySelector('.card_field#circle_radius input'),
    area: document.querySelector('.card_field-computed#circle_area').querySelector('div'),
    perimeter: document.querySelector('.card_field-computed#circle_perimeter').querySelector('div')
  }
}

console.log([cuadrado, triangulo, circulo])


//Interactuando con el HTML
cuadrado.nodos.card.addEventListener('input', () =>{

  if(cuadrado.nodos.side.value == ''){
    cuadrado.nodos.area.textContent = ''
    cuadrado.nodos.perimeter.textContent = ''
  }
  if(cuadrado.nodos.side.value != ''){
    cuadrado.nodos.area.textContent = cuadrado.operations.area(cuadrado.nodos.side.value).customFixed(2)
    cuadrado.nodos.perimeter.textContent = cuadrado.operations.perimetro(cuadrado.nodos.side.value).customFixed(2)
  }
})

triangulo.nodos.card.addEventListener('input', () =>{
  if(triangulo.nodos.sidea.value == '' || triangulo.nodos.sideb.value == '' || triangulo.nodos.sidec.value == ''){
    triangulo.nodos.area.textContent = ''
    triangulo.nodos.perimeter.textContent = ''
  }
  if(triangulo.nodos.sidea.value != '' & triangulo.nodos.sideb.value != '' && triangulo.nodos.sidec.value != ''){
    triangulo.nodos.area.textContent = triangulo.operations.area([parseFloat(triangulo.nodos.sidea.value), parseFloat(triangulo.nodos.sideb.value), parseFloat(triangulo.nodos.sidec.value)]).customFixed(2)
    triangulo.nodos.perimeter.textContent = triangulo.operations.perimetro([parseFloat(triangulo.nodos.sidea.value), parseFloat(triangulo.nodos.sideb.value), parseFloat(triangulo.nodos.sidec.value)]).customFixed(2)
  }
})

circulo.nodos.card.addEventListener('input', () =>{
  if(circulo.nodos.radius.value == ''){
    circulo.nodos.area.textContent = ''
    circulo.nodos.perimeter.textContent = ''
  }
  if(circulo.nodos.radius.value != ''){
    console.log('a');
    circulo.nodos.perimeter.textContent = circulo.operations.perimetro(parseFloat(circulo.nodos.radius.value)).customFixed(2)
    circulo.nodos.area.textContent = circulo.operations.area(parseFloat(circulo.nodos.radius.value)).customFixed(2)
  }
})