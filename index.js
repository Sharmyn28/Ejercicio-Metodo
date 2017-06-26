var assert = require ("assert");

function EjerciciosArray(){
  this.ejercicio_1 = function (_arr, _num) {
    var res = 0;
    if(Array.isArray(_arr)){
      res = _arr.reduce(function(_total, _actual){
        return _total * _actual;
      });
    }else {
      if(!isNaN(_arr)){
        res = _arr;
      }
    }
    if(!isNaN(_num)){
      res = res *_num;
    }
    return res;
  }

  this.ejercicio2 = function(_telefonos, _filtro){
    return _telefonos.filter(function(a){
      var primeras = a.toString().substr(0,3);
      var ultimas = a.toString().substr(-3);
      return (primeras == _filtro || ultimas == _filtro);
      });
  }

   this.ejercicio3 = function multiplos(aleatorio, num){
      var arrResultado = [];
      aleatorio.forEach(function (aleatorio){
        if((aleatorio % num) == 0){
        arrResultado.push(aleatorio);
        }
      });
      return arrResultado;
  }

  this.ejercicio4 = function duplicarAumentar(array){
    return array.map(function(nuevoArreglo){
      return nuevoArreglo*2}).map(function(arrayResultado){
      return arrayResultado+1});
  }

  this.ejercicio5 = function convertirFahrenheit(arregloCelcius){
    return arregloCelcius.map(function(gradoC){
      return (gradoC*1.8)+32});
  }

  this.ejercicio6 = function multiplicar(array) {
    return array.reduce(function(producto,num){
       return producto*num;
    });
  }

  this.ejercicio7 = function nacimientoEdadPar(arrayEdades){
    var f = new Date();
    var anioActual = f.getFullYear();

    return arrayEdades.filter(function(edad){
      if ((edad >= 18) && (edad % 2 == 0)){
        return true;
      }else {
        return false;
      }
      }).map(function(edad){
        return anioActual-edad;
      });
    }
}

var ejercicios = new EjerciciosArray();

// *** PRUEBAS UNITARIAS ***
describe ("Ejercicios Array", function(){
  describe("Ejercicio 1", function () {
  it("Prueba de [2,3] y 10", function () {
    assert.equal(60, ejercicios.ejercicio_1([2,3], 10));
  });
  it('Prueba de [2,3] y "Hola" ', function () {
    assert.equal(6, ejercicios.ejercicio_1([2,3],"Hola"));
  });
  it("Prueba de [2,3] y nada", function () {
    assert.equal(6, ejercicios.ejercicio_1([2,3]));
  });
  it("Prueba de 2 y 3", function () {
    assert.equal(6, ejercicios.ejercicio_1(2,3))
  });
 });

 describe("Ejercicio 2", function(){
   it("Cuando es [996548337, 997616207], 207", function (){
     assert.deepEqual([997616207], ejercicios.ejercicio2([996548337, 997616207], 207));
   });
   it("Cuando es [996548337, 97616207], 207", function (){
     assert.deepEqual([97616207], ejercicios.ejercicio2([996548337, 97616207], 207));
   });
 });

 describe("Ejercicio 3", function(){
   it("Cuando es [7, 21, 44], 7", function (){
     assert.deepEqual([7, 21], ejercicios.ejercicio3([7,21,44], 7));
   });
   /*it("Cuando es 7 , 21 , 44  y 7", function (){
     assert.deepEqual([7, 21], ejercicios.ejercicio3(7,21,44, 207));
   }); */
 });

 describe("Ejercicio 4", function(){
   it("Cuando es [2, 5, 7, 3]", function (){
     assert.deepEqual([5,11,15,7], ejercicios.ejercicio4([2,5,7,3]));
   });
   /*it("Cuando es 2, 5, 7, 3", function (){
     assert.equal([5,11,15,7], ejercicios.ejercicio4(2,5,7,3));
   }); */
 });

 describe("Ejercicio 5", function(){
   it("Cuando es [0, 100, 120]", function (){
     assert.deepEqual([32,212,248], ejercicios.ejercicio5([0,100,120]));
   });
   /*it("Cuando es 2, 5, 7, 3", function (){
     assert.equal([5,11,15,7], ejercicios.ejercicio5(2,5,7,3));
   }); */
 });

 describe("Ejercicio 6", function(){
   it("Cuando es [5, 4, 9]", function (){
     assert.deepEqual(180, ejercicios.ejercicio6([5,4,9]));
   });
   /*it("Cuando es 2, 5, 7, 3", function (){
     assert.equal([5,11,15,7], ejercicios.ejercicio6(2,5,7,3));
   }); */
 });

 describe("Ejercicio 7", function(){
   it("Cuando es [5, 20, 24, 39]", function (){
     assert.deepEqual([1997, 1993], ejercicios.ejercicio7([5,20,24,39]));
   });
   /*it("Cuando es 2, 5, 7, 3", function (){
     assert.equal([5,11,15,7], ejercicios.ejercicio4(2,5,7,3));
   }); */
 });
});
