var assert = require ("assert");

function ejercicio_1(_arr, _num) {
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

describe("Ejercicio 1", function () {
  it("Prueba de [2,3] y 10", function () {
    assert.equal(60, ejercicio_1([2,3], 10));
  });
  it('Prueba de [2,3] y "Hola" ', function () {
    assert.equal(6, ejercicio_1([2,3],"Hola"));
  });
  it("Prueba de [2,3] y nada", function () {
    assert.equal(6, ejercicio_1([2,3]));
  });
  it("Prueba de 2 y 3", function () {
    assert.equal(6, ejercicio_1(2,3))
  });
});
