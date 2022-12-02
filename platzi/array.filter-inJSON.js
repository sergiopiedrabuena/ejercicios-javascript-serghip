var arr = [
    { id: 15 },
    { id: -1 },
    { id: 0 },
    { id: 3 },
    { id: 12.2 },
    { },
    { name: 'pepe'},
    { id: null },
    { id: NaN },
    { id: 'undefined' }
  ];
  
  var entradasInvalidas = 0;
  // Si el elemento tiene un atributo id, y su valor correspondiente es un numero
  // Y no es el valor NaN, entonces es una entrada válida
  function filtrarPorID(obj) {
    console.log('id' in obj)
    //console.log(!isNaN(obj.id))
    if (
    'id' in obj // true si key 'id' existe, false si key 'id' no existe
    && typeof(obj.id) === 'number' //define si es type number
    && !isNaN(obj.id) //isNaN devuelve true si el parametro pasado no puede ser convertido en numero, false caso contrario. is NaN esta negado, invierte booleanos, determinando en true los valores numericos y null
    ) {
      return true;
    } else {
      entradasInvalidas++;
      return false;
    }
  }
  
  var arrPorID = arr.filter(filtrarPorID);
  
  console.log('Array Filtrado\n', arrPorID);
  // [{ id: 15 }, { id: -1 }, { id: 0 }, { id: 3 }, { id: 12.2 }]
  
  console.log('Número de Entradas Invalidas = ', entradasInvalidas);
  // 4