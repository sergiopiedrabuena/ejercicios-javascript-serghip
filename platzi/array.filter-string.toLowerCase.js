const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

/**
 * Filtra la matríz en función de un criterio de búsqueda (query)
 */
const filterItems = (query) => {
  return fruits.filter((el) =>
    //El método toLowerCase() devuelve el valor en minúsculas de la cadena que realiza la llamada.
    //El método indexOf() retorna el primer índice en el que se puede encontrar un elemento dado en el array, ó retorna -1 si el elemento no esta presente.
    //--
    //analiza elemento a element(el), lo pasa a minusculas, y busca la posicion(indexof) de query(consulta string 
    //pasado como parametro) tambien pasado a minuscula, dentro de cada elemento particular. si devuelve una posicion mayor a -1, 
    //devuelve true, por lo que devuelve el element(el)
    el.toLowerCase().indexOf(query.toLowerCase()) > -1
  );
}

console.log(filterItems('ap')); // ['apple', 'grapes']
console.log(filterItems('AN')); // ['banana', 'mango', 'orange']