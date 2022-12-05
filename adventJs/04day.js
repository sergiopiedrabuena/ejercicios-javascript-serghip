/* Santa Claus necesita hacer una revisión de sus cajas de regalos para asegurarse de que puede empaquetarlas todas en su trineo. Cuenta con una serie de cajas de diferentes tamaños, que se caracterizan por su longitud, anchura y altura.

Tu tarea es escribir una función que, dada una lista de cajas con sus tamaños, determine si es posible empaquetar todas las cajas en una sola de manera que cada caja contenga a otra (que a su vez contenga a otra, y así sucesivamente).

Cada caja representa sus medidas con un objeto. Por ejemplo: {l: 2, w: 3, h: 2}. Esto significa que la caja tiene una longitud de 2, una anchura de 3 y una altura de 2.

Una caja entra en otra caja si todos los lados de la primera son menores a los lados de la segunda. Los elfos nos han dicho que las cajas no se pueden rotar, así que no se puede poner una caja de 2x3x2 en una caja de 3x2x2. Veamos unos ejemplos:
*/

const boxes = [
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 }
]
const messyBoxes = [
    { l: 3, w: 3, h: 3 },
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 }
]
const notFittedBoxes = [
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 1 },
    { l: 3, w: 1, h: 3 }
]

function fitsInOneBox(boxes) {
    boxes.sort(function (a, b) { return a.l - b.l });
    for (let i = 0; i < (boxes.length - 1); i++) {
        let currentL = boxes[i].l;
        let currentW = boxes[i].w;
        let currentH = boxes[i].h;
        let nextL = boxes[i + 1].l;
        let nextW = boxes[i + 1].w;
        let nextH = boxes[i + 1].h;
        if (currentL >= nextL ||currentW >= nextW || currentH >= nextH) {
            return false
        }
    }
    return true
}

console.log(fitsInOneBox(boxes)) // true
console.log(fitsInOneBox(messyBoxes)) // true
console.log(fitsInOneBox(notFittedBoxes)) // false