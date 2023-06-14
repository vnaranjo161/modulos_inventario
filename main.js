import { seleccionar } from "./seleccionar.js";
import { actualizar} from "./actualizar.js";
import { esquema } from "./model.js";
esquema()
function main() {
    let repetir = true
    while (repetir) {
        let accion = parseInt(prompt('Usted desea: \n 1. Eliminar \n 2. Agregar '))
        let product = seleccionar()
        let cantidad = parseInt(prompt('Ingrese la cantidad que desea actualizar o eliminar'))
        console.log(actualizar(accion, product, cantidad));
        let repit = parseInt(prompt('Usted desea: \n 1. Actualizar otro producto \n 2. Salir '))
        if (repit == 1) {
            repetir = true
        }else{
            repetir = false
        }
    }
}
main()