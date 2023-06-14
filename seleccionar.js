function seleccionar() {
    let producto = ''
    let categoria = parseInt(prompt('Por favor seleccione la categoria: \n 1. Granos \n 2. aseo \n 3.carnes \n 4. lacteos' ));
    switch (categoria) {
        case 1:
            producto  = prompt('Por favor escriba el producto (arroz, frijoles, lentejas):' )
            break;
        case 2:
            producto  = prompt('Por favor escriba el producto (jabon, limpido, champu):' )
            break;
        case 3:
            producto  = prompt('Por favor escriba el producto (pescado, res, cerdo):' )
            break;
        case 4:
            producto  = prompt('Por favor escriba el producto (yogurt, leche, kumis):' )
            break;
        default:
            producto = 'Vuelva a iniciar e ingrese una categoria valida'
            break;
    }
    return producto
}
export {seleccionar}