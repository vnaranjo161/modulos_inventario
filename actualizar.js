function ExistenciasDisponibles() {
    let mensaje = `
    arroz: ${localStorage.getItem('arroz')}\n
    frijoles: ${localStorage.getItem('frijoles')}\n
    lentejas: ${localStorage.getItem('lentejas')}\n
    jabon: ${localStorage.getItem('jabon')}\n
    limpido: ${localStorage.getItem('limpido')}\n
    champu: ${localStorage.getItem('champu')}\n
    pescado: ${localStorage.getItem('pescado')}\n
    res: ${localStorage.getItem('res')}\n
    cerdo: ${localStorage.getItem('cerdo')}\n
    yogurt: ${localStorage.getItem('yogurt')}\n
    leche: ${localStorage.getItem('leche')}\n
    kumis: ${localStorage.getItem('kumis')}`
    return mensaje
}
function eliminarExistencias(producto, cantidad) {
    let cantidadActual = localStorage.getItem(producto);
    localStorage.setItem(producto, parseInt(cantidadActual) - cantidad);
    return 'actualizado'
}
function ingresarExistencias(producto, cantidad) {
    let cantidadActual = localStorage.getItem(producto);
    localStorage.setItem(producto, parseInt(cantidadActual) + cantidad);
    return 'actualizado'
}
function actualizar(accion, product, cantidad) {
    if (accion == 1) {
        let eliminar = eliminarExistencias(product, cantidad)
        if (eliminar == "actualizado"){
            return ExistenciasDisponibles();
        }else{
            return "Ocurrió un error al actualizar"
          } 
    } else if (accion == 2) {
        let agregar = ingresarExistencias(product, cantidad)
        if (agregar == "actualizado"){
            return ExistenciasDisponibles();
        }else{
            return "Ocurrió un error al actualizar"
          }
    }
}
export {actualizar};