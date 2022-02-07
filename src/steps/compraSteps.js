const compraPagina = require("../pages/compraPage");
const { I } = inject();

When('selecciono la categoria del producto', async ()=>{
    try {
        await compraPagina.seleccionCatProducto();
    } catch (error) {
        console.log('error',error);
    }
});

When('filtrar marca y sabor', async () => {
    try {
        await compraPagina.filtroCompra();
        
    } catch (error) {
        console.log('Error de filtro', error );
    }
});

When('selecciono un producto del listado', async () => {
    try {
        await compraPagina.seleccionarProducto();
        
    } catch (error) {
        console.log('Error de la selección', error );
    }
});

Then('debe visualizarse en el carrito', async () => {
    try {
        await compraPagina.visualizarCarrito();
    } catch (error) {
        console.log('Error visuaizacion - ', error );
    }
})

