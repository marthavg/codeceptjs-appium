const comprasLocator = require("../locators/compraLocator");
const { I } = inject();
let producto = "";

module.exports = {

    async seleccionCatProducto(){
        try {
            I.wait(5);
            I.waitForElement(comprasLocator.fields.BOTON_PASILLO,2);
            await I.click(comprasLocator.fields.BOTON_PASILLO);
            I.wait(7);
            await I.click('Lácteos');
            I.wait(7);
            await I.click('Yogures');
            I.wait(10);
            
        } catch (error) {
            console.log('Error en seleccionCatProducto - ',error)
        }
    },

    async filtroCompra(){
        try {
            I.wait(3);
            I.waitForElement(comprasLocator.fields.FILTRO, 7);
            await I.click(comprasLocator.fields.FILTRO);
            I.wait(3);
            I.touchPerform([
                {action: 'press', options: {x: 490,y: 1500}},
                {action: 'moveTo', options: {x: 490,y: 490}},
                {action: 'release'}]);
            I.wait(3);
            await I.click('Marca');
            I.wait(3);
            await I.waitForElement({xpath: comprasLocator.fields.CHECKBOX_MARCA}, 15);
            await I.click({xpath: comprasLocator.fields.CHECKBOX_MARCA});
            I.touchPerform([
                {action: 'press', options: {x: 490,y: 1500}},
                {action: 'moveTo', options: {x: 490,y: 490}},
                {action: 'release'}]);
            I.wait(3);
            await I.click('Sabor');
            await I.waitForElement({xpath: comprasLocator.fields.CHECKBOX_SABOR}, 15);
            await I.click({xpath: comprasLocator.fields.CHECKBOX_SABOR});
            I.wait(3);
            await I.click(comprasLocator.fields.APLICAR_FILTRO);
            I.wait(3);
        } catch (error) {
            console.log("Error en filtroCompra -", error);
        }
    },

    async seleccionarProducto(){
        try {
            await I.waitForElement({xpath: comprasLocator.fields.SELECCIONAR_PRODUCTO}, 15);
            await I.click({xpath: comprasLocator.fields.SELECCIONAR_PRODUCTO});
            producto = await I.grabTextFrom(comprasLocator.fields.LABEL_PRODUCTO);
            I.wait(3);
            I.click('Agregar');
            I.wait(3);
        } catch (error) {
            console.log("Error en seleccionarProducto -", error);
        }
    },

    async visualizarCarrito(){
        try {
            console.log('---- inicio visualizar carrito -----');
            await I.waitForElement({xpath: comprasLocator.fields.CARRITO}, 10);
            await I.click({xpath: comprasLocator.fields.CARRITO});
            await I.waitForElement(comprasLocator.fields.CARRITO_PRODUCTO, 10);
            const listaProducto = await I.grabTextFrom(comprasLocator.fields.CARRITO_PRODUCTO);
            I.assertEqual( producto , listaProducto);
            I.wait(5);
        } catch (error) {
            console.log("Error en visualizarCarrito -", error);            
        }
    }
}