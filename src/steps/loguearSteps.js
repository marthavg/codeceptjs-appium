const loguearPagina = require("../pages/loguearPage");
const loguearLocator = require("../locators/loguearLocator");
//const conf = require("../config");
const { I } = inject();

Given('hago clic en el botón ingresar', ()=> {
    I.wait(3);
    I.click(loguearLocator.fields.BOTON_INGRESAR);
    I.wait(4);
});

When('ingreso mi usuario y contraseña', async () => {
    try {
        await loguearPagina.iniciarSesion();
        I.wait(5);
    } catch (error) {
        console.log('Error medio - ', error);
    }
});

Then('verificamos el usuario logueado', () => {
    try {
        loguearPagina.nombreUsuario();
    } catch (error) {
        console.log("error fin - ", error);
    }

})