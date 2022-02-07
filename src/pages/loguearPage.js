const loguearLocator = require("../locators/loguearLocator");
const conf = require("../config");
const { I } = inject();

module.exports = {

    async iniciarSesion(){
        try {
            I.fillField(loguearLocator.fields.USUARIO, conf.USUARIO);
            I.wait(3);
            await I.waitForElement(loguearLocator.fields.CONTRASENIA,10);
            I.fillField(loguearLocator.fields.CONTRASENIA, secret(conf.CONTRASENIA));
            await I.click(loguearLocator.fields.BOTON_INGRESAR);
            I.wait(3);
        } catch (error) {
            console.log('Error en iniciarSesion - ',error);
            return error;
        }
    },

    async nombreUsuario(){
        try {
            I.click(loguearLocator.fields.BOTON_MAS);
            await I.waitForElement(loguearLocator.fields.LABEL_USUARIO,2);
            const usuario = await I.grabTextFrom(loguearLocator.fields.LABEL_USUARIO);
            I.assertEqual( conf.NOMBRE , usuario);
            I.wait(3);
        } catch (error) {
            console.log('Error en nombreUsuario - ',error);
        }
    }
}