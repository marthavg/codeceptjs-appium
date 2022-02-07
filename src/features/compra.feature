Feature: Como usuario quiero agregar un producto al carrito de compras.

Scenario: Elegir un producto y verificar que se muestre en el carrito.
Given hago clic en el botón ingresar
And ingreso mi usuario y contraseña
When selecciono la categoria del producto
And filtrar marca y sabor
And selecciono un producto del listado
Then debe visualizarse en el carrito