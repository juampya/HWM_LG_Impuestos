
/**
 * Callback method for when solution is opened.
 * When deeplinking into solutions, the argument part of the deeplink url will be passed in as the first argument
 * All query parameters + the argument of the deeplink url will be passed in as the second argument
 * For more information on deeplinking, see the chapters on the different Clients in the Deployment Guide.
 *
 * @param {String} arg startup argument part of the deeplink url with which the Client was started
 * @param {Object<Array<String>>} queryParams all query parameters of the deeplink url with which the Client was started
 *
 * @properties={typeid:24,uuid:"50CE2D35-E836-46EA-898D-24698AB735BC"}
 */
function onSolutionOpen_Impuestos(arg, queryParams) 
{
	try 
	{
		if(application.isInDeveloper())
		{
			scopes.globals.InicializaParametros(scopes.globals.mx_empresa_id,scopes.globals.mx_sucursal_id) //Esta en id_parametrosGenerales
		}
		
		databaseManager.setAutoSave(false)
	    scopes.globals.mx_modulo_nombre  = application.getSolutionName() //Nombre que tiene en el administrator.
	    scopes.globals.mx_modulo_version = application.getVersionInfo()[scopes.globals.mx_modulo_nombre]   
		scopes.globals.mx_modulo_nivel 	 = 0 // Siempre cero.	
	    scopes.globals.mx_modulo_id 	 = 10
	    scopes.globals.mx_modulo_inicio  = ag_solucionvigente.modulo_form_start
		
	    scopes.globals.CerrarPantallaWait()
	} 
	catch (e) 
	{
		scopes.globals.CerrarPantallaWait()
	}
}

/**
 * @properties={typeid:24,uuid:"AA916A2A-8EF8-47B6-8637-F0569D4B3BD1"}
 */
function InicializaArgento_LG_Impuestos()
{
	scopes.globals.mx_empresa_id  = arguments[0]
	scopes.globals.mx_sucursal_id = arguments[1]["b"]
	
	scopes.globals.InicializaParametros(scopes.globals.mx_empresa_id,scopes.globals.mx_sucursal_id) //Esta en id_parametrosGenerales

}