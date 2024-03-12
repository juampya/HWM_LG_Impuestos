/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"256F788D-AE59-46C0-A521-287055F79619"}
 */
function onActionGrabar(event) 
{
	if(Valido())
	{
		databaseManager.saveData(foundset)
		application.getWindow('impuesto_aplicacion').hide()
	}
}

/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"DF24C7AE-352C-463D-BD1D-7EE62EE99625"}
 */
function onActionCerrar(event)
{
	databaseManager.revertEditedRecords(foundset)
	application.getWindow('impuesto_aplicacion').hide()
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"96D4E0D6-6F09-4F29-9719-4FB4DBE65C2F"}
 */
function onActionEscala(event) 
{
	if (!scopes.globals.EMPTY(aplica_usa_escala))
	{
		elements.escala_id.enabled=true
	}
	else
	{
		elements.escala_id.enabled=false
		escala_id = null
	}
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3AD6E4D2-2784-4CD4-AD5E-E3E6CC9A9A6E"}
 */
function onShow(firstShow, event) 
{
	if (!scopes.globals.EMPTY(aplica_usa_escala))
	{
		elements.escala_id.enabled=true
	}
	else
	{
		elements.escala_id.enabled=false
		escala_id = null
	}
	
	if(imp_tipo_impuestos_aplicacion_to_imp_tipo_impuestos.tipo_imp_aplicacion==1)
	{
		elements.provincia_id.enabled = true
	}
	else
	{
		elements.provincia_id.enabled = false
	}
}

/**
 * @return {Boolean}
 * @properties={typeid:24,uuid:"DD222D87-230B-4397-B33A-3E855021B6C9"}
 */
function Valido()
{
	if(scopes.globals.EMPTY(aplica_descripcion))
	{	
		scopes.globals.VentanaGenerica(scopes.globals.mx_usuario_id,scopes.globals.vg_titulo_popup_dialog, 'La descripción no puede estar vacía', 'warning',controller.getName(),null, null, null, null,null,null,null,null)
		return false
	}
	
	if(scopes.globals.EMPTY(aplica_vigencia))
	{	
		scopes.globals.VentanaGenerica(scopes.globals.mx_usuario_id,scopes.globals.vg_titulo_popup_dialog, 'La vigencia no puede estar vacía', 'warning',controller.getName(),null, null, null, null,null,null,null,null)
		return false
	}
	
//	if(scopes.globals.EMPTY(cuenta_id))
//	{	
//		scopes.globals.VentanaGenerica(scopes.globals.mx_usuario_id,scopes.globals.vg_titulo_popup_dialog, 'La cuenta contable no puede estar vacía', 'warning',controller.getName(),null, null, null, null,null,null,null,null)
//		return false
//	}
	
	
	if(!scopes.globals.EMPTY(aplica_usa_escala))
	{	
		if(scopes.globals.EMPTY(escala_id))
		{
			scopes.globals.VentanaGenerica(scopes.globals.mx_usuario_id,scopes.globals.vg_titulo_popup_dialog, 'La escala no puede estar vacía', 'warning',controller.getName(),null, null, null, null,null,null,null,null)
			return false
		}
	}
	
	return true
}
