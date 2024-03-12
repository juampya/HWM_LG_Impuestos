/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"F55457DF-F7EA-4896-8D5B-B232A8493A76",variableType:4}
 */
var vl_valor_item = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"0D138318-EF0B-4A79-9EAE-0B7A85499857",variableType:8}
 */
var vl_valor_base = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"F5F4BDB2-4F9D-4A34-BA66-60B1020C3F66",variableType:8}
 */
var vl_valor_excedente = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"764D21DA-A080-44D3-9A28-679C5C6346CE",variableType:8}
 */
var vl_valor_alicuota = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"4F4BBD02-DFDD-4E2D-9403-AF6CD16B080D",variableType:8}
 */
var vl_valor_hasta = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"0BBC1715-BC88-4DE6-AD5D-F1C55DAC0171",variableType:8}
 */
var vl_valor_desde = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"3A9F4D96-02E9-47FD-816F-D9CA4945DCE4",variableType:93}
 */
var vl_escala_vigencia = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D71AC580-C5C7-4D0C-B003-D7A8EA012EBC"}
 */
var vl_escala_descripcion = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"33EC8937-C1D9-44E4-A688-0F8E192FAFFA",variableType:4}
 */
var vl_nuevo = null;

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"610DB261-8B60-4279-8D74-5D4A1231F582"}
 */
function onShow(firstShow, event) 
{
	if(vl_nuevo==1)
	{
		controller.newRecord(false)
		eliminado 	   		= 0
	}
	
	//Variables para auditoria
	scopes.globals.vg_auditoria_pk 	  = escala_id
	scopes.globals.vg_auditoria_tabla = new Array(foundset.getDataSource().split('/')[2])
	scopes.globals.vg_auditoria_campo = null
	
	SetearVariables()
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"34916DCA-CEAA-4F95-A231-FAE1C9481D4C"}
 */
function onActionGrabar(event) 
{
//	if(foundset.getSelectedRecord().isNew())
//	{
//		bco_cta_codigo = scopes.globals.BuscaProximoCodigo(foundset.getDataSource().split('/')[2],'bco_cta_codigo',1)
//	}
	databaseManager.saveData()
	application.getWindow('mydialog').hide()
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"E69871CF-4774-4C1D-A771-7D91C8715C32"}
 */
function onActionVolver(event) 
{
	databaseManager.revertEditedRecords()
	application.getWindow('mydialog').hide()
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @return {Boolean}
 *
 * @properties={typeid:24,uuid:"D8AC78DF-CFAF-4705-AB1F-363E4F5506B2"}
 */
function onHide(event) 
{
	onActionVolver(event)
	return true
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"338F89FF-17EB-40D5-BC65-AE444A56A78D"}
 */
function onActionAgregar(event) 
{
	if(Valido())
	{
		imp_escalas_to_imp_escalas_valores.newRecord(false)

		imp_escalas_to_imp_escalas_valores.escala_valor_desde 		= vl_valor_desde
		imp_escalas_to_imp_escalas_valores.escala_valor_hasta 		= vl_valor_hasta
		imp_escalas_to_imp_escalas_valores.escala_valor_base 		= vl_valor_base
		imp_escalas_to_imp_escalas_valores.escala_valor_alicuota 	= vl_valor_alicuota
		imp_escalas_to_imp_escalas_valores.escala_valor_excedente	= vl_valor_excedente
		imp_escalas_to_imp_escalas_valores.escala_valor_item 		= 0	
		imp_escalas_to_imp_escalas_valores.eliminado 				= 0	
		
		SetearVariables()
	}
}

/**
 * @properties={typeid:24,uuid:"5A3ADC28-F5B2-4FE8-9CA8-213CA1801686"}
 */
function SetearVariables()
{
	vl_valor_desde 		= 0
	vl_valor_hasta 		= 0
	vl_valor_base 		= 0
	vl_valor_alicuota	= 0
	vl_valor_excedente 	= 0
	vl_valor_item 	= 0
}

/**
 * @return {Boolean}
 * @properties={typeid:24,uuid:"0CF70338-3AB3-46FD-9FF8-7E349D77397F"}
 */
function Valido()
{
	
	vl_escala_descripcion 	= escala_descripcion
	vl_escala_vigencia 		= escala_vigencia
	
	if(scopes.globals.EMPTY(vl_escala_descripcion))
	{	
		scopes.globals.VentanaGenerica(scopes.globals.mx_usuario_id,scopes.globals.vg_titulo_popup_dialog, 'La descripción no puede estar vacía', 'warning',controller.getName(),null, null, null, null,null,null,null,null)
		return false
	}
	
	if(scopes.globals.EMPTY(vl_escala_vigencia))
	{	
		scopes.globals.VentanaGenerica(scopes.globals.mx_usuario_id,scopes.globals.vg_titulo_popup_dialog, 'La vigencia no puede estar vacía', 'warning',controller.getName(),null, null, null, null,null,null,null,null)
		return false
	}
	
	return true
}

/**
 * Called when the mouse is clicked on a row/cell (foundset and column indexes are given).
 * the foundsetindex is always -1 when there are grouped rows
 *
 * @param {number} foundsetindex
 * @param {number} [columnindex]
 * @param {JSRecord} [record]
 * @param {JSEvent} [event]
 *
 * @properties={typeid:24,uuid:"F41BA481-6106-4F98-A30D-F5921BDD355D"}
 */
function onCellClick(foundsetindex, columnindex, record, event) 
{
	switch (columnindex) 
	{
		case 0:
			onActionDetalle()
		break;
		case 9:
			onActionBorrar()
		break;
	}
}

/**
 * TODO generated, please specify type and doc for the paramsS
 *
 * @properties={typeid:24,uuid:"A656BE8E-5FD9-4281-AA67-EA066C00F670"}
 */
function onActionDetalle() 
{
	forms.impuestos_lg_tipos_impuestos_aplicaciones.elements.lbl_titulo.text = "Detalle aplicación"
	forms.impuestos_lg_tipos_impuestos_aplicaciones.controller.loadRecords(imp_tipo_impuestos_to_imp_tipo_impuestos_aplicacion.aplica_id)
	var w3 = application.createWindow("impuesto_aplicacion", JSWindow.MODAL_DIALOG);
	w3.title=scopes.globals.vg_titulo_popup_dialog
	forms.impuestos_lg_tipos_impuestos_aplicaciones.controller.show(w3);
}

/**
 * @properties={typeid:24,uuid:"14757FEF-11B0-4541-9758-175F9853696C"}
 */
function onActionBorrar() 
{
		
	if(scopes.globals.mx_perm_delete==1)
	{
		var nombre = imp_tipo_impuestos_to_imp_tipo_impuestos_aplicacion.aplica_descripcion
		
		scopes.globals.VentanaGenerica(scopes.globals.mx_usuario_id,'Borrar Registro','¿Está seguro de eliminar el items: '+ nombre +'?','question',controller.getName(),'No',null,'Si','Borrar',null,null,null,null)
	}
	else
	{
		scopes.globals.VentanaGenerica(scopes.globals.mx_usuario_id,scopes.globals.vg_titulo_popup_dialog,'Ud. no tiene permiso para eliminar.','info',controller.getName(),null,null,null,null,null,null,null,null)
	}
}

/**
 * @properties={typeid:24,uuid:"218A5626-C684-408C-8C0E-7DEDD94E0CFD"}
 */
function Borrar()
{

	if(imp_tipo_impuestos_to_imp_tipo_impuestos_aplicacion.getSelectedRecord().isNew())
	{
		imp_tipo_impuestos_to_imp_tipo_impuestos_aplicacion.deleteRecord()
	}
	else
	{		
		imp_tipo_impuestos_to_imp_tipo_impuestos_aplicacion.eliminado=1
		imp_tipo_impuestos_to_imp_tipo_impuestos_aplicacion.eliminado_fecha=application.getServerTimeStamp()
		imp_tipo_impuestos_to_imp_tipo_impuestos_aplicacion.eliminado_usu_id = scopes.globals.mx_usuario_id
	}
	
	databaseManager.saveData(imp_tipo_impuestos_to_imp_tipo_impuestos_aplicacion)
	databaseManager.refreshRecordFromDatabase(imp_tipo_impuestos_to_imp_tipo_impuestos_aplicacion,-1)
}
