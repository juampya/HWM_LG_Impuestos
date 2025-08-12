/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"AC1FA0F2-1EAF-4EEE-B1DB-223327C30AF6",variableType:4}
 */
var vl_cod_impuesto = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"DDF3F8F2-5316-4F7E-A6AC-6735324A29B3",variableType:4}
 */
var vl_aplica_sobre_neto = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"972E7C97-8824-46CD-AFD3-D20C475A1BBC",variableType:4}
 */
var vl_provincia_id = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"3244D05D-0D80-4199-8C2D-C7786B2AD3DC",variableType:4}
 */
var vl_categoria = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"01E1BC89-2783-4895-93C7-02CBED2771F7",variableType:4}
 */
var vl_escala_id = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"E35C637D-8FEA-4665-8795-5FA1B937B602",variableType:8}
 */
var vl_minimo_noins = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"BE947122-387C-498E-9D88-80D26EC63C9C",variableType:8}
 */
var vl_alicuota_noins = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"AA7EBE9A-3F57-4663-AA24-59A80AE19A95",variableType:4}
 */
var vl_cta_ctb = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"EDF3D97F-6249-4A28-AE41-F2729C40950E",variableType:4}
 */
var vl_usa_escala = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"087665CB-3132-4EA5-8AE4-FA6DE18BD200",variableType:8}
 */
var vl_alicuota = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"5509C983-ED83-4224-9568-4914E5D37790",variableType:8}
 */
var vl_minimo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"6BEC1269-8252-4DB7-BFCF-681F169C2DF7",variableType:8}
 */
var vl_base_no_imponible = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"99C0A73D-7828-4C84-9BF0-6BB5FBF1AAE0",variableType:93}
 */
var vl_vigencia = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C36B6881-3776-41D1-8C38-379118E9D1CB"}
 */
var vl_descripcion = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"A232187C-70AB-4CF1-A00D-FE53178C3AEB",variableType:4}
 */
var vl_resolucion = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"00435DEE-2E91-4D8D-BA8A-83927BC6FA51",variableType:4}
 */
var vl_regimen = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"0DDE96F4-0117-4A46-A6FC-A5FC5EE00FC2",variableType:4}
 */
var vl_nuevo = null;

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"911452CB-FBB9-4B24-83C7-B2837246E036"}
 */
function onShow(firstShow, event) 
{
	if(vl_nuevo==1)
	{
		controller.newRecord(false)
		tipo_imp_aplicacion = 0
		eliminado 	   		= 0
	}
	
	//Variables para auditoria
	scopes.globals.vg_auditoria_pk 	  = tipo_imp_id
	scopes.globals.vg_auditoria_tabla = new Array(foundset.getDataSource().split('/')[2])
	scopes.globals.vg_auditoria_campo = null
	
	SetearVariables()
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"2FE60F30-AB34-4735-B0D2-1C6483E55050"}
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
 * @properties={typeid:24,uuid:"8237CCDE-A8BD-42C0-B22B-CB83BA21EE04"}
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
 * @properties={typeid:24,uuid:"70955BD5-385B-40E3-B0FE-ABB1C1B9CB04"}
 */
function onHide(event) 
{
	onActionVolver(event)
	return true
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"5CCB72C2-82BB-4EAA-BC50-73E5818B3E64"}
 */
function onActionAgregar(event) 
{
	if(Valido())
	{
		imp_tipo_impuestos_to_imp_tipo_impuestos_aplicacion.newRecord(false)
		imp_tipo_impuestos_to_imp_tipo_impuestos_aplicacion.aplica_alicuota 		= vl_alicuota
		imp_tipo_impuestos_to_imp_tipo_impuestos_aplicacion.aplica_base_noimponible = vl_base_no_imponible
		imp_tipo_impuestos_to_imp_tipo_impuestos_aplicacion.aplica_descripcion 		= vl_descripcion
		imp_tipo_impuestos_to_imp_tipo_impuestos_aplicacion.aplica_minimo 			= vl_minimo
		imp_tipo_impuestos_to_imp_tipo_impuestos_aplicacion.aplica_regimen 			= vl_regimen
		imp_tipo_impuestos_to_imp_tipo_impuestos_aplicacion.aplica_resolucion 		= vl_resolucion
		imp_tipo_impuestos_to_imp_tipo_impuestos_aplicacion.aplica_usa_escala 		= vl_usa_escala
		imp_tipo_impuestos_to_imp_tipo_impuestos_aplicacion.aplica_vigencia 		= vl_vigencia
		imp_tipo_impuestos_to_imp_tipo_impuestos_aplicacion.cuenta_id	    		= vl_cta_ctb
		imp_tipo_impuestos_to_imp_tipo_impuestos_aplicacion.eliminado 				= 0	
		imp_tipo_impuestos_to_imp_tipo_impuestos_aplicacion.aplica_alicuota_noinsc 	= vl_alicuota_noins
		imp_tipo_impuestos_to_imp_tipo_impuestos_aplicacion.aplica_minimo_noinsc 	= vl_minimo_noins
		imp_tipo_impuestos_to_imp_tipo_impuestos_aplicacion.escala_id 				= vl_escala_id
		imp_tipo_impuestos_to_imp_tipo_impuestos_aplicacion.provincia_id 			= vl_provincia_id
		imp_tipo_impuestos_to_imp_tipo_impuestos_aplicacion.aplica_sobre_neto 	 	= vl_aplica_sobre_neto
		imp_tipo_impuestos_to_imp_tipo_impuestos_aplicacion.aplica_cod_impuesto	 	= vl_cod_impuesto
		imp_tipo_impuestos_to_imp_tipo_impuestos_aplicacion.emp_id					= scopes.globals.mx_empresa_id
		
		SetearVariables()
	}
}

/**
 * @properties={typeid:24,uuid:"C8ED00F5-2705-4290-BE81-ED7DD64CC130"}
 */
function SetearVariables()
{
	vl_alicuota 		 = 0
	vl_minimo 			 = 0
	vl_base_no_imponible = 0
	vl_usa_escala 		 = 0
	vl_categoria 		 = 0
	vl_descripcion 		 = null
	vl_regimen 			 = null
	vl_resolucion 		 = null
	vl_vigencia 		 = null
	vl_cta_ctb			 = null
	vl_alicuota_noins 	 = 0
	vl_minimo_noins 	 = 0
	vl_escala_id	 	 = null
	vl_provincia_id	 	 = 0
	vl_aplica_sobre_neto = 1
	vl_cod_impuesto		 = null
}

/**
 * @return {Boolean}
 * @properties={typeid:24,uuid:"F395CD1C-6E22-4FCD-B3F7-AE573A2013A1"}
 */
function Valido()
{
	if(scopes.globals.EMPTY(vl_descripcion))
	{	
		scopes.globals.VentanaGenerica(scopes.globals.mx_usuario_id,scopes.globals.vg_titulo_popup_dialog, 'La descripción no puede estar vacía', 'warning',controller.getName(),null, null, null, null,null,null,null,null)
		return false
	}
	
	if(scopes.globals.EMPTY(vl_vigencia))
	{	
		scopes.globals.VentanaGenerica(scopes.globals.mx_usuario_id,scopes.globals.vg_titulo_popup_dialog, 'La vigencia no puede estar vacía', 'warning',controller.getName(),null, null, null, null,null,null,null,null)
		return false
	}
	
	if(!scopes.globals.ag_empresavigente.emp_usa_contabilidad)
	{
		if(scopes.globals.EMPTY(vl_cta_ctb))
		{	
			scopes.globals.VentanaGenerica(scopes.globals.mx_usuario_id,scopes.globals.vg_titulo_popup_dialog, 'La cuenta contable no puede estar vacía', 'warning',controller.getName(),null, null, null, null,null,null,null,null)
			return false
		}
	}

	if(!scopes.globals.EMPTY(vl_usa_escala))
	{	
		if(scopes.globals.EMPTY(vl_escala_id))
		{
			scopes.globals.VentanaGenerica(scopes.globals.mx_usuario_id,scopes.globals.vg_titulo_popup_dialog, 'La escala no puede estar vacía', 'warning',controller.getName(),null, null, null, null,null,null,null,null)
			return false
		}
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
 * @properties={typeid:24,uuid:"854164C8-D07A-46E4-B2D0-7468AD1A0DAF"}
 */
function onCellClick(foundsetindex, columnindex, record, event) 
{
	switch (columnindex) 
	{
		case 0:
			onActionDetalle()
		break;
		case 12:
			onActionBorrar()
		break;
	}
}

/**
 * TODO generated, please specify type and doc for the paramsS
 *
 * @properties={typeid:24,uuid:"9F5802A8-24DB-4DD7-8AE5-DC0786C9A9AD"}
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
 * @properties={typeid:24,uuid:"A80658AF-49B8-471C-9EA4-3DF2CB40E0BC"}
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
 * @properties={typeid:24,uuid:"FC11881B-F5B5-46B6-8159-3F4227F8D953"}
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

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"AD178D4E-5FB2-4B41-B00A-CD91561D8F35"}
 */
function onActionEscala(event) 
{
	if (!scopes.globals.EMPTY(vl_usa_escala))
	{
		elements.vl_escala_id.enabled=true
	}
	else
	{
		elements.vl_escala_id.enabled=false
		vl_escala_id = null
	}
}
