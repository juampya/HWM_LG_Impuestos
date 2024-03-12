/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"1720C792-D0FB-4437-9B76-1AEC6037E308",variableType:4}
 */
var vl_aplica_sobre_neto = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"42FCB6E4-0040-4841-B99D-0F99F514E182",variableType:8}
 */
var vl_minimo_noins = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"3574E265-801A-4082-B49B-10113F71F1AC",variableType:8}
 */
var vl_alicuota_noins = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"CF756D65-A188-47BA-BEF2-C386FC35605F",variableType:4}
 */
var vl_cta_ctb = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"DD29A689-8B71-453C-AE99-47AF69C946E4",variableType:4}
 */
var vl_usa_escala = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"2F45F659-87E5-4789-8797-1728D8CF1BA6",variableType:8}
 */
var vl_alicuota = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"973973A2-26EB-4C95-98E9-0556253FDCA2",variableType:8}
 */
var vl_minimo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"7E653406-112F-4F4D-817E-BFE7D95D04FE",variableType:8}
 */
var vl_base_no_imponible = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"7339C9CE-1227-4B3D-A949-BCF89DD500AC",variableType:93}
 */
var vl_vigencia = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"2EA32AEC-E412-4F51-B318-9B53D3A76B44"}
 */
var vl_descripcion = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"5A97A82C-9E5F-4EE2-9B79-80EDC14AACDA",variableType:4}
 */
var vl_resolucion = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"FB7BAD86-E84D-401F-B3A0-1AB1D18FC5AB",variableType:4}
 */
var vl_regimen = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"F2D2BEA1-506C-4C0E-A643-5E343D85F758",variableType:4}
 */
var vl_nuevo = null;

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1D952740-B5A4-4DD4-8480-55C0A8059D3B"}
 */
function onShow(firstShow, event) 
{
	databaseManager.refreshRecordFromDatabase(foundset,-1)
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
 * @properties={typeid:24,uuid:"D78BC7F6-BB1B-4039-9AD8-2046B4E5902D"}
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
 * @properties={typeid:24,uuid:"27D069DF-E958-4FB9-A8F8-21513DF22B52"}
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
 * @properties={typeid:24,uuid:"FB7DD9AF-FD69-413A-A9B7-0EB29EBD1350"}
 */
function onHide(event) 
{
	onActionVolver(event)
	return true
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"1561C689-E106-426F-BFB8-0D286D66DA7E"}
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
		imp_tipo_impuestos_to_imp_tipo_impuestos_aplicacion.aplica_sobre_neto 	 	= vl_aplica_sobre_neto
		imp_tipo_impuestos_to_imp_tipo_impuestos_aplicacion.emp_id					= scopes.globals.mx_empresa_id
		
		SetearVariables()
	}
}

/**
 * @properties={typeid:24,uuid:"7F873609-4588-4179-BC4E-2A37AC165615"}
 */
function SetearVariables()
{
	vl_alicuota 		 = 0
	vl_minimo 			 = 0
	vl_base_no_imponible = 0
	vl_usa_escala 		 = 0
	vl_descripcion 		 = null
	vl_regimen 			 = null
	vl_resolucion 		 = null
	vl_vigencia 		 = null
	vl_cta_ctb			 = null
	vl_alicuota_noins 	 = 0
	vl_minimo_noins 	 = 0
	vl_aplica_sobre_neto = 1
}

/**
 * @return {Boolean}
 * @properties={typeid:24,uuid:"F83994A3-510C-48BC-B36D-D11E41B5BD46"}
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
	
//	if(scopes.globals.EMPTY(vl_cta_ctb))
//	{	
//		scopes.globals.VentanaGenerica(scopes.globals.mx_usuario_id,scopes.globals.vg_titulo_popup_dialog, 'La cuenta contable no puede estar vacía', 'warning',controller.getName(),null, null, null, null,null,null,null,null)
//		return false
//	}
	
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
 * @properties={typeid:24,uuid:"5CB46A1F-F53E-450B-816B-362E7029190F"}
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
 * @properties={typeid:24,uuid:"EA7155DD-BBEA-4147-8308-AE4D21335547"}
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
 * @properties={typeid:24,uuid:"10B2DC66-CC91-4A23-8034-6EAB561F8F60"}
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
 * @properties={typeid:24,uuid:"5C973A02-CD21-4E59-BD1D-7A0DDC2DB9E4"}
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
