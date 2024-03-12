/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B50B4FC5-AC02-47F5-A52C-D5833EB884BB",variableType:4}
 */
var vl_aplica_sobre_neto = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C319E425-B732-4B9F-93AC-E4809FAEA26A",variableType:4}
 */
var vl_escala_id = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"149F51A0-559B-40F3-AA82-97176C01C951",variableType:8}
 */
var vl_minimo_noins = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D82560C7-8857-4F61-BB8D-63232F0C3EF7",variableType:8}
 */
var vl_alicuota_noins = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"62D61825-3997-473E-AB44-94960899FACA",variableType:4}
 */
var vl_cta_ctb = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"992BAF0E-4115-4186-A04B-7697DA6D2FE4",variableType:4}
 */
var vl_usa_escala = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"46BA6C8E-AE13-4AC7-82C2-131894C4C960",variableType:8}
 */
var vl_alicuota = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C5B69A5A-8B05-4C45-923E-D4130B4D68F1",variableType:8}
 */
var vl_minimo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"8B130A4B-B092-4985-8A99-439844DAECDF",variableType:8}
 */
var vl_base_no_imponible = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"5A3B7BDB-746E-4B91-8600-41B2D96AA123",variableType:93}
 */
var vl_vigencia = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"362710CB-A962-4135-95EF-04666D8696D4"}
 */
var vl_descripcion = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D264BB4B-565F-48FB-B61D-33CF8B411D7F",variableType:4}
 */
var vl_resolucion = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"138B65FD-1A3B-4AB4-82A6-CE2369DE31B9",variableType:4}
 */
var vl_regimen = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"8AC7517A-FB11-4C06-83B0-3E9C04C17383",variableType:4}
 */
var vl_nuevo = null;

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0F8F7871-0E39-43AC-8E44-7AB9DFBB8362"}
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
 * @properties={typeid:24,uuid:"0D8FD1D3-B325-4CF5-BC65-B73CAD80B106"}
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
 * @properties={typeid:24,uuid:"9DACEE41-093E-40EC-AC65-B6B087892632"}
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
 * @properties={typeid:24,uuid:"78BAD630-F8CC-40A5-A403-F7553B945E68"}
 */
function onHide(event) 
{
	onActionVolver(event)
	return true
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"53B33CCD-26FA-4CA3-8339-FA0DBAF7EF17"}
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
 * @properties={typeid:24,uuid:"A72FE539-EB52-4D6C-B16D-2ABC3D19DBF9"}
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
	vl_escala_id	 	 = null
	vl_aplica_sobre_neto = 1
}

/**
 * @return {Boolean}
 * @properties={typeid:24,uuid:"CD2FCA98-C153-49B0-81E9-A6B794E36EB9"}
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
 * @properties={typeid:24,uuid:"302FF4AF-7B9E-4B29-A51C-771E18975659"}
 */
function onCellClick(foundsetindex, columnindex, record, event) 
{
	switch (columnindex) 
	{
		case 0:
			onActionDetalle()
		break;
		case 10:
			onActionBorrar()
		break;
	}
}

/**
 * TODO generated, please specify type and doc for the paramsS
 *
 * @properties={typeid:24,uuid:"F655B9EA-A55B-4051-BD97-061BA161087C"}
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
 * @properties={typeid:24,uuid:"C5E10EFE-8A7C-4161-9C9A-6C10A66D55C8"}
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
 * @properties={typeid:24,uuid:"4775DAE4-0918-43F1-B1DA-78CE629852B6"}
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
 * @properties={typeid:24,uuid:"5A1535F7-4FB7-4573-B9ED-3E3BAD07D216"}
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
