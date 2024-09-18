/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"348C7829-3681-484D-8B61-E34A9ECB5ACE"}
 */
function onActionCerrar(event) 
{
//	scopes.globals.vg_provee_id = null
//	databaseManager.revertEditedRecords()
	application.getWindow('retencion_gan').hide()
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"D16AFA45-3643-42DD-ACC0-DA59178196B2"}
 */
function onAction_Imprimir(event) 
{
	var pcod_comp  = pp_impu_cod.replace('/','')
	var ptipo_comp = pp_comprobantes_impuestos_to_lg_talonarios.talonario_tipo_comp
	var psuc_comp  = utils.numberFormat(pp_impu_pv,'0000')
	var pnro_comp  = utils.numberFormat(pp_impu_nro,'00000000')
	
	var _file_name=pcod_comp+'_'+ptipo_comp+psuc_comp+pnro_comp

	scopes.globals.GeneraArchivoPDF(talonario_id,foundset.getSelectedRecord(),_file_name)
}
