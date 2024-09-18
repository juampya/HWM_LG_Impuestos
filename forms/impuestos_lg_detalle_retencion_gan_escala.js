/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"6DBE0D56-CB38-47ED-80DF-7A174401D42B"}
 */
function onActionCerrar(event) 
{
//	scopes.globals.vg_provee_id = null
//	databaseManager.revertEditedRecords()
	application.getWindow('retencion_gan_escala').hide()
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"8B2D505D-9624-453E-8FD2-2644CB8EE977"}
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
