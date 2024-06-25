/**
 * @properties={typeid:24,uuid:"D61AF812-6D1C-4630-967E-7F1EF8A26B0E"}
 */
function onActionClientes() 
{
	databaseManager.revertEditedRecords()
	scopes.globals.AbrirGenerico(forms.ventas_lg_clientes.controller.getName())
}

/**
 * @properties={typeid:24,uuid:"B890E349-5BF3-4948-A8EC-A1D8DA1D39B1"}
 */
function onActionProveedores() 
{
	databaseManager.revertEditedRecords()
	scopes.globals.AbrirGenerico(forms.proveedores_lg_proveedores.controller.getName())
}

/**
 * @properties={typeid:24,uuid:"11EDE7AA-CC08-47D1-B5C5-9AD3623A2536"}
 */
function onActionUsuarios() 
{
	databaseManager.revertEditedRecords()
}

/**
 * @properties={typeid:24,uuid:"A54CCC34-68C0-4659-BBC3-A84F73737E23"}
 */
function onActionFunciones() 
{
	databaseManager.revertEditedRecords()
}

/**
 * @properties={typeid:24,uuid:"E4A0360A-3A15-4F55-99DE-5599B5176B8D"}
 */
function onActionModulosImpuestos() 
{
	databaseManager.revertEditedRecords()
	forms.admin_lg_modulos_detalle.controller.loadRecords(scopes.globals.mx_modulo_id)
	scopes.globals.AbrirGenerico(forms.admin_lg_modulos_detalle.controller.getName())
}

/**
 * @properties={typeid:24,uuid:"E2EDBCB1-4F50-49F5-95A1-0D8706720A56"}
 */
function onActionNivelesAcceso() 
{
	databaseManager.revertEditedRecords()
}

/**
 * @properties={typeid:24,uuid:"04AE3B6A-E5C2-4DCA-9777-C52077B1F066"}
 */
function onActionLocalidades() 
{
	databaseManager.revertEditedRecords()
}

/**
 * @properties={typeid:24,uuid:"42AE1FEC-7C3F-4C95-876F-C025CD4C2259"}
 */
function onActionAlicuotas() 
{
	databaseManager.revertEditedRecords()
	scopes.globals.AbrirGenerico(forms.ventas_lg_alicuotas.controller.getName())
}

/**
 * @properties={typeid:24,uuid:"20867A88-B164-4496-A3BB-A9D80876C5E4"}
 */
function onActionConsulta_IVA_Ventas() 
{
	databaseManager.revertEditedRecords()
	scopes.globals.AbrirGenerico(forms.impuestos_lg_consulta_iva_ventas.controller.getName())
}

/**
 * @properties={typeid:24,uuid:"A8E97B1E-DE25-48CC-BBB3-77C48F7D48E4"}
 */
function onActionConsulta_IVA_Compras() 
{
	databaseManager.revertEditedRecords()
	scopes.globals.AbrirGenerico(forms.impuestos_lg_consulta_iva_compras.controller.getName())
}


/**
 * @properties={typeid:24,uuid:"D27FC964-921A-4F36-BDF9-37857998265E"}
 */
function onActionVendedores() 
{
	databaseManager.revertEditedRecords()
	scopes.globals.AbrirGenerico(forms.ventas_lg_vendedores.controller.getName())
}

/**
 * @properties={typeid:24,uuid:"16DF420D-1B2C-4641-9623-1FF99D796E01"}
 */
function onActionTransportes() 
{
	databaseManager.revertEditedRecords()
	scopes.globals.AbrirGenerico(forms.ventas_lg_transportes.controller.getName())
}

/**
 * @properties={typeid:24,uuid:"7C9E3438-397A-4D59-9B99-16DAD29D2BF3"}
 */
function onActionGruposClientes() 
{
	databaseManager.revertEditedRecords()
	scopes.globals.AbrirGenerico(forms.ventas_lg_grupos_clientes.controller.getName())
}

/**
 * @properties={typeid:24,uuid:"6E7317D9-9440-4861-B5DE-97A68A708DA0"}
 */
function onActionZonas() 
{
	databaseManager.revertEditedRecords()
	scopes.globals.AbrirGenerico(forms.ventas_lg_zonas.controller.getName())
}

/**
 * @properties={typeid:24,uuid:"2830A0AF-79E9-448F-9740-22EBF6A9A144"}
 */
function onActionCondicionesVentas() 
{
	databaseManager.revertEditedRecords()
	scopes.globals.AbrirGenerico(forms.ventas_lg_condiciones_de_ventas.controller.getName())
}

/**
 * @properties={typeid:24,uuid:"84D095F4-592A-46CA-BAA8-D82D8E35914A"}
 */
function onActionTalonarios() 
{
	databaseManager.revertEditedRecords()
	scopes.globals.AbrirGenerico(forms.lg_frm_talonarios.controller.getName())
}

/**
 * @properties={typeid:24,uuid:"36BCEDC6-54CF-4562-835C-B6C5EFDE3A45"}
 */
function onActionComprobantesCreditosDebitos() 
{
	databaseManager.revertEditedRecords()
	//scopes.globals.AbrirGenerico(forms.ventas_lg_comprobantes_creditosydebitos.controller.getName())
}

/**
 * @properties={typeid:24,uuid:"28CF5269-14DA-4A77-8470-DB1829774BB6"}
 */
function onActionExistenciayPrecios() 
{
	databaseManager.revertEditedRecords()
	scopes.globals.AbrirGenerico(forms.ventas_lg_consulta_existencias_y_precios.controller.getName())
}

/**
 * @properties={typeid:24,uuid:"E59FAAF0-A76C-4615-9BEF-75B987B80E2A"}
 */
function onActionRemitosEmitidos() 
{
	databaseManager.revertEditedRecords()
	scopes.globals.AbrirGenerico(forms.ventas_lg_consulta_remitos.controller.getName())
}

/**
 * @properties={typeid:24,uuid:"8A28B04F-995D-420A-8A62-D975DE6955FF"}
 */
function onActionRecibosEmitidos() 
{
	databaseManager.revertEditedRecords()
	scopes.globals.AbrirGenerico(forms.ventas_lg_consulta_recibos.controller.getName())
}

/**
 * @properties={typeid:24,uuid:"A3E99FEC-B7C5-4EF7-B32E-F579EC75D30B"}
 */
function onActionCategoriasIVA() 
{
	databaseManager.revertEditedRecords()
	scopes.globals.AbrirGenerico(forms.admin_lg_categ_iva.controller.getName())
}

/**
 * @properties={typeid:24,uuid:"31D64381-760F-4453-A737-A6EB16BF1C38"}
 */
function onActionTiposImpuestos() 
{
	databaseManager.revertEditedRecords()
	scopes.globals.AbrirGenerico(forms.impuestos_lg_tipos_impuestos.controller.getName())
}

/**
 * @properties={typeid:24,uuid:"2D63A0E0-07CB-494B-ACA4-5F0B373BE218"}
 */
function onActionEscalasImpuestos() 
{
	databaseManager.revertEditedRecords()
	scopes.globals.AbrirGenerico(forms.impuestos_lg_escalas.controller.getName())
}

/**
 * @properties={typeid:24,uuid:"63C4DB5F-E690-48DC-A3EE-6BD0F8D2761D"}
 */
function onActionConsulta_Retenciones() 
{
	databaseManager.revertEditedRecords()
	scopes.globals.AbrirGenerico(forms.impuestos_lg_consulta_retenciones.controller.getName())
}

/**
 * @properties={typeid:24,uuid:"22C86733-BA2D-4F04-B0FD-1BBC8D6BE206"}
 */
function onActionConsulta_Percepciones() 
{
	databaseManager.revertEditedRecords()
	scopes.globals.AbrirGenerico(forms.impuestos_lg_consulta_percepciones.controller.getName())
}

/**
 * @properties={typeid:24,uuid:"F813CEE6-1C57-4E84-B572-03635055AFFB"}
 */
function onActionParametros() 
{
	databaseManager.revertEditedRecords()
	
	var w3 = application.createWindow("parametros", JSWindow.MODAL_DIALOG);
	w3.title=scopes.globals.vg_titulo_popup_dialog
	forms.impuestos_lg_parametros.controller.show(w3);
}

/**
 * @properties={typeid:24,uuid:"2903D97F-C742-4EB2-ACCD-A2FE2158CE1A"}
 */
function onActionConsulta_IVAaPagar() 
{
	databaseManager.revertEditedRecords()
	//scopes.globals.AbrirGenerico(forms.impuestos_lg_consulta_percepciones.controller.getName())
	
	var w3 = application.createWindow("ivaapagar", JSWindow.MODAL_DIALOG);
	w3.title=scopes.globals.vg_titulo_popup_dialog
	forms.impuestos_lg_consulta_iva_apagar.controller.show(w3);
}