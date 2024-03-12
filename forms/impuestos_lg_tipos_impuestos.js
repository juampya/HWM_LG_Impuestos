/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"68F9D51D-35D7-41C4-9979-5A2F0B633611"}
 */
function onActionVolver(event) 
{
	scopes.globals.VolverGenerico()
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"EA053006-0BE2-458E-A36A-5B3CEF0F2C61"}
 */
function onActionRefrescar(event)
{
	onShow(true,null)
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"E7B3F91F-274F-423F-85CC-EBA072ED33F3"}
 */
function onActionImprimir(event) 
{
	// TODO Auto-generated method stub

}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E52E4C8D-CCE5-48F7-BD42-626D94D9C4D3"}
 */
function onShow(firstShow, event) 
{
	
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
 * @properties={typeid:24,uuid:"9D5C865B-515D-4D99-B1F7-5D2DD73F5777"}
 */
function onCellClick(foundsetindex, columnindex, record, event) 
{
	switch (columnindex) 
	{
		case 0:
			onActionDetalle(event)
		break;
	}
}

/**
 * @properties={typeid:24,uuid:"CF3E8BE9-E932-447F-8DF8-B38F8AC50A68"}
 */
function Borrar()
{
	eliminado=1
	eliminado_fecha = application.getServerTimeStamp()
	eliminado_usu_id = scopes.globals.mx_usuario_id
	
	databaseManager.saveData(foundset.getSelectedRecord())
	databaseManager.refreshRecordFromDatabase(foundset,-1)
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"465438F4-770F-4346-A2FF-171CF99A0B6B"}
 */
function onActionNuevo(event) 
{
	forms.impuestos_lg_tipos_impuestos_detalle.elements.lbl_titulo.text = "Nuevo movimiento"
	forms.impuestos_lg_tipos_impuestos_detalle.vl_nuevo = 1
	var w3 = application.createWindow("mydialog", JSWindow.MODAL_DIALOG);
	w3.title=scopes.globals.vg_titulo_popup_dialog
	w3.resizable = true
	forms.impuestos_lg_tipos_impuestos_detalle.controller.show(w3);
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"C9660D14-9078-4E19-835A-A4D691A30FB9"}
 */
function onActionDetalle(event) 
{
	forms.impuestos_lg_tipos_impuestos_detalle.elements.lbl_titulo.text = "Detalle del tipo de impuesto"
	forms.impuestos_lg_tipos_impuestos_detalle.vl_nuevo = 0
	var w3 = application.createWindow("mydialog", JSWindow.MODAL_DIALOG);
	w3.title=scopes.globals.vg_titulo_popup_dialog
	forms.impuestos_lg_tipos_impuestos_detalle.controller.show(w3);
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
 * @properties={typeid:24,uuid:"2D9AF110-2FF5-4E55-95A1-9F263EDE5CE2"}
 */
function onCellDoubleClick(foundsetindex, columnindex, record, event) 
{
	onActionDetalle(event)
}
