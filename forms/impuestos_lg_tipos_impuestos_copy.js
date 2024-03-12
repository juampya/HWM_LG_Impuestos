/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"C767ACDC-91CB-4AAA-9972-C2DF75A74B65"}
 */
function onActionVolver(event) 
{
	scopes.globals.VolverGenerico()
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"0443B56F-22A1-4B16-9759-4EB63F9D1937"}
 */
function onActionRefrescar(event)
{
	onShow(true,null)
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"B388CA8A-76CE-45D9-9EC4-254A1EFCF9D7"}
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
 * @properties={typeid:24,uuid:"C479B7C0-BFF9-407C-9BF1-77C0AD7F9BD1"}
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
 * @properties={typeid:24,uuid:"E0D1CED7-C10E-4D15-AAA4-216D91D1C57B"}
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
 * @properties={typeid:24,uuid:"C2B132FC-497E-4F66-B8CC-85165ED1AF22"}
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
 * @properties={typeid:24,uuid:"DE3D2143-365C-4F87-BBA1-25897F51BB0A"}
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
 * @properties={typeid:24,uuid:"12A8B98C-3490-4AC9-9F83-90E7BF1CFD3F"}
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
 * @properties={typeid:24,uuid:"3A3C03F8-D655-4D91-9FA7-D2038C7FE1B3"}
 */
function onCellDoubleClick(foundsetindex, columnindex, record, event) 
{
	onActionDetalle(event)
}
