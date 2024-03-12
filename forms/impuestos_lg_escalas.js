/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"394A225A-C7C6-4973-8487-05DAA957F9E7"}
 */
function onActionVolver(event) 
{
	scopes.globals.VolverGenerico()
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"90E6D77D-AD1D-4605-AEFC-AEC2FB8FD71C"}
 */
function onActionRefrescar(event)
{
	onShow(true,null)
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"195CE8F4-BC04-4D3E-87AF-24322CCDD960"}
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
 * @properties={typeid:24,uuid:"342AB831-E6DD-49F3-B72E-CCC27A0FEB30"}
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
 * @properties={typeid:24,uuid:"8272B119-135B-4946-A072-11EFBE7B3538"}
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
 * @properties={typeid:24,uuid:"CB189E5C-E7AC-4313-8D43-4F4179C8E638"}
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
 * @properties={typeid:24,uuid:"0F20B70C-0B09-4C58-B3BF-EF7BE728DF46"}
 */
function onActionNuevo(event) 
{
	forms.impuestos_lg_escalas_detalle.elements.lbl_titulo.text = "Nueva Escala"
	forms.impuestos_lg_escalas_detalle.vl_nuevo = 1
	var w3 = application.createWindow("mydialog", JSWindow.MODAL_DIALOG);
	w3.title=scopes.globals.vg_titulo_popup_dialog
	w3.resizable = true
	forms.impuestos_lg_escalas_detalle.controller.show(w3);
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"8FE651F3-1333-47C8-99EB-F2EADF46AEBF"}
 */
function onActionDetalle(event) 
{
	forms.impuestos_lg_escalas_detalle.elements.lbl_titulo.text = "Detalle de la Escala"
	forms.impuestos_lg_escalas_detalle.vl_nuevo = 0
	var w3 = application.createWindow("mydialog", JSWindow.MODAL_DIALOG);
	w3.title=scopes.globals.vg_titulo_popup_dialog
	forms.impuestos_lg_escalas_detalle.controller.show(w3);
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
 * @properties={typeid:24,uuid:"6CF24A2D-ADC7-4DC1-8C96-9C4D96E8A660"}
 */
function onCellDoubleClick(foundsetindex, columnindex, record, event) 
{
	onActionDetalle(event)
}

/**
 * Called when the columns data is changed.
 *
 * @param {number} foundsetindex
 * @param {number} [columnindex]
 * @param {object} [oldvalue]
 * @param {object} [newvalue]
 * @param {JSEvent} [event]
 * @param {JSRecord} [record]
 *
 * @return {boolean}
 *
 * @properties={typeid:24,uuid:"63DFFC2F-2F4B-4334-AAC6-63E282518D98"}
 */
function onColumnDataChange(foundsetindex, columnindex, oldvalue, newvalue, event, record) {
	databaseManager.saveData(record)
	return true;
}
