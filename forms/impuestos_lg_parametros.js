/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FCE420B1-73EB-4A96-B5CA-BFF798A1EDD5"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) 
{
	controller.find()
	emp_id = scopes.globals.mx_empresa_id
	if(controller.search()==0)
	{
		controller.newRecord()
		emp_id = scopes.globals.mx_empresa_id
		suc_id = 0
		databaseManager.saveData(foundset)
	}
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"BE766BAE-9C1A-407B-A824-892A6A343EC4"}
 */
function onActionGrabar(event) 
{
	var succes = databaseManager.saveData(foundset)
	if(succes)
	{
		application.getWindow('parametros').hide()
	}
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"EC017ED1-3D6B-4393-8E2E-1211CB4CB9BD"}
 */
function onActionCerrar(event) 
{
	databaseManager.revertEditedRecords()
	application.getWindow('parametros').hide()
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @return {Boolean}
 *
 * @properties={typeid:24,uuid:"6E1CD7D4-6B8C-486E-97D4-C58638004024"}
 */
function onHide(event) 
{
	databaseManager.revertEditedRecords()
	return true
}
