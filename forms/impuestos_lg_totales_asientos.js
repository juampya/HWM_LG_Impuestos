/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"2E930DA4-E1B8-434D-8205-77549F45FD14"}
 */
var vl_titulo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"526240C5-D113-44E2-8A6B-9368BD3701C0",variableType:8}
 */
var vl_diferencia = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"F028E033-8569-415F-8AA3-E23E66F354AF",variableType:8}
 */
var vl_total_haber = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"10DF1233-47A7-42C6-86AB-D30CF4ED00F8",variableType:8}
 */
var vl_total_debe = null;

/**
 * @type {Array}
 * @properties={typeid:35,uuid:"CB5A112F-BA3B-4E47-B6F7-E85D71151972",variableType:-4}
 */
var vl_asientos = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B1CF5C4F-3368-433B-8AE4-F6324F53FF1E",variableType:4}
 */
var vl_mes = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"F5CDE65A-0AA2-43A3-A3F3-894AFE772732",variableType:4}
 */
var vl_anio = null;

/**
 * @type {JSFoundSet}
 *
 * @properties={typeid:35,uuid:"AEDF3634-BAC3-4AA3-A094-89220C9D96EF",variableType:-4}
 */
var fs_temp = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"2A243A71-B9BA-403F-A922-8F66F5C75BF3",variableType:4}
 */
var vl_tipo = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"C51BA11B-6299-4D2E-9E82-600EE29CA885",variableType:93}
 */
var vl_fec_hasta = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"ACF7232F-7397-4ACE-9C45-77FC9E0D1264",variableType:93}
 */
var vl_fec_desde = null;

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"97F694E4-3872-4ADC-9FA0-998CA04916EE"}
 */
function onShow(firstShow, event)
{
	try
	{
		scopes.globals.PantallaWait()
		
		vl_total_debe  = 0
		vl_total_haber = 0 
		vl_diferencia  = 0
		
		var arg = new Array
		arg.push(scopes.globals.mx_empresa_id)
		
		var query = null
	
		query = 'SELECT c.cuenta_id, '+
				 'c.cuenta_codigo, '+
				 'c.cuenta_descripcion, '+
				 'Sum(if(b.asientoi_importe_debe is null,0,b.asientoi_importe_debe)) as debe, '+
				 'sum(if(b.asientoi_importe_haber is null,0,b.asientoi_importe_haber)) as haber '+
				 'FROM sistema.ctb_asientos_enc as a '+
				 'left join sistema.ctb_asientos_items as b on a.asiento_id = b.asiento_id and b.eliminado=0 '+
				 'left join sistema.ctb_cuentas as c on b.cuenta_id = c.cuenta_id '+
				 'where a.emp_id = ? and a.eliminado=0 AND a.asiento_id in('+vl_asientos.join(',')+') '+
				 'group by c.cuenta_id order by debe desc'
	
		fs_temp = datasources.mem.asiento_resumen.getFoundSet()
	
		elements.groupingtable_1.myFoundset.foundset.deleteAllRecords()
	
		var ds_data = databaseManager.getDataSetByQuery('sistemas',query,arg,-1)
	
		for (var i = 1; i <= ds_data.getMaxRowIndex(); i++) 
		{
			var row = ds_data.getRowAsArray(i);
	
			fs_temp.newRecord(false)
			fs_temp.cuenta_id 			  =row[0]
			fs_temp.cuenta_codigo 		  =row[1]
			fs_temp.cuenta_descripcion	  =row[2]
			fs_temp.debe		 		  =row[3]
			fs_temp.haber		 		  =row[4]
			databaseManager.saveData(fs_temp)
			
			vl_total_debe  = scopes.globals.ROUND(vl_total_debe + fs_temp.debe,2)
			vl_total_haber = scopes.globals.ROUND(vl_total_haber + fs_temp.haber,2)
			
		}
		vl_diferencia = vl_total_debe - vl_total_haber
		
		if(ds_data.getMaxRowIndex()==0)
		{
			scopes.globals.CerrarPantallaWait()
			scopes.globals.VentanaGenerica(scopes.globals.mx_usuario_id,scopes.globals.vg_titulo_popup_dialog, 'No hay información disponible para los parámetros indicados.', 'info',controller.getName(),null, null, null, null,null,null,null,null)
		}
		scopes.globals.CerrarPantallaWait()
	} 
	catch (e) 
	{
		scopes.globals.CerrarPantallaWait()
	}
}

/**
 * @properties={typeid:24,uuid:"65A26E06-34EE-4346-80E1-8C1997009523"}
 */
function Ventas() 
{
	// TODO Auto-generated method stub
}

/**
 * @properties={typeid:24,uuid:"6019357D-DA52-477B-9B99-6BC40A58E11C"}
 */
function Compras()
{
	// TODO Auto-generated method stub
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"348AC5AB-2805-45C5-A837-D9A52E25C65E"}
 */
function onActionExportar(event)
{
	try
	{
		var tmp_titulo = ''
			
		switch (vl_tipo)
		{
			case 0:
				tmp_titulo = 'ventas'
			break;
			
			case 1:
				tmp_titulo = 'compras'
			break;
		}
		
		/**@type {Array<String>}*/
		var tmp_array_nombre = new Array
		
		var vl_cant_ingresos = databaseManager.getFoundSetCount(fs_temp)

		if(vl_cant_ingresos==0)
		{
			scopes.globals.VentanaGenerica(scopes.globals.mx_usuario_id,'Mensaje',"No existen datos para mostrar.",'info',controller.getName(),null,null,null,null,null,null,null,null)
			return
		}
		
		 /** @type {JSDataSet}*/
		var ds2 =databaseManager.createEmptyDataSet()
			ds2.addColumn("Cuenta",1)
			ds2.addColumn("Nombre",2)
			ds2.addColumn("Debe",3)
			ds2.addColumn("Haber",4)
		
		for (var m = 0; m < tmp_array_nombre.length; m++) 
		{
			ds2.addColumn(tmp_array_nombre[m])
		}
		
		scopes.globals.PantallaWait()
		for (var i = 1; i <= vl_cant_ingresos; i++)
		{
			var record = fs_temp.getRecord(i);	
			var array_datos = new Array
			
			if(!scopes.globals.EMPTY(record['cuenta_codigo']))
			{
				array_datos.push(record['cuenta_codigo'])
			}
			else
			{
				array_datos.push(' ')
			}
			
			if(!scopes.globals.EMPTY(record['cuenta_descripcion']))
			{
				array_datos.push(record['cuenta_descripcion'])
			}
			else
			{
				array_datos.push(' ')
			}
			
			array_datos.push(utils.numberFormat(record['debe'],'#,##0.00'))
			array_datos.push(utils.numberFormat(record['haber'],'#,##0.00'))
			ds2.addRow(array_datos)
		}	
		
		var tmp = '<h1 style="text-align: left;"><em><span style="text-decoration: underline;">'+scopes.globals.ag_empresavigente.emp_nombre+'</span></em></h1>'+
		'<h2></h2>'+
		'<p>Asiento resumen '+tmp_titulo+'/p>'+
		'<p>Periodo: '+application.getValueListDisplayValue('meses',vl_mes)+'/'+application.getValueListDisplayValue('anios',vl_anio)+'</p>'+
		'<p></p>'
		
		var htm = '<html>'+tmp+ ds2.getAsHTML(false, false, false, true, true);+'</html>'
		
		/**@type {String} */
		var fileName = 'Asiento_resumen_'+tmp_titulo+'.xls'
		
		if(fileName)
		{
			var success =plugins.file.writeTXTFile(fileName, htm, 'ISO-8859-1', 'application/vnd.ms-excel')
			//var success =plugins.file.writeTXTFile(fileName, htm, 'UTF8', 'application/vnd.ms-excel')
		  
			if(success)
			{
				scopes.globals.CerrarPantallaWait()
				globals.VentanaGenerica(scopes.globals.mx_usuario_id,'Información', 'Exportación Satisfactoria', 'info', controller.getName(),null,null,null,null,null,null,null,null)
			}
			else
			{
				scopes.globals.CerrarPantallaWait()
				globals.VentanaGenerica(scopes.globals.mx_usuario_id,'Información', 'Ocurrió un error al realizar la exportación', 'info', controller.getName(),null,null,null,null,null,null,null,null)
			}
		}
		else
		{
			scopes.globals.CerrarPantallaWait()
			globals.VentanaGenerica(scopes.globals.mx_usuario_id,'Información', 'Exportación Cancelada por el usuario', 'info', controller.getName(),null,null,null,null,null,null,null,null)
		}
	}
	catch (e) 
	{
		scopes.globals.CerrarPantallaWait()
		globals.VentanaGenerica(scopes.globals.mx_usuario_id,scopes.globals.vg_titulo_popup_dialog, 'Error al exportar a Excel: '+e, 'error', controller.getName(),null,null,null,null,null,null,null,null)
	}
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"CC1E8775-DE5F-4234-9355-78460B225BEC"}
 */
function onActionImprimir(event) {
	// TODO Auto-generated method stub

}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @return {Boolean}
 *
 * @properties={typeid:24,uuid:"B57CC31F-796A-44D5-9A86-001F7F05F9A1"}
 */
function onHide(event)
{
	elements.groupingtable_1.myFoundset.foundset.deleteAllRecords()
	return true
}
