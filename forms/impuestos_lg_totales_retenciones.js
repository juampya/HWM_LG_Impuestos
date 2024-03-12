/**
 * @type {JSFoundSet}
 * @properties={typeid:35,uuid:"C539D25E-930F-4DC4-B554-D5B0D38A70B4",variableType:-4}
 */
var fs_temp = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"9AE98F22-9806-4725-8D56-8490B0B5D75C",variableType:8}
 */
var vl_total = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"6E7D704D-D4D0-4D47-80C8-8BF4241595C3",variableType:4}
 */
var vl_tipo_imp_id = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"3B229879-325E-402F-AF5F-56A837BD2BC9",variableType:4}
 */
var vl_empresa = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"65A2C63F-EBCA-42E7-BB85-99098F4956AE",variableType:4}
 */
var vl_cantidad = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"7A0600AD-216A-4E99-BAFC-ED1935522A00",variableType:93}
 */
var vl_fec_hasta = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"6B946B01-8710-4BC9-8FDB-3288A11D021E",variableType:93}
 */
var vl_fec_desde = null;

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"758BC725-93BF-4696-9537-FDA27F718054"}
 */
function onActionVolver(event)
{
	application.getWindow('retencion_tot').hide()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"38B5312B-ABD4-457A-A9DE-E0E84B504A67"}
 */
function onShow(firstShow, event)
{
	Graficar()
}

/**
 * @properties={typeid:24,uuid:"A4E971D6-DA80-4D75-9512-C068BF136B13"}
 */
function Graficar()
{
	var query_tipo = ''
	query_tipo=' and a.tipo_imp_id = '+vl_tipo_imp_id

	var arg = new Array
		arg.push(utils.dateFormat(vl_fec_desde,'YYYY-MM-dd')+' 00:00:00')
		arg.push(utils.dateFormat(vl_fec_hasta,'YYYY-MM-dd')+' 23:59:59')
		arg.push(utils.dateFormat(vl_fec_desde,'YYYY-MM-dd')+' 00:00:00')
		arg.push(utils.dateFormat(vl_fec_hasta,'YYYY-MM-dd')+' 23:59:59')
		
	var query = new Array
	var query1 = null
	
	query1 = "SELECT if(b.provincia_id is null or b.provincia_id=0,'Sin Provincia',b.provincia_nombre) as nombre, "+
    "sum(a.pp_impu_importe) as total, "+
    "count(a.pp_impu_id) as cantidad, "+
    "concat(round(sum(a.pp_impu_importe)/(select sum(a.pp_impu_importe) "+
	"					FROM sistema.pp_comprobantes_impuestos as a "+
	"					left join sistema.provincias as b on a.provincia_id = b.provincia_id "+
	"					where a.pp_impu_fecha between ? and ? and a.emp_id = "+scopes.globals.mx_empresa_id+query_tipo+" and a.eliminado = 0)*100,2),' %') as porcen "+
	"FROM sistema.pp_comprobantes_impuestos as a "+
	"left join sistema.provincias as b on a.provincia_id = b.provincia_id "+
	"where a.pp_impu_fecha between ? and ? and a.emp_id = "+scopes.globals.mx_empresa_id+query_tipo+" and a.eliminado = 0 "+
	"group by a.provincia_id order by total desc "
	
	query.push(query1)
	
	fs_temp = datasources.mem.retenciones_x_provincias.getFoundSet()
	
	elements.groupingtable_1.myFoundset.foundset.deleteAllRecords()
	
	vl_total = null
	for (var j = 0; j < query.length; j++) 
	{
		var ds_data = databaseManager.getDataSetByQuery('sistemas',query[j],arg,-1)
	
		for (var i = 1; i <= ds_data.getMaxRowIndex(); i++) 
		{
			var row = ds_data.getRowAsArray(i);
			if(j==1)
			{
				vl_cantidad = vl_cantidad+row[2]
			}
			
			fs_temp.newRecord(false)
			fs_temp.reten_provincia_nombre		=row[0]
			fs_temp.reten_provincia_importe		=row[1]
			fs_temp.reten_provincia_cantidad	=row[2]
			fs_temp.reten_provincia_porcentaje	=row[3]
			databaseManager.saveData(fs_temp)
			
			vl_total = vl_total + fs_temp.reten_provincia_importe
		}
	}		

	if(ds_data.getMaxRowIndex()==0)
	{
		scopes.globals.VentanaGenerica(scopes.globals.mx_usuario_id,scopes.globals.vg_titulo_popup_dialog, 'No hay información disponible para los parámetros indicados.', 'info',controller.getName(),null, null, null, null,null,null,null,null)
	}
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"19E8A31B-D7BA-4933-AA87-36DB64091C91"}
 */
function onActionImprimir(event) 
{
	plugins.jasperPluginRMI.runReport(elements.groupingtable_1.myFoundset.foundset,'imp_retenciones_x_provincia.jasper',null,plugins.jasperPluginRMI.OUTPUT_FORMAT.VIEW,{pfecha_desde:vl_fec_desde,pfecha_hasta:vl_fec_hasta,ptitulo:'Listado de retenciones por provincia'})
}


/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"995D657E-9825-4FC1-AD17-67B878FF3063"}
 */
function onActionExportar(event) 
{
	try
	{
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
			ds2.addColumn("Provincia",1)
			ds2.addColumn("Importe",2)
			ds2.addColumn("Cantidad",3)			
			ds2.addColumn("Porcentaje",4)		
		
		for (var m = 0; m < tmp_array_nombre.length; m++) 
		{
			ds2.addColumn(tmp_array_nombre[m])
		}
		
		scopes.globals.PantallaWait()
		for (var i = 1; i <= vl_cant_ingresos; i++)
		{

			var record = fs_temp.getRecord(i);	
			var array_datos = new Array

			array_datos.push(record['reten_provincia_nombre'])
			array_datos.push(utils.numberFormat(record['reten_provincia_importe'],'#,##0.00'))
			array_datos.push(utils.numberFormat(record['reten_provincia_cantidad'],'#,##0'))
			array_datos.push(record['reten_provincia_porcentaje'])

			ds2.addRow(array_datos)
		}	
		
		var tmp = '<h1 style="text-align: left;"><em><span style="text-decoration: underline;">'+scopes.globals.ag_empresavigente.emp_nombre+'</span></em></h1>'+
		'<h2></h2>'+
		'<p>Libro de Retenciones</p>'+
		'<p>Periodo: '+utils.dateFormat(vl_fec_desde,'dd/MM/yyyy')+'al '+utils.dateFormat(vl_fec_hasta,'dd/MM/yyyy')+'</p>'+
		'<p></p>'
		
		//var htm = '<html><caption align="bottom">Encabezado de la tabla.</caption><caption align="bottom">Encabezado de la tabla.</caption>'+ ds2.getAsHTML(true, true, false, true, true);+'</html>'
	
		var htm = '<html>'+tmp+ ds2.getAsHTML(false, false, false, true, true);+'</html>'
		
		/**@type {String} */
		var fileName = 'Libro_de_retenciones.xls'
		
		
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
