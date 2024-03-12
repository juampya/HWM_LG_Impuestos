/**
 * @type {JSFoundSet}
 * @properties={typeid:35,uuid:"FB8D8F73-0D49-4826-AE8D-09BC39DBEE5F",variableType:-4}
 */
var fs_temp = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"6DCAC7D0-7557-401D-942D-AC849B802BA8",variableType:8}
 */
var vl_total = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"3B17399D-E283-48B4-AA37-694BF846EF5D",variableType:4}
 */
var vl_tipo_imp_id = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"64ED9155-0CB5-423F-8EF5-4399BAD4B2A2",variableType:4}
 */
var vl_empresa = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"781B2DAA-A357-459E-89B1-4A871A6B3D8A",variableType:4}
 */
var vl_cantidad = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"8BBDBC79-67B4-4DDA-8965-F30F5A5C1816",variableType:93}
 */
var vl_fec_hasta = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"6884104E-541E-4812-925F-0F229CC8387B",variableType:93}
 */
var vl_fec_desde = null;

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"C7362538-AFF9-4B7D-B035-A60A572E2288"}
 */
function onActionVolver(event)
{
	application.getWindow('percepcion_tot').hide()
}


/**
 * TODO generated, please specify type and doc for the params
 * @param firstShow
 * @param event
 *
 * @properties={typeid:24,uuid:"8AA4C41C-C4BE-4FE0-93DF-DE1C74FFAB4E"}
 */
function onShow(firstShow, event)
{
	Graficar()
}


/**
 * @properties={typeid:24,uuid:"39853130-7C60-4EDD-BBAF-62B70BB88677"}
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
	
	fs_temp = datasources.mem.percepciones_x_provincias.getFoundSet()
	
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
			fs_temp.percep_provincia_nombre		=row[0]
			fs_temp.percep_provincia_importe	=row[1]
			fs_temp.percep_provincia_cantidad	=row[2]
			fs_temp.percep_provincia_porcentaje	=row[3]
			databaseManager.saveData(fs_temp)
			
			vl_total = vl_total + fs_temp.percep_provincia_importe
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
 * @properties={typeid:24,uuid:"59529F14-2F98-45F0-B9DC-66956AC7DD20"}
 */
function onActionImprimir(event) 
{
	plugins.jasperPluginRMI.runReport(elements.groupingtable_1.myFoundset.foundset,'imp_percepciones_x_provincia.jasper',null,plugins.jasperPluginRMI.OUTPUT_FORMAT.VIEW,{pfecha_desde:vl_fec_desde,pfecha_hasta:vl_fec_hasta,ptitulo:'Listado de percepciones por provincia'})
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"72D3061A-98BD-4DC9-8E4B-9AF3FCFEA70A"}
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
		'<p>Libro de Percepciones</p>'+
		'<p>Periodo: '+utils.dateFormat(vl_fec_desde,'dd/MM/yyyy')+'al '+utils.dateFormat(vl_fec_hasta,'dd/MM/yyyy')+'</p>'+
		'<p></p>'
		
		//var htm = '<html><caption align="bottom">Encabezado de la tabla.</caption><caption align="bottom">Encabezado de la tabla.</caption>'+ ds2.getAsHTML(true, true, false, true, true);+'</html>'
	
		var htm = '<html>'+tmp+ ds2.getAsHTML(false, false, false, true, true);+'</html>'
		
		/**@type {String} */
		var fileName = 'Libro_de_percepciones.xls'
		
		
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
