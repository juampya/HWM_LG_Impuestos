/**
 * @type {JSFoundSet}
 *
 * @properties={typeid:35,uuid:"83DC9340-BB9B-4437-BAA3-DD32F33293B6",variableType:-4}
 */
var fs_temp = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"96F2946A-91E4-4C8B-B886-B636FD1E6BDA",variableType:4}
 */
var vl_tipo = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"32181932-7557-4DFB-AA08-CC4844C219D9",variableType:93}
 */
var vl_fec_hasta = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"EC40428E-CF21-434A-9613-030A7ABA39AD",variableType:93}
 */
var vl_fec_desde = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"0F0A8779-198C-44F9-8430-1B98A269F355",variableType:4}
 */
var vl_anio = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"9798A8B8-E326-44E4-88FE-BC9889E6B7CA",variableType:4}
 */
var vl_mes = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"F917A2C6-4EFF-4764-8E4E-3EC0EEAB72DD",variableType:4}
 */
var vl_cliente = null;

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A80765C0-0046-4997-AD68-B566F303D951"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) 
{
	switch (vl_tipo)
	{
		case 0:
			Ventas()
		break;
		
		case 1:
			Compras()
		break;
	}
}

/**
 * @properties={typeid:24,uuid:"2A88EBFB-AFF4-4E1C-AEE8-CFDA22BAC0B4"}
 * @AllowToRunInFind
 */
function Ventas()
{
	var arg = new Array
	arg.push(scopes.globals.mx_empresa_id)
	arg.push(vl_anio)
	arg.push(vl_mes)
	
	var query = new Array
	var query1 = null
	
	query1 = "SELECT e.provincia_nombre, "+
	 "SUM(a.facte_tot_ex*a.facte_cotizacion) as tot_ex, "+
	 "SUM(a.facte_tot_iva*a.facte_cotizacion) as tot_iva, "+
     "SUM(a.facte_tot_sb*a.facte_cotizacion) as tot_sb, "+
     "SUM(a.facte_tot_nogr*a.facte_cotizacion) as tot_nogr, "+
     "SUM(a.facte_tot_percep_ib*a.facte_cotizacion) as tot_percep_ib, "+
     "SUM(a.facte_tot_percep_iva*a.facte_cotizacion) as tot_percep_iva, "+
     "SUM(a.facte_tot_percep_varias*a.facte_cotizacion) as tot_percep_varias, "+
     "SUM(a.facte_tot_total*a.facte_cotizacion) as tot_total "+
	 "FROM sistema.vc_fact_enc as a "+
	 "left join sistema.lg_talonarios as b on a.talonario_id = b.talonario_id "+
	 "left join sistema.vc_clientes as c on a.cliente_id = c.cliente_id "+
	 "left join sistema.localidades as d on c.localidad_id = d.localidad_id "+
	 "left join sistema.provincias as e on d.provincia_id = e.provincia_id "+
	 "where b.talonario_libro_iva = 1 and a.emp_id = ? and a.eliminado = 0 and a.facte_imputacion_anio = ? and a.facte_imputacion_mes = ? "+
	 "group by d.provincia_id"

	query.push(query1)
	
	fs_temp = datasources.mem.iva_ventas_x_provincias.getFoundSet()
	
	elements.groupingtable_1.myFoundset.foundset.deleteAllRecords()
	
	for (var j = 0; j < query.length; j++) 
	{
		var ds_data = databaseManager.getDataSetByQuery('sistemas',query[j],arg,-1)
	
		for (var i = 1; i <= ds_data.getMaxRowIndex(); i++) 
		{
			var row = ds_data.getRowAsArray(i);
	
			fs_temp.newRecord(false)
			fs_temp.provincia_anio  = vl_anio
			fs_temp.provincia_mes	= vl_mes
			fs_temp.provincia_nombre =row[0]
			fs_temp.provincia_total_exento =row[1]
			fs_temp.provincia_total_iva =row[2]
			fs_temp.provincia_total_neto =row[3]
			fs_temp.provincia_total_ngr =row[4]
			fs_temp.provincia_total_percep_ib =row[5]
			fs_temp.provincia_total_percep_iva =row[6]
			fs_temp.provincia_total_percep_varias =row[7]
			fs_temp.provincia_total_total =row[8]
			
			databaseManager.saveData(fs_temp)
		}
	}		
	
	if(ds_data.getMaxRowIndex()==0)
	{
		scopes.globals.VentanaGenerica(scopes.globals.mx_usuario_id,scopes.globals.vg_titulo_popup_dialog, 'No hay información disponible para los parámetros indicados.', 'info',controller.getName(),null, null, null, null,null,null,null,null)
	}
}

/**
 * @properties={typeid:24,uuid:"D6F1FB44-AAA4-4550-98DE-6AA5F3EA3247"}
 * @AllowToRunInFind
 */
function Compras()
{
	var arg = new Array
	arg.push(scopes.globals.mx_empresa_id)
	arg.push(vl_anio)
	arg.push(vl_mes)
	
	var query = new Array
	var query1 = null
	
	query1 = "SELECT e.provincia_nombre, "+
	"SUM(if(a.comp_debe_haber='H',a.comp_tot_ex,a.comp_tot_ex*(-1))) as tot_ex, "+
	"SUM(if(a.comp_debe_haber='H',a.comp_tot_iv,a.comp_tot_iv*(-1))) as tot_iva, "+
    "SUM(if(a.comp_debe_haber='H',a.comp_tot_sb,a.comp_tot_sb*(-1))) as tot_sb, "+
    "SUM(if(a.comp_debe_haber='H',a.comp_tot_nogr,a.comp_tot_nogr*(-1))) as tot_nogr, "+
	"SUM(if(a.comp_debe_haber='H',a.comp_tot_ii,a.comp_tot_ii*(-1))) as tot_ii, "+
    "SUM(if(a.comp_debe_haber='H',a.comp_tot_perc_ib,a.comp_tot_perc_ib*(-1))) as tot_percep_ib, "+
    "SUM(if(a.comp_debe_haber='H',a.comp_tot_perc_iva,a.comp_tot_perc_iva*(-1))) as tot_percep_iva, "+
    "SUM(if(a.comp_debe_haber='H',a.comp_tot_perc_var,a.comp_tot_perc_var*(-1))) as tot_percep_varias, "+
    "SUM(if(a.comp_debe_haber='H',a.comp_tot_to,a.comp_tot_to*(-1))) as tot_total "+
    "FROM sistema.pp_comprobantes_enc as a "+
    "left join sistema.lg_talonarios as b on a.talonario_id = b.talonario_id "+
    "left join sistema.pp_proveedores as c on a.provee_id = c.provee_id "+
    "left join sistema.localidades as d on c.localidad_id = d.localidad_id "+
    "left join sistema.provincias as e on d.provincia_id = e.provincia_id "+
    "where b.talonario_libro_iva = 1 and a.emp_id = ? and a.eliminado = 0 and a.comp_imputacion_anio = ? and comp_imputacion_mes = ? "+
    "group by d.provincia_id"

	query.push(query1)
	
	fs_temp = datasources.mem.iva_ventas_x_provincias.getFoundSet()
	
	elements.groupingtable_1.myFoundset.foundset.deleteAllRecords()
	
	for (var j = 0; j < query.length; j++) 
	{
		var ds_data = databaseManager.getDataSetByQuery('sistemas',query[j],arg,-1)
	
		for (var i = 1; i <= ds_data.getMaxRowIndex(); i++) 
		{
			var row = ds_data.getRowAsArray(i);
	
			fs_temp.newRecord(false)
			fs_temp.provincia_anio  			  = vl_anio
			fs_temp.provincia_mes				  = vl_mes
			fs_temp.provincia_nombre 			  =row[0]
			fs_temp.provincia_total_exento 		  =row[1]
			fs_temp.provincia_total_iva 		  =row[2]
			fs_temp.provincia_total_neto 		  =row[3]
			fs_temp.provincia_total_ngr 		  =row[4]
			fs_temp.provincia_total_impinterno	  =row[5]
			fs_temp.provincia_total_percep_ib 	  =row[6]
			fs_temp.provincia_total_percep_iva 	  =row[7]
			fs_temp.provincia_total_percep_varias =row[8]
			fs_temp.provincia_total_total 		  =row[9]
			
			databaseManager.saveData(fs_temp)
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
 * @properties={typeid:24,uuid:"60B6C13B-EF8A-405A-82EA-F1EC7FD2B255"}
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
			ds2.addColumn("Neto",2)
			ds2.addColumn("Iva",3)
			ds2.addColumn("Exento",4)
			ds2.addColumn("No gravado",5)
			ds2.addColumn("Imp. interno",6)
			ds2.addColumn("Percep.IBR",7)			
			ds2.addColumn("Percep.IVA",8)
			ds2.addColumn("Percep.Otras",9)
			ds2.addColumn("Total",10)
		
		for (var m = 0; m < tmp_array_nombre.length; m++) 
		{
			ds2.addColumn(tmp_array_nombre[m])
		}
		
		scopes.globals.PantallaWait()
		for (var i = 1; i <= vl_cant_ingresos; i++)
		{
			var record = fs_temp.getRecord(i);	
			var array_datos = new Array
			
			array_datos.push(record['provincia_nombre'])
			array_datos.push(utils.numberFormat(record['provincia_total_neto'],'#,##0.00'))
			array_datos.push(utils.numberFormat(record['provincia_total_iva'],'#,##0.00'))
			array_datos.push(utils.numberFormat(record['provincia_total_exento'],'#,##0.00'))
			array_datos.push(utils.numberFormat(record['provincia_total_ngr'],'#,##0.00'))
			array_datos.push(utils.numberFormat(record['provincia_total_impinterno'],'#,##0.00'))
			array_datos.push(utils.numberFormat(record['provincia_total_percep_ib'],'#,##0.00'))
			array_datos.push(utils.numberFormat(record['provincia_total_percep_iva'],'#,##0.00'))
			array_datos.push(utils.numberFormat(record['provincia_total_percep_varias'],'#,##0.00'))
			array_datos.push(utils.numberFormat(record['provincia_total_total'],'#,##0.00'))	

			ds2.addRow(array_datos)
		}	
		
		var tmp = '<h1 style="text-align: left;"><em><span style="text-decoration: underline;">'+scopes.globals.ag_empresavigente.emp_nombre+'</span></em></h1>'+
		'<h2></h2>'+
		'<p>Total por provincias</p>'+
		'<p>Periodo: '+application.getValueListDisplayValue('meses',vl_mes)+'/'+application.getValueListDisplayValue('anios',vl_anio)+'</p>'+
		'<p></p>'
		
		//var htm = '<html><caption align="bottom">Encabezado de la tabla.</caption><caption align="bottom">Encabezado de la tabla.</caption>'+ ds2.getAsHTML(true, true, false, true, true);+'</html>'
	
		var htm = '<html>'+tmp+ ds2.getAsHTML(false, false, false, true, true);+'</html>'
		
		/**@type {String} */
		var fileName = 'Total_por_provincias.xls'
		
		
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
 * @properties={typeid:24,uuid:"9C65C080-1518-42D0-81F3-9C4D030AD3DF"}
 */
function onActionImprimir(event)
{
	var tmp_mes = application.getValueListDisplayValue('meses',vl_mes)
	var tmp_anio = application.getValueListDisplayValue('anios',vl_anio)
	var tmp_titulo = ''
	var tmp_empresa = scopes.globals.ag_empresavigente.emp_nombre
		
	if(vl_tipo==0)
	{
		tmp_titulo = 'IVA Ventas - Totales por Provincias'
	}
	else
	{
		tmp_titulo = 'IVA Compras - Totales por Provincias'
	}
	
	fs_temp.provincia_anio
	fs_temp.provincia_mes
	fs_temp.provincia_nombre
	fs_temp.provincia_total_exento
	fs_temp.provincia_total_iva
	fs_temp.provincia_total_impinterno
	fs_temp.provincia_total_neto
	fs_temp.provincia_total_ngr
	fs_temp.provincia_total_percep_ib
	fs_temp.provincia_total_percep_iva
	fs_temp.provincia_total_percep_varias
	fs_temp.provincia_total_total
	
	plugins.jasperPluginRMI.runReport(fs_temp,'totales_provincias_iva.jasper' ,null,plugins.jasperPluginRMI.OUTPUT_FORMAT.VIEW,{panio:tmp_anio,pmes:tmp_mes,ptitulo:tmp_titulo,pempresa:tmp_empresa})
}
