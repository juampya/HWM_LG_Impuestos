/**
 * @type {JSFoundSet}
 *
 * @properties={typeid:35,uuid:"83A92616-D59E-4619-BF3D-06127C34BC3B",variableType:-4}
 */
var fs_temp = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"40BF2006-1B5A-4032-A326-B2B08185956A",variableType:4}
 */
var vl_tipo = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"FE71C4F8-FF7E-401D-B1A4-D44A16C5D343",variableType:93}
 */
var vl_fec_hasta = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"806F1F9A-CEB0-4391-9FEC-7AD8C896DBB1",variableType:93}
 */
var vl_fec_desde = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"FE2E9B33-A630-4500-B01D-2E2B5A1A3B4B",variableType:4}
 */
var vl_anio = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"F88B8FE1-A57F-4BC8-82C9-CB40F3AAB164",variableType:4}
 */
var vl_mes = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"1DA67B68-7009-464C-860F-83111C99FF11",variableType:4}
 */
var vl_cliente = null;

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E978B21F-017F-4F54-9374-DB458450047F"}
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
 * @properties={typeid:24,uuid:"B693E796-4CB2-400E-B542-5BEECFDC61AA"}
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
	 "SUM(a.facte_tot_ex) as tot_ex, "+
	 "SUM(a.facte_tot_iva) as tot_iva, "+
     "SUM(a.facte_tot_sb) as tot_sb, "+
     "SUM(a.facte_tot_nogr) as tot_nogr, "+
     "SUM(a.facte_tot_percep_ib) as tot_percep_ib, "+
     "SUM(a.facte_tot_percep_iva) as tot_percep_iva, "+
     "SUM(a.facte_tot_percep_varias) as tot_percep_varias, "+
     "SUM(a.facte_tot_total) as tot_total "+
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
 * @properties={typeid:24,uuid:"86B37EA3-C187-428F-ACD7-89329EBC8639"}
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
	
	query1 = "SELECT e.gasto_descripcion, "+
			 "SUM(if(f.comp_debe_haber='H',a.compi_ex,a.compi_ex*(-1))) as tot_ex, "+
			"SUM(if(f.comp_debe_haber='H',a.compi_iva,a.compi_iva*(-1))) as tot_iva, "+
			"SUM(if(f.comp_debe_haber='H',a.compi_sb,a.compi_sb*(-1))) as tot_sb, "+
			"SUM(if(f.comp_debe_haber='H',a.compi_nogr,a.compi_nogr*(-1))) as tot_nogr, "+
			"SUM(if(f.comp_debe_haber='H',a.compi_ii,a.compi_ii*(-1))) as tot_ii, "+
			"SUM(if(f.comp_debe_haber='H',a.compi_percep_ib,a.compi_percep_ib*(-1))) as tot_percep_ib, "+
			"SUM(if(f.comp_debe_haber='H',a.compi_percep_iva,a.compi_percep_iva*(-1))) as tot_percep_iva, "+
			"SUM(if(f.comp_debe_haber='H',a.compi_percep_varias,a.compi_percep_varias*(-1))) as tot_percep_varias, "+
			"SUM(if(f.comp_debe_haber='H',a.compi_total,a.compi_total*(-1))) as tot_total "+
			"FROM sistema.pp_comprobantes_items as a "+
			"left join sistema.pp_comprobantes_enc as f on a.comp_id = f.comp_id "+
			"left join sistema.lg_talonarios as b on f.talonario_id = b.talonario_id "+
			"left join sistema.lg_gastos as e on a.gasto_id = e.gasto_id "+
			"where b.talonario_libro_iva = 1 and a.emp_id = ? and a.eliminado = 0 and f.comp_imputacion_anio = ? and f.comp_imputacion_mes = ? "+
			"group by a.gasto_id"

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
 * @properties={typeid:24,uuid:"4CE3F468-F59B-458D-B660-6BDF784F924A"}
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
			ds2.addColumn("Descripción",1)
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
		'<p>Total por conceptos</p>'+
		'<p>Periodo: '+application.getValueListDisplayValue('meses',vl_mes)+'/'+application.getValueListDisplayValue('anios',vl_anio)+'</p>'+
		'<p></p>'
		
		//var htm = '<html><caption align="bottom">Encabezado de la tabla.</caption><caption align="bottom">Encabezado de la tabla.</caption>'+ ds2.getAsHTML(true, true, false, true, true);+'</html>'
	
		var htm = '<html>'+tmp+ ds2.getAsHTML(false, false, false, true, true);+'</html>'
		
		/**@type {String} */
		var fileName = 'Total_por_conceptos.xls'
		
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
 * @properties={typeid:24,uuid:"1E753BEB-2513-4DFB-9F5D-62ED5AB9E694"}
 */
function onActionImprimir(event)
{
	var tmp_mes = application.getValueListDisplayValue('meses',vl_mes)
	var tmp_anio = application.getValueListDisplayValue('anios',vl_anio)
	var tmp_titulo = ''
	var tmp_empresa = scopes.globals.ag_empresavigente.emp_nombre
		
	if(vl_tipo==0)
	{
		tmp_titulo = 'IVA Ventas - Totales por conceptos'
	}
	else
	{
		tmp_titulo = 'IVA Compras - Totales por conceptos'
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
	
	plugins.jasperPluginRMI.runReport(fs_temp,'totales_conceptos_iva.jasper' ,null,plugins.jasperPluginRMI.OUTPUT_FORMAT.VIEW,{panio:tmp_anio,pmes:tmp_mes,ptitulo:tmp_titulo,pempresa:tmp_empresa})
}
