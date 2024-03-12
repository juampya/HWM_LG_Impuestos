/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C525F481-C1AE-459B-AFB7-73706AFB8A05",variableType:4}
 */
var vl_tipo = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"9D637518-8406-4E87-91DF-1F725426FE44",variableType:93}
 */
var vl_fec_hasta = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"FD844BFA-8A29-451E-8A1C-D015116C4EB3",variableType:93}
 */
var vl_fec_desde = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"43BC43E2-5412-4585-BF98-455ED70310F9",variableType:4}
 */
var vl_anio = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"16CF5899-BCC8-44F2-B942-8CD76F0B0045",variableType:4}
 */
var vl_mes = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"4623AEE5-C7E6-402E-AD20-7B11D3A49C41",variableType:4}
 */
var vl_cliente = null;

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A7C82CB3-BD69-4298-835C-44C2C8173423"}
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
 * @properties={typeid:24,uuid:"D04402E0-170E-4272-9CC1-545DB70518D2"}
 * @AllowToRunInFind
 */
function Ventas()
{
	var fs_facte_enc = datasources.db.sistemas.vc_fact_enc.getFoundSet()
	var fs_cliente = datasources.db.sistemas.vc_clientes.getFoundSet()
	
	scopes.globals.PantallaWait()

	fs_facte_enc.find()
	fs_facte_enc.facte_fecha = utils.dateFormat(vl_fec_desde,'dd-MM-yyyy')+'...'+utils.dateFormat(vl_fec_hasta,'dd-MM-yyyy')
	if(vl_cliente!=null) fs_facte_enc.cliente_id=vl_cliente
	if(vl_mes!=null) fs_facte_enc.facte_imputacion_mes=vl_mes
	if(vl_anio!=null) fs_facte_enc.facte_imputacion_anio=vl_anio
	fs_facte_enc.vc_fact_enc_to_lg_talonarios.talonario_libro_iva = 1
	fs_facte_enc.search() 

	//databaseManager.refreshRecordFromDatabase(fs_facte_enc,-1)
	
	for (var i = 1; i <= foundset.getSize(); i++) 
	{
		var rec_categorias = foundset.getRecord(i);
		
		rec_categorias.calc_total_ex	= 0
		rec_categorias.calc_total_iv 	= 0
		rec_categorias.calc_total_pib 	= 0
		rec_categorias.calc_total_piva 	= 0
		rec_categorias.calc_total_pvar 	= 0
		rec_categorias.calc_total_sb 	= 0
		rec_categorias.calc_total_to 	= 0
		
		for (var j = 1; j <= databaseManager.getFoundSetCount(fs_facte_enc); j++) 
		{
			var record = fs_facte_enc.getRecord(j);
			
			fs_cliente.find()
			fs_cliente.cliente_id = record.cliente_id
			fs_cliente.search()
			
			if(fs_cliente.iva_id == rec_categorias.cativa_id)
			{
				rec_categorias.calc_total_ex	= rec_categorias.calc_total_ex + record.facte_tot_ex
				rec_categorias.calc_total_iv 	= rec_categorias.calc_total_iv + record.facte_tot_iva
				rec_categorias.calc_total_pib 	= rec_categorias.calc_total_pib+ record.facte_tot_percep_ib
				rec_categorias.calc_total_piva 	= rec_categorias.calc_total_piva+ record.facte_tot_percep_iva
				rec_categorias.calc_total_pvar 	= rec_categorias.calc_total_pvar+ record.facte_tot_percep_varias
				rec_categorias.calc_total_sb 	= rec_categorias.calc_total_sb+ record.facte_tot_sb
				rec_categorias.calc_total_to 	= rec_categorias.calc_total_to+ record.facte_tot_total
			}
		}
	}
	
	scopes.globals.CerrarPantallaWait()
}

/**
 * @properties={typeid:24,uuid:"A51A9E50-F9F2-467E-A2C1-E7E0693F642C"}
 * @AllowToRunInFind
 */
function Compras()
{
	var fs_facte_enc = datasources.db.sistemas.pp_comprobantes_enc.getFoundSet()
	var fs_provee = datasources.db.sistemas.pp_proveedores.getFoundSet()
	
	scopes.globals.PantallaWait()

	fs_facte_enc.find()
	fs_facte_enc.comp_fecha = utils.dateFormat(vl_fec_desde,'dd-MM-yyyy')+'...'+utils.dateFormat(vl_fec_hasta,'dd-MM-yyyy')
	if(vl_cliente!=null) fs_facte_enc.provee_id=vl_cliente
	if(vl_mes!=null) fs_facte_enc.comp_imputacion_mes=vl_mes
	if(vl_anio!=null) fs_facte_enc.comp_imputacion_anio=vl_anio
	fs_facte_enc.pp_comprobantes_enc_to_lg_talonarios.talonario_libro_iva = 1
	fs_facte_enc.search() 

	//databaseManager.refreshRecordFromDatabase(fs_facte_enc,-1)
	
	for (var i = 1; i <= foundset.getSize(); i++) 
	{
		var rec_categorias = foundset.getRecord(i);
		
		rec_categorias.calc_total_ex	= 0
		rec_categorias.calc_total_iv 	= 0
		rec_categorias.calc_total_pib 	= 0
		rec_categorias.calc_total_piva 	= 0
		rec_categorias.calc_total_pvar 	= 0
		rec_categorias.calc_total_sb 	= 0
		rec_categorias.calc_total_to 	= 0
		
		for (var j = 1; j <= databaseManager.getFoundSetCount(fs_facte_enc); j++) 
		{
			var record = fs_facte_enc.getRecord(j);
			
			fs_provee.find()
			fs_provee.provee_id = record.provee_id
			fs_provee.search()
			
			if(fs_provee.iva_id == rec_categorias.cativa_id)
			{
				if(record.comp_debe_haber=='H')
				{
					rec_categorias.calc_total_ex	= rec_categorias.calc_total_ex + record.comp_tot_ex
					rec_categorias.calc_total_iv 	= rec_categorias.calc_total_iv + record.comp_tot_iv
					rec_categorias.calc_total_pib 	= rec_categorias.calc_total_pib+ record.comp_tot_perc_ib
					rec_categorias.calc_total_piva 	= rec_categorias.calc_total_piva+ record.comp_tot_perc_iva
					rec_categorias.calc_total_pvar 	= rec_categorias.calc_total_pvar+ record.comp_tot_perc_var
					rec_categorias.calc_total_sb 	= rec_categorias.calc_total_sb+ record.comp_tot_sb
					rec_categorias.calc_total_to 	= rec_categorias.calc_total_to+ record.comp_tot_to
				}
				else
				{
					rec_categorias.calc_total_ex	= rec_categorias.calc_total_ex + record.comp_tot_ex*(-1)
					rec_categorias.calc_total_iv 	= rec_categorias.calc_total_iv + record.comp_tot_iv*(-1)
					rec_categorias.calc_total_pib 	= rec_categorias.calc_total_pib+ record.comp_tot_perc_ib*(-1)
					rec_categorias.calc_total_piva 	= rec_categorias.calc_total_piva+ record.comp_tot_perc_iva*(-1)
					rec_categorias.calc_total_pvar 	= rec_categorias.calc_total_pvar+ record.comp_tot_perc_var*(-1)
					rec_categorias.calc_total_sb 	= rec_categorias.calc_total_sb+ record.comp_tot_sb*(-1)
					rec_categorias.calc_total_to 	= rec_categorias.calc_total_to+ record.comp_tot_to*(-1)
				}
			}
		}
	}
	
	scopes.globals.CerrarPantallaWait()
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"8B5E99D4-3B72-4BBC-9B74-FB0BE81C6402"}
 */
function onActionExportar(event) 
{
	try
	{
		/**@type {Array<String>}*/
		var tmp_array_nombre = new Array
		
		var vl_cant_ingresos = databaseManager.getFoundSetCount(foundset)

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
			ds2.addColumn("Percep.IBR",5)			
			ds2.addColumn("Percep.IVA",6)
			ds2.addColumn("Percep.Otras",7)
			ds2.addColumn("Total",8)
		
		for (var m = 0; m < tmp_array_nombre.length; m++) 
		{
			ds2.addColumn(tmp_array_nombre[m])
		}
		
		scopes.globals.PantallaWait()
		for (var i = 1; i <= vl_cant_ingresos; i++)
		{
			var record = foundset.getRecord(i);	
			var array_datos = new Array

			array_datos.push(record.cativa_descripcion)
			array_datos.push(utils.numberFormat(record.calc_total_sb,'#,##0.00'))
			array_datos.push(utils.numberFormat(record.calc_total_iv,'#,##0.00'))			
			array_datos.push(utils.numberFormat(record.calc_total_ex,'#,##0.00'))
			array_datos.push(utils.numberFormat(record.calc_total_pib,'#,##0.00'))			
			array_datos.push(utils.numberFormat(record.calc_total_piva,'#,##0.00'))			
			array_datos.push(utils.numberFormat(record.calc_total_pvar,'#,##0.00'))
			array_datos.push(utils.numberFormat(record.calc_total_to,'#,##0.00'))		

			ds2.addRow(array_datos)
		}	
		
		var tmp = '<h1 style="text-align: left;"><em><span style="text-decoration: underline;">'+scopes.globals.ag_empresavigente.emp_nombre+'</span></em></h1>'+
		'<h2></h2>'+
		'<p>Total por Categorias IVA Ventas</p>'+
		'<p>Periodo: '+application.getValueListDisplayValue('meses',vl_mes)+'/'+application.getValueListDisplayValue('anios',vl_anio)+'</p>'+
		'<p></p>'
		
		//var htm = '<html><caption align="bottom">Encabezado de la tabla.</caption><caption align="bottom">Encabezado de la tabla.</caption>'+ ds2.getAsHTML(true, true, false, true, true);+'</html>'
	
		var htm = '<html>'+tmp+ ds2.getAsHTML(false, false, false, true, true);+'</html>'
		
		/**@type {String} */
		var fileName = 'Total_por_categorias_iva_ventas.xls'
		
		
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
 * @properties={typeid:24,uuid:"DC63811A-8616-48C1-ACB1-735D262D8D58"}
 */
function onActionImprimir(event)
{
	var tmp_mes = application.getValueListDisplayValue('meses',vl_mes)
	var tmp_anio = application.getValueListDisplayValue('anios',vl_anio)
	var tmp_titulo = ''
	var tmp_empresa = scopes.globals.ag_empresavigente.emp_nombre
		
	if(vl_tipo==0)
	{
		tmp_titulo = 'IVA Ventas - Totales por Categorias'
	}
	else
	{
		tmp_titulo = 'IVA Compras - Totales por Categorias'
	}
	
	plugins.jasperPluginRMI.runReport(foundset,'totales_categorias_iva.jasper' ,null,plugins.jasperPluginRMI.OUTPUT_FORMAT.VIEW,{panio:tmp_anio,pmes:tmp_mes,ptitulo:tmp_titulo,pempresa:tmp_empresa})
}
