/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"7C63CA0C-EF86-4BD8-9A59-FB5E79728518",variableType:4}
 */
var vl_tipo = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"981BDD86-236E-430A-88DA-35F424D5E23A",variableType:93}
 */
var vl_fec_hasta = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"CDAD022D-BAB3-498A-977E-B785F84CEE1D",variableType:93}
 */
var vl_fec_desde = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"89694F17-3655-400F-BF16-F2B6978E115D",variableType:4}
 */
var vl_anio = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"8E030252-16F4-4A49-91C5-640A5CA91598",variableType:4}
 */
var vl_mes = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C7E61F9E-EDAE-4765-80CA-076426CA626E",variableType:4}
 */
var vl_cliente = null;


/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9899180A-783D-4514-A31D-4ADE6EE7CD18"}
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
 * @properties={typeid:24,uuid:"3F837004-9EDB-40BF-B5A5-6CE77C0B3989"}
 * @AllowToRunInFind
 */
function Ventas()
{
	var fs_facte_enc = datasources.db.sistemas.vc_fact_enc.getFoundSet()
	var fs_facte_item = datasources.db.sistemas.vc_fact_items.getFoundSet()
	
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
		var rec_alicuotas = foundset.getRecord(i);
		
		rec_alicuotas.calc_total_iva = 0
		
		for (var j = 1; j <= databaseManager.getFoundSetCount(fs_facte_enc); j++) 
		{
			var record = fs_facte_enc.getRecord(j);
			
			fs_facte_item.find()
			fs_facte_item.facte_id = record.facte_id
			fs_facte_item.alicuota_id = rec_alicuotas.alicuota_id
			fs_facte_item.search()
			
			for (var k = 1; k <= fs_facte_item.getSize(); k++) 
			{
				var rec_item = fs_facte_item.getRecord(k);
				
				rec_alicuotas.calc_total_iva = rec_alicuotas.calc_total_iva + (rec_item.facti_iva*record.facte_cotizacion)
			}
		}
	}
	
	scopes.globals.CerrarPantallaWait()
}

/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"83F48B50-151F-408A-ABA6-999C4BDAA171"}
 */
function Compras()
{
	var fs_facte_enc = datasources.db.sistemas.pp_comprobantes_enc.getFoundSet()
	var fs_facte_item = datasources.db.sistemas.pp_comprobantes_items.getFoundSet()
	
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
		var rec_alicuotas = foundset.getRecord(i);
		
		rec_alicuotas.calc_total_iva = 0
		
		for (var j = 1; j <= databaseManager.getFoundSetCount(fs_facte_enc); j++) 
		{
			var record = fs_facte_enc.getRecord(j);
			
			fs_facte_item.find()
			fs_facte_item.comp_id = record.comp_id
			fs_facte_item.alicuota_id = rec_alicuotas.alicuota_id
			fs_facte_item.search()
			
			for (var k = 1; k <= fs_facte_item.getSize(); k++) 
			{
				var rec_item = fs_facte_item.getRecord(k);
				if(record.comp_debe_haber=='H')
				{
					rec_alicuotas.calc_total_iva = rec_alicuotas.calc_total_iva+rec_item.compi_iva
				}
				else
				{
					rec_alicuotas.calc_total_iva = rec_alicuotas.calc_total_iva+rec_item.compi_iva*(-1)
				}
			}
		}
	}
	
	scopes.globals.CerrarPantallaWait()
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"6E3D148E-9DA1-47E9-B9DB-F3CF2B194F6C"}
 */
function onActionExportar(event) 
{
	try
	{
		var fileName = ''
		var title	 = ''
			
		switch (vl_tipo)
		{
			case 0:
				fileName = 'Total_por_alicuotas_iva_ventas.xls'
				title	 = '<p>Total por Alícuotas IVA Ventas</p>'
			break;
			
			case 1:
				fileName = 'Total_por_alicuotas_iva_compras.xls'
				title	 = '<p>Total por Alícuotas IVA Compras</p>'
			break;
		}
		
		
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
			ds2.addColumn("Descipcion",1)
			ds2.addColumn("Total",2)
		
		for (var m = 0; m < tmp_array_nombre.length; m++) 
		{
			ds2.addColumn(tmp_array_nombre[m])
		}
		
		scopes.globals.PantallaWait()
		for (var i = 1; i <= vl_cant_ingresos; i++)
		{
			var record = foundset.getRecord(i);	
			var array_datos = new Array

			array_datos.push(record.alicuota_descripcion)
			array_datos.push(utils.numberFormat(record.calc_total_iva,'#,##0.00'))
	
			ds2.addRow(array_datos)
		}	
		
		var tmp = '<h1 style="text-align: left;"><em><span style="text-decoration: underline;">'+scopes.globals.ag_empresavigente.emp_nombre+'</span></em></h1>'+
		'<h2></h2>'+title+
		'<p>Periodo: '+application.getValueListDisplayValue('meses',vl_mes)+'/'+application.getValueListDisplayValue('anios',vl_anio)+'</p>'+
		'<p></p>'
		
		//var htm = '<html><caption align="bottom">Encabezado de la tabla.</caption><caption align="bottom">Encabezado de la tabla.</caption>'+ ds2.getAsHTML(true, true, false, true, true);+'</html>'
	
		var htm = '<html>'+tmp+ ds2.getAsHTML(false, false, false, true, true);+'</html>'
		
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
 * @properties={typeid:24,uuid:"9E4530C9-420A-441E-B48A-411BA204F9DE"}
 */
function onActionImprimir(event) 
{
	var tmp_mes = application.getValueListDisplayValue('meses',vl_mes)
	var tmp_anio = application.getValueListDisplayValue('anios',vl_anio)
	var tmp_titulo = ''
	var tmp_empresa = scopes.globals.ag_empresavigente.emp_nombre
		
	if(vl_tipo==0)
	{
		tmp_titulo = 'IVA Ventas - Totales por Alícuotas'
	}
	else
	{
		tmp_titulo = 'IVA Compras - Totales por Alícuotas'
	}
	plugins.jasperPluginRMI.runReport(foundset,'totales_alicuotas_iva.jasper' ,null,plugins.jasperPluginRMI.OUTPUT_FORMAT.VIEW,{panio:tmp_anio,pmes:tmp_mes,ptitulo:tmp_titulo,pempresa:tmp_empresa})
}
