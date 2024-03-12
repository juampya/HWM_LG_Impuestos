/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"0987E94A-703D-47A1-83CF-67667C6FCBDC",variableType:4}
 */
var vl_mes = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"0EB6C716-F357-4F42-82D8-A1D29C3CF7A7",variableType:4}
 */
var vl_anio = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"94734FE5-EE54-45AB-B0B4-BC3125B45514",variableType:4}
 */
var vl_cliente = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"CB0A609C-CFB4-4AF6-BBA0-11DE7509E577",variableType:93}
 */
var vl_fec_hasta = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"41BBF129-85B2-427D-9B81-852A63730B6D",variableType:93}
 */
var vl_fec_desde = null;


/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"141D803F-BC7A-4722-8F80-1E6E4D2A0883"}
 */
function onActionVolver(event) {
	scopes.globals.VolverGenerico()
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"F6E21D38-7E09-4B84-B6AE-61447779B1E1"}
 */
function onActionRefrescar(event) {
	vl_cliente = null
	vl_mes	   = null
	
	onShow(true,null)
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"58B432E8-0992-4CB4-A1F3-E6EFFB7E5A9D"}
 */
function onActionImprimir(event) {
	var tmp_mes = application.getValueListDisplayValue('meses',facte_imputacion_mes)
	var tmp_idioma = "es_AR"
	plugins.jasperPluginRMI.runReport(foundset,'imp_libro_iva_venta.jasper' ,null,plugins.jasperPluginRMI.OUTPUT_FORMAT.VIEW,{pempresa:scopes.globals.ag_empresavigente.emp_nombre,panio:facte_imputacion_anio,pmes:tmp_mes},tmp_idioma)
}


/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"6350C5D2-BC71-4800-9153-0601E74AD09E"}
 */
function onActionExportar(event) 
{
	if(foundset.getSize()==0)
	{
		scopes.globals.VentanaGenerica(scopes.globals.mx_usuario_id,scopes.globals.vg_titulo_popup_dialog, 'No existen datos para imprimir con esos parámetros.', 'warning',controller.getName(),null, null, null, null,null,null,null,null)
	}
	else
	{
		scopes.globals.VentanaGenerica(scopes.globals.mx_usuario_id,scopes.globals.vg_titulo_popup_dialog, 'Opción a exportar', 'warning',controller.getName(),'Resumido', 'ExportarResumida', 'Detallado', 'ExportarDetallado',null,null,null,null)
	}
}

/**
 * @properties={typeid:24,uuid:"B9D80A33-5F19-4909-AA80-0E73749338F6"}
 */
function ExportarResumida() 
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
			ds2.addColumn("Mes",1)
			ds2.addColumn("Año",2)
			ds2.addColumn("Fecha",3)
			ds2.addColumn("Comprobante",4)
			ds2.addColumn("Pto.Vta.",5)			
			ds2.addColumn("Numero",6)
			ds2.addColumn("Cliente",7)
			ds2.addColumn("Nombre",8)			
			ds2.addColumn("Cat.Iva",9)
			ds2.addColumn("Tip.Doc.",10)
			ds2.addColumn("Nro.Doc.",11)
			ds2.addColumn("Neto",12)
			ds2.addColumn("Iva",13)			
			ds2.addColumn("Exento",14)
			ds2.addColumn("Percep-IB",15)
			ds2.addColumn("Percep.IVA",16)
			ds2.addColumn("Percep.Var.",17)
			ds2.addColumn("Total",18)
			ds2.addColumn("Sucursal",19)
			ds2.addColumn("AFIP",20)
			ds2.addColumn("Modulo",21)
			
		for (var m = 0; m < tmp_array_nombre.length; m++) 
		{
			ds2.addColumn(tmp_array_nombre[m])
		}
		
		scopes.globals.PantallaWait()
		for (var i = 1; i <= vl_cant_ingresos; i++)
		{
			var record = foundset.getRecord(i);	
			var array_datos = new Array

			array_datos.push(record.facte_imputacion_mes)
			array_datos.push(record.facte_imputacion_anio)
			array_datos.push(utils.dateFormat(record.facte_fecha,'dd/MM/yyyy'))
 		    array_datos.push(record.vc_fact_enc_to_lg_talonarios.talonario_tipo_comp)			
			array_datos.push(record.facte_ptovta)			
			array_datos.push(record.facte_numero)
			array_datos.push(record.vc_fact_enc_to_vc_clientes.cliente_codigo)
			array_datos.push(record.vc_fact_enc_to_vc_clientes.cliente_nombre)
			array_datos.push(record.vc_fact_enc_to_vc_clientes.vc_clientes_to_lg_categorias_iva.cativa_abreviatura)
			array_datos.push(record.vc_fact_enc_to_vc_clientes.vc_clientes_to_documentos.docu_descripcion)			
			array_datos.push(record.vc_fact_enc_to_vc_clientes.cliente_nro_docu)
			array_datos.push(utils.numberFormat(record.facte_tot_sb,'#,##0.00'))
			array_datos.push(utils.numberFormat(record.facte_tot_iva,'#,##0.00'))			
			array_datos.push(utils.numberFormat(record.facte_tot_ex,'#,##0.00'))
			array_datos.push(utils.numberFormat(record.facte_tot_percep_ib,'#,##0.00'))			
			array_datos.push(utils.numberFormat(record.facte_tot_percep_iva,'#,##0.00'))			
			array_datos.push(utils.numberFormat(record.facte_tot_percep_varias,'#,##0.00'))
			array_datos.push(utils.numberFormat(record.facte_tot_total,'#,##0.00'))
			array_datos.push(application.getValueListDisplayValue('sucursal_empresa',record.suc_id))
			array_datos.push(record.vc_fact_enc_to_lg_talonarios.talonario_afip)
			array_datos.push('VENTAS')

			ds2.addRow(array_datos)
		}	
		
		var tmp = '<h1 style="text-align: left;"><em><span style="text-decoration: underline;">'+scopes.globals.ag_empresavigente.emp_nombre+'</span></em></h1>'+
		'<h2></h2>'+
		'<p>Libro de IVA Ventas</p>'+
		'<p>Periodo: '+application.getValueListDisplayValue('meses',vl_mes)+'/'+application.getValueListDisplayValue('anios',vl_anio)+'</p>'+
		'<p></p>'
		
		//var htm = '<html><caption align="bottom">Encabezado de la tabla.</caption><caption align="bottom">Encabezado de la tabla.</caption>'+ ds2.getAsHTML(true, true, false, true, true);+'</html>'
	
		var htm = '<html>'+tmp+ ds2.getAsHTML(false, false, false, true, true);+'</html>'
		
		/**@type {String} */
		var fileName = 'Libro_de_iva_ventas.xls'
		
		
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
 *
 * @properties={typeid:24,uuid:"1046BCBE-07AE-439A-ACB6-177F18727978"}
 * @AllowToRunInFind
 */
function onActionFiltrar() {
	scopes.globals.PantallaWait()

	controller.find()
	facte_fecha = utils.dateFormat(vl_fec_desde,'dd-MM-yyyy')+'...'+utils.dateFormat(vl_fec_hasta,'dd-MM-yyyy')
	if(vl_cliente!=null) cliente_id=vl_cliente
	if(vl_mes!=null) facte_imputacion_mes=vl_mes
	if(vl_anio!=null) facte_imputacion_anio=vl_anio
	vc_fact_enc_to_lg_talonarios.talonario_libro_iva = 1
	controller.search() 

	databaseManager.refreshRecordFromDatabase(foundset,-1)
	scopes.globals.CerrarPantallaWait()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"82F89798-0399-458A-BD4E-69048D3813E7"}
 */
function onShow(firstShow, event) {
	if(firstShow)
	{
		vl_anio = application.getServerTimeStamp().getFullYear()
		vl_mes  = application.getServerTimeStamp().getMonth()+1
		
		vl_fec_desde=null
		vl_fec_hasta=null
	}
	
	onActionFiltrar()
}


/**
 * @properties={typeid:24,uuid:"3D249B82-5B8D-4F4F-9925-9C1DBDE941C0"}
 */
function onActionDescargar() 
{
	try 
	{
		var fs_alicuotas = datasources.db.sistemas.alicuotas.getFoundSet()
		fs_alicuotas.loadAllRecords()
		
		var tmp_ruta = plugins.file.getDefaultUploadLocation()+'//IVA_Ventas//'
		var tmp_file_enca = 'IVA_VENTAS_'+utils.numberFormat(vl_anio,'0000')+'_'+utils.numberFormat(vl_mes,'00')+'_enca.txt'
		var tmp_file_alic = 'IVA_VENTAS_'+utils.numberFormat(vl_anio,'0000')+'_'+utils.numberFormat(vl_mes,'00')+'_alic.txt'

		if(!plugins.file.convertToJSFile(plugins.file.getDefaultUploadLocation()+'//IVA_Ventas//').exists())
		{
			plugins.file.createFolder((plugins.file.getDefaultUploadLocation()+'//IVA_Ventas//'))
		}

		var textData_enca  = ''
		var textData_alic  = ''
		var tmp_fecha 	   = ''
		var tmp_tipo_comp  = ''
		var tmp_ptovta 	   = ''
		var tmp_nrocompd   = ''
		var tmp_nrocomph   = ''
		var tmp_coddoc     = ''
		var tmp_nrodoc     = ''
		var tmp_nomcli     = ''
		var tmp_imp_total  = ''
		var tmp_imp_nogr   = ''
		var tmp_percnocat  = ''
		var tmp_imp_exento = ''
		var tmp_percnacion = ''
		var tmp_imp_pib    = ''
		var tmp_percmuni   = ''
		var tmp_imp_impu   = ''
		var tmp_moneda     = ''
		var tmp_cotiza     = ''
		var tmp_cantalic   = ''
		var tmp_tipo_opera = ''
		var tmp_OtrosTri   = ''
		var tmp_fechavto   = ''
		
		var tmp_imp_insc   = ''
		var tmp_cod_alic   = ''
		var tmp_imp_neto   = ''
			
		var tmp_item_neto  = ''
		var tmp_item_insc  = ''
		
			
		scopes.globals.PantallaWait()
		for (var i = 1; i <= foundset.getSize(); i++) 
		{
			var record = foundset.getRecord(i);
			
			tmp_fecha 	  = utils.numberFormat(record.facte_fecha.getFullYear(),'0000')+utils.numberFormat(record.facte_fecha.getMonth()+1,'00')+utils.numberFormat(record.facte_fecha.getDate(),'00')
			tmp_tipo_comp = utils.numberFormat(record.vc_fact_enc_to_lg_talonarios.talonario_afip,'000') //TipoComp(record.tipo_dgi,record.tipo_comp)
			tmp_ptovta 	  = utils.numberFormat(record.facte_ptovta,'00000')
			tmp_nrocompd  = utils.numberFormat(record.facte_numero,'00000000000000000000')
			tmp_nrocomph  = utils.numberFormat(record.facte_numero,'00000000000000000000')
			tmp_coddoc	  = utils.numberFormat(record.vc_fact_enc_to_vc_clientes.vc_clientes_to_documentos.docu_codigo,'00')
			tmp_nrodoc    = utils.numberFormat(utils.stringToNumber(record.vc_fact_enc_to_vc_clientes.cliente_nro_docu),'00000000000000000000')
			tmp_nomcli 	  = utils.stringFormat("%1$-30s",new Array(record.vc_fact_enc_to_vc_clientes.cliente_nombre.substr(0,30)))
			
			//tmp_nomcli 	  = record.vc_fact_enc_to_vc_clientes.cliente_nombre.substr(0,30)
			
//			if(record.facte_debe_haber=='D')
//			{
//				tmp_imp_total = utils.numberFormat(Math.abs(record.facte_tot_total),'0000000000000.00')
//				tmp_imp_nogr = utils.numberFormat(Math.abs(record.facte_tot_nogr),'0000000000000.00')
//				tmp_imp_exento = utils.numberFormat(Math.abs(record.facte_tot_ex),'0000000000000.00')
//				tmp_imp_pib = utils.numberFormat(Math.abs(record.facte_tot_percep_ib),'0000000000000.00')
//				tmp_OtrosTri = utils.numberFormat(Math.abs(record.facte_tot_percep_varias+record.facte_tot_percep_iva),'0000000000000.00')
//				tmp_imp_insc = utils.numberFormat(Math.abs(record.facte_tot_iva),'0000000000000.00')
//				tmp_imp_neto = utils.numberFormat(Math.abs(record.facte_tot_sb),'0000000000000.00')
//			}
//			else
//			{
//				tmp_imp_total = utils.numberFormat(record.facte_tot_total*(-1),'0000000000000.00')
//				tmp_imp_nogr = utils.numberFormat(record.facte_tot_nogr*(-1),'0000000000000.00')
//				tmp_imp_exento = utils.numberFormat(record.facte_tot_ex*(-1),'0000000000000.00')
//				tmp_imp_pib = utils.numberFormat(record.facte_tot_percep_ib*(-1),'0000000000000.00')
//				tmp_OtrosTri = utils.numberFormat(record.facte_tot_percep_varias*(-1)+record.facte_tot_percep_iva*(-1),'0000000000000.00')
//				tmp_imp_insc = utils.numberFormat(record.facte_tot_iva*(-1),'0000000000000.00')
//				tmp_imp_neto = utils.numberFormat(record.facte_tot_sb*(-1),'0000000000000.00')
//			}
			
			
			tmp_imp_total = utils.numberFormat(Math.abs(record.facte_tot_total),'0000000000000.00')
			tmp_imp_nogr = utils.numberFormat(Math.abs(record.facte_tot_nogr),'0000000000000.00')
			tmp_imp_exento = utils.numberFormat(Math.abs(record.facte_tot_ex),'0000000000000.00')
			tmp_imp_pib = utils.numberFormat(Math.abs(record.facte_tot_percep_ib),'0000000000000.00')
			tmp_OtrosTri = utils.numberFormat(Math.abs(record.facte_tot_percep_varias+record.facte_tot_percep_iva),'0000000000000.00')
			tmp_imp_insc = utils.numberFormat(Math.abs(record.facte_tot_iva),'0000000000000.00')
			tmp_imp_neto = utils.numberFormat(Math.abs(record.facte_tot_sb),'0000000000000.00')
			
			
			tmp_imp_total = tmp_imp_total.substr(0,13)+tmp_imp_total.substr(14,15)
			
		
			tmp_imp_nogr = tmp_imp_nogr.substr(0,13)+tmp_imp_nogr.substr(14,15)
			
			tmp_percnocat = '000000000000000'
			
			
			tmp_imp_exento = tmp_imp_exento.substr(0,13)+tmp_imp_exento.substr(14,15)
			
			tmp_percnacion = '000000000000000'
			
			
			tmp_imp_pib = tmp_imp_pib.substr(0,13)+tmp_imp_pib.substr(14,15)
			
			tmp_percmuni = '000000000000000'
				
//			if(record.mon_impu<0)
//			{
//				tmp_imp_impu = utils.numberFormat(record.mon_impu,'0000000000000.00')
//				tmp_imp_impu = '-'+tmp_imp_impu.substr(0,12)+tmp_imp_impu.substr(13,14)
//			}
//			else
//			{
//				tmp_imp_impu = utils.numberFormat(record.mon_impu,'0000000000000.00')
//				tmp_imp_impu = tmp_imp_impu.substr(0,13)+tmp_imp_impu.substr(14,15)
//			}
			
			tmp_imp_impu = '000000000000000'
			tmp_moneda = 'PES'
			
			tmp_cotiza = '0001000000'
			
			tmp_OtrosTri = tmp_OtrosTri.substr(0,13)+tmp_OtrosTri.substr(14,15)
			
			tmp_fechavto = utils.numberFormat(record.facte_fecha_vto.getFullYear(),'0000')+utils.numberFormat(record.facte_fecha_vto.getMonth()+1,'00')+utils.numberFormat(record.facte_fecha_vto.getDate(),'00')
			
			tmp_imp_insc = tmp_imp_insc.substr(0,13)+tmp_imp_insc.substr(14,15)
			
			tmp_imp_neto = tmp_imp_neto.substr(0,13)+tmp_imp_neto.substr(14,15)
			
			var tmp_alicuotas 	  = 0
			
			for (var k = 1; k <= fs_alicuotas.getSize(); k++) 
			{
				var rec_alicuota = fs_alicuotas.getRecord(k);
			
				var tmp_item_imp_neto = 0
				var tmp_item_imp_insc = 0
				
				tmp_cod_alic = utils.numberFormat(rec_alicuota.alicuota_cod_afip,'0000')
				
				for (var j = 1; j <= record.vc_fact_enc_to_vc_fact_items.getSize(); j++) 
				{
					var rec_item = record.vc_fact_enc_to_vc_fact_items.getRecord(j);
					
					if(rec_alicuota.alicuota_id == rec_item.alicuota_id)
					{	
						tmp_item_imp_neto = tmp_item_imp_neto + Math.abs(rec_item.facti_sb)
						tmp_item_imp_insc = tmp_item_imp_insc + Math.abs(rec_item.facti_iva)
						
						if(j==1)
						{	
							tmp_alicuotas++
						}	
					}
				}
				
				if(tmp_item_imp_insc>0)
				{	
					tmp_item_neto = utils.numberFormat(tmp_item_imp_neto,'0000000000000.00')
					tmp_item_neto = tmp_item_neto.substr(0,13)+tmp_item_neto.substr(14,15)
					
					tmp_item_insc = utils.numberFormat(tmp_item_imp_insc,'0000000000000.00')
					tmp_item_insc = tmp_item_insc.substr(0,13)+tmp_item_insc.substr(14,15)
			
					textData_alic = textData_alic +tmp_tipo_comp+tmp_ptovta+tmp_nrocompd+tmp_item_neto+tmp_cod_alic+tmp_item_insc+'\n'
				}	
			}
			
			if(Math.abs(record.facte_tot_iva)>0)
			{	
				tmp_cantalic = utils.numberFormat(tmp_alicuotas,'0')
			}
			else
			{
				tmp_cantalic = '0'
			}

			if(tmp_cantalic=='0' | record.vc_fact_enc_to_lg_talonarios.talonario_tipo_comp=="A")
			{
				tmp_tipo_opera = 'E'
			}
			else
			{
				tmp_tipo_opera = ' '
			}
			textData_enca = textData_enca+tmp_fecha+tmp_tipo_comp+tmp_ptovta+tmp_nrocompd+tmp_nrocomph+tmp_coddoc+tmp_nrodoc
			textData_enca = textData_enca+tmp_nomcli+tmp_imp_total+tmp_imp_nogr+tmp_percnocat+tmp_imp_exento+tmp_percnacion+tmp_imp_pib
			textData_enca = textData_enca+tmp_percmuni+tmp_imp_impu+tmp_moneda+tmp_cotiza+tmp_cantalic+tmp_tipo_opera+tmp_OtrosTri+tmp_fechavto+'\n'
		}
		
		scopes.globals.CerrarPantallaWait()
		
		/** @type {plugins.file.JSFile}*/
		var file_enca = plugins.file.convertToJSFile(tmp_ruta+tmp_file_enca);
		/** @type {plugins.file.JSFile}*/
		var file_alic = plugins.file.convertToJSFile(tmp_ruta+tmp_file_alic);
		
		if (file_enca.exists())
		{
			file_enca.deleteFile()
			file_enca.createNewFile()
		}	
		else
		{
			file_enca.createNewFile()
		}
		
		if (file_alic.exists())
		{
			file_alic.deleteFile()
			file_alic.createNewFile()
		}	
		else
		{
			file_alic.createNewFile()
		}
		
		plugins.file.writeTXTFile(file_enca, textData_enca);
		plugins.file.writeTXTFile(file_alic, textData_alic);
		
		var contenido_archivo_enc = plugins.file.readTXTFile(tmp_ruta+tmp_file_enca);
		var success_write_enc = plugins.file.writeTXTFile(tmp_file_enca, contenido_archivo_enc);
		
		application.sleep(5000)
		
        if(success_write_enc)
        {
           globals.VentanaGenerica(scopes.globals.mx_usuario_id,'Información', 'El archivo encabezado se descargó existosamente', 'question', controller.getName(), null, null,null,null,null,null,null,null)
		   
		   var contenido_archivo_alic = plugins.file.readTXTFile(tmp_ruta+tmp_file_alic);
		   var success_write_ali = plugins.file.writeTXTFile(tmp_file_alic, contenido_archivo_alic);
		   
		   if(success_write_ali)
	        {
	           globals.VentanaGenerica(scopes.globals.mx_usuario_id,'Información', 'El archivo alicuotas se descargó existosamente', 'question', controller.getName(), null, null,null,null,null,null,null,null)
	        }
        }
        else
        {
            globals.VentanaGenerica(scopes.globals.mx_usuario_id,'Información', 'Ocurrió un error al realizar la descarga', 'error', controller.getName(), null, null,null,null,null,null,null,null)
        }
	}
	catch (e)
	{
		application.output(e);
	}		
}

/**
 * @properties={typeid:24,uuid:"9F0C1E05-38DB-465A-8638-C3EE339C36EB"}
 */
function onActionTotalesxAlicuotas() 
{
	forms.impuestos_lg_totales_alicuotas.vl_cliente = vl_cliente
	forms.impuestos_lg_totales_alicuotas.vl_mes = vl_mes
	forms.impuestos_lg_totales_alicuotas.vl_anio = vl_anio
	forms.impuestos_lg_totales_alicuotas.vl_fec_desde = vl_fec_desde
	forms.impuestos_lg_totales_alicuotas.vl_fec_hasta = vl_fec_hasta
	forms.impuestos_lg_totales_alicuotas.vl_tipo = 0
	
	var w3 = application.createWindow("totales_x_alicuotas", JSWindow.MODAL_DIALOG);
	w3.title=scopes.globals.vg_titulo_popup_dialog
	forms.impuestos_lg_totales_alicuotas.controller.show(w3);
}

/**
 * @properties={typeid:24,uuid:"1CD1868E-FACE-44BE-8FD5-A01D26B490C7"}
 */
function onActionTotalesxCategorias() 
{
	forms.impuestos_lg_totales_categorias.vl_cliente = vl_cliente
	forms.impuestos_lg_totales_categorias.vl_mes = vl_mes
	forms.impuestos_lg_totales_categorias.vl_anio = vl_anio
	forms.impuestos_lg_totales_categorias.vl_fec_desde = vl_fec_desde
	forms.impuestos_lg_totales_categorias.vl_fec_hasta = vl_fec_hasta
	forms.impuestos_lg_totales_categorias.vl_tipo = 0
	
	var w3 = application.createWindow("totales_x_categorias", JSWindow.MODAL_DIALOG);
	w3.title=scopes.globals.vg_titulo_popup_dialog
	forms.impuestos_lg_totales_categorias.controller.show(w3);
}

/**
 * @properties={typeid:24,uuid:"70E49D23-B83A-4F95-B996-E0AE2B6609A0"}
 */
function onActionTotalesxProvincias() 
{
	forms.impuestos_lg_totales_provincias.vl_cliente = vl_cliente
	forms.impuestos_lg_totales_provincias.vl_mes = vl_mes
	forms.impuestos_lg_totales_provincias.vl_anio = vl_anio
	forms.impuestos_lg_totales_provincias.vl_fec_desde = vl_fec_desde
	forms.impuestos_lg_totales_provincias.vl_fec_hasta = vl_fec_hasta
	forms.impuestos_lg_totales_provincias.vl_tipo = 0
	
	var w3 = application.createWindow("totales_x_provincias", JSWindow.MODAL_DIALOG);
	w3.title=scopes.globals.vg_titulo_popup_dialog
	forms.impuestos_lg_totales_provincias.controller.show(w3);
}
/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"2F084961-3F24-4D05-9571-154E8A1A123E"}
 * @AllowToRunInFind
 */
function onActionAsientos(event)
{
	var cant = databaseManager.getFoundSetCount(foundset)
	var fs_asientos = datasources.db.sistemas.ctb_asientos_items.getFoundSet()
	
	/**@type {Array<String>}*/
	var tmp_array_nombre = new Array

	if(cant==0)
	{
		scopes.globals.VentanaGenerica(scopes.globals.mx_usuario_id,'Mensaje',"No existen datos para mostrar.",'info',controller.getName(),null,null,null,null,null,null,null,null)
		return
	}
	
	 /** @type {JSDataSet}*/
	var ds2 =databaseManager.createEmptyDataSet()
		ds2.addColumn("Minuta",1)
		ds2.addColumn("Fecha",2)
		ds2.addColumn("Cuenta",3)
		ds2.addColumn("Nombre",4)
		ds2.addColumn("Detalle",5)		
		ds2.addColumn("Debe",6)
		ds2.addColumn("Haber",7)
		ds2.addColumn("Concepto",8)
		ds2.addColumn("Ejercicio",9)
		ds2.addColumn("Modulo",10)
		ds2.addColumn("Sucursal",11)		
	
	for (var m = 0; m < tmp_array_nombre.length; m++) 
	{
		ds2.addColumn(tmp_array_nombre[m])
	}
	
	scopes.globals.PantallaWait()
		
	for (var i = 1; i <= cant; i++) 
	{
		var record = foundset.getRecord(i);
		
		fs_asientos.find()
		fs_asientos.asiento_id = record.asiento_id
		if(fs_asientos.search()>0)
		{
			for (var j = 1; j <= fs_asientos.getSize(); j++) 
			{
				var rec_asiento = fs_asientos.getRecord(j);
				
				var array_datos = new Array
				
				array_datos.push(rec_asiento.ctb_asientos_items_to_ctb_asientos_enc.asiento_numero)
				array_datos.push(utils.dateFormat(rec_asiento.asientoi_fecha,'dd/MM/yyyy'))
				
				if(utils.hasRecords(rec_asiento,'ctb_asientos_items_to_ctb_cuentas'))
				{
					array_datos.push(rec_asiento.ctb_asientos_items_to_ctb_cuentas.cuenta_codigo)
					array_datos.push(rec_asiento.ctb_asientos_items_to_ctb_cuentas.cuenta_descripcion)
				}
				else
				{
					array_datos.push('Cuenta no encontrada')
					array_datos.push('Cuenta no encontrada')
				}
				
				array_datos.push(rec_asiento.asientoi_detalle)
				array_datos.push(utils.numberFormat(rec_asiento.asientoi_importe_debe,'#,##0.00'))
				array_datos.push(utils.numberFormat(rec_asiento.asientoi_importe_haber,'#,##0.00'))
				array_datos.push(application.getValueListDisplayValue('ctb_conceptos',rec_asiento.ctb_asientos_items_to_ctb_asientos_enc.concepto_id))
				array_datos.push(rec_asiento.ctb_asientos_items_to_ctb_asientos_enc.ejercicio_id)
				array_datos.push(application.getValueListDisplayValue('lg_admin_modulos',rec_asiento.ctb_asientos_items_to_ctb_asientos_enc.modulo_id))
				array_datos.push(application.getValueListDisplayValue('sucursal_empresa',rec_asiento.ctb_asientos_items_to_ctb_asientos_enc.suc_id))	
		
				ds2.addRow(array_datos)
			}
		}
	}
	
	var tmp = '<h1 style="text-align: left;"><em><span style="text-decoration: underline;">'+scopes.globals.ag_empresavigente.emp_nombre+'</span></em></h1>'+
	'<h2></h2>'+
	'<p>Asientos IVA Ventas</p>'+
	'<p>Periodo: '+utils.dateFormat(vl_fec_desde,'dd/MM/yyyy')+' al '+utils.dateFormat(vl_fec_hasta,'dd/MM/yyyy')+'</p>'
	'<p>Mes: '+utils.numberFormat(vl_mes,'00')+' Año: '+utils.numberFormat(vl_anio,'0000')+'</p>'
	'<p></p>'
	var htm = '<html>'+tmp+ ds2.getAsHTML(false, false, false, true, true);+'</html>'
	
	/**@type {String} */
	var fileName = 'Asientos_IVA_Ventas.xls'
	
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


/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"E2D5F4B6-91C0-4DCE-A696-9F754BAC572F"}
 */
function ExportarDetallado() 
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
			ds2.addColumn("Compro",1)
			ds2.addColumn("Letra",2)
			ds2.addColumn("Numero",3)
			ds2.addColumn("Fecha",4)
			ds2.addColumn("Código",5)
			ds2.addColumn("Nombre",6)
			ds2.addColumn("Cantidad",7)
			ds2.addColumn("impinterno",8)
			ds2.addColumn("Alicuota %",9)
			ds2.addColumn("iva",10)
			ds2.addColumn("gravado",11)
			ds2.addColumn("exento",12)
			ds2.addColumn("total",13)
			ds2.addColumn("Empresa",14)
			ds2.addColumn("SubRubro",15)
			ds2.addColumn("nom_subrubro",16)
			ds2.addColumn("rubro",17)
			ds2.addColumn("nom_rubro",18)
			ds2.addColumn("cliente",19)
			ds2.addColumn("nom_cli",20)
			ds2.addColumn("clientetipo",21)
			ds2.addColumn("nom_tipo_cli",22)
			ds2.addColumn("cuenta",23)
			ds2.addColumn("nom_cuenta",24)
			ds2.addColumn("Asiento N°",25)
			ds2.addColumn("Asiento descripcion",26)
			ds2.addColumn("Mes",27)
			ds2.addColumn("Año",28)
			ds2.addColumn("Provincia",29)
			ds2.addColumn("Cat.IVA",30)
			ds2.addColumn("T.doc.",31)
			ds2.addColumn("N° doc.",32)
			
		for (var m = 0; m < tmp_array_nombre.length; m++) 
		{
			ds2.addColumn(tmp_array_nombre[m])
		}
	
		scopes.globals.PantallaWait()
		
		var fs_articulos = datasources.db.sistemas.sp_articulos.getFoundSet()
		var fs_rubros = datasources.db.sistemas.sp_rubros.getFoundSet()
		var fs_subrubros = datasources.db.sistemas.sp_subrubros.getFoundSet()
		var fs_clientes = datasources.db.sistemas.vc_clientes.getFoundSet()
		var fs_grupos = datasources.db.sistemas.vc_grupos.getFoundSet()
		var fs_ctactb = datasources.db.sistemas.ctb_cuentas.getFoundSet()
		var fs_ctb_asientos = datasources.db.sistemas.ctb_asientos_enc.getFoundSet()
		var fs_localidades = datasources.db.sistemas.localidades.getFoundSet()
		var fs_provincias = datasources.db.sistemas.provincias.getFoundSet()
		
		for (var i = 1; i <= vl_cant_ingresos; i++)
		{
			var record = foundset.getRecord(i);

			for (var j = 1; j <= record.vc_fact_enc_to_vc_fact_items.getSize(); j++)
			{
				var record_arti = record.vc_fact_enc_to_vc_fact_items.getRecord(j);
				var array_datos = new Array
				
				fs_articulos.find()
				fs_articulos.articulo_id = record_arti.articulo_id
				fs_articulos.search()
				
				array_datos.push(record.facte_cod_comp)
				array_datos.push(record.vc_fact_enc_to_lg_talonarios.talonario_tipo_comp)
				array_datos.push(utils.numberFormat(record.facte_ptovta,'0000')+utils.numberFormat(record.facte_numero,'00000000'))
				array_datos.push(utils.dateFormat(record.facte_fecha,'dd/MM/yyyy'))
				array_datos.push(record_arti.vc_fact_items_to_sp_articulos.articulo_codigo)
				array_datos.push(record_arti.vc_fact_items_to_sp_articulos.articulo_nombre)
				array_datos.push(utils.numberFormat(record_arti.facti_cantidad,'#,##0.00'))
				array_datos.push(utils.numberFormat(record_arti.facti_ii,'#,##0.00'))
				array_datos.push(utils.numberFormat(record_arti.facti_alicuota_porcentaje,'#,##0.00'))
				array_datos.push(utils.numberFormat(record_arti.facti_iva,'#,##0.00'))
				array_datos.push(utils.numberFormat(record_arti.facti_sb,'#,##0.00'))
				array_datos.push(utils.numberFormat(record_arti.facti_ex,'#,##0.00'))
				array_datos.push(utils.numberFormat(record_arti.facti_total,'#,##0.00'))
					
				array_datos.push(record.suc_id)
				
				fs_subrubros.find()
				fs_subrubros.subrubro_id = fs_articulos.subrubro_id
				if(fs_subrubros.search()==1)
				{
					array_datos.push(fs_subrubros.subrubro_codigo)
					array_datos.push(fs_subrubros.subrubro_nombre)
				}
				else
				{
					array_datos.push(0)
					array_datos.push('SIN SUBRUBRO')
				}
				
				fs_rubros.find()
				fs_rubros.rubro_id = fs_articulos.rubro_id
				if(fs_rubros.search()==1)
				{
					array_datos.push(fs_rubros.rubro_codigo)
					array_datos.push(fs_rubros.rubro_nombre)
				}
				else
				{
					array_datos.push(0)
					array_datos.push('SIN RUBRO')
				}
				
				fs_clientes.find()
				fs_clientes.cliente_id = record.cliente_id
				if(fs_clientes.search()==1)
				{
					array_datos.push(fs_clientes.cliente_codigo)
					array_datos.push(fs_clientes.cliente_nombre)
				}
				else
				{
					array_datos.push(0)
					array_datos.push('SIN CLIENTE')
				}
				
				fs_grupos.find()
				fs_grupos.grupo_id = fs_clientes.grupo_id
				if(fs_grupos.search()==1)
				{
					array_datos.push(fs_grupos.grupo_codigo)
					array_datos.push(fs_grupos.grupo_descripcion)
				}
				else
				{
					array_datos.push(0)
					array_datos.push('SIN CATEGORIA')
				}
				
				fs_ctactb.find()
				fs_ctactb.cuenta_id = fs_articulos.cta_ctb_id
				if(fs_ctactb.search()==1)
				{
					array_datos.push(fs_ctactb.cuenta_codigo)
					array_datos.push(fs_ctactb.cuenta_descripcion)
				}
				else
				{
					array_datos.push(0)
					array_datos.push('SIN CUENTA CONTABLE')
				}
				
				if(!scopes.globals.EMPTY(record.asiento_id))
				{	
					fs_ctb_asientos.find()
					fs_ctb_asientos.asiento_id = record.asiento_id
					if(fs_ctb_asientos.search()==1)
					{
						array_datos.push(fs_ctb_asientos.asiento_numero)
						array_datos.push(fs_ctb_asientos.asiento_descripcion)
					}
					else
					{
						array_datos.push('ID Asiento: ' + record.asiento_id.toString())
						array_datos.push('ASIENTO CONTABLE NO ENCONTRADO')
					}
				}
				else
				{
					array_datos.push(0)
					array_datos.push('SIN ASIENTO CONTABLE')
				}
				
				array_datos.push(record.facte_imputacion_mes)
				array_datos.push(record.facte_imputacion_anio)
				
				if(!scopes.globals.EMPTY(fs_clientes.localidad_id))
				{
					fs_localidades.loadRecords(fs_clientes.localidad_id)
					
					if(fs_localidades.getSize()==1)
					{
						fs_provincias.loadRecords(fs_localidades.provincia_id)
						
						if(fs_provincias.getSize()==1)
						{
							array_datos.push(fs_provincias.provincia_nombre)
						}
						else
						{
							array_datos.push('SIN PROVINCIA')
						}
					}
					else
					{
						array_datos.push('LOCALIDAD INEXISTENTE')
					}
				}
				else
				{
					array_datos.push('SIN LOCALIDAD')
				}
				
				array_datos.push(record.vc_fact_enc_to_vc_clientes.vc_clientes_to_lg_categorias_iva.cativa_abreviatura)
				array_datos.push(record.vc_fact_enc_to_vc_clientes.vc_clientes_to_documentos.docu_codigo)
				array_datos.push(record.vc_fact_enc_to_vc_clientes.cliente_nro_docu)

				ds2.addRow(array_datos)
			}
		}	
		
		var htm = '<html>'+ ds2.getAsHTML(true, false, false, true, true);+'</html>'
		
		/**@type {String} */
		var fileName = 'IVA_Ventas_detallado.xls'
	   
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