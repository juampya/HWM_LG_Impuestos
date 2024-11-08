/**
 * @type {Array}
 * @properties={typeid:35,uuid:"66328C73-FD89-4CCE-8C35-CFF0670AD342",variableType:-4}
 */
var vl_asientos = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"82794720-15F3-4423-9D61-EBB74E961E57",variableType:8}
 */
var vl_tot_total = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"20E7AC67-EA3B-4F75-8AF2-F55027683D5B",variableType:8}
 */
var vl_tot_percep_varias = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"65EF270E-25BC-438A-8272-0145C0DC9141",variableType:8}
 */
var vl_tot_percep_iva = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"28DF841E-9E24-45AE-B32C-03558D722423",variableType:8}
 */
var vl_tot_percep_ib = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"215D92DD-DDE9-40FD-BD95-B04A8C7D8FEC",variableType:8}
 */
var vl_tot_nogr = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"551B6E86-078E-435A-9FB0-77175D59C151",variableType:8}
 */
var vl_tot_ii = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"E5FAB751-D3BF-49CB-AB35-E5D293CF3D25",variableType:8}
 */
var vl_tot_iva = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"4DF96D86-F4F7-428D-8620-C238F5417DB6",variableType:8}
 */
var vl_tot_ex = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"6FE2B3AF-FD26-41CC-A74B-139D7414DB75",variableType:8}
 */
var vl_tot_sb = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"494EE9F4-1734-4513-8178-9A81EFE37EBE",variableType:4}
 */
var vl_proveedor = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"8437A26A-700F-4628-B2DA-57E1A5065F03",variableType:93}
 */
var vl_fec_hasta = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"660E72A4-6516-4F2B-821B-EE6AF2C1FEFE",variableType:4}
 */
var vl_anio = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"2A451729-95D7-4899-9E8C-F6F0B3DDC646",variableType:4}
 */
var vl_mes = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"725F3D93-AC0D-49AE-9618-AF6E4008E391",variableType:93}
 */
var vl_fec_desde = null;


/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"87F16C75-3247-491E-947F-B11D395E3E78"}
 */
function onShow(firstShow, event) {
	if(firstShow)
	{
		vl_anio = application.getServerTimeStamp().getFullYear()
		vl_mes  = application.getServerTimeStamp().getMonth()+1

		vl_fec_desde=null
		vl_fec_hasta=null
		
//		vl_fec_desde = new Date(vl_anio,vl_mes-1,1)
//		vl_fec_hasta = new Date(vl_anio,vl_mes-1,scopes.globals.ultimoDiaMes(vl_mes,vl_anio))
	}
	
	onActionFiltrar()
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"7CEDE3B1-873E-4D3A-88C9-F0D1A352F053"}
 */
function onActionVolver(event) {
	scopes.globals.VolverGenerico()
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"9D6AA370-4A85-4907-B8B9-C28FBB4E9DCE"}
 */
function onActionRefrescar(event) {
	vl_proveedor = null
	vl_mes	    = null
	
	onShow(true,null)
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"21AADF15-2B6E-4C96-B387-9501F42DBB80"}
 */
function onActionImprimir(event) {
	var tmp_mes = application.getValueListDisplayValue('meses',comp_imputacion_mes)
	var tmp_idioma = "es_AR"
	plugins.jasperPluginRMI.runReport(foundset,'imp_libro_iva_compra.jasper' ,null,plugins.jasperPluginRMI.OUTPUT_FORMAT.VIEW,{pempresa:scopes.globals.ag_empresavigente.emp_nombre,panio:comp_imputacion_anio,pmes:tmp_mes},tmp_idioma)
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"73D0C72B-24D3-4A16-B6D4-1FD257ECC191"}
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
 * @properties={typeid:24,uuid:"7EB1CAB4-52F4-4605-A9C4-B944B4E01371"}
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
			ds2.addColumn("Proveedor",7)
			ds2.addColumn("Nombre",8)			
			ds2.addColumn("Cat.Iva",9)
			ds2.addColumn("Tip.Doc.",10)
			ds2.addColumn("Nro.Doc.",11)		
			ds2.addColumn("Gravado",12)
			ds2.addColumn("Iva",13)
			ds2.addColumn("Exento",14)
			ds2.addColumn("No Gravado",15)
			ds2.addColumn("Imp. Interno",16)
			ds2.addColumn("Perc.IB",17)
			ds2.addColumn("Perc.IVA",18)
			ds2.addColumn("Perc.Var.",19)
			ds2.addColumn("Total",20)		
			ds2.addColumn("Sucursal",21)
			ds2.addColumn("AFIP",22)
			ds2.addColumn("Comp.",23)
			ds2.addColumn("Modulo",24)
		
		for (var m = 0; m < tmp_array_nombre.length; m++) 
		{
			ds2.addColumn(tmp_array_nombre[m])
		}
		
		scopes.globals.PantallaWait()
		for (var i = 1; i <= vl_cant_ingresos; i++)
		{
			var record = foundset.getRecord(i);	
			var array_datos = new Array

			array_datos.push(record.comp_imputacion_mes)
			array_datos.push(record.comp_imputacion_anio)			
			array_datos.push(utils.dateFormat(record.comp_fecha,'dd/MM/yyyy'))
			array_datos.push(record.pp_comprobantes_enc_to_lg_talonarios.talonario_tipo_comp)			
			array_datos.push(record.comp_pv)			
			array_datos.push(record.comp_nro)
			array_datos.push(record.pp_comprobantes_enc_to_pp_proveedores.provee_codigo)
			array_datos.push(record.pp_comprobantes_enc_to_pp_proveedores.provee_nombre)
			array_datos.push(record.pp_comprobantes_enc_to_pp_proveedores.pp_proveedores_to_lg_categorias_iva.cativa_abreviatura)
			array_datos.push(record.pp_comprobantes_enc_to_pp_proveedores.pp_proveedores_to_documentos.docu_descripcion)
			array_datos.push(record.pp_comprobantes_enc_to_pp_proveedores.provee_nro_docu)
			array_datos.push(utils.numberFormat(record.comp_tot_sb,'#,##0.00'))
			array_datos.push(utils.numberFormat(record.comp_tot_iv,'#,##0.00'))			
			array_datos.push(utils.numberFormat(record.comp_tot_ex,'#,##0.00'))			
			array_datos.push(utils.numberFormat(record.comp_tot_nogr,'#,##0.00'))
			array_datos.push(utils.numberFormat(record.comp_tot_ii,'#,##0.00'))		
			array_datos.push(utils.numberFormat(record.comp_tot_perc_ib,'#,##0.00'))			
			array_datos.push(utils.numberFormat(record.comp_tot_perc_iva,'#,##0.00'))			
			array_datos.push(utils.numberFormat(record.comp_tot_perc_var,'#,##0.00'))
			array_datos.push(utils.numberFormat(record.comp_tot_to,'#,##0.00'))			
			array_datos.push(application.getValueListDisplayValue('sucursal_empresa',record.suc_id))
			array_datos.push(record.pp_comprobantes_enc_to_lg_talonarios.talonario_afip)
			array_datos.push(record.comp_cod)
			array_datos.push('PROVEEDORES')
			
			ds2.addRow(array_datos)
		}	
		
		var tmp = '<h1 style="text-align: left;"><em><span style="text-decoration: underline;">'+scopes.globals.ag_empresavigente.emp_nombre+'</span></em></h1>'+
		'<h2></h2>'+
		'<p>Libro de IVA Compras</p>'+
		'<p>Periodo: '+application.getValueListDisplayValue('meses',vl_mes)+'/'+application.getValueListDisplayValue('anios',vl_anio)+'</p>'+
		'<p></p>'
		
		//var htm = '<html><caption align="bottom">Encabezado de la tabla.</caption><caption align="bottom">Encabezado de la tabla.</caption>'+ ds2.getAsHTML(true, true, false, true, true);+'</html>'
	
		var htm = '<html>'+tmp+ ds2.getAsHTML(false, false, false, true, true);+'</html>'
		
		/**@type {String} */
		var fileName = 'Libro_de_iva_compras.xls'
		
		
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
 * @properties={typeid:24,uuid:"0905A521-83B3-4965-A9C1-92B41FA8A5C9"}
 * @AllowToRunInFind
 */
function onActionDescargar(event) {
	try 
	{
		var fs_comp_items = datasources.db.sistemas.pp_comprobantes_items.getFoundSet()
		
		var fs_alicuotas = datasources.db.sistemas.alicuotas.getFoundSet()
		fs_alicuotas.loadAllRecords()
		
		var tmp_ruta = plugins.file.getDefaultUploadLocation()+'//IVA_Compras//'
		var tmp_file_enca = 'IVA_COMPRAS_'+utils.numberFormat(vl_anio,'0000')+'_'+utils.numberFormat(vl_mes,'00')+'_enca.txt'
		var tmp_file_alic = 'IVA_COMPRAS_'+utils.numberFormat(vl_anio,'0000')+'_'+utils.numberFormat(vl_mes,'00')+'_alic.txt'

		if(!plugins.file.convertToJSFile(plugins.file.getDefaultUploadLocation()+'//IVA_Compras//').exists())
		{
			plugins.file.createFolder((plugins.file.getDefaultUploadLocation()+'//IVA_Compras//'))
		}

		var textData_enca  = ''
		var textData_alic  = ''
			
		var tmp_fecha 	   = ''
		var tmp_tipo_comp  = ''
		var tmp_ptovta 	   = ''
		var tmp_numero     = ''
		var tmp_despacho   = ''
		var tmp_coddoc     = ''
		var tmp_nrodoc     = ''
		var tmp_nomcli     = ''
		var tmp_imp_total  = ''
		var tmp_imp_nogr   = ''
		var tmp_imp_exento = ''
		var tmp_imp_piva   = ''
		var tmp_imp_potras = ''
		var tmp_imp_bruto  = ''
		var tmp_imp_neto   = ''
		var tmp_imp_impu   = ''
		var tmp_moneda     = ''
		var tmp_cotiza     = ''
		var tmp_cantalic   = ''
		var tmp_tipo_opera = ''
		var tmp_imp_insc   = ''
		var tmp_OtrosTri   = ''
		var tmp_cuitemis   = ''
		var tmp_denoemis   = ''
		var tmp_ivacomis   = ''	
			
		var tmp_cod_alic   = ''
		
		var tmp_item_neto  = ''
		var tmp_item_insc  = ''
			
		scopes.globals.PantallaWait()
		for (var i = 1; i <= foundset.getSize(); i++) 
		{
			var record = foundset.getRecord(i);
			
			tmp_fecha 	  = utils.numberFormat(record.comp_fecha.getFullYear(),'0000')+utils.numberFormat(record.comp_fecha.getMonth()+1,'00')+utils.numberFormat(record.comp_fecha.getDate(),'00')
			tmp_tipo_comp = utils.numberFormat(record.pp_comprobantes_enc_to_lg_talonarios.talonario_afip,'000') //TipoComp(record.tipo_dgi,record.tipo_comp)
			tmp_ptovta 	  = utils.numberFormat(record.comp_pv,'00000')
			tmp_numero    = utils.numberFormat(record.comp_nro,'00000000000000000000')
			tmp_despacho  = '                '
			
			if(!scopes.globals.EMPTY(record.pp_comprobantes_enc_to_pp_proveedores.docu_id))
			{
				tmp_coddoc = utils.numberFormat(record.pp_comprobantes_enc_to_pp_proveedores.pp_proveedores_to_documentos.docu_codigo,'00')
			}
			else
			{
				tmp_coddoc = '00'
			}
			
			if(!scopes.globals.EMPTY(record.pp_comprobantes_enc_to_pp_proveedores.provee_nro_docu))
			{
				tmp_nrodoc = utils.numberFormat(utils.stringToNumber(record.pp_comprobantes_enc_to_pp_proveedores.provee_nro_docu),'00000000000000000000')
			}
			else
			{
				tmp_nrodoc = '00000000000000000000'
			}
			
			
			//tmp_nomcli 	  = utils.stringFormat("%1$30s",new Array(record.pp_comprobantes_enc_to_pp_proveedores.provee_nombre))
			//tmp_nomcli 	  = record.pp_comprobantes_enc_to_pp_proveedores.provee_nombre.substr(0,30)
			tmp_nomcli 	  = utils.stringFormat("%1$-30s",new Array(record.pp_comprobantes_enc_to_pp_proveedores.provee_nombre.substr(0,30)))
							
			
			tmp_imp_total = utils.numberFormat(Math.abs(record.comp_tot_to),'0000000000000.00')
			tmp_imp_total = tmp_imp_total.substr(0,13)+tmp_imp_total.substr(14,15)
			
			//tmp_imp_nogr = utils.numberFormat(Math.abs(record.comp_tot_nogr),'0000000000000.00')
			if(record.comp_tot_nogr<0)
			{
				tmp_imp_nogr = utils.numberFormat(record.comp_tot_nogr,'000000000000.00')
				tmp_imp_nogr = tmp_imp_nogr.substr(0,13)+tmp_imp_nogr.substr(14,15)
			}
			else
			{
				tmp_imp_nogr = utils.numberFormat(record.comp_tot_nogr,'0000000000000.00')
				tmp_imp_nogr = tmp_imp_nogr.substr(0,13)+tmp_imp_nogr.substr(14,15)
			}
			
			tmp_imp_exento = utils.numberFormat(Math.abs(record.comp_tot_ex),'0000000000000.00')
			tmp_imp_exento = tmp_imp_exento.substr(0,13)+tmp_imp_exento.substr(14,15)
			
			tmp_imp_piva = utils.numberFormat(Math.abs(record.comp_tot_perc_iva),'0000000000000.00')
			tmp_imp_piva = tmp_imp_piva.substr(0,13)+tmp_imp_piva.substr(14,15)
			
			tmp_imp_potras = utils.numberFormat(Math.abs(record.comp_tot_perc_var),'0000000000000.00')
			tmp_imp_potras = tmp_imp_potras.substr(0,13)+tmp_imp_potras.substr(14,15)
			
			//tmp_imp_bruto = '000000000000000'
			
			tmp_imp_bruto = utils.numberFormat(Math.abs(record.comp_tot_perc_ib),'0000000000000.00')
			tmp_imp_bruto = tmp_imp_bruto.substr(0,13)+tmp_imp_bruto.substr(14,15)
			
			tmp_imp_neto  = '000000000000000'
			
			//tmp_imp_impu  = '000000000000000'
				
			tmp_imp_impu = utils.numberFormat(Math.abs(record.comp_tot_ii),'0000000000000.00')
			tmp_imp_impu = tmp_imp_impu.substr(0,13)+tmp_imp_impu.substr(14,15)
			
			tmp_imp_insc = utils.numberFormat(Math.abs(record.comp_tot_iv),'0000000000000.00')
			tmp_imp_insc = tmp_imp_insc.substr(0,13)+tmp_imp_insc.substr(14,15)
			
//			tmp_imp_neto = utils.numberFormat(Math.abs(record.comp_tot_sb),'0000000000000.00')
//			tmp_imp_neto = tmp_imp_neto.substr(0,13)+tmp_imp_neto.substr(14,15)
				
			tmp_moneda = 'PES'
			
			tmp_cotiza = '0001000000'
			
			var tmp_alicuotas = 0
			
			if(record.pp_comprobantes_enc_to_lg_talonarios.talonario_tipo_comp=="M" | record.pp_comprobantes_enc_to_lg_talonarios.talonario_tipo_comp=="A")
			{
				for (var k = 1; k <= fs_alicuotas.getSize(); k++) 
				{
					var rec_alicuota = fs_alicuotas.getRecord(k);
				
					var tmp_item_imp_neto = 0
					var tmp_item_imp_insc = 0
					
					tmp_cod_alic = utils.numberFormat(rec_alicuota.alicuota_cod_afip,'0000')
					
					fs_comp_items.find()
					fs_comp_items.comp_id	  = record.comp_id
					fs_comp_items.alicuota_id = rec_alicuota.alicuota_id
					var tmp_cant = fs_comp_items.search()
					
					for (var j = 1; j <= tmp_cant; j++)
					{
						var rec_item = fs_comp_items.getRecord(j) //record.pp_comprobantes_enc_to_pp_comprobantes_items.getRecord(j);
						
	//					if(rec_alicuota.alicuota_id == rec_item.alicuota_id)
	//					{	
	//						tmp_item_imp_neto = tmp_item_imp_neto + Math.abs(rec_item.compi_sb)
	//						tmp_item_imp_insc = tmp_item_imp_insc + Math.abs(rec_item.compi_iva)
	//						
	//						if(j==1)
	//						{	
	//							tmp_alicuotas++
	//						}
	//					}
	
	//					tmp_item_imp_neto = tmp_item_imp_neto + Math.abs(rec_item.compi_sb)
	//					tmp_item_imp_insc = tmp_item_imp_insc + Math.abs(rec_item.compi_iva)
	
						tmp_item_imp_neto = tmp_item_imp_neto + rec_item.compi_sb
						tmp_item_imp_insc = tmp_item_imp_insc + rec_item.compi_iva
							
						if(j==1)
						{
							if(tmp_item_imp_insc>0|tmp_item_imp_insc<0) // AGREGO <0 POR LOS DESCUENTOS QUE VAN EN NEGATIVO
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
				
						textData_alic = textData_alic +tmp_tipo_comp+tmp_ptovta+tmp_numero+tmp_coddoc+tmp_nrodoc+tmp_item_neto+tmp_cod_alic+tmp_item_insc+'\n'
					}
				}
			}	
			
			tmp_cantalic = utils.numberFormat(tmp_alicuotas,'0')
						
			if(tmp_cantalic=='0' | record.pp_comprobantes_enc_to_lg_talonarios.talonario_tipo_comp=="A")
			{
				tmp_tipo_opera = 'E'
			}
			else
			{
				tmp_tipo_opera = ' '
			}
			
			//tmp_imp_insc = '000000000000000'
			tmp_OtrosTri = '000000000000000'
			tmp_cuitemis = '00000000000'
			tmp_denoemis = '                              '	
			tmp_ivacomis = '000000000000000' 	
			
			textData_enca = textData_enca+tmp_fecha+tmp_tipo_comp+tmp_ptovta+tmp_numero+tmp_despacho+tmp_coddoc+tmp_nrodoc
			textData_enca = textData_enca+tmp_nomcli+tmp_imp_total+tmp_imp_nogr+tmp_imp_exento+tmp_imp_piva+tmp_imp_potras
			textData_enca = textData_enca+tmp_imp_bruto+tmp_imp_neto+tmp_imp_impu+tmp_moneda+tmp_cotiza+tmp_cantalic+tmp_tipo_opera+tmp_imp_insc+tmp_OtrosTri
			textData_enca = textData_enca+tmp_cuitemis+tmp_denoemis+tmp_ivacomis+'\n'
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
            globals.VentanaGenerica(scopes.globals.mx_usuario_id,'Información', 'Ocurrió un error al realizar la exportación', 'error', controller.getName(), null, null,null,null,null,null,null,null)
        }
	}
	catch (e)
	{
		application.output(e);
	}
}

/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"6B6E9B55-2237-4F61-947E-9E3D3108CB61"}
 */
function onActionFiltrar() 
{
	scopes.globals.PantallaWait()

	vl_asientos = new Array
	vl_tot_ex = 0
	vl_tot_sb = 0
	vl_tot_ii = 0
	vl_tot_iva = 0
	vl_tot_nogr = 0
	vl_tot_percep_ib = 0
	vl_tot_percep_iva = 0
	vl_tot_percep_varias = 0
	vl_tot_total = 0

	controller.find()
	comp_fecha =utils.dateFormat(vl_fec_desde,'dd/MM/yyyy')+'...'+utils.dateFormat(vl_fec_hasta,'dd/MM/yyyy')
	if(vl_proveedor!=null) provee_id=vl_proveedor
	if(vl_mes!=null) comp_imputacion_mes=vl_mes
	if(vl_anio!=null) comp_imputacion_anio=vl_anio
	pp_comprobantes_enc_to_lg_talonarios.talonario_libro_iva = 1
	var tmp_cant = controller.search() 

	for (var i = 1; i <= tmp_cant; i++) 
	{
		var record = foundset.getRecord(i);
		
		if(record.comp_debe_haber=='H')
		{
			vl_tot_ex 			 = vl_tot_ex + record.comp_tot_ex
			vl_tot_sb 			 = vl_tot_sb + record.comp_tot_sb
			vl_tot_ii 			 = vl_tot_ii + record.comp_tot_ii
			vl_tot_iva 			 = vl_tot_iva + record.comp_tot_iv
			vl_tot_nogr 		 = vl_tot_nogr + record.comp_tot_nogr
			vl_tot_percep_ib 	 = vl_tot_percep_ib + record.comp_tot_perc_ib
			vl_tot_percep_iva 	 = vl_tot_percep_iva + record.comp_tot_perc_iva
			vl_tot_percep_varias = vl_tot_percep_varias + record.comp_tot_perc_var
			vl_tot_total 		 = vl_tot_total + record.comp_tot_to
		}
		else
		{
			vl_tot_ex 			 = vl_tot_ex + record.comp_tot_ex*(-1)
			vl_tot_sb 			 = vl_tot_sb + record.comp_tot_sb*(-1)
			vl_tot_ii 			 = vl_tot_ii + record.comp_tot_ii*(-1)
			vl_tot_iva 			 = vl_tot_iva + record.comp_tot_iv*(-1)
			vl_tot_nogr 		 = vl_tot_nogr + record.comp_tot_nogr*(-1)
			vl_tot_percep_ib 	 = vl_tot_percep_ib + record.comp_tot_perc_ib*(-1)
			vl_tot_percep_iva 	 = vl_tot_percep_iva + record.comp_tot_perc_iva*(-1)
			vl_tot_percep_varias = vl_tot_percep_varias + record.comp_tot_perc_var*(-1)
			vl_tot_total 		 = vl_tot_total + record.comp_tot_to*(-1)
		}
		
		if(!scopes.globals.EMPTY(record.asiento_id))
		{
			vl_asientos.push(record.asiento_id)
		}
	}
	
	scopes.globals.CerrarPantallaWait()
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"8D92F99F-3EF3-4A0F-BF7C-AD5206810F14"}
 */
function onActionTotalesxAlicuotas(event) {
	forms.impuestos_lg_totales_alicuotas.vl_cliente = vl_proveedor
	forms.impuestos_lg_totales_alicuotas.vl_mes = vl_mes
	forms.impuestos_lg_totales_alicuotas.vl_anio = vl_anio
	forms.impuestos_lg_totales_alicuotas.vl_fec_desde = vl_fec_desde
	forms.impuestos_lg_totales_alicuotas.vl_fec_hasta = vl_fec_hasta
	
	forms.impuestos_lg_totales_alicuotas.vl_tipo = 1
	
	//forms.impuestos_lg_totales_alicuotas.elements.lbl_titulo.text = "Totales por alícuotas"

	var w3 = application.createWindow("totales_x_alicuotas", JSWindow.MODAL_DIALOG);
	w3.title=scopes.globals.vg_titulo_popup_dialog
	forms.impuestos_lg_totales_alicuotas.controller.show(w3);
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"F630CA14-C798-43A2-9CF1-B50A4A33CF46"}
 */
function onActionTotalesxCategorias(event) {
	forms.impuestos_lg_totales_categorias.vl_cliente = vl_proveedor
	forms.impuestos_lg_totales_categorias.vl_mes = vl_mes
	forms.impuestos_lg_totales_categorias.vl_anio = vl_anio
	forms.impuestos_lg_totales_categorias.vl_fec_desde = vl_fec_desde
	forms.impuestos_lg_totales_categorias.vl_fec_hasta = vl_fec_hasta
	forms.impuestos_lg_totales_categorias.vl_tipo = 1
	
	//forms.impuestos_lg_totales_alicuotas.elements.lbl_titulo.text = "Totales por alícuotas"

	var w3 = application.createWindow("totales_x_categorias", JSWindow.MODAL_DIALOG);
	w3.title=scopes.globals.vg_titulo_popup_dialog
	forms.impuestos_lg_totales_categorias.controller.show(w3);
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"F984FF01-352D-43C8-84C4-1BFB9F951925"}
 */
function onActionTotalesxProvincias(event) {
	forms.impuestos_lg_totales_provincias.vl_cliente = vl_proveedor
	forms.impuestos_lg_totales_provincias.vl_mes = vl_mes
	forms.impuestos_lg_totales_provincias.vl_anio = vl_anio
	forms.impuestos_lg_totales_provincias.vl_fec_desde = vl_fec_desde
	forms.impuestos_lg_totales_provincias.vl_fec_hasta = vl_fec_hasta
	forms.impuestos_lg_totales_provincias.vl_tipo = 1
	
	var w3 = application.createWindow("totales_x_provincias", JSWindow.MODAL_DIALOG);
	w3.title=scopes.globals.vg_titulo_popup_dialog
	forms.impuestos_lg_totales_provincias.controller.show(w3);
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"DB933DE1-8998-4FA0-9798-6CD32A5121FC"}
 */
function onActionTotalesxConceptos(event) 
{
	forms.impuestos_lg_totales_conceptos.vl_cliente = vl_proveedor
	forms.impuestos_lg_totales_conceptos.vl_mes = vl_mes
	forms.impuestos_lg_totales_conceptos.vl_anio = vl_anio
	forms.impuestos_lg_totales_conceptos.vl_fec_desde = vl_fec_desde
	forms.impuestos_lg_totales_conceptos.vl_fec_hasta = vl_fec_hasta
	forms.impuestos_lg_totales_conceptos.vl_tipo = 1
	
	var w3 = application.createWindow("totales_x_conceptos", JSWindow.MODAL_DIALOG);
	w3.title=scopes.globals.vg_titulo_popup_dialog
	forms.impuestos_lg_totales_conceptos.controller.show(w3);
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"4FD3C8E4-FB73-4217-90DA-4B673CCA0B97"}
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
	'<p>Asientos IVA Compras</p>'+
	'<p>Periodo: '+utils.dateFormat(vl_fec_desde,'dd/MM/yyyy')+' al '+utils.dateFormat(vl_fec_hasta,'dd/MM/yyyy')+'</p>'
	'<p>Mes: '+utils.numberFormat(vl_mes,'00')+' Año: '+utils.numberFormat(vl_anio,'0000')+'</p>'
	'<p></p>'
	var htm = '<html>'+tmp+ ds2.getAsHTML(false, false, false, true, true);+'</html>'
	
	/**@type {String} */
	var fileName = 'Asientos_IVA_Compras.xls'
	
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
 * @properties={typeid:24,uuid:"1B7DDD20-501D-4179-B1F3-AEF913E29D73"}
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
			ds2.addColumn("No Gravado",12)
			ds2.addColumn("exento",13)
			ds2.addColumn("total",14)
			ds2.addColumn("Empresa",15)
			ds2.addColumn("SubRubro",16)
			ds2.addColumn("nom_subrubro",17)
			ds2.addColumn("rubro",18)
			ds2.addColumn("nom_rubro",19)
			ds2.addColumn("Cód. proveedor",20)
			ds2.addColumn("Nombre proveedor",21)
			ds2.addColumn("Concepto",22)
			ds2.addColumn("Nom. concepto",23)
			ds2.addColumn("cuenta",24)
			ds2.addColumn("nom_cuenta",25)
			ds2.addColumn("Asiento N°",26)
			ds2.addColumn("Asiento descripcion",27)
			
			ds2.addColumn("Mes",28)
			ds2.addColumn("Año",29)
			ds2.addColumn("Provincia",30)
			ds2.addColumn("Cat.IVA",31)
			ds2.addColumn("T.doc.",32)
			ds2.addColumn("N° doc.",33)
			
			ds2.addColumn("Perc.IB",34)
			ds2.addColumn("Perc.IVA",35)
			ds2.addColumn("Perc.Var.",36)
			
		
		for (var m = 0; m < tmp_array_nombre.length; m++) 
		{
			ds2.addColumn(tmp_array_nombre[m])
		}
		scopes.globals.PantallaWait()
		
		var fs_articulos = datasources.db.sistemas.sp_articulos.getFoundSet()
		var fs_rubros = datasources.db.sistemas.sp_rubros.getFoundSet()
		var fs_subrubros = datasources.db.sistemas.sp_subrubros.getFoundSet()
		var fs_proveedores = datasources.db.sistemas.pp_proveedores.getFoundSet()
		var fs_ctactb = datasources.db.sistemas.ctb_cuentas.getFoundSet()
		var fs_ctb_asientos = datasources.db.sistemas.ctb_asientos_enc.getFoundSet()
		var fs_localidades = datasources.db.sistemas.localidades.getFoundSet()
		var fs_provincias = datasources.db.sistemas.provincias.getFoundSet()
		var fs_gastos = datasources.db.sistemas.lg_gastos.getFoundSet()
		
		for (var i = 1; i <= vl_cant_ingresos; i++)
		{
			var record = foundset.getRecord(i);

			for (var j = 1; j <= record.pp_comprobantes_enc_to_pp_comprobantes_items.getSize(); j++)
			{
				var record_arti = record.pp_comprobantes_enc_to_pp_comprobantes_items.getRecord(j);
				var array_datos = new Array
				
				fs_articulos.find()
				fs_articulos.articulo_id = record_arti.articulo_id
				fs_articulos.search()
				
				array_datos.push(record.comp_cod)
				array_datos.push(record.pp_comprobantes_enc_to_lg_talonarios.talonario_tipo_comp)
				array_datos.push(utils.numberFormat(record.comp_pv,'0000')+utils.numberFormat(record.comp_nro,'00000000'))
				array_datos.push(utils.dateFormat(record.comp_fecha,'dd/MM/yyyy'))
				array_datos.push(record_arti.compi_codigo)
				array_datos.push(record_arti.compi_descripcion)
				array_datos.push(utils.numberFormat(record_arti.compi_cantidad,'#,##0.00'))
				array_datos.push(utils.numberFormat(record_arti.compi_ii,'#,##0.00'))
				array_datos.push(utils.numberFormat(record_arti.compi_alicuota_porcentaje,'#,##0.00'))
				array_datos.push(utils.numberFormat(record_arti.compi_iva,'#,##0.00'))
				array_datos.push(utils.numberFormat(record_arti.compi_sb,'#,##0.00'))
				array_datos.push(utils.numberFormat(record_arti.compi_nogr,'#,##0.00'))
				array_datos.push(utils.numberFormat(record_arti.compi_ex,'#,##0.00'))
				array_datos.push(utils.numberFormat(record_arti.compi_total,'#,##0.00'))
					
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
				
				fs_proveedores.find()
				fs_proveedores.provee_id = record.provee_id
				if(fs_proveedores.search()==1)
				{
					array_datos.push(fs_proveedores.provee_codigo)
					array_datos.push(fs_proveedores.provee_nombre)
				}
				else
				{
					array_datos.push(0)
					array_datos.push('SIN PROVEEDOR')
				}
				
				fs_gastos.find()
				fs_gastos.grupo_id = record_arti.gasto_id
				if(fs_gastos.search()==1)
				{
					array_datos.push(fs_gastos.gasto_codigo)
					array_datos.push(fs_gastos.gasto_descripcion)
				}
				else
				{
					array_datos.push(0)
					array_datos.push('SIN CONCEPTO')
				}
				
				fs_ctactb.find()
				fs_ctactb.cuenta_id = fs_gastos.cuenta_id
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
				
				array_datos.push(record.comp_imputacion_mes)
				array_datos.push(record.comp_imputacion_anio)
				
				if(!scopes.globals.EMPTY(fs_proveedores.localidad_id))
				{
					fs_localidades.loadRecords(fs_proveedores.localidad_id)
					
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
				
				array_datos.push(record.pp_comprobantes_enc_to_pp_proveedores.pp_proveedores_to_lg_categorias_iva.cativa_abreviatura)
				array_datos.push(record.pp_comprobantes_enc_to_pp_proveedores.pp_proveedores_to_documentos.docu_codigo)
				array_datos.push(record.pp_comprobantes_enc_to_pp_proveedores.provee_nro_docu)

				array_datos.push(utils.numberFormat(record.comp_tot_perc_ib,'#,##0.00'))
				array_datos.push(utils.numberFormat(record.comp_tot_perc_iva,'#,##0.00'))
				array_datos.push(utils.numberFormat(record.comp_tot_perc_var,'#,##0.00'))
				
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
/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"D6FC8CF0-D505-4793-B150-6D6C4F4C1432"}
 */
function onActionAsientosResumidos(event) 
{
	forms.impuestos_lg_totales_asientos.vl_asientos 	= vl_asientos
	forms.impuestos_lg_totales_asientos.vl_mes 			= vl_mes
	forms.impuestos_lg_totales_asientos.vl_anio 		= vl_anio
	forms.impuestos_lg_totales_asientos.vl_fec_desde 	= vl_fec_desde
	forms.impuestos_lg_totales_asientos.vl_fec_hasta 	= vl_fec_hasta
	forms.impuestos_lg_totales_asientos.vl_tipo 		= 1
	forms.impuestos_lg_totales_asientos.vl_total_debe  	= 0
	forms.impuestos_lg_totales_asientos.vl_total_haber 	= 0
	forms.impuestos_lg_totales_asientos.vl_diferencia  	= 0
	forms.impuestos_lg_totales_asientos.vl_titulo 		= 'compras'
	
	var w3 = application.createWindow("totales_x_asientos", JSWindow.MODAL_DIALOG);
	w3.title=scopes.globals.vg_titulo_popup_dialog
	forms.impuestos_lg_totales_asientos.controller.show(w3);
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
 * @properties={typeid:24,uuid:"86B5EF6F-30A2-483F-8A38-D9DC2F6ADF5F"}
 */
function onCellDoubleClick(foundsetindex, columnindex, record, event)
{
	switch (columnindex) 
	{
		case 18:
			if(!scopes.globals.EMPTY(asiento_id))
			{	
				forms.lg_frm_asiento.elements.lbl_titulo.text = "Asiento contable"
				forms.lg_frm_asiento.vl_asiento_id=asiento_id
				var w3 = application.createWindow("mydialog", JSWindow.MODAL_DIALOG);
				w3.title=scopes.globals.vg_titulo_popup_dialog
				forms.lg_frm_asiento.controller.show(w3);
			}
		break;
	}
}
