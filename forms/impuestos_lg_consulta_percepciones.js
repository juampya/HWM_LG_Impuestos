/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"493F25FF-5087-4800-A0D2-2F7670AB2BCC",variableType:4}
 */
var vl_provincia = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"59580023-43CB-4EAC-BA4A-37051374AD5E",variableType:4}
 */
var vl_mes = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"651A1F89-CE01-44FC-BF7C-504136AED3A6",variableType:4}
 */
var vl_anio = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D13CE17C-0CA0-4821-87B4-66A7B359AB47"}
 */
var vl_comprobante = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"E0AAC91E-01FB-4C99-B5C3-81BB1BBEB1FE",variableType:4}
 */
var vl_tipo_imp_id = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"3F5BFE8B-99B8-4C73-96AC-EA2527C2538C",variableType:93}
 */
var vl_fec_hasta = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"BD76651A-DC29-4309-AFE6-03155F6E0DCF",variableType:93}
 */
var vl_fec_desde = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"A5D50B65-32AA-4EDB-9717-A2D6C81A6658",variableType:4}
 */
var vl_proveedor = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"E40A9FEE-2F43-442C-AD8D-591E1E4070FE",variableType:4}
 */
var vl_aplica_id = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"2AC14566-743A-4465-837A-E95AF8D623C6"}
 */
var vl_nombre = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1C86BE96-D0B6-45CF-BC3E-77B6A1B0BA94"}
 */
function onActionDetalle(event) 
{
	switch (tipo_imp_id) 
	{
		case 4:
			forms.impuestos_lg_detalle_percepcion_ibr.elements.lbl_titulo.text = pp_comprobantes_impuestos_to_imp_tipo_impuestos.tipo_imp_descripcion + "  -  (" + utils.dateFormat(pp_impu_fecha,'dd/MM/yyyy') + ")"
			var w2 = application.createWindow("percepcion_ibr", JSWindow.MODAL_DIALOG);
			w2.title=scopes.globals.vg_titulo_popup_dialog
			forms.impuestos_lg_detalle_percepcion_ibr.controller.show(w2)
		break;	
		case 2:
//			RetencionIva()
		break;
				
		default:
		break;	
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A8ACEF42-8F2E-48DD-A03A-1A7641FA5A19"}
 */
function onActionVolver(event) 
{
	scopes.globals.VolverGenerico()
}

/**
 * Called when the mouse is double clicked on a row/cell (foundset and column indexes are given).
 *
 * @param {number} foundsetindex
 * @param {number} [columnindex]
 * @param {JSRecord} [record]
 * @param {JSEvent} [event]
 * @param {string} [columnid]
 *
 * @properties={typeid:24,uuid:"A8E60BB3-2691-4FD0-BF03-F6446F4ABD34"}
 */
function onCellDoubleClick(foundsetindex, columnindex, record, event, columnid) 
{
	onActionDetalle(event)
}

/**
 *
 * @properties={typeid:24,uuid:"C364FAB3-B689-4237-AB43-6AFABBF37C84"}
 * @AllowToRunInFind
 */
function onActionFiltrar() 
{
//	if(vl_tipo_imp_id!=null) tipo_imp_id=vl_tipo_imp_id
	
	
	scopes.globals.PantallaWait()

	controller.find()
	//pp_comprobantes_impuestos_to_pp_comprobantes_enc.comp_fecha =utils.dateFormat(vl_fec_desde,'dd/MM/yyyy')+'...'+utils.dateFormat(vl_fec_hasta,'dd/MM/yyyy')
	pp_impu_fecha =utils.dateFormat(vl_fec_desde,'dd/MM/yyyy')+'...'+utils.dateFormat(vl_fec_hasta,'dd/MM/yyyy')
	if(vl_proveedor!=null) provee_id=vl_proveedor
	if(vl_tipo_imp_id!=null) tipo_imp_id=vl_tipo_imp_id
	if(vl_aplica_id!=null) aplica_id=vl_aplica_id
	if(vl_provincia!=null) provincia_id=vl_provincia

	controller.search() 

	//CalculaTotales()
	
	scopes.globals.CerrarPantallaWait()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"BEBC2264-B304-48A5-8FC8-15E6C4745BA1"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) 
{
	if(firstShow)
	{
		var fs_tipo_impuestos = datasources.db.sistemas.imp_tipo_impuestos.getFoundSet()
		fs_tipo_impuestos.find()
		fs_tipo_impuestos.emp_id = scopes.globals.mx_empresa_id
		fs_tipo_impuestos.tipo_imp_categoria = 1
		if(fs_tipo_impuestos.search()>0)
		{
			fs_tipo_impuestos.setSelectedIndex(1)
			vl_tipo_imp_id = fs_tipo_impuestos.tipo_imp_id
		}		
		
		vl_aplica_id	= null
		vl_provincia    = null	
		vl_proveedor   	= null
		vl_fec_desde  	= null
		vl_fec_hasta 	= null		
		
		vl_anio = application.getServerTimeStamp().getFullYear()
		vl_mes  = application.getServerTimeStamp().getMonth()+1		
		
		vl_fec_desde=application.getServerTimeStamp()
		vl_fec_hasta=application.getServerTimeStamp()
		
		vl_fec_hasta = new Date(vl_anio,vl_mes-1,scopes.globals.ultimoDiaMes(vl_mes,vl_anio))
	}
	
	onActionFiltrar()
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"780EC32C-40CC-43FB-915C-52958F25258A"}
 * @AllowToRunInFind
 */
function onActionRefrescar(event) 
{
	var fs_tipo_impuestos = datasources.db.sistemas.imp_tipo_impuestos.getFoundSet()
	fs_tipo_impuestos.find()
	fs_tipo_impuestos.emp_id = scopes.globals.mx_empresa_id
	fs_tipo_impuestos.tipo_imp_categoria = 1
	if(fs_tipo_impuestos.search()>0)
	{
		fs_tipo_impuestos.setSelectedIndex(1)
		vl_tipo_imp_id = fs_tipo_impuestos.tipo_imp_id
	}	
	
	vl_aplica_id	= null
	vl_provincia  	= null	
	vl_proveedor   	= null
	vl_fec_desde  	= null
	vl_fec_hasta 	= null
	
	onShow(true,null)
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
 * @properties={typeid:24,uuid:"0F1C788E-60E3-41D8-9C5D-8D34E392D006"}
 */
function onCellClick(foundsetindex, columnindex, record, event) 
{
	switch (columnindex) 
	{
		case 0:
			onActionDetalle(null)
		break;
	}	
}

/**
 * @properties={typeid:24,uuid:"2548B699-19EE-478D-9416-A6A5DF902CF7"}
 */
function ImprimirConsultaResumida()
{
	var tmp_provee = 'Todos'
	var tmp_impues = 'Todos'
	var tmp_aplica = 'Todos'
		
	if(!scopes.globals.EMPTY(vl_proveedor))
	{
		tmp_provee = application.getValueListDisplayValue('pp_proveedores',vl_proveedor)
	}
	
	if(!scopes.globals.EMPTY(vl_tipo_imp_id))
	{
		tmp_impues = application.getValueListDisplayValue('lg_tipo_impuestos',vl_tipo_imp_id)
	}
	
	if(!scopes.globals.EMPTY(vl_aplica_id))
	{
		tmp_aplica = application.getValueListDisplayValue('lg_impuesto_aplica',vl_aplica_id)
	}	
	
	plugins.jasperPluginRMI.runReport(foundset,'imp_percepciones.jasper',null,plugins.jasperPluginRMI.OUTPUT_FORMAT.VIEW,{pfecha_desde:vl_fec_desde,pfecha_hasta:vl_fec_hasta,pproveedor:tmp_provee,pimpuesto:tmp_impues,paplica:tmp_aplica})

}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"6A3BAD63-4E6B-4544-9C92-5B0AD246FD8B"}
 */
function onActionImprimirConsulta(event) 
{
	if(foundset.getSize()==0)
	{
		scopes.globals.VentanaGenerica(scopes.globals.mx_usuario_id,scopes.globals.vg_titulo_popup_dialog, 'No existen datos para imprimir con esos parámetros.', 'warning',controller.getName(),null, null, null, null,null,null,null,null)
	}
	else
	{
		scopes.globals.VentanaGenerica(scopes.globals.mx_usuario_id,scopes.globals.vg_titulo_popup_dialog, 'Opción a imprimir', 'warning',controller.getName(),'Resumido', 'ImprimirConsultaResumida', 'Detallado', 'ImprimirConsultaDetallada',null,null,null,null)
	}
}

/**
 * @properties={typeid:24,uuid:"74B98250-CD33-4E91-B2ED-C6A9FD0094D2"}
 */
function ImprimirConsultaDetallada() 
{
	var tmp_provee = 'Todos'
	var tmp_impues = 'Todos'
	var tmp_aplica = 'Todos'
		
	if(!scopes.globals.EMPTY(vl_proveedor))
	{
		tmp_provee = application.getValueListDisplayValue('pp_proveedores',vl_proveedor)
	}
	
	if(!scopes.globals.EMPTY(vl_tipo_imp_id))
	{
		tmp_impues = application.getValueListDisplayValue('lg_tipo_impuestos',vl_tipo_imp_id)
	}
	
	if(!scopes.globals.EMPTY(vl_aplica_id))
	{
		tmp_aplica = application.getValueListDisplayValue('lg_impuesto_aplica',vl_aplica_id)
	}	
	
	plugins.jasperPluginRMI.runReport(foundset,'imp_percepciones_detallada.jasper',null,plugins.jasperPluginRMI.OUTPUT_FORMAT.VIEW,{pfecha_desde:vl_fec_desde,pfecha_hasta:vl_fec_hasta,pproveedor:tmp_provee,pimpuesto:tmp_impues,paplica:tmp_aplica})

}

/**
 * @properties={typeid:24,uuid:"C4A2B580-2AAD-4916-B329-DEE3CD31050B"}
 */
function CalculaTotales()
{
//	vl_cantidad=databaseManager.getFoundSetCount(foundset)
//	vl_tot_to 		  = 0
//	vl_tot_sb 		  = 0
//	vl_tot_iva 		  = 0
//	vl_tot_ret_ib 	  = 0
//	vl_tot_ret_iva 	  = 0
//	vl_tot_ret_varias = 0
//	vl_tot_nogr		  = 0
//	vl_tot_noinsc	  = 0
//	vl_tot_exento	  = 0
//	vl_tot_percep	  = 0
//	vl_tot_percep_iva = 0
//
//	
//	for (var i = 1; i <= foundset.getSize(); i++) 
//	{
//		var record = foundset.getRecord(i);
//		vl_tot_to  		  = vl_tot_to+record.calc_tot_to
//		vl_tot_sb  		  = vl_tot_sb+record.calc_tot_sb
//		vl_tot_iva 		  = vl_tot_iva+record.calc_tot_iva
//		vl_tot_ret_ib 	  = vl_tot_ret_ib+record.calc_ret_ib
//		vl_tot_ret_iva    = vl_tot_ret_iva+record.calc_ret_iva
//		vl_tot_ret_varias = vl_tot_ret_varias+record.calc_ret_var
//		vl_tot_ret_gan	  = vl_tot_ret_gan+record.calc_ret_gan
//		vl_tot_percep     = vl_tot_percep+record.calc_percep
//		vl_tot_percep_iva = vl_tot_percep_iva+record.calc_percep_iva
//		vl_tot_nogr 	  = vl_tot_nogr+record.calc_tot_nogr
//		vl_tot_noinsc 	  = vl_tot_noinsc+record.calc_tot_noin
//		vl_tot_exento 	  = vl_tot_exento+record.calc_tot_exento
//	}
}

/**
 * @properties={typeid:24,uuid:"B989DEA6-4562-4841-A0FB-2F48925858E1"}
 */
function onActionEvaluarDescarga() 
{

	if(scopes.globals.EMPTY(vl_tipo_imp_id))
	{
		scopes.globals.VentanaGenerica(scopes.globals.mx_usuario_id,scopes.globals.vg_titulo_popup_dialog,'El tipo de impuesto no puede quedar vacío','info',controller.getName(),'OK',null,null,null,null,null,null,null)
		return 
	}
//	if(scopes.globals.EMPTY(vl_aplica_id))
//	{
//		scopes.globals.VentanaGenerica(scopes.globals.mx_usuario_id,scopes.globals.vg_titulo_popup_dialog,'El detalle del tipo de impuesto no puede quedar vacío','info',controller.getName(),'OK',null,null,null,null,null,null,null)
//		return 
//	}

	
	if(vl_tipo_imp_id!=1)
	{
		scopes.globals.VentanaGenerica(scopes.globals.mx_usuario_id,scopes.globals.vg_titulo_popup_dialog,'Solo puedo Generar PERCEPCIONES.','warning',controller.getName(),'OK',null,null,null,null,null,null,null)
		return 
	}
	
	descargarRetencionGanancias() 
}

/**
 *
 * @properties={typeid:24,uuid:"86127B37-E646-4BBE-8BAA-12FBBE3D934B"}
 */
function descargarRetencionGanancias() 
{
	try 
	{
//		var fs_alicuotas = datasources.db.sistemas.alicuotas.getFoundSet()
//		fs_alicuotas.loadAllRecords()

		var tmp_ruta = plugins.file.getDefaultUploadLocation()+'//IVA_Compras//'
		var tmp_file_comprob = 'SiCoRe_'+utils.dateFormat(vl_fec_desde,'yyyyMMdd')+'-'+utils.dateFormat(vl_fec_hasta,'yyyyMMdd')+'.txt'
		var tmp_file_sujetos = 'SiCoRe_Sujetos_retenidos'+utils.dateFormat(vl_fec_desde,'yyyyMMdd')+'-'+utils.dateFormat(vl_fec_hasta,'yyyyMMdd')+'.txt'

		if(!plugins.file.convertToJSFile(plugins.file.getDefaultUploadLocation()+'//IVA_Compras//').exists())
		{
			plugins.file.createFolder((plugins.file.getDefaultUploadLocation()+'//IVA_Compras//'))
		}

		var textData_sujetos = ''
		var textData_comprob = ''

		tmp_proveed_id = 0		
		
		var tmp_c01 = ''
		var tmp_c02 = ''
		var tmp_c03 = ''
		var tmp_c04 = ''
		var tmp_c05 = ''
		var tmp_c06 = ''
		var tmp_c07 = ''
		var tmp_c08 = ''
		var tmp_c09 = ''
		var tmp_c10 = ''
		var tmp_c11 = ''
		var tmp_c12 = ''
		var tmp_c13 = ''
		var tmp_c14 = ''
		var tmp_c15 = ''
		var tmp_c16 = ''
		var tmp_c17 = ''
		var tmp_c18 = ''
		var tmp_c19 = ''
		var tmp_c20 = ''
		var tmp_c21 = ''

		var tmp_c50 = ''
		var tmp_c51 = ''
		var tmp_c52 = ''
		var tmp_c53 = ''
		var tmp_c54 = ''
		var tmp_c55 = ''
		
		scopes.globals.PantallaWait()
		
		foundset.sort('provee_id asc')
		
		var tmp_proveed_id = null
			
		for (var i = 1; i <= foundset.getSize(); i++) 
		{
			var record = foundset.getRecord(i);
			
			tmp_c01 = '06'
			tmp_c02 = utils.dateFormat(record.pp_impu_fecha,'dd/MM/yyyy')
			//tmp_c02 = utils.dateFormat(record.pp_comprobantes_impuestos_to_pp_comprobantes_enc.comp_fecha,'dd/MM/yyyy')
			tmp_c03 = utils.numberFormat(record.pp_impu_nro,'0000000000000000')
			tmp_c04 = utils.numberFormat(record.pp_comprobantes_impuestos_to_pp_comprobantes_enc.comp_tot_to,'0000000000000.00')	
			tmp_c05 = utils.numberFormat(record.pp_impu_regimen,'0000')
			tmp_c06 = utils.numberFormat(record.pp_impu_resolucion,'000')			
			tmp_c07 = '1'
			tmp_c08 = utils.numberFormat(record.pp_impu_base_imponible,'00000000000.00')
			tmp_c09 = utils.dateFormat(record.pp_impu_fecha,'dd/MM/yyyy')
			tmp_c10 = '01'		
			tmp_c11 = '0'			
			tmp_c12 = utils.numberFormat(record.pp_impu_importe,'00000000000.00')
			tmp_c13 = '000000'		
			tmp_c14 = '          '	
				
			if(!scopes.globals.EMPTY(record.pp_comprobantes_impuestos_to_pp_proveedores.docu_id))
			{
//				tmp_c15	  = utils.numberFormat(record.pp_comprobantes_impuestos_to_pp_comprobantes_enc.pp_comprobantes_enc_to_pp_proveedores.pp_proveedores_to_documentos.docu_codigo,'00')
				tmp_c15	  = utils.numberFormat(record.pp_comprobantes_impuestos_to_pp_proveedores.pp_proveedores_to_documentos.docu_codigo,'00')

			}
			else
			{
				tmp_c15 = '00'
			}
			if(!scopes.globals.EMPTY(record.pp_comprobantes_impuestos_to_pp_proveedores.provee_nro_docu))
			{
				tmp_c16    = utils.numberFormat(utils.stringToNumber(record.pp_comprobantes_impuestos_to_pp_proveedores.provee_nro_docu),'00000000000000000000')
			}
			else
			{
				tmp_c16 = '00000000000000000000'
			}
			tmp_c17 = '              '
			tmp_c18 = '                              '
			tmp_c19 = ' '
			tmp_c20 = '           '
			tmp_c21 = '           '

			tmp_c50   = utils.stringFormat("%1$-20s",new Array(record.pp_comprobantes_impuestos_to_pp_proveedores.provee_nombre.substr(0,20)))			
			tmp_c51   = utils.stringFormat("%1$-20s",new Array(record.pp_comprobantes_impuestos_to_pp_proveedores.provee_domicilio.substr(0,20)))			
			tmp_c52	  = utils.stringFormat("%1$-20s",new Array(record.pp_comprobantes_impuestos_to_pp_proveedores.pp_proveedores_to_localidades.localidad_nombre.substr(0,20)))
			tmp_c53	  = '00'
			tmp_c54	  = utils.numberFormat(utils.stringToNumber(record.pp_comprobantes_impuestos_to_pp_proveedores.pp_proveedores_to_localidades.localidad_cod_postal),'00000000')			
			tmp_c55   = utils.numberFormat(utils.stringToNumber(record.pp_comprobantes_impuestos_to_pp_proveedores.provee_nro_docu),'00000000000')		

			textData_comprob = textData_comprob+tmp_c01+tmp_c02+tmp_c03+tmp_c04+tmp_c05+tmp_c06+tmp_c07+tmp_c08+tmp_c09+tmp_c10+tmp_c11
			textData_comprob = textData_comprob+tmp_c12+tmp_c13+tmp_c14+tmp_c15+tmp_c16+tmp_c17+tmp_c18+tmp_c19+tmp_c20+tmp_c21+'\n'

			if(tmp_proveed_id != record.provee_id)
			{
				tmp_proveed_id = record.provee_id

				textData_sujetos = textData_sujetos+tmp_c55+tmp_c50+tmp_c51+tmp_c52+tmp_c53+tmp_c54+tmp_c15+'\n'
			}
//			textData_enca = textData_enca+tmp_nomcli+tmp_imp_total+tmp_imp_nogr+tmp_imp_exento+tmp_imp_piva+tmp_imp_potras
//			textData_enca = textData_enca+tmp_imp_bruto+tmp_imp_neto+tmp_imp_impu+tmp_moneda+tmp_cotiza+tmp_cantalic+tmp_tipo_opera+tmp_imp_insc+tmp_OtrosTri
//			textData_enca = textData_enca+tmp_cuitemis+tmp_denoemis+tmp_ivacomis+'\n'
		}
		
		scopes.globals.CerrarPantallaWait()
		
		/** @type {plugins.file.JSFile}*/
		var file_sujetos = plugins.file.convertToJSFile(tmp_ruta+tmp_file_sujetos);
		/** @type {plugins.file.JSFile}*/
		var file_comprob = plugins.file.convertToJSFile(tmp_ruta+tmp_file_comprob);
		
		if (file_sujetos.exists())
		{
			file_sujetos.deleteFile()
			file_sujetos.createNewFile()
		}	
		else
		{
			file_sujetos.createNewFile()
		}
		
		if (file_comprob.exists())
		{
			file_comprob.deleteFile()
			file_comprob.createNewFile()
		}	
		else
		{
			file_comprob.createNewFile()
		}
		
		plugins.file.writeTXTFile(file_sujetos, textData_sujetos);
		plugins.file.writeTXTFile(file_comprob, textData_comprob);
		
		var contenido_archivo_enca = plugins.file.readTXTFile(tmp_ruta+tmp_file_sujetos);
		var success_write_enca = plugins.file.writeTXTFile(tmp_file_sujetos, contenido_archivo_enca);
		
		application.sleep(5000)
		
        if(success_write_enca)
        {
        	globals.VentanaGenerica(scopes.globals.mx_usuario_id,'Información', 'El archivo encabezado se descargó existosamente', 'question', controller.getName(), null, null,null,null,null,null,null,null)
			   
        	var contenido_archivo_comp = plugins.file.readTXTFile(tmp_ruta+tmp_file_comprob);
        	var success_write_comp = plugins.file.writeTXTFile(tmp_file_comprob, contenido_archivo_comp);
			   
        	if(success_write_comp)
        	{
        		globals.VentanaGenerica(scopes.globals.mx_usuario_id,'Información', 'El archivo comprobantes se descargó existosamente', 'question', controller.getName(), null, null,null,null,null,null,null,null)
        	}     
        }
        else
        {
            globals.VentanaGenerica(scopes.globals.mx_usuario_id,'Información', 'Ocurrió un error al realizar la exportación', 'error', controller.getName(), null, null,null,null,null,null,null,null)
        }
	}
	catch (e)
	{
		scopes.globals.CerrarPantallaWait()
		globals.VentanaGenerica(scopes.globals.mx_usuario_id,'Error',e, 'error', controller.getName(), null, null,null,null,null,null,null,null)
		application.output(e);
	}		
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"5C8F86D8-DB27-406A-9867-1C00D9BFC5B2"}
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
			ds2.addColumn("Fecha",1)
			ds2.addColumn("Tipo Impuesto",2)
			ds2.addColumn("Detalle",3)			
			ds2.addColumn("Cod.Impuesto",4)			
			ds2.addColumn("Cod.Regimen",5)			
			ds2.addColumn("Aplicado",6)
			ds2.addColumn("Codigo",7)
			ds2.addColumn("Proveedor",8)
			ds2.addColumn("Importe",9)
			ds2.addColumn("Alicuota",10)			
			ds2.addColumn("Provincia",11)		
			ds2.addColumn("Sucursal",12)		
		
		for (var m = 0; m < tmp_array_nombre.length; m++) 
		{
			ds2.addColumn(tmp_array_nombre[m])
		}
		
		scopes.globals.PantallaWait()
		for (var i = 1; i <= vl_cant_ingresos; i++)
		{
			var record = foundset.getRecord(i);	
			var array_datos = new Array

			array_datos.push(utils.dateFormat(record.pp_impu_fecha,'dd/MM/yyyy'))
			//array_datos.push(utils.dateFormat(record.pp_comprobantes_impuestos_to_pp_comprobantes_enc.comp_fecha,'dd/MM/yyyy'))
			array_datos.push(application.getValueListDisplayValue('lg_tipo_impuestos',record.tipo_imp_id))			
			array_datos.push(application.getValueListDisplayValue('lg_impu_aplica',record.aplica_id))
			if(scopes.globals.EMPTY(record.pp_impu_regimen))
			{
				array_datos.push(' ')
			}
			else
			{
				array_datos.push(record.pp_impu_regimen)
			}
			if(scopes.globals.EMPTY(record.pp_impu_resolucion))
			{
				array_datos.push(' ')
			}
			else
			{
				array_datos.push(record.pp_impu_resolucion)
			}
//			array_datos.push(record.pp_comprobantes_enc_to_lg_talonarios.talonario_tipo_comp)			
			array_datos.push(record.pp_comprobantes_impuestos_to_pp_comprobantes_enc.calc_numero)
			array_datos.push(record.pp_comprobantes_impuestos_to_pp_comprobantes_enc.pp_comprobantes_enc_to_pp_proveedores.provee_codigo)
			array_datos.push(record.pp_comprobantes_impuestos_to_pp_comprobantes_enc.pp_comprobantes_enc_to_pp_proveedores.provee_nombre)
			array_datos.push(utils.numberFormat(record.pp_impu_importe,'#,##0.00'))
			array_datos.push(utils.numberFormat(record.pp_impu_alicuota,'#,##0.00'))
//			array_datos.push(application.getValueListDisplayValue('provincias',record.provincia_id))		
			if(scopes.globals.EMPTY(record.provincia_id))
			{
				array_datos.push(' ')
			}
			else
			{
				array_datos.push(application.getValueListDisplayValue('provincias',record.provincia_id))
			}
			array_datos.push(application.getValueListDisplayValue('sucursal_empresa',record.suc_id))

			ds2.addRow(array_datos)
		}	
		
		var tmp = '<h1 style="text-align: left;"><em><span style="text-decoration: underline;">'+scopes.globals.ag_empresavigente.emp_nombre+'</span></em></h1>'+
		'<h2></h2>'+
		'<p>Libro de Percepciones</p>'+
		'<p>Periodo: '+application.getValueListDisplayValue('meses',vl_mes)+'/'+application.getValueListDisplayValue('anios',vl_anio)+'</p>'+
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

/**
 * Handle changed data, return false if the value should not be accepted.
 * JSEvent.data will contain extra information about dataproviderid, its scope and the scope id (record datasource or form/global variable scope)
 *
 * @param oldValue
 * @param newValue
 * @param {JSEvent} event
 *
 * @return {boolean}
 *
 * @properties={typeid:24,uuid:"1D09FF8E-079E-4F75-B9C5-5A0FDEB4CBFF"}
 */
function onDataChangeTipoImpuesto(oldValue, newValue, event) 
{
	scopes.impuestos.vg_tipo_impuesto_id = vl_tipo_imp_id	
	vl_aplica_id	= null
	return true;
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"081C9D92-38D5-4457-BA84-BC30A764B991"}
 */
function onActionTotalProvincias(event) 
{
	if(foundset.getSize()>0)
	{	
		forms.impuestos_lg_totales_percepciones.elements.lbl_titulo.text = application.getValueListDisplayValue('imp_tipo_percepcion',tipo_imp_id)//pp_comprobantes_impuestos_to_imp_tipo_impuestos.tipo_imp_descripcion
		forms.impuestos_lg_totales_percepciones.vl_tipo_imp_id = vl_tipo_imp_id
		forms.impuestos_lg_totales_percepciones.vl_fec_desde = vl_fec_desde
		forms.impuestos_lg_totales_percepciones.vl_fec_hasta = vl_fec_hasta
	
		var w6 = application.createWindow("percepcion_tot", JSWindow.MODAL_DIALOG);
		w6.title=scopes.globals.vg_titulo_popup_dialog
		forms.impuestos_lg_totales_percepciones.controller.show(w6)
	}
	else
	{
		scopes.globals.VentanaGenerica(scopes.globals.mx_usuario_id,scopes.globals.vg_titulo_popup_dialog, 'No existen datos para mostrar con los parámetros ingresados.', 'info',controller.getName(),null, null, null, null,null,null,null,null)
	}
}
