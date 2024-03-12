/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"8B08DBF0-A816-4410-93A1-1F6B133A959A",variableType:4}
 */
var vl_provincia = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"9FE927FF-D9D5-428D-88E6-9C1E3DC82A86",variableType:4}
 */
var vl_mes = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"BD3B675F-A538-469B-831A-9FCB91C6815A",variableType:4}
 */
var vl_anio = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"38C52D89-7067-46C9-8501-0515AB6A73B3"}
 */
var vl_comprobante = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"6D479E33-D799-4264-846B-55F68D706103",variableType:4}
 */
var vl_tipo_imp_id = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"D8D62550-0544-4D04-8993-623C36EC645A",variableType:93}
 */
var vl_fec_hasta = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"2C50325A-39AB-4484-93A7-3C58ECD617BE",variableType:93}
 */
var vl_fec_desde = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B17D2A95-EFBB-4FAC-9A51-85FD9121A5CB",variableType:4}
 */
var vl_proveedor = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"5C9195AB-CFCE-4792-A723-3D8B236D9CB3",variableType:4}
 */
var vl_aplica_id = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"2C88E782-07F5-4DBC-8B65-957CEF02D8EC"}
 */
var vl_nombre = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"87B9E465-E335-4893-8C0D-4ADEFC802CDC"}
 */
function onActionDetalle(event) 
{
	switch (tipo_imp_id) 
	{
		case 1:
			forms.impuestos_lg_detalle_retencion_ibr.elements.lbl_titulo.text = "Retencion " + calc_comprobante + " - (" + utils.dateFormat(pp_impu_fecha,'dd/MM/yyyy') + ")"
			var w2 = application.createWindow("retencion_ibr", JSWindow.MODAL_DIALOG);
			w2.title=scopes.globals.vg_titulo_popup_dialog
			forms.impuestos_lg_detalle_retencion_ibr.controller.show(w2)
		break;			
		case 2:
			if(scopes.globals.EMPTY(escala_id))
			{
				forms.impuestos_lg_detalle_retencion_gan.elements.lbl_titulo.text = "Retencion " + calc_comprobante + " - (" + utils.dateFormat(pp_impu_fecha,'dd/MM/yyyy') + ")"
				var w3 = application.createWindow("retencion_gan", JSWindow.MODAL_DIALOG);
				w3.title=scopes.globals.vg_titulo_popup_dialog
				forms.impuestos_lg_detalle_retencion_gan.controller.show(w3)
			}
			else
			{
				forms.impuestos_lg_detalle_retencion_gan_escala.elements.lbl_titulo.text = "Retencion " + calc_comprobante + " - (" + utils.dateFormat(pp_impu_fecha,'dd/MM/yyyy') + ")"
				var w4 = application.createWindow("retencion_gan_escala", JSWindow.MODAL_DIALOG);
				w4.title=scopes.globals.vg_titulo_popup_dialog
				forms.impuestos_lg_detalle_retencion_gan_escala.controller.show(w4)
			}
		break;				
		case 3:
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
 * @properties={typeid:24,uuid:"2589270F-048B-40FC-9368-C067E83EF6C9"}
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
 * @properties={typeid:24,uuid:"9B374772-91DC-4F2A-AB8D-251277C80896"}
 */
function onCellDoubleClick(foundsetindex, columnindex, record, event, columnid) 
{
	onActionDetalle(event)
}

/**
 *
 * @properties={typeid:24,uuid:"A9CAB026-20D3-48B9-AED3-4367E022FD32"}
 * @AllowToRunInFind
 */
function onActionFiltrar() 
{
//	if(vl_tipo_imp_id!=null) tipo_imp_id=vl_tipo_imp_id
	
	
	scopes.globals.PantallaWait()

	controller.find()
	pp_impu_fecha =utils.dateFormat(vl_fec_desde,'dd/MM/yyyy')+'...'+utils.dateFormat(vl_fec_hasta,'dd/MM/yyyy')
	//pp_comprobantes_impuestos_to_pp_comprobantes_enc.comp_fecha =utils.dateFormat(vl_fec_desde,'dd/MM/yyyy')+'...'+utils.dateFormat(vl_fec_hasta,'dd/MM/yyyy')
	if(vl_proveedor!=null) pp_comprobantes_impuestos_to_pp_comprobantes_enc.provee_id=vl_proveedor
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
 * @properties={typeid:24,uuid:"6E4A7646-62A2-41B5-9024-95C2BF7ECDD6"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) 
{
	if(firstShow)
	{
		var fs_tipo_impuestos = datasources.db.sistemas.imp_tipo_impuestos.getFoundSet()
		fs_tipo_impuestos.find()
		fs_tipo_impuestos.emp_id = scopes.globals.mx_empresa_id
		fs_tipo_impuestos.tipo_imp_categoria = 2
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
 * @properties={typeid:24,uuid:"A05A7DF5-AF20-4386-B937-00ADD1D25679"}
 * @AllowToRunInFind
 */
function onActionRefrescar(event) 
{
	
	var fs_tipo_impuestos = datasources.db.sistemas.imp_tipo_impuestos.getFoundSet()
	fs_tipo_impuestos.find()
	fs_tipo_impuestos.emp_id = scopes.globals.mx_empresa_id
	fs_tipo_impuestos.tipo_imp_categoria = 2
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
 * @properties={typeid:24,uuid:"29B3EE61-2858-4A11-B641-8A129037DBDE"}
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
 * @properties={typeid:24,uuid:"D012A605-0CDB-457C-9344-A726F0E05A2D"}
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
	
	plugins.jasperPluginRMI.runReport(foundset,'imp_retenciones.jasper',null,plugins.jasperPluginRMI.OUTPUT_FORMAT.VIEW,{pfecha_desde:vl_fec_desde,pfecha_hasta:vl_fec_hasta,pproveedor:tmp_provee,pimpuesto:tmp_impues,paplica:tmp_aplica})

}


/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"987DCED3-09F0-4571-8B55-CC99B01B45EF"}
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
 * @properties={typeid:24,uuid:"B00209B9-262E-470E-9CD1-788B0C9AF57B"}
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
	
	plugins.jasperPluginRMI.runReport(foundset,'imp_retenciones_detallada.jasper',null,plugins.jasperPluginRMI.OUTPUT_FORMAT.VIEW,{pfecha_desde:vl_fec_desde,pfecha_hasta:vl_fec_hasta,pproveedor:tmp_provee,pimpuesto:tmp_impues,paplica:tmp_aplica})

}


/**
 * @properties={typeid:24,uuid:"D3F31F32-EE62-4CBF-BBA3-2CB6BEDC601A"}
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
 * @properties={typeid:24,uuid:"F4751A24-2AAB-4FE5-B4A5-3A23524923AE"}
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

	
	if(vl_tipo_imp_id!=2)
	{
		scopes.globals.VentanaGenerica(scopes.globals.mx_usuario_id,scopes.globals.vg_titulo_popup_dialog,'Solo puedo Generar RETENCIÓN GANANCIAS.','warning',controller.getName(),'OK',null,null,null,null,null,null,null)
		return 
	}
	
	descargarRetencionGanancias() 
}


/**
 *
 * @properties={typeid:24,uuid:"4F84E9A5-039C-4966-BEB4-A813D109948B"}
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
 * @properties={typeid:24,uuid:"C8D7E49F-4C3A-40F3-86C9-0EEAFDBF97C1"}
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
			ds2.addColumn("Comprobante",6)
			ds2.addColumn("Codigo",7)
			ds2.addColumn("Proveedor",8)
			ds2.addColumn("Importe",9)
			ds2.addColumn("Base Imponible",10)
			ds2.addColumn("Alicuota",11)			
			ds2.addColumn("Provincia",12)
			ds2.addColumn("Aplicado",13)		
			ds2.addColumn("Sucursal",14)		
		
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
			array_datos.push(record.pp_impu_nro)
			array_datos.push(record.pp_comprobantes_impuestos_to_pp_comprobantes_enc.pp_comprobantes_enc_to_pp_proveedores.provee_codigo)
			array_datos.push(record.pp_comprobantes_impuestos_to_pp_comprobantes_enc.pp_comprobantes_enc_to_pp_proveedores.provee_nombre)
			array_datos.push(utils.numberFormat(record.pp_impu_importe,'#,##0.00'))
			array_datos.push(utils.numberFormat(record.pp_impu_base_imponible,'#,##0.00'))
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
			array_datos.push(record.pp_comprobantes_impuestos_to_pp_comprobantes_enc.calc_numero)		
			array_datos.push(application.getValueListDisplayValue('sucursal_empresa',record.suc_id))

			ds2.addRow(array_datos)
		}	
		
		var tmp = '<h1 style="text-align: left;"><em><span style="text-decoration: underline;">'+scopes.globals.ag_empresavigente.emp_nombre+'</span></em></h1>'+
		'<h2></h2>'+
		'<p>Libro de Percepciones - Retenciones</p>'+
		'<p>Periodo: '+application.getValueListDisplayValue('meses',vl_mes)+'/'+application.getValueListDisplayValue('anios',vl_anio)+'</p>'+
		'<p></p>'
		
		//var htm = '<html><caption align="bottom">Encabezado de la tabla.</caption><caption align="bottom">Encabezado de la tabla.</caption>'+ ds2.getAsHTML(true, true, false, true, true);+'</html>'
	
		var htm = '<html>'+tmp+ ds2.getAsHTML(false, false, false, true, true);+'</html>'
		
		/**@type {String} */
		var fileName = 'Libro_de_retenciones_percepciones.xls'
		
		
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
 * @properties={typeid:24,uuid:"47D01289-FA7D-4960-9231-8612DF424C37"}
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
 * @properties={typeid:24,uuid:"2C830069-A0E4-4055-8B6C-E815B4AF6D15"}
 */
function onActionTotalProvincias(event) 
{
	if(foundset.getSize()>0)
	{	
		forms.impuestos_lg_totales_retenciones.elements.lbl_titulo.text = pp_comprobantes_impuestos_to_imp_tipo_impuestos.tipo_imp_descripcion
		forms.impuestos_lg_totales_retenciones.vl_tipo_imp_id = vl_tipo_imp_id
		forms.impuestos_lg_totales_retenciones.vl_fec_desde = vl_fec_desde
		forms.impuestos_lg_totales_retenciones.vl_fec_hasta = vl_fec_hasta
	
		var w6 = application.createWindow("retencion_tot", JSWindow.MODAL_DIALOG);
		w6.title=scopes.globals.vg_titulo_popup_dialog
		forms.impuestos_lg_totales_retenciones.controller.show(w6)
	}
	else
	{
		scopes.globals.VentanaGenerica(scopes.globals.mx_usuario_id,scopes.globals.vg_titulo_popup_dialog, 'No existen datos para mostrar con los parámetros ingresados.', 'info',controller.getName(),null, null, null, null,null,null,null,null)
	}
}
	