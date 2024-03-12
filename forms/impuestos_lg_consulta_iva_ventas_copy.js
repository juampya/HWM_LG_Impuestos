/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"0877AFBA-356D-4571-AEE3-1BA3F41980E1"}
 */
var vl_comprobante = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"31CB584E-6345-4E1F-9D25-FBEB99E916C1",variableType:4}
 */
var vl_mes = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"99BEE161-29E7-4CF4-A90E-7E3214CD9BCD",variableType:8}
 */
var vl_tot_exento = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"2CC40501-2AD8-45D4-8341-B0E360C52DAF",variableType:8}
 */
var vl_tot_iva_noinsc = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"35CBC89E-7181-4377-92DD-CA2574FB2F55",variableType:8}
 */
var vl_tot_noinsc = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"1ACCEB63-0371-4AA4-8BF1-19D123704FEC",variableType:8}
 */
var vl_tot_nogr = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"7F96809C-F2AC-4C62-B622-099BD7E3465D",variableType:4}
 */
var vl_anio = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"82280A88-D863-44FD-9E02-E1AA6D4DC94D",variableType:8}
 */
var vl_tot_per_varias = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"20842E07-2510-46D2-B918-566FD0C96CBE",variableType:8}
 */
var vl_tot_per_iva = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"1666FD6F-4277-4C66-B48C-E419652D4ED8",variableType:8}
 */
var vl_tot_per_ib = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"3A26081F-34BD-4E0D-B0D5-1D9CAA6655CB",variableType:8}
 */
var vl_tot_iva = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"AC78A3DD-53C6-4E68-98D2-408EBB458F64",variableType:8}
 */
var vl_tot_sb = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"8D596EDF-E339-44F1-89DC-582EF9798F3E",variableType:8}
 */
var vl_tot_to = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"C1432D34-B09E-464A-A437-86918EBD01A5",variableType:93}
 */
var vl_fec_hasta = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"12802F1F-603B-403F-AFF6-47DDAB2B044D",variableType:93}
 */
var vl_fec_desde = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"5A80784D-9F54-4EAC-BD42-4EDB25EC55F7",variableType:4}
 */
var vl_cliente = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"6F2E01E0-5738-430E-836E-1CB1889C37FD",variableType:4}
 */
var vl_codigo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"132B1F22-3227-4A73-9EAF-872FD959DD7D",variableType:8}
 */
var vl_cantidad = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"80A4495D-31C9-4022-AC27-35BFE1D25C0B"}
 */
var vl_estado = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B1C33EC4-8FFA-460C-BBA0-511ACA514EF4"}
 */
var vl_nombre = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"48F6FD52-05EB-4D9F-A409-EDC8ED8B4713"}
 */
function onActionDetalle(event) 
{
	forms.ventas_lg_comprobante_nuevo.vl_form = controller.getName()
	forms.ventas_lg_comprobante_nuevo.elements.lbl_titulo.text = "Detalle del comprobante N° " + calc_numero
	forms.ventas_lg_comprobante_nuevo.controller.loadRecords(facte_id)
	scopes.globals.vg_cod_compro = facte_cod_comp
	var w3 = application.createWindow("comprobante", JSWindow.MODAL_DIALOG);
	w3.title=scopes.globals.vg_titulo_popup_dialog
	forms.ventas_lg_comprobante_nuevo.controller.show(w3);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1C124952-BFEE-4E4E-91D4-8AFDB063CF37"}
 */
function onActionVolver(event) 
{
	scopes.globals.VolverGenerico()
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"B85FA75E-5354-4050-B18C-063323FD7397"}
 */
function onActionAgregar(event) 
{
//	forms.ventas_lg_clientes_detalle.elements.lbl_titulo.text = "Nuevo cliente"
//	forms.ventas_lg_clientes_detalle.vl_nuevo=1
//	var w3 = application.createWindow("mydialog", JSWindow.MODAL_DIALOG);
//	w3.title=scopes.globals.vg_titulo_popup_dialog
//	forms.ventas_lg_clientes_detalle.controller.show(w3);

	globals.VentanaGenerica(scopes.globals.mx_usuario_id,'Información', 'Opción sin implementar', 'info', controller.getName(), null, null,null,null,null,null,null,null)
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
 * @properties={typeid:24,uuid:"DFBC8B87-625A-49AE-9ACE-B60F90B662A3"}
 */
function onCellDoubleClick(foundsetindex, columnindex, record, event, columnid) 
{
	onActionDetalle(event)
}

/**
 *
 * @properties={typeid:24,uuid:"54926116-3CFE-43FE-95C0-2E15CADFDBC8"}
 * @AllowToRunInFind
 */
function onActionFiltrar() 
{
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
 * @properties={typeid:24,uuid:"CB902BCD-208E-4C40-8981-56A3CAABCEFA"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) 
{
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
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"59E1391C-EE36-4BF2-8331-32808188A227"}
 */
function onActionRefrescar(event) 
{
	vl_codigo  = null
	vl_nombre  = null
	vl_cliente = null
	vl_estado  = null
	vl_mes	   = null
	vl_comprobante = null
	
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
 * @properties={typeid:24,uuid:"AF4E243A-A4F6-4BB4-A177-830DA0BEAE4B"}
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
 * @properties={typeid:24,uuid:"6EF3A557-6C43-4086-8DC4-93142A7D4372"}
 */
function onActionImprimir()
{
	var tmp_mes = application.getValueListDisplayValue('meses',facte_imputacion_mes)
	var tmp_idioma = "es_AR"
	plugins.jasperPluginRMI.runReport(foundset,'imp_libro_iva_venta.jasper' ,null,plugins.jasperPluginRMI.OUTPUT_FORMAT.VIEW,{pempresa:scopes.globals.ag_empresavigente.emp_nombre,panio:facte_imputacion_anio,pmes:tmp_mes},tmp_idioma)
}

/**
 *
 * @properties={typeid:24,uuid:"C71A4C09-2AB7-40EE-80C2-2A4336D1A2F2"}
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
			
			tmp_cantalic = utils.numberFormat(tmp_alicuotas,'0')
			
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
 * TODO generated, please specify type and doc for the params
 * @param {String} ptipoafip
 * @param {String} pletra
 * @return {String}
 * @properties={typeid:24,uuid:"28408616-C6F2-4FF2-9DBD-71E2E9727FDF"}
 */
function TipoComp(ptipoafip,pletra)
{
	var tmp_return = '099'
	// Codifica segun DGI **
	switch (ptipoafip) 
	{
		case 'FAC':
			switch (pletra) 
			{
				case 'A':
					tmp_return = '001'
				break;
				case 'B':
					tmp_return = '006'
				break;
				case 'C':
					tmp_return = '011'
				break;
				default:
					tmp_return = '099'
				break;
			}
		break;
	
		case 'N/C':
			switch (pletra) 
			{
				case 'A':
					tmp_return = '003'
				break;
				case 'B':
					tmp_return = '008'
				break;
				case 'C':
					tmp_return = '013'
				break;
				default:
					tmp_return = '099'
				break;
			}
		break;	
		case 'N/D':
			switch (pletra) 
			{
				case 'A':
					tmp_return = '002'
				break;
				case 'B':
					tmp_return = '007'
				break;
				case 'C':
					tmp_return = '012'
				break;
				default:
					tmp_return = '099'
				break;
			}
		break;
		case 'REC':
			switch (pletra) 
			{
				case 'A':
					tmp_return = '004'
				break;
				case 'B':
					tmp_return = '009'
				break;
				case 'C':
					tmp_return = '015'
				break;
				default:
					tmp_return = '099'
				break;
			}
		break;		
		case 'D/A':
			tmp_return='014'
		break;			
		case 'ORG':
			switch (pletra) 
			{
				case 'A':
					tmp_return = '039'
				break;
				case 'B':
					tmp_return = '040'
				break;
				case 'C':
					tmp_return = '041'
				break;
				case 'M':
					tmp_return = '057'
				break;	
				default:
					tmp_return = '099'
				break;
			}
		break;	
		case 'ONR':
			tmp_return='099'
		break;		
		default:
			tmp_return = '099'
		break;
	}
	return tmp_return
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"F0746E21-816A-40D8-B5FB-68C00A393739"}
 */
function onActionTotalesxAlicuotas(event) 
{
	forms.impuestos_lg_totales_alicuotas.vl_cliente = vl_cliente
	forms.impuestos_lg_totales_alicuotas.vl_mes = vl_mes
	forms.impuestos_lg_totales_alicuotas.vl_anio = vl_anio
	forms.impuestos_lg_totales_alicuotas.vl_fec_desde = vl_fec_desde
	forms.impuestos_lg_totales_alicuotas.vl_fec_hasta = vl_fec_hasta
	forms.impuestos_lg_totales_alicuotas.vl_tipo = 0
	
	//forms.impuestos_lg_totales_alicuotas.elements.lbl_titulo.text = "Totales por alícuotas"

	var w3 = application.createWindow("totales_x_alicuotas", JSWindow.MODAL_DIALOG);
	w3.title=scopes.globals.vg_titulo_popup_dialog
	forms.impuestos_lg_totales_alicuotas.controller.show(w3);

}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"38C7C0BB-21CB-4B3F-B9E9-9C648DDDD78A"}
 */
function onActionTotalesxCategorias(event) 
{
	forms.impuestos_lg_totales_categorias.vl_cliente = vl_cliente
	forms.impuestos_lg_totales_categorias.vl_mes = vl_mes
	forms.impuestos_lg_totales_categorias.vl_anio = vl_anio
	forms.impuestos_lg_totales_categorias.vl_fec_desde = vl_fec_desde
	forms.impuestos_lg_totales_categorias.vl_fec_hasta = vl_fec_hasta
	forms.impuestos_lg_totales_categorias.vl_tipo = 0
	
	//forms.impuestos_lg_totales_alicuotas.elements.lbl_titulo.text = "Totales por alícuotas"

	var w3 = application.createWindow("totales_x_categorias", JSWindow.MODAL_DIALOG);
	w3.title=scopes.globals.vg_titulo_popup_dialog
	forms.impuestos_lg_totales_categorias.controller.show(w3);

}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"10F7530E-099B-4571-947C-C80151AE3A67"}
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
