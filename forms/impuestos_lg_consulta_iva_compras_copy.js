/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"5132552E-0880-477D-B9E1-8BA1E2194B34",variableType:8}
 */
var vl_tot_percep_iva = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"F06A177A-02B3-4D66-B5BA-862D73B4ABAA",variableType:8}
 */
var vl_tot_percep = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"EB37458C-57DF-4C86-B255-21A4B02ADADF",variableType:8}
 */
var vl_tot_ret_gan = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F3988493-39FB-4D82-A573-7F519118F047"}
 */
var vl_comprobante = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"746407C2-16F8-4EAE-8EA7-BB6D7ED20198",variableType:4}
 */
var vl_mes = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"2F1BED2F-4D3D-481F-918D-945C8F2E2590",variableType:8}
 */
var vl_tot_exento = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"77999C79-749B-466C-9EF9-C9BE4A7AC02F",variableType:8}
 */
var vl_tot_iva_noinsc = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"582C5DC7-4F55-4196-8926-127A250D39A0",variableType:8}
 */
var vl_tot_noinsc = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"5A0AB8FF-4DE6-4B9C-B358-472018B426C2",variableType:8}
 */
var vl_tot_nogr = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"7DAD7EC4-6266-4EC4-BCA5-78C4066B3B58",variableType:4}
 */
var vl_anio = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"F7BFB55A-9AAD-4487-A8C7-A186D67D14D8",variableType:8}
 */
var vl_tot_ret_varias = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"96845B67-FFAD-431A-BDDB-19242A785EA6",variableType:8}
 */
var vl_tot_ret_iva = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"4029AA4A-9D7E-4C54-8125-AA541E9D1636",variableType:8}
 */
var vl_tot_ret_ib = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"EAEA5434-0F89-4E45-8A45-3F149A282CB6",variableType:8}
 */
var vl_tot_iva = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"7574EBAD-0918-4E04-857C-98956D65B122",variableType:8}
 */
var vl_tot_sb = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D70FF73A-DFD5-4AE7-B560-46ADED88FA0D",variableType:8}
 */
var vl_tot_to = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"BFD27FF0-7BDA-4587-9E6F-0C8EFA07102C",variableType:93}
 */
var vl_fec_hasta = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"DACFB9EE-4F70-4D2A-9B63-1378D7674674",variableType:93}
 */
var vl_fec_desde = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"00F44BAC-DAF1-4169-B644-EAB10FFAE343",variableType:4}
 */
var vl_proveedor = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"EE9BE7A2-FD30-4BDE-80CF-2722CB36C24B",variableType:4}
 */
var vl_codigo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"594D3D2B-29D9-4D5C-88D9-F6664A94D846",variableType:8}
 */
var vl_cantidad = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"08B4A8DE-44D4-4F04-B7BF-88FD2519D796"}
 */
var vl_estado = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7929757D-7849-43DC-90AC-254AAE894221"}
 */
var vl_nombre = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8BAB6DC6-8D26-4274-8295-B73F508550FF"}
 */
function onActionDetalle(event) 
{
	forms.proveedores_lg_comprobante_nuevo.vl_form = controller.getName()
	forms.proveedores_lg_comprobante_nuevo.elements.lbl_titulo.text = "Detalle del comprobante N° " + calc_numero
	forms.proveedores_lg_comprobante_nuevo.controller.loadRecords(comp_id)
	scopes.globals.vg_cod_compro = comp_cod
	var w3 = application.createWindow("comprobante", JSWindow.MODAL_DIALOG);
	w3.title=scopes.globals.vg_titulo_popup_dialog
	forms.proveedores_lg_comprobante_nuevo.controller.show(w3);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"13AAE01D-6F22-47B4-B690-78DBE60C71F3"}
 */
function onActionVolver(event) 
{
	scopes.globals.VolverGenerico()
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"598DD542-40DC-4EA4-8068-251609253771"}
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
 * @properties={typeid:24,uuid:"2E945192-3F17-4091-91BF-270983DDAE75"}
 */
function onCellDoubleClick(foundsetindex, columnindex, record, event, columnid) 
{
	onActionDetalle(event)
}

/**
 *
 * @properties={typeid:24,uuid:"42C0D8D1-7537-4785-A4F6-A5FC0C9DEF1A"}
 * @AllowToRunInFind
 */
function onActionFiltrar() 
{
	scopes.globals.PantallaWait()

	controller.find()
	comp_fecha =utils.dateFormat(vl_fec_desde,'dd/MM/yyyy')+'...'+utils.dateFormat(vl_fec_hasta,'dd/MM/yyyy')
	if(vl_proveedor!=null) provee_id=vl_proveedor
	if(vl_mes!=null) comp_imputacion_mes=vl_mes
	if(vl_anio!=null) comp_imputacion_anio=vl_anio
	pp_comprobantes_enc_to_lg_talonarios.talonario_libro_iva = 1
	//if(vl_comprobante!=null)tipo_dgi='='+vl_comprobante
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
 * @properties={typeid:24,uuid:"37E10258-D0DA-472A-B292-23B44F38FF61"}
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
		
//		vl_fec_desde = new Date(vl_anio,vl_mes-1,1)
//		vl_fec_hasta = new Date(vl_anio,vl_mes-1,scopes.globals.ultimoDiaMes(vl_mes,vl_anio))
	}
	
	onActionFiltrar()
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"99C54649-618F-4B31-B2CD-E6A3D8E758C5"}
 */
function onActionRefrescar(event) 
{
	vl_codigo  	   = null
	vl_nombre  	   = null
	vl_proveedor   = null
	vl_estado  	   = null
	vl_mes	   	   = null
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
 * @properties={typeid:24,uuid:"74298F25-773E-4862-8724-89A92EE0FCD7"}
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
 * @properties={typeid:24,uuid:"7FF1DBD0-BD96-4F7D-A213-66668C8A3676"}
 */
function onActionImprimir()
{	
	var tmp_mes = application.getValueListDisplayValue('meses',comp_imputacion_mes)
	var tmp_idioma = "es_AR"
	plugins.jasperPluginRMI.runReport(foundset,'imp_libro_iva_compra.jasper' ,null,plugins.jasperPluginRMI.OUTPUT_FORMAT.VIEW,{pempresa:scopes.globals.ag_empresavigente.emp_nombre,panio:comp_imputacion_anio,pmes:tmp_mes},tmp_idioma)

}

/**
 *
 * @properties={typeid:24,uuid:"2CD89A71-0D3C-42B3-AA34-4A962687A456"}
 */
function onActionEmail() 
{
//	try 
//	{
//		if(cod_estado!="ANU")
//		{
//			if(!scopes.globals.EMPTY(vc13_to_vc01.email_cli))
//			{	
//				scopes.globals.vg_destinatarios = vc13_to_vc01.email_cli.trim()
//				var tmphtml="Estimado cliente, le enviamos el comprobante."
//			
//				scopes.globals.vg_cuerpo = "<html>"+tmphtml+"</html>"
//				
//				var tmp_entidad_informes = plugins.file.getDefaultUploadLocation()+'//Comprobantes//'
//				
//				var pcod_comp= cod_comp
//				
//				if(pcod_comp!="FAC")
//				{	
//					if(vc13_to_vc08.debe_haber=="H")
//					{
//						pcod_comp = "CRE"
//					}
//					else
//					{
//						pcod_comp = "DEB"
//					}
//				}
//				
//				
//				var _name=pcod_comp+'_'+utils.stringMiddle(nro_fac,1,13)
//				
//				var _file_name = _name
//				
//				
//				/** @type {plugins.file.JSFile}*/
//				var file = plugins.file.convertToJSFile(tmp_entidad_informes+_file_name+'.pdf');
//				if (!file.exists())
//				{
//					scopes.globals.GeneraArchivoPDF(cod_comp,talon_fac,nro_fac)
//				}
//				
//				scopes.globals.vg_asunto = "Comprobante N° "+_file_name
//				var data = plugins.file.readFile(file);
//				
//	//			if(!scopes.globals.EMPTY(fs_datos.encripta_pdf_informes))
//	//			{
//	//				//data = plugins.pdf_output.encrypt(data,"1234")
//	//				data = plugins.pdf_output.encrypt(data, '1234', '1234567', false, false, false, false, false, false, false, false, true);
//	//			}
//				
//				scopes.globals.vg_adjuntos = plugins.mail.createBinaryAttachment(_file_name,data)
//				forms.lg_mail.vl_adjunto = _file_name+".pdf"
//				
//				var win1 = application.createWindow("Email", JSWindow.MODAL_DIALOG);
//				win1.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
//				win1.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
//				win1.resizable = false
//				win1.title= scopes.globals.vg_titulo_popup_dialog
//				win1.show(forms.lg_mail);
//			}
//			else
//			{
//				globals.VentanaGenerica(scopes.globals.mx_usuario_id,scopes.globals.vg_titulo_popup_dialog,'El cliente no tiene cargado el email.', 'info',controller.getName(),null,null,null,null,null,null,null,null)
//			}
//		}
//		else
//		{
//			globals.VentanaGenerica(scopes.globals.mx_usuario_id,scopes.globals.vg_titulo_popup_dialog,'Comprobante anulado. No puede enviarse.', 'info',controller.getName(),null,null,null,null,null,null,null,null)
//		}
//	} 
//	catch (e) 
//	{
//		globals.VentanaGenerica(scopes.globals.mx_usuario_id,scopes.globals.vg_titulo_popup_dialog,e, 'error',controller.getName(),null,null,null,null,null,null,null,null)
//	}
}

/**
 * @properties={typeid:24,uuid:"B70D2992-5D21-441B-B408-F75E82A653F6"}
 * @AllowToRunInFind
 */
function Procesar()
{
//	var fs_facte = datasources.db.sistemas.vc_fact_enc.getFoundSet()
//	
//	for (var i = 1; i <= foundset.getSize(); i++) 
//	{
//		var record = foundset.getRecord(i);
//	
//		fs_facte.find()
//		fs_facte.facte_cod_comp  = record.cod_comp
//		fs_facte.facte_talonario = record.cod_comp
//		fs_facte.search()
//	}
	
}

/**
 * @properties={typeid:24,uuid:"7CEB5B73-6281-44ED-8702-7B5323D24863"}
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
 * @param oldValue
 * @param newValue
 * @param {JSEvent} event
 *
 * @return {boolean}
 *
 * @properties={typeid:24,uuid:"9BC98216-AF8A-417E-BA34-E4297AAD534C"}
 */
function onDataChangeMes(oldValue, newValue, event) 
{
	if(!scopes.globals.EMPTY(vl_mes))
	{
		//vl_fec_desde = new Date(vl_anio,vl_mes-1,1)
		//vl_fec_hasta = new Date(vl_anio,vl_mes-1,scopes.globals.ultimoDiaMes(vl_mes,vl_anio))
		onActionFiltrar()
	}
	
	
	return true;
}

/**
 *
 * @properties={typeid:24,uuid:"9F355736-52A9-4EB9-A492-281DFC47B574"}
 * @AllowToRunInFind
 */
function onActionDescargar() 
{
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
							tmp_alicuotas++
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
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"B5BF3EFC-4339-4C00-A4E3-B7A2AE74B3AF"}
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
 * TODO generated, please specify type and doc for the params
 * @param {String} ptipoafip
 * @param {String} pletra
 * @return {String}
 *
 * @properties={typeid:24,uuid:"CBBE7020-CBDF-4DE4-B60E-FC065D22C403"}
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
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"86C90D2E-79ED-419E-8E94-9EC7EF4EF6EE"}
 */
function onActionTotalesxAlicuotas(event) 
{
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
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"67B98879-4E9D-4DA7-97E9-44A803A6717B"}
 */
function onActionTotalesxCategorias(event) 
{
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
