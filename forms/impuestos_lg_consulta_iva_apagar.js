/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"0FD68E6B-1CFD-4559-AC37-3D34ED9FAB9A",variableType:8}
 */
var vl_total_apagar = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"69CDE7F6-49EA-4551-AAB9-06654610A5DD"}
 */
var vl_vc_tot_percep_ib = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"BF7CF79B-1930-4CA4-9FFE-862C0E8740C1",variableType:8}
 */
var vl_vc_tot_percep_iva = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"83794230-3643-4999-8FFF-8391E33EDC3F",variableType:8}
 */
var vl_vc_tot_percep_varias = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"82A9A35E-9534-4BB7-82B5-607DA074A608",variableType:8}
 */
var vl_vc_tot_total = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"DA3827B7-2583-4E9C-9E5F-2D6FA404D516",variableType:8}
 */
var vl_vc_tot_ex = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"37CE717D-1C49-4E2A-8D23-3B863530637F",variableType:8}
 */
var vl_vc_tot_iva = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"960FA75A-1D78-4DA1-9A9A-ED1C696B3B67",variableType:8}
 */
var vl_vc_tot_sb = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"83C8DCC1-ABE0-430A-9651-7E07733BEFC5",variableType:8}
 */
var vl_pp_tot_ex = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"DF5EDE5D-44D8-45C9-94F8-B078BC2DC231",variableType:8}
 */
var vl_pp_tot_total = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"679C56D4-E88F-43E3-94E1-94E3936ED041",variableType:8}
 */
var vl_pp_tot_ii = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"2DF51ACB-3BD2-4F9A-BBE3-9B2CE63F42BD",variableType:8}
 */
var vl_pp_tot_percep_varias = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C1668262-8094-48E6-AABC-62522CCED71A",variableType:8}
 */
var vl_pp_tot_percep_ib = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"4DED8D7F-7DAC-41A2-8ACE-5D41E73D31FD",variableType:8}
 */
var vl_pp_tot_percep_iva = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"5D458303-1799-4B5A-84D0-1FEF3C5EF7DE",variableType:8}
 */
var vl_pp_tot_nogr = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"5A70947D-1D13-4C26-8940-437F04A4399D",variableType:8}
 */
var vl_pp_tot_iva = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"11863F49-7D17-4280-AEAB-3620E240F723",variableType:8}
 */
var vl_pp_tot_sb = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"23A4B3C3-DA67-46F3-82A0-0949BCA5CCCA",variableType:4}
 */
var vl_mes = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"AC9E3FC1-B2C1-4DE5-8E79-3834AD6C6FB1",variableType:4}
 */
var vl_anio = null;

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"9F448803-A98D-4F41-81E9-A4C6FC3BC6C3"}
 */
function onActionCerrar(event) 
{
	databaseManager.revertEditedRecords()
	application.getWindow('ivaapagar').hide()
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"E38574EC-210C-4FC2-8E86-310797B17C8E"}
 */
function onActionConsultar(event) 
{
	vl_pp_tot_ex 			= 0
	vl_pp_tot_sb 			= 0
	vl_pp_tot_ii 			= 0
	vl_pp_tot_iva 			= 0
	vl_pp_tot_nogr 			= 0
	vl_pp_tot_percep_ib 	= 0
	vl_pp_tot_percep_iva 	= 0
	vl_pp_tot_percep_varias = 0
	vl_pp_tot_total 		= 0
	
	vl_vc_tot_ex 			= 0
	vl_vc_tot_sb 			= 0
	vl_vc_tot_iva 			= 0
	vl_vc_tot_percep_ib 	= 0
	vl_vc_tot_percep_iva 	= 0
	vl_vc_tot_percep_varias = 0
	vl_vc_tot_total 		= 0
	
	vl_total_apagar			= 0
	
	scopes.globals.PantallaWait()
	
	IVA_Compras()
	IVA_Ventas()
	
	vl_total_apagar = vl_vc_tot_iva - vl_pp_tot_iva
	
	scopes.globals.CerrarPantallaWait()
}

/**
 * @properties={typeid:24,uuid:"D9BD09DA-948B-4CF6-B490-9C0DF2816168"}
 * @AllowToRunInFind
 */
function IVA_Compras()
{
	var fs_pp_comprobantes_enc = datasources.db.sistemas.pp_comprobantes_enc.getFoundSet()
	
	fs_pp_comprobantes_enc.find()
	if(vl_mes!=null) fs_pp_comprobantes_enc.comp_imputacion_mes=vl_mes
	if(vl_anio!=null) fs_pp_comprobantes_enc.comp_imputacion_anio=vl_anio
	fs_pp_comprobantes_enc.pp_comprobantes_enc_to_lg_talonarios.talonario_libro_iva = 1
	var tmp_cant = fs_pp_comprobantes_enc.search() 

	for (var i = 1; i <= tmp_cant; i++) 
	{
		var record = fs_pp_comprobantes_enc.getRecord(i);
		
		if(record.comp_debe_haber=='H')
		{
			vl_pp_tot_ex 			= vl_pp_tot_ex + record.comp_tot_ex
			vl_pp_tot_sb 			= vl_pp_tot_sb + record.comp_tot_sb
			vl_pp_tot_ii 			= vl_pp_tot_ii + record.comp_tot_ii
			vl_pp_tot_iva 			= vl_pp_tot_iva + record.comp_tot_iv
			vl_pp_tot_nogr 		 	= vl_pp_tot_nogr + record.comp_tot_nogr
			vl_pp_tot_percep_ib 	= vl_pp_tot_percep_ib + record.comp_tot_perc_ib
			vl_pp_tot_percep_iva 	= vl_pp_tot_percep_iva + record.comp_tot_perc_iva
			vl_pp_tot_percep_varias = vl_pp_tot_percep_varias + record.comp_tot_perc_var
			vl_pp_tot_total 		= vl_pp_tot_total + record.comp_tot_to
		}
		else
		{
			vl_pp_tot_ex 			= vl_pp_tot_ex + record.comp_tot_ex*(-1)
			vl_pp_tot_sb 			= vl_pp_tot_sb + record.comp_tot_sb*(-1)
			vl_pp_tot_ii 			= vl_pp_tot_ii + record.comp_tot_ii*(-1)
			vl_pp_tot_iva 			= vl_pp_tot_iva + record.comp_tot_iv*(-1)
			vl_pp_tot_nogr 		 	= vl_pp_tot_nogr + record.comp_tot_nogr*(-1)
			vl_pp_tot_percep_ib 	= vl_pp_tot_percep_ib + record.comp_tot_perc_ib*(-1)
			vl_pp_tot_percep_iva 	= vl_pp_tot_percep_iva + record.comp_tot_perc_iva*(-1)
			vl_pp_tot_percep_varias = vl_pp_tot_percep_varias + record.comp_tot_perc_var*(-1)
			vl_pp_tot_total 		= vl_pp_tot_total + record.comp_tot_to*(-1)
		}
	}
}

/**
 * @properties={typeid:24,uuid:"F13E32CB-EC97-4808-9B0A-7AEA5F374372"}
 * @AllowToRunInFind
 */
function IVA_Ventas()
{
	var fs_vc_fact_enc = datasources.db.sistemas.vc_fact_enc.getFoundSet()
	
//	fs_vc_fact_enc.find()
//	if(vl_mes!=null) fs_vc_fact_enc.facte_imputacion_mes=vl_mes
//	if(vl_anio!=null) fs_vc_fact_enc.facte_imputacion_anio=vl_anio
//	fs_vc_fact_enc.vc_fact_enc_to_lg_talonarios.talonario_libro_iva = 1
//	if(fs_vc_fact_enc.search()>1)
//	{
//		vl_vc_tot_ex 			= fs_vc_fact_enc.aggr_total_ex
//		vl_vc_tot_sb 			= fs_vc_fact_enc.aggr_total_sb
//		vl_vc_tot_iva 			= fs_vc_fact_enc.aggr_total_iva
//		vl_vc_tot_percep_ib 	= fs_vc_fact_enc.aggr_total_percep_ib
//		vl_vc_tot_percep_iva 	= fs_vc_fact_enc.aggr_total_percep_iva
//		vl_vc_tot_percep_varias = fs_vc_fact_enc.aggr_total_percep_varias
//		vl_vc_tot_total 		= fs_vc_fact_enc.aggr_total
//	}

	vl_vc_tot_ex 			= 0
	vl_vc_tot_sb 			= 0
	vl_vc_tot_iva 			= 0
	vl_vc_tot_percep_ib 	= 0
	vl_vc_tot_percep_iva 	= 0
	vl_vc_tot_percep_varias = 0
	vl_vc_tot_total 		= 0
	
	fs_vc_fact_enc.find()
	if(vl_mes!=null) fs_vc_fact_enc.facte_imputacion_mes=vl_mes
	if(vl_anio!=null) fs_vc_fact_enc.facte_imputacion_anio=vl_anio
	fs_vc_fact_enc.vc_fact_enc_to_lg_talonarios.talonario_libro_iva = 1
	fs_vc_fact_enc.search()
	
	var tmp_cant = databaseManager.getFoundSetCount(fs_vc_fact_enc)
	
	for (var index = 1; index <= tmp_cant; index++) 
	{
		var record = fs_vc_fact_enc.getRecord(index);
		
		vl_vc_tot_ex 			= vl_vc_tot_ex+record.facte_tot_ex*record.facte_cotizacion
		vl_vc_tot_sb 			= vl_vc_tot_sb+record.facte_tot_sb*record.facte_cotizacion
		vl_vc_tot_iva 			= vl_vc_tot_iva+record.facte_tot_iva*record.facte_cotizacion
		vl_vc_tot_percep_ib 	= vl_vc_tot_percep_ib+record.facte_tot_percep_ib*record.facte_cotizacion
		vl_vc_tot_percep_iva 	= vl_vc_tot_percep_iva+record.facte_tot_percep_iva*record.facte_cotizacion
		vl_vc_tot_percep_varias = vl_vc_tot_percep_varias+record.facte_tot_percep_varias*record.facte_cotizacion
		vl_vc_tot_total 		= vl_vc_tot_total+record.facte_tot_total*record.facte_cotizacion
	}
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"258799F0-EBE7-45F7-A81E-FE8A69D12ED0"}
 */
function onShow(firstShow, event) 
{
	vl_anio = application.getServerTimeStamp().getFullYear()
	vl_mes  = application.getServerTimeStamp().getMonth()+1
	
	vl_pp_tot_ex 			= 0
	vl_pp_tot_sb 			= 0
	vl_pp_tot_ii 			= 0
	vl_pp_tot_iva 			= 0
	vl_pp_tot_nogr 			= 0
	vl_pp_tot_percep_ib 	= 0
	vl_pp_tot_percep_iva 	= 0
	vl_pp_tot_percep_varias = 0
	vl_pp_tot_total 		= 0
	
	vl_vc_tot_ex 			= 0
	vl_vc_tot_sb 			= 0
	vl_vc_tot_iva 			= 0
	vl_vc_tot_percep_ib 	= 0
	vl_vc_tot_percep_iva 	= 0
	vl_vc_tot_percep_varias = 0
	vl_vc_tot_total 		= 0
	
	vl_total_apagar			= 0
}
