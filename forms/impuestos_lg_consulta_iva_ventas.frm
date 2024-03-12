customProperties:"formComponent:false,\
useCssPosition:true",
dataSource:"db:/sistemas/vc_fact_enc",
items:[
{
cssPosition:"5,calc(135px + 283px),-1,-1,129,25",
formIndex:2,
json:{
cssPosition:{
bottom:"-1",
height:"25",
left:"-1",
right:"calc(135px + 283px)",
top:"5",
width:"129"
},
formIndex:2,
imageStyleClass:"fas fa-file-excel",
onActionMethodID:"6350C5D2-BC71-4800-9153-0601E74AD09E",
text:"Exportar",
toolTipText:"Exportar"
},
name:"btn_exportar",
typeName:"bootstrapcomponents-button",
typeid:47,
uuid:"001A3302-E705-4272-954D-6AB3B0E41655"
},
{
cssPosition:"77,-1,-1,6,54,30",
json:{
cssPosition:{
bottom:"-1",
height:"30",
left:"6",
right:"-1",
top:"77",
width:"54"
},
text:"Hasta:"
},
name:"label_fec_hasta",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"0179134D-2BB8-4D78-988F-2B06F18E5C89"
},
{
cssPosition:"5,calc(140px + 144px),-1,-1,129,25",
formIndex:3,
json:{
cssPosition:{
bottom:"-1",
height:"25",
left:"-1",
right:"calc(140px + 144px)",
top:"5",
width:"129"
},
formIndex:3,
imageStyleClass:"fa fa-print",
onActionMethodID:"58B432E8-0992-4CB4-A1F3-E6EFFB7E5A9D",
text:"Imprimir",
toolTipText:"Imprimir"
},
name:"btn_imprimir",
typeName:"bootstrapcomponents-button",
typeid:47,
uuid:"05982E24-EF29-4D90-8FD1-E0EBD5D8165B"
},
{
cssPosition:"77,-1,-1,365,39,30",
json:{
cssPosition:{
bottom:"-1",
height:"30",
left:"365",
right:"-1",
top:"77",
width:"39"
},
text:"Mes:"
},
name:"label_sucursalcccc",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"0801A582-2FCE-4523-8D23-4E51BCE298FC"
},
{
cssPosition:"41,-1,-1,247,501,30",
json:{
cssPosition:{
bottom:"-1",
height:"30",
left:"247",
right:"-1",
top:"41",
width:"501"
},
dataProviderID:"vl_cliente",
valuelistID:"4EE6D793-AC89-40F4-8B5F-77BFABF2065B"
},
name:"vl_cliente",
typeName:"bootstrapcomponents-typeahead",
typeid:47,
uuid:"0F115415-7D45-42AB-A77E-705C51F0C146"
},
{
height:789,
partType:8,
typeid:19,
uuid:"200CEBC8-87BB-4FD2-81A6-59967B0088EF"
},
{
cssPosition:"92,7,-1,-1,128,25",
json:{
badgeText:"%%aggr_cantidad%%",
cssPosition:{
bottom:"-1",
height:"25",
left:"-1",
right:"7",
top:"92",
width:"128"
},
displayType:"LABEL",
text:"Cantidad:"
},
name:"badge_1",
typeName:"bootstrapextracomponents-badge",
typeid:47,
uuid:"317D10EB-8EFA-4CC9-B1DF-676FF03216BA"
},
{
cssPosition:"77,-1,-1,64,114,30",
json:{
cssPosition:{
bottom:"-1",
height:"30",
left:"64",
right:"-1",
top:"77",
width:"114"
},
dataProviderID:"vl_fec_hasta",
format:"dd/MM/yyyy|mask"
},
name:"calendar_2",
typeName:"bootstrapcomponents-calendar",
typeid:47,
uuid:"34374D51-A1F6-4A2F-BC07-6B20C5FBFA9E"
},
{
cssPosition:"77,calc(135px + 580px),-1,-1,220,30",
formIndex:2,
json:{
cssPosition:{
bottom:"-1",
height:"30",
left:"-1",
right:"calc(135px + 580px)",
top:"77",
width:"220"
},
formIndex:2,
imageStyleClass:"fa fa-balance-scale",
onActionMethodID:"1CD1868E-FACE-44BE-8FD5-A01D26B490C7",
text:"Totales por categorias",
toolTipText:"Totales por categorias"
},
name:"btn_total_categoria",
typeName:"bootstrapcomponents-button",
typeid:47,
uuid:"46D49021-A757-4EC1-90B0-D85811D34B92"
},
{
cssPosition:"77,-1,-1,247,74,30",
json:{
cssPosition:{
bottom:"-1",
height:"30",
left:"247",
right:"-1",
top:"77",
width:"74"
},
dataProviderID:"vl_anio",
format:"0000",
valuelistID:"629CFCCF-FD8F-47BD-93A0-72C41979B166"
},
name:"vl_anio",
typeName:"bootstrapcomponents-combobox",
typeid:47,
uuid:"4BDB1344-CB35-4434-AB06-90A8B827266D"
},
{
cssPosition:"5,calc(135px + 417px),-1,-1,129,25",
formIndex:2,
json:{
cssPosition:{
bottom:"-1",
height:"25",
left:"-1",
right:"calc(135px + 417px)",
top:"5",
width:"129"
},
formIndex:2,
imageStyleClass:"fas fa-cog",
onActionMethodID:"1046BCBE-07AE-439A-ACB6-177F18727978",
text:"Consultar",
toolTipText:"Consultar"
},
name:"btn_consultar",
typeName:"bootstrapcomponents-button",
typeid:47,
uuid:"518DAD65-1274-42B6-8442-4C09B5F92B30"
},
{
anchors:3,
cssPosition:"746,-1,-1,1468,207,37",
formIndex:6,
json:{
anchors:3,
cssPosition:{
bottom:"-1",
height:"37",
left:"1468",
right:"-1",
top:"746",
width:"207"
},
dataProviderID:"aggr_total",
editable:false,
formIndex:6,
format:"#,##0.00|#,##0.00",
location:{
x:538,
y:652
},
size:{
height:30,
width:164
},
styleClass:"form-control lg-total "
},
location:"538,652",
name:"textbox_total_habercccccc",
size:"164,30",
styleClass:"form-control lg-total ",
typeName:"bootstrapcomponents-textbox",
typeid:47,
uuid:"57941ABF-3C6E-42E4-B4DA-1E4787B542C4"
},
{
cssPosition:"41,-1,-1,64,114,30",
json:{
cssPosition:{
bottom:"-1",
height:"30",
left:"64",
right:"-1",
top:"41",
width:"114"
},
dataProviderID:"vl_fec_desde",
format:"dd/MM/yyyy|mask"
},
name:"calendar_1",
typeName:"bootstrapcomponents-calendar",
typeid:47,
uuid:"5CF6230A-DE7F-4F81-AF63-35AB5FD2D4CE"
},
{
anchors:3,
cssPosition:"719,-1,-1,1248,207,24",
formIndex:5,
json:{
anchors:3,
cssPosition:{
bottom:"-1",
height:"24",
left:"1248",
right:"-1",
top:"719",
width:"207"
},
formIndex:5,
location:{
x:384,
y:652
},
size:{
height:30,
width:149
},
styleClass:"lg-textologin lg-center",
styleClassExpression:null,
text:"TOT. PERCP. VARIAS",
toolTipText:"TOTAL A CUENTA"
},
location:"384,652",
name:"label_total_acuentacccccc",
size:"149,30",
styleClass:"lg-textologin lg-center",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"601853CE-3977-4DD9-9FCE-976FA044D021"
},
{
height:710,
partType:5,
typeid:19,
uuid:"61C5E17A-4342-4F13-8450-DC62209D7E28"
},
{
cssPosition:"0,0,-1,0,1312,35",
json:{
cssPosition:{
bottom:"-1",
height:"35",
left:"0",
right:"0",
top:"0",
width:"1312"
},
formIndex:0,
styleClass:"lg-titulo",
text:"Libro IVA Ventas"
},
name:"label_1",
styleClass:"lg-titulo",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"696C18D7-DF1C-47CC-9EA4-573F74E7D83B"
},
{
height:119,
partType:1,
typeid:19,
uuid:"71012493-AD14-425B-8B17-39E1032B7BC0"
},
{
anchors:3,
cssPosition:"746,-1,-1,1248,207,37",
formIndex:6,
json:{
anchors:3,
cssPosition:{
bottom:"-1",
height:"37",
left:"1248",
right:"-1",
top:"746",
width:"207"
},
dataProviderID:"aggr_total_percep_varias",
editable:false,
formIndex:6,
format:"#,##0.00|#,##0.00",
location:{
x:538,
y:652
},
size:{
height:30,
width:164
},
styleClass:"form-control lg-total "
},
location:"538,652",
name:"textbox_total_haberccccc",
size:"164,30",
styleClass:"form-control lg-total ",
typeName:"bootstrapcomponents-textbox",
typeid:47,
uuid:"7494DACC-D6BB-4987-9787-95490DCE2E4F"
},
{
cssPosition:"77,calc(135px + 805px),-1,-1,148,30",
formIndex:2,
json:{
cssPosition:{
bottom:"-1",
height:"30",
left:"-1",
right:"calc(135px + 805px)",
top:"77",
width:"148"
},
formIndex:2,
imageStyleClass:"fa fa-cloud-download",
onActionMethodID:"3D249B82-5B8D-4F4F-9925-9C1DBDE941C0",
text:"Archivos AFIP",
toolTipText:"Descargar Archivos AFIP"
},
name:"btn_descargar",
typeName:"bootstrapcomponents-button",
typeid:47,
uuid:"76877B06-FA3E-41C0-8DBE-C7B04AEB0AFA"
},
{
cssPosition:"41,-1,-1,6,54,30",
json:{
cssPosition:{
bottom:"-1",
height:"30",
left:"6",
right:"-1",
top:"41",
width:"54"
},
text:"Desde:"
},
name:"label_fec_desde",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"7A3BDCC5-BE7D-4D0F-8E3F-C8372B443F62"
},
{
anchors:3,
cssPosition:"719,-1,-1,1468,207,24",
formIndex:5,
json:{
anchors:3,
cssPosition:{
bottom:"-1",
height:"24",
left:"1468",
right:"-1",
top:"719",
width:"207"
},
formIndex:5,
location:{
x:384,
y:652
},
size:{
height:30,
width:149
},
styleClass:"lg-textologin lg-center",
styleClassExpression:null,
text:"TOTAL",
toolTipText:"TOTAL A CUENTA"
},
location:"384,652",
name:"label_total_acuentaccccccc",
size:"149,30",
styleClass:"lg-textologin lg-center",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"88C4F8B5-E47E-4A39-9E39-740136691DBB"
},
{
cssPosition:"126,0,80,0,200,100",
json:{
columns:[
{
autoResize:false,
editFormSize:{
height:0,
width:0
},
enableResize:false,
enableRowGroup:false,
enableSort:false,
enableToolPanel:false,
maxWidth:30,
minWidth:30,
showAs:"html",
styleClass:"table_button_detail_fa_fa",
svyUUID:"C3A28C13-D09E-4DA3-8C6A-8C857BE19BF9",
width:30
},
{
autoResize:false,
dataprovider:"facte_imputacion_mes",
enableResize:false,
enableRowGroup:false,
enableSort:false,
enableToolPanel:false,
format:"00",
headerTitle:"Mes",
styleClass:"table_field_noBorder_center",
svyUUID:"E3F47D5C-9B91-493D-AB79-6C26474B312F",
width:60
},
{
autoResize:false,
dataprovider:"facte_imputacion_anio",
format:"0000",
headerTitle:"Año",
styleClass:"table_field_noBorder_center",
svyUUID:"EAC2867C-9BA5-45A0-9D90-966D807956EA",
width:70
},
{
autoResize:false,
dataprovider:"facte_fecha",
footerStyleClass:"table_field_noBorder_center",
format:"dd/MM/yyyy",
headerTitle:"Fecha",
styleClass:"table_field_noBorder_center",
svyUUID:"AF6FB912-5B13-449C-9D0A-E480578B005D",
width:100
},
{
autoResize:false,
dataprovider:"vc_fact_enc_to_lg_talonarios.talonario_afip",
format:"000",
headerTitle:"AFIP",
styleClass:"table_field_noBorder_center",
svyUUID:"91A6DC7D-5E2C-4D2A-87EB-E66E4669D424",
width:80
},
{
autoResize:false,
dataprovider:"calc_comprobante",
headerTitle:"Comprobante",
styleClass:"table_field_noBorder_center",
svyUUID:"DFA5E5C9-9660-4048-85BF-151CD49FC76F",
width:190
},
{
autoResize:false,
dataprovider:"cliente_id",
headerTitle:"Cliente",
svyUUID:"0F75F5D1-11B3-4FEF-AE83-B1ACFD92B80C",
valuelist:"4EE6D793-AC89-40F4-8B5F-77BFABF2065B",
width:200
},
{
autoResize:false,
dataprovider:"vc_fact_enc_to_vc_clientes.vc_clientes_to_lg_categorias_iva.cativa_abreviatura",
headerTitle:"Cat.IVA",
styleClass:"table_field_noBorder_center",
svyUUID:"BE270F0C-49A4-4C30-B23A-2F77D9382E6B",
valuelist:"3247B359-0084-4001-AED4-6A349D30984F",
width:90
},
{
autoResize:false,
dataprovider:"vc_fact_enc_to_vc_clientes.vc_clientes_to_documentos.docu_descripcion",
headerTitle:"T.doc.",
svyUUID:"E89C66F6-48D9-4C11-B7ED-9462955638E9",
width:90
},
{
autoResize:false,
dataprovider:"vc_fact_enc_to_vc_clientes.cliente_nro_docu",
headerTitle:"N° doc.",
svyUUID:"13536733-6FB1-420D-A640-95D94A065E96",
width:120
},
{
autoResize:false,
dataprovider:"facte_tot_sb",
enableResize:false,
enableRowGroup:false,
enableSort:false,
enableToolPanel:false,
format:"#,##0.00",
headerTitle:"Neto",
styleClass:"table_field_noBorder_right",
styleClassDataprovider:"calc_color_Haber",
svyUUID:"5418182F-BD9A-4AC4-9E49-8FC315D60405",
width:130
},
{
autoResize:false,
dataprovider:"facte_tot_iva",
enableResize:false,
enableRowGroup:false,
enableSort:false,
enableToolPanel:false,
format:"#,##0.00",
headerTitle:"IVA",
styleClass:"table_field_noBorder_right",
styleClassDataprovider:"calc_color_Haber",
svyUUID:"A6215905-9555-42C2-A875-2C01E1565286",
width:130
},
{
autoResize:false,
dataprovider:"facte_tot_ex",
format:"#,##0.00",
headerTitle:"Exento",
styleClass:"table_field_noBorder_right",
styleClassDataprovider:"calc_color_Haber",
svyUUID:"79A34708-6F12-47CB-AF9E-748186F9C990",
width:130
},
{
autoResize:false,
dataprovider:"facte_tot_percep_ib",
enableResize:false,
enableRowGroup:false,
enableSort:false,
format:"#,##0.00",
headerTitle:"Perc. IB",
styleClass:"table_field_noBorder_right",
styleClassDataprovider:"calc_color_Haber",
svyUUID:"D15D8FCD-9554-4566-B8EC-1792310362D6",
width:100
},
{
autoResize:false,
dataprovider:"facte_tot_percep_iva",
enableResize:false,
enableRowGroup:false,
enableSort:false,
format:"#,##0.00",
headerTitle:"Perc. IVA",
styleClass:"table_field_noBorder_right",
styleClassDataprovider:"calc_color_Haber",
svyUUID:"3004B01D-2B1F-4791-A99E-846D35E34078",
width:100
},
{
autoResize:false,
dataprovider:"facte_tot_percep_varias",
enableResize:false,
enableRowGroup:false,
enableSort:false,
enableToolPanel:false,
format:"#,##0.00",
headerTitle:"Perc.Var.",
styleClass:"table_field_noBorder_right",
styleClassDataprovider:"calc_color_Haber",
svyUUID:"A4441022-F979-4F39-AB24-E0ACA8AD20EA",
width:100
},
{
autoResize:false,
dataprovider:"facte_tot_total",
enableResize:false,
enableRowGroup:false,
enableSort:false,
format:"#,##0.00",
headerTitle:"Total",
styleClass:"table_field_noBorder_right",
styleClassDataprovider:"calc_color_Haber",
svyUUID:"2596D0BC-B6DC-438F-A432-F93395029DC6",
width:130
},
{
autoResize:false,
dataprovider:"suc_id",
headerTitle:"Sucursal",
svyUUID:"F3A54AE6-615C-4C0F-B115-B21EA005D3E0",
valuelist:"0843E215-57E6-4634-8982-D5110EAA6163",
width:250
},
{
autoResize:false,
dataprovider:"vc_fact_enc_to_vc_clientes.localidad_id",
headerTitle:"Localidad",
svyUUID:"0D82A29B-A4D7-4F91-8141-935923C983B0",
valuelist:"ECFAC39D-5DF6-4144-AF90-3BDF366BAE13",
width:250
},
{
autoResize:false,
dataprovider:"vc_fact_enc_to_vc_clientes.vc_clientes_to_localidades.localidades_to_provincias.provincia_nombre",
headerTitle:"Provincia",
svyUUID:"D567F97E-1B6F-4B90-9872-380AA7BCA482",
width:250
}
],
cssPosition:{
bottom:"80",
height:"100",
left:"0",
right:"0",
top:"126",
width:"200"
}
},
name:"groupingtable_3",
typeName:"aggrid-groupingtable",
typeid:47,
uuid:"9217D247-A82F-44EE-A5B9-78BEE152B333"
},
{
cssPosition:"4,150,-1,-1,129,25",
formIndex:4,
json:{
cssPosition:{
bottom:"-1",
height:"25",
left:"-1",
right:"150",
top:"4",
width:"129"
},
formIndex:4,
imageStyleClass:"fa fa-refresh",
onActionMethodID:"F6E21D38-7E09-4B84-B6AE-61447779B1E1",
text:"Refrescar",
toolTipText:"Refrescar"
},
name:"btn_refrescar",
typeName:"bootstrapcomponents-button",
typeid:47,
uuid:"92C92AC8-A235-4AF8-8F36-E32879874668"
},
{
cssPosition:"4,16,-1,-1,129,25",
formIndex:1,
json:{
cssPosition:{
bottom:"-1",
height:"25",
left:"-1",
right:"16",
top:"4",
width:"129"
},
formIndex:1,
imageStyleClass:"fa fa-share-square",
onActionMethodID:"141D803F-BC7A-4722-8F80-1E6E4D2A0883",
text:"Volver",
toolTipText:"Volver"
},
name:"btn_volver",
typeName:"bootstrapcomponents-button",
typeid:47,
uuid:"949A707B-B759-45D0-BBB2-2A74B65FEA22"
},
{
anchors:3,
cssPosition:"719,-1,-1,832,195,24",
formIndex:5,
json:{
anchors:3,
cssPosition:{
bottom:"-1",
height:"24",
left:"832",
right:"-1",
top:"719",
width:"195"
},
formIndex:5,
location:{
x:384,
y:652
},
size:{
height:30,
width:149
},
styleClass:"lg-textologin lg-center",
styleClassExpression:null,
text:"TOT. PERCEP. IB",
toolTipText:"TOTAL A CUENTA"
},
location:"384,652",
name:"label_total_acuentacccc",
size:"149,30",
styleClass:"lg-textologin lg-center",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"99F00C35-29F9-421B-B0B8-A8C68093802C"
},
{
anchors:3,
cssPosition:"746,-1,-1,832,195,37",
formIndex:6,
json:{
anchors:3,
cssPosition:{
bottom:"-1",
height:"37",
left:"832",
right:"-1",
top:"746",
width:"195"
},
dataProviderID:"aggr_total_percep_ib",
editable:false,
formIndex:6,
format:"#,##0.00|#,##0.00",
location:{
x:538,
y:652
},
size:{
height:30,
width:164
},
styleClass:"form-control lg-total "
},
location:"538,652",
name:"textbox_total_haberccc",
size:"164,30",
styleClass:"form-control lg-total ",
typeName:"bootstrapcomponents-textbox",
typeid:47,
uuid:"AD54FD50-366D-4E7C-B752-B786C9D08BB1"
},
{
anchors:3,
cssPosition:"746,-1,-1,617,204,37",
formIndex:6,
json:{
anchors:3,
cssPosition:{
bottom:"-1",
height:"37",
left:"617",
right:"-1",
top:"746",
width:"204"
},
dataProviderID:"aggr_total_ex",
editable:false,
formIndex:6,
format:"#,##0.00|#,##0.00",
location:{
x:538,
y:652
},
size:{
height:30,
width:164
},
styleClass:"form-control lg-total "
},
location:"538,652",
name:"textbox_total_habercc",
size:"164,30",
styleClass:"form-control lg-total ",
typeName:"bootstrapcomponents-textbox",
typeid:47,
uuid:"B0D5524F-10CD-4ABA-B90F-4A533FACA35F"
},
{
anchors:3,
cssPosition:"719,-1,-1,141,227,24",
formIndex:5,
json:{
anchors:3,
cssPosition:{
bottom:"-1",
height:"24",
left:"141",
right:"-1",
top:"719",
width:"227"
},
formIndex:5,
location:{
x:384,
y:652
},
size:{
height:30,
width:149
},
styleClass:"lg-textologin lg-center",
styleClassExpression:null,
text:"TOTAL NETO",
toolTipText:"TOTAL A CUENTA"
},
location:"384,652",
name:"label_total_acuentac",
size:"149,30",
styleClass:"lg-textologin lg-center",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"B4B79EA3-F4E1-475D-8054-3563C4DF2553"
},
{
anchors:3,
cssPosition:"746,-1,-1,141,227,37",
formIndex:6,
json:{
anchors:3,
cssPosition:{
bottom:"-1",
height:"37",
left:"141",
right:"-1",
top:"746",
width:"227"
},
dataProviderID:"aggr_total_sb",
editable:false,
formIndex:6,
format:"#,##0.00|#,##0.00",
location:{
x:538,
y:652
},
size:{
height:30,
width:164
},
styleClass:"form-control lg-total "
},
location:"538,652",
name:"textbox_total_haber",
size:"164,30",
styleClass:"form-control lg-total ",
typeName:"bootstrapcomponents-textbox",
typeid:47,
uuid:"C5F8C599-CDF2-460B-8246-816975160A1E"
},
{
cssPosition:"77,-1,-1,408,118,30",
json:{
cssPosition:{
bottom:"-1",
height:"30",
left:"408",
right:"-1",
top:"77",
width:"118"
},
dataProviderID:"vl_mes",
valuelistID:"86611D84-7D95-4159-A7DD-65F7A3DE29CA"
},
name:"vl_mes",
typeName:"bootstrapcomponents-combobox",
typeid:47,
uuid:"C9D8AB86-171B-47B5-98F1-90EFE0AF0FD2"
},
{
anchors:3,
cssPosition:"746,-1,-1,377,229,37",
formIndex:6,
json:{
anchors:3,
cssPosition:{
bottom:"-1",
height:"37",
left:"377",
right:"-1",
top:"746",
width:"229"
},
dataProviderID:"aggr_total_iva",
editable:false,
formIndex:6,
format:"#,##0.00|#,##0.00",
location:{
x:538,
y:652
},
size:{
height:30,
width:164
},
styleClass:"form-control lg-total "
},
location:"538,652",
name:"textbox_total_haberc",
size:"164,30",
styleClass:"form-control lg-total ",
typeName:"bootstrapcomponents-textbox",
typeid:47,
uuid:"CA3FE7DC-3A96-49C1-AA77-83BB294131A0"
},
{
cssPosition:"41,calc(135px + 353px),-1,-1,220,30",
formIndex:2,
json:{
cssPosition:{
bottom:"-1",
height:"30",
left:"-1",
right:"calc(135px + 353px)",
top:"41",
width:"220"
},
formIndex:2,
imageStyleClass:"fas fa-bezier-curve",
onActionMethodID:"2F084961-3F24-4D05-9571-154E8A1A123E",
text:"Asientos contables",
toolTipText:"Asientos contables"
},
name:"btn_asientos",
typeName:"bootstrapcomponents-button",
typeid:47,
uuid:"CD9946BB-16DB-49C1-BDD3-3942A53E4CC4"
},
{
cssPosition:"41,calc(135px + 580px),-1,-1,220,30",
formIndex:2,
json:{
cssPosition:{
bottom:"-1",
height:"30",
left:"-1",
right:"calc(135px + 580px)",
top:"41",
width:"220"
},
formIndex:2,
imageStyleClass:"fa fa-percent",
onActionMethodID:"9F0C1E05-38DB-465A-8638-C3EE339C36EB",
text:"Totales por alícuotas",
toolTipText:"Totales por alícuotas"
},
name:"btn_total_alicuotas",
typeName:"bootstrapcomponents-button",
typeid:47,
uuid:"D903AEED-01BC-4BD1-A755-5FCF711DC102"
},
{
anchors:3,
cssPosition:"719,-1,-1,1040,195,24",
formIndex:5,
json:{
anchors:3,
cssPosition:{
bottom:"-1",
height:"24",
left:"1040",
right:"-1",
top:"719",
width:"195"
},
formIndex:5,
location:{
x:384,
y:652
},
size:{
height:30,
width:149
},
styleClass:"lg-textologin lg-center",
styleClassExpression:null,
text:"TOT. PERCEP. IVA",
toolTipText:"TOTAL A CUENTA"
},
location:"384,652",
name:"label_total_acuentaccccc",
size:"149,30",
styleClass:"lg-textologin lg-center",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"DBE535F3-5450-4698-A76B-7BE005CCEDBB"
},
{
cssPosition:"41,-1,-1,190,53,30",
json:{
cssPosition:{
bottom:"-1",
height:"30",
left:"190",
right:"-1",
top:"41",
width:"53"
},
text:"Cliente:"
},
name:"label_sucursalcc",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"DC2BCD56-877A-4C4A-8726-183893FE3E50"
},
{
anchors:3,
cssPosition:"746,-1,-1,1040,195,37",
formIndex:6,
json:{
anchors:3,
cssPosition:{
bottom:"-1",
height:"37",
left:"1040",
right:"-1",
top:"746",
width:"195"
},
dataProviderID:"aggr_total_percep_iva",
editable:false,
formIndex:6,
format:"#,##0.00|#,##0.00",
location:{
x:538,
y:652
},
size:{
height:30,
width:164
},
styleClass:"form-control lg-total "
},
location:"538,652",
name:"textbox_total_habercccc",
size:"164,30",
styleClass:"form-control lg-total ",
typeName:"bootstrapcomponents-textbox",
typeid:47,
uuid:"E3EE89D7-3ED9-4067-8B0C-B324B7D9CD3D"
},
{
cssPosition:"77,-1,-1,190,53,30",
json:{
cssPosition:{
bottom:"-1",
height:"30",
left:"190",
right:"-1",
top:"77",
width:"53"
},
text:"Año:"
},
name:"label_sucursalccc",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"E68C06F2-EB1E-4869-823D-76FACED8C4A5"
},
{
anchors:3,
cssPosition:"719,-1,-1,617,204,24",
formIndex:5,
json:{
anchors:3,
cssPosition:{
bottom:"-1",
height:"24",
left:"617",
right:"-1",
top:"719",
width:"204"
},
formIndex:5,
location:{
x:384,
y:652
},
size:{
height:30,
width:149
},
styleClass:"lg-textologin lg-center",
styleClassExpression:null,
text:"TOTAL EXENTO",
toolTipText:"TOTAL A CUENTA"
},
location:"384,652",
name:"label_total_acuentaccc",
size:"149,30",
styleClass:"lg-textologin lg-center",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"F5579544-D87D-470D-B453-F162DC4FF7BE"
},
{
anchors:3,
cssPosition:"719,-1,-1,377,229,24",
formIndex:5,
json:{
anchors:3,
cssPosition:{
bottom:"-1",
height:"24",
left:"377",
right:"-1",
top:"719",
width:"229"
},
formIndex:5,
location:{
x:384,
y:652
},
size:{
height:30,
width:149
},
styleClass:"lg-textologin lg-center",
styleClassExpression:null,
text:"TOTAL IVA",
toolTipText:"TOTAL A CUENTA"
},
location:"384,652",
name:"label_total_acuentacc",
size:"149,30",
styleClass:"lg-textologin lg-center",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"FD2B8E87-7847-4371-BDC7-9B42D6C93BCB"
},
{
cssPosition:"77,calc(135px + 353px),-1,-1,220,30",
formIndex:2,
json:{
cssPosition:{
bottom:"-1",
height:"30",
left:"-1",
right:"calc(135px + 353px)",
top:"77",
width:"220"
},
formIndex:2,
imageStyleClass:"fas fa-map-marker-alt",
onActionMethodID:"70E49D23-B83A-4F95-B996-E0AE2B6609A0",
text:"Totales por provincias",
toolTipText:"Totales por provincias"
},
name:"btn_total_provincia",
typeName:"bootstrapcomponents-button",
typeid:47,
uuid:"FE080C2D-2B4E-4F7D-86F7-5C7C6E8F2163"
}
],
name:"impuestos_lg_consulta_iva_ventas",
navigatorID:"-1",
onShowMethodID:"82F89798-0399-458A-BD4E-69048D3813E7",
showInMenu:true,
size:"1688,775",
typeid:3,
uuid:"9E089929-713B-4EBC-A7FE-2E949DD5B325"