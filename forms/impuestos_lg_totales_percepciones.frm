customProperties:"formComponent:false",
items:[
{
anchors:7,
formIndex:1,
json:{
anchors:7,
formIndex:1,
imageStyleClass:"far fa-file-excel",
location:{
x:421,
y:5
},
onActionMethodID:"72D3061A-98BD-4DC9-8E4B-9AF3FCFEA70A",
size:{
height:25,
width:129
},
text:"Exportar",
toolTipText:"Imprimir"
},
location:"421,5",
name:"btn_exportar",
size:"129,25",
typeName:"bootstrapcomponents-button",
typeid:47,
uuid:"1BB55203-EADB-43B6-A1D2-CDB1AEBD69CD"
},
{
height:463,
partType:5,
typeid:19,
uuid:"43874A97-864E-4B7A-B1EC-D55B089EAC63"
},
{
anchors:15,
json:{
anchors:15,
columns:[
{
dataprovider:"percep_provincia_nombre",
headerTitle:"Provincia",
svyUUID:"B46D8950-58E3-4318-A0B0-AF362FD62CE4",
width:250
},
{
dataprovider:"percep_provincia_importe",
enableSort:false,
format:"#,##0.00",
headerTitle:"Total",
styleClass:"table_field_noBorder_right",
svyUUID:"F2920C99-15F8-4F2D-ACDC-93A342DED860",
width:120
},
{
autoResize:false,
dataprovider:"percep_provincia_cantidad",
enableResize:false,
enableRowGroup:false,
enableSort:false,
enableToolPanel:false,
format:"#,##0.00",
headerTitle:"Cantidad",
styleClass:"table_field_noBorder_right",
svyUUID:"A5704C47-45CA-429F-AB75-61979308528D",
width:90
},
{
autoResize:false,
dataprovider:"percep_provincia_porcentaje",
enableResize:false,
enableRowGroup:false,
enableSort:false,
enableToolPanel:false,
headerTitle:"(%)",
styleClass:"table_field_noBorder_right",
svyUUID:"F5FC94F4-0B5D-402A-B767-EA525AC295C1",
width:90
}
],
location:{
x:11,
y:89
},
myFoundset:{
foundsetSelector:"mem:percepciones_x_provincias",
loadAllRecords:"true"
},
size:{
height:367,
width:771
}
},
location:"11,89",
name:"groupingtable_1",
size:"771,367",
typeName:"aggrid-groupingtable",
typeid:47,
uuid:"449CF3BA-3BB3-4BCD-8A9A-FF427902CB8B"
},
{
anchors:3,
formIndex:11,
horizontalAlignment:4,
location:"16,52",
size:"93,25",
styleClass:"labelOP",
text:"Período : ",
typeid:7,
uuid:"46609D81-57F9-4CA8-BFC1-AB240B47283D"
},
{
anchors:3,
formIndex:11,
horizontalAlignment:0,
location:"228,52",
size:"29,25",
styleClass:"labelOP",
text:" al ",
typeid:7,
uuid:"4A9733D3-356F-4E65-AC66-57DCFF41C375"
},
{
cssPosition:"545,-1,-1,442,195,44",
json:{
cssPosition:{
bottom:"-1",
height:"44",
left:"442",
right:"-1",
top:"545",
width:"195"
},
editable:false,
location:{
x:500,
y:50
},
placeholderText:"TOTAL : ",
size:{
height:25,
width:103
},
styleClass:"form-control lg-field-right",
toolTipText:"Total"
},
location:"500,50",
name:"textbox_total_acuenta",
size:"103,25",
styleClass:"form-control lg-field-right",
typeName:"bootstrapcomponents-textbox",
typeid:47,
uuid:"833F101F-7912-4CB0-811D-1555E936BC65"
},
{
dataProviderID:"vl_fec_hasta",
editable:false,
format:"dd/MM/yyyy|mask",
horizontalAlignment:0,
location:"261,52",
size:"104,25",
text:"ID",
typeid:4,
uuid:"87C816E8-81C4-4A5C-88AF-BD3DD7E16F22"
},
{
anchors:7,
formIndex:1,
json:{
anchors:7,
formIndex:1,
imageStyleClass:"fa fa-print",
location:{
x:554,
y:4
},
onActionMethodID:"59529F14-2F98-45F0-B9DC-66956AC7DD20",
size:{
height:25,
width:110
},
text:"Imprimir",
toolTipText:"Imprimir"
},
location:"554,4",
name:"btn_imprimir",
size:"110,25",
typeName:"bootstrapcomponents-button",
typeid:47,
uuid:"95D6EAF0-E3CB-40B9-9E2A-5DDEAF62380E"
},
{
dataProviderID:"vl_fec_desde",
editable:false,
format:"dd/MM/yyyy|mask",
horizontalAlignment:0,
location:"120,52",
size:"104,25",
text:"ID",
typeid:4,
uuid:"B30B4BCF-2607-49E0-8A2E-142A7BFF92A0"
},
{
height:81,
partType:1,
typeid:19,
uuid:"D1C44551-7339-4B9A-9F25-4D0ABDBDE56A"
},
{
anchors:3,
formIndex:2,
json:{
anchors:3,
formIndex:2,
imageStyleClass:"fa fa-window-close-o",
location:{
x:669,
y:4
},
onActionMethodID:"C7362538-AFF9-4B7D-B035-A60A572E2288",
size:{
height:24,
width:110
},
text:"Cerrar",
toolTipText:"Cerrar"
},
location:"669,4",
name:"btn_volver",
size:"110,24",
typeName:"bootstrapcomponents-button",
typeid:47,
uuid:"E3A87B16-B9ED-4E2F-8123-13FFA38E3A71"
},
{
cssPosition:"545,-1,-1,669,175,44",
json:{
cssPosition:{
bottom:"-1",
height:"44",
left:"669",
right:"-1",
top:"545",
width:"175"
},
dataProviderID:"vl_total",
editable:false,
format:"#,##0.00|#,##0.00",
location:{
x:610,
y:50
},
selectOnEnter:true,
size:{
height:25,
width:160
},
styleClass:"lg-field-total-right"
},
location:"610,50",
name:"textbox_total",
size:"160,25",
styleClass:"lg-field-total-right",
typeName:"bootstrapcomponents-textbox",
typeid:47,
uuid:"F80B4040-C353-4DC5-9DB1-7D8BAA4E1381"
},
{
cssPosition:"1,-1,-1,1,1655,30",
json:{
cssPosition:{
bottom:"-1",
height:"30",
left:"1",
right:"-1",
top:"1",
width:"1655"
},
formIndex:0,
location:{
x:4,
y:2
},
size:{
height:30,
width:784
},
styleClass:"lg-titulo",
tabSeq:-2,
text:""
},
location:"4,2",
name:"lbl_titulo",
size:"784,30",
styleClass:"lg-titulo",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"FB2C5910-4916-44F0-BA79-162981456396"
}
],
name:"impuestos_lg_totales_percepciones",
navigatorID:"-1",
onShowMethodID:"8AA4C41C-C4BE-4FE0-93DF-DE1C74FFAB4E",
showInMenu:true,
size:"790,511",
typeid:3,
uuid:"822E3CD5-15C2-4861-AA0D-21E52E14488E"