customProperties:"formComponent:false,\
useCssPosition:true",
dataSource:"db:/sistemas/imp_tipo_impuestos",
items:[
{
cssPosition:"6,calc(135px + 140px),-1,-1,129,25",
formIndex:2,
json:{
cssPosition:{
bottom:"-1",
height:"25",
left:"-1",
right:"calc(135px + 140px)",
top:"6",
width:"129"
},
formIndex:2,
imageStyleClass:"fa fa-plus-square",
onActionMethodID:"465438F4-770F-4346-A2FF-171CF99A0B6B",
text:"Nuevo"
},
name:"btn_nuevo",
typeName:"bootstrapcomponents-button",
typeid:47,
uuid:"153C5F17-A191-4D28-BACF-7832FE73B747"
},
{
height:84,
partType:1,
typeid:19,
uuid:"3C31EB83-6C71-4F9A-AB06-E802A905CD8A"
},
{
cssPosition:"6,5,-1,-1,129,25",
formIndex:1,
json:{
cssPosition:{
bottom:"-1",
height:"25",
left:"-1",
right:"5",
top:"6",
width:"129"
},
formIndex:1,
imageStyleClass:"fa fa-share-square",
onActionMethodID:"68F9D51D-35D7-41C4-9979-5A2F0B633611",
text:"Volver"
},
name:"button_16",
typeName:"bootstrapcomponents-button",
typeid:47,
uuid:"51ADA173-F268-4E71-9EAC-D7CE0C7B7985"
},
{
cssPosition:"87,0,65,0,1312,347",
json:{
columns:[
{
autoResize:false,
enableResize:false,
enableRowGroup:false,
enableSort:false,
enableToolPanel:false,
styleClass:"table_button_detail_fa_fa",
svyUUID:"77C5A28E-630F-43C3-90AC-BBFE1B5D527C",
width:30
},
{
autoResize:false,
dataprovider:"tipo_imp_id",
headerTitle:"ID",
styleClass:"table_field_noBorder_center",
svyUUID:"010ECBA7-CB88-4392-B247-1B13F8B05C3B",
width:100
},
{
dataprovider:"tipo_imp_descripcion",
enableResize:false,
enableRowGroup:false,
enableSort:false,
enableToolPanel:false,
headerTitle:"Descripción",
svyUUID:"740E0212-AB8E-40FB-8360-C487333B3513",
valuelist:"8DC0160D-3C59-4F2E-B227-A968715AC24F",
width:null
},
{
dataprovider:"tipo_imp_cod_comp",
enableResize:false,
enableRowGroup:false,
enableSort:false,
enableToolPanel:false,
headerTitle:"TC",
svyUUID:"13E65D4D-7C6E-4897-A649-0B44CD07E75F",
width:20
},
{
autoResize:false,
dataprovider:"tipo_imp_aplicacion",
headerTitle:"Aplicación",
svyUUID:"A752A18D-79E6-4972-BA19-7511E0B7D4DC",
valuelist:"8A3C062D-B20F-4781-A795-1D035B24DF31",
width:120
},
{
dataprovider:"tipo_imp_observa",
enableResize:false,
enableRowGroup:false,
enableSort:false,
enableToolPanel:false,
headerTitle:"Observaciones",
svyUUID:"E44A8740-3E9F-40FA-9773-036E896C6E97",
width:null
},
{
autoResize:false,
enableResize:false,
enableRowGroup:false,
enableSort:false,
enableToolPanel:false,
styleClass:"table_button_delete_fa_fa",
svyUUID:"5FABF8AF-7C61-4B99-B6BB-65FEDE0EE849",
width:30
}
],
cssPosition:{
bottom:"65",
height:"347",
left:"0",
right:"0",
top:"87",
width:"1312"
},
onCellClick:"9D5C865B-515D-4D99-B1F7-5D2DD73F5777",
onCellDoubleClick:"2D9AF110-2FF5-4E55-95A1-9F263EDE5CE2"
},
name:"groupingtable_2",
typeName:"aggrid-groupingtable",
typeid:47,
uuid:"66CF1885-590B-497D-B46C-B4F4B953A74B"
},
{
height:480,
partType:5,
typeid:19,
uuid:"77B087EB-E156-4752-A981-02FCC0DE6C3B"
},
{
cssPosition:"52,5,-1,-1,128,25",
json:{
badgeText:"%%aggr_cantidad%%",
cssPosition:{
bottom:"-1",
height:"25",
left:"-1",
right:"5",
top:"52",
width:"128"
},
displayType:"LABEL",
text:"Cantidad:"
},
name:"badge_1",
typeName:"bootstrapextracomponents-badge",
typeid:47,
uuid:"8F3FD934-E3E1-43E6-AB22-5D9E1EB140CA"
},
{
cssPosition:"6,140,-1,-1,129,25",
formIndex:4,
json:{
cssPosition:{
bottom:"-1",
height:"25",
left:"-1",
right:"140",
top:"6",
width:"129"
},
formIndex:4,
imageStyleClass:"fa fa-refresh",
onActionMethodID:"EA053006-0BE2-458E-A36A-5B3CEF0F2C61",
text:"Refrescar"
},
name:"button_18",
typeName:"bootstrapcomponents-button",
typeid:47,
uuid:"A912F42D-7218-4F29-8EAB-0541D339041D"
},
{
cssPosition:"2,0,-1,0,1312,35",
json:{
cssPosition:{
bottom:"-1",
height:"35",
left:"0",
right:"0",
top:"2",
width:"1312"
},
formIndex:0,
styleClass:"lg-titulo",
text:"Listado de tipos de impuestos"
},
name:"label_1",
styleClass:"lg-titulo",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"C8132861-8B77-42CA-91D6-4F7B931947E1"
}
],
name:"impuestos_lg_tipos_impuestos",
navigatorID:"-1",
onShowMethodID:"E52E4C8D-CCE5-48F7-BD42-626D94D9C4D3",
showInMenu:true,
size:"1314,480",
typeid:3,
uuid:"ED1E214E-0AEF-43BF-A30D-CDB659AE5099"