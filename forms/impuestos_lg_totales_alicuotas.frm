customProperties:"formComponent:false,\
useCssPosition:true",
dataSource:"db:/sistemas/alicuotas",
items:[
{
cssPosition:"1,-1,-1,0,497,30",
json:{
cssPosition:{
bottom:"-1",
height:"30",
left:"0",
right:"-1",
top:"1",
width:"497"
},
styleClass:"lg-titulo",
text:"Total por alícuotas"
},
name:"label_1",
styleClass:"lg-titulo",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"306207A3-E596-46C6-BD7F-B2B2C0B35EA0"
},
{
height:70,
partType:1,
typeid:19,
uuid:"5898B506-1637-4B4F-8D26-00CC5DCA0341"
},
{
cssPosition:"34,-1,-1,333,61,33",
json:{
cssPosition:{
bottom:"-1",
height:"33",
left:"333",
right:"-1",
top:"34",
width:"61"
},
imageStyleClass:"fa fa-print",
onActionMethodID:"9E4530C9-420A-441E-B48A-411BA204F9DE"
},
name:"btn_imprimir",
typeName:"bootstrapcomponents-button",
typeid:47,
uuid:"78A64B52-F3AA-453E-A08C-B8E67ECC8E31"
},
{
height:337,
partType:5,
typeid:19,
uuid:"7F2C4B5C-70E1-4E1C-B589-10AEE302B99B"
},
{
cssPosition:"34,-1,-1,404,61,33",
json:{
cssPosition:{
bottom:"-1",
height:"33",
left:"404",
right:"-1",
top:"34",
width:"61"
},
imageStyleClass:"far fa-file-excel",
onActionMethodID:"6E3D148E-9DA1-47E9-B9DB-F3CF2B194F6C"
},
name:"btn_excel",
typeName:"bootstrapcomponents-button",
typeid:47,
uuid:"C1821FE7-39EE-403B-92D5-BFDA22E4D861"
},
{
cssPosition:"75,-1,-1,0,495,258",
json:{
columns:[
{
dataprovider:"alicuota_descripcion",
enableResize:false,
enableRowGroup:false,
enableSort:false,
enableToolPanel:false,
headerTitle:"Descripción",
svyUUID:"8A01EEE9-74B3-40EB-ACD6-100DB0402EC0"
},
{
dataprovider:"calc_total_iva",
format:"#,#0.00",
headerTitle:"Total",
styleClass:"table_field_noBorder_right",
svyUUID:"1120AA54-75C3-494C-863D-FD1167A68F9B"
}
],
cssPosition:{
bottom:"-1",
height:"258",
left:"0",
right:"-1",
top:"75",
width:"495"
}
},
name:"groupingtable_6",
typeName:"aggrid-groupingtable",
typeid:47,
uuid:"F4BCDD40-AC07-4988-8710-97C3CBB08D7A"
}
],
name:"impuestos_lg_totales_alicuotas",
navigatorID:"-1",
onShowMethodID:"9899180A-783D-4514-A31D-4ADE6EE7CD18",
showInMenu:true,
size:"499,430",
typeid:3,
uuid:"44A05BF7-B2CF-436A-8992-A846812963A0"