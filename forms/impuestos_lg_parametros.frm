customProperties:"formComponent:false,\
useCssPosition:true",
dataSource:"db:/sistemas/imp_parametros",
items:[
{
height:217,
partType:5,
typeid:19,
uuid:"2A9E6760-D4C6-40D0-96D0-9B7D28509F7E"
},
{
cssPosition:"1,0,-1,0,487,30",
json:{
cssPosition:{
bottom:"-1",
height:"30",
left:"0",
right:"0",
top:"1",
width:"487"
},
formIndex:0,
styleClass:"lg-titulo",
tabSeq:1,
text:"Parámetros de Impuestos"
},
name:"lbl_titulo",
styleClass:"lg-titulo",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"4F89E7C2-9A8E-4190-99F8-025A370AB492"
},
{
cssPosition:"165,-1,-1,109,110,24",
formIndex:2,
json:{
cssPosition:{
bottom:"-1",
height:"24",
left:"109",
right:"-1",
top:"165",
width:"110"
},
formIndex:2,
imageStyleClass:"glyphicon glyphicon-floppy-disk",
onActionMethodID:"BE766BAE-9C1A-407B-A824-892A6A343EC4",
tabSeq:4,
text:"Grabar"
},
name:"btn_grabar",
typeName:"bootstrapcomponents-button",
typeid:47,
uuid:"59271271-AC5A-45BA-A177-D0FC32A91A7F"
},
{
cssPosition:"87,-1,-1,277,140,30",
json:{
cssPosition:{
bottom:"-1",
height:"30",
left:"277",
right:"-1",
top:"87",
width:"140"
},
dataProviderID:"imp_mx_fcorte_ventas",
format:"dd/MM/yyyy|mask",
styleClass:"form-control lg-center"
},
name:"calendar_2",
styleClass:"form-control lg-center",
typeName:"bootstrapcomponents-calendar",
typeid:47,
uuid:"66341A90-0039-4D6D-BB5F-79BBE757B727"
},
{
cssPosition:"54,-1,-1,11,252,30",
json:{
cssPosition:{
bottom:"-1",
height:"30",
left:"11",
right:"-1",
top:"54",
width:"252"
},
text:"Fecha de corte proveedores:"
},
name:"label_1",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"7348B743-3916-4127-A6B4-AE3B6B0EEEF4"
},
{
cssPosition:"165,-1,-1,223,110,24",
formIndex:1,
json:{
cssPosition:{
bottom:"-1",
height:"24",
left:"223",
right:"-1",
top:"165",
width:"110"
},
formIndex:1,
imageStyleClass:"fa fa-window-close-o",
onActionMethodID:"EC017ED1-3D6B-4393-8E2E-1211CB4CB9BD",
tabSeq:5,
text:"Cerrar"
},
name:"btn_cerrar",
typeName:"bootstrapcomponents-button",
typeid:47,
uuid:"B0212021-4AC6-49FA-8965-1D9602E493F9"
},
{
cssPosition:"54,-1,-1,277,140,30",
json:{
cssPosition:{
bottom:"-1",
height:"30",
left:"277",
right:"-1",
top:"54",
width:"140"
},
dataProviderID:"imp_mx_fcorte_proveedores",
format:"dd/MM/yyyy|mask",
styleClass:"form-control lg-center"
},
name:"calendar_1",
styleClass:"form-control lg-center",
typeName:"bootstrapcomponents-calendar",
typeid:47,
uuid:"E5BFAEDD-7549-4055-AA28-39F916CD9325"
},
{
cssPosition:"87,-1,-1,11,252,30",
json:{
cssPosition:{
bottom:"-1",
height:"30",
left:"11",
right:"-1",
top:"87",
width:"252"
},
text:"Fecha de corte ventas:"
},
name:"label_2",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"F2160DBB-7EB5-4103-850B-EB22830129BF"
}
],
name:"impuestos_lg_parametros",
navigatorID:"-1",
onHideMethodID:"6E1CD7D4-6B8C-486E-97D4-C58638004024",
onShowMethodID:"FCE420B1-73EB-4A96-B5CA-BFF798A1EDD5",
scrollbars:36,
showInMenu:true,
size:"442,307",
typeid:3,
uuid:"6C16A518-AE9D-4715-A54D-A29A2986C4EF"