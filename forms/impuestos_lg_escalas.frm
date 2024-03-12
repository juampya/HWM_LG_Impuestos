customProperties:"formComponent:false,\
useCssPosition:true",
dataSource:"db:/sistemas/imp_escalas",
items:[
{
cssPosition:"88,0,124,0,1312,257",
json:{
columns:[
{
autoResize:false,
enableResize:false,
enableRowGroup:false,
enableSort:false,
enableToolPanel:false,
styleClass:"table_button_detail_fa_fa",
svyUUID:"8163D6E7-C716-4D17-B8E7-A1E7B08C0B82",
width:50
},
{
autoResize:false,
dataprovider:"escala_id",
headerTitle:"ID",
styleClass:"table_field_noBorder_right",
svyUUID:"CA7A1E44-0F57-4447-9E47-F8026F163D51",
width:90
},
{
autoResize:false,
dataprovider:"escala_descripcion",
footerStyleClass:"table_field_noBorder_left",
headerTitle:"Descripción",
svyUUID:"333B4299-665F-4DE8-9AAC-44B4622BB7CA",
valuelist:"8DC0160D-3C59-4F2E-B227-A968715AC24F",
width:700
},
{
autoResize:false,
dataprovider:"escala_vigencia",
footerStyleClass:"table_field_noBorder_center",
format:"dd/MM/yyyy",
headerTitle:"Vigencia",
svyUUID:"9999FDA6-BB62-4153-9E11-A92B2ECE7C89",
width:150
},
{
autoResize:false,
headerTitle:"Observaciones",
svyUUID:"7E537176-37D1-48B9-9514-DE3AE7447C90",
width:700
},
{
autoResize:false,
enableResize:false,
enableRowGroup:false,
enableSort:false,
enableToolPanel:false,
styleClass:"table_button_delete_fa_fa",
svyUUID:"2374F411-F8B9-4663-87B2-41F0E689383A",
width:50
}
],
cssPosition:{
bottom:"124",
height:"257",
left:"0",
right:"0",
top:"88",
width:"1312"
},
onCellClick:null,
onCellDoubleClick:"6CF24A2D-ADC7-4DC1-8C96-9C4D96E8A660"
},
name:"groupingtable_2",
typeName:"aggrid-groupingtable",
typeid:47,
uuid:"0DDA38E0-AC4B-4F39-877C-7F06B1F672BF"
},
{
height:84,
partType:1,
typeid:19,
uuid:"11A1B396-1F1C-4FA7-A3F6-FCF927CF5CDF"
},
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
onActionMethodID:"0F20B70C-0B09-4C58-B3BF-EF7BE728DF46",
text:"Nuevo"
},
name:"btn_nuevo",
typeName:"bootstrapcomponents-button",
typeid:47,
uuid:"185E418E-DD42-49F8-8628-4CA557076368"
},
{
cssPosition:"374,0,-1,0,1286,31",
json:{
cssPosition:{
bottom:"-1",
height:"31",
left:"0",
right:"0",
top:"374",
width:"1286"
},
formIndex:0,
styleClass:"lg-titulo",
text:"Detalle de la Escala"
},
name:"label_1c",
styleClass:"lg-titulo",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"53BDF415-4513-48DA-A8F9-65C9562D6843"
},
{
height:358,
partType:2,
typeid:19,
uuid:"64686859-06AC-4D3C-8FE6-5AE751F6CD21"
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
onActionMethodID:"90E6D77D-AD1D-4605-AEFC-AEC2FB8FD71C",
text:"Refrescar"
},
name:"button_18",
typeName:"bootstrapcomponents-button",
typeid:47,
uuid:"75AF9EB2-F391-41ED-81D2-073159B5CA40"
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
text:"Escalas de Impuestos"
},
name:"label_1",
styleClass:"lg-titulo",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"A497D933-2787-49E4-A5FF-D614C20CC2EB"
},
{
height:480,
partType:5,
typeid:19,
uuid:"A998D5F2-47FD-42A5-9865-9D4F88A497D4"
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
uuid:"C473FAD1-329A-49A7-854A-9D41ED6BD11D"
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
onActionMethodID:"394A225A-C7C6-4973-8487-05DAA957F9E7",
text:"Volver"
},
name:"button_16",
typeName:"bootstrapcomponents-button",
typeid:47,
uuid:"D7781486-729F-4AF6-A127-4A8829DA6C17"
},
{
cssPosition:"408,0,0,0,1314,72",
json:{
columns:[
{
autoResize:false,
enableResize:false,
enableRowGroup:false,
enableSort:false,
enableToolPanel:false,
svyUUID:"1EE2D11C-6690-4923-8FCE-28FA866502E6",
width:20
},
{
autoResize:false,
dataprovider:"escala_valor_desde",
editType:"TEXTFIELD",
enableResize:false,
enableRowGroup:false,
enableSort:false,
enableToolPanel:false,
format:"#,##0.00|#,##0.00",
headerTitle:"Más de $",
styleClass:"table_field_noBorder_right",
svyUUID:"DD5E4117-8BA4-467B-B742-38DDDCDEADFE",
width:180
},
{
autoResize:false,
dataprovider:"escala_valor_hasta",
editType:"TEXTFIELD",
enableResize:false,
enableRowGroup:false,
enableSort:false,
enableToolPanel:false,
format:"#,##0.00|#,##0.00",
headerTitle:"Hasta $",
styleClass:"table_field_noBorder_right",
svyUUID:"996881AD-C2E0-41DF-A4A6-BAB80668BE4B",
width:180
},
{
autoResize:false,
dataprovider:"escala_valor_base",
editType:"TEXTFIELD",
enableResize:false,
enableRowGroup:false,
enableSort:false,
enableToolPanel:false,
format:"#,##0.00|#,##0.00",
headerTitle:"Importe Fijo",
styleClass:"table_field_noBorder_right",
svyUUID:"9F6F4AD9-C272-4DA1-A08A-204D6E194A83",
width:180
},
{
autoResize:false,
dataprovider:"escala_valor_alicuota",
editType:"TEXTFIELD",
enableResize:false,
enableRowGroup:false,
enableSort:false,
enableToolPanel:false,
format:"#,##0.00|#,##0.00",
headerTitle:"Más el %",
styleClass:"table_field_noBorder_right",
svyUUID:"A7670FBE-CC8A-4D70-92E9-A4B4419449EB",
width:180
},
{
autoResize:false,
dataprovider:"escala_valor_excedente",
editType:"TEXTFIELD",
enableResize:false,
enableRowGroup:false,
enableSort:false,
enableToolPanel:false,
format:"#,##0.00|#,##0.00",
headerTitle:"S/Excedente de $",
styleClass:"table_field_noBorder_right",
svyUUID:"694AE8A3-725D-4F6D-9F0D-2016AF78BB24",
width:180
},
{
svyUUID:"7FC1D637-093B-4DA4-A500-BB32EF45236C",
width:90
}
],
cssPosition:{
bottom:"0",
height:"72",
left:"0",
right:"0",
top:"408",
width:"1314"
},
myFoundset:{
foundsetSelector:"imp_escalas_to_imp_escalas_valores"
},
onColumnDataChange:"63DFFC2F-2F4B-4334-AAC6-63E282518D98"
},
name:"groupingtable_1",
typeName:"aggrid-groupingtable",
typeid:47,
uuid:"E1784197-6E30-4828-9AA7-51B8ACCD3FC8"
}
],
name:"impuestos_lg_escalas",
navigatorID:"-1",
onShowMethodID:"342AB831-E6DD-49F3-B72E-CCC27A0FEB30",
showInMenu:true,
size:"1314,480",
typeid:3,
uuid:"437C0D56-F1DB-4B59-9A2A-216FED3A8049"