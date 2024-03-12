dataSource:"db:/sistemas/pp_comprobantes_impuestos",
items:[
{
json:{
anchors:0,
location:{
x:160,
y:185
},
size:{
height:24,
width:201
},
styleClass:"lg-right",
text:"Monto No Sujeto a Retencion : "
},
location:"160,185",
name:"label_1cc",
size:"201,24",
styleClass:"lg-right",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"0B2C161E-BFC4-454C-BCC6-7694602781A5"
},
{
height:325,
partType:5,
typeid:19,
uuid:"15012CFB-B845-49D0-BE4A-8EC6E825AB23"
},
{
cssPosition:"37,-1,-1,9,619,26",
json:{
cssPosition:{
bottom:"-1",
height:"26",
left:"9",
right:"-1",
top:"37",
width:"619"
},
dataProviderID:"pp_comprobantes_impuestos_to_pp_comprobantes_enc.comp_tot_to",
editable:false,
format:"#,##0.00",
location:{
x:547,
y:78
},
size:{
height:24,
width:152
},
styleClass:"lg-amarillo lg-field-right",
valuelistID:null
},
location:"547,78",
name:"typeahead_1cccccc",
size:"152,24",
styleClass:"lg-amarillo lg-field-right",
typeName:"bootstrapcomponents-typeahead",
typeid:47,
uuid:"34693179-AB0B-4608-B078-78FB23282DC3"
},
{
json:{
anchors:0,
location:{
x:17,
y:108
},
size:{
height:24,
width:122
},
styleClass:"lg-right",
text:"Aplicación : "
},
location:"17,108",
name:"label_1ccccccccc",
size:"122,24",
styleClass:"lg-right",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"3CC9504B-5BD8-4859-834B-0EC08651364A"
},
{
json:{
anchors:0,
location:{
x:17,
y:49
},
size:{
height:24,
width:122
},
styleClass:"lg-right",
text:"Proveedor : "
},
location:"17,49",
name:"label_1ccccccccccccccc",
size:"122,24",
styleClass:"lg-right",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"56A81BCB-2071-40E6-A967-10FB6F2CBAEB"
},
{
cssPosition:"37,-1,-1,9,619,26",
json:{
cssPosition:{
bottom:"-1",
height:"26",
left:"9",
right:"-1",
top:"37",
width:"619"
},
dataProviderID:"pp_comprobantes_impuestos_to_pp_comprobantes_enc.calc_numero",
editable:false,
location:{
x:156,
y:78
},
size:{
height:24,
width:286
},
styleClass:"lg-amarillo",
valuelistID:null
},
location:"156,78",
name:"typeahead_1cccc",
size:"286,24",
styleClass:"lg-amarillo",
typeName:"bootstrapcomponents-typeahead",
typeid:47,
uuid:"5BDE0A86-D376-4255-A062-BFABD0799F29"
},
{
cssPosition:"545,-1,-1,8,195,44",
json:{
cssPosition:{
bottom:"-1",
height:"44",
left:"8",
right:"-1",
top:"545",
width:"195"
},
dataProviderID:"pp_impu_minimo",
editable:false,
format:"#,##0.00|#,##0.00",
location:{
x:371,
y:155
},
size:{
height:24,
width:160
},
styleClass:"form-control lg-total"
},
location:"371,155",
name:"textbox_total_formas_pago",
size:"160,24",
styleClass:"form-control lg-total",
typeName:"bootstrapcomponents-textbox",
typeid:47,
uuid:"5DA1B64A-3955-4B1F-903B-8EACD8F62E7B"
},
{
cssPosition:"545,-1,-1,8,195,44",
json:{
cssPosition:{
bottom:"-1",
height:"44",
left:"8",
right:"-1",
top:"545",
width:"195"
},
dataProviderID:"pp_impu_base_noimponible",
editable:false,
format:"#,##0.00|#,##0.00",
location:{
x:370,
y:185
},
size:{
height:24,
width:160
},
styleClass:"form-control lg-total"
},
location:"370,185",
name:"textbox_total_formas_pagoccccc",
size:"160,24",
styleClass:"form-control lg-total",
typeName:"bootstrapcomponents-textbox",
typeid:47,
uuid:"5F9D9911-6FEF-4894-968F-FA07894D4B2A"
},
{
cssPosition:"37,-1,-1,9,619,26",
json:{
cssPosition:{
bottom:"-1",
height:"26",
left:"9",
right:"-1",
top:"37",
width:"619"
},
dataProviderID:"provee_id",
editable:false,
location:{
x:156,
y:49
},
onDataChangeMethodID:null,
size:{
height:24,
width:543
},
styleClass:"lg-amarillo",
valuelistID:"3247B359-0084-4001-AED4-6A349D30984F"
},
location:"156,49",
name:"typeahead_1ccccc",
size:"543,24",
styleClass:"lg-amarillo",
typeName:"bootstrapcomponents-typeahead",
typeid:47,
uuid:"81E7B9E8-0317-40AE-8DDA-7C3265C1684B"
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
x:3,
y:3
},
size:{
height:30,
width:708
},
styleClass:"lg-titulo",
tabSeq:-2,
text:""
},
location:"3,3",
name:"lbl_titulo",
size:"708,30",
styleClass:"lg-titulo",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"82216ED9-298F-4108-9BB9-CE66F513E6BA"
},
{
cssPosition:"545,-1,-1,8,195,44",
json:{
cssPosition:{
bottom:"-1",
height:"44",
left:"8",
right:"-1",
top:"545",
width:"195"
},
dataProviderID:"pp_impu_base_imponible",
editable:false,
format:"#,##0.00|#,##0.00",
location:{
x:370,
y:215
},
size:{
height:24,
width:160
},
styleClass:"form-control lg-total"
},
location:"370,215",
name:"textbox_total_formas_pagocccccccccc",
size:"160,24",
styleClass:"form-control lg-total",
typeName:"bootstrapcomponents-textbox",
typeid:47,
uuid:"830DF624-2E11-4E1A-91C6-286847464CE9"
},
{
json:{
anchors:0,
location:{
x:17,
y:78
},
size:{
height:24,
width:122
},
styleClass:"lg-right",
text:"Orden de Pago : "
},
location:"17,78",
name:"label_1ccccccccccccc",
size:"122,24",
styleClass:"lg-right",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"88C373D1-88BF-41EE-962B-6DA0AE7F798E"
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
dataProviderID:"pp_impu_importe",
editable:false,
format:"#,##0.00|#,##0.00",
location:{
x:370,
y:274
},
selectOnEnter:true,
size:{
height:30,
width:160
},
styleClass:"lg-field-total-right"
},
location:"370,274",
name:"textbox_total",
size:"160,30",
styleClass:"lg-field-total-right",
typeName:"bootstrapcomponents-textbox",
typeid:47,
uuid:"8FE41C13-11BD-41AA-B0B8-572A7EF6A126"
},
{
cssPosition:"4,-1,-1,1508,110,24",
formIndex:1,
json:{
cssPosition:{
bottom:"-1",
height:"24",
left:"1508",
right:"-1",
top:"4",
width:"110"
},
formIndex:1,
imageStyleClass:"fa fa-window-close-o",
location:{
x:591,
y:6
},
onActionMethodID:"348C7829-3681-484D-8B61-E34A9ECB5ACE",
size:{
height:24,
width:110
},
text:"Cerrar"
},
location:"591,6",
name:"btn_cerrar",
size:"110,24",
typeName:"bootstrapcomponents-button",
typeid:47,
uuid:"9DCAF716-49D9-44F7-94B8-1412C62FA448"
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
x:160,
y:274
},
placeholderText:"Total RETENCIÓN",
size:{
height:30,
width:201
},
styleClass:"form-control lg-total ",
toolTipText:"Total RETENCIÓN"
},
location:"160,274",
name:"textbox_total_acuenta",
size:"201,30",
styleClass:"form-control lg-total ",
typeName:"bootstrapcomponents-textbox",
typeid:47,
uuid:"A1F918B3-F55F-4563-927A-720C9043870C"
},
{
cssPosition:"37,-1,-1,9,619,26",
json:{
cssPosition:{
bottom:"-1",
height:"26",
left:"9",
right:"-1",
top:"37",
width:"619"
},
dataProviderID:"aplica_id",
editable:false,
location:{
x:156,
y:108
},
size:{
height:24,
width:543
},
styleClass:"lg-amarillo",
valuelistID:"8928FD62-1D4B-4758-B02F-5676A32CC160"
},
location:"156,108",
name:"typeahead_1c",
size:"543,24",
styleClass:"lg-amarillo",
typeName:"bootstrapcomponents-typeahead",
typeid:47,
uuid:"BABB2F00-4B4F-4832-9405-0E05D6B7BE8D"
},
{
cssPosition:"545,-1,-1,8,195,44",
enabled:false,
json:{
cssPosition:{
bottom:"-1",
height:"44",
left:"8",
right:"-1",
top:"545",
width:"195"
},
dataProviderID:"pp_impu_alicuota",
editable:false,
enabled:false,
format:"#,##0.00|#,##0.00",
location:{
x:370,
y:245
},
size:{
height:24,
width:160
},
styleClass:"form-control lg-total"
},
location:"370,245",
name:"textbox_total_formas_pagocc",
size:"160,24",
styleClass:"form-control lg-total",
typeName:"bootstrapcomponents-textbox",
typeid:47,
uuid:"CA30332C-6F09-4D54-8F07-7A187F1A250F"
},
{
json:{
anchors:0,
location:{
x:452,
y:78
},
size:{
height:24,
width:87
},
styleClass:"lg-right",
text:"Importe : "
},
location:"452,78",
name:"label_1cccccccccccccccc",
size:"87,24",
styleClass:"lg-right",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"D57E561B-C7D2-4714-BFF1-B67F4B0F8675"
},
{
json:{
anchors:0,
location:{
x:160,
y:245
},
size:{
height:24,
width:201
},
styleClass:"lg-right",
text:"Alicuota % : "
},
location:"160,245",
name:"label_1ccccc",
size:"201,24",
styleClass:"lg-right",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"D8E7BA83-61DE-49B7-92B1-4FCDAD3727B1"
},
{
json:{
anchors:0,
location:{
x:160,
y:155
},
size:{
height:24,
width:202
},
styleClass:"lg-right",
text:"Monto Minimo de Retencion : "
},
location:"160,155",
name:"label_1ccc",
size:"202,24",
styleClass:"lg-right",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"EA19AF7B-3BA6-4C12-B92F-8B8DEF82969E"
},
{
json:{
anchors:0,
location:{
x:160,
y:215
},
size:{
height:24,
width:201
},
styleClass:"lg-right",
text:"Base Sujeta a Calculo : "
},
location:"160,215",
name:"label_1cccc",
size:"201,24",
styleClass:"lg-right",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"F73FB9EA-FA37-4E2A-B8CE-D178912C8F4C"
}
],
name:"impuestos_lg_detalle_retencion_gan",
navigatorID:"-1",
onShowMethodID:"-1",
scrollbars:36,
showInMenu:true,
size:"715,376",
typeid:3,
uuid:"3B22CA99-7F70-4F97-99C9-670367A78EE8"