customProperties:"formComponent:false,\
useCssPosition:true",
dataSource:"db:/sistemas/imp_tipo_impuestos",
encapsulation:76,
items:[
{
cssPosition:"262,-1,-1,534,97,30",
formIndex:2,
json:{
cssPosition:{
bottom:"-1",
height:"30",
left:"534",
right:"-1",
top:"262",
width:"97"
},
dataProviderID:"vl_alicuota",
formIndex:2,
format:"#,##0.00|#,##0.00",
selectOnEnter:true,
styleClass:"form-control lg-field-right"
},
name:"vl_alicuota",
styleClass:"form-control lg-field-right",
typeName:"bootstrapcomponents-textbox",
typeid:47,
uuid:"0894F853-CE55-409D-83F8-692BFA8C059C"
},
{
cssPosition:"81,-1,-1,445,45,30",
json:{
cssPosition:{
bottom:"-1",
height:"30",
left:"445",
right:"-1",
top:"81",
width:"45"
},
styleClassExpression:null,
text:"Tipo :",
toolTipText:"Bco Cta Estado"
},
name:"label_474c",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"11DBB7B0-ABBA-4AF5-904B-887B5D6CB79F"
},
{
cssPosition:"263,-1,-1,746,96,30",
formIndex:6,
json:{
cssPosition:{
bottom:"-1",
height:"30",
left:"746",
right:"-1",
top:"263",
width:"96"
},
dataProviderID:"vl_alicuota_noins",
formIndex:6,
format:"#,##0.00|#,##0.00",
selectOnEnter:true,
styleClass:"form-control lg-field-right"
},
name:"vl_alicuota_noins",
styleClass:"form-control lg-field-right",
typeName:"bootstrapcomponents-textbox",
typeid:47,
uuid:"142A971C-FF60-4005-A1D2-E32789EC241F"
},
{
cssPosition:"80,-1,-1,13,80,30",
json:{
cssPosition:{
bottom:"-1",
height:"30",
left:"13",
right:"-1",
top:"80",
width:"80"
},
styleClassExpression:null,
text:"Categoria :",
toolTipText:"Bco Cta Descripcion"
},
name:"label_690cccccccccc",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"17AEAE4C-85BD-46C9-9C33-EAD0AF2A0B29"
},
{
cssPosition:"81,-1,-1,833,85,30",
json:{
cssPosition:{
bottom:"-1",
height:"30",
left:"833",
right:"-1",
top:"81",
width:"85"
},
styleClassExpression:null,
text:"Aplicación :",
toolTipText:"Bco Cta Estado"
},
name:"label_474",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"1EB986F8-27B2-4A2F-9A8B-2E6B603357B1"
},
{
cssPosition:"226,-1,-1,431,94,30",
formIndex:5,
json:{
cssPosition:{
bottom:"-1",
height:"30",
left:"431",
right:"-1",
top:"226",
width:"94"
},
formIndex:5,
styleClassExpression:null,
text:"Mínimo a Ret.:",
toolTipText:"Importe Mínimo de Retención"
},
name:"label_690ccccc",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"1F92A025-FE98-4429-B0B3-76B683068B0C"
},
{
height:689,
partType:5,
typeid:19,
uuid:"2EC97022-362A-40A2-AA4D-728D173881D7"
},
{
cssPosition:"262,-1,-1,334,85,30",
formIndex:11,
json:{
cssPosition:{
bottom:"-1",
height:"30",
left:"334",
right:"-1",
top:"262",
width:"85"
},
dataProviderID:"vl_resolucion",
formIndex:11,
selectOnEnter:false,
styleClass:"form-control lg-field-right"
},
name:"vl_resolucion",
styleClass:"form-control lg-field-right",
typeName:"bootstrapcomponents-textbox",
typeid:47,
uuid:"34EF753F-ED09-4A85-89B1-06A48C695569"
},
{
cssPosition:"225,-1,-1,533,98,30",
formIndex:4,
json:{
cssPosition:{
bottom:"-1",
height:"30",
left:"533",
right:"-1",
top:"225",
width:"98"
},
dataProviderID:"vl_minimo",
formIndex:4,
format:"#,##0.00|#,##0.00",
selectOnEnter:true,
styleClass:"form-control lg-field-right"
},
name:"vl_minimo",
styleClass:"form-control lg-field-right",
typeName:"bootstrapcomponents-textbox",
typeid:47,
uuid:"38C9BF59-31D5-4F4B-8897-B342A1B4D17D"
},
{
cssPosition:"388,-1,-1,2,1144,242",
formIndex:6,
json:{
columns:[
{
autoResize:false,
enableResize:false,
enableRowGroup:false,
enableSort:false,
enableToolPanel:false,
styleClass:"table_button_detail_fa_fa",
svyUUID:"9DA240AA-A5C5-4443-AF0F-6B0DB4C3BA58",
width:30
},
{
autoResize:false,
dataprovider:"aplica_descripcion",
enableResize:false,
enableRowGroup:false,
enableToolPanel:false,
headerTitle:"Descripción",
svyUUID:"4038BDAF-526C-409F-BE96-9743221AFD34",
width:200
},
{
autoResize:false,
dataprovider:"aplica_regimen",
enableRowGroup:false,
enableToolPanel:false,
headerTitle:"Cód. reg.",
styleClass:"table_field_noBorder_center",
svyUUID:"AFACB70B-CBC3-40C4-A834-518496D1EAA6",
width:100
},
{
autoResize:false,
dataprovider:"aplica_resolucion",
enableRowGroup:false,
enableToolPanel:false,
headerTitle:"RG N°",
styleClass:"table_field_noBorder_center",
svyUUID:"974CBFD8-7900-4286-B9CB-8D8EE6924378",
width:80
},
{
autoResize:false,
dataprovider:"aplica_vigencia",
enableRowGroup:false,
enableToolPanel:false,
format:"dd/MM/yyyy",
headerTitle:"Vigencia",
styleClass:"table_field_noBorder_center",
svyUUID:"7F4C0CE8-BCDC-48B5-955E-44E67AF9EE4A",
width:100
},
{
autoResize:false,
dataprovider:"aplica_base_noimponible",
enableRowGroup:false,
enableToolPanel:false,
format:"#,##0.00",
headerTitle:"Base no imp.",
styleClass:"table_field_noBorder_right",
svyUUID:"9740FFDE-0A4B-4948-8F98-7054637DB3BE",
width:115
},
{
autoResize:false,
dataprovider:"aplica_minimo",
enableRowGroup:false,
enableToolPanel:false,
format:"#,##0.00",
headerTitle:"Mínimo",
styleClass:"table_field_noBorder_right",
svyUUID:"C8CC1F82-EA41-4D83-B1B9-BEEAA1A39555",
width:110
},
{
autoResize:false,
dataprovider:"aplica_alicuota",
enableRowGroup:false,
enableToolPanel:false,
format:"#,##0.00",
headerTitle:"Alíc. %",
styleClass:"table_field_noBorder_right",
svyUUID:"EE6858CB-94E5-44EB-B663-323E3399ACA1",
width:90
},
{
autoResize:false,
dataprovider:"aplica_usa_escala",
enableRowGroup:false,
enableToolPanel:false,
headerTitle:"Escala",
styleClass:"table_field_noBorder_center",
svyUUID:"5E69F33F-DBAE-4147-B5BF-6930DC93303E",
valuelist:"99C7B193-9A51-4762-8491-2B0CBACC1EB1",
width:80
},
{
autoResize:false,
dataprovider:"escala_id",
enableRowGroup:false,
enableToolPanel:false,
headerTitle:"Tipo Escala",
styleClass:"table_field_noBorder_left",
svyUUID:"92CCD86A-FC55-435F-B308-4DCFFCACF977",
valuelist:"3087974B-63DE-42B8-B1D7-7EF3C97E9581",
width:120
},
{
autoResize:false,
dataprovider:"provincia_id",
enableResize:false,
enableRowGroup:false,
enableSort:false,
enableToolPanel:false,
headerTitle:"Provincia",
styleClass:"table_field_noBorder_left",
svyUUID:"B377FB16-CEAC-414C-809D-4ECF39B3B4AE",
valuelist:"2DA0D77B-CEC3-48EE-9782-1822B78C6073",
width:120
},
{
autoResize:false,
enableResize:false,
enableRowGroup:false,
enableSort:false,
enableToolPanel:false,
styleClass:"table_button_delete_fa_fa",
svyUUID:"12AE5A63-8A69-4558-AA18-C0B68770ED9E",
width:30
}
],
cssPosition:{
bottom:"-1",
height:"242",
left:"2",
right:"-1",
top:"388",
width:"1144"
},
formIndex:6,
myFoundset:{
foundsetSelector:"imp_tipo_impuestos_to_imp_tipo_impuestos_aplicacion"
},
onCellClick:"854164C8-D07A-46E4-B2D0-7468AD1A0DAF"
},
name:"groupingtable_1",
typeName:"aggrid-groupingtable",
typeid:47,
uuid:"4133E7C6-1F3B-4A62-83A7-78B1507A9F83"
},
{
cssPosition:"262,-1,-1,259,70,30",
formIndex:16,
json:{
cssPosition:{
bottom:"-1",
height:"30",
left:"259",
right:"-1",
top:"262",
width:"70"
},
formIndex:16,
styleClassExpression:null,
text:"RG N°:",
toolTipText:"Número de Régimen"
},
name:"label_690ccc",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"431CB2D3-B6E9-4FE5-A767-D84D9E2B7768"
},
{
cssPosition:"262,-1,-1,647,94,30",
formIndex:3,
json:{
cssPosition:{
bottom:"-1",
height:"30",
left:"647",
right:"-1",
top:"262",
width:"94"
},
formIndex:3,
styleClassExpression:null,
text:"Alícuota(%) : ",
toolTipText:"Alícuota de Retención"
},
name:"label_690ccccccccc",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"4432A7B0-9CC9-4476-804B-03F4437477F9"
},
{
cssPosition:"2,2,-1,0,364,35",
json:{
cssPosition:{
bottom:"-1",
height:"35",
left:"0",
right:"2",
top:"2",
width:"364"
},
formIndex:0,
styleClass:"lg-titulo",
text:""
},
name:"lbl_titulo",
styleClass:"lg-titulo",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"46132449-C80C-4E77-B14F-8DF8E39E3FDF"
},
{
cssPosition:"45,-1,-1,13,80,30",
json:{
cssPosition:{
bottom:"-1",
height:"30",
left:"13",
right:"-1",
top:"45",
width:"80"
},
styleClassExpression:null,
text:"Descripción:",
toolTipText:"Bco Cta Descripcion"
},
name:"label_690",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"4CCF328C-B318-4266-B5ED-693D11858E88"
},
{
cssPosition:"80,-1,-1,498,277,30",
json:{
cssPosition:{
bottom:"-1",
height:"30",
left:"498",
right:"-1",
top:"80",
width:"277"
},
dataProviderID:"tipo_imp_cod_comp",
valuelistID:"5CF77177-1D07-46C6-923E-5D9820C6B4CA"
},
name:"tipo_imp_aplicacionc",
typeName:"bootstrapcomponents-combobox",
typeid:47,
uuid:"576EF96A-DA61-4793-A76D-320508EE48CF"
},
{
cssPosition:"299,-1,-1,10,120,30",
formIndex:21,
json:{
cssPosition:{
bottom:"-1",
height:"30",
left:"10",
right:"-1",
top:"299",
width:"120"
},
dataProviderID:"vl_usa_escala",
formIndex:21,
onActionMethodID:"AD178D4E-5FB2-4B41-B00A-CD91561D8F35",
text:"Usa escala"
},
name:"vl_usa_escala",
typeName:"bootstrapcomponents-checkbox",
typeid:47,
uuid:"5A0DAB64-5D2C-45BA-AC12-78A1B2FB07C1"
},
{
cssPosition:"299,-1,-1,141,490,30",
enabled:false,
formIndex:18,
json:{
cssPosition:{
bottom:"-1",
height:"30",
left:"141",
right:"-1",
top:"299",
width:"490"
},
dataProviderID:"vl_escala_id",
enabled:false,
formIndex:18,
valuelistID:"5DFA6A42-EB8E-4DD4-B4D5-1EC80322D644"
},
name:"vl_escala_id",
typeName:"bootstrapcomponents-combobox",
typeid:47,
uuid:"5B5EEDA2-CB1E-4A8B-A67E-5D3F0BA5C1C3"
},
{
cssPosition:"262,-1,-1,431,94,30",
formIndex:8,
json:{
cssPosition:{
bottom:"-1",
height:"30",
left:"431",
right:"-1",
top:"262",
width:"94"
},
formIndex:8,
styleClassExpression:null,
text:"Alícuota(%) : ",
toolTipText:"Alícuota de Retención"
},
name:"label_690ccccccc",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"6BB04E12-E4F9-4D6D-9642-80B02E9F6861"
},
{
cssPosition:"645,-1,-1,446,121,30",
json:{
cssPosition:{
bottom:"-1",
height:"30",
left:"446",
right:"-1",
top:"645",
width:"121"
},
imageStyleClass:"fas fa-save",
onActionMethodID:"2FE60F30-AB34-4735-B0D2-1C6483E55050",
text:"Grabar"
},
name:"button_1",
typeName:"bootstrapcomponents-button",
typeid:47,
uuid:"6DDE284D-1B2B-41DF-98BC-8931FD283036"
},
{
cssPosition:"44,-1,-1,1014,44,30",
json:{
cssPosition:{
bottom:"-1",
height:"30",
left:"1014",
right:"-1",
top:"44",
width:"44"
},
styleClassExpression:null,
text:"ID:",
toolTipText:"Bco Cta Id"
},
name:"label_448",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"6DE23A14-CE31-43D2-8588-C88CC98CAA3D"
},
{
cssPosition:"151,-1,-1,141,492,30",
formIndex:13,
json:{
cssPosition:{
bottom:"-1",
height:"30",
left:"141",
right:"-1",
top:"151",
width:"492"
},
dataProviderID:"vl_descripcion",
formIndex:13
},
name:"vl_descripcion",
typeName:"bootstrapcomponents-textbox",
typeid:47,
uuid:"707B09BF-3F38-4E14-A195-9B2EC561D0CC"
},
{
cssPosition:"188,-1,-1,9,120,30",
formIndex:20,
json:{
cssPosition:{
bottom:"-1",
height:"30",
left:"9",
right:"-1",
top:"188",
width:"120"
},
formIndex:20,
styleClassExpression:null,
text:"Provincia :",
toolTipText:"Detalle de la Retención"
},
name:"label_690ccccccccccc",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"7CD50CC1-9611-4BA8-ADB2-DC024D16C55F"
},
{
cssPosition:"225,-1,-1,259,71,30",
formIndex:15,
json:{
cssPosition:{
bottom:"-1",
height:"30",
left:"259",
right:"-1",
top:"225",
width:"71"
},
formIndex:15,
styleClassExpression:null,
text:"Cód.Reg.:",
toolTipText:"Código de Régimen"
},
name:"label_690cc",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"7DDB9FDC-085E-462D-8E7E-4C3A4335E026"
},
{
cssPosition:"225,-1,-1,333,85,30",
formIndex:12,
json:{
cssPosition:{
bottom:"-1",
height:"30",
left:"333",
right:"-1",
top:"225",
width:"85"
},
dataProviderID:"vl_regimen",
formIndex:12
},
name:"vl_regimen",
typeName:"bootstrapcomponents-textbox",
typeid:47,
uuid:"7DE6AE39-8527-45B5-BE73-B15CD9610B91"
},
{
cssPosition:"45,-1,-1,97,678,30",
json:{
cssPosition:{
bottom:"-1",
height:"30",
left:"97",
right:"-1",
top:"45",
width:"678"
},
dataProviderID:"tipo_imp_descripcion"
},
name:"tipo_imp_descripcion",
typeName:"bootstrapcomponents-textbox",
typeid:47,
uuid:"7DE98C46-AAA8-4AE8-8387-30A67BEB295A"
},
{
cssPosition:"188,-1,-1,141,490,30",
formIndex:18,
json:{
cssPosition:{
bottom:"-1",
height:"30",
left:"141",
right:"-1",
top:"188",
width:"490"
},
dataProviderID:"vl_provincia_id",
formIndex:18,
valuelistID:"2DA0D77B-CEC3-48EE-9782-1822B78C6073"
},
name:"vl_escala_idc",
typeName:"bootstrapcomponents-combobox",
typeid:47,
uuid:"86FAE585-8CDA-45DA-B0EB-736CEE410FB2"
},
{
cssPosition:"80,-1,-1,97,235,30",
json:{
cssPosition:{
bottom:"-1",
height:"30",
left:"97",
right:"-1",
top:"80",
width:"235"
},
dataProviderID:"tipo_imp_categoria",
valuelistID:"D0797E51-A1B0-464E-8ED4-1B6A3F3DF45D",
visible:true
},
name:"tipo_imp_categoria",
typeName:"bootstrapcomponents-combobox",
typeid:47,
uuid:"8D683629-9E91-4798-B9F9-7FD92367B0B0"
},
{
cssPosition:"226,-1,-1,646,94,30",
formIndex:7,
json:{
cssPosition:{
bottom:"-1",
height:"30",
left:"646",
right:"-1",
top:"226",
width:"94"
},
formIndex:7,
styleClassExpression:null,
text:"Mínimo a Ret.:",
toolTipText:"Importe Mínimo de Retención"
},
name:"label_690cccccccc",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"91210E36-528A-41FD-A343-3D40A5E07815"
},
{
cssPosition:"262,-1,-1,10,120,30",
formIndex:17,
json:{
cssPosition:{
bottom:"-1",
height:"30",
left:"10",
right:"-1",
top:"262",
width:"120"
},
formIndex:17,
styleClassExpression:null,
text:"Base no imp.:",
toolTipText:"Base no Imponible"
},
name:"label_690cccccc",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"91DC58E5-46BB-4EB6-9850-018B2B65BA60"
},
{
cssPosition:"198,-1,-1,646,196,22",
formIndex:22,
json:{
cssPosition:{
bottom:"-1",
height:"22",
left:"646",
right:"-1",
top:"198",
width:"196"
},
formIndex:22,
styleClass:"lg-disable lg-center",
text:"Configuración No Iscripto",
toolTipText:"Configuración No Inscripto"
},
name:"label_1c",
styleClass:"lg-disable lg-center",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"92BAC981-D946-47BF-A987-5E346DCA817E"
},
{
cssPosition:"262,-1,-1,141,111,30",
formIndex:9,
json:{
cssPosition:{
bottom:"-1",
height:"30",
left:"141",
right:"-1",
top:"262",
width:"111"
},
dataProviderID:"vl_base_no_imponible",
formIndex:9,
format:"#,##0.00|#,##0.00",
selectOnEnter:true,
styleClass:"form-control lg-field-right"
},
name:"vl_base_no_imponible",
styleClass:"form-control lg-field-right",
typeName:"bootstrapcomponents-textbox",
typeid:47,
uuid:"9BD01F17-14CA-40F1-A0FA-60D2A34D77F8"
},
{
cssPosition:"151,-1,-1,10,120,30",
formIndex:20,
json:{
cssPosition:{
bottom:"-1",
height:"30",
left:"10",
right:"-1",
top:"151",
width:"120"
},
formIndex:20,
styleClassExpression:null,
text:"Descripción:",
toolTipText:"Detalle de la Retención"
},
name:"label_690c",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"A1F7B18C-5CA7-4F43-B522-0E332911E209"
},
{
cssPosition:"225,-1,-1,141,110,30",
formIndex:10,
json:{
cssPosition:{
bottom:"-1",
height:"30",
left:"141",
right:"-1",
top:"225",
width:"110"
},
dataProviderID:"vl_vigencia",
formIndex:10,
format:"dd/MM/yyyy|mask",
pickerOnly:true
},
name:"vl_vigencia",
typeName:"bootstrapcomponents-calendar",
typeid:47,
uuid:"B44ABAE0-51D6-4927-91CD-38C62BEF8ADA"
},
{
cssPosition:"227,-1,-1,746,95,30",
formIndex:1,
json:{
cssPosition:{
bottom:"-1",
height:"30",
left:"746",
right:"-1",
top:"227",
width:"95"
},
dataProviderID:"vl_minimo_noins",
formIndex:1,
format:"#,##0.00|#,##0.00",
selectOnEnter:true,
styleClass:"form-control lg-field-right"
},
name:"vl_minimo_noins",
styleClass:"form-control lg-field-right",
typeName:"bootstrapcomponents-textbox",
typeid:47,
uuid:"C63DA3A9-E85D-41C2-B8DB-0229938A2337"
},
{
cssPosition:"645,-1,-1,578,121,30",
json:{
cssPosition:{
bottom:"-1",
height:"30",
left:"578",
right:"-1",
top:"645",
width:"121"
},
imageStyleClass:"fa fa-share-square",
onActionMethodID:"8237CCDE-A8BD-42C0-B22B-CB83BA21EE04",
text:"Cerrar"
},
name:"button_2",
typeName:"bootstrapcomponents-button",
typeid:47,
uuid:"CB90F419-B7C6-4AF4-A3D2-2DAAC2359FBF"
},
{
cssPosition:"44,-1,-1,1062,51,30",
json:{
cssPosition:{
bottom:"-1",
height:"30",
left:"1062",
right:"-1",
top:"44",
width:"51"
},
dataProviderID:"tipo_imp_id",
editable:false,
styleClass:"form-control lg-center"
},
name:"tipo_imp_id",
styleClass:"form-control lg-center",
typeName:"bootstrapcomponents-textbox",
typeid:47,
uuid:"D6995D1E-9C36-4E2E-A3DB-8E64287348A2"
},
{
cssPosition:"240,calc(135px - 101px),-1,-1,121,30",
formIndex:19,
json:{
cssPosition:{
bottom:"-1",
height:"30",
left:"-1",
right:"calc(135px - 101px)",
top:"240",
width:"121"
},
formIndex:19,
imageStyleClass:"fa fa-plus-square",
onActionMethodID:"5CCB72C2-82BB-4EAA-BC50-73E5818B3E64",
text:"Agregar",
toolTipText:"Agregar"
},
name:"btn_agregar",
typeName:"bootstrapcomponents-button",
typeid:47,
uuid:"DAF65A61-D409-4774-8177-2F92F1CC86B0"
},
{
cssPosition:"81,-1,-1,927,187,30",
json:{
cssPosition:{
bottom:"-1",
height:"30",
left:"927",
right:"-1",
top:"81",
width:"187"
},
dataProviderID:"tipo_imp_aplicacion",
valuelistID:"8A3C062D-B20F-4781-A795-1D035B24DF31"
},
name:"tipo_imp_aplicacion",
typeName:"bootstrapcomponents-combobox",
typeid:47,
uuid:"E6630706-1C46-4380-9EE3-521716E5602D"
},
{
cssPosition:"337,-1,-1,645,390,30",
formIndex:1,
json:{
alignment:"horizontal",
cssPosition:{
bottom:"-1",
height:"30",
left:"645",
right:"-1",
top:"337",
width:"390"
},
dataProviderID:"vl_aplica_sobre_neto",
formIndex:1,
inputType:"radio",
valuelistID:"B6E926EF-0921-4B47-B33C-C9503B59F5F4"
},
name:"choicegroup_1",
typeName:"bootstrapcomponents-choicegroup",
typeid:47,
uuid:"E8E36ED2-3769-421D-A955-DC395D77E9A8"
},
{
cssPosition:"145,4,-1,0,1028,241",
json:{
cssPosition:{
bottom:"-1",
height:"241",
left:"0",
right:"4",
top:"145",
width:"1028"
},
formIndex:0,
styleClass:"lg-titulo",
text:""
},
styleClass:"lg-titulo",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"E96AAE79-6EAA-4308-831E-58967C9F061A"
},
{
cssPosition:"337,-1,-1,141,490,30",
formIndex:18,
json:{
cssPosition:{
bottom:"-1",
height:"30",
left:"141",
right:"-1",
top:"337",
width:"490"
},
dataProviderID:"vl_cta_ctb",
formIndex:18,
valuelistID:"F0AA9D4C-FA73-48D8-8853-49EEC50F5C41"
},
name:"combobox_3c",
typeName:"bootstrapcomponents-combobox",
typeid:47,
uuid:"EA0F9C91-4C9D-4662-8B0D-8FED849F3B51"
},
{
cssPosition:"337,-1,-1,10,120,30",
formIndex:22,
json:{
cssPosition:{
bottom:"-1",
height:"30",
left:"10",
right:"-1",
top:"337",
width:"120"
},
formIndex:22,
text:"Cta.Contable : ",
toolTipText:"Cuenta Contable de Imputación"
},
name:"label_1",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"F95ED0BA-1AE2-46B8-BC3C-6987DAA6A354"
},
{
cssPosition:"120,4,-1,0,1028,24",
json:{
cssPosition:{
bottom:"-1",
height:"24",
left:"0",
right:"4",
top:"120",
width:"1028"
},
formIndex:0,
styleClass:"lg-titulo lg-center",
text:"Formas de aplicación"
},
styleClass:"lg-titulo lg-center",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"F977B1C7-3CCC-4B81-8AC9-1A4A6DE13CE2"
},
{
cssPosition:"225,-1,-1,10,120,30",
formIndex:14,
json:{
cssPosition:{
bottom:"-1",
height:"30",
left:"10",
right:"-1",
top:"225",
width:"120"
},
formIndex:14,
styleClassExpression:null,
text:"Vigencia:",
toolTipText:"Fecha de Vigencia"
},
name:"label_690cccc",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"FC86BF59-919F-4510-AC37-E06CDE8E6C84"
}
],
name:"impuestos_lg_tipos_impuestos_detalle",
navigatorID:"-1",
onHideMethodID:"70955BD5-385B-40E3-B0FE-ABB1C1B9CB04",
onShowMethodID:"911452CB-FBB9-4B24-83C7-B2837246E036",
showInMenu:true,
size:"1150,689",
typeid:3,
uuid:"34F5841C-DCFC-4641-A4BD-F7C8F70C1165"