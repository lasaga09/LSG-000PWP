(function(t){function e(e){for(var s,o,r=e[0],l=e[1],c=e[2],d=0,v=[];d<r.length;d++)o=r[d],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&v.push(n[o][0]),n[o]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(e);while(v.length)v.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,o=1;o<a.length;o++){var l=a[o];0!==n[l]&&(s=!1)}s&&(i.splice(e--,1),t=r(r.s=a[0]))}return t}var s={},n={app:0},i=[];function o(t){return r.p+"js/"+({about:"about"}[t]||t)+"."+{about:"31557253"}[t]+".js"}function r(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.e=function(t){var e=[],a=n[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise((function(e,s){a=n[t]=[e,s]}));e.push(a[2]=s);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.src=o(t);var c=new Error;i=function(e){l.onerror=l.onload=null,clearTimeout(d);var a=n[t];if(0!==a){if(a){var s=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+s+": "+i+")",c.name="ChunkLoadError",c.type=s,c.request=i,a[1](c)}n[t]=void 0}};var d=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(e)},r.m=t,r.c=s,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(a,s,function(e){return t[e]}.bind(null,s));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var u=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var s=a("85ec"),n=a.n(s);n.a},"0a97":function(t,e,a){"use strict";var s=a("e1ef"),n=a.n(s);n.a},"1e9b":function(t,e,a){},"2f23":function(t,e,a){"use strict";var s=a("1e9b"),n=a.n(s);n.a},"33f4":function(t,e,a){},"4e92":function(t,e,a){"use strict";var s=a("92db"),n=a.n(s);n.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"nav"}},[a("router-link",{attrs:{to:"/"}},[t._v("Home")]),a("span",{staticClass:"separador"},[t._v("|")]),a("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),t._m(0),a("div",{staticClass:"contenido container"},[a("Carrusel")],1),a("div",{staticClass:"container"},[a("router-view")],1),a("div",{staticClass:"container"},[a("foter")],1)])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"redes"},[s("div",{staticClass:"mes"},[s("a",{attrs:{href:"https://m.me/lsgstone",target:"_blank"}},[s("img",{attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Facebook_Messenger_4_Logo.svg/1200px-Facebook_Messenger_4_Logo.svg.png",width:"44",alt:""}})])]),s("div",{staticClass:"wa"},[s("a",{attrs:{href:"https://api.whatsapp.com/send?phone=51959258233&text=Hola%20quiero%20info",target:"_blank"}},[s("img",{attrs:{src:a("dd53"),width:"50",alt:""}})])])])}],o=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("div",{staticClass:"carousel slide",attrs:{id:"carouselExampleIndicators","data-ride":"carousel"}},[s("ol",{staticClass:"carousel-indicators"},[s("li",{staticClass:"active",attrs:{"data-target":"#carouselExampleIndicators","data-slide-to":"0"}}),s("li",{attrs:{"data-target":"#carouselExampleIndicators","data-slide-to":"1"}}),s("li",{attrs:{"data-target":"#carouselExampleIndicators","data-slide-to":"2"}})]),s("div",{staticClass:"carousel-inner"},[s("div",{staticClass:"carousel-item active item"},[s("img",{staticClass:"d-block w-100",attrs:{src:a("67d9"),height:"1326",width:"2030",alt:"..."}}),s("div",{staticClass:"carousel-caption d-none d-md-block"},[s("h5",[t._v("uno slide label")]),s("p",[t._v("Nulla vitae elit libero, a pharetra augue mollis interdum.")])])]),s("div",{staticClass:"carousel-item item"},[s("img",{staticClass:"d-block w-100",attrs:{src:"https://tec.mx/sites/default/files/styles/header_full/public/2018-11/Programer.jpg?itok=c5V9xXKc",height:"450",width:"700",alt:"..."}}),s("div",{staticClass:"carousel-caption d-none d-md-block"},[s("h5",[t._v("dos slide label")]),s("p",[t._v("Nulla vitae elit libero, a pharetra augue mollis interdum.")])])]),s("div",{staticClass:"carousel-item item"},[s("img",{staticClass:"d-block w-100",attrs:{src:"https://previews.123rf.com/images/alexandersikov/alexandersikov1710/alexandersikov171000470/88703009-concepto-de-negocio-de-sistema-de-proceso-de-tecnolog%C3%ADa-de-software-de-automatizaci%C3%B3n-.jpg",height:"500",width:"850",alt:"..."}}),s("div",{staticClass:"carousel-caption d-none d-md-block"},[s("h5",[t._v("tres slide label")]),s("p",[t._v("Nulla vitae elit libero, a pharetra augue mollis interdum.")])])])]),s("a",{staticClass:"carousel-control-prev",attrs:{href:"#carouselExampleIndicators",role:"button","data-slide":"prev"}},[s("span",{staticClass:"carousel-control-prev-icon",attrs:{"aria-hidden":"true"}}),s("span",{staticClass:"sr-only"},[t._v("Previous")])]),s("a",{staticClass:"carousel-control-next",attrs:{href:"#carouselExampleIndicators",role:"button","data-slide":"next"}},[s("span",{staticClass:"carousel-control-next-icon",attrs:{"aria-hidden":"true"}}),s("span",{staticClass:"sr-only"},[t._v("Next")])])])])}],l={name:"home"},c=l,d=(a("d8e1"),a("2877")),u=Object(d["a"])(c,o,r,!1,null,null,null),v=u.exports,m=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},p=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pie mt-4"},[a("div",{staticClass:"row m-2 justify-content-around"},[a("div",{staticClass:"col-4"},[a("p",[t._v("QUE REALIZAMOS?")]),a("div",[t._v("Web coorporativos")]),a("div",[t._v("Desarrollo web a medida")]),a("div",[t._v("Alojamiento en VPS")]),a("div",[t._v("Apis rest")])]),a("div",{staticClass:"col-8"},[a("p",[t._v("PONEMOS EN MARCHA LA IDEA DE PROYECTO QUE TENGAS?")]),a("div",[t._v("LIMA-PERU 2019")]),a("div",[t._v("Email: amadorccasaniarche@gmail.com")]),a("div",[t._v("Cell: +51941840858")])])])])}],f={},h=f,_=(a("2f23"),Object(d["a"])(h,m,p,!1,null,null,null)),g=_.exports,C={components:{Carrusel:v,foter:g},mounted:function(){}},b=C,E=(a("034f"),Object(d["a"])(b,n,i,!1,null,null,null)),w=E.exports,y=(a("d3b7"),a("8c4f")),x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"home"}},[a("div",{staticClass:"mt-4"}),t._m(0),a("Card"),a("hr"),a("apis")],1)},S=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"jumbotron"},[a("h1",{staticClass:"display-3 dsoft"},[t._v("DESARROLLO DE SOFTWARE A TU MEDIDA")]),a("p",{staticClass:"lead"}),a("hr",{staticClass:"m-y-md"}),a("p",{},[t._v("Dedicados al desarrollo de software con alojamiento en vps con "),a("strong",[t._v("soporte 24/7")])])])}],O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card"},[a("div",{staticClass:"m-2"},[t._m(0),a("div",{staticClass:"row"},t._l(t.servicios,(function(e){return a("div",{key:e.slug,staticClass:"col-12 col-sm-6 col-md-4 "},[a("div",{staticClass:"cards text-center"},[a("div",{staticClass:"card-body border border-secondary"},[a("h4",{staticClass:"card-title"},[t._v(t._s(e.title))]),a("p",{staticClass:"card-text"},[t._v(t._s(e.descripcion))]),e.estado?a("p",[a("strong",{staticClass:"text-success"},[t._v("En Produccion")])]):a("p",[a("strong",{staticClass:"text-warning "},[t._v("En Proceso")])]),a("a",{staticClass:"btn btn-primary",attrs:{href:"#"}},[t._v("Ver Detalles")])])])])})),0)])])},A=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("h2",{staticClass:"servicios tservice"},[t._v("SERVICIOS QUE OFRECEMOS")])])])}],k={data:function(){return{servicios:[{title:"SISTEMA DE VENTAS MULTISUCURSAL",slug:"ventas",descripcion:"Sistema de ventas con facturacion Electronica con el standar de UML 2.1",url:"",estado:!1},{title:"SISTEMA DE ESTACIONAMIENTO",slug:"estacion",descripcion:"Control de Salida y Entrada de vehiculos con codigo QR",url:"",estado:!0},{title:"SISTEMA DE CONTROL HOTEL",slug:"hotel",descripcion:"Control de ingreso salida,horas,habitaciones disponibles...",url:"",estado:!1}]}},mounted:function(){}},j=k,P=(a("0a97"),a("98c4"),Object(d["a"])(j,O,A,!1,null,null,null)),I=P.exports,D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card"},[a("div",{staticClass:"m-2"},[t._m(0),a("div",{staticClass:"row"},t._l(t.servicios,(function(e){return a("div",{key:e.slug,staticClass:"col-12 col-sm-6 col-md-3"},[a("div",{staticClass:"card text-center"},[a("div",{staticClass:"card-body"},[a("transition",{attrs:{name:"slide-fade",mode:"out-in"}},[a("router-link",{staticClass:"btn btn-default lead apis",attrs:{to:{name:"apis",params:{slug:e.slug}}}},[e.estado?a("i",[a("strong",{staticClass:"text"},[t._v(t._s(e.title)+" ")]),t._v(" "),a("i",{staticClass:"fas fa-check-circle"})]):a("i",[a("strong",{staticClass:"text"},[t._v(t._s(e.title))]),t._v(" "),a("i",{staticClass:"fas fa-calendar-week"})])])],1)],1)])])})),0)])])},T=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("h2",{staticClass:"servicios tapi"},[t._v("APIS REST")])])])}],$={data:function(){return{servicios:[{title:"consultas reniec",slug:"reniec",url:"",estado:!0},{title:"moneda a letra",slug:"moneda",url:"",estado:!0},{title:"ubigeo",slug:"ubigeo",url:"",estado:!1},{title:"ubigeo",slug:"ubigeo2",url:"",estado:!1}]}},mounted:function(){localStorage.setItem("apis",JSON.stringify(this.servicios))}},M=$,N=(a("af08"),Object(d["a"])(M,D,T,!1,null,null,null)),L=N.exports,R={name:"home",components:{Card:I,apis:L}},U=R,V=(a("cccb"),Object(d["a"])(U,x,S,!1,null,null,null)),F=V.exports,H=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Q=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about"},[a("h1",[t._v("This is an detalles page")])])}],q={},J=Object(d["a"])(q,H,Q,!1,null,null,null),B=J.exports,W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about"},[a("div",{staticClass:"mt-2"},[a("apis")],1),a("div",{staticClass:"row justify-content-center text-center"},[a("strong",{staticClass:"lead"},[t._v("Demo "+t._s(this.$route.params.slug))])]),a("transition",{attrs:{name:"slide-fade"}},["reniec"==this.$route.params.slug?a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-12 col-sm-6 text-center"},[a("hr"),a("form",{staticClass:"form-inline"},[a("div",{staticClass:"col-8"},[a("label",{staticClass:"sr-only",attrs:{for:"inputPassword2"}},[t._v("Ingresar DNI")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.dni,expression:"dni"}],staticClass:"form-control",attrs:{type:"text",id:"inputPassword2",placeholder:"12345678",maxlength:"8"},domProps:{value:t.dni},on:{keypress:t.numeros,input:[function(e){e.target.composing||(t.dni=e.target.value)},t.digitos]}})]),a("div",{staticClass:"col"},[a("button",{staticClass:"btn btn-info form-control",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.reniec(e)}}},[t._v("Consultar")])])]),a("hr")])]):t._e()]),a("transition",{attrs:{name:"slide-fade"}},["moneda"==this.$route.params.slug?a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-12 col-sm-6 text-center"},[a("hr"),a("form",{staticClass:"form-inline"},[a("div",{staticClass:"col"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.moneda,expression:"moneda"}],staticClass:"form-control",attrs:{type:"text",id:"moneda",placeholder:"50.56",required:""},domProps:{value:t.moneda},on:{keypress:t.solodecimal,input:function(e){e.target.composing||(t.moneda=e.target.value)}}})]),a("div",{staticClass:"col"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.tmoneda,expression:"tmoneda"}],staticClass:"form-control",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.tmoneda=e.target.multiple?a:a[0]}}},t._l(t.tipomoneda,(function(e){return a("option",{key:e.valor,domProps:{value:e.valor}},[t._v(" "+t._s(e.nombre)+" ")])})),0)]),a("div",{staticClass:"col"},[t.mmoneda?a("div",[a("button",{staticClass:"btn btn-info form-control",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.limpiarmoneda(e)}}},[t._v("Nuevo")])]):a("div",[a("button",{staticClass:"btn btn-info form-control",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.convertirMoneda(e)}}},[t._v("Consultar")])])])]),a("hr"),a("div",{staticClass:"row m-2"},[a("div",{staticClass:"col-12 alert alert-info",attrs:{role:"alert"}},[a("strong",[t._v("Nota!")]),t._v(" El limite del Monto de esta api es 9999 999 999 ")])])])]):t._e()]),a("transition",{attrs:{name:"slide-fade"}},["ubigeo"==this.$route.params.slug?a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-12 col-sm-6 text-center"},[a("hr"),a("div",{staticClass:"alert alert-warning",attrs:{role:"alert"}},[a("strong",[t._v("En proceso!")]),t._v(" Api de ubigeo estara listo pronto ")]),a("hr")])]):t._e()]),a("transition",{attrs:{name:"slide-fade"}},["reniec"==this.$route.params.slug?a("div",{staticClass:"row justify-content-center text-center m-1"},[t.mdni?a("div",{staticClass:"col-12 col-sm-6 card border-2 border-success "},[a("div",{staticClass:"text-center m-2"},[a("strong",[t._v("RESPUESTA DE LA APIREST")])]),a("div",{staticClass:"m-2 text-left"},[a("div",[a("span",[a("strong",[t._v("DNI :")]),t._v(" "+t._s(t.ddni.dni))])]),a("div",[a("span",[a("strong",[t._v("NOMBRES :")]),t._v(" "+t._s(t.ddni.nombres))])]),a("div",[a("span",[a("strong",[t._v("APELLIDOS :")]),t._v(" "+t._s(t.ddni.apellidos))])])])]):t._e()]):t._e()]),a("transition",{attrs:{name:"slide-fade"}},["moneda"==this.$route.params.slug?a("div",{staticClass:"row justify-content-center text-center m-1"},[t.mmoneda?a("div",{staticClass:"col-12 col-sm-6 card border-2 border-success "},[a("div",{staticClass:"text-center m-2"},[a("strong",[t._v("RESPUESTA DE LA APIREST")])]),a("div",{staticClass:"m-2 text-left"},[a("div",[a("span",[a("strong",[t._v(t._s(t.moneda)+" :")]),t._v(" "+t._s(t.dmoneda))])])])]):t._e()]):t._e()])],1)},z=[],G=(a("fb6a"),a("ac1f"),a("5319"),a("bc3a")),K=a.n(G),X={data:function(){return{slug:"",dni:"",ddni:"",mdni:!1,tmoneda:4,moneda:"",dmoneda:"",mmoneda:!1,show:!0,tipomoneda:[{nombre:"DOLARES",valor:2},{nombre:"SOLES",valor:4},{nombre:"EUROS",valor:3}]}},components:{apis:L},mounted:function(){},updated:function(){this.slug=this.$route.params.slug},methods:{convertirMoneda:function(){var t=this,e="http://apis.ccasanisoft.com/api/v1/general/money";""!=this.moneda?K.a.post(e,{amount:this.moneda,currency:this.tmoneda}).then((function(e){t.dmoneda=e.data,t.mmoneda=!0})):alert("Valor no valido")},reniec:function(){var t=this,e="http://apis.ccasanisoft.com/api/v1/general/reniec";K.a.post(e,{dni:this.dni}).then((function(e){0!=e.data?(t.mdni=!0,t.ddni=e.data,t.dni=""):(t.$alertify.alert("Aviso !","El Nro: "+t.dni+" es incorrecto | no fue encontrado"),t.mdni=!1,t.dni="")}))},numeros:function(t){var e=window.event?t.which:t.keyCode;(e<48||e>57)&&t.preventDefault()},digitos:function(t){this.dni.length>8&&t.preventDefault(),this.dni=this.dni.slice(0,8)},solodecimal:function(){this.moneda=this.moneda.replace(/[^0-9,.]/g,"").replace(/,/g,".")},limpiarmoneda:function(){this.moneda="",this.mmoneda=!1}}},Y=X,Z=(a("4e92"),Object(d["a"])(Y,W,z,!1,null,null,null)),tt=Z.exports;s["a"].use(y["a"]);var et=[{path:"/",name:"home",component:F},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/:slug",name:"detalles",component:B},{path:"/apis/:slug",name:"apis",component:tt}],at=new y["a"]({mode:"history",base:"/",routes:et}),st=at,nt=a("50cf");s["a"].use(nt["a"]),s["a"].config.productionTip=!1,new s["a"]({router:st,render:function(t){return t(w)}}).$mount("#app")},"5ced":function(t,e,a){},"67d9":function(t,e,a){t.exports=a.p+"img/uno.26ed3429.jpg"},"7cb7":function(t,e,a){},"85ec":function(t,e,a){},"92db":function(t,e,a){},"98c4":function(t,e,a){"use strict";var s=a("33f4"),n=a.n(s);n.a},af08:function(t,e,a){"use strict";var s=a("d58d"),n=a.n(s);n.a},cccb:function(t,e,a){"use strict";var s=a("5ced"),n=a.n(s);n.a},d58d:function(t,e,a){},d8e1:function(t,e,a){"use strict";var s=a("7cb7"),n=a.n(s);n.a},dd53:function(t,e,a){t.exports=a.p+"img/wa.4a188764.png"},e1ef:function(t,e,a){}});
//# sourceMappingURL=app.9b66baef.js.map