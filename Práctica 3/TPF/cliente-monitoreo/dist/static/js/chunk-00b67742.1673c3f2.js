(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-00b67742"],{2455:function(e,t,c){"use strict";c.r(t);var a=c("7a23");function o(e,t,c,o,s,n){var i=Object(a["A"])("OsIndicador");return Object(a["t"])(),Object(a["d"])(i)}var s=Object(a["g"])("h4",null,"Datos del SO desde Socket del equipo:",-1),n={class:"row mt-3"},i={class:"col-3"},r=Object(a["g"])("option",{value:"-1"},"Seleccione equipo...",-1),l=["value"],d={class:"row mt-4"},b={class:"col-5"},u={class:"card border-primary"},O=Object(a["g"])("div",{class:"card-header text-center bg-primary"},[Object(a["g"])("h4",null,"Sistema Operativo utilizado:")],-1),j={class:"card-body text-center bg-dark"},h={class:"card-footer text-center bg-dark"},g={class:"col-5"},f={class:"card border-primary"},m=Object(a["g"])("div",{class:"card-header text-center bg-primary"},[Object(a["g"])("h4",null,"Hostname (nombre del equipo):")],-1),p={class:"card-body text-center bg-dark"},v={class:"card-footer text-center bg-dark"},_={class:"row mt-5"},x={class:"col-5"},y={class:"card border-primary"},k=Object(a["g"])("div",{class:"card-header text-center bg-primary"},[Object(a["g"])("h4",null,"Arcquitectura:")],-1),w={class:"card-body text-center bg-dark"},S={class:"card-footer text-center bg-dark"},q=Object(a["h"])('<div class="col-7"><i class="fa fa-android" style="font-size:140px;color:green;"></i><i class="fa fa-linux me-3" style="font-size:140px;color:black;"></i><i class="fa fa-windows me-3" style="font-size:140px;color:blue;"></i><i class="fa fa-apple me-3" style="font-size:140px;color:white;"></i></div>',1);function C(e,t,c,o,C,z){return Object(a["t"])(),Object(a["f"])("div",null,[s,Object(a["g"])("div",n,[Object(a["g"])("div",i,[Object(a["I"])(Object(a["g"])("select",{onChange:t[0]||(t[0]=function(e){return z.capturaOS()}),"onUpdate:modelValue":t[1]||(t[1]=function(e){return C.equipo=e}),class:"form-select"},[r,(Object(a["t"])(!0),Object(a["f"])(a["a"],null,Object(a["z"])(C.listado,(function(e){return Object(a["t"])(),Object(a["f"])("option",{key:e.direccion_ip,value:e.direccion_ip},Object(a["C"])(e.razon_social),9,l)})),128))],544),[[a["E"],C.equipo]])])]),Object(a["g"])("div",d,[Object(a["g"])("div",b,[Object(a["g"])("div",u,[O,Object(a["g"])("div",j,[Object(a["g"])("h5",null,Object(a["C"])(this.os_oos),1)]),Object(a["g"])("div",h,[Object(a["g"])("h4",null,Object(a["C"])(this.os_name),1)])])]),Object(a["g"])("div",g,[Object(a["g"])("div",f,[m,Object(a["g"])("div",p,[Object(a["g"])("h5",null,Object(a["C"])(this.osh_hostname),1)]),Object(a["g"])("div",v,[Object(a["g"])("h4",null,Object(a["C"])(this.osh_name),1)])])])]),Object(a["g"])("div",_,[Object(a["g"])("div",x,[Object(a["g"])("div",y,[k,Object(a["g"])("div",w,[Object(a["g"])("h5",null,Object(a["C"])(this.osa_arch),1)]),Object(a["g"])("div",S,[Object(a["g"])("h4",null,Object(a["C"])(this.osa_name),1)])])]),q])])}c("b0c0");var z=c("8055"),I=c.n(z),A={name:"OsIndicador",data:function(){return{equipo:"",os_name:"",os_oos:"",osh_name:"",osh_hostname:"",osa_name:"",osa_arch:"",listado:[]}},methods:{capturaOS:function(){var e=this,t=I()(this.equipo);t.on("os-oos",(function(t){e.os_name=t.name,e.os_oos=t.data})),t.on("os-hostname",(function(t){e.osh_name=t.name,e.osh_hostname=t.data})),t.on("os-arch",(function(t){e.osa_name=t.name,e.osa_arch=t.data}))},listar_clientes:function(){var e=this;this.axios.get("http://192.168.43.211:5000/clientes").then((function(t){e.listado=t.data}))}},mounted:function(){this.capturaOS(),this.listar_clientes()}},E=c("6b0d"),J=c.n(E);const D=J()(A,[["render",C]]);var F=D,H={name:"OS",components:{OsIndicador:F}};const T=J()(H,[["render",o]]);t["default"]=T},b0c0:function(e,t,c){var a=c("83ab"),o=c("5e77").EXISTS,s=c("e330"),n=c("9bf2").f,i=Function.prototype,r=s(i.toString),l=/^\s*function ([^ (]*)/,d=s(l.exec),b="name";a&&!o&&n(i,b,{configurable:!0,get:function(){try{return d(l,r(this))[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=chunk-00b67742.1673c3f2.js.map