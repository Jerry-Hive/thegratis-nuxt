(window.webpackJsonp=window.webpackJsonp||[]).push([[8,11],{309:function(e,t,n){"use strict";var o=n(18),r=n(6),l=n(85),c=n(23),f=n(16),d=n(143),h=n(110),y=n(204),v=n(7),m=n(68).f,x=n(33).f,S=n(20).f,w=n(312),O=n(313).trim,j="Number",C=r.Number,P=C.prototype,T=function(e){var t=y(e,"number");return"bigint"==typeof t?t:_(t)},_=function(e){var t,n,o,r,l,c,f,code,d=y(e,"number");if(h(d))throw TypeError("Cannot convert a Symbol value to a number");if("string"==typeof d&&d.length>2)if(43===(t=(d=O(d)).charCodeAt(0))||45===t){if(88===(n=d.charCodeAt(2))||120===n)return NaN}else if(48===t){switch(d.charCodeAt(1)){case 66:case 98:o=2,r=49;break;case 79:case 111:o=8,r=55;break;default:return+d}for(c=(l=d.slice(2)).length,f=0;f<c;f++)if((code=l.charCodeAt(f))<48||code>r)return NaN;return parseInt(l,o)}return+d};if(l(j,!C(" 0o1")||!C("0b1")||C("+0x1"))){for(var N,z=function(e){var t=arguments.length<1?0:C(T(e)),n=this;return n instanceof z&&v((function(){w(n)}))?d(Object(t),n,z):t},I=o?m(C):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),E=0;I.length>E;E++)f(C,N=I[E])&&!f(z,N)&&S(z,N,x(C,N));z.prototype=P,P.constructor=z,c(r,j,z)}},311:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return f})),n.d(t,"d",(function(){return d})),n.d(t,"e",(function(){return h})),n.d(t,"a",(function(){return y}));var o=n(22);n(142),n(42),n(17),n(29),n(43),n(34),n(32),n(44),n(45),n(35);function r(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,o=function(){};return{s:o,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,c=!0,f=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){f=!0,r=e},f:function(){try{c||null==n.return||n.return()}finally{if(f)throw r}}}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}function c(element,e){return window.getComputedStyle(element).getPropertyValue(e)}function f(element){var e,t=r(element.querySelectorAll("video"));try{for(t.s();!(e=t.n()).done;){e.value.pause()}}catch(e){t.e(e)}finally{t.f()}}function d(element){var e,t=r(element.querySelectorAll("video"));try{for(t.s();!(e=t.n()).done;){e.value.play()}}catch(e){t.e(e)}finally{t.f()}}function h(element,e){for(var t=0,n=Object.entries(e);t<n.length;t++){var r=Object(o.a)(n[t],2),l=r[0],c=r[1];element.style[l]=c}}function y(element,e){return window.getComputedStyle(element).getPropertyValue(e)}},312:function(e,t){var n=1..valueOf;e.exports=function(e){return n.call(e)}},313:function(e,t,n){var o=n(28),r=n(21),l="["+n(314)+"]",c=RegExp("^"+l+l+"*"),f=RegExp(l+l+"*$"),d=function(e){return function(t){var n=r(o(t));return 1&e&&(n=n.replace(c,"")),2&e&&(n=n.replace(f,"")),n}};e.exports={start:d(1),end:d(2),trim:d(3)}},314:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},316:function(e,t,n){"use strict";var o=n(84),r=n(317),l={name:"f-page",emits:["before-enter","entered","before-leave","left"],props:{pageId:{type:String},hash:String},setup:function(e){return Object(r.g)(e.hash),{container:Object(o.i)(null)}}},c=n(57),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{ref:"container",staticStyle:{width:"100%",height:"100vh",overflow:"hidden"}},[e._t("default")],2)}),[],!1,null,"0877a82a",null);t.a=component.exports},317:function(e,t,n){"use strict";n.d(t,"h",(function(){return C})),n.d(t,"i",(function(){return P})),n.d(t,"e",(function(){return T})),n.d(t,"c",(function(){return _})),n.d(t,"b",(function(){return N})),n.d(t,"d",(function(){return z})),n.d(t,"f",(function(){return L})),n.d(t,"a",(function(){return k})),n.d(t,"g",(function(){return A}));var o=n(22),r=(n(142),n(58),n(84)),l=n(308),c=n(311);n(59),n(111);function f(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;l.a.to(e,{opacity:0,onComplete:function(){e.style.visibility="hidden"},duration:t})}function d(element,e){for(var t=0,n=Object.entries(e);t<n.length;t++){var r=Object(o.a)(n[t],2),l=r[0],c=r[1];element.style[l]=c}}var h,y,v,m=[],x={},S={},w=Object(r.h)({currentPage:0,hash:void 0,enteringPage:null}),O=!1,j=0;function C(){return Object(r.a)((function(){return w.currentPage}))}function P(){return Object(r.a)((function(){return w.currentPage===_()-1}))}function T(){return w.currentPage===_()-1}function _(){return m.length}function N(){return w.enteringPage}function z(){h||((h=document.createElement("div")).innerHTML="<div>Invisible</div>",document.body.appendChild(h)),Object(r.e)((function(){d(h,{height:100*m.length+"vh",top:"0",position:"absolute","z-index":-1}),E();var e=m[w.currentPage];w.enteringPage=w.currentPage;var t=x[e].container,n=x[e].instance;Object(c.d)(t),l.a.set(t,{display:"flex",top:0}),M(),n.emit("before-enter"),n.emit("entered"),window.addEventListener("scroll",I),window.addEventListener("resize",M),window.addEventListener("hashchange",E,!1),Object(r.l)((function(){return w.currentPage}),(function(e,t){console.log("move page from "+t+" to: "+e),function(e,t){var n=m[e],o=m[t],r=x[n].container,S=x[o].container,w=x[o].hash,j=t-e,C=j>0?"-100vh":"100vh",P=j>0?"100vh":"-100vh",T=x[n].instance,_=x[o].instance;T.emit("before-leave"),_.emit("before-enter"),v&&(l.a.killTweensOf(v),v!==r&&v!==S&&f(v));y&&(l.a.killTweensOf(y),y!==r&&y!==S&&f(y));Object(c.c)(r),setTimeout((function(){d(h,j<0?{height:"110vh"}:{height:100*t+20+"vh"})}),100),l.a.killTweensOf(S),l.a.killTweensOf(r),y=r,v=S,l.a.set(S,{top:P,display:"flex",visibility:"visible",opacity:1}),l.a.to(r,{top:C,ease:"power4.out",duration:1}),l.a.to(S,{top:0,onComplete:function(){var e,t,n;y=v=null,T.emit("left"),_.emit("entered"),Object(c.d)(S),M(),w?location.hash=w:(n=window.location,"pushState"in history?history.pushState("",document.title,n.pathname+n.search):(e=document.body.scrollTop,t=document.body.scrollLeft,n.hash="",document.body.scrollTop=e,document.body.scrollLeft=t))},ease:"power4.out",duration:1}),O=!0}(t,e)}))})),Object(r.f)((function(){window.removeEventListener("scroll",I),window.removeEventListener("resize",M),window.removeEventListener("hashchange",E,!1)}))}function I(e){if(O)return e.preventDefault(),!1;var t=window.scrollY,n=t-j,o=window.innerHeight;if(!(Math.abs(n)<6)){var r=Math.round(n/o);Math.abs(r)<1&&(r=n>0?1:-1),w.currentPage+=r,j=t}}function E(){var e=location.hash;e&&e.length&&(w.hash=e.substr(1),function(){for(var i=0;i<m.length;i++){var e=m[i];if(x[e].hash===w.hash){w.currentPage=i;break}}}())}function L(){w.currentPage++}function k(){w.currentPage=0}function M(){O=!0,function(){d(h,{display:"block",height:100*m.length+"vh"});var e=window.innerHeight,t=w.currentPage*e;window.scrollTo(0,t),j=t}(),setTimeout((function(){O=!1}),100)}function A(e){var t=Object(r.b)(),n=t.uid;m.push(n),x[n]={instance:t,hash:e},S[e]=n,Object(r.e)((function(){var e=t.refs.container;x[n].container=e,d(e,{position:"absolute",left:"0",display:"none"})}))}},327:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var o=n(144),r=n(145),l=(n(58),n(311)),c={xOffset:"0px",yOffset:"0px",inDelay:10,outDelay:10,duration:1e3,ease:"ease-in-out",opacity:1,hideInitially:!0},f=function(){function e(element,t){var n=this;Object(o.a)(this,e),this.element=void 0,this.options=void 0,this.timeId=void 0,this.currentStat="in",this.options=Object.assign({},c,t),this.element=element;var r=this.options.duration+"ms",f=Object(l.a)(this.element,"transition"),d={transition:(f.length?f+",":"")+"transform "+r+",opacity "+r,opacity:this.options.hideInitially?0:this.options.opacity,transform:"translate("+this.options.xOffset+","+this.options.yOffset+")",visibility:this.options.hideInitially?"hidden":""};Object(l.e)(element,d),this.element.addEventListener("transitionend",(function(e){e.target===n.element&&"out"===n.currentStat&&(n.element.style.visibility="hidden")}))}return Object(r.a)(e,[{key:"in",value:function(e){var t=this;clearTimeout(this.timeId),this.currentStat="in",this.element.style.visibility="visible",this.timeId=setTimeout((function(){Object(l.e)(t.element,{opacity:t.options.opacity,transform:"translate(0px,0px)"})}),e?10:this.options.inDelay)}},{key:"out",value:function(e){var t=this;clearTimeout(this.timeId),this.currentStat="out",this.timeId=setTimeout((function(){Object(l.e)(t.element,{opacity:0,transform:"translate("+t.options.xOffset+","+t.options.yOffset+")",transitionTimingFunction:t.options.ease})}),e?10:this.options.outDelay)}}]),e}()},340:function(e,t,n){var content=n(370);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(141).default)("6df0dd45",content,!0,{sourceMap:!1})},341:function(e,t,n){var content=n(372);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(141).default)("2e67b72b",content,!0,{sourceMap:!1})},342:function(e,t,n){var content=n(374);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(141).default)("5a8986b4",content,!0,{sourceMap:!1})},369:function(e,t,n){"use strict";n(340)},370:function(e,t,n){var o=n(140)((function(i){return i[1]}));o.push([e.i,"#container[data-v-3620c004]{position:absolute}.dummy-mouse-receiver[data-v-3620c004]{opacity:0;position:absolute;z-index:9999999;right:0;cursor:pointer;border:1px solid red;user-select:none}.dot[data-v-3620c004],.dummy-mouse-receiver[data-v-3620c004]{left:0;transform:translate(-50%,-50%)}.dot[data-v-3620c004]{border-radius:50%;top:0;transition:all .8s ease-in-out}.scale0[data-v-3620c004]{transform:translate(-50%,-50%) scale(2);opacity:0}.scale1[data-v-3620c004]{transform:translate(-50%,-50%) scale(1);opacity:1}.thin-line[data-v-3620c004]{border-left-width:1px;border-left-style:solid;width:1px;bottom:0}.label[data-v-3620c004],.thin-line[data-v-3620c004]{left:0;position:absolute}.label[data-v-3620c004]{transform:translate(-50%,-100%);white-space:nowrap;user-select:none}",""]),o.locals={},e.exports=o},371:function(e,t,n){"use strict";n(341)},372:function(e,t,n){var o=n(140)((function(i){return i[1]}));o.push([e.i,"#container[data-v-141e213e]{position:absolute;transform:translateX(-50%);border:1px solid #00f}.origin-center[data-v-141e213e]{transform:translate(-50%,-50%)}.dot[data-v-141e213e]{position:absolute;border-radius:50%;left:0;transition:transform .8s ease-in-out,opacity 1s ease-in}.scale0[data-v-141e213e]{transform:translate(-50%,-50%) scale(2);opacity:0}.scale1[data-v-141e213e]{transform:translate(-50%,-50%) scale(1);opacity:1}.thin-line[data-v-141e213e]{border-left-width:1px;border-left-style:solid;width:1px;left:0;flex-grow:1;transition:all .8s ease-in-out}.label[data-v-141e213e],.thin-line[data-v-141e213e]{transform:translateX(-50%)}.label[data-v-141e213e]{white-space:nowrap;user-select:none}.dummy[data-v-141e213e],.label[data-v-141e213e]{flex-grow:0}",""]),o.locals={},e.exports=o},373:function(e,t,n){"use strict";n(342)},374:function(e,t,n){var o=n(140)((function(i){return i[1]}));o.push([e.i,"*[data-v-23484b42]{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}[data-v-23484b42]:after,[data-v-23484b42]:before{-webkit-box-sizing:inherit;-moz-box-sizing:inherit;box-sizing:inherit}.viewport[data-v-23484b42]{position:absolute;top:0;left:0;width:100%;height:100%;overflow:hidden;z-index:-1}img[data-v-23484b42]{display:block}.container[data-v-23484b42]{height:100%;width:100%;overflow:hidden;position:relative}",""]),o.locals={},e.exports=o},375:function(e){e.exports=JSON.parse('{"styles":{"poiHeight":100,"poiStyle":"","color":"","labelStyle":"","lineThickness":"1px","dotSize":"5px","heroDotSize":"10px"},"gratis":{"x":1160,"y":1348,"labelUrl":"images/logo-white.png"},"cbd":{"x":1035,"y":985,"labelText":"Melbourne<br/>CBD (8km)"},"pins":[{"x":928,"y":1357,"label":"Camberwell<br/>Girls Grammar"},{"x":165,"y":1218,"label":"Camberwell Junction<br/>Shopping Precinct"},{"x":208,"y":1188,"label":"Village Cinemas<br/>Rivoli"},{"x":250,"y":1234,"label":"Camberwell<br/>Train Station"},{"x":1340,"y":1038,"label":"St Vincent\'s<br/>Hospital"},{"x":1380,"y":1066,"label":"Kew Junction<br/>Shopping Precinct"},{"x":1465,"y":1205,"label":"St George\'s<br/> Hospital"},{"x":1900,"y":1060,"label":"Kew<br/>Golf Club"},{"x":1388,"y":1281,"label":"Reservoir<br/>Reserve"},{"x":1475,"y":1565,"label":"Anniversary Trail"},{"x":1533,"y":1250,"label":"Genazzano FCJ<br/>College"},{"x":1630,"y":1505,"label":"Our Lady of Good Counsel<br/>Primary School"},{"x":880,"y":1100,"label":"Central Gardens"},{"x":805,"y":1190,"label":"Rathmines Road<br/>Reserve"},{"x":1830,"y":1400,"label":"Deepdene<br/>Primary School"}]}')},396:function(e,t,n){"use strict";n.r(t);var o=n(84),r=n(321),l=(n(309),n(58),n(327)),c={name:"MapPinThinLine",props:{lineHeight:{type:Number,required:!0},label:{type:String,required:!0},x:{type:Number,default:0},y:{type:Number,default:0},color:{type:String,default:"#ffffff"},dotSize:{type:Number,default:10},labelStyle:{type:Object},labelClasses:Array,inDelay:{type:Number,default:10},scale:{type:Number,default:1},originX:{type:Number,default:0},originY:{type:Number,default:0},show:{type:Boolean,default:!1}},setup:function(e){var t,n,r,c=Object(o.i)(null),f=Object(o.i)(null);Object(o.e)((function(){n=new l.a(c.value,{yOffset:e.dotSize/2+"px"}),r=new l.a(f.value,{inDelay:e.inDelay}),Object(o.l)((function(){return e.show}),(function(e){e?r.in():r.out()}),{immediate:!0})}));var d=Object(o.a)((function(){return{x:e.x*e.scale-e.originX,y:e.y*e.scale-e.originY}}));return{pop:c,container:f,handleClick:function(){clearTimeout(t),n.in(!0),t=setTimeout((function(){return n.out(!0)}),2e3)},handleMouseOut:function(){n.out(!0)},handleMouseOver:function(){clearTimeout(t),n.in(!0)},location:d}}},f=(n(369),n(57)),d=Object(f.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"container",staticStyle:{"user-select":"none"},style:{top:e.location.y+"px",left:e.location.x+"px"},attrs:{id:"container"}},[n("div",{staticClass:"dummy-mouse-receiver",style:{width:1.2*e.dotSize+"px",height:1.2*e.dotSize+"px"},on:{click:e.handleClick,mouseover:e.handleMouseOver,mouseout:e.handleMouseOut}},[e._v("\n    x\n  ")]),e._v(" "),n("div",{ref:"dot",staticClass:"dot",class:e.show?"scale1":"scale0",style:{backgroundColor:e.color,width:e.dotSize+"px",height:e.dotSize+"px"}}),e._v(" "),n("div",{ref:"pop",staticStyle:{position:"absolute",left:"0",top:"0"}},[n("div",{staticClass:"thin-line",style:{height:e.lineHeight+"px",borderLeftColor:e.color}}),e._v(" "),n("div",{staticClass:"label",class:e.labelClasses,style:[{color:e.color,top:-e.lineHeight-10+"px"},e.labelStyle],domProps:{innerHTML:e._s(e.label)}})])])}),[],!1,null,"3620c004",null).exports,h={name:"MapPinStaticThinLine",props:{labelUrl:{type:String},labelText:{type:String},x:{type:Number,default:0},y:{type:Number,default:0},color:{type:String,default:"#ffffff"},dotSize:{type:Number,default:20},labelStyle:{type:Object},labelClasses:{Array:Array},inDelay:{Number:Number,default:10},scale:{type:Number,default:1},originX:{type:Number,default:0},originY:{type:Number,default:0},topLocation:{String:String},show:{type:Boolean,default:!1}},setup:function(e){var t,n=Object(o.i)(null);Object(o.e)((function(){t=new l.a(n.value,{yOffset:e.dotSize/2+"px"}),Object(o.l)((function(){return e.show}),(function(e){e?t.in():t.out()}),{immediate:!0})}));var r=Object(o.a)((function(){return{x:e.x*e.scale-e.originX,y:e.y*e.scale-e.originY}}));return{pop:n,location:r}}},y=(n(371),Object(f.a)(h,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{"pointer-events":"none","user-select":"none"}},[n("div",{ref:"dot",staticClass:"origin-center dot",class:e.show?"scale1":"scale0",style:{backgroundColor:e.color,width:e.dotSize+"px",height:e.dotSize+"px",left:e.location.x+"px",top:e.location.y+"px"}}),e._v(" "),n("div",{ref:"pop",staticClass:"pop",staticStyle:{position:"absolute",top:"0",bottom:"0",display:"flex","flex-direction":"column"},style:{color:e.color,height:e.location.y+"px",left:e.location.x+"px"}},[n("div",{staticClass:"dummy",staticStyle:{"flex-grow":"0"},style:{height:e.topLocation}}),e._v(" "),e.labelUrl?n("img",{ref:"label",staticClass:"label",class:e.labelClasses,style:e.labelStyle,attrs:{src:e.labelUrl}}):n("div",{ref:"label",staticClass:"label",class:e.labelClasses,style:e.labelStyle,domProps:{innerHTML:e._s(e.labelText)}}),e._v(" "),n("div",{ref:"line",staticClass:"thin-line",style:{borderLeftColor:e.color}})])])}),[],!1,null,"141e213e",null).exports),v={name:"hive-map",props:{src:{type:String,required:!0},staticPins:{type:Array},dynamicPins:{type:Array},dynamicPinsStyle:{Object:Object,required:!0},onStage:{type:Boolean,default:!1}},components:{MapPinStaticThinLine:y,MapPinThinLine:d},setup:function(e){var t,n,l=Object(o.i)(null),c=Object(o.i)(null),image=Object(o.i)(null),f=Object(o.h)({scale:0,originX:0,originY:0,loaded:!1}),d=Object(o.a)((function(){return f.loaded&&e.onStage})),h=Object(r.b)(c),y=h.width,v=h.height;function m(){var e,o,r,d,h,y,v,style;!function(){if(!n){var e=image.value.offsetWidth;e&&(t=e,n=image.value.offsetHeight,f.loaded=!0)}}(),f.loaded&&(e=c.value.offsetWidth,o=c.value.offsetHeight,r=e/t,d=o/n,h=f.scale=r>d?r:d,y=h*t,v=h*n,(style=image.value.style).width=y+"px",style.height=v+"px",f.originX=(y-e)/2,f.originY=v-o,l.value.scrollLeft=f.originX,l.value.scrollTop=f.originY)}return Object(o.l)([y,v],(function(){y.value&&m()}),{immediate:!0}),{image:image,viewport:l,container:c,mapState:f,handleClick:function(e){console.log("x",(e.clientX+f.originX)/f.scale,"y",(e.clientY+f.originY)/f.scale)},adjust:m,showPins:d}}},m=(n(373),Object(f.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"container",staticClass:"container",on:{click:e.handleClick}},[n("div",{staticClass:"origin full-page",staticStyle:{position:"absolute"},attrs:{id:"pin-container"}},[e._l(e.dynamicPins,(function(t,o){return n("map-pin-thin-line",{key:t.x,staticClass:"pin dynamic",attrs:{x:t.x,y:t.y,scale:e.mapState.scale,"origin-x":e.mapState.originX,"origin-y":e.mapState.originY,inDelay:100*o+500,label:t.label,color:e.dynamicPinsStyle.color,lineHeight:e.dynamicPinsStyle.lineHeight,labelClasses:e.dynamicPinsStyle.labelClasses,labelStyle:e.dynamicPinsStyle.labelStyle,dotSize:e.dynamicPinsStyle.dotSize,show:e.showPins}})})),e._v(" "),e._l(e.staticPins,(function(t,o){return n("map-pin-static-thin-line",{key:t.x,staticClass:"pin",attrs:{inDelay:500*o+10,x:t.x,y:t.y,scale:e.mapState.scale,"origin-x":e.mapState.originX,"origin-y":e.mapState.originY,labelUrl:t.labelUrl,labelText:t.labelText,labelStyle:t.labelStyle,labelClasses:t.labelClasses,topLocation:t.topLocation,color:t.color,dotSize:t.dotSize,show:e.showPins}})}))],2),e._v(" "),n("div",{ref:"viewport",staticClass:"viewport"},[n("img",{ref:"image",attrs:{src:e.src,alt:""},on:{load:e.adjust}})])])}),[],!1,null,"23484b42",null).exports),x=n(375),S=n(316),w=[Object.assign(x.gratis,{labelStyle:{height:"8vh"},topLocation:"10vh",dotSize:25}),Object.assign(x.cbd,{labelClasses:["caslon","h1"],labelStyle:{},topLocation:"22vh",dotSize:15})];console.log(w);var O={name:"page-aerial",components:{FPage:S.a,HiveMap:m},setup:function(){var e=Object(o.h)({onStage:!1});return{entered:function(){e.onStage=!0},left:function(){e.onStage=!1},state:e,staticPins:w,dynamicPins:x.pins,dynamicPinsStyle:{color:"white",lineHeight:100,labelClasses:["caslon","h2"],labelStyle:{textAlign:"center"}}}}},j=Object(f.a)(O,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("f-page",{attrs:{hash:"aerial"},on:{entered:e.entered,left:e.left}},[n("hive-map",{ref:"map",staticClass:"full-page",attrs:{"on-stage":e.state.onStage,src:"images/aerial-2k.jpg",staticPins:e.staticPins,dynamicPins:e.dynamicPins,dynamicPinsStyle:e.dynamicPinsStyle}})],1)}),[],!1,null,"2b73df58",null);t.default=j.exports}}]);