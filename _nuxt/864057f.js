(window.webpackJsonp=window.webpackJsonp||[]).push([[13,21],{311:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return f})),n.d(t,"d",(function(){return d})),n.d(t,"e",(function(){return h})),n.d(t,"a",(function(){return v}));var o=n(22);n(142),n(42),n(17),n(29),n(43),n(34),n(32),n(44),n(45),n(35);function r(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,o=function(){};return{s:o,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,c=!0,f=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){f=!0,r=e},f:function(){try{c||null==n.return||n.return()}finally{if(f)throw r}}}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}function c(element,e){return window.getComputedStyle(element).getPropertyValue(e)}function f(element){var e,t=r(element.querySelectorAll("video"));try{for(t.s();!(e=t.n()).done;){e.value.pause()}}catch(e){t.e(e)}finally{t.f()}}function d(element){var e,t=r(element.querySelectorAll("video"));try{for(t.s();!(e=t.n()).done;){e.value.play()}}catch(e){t.e(e)}finally{t.f()}}function h(element,e){for(var t=0,n=Object.entries(e);t<n.length;t++){var r=Object(o.a)(n[t],2),l=r[0],c=r[1];element.style[l]=c}}function v(element,e){return window.getComputedStyle(element).getPropertyValue(e)}},316:function(e,t,n){"use strict";var o=n(84),r=n(317),l={name:"f-page",emits:["before-enter","entered","before-leave","left"],props:{pageId:{type:String},hash:String},setup:function(e){return Object(r.g)(e.hash),{container:Object(o.i)(null)}}},c=n(57),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{ref:"container",staticStyle:{width:"100%",height:"100vh",overflow:"hidden"}},[e._t("default")],2)}),[],!1,null,"0877a82a",null);t.a=component.exports},317:function(e,t,n){"use strict";n.d(t,"h",(function(){return P})),n.d(t,"i",(function(){return S})),n.d(t,"e",(function(){return C})),n.d(t,"c",(function(){return E})),n.d(t,"b",(function(){return M})),n.d(t,"d",(function(){return k})),n.d(t,"f",(function(){return z})),n.d(t,"a",(function(){return A})),n.d(t,"g",(function(){return I}));var o=n(22),r=(n(142),n(58),n(84)),l=n(308),c=n(311);n(59),n(111);function f(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;l.a.to(e,{opacity:0,onComplete:function(){e.style.visibility="hidden"},duration:t})}function d(element,e){for(var t=0,n=Object.entries(e);t<n.length;t++){var r=Object(o.a)(n[t],2),l=r[0],c=r[1];element.style[l]=c}}var h,v,m,y=[],w={},x={},j=Object(r.h)({currentPage:0,hash:void 0,enteringPage:null}),O=!1,_=0;function P(){return Object(r.a)((function(){return j.currentPage}))}function S(){return Object(r.a)((function(){return j.currentPage===E()-1}))}function C(){return j.currentPage===E()-1}function E(){return y.length}function M(){return j.enteringPage}function k(){h||((h=document.createElement("div")).innerHTML="<div>Invisible</div>",document.body.appendChild(h)),Object(r.e)((function(){d(h,{height:100*y.length+"vh",top:"0",position:"absolute","z-index":-1}),L();var e=y[j.currentPage];j.enteringPage=j.currentPage;var t=w[e].container,n=w[e].instance;Object(c.d)(t),l.a.set(t,{display:"flex",top:0}),B(),n.emit("before-enter"),n.emit("entered"),window.addEventListener("scroll",T),window.addEventListener("resize",B),window.addEventListener("hashchange",L,!1),Object(r.l)((function(){return j.currentPage}),(function(e,t){console.log("move page from "+t+" to: "+e),function(e,t){var n=y[e],o=y[t],r=w[n].container,x=w[o].container,j=w[o].hash,_=t-e,P=_>0?"-100vh":"100vh",S=_>0?"100vh":"-100vh",C=w[n].instance,E=w[o].instance;C.emit("before-leave"),E.emit("before-enter"),m&&(l.a.killTweensOf(m),m!==r&&m!==x&&f(m));v&&(l.a.killTweensOf(v),v!==r&&v!==x&&f(v));Object(c.c)(r),setTimeout((function(){d(h,_<0?{height:"110vh"}:{height:100*t+20+"vh"})}),100),l.a.killTweensOf(x),l.a.killTweensOf(r),v=r,m=x,l.a.set(x,{top:S,display:"flex",visibility:"visible",opacity:1}),l.a.to(r,{top:P,ease:"power4.out",duration:1}),l.a.to(x,{top:0,onComplete:function(){var e,t,n;v=m=null,C.emit("left"),E.emit("entered"),Object(c.d)(x),B(),j?location.hash=j:(n=window.location,"pushState"in history?history.pushState("",document.title,n.pathname+n.search):(e=document.body.scrollTop,t=document.body.scrollLeft,n.hash="",document.body.scrollTop=e,document.body.scrollLeft=t))},ease:"power4.out",duration:1}),O=!0}(t,e)}))})),Object(r.f)((function(){window.removeEventListener("scroll",T),window.removeEventListener("resize",B),window.removeEventListener("hashchange",L,!1)}))}function T(e){if(O)return e.preventDefault(),!1;var t=window.scrollY,n=t-_,o=window.innerHeight;if(!(Math.abs(n)<6)){var r=Math.round(n/o);Math.abs(r)<1&&(r=n>0?1:-1),j.currentPage+=r,_=t}}function L(){var e=location.hash;e&&e.length&&(j.hash=e.substr(1),function(){for(var i=0;i<y.length;i++){var e=y[i];if(w[e].hash===j.hash){j.currentPage=i;break}}}())}function z(){j.currentPage++}function A(){j.currentPage=0}function B(){O=!0,function(){d(h,{display:"block",height:100*y.length+"vh"});var e=window.innerHeight,t=j.currentPage*e;window.scrollTo(0,t),_=t}(),setTimeout((function(){O=!1}),100)}function I(e){var t=Object(r.b)(),n=t.uid;y.push(n),w[n]={instance:t,hash:e},x[e]=n,Object(r.e)((function(){var e=t.refs.container;w[n].container=e,d(e,{position:"absolute",left:"0",display:"none"})}))}},324:function(e,t,n){var content=n(348);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(141).default)("68753a67",content,!0,{sourceMap:!1})},326:function(e,t,n){"use strict";n.r(t);var o={name:"Video",props:{src:String,autoplay:{type:Boolean,default:!1}}},r=(n(347),n(57)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vimeo-bg-container",staticStyle:{width:"100%",height:"100%"}},[n("video",{attrs:{autoplay:e.autoplay,muted:"true",playsinline:"",loop:""},domProps:{muted:!0}},[n("source",{attrs:{src:e.src,type:"video/mp4"}})])])}),[],!1,null,"a6ff0f38",null);t.default=component.exports;installComponents(component,{Video:n(326).default})},343:function(e,t,n){var content=n(380);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(141).default)("f66e5caa",content,!0,{sourceMap:!1})},344:function(e,t,n){var content=n(382);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(141).default)("367a5679",content,!0,{sourceMap:!1})},345:function(e,t,n){var content=n(384);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(141).default)("6b825dc0",content,!0,{sourceMap:!1})},346:function(e,t,n){var content=n(386);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(141).default)("fa00da00",content,!0,{sourceMap:!1})},347:function(e,t,n){"use strict";n(324)},348:function(e,t,n){var o=n(140)((function(i){return i[1]}));o.push([e.i,".vimeo-bg-container[data-v-a6ff0f38]{padding:0;width:100%;height:100vh;overflow:hidden;position:relative}video[data-v-a6ff0f38]{box-sizing:border-box;width:177.77777778vh;height:56.25vw;min-width:100%;min-height:100%;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}",""]),o.locals={},e.exports=o},376:function(e,t,n){e.exports=n.p+"videos/thegratis.0f3d979.mp4"},377:function(e,t,n){e.exports=n.p+"img/gr-mask.8ed5313.png"},378:function(e,t,n){e.exports=n.p+"img/an-unlimited-you-white.7dc8a1e.png"},379:function(e,t,n){"use strict";n(343)},380:function(e,t,n){var o=n(140)((function(i){return i[1]}));o.push([e.i,".center-box-container[data-v-6e75f8d2]{flex-direction:column;justify-content:center;height:100%}.box-h-center[data-v-6e75f8d2]{align-items:center}",""]),o.locals={},e.exports=o},381:function(e,t,n){"use strict";n(344)},382:function(e,t,n){var o=n(140)((function(i){return i[1]}));o.push([e.i,"/*  !*align-items: center;*!*/",""]),o.locals={},e.exports=o},383:function(e,t,n){"use strict";n(345)},384:function(e,t,n){var o=n(140)((function(i){return i[1]}));o.push([e.i,"[data-v-a810e430] svg{margin-right:.5em;font-size:110%}",""]),o.locals={},e.exports=o},385:function(e,t,n){"use strict";n(346)},386:function(e,t,n){var o=n(140)((function(i){return i[1]}));o.push([e.i,".vimeo-bg-container{padding:0;width:100%;height:100vh;overflow:hidden;position:relative}video{box-sizing:border-box;width:177.77777778vh;height:56.25vw;min-width:100%;min-height:100%;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}",""]),o.locals={},e.exports=o},395:function(e,t,n){"use strict";n.r(t);var o=n(321),r=n(84),l={name:"CenterBox",props:{inline:Boolean,hCenter:{type:Boolean,default:!0}}},c=(n(379),n(57)),f=Object(c.a)(l,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"center-box-container",class:{"box-h-center":e.hCenter},style:{display:e.inline?"inline-flex":"flex"}},[e._t("default")],2)}),[],!1,null,"6e75f8d2",null).exports,d={name:"CenterRow",props:{inline:Boolean,hCenter:Boolean}},h=(n(381),Object(c.a)(d,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticStyle:{"flex-direction":"row","align-items":"center","align-content":"center"},style:{display:e.inline?"inline-flex":"flex",justifyContent:e.hCenter?"center":""}},[e._t("default")],2)}),[],!1,null,"25a6b99e",null).exports,{name:"IconItem",props:{inline:Boolean}}),v=(n(383),Object(c.a)(h,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticStyle:{"align-items":"center"},style:{display:e.inline?"inline-flex":"flex"}},[e._t("default")],2)}),[],!1,null,"a810e430",null).exports,{name:"PageProjectVideo",components:{FPage:n(316).a,CenterBox:f},setup:function(){Object(r.e)((function(){e.value.addEventListener("play",(function(){mask.value.style.opacity=1,t.value.style.opacity=.7}))}));var e=Object(o.a)("play"),mask=Object(o.a)("mask"),t=Object(o.a)("unlimited")}}),m=(n(385),Object(c.a)(v,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("f-page",{attrs:{hash:"videos"}},[o("div",{staticClass:"vimeo-bg-container",staticStyle:{width:"100%",height:"100%"}},[o("video",{ref:"play",attrs:{muted:"true",playsinline:"",loop:"",autoplay:"",src:n(376)},domProps:{muted:!0}})]),e._v(" "),o("img",{ref:"mask",staticStyle:{width:"100vw",height:"100vh","z-index":"10",position:"absolute",left:"0",top:"0",transition:"opacity .5s",opacity:"0"},attrs:{src:n(377)}}),e._v(" "),o("center-box",{staticStyle:{width:"100vw",height:"100vh","z-index":"20",position:"absolute",left:"0",top:"0"}},[o("img",{ref:"unlimited",staticStyle:{transition:"opacity 2s",opacity:"0","max-width":"60%",width:"500px"},attrs:{src:n(378)}})])],1)}),[],!1,null,null,null));t.default=m.exports;installComponents(m,{Video:n(326).default})}}]);