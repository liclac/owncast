(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6801],{81643:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var a=function(e){return e?"function"==typeof e?e():e:null}},57838:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var a=n(97685),r=n(67294);function i(){var e=r.useReducer(function(e){return e+1},0);return(0,a.Z)(e,2)[1]}},15746:function(e,t,n){"use strict";var a=n(21584);t.Z=a.Z},25378:function(e,t,n){"use strict";var a=n(67294),r=n(57838),i=n(24308);t.Z=function(){var e=!(arguments.length>0)||void 0===arguments[0]||arguments[0],t=(0,a.useRef)({}),n=(0,r.Z)();return(0,a.useEffect)(function(){var a=i.ZP.subscribe(function(a){t.current=a,e&&n()});return function(){return i.ZP.unsubscribe(a)}},[]),t.current}},97183:function(e,t,n){"use strict";var a=n(2897),r=n(7293),i=a.ZP;i.Header=a.h4,i.Footer=a.$_,i.Content=a.VY,i.Sider=r.Z,t.Z=i},65360:function(e,t,n){"use strict";n.d(t,{Z:function(){return w}});var a=n(87462),r=n(97685),i=n(21640),o=n(94184),s=n.n(o),l=n(21770),c=n(15105),d=n(67294),u=n(53124),m=n(55241),h=n(96159),f=n(71577),v=n(6134),p=n(86743),g=n(23715),x=n(7734),y=n(81643),b=function(e){var t=e.prefixCls,n=e.okButtonProps,r=e.cancelButtonProps,i=e.title,o=e.cancelText,s=e.okText,l=e.okType,c=e.icon,m=e.showCancel,h=void 0===m||m,b=e.close,j=e.onConfirm,N=e.onCancel,w=d.useContext(u.E_).getPrefixCls;return d.createElement(g.Z,{componentName:"Popconfirm",defaultLocale:x.Z.Popconfirm},function(e){return d.createElement("div",{className:"".concat(t,"-inner-content")},d.createElement("div",{className:"".concat(t,"-message")},c&&d.createElement("span",{className:"".concat(t,"-message-icon")},c),d.createElement("div",{className:"".concat(t,"-message-title")},(0,y.Z)(i))),d.createElement("div",{className:"".concat(t,"-buttons")},h&&d.createElement(f.Z,(0,a.Z)({onClick:N,size:"small"},r),null!=o?o:e.cancelText),d.createElement(p.Z,{buttonProps:(0,a.Z)((0,a.Z)({size:"small"},(0,v.n)(l)),n),actionFn:j,close:b,prefixCls:w("btn"),quitOnNullishReturnValue:!0,emitEvent:!0},null!=s?s:e.okText)))})},j=void 0,N=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)0>t.indexOf(a[r])&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n},w=d.forwardRef(function(e,t){var n=d.useContext(u.E_).getPrefixCls,o=(0,l.Z)(!1,{value:void 0!==e.open?e.open:e.visible,defaultValue:void 0!==e.defaultOpen?e.defaultOpen:e.defaultVisible}),f=(0,r.Z)(o,2),v=f[0],p=f[1],g=function(t,n){var a,r;p(t,!0),null===(a=e.onVisibleChange)||void 0===a||a.call(e,t,n),null===(r=e.onOpenChange)||void 0===r||r.call(e,t,n)},x=function(e){e.keyCode===c.Z.ESC&&v&&g(!1,e)},y=e.prefixCls,w=e.placement,Z=e.trigger,C=e.okType,k=e.icon,E=void 0===k?d.createElement(i.Z,null):k,P=e.children,T=e.overlayClassName,S=N(e,["prefixCls","placement","trigger","okType","icon","children","overlayClassName"]),O=n("popover",y),_=n("popconfirm",y),I=s()(_,T);return d.createElement(m.Z,(0,a.Z)({},S,{trigger:void 0===Z?"click":Z,prefixCls:O,placement:void 0===w?"top":w,onOpenChange:function(t){var n=e.disabled;void 0!==n&&n||g(t)},open:v,ref:t,overlayClassName:I,_overlay:d.createElement(b,(0,a.Z)({okType:void 0===C?"primary":C,icon:E},e,{prefixCls:O,close:function(e){g(!1,e)},onConfirm:function(t){var n;return null===(n=e.onConfirm)||void 0===n?void 0:n.call(j,t)},onCancel:function(t){var n;g(!1,t),null===(n=e.onCancel)||void 0===n||n.call(j,t)}}))}),(0,h.Tm)(P,{onKeyDown:function(e){var t,n;d.isValidElement(P)&&(null===(n=null==P?void 0:(t=P.props).onKeyDown)||void 0===n||n.call(t,e)),x(e)}}))})},55241:function(e,t,n){"use strict";var a=n(87462),r=n(67294),i=n(53124),o=n(94199),s=n(81643),l=n(33603),c=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)0>t.indexOf(a[r])&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n},d=function(e){var t=e.title,n=e.content,a=e.prefixCls;return t||n?r.createElement(r.Fragment,null,t&&r.createElement("div",{className:"".concat(a,"-title")},(0,s.Z)(t)),r.createElement("div",{className:"".concat(a,"-inner-content")},(0,s.Z)(n))):null},u=r.forwardRef(function(e,t){var n=e.prefixCls,s=e.title,u=e.content,m=e._overlay,h=e.placement,f=e.trigger,v=e.mouseEnterDelay,p=e.mouseLeaveDelay,g=e.overlayStyle,x=c(e,["prefixCls","title","content","_overlay","placement","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle"]),y=r.useContext(i.E_).getPrefixCls,b=y("popover",n),j=y();return r.createElement(o.Z,(0,a.Z)({placement:void 0===h?"top":h,trigger:void 0===f?"hover":f,mouseEnterDelay:void 0===v?.1:v,mouseLeaveDelay:void 0===p?.1:p,overlayStyle:void 0===g?{}:g},x,{prefixCls:b,ref:t,overlay:m||r.createElement(d,{prefixCls:b,title:s,content:u}),transitionName:(0,l.mL)(j,"zoom-big",x.transitionName)}))});t.Z=u},71230:function(e,t,n){"use strict";var a=n(92820);t.Z=a.Z},11382:function(e,t,n){"use strict";var a=n(87462),r=n(4942),i=n(97685),o=n(94184),s=n.n(o),l=n(23279),c=n.n(l),d=n(98423),u=n(67294),m=n(53124),h=n(96159),f=n(93355),v=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)0>t.indexOf(a[r])&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n};(0,f.b)("small","default","large");var p=null,g=function(e){var t=e.spinPrefixCls,n=e.spinning,o=void 0===n||n,l=e.delay,f=e.className,g=e.size,x=void 0===g?"default":g,y=e.tip,b=e.wrapperClassName,j=e.style,N=e.children,w=v(e,["spinPrefixCls","spinning","delay","className","size","tip","wrapperClassName","style","children"]),Z=u.useState(function(){return o&&(!o||!l||!!isNaN(Number(l)))}),C=(0,i.Z)(Z,2),k=C[0],E=C[1];return u.useEffect(function(){var e=c()(function(){E(o)},l);return e(),function(){var t;null===(t=null==e?void 0:e.cancel)||void 0===t||t.call(e)}},[l,o]),u.createElement(m.C,null,function(n){var i,o,l,c=n.direction,m=s()(t,(l={},(0,r.Z)(l,"".concat(t,"-sm"),"small"===x),(0,r.Z)(l,"".concat(t,"-lg"),"large"===x),(0,r.Z)(l,"".concat(t,"-spinning"),k),(0,r.Z)(l,"".concat(t,"-show-text"),!!y),(0,r.Z)(l,"".concat(t,"-rtl"),"rtl"===c),l),f),v=(0,d.Z)(w,["indicator","prefixCls"]),g=u.createElement("div",(0,a.Z)({},v,{style:j,className:m,"aria-live":"polite","aria-busy":k}),(i=e.indicator,o="".concat(t,"-dot"),null===i?null:(0,h.l$)(i)?(0,h.Tm)(i,{className:s()(i.props.className,o)}):(0,h.l$)(p)?(0,h.Tm)(p,{className:s()(p.props.className,o)}):u.createElement("span",{className:s()(o,"".concat(t,"-dot-spin"))},u.createElement("i",{className:"".concat(t,"-dot-item")}),u.createElement("i",{className:"".concat(t,"-dot-item")}),u.createElement("i",{className:"".concat(t,"-dot-item")}),u.createElement("i",{className:"".concat(t,"-dot-item")}))),y?u.createElement("div",{className:"".concat(t,"-text")},y):null);if(void 0!==N){var Z=s()("".concat(t,"-container"),(0,r.Z)({},"".concat(t,"-blur"),k));return u.createElement("div",(0,a.Z)({},v,{className:s()("".concat(t,"-nested-loading"),b)}),k&&u.createElement("div",{key:"loading"},g),u.createElement("div",{className:Z,key:"container"},N))}return g})},x=function(e){var t=e.prefixCls,n=(0,u.useContext(m.E_).getPrefixCls)("spin",t),r=(0,a.Z)((0,a.Z)({},e),{spinPrefixCls:n});return u.createElement(g,(0,a.Z)({},r))};x.setDefaultIndicator=function(e){p=e},t.Z=x},13882:function(e,t,n){"use strict";function a(e,t){if(t.length<e)throw TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}n.d(t,{Z:function(){return a}})},93645:function(e,t,n){"use strict";n.d(t,{u:function(){return r}});var a={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(e){return e<0?Math.ceil(e):Math.floor(e)}};function r(e){return e?a[e]:a.trunc}},59910:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var a=n(19013),r=n(13882);function i(e,t){return(0,r.Z)(2,arguments),(0,a.Z)(e).getTime()-(0,a.Z)(t).getTime()}},11699:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var a=n(59910),r=n(13882),i=n(93645);function o(e,t,n){(0,r.Z)(2,arguments);var o=(0,a.Z)(e,t)/1e3;return(0,i.u)(null==n?void 0:n.roundingMethod)(o)}},19013:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var a=n(71002),r=n(13882);function i(e){(0,r.Z)(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===(0,a.Z)(e)&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):(("string"==typeof e||"[object String]"===t)&&"undefined"!=typeof console&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(Error().stack)),new Date(NaN))}},62705:function(e,t,n){var a=n(55639).Symbol;e.exports=a},44239:function(e,t,n){var a=n(62705),r=n(89607),i=n(2333),o=a?a.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":o&&o in Object(e)?r(e):i(e)}},27561:function(e,t,n){var a=n(67990),r=/^\s+/;e.exports=function(e){return e?e.slice(0,a(e)+1).replace(r,""):e}},31957:function(e,t,n){var a="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;e.exports=a},89607:function(e,t,n){var a=n(62705),r=Object.prototype,i=r.hasOwnProperty,o=r.toString,s=a?a.toStringTag:void 0;e.exports=function(e){var t=i.call(e,s),n=e[s];try{e[s]=void 0;var a=!0}catch(e){}var r=o.call(e);return a&&(t?e[s]=n:delete e[s]),r}},2333:function(e){var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},55639:function(e,t,n){var a=n(31957),r="object"==typeof self&&self&&self.Object===Object&&self,i=a||r||Function("return this")();e.exports=i},67990:function(e){var t=/\s/;e.exports=function(e){for(var n=e.length;n--&&t.test(e.charAt(n)););return n}},23279:function(e,t,n){var a=n(13218),r=n(7771),i=n(14841),o=Math.max,s=Math.min;e.exports=function(e,t,n){var l,c,d,u,m,h,f=0,v=!1,p=!1,g=!0;if("function"!=typeof e)throw TypeError("Expected a function");function x(t){var n=l,a=c;return l=c=void 0,f=t,u=e.apply(a,n)}function y(e){var n=e-h,a=e-f;return void 0===h||n>=t||n<0||p&&a>=d}function b(){var e,n,a,i=r();if(y(i))return j(i);m=setTimeout(b,(e=i-h,n=i-f,a=t-e,p?s(a,d-n):a))}function j(e){return(m=void 0,g&&l)?x(e):(l=c=void 0,u)}function N(){var e,n=r(),a=y(n);if(l=arguments,c=this,h=n,a){if(void 0===m)return f=e=h,m=setTimeout(b,t),v?x(e):u;if(p)return clearTimeout(m),m=setTimeout(b,t),x(h)}return void 0===m&&(m=setTimeout(b,t)),u}return t=i(t)||0,a(n)&&(v=!!n.leading,d=(p="maxWait"in n)?o(i(n.maxWait)||0,t):d,g="trailing"in n?!!n.trailing:g),N.cancel=function(){void 0!==m&&clearTimeout(m),f=0,l=h=c=m=void 0},N.flush=function(){return void 0===m?u:j(r())},N}},13218:function(e){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},37005:function(e){e.exports=function(e){return null!=e&&"object"==typeof e}},33448:function(e,t,n){var a=n(44239),r=n(37005);e.exports=function(e){return"symbol"==typeof e||r(e)&&"[object Symbol]"==a(e)}},7771:function(e,t,n){var a=n(55639);e.exports=function(){return a.Date.now()}},14841:function(e,t,n){var a=n(27561),r=n(13218),i=n(33448),o=0/0,s=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,c=/^0o[0-7]+$/i,d=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(i(e))return o;if(r(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=r(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=a(e);var n=l.test(e);return n||c.test(e)?d(e.slice(2),n?2:8):s.test(e)?o:+e}},6440:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/config-video",function(){return n(50246)}])},44716:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var a=n(85893),r=n(67294),i=n(94594),o=n(91332),s=n(57520),l=n(24044),c=n(38631);let d=e=>{let{apiPath:t,checked:n,reversed:d=!1,configPath:u="",disabled:m=!1,fieldName:h,label:f,tip:v,useSubmit:p,onChange:g}=e,[x,y]=(0,r.useState)(null),b=null,j=(0,r.useContext)(c.a),{setFieldInConfigState:N}=j||{},w=()=>{y(null),clearTimeout(b),b=null},Z=async e=>{if(p){y((0,o.kg)(o.Jk));let n=d?!e:e;await (0,l.Si)({apiPath:t,data:{value:n},onSuccess:()=>{N({fieldName:h,value:n,path:u}),y((0,o.kg)(o.zv))},onError:e=>{y((0,o.kg)(o.Un,"There was an error: ".concat(e)))}}),b=setTimeout(w,l.sI)}g&&g(e)},C=null!==x&&x.type===o.Jk;return(0,a.jsxs)("div",{className:"formfield-container toggleswitch-container",children:[f&&(0,a.jsx)("div",{className:"label-side",children:(0,a.jsx)("span",{className:"formfield-label",children:f})}),(0,a.jsxs)("div",{className:"input-side",children:[(0,a.jsxs)("div",{className:"input-group",children:[(0,a.jsx)(i.Z,{className:"switch field-".concat(h),loading:C,onChange:Z,defaultChecked:n,checked:n,checkedChildren:"ON",unCheckedChildren:"OFF",disabled:m}),(0,a.jsx)(s.E,{status:x})]}),(0,a.jsx)("p",{className:"field-tip",children:v})]})]})};d.defaultProps={apiPath:"",checked:!1,reversed:!1,configPath:"",disabled:!1,label:"",tip:"",useSubmit:!1,onChange:null}},50246:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return z}});var a=n(85893),r=n(54907),i=n(85818),o=n(71230),s=n(15746),l=n(67294),c=n(34041),d=n(65360),u=n(91762),m=n(24044),h=n(91332),f=n(38631),v=n(57520);let p=()=>{let e=(0,l.useContext)(f.a),{serverConfig:t,setFieldInConfigState:n}=e||{},{videoCodec:r,supportedCodecs:o}=t||{},{Title:s}=i.Z,{Option:p}=c.Z,[g,x]=(0,l.useState)(null),{setMessage:y}=(0,l.useContext)(u.k),[b,j]=(0,l.useState)(r),[N,w]=(0,l.useState)(r),[Z,C]=l.useState(!1);(0,l.useEffect)(()=>{j(r)},[r]);let k=()=>{x(null),clearTimeout(null)};async function E(){j(N),w(""),C(!1),await (0,m.Si)({apiPath:m.CQ,data:{value:N},onSuccess:()=>{n({fieldName:"videoCodec",value:N,path:"videoSettings"}),x((0,h.kg)(h.zv,"Video codec updated.")),setTimeout(k,m.sI),e.online&&y("Your latency buffer setting will take effect the next time you begin a live stream.")},onError:e=>{x((0,h.kg)(h.Un,e)),setTimeout(k,m.sI)}})}let P=o.map(e=>{let t=e;return"libx264"===t?t="Default (libx264)":"h264_nvenc"===t?t="NVIDIA GPU acceleration":"h264_vaapi"===t?t="VA-API hardware encoding":"h264_qsv"===t?t="Intel QuickSync":"h264_v4l2m2m"===t?t="Video4Linux hardware encoding":"h264_omx"===t?t="OpenMax (omx) for Raspberry Pi":"h264_videotoolbox"===t&&(t="Apple VideoToolbox (hardware)"),(0,a.jsx)(p,{value:e,children:t},e)}),T="";return"libx264"===b?T="libx264 is the default codec and generally the only working choice for shared VPS environments. This is likely what you should be using unless you know you have set up other options.":"h264_nvenc"===b?T="You can use your NVIDIA GPU for encoding if you have a modern NVIDIA card with encoding cores.":"h264_vaapi"===b?T="VA-API may be supported by your NVIDIA proprietary drivers, Mesa open-source drivers for AMD or Intel graphics.":"h264_qsv"===b?T="Quick Sync Video is Intel's brand for its dedicated video encoding and decoding hardware. It may be an option if you have a modern Intel CPU with integrated graphics.":"h264_v4l2m2m"===b?T="Video4Linux is an interface to multiple different hardware encoding platforms such as Intel and AMD.":"h264_omx"===b?T="OpenMax is a codec most often used with a Raspberry Pi.":"h264_videotoolbox"===b&&(T="Apple VideoToolbox is a low-level framework that provides direct access to hardware encoders and decoders."),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s,{level:3,className:"section-title",children:"Video Codec"}),(0,a.jsxs)("div",{className:"description",children:["If you have access to specific hardware with the drivers and software installed for them, you may be able to improve your video encoding performance.",(0,a.jsx)("p",{children:(0,a.jsx)("a",{href:"https://owncast.online/docs/codecs?source=admin",target:"_blank",rel:"noopener noreferrer",children:"Read the documentation about this setting before changing it or you may make your stream unplayable."})})]}),(0,a.jsxs)("div",{className:"segment-slider-container",children:[(0,a.jsx)(d.Z,{title:"Are you sure you want to change your video codec to ".concat(N," and understand what this means?"),open:Z,placement:"leftBottom",onConfirm:E,onCancel:()=>C(!1),okText:"Yes",cancelText:"No",children:(0,a.jsx)(c.Z,{defaultValue:b,value:b,style:{width:"100%"},onChange:function(e){w(e),C(!0)},children:P})}),(0,a.jsx)(v.E,{status:g}),(0,a.jsx)("p",{id:"selected-codec-note",className:"selected-value-note",children:T})]})]})};var g=n(22918);let{Title:x}=i.Z,y={0:"Lowest",1:" ",2:" ",3:" ",4:"Highest"},b={0:"Lowest latency, lowest error tolerance (Not recommended, may not work for all content/configurations.)",1:"Low latency, low error tolerance",2:"Medium latency, medium error tolerance (Default)",3:"High latency, high error tolerance",4:"Highest latency, highest error tolerance"},j=()=>{let[e,t]=(0,l.useState)(null),[n,r]=(0,l.useState)(null),i=(0,l.useContext)(f.a),{setMessage:o}=(0,l.useContext)(u.k),{serverConfig:s,setFieldInConfigState:c}=i||{},{videoSettings:d}=s||{};if(!d)return null;(0,l.useEffect)(()=>{r(d.latencyLevel)},[d]);let p=()=>{t(null),clearTimeout(null)},j=async e=>{t((0,h.kg)(h.Jk)),await (0,m.Si)({apiPath:m.sv,data:{value:e},onSuccess:()=>{c({fieldName:"latencyLevel",value:e,path:"videoSettings"}),t((0,h.kg)(h.zv,"Latency buffer level updated.")),setTimeout(p,m.sI),i.online&&o("Your latency buffer setting will take effect the next time you begin a live stream.")},onError:e=>{t((0,h.kg)(h.Un,e)),setTimeout(p,m.sI)}})};return(0,a.jsxs)("div",{className:"config-video-latency-container",children:[(0,a.jsx)(x,{level:3,className:"section-title",children:"Latency Buffer"}),(0,a.jsx)("p",{className:"description",children:"While it's natural to want to keep your latency as low as possible, you may experience reduced error tolerance and stability the lower you go. The lowest setting is not recommended."}),(0,a.jsxs)("p",{className:"description",children:["For interactive live streams you may want to experiment with a lower latency, for non-interactive broadcasts you may want to increase it."," ",(0,a.jsx)("a",{href:"https://owncast.online/docs/encoding#latency-buffer?source=admin",target:"_blank",rel:"noopener noreferrer",children:"Read to learn more."})]}),(0,a.jsxs)("div",{className:"segment-slider-container",children:[(0,a.jsx)(g.Z,{tipFormatter:e=>b[e],onChange:e=>{j(e)},min:0,max:4,marks:y,defaultValue:n,value:n}),(0,a.jsx)("p",{className:"selected-value-note",children:b[n]}),(0,a.jsx)(v.E,{status:e})]})]})};var N=n(71577),w=n(14670),Z=n(54398),C=n(85402),k=n(5152),E=n.n(k),P=n(94184),T=n.n(P),S=n(67032),O=n(44716);let{Panel:_}=r.Z,I=E()(()=>Promise.all([n.e(2074),n.e(2461)]).then(n.t.bind(n,42461,23)),{loadableGenerated:{webpack:()=>[42461]},ssr:!1}),V=e=>{let{dataState:t=m.gX,onUpdateField:n}=e,l=t.videoPassthrough,c=T()({"config-variant-form":!0,"video-passthrough-enabled":l});return(0,a.jsxs)("div",{className:c,children:[(0,a.jsx)("div",{className:"video-varient-alert",children:(0,a.jsx)(w.Z,{type:"info",action:(0,a.jsx)("a",{href:"https://owncast.online/docs/video?source=admin",target:"_blank",rel:"noopener noreferrer",children:(0,a.jsx)("div",{className:"video-varient-alert-button-container",children:(0,a.jsx)(N.Z,{size:"small",type:"text",icon:(0,a.jsx)(I,{}),children:"Read more about how each of these settings can impact the performance of your server."})})})})}),l&&(0,a.jsxs)("p",{className:"passthrough-warning",children:["NOTE: Video Passthrough for this output stream variant is ",(0,a.jsx)("em",{children:"enabled"}),", disabling the below video encoding settings."]}),(0,a.jsxs)(o.Z,{gutter:16,children:[(0,a.jsx)(s.Z,{xs:24,lg:{span:24,pull:3},className:"video-text-field-container",children:(0,a.jsx)(S.nv,{maxLength:"10",...m.SS,value:t.name,onChange:e=>{n({fieldName:"name",value:e.value})}})}),(0,a.jsx)(s.Z,{sm:24,md:12,children:(0,a.jsxs)("div",{className:"form-module cpu-usage-container",children:[(0,a.jsx)(i.Z.Title,{level:3,children:"CPU or GPU Utilization"}),(0,a.jsx)("p",{className:"description",children:"Reduce to improve server performance, or increase it to improve video quality."}),(0,a.jsxs)("div",{className:"segment-slider-container",children:[(0,a.jsx)(g.Z,{tipFormatter:e=>m.I$[e],onChange:e=>{n({fieldName:"cpuUsageLevel",value:e})},min:0,max:Object.keys(m.t$).length-1,marks:m.t$,defaultValue:t.cpuUsageLevel,value:t.cpuUsageLevel,disabled:t.videoPassthrough}),(0,a.jsx)("p",{className:"selected-value-note",children:l?"CPU usage selection is disabled when Video Passthrough is enabled.":m.I$[t.cpuUsageLevel]||""})]}),(0,a.jsxs)("p",{className:"read-more-subtext",children:["This could mean GPU or CPU usage depending on your server environment.",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)("a",{href:"https://owncast.online/docs/video/?source=admin#cpu-usage",target:"_blank",rel:"noopener noreferrer",children:"Read more about hardware performance."})]})]})}),(0,a.jsx)(s.Z,{sm:24,md:11,offset:1,children:(0,a.jsxs)("div",{className:"form-module bitrate-container ".concat(t.videoPassthrough?"disabled":""),children:[(0,a.jsx)(i.Z.Title,{level:3,children:"Video Bitrate"}),(0,a.jsx)("p",{className:"description",children:m.yC.tip}),(0,a.jsxs)("div",{className:"segment-slider-container",children:[(0,a.jsx)(g.Z,{tipFormatter:e=>"".concat(e," ").concat(m.yC.unit),disabled:t.videoPassthrough,defaultValue:t.videoBitrate,value:t.videoBitrate,onChange:e=>{n({fieldName:"videoBitrate",value:e})},step:m.yC.incrementBy,min:m.yC.min,max:m.yC.max,marks:m.HM}),(0,a.jsx)("p",{className:"selected-value-note",children:(()=>{if(l)return"Bitrate selection is disabled when Video Passthrough is enabled.";let e="".concat(t.videoBitrate).concat(m.yC.unit);return t.videoBitrate<2e3?"".concat(e," - Good for low bandwidth environments."):t.videoBitrate<3500?"".concat(e," - Good for most bandwidth environments."):"".concat(e," - Good for high bandwidth environments.")})()})]}),(0,a.jsx)("p",{className:"read-more-subtext",children:(0,a.jsx)("a",{href:"https://owncast.online/docs/video/?source=admin",target:"_blank",rel:"noopener noreferrer",children:"Read more about bitrates."})})]})})]}),(0,a.jsx)(r.Z,{className:"advanced-settings",children:(0,a.jsxs)(_,{header:"Advanced Settings",children:[(0,a.jsxs)(o.Z,{gutter:16,children:[(0,a.jsx)(s.Z,{sm:24,md:12,children:(0,a.jsxs)("div",{className:"form-module resolution-module",children:[(0,a.jsx)(i.Z.Title,{level:3,children:"Resolution"}),(0,a.jsxs)("p",{className:"description",children:["Resizing your content will take additional resources on your server. If you wish to optionally resize your content for this stream output then you should either set the width ",(0,a.jsx)("strong",{children:"or"})," the height to keep your aspect ratio. ",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)("a",{href:"https://owncast.online/docs/video/?source=admin",target:"_blank",rel:"noopener noreferrer",children:"Read more about resolutions."})]}),(0,a.jsx)("br",{}),(0,a.jsx)(S.nv,{type:"number",...m.dL.scaledWidth,value:t.scaledWidth,onChange:e=>{let t=Number(e.value);isNaN(t)||n({fieldName:"scaledWidth",value:t||0})},disabled:t.videoPassthrough}),(0,a.jsx)(S.nv,{type:"number",...m.dL.scaledHeight,value:t.scaledHeight,onChange:e=>{let t=Number(e.value);isNaN(t)||n({fieldName:"scaledHeight",value:t||0})},disabled:t.videoPassthrough})]})}),(0,a.jsx)(s.Z,{sm:24,md:12,children:(0,a.jsxs)("div",{className:"form-module video-passthrough-module",children:[(0,a.jsx)(i.Z.Title,{level:3,children:"Video Passthrough"}),(0,a.jsxs)("div",{className:"description",children:[(0,a.jsxs)("p",{children:["Enabling video passthrough may allow for less hardware utilization, but may also make your stream ",(0,a.jsx)("strong",{children:"unplayable"}),"."]}),(0,a.jsx)("p",{children:"All other settings for this stream output will be disabled if passthrough is used."}),(0,a.jsx)("p",{children:(0,a.jsx)("a",{href:"https://owncast.online/docs/video/?source=admin#video-passthrough",target:"_blank",rel:"noopener noreferrer",children:"Read the documentation before enabling, as it impacts your stream."})})]}),(0,a.jsx)("div",{className:"advanced-switch-container",children:(0,a.jsxs)(d.Z,{disabled:!0===t.videoPassthrough,title:"Did you read the documentation about video passthrough and understand the risks involved with enabling it?",icon:(0,a.jsx)(I,{}),onConfirm:()=>{n({fieldName:"videoPassthrough",value:!0})},okText:"Yes",cancelText:"No",getPopupContainer:e=>e,placement:"topLeft",children:[(0,a.jsx)("a",{href:"#",children:(0,a.jsxs)("div",{className:"advanced-description-switch-container",children:[(0,a.jsx)("div",{className:"advanced-description-wrapper",children:(0,a.jsx)("p",{children:"Use Video Passthrough?"})}),(0,a.jsx)(O.Z,{label:"",fieldName:"video-passthrough",checked:t.videoPassthrough,onChange:e=>{l&&n({fieldName:"videoPassthrough",value:e})}})]})}),(0,a.jsxs)("p",{children:["*",m.dL.videoPassthrough.tip]})]})})]})})]}),(0,a.jsxs)("div",{className:"form-module frame-rate-module",children:[(0,a.jsx)(i.Z.Title,{level:3,children:"Frame rate"}),(0,a.jsx)("p",{className:"description",children:m.nm.tip}),(0,a.jsxs)("div",{className:"segment-slider-container",children:[(0,a.jsx)(g.Z,{tipFormatter:e=>"".concat(e," ").concat(m.nm.unit),defaultValue:t.framerate,value:t.framerate,onChange:e=>{n({fieldName:"framerate",value:e})},step:m.nm.incrementBy,min:m.nm.min,max:m.nm.max,marks:m.Xq,disabled:t.videoPassthrough}),(0,a.jsx)("p",{className:"selected-value-note",children:l?"Framerate selection is disabled when Video Passthrough is enabled.":m.x8[t.framerate]||""})]}),(0,a.jsx)("p",{className:"read-more-subtext",children:(0,a.jsx)("a",{href:"https://owncast.online/docs/video/?source=admin#framerate",target:"_blank",rel:"noopener noreferrer",children:"Read more about framerates."})})]})]},"1")})]})},{Title:L}=i.Z,D=E()(()=>Promise.all([n.e(2074),n.e(7949)]).then(n.t.bind(n,77949,23)),{loadableGenerated:{webpack:()=>[77949]},ssr:!1}),U=()=>{let[e,t]=(0,l.useState)(!1),[n,r]=(0,l.useState)(!1),[i,o]=(0,l.useState)(0),{setMessage:s}=(0,l.useContext)(u.k),[c,d]=(0,l.useState)(m.gX),[p,g]=(0,l.useState)(null),x=(0,l.useContext)(f.a),{serverConfig:y,setFieldInConfigState:b}=x||{},{videoSettings:j}=y||{},{videoQualityVariants:k}=j||{};if(!j)return null;let E=()=>{g(null),clearTimeout(null)},P=()=>{t(!1),o(-1),d(m.gX)},T=async e=>{g((0,h.kg)(h.Jk)),await (0,m.Si)({apiPath:m.vv,data:{value:e},onSuccess:()=>{b({fieldName:"videoQualityVariants",value:e,path:"videoSettings"}),r(!1),P(),g((0,h.kg)(h.zv,"Variants updated")),setTimeout(E,m.sI),x.online&&s("Updating your video configuration will take effect the next time you begin a new stream.")},onError:e=>{g((0,h.kg)(h.Un,e)),r(!1),setTimeout(E,m.sI)}})},S=e=>{let t=[...k];t.splice(e,1),T(t)},O=[{title:"Name",dataIndex:"name",render:e=>e||"No name"},{title:"Video bitrate",dataIndex:"videoBitrate",key:"videoBitrate",render:(e,t)=>!e||t.videoPassthrough?"Same as source":"".concat(e," kbps")},{title:"CPU Usage",dataIndex:"cpuUsageLevel",key:"cpuUsageLevel",render:(e,t)=>{var n;return t.videoPassthrough?"n/a":(null===(n=m.I$[e])||void 0===n?void 0:n.split(" ")[0])||"Warning: please edit & reset"}},{title:"",dataIndex:"",key:"edit",render:e=>{let{key:n}=e,r=n-1;return(0,a.jsxs)("span",{className:"actions",children:[(0,a.jsx)(N.Z,{size:"small",onClick:()=>{o(r),d(k[r]),t(!0)},children:"Edit"}),(0,a.jsx)(N.Z,{className:"delete-button",icon:(0,a.jsx)(D,{}),size:"small",disabled:1===k.length,onClick:()=>{S(r)}})]})}}],_=k.map((e,t)=>({key:t+1,...e}));return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(L,{level:3,className:"section-title",children:"Stream output"}),(()=>{if(1!==k.length)return!1;let[e]=k;return m.i3.VIDEO_HEIGHT<=e.scaledHeight||m.i3.VIDEO_BITRATE<=e.videoBitrate})()&&(0,a.jsx)(w.Z,{message:m.i3.HELP_TEXT,type:"info",closable:!0}),(0,a.jsx)(v.E,{status:p}),(0,a.jsx)(Z.Z,{className:"variants-table",pagination:!1,size:"small",columns:O,dataSource:_}),(0,a.jsxs)(C.Z,{title:"Edit Video Variant Details",open:e,onOk:()=>{r(!0);let e=[...k];-1===i?e.push(c):e.splice(i,1,c),T(e)},onCancel:P,confirmLoading:n,width:900,children:[(0,a.jsx)(V,{dataState:{...c},onUpdateField:e=>{let{fieldName:t,value:n}=e;d({...c,[t]:n})}}),(0,a.jsx)(v.E,{status:p})]}),(0,a.jsx)("br",{}),(0,a.jsx)(N.Z,{type:"primary",onClick:()=>{o(-1),d(m.gX),t(!0)},children:"Add a new variant"})]})};var A=n(34261);let{Panel:B}=r.Z,{Title:R}=i.Z;function z(){return(0,a.jsxs)("div",{className:"config-video-variants",children:[(0,a.jsx)(R,{children:"Video configuration"}),(0,a.jsxs)("p",{className:"description",children:["Before changing your video configuration"," ",(0,a.jsx)("a",{href:"https://owncast.online/docs/video?source=admin",target:"_blank",rel:"noopener noreferrer",children:"visit the video documentation"})," ","to learn how it impacts your stream performance. The general rule is to start conservatively by having one middle quality stream output variant and experiment with adding more of varied qualities."]}),(0,a.jsxs)(o.Z,{gutter:[45,16],children:[(0,a.jsx)(s.Z,{md:24,lg:12,children:(0,a.jsx)("div",{className:"form-module variants-table-module",children:(0,a.jsx)(U,{})})}),(0,a.jsxs)(s.Z,{md:24,lg:12,children:[(0,a.jsx)("div",{className:"form-module latency-module",children:(0,a.jsx)(j,{})}),(0,a.jsx)(r.Z,{className:"advanced-settings codec-module",children:(0,a.jsx)(B,{header:"Advanced Settings",children:(0,a.jsx)("div",{className:"form-module variants-table-module",children:(0,a.jsx)(p,{})})},"1")})]})]})]})}z.getLayout=function(e){return(0,a.jsx)(A.l,{page:e})}},11163:function(e,t,n){e.exports=n(96885)}},function(e){e.O(0,[173,5874,7311,5634,4931,5402,5257,1664,5348,9915,4041,3698,3013,4398,9816,4261,9774,2888,179],function(){return e(e.s=6440)}),_N_E=e.O()}]);