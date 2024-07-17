(()=>{var e={6942:(e,t)=>{var o;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e="",t=0;t<arguments.length;t++){var o=arguments[t];o&&(e=r(e,i(o)))}return e}function i(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return a.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var o in e)n.call(e,o)&&e[o]&&(t=r(t,o));return t}function r(e,t){return t?e?e+" "+t:e+t:e}e.exports?(a.default=a,e.exports=a):void 0===(o=function(){return a}.apply(t,[]))||(e.exports=o)}()}},t={};function o(n){var a=t[n];if(void 0!==a)return a.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,o),i.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e=window.React,t=window.wp.blocks,n=window.wp.i18n,a=window.wp.blockEditor,i=window.wp.element,r=window.wp.data,c=(window.wp.components,(0,i.memo)((({attributes:t,setAttributes:o,parentBlockAttributes:r,device:c,advancedControl:l})=>{const{GkitBoxShadow:s,GkitColor:d,GkitIconPicker:g,GkitPanelBody:k,GkitRepeater:u,GkitResponsive:p,GkitSwitcher:m,GkitTabs:v,GkitTypography:h,GkitBackgrounGroup:b,GkitText:_,GkitSlider:f,GkitBoxControl:w,GkitBorderControl:E,GkitSelect:y}=window.gutenkit.components,{gkitResponsiveValue:C,useFontFamilyinBlock:S,responsiveHelper:N,colorsGroup:B,boxControlUnit:L}=window.gutenkit.helpers;return(0,i.useEffect)((()=>{let e=((e,t)=>{const{parseCSS:o,backgroundGenerator:n,getBoxShadowValue:a,getBoxValue:i,getBorderValue:r,getTypographyValue:c,getSliderValue:l,getColor:s}=window.gutenkit.helpers,d=e?.blockClass;return o({desktop:[{selector:`.${d}.gkit-card .gkit-card-header>.gkit-btn-link, .gkit-accordion .${d}.gkit-card.active .gkit-card-header>.gkit-btn-link`,color:s(e.titleColor),background:"curve-shape"!==t?.style?n(e?.background).background:void 0},{selector:`.curve-shape.gkit-accordion .${d}.gkit-card.active .gkit-card-header>.gkit-btn-link .path, .curve-shape.gkit-accordion .${d}.gkit-card .gkit-card-header>.gkit-btn-link .path`,fill:s("curve-shape"===t?.style?e.curveBackground:void 0),stroke:"curve-shape"===t?.style?e.curveStrokeColor:void 0},{selector:`.gkit-accordion .${d}.gkit-card .gkit-card-header .gkit-btn-link .gkit_accordion_icon_group .gkit_accordion_normal_icon, .gkit-accordion .${d}.gkit-card.active .gkit-card-header .gkit-btn-link .gkit_accordion_icon_group .gkit_accordion_active_icon`,fill:s(e.iconColor)}],tablet:[],mobile:[]})})(t,r);o({blocksCSS:e})}),[JSON.stringify(t)]),(0,e.createElement)(a.InspectorControls,{key:"setting"},(0,e.createElement)(v,{type:"top-level",tabs:[{name:"style",title:(0,n.__)("Style","gutenkit-blocks-addon")}]},(a=>"style"===a.name?(0,e.createElement)(e.Fragment,null,(0,e.createElement)(k,{title:(0,n.__)("Item","gutenkit-blocks-addon"),initialOpen:!0},(0,e.createElement)(m,{label:(0,n.__)("Enable Default Open","gutenkit-blocks-addon"),value:t?.defaultOpen,onChange:e=>o({defaultOpen:e})}),"curve-shape"!==r?.style&&(0,e.createElement)(b,{onChange:e=>o({background:e}),value:t?.background,exclude:{video:!0,image:!0}}),"curve-shape"===r?.style&&(0,e.createElement)(e.Fragment,null,(0,e.createElement)(d,{label:(0,n.__)("Background Color","gutenkit-blocks-addon"),onChange:e=>o({curveBackground:e}),value:t?.curveBackground}),(0,e.createElement)(d,{label:(0,n.__)("Border Color","gutenkit-blocks-addon"),onChange:e=>o({curveStrokeColor:e}),value:t?.curveStrokeColor})),(0,e.createElement)(d,{label:(0,n.__)("Title Color","gutenkit-blocks-addon"),onChange:e=>o({titleColor:e}),value:t?.titleColor}),(0,e.createElement)(d,{label:(0,n.__)("Icon Color","gutenkit-blocks-addon"),onChange:e=>o({iconColor:e}),value:t?.iconColor}))):a.name)))})));var l=o(6942),s=o.n(l);const d=window.wp.primitives,g=(0,e.createElement)(d.SVG,{version:"1.1",className:"svg-shape",x:"0px",y:"0px",viewBox:"0 0 541 64",height:"64",preserveAspectRatio:"none"},(0,e.createElement)(d.Polygon,{className:"path",points:"85,55 81,55 51,55 42.5,64 34,55 0,55 0,0 34.4,0 42.5,9.5 50.6,0 81,0 85,0 541,0 541,55 "})),k=JSON.parse('{"UU":"gutenkit/advanced-accordion-item"}');(0,t.registerBlockType)(k.UU,{edit:function({attributes:t,setAttributes:o,clientId:l}){const{GkitIcon:d,GkitStyle:k}=window.gutenkit.components,{useHasProActive:u}=window.gutenkit.helpers,p=u(),m=(0,r.select)("core/block-editor").getBlockParents(l).slice(-1)[0],v=(0,r.select)("core/block-editor").getBlockAttributes(m),[h,b]=(0,i.useState)(t.defaultOpen);let _=(0,a.useBlockProps)({className:s()("gkit-card",{active:h})});const f=(0,a.useInnerBlocksProps)({},{templateLock:!1,allowedBlocks:!!p||["gutenkit/advanced-paragraph"],template:[["gutenkit/advanced-paragraph",{content:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast"}]]}),w=s()("collapse",{show:h});return(0,i.useEffect)((()=>{o({parentBlockAttributes:v})}),[v]),(0,e.createElement)(e.Fragment,null,(0,e.createElement)(k,{blocksCSS:t?.blocksCSS}),(0,e.createElement)(c,{attributes:t,parentBlockAttributes:v,setAttributes:o}),(0,e.createElement)("div",{..._},(0,e.createElement)("div",{className:"gkit-card-header",onClick:()=>b(!h)},(0,e.createElement)("a",{className:"gkit-accordion--toggler gkit-btn-link collapsed"},("left"==v?.iconPosStyle||"bothside"==v?.iconPosStyle)&&(0,e.createElement)("div",{className:"gkit_accordion_icon_left_group"},(0,e.createElement)(d,{icon:v?.leftIcons,className:"gkit_accordion_normal_icon icon-left"}),(0,e.createElement)(d,{icon:v?.leftIconActives,className:"gkit_accordion_active_icon icon-left"})),1==v?.displayLoopCount&&(0,e.createElement)("span",{className:"number"}),(0,e.createElement)(a.RichText,{identifier:"title",tagName:"span",value:t.title,onChange:e=>o({title:e}),placeholder:(0,n.__)("How to Change my Photo from Admin Dashboard?","gutenkit-blocks-addon"),className:"gkit-accordion-title"}),("right"==v?.iconPosStyle||"bothside"==v?.iconPosStyle)&&(0,e.createElement)("div",{className:"gkit_accordion_icon_group"},(0,e.createElement)(d,{icon:v?.rightIcons,className:"gkit_accordion_normal_icon icon-right"}),(0,e.createElement)(d,{icon:v?.rightIconActives,className:"gkit_accordion_active_icon icon-right"})),"curve-shape"==v?.style&&g)),(0,e.createElement)("div",{className:w},(0,e.createElement)("div",{className:"gkit-card-body gkit-accordion--content"},void 0!==p&&(0,e.createElement)("div",{...f})))))},icon:{src:(0,e.createElement)("svg",{width:"800px",height:"800px",viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg"},(0,e.createElement)("g",{id:"Page-1",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},(0,e.createElement)("g",{id:"icon",fill:"#000000",transform:"translate(42.666667, 85.333333)"},(0,e.createElement)("path",{d:"M426.666667,1.42108547e-14 L426.666667,341.333333 L3.55271368e-14,341.333333 L3.55271368e-14,1.42108547e-14 L426.666667,1.42108547e-14 Z M384,42.6666667 L42.6666667,42.6666667 L42.6666667,298.666667 L384,298.666667 L384,42.6666667 Z M341.333333,213.333333 L341.333333,245.333333 L234.666667,245.333333 L234.666667,213.333333 L341.333333,213.333333 Z M341.333333,149.333333 L341.333333,181.333333 L234.666667,181.333333 L234.666667,149.333333 L341.333333,149.333333 Z M192,85.3333333 L192,170.666667 L85.3333333,170.666667 L85.3333333,85.3333333 L192,85.3333333 Z M341.333333,85.3333333 L341.333333,117.333333 L234.666667,117.333333 L234.666667,85.3333333 L341.333333,85.3333333 Z",id:"Combined-Shape"}))))},save:function({attributes:t}){const{GkitIcon:o}=window.gutenkit.components,{parentBlockAttributes:n}=t,i=a.useBlockProps.save({className:s()("gkit-card",{active:t.defaultOpen})}),r=s()("collapse",{show:t.defaultOpen}),c=a.useInnerBlocksProps.save();return(0,e.createElement)("div",{...i},(0,e.createElement)("div",{className:"gkit-card-header"},(0,e.createElement)("a",{className:"gkit-accordion--toggler gkit-btn-link collapsed"},("left"==n?.iconPosStyle||"bothside"==n?.iconPosStyle)&&(0,e.createElement)("div",{className:"gkit_accordion_icon_left_group"},(0,e.createElement)(o,{icon:n?.leftIcons,className:"gkit_accordion_normal_icon icon-left"}),(0,e.createElement)(o,{icon:n?.leftIconActives,className:"gkit_accordion_active_icon icon-left"})),1==n?.displayLoopCount&&(0,e.createElement)("span",{className:"number"}),(0,e.createElement)(a.RichText.Content,{identifier:"title",tagName:"span",value:t.title,className:"gkit-accordion-title"}),("right"==n?.iconPosStyle||"bothside"==n?.iconPosStyle)&&(0,e.createElement)("div",{className:"gkit_accordion_icon_group"},(0,e.createElement)(o,{icon:n?.rightIcons,className:"gkit_accordion_normal_icon icon-right"}),(0,e.createElement)(o,{icon:n?.rightIconActives,className:"gkit_accordion_active_icon icon-right"})),"curve-shape"==n?.style&&g)),(0,e.createElement)("div",{className:r},(0,e.createElement)("div",{className:"gkit-card-body gkit-accordion--content"},(0,e.createElement)("div",{...c}))))}})})()})();