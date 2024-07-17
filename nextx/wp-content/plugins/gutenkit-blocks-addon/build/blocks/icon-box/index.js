(()=>{var o,e={3044:(o,e,n)=>{"use strict";const t=window.wp.blocks,i=window.React,a=window.wp.i18n,c=window.wp.element,l=window.wp.blockEditor,r=window.wp.components,g=window.wp.primitives,d=(0,i.createElement)(g.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,i.createElement)(g.Path,{d:"M13 5.5H4V4h9v1.5Zm7 7H4V11h16v1.5Zm-7 7H4V18h9v1.5Z"})),B=(0,i.createElement)(g.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,i.createElement)(g.Path,{d:"M7.5 5.5h9V4h-9v1.5Zm-3.5 7h16V11H4v1.5Zm3.5 7h9V18h-9v1.5Z"})),x=(0,i.createElement)(g.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,i.createElement)(g.Path,{d:"M11.111 5.5H20V4h-8.889v1.5ZM4 12.5h16V11H4v1.5Zm7.111 7H20V18h-8.889v1.5Z"})),b=(0,i.createElement)(g.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,i.createElement)(g.Path,{d:"M14.6 7l-1.2-1L8 12l5.4 6 1.2-1-4.6-5z"})),s=(0,i.createElement)(g.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,i.createElement)(g.Path,{d:"M10.6 6L9.4 7l4.6 5-4.6 5 1.2 1 5.4-6z"})),k=(0,i.createElement)(g.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,i.createElement)(g.Path,{d:"M6.5 12.4L12 8l5.5 4.4-.9 1.2L12 10l-4.5 3.6-1-1.2z"})),u=(0,i.createElement)(g.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,i.createElement)(g.Path,{d:"M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z"})),m=(0,i.createElement)(g.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,i.createElement)(g.Path,{d:"M12 3.9 6.5 9.5l1 1 3.8-3.7V20h1.5V6.8l3.7 3.7 1-1z"})),h=(0,i.createElement)(g.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,i.createElement)(g.Path,{d:"M12.5 15v5H11v-5H4V9h7V4h1.5v5h7v6h-7Z"})),v=(0,i.createElement)(g.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,i.createElement)(g.Path,{d:"m16.5 13.5-3.7 3.7V4h-1.5v13.2l-3.8-3.7-1 1 5.5 5.6 5.5-5.6z"})),p=(0,c.memo)((({attributes:o,setAttributes:e,device:n,advancedControl:t})=>{const{GkitTabs:g,GkitPanelBody:p,GkitSwitcher:_,GkitChoose:E,GkitSlider:w,GkitText:C,GkitBoxShadow:H,GkitColor:I,GkitTypography:T,GkitResponsive:S,GkitBackgrounGroup:y,GkitIconPicker:f,GkitAdvancedUrl:M,GkitAnimation:D,GkitBoxControl:P,GkitBorderControl:V,GkitSelect:z}=window.gutenkit.components,{gkitResponsiveValue:A,useFontFamilyinBlock:$,responsiveHelper:R}=window.gutenkit.helpers;return(0,c.useEffect)((()=>{const n=(o=>{const{parseCSS:e,backgroundGenerator:n,getBoxShadowValue:t,getBoxValue:i,getBorderValue:a,getTypographyValue:c,getSliderValue:l,getColor:r}=window.gutenkit.helpers,g=o?.blockClass,d={},B={};"left"!==o?.iconBoxContainerHoverHoverDirection&&"right"!==o?.iconBoxContainerHoverHoverDirection||(d[o?.iconBoxContainerHoverHoverDirection]="-100%",d.top="0",B[o?.iconBoxContainerHoverHoverDirection]="0"),"top"!==o?.iconBoxContainerHoverHoverDirection&&"bottom"!==o?.iconBoxContainerHoverHoverDirection||(d[o?.iconBoxContainerHoverHoverDirection]="-100%",d.left="0",B[o?.iconBoxContainerHoverHoverDirection]="0");const x=e=>{let n={};return n=0!==o?.iconBoxBadgeTitle?.length?{...i(o?.[`iconBoxBadgePadding${e}`],"padding")}:"0px",n};return e({desktop:[{selector:`.${g}.gkit-icon-box`,"align-items":["row-reverse","row"].includes(o?.iconBoxHeaderIconPositionDesktop)?void 0:o?.iconBoxContentAlignmentDesktop,"flex-direction":o?.iconBoxHeaderIconPositionDesktop},{selector:`.${g} .gkit-icon-box-body`,"text-align":o?.iconBoxContentAlignmentDesktop},{selector:`.${g}.gkit-icon-box-hover-background-animation::before`,background:n(o?.commonHoverBackground).background,...d},{selector:`.${g}.gkit-icon-box-hover-background-animation:hover:before`,...B},{selector:`.${g}.gkit-icon-box .gkit-icon-box-header`,"align-self":o?.iconBoxContentVerticalAlignmentDesktop},{selector:`.${g}.gkit-icon-box .gkit-icon-box-body .gkit-icon-box-title`,...i(o?.iconBoxTitleMarginDesktop,"margin"),color:r(o?.iconBoxTitleColor),...c(o?.iconBoxTitleTypography,"Desktop")},{selector:`.${g}.gkit-icon-box:hover .gkit-icon-box-title`,color:r(o?.iconBoxTitleHoverColor)},{selector:`.${g}.gkit-icon-box .gkit-icon-box-description`,color:r(o?.iconBoxDescriptionColor),...c(o?.iconBoxDescriptionTypography,"Desktop"),...i(o?.iconBoxDescriptionMarginDesktop,"padding")},{selector:`.${g}.gkit-icon-box:hover .gkit-icon-box-description`,color:r(o?.iconBoxDescriptionHoverColor)},{selector:`.${g}.gkit-icon-box .gkit-icon-box-watermark`,fill:r(o?.iconBoxWaterMarkIconColor),"font-size":l(o?.iconBoxWaterMarkIconSizeDesktop)},{selector:`.${g}.gkit-icon-box .gkit-icon-box-header:is(.gkit-icon-box-header-icon)`,fill:r(o?.iconBoxIconColor),background:n(o?.iconBoxIconBackgroundColor).background,...a(o?.iconBoxIconBorder),...i(o?.iconBoxIconBorderRadiusDesktop,"border-radius"),"box-shadow":t(o?.iconBoxIconBoxShadow),"font-size":l(o?.iconBoxIconSizeDesktop),...i(o?.iconBoxIconPaddingDesktop,"padding"),rotate:l(o?.iconBoxIconRotateDesktop),height:o?.useHeightWidthIcon&&l(o.iconHeightDesktop),width:o?.useHeightWidthIcon&&l(o.iconWidthDesktop),"line-height":o?.useHeightWidthIcon&&l(o.iconLineHeightDesktop),...i(o?.iconBoxIconSpacingDesktop,"margin"),transform:`translateY(${l(o?.iconBoxIconVerticalAlignDesktop)})`},{selector:`.${g}.gkit-icon-box:hover .gkit-icon-box-header:is(.gkit-icon-box-header-icon)`,fill:r(o?.iconBoxIconHoverColor),background:n(o?.iconBoxIconHoverBackgroundColor).background,...a(o?.iconBoxIconHoverBorder),...i(o?.iconBoxIconHoverBorderRadiusDesktop,"border-radius"),"box-shadow":t(o?.iconBoxIconHoverBoxShadow)},{selector:`.${g}.gkit-icon-box .gkit-icon-box-button-wrapper .gkit-icon-box-button`,color:r(o?.iconBoxBtnTextColor),fill:r(o?.iconBoxBtnTextColor),background:n(o?.iconBoxBtnBackground).background,...a(o?.iconBoxBtnBorder),"box-shadow":t(o?.iconBoxBtnBoxShadow),...c(o?.iconBoxBtnTypography,"Desktop"),...i(o?.iconBoxBtnPaddingDesktop,"padding"),...i(o?.iconBoxBtnMarginDesktop,"margin"),...i(o?.iconBoxBtnBorderRadiusDesktop,"border-radius")},{selector:`.${g}.gkit-icon-box .gkit-icon-box-button-wrapper .gkit-icon-box-button .gkit-btn-right-icon`,"font-size":l(o?.iconBoxBtnIconSizeDesktop)},{selector:`.${g}.gkit-icon-box:hover .gkit-icon-box-button-wrapper .gkit-icon-box-button`,color:r(o?.iconBoxBtnHoverColor),fill:r(o?.iconBoxBtnHoverColor),background:n(o?.iconBoxBtnHoverBackground).background,...a(o?.iconBoxBtnHoverBorder),"box-shadow":t(o?.iconBoxBtnHoverBoxShadow),...i(o?.iconBoxBtnHoverBorderRadiusDesktop,"border-radius")},{selector:`.${g}.gkit-icon-box .gkit-icon-box-badge`,left:"left"===o?.gkitVerticalBadge?l(o?.gkitVerticalBadgePositionDesktop):"",right:"right"===o?.gkitVerticalBadge?l(o?.gkitVerticalBadgePositionDesktop):"",top:"top"===o?.gkitHorizontalBadge?l(o?.gkitHorizontalBadgePositionDesktop):"",bottom:"bottom"===o?.gkitHorizontalBadge?l(o?.gkitHorizontalBadgePositionDesktop):""},{selector:`.${g}.gkit-icon-box .gkit-icon-box-badge .gkit-icon-box-badge-text`,color:r(o?.iconBoxBadgeTextColor),background:n(o?.iconBoxBadgeBackground).background,"background-size":n(o?.iconBoxBadgeBackground).size,"box-shadow":t(o?.iconBoxBadgeBoxShadow),...c(o?.iconBoxBadgeTypography,"Desktop"),...i(o?.iconBoxBadgeBorderRadiusDesktop,"border-radius"),...x("Desktop")},{selector:`.${g} .gkit-icon-box-button .gkit-btn-left-icon`,"margin-right":l(o?.iconBoxBtnIconSpacing)},{selector:`.${g} .gkit-icon-box-button .gkit-btn-right-icon`,"margin-left":l(o?.iconBoxBtnIconSpacing)},{selector:`.${g} .gkit-icon-box-button .gkit-btn-right-icon svg`,transform:`translateY(${l(o?.iconBoxBtnIconVerticalAlignDesktop)})`}],tablet:[{selector:`.${g}.gkit-icon-box`,"align-items":["row-reverse","row"].includes(o?.iconBoxHeaderIconPositionTablet)?void 0:o?.iconBoxContentAlignmentTablet,"flex-direction":o?.iconBoxHeaderIconPositionTablet},{selector:`.${g} .gkit-icon-box-body`,"text-align":o?.iconBoxContentAlignmentTablet},{selector:`.${g}.gkit-icon-box .gkit-icon-box-header`,"align-self":o?.iconBoxContentVerticalAlignmentTablet},{selector:`.${g}.gkit-icon-box .gkit-icon-box-body .gkit-icon-box-title`,...i(o?.iconBoxTitleMarginTablet,"margin"),...c(o?.iconBoxTitleTypography,"Tablet")},{selector:`.${g}.gkit-icon-box .gkit-icon-box-description`,...c(o?.iconBoxDescriptionTypography,"Tablet"),...i(o?.iconBoxDescriptionMarginTablet,"margin"),...i(o?.iconBoxDescriptionPaddingTablet,"padding")},{selector:`.${g}.gkit-icon-box .gkit-icon-box-watermark`,"font-size":l(o?.iconBoxWaterMarkIconSizeTablet)},{selector:`.${g}.gkit-icon-box .gkit-icon-box-header:is(.gkit-icon-box-header-icon)`,...i(o?.iconBoxIconBorderRadiusTablet,"border-radius"),"font-size":l(o?.iconBoxIconSizeTablet),...i(o?.iconBoxIconPaddingTablet,"padding"),rotate:l(o?.iconBoxIconRotateTablet),height:o?.useHeightWidthIcon&&l(o.iconHeightTablet),width:o?.useHeightWidthIcon&&l(o.iconWidthTablet),"line-height":o?.useHeightWidthIcon&&l(o.iconLineHeightTablet),...i(o?.iconBoxIconSpacingTablet,"margin"),transform:`translateY(${l(o?.iconBoxIconVerticalAlignTablet)})`},{selector:`.${g}.gkit-icon-box:hover .gkit-icon-box-header:is(.gkit-icon-box-header-icon)`,...i(o?.iconBoxIconHoverBorderRadiusTablet,"border-radius")},{selector:`.${g}.gkit-icon-box .gkit-icon-box-button-wrapper .gkit-icon-box-button`,...c(o?.iconBoxBtnTypography,"Tablet"),...i(o?.iconBoxBtnPaddingTablet,"padding"),...i(o?.iconBoxBtnMarginTablet,"margin"),...i(o?.iconBoxBtnBorderRadiusTablet,"border-radius")},{selector:`.${g}.gkit-icon-box .gkit-icon-box-button-wrapper .gkit-icon-box-button .gkit-btn-right-icon`,"font-size":l(o?.iconBoxBtnIconSizeTablet)},{selector:`.${g}.gkit-icon-box:hover .gkit-icon-box-button-wrapper .gkit-icon-box-button`,...i(o?.iconBoxBtnHoverBorderRadiusTablet,"border-radius")},{selector:`.${g}.gkit-icon-box .gkit-icon-box-badge .gkit-icon-box-badge-text`,...c(o?.iconBoxBadgeTypography,"Tablet"),...i(o?.iconBoxBadgePaddingTablet,"padding"),...i(o?.iconBoxBadgeBorderRadiusTablet,"border-radius"),...x("Tablet")},{selector:`.${g} .gkit-icon-box-button .gkit-btn-right-icon svg`,transform:`translateY(${l(o?.iconBoxBtnIconVerticalAlignTablet)})`}],mobile:[{selector:`.${g}.gkit-icon-box`,"align-items":["row-reverse","row"].includes(o?.iconBoxHeaderIconPositionMobile)?void 0:o?.iconBoxContentAlignmentMobile,"flex-direction":o?.iconBoxHeaderIconPositionMobile},{selector:`.${g} .gkit-icon-box-body`,"text-align":o?.iconBoxContentAlignmentMobile},{selector:`.${g}.gkit-icon-box .gkit-icon-box-header`,"align-self":o?.iconBoxContentVerticalAlignmentMobile},{selector:`.${g}.gkit-icon-box .gkit-icon-box-body .gkit-icon-box-title`,...i(o?.iconBoxTitleMarginMobile,"margin"),...c(o?.iconBoxTitleTypography,"Mobile")},{selector:`.${g}.gkit-icon-box .gkit-icon-box-description`,...c(o?.iconBoxDescriptionTypography,"Mobile"),...i(o?.iconBoxDescriptionMarginMobile,"margin"),...i(o?.iconBoxDescriptionPaddingMobile,"padding")},{selector:`.${g}.gkit-icon-box .gkit-icon-box-body .gkit-icon-box-watermark`,"font-size":l(o?.iconBoxWaterMarkIconSizeMobile)},{selector:`.${g}.gkit-icon-box .gkit-icon-box-header:is(.gkit-icon-box-header-icon)`,...i(o?.iconBoxIconBorderRadiusMobile,"border-radius"),"font-size":l(o?.iconBoxIconSizeMobile),...i(o?.iconBoxIconPaddingMobile,"padding"),rotate:l(o?.iconBoxIconRotateMobile),height:o?.useHeightWidthIcon&&l(o.iconHeightMobile),width:o?.useHeightWidthIcon&&l(o.iconWidthMobile),"line-height":o?.useHeightWidthIcon&&l(o.iconLineHeightMobile),...i(o?.iconBoxIconSpacingMobile,"margin"),transform:`translateY(${l(o?.iconBoxIconVerticalAlignMobile)})`},{selector:`.${g}.gkit-icon-box:hover .gkit-icon-box-header:is(.gkit-icon-box-header-icon)`,...i(o?.iconBoxIconHoverBorderRadiusMobile,"border-radius")},{selector:`.${g}.gkit-icon-box .gkit-icon-box-button-wrapper .gkit-icon-box-button`,...c(o?.iconBoxBtnTypography,"Mobile"),...i(o?.iconBoxBtnPaddingMobile,"padding"),...i(o?.iconBoxBtnMarginMobile,"margin"),...i(o?.iconBoxBtnBorderRadiusMobile,"border-radius")},{selector:`.${g}.gkit-icon-box .gkit-icon-box-button-wrapper .gkit-icon-box-button .gkit-btn-right-icon`,"font-size":l(o?.iconBoxBtnIconSizeMobile)},{selector:`.${g}.gkit-icon-box:hover .gkit-icon-box-button-wrapper .gkit-icon-box-button`,...i(o?.iconBoxBtnHoverBorderRadiusMobile,"border-radius")},{selector:`.${g}.gkit-icon-box .gkit-icon-box-badge .gkit-icon-box-badge-text`,...c(o?.iconBoxBadgeTypography,"Mobile"),...i(o?.iconBoxBadgePaddingMobile,"padding"),...i(o?.iconBoxBadgeBorderRadiusMobile,"border-radius"),...x("Mobile")},{selector:`.${g} .gkit-icon-box-button .gkit-btn-right-icon svg`,transform:`translateY(${l(o?.iconBoxBtnIconVerticalAlignMobile)})`}]})})(o);e({blocksCSS:n})}),[JSON.stringify(o)]),$([o?.iconBoxTitleTypography,o?.iconBoxDescriptionTypography,o?.iconBoxBtnTypography,o?.iconBoxBadgeTypography]),(0,i.createElement)(i.Fragment,null,(0,i.createElement)(l.InspectorControls,null,(0,i.createElement)(g,{type:"top-level",tabs:[{name:"content",title:(0,a.__)("Content","gutenkit-blocks-addon")},{name:"style",title:(0,a.__)("Style","gutenkit-blocks-addon")},{name:"advanced",title:(0,a.__)("Advanced","gutenkit-blocks-addon")}]},(c=>{switch(c.name){case"content":return(0,i.createElement)(i.Fragment,null,(0,i.createElement)(p,{title:(0,a.__)("Icon","gutenkit-blocks-addon"),initialOpen:!0},(0,i.createElement)(_,{label:(0,a.__)("Add Icon?","gutenkit-blocks-addon"),value:o?.iconBoxShowHeaderIcon,onChange:o=>e({iconBoxShowHeaderIcon:o})}),o?.iconBoxShowHeaderIcon&&(0,i.createElement)(f,{label:(0,a.__)("Header Icon","gutenkit-blocks-addon"),value:o?.iconBoxHeaderIcon,onChange:o=>e({iconBoxHeaderIcon:o})})),(0,i.createElement)(p,{title:(0,a.__)("Button","gutenkit-blocks-addon")},(0,i.createElement)(_,{label:(0,a.__)("Enable Button","gutenkit-blocks-addon"),value:o?.iconBoxShowButton,onChange:o=>e({iconBoxShowButton:o})}),o?.iconBoxShowButton?(0,i.createElement)(i.Fragment,null,(0,i.createElement)(_,{label:(0,a.__)("Enable Button on Hover","gutenkit-blocks-addon"),value:o?.iconBoxEnableHoverBtn,onChange:o=>e({iconBoxEnableHoverBtn:o})}),(0,i.createElement)(C,{value:o?.iconBoxBtnText,label:(0,a.__)("Label","gutenkit-blocks-addon"),onChange:o=>e({iconBoxBtnText:o}),labelBlock:"block"}),(0,i.createElement)(M,{value:o?.iconBoxBtnUrl,onChange:o=>e({iconBoxBtnUrl:o})}),(0,i.createElement)(r.__experimentalDivider,null),(0,i.createElement)(_,{label:(0,a.__)("Show Icon","gutenkit-blocks-addon"),value:o?.iconBoxShowBtnIcon,onChange:o=>e({iconBoxShowBtnIcon:o})}),o?.iconBoxShowBtnIcon&&(0,i.createElement)(i.Fragment,null,(0,i.createElement)(f,{label:(0,a.__)("Choose Icon","gutenkit-blocks-addon"),value:o?.iconBoxBtnIcon,onChange:o=>e({iconBoxBtnIcon:o})}),(0,i.createElement)(E,{label:(0,a.__)("Icon Position","gutenkit-blocks-addon"),options:[{label:(0,a.__)("After","gutenkit-blocks-addon"),value:"after"},{label:(0,a.__)("Before","gutenkit-blocks-addon"),value:"before"}],onChange:o=>e({iconBoxBtnIconPosition:o}),value:o?.iconBoxBtnIconPosition,isToggle:!1}))):(0,i.createElement)(i.Fragment,null,(0,i.createElement)(_,{label:(0,a.__)("Wrapper Link","gutenkit-blocks-addon"),value:o?.iconBoxShowGlobalLink,onChange:o=>e({iconBoxShowGlobalLink:o})}),o?.iconBoxShowGlobalLink&&(0,i.createElement)(M,{value:o?.iconBoxGlobalLinkUrl,onChange:o=>e({iconBoxGlobalLinkUrl:o})}))),(0,i.createElement)(p,{title:(0,a.__)("Badge","gutenkit-blocks-addon")},(0,i.createElement)(_,{label:(0,a.__)("Show Badge","gutenkit-blocks-addon"),value:o?.iconBoxShowBadge,onChange:o=>e({iconBoxShowBadge:o})}),o?.iconBoxShowBadge&&(0,i.createElement)(i.Fragment,null,(0,i.createElement)(C,{label:(0,a.__)("Title","gutenkit-blocks-addon"),value:o?.iconBoxBadgeTitle,onChange:o=>e({iconBoxBadgeTitle:o}),labelBlock:"block"}),(0,i.createElement)(E,{label:(0,a.__)("Vertical Badge Position","gutenkit-blocks-addon"),value:o?.gkitVerticalBadge,options:[{label:(0,a.__)("Left","gutenkit-blocks-addon"),value:"left"},{label:(0,a.__)("Right","gutenkit-blocks-addon"),value:"right"}],onChange:o=>{e({gkitVerticalBadge:o})},isToggle:!1}),(0,i.createElement)(S,null,(0,i.createElement)(w,{label:(0,a.__)(o?.gkitVerticalBadge||"Left","gutenkit-blocks-addon"),value:A(o,"gkitVerticalBadgePosition",n),sizeUnits:["px","%","vw"],onChange:o=>R("gkitVerticalBadgePosition",o,n,e),range:{min:-1e3,max:1e3}})),(0,i.createElement)(E,{label:(0,a.__)("Horizontal Badge Position","gutenkit-blocks-addon"),value:o?.gkitHorizontalBadge,options:[{label:(0,a.__)("Top","gutenkit-blocks-addon"),value:"top"},{label:(0,a.__)("Bottom","gutenkit-blocks-addon"),value:"bottom"}],onChange:o=>{e({gkitHorizontalBadge:o})},isToggle:!1}),(0,i.createElement)(S,null,(0,i.createElement)(w,{label:(0,a.__)(o?.gkitHorizontalBadge||"Top","gutenkit-blocks-addon"),value:A(o,"gkitHorizontalBadgePosition",n),sizeUnits:["px","%","vh"],onChange:o=>R("gkitHorizontalBadgePosition",o,n,e),range:{min:-1e3,max:1e3}})))),(0,i.createElement)(p,{title:(0,a.__)("Settings","gutenkit-blocks-addon")},(0,i.createElement)(_,{label:(0,a.__)("Enable Hover Water Mark","gutenkit-blocks-addon"),value:o?.iconBoxEnableWaterMark,onChange:o=>e({iconBoxEnableWaterMark:o})}),o?.iconBoxEnableWaterMark&&(0,i.createElement)(f,{label:(0,a.__)("Choose Watermark Icon","gutenkit-blocks-addon"),value:o?.iconBoxWaterMarkIcon,onChange:o=>e({iconBoxWaterMarkIcon:o})}),o?.iconBoxShowHeaderIcon&&(0,i.createElement)(S,null,(0,i.createElement)(E,{label:(0,a.__)("Header Icon Position","gutenkit-blocks-addon"),options:[{label:(0,a.__)("Top","gutenkit-blocks-addon"),value:"column"},{label:(0,a.__)("Left","gutenkit-blocks-addon"),value:"row"},{label:(0,a.__)("Right","gutenkit-blocks-addon"),value:"row-reverse"}],onChange:o=>R("iconBoxHeaderIconPosition",o,n,e),value:A(o,"iconBoxHeaderIconPosition",n)})),(0,i.createElement)(S,null,(0,i.createElement)(E,{label:(0,a.__)("Content Alignment","gutenkit-blocks-addon"),options:[{label:(0,a.__)("Left","gutenkit-blocks-addon"),value:"start",icon:d},{label:(0,a.__)("Center","gutenkit-blocks-addon"),value:"center",icon:B},{label:(0,a.__)("Right","gutenkit-blocks-addon"),value:"end",icon:x}],value:A(o,"iconBoxContentAlignment",n),onChange:o=>R("iconBoxContentAlignment",o,n,e)})),(0,i.createElement)(z,{label:(0,a.__)("Title HTML Tag","gutenkit-blocks-addon"),value:o?.iconBoxTitleTag,options:[{label:(0,a.__)("H1","gutenkit-blocks-addon"),value:"h1"},{label:(0,a.__)("H2","gutenkit-blocks-addon"),value:"h2"},{label:(0,a.__)("H3","gutenkit-blocks-addon"),value:"h3"},{label:(0,a.__)("H4","gutenkit-blocks-addon"),value:"h4"},{label:(0,a.__)("H5","gutenkit-blocks-addon"),value:"h5"},{label:(0,a.__)("H6","gutenkit-blocks-addon"),value:"h6"},{label:(0,a.__)("div","gutenkit-blocks-addon"),value:"div"},{label:(0,a.__)("span","gutenkit-blocks-addon"),value:"span"},{label:(0,a.__)("p","gutenkit-blocks-addon"),value:"p"}],onChange:o=>e({iconBoxTitleTag:o}),__nextHasNoMarginBottom:!0})));case"style":return(0,i.createElement)(i.Fragment,null,(0,i.createElement)(p,{title:(0,a.__)("Icon Box Container","gutenkit-blocks-addon"),initialOpen:!0},(0,i.createElement)(_,{label:(0,a.__)("Add Hover Animation","gutenkit-blocks-addon"),value:o?.iconBoxContainerHoverAnimationSwitch,onChange:o=>e({iconBoxContainerHoverAnimationSwitch:o})}),o?.iconBoxContainerHoverAnimationSwitch&&(0,i.createElement)(D,{label:(0,a.__)("Hover Animation","gutenkit-blocks-addon"),value:o?.iconBoxContainerHoverAnimation,onChange:o=>e({iconBoxContainerHoverAnimation:o}),type:"hover-animation"}),(0,i.createElement)(_,{label:(0,a.__)("Add Hover Background Animation","gutenkit-blocks-addon"),help:(0,a.__)("You need to add background from Advanced Tab to use the hover background animation","gutenkit-blocks-addon"),value:o?.iconBoxContainerHoverBackgroundAnimation,onChange:o=>e({iconBoxContainerHoverBackgroundAnimation:o})}),o?.iconBoxContainerHoverBackgroundAnimation&&(0,i.createElement)(E,{label:(0,a.__)("Animation Direction","gutenkit-blocks-addon"),options:[{label:(0,a.__)("Left","gutenkit-blocks-addon"),value:"left",icon:b},{label:(0,a.__)("Right","gutenkit-blocks-addon"),value:"right",icon:s},{label:(0,a.__)("Top","gutenkit-blocks-addon"),value:"top",icon:k},{label:(0,a.__)("Bottom","gutenkit-blocks-addon"),value:"bottom",icon:u}],onChange:o=>e({iconBoxContainerHoverHoverDirection:o}),value:o?.iconBoxContainerHoverHoverDirection})),(0,i.createElement)(p,{title:(0,a.__)("Content","gutenkit-blocks-addon")},o?.iconBoxShowHeaderIcon&&"column"!==o?.iconBoxHeaderIconPosition&&(0,i.createElement)(i.Fragment,null,(0,i.createElement)(S,null,(0,i.createElement)(E,{label:(0,a.__)("Alignment","gutenkit-blocks-addon"),options:[{label:(0,a.__)("Top","gutenkit-blocks-addon"),value:"start",icon:m},{label:(0,a.__)("Center","gutenkit-blocks-addon"),value:"center",icon:h},{label:(0,a.__)("Bottom","gutenkit-blocks-addon"),value:"end",icon:v}],onChange:o=>R("iconBoxContentVerticalAlignment",o,n,e),value:A(o,"iconBoxContentVerticalAlignment",n)})),(0,i.createElement)(r.__experimentalDivider,null)),(0,i.createElement)(r.__experimentalHeading,null,(0,a.__)("Title","gutenkit-blocks-addon")),(0,i.createElement)(S,null,(0,i.createElement)(P,{label:(0,a.__)("Margin","gutenkit-blocks-addon"),values:A(o,"iconBoxTitleMargin",n),onChange:o=>R("iconBoxTitleMargin",o,n,e)})),(0,i.createElement)(I,{label:(0,a.__)("Color","gutenkit-blocks-addon"),value:o?.iconBoxTitleColor,onChange:o=>e({iconBoxTitleColor:o})}),(0,i.createElement)(I,{label:(0,a.__)("Hover Color","gutenkit-blocks-addon"),value:o?.iconBoxTitleHoverColor,onChange:o=>e({iconBoxTitleHoverColor:o})}),(0,i.createElement)(T,{label:(0,a.__)("Typography","gutenkit-blocks-addon"),value:o?.iconBoxTitleTypography,onChange:o=>e({iconBoxTitleTypography:o})}),(0,i.createElement)(r.__experimentalDivider,null),(0,i.createElement)(r.__experimentalHeading,null,(0,a.__)("Description","gutenkit-blocks-addon")),(0,i.createElement)(I,{label:(0,a.__)("Color","gutenkit-blocks-addon"),value:o?.iconBoxDescriptionColor,onChange:o=>e({iconBoxDescriptionColor:o})}),(0,i.createElement)(I,{label:(0,a.__)("Hover Color","gutenkit-blocks-addon"),value:o?.iconBoxDescriptionHoverColor,onChange:o=>e({iconBoxDescriptionHoverColor:o})}),(0,i.createElement)(T,{label:(0,a.__)("Typography","gutenkit-blocks-addon"),value:o?.iconBoxDescriptionTypography,onChange:o=>e({iconBoxDescriptionTypography:o})}),(0,i.createElement)(S,null,(0,i.createElement)(P,{label:(0,a.__)("Margin","gutenkit-blocks-addon"),values:A(o,"iconBoxDescriptionMargin",n),onChange:o=>R("iconBoxDescriptionMargin",o,n,e)})),o?.iconBoxEnableWaterMark&&(0,i.createElement)(i.Fragment,null,(0,i.createElement)(r.__experimentalDivider,null),(0,i.createElement)(r.__experimentalHeading,null,(0,a.__)("Water Mark","gutenkit-blocks-addon")),(0,i.createElement)(I,{label:(0,a.__)("Color","gutenkit-blocks-addon"),value:o?.iconBoxWaterMarkIconColor,onChange:o=>e({iconBoxWaterMarkIconColor:o})}),(0,i.createElement)(S,null,(0,i.createElement)(w,{label:(0,a.__)("Water Mark Icon Size","gutenkit-blocks-addon"),value:A(o,"iconBoxWaterMarkIconSize",n),onChange:o=>R("iconBoxWaterMarkIconSize",o,n,e),sizeUnits:["px"]})))),o?.iconBoxShowHeaderIcon&&(0,i.createElement)(p,{title:(0,a.__)("Icon","gutenkit-blocks-addon")},(0,i.createElement)(S,null,(0,i.createElement)(w,{label:(0,a.__)("Size","gutenkit-blocks-addon"),value:A(o,"iconBoxIconSize",n),onChange:o=>R("iconBoxIconSize",o,n,e),sizeUnits:["px"],range:{min:6,max:300}})),(0,i.createElement)(S,null,(0,i.createElement)(w,{label:(0,a.__)("Rotate","gutenkit-blocks-addon"),value:A(o,"iconBoxIconRotate",n),onChange:o=>R("iconBoxIconRotate",o,n,e),sizeUnits:["deg"],range:{min:0,max:360}})),(0,i.createElement)(S,null,(0,i.createElement)(w,{label:(0,a.__)("Vertical Position","gutenkit-blocks-addon"),value:A(o,"iconBoxIconVerticalAlign",n),onChange:o=>R("iconBoxIconVerticalAlign",o,n,e),sizeUnits:["px"],range:{min:-200,max:200}})),(0,i.createElement)(_,{label:(0,a.__)("Use Height Width?","gutenkit-blocks-addon"),value:o?.useHeightWidthIcon,onChange:o=>e({useHeightWidthIcon:o})}),o.useHeightWidthIcon&&(0,i.createElement)(i.Fragment,null,(0,i.createElement)(S,null,(0,i.createElement)(w,{label:(0,a.__)("Width","gutenkit-blocks-addon"),value:A(o,"iconWidth",n),onChange:o=>R("iconWidth",o,n,e),sizeUnits:["px","em"],range:{max:200}})),(0,i.createElement)(S,null,(0,i.createElement)(w,{label:(0,a.__)("Height","gutenkit-blocks-addon"),value:A(o,"iconHeight",n),onChange:o=>R("iconHeight",o,n,e),sizeUnits:["px","em"],range:{max:200}}))),(0,i.createElement)(g,{type:"normal",tabs:[{name:"normal",title:(0,a.__)("Normal","gutenkit-blocks-addon")},{name:"hover",title:(0,a.__)("Hover","gutenkit-blocks-addon")}]},(t=>"normal"===t.name?(0,i.createElement)(i.Fragment,null,o?.iconBoxShowHeaderIcon&&(0,i.createElement)(i.Fragment,null,(0,i.createElement)(I,{label:(0,a.__)("Color","gutenkit-blocks-addon"),value:o?.iconBoxIconColor,onChange:o=>e({iconBoxIconColor:o})}),(0,i.createElement)(y,{label:(0,a.__)("Background","gutenkit-blocks-addon"),value:o?.iconBoxIconBackgroundColor,onChange:o=>e({iconBoxIconBackgroundColor:o}),exclude:{video:!0,image:!0}}),(0,i.createElement)(V,{label:(0,a.__)("Border"),onChange:o=>e({iconBoxIconBorder:o}),value:o?.iconBoxIconBorder}),(0,i.createElement)(S,null,(0,i.createElement)(P,{label:(0,a.__)("Border Radius","gutenkit-blocks-addon"),values:A(o,"iconBoxIconBorderRadius",n),onChange:o=>R("iconBoxIconBorderRadius",o,n,e)})),(0,i.createElement)(H,{label:(0,a.__)("Box Shadow","gutenkit-blocks-addon"),value:o?.iconBoxIconBoxShadow,onChange:o=>e({iconBoxIconBoxShadow:o})}))):"hover"===t.name?(0,i.createElement)(i.Fragment,null,(0,i.createElement)(I,{label:(0,a.__)("Color","gutenkit-blocks-addon"),value:o?.iconBoxIconHoverColor,onChange:o=>e({iconBoxIconHoverColor:o})}),(0,i.createElement)(y,{label:(0,a.__)("Background","gutenkit-blocks-addon"),value:o?.iconBoxIconHoverBackgroundColor,onChange:o=>e({iconBoxIconHoverBackgroundColor:o}),exclude:{video:!0,image:!0}}),(0,i.createElement)(V,{label:(0,a.__)("Border"),onChange:o=>e({iconBoxIconHoverBorder:o}),value:o?.iconBoxIconHoverBorder}),(0,i.createElement)(S,null,(0,i.createElement)(P,{label:(0,a.__)("Border Radius","gutenkit-blocks-addon"),values:A(o,"iconBoxIconHoverBorderRadius",n),onChange:o=>R("iconBoxIconHoverBorderRadius",o,n,e)})),(0,i.createElement)(H,{label:(0,a.__)("Box Shadow","gutenkit-blocks-addon"),value:o?.iconBoxIconHoverBoxShadow,onChange:o=>e({iconBoxIconHoverBoxShadow:o})})):void 0)),(0,i.createElement)(r.__experimentalDivider,null),(0,i.createElement)(S,null,(0,i.createElement)(P,{label:(0,a.__)("Margin","gutenkit-blocks-addon"),values:A(o,"iconBoxIconSpacing",n),onChange:o=>R("iconBoxIconSpacing",o,n,e)})),(0,i.createElement)(S,null,(0,i.createElement)(P,{label:(0,a.__)("Padding","gutenkit-blocks-addon"),values:A(o,"iconBoxIconPadding",n),onChange:o=>R("iconBoxIconPadding",o,n,e)}))),o?.iconBoxShowButton&&(0,i.createElement)(p,{title:(0,a.__)("Button","gutenkit-blocks-addon")},(0,i.createElement)(T,{label:(0,a.__)("Typography","gutenkit-blocks-addon"),value:o?.iconBoxBtnTypography,onChange:o=>e({iconBoxBtnTypography:o})}),o?.iconBoxShowBtnIcon&&(0,i.createElement)(i.Fragment,null,(0,i.createElement)(S,null,(0,i.createElement)(w,{label:(0,a.__)("Icon Size","gutenkit-blocks-addon"),value:A(o,"iconBoxBtnIconSize",n),onChange:o=>R("iconBoxBtnIconSize",o,n,e),sizeUnits:["px"],range:{min:6,max:300}})),(0,i.createElement)(w,{label:(0,a.__)("Icon Spacing","gutenkit-blocks-addon"),value:o?.iconBoxBtnIconSpacing,onChange:o=>e({iconBoxBtnIconSpacing:o}),sizeUnits:["px"]}),(0,i.createElement)(S,null,(0,i.createElement)(w,{label:(0,a.__)("Move icon Vertically","gutenkit-blocks-addon"),value:A(o,"iconBoxBtnIconVerticalAlign",n),onChange:o=>R("iconBoxBtnIconVerticalAlign",o,n,e),sizeUnits:["px","em"],range:{min:-20,max:20}}))),(0,i.createElement)(g,{type:"normal",tabs:[{name:"normal",title:(0,a.__)("Normal","gutenkit-blocks-addon")},{name:"hover",title:(0,a.__)("Hover","gutenkit-blocks-addon")}]},(t=>{switch(t.name){case"normal":return(0,i.createElement)(i.Fragment,null,(0,i.createElement)(I,{label:(0,a.__)("Text Color","gutenkit-blocks-addon"),value:o?.iconBoxBtnTextColor,onChange:o=>e({iconBoxBtnTextColor:o})}),(0,i.createElement)(y,{label:(0,a.__)("Background","gutenkit-blocks-addon"),value:o?.iconBoxBtnBackground,onChange:o=>e({iconBoxBtnBackground:o}),exclude:{video:!0,image:!0}}),(0,i.createElement)(V,{label:(0,a.__)("Border"),onChange:o=>e({iconBoxBtnBorder:o}),value:o?.iconBoxBtnBorder}),(0,i.createElement)(S,null,(0,i.createElement)(P,{label:(0,a.__)("Border Radius","gutenkit-blocks-addon"),values:A(o,"iconBoxBtnBorderRadius",n),onChange:o=>R("iconBoxBtnBorderRadius",o,n,e)})),(0,i.createElement)(H,{label:(0,a.__)("Box Shadow","gutenkit-blocks-addon"),value:o?.iconBoxBtnBoxShadow,onChange:o=>e({iconBoxBtnBoxShadow:o})}));case"hover":return(0,i.createElement)(i.Fragment,null,(0,i.createElement)(I,{label:(0,a.__)("Text Color","gutenkit-blocks-addon"),value:o?.iconBoxBtnHoverColor,onChange:o=>e({iconBoxBtnHoverColor:o})}),(0,i.createElement)(y,{label:(0,a.__)("Background","gutenkit-blocks-addon"),value:o?.iconBoxBtnHoverBackground,onChange:o=>e({iconBoxBtnHoverBackground:o}),exclude:{video:!0,image:!0}}),(0,i.createElement)(V,{label:(0,a.__)("Border"),onChange:o=>e({iconBoxBtnHoverBorder:o}),value:o?.iconBoxBtnHoverBorder}),(0,i.createElement)(S,null,(0,i.createElement)(P,{label:(0,a.__)("Border Radius","gutenkit-blocks-addon"),values:A(o,"iconBoxBtnHoverBorderRadius",n),onChange:o=>R("iconBoxBtnHoverBorderRadius",o,n,e)})),(0,i.createElement)(H,{label:(0,a.__)("Box Shadow","gutenkit-blocks-addon"),value:o?.iconBoxBtnHoverBoxShadow,onChange:o=>e({iconBoxBtnHoverBoxShadow:o})}))}})),(0,i.createElement)(r.__experimentalDivider,null),(0,i.createElement)(S,null,(0,i.createElement)(P,{label:(0,a.__)("Padding","gutenkit-blocks-addon"),values:A(o,"iconBoxBtnPadding",n),onChange:o=>R("iconBoxBtnPadding",o,n,e)})),(0,i.createElement)(S,null,(0,i.createElement)(P,{label:(0,a.__)("Margin","gutenkit-blocks-addon"),values:A(o,"iconBoxBtnMargin",n),onChange:o=>R("iconBoxBtnMargin",o,n,e)}))),o?.iconBoxShowBadge&&(0,i.createElement)(p,{title:(0,a.__)("Badge","gutenkit-blocks-addon")},(0,i.createElement)(S,null,(0,i.createElement)(P,{label:(0,a.__)("Padding","gutenkit-blocks-addon"),values:A(o,"iconBoxBadgePadding",n),onChange:o=>R("iconBoxBadgePadding",o,n,e)})),(0,i.createElement)(S,null,(0,i.createElement)(P,{label:(0,a.__)("Border Radius","gutenkit-blocks-addon"),values:A(o,"iconBoxBadgeBorderRadius",n),onChange:o=>R("iconBoxBadgeBorderRadius",o,n,e)})),(0,i.createElement)(I,{label:(0,a.__)("Color","gutenkit-blocks-addon"),value:o?.iconBoxBadgeTextColor,onChange:o=>e({iconBoxBadgeTextColor:o})}),(0,i.createElement)(y,{label:(0,a.__)("Background","gutenkit-blocks-addon"),value:o?.iconBoxBadgeBackground,onChange:o=>e({iconBoxBadgeBackground:o}),exclude:{video:!0,image:!0}}),(0,i.createElement)(H,{label:(0,a.__)("Box Shadow","gutenkit-blocks-addon"),value:o?.iconBoxBadgeBoxShadow,onChange:o=>e({iconBoxBadgeBoxShadow:o})}),(0,i.createElement)(T,{label:(0,a.__)("Typography","gutenkit-blocks-addon"),value:o?.iconBoxBadgeTypography,onChange:o=>e({iconBoxBadgeTypography:o})})));case"advanced":return(0,i.createElement)(i.Fragment,null,t)}}))))}));var _=n(6942),E=n.n(_);const w=JSON.parse('{"UU":"gutenkit/icon-box"}'),{iconBox:C}=window.gutenkit.editorIcon;(0,t.registerBlockType)(w.UU,{edit:function({attributes:o,setAttributes:e,clientId:n,advancedControl:t}){const{GkitStyle:c,GkitIcon:r}=window.gutenkit.components,{useDeviceType:g,linkGenerator:d}=window.gutenkit.helpers,B=g(),x=o?.iconBoxShowGlobalLink&&!o?.iconBoxShowButton?"a":"div",b=o?.iconBoxShowGlobalLink&&!o?.iconBoxShowButton?d(o?.iconBoxGlobalLinkUrl):"",s=(0,l.useBlockProps)({className:E()({"gkit-icon-box":!0,"gkit-icon-box-equal-height":o?.enableEqualHeight,"gkit-icon-box-hover-background-animation":o?.iconBoxContainerHoverBackgroundAnimation,[`gkit-animation-${o?.iconBoxContainerHoverAnimation?.effect?.value}`]:o?.iconBoxContainerHoverAnimationSwitch})});return(0,i.createElement)(i.Fragment,null,(0,i.createElement)(c,{blocksCSS:o?.blocksCSS}),(0,i.createElement)(p,{attributes:o,setAttributes:e,device:B,advancedControl:t}),(0,i.createElement)(x,{...b,...s},o?.iconBoxShowHeaderIcon&&(0,i.createElement)(r,{icon:o?.iconBoxHeaderIcon,className:"gkit-icon-box-header gkit-icon-box-header-icon"}),(0,i.createElement)("div",{className:"gkit-icon-box-body"},(0,i.createElement)(l.RichText,{identifier:"title",tagName:o?.iconBoxTitleTag,value:o?.iconBoxTitleText,onChange:o=>{e({iconBoxTitleText:o})},placeholder:(0,a.__)("Enter your title here...","gutenkit-blocks-addon"),className:"gkit-icon-box-title"}),(0,i.createElement)(l.RichText,{identifier:"content",tagName:"p",value:o?.iconBoxDescriptionText,onChange:o=>{e({iconBoxDescriptionText:o})},placeholder:(0,a.__)("Enter your description here...","gutenkit-blocks-addon"),className:"gkit-icon-box-description"}),o?.iconBoxShowButton&&(0,i.createElement)("div",{className:E()({"gkit-icon-box-button-wrapper":o?.iconBoxShowButton,"gkit-icon-box-button-hover":o?.iconBoxEnableHoverBtn})},(0,i.createElement)("a",{href:"#",className:"gkit-icon-box-button gkit-btn"},o?.iconBoxShowBtnIcon&&"before"===o?.iconBoxBtnIconPosition&&(0,i.createElement)(r,{icon:o?.iconBoxBtnIcon,className:"gkit-btn-left-icon",tagName:"span"}),(0,i.createElement)("span",{className:"gkit-icon-box-button-text"},o?.iconBoxBtnText),o?.iconBoxShowBtnIcon&&"after"===o?.iconBoxBtnIconPosition&&(0,i.createElement)(r,{icon:o?.iconBoxBtnIcon,className:"gkit-btn-right-icon",tagName:"span"})))),o?.iconBoxEnableWaterMark&&o?.iconBoxWaterMarkIcon&&(0,i.createElement)(r,{icon:o?.iconBoxWaterMarkIcon,className:"gkit-icon-box-watermark"}),o?.iconBoxShowBadge&&(0,i.createElement)("div",{className:"gkit-icon-box-badge"},(0,i.createElement)("span",{className:"gkit-icon-box-badge-text"},o?.iconBoxBadgeTitle))))},icon:{src:C},save:function({attributes:o}){const{GkitIcon:e}=window.gutenkit.components,{linkGenerator:n}=window.gutenkit.helpers,t=o?.iconBoxShowGlobalLink&&!o?.iconBoxShowButton?"a":"div",a=n(o?.iconBoxBtnUrl),c=o?.iconBoxShowGlobalLink&&!o?.iconBoxShowButton?n(o?.iconBoxGlobalLinkUrl):"",r=l.useBlockProps.save({className:E()({"gkit-icon-box":!0,"gkit-icon-box-equal-height":o?.enableEqualHeight,"gkit-icon-box-hover-background-animation":o?.iconBoxContainerHoverBackgroundAnimation,[`gkit-animation-${o?.iconBoxContainerHoverAnimation?.effect?.value}`]:o?.iconBoxContainerHoverAnimationSwitch})});return(0,i.createElement)(t,{...c,...r},o?.iconBoxShowHeaderIcon&&(0,i.createElement)(e,{icon:o?.iconBoxHeaderIcon,className:"gkit-icon-box-header gkit-icon-box-header-icon"}),(0,i.createElement)("div",{className:"gkit-icon-box-body"},o?.iconBoxTitleText&&(0,i.createElement)(l.RichText.Content,{identifier:"title",tagName:o?.iconBoxTitleTag,value:o?.iconBoxTitleText,className:"gkit-icon-box-title"}),o?.iconBoxDescriptionText&&(0,i.createElement)(l.RichText.Content,{identifier:"content",tagName:"p",value:o?.iconBoxDescriptionText,className:"gkit-icon-box-description"}),o?.iconBoxShowButton&&(0,i.createElement)("div",{className:E()({"gkit-icon-box-button-wrapper":o?.iconBoxShowButton,"gkit-icon-box-button-hover":o?.iconBoxEnableHoverBtn})},(0,i.createElement)("a",{...a,className:"gkit-icon-box-button gkit-btn"},o?.iconBoxShowBtnIcon&&"before"===o?.iconBoxBtnIconPosition&&(0,i.createElement)(e,{icon:o?.iconBoxBtnIcon,className:"gkit-btn-left-icon",tagName:"span"}),(0,i.createElement)("span",{className:"gkit-icon-box-button-text"},o?.iconBoxBtnText),o?.iconBoxShowBtnIcon&&"after"===o?.iconBoxBtnIconPosition&&(0,i.createElement)(e,{icon:o?.iconBoxBtnIcon,className:"gkit-btn-right-icon",tagName:"span"})))),o?.iconBoxEnableWaterMark&&o?.iconBoxWaterMarkIcon&&(0,i.createElement)(e,{icon:o?.iconBoxWaterMarkIcon,className:"gkit-icon-box-watermark"}),o?.iconBoxShowBadge&&(0,i.createElement)("div",{className:"gkit-icon-box-badge"},(0,i.createElement)("span",{className:"gkit-icon-box-badge-text"},o?.iconBoxBadgeTitle)))}})},6942:(o,e)=>{var n;!function(){"use strict";var t={}.hasOwnProperty;function i(){for(var o="",e=0;e<arguments.length;e++){var n=arguments[e];n&&(o=c(o,a(n)))}return o}function a(o){if("string"==typeof o||"number"==typeof o)return o;if("object"!=typeof o)return"";if(Array.isArray(o))return i.apply(null,o);if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]"))return o.toString();var e="";for(var n in o)t.call(o,n)&&o[n]&&(e=c(e,n));return e}function c(o,e){return e?o?o+" "+e:o+e:o}o.exports?(i.default=i,o.exports=i):void 0===(n=function(){return i}.apply(e,[]))||(o.exports=n)}()}},n={};function t(o){var i=n[o];if(void 0!==i)return i.exports;var a=n[o]={exports:{}};return e[o](a,a.exports,t),a.exports}t.m=e,o=[],t.O=(e,n,i,a)=>{if(!n){var c=1/0;for(d=0;d<o.length;d++){for(var[n,i,a]=o[d],l=!0,r=0;r<n.length;r++)(!1&a||c>=a)&&Object.keys(t.O).every((o=>t.O[o](n[r])))?n.splice(r--,1):(l=!1,a<c&&(c=a));if(l){o.splice(d--,1);var g=i();void 0!==g&&(e=g)}}return e}a=a||0;for(var d=o.length;d>0&&o[d-1][2]>a;d--)o[d]=o[d-1];o[d]=[n,i,a]},t.n=o=>{var e=o&&o.__esModule?()=>o.default:()=>o;return t.d(e,{a:e}),e},t.d=(o,e)=>{for(var n in e)t.o(e,n)&&!t.o(o,n)&&Object.defineProperty(o,n,{enumerable:!0,get:e[n]})},t.o=(o,e)=>Object.prototype.hasOwnProperty.call(o,e),(()=>{var o={7482:0,6798:0};t.O.j=e=>0===o[e];var e=(e,n)=>{var i,a,[c,l,r]=n,g=0;if(c.some((e=>0!==o[e]))){for(i in l)t.o(l,i)&&(t.m[i]=l[i]);if(r)var d=r(t)}for(e&&e(n);g<c.length;g++)a=c[g],t.o(o,a)&&o[a]&&o[a][0](),o[a]=0;return t.O(d)},n=globalThis.webpackChunkgutenkit_blocks_addon=globalThis.webpackChunkgutenkit_blocks_addon||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))})();var i=t.O(void 0,[6798],(()=>t(3044)));i=t.O(i)})();