/*! For license information please see 866.0ae23b99.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkflexible_input=self.webpackChunkflexible_input||[]).push([[866],{"./node_modules/fastest-stable-stringify/index.js":module=>{var keyList=Object.keys,native_stringify=JSON.stringify;function stringify(val,allowUndefined){var i,max,str,keys,key,propVal,tipeof;if("string"===(tipeof=typeof val))return native_stringify(val);if(!0===val)return"true";if(!1===val)return"false";if(null===val)return"null";if(val instanceof Array){for(str="[",max=val.length-1,i=0;i<max;i++)str+=stringify(val[i],!1)+",";return max>-1&&(str+=stringify(val[i],!1)),str+"]"}if(val instanceof Object){if("function"==typeof val.toJSON)return stringify(val.toJSON(),allowUndefined);for(max=(keys=keyList(val).sort()).length,str="",i=0;i<max;)void 0!==(propVal=stringify(val[key=keys[i]],!0))&&(i&&""!==str&&(str+=","),str+=native_stringify(key)+":"+propVal),i++;return"{"+str+"}"}switch(tipeof){case"function":case"undefined":return allowUndefined?void 0:null;default:return isFinite(val)?val:null}}module.exports=function(obj){return""+stringify(obj,!1)}},"./node_modules/nano-css/addon/atoms.js":(__unused_webpack_module,exports)=>{var t="top",r="right",b="bottom",l="left",w="width",h="height",ov="overflow",con="content",ovx=ov+"-x",ovy=ov+"-y",fl="flex",fld=fl+"-direction",flg=fl+"-grow",fls=fl+"-shrink",flb=fl+"-basis",flw=fl+"-wrap",ac="align-"+con,mr="margin",mrt=mr+"-"+t,mrr=mr+"-"+r,mrb=mr+"-"+b,mrl=mr+"-"+l,pd="padding",pdt=pd+"-"+t,pdr=pd+"-"+r,pdb=pd+"-"+b,pdl=pd+"-"+l,bd="border",bdt=bd+"-"+t,bdr=bd+"-"+r,bdb=bd+"-"+b,bdl=bd+"-"+l,bdrad=bd+"-radius",bg="background",bgc=bg+"-color",bgi=bg+"-image",bgr=bg+"-repeat",bga=bg+"-attachment",bgp=bg+"-position",bgs=bg+"-size",bgo=bg+"-origin",bgcl=bg+"-clip",f="font",fz=f+"-size",fs=f+"-style",fw=f+"-weight",ff=f+"-family",st="stroke",stw=st+"-width",stl=st+"-linecap",an="animation",ann=an+"-name",atoms=exports.atoms={pos:"position",t,r,b,l,z:"z-index",d:"display",vis:"visibility",w,h,minW:"min-"+w,maxW:"max-"+w,minH:"min-"+h,maxH:"max-"+h,ov,ovx,ovy,bxz:"box-sizing",cl:"clip",clp:"clip-path",clr:"clear",tbl:"table-layout",fl,fld,flg,fls,flb,flw,jc:"justify-"+con,ai:"align-items",ac,as:"align-self",mr,mrt,mrr,mrb,mrl,mar:mr,mart:mrt,marr:mrr,marb:mrb,marl:mrl,pd,pdt,pdr,pdb,pdl,pad:pd,padt:pdt,padr:pdr,padb:pdb,padl:pdl,bd,bdt,bdr,bdb,bdl,bdrad,bdc:bd+"-color",bds:bd+"-style",out:"outline",bxsh:"box-shadow",col:"color",op:"opacity",bg,bgc,bgi,bgr,bga,bgp,bgs,bgo,bgcl,bdfl:"backdrop-filter",bfvis:"backface-visibility",f,fz,fs,fw,ff,ta:"text-align",td:"text-decoration",tt:"text-transform",ts:"text-shadow",tov:"text-overflow",ww:"word-wrap",lts:"letter-spacing",ws:"white-space",lh:"line-"+h,va:"vertical-align",cur:"cursor",pe:"pointer-events",us:"user-select",an,ann,and:an+"-duration",anf:an+"-fill-mode",anit:an+"-iteration-count",anp:an+"-play-state",ant:an+"-timing-function",trs:"transition",tr:"transform",st,stw,stl,ls:"list-style",con};exports.addon=function(renderer){var originalDecl=renderer.decl;renderer.decl=function(key,value){return originalDecl(atoms[key]||key,value)}}},"./node_modules/nano-css/addon/cache.js":(__unused_webpack_module,exports)=>{exports.addon=function(renderer){var cache={};renderer.cache=function(css){if(!css)return"";var key=renderer.hash(css);return cache[key]||(cache[key]=renderer.rule(css,key)),cache[key]}}},"./node_modules/nano-css/addon/drule.js":(__unused_webpack_module,exports)=>{exports.addon=function(renderer){renderer.drule=function(styles,block){var className=renderer.rule(styles,block),closure=function(dynamicStyles){if(!dynamicStyles)return className;var dynamicClassName=renderer.cache(dynamicStyles);return className+dynamicClassName};return closure.toString=function(){return className},closure}}},"./node_modules/nano-css/addon/googleFont.js":(__unused_webpack_module,exports)=>{function createUrl(font,weights,subsets){var params="?family="+encodeURIComponent(font);return weights&&(weights instanceof Array||(weights=[weights]),params+=":"+weights.join(",")),subsets&&(subsets instanceof Array||(subsets=[subsets]),params+="&subset="+subsets.join(",")),"https://fonts.googleapis.com/css"+params}exports.addon=function(renderer){renderer.client?renderer.googleFont=function(font,weights,subsets){var el=document.createElement("link");el.href=createUrl(font,weights,subsets),el.rel="stylesheet",el.type="text/css",document.head.appendChild(el)}:renderer.googleFont=function(font,weights,subsets){renderer.putRaw("@import url('"+createUrl(font,weights,subsets)+"');")}}},"./node_modules/nano-css/addon/keyframes.js":(__unused_webpack_module,exports)=>{exports.addon=function(renderer,config){var prefixes=(config=renderer.assign({prefixes:["-webkit-","-moz-","-o-",""]},config||{})).prefixes;renderer.client&&document.head.appendChild(renderer.ksh=document.createElement("style"));var putAt=renderer.putAt;renderer.putAt=function(__,keyframes,prelude){if("k"!==prelude[1])putAt(__,keyframes,prelude);else{var str="";for(var keyframe in keyframes){var decls=keyframes[keyframe],strDecls="";for(var prop in decls)strDecls+=renderer.decl(prop,decls[prop]);str+=keyframe+"{"+strDecls+"}"}for(var i=0;i<prefixes.length;i++){var prefix=prefixes[i],rawKeyframes=prelude.replace("@keyframes","@"+prefix+"keyframes")+"{"+str+"}";renderer.client?renderer.ksh.appendChild(document.createTextNode(rawKeyframes)):renderer.putRaw(rawKeyframes)}}},renderer.keyframes=function(keyframes,block){return block||(block=renderer.hash(keyframes)),block=renderer.pfx+block,renderer.putAt("",keyframes,"@keyframes "+block),block}}},"./node_modules/nano-css/addon/nesting.js":(__unused_webpack_module,exports)=>{exports.addon=function(renderer){renderer.selector=function(parentSelectors,selector){var i,j,sel,parent,replacedSelector,parents=parentSelectors.split(","),result=[],selectors=selector.split(","),len1=parents.length,len2=selectors.length;for(i=0;i<len2;i++)if((sel=selectors[i]).indexOf("&")>-1)for(j=0;j<len1;j++)parent=parents[j],replacedSelector=sel.replace(/&/g,parent),result.push(replacedSelector);else for(j=0;j<len1;j++)(parent=parents[j])?result.push(parent+" "+sel):result.push(sel);return result.join(",")}}},"./node_modules/nano-css/addon/reset-font.js":(__unused_webpack_module,exports)=>{exports.addon=function(renderer){renderer.put("",{"html, body":{fontFamily:'"Trebuchet MS","Lucida Grande","Lucida Sans Unicode","Lucida Sans",sans-serif',fontWeight:400,fontSize:"16px","-moz-text-size-adjust":"100%","-ms-text-size-adjust":"100%","-webkit-text-size-adjust":"100%","text-size-adjust":"100%","-webkit-font-smoothing":"antialiased","-moz-osx-font-smoothing":"grayscale"}})}},"./node_modules/nano-css/addon/reset/Normalize.js":(__unused_webpack_module,exports)=>{exports.addon=function(renderer){renderer.put("",{html:{lineHeight:1.15,"-webkit-text-size-adjust":"100%"},body:{margin:0},h1:{fontSize:"2em",margin:"0.67em 0"},hr:{boxSizing:"content-box",height:0,overflow:"visible"},pre:{fontFamily:"monospace, monospace",fontSize:"1em"},"b,strong":{fontWeight:"bolder"},"code,kbd,samp":{fontFamily:"monospace, monospace",fontSize:"1em"},small:{fontSize:"80%"},"sub,sup":{fontSize:"75%",lineHeight:0,position:"relative",verticalAlign:"baseline"},sub:{bottom:"-0.25em"},sup:{top:"-0.5em"},"button,input,optgroup,select,textarea":{fontFamily:"inherit",fontSize:"100%",lineHeight:1.15,margin:0},"button,input":{overflow:"visible"},"button,select":{textTransform:"none"},fieldset:{padding:"0.35em 0.75em 0.625em"},legend:{boxSizing:"border-box",display:"table",maxWidth:"100%",padding:0,whiteSpace:"normal"},progress:{verticalAlign:"baseline"},summary:{display:"list-item"}})}},"./node_modules/nano-css/addon/rule.js":(__unused_webpack_module,exports)=>{exports.addon=function(renderer){renderer.rule=function(css,block){return block=block||renderer.hash(css),block=renderer.pfx+block,renderer.put("."+block,css)," "+block}}},"./node_modules/nano-css/addon/stable.js":(__unused_webpack_module,exports,__webpack_require__)=>{var stringify=__webpack_require__("./node_modules/fastest-stable-stringify/index.js");exports.addon=function(renderer){renderer.stringify=stringify}},"./node_modules/nano-css/index.js":(__unused_webpack_module,exports)=>{var KEBAB_REGEX=/[A-Z]/g;exports.create=function(config){var assign=(config=config||{}).assign||Object.assign;var renderer=assign({raw:"",pfx:"_",client:"object"==typeof window,assign,stringify:JSON.stringify,kebab:function(prop){return prop.replace(KEBAB_REGEX,"-$&").toLowerCase()},decl:function(key,value){return(key=renderer.kebab(key))+":"+value+";"},hash:function(obj){return function(str){for(var h=5381,i=str.length;i;)h=33*h^str.charCodeAt(--i);return"_"+(h>>>0).toString(36)}(renderer.stringify(obj))},selector:function(parent,selector){return parent+(":"===selector[0]?"":" ")+selector},putRaw:function(rawCssRule){renderer.raw+=rawCssRule}},config);return renderer.client&&(renderer.sh||document.head.appendChild(renderer.sh=document.createElement("style")),renderer.putRaw=function(rawCssRule){var sheet=renderer.sh.sheet;try{sheet.insertRule(rawCssRule,sheet.cssRules.length)}catch(error){}}),renderer.put=function(selector,decls,atrule){var prop,value,str="",postponed=[];for(prop in decls)(value=decls[prop])instanceof Object&&!(value instanceof Array)?postponed.push(prop):str+=renderer.decl(prop,value,selector,atrule);str&&(str=selector+"{"+str+"}",renderer.putRaw(atrule?atrule+"{"+str+"}":str));for(var i=0;i<postponed.length;i++)"@"===(prop=postponed[i])[0]&&"@font-face"!==prop?renderer.putAt(selector,decls[prop],prop):renderer.put(renderer.selector(selector,prop),decls[prop],atrule)},renderer.putAt=renderer.put,renderer}},"./node_modules/nano-theme/lib/breakpoints.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.m4=exports.m3=exports.m2=exports.m1=exports.b4=exports.b3=exports.b2=exports.b1=void 0,exports.b1=520,exports.b2=960,exports.b3=1300,exports.b4=1800,exports.m1=`@media (max-width:${exports.b1}px)`,exports.m2=`@media (max-width:${exports.b2}px)`,exports.m3=`@media (max-width:${exports.b3}px)`,exports.m4=`@media (max-width:${exports.b4}px)`},"./node_modules/nano-theme/lib/color.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.toColor=exports.color=void 0,exports.color=["#FFC312","#F79F1F","#EE5A24","#EA2027","#C4E538","#A3CB38","#009432","#006266","#12CBC4","#1289A7","#0652DD","#1B1464","#9980FA","#ED4C67","#B53471","#833471","#6F1E51","#e27d60","#85dcbb","#e8a87c","#c38d9e","#41b3a3","#242582","#553d67","#f64c72","#99738e","#2f2fa2","#05386b","#fc4445","#3feee6","#55bcc9","#8ee4af","#5cdb95","#907163","#379683","#84ceeb","#5ab9ea","#8860d0","#75b5d8","#a64ac9","#fccd04","#17e9e0","#61892f","#86c232","#222629","#474b4f","#6b6e70","#eadb02","#46344e","#5a5560","#fa72a1","#e64398","#f78888","#1FB6FF","#13CE66","#FF4949","#FFC82C","#76266C","#8C2E5E","#5B2971","#9B344E","#4D2B73","#AA4139","#432F75","#AA5D38","#702D0C","#3C1200","#353377","#FE8C00","#FE7301","#FE4301","#FE0100","#E5013B","#CC0174","#A0048C","#560DAB","#252AAC","#0A6BA1","#09A471","#9DED05"];const hash_1=__webpack_require__("./node_modules/thingies/lib/hash.js");exports.toColor=str=>exports.color[(0,hash_1.hash)(str)%exports.color.length]},"./node_modules/nano-theme/lib/constants.js":(__unused_webpack_module,exports)=>{var SIZE,ZINDEX,SYMBOL,COLOR;Object.defineProperty(exports,"__esModule",{value:!0}),exports.COLOR=exports.SYMBOL=exports.ZINDEX=exports.SIZE=void 0,function(SIZE){SIZE[SIZE.SITE_WIDTH=1300]="SITE_WIDTH",SIZE[SIZE.SITE_PADDING=32]="SITE_PADDING",SIZE[SIZE.PAGE_WIDTH=1e3]="PAGE_WIDTH",SIZE[SIZE.TOP_NAV_HEIGHT=64]="TOP_NAV_HEIGHT",SIZE[SIZE.SIDEBAR_WIDTH=300]="SIDEBAR_WIDTH"}(SIZE||(exports.SIZE=SIZE={})),function(ZINDEX){ZINDEX[ZINDEX.TOP_NAV=1e3]="TOP_NAV",ZINDEX[ZINDEX.SIDEBAR=1001]="SIDEBAR",ZINDEX[ZINDEX.CONTEXT=1002]="CONTEXT",ZINDEX[ZINDEX.PROGRESS=2e3]="PROGRESS",ZINDEX[ZINDEX.MODAL=4e3]="MODAL",ZINDEX[ZINDEX.CURSOR=1e6]="CURSOR"}(ZINDEX||(exports.ZINDEX=ZINDEX={})),function(SYMBOL){SYMBOL.CHECKMARK="✓",SYMBOL.CROSS="✗",SYMBOL.NIL="∅",SYMBOL.ELLIPSIS="…",SYMBOL.MDASH="—",SYMBOL.NDASH="–",SYMBOL.FDASH="‒",SYMBOL.CTRL="⌃",SYMBOL.CMD="⌘",SYMBOL.ALT="⌥",SYMBOL.SHIFT="⇧"}(SYMBOL||(exports.SYMBOL=SYMBOL={})),function(COLOR){COLOR.LINK="#0089ff"}(COLOR||(exports.COLOR=COLOR={}))},"./node_modules/nano-theme/lib/css.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.nano=exports.googleFont=exports.keyframes=exports.drule=exports.rule=exports.put=exports.reset=void 0;const tslib_1=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),nano_css_1=__webpack_require__("./node_modules/nano-css/index.js"),cache_1=__webpack_require__("./node_modules/nano-css/addon/cache.js"),stable_1=__webpack_require__("./node_modules/nano-css/addon/stable.js"),nesting_1=__webpack_require__("./node_modules/nano-css/addon/nesting.js"),atoms_1=__webpack_require__("./node_modules/nano-css/addon/atoms.js"),rule_1=__webpack_require__("./node_modules/nano-css/addon/rule.js"),drule_1=__webpack_require__("./node_modules/nano-css/addon/drule.js"),keyframes_1=__webpack_require__("./node_modules/nano-css/addon/keyframes.js"),Normalize_1=__webpack_require__("./node_modules/nano-css/addon/reset/Normalize.js"),reset_font_1=__webpack_require__("./node_modules/nano-css/addon/reset-font.js"),googleFont_1=__webpack_require__("./node_modules/nano-css/addon/googleFont.js");tslib_1.__exportStar(__webpack_require__("./node_modules/nano-css/index.js"),exports);const nano=(0,nano_css_1.create)({pfx:"nano-css"});exports.nano=nano,(0,cache_1.addon)(nano),(0,stable_1.addon)(nano),(0,nesting_1.addon)(nano),(0,atoms_1.addon)(nano),(0,rule_1.addon)(nano),(0,drule_1.addon)(nano),(0,keyframes_1.addon)(nano),(0,googleFont_1.addon)(nano);exports.reset=()=>{(0,Normalize_1.addon)(nano),(0,reset_font_1.addon)(nano)},exports.put=nano.put,exports.rule=nano.rule,exports.drule=nano.drule,exports.keyframes=nano.keyframes,exports.googleFont=nano.googleFont},"./node_modules/nano-theme/lib/font.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.font=void 0;const sans='"Open Sans",sans-serif',serif='"Merriweather","Linux Libertine"',slab='"Roboto Slab"',ui1='Ubuntu,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Cantarell,"Open Sans","Helvetica Neue",sans-serif',ui2='-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol",'+ui1,ui3="Roboto,sans-serif,"+ui2;exports.font={sans:{lite:{fw:300,ff:sans},mid:{fw:400,ff:sans},bold:{fw:700,ff:sans},black:{fw:800,ff:sans}},serif:{lite:{fw:300,ff:serif},mid:{fw:400,ff:serif},bold:{fw:700,ff:serif},black:{fw:700,ff:serif}},slab:{lite:{fw:300,ff:slab},mid:{fw:400,ff:slab},bold:{fw:700,ff:slab},black:{fw:800,ff:slab}},mono:{mid:{fw:300,ff:'"Menlo","DejaVu Sans Mono","Roboto Mono","Fira Mono","Cousine",Consolas,"Liberation Mono",Courier,monospace'},bold:{fw:400,ff:'"Fira Mono","Cousine",Consolas,"Liberation Mono",Courier,monospace'}},ui1:{lite:{fw:300,ff:ui1},mid:{fw:400,ff:ui1},bold:{fw:700,ff:ui1},black:{fw:800,ff:ui1}},ui2:{lite:{fw:300,ff:ui2},mid:{fw:400,ff:ui2},bold:{fw:700,ff:ui2},black:{fw:800,ff:ui2}},ui3:{lite:{fw:300,ff:ui3},mid:{fw:400,ff:ui3},bold:{fw:700,ff:ui3},black:{fw:800,ff:ui3}}}},"./node_modules/nano-theme/lib/global-reset.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.googleFonts=void 0;const css_1=__webpack_require__("./node_modules/nano-theme/lib/css.js"),light_1=__webpack_require__("./node_modules/nano-theme/lib/themes/light.js");exports.googleFonts="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700,800|Roboto+Mono|Merriweather:300,400,700|Roboto+Slab:300,400,700|Roboto:300,500|Ubuntu:400&subset=cyrillic";if("object"==typeof window){const href=exports.googleFonts,el=document.createElement("link");el.href=href,el.rel="stylesheet",el.type="text/css",document.head.appendChild(el)}(0,css_1.reset)(),(0,css_1.put)("",{"@keyframes fadeInScaleOut":{from:{opacity:0,transform:"scale(.95)"},"80%":{opacity:.9,transform:"scale(1.02)"},to:{opacity:1,transform:"scale(1)"}},"@keyframes fadeInScaleIn":{from:{opacity:0,transform:"scale(.9)"},"80%":{opacity:.9,transform:"scale(.95)"},to:{opacity:1,transform:"scale(1)"}},"@keyframes slideInDown":{from:{transform:"translate3d(0, -100%, 0)",visibility:"visible"},to:{transform:"translate3d(0, 0, 0)"}},".slideInDown":{animation:"slideInDown .3s"},a:{col:light_1.lightTheme.color.sem.link[0],td:"none","&:hover":{col:light_1.lightTheme.color.sem.brand[0]},"p &":{bdb:"1px solid rgba(0,137,255,.3)","&:hover":{bdb:"1px solid rgba(244,18,36,.3)"}}},"button:focus,a:focus":{outlineOffset:"1px",out:"1px dashed rgba(0,0,0,.2)"},"button:active,a:active":{out:0}})},"./node_modules/nano-theme/lib/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0});const tslib_1=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");__webpack_require__("./node_modules/nano-theme/lib/global-reset.js"),tslib_1.__exportStar(__webpack_require__("./node_modules/nano-theme/lib/types.js"),exports),tslib_1.__exportStar(__webpack_require__("./node_modules/nano-theme/lib/constants.js"),exports),tslib_1.__exportStar(__webpack_require__("./node_modules/nano-theme/lib/css.js"),exports),tslib_1.__exportStar(__webpack_require__("./node_modules/nano-theme/lib/breakpoints.js"),exports),tslib_1.__exportStar(__webpack_require__("./node_modules/nano-theme/lib/font.js"),exports),tslib_1.__exportStar(__webpack_require__("./node_modules/nano-theme/lib/themes/light.js"),exports),tslib_1.__exportStar(__webpack_require__("./node_modules/nano-theme/lib/themes/dark.js"),exports),tslib_1.__exportStar(__webpack_require__("./node_modules/nano-theme/lib/react.js"),exports),tslib_1.__exportStar(__webpack_require__("./node_modules/nano-theme/lib/color.js"),exports)},"./node_modules/nano-theme/lib/react.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.GlobalCss=exports.makeRule=exports.useRule=exports.useTheme=exports.Provider=void 0;const React=__webpack_require__("./node_modules/react/index.js"),light_1=__webpack_require__("./node_modules/nano-theme/lib/themes/light.js"),dark_1=__webpack_require__("./node_modules/nano-theme/lib/themes/dark.js"),css_1=__webpack_require__("./node_modules/nano-theme/lib/css.js"),context=React.createContext(light_1.lightTheme);exports.Provider=React.memo((({theme,children})=>{const value="light"===theme?light_1.lightTheme:dark_1.darkTheme;return React.createElement(context.Provider,{value},children)}));exports.useTheme=()=>React.useContext(context);exports.useRule=fn=>{const css=fn((0,exports.useTheme)());return css_1.nano.cache(css)};exports.makeRule=fn=>()=>(0,exports.useRule)(fn);const useIsomorphicLayoutEffect_1=__webpack_require__("./node_modules/react-use/lib/useIsomorphicLayoutEffect.js");exports.GlobalCss=()=>{const theme=(0,exports.useTheme)();return(0,useIsomorphicLayoutEffect_1.default)((()=>{document.body.style.background=theme.bg,document.body.style.color=theme.g(.05,.85)}),[theme]),null}},"./node_modules/nano-theme/lib/themes/dark.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.darkTheme=void 0;const light_1=__webpack_require__("./node_modules/nano-theme/lib/themes/light.js"),g=(shade,opacity=1)=>{const g=255-Math.round(255*shade);return`rgba(${g},${g},${g},${opacity})`};exports.darkTheme=Object.assign(Object.assign({},light_1.lightTheme),{isLight:!1,name:"dark",bg:"#101921",color:Object.assign(Object.assign({},light_1.lightTheme.color),{ui:{lightLine:g(.1,.04),line:g(.1,.08),lineDark:g(.1,.16)}}),g})},"./node_modules/nano-theme/lib/themes/light.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.theme=exports.lightTheme=void 0;const color_1=__webpack_require__("./node_modules/nano-theme/lib/color.js"),font_1=__webpack_require__("./node_modules/nano-theme/lib/font.js"),g=(shade,opacity=1)=>{const g=Math.round(255*shade);return`rgba(${g},${g},${g},${opacity})`},spaces=[0,4,8,16,24,32,64,128,256,512],fontSizes=[10,12,14,16,20,24,32,48,64,96,128];exports.lightTheme={isLight:!0,name:"light",bg:"#fff",color:{color:color_1.color,sem:{accent:["#07f","#1340EB","#07ACEB"],blue:["#07f","#1340EB","#07ACEB"],positive:["#13CE66","#16BA32","#38D420"],negative:["#FF4949","#EB4C31","#DB521A"],warning:["#FFC82C","#EBC715","#DBCC00"],link:["#0089ff","#134EEB","#07BBEB"],brand:["#E44A28","#985DF7","#EE69B1","#F6A832","#5FCC8A","#58B9F8"]},ui:{lightLine:g(.1,.04),line:g(.1,.08),lineDark:g(.1,.16)}},font:font_1.font,green:opacity=>`rgba(19,206,102,${opacity})`,red:opacity=>`rgba(225,20,10,${opacity})`,blue:opacity=>`rgba(40,160,222,${opacity})`,fontSize:(scale=0)=>fontSizes[Math.min(Math.max(scale+3,0),fontSizes.length-1)],space:(scale=0)=>spaces[Math.min(Math.max(scale+3,0),spaces.length-1)],g},exports.theme=exports.lightTheme},"./node_modules/nano-theme/lib/types.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0})},"./node_modules/react-use/lib/misc/util.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.isNavigator=exports.isBrowser=exports.off=exports.on=exports.noop=void 0;exports.noop=function(){},exports.on=function on(obj){for(var args=[],_i=1;_i<arguments.length;_i++)args[_i-1]=arguments[_i];obj&&obj.addEventListener&&obj.addEventListener.apply(obj,args)},exports.off=function off(obj){for(var args=[],_i=1;_i<arguments.length;_i++)args[_i-1]=arguments[_i];obj&&obj.removeEventListener&&obj.removeEventListener.apply(obj,args)},exports.isBrowser="undefined"!=typeof window,exports.isNavigator="undefined"!=typeof navigator},"./node_modules/react-use/lib/useIsomorphicLayoutEffect.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0});var react_1=__webpack_require__("./node_modules/react/index.js"),useIsomorphicLayoutEffect=__webpack_require__("./node_modules/react-use/lib/misc/util.js").isBrowser?react_1.useLayoutEffect:react_1.useEffect;exports.default=useIsomorphicLayoutEffect},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./node_modules/thingies/lib/hash.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.hash=void 0;exports.hash=str=>{let hash=5381,i=str.length;for(;i;)hash=33*hash^str.charCodeAt(--i);return hash>>>0}},"./node_modules/tslib/tslib.es6.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__addDisposableResource:()=>__addDisposableResource,__assign:()=>__assign,__asyncDelegator:()=>__asyncDelegator,__asyncGenerator:()=>__asyncGenerator,__asyncValues:()=>__asyncValues,__await:()=>__await,__awaiter:()=>__awaiter,__classPrivateFieldGet:()=>__classPrivateFieldGet,__classPrivateFieldIn:()=>__classPrivateFieldIn,__classPrivateFieldSet:()=>__classPrivateFieldSet,__createBinding:()=>__createBinding,__decorate:()=>__decorate,__disposeResources:()=>__disposeResources,__esDecorate:()=>__esDecorate,__exportStar:()=>__exportStar,__extends:()=>__extends,__generator:()=>__generator,__importDefault:()=>__importDefault,__importStar:()=>__importStar,__makeTemplateObject:()=>__makeTemplateObject,__metadata:()=>__metadata,__param:()=>__param,__propKey:()=>__propKey,__read:()=>__read,__rest:()=>__rest,__runInitializers:()=>__runInitializers,__setFunctionName:()=>__setFunctionName,__spread:()=>__spread,__spreadArray:()=>__spreadArray,__spreadArrays:()=>__spreadArrays,__values:()=>__values,default:()=>__WEBPACK_DEFAULT_EXPORT__});var extendStatics=function(d,b){return extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b}||function(d,b){for(var p in b)Object.prototype.hasOwnProperty.call(b,p)&&(d[p]=b[p])},extendStatics(d,b)};function __extends(d,b){if("function"!=typeof b&&null!==b)throw new TypeError("Class extends value "+String(b)+" is not a constructor or null");function __(){this.constructor=d}extendStatics(d,b),d.prototype=null===b?Object.create(b):(__.prototype=b.prototype,new __)}var __assign=function(){return __assign=Object.assign||function __assign(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)};function __rest(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t}function __decorate(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r}function __param(paramIndex,decorator){return function(target,key){decorator(target,key,paramIndex)}}function __esDecorate(ctor,descriptorIn,decorators,contextIn,initializers,extraInitializers){function accept(f){if(void 0!==f&&"function"!=typeof f)throw new TypeError("Function expected");return f}for(var _,kind=contextIn.kind,key="getter"===kind?"get":"setter"===kind?"set":"value",target=!descriptorIn&&ctor?contextIn.static?ctor:ctor.prototype:null,descriptor=descriptorIn||(target?Object.getOwnPropertyDescriptor(target,contextIn.name):{}),done=!1,i=decorators.length-1;i>=0;i--){var context={};for(var p in contextIn)context[p]="access"===p?{}:contextIn[p];for(var p in contextIn.access)context.access[p]=contextIn.access[p];context.addInitializer=function(f){if(done)throw new TypeError("Cannot add initializers after decoration has completed");extraInitializers.push(accept(f||null))};var result=(0,decorators[i])("accessor"===kind?{get:descriptor.get,set:descriptor.set}:descriptor[key],context);if("accessor"===kind){if(void 0===result)continue;if(null===result||"object"!=typeof result)throw new TypeError("Object expected");(_=accept(result.get))&&(descriptor.get=_),(_=accept(result.set))&&(descriptor.set=_),(_=accept(result.init))&&initializers.unshift(_)}else(_=accept(result))&&("field"===kind?initializers.unshift(_):descriptor[key]=_)}target&&Object.defineProperty(target,contextIn.name,descriptor),done=!0}function __runInitializers(thisArg,initializers,value){for(var useValue=arguments.length>2,i=0;i<initializers.length;i++)value=useValue?initializers[i].call(thisArg,value):initializers[i].call(thisArg);return useValue?value:void 0}function __propKey(x){return"symbol"==typeof x?x:"".concat(x)}function __setFunctionName(f,name,prefix){return"symbol"==typeof name&&(name=name.description?"[".concat(name.description,"]"):""),Object.defineProperty(f,"name",{configurable:!0,value:prefix?"".concat(prefix," ",name):name})}function __metadata(metadataKey,metadataValue){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(metadataKey,metadataValue)}function __awaiter(thisArg,_arguments,P,generator){return new(P||(P=Promise))((function(resolve,reject){function fulfilled(value){try{step(generator.next(value))}catch(e){reject(e)}}function rejected(value){try{step(generator.throw(value))}catch(e){reject(e)}}function step(result){result.done?resolve(result.value):function adopt(value){return value instanceof P?value:new P((function(resolve){resolve(value)}))}(result.value).then(fulfilled,rejected)}step((generator=generator.apply(thisArg,_arguments||[])).next())}))}function __generator(thisArg,body){var f,y,t,_={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]},g=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return g.next=verb(0),g.throw=verb(1),g.return=verb(2),"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function verb(n){return function(v){return function step(op){if(f)throw new TypeError("Generator is already executing.");for(;g&&(g=0,op[0]&&(_=0)),_;)try{if(f=1,y&&(t=2&op[0]?y.return:op[0]?y.throw||((t=y.return)&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;switch(y=0,t&&(op=[2&op[0],t.value]),op[0]){case 0:case 1:t=op;break;case 4:return _.label++,{value:op[1],done:!1};case 5:_.label++,y=op[1],op=[0];continue;case 7:op=_.ops.pop(),_.trys.pop();continue;default:if(!(t=_.trys,(t=t.length>0&&t[t.length-1])||6!==op[0]&&2!==op[0])){_=0;continue}if(3===op[0]&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break}if(6===op[0]&&_.label<t[1]){_.label=t[1],t=op;break}if(t&&_.label<t[2]){_.label=t[2],_.ops.push(op);break}t[2]&&_.ops.pop(),_.trys.pop();continue}op=body.call(thisArg,_)}catch(e){op=[6,e],y=0}finally{f=t=0}if(5&op[0])throw op[1];return{value:op[0]?op[1]:void 0,done:!0}}([n,v])}}}var __createBinding=Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]};function __exportStar(m,o){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(o,p)||__createBinding(o,m,p)}function __values(o){var s="function"==typeof Symbol&&Symbol.iterator,m=s&&o[s],i=0;if(m)return m.call(o);if(o&&"number"==typeof o.length)return{next:function(){return o&&i>=o.length&&(o=void 0),{value:o&&o[i++],done:!o}}};throw new TypeError(s?"Object is not iterable.":"Symbol.iterator is not defined.")}function __read(o,n){var m="function"==typeof Symbol&&o[Symbol.iterator];if(!m)return o;var r,e,i=m.call(o),ar=[];try{for(;(void 0===n||n-- >0)&&!(r=i.next()).done;)ar.push(r.value)}catch(error){e={error}}finally{try{r&&!r.done&&(m=i.return)&&m.call(i)}finally{if(e)throw e.error}}return ar}function __spread(){for(var ar=[],i=0;i<arguments.length;i++)ar=ar.concat(__read(arguments[i]));return ar}function __spreadArrays(){for(var s=0,i=0,il=arguments.length;i<il;i++)s+=arguments[i].length;var r=Array(s),k=0;for(i=0;i<il;i++)for(var a=arguments[i],j=0,jl=a.length;j<jl;j++,k++)r[k]=a[j];return r}function __spreadArray(to,from,pack){if(pack||2===arguments.length)for(var ar,i=0,l=from.length;i<l;i++)!ar&&i in from||(ar||(ar=Array.prototype.slice.call(from,0,i)),ar[i]=from[i]);return to.concat(ar||Array.prototype.slice.call(from))}function __await(v){return this instanceof __await?(this.v=v,this):new __await(v)}function __asyncGenerator(thisArg,_arguments,generator){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i,g=generator.apply(thisArg,_arguments||[]),q=[];return i=Object.create(("function"==typeof AsyncIterator?AsyncIterator:Object).prototype),verb("next"),verb("throw"),verb("return",(function awaitReturn(f){return function(v){return Promise.resolve(v).then(f,reject)}})),i[Symbol.asyncIterator]=function(){return this},i;function verb(n,f){g[n]&&(i[n]=function(v){return new Promise((function(a,b){q.push([n,v,a,b])>1||resume(n,v)}))},f&&(i[n]=f(i[n])))}function resume(n,v){try{!function step(r){r.value instanceof __await?Promise.resolve(r.value.v).then(fulfill,reject):settle(q[0][2],r)}(g[n](v))}catch(e){settle(q[0][3],e)}}function fulfill(value){resume("next",value)}function reject(value){resume("throw",value)}function settle(f,v){f(v),q.shift(),q.length&&resume(q[0][0],q[0][1])}}function __asyncDelegator(o){var i,p;return i={},verb("next"),verb("throw",(function(e){throw e})),verb("return"),i[Symbol.iterator]=function(){return this},i;function verb(n,f){i[n]=o[n]?function(v){return(p=!p)?{value:__await(o[n](v)),done:!1}:f?f(v):v}:f}}function __asyncValues(o){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i,m=o[Symbol.asyncIterator];return m?m.call(o):(o=__values(o),i={},verb("next"),verb("throw"),verb("return"),i[Symbol.asyncIterator]=function(){return this},i);function verb(n){i[n]=o[n]&&function(v){return new Promise((function(resolve,reject){(function settle(resolve,reject,d,v){Promise.resolve(v).then((function(v){resolve({value:v,done:d})}),reject)})(resolve,reject,(v=o[n](v)).done,v.value)}))}}}function __makeTemplateObject(cooked,raw){return Object.defineProperty?Object.defineProperty(cooked,"raw",{value:raw}):cooked.raw=raw,cooked}var __setModuleDefault=Object.create?function(o,v){Object.defineProperty(o,"default",{enumerable:!0,value:v})}:function(o,v){o.default=v};function __importStar(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)"default"!==k&&Object.prototype.hasOwnProperty.call(mod,k)&&__createBinding(result,mod,k);return __setModuleDefault(result,mod),result}function __importDefault(mod){return mod&&mod.__esModule?mod:{default:mod}}function __classPrivateFieldGet(receiver,state,kind,f){if("a"===kind&&!f)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof state?receiver!==state||!f:!state.has(receiver))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===kind?f:"a"===kind?f.call(receiver):f?f.value:state.get(receiver)}function __classPrivateFieldSet(receiver,state,value,kind,f){if("m"===kind)throw new TypeError("Private method is not writable");if("a"===kind&&!f)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof state?receiver!==state||!f:!state.has(receiver))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===kind?f.call(receiver,value):f?f.value=value:state.set(receiver,value),value}function __classPrivateFieldIn(state,receiver){if(null===receiver||"object"!=typeof receiver&&"function"!=typeof receiver)throw new TypeError("Cannot use 'in' operator on non-object");return"function"==typeof state?receiver===state:state.has(receiver)}function __addDisposableResource(env,value,async){if(null!=value){if("object"!=typeof value&&"function"!=typeof value)throw new TypeError("Object expected.");var dispose,inner;if(async){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");dispose=value[Symbol.asyncDispose]}if(void 0===dispose){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");dispose=value[Symbol.dispose],async&&(inner=dispose)}if("function"!=typeof dispose)throw new TypeError("Object not disposable.");inner&&(dispose=function(){try{inner.call(this)}catch(e){return Promise.reject(e)}}),env.stack.push({value,dispose,async})}else async&&env.stack.push({async:!0});return value}var _SuppressedError="function"==typeof SuppressedError?SuppressedError:function(error,suppressed,message){var e=new Error(message);return e.name="SuppressedError",e.error=error,e.suppressed=suppressed,e};function __disposeResources(env){function fail(e){env.error=env.hasError?new _SuppressedError(e,env.error,"An error was suppressed during disposal."):e,env.hasError=!0}var r,s=0;return function next(){for(;r=env.stack.pop();)try{if(!r.async&&1===s)return s=0,env.stack.push(r),Promise.resolve().then(next);if(r.dispose){var result=r.dispose.call(r.value);if(r.async)return s|=2,Promise.resolve(result).then(next,(function(e){return fail(e),next()}))}else s|=1}catch(e){fail(e)}if(1===s)return env.hasError?Promise.reject(env.error):Promise.resolve();if(env.hasError)throw env.error}()}const __WEBPACK_DEFAULT_EXPORT__={__extends,__assign,__rest,__decorate,__param,__metadata,__awaiter,__generator,__createBinding,__exportStar,__values,__read,__spread,__spreadArrays,__spreadArray,__await,__asyncGenerator,__asyncDelegator,__asyncValues,__makeTemplateObject,__importStar,__importDefault,__classPrivateFieldGet,__classPrivateFieldSet,__classPrivateFieldIn,__addDisposableResource,__disposeResources}}}]);