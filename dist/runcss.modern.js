let e,t,r,o=e=>!isNaN(e),i=e=>!isNaN(parseInt(e)),a=e=>e.split("!"),n=(e,t)=>a(e).indexOf(t),l=(e,t)=>a(e).includes(t),s=e=>o(e)?M+.25*Number(e)+"rem":M+e,c=(e={})=>Object.assign(Object.create(null),e),f=new Map,p=new Map,d=c({separator:":",screens:{sm:"640px",md:"768px",lg:"1024px",xl:"1280px"}}),m=(e,r,o)=>{if(!e||"string"!=typeof e)throw Error("Component must have a name.");if(t=e.trim(),"string"==typeof r)for(h of r=r.trim().replace(/\s\s+/g," ").split(" "))q();P=[],o&&"string"==typeof o&&X(o),f.set(t,!0),p.set(t,!0),t=""},b=e=>"[object Object]"===Object.prototype.toString.call(e),g=e=>{if("string"!=typeof e)throw Error("Hex value is not a hex string.");if(e.startsWith("#")||(e="#"+e),e=4===e.length?e.slice(1).split("").map(e=>e+e).join(""):e.slice(1),!/^[0-9a-f]{6}$/i.test(e))throw Error("Incorrect hex color format.");return e},x=e=>{if(b(e))throw Error("Config value must be an object.")},u=new Map,w=(e=c())=>{for(let t of a("separator!prefix"))if(void 0!==e[t]&&"string"!=typeof e[t])throw Error(`config.${t} must be a string.`);if(e.screens&&x(e.screen),e.colors){x(e.colors);for(let[t,r]of Object.entries(e.colors))if(b(r))for(let[e,o]of Object.entries(r))u.set(t+"-"+e,g(o));else u.set(t,g(r))}else Object.assign(d,e)};e=0===document.styleSheets.length?document.head.appendChild(document.createElement("style")).sheet:document.styleSheets[0];let h,$,y=new Map,k=(t,r)=>{let o=r?`(min-width:${r})`:"";for(let r=0;r<3;r++)y.set(t+r,e.cssRules[e.insertRule(`@media${o}{}`,e.cssRules.length)])},v=e=>{if(!r){r=!0;let e=Object.entries(d.screens);for(const t of a("custom!default")){k(t);for(const[r,o]of e)k(t+r,o)}}if(e=e.trim(),!f.has(e)){for(h of e.replace(/\s\s+/g," ").split(" "))f.has(h)||(f.set(h,!0),q());f.set(e,!0)}},z=c({p:"padding",m:"margin",h:"height",z:"z-index",w:"width"}),j=c();for(let e of a('box-border|-webkit-box-sizing:border-box;box-sizing:border-box!box-content|-webkit-box-sizing:content-box;box-sizing:content-box!hidden|display:none!object-scale-down|object-fit:scale-down;-o-object-fit:scale-down!scrolling-touch|-webkit-overflow-scrolling:touch!scrolling-auto|-webkit-overflow-scrolling:auto!visible|visibility:visible!invisible|visibility:hidden!order-first|order:-9999!order-last|order:9999!order-none|order:0!grid-cols-none|grid-template-columns:none!col-auto|grid-column:auto!col-start-auto|-ms-grid-column:auto;grid-column-start:auto!col-end-auto|-ms-grid-column-span:auto;grid-column-end:auto!grid-rows-none|-ms-grid-rows:none;grid-template-rows:none!row-auto|grid-row:auto!row-start-auto|-ms-grid-row:auto;grid-row-start:auto!row-end-auto|-ms-grid-row-span:auto;grid-row-end:auto!gap-px|gap:1px!row-gap-px|row-gap:1px!grid-flow-row|grid-auto-flow:row!grid-flow-col|grid-auto-flow:column!grid-flow-row-dense|grid-auto-flow:row dense!grid-flow-col-dense|grid-auto-flow:column dense!min-w-full|min-width:100%!max-w-full|max-width:100%!max-w-screen-sm|max-width:640px!max-w-screen-md|max-width:768px!max-w-screen-lg|max-width:1024px!max-w-screen-xl|max-width:1280px!max-w-none|max-width:none!min-h-full|min-height:100%!min-h-screen|min-height:100vh!max-h-full|max-height:100%!max-h-screen|max-height:100vh!text-2xl|font-size:1.5rem!text-3xl|font-size:1.875rem!text-4xl|font-size:2.25rem!underline|text-decoration:underline!line-through|text-decoration:line-through!no-underline|text-decoration:none!uppercase|text-transform:uppercase!lowercase|text-transform:lowercase!capitalize|text-transform:capitalize!normal-case|text-transform:none!whitespace-no-wrap|white-space:nowrap!break-normal|word-break:normal;overflow-wrap:normal!break-words|overflow-wrap:break-word!break-all|word-break:break-all!truncate|overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;white-space:nowrap!h-auto|height:auto!max-w-2xl|max-width:42rem!tracking-tighter|letter-spacing:-0.05em!tracking-tight|letter-spacing:-0.025em!tracking-normal|0!tracking-wide:letter-spacing:0.025em!tracking-wider|letter-spacing:0.05em!tracking-widest|letter-spacing: 0.1em!leading-none|line-height:1!leading-tight|line-height:1.25!leading-snug|line-height:1.375!leading-normal|line-height:1.5!leading-relaxed|line-height:1.625!leading-loose|line-height:2!list-none|list-style-type:none!list-disc|list-style-type:disc!list-decimal|list-style-type:decimal!list-inside|list-style-position:inside!list-outside|list-style-position:outside!border|border-width:1px!border-collapse|border-collapse:collapse!border-separate|border-collapse:separate!table-auto|table-layout:auto!table-fixed|table-layout:fixed!appearance-none|-webkit-appearance:none;-moz-appearance:none;appearance:none!outline-none|outline:0!resize-none|resize:none!resize|resize:both!resize-y|resize:vertical!resize-x|resize:horizontal!fill-current|fill:currentColor!stroke-current|stroke:currentColor!sr-only|position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0!not-sr-only|position:static;width:auto;height:auto;padding:0;margin:0;overflow:visible;clip:auto;white-space:normal!font-sans|font-family:system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji!font-serif|font-family:Georgia,Cambria,"Times New Roman",Times,serif!font-mono|font-family:Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace!sticky|position:-webkit-sticky;position:sticky')){let[t,r]=e.split("|");j[t]=r}for(let e of a("float-right!float-left!float-none!clear-left!clear-right!clear-both!clear-none"))j[e]=e.replace("-",":");for(let e of a("block!flow-root!inline-block!inline!flex!grid!inline-grid!table!table-caption!table-cell!table-column!table-column-group!table-footer-group!table-header-group!table-row-group!table-row")){let t=e;"flex"===e?t="-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex":"inline-flex"===e?t="-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex":"grid"===e?t="-ms-grid;display:grid":"inline-grid"===e&&(t="-ms-inline-grid;display:inline-grid"),j[e]="display:"+t}for(let e of a("static!fixed!absolute!relative"))j[e]="position:"+e;let R,S,N,O,E,C,I,M,W,P,T,U=a("f7fafc!edf2f7!e2e8f0!cbd5e0!a0aec0!718096!4a5568!2d3748!1a202c!fff5f5!fed7d7!feb2b2!fc8181!f56565!e53e3e!c53030!9b2c2c!742a2a!fffaf0!feebc8!fbd38d!f6ad55!ed8936!dd6b20!c05621!9c4221!7b341e!fffff0!fefcbf!faf089!f6e05e!ecc94b!d69e2e!b7791f!975a16!744210!f0fff4!c6f6d5!9ae6b4!68d391!48bb78!38a169!2f855a!276749!22543d!e6fffa!b2f5ea!81e6d9!4fd1c5!38b2ac!319795!2c7a7b!285e61!234e52!ebf8ff!bee3f8!90cdf4!63b3ed!4299e1!3182ce!2b6cb0!2c5282!2a4365!ebf4ff!c3dafe!a3bffa!7f9cf5!667eea!5a67d8!4c51bf!434190!3c366b!faf5ff!e9d8fd!d6bcfa!b794f4!9f7aea!805ad5!6b46c1!553c9a!44337a!fff5f7!fed7e2!fbb6ce!f687b3!ed64a6!d53f8c!b83280!97266d!702459"),L=a("gray!red!orange!yellow!green!teal!blue!indigo!purple!pink"),A=a("none!sm!nm!md!lg!full"),F=c({l:"left",r:"right",t:"top",b:"bottom"}),H=e=>{if("opacity"===S&&o(N))W=`--${e}-opacity:`+("100"===N?"1":N/100);else{let t=u.get(I);if(!t)if(N){let e=L.indexOf(S);t=U[9*e+(Number(N[0])-1)]}else if(S&&S.startsWith("#"))try{t=g(S)}catch{}if(t){let r=e+`:rgba(${parseInt(t.slice(0,2),16)},${parseInt(t.slice(2,4),16)},${parseInt(t.slice(4,6),16)},var(--${e}-opacity,1))`;W=e+`:#${t};`+r}else W="current"===S?e+":currentColor":e+":"+I}},_=()=>{if(!O&&(l("auto!initial!inherit",E)||i(E))){let e=M+E;N?(T=1,"y"===S?W=`top:${e};bottom:`+e:"x"===S&&(W=`left:${e};right:`+e)):S&&("inset"===R?W=`top:${e};right:${e};bottom:${e};left:`+e:(T=2,W=R+":"+e))}},B=()=>{let e;o(S)?e=S+"ms":i(S)&&(e=S),e&&(W=`-webkit-transition-${R}:${e};-o-transition-${R}:${e};transition-${R}:`+e)},D=c({object:()=>{l("contain!cover!fill!none!bottom",I)?W=`-o-object-fit:${I};object-fit:`+I:l("bottom!center!left!left-bottom!left-top!right!right-bottom!right-top!top",I)&&(I=I.replace("-"," "),W=`-o-object-position:${I};object-position:`+I)},overflow:()=>{l("x!y",S)&&(T=1),W=C+":"+E},clearfix:()=>{$="clearfix::after",W='content:"";display:table;clear:both'},text:()=>{let e=n("xs!sm!base!lg!xl",S);if(e>-1)W=`font-size:${.75+.125*e}rem`;else if(S.endsWith("xl")){let[e]=S.split("x");o(e)&&(W=`font-size:${Number(e)-2}rem`)}else l("left!center!right!justify",I)?W="text-align:"+I:H("color")},font:()=>{let e=n("hairline!thin!light!normal!medium!semibold!bold!extrabold!black",S);e>-1?W="font-weight:"+100*(1+e):o(S)&&(W="font-weight:"+S)},whitespace:()=>{l("normal!pre!pre-line!pre-wrap",I)&&(W="white-space:"+I)},inset:_,top:_,right:_,bottom:_,left:_,flex:()=>{let e=(e,t=1,r="0%")=>`-webkit-box-flex:${e};-ms-flex:${e} ${t} ${r};flex:${e} ${t} `+r;if(l("row!row-reverse!col!col-reverse",I))I=I.replace("col","column"),W=`-webkit-box-orient:${"row"===S?"horizontal":"vertical"};-webkit-box-direction:${"reverse"===N?N:"normal"};-ms-flex-direction:${I};flex-direction:${I}`;else if(l("no-wrap!flex-wrap!wrap-reverse",I))"no-wrap"===I&&(I="nowrap"),W=`-ms-flex-wrap:${I};flex-wrap:${I}`;else if(l("grow!shrink",S)){T=1;let e=N||1;W="grow"===S?`-webkit-box-flex:${e};-ms-flex-positive:${e};flex-grow:${e}`:`-ms-flex-negative:${e};flex-shrink:${e}`}else W="initial"===I?e(0,1,"auto"):"auto"===I?e(1,1,"auto"):"none"===I?"-webkit-box-flex:0;-ms-flex:none;flex:none":O?e(S,N,O):N?e(S,N):e(S)},order:()=>{if(o(S)){let e=M+S;W=`-webkit-box-ordinal-group:${Number(e)+1};-ms-flex-order:${e};order:`+e}},grid:()=>{o(N)&&(W=c({cols:`-ms-grid-columns:(minmax(0,1fr))[${N}];grid-template-columns: repeat(${N}, minmax(0, 1fr))`,span:`-ms-grid-column-span:${N};grid-column: span ${N} / span `+N,start:`-ms-grid-column:${N};grid-column-start:`+N,end:`-ms-grid-column-span:${N};grid-column-end:`+N,rows:`-ms-grid-rows:(minmax(0,1fr))[${N}];grid-template-rows: repeat(${N}, minmax(0, 1fr))`})[S])},row:()=>{i(N)&&(W=c({span:`-ms-grid-row-span:${N};grid-row: span ${N} / span ${N}`,start:`-ms-grid-row:${N};grid-row-start:`+N,end:`-ms-grid-row-span:${N};grid-row-end:`+N,gap:"row-gap:"+s(N)})[S])},col:()=>{if(o(N)&&("span"===S?W=`-ms-grid-column-span:${N};grid-column:span ${N} / span ${N};`:"start"===S?W=`-ms-grid-column:${N};grid-column-start:${N}`:"end"===S&&(W=`-ms-grid-column-span:${N};grid-column-end:${N}`)),i(N)&&"gap"===S){let e="px"===N?"1px":s(N);W=`-webkit-column-gap:${e};-moz-column-gap:${e}column-gap:`+e}},gap:()=>{i(S)&&(W="gap:"+s(S))},space:()=>{if(P=[">:not(template)~:not(template)"],"px"===N&&(N="1px"),N)if(i(N)){let e=s(N);"x"===S?W=`margin-right:calc(${e}*var(--space-x-reverse,0));margin-left:calc(${e}*(1 - var(--space-x-reverse,0)))`:"y"===S&&(W=`margin-top:calc(${e}*(1 - var(--space-y-reverse,0)));margin-bottom:calc(${e}*var(--space-y-reverse,0))`)}else"reverse"===N&&(W=`--space-${S}-reverse:1`)},divide:()=>{if(P=[">:not(template)~:not(template)"],T=1,!O){let e;o(N)?e=N+"px":i(N)?e=N:"reverse"===N?W=`--divide-${S}-reverse:1`:S&&(e="1px"),e&&("y"===S?W=`border-top-width:calc(${e}*calc(1 - var(--divide-y-reverse,0)));border-bottom-width:calc(${e}*var(--divide-y-reverse,0)))`:"x"===S&&(W=`border-right-width:calc(${e}*var(--divide-x-reverse,0));border-left-width:calc(${e}*calc(1 - var(--divide-x-reverse,0)))`))}W||H("border-color")},min:()=>{!i(N)||"w"!==S&&"h"!==S||(W=`min-${"w"===S?"width":"height"}:`+N)},max:()=>{if("w"===S){let e=n("xs!sm!md!lg!xl",N);e>-1?W=`max-width:${4*e+20}rem`:i(N)&&(W=N.endsWith("xl")?`max-width:${8*parseInt(N)+24}rem`:"max-width:"+N)}else"h"===S&&i(N)&&(W="max-height:"+N)},tracking:()=>{i(S)&&(W="letter-spacing:"+S)},leading:()=>{o(S)?W=`line-height:${.25*Number(S)}rem`:i(S)&&(W="line-height:"+S)},placeholder:()=>{P.push("::placeholder"),H("color")},align:()=>{l("baseline!top!middle!bottom!text-top!text-bottom",I)&&(W="vertical-align:"+I)},bg:()=>{I=I.replace("-"," "),l("bottom!center!left!left bottom!left top!right!right bottom!right top!top",I)?W="background-position:"+I:l("repeat!no-repeat!repeat-x!repeat-y",I)?W="background-repeat:"+I:l("repeat-round!repeat-space",I)?W="background-repeat:"+N:l("auto!cover!contain",I)?W="background-size:"+I:l("fixed!local!scroll",S)?W="background-attachment:"+S:H("background-color")},rounded:()=>{let e,t=A.indexOf(E);if(i(E)?(e=E,t=9):5===t?e="9999px":t>-1?e=.125*t+"rem":(!S||F[S]||l("t!b",S[0])&&l("r!l",S[1]))&&(e="0.25rem"),e){let r=F[S[0]];!S||!N&&t>-1?W="border-radius:"+e:l("t!b",S)?(T=1,W=`border-${r}-left-radius:${e};border-${r}-right-radius:`+e):l("l!r",S)?(T=1,W=`border-top-${r}-radius:${e};border-bottom-${r}-radius:`+e):(T=2,W=`border-${r}-${F[S[1]]}-radius:`+e)}},border:()=>{let e=F[S];N&&e?o(N)?(T=1,W=`border-${e}-width:${N}px`):i(N)&&(W=`border-${e}-width:`+N):l("solid!dashed!dotted!double!none",S)?W="border-style:"+S:e?(T=1,W=`border-${e}-width:1px`):o(S)?W=`border-width:${S}px`:i(S)?W="border-width:"+S:H("border-color")},opacity:()=>{o(S)&&(W="opacity:"+100/S)},transition:()=>{let e=e=>`-webkit-transition-property:${e};-o-transition-property:${e};transition-property:`+e,t=e=>`-webkit-transition-property:-webkit-${e};transition-property:-webkit-${e};-o-transition-property:${e};transition-property:${e};transition-property:${e},-webkit-${e}`;S?"colors"===S?W=e("background-color,border-color,color,fill,stroke"):"shadow"===S?W=t("box-shadow"):"transform"===S?W=t("transform"):S&&(W=e(S)):(W="-webkit-transition-property:S-webkit-box-shadow,-webkit-transform;transition-property:S-webkit-box-shadow,-webkit-transform;-o-transition-property:Sbox-shadow,transform;transition-property:Sbox-shadow,transform;transition-property:Sbox-shadow,transform,-webkit-box-shadow,-webkit-transform",W=W.replace(/S/g,"background-color,border-color,color,fill,stroke,opacity,"))},duration:B,delay:B,ease:()=>{let e=e=>`-webkit-transition-timing-function:${e};-o-transition-timing-function:${e};transition-timing-function:${e}`;"in"===I?W=e("cubic-bezier(0.4,0,1,1)"):"out"===I?W=e("cubic-bezier(0,0,0.2,1)"):"in-out"===I?W=e("cubic-bezier(0.4,0,0.2,1)"):"linear"===I&&(W=e("linear"))},scale:()=>{if(o(E)){let e=E/100;l("x!y",S)?(T=1,W=`--transform-scale-${S}:`+e):W=`--transform-scale-x:${e};--transform-scale-y:`+e}},rotate:()=>{o(S)&&(W=`--transform-rotate:${M}${S}deg`)},translate:()=>{if(l("x!y",S)){if("px"===N)N="1px";else if("full"===N)N="100%";else if(N.includes("/")){let e=N.split("/");2===e.length&&(N=Number(e[0])/Number(e[1])+"%")}i(N)&&(W=`--transform-translate-${S}:`+s(N))}},skew:()=>{l("x!y",S)&&o(N)&&(W=`--transform-skew-${S}:${M+N}deg`)},transform:()=>{let e="translatex(var(--transform-translate-x,0))translatey(var(--transform-translate-y,0))rotate(var(--transform-rotate,0))skewx(var(--transform-skew-x,0))skewy(var(--transform-skew-y,0))scalex(var(--transform-scale-x,1))scaley(var(--transform-scale-y,1))";W=`-webkit-transform:${e};-ms-transform:${e};transform:translatex(var(--transform-translate-x,0))translatey(var(--transform-translate-y,0))rotate(var(--transform-rotate,0))skewx(var(--transform-skew-x,0))skewy(var(--transform-skew-y,0))scalex(var(--transform-scale-x,1))scaley(var(--transform-scale-y,1))`},origin:()=>{l("center!top!top-right!right!bottom-right!bottom!bottom-left!left!top-left",I)&&(I=I.replace("-"," "),W=`-webkit-transform-origin:${I};-ms-transform-origin:${I};transform-origin:`+I)},cursor:()=>{l("auto!default!pointer!wait!text!move!not-allowed",I)&&(W="cursor:"+I)},box:()=>{if("shadow"===S){let e=c({xs:"0 0 0 1pxR.05)",sm:"0 1px 2px 0R.05)","":"0 1px 3px 0R.1), 0 1px 2px 0R.06)",md:"0 4px 6px -1pxR.1), 0 2px 4px -1pxR.06)",lg:"0 10px 15px -3pxR.1), 0 4px 6px -2pxR.05)",xl:"0 20px 25px -5pxR.1), 0 10px 10px -5pxR.04)","2xl":"0 25px 50px -12pxR.25)",inner:"inset 0 2px 4px 0R.06)",outline:"0 0 0 3px rgba(66, 153, 225, 0.5)",none:"none"})[N];e&&(e=e.replace(/R/g," rgba(0, 0, 0, 0"),W=`-webkit-box-shadow:${e};box-shadow:`+e)}},outline:()=>{S&&(W="outline:"+I.replace("-"," "))},pointer:()=>{S&&(W="pointer-events:"+S)},select:()=>{l("none!auto!text!contain!all!inherit!initial!unset",I)&&(W=`-webkit-user-select:${I};-moz-user-select:${I};-ms-user-select:${I};user-select:`+I)},fill:()=>{S&&(W="fill:"+S)},stroke:()=>{o(S)?W="stroke-width:"+S:S&&(W="stroke:"+S)},items:()=>{l("stretch!start!center!end!baseline",I)&&(W=`-webkit-box-align:${I};-ms-flex-align:${I};align-items:`+(l("start!end",I)?"flex-":"")+I)},content:()=>{if(l("start!center!end!between!around")){let e=I;l("start!end",I)?I="flex-"+I:"between"===I?(e="justify",I="space-"+I):"around"===I&&(e="distribute",I="space-"+I),W=`-ms-flex-line-pack:${e};align-content:`+I}},self:()=>{if(l("auto!start!center!end!stretch",I)){let e=`-ms-grid-row-align:${I};`,t=I;l("start!end",I)&&(I="flex-"+I,e=""),W=`-ms-flex-item-align:${t};${e}align-self:`+I}},justify:()=>{if(l("start!center!end!between!around",I)){let e=I;"between"===e?(e="justify",I="space-"+I):l("start!end")&&(I="flex-"+I);let t=`-webkit-box-pack:${e};`;"around"===e&&(e="distribute",I="space-"+I,t=""),W=t+`-ms-flex-pack:${e};justify-content:`+I}}}),G=/[^:]+::?|.+/g,Y=/[.*+\-?^${}()|[\]\\]/g;function q(){T=0,W="",M="",$=h;let e=d.separator;if(":"!==e&&(h=h.replace(new RegExp(e.replace(Y,"\\$&"),"g"),":")),P=h.match(G),h=P.pop(),P=P.map(e=>e.endsWith("::")?"::"+e.slice(0,-2):":"+e.slice(0,-1)),P.length>0&&p.get(h))return void Q();if("-"===h[0]&&(M="-",h=h.slice(1)),"string"==typeof d.prefix){if(!h.startsWith(d.prefix))return void Q();h=h.slice(d.prefix.length)}let t,r=h.split("-");if([R,S="",N="",O=""]=r,E=r[r.length-1],C=r.slice(0,-1).join("-"),I=r.slice(1).join("-"),!(W=j[h])&&(t=D[R])?t():R.length<3&&!N&&function(){let e;if("px"===S)e=M+"1px";else if("full"===S)e="100%";else if("screen"===S)"w"===R?e="100vw":"h"===R&&(e="100vh");else if("auto"===S)e="auto";else if(o(S))e=M+.25*Number(S)+"rem";else if(S.indexOf("/")>-1){let[t,r]=S.split("/");o(t)&&o(r)&&(e=M+(Number(t)/Number(r)).toFixed(6)+"%")}else i(S)&&(e=M+S);let t=z[R[0]],r=F[R[1]];e&&t&&("x"===R[1]?(T=1,W=t+`-right:${e};${t}-left:`+e):"y"===R[1]?(T=1,W=t+`-top:${e};${t}-bottom:`+e):r?(T=2,W=t+`-${r}:`+e):W=t+":"+e)}(),W)X(W);else if("container"===h){X("width:100%");for(const[e,t]of Object.entries(d.screens))X("max-width:"+t,y.get(`default${e}0`))}else Q()}let J=e=>{let t=[];for(let r of[...e.cssRules])if(r.type===CSSRule.STYLE_RULE){if(r.selectorText.split(",").map(e=>e.trim()).includes("."+h)){let o=r.cssText;t.push([o.slice(o.indexOf("{")+1,o.lastIndexOf("}")),e])}}else r.type===CSSRule.MEDIA_RULE&&t.push(...J(r));return t},K=new Map,Q=()=>{if(P.length>0){let e=[];for(const t of document.styleSheets)e.push(...J(t));let t=P[0].slice(1);if(d.screens[t]){let r=[0,1,2].map(e=>y.get("custom"+e)),o=Object.entries(d.screens);for(let[i,a]of e){let e=r.indexOf(a);if(e>-1)X(i,y.get("custom"+t+e));else{let e=K.get(a);if(!e){e=c();for(const[t,r]of o)e[t]=a.cssRules[a.insertRule(`@media(min-width:${r}){}`,a.cssRules.length)];K[a]=e}X(i,e[t])}}}else for(let[t,r]of e)X(t,r)}},V=c({"::placeholder":"::-webkit-input-P!::-moz-P!:-ms-input-P!::-ms-input-P".replace(/P/g,"placeholder"),"::selection":":::-moz-selection"});function X(e,r){let o="",i=$,n="default",s="",c=()=>{try{r.insertRule(s+`.${i}${o}{${e}}`,r.cssRules.length)}catch(e){}};if(t&&(i=t,n="custom"),i=i.replace(/[.:()%,#]/g,"\\$&"),d.important&&(!0===d.important?e=e.replace(/;/g,"!important;")+"!important":"string"==typeof d.important&&(s=d.important+" ")),P.length>0){let e=y.get(n+P[0].slice(1)+T);e&&(r=r||e,P.shift())}else r||(r=y.get(n+T));if(P.length>0){for(const e of[...P]){let t=V[e];t&&P.push(...a(t))}for(o of P)l(":first!:last",o)?o+="-child":l(":odd!:even",o)?o=`:nth-child(${o.slice(1)})`:o.startsWith(":group")&&(i=o.slice(1).replace("-",":")+" ."+i,o=""),c()}else c()}export{m as component,w as configure,v as processClasses};
//# sourceMappingURL=runcss.modern.js.map
