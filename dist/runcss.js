function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}function t(t,r){var o;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(o=function(t,r){if(t){if("string"==typeof t)return e(t,void 0);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?e(t,void 0):void 0}}(t))||r&&t&&"number"==typeof t.length){o&&(t=o);var n=0;return function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(o=t[Symbol.iterator]()).next.bind(o)}var r,o,n=function(e){return!isNaN(e)},i=function(e){return!isNaN(parseInt(e))},a=function(e){return e.split("!")},l=function(e,t){return a(e).indexOf(t)},s=function(e,t){return a(e).includes(t)},c=function(e){return n(e)?V+.25*Number(e)+"rem":V+e},f=function(e){return Object.assign(Object.create(null),e)},d=new Map,p=new Map;o=0===document.styleSheets.length?document.head.appendChild(document.createElement("style")).sheet:document.styleSheets[0];for(var u,m,x,b,g=new Map,h=t(a("sm|@media(min-width:640px){}!md|@media(min-width:768px){}!lg|@media(min-width:1024px){}!xl|@media(min-width:1280px){}"));!(u=h()).done;){var w=u.value;w=w.split("|"),g.set(w[0],o.cssRules[o.insertRule(w[1],o.cssRules.length)])}for(var v,y,k,j=f({p:"padding",m:"margin",h:"height",z:"z-index",w:"width"}),z=f({}),N=t(a('box-border|box-sizing:border-box!box-content|box-sizing:content-box!hidden|display:none!object-scale-down|object-fit:scale-down;-o-object-fit:scale-down!scrolling-touch|-webkit-overflow-scrolling:touch!scrolling-auto|-webkit-overflow-scrolling:auto!visible|visibility:visible!invisible|visibility:hidden!flex-row|flex-direction:row!flex-row-reverse|flex-direction:row-reverse!flex-col|flex-direction:column!flex-col-reverse|flex-direction:column-reverse!flex-no-wrap|flex-wrap:nowrap!flex-wrap|flex-wrap:wrap!flex-wrap-reverse|flex-wrap:wrap-reverse!items-stretch|align-items:stretch!items-start|align-items:flex-start!items-center|align-items:center!items-end|align-items:flex-end!items-baseline|align-items:baseline!content-start|align-content:flex-start!content-center|align-content:center!content-end|align-content:flex-end!content-between|align-content:space-between!content-around|align-content:space-around!self-auto|align-self:auto!self-start|align-self:flex-start!self-center|align-self:center!self-end|align-self:flex-end!self-stretch|align-self:stretch!justify-start|justify-content:flex-start!justify-center|justify-content:center!justify-end|justify-content:flex-end!justify-between|justify-content:space-between!justify-around|justify-content:space-around!flex-grow|flex-grow:1!flex-grow-0|flex-grow:0!flex-shrink|flex-shrink:1!flex-shrink-0|flex-shrink:0!order-first|order:-9999!order-last|order:9999!order-none|order:0!grid-cols-none|grid-template-columns:none!col-auto|grid-column:auto!col-start-auto|grid-column-start:auto!col-end-auto|grid-column-end:auto!grid-rows-none|grid-template-rows:none!row-auto|grid-row:auto!row-start-auto|grid-row-start:auto!row-end-auto|grid-row-end:auto!gap-px|gap:1px!row-gap-px|row-gap:1px!col-gap-px|column-gap:1px!grid-flow-row|grid-auto-flow:row!grid-flow-col|grid-auto-flow:column!grid-flow-row-dense|grid-auto-flow:row dens!grid-flow-col-dense|grid-auto-flow:column dense!min-w-full|min-width:100%!max-w-full|max-width:100%!max-w-screen-sm|max-width:640px!max-w-screen-md|max-width:768px!max-w-screen-lg|max-width:1024px!max-w-screen-xl|max-width:1280px!max-w-none|max-width:none!min-h-full|min-height:100%!min-h-screen|min-height:100vh!max-h-full|max-height:100%!max-h-screen|max-height:100vh!text-2xl|font-size:1.5rem!text-3xl|font-size:1.875rem!text-4xl|font-size:2.25rem!text-left|text-align:left!text-center|text-align:center!text-right|text-align:right!text-justify|text-align:justify!underline|text-decoration:underline!line-through|text-decoration:line-through!no-underline|text-decoration:none!uppercase|text-transform:uppercase!lowercase|text-transform:lowercase!capitalize|text-transform:capitalize!normal-case|text-transform:none!whitespace-no-wrap|white-space:nowrap!break-normal|word-break:normal;overflow-wrap:normal!break-words|overflow-wrap:break-word!break-all|word-break:break-all!truncate|overflow:hidden;text-overflow:ellipsis;white-space:nowrap!flex-initial|flex: 0 1 auto!flex-none|flex:none!h-auto|height:auto!max-w-2xl|max-width:42rem!tracking-tighter|letter-spacing:-0.05em!tracking-tight|letter-spacing:-0.025em!tracking-normal|0!tracking-wide:letter-spacing:0.025em!tracking-wider|letter-spacing:0.05em!tracking-widest|letter-spacing: 0.1em!leading-none|line-height:1!leading-tight|line-height:1.25!leading-snug|line-height:1.375!leading-normal|line-height:1.5!leading-relaxed|line-height:1.625!leading-loose|line-height:2!list-none|list-style-type:none!list-disc|list-style-type:disc!list-decimal|list-style-type:decimal!list-inside|list-style-position:inside!list-outside|list-style-position:outside!border|border-width:1px!border-collapse|border-collapse:collapse!border-separate|border-collapse:separate!table-auto|table-layout:auto!table-fixed|table-layout:fixed!shadow-xs|box-shadow:0 0 0 1px rgba(0,0,0,0.05)!shadow-sm|box-shadow:0 1px 2px 0 rgba(0,0,0,0.05)!shadow|box-shadow:0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px 0 rgba(0,0,0,0.06)!shadow-md|box-shadow:0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)!shadow-lg|box-shadow:0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)!shadow-xl|box-shadow:0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)!shadow-2xl|box-shadow:0 25px 50px -12px rgba(0,0,0,0.25)!shadow-inner|box-shadow:inset 0 2px 4px 0 rgba(0,0,0,0.06)!shadow-outline|box-shadow:0 0 0 3px rgba(66,153,225,0.5)!shadow-none|box-shadow:none!ease-linear|transition-timing-function:linear!ease-in|transition-timing-function:cubic-bezier(0.4,0,1,1)!ease-out|transition-timing-function:cubic-bezier(0,0,0.2,1)!ease-in-out|transition-timing-function:cubic-bezier(0.4,0,0.2,1)!appearance-none|-webkit-appearance:none;-moz-appearance:none;appearance:none!outline-none|outline:0!resize-none|resize:none!resize|resize:both!resize-y|resize:vertical!resize-x|resize:horizontal!fill-current|fill:currentColor!stroke-current|stroke:currentColor!sr-only|position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0!not-sr-only|position:static;width:auto;height:auto;padding:0;margin:0;overflow:visible;clip:auto;white-space:normal!font-sans|font-family:system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji!font-serif|font-family:Georgia,Cambria,"Times New Roman",Times,serif!font-mono|font-family:Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'));!(v=N()).done;){var S=v.value.split("|");z[S[0]]=S[1]}for(var C,I=t(a("object-contain!object-cover!object-fill!object-none!object-bottom"));!(C=I()).done;){var O=C.value,R=O.slice(O.indexOf("-")+1);z[O]="-o-object-fit:"+R+";object-fit:"+R}for(var A,E=t(a("object-bottom!object-center!object-left!object-left-bottom!object-left-top!object-right!object-right-bottom!object-right-top!object-top"));!(A=E()).done;)k=(y=A.value).indexOf("-")+1,z[y]=y.slice(0,k)+"position:"+y.slice(k).replace("-"," ");for(var M,T=t(a("float-right!float-left!float-none!clear-left!clear-right!clear-both!clear-none"));!(M=T()).done;){var U=M.value;z[U]=U.replace("-",":")}for(var L,W=t(a("block!flow-root!inline-block!inline!flex!grid!inline-grid!table!table-caption!table-cell!table-column!table-column-group!table-footer-group!table-header-group!table-row-group!table-row"));!(L=W()).done;){var $=L.value,F=$;"flex"===$?F="display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex":"grid"===$&&(F="display:-ms-grid;display:grid"),z[$]="display:"+F}for(var B,G=t(a("static!fixed!absolute!relative!sticky"));!(B=G()).done;){var H=B.value;z[H]="position:"+H}var Y,_,q,D,J,K,P,Q,V,X,Z=a("f7fafc!edf2f7!e2e8f0!cbd5e0!a0aec0!718096!4a5568!2d3748!1a202c!fff5f5!fed7d7!feb2b2!fc8181!f56565!e53e3e!c53030!9b2c2c!742a2a!fffaf0!feebc8!fbd38d!f6ad55!ed8936!dd6b20!c05621!9c4221!7b341e!fffff0!fefcbf!faf089!f6e05e!ecc94b!d69e2e!b7791f!975a16!744210!f0fff4!c6f6d5!9ae6b4!68d391!48bb78!38a169!2f855a!276749!22543d!e6fffa!b2f5ea!81e6d9!4fd1c5!38b2ac!319795!2c7a7b!285e61!234e52!ebf8ff!bee3f8!90cdf4!63b3ed!4299e1!3182ce!2b6cb0!2c5282!2a4365!ebf4ff!c3dafe!a3bffa!7f9cf5!667eea!5a67d8!4c51bf!434190!3c366b!faf5ff!e9d8fd!d6bcfa!b794f4!9f7aea!805ad5!6b46c1!553c9a!44337a!fff5f7!fed7e2!fbb6ce!f687b3!ed64a6!d53f8c!b83280!97266d!702459"),ee=a("gray!red!orange!yellow!green!teal!blue!indigo!purple!pink"),te=a("none!sm!nm!md!lg!full"),re=f({l:"left",r:"right",t:"top",b:"bottom"}),oe=function(e){var t;if(D){var r=ee.indexOf(q);if(t=Z[9*r+(Number(D[0])-1)]){var o=e+":rgba("+parseInt(t.slice(0,2),16)+","+parseInt(t.slice(2,4),16)+","+parseInt(t.slice(4,6),16)+",var(--"+e+"-opacity,1))";X=e+":#"+t+";"+o}else"opacity"===q&&n(D)&&(X="--"+e+"-opacity:"+("100"===D?"1":D/100))}else if(q){var i=q.slice(0,3);i.startsWith("#")||s("rgb!hsl",i)||s("transparent!current",q)?X=e+":"+q:("black"===q?t="#000":"white"===q&&(t="#fff"),t&&(X=e+":"+t))}},ne=function(){if(s("auto!initial!inherit",J)&&!i(J)){var e=V+J;D?"y"===q?X="top:"+e+";bottom:"+e:"x"===q&&(X="left:"+e+";right:"+e):q&&(X="inset"===_?"top:"+e+";right:"+e+";bottom:"+e+";left:"+e:_+":"+e)}},ie=function(){n(q)?X="transition-"+_+":"+q+"ms":i(q)&&(X="transition-"+_+":"+q)},ae=f({overflow:function(){X=K+":"+J},clearfix:function(){x="clearfix::after",X='content:"";display:table;clear:both'},text:function(){var e=l("xs!sm!base!lg!xl",q);if(e>-1)X="font-size:"+(.75+.125*e)+"rem";else if(q.endsWith("xl")){var t=q.split("x")[0];n(t)&&(X="font-size:"+(Number(t)-2)+"rem")}else oe("color")},font:function(){var e=l("hairline!thin!light!normal!medium!semibold!bold!extrabold!black",q);e>-1&&(X="font-weight:"+100*(1+e))},whitespace:function(){s("normal!pre!pre-line!pre-wrap",P)&&(X="white-space:"+P)},inset:ne,top:ne,right:ne,bottom:ne,left:ne,flex:function(){var e=function(e,t,r){return void 0===t&&(t=1),void 0===r&&(r="0x"),"-webkit-box-flex:"+e+";-ms-flex:"+e+" "+t+" "+r+";flex:"+e+" "+t+" "+r};if(s("grow!shrink",q)){var t=D||1;X="grow"===q?"-webkit-box-flex:"+t+";-ms-flex-positive:"+t+";flex-grow:"+t:"-ms-flex-negative:"+t+";flex-shrink:"+t}else X=4===Q?e(q,D,Y[3]):D?e(q,D):e(q)},order:function(){n(q)&&(X=_+":"+V+q)},grid:function(){n(D)&&(X=f({cols:"-ms-grid-columns:(minmax(0,1fr))["+D+"];grid-template-columns: repeat("+D+", minmax(0, 1fr))",span:"-ms-grid-column-span:"+D+";grid-column: span "+D+" / span "+D,start:"-ms-grid-column:"+D+";grid-column-start:"+D,end:"-ms-grid-column-span:"+D+";grid-column-end:"+D,rows:"-ms-grid-rows:(minmax(0,1fr))["+D+"];grid-template-rows: repeat("+D+", minmax(0, 1fr))"})[q])},row:function(){i(D)&&(X=f({span:"grid-row: span "+D+" / span "+D,start:"grid-row-start:"+D,end:"grid-row-end:"+D,gap:"row-gap:"+c(D)})[q])},col:function(){i(D)&&"gap"===q&&(X="column-gap:"+c(D))},gap:function(){i(q)&&(X="gap:"+c(q))},space:function(){if(b=">:not(template)~:not(template)","px"===D&&(D="1px"),D)if(i(D)){var e=c(D);"x"===q?X="margin-right:calc("+e+"*var(--space-x-reverse,0));margin-left:calc("+e+"*(1 -var(--space-x-reverse,0)))":"y"===q&&(X="margin-top:calc("+e+"*(1 -var(--space-y-reverse,0)));margin-bottom:calc("+e+"*var(--space-y-reverse,0))")}else"reverse"===D&&(X="--space-"+q+"-reverse:1")},divide:function(){var e;b=">:not(template)~:not(template)",Q<4&&(n(D)?e=D+"px":i(D)?e=D:"reverse"===D?X="--divide-"+q+"-reverse:1":q&&(e="1px"),e&&("y"===q?X="border-top-width:calc("+e+"*calc(1 -var(--divide-y-reverse,0)));border-bottom-width:calc("+e+"*var(--divide-y-reverse,0)))":"x"===q&&(X="border-right-width:calc("+e+"*var(--divide-x-reverse,0));border-left-width:calc("+e+"*calc(1 -var(--divide-x-reverse,0)))"))),X||oe("border-color")},min:function(){i(D)&&("w"!==q&&"h"!==q||(X="min-"+("w"===q?"width":"height")+":"+D))},max:function(){if("w"===q){var e=l("xs!sm!md!lg!xl",D);e>-1?X="max-width:"+(4*e+20)+"rem":i(D)&&(X=D.endsWith("xl")?"max-width:"+(8*parseInt(D)+24)+"rem":"max-width:"+D)}else"h"===q&&i(D)&&(X="max-height:"+D)},tracking:function(){i(q)&&(X="letter-spacing:"+q)},leading:function(){n(q)?X="line-height:"+.25*Number(q)+"rem":i(q)&&(X="line-height:"+q)},placeholder:function(){b="::placeholder",oe("color")},align:function(){s("baseline!top!middle!bottom!text-top!text-bottom",P)&&(X="vertical-align:"+P)},bg:function(){P=P.replace("-"," "),s("bottom!center!left!left bottom!left top!right!right bottom!right top!top",P)?X="background-position:"+P:s("repeat!no-repeat!repeat-x!repeat-y",P)?X="background-repeat:"+P:s("repeat-round!repeat-space",P)?X="background-repeat:"+D:s("auto!cover!contain",P)?X="background-size:"+P:s("fixed!local!scroll",q)?X="background-attachment:"+q:oe("background-color")},rounded:function(){var e,t=te.indexOf(J);if(i(J)?(e=J,t=9):5===t?e="9999px":t>-1?e=.125*t+"rem":(!q||re[q]||s("t!b",q[0])&&s("r!l",q[1]))&&(e="0.25rem"),e){var r=re[q[0]];X=!q||!D&&t>-1?"border-radius:"+e:s("t!b",q)?"border-"+r+"-left-radius:"+e+";border-"+r+"-right-radius:"+e:s("l!r",q)?"border-top-"+r+"-radius:"+e+";border-bottom-"+r+"-radius:"+e:"border-"+r+"-"+re[q[1]]+"-radius:"+e}},border:function(){var e=re[q];D&&e?n(D)?X="border-"+e+"-width:"+D+"px":i(D)&&(X="border-"+e+"-width:"+D):s("solid!dashed!dotted!double!none",q)?X="border-style:"+q:e?X="border-"+e+"-width:1px":n(q)?X="border-width:"+q+"px":i(q)?X="border-width:"+q:oe("border-color")},opacity:function(){n(q)&&(X="opacity:"+100/q)},transition:function(){X="colors"===q?"transition-property:background-color,border-color,color,fill,stroke":"shadow"===q?"transition-property:box-shadow":q?"transition-property:"+P:"transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform"},duration:ie,delay:ie,scale:function(){if(n(J)){var e=J/100;X=s("x!y",q)?"--transform-scale-"+q+":"+e:"--transform-scale-x:"+e+";--transform-scale-y:"+e}},rotate:function(){n(q)&&(X="--transform-rotate:"+V+q+"deg")},translate:function(){if(s("x!y",q)){if("px"===D)D="1px";else if("full"===D)D="100%";else if(D.includes("/")){var e=D.split("/");2===e.length&&(D=Number(e[0])/Number(e[1])+"%")}i(D)&&(X="--transform-translate-"+q+":"+c(D))}},skew:function(){s("x!y",q)&&n(D)&&(X="--transform-skew-"+q+":"+(V+D)+"deg")},transform:function(){var e="translatex(var(--transform-translate-x,0))translatey(var(--transform-translate-y,0))rotate(var(--transform-rotate,0))skewx(var(--transform-skew-x,0))skewy(var(--transform-skew-y,0))scalex(var(--transform-scale-x,1))scaley(var(--transform-scale-y,1))";X="-webkit-transform:"+e+";-ms-transform:"+e+";transform:"+e},origin:function(){s("center!top!top-right!right!bottom-right!bottom!bottom-left!left!top-left",P)&&(X="transform-origin:"+P.replace("-"," "))},cursor:function(){s("auto!default!pointer!wait!text!move!not-allowed",P)&&(X="cursor:"+P)},outline:function(){q&&(X="outline:"+P.replace("-"," "))},pointer:function(){q&&(X="pointer-events:"+q)},select:function(){s("none!auto!text!contain!all!inherit!initial!unset",P)&&(X="user-select:"+P)},fill:function(){q&&(X="fill:"+q)},stroke:function(){n(q)?X="stroke-width:"+q:q&&(X="stroke:"+q)}});function le(){r=o,X="",V="",b="",x=m,(Y=m.split(":")).length>1&&(m=Y[Y.length-1],g.has(Y[0])&&(r=g.get(Y[0]))),"-"===m[0]&&(V="-",m=m.slice(1)),Y=m.split("-"),_=Y[0];var e=Y[1];q=void 0===e?"":e;var l,s=Y[2];if(D=void 0===s?"":s,J=Y[(Q=Y.length)-1],K=Y.slice(0,-1).join("-"),P=Y.slice(1).join("-"),!(X=z[m])&&(l=ae[_])?l():_.length<3&&function(){var e;if("px"===q)e=V+"1px";else if("full"===q)e="100%";else if("screen"===q)"w"===_?e="100vw":"h"===_&&(e="100vh");else if(n(q))e=V+.25*Number(q)+"rem";else if(q.indexOf("/")>-1){var t=q.split("/"),r=t[0],o=t[1];n(r)&&n(o)&&(e=V+(Number(r)/Number(o)).toFixed(6)+"%")}else i(q)&&(e=V+q);var a=j[_[0]],l=re[_[1]];e&&a&&(X="x"===_[1]?a+"-right:"+e+";"+a+"-left:"+e:"y"===_[1]?a+"-top:"+e+";"+a+"-bottom:"+e:l?a+"-"+l+":"+e:a+":"+e)}(),X)se(X);else if("container"===m){se("width:100%");var c=a("640px!768px!1024px!1280px");g.values().forEach(function(e,t){r=e,se("max-width:"+c[t])})}else!function(){if(r!==o)for(var e,n=t(document.styleSheets);!(e=n()).done;)for(var i,a=t(e.value.cssRules);!(i=a()).done;){var l=i.value;if(l.type===CSSRule.STYLE_RULE&&l.selectorText.split(",").map(function(e){return e.trim()}).includes("."+m))return m=x.replace(/[.:]/,"\\$&"),void r.insertRule("."+m+l.cssText.slice(l.cssText.indexOf("{")),r.length)}}()}function se(e){m=x.replace(/[.:()%,#]/g,"\\$&")+b,r.insertRule("."+m+"{"+e+"}",r.length)}exports.processClasses=function(e){if(!d.has(e)){d.set(e,!0);for(var r,o=t(e=e.replace(/\s\s+/g," ").split(" "));!(r=o()).done;)p.has(m=r.value)||(le(),p.set(m,!0))}};
//# sourceMappingURL=runcss.js.map