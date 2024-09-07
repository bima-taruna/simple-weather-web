(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();const Xt=()=>{};let Mt={},ge={},he=null,be={mark:Xt,measure:Xt};try{typeof window<"u"&&(Mt=window),typeof document<"u"&&(ge=document),typeof MutationObserver<"u"&&(he=MutationObserver),typeof performance<"u"&&(be=performance)}catch{}const{userAgent:$t=""}=Mt.navigator||{},L=Mt,p=ge,Bt=he,at=be;L.document;const I=!!p.documentElement&&!!p.head&&typeof p.addEventListener=="function"&&typeof p.createElement=="function",ye=~$t.indexOf("MSIE")||~$t.indexOf("Trident/");var g="classic",ve="duotone",y="sharp",v="sharp-duotone",Ve=[g,ve,y,v],qe={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},Vt={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Ke=["kit"],Ze=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,Je=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Qe={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},tn={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},en={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},nn={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},an={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},rn={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},xe={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},sn=["solid","regular","light","thin","duotone","brands"],Ae=[1,2,3,4,5,6,7,8,9,10],on=Ae.concat([11,12,13,14,15,16,17,18,19,20]),q={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},cn=[...Object.keys(nn),...sn,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",q.GROUP,q.SWAP_OPACITY,q.PRIMARY,q.SECONDARY].concat(Ae.map(t=>"".concat(t,"x"))).concat(on.map(t=>"w-".concat(t))),ln={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},fn={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},un={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},qt={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const N="___FONT_AWESOME___",yt=16,we="fa",ke="svg-inline--fa",Y="data-fa-i2svg",vt="data-fa-pseudo-element",mn="data-fa-pseudo-element-pending",Lt="data-prefix",_t="data-icon",Kt="fontawesome-i2svg",dn="async",pn=["HTML","HEAD","STYLE","SCRIPT"],Ee=(()=>{try{return!0}catch{return!1}})(),Se=[g,y,v];function et(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[g]}})}const Ce={...xe};Ce[g]={...xe[g],...Vt.kit,...Vt["kit-duotone"]};const D=et(Ce),xt={...rn};xt[g]={...xt[g],...qt.kit,...qt["kit-duotone"]};const Q=et(xt),At={...an};At[g]={...At[g],...un.kit};const j=et(At),wt={...en};wt[g]={...wt[g],...fn.kit};const gn=et(wt),hn=Ze,Pe="fa-layers-text",bn=Je,yn={...qe};et(yn);const vn=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],dt=q,$=new Set;Object.keys(Q[g]).map($.add.bind($));Object.keys(Q[y]).map($.add.bind($));Object.keys(Q[v]).map($.add.bind($));const xn=[...Ke,...cn],Z=L.FontAwesomeConfig||{};function An(t){var e=p.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function wn(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}p&&typeof p.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,r]=e;const a=wn(An(n));a!=null&&(Z[r]=a)});const Ne={styleDefault:"solid",familyDefault:"classic",cssPrefix:we,replacementClass:ke,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Z.familyPrefix&&(Z.cssPrefix=Z.familyPrefix);const B={...Ne,...Z};B.autoReplaceSvg||(B.observeMutations=!1);const f={};Object.keys(Ne).forEach(t=>{Object.defineProperty(f,t,{enumerable:!0,set:function(e){B[t]=e,J.forEach(n=>n(f))},get:function(){return B[t]}})});Object.defineProperty(f,"familyPrefix",{enumerable:!0,set:function(t){B.cssPrefix=t,J.forEach(e=>e(f))},get:function(){return B.cssPrefix}});L.FontAwesomeConfig=f;const J=[];function kn(t){return J.push(t),()=>{J.splice(J.indexOf(t),1)}}const T=yt,E={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function En(t){if(!t||!I)return;const e=p.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=p.head.childNodes;let r=null;for(let a=n.length-1;a>-1;a--){const i=n[a],s=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(r=i)}return p.head.insertBefore(e,r),t}const Sn="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function tt(){let t=12,e="";for(;t-- >0;)e+=Sn[Math.random()*62|0];return e}function V(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Ft(t){return t.classList?V(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function Oe(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Cn(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(Oe(t[n]),'" '),"").trim()}function ct(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function zt(t){return t.size!==E.size||t.x!==E.x||t.y!==E.y||t.rotate!==E.rotate||t.flipX||t.flipY}function Pn(t){let{transform:e,containerWidth:n,iconWidth:r}=t;const a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),s="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),o="rotate(".concat(e.rotate," 0 0)"),c={transform:"".concat(i," ").concat(s," ").concat(o)},l={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:c,path:l}}function Nn(t){let{transform:e,width:n=yt,height:r=yt,startCentered:a=!1}=t,i="";return a&&ye?i+="translate(".concat(e.x/T-n/2,"em, ").concat(e.y/T-r/2,"em) "):a?i+="translate(calc(-50% + ".concat(e.x/T,"em), calc(-50% + ").concat(e.y/T,"em)) "):i+="translate(".concat(e.x/T,"em, ").concat(e.y/T,"em) "),i+="scale(".concat(e.size/T*(e.flipX?-1:1),", ").concat(e.size/T*(e.flipY?-1:1),") "),i+="rotate(".concat(e.rotate,"deg) "),i}var On=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Ie(){const t=we,e=ke,n=f.cssPrefix,r=f.replacementClass;let a=On;if(n!==t||r!==e){const i=new RegExp("\\.".concat(t,"\\-"),"g"),s=new RegExp("\\--".concat(t,"\\-"),"g"),o=new RegExp("\\.".concat(e),"g");a=a.replace(i,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(o,".".concat(r))}return a}let Zt=!1;function pt(){f.autoAddCss&&!Zt&&(En(Ie()),Zt=!0)}var In={mixout(){return{dom:{css:Ie,insertCss:pt}}},hooks(){return{beforeDOMElementCreation(){pt()},beforeI2svg(){pt()}}}};const O=L||{};O[N]||(O[N]={});O[N].styles||(O[N].styles={});O[N].hooks||(O[N].hooks={});O[N].shims||(O[N].shims=[]);var S=O[N];const Te=[],Me=function(){p.removeEventListener("DOMContentLoaded",Me),st=1,Te.map(t=>t())};let st=!1;I&&(st=(p.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(p.readyState),st||p.addEventListener("DOMContentLoaded",Me));function Tn(t){I&&(st?setTimeout(t,0):Te.push(t))}function nt(t){const{tag:e,attributes:n={},children:r=[]}=t;return typeof t=="string"?Oe(t):"<".concat(e," ").concat(Cn(n),">").concat(r.map(nt).join(""),"</").concat(e,">")}function Jt(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var gt=function(e,n,r,a){var i=Object.keys(e),s=i.length,o=n,c,l,u;for(r===void 0?(c=1,u=e[i[0]]):(c=0,u=r);c<s;c++)l=i[c],u=o(u,e[l],l,e);return u};function Mn(t){const e=[];let n=0;const r=t.length;for(;n<r;){const a=t.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){const i=t.charCodeAt(n++);(i&64512)==56320?e.push(((a&1023)<<10)+(i&1023)+65536):(e.push(a),n--)}else e.push(a)}return e}function kt(t){const e=Mn(t);return e.length===1?e[0].toString(16):null}function Ln(t,e){const n=t.length;let r=t.charCodeAt(e),a;return r>=55296&&r<=56319&&n>e+1&&(a=t.charCodeAt(e+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Qt(t){return Object.keys(t).reduce((e,n)=>{const r=t[n];return!!r.icon?e[r.iconName]=r.icon:e[n]=r,e},{})}function Et(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,a=Qt(e);typeof S.hooks.addPack=="function"&&!r?S.hooks.addPack(t,Qt(e)):S.styles[t]={...S.styles[t]||{},...a},t==="fas"&&Et("fa",e)}const{styles:R,shims:_n}=S,Fn={[g]:Object.values(j[g]),[y]:Object.values(j[y]),[v]:Object.values(j[v])};let Rt=null,Le={},_e={},Fe={},ze={},Re={};const zn={[g]:Object.keys(D[g]),[y]:Object.keys(D[y]),[v]:Object.keys(D[v])};function Rn(t){return~xn.indexOf(t)}function Dn(t,e){const n=e.split("-"),r=n[0],a=n.slice(1).join("-");return r===t&&a!==""&&!Rn(a)?a:null}const De=()=>{const t=r=>gt(R,(a,i,s)=>(a[s]=gt(i,r,{}),a),{});Le=t((r,a,i)=>(a[3]&&(r[a[3]]=i),a[2]&&a[2].filter(o=>typeof o=="number").forEach(o=>{r[o.toString(16)]=i}),r)),_e=t((r,a,i)=>(r[i]=i,a[2]&&a[2].filter(o=>typeof o=="string").forEach(o=>{r[o]=i}),r)),Re=t((r,a,i)=>{const s=a[2];return r[i]=i,s.forEach(o=>{r[o]=i}),r});const e="far"in R||f.autoFetchSvg,n=gt(_n,(r,a)=>{const i=a[0];let s=a[1];const o=a[2];return s==="far"&&!e&&(s="fas"),typeof i=="string"&&(r.names[i]={prefix:s,iconName:o}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:s,iconName:o}),r},{names:{},unicodes:{}});Fe=n.names,ze=n.unicodes,Rt=lt(f.styleDefault,{family:f.familyDefault})};kn(t=>{Rt=lt(t.styleDefault,{family:f.familyDefault})});De();function Dt(t,e){return(Le[t]||{})[e]}function jn(t,e){return(_e[t]||{})[e]}function M(t,e){return(Re[t]||{})[e]}function je(t){return Fe[t]||{prefix:null,iconName:null}}function Yn(t){const e=ze[t],n=Dt("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function _(){return Rt}const jt=()=>({prefix:null,iconName:null,rest:[]});function lt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=g}=e,r=D[n][t],a=Q[n][t]||Q[n][r],i=t in S.styles?t:null;return a||i||null}const Un={[g]:Object.keys(j[g]),[y]:Object.keys(j[y]),[v]:Object.keys(j[v])};function ft(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e,r={[g]:"".concat(f.cssPrefix,"-").concat(g),[y]:"".concat(f.cssPrefix,"-").concat(y),[v]:"".concat(f.cssPrefix,"-").concat(v)};let a=null,i=g;const s=Ve.filter(c=>c!==ve);s.forEach(c=>{(t.includes(r[c])||t.some(l=>Un[c].includes(l)))&&(i=c)});const o=t.reduce((c,l)=>{const u=Dn(f.cssPrefix,l);if(R[l]?(l=Fn[i].includes(l)?gn[i][l]:l,a=l,c.prefix=l):zn[i].indexOf(l)>-1?(a=l,c.prefix=lt(l,{family:i})):u?c.iconName=u:l!==f.replacementClass&&!s.some(d=>l===r[d])&&c.rest.push(l),!n&&c.prefix&&c.iconName){const d=a==="fa"?je(c.iconName):{},m=M(c.prefix,c.iconName);d.prefix&&(a=null),c.iconName=d.iconName||m||c.iconName,c.prefix=d.prefix||c.prefix,c.prefix==="far"&&!R.far&&R.fas&&!f.autoFetchSvg&&(c.prefix="fas")}return c},jt());return(t.includes("fa-brands")||t.includes("fab"))&&(o.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(o.prefix="fad"),!o.prefix&&i===y&&(R.fass||f.autoFetchSvg)&&(o.prefix="fass",o.iconName=M(o.prefix,o.iconName)||o.iconName),!o.prefix&&i===v&&(R.fasds||f.autoFetchSvg)&&(o.prefix="fasds",o.iconName=M(o.prefix,o.iconName)||o.iconName),(o.prefix==="fa"||a==="fa")&&(o.prefix=_()||"fas"),o}class Wn{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];const a=n.reduce(this._pullDefinitions,{});Object.keys(a).forEach(i=>{this.definitions[i]={...this.definitions[i]||{},...a[i]},Et(i,a[i]);const s=j[g][i];s&&Et(s,a[i]),De()})}reset(){this.definitions={}}_pullDefinitions(e,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(a=>{const{prefix:i,iconName:s,icon:o}=r[a],c=o[2];e[i]||(e[i]={}),c.length>0&&c.forEach(l=>{typeof l=="string"&&(e[i][l]=o)}),e[i][s]=o}),e}}let te=[],G={};const X={},Hn=Object.keys(X);function Gn(t,e){let{mixoutsTo:n}=e;return te=t,G={},Object.keys(X).forEach(r=>{Hn.indexOf(r)===-1&&delete X[r]}),te.forEach(r=>{const a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(i=>{typeof a[i]=="function"&&(n[i]=a[i]),typeof a[i]=="object"&&Object.keys(a[i]).forEach(s=>{n[i]||(n[i]={}),n[i][s]=a[i][s]})}),r.hooks){const i=r.hooks();Object.keys(i).forEach(s=>{G[s]||(G[s]=[]),G[s].push(i[s])})}r.provides&&r.provides(X)}),n}function St(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];return(G[t]||[]).forEach(s=>{e=s.apply(null,[e,...r])}),e}function U(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];(G[t]||[]).forEach(i=>{i.apply(null,n)})}function F(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return X[t]?X[t].apply(null,e):void 0}function Ct(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||_();if(e)return e=M(n,e)||e,Jt(Ye.definitions,n,e)||Jt(S.styles,n,e)}const Ye=new Wn,Xn=()=>{f.autoReplaceSvg=!1,f.observeMutations=!1,U("noAuto")},$n={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return I?(U("beforeI2svg",t),F("pseudoElements2svg",t),F("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;f.autoReplaceSvg===!1&&(f.autoReplaceSvg=!0),f.observeMutations=!0,Tn(()=>{Vn({autoReplaceSvgRoot:e}),U("watch",t)})}},Bn={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:M(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=lt(t[0]);return{prefix:n,iconName:M(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(f.cssPrefix,"-"))>-1||t.match(hn))){const e=ft(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||_(),iconName:M(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=_();return{prefix:e,iconName:M(e,t)||t}}}},x={noAuto:Xn,config:f,dom:$n,parse:Bn,library:Ye,findIconDefinition:Ct,toHtml:nt},Vn=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=p}=t;(Object.keys(S.styles).length>0||f.autoFetchSvg)&&I&&f.autoReplaceSvg&&x.dom.i2svg({node:e})};function ut(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>nt(n))}}),Object.defineProperty(t,"node",{get:function(){if(!I)return;const n=p.createElement("div");return n.innerHTML=t.html,n.children}}),t}function qn(t){let{children:e,main:n,mask:r,attributes:a,styles:i,transform:s}=t;if(zt(s)&&n.found&&!r.found){const{width:o,height:c}=n,l={x:o/c/2,y:.5};a.style=ct({...i,"transform-origin":"".concat(l.x+s.x/16,"em ").concat(l.y+s.y/16,"em")})}return[{tag:"svg",attributes:a,children:e}]}function Kn(t){let{prefix:e,iconName:n,children:r,attributes:a,symbol:i}=t;const s=i===!0?"".concat(e,"-").concat(f.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...a,id:s},children:r}]}]}function Yt(t){const{icons:{main:e,mask:n},prefix:r,iconName:a,transform:i,symbol:s,title:o,maskId:c,titleId:l,extra:u,watchable:d=!1}=t,{width:m,height:h}=n.found?n:e,k=r==="fak",z=[f.replacementClass,a?"".concat(f.cssPrefix,"-").concat(a):""].filter(H=>u.classes.indexOf(H)===-1).filter(H=>H!==""||!!H).concat(u.classes).join(" ");let A={children:[],attributes:{...u.attributes,"data-prefix":r,"data-icon":a,class:z,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(h)}};const P=k&&!~u.classes.indexOf("fa-fw")?{width:"".concat(m/h*16*.0625,"em")}:{};d&&(A.attributes[Y]=""),o&&(A.children.push({tag:"title",attributes:{id:A.attributes["aria-labelledby"]||"title-".concat(l||tt())},children:[o]}),delete A.attributes.title);const b={...A,prefix:r,iconName:a,main:e,mask:n,maskId:c,transform:i,symbol:s,styles:{...P,...u.styles}},{children:w,attributes:W}=n.found&&e.found?F("generateAbstractMask",b)||{children:[],attributes:{}}:F("generateAbstractIcon",b)||{children:[],attributes:{}};return b.children=w,b.attributes=W,s?Kn(b):qn(b)}function ee(t){const{content:e,width:n,height:r,transform:a,title:i,extra:s,watchable:o=!1}=t,c={...s.attributes,...i?{title:i}:{},class:s.classes.join(" ")};o&&(c[Y]="");const l={...s.styles};zt(a)&&(l.transform=Nn({transform:a,startCentered:!0,width:n,height:r}),l["-webkit-transform"]=l.transform);const u=ct(l);u.length>0&&(c.style=u);const d=[];return d.push({tag:"span",attributes:c,children:[e]}),i&&d.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),d}function Zn(t){const{content:e,title:n,extra:r}=t,a={...r.attributes,...n?{title:n}:{},class:r.classes.join(" ")},i=ct(r.styles);i.length>0&&(a.style=i);const s=[];return s.push({tag:"span",attributes:a,children:[e]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}const{styles:ht}=S;function Pt(t){const e=t[0],n=t[1],[r]=t.slice(4);let a=null;return Array.isArray(r)?a={tag:"g",attributes:{class:"".concat(f.cssPrefix,"-").concat(dt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(f.cssPrefix,"-").concat(dt.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(f.cssPrefix,"-").concat(dt.PRIMARY),fill:"currentColor",d:r[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:n,icon:a}}const Jn={found:!1,width:512,height:512};function Qn(t,e){!Ee&&!f.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Nt(t,e){let n=e;return e==="fa"&&f.styleDefault!==null&&(e=_()),new Promise((r,a)=>{if(n==="fa"){const i=je(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&ht[e]&&ht[e][t]){const i=ht[e][t];return r(Pt(i))}Qn(t,e),r({...Jn,icon:f.showMissingIcons&&t?F("missingIconAbstract")||{}:{}})})}const ne=()=>{},Ot=f.measurePerformance&&at&&at.mark&&at.measure?at:{mark:ne,measure:ne},K='FA "6.6.0"',ta=t=>(Ot.mark("".concat(K," ").concat(t," begins")),()=>Ue(t)),Ue=t=>{Ot.mark("".concat(K," ").concat(t," ends")),Ot.measure("".concat(K," ").concat(t),"".concat(K," ").concat(t," begins"),"".concat(K," ").concat(t," ends"))};var Ut={begin:ta,end:Ue};const rt=()=>{};function ae(t){return typeof(t.getAttribute?t.getAttribute(Y):null)=="string"}function ea(t){const e=t.getAttribute?t.getAttribute(Lt):null,n=t.getAttribute?t.getAttribute(_t):null;return e&&n}function na(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(f.replacementClass)}function aa(){return f.autoReplaceSvg===!0?it.replace:it[f.autoReplaceSvg]||it.replace}function ra(t){return p.createElementNS("http://www.w3.org/2000/svg",t)}function ia(t){return p.createElement(t)}function We(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?ra:ia}=e;if(typeof t=="string")return p.createTextNode(t);const r=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(i){r.setAttribute(i,t.attributes[i])}),(t.children||[]).forEach(function(i){r.appendChild(We(i,{ceFn:n}))}),r}function sa(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const it={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(We(n),e)}),e.getAttribute(Y)===null&&f.keepOriginalSource){let n=p.createComment(sa(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~Ft(e).indexOf(f.replacementClass))return it.replace(t);const r=new RegExp("".concat(f.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const i=n[0].attributes.class.split(" ").reduce((s,o)=>(o===f.replacementClass||o.match(r)?s.toSvg.push(o):s.toNode.push(o),s),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}const a=n.map(i=>nt(i)).join(`
`);e.setAttribute(Y,""),e.innerHTML=a}};function re(t){t()}function He(t,e){const n=typeof e=="function"?e:rt;if(t.length===0)n();else{let r=re;f.mutateApproach===dn&&(r=L.requestAnimationFrame||re),r(()=>{const a=aa(),i=Ut.begin("mutate");t.map(a),i(),n()})}}let Wt=!1;function Ge(){Wt=!0}function It(){Wt=!1}let ot=null;function ie(t){if(!Bt||!f.observeMutations)return;const{treeCallback:e=rt,nodeCallback:n=rt,pseudoElementsCallback:r=rt,observeMutationsRoot:a=p}=t;ot=new Bt(i=>{if(Wt)return;const s=_();V(i).forEach(o=>{if(o.type==="childList"&&o.addedNodes.length>0&&!ae(o.addedNodes[0])&&(f.searchPseudoElements&&r(o.target),e(o.target)),o.type==="attributes"&&o.target.parentNode&&f.searchPseudoElements&&r(o.target.parentNode),o.type==="attributes"&&ae(o.target)&&~vn.indexOf(o.attributeName))if(o.attributeName==="class"&&ea(o.target)){const{prefix:c,iconName:l}=ft(Ft(o.target));o.target.setAttribute(Lt,c||s),l&&o.target.setAttribute(_t,l)}else na(o.target)&&n(o.target)})}),I&&ot.observe(a,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function oa(){ot&&ot.disconnect()}function ca(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((r,a)=>{const i=a.split(":"),s=i[0],o=i.slice(1);return s&&o.length>0&&(r[s]=o.join(":").trim()),r},{})),n}function la(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"";let a=ft(Ft(t));return a.prefix||(a.prefix=_()),e&&n&&(a.prefix=e,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=jn(a.prefix,t.innerText)||Dt(a.prefix,kt(t.innerText))),!a.iconName&&f.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=t.firstChild.data)),a}function fa(t){const e=V(t.attributes).reduce((a,i)=>(a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a),{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return f.autoA11y&&(n?e["aria-labelledby"]="".concat(f.replacementClass,"-title-").concat(r||tt()):(e["aria-hidden"]="true",e.focusable="false")),e}function ua(){return{iconName:null,title:null,titleId:null,prefix:null,transform:E,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function se(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:a}=la(t),i=fa(t),s=St("parseNodeAttributes",{},t);let o=e.styleParser?ca(t):[];return{iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:E,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:o,attributes:i},...s}}const{styles:ma}=S;function Xe(t){const e=f.autoReplaceSvg==="nest"?se(t,{styleParser:!1}):se(t);return~e.extra.classes.indexOf(Pe)?F("generateLayersText",t,e):F("generateSvgReplacementMutation",t,e)}let C=new Set;Se.map(t=>{C.add("fa-".concat(t))});Object.keys(D[g]).map(C.add.bind(C));Object.keys(D[y]).map(C.add.bind(C));Object.keys(D[v]).map(C.add.bind(C));C=[...C];function oe(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!I)return Promise.resolve();const n=p.documentElement.classList,r=u=>n.add("".concat(Kt,"-").concat(u)),a=u=>n.remove("".concat(Kt,"-").concat(u)),i=f.autoFetchSvg?C:Se.map(u=>"fa-".concat(u)).concat(Object.keys(ma));i.includes("fa")||i.push("fa");const s=[".".concat(Pe,":not([").concat(Y,"])")].concat(i.map(u=>".".concat(u,":not([").concat(Y,"])"))).join(", ");if(s.length===0)return Promise.resolve();let o=[];try{o=V(t.querySelectorAll(s))}catch{}if(o.length>0)r("pending"),a("complete");else return Promise.resolve();const c=Ut.begin("onTree"),l=o.reduce((u,d)=>{try{const m=Xe(d);m&&u.push(m)}catch(m){Ee||m.name==="MissingIcon"&&console.error(m)}return u},[]);return new Promise((u,d)=>{Promise.all(l).then(m=>{He(m,()=>{r("active"),r("complete"),a("pending"),typeof e=="function"&&e(),c(),u()})}).catch(m=>{c(),d(m)})})}function da(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Xe(t).then(n=>{n&&He([n],e)})}function pa(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(e||{}).icon?e:Ct(e||{});let{mask:a}=n;return a&&(a=(a||{}).icon?a:Ct(a||{})),t(r,{...n,mask:a})}}const ga=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=E,symbol:r=!1,mask:a=null,maskId:i=null,title:s=null,titleId:o=null,classes:c=[],attributes:l={},styles:u={}}=e;if(!t)return;const{prefix:d,iconName:m,icon:h}=t;return ut({type:"icon",...t},()=>(U("beforeDOMElementCreation",{iconDefinition:t,params:e}),f.autoA11y&&(s?l["aria-labelledby"]="".concat(f.replacementClass,"-title-").concat(o||tt()):(l["aria-hidden"]="true",l.focusable="false")),Yt({icons:{main:Pt(h),mask:a?Pt(a.icon):{found:!1,width:null,height:null,icon:{}}},prefix:d,iconName:m,transform:{...E,...n},symbol:r,title:s,maskId:i,titleId:o,extra:{attributes:l,styles:u,classes:c}})))};var ha={mixout(){return{icon:pa(ga)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=oe,t.nodeCallback=da,t}}},provides(t){t.i2svg=function(e){const{node:n=p,callback:r=()=>{}}=e;return oe(n,r)},t.generateSvgReplacementMutation=function(e,n){const{iconName:r,title:a,titleId:i,prefix:s,transform:o,symbol:c,mask:l,maskId:u,extra:d}=n;return new Promise((m,h)=>{Promise.all([Nt(r,s),l.iconName?Nt(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(k=>{let[z,A]=k;m([e,Yt({icons:{main:z,mask:A},prefix:s,iconName:r,transform:o,symbol:c,maskId:u,title:a,titleId:i,extra:d,watchable:!0})])}).catch(h)})},t.generateAbstractIcon=function(e){let{children:n,attributes:r,main:a,transform:i,styles:s}=e;const o=ct(s);o.length>0&&(r.style=o);let c;return zt(i)&&(c=F("generateAbstractTransformGrouping",{main:a,transform:i,containerWidth:a.width,iconWidth:a.width})),n.push(c||a.icon),{children:n,attributes:r}}}},ba={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return ut({type:"layer"},()=>{U("beforeDOMElementCreation",{assembler:t,params:e});let r=[];return t(a=>{Array.isArray(a)?a.map(i=>{r=r.concat(i.abstract)}):r=r.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(f.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},ya={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:a={},styles:i={}}=e;return ut({type:"counter",content:t},()=>(U("beforeDOMElementCreation",{content:t,params:e}),Zn({content:t.toString(),title:n,extra:{attributes:a,styles:i,classes:["".concat(f.cssPrefix,"-layers-counter"),...r]}})))}}}},va={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=E,title:r=null,classes:a=[],attributes:i={},styles:s={}}=e;return ut({type:"text",content:t},()=>(U("beforeDOMElementCreation",{content:t,params:e}),ee({content:t,transform:{...E,...n},title:r,extra:{attributes:i,styles:s,classes:["".concat(f.cssPrefix,"-layers-text"),...a]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:r,transform:a,extra:i}=n;let s=null,o=null;if(ye){const c=parseInt(getComputedStyle(e).fontSize,10),l=e.getBoundingClientRect();s=l.width/c,o=l.height/c}return f.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,ee({content:e.innerHTML,width:s,height:o,transform:a,title:r,extra:i,watchable:!0})])}}};const xa=new RegExp('"',"ug"),ce=[1105920,1112319],le={FontAwesome:{normal:"fas",400:"fas"},...tn,...Qe,...ln},Tt=Object.keys(le).reduce((t,e)=>(t[e.toLowerCase()]=le[e],t),{}),Aa=Object.keys(Tt).reduce((t,e)=>{const n=Tt[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function wa(t){const e=t.replace(xa,""),n=Ln(e,0),r=n>=ce[0]&&n<=ce[1],a=e.length===2?e[0]===e[1]:!1;return{value:kt(a?e[0]:e),isSecondary:r||a}}function ka(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),a=isNaN(r)?"normal":r;return(Tt[n]||{})[a]||Aa[n]}function fe(t,e){const n="".concat(mn).concat(e.replace(":","-"));return new Promise((r,a)=>{if(t.getAttribute(n)!==null)return r();const s=V(t.children).filter(m=>m.getAttribute(vt)===e)[0],o=L.getComputedStyle(t,e),c=o.getPropertyValue("font-family"),l=c.match(bn),u=o.getPropertyValue("font-weight"),d=o.getPropertyValue("content");if(s&&!l)return t.removeChild(s),r();if(l&&d!=="none"&&d!==""){const m=o.getPropertyValue("content");let h=ka(c,u);const{value:k,isSecondary:z}=wa(m),A=l[0].startsWith("FontAwesome");let P=Dt(h,k),b=P;if(A){const w=Yn(k);w.iconName&&w.prefix&&(P=w.iconName,h=w.prefix)}if(P&&!z&&(!s||s.getAttribute(Lt)!==h||s.getAttribute(_t)!==b)){t.setAttribute(n,b),s&&t.removeChild(s);const w=ua(),{extra:W}=w;W.attributes[vt]=e,Nt(P,h).then(H=>{const $e=Yt({...w,icons:{main:H,mask:jt()},prefix:h,iconName:b,extra:W,watchable:!0}),mt=p.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(mt,t.firstChild):t.appendChild(mt),mt.outerHTML=$e.map(Be=>nt(Be)).join(`
`),t.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Ea(t){return Promise.all([fe(t,"::before"),fe(t,"::after")])}function Sa(t){return t.parentNode!==document.head&&!~pn.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(vt)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function ue(t){if(I)return new Promise((e,n)=>{const r=V(t.querySelectorAll("*")).filter(Sa).map(Ea),a=Ut.begin("searchPseudoElements");Ge(),Promise.all(r).then(()=>{a(),It(),e()}).catch(()=>{a(),It(),n()})})}var Ca={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=ue,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=p}=e;f.searchPseudoElements&&ue(n)}}};let me=!1;var Pa={mixout(){return{dom:{unwatch(){Ge(),me=!0}}}},hooks(){return{bootstrap(){ie(St("mutationObserverCallbacks",{}))},noAuto(){oa()},watch(t){const{observeMutationsRoot:e}=t;me?It():ie(St("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const de=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,r)=>{const a=r.toLowerCase().split("-"),i=a[0];let s=a.slice(1).join("-");if(i&&s==="h")return n.flipX=!0,n;if(i&&s==="v")return n.flipY=!0,n;if(s=parseFloat(s),isNaN(s))return n;switch(i){case"grow":n.size=n.size+s;break;case"shrink":n.size=n.size-s;break;case"left":n.x=n.x-s;break;case"right":n.x=n.x+s;break;case"up":n.y=n.y-s;break;case"down":n.y=n.y+s;break;case"rotate":n.rotate=n.rotate+s;break}return n},e)};var Na={mixout(){return{parse:{transform:t=>de(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=de(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:r,containerWidth:a,iconWidth:i}=e;const s={transform:"translate(".concat(a/2," 256)")},o="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),l="rotate(".concat(r.rotate," 0 0)"),u={transform:"".concat(o," ").concat(c," ").concat(l)},d={transform:"translate(".concat(i/2*-1," -256)")},m={outer:s,inner:u,path:d};return{tag:"g",attributes:{...m.outer},children:[{tag:"g",attributes:{...m.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...m.path}}]}]}}}};const bt={x:0,y:0,width:"100%",height:"100%"};function pe(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Oa(t){return t.tag==="g"?t.children:[t]}var Ia={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),r=n?ft(n.split(" ").map(a=>a.trim())):jt();return r.prefix||(r.prefix=_()),t.mask=r,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:r,main:a,mask:i,maskId:s,transform:o}=e;const{width:c,icon:l}=a,{width:u,icon:d}=i,m=Pn({transform:o,containerWidth:u,iconWidth:c}),h={tag:"rect",attributes:{...bt,fill:"white"}},k=l.children?{children:l.children.map(pe)}:{},z={tag:"g",attributes:{...m.inner},children:[pe({tag:l.tag,attributes:{...l.attributes,...m.path},...k})]},A={tag:"g",attributes:{...m.outer},children:[z]},P="mask-".concat(s||tt()),b="clip-".concat(s||tt()),w={tag:"mask",attributes:{...bt,id:P,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[h,A]},W={tag:"defs",children:[{tag:"clipPath",attributes:{id:b},children:Oa(d)},w]};return n.push(W,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(b,")"),mask:"url(#".concat(P,")"),...bt}}),{children:n,attributes:r}}}},Ta={provides(t){let e=!1;L.matchMedia&&(e=L.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...r,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const i={...a,attributeName:"opacity"},s={tag:"circle",attributes:{...r,cx:"256",cy:"364",r:"28"},children:[]};return e||s.children.push({tag:"animate",attributes:{...a,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...i,values:"1;0;1;1;0;1;"}}),n.push(s),n.push({tag:"path",attributes:{...r,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:e?[]:[{tag:"animate",attributes:{...i,values:"1;0;0;0;0;1;"}}]}),e||n.push({tag:"path",attributes:{...r,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...i,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Ma={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return t.symbol=r,t}}}},La=[In,ha,ba,ya,va,Ca,Pa,Na,Ia,Ta,Ma];Gn(La,{mixoutsTo:x});x.noAuto;x.config;const Ht=x.library;x.dom;x.parse;x.findIconDefinition;x.toHtml;const Gt=x.icon;x.layer;x.text;x.counter;const _a={prefix:"fas",iconName:"droplet",icon:[384,512,[128167,"tint"],"f043","M192 512C86 512 0 426 0 320C0 228.8 130.2 57.7 166.6 11.7C172.6 4.2 181.5 0 191.1 0l1.8 0c9.6 0 18.5 4.2 24.5 11.7C253.8 57.7 384 228.8 384 320c0 106-86 192-192 192zM96 336c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 61.9 50.1 112 112 112c8.8 0 16-7.2 16-16s-7.2-16-16-16c-44.2 0-80-35.8-80-80z"]},Fa={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},za={prefix:"fas",iconName:"wind",icon:[512,512,[],"f72e","M288 32c0 17.7 14.3 32 32 32l32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128c-17.7 0-32 14.3-32 32s14.3 32 32 32l320 0c53 0 96-43 96-96s-43-96-96-96L320 0c-17.7 0-32 14.3-32 32zm64 352c0 17.7 14.3 32 32 32l32 0c53 0 96-43 96-96s-43-96-96-96L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0c-17.7 0-32 14.3-32 32zM128 512l32 0c53 0 96-43 96-96s-43-96-96-96L32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32l128 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0c-17.7 0-32 14.3-32 32s14.3 32 32 32z"]};Ht.add(Fa);Ht.add(_a);Ht.add(za);const Ra=Gt({prefix:"fas",iconName:"magnifying-glass"}).html,Da=Gt({prefix:"fas",iconName:"droplet"}).html,ja=Gt({prefix:"fas",iconName:"wind"}).html;function Ya(){const t=document.createElement("img"),e=document.createElement("section"),n=document.createElement("desc"),r=document.createElement("span"),a=document.createElement("span");r.innerHTML=Da,a.innerHTML=ja,e.classList.add("stat-panel"),n.classList.add("desc-stat");function i({address:s,description:o,condition:c,icon:l,temp:u,humidity:d,windSpeed:m}){t.src=`./assets/icon/${l}.png`,n.textContent=`${o}`,e.innerHTML=`
        <div class="temp-stat">${u}°C</div>
        <div class="cond-stat">${c}</div>
        <div class="address-stat">${s}</div>
        <div class="other-stat">
            <div class="humid-stat">
            ${d}%</div>
            <div class="wind-stat">${m} Km/h</div>
        </div>

    `;const h=e.querySelector(".humid-stat"),k=e.querySelector(".wind-stat");h.prepend(r),k.prepend(a)}return{render:i,statPanel:e,iconPanel:t,descriptionPanel:n}}(function(){const t=document.querySelector(".location-form"),e=document.getElementById("weather-location"),n=document.querySelector("button"),r=document.querySelector(".weather-stat"),a=document.createElement("div");a.textContent="loading...",a.style.display="none",r.appendChild(a),n.innerHTML=Ra,t.addEventListener("submit",c=>{c.preventDefault(),r.classList.add("show"),i(e.value).then(l=>{const u=s(l);o(u)})});async function i(c){a.style.display="block";try{const l=await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${c}/next3days?unitGroup=metric&key=J93SG72HP68ZUNZCYC2U3D7ZG`,{mode:"cors"});return l.ok?(a.style.display="none",await l.json()):(a.style.display="none","Promise resolved with HTTP status failed")}catch(l){return a.style.display="none",l}}function s(c){return{address:c.resolvedAddress,description:c.description,condition:c.currentConditions.conditions,icon:c.currentConditions.icon,temp:c.currentConditions.temp,humidity:c.currentConditions.humidity,windSpeed:c.currentConditions.windspeed}}function o(c){const l=Ya();for(l.render({address:c.address,description:c.description,condition:c.condition,icon:c.icon,temp:c.temp,humidity:c.humidity,windSpeed:c.windSpeed});r.children.length>0;)r.textContent="";r.appendChild(l.descriptionPanel),r.appendChild(l.iconPanel),r.appendChild(l.statPanel)}})();
