(()=>{"use strict";var e,n,t,i,r=-1,a=function(e){addEventListener("pageshow",(function(n){n.persisted&&(r=n.timeStamp,e(n))}),!0)},o=function(){return window.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0]},c=function(){var e=o();return e&&e.activationStart||0},u=function(e,n){var t=o(),i="navigate";return r>=0?i="back-forward-cache":t&&(document.prerendering||c()>0?i="prerender":document.wasDiscarded?i="restore":t.type&&(i=t.type.replace(/_/g,"-"))),{name:e,value:void 0===n?-1:n,rating:"good",delta:0,entries:[],id:"v3-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12),navigationType:i}},s=function(e,n,t){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){var i=new PerformanceObserver((function(e){Promise.resolve().then((function(){n(e.getEntries())}))}));return i.observe(Object.assign({type:e,buffered:!0},t||{})),i}}catch(e){}},d=function(e,n,t,i){var r,a;return function(o){n.value>=0&&(o||i)&&((a=n.value-(r||0))||void 0===r)&&(r=n.value,n.delta=a,n.rating=function(e,n){return e>n[1]?"poor":e>n[0]?"needs-improvement":"good"}(n.value,t),e(n))}},f=function(e){requestAnimationFrame((function(){return requestAnimationFrame((function(){return e()}))}))},l=function(e){var n=function(n){"pagehide"!==n.type&&"hidden"!==document.visibilityState||e(n)};addEventListener("visibilitychange",n,!0),addEventListener("pagehide",n,!0)},p=function(e){var n=!1;return function(t){n||(e(t),n=!0)}},v=-1,m=function(){return"hidden"!==document.visibilityState||document.prerendering?1/0:0},g=function(e){"hidden"===document.visibilityState&&v>-1&&(v="visibilitychange"===e.type?e.timeStamp:0,y())},h=function(){addEventListener("visibilitychange",g,!0),addEventListener("prerenderingchange",g,!0)},y=function(){removeEventListener("visibilitychange",g,!0),removeEventListener("prerenderingchange",g,!0)},E=function(){return v<0&&(v=m(),h(),a((function(){setTimeout((function(){v=m(),h()}),0)}))),{get firstHiddenTime(){return v}}},L=function(e){document.prerendering?addEventListener("prerenderingchange",(function(){return e()}),!0):e()},b=[1800,3e3],T=[.1,.25],w={passive:!0,capture:!0},S=new Date,k=function(i,r){e||(e=r,n=i,t=new Date,P(removeEventListener),C())},C=function(){if(n>=0&&n<t-S){var r={entryType:"first-input",name:e.type,target:e.target,cancelable:e.cancelable,startTime:e.timeStamp,processingStart:e.timeStamp+n};i.forEach((function(e){e(r)})),i=[]}},A=function(e){if(e.cancelable){var n=(e.timeStamp>1e12?new Date:performance.now())-e.timeStamp;"pointerdown"==e.type?function(e,n){var t=function(){k(e,n),r()},i=function(){r()},r=function(){removeEventListener("pointerup",t,w),removeEventListener("pointercancel",i,w)};addEventListener("pointerup",t,w),addEventListener("pointercancel",i,w)}(n,e):k(n,e)}},P=function(e){["mousedown","keydown","touchstart","pointerdown"].forEach((function(n){return e(n,A,w)}))},D=[100,300],R=[2500,4e3],F={};function I(){dataLayer.push(arguments)}function M({name:e,delta:n,id:t}){I("event",e,{event_category:"Web Vitals",event_label:t,value:Math.round("CLS"===e?1e3*n:n),non_interaction:!0})}window.dataLayer=window.dataLayer||[],I("js",new Date),I("config","G-M8H4YB694S"),function(e,n){n=n||{},function(e,n){n=n||{},L((function(){var t,i=E(),r=u("FCP"),o=s("paint",(function(e){e.forEach((function(e){"first-contentful-paint"===e.name&&(o.disconnect(),e.startTime<i.firstHiddenTime&&(r.value=Math.max(e.startTime-c(),0),r.entries.push(e),t(!0)))}))}));o&&(t=d(e,r,b,n.reportAllChanges),a((function(i){r=u("FCP"),t=d(e,r,b,n.reportAllChanges),f((function(){r.value=performance.now()-i.timeStamp,t(!0)}))})))}))}(p((function(){var t,i=u("CLS",0),r=0,o=[],c=function(e){e.forEach((function(e){if(!e.hadRecentInput){var n=o[0],t=o[o.length-1];r&&e.startTime-t.startTime<1e3&&e.startTime-n.startTime<5e3?(r+=e.value,o.push(e)):(r=e.value,o=[e])}})),r>i.value&&(i.value=r,i.entries=o,t())},p=s("layout-shift",c);p&&(t=d(e,i,T,n.reportAllChanges),l((function(){c(p.takeRecords()),t(!0)})),a((function(){r=0,i=u("CLS",0),t=d(e,i,T,n.reportAllChanges),f((function(){return t()}))})),setTimeout(t,0))})))}(M),function(t,r){r=r||{},L((function(){var o,c=E(),f=u("FID"),v=function(e){e.startTime<c.firstHiddenTime&&(f.value=e.processingStart-e.startTime,f.entries.push(e),o(!0))},m=function(e){e.forEach(v)},g=s("first-input",m);o=d(t,f,D,r.reportAllChanges),g&&l(p((function(){m(g.takeRecords()),g.disconnect()}))),g&&a((function(){var a;f=u("FID"),o=d(t,f,D,r.reportAllChanges),i=[],n=-1,e=null,P(addEventListener),a=v,i.push(a),C()}))}))}(M),function(e,n){n=n||{},L((function(){var t,i=E(),r=u("LCP"),o=function(e){var n=e[e.length-1];n&&n.startTime<i.firstHiddenTime&&(r.value=Math.max(n.startTime-c(),0),r.entries=[n],t())},v=s("largest-contentful-paint",o);if(v){t=d(e,r,R,n.reportAllChanges);var m=p((function(){F[r.id]||(o(v.takeRecords()),v.disconnect(),F[r.id]=!0,t(!0))}));["keydown","click"].forEach((function(e){addEventListener(e,(function(){return setTimeout(m,0)}),!0)})),l(m),a((function(i){r=u("LCP"),t=d(e,r,R,n.reportAllChanges),f((function(){r.value=performance.now()-i.timeStamp,F[r.id]=!0,t(!0)}))}))}}))}(M);const H=e=>document.querySelector(e),N=H("#button-calculate"),B=H("#final-price"),_=H("#final-price-container"),q=new Intl.NumberFormat("es-AR",{style:"currency",currency:"ARS"}),x=10,O=312;function j(){const e=H("#token-price").value,n=H("#distance").value,t=H("#roundtrip").checked,i=!e||!n,r=Number(e)<0||Number(n)<0;if(i||r)return;const a=function(e){let{distance:n,tokenPrice:t,isRoundtrip:i=!1}=e;const r=O+x*n*t;return i?2*r:r}({distance:Number(n),tokenPrice:Number(e),isRoundtrip:Boolean(t)});var o;_.classList.contains("hidden")&&_.classList.remove("hidden"),o=e,localStorage.getItem("token-price")!==o&&localStorage.setItem("token-price",o),B.innerText=q.format(a)}H("#token-price").value=localStorage.getItem("token-price")??"",N.addEventListener("click",j),globalThis.addEventListener("keyup",(e=>{"Enter"===e.key&&j()}))})();