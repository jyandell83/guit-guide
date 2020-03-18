(this["webpackJsonpguit-guide"]=this["webpackJsonpguit-guide"]||[]).push([[0],{13:function(e,n,t){e.exports=t(24)},23:function(e,n,t){},24:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(8),i=t.n(o),c=t(3),l=function(e){var n=e.root,t=e.scale;return r.a.createElement("div",null,r.a.createElement("h1",{className:"margin-top-small primary-header"},"The Guit Guide"),r.a.createElement("h2",{className:"margin-top-small"},n," - ",t))},u=t(1),s=t(2);function f(){var e=Object(u.a)(["\n    display: block;\n"]);return f=function(){return e},e}function d(){var e=Object(u.a)(["\n    text-align: center;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    background-color: #fefefe;\n    margin: 15% auto;\n    padding: 20px;\n    border: 1px solid #888;\n    width: 80%;\n"]);return d=function(){return e},e}function m(){var e=Object(u.a)(["\n    display: block;\n    position: fixed;\n    z-index: 1;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n    background-color: rgb(0,0,0);\n    background-color: rgba(0,0,0,0.4);\n"]);return m=function(){return e},e}var p=s.a.div(m()),b=s.a.div(d()),g=s.a.input(f()),h=function(e){var n=e.closeModal,t=e.setNumberOfStrings,a=e.setNumberOfFrets,o=e.numberOfStrings,i=e.numberOfFrets;return r.a.createElement(p,null,r.a.createElement(b,null,r.a.createElement("h2",null,"Hi, Welcome to the Guit Guide. Fill in some Info about your guitar to get started"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),n()}},r.a.createElement(g,{placeholder:o,type:"number",onChange:function(e){return t(e.target.value)}}),r.a.createElement(g,{placeholder:i,type:"number",onChange:function(e){return a(e.target.value)}}),r.a.createElement("button",{type:"submit"},"Submit"))))};function v(){var e=Object(u.a)(["\n    display: flex;\n    justify-content: space-around;\n"]);return v=function(){return e},e}function E(){var e=Object(u.a)(["\n    display: flex;\n    justify-content: space-around;\n"]);return E=function(){return e},e}function O(){var e=Object(u.a)(["\n    width: 5%;\n    height: 35px;\n    padding: 7px;\n    border: 1px solid black;\n    text-align: center;\n    position: relative;\n"]);return O=function(){return e},e}function j(){var e=Object(u.a)(["\n    display: inline;\n    padding: 5px;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    height: 27px;\n    width: 27px;\n\n"]);return j=function(){return e},e}s.a.div(j()),s.a.div(O());var x=s.a.div(E()),y=s.a.div(v()),S=function(e){var n=e.setScale,t=e.setRoot,a=e.notes,o=e.fretboard,i=e.openNotes,c=e.setOpenNotes;e.scaleNotes,e.root;return r.a.createElement("div",{className:"dashboard"},r.a.createElement("h3",{className:"dashboard__header"},"DASHBOARD"),r.a.createElement(x,null,"ROOT:",r.a.createElement("select",{onChange:function(e){return t(e.target.value)}},r.a.createElement("option",{disabled:!0,selected:!0},"- Change Root -"),a.map((function(e,n){return r.a.createElement("option",{key:n},e)})))),r.a.createElement(x,null,"SCALE:",r.a.createElement("select",{onChange:function(e){return n(e.target.value)}},r.a.createElement("option",{disabled:!0,selected:!0},"- Change Scale -"),r.a.createElement("option",null,"Major"),r.a.createElement("option",null,"Minor"),r.a.createElement("option",null,"Major Pentatonic"),r.a.createElement("option",null,"Minor Pentatonic"))),o.map((function(e,n){return r.a.createElement(y,{key:n},r.a.createElement("span",null,"String ".concat(n+1)),r.a.createElement("select",{onChange:function(e){var t=i.slice();t[n]=e.target.value,c(t)}},r.a.createElement("option",{disabled:!0,selected:!0},"- Change Tuning -"),a.map((function(e,n){return r.a.createElement("option",{key:n},e)}))))})))};function k(){var e=Object(u.a)(["\n    display: flex;\n    justify-content: center;\n"]);return k=function(){return e},e}function w(){var e=Object(u.a)(["\n    width: 5%;\n    height: 35px;\n    padding: 7px;\n    border: 1px solid black;\n    text-align: center;\n    position: relative;\n"]);return w=function(){return e},e}function N(){var e=Object(u.a)(["\n    display: inline;\n    padding: 5px;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    height: 27px;\n    width: 27px;\n\n"]);return N=function(){return e},e}var C=s.a.div(N()),M=s.a.div(w()),A=s.a.div(k()),D=["A","A#","B","C","C#","D","D#","E","F","F#","G","G#"],F=function(){var e=Object(a.useState)(!1),n=Object(c.a)(e,2),t=n[0],o=n[1],i=Object(a.useState)(6),u=Object(c.a)(i,2),s=u[0],f=u[1],d=Object(a.useState)(24),m=Object(c.a)(d,2),p=m[0],b=m[1],g=Object(a.useState)([]),v=Object(c.a)(g,2),E=v[0],O=v[1],j=Object(a.useState)(["E","B","G","D","A","E"]),x=Object(c.a)(j,2),y=x[0],k=x[1],w=Object(a.useState)("C"),N=Object(c.a)(w,2),F=N[0],G=N[1],P=Object(a.useState)("Major"),B=Object(c.a)(P,2),R=B[0],T=B[1],W=Object(a.useState)([]),H=Object(c.a)(W,2),I=H[0],J=H[1];return Object(a.useEffect)((function(){var e=function(e){for(var n=e.slice(e.indexOf(F)).concat(e);n.length>e.length;)n.pop();J("Major Pentatonic"===R?n.filter((function(e,n){return 0===n||2===n||4===n||7===n||9===n})):n.filter((function(e,n){return 0===n||2===n||4===n||5===n||7===n||9===n||11===n})))},n=function(e){for(var n=e.slice(e.indexOf(F)).concat(e);n.length>e.length;)n.pop();J("Minor Pentatonic"===R?n.filter((function(e,n){return 0===n||3===n||5===n||7===n||10===n})):n.filter((function(e,n){return 0===n||2===n||3===n||5===n||7===n||8===n||10===n})))};"Major"===R&&e(D),"Minor"===R&&n(D),"Major Pentatonic"===R&&e(D),"Minor Pentatonic"===R&&n(D),function(e,n){for(var t=[],a=0;a<e;a++){for(var r=y[a],o=D.slice(D.indexOf(r)).concat(D,D);o.length>n;)o.pop();t.push(o)}O(t)}(s,p)}),[p,s,y,F,R]),r.a.createElement("div",null,r.a.createElement(l,{root:F,scale:R}),E.map((function(e,n){return r.a.createElement(A,{key:n},e.map((function(e,n){return r.a.createElement(M,{key:n},r.a.createElement(C,{key:n,className:I.includes(e)?"scale ".concat(e===F?"root":null):e},e))})))})),r.a.createElement("button",{onClick:function(){return f(s+1)}},"Add String"),r.a.createElement("button",{onClick:function(){return f(s-1)}},"Delete String"),r.a.createElement(S,{setScale:T,setRoot:G,notes:D,fretboard:E,openNotes:y,setOpenNotes:k,scaleNotes:I,root:F}),t?r.a.createElement(h,{closeModal:function(){o(!1)},setNumberOfFrets:b,setNumberOfStrings:f,numberOfFrets:p,numberOfStrings:s}):null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(23);i.a.render(r.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[13,1,2]]]);
//# sourceMappingURL=main.e4bbd69d.chunk.js.map