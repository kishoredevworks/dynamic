(this.webpackJsonpmark2=this.webpackJsonpmark2||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),c=a(3),r=a.n(c);a(15);var o=e=>{let{title:t="todolist"}=e;return l.a.createElement("header",null,l.a.createElement("h1",null,t))},i=a(4);var s=e=>{let{item:t,handlecheck:a,handledelete:n}=e;return l.a.createElement("li",{className:"item",key:t.id},l.a.createElement("input",{type:"checkbox",onChange:()=>a(t.id),checked:t.checked})," ",l.a.createElement("label",{onDoubleClick:()=>a(t.id),style:t.checked?{textDecoration:"line-through"}:null}," ",t.item),"  ",l.a.createElement(i.a,{role:"button",onClick:()=>n(t.id),tabIndex:"0","aria-label":"delete "+t.item}))};var m=e=>{let{items:t,handlecheck:a,handledelete:n}=e;return l.a.createElement("ul",null,t.map(e=>l.a.createElement(s,{key:e.id,item:e,handlecheck:a,handledelete:n})))};var d=e=>{let{items:t,handlecheck:a,handledelete:n}=e;return l.a.createElement(l.a.Fragment,null,t.length?l.a.createElement(m,{items:t,handlecheck:a,handledelete:n}):l.a.createElement("p",{className:"an"},"Your List Is Empty"))};var h=e=>{let{lengths:t}=e;const a=(new Date).getFullYear();return l.a.createElement("footer",null,"Copyright \xa9 ",a,"     ",t," List ",1===t?"Item":"Items")},u=(a(16),a(5));var E=e=>{let{newItem:t,setNewItem:a,handleadditem:c}=e;const r=Object(n.useRef)();return l.a.createElement("form",{className:"addForm",onSubmit:c},l.a.createElement("label",{htmlFor:"additem"},"Add Item"),l.a.createElement("input",{type:"text",ref:r,onSubmit:c,autoFocus:!0,id:"additem",placeholder:"Add Item",required:!0,value:t,onChange:e=>a(e.target.value)}),l.a.createElement("button",{type:"submit","aria-label":"Add Item",onClick:()=>r.current.focus()},l.a.createElement(u.a,null)))};var p=e=>{let{search:t,newSearch:a}=e;return l.a.createElement("form",{className:"searchForm",onSubmit:e=>e.preventDefault()},l.a.createElement("label",{htmlFor:"seacrhbar"},"Seacrh"),l.a.createElement("input",{type:"text",role:"searchbox",id:"search",placeholder:"Search Items",value:t,onChange:e=>a(e.target.value)}))};var b=async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;try{if(!(await fetch(e,t)).ok)throw Error("Please Reload The App..")}catch(n){a=n.message}finally{return a}};var f=function(){const e="http://localhost:3500/items",[t,a]=Object(n.useState)([]),[c,r]=Object(n.useState)(""),[i,s]=Object(n.useState)(""),[m,u]=Object(n.useState)(null),[f,g]=Object(n.useState)(!0);return Object(n.useEffect)(()=>{setTimeout(()=>{(async()=>{(async()=>{try{const t=await fetch(e);if(!t.ok)throw new Error("Data Not Recieved..");const n=await t.json();console.log(n),a(n),u(null)}catch(t){u(t.message)}finally{g(!1)}})()})()},2e3)},[]),l.a.createElement("div",{className:"app"},l.a.createElement(o,{title:"Course Lists"}),l.a.createElement(E,{newItem:c,setNewItem:r,handleadditem:n=>{n.preventDefault(),""!==c&&(console.log(c),(async n=>{const l={id:t.length?t[t.length-1].id+1:1,checked:!1,item:n},c=[...t,l];a(c);const r={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)},o=await b(e,r);o&&u(o)})(c),r(""))}}),l.a.createElement(p,{search:i,newSearch:s}),l.a.createElement("main",null,f&&l.a.createElement("p",null," Data Is Loading.. "),m&&l.a.createElement("p",null,"ERROR : "+m),!f&&!m&&l.a.createElement(d,{items:t.filter(e=>e.item.toLowerCase().includes(i.toLowerCase())),handlecheck:async n=>{const l=t.map(e=>e.id===n?{...e,checked:!e.checked}:e);a(l);const c=l.filter(e=>e.id===n),r={method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({checked:c[0].checked})},o=`${e}/${n}`,i=await b(o,r);i&&u(i)},handledelete:async n=>{const l=t.filter(e=>e.id!==n);a(l);const c=`${e}/${n}`,r=await b(c,{method:"DELETE"});r&&u(r)}})),l.a.createElement(h,{lengths:t.length}))};r.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(f,null)))},6:function(e,t,a){e.exports=a(17)}},[[6,1,2]]]);
//# sourceMappingURL=main.b05fe999.chunk.js.map