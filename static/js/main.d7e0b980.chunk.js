(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{32:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),r=n.n(a),s=n(9),i=n.n(s),o=n(2),l=(n(32),n(11)),u=n.n(l),b=n(40),j=n(4),d=n.n(j),m=n(7),p=n(19),h=n(3),O=n(6),f=n(17),v=n(18),x="https://mate-api.herokuapp.com",y=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2?arguments[2]:void 0;return fetch("".concat(x,"/").concat(e,"/").concat(t),n).then((function(e){return e.json()})).then((function(e){return e.data}))},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return y("users".concat(e))},g="SET_ALL_USER",U="SET_NUMBER_PAGE",w="ADD_USER",E="DELETE_USERS",S="EDIT_USER",k="IS_EDIT_CELL",C=function(e){return{type:w,user:e}},F=function(e){return{type:g,allUsers:e}},I=function(e){return{type:k,bool:e}},D={allUsers:[],visibleUsers:5,page:1,fromUser:1,toUser:5,isEditCell:null},T=function(e){return e.allUsers},_=function(e){return e.visibleUsers},P=function(e){return e.page},A=function(e){return e.fromUser},B=function(e){return e.toUser},L=function(e){return e.isEditCell},M=Object(O.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(h.a)(Object(h.a)({},e),{},{allUsers:t.allUsers});case U:return Object(h.a)(Object(h.a)({},e),{},{page:t.page,fromUser:t.page*e.visibleUsers-e.visibleUsers+1,toUser:t.page*e.visibleUsers>e.allUsers?e.allUsers:t.page*e.visibleUsers});case w:return Object(h.a)(Object(h.a)({},e),{},{allUsers:[].concat(Object(p.a)(e.allUsers),[t.user])});case E:return Object(h.a)(Object(h.a)({},e),{},{allUsers:e.allUsers.filter((function(e){return e.id!==t.id}))});case S:return Object(h.a)(Object(h.a)({},e),{},{allUsers:e.allUsers.map((function(e){return e.id===t.user.id?{id:t.user.id,name:t.user.name,email:t.user.email,phone:t.user.phone,website:t.user.website}:e}))});case k:return Object(h.a)(Object(h.a)({},e),{},{isEditCell:t.bool});default:return e}}),Object(v.composeWithDevTools)(Object(O.applyMiddleware)(f.a))),R=function(){var e=Object(m.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N(t).then((function(e){return M.dispatch(F(e))}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=function(e){M.dispatch({type:U,page:e})},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};M.dispatch(C(e))},K=function(e){M.dispatch(function(e){return{type:E,id:e}}(e))},W=(n(34),function(){var e=Object(o.c)(T).length,t=Object(o.c)(_),n=Object(o.c)(P),a=Object(o.c)(A),r=Object(o.c)(B),s=Math.ceil(e/t);var i=function(e,t){if(t>5){if(1===e)return[e,e+1,e+2,"...",t];if(e>1&&e<3)return[e-1,e,e+1,"...",t];if(e>2&&e<4)return[e-2,e-1,e,e+1,"...",t];if(e>3&&e<t-2)return[1,"...",e-1,e,e+1,"...",t];if(e>t-3&&e<t-1)return[1,"...",e-1,e,e+1,e+2];if(e>t-2&&e<t)return[1,"...",e-1,e,e+1];if(e===t)return[1,"...",e-2,e-1,e]}for(var n=[],c=1;c<=t;c+=1)n.push(c);return n}(n,s);return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"active-items",children:"Post ".concat(a,"-").concat(r," of ").concat(e)}),Object(c.jsx)("nav",{children:Object(c.jsxs)("ul",{className:"pagination justify-content-center",children:[Object(c.jsx)("li",{className:u()("page-item",{disabled:1===n}),children:Object(c.jsx)("button",{type:"button",className:"page-link",onClick:function(){return q(n-1)},children:"Previous"})}),i.map((function(e){return"..."!==e?Object(c.jsx)("li",{className:u()("page-item",{active:e===n}),children:Object(c.jsx)("button",{type:"button",className:"page-link",onClick:function(){return q(e)},children:e})},Object(b.a)()):Object(c.jsx)("li",{className:"page-item page-link ellipsis",children:e},Object(b.a)())})),Object(c.jsx)("li",{className:u()("page-item",{disabled:n===Math.ceil(e/t)}),children:Object(c.jsx)("button",{type:"button",className:"page-link",onClick:function(){return q(n+1)},children:"Next"})})]})})]})}),G=(n(35),n(5)),H=(n(36),function(e){var t=e.name,n=e.email,r=e.phone,s=e.website,i=e.id,l=Object(o.b)(),u=Object(o.c)(L),b=Object(a.useState)(!1),j=Object(G.a)(b,2),p=j[0],h=j[1],O=Object(a.useState)(t),f=Object(G.a)(O,2),v=f[0],x=f[1],N=Object(a.useState)(!1),g=Object(G.a)(N,2),U=g[0],w=g[1],E=Object(a.useState)(n),k=Object(G.a)(E,2),C=k[0],F=k[1],D=Object(a.useState)(!1),T=Object(G.a)(D,2),_=T[0],P=T[1],A=Object(a.useState)(r),B=Object(G.a)(A,2),M=B[0],R=B[1],q=Object(a.useState)(!1),J=Object(G.a)(q,2),W=J[0],H=J[1],z=Object(a.useState)(s),Q=Object(G.a)(z,2),V=Q[0],X=Q[1],Y=function(e){h(!1),w(!1),P(!1),H(!1),l(I(i)),e(!0)};Object(a.useEffect)((function(){u!==i&&(h(!1),w(!1),P(!1),H(!1))}),[u]);var Z=function(e,t){t(e.target.value)},$=function(e,t,n,c,a){"Enter"===e.code&&(v&&U&&_&&W||n(c),function(e,t,n,c,a){y("users",e,{method:"PATCH",body:JSON.stringify({name:t,email:n,phone:c,website:a}),headers:{"Content-type":"application/json; charset=utf-8"}})}(t,v,C,M,V),l(function(e,t,n,c,a){return{type:S,user:{id:e,name:t,email:n,phone:c,website:a}}}(t,v,C,M,V)),l(I(!0))),"Escape"===e.code&&(n(a),l(I(!0)))};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"bodyItem bodyNameItem",onDoubleClick:function(){Y(h)},children:p?Object(c.jsx)("input",{autoFocus:!0,value:v,onChange:function(e){return Z(e,x)},onKeyDown:function(e){return $(e,i,x,v,t)}}):v}),Object(c.jsx)("div",{className:"bodyItem bodyEmailItem",onDoubleClick:function(){Y(w)},children:U?Object(c.jsx)("input",{autoFocus:!0,value:C,onChange:function(e){return Z(e,F)},onKeyDown:function(e){return $(e,i,F,C,n)}}):C}),Object(c.jsx)("div",{className:"bodyItem bodyPhoneItem",onDoubleClick:function(){Y(P)},children:_?Object(c.jsx)("input",{autoFocus:!0,value:M,onChange:function(e){return Z(e,R)},onKeyDown:function(e){return $(e,i,R,M,r)}}):M}),Object(c.jsx)("div",{className:"bodyItem bodyWebsiteItem",onDoubleClick:function(){Y(H)},children:W?Object(c.jsx)("input",{autoFocus:!0,value:V,onChange:function(e){return Z(e,X)},onKeyDown:function(e){return $(e,i,X,V,s)}}):V}),Object(c.jsxs)("div",{className:"bodyItem bodyButtonItem",children:[" ",Object(c.jsx)("button",{className:"deleteButton",type:"submit",onClick:Object(m.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y("users",i,{method:"DELETE"});case 2:K(i);case 3:case"end":return e.stop()}}),e)}))),children:"Delete"})]})]})}),z=function(){var e=Object(o.c)(T),t=Object(o.c)(A),n=Object(o.c)(B);return Object(a.useEffect)((function(){R()}),[]),Object(c.jsxs)("div",{className:"gridTable",children:[Object(c.jsxs)("div",{className:"gridTable__header",children:[Object(c.jsx)("div",{className:"headerItem",children:"Full name"}),Object(c.jsx)("div",{className:"headerItem",children:"Email"}),Object(c.jsx)("div",{className:"headerItem",children:"Phone"}),Object(c.jsx)("div",{className:"headerItem",children:"Website"}),Object(c.jsx)("div",{className:"headerItem",children:"Actions"})]}),Object(c.jsx)("div",{className:"tableBody",children:e.map((function(e,a){return a>=t-1&&a<n&&Object(c.jsx)(H,Object(h.a)({},e),e.id)}))})]})},Q=(n(37),function(){return Object(c.jsx)("div",{className:"container",children:Object(c.jsxs)("form",{className:"new-employee-form",name:"addUser",method:"get",children:[Object(c.jsxs)("label",{className:"labelForm",htmlFor:"name",children:["Full name:*",Object(c.jsx)("input",{className:"inputForm",type:"text",name:"name",id:"name",required:!0,placeholder:"Irina Sokolova"})]}),Object(c.jsxs)("label",{className:"labelForm",htmlFor:"email",children:["Email:*",Object(c.jsx)("input",{className:"inputForm",type:"email",name:"email",id:"email",required:!0,placeholder:"ivanov@gmail.com"})]}),Object(c.jsxs)("label",{className:"labelForm",htmlFor:"phone",children:["Phone:*",Object(c.jsx)("input",{className:"inputForm",type:"tel",name:"phone",id:"phone",required:!0,placeholder:"+38(097)532-23-11"})]}),Object(c.jsxs)("label",{className:"labelForm",htmlFor:"webSite",children:["Web site:*",Object(c.jsx)("input",{className:"inputForm",type:"url",name:"webSite",id:"webSite",required:!0,placeholder:"https://mysite.com"})]}),Object(c.jsx)("button",{type:"submit",className:"formButton",onClick:function(){var e=Object(m.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.form,e.next=3,c=n.name.value,a=n.email.value,r=n.phone.value,s=n.webSite.value,y("users","",{method:"POST",body:JSON.stringify({name:c,email:a,phone:r,website:s}),headers:{"Content-type":"application/json; charset=utf-8"}});case 3:J({id:Object(b.a)(),name:n.name.value,email:n.email.value,phone:n.phone.value,webSite:n.webSite.value}),n.reset();case 5:case"end":return e.stop()}var c,a,r,s}),e)})));return function(t){return e.apply(this,arguments)}}(),children:"Add new user"})]})})});var V=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsxs)("div",{className:"wrapper",children:[Object(c.jsx)(z,{}),Object(c.jsx)(Q,{})]}),Object(c.jsx)(W,{})]})};n(38);i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(o.a,{store:M,children:Object(c.jsx)(V,{})})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.d7e0b980.chunk.js.map