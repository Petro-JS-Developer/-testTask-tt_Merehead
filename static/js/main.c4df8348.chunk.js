(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{25:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),a=n.n(r),s=n(9),i=n.n(s),l=(n(25),n(11)),u=n.n(l),o=n(2),j=n(19),b=n(3),d=n(4),h=n.n(d),p=n(6),m=n(7),O=n(17),f=n(18),x="https://mate-api.herokuapp.com",v=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2?arguments[2]:void 0;return fetch("".concat(x,"/").concat(e,"/").concat(t),n).then((function(e){return e.json()})).then((function(e){return e.data}))},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return v("users".concat(e))},y=function(e,t){return v("users",e,t)},U="SET_ALL_USER",w="SET_NUMBER_PAGE",S="ADD_USER",E="DELETE_USERS",N="EDIT_USER",k="IS_EDIT_CELL",C=function(e){return{type:S,user:e}},D=function(e){return{type:E,id:e}},F=function(e){return{type:U,allUsers:e}},P=function(e){return{type:k,bool:e}},T=function(e){return e.allUsers},_=function(e){return e.visibleUsers},A=function(e){return e.page},L=function(e){return e.allPages},I=function(e){return e.fromUser},M=function(e){return e.toUser},R=function(e){return e.isEditCell},q=function(){var e=Object(p.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(t).then((function(e){return G.dispatch(F(e))}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),J=function(e){G.dispatch({type:w,page:e})},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};G.dispatch(C(e))},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";G.dispatch(D(e))},W={allUsers:[],visibleUsers:5,page:1,fromUser:1,toUser:5,allPages:1,isEditCell:!0},G=Object(m.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case U:return Object(b.a)(Object(b.a)({},e),{},{allUsers:t.allUsers,allPages:t.allUsers.length});case w:return Object(b.a)(Object(b.a)({},e),{},{page:t.page,fromUser:t.page*e.visibleUsers-e.visibleUsers+1,toUser:t.page*e.visibleUsers>e.allUsers?e.allUsers:t.page*e.visibleUsers});case S:return Object(b.a)(Object(b.a)({},e),{},{allUsers:[].concat(Object(j.a)(e.allUsers),[t.user]),allPages:e.allUsers.length});case E:return Object(b.a)(Object(b.a)({},e),{},{allUsers:e.allUsers.filter((function(e){return e.id!==t.id})),allPages:e.allUsers.length});case N:return Object(b.a)(Object(b.a)({},e),{},{allUsers:e.allUsers.map((function(e){return e.id===t.user.id?{id:t.user.id,name:t.user.name,email:t.user.email,phone:t.user.phone,website:t.user.website}:e}))});case k:return Object(b.a)(Object(b.a)({},e),{},{isEditCell:t.bool});default:return e}}),Object(f.composeWithDevTools)(Object(m.applyMiddleware)(O.a))),H=n(40),z=(n(33),function(){var e=Object(o.c)(L),t=Object(o.c)(_),n=Object(o.c)(A),r=Object(o.c)(I),a=Object(o.c)(M),s=Math.ceil(e/t),i=function(e,t){if(t>5){if(1===e)return[e,e+1,e+2,"...",t];if(e>1&&e<3)return[e-1,e,e+1,"...",t];if(e>2&&e<4)return[e-2,e-1,e,e+1,"...",t];if(e>3&&e<t-2)return[1,"...",e-1,e,e+1,"...",t];if(e>t-3&&e<t-1)return[1,"...",e-1,e,e+1,e+2];if(e>t-2&&e<t)return[1,"...",e-1,e,e+1];if(e===t)return[1,"...",e-2,e-1,e]}for(var n=[],c=1;c<=t;c+=1)n.push(c);return n}(n,s);return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"active-items",children:"Post ".concat(r,"-").concat(a," of ").concat(e)}),Object(c.jsx)("nav",{children:Object(c.jsxs)("ul",{className:"pagination justify-content-center",children:[Object(c.jsx)("li",{className:u()("page-item",{disabled:1===n}),children:Object(c.jsx)("button",{type:"button",className:"page-link",onClick:function(){return J(n-1)},children:"Previous"})}),i.map((function(e){return"..."!==e?Object(c.jsx)("li",{className:u()("page-item",{active:e===n}),children:Object(c.jsx)("button",{type:"button",className:"page-link",onClick:function(){return J(e)},children:e})},Object(H.a)()):Object(c.jsx)("li",{className:"page-item page-link ellipsis",children:e},Object(H.a)())})),Object(c.jsx)("li",{className:u()("page-item",{disabled:n===Math.ceil(e/t)}),children:Object(c.jsx)("button",{type:"button",className:"page-link",onClick:function(){return J(n+1)},children:"Next"})})]})})]})}),Q=(n(34),n(5)),V=(n(35),function(e){var t=e.name,n=e.email,a=e.phone,s=e.website,i=e.id,l=Object(o.b)(),u=Object(o.c)(R),j=Object(r.useState)(!1),b=Object(Q.a)(j,2),d=b[0],m=b[1],O=Object(r.useState)(t),f=Object(Q.a)(O,2),x=f[0],g=f[1],U=Object(r.useState)(!1),w=Object(Q.a)(U,2),S=w[0],E=w[1],k=Object(r.useState)(n),C=Object(Q.a)(k,2),D=C[0],F=C[1],T=Object(r.useState)(!1),_=Object(Q.a)(T,2),A=_[0],L=_[1],I=Object(r.useState)(a),M=Object(Q.a)(I,2),q=M[0],J=M[1],K=Object(r.useState)(!1),W=Object(Q.a)(K,2),G=W[0],H=W[1],z=Object(r.useState)(s),V=Object(Q.a)(z,2),X=V[0],Y=V[1],Z=function(e){u&&(l(P(!1)),e(!0))},$=function(e,t){t(e.target.value)},ee=function(){var e=Object(p.a)(h.a.mark((function e(t,n,c,r){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"Enter"===t.code&&(x&&S&&A&&G||c(r),y(n,{method:"PATCH",body:JSON.stringify({name:x,email:D,phone:q,website:X}),headers:{"Content-type":"application/json; charset=utf-8"}}),l({type:N,user:{id:n,name:x,email:D,phone:q,website:X}}),m(!1),l(P(!0))),"Escape"===t.code&&(c(r),m(!1));case 2:case"end":return e.stop()}}),e)})));return function(t,n,c,r){return e.apply(this,arguments)}}();return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{onDoubleClick:function(){Z(m)},children:d&&!u?Object(c.jsx)("input",{value:x,onChange:function(e){return $(e,g)},onKeyDown:function(e){return ee(e,i,g,x)}}):x}),Object(c.jsx)("td",{onDoubleClick:function(){Z(E)},children:S&&!u?Object(c.jsx)("input",{value:D,onChange:function(e){return $(e,F)},onKeyDown:function(e){return ee(e,i,F,D)}}):D}),Object(c.jsx)("td",{onDoubleClick:function(){Z(L)},children:A&&!u?Object(c.jsx)("input",{value:q,onChange:function(e){return $(e,J)},onKeyDown:function(e){return ee(e,i,J,q)}}):q}),Object(c.jsx)("td",{onDoubleClick:function(){Z(H)},children:G&&!u?Object(c.jsx)("input",{value:X,onChange:function(e){return $(e,Y)},onKeyDown:function(e){return ee(e,i,Y,X)}}):X}),Object(c.jsxs)("td",{children:[" ",Object(c.jsx)("button",{onClick:Object(p.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v("users",i,{method:"DELETE"});case 2:B(i);case 3:case"end":return e.stop()}}),e)}))),children:"Delete"})]})]})}),X=function(){var e=Object(o.c)(T),t=Object(o.c)(I),n=Object(o.c)(M);return Object(r.useEffect)((function(){q()}),[e.length]),Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("table",{children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"Full name"}),Object(c.jsx)("th",{children:"Email"}),Object(c.jsx)("th",{children:"Phone"}),Object(c.jsx)("th",{children:"Website"}),Object(c.jsx)("th",{children:"Actions"})]})}),Object(c.jsx)("tbody",{children:e?e.map((function(e,r){return r>=t-1&&r<n?Object(c.jsx)(V,Object(b.a)({},e),e.id):null})):null})]})})},Y=(n(36),function(){return Object(c.jsx)("div",{className:"container",children:Object(c.jsxs)("form",{className:"new-employee-form",name:"addUser",method:"get",children:[Object(c.jsxs)("label",{className:"labelForm",htmlFor:"name",children:["Full name:*",Object(c.jsx)("input",{className:"inputForm",type:"text",name:"name",id:"name",required:!0,placeholder:"Irina Sokolova"})]}),Object(c.jsxs)("label",{className:"labelForm",htmlFor:"email",children:["Email:*",Object(c.jsx)("input",{className:"inputForm",type:"email",name:"email",id:"email",required:!0,placeholder:"ivanov@gmail.com"})]}),Object(c.jsxs)("label",{className:"labelForm",htmlFor:"phone",children:["Phone:*",Object(c.jsx)("input",{className:"inputForm",type:"tel",name:"phone",id:"phone",required:!0,placeholder:"+38(097)532-23-11"})]}),Object(c.jsxs)("label",{className:"labelForm",htmlFor:"webSite",children:["Web site:*",Object(c.jsx)("input",{className:"inputForm",type:"url",name:"webSite",id:"webSite",required:!0,placeholder:"https://mysite.com"})]}),Object(c.jsx)("button",{type:"submit",className:"formButton",onClick:function(){var e=Object(p.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.form,e.next=3,c={method:"POST",body:JSON.stringify({name:n.name.value,email:n.email.value,phone:n.phone.value,website:n.webSite.value}),headers:{"Content-type":"application/json; charset=utf-8"}},v("users","",c);case 3:K({name:n.name.value,email:n.email.value,phone:n.phone.value,website:n.webSite.value}),n.reset();case 5:case"end":return e.stop()}var c}),e)})));return function(t){return e.apply(this,arguments)}}(),children:"Add new user"})]})})});var Z=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsxs)("div",{className:"container2",children:[Object(c.jsx)(X,{}),Object(c.jsx)(Y,{})]}),Object(c.jsx)(z,{})]})};n(37);i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(o.a,{store:G,children:Object(c.jsx)(Z,{})})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.c4df8348.chunk.js.map