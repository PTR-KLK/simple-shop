(this["webpackJsonpsimple-shop"]=this["webpackJsonpsimple-shop"]||[]).push([[0],{34:function(n,e,t){n.exports=t(45)},45:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),c=t(17),o=t.n(c),i=t(4),u=t(10),l=t(19),m=t(12),d="ADD_ITEM",s="REMOVE_ITEM",f={cart:[]},p="FETCH_PRODUCTS_SUCCESS",b=function(n){return{type:p,value:n}},h={products:[]},v="PLACE_ORDER",g={orders:[]},E=Object(u.c)({cart:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case d:return Object(m.a)(Object(m.a)({},n),{},{cart:[].concat(Object(l.a)(n.cart),[e.item])});case s:return Object(m.a)(Object(m.a)({},n),{},{cart:n.cart.filter((function(n){return n.id!==e.id}))});default:return n}},products:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case p:return{products:e.value};default:return n}},orders:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case v:return Object(m.a)(Object(m.a)({},n),{},{orders:[].concat(Object(l.a)(n.orders),[{name:e.name,lastName:e.lastName,items:e.items}])});default:return n}}}),O=t(29),j="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u.d;var w=t(2),y=t(3),x="#77BA99",k="#F02D3A",C="#262730",F="#FFF",S="#EFF0D1",I="768px";function T(){var n=Object(w.a)(["\n    body {\n        background: ","; \n        margin: 0;\n        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n    }\n"]);return T=function(){return n},n}var _=Object(y.a)(T(),S),D=t(15),N=t(11);function R(){var n=Object(w.a)(["\n    color: ",";\n    text-decoration: none;\n    margin: 0 0.5rem 0 0;\n    &:hover {\n        color: ",";\n      }\n"]);return R=function(){return n},n}function L(){var n=Object(w.a)(["\n    display: flex;\n    list-style: none;\n    margin: 0;\n    padding: 0;\n"]);return L=function(){return n},n}function P(){var n=Object(w.a)(["\n    position: fixed;\n    top: 0;\n    width: 100%;\n    background-color: ",";\n    color: ",";\n    font-size: 1rem;\n    padding: 1rem;\n    display: flex;\n    justify-content: space-between;\n"]);return P=function(){return n},n}var A=y.b.div(P(),C,F),z=y.b.ul(L()),B=Object(y.b)(D.b)(R(),F,x),M=function(n){return n.cart.cart},U=function(n){return n.cart.cart.reduce((function(n,e){return n+e.price}),0)},Y=function(n){return n.cart.cart.length},H=function(n){return n.cart.cart.map((function(n){return n.id}))};function J(){var n=Object(w.a)(["\n    color: ",";\n    text-decoration: none;\n    margin-right: 2rem;\n\n    &:hover {\n        color: ",";\n      }\n"]);return J=function(){return n},n}var V=Object(y.b)(D.b)(J(),F,x);var W=Object(i.b)((function(n){return{cartTotal:U(n),cartLength:Y(n)}}),null)((function(n){return a.a.createElement(V,{to:"/simple-shop/cart"},"(",n.cartLength,") Cart: ",n.cartTotal)}));var X=function(){return a.a.createElement(A,null,a.a.createElement(z,null,a.a.createElement("li",null,a.a.createElement(B,{to:"/simple-shop/"},"Home")),a.a.createElement("li",null,a.a.createElement(B,{to:"/simple-shop/orders"},"Orders"))),a.a.createElement(W,null))},$=function(n){return n.products.products};function q(){var n=Object(w.a)(["\n    margin: 3rem auto 0;\n    max-width: 600px;\n    padding: 1rem 1rem 0;\n"]);return q=function(){return n},n}var G=y.b.div(q());function K(){var n=Object(w.a)(["\n    width: 100%;\n    background: ",";\n    color: ",";\n    padding: 1rem;\n    font-size: 1rem;\n    border: none;\n    cursor: pointer;\n"]);return K=function(){return n},n}function Q(){var n=Object(w.a)(["\n    font-weight: bold;\n"]);return Q=function(){return n},n}function Z(){var n=Object(w.a)(["\n    margin 0.5rem 0 0;\n\n    @media (min-width: ",") {\n        margin 0;\n    }\n"]);return Z=function(){return n},n}function nn(){var n=Object(w.a)(["\n    height: auto;\n    width: 50%;\n    margin: 0;\n\n    @media (min-width: ",") {\n        width: 33%;\n    }\n\n    @media (min-width: ",") {\n        width: 25%;\n        margin 0 1rem 0 0;\n    }\n"]);return nn=function(){return n},n}function en(){var n=Object(w.a)(["\n    width: 100%;\n\n    p {\n        overflow-wrap: break-word;\n        margin: 0.5rem 0;\n    }\n\n    @media (min-width: ",") {\n        width: 70%;\n    }\n"]);return en=function(){return n},n}function tn(){var n=Object(w.a)(["\n    display: flex;\n    background: ",";\n    color: ",";\n    flex-direction: column;\n    align-items: center;\n    margin-bottom: 1rem;\n    padding: 1rem;\n\n    @media (min-width: ",") {\n        flex-direction: row;\n    }\n"]);return tn=function(){return n},n}var rn=y.b.div(tn(),F,C,I),an=y.b.div(en(),I),cn=y.b.img(nn(),I,I),on=y.b.h3(Z(),I),un=y.b.p(Q()),ln=y.b.button(K(),(function(n){return n.danger?k:x}),F);var mn=Object(i.b)((function(n){return{products:$(n),cartItems:H(n)}}),(function(n){return{actionAddItem:function(e){return n(function(n){return{type:d,item:n}}(e))},actionRemoveItem:function(e){return n(function(n){return{type:s,id:n}}(e))}}}))((function(n){return a.a.createElement(rn,null,a.a.createElement(cn,{src:n.image,alt:n.title}),a.a.createElement(an,null,a.a.createElement(on,null,n.title),a.a.createElement("p",null,"Category: ",n.category),a.a.createElement("p",null,n.description),a.a.createElement(un,null,"Price: ",n.price),n.cartItems.includes(n.id)?a.a.createElement(ln,{danger:!0,id:n.id,onClick:function(e){n.actionRemoveItem(Number(e.target.id))}},"Remove from Cart"):a.a.createElement(ln,{id:n.id,onClick:function(e){var t=n.products.find((function(n){return n.id===Number(e.target.id)}));n.actionAddItem(t)}},"Add to Cart")))}));var dn=function(n){var e=n.list;return a.a.createElement(G,null,e.map((function(n){return a.a.createElement(mn,{key:n.id,title:n.title,category:n.category,description:n.description,price:n.price,image:n.image,id:n.id})})))};var sn=Object(i.b)((function(n){return{products:$(n)}}),(function(n){return{actionFetchProducts:function(){return n((function(n){fetch("https://fakestoreapi.com/products").then((function(n){return n.json()})).then((function(e){return n(b(e))}))}))}}}))((function(n){var e=n.actionFetchProducts,t=n.products;return Object(r.useEffect)((function(){e()}),[e]),a.a.createElement(dn,{list:t})}));function fn(){var n=Object(w.a)(["\n    width: 100%;\n    background: ",";\n    color: ",";\n    padding: 1rem;\n    font-size: 1rem;\n    border: none;\n    cursor: pointer;\n"]);return fn=function(){return n},n}function pn(){var n=Object(w.a)(["\n    margin: 0 0 0.5rem;\n"]);return pn=function(){return n},n}function bn(){var n=Object(w.a)(["\n    max-width: calc(600px - 2rem);\n    margin: 1rem;\n    padding: 1rem;\n    color: ",";\n    background: ",";\n\n    @media (min-width: ",") {\n        margin: 1rem auto;\n    }\n"]);return bn=function(){return n},n}var hn=y.b.section(bn(),C,F,I),vn=y.b.h3(pn()),gn=y.b.button(fn(),x,F);var En=Object(i.b)((function(n){return{cartTotal:U(n),cartLength:Y(n)}}),null)((function(n){var e=n.cartTotal,t=n.cartLength;return a.a.createElement(hn,null,a.a.createElement(vn,null,0===t?"Cart is empty":"You have ".concat(t," ").concat(1===t?"product":"products","\n              for:"),a.a.createElement("br",null),0===t?null:"".concat(e," z\u0142")),a.a.createElement(gn,null,"Order Items"))}));var On=Object(i.b)((function(n){return{cart:M(n)}}),null)((function(n){var e=n.cart;return a.a.createElement(a.a.Fragment,null,a.a.createElement(dn,{list:e}),a.a.createElement(En,null))})),jn=t(24);var wn=Object(i.b)((function(n){return{cart:M(n),cartTotal:U(n),cartLength:Y(n)}}),(function(n){return{actionPlaceOrder:function(e,t,r){return n(function(n,e,t){return{type:v,name:n,lastName:e,items:t}}(e,t,r))}}}))((function(n){var e=n.cart,t=n.cartTotal,c=n.cartLength,o=n.actionPlaceOrder,i=Object(r.useState)(""),u=Object(jn.a)(i,2),l=u[0],m=u[1],d=Object(r.useState)(""),s=Object(jn.a)(d,2),f=s[0],p=s[1];return a.a.createElement(a.a.Fragment,null,a.a.createElement(dn,{list:e}),a.a.createElement("h3",null,"You want to buy ",c," ",1===c?"product":"products"," ","for ",t," z\u0142"),a.a.createElement("form",{onSubmit:function(n){n.preventDefault(),o(l,f,e),m(""),p("")}},a.a.createElement("input",{value:l,onChange:function(n){m(n.target.value)},placeholder:"Your name..."}),a.a.createElement("input",{value:f,onChange:function(n){p(n.target.value)},placeholder:"Your last name..."}),a.a.createElement("input",{type:"submit",value:"Buy items"})))})),yn=function(n){return n.orders.orders};var xn=Object(i.b)((function(n){return{orders:yn(n)}}),null)((function(n){var e=n.orders;return a.a.createElement(a.a.Fragment,null,e.map((function(n,e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(dn,{key:e,list:n.items}),a.a.createElement("h3",null,"Order no.",e),a.a.createElement("h3",null,n.name+" "+n.lastName))})))}));var kn=function(){return a.a.createElement("div",null,a.a.createElement(D.a,null,a.a.createElement(X,null),a.a.createElement(N.c,null,a.a.createElement(N.a,{exact:!0,path:"/simple-shop/cart/order",component:wn}),a.a.createElement(N.a,{exact:!0,path:"/simple-shop/cart",component:On}),a.a.createElement(N.a,{exact:!0,path:"/simple-shop/orders",component:xn}),a.a.createElement(N.a,{exact:!0,path:"/simple-shop",component:sn}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Cn,Fn=Object(u.e)(E,Cn,j(Object(u.a)(O.a)));o.a.render(a.a.createElement(i.a,{store:Fn},a.a.createElement(_,null),a.a.createElement(kn,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.e2040d75.chunk.js.map