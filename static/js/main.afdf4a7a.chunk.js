(this["webpackJsonpsimple-shop"]=this["webpackJsonpsimple-shop"]||[]).push([[0],{34:function(n,e,t){n.exports=t(45)},45:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),c=t(17),o=t.n(c),i=t(4),u=t(12),l=t(19),m=t(10),d="ADD_ITEM",s="REMOVE_ITEM",f="CLEAR_CART",p={cart:[]},b="FETCH_PRODUCTS_SUCCESS",g=function(n){return{type:b,value:n}},h={products:[]},v="PLACE_ORDER",E={orders:[]},O=Object(u.c)({cart:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case d:return Object(m.a)(Object(m.a)({},n),{},{cart:[].concat(Object(l.a)(n.cart),[e.item])});case s:return Object(m.a)(Object(m.a)({},n),{},{cart:n.cart.filter((function(n){return n.id!==e.id}))});case f:return Object(m.a)(Object(m.a)({},n),{},{cart:[]});default:return n}},products:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case b:return{products:e.value};default:return n}},orders:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case v:return Object(m.a)(Object(m.a)({},n),{},{orders:[].concat(Object(l.a)(n.orders),[{name:e.name,lastName:e.lastName,items:e.items}])});default:return n}}}),j=t(29),w="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u.d;var y=t(2),x=t(3),k="#77BA99",C="#F02D3A",F="#262730",T="#FFF",S="#EFF0D1",_="768px";function I(){var n=Object(y.a)(["\n    body {\n        background: ","; \n        margin: 0;\n        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n    }\n"]);return I=function(){return n},n}var N=Object(x.a)(I(),S),R=t(7),D=t(13);function A(){var n=Object(y.a)(["\n    color: ",";\n    text-decoration: none;\n    margin: 0 0.5rem 0 0;\n    &:hover {\n        color: ",";\n      }\n"]);return A=function(){return n},n}function L(){var n=Object(y.a)(["\n    display: flex;\n    list-style: none;\n    margin: 0;\n    padding: 0;\n"]);return L=function(){return n},n}function z(){var n=Object(y.a)(["\n    position: fixed;\n    top: 0;\n    width: 100%;\n    background-color: ",";\n    color: ",";\n    font-size: 1rem;\n    padding: 1rem;\n    display: flex;\n    justify-content: space-between;\n"]);return z=function(){return n},n}var P=x.b.div(z(),F,T),B=x.b.ul(L()),M=Object(x.b)(R.b)(A(),T,k),U=function(n){return n.cart.cart},Y=function(n){return n.cart.cart.reduce((function(n,e){return n+e.price}),0)},H=function(n){return n.cart.cart.length},G=function(n){return n.cart.cart.map((function(n){return n.id}))};function J(){var n=Object(y.a)(["\n    color: ",";\n    text-decoration: none;\n    margin-right: 2rem;\n\n    &:hover {\n        color: ",";\n      }\n"]);return J=function(){return n},n}var V=Object(x.b)(R.b)(J(),T,k);var W=Object(i.b)((function(n){return{cartTotal:Y(n),cartLength:H(n)}}),null)((function(n){return a.a.createElement(V,{to:"/simple-shop/cart"},"(",n.cartLength,") Cart: ",n.cartTotal)}));var X=function(){return a.a.createElement(P,null,a.a.createElement(B,null,a.a.createElement("li",null,a.a.createElement(M,{to:"/simple-shop/"},"Home")),a.a.createElement("li",null,a.a.createElement(M,{to:"/simple-shop/orders"},"Orders"))),a.a.createElement(W,null))},$=function(n){return n.products.products};function q(){var n=Object(y.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 1rem;\n  color: ",";\n  background: ",";\n\n  h3 {\n    margin: 0;\n  }\n\n  p {\n    margin: 0.5rem 0;\n    font-size: 1rem;\n  }\n\n  @media (min-width: ",") {\n    margin: 1rem auto;\n  }\n"]);return q=function(){return n},n}function K(){var n=Object(y.a)(["\n  margin: 3rem auto 0;\n  max-width: 600px;\n  padding: 1rem 1rem 0;\n"]);return K=function(){return n},n}var Q=x.b.div(K()),Z=x.b.header(q(),F,T,_);function nn(){var n=Object(y.a)(["\n    width: 100%;\n    background: ",";\n    color: ",";\n    padding: 1rem;\n    font-size: 1rem;\n    border: none;\n    cursor: pointer;\n"]);return nn=function(){return n},n}function en(){var n=Object(y.a)(["\n    font-weight: bold;\n"]);return en=function(){return n},n}function tn(){var n=Object(y.a)(["\n    margin 0.5rem 0 0;\n\n    @media (min-width: ",") {\n        margin 0;\n    }\n"]);return tn=function(){return n},n}function rn(){var n=Object(y.a)(["\n    height: auto;\n    width: 50%;\n    margin: 0;\n\n    @media (min-width: ",") {\n        width: 33%;\n    }\n\n    @media (min-width: ",") {\n        width: 25%;\n        margin 0 1rem 0 0;\n    }\n"]);return rn=function(){return n},n}function an(){var n=Object(y.a)(["\n    width: 100%;\n\n    p {\n        overflow-wrap: break-word;\n        margin: 0.5rem 0;\n    }\n\n    @media (min-width: ",") {\n        width: 70%;\n    }\n"]);return an=function(){return n},n}function cn(){var n=Object(y.a)(["\n    display: flex;\n    background: ",";\n    color: ",";\n    flex-direction: column;\n    align-items: center;\n    margin-bottom: 1rem;\n    padding: 1rem;\n\n    @media (min-width: ",") {\n        flex-direction: row;\n    }\n"]);return cn=function(){return n},n}var on=x.b.div(cn(),T,F,_),un=x.b.div(an(),_),ln=x.b.img(rn(),_,_),mn=x.b.h3(tn(),_),dn=x.b.p(en()),sn=x.b.button(nn(),(function(n){return n.danger?C:k}),T);var fn=Object(i.b)((function(n){return{products:$(n),cartItems:G(n)}}),(function(n){return{actionAddItem:function(e){return n(function(n){return{type:d,item:n}}(e))},actionRemoveItem:function(e){return n(function(n){return{type:s,id:n}}(e))}}}))((function(n){return a.a.createElement(on,null,a.a.createElement(ln,{src:n.image,alt:n.title}),a.a.createElement(un,null,a.a.createElement(mn,null,n.title),a.a.createElement("p",null,"Category: ",n.category),a.a.createElement("p",null,n.description),a.a.createElement(dn,null,"Price: ",n.price),n.cartItems.includes(n.id)?a.a.createElement(sn,{danger:!0,id:n.id,onClick:function(e){n.actionRemoveItem(Number(e.target.id))}},"Remove from Cart"):a.a.createElement(sn,{id:n.id,onClick:function(e){var t=n.products.find((function(n){return n.id===Number(e.target.id)}));n.actionAddItem(t)}},"Add to Cart")))}));var pn=function(n){var e=n.list,t=n.no,r=n.name,c=n.lastName;return a.a.createElement(Q,null,r?a.a.createElement(Z,null,a.a.createElement("h3",null,"Order no. ",t+1),a.a.createElement("p",null,r+" "+c)):null,e.map((function(n){return a.a.createElement(fn,{key:n.id,title:n.title,category:n.category,description:n.description,price:n.price,image:n.image,id:n.id})})))};var bn=Object(i.b)((function(n){return{products:$(n)}}),(function(n){return{actionFetchProducts:function(){return n((function(n){fetch("https://fakestoreapi.com/products").then((function(n){return n.json()})).then((function(e){return n(g(e))}))}))}}}))((function(n){var e=n.actionFetchProducts,t=n.products;return Object(r.useEffect)((function(){e()}),[e]),a.a.createElement(pn,{list:t})}));function gn(){var n=Object(y.a)(["\n    display: block;\n    background: ",";\n    cursor: ",";\n    color: ",";\n    padding: 1rem;\n    font-size: 1rem;\n    border: none;\n    text-decoration: none;\n    font-weight: bold;\n"]);return gn=function(){return n},n}function hn(){var n=Object(y.a)(["\n    margin: 0 0 0.5rem;\n"]);return hn=function(){return n},n}function vn(){var n=Object(y.a)(["\n    max-width: calc(600px - 2rem);\n    margin: 1rem;\n    padding: 1rem;\n    color: ",";\n    background: ",";\n\n    @media (min-width: ",") {\n        margin: 1rem auto;\n    }\n"]);return vn=function(){return n},n}var En=x.b.section(vn(),F,T,_),On=x.b.h3(hn()),jn=Object(x.b)(R.b)(gn(),(function(n){return n.disabled?"gray":k}),(function(n){return n.disabled?"not-allowed":"pointer"}),T);var wn=Object(i.b)((function(n){return{cartTotal:Y(n),cartLength:H(n)}}),null)((function(n){var e=n.cartTotal,t=n.cartLength;return a.a.createElement(En,null,a.a.createElement(On,null,0===t?"Cart is empty":"You have ".concat(t," ").concat(1===t?"product":"products","\n              for:"),a.a.createElement("br",null),0===t?null:"".concat(e," z\u0142")),a.a.createElement(jn,{disabled:0===t,to:"/simple-shop/cart/order"},"Order Items"))}));var yn=Object(i.b)((function(n){return{cart:U(n)}}),null)((function(n){var e=n.cart;return a.a.createElement(a.a.Fragment,null,a.a.createElement(pn,{list:e}),a.a.createElement(wn,null))})),xn=t(24),kn=function(n){return n.orders.orders};function Cn(){var n=Object(y.a)(["\n  font-size: 1rem;\n  padding: 0.25rem;\n  margin: 0 0 0.5rem;\n\n  ","\n"]);return Cn=function(){return n},n}function Fn(){var n=Object(y.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return Fn=function(){return n},n}function Tn(){var n=Object(y.a)(["\n  margin: 0 0 0.5rem;\n"]);return Tn=function(){return n},n}function Sn(){var n=Object(y.a)(["\n  display: flex;\n  flex-direction: column;\n  max-width: calc(600px - 2rem);\n  margin: 1rem;\n  padding: 1rem;\n  color: ",";\n  background: ",";\n\n  p {\n    margin: 0.5rem;\n  }\n\n  @media (min-width: ",") {\n    margin: 1rem auto;\n  }\n"]);return Sn=function(){return n},n}var _n=x.b.section(Sn(),F,T,_),In=x.b.h3(Tn()),Nn=x.b.form(Fn()),Rn=x.b.input(Cn(),(function(n){return"submit"===n.type?"\n        background: ".concat(k,";\n        cursor: pointer;\n        color: ").concat(T,";\n        padding: 1rem;\n        border: none;\n        font-weight: bold;\n        "):null}));var Dn=Object(i.b)((function(n){return{cart:U(n),cartTotal:Y(n),cartLength:H(n),orders:kn(n)}}),(function(n){return{actionPlaceOrder:function(e,t,r){return n(function(n,e,t){return{type:v,name:n,lastName:e,items:t}}(e,t,r))},actionClearCart:function(){return n({type:f})}}}))((function(n){var e=n.cart,t=n.cartTotal,c=n.cartLength,o=n.actionPlaceOrder,i=n.actionClearCart,u=n.orders,l=Object(r.useState)(""),m=Object(xn.a)(l,2),d=m[0],s=m[1],f=Object(r.useState)(""),p=Object(xn.a)(f,2),b=p[0],g=p[1];return a.a.createElement(_n,null,0!==e.length?a.a.createElement(a.a.Fragment,null,a.a.createElement(In,null,"You want to buy ",c," ",1===c?"product":"products"," for ",t," z\u0142"),a.a.createElement(Nn,{onSubmit:function(n){n.preventDefault(),o(d,b,e),i(),s(""),g("")}},a.a.createElement(Rn,{value:d,onChange:function(n){s(n.target.value)},placeholder:"Your name..."}),a.a.createElement(Rn,{value:b,onChange:function(n){g(n.target.value)},placeholder:"Your last name..."}),a.a.createElement(Rn,{type:"submit",value:"Buy items"}))):0!==u.length?a.a.createElement(a.a.Fragment,null,a.a.createElement(In,null,"Thank you for ordering items in our shop"),a.a.createElement(R.b,{to:"/simple-shop/"},"Go to homepage"),a.a.createElement(R.b,{to:"/simple-shop/orders"},"Check your orders")):a.a.createElement(a.a.Fragment,null,a.a.createElement(In,null,"There's nothing to order"),a.a.createElement(R.b,{to:"/simple-shop/"},"Go to homepage")))}));var An=Object(i.b)((function(n){return{cart:U(n)}}),null)((function(n){var e=n.cart;return a.a.createElement(a.a.Fragment,null,a.a.createElement(pn,{list:e}),a.a.createElement(Dn,null))}));var Ln=Object(i.b)((function(n){return{orders:kn(n)}}),null)((function(n){var e=n.orders;return a.a.createElement(a.a.Fragment,null,e.map((function(n,e){return a.a.createElement(pn,{key:e,list:n.items,no:e,name:n.name,lastName:n.lastName})})))}));var zn=function(){return a.a.createElement("div",null,a.a.createElement(R.a,null,a.a.createElement(X,null),a.a.createElement(D.c,null,a.a.createElement(D.a,{exact:!0,path:"/simple-shop/cart/order",component:An}),a.a.createElement(D.a,{exact:!0,path:"/simple-shop/cart",component:yn}),a.a.createElement(D.a,{exact:!0,path:"/simple-shop/orders",component:Ln}),a.a.createElement(D.a,{exact:!0,path:"/simple-shop",component:bn}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Pn,Bn=Object(u.e)(O,Pn,w(Object(u.a)(j.a)));o.a.render(a.a.createElement(i.a,{store:Bn},a.a.createElement(N,null),a.a.createElement(zn,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.afdf4a7a.chunk.js.map