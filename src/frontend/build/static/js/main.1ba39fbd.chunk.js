(this.webpackJsonpmessenger=this.webpackJsonpmessenger||[]).push([[0],{188:function(e,t,a){e.exports=a(365)},365:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),o=a.n(c),l=a(6),i=a(366),s=a(367),m=a(38),u=a.n(m),d=a(369),p="http://127.0.0.1:8000/",g="".concat(p,"auth/users/"),f="".concat(p,"auth/jwt/create/"),E="".concat(p,"hangman/"),h="".concat(p,"getFinished/"),y="".concat(p,"getPoints/"),b="".concat(p,"auth/users/me/"),v="abcdefghijklmnopqrstuvwxyz".split(""),w=function(e,t){var a={username:e,password:t};u.a.post(f,a).then((function(e){localStorage.setItem("accessToken",e.data.access),localStorage.setItem("isLoggedIn",!0),x(),d.a.success("Successfully logged in!")})).catch((function(e){return console.log(e)}))},x=function(e){e.push("/")},O=function(){localStorage.setItem("accessToken",""),x()},j=function(e){e.push("/games")},S=function(){var e=localStorage.getItem("accessToken");return{headers:{Authorization:"JWT ".concat(e)}}},k=function(e,t){e.push({pathname:"/game",state:{data:t}})},I=function(e){return"Game "+e},L=function(e){return e.map((function(e){return""===e?"_":e})).join("   ")},C=function(e){return"Lives Left: "+(6-e.wrong_moves)+", Progress: "+L(e.word_attempt)},A=function(){u.a.get(b,S()).then((function(e){return e.data})).catch((function(e){return console.log(e)}))},P=function(e,t){u.a.post(function(e){return"".concat(E).concat(e,"/guessLetter")}(e),{letter:t},S()).then((function(e){return e.data})).catch((function(e){return console.log(e)}))},_=function(e){e.push("/hangmanLobby")},N=function(e){return e.includes("")?"You should read a dictionary :(":"Congratulations...nerd"};var T=Object(l.f)((function(e){var t=function(e){return""!==localStorage.getItem("accessToken")?r.a.createElement("div",{style:{margin:"1rem",fontSize:"15px"}},r.a.createElement(i.a,{align:"middle"},r.a.createElement(s.a,{span:8},r.a.createElement("a",{onClick:j(e.history)},"Games")),r.a.createElement(s.a,{span:2,offset:14},r.a.createElement("a",{onClick:O},"Logout")))):r.a.createElement("div",null)};return r.a.createElement("div",null,r.a.createElement(t,null," "))})),G=a(15),F=a(73),q=a(370),R=a(124),z=F.a.Option;var M=function(e){var t=Object(n.useState)(0),a=Object(G.a)(t,2),c=a[0],o=a[1],l=Object(n.useState)(),i=Object(G.a)(l,2),s=i[0],m=i[1],d=Object(n.useState)(),p=Object(G.a)(d,2),g=p[0],f=p[1],b=Object(n.useState)(),v=Object(G.a)(b,2),w=v[0],x=v[1];return Object(n.useEffect)((function(){(void u.a.get(E,S()).then((function(e){return e.data})).catch((function(e){return console.log(e)}))).then((function(e){return m(e)})),(void u.a.get(h,S()).then((function(e){return e.data})).catch((function(e){return console.log(e)}))).then((function(e){return f(e)})),(void u.a.get(y,S()).then((function(e){return e.data})).catch((function(e){return console.log(e)}))).then((function(e){return o(e)}))}),[]),r.a.createElement("div",null,r.a.createElement("h1",{style:{textAlign:"center"}},"Play Hangman"),r.a.createElement("h3",{style:{textAlign:"center"}},"Points Earned: "+c),r.a.createElement("div",{style:{textAlign:"center"}}),r.a.createElement("h2",{style:{textAlign:"center"}},"Current Games"),r.a.createElement(q.b,{style:{margin:"10px 10% 50px 10%",padding:"10px",border:"2px solid grey",borderRadius:"5px"},itemLayout:"horizontal",dataSource:s,renderItem:function(t){return r.a.createElement(q.b.Item,{actions:[r.a.createElement(R.a,{onClick:function(){return k(e.history,t)}},"Continue Playing")]},r.a.createElement(q.b.Item.Meta,{title:r.a.createElement("p",null,I(t.game_id)),description:r.a.createElement("p",null,C(t))}))}}),r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(F.a,{showSearch:!0,style:{width:200},placeholder:"Choose Difficulty Level",optionFilterProp:"children",onChange:function(e){x(e)},filterOption:function(e,t){return t.children.toLowerCase().indexOf(e.toLowerCase())>=0}},r.a.createElement(z,{value:"1"},"1"),r.a.createElement(z,{value:"2"},"2"),r.a.createElement(z,{value:"3"},"3")),r.a.createElement(R.a,{onClick:function(){return function(e){u.a.post(E,{difficulty_level:e},S()).then((function(e){k(e.data)})).catch((function(e){return console.log(e)}))}(w)}},"Start New Singleplayer Game"),r.a.createElement("p",null,"Multiplayer Functionality Coming Soon!")),r.a.createElement("h2",{style:{textAlign:"center"}},"Past Games"),r.a.createElement(q.b,{style:{margin:"10px 10% 50px 10%",padding:"10px",border:"2px solid grey",borderRadius:"5px"},itemLayout:"horizontal",dataSource:g,renderItem:function(e){return r.a.createElement(q.b.Item,null,r.a.createElement(q.b.Item.Meta,{title:r.a.createElement("p",null,I(e.game_id)),description:r.a.createElement("p",null,(t=e.word,"word: "+t))}),r.a.createElement("p",null,e.word_attempt.includes("")?"LOST":"WON"));var t}}))},H=a(372),B=F.a.Option;var J=function(e){var t,a=Object(n.useState)(e.location.state.data),c=Object(G.a)(a,2),o=c[0],l=c[1],m=Object(n.useState)(),u=Object(G.a)(m,2),d=u[0],p=u[1],g=function(e){var t=e.split("");return v.filter((function(e){return!t.includes(e)}))}(o.guessed_letters);return"no"===o.finished?r.a.createElement("div",null,r.a.createElement("h1",{style:{textAlign:"center"}},"Game "+o.game_id),r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(i.a,{gutter:16},r.a.createElement(s.a,{className:"gutter-row",span:4,offset:8},r.a.createElement("p",null,"Guessed Letters: "+o.guessed_letters.split("").join(", "))),r.a.createElement(s.a,{className:"gutter-row",span:4},r.a.createElement("h4",null,"Lives Left: "+(6-o.wrong_moves))))),r.a.createElement("h1",{style:{textAlign:"center"}},L(o.word_attempt)),r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(F.a,{showSearch:!0,style:{width:200},placeholder:"Guess a Letter",optionFilterProp:"children",onChange:function(e){p(e)},filterOption:function(e,t){return t.children.toLowerCase().indexOf(e.toLowerCase())>=0}},g.map((function(e,t){return r.a.createElement(B,{value:e},e)}))),r.a.createElement(R.a,{onClick:function(){var t=e.location.state.data.game_id;P(t,d).then((function(e){return l(e)}))}},"Submit Guess"),r.a.createElement("div",{style:{textAlign:"center",marginTop:"30px"}},r.a.createElement(R.a,{onClick:_(e.history)},"Back to Hangman Lobby")))):r.a.createElement(H.a,{status:(t=o.word_attempt,t.includes("")?"error":"success"),title:N(o.word_attempt),subTitle:"",extra:[r.a.createElement(R.a,{onClick:_(e.history),type:"primary",key:"console"},"Return To Lobby"),r.a.createElement(R.a,{onClick:function(){return j(e.history)}},"Browse Other Games")]})};var U=function(){var e=localStorage.getItem("accessToken");return r.a.createElement("div",null,r.a.createElement(R.a,{onClick:function(){console.log(e)}}," see Access "))},V=(a(265),a(368)),W=a(371),D=a(373),Y=a(374),K=a(375);var Q=Object(l.f)((function(e){return r.a.createElement("div",{style:{margin:"100px 40% 100px"}},r.a.createElement("h1",null,"Login to GameHub"),r.a.createElement(V.a,{name:"normal_login",className:"login-form",initialValues:{remember:!0},onFinish:function(e){w(e.username,e.password)}},r.a.createElement(V.a.Item,{name:"username",rules:[{required:!0,message:"Please input your Username!"}]},r.a.createElement(W.a,{prefix:r.a.createElement(Y.a,{className:"site-form-item-icon"}),placeholder:"Username"})),r.a.createElement(V.a.Item,{name:"password",rules:[{required:!0,message:"Please input your Password!"}]},r.a.createElement(W.a,{prefix:r.a.createElement(K.a,{className:"site-form-item-icon"}),type:"password",placeholder:"Password"})),r.a.createElement(V.a.Item,null,r.a.createElement(V.a.Item,{name:"remember",valuePropName:"checked",noStyle:!0},r.a.createElement(D.a,null,"Remember me"))),r.a.createElement(V.a.Item,null,r.a.createElement(R.a,{type:"primary",htmlType:"submit",className:"login-form-button"},"Log in"),"Or ",r.a.createElement("a",{onClick:(e.history,void e.switch())},"register now!"))))}));var X=function(e){return r.a.createElement("div",{style:{margin:"100px 40% 100px"}},r.a.createElement("h1",null," Registration "),r.a.createElement(V.a,{name:"normal_register",className:"register-form",initialValues:{remember:!0},onFinish:function(e){var t=e.username,a=e.password;(function(e,t){var a={username:e,password:t};return u.a.post(g,a)})(t,a).then((function(){w(t,a)})).catch((function(e){return console.log(e)}))}},r.a.createElement(V.a.Item,{name:"username",rules:[{required:!0,message:"A username is required"}]},r.a.createElement(W.a,{prefix:r.a.createElement(Y.a,{className:"site-form-item-icon"}),placeholder:"Create Username"})),r.a.createElement(V.a.Item,{name:"password",hasFeedback:!0,rules:[{required:!0,message:"A password is required"}]},r.a.createElement(W.a,{prefix:r.a.createElement(K.a,{className:"site-form-item-icon"}),placeholder:"Password",type:"password"})),r.a.createElement(V.a.Item,{name:"confirmpassword",dependencies:["password"],hasFeedback:!0,rules:[{required:!0,message:"Re-enter your password"},function(e){var t=e.getFieldValue;return{validator:function(e,a){return a&&t("password")!==a?Promise.reject("Error: Passwords do not match"):Promise.resolve()}}}]},r.a.createElement(W.a,{prefix:r.a.createElement(K.a,{className:"site-form-item-icon"}),placeholder:"Confirm Password",type:"password"})),r.a.createElement(V.a.Item,null,r.a.createElement(R.a,{type:"primary",htmlType:"submit",className:"register-form-button"},"Register")),"Already have an account?",r.a.createElement("a",{onClick:function(){e.switch()}}," Login")))};var Z=function(e){var t=Object(n.useState)(!0),a=Object(G.a)(t,2),c=a[0],o=a[1],l=function(){console.log("here"),!0===c?(console.log("reached"),o(!1)):o(!0)};return c?(console.log("login showing"),r.a.createElement(Q,{switch:l})):(console.log("register showing"),r.a.createElement(X,{switch:l}))},$=[{title:"Hangman",link:"/hangmanLobby"}];var ee=function(e){var t=Object(n.useState)(),a=Object(G.a)(t,2),c=a[0],o=a[1],l=Object(n.useState)($),i=Object(G.a)(l,2),s=i[0];return i[1],Object(n.useEffect)((function(){A.then((function(e){return o(e.username)}))}),[]),r.a.createElement("div",null,r.a.createElement("h1",{style:{textAlign:"center"}},"Welcome "+c),r.a.createElement("h2",{style:{textAlign:"center"}},"Play some of our games!"),r.a.createElement(q.b,{style:{margin:"10px 10% 50px 10%",padding:"10px",border:"2px solid grey",borderRadius:"5px"},itemLayout:"horizontal",dataSource:s,renderItem:function(t){return r.a.createElement(q.b.Item,{actions:[r.a.createElement(R.a,{onClick:function(){return e.history.push(t.link)}},"Play")]},r.a.createElement(q.b.Item.Meta,{title:r.a.createElement("h3",null,t.title)}))}}),r.a.createElement("p",{style:{textAlign:"center"}},"More games coming soon!"))};var te=Object(l.f)((function(e){return r.a.createElement("div",{className:"App"},r.a.createElement(T,null),r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/",component:Z}),r.a.createElement(l.a,{exact:!0,path:"/games",component:ee}),r.a.createElement(l.a,{exact:!0,path:"/hangmanLobby",component:M}),r.a.createElement(l.a,{exact:!0,path:"/game",component:J}),r.a.createElement(l.a,{exact:!0,path:"/profile",component:U})))})),ae=a(56);o.a.render(r.a.createElement(ae.a,null,r.a.createElement(te,null)),document.getElementById("root"))}},[[188,1,2]]]);
//# sourceMappingURL=main.1ba39fbd.chunk.js.map