(this["webpackJsonpchat-app-portfolio"]=this["webpackJsonpchat-app-portfolio"]||[]).push([[0],{28:function(e,t,n){e.exports=n.p+"static/media/rocket.7bfb0308.png"},33:function(e,t,n){e.exports=n.p+"static/media/typing.95861268.png"},34:function(e,t,n){e.exports=n.p+"static/media/pic2.695989cc.png"},38:function(e,t,n){e.exports=n(51)},43:function(e,t,n){},44:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(14),i=n.n(o),l=(n(43),n(26)),c=n(27),s=n(36),u=n(35),m=n(3),f=(n(44),n(2)),d=n(11),p=n(28),g=n.n(p);function h(){var e=Object(m.a)(["\n\twidth: 7%;\n"]);return h=function(){return e},e}function v(){var e=Object(m.a)(["\n\tbackground: black;\n\tdisplay: flex;\n\tflex-flow: row;\n\tjustify-content: space-around;\n\tposition: sticky;\n\ttop: 0;\n\tcolor: #ffac41;\n"]);return v=function(){return e},e}var b=f.default.nav(v()),y=f.default.img(h());var E=function(){return r.a.createElement("div",null,r.a.createElement(b,null,r.a.createElement("div",{style:{flex:"5 1",margin:"1.2rem 10% "}},r.a.createElement(y,{src:g.a,alt:"rocket icon"})),r.a.createElement(d.b,{to:"/Interactive-Portfolio",style:{flex:"1 2",textDecoration:"none",color:"#ffac41"}},r.a.createElement("h2",null,"Home")),r.a.createElement(d.b,{to:"/About",style:{flex:"1 2",textDecoration:"none",color:"#ffac41"}},r.a.createElement("h2",null,"About")),r.a.createElement(d.b,{to:"/Contact",style:{flex:"1 2",textDecoration:"none",color:"#ffac41"}},r.a.createElement("h2",null,"Contact"))))},w=n(32),k=n.n(w),x=n(7),I=n(13);function j(){var e=Object(m.a)(["\n\tborder-style: none;\n\tbackground: black;\n\tcolor: #ff1e56;\n\tborder: 1px solid white;\n\tdisplay: inline-block;\n\tpadding: 8px;\n\tborder-radius: 8px;\n\ttransition: 0.5s;\n\t&:hover {\n\t\tbackground: #900c3f;\n\t\ttransform: scale(1.2);\n\t\tcursor: pointer;\n\t}\n"]);return j=function(){return e},e}function S(){var e=Object(m.a)(["\n\tdisplay: flex;\n\tflex-flow: row;\n\tjustify-content: space-around;\n\tmargin-top: 60px;\n\tfont-size: 5rem;\n"]);return S=function(){return e},e}function O(){var e=Object(m.a)(["\n\tbackground: black;\n\tcolor: white;\n\ttext-align: center;\n\twidth: 70vw;\n\tfont-size: 2rem;\n"]);return O=function(){return e},e}var A=f.default.div(O()),C=f.default.div(S()),D=f.default.div(j());var T=function(e){return r.a.createElement("div",{style:{margin:"auto"}},e.transitionState||r.a.createElement(A,null,"I am familiar with",r.a.createElement(C,null,r.a.createElement(x.a,{style:{color:"#DE4B25"},icon:I.b}),r.a.createElement(x.a,{style:{color:"#146FB1"},icon:I.a}),r.a.createElement(x.a,{style:{color:"#E9D54D"},icon:I.c}),r.a.createElement(x.a,{style:{color:"#5ED4F4"},icon:I.d})),r.a.createElement("p",{style:{marginTop:"50px",padding:"15px"}},"As you can see, React is the first framework that I started with and I fell in love with it ever since. To me, react is cohesive and it offers interactivity with ease. I am also able to use some packages within the React ecosystem such as"," ",r.a.createElement("span",{style:{color:"#ff1e56"}},"React-Router")," and",r.a.createElement("span",{style:{color:"#ff1e56"}}," Styled-Component")),r.a.createElement(D,{onClick:e.transition},"What's more")))};var H=function(e){var t={background:"black",margin:"70px auto",width:e.infoDisplay?"0":"70vw",transition:"1s"},n=[{id:"greet",message:"Hello, My name is Duy",trigger:"ask username"},{id:"ask username",message:"What is your name ?",trigger:"userName"},{id:"userName",user:!0,trigger:"ask user"},{id:"ask user",message:"Hi, {previousValue}",trigger:"ask user purpose"},{id:"ask user purpose",message:"You must be here to check out my portfolio, is that correct ? \ud83d\ude00",trigger:"user answer"},{id:"user answer",options:[{value:"yes",label:"Yes",trigger:"my answer"},{value:"no",label:"No",trigger:"my sub answer"}]},{id:"my answer",message:"Well, I am a student who is studying Environmental Engineering degree at Xamk University of Applied Sciences and I will be graduating soon",trigger:"introduction"},{id:"my sub answer",message:"Sorry to hear that, however while you are here, please let me introduce myself",trigger:"my answer"},{id:"introduction",message:"Then I wanted to learn something new and started with web development, and now, I fell in love with it.",trigger:"intro"},{id:"intro",message:"Let me show you more about what I have learned",trigger:"ok"},{id:"ok",options:[{value:"ok",label:"Ok",trigger:"transition"}]},{id:"transition",message:"take a look on the right side",trigger:"portfolio"},{id:"portfolio",message:e.infoDisplayHandler,end:!0}];return r.a.createElement("div",{style:{display:e.infoDisplay?"flex":null,flexFlow:e.infoDisplay?"row":null,marginTop:"100px",transition:"1s"}},r.a.createElement(k.a,Object.assign({steps:n},{hideBotAvatar:!0,hideHeader:!0,bubbleStyle:{background:"#ff1e56"}},{style:t})),e.infoDisplay?r.a.createElement(T,{infoStatus:e.infoDisplay,transition:e.transitionHandler,transitionState:e.transition}):null)},M=n(12);function z(){var e=Object(m.a)(["\n\tfont-size: 1.2rem;\n\twidth: 30vw;\n\tmargin: 2rem auto;\n"]);return z=function(){return e},e}var P=f.default.p(z());var L=function(e){var t=null;switch(e.type){case"faUserCircle":t=r.a.createElement(P,null,"I made this CV after I learned the basics of HTML. Although it does not look like much, it did sparked the curiosity and passion in coding in me, which has led to what I am today.");break;case"faCalculator":t=r.a.createElement(P,null,"This is the first independent project that I made after learning the basics of React. It also caused me a lot of troubles since it was my first time coding something so strange. Nevertheless, this project taught me so much about states vs props in React and how to manage them.");break;case"faCloudSunRain":t=r.a.createElement(P,null,"This time I tried to make an App that display the Air Quality in Helsinki, the city I am living in. After this project, I learned how to make API calls using Axios package to GET the data I want, manipulate them and render them to the screen.");break;case"faPuzzlePiece":t=r.a.createElement(P,null,"Then I challenged myself with a web game. This one was tough as I had to combine detailed CSS to animate the movement of the cards and keep them in sync with the logic.");break;default:t=null}return r.a.createElement("div",null,t)};function N(){var e=Object(m.a)(["\n\t&:hover {\n\t\tcolor: #ffac41;\n\t\ttransition: 0.5s;\n\t}\n"]);return N=function(){return e},e}function R(){var e=Object(m.a)(["\n\tfont-size: 1.5rem;\n"]);return R=function(){return e},e}function B(){var e=Object(m.a)(["\n\tcolor: #c70039;\n\tmargin-bottom: 10rem;\n\tfont-size: 3rem;\n"]);return B=function(){return e},e}var W={fontSize:"5rem",display:"grid",gap:"1rem",gridTemplateColumns:"repeat(auto-fit, minmax(100px,1fr)"},Y=f.default.h1(B()),F=f.default.h3(R()),U=f.default.div(N());var V=function(e){var t=e.descriptionHandler,n=e.mouseLeave,a=e.hoverIcon;return r.a.createElement("div",null,r.a.createElement(Y,null,"Here are some of the projects I have done"),r.a.createElement("div",{style:W},r.a.createElement(U,{onMouseEnter:function(){return t("faUserCircle")},onMouseLeave:n},r.a.createElement(x.a,{style:{margin:"auto",color:"#1f4068"},icon:M.g}),r.a.createElement(F,null,"My first CV website")),r.a.createElement(U,{onMouseEnter:function(){return t("faCalculator")},onMouseLeave:n},r.a.createElement(x.a,{style:{margin:"auto",color:"#222831"},icon:M.a}),r.a.createElement(F,null,"Simple Calculator")),r.a.createElement(U,{onMouseEnter:function(){return t("faCloudSunRain")},onMouseLeave:n},r.a.createElement(x.a,{style:{margin:"auto",color:"#ff5722"},icon:M.b}),r.a.createElement(F,null,"Air Quality App")),r.a.createElement(U,{onMouseEnter:function(){return t("faPuzzlePiece")},onMouseLeave:n},r.a.createElement(x.a,{style:{margin:"auto",color:"#f38181"},icon:M.f}),r.a.createElement(F,null,"Memory Card game")),r.a.createElement(d.b,{to:"/About",style:{textDecoration:"none",color:"#ffac41"}},r.a.createElement(U,{onMouseEnter:function(){return t("faInfo")},onMouseLeave:n},r.a.createElement(x.a,{style:{margin:"auto",color:"red"},icon:M.d}),r.a.createElement(F,null,"About my practice")))),r.a.createElement(L,{type:a}))},J=n(5),Q=n(33),G=n.n(Q),X=n(34),$=n.n(X);function q(){var e=Object(m.a)(["\n\tfont-size: 1.3rem;\n"]);return q=function(){return e},e}function K(){var e=Object(m.a)(["\n\tmargin: 2rem;\n\tdisplay: flex;\n\tflex-flow: row;\n"]);return K=function(){return e},e}function Z(){var e=Object(m.a)(["\n\twidth: 10vw;\n\theight: 10vw;\n\tmargin: 1rem 1rem 5px 1rem;\n"]);return Z=function(){return e},e}function _(){var e=Object(m.a)(["\n\tborder-style: none;\n\tbackground: black;\n\tcolor: #ff1e56;\n\tborder: 1px solid white;\n\tdisplay: inline-block;\n\tpadding: 8px;\n\tborder-radius: 8px;\n\ttransition: 0.5s;\n\t&:hover {\n\t\tbackground: #900c3f;\n\t\ttransform: scale(1.2);\n\t\tcursor: pointer;\n\t}\n"]);return _=function(){return e},e}function ee(){var e=Object(m.a)(["\n\tdisplay: flex;\n\tflex-flow: column;\n\tmargin-top: 5rem;\n\talign-items: center;\n"]);return ee=function(){return e},e}var te=f.default.div(ee()),ne=f.default.div(_()),ae=f.default.img(Z()),re=f.default.div(K()),oe=f.default.p(q());var ie=function(){return r.a.createElement("div",{className:"page"},r.a.createElement(te,null,r.a.createElement(re,null,r.a.createElement("div",null,r.a.createElement(ae,{src:$.a,alt:"web browser"}),r.a.createElement("p",{style:{fontSize:"0.7rem",textAlign:"center"}},"Icon made by Nhor Phai from www.flaticon.com")),r.a.createElement(oe,null,"I love programming interactive web apps with React.",r.a.createElement("br",null)," In my opinion, SPAs offer a more friendly and fun interaction to customers.",r.a.createElement("br",null)," Apart from that, I also enjoy experimenting with different looks and design with HTML and CSS, ",r.a.createElement("br",null),"combined with CSS animation to give the best looks and feels to my customers.")),r.a.createElement(re,null),r.a.createElement(re,null,r.a.createElement(oe,null,"My programming orientation is simple code, readable and maintainable. ",r.a.createElement("br",null)," I am also a very competitive person, if I come across a problem, ",r.a.createElement("br",null),"it would make me uncomfortable until it is resolved. ",r.a.createElement("br",null)," After all, it simply is because programming to me is stimulative, ",r.a.createElement("br",null),"fun and never cease to amaze me."),r.a.createElement("div",null,r.a.createElement(ae,{src:G.a,alt:"typing"}),r.a.createElement("p",{style:{fontSize:"0.7rem",textAlign:"center"}},"Icon made by Monkik from www.flaticon.com"))),r.a.createElement(d.b,{to:"/Contact"},r.a.createElement(ne,null,"Contact me"))))};function le(){var e=Object(m.a)(["\n\tborder-style: none;\n\tmargin: 5rem;\n\tbackground: black;\n\tcolor: #ff1e56;\n\tborder: 1px solid white;\n\tdisplay: inline-block;\n\tpadding: 8px;\n\tborder-radius: 8px;\n\ttransition: 0.5s;\n\t&:hover {\n\t\tbackground: #900c3f;\n\t\ttransform: scale(1.2);\n\t\tcursor: pointer;\n\t}\n"]);return le=function(){return e},e}function ce(){var e=Object(m.a)(["\n\ttext-decoration: none;\n\tcolor: #ff1e56;\n\tfont-size: 1.5rem;\n"]);return ce=function(){return e},e}function se(){var e=Object(m.a)(["\n\tfont-size: 1.2rem;\n"]);return se=function(){return e},e}function ue(){var e=Object(m.a)(["\n\tdisplay: flex;\n\tflex-flow: row;\n\tfont-size: 5rem;\n\tcolor: #ffac41;\n\tjustify-content: space-around;\n\tmargin-top: 12rem;\n\ttext-align: center;\n"]);return ue=function(){return e},e}var me=f.default.div(ue()),fe=f.default.p(se()),de=f.default.a(ce()),pe=f.default.button(le());var ge=function(){return r.a.createElement("div",{className:"page",style:{margin:"auto",textAlign:"center"}},r.a.createElement(me,null,r.a.createElement("div",null,r.a.createElement(x.a,{icon:M.e}),r.a.createElement(fe,null,"Phone: +358 44 231 6575")),r.a.createElement("div",null,r.a.createElement(x.a,{icon:M.c}),r.a.createElement(fe,null,"Email: nguyenduy010798@gmail.com"))),r.a.createElement(pe,null,r.a.createElement(de,{href:"mailto:nguyenduy010798@gmail.com"},"Send me an email")))},he=n(54),ve=n(53);function be(){var e=Object(m.a)(["\n\tmargin: auto;\n\ttext-align: center;\n\ttransform: ",";\n\tvisibility: ",";\n\ttransition: 1s;\n"]);return be=function(){return e},e}var ye=f.default.div(be(),(function(e){return e.transition?"translateY(-600px)":"translateY(100px)"}),(function(e){return e.transition?"visible":"hidden"})),Ee=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={infoDisplay:!1,aboutPageTransition:!1,hoveringIcon:""},e.infoDisplayHandler=function(){return e.setState({infoDisplay:!0})},e.aboutPageTransitionHandler=function(){return e.setState({aboutPageTransition:!0})},e.descriptionHandler=function(t){e.setState({description:!0,hoveringIcon:t})},e.descriptionToggler=function(){return e.setState({hoveringIcon:""})},e.floatingToggler=function(){return e.setState({floatingState:!0})},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(E,null),r.a.createElement(J.a,{render:function(t){var n=t.location;return r.a.createElement(he.a,null,r.a.createElement(ve.a,{timeout:450,key:n.key,classNames:"fade"},r.a.createElement(J.c,{location:n},r.a.createElement(J.a,{exact:!0,path:"/Interactive-Portfolio"},r.a.createElement("div",{className:"page"},r.a.createElement(H,{infoDisplay:e.state.infoDisplay,infoDisplayHandler:e.infoDisplayHandler,transitionHandler:e.aboutPageTransitionHandler,transition:e.state.aboutPageTransition}),r.a.createElement(ye,{transition:e.state.aboutPageTransition},r.a.createElement(V,{descriptionHandler:e.descriptionHandler,hoverIcon:e.state.hoveringIcon,mouseLeave:e.descriptionToggler})))),r.a.createElement(J.a,{path:"/About"},r.a.createElement(ie,null)),r.a.createElement(J.a,{path:"/Contact"},r.a.createElement(ge,null)))))}}))}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d.a,null,r.a.createElement(Ee,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.339ad388.chunk.js.map