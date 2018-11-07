(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){"use strict";n.d(t,"d",function(){return l}),n.d(t,"c",function(){return f}),n.d(t,"a",function(){return p}),n.d(t,"b",function(){return m});var o=n(31),r=n.n(o),a=n(161);function u(){var e=r()(['\n  @import url("https://fonts.googleapis.com/css?family=Open+Sans");\n  body {\n    background: ',";\n    ",";\n  }\n"]);return u=function(){return e},e}function c(){var e=r()([""]);return c=function(){return e},e}function s(){var e=r()(["\n  color: ",";\n"]);return s=function(){return e},e}function i(){var e=r()(["\n  display: flex;\n"]);return i=function(){return e},e}n.d(t,"f",function(){return a.b});var l={main:"#393B41",secondary:"#43454b",inactive:"#4B4D52",active:"#808185",muted:"#4D4F54",mutedLight:"#75767A",players:{0:"#DD3939",1:"#EDAF06",2:"#009688",3:"#416094",4:"#84B779",5:"#C095C3",6:"#793A3A",7:"#3A5936",8:"#4599C3",9:"#6D6F54",10:"#AE7D58",11:"#CCA6A6",12:"#824E77",13:"#D4D9A1",14:"#622B2B",15:"#768661"}},d=a.b.div(i()),f=a.b.input(s(),l.active),p=a.b.button(c()),m=Object(a.a)(u(),l.main,"font-family: 'Open Sans', sans-serif");t.e=d},162:function(e,t,n){"use strict";var o=n(5),r=n.n(o),a=n(76),u=n.n(a),c=n(31),s=n.n(c),i=n(0),l=n.n(i),d=n(13);function f(){var e=s()(["\n  flex-direction: column;\n  background: ",";\n  color: ",";\n"]);return f=function(){return e},e}function p(){var e=s()(["\n  line-height: 30px;\n  flex-direction: row;\n"]);return p=function(){return e},e}function m(){var e=s()(["\n  height: 20px;\n  margin-right: 0.8em;\n  margin-top: 5px;\n  border-right: ",";\n"]);return m=function(){return e},e}function h(){var e=s()(["\n  font-weight: bold;\n  margin-right: 1em;\n  color: ",";\n"]);return h=function(){return e},e}function y(){var e=s()(["\n  min-width: 70px;\n  margin-right: 0.8em;\n  color: ",";\n"]);return y=function(){return e},e}function g(){var e=s()(["\n  ","\n"]);return g=function(){return e},e}var v=d.f.div(g(),function(e){return"system"===e.messageType?"\n      font-style: italic;\n      font-weight: lighter;\n      opacity: 0.5;\n    ":null}),C=d.f.div(y(),function(){return d.d.muted}),b=d.f.div(h(),function(e){return d.d.players[e.playerColorId]}),O=d.f.div(m(),function(e){return"".concat("GM"===e.messageType?"4px":"1px"," solid ").concat(d.d.players[e.playerColorId]||d.d.muted)}),k=Object(d.f)(d.e)(p()),S=Object(d.f)(d.e)(f(),d.d.main,d.d.active),A=function(e){var t=e.onClickAuthor,n=e.onClickContent,o=e.showAuthor,a=e.showTime,c=e.messages;return l.a.createElement(S,null,c.map(function(e,c){var s=e.author,i=e.content,d=u()(e,["author","content"]);return l.a.createElement(k,{key:"".concat(c,":").concat(s)},a&&l.a.createElement(C,null," ","21:05 PM"," "),o&&l.a.createElement(l.a.Fragment,null,l.a.createElement(O,{messageType:d.type,playerColorId:d.playerColorId}),!!s&&l.a.createElement(b,{playerColorId:d.playerColorId,messageType:d.type,onClick:function(){return t(r()({author:s,content:i},d))}},s)),l.a.createElement(v,{onClick:function(){return n(r()({author:s,content:i},d))},messageType:d.type},i))}))};A.defaultProps={messages:[],showAuthor:!1,showTime:!0,onClickAuthor:function(e){return e},onClickContent:function(e){return e}},t.a=A,A.__docgenInfo={description:"",methods:[],displayName:"ChatOutput",props:{messages:{defaultValue:{value:"[]",computed:!1},required:!1},showAuthor:{defaultValue:{value:"false",computed:!1},required:!1},showTime:{defaultValue:{value:"true",computed:!1},required:!1},onClickAuthor:{defaultValue:{value:"f => f",computed:!1},required:!1},onClickContent:{defaultValue:{value:"f => f",computed:!1},required:!1}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ChatOutput/ChatOutput.jsx"]={name:"ChatOutput",docgenInfo:A.__docgenInfo,path:"src/components/ChatOutput/ChatOutput.jsx"})},223:function(e,t,n){"use strict";var o=n(5),r=n.n(o),a=n(70),u=n.n(a),c=n(8),s=n.n(c),i=n(10),l=n.n(i),d=n(15),f=n.n(d),p=n(16),m=n.n(p),h=n(17),y=n.n(h),g=n(25),v=n.n(g),C=n(7),b=n.n(C),O=n(31),k=n.n(O),S=n(0),A=n.n(S),w=n(13);function E(){var e=k()(["\n  display: flex;\n  flex-grow: 1;\n  font-size: 36px;\n  border: none;\n  height: 78px;\n  padding: 22px 19px;\n  background: transparent;\n"]);return E=function(){return e},e}function j(){var e=k()(["\n  background: ",";\n  width: 100%;\n"]);return j=function(){return e},e}var x=Object(w.f)(w.e)(j(),w.d.secondary),_=Object(w.f)(w.c)(E()),I=function(e){function t(){var e,n;s()(this,t);for(var o=arguments.length,r=Array(o),a=0;a<o;a++)r[a]=arguments[a];return n=f()(this,(e=m()(t)).call.apply(e,[this].concat(r))),b()(v()(v()(n)),"state",{message:""}),n}return y()(t,e),l()(t,[{key:"parseCommand",value:function(e){if(!!!e.match(/^(!?[!@#]\w+)(.*)/))return null;var t=e.match(/^(!?[!@#]\w+)(.*)/),n=u()(t,2),o=n[0];n[1];if("!roll"===o){var a=e.match(/\d+d\d+(\+\d+)?/g);return r()({},e,{type:"roll",die:a})}if(/^@\w+/.test(o)){var c=e.match(/^@\w+/),s=u()(c,1)[0];return r()({},e,{type:"whisper",to:s})}return r()({},e,{type:"local"})}},{key:"send",value:function(){var e=this.state.message,t=this.props,n=t.send,o=t.onSend,r=t.clearOnSend;console.log(e),n(e),o(e),r&&this.setState({message:""})}},{key:"render",value:function(){var e=this,t=this.state.message,n=this.props.defaultValue;return A.a.createElement(x,null,A.a.createElement(_,{value:t,defaultValue:n,onChange:function(t){var n=e.props.onChange;e.setState({message:t.target.value}),n(t.target.value)},onKeyDown:function(t){var n=e.props,o=n.onHistoryPrevious,r=n.onHistoryNext,a=e.state.message;"ArrowUp"===t.key&&o(a),"ArrowDown"===t.key&&r(a)},onKeyPress:function(n){var o=e.props,r=o.onKeyPress,a=o.sendOnEnter;if(r(n),"Enter"===n.key){if(!a)return;if(!t.length)return;e.send()}}}))}}]),t}(A.a.Component);I.defaultProps={onChange:function(e){return e},onKeyPress:function(e){return e},onSend:function(e){return e},send:function(e){return e},sendOnEnter:!0,clearOnSend:!0,onHistoryPrevious:function(e){return e},onHistoryNext:function(e){return e},defaultValue:"Talk in #local"},t.a=I,I.__docgenInfo={description:"",methods:[{name:"parseCommand",docblock:null,modifiers:[],params:[{name:"message",type:null}],returns:null},{name:"send",docblock:null,modifiers:[],params:[],returns:null}],displayName:"ChatInput",props:{onChange:{defaultValue:{value:"f => f",computed:!1},required:!1},onKeyPress:{defaultValue:{value:"f => f",computed:!1},required:!1},onSend:{defaultValue:{value:"f => f",computed:!1},required:!1},send:{defaultValue:{value:"f => f",computed:!1},required:!1},sendOnEnter:{defaultValue:{value:"true",computed:!1},required:!1},clearOnSend:{defaultValue:{value:"true",computed:!1},required:!1},onHistoryPrevious:{defaultValue:{value:"f => f",computed:!1},required:!1},onHistoryNext:{defaultValue:{value:"f => f",computed:!1},required:!1},defaultValue:{defaultValue:{value:"'Talk in #local'",computed:!1},required:!1}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ChatInput/ChatInput.jsx"]={name:"ChatInput",docgenInfo:I.__docgenInfo,path:"src/components/ChatInput/ChatInput.jsx"})},243:function(e,t,n){"use strict";n.d(t,"a",function(){return k});var o=n(5),r=n.n(o),a=n(76),u=n.n(a),c=n(8),s=n.n(c),i=n(10),l=n.n(i),d=n(15),f=n.n(d),p=n(16),m=n.n(p),h=n(17),y=n.n(h),g=n(25),v=n.n(g),C=n(7),b=n.n(C),O=n(0),k=function(e){function t(){var e,n;s()(this,t);for(var o=arguments.length,r=Array(o),a=0;a<o;a++)r[a]=arguments[a];return n=f()(this,(e=m()(t)).call.apply(e,[this].concat(r))),b()(v()(v()(n)),"state",{ws:null}),n}return y()(t,e),l()(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.createSocket,n=e.url,o=e.timeout,a=u()(e,["createSocket","url","timeout"]),c=t(n,r()({timeout:o},a));this.setState({ws:c})}},{key:"componentWillUnmount",value:function(){var e=this.state.ws;e&&e.close()}},{key:"render",value:function(){return null}}]),t}(n.n(O).a.Component);k.defaultProps={createSocket:function(e){return e},url:"ws://localhost:8081",timeout:800,onopen:function(e){return e},onmessage:function(e){return e},onreconnect:function(e){return e},onmaximum:function(e){return e},onclose:function(e){return e},onerror:function(e){return e}},k.__docgenInfo={description:"",methods:[],displayName:"Websocket",props:{createSocket:{defaultValue:{value:"f => f",computed:!1},required:!1},url:{defaultValue:{value:"'ws://localhost:8081'",computed:!1},required:!1},timeout:{defaultValue:{value:"800",computed:!1},required:!1},onopen:{defaultValue:{value:"f => f",computed:!1},required:!1},onmessage:{defaultValue:{value:"f => f",computed:!1},required:!1},onreconnect:{defaultValue:{value:"f => f",computed:!1},required:!1},onmaximum:{defaultValue:{value:"f => f",computed:!1},required:!1},onclose:{defaultValue:{value:"f => f",computed:!1},required:!1},onerror:{defaultValue:{value:"f => f",computed:!1},required:!1}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Websocket/Websocket.jsx"]={name:"Websocket",docgenInfo:k.__docgenInfo,path:"src/components/Websocket/Websocket.jsx"})},517:function(e,t,n){"use strict";var o=n(5),r=n.n(o),a=n(0),u=n.n(a),c=n(13),s=n(223),i=n(162),l=function(e){var t=e.messages,n=e.showAuthor,o=e.onClickAuthor,r=e.onClickContent,a=e.onChange,l=e.onKeyPress,d=e.onSend,f=e.send;return u.a.createElement(c.e,null,u.a.createElement(i.a,{messages:t,showAuthor:n,onClickAuthor:o,onClickContent:r}),u.a.createElement(s.a,{onChange:a,onKeyPress:l,onSend:d,send:f}))};l.defaultProps=r()({},s.a.defaultProps,i.a.defaultProps),t.a=l,l.__docgenInfo={description:"",methods:[],displayName:"GameChat"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/pages/GameChat/GameChat.jsx"]={name:"GameChat",docgenInfo:l.__docgenInfo,path:"src/pages/GameChat/GameChat.jsx"})},732:function(e,t,n){"use strict";var o=n(0),r=n.n(o),a=n(13),u=function(e){var t=e.onClick,n=e.command;return r.a.createElement(a.a,{onClick:t},n.name)};u.defaultProps={onClick:function(e){return e},command:{name:"N/A"}},t.a=u,u.__docgenInfo={description:"",methods:[],displayName:"ActionButton",props:{onClick:{defaultValue:{value:"f => f",computed:!1},required:!1},command:{defaultValue:{value:"{\n  name: 'N/A',\n}",computed:!1},required:!1}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ActionButton/ActionButton.jsx"]={name:"ActionButton",docgenInfo:u.__docgenInfo,path:"src/components/ActionButton/ActionButton.jsx"})},733:function(e,t,n){n(244),n(734),e.exports=n(735)},735:function(e,t,n){"use strict";n.r(t),function(e){var t=n(0),o=n.n(t),r=n(45),a=n(13),u=n(748);Object(r.addDecorator)(function(e){return o.a.createElement("div",null,o.a.createElement(a.b,null),e())}),Object(r.configure)(function(){u.keys().forEach(function(e){return u(e)})},e)}.call(this,n(87)(e))},748:function(e,t,n){var o={"./components/ActionButton/stories/ActionButton.stories.jsx":749,"./components/ChatInput/stories/ChatInput.stories.jsx":750,"./components/ChatOutput/stories/ChatOutput.stories.jsx":751,"./components/Websocket/stories/Websocket.stories.jsx":757,"./pages/GameChat/stories/GameChat.stories.jsx":758,"./pages/Login/stories/Login.stories.jsx":759};function r(e){var t=a(e);return n(t)}function a(e){var t=o[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}r.keys=function(){return Object.keys(o)},r.resolve=a,e.exports=r,r.id=748},749:function(e,t,n){"use strict";n.r(t),function(e){var t=n(44),o=n.n(t),r=n(0),a=n.n(r),u=n(45),c=n(20),s=n(732),i={onClick:Object(c.action)("clicked action")},l={command:{name:"Sheet"}};Object(u.storiesOf)("Components/ActionButton",e).add("default",function(){return a.a.createElement(s.a,o()({},i,l))})}.call(this,n(87)(e))},750:function(e,t,n){"use strict";n.r(t),function(e){var t=n(44),o=n.n(t),r=n(0),a=n.n(r),u=n(45),c=n(20),s=n(223),i={onChange:Object(c.action)("value changed"),onKeyPress:Object(c.action)("key press"),onSend:Object(c.action)("send"),send:Object(c.action)("send message")},l={};Object(u.storiesOf)("Components/ChatInput",e).add("default",function(){return a.a.createElement(s.a,o()({},i,l))})}.call(this,n(87)(e))},751:function(e,t,n){"use strict";n.r(t),function(e){var t=n(5),o=n.n(t),r=n(0),a=n.n(r),u=n(45),c=n(20),s=n(102),i=n(162),l={onClickContent:Object(c.action)("clicked content"),onClickAuthor:Object(c.action)("clicked author")},d={messages:[{content:"Connected!"},{content:"166.24.xx.xx connected"},{author:"WOWF",content:a.a.createElement("p",null,"Welcome to the World of Wanders and Fables (aka WOWF) click ",a.a.createElement("a",{href:"http://wolfwares.ca-dstory"},"http://wolfwares.ca-dstory")," for live map, chr sheet, livestream, etc.. all the goodies!")},{author:"Neon",content:"I've automatically logged into RXP"},{author:"Neon",content:"Isn't that cool?"}]};Object(u.storiesOf)("Components/ChatOutput",e).addDecorator(s.withKnobs).add("default",function(){var e=Object(s.boolean)("showAuthor?",!1),t=o()({},l,d,{showAuthor:e});return a.a.createElement(i.a,t)}).add("messages types",function(){var e=o()({},l,{showAuthor:!0,messages:[{type:"system",content:"Connected!"},{type:"GM",author:"WOWF",content:"Hello, this is your GM speaking.",playerColorId:0},{author:"player1",content:"Hello, this is Bobby speaking...",playerColorId:1},{author:"player2",content:"Hello, this is Jane speaking...",playerColorId:2},{author:"player3",content:"rolled 9",result:9,dice:[{type:"d4",qty:1,mod:2,total:3},{type:"d8",qty:1,total:6}],type:"roll",playerColorId:3},{author:"player1",content:"rolled 35",result:35,dice:[{type:"d6",qty:8,mod:8,total:35}],type:"roll",playerColorId:1},{author:"player1",content:"Hello, this is Bobby speaking... Hello, this is Bobby speaking... Hello, this is Bobby speaking... Hello, this is Bobby speaking... Hello, this is Bobby speaking... Hello, this is Bobby speaking... Hello, this is Bobby speaking... Hello, this is Bobby speaking... Hello, this is Bobby speaking...  Hello, this is Bobby speaking... Hello, this is Bobby speaking...",playerColorId:1},{type:"system",content:"Connected to WOWF as Player3"},{type:"system",content:"Welcome Player4 (123.123.123.123 connected)"},{type:"whisper",author:"Storybook",dest:"player-123",content:'Hello "player-123", only you and I can read this.'},{type:"whisper",author:"Storybook",dest:"player-234",content:'Hello "player-234", only you and I can read this.'},{type:"whisper",author:"Storybook",dest:"player-XXX",content:'Hello "player-XXX", only you and I can read this.'}]});return a.a.createElement(i.a,e)})}.call(this,n(87)(e))},757:function(e,t,n){"use strict";n.r(t),function(e){var t=n(44),o=n.n(t),r=n(0),a=n.n(r),u=n(45),c=n(20),s=n(102),i=n(242),l=n(243),d={onopen:Object(c.action)("open"),onmessage:Object(c.action)("message"),onreconnect:Object(c.action)("reconnect"),onmaximum:Object(c.action)("max retries"),onclose:Object(c.action)("close"),onerror:Object(c.action)("error"),createSocket:function(){return{close:Object(c.action)("closing socket")}}};Object(u.storiesOf)("Websocket",e).addDecorator(s.withKnobs).add("test connection",function(){return a.a.createElement(l.a,o()({},d,{createSocket:function(e,t){return new i.a(e,t)}}))})}.call(this,n(87)(e))},758:function(e,t,n){"use strict";n.r(t),function(e){var t=n(5),o=n.n(t),r=n(59),a=n.n(r),u=n(8),c=n.n(u),s=n(10),i=n.n(s),l=n(15),d=n.n(l),f=n(16),p=n.n(f),m=n(17),h=n.n(m),y=n(25),g=n.n(y),v=n(7),C=n.n(v),b=n(31),O=n.n(b),k=n(0),S=n.n(k),A=n(45),w=n(20),E=n(102),j=n(242),x=n(243),_=n(517),I=n(13);function B(){var e=O()(["\n    * { \n      width: 100%;\n      flex-direction: column;\n    }\n\n    "," {\n      font-size: 36px;\n    }\n  "]);return B=function(){return e},e}var T={onClickContent:Object(w.action)("clicked content"),onClickAuthor:Object(w.action)("clicked author")};Object(A.storiesOf)("Pages/GameChat",e).addDecorator(E.withKnobs).addDecorator(function(e){var t=Object(I.f)(I.e)(B(),I.c);return S.a.createElement(t,null,e())}).add("default",function(){return S.a.createElement(_.a,T)}).add("demo messages",function(){var e=function(e){function t(){var e,n;c()(this,t);for(var o=arguments.length,r=Array(o),a=0;a<o;a++)r[a]=arguments[a];return n=d()(this,(e=p()(t)).call.apply(e,[this].concat(r))),C()(g()(g()(n)),"state",{ws:null,messages:[{content:"logged in as Storybook"}]}),n}return h()(t,e),i()(t,[{key:"render",value:function(){var e=this,t=o()({},T,{messages:this.state.messages,send:function(t){var n=e.state.ws,o={author:"Storybook",content:t,time:e.state.messages.length};e.setState({messages:a()(e.state.messages).concat([o])}),n.send(JSON.stringify(o))},showAuthor:Object(E.boolean)("show author?",!0),onSend:Object(w.action)("gamechat: message sent")});return S.a.createElement(S.a.Fragment,null,S.a.createElement(x.a,{createSocket:function(t,n){var o=new j.a(t,n);return e.setState({ws:o}),o},onmessage:function(t){var n=e.state,o=n.ws,r=n.messages;if(o){var u=t.data,c=JSON.parse(u);e.setState({messages:a()(r).concat([c])})}}}),S.a.createElement(_.a,t))}}]),t}(S.a.Component);return S.a.createElement(e,null)})}.call(this,n(87)(e))},759:function(e,t,n){"use strict";n.r(t),function(e){var t=n(0),o=n.n(t),r=n(45);n(20);Object(r.storiesOf)("Pages/Login",e).add("welcome",function(){return o.a.createElement("div",null,"welcome to rpgchat")})}.call(this,n(87)(e))}},[[733,3,2]]]);
//# sourceMappingURL=iframe.06e5a606abaec91e7ce5.bundle.js.map