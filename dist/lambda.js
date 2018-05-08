module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var u=t[r]={i:r,l:!1,exports:{}};return e[r].call(u.exports,u,u.exports,n),u.l=!0,u.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=23)}([function(e,t){e.exports=require("react-redux")},function(e,t){e.exports=require("react")},function(e,t){e.exports=require("styled-components")},function(e,t){e.exports=require("redux")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];switch(arguments[1].type){case"LOGIN":return!0;case"LOGOUT":return!1;default:return e}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,u=n(3),o=n(4),l=(r=o)&&r.__esModule?r:{default:r};var i=(0,u.combineReducers)({isLoggedIn:l.default});t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(["\n  font-size: 2rem;\n  color: darkblue;\n"],["\n  font-size: 2rem;\n  color: darkblue;\n"]),u=a(["\n  font-size: 1rem;\n  padding: 1rem;\n  background: yellowgreen;\n"],["\n  font-size: 1rem;\n  padding: 1rem;\n  background: yellowgreen;\n"]),o=a(["\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"],["\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]),l=c(n(1)),i=c(n(2));function c(e){return e&&e.__esModule?e:{default:e}}function a(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var d=i.default.h1(r),f=i.default.button(u),s=i.default.div(o);t.default=function(e){var t=e.dispatch;return l.default.createElement(s,null,l.default.createElement(d,null,"You aren't Logged In!"),l.default.createElement(f,{onClick:function(){return t({type:"LOGIN"})}},"LOGIN"))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,u=n(0),o=n(6),l=(r=o)&&r.__esModule?r:{default:r};t.default=(0,u.connect)()(l.default)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(["\n  font-size: 2rem;\n  color: darkblue;\n"],["\n  font-size: 2rem;\n  color: darkblue;\n"]),u=a(["\n  font-size: 1rem;\n  padding: 1rem;\n  background: skyblue;\n"],["\n  font-size: 1rem;\n  padding: 1rem;\n  background: skyblue;\n"]),o=a(["\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"],["\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]),l=c(n(1)),i=c(n(2));function c(e){return e&&e.__esModule?e:{default:e}}function a(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var d=i.default.h1(r),f=i.default.button(u),s=i.default.div(o);t.default=function(e){var t=e.dispatch;return l.default.createElement(s,null,l.default.createElement(d,null,"You are Logged In! Welcome!"),l.default.createElement(f,{onClick:function(){return t({type:"LOGOUT"})}},"LOGOUT"))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,u=n(0),o=n(8),l=(r=o)&&r.__esModule?r:{default:r};t.default=(0,u.connect)()(l.default)},function(e,t){e.exports=require("react-router-dom")},function(e,t){e.exports=require("prop-types")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(n(1)),u=a(n(11)),o=n(10),l=a(n(9)),i=a(n(7)),c=n(0);function a(e){return e&&e.__esModule?e:{default:e}}var d=function(e){return e.isLoggedIn?r.default.createElement(o.Switch,null,r.default.createElement(o.Route,{exact:!0,path:"/",component:l.default}),r.default.createElement(o.Redirect,{to:"/"})):r.default.createElement(o.Switch,null,r.default.createElement(o.Route,{exact:!0,path:"/",component:i.default}),r.default.createElement(o.Redirect,{to:"/"}))};d.propTypes={isLoggedIn:u.default.bool.isRequired};t.default=(0,c.connect)(function(e){return{isLoggedIn:e.isLoggedIn}},null)(d)},function(e,t){e.exports=require("react-helmet")},function(e,t){e.exports=require("react-router")},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("fs")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=p(n(1)),u=n(16),o=n(15),l=n(3),i=n(0),c=n(14),a=n(13),d=p(n(12)),f=n(2),s=p(n(5));function p(e){return e&&e.__esModule?e:{default:e}}JSON.parse((0,u.readFileSync)("./dist/public/manifest.json","utf8"));t.default=function(e,t){var n=(0,l.createStore)(s.default),u=new f.ServerStyleSheet,p=(0,o.renderToString)(u.collectStyles(r.default.createElement(i.Provider,{store:n},r.default.createElement(c.StaticRouter,{location:e.url,context:{}},r.default.createElement(d.default,null))))),m=u.getStyleTags(),v=n.getState(),g='\n    <!DOCTYPE html>\n    <html>\n      <head>\n        <meta charset="UTF-8">\n        <meta http-equiv="X-UA-Compatible" content="ie=edge">\n        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">\n        '+m+"\n        "+a.Helmet.renderStatic().title.toString()+'\n      </head>\n      <body>\n        <div id="root">'+p+"</div>\n      </body>\n      <script>\n        window.PRELOADED_STATE = "+JSON.stringify(v)+"\n      <\/script>\n      <script src=https://s3.ap-northeast-2.amazonaws.com/small-wins-static><\/script>\n    </html>\n  ";t.send(g)}},function(e,t){e.exports=require("morgan")},function(e,t){e.exports=require("helmet")},function(e,t){e.exports=require("express")},function(e,t,n){"use strict";var r=i(n(20)),u=i(n(19)),o=i(n(18)),l=i(n(17));function i(e){return e&&e.__esModule?e:{default:e}}var c=(0,r.default)().use((0,u.default)()).use((0,o.default)("dev")).use(r.default.json()).use(r.default.urlencoded({extended:!0}));c.get("*",l.default),e.exports=c},function(e,t){e.exports=require("aws-serverless-express")},function(e,t,n){"use strict";var r=n(22),u=n(21),o=r.createServer(u);t.handler=function(e,t){console.log(e),r.proxy(o,e,t)}}]);