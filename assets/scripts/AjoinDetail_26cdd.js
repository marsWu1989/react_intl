webpackJsonp([12],{320:function(e,t,n){e.exports=n(295)(258)},322:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={domain:"http://0.0.0.0:9527",static:""};t.default=n},417:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(300),c=o(l),f=n(303),s=n(418),d=n(420),p=o(d),m=function(e){function t(){return a(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),u(t,[{key:"componentDidMount",value:function(){var e=this.props.dispatch;e((0,s.joinDetailPost)(this.props.params.id))}},{key:"render",value:function(){var e=this.props.data.joinDetail.data;return c.default.createElement("div",{className:p.default.AjoinDetail},c.default.createElement("div",{className:p.default.title},e.title),c.default.createElement("div",{className:p.default.text},c.default.createElement("h3",null,"岗位职责"),c.default.createElement("div",{dangerouslySetInnerHTML:{__html:e.gwzz}})),c.default.createElement("div",{className:p.default.text},c.default.createElement("h3",null,"任职要求"),c.default.createElement("div",{dangerouslySetInnerHTML:{__html:e.rzyq}})),c.default.createElement("div",{className:p.default.button},c.default.createElement("a",{href:"mailto:hr@moji.com"},"申请职位")))}}]),t}(l.Component);t.default=(0,f.connect)(function(e){return{data:e}})(m)},418:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.joinDetailPost=t.joinDetailReceive=t.joinDetailRequest=void 0,n(320);var a=n(419),i=n(322),r=o(i),u=t.joinDetailRequest=function(e){return{type:a.JOIN_DETAIL_REQUEST,amount:e}},l=t.joinDetailReceive=function(e,t){return{type:a.JOIN_DETAIL_RECEIVE,amount:e,data:t}};t.joinDetailPost=function(e){return function(t){return t(u(e)),fetch(r.default.domain+"/api/join/"+e).then(function(e){return e.status>=400&&console.log("net work fail"),e.json()}).then(function(n){t(l(e,n.data))}).catch(function(e){return console.log("parsing failed",e)})}}},420:function(e,t){e.exports={AjoinDetail:"AjoinDetail_AjoinDetail",title:"AjoinDetail_title",text:"AjoinDetail_text",button:"AjoinDetail_button"}}});
//# sourceMappingURL=AjoinDetail_26cdd.js.map