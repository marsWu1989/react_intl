webpackJsonp([12],{332:function(e,t,n){var o,i,r;!function(n,u){i=[t,e],o=u,r="function"==typeof o?o.apply(t,i):o,!(void 0!==r&&(e.exports=r))}(this,function(e,t){"use strict";function n(){return"jsonp_"+Date.now()+"_"+Math.ceil(1e5*Math.random())}function o(e){try{delete window[e]}catch(t){window[e]=void 0}}function i(e){var t=document.getElementById(e);document.getElementsByTagName("head")[0].removeChild(t)}function r(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],r=e,a=t.timeout||u.timeout,c=t.jsonpCallback||u.jsonpCallback,l=void 0;return new Promise(function(u,s){var f=t.jsonpCallbackFunction||n(),p=c+"_"+f;window[f]=function(e){u({ok:!0,json:function(){return Promise.resolve(e)}}),l&&clearTimeout(l),i(p),o(f)},r+=r.indexOf("?")===-1?"?":"&";var d=document.createElement("script");d.setAttribute("src",""+r+c+"="+f),d.id=p,document.getElementsByTagName("head")[0].appendChild(d),l=setTimeout(function(){s(new Error("JSONP request to "+e+" timed out")),o(f),i(p)},a)})}var u={timeout:5e3,jsonpCallback:"callback",jsonpCallbackFunction:null};t.exports=r})},402:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=n(300),l=o(c),s=n(303),f=n(403),p=n(405),d=o(p),m=function(e){function t(){return i(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),a(t,[{key:"componentWillMount",value:function(){var e=this.props.dispatch;console.log(this.props),e((0,f.joinDetailPost)(this.props.params.id))}},{key:"render",value:function(){return l.default.createElement("div",{className:d.default.AjoinDetail},"111")}}]),t}(c.Component);t.default=(0,s.connect)(function(e){return{data:e}})(m)},403:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.joinDetailPost=t.joinDetailReceive=t.joinDetailRequest=void 0;var i=n(332),r=o(i),u=n(404),a=t.joinDetailRequest=function(e){return{type:u.JOIN_DETAIL_REQUEST,amount:e}},c=t.joinDetailReceive=function(e,t){return{type:u.JOIN_DETAIL_RECEIVE,amount:e,data:t}};t.joinDetailPost=function(e){return function(t){return t(a(e)),(0,r.default)("http://0.0.0.0:9527/api/gw/getRecruitInfo?id="+e+"&callback=123").then(function(e){return e.status>=400&&console.log("net work fail"),e.json()}).then(function(n){t(c(e,n.data))}).catch(function(e){return console.log("parsing failed",e)})}}},405:function(e,t){e.exports={AjoinDetail:"AjoinDetail_AjoinDetail"}}});
//# sourceMappingURL=AjoinDetail_fef97.js.map