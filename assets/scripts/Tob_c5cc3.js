webpackJsonp([5],{306:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),d=a(300),s=l(d),i=a(307),o=l(i),f=function(e){function t(e){n(this,t);var a=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={display:!1},a}return r(t,e),c(t,[{key:"handleShowOrHide",value:function(){this.setState({display:!this.state.display})}},{key:"render",value:function(){var e=this,t=this.props.data.data,a=[],l=[];if(t.alerts.length>0){var n=o.default["level_"+t.alerts[0].level_no];a.push(s.default.createElement("div",{className:o.default.alertContent,key:"alert"},s.default.createElement("i",{className:n},s.default.createElement("img",{src:"http://cdn.moji.com/f5/weather/warn/warn_"+t.alerts[0].name_no+".png",alt:t.alerts[0].name_no})),s.default.createElement("b",null,t.alerts[0].type,"预警")))}for(var u=0;u<=t.forecastDayList.length-1;u++){var r=t.forecastDayList[u];if(t.forecastaqi[r.Fpredict_date]){var c=t.forecastaqi[r.Fpredict_date].desc,d=o.default["level_"+t.forecastaqi[r.Fpredict_date].level];c.length>2&&(c=c.substring(0,2)),l.push(s.default.createElement("li",{className:o.default.item,key:u},s.default.createElement("span",{className:o.default.week},t.forecastaqi[r.Fpredict_date].week),s.default.createElement("span",{className:o.default.date},t.forecastaqi[r.Fpredict_date].day),s.default.createElement("span",{className:o.default.temp},r.Ftemp_high),s.default.createElement("i",{className:o.default.icon},s.default.createElement("img",{src:"https://h5tq.moji.com/mtianqi/assets/images/wea/w"+r.Ficon_day+".png",alt:r.Ficon_day})),s.default.createElement("span",{className:o.default.wea},r.Fcondition_day),s.default.createElement("span",{className:o.default.wind},r.Fwind_dir_day),s.default.createElement("b",{className:d},c)))}else l.push(s.default.createElement("li",{className:o.default.item,key:u},s.default.createElement("span",{className:o.default.week},"无"),s.default.createElement("span",{className:o.default.date},"无"),s.default.createElement("span",{className:o.default.temp},"无"),s.default.createElement("i",{className:o.default.icon},"无"),s.default.createElement("span",{className:o.default.wea},"无"),s.default.createElement("span",{className:o.default.wind},"无"),s.default.createElement("b",{className:o.default.level},"无")))}var i=o.default.hide;return i=this.state.display?o.default.show:o.default.hide,s.default.createElement("div",{className:o.default.head},s.default.createElement("logo",{className:o.default.logo}),s.default.createElement("div",{className:o.default.weather,onClick:function(){return e.handleShowOrHide()}},s.default.createElement("b",null,t.city.name," ",t.city.pname),s.default.createElement("span",null,t.condition.Ftemp),s.default.createElement("i",null,s.default.createElement("img",{src:"https://h5tq.moji.com/mtianqi/assets/images/wea/w"+t.condition.Ficon+".png",alt:t.condition.Ficon}))),s.default.createElement("div",{className:i},s.default.createElement("div",{className:o.default.title},s.default.createElement("div",{className:o.default.alert},a,s.default.createElement("b",null,t.time.monthG),s.default.createElement("span",null,"农历 ",t.time.monthN)),s.default.createElement("a",{href:"http://m.moji.com/",className:o.default.more},"更多")),s.default.createElement("div",{className:o.default.items},s.default.createElement("ul",null,l))))}}]),t}(d.Component);t.default=f},307:function(e,t){e.exports={head:"Header_head",title:"Header_title",items:"Header_items",level_1:"Header_level_1",level_2:"Header_level_2",level_3:"Header_level_3",level_4:"Header_level_4",level_5:"Header_level_5",level_6:"Header_level_6",logo:"Header_logo",weather:"Header_weather",hide:"Header_hide",show:"Header_show",alert:"Header_alert",alertContent:"Header_alertContent",more:"Header_more",item:"Header_item",week:"Header_week",wea:"Header_wea",temp:"Header_temp",wind:"Header_wind",date:"Header_date",icon:"Header_icon"}},308:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),d=a(300),s=l(d),i=a(302),o=a(309),f=l(o),m=function(e){function t(e){n(this,t);var a=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={display:!1},a}return r(t,e),c(t,[{key:"handleShowOrHide",value:function(){this.setState({display:!this.state.display})}},{key:"render",value:function(){var e=this,t=this.props.router,a=f.default.home,l=f.default.download;switch(t){case"/":a=f.default.homeCur;break;case"/downlaod":l=f.default.downloadCur;break;default:a=f.default.home,l=f.default.download}var n=f.default.hide;return n=this.state.display?f.default.show:f.default.hide,s.default.createElement("div",{className:f.default.nav},s.default.createElement(i.Link,{to:"/",className:a}),s.default.createElement(i.Link,{to:"/downlaod",className:l}),s.default.createElement("button",{className:f.default.menu,onClick:function(){return e.handleShowOrHide()}}),s.default.createElement("div",{className:n},s.default.createElement("ul",{className:f.default.items},s.default.createElement("li",null,s.default.createElement(i.Link,{to:"/"},"首页")),s.default.createElement("li",null,s.default.createElement(i.Link,{to:"/downlaod"},"下载")),s.default.createElement("li",null,s.default.createElement(i.Link,{to:"/tob"},"天气服务")),s.default.createElement("li",null,s.default.createElement(i.Link,{to:"/news"},"资讯")),s.default.createElement("li",null,s.default.createElement(i.Link,{to:"/about"},"关于墨迹")))))}}]),t}(d.Component);t.default=m},309:function(e,t){e.exports={nav:"Nav_nav",home:"Nav_home",homeCur:"Nav_homeCur",download:"Nav_download",downloadCur:"Nav_downloadCur",menu:"Nav_menu",hide:"Nav_hide",show:"Nav_show",items:"Nav_items"}},316:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),d=a(300),s=l(d),i=a(317),o=l(i),f=function(e){function t(e){n(this,t);var a=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={display:!1,top:null},a._handleScroll=a.handleScroll.bind(a),a}return r(t,e),c(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this._handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this._handleScroll)}},{key:"handleScroll",value:function(){var e=document.documentElement.scrollTop||document.body.scrollTop;e>0?this.setState({display:!0,top:e}):this.setState({display:!1,top:e})}},{key:"handleToScrollTop",value:function(){var e=this.state.top,t=setInterval(function(){e-=50,document.body.scrollTop=e,document.documentElement.scrollTop=e,e<=0&&clearInterval(t)},10);this.setState({display:!1})}},{key:"render",value:function(){var e=this,t=o.default.hide;return t=this.state.display?o.default.show:o.default.hide,s.default.createElement("toTop",{className:t,onClick:function(){return e.handleToScrollTop()}})}}]),t}(d.Component);t.default=f},317:function(e,t){e.exports={hide:"ToTop_hide",show:"ToTop_show"}},332:function(e,t,a){e.exports=a(295)(258)},342:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),d=a(300),s=l(d),i=a(303),o=a(306),f=l(o),m=a(308),p=l(m),v=a(343),E=l(v),b=a(347),h=l(b),_=a(349),N=l(_),y=a(351),T=l(y),w=a(353),x=l(w),k=a(355),O=l(k),g=a(316),j=l(g),C=a(358),P=l(C),I=a(344),S=function(e){function t(){return n(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),c(t,[{key:"componentWillMount",value:function(){var e=this.props.dispatch;e((0,I.tobNumPost)())}},{key:"render",value:function(){var e=this.props,t=e.forecast,a=e.tobNum;return a.data?(console.log(a.data.data.data[0].num),s.default.createElement("div",{className:P.default.box},s.default.createElement(f.default,{data:t}),s.default.createElement(p.default,null),s.default.createElement(E.default,{data:a}),s.default.createElement(h.default,null),s.default.createElement(N.default,null),s.default.createElement(T.default,null),s.default.createElement(x.default,null),s.default.createElement(O.default,null),s.default.createElement(j.default,null))):s.default.createElement("div",null,"loading")}}]),t}(d.Component),H=function(e){var t=e.tobNum,a=e.forecast;return{tobNum:t,forecast:a}};t.default=(0,i.connect)(H)(S)},343:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),d=a(300),s=l(d),i=a(303),o=(a(344),a(346)),f=l(o),m=function(e){function t(e){n(this,t);var a=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={num:1,arr:[s.default.createElement("li",{className:f.default.spotCur,key:"1"}),s.default.createElement("li",{className:f.default.spot,key:"2"}),s.default.createElement("li",{className:f.default.spot,key:"3"}),s.default.createElement("li",{className:f.default.spot,key:"4"})],apiNum:null,startX:null},a}return r(t,e),c(t,[{key:"onTouchStart",value:function(){var e=event.changedTouches[0].pageX;this.setState({startX:e})}},{key:"onTouchEnd",value:function(){var e=this.state.startX,t=event.changedTouches[0].pageX,a=this.state.num;1!==a&&e<t?a--:4!==a&&e>t&&a++,this.handleTab(a),this.handleSpot(a),this.setState({num:a})}},{key:"handleTab",value:function(e){var t=this.refs.bannerItem,a=this.refs.Tbanner.offsetWidth,l=e;t.style.left=-(l-1)*a+"px"}},{key:"handleSpot",value:function(e){for(var t=[],a=e,l=0;l<=3;l++)l===a-1?t.push(s.default.createElement("li",{className:f.default.spotCur,key:l})):t.push(s.default.createElement("li",{className:f.default.spot,key:l}));this.setState({arr:t})}},{key:"formatNum",value:function(e){for(var t=e,a=/(\d+)(\d{3})/;a.test(t);)t=t.replace(a,"$1,$2");return!1}},{key:"render",value:function(){var e=this,t=this.props.data.data.data;return t=t?t[0].num:null,s.default.createElement("div",{className:f.default.Tbanner,ref:"Tbanner"},s.default.createElement("div",{className:f.default.bannerItem,ref:"bannerItem",onTouchStart:function(){return e.onTouchStart()},onTouchEnd:function(){return e.onTouchEnd()}},s.default.createElement("div",{className:f.default.server},s.default.createElement("div",{className:f.default.title},"墨迹天气MWS"),s.default.createElement("div",{className:f.default.desc},"MOJi Weather Server",s.default.createElement("br",null),"提供更全面、更准确、更稳定的气象数据"),s.default.createElement("div",{className:f.default.line}),s.default.createElement("div",{className:f.default.desc},"已准确稳定服务"),s.default.createElement("div",{className:f.default.num},s.default.createElement("ul",null,this.formatNum(t)),"次")),s.default.createElement("div",{className:f.default.overall},s.default.createElement("div",{className:f.default.title},"数据内容全面"),s.default.createElement("div",{className:f.default.desc},"提供包括国内4000多个城市及景点",s.default.createElement("br",null),"以及全球20万个城市的实况、",s.default.createElement("br",null),"预报、AQI、生活指数、预警等天气数据")),s.default.createElement("div",{className:f.default.accurate},s.default.createElement("div",{className:f.default.title},"数据专业 精准"),s.default.createElement("div",{className:f.default.desc},"国内外多家权威数据源融合",s.default.createElement("br",null),"墨迹天气UGC数据、时景数据等作为补充")),s.default.createElement("div",{className:f.default.stable},s.default.createElement("div",{className:f.default.title},"系统稳定性高"),s.default.createElement("div",{className:f.default.desc},"完美支持高并发，更合理的负载均衡",s.default.createElement("br",null),"系统服务可用性达到99.9%以上"))),s.default.createElement("div",{className:f.default.spotBox},s.default.createElement("ul",null,this.state.arr)))}}]),t}(d.Component);t.default=(0,i.connect)()(m)},344:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.tobNumPost=t.tobNumReceive=t.tobNumRequest=void 0,a(332);var l=a(345),n=t.tobNumRequest=function(){return{type:l.TOBNUM_REQUEST}},u=t.tobNumReceive=function(e){return{type:l.TOBNUM_RECEIVE,data:e}};t.tobNumPost=function(){return function(e){return e(n()),fetch("http://0.0.0.0:9527/api/tob").then(function(e){return e.status>=400&&console.log("net work fail"),e.json()}).then(function(t){e(u(t))}).catch(function(e){return console.log("parsing failed",e)})}}},346:function(e,t){e.exports={Tbanner:"Tbanner_Tbanner",bannerItem:"Tbanner_bannerItem",server:"Tbanner_server",overall:"Tbanner_overall",accurate:"Tbanner_accurate",stable:"Tbanner_stable",title:"Tbanner_title",desc:"Tbanner_desc",line:"Tbanner_line",num:"Tbanner_num",number:"Tbanner_number",spotBox:"Tbanner_spotBox",spot:"Tbanner_spot",spotCur:"Tbanner_spotCur"}},347:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(){return r.default.createElement("div",{className:d.default.Tinfo},r.default.createElement("div",{className:d.default.title},"为企业和开发者提供最专业的",r.default.createElement("br",null),"全球气象数据服务"),r.default.createElement("div",{className:d.default.price},r.default.createElement("div",{className:d.default.priceIcon}),r.default.createElement("div",{className:d.default.priceText},r.default.createElement("b",null,"0.88"),r.default.createElement("span",null,"万次起")),r.default.createElement("div",{className:d.default.btu},"了解更多")),r.default.createElement("div",{className:d.default.desc},r.default.createElement("ul",null,r.default.createElement("li",{className:d.default.item},r.default.createElement("div",{className:d.default.overallIcon},"内容全面"),r.default.createElement("div",{className:d.default.descText},"提供包括国内4000多个城市及景点以及全球20万个城市的实况、预报、AQI、生活指数、预警等天气数据。")),r.default.createElement("li",{className:d.default.item},r.default.createElement("div",{className:d.default.accurateIcon},"专业精准"),r.default.createElement("div",{className:d.default.descText},"国内外多家权威数据源融合，墨迹天气UGC数据、时   景数据等作为补充。")),r.default.createElement("li",{className:d.default.item},r.default.createElement("div",{className:d.default.stableIcon},"系统稳定"),r.default.createElement("div",{className:d.default.descText},"完美支持高并发，更合理的负载均衡系统服务可用性达到99.9%以上。")))))}Object.defineProperty(t,"__esModule",{value:!0});var u=a(300),r=l(u),c=a(348),d=l(c);t.default=n},348:function(e,t){e.exports={item:"Tinfo_item",Tinfo:"Tinfo_Tinfo",title:"Tinfo_title",price:"Tinfo_price",priceIcon:"Tinfo_priceIcon",priceText:"Tinfo_priceText",btu:"Tinfo_btu",desc:"Tinfo_desc",overallIcon:"Tinfo_overallIcon",accurateIcon:"Tinfo_accurateIcon",stableIcon:"Tinfo_stableIcon",descText:"Tinfo_descText"}},349:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),d=a(300),s=l(d),i=a(302),o=a(350),f=l(o),m=function(e){function t(e){n(this,t);var a=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={curIndex:0,tabs:[{tabName:"Lite版",id:1},{tabName:"Basic版",id:2},{tabName:"Pro版",id:3},{tabName:"Final版",id:4}],content:[[s.default.createElement("div",{key:"1"},s.default.createElement("div",{className:f.default.tabTitle},"天气预报lite版"),s.default.createElement("div",{className:f.default.tabDesc},"国内全部城市（4000个）及国外主要城市（约20W）"),s.default.createElement("div",{className:f.default.price},"￥",s.default.createElement("b",null,"0.88"),"/万次"),s.default.createElement("div",{className:f.default.tabDesc},"20元/月 原价26元"),s.default.createElement(i.Link,{to:"11",className:f.default.btu},"定制"),s.default.createElement("line",{className:f.default.line}),s.default.createElement("div",{className:f.default.tabTitle},"数据"),s.default.createElement("div",{className:f.default.text},"实时天气数据：温度、风向、风速、AQI"),s.default.createElement("div",{className:f.default.text},"逐小时预报类：温度、湿度、风向、风速、云量（未来3天逐小时）"),s.default.createElement("div",{className:f.default.grey},"独家预报类：分钟级降水预报(X)"),s.default.createElement("div",{className:f.default.through},"空气质量"),s.default.createElement("div",{className:f.default.through},"气象灾害预警"),s.default.createElement("div",{className:f.default.through},"生活指数及尾号限行"),s.default.createElement("line",{className:f.default.line}),s.default.createElement("div",{className:f.default.tabTitle},"服务"),s.default.createElement("div",{className:f.default.text},"访问量限额：1万次/天"),s.default.createElement("div",{className:f.default.text},"查询方式：cityid、经纬度"),s.default.createElement("div",{className:f.default.text},"服务器与网络带宽：共享"),s.default.createElement("div",{className:f.default.text},"技术支持网络：Email、QQ"),s.default.createElement("div",{className:f.default.text},"历史数据、更多数据（需要独立对接）"))],[s.default.createElement("div",{key:"2"},s.default.createElement("div",{className:f.default.tabTitle},"天气预报Basic版"),s.default.createElement("div",{className:f.default.tabDesc},"国内全部城市（4000个）及国外主要城市（约20W）"),s.default.createElement("div",{className:f.default.price},"￥",s.default.createElement("b",null,"3.88"),"/万次"),s.default.createElement("div",{className:f.default.tabDesc},"388元/月 原价582元"),s.default.createElement(i.Link,{to:"11",className:f.default.btu},"定制"),s.default.createElement("line",{className:f.default.line}),s.default.createElement("div",{className:f.default.tabTitle},"数据"),s.default.createElement("div",{className:f.default.text},"实时天气数据：温度、风向、风速、AQI"),s.default.createElement("div",{className:f.default.text},"逐小时预报类：温度、湿度、风向、风速、云量（未来3天逐小时）"),s.default.createElement("div",{className:f.default.through},"独家预报类：分钟级降水预报(X)"),s.default.createElement("div",{className:f.default.through},"空气质量"),s.default.createElement("div",{className:f.default.through},"气象灾害预警"),s.default.createElement("div",{className:f.default.text},"仅提供尾号限行"),s.default.createElement("line",{className:f.default.line}),s.default.createElement("div",{className:f.default.tabTitle},"服务"),s.default.createElement("div",{className:f.default.text},"访问量限额：1万次/天"),s.default.createElement("div",{className:f.default.text},"查询方式：cityid、经纬度"),s.default.createElement("div",{className:f.default.text},"服务器与网络带宽：共享"),s.default.createElement("div",{className:f.default.text},"技术支持网络：Email、QQ"),s.default.createElement("div",{className:f.default.text},"历史数据、更多数据（需要独立对接）"))],[s.default.createElement("div",{key:"3"},s.default.createElement("div",{className:f.default.tabTitle},"天气预报Pro版"),s.default.createElement("div",{className:f.default.tabDesc},"国内全部城市（4000个）及国外主要城市（约20W）"),s.default.createElement("div",{className:f.default.price},"￥",s.default.createElement("b",null,"5.88"),"/万次"),s.default.createElement("div",{className:f.default.tabDesc},"3388元/月 原价3528元"),s.default.createElement(i.Link,{to:"11",className:f.default.btu},"定制"),s.default.createElement("line",{className:f.default.line}),s.default.createElement("div",{className:f.default.tabTitle},"数据"),s.default.createElement("div",{className:f.default.text},"实时天气数据：温度、风向、风速、AQI"),s.default.createElement("div",{className:f.default.text},"逐小时预报类：温度、湿度、风向、风速、云量（未来五天逐小时，未来十五天逐日）"),s.default.createElement("div",{className:f.default.through},"独家预报类：分钟级降水预报(X)"),s.default.createElement("div",{className:f.default.text},"空气质量：未来五天逐日AQI"),s.default.createElement("div",{className:f.default.text},"气象灾害预警"),s.default.createElement("div",{className:f.default.text},"仅提供尾号限行"),s.default.createElement("line",{className:f.default.line}),s.default.createElement("div",{className:f.default.tabTitle},"服务"),s.default.createElement("div",{className:f.default.text},"访问量限额：1万次/天"),s.default.createElement("div",{className:f.default.text},"查询方式：cityid、经纬度"),s.default.createElement("div",{className:f.default.text},"服务器与网络带宽：共享"),s.default.createElement("div",{className:f.default.text},"技术支持网络：Email、QQ"),s.default.createElement("div",{className:f.default.text},"历史数据、更多数据（需要独立对接）"))],[s.default.createElement("div",{key:"4"},s.default.createElement("div",{className:f.default.tabTitle},"天气预报Final版"),s.default.createElement("div",{className:f.default.tabDesc},"国内全部城市（4000个）及国外主要城市（约20W）"),s.default.createElement("div",{className:f.default.price},"￥",s.default.createElement("b",null,"8.88"),"/万次"),s.default.createElement("div",{className:f.default.tabDesc},"10888元/月 原价13320元"),s.default.createElement(i.Link,{to:"11",className:f.default.btu},"定制"),s.default.createElement("line",{className:f.default.line}),s.default.createElement("div",{className:f.default.tabTitle},"数据"),s.default.createElement("div",{className:f.default.text},"实时天气数据：温度、风向、风速、AQI"),s.default.createElement("div",{className:f.default.text},"逐小时预报类：温度、湿度、风向、风速、云量（未来3天逐小时）"),s.default.createElement("div",{className:f.default.text},"独家预报类：分钟级降水预报"),s.default.createElement("div",{className:f.default.text},"空气质量：未来五天逐日AQI"),s.default.createElement("div",{className:f.default.text},"气象灾害预警"),s.default.createElement("div",{className:f.default.text},"生活指数及尾号限行"),s.default.createElement("line",{className:f.default.line}),s.default.createElement("div",{className:f.default.tabTitle},"服务"),s.default.createElement("div",{className:f.default.text},"访问量限额：1万次/天"),s.default.createElement("div",{className:f.default.text},"查询方式：cityid、经纬度"),s.default.createElement("div",{className:f.default.text},"服务器与网络带宽：共享"),s.default.createElement("div",{className:f.default.text},"技术支持网络：Email、QQ"),s.default.createElement("div",{className:f.default.text},"历史数据、更多数据（需要独立对接）"))]]},a}return r(t,e),c(t,[{key:"handleClickTab",value:function(e){this.setState({curIndex:e})}},{key:"handleCheckTab",value:function(e){return e===this.state.curIndex?f.default.tabCur:f.default.tab}},{key:"handleCheckContent",value:function(e){return e===this.state.curIndex?f.default.show:f.default.hide}},{key:"render",value:function(){var e=this;return s.default.createElement("div",{className:f.default.Tprice},s.default.createElement("div",{className:f.default.title},"天气API服务价格"),s.default.createElement("div",{className:f.default.tabHead},s.default.createElement("ul",null,this.state.tabs.map(function(t,a){return s.default.createElement("li",{className:e.handleCheckTab(a),onClick:function(){e.handleClickTab(a)},key:a},t.tabName)}))),s.default.createElement("div",{className:f.default.tabContent},s.default.createElement("ul",null,this.state.content.map(function(t,a){return s.default.createElement("li",{className:e.handleCheckContent(a),key:a},t)}))))}}]),t}(d.Component);t.default=m},350:function(e,t){e.exports={tabHead:"Tprice_tabHead",title:"Tprice_title",tab:"Tprice_tab",tabCur:"Tprice_tabCur",tabContent:"Tprice_tabContent",tabTitle:"Tprice_tabTitle",tabDesc:"Tprice_tabDesc",price:"Tprice_price",btu:"Tprice_btu",text:"Tprice_text",grey:"Tprice_grey",through:"Tprice_through",line:"Tprice_line",hide:"Tprice_hide",show:"Tprice_show"}},351:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(){return r.default.createElement("div",{className:d.default.Tuse},r.default.createElement("div",{className:d.default.title},"他们都在使用墨迹天气"),r.default.createElement("ul",{className:d.default.list},r.default.createElement("li",{className:d.default.stateGrid}),r.default.createElement("li",{className:d.default.amap}),r.default.createElement("li",{className:d.default.coca})),r.default.createElement("line",{className:d.default.line}))}Object.defineProperty(t,"__esModule",{value:!0});var u=a(300),r=l(u),c=a(352),d=l(c);t.default=n},352:function(e,t){e.exports={Tuse:"Tuse_Tuse",title:"Tuse_title",list:"Tuse_list",stateGrid:"Tuse_stateGrid",amap:"Tuse_amap",coca:"Tuse_coca",line:"Tuse_line"}},353:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(){return r.default.createElement("div",{className:d.default.Tcooperate},r.default.createElement("div",{className:d.default.title},"合作伙伴"),r.default.createElement("ul",{className:d.default.list},r.default.createElement("li",{className:d.default.aliyun}),r.default.createElement("li",{className:d.default.qqBrowser}),r.default.createElement("li",{className:d.default.JD}),r.default.createElement("li",{className:d.default.alipay}),r.default.createElement("li",{className:d.default._58}),r.default.createElement("li",{className:d.default.didi})),r.default.createElement("line",{className:d.default.line}))}Object.defineProperty(t,"__esModule",{value:!0});var u=a(300),r=l(u),c=a(354),d=l(c);t.default=n},354:function(e,t){e.exports={Tcooperate:"Tcooperate_Tcooperate",title:"Tcooperate_title",list:"Tcooperate_list",line:"Tcooperate_line",aliyun:"Tcooperate_aliyun",qqBrowser:"Tcooperate_qqBrowser",JD:"Tcooperate_JD",alipay:"Tcooperate_alipay",_58:"Tcooperate__58",didi:"Tcooperate_didi"}},355:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(){return r.default.createElement("div",{className:d.default.Tcontact},r.default.createElement("div",{className:d.default.title},"联系我们"),r.default.createElement("div",{className:d.default.contact},"AIP@moji.com"))}Object.defineProperty(t,"__esModule",{value:!0});var u=a(300),r=l(u),c=a(356),d=l(c);t.default=n},356:function(e,t){e.exports={Tcontact:"Tcontact_Tcontact",title:"Tcontact_title",contact:"Tcontact_contact"}},358:function(e,t){e.exports={box:"Tob_box"}}});
//# sourceMappingURL=Tob_c5cc3.js.map