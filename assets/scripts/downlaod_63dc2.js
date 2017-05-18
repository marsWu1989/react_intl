webpackJsonp([2],{306:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var d=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),o=a(300),c=l(o),i=a(307),f=l(i),s=function(e){function t(e){n(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={display:!1},a}return u(t,e),d(t,[{key:"handleShowOrHide",value:function(){this.setState({display:!this.state.display})}},{key:"render",value:function(){var e=this,t=this.props.data.data,a=[],l=[];if(t.alerts.length>0){var n=f.default["level_"+t.alerts[0].level_no];a.push(c.default.createElement("div",{className:f.default.alertContent,key:"alert"},c.default.createElement("i",{className:n},c.default.createElement("img",{src:"http://cdn.moji.com/f5/weather/warn/warn_"+t.alerts[0].name_no+".png",alt:t.alerts[0].name_no})),c.default.createElement("b",null,t.alerts[0].type,"预警")))}for(var r=0;r<=t.forecastDayList.length-1;r++){var u=t.forecastDayList[r],d=t.forecastaqi[u.Fpredict_date].desc,o=f.default["level_"+t.forecastaqi[u.Fpredict_date].level];t.forecastaqi[u.Fpredict_date].desc.length>2&&(d=t.forecastaqi[u.Fpredict_date].desc.substring(0,2)),l.push(c.default.createElement("li",{className:f.default.item,key:r},c.default.createElement("span",{className:f.default.week},t.forecastaqi[u.Fpredict_date].week),c.default.createElement("span",{className:f.default.date},t.forecastaqi[u.Fpredict_date].day),c.default.createElement("span",{className:f.default.temp},u.Ftemp_high),c.default.createElement("i",{className:f.default.icon},c.default.createElement("img",{src:"https://h5tq.moji.com/mtianqi/assets/images/wea/w"+u.Ficon_day+".png",alt:u.Ficon_day})),c.default.createElement("span",{className:f.default.wea},u.Fcondition_day),c.default.createElement("span",{className:f.default.wind},u.Fwind_dir_day),c.default.createElement("b",{className:o},d)))}var i=f.default.hide;return i=this.state.display?f.default.show:f.default.hide,c.default.createElement("div",{className:f.default.head},c.default.createElement("logo",{className:f.default.logo}),c.default.createElement("div",{className:f.default.weather,onClick:function(){return e.handleShowOrHide()}},c.default.createElement("b",null,t.city.name," ",t.city.pname),c.default.createElement("span",null,t.condition.Ftemp),c.default.createElement("i",null,c.default.createElement("img",{src:"https://h5tq.moji.com/mtianqi/assets/images/wea/w"+t.condition.Ficon+".png",alt:t.condition.Ficon}))),c.default.createElement("div",{className:i},c.default.createElement("div",{className:f.default.title},c.default.createElement("div",{className:f.default.alert},a,c.default.createElement("b",null,t.time.monthG),c.default.createElement("span",null,"农历 ",t.time.monthN)),c.default.createElement("a",{href:"http://m.moji.com/",className:f.default.more},"更多")),c.default.createElement("div",{className:f.default.items},c.default.createElement("ul",null,l))))}}]),t}(o.Component);t.default=s},307:function(e,t){e.exports={head:"Header_head",title:"Header_title",items:"Header_items",level_1:"Header_level_1",level_2:"Header_level_2",level_3:"Header_level_3",level_4:"Header_level_4",level_5:"Header_level_5",level_6:"Header_level_6",logo:"Header_logo",weather:"Header_weather",hide:"Header_hide",show:"Header_show",alert:"Header_alert",alertContent:"Header_alertContent",more:"Header_more",item:"Header_item",week:"Header_week",wea:"Header_wea",temp:"Header_temp",wind:"Header_wind",date:"Header_date",icon:"Header_icon"}},308:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var d=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),o=a(300),c=l(o),i=a(302),f=a(309),s=l(f),m=function(e){function t(e){n(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={display:!1},a}return u(t,e),d(t,[{key:"handleShowOrHide",value:function(){this.setState({display:!this.state.display})}},{key:"render",value:function(){var e=this,t=this.props.router,a=s.default.home,l=s.default.download;switch(t){case"/":a=s.default.homeCur;break;case"/downlaod":l=s.default.downloadCur;break;default:a=s.default.home,l=s.default.download}var n=s.default.hide;return n=this.state.display?s.default.show:s.default.hide,c.default.createElement("div",{className:s.default.nav},c.default.createElement(i.Link,{to:"/",className:a}),c.default.createElement(i.Link,{to:"/downlaod",className:l}),c.default.createElement("button",{className:s.default.menu,onClick:function(){return e.handleShowOrHide()}}),c.default.createElement("div",{className:n},c.default.createElement("ul",{className:s.default.items},c.default.createElement("li",null,c.default.createElement(i.Link,{to:"/"},"首页")),c.default.createElement("li",null,c.default.createElement(i.Link,{to:"/downlaod"},"下载")),c.default.createElement("li",null,c.default.createElement(i.Link,{to:"/tob"},"天气服务")),c.default.createElement("li",null,c.default.createElement(i.Link,{to:"/news"},"资讯")),c.default.createElement("li",null,c.default.createElement(i.Link,{to:"/about"},"关于墨迹")))))}}]),t}(o.Component);t.default=m},309:function(e,t){e.exports={nav:"Nav_nav",home:"Nav_home",homeCur:"Nav_homeCur",download:"Nav_download",downloadCur:"Nav_downloadCur",menu:"Nav_menu",hide:"Nav_hide",show:"Nav_show",items:"Nav_items"}},310:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(300),r=l(n),u=a(311),d=l(u),o=function(){return r.default.createElement("banner",{className:d.default.banner})};t.default=o},311:function(e,t){e.exports={banner:"Banner_banner"}},316:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var d=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),o=a(300),c=l(o),i=a(317),f=l(i),s=function(e){function t(e){n(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={display:!1,top:null},a._handleScroll=a.handleScroll.bind(a),a}return u(t,e),d(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this._handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this._handleScroll)}},{key:"handleScroll",value:function(){var e=document.documentElement.scrollTop||document.body.scrollTop;e>0?this.setState({display:!0,top:e}):this.setState({display:!1,top:e})}},{key:"handleToScrollTop",value:function(){var e=this.state.top,t=setInterval(function(){e-=50,document.body.scrollTop=e,document.documentElement.scrollTop=e,e<=0&&clearInterval(t)},10);this.setState({display:!1})}},{key:"render",value:function(){var e=this,t=f.default.hide;return t=this.state.display?f.default.show:f.default.hide,c.default.createElement("toTop",{className:t,onClick:function(){return e.handleToScrollTop()}})}}]),t}(o.Component);t.default=s},317:function(e,t){e.exports={hide:"ToTop_hide",show:"ToTop_show"}},319:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e){return u.default.createElement("div",{className:D.default.box},u.default.createElement(c.default,{data:e.data.forecast}),u.default.createElement(f.default,{router:e.route.path}),u.default.createElement(h.default,null),u.default.createElement(E.default,null),u.default.createElement(b.default,null),u.default.createElement(N.default,null),u.default.createElement(m.default,null))}Object.defineProperty(t,"__esModule",{value:!0});var r=a(300),u=l(r),d=a(303),o=a(306),c=l(o),i=a(308),f=l(i),s=a(316),m=l(s),p=a(310),h=l(p),_=a(320),E=l(_),v=a(322),b=l(v),y=a(324),N=l(y),w=a(326),D=l(w);t.default=(0,d.connect)(function(e){return{data:e}})(n)},320:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(300),r=l(n),u=a(321),d=l(u),o=function(){return r.default.createElement("div",{className:d.default.Dphone},r.default.createElement("div",{className:d.default.title},"手机版"),r.default.createElement("div",{className:d.default.items},r.default.createElement("div",{className:d.default.item},r.default.createElement("p",{className:d.default.iphone},r.default.createElement("icon",{className:d.default.icon}),r.default.createElement("b",null,"iPhone 6.0.2"),r.default.createElement("span",null,"发布日期：2014.08.14")),r.default.createElement("a",{herf:"111",className:d.default.btuBlue},"立即下载")),r.default.createElement("div",{className:d.default.item},r.default.createElement("p",{className:d.default.android},r.default.createElement("icon",{className:d.default.icon}),r.default.createElement("b",null,"Android 6.0.2"),r.default.createElement("span",null,"发布日期：2014.08.14")),r.default.createElement("a",{herf:"111",className:d.default.btuBlue},"立即下载")),r.default.createElement("div",{className:d.default.item},r.default.createElement("p",{className:d.default.winPhone},r.default.createElement("b",null,"Windows Phone 1.5"),r.default.createElement("span",null,"发布日期：2015.09.13")),r.default.createElement("a",{herf:"111",className:d.default.btuNoBg},"立即下载")),r.default.createElement("div",{className:d.default.item},r.default.createElement("p",{className:d.default.symbian},r.default.createElement("b",null,"Symbian OS v6.0"),r.default.createElement("span",null,"发布日期：2015.12.11")),r.default.createElement("a",{herf:"111",className:d.default.btuNoBg},"立即下载"))),r.default.createElement("pic",{className:d.default.pic}))};t.default=o},321:function(e,t){e.exports={items:"Dphone_items",Dphone:"Dphone_Dphone",title:"Dphone_title",item:"Dphone_item",iphone:"Dphone_iphone",android:"Dphone_android",btuBlue:"Dphone_btuBlue",btuNoBg:"Dphone_btuNoBg",pic:"Dphone_pic"}},322:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(300),r=l(n),u=a(323),d=l(u),o=function(){return r.default.createElement("div",{className:d.default.Dpad},r.default.createElement("div",{className:d.default.title},"Pad版"),r.default.createElement("div",{className:d.default.items},r.default.createElement("div",{className:d.default.item},r.default.createElement("p",{className:d.default.ipad},r.default.createElement("icon",{className:d.default.icon}),r.default.createElement("b",null,"iPhone 6.0.2"),r.default.createElement("span",null,"发布日期：2014.08.14")),r.default.createElement("a",{herf:"111",className:d.default.btu},"立即下载")),r.default.createElement("div",{className:d.default.item},r.default.createElement("p",{className:d.default.win},r.default.createElement("icon",{className:d.default.icon}),r.default.createElement("b",null,"Android 6.0.2"),r.default.createElement("span",null,"发布日期：2014.08.14")),r.default.createElement("a",{herf:"111",className:d.default.btu},"立即下载"))),r.default.createElement("pic",{className:d.default.pic}))};t.default=o},323:function(e,t){e.exports={items:"Dpad_items",Dpad:"Dpad_Dpad",title:"Dpad_title",item:"Dpad_item",ipad:"Dpad_ipad",win:"Dpad_win",btu:"Dpad_btu",pic:"Dpad_pic"}},324:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(300),r=l(n),u=a(325),d=l(u),o=function(){return r.default.createElement("div",{className:d.default.Dinter},r.default.createElement("div",{className:d.default.title},"国际版"),r.default.createElement("div",{className:d.default.items},r.default.createElement("div",{className:d.default.item},r.default.createElement("p",{className:d.default.iphone},r.default.createElement("icon",{className:d.default.icon}),r.default.createElement("b",null,"iPhone v2.4"),r.default.createElement("span",null,"发布日期：2014.08.14")),r.default.createElement("a",{herf:"111",className:d.default.btu},"立即下载")),r.default.createElement("div",{className:d.default.item},r.default.createElement("p",{className:d.default.and},r.default.createElement("icon",{className:d.default.icon}),r.default.createElement("b",null,"Android v1.4"),r.default.createElement("span",null,"发布日期：2014.07.31")),r.default.createElement("a",{herf:"111",className:d.default.btu},"立即下载"))),r.default.createElement("pic",{className:d.default.pic}))};t.default=o},325:function(e,t){e.exports={items:"Dinter_items",Dinter:"Dinter_Dinter",title:"Dinter_title",item:"Dinter_item",iphone:"Dinter_iphone",and:"Dinter_and",btu:"Dinter_btu",pic:"Dinter_pic"}},326:function(e,t){e.exports={box:"Downlaod_box"}}});
//# sourceMappingURL=downlaod_63dc2.js.map