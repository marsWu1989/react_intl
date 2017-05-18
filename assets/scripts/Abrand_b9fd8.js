webpackJsonp([10],{306:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),d=a(300),i=n(d),c=a(307),s=n(c),f=function(e){function t(e){l(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={display:!1},a}return o(t,e),u(t,[{key:"handleShowOrHide",value:function(){this.setState({display:!this.state.display})}},{key:"render",value:function(){var e=this,t=this.props.data.data,a=[],n=[];if(t.alerts.length>0){var l=s.default["level_"+t.alerts[0].level_no];a.push(i.default.createElement("div",{className:s.default.alertContent,key:"alert"},i.default.createElement("i",{className:l},i.default.createElement("img",{src:"http://cdn.moji.com/f5/weather/warn/warn_"+t.alerts[0].name_no+".png",alt:t.alerts[0].name_no})),i.default.createElement("b",null,t.alerts[0].type,"预警")))}for(var r=0;r<=t.forecastDayList.length-1;r++){var o=t.forecastDayList[r],u=t.forecastaqi[o.Fpredict_date].desc,d=s.default["level_"+t.forecastaqi[o.Fpredict_date].level];t.forecastaqi[o.Fpredict_date].desc.length>2&&(u=t.forecastaqi[o.Fpredict_date].desc.substring(0,2)),n.push(i.default.createElement("li",{className:s.default.item,key:r},i.default.createElement("span",{className:s.default.week},t.forecastaqi[o.Fpredict_date].week),i.default.createElement("span",{className:s.default.date},t.forecastaqi[o.Fpredict_date].day),i.default.createElement("span",{className:s.default.temp},o.Ftemp_high),i.default.createElement("i",{className:s.default.icon},i.default.createElement("img",{src:"https://h5tq.moji.com/mtianqi/assets/images/wea/w"+o.Ficon_day+".png",alt:o.Ficon_day})),i.default.createElement("span",{className:s.default.wea},o.Fcondition_day),i.default.createElement("span",{className:s.default.wind},o.Fwind_dir_day),i.default.createElement("b",{className:d},u)))}var c=s.default.hide;return c=this.state.display?s.default.show:s.default.hide,i.default.createElement("div",{className:s.default.head},i.default.createElement("logo",{className:s.default.logo}),i.default.createElement("div",{className:s.default.weather,onClick:function(){return e.handleShowOrHide()}},i.default.createElement("b",null,t.city.name," ",t.city.pname),i.default.createElement("span",null,t.condition.Ftemp),i.default.createElement("i",null,i.default.createElement("img",{src:"https://h5tq.moji.com/mtianqi/assets/images/wea/w"+t.condition.Ficon+".png",alt:t.condition.Ficon}))),i.default.createElement("div",{className:c},i.default.createElement("div",{className:s.default.title},i.default.createElement("div",{className:s.default.alert},a,i.default.createElement("b",null,t.time.monthG),i.default.createElement("span",null,"农历 ",t.time.monthN)),i.default.createElement("a",{href:"http://m.moji.com/",className:s.default.more},"更多")),i.default.createElement("div",{className:s.default.items},i.default.createElement("ul",null,n))))}}]),t}(d.Component);t.default=f},307:function(e,t){e.exports={head:"Header_head",title:"Header_title",items:"Header_items",level_1:"Header_level_1",level_2:"Header_level_2",level_3:"Header_level_3",level_4:"Header_level_4",level_5:"Header_level_5",level_6:"Header_level_6",logo:"Header_logo",weather:"Header_weather",hide:"Header_hide",show:"Header_show",alert:"Header_alert",alertContent:"Header_alertContent",more:"Header_more",item:"Header_item",week:"Header_week",wea:"Header_wea",temp:"Header_temp",wind:"Header_wind",date:"Header_date",icon:"Header_icon"}},308:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),d=a(300),i=n(d),c=a(302),s=a(309),f=n(s),m=function(e){function t(e){l(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={display:!1},a}return o(t,e),u(t,[{key:"handleShowOrHide",value:function(){this.setState({display:!this.state.display})}},{key:"render",value:function(){var e=this,t=this.props.router,a=f.default.home,n=f.default.download;switch(t){case"/":a=f.default.homeCur;break;case"/downlaod":n=f.default.downloadCur;break;default:a=f.default.home,n=f.default.download}var l=f.default.hide;return l=this.state.display?f.default.show:f.default.hide,i.default.createElement("div",{className:f.default.nav},i.default.createElement(c.Link,{to:"/",className:a}),i.default.createElement(c.Link,{to:"/downlaod",className:n}),i.default.createElement("button",{className:f.default.menu,onClick:function(){return e.handleShowOrHide()}}),i.default.createElement("div",{className:l},i.default.createElement("ul",{className:f.default.items},i.default.createElement("li",null,i.default.createElement(c.Link,{to:"/"},"首页")),i.default.createElement("li",null,i.default.createElement(c.Link,{to:"/downlaod"},"下载")),i.default.createElement("li",null,i.default.createElement(c.Link,{to:"/tob"},"天气服务")),i.default.createElement("li",null,i.default.createElement(c.Link,{to:"/news"},"资讯")),i.default.createElement("li",null,i.default.createElement(c.Link,{to:"/about"},"关于墨迹")))))}}]),t}(d.Component);t.default=m},309:function(e,t){e.exports={nav:"Nav_nav",home:"Nav_home",homeCur:"Nav_homeCur",download:"Nav_download",downloadCur:"Nav_downloadCur",menu:"Nav_menu",hide:"Nav_hide",show:"Nav_show",items:"Nav_items"}},310:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(300),r=n(l),o=a(311),u=n(o),d=function(){return r.default.createElement("banner",{className:u.default.banner})};t.default=d},311:function(e,t){e.exports={banner:"Banner_banner"}},316:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),d=a(300),i=n(d),c=a(317),s=n(c),f=function(e){function t(e){l(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={display:!1,top:null},a._handleScroll=a.handleScroll.bind(a),a}return o(t,e),u(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this._handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this._handleScroll)}},{key:"handleScroll",value:function(){var e=document.documentElement.scrollTop||document.body.scrollTop;e>0?this.setState({display:!0,top:e}):this.setState({display:!1,top:e})}},{key:"handleToScrollTop",value:function(){var e=this.state.top,t=setInterval(function(){e-=50,document.body.scrollTop=e,document.documentElement.scrollTop=e,e<=0&&clearInterval(t)},10);this.setState({display:!1})}},{key:"render",value:function(){var e=this,t=s.default.hide;return t=this.state.display?s.default.show:s.default.hide,i.default.createElement("toTop",{className:t,onClick:function(){return e.handleToScrollTop()}})}}]),t}(d.Component);t.default=f},317:function(e,t){e.exports={hide:"ToTop_hide",show:"ToTop_show"}},360:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.router,a=i.default.about,n=i.default.road,l=i.default.report,r=i.default.biz,d=i.default.brand,c=i.default.join;switch(t){case"/about":a=i.default.aboutCur;break;case"/road":n=i.default.roadCur;break;case"/report":l=i.default.reportCur;break;case"/biz":r=i.default.bizCur;break;case"/brand":d=i.default.brandCur;break;case"/join":c=i.default.joinCur;break;default:a=i.default.aboutCur}return o.default.createElement("div",{className:i.default.Anav},o.default.createElement("ul",null,o.default.createElement("li",{className:a},o.default.createElement(u.Link,{to:"/about"},"关于墨迹")),o.default.createElement("li",{className:n},o.default.createElement(u.Link,{to:"/road"},"墨迹之路")),o.default.createElement("li",{className:l},o.default.createElement(u.Link,{to:"/report"},"墨迹动态")),o.default.createElement("li",{className:r},o.default.createElement(u.Link,{to:"/biz"},"商务合作")),o.default.createElement("li",{className:d},o.default.createElement(u.Link,{to:"/brand"},"品牌案例")),o.default.createElement("li",{className:c},o.default.createElement(u.Link,{to:"/join"},"加入我们"))))}Object.defineProperty(t,"__esModule",{value:!0});var r=a(300),o=n(r),u=a(302),d=a(361),i=n(d);t.default=l},361:function(e,t){e.exports={Anav:"Anav_Anav",about:"Anav_about",aboutCur:"Anav_aboutCur",road:"Anav_road",roadCur:"Anav_roadCur",report:"Anav_report",reportCur:"Anav_reportCur",biz:"Anav_biz",bizCur:"Anav_bizCur",brand:"Anav_brand",brandCur:"Anav_brandCur",join:"Anav_join",joinCur:"Anav_joinCur"}},369:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e){return o.default.createElement("div",{className:y.default.box},o.default.createElement(i.default,{data:e.data.forecast}),o.default.createElement(s.default,null),o.default.createElement(m.default,null),o.default.createElement(_.default,{router:e.route.path}),o.default.createElement(b.default,null))}Object.defineProperty(t,"__esModule",{value:!0});var r=a(300),o=n(r),u=a(303),d=a(306),i=n(d),c=a(308),s=n(c),f=a(310),m=n(f),p=a(360),_=n(p),h=a(316),b=n(h),v=a(370),y=n(v);t.default=(0,u.connect)(function(e){return{data:e}})(l)},370:function(e,t){e.exports={box:"Abrand_box"}}});
//# sourceMappingURL=Abrand_b9fd8.js.map