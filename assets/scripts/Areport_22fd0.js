webpackJsonp([8],{306:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),i=a(300),c=n(i),s=a(307),d=n(s),f=function(e){function t(e){r(this,t);var a=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={display:!1},a}return o(t,e),u(t,[{key:"handleShowOrHide",value:function(){this.setState({display:!this.state.display})}},{key:"render",value:function(){var e=this,t=this.props.data.data,a=[],n=[];if(t.alerts.length>0){var r=d.default["level_"+t.alerts[0].level_no];a.push(c.default.createElement("div",{className:d.default.alertContent,key:"alert"},c.default.createElement("i",{className:r},c.default.createElement("img",{src:"http://cdn.moji.com/f5/weather/warn/warn_"+t.alerts[0].name_no+".png",alt:t.alerts[0].name_no})),c.default.createElement("b",null,t.alerts[0].type,"预警")))}for(var l=0;l<=t.forecastDayList.length-1;l++){var o=t.forecastDayList[l];if(t.forecastaqi[o.Fpredict_date]){var u=t.forecastaqi[o.Fpredict_date].desc,i=d.default["level_"+t.forecastaqi[o.Fpredict_date].level];u.length>2&&(u=u.substring(0,2)),n.push(c.default.createElement("li",{className:d.default.item,key:l},c.default.createElement("span",{className:d.default.week},t.forecastaqi[o.Fpredict_date].week),c.default.createElement("span",{className:d.default.date},t.forecastaqi[o.Fpredict_date].day),c.default.createElement("span",{className:d.default.temp},o.Ftemp_high),c.default.createElement("i",{className:d.default.icon},c.default.createElement("img",{src:"https://h5tq.moji.com/mtianqi/assets/images/wea/w"+o.Ficon_day+".png",alt:o.Ficon_day})),c.default.createElement("span",{className:d.default.wea},o.Fcondition_day),c.default.createElement("span",{className:d.default.wind},o.Fwind_dir_day),c.default.createElement("b",{className:i},u)))}else n.push(c.default.createElement("li",{className:d.default.item,key:l},c.default.createElement("span",{className:d.default.week},"无"),c.default.createElement("span",{className:d.default.date},"无"),c.default.createElement("span",{className:d.default.temp},"无"),c.default.createElement("i",{className:d.default.icon},"无"),c.default.createElement("span",{className:d.default.wea},"无"),c.default.createElement("span",{className:d.default.wind},"无"),c.default.createElement("b",{className:d.default.level},"无")))}var s=d.default.hide;return s=this.state.display?d.default.show:d.default.hide,c.default.createElement("div",{className:d.default.head},c.default.createElement("logo",{className:d.default.logo}),c.default.createElement("div",{className:d.default.weather,onClick:function(){return e.handleShowOrHide()}},c.default.createElement("b",null,t.city.name," ",t.city.pname),c.default.createElement("span",null,t.condition.Ftemp),c.default.createElement("i",null,c.default.createElement("img",{src:"https://h5tq.moji.com/mtianqi/assets/images/wea/w"+t.condition.Ficon+".png",alt:t.condition.Ficon}))),c.default.createElement("div",{className:s},c.default.createElement("div",{className:d.default.title},c.default.createElement("div",{className:d.default.alert},a,c.default.createElement("b",null,t.time.monthG),c.default.createElement("span",null,"农历 ",t.time.monthN)),c.default.createElement("a",{href:"http://m.moji.com/",className:d.default.more},"更多")),c.default.createElement("div",{className:d.default.items},c.default.createElement("ul",null,n))))}}]),t}(i.Component);t.default=f},307:function(e,t){e.exports={head:"Header_head",title:"Header_title",items:"Header_items",level_1:"Header_level_1",level_2:"Header_level_2",level_3:"Header_level_3",level_4:"Header_level_4",level_5:"Header_level_5",level_6:"Header_level_6",logo:"Header_logo",weather:"Header_weather",hide:"Header_hide",show:"Header_show",alert:"Header_alert",alertContent:"Header_alertContent",more:"Header_more",item:"Header_item",week:"Header_week",wea:"Header_wea",temp:"Header_temp",wind:"Header_wind",date:"Header_date",icon:"Header_icon"}},308:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),i=a(300),c=n(i),s=a(302),d=a(309),f=n(d),p=function(e){function t(e){r(this,t);var a=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={display:!1},a}return o(t,e),u(t,[{key:"handleShowOrHide",value:function(){this.setState({display:!this.state.display})}},{key:"render",value:function(){var e=this,t=this.props.router,a=f.default.home,n=f.default.download;switch(t){case"/":a=f.default.homeCur;break;case"/downlaod":n=f.default.downloadCur;break;default:a=f.default.home,n=f.default.download}var r=f.default.hide;return r=this.state.display?f.default.show:f.default.hide,c.default.createElement("div",{className:f.default.nav},c.default.createElement(s.Link,{to:"/",className:a}),c.default.createElement(s.Link,{to:"/download",className:n}),c.default.createElement("button",{className:f.default.menu,onClick:function(){return e.handleShowOrHide()}}),c.default.createElement("div",{className:r},c.default.createElement("ul",{className:f.default.items},c.default.createElement("li",null,c.default.createElement(s.Link,{to:"/"},"首页")),c.default.createElement("li",null,c.default.createElement(s.Link,{to:"/download"},"下载")),c.default.createElement("li",null,c.default.createElement(s.Link,{to:"/tob"},"天气服务")),c.default.createElement("li",null,c.default.createElement(s.Link,{to:"/news"},"资讯")),c.default.createElement("li",null,c.default.createElement(s.Link,{to:"/about"},"关于墨迹")))))}}]),t}(i.Component);t.default=p},309:function(e,t){e.exports={nav:"Nav_nav",home:"Nav_home",homeCur:"Nav_homeCur",download:"Nav_download",downloadCur:"Nav_downloadCur",menu:"Nav_menu",hide:"Nav_hide",show:"Nav_show",items:"Nav_items"}},310:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e){if(e.data)return o.default.createElement("banner",{className:i.default.banner,dangerouslySetInnerHTML:{__html:e.data.data.content}})}Object.defineProperty(t,"__esModule",{value:!0});var l=a(300),o=n(l),u=a(311),i=n(u);t.default=r},311:function(e,t){e.exports={banner:"Banner_banner"}},316:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),i=a(300),c=n(i),s=a(317),d=n(s),f=function(e){function t(e){r(this,t);var a=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={display:!1,top:null},a._handleScroll=a.handleScroll.bind(a),a}return o(t,e),u(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this._handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this._handleScroll)}},{key:"handleScroll",value:function(){var e=document.documentElement.scrollTop||document.body.scrollTop;e>0?this.setState({display:!0,top:e}):this.setState({display:!1,top:e})}},{key:"handleToScrollTop",value:function(){var e=this.state.top,t=setInterval(function(){e-=50,document.body.scrollTop=e,document.documentElement.scrollTop=e,e<=0&&clearInterval(t)},10);this.setState({display:!1})}},{key:"render",value:function(){var e=this,t=d.default.hide;return t=this.state.display?d.default.show:d.default.hide,c.default.createElement("toTop",{className:t,onClick:function(){return e.handleToScrollTop()}})}}]),t}(i.Component);t.default=f},317:function(e,t){e.exports={hide:"ToTop_hide",show:"ToTop_show"}},320:function(e,t,a){e.exports=a(295)(258)},363:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e){var t=e.router,a=c.default.about,n=c.default.road,r=c.default.report,l=c.default.biz,i=c.default.brand,s=c.default.join;switch(t){case"/about":a=c.default.aboutCur;break;case"/road":n=c.default.roadCur;break;case"/report":r=c.default.reportCur;break;case"/biz":l=c.default.bizCur;break;case"/brand":i=c.default.brandCur;break;case"/join":s=c.default.joinCur;break;default:a=c.default.aboutCur}return o.default.createElement("div",{className:c.default.Anav},o.default.createElement("ul",null,o.default.createElement("li",{className:a},o.default.createElement(u.Link,{to:"/about"},"关于墨迹")),o.default.createElement("li",{className:n},o.default.createElement(u.Link,{to:"/road"},"墨迹之路")),o.default.createElement("li",{className:r},o.default.createElement(u.Link,{to:"/report"},"墨迹动态")),o.default.createElement("li",{className:l},o.default.createElement(u.Link,{to:"/biz"},"商务合作")),o.default.createElement("li",{className:i},o.default.createElement(u.Link,{to:"/brand"},"品牌案例")),o.default.createElement("li",{className:s},o.default.createElement(u.Link,{to:"/join"},"加入我们"))))}Object.defineProperty(t,"__esModule",{value:!0});var l=a(300),o=n(l),u=a(302),i=a(364),c=n(i);t.default=r},364:function(e,t){e.exports={Anav:"Anav_Anav",about:"Anav_about",aboutCur:"Anav_aboutCur",road:"Anav_road",roadCur:"Anav_roadCur",report:"Anav_report",reportCur:"Anav_reportCur",biz:"Anav_biz",bizCur:"Anav_bizCur",brand:"Anav_brand",brandCur:"Anav_brandCur",join:"Anav_join",joinCur:"Anav_joinCur"}},376:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),i=a(300),c=n(i),s=a(303),d=a(306),f=n(d),p=a(308),m=n(p),_=a(310),h=n(_),b=a(363),v=n(b),y=a(377),E=n(y),w=a(379),N=n(w),g=a(316),k=n(g),O=a(383),j=n(O),C=a(380),P=function(e){function t(){return r(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),u(t,[{key:"componentWillMount",value:function(){var e=this.props.dispatch;e((0,C.reportPost)())}},{key:"render",value:function(){var e=this.props,t=e.forecast,a=e.report,n=e.route;return a.items?c.default.createElement("div",{className:j.default.box},c.default.createElement(f.default,{data:t}),c.default.createElement(m.default,null),c.default.createElement(h.default,null),c.default.createElement(v.default,{router:n.path}),c.default.createElement(E.default,{list:a.items}),c.default.createElement(N.default,null),c.default.createElement(k.default,null)):c.default.createElement("div",null,"loading")}}]),t}(i.Component),A=function(e){var t=e.report,a=e.forecast;return{report:t,forecast:a}};t.default=(0,s.connect)(A)(P)},377:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e){for(var t=e.list,a=[],n=0;n<=t.length-1;n++){var r=t[n],l=[],u=new Date(1e3*r.update_time).toLocaleString().substr(0,10).replace(/\//g,"-");""!==r.img&&l.push(o.default.createElement("img",{src:r.img,alt:"pic",key:r.id})),a.push(o.default.createElement("li",{className:i.default.item,key:r.id},o.default.createElement("h2",null,o.default.createElement("a",{href:r.url},r.title)),o.default.createElement("div",{className:i.default.time},o.default.createElement("b",null,"墨迹动态"),o.default.createElement("span",null,u)),o.default.createElement("p",{className:i.default.text},r.description),o.default.createElement("p",{className:i.default.img},l)))}return o.default.createElement("div",{className:i.default.AreportList},o.default.createElement("ul",null,a))}Object.defineProperty(t,"__esModule",{value:!0});var l=a(300),o=n(l),u=a(378),i=n(u);t.default=r},378:function(e,t){e.exports={AreportList:"AreportList_AreportList",item:"AreportList_item",time:"AreportList_time",text:"AreportList_text",img:"AreportList_img"}},379:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),i=a(300),c=n(i),s=a(303),d=a(380),f=a(382),p=n(f),m=function(e){function t(e){r(this,t);var a=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={page:1},a}return o(t,e),u(t,[{key:"_getList",value:function(){var e=this.state.page+1,t=this.props.dispatch;t((0,d.reportPost)(e)),this.setState({page:e})}},{key:"render",value:function(){var e=this;return c.default.createElement("div",{className:p.default.AreportNext,onClick:function(){return e._getList()}},c.default.createElement("span",null,"查看更多"))}}]),t}(i.Component);t.default=(0,s.connect)()(m)},380:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.reportPost=t.reportReceive=t.reportRequest=void 0,a(320);var n=a(381),r=t.reportRequest=function(e){return{type:n.REPORT_REQUEST,amount:e}},l=t.reportReceive=function(e,t){return{type:n.REPORT_RECEIVE,amount:e,data:t}};t.reportPost=function(e){return function(t){return t(r(e)),fetch("http://0.0.0.0:9527/api/report?page_no="+e+"&page_length=5").then(function(e){return e.status>=400&&console.log("net work fail"),e.json()}).then(function(a){t(l(e,a))}).catch(function(e){return console.log("parsing failed",e)})}}},382:function(e,t){e.exports={AreportNext:"AreportNext_AreportNext"}},383:function(e,t){e.exports={box:"Areport_box"}}});
//# sourceMappingURL=Areport_22fd0.js.map