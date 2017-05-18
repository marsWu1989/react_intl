webpackJsonp([10],{306:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),i=a(300),c=n(i),d=a(307),s=n(d),f=function(e){function t(e){l(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={display:!1},a}return o(t,e),u(t,[{key:"handleShowOrHide",value:function(){this.setState({display:!this.state.display})}},{key:"render",value:function(){var e=this,t=this.props.data.data,a=[],n=[];if(t.alerts.length>0){var l=s.default["level_"+t.alerts[0].level_no];a.push(c.default.createElement("div",{className:s.default.alertContent,key:"alert"},c.default.createElement("i",{className:l},c.default.createElement("img",{src:"http://cdn.moji.com/f5/weather/warn/warn_"+t.alerts[0].name_no+".png",alt:t.alerts[0].name_no})),c.default.createElement("b",null,t.alerts[0].type,"预警")))}for(var r=0;r<=t.forecastDayList.length-1;r++){var o=t.forecastDayList[r];if(t.forecastaqi[o.Fpredict_date]){var u=t.forecastaqi[o.Fpredict_date].desc,i=s.default["level_"+t.forecastaqi[o.Fpredict_date].level];u.length>2&&(u=u.substring(0,2)),n.push(c.default.createElement("li",{className:s.default.item,key:r},c.default.createElement("span",{className:s.default.week},t.forecastaqi[o.Fpredict_date].week),c.default.createElement("span",{className:s.default.date},t.forecastaqi[o.Fpredict_date].day),c.default.createElement("span",{className:s.default.temp},o.Ftemp_high),c.default.createElement("i",{className:s.default.icon},c.default.createElement("img",{src:"https://h5tq.moji.com/mtianqi/assets/images/wea/w"+o.Ficon_day+".png",alt:o.Ficon_day})),c.default.createElement("span",{className:s.default.wea},o.Fcondition_day),c.default.createElement("span",{className:s.default.wind},o.Fwind_dir_day),c.default.createElement("b",{className:i},u)))}else n.push(c.default.createElement("li",{className:s.default.item,key:r},c.default.createElement("span",{className:s.default.week},"无"),c.default.createElement("span",{className:s.default.date},"无"),c.default.createElement("span",{className:s.default.temp},"无"),c.default.createElement("i",{className:s.default.icon},"无"),c.default.createElement("span",{className:s.default.wea},"无"),c.default.createElement("span",{className:s.default.wind},"无"),c.default.createElement("b",{className:s.default.level},"无")))}var d=s.default.hide;return d=this.state.display?s.default.show:s.default.hide,c.default.createElement("div",{className:s.default.head},c.default.createElement("logo",{className:s.default.logo}),c.default.createElement("div",{className:s.default.weather,onClick:function(){return e.handleShowOrHide()}},c.default.createElement("b",null,t.city.name," ",t.city.pname),c.default.createElement("span",null,t.condition.Ftemp),c.default.createElement("i",null,c.default.createElement("img",{src:"https://h5tq.moji.com/mtianqi/assets/images/wea/w"+t.condition.Ficon+".png",alt:t.condition.Ficon}))),c.default.createElement("div",{className:d},c.default.createElement("div",{className:s.default.title},c.default.createElement("div",{className:s.default.alert},a,c.default.createElement("b",null,t.time.monthG),c.default.createElement("span",null,"农历 ",t.time.monthN)),c.default.createElement("a",{href:"http://m.moji.com/",className:s.default.more},"更多")),c.default.createElement("div",{className:s.default.items},c.default.createElement("ul",null,n))))}}]),t}(i.Component);t.default=f},307:function(e,t){e.exports={head:"Header_head",title:"Header_title",items:"Header_items",level_1:"Header_level_1",level_2:"Header_level_2",level_3:"Header_level_3",level_4:"Header_level_4",level_5:"Header_level_5",level_6:"Header_level_6",logo:"Header_logo",weather:"Header_weather",hide:"Header_hide",show:"Header_show",alert:"Header_alert",alertContent:"Header_alertContent",more:"Header_more",item:"Header_item",week:"Header_week",wea:"Header_wea",temp:"Header_temp",wind:"Header_wind",date:"Header_date",icon:"Header_icon"}},308:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),i=a(300),c=n(i),d=a(302),s=a(309),f=n(s),m=function(e){function t(e){l(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={display:!1},a}return o(t,e),u(t,[{key:"handleShowOrHide",value:function(){this.setState({display:!this.state.display})}},{key:"render",value:function(){var e=this,t=this.props.router,a=f.default.home,n=f.default.download;switch(t){case"/":a=f.default.homeCur;break;case"/downlaod":n=f.default.downloadCur;break;default:a=f.default.home,n=f.default.download}var l=f.default.hide;return l=this.state.display?f.default.show:f.default.hide,c.default.createElement("div",{className:f.default.nav},c.default.createElement(d.Link,{to:"/",className:a}),c.default.createElement(d.Link,{to:"/downlaod",className:n}),c.default.createElement("button",{className:f.default.menu,onClick:function(){return e.handleShowOrHide()}}),c.default.createElement("div",{className:l},c.default.createElement("ul",{className:f.default.items},c.default.createElement("li",null,c.default.createElement(d.Link,{to:"/"},"首页")),c.default.createElement("li",null,c.default.createElement(d.Link,{to:"/downlaod"},"下载")),c.default.createElement("li",null,c.default.createElement(d.Link,{to:"/tob"},"天气服务")),c.default.createElement("li",null,c.default.createElement(d.Link,{to:"/news"},"资讯")),c.default.createElement("li",null,c.default.createElement(d.Link,{to:"/about"},"关于墨迹")))))}}]),t}(i.Component);t.default=m},309:function(e,t){e.exports={nav:"Nav_nav",home:"Nav_home",homeCur:"Nav_homeCur",download:"Nav_download",downloadCur:"Nav_downloadCur",menu:"Nav_menu",hide:"Nav_hide",show:"Nav_show",items:"Nav_items"}},310:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(300),r=n(l),o=a(311),u=n(o),i=function(){return r.default.createElement("banner",{className:u.default.banner})};t.default=i},311:function(e,t){e.exports={banner:"Banner_banner"}},316:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),i=a(300),c=n(i),d=a(317),s=n(d),f=function(e){function t(e){l(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={display:!1,top:null},a._handleScroll=a.handleScroll.bind(a),a}return o(t,e),u(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this._handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this._handleScroll)}},{key:"handleScroll",value:function(){var e=document.documentElement.scrollTop||document.body.scrollTop;e>0?this.setState({display:!0,top:e}):this.setState({display:!1,top:e})}},{key:"handleToScrollTop",value:function(){var e=this.state.top,t=setInterval(function(){e-=50,document.body.scrollTop=e,document.documentElement.scrollTop=e,e<=0&&clearInterval(t)},10);this.setState({display:!1})}},{key:"render",value:function(){var e=this,t=s.default.hide;return t=this.state.display?s.default.show:s.default.hide,c.default.createElement("toTop",{className:t,onClick:function(){return e.handleToScrollTop()}})}}]),t}(i.Component);t.default=f},317:function(e,t){e.exports={hide:"ToTop_hide",show:"ToTop_show"}},359:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.router,a=c.default.about,n=c.default.road,l=c.default.report,r=c.default.biz,i=c.default.brand,d=c.default.join;switch(t){case"/about":a=c.default.aboutCur;break;case"/road":n=c.default.roadCur;break;case"/report":l=c.default.reportCur;break;case"/biz":r=c.default.bizCur;break;case"/brand":i=c.default.brandCur;break;case"/join":d=c.default.joinCur;break;default:a=c.default.aboutCur}return o.default.createElement("div",{className:c.default.Anav},o.default.createElement("ul",null,o.default.createElement("li",{className:a},o.default.createElement(u.Link,{to:"/about"},"关于墨迹")),o.default.createElement("li",{className:n},o.default.createElement(u.Link,{to:"/road"},"墨迹之路")),o.default.createElement("li",{className:l},o.default.createElement(u.Link,{to:"/report"},"墨迹动态")),o.default.createElement("li",{className:r},o.default.createElement(u.Link,{to:"/biz"},"商务合作")),o.default.createElement("li",{className:i},o.default.createElement(u.Link,{to:"/brand"},"品牌案例")),o.default.createElement("li",{className:d},o.default.createElement(u.Link,{to:"/join"},"加入我们"))))}Object.defineProperty(t,"__esModule",{value:!0});var r=a(300),o=n(r),u=a(302),i=a(360),c=n(i);t.default=l},360:function(e,t){e.exports={Anav:"Anav_Anav",about:"Anav_about",aboutCur:"Anav_aboutCur",road:"Anav_road",roadCur:"Anav_roadCur",report:"Anav_report",reportCur:"Anav_reportCur",biz:"Anav_biz",bizCur:"Anav_bizCur",brand:"Anav_brand",brandCur:"Anav_brandCur",join:"Anav_join",joinCur:"Anav_joinCur"}},390:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e){return o.default.createElement("div",{className:w.default.box},o.default.createElement(c.default,{data:e.data.forecast}),o.default.createElement(s.default,null),o.default.createElement(m.default,null),o.default.createElement(h.default,{router:e.route.path}),o.default.createElement(v.default,{data:e.data.brand}),o.default.createElement(y.default,null))}Object.defineProperty(t,"__esModule",{value:!0});var r=a(300),o=n(r),u=a(303),i=a(306),c=n(i),d=a(308),s=n(d),f=a(310),m=n(f),p=a(359),h=n(p),_=a(391),v=n(_),b=a(316),y=n(b),E=a(393),w=n(E);t.default=(0,u.connect)(function(e){return{data:e}})(l)},391:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),i=a(300),c=n(i),d=a(392),s=n(d),f=function(e){function t(e){l(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={left:0,startX:null,endX:null,moveIndex:null,width:0},a}return o(t,e),u(t,[{key:"componentDidMount",value:function(){console.log(this.refs.picitem.style)}},{key:"onTouchStart",value:function(e){console.log(e);var t=event.changedTouches[0].pageX;this.setState({startX:t,moveIndex:e})}},{key:"onTouchMove",value:function(){var e=this.state.startX,t=event.changedTouches[0].pageX,a=this.refs.picList,n=t-e+this.state.left;n<0&&(a.style.left=n+"px")}},{key:"onTouchEnd",value:function(){var e=this.state.startX,t=event.changedTouches[0].pageX,a=t-e+this.state.left;this.setState({left:a})}},{key:"setRef",value:function(e){return e===this.state.moveIndex?"picList":""}},{key:"render",value:function(){var e=this,t=this.props.data.data.rows,a=[],n=function(n){if({}.hasOwnProperty.call(t,n)){for(var l=[],r=[],o=t[n],u=0;u<=o.img.length-1;u++)"1"===o.img[u].type?l.push(c.default.createElement("li",{key:o.img[u].id},c.default.createElement("i",null,c.default.createElement("img",{src:o.img[u].img,alt:o.img[u].desc})))):"2"===o.img[u].type&&r.push(c.default.createElement("li",{key:o.img[u].id,ref:"picitem"},c.default.createElement("i",null,c.default.createElement("img",{src:o.img[u].img,alt:o.img[u].desc})),c.default.createElement("span",null,o.img[u].desc)));a.push(c.default.createElement("li",{key:o.id},c.default.createElement("div",{className:s.default.brandList},c.default.createElement("ul",null,l)),c.default.createElement("div",{className:s.default.title},o.title),c.default.createElement("div",{className:s.default.time},o.term_date),c.default.createElement("div",{className:s.default.desc},o.description),c.default.createElement("div",{className:s.default.activityList},c.default.createElement("ul",{onTouchStart:function(){return e.onTouchStart(n)},onTouchMove:function(){return e.onTouchMove()},onTouchEnd:function(){return e.onTouchEnd()},ref:e.setRef(n)},r))))}};for(var l in t)n(l);return c.default.createElement("div",{className:s.default.AbrandDetail},c.default.createElement("ul",null,a))}}]),t}(i.Component);t.default=f},392:function(e,t){e.exports={brandList:"AbrandDetail_brandList",activityList:"AbrandDetail_activityList",AbrandDetail:"AbrandDetail_AbrandDetail",title:"AbrandDetail_title",time:"AbrandDetail_time",desc:"AbrandDetail_desc"}},393:function(e,t){e.exports={box:"Abrand_box"}}});
//# sourceMappingURL=Abrand_ff2ad.js.map