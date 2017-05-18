webpackJsonp([9],{306:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),i=a(300),d=l(i),c=a(307),f=l(c),s=function(e){function t(e){n(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={display:!1},a}return o(t,e),u(t,[{key:"handleShowOrHide",value:function(){this.setState({display:!this.state.display})}},{key:"render",value:function(){var e=this,t=this.props.data.data,a=[],l=[];if(t.alerts.length>0){var n=f.default["level_"+t.alerts[0].level_no];a.push(d.default.createElement("div",{className:f.default.alertContent,key:"alert"},d.default.createElement("i",{className:n},d.default.createElement("img",{src:"http://cdn.moji.com/f5/weather/warn/warn_"+t.alerts[0].name_no+".png",alt:t.alerts[0].name_no})),d.default.createElement("b",null,t.alerts[0].type,"预警")))}for(var r=0;r<=t.forecastDayList.length-1;r++){var o=t.forecastDayList[r];if(t.forecastaqi[o.Fpredict_date]){var u=t.forecastaqi[o.Fpredict_date].desc,i=f.default["level_"+t.forecastaqi[o.Fpredict_date].level];u.length>2&&(u=u.substring(0,2)),l.push(d.default.createElement("li",{className:f.default.item,key:r},d.default.createElement("span",{className:f.default.week},t.forecastaqi[o.Fpredict_date].week),d.default.createElement("span",{className:f.default.date},t.forecastaqi[o.Fpredict_date].day),d.default.createElement("span",{className:f.default.temp},o.Ftemp_high),d.default.createElement("i",{className:f.default.icon},d.default.createElement("img",{src:"https://h5tq.moji.com/mtianqi/assets/images/wea/w"+o.Ficon_day+".png",alt:o.Ficon_day})),d.default.createElement("span",{className:f.default.wea},o.Fcondition_day),d.default.createElement("span",{className:f.default.wind},o.Fwind_dir_day),d.default.createElement("b",{className:i},u)))}else l.push(d.default.createElement("li",{className:f.default.item,key:r},d.default.createElement("span",{className:f.default.week},"无"),d.default.createElement("span",{className:f.default.date},"无"),d.default.createElement("span",{className:f.default.temp},"无"),d.default.createElement("i",{className:f.default.icon},"无"),d.default.createElement("span",{className:f.default.wea},"无"),d.default.createElement("span",{className:f.default.wind},"无"),d.default.createElement("b",{className:f.default.level},"无")))}var c=f.default.hide;return c=this.state.display?f.default.show:f.default.hide,d.default.createElement("div",{className:f.default.head},d.default.createElement("logo",{className:f.default.logo}),d.default.createElement("div",{className:f.default.weather,onClick:function(){return e.handleShowOrHide()}},d.default.createElement("b",null,t.city.name," ",t.city.pname),d.default.createElement("span",null,t.condition.Ftemp),d.default.createElement("i",null,d.default.createElement("img",{src:"https://h5tq.moji.com/mtianqi/assets/images/wea/w"+t.condition.Ficon+".png",alt:t.condition.Ficon}))),d.default.createElement("div",{className:c},d.default.createElement("div",{className:f.default.title},d.default.createElement("div",{className:f.default.alert},a,d.default.createElement("b",null,t.time.monthG),d.default.createElement("span",null,"农历 ",t.time.monthN)),d.default.createElement("a",{href:"http://m.moji.com/",className:f.default.more},"更多")),d.default.createElement("div",{className:f.default.items},d.default.createElement("ul",null,l))))}}]),t}(i.Component);t.default=s},307:function(e,t){e.exports={head:"Header_head",title:"Header_title",items:"Header_items",level_1:"Header_level_1",level_2:"Header_level_2",level_3:"Header_level_3",level_4:"Header_level_4",level_5:"Header_level_5",level_6:"Header_level_6",logo:"Header_logo",weather:"Header_weather",hide:"Header_hide",show:"Header_show",alert:"Header_alert",alertContent:"Header_alertContent",more:"Header_more",item:"Header_item",week:"Header_week",wea:"Header_wea",temp:"Header_temp",wind:"Header_wind",date:"Header_date",icon:"Header_icon"}},308:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),i=a(300),d=l(i),c=a(302),f=a(309),s=l(f),m=function(e){function t(e){n(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={display:!1},a}return o(t,e),u(t,[{key:"handleShowOrHide",value:function(){this.setState({display:!this.state.display})}},{key:"render",value:function(){var e=this,t=this.props.router,a=s.default.home,l=s.default.download;switch(t){case"/":a=s.default.homeCur;break;case"/download":l=s.default.downloadCur;break;default:a=s.default.home,l=s.default.download}var n=s.default.hide;return n=this.state.display?s.default.show:s.default.hide,d.default.createElement("div",{className:s.default.nav},d.default.createElement(c.Link,{to:"/",className:a}),d.default.createElement(c.Link,{to:"/download",className:l}),d.default.createElement("button",{className:s.default.menu,onClick:function(){return e.handleShowOrHide()}}),d.default.createElement("div",{className:n,onClick:function(){return e.handleShowOrHide()}},d.default.createElement("ul",{className:s.default.items},d.default.createElement("li",null,d.default.createElement(c.Link,{to:"/"},"首页")),d.default.createElement("li",null,d.default.createElement(c.Link,{to:"/download"},"下载")),d.default.createElement("li",null,d.default.createElement(c.Link,{to:"/tob"},"天气服务")),d.default.createElement("li",null,d.default.createElement(c.Link,{to:"/news"},"资讯")),d.default.createElement("li",null,d.default.createElement(c.Link,{to:"/about"},"关于墨迹"))),d.default.createElement("div",{className:s.default.bg})))}}]),t}(i.Component);t.default=m},309:function(e,t){e.exports={nav:"Nav_nav",home:"Nav_home",homeCur:"Nav_homeCur",download:"Nav_download",downloadCur:"Nav_downloadCur",menu:"Nav_menu",hide:"Nav_hide",show:"Nav_show",items:"Nav_items",bg:"Nav_bg"}},310:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e){if(e.data)return o.default.createElement("banner",{className:i.default.banner,dangerouslySetInnerHTML:{__html:e.data.data.content}})}Object.defineProperty(t,"__esModule",{value:!0});var r=a(300),o=l(r),u=a(311),i=l(u);t.default=n},311:function(e,t){e.exports={banner:"Banner_banner"}},316:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),i=a(300),d=l(i),c=a(317),f=l(c),s=function(e){function t(e){n(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={display:!1,top:null},a._handleScroll=a.handleScroll.bind(a),a}return o(t,e),u(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this._handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this._handleScroll)}},{key:"handleScroll",value:function(){var e=document.documentElement.scrollTop||document.body.scrollTop;e>0?this.setState({display:!0,top:e}):this.setState({display:!1,top:e})}},{key:"handleToScrollTop",value:function(){var e=this.state.top,t=setInterval(function(){e-=50,document.body.scrollTop=e,document.documentElement.scrollTop=e,e<=0&&clearInterval(t)},10);this.setState({display:!1})}},{key:"render",value:function(){var e=this,t=f.default.hide;return t=this.state.display?f.default.show:f.default.hide,d.default.createElement("toTop",{className:t,onClick:function(){return e.handleToScrollTop()}})}}]),t}(i.Component);t.default=s},317:function(e,t){e.exports={hide:"ToTop_hide",show:"ToTop_show"}},320:function(e,t,a){e.exports=a(295)(258)},322:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={domain:"http://0.0.0.0:9527",static:""};t.default=a},364:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e){var t=e.router,a=d.default.about,l=d.default.road,n=d.default.report,r=d.default.biz,i=d.default.brand,c=d.default.join;switch(t){case"/about":a=d.default.aboutCur;break;case"/road":l=d.default.roadCur;break;case"/report":n=d.default.reportCur;break;case"/biz":r=d.default.bizCur;break;case"/brand":i=d.default.brandCur;break;case"/join":c=d.default.joinCur;break;default:a=d.default.aboutCur}return o.default.createElement("div",{className:d.default.Anav},o.default.createElement("ul",null,o.default.createElement("li",{className:a},o.default.createElement(u.Link,{to:"/about"},"关于墨迹")),o.default.createElement("li",{className:l},o.default.createElement(u.Link,{to:"/road"},"墨迹之路")),o.default.createElement("li",{className:n},o.default.createElement(u.Link,{to:"/report"},"墨迹动态")),o.default.createElement("li",{className:r},o.default.createElement(u.Link,{to:"/biz"},"商务合作")),o.default.createElement("li",{className:i},o.default.createElement(u.Link,{to:"/brand"},"品牌案例")),o.default.createElement("li",{className:c},o.default.createElement(u.Link,{to:"/join"},"加入我们"))))}Object.defineProperty(t,"__esModule",{value:!0});var r=a(300),o=l(r),u=a(302),i=a(365),d=l(i);t.default=n},365:function(e,t){e.exports={Anav:"Anav_Anav",about:"Anav_about",aboutCur:"Anav_aboutCur",road:"Anav_road",roadCur:"Anav_roadCur",report:"Anav_report",reportCur:"Anav_reportCur",biz:"Anav_biz",bizCur:"Anav_bizCur",brand:"Anav_brand",brandCur:"Anav_brandCur",join:"Anav_join",joinCur:"Anav_joinCur"}},389:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),i=a(300),d=l(i),c=a(303),f=a(306),s=l(f),m=a(308),p=l(m),b=a(310),_=l(b),v=a(364),h=l(v),E=a(390),y=l(E),w=a(392),N=l(w),C=a(394),A=l(C),z=a(396),k=l(z),O=a(316),g=l(O),j=a(398),P=l(j),H=a(399),M=function(e){function t(){return n(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),u(t,[{key:"componentWillMount",value:function(){var e=this.props.dispatch;e((0,H.bizPost)())}},{key:"render",value:function(){var e=this.props,t=e.forecast,a=e.biz,l=e.route;return a.data.contant?d.default.createElement("div",{className:P.default.box},d.default.createElement(s.default,{data:t}),d.default.createElement(p.default,null),d.default.createElement(_.default,{data:a.data.banner}),d.default.createElement(h.default,{router:l.path}),d.default.createElement(y.default,null),d.default.createElement(N.default,null),d.default.createElement(A.default,{data:a.data.contant}),d.default.createElement(k.default,{data:a.data.cooperate}),d.default.createElement(g.default,null)):d.default.createElement("div",null,"loading")}}]),t}(i.Component),S=function(e){var t=e.biz,a=e.forecast;return{biz:t,forecast:a}};t.default=(0,c.connect)(S)(M)},390:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(){return o.default.createElement("div",{className:i.default.AbizDetail},o.default.createElement("div",{className:i.default.title}),o.default.createElement("div",{className:i.default.text},o.default.createElement("p",null,"北京墨迹风云科技股份有限公司，目前主推出墨迹天气软件， 现已稳居APP排行榜第一阵营，且持续占据天气类软件第一位置； 合作包括国内墨迹天气产品推广，Android及iOS的激活推广， 市场渠道换量及付费推广合作，App产品内容层面合作； 以及基于品牌广告在墨迹天气APP端推广合作需求，包括品牌广告投放， 原生性植入合作，广告代理公司合作；海外CP及应用市场换量合作， 海外手机厂商内置，及定制版合作模式。同时现已开放TO B的天气服务， 为广大合作伙伴提供更好的气象服务。 欢迎广大品牌商、应用市场、客户端、手机厂商等与我们联系，洽谈合作。")))}Object.defineProperty(t,"__esModule",{value:!0});var r=a(300),o=l(r),u=a(391),i=l(u);t.default=n},391:function(e,t){e.exports={AbizDetail:"AbizDetail_AbizDetail",title:"AbizDetail_title",text:"AbizDetail_text"}},392:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(){return o.default.createElement("div",{className:i.default.AbizInfo},o.default.createElement("ul",null,o.default.createElement("li",{className:i.default.item},o.default.createElement("div",{className:i.default.title},"商务合作"),o.default.createElement("div",{className:i.default.desc},"国内墨迹天气产品推广，包 括Android及iOS的激活推 广，市场渠道换量及付费推 广合作，App产品内容层面 合作。")),o.default.createElement("li",{className:i.default.item},o.default.createElement("div",{className:i.default.title},"品牌合作"),o.default.createElement("div",{className:i.default.desc},"基于品牌广告在墨迹天气APP 端推广合作需求，包括品牌广 告投放，原生性植入合作，广 告代理公司合作。")),o.default.createElement("li",{className:i.default.item},o.default.createElement("div",{className:i.default.title},"海外合作"),o.default.createElement("div",{className:i.default.desc},"海外CP及应用市场换量合作， 海外手机厂商内置，及定制版 合作模式。")),o.default.createElement("li",{className:i.default.item},o.default.createElement("div",{className:i.default.title},"TO B天气服务"),o.default.createElement("div",{className:i.default.desc},"为行业客户提供最专业的全球 气象服务，内容全面、数据专 业精准、系统稳定"))))}Object.defineProperty(t,"__esModule",{value:!0});var r=a(300),o=l(r),u=a(393),i=l(u);t.default=n},393:function(e,t){e.exports={AbizInfo:"AbizInfo_AbizInfo",biz:"AbizInfo_biz",brand:"AbizInfo_brand",abroad:"AbizInfo_abroad",tob:"AbizInfo_tob",text:"AbizInfo_text",more:"AbizInfo_more",title:"AbizInfo_title",desc:"AbizInfo_desc"}},394:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e){var t=e.data.data,a=[];if(t)for(var l=0;l<=t.length-1;l++){var n=t[l];a.push(o.default.createElement("li",{className:i.default.item,key:n.id},o.default.createElement("h3",{className:i.default.way},n.title),o.default.createElement("p",{className:i.default.name},n.name),o.default.createElement("p",{className:i.default.qq},n.qq),o.default.createElement("p",{className:i.default.phone},n.tel),o.default.createElement("p",{className:i.default.mail},n.email)))}return o.default.createElement("div",{className:i.default.AbizContant},o.default.createElement("div",{className:i.default.title}),o.default.createElement("div",{className:i.default.list},o.default.createElement("ul",null,a)))}Object.defineProperty(t,"__esModule",{value:!0});var r=a(300),o=l(r),u=a(395),i=l(u);t.default=n},395:function(e,t){e.exports={item:"AbizContant_item",AbizContant:"AbizContant_AbizContant",title:"AbizContant_title",way:"AbizContant_way",name:"AbizContant_name",qq:"AbizContant_qq",phone:"AbizContant_phone",mail:"AbizContant_mail"}},396:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e){for(var t=e.data.data,a=[],l=0;l<=t.length-1;l++){var n=t[l];a.push(o.default.createElement("li",{className:i.default.img,key:n.id},o.default.createElement("a",{href:n.url,target:"_blank",rel:"noopener noreferrer"},o.default.createElement("img",{src:n.img,alt:n.title}))))}return o.default.createElement("div",{className:i.default.AbizCooperate},o.default.createElement("div",{className:i.default.title}),o.default.createElement("div",{className:i.default.list},o.default.createElement("ul",null,a)))}Object.defineProperty(t,"__esModule",{value:!0});var r=a(300),o=l(r),u=a(397),i=l(u);t.default=n},397:function(e,t){e.exports={AbizCooperate:"AbizCooperate_AbizCooperate",list:"AbizCooperate_list",title:"AbizCooperate_title",img:"AbizCooperate_img"}},398:function(e,t){e.exports={box:"Abiz_box"}},399:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.bizPost=t.bizReceive=t.bizRequest=void 0,a(320);var n=a(400),r=a(322),o=l(r),u=t.bizRequest=function(){return{type:n.BIZ_REQUEST}},i=t.bizReceive=function(e){return{type:n.BIZ_RECEIVE,data:e}};t.bizPost=function(){return function(e){return e(u()),fetch(o.default.domain+"/api/biz").then(function(e){return e.status>=400&&console.log("net work fail"),e.json()}).then(function(t){e(i(t))}).catch(function(e){return console.log("parsing failed",e)})}}}});
//# sourceMappingURL=Abiz_f37f0.js.map