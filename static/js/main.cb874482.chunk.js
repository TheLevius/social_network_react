(this.webpackJsonpsocial_network_react=this.webpackJsonpsocial_network_react||[]).push([[0],{10:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var a,r,c=n(137),o=n.n(c).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"83ff2ca7-a319-4045-8f15-c83797dc9c95"}});!function(e){e[e.Success=0]="Success",e[e.Error=1]="Error"}(a||(a={})),function(e){e[e.CaptchaIsRequired=10]="CaptchaIsRequired"}(r||(r={}))},100:function(e,t,n){e.exports={_container:"Dialogs__container__2Obrq",_header:"Dialogs__header__2RHnB"}},102:function(e,t,n){"use strict";n.d(t,"a",(function(){return g})),n.d(t,"d",(function(){return E})),n.d(t,"c",(function(){return h})),n.d(t,"g",(function(){return v})),n.d(t,"e",(function(){return S})),n.d(t,"f",(function(){return b}));var a=n(7),r=n.n(a),c=n(14),o=n(47),s=n(4),i=n(32),u=n(10),l=function(e){return u.c.get("profile/"+e).then((function(e){return e.data}))},m=function(e){return u.c.get("profile/status/"+e).then((function(e){return e.data}))},f=function(e){return u.c.put("profile/status/",{status:e}).then((function(e){return e.data}))},p=function(e){var t=new FormData;return t.append("image",e),u.c.put("profile/photo/",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return e.data}))},d=function(e){return u.c.put("profile",e).then((function(e){return e.data}))},_={postData:[{id:1,message:"Hi, how are you?",likesCount:12},{id:2,message:"It's, my first post",likesCount:11},{id:3,message:"Hi, \u043a\u0430\u043a\u043e\u0439-\u0442\u043e \u043f\u043e\u0441\u0442",likesCount:15}],profile:null,status:""},g={addPostActionCreator:function(e){return{type:"SN/PROFILE/ADD-POST",newPostText:e}},setStatus:function(e){return{type:"SN/PROFILE/SET-STATUS",status:e}},deletePost:function(e){return{type:"SN/PROFILE/DELETE-POST",postId:e}},setUserProfile:function(e){return{type:"SN/PROFILE/SET_USER_PROFILE",profile:e}},savePhotoSuccess:function(e){return{type:"SN/PROFILE/SAVE-PHOTO-SUCCESS",photos:e}}},E=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l(e);case 2:a=t.sent,n(g.setUserProfile(a));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m(e);case 2:a=t.sent,n(g.setStatus(a));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f(e);case 2:t.sent.resultCode===u.b.Success&&n(g.setStatus(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},S=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p(e);case 2:(a=t.sent).resultCode===u.b.Success&&n(g.savePhotoSuccess(a.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n,a){var c,o;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().auth.userId,t.next=3,d(e);case 3:if((o=t.sent).resultCode!==u.b.Success){t.next=12;break}if(null===c){t.next=9;break}n(E(c)),t.next=10;break;case 9:throw new Error("UserId can't be null");case 10:t.next=14;break;case 12:return n(Object(i.b)("edit-profile",{_error:o.messages[0]})),t.abrupt("return",Promise.reject({_error:o.messages[0]}));case 14:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/PROFILE/ADD-POST":var n={id:5,message:t.newPostText,likesCount:0};return Object(s.a)(Object(s.a)({},e),{},{postData:[].concat(Object(o.a)(e.postData),[n])});case"SN/PROFILE/SET-STATUS":return Object(s.a)(Object(s.a)({},e),{},{status:t.status});case"SN/PROFILE/DELETE-POST":return Object(s.a)(Object(s.a)({},e),{},{postData:e.postData.filter((function(e){return e.id!==t.postId}))});case"SN/PROFILE/SET_USER_PROFILE":return Object(s.a)(Object(s.a)({},e),{},{profile:t.profile});case"SN/PROFILE/SAVE-PHOTO-SUCCESS":return Object(s.a)(Object(s.a)({},e),{},{profile:Object(s.a)(Object(s.a)({},e.profile),{},{photos:t.photos})});default:return e}}},11:function(e,t,n){e.exports={_containerNav:"Navigation__containerNav__1I857",_item:"Navigation__item__253cH",_itemLink:"Navigation__itemLink__X_Epa",activeLink:"Navigation_activeLink__3W-mX",_notifyCell:"Navigation__notifyCell__2EDKY"}},113:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(47),r=n(4),c={dialogsData:[{id:1,name:"Nikita"},{id:2,name:"Vladimir"},{id:3,name:"Misha"},{id:4,name:"Sergey"}],messagesData:[{id:1,message:"Hi",isSelf:!1},{id:2,message:"How is your it-kamasutra?",isSelf:!0},{id:3,message:"Yo",isSelf:!1},{id:4,message:"Hi",isSelf:!0},{id:5,message:"Hi",isSelf:!1},{id:6,message:"Hi",isSelf:!0},{id:6,message:"dfsdf",isSelf:!1},{id:6,message:"Hi",isSelf:!0}]},o={sendMessage:function(e){return{type:"SN/MESSAGES/SEND_MESSAGE",newMessageBody:e}}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/MESSAGES/SEND_MESSAGE":var n=t.newMessageBody;return Object(r.a)(Object(r.a)({},e),{},{messagesData:[].concat(Object(a.a)(e.messagesData),[{id:6,message:n,isSelf:!0}])});default:return e}}},140:function(e,t,n){e.exports=n.p+"static/media/doubleRingPreloader40.9b0765f6.svg"},143:function(e,t,n){},144:function(e,t,n){e.exports={_homelink:"Logo__homelink__2gj9f"}},145:function(e,t,n){e.exports=n.p+"static/media/logotype.d56e57dd.svg"},171:function(e,t,n){e.exports=n(297)},176:function(e,t,n){},177:function(e,t,n){},25:function(e,t,n){e.exports={_error:"FormsControls__error__3la6o",_textareaCell:"FormsControls__textareaCell__3ZBo1",_formStyles:"FormsControls__formStyles__3LE5J",_formMark:"FormsControls__formMark__3KT97",_errorMsg:"FormsControls__errorMsg__16W7q",formSummaryError:"FormsControls_formSummaryError__H_1ug"}},26:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return m})),n.d(t,"c",(function(){return f}));var a=n(55),r=n(0),c=n.n(r),o=n(25),s=n.n(o),i=n(93),u=function(e){var t=e.meta,n=t.touched,a=t.error,r=e.children,o=n&&a;return c.a.createElement("div",{className:s.a.formControl+" "+(o?s.a.error:"")},c.a.createElement("div",null,r),o&&c.a.createElement("span",null,a))},l=function(e){var t=e.input,n=e.meta,r=Object(a.a)(e,["input","meta"]);return c.a.createElement(u,e,c.a.createElement("textarea",Object.assign({},t,r,{className:"".concat(s.a._textareaCell," ").concat(n.touched&&n.error?s.a._error:"")})))},m=function(e){var t=e.input,n=e.meta,r=Object(a.a)(e,["input","meta"]);return c.a.createElement(u,e,c.a.createElement("input",Object.assign({},t,r,{className:"".concat(s.a._formStyles," ").concat(n.touched&&n.error?s.a._error:"")})))};function f(e,t,n,a){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return c.a.createElement("div",null,c.a.createElement(i.a,Object.assign({placeholder:e,name:t,component:a,validate:n},r)),o?c.a.createElement("span",{className:s.a._formMark},o):null)}},297:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(70),o=n.n(c);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(176);var s=n(39),i=n(40),u=n(43),l=n(42),m=(n(177),n(36)),f=n.n(m),p=n(12),d=n(18),_=n(17),g=n(9),E=n(102),h=n(113),v={},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v;return e},b=n(7),O=n.n(b),N=n(14),w=n(47),C=n(4),P=function(e,t,n,a){return e.map((function(e){return e[n]===t?Object(C.a)(Object(C.a)({},e),a):e}))},j=n(10),y={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return j.c.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return j.c.post("follow/".concat(e)).then((function(e){return e.data}))},unfollow:function(e){return j.c.delete("follow/".concat(e)).then((function(e){return e.data}))}},U={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},k=function(e){return{type:"SN/USERS/FOLLOW",userId:e}},I=function(e){return{type:"SN/USERS/UNFOLLOW",userId:e}},x=function(e){return{type:"SN/USERS/SET_USERS",users:e}},L=function(e){return{type:"SN/USERS/SET_CURRENT_PAGE",currentPage:e}},A=function(e){return{type:"SN/USERS/SET_TOTAL_USERS_COUNT",count:e}},T=function(e){return{type:"SN/USERS/TOGGLE_IS_FETCHING",isFetching:e}},R=function(e,t){return{type:"SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},F=function(){var e=Object(N.a)(O.a.mark((function e(t,n,a,r){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(R(!0,n)),e.next=3,a(n);case 3:0===e.sent.data.resultCode&&t(r(n)),t(R(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/USERS/FOLLOW":return Object(C.a)(Object(C.a)({},e),{},{users:P(e.users,t.userId,"id",{followed:!0})});case"SN/USERS/UNFOLLOW":return Object(C.a)(Object(C.a)({},e),{},{users:P(e.users,t.userId,"id",{followed:!1})});case"SN/USERS/SET_USERS":return Object(C.a)(Object(C.a)({},e),{},{users:t.users});case"SN/USERS/SET_CURRENT_PAGE":return Object(C.a)(Object(C.a)({},e),{},{currentPage:t.currentPage});case"SN/USERS/SET_TOTAL_USERS_COUNT":return Object(C.a)(Object(C.a)({},e),{},{totalUsersCount:t.count});case"SN/USERS/TOGGLE_IS_FETCHING":return Object(C.a)(Object(C.a)({},e),{},{isFetching:t.isFetching});case"SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS":return Object(C.a)(Object(C.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(w.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},B=n(32),G=function(){return j.c.get("auth/me").then((function(e){return e.data}))},M=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return j.c.post("auth/login",{email:e,password:t,rememberMe:n,captcha:a}).then((function(e){return e.data}))},H=function(){return j.c.delete("auth/login")},z=function(){return j.c.get("security/get-captcha-url").then((function(e){return e.data}))},W={email:null,userId:null,login:null,isAuth:!1,captchaUrl:null},q=function(e,t,n,a){return{type:"SN/AUTH/SET_USER_DATA",payload:{email:e,userId:t,login:n,isAuth:a}}},K=function(e){return{type:"SN/AUTH/GET_CAPTCHA_URL_SUCCESS",payload:{captchaUrl:e}}},Z=function(){return function(){var e=Object(N.a)(O.a.mark((function e(t){var n,a,r,c,o;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G();case 2:(n=e.sent).resultCode===j.b.Success&&(a=n.data,r=a.email,c=a.id,o=a.login,t(q(r,c,o,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Y=function(){return function(){var e=Object(N.a)(O.a.mark((function e(t){var n,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z();case 2:n=e.sent,a=n.url,t(K(a));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/AUTH/SET_USER_DATA":case"SN/AUTH/GET_CAPTCHA_URL_SUCCESS":return Object(C.a)(Object(C.a)({},e),t.payload);default:return e}},V=n(138),X=n(135),Q={initialized:!1},$=function(){return{type:"SN/MAIN/INITIALIZED_SUCCESS"}},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/MAIN/INITIALIZED_SUCCESS":return Object(C.a)(Object(C.a)({},e),{},{initialized:!0});default:return e}},te=Object(g.c)({profilePage:E.b,messagesPage:h.b,sidebar:S,usersPage:D,auth:J,form:X.a,app:ee}),ne=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||g.d,ae=Object(g.e)(te,ne(Object(g.a)(V.a)));window.__store__=ae;var re=ae,ce=n(38),oe=n(11),se=n.n(oe),ie=function(){return r.a.createElement("nav",{className:"Navigation block"},r.a.createElement("ul",{className:se.a._containerNav},r.a.createElement("li",{className:se.a._item},r.a.createElement(d.b,{to:"/profile",className:se.a._itemLink,activeClassName:se.a.activeLink},r.a.createElement("span",null,"Profile")),r.a.createElement("div",{className:se.a._notifyCell},r.a.createElement("span",null,"99"))),r.a.createElement("li",{className:se.a._item},r.a.createElement(d.b,{to:"/dialogs",className:se.a._itemLink,activeClassName:se.a.activeLink},r.a.createElement("span",null,"Messages")),r.a.createElement("div",{className:se.a._notifyCell},r.a.createElement("span",null,"99"))),r.a.createElement("li",{className:se.a._item},r.a.createElement(d.b,{to:"/users",className:se.a._itemLink,activeClassName:se.a.activeLink},r.a.createElement("span",null,"Users")),r.a.createElement("div",{className:se.a._notifyCell},r.a.createElement("span",null,"99"))),r.a.createElement("li",{className:se.a._item},r.a.createElement("a",{className:se.a._itemLink},r.a.createElement("span",null,"News")),r.a.createElement("div",{className:se.a._notifyCell},r.a.createElement("span",null,"99"))),r.a.createElement("li",{className:se.a._item},r.a.createElement("a",{className:se.a._itemLink},r.a.createElement("span",null,"Music")),r.a.createElement("div",{className:se.a._notifyCell},r.a.createElement("span",null,"99"))),r.a.createElement("li",{className:se.a._item},r.a.createElement("a",{className:se.a._itemLink},r.a.createElement("span",null,"Settings")),r.a.createElement("div",{className:se.a._notifyCell},r.a.createElement("span",null,"99")))))};function ue(e){return function(t){return r.a.createElement(r.a.Suspense,{fallback:r.a.createElement(ce.a,null)},r.a.createElement(e,t))}}var le=n(55),me=n(73),fe=n(101),pe=n(60),de=n.n(pe),_e=n(141),ge=n.n(_e),Ee=function(e){for(var t=e.totalItemsCount,n=e.pageSize,c=e.currentPage,o=void 0===c?1:c,s=e.onPageChanged,i=void 0===s?function(e){return e}:s,u=e.portionSize,l=void 0===u?10:u,m=Math.ceil(t/n),f=[],p=1;p<=m;p++)f.push(p);var d=Math.ceil(m/l),_=Object(a.useState)(1),g=Object(fe.a)(_,2),E=g[0],h=g[1],v=(E-1)*l+1,S=E*l;return r.a.createElement("div",{className:de.a.paginator},r.a.createElement("div",{className:de.a._pagePanel},E>1&&r.a.createElement("button",{onClick:function(){h(E-1)}},"Previus"),f.filter((function(e){return e>=v&&e<=S})).map((function(e){return r.a.createElement("span",{className:ge()(Object(me.a)({},de.a.selectedPage,o===e),de.a.pageNumber),onClick:function(t){i(e)},key:e},e)})),d>E&&r.a.createElement("button",{onClick:function(){h(E+1)}},"Next")))},he=n(31),ve=n.n(he),Se=n(68),be=n.n(Se),Oe=function(e){var t=e.user,n=e.followingInProgress,a=e.follow,c=e.unfollow;return r.a.createElement("div",{className:"Users block"},r.a.createElement("div",null,r.a.createElement("div",{className:ve.a._usersBox1},r.a.createElement(d.b,{to:"/profile/"+t.id},r.a.createElement("div",{className:ve.a._imgBox},r.a.createElement("img",{className:ve.a._img,alt:"faceAvatar",src:null!==t.photos.small?t.photos.small:be.a}))),r.a.createElement("div",{className:ve.a._followBtnBox},t.followed?r.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){c(t.id)}},"FOLLOW"):r.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)}},"UNFOLLOW"))),r.a.createElement("div",{className:ve.a._usersBox2},r.a.createElement("div",{className:ve.a._personInfoBox1},r.a.createElement("div",null,t.name),r.a.createElement("div",null,t.status)),r.a.createElement("div",{className:ve.a._personInfoBox2},r.a.createElement("div",null,"user.location.country"),r.a.createElement("div",null,"user.location.city")))))},Ne=function(e){var t=e.currentPage,n=e.onPageChanged,a=e.totalUsersCount,c=e.pageSize,o=e.users,s=Object(le.a)(e,["currentPage","onPageChanged","totalUsersCount","pageSize","users"]);return r.a.createElement("div",{className:"Users block"},r.a.createElement(Ee,{currentPage:t,onPageChanged:n,totalItemsCount:a,pageSize:c}),r.a.createElement("div",null,o.map((function(e){return r.a.createElement(Oe,{user:e,followingInProgress:s.followingInProgress,follow:s.follow,unfollow:s.unfollow,key:e.id})}))))},we=n(142),Ce=Object(we.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),Pe=function(e){return e.usersPage.pageSize},je=function(e){return e.usersPage.totalUsersCount},ye=function(e){return e.usersPage.currentPage},Ue=function(e){return e.usersPage.isFetching},ke=function(e){return e.usersPage.followingInProgress},Ie=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).onPageChanged=function(t){var n=e.props;(0,n.getUsers)(t,n.pageSize)},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this.props;(0,e.getUsers)(e.currentPage,e.pageSize)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,this.props.pageTitle),this.props.isFetching?r.a.createElement(ce.a,null):null,r.a.createElement(Ne,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress}))}}]),n}(r.a.Component),xe=Object(g.d)(Object(_.b)((function(e){return{users:Ce(e),pageSize:Pe(e),totalUsersCount:je(e),currentPage:ye(e),isFetching:Ue(e),followingInProgress:ke(e)}}),{follow:function(e){return function(){var t=Object(N.a)(O.a.mark((function t(n){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:F(n,e,y.follow.bind(y),k);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(N.a)(O.a.mark((function t(n){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:F(n,e,y.unfollow.bind(y),I);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getUsers:function(e,t){return function(){var n=Object(N.a)(O.a.mark((function n(a,r){var c;return O.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(T(!0)),a(L(e)),n.next=4,y.getUsers(e,t);case 4:c=n.sent,a(T(!1)),a(x(c.items)),a(A(c.totalCount));case 8:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()}}))(Ie),Le=n(143),Ae=n.n(Le),Te=n(25),Re=n.n(Te),Fe=n(134),De=n(26),Be=n(52),Ge=Object(Fe.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error,a=e.captchaUrl;return r.a.createElement("form",{onSubmit:t},Object(De.c)("Email","email",[Be.b],De.a),Object(De.c)("Password","password",[Be.b],De.a,{type:"password"}),Object(De.c)(void 0,"rememberMe",[Be.b],De.a,{type:"checkbox"},"Remember Me"),a&&r.a.createElement("img",{src:a,className:Ae.a.imgCaptcha}),a&&Object(De.c)("symbols from image","captcha",[Be.b],De.a,{}),n&&r.a.createElement("div",{className:Re.a.formSummaryError},n),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"Login")))})),Me=Object(_.b)((function(e){return{isAuth:e.auth.isAuth,captchaUrl:e.auth.captchaUrl}}),{login:function(e,t,n,a){return function(){var r=Object(N.a)(O.a.mark((function r(c){var o,s;return O.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,M(e,t,n,a);case 2:(o=r.sent).resultCode===j.b.Success?c(Z()):o.resultCode===j.a.CaptchaIsRequired?c(Y()):(s=o.messages.length>0?o.messages[0]:"Some error",c(Object(B.b)("login",{_error:s})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?r.a.createElement(p.a,{to:"/profile"}):r.a.createElement("div",{className:"Login block"},r.a.createElement("h1",null,"LOGIN"),r.a.createElement(Ge,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe,t.captcha)},captchaUrl:e.captchaUrl}))})),He=n(100),ze=n.n(He),We=n(48),qe=n.n(We),Ke=function(e){return r.a.createElement("div",{className:"DialogItem block"},r.a.createElement(d.b,{to:"/dialogs/"+e.id,className:qe.a._containerGrid},r.a.createElement("div",{className:"".concat(qe.a._avatarBox," ").concat(qe.a.dialogAva)},r.a.createElement("img",{className:qe.a._avatarImg,src:be.a})),r.a.createElement("div",{className:qe.a.usernameBox},r.a.createElement("span",null,r.a.createElement("strong",null,e.name)))))},Ze=function(e){var t=e.dialogsData.map((function(e){return r.a.createElement(Ke,{name:e.name,key:e.id,id:e.id})}));return r.a.createElement("div",{className:"Dialogs block"},r.a.createElement("div",{className:ze.a._container},r.a.createElement("h6",{className:ze.a._header},"\u0414\u0438\u0430\u043b\u043e\u0433\u0438"),t))},Ye=n(144),Je=n.n(Ye),Ve=n(145),Xe=n.n(Ve),Qe=function(){return r.a.createElement("div",{className:"Logo block_inline"},r.a.createElement("a",{className:Je.a._homelink,href:"#homelink",id:"homelink"},r.a.createElement("img",{src:Xe.a,alt:"homelink"}),r.a.createElement("span",null,"Petfans")))},$e=n(76),et=n.n($e),tt=function(e){return r.a.createElement("header",{className:"Header block"},r.a.createElement("div",{className:et.a._wrapper},r.a.createElement("div",{className:et.a._container},r.a.createElement(Qe,null),r.a.createElement("div",{className:et.a._loginBox},e.isAuth?r.a.createElement("div",null,e.login," - ",r.a.createElement("button",{onClick:e.logout},"Log Out")):r.a.createElement(d.b,{to:"/login"},"Login")))))},nt=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement(tt,this.props)}}]),n}(r.a.Component),at=Object(_.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(N.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H();case 2:e.sent.data.resultCode===j.b.Success&&t(q(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(nt),rt=r.a.lazy((function(){return n.e(3).then(n.bind(null,305))})),ct=r.a.lazy((function(){return n.e(4).then(n.bind(null,306))})),ot=ue(r.a.lazy((function(){return n.e(5).then(n.bind(null,307))}))),st=ue(rt),it=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).catchAllUnhandledErrors=function(e){alert("some error occured")},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp(),window.addEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"render",value:function(){var e=this;return this.props.initialized?r.a.createElement("div",{className:"App"},r.a.createElement(at,null),r.a.createElement("main",{className:"Main block"},r.a.createElement("div",{className:f.a._wrapper},r.a.createElement("div",{className:f.a._container},r.a.createElement("div",{className:f.a._LeftColumn},r.a.createElement(ie,null)),r.a.createElement("div",{className:f.a._UserCardColumn},r.a.createElement(p.b,{path:"/",render:function(){return r.a.createElement(p.a,{to:"/profile"})}}),r.a.createElement(p.b,{path:"/profile/:userId?",render:function(){return r.a.createElement(st,null)}}),r.a.createElement(p.b,{path:"/users",render:function(){return r.a.createElement(xe,{pageTitle:"\u0421\u0430\u043c\u0443\u0440\u0430\u0439"})}}),r.a.createElement(p.b,{path:"/login",render:function(){return r.a.createElement(Me,null)}})),r.a.createElement("div",{className:f.a._NarrowColumn},r.a.createElement(p.b,{path:"/dialogs",render:function(t){return r.a.createElement(Ze,{dialogsData:e.props.state.messagesPage.dialogsData})}})),r.a.createElement("div",{className:f.a._WideColumn},r.a.createElement(p.b,{path:"/dialogs",render:function(){return r.a.createElement(ot,null)}}),r.a.createElement(p.b,{path:"/profile",render:ue(ct)})))))):r.a.createElement(ce.a,null)}}]),n}(r.a.Component),ut=Object(g.d)(p.f,Object(_.b)((function(e){return{initialized:e.app.initialized,state:e}}),{initializeApp:function(){return function(e){var t=e(Z());Promise.all([t]).then((function(){e($())}))}}}))(it),lt=function(){return r.a.createElement(d.a,null,r.a.createElement(_.a,{store:re},r.a.createElement(ut,null)))};o.a.render(r.a.createElement(lt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},31:function(e,t,n){e.exports={_usersBox2:"Users__usersBox2__1BL88",_imgBox:"Users__imgBox__Pn1Gj",_img:"Users__img__2FJjK",_pagePanel:"Users__pagePanel__2kZah",_selectedPage:"Users__selectedPage__2kVPR"}},36:function(e,t,n){e.exports={_wrapper:"App__wrapper__2lJBG",_container:"App__container__3O8_x",_LeftColumn:"App__LeftColumn__jRzFF",_UserCardColumn:"App__UserCardColumn__3iGqw",_NarrowColumn:"App__NarrowColumn__aY88a",_WideColumn:"App__WideColumn__153-O"}},38:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(95),o=n.n(c),s=n(140),i=n.n(s);t.a=function(){return r.a.createElement("div",{className:o.a._preloaderBox},r.a.createElement("img",{src:i.a,className:o.a._preloader}))}},48:function(e,t,n){e.exports={_containerGrid:"DialogItem__containerGrid__5zyqm",active:"DialogItem_active__34APj",_avatarBox:"DialogItem__avatarBox__eFuDK",_avatarImg:"DialogItem__avatarImg__2NZdb",dialogAva:"DialogItem_dialogAva__CYk0n",usernameBox:"DialogItem_usernameBox__3Ad1Q"}},52:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var a=function(e){return e?void 0:"Field is required"},r=function(e){return function(t){return t.length>e?"Max length is ".concat(e," symbols"):void 0}}},60:function(e,t,n){e.exports={_pagePanel:"Paginator__pagePanel__2YcBW",_selectedPage:"Paginator__selectedPage__3Hzi7",paginator:"Paginator_paginator__ETtZo",pageNumber:"Paginator_pageNumber__1b0sD",selectedPage:"Paginator_selectedPage__1rABy"}},68:function(e,t,n){e.exports=n.p+"static/media/avatar.93a43109.jpg"},76:function(e,t,n){e.exports={_wrapper:"Header__wrapper__1ZUa2",_container:"Header__container__1y67T",_loginBox:"Header__loginBox__KK7ad"}},95:function(e,t,n){e.exports={_preloaderBox:"Preloader__preloaderBox__2mhvR"}}},[[171,1,2]]]);
//# sourceMappingURL=main.cb874482.chunk.js.map