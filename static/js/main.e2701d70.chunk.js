(this.webpackJsonpsocial_network_react=this.webpackJsonpsocial_network_react||[]).push([[0],{10:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var a,r,c=n(136),o=n.n(c).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"83ff2ca7-a319-4045-8f15-c83797dc9c95"}});!function(e){e[e.Success=0]="Success",e[e.Error=1]="Error"}(a||(a={})),function(e){e[e.CaptchaIsRequired=10]="CaptchaIsRequired"}(r||(r={}))},102:function(e,t,n){"use strict";n.d(t,"a",(function(){return g})),n.d(t,"d",(function(){return E})),n.d(t,"c",(function(){return h})),n.d(t,"g",(function(){return v})),n.d(t,"e",(function(){return S})),n.d(t,"f",(function(){return b}));var a=n(7),r=n.n(a),c=n(14),o=n(47),s=n(4),i=n(32),u=n(10),l=function(e){return u.c.get("profile/"+e).then((function(e){return e.data}))},m=function(e){return u.c.get("profile/status/"+e).then((function(e){return e.data}))},f=function(e){return u.c.put("profile/status/",{status:e}).then((function(e){return e.data}))},d=function(e){var t=new FormData;return t.append("image",e),u.c.put("profile/photo/",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return e.data}))},p=function(e){return u.c.put("profile",e).then((function(e){return e.data}))},_={postData:[{id:1,message:"Hi, how are you?",likesCount:12},{id:2,message:"It's, my first post",likesCount:11},{id:3,message:"Hi, \u043a\u0430\u043a\u043e\u0439-\u0442\u043e \u043f\u043e\u0441\u0442",likesCount:15}],profile:null,status:"",newPostText:""},g={addPostActionCreator:function(e){return{type:"SN/PROFILE/ADD-POST",newPostText:e}},setStatus:function(e){return{type:"SN/PROFILE/SET-STATUS",status:e}},deletePost:function(e){return{type:"SN/PROFILE/DELETE-POST",postId:e}},setUserProfile:function(e){return{type:"SN/PROFILE/SET_USER_PROFILE",profile:e}},savePhotoSuccess:function(e){return{type:"SN/PROFILE/SAVE-PHOTO-SUCCESS",photos:e}}},E=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l(e);case 2:a=t.sent,n(g.setUserProfile(a));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m(e);case 2:a=t.sent,n(g.setStatus(a));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f(e);case 2:t.sent.resultCode===u.b.Success&&n(g.setStatus(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},S=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d(e);case 2:(a=t.sent).resultCode===u.b.Success&&n(g.savePhotoSuccess(a.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n,a){var c,o;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().auth.userId,t.next=3,p(e);case 3:if((o=t.sent).resultCode!==u.b.Success){t.next=12;break}if(null===c){t.next=9;break}n(E(c)),t.next=10;break;case 9:throw new Error("UserId can't be null");case 10:t.next=14;break;case 12:return n(Object(i.b)("edit-profile",{_error:o.messages[0]})),t.abrupt("return",Promise.reject({_error:o.messages[0]}));case 14:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/PROFILE/ADD-POST":var n={id:5,message:t.newPostText,likesCount:0};return Object(s.a)(Object(s.a)({},e),{},{postData:[].concat(Object(o.a)(e.postData),[n]),newPostText:""});case"SN/PROFILE/SET-STATUS":return Object(s.a)(Object(s.a)({},e),{},{status:t.status});case"SN/PROFILE/DELETE-POST":return Object(s.a)(Object(s.a)({},e),{},{postData:e.postData.filter((function(e){return e.id!==t.postId}))});case"SN/PROFILE/SET_USER_PROFILE":return Object(s.a)(Object(s.a)({},e),{},{profile:t.profile});case"SN/PROFILE/SAVE-PHOTO-SUCCESS":return Object(s.a)(Object(s.a)({},e),{},{profile:Object(s.a)(Object(s.a)({},e.profile),{},{photos:t.photos})});default:return e}}},11:function(e,t,n){e.exports={_containerNav:"Navigation__containerNav__2qdFV",_item:"Navigation__item__U-Fr2",_itemLink:"Navigation__itemLink__2kQ1F",activeLink:"Navigation_activeLink__2hDA7",_notifyCell:"Navigation__notifyCell__1r4rf"}},112:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(47),r=n(4),c={dialogsData:[{id:1,name:"Nikita"},{id:2,name:"Vladimir"},{id:3,name:"Misha"},{id:4,name:"Sergey"}],messagesData:[{id:1,message:"Hi",isSelf:!1},{id:2,message:"How is your it-kamasutra?",isSelf:!0},{id:3,message:"Yo",isSelf:!1},{id:4,message:"Hi",isSelf:!0},{id:5,message:"Hi",isSelf:!1},{id:6,message:"Hi",isSelf:!0},{id:6,message:"dfsdf",isSelf:!1},{id:6,message:"Hi",isSelf:!0}]},o={sendMessage:function(e){return{type:"SN/MESSAGES/SEND_MESSAGE",newMessageBody:e}}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/MESSAGES/SEND_MESSAGE":var n=t.newMessageBody;return Object(r.a)(Object(r.a)({},e),{},{messagesData:[].concat(Object(a.a)(e.messagesData),[{id:6,message:n,isSelf:!0}])});default:return e}}},140:function(e,t,n){e.exports={_homelink:"Logo__homelink__2gj9f"}},141:function(e,t,n){e.exports=n.p+"static/media/logotype.d56e57dd.svg"},143:function(e,t,n){e.exports=n.p+"static/media/doubleRingPreloader40.9b0765f6.svg"},145:function(e,t,n){},171:function(e,t,n){e.exports=n(297)},25:function(e,t,n){e.exports={_error:"FormsControls__error__1M1C3",_textareaCell:"FormsControls__textareaCell__j2DYr",_formStyles:"FormsControls__formStyles__2OA8l",_formMark:"FormsControls__formMark__3Mt9v",_errorMsg:"FormsControls__errorMsg__1zlCX",formSummaryError:"FormsControls_formSummaryError__36fa7"}},254:function(e,t,n){},255:function(e,t,n){},26:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return m})),n.d(t,"c",(function(){return f}));var a=n(59),r=n(0),c=n.n(r),o=n(25),s=n.n(o),i=n(93),u=function(e){var t=e.meta,n=t.touched,a=t.error,r=e.children,o=n&&a;return c.a.createElement("div",{className:s.a.formControl+" "+(o?s.a.error:"")},c.a.createElement("div",null,r),o&&c.a.createElement("span",null,a))},l=function(e){var t=e.input,n=e.meta,r=Object(a.a)(e,["input","meta"]);return c.a.createElement(u,e,c.a.createElement("textarea",Object.assign({},t,r,{className:"".concat(s.a._textareaCell," ").concat(n.touched&&n.error?s.a._error:"")})))},m=function(e){var t=e.input,n=e.meta,r=Object(a.a)(e,["input","meta"]);return c.a.createElement(u,e,c.a.createElement("input",Object.assign({},t,r,{className:"".concat(s.a._formStyles," ").concat(n.touched&&n.error?s.a._error:"")})))};function f(e,t,n,a){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return c.a.createElement("div",null,c.a.createElement(i.a,Object.assign({placeholder:e,name:t,component:a,validate:n},r)),o?c.a.createElement("span",{className:s.a._formMark},o):null)}},297:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(70),o=n.n(c);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=n(9),i=n(102),u=n(112),l={},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l;return e},f=n(7),d=n.n(f),p=n(14),_=n(47),g=n(4),E=function(e,t,n,a){return e.map((function(e){return e[n]===t?Object(g.a)(Object(g.a)({},e),a):e}))},h=n(10),v={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return h.c.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return h.c.post("follow/".concat(e)).then((function(e){return e.data}))},unfollow:function(e){return h.c.delete("follow/".concat(e)).then((function(e){return e.data}))}},S={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},b=function(e){return{type:"SN/USERS/FOLLOW",userId:e}},O=function(e){return{type:"SN/USERS/UNFOLLOW",userId:e}},N=function(e){return{type:"SN/USERS/SET_USERS",users:e}},w=function(e){return{type:"SN/USERS/SET_CURRENT_PAGE",currentPage:e}},C=function(e){return{type:"SN/USERS/SET_TOTAL_USERS_COUNT",count:e}},P=function(e){return{type:"SN/USERS/TOGGLE_IS_FETCHING",isFetching:e}},j=function(e,t){return{type:"SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},y=function(){var e=Object(p.a)(d.a.mark((function e(t,n,a,r){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(j(!0,n)),e.next=3,a(n);case 3:0===e.sent.data.resultCode&&t(r(n)),t(j(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/USERS/FOLLOW":return Object(g.a)(Object(g.a)({},e),{},{users:E(e.users,t.userId,"id",{followed:!0})});case"SN/USERS/UNFOLLOW":return Object(g.a)(Object(g.a)({},e),{},{users:E(e.users,t.userId,"id",{followed:!1})});case"SN/USERS/SET_USERS":return Object(g.a)(Object(g.a)({},e),{},{users:t.users});case"SN/USERS/SET_CURRENT_PAGE":return Object(g.a)(Object(g.a)({},e),{},{currentPage:t.currentPage});case"SN/USERS/SET_TOTAL_USERS_COUNT":return Object(g.a)(Object(g.a)({},e),{},{totalUsersCount:t.count});case"SN/USERS/TOGGLE_IS_FETCHING":return Object(g.a)(Object(g.a)({},e),{},{isFetching:t.isFetching});case"SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS":return Object(g.a)(Object(g.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(_.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},k=n(32),I=function(){return h.c.get("auth/me").then((function(e){return e.data}))},x=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return h.c.post("auth/login",{email:e,password:t,rememberMe:n,captcha:a}).then((function(e){return e.data}))},L=function(){return h.c.delete("auth/login")},T=function(){return h.c.get("security/get-captcha-url").then((function(e){return e.data}))},A={email:null,userId:null,login:null,isAuth:!1,captchaUrl:null},R=function(e,t,n,a){return{type:"SN/AUTH/SET_USER_DATA",payload:{email:e,userId:t,login:n,isAuth:a}}},F=function(e){return{type:"SN/AUTH/GET_CAPTCHA_URL_SUCCESS",payload:{captchaUrl:e}}},D=function(){return function(){var e=Object(p.a)(d.a.mark((function e(t){var n,a,r,c,o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:(n=e.sent).resultCode===h.b.Success&&(a=n.data,r=a.email,c=a.id,o=a.login,t(R(r,c,o,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},M=function(){return function(){var e=Object(p.a)(d.a.mark((function e(t){var n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T();case 2:n=e.sent,a=n.url,t(F(a));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/AUTH/SET_USER_DATA":case"SN/AUTH/GET_CAPTCHA_URL_SUCCESS":return Object(g.a)(Object(g.a)({},e),t.payload);default:return e}},G=n(137),z=n(135),H={initialized:!1},W=function(){return{type:"SN/MAIN/INITIALIZED_SUCCESS"}},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/MAIN/INITIALIZED_SUCCESS":return Object(g.a)(Object(g.a)({},e),{},{initialized:!0});default:return e}},K=Object(s.c)({profilePage:i.b,messagesPage:u.b,sidebar:m,usersPage:U,auth:B,form:z.a,main:q}),V=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.d,X=Object(s.e)(K,V(Object(s.a)(G.a)));window.__store__=X;var Y=X,Z=(n(254),n(255),n(38)),J=n(39),Q=n(42),$=n(41),ee=n(16),te=n(140),ne=n.n(te),ae=n(141),re=n.n(ae),ce=function(){return r.a.createElement("div",{className:"Logo block_inline"},r.a.createElement("a",{className:ne.a._homelink,href:"#homelink",id:"homelink"},r.a.createElement("img",{src:re.a,alt:"homelink"}),r.a.createElement("span",null,"Petfans")))},oe=n(75),se=n.n(oe),ie=function(e){return r.a.createElement("header",{className:"Header block"},r.a.createElement("div",{className:se.a._wrapper},r.a.createElement("div",{className:se.a._container},r.a.createElement(ce,null),r.a.createElement("div",{className:se.a._loginBox},e.isAuth?r.a.createElement("div",null,e.login," - ",r.a.createElement("button",{onClick:e.logout},"Log Out")):r.a.createElement(ee.b,{to:"/login"},"Login")))))},ue=n(15),le=function(e){Object(Q.a)(n,e);var t=Object($.a)(n);function n(){return Object(Z.a)(this,n),t.apply(this,arguments)}return Object(J.a)(n,[{key:"render",value:function(){return r.a.createElement(ie,this.props)}}]),n}(r.a.Component),me=Object(ue.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(p.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L();case 2:e.sent.data.resultCode===h.b.Success&&t(R(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(le),fe=n(12),de=n(36),pe=n.n(de),_e=n(11),ge=n.n(_e),Ee=function(){return r.a.createElement("nav",{className:"Navigation block"},r.a.createElement("ul",{className:ge.a._containerNav},r.a.createElement("li",{className:ge.a._item},r.a.createElement(ee.b,{to:"/profile",className:ge.a._itemLink,activeClassName:ge.a.activeLink},r.a.createElement("span",null,"Profile")),r.a.createElement("div",{className:ge.a._notifyCell},r.a.createElement("span",null,"99"))),r.a.createElement("li",{className:ge.a._item},r.a.createElement(ee.b,{to:"/dialogs",className:ge.a._itemLink,activeClassName:ge.a.activeLink},r.a.createElement("span",null,"Messages")),r.a.createElement("div",{className:ge.a._notifyCell},r.a.createElement("span",null,"99"))),r.a.createElement("li",{className:ge.a._item},r.a.createElement(ee.b,{to:"/users",className:ge.a._itemLink,activeClassName:ge.a.activeLink},r.a.createElement("span",null,"Users")),r.a.createElement("div",{className:ge.a._notifyCell},r.a.createElement("span",null,"99"))),r.a.createElement("li",{className:ge.a._item},r.a.createElement("a",{className:ge.a._itemLink},r.a.createElement("span",null,"News")),r.a.createElement("div",{className:ge.a._notifyCell},r.a.createElement("span",null,"99"))),r.a.createElement("li",{className:ge.a._item},r.a.createElement("a",{className:ge.a._itemLink},r.a.createElement("span",null,"Music")),r.a.createElement("div",{className:ge.a._notifyCell},r.a.createElement("span",null,"99"))),r.a.createElement("li",{className:ge.a._item},r.a.createElement("a",{className:ge.a._itemLink},r.a.createElement("span",null,"Settings")),r.a.createElement("div",{className:ge.a._notifyCell},r.a.createElement("span",null,"99")))))},he=n(97),ve=n.n(he),Se=n(48),be=n.n(Se),Oe=n(68),Ne=n.n(Oe),we=function(e){return r.a.createElement("div",{className:"DialogItem block"},r.a.createElement(ee.b,{to:"/dialogs/"+e.id,className:be.a._containerGrid},r.a.createElement("div",{className:"".concat(be.a._avatarBox," ").concat(be.a.dialogAva)},r.a.createElement("img",{className:be.a._avatarImg,src:Ne.a})),r.a.createElement("div",{className:be.a.usernameBox},r.a.createElement("span",null,r.a.createElement("strong",null,e.name)))))},Ce=function(e){var t=e.dialogsData.map((function(e){return r.a.createElement(we,{name:e.name,key:e.id,id:e.id})}));return r.a.createElement("div",{className:"Dialogs block"},r.a.createElement("div",{className:ve.a._container},r.a.createElement("h6",{className:ve.a._header},"\u0414\u0438\u0430\u043b\u043e\u0433\u0438"),t))},Pe=n(59),je=n(73),ye=n(101),Ue=n(60),ke=n.n(Ue),Ie=n(142),xe=n.n(Ie),Le=function(e){for(var t=e.totalItemsCount,n=e.pageSize,c=e.currentPage,o=e.onPageChanged,s=e.portionSize,i=void 0===s?10:s,u=Math.ceil(t/n),l=[],m=1;m<=u;m++)l.push(m);var f=Math.ceil(u/i),d=Object(a.useState)(1),p=Object(ye.a)(d,2),_=p[0],g=p[1],E=(_-1)*i+1,h=_*i;return r.a.createElement("div",{className:ke.a.paginator},r.a.createElement("div",{className:ke.a._pagePanel},_>1&&r.a.createElement("button",{onClick:function(){g(_-1)}},"Previus"),l.filter((function(e){return e>=E&&e<=h})).map((function(e){return r.a.createElement("span",{className:xe()(Object(je.a)({},ke.a.selectedPage,c===e),ke.a.pageNumber),onClick:function(t){o(e)},key:e},e)})),f>_&&r.a.createElement("button",{onClick:function(){g(_+1)}},"Next")))},Te=n(31),Ae=n.n(Te),Re=function(e){var t=e.user,n=e.followingInProgress,a=e.follow,c=e.unfollow;return r.a.createElement("div",{className:"Users block"},r.a.createElement("div",null,r.a.createElement("div",{className:Ae.a._usersBox1},r.a.createElement(ee.b,{to:"/profile/"+t.id},r.a.createElement("div",{className:Ae.a._imgBox},r.a.createElement("img",{className:Ae.a._img,alt:"faceAvatar",src:null!==t.photos.small?t.photos.small:Ne.a}))),r.a.createElement("div",{className:Ae.a._followBtnBox},t.followed?r.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){c(t.id)}},"FOLLOW"):r.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)}},"UNFOLLOW"))),r.a.createElement("div",{className:Ae.a._usersBox2},r.a.createElement("div",{className:Ae.a._personInfoBox1},r.a.createElement("div",null,t.name),r.a.createElement("div",null,t.status)),r.a.createElement("div",{className:Ae.a._personInfoBox2},r.a.createElement("div",null,"user.location.country"),r.a.createElement("div",null,"user.location.city")))))},Fe=function(e){var t=e.currentPage,n=e.onPageChanged,a=e.totalUsersCount,c=e.pageSize,o=e.users,s=Object(Pe.a)(e,["currentPage","onPageChanged","totalUsersCount","pageSize","users"]);return r.a.createElement("div",{className:"Users block"},r.a.createElement(Le,{currentPage:t,onPageChanged:n,totalItemsCount:a,pageSize:c}),r.a.createElement("div",null,o.map((function(e){return r.a.createElement(Re,{user:e,followingInProgress:s.followingInProgress,follow:s.follow,unfollow:s.unfollow,key:e.id})}))))},De=n(40),Me=n(144),Be=Object(Me.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),Ge=function(e){return e.usersPage.pageSize},ze=function(e){return e.usersPage.totalUsersCount},He=function(e){return e.usersPage.currentPage},We=function(e){return e.usersPage.isFetching},qe=function(e){return e.usersPage.followingInProgress},Ke=function(e){Object(Q.a)(n,e);var t=Object($.a)(n);function n(){var e;Object(Z.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).onPageChanged=function(t){var n=e.props;(0,n.getUsers)(t,n.pageSize)},e}return Object(J.a)(n,[{key:"componentDidMount",value:function(){var e=this.props;(0,e.getUsers)(e.currentPage,e.pageSize)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,this.props.pageTitle),this.props.isFetching?r.a.createElement(De.a,null):null,r.a.createElement(Fe,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress}))}}]),n}(r.a.Component),Ve=Object(s.d)(Object(ue.b)((function(e){return{users:Be(e),pageSize:Ge(e),totalUsersCount:ze(e),currentPage:He(e),isFetching:We(e),followingInProgress:qe(e)}}),{follow:function(e){return function(){var t=Object(p.a)(d.a.mark((function t(n){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:y(n,e,v.follow.bind(v),b);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(p.a)(d.a.mark((function t(n){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:y(n,e,v.unfollow.bind(v),O);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getUsers:function(e,t){return function(){var n=Object(p.a)(d.a.mark((function n(a,r){var c;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(P(!0)),a(w(e)),n.next=4,v.getUsers(e,t);case 4:c=n.sent,a(P(!1)),a(N(c.items)),a(C(c.totalCount));case 8:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()}}))(Ke),Xe=n(145),Ye=n.n(Xe),Ze=n(25),Je=n.n(Ze),Qe=n(134),$e=n(26),et=n(52),tt=Object(Qe.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error,a=e.captchaUrl;return r.a.createElement("form",{onSubmit:t},Object($e.c)("Email","email",[et.b],$e.a),Object($e.c)("Password","password",[et.b],$e.a,{type:"password"}),Object($e.c)(void 0,"rememberMe",[et.b],$e.a,{type:"checkbox"},"Remember Me"),a&&r.a.createElement("img",{src:a,className:Ye.a.imgCaptcha}),a&&Object($e.c)("symbols from image","captcha",[et.b],$e.a,{}),n&&r.a.createElement("div",{className:Je.a.formSummaryError},n),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"Login")))})),nt=Object(ue.b)((function(e){return{isAuth:e.auth.isAuth,captchaUrl:e.auth.captchaUrl}}),{login:function(e,t,n,a){return function(){var r=Object(p.a)(d.a.mark((function r(c){var o,s;return d.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,x(e,t,n,a);case 2:(o=r.sent).resultCode===h.b.Success?c(D()):o.resultCode===h.a.CaptchaIsRequired?c(M()):(s=o.messages.length>0?o.messages[0]:"Some error",c(Object(k.b)("login",{_error:s})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?r.a.createElement(fe.a,{to:"/profile"}):r.a.createElement("div",{className:"Login block"},r.a.createElement("h1",null,"LOGIN"),r.a.createElement(tt,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe,t.captcha)},captchaUrl:e.captchaUrl}))})),at=function(e){return function(t){return r.a.createElement(r.a.Suspense,{fallback:r.a.createElement(De.a,null)},r.a.createElement(e,t))}},rt=r.a.lazy((function(){return n.e(3).then(n.bind(null,305))})),ct=r.a.lazy((function(){return n.e(4).then(n.bind(null,307))})),ot=r.a.lazy((function(){return n.e(5).then(n.bind(null,306))})),st=function(e){Object(Q.a)(n,e);var t=Object($.a)(n);function n(){var e;Object(Z.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).catchAllUnhandledErrors=function(e){alert("some error occured")},e}return Object(J.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeMain(),window.addEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"render",value:function(){var e=this;return this.props.initialized?r.a.createElement("main",{className:"Main block"},r.a.createElement("div",{className:pe.a._wrapper},r.a.createElement("div",{className:pe.a._container},r.a.createElement("div",{className:pe.a._LeftColumn},r.a.createElement(Ee,null)),r.a.createElement("div",{className:pe.a._UserCardColumn},r.a.createElement(fe.b,{path:"/",render:function(){return r.a.createElement(fe.a,{to:"/profile"})}}),r.a.createElement(fe.b,{path:"/profile/:userId?",render:at(rt)}),r.a.createElement(fe.b,{path:"/users",render:function(){return r.a.createElement(Ve,{pageTitle:"\u0421\u0430\u043c\u0443\u0440\u0430\u0439"})}}),r.a.createElement(fe.b,{path:"/login",render:function(){return r.a.createElement(nt,null)}})),r.a.createElement("div",{className:pe.a._NarrowColumn},r.a.createElement(fe.b,{path:"/dialogs",render:function(t){return r.a.createElement(Ce,{store:e.props.state,dialogsData:e.props.state.messagesPage.dialogsData})}})),r.a.createElement("div",{className:pe.a._WideColumn},r.a.createElement(fe.b,{path:"/dialogs",render:at(ot)}),r.a.createElement(fe.b,{path:"/profile",render:at(ct)}))))):r.a.createElement(De.a,null)}}]),n}(r.a.Component),it=Object(s.d)(fe.f,Object(ue.b)((function(e){return{initialized:e.main.initialized,state:e}}),{initializeMain:function(){return function(e){var t=e(D());Promise.all([t]).then((function(){e(W())}))}}}))(st),ut=function(e){return r.a.createElement(ee.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(me,null),r.a.createElement(it,{state:e.state,store:e.store,dispatch:e.dispatch})))},lt=function(e){o.a.render(r.a.createElement(ue.a,{store:Y},r.a.createElement(ut,{state:Y.getState(),dispatch:Y.dispatch.bind(Y),store:Y})),document.getElementById("root"))};lt(Y.getState()),Y.subscribe(lt),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},31:function(e,t,n){e.exports={_usersBox2:"Users__usersBox2__1WkCj",_imgBox:"Users__imgBox__1nJTb",_img:"Users__img__12wjw",_pagePanel:"Users__pagePanel__OCfK2",_selectedPage:"Users__selectedPage__1oMYF"}},36:function(e,t,n){e.exports={_wrapper:"Main__wrapper__14kYs",_container:"Main__container__3GPhT",_LeftColumn:"Main__LeftColumn__1qQxQ",_UserCardColumn:"Main__UserCardColumn__Kl8v-",_NarrowColumn:"Main__NarrowColumn__WfV85",_WideColumn:"Main__WideColumn__3KylI"}},40:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(98),o=n.n(c),s=n(143),i=n.n(s);t.a=function(e){return r.a.createElement("div",{className:o.a._preloaderBox},r.a.createElement("img",{src:i.a,className:o.a._preloader}))}},48:function(e,t,n){e.exports={_containerGrid:"DialogItem__containerGrid__1BOLJ",active:"DialogItem_active__5ry9s",_avatarBox:"DialogItem__avatarBox__ggp3N",_avatarImg:"DialogItem__avatarImg__2pT_6",dialogAva:"DialogItem_dialogAva__2rf8c",usernameBox:"DialogItem_usernameBox__XXQXS"}},52:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var a=function(e){return e?void 0:"Field is required"},r=function(e){return function(t){return t.length>e?"Max length is ".concat(e," symbols"):void 0}}},60:function(e,t,n){e.exports={_pagePanel:"Paginator__pagePanel__1ulN9",_selectedPage:"Paginator__selectedPage__1Y88W",paginator:"Paginator_paginator__g-vUZ",pageNumber:"Paginator_pageNumber__2-vpR",selectedPage:"Paginator_selectedPage__3A3Zw"}},68:function(e,t,n){e.exports=n.p+"static/media/avatar.93a43109.jpg"},75:function(e,t,n){e.exports={_wrapper:"Header__wrapper__1ZUa2",_container:"Header__container__1y67T",_loginBox:"Header__loginBox__KK7ad"}},97:function(e,t,n){e.exports={_container:"Dialogs__container__1Bl9s",_header:"Dialogs__header__1T2MF"}},98:function(e,t,n){e.exports={_preloaderBox:"Preloader__preloaderBox__1zliy"}}},[[171,1,2]]]);
//# sourceMappingURL=main.e2701d70.chunk.js.map