(this.webpackJsonpsocial_network_react=this.webpackJsonpsocial_network_react||[]).push([[0],{10:function(e,a,t){e.exports={_usersBox2:"Users__usersBox2__3IRqk",_imgBox:"Users__imgBox__2ckdf",_img:"Users__img__pU4mp",_pagePanel:"Users__pagePanel__p94zz",_selectedPage:"Users__selectedPage__268hK"}},12:function(e,a,t){e.exports=t.p+"static/media/avatar.93a43109.jpg"},15:function(e,a,t){e.exports={_wrapper:"Main__wrapper__3KhWN",_container:"Main__container__zR9gb",_LeftColumn:"Main__LeftColumn__2H_cG",_UserCardColumn:"Main__UserCardColumn__1g21U",_NarrowColumn:"Main__NarrowColumn__DG8jf",_WideColumn:"Main__WideColumn__NmeeD"}},16:function(e,a,t){e.exports={_container:"PublishPost__container__263BV",_box:"PublishPost__box__5NTH1",_header:"PublishPost__header__2GwuU",_containerGrid:"PublishPost__containerGrid__i0YZ_",_textareaCell:"PublishPost__textareaCell__1WjNI",_buttonPub:"PublishPost__buttonPub__1aanN"}},18:function(e,a,t){e.exports={_column:"Initials__column__3j-y3",_username:"Initials__username__25FLQ",_sepLine:"Initials__sepLine__3i_UQ",_statusBox:"Initials__statusBox__2SZX2",_statusString:"Initials__statusString__1izTK"}},19:function(e,a,t){e.exports={_containerGrid:"DialogItem__containerGrid__MJ1JW",active:"DialogItem_active__AitXm",_avatarBox:"DialogItem__avatarBox__SRWLZ",_avatarImg:"DialogItem__avatarImg__2X2bU",dialogAva:"DialogItem_dialogAva__Devnp",usernameBox:"DialogItem_usernameBox__2oLL8"}},2:function(e,a,t){e.exports={_containerNav:"Navigation__containerNav__2StvC",_item:"Navigation__item__1uVYi",_itemLink:"Navigation__itemLink__2Y2lf",activeLink:"Navigation_activeLink__1k0SY",_notifyCell:"Navigation__notifyCell__2gZt6"}},20:function(e,a,t){e.exports={_container:"PostedCard__container__27-Yt",_header:"PostedCard__header__3idbI",_containerGrid:"PostedCard__containerGrid__3pRgu",_postLikesCount:"PostedCard__postLikesCount__3aXEU"}},23:function(e,a,t){e.exports={_containerGrid:"UserCard__containerGrid__1hAvt",wallpaper:"UserCard_wallpaper__EftOv",_AvatarCol:"UserCard__AvatarCol__2Bggv",_initialsCol:"UserCard__initialsCol__MwlLx"}},27:function(e,a,t){e.exports={_box:"AvatarPic__box__25PvT",_photo:"AvatarPic__photo__1NTgY",userCard:"AvatarPic_userCard__q9Y7I"}},30:function(e,a,t){e.exports={_wrapper:"Header__wrapper__2CCMG",_container:"Header__container__2qyNq"}},33:function(e,a,t){e.exports={_container:"Dialogs__container__3zZ58",_header:"Dialogs__header__10hOP"}},46:function(e,a,t){e.exports={_homelink:"Logo__homelink__2c31_"}},47:function(e,a,t){e.exports=t.p+"static/media/logotype.d56e57dd.svg"},53:function(e,a,t){e.exports=t(82)},59:function(e,a,t){},60:function(e,a,t){},7:function(e,a,t){e.exports={_container:"Chat__container__3wIQ1",_header:"Chat__header__ubSM8",_containerGrid:"Chat__containerGrid__3Jl2y",_selfAvaCell:"Chat__selfAvaCell__1Bh4w",_userAvaCell:"Chat__userAvaCell__giSDu",_avaImg:"Chat__avaImg__2dO44",_userMsgCell:"Chat__userMsgCell__2WT5Z",_selfMsgCell:"Chat__selfMsgCell__2YjxY"}},82:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),r=t(24),l=t.n(r);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=t(21),c=t(26),o=t(4),m={postData:[{id:1,message:"Hi, how are you?",likesCount:12},{id:2,message:"It's, my first post",likesCount:11},{id:3,message:"Hi, \u043a\u0430\u043a\u043e\u0439-\u0442\u043e \u043f\u043e\u0441\u0442",likesCount:15}],newPostText:"it-incubator"},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD-POST":var t={id:5,message:e.newPostText,likesCount:0};return Object(o.a)({},e,{postData:[].concat(Object(c.a)(e.postData),[t]),newPostText:""});case"UPDATE-NEW-POST-TEXT":return Object(o.a)({},e,{newPostText:a.newText});default:return e}},u={dialogsData:[{id:1,name:"Nikita"},{id:2,name:"Vladimir"},{id:3,name:"Misha"},{id:4,name:"Sergey"}],messagesData:[{id:1,message:"Hi",isSelf:!1},{id:2,message:"How is your it-kamasutra?",isSelf:!0},{id:3,message:"Yo",isSelf:!1},{id:4,message:"Hi",isSelf:!0},{id:5,message:"Hi",isSelf:!1},{id:6,message:"Hi",isSelf:!0},{id:6,message:"dfsdf",isSelf:!1},{id:6,message:"Hi",isSelf:!0}],newMessageBody:""},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"UPDATE-NEW-MESSAGE-BODY":return Object(o.a)({},e,{newMessageBody:a.body});case"SEND_MESSAGE":var t=e.newMessageBody;return Object(o.a)({},e,{newMessageBody:"",messagesData:[].concat(Object(c.a)(e.messagesData),[{id:6,message:t,isSelf:!0}])});default:return e}},p={},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p;arguments.length>1&&arguments[1];return e},E={users:[],pageSize:5,totalUsersCount:0,currentPage:1,newPostText:""},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"FOLLOW":return Object(o.a)({},e,{users:e.users.map((function(e){return e.id===a.userId?Object(o.a)({},e,{followed:!0}):e}))});case"UNFOLLOW":return Object(o.a)({},e,{users:e.users.map((function(e){return e.id===a.userId?Object(o.a)({},e,{followed:!1}):e}))});case"SET_USERS":return Object(o.a)({},e,{users:a.users});case"SET_CURRENT_PAGE":return Object(o.a)({},e,{currentPage:a.currentPage});case"SET_TOTAL_USERS_COUNT":return Object(o.a)({},e,{totalUsersCount:a.count});default:return e}},f=Object(i.b)({profilePage:_,messagesPage:d,sidebar:g,usersPage:v}),N=Object(i.c)(f),h=(t(59),t(60),t(46)),C=t.n(h),P=t(47),b=t.n(P),w=function(){return s.a.createElement("div",{className:"Logo block block_inline"},s.a.createElement("a",{className:C.a._homelink,href:"#homelink",id:"homelink"},s.a.createElement("img",{src:b.a,alt:"homelink"}),s.a.createElement("span",null,"Petfans")))},k=t(30),x=t.n(k),S=function(){return s.a.createElement("header",{className:"Header block"},s.a.createElement("div",{className:x.a._wrapper},s.a.createElement("div",{className:x.a._container},s.a.createElement(w,null))))},T=t(14),U=t(15),y=t.n(U),O=t(11),L=t(2),D=t.n(L),A=function(){return s.a.createElement("nav",{className:"Navigation block"},s.a.createElement("ul",{className:D.a._containerNav},s.a.createElement("li",{className:D.a._item},s.a.createElement(O.b,{to:"/profile",className:D.a._itemLink,activeClassName:D.a.activeLink},s.a.createElement("span",null,"Profile")),s.a.createElement("div",{className:D.a._notifyCell},s.a.createElement("span",null,"99"))),s.a.createElement("li",{className:D.a._item},s.a.createElement(O.b,{to:"/dialogs",className:D.a._itemLink,activeClassName:D.a.activeLink},s.a.createElement("span",null,"Messages")),s.a.createElement("div",{className:D.a._notifyCell},s.a.createElement("span",null,"99"))),s.a.createElement("li",{className:D.a._item},s.a.createElement(O.b,{to:"/users",className:D.a._itemLink,activeClassName:D.a.activeLink},s.a.createElement("span",null,"Users")),s.a.createElement("div",{className:D.a._notifyCell},s.a.createElement("span",null,"99"))),s.a.createElement("li",{className:D.a._item},s.a.createElement("a",{className:D.a._itemLink},s.a.createElement("span",null,"News")),s.a.createElement("div",{className:D.a._notifyCell},s.a.createElement("span",null,"99"))),s.a.createElement("li",{className:D.a._item},s.a.createElement("a",{className:D.a._itemLink},s.a.createElement("span",null,"Music")),s.a.createElement("div",{className:D.a._notifyCell},s.a.createElement("span",null,"99"))),s.a.createElement("li",{className:D.a._item},s.a.createElement("a",{className:D.a._itemLink},s.a.createElement("span",null,"Settings")),s.a.createElement("div",{className:D.a._notifyCell},s.a.createElement("span",null,"99")))))},M=t(23),B=t.n(M),I=t(27),j=t.n(I),G=t(12),W=t.n(G),R=function(){return s.a.createElement("div",{className:"AvatarPic block"},s.a.createElement("div",{className:"".concat(j.a._box," ").concat(j.a.userCard)},s.a.createElement("img",{className:j.a._photo,src:W.a})))},z=t(18),H=t.n(z),Y=function(){return s.a.createElement("div",{className:"Initials block"},s.a.createElement("div",{className:H.a._column},s.a.createElement("div",{className:H.a._username},s.a.createElement("span",null,"Nikita Levitski")),s.a.createElement("hr",{className:H.a._sepLine}),s.a.createElement("div",{className:H.a._statusBox},s.a.createElement("span",{className:H.a._statusString},"Junior Front-end developer (\u0432 \u043c\u0435\u0447\u0442\u0430\u0445)",s.a.createElement("br",null),"Google Material Design UI React+Redux"))))},F=function(){return s.a.createElement("div",{className:"UserCard block"},s.a.createElement("div",{className:"".concat(B.a._containerGrid," ").concat(B.a.wallpaper)},s.a.createElement("div",{className:B.a._AvatarCol},s.a.createElement(R,null)),s.a.createElement("div",{className:B.a._initialsCol},s.a.createElement(Y,null))))},J=t(33),X=t.n(J),Z=t(19),q=t.n(Z),K=function(e){return s.a.createElement("div",{className:"DialogItem block"},s.a.createElement(O.b,{to:"/dialogs/"+e.id,className:q.a._containerGrid},s.a.createElement("div",{className:"".concat(q.a._avatarBox," ").concat(q.a.dialogAva)},s.a.createElement("img",{className:q.a._avatarImg,src:W.a})),s.a.createElement("div",{className:q.a.usernameBox},s.a.createElement("span",null,s.a.createElement("strong",null,e.name)))))},Q=function(e){var a=e.dialogsData.map((function(e){return s.a.createElement(K,{name:e.name,key:e.id,id:e.id})}));return s.a.createElement("div",{className:"Dialogs block"},s.a.createElement("div",{className:X.a._container},s.a.createElement("h6",{className:X.a._header},"\u0414\u0438\u0430\u043b\u043e\u0433\u0438"),a))},V=t(7),$=t.n(V),ee=function(e){var a=e.messagesPage,t=a.messagesData.map((function(e){var a=e.isSelf?{msgCont:$.a._selfMsgCell,msgAva:$.a._selfAvaCell}:{msgCont:$.a._userMsgCell,msgAva:$.a._userAvaCell};return s.a.createElement("div",{className:$.a._containerGrid},s.a.createElement("div",{className:a.msgAva},s.a.createElement("img",{className:$.a._avaImg,src:W.a})),s.a.createElement("div",{className:a.msgCont},s.a.createElement("span",null,e.message)))})),n=a.newMessageBody;return s.a.createElement("div",{className:"Chat block"},s.a.createElement("div",{className:$.a._container},s.a.createElement("h6",{className:$.a._header},"\u0427\u0430\u0442"),t,s.a.createElement("div",{className:$.a._containerGrid},s.a.createElement("div",{className:$.a.msgInputBox},s.a.createElement("textarea",{value:n,onChange:function(a){var t=a.target.value;e.updateNewMsgBody(t)},placeholder:"\u041d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435..."})),s.a.createElement("div",{className:$.a.btnSendMsgBox},s.a.createElement("button",{className:$.a.btnSendMsg,onClick:function(){e.sendMessage()}},"Send")))))},ae=t(13),te=Object(ae.b)((function(e){return{messagesPage:e.messagesPage}}),(function(e){return{sendMessage:function(){e({type:"SEND_MESSAGE"})},updateNewMsgBody:function(a){e(function(e){return{type:"UPDATE-NEW-MESSAGE-BODY",body:e}}(a))}}}))(ee),ne=t(16),se=t.n(ne),re=t(20),le=t.n(re),ie=function(e){return s.a.createElement("div",{className:"PostedCard block"},s.a.createElement("div",{className:le.a._container},s.a.createElement("h6",{className:le.a._header},"\u041f\u043e\u0441\u0442"),s.a.createElement("div",{className:le.a._containerGrid},s.a.createElement("p",{className:le.a._postParagraph},e.message),s.a.createElement("div",{className:le.a._postLikesCount},s.a.createElement("span",null,"Likes: ",e.likesCount)))))},ce=function(e){var a=e.postData.map((function(e){return s.a.createElement(ie,{message:e.message,likesCount:e.likesCount})})),t=s.a.createRef();return s.a.createElement("div",{className:"PublishPost block"},s.a.createElement("div",{className:se.a._container},s.a.createElement("div",{className:se.a._box},s.a.createElement("h6",{className:se.a._header},"\u041e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u0442\u044c \u043f\u043e\u0441\u0442"),s.a.createElement("div",{className:se.a._containerGrid},s.a.createElement("textarea",{className:se.a._textareaCell,placeholder:"\u041d\u0430\u043f\u0438\u0441\u0430\u0442\u044c...",ref:t,value:e.newPostText,onChange:function(){var a=t.current.value;e.updateNewPostText(a)}}),s.a.createElement("button",{type:"submit",className:se.a._buttonPub,onClick:function(){e.addPost()}},"\u041d\u0430\u043f\u0438\u0441\u0430\u0442\u044c"))),a))},oe=Object(ae.b)((function(e){return{postData:e.profilePage.postData,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(){e({type:"ADD-POST"})},updateNewPostText:function(a){var t=function(e){return{type:"UPDATE-NEW-POST-TEXT",newText:e}}(a);e(t)}}}))(ce),me=t(49),_e=t(50),ue=t(51),de=t(52),pe=t(34),ge=t(10),Ee=t.n(ge),ve=function(e){for(var a=Math.ceil(e.totalUsersCount/e.pageSize),t=[],n=1;n<=a;n++)t.push(n);return s.a.createElement("div",{className:"Users block"},s.a.createElement("div",{className:Ee.a._pagePanel},t.map((function(a){return s.a.createElement("span",{className:e.currentPage===a&&Ee.a._selectedPage,onClick:function(t){e.onPageChanged(a)}},a)}))),e.users.map((function(a){return s.a.createElement("div",{key:a.id},s.a.createElement("div",{className:Ee.a._usersBox1},s.a.createElement("div",{className:Ee.a._imgBox},s.a.createElement("img",{className:Ee.a._img,alt:"faceAvatar",src:null!==a.photos.small?a.photos.small:W.a})),s.a.createElement("div",{className:Ee.a._followBtnBox},a.followed?s.a.createElement("button",{onClick:function(){return e.unfollow(a.id)}},"FOLLOW"):s.a.createElement("button",{onClick:function(){return e.follow(a.id)}},"UNFOLLOW"))),s.a.createElement("div",{className:Ee.a._usersBox2},s.a.createElement("div",{className:Ee.a._personInfoBox1},s.a.createElement("div",null,a.name),s.a.createElement("div",null,a.status)),s.a.createElement("div",{className:Ee.a._personInfoBox2},s.a.createElement("div",null,"u.location.country"),s.a.createElement("div",null,"u.location.city"))))})))},fe=function(e){Object(de.a)(t,e);var a=Object(ue.a)(t);function t(){var e;Object(me.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=a.call.apply(a,[this].concat(s))).onPageChanged=function(a){e.props.setCurrentPage(a),pe.get("https://social-network.samuraijs.com/api/1.0/users?page=".concat(a,"&count=").concat(e.props.pageSize)).then((function(a){e.props.setUsers(a.data.items)}))},e}return Object(_e.a)(t,[{key:"componentDidMount",value:function(){var e=this;pe.get("https://social-network.samuraijs.com/api/1.0/users?page=".concat(this.props.currentPage,"&count=").concat(this.props.pageSize)).then((function(a){e.props.setUsers(a.data.items),e.props.setTotalUsersCount(a.data.totalCount)}))}},{key:"render",value:function(){return s.a.createElement(ve,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow})}}]),t}(s.a.Component),Ne=Object(ae.b)((function(e){return{users:e.usersPage.users,pageSize:e.usersPage.pageSize,totalUsersCount:e.usersPage.totalUsersCount,currentPage:e.usersPage.currentPage}}),(function(e){return{follow:function(a){e(function(e){return{type:"FOLLOW",userId:e}}(a))},unfollow:function(a){e(function(e){return{type:"UNFOLLOW",userId:e}}(a))},setUsers:function(a){e(function(e){return{type:"SET_USERS",users:e}}(a))},setCurrentPage:function(a){e({type:"SET_CURRENT_PAGE",currentPage:a})},setTotalUsersCount:function(a){e({type:"SET_TOTAL_USERS_COUNT",count:a})}}}))(fe),he=function(e){return s.a.createElement("main",{className:"Main block"},s.a.createElement("div",{className:y.a._wrapper},s.a.createElement("div",{className:y.a._container},s.a.createElement("div",{className:y.a._LeftColumn},s.a.createElement(A,null)),s.a.createElement("div",{className:y.a._UserCardColumn},s.a.createElement(T.a,{path:"/profile",component:F}),s.a.createElement(T.a,{path:"/users",render:function(){return s.a.createElement(Ne,null)}})),s.a.createElement("div",{className:y.a._NarrowColumn},s.a.createElement(T.a,{path:"/dialogs",render:function(){return s.a.createElement(Q,{store:e.store,dialogsData:e.state.messagesPage.dialogsData})}})),s.a.createElement("div",{className:y.a._WideColumn},s.a.createElement(T.a,{path:"/dialogs",render:function(){return s.a.createElement(te,{messagesPage:e.state.messagesPage,store:e.store,dispatch:e.dispatch})}}),s.a.createElement(T.a,{path:"/profile",render:function(){return s.a.createElement(oe,{postData:e.state.profilePage.postData,newPostText:e.state.profilePage.newPostText,dispatch:e.dispatch,store:e.store})}})))))},Ce=function(e){return s.a.createElement(O.a,null,s.a.createElement("div",{className:"App"},s.a.createElement(S,null),s.a.createElement(he,{state:e.state,store:e.store,dispatch:e.dispatch,updateNewPostText:e.updateNewPostText})))},Pe=function(e){l.a.render(s.a.createElement(ae.a,{store:N},s.a.createElement(Ce,{state:N.getState(),dispatch:N.dispatch.bind(N),store:N})),document.getElementById("root"))};Pe(N.getState()),N.subscribe(Pe),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[53,1,2]]]);
//# sourceMappingURL=main.224b7b74.chunk.js.map