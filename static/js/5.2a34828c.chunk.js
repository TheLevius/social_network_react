(this.webpackJsonpsocial_network_react=this.webpackJsonpsocial_network_react||[]).push([[5],{298:function(e,a,t){e.exports={_container:"Chat__container__3wIQ1",_header:"Chat__header__ubSM8",_containerGrid:"Chat__containerGrid__3Jl2y",_selfAvaCell:"Chat__selfAvaCell__1Bh4w",_userAvaCell:"Chat__userAvaCell__giSDu",_avaImg:"Chat__avaImg__2dO44",_userMsgCell:"Chat__userMsgCell__2WT5Z",_selfMsgCell:"Chat__selfMsgCell__2YjxY"}},306:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),r=t(111),l=t(298),c=t.n(l),m=t(70),i=t.n(m),o=t(11),_=t(93),u=t(133),g=t(34),d=t(52),h=Object(d.a)(50),v=Object(u.a)({form:"ChatAddMsgForm"})((function(e){return s.a.createElement("form",{className:c.a._containerGrid,onSubmit:e.handleSubmit},s.a.createElement("div",{className:c.a.msgInputBox},s.a.createElement(_.a,{component:g.b,name:"newMsgBody",placeholder:"Enter your message",validate:[d.b,h]})),s.a.createElement("div",{className:c.a.btnSendMsgBox},s.a.createElement("button",{className:c.a.btnSendMsg},"Send")))})),C=function(e){var a=e.messagesPage.messagesData.map((function(e){var a=e.isSelf?{msgCont:c.a._selfMsgCell,msgAva:c.a._selfAvaCell}:{msgCont:c.a._userMsgCell,msgAva:c.a._userAvaCell};return s.a.createElement("div",{className:c.a._containerGrid},s.a.createElement("div",{className:a.msgAva},s.a.createElement("img",{className:c.a._avaImg,src:i.a})),s.a.createElement("div",{className:a.msgCont},s.a.createElement("span",null,e.message)))}));return e.isAuth?s.a.createElement("div",{className:"Chat block"},s.a.createElement("div",{className:c.a._container},s.a.createElement("h6",{className:c.a._header},"\u0427\u0430\u0442"),a,s.a.createElement(v,{onSubmit:function(a){e.sendMessage(a.newMsgBody)}}))):s.a.createElement(o.a,{to:"/login"})},b=t(14),f=t(37),p=t(38),E=t(40),A=t(39),M=function(e){return{isAuth:e.auth.isAuth}},j=t(8);a.default=Object(j.d)(Object(b.b)((function(e){return{messagesPage:e.messagesPage}}),(function(e){return{sendMessage:function(a){e(Object(r.b)(a))}}})),(function(e){var a=function(a){Object(E.a)(n,a);var t=Object(A.a)(n);function n(){return Object(f.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){return this.props.isAuth?s.a.createElement(e,this.props):s.a.createElement(o.a,{to:"./login"})}}]),n}(s.a.Component);return Object(b.b)(M)(a)}))(C)}}]);
//# sourceMappingURL=5.2a34828c.chunk.js.map