(this.webpackJsonpsocial_network_react=this.webpackJsonpsocial_network_react||[]).push([[4],{303:function(e,t,a){e.exports={_container:"MyPosts__container__14-u_",_box:"MyPosts__box__2F4_w",_header:"MyPosts__header__2bBoE",_containerGrid:"MyPosts__containerGrid__pzKyJ",_textareaCell:"MyPosts__textareaCell__1e-9K",_buttonPub:"MyPosts__buttonPub__1STaC"}},304:function(e,t,a){e.exports={_container:"PostedCard__container__1Qvcf",_header:"PostedCard__header__2As6_",_containerGrid:"PostedCard__containerGrid__3sbdB",_postLikesCount:"PostedCard__postLikesCount__2VSQQ"}},306:function(e,t,a){"use strict";a.r(t);var n=a(102),s=a(0),o=a.n(s),r=a(303),c=a.n(r),_=a(304),i=a.n(_),l=function(e){return o.a.createElement("div",{className:"PostedCard block"},o.a.createElement("div",{className:i.a._container},o.a.createElement("h6",{className:i.a._header},"\u041f\u043e\u0441\u0442"),o.a.createElement("div",{className:i.a._containerGrid},o.a.createElement("p",{className:i.a._postParagraph},e.message),o.a.createElement("div",{className:i.a._postLikesCount},o.a.createElement("span",null,"Likes: ",e.likesCount)))))},d=a(32),m=a(17),u=a(134),b=a(26),P=a(52),p=Object(u.a)({form:"userCard-add-post"})((function(e){return o.a.createElement("form",{onSubmit:e.handleSubmit},o.a.createElement("div",null,Object(b.c)("Add post","newPostText",[P.b],b.a)),o.a.createElement("div",null,o.a.createElement("button",null,"Add Post")))})),E=o.a.memo((function(e){var t=Object(m.c)(),a=e.postData.map((function(e){return o.a.createElement(l,{key:e.id,message:e.message,likesCount:e.likesCount})}));return o.a.createElement("div",{className:"PublishPost block"},o.a.createElement("div",{className:c.a._container},o.a.createElement("div",{className:c.a._box},o.a.createElement("h6",{className:c.a._header},"\u041e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u0442\u044c \u043f\u043e\u0441\u0442"),o.a.createElement(p,{onSubmit:function(a){e.addPost(a.newPostText),t(Object(d.a)("ProfileAddNewPostForm"))}})),a))})),C=Object(m.b)((function(e){return{postData:e.profilePage.postData}}),{addPost:n.a.addPostActionCreator})(E);t.default=C}}]);
//# sourceMappingURL=4.4b77d0df.chunk.js.map