(this.webpackJsonpsocial_network_react=this.webpackJsonpsocial_network_react||[]).push([[3],{299:function(t,e,a){t.exports={_containerGrid:"UserCard__containerGrid__1hAvt",wallpaper:"UserCard_wallpaper__EftOv",_AvatarCol:"UserCard__AvatarCol__2Bggv",_initialsCol:"UserCard__initialsCol__MwlLx"}},300:function(t,e,a){t.exports={_box:"AvatarPic__box__25PvT",_photo:"AvatarPic__photo__1NTgY",userCard:"AvatarPic_userCard__q9Y7I"}},301:function(t,e,a){t.exports={_column:"Initials__column__3j-y3",_username:"Initials__username__25FLQ",_sepLine:"Initials__sepLine__3i_UQ",_statusBox:"Initials__statusBox__2SZX2"}},302:function(t,e,a){t.exports={_statusString:"UserStatus__statusString__245eP"}},305:function(t,e,a){"use strict";a.r(e);var s=a(37),r=a(38),n=a(40),i=a(39),u=a(0),c=a.n(u),l=a(299),o=a.n(l),_=a(300),p=a.n(_),m=a(42),d=function(t){var e=t.profile;return e?c.a.createElement("div",{className:"AvatarPic block"},c.a.createElement("div",{className:"".concat(p.a._box," ").concat(p.a.userCard)},c.a.createElement("img",{className:p.a._photo,src:e.photos.large}))):c.a.createElement(m.a,null)},v=a(301),f=a.n(v),h=a(134),E=a(302),b=a.n(E),g=function(t){var e=Object(u.useState)(!1),a=Object(h.a)(e,2),s=a[0],r=a[1],n=Object(u.useState)(t.status),i=Object(h.a)(n,2),l=i[0],o=i[1];Object(u.useEffect)((function(){o(t.status)}),[t.status]);return c.a.createElement("div",null,!s&&c.a.createElement("span",{className:b.a._statusString,onDoubleClick:function(){r(!0)}},t.status||"set status"),s&&c.a.createElement("div",null,c.a.createElement("input",{value:l,autoFocus:!0,onBlur:function(){r(!1),t.updateStatus(l)},onChange:function(t){o(t.currentTarget.value)}})))},C=function(t){var e=t.status,a=t.updateStatus;return c.a.createElement("div",{className:"Initials block"},c.a.createElement("div",{className:f.a._column},c.a.createElement("div",{className:f.a._username},c.a.createElement("span",null,"Nikita Levitski")),c.a.createElement("hr",{className:f.a._sepLine}),c.a.createElement("div",{className:f.a._statusBox},c.a.createElement(g,{status:e,updateStatus:a}))))},S=function(t){return c.a.createElement("div",{className:"UserCard block"},c.a.createElement("div",{className:"".concat(o.a._containerGrid," ").concat(o.a.wallpaper)},c.a.createElement("div",{className:o.a._AvatarCol},c.a.createElement(d,{profile:t.profile})),c.a.createElement("div",{className:o.a._initialsCol},c.a.createElement(C,{status:t.status,updateStatus:t.updateStatus}))))},N=a(14),j=a(101),O=a(11),k=a(8),x=function(t){Object(n.a)(a,t);var e=Object(i.a)(a);function a(){return Object(s.a)(this,a),e.apply(this,arguments)}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userId;t||(t=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(t),this.props.getStatus(t)}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(S,Object.assign({},this.props,{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus})))}}]),a}(c.a.Component);e.default=Object(k.d)(Object(N.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.userId,isAuth:t.auth.isAuth}}),{getUserProfile:j.d,getStatus:j.c,updateStatus:j.e}),O.f)(x)}}]);
//# sourceMappingURL=3.12ed44e5.chunk.js.map