(this["webpackJsonpfeedback-app"]=this["webpackJsonpfeedback-app"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(2),s=c.n(n),a=c(4),r=c.n(a),i=c(5),o=c(7),j=c(8),l=c(6),d=(c(13),c(0)),m=function(e){var t,c=e.resourceList,n=e.getFeedBack,s=c.name,a=c.imageUrl;return t="Sad"===s?"sad":"None"===s?"none":"happy",Object(d.jsxs)("li",{className:"container",children:[Object(d.jsx)("img",{src:a,alt:s,className:"img-icon",onClick:function(){n()}}),Object(d.jsx)("p",{className:t,children:s})]})},p=(c(15),function(e){var t=e.loveEmojiUrl;return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("img",{src:t,alt:"love emoji",className:"love-icon"}),Object(d.jsx)("h1",{children:"Thank you!"}),Object(d.jsx)("p",{className:"paragraph",children:"We will use your feedback to improve our customer support performance"})]})}),u=(c(16),function(e){Object(j.a)(c,e);var t=Object(l.a)(c);function c(){var e;Object(i.a)(this,c);for(var n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={FeedBackStatus:!1},e.getFeedBack=function(){e.setState({FeedBackStatus:!0})},e}return Object(o.a)(c,[{key:"render",value:function(){var e=this,t=this.state.FeedBackStatus,c=this.props.resources,n=c.emojis,s=c.loveEmojiUrl;return Object(d.jsx)("div",{className:"bgContainer",children:Object(d.jsx)("div",{className:"contentContainer",children:t?Object(d.jsx)("div",{className:"feedbackCard",children:Object(d.jsx)(p,{loveEmojiUrl:s})}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{className:"heading",children:"How satisfied are you with our customer support performance?"}),Object(d.jsx)("ul",{className:"emojisCard",children:n.map((function(t){return Object(d.jsx)(m,{resourceList:t,getFeedBack:e.getFeedBack},t.id)}))})]})})})}}]),c}(n.Component)),b=u,h=(c(17),{emojis:[{id:0,name:"Sad",imageUrl:"https://assets.ccbp.in/frontend/react-js/sad-emoji-img.png"},{id:1,name:"None",imageUrl:"https://assets.ccbp.in/frontend/react-js/none-emoji-img.png"},{id:2,name:"Happy",imageUrl:"https://assets.ccbp.in/frontend/react-js/happy-emoji-img.png"}],loveEmojiUrl:"https://assets.ccbp.in/frontend/react-js/love-emoji-img.png"}),f=function(){return Object(d.jsx)(b,{resources:h})};r.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(f,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.d5b9a721.chunk.js.map