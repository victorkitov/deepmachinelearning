"use strict";(self.webpackChunksite_new=self.webpackChunksite_new||[]).push([[9882],{44e3:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=t(74848),s=t(28453);const i={description:""},c="\u0410\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u044b",l={id:"Neural-networks/Recurrent-neural-nets/Architectures",title:"\u0410\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u044b",description:"",source:"@site/docs/Neural-networks/16-Recurrent-neural-nets/02-Architectures.md",sourceDirName:"Neural-networks/16-Recurrent-neural-nets",slug:"/Neural-networks/Recurrent-neural-nets/Architectures",permalink:"/docs/Neural-networks/Recurrent-neural-nets/Architectures",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{description:""},sidebar:"Neural-networks",previous:{title:"\u0420\u0435\u043a\u0443\u0440\u0440\u0435\u043d\u0442\u043d\u0430\u044f \u0441\u0435\u0442\u044c",permalink:"/docs/Neural-networks/Recurrent-neural-nets/RNN"},next:{title:"\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044f",permalink:"/docs/Neural-networks/Recurrent-neural-nets/Extensions"}},o={},u=[];function a(n){const e={h1:"h1",li:"li",p:"p",ul:"ul",...(0,s.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"\u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u044b",children:"\u0410\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u044b"}),"\n",(0,r.jsx)(e.p,{children:"\u0412 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u0435\u043c\u043e\u0439 \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u044b \u0440\u0435\u043a\u0443\u0440\u0440\u0435\u043d\u0442\u0430\u044f \u0441\u0435\u0442\u044c \u043c\u043e\u0436\u0435\u0442 \u0440\u0435\u0448\u0430\u0442\u044c \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0435 \u0437\u0430\u0434\u0430\u0447\u0438."}),"\n",(0,r.jsx)(e.p,{children:"\u0422\u0438\u043f\u044b \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0439:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"synced many-to-many"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u041f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044f: \u0440\u0430\u0437\u043c\u0435\u0442\u043a\u0430 \u0447\u0430\u0441\u0442\u0435\u0439 \u0440\u0435\u0447\u0438, \u0432\u044b\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u0435\u0439 (name entity recognition)."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"many-to-one"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u041f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044f: \u0430\u043d\u0430\u043b\u0438\u0437 \u0442\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438 (sentiment analysis), \u043a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f \u0442\u0435\u043a\u0441\u0442\u043e\u0432 \u043f\u043e \u0442\u0435\u043c\u0430\u043c, \u0432\u0438\u0434\u0435\u043e \u043f\u043e \u0441\u043e\u0431\u044b\u0442\u0438\u044f\u043c \u043d\u0430 \u043d\u0438\u0445."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"one-to-many"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u041f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044f: \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439 (image captioning), \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0442\u0435\u043a\u0441\u0442\u0430 \u043f\u043e \u0442\u0435\u043c\u0435, \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043c\u0443\u0437\u044b\u043a\u0438 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0451\u043d\u043d\u043e\u0433\u043e \u0436\u0430\u043d\u0440\u0430, \u043e\u0442\u0432\u0435\u0442\u044b \u043d\u0430 \u0432\u043e\u043f\u0440\u043e\u0441\u044b \u043f\u043e \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0435 (visual question answering)."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"many-to-many"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u041f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044f: \u043f\u0435\u0440\u0435\u0432\u043e\u0434 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0441 \u043e\u0434\u043d\u043e\u0433\u043e \u044f\u0437\u044b\u043a\u0430 \u043d\u0430 \u0434\u0440\u0443\u0433\u043e\u0439, \u043e\u0442\u0432\u0435\u0442 \u043d\u0430 \u0432\u043e\u043f\u0440\u043e\u0441\u044b, \u0441\u0443\u043c\u043c\u0430\u0440\u0438\u0437\u0430\u0446\u0438\u044f \u0442\u0435\u043a\u0441\u0442\u043e\u0432, \u0440\u0430\u0441\u043f\u043e\u0437\u043d\u0430\u0432\u0430\u043d\u0438\u0435 \u0438 \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0440\u0435\u0447\u0438."}),"\n"]}),"\n"]}),"\n"]})]})}function d(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(a,{...n})}):a(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>c,x:()=>l});var r=t(96540);const s={},i=r.createContext(s);function c(n){const e=r.useContext(i);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:c(n.components),r.createElement(i.Provider,{value:e},n.children)}}}]);