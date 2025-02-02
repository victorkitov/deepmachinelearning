"use strict";(self.webpackChunksite_new=self.webpackChunksite_new||[]).push([[6935],{98396:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>o});var i=s(74848),t=s(28453);const a={description:"",sidebar_label:"\u0412\u043e\u043f\u0440\u043e\u0441\u044b"},c="\u0412\u043e\u043f\u0440\u043e\u0441\u044b \u0434\u043b\u044f \u0441\u0430\u043c\u043e\u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438",r={id:"Machine-learning/Base-concepts/Questions",title:"\u0412\u043e\u043f\u0440\u043e\u0441\u044b \u0434\u043b\u044f \u0441\u0430\u043c\u043e\u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438",description:"",source:"@site/docs/Machine-learning/03-Base-concepts/11-Questions.md",sourceDirName:"Machine-learning/03-Base-concepts",slug:"/Machine-learning/Base-concepts/Questions",permalink:"/docs/Machine-learning/Base-concepts/Questions",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{description:"",sidebar_label:"\u0412\u043e\u043f\u0440\u043e\u0441\u044b"},sidebar:"Machine-learning",previous:{title:"\u0427\u0430\u0441\u0442\u0438\u0447\u043d\u043e\u0435 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435",permalink:"/docs/Machine-learning/Base-concepts/Semi-supervised-learning"},next:{title:"\u041f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0430 \u0434\u0430\u043d\u043d\u044b\u0445",permalink:"/docs/Machine-learning/Data-preprocessing"}},l={},o=[];function d(n){const e={annotation:"annotation",h1:"h1",li:"li",math:"math",mi:"mi",mrow:"mrow",semantics:"semantics",span:"span",ul:"ul",...(0,t.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"\u0432\u043e\u043f\u0440\u043e\u0441\u044b-\u0434\u043b\u044f-\u0441\u0430\u043c\u043e\u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438",children:"\u0412\u043e\u043f\u0440\u043e\u0441\u044b \u0434\u043b\u044f \u0441\u0430\u043c\u043e\u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u041a\u0430\u043a\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u0446\u0435\u043b\u0435\u0432\u043e\u0439 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0432 \u0437\u0430\u0434\u0430\u0447\u0435 \u0440\u0430\u0437\u043c\u0435\u0442\u043a\u0438 (labeling) \u043d\u0430 ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsx)(e.mrow,{children:(0,i.jsx)(e.mi,{children:"C"})}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"C"})]})})}),(0,i.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.6833em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07153em"},children:"C"})]})})]})," \u043a\u043b\u0430\u0441\u0441\u043e\u0432?"]}),"\n",(0,i.jsx)(e.li,{children:"\u041e\u0431\u044a\u044f\u0441\u043d\u0438\u0442\u0435, \u043f\u043e\u0447\u0435\u043c\u0443 \u0432 \u0441\u0440\u0435\u0434\u043d\u0435\u043c \u044d\u043c\u043f\u0438\u0440\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0440\u0438\u0441\u043a \u043d\u0430 \u043e\u0431\u0443\u0447\u0430\u044e\u0449\u0435\u0439 \u0432\u044b\u0431\u043e\u0440\u043a\u0435 \u0431\u0443\u0434\u0435\u0442 \u043c\u0435\u043d\u044c\u0448\u0435, \u0447\u0435\u043c \u043d\u0430 \u0442\u0435\u0441\u0442\u043e\u0432\u043e\u0439?"}),"\n",(0,i.jsx)(e.li,{children:"\u0427\u0435\u043c \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 \u0441 \u0443\u0447\u0438\u0442\u0435\u043b\u0435\u043c \u043e\u0442\u043b\u0438\u0447\u0430\u0435\u0442\u0441\u044f \u043e\u0442 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f \u0431\u0435\u0437 \u0443\u0447\u0438\u0442\u0435\u043b\u044f?"}),"\n",(0,i.jsx)(e.li,{children:"\u0427\u0435\u043c \u043e\u0442\u043b\u0438\u0447\u0430\u044e\u0442\u0441\u044f \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u043c\u043e\u0434\u0435\u043b\u0438 \u043e\u0442 \u0433\u0438\u043f\u0435\u0440\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432?"}),"\n",(0,i.jsx)(e.li,{children:"\u041e\u0431\u044a\u044f\u0441\u043d\u0438\u0442\u0435, \u0437\u0430\u0447\u0435\u043c \u043d\u0443\u0436\u043d\u0430 L2 \u0440\u0435\u0433\u0443\u043b\u044f\u0440\u0438\u0437\u0430\u0446\u0438\u044f? \u0415\u0451 \u0446\u0435\u043b\u0435\u0441\u043e\u043e\u0431\u0440\u0430\u0437\u043d\u0435\u0435 \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u0442\u044c \u0434\u043b\u044f \u043d\u0435\u0434\u043e\u043e\u0431\u0443\u0447\u0435\u043d\u043d\u044b\u0445 \u0438\u043b\u0438 \u043f\u0435\u0440\u0435\u043e\u0431\u0443\u0447\u0435\u043d\u043d\u044b\u0445 \u043c\u043e\u0434\u0435\u043b\u0435\u0439?"}),"\n",(0,i.jsx)(e.li,{children:"\u0420\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0438\u043c \u0437\u0430\u0434\u0430\u0447\u0443 \u043a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u0439 \u043f\u0435\u0440\u0432\u043e\u0433\u043e \u043a\u043b\u0430\u0441\u0441\u0430 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u043e \u0431\u043e\u043b\u044c\u0448\u0435, \u0447\u0435\u043c \u0432\u0442\u043e\u0440\u043e\u0433\u043e. \u041f\u0440\u0438 \u0432\u0437\u0432\u0435\u0448\u0435\u043d\u043d\u043e\u043c \u0443\u0447\u0451\u0442\u0435 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u043e\u0431\u044a\u0435\u043a\u0442\u0430 \u0432\u0435\u0441 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u0432\u0442\u043e\u0440\u043e\u0433\u043e \u043a\u043b\u0430\u0441\u0441\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435 \u0438\u043b\u0438 \u043c\u0435\u043d\u044c\u0448\u0435, \u0447\u0435\u043c \u0432\u0435\u0441 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u043f\u0435\u0440\u0432\u043e\u0433\u043e \u043a\u043b\u0430\u0441\u0441\u0430?"}),"\n",(0,i.jsx)(e.li,{children:"\u0414\u043b\u044f \u0447\u0435\u0433\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u043a\u0440\u043e\u0441\u0441-\u0432\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u044f? \u041a\u0430\u043a\u0438\u0435 \u0443 \u043d\u0435\u0451 \u043f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430 \u0438 \u043d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043a\u0438 \u043f\u043e \u0441\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u044e \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e\u0439 \u0432\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0439 \u0432\u044b\u0431\u043e\u0440\u043a\u0438?"}),"\n",(0,i.jsx)(e.li,{children:"\u0412 \u0447\u0451\u043c \u0437\u0430\u043a\u043b\u044e\u0447\u0430\u0435\u0442\u0441\u044f \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u0435 \u043f\u0440\u0435\u0434\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043c\u0435\u0442\u043e\u0434\u043e\u0432 \u0447\u0430\u0441\u0442\u0438\u0447\u043d\u043e\u0433\u043e \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f? \u0412\u0441\u0435\u0433\u0434\u0430 \u043b\u0438 \u043e\u043d\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043e \u043d\u0430 \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0435?"}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},28453:(n,e,s)=>{s.d(e,{R:()=>c,x:()=>r});var i=s(96540);const t={},a=i.createContext(t);function c(n){const e=i.useContext(a);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:c(n.components),i.createElement(a.Provider,{value:e},n.children)}}}]);