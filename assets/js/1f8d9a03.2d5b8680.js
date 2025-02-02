"use strict";(self.webpackChunksite_new=self.webpackChunksite_new||[]).push([[5547],{91689:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var s=i(74848),t=i(28453);const r={description:"",sidebar_label:"\u0412\u043e\u043f\u0440\u043e\u0441\u044b"},o="\u0412\u043e\u043f\u0440\u043e\u0441\u044b \u0434\u043b\u044f \u0441\u0430\u043c\u043e\u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438",a={id:"Machine-learning/Linear-regression-extensions/Questions",title:"\u0412\u043e\u043f\u0440\u043e\u0441\u044b \u0434\u043b\u044f \u0441\u0430\u043c\u043e\u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438",description:"",source:"@site/docs/Machine-learning/07-Linear-regression-extensions/08-Questions.md",sourceDirName:"Machine-learning/07-Linear-regression-extensions",slug:"/Machine-learning/Linear-regression-extensions/Questions",permalink:"/docs/Machine-learning/Linear-regression-extensions/Questions",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{description:"",sidebar_label:"\u0412\u043e\u043f\u0440\u043e\u0441\u044b"},sidebar:"Machine-learning",previous:{title:"Orthogonal matching pursuit",permalink:"/docs/Machine-learning/Linear-regression-extensions/Orthogonal-matching-pursuit"},next:{title:"\u041e\u0446\u0435\u043d\u043a\u0430 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0430 \u0440\u0435\u0433\u0440\u0435\u0441\u0441\u0438\u0438",permalink:"/docs/Machine-learning/Regression-evaluation"}},c={},l=[];function u(n){const e={h1:"h1",li:"li",ul:"ul",...(0,t.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"\u0432\u043e\u043f\u0440\u043e\u0441\u044b-\u0434\u043b\u044f-\u0441\u0430\u043c\u043e\u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438",children:"\u0412\u043e\u043f\u0440\u043e\u0441\u044b \u0434\u043b\u044f \u0441\u0430\u043c\u043e\u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u0412 \u043a\u0430\u043a\u0438\u0445 \u0441\u043b\u0443\u0447\u0430\u044f\u0445 \u043b\u0443\u0447\u0448\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043b\u0438\u043d\u0435\u0439\u043d\u0443\u044e \u0440\u0435\u0433\u0440\u0435\u0441\u0441\u0438\u044e, \u0430 \u0432 \u043a\u0430\u043a\u0438\u0445 - \u043c\u0435\u0442\u043e\u0434 K \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0438\u0445 \u0441\u043e\u0441\u0435\u0434\u0435\u0439 \u0434\u043b\u044f \u043f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u0438\u044f \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u043e\u0432?"}),"\n",(0,s.jsx)(e.li,{children:"\u0417\u0430\u0447\u0435\u043c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0440\u0435\u0433\u0443\u043b\u044f\u0440\u0438\u0437\u0430\u0446\u0438\u044f? \u0412 \u043a\u0430\u043a\u0438\u0445 \u0441\u043b\u0443\u0447\u0430\u044f\u0445 \u043b\u0443\u0447\u0448\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c L1-\u0440\u0435\u0433\u0443\u043b\u044f\u0440\u0438\u0437\u0430\u0446\u0438\u044e, \u0430 \u0432 \u043a\u0430\u043a\u0438\u0445 - L2-\u0440\u0435\u0433\u0443\u043b\u044f\u0440\u0438\u0437\u0430\u0446\u0438\u044e?"}),"\n",(0,s.jsx)(e.li,{children:"\u041a\u0430\u043a\u043e\u0439 \u0433\u0438\u043f\u0435\u0440\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 \u0432 \u0433\u0440\u0435\u0431\u043d\u0435\u0432\u043e\u0439 \u0438 LASSO-\u0440\u0435\u0433\u0440\u0435\u0441\u0441\u0438\u0438 \u043e\u0442\u0432\u0435\u0447\u0430\u0435\u0442 \u0437\u0430 \u0432\u044b\u0440\u0430\u0437\u0438\u0442\u0435\u043b\u044c\u043d\u0443\u044e \u0441\u043b\u043e\u0436\u043d\u043e\u0441\u0442\u044c (\u0433\u0438\u0431\u043a\u043e\u0441\u0442\u044c) \u043c\u043e\u0434\u0435\u043b\u0438? \u0415\u0433\u043e \u0443\u0432\u0435\u043b\u0438\u0447\u0435\u043d\u0438\u0435 \u0443\u0432\u0435\u043b\u0438\u0447\u0438\u0432\u0430\u0435\u0442 \u0438\u043b\u0438 \u0443\u043c\u0435\u043d\u044c\u0448\u0430\u0435\u0442 \u0435\u0451 \u0441\u043b\u043e\u0436\u043d\u043e\u0441\u0442\u044c?"}),"\n",(0,s.jsx)(e.li,{children:"\u041e\u0442 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432, \u0443\u0434\u043e\u0432\u043b\u0435\u0442\u0432\u043e\u0440\u044f\u044e\u0449\u0438\u0445 \u043a\u0430\u043a\u043e\u043c\u0443 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0443, \u0431\u0443\u0434\u0435\u0442 \u0438, \u043d\u0430\u043e\u0431\u043e\u0440\u043e\u0442, \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u0437\u0430\u0432\u0438\u0441\u0435\u0442\u044c \u0440\u0435\u0448\u0435\u043d\u0438\u0435 \u0440\u0435\u0433\u0440\u0435\u0441\u0441\u0438\u0438 \u043e\u043f\u043e\u0440\u043d\u044b\u0445 \u0432\u0435\u043a\u0442\u043e\u0440\u043e\u0432, \u0438 \u043f\u043e\u0447\u0435\u043c\u0443?"}),"\n",(0,s.jsx)(e.li,{children:"\u041f\u043e\u0447\u0435\u043c\u0443, \u043f\u0440\u0438 \u043b\u0438\u043d\u0435\u0439\u043d\u043e\u0439 \u043a\u043e\u043c\u0431\u0438\u043d\u0430\u0446\u0438\u0438 \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u043e\u0432 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0445 \u0431\u0430\u0437\u043e\u0432\u044b\u0445 \u043c\u043e\u0434\u0435\u043b\u0435\u0439, \u0432\u0435\u0441\u0430 \u043f\u0440\u0438 \u043c\u043e\u0434\u0435\u043b\u044f\u0445 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043d\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0442\u044c \u043d\u0435 \u043d\u0430 \u0442\u043e\u0439 \u0436\u0435 \u0441\u0430\u043c\u043e\u0439 \u0432\u044b\u0431\u043e\u0440\u043a\u0435, \u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u043d\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u043b\u0438\u0441\u044c \u0431\u0430\u0437\u043e\u0432\u044b\u0435 \u043c\u043e\u0434\u0435\u043b\u0438? \u041f\u0440\u0438\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043b\u043b\u044e\u0441\u0442\u0440\u0430\u0442\u0438\u0432\u043d\u044b\u0439 \u043f\u0440\u0438\u043c\u0435\u0440."}),"\n",(0,s.jsx)(e.li,{children:"\u041f\u043e\u0447\u0435\u043c\u0443 \u0432\u0430\u0436\u043d\u043e \u0432\u0441\u0435\u0433\u0434\u0430 \u0432\u043a\u043b\u044e\u0447\u0430\u0442\u044c \u043a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u043d\u044b\u0439 \u043f\u0440\u0438\u0437\u043d\u0430\u043a \u0432 \u0441\u043f\u0438\u0441\u043e\u043a \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432 \u043c\u0435\u0442\u043e\u0434\u0430 Orthogonal Matching Pursuit?"}),"\n"]})]})}function d(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(u,{...n})}):u(n)}},28453:(n,e,i)=>{i.d(e,{R:()=>o,x:()=>a});var s=i(96540);const t={},r=s.createContext(t);function o(n){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:o(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);