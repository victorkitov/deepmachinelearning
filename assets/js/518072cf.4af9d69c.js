"use strict";(self.webpackChunksite_new=self.webpackChunksite_new||[]).push([[2565],{38361:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var t=n(74848),i=n(28453);const a={description:""},c="\u0421\u043b\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u043d\u044b\u0445 \u043c\u043e\u0434\u0435\u043b\u0435\u0439",r={id:"docs_ml/Bias-variance/Model-complexity",title:"\u0421\u043b\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u043d\u044b\u0445 \u043c\u043e\u0434\u0435\u043b\u0435\u0439",description:"",source:"@site/docs/docs_ml/14-Bias-variance/01-Model-complexity.md",sourceDirName:"docs_ml/14-Bias-variance",slug:"/docs_ml/Bias-variance/Model-complexity",permalink:"/docs/docs_ml/Bias-variance/Model-complexity",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{description:""},sidebar:"docs_ml",previous:{title:"\u041f\u0435\u0440\u0435\u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 \u0438 \u043d\u0435\u0434\u043e\u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435",permalink:"/docs/docs_ml/Overfitting-and-underfitting"},next:{title:"\u0420\u0430\u0437\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043d\u0430 \u0441\u043c\u0435\u0449\u0435\u043d\u0438\u0435 \u0438 \u0440\u0430\u0437\u0431\u0440\u043e\u0441",permalink:"/docs/docs_ml/Bias-variance/Bias-variance-decomposition"}},l={},d=[];function o(e){const s={annotation:"annotation",h1:"h1",header:"header",img:"img",li:"li",math:"math",mi:"mi",mrow:"mrow",p:"p",semantics:"semantics",span:"span",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"\u0441\u043b\u043e\u0436\u043d\u043e\u0441\u0442\u044c-\u043f\u0440\u043e\u0433\u043d\u043e\u0437\u043d\u044b\u0445-\u043c\u043e\u0434\u0435\u043b\u0435\u0439",children:"\u0421\u043b\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u043d\u044b\u0445 \u043c\u043e\u0434\u0435\u043b\u0435\u0439"})}),"\n",(0,t.jsxs)(s.p,{children:["\u0417\u0430\u0444\u0438\u043a\u0441\u0438\u0440\u0443\u0435\u043c \u043f\u0440\u043e\u0433\u043d\u043e\u0441\u0442\u0438\u0447\u0435\u0441\u043a\u0443\u044e \u043c\u043e\u0434\u0435\u043b\u044c \u0438 \u043d\u0430\u0447\u043d\u0451\u043c \u0432\u0430\u0440\u044c\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0435\u0451 \u0441\u043b\u043e\u0436\u043d\u043e\u0441\u0442\u044c, \u0442\u043e \u0435\u0441\u0442\u044c \u0432\u044b\u0440\u0430\u0437\u0438\u0442\u0435\u043b\u044c\u043d\u0443\u044e \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u044c (\u0433\u0438\u0431\u043a\u043e\u0441\u0442\u044c) \u043f\u043e\u0434\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0442\u044c\u0441\u044f \u043f\u043e\u0434 \u043e\u0431\u0443\u0447\u0430\u044e\u0449\u0438\u0435 \u043f\u0440\u0438\u043c\u0435\u0440\u044b. \u0412 \u0441\u043b\u0443\u0447\u0430\u0435 \u043b\u0438\u043d\u0435\u0439\u043d\u044b\u0445 \u043c\u043e\u0434\u0435\u043b\u0435\u0439, \u044d\u0442\u043e \u0431\u0443\u0434\u0435\u0442 \u043c\u043d\u043e\u0436\u0438\u0442\u0435\u043b\u044c \u043f\u0440\u0438 \u0440\u0435\u0433\u0443\u043b\u044f\u0440\u0438\u0437\u0430\u0442\u043e\u0440\u0435; \u0432 \u0441\u043b\u0443\u0447\u0430\u0435 \u043c\u0435\u0442\u043e\u0434\u0430 ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsx)(s.mrow,{children:(0,t.jsx)(s.mi,{children:"K"})}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"K"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"0.6833em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.07153em"},children:"K"})]})})]})," \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0438\u0445 \u0441\u043e\u0441\u0435\u0434\u0435\u0439 - \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsx)(s.mrow,{children:(0,t.jsx)(s.mi,{children:"K"})}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"K"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"0.6833em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.07153em"},children:"K"})]})})]}),"; \u0432 \u0441\u043b\u0443\u0447\u0430\u0435 \u0440\u0435\u0448\u0430\u044e\u0449\u0435\u0433\u043e \u0434\u0435\u0440\u0435\u0432\u0430, \u044d\u0442\u043e \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0433\u043b\u0443\u0431\u0438\u043d\u0430 \u0434\u0435\u0440\u0435\u0432\u0430 \u0438\u043b\u0438 \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u0432 \u043b\u0438\u0441\u0442\u044c\u044f\u0445."]}),"\n",(0,t.jsx)(s.p,{children:"\u041e\u0431\u0449\u0438\u0439 \u0432\u0438\u0434 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u0441\u0440\u0435\u0434\u043d\u0438\u0445 \u043f\u043e\u0442\u0435\u0440\u044c \u043e\u0442 \u0441\u043b\u043e\u0436\u043d\u043e\u0441\u0442\u0438 \u043c\u043e\u0434\u0435\u043b\u0438 \u043c\u0430\u0448\u0438\u043d\u043d\u043e\u0433\u043e \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f \u0432\u044b\u0433\u043b\u044f\u0434\u0438\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c:"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"loss-vs-model-complexity.png",src:n(64599).A+"",width:"577",height:"209"})}),"\n",(0,t.jsx)(s.p,{children:"\u0421\u0440\u0435\u0434\u043d\u0438\u0435 \u043f\u043e\u0442\u0435\u0440\u0438 \u043d\u0430 \u0442\u0435\u0441\u0442\u043e\u0432\u043e\u0439 \u0432\u044b\u0431\u043e\u0440\u043a\u0435 (\u043e\u0431\u043e\u0437\u043d\u0430\u0447\u0435\u043d\u044b \u043a\u0440\u0430\u0441\u043d\u044b\u043c) \u0432 \u043e\u0431\u0449\u0435\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \u0432\u044b\u0448\u0435, \u0447\u0435\u043c \u0441\u0440\u0435\u0434\u043d\u0438\u0435 \u043f\u043e\u0442\u0435\u0440\u0438 \u043d\u0430 \u043e\u0431\u0443\u0447\u0430\u044e\u0449\u0435\u0439 \u0432\u044b\u0431\u043e\u0440\u043a\u0435 (\u043e\u0431\u043e\u0437\u043d\u0430\u0447\u0435\u043d\u044b \u0437\u0435\u043b\u0451\u043d\u044b\u043c). \u041f\u0440\u0438 \u0443\u0432\u0435\u043b\u0438\u0447\u0435\u043d\u0438\u0438 \u0441\u043b\u043e\u0436\u043d\u043e\u0441\u0442\u0438 \u043c\u043e\u0434\u0435\u043b\u0438 \u0440\u0430\u0441\u0442\u0451\u0442 \u0435\u0451 \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u044c \u043f\u043e\u0434\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0442\u044c\u0441\u044f \u043f\u043e\u0434 \u043e\u0431\u0443\u0447\u0430\u044e\u0449\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0435, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u0441\u0440\u0435\u0434\u043d\u0438\u0435 \u043f\u043e\u0442\u0435\u0440\u0438 \u043d\u0430 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0438 \u0441\u043d\u0438\u0436\u0430\u044e\u0442\u0441\u044f. \u0410 \u0432\u043e\u0442 \u0441\u0440\u0435\u0434\u043d\u0438\u0435 \u043f\u043e\u0442\u0435\u0440\u0438 \u043d\u0430 \u0442\u0435\u0441\u0442\u043e\u0432\u043e\u0439 \u0432\u044b\u0431\u043e\u0440\u043a\u0435:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"\u0421\u043d\u0430\u0447\u0430\u043b\u0430 \u0441\u043d\u0438\u0436\u0430\u044e\u0442\u0441\u044f, \u043a\u043e\u0433\u0434\u0430 \u043c\u043e\u0434\u0435\u043b\u044c\u043d\u0430\u044f \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u044c \u0432\u0441\u0451 \u0435\u0449\u0451 \u0441\u043b\u0438\u0448\u043a\u043e\u043c \u043f\u0440\u043e\u0441\u0442\u0430 \u0438 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0432 \u043f\u043e\u043b\u043d\u043e\u0439 \u043c\u0435\u0440\u0435 \u043f\u043e\u0434\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0442\u044c\u0441\u044f \u043f\u043e\u0434 \u043e\u0431\u0443\u0447\u0430\u044e\u0449\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0435. \u0422\u0430\u043a\u0438\u0435 \u043c\u043e\u0434\u0435\u043b\u0438 \u043d\u0430\u0437\u044b\u0432\u0430\u044e\u0442 \u043d\u0435\u0434\u043e\u043e\u0431\u0443\u0447\u0435\u043d\u043d\u044b\u043c\u0438 (underfitted models)."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"\u041f\u043e\u0442\u043e\u043c \u043d\u0430\u0447\u0438\u043d\u0430\u044e\u0442 \u043f\u043e\u0432\u044b\u0448\u0430\u0442\u044c\u0441\u044f, \u043a\u043e\u0433\u0434\u0430 \u0432\u044b\u0440\u0430\u0437\u0438\u0442\u0435\u043b\u044c\u043d\u0430\u044f \u0441\u043b\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u043c\u043e\u0434\u0435\u043b\u0438 \u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0441\u044f \u0432\u044b\u0448\u0435 \u0441\u043b\u043e\u0436\u043d\u043e\u0441\u0442\u0438 \u0440\u0435\u0430\u043b\u044c\u043d\u043e\u0439 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u0432 \u0434\u0430\u043d\u043d\u044b\u0445. \u0422\u0430\u043a\u0438\u0435 \u043c\u043e\u0434\u0435\u043b\u0438 \u043d\u0430\u0437\u044b\u0432\u0430\u044e\u0442 \u043f\u0435\u0440\u0435\u043e\u0431\u0443\u0447\u0435\u043d\u043d\u044b\u043c\u0438 (overfitted models)."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"\u041f\u043e\u044d\u0442\u043e\u043c\u0443 \u0432 \u043a\u0430\u0436\u0434\u043e\u043c \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c\u0435 \u0432\u0430\u0436\u043d\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0433\u0438\u043f\u0435\u0440\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440, \u043e\u0442\u0432\u0435\u0447\u0430\u044e\u0449\u0438\u0439 \u0437\u0430 \u0435\u0433\u043e \u0441\u043b\u043e\u0436\u043d\u043e\u0441\u0442\u044c, \u0447\u0442\u043e\u0431\u044b \u0441\u043b\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u043c\u043e\u0434\u0435\u043b\u0438 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u043e\u0432\u0430\u043b\u0430 \u0440\u0435\u0430\u043b\u044c\u043d\u043e\u0439 \u0441\u043b\u043e\u0436\u043d\u043e\u0441\u0442\u0438 \u0432 \u0434\u0430\u043d\u043d\u044b\u0445. \u041e\u043f\u0442\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0441\u043b\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u043c\u043e\u0434\u0435\u043b\u0438 \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u0430 \u0442\u043e\u0447\u043a\u043e\u0439 A \u043d\u0430 \u0433\u0440\u0430\u0444\u0438\u043a\u0435."}),"\n",(0,t.jsx)(s.p,{children:"\u041d\u0430 \u0433\u0440\u0430\u0444\u0438\u043a\u0435 \u043d\u0438\u0436\u0435 \u043f\u0440\u0438\u0432\u0435\u0434\u0451\u043d \u043f\u0440\u0438\u043c\u0435\u0440 \u0434\u0430\u043d\u043d\u044b\u0445 \u0434\u043b\u044f \u0440\u0435\u0433\u0440\u0435\u0441\u0441\u0438\u043e\u043d\u043d\u043e\u0439 \u0437\u0430\u0434\u0430\u0447\u0438 \u0441 \u043f\u0440\u0438\u043c\u0435\u0440\u043d\u043e \u043a\u0432\u0430\u0434\u0440\u0430\u0442\u0438\u0447\u043d\u043e\u0439 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u044c\u044e \u043c\u0435\u0436\u0434\u0443 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u043c \u0438 \u043e\u0442\u043a\u043b\u0438\u043a\u043e\u043c. \u0421\u043b\u0435\u0432\u0430 \u043f\u043e\u043a\u0430\u0437\u0430\u043d \u043f\u0440\u0438\u043c\u0435\u0440 \u043d\u0435\u0434\u043e\u043e\u0431\u0443\u0447\u0435\u043d\u043d\u043e\u0439 \u043c\u043e\u0434\u0435\u043b\u0438, \u0430 \u0441\u043f\u0440\u0430\u0432\u0430 - \u043f\u0435\u0440\u0435\u043e\u0431\u0443\u0447\u0435\u043d\u043d\u043e\u0439:"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"under-overfitting.png",src:n(77761).A+"",width:"1143",height:"303"})}),"\n",(0,t.jsx)(s.p,{children:"\u0411\u043e\u043b\u0435\u0435 \u0444\u043e\u0440\u043c\u0430\u043b\u044c\u043d\u043e \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c \u043f\u0435\u0440\u0435\u043e\u0431\u0443\u0447\u0435\u043d\u043d\u044b\u0435 \u0438 \u043d\u0435\u0434\u043e\u043e\u0431\u0443\u0447\u0435\u043d\u043d\u044b\u0435 \u043c\u043e\u0434\u0435\u043b\u0438 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0440\u0430\u0437\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043d\u0430 \u0441\u043c\u0435\u0449\u0435\u043d\u0438\u0435 \u0438 \u0440\u0430\u0437\u0431\u0440\u043e\u0441, \u043e\u043f\u0438\u0441\u0430\u043d\u043d\u043e\u0435 \u0432 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0439 \u0433\u043b\u0430\u0432\u0435."})]})}function m(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},64599:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/loss-vs-model-complexity-aa5dcfb82d20c763091b7af3cf838671.png"},77761:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/under-overfitting-477d486db31d90d4da7cca5a1b0b5327.png"},28453:(e,s,n)=>{n.d(s,{R:()=>c,x:()=>r});var t=n(96540);const i={},a=t.createContext(i);function c(e){const s=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),t.createElement(a.Provider,{value:s},e.children)}}}]);