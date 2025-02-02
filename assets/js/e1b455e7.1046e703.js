"use strict";(self.webpackChunksite_new=self.webpackChunksite_new||[]).push([[3825],{81700:(s,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>t,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>m});var a=n(74848),l=n(28453);const i={description:"\u0421\u043f\u043e\u0441\u043e\u0431\u044b \u043f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u0438\u044f \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0445 \u0431\u0430\u0437\u043e\u0432\u044b\u0445 \u043c\u043e\u0434\u0435\u043b\u0435\u0439 \u0434\u043b\u044f \u043f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u0438\u044f \u0430\u043d\u0441\u0430\u043c\u0431\u043b\u044f \u043c\u043e\u0434\u0435\u043b\u0435\u0439 (model ensemble)."},t="\u041c\u0435\u0442\u043e\u0434\u044b \u043f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u0438\u044f \u0431\u0430\u0437\u043e\u0432\u044b\u0445 \u043c\u043e\u0434\u0435\u043b\u0435\u0439",r={id:"Machine-learning/Model-ensembles/Base-models-building",title:"\u041c\u0435\u0442\u043e\u0434\u044b \u043f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u0438\u044f \u0431\u0430\u0437\u043e\u0432\u044b\u0445 \u043c\u043e\u0434\u0435\u043b\u0435\u0439",description:"\u0421\u043f\u043e\u0441\u043e\u0431\u044b \u043f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u0438\u044f \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0445 \u0431\u0430\u0437\u043e\u0432\u044b\u0445 \u043c\u043e\u0434\u0435\u043b\u0435\u0439 \u0434\u043b\u044f \u043f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u0438\u044f \u0430\u043d\u0441\u0430\u043c\u0431\u043b\u044f \u043c\u043e\u0434\u0435\u043b\u0435\u0439 (model ensemble).",source:"@site/docs/Machine-learning/15-Model-ensembles/04-Base-models-building.md",sourceDirName:"Machine-learning/15-Model-ensembles",slug:"/Machine-learning/Model-ensembles/Base-models-building",permalink:"/docs/Machine-learning/Model-ensembles/Base-models-building",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{description:"\u0421\u043f\u043e\u0441\u043e\u0431\u044b \u043f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u0438\u044f \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0445 \u0431\u0430\u0437\u043e\u0432\u044b\u0445 \u043c\u043e\u0434\u0435\u043b\u0435\u0439 \u0434\u043b\u044f \u043f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u0438\u044f \u0430\u043d\u0441\u0430\u043c\u0431\u043b\u044f \u043c\u043e\u0434\u0435\u043b\u0435\u0439 (model ensemble)."},sidebar:"Machine-learning",previous:{title:"\u041f\u0440\u043e\u0441\u0442\u0430\u044f \u0430\u0433\u0440\u0435\u0433\u0430\u0446\u0438\u044f \u0432 \u0430\u043d\u0441\u0430\u043c\u0431\u043b\u044f\u0445",permalink:"/docs/Machine-learning/Model-ensembles/Averaging-ensembles"},next:{title:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043d\u0430 \u0440\u0430\u0437\u043d\u044b\u0445 \u0444\u0440\u0430\u0433\u043c\u0435\u043d\u0442\u0430\u0445 \u043e\u0431\u0443\u0447\u0430\u044e\u0449\u0435\u0439 \u0432\u044b\u0431\u043e\u0440\u043a\u0438",permalink:"/docs/Machine-learning/Model-ensembles/Sample-based-base-models"}},c={},m=[];function h(s){const e={admonition:"admonition",annotation:"annotation",h1:"h1",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msqrt:"msqrt",msup:"msup",p:"p",path:"path",semantics:"semantics",span:"span",strong:"strong",svg:"svg",ul:"ul",...(0,l.R)(),...s.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"\u043c\u0435\u0442\u043e\u0434\u044b-\u043f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u0438\u044f-\u0431\u0430\u0437\u043e\u0432\u044b\u0445-\u043c\u043e\u0434\u0435\u043b\u0435\u0439",children:"\u041c\u0435\u0442\u043e\u0434\u044b \u043f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u0438\u044f \u0431\u0430\u0437\u043e\u0432\u044b\u0445 \u043c\u043e\u0434\u0435\u043b\u0435\u0439"}),"\n",(0,a.jsx)(e.p,{children:"\u0414\u043b\u044f \u043f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u0438\u044f \u0430\u043d\u0441\u0430\u043c\u0431\u043b\u044f \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0441\u0442\u0440\u043e\u0438\u0442\u044c \u043c\u043d\u043e\u0433\u043e \u0431\u0430\u0437\u043e\u0432\u044b\u0445 \u043c\u043e\u0434\u0435\u043b\u0435\u0439. \u041c\u043e\u0436\u043d\u043e \u0431\u0440\u0430\u0442\u044c \u043c\u043e\u0434\u0435\u043b\u0438 \u0438\u0437 \u0440\u0430\u0437\u043d\u044b\u0445 \u0441\u0435\u043c\u0435\u0439\u0441\u0442\u0432 (\u0440\u0435\u0448\u0430\u044e\u0449\u0438\u0435 \u0434\u0435\u0440\u0435\u0432\u044c\u044f, \u043b\u0438\u043d\u0435\u0439\u043d\u044b\u0435 \u043c\u043e\u0434\u0435\u043b\u0438, \u043c\u0435\u0442\u043e\u0434 K \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0438\u0445 \u0441\u043e\u0441\u0435\u0434\u0435\u0439 \u0438 \u0434\u0440.), \u043d\u043e \u0431\u0430\u0437\u043e\u0432\u044b\u0435 \u043c\u043e\u0434\u0435\u043b\u0438 \u043c\u043e\u0436\u043d\u043e \u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0438 \u0432 \u0440\u0430\u043c\u043a\u0430\u0445 \u043e\u0434\u043d\u043e\u0433\u043e \u0441\u0435\u043c\u0435\u0439\u0441\u0442\u0432\u0430 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c\u0438 \u0441\u043f\u043e\u0441\u043e\u0431\u0430\u043c\u0438:"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0440\u0430\u0437\u043d\u044b\u0435 \u0433\u0438\u043f\u0435\u0440\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"}),". \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0440\u0430\u0437\u043d\u043e\u0435 ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsx)(e.mrow,{children:(0,a.jsx)(e.mi,{children:"K"})}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"K"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.6833em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07153em"},children:"K"})]})})]})," \u0432 \u043c\u0435\u0442\u043e\u0434\u0435 ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsx)(e.mrow,{children:(0,a.jsx)(e.mi,{children:"K"})}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"K"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.6833em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07153em"},children:"K"})]})})]})," \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0438\u0445 \u0441\u043e\u0441\u0435\u0434\u0435\u0439 \u0438\u043b\u0438 \u0440\u0430\u0437\u043d\u0443\u044e \u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u0443\u044e \u0433\u043b\u0443\u0431\u0438\u043d\u0443 \u043f\u0440\u0438 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0435 \u0440\u0435\u0448\u0430\u044e\u0449\u0438\u0445 \u0434\u0435\u0440\u0435\u0432\u044c\u0435\u0432."]}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0440\u0430\u0437\u043d\u044b\u0435 \u043d\u0430\u0447\u0430\u043b\u044c\u043d\u044b\u0435 \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u043f\u0440\u0438 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0435 \u0433\u0440\u0430\u0434\u0438\u0435\u043d\u0442\u043d\u044b\u043c\u0438 \u043c\u0435\u0442\u043e\u0434\u0430\u043c\u0438"}),". \u042d\u0442\u043e\u0442 \u043c\u0435\u0442\u043e\u0434 \u043f\u0440\u0438\u0432\u043e\u0434\u0438\u0442 \u043a \u0440\u0430\u0437\u043d\u044b\u043c \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u0438\u0440\u0443\u044e\u0449\u0438\u043c \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c\u0430\u043c, \u0435\u0441\u043b\u0438 \u0446\u0435\u043b\u0435\u0432\u0430\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u043d\u0435\u0432\u044b\u043f\u0443\u043a\u043b\u0430, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u043f\u0440\u0438 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0435 \u043d\u0435\u0439\u0440\u043e\u0441\u0435\u0442\u0435\u0439."]}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0440\u0430\u0437\u043d\u0443\u044e \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044e \u0434\u043b\u044f \u0433\u0435\u043d\u0435\u0440\u0430\u0442\u043e\u0440\u0430 \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u044b\u0445 \u0447\u0438\u0441\u0435\u043b (random seed)"}),". \u042d\u0442\u043e\u0442 \u043c\u0435\u0442\u043e\u0434 \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u043c \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0434\u043b\u044f \u0440\u0430\u043d\u0434\u043e\u043c\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u043c\u043e\u0434\u0435\u043b\u0435\u0439, \u0442\u043e \u0435\u0441\u0442\u044c \u043c\u043e\u0434\u0435\u043b\u0435\u0439, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0449\u0438\u0445 \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u043e\u0441\u0442\u044c \u0432 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0435 \u0441\u0432\u043e\u0435\u0439 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u043c\u043e\u0434\u0435\u043b\u0438, \u043d\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u043c\u044b\u0435 \u043c\u0435\u0442\u043e\u0434\u043e\u043c \u0441\u0442\u043e\u0445\u0430\u0441\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u0433\u0440\u0430\u0434\u0438\u0435\u043d\u0442\u043d\u043e\u0433\u043e \u0441\u043f\u0443\u0441\u043a\u0430, \u043f\u043e\u0441\u043a\u043e\u043b\u044c\u043a\u0443 \u0438\u0442\u043e\u0433\u043e\u0432\u044b\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0431\u0443\u0434\u0443\u0442 \u0437\u0430\u0432\u0438\u0441\u0435\u0442\u044c \u043e\u0442 \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u044b\u0445 \u043c\u0438\u043d\u0438\u0431\u0430\u0442\u0447\u0435\u0439 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432, \u043f\u043e \u043a\u043e\u0442\u043e\u0440\u044b\u043c \u043f\u0440\u043e\u0445\u043e\u0434\u0438\u043b\u043e \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435. \u0414\u0440\u0443\u0433\u0438\u043c\u0438 \u043f\u0440\u0438\u043c\u0435\u0440\u0430\u043c\u0438 \u044f\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u0434\u0435\u0440\u0435\u0432\u044c\u044f \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u043e\u0433\u043e \u043b\u0435\u0441\u0430 (random forest) \u0438 \u043e\u0441\u043e\u0431\u043e \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u044b\u0435 \u0434\u0435\u0440\u0435\u0432\u044c\u044f (extra random trees), \u043e \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u043f\u043e\u0439\u0434\u0451\u0442 \u0440\u0435\u0447\u044c \u043f\u043e\u0437\u0436\u0435."]}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"\u041f\u0440\u0435\u0434\u0441\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0446\u0435\u043b\u0435\u0432\u0443\u044e \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0443\u044e \u0441 \u0440\u0430\u0437\u043d\u044b\u043c\u0438 \u0444\u0443\u043d\u043a\u0446\u0438\u044f\u043c\u0438 \u043f\u043e\u0442\u0435\u0440\u044c"}),". \u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0445 \u0444\u0443\u043d\u043a\u0446\u0438\u0439 \u043f\u043e\u0442\u0435\u0440\u044c \u043f\u0440\u0438\u0432\u0435\u0434\u0451\u0442 \u043a \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0435 \u0440\u0430\u0437\u043d\u044b\u0445 \u043e\u043a\u043e\u043d\u0447\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u043c\u043e\u0434\u0435\u043b\u0435\u0439 \u0434\u0430\u0436\u0435 \u043f\u043e \u043e\u0434\u0438\u043d\u0430\u043a\u043e\u0432\u044b\u043c \u0434\u0430\u043d\u043d\u044b\u043c. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u043c\u043e\u0436\u043d\u043e \u043d\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0442\u044c \u043a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u044b \u0441 \u044d\u043a\u0441\u043f\u043e\u043d\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0439, \u043b\u043e\u0433\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u0438 hinge \u0444\u0443\u043d\u043a\u0446\u0438\u0435\u0439 \u043f\u043e\u0442\u0435\u0440\u044c."]}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"\u041d\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0442\u044c \u043c\u043e\u0434\u0435\u043b\u044c \u043f\u0440\u0435\u0434\u0441\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0435 \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0446\u0435\u043b\u0435\u0432\u043e\u0439 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439"}),", \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mi,{children:"ln"}),(0,a.jsx)(e.mo,{children:"\u2061"}),(0,a.jsx)(e.mi,{children:"y"}),(0,a.jsx)(e.mo,{separator:"true",children:","}),(0,a.jsxs)(e.msup,{children:[(0,a.jsx)(e.mi,{children:"y"}),(0,a.jsx)(e.mn,{children:"2"})]}),(0,a.jsx)(e.mo,{separator:"true",children:","}),(0,a.jsx)(e.msqrt,{children:(0,a.jsx)(e.mi,{children:"y"})})]}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\ln y, y^2, \\sqrt{y}"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"1.151em",verticalAlign:"-0.3369em"}}),(0,a.jsx)(e.span,{className:"mop",children:"ln"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,a.jsx)(e.span,{className:"mpunct",children:","}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsxs)(e.span,{className:"mord",children:[(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,a.jsx)(e.span,{className:"msupsub",children:(0,a.jsx)(e.span,{className:"vlist-t",children:(0,a.jsx)(e.span,{className:"vlist-r",children:(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.8141em"},children:(0,a.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(e.span,{className:"mord mtight",children:"2"})})]})})})})})]}),(0,a.jsx)(e.span,{className:"mpunct",children:","}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsx)(e.span,{className:"mord sqrt",children:(0,a.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,a.jsxs)(e.span,{className:"vlist-r",children:[(0,a.jsxs)(e.span,{className:"vlist",style:{height:"0.7031em"},children:[(0,a.jsxs)(e.span,{className:"svg-align",style:{top:"-3em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,a.jsx)(e.span,{className:"mord",style:{paddingLeft:"0.833em"},children:(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"})})]}),(0,a.jsxs)(e.span,{style:{top:"-2.6631em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,a.jsx)(e.span,{className:"hide-tail",style:{minWidth:"0.853em",height:"1.08em"},children:(0,a.jsx)(e.svg,{xmlns:"http://www.w3.org/2000/svg",width:"400em",height:"1.08em",viewBox:"0 0 400000 1080",preserveAspectRatio:"xMinYMin slice",children:(0,a.jsx)(e.path,{d:"M95,702\nc-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14\nc0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54\nc44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10\ns173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429\nc69,-144,104.5,-217.7,106.5,-221\nl0 -0\nc5.3,-9.3,12,-14,20,-14\nH400000v40H845.2724\ns-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7\nc-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z\nM834 80h400000v40h-400000z"})})})]})]}),(0,a.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,a.jsx)(e.span,{className:"vlist-r",children:(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.3369em"},children:(0,a.jsx)(e.span,{})})})]})})]})})]}),". \u0417\u0430 \u0441\u0447\u0451\u0442 \u0430\u043f\u043f\u0440\u043e\u043a\u0441\u0438\u043c\u0430\u0446\u0438\u0438 \u043f\u043e-\u0440\u0430\u0437\u043d\u043e\u043c\u0443 \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u043d\u043e\u0439 \u0446\u0435\u043b\u0435\u0432\u043e\u0439 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439, \u0431\u0430\u0437\u043e\u0432\u044b\u0435 \u043c\u043e\u0434\u0435\u043b\u0438 \u0431\u0443\u0434\u0443\u0442 \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u044c\u0441\u044f \u0440\u0430\u0437\u043d\u044b\u043c\u0438. \u041a \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u0430\u043c \u0431\u0430\u0437\u043e\u0432\u044b\u0445 \u043c\u043e\u0434\u0435\u043b\u0435\u0439 \u043d\u0443\u0436\u043d\u043e \u043f\u043e\u0442\u043e\u043c \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c \u043e\u0431\u0440\u0430\u0442\u043d\u043e\u0435 \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0434\u043b\u044f \u0432\u043e\u0437\u0432\u0440\u0430\u0442\u0430 \u043a \u0438\u0441\u0445\u043e\u0434\u043d\u043e\u0439 \u0448\u043a\u0430\u043b\u0435 ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsx)(e.mrow,{children:(0,a.jsx)(e.mi,{children:"y"})}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"y"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"})]})})]})," \u0438 \u0443\u0434\u043e\u0431\u0441\u0442\u0432\u0430 \u043f\u043e\u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0433\u043e \u0443\u0441\u0440\u0435\u0434\u043d\u0435\u043d\u0438\u044f."]}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"\u041d\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0442\u044c \u043e\u0434\u043d\u0443 \u043c\u043e\u0434\u0435\u043b\u044c \u043d\u0430 \u0440\u0430\u0437\u043d\u044b\u0445 \u0444\u0440\u0430\u0433\u043c\u0435\u043d\u0442\u0430\u0445 \u043e\u0431\u0443\u0447\u0430\u044e\u0449\u0435\u0439 \u0432\u044b\u0431\u043e\u0440\u043a\u0438"}),". \u0424\u0440\u0430\u0433\u043c\u0435\u043d\u0442\u044b \u043c\u043e\u0436\u043d\u043e \u0432\u044b\u0431\u0438\u0440\u0430\u0442\u044c \u043f\u043e-\u0440\u0430\u0437\u043d\u043e\u043c\u0443, \u0438 \u044d\u0442\u043e\u043c\u0443 \u043f\u043e\u0441\u0432\u044f\u0449\u0451\u043d \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0440\u0430\u0437\u0434\u0435\u043b."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(e.admonition,{title:"\u041f\u0430\u0440\u0430\u043b\u043b\u0435\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u0439",type:"tip",children:(0,a.jsx)(e.p,{children:"\u041a\u0430\u0436\u0434\u0430\u044f \u0431\u0430\u0437\u043e\u0432\u0430\u044f \u043c\u043e\u0434\u0435\u043b\u044c \u043d\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u043d\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e \u043e\u0442 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0445, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u0438\u0445 \u043c\u043e\u0436\u043d\u043e \u043d\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0442\u044c \u043f\u0430\u0440\u0430\u043b\u043b\u0435\u043b\u044c\u043d\u043e, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u0440\u0430\u0437\u043d\u044b\u0435 \u044f\u0434\u0440\u0430 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u0440\u0430."})})]})}function d(s={}){const{wrapper:e}={...(0,l.R)(),...s.components};return e?(0,a.jsx)(e,{...s,children:(0,a.jsx)(h,{...s})}):h(s)}},28453:(s,e,n)=>{n.d(e,{R:()=>t,x:()=>r});var a=n(96540);const l={},i=a.createContext(l);function t(s){const e=a.useContext(i);return a.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function r(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(l):s.components||l:t(s.components),a.createElement(i.Provider,{value:e},s.children)}}}]);