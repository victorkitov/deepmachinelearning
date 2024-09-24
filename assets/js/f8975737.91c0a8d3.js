"use strict";(self.webpackChunksite_new=self.webpackChunksite_new||[]).push([[6003],{62384:(s,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>i,default:()=>d,frontMatter:()=>t,metadata:()=>c,toc:()=>r});var l=a(74848),n=a(28453);const t={description:"\u041c\u0435\u0442\u043e\u0434\u044b \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043f\u0440\u043e\u043f\u0443\u0449\u0435\u043d\u043d\u044b\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432 \u0432 \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c\u0435 \u0440\u0435\u0448\u0430\u044e\u0449\u0435\u0433\u043e \u0434\u0435\u0440\u0435\u0432\u0430."},i="\u041e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u043f\u0440\u043e\u043f\u0443\u0449\u0435\u043d\u043d\u044b\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439",c={id:"docs_ml/Decision-trees/Missing-values",title:"\u041e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u043f\u0440\u043e\u043f\u0443\u0449\u0435\u043d\u043d\u044b\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439",description:"\u041c\u0435\u0442\u043e\u0434\u044b \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043f\u0440\u043e\u043f\u0443\u0449\u0435\u043d\u043d\u044b\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432 \u0432 \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c\u0435 \u0440\u0435\u0448\u0430\u044e\u0449\u0435\u0433\u043e \u0434\u0435\u0440\u0435\u0432\u0430.",source:"@site/docs/docs_ml/13-Decision-trees/07-Missing-values.md",sourceDirName:"docs_ml/13-Decision-trees",slug:"/docs_ml/Decision-trees/Missing-values",permalink:"/docs/docs_ml/Decision-trees/Missing-values",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{description:"\u041c\u0435\u0442\u043e\u0434\u044b \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043f\u0440\u043e\u043f\u0443\u0449\u0435\u043d\u043d\u044b\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432 \u0432 \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c\u0435 \u0440\u0435\u0448\u0430\u044e\u0449\u0435\u0433\u043e \u0434\u0435\u0440\u0435\u0432\u0430."},sidebar:"docs_ml",previous:{title:"\u041e\u0431\u0440\u0435\u0437\u043a\u0430 \u0440\u0435\u0448\u0430\u044e\u0449\u0438\u0445 \u0434\u0435\u0440\u0435\u0432\u044c\u0435\u0432",permalink:"/docs/docs_ml/Decision-trees/Tree-pruning"},next:{title:"\u0412\u0430\u0436\u043d\u043e\u0441\u0442\u044c \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432 \u0432 \u0440\u0435\u0448\u0430\u044e\u0449\u0435\u043c \u0434\u0435\u0440\u0435\u0432\u0435",permalink:"/docs/docs_ml/Decision-trees/Feature-importances"}},m={},r=[];function h(s){const e={a:"a",annotation:"annotation",em:"em",h1:"h1",header:"header",math:"math",mfrac:"mfrac",mi:"mi",mo:"mo",mover:"mover",mrow:"mrow",msub:"msub",mtext:"mtext",p:"p",semantics:"semantics",span:"span",...(0,n.R)(),...s.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.header,{children:(0,l.jsx)(e.h1,{id:"\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430-\u043f\u0440\u043e\u043f\u0443\u0449\u0435\u043d\u043d\u044b\u0445-\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439",children:"\u041e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u043f\u0440\u043e\u043f\u0443\u0449\u0435\u043d\u043d\u044b\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439"})}),"\n",(0,l.jsxs)(e.p,{children:["\u0427\u0430\u0441\u0442\u043e \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u0438 \u0432 \u0434\u0430\u043d\u043d\u044b\u0445 \u043c\u043e\u0433\u0443\u0442 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c. \u041f\u0440\u043e\u043f\u0443\u0449\u0435\u043d\u043d\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043c\u043e\u0436\u043d\u043e \u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u043e\u0434\u043d\u0438\u043c \u0438\u0437 ",(0,l.jsx)(e.a,{href:"../Data-preprocessing/Data-imputation",children:"\u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u044b\u0445 \u043c\u0435\u0442\u043e\u0434\u043e\u0432"}),". \u041e\u0434\u043d\u0430\u043a\u043e \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c \u0440\u0435\u0448\u0430\u044e\u0449\u0438\u0445 \u0434\u0435\u0440\u0435\u0432\u044c\u0435\u0432 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0435 \u043c\u0435\u0442\u043e\u0434\u044b \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u043f\u0440\u043e\u043f\u0443\u0449\u0435\u043d\u043d\u044b\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u0431\u0435\u0437 \u0438\u0445 \u043f\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0433\u043e \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f."]}),"\n",(0,l.jsxs)(e.p,{children:["\u0415\u0441\u043b\u0438 ",(0,l.jsx)(e.em,{children:"\u043f\u0440\u043e\u043f\u0443\u0449\u0435\u043d\u043d\u044b\u0439 \u043f\u0440\u0438\u0437\u043d\u0430\u043a \u043f\u0440\u0438\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044e\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u0432 \u0442\u0435\u0441\u0442\u043e\u0432\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445"})," (\u043d\u043e \u043d\u0435 \u0432 \u043e\u0431\u0443\u0447\u0430\u044e\u0449\u0438\u0445), \u0442\u043e \u043f\u0440\u0438 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u0430"]}),"\n",(0,l.jsx)(e.span,{className:"katex-display",children:(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mtext,{children:"\u043f\u0440\u0438\u0437\u043d\u0430\u043a"}),(0,l.jsx)(e.mo,{children:"\u2264"}),(0,l.jsx)(e.mtext,{children:"\u043f\u043e\u0440\u043e\u0433"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\text{\u043f\u0440\u0438\u0437\u043d\u0430\u043a} \\le \\text{\u043f\u043e\u0440\u043e\u0433}"})]})})}),(0,l.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.8304em",verticalAlign:"-0.1944em"}}),(0,l.jsx)(e.span,{className:"mord text",children:(0,l.jsx)(e.span,{className:"mord cyrillic_fallback",children:"\u043f\u0440\u0438\u0437\u043d\u0430\u043a"})}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(e.span,{className:"mrel",children:"\u2264"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,l.jsx)(e.span,{className:"mord text",children:(0,l.jsx)(e.span,{className:"mord cyrillic_fallback",children:"\u043f\u043e\u0440\u043e\u0433"})})]})]})]})}),"\n",(0,l.jsx)(e.p,{children:"\u043c\u043e\u0436\u043d\u043e \u043d\u0430\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u043e\u0431\u044a\u0435\u043a\u0442 \u0432 \u0434\u043e\u0447\u0435\u0440\u043d\u0438\u0439 \u0443\u0437\u0435\u043b, \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0449\u0438\u0439 \u0431\u043e\u043b\u044c\u0448\u0435 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432."}),"\n",(0,l.jsxs)(e.p,{children:["\u0415\u0441\u043b\u0438 \u0436\u0435 ",(0,l.jsx)(e.em,{children:"\u043f\u0440\u0438\u0437\u043d\u0430\u043a \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u043f\u0440\u043e\u043f\u0443\u0449\u0435\u043d\u043d\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0438 \u0432 \u043e\u0431\u0443\u0447\u0430\u044e\u0449\u0438\u0445 \u043e\u0431\u044a\u0435\u043a\u0442\u0430\u0445 \u0442\u043e\u0436\u0435"}),", \u0442\u043e \u043c\u043e\u0436\u043d\u043e \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u0432\u0441\u0435 \u043e\u0431\u044a\u0435\u043a\u0442\u044b \u0441 \u043f\u0440\u043e\u043f\u0443\u0449\u0435\u043d\u043d\u044b\u043c\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f\u043c\u0438 \u0432\u0441\u0435\u0433\u0434\u0430 \u0432 \u043b\u0435\u0432\u044b\u0439 \u0438\u043b\u0438 \u043f\u0440\u0430\u0432\u044b\u0439 \u0434\u043e\u0447\u0435\u0440\u043d\u0438\u0439 \u0443\u0437\u0435\u043b, \u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u0442\u043e\u0433\u043e, \u043a\u0430\u043a\u043e\u0439 \u0438\u0437 \u0441\u043f\u043e\u0441\u043e\u0431\u043e\u0432 \u043f\u0440\u0438\u0432\u043e\u0434\u0438\u0442 \u043a \u0431\u043e\u043b\u044c\u0448\u0435\u043c\u0443 \u0443\u043c\u0435\u043d\u044c\u0448\u0435\u043d\u0438\u044e \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u043d\u0435\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0451\u043d\u043d\u043e\u0441\u0442\u0438 \u043d\u0430 \u043e\u0431\u0443\u0447\u0430\u044e\u0449\u0435\u0439 \u0432\u044b\u0431\u043e\u0440\u043a\u0435."]}),"\n",(0,l.jsxs)(e.p,{children:["\u0412\u043c\u0435\u0441\u0442\u043e \u0442\u043e\u0433\u043e, \u0447\u0442\u043e\u0431\u044b \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u043e\u0431\u044a\u0435\u043a\u0442\u044b \u0441 \u043f\u0440\u043e\u043f\u0443\u0449\u0435\u043d\u043d\u044b\u043c \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u043c \u0432\u0441\u0435\u0433\u0434\u0430 \u0432\u043b\u0435\u0432\u043e \u0438\u043b\u0438 \u0432\u043f\u0440\u0430\u0432\u043e \u043c\u043e\u0436\u043d\u043e \u0435\u0433\u043e \u043e\u0434\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e \u043d\u0430\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0438 \u0432\u043b\u0435\u0432\u043e (\u043f\u043e\u043b\u0443\u0447\u0438\u0432 \u043f\u0440\u043e\u0433\u043d\u043e\u0437 ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsx)(e.mrow,{children:(0,l.jsxs)(e.msub,{children:[(0,l.jsxs)(e.mover,{accent:"true",children:[(0,l.jsx)(e.mi,{children:"y"}),(0,l.jsx)(e.mo,{children:"^"})]}),(0,l.jsx)(e.mi,{children:"L"})]})}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\hat{y}_{L}"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord accent",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsxs)(e.span,{className:"vlist",style:{height:"0.6944em"},children:[(0,l.jsxs)(e.span,{style:{top:"-3em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"})]}),(0,l.jsxs)(e.span,{style:{top:"-3em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(e.span,{className:"accent-body",style:{left:"-0.1944em"},children:(0,l.jsx)(e.span,{className:"mord",children:"^"})})]})]}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.1944em"},children:(0,l.jsx)(e.span,{})})})]})}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.3283em"},children:(0,l.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0359em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:(0,l.jsx)(e.span,{className:"mord mathnormal mtight",children:"L"})})})]})}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,l.jsx)(e.span,{})})})]})})]})]})})]}),"), \u0438 \u0432\u043f\u0440\u0430\u0432\u043e (\u043f\u043e\u043b\u0443\u0447\u0438\u0432 \u043f\u0440\u043e\u0433\u043d\u043e\u0437 ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsx)(e.mrow,{children:(0,l.jsxs)(e.msub,{children:[(0,l.jsxs)(e.mover,{accent:"true",children:[(0,l.jsx)(e.mi,{children:"y"}),(0,l.jsx)(e.mo,{children:"^"})]}),(0,l.jsx)(e.mi,{children:"R"})]})}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\hat{y}_{R}"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord accent",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsxs)(e.span,{className:"vlist",style:{height:"0.6944em"},children:[(0,l.jsxs)(e.span,{style:{top:"-3em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"})]}),(0,l.jsxs)(e.span,{style:{top:"-3em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(e.span,{className:"accent-body",style:{left:"-0.1944em"},children:(0,l.jsx)(e.span,{className:"mord",children:"^"})})]})]}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.1944em"},children:(0,l.jsx)(e.span,{})})})]})}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.3283em"},children:(0,l.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0359em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:(0,l.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.00773em"},children:"R"})})})]})}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,l.jsx)(e.span,{})})})]})})]})]})})]}),"), \u0430 \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0438\u0442\u043e\u0433\u043e\u0432\u043e\u0433\u043e \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u0430 \u0432\u044b\u0434\u0430\u0442\u044c"]}),"\n",(0,l.jsx)(e.span,{className:"katex-display",children:(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsxs)(e.mover,{accent:"true",children:[(0,l.jsx)(e.mi,{children:"y"}),(0,l.jsx)(e.mo,{children:"^"})]}),(0,l.jsx)(e.mo,{children:"="}),(0,l.jsxs)(e.mfrac,{children:[(0,l.jsxs)(e.msub,{children:[(0,l.jsx)(e.mi,{children:"n"}),(0,l.jsx)(e.mi,{children:"L"})]}),(0,l.jsx)(e.mi,{children:"n"})]}),(0,l.jsxs)(e.msub,{children:[(0,l.jsxs)(e.mover,{accent:"true",children:[(0,l.jsx)(e.mi,{children:"y"}),(0,l.jsx)(e.mo,{children:"^"})]}),(0,l.jsx)(e.mi,{children:"L"})]}),(0,l.jsx)(e.mo,{children:"+"}),(0,l.jsxs)(e.mfrac,{children:[(0,l.jsxs)(e.msub,{children:[(0,l.jsx)(e.mi,{children:"n"}),(0,l.jsx)(e.mi,{children:"R"})]}),(0,l.jsx)(e.mi,{children:"n"})]}),(0,l.jsxs)(e.msub,{children:[(0,l.jsxs)(e.mover,{accent:"true",children:[(0,l.jsx)(e.mi,{children:"y"}),(0,l.jsx)(e.mo,{children:"^"})]}),(0,l.jsx)(e.mi,{children:"R"})]})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\hat{y} = \\frac{n_L}{n}\\hat{y}_L + \\frac{n_R}{n}\\hat{y}_R"})]})})}),(0,l.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,l.jsx)(e.span,{className:"mord accent",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsxs)(e.span,{className:"vlist",style:{height:"0.6944em"},children:[(0,l.jsxs)(e.span,{style:{top:"-3em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"})]}),(0,l.jsxs)(e.span,{style:{top:"-3em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(e.span,{className:"accent-body",style:{left:"-0.1944em"},children:(0,l.jsx)(e.span,{className:"mord",children:"^"})})]})]}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.1944em"},children:(0,l.jsx)(e.span,{})})})]})}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(e.span,{className:"mrel",children:"="}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1.7936em",verticalAlign:"-0.686em"}}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mopen nulldelimiter"}),(0,l.jsx)(e.span,{className:"mfrac",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsxs)(e.span,{className:"vlist",style:{height:"1.1076em"},children:[(0,l.jsxs)(e.span,{style:{top:"-2.314em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(e.span,{className:"mord",children:(0,l.jsx)(e.span,{className:"mord mathnormal",children:"n"})})]}),(0,l.jsxs)(e.span,{style:{top:"-3.23em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(e.span,{className:"frac-line",style:{borderBottomWidth:"0.04em"}})]}),(0,l.jsxs)(e.span,{style:{top:"-3.677em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(e.span,{className:"mord",children:(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.3283em"},children:(0,l.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mathnormal mtight",children:"L"})})]})}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,l.jsx)(e.span,{})})})]})})]})})]})]}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.686em"},children:(0,l.jsx)(e.span,{})})})]})}),(0,l.jsx)(e.span,{className:"mclose nulldelimiter"})]}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord accent",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsxs)(e.span,{className:"vlist",style:{height:"0.6944em"},children:[(0,l.jsxs)(e.span,{style:{top:"-3em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"})]}),(0,l.jsxs)(e.span,{style:{top:"-3em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(e.span,{className:"accent-body",style:{left:"-0.1944em"},children:(0,l.jsx)(e.span,{className:"mord",children:"^"})})]})]}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.1944em"},children:(0,l.jsx)(e.span,{})})})]})}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.3283em"},children:(0,l.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0359em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mathnormal mtight",children:"L"})})]})}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,l.jsx)(e.span,{})})})]})})]}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mbin",children:"+"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1.7936em",verticalAlign:"-0.686em"}}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mopen nulldelimiter"}),(0,l.jsx)(e.span,{className:"mfrac",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsxs)(e.span,{className:"vlist",style:{height:"1.1076em"},children:[(0,l.jsxs)(e.span,{style:{top:"-2.314em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(e.span,{className:"mord",children:(0,l.jsx)(e.span,{className:"mord mathnormal",children:"n"})})]}),(0,l.jsxs)(e.span,{style:{top:"-3.23em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(e.span,{className:"frac-line",style:{borderBottomWidth:"0.04em"}})]}),(0,l.jsxs)(e.span,{style:{top:"-3.677em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(e.span,{className:"mord",children:(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.3283em"},children:(0,l.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.00773em"},children:"R"})})]})}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,l.jsx)(e.span,{})})})]})})]})})]})]}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.686em"},children:(0,l.jsx)(e.span,{})})})]})}),(0,l.jsx)(e.span,{className:"mclose nulldelimiter"})]}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord accent",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsxs)(e.span,{className:"vlist",style:{height:"0.6944em"},children:[(0,l.jsxs)(e.span,{style:{top:"-3em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"})]}),(0,l.jsxs)(e.span,{style:{top:"-3em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(e.span,{className:"accent-body",style:{left:"-0.1944em"},children:(0,l.jsx)(e.span,{className:"mord",children:"^"})})]})]}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.1944em"},children:(0,l.jsx)(e.span,{})})})]})}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.3283em"},children:(0,l.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0359em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.00773em"},children:"R"})})]})}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,l.jsx)(e.span,{})})})]})})]})]})]})]})}),"\n",(0,l.jsxs)(e.p,{children:["\u0433\u0434\u0435 ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsx)(e.mrow,{children:(0,l.jsx)(e.mi,{children:"n"})}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"n"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"n"})]})})]})," - \u0447\u0438\u0441\u043b\u043e \u043e\u0431\u0443\u0447\u0430\u044e\u0449\u0438\u0445 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432, \u043f\u043e\u043f\u0430\u0432\u0448\u0438\u0439 \u0432 \u0443\u0437\u0435\u043b, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u043f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u0442\u0441\u044f \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u043f\u0443\u0449\u0435\u043d\u043d\u043e\u0433\u043e \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u0430, \u0430 ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsx)(e.mrow,{children:(0,l.jsxs)(e.msub,{children:[(0,l.jsx)(e.mi,{children:"n"}),(0,l.jsx)(e.mi,{children:"L"})]})}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"n_L"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.5806em",verticalAlign:"-0.15em"}}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.3283em"},children:(0,l.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mathnormal mtight",children:"L"})})]})}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,l.jsx)(e.span,{})})})]})})]})]})})]})," \u0438 ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsx)(e.mrow,{children:(0,l.jsxs)(e.msub,{children:[(0,l.jsx)(e.mi,{children:"n"}),(0,l.jsx)(e.mi,{children:"R"})]})}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"n_R"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.5806em",verticalAlign:"-0.15em"}}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.3283em"},children:(0,l.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.00773em"},children:"R"})})]})}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,l.jsx)(e.span,{})})})]})})]})]})})]})," - \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u043e\u0431\u0443\u0447\u0430\u044e\u0449\u0438\u0445 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432, \u0441\u043f\u0443\u0441\u043a\u0430\u044e\u0449\u0438\u0445\u0441\u044f \u0432 \u043b\u0435\u0432\u0443\u044e \u0438 \u043f\u0440\u0430\u0432\u0443\u044e \u0434\u043e\u0447\u0435\u0440\u043d\u044e\u044e \u0432\u0435\u0440\u0448\u0438\u043d\u0443 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e."]})]})}function d(s={}){const{wrapper:e}={...(0,n.R)(),...s.components};return e?(0,l.jsx)(e,{...s,children:(0,l.jsx)(h,{...s})}):h(s)}},28453:(s,e,a)=>{a.d(e,{R:()=>i,x:()=>c});var l=a(96540);const n={},t=l.createContext(n);function i(s){const e=l.useContext(t);return l.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function c(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(n):s.components||n:i(s.components),l.createElement(t.Provider,{value:e},s.children)}}}]);