"use strict";(self.webpackChunksite_new=self.webpackChunksite_new||[]).push([[6469],{91222:(s,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>m,default:()=>x,frontMatter:()=>i,metadata:()=>t,toc:()=>r});var n=a(74848),l=a(28453);const i={description:"\u041d\u0435\u043e\u0434\u043d\u043e\u0437\u043d\u0430\u0447\u043d\u043e\u0441\u0442\u044c \u043c\u0435\u0436\u0434\u0443 \u043f\u0440\u043e\u0433\u043d\u043e\u0441\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u043c\u0438 \u0444\u0443\u043d\u043a\u0446\u0438\u044f\u043c\u0438 \u0438 \u0432\u0435\u0441\u0430\u043c\u0438 \u043d\u0435\u0439\u0440\u043e\u0441\u0435\u0442\u0438, \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u044c \u044d\u043a\u0432\u0438\u0432\u0430\u043b\u0435\u043d\u0442\u043d\u044b\u0445 \u0440\u0435\u0448\u0435\u043d\u0438\u0439.",keywords:["\u0441\u0438\u043c\u043c\u0435\u0442\u0440\u0438\u044f \u0432\u0435\u0441\u043e\u0432","\u043d\u0435\u043e\u0434\u043d\u043e\u0437\u043d\u0430\u0447\u043d\u043e\u0441\u0442\u044c \u0440\u0435\u0448\u0435\u043d\u0438\u044f","\u044d\u043a\u0432\u0438\u0432\u0430\u043b\u0435\u043d\u0442\u043d\u044b\u0435 \u0440\u0435\u0448\u0435\u043d\u0438\u044f","\u043d\u0435\u0439\u0440\u043e\u043d\u043d\u044b\u0435 \u0441\u0435\u0442\u0438"]},m="\u0421\u0438\u043c\u043c\u0435\u0442\u0440\u0438\u044f \u0432 \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0435 \u0432\u0435\u0441\u043e\u0432",t={id:"Neural-networks/MLP/Weights-symmetries",title:"\u0421\u0438\u043c\u043c\u0435\u0442\u0440\u0438\u044f \u0432 \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0435 \u0432\u0435\u0441\u043e\u0432",description:"\u041d\u0435\u043e\u0434\u043d\u043e\u0437\u043d\u0430\u0447\u043d\u043e\u0441\u0442\u044c \u043c\u0435\u0436\u0434\u0443 \u043f\u0440\u043e\u0433\u043d\u043e\u0441\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u043c\u0438 \u0444\u0443\u043d\u043a\u0446\u0438\u044f\u043c\u0438 \u0438 \u0432\u0435\u0441\u0430\u043c\u0438 \u043d\u0435\u0439\u0440\u043e\u0441\u0435\u0442\u0438, \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u044c \u044d\u043a\u0432\u0438\u0432\u0430\u043b\u0435\u043d\u0442\u043d\u044b\u0445 \u0440\u0435\u0448\u0435\u043d\u0438\u0439.",source:"@site/docs/Neural-networks/04-MLP/05-Weights-symmetries.md",sourceDirName:"Neural-networks/04-MLP",slug:"/Neural-networks/MLP/Weights-symmetries",permalink:"/docs/Neural-networks/MLP/Weights-symmetries",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{description:"\u041d\u0435\u043e\u0434\u043d\u043e\u0437\u043d\u0430\u0447\u043d\u043e\u0441\u0442\u044c \u043c\u0435\u0436\u0434\u0443 \u043f\u0440\u043e\u0433\u043d\u043e\u0441\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u043c\u0438 \u0444\u0443\u043d\u043a\u0446\u0438\u044f\u043c\u0438 \u0438 \u0432\u0435\u0441\u0430\u043c\u0438 \u043d\u0435\u0439\u0440\u043e\u0441\u0435\u0442\u0438, \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u044c \u044d\u043a\u0432\u0438\u0432\u0430\u043b\u0435\u043d\u0442\u043d\u044b\u0445 \u0440\u0435\u0448\u0435\u043d\u0438\u0439.",keywords:["\u0441\u0438\u043c\u043c\u0435\u0442\u0440\u0438\u044f \u0432\u0435\u0441\u043e\u0432","\u043d\u0435\u043e\u0434\u043d\u043e\u0437\u043d\u0430\u0447\u043d\u043e\u0441\u0442\u044c \u0440\u0435\u0448\u0435\u043d\u0438\u044f","\u044d\u043a\u0432\u0438\u0432\u0430\u043b\u0435\u043d\u0442\u043d\u044b\u0435 \u0440\u0435\u0448\u0435\u043d\u0438\u044f","\u043d\u0435\u0439\u0440\u043e\u043d\u043d\u044b\u0435 \u0441\u0435\u0442\u0438"]},sidebar:"Neural-networks",previous:{title:"\u0412\u044b\u0445\u043e\u0434\u044b \u043d\u0435\u0439\u0440\u043e\u0441\u0435\u0442\u0438 \u0438 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u043f\u043e\u0442\u0435\u0440\u044c",permalink:"/docs/Neural-networks/MLP/Outputs-loss-functions"},next:{title:"\u041c\u043e\u0434\u0435\u043b\u0438\u0440\u0443\u044e\u0449\u0438\u0435 \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u0438 \u043d\u0435\u0439\u0440\u043e\u0441\u0435\u0442\u0438",permalink:"/docs/Neural-networks/MLP/Modeling-ability"}},c={},r=[];function h(s){const e={a:"a",annotation:"annotation",blockquote:"blockquote",h1:"h1",img:"img",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msub:"msub",msubsup:"msubsup",p:"p",semantics:"semantics",span:"span",...(0,l.R)(),...s.components},{Details:i}=e;return i||function(s,e){throw new Error("Expected "+(e?"component":"object")+" `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"\u0441\u0438\u043c\u043c\u0435\u0442\u0440\u0438\u044f-\u0432-\u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0435-\u0432\u0435\u0441\u043e\u0432",children:"\u0421\u0438\u043c\u043c\u0435\u0442\u0440\u0438\u044f \u0432 \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0435 \u0432\u0435\u0441\u043e\u0432"}),"\n",(0,n.jsxs)(e.p,{children:["\u0420\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0438\u043c \u043f\u0440\u0438\u043c\u0435\u0440 \u043c\u043d\u043e\u0433\u043e\u0441\u043b\u043e\u0439\u043d\u043e\u0433\u043e ",(0,n.jsx)(e.a,{href:"./Multilayer-perceptron",children:"\u043f\u0435\u0440\u0441\u0435\u043f\u0442\u0440\u043e\u043d\u0430"}),":"]}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{src:a(79453).A+"",width:"802",height:"722"})}),"\n",(0,n.jsxs)(e.p,{children:["\u041d\u0435\u0442\u0440\u0443\u0434\u043d\u043e \u0437\u0430\u043c\u0435\u0442\u0438\u0442\u044c, \u0447\u0442\u043e \u0435\u0441\u043b\u0438 \u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u043e \u043f\u0435\u0440\u0435\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0432\u0435\u0441\u0430 \u0434\u043b\u044f \u0432\u0441\u0435\u0445 \u0432\u0445\u043e\u0434\u044f\u0449\u0438\u0445 \u0438 \u0438\u0441\u0445\u043e\u0434\u044f\u0449\u0438\u0445 \u0441\u0432\u044f\u0437\u0435\u0439 \u0434\u043b\u044f \u043b\u044e\u0431\u043e\u0439 \u043f\u0430\u0440\u044b \u043d\u0435\u0439\u0440\u043e\u043d\u043e\u0432 \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u0441\u043a\u0440\u044b\u0442\u043e\u0433\u043e \u0441\u043b\u043e\u044f (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 \u0432\u0435\u0441\u0430, \u043e\u0442\u0432\u0435\u0447\u0430\u044e\u0449\u0438\u0435 \u043a\u0440\u0430\u0441\u043d\u044b\u043c \u0438 \u0437\u0435\u043b\u0451\u043d\u044b\u043c \u0441\u0432\u044f\u0437\u044f\u043c, \u043e\u0442\u0432\u0435\u0447\u0430\u044e\u0449\u0438\u0435 \u043d\u0435\u0439\u0440\u043e\u043d\u0430\u043c ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsxs)(e.msubsup,{children:[(0,n.jsx)(e.mi,{children:"a"}),(0,n.jsx)(e.mn,{children:"1"}),(0,n.jsx)(e.mn,{children:"2"})]})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"a^2_1"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1.0622em",verticalAlign:"-0.2481em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"a"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsxs)(e.span,{className:"vlist",style:{height:"0.8141em"},children:[(0,n.jsxs)(e.span,{style:{top:"-2.4519em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"1"})})]}),(0,n.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"2"})})]})]}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.2481em"},children:(0,n.jsx)(e.span,{})})})]})})]})]})})]})," \u0438 ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsxs)(e.msubsup,{children:[(0,n.jsx)(e.mi,{children:"a"}),(0,n.jsx)(e.mn,{children:"2"}),(0,n.jsx)(e.mn,{children:"2"})]})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"a^2_2"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1.0622em",verticalAlign:"-0.2481em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"a"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsxs)(e.span,{className:"vlist",style:{height:"0.8141em"},children:[(0,n.jsxs)(e.span,{style:{top:"-2.4519em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"2"})})]}),(0,n.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"2"})})]})]}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.2481em"},children:(0,n.jsx)(e.span,{})})})]})})]})]})})]})," \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e), \u0442\u043e \u043c\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u043c \u043d\u0435\u0439\u0440\u043e\u0441\u0435\u0442\u044c, \u043c\u043e\u0434\u0435\u043b\u0438\u0440\u0443\u044e\u0449\u0443\u044e \u0432 \u0442\u043e\u0447\u043d\u043e\u0441\u0442\u0438 \u0442\u0443 \u0436\u0435 \u0441\u0430\u043c\u0443\u044e \u0437\u0430\u043a\u043e\u043d\u043e\u043c\u0435\u0440\u043d\u043e\u0441\u0442\u044c."]}),"\n",(0,n.jsxs)(i,{children:[(0,n.jsxs)("summary",{children:["\u0415\u0441\u043b\u0438 \u0432 \u0441\u043b\u043e\u0435 ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsx)(e.mi,{children:"M"})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"M"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6833em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"M"})]})})]})," \u043d\u0435\u0439\u0440\u043e\u043d\u043e\u0432, \u0441\u043a\u043e\u043b\u044c\u043a\u043e \u044d\u043a\u0432\u0438\u0432\u0430\u043b\u0435\u043d\u0442\u043d\u044b\u0445 \u043f\u0435\u0440\u0435\u0441\u0442\u0430\u043d\u043e\u0432\u043e\u043a\n\u0442\u0430\u043a\u043e\u0433\u043e \u0442\u0438\u043f\u0430 \u043c\u043e\u0436\u043d\u043e \u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0441\u0442\u0438?"]}),(0,n.jsxs)(e.p,{children:[(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"M"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"!"}),(0,n.jsx)(e.mo,{children:"="}),(0,n.jsx)(e.mi,{children:"M"}),(0,n.jsx)(e.mo,{children:"\u22c5"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsx)(e.mi,{children:"M"}),(0,n.jsx)(e.mo,{children:"\u2212"}),(0,n.jsx)(e.mn,{children:"1"}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"}),(0,n.jsx)(e.mo,{children:"\u22c5"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsx)(e.mi,{children:"M"}),(0,n.jsx)(e.mo,{children:"\u2212"}),(0,n.jsx)(e.mn,{children:"2"}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"}),(0,n.jsx)(e.mi,{mathvariant:"normal",children:"."}),(0,n.jsx)(e.mi,{mathvariant:"normal",children:"."}),(0,n.jsx)(e.mi,{mathvariant:"normal",children:"."}),(0,n.jsx)(e.mo,{children:"\u22c5"}),(0,n.jsx)(e.mn,{children:"2"}),(0,n.jsx)(e.mo,{children:"\u22c5"}),(0,n.jsx)(e.mn,{children:"1"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"M!=M \\cdot (M-1)  \\cdot (M-2) ... \\cdot 2 \\cdot 1"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6944em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"M"}),(0,n.jsx)(e.span,{className:"mclose",children:"!"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:"="}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6833em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"M"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"\u22c5"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"M"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"\u2212"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord",children:"1"}),(0,n.jsx)(e.span,{className:"mclose",children:")"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"\u22c5"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"M"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"\u2212"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord",children:"2"}),(0,n.jsx)(e.span,{className:"mclose",children:")"}),(0,n.jsx)(e.span,{className:"mord",children:"..."}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"\u22c5"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,n.jsx)(e.span,{className:"mord",children:"2"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"\u22c5"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,n.jsx)(e.span,{className:"mord",children:"1"})]})]})]})," \u043f\u0435\u0440\u0435\u0441\u0442\u0430\u043d\u043e\u0432\u043e\u043a."]})]}),"\n",(0,n.jsxs)(i,{children:[(0,n.jsxs)("summary",{children:["\u0415\u0441\u043b\u0438 \u0432\u0441\u0435\u0433\u043e \u0435\u0441\u0442\u044c K \u0441\u043a\u0440\u044b\u0442\u044b\u0445 \u0441\u043b\u043e\u0451\u0432 \u0441 \u0447\u0438\u0441\u043b\u043e\u043c \u043d\u0435\u0439\u0440\u043e\u043d\u043e\u0432 ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"M"}),(0,n.jsx)(e.mn,{children:"1"})]}),(0,n.jsx)(e.mo,{separator:"true",children:","}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"M"}),(0,n.jsx)(e.mn,{children:"2"})]}),(0,n.jsx)(e.mo,{separator:"true",children:","}),(0,n.jsx)(e.mi,{mathvariant:"normal",children:"."}),(0,n.jsx)(e.mi,{mathvariant:"normal",children:"."}),(0,n.jsx)(e.mi,{mathvariant:"normal",children:"."}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"M"}),(0,n.jsx)(e.mi,{children:"K"})]})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"M_1,M_2,...M_K"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.8778em",verticalAlign:"-0.1944em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"M"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.109em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"1"})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsx)(e.span,{className:"mpunct",children:","}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"M"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.109em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"2"})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsx)(e.span,{className:"mpunct",children:","}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(e.span,{className:"mord",children:"..."}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"M"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3283em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.109em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.07153em"},children:"K"})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]})]})})]}),", \u0442\u043e \u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0432\u0441\u0435\u0433\u043e \u044d\u043a\u0432\u0438\u0432\u0430\u043b\u0435\u043d\u0442\u043d\u044b\u0445 \u043f\u0435\u0440\u0435\u0441\u0442\u0430\u043d\u043e\u0432\u043e\u043a \u043c\u043e\u0436\u043d\u043e \u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0441\u0442\u0438, \u043f\u043e\u043b\u0443\u0447\u0430\u044f \u0442\u0443 \u0436\u0435 \u0441\u0430\u043c\u0443\u044e \u0444\u0443\u043d\u043a\u0446\u0438\u044e?"]}),(0,n.jsxs)(e.p,{children:["\u041f\u043e\u0441\u043a\u043e\u043b\u044c\u043a\u0443 \u043c\u043e\u0436\u0435\u043c \u043f\u0435\u0440\u0435\u0441\u0442\u0430\u0432\u043b\u044f\u0442\u044c \u043d\u0435\u0439\u0440\u043e\u043d\u044b \u0432 \u0440\u0430\u043c\u043a\u0430\u0445 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0441\u043b\u043e\u044f \u043d\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e, \u0442\u043e \u0431\u0443\u0434\u0435\u0442 ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"M"}),(0,n.jsx)(e.mn,{children:"1"})]}),(0,n.jsx)(e.mo,{stretchy:"false",children:"!"}),(0,n.jsx)(e.mo,{children:"\u22c5"}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"M"}),(0,n.jsx)(e.mn,{children:"2"})]}),(0,n.jsx)(e.mo,{stretchy:"false",children:"!"}),(0,n.jsx)(e.mo,{children:"\u22c5"}),(0,n.jsx)(e.mi,{mathvariant:"normal",children:"."}),(0,n.jsx)(e.mi,{mathvariant:"normal",children:"."}),(0,n.jsx)(e.mi,{mathvariant:"normal",children:"."}),(0,n.jsx)(e.mo,{children:"\u22c5"}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"M"}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"K"}),(0,n.jsx)(e.mo,{children:"\u2212"}),(0,n.jsx)(e.mn,{children:"1"})]})]}),(0,n.jsx)(e.mo,{stretchy:"false",children:"!"}),(0,n.jsx)(e.mo,{children:"\u22c5"}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"M"}),(0,n.jsx)(e.mi,{children:"K"})]}),(0,n.jsx)(e.mo,{stretchy:"false",children:"!"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"M_1! \\cdot M_2! \\cdot ...  \\cdot M_{K-1}! \\cdot M_K!"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.8444em",verticalAlign:"-0.15em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"M"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.109em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"1"})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsx)(e.span,{className:"mclose",children:"!"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"\u22c5"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.8444em",verticalAlign:"-0.15em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"M"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.109em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"2"})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsx)(e.span,{className:"mclose",children:"!"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"\u22c5"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.4445em"}}),(0,n.jsx)(e.span,{className:"mord",children:"..."}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"\u22c5"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.9028em",verticalAlign:"-0.2083em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"M"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3283em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.109em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsxs)(e.span,{className:"mord mtight",children:[(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.07153em"},children:"K"}),(0,n.jsx)(e.span,{className:"mbin mtight",children:"\u2212"}),(0,n.jsx)(e.span,{className:"mord mtight",children:"1"})]})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.2083em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsx)(e.span,{className:"mclose",children:"!"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"\u22c5"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.8444em",verticalAlign:"-0.15em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"M"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3283em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.109em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.07153em"},children:"K"})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsx)(e.span,{className:"mclose",children:"!"})]})]})]})," \u043f\u0435\u0440\u0435\u0441\u0442\u0430\u043d\u043e\u0432\u043e\u043a."]})]}),"\n",(0,n.jsxs)(e.p,{children:["\u0415\u0441\u043b\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f \u043d\u0435\u0447\u0451\u0442\u043d\u044b\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0430\u043a\u0442\u0438\u0432\u0430\u0446\u0438\u0438 (\u0442.\u0435. \u0434\u043b\u044f \u043a\u043e\u0442\u043e\u0440\u044b\u0445 ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"h"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsx)(e.mo,{children:"\u2212"}),(0,n.jsx)(e.mi,{children:"u"}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"}),(0,n.jsx)(e.mo,{children:"="}),(0,n.jsx)(e.mo,{children:"\u2212"}),(0,n.jsx)(e.mi,{children:"h"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsx)(e.mi,{children:"u"}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"h(-u)=-h(u)"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"h"}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsx)(e.span,{className:"mord",children:"\u2212"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"u"}),(0,n.jsx)(e.span,{className:"mclose",children:")"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:"="}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord",children:"\u2212"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"h"}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"u"}),(0,n.jsx)(e.span,{className:"mclose",children:")"})]})]})]}),"), \u0442\u043e \u0432\u044b\u0431\u0440\u0430\u0432 \u043a\u0430\u043a\u043e\u0439-\u0442\u043e \u043d\u0435\u0439\u0440\u043e\u043d \u043c\u043e\u0436\u043d\u043e \u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u043e \u0438\u0437\u043c\u0435\u043d\u044f\u0442\u044c \u0437\u043d\u0430\u043a \u0432\u0445\u043e\u0434\u044f\u0449\u0438\u0445 \u0438 \u0438\u0441\u0445\u043e\u0434\u044f\u0449\u0438\u0445 \u0441\u0432\u044f\u0437\u0435\u0439 - \u044d\u0442\u043e \u0442\u0430\u043a\u0436\u0435 \u043d\u0435 \u043e\u043a\u0430\u0436\u0435\u0442 \u0432\u043b\u0438\u044f\u043d\u0438\u044f \u043d\u0430 \u0438\u0442\u043e\u0433\u043e\u0432\u0443\u044e \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u044c."]}),"\n",(0,n.jsxs)(i,{children:[(0,n.jsxs)("summary",{children:["\u041a\u0430\u043a\u0438\u0435 \u0438\u0437 \u0440\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0435\u043d\u043d\u044b\u0445 ",(0,n.jsx)(e.a,{href:"Activation-functions",children:"\u0444\u0443\u043d\u043a\u0446\u0438\u0439 \u0430\u043a\u0442\u0438\u0432\u0430\u0446\u0438\u0438"})," \u044f\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u043d\u0435\u0447\u0451\u0442\u043d\u044b\u043c\u0438?"]}),(0,n.jsx)(e.p,{children:"\u0422\u043e\u0436\u0434\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u0430\u044f, \u0433\u0438\u043f\u0435\u0440\u0431\u043e\u043b\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0442\u0430\u043d\u0433\u0435\u043d\u0441, SoftSign \u0438 \u0436\u0451\u0441\u0442\u043a\u0438\u0439 \u0433\u0438\u043f\u0435\u0440\u0431\u043e\u043b\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0442\u0430\u043d\u0433\u0435\u043d\u0441."})]}),"\n",(0,n.jsx)(e.p,{children:"\u0423\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u0435 \u0441\u0438\u043c\u043c\u0435\u0442\u0440\u0438\u0438 \u0432 \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0435 \u0432\u0435\u0441\u043e\u0432 \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u044e\u0442, \u0447\u0442\u043e \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u043f\u043e\u0442\u0435\u0440\u044c \u0432 \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0435 \u0432\u0435\u0441\u043e\u0432 \u0431\u0443\u0434\u0435\u0442 \u043e\u0431\u043b\u0430\u0434\u0430\u0442\u044c \u043d\u0435 \u043e\u0434\u043d\u0438\u043c, \u0430 \u0441\u0440\u0430\u0437\u0443 \u0431\u043e\u043b\u044c\u0448\u0438\u043c \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e\u043c \u044d\u043a\u0432\u0438\u0432\u0430\u043b\u0435\u043d\u0442\u043d\u044b\u0445 \u043c\u0438\u043d\u0438\u043c\u0443\u043c\u043e\u0432, \u0437\u0430 \u0441\u0447\u0451\u0442 \u0447\u0435\u0433\u043e, \u0432 \u0447\u0430\u0441\u0442\u043d\u043e\u0441\u0442\u0438, \u043e\u043d\u0430 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043d\u0435\u0432\u044b\u043f\u0443\u043a\u043b\u043e\u0439."}),"\n",(0,n.jsxs)(e.blockquote,{children:["\n",(0,n.jsx)(e.p,{children:"\u041d\u0430 \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0435 \u044d\u0442\u043e \u043d\u0435 \u0438\u043c\u0435\u0435\u0442 \u0431\u043e\u043b\u044c\u0448\u043e\u0433\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f, \u043f\u043e\u0441\u043a\u043e\u043b\u044c\u043a\u0443 \u0438\u0437 \u0432\u0441\u0435\u0433\u043e \u043c\u043d\u043e\u0433\u043e\u043e\u0431\u0440\u0430\u0437\u0438\u044f \u044d\u043a\u0432\u0438\u0432\u0430\u043b\u0435\u043d\u0442\u043d\u044b\u0445 \u043c\u0438\u043d\u0438\u043c\u0443\u043c\u043e\u0432 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u043f\u043e\u0442\u0435\u0440\u044c \u043d\u0430\u043c \u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u043d\u0430\u0439\u0442\u0438 \u0445\u043e\u0442\u044f \u0431\u044b \u043e\u0434\u0438\u043d."}),"\n"]})]})}function x(s={}){const{wrapper:e}={...(0,l.R)(),...s.components};return e?(0,n.jsx)(e,{...s,children:(0,n.jsx)(h,{...s})}):h(s)}},79453:(s,e,a)=>{a.d(e,{A:()=>n});const n=a.p+"assets/images/03-MLP-weights-symmetry-1259a4ddc10edb97f10b215d617bcd05.png"},28453:(s,e,a)=>{a.d(e,{R:()=>m,x:()=>t});var n=a(96540);const l={},i=n.createContext(l);function m(s){const e=n.useContext(i);return n.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function t(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(l):s.components||l:m(s.components),n.createElement(i.Provider,{value:e},s.children)}}}]);