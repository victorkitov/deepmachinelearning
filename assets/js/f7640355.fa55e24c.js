"use strict";(self.webpackChunksite_new=self.webpackChunksite_new||[]).push([[5865],{94714:(s,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>r,toc:()=>t});var n=a(74848),m=a(28453);const l={description:""},i="\u041c\u0435\u0442\u043e\u0434 \u043d\u0430\u0438\u0432\u043d\u043e\u0433\u043e \u0411\u0430\u0439\u0435\u0441\u0430",r={id:"docs_ml/Simple-models-interpretation/Naive-Bayes",title:"\u041c\u0435\u0442\u043e\u0434 \u043d\u0430\u0438\u0432\u043d\u043e\u0433\u043e \u0411\u0430\u0439\u0435\u0441\u0430",description:"",source:"@site/docs/docs_ml/17-Simple-models-interpretation/04-Naive-Bayes.md",sourceDirName:"docs_ml/17-Simple-models-interpretation",slug:"/docs_ml/Simple-models-interpretation/Naive-Bayes",permalink:"/docs/docs_ml/Simple-models-interpretation/Naive-Bayes",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{description:""},sidebar:"docs_ml",previous:{title:"\u0418\u043d\u0442\u0435\u0440\u043f\u0440\u0435\u0442\u0430\u0446\u0438\u044f \u043c\u0435\u0442\u0440\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u043c\u0435\u0442\u043e\u0434\u043e\u0432",permalink:"/docs/docs_ml/Simple-models-interpretation/Metric-methods-interpretability"},next:{title:"\u0418\u043d\u0442\u0435\u0440\u043f\u0440\u0435\u0442\u0430\u0446\u0438\u044f \u043b\u0438\u043d\u0435\u0439\u043d\u043e\u0439 \u0440\u0435\u0433\u0440\u0435\u0441\u0441\u0438\u0438",permalink:"/docs/docs_ml/Simple-models-interpretation/Linear-regression"}},c={},t=[];function h(s){const e={annotation:"annotation",h1:"h1",header:"header",math:"math",mfrac:"mfrac",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msub:"msub",msup:"msup",p:"p",semantics:"semantics",span:"span",...(0,m.R)(),...s.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.header,{children:(0,n.jsx)(e.h1,{id:"\u043c\u0435\u0442\u043e\u0434-\u043d\u0430\u0438\u0432\u043d\u043e\u0433\u043e-\u0431\u0430\u0439\u0435\u0441\u0430",children:"\u041c\u0435\u0442\u043e\u0434 \u043d\u0430\u0438\u0432\u043d\u043e\u0433\u043e \u0411\u0430\u0439\u0435\u0441\u0430"})}),"\n",(0,n.jsxs)(e.p,{children:["\u041c\u0435\u0442\u043e\u0434 \u043d\u0430\u0438\u0432\u043d\u043e\u0433\u043e \u0411\u0430\u0439\u0435\u0441\u0430 \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u043c \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u043a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438 \u0438 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0441\u043e\u0431\u043e\u0439 \u0433\u0435\u043d\u0435\u0440\u0430\u0442\u0438\u0432\u043d\u0443\u044e \u043c\u043e\u0434\u0435\u043b\u044c, \u0433\u0434\u0435, \u043f\u043e \u043c\u043e\u0434\u0435\u043b\u044c\u043d\u043e\u043c\u0443 \u043f\u0440\u0435\u0434\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u044e, \u0432\u0435\u0440\u043e\u044f\u0442\u043d\u043e\u0441\u0442\u044c ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"p"}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mo,{fence:"true",children:"("}),(0,n.jsx)(e.mi,{mathvariant:"bold",children:"x"}),(0,n.jsx)(e.mi,{mathvariant:"normal",children:"\u2223"}),(0,n.jsx)(e.mi,{children:"y"}),(0,n.jsx)(e.mo,{fence:"true",children:")"})]})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"p\\left(\\mathbf{x}|y\\right)"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"p"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsxs)(e.span,{className:"minner",children:[(0,n.jsx)(e.span,{className:"mopen delimcenter",style:{top:"0em"},children:"("}),(0,n.jsx)(e.span,{className:"mord mathbf",children:"x"}),(0,n.jsx)(e.span,{className:"mord",children:"\u2223"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,n.jsx)(e.span,{className:"mclose delimcenter",style:{top:"0em"},children:")"})]})]})})]})," \u0444\u0430\u043a\u0442\u043e\u0440\u0438\u0437\u0443\u0435\u0442\u0441\u044f \u0432 \u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0432\u0435\u0440\u043e\u044f\u0442\u043d\u043e\u0441\u0442\u0435\u0439 \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u0430 (\u043e\u0431\u043e\u0437\u043d\u0430\u0447\u0430\u0435\u043c\u043e\u0433\u043e \u0432\u0435\u0440\u0445\u043d\u0438\u043c \u0438\u043d\u0434\u0435\u043a\u0441\u043e\u043c):"]}),"\n",(0,n.jsx)(e.span,{className:"katex-display",children:(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"p"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsx)(e.mi,{mathvariant:"bold",children:"x"}),(0,n.jsx)(e.mi,{mathvariant:"normal",children:"\u2223"}),(0,n.jsx)(e.mi,{children:"y"}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"}),(0,n.jsx)(e.mo,{children:"="}),(0,n.jsx)(e.mi,{children:"p"}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mo,{fence:"true",children:"("}),(0,n.jsxs)(e.msup,{children:[(0,n.jsx)(e.mi,{children:"x"}),(0,n.jsx)(e.mn,{children:"1"})]}),(0,n.jsx)(e.mi,{mathvariant:"normal",children:"\u2223"}),(0,n.jsx)(e.mi,{children:"y"}),(0,n.jsx)(e.mo,{fence:"true",children:")"})]}),(0,n.jsx)(e.mi,{children:"p"}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mo,{fence:"true",children:"("}),(0,n.jsxs)(e.msup,{children:[(0,n.jsx)(e.mi,{children:"x"}),(0,n.jsx)(e.mn,{children:"2"})]}),(0,n.jsx)(e.mi,{mathvariant:"normal",children:"\u2223"}),(0,n.jsx)(e.mi,{children:"y"}),(0,n.jsx)(e.mo,{fence:"true",children:")"})]}),(0,n.jsx)(e.mi,{mathvariant:"normal",children:"."}),(0,n.jsx)(e.mi,{mathvariant:"normal",children:"."}),(0,n.jsx)(e.mi,{mathvariant:"normal",children:"."}),(0,n.jsx)(e.mi,{children:"p"}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mo,{fence:"true",children:"("}),(0,n.jsxs)(e.msup,{children:[(0,n.jsx)(e.mi,{children:"x"}),(0,n.jsx)(e.mi,{children:"D"})]}),(0,n.jsx)(e.mi,{mathvariant:"normal",children:"\u2223"}),(0,n.jsx)(e.mi,{children:"y"}),(0,n.jsx)(e.mo,{fence:"true",children:")"})]})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"p(\\mathbf{x}|y) = p\\left(x^{1}|y\\right)p\\left(x^{2}|y\\right)...p\\left(x^{D}|y\\right)"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"p"}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsx)(e.span,{className:"mord mathbf",children:"x"}),(0,n.jsx)(e.span,{className:"mord",children:"\u2223"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,n.jsx)(e.span,{className:"mclose",children:")"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:"="}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1.2413em",verticalAlign:"-0.35em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"p"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsxs)(e.span,{className:"minner",children:[(0,n.jsx)(e.span,{className:"mopen delimcenter",style:{top:"0em"},children:(0,n.jsx)(e.span,{className:"delimsizing size1",children:"("})}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsx)(e.span,{className:"vlist-t",children:(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.8641em"},children:(0,n.jsxs)(e.span,{style:{top:"-3.113em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"1"})})})]})})})})})]}),(0,n.jsx)(e.span,{className:"mord",children:"\u2223"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,n.jsx)(e.span,{className:"mclose delimcenter",style:{top:"0em"},children:(0,n.jsx)(e.span,{className:"delimsizing size1",children:")"})})]}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"p"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsxs)(e.span,{className:"minner",children:[(0,n.jsx)(e.span,{className:"mopen delimcenter",style:{top:"0em"},children:(0,n.jsx)(e.span,{className:"delimsizing size1",children:"("})}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsx)(e.span,{className:"vlist-t",children:(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.8641em"},children:(0,n.jsxs)(e.span,{style:{top:"-3.113em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"2"})})})]})})})})})]}),(0,n.jsx)(e.span,{className:"mord",children:"\u2223"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,n.jsx)(e.span,{className:"mclose delimcenter",style:{top:"0em"},children:(0,n.jsx)(e.span,{className:"delimsizing size1",children:")"})})]}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(e.span,{className:"mord",children:"..."}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"p"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsxs)(e.span,{className:"minner",children:[(0,n.jsx)(e.span,{className:"mopen delimcenter",style:{top:"0em"},children:(0,n.jsx)(e.span,{className:"delimsizing size1",children:"("})}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsx)(e.span,{className:"vlist-t",children:(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.8913em"},children:(0,n.jsxs)(e.span,{style:{top:"-3.113em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.02778em"},children:"D"})})})]})})})})})]}),(0,n.jsx)(e.span,{className:"mord",children:"\u2223"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,n.jsx)(e.span,{className:"mclose delimcenter",style:{top:"0em"},children:(0,n.jsx)(e.span,{className:"delimsizing size1",children:")"})})]})]})]})]})}),"\n",(0,n.jsxs)(e.p,{children:["\u0427\u0442\u043e\u0431\u044b \u043d\u0435 \u043f\u0443\u0442\u0430\u0442\u044c \u043d\u043e\u043c\u0435\u0440 \u043e\u0431\u044a\u0435\u043a\u0442\u0430 \u0432 \u0432\u044b\u0431\u043e\u0440\u043a\u0435 \u0438 \u043d\u043e\u043c\u0435\u0440 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u0430, \u043d\u043e\u043c\u0435\u0440 \u043e\u0431\u044a\u0435\u043a\u0442\u0430 \u0432 \u0432\u044b\u0431\u043e\u0440\u043a\u0435 \u0431\u0443\u0434\u0435\u043c \u043e\u0431\u043e\u0437\u043d\u0430\u0447\u0430\u0442\u044c \u043d\u0438\u0436\u043d\u0438\u043c \u0438\u043d\u0434\u0435\u043a\u0441\u043e\u043c, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"x"}),(0,n.jsx)(e.mi,{children:"n"})]})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"x_{n}"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.5806em",verticalAlign:"-0.15em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.1514em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"n"})})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]})]})})]}),", \u0430 \u043d\u043e\u043c\u0435\u0440 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u0430 - \u0432\u0435\u0440\u0445\u043d\u0438\u043c, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsxs)(e.msup,{children:[(0,n.jsx)(e.mi,{children:"x"}),(0,n.jsx)(e.mi,{children:"i"})]})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"x^{i}"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.8247em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsx)(e.span,{className:"vlist-t",children:(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.8247em"},children:(0,n.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"i"})})})]})})})})})]})]})})]})," \u043e\u0431\u043e\u0437\u043d\u0430\u0447\u0430\u0435\u0442 i-\u0439 \u043f\u0440\u0438\u0437\u043d\u0430\u043a \u043e\u0431\u044a\u0435\u043a\u0442\u0430 ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsx)(e.mi,{mathvariant:"bold",children:"x"})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\mathbf{x}"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.4444em"}}),(0,n.jsx)(e.span,{className:"mord mathbf",children:"x"})]})})]}),". \u0417\u0430 D \u043e\u0431\u043e\u0437\u043d\u0430\u0447\u0438\u043c \u043e\u0431\u0449\u0435\u0435 \u0447\u0438\u0441\u043b\u043e \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432. \u0412 \u0438\u0442\u043e\u0433\u0435 \u043f\u043e\u043b\u0443\u0447\u0438\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0443\u044e \u0444\u043e\u0440\u043c\u0443\u043b\u0443 \u0434\u043b\u044f \u0440\u0430\u0441\u0447\u0451\u0442\u0430 \u0432\u0435\u0440\u043e\u044f\u0442\u043d\u043e\u0441\u0442\u0438 \u043a\u043b\u0430\u0441\u0441\u0430:"]}),"\n",(0,n.jsx)(e.span,{className:"katex-display",children:(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"p"}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mo,{fence:"true",children:"("}),(0,n.jsx)(e.mi,{children:"y"}),(0,n.jsx)(e.mi,{mathvariant:"normal",children:"\u2223"}),(0,n.jsx)(e.mi,{mathvariant:"bold",children:"x"}),(0,n.jsx)(e.mo,{fence:"true",children:")"})]}),(0,n.jsx)(e.mo,{children:"="}),(0,n.jsxs)(e.mfrac,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"p"}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mo,{fence:"true",children:"("}),(0,n.jsx)(e.mi,{children:"y"}),(0,n.jsx)(e.mo,{fence:"true",children:")"})]}),(0,n.jsx)(e.mi,{children:"p"}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mo,{fence:"true",children:"("}),(0,n.jsx)(e.mi,{mathvariant:"bold",children:"x"}),(0,n.jsx)(e.mi,{mathvariant:"normal",children:"\u2223"}),(0,n.jsx)(e.mi,{children:"y"}),(0,n.jsx)(e.mo,{fence:"true",children:")"})]})]}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"p"}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mo,{fence:"true",children:"("}),(0,n.jsx)(e.mi,{mathvariant:"bold",children:"x"}),(0,n.jsx)(e.mo,{fence:"true",children:")"})]})]})]}),(0,n.jsx)(e.mo,{children:"\u221d"}),(0,n.jsx)(e.mi,{children:"p"}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mo,{fence:"true",children:"("}),(0,n.jsx)(e.mi,{children:"y"}),(0,n.jsx)(e.mo,{fence:"true",children:")"})]}),(0,n.jsx)(e.mi,{children:"p"}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mo,{fence:"true",children:"("}),(0,n.jsx)(e.mi,{mathvariant:"bold",children:"x"}),(0,n.jsx)(e.mi,{mathvariant:"normal",children:"\u2223"}),(0,n.jsx)(e.mi,{children:"y"}),(0,n.jsx)(e.mo,{fence:"true",children:")"})]}),(0,n.jsx)(e.mo,{children:"="}),(0,n.jsx)(e.mi,{children:"p"}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mo,{fence:"true",children:"("}),(0,n.jsx)(e.mi,{children:"y"}),(0,n.jsx)(e.mo,{fence:"true",children:")"})]}),(0,n.jsx)(e.mi,{children:"p"}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mo,{fence:"true",children:"("}),(0,n.jsxs)(e.msup,{children:[(0,n.jsx)(e.mi,{children:"x"}),(0,n.jsx)(e.mn,{children:"1"})]}),(0,n.jsx)(e.mi,{mathvariant:"normal",children:"\u2223"}),(0,n.jsx)(e.mi,{children:"y"}),(0,n.jsx)(e.mo,{fence:"true",children:")"})]}),(0,n.jsx)(e.mi,{children:"p"}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mo,{fence:"true",children:"("}),(0,n.jsxs)(e.msup,{children:[(0,n.jsx)(e.mi,{children:"x"}),(0,n.jsx)(e.mn,{children:"2"})]}),(0,n.jsx)(e.mi,{mathvariant:"normal",children:"\u2223"}),(0,n.jsx)(e.mi,{children:"y"}),(0,n.jsx)(e.mo,{fence:"true",children:")"})]}),(0,n.jsx)(e.mi,{mathvariant:"normal",children:"."}),(0,n.jsx)(e.mi,{mathvariant:"normal",children:"."}),(0,n.jsx)(e.mi,{mathvariant:"normal",children:"."}),(0,n.jsx)(e.mi,{children:"p"}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mo,{fence:"true",children:"("}),(0,n.jsxs)(e.msup,{children:[(0,n.jsx)(e.mi,{children:"x"}),(0,n.jsx)(e.mi,{children:"D"})]}),(0,n.jsx)(e.mi,{mathvariant:"normal",children:"\u2223"}),(0,n.jsx)(e.mi,{children:"y"}),(0,n.jsx)(e.mo,{fence:"true",children:")"})]}),(0,n.jsx)(e.mo,{separator:"true",children:","})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"p\\left(y|\\mathbf{x}\\right)=\\frac{p\\left(y\\right)p\\left(\\mathbf{x}|y\\right)}{p\\left(\\mathbf{x}\\right)}\\propto p\\left(y\\right)p\\left(\\mathbf{x}|y\\right)=p\\left(y\\right)p\\left(x^{1}|y\\right)p\\left(x^{2}|y\\right)...p\\left(x^{D}|y\\right),"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"p"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsxs)(e.span,{className:"minner",children:[(0,n.jsx)(e.span,{className:"mopen delimcenter",style:{top:"0em"},children:"("}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,n.jsx)(e.span,{className:"mord",children:"\u2223"}),(0,n.jsx)(e.span,{className:"mord mathbf",children:"x"}),(0,n.jsx)(e.span,{className:"mclose delimcenter",style:{top:"0em"},children:")"})]}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:"="}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"2.363em",verticalAlign:"-0.936em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mopen nulldelimiter"}),(0,n.jsx)(e.span,{className:"mfrac",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsxs)(e.span,{className:"vlist",style:{height:"1.427em"},children:[(0,n.jsxs)(e.span,{style:{top:"-2.314em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"p"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsxs)(e.span,{className:"minner",children:[(0,n.jsx)(e.span,{className:"mopen delimcenter",style:{top:"0em"},children:"("}),(0,n.jsx)(e.span,{className:"mord mathbf",children:"x"}),(0,n.jsx)(e.span,{className:"mclose delimcenter",style:{top:"0em"},children:")"})]})]})]}),(0,n.jsxs)(e.span,{style:{top:"-3.23em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{className:"frac-line",style:{borderBottomWidth:"0.04em"}})]}),(0,n.jsxs)(e.span,{style:{top:"-3.677em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"p"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsxs)(e.span,{className:"minner",children:[(0,n.jsx)(e.span,{className:"mopen delimcenter",style:{top:"0em"},children:"("}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,n.jsx)(e.span,{className:"mclose delimcenter",style:{top:"0em"},children:")"})]}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"p"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsxs)(e.span,{className:"minner",children:[(0,n.jsx)(e.span,{className:"mopen delimcenter",style:{top:"0em"},children:"("}),(0,n.jsx)(e.span,{className:"mord mathbf",children:"x"}),(0,n.jsx)(e.span,{className:"mord",children:"\u2223"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,n.jsx)(e.span,{className:"mclose delimcenter",style:{top:"0em"},children:")"})]})]})]})]}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.936em"},children:(0,n.jsx)(e.span,{})})})]})}),(0,n.jsx)(e.span,{className:"mclose nulldelimiter"})]}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:"\u221d"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"p"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsxs)(e.span,{className:"minner",children:[(0,n.jsx)(e.span,{className:"mopen delimcenter",style:{top:"0em"},children:"("}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,n.jsx)(e.span,{className:"mclose delimcenter",style:{top:"0em"},children:")"})]}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"p"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsxs)(e.span,{className:"minner",children:[(0,n.jsx)(e.span,{className:"mopen delimcenter",style:{top:"0em"},children:"("}),(0,n.jsx)(e.span,{className:"mord mathbf",children:"x"}),(0,n.jsx)(e.span,{className:"mord",children:"\u2223"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,n.jsx)(e.span,{className:"mclose delimcenter",style:{top:"0em"},children:")"})]}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:"="}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1.2413em",verticalAlign:"-0.35em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"p"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsxs)(e.span,{className:"minner",children:[(0,n.jsx)(e.span,{className:"mopen delimcenter",style:{top:"0em"},children:"("}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,n.jsx)(e.span,{className:"mclose delimcenter",style:{top:"0em"},children:")"})]}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"p"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsxs)(e.span,{className:"minner",children:[(0,n.jsx)(e.span,{className:"mopen delimcenter",style:{top:"0em"},children:(0,n.jsx)(e.span,{className:"delimsizing size1",children:"("})}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsx)(e.span,{className:"vlist-t",children:(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.8641em"},children:(0,n.jsxs)(e.span,{style:{top:"-3.113em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"1"})})})]})})})})})]}),(0,n.jsx)(e.span,{className:"mord",children:"\u2223"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,n.jsx)(e.span,{className:"mclose delimcenter",style:{top:"0em"},children:(0,n.jsx)(e.span,{className:"delimsizing size1",children:")"})})]}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"p"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsxs)(e.span,{className:"minner",children:[(0,n.jsx)(e.span,{className:"mopen delimcenter",style:{top:"0em"},children:(0,n.jsx)(e.span,{className:"delimsizing size1",children:"("})}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsx)(e.span,{className:"vlist-t",children:(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.8641em"},children:(0,n.jsxs)(e.span,{style:{top:"-3.113em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"2"})})})]})})})})})]}),(0,n.jsx)(e.span,{className:"mord",children:"\u2223"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,n.jsx)(e.span,{className:"mclose delimcenter",style:{top:"0em"},children:(0,n.jsx)(e.span,{className:"delimsizing size1",children:")"})})]}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(e.span,{className:"mord",children:"..."}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"p"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsxs)(e.span,{className:"minner",children:[(0,n.jsx)(e.span,{className:"mopen delimcenter",style:{top:"0em"},children:(0,n.jsx)(e.span,{className:"delimsizing size1",children:"("})}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsx)(e.span,{className:"vlist-t",children:(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.8913em"},children:(0,n.jsxs)(e.span,{style:{top:"-3.113em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.02778em"},children:"D"})})})]})})})})})]}),(0,n.jsx)(e.span,{className:"mord",children:"\u2223"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,n.jsx)(e.span,{className:"mclose delimcenter",style:{top:"0em"},children:(0,n.jsx)(e.span,{className:"delimsizing size1",children:")"})})]}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(e.span,{className:"mpunct",children:","})]})]})]})}),"\n",(0,n.jsxs)(e.p,{children:["\u0433\u0434\u0435 ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsx)(e.mo,{children:"\u221d"})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\propto"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,n.jsx)(e.span,{className:"mrel",children:"\u221d"})]})})]}),' \u043e\u0431\u043e\u0437\u043d\u0430\u0447\u0430\u0435\u0442 "\u043f\u0440\u043e\u043f\u043e\u0440\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e \u0441 \u0442\u043e\u0447\u043d\u043e\u0441\u0442\u044c\u044e \u0434\u043e \u043e\u0431\u0449\u0435\u0439 \u043a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u044b", \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u043d\u0435 \u0432\u043b\u0438\u044f\u0435\u0442 \u043d\u0430 \u0438\u0442\u043e\u0433\u043e\u0432\u044b\u0439 \u043f\u0440\u043e\u0433\u043d\u043e\u0437. \u0415\u0441\u043b\u0438 \u043e\u0431\u0449\u0435\u0435 \u0447\u0438\u0441\u043b\u043e \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432 D \u043d\u0435\u0432\u0435\u043b\u0438\u043a\u043e, \u0442\u043e \u043c\u0435\u0442\u043e\u0434 \u043d\u0430\u0438\u0432\u043d\u043e\u0433\u043e \u0411\u0430\u0439\u0435\u0441\u0430 \u0438\u043d\u0442\u0435\u0440\u043f\u0440\u0435\u0442\u0438\u0440\u0443\u0435\u043c, \u043f\u043e\u0441\u043a\u043e\u043b\u044c\u043a\u0443 \u0432\u043a\u043b\u0430\u0434 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u0430 \u0432\u043d\u043e\u0441\u0438\u0442\u0441\u044f \u043c\u0443\u043b\u044c\u0442\u0438\u043f\u043b\u0438\u043a\u0430\u0442\u0438\u0432\u043d\u043e, \u0438 \u0434\u043b\u044f \u0430\u043d\u043e\u043c\u0430\u043b\u044c\u043d\u043e \u0432\u044b\u0441\u043e\u043a\u043e\u0439 \u0438 \u043d\u0438\u0437\u043a\u043e\u0439 \u0432\u0435\u0440\u043e\u044f\u0442\u043d\u043e\u0441\u0442\u0438 \u043c\u043e\u0436\u043d\u043e \u043e\u0442\u0441\u043b\u0435\u0434\u0438\u0442\u044c, \u0438\u0437-\u0437\u0430 \u043a\u0430\u043a\u0438\u0445 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432 \u0438 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0445 \u0441\u043b\u0430\u0433\u0430\u0435\u043c\u044b\u0445 ',(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"p"}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mo,{fence:"true",children:"("}),(0,n.jsxs)(e.msup,{children:[(0,n.jsx)(e.mi,{children:"x"}),(0,n.jsx)(e.mi,{children:"i"})]}),(0,n.jsx)(e.mi,{mathvariant:"normal",children:"\u2223"}),(0,n.jsx)(e.mi,{children:"y"}),(0,n.jsx)(e.mo,{fence:"true",children:")"})]})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"p\\left(x^{i}|y\\right)"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1.2em",verticalAlign:"-0.35em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"p"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsxs)(e.span,{className:"minner",children:[(0,n.jsx)(e.span,{className:"mopen delimcenter",style:{top:"0em"},children:(0,n.jsx)(e.span,{className:"delimsizing size1",children:"("})}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsx)(e.span,{className:"vlist-t",children:(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.8247em"},children:(0,n.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"i"})})})]})})})})})]}),(0,n.jsx)(e.span,{className:"mord",children:"\u2223"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,n.jsx)(e.span,{className:"mclose delimcenter",style:{top:"0em"},children:(0,n.jsx)(e.span,{className:"delimsizing size1",children:")"})})]})]})})]})," \u043c\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u043b\u0438 \u0438\u043c\u0435\u043d\u043d\u043e \u0442\u0430\u043a\u043e\u0439 \u043f\u0440\u043e\u0433\u043d\u043e\u0437."]})]})}function d(s={}){const{wrapper:e}={...(0,m.R)(),...s.components};return e?(0,n.jsx)(e,{...s,children:(0,n.jsx)(h,{...s})}):h(s)}},28453:(s,e,a)=>{a.d(e,{R:()=>i,x:()=>r});var n=a(96540);const m={},l=n.createContext(m);function i(s){const e=n.useContext(l);return n.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function r(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(m):s.components||m:i(s.components),n.createElement(l.Provider,{value:e},s.children)}}}]);