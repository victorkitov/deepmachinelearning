"use strict";(self.webpackChunksite_new=self.webpackChunksite_new||[]).push([[379],{35745:(s,a,e)=>{e.r(a),e.d(a,{assets:()=>t,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>n,toc:()=>r});const n=JSON.parse('{"id":"Machine-learning/Base-concepts/Loss-convexity","title":"\u0412\u044b\u043f\u0443\u043a\u043b\u043e\u0441\u0442\u044c \u043f\u043e\u0442\u0435\u0440\u044c","description":"\u0423\u0434\u043e\u0431\u0441\u0442\u0432\u043e \u0432\u044b\u043f\u0443\u043a\u043b\u044b\u0445 \u0444\u0443\u043d\u043a\u0446\u0438\u0439 \u0434\u043b\u044f \u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u0438 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432 \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c\u043e\u0432 \u043c\u0430\u0448\u0438\u043d\u043d\u043e\u0433\u043e \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f. \u041e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u0432\u044b\u043f\u0443\u043a\u043b\u043e\u0439 \u0444\u0443\u043d\u043a\u0446\u0438\u0438, \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u0432\u044b\u043f\u0443\u043a\u043b\u044b\u0445 \u0444\u0443\u043d\u043a\u0446\u0438\u0439.","source":"@site/docs/Machine-learning/03-Base-concepts/03-Loss-convexity.md","sourceDirName":"Machine-learning/03-Base-concepts","slug":"/Machine-learning/Base-concepts/Loss-convexity","permalink":"/docs/Machine-learning/Base-concepts/Loss-convexity","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"description":"\u0423\u0434\u043e\u0431\u0441\u0442\u0432\u043e \u0432\u044b\u043f\u0443\u043a\u043b\u044b\u0445 \u0444\u0443\u043d\u043a\u0446\u0438\u0439 \u0434\u043b\u044f \u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u0438 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432 \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c\u043e\u0432 \u043c\u0430\u0448\u0438\u043d\u043d\u043e\u0433\u043e \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f. \u041e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u0432\u044b\u043f\u0443\u043a\u043b\u043e\u0439 \u0444\u0443\u043d\u043a\u0446\u0438\u0438, \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u0432\u044b\u043f\u0443\u043a\u043b\u044b\u0445 \u0444\u0443\u043d\u043a\u0446\u0438\u0439."},"sidebar":"Machine-learning","previous":{"title":"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432 \u043c\u043e\u0434\u0435\u043b\u0438","permalink":"/docs/Machine-learning/Base-concepts/Function-selection"},"next":{"title":"\u0420\u0435\u0433\u0443\u043b\u044f\u0440\u0438\u0437\u0430\u0446\u0438\u044f \u043c\u043e\u0434\u0435\u043b\u0438","permalink":"/docs/Machine-learning/Base-concepts/Regularization"}}');var l=e(74848),m=e(28453);const i={description:"\u0423\u0434\u043e\u0431\u0441\u0442\u0432\u043e \u0432\u044b\u043f\u0443\u043a\u043b\u044b\u0445 \u0444\u0443\u043d\u043a\u0446\u0438\u0439 \u0434\u043b\u044f \u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u0438 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432 \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c\u043e\u0432 \u043c\u0430\u0448\u0438\u043d\u043d\u043e\u0433\u043e \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f. \u041e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u0432\u044b\u043f\u0443\u043a\u043b\u043e\u0439 \u0444\u0443\u043d\u043a\u0446\u0438\u0438, \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u0432\u044b\u043f\u0443\u043a\u043b\u044b\u0445 \u0444\u0443\u043d\u043a\u0446\u0438\u0439."},c="\u0412\u044b\u043f\u0443\u043a\u043b\u043e\u0441\u0442\u044c \u043f\u043e\u0442\u0435\u0440\u044c",t={},r=[];function h(s){const a={admonition:"admonition",annotation:"annotation",h1:"h1",header:"header",img:"img",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mover:"mover",mrow:"mrow",mspace:"mspace",msub:"msub",msup:"msup",mtext:"mtext",p:"p",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,m.R)(),...s.components},{Details:n}=a;return n||function(s,a){throw new Error("Expected "+(a?"component":"object")+" `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.header,{children:(0,l.jsx)(a.h1,{id:"\u0432\u044b\u043f\u0443\u043a\u043b\u043e\u0441\u0442\u044c-\u043f\u043e\u0442\u0435\u0440\u044c",children:"\u0412\u044b\u043f\u0443\u043a\u043b\u043e\u0441\u0442\u044c \u043f\u043e\u0442\u0435\u0440\u044c"})}),"\n",(0,l.jsxs)(a.p,{children:["\u0412 \u043c\u0430\u0448\u0438\u043d\u043d\u043e\u043c \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0438 \u043f\u0440\u0438\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442\u0441\u044f \u0432\u044b\u0431\u043e\u0440 ",(0,l.jsx)(a.strong,{children:"\u0432\u044b\u043f\u0443\u043a\u043b\u044b\u0445"})," (convex) \u0444\u0443\u043d\u043a\u0446\u0438\u0439 \u043f\u043e\u0442\u0435\u0440\u044c \u043e\u0442 \u0432\u0435\u0441\u043e\u0432, \u0442.\u0435. \u0442\u0430\u043a\u0438\u0445 \u0444\u0443\u043d\u043a\u0446\u0438\u0439, \u0447\u0442\u043e"]}),"\n",(0,l.jsx)(a.span,{className:"katex-display",children:(0,l.jsxs)(a.span,{className:"katex",children:[(0,l.jsx)(a.span,{className:"katex-mathml",children:(0,l.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,l.jsxs)(a.semantics,{children:[(0,l.jsxs)(a.mrow,{children:[(0,l.jsx)(a.mi,{children:"L"}),(0,l.jsx)(a.mo,{stretchy:"false",children:"("}),(0,l.jsx)(a.mi,{children:"a"}),(0,l.jsx)(a.mo,{children:"\u2217"}),(0,l.jsx)(a.mi,{mathvariant:"bold",children:"w"}),(0,l.jsx)(a.mo,{children:"+"}),(0,l.jsx)(a.mo,{stretchy:"false",children:"("}),(0,l.jsx)(a.mn,{children:"1"}),(0,l.jsx)(a.mo,{children:"\u2212"}),(0,l.jsx)(a.mi,{children:"a"}),(0,l.jsx)(a.mo,{stretchy:"false",children:")"}),(0,l.jsxs)(a.msup,{children:[(0,l.jsx)(a.mi,{mathvariant:"bold",children:"w"}),(0,l.jsx)(a.mo,{mathvariant:"normal",lspace:"0em",rspace:"0em",children:"\u2032"})]}),(0,l.jsx)(a.mo,{stretchy:"false",children:")"}),(0,l.jsx)(a.mo,{children:"\u2264"}),(0,l.jsx)(a.mi,{children:"a"}),(0,l.jsx)(a.mi,{children:"L"}),(0,l.jsx)(a.mo,{stretchy:"false",children:"("}),(0,l.jsx)(a.mi,{mathvariant:"bold",children:"w"}),(0,l.jsx)(a.mo,{stretchy:"false",children:")"}),(0,l.jsx)(a.mo,{children:"+"}),(0,l.jsx)(a.mo,{stretchy:"false",children:"("}),(0,l.jsx)(a.mn,{children:"1"}),(0,l.jsx)(a.mo,{children:"\u2212"}),(0,l.jsx)(a.mi,{children:"a"}),(0,l.jsx)(a.mo,{stretchy:"false",children:")"}),(0,l.jsx)(a.mi,{children:"L"}),(0,l.jsx)(a.mo,{stretchy:"false",children:"("}),(0,l.jsxs)(a.msup,{children:[(0,l.jsx)(a.mi,{mathvariant:"bold",children:"w"}),(0,l.jsx)(a.mo,{mathvariant:"normal",lspace:"0em",rspace:"0em",children:"\u2032"})]}),(0,l.jsx)(a.mo,{stretchy:"false",children:")"}),(0,l.jsx)(a.mspace,{width:"1em"}),(0,l.jsx)(a.mi,{mathvariant:"normal",children:"\u2200"}),(0,l.jsx)(a.mi,{mathvariant:"bold",children:"w"}),(0,l.jsx)(a.mo,{separator:"true",children:","}),(0,l.jsxs)(a.msup,{children:[(0,l.jsx)(a.mi,{mathvariant:"bold",children:"w"}),(0,l.jsx)(a.mo,{mathvariant:"normal",lspace:"0em",rspace:"0em",children:"\u2032"})]}),(0,l.jsx)(a.mtext,{children:"\xa0\u0438\xa0"}),(0,l.jsx)(a.mi,{children:"a"}),(0,l.jsx)(a.mo,{children:"\u2208"}),(0,l.jsx)(a.mo,{stretchy:"false",children:"["}),(0,l.jsx)(a.mn,{children:"0"}),(0,l.jsx)(a.mo,{separator:"true",children:","}),(0,l.jsx)(a.mn,{children:"1"}),(0,l.jsx)(a.mo,{stretchy:"false",children:"]"}),(0,l.jsx)(a.mi,{mathvariant:"normal",children:"."})]}),(0,l.jsx)(a.annotation,{encoding:"application/x-tex",children:"L(a*\\mathbf{w}+(1-a)\\mathbf{w}')\\le aL(\\mathbf{w})+(1-a)L(\\mathbf{w}')\\quad \\forall \\mathbf{w},\\mathbf{w}'\\text{ \u0438 } a\\in[0,1]."})]})})}),(0,l.jsxs)(a.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(a.span,{className:"base",children:[(0,l.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"L"}),(0,l.jsx)(a.span,{className:"mopen",children:"("}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"a"}),(0,l.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(a.span,{className:"mbin",children:"\u2217"}),(0,l.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(a.span,{className:"base",children:[(0,l.jsx)(a.span,{className:"strut",style:{height:"0.6667em",verticalAlign:"-0.0833em"}}),(0,l.jsx)(a.span,{className:"mord mathbf",style:{marginRight:"0.01597em"},children:"w"}),(0,l.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(a.span,{className:"mbin",children:"+"}),(0,l.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(a.span,{className:"base",children:[(0,l.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(a.span,{className:"mopen",children:"("}),(0,l.jsx)(a.span,{className:"mord",children:"1"}),(0,l.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(a.span,{className:"mbin",children:"\u2212"}),(0,l.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(a.span,{className:"base",children:[(0,l.jsx)(a.span,{className:"strut",style:{height:"1.0519em",verticalAlign:"-0.25em"}}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"a"}),(0,l.jsx)(a.span,{className:"mclose",children:")"}),(0,l.jsxs)(a.span,{className:"mord",children:[(0,l.jsx)(a.span,{className:"mord mathbf",style:{marginRight:"0.01597em"},children:"w"}),(0,l.jsx)(a.span,{className:"msupsub",children:(0,l.jsx)(a.span,{className:"vlist-t",children:(0,l.jsx)(a.span,{className:"vlist-r",children:(0,l.jsx)(a.span,{className:"vlist",style:{height:"0.8019em"},children:(0,l.jsxs)(a.span,{style:{top:"-3.113em",marginRight:"0.05em"},children:[(0,l.jsx)(a.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(a.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(a.span,{className:"mord mtight",children:(0,l.jsx)(a.span,{className:"mord mtight",children:"\u2032"})})})]})})})})})]}),(0,l.jsx)(a.span,{className:"mclose",children:")"}),(0,l.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(a.span,{className:"mrel",children:"\u2264"}),(0,l.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(a.span,{className:"base",children:[(0,l.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"a"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"L"}),(0,l.jsx)(a.span,{className:"mopen",children:"("}),(0,l.jsx)(a.span,{className:"mord mathbf",style:{marginRight:"0.01597em"},children:"w"}),(0,l.jsx)(a.span,{className:"mclose",children:")"}),(0,l.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(a.span,{className:"mbin",children:"+"}),(0,l.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(a.span,{className:"base",children:[(0,l.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(a.span,{className:"mopen",children:"("}),(0,l.jsx)(a.span,{className:"mord",children:"1"}),(0,l.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(a.span,{className:"mbin",children:"\u2212"}),(0,l.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(a.span,{className:"base",children:[(0,l.jsx)(a.span,{className:"strut",style:{height:"1.0519em",verticalAlign:"-0.25em"}}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"a"}),(0,l.jsx)(a.span,{className:"mclose",children:")"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"L"}),(0,l.jsx)(a.span,{className:"mopen",children:"("}),(0,l.jsxs)(a.span,{className:"mord",children:[(0,l.jsx)(a.span,{className:"mord mathbf",style:{marginRight:"0.01597em"},children:"w"}),(0,l.jsx)(a.span,{className:"msupsub",children:(0,l.jsx)(a.span,{className:"vlist-t",children:(0,l.jsx)(a.span,{className:"vlist-r",children:(0,l.jsx)(a.span,{className:"vlist",style:{height:"0.8019em"},children:(0,l.jsxs)(a.span,{style:{top:"-3.113em",marginRight:"0.05em"},children:[(0,l.jsx)(a.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(a.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(a.span,{className:"mord mtight",children:(0,l.jsx)(a.span,{className:"mord mtight",children:"\u2032"})})})]})})})})})]}),(0,l.jsx)(a.span,{className:"mclose",children:")"}),(0,l.jsx)(a.span,{className:"mspace",style:{marginRight:"1em"}}),(0,l.jsx)(a.span,{className:"mord",children:"\u2200"}),(0,l.jsx)(a.span,{className:"mord mathbf",style:{marginRight:"0.01597em"},children:"w"}),(0,l.jsx)(a.span,{className:"mpunct",children:","}),(0,l.jsx)(a.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,l.jsxs)(a.span,{className:"mord",children:[(0,l.jsx)(a.span,{className:"mord mathbf",style:{marginRight:"0.01597em"},children:"w"}),(0,l.jsx)(a.span,{className:"msupsub",children:(0,l.jsx)(a.span,{className:"vlist-t",children:(0,l.jsx)(a.span,{className:"vlist-r",children:(0,l.jsx)(a.span,{className:"vlist",style:{height:"0.8019em"},children:(0,l.jsxs)(a.span,{style:{top:"-3.113em",marginRight:"0.05em"},children:[(0,l.jsx)(a.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(a.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(a.span,{className:"mord mtight",children:(0,l.jsx)(a.span,{className:"mord mtight",children:"\u2032"})})})]})})})})})]}),(0,l.jsxs)(a.span,{className:"mord text",children:[(0,l.jsx)(a.span,{className:"mord",children:"\xa0"}),(0,l.jsx)(a.span,{className:"mord cyrillic_fallback",children:"\u0438"}),(0,l.jsx)(a.span,{className:"mord",children:"\xa0"})]}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"a"}),(0,l.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(a.span,{className:"mrel",children:"\u2208"}),(0,l.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(a.span,{className:"base",children:[(0,l.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(a.span,{className:"mopen",children:"["}),(0,l.jsx)(a.span,{className:"mord",children:"0"}),(0,l.jsx)(a.span,{className:"mpunct",children:","}),(0,l.jsx)(a.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,l.jsx)(a.span,{className:"mord",children:"1"}),(0,l.jsx)(a.span,{className:"mclose",children:"]"}),(0,l.jsx)(a.span,{className:"mord",children:"."})]})]})]})}),"\n",(0,l.jsxs)(a.p,{children:["\u041d\u0435\u0440\u0430\u0432\u0435\u043d\u0441\u0442\u0432\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043e \u0434\u043b\u044f \u043b\u044e\u0431\u044b\u0445 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u0432 ",(0,l.jsxs)(a.span,{className:"katex",children:[(0,l.jsx)(a.span,{className:"katex-mathml",children:(0,l.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(a.semantics,{children:[(0,l.jsxs)(a.mrow,{children:[(0,l.jsx)(a.mi,{mathvariant:"bold",children:"w"}),(0,l.jsx)(a.mo,{separator:"true",children:","}),(0,l.jsxs)(a.msup,{children:[(0,l.jsx)(a.mi,{mathvariant:"bold",children:"w"}),(0,l.jsx)(a.mo,{mathvariant:"normal",lspace:"0em",rspace:"0em",children:"\u2032"})]})]}),(0,l.jsx)(a.annotation,{encoding:"application/x-tex",children:"\\mathbf{w},\\mathbf{w}'"})]})})}),(0,l.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(a.span,{className:"base",children:[(0,l.jsx)(a.span,{className:"strut",style:{height:"0.9463em",verticalAlign:"-0.1944em"}}),(0,l.jsx)(a.span,{className:"mord mathbf",style:{marginRight:"0.01597em"},children:"w"}),(0,l.jsx)(a.span,{className:"mpunct",children:","}),(0,l.jsx)(a.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,l.jsxs)(a.span,{className:"mord",children:[(0,l.jsx)(a.span,{className:"mord mathbf",style:{marginRight:"0.01597em"},children:"w"}),(0,l.jsx)(a.span,{className:"msupsub",children:(0,l.jsx)(a.span,{className:"vlist-t",children:(0,l.jsx)(a.span,{className:"vlist-r",children:(0,l.jsx)(a.span,{className:"vlist",style:{height:"0.7519em"},children:(0,l.jsxs)(a.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,l.jsx)(a.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(a.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(a.span,{className:"mord mtight",children:(0,l.jsx)(a.span,{className:"mord mtight",children:"\u2032"})})})]})})})})})]})]})})]})," \u0438\u0437 \u043e\u0431\u043b\u0430\u0441\u0442\u0438 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u0438, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0442\u0430\u043a\u0436\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0432\u044b\u043f\u0443\u043a\u043b\u044b\u043c (\u0442.\u0435. \u0435\u0441\u043b\u0438 \u0434\u0432\u0435 \u0442\u043e\u0447\u043a\u0438 \u043f\u0440\u0438\u043d\u0430\u0434\u043b\u0435\u0436\u0430\u0442 \u043e\u0431\u043b\u0430\u0441\u0442\u0438 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044f, \u0442\u043e \u0438 \u043b\u044e\u0431\u0430\u044f \u043f\u0440\u043e\u043c\u0435\u0436\u0443\u0442\u043e\u0447\u043d\u0430\u044f \u0442\u043e\u0447\u043a\u0430 \u043d\u0430 \u043e\u0442\u0440\u0435\u0437\u043a\u0435, \u0438\u0445 \u0441\u043e\u0435\u0434\u0438\u043d\u044f\u044e\u0449\u0435\u043c \u0442\u043e\u0436\u0435 \u043f\u0440\u0438\u043d\u0430\u0434\u043b\u0435\u0436\u0438\u0442 \u043e\u0431\u043b\u0430\u0441\u0442\u0438 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u0438). \u0413\u0435\u043e\u043c\u0435\u0442\u0440\u0438\u0447\u0435\u0441\u043a\u0438 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u0432\u044b\u043f\u0443\u043a\u043b\u043e\u0439 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u043e\u0437\u043d\u0430\u0447\u0430\u0435\u0442, \u0447\u0442\u043e \u043e\u0442\u0440\u0435\u0437\u043e\u043a, \u0441\u043e\u0435\u0434\u0438\u043d\u044f\u044e\u0449\u0438\u0439 \u043b\u044e\u0431\u044b\u0435 \u0434\u0432\u0435 \u0442\u043e\u0447\u043a\u0438 \u043d\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u0438, \u043d\u0438\u0433\u0434\u0435 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u043b\u0435\u0436\u0430\u0442\u044c \u0432\u044b\u0448\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u0444\u0443\u043d\u043a\u0446\u0438\u0438:"]}),"\n",(0,l.jsx)(a.p,{children:(0,l.jsx)(a.img,{alt:"convex-loss.png",src:e(70326).A+"",width:"666",height:"348"})}),"\n",(0,l.jsxs)(a.p,{children:["\u0421\u0442\u043e\u0438\u0442 \u043e\u0442\u043c\u0435\u0442\u0438\u0442\u044c, \u0447\u0442\u043e \u0435\u0441\u043b\u0438 \u043f\u043e\u0442\u0435\u0440\u0438 \u043d\u0430 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e\u043c \u043e\u0431\u044a\u0435\u043a\u0442\u0435 ",(0,l.jsxs)(a.span,{className:"katex",children:[(0,l.jsx)(a.span,{className:"katex-mathml",children:(0,l.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(a.semantics,{children:[(0,l.jsxs)(a.mrow,{children:[(0,l.jsx)(a.mi,{mathvariant:"script",children:"L"}),(0,l.jsx)(a.mo,{stretchy:"false",children:"("}),(0,l.jsxs)(a.msub,{children:[(0,l.jsx)(a.mi,{children:"f"}),(0,l.jsx)(a.mi,{mathvariant:"bold",children:"w"})]}),(0,l.jsx)(a.mo,{stretchy:"false",children:"("}),(0,l.jsxs)(a.msub,{children:[(0,l.jsx)(a.mi,{mathvariant:"bold",children:"x"}),(0,l.jsx)(a.mi,{children:"n"})]}),(0,l.jsx)(a.mo,{stretchy:"false",children:")"}),(0,l.jsx)(a.mo,{separator:"true",children:","}),(0,l.jsxs)(a.msub,{children:[(0,l.jsx)(a.mi,{children:"y"}),(0,l.jsx)(a.mi,{children:"n"})]}),(0,l.jsx)(a.mo,{stretchy:"false",children:")"})]}),(0,l.jsx)(a.annotation,{encoding:"application/x-tex",children:"\\mathcal{L}(f_{\\mathbf{w}}(\\mathbf{x}_{n}),y_{n})"})]})})}),(0,l.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(a.span,{className:"base",children:[(0,l.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(a.span,{className:"mord mathcal",children:"L"}),(0,l.jsx)(a.span,{className:"mopen",children:"("}),(0,l.jsxs)(a.span,{className:"mord",children:[(0,l.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,l.jsx)(a.span,{className:"msupsub",children:(0,l.jsxs)(a.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(a.span,{className:"vlist-r",children:[(0,l.jsx)(a.span,{className:"vlist",style:{height:"0.1611em"},children:(0,l.jsxs)(a.span,{style:{top:"-2.55em",marginLeft:"-0.1076em",marginRight:"0.05em"},children:[(0,l.jsx)(a.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(a.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(a.span,{className:"mord mtight",children:(0,l.jsx)(a.span,{className:"mord mathbf mtight",style:{marginRight:"0.01597em"},children:"w"})})})]})}),(0,l.jsx)(a.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(a.span,{className:"vlist-r",children:(0,l.jsx)(a.span,{className:"vlist",style:{height:"0.15em"},children:(0,l.jsx)(a.span,{})})})]})})]}),(0,l.jsx)(a.span,{className:"mopen",children:"("}),(0,l.jsxs)(a.span,{className:"mord",children:[(0,l.jsx)(a.span,{className:"mord mathbf",children:"x"}),(0,l.jsx)(a.span,{className:"msupsub",children:(0,l.jsxs)(a.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(a.span,{className:"vlist-r",children:[(0,l.jsx)(a.span,{className:"vlist",style:{height:"0.1514em"},children:(0,l.jsxs)(a.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,l.jsx)(a.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(a.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(a.span,{className:"mord mtight",children:(0,l.jsx)(a.span,{className:"mord mathnormal mtight",children:"n"})})})]})}),(0,l.jsx)(a.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(a.span,{className:"vlist-r",children:(0,l.jsx)(a.span,{className:"vlist",style:{height:"0.15em"},children:(0,l.jsx)(a.span,{})})})]})})]}),(0,l.jsx)(a.span,{className:"mclose",children:")"}),(0,l.jsx)(a.span,{className:"mpunct",children:","}),(0,l.jsx)(a.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,l.jsxs)(a.span,{className:"mord",children:[(0,l.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,l.jsx)(a.span,{className:"msupsub",children:(0,l.jsxs)(a.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(a.span,{className:"vlist-r",children:[(0,l.jsx)(a.span,{className:"vlist",style:{height:"0.1514em"},children:(0,l.jsxs)(a.span,{style:{top:"-2.55em",marginLeft:"-0.0359em",marginRight:"0.05em"},children:[(0,l.jsx)(a.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(a.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(a.span,{className:"mord mtight",children:(0,l.jsx)(a.span,{className:"mord mathnormal mtight",children:"n"})})})]})}),(0,l.jsx)(a.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(a.span,{className:"vlist-r",children:(0,l.jsx)(a.span,{className:"vlist",style:{height:"0.15em"},children:(0,l.jsx)(a.span,{})})})]})})]}),(0,l.jsx)(a.span,{className:"mclose",children:")"})]})})]})," \u0432\u044b\u043f\u0443\u043a\u043b\u044b \u043f\u043e ",(0,l.jsxs)(a.span,{className:"katex",children:[(0,l.jsx)(a.span,{className:"katex-mathml",children:(0,l.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(a.semantics,{children:[(0,l.jsx)(a.mrow,{children:(0,l.jsx)(a.mi,{mathvariant:"bold",children:"w"})}),(0,l.jsx)(a.annotation,{encoding:"application/x-tex",children:"\\mathbf{w}"})]})})}),(0,l.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(a.span,{className:"base",children:[(0,l.jsx)(a.span,{className:"strut",style:{height:"0.4444em"}}),(0,l.jsx)(a.span,{className:"mord mathbf",style:{marginRight:"0.01597em"},children:"w"})]})})]}),", \u0442\u043e \u0438 \u043f\u043e\u0442\u0435\u0440\u0438 \u043f\u043e \u0432\u0441\u0435\u0439 \u043e\u0431\u0443\u0447\u0430\u044e\u0449\u0435\u0439 \u0432\u044b\u0431\u043e\u0440\u043a\u0435 (\u044d\u043c\u043f\u0438\u0440\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0440\u0438\u0441\u043a) \u0431\u0443\u0434\u0443\u0442 \u0432\u044b\u043f\u0443\u043a\u043b\u044b\u043c\u0438, \u0442.\u043a. \u0443\u0441\u0440\u0435\u0434\u043d\u0435\u043d\u0438\u0435 \u0432\u044b\u043f\u0443\u043a\u043b\u044b\u0445 \u0444\u0443\u043d\u043a\u0446\u0438\u0439 \u0432\u0441\u0435\u0433\u0434\u0430 \u0431\u0443\u0434\u0435\u0442 \u0442\u043e\u0436\u0435 \u0432\u044b\u043f\u0443\u043a\u043b\u043e\u0439 \u0444\u0443\u043d\u043a\u0446\u0438\u0435\u0439."]}),"\n",(0,l.jsx)(a.p,{children:"\u0412\u044b\u043f\u0443\u043a\u043b\u044b\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0443\u0434\u043e\u0431\u043d\u044b \u0442\u0435\u043c, \u0447\u0442\u043e"}),"\n",(0,l.jsxs)(a.ul,{children:["\n",(0,l.jsx)(a.li,{children:"\u043b\u044e\u0431\u043e\u0439 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u043c\u0438\u043d\u0438\u043c\u0443\u043c \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u044b\u043c;"}),"\n",(0,l.jsx)(a.li,{children:"\u0440\u0430\u0432\u0435\u043d\u0441\u0442\u0432\u043e \u043d\u0443\u043b\u044e \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u043d\u043e\u0439 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043d\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u043c, \u043d\u043e \u0438 \u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u044b\u043c \u0443\u0441\u043b\u043e\u0432\u0438\u0435\u043c \u043c\u0438\u043d\u0438\u043c\u0443\u043c\u0430."}),"\n"]}),"\n",(0,l.jsxs)(a.p,{children:["\u0422\u0430\u043a\u0438\u043c, \u043e\u0431\u0440\u0430\u0437\u043e\u043c, \u043d\u0430\u0439\u0434\u044f \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",(0,l.jsxs)(a.span,{className:"katex",children:[(0,l.jsx)(a.span,{className:"katex-mathml",children:(0,l.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(a.semantics,{children:[(0,l.jsx)(a.mrow,{children:(0,l.jsxs)(a.mover,{accent:"true",children:[(0,l.jsx)(a.mi,{mathvariant:"bold",children:"w"}),(0,l.jsx)(a.mo,{children:"^"})]})}),(0,l.jsx)(a.annotation,{encoding:"application/x-tex",children:"\\hat{\\mathbf{w}}"})]})})}),(0,l.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(a.span,{className:"base",children:[(0,l.jsx)(a.span,{className:"strut",style:{height:"0.7079em"}}),(0,l.jsx)(a.span,{className:"mord accent",children:(0,l.jsx)(a.span,{className:"vlist-t",children:(0,l.jsx)(a.span,{className:"vlist-r",children:(0,l.jsxs)(a.span,{className:"vlist",style:{height:"0.7079em"},children:[(0,l.jsxs)(a.span,{style:{top:"-3em"},children:[(0,l.jsx)(a.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(a.span,{className:"mord mathbf",style:{marginRight:"0.01597em"},children:"w"})]}),(0,l.jsxs)(a.span,{style:{top:"-3.0134em"},children:[(0,l.jsx)(a.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(a.span,{className:"accent-body",style:{left:"-0.1667em"},children:(0,l.jsx)(a.span,{className:"mord",children:"^"})})]})]})})})})]})})]}),", \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c ",(0,l.jsxs)(a.span,{className:"katex",children:[(0,l.jsx)(a.span,{className:"katex-mathml",children:(0,l.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(a.semantics,{children:[(0,l.jsxs)(a.mrow,{children:[(0,l.jsx)(a.mi,{mathvariant:"normal",children:"\u2207"}),(0,l.jsx)(a.mi,{children:"L"}),(0,l.jsx)(a.mo,{stretchy:"false",children:"("}),(0,l.jsxs)(a.mover,{accent:"true",children:[(0,l.jsx)(a.mi,{mathvariant:"bold",children:"w"}),(0,l.jsx)(a.mo,{children:"^"})]}),(0,l.jsx)(a.mo,{stretchy:"false",children:")"}),(0,l.jsx)(a.mo,{children:"="}),(0,l.jsx)(a.mn,{children:"0"})]}),(0,l.jsx)(a.annotation,{encoding:"application/x-tex",children:"\\nabla L(\\hat{\\mathbf{w}})=0"})]})})}),(0,l.jsxs)(a.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(a.span,{className:"base",children:[(0,l.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(a.span,{className:"mord",children:"\u2207"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"L"}),(0,l.jsx)(a.span,{className:"mopen",children:"("}),(0,l.jsx)(a.span,{className:"mord accent",children:(0,l.jsx)(a.span,{className:"vlist-t",children:(0,l.jsx)(a.span,{className:"vlist-r",children:(0,l.jsxs)(a.span,{className:"vlist",style:{height:"0.7079em"},children:[(0,l.jsxs)(a.span,{style:{top:"-3em"},children:[(0,l.jsx)(a.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(a.span,{className:"mord mathbf",style:{marginRight:"0.01597em"},children:"w"})]}),(0,l.jsxs)(a.span,{style:{top:"-3.0134em"},children:[(0,l.jsx)(a.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(a.span,{className:"accent-body",style:{left:"-0.1667em"},children:(0,l.jsx)(a.span,{className:"mord",children:"^"})})]})]})})})}),(0,l.jsx)(a.span,{className:"mclose",children:")"}),(0,l.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(a.span,{className:"mrel",children:"="}),(0,l.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(a.span,{className:"base",children:[(0,l.jsx)(a.span,{className:"strut",style:{height:"0.6444em"}}),(0,l.jsx)(a.span,{className:"mord",children:"0"})]})]})]})," \u043c\u044b \u0442\u043e\u0447\u043d\u043e \u0437\u043d\u0430\u0435\u043c, \u0447\u0442\u043e \u044d\u0442\u043e \u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u044b\u0439 \u043c\u0438\u043d\u0438\u043c\u0443\u043c."]}),"\n",(0,l.jsx)(a.admonition,{title:"\u0417\u0430\u0434\u0430\u0447\u0430",type:"note",children:(0,l.jsx)(a.p,{children:"\u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0434\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u044d\u0442\u0438 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430. \u0414\u043b\u044f \u0434\u043e\u043a\u0430\u0437\u0430\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u0430 \u0432\u0442\u043e\u0440\u043e\u0433\u043e \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u043f\u0440\u0438\u0433\u043e\u0434\u0438\u0442\u0441\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0434\u0440\u0443\u0433\u043e\u0433\u043e \u043a\u0440\u0438\u0442\u0435\u0440\u0438\u044f \u0432\u044b\u043f\u0443\u043a\u043b\u043e\u0439 \u0444\u0443\u043d\u043a\u0446\u0438\u0438, \u0447\u0442\u043e \u043e\u043d\u0430 \u0432\u0441\u0435\u0433\u0434\u0430 \u043b\u0435\u0436\u0438\u0442 \u043d\u0435 \u043d\u0438\u0436\u0435 \u043a\u0430\u0441\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0439, \u043f\u0440\u043e\u0432\u0435\u0434\u0451\u043d\u043d\u043e\u0439 \u0432 \u043b\u044e\u0431\u043e\u0439 \u0442\u043e\u0447\u043a\u0435."})}),"\n",(0,l.jsxs)(n,{children:[(0,l.jsx)("summary",{children:"\u041c\u043e\u0436\u0435\u0442 \u043b\u0438 \u0443 \u0432\u044b\u043f\u0443\u043a\u043b\u043e\u0439 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u043d\u0435 \u0431\u044b\u0442\u044c \u043c\u0438\u043d\u0438\u043c\u0443\u043c\u0430?"}),(0,l.jsx)("p",{children:(0,l.jsxs)(a.p,{children:["\u0414\u0430, \u0440\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u044e ",(0,l.jsxs)(a.span,{className:"katex",children:[(0,l.jsx)(a.span,{className:"katex-mathml",children:(0,l.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(a.semantics,{children:[(0,l.jsxs)(a.mrow,{children:[(0,l.jsx)(a.mi,{children:"y"}),(0,l.jsx)(a.mo,{children:"="}),(0,l.jsx)(a.mn,{children:"1"}),(0,l.jsx)(a.mi,{mathvariant:"normal",children:"/"}),(0,l.jsx)(a.mi,{children:"x"})]}),(0,l.jsx)(a.annotation,{encoding:"application/x-tex",children:"y=1/x"})]})})}),(0,l.jsxs)(a.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(a.span,{className:"base",children:[(0,l.jsx)(a.span,{className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,l.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,l.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(a.span,{className:"mrel",children:"="}),(0,l.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(a.span,{className:"base",children:[(0,l.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(a.span,{className:"mord",children:"1/"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"x"})]})]})]}),"."]})})]}),"\n",(0,l.jsxs)(n,{children:[(0,l.jsx)("summary",{children:"\u041c\u043e\u0436\u0435\u0442 \u043b\u0438 \u0443 \u0432\u044b\u043f\u0443\u043a\u043b\u043e\u0439 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0431\u044b\u0442\u044c \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043c\u0438\u043d\u0438\u043c\u0443\u043c\u043e\u0432?"}),(0,l.jsx)("p",{children:(0,l.jsxs)(a.p,{children:["\u0414\u0430, \u0440\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u044e ",(0,l.jsxs)(a.span,{className:"katex",children:[(0,l.jsx)(a.span,{className:"katex-mathml",children:(0,l.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(a.semantics,{children:[(0,l.jsxs)(a.mrow,{children:[(0,l.jsx)(a.mi,{children:"y"}),(0,l.jsx)(a.mo,{children:"="}),(0,l.jsx)(a.mi,{children:"max"}),(0,l.jsx)(a.mo,{children:"\u2061"}),(0,l.jsx)(a.mo,{stretchy:"false",children:"{"}),(0,l.jsx)(a.mn,{children:"0"}),(0,l.jsx)(a.mo,{separator:"true",children:","}),(0,l.jsx)(a.mi,{mathvariant:"normal",children:"\u2223"}),(0,l.jsx)(a.mi,{children:"x"}),(0,l.jsx)(a.mi,{mathvariant:"normal",children:"\u2223"}),(0,l.jsx)(a.mo,{children:"\u2212"}),(0,l.jsx)(a.mn,{children:"1"}),(0,l.jsx)(a.mo,{stretchy:"false",children:"}"})]}),(0,l.jsx)(a.annotation,{encoding:"application/x-tex",children:"y=\\max\\{0,\\vert x \\vert-1\\}"})]})})}),(0,l.jsxs)(a.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(a.span,{className:"base",children:[(0,l.jsx)(a.span,{className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,l.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,l.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(a.span,{className:"mrel",children:"="}),(0,l.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(a.span,{className:"base",children:[(0,l.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(a.span,{className:"mop",children:"max"}),(0,l.jsx)(a.span,{className:"mopen",children:"{"}),(0,l.jsx)(a.span,{className:"mord",children:"0"}),(0,l.jsx)(a.span,{className:"mpunct",children:","}),(0,l.jsx)(a.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,l.jsx)(a.span,{className:"mord",children:"\u2223"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"x"}),(0,l.jsx)(a.span,{className:"mord",children:"\u2223"}),(0,l.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(a.span,{className:"mbin",children:"\u2212"}),(0,l.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(a.span,{className:"base",children:[(0,l.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(a.span,{className:"mord",children:"1"}),(0,l.jsx)(a.span,{className:"mclose",children:"}"})]})]})]}),"."]})})]})]})}function d(s={}){const{wrapper:a}={...(0,m.R)(),...s.components};return a?(0,l.jsx)(a,{...s,children:(0,l.jsx)(h,{...s})}):h(s)}},70326:(s,a,e)=>{e.d(a,{A:()=>n});const n=e.p+"assets/images/convex-loss-d45ff9ff195da60b00eb7f665a07e8fa.png"},28453:(s,a,e)=>{e.d(a,{R:()=>i,x:()=>c});var n=e(96540);const l={},m=n.createContext(l);function i(s){const a=n.useContext(m);return n.useMemo((function(){return"function"==typeof s?s(a):{...a,...s}}),[a,s])}function c(s){let a;return a=s.disableParentContext?"function"==typeof s.components?s.components(l):s.components||l:i(s.components),n.createElement(m.Provider,{value:a},s.children)}}}]);