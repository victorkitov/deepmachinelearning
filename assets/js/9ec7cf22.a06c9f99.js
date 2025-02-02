"use strict";(self.webpackChunksite_new=self.webpackChunksite_new||[]).push([[7752],{79912:(s,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>t,default:()=>d,frontMatter:()=>m,metadata:()=>l,toc:()=>r});const l=JSON.parse('{"id":"Machine-learning/Base-concepts/Weighted-account","title":"\u0412\u0437\u0432\u0435\u0448\u0435\u043d\u043d\u044b\u0439 \u0443\u0447\u0451\u0442 \u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u0439","description":"\u0423\u0447\u0451\u0442 \u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u0439 \u043e\u0431\u0443\u0447\u0430\u044e\u0449\u0435\u0439 \u0432\u044b\u0431\u043e\u0440\u043a\u0438 \u0441 \u0440\u0430\u0437\u043d\u044b\u043c\u0438 \u0432\u0435\u0441\u0430\u043c\u0438. \u041c\u043e\u0442\u0438\u0432\u0430\u0446\u0438\u044f \u0432\u0437\u0432\u0435\u0448\u0435\u043d\u043d\u043e\u0433\u043e \u0443\u0447\u0451\u0442\u0430 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u043e\u0431\u0443\u0447\u0430\u044e\u0449\u0435\u0439 \u0432\u044b\u0431\u043e\u0440\u043a\u0438.","source":"@site/docs/Machine-learning/03-Base-concepts/04-Weighted-account.md","sourceDirName":"Machine-learning/03-Base-concepts","slug":"/Machine-learning/Base-concepts/Weighted-account","permalink":"/docs/Machine-learning/Base-concepts/Weighted-account","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"description":"\u0423\u0447\u0451\u0442 \u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u0439 \u043e\u0431\u0443\u0447\u0430\u044e\u0449\u0435\u0439 \u0432\u044b\u0431\u043e\u0440\u043a\u0438 \u0441 \u0440\u0430\u0437\u043d\u044b\u043c\u0438 \u0432\u0435\u0441\u0430\u043c\u0438. \u041c\u043e\u0442\u0438\u0432\u0430\u0446\u0438\u044f \u0432\u0437\u0432\u0435\u0448\u0435\u043d\u043d\u043e\u0433\u043e \u0443\u0447\u0451\u0442\u0430 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u043e\u0431\u0443\u0447\u0430\u044e\u0449\u0435\u0439 \u0432\u044b\u0431\u043e\u0440\u043a\u0438."},"sidebar":"Machine-learning","previous":{"title":"\u0420\u0435\u0433\u0443\u043b\u044f\u0440\u0438\u0437\u0430\u0446\u0438\u044f \u043c\u043e\u0434\u0435\u043b\u0438","permalink":"/docs/Machine-learning/Base-concepts/Regularization"},"next":{"title":"\u0421\u0432\u044f\u0437\u044c \u0441 \u043f\u0440\u0438\u043d\u0446\u0438\u043f\u043e\u043c \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043f\u0440\u0430\u0432\u0434\u043e\u043f\u043e\u0434\u043e\u0431\u0438\u044f","permalink":"/docs/Machine-learning/Base-concepts/MaxLikelihood-Connection"}}');var n=a(74848),i=a(28453);const m={description:"\u0423\u0447\u0451\u0442 \u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u0439 \u043e\u0431\u0443\u0447\u0430\u044e\u0449\u0435\u0439 \u0432\u044b\u0431\u043e\u0440\u043a\u0438 \u0441 \u0440\u0430\u0437\u043d\u044b\u043c\u0438 \u0432\u0435\u0441\u0430\u043c\u0438. \u041c\u043e\u0442\u0438\u0432\u0430\u0446\u0438\u044f \u0432\u0437\u0432\u0435\u0448\u0435\u043d\u043d\u043e\u0433\u043e \u0443\u0447\u0451\u0442\u0430 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u043e\u0431\u0443\u0447\u0430\u044e\u0449\u0435\u0439 \u0432\u044b\u0431\u043e\u0440\u043a\u0438."},t="\u0412\u0437\u0432\u0435\u0448\u0435\u043d\u043d\u044b\u0439 \u0443\u0447\u0451\u0442 \u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u0439",c={},r=[];function h(s){const e={a:"a",admonition:"admonition",annotation:"annotation",h1:"h1",header:"header",math:"math",mfrac:"mfrac",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",mstyle:"mstyle",msub:"msub",mtable:"mtable",mtd:"mtd",mtext:"mtext",mtr:"mtr",munder:"munder",munderover:"munderover",p:"p",semantics:"semantics",span:"span",...(0,i.R)(),...s.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.header,{children:(0,n.jsx)(e.h1,{id:"\u0432\u0437\u0432\u0435\u0448\u0435\u043d\u043d\u044b\u0439-\u0443\u0447\u0451\u0442-\u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u0439",children:"\u0412\u0437\u0432\u0435\u0448\u0435\u043d\u043d\u044b\u0439 \u0443\u0447\u0451\u0442 \u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u0439"})}),"\n",(0,n.jsx)(e.p,{children:"\u041a\u043b\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u043f\u043e\u0442\u0435\u0440\u044c \u043c\u0438\u043d\u0438\u043c\u0438\u0437\u0438\u0440\u0443\u0435\u0442 \u0441\u0440\u0435\u0434\u043d\u0438\u0435 \u043f\u043e\u0442\u0435\u0440\u0438 \u0441 \u0440\u0430\u0432\u043d\u043e\u043c\u0435\u0440\u043d\u044b\u043c \u0443\u0447\u0451\u0442\u043e\u043c \u0432\u0441\u0435\u0445 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432:"}),"\n",(0,n.jsx)(e.span,{className:"katex-display",children:(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsxs)(e.mfrac,{children:[(0,n.jsx)(e.mn,{children:"1"}),(0,n.jsx)(e.mi,{children:"N"})]}),(0,n.jsxs)(e.munderover,{children:[(0,n.jsx)(e.mo,{children:"\u2211"}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"n"}),(0,n.jsx)(e.mo,{children:"="}),(0,n.jsx)(e.mn,{children:"1"})]}),(0,n.jsx)(e.mi,{children:"N"})]}),(0,n.jsx)(e.mi,{mathvariant:"script",children:"L"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"f"}),(0,n.jsx)(e.mi,{mathvariant:"bold",children:"w"})]}),(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{mathvariant:"bold",children:"x"}),(0,n.jsx)(e.mi,{children:"n"})]}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"}),(0,n.jsx)(e.mo,{separator:"true",children:","}),(0,n.jsx)(e.mtext,{children:"\u2009"}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"y"}),(0,n.jsx)(e.mi,{children:"n"})]}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"}),(0,n.jsx)(e.mo,{children:"\u2192"}),(0,n.jsxs)(e.munder,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"min"}),(0,n.jsx)(e.mo,{children:"\u2061"})]}),(0,n.jsx)(e.mi,{mathvariant:"bold",children:"w"})]})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\frac{1}{N}\\sum_{n=1}^{N}\\mathcal{L}(f_{\\mathbf{w}}(\\mathbf{x}_{n}),\\,y_{n}) \\to \\min_\\mathbf{w}"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"3.0954em",verticalAlign:"-1.2671em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mopen nulldelimiter"}),(0,n.jsx)(e.span,{className:"mfrac",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsxs)(e.span,{className:"vlist",style:{height:"1.3214em"},children:[(0,n.jsxs)(e.span,{style:{top:"-2.314em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{className:"mord",children:(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"})})]}),(0,n.jsxs)(e.span,{style:{top:"-3.23em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{className:"frac-line",style:{borderBottomWidth:"0.04em"}})]}),(0,n.jsxs)(e.span,{style:{top:"-3.677em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{className:"mord",children:(0,n.jsx)(e.span,{className:"mord",children:"1"})})]})]}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.686em"},children:(0,n.jsx)(e.span,{})})})]})}),(0,n.jsx)(e.span,{className:"mclose nulldelimiter"})]}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(e.span,{className:"mop op-limits",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsxs)(e.span,{className:"vlist",style:{height:"1.8283em"},children:[(0,n.jsxs)(e.span,{style:{top:"-1.8829em",marginLeft:"0em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3.05em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsxs)(e.span,{className:"mord mtight",children:[(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"n"}),(0,n.jsx)(e.span,{className:"mrel mtight",children:"="}),(0,n.jsx)(e.span,{className:"mord mtight",children:"1"})]})})]}),(0,n.jsxs)(e.span,{style:{top:"-3.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3.05em"}}),(0,n.jsx)(e.span,{children:(0,n.jsx)(e.span,{className:"mop op-symbol large-op",children:"\u2211"})})]}),(0,n.jsxs)(e.span,{style:{top:"-4.3em",marginLeft:"0em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3.05em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.10903em"},children:"N"})})})]})]}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"1.2671em"},children:(0,n.jsx)(e.span,{})})})]})}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(e.span,{className:"mord mathcal",children:"L"}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.1611em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.1076em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord mathbf mtight",style:{marginRight:"0.01597em"},children:"w"})})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathbf",children:"x"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.1514em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"n"})})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsx)(e.span,{className:"mclose",children:")"}),(0,n.jsx)(e.span,{className:"mpunct",children:","}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.1514em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0359em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"n"})})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsx)(e.span,{className:"mclose",children:")"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:"\u2192"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1.3679em",verticalAlign:"-0.7em"}}),(0,n.jsx)(e.span,{className:"mop op-limits",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsxs)(e.span,{className:"vlist",style:{height:"0.6679em"},children:[(0,n.jsxs)(e.span,{style:{top:"-2.4em",marginLeft:"0em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mathbf mtight",style:{marginRight:"0.01597em"},children:"w"})})]}),(0,n.jsxs)(e.span,{style:{top:"-3em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{children:(0,n.jsx)(e.span,{className:"mop",children:"min"})})]})]}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.7em"},children:(0,n.jsx)(e.span,{})})})]})})]})]})]})}),"\n",(0,n.jsx)(e.p,{children:"\u041d\u043e \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0435 \u043e\u0431\u044a\u0435\u043a\u0442\u044b \u043c\u043e\u0436\u043d\u043e \u0443\u0447\u0438\u0442\u044b\u0432\u0430\u0442\u044c \u043f\u043e-\u0440\u0430\u0437\u043d\u043e\u043c\u0443, \u0437\u0430\u0434\u0430\u0432 \u0441\u0432\u043e\u0439 \u0432\u0435\u0441 \u0434\u043b\u044f \u0443\u0447\u0451\u0442\u0430 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u043e\u0431\u044a\u0435\u043a\u0442\u0430:"}),"\n",(0,n.jsx)(e.span,{className:"katex-display",children:(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mtable,{rowspacing:"0.25em",columnalign:"center",columnspacing:"0em",children:[(0,n.jsx)(e.mtr,{children:(0,n.jsx)(e.mtd,{children:(0,n.jsx)(e.mstyle,{scriptlevel:"0",displaystyle:"true",children:(0,n.jsxs)(e.mrow,{children:[(0,n.jsxs)(e.munderover,{children:[(0,n.jsx)(e.mo,{children:"\u2211"}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"n"}),(0,n.jsx)(e.mo,{children:"="}),(0,n.jsx)(e.mn,{children:"1"})]}),(0,n.jsx)(e.mi,{children:"N"})]}),(0,n.jsx)(e.mstyle,{mathcolor:"red",children:(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"\u03b1"}),(0,n.jsx)(e.mi,{children:"n"})]})}),(0,n.jsx)(e.mi,{mathvariant:"script",children:"L"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"f"}),(0,n.jsx)(e.mi,{mathvariant:"bold",children:"w"})]}),(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{mathvariant:"bold",children:"x"}),(0,n.jsx)(e.mi,{children:"n"})]}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"}),(0,n.jsx)(e.mo,{separator:"true",children:","}),(0,n.jsx)(e.mtext,{children:"\u2009"}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"y"}),(0,n.jsx)(e.mi,{children:"n"})]}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"}),(0,n.jsx)(e.mo,{children:"\u2192"}),(0,n.jsxs)(e.munder,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"min"}),(0,n.jsx)(e.mo,{children:"\u2061"})]}),(0,n.jsx)(e.mi,{children:"\u03b2"})]})]})})})}),(0,n.jsx)(e.mtr,{children:(0,n.jsx)(e.mtd,{children:(0,n.jsx)(e.mstyle,{scriptlevel:"0",displaystyle:"true",children:(0,n.jsxs)(e.mstyle,{mathcolor:"red",children:[(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"\u03b1"}),(0,n.jsx)(e.mn,{children:"1"})]}),(0,n.jsx)(e.mo,{children:"\u2265"}),(0,n.jsx)(e.mn,{children:"0"}),(0,n.jsx)(e.mo,{separator:"true",children:","}),(0,n.jsx)(e.mtext,{children:"\u2009"}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"\u03b1"}),(0,n.jsx)(e.mn,{children:"2"})]}),(0,n.jsx)(e.mo,{children:"\u2265"}),(0,n.jsx)(e.mn,{children:"0"}),(0,n.jsx)(e.mo,{separator:"true",children:","}),(0,n.jsx)(e.mtext,{children:"\u2009"}),(0,n.jsx)(e.mi,{mathvariant:"normal",children:"."}),(0,n.jsx)(e.mi,{mathvariant:"normal",children:"."}),(0,n.jsx)(e.mi,{mathvariant:"normal",children:"."}),(0,n.jsx)(e.mtext,{children:"\u2009"}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"\u03b1"}),(0,n.jsx)(e.mi,{children:"N"})]}),(0,n.jsx)(e.mo,{children:"\u2265"}),(0,n.jsx)(e.mn,{children:"0"})]})})})})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\begin{gathered}\\sum_{n=1}^{N}{\\color{red}\\alpha_{n}}\\mathcal{L}(f_{\\mathbf{w}}(\\mathbf{x}_{n}),\\,y_{n})\\to\\min_{\\beta}\\\\\n{\\color{red}\\alpha_{1}\\ge 0,\\, \\alpha_{2}\\ge 0, \\, ... \\, \\alpha_{N}\\ge0}\n\\end{gathered}\n"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"4.8954em",verticalAlign:"-2.1977em"}}),(0,n.jsx)(e.span,{className:"mord",children:(0,n.jsx)(e.span,{className:"mtable",children:(0,n.jsx)(e.span,{className:"col-align-c",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsxs)(e.span,{className:"vlist",style:{height:"2.6977em"},children:[(0,n.jsxs)(e.span,{style:{top:"-4.6977em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3.8283em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mop op-limits",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsxs)(e.span,{className:"vlist",style:{height:"1.8283em"},children:[(0,n.jsxs)(e.span,{style:{top:"-1.8829em",marginLeft:"0em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3.05em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsxs)(e.span,{className:"mord mtight",children:[(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"n"}),(0,n.jsx)(e.span,{className:"mrel mtight",children:"="}),(0,n.jsx)(e.span,{className:"mord mtight",children:"1"})]})})]}),(0,n.jsxs)(e.span,{style:{top:"-3.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3.05em"}}),(0,n.jsx)(e.span,{children:(0,n.jsx)(e.span,{className:"mop op-symbol large-op",children:"\u2211"})})]}),(0,n.jsxs)(e.span,{style:{top:"-4.3em",marginLeft:"0em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3.05em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.10903em"},children:"N"})})})]})]}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"1.2671em"},children:(0,n.jsx)(e.span,{})})})]})}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(e.span,{className:"mord",children:(0,n.jsxs)(e.span,{className:"mord",style:{color:"red"},children:[(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.0037em",color:"red"},children:"\u03b1"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.1514em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0037em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",style:{color:"red"},children:(0,n.jsx)(e.span,{className:"mord mtight",style:{color:"red"},children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{color:"red"},children:"n"})})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]})}),(0,n.jsx)(e.span,{className:"mord mathcal",children:"L"}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.1611em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.1076em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord mathbf mtight",style:{marginRight:"0.01597em"},children:"w"})})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathbf",children:"x"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.1514em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"n"})})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsx)(e.span,{className:"mclose",children:")"}),(0,n.jsx)(e.span,{className:"mpunct",children:","}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.1514em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0359em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"n"})})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsx)(e.span,{className:"mclose",children:")"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:"\u2192"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mop op-limits",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsxs)(e.span,{className:"vlist",style:{height:"0.6679em"},children:[(0,n.jsxs)(e.span,{style:{top:"-2.3479em",marginLeft:"0em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.05278em"},children:"\u03b2"})})})]}),(0,n.jsxs)(e.span,{style:{top:"-3em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{children:(0,n.jsx)(e.span,{className:"mop",children:"min"})})]})]}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.8882em"},children:(0,n.jsx)(e.span,{})})})]})})]})]}),(0,n.jsxs)(e.span,{style:{top:"-2.2906em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3.8283em"}}),(0,n.jsx)(e.span,{className:"mord",children:(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsxs)(e.span,{className:"mord",style:{color:"red"},children:[(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.0037em",color:"red"},children:"\u03b1"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0037em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",style:{color:"red"},children:(0,n.jsx)(e.span,{className:"mord mtight",style:{color:"red"},children:(0,n.jsx)(e.span,{className:"mord mtight",style:{color:"red"},children:"1"})})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",style:{color:"red"},children:"\u2265"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mord",style:{color:"red"},children:"0"}),(0,n.jsx)(e.span,{className:"mpunct",style:{color:"red"},children:","}),(0,n.jsx)(e.span,{className:"mspace",style:{color:"red",marginRight:"0.1667em"}}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsxs)(e.span,{className:"mord",style:{color:"red"},children:[(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.0037em",color:"red"},children:"\u03b1"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0037em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",style:{color:"red"},children:(0,n.jsx)(e.span,{className:"mord mtight",style:{color:"red"},children:(0,n.jsx)(e.span,{className:"mord mtight",style:{color:"red"},children:"2"})})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",style:{color:"red"},children:"\u2265"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mord",style:{color:"red"},children:"0"}),(0,n.jsx)(e.span,{className:"mpunct",style:{color:"red"},children:","}),(0,n.jsx)(e.span,{className:"mspace",style:{color:"red",marginRight:"0.1667em"}}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(e.span,{className:"mord",style:{color:"red"},children:"..."}),(0,n.jsx)(e.span,{className:"mspace",style:{color:"red",marginRight:"0.1667em"}}),(0,n.jsxs)(e.span,{className:"mord",style:{color:"red"},children:[(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.0037em",color:"red"},children:"\u03b1"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3283em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0037em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",style:{color:"red"},children:(0,n.jsx)(e.span,{className:"mord mtight",style:{color:"red"},children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.10903em",color:"red"},children:"N"})})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",style:{color:"red"},children:"\u2265"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mord",style:{color:"red"},children:"0"})]})})]})]}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"2.1977em"},children:(0,n.jsx)(e.span,{})})})]})})})})]})})]})}),"\n",(0,n.jsx)(e.p,{children:"\u0412\u0437\u0432\u0435\u0448\u0435\u043d\u043d\u044b\u0439 \u0443\u0447\u0451\u0442 \u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u0439 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0437\u0430\u043d\u0438\u0436\u0430\u0442\u044c \u0432\u0435\u0441 \u043f\u043e\u0434\u043e\u0437\u0440\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432 (\u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0430 \u0438\u0437 \u043d\u0435\u043d\u0430\u0434\u0451\u0436\u043d\u044b\u0445 \u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u043e\u0432) \u0438\u043b\u0438 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432-\u0432\u044b\u0431\u0440\u043e\u0441\u043e\u0432 (\u0432\u044b\u0431\u0438\u0432\u0430\u044e\u0449\u0438\u0445\u0441\u044f \u0438\u0437 \u043e\u0431\u0449\u0435\u0433\u043e \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u0438\u043b\u0438 \u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u043c\u043e\u0434\u0435\u043b\u044c \u0441\u0438\u043b\u044c\u043d\u043e \u043e\u0448\u0438\u0431\u0430\u0435\u0442\u0441\u044f)."}),"\n",(0,n.jsx)(e.p,{children:"\u0422\u0430\u043a\u0436\u0435 \u0432\u0437\u0432\u0435\u0448\u0435\u043d\u043d\u044b\u0439 \u0443\u0447\u0451\u0442 \u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u0439 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0441\u0431\u0430\u043b\u0430\u043d\u0441\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0432\u044b\u0431\u043e\u0440\u043a\u0443 \u043f\u043e \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0435. \u041f\u0443\u0441\u0442\u044c, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u043c\u044b \u043f\u0440\u0435\u0434\u0441\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u043c \u0437\u0430\u0440\u043f\u043b\u0430\u0442\u0443 \u0434\u043b\u044f \u043c\u0443\u0436\u0447\u0438\u043d \u0438 \u0436\u0435\u043d\u0449\u0438\u043d \u043f\u043e \u0438\u0445 \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0430\u043c, \u0438 \u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u0439 \u0432 \u043e\u0431\u0443\u0447\u0430\u044e\u0449\u0435\u0439 \u0432\u044b\u0431\u043e\u0440\u043a\u0435 \u043f\u043e \u0436\u0435\u043d\u0449\u0438\u043d\u0430\u043c \u0433\u043e\u0440\u0430\u0437\u0434\u043e \u0431\u043e\u043b\u044c\u0448\u0435, \u0447\u0435\u043c \u043f\u043e \u043c\u0443\u0436\u0447\u0438\u043d\u0430\u043c. \u0427\u0442\u043e\u0431\u044b \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043c\u043e\u0434\u0435\u043b\u044c \u0441 \u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u043e\u0439 \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u043c\u043e\u0441\u0442\u044c\u044e \u043a\u0430\u043a \u0434\u043b\u044f \u043c\u0443\u0436\u0447\u0438\u043d, \u0442\u0430\u043a \u0438 \u0434\u043b\u044f \u0436\u0435\u043d\u0449\u0438\u043d \u0431\u0435\u0437 \u0441\u043c\u0435\u0449\u0435\u043d\u0438\u044f \u0432 \u0441\u0442\u043e\u0440\u043e\u043d\u0443 \u0442\u043e\u0433\u043e \u0438\u043b\u0438 \u0438\u043d\u043e\u0433\u043e \u043f\u043e\u043b\u0430, \u043c\u044b \u043c\u043e\u0436\u0435\u043c \u0443\u0447\u0438\u0442\u044b\u0432\u0430\u0442\u044c \u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u0436\u0435\u043d\u0449\u0438\u043d \u0441 \u043c\u0435\u043d\u044c\u0448\u0438\u043c \u0432\u0435\u0441\u043e\u043c, \u0430 \u0434\u043b\u044f \u043c\u0443\u0436\u0447\u0438\u043d - \u0441 \u0431\u043e\u043b\u044c\u0448\u0438\u043c."}),"\n",(0,n.jsx)(e.admonition,{title:"\u0414\u0440\u0443\u0433\u043e\u0439 \u0432\u0430\u0440\u0438\u0430\u043d\u0442 \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044f",type:"tip",children:(0,n.jsxs)(e.p,{children:["\u0412 \u043f\u0435\u0440\u0432\u043e\u0439 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c\u0430 \u0431\u0443\u0441\u0442\u0438\u043d\u0433\u0430 ",(0,n.jsx)(e.a,{href:"../Boosting/AdaBoost",children:"AdaBoost"}),' \u043f\u0440\u043e\u0433\u043d\u043e\u0437 \u0441\u0442\u0440\u043e\u0438\u043b\u0441\u044f \u0432\u0437\u0432\u0435\u0448\u0435\u043d\u043d\u043e\u0439 \u0441\u0443\u043c\u043c\u043e\u0439 \u043e\u0434\u0438\u043d\u0430\u043a\u043e\u0432\u044b\u0445 \u043c\u043e\u0434\u0435\u043b\u0435\u0439, \u043a\u0430\u0436\u0434\u0430\u044f \u0438\u0437 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u043d\u0430\u0441\u0442\u0440\u0438\u0432\u0430\u043b\u0430\u0441\u044c \u043f\u043e \u043e\u0434\u043d\u043e\u0439 \u0438 \u0442\u043e\u0439 \u0436\u0435 \u043e\u0431\u0443\u0447\u0430\u044e\u0449\u0435\u0439 \u0432\u044b\u0431\u043e\u0440\u043a\u0435, \u0430 \u0438\u0437\u043c\u0435\u043d\u044f\u043b\u0438\u0441\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0432\u0435\u0441\u0430 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432. \u0422\u0435\u043c \u043e\u0431\u044a\u0435\u043a\u0442\u0430\u043c, \u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0440\u0430\u043d\u0435\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u0430\u044f \u043c\u043e\u0434\u0435\u043b\u044c \u0441\u0438\u043b\u044c\u043d\u0435\u0435 \u043e\u0448\u0438\u0431\u0430\u043b\u0430\u0441\u044c, \u0437\u0430\u0434\u0430\u0432\u0430\u043b\u0438\u0441\u044c \u043f\u043e\u0432\u044b\u0448\u0435\u043d\u043d\u044b\u0435 \u0432\u0435\u0441\u0430 \u043f\u0440\u0438 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0435 \u043d\u043e\u0432\u043e\u0439 \u0443\u0442\u043e\u0447\u043d\u044f\u044e\u0449\u0435\u0439 \u043c\u043e\u0434\u0435\u043b\u0438, \u0447\u0442\u043e\u0431\u044b \u043e\u043d\u0430 \u043f\u0440\u043e\u0432\u0435\u043b\u0430 \u043d\u0430 \u043d\u0438\u0445 \u0431\u043e\u043b\u0435\u0435 \u0442\u0449\u0430\u0442\u0435\u043b\u044c\u043d\u0443\u044e "\u0440\u0430\u0431\u043e\u0442\u0443 \u043d\u0430\u0434 \u043e\u0448\u0438\u0431\u043a\u0430\u043c\u0438".']})})]})}function d(s={}){const{wrapper:e}={...(0,i.R)(),...s.components};return e?(0,n.jsx)(e,{...s,children:(0,n.jsx)(h,{...s})}):h(s)}},28453:(s,e,a)=>{a.d(e,{R:()=>m,x:()=>t});var l=a(96540);const n={},i=l.createContext(n);function m(s){const e=l.useContext(i);return l.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function t(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(n):s.components||n:m(s.components),l.createElement(i.Provider,{value:e},s.children)}}}]);