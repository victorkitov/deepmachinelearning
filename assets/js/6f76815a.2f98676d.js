"use strict";(self.webpackChunksite_new=self.webpackChunksite_new||[]).push([[5723],{40066:(s,a,e)=>{e.r(a),e.d(a,{assets:()=>c,contentTitle:()=>t,default:()=>x,frontMatter:()=>i,metadata:()=>m,toc:()=>r});var n=e(74848),l=e(28453);const i={description:"\u041c\u0435\u0442\u043e\u0434 orthogonal matching pursuit \u0441 \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u043c \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435\u043c \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u0432 \u043c\u043e\u0434\u0435\u043b\u044c \u043b\u0438\u043d\u0435\u0439\u043d\u043e\u0439 \u0440\u0435\u0433\u0440\u0435\u0441\u0441\u0438\u0438."},t="Orthogonal matching pursuit",m={id:"docs_ml/Linear-regression-extensions/Orthogonal-matching-pursuit",title:"Orthogonal matching pursuit",description:"\u041c\u0435\u0442\u043e\u0434 orthogonal matching pursuit \u0441 \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u043c \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435\u043c \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u0432 \u043c\u043e\u0434\u0435\u043b\u044c \u043b\u0438\u043d\u0435\u0439\u043d\u043e\u0439 \u0440\u0435\u0433\u0440\u0435\u0441\u0441\u0438\u0438.",source:"@site/docs/docs_ml/07-Linear-regression-extensions/07-Orthogonal-matching-pursuit.md",sourceDirName:"docs_ml/07-Linear-regression-extensions",slug:"/docs_ml/Linear-regression-extensions/Orthogonal-matching-pursuit",permalink:"/docs/docs_ml/Linear-regression-extensions/Orthogonal-matching-pursuit",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{description:"\u041c\u0435\u0442\u043e\u0434 orthogonal matching pursuit \u0441 \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u043c \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435\u043c \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u0432 \u043c\u043e\u0434\u0435\u043b\u044c \u043b\u0438\u043d\u0435\u0439\u043d\u043e\u0439 \u0440\u0435\u0433\u0440\u0435\u0441\u0441\u0438\u0438."},sidebar:"docs_ml",previous:{title:"\u0420\u0435\u0433\u0440\u0435\u0441\u0441\u0438\u044f \u043e\u043f\u043e\u0440\u043d\u044b\u0445 \u0432\u0435\u043a\u0442\u043e\u0440\u043e\u0432",permalink:"/docs/docs_ml/Linear-regression-extensions/Support-vector-regression"},next:{title:"\u041e\u0446\u0435\u043d\u043a\u0430 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0430 \u0440\u0435\u0433\u0440\u0435\u0441\u0441\u0438\u0438",permalink:"/docs/docs_ml/Regression-evaluation"}},c={},r=[];function h(s){const a={admonition:"admonition",annotation:"annotation",blockquote:"blockquote",em:"em",h1:"h1",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msup:"msup",ol:"ol",p:"p",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,l.R)(),...s.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{id:"orthogonal-matching-pursuit",children:"Orthogonal matching pursuit"}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsx)(a.p,{children:"Orthogonal Matching Pursuit (OMP) - \u043a\u043e\u043c\u0431\u0438\u043d\u0430\u0446\u0438\u044f \u043e\u0442\u0431\u043e\u0440\u0430 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432 \u0438 \u043b\u0438\u043d\u0435\u0439\u043d\u043e\u0439 \u0440\u0435\u0433\u0440\u0435\u0441\u0441\u0438\u0438, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u0441\u0442\u0440\u043e\u0438\u0442\u0441\u044f \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e \u0442\u043e\u0447\u043d\u0430\u044f \u043b\u0438\u043d\u0435\u0439\u043d\u0430\u044f \u043c\u043e\u0434\u0435\u043b\u044c \u0441 \u0447\u0438\u0441\u043b\u043e\u043c \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432, \u0440\u0430\u0432\u043d\u044b\u043c K."}),"\n"]}),"\n",(0,n.jsxs)(a.p,{children:["\u0410\u043b\u0433\u043e\u0440\u0438\u0442\u043c \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f, \u043a\u043e\u0433\u0434\u0430 \u0447\u0438\u0441\u043b\u043e \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432 \u0431\u043e\u043b\u044c\u0448\u0435 \u0447\u0438\u0441\u043b\u0430 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u0432\u044b\u0431\u043e\u0440\u043a\u0438 \u0438 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 \u043b\u0438\u043d\u0435\u0439\u043d\u043e\u0439 \u0440\u0435\u0433\u0440\u0435\u0441\u0441\u0438\u0438 \u043d\u0430\u043f\u0440\u044f\u043c\u0443\u044e \u043f\u0440\u0438\u0432\u0435\u0434\u0451\u0442 \u043a ",(0,n.jsx)(a.em,{children:"\u043f\u0435\u0440\u0435\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0451\u043d\u043d\u043e\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u0435"})," (\u0447\u0438\u0441\u043b\u043e \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432 \u0431\u043e\u043b\u044c\u0448\u0435 \u0447\u0438\u0441\u043b\u0430 \u0443\u0441\u043b\u043e\u0432\u0438\u0439). \u0410\u043b\u0433\u043e\u0440\u0438\u0442\u043c \u0438\u0442\u0435\u0440\u0430\u0442\u0438\u0432\u043d\u044b\u0439, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u043d\u0430 \u043a\u0430\u0436\u0434\u043e\u0439 \u0438\u0442\u0435\u0440\u0430\u0446\u0438\u0438 \u0440\u0430\u0441\u0448\u0438\u0440\u044f\u0435\u0442\u0441\u044f \u0447\u0438\u0441\u043b\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0445 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432 ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsx)(a.mrow,{children:(0,n.jsx)(a.mi,{children:"S"})}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"S"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.6833em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.05764em"},children:"S"})]})})]})," \u043d\u0430 \u0435\u0434\u0438\u043d\u0438\u0446\u0443, \u0430 \u043e\u0448\u0438\u0431\u043a\u0438 \u0442\u0435\u043a\u0443\u0449\u0435\u0439 \u043c\u043e\u0434\u0435\u043b\u0438 \u043d\u0430 \u0432\u0441\u0435\u0445 \u043e\u0431\u044a\u0435\u043a\u0442\u0430\u0445 \u0432\u044b\u0431\u043e\u0440\u043a\u0438 \u043e\u0431\u043e\u0437\u043d\u0430\u0447\u0438\u043c \u0437\u0430 ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{children:"R"}),(0,n.jsx)(a.mo,{children:"\u2208"}),(0,n.jsxs)(a.msup,{children:[(0,n.jsx)(a.mi,{mathvariant:"double-struck",children:"R"}),(0,n.jsx)(a.mi,{children:"N"})]})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"R\\in \\mathbb{R}^N"})]})})}),(0,n.jsxs)(a.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.7224em",verticalAlign:"-0.0391em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.00773em"},children:"R"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(a.span,{className:"mrel",children:"\u2208"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.8413em"}}),(0,n.jsxs)(a.span,{className:"mord",children:[(0,n.jsx)(a.span,{className:"mord mathbb",children:"R"}),(0,n.jsx)(a.span,{className:"msupsub",children:(0,n.jsx)(a.span,{className:"vlist-t",children:(0,n.jsx)(a.span,{className:"vlist-r",children:(0,n.jsx)(a.span,{className:"vlist",style:{height:"0.8413em"},children:(0,n.jsxs)(a.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,n.jsx)(a.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(a.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(a.span,{className:"mord mathnormal mtight",style:{marginRight:"0.10903em"},children:"N"})})]})})})})})]})]})]})]}),". \u041c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u043e \u0432\u0441\u0435\u0445 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432 \u043e\u0431\u043e\u0437\u043d\u0430\u0447\u0438\u043c \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u043e\u043c ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{children:"A"}),(0,n.jsx)(a.mo,{children:"="}),(0,n.jsx)(a.mo,{stretchy:"false",children:"{"}),(0,n.jsx)(a.mn,{children:"1"}),(0,n.jsx)(a.mo,{separator:"true",children:","}),(0,n.jsx)(a.mn,{children:"2"}),(0,n.jsx)(a.mo,{separator:"true",children:","}),(0,n.jsx)(a.mi,{mathvariant:"normal",children:"."}),(0,n.jsx)(a.mi,{mathvariant:"normal",children:"."}),(0,n.jsx)(a.mi,{mathvariant:"normal",children:"."}),(0,n.jsx)(a.mi,{children:"D"}),(0,n.jsx)(a.mo,{stretchy:"false",children:"}"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"A=\\{1,2,...D\\}"})]})})}),(0,n.jsxs)(a.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.6833em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"A"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(a.span,{className:"mrel",children:"="}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(a.span,{className:"mopen",children:"{"}),(0,n.jsx)(a.span,{className:"mord",children:"1"}),(0,n.jsx)(a.span,{className:"mpunct",children:","}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(a.span,{className:"mord",children:"2"}),(0,n.jsx)(a.span,{className:"mpunct",children:","}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(a.span,{className:"mord",children:"..."}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"D"}),(0,n.jsx)(a.span,{className:"mclose",children:"}"})]})]})]})," \u0438 \u0431\u0443\u0434\u0435\u043c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043e\u0431\u043e\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f:"]}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:[(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{children:"A"}),(0,n.jsx)(a.mo,{children:"\u2216"}),(0,n.jsx)(a.mi,{children:"B"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"A\\setminus B"})]})})}),(0,n.jsxs)(a.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"A"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(a.span,{className:"mbin",children:"\u2216"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.6833em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.05017em"},children:"B"})]})]})]})," \u043a\u0430\u043a \u0440\u0430\u0437\u043d\u043e\u0441\u0442\u044c \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432 (\u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u043e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsx)(a.mrow,{children:(0,n.jsx)(a.mi,{children:"A"})}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"A"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.6833em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"A"})]})})]}),", \u043d\u0435 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0449\u0438\u0435\u0441\u044f \u0432 ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsx)(a.mrow,{children:(0,n.jsx)(a.mi,{children:"S"})}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"S"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.6833em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.05764em"},children:"S"})]})})]}),")"]}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:[(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{mathvariant:"normal",children:"\u2223"}),(0,n.jsx)(a.mi,{children:"S"}),(0,n.jsx)(a.mi,{mathvariant:"normal",children:"\u2223"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"|S|"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(a.span,{className:"mord",children:"\u2223"}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.05764em"},children:"S"}),(0,n.jsx)(a.span,{className:"mord",children:"\u2223"})]})})]})," - \u0447\u0438\u0441\u043b\u043e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u0430 ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsx)(a.mrow,{children:(0,n.jsx)(a.mi,{children:"S"})}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"S"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.6833em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.05764em"},children:"S"})]})})]})]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(a.p,{children:"\u0410\u043b\u0433\u043e\u0440\u0438\u0442\u043c OMP:"}),"\n",(0,n.jsxs)(a.p,{children:["\u041d\u0430\u0447\u0430\u043b\u044c\u043d\u043e\u0435 \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u043e \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432 - \u043f\u0443\u0441\u0442\u043e\u0435 \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u043e, \u0430 \u043d\u0430\u0447\u0430\u043b\u044c\u043d\u0430\u044f \u043c\u043e\u0434\u0435\u043b\u044c - \u0442\u043e\u0436\u0434\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u043d\u043e\u043b\u044c:\n",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{children:"S"}),(0,n.jsx)(a.mo,{children:":"}),(0,n.jsx)(a.mo,{children:"="}),(0,n.jsx)(a.mo,{stretchy:"false",children:"{"}),(0,n.jsx)(a.mo,{stretchy:"false",children:"}"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"S:=\\{\\}"})]})})}),(0,n.jsxs)(a.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.6833em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.05764em"},children:"S"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(a.span,{className:"mrel",children:":="}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(a.span,{className:"mopen",children:"{"}),(0,n.jsx)(a.span,{className:"mclose",children:"}"})]})]})]})]}),"\n",(0,n.jsxs)(a.p,{children:["\u041d\u0430\u0447\u0430\u043b\u044c\u043d\u0430\u044f \u043c\u043e\u0434\u0435\u043b\u044c - \u0442\u043e\u0436\u0434\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u043d\u043e\u043b\u044c, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u043e\u0448\u0438\u0431\u043a\u0438 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0442 \u0441 \u0432\u0435\u0440\u043d\u044b\u043c\u0438 \u043e\u0442\u0432\u0435\u0442\u0430\u043c\u0438:\n",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{children:"R"}),(0,n.jsx)(a.mo,{children:":"}),(0,n.jsx)(a.mo,{children:"="}),(0,n.jsx)(a.mi,{children:"Y"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"R:=Y"})]})})}),(0,n.jsxs)(a.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.6833em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.00773em"},children:"R"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(a.span,{className:"mrel",children:":="}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.6833em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.22222em"},children:"Y"})]})]})]})]}),"\n",(0,n.jsxs)(a.p,{children:["\u043f\u043e\u043a\u0430 ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{mathvariant:"normal",children:"\u2223"}),(0,n.jsx)(a.mi,{children:"S"}),(0,n.jsx)(a.mi,{mathvariant:"normal",children:"\u2223"}),(0,n.jsx)(a.mo,{children:"<"}),(0,n.jsx)(a.mi,{children:"K"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"|S|<K"})]})})}),(0,n.jsxs)(a.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(a.span,{className:"mord",children:"\u2223"}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.05764em"},children:"S"}),(0,n.jsx)(a.span,{className:"mord",children:"\u2223"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(a.span,{className:"mrel",children:"<"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.6833em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.07153em"},children:"K"})]})]})]}),":"]}),"\n",(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:["\u0432\u044b\u0431\u0440\u0430\u0442\u044c \u043f\u0440\u0438\u0437\u043d\u0430\u043a ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{children:"i"}),(0,n.jsx)(a.mo,{children:"\u2208"}),(0,n.jsx)(a.mi,{children:"A"}),(0,n.jsx)(a.mo,{children:"\u2216"}),(0,n.jsx)(a.mi,{children:"S"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"i\\in A\\setminus S"})]})})}),(0,n.jsxs)(a.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.6986em",verticalAlign:"-0.0391em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"i"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(a.span,{className:"mrel",children:"\u2208"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"A"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(a.span,{className:"mbin",children:"\u2216"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.6833em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.05764em"},children:"S"})]})]})]}),", \u0443 \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u043a\u043e\u0432\u0430\u0440\u0438\u0430\u0446\u0438\u044f \u0441 \u043e\u0448\u0438\u0431\u043a\u0430\u043c\u0438 \u0442\u0435\u043a\u0443\u0449\u0435\u0439 \u043c\u043e\u0434\u0435\u043b\u0438 ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsx)(a.mrow,{children:(0,n.jsx)(a.mi,{children:"R"})}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"R"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.6833em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.00773em"},children:"R"})]})})]}),"."]}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:["\u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u044d\u0442\u043e\u0442 \u043f\u0440\u0438\u0437\u043d\u0430\u043a \u0432 \u0447\u0438\u0441\u043b\u043e \u043e\u0442\u043e\u0431\u0440\u0430\u043d\u043d\u044b\u0445: ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{children:"S"}),(0,n.jsx)(a.mo,{children:":"}),(0,n.jsx)(a.mo,{children:"="}),(0,n.jsx)(a.mi,{children:"S"}),(0,n.jsx)(a.mo,{children:"\u222a"}),(0,n.jsx)(a.mo,{stretchy:"false",children:"{"}),(0,n.jsx)(a.mi,{children:"i"}),(0,n.jsx)(a.mo,{stretchy:"false",children:"}"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"S:=S\\cup\\{i\\}"})]})})}),(0,n.jsxs)(a.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.6833em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.05764em"},children:"S"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(a.span,{className:"mrel",children:":="}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.6833em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.05764em"},children:"S"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(a.span,{className:"mbin",children:"\u222a"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(a.span,{className:"mopen",children:"{"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"i"}),(0,n.jsx)(a.span,{className:"mclose",children:"}"})]})]})]})]}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:["\u043e\u0431\u0443\u0447\u0438\u0442\u044c \u043b\u0438\u043d\u0435\u0439\u043d\u0443\u044e \u0440\u0435\u0433\u0440\u0435\u0441\u0441\u0438\u044e \u043f\u0440\u0435\u0434\u0441\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsx)(a.mrow,{children:(0,n.jsx)(a.mi,{children:"Y"})}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"Y"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.6833em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.22222em"},children:"Y"})]})})]}),", \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u043e\u0442\u043e\u0431\u0440\u0430\u043d\u043d\u044b\u0435 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u0438 \u0438\u0437 ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsx)(a.mrow,{children:(0,n.jsx)(a.mi,{children:"S"})}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"S"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.6833em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.05764em"},children:"S"})]})})]})]}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:["\u043f\u0440\u0438\u0441\u0432\u043e\u0438\u0442\u044c \u0432\u0435\u043a\u0442\u043e\u0440\u0443 ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsx)(a.mrow,{children:(0,n.jsx)(a.mi,{children:"R"})}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"R"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.6833em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.00773em"},children:"R"})]})})]})," \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0432\u0435\u043a\u0442\u043e\u0440\u0430 \u043e\u0448\u0438\u0431\u043e\u043a \u043b\u0438\u043d\u0435\u0439\u043d\u043e\u0439 \u0440\u0435\u0433\u0440\u0435\u0441\u0441\u0438\u0438"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(a.p,{children:["\u0422\u0430\u043a\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c, \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c OMP ",(0,n.jsx)(a.strong,{children:"\u0436\u0430\u0434\u043d\u044b\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c"})," (greedy search) \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u0442 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e \u0441\u043a\u043e\u0440\u0440\u0435\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u0438 \u0441 \u043e\u0442\u043a\u043b\u0438\u043a\u043e\u043c \u043f\u043e \u043e\u0434\u043d\u043e\u043c\u0443, \u043f\u043e\u043a\u0430 \u043d\u0435 \u043d\u0430\u0431\u0435\u0440\u0451\u0442 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e."]}),"\n",(0,n.jsxs)(a.p,{children:["\u041c\u043e\u0436\u043d\u043e \u0434\u043e\u0441\u0440\u043e\u0447\u043d\u043e \u043f\u0440\u0435\u0440\u044b\u0432\u0430\u0442\u044c \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c, \u043a\u0430\u043a \u0442\u043e\u043b\u044c\u043a\u043e \u0441\u0440\u0435\u0434\u043d\u0438\u0435 \u043f\u043e\u0442\u0435\u0440\u0438 \u043c\u043e\u0434\u0435\u043b\u0438 \u0441\u0442\u0430\u043d\u043e\u0432\u044f\u0442\u0441\u044f \u043d\u0438\u0436\u0435 \u0437\u0430\u0434\u0430\u043d\u043d\u043e\u0433\u043e \u043f\u043e\u0440\u043e\u0433\u0430. \u0412 \u044d\u0442\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0438 \u043c\u0435\u043d\u044c\u0448\u0435 ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsx)(a.mrow,{children:(0,n.jsx)(a.mi,{children:"K"})}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"K"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.6833em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.07153em"},children:"K"})]})})]}),"."]}),"\n",(0,n.jsx)(a.admonition,{title:"\u0410\u043b\u044c\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u043d\u044b\u0439 \u043f\u043e\u0434\u0445\u043e\u0434",type:"tip",children:(0,n.jsxs)(a.p,{children:["\u0414\u043b\u044f \u0440\u0435\u0448\u0435\u043d\u0438\u044f \u043f\u0435\u0440\u0435\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0451\u043d\u043d\u043e\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u0438\u043b\u0438 \u043f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u0438\u044f \u043c\u043e\u0434\u0435\u043b\u0438 \u0441 \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u043c \u0447\u0438\u0441\u043b\u043e\u043c \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432 \u0442\u0430\u043a\u0436\u0435 \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043b\u0430\u0441\u0441\u043e-\u0440\u0435\u0433\u0440\u0435\u0441\u0441\u0438\u044e \u0441 \u043f\u043e\u0434\u0431\u0438\u0440\u0430\u0435\u043c\u044b\u043c \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u043c ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsx)(a.mrow,{children:(0,n.jsx)(a.mi,{children:"\u03bb"})}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"\\lambda"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.6944em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"\u03bb"})]})})]}),"."]})})]})}function x(s={}){const{wrapper:a}={...(0,l.R)(),...s.components};return a?(0,n.jsx)(a,{...s,children:(0,n.jsx)(h,{...s})}):h(s)}},28453:(s,a,e)=>{e.d(a,{R:()=>t,x:()=>m});var n=e(96540);const l={},i=n.createContext(l);function t(s){const a=n.useContext(i);return n.useMemo((function(){return"function"==typeof s?s(a):{...a,...s}}),[a,s])}function m(s){let a;return a=s.disableParentContext?"function"==typeof s.components?s.components(l):s.components||l:t(s.components),n.createElement(i.Provider,{value:a},s.children)}}}]);