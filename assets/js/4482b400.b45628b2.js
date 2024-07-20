"use strict";(self.webpackChunksite_new=self.webpackChunksite_new||[]).push([[1891],{7768:(s,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>m,default:()=>d,frontMatter:()=>i,metadata:()=>t,toc:()=>r});var l=a(4848),n=a(8453);const i={description:""},m="\u0420\u0430\u043d\u043d\u044f\u044f \u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0438 \u0437\u0430\u0448\u0443\u043c\u043b\u0435\u043d\u0438\u0435 \u0432\u0445\u043e\u0434\u043e\u0432",t={id:"docs_dl/Regularization/Early-stopping",title:"\u0420\u0430\u043d\u043d\u044f\u044f \u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0438 \u0437\u0430\u0448\u0443\u043c\u043b\u0435\u043d\u0438\u0435 \u0432\u0445\u043e\u0434\u043e\u0432",description:"",source:"@site/docs/docs_dl/06-Regularization/05-Early-stopping.md",sourceDirName:"docs_dl/06-Regularization",slug:"/docs_dl/Regularization/Early-stopping",permalink:"/docs/docs_dl/Regularization/Early-stopping",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{description:""},sidebar:"docs_dl",previous:{title:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0432\u0435\u0441\u043e\u0432 \u0434\u0440\u0443\u0433\u043e\u0439 \u0441\u0435\u0442\u0438",permalink:"/docs/docs_dl/Regularization/Weights-transfer"},next:{title:"\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u0435 \u043e\u0431\u0443\u0447\u0430\u044e\u0449\u0435\u0439 \u0432\u044b\u0431\u043e\u0440\u043a\u0438",permalink:"/docs/docs_dl/Regularization/Augmentation"}},c={},r=[{value:"\u0420\u0430\u043d\u043d\u044f\u044f \u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430",id:"\u0440\u0430\u043d\u043d\u044f\u044f-\u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430",level:2},{value:"\u0417\u0430\u0448\u0443\u043c\u043b\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445",id:"\u0437\u0430\u0448\u0443\u043c\u043b\u0435\u043d\u0438\u0435-\u0434\u0430\u043d\u043d\u044b\u0445",level:2},{value:"\u041b\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0430",id:"\u043b\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0430",level:2}];function h(s){const e={a:"a",annotation:"annotation",h1:"h1",h2:"h2",img:"img",li:"li",math:"math",mfrac:"mfrac",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",mspace:"mspace",mstyle:"mstyle",msub:"msub",msup:"msup",mtext:"mtext",munder:"munder",munderover:"munderover",ol:"ol",p:"p",semantics:"semantics",span:"span",...(0,n.R)(),...s.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h1,{id:"\u0440\u0430\u043d\u043d\u044f\u044f-\u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430-\u0438-\u0437\u0430\u0448\u0443\u043c\u043b\u0435\u043d\u0438\u0435-\u0432\u0445\u043e\u0434\u043e\u0432",children:"\u0420\u0430\u043d\u043d\u044f\u044f \u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0438 \u0437\u0430\u0448\u0443\u043c\u043b\u0435\u043d\u0438\u0435 \u0432\u0445\u043e\u0434\u043e\u0432"}),"\n",(0,l.jsx)(e.h2,{id:"\u0440\u0430\u043d\u043d\u044f\u044f-\u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430",children:"\u0420\u0430\u043d\u043d\u044f\u044f \u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430"}),"\n",(0,l.jsx)(e.p,{children:"\u0420\u0430\u043d\u043d\u044f\u044f \u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 (early stopping) - \u0434\u0440\u0443\u0433\u043e\u0439 \u043f\u0440\u0438\u043c\u0435\u0440 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f \u043d\u0435\u0439\u0440\u043e\u0441\u0435\u0442\u0438, \u0447\u0442\u043e\u0431\u044b \u0443\u043c\u0435\u043d\u044c\u0448\u0438\u0442\u044c \u0435\u0451 \u0441\u0442\u0435\u043f\u0435\u043d\u044c \u043f\u0435\u0440\u0435\u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f. \u0414\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u043d\u0443\u0436\u043d\u043e \u043e\u0442\u0441\u043b\u0435\u0436\u0438\u0432\u0430\u0442\u044c \u043f\u043e\u0442\u0435\u0440\u0438 \u043c\u043e\u0434\u0435\u043b\u0438 \u0432\u043e \u0432\u0440\u0435\u043c\u044f \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f \u043a\u0430\u043a \u043d\u0430 \u043e\u0431\u0443\u0447\u0430\u044e\u0449\u0435\u0439, \u0442\u0430\u043a \u0438 \u043d\u0430 \u0432\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0439 \u0432\u044b\u0431\u043e\u0440\u043a\u0435 \u0438 \u0437\u0430\u0440\u0430\u043d\u0435\u0435 \u043e\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435, \u043a\u043e\u0433\u0434\u0430 \u043f\u043e\u0442\u0435\u0440\u0438 \u043d\u0430 \u0432\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u0438 \u043d\u0430\u0447\u043d\u0443\u0442 \u0440\u0430\u0441\u0442\u0438:"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{src:a(3233).A+"",width:"855",height:"482"})}),"\n",(0,l.jsx)(e.p,{children:"\u041f\u043e\u0441\u043b\u0435 \u043f\u0443\u043d\u043a\u0442\u0438\u0440\u043d\u043e\u0439 \u043b\u0438\u043d\u0438\u0438 \u043c\u043e\u0434\u0435\u043b\u044c \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442 \u043d\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u0447\u0430\u0441\u0442\u043d\u044b\u0435 \u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u043e\u0431\u0443\u0447\u0430\u044e\u0449\u0435\u0439 \u0432\u044b\u0431\u043e\u0440\u043a\u0438 - \u0441\u043f\u0435\u0446\u0438\u0444\u0438\u043a\u0443 \u043e\u0431\u0443\u0447\u0430\u044e\u0449\u0438\u0445 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432, \u0448\u0443\u043c \u0432 \u0434\u0430\u043d\u043d\u044b\u0445, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u0438\u043c\u0435\u0435\u0442 \u0441\u043c\u044b\u0441\u043b \u0437\u0430\u0440\u0430\u043d\u0435\u0435 \u043f\u0440\u0435\u0440\u0432\u0430\u0442\u044c \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435, \u043f\u043e\u043b\u0443\u0447\u0438\u0432 \u0431\u043e\u043b\u0435\u0435 \u043f\u0440\u043e\u0441\u0442\u0443\u044e (\u0437\u0430 \u0441\u0447\u0451\u0442 \u043c\u0435\u043d\u0435 \u0442\u0449\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0439 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438) \u043c\u043e\u0434\u0435\u043b\u044c."}),"\n",(0,l.jsx)(e.h2,{id:"\u0437\u0430\u0448\u0443\u043c\u043b\u0435\u043d\u0438\u0435-\u0434\u0430\u043d\u043d\u044b\u0445",children:"\u0417\u0430\u0448\u0443\u043c\u043b\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445"}),"\n",(0,l.jsx)(e.p,{children:"\u0414\u0440\u0443\u0433\u0438\u043c \u043f\u0440\u0438\u0451\u043c\u043e\u043c \u0443\u043f\u0440\u043e\u0449\u0435\u043d\u0438\u044f \u043c\u043e\u0434\u0435\u043b\u0438 \u0441\u043b\u0443\u0436\u0438\u0442 \u0435\u0451 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 \u043d\u0430 \u0437\u0430\u0448\u0443\u043c\u043b\u0451\u043d\u043d\u044b\u0445 \u0432\u0435\u0440\u0441\u0438\u044f\u0445 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432:"}),"\n",(0,l.jsx)(e.span,{className:"katex-display",children:(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mo,{stretchy:"false",children:"("}),(0,l.jsx)(e.mi,{children:"x"}),(0,l.jsx)(e.mo,{separator:"true",children:","}),(0,l.jsx)(e.mi,{children:"y"}),(0,l.jsx)(e.mo,{stretchy:"false",children:")"}),(0,l.jsx)(e.mo,{children:"\u2192"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"("}),(0,l.jsx)(e.mi,{children:"x"}),(0,l.jsx)(e.mo,{children:"+"}),(0,l.jsx)(e.mi,{children:"\u03b5"}),(0,l.jsx)(e.mo,{separator:"true",children:","}),(0,l.jsx)(e.mi,{children:"y"}),(0,l.jsx)(e.mo,{stretchy:"false",children:")"}),(0,l.jsx)(e.mo,{separator:"true",children:","})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"(x,y) \\to (x+\\varepsilon,y),"})]})})}),(0,l.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(e.span,{className:"mopen",children:"("}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,l.jsx)(e.span,{className:"mpunct",children:","}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,l.jsx)(e.span,{className:"mclose",children:")"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(e.span,{className:"mrel",children:"\u2192"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(e.span,{className:"mopen",children:"("}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mbin",children:"+"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"\u03b5"}),(0,l.jsx)(e.span,{className:"mpunct",children:","}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,l.jsx)(e.span,{className:"mclose",children:")"}),(0,l.jsx)(e.span,{className:"mpunct",children:","})]})]})]})}),"\n",(0,l.jsxs)(e.p,{children:["\u0433\u0434\u0435 ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsx)(e.mrow,{children:(0,l.jsx)(e.mi,{children:"\u03b5"})}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\varepsilon"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"\u03b5"})]})})]})," - \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u044b\u0439 \u0448\u0443\u043c, \u043e\u0431\u043b\u0430\u0434\u0430\u044e\u0449\u0438\u0439 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430\u043c\u0438:"]}),"\n",(0,l.jsx)(e.span,{className:"katex-display",children:(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{mathvariant:"double-struck",children:"E"}),(0,l.jsx)(e.mi,{children:"\u03b5"}),(0,l.jsx)(e.mo,{children:"="}),(0,l.jsx)(e.mn,{children:"0"}),(0,l.jsx)(e.mo,{separator:"true",children:","}),(0,l.jsx)(e.mspace,{width:"1em"}),(0,l.jsx)(e.mtext,{children:"cov"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"{"}),(0,l.jsx)(e.mi,{children:"\u03b5"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"}"}),(0,l.jsx)(e.mo,{children:"="}),(0,l.jsx)(e.mi,{children:"\u03bb"}),(0,l.jsx)(e.mi,{children:"I"}),(0,l.jsx)(e.mo,{separator:"true",children:","})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\mathbb{E}\\varepsilon = 0, \\quad  \\text{cov}\\{\\varepsilon\\}=\\lambda I,"})]})})}),(0,l.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.6889em"}}),(0,l.jsx)(e.span,{className:"mord mathbb",children:"E"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"\u03b5"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(e.span,{className:"mrel",children:"="}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(e.span,{className:"mord",children:"0"}),(0,l.jsx)(e.span,{className:"mpunct",children:","}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"1em"}}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,l.jsx)(e.span,{className:"mord text",children:(0,l.jsx)(e.span,{className:"mord",children:"cov"})}),(0,l.jsx)(e.span,{className:"mopen",children:"{"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"\u03b5"}),(0,l.jsx)(e.span,{className:"mclose",children:"}"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(e.span,{className:"mrel",children:"="}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"\u03bb"}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07847em"},children:"I"}),(0,l.jsx)(e.span,{className:"mpunct",children:","})]})]})]})}),"\n",(0,l.jsxs)(e.p,{children:["\u0433\u0434\u0435 ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsx)(e.mrow,{children:(0,l.jsx)(e.mi,{children:"I"})}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"I"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.6833em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07847em"},children:"I"})]})})]})," - \u0435\u0434\u0438\u043d\u0438\u0447\u043d\u0430\u044f \u043c\u0430\u0442\u0440\u0438\u0446\u0430. \u041f\u0440\u0438 \u044d\u0442\u043e\u043c \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u043c\u043e\u0434\u0435\u043b\u0438 \u043e\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043d\u0430 \u0438\u0441\u0445\u043e\u0434\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 \u0431\u0435\u0437 \u0437\u0430\u0448\u0443\u043c\u043b\u0435\u043d\u0438\u044f."]}),"\n",(0,l.jsxs)(e.p,{children:["\u0412 ",(0,l.jsx)(e.a,{href:"http://publications.aston.ac.uk/id/eprint/524/",children:"[1]"})," \u0434\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f, \u0447\u0442\u043e \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 \u0440\u0435\u0433\u0440\u0435\u0441\u0438\u0438 ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"f"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"("}),(0,l.jsx)(e.mi,{children:"x"}),(0,l.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"f(x)"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,l.jsx)(e.span,{className:"mopen",children:"("}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,l.jsx)(e.span,{className:"mclose",children:")"})]})})]}),", \u043c\u0438\u043d\u0438\u043c\u0438\u0437\u0438\u0440\u0443\u044f MSE \u043a\u0440\u0438\u0442\u0435\u0440\u0438\u0439 \u043d\u0430 \u0437\u0430\u0448\u0443\u043c\u043b\u0451\u043d\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 \u044d\u043a\u0432\u0438\u0432\u0430\u043b\u0435\u043d\u0442\u043d\u043e \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044e \u0441\u0435\u0442\u0438 \u043d\u0430 \u043d\u0435\u0437\u0430\u0448\u0443\u043c\u043b\u0451\u043d\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 \u0441 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0439 \u0440\u0435\u0433\u0443\u043b\u044f\u0440\u0438\u0437\u0430\u0446\u0438\u0438:"]}),"\n",(0,l.jsx)(e.span,{className:"katex-display",children:(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsxs)(e.mfrac,{children:[(0,l.jsx)(e.mn,{children:"1"}),(0,l.jsx)(e.mi,{children:"N"})]}),(0,l.jsxs)(e.munderover,{children:[(0,l.jsx)(e.mo,{children:"\u2211"}),(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"n"}),(0,l.jsx)(e.mo,{children:"="}),(0,l.jsx)(e.mn,{children:"1"})]}),(0,l.jsx)(e.mi,{children:"N"})]}),(0,l.jsx)(e.mo,{stretchy:"false",children:"("}),(0,l.jsx)(e.mi,{children:"f"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"("}),(0,l.jsxs)(e.msub,{children:[(0,l.jsx)(e.mi,{children:"x"}),(0,l.jsx)(e.mi,{children:"n"})]}),(0,l.jsx)(e.mo,{stretchy:"false",children:")"}),(0,l.jsx)(e.mo,{children:"\u2212"}),(0,l.jsxs)(e.msub,{children:[(0,l.jsx)(e.mi,{children:"y"}),(0,l.jsx)(e.mi,{children:"n"})]}),(0,l.jsxs)(e.msup,{children:[(0,l.jsx)(e.mo,{stretchy:"false",children:")"}),(0,l.jsx)(e.mn,{children:"2"})]}),(0,l.jsx)(e.mo,{children:"+"}),(0,l.jsxs)(e.mstyle,{mathcolor:"red",children:[(0,l.jsx)(e.mi,{children:"\u03bb"}),(0,l.jsx)(e.mi,{mathvariant:"normal",children:"\u2225"}),(0,l.jsxs)(e.msub,{children:[(0,l.jsx)(e.mi,{mathvariant:"normal",children:"\u2207"}),(0,l.jsx)(e.mi,{children:"x"})]}),(0,l.jsx)(e.mi,{children:"f"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"("}),(0,l.jsx)(e.mi,{children:"x"}),(0,l.jsx)(e.mo,{stretchy:"false",children:")"}),(0,l.jsxs)(e.msup,{children:[(0,l.jsx)(e.mi,{mathvariant:"normal",children:"\u2225"}),(0,l.jsx)(e.mn,{children:"2"})]})]}),(0,l.jsx)(e.mo,{children:"\u2192"}),(0,l.jsxs)(e.munder,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"min"}),(0,l.jsx)(e.mo,{children:"\u2061"})]}),(0,l.jsx)(e.mi,{children:"w"})]})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\frac{1}{N}\\sum_{n=1}^N (f(x_n)-y_n)^2 + \\textcolor{red}{\\lambda \\| \\nabla_x f(x) \\|^2} \\to \\min_w"})]})})}),(0,l.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"3.0954em",verticalAlign:"-1.2671em"}}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mopen nulldelimiter"}),(0,l.jsx)(e.span,{className:"mfrac",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsxs)(e.span,{className:"vlist",style:{height:"1.3214em"},children:[(0,l.jsxs)(e.span,{style:{top:"-2.314em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(e.span,{className:"mord",children:(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"})})]}),(0,l.jsxs)(e.span,{style:{top:"-3.23em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(e.span,{className:"frac-line",style:{borderBottomWidth:"0.04em"}})]}),(0,l.jsxs)(e.span,{style:{top:"-3.677em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(e.span,{className:"mord",children:(0,l.jsx)(e.span,{className:"mord",children:"1"})})]})]}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.686em"},children:(0,l.jsx)(e.span,{})})})]})}),(0,l.jsx)(e.span,{className:"mclose nulldelimiter"})]}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,l.jsx)(e.span,{className:"mop op-limits",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsxs)(e.span,{className:"vlist",style:{height:"1.8283em"},children:[(0,l.jsxs)(e.span,{style:{top:"-1.8829em",marginLeft:"0em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3.05em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsxs)(e.span,{className:"mord mtight",children:[(0,l.jsx)(e.span,{className:"mord mathnormal mtight",children:"n"}),(0,l.jsx)(e.span,{className:"mrel mtight",children:"="}),(0,l.jsx)(e.span,{className:"mord mtight",children:"1"})]})})]}),(0,l.jsxs)(e.span,{style:{top:"-3.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3.05em"}}),(0,l.jsx)(e.span,{children:(0,l.jsx)(e.span,{className:"mop op-symbol large-op",children:"\u2211"})})]}),(0,l.jsxs)(e.span,{style:{top:"-4.3em",marginLeft:"0em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3.05em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.10903em"},children:"N"})})]})]}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"1.2671em"},children:(0,l.jsx)(e.span,{})})})]})}),(0,l.jsx)(e.span,{className:"mopen",children:"("}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,l.jsx)(e.span,{className:"mopen",children:"("}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.1514em"},children:(0,l.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mathnormal mtight",children:"n"})})]})}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,l.jsx)(e.span,{})})})]})})]}),(0,l.jsx)(e.span,{className:"mclose",children:")"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mbin",children:"\u2212"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1.1141em",verticalAlign:"-0.25em"}}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.1514em"},children:(0,l.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0359em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mathnormal mtight",children:"n"})})]})}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,l.jsx)(e.span,{})})})]})})]}),(0,l.jsxs)(e.span,{className:"mclose",children:[(0,l.jsx)(e.span,{className:"mclose",children:")"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsx)(e.span,{className:"vlist-t",children:(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.8641em"},children:(0,l.jsxs)(e.span,{style:{top:"-3.113em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"2"})})]})})})})})]}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mbin",children:"+"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1.1141em",verticalAlign:"-0.25em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{color:"red"},children:"\u03bb"}),(0,l.jsx)(e.span,{className:"mord",style:{color:"red"},children:"\u2225"}),(0,l.jsxs)(e.span,{className:"mord",style:{color:"red"},children:[(0,l.jsx)(e.span,{className:"mord",style:{color:"red"},children:"\u2207"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.1514em"},children:(0,l.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",style:{color:"red"},children:(0,l.jsx)(e.span,{className:"mord mathnormal mtight",style:{color:"red"},children:"x"})})]})}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,l.jsx)(e.span,{})})})]})})]}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10764em",color:"red"},children:"f"}),(0,l.jsx)(e.span,{className:"mopen",style:{color:"red"},children:"("}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{color:"red"},children:"x"}),(0,l.jsx)(e.span,{className:"mclose",style:{color:"red"},children:")"}),(0,l.jsxs)(e.span,{className:"mord",style:{color:"red"},children:[(0,l.jsx)(e.span,{className:"mord",style:{color:"red"},children:"\u2225"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsx)(e.span,{className:"vlist-t",children:(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.8641em"},children:(0,l.jsxs)(e.span,{style:{top:"-3.113em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",style:{color:"red"},children:(0,l.jsx)(e.span,{className:"mord mtight",style:{color:"red"},children:"2"})})]})})})})})]}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(e.span,{className:"mrel",children:"\u2192"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1.3679em",verticalAlign:"-0.7em"}}),(0,l.jsx)(e.span,{className:"mop op-limits",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsxs)(e.span,{className:"vlist",style:{height:"0.6679em"},children:[(0,l.jsxs)(e.span,{style:{top:"-2.4em",marginLeft:"0em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.02691em"},children:"w"})})]}),(0,l.jsxs)(e.span,{style:{top:"-3em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(e.span,{children:(0,l.jsx)(e.span,{className:"mop",children:"min"})})]})]}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.7em"},children:(0,l.jsx)(e.span,{})})})]})})]})]})]})}),"\n",(0,l.jsxs)(e.p,{children:["\u0422\u0430\u043a\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c, \u043f\u043e \u0441\u0443\u0442\u0438 \u0437\u0430\u0448\u0443\u043c\u043b\u0435\u043d\u0438\u0435 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432 \u0442\u0440\u0435\u0431\u0443\u0435\u0442 \u043e\u0442 \u043c\u043e\u0434\u0435\u043b\u0438, \u0447\u0442\u043e\u0431\u044b \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u0435\u0451 \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u043e\u0432 \u0431\u044b\u043b\u043e \u043c\u0435\u043d\u0435\u0435 \u0440\u0435\u0437\u043a\u0438\u043c \u043f\u0440\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0438 \u0432\u0435\u043a\u0442\u043e\u0440\u0430 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432 ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsx)(e.mrow,{children:(0,l.jsx)(e.mi,{children:"x"})}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"x"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"x"})]})})]}),". \u0412 \u0441\u043b\u0443\u0447\u0430\u0435, \u043a\u043e\u0433\u0434\u0430 ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"f"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"("}),(0,l.jsx)(e.mi,{children:"x"}),(0,l.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"f(x)"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,l.jsx)(e.span,{className:"mopen",children:"("}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,l.jsx)(e.span,{className:"mclose",children:")"})]})})]})," - \u043b\u0438\u043d\u0435\u0439\u043d\u0430\u044f \u0440\u0435\u0433\u0440\u0435\u0441\u0441\u0438\u044f, \u0437\u0430\u0448\u0443\u043c\u043b\u0435\u043d\u0438\u0435 \u044d\u043a\u0432\u0438\u0432\u0430\u043b\u0435\u043d\u0442\u043d\u043e ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsx)(e.mrow,{children:(0,l.jsxs)(e.msub,{children:[(0,l.jsx)(e.mi,{children:"L"}),(0,l.jsx)(e.mn,{children:"2"})]})}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"L_2"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.8333em",verticalAlign:"-0.15em"}}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord mathnormal",children:"L"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,l.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"2"})})]})}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,l.jsx)(e.span,{})})})]})})]})]})})]})," \u0440\u0435\u0433\u0443\u043b\u044f\u0440\u0438\u0437\u0430\u0446\u0438\u0438 \u0432\u0435\u0441\u043e\u0432, \u0447\u0442\u043e ",(0,l.jsx)(e.a,{href:"../../docs_ml/Linear-regression-extensions/Regularization-in-linear-regression#%D1%80%D0%B5%D0%B3%D1%83%D0%BB%D1%8F%D1%80%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F-%D0%B7%D0%B0%D1%88%D1%83%D0%BC%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5%D0%BC-%D0%B2%D1%85%D0%BE%D0%B4%D0%BE%D0%B2",children:"\u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u043b\u043e\u0441\u044c \u0440\u0430\u043d\u0435\u0435"}),"."]}),"\n",(0,l.jsx)(e.h2,{id:"\u043b\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0430",children:"\u041b\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0430"}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsx)(e.li,{children:"Bishop C. M. Regularization and complexity control in feed-forward networks. \u2013 1995."}),"\n"]})]})}function d(s={}){const{wrapper:e}={...(0,n.R)(),...s.components};return e?(0,l.jsx)(e,{...s,children:(0,l.jsx)(h,{...s})}):h(s)}},3233:(s,e,a)=>{a.d(e,{A:()=>l});const l=a.p+"assets/images/04-early-stopping-f69d75dfa5bfda30936e4c13e3245ca1.png"},8453:(s,e,a)=>{a.d(e,{R:()=>m,x:()=>t});var l=a(6540);const n={},i=l.createContext(n);function m(s){const e=l.useContext(i);return l.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function t(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(n):s.components||n:m(s.components),l.createElement(i.Provider,{value:e},s.children)}}}]);