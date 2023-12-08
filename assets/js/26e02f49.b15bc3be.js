"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[130],{4e3:(s,e,a)=>{a.r(e),a.d(e,{assets:()=>r,contentTitle:()=>m,default:()=>d,frontMatter:()=>l,metadata:()=>t,toc:()=>c});var n=a(5893),i=a(1151);const l={description:""},m="\u0427\u0430\u0441\u0442\u0438\u0447\u043d\u043e\u0435 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435",t={id:"Base-concepts/Semi-supervised learning",title:"\u0427\u0430\u0441\u0442\u0438\u0447\u043d\u043e\u0435 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435",description:"",source:"@site/docs/02-Base-concepts/10-Semi-supervised learning.md",sourceDirName:"02-Base-concepts",slug:"/Base-concepts/Semi-supervised learning",permalink:"/deepmachinelearning.ru/docs/Base-concepts/Semi-supervised learning",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{description:""},sidebar:"tutorialSidebar",previous:{title:"\u041e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 \u0431\u0435\u0437 \u0443\u0447\u0438\u0442\u0435\u043b\u044f",permalink:"/deepmachinelearning.ru/docs/Base-concepts/Unsupervised learning"},next:{title:"\u041f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0430 \u0434\u0430\u043d\u043d\u044b\u0445",permalink:"/deepmachinelearning.ru/docs/category/\u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0430-\u0434\u0430\u043d\u043d\u044b\u0445"}},r={},c=[];function h(s){const e={admonition:"admonition",annotation:"annotation",h1:"h1",img:"img",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msub:"msub",p:"p",semantics:"semantics",span:"span",strong:"strong",...(0,i.a)(),...s.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"\u0447\u0430\u0441\u0442\u0438\u0447\u043d\u043e\u0435-\u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435",children:"\u0427\u0430\u0441\u0442\u0438\u0447\u043d\u043e\u0435 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435"}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.strong,{children:"\u0427\u0430\u0441\u0442\u0438\u0447\u043d\u043e\u0435 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435"})," (semi-supervised learning) \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0441\u043e\u0431\u043e\u0439 \u043f\u0440\u043e\u043c\u0435\u0436\u0443\u0442\u043e\u0447\u043d\u044b\u0439 \u0441\u043b\u0443\u0447\u0430\u0439 \u043c\u0435\u0436\u0434\u0443 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435\u043c \u0441 \u0443\u0447\u0438\u0442\u0435\u043b\u0435\u043c (\u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u0432\u0441\u0435 \u043e\u0431\u044a\u0435\u043a\u0442\u044b \u043e\u0431\u0443\u0447\u0430\u044e\u0449\u0435\u0439 \u0432\u044b\u0431\u043e\u0440\u043a\u0438 \u0440\u0430\u0437\u043c\u0435\u0447\u0435\u043d\u044b) \u0438 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435\u043c \u0431\u0435\u0437 \u0443\u0447\u0438\u0442\u0435\u043b\u044f (\u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u043d\u0438 \u043e\u0434\u0438\u043d \u0438\u0437 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u043e\u0431\u0443\u0447\u0430\u044e\u0449\u0435\u0439 \u0432\u044b\u0431\u043e\u0440\u043a\u0438 \u043d\u0435 \u0440\u0430\u0437\u043c\u0435\u0447\u0435\u043d). \u0412 \u0447\u0430\u0441\u0442\u0438\u0447\u043d\u043e\u043c \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0438 \u0447\u0430\u0441\u0442\u044c \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u0438\u043c\u0435\u044e\u0442 \u0440\u0430\u0437\u043c\u0435\u0442\u043a\u0443, \u0430 \u0447\u0430\u0441\u0442\u044c - \u043d\u0435\u0442, \u0438 \u043e\u0431\u0443\u0447\u0430\u044e\u0449\u0430\u044f \u0432\u044b\u0431\u043e\u0440\u043a\u0430 \u0438\u043c\u0435\u0435\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0432\u0438\u0434:"]}),"\n",(0,n.jsx)(e.span,{className:"katex-display",children:(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"x"}),(0,n.jsx)(e.mn,{children:"1"})]}),(0,n.jsx)(e.mo,{separator:"true",children:","}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"y"}),(0,n.jsx)(e.mn,{children:"1"})]}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"}),(0,n.jsx)(e.mo,{separator:"true",children:","}),(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"x"}),(0,n.jsx)(e.mn,{children:"2"})]}),(0,n.jsx)(e.mo,{separator:"true",children:","}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"y"}),(0,n.jsx)(e.mn,{children:"2"})]}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"}),(0,n.jsx)(e.mo,{separator:"true",children:","}),(0,n.jsx)(e.mi,{mathvariant:"normal",children:"."}),(0,n.jsx)(e.mi,{mathvariant:"normal",children:"."}),(0,n.jsx)(e.mi,{mathvariant:"normal",children:"."}),(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"x"}),(0,n.jsx)(e.mi,{children:"N"})]}),(0,n.jsx)(e.mo,{separator:"true",children:","}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"y"}),(0,n.jsx)(e.mi,{children:"N"})]}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"}),(0,n.jsx)(e.mo,{separator:"true",children:","}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"x"}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"N"}),(0,n.jsx)(e.mo,{children:"+"}),(0,n.jsx)(e.mn,{children:"1"})]})]}),(0,n.jsx)(e.mo,{separator:"true",children:","}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"x"}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"N"}),(0,n.jsx)(e.mo,{children:"+"}),(0,n.jsx)(e.mn,{children:"2"})]})]}),(0,n.jsx)(e.mo,{separator:"true",children:","}),(0,n.jsx)(e.mi,{mathvariant:"normal",children:"."}),(0,n.jsx)(e.mi,{mathvariant:"normal",children:"."}),(0,n.jsx)(e.mi,{mathvariant:"normal",children:"."}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"x"}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"N"}),(0,n.jsx)(e.mo,{children:"+"}),(0,n.jsx)(e.mi,{children:"M"})]})]})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"(x_1,y_1),(x_2,y_2),...(x_N,y_N),x_{N+1},x_{N+2},...x_{N+M}"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"1"})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsx)(e.span,{className:"mpunct",children:","}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0359em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"1"})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsx)(e.span,{className:"mclose",children:")"}),(0,n.jsx)(e.span,{className:"mpunct",children:","}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"2"})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsx)(e.span,{className:"mpunct",children:","}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0359em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"2"})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsx)(e.span,{className:"mclose",children:")"}),(0,n.jsx)(e.span,{className:"mpunct",children:","}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(e.span,{className:"mord",children:"..."}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3283em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.10903em"},children:"N"})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsx)(e.span,{className:"mpunct",children:","}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3283em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0359em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.10903em"},children:"N"})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsx)(e.span,{className:"mclose",children:")"}),(0,n.jsx)(e.span,{className:"mpunct",children:","}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3283em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsxs)(e.span,{className:"mord mtight",children:[(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.10903em"},children:"N"}),(0,n.jsx)(e.span,{className:"mbin mtight",children:"+"}),(0,n.jsx)(e.span,{className:"mord mtight",children:"1"})]})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.2083em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsx)(e.span,{className:"mpunct",children:","}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3283em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsxs)(e.span,{className:"mord mtight",children:[(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.10903em"},children:"N"}),(0,n.jsx)(e.span,{className:"mbin mtight",children:"+"}),(0,n.jsx)(e.span,{className:"mord mtight",children:"2"})]})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.2083em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsx)(e.span,{className:"mpunct",children:","}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(e.span,{className:"mord",children:"..."}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3283em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsxs)(e.span,{className:"mord mtight",children:[(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.10903em"},children:"N"}),(0,n.jsx)(e.span,{className:"mbin mtight",children:"+"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.10903em"},children:"M"})]})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.2083em"},children:(0,n.jsx)(e.span,{})})})]})})]})]})})]})}),"\n",(0,n.jsx)(e.admonition,{title:"\u0422\u0440\u0430\u043d\u0441\u0434\u0443\u043a\u0442\u0438\u0432\u043d\u043e\u0435 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 - \u0447\u0430\u0441\u0442\u043d\u044b\u0439 \u0441\u043b\u0443\u0447\u0430\u0439",type:"tip",children:(0,n.jsx)(e.p,{children:"\u0417\u0430\u0434\u0430\u0447\u0430 \u0442\u0440\u0430\u043d\u0441\u0434\u0443\u043a\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f (transductive learning), \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u0437\u0430\u0440\u0430\u043d\u0435\u0435 \u0438\u0437\u0432\u0435\u0441\u0442\u043d\u044b \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432\u044b\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u0442\u0435\u0441\u0442\u043e\u0432\u043e\u0439 \u0432\u044b\u0431\u043e\u0440\u043a\u0438 (\u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u0432 \u043a\u043e\u043d\u0435\u0447\u043d\u043e\u043c \u0441\u0447\u0435\u0442\u0435 \u043c\u044b \u0445\u043e\u0442\u0438\u043c \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c \u043d\u0430\u0448\u0443 \u043c\u043e\u0434\u0435\u043b\u044c), \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0441\u043e\u0431\u043e\u0439 \u0447\u0430\u0441\u0442\u043d\u044b\u0439 \u0441\u043b\u0443\u0447\u0430\u0439 \u0447\u0430\u0441\u0442\u0438\u0447\u043d\u043e\u0433\u043e \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f \u0438 \u043a \u043d\u0435\u0439 \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u044b \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0435 \u043f\u043e\u0434\u0445\u043e\u0434\u044b."})}),"\n",(0,n.jsx)(e.p,{children:"\u0423\u043f\u0440\u043e\u0449\u0435\u043d\u043d\u044b\u0439 \u043f\u0440\u0438\u043c\u0435\u0440 \u0447\u0430\u0441\u0442\u0438\u0447\u043d\u043e\u0433\u043e \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f \u043f\u0440\u0438\u0432\u0435\u0434\u0451\u043d \u043d\u0438\u0436\u0435 \u043d\u0430 \u0433\u0440\u0430\u0444\u0438\u043a\u0435 \u0441\u043b\u0435\u0432\u0430 \u0434\u043b\u044f \u0437\u0430\u0434\u0430\u0447\u0438 \u0431\u0438\u043d\u0430\u0440\u043d\u043e\u0439 \u043a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438 \u0434\u0432\u0443\u043c\u0435\u0440\u043d\u044b\u0445 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432, \u043e\u0431\u043e\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044b\u0445 \u043a\u0432\u0430\u0434\u0440\u0430\u0442\u0430\u043c\u0438. \u0418\u0437\u043d\u0430\u0447\u0430\u043b\u044c\u043d\u043e \u0432 \u0432\u044b\u0431\u043e\u0440\u043a\u0435 \u0440\u0430\u0437\u043c\u0435\u0447\u0435\u043d\u043e \u0432\u0441\u0435\u0433\u043e \u0434\u0432\u0430 \u043a\u0432\u0430\u0434\u0440\u0430\u0442\u0430 (\u0432 \u0441\u0438\u043d\u0438\u0439 \u0438 \u043a\u0440\u0430\u0441\u043d\u044b\u0439 \u043a\u043b\u0430\u0441\u0441). \u041b\u0443\u0447\u0448\u0435\u0435, \u0447\u0442\u043e \u043c\u044b \u043c\u043e\u0436\u0435\u043c \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0441 \u044d\u0442\u043e\u0439 \u0440\u0430\u0437\u043c\u0435\u0442\u043a\u043e\u0439 - \u044d\u0442\u043e \u0440\u0430\u0437\u0434\u0435\u043b\u0438\u0442\u044c \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u043e \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432 \u043f\u0440\u044f\u043c\u043e\u0439, \u0440\u0430\u0432\u043d\u043e\u0443\u0434\u0430\u043b\u0451\u043d\u043d\u043e\u0439 \u043e\u0442 \u044d\u0442\u0438\u0445 \u0434\u0432\u0443\u0445 \u0442\u043e\u0447\u0435\u043a. \u041e\u0434\u043d\u0430\u043a\u043e \u0435\u0441\u043b\u0438 \u043c\u044b \u0431\u0443\u0434\u0435\u043c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0437\u043d\u0430\u043d\u0438\u0435 \u043e \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0438 \u043d\u0435\u0440\u0430\u0437\u043c\u0435\u0447\u0435\u043d\u043d\u044b\u0445 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 (\u0434\u0432\u0435 \u043a\u043e\u043d\u0446\u0435\u043d\u0442\u0440\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u043e\u043a\u0440\u0443\u0436\u043d\u043e\u0441\u0442\u0438) \u0438 \u043f\u0440\u0435\u0434\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043e \u0442\u043e\u043c, \u0447\u0442\u043e \u0431\u043b\u0438\u0437\u043a\u0438\u0435 \u043e\u0431\u044a\u0435\u043a\u0442\u044b \u043f\u0440\u0438\u043d\u0430\u0434\u043b\u0435\u0436\u0430\u0442 \u043e\u0434\u0438\u043d\u0430\u043a\u043e\u0432\u043e\u043c\u0443 \u043a\u043b\u0430\u0441\u0441\u0443, \u0442\u043e \u043c\u044b \u0441\u043c\u043e\u0436\u0435\u043c \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u043e \u0440\u0430\u0441\u0448\u0438\u0440\u0438\u0442\u044c \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u043e \u0440\u0430\u0437\u043c\u0435\u0447\u0435\u043d\u043d\u044b\u0445 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 (\u0433\u0440\u0430\u0444\u0438\u043a \u0441\u043f\u0440\u0430\u0432\u0430), \u0438\u0437 \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u0443\u0436\u0435 \u0435\u0441\u0442\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u0435\u0435 \u043f\u0440\u043e\u0432\u0435\u0441\u0442\u0438 \u0433\u0440\u0430\u043d\u0438\u0446\u0443 \u043c\u0435\u0436\u0434\u0443 \u043a\u043b\u0430\u0441\u0441\u0430\u043c\u0438 \u0432 \u0444\u043e\u0440\u043c\u0435 \u043e\u043a\u0440\u0443\u0436\u043d\u043e\u0441\u0442\u0438."}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"semi-supervised.png",src:a(3221).Z+"",width:"1091",height:"459"})}),"\n",(0,n.jsx)(e.admonition,{title:"\u041f\u0440\u0435\u0434\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043f\u043e\u0445\u043e\u0436\u0435\u0441\u0442\u0438 \u043e\u0442\u043a\u043b\u0438\u043a\u043e\u0432",type:"warning",children:(0,n.jsx)(e.p,{children:"\u041f\u0440\u0435\u0434\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043e \u0442\u043e\u043c, \u0447\u0442\u043e \u0431\u043b\u0438\u0437\u043a\u0438\u0435 \u043e\u0431\u044a\u0435\u043a\u0442\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u043f\u0440\u0438\u043d\u0430\u0434\u043b\u0435\u0436\u0430\u0442\u044c \u043e\u0434\u0438\u043d\u0430\u043a\u043e\u0432\u043e\u043c\u0443 \u043a\u043b\u0430\u0441\u0441\u0443 \u0442\u0440\u0435\u0431\u0443\u0435\u0442 \u0443\u0442\u043e\u0447\u043d\u0435\u043d\u0438\u044f. \u041d\u0430\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0431\u043b\u0438\u0437\u043a\u0438\u0435 \u043e\u0431\u044a\u0435\u043a\u0442\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u0438\u043c\u0435\u0442\u044c \u043e\u0434\u0438\u043d\u0430\u043a\u043e\u0432\u044b\u0439 \u043a\u043b\u0430\u0441\u0441? \u041d\u0430\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0440\u0430\u0437\u0443\u043c\u043d\u043e \u0434\u0435\u043b\u0430\u0442\u044c \u0442\u0430\u043a\u043e\u0435 \u043f\u0440\u0435\u0434\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0434\u043b\u044f \u0438\u043c\u0435\u044e\u0449\u0438\u0445\u0441\u044f \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432? \u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e, \u043a\u0430\u043a\u0438\u0435-\u0442\u043e \u0438\u0437 \u043d\u0438\u0445 \u043d\u0435 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0442\u0438\u0432\u043d\u044b \u0438 \u043d\u0435 \u0441\u0432\u044f\u0437\u0430\u043d\u044b \u0441 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0435\u0439 \u043e \u043a\u043b\u0430\u0441\u0441\u0435. \u042d\u0442\u043e \u0432\u0441\u0435\u0433\u043e \u043b\u0438\u0448\u044c \u043f\u0440\u0435\u0434\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0438 \u043d\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043e. \u0414\u043b\u044f \u0435\u0433\u043e \u0432\u0435\u0440\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438 \u043d\u0443\u0436\u043d\u0430 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u043d\u0430 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e\u0439 \u0432\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0439 \u0432\u044b\u0431\u043e\u0440\u043a\u0435."})}),"\n",(0,n.jsxs)(e.p,{children:["\u0427\u0442\u043e\u0431\u044b \u043f\u043e\u0434\u0445\u043e\u0434\u044b \u0447\u0430\u0441\u0442\u0438\u0447\u043d\u043e\u0433\u043e \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f \u0434\u0430\u043b\u0438 \u044d\u0444\u0444\u0435\u043a\u0442, \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e, \u0447\u0442\u043e\u0431\u044b ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"M"}),(0,n.jsx)(e.mo,{children:"\u226b"}),(0,n.jsx)(e.mi,{children:"N"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"M\\gg N"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.7224em",verticalAlign:"-0.0391em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"M"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:"\u226b"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6833em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"})]})]})]}),", \u0447\u0442\u043e \u0447\u0430\u0441\u0442\u043e \u043b\u0435\u0433\u043a\u043e \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0442\u044c \u043d\u0430 \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0435. \u0420\u0430\u0437\u043c\u0435\u0442\u043a\u0430 \u043e\u0431\u0443\u0447\u0430\u044e\u0449\u0435\u0439 \u0432\u044b\u0431\u043e\u0440\u043a\u0438 \u0442\u0440\u0435\u0431\u0443\u0435\u0442 \u043f\u0440\u0438\u0432\u043b\u0435\u0447\u0435\u043d\u0438\u044f \u044d\u043a\u0441\u043f\u0435\u0440\u0442\u0430 \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u043d\u043e\u0439 \u043e\u0431\u043b\u0430\u0441\u0442\u0438, \u0447\u0442\u043e \u0434\u043e\u0440\u043e\u0433\u043e \u0438 \u0440\u0435\u0441\u0443\u0440\u0441\u043e\u0451\u043c\u043a\u043e, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u0432 \u0431\u043e\u043b\u044c\u0448\u0438\u043d\u0441\u0442\u0432\u0435 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u0439 \u043c\u044b \u043c\u043e\u0436\u0435\u043c \u0440\u0430\u0437\u043c\u0435\u0442\u0438\u0442\u044c \u043b\u0438\u0448\u044c \u043c\u0430\u043b\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432. \u041e\u0434\u043d\u0430\u043a\u043e \u0441\u0430\u043c\u0438 \u043e\u0431\u044a\u0435\u043a\u0442\u044b \u0437\u0430\u0447\u0430\u0441\u0442\u0443\u044e \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b \u0432 \u0431\u043e\u043b\u044c\u0448\u0438\u0445 \u043e\u0431\u044a\u0451\u043c\u0430\u0445. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0432 \u0437\u0430\u0434\u0430\u0447\u0435 \u043a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438 \u043d\u043e\u0432\u043e\u0441\u0442\u0435\u0439 \u043f\u043e \u0442\u0435\u043c\u0430\u043c \u043c\u044b \u043c\u043e\u0436\u0435\u043c \u043f\u0440\u0438\u0432\u043b\u0435\u0447\u044c \u044d\u043a\u0441\u043f\u0435\u0440\u0442\u043e\u0432, \u0447\u0442\u043e\u0431\u044b \u043e\u043d\u0438, \u043f\u0440\u043e\u0447\u0438\u0442\u044b\u0432\u0430\u044f \u043d\u043e\u0432\u043e\u0441\u0442\u0438, \u043e\u0442\u043d\u043e\u0441\u0438\u043b\u0438 \u0438\u0445 \u043a \u043d\u0443\u0436\u043d\u044b\u043c \u0442\u0435\u043c\u0430\u043c. \u0427\u0435\u043b\u043e\u0432\u0435\u0447\u0435\u0441\u043a\u0438\u0435 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u044b \u0438 \u043c\u044b \u043d\u0435 \u0441\u043c\u043e\u0436\u0435\u043c \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0441\u043b\u0438\u0448\u043a\u043e\u043c \u0431\u043e\u043b\u044c\u0448\u0443\u044e \u0440\u0430\u0437\u043c\u0435\u0447\u0435\u043d\u043d\u0443\u044e \u0432\u044b\u0431\u043e\u0440\u043a\u0443. \u041f\u0440\u0438 \u044d\u0442\u043e\u043c \u0441\u0430\u043c\u0438 \u043d\u043e\u0432\u043e\u0441\u0442\u0438 \u043c\u044b \u043c\u043e\u0436\u0435\u043c \u0441\u043a\u0430\u0447\u0438\u0432\u0430\u0442\u044c \u0438\u0437 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442\u0430 \u0431\u0435\u0437 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0439, \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0432 \u0431\u043e\u043b\u044c\u0448\u043e\u0439 \u043e\u0431\u044a\u0435\u043c \u043d\u0435\u0440\u0430\u0437\u043c\u0435\u0447\u0435\u043d\u043d\u043e\u0439 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438."]})]})}function d(s={}){const{wrapper:e}={...(0,i.a)(),...s.components};return e?(0,n.jsx)(e,{...s,children:(0,n.jsx)(h,{...s})}):h(s)}},3221:(s,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/semi-supervised-9fee16aba867525cfe37a3456acb0117.png"},1151:(s,e,a)=>{a.d(e,{Z:()=>t,a:()=>m});var n=a(7294);const i={},l=n.createContext(i);function m(s){const e=n.useContext(l);return n.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function t(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(i):s.components||i:m(s.components),n.createElement(l.Provider,{value:e},s.children)}}}]);