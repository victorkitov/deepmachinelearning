"use strict";(self.webpackChunksite_new=self.webpackChunksite_new||[]).push([[4010],{38396:(s,e,n)=>{n.r(e),n.d(e,{assets:()=>r,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>m});var a=n(74848),t=n(28453);const l={description:"\u0410\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430 \u043d\u0435\u0439\u0440\u043e\u0441\u0435\u0442\u0438 DenseNet.",sidebar_label:"DenseNet",keywords:["densenet","\u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430 densenet","densenet \u0431\u043b\u043e\u043a\u0438","dense block","transition block"]},i="\u041c\u043e\u0434\u0435\u043b\u044c DenseNet",c={id:"Neural-networks/Convolutional-architectures/DenseNet",title:"\u041c\u043e\u0434\u0435\u043b\u044c DenseNet",description:"\u0410\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430 \u043d\u0435\u0439\u0440\u043e\u0441\u0435\u0442\u0438 DenseNet.",source:"@site/docs/Neural-networks/11-Convolutional-architectures/08-DenseNet.md",sourceDirName:"Neural-networks/11-Convolutional-architectures",slug:"/Neural-networks/Convolutional-architectures/DenseNet",permalink:"/docs/Neural-networks/Convolutional-architectures/DenseNet",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{description:"\u0410\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430 \u043d\u0435\u0439\u0440\u043e\u0441\u0435\u0442\u0438 DenseNet.",sidebar_label:"DenseNet",keywords:["densenet","\u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430 densenet","densenet \u0431\u043b\u043e\u043a\u0438","dense block","transition block"]},sidebar:"Neural-networks",previous:{title:"\u0420\u0430\u0437\u0432\u0438\u0442\u0438\u0435 ResNet",permalink:"/docs/Neural-networks/Convolutional-architectures/ResNet-improvements"},next:{title:"\u041c\u043e\u0431\u0438\u043b\u044c\u043d\u044b\u0435 \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u044b",permalink:"/docs/Neural-networks/Convolutional-architectures/Light-weight-conv-networks"}},r={},m=[{value:"\u041b\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0430",id:"\u043b\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0430",level:2}];function h(s){const e={a:"a",annotation:"annotation",h1:"h1",h2:"h2",img:"img",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msub:"msub",ol:"ol",p:"p",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,t.R)(),...s.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"\u043c\u043e\u0434\u0435\u043b\u044c-densenet",children:"\u041c\u043e\u0434\u0435\u043b\u044c DenseNet"}),"\n",(0,a.jsxs)(e.p,{children:["\u0412 \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0435 ",(0,a.jsx)(e.strong,{children:"DenseNet"})," [",(0,a.jsx)(e.a,{href:"https://openaccess.thecvf.com/content_cvpr_2017/html/Huang_Densely_Connected_Convolutional_CVPR_2017_paper.html",children:"1"}),"] \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f \u0434\u0432\u0430 \u0431\u043b\u043e\u043a\u0430 - ",(0,a.jsx)(e.strong,{children:"\u043f\u043b\u043e\u0442\u043d\u044b\u0439 \u0431\u043b\u043e\u043a"})," (dense block) \u0438 ",(0,a.jsx)(e.strong,{children:"\u043f\u0435\u0440\u0435\u0445\u043e\u0434\u043d\u044b\u0439 \u0431\u043b\u043e\u043a"})," (transition block)."]}),"\n",(0,a.jsx)(e.p,{children:"\u0412 \u043f\u043b\u043e\u0442\u043d\u043e\u043c \u0431\u043b\u043e\u043a\u0435 \u043a\u0430\u0436\u0434\u044b\u0439 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0441\u043b\u043e\u0439 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u0441\u043e \u0432\u0441\u0435\u0445 \u043f\u0440\u0435\u0434\u0448\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0445 \u0441\u043b\u043e\u0451\u0432 \u043f\u043b\u043e\u0442\u043d\u043e\u0433\u043e \u0431\u043b\u043e\u043a\u0430, \u043a\u0430\u043a \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u043e \u043d\u0430 \u0440\u0438\u0441\u0443\u043d\u043a\u0435:"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{src:n(96635).A+"",width:"684",height:"481"})}),"\n",(0,a.jsxs)(e.p,{children:["\u041c\u0430\u0442\u0435\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0432\u044b\u0445\u043e\u0434 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0441\u043b\u043e\u044f ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsx)(e.mrow,{children:(0,a.jsx)(e.mi,{children:"i"})}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"i"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.6595em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"i"})]})})]})," \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u0432\u044b\u0445\u043e\u0434\u043e\u0432 \u0432\u0441\u0435\u0445 \u043f\u0440\u0435\u0434\u0448\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0445 \u0441\u043b\u043e\u0451\u0432:"]}),"\n",(0,a.jsx)(e.span,{className:"katex-display",children:(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsxs)(e.mrow,{children:[(0,a.jsxs)(e.msub,{children:[(0,a.jsx)(e.mi,{children:"x"}),(0,a.jsx)(e.mi,{children:"i"})]}),(0,a.jsx)(e.mo,{children:"="}),(0,a.jsxs)(e.msub,{children:[(0,a.jsx)(e.mi,{children:"H"}),(0,a.jsx)(e.mi,{children:"i"})]}),(0,a.jsx)(e.mo,{stretchy:"false",children:"("}),(0,a.jsx)(e.mo,{stretchy:"false",children:"["}),(0,a.jsxs)(e.msub,{children:[(0,a.jsx)(e.mi,{children:"x"}),(0,a.jsx)(e.mn,{children:"0"})]}),(0,a.jsx)(e.mo,{separator:"true",children:","}),(0,a.jsxs)(e.msub,{children:[(0,a.jsx)(e.mi,{children:"x"}),(0,a.jsx)(e.mn,{children:"1"})]}),(0,a.jsx)(e.mo,{separator:"true",children:","}),(0,a.jsx)(e.mi,{mathvariant:"normal",children:"."}),(0,a.jsx)(e.mi,{mathvariant:"normal",children:"."}),(0,a.jsx)(e.mi,{mathvariant:"normal",children:"."}),(0,a.jsxs)(e.msub,{children:[(0,a.jsx)(e.mi,{children:"x"}),(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mi,{children:"i"}),(0,a.jsx)(e.mo,{children:"\u2212"}),(0,a.jsx)(e.mn,{children:"1"})]})]}),(0,a.jsx)(e.mo,{stretchy:"false",children:"]"}),(0,a.jsx)(e.mo,{stretchy:"false",children:")"}),(0,a.jsx)(e.mo,{separator:"true",children:","})]}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"x_i=H_i([x_0,x_1,...x_{i-1}]),"})]})})}),(0,a.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.5806em",verticalAlign:"-0.15em"}}),(0,a.jsxs)(e.span,{className:"mord",children:[(0,a.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,a.jsx)(e.span,{className:"msupsub",children:(0,a.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,a.jsxs)(e.span,{className:"vlist-r",children:[(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.3117em"},children:(0,a.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(e.span,{className:"mord mathnormal mtight",children:"i"})})]})}),(0,a.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,a.jsx)(e.span,{className:"vlist-r",children:(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,a.jsx)(e.span,{})})})]})})]}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,a.jsx)(e.span,{className:"mrel",children:"="}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsxs)(e.span,{className:"mord",children:[(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.08125em"},children:"H"}),(0,a.jsx)(e.span,{className:"msupsub",children:(0,a.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,a.jsxs)(e.span,{className:"vlist-r",children:[(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.3117em"},children:(0,a.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0813em",marginRight:"0.05em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(e.span,{className:"mord mathnormal mtight",children:"i"})})]})}),(0,a.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,a.jsx)(e.span,{className:"vlist-r",children:(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,a.jsx)(e.span,{})})})]})})]}),(0,a.jsx)(e.span,{className:"mopen",children:"(["}),(0,a.jsxs)(e.span,{className:"mord",children:[(0,a.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,a.jsx)(e.span,{className:"msupsub",children:(0,a.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,a.jsxs)(e.span,{className:"vlist-r",children:[(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,a.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(e.span,{className:"mord mtight",children:"0"})})]})}),(0,a.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,a.jsx)(e.span,{className:"vlist-r",children:(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,a.jsx)(e.span,{})})})]})})]}),(0,a.jsx)(e.span,{className:"mpunct",children:","}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsxs)(e.span,{className:"mord",children:[(0,a.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,a.jsx)(e.span,{className:"msupsub",children:(0,a.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,a.jsxs)(e.span,{className:"vlist-r",children:[(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,a.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(e.span,{className:"mord mtight",children:"1"})})]})}),(0,a.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,a.jsx)(e.span,{className:"vlist-r",children:(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,a.jsx)(e.span,{})})})]})})]}),(0,a.jsx)(e.span,{className:"mpunct",children:","}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsx)(e.span,{className:"mord",children:"..."}),(0,a.jsxs)(e.span,{className:"mord",children:[(0,a.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,a.jsx)(e.span,{className:"msupsub",children:(0,a.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,a.jsxs)(e.span,{className:"vlist-r",children:[(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.3117em"},children:(0,a.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsxs)(e.span,{className:"mord mtight",children:[(0,a.jsx)(e.span,{className:"mord mathnormal mtight",children:"i"}),(0,a.jsx)(e.span,{className:"mbin mtight",children:"\u2212"}),(0,a.jsx)(e.span,{className:"mord mtight",children:"1"})]})})]})}),(0,a.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,a.jsx)(e.span,{className:"vlist-r",children:(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.2083em"},children:(0,a.jsx)(e.span,{})})})]})})]}),(0,a.jsx)(e.span,{className:"mclose",children:"])"}),(0,a.jsx)(e.span,{className:"mpunct",children:","})]})]})]})}),"\n",(0,a.jsxs)(e.p,{children:["\u0447\u0442\u043e \u0440\u0435\u0430\u043b\u0438\u0437\u0443\u0435\u0442\u0441\u044f \u0442\u0435\u043c, \u0447\u0442\u043e \u0432\u0445\u043e\u0434\u043e\u043c \u0434\u043b\u044f ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsx)(e.mrow,{children:(0,a.jsx)(e.mi,{children:"i"})}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"i"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.6595em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"i"})]})})]}),"-\u0433\u043e \u0441\u043b\u043e\u044f \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043a\u043e\u043d\u043a\u0430\u0442\u0435\u043d\u0430\u0446\u0438\u044f \u0432\u044b\u0445\u043e\u0434\u043e\u0432 \u0432\u0441\u0435\u0445 \u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0438\u0445 \u0441\u043b\u043e\u0451\u0432."]}),"\n",(0,a.jsx)(e.p,{children:"\u0422\u0430\u043a\u0430\u044f \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0442\u044c \u043c\u0435\u043d\u044c\u0448\u0435 \u043a\u0430\u043d\u0430\u043b\u043e\u0432 \u043d\u0430 \u043a\u0430\u0436\u0434\u043e\u043c \u0441\u043b\u043e\u0435 (\u044d\u043a\u043e\u043d\u043e\u043c\u044f \u043d\u0430 \u0447\u0438\u0441\u043b\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432) \u0438 \u043b\u0443\u0447\u0448\u0435 \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0442\u044c \u0440\u0430\u043d\u0435\u0435 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u044b\u0435 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u0438, \u043f\u043e\u0441\u043a\u043e\u043b\u044c\u043a\u0443 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f, \u0443\u0436\u0435 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u0430\u044f \u043d\u0430 \u043f\u0440\u0435\u0434\u0448\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0445 \u0441\u043b\u043e\u044f\u0445, \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u0435\u0435 \u043f\u0435\u0440\u0435\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f, \u043f\u043e\u0441\u0442\u0443\u043f\u0430\u044f \u043d\u0435 \u0432 \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u043d\u043e\u043c \u0432\u0438\u0434\u0435 (\u043a\u0430\u043a \u0432 \u0442\u0440\u0430\u0434\u0438\u0446\u0438\u043e\u043d\u043d\u044b\u0445 \u0441\u0432\u0451\u0440\u0442\u043e\u0447\u043d\u044b\u0445 \u0441\u0435\u0442\u044f\u0445 \u0438 ResNet), \u0430 \u0432 \u0438\u0441\u0445\u043e\u0434\u043d\u043e\u043c \u0432\u0438\u0434\u0435."}),"\n",(0,a.jsx)(e.p,{children:"\u041f\u043e\u0441\u043a\u043e\u043b\u044c\u043a\u0443 \u0432 \u043f\u043b\u043e\u0442\u043d\u043e\u043c \u0441\u043b\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u043a\u0430\u043d\u0430\u043b\u043e\u0432 \u0440\u0430\u0441\u0442\u0451\u0442 \u043b\u0438\u043d\u0435\u0439\u043d\u043e \u0441 \u0440\u043e\u0441\u0442\u043e\u043c \u0447\u0438\u0441\u043b\u0430 \u0441\u043b\u043e\u0451\u0432, \u0432 \u043f\u0440\u043e\u043c\u0435\u0436\u0443\u0442\u043e\u0447\u043d\u044b\u0435 \u0443\u0437\u043b\u044b \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u044b \u0432\u0441\u0442\u0430\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u043d\u044b\u0435 \u0431\u043b\u043e\u043a\u0438 (transition blocks), \u0437\u0430\u0434\u0430\u0447\u0430 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0441\u043e\u0441\u0442\u043e\u0438\u0442 \u0432 \u0442\u043e\u043c, \u0447\u0442\u043e\u0431\u044b"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsxs)(e.p,{children:["\u0443\u043c\u0435\u043d\u044c\u0448\u0438\u0442\u044c \u0447\u0438\u0441\u043b\u043e \u043a\u0430\u043d\u0430\u043b\u043e\u0432, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f ",(0,a.jsx)(e.a,{href:"../ConvPool-Images/Special-conv#%D0%BF%D0%BE%D1%82%D0%BE%D1%87%D0%B5%D1%87%D0%BD%D0%B0%D1%8F-%D1%81%D0%B2%D1%91%D1%80%D1%82%D0%BA%D0%B0",children:"\u043f\u043e\u0442\u043e\u0447\u0435\u0447\u043d\u044b\u0435 \u0441\u0432\u0451\u0440\u0442\u043a\u0438"})," \u0440\u0430\u0437\u043c\u0435\u0440\u0430 1x1;"]}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsxs)(e.p,{children:["\u0443\u043c\u0435\u043d\u044c\u0448\u0438\u0442\u044c \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0435 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u0435, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f ",(0,a.jsx)(e.a,{href:"../ConvPool-Images/Pooling",children:"\u043f\u0443\u043b\u0438\u043d\u0433"}),"."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(e.p,{children:"\u0422\u0430\u043a\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c, \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0441\u043e\u0441\u0442\u043e\u0438\u0442 \u0438\u0437 \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0433\u043e \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u043f\u043b\u043e\u0442\u043d\u044b\u0445 \u0438 \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u043d\u044b\u0445 \u0431\u043b\u043e\u043a\u043e\u0432, \u043a\u0430\u043a \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u043e \u043d\u0438\u0436\u0435 \u0434\u043b\u044f \u0441\u043b\u0443\u0447\u0430\u044f 3\u0445 \u0431\u043b\u043e\u043a\u043e\u0432 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0442\u0438\u043f\u0430:"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{src:n(42729).A+"",width:"1364",height:"183"})}),"\n",(0,a.jsxs)(e.p,{children:["\u0410\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430 DenseNet \u043f\u043e\u043a\u0430\u0437\u0430\u043b\u0430 \u043b\u0443\u0447\u0448\u0435\u0435 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u043e \u043d\u0430 \u0434\u0430\u0442\u0430\u0441\u0435\u0442\u0430\u0445 ",(0,a.jsx)(e.a,{href:"https://www.cs.toronto.edu/~kriz/cifar.html",children:"CIFAR"})," \u0438 ",(0,a.jsx)(e.a,{href:"http://ufldl.stanford.edu/housenumbers/",children:"SVHN"}),", \u0447\u0435\u043c ResNet, \u0438 \u0441\u0440\u0430\u0432\u043d\u0438\u043c\u043e\u0435 \u0441 \u043d\u0435\u0439 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u043e \u043d\u0430 \u0434\u0430\u0442\u0430\u0441\u0435\u0442\u0435 ImageNet \u043f\u0440\u0438 \u043c\u0435\u043d\u044c\u0448\u0435\u043c \u0447\u0438\u0441\u043b\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432 [",(0,a.jsx)(e.a,{href:"https://openaccess.thecvf.com/content_cvpr_2017/html/Huang_Densely_Connected_Convolutional_CVPR_2017_paper.html",children:"1"}),"]."]}),"\n",(0,a.jsx)(e.h2,{id:"\u043b\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0430",children:"\u041b\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0430"}),"\n",(0,a.jsxs)(e.ol,{children:["\n",(0,a.jsx)(e.li,{children:(0,a.jsx)(e.a,{href:"https://openaccess.thecvf.com/content_cvpr_2017/html/Huang_Densely_Connected_Convolutional_CVPR_2017_paper.html",children:"Huang G. et al. Densely connected convolutional networks //Proceedings of the IEEE conference on computer vision and pattern recognition. \u2013 2017. \u2013 \u0421. 4700-4708."})}),"\n"]})]})}function d(s={}){const{wrapper:e}={...(0,t.R)(),...s.components};return e?(0,a.jsx)(e,{...s,children:(0,a.jsx)(h,{...s})}):h(s)}},96635:(s,e,n)=>{n.d(e,{A:()=>a});const a=n.p+"assets/images/DenseNet-DenseBlock-8cf9bd448e597ae966f0adac12d36b5d.png"},42729:(s,e,n)=>{n.d(e,{A:()=>a});const a=n.p+"assets/images/DenseNet-three-blocks-example-da92b354e6dca1e11af561af673f4c61.png"},28453:(s,e,n)=>{n.d(e,{R:()=>i,x:()=>c});var a=n(96540);const t={},l=a.createContext(t);function i(s){const e=a.useContext(l);return a.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function c(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(t):s.components||t:i(s.components),a.createElement(l.Provider,{value:e},s.children)}}}]);