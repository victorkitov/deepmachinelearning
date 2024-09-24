"use strict";(self.webpackChunksite_new=self.webpackChunksite_new||[]).push([[4071],{13153:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>o});var i=n(74848),t=n(28453);const a={description:"\u041e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c\u0430 \u0440\u0435\u0448\u0430\u044e\u0449\u0438\u0445 \u0434\u0435\u0440\u0435\u0432\u044c\u0435\u0432  \u0432 \u0437\u0430\u0434\u0430\u0447\u0430\u0445 \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f."},c="\u0420\u0435\u0448\u0430\u044e\u0449\u0438\u0435 \u0434\u0435\u0440\u0435\u0432\u044c\u044f",r={id:"docs_ml/Decision-trees/Decision-trees",title:"\u0420\u0435\u0448\u0430\u044e\u0449\u0438\u0435 \u0434\u0435\u0440\u0435\u0432\u044c\u044f",description:"\u041e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c\u0430 \u0440\u0435\u0448\u0430\u044e\u0449\u0438\u0445 \u0434\u0435\u0440\u0435\u0432\u044c\u0435\u0432  \u0432 \u0437\u0430\u0434\u0430\u0447\u0430\u0445 \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f.",source:"@site/docs/docs_ml/13-Decision-trees/01-Decision-trees.md",sourceDirName:"docs_ml/13-Decision-trees",slug:"/docs_ml/Decision-trees/Decision-trees",permalink:"/docs/docs_ml/Decision-trees/Decision-trees",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"\u041e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c\u0430 \u0440\u0435\u0448\u0430\u044e\u0449\u0438\u0445 \u0434\u0435\u0440\u0435\u0432\u044c\u0435\u0432  \u0432 \u0437\u0430\u0434\u0430\u0447\u0430\u0445 \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f."},sidebar:"docs_ml",previous:{title:"\u0420\u0435\u0448\u0430\u044e\u0449\u0438\u0435 \u0434\u0435\u0440\u0435\u0432\u044c\u044f",permalink:"/docs/category/\u0440\u0435\u0448\u0430\u044e\u0449\u0438\u0435-\u0434\u0435\u0440\u0435\u0432\u044c\u044f"},next:{title:"\u041e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u043e\u0432 \u0440\u0435\u0448\u0430\u044e\u0449\u0435\u0433\u043e \u0434\u0435\u0440\u0435\u0432\u0430",permalink:"/docs/docs_ml/Decision-trees/Prediction-specifics"}},l={},o=[];function d(e){const s={admonition:"admonition",annotation:"annotation",h1:"h1",header:"header",img:"img",li:"li",math:"math",mo:"mo",mrow:"mrow",p:"p",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"\u0440\u0435\u0448\u0430\u044e\u0449\u0438\u0435-\u0434\u0435\u0440\u0435\u0432\u044c\u044f",children:"\u0420\u0435\u0448\u0430\u044e\u0449\u0438\u0435 \u0434\u0435\u0440\u0435\u0432\u044c\u044f"})}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"\u0420\u0435\u0448\u0430\u044e\u0449\u0435\u0435 \u0434\u0435\u0440\u0435\u0432\u043e"})," (decision tree) \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0441\u043e\u0431\u043e\u0439 \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f, \u043e\u0441\u043d\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u043d\u0430 \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0438 \u0438\u0435\u0440\u0430\u0440\u0445\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u043f\u0440\u0430\u0432\u0438\u043b. \u041f\u0440\u0438\u043c\u0435\u0440 \u0440\u0435\u0448\u0430\u044e\u0449\u0435\u0433\u043e \u0434\u0435\u0440\u0435\u0432\u043e \u0434\u043b\u044f \u0437\u0430\u0434\u0430\u0447\u0438 \u043a\u0440\u0435\u0434\u0438\u0442\u043d\u043e\u0433\u043e \u0441\u043a\u043e\u0440\u0438\u043d\u0433\u0430 (\u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u0439), \u043a\u0430\u043a \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u043e \u043d\u0430 \u0440\u0438\u0441\u0443\u043d\u043a\u0435:"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"decision-tree.png",src:n(25854).A+"",width:"676",height:"484"})}),"\n",(0,i.jsx)(s.p,{children:"\u0414\u0435\u0440\u0435\u0432\u043e \u0434\u0435\u043b\u0438\u0442\u0441\u044f \u043d\u0430 \u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0438\u0435 \u0443\u0437\u043b\u044b (inner nodes) \u0438 \u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0443\u0437\u043b\u044b (\u043b\u0438\u0441\u0442\u044c\u044f, terminal nodes, leaves)."}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:['\u0412\u043e \u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0438\u0445 \u0443\u0437\u043b\u0430\u0445 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0441\u044f \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0443\u0441\u043b\u043e\u0432\u0438\u044f \u0432\u0438\u0434\u0430 "\u043f\u0440\u0438\u0437\u043d\u0430\u043a',(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsx)(s.mrow,{children:(0,i.jsx)(s.mo,{children:"\u2264"})}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"\\le"})]})})}),(0,i.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"0.7719em",verticalAlign:"-0.136em"}}),(0,i.jsx)(s.span,{className:"mrel",children:"\u2264"})]})})]}),'\u043f\u043e\u0440\u043e\u0433". \u0415\u0441\u043b\u0438 \u0443\u0441\u043b\u043e\u0432\u0438\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043e, \u0442\u043e \u043e\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0441\u043f\u0443\u0441\u043a \u0432 \u043b\u0435\u0432\u0443\u044e \u0434\u043e\u0447\u0435\u0440\u043d\u044e\u044e \u0432\u0435\u0440\u0448\u0438\u043d\u0443, \u0430 \u0435\u0441\u043b\u0438 \u043d\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043e, \u0442\u043e \u0432 \u043f\u0440\u0430\u0432\u0443\u044e, \u043f\u043e\u043a\u0430 \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u043e\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043b\u0451\u043d \u0441\u043f\u0443\u0441\u043a \u0432 \u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043b\u044c\u043d\u0443\u044e \u0432\u0435\u0440\u0448\u0438\u043d\u0443.']}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"\u041a\u0430\u0436\u0434\u043e\u0439 \u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043b\u044c\u043d\u043e\u0439 \u0432\u0435\u0440\u0448\u0438\u043d\u0435 \u0441\u043e\u043f\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d \u043a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u043d\u044b\u0439 \u043f\u0440\u043e\u0433\u043d\u043e\u0437:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"\u0432 \u0441\u043b\u0443\u0447\u0430\u0435 \u0440\u0435\u0433\u0440\u0435\u0441\u0441\u0438\u0438 - \u044d\u0442\u043e \u0447\u0438\u0441\u043b\u043e"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"\u0432 \u0441\u043b\u0443\u0447\u0430\u0435 \u043a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438 - \u044d\u0442\u043e \u043c\u0435\u0442\u043a\u0430 \u043a\u043b\u0430\u0441\u0441\u0430 \u043b\u0438\u0431\u043e \u0432\u0435\u043a\u0442\u043e\u0440 \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u0432\u0435\u0440\u043e\u044f\u0442\u043d\u043e\u0441\u0442\u0435\u0439 \u043a\u043b\u0430\u0441\u0441\u043e\u0432."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.admonition,{title:"\u0414\u0435\u0440\u0435\u0432\u043e \u043a\u0430\u043a \u043f\u0440\u0430\u0432\u0438\u043b\u043e\u0432\u044b\u0439 \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c",type:"tip",children:[(0,i.jsx)(s.p,{children:"\u0420\u0430\u0431\u043e\u0442\u0443 \u0440\u0435\u0448\u0430\u044e\u0449\u0435\u0433\u043e \u0434\u0435\u0440\u0435\u0432\u0430 \u043c\u043e\u0436\u043d\u043e \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043d\u0435\u043f\u0435\u0440\u0435\u0441\u0435\u043a\u0430\u044e\u0449\u0435\u0439\u0441\u044f \u0441\u0438\u0441\u0442\u0435\u043c\u043e\u0439 \u043f\u0440\u0430\u0432\u0438\u043b. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0434\u043b\u044f \u0434\u0435\u0440\u0435\u0432\u0430 \u0438\u0437 \u0438\u043b\u043b\u044e\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u044d\u0442\u043e \u0431\u0443\u0434\u0435\u0442:"}),(0,i.jsxs)(s.p,{children:["\u0415\u0421\u041b\u0418 (\u0434\u043e\u0445\u043e\u0434 ",(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsx)(s.mrow,{children:(0,i.jsx)(s.mo,{children:"\u2264"})}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"\\le"})]})})}),(0,i.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"0.7719em",verticalAlign:"-0.136em"}}),(0,i.jsx)(s.span,{className:"mrel",children:"\u2264"})]})})]})," 40.000) \u0418\u041b\u0418 (\u0435\u0441\u0442\u044c \u043f\u0440\u043e\u0441\u0440\u043e\u0447\u043a\u0438) \u0418 (\u0437\u0430\u0434\u043e\u043b\u0436\u0435\u043d\u043d\u043e\u0441\u0442\u044c>10.000) \u0422\u041e \u043e\u0442\u043a\u0430\u0437\u0430\u0442\u044c."]}),(0,i.jsxs)(s.p,{children:["\u0415\u0421\u041b\u0418 (\u0434\u043e\u0445\u043e\u0434>40.000) \u0418\u041b\u0418 (\u043d\u0435\u0442 \u043f\u0440\u043e\u0441\u0440\u043e\u0447\u0435\u043a) \u0418\u041b\u0418 (\u0435\u0441\u0442\u044c \u043f\u0440\u043e\u0441\u0440\u043e\u0447\u043a\u0438) \u0418 (\u0437\u0430\u0434\u043e\u043b\u0436\u0435\u043d\u043d\u043e\u0441\u0442\u044c ",(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsx)(s.mrow,{children:(0,i.jsx)(s.mo,{children:"\u2264"})}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"\\le"})]})})}),(0,i.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"0.7719em",verticalAlign:"-0.136em"}}),(0,i.jsx)(s.span,{className:"mrel",children:"\u2264"})]})})]})," 10.000) \u0422\u041e \u0434\u0430\u0442\u044c \u043a\u0440\u0435\u0434\u0438\u0442."]}),(0,i.jsxs)(s.p,{children:["\u0421\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0446\u0435\u043b\u044b\u0439 \u043a\u043b\u0430\u0441\u0441 ",(0,i.jsx)(s.strong,{children:"\u043f\u0440\u0430\u0432\u0438\u043b\u043e\u0432\u044b\u0445 \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c\u043e\u0432 \u043c\u0430\u0448\u0438\u043d\u043d\u043e\u0433\u043e \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f"})," (rule-based), \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0441\u0442\u0440\u043e\u044f\u0442 \u0438\u043d\u0442\u0435\u0440\u043f\u0440\u0435\u0442\u0438\u0440\u0443\u0435\u043c\u044b\u0435, \u043d\u043e \u043d\u0435 \u043e\u0447\u0435\u043d\u044c \u0442\u043e\u0447\u043d\u044b\u0435 \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u044b. \u0412 \u043d\u0430\u0441\u0442\u043e\u044f\u0449\u0435\u0435 \u0432\u0440\u0435\u043c\u044f \u0438\u0437 \u043d\u0438\u0445 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f \u0432 \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u043c \u0442\u043e\u043b\u044c\u043a\u043e \u0440\u0435\u0448\u0430\u044e\u0449\u0438\u0435 \u0434\u0435\u0440\u0435\u0432\u044c\u044f, \u043d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u0443\u044e \u0442\u043e\u0447\u043d\u043e\u0441\u0442\u044c \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u043a\u043e\u043c\u043f\u0435\u043d\u0441\u0438\u0440\u0443\u044e\u0442 \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435\u043c \u043d\u0435 \u043e\u0434\u043d\u043e\u0433\u043e, \u0430 \u0446\u0435\u043b\u043e\u0433\u043e \u043d\u0430\u0431\u043e\u0440\u0430 \u0440\u0435\u0448\u0430\u044e\u0449\u0438\u0445 \u0434\u0435\u0440\u0435\u0432\u044c\u0435\u0432 (\u0430\u043d\u0441\u0430\u043c\u0431\u043b\u044f \u0438\u0437 \u0440\u0435\u0448\u0430\u044e\u0449\u0438\u0445 \u0434\u0435\u0440\u0435\u0432\u044c\u0435\u0432)."]})]}),"\n",(0,i.jsx)(s.p,{children:"\u0417\u0434\u0435\u0441\u044c \u0440\u0430\u0441\u0441\u043c\u0430\u0442\u0440\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u0441\u0430\u043c\u044b\u0439 \u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0439 \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c \u0440\u0435\u0448\u0430\u044e\u0449\u0435\u0433\u043e \u0434\u0435\u0440\u0435\u0432\u0430 CART (classification and regression tree). \u0422\u0435\u043c \u043d\u0435 \u043c\u0435\u043d\u0435\u0435, \u0441\u0442\u043e\u0438\u0442 \u043f\u043e\u043c\u043d\u0438\u0442\u044c, \u0447\u0442\u043e \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0442 \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c\u044b \u0440\u0435\u0448\u0430\u044e\u0449\u0438\u0445 \u0434\u0435\u0440\u0435\u0432\u044c\u0435\u0432, \u0442\u0430\u043a\u0438\u0435 \u043a\u0430\u043a ID3 \u0438 C4.5. \u0412 \u043d\u0438\u0445 \u0447\u0438\u0441\u043b\u043e \u043f\u043e\u0442\u043e\u043c\u043a\u043e\u0432 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435 \u0434\u0432\u0443\u0445 \u0438 \u043c\u043e\u0433\u0443\u0442 \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u0442\u044c\u0441\u044f \u0434\u0440\u0443\u0433\u0438\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u0430, \u0430 \u043d\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u0441\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u0435 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0451\u043d\u043d\u043e\u0433\u043e \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u0430 \u0441 \u043f\u043e\u0440\u043e\u0433\u043e\u043c."})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},25854:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/decision-tree-4e6cefe7745302efbfac34948b255567.png"},28453:(e,s,n)=>{n.d(s,{R:()=>c,x:()=>r});var i=n(96540);const t={},a=i.createContext(t);function c(e){const s=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),i.createElement(a.Provider,{value:s},e.children)}}}]);