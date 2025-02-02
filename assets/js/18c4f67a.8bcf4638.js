"use strict";(self.webpackChunksite_new=self.webpackChunksite_new||[]).push([[9813],{20194:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>t,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var i=s(74848),o=s(28453);const l={description:"\u041e\u043f\u0435\u0440\u0430\u0446\u0438\u044f \u043f\u0443\u043b\u0438\u043d\u0433\u0430 (pooling) \u0434\u043b\u044f \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439 \u043d\u0435\u0439\u0440\u043e\u043d\u043d\u044b\u043c\u0438 \u0441\u0435\u0442\u044f\u043c\u0438.",sidebar_label:"\u041f\u0443\u043b\u0438\u043d\u0433",keywords:["\u0441\u043b\u043e\u0439 \u043f\u0443\u043b\u0438\u043d\u0433\u0430","\u043f\u0443\u043b\u0438\u043d\u0433 \u0432 \u043d\u0435\u0439\u0440\u043e\u0441\u0435\u0442\u044f\u0445","\u043f\u0443\u043b\u0438\u043d\u0433 cnn","\u043f\u0443\u043b\u0438\u043d\u0433 \u043d\u0435\u0439\u0440\u043e\u043d\u043d\u044b\u0435 \u0441\u0435\u0442\u0438","\u043f\u0443\u043b\u0438\u043d\u0433 \u0434\u043b\u044f \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0435\u0439","max pooling","avg pooling","global pooling","\u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u044b\u0439 \u043f\u0443\u043b\u0438\u043d\u0433","pyramid pooling","\u043f\u0438\u0440\u0430\u043c\u0438\u0434\u0430\u043b\u044c\u043d\u044b\u0439 \u043f\u0443\u043b\u0438\u043d\u0433","convolution network","\u0441\u0435\u0442\u0438 \u0441\u0432\u0435\u0440\u0442\u043a\u0438","\u043d\u0435\u0439\u0440\u043e\u043d\u043d\u0430\u044f \u0441\u0435\u0442\u044c","\u0438\u0441\u043a\u0443\u0441\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0435 \u043d\u0435\u0439\u0440\u043e\u043d\u043d\u044b\u0435 \u0441\u0435\u0442\u0438"]},a="\u041f\u0443\u043b\u0438\u043d\u0433 \u0434\u043b\u044f \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439",r={id:"Neural-networks/ConvPool-Images/Pooling",title:"\u041f\u0443\u043b\u0438\u043d\u0433 \u0434\u043b\u044f \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439",description:"\u041e\u043f\u0435\u0440\u0430\u0446\u0438\u044f \u043f\u0443\u043b\u0438\u043d\u0433\u0430 (pooling) \u0434\u043b\u044f \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439 \u043d\u0435\u0439\u0440\u043e\u043d\u043d\u044b\u043c\u0438 \u0441\u0435\u0442\u044f\u043c\u0438.",source:"@site/docs/Neural-networks/10-ConvPool-Images/04-Pooling.md",sourceDirName:"Neural-networks/10-ConvPool-Images",slug:"/Neural-networks/ConvPool-Images/Pooling",permalink:"/docs/Neural-networks/ConvPool-Images/Pooling",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{description:"\u041e\u043f\u0435\u0440\u0430\u0446\u0438\u044f \u043f\u0443\u043b\u0438\u043d\u0433\u0430 (pooling) \u0434\u043b\u044f \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439 \u043d\u0435\u0439\u0440\u043e\u043d\u043d\u044b\u043c\u0438 \u0441\u0435\u0442\u044f\u043c\u0438.",sidebar_label:"\u041f\u0443\u043b\u0438\u043d\u0433",keywords:["\u0441\u043b\u043e\u0439 \u043f\u0443\u043b\u0438\u043d\u0433\u0430","\u043f\u0443\u043b\u0438\u043d\u0433 \u0432 \u043d\u0435\u0439\u0440\u043e\u0441\u0435\u0442\u044f\u0445","\u043f\u0443\u043b\u0438\u043d\u0433 cnn","\u043f\u0443\u043b\u0438\u043d\u0433 \u043d\u0435\u0439\u0440\u043e\u043d\u043d\u044b\u0435 \u0441\u0435\u0442\u0438","\u043f\u0443\u043b\u0438\u043d\u0433 \u0434\u043b\u044f \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0435\u0439","max pooling","avg pooling","global pooling","\u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u044b\u0439 \u043f\u0443\u043b\u0438\u043d\u0433","pyramid pooling","\u043f\u0438\u0440\u0430\u043c\u0438\u0434\u0430\u043b\u044c\u043d\u044b\u0439 \u043f\u0443\u043b\u0438\u043d\u0433","convolution network","\u0441\u0435\u0442\u0438 \u0441\u0432\u0435\u0440\u0442\u043a\u0438","\u043d\u0435\u0439\u0440\u043e\u043d\u043d\u0430\u044f \u0441\u0435\u0442\u044c","\u0438\u0441\u043a\u0443\u0441\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0435 \u043d\u0435\u0439\u0440\u043e\u043d\u043d\u044b\u0435 \u0441\u0435\u0442\u0438"]},sidebar:"Neural-networks",previous:{title:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0441\u0432\u0451\u0440\u0442\u043e\u043a",permalink:"/docs/Neural-networks/ConvPool-Images/Conv-params"},next:{title:"\u0421\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0435 \u0432\u0438\u0434\u044b \u0441\u0432\u0451\u0440\u0442\u043e\u043a",permalink:"/docs/Neural-networks/ConvPool-Images/Special-conv"}},t={},c=[{value:"\u041b\u043e\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u043f\u0443\u043b\u0438\u043d\u0433",id:"\u043b\u043e\u043a\u0430\u043b\u044c\u043d\u044b\u0439-\u043f\u0443\u043b\u0438\u043d\u0433",level:2},{value:"\u0413\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u044b\u0439 \u043f\u0443\u043b\u0438\u043d\u0433",id:"\u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u044b\u0439-\u043f\u0443\u043b\u0438\u043d\u0433",level:2},{value:"\u041f\u0438\u0440\u0430\u043c\u0438\u0434\u0430\u043b\u044c\u043d\u044b\u0439 \u043f\u0443\u043b\u0438\u043d\u0433",id:"\u043f\u0438\u0440\u0430\u043c\u0438\u0434\u0430\u043b\u044c\u043d\u044b\u0439-\u043f\u0443\u043b\u0438\u043d\u0433",level:2},{value:"\u041b\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0430",id:"\u043b\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0430",level:2}];function d(n){const e={a:"a",admonition:"admonition",annotation:"annotation",blockquote:"blockquote",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",math:"math",mi:"mi",mrow:"mrow",ol:"ol",p:"p",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,o.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"\u043f\u0443\u043b\u0438\u043d\u0433-\u0434\u043b\u044f-\u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439",children:"\u041f\u0443\u043b\u0438\u043d\u0433 \u0434\u043b\u044f \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439"}),"\n",(0,i.jsx)(e.h2,{id:"\u043b\u043e\u043a\u0430\u043b\u044c\u043d\u044b\u0439-\u043f\u0443\u043b\u0438\u043d\u0433",children:"\u041b\u043e\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u043f\u0443\u043b\u0438\u043d\u0433"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u041e\u043f\u0435\u0440\u0430\u0446\u0438\u044f \u043f\u0443\u043b\u0438\u043d\u0433\u0430"})," (pooling), \u043a\u0430\u043a \u0438 \u0434\u043b\u044f ",(0,i.jsx)(e.a,{href:"../ConvPool-1D/Pooling-1D",children:"\u0441\u043b\u0443\u0447\u0430\u044f \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0435\u0439 \u0438 \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445 \u0440\u044f\u0434\u043e\u0432"}),", \u043f\u0440\u0438\u0437\u0432\u0430\u043d\u0430 \u0443\u043c\u0435\u043d\u044c\u0448\u0438\u0442\u044c \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u0443\u044e \u0440\u0430\u0437\u043c\u0435\u0440\u043d\u043e\u0441\u0442\u044c \u0432\u044b\u0445\u043e\u0434\u0430 \u0437\u0430 \u0441\u0447\u0451\u0442 \u0440\u0430\u0437\u0431\u0438\u0435\u043d\u0438\u044f ",(0,i.jsx)(e.strong,{children:"\u043a\u0430\u0440\u0442\u044b \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432"})," (feature map) \u043d\u0430 \u0444\u0440\u0430\u0433\u043c\u0435\u043d\u0442\u044b \u0438 \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0430\u0433\u0440\u0435\u0433\u0438\u0440\u0443\u044e\u0449\u0435\u0439 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 \u043a \u043a\u0430\u0436\u0434\u043e\u043c\u0443 \u0444\u0440\u0430\u0433\u043c\u0435\u043d\u0442\u0443."]}),"\n",(0,i.jsx)(e.p,{children:"\u0427\u0430\u0449\u0435 \u0432\u0441\u0435\u0433\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u043c\u0430\u043a\u0441\u0438\u043c\u0438\u0437\u0438\u0440\u0443\u044e\u0449\u0438\u0439 \u043f\u0443\u043b\u0438\u043d\u0433"})," (max pooling, \u0430\u0433\u0440\u0435\u0433\u0438\u0440\u0443\u044e\u0449\u0430\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u044f - \u0432\u0437\u044f\u0442\u0438\u0435 \u043c\u0430\u043a\u0441\u0438\u043c\u0443\u043c\u0430)"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u0443\u0441\u0440\u0435\u0434\u043d\u044f\u044e\u0449\u0438\u0439 \u043f\u0443\u043b\u0438\u043d\u0433"})," (average pooling, \u0430\u0433\u0440\u0435\u0433\u0438\u0440\u0443\u044e\u0449\u0430\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u044f - \u0443\u0441\u0440\u0435\u0434\u043d\u0435\u043d\u0438\u0435)"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u041f\u0440\u0438\u043c\u0435\u0440 \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u044d\u0442\u0438\u0445 \u0432\u0438\u0434\u043e\u0432 \u043f\u0443\u043b\u0438\u043d\u0433\u0430 2x2 \u043f\u0440\u0438\u0432\u0435\u0434\u0451\u043d \u043d\u0438\u0436\u0435 \u0434\u043b\u044f \u043e\u0434\u043d\u043e\u0433\u043e \u043a\u0430\u043d\u0430\u043b\u0430:"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:s(53482).A+"",width:"400",height:"292"})}),"\n",(0,i.jsxs)(e.p,{children:["\u041f\u0443\u043b\u0438\u043d\u0433 \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f ",(0,i.jsx)(e.strong,{children:"\u043a \u043a\u0430\u0436\u0434\u043e\u043c\u0443 \u043a\u0430\u043d\u0430\u043b\u0443 \u043d\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e"}),". \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u043f\u0440\u0438 \u0435\u0433\u043e \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0438 \u043a RGB \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044e, \u043e\u043d \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f \u043d\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e \u043a R,G \u0438 B \u043a\u0430\u043d\u0430\u043b\u0443. \u0423 \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u044b\u0445 \u043f\u0443\u043b\u0438\u043d\u0433\u043e\u0432, \u043f\u0440\u0438\u0432\u0435\u0434\u0451\u043d\u043d\u044b\u0445 \u0432\u044b\u0448\u0435, \u043d\u0435\u0442 \u043d\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u043c\u044b\u0445 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432, \u0430 \u0433\u0438\u043f\u0435\u0440\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430\u043c\u0438 \u0432\u044b\u0441\u0442\u0443\u043f\u0430\u0435\u0442 ",(0,i.jsx)(e.strong,{children:"\u0440\u0430\u0437\u043c\u0435\u0440 \u0430\u0433\u0440\u0435\u0433\u0438\u0440\u0443\u0435\u043c\u043e\u0439 \u043e\u0431\u043b\u0430\u0441\u0442\u0438"})," (kenrel size) \u0438 ",(0,i.jsx)(e.strong,{children:"\u0448\u0430\u0433"})," (stride), \u043f\u0440\u0438\u0447\u0451\u043c \u0448\u0430\u0433 \u043e\u0431\u044b\u0447\u043d\u043e \u0432\u044b\u0431\u0438\u0440\u0430\u0435\u0442\u0441\u044f \u0440\u0430\u0432\u043d\u044b\u043c \u0441\u0442\u043e\u0440\u043e\u043d\u0435 \u043a\u0432\u0430\u0434\u0440\u0430\u0442\u0430, \u043f\u043e \u043a\u043e\u0442\u043e\u0440\u043e\u043c\u0443 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0441\u044f \u0430\u0433\u0440\u0435\u0433\u0430\u0446\u0438\u044f, \u0442.\u0435. \u043a\u0430\u0436\u0434\u044b\u0439 \u0440\u0430\u0437 \u0430\u0433\u0440\u0435\u0433\u0430\u0446\u0438\u044f \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0441\u044f \u043f\u043e \u043d\u0435\u043f\u0435\u0440\u0435\u0441\u0435\u043a\u0430\u044e\u0449\u0438\u043c\u0441\u044f \u0444\u0440\u0430\u0433\u043c\u0435\u043d\u0442\u0430\u043c, \u043a\u0430\u043a \u043d\u0430 \u0440\u0438\u0441\u0443\u043d\u043a\u0435 \u0432\u044b\u0448\u0435."]}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["\u041a\u0430\u043a \u0438 \u0432 ",(0,i.jsx)(e.a,{href:"../ConvPool-1D/Pooling-1D",children:"\u0441\u043b\u0443\u0447\u0430\u0435 \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0435\u0439 \u0438 \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445 \u0440\u044f\u0434\u043e\u0432"})," \u043f\u0443\u043b\u0438\u043d\u0433 \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u043f\u0440\u0438\u0431\u043b\u0438\u0436\u0451\u043d\u043d\u0443\u044e \u0438\u043d\u0432\u0430\u0440\u0438\u0430\u043d\u0442\u043d\u043e\u0441\u0442\u044c \u043a \u043d\u0435\u0431\u043e\u043b\u044c\u0448\u0438\u043c \u0441\u0434\u0432\u0438\u0433\u0430\u043c."]}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:["\u041c\u0430\u043a\u0441\u0438\u043c\u0438\u0437\u0438\u0440\u0443\u044e\u0449\u0438\u0439 \u043f\u0443\u043b\u0438\u043d\u0433 \u0438\u0437\u0432\u043b\u0435\u043a\u0430\u0435\u0442 \u043f\u0440\u0438\u0437\u043d\u0430\u043a \u0442\u043e\u0433\u043e, \u0447\u0442\u043e ",(0,i.jsx)(e.strong,{children:"\u0438\u0441\u0445\u043e\u0434\u043d\u044b\u0439 \u043f\u0440\u0438\u0437\u043d\u0430\u043a \u043f\u0440\u0438\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0433\u0434\u0435-\u043b\u0438\u0431\u043e \u0432 \u043e\u0431\u043b\u0430\u0441\u0442\u0438"}),", \u043f\u043e \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u043b\u0430\u0441\u044c \u0430\u0433\u0440\u0435\u0433\u0430\u0446\u0438\u044f. \u0410 \u0443\u0441\u0440\u0435\u0434\u043d\u044f\u044e\u0449\u0438\u0439 \u043f\u0443\u043b\u0438\u043d\u0433 \u0438\u0437\u0432\u043b\u0435\u043a\u0430\u0435\u0442 ",(0,i.jsx)(e.strong,{children:"\u0441\u0440\u0435\u0434\u043d\u044e\u044e \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043d\u043e\u0441\u0442\u044c \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u0430 \u0432 \u043e\u0431\u043b\u0430\u0441\u0442\u0438"}),"."]}),"\n",(0,i.jsx)(e.h2,{id:"\u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u044b\u0439-\u043f\u0443\u043b\u0438\u043d\u0433",children:"\u0413\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u044b\u0439 \u043f\u0443\u043b\u0438\u043d\u0433"}),"\n",(0,i.jsxs)(e.p,{children:["\u0422\u0430\u043a \u0436\u0435, \u043a\u0430\u043a \u0438 \u0434\u043b\u044f ",(0,i.jsx)(e.a,{href:"../ConvPool-1D/Pooling-1D#%D0%B3%D0%BB%D0%BE%D0%B1%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9-%D0%BF%D1%83%D0%BB%D0%B8%D0%BD%D0%B3",children:"\u0441\u043b\u0443\u0447\u0430\u044f \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445 \u0440\u044f\u0434\u043e\u0432"}),", \u043c\u043e\u0436\u043d\u043e \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u0442\u044c ",(0,i.jsx)(e.strong,{children:"\u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u0443\u044e \u0430\u0433\u0440\u0435\u0433\u0430\u0446\u0438\u044e"})," (global pooling) \u043f\u043e \u0432\u0441\u0435\u043c \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u043c \u043a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442\u0430\u043c. \u0415\u0441\u043b\u0438 \u043d\u0430 \u0432\u0445\u043e\u0434\u0435 \u0431\u044b\u043b\u043e ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsx)(e.mrow,{children:(0,i.jsx)(e.mi,{children:"C"})}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"C"})]})})}),(0,i.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.6833em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07153em"},children:"C"})]})})]})," \u043a\u0430\u043d\u0430\u043b\u043e\u0432, \u0442\u043e \u043d\u0430 \u0432\u044b\u0445\u043e\u0434\u0435 \u043f\u043e\u043b\u0443\u0447\u0438\u043c ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsx)(e.mrow,{children:(0,i.jsx)(e.mi,{children:"C"})}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"C"})]})})}),(0,i.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.6833em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07153em"},children:"C"})]})})]}),"-\u043c\u0435\u0440\u043d\u044b\u0439 \u0432\u0435\u043a\u0442\u043e\u0440, \u0441\u043e\u0441\u0442\u043e\u044f\u0449\u0438\u0439 \u0438\u0437 \u0430\u0433\u0440\u0435\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u043a\u0430\u043d\u0430\u043b\u043e\u0432 \u043f\u043e \u0432\u0441\u0435\u043c \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u043c \u043a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442\u0430\u043c, \u043a\u0430\u043a \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u043e \u043d\u0438\u0436\u0435:"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:s(80599).A+"",width:"251",height:"291"})}),"\n",(0,i.jsxs)(e.p,{children:["\u042d\u0442\u043e \u043f\u043e\u043b\u0435\u0437\u043d\u043e, \u0447\u0442\u043e\u0431\u044b \u043f\u0435\u0440\u0435\u0432\u0435\u0441\u0442\u0438 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u043b\u044c\u043d\u043e\u0433\u043e \u0440\u0430\u0437\u043c\u0435\u0440\u0430 ",(0,i.jsx)(e.strong,{children:"\u0432 \u0432\u0435\u043a\u0442\u043e\u0440 \u0444\u0438\u043a\u0441\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0439 \u0440\u0430\u0437\u043c\u0435\u0440\u043d\u043e\u0441\u0442\u0438"})," (\u044d\u043c\u0431\u0435\u0434\u0434\u0438\u043d\u0433) \u043f\u0435\u0440\u0435\u0434 \u0435\u0433\u043e \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u043e\u0439 \u043c\u043d\u043e\u0433\u043e\u0441\u043b\u043e\u0439\u043d\u044b\u043c \u043f\u0435\u0440\u0441\u0435\u043f\u0442\u0440\u043e\u043d\u043e\u043c (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0434\u043b\u044f \u043a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439)."]}),"\n",(0,i.jsx)(e.admonition,{title:"\u0418\u043d\u0442\u0435\u0440\u043f\u0440\u0435\u0442\u0438\u0440\u0443\u0435\u043c\u043e\u0441\u0442\u044c",type:"tip",children:(0,i.jsxs)(e.p,{children:["\u0415\u0441\u043b\u0438 \u0447\u0438\u0441\u043b\u043e \u043a\u0430\u043d\u0430\u043b\u043e\u0432 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u0435\u0442 \u0441 \u0447\u0438\u0441\u043b\u043e\u043c \u043a\u043b\u0430\u0441\u0441\u043e\u0432, \u0442\u043e \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043f\u0443\u043b\u0438\u043d\u0433\u0430 \u043c\u043e\u0436\u043d\u043e \u0442\u0440\u0430\u043a\u0442\u043e\u0432\u0430\u0442\u044c \u043a\u0430\u043a \u0440\u0435\u0439\u0442\u0438\u043d\u0433\u0438 \u043f\u0440\u0435\u0434\u0441\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u043c\u044b\u0445 \u043a\u043b\u0430\u0441\u0441\u043e\u0432, ",(0,i.jsx)(e.a,{href:"../../Machine-learning/Linear-classification/Multiclass-logistic-regression",children:"SoftMax"})," \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u043e\u0442 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u043f\u0440\u0438\u0432\u0435\u0434\u0451\u0442 \u043a \u0438\u0442\u043e\u0433\u043e\u0432\u044b\u043c \u0432\u0435\u0440\u043e\u044f\u0442\u043d\u043e\u0441\u0442\u044f\u043c \u043a\u043b\u0430\u0441\u0441\u043e\u0432. \u042d\u0442\u043e\u0442 \u043f\u043e\u0434\u0445\u043e\u0434 \u043e\u0431\u043b\u0430\u0434\u0430\u0435\u0442 \u043f\u043e\u0432\u044b\u0448\u0435\u043d\u043d\u043e\u0439 \u0438\u043d\u0442\u0435\u0440\u043f\u0440\u0435\u0442\u0438\u0440\u0443\u0435\u043c\u043e\u0441\u0442\u044c\u044e, \u043f\u043e\u0441\u043a\u043e\u043b\u044c\u043a\u0443 \u0432\u0438\u0437\u0443\u0430\u043b\u0438\u0437\u0438\u0440\u0443\u044f \u043a\u0430\u043d\u0430\u043b, \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0439 \u043a\u0430\u0436\u0434\u043e\u043c\u0443 \u0438\u0437 \u043a\u043b\u0430\u0441\u0441\u043e\u0432, \u043c\u043e\u0436\u043d\u043e \u043f\u043e\u043d\u044f\u0442\u044c, \u043a\u0430\u043a\u0438\u0435 \u043e\u0431\u043b\u0430\u0441\u0442\u0438 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0433\u043e\u043b\u043e\u0441\u0443\u044e\u0442 \u0437\u0430 \u0442\u043e\u0442 \u0438\u043b\u0438 \u0438\u043d\u043e\u0439 \u043a\u043b\u0430\u0441\u0441, \u043e\u0431\u043b\u0430\u0434\u0430\u044f \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u043c\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f\u043c\u0438 \u0438 \u0432\u043d\u043e\u0441\u044f \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0439 \u0432\u043a\u043b\u0430\u0434 \u0432 \u0435\u0433\u043e \u0432\u0435\u0440\u043e\u044f\u0442\u043d\u043e\u0441\u0442\u044c."]})}),"\n",(0,i.jsx)(e.h2,{id:"\u043f\u0438\u0440\u0430\u043c\u0438\u0434\u0430\u043b\u044c\u043d\u044b\u0439-\u043f\u0443\u043b\u0438\u043d\u0433",children:"\u041f\u0438\u0440\u0430\u043c\u0438\u0434\u0430\u043b\u044c\u043d\u044b\u0439 \u043f\u0443\u043b\u0438\u043d\u0433"}),"\n",(0,i.jsxs)(e.p,{children:["\u0413\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u044b\u0439 \u043f\u0443\u043b\u0438\u043d\u0433, \u0430\u0433\u0440\u0435\u0433\u0438\u0440\u0443\u044f \u043f\u043e \u0432\u0441\u0435\u043c \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u043c \u043a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442\u0430\u043c, \u0442\u0435\u0440\u044f\u0435\u0442 \u0432\u0441\u044e \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u0443\u044e \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e. \u0415\u0441\u043b\u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0432 \u0432\u0438\u0434\u0435 \u0432\u0435\u043a\u0442\u043e\u0440\u0430 \u0444\u0438\u043a\u0441\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u0440\u0430\u0437\u043c\u0435\u0440\u0430, \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0432 \u0445\u043e\u0442\u044f \u0431\u044b \u0447\u0430\u0441\u0442\u044c \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0439 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438, \u0442\u043e \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u0442\u0441\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c ",(0,i.jsx)(e.strong,{children:"\u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u043f\u0438\u0440\u0430\u043c\u0438\u0434\u0430\u043b\u044c\u043d\u044b\u0439 \u043f\u0443\u043b\u0438\u043d\u0433"})," (spatial pyramid pooling, ",(0,i.jsx)(e.a,{href:"https://arxiv.org/abs/1406.4729",children:"[1]"}),"), \u043a\u0430\u043a \u043c\u044b \u0443\u0436\u0435 \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u043b\u0438 \u043f\u0440\u0438 ",(0,i.jsx)(e.a,{href:"../ConvPool-1D/Pooling-1D#%D0%BF%D0%B8%D1%80%D0%B0%D0%BC%D0%B8%D0%B4%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9-%D0%BF%D1%83%D0%BB%D0%B8%D0%BD%D0%B3",children:"\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0435 \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0435\u0439"}),"."]}),"\n",(0,i.jsxs)(e.p,{children:["\u0412 \u044d\u0442\u043e\u043c \u0432\u0438\u0434\u0435 \u043f\u0443\u043b\u0438\u043d\u0433\u0430 \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0433\u0438\u043f\u0435\u0440\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432 \u0437\u0430\u0434\u0430\u0451\u0442\u0441\u044f \u043d\u0430\u0431\u043e\u0440 \u0441\u0435\u0442\u043e\u043a \u0444\u0438\u043a\u0441\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u0440\u0430\u0437\u043c\u0435\u0440\u0430, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 1x1 \u0438 4x4, \u043f\u043e\u0441\u043b\u0435 \u0447\u0435\u0433\u043e \u043a\u0430\u0440\u0442\u0430 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0440\u0430\u0437\u0431\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u044d\u0442\u0438\u043c\u0438 \u0441\u0435\u0442\u043a\u0430\u043c\u0438 \u043d\u0430 \u043e\u0431\u043b\u0430\u0441\u0442\u0438, \u043f\u043e\u0441\u043b\u0435 \u0447\u0435\u0433\u043e ",(0,i.jsx)(e.em,{children:"\u043a \u043a\u0430\u0436\u0434\u043e\u0439 \u043e\u0431\u043b\u0430\u0441\u0442\u0438"})," \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f \u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u044b\u0439 \u043f\u0443\u043b\u0438\u043d\u0433, \u0430 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b \u044d\u0442\u0438\u0445 \u043f\u0443\u043b\u0438\u043d\u0433\u043e\u0432 \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u044f\u044e\u0442\u0441\u044f (\u043a\u043e\u043d\u043a\u0430\u0442\u0435\u043d\u0438\u0440\u0443\u044e\u0442\u0441\u044f), \u043a\u0430\u043a \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u043e \u043d\u0430 \u0440\u0438\u0441\u0443\u043d\u043a\u0435:"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:s(71470).A+"",width:"968",height:"935"})}),"\n",(0,i.jsx)(e.p,{children:"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0435\u0441\u043b\u0438 \u0440\u0435\u0447\u044c \u0438\u0434\u0451\u0442 \u043e \u043f\u0438\u0440\u0430\u043c\u0438\u0434\u0430\u043b\u044c\u043d\u043e\u043c \u043c\u0430\u043a\u0441\u0438\u043c\u0438\u0437\u0438\u0440\u0443\u044e\u0449\u0435\u043c \u043f\u0443\u043b\u0438\u043d\u0433\u0435, \u0442\u043e \u0434\u043b\u044f 4-\u0445 \u043a\u0430\u043d\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0435\u0433\u043e \u0432\u044b\u0445\u043e\u0434\u043e\u043c \u0431\u0443\u0434\u0443\u0442 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0432 \u0440\u0430\u043c\u043a\u0430\u0445 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u043a\u0430\u043d\u0430\u043b\u0430 \u0446\u0435\u043b\u0438\u043a\u043e\u043c, \u0430 \u0442\u0430\u043a\u0436\u0435 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0432 \u0440\u0430\u043c\u043a\u0430\u0445 \u043a\u0430\u0436\u0434\u043e\u0439 \u043e\u0431\u043b\u0430\u0441\u0442\u0438 1,2,3,4 \u0432 \u0440\u0430\u043c\u043a\u0430\u0445 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u043a\u0430\u043d\u0430\u043b\u0430, \u0442\u043e \u0435\u0441\u0442\u044c \u0432\u0435\u043a\u0442\u043e\u0440 \u0438\u0437 4+4*4=20 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439."}),"\n",(0,i.jsx)(e.p,{children:"\u041f\u0438\u0440\u0430\u043c\u0438\u0434\u0430\u043b\u044c\u043d\u044b\u0439 \u043f\u0443\u043b\u0438\u043d\u0433 \u0442\u0430\u043a\u0436\u0435 \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u0438\u0442 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u043b\u044c\u043d\u043e\u0433\u043e \u0440\u0430\u0437\u043c\u0435\u0440\u0430 \u0432 \u0432\u0435\u043a\u0442\u043e\u0440 \u0444\u0438\u043a\u0441\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0439 \u0440\u0430\u0437\u043c\u0435\u0440\u043d\u043e\u0441\u0442\u0438, \u043d\u043e \u0442\u0435\u043f\u0435\u0440\u044c \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u0447\u0430\u0441\u0442\u0438\u0447\u043d\u043e \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0430, \u043f\u043e\u0441\u043a\u043e\u043b\u044c\u043a\u0443 \u0442\u0435\u043f\u0435\u0440\u044c \u043c\u044b \u0437\u043d\u0430\u0435\u043c \u0445\u043e\u0442\u044f \u0431\u044b \u0432 \u043a\u0430\u043a\u043e\u0439 \u0438\u0437 4-\u0445 \u043e\u0431\u043b\u0430\u0441\u0442\u0435\u0439 \u0431\u044b\u043b \u0434\u043e\u0441\u0442\u0438\u0433\u043d\u0443\u0442 \u043a\u0430\u043a\u043e\u0439 \u043c\u0430\u043a\u0441\u0438\u043c\u0443\u043c."}),"\n",(0,i.jsx)(e.p,{children:"\u0412 \u043f\u0438\u0440\u0430\u043c\u0438\u0434\u0430\u043b\u044c\u043d\u044b\u0439 \u043f\u0443\u043b\u0438\u043d\u0433 \u0442\u0430\u043a\u0436\u0435 \u0447\u0430\u0441\u0442\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u044e\u0442 \u0431\u043e\u043b\u0435\u0435 \u043c\u0435\u043b\u043a\u0438\u0435 \u0441\u0435\u0442\u043a\u0438, \u0442\u0430\u043a\u0438\u0435 \u043a\u0430\u043a 8x8 \u0438 16x16."}),"\n",(0,i.jsx)(e.h2,{id:"\u043b\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0430",children:"\u041b\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0430"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"https://arxiv.org/abs/1406.4729",children:"He K. et al. Spatial pyramid pooling in deep convolutional networks for visual recognition //IEEE transactions on pattern analysis and machine intelligence. \u2013 2015. \u2013 \u0422. 37. \u2013 \u2116. 9. \u2013 \u0421. 1904-1916."})}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},53482:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/13-pooling-278c9ed65f81859eab72dadba44a8bd2.png"},80599:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/14-global-pooling-bfdf9fdbc7c2cd30d8a962eae7143233.png"},71470:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/15-hierarchical-pooling-9fc1672830d0e4f6ba7f8daa2eec5d7b.png"},28453:(n,e,s)=>{s.d(e,{R:()=>a,x:()=>r});var i=s(96540);const o={},l=i.createContext(o);function a(n){const e=i.useContext(l);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:a(n.components),i.createElement(l.Provider,{value:e},n.children)}}}]);