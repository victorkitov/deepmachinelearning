"use strict";(self.webpackChunksite_new=self.webpackChunksite_new||[]).push([[8743],{99382:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var s=o(74848),t=o(28453);const i={description:""},l="\u0421\u0432\u0451\u0440\u0442\u043e\u0447\u043d\u044b\u0435 \u0441\u0435\u0442\u0438 \u0434\u043b\u044f \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0435\u0439",c={id:"docs_dl/ConvPool-1D/Convolutional-nets-for-sequences",title:"\u0421\u0432\u0451\u0440\u0442\u043e\u0447\u043d\u044b\u0435 \u0441\u0435\u0442\u0438 \u0434\u043b\u044f \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0435\u0439",description:"",source:"@site/docs/docs_dl/09-ConvPool-1D/05-Convolutional-nets-for-sequences.md",sourceDirName:"docs_dl/09-ConvPool-1D",slug:"/docs_dl/ConvPool-1D/Convolutional-nets-for-sequences",permalink:"/docs/docs_dl/ConvPool-1D/Convolutional-nets-for-sequences",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{description:""},sidebar:"docs_dl",previous:{title:"\u041f\u0443\u043b\u0438\u043d\u0433",permalink:"/docs/docs_dl/ConvPool-1D/Pooling-1D"},next:{title:"\u041b\u043e\u043a\u0430\u043b\u044c\u043d\u0430\u044f \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439",permalink:"/docs/category/\u043b\u043e\u043a\u0430\u043b\u044c\u043d\u0430\u044f-\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430-\u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439"}},r={},d=[{value:"\u041b\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0430",id:"\u043b\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0430",level:2}];function a(n){const e={a:"a",admonition:"admonition",blockquote:"blockquote",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,t.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"\u0441\u0432\u0451\u0440\u0442\u043e\u0447\u043d\u044b\u0435-\u0441\u0435\u0442\u0438-\u0434\u043b\u044f-\u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0435\u0439",children:"\u0421\u0432\u0451\u0440\u0442\u043e\u0447\u043d\u044b\u0435 \u0441\u0435\u0442\u0438 \u0434\u043b\u044f \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0435\u0439"}),"\n",(0,s.jsx)(e.p,{children:"\u0420\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0438\u043c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0441\u0432\u0451\u0440\u0442\u043e\u043a \u043d\u0430 \u043f\u0440\u0438\u043c\u0435\u0440\u0435 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0442\u0435\u0441\u0442\u0430. \u0412\u043d\u0430\u0447\u0430\u043b\u0435 \u043a\u0430\u0436\u0434\u043e\u0435 \u0441\u043b\u043e\u0432\u043e \u0442\u0435\u043a\u0441\u0442\u0430 \u043a\u043e\u0434\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u043c \u044d\u043c\u0431\u0435\u0434\u0434\u0438\u043d\u0433\u043e\u043c, \u0442.\u0435. \u0432\u0435\u043a\u0442\u043e\u0440\u043e\u0432 \u0432\u0435\u0449\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0445 \u0447\u0438\u0441\u0435\u043b \u0444\u0438\u043a\u0441\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u0440\u0430\u0437\u043c\u0435\u0440\u0430. \u041f\u043e\u043a\u0430 \u043c\u043e\u0436\u043d\u043e \u0441\u0447\u0438\u0442\u0430\u0442\u044c, \u0447\u0442\u043e \u044d\u043c\u0431\u0435\u0434\u0434\u0438\u043d\u0433 \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0441\u043b\u043e\u0432\u0430 \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u043e, \u0445\u043e\u0442\u044f \u043f\u043e\u0442\u043e\u043c \u0438\u0437\u0443\u0447\u0438\u043c \u0431\u043e\u043b\u0435\u0435 \u043f\u0440\u043e\u0434\u0432\u0438\u043d\u0443\u0442\u044b\u0435 \u043c\u0435\u0442\u043e\u0434\u044b \u0438\u0445 \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0438."}),"\n",(0,s.jsx)(e.p,{children:"\u0420\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0438\u043c \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435"}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u0434\u043e\u0441\u0442\u043e\u043f\u0440\u0438\u043c\u0435\u0447\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c\u044e \u0433\u043e\u0440\u043e\u0434\u0430 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0441\u043e\u0431\u043e\u0440 \u043d\u0430 \u0446\u0435\u043d\u0442\u0440\u0430\u043b\u044c\u043d\u043e\u0439 \u043f\u043b\u043e\u0449\u0430\u0434\u0438 \u0438 \u043a\u0440\u0430\u0441\u0438\u0432\u044b\u0439 \u043f\u0430\u0440\u043a."}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u0415\u0441\u043b\u0438 \u043a\u043e\u0434\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043a\u0430\u0436\u0434\u043e\u0435 \u0441\u043b\u043e\u0432\u043e 4-\u0445 \u043c\u0435\u0440\u043d\u044b\u043c \u044d\u043c\u0431\u0435\u0434\u0434\u0438\u043d\u0433\u043e\u043c \u0438 \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u0442\u044c 3 \u0441\u0432\u0451\u0440\u0442\u043a\u0438 \u0441 \u0440\u0430\u0437\u043c\u0435\u0440\u043e\u043c \u044f\u0434\u0440\u0430 3, \u0442\u043e \u043f\u043e\u043b\u0443\u0447\u0438\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0443\u044e \u0432\u0438\u0437\u0443\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044e \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0430:"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:o(19303).A+"",width:"1216",height:"771"})}),"\n",(0,s.jsx)(e.p,{children:"\u041e\u0431\u0440\u0430\u0442\u0438\u043c \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435, \u0447\u0442\u043e \u0441\u0438\u043c\u0432\u043e\u043b \u0442\u043e\u0447\u043a\u0438 \u043a\u043e\u0434\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u043c \u044d\u043c\u0431\u0435\u0434\u0434\u0438\u043d\u0433\u043e\u043c. \u042d\u0442\u043e \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0442\u044c \u0442\u0435\u043a\u0441\u0442\u044b \u0438\u0437 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0439, \u0430 \u043c\u043e\u0434\u0435\u043b\u0438 \u043f\u0440\u0438 \u044d\u0442\u043e\u043c \u043f\u043e\u043d\u0438\u043c\u0430\u0442\u044c, \u043a\u043e\u0433\u0434\u0430 \u0437\u0430\u043a\u0430\u043d\u0447\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u043e\u0434\u043d\u043e \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0438 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u043d\u043e\u0432\u043e\u0435. \u041f\u043e\u0441\u043b\u0435 \u043a\u0430\u0436\u0434\u043e\u0439 \u0441\u0432\u0451\u0440\u0442\u043a\u0438 \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442 \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u043d\u0435\u043b\u0438\u043d\u0435\u0439\u043d\u043e\u0441\u0442\u0438."}),"\n",(0,s.jsx)(e.p,{children:"\u0427\u0442\u043e\u0431\u044b \u0441\u043e\u043a\u0440\u0430\u0442\u0438\u0442\u044c \u0440\u0430\u0437\u043c\u0435\u0440 \u043f\u0440\u043e\u043c\u0435\u0436\u0443\u0442\u043e\u0447\u043d\u043e\u0433\u043e \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043c\u043e\u0436\u043d\u043e \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c \u043f\u0443\u043b\u0438\u043d\u0433, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0441 \u044f\u0434\u0440\u043e\u043c \u0434\u043b\u0438\u043d\u044b 2:"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:o(91116).A+"",width:"1006",height:"387"})}),"\n",(0,s.jsx)(e.p,{children:"\u041f\u0440\u0438\u043c\u0435\u043d\u044f\u044f \u0441\u043b\u043e\u0438 \u0441\u0432\u0451\u0440\u0442\u043e\u043a \u0438 \u043f\u0443\u043b\u0438\u043d\u0433\u043e\u0432 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0440\u0430\u0437, \u043f\u043e\u043b\u0443\u0447\u0438\u043c \u043e\u043a\u043e\u043d\u0447\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u044f:"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:o(36005).A+"",width:"429",height:"243"})}),"\n",(0,s.jsx)(e.p,{children:"\u041f\u0440\u043e\u0431\u043b\u0435\u043c\u0430 \u043e\u043a\u043e\u043d\u0447\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0433\u043e \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0437\u0430\u043a\u043b\u044e\u0447\u0430\u0435\u0442\u0441\u044f \u0432 \u0442\u043e\u043c, \u0447\u0442\u043e \u0435\u0433\u043e \u0434\u043b\u0438\u043d\u0430 \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u0434\u043b\u0438\u043d\u044b \u0432\u0445\u043e\u0434\u043d\u043e\u0433\u043e \u0442\u0435\u043a\u0441\u0442\u0430 - \u0447\u0435\u043c \u0442\u0435\u043a\u0441\u0442 \u0434\u043b\u0438\u043d\u043d\u0435\u0435, \u0442\u0435\u043c \u0434\u043b\u0438\u043d\u043d\u0435\u0435 \u0431\u0443\u0434\u0435\u0442 \u043e\u043a\u043e\u043d\u0447\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435. \u0410 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u043d\u0435\u0439\u0440\u043e\u0441\u0435\u0442\u044c \u0434\u043e\u043b\u0436\u043d\u0430 \u0432\u044b\u0434\u0430\u0442\u044c \u0444\u0438\u043a\u0441\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0439 \u0440\u0430\u0437\u043c\u0435\u0440\u043d\u043e\u0441\u0442\u0438. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0434\u043b\u044f C-\u043a\u043b\u0430\u0441\u0441\u043e\u0432\u043e\u0439 \u043a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438, \u044d\u0442\u043e \u0432\u0435\u043a\u0442\u043e\u0440 \u0438\u0437 \u0421 \u0432\u0435\u0440\u043e\u044f\u0442\u043d\u043e\u0441\u0442\u0435\u0439 \u043f\u0440\u0438\u043d\u0430\u0434\u043b\u0435\u0436\u043d\u043e\u0441\u0442\u0438 \u0442\u0435\u043a\u0441\u0442\u0430 \u043a\u0430\u0436\u0434\u043e\u043c\u0443 \u0438\u0437 \u043a\u043b\u0430\u0441\u0441\u043e\u0432."}),"\n",(0,s.jsxs)(e.p,{children:["\u0427\u0442\u043e\u0431\u044b \u043e\u0442\u043e\u0431\u0440\u0430\u0437\u0438\u0442\u044c \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439 \u0434\u043b\u0438\u043d\u044b \u0432 \u0432\u0435\u043a\u0442\u043e\u0440 \u0444\u0438\u043a\u0441\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0439 \u0440\u0430\u0437\u043c\u0435\u0440\u043d\u043e\u0441\u0442\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f ",(0,s.jsx)(e.strong,{children:"\u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u044b\u0439 \u043f\u0443\u043b\u0438\u043d\u0433"})," (global pooling) - \u0430\u0433\u0440\u0435\u0433\u0430\u0446\u0438\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u0430 \u043f\u043e \u0432\u0441\u0435\u043c \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430\u043c \u0432\u0445\u043e\u0434\u043d\u043e\u0439 \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438. \u0412 \u043f\u0440\u0438\u043c\u0435\u0440\u0435 \u0443 \u043d\u0430\u0441 5 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432 \u0438 4 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438. \u041f\u0440\u0438\u043c\u0435\u043d\u044f\u044f, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u044b\u0439 \u043c\u0430\u043a\u0441\u0438\u043c\u0438\u0437\u0438\u0440\u0443\u044e\u0449\u0438\u0439 \u043f\u0443\u043b\u0438\u043d\u0433, \u043f\u043e\u043b\u0443\u0447\u0438\u043c \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0432\u0441\u0435\u0433\u043e \u0442\u0435\u043a\u0441\u0442\u0430 \u0432 \u0432\u0438\u0434\u0435 \u0432\u0435\u043a\u0442\u043e\u0440\u0430 \u0434\u043b\u0438\u043d\u044b 5:"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:o(93747).A+"",width:"574",height:"266"})}),"\n",(0,s.jsx)(e.p,{children:"\u041f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u044b\u0439 5-\u043c\u0435\u0440\u043d\u044b\u0439 \u0432\u0435\u043a\u0442\u043e\u0440 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0441\u043e\u0431\u043e\u0439 \u044d\u043c\u0431\u0435\u0434\u0434\u0438\u043d\u0433 \u0434\u043b\u044f \u0432\u0441\u0435\u0433\u043e \u0442\u0435\u043a\u0441\u0442\u0430 \u0438 \u043d\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u0435\u0433\u043e \u0434\u043b\u0438\u043d\u044b. \u0414\u043b\u044f \u043e\u043a\u043e\u043d\u0447\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0439 \u043a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438 \u0442\u0435\u043a\u0441\u0442\u0430 \u043a \u044d\u0442\u043e\u043c\u0443 \u044d\u043c\u0431\u0435\u0434\u0434\u0438\u043d\u0433\u0443 \u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c \u043c\u043d\u043e\u0433\u043e\u0441\u043b\u043e\u0439\u043d\u044b\u0439 \u043f\u0435\u0440\u0441\u043f\u0435\u0442\u0440\u043e\u043d."}),"\n",(0,s.jsxs)(e.p,{children:["\u041f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u0430\u044f \u043c\u043e\u0434\u0435\u043b\u044c (\u043f\u0440\u0435\u0434\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0441\u0432\u0451\u0440\u0442\u043a\u0430\u043c\u0438 \u0438 \u043f\u0443\u043b\u0438\u043d\u0433\u0430\u043c\u0438+\u043c\u043d\u043e\u0433\u043e\u0441\u043b\u043e\u0439\u043d\u044b\u0439 \u043f\u0435\u0440\u0441\u0435\u043f\u0442\u0440\u043e\u043d) \u043d\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u043a\u0430\u043a \u0446\u0435\u043b\u043e\u0435 \u043f\u043e \u043e\u0431\u0443\u0447\u0430\u044e\u0449\u0435\u0439 \u0432\u044b\u0431\u043e\u0440\u043a\u0435 \u0438 \u043d\u0430\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0441\u0432\u0451\u0440\u0442\u043e\u0447\u043d\u043e\u0439 \u043d\u0435\u0439\u0440\u043e\u0441\u0435\u0442\u044c\u044e \u0434\u043b\u044f \u0442\u0435\u043a\u0441\u0442\u043e\u0432. \u0414\u0435\u0442\u0430\u043b\u044c\u043d\u0435\u0435 \u043e\u0431 \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0435 \u043c\u043e\u0436\u043d\u043e \u043f\u0440\u043e\u0447\u0438\u0442\u0430\u0442\u044c \u043d\u0430 \u0441\u0430\u0439\u0442\u0435 ",(0,s.jsx)(e.a,{href:"https://lena-voita.github.io/nlp_course/models/convolutional.html",children:"[1]"}),"."]}),"\n",(0,s.jsxs)(e.admonition,{title:"\u041e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0435\u0442 \u043d\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u0442\u0435\u043a\u0441\u0442\u044b",type:"tip",children:[(0,s.jsx)(e.p,{children:"\u0423\u043a\u0430\u0437\u0430\u043d\u043d\u0430\u044f \u0441\u0432\u0451\u0440\u0442\u043e\u0447\u043d\u0430\u044f \u043d\u0435\u0439\u0440\u043e\u0441\u0435\u0442\u044c \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u0430 \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0442\u044c \u043d\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u0442\u0435\u043a\u0441\u0442\u044b, \u043d\u043e \u0438 \u043b\u044e\u0431\u044b\u0435 \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u0434\u0438\u0441\u043a\u0440\u0435\u0442\u043d\u044b\u0445 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u044d\u0442\u043e \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u043d\u0443\u043a\u043b\u0435\u043e\u0442\u0438\u0434\u043e\u0432 \u0432 \u0446\u0435\u043f\u043e\u0447\u043a\u0430\u0445 \u0414\u041d\u041a."}),(0,s.jsx)(e.p,{children:"\u0422\u0430\u043a\u0436\u0435 \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430 \u043c\u043e\u0436\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0434\u043b\u044f \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u0430 \u0432\u0435\u043a\u0442\u043e\u0440\u0430 \u0438\u0437 \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445 \u0440\u044f\u0434\u043e\u0432. \u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0442\u0435 \u0441\u0432\u0435\u0440\u0442\u043a\u0438 \u0438 \u043f\u0443\u043b\u0438\u043d\u0433\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0443\u043c\u0435\u044e\u0442 \u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u043d\u0430\u0437\u0430\u0434, \u043d\u043e \u043d\u0435 \u0432\u043f\u0435\u0440\u0451\u0434."})]}),"\n",(0,s.jsx)(e.p,{children:"\u0413\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u044b\u0439 \u043c\u0430\u043a\u0441\u0438\u043c\u0438\u0437\u0438\u0440\u0443\u044e\u0449\u0438\u0439 \u043f\u0443\u043b\u0438\u043d\u0433 \u0432 \u043f\u043e\u0434\u043e\u0431\u043d\u044b\u0445 \u0441\u0435\u0442\u044f\u0445 \u0447\u0430\u0441\u0442\u043e \u0437\u0430\u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f \u043d\u0430 \u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u044b\u0439 \u043c\u0430\u043a\u0441\u0438\u043c\u0438\u0437\u0438\u0440\u0443\u044e\u0449\u0438\u0439 \u043f\u0443\u043b\u0438\u043d\u0433, \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u044e\u0449\u0438\u0439 \u043d\u0435 \u043e\u0434\u043d\u043e \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435, \u0430 \u0434\u0432\u0430 \u0438\u043b\u0438 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0441\u0430\u043c\u044b\u0445 \u0431\u043e\u043b\u044c\u0448\u0438\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u0432 \u043f\u043e\u0440\u044f\u0434\u043a\u0435 \u0438\u0445 \u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u044f."}),"\n",(0,s.jsx)(e.admonition,{title:"\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0435 \u0441\u0432\u0451\u0440\u0442\u043e\u0447\u043d\u044b\u0445 \u0441\u043b\u043e\u0451\u0432",type:"warning",children:(0,s.jsx)(e.p,{children:"\u0421\u0432\u0451\u0440\u0442\u043e\u0447\u043d\u044b\u0435 \u0441\u043b\u043e\u0438, \u043e\u043f\u0435\u0440\u0438\u0440\u0443\u044f \u0441\u0432\u0451\u0440\u0442\u043a\u0430\u043c\u0438 \u0438 \u043f\u0443\u043b\u0438\u043d\u0433\u0430\u043c\u0438 \u0438\u0437\u0432\u043b\u0435\u043a\u0430\u044e\u0442 \u043b\u0438\u0448\u044c \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u044b\u0435 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u0438 \u0438\u0437 \u0442\u0435\u043a\u0441\u0442\u0430, \u0442.\u0435. \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u0438 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0445 \u0444\u0440\u0430\u0437 \u0438\u0437 \u043f\u043e\u0434\u0440\u044f\u0434 \u0438\u0434\u0443\u0449\u0438\u0445 \u0441\u043b\u043e\u0432 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u043d\u043e\u0439 \u0434\u043b\u0438\u043d\u044b. \u0413\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u044b\u0439 \u0430\u043d\u0430\u043b\u0438\u0437 \u0442\u0435\u043a\u0441\u0442\u0430 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442\u0441\u044f \u043b\u0438\u0448\u044c \u043c\u043d\u043e\u0433\u043e\u0441\u043b\u043e\u043d\u044b\u043c \u043f\u0435\u0440\u0441\u0435\u043f\u0442\u0440\u043e\u043d\u043e\u0432, \u043f\u0440\u0438\u043c\u0435\u043d\u0451\u043d\u043d\u044b\u043c \u043a \u0432\u044b\u0445\u043e\u0434\u0443 \u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043f\u0443\u043b\u0438\u043d\u0433\u0430."})}),"\n",(0,s.jsx)(e.h2,{id:"\u043b\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0430",children:"\u041b\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0430"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://lena-voita.github.io/nlp_course/models/convolutional.html",children:"lena-voita.github.io/nlp_course/models/convolutional.html"})}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(a,{...n})}):a(n)}},19303:(n,e,o)=>{o.d(e,{A:()=>s});const s=o.p+"assets/images/01-conv-layer-8bfd0f3f14731f0514b1fcfab6a71a2c.png"},91116:(n,e,o)=>{o.d(e,{A:()=>s});const s=o.p+"assets/images/02-pooling-layer-72753bc9a6438a6bea027e5da01be5e8.png"},36005:(n,e,o)=>{o.d(e,{A:()=>s});const s=o.p+"assets/images/03-final-representation-14f68b95f1bba0021c1ecb78f8c7928f.png"},93747:(n,e,o)=>{o.d(e,{A:()=>s});const s=o.p+"assets/images/04-global-max-pooling-5bc3b6fbf74b329304869048d4ddcc5f.png"},28453:(n,e,o)=>{o.d(e,{R:()=>l,x:()=>c});var s=o(96540);const t={},i=s.createContext(t);function l(n){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:l(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);