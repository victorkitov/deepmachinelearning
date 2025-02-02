"use strict";(self.webpackChunksite_new=self.webpackChunksite_new||[]).push([[691],{78982:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var s=t(74848),r=t(28453);const i={description:"\u041f\u0440\u043e\u0441\u0442\u044b\u0435 \u043f\u043e\u0434\u0445\u043e\u0434\u044b \u043a \u0440\u0435\u0448\u0435\u043d\u0438\u044e \u0437\u0430\u0434\u0430\u0447\u0438 \u0441\u0435\u043c\u0430\u043d\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u0441\u0435\u0433\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439 \u0438 \u0438\u0445 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f.",keywords:["\u043f\u0440\u043e\u0441\u0442\u044b\u0435 \u043c\u0435\u0442\u043e\u0434\u044b \u0441\u0435\u0433\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439","\u0431\u0430\u0437\u043e\u0432\u044b\u0435 \u043f\u043e\u0434\u0445\u043e\u0434\u044b \u043a \u0441\u0435\u0433\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439","semantic segmentation","\u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430 \u043a\u043e\u0434\u0438\u0440\u043e\u0432\u0449\u0438\u043a-\u0434\u0435\u043a\u043e\u0434\u0438\u0440\u043e\u0432\u0449\u0438\u043a","encoder-decoder architecture"]},c="\u041f\u043e\u0434\u0445\u043e\u0434\u044b \u043a \u0440\u0435\u0448\u0435\u043d\u0438\u044e",o={id:"Neural-networks/Semantic-segmentation/Semantic-segmentation-approaches",title:"\u041f\u043e\u0434\u0445\u043e\u0434\u044b \u043a \u0440\u0435\u0448\u0435\u043d\u0438\u044e",description:"\u041f\u0440\u043e\u0441\u0442\u044b\u0435 \u043f\u043e\u0434\u0445\u043e\u0434\u044b \u043a \u0440\u0435\u0448\u0435\u043d\u0438\u044e \u0437\u0430\u0434\u0430\u0447\u0438 \u0441\u0435\u043c\u0430\u043d\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u0441\u0435\u0433\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439 \u0438 \u0438\u0445 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f.",source:"@site/docs/Neural-networks/12-Semantic-segmentation/02-Semantic-segmentation-approaches.md",sourceDirName:"Neural-networks/12-Semantic-segmentation",slug:"/Neural-networks/Semantic-segmentation/Semantic-segmentation-approaches",permalink:"/docs/Neural-networks/Semantic-segmentation/Semantic-segmentation-approaches",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"\u041f\u0440\u043e\u0441\u0442\u044b\u0435 \u043f\u043e\u0434\u0445\u043e\u0434\u044b \u043a \u0440\u0435\u0448\u0435\u043d\u0438\u044e \u0437\u0430\u0434\u0430\u0447\u0438 \u0441\u0435\u043c\u0430\u043d\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u0441\u0435\u0433\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439 \u0438 \u0438\u0445 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f.",keywords:["\u043f\u0440\u043e\u0441\u0442\u044b\u0435 \u043c\u0435\u0442\u043e\u0434\u044b \u0441\u0435\u0433\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439","\u0431\u0430\u0437\u043e\u0432\u044b\u0435 \u043f\u043e\u0434\u0445\u043e\u0434\u044b \u043a \u0441\u0435\u0433\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439","semantic segmentation","\u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430 \u043a\u043e\u0434\u0438\u0440\u043e\u0432\u0449\u0438\u043a-\u0434\u0435\u043a\u043e\u0434\u0438\u0440\u043e\u0432\u0449\u0438\u043a","encoder-decoder architecture"]},sidebar:"Neural-networks",previous:{title:"\u0421\u0435\u043c\u0430\u043d\u0442\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0441\u0435\u0433\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f",permalink:"/docs/Neural-networks/Semantic-segmentation/Semantic-segmentation-task"},next:{title:"\u041c\u0435\u0440\u044b \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0430 \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u043e\u0432",permalink:"/docs/Neural-networks/Semantic-segmentation/Semantic-segmentation-quality-metrics"}},a={},d=[{value:"\u0421\u043a\u043e\u043b\u044c\u0437\u044f\u0449\u0435\u0435 \u043e\u043a\u043d\u043e",id:"\u0441\u043a\u043e\u043b\u044c\u0437\u044f\u0449\u0435\u0435-\u043e\u043a\u043d\u043e",level:2},{value:"\u0421\u0435\u0442\u044c \u0438\u0437 \u0441\u0432\u0451\u0440\u0442\u043e\u043a",id:"\u0441\u0435\u0442\u044c-\u0438\u0437-\u0441\u0432\u0451\u0440\u0442\u043e\u043a",level:2},{value:"\u041a\u043e\u0434\u0438\u0440\u043e\u0432\u0449\u0438\u043a-\u0434\u0435\u043a\u043e\u0434\u0438\u0440\u043e\u0432\u0449\u0438\u043a",id:"\u043a\u043e\u0434\u0438\u0440\u043e\u0432\u0449\u0438\u043a-\u0434\u0435\u043a\u043e\u0434\u0438\u0440\u043e\u0432\u0449\u0438\u043a",level:2},{value:"\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0435 \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u044b",id:"\u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0435-\u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u044b",level:3}];function l(e){const n={a:"a",blockquote:"blockquote",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"\u043f\u043e\u0434\u0445\u043e\u0434\u044b-\u043a-\u0440\u0435\u0448\u0435\u043d\u0438\u044e",children:"\u041f\u043e\u0434\u0445\u043e\u0434\u044b \u043a \u0440\u0435\u0448\u0435\u043d\u0438\u044e"}),"\n",(0,s.jsxs)(n.p,{children:["\u0420\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0438\u043c \u043f\u0440\u043e\u0441\u0442\u044b\u0435 \u043c\u0435\u0442\u043e\u0434\u044b \u0440\u0435\u0448\u0435\u043d\u0438\u044f \u0437\u0430\u0434\u0430\u0447\u0438 ",(0,s.jsx)(n.a,{href:"Semantic-segmentation-task",children:"\u0441\u0435\u043c\u0430\u043d\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u0441\u0435\u0433\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439"})," \u0438 \u0438\u0445 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f."]}),"\n",(0,s.jsx)(n.h2,{id:"\u0441\u043a\u043e\u043b\u044c\u0437\u044f\u0449\u0435\u0435-\u043e\u043a\u043d\u043e",children:"\u0421\u043a\u043e\u043b\u044c\u0437\u044f\u0449\u0435\u0435 \u043e\u043a\u043d\u043e"}),"\n",(0,s.jsxs)(n.p,{children:["\u041f\u043e\u0441\u043a\u043e\u043b\u044c\u043a\u0443 \u043c\u044b \u0443\u0436\u0435 \u0443\u043c\u0435\u0435\u043c \u0440\u0435\u0448\u0430\u0442\u044c ",(0,s.jsx)(n.a,{href:"../ConvPool-Images/Conv-net",children:"\u0437\u0430\u0434\u0430\u0447\u0443 \u043a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439"}),", \u0442\u043e \u043c\u044b \u043c\u043e\u0433\u043b\u0438 \u0431\u044b \u0441\u043e\u043f\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0436\u0434\u043e\u043c\u0443 \u043f\u0438\u043a\u0441\u0435\u043b\u044e \u0442\u043e\u0442 \u043a\u043b\u0430\u0441\u0441, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0435\u043c\u0443 \u043d\u0430\u0437\u043d\u0430\u0447\u0430\u0435\u0442 \u043a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u043e\u043d\u043d\u0430\u044f \u0441\u0435\u0442\u044c, \u0435\u0441\u043b\u0438 \u0435\u0451 \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c \u043a \u043a\u0432\u0430\u0434\u0440\u0430\u0442\u043d\u043e\u0439 \u043e\u0431\u043b\u0430\u0441\u0442\u0438 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0441 \u0446\u0435\u043d\u0442\u0440\u043e\u043c \u0432 \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u0443\u0435\u043c\u043e\u043c \u043f\u0438\u043a\u0441\u0435\u043b\u0435. \u0422\u043e\u0433\u0434\u0430 \u0434\u043b\u044f \u0441\u0435\u0433\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438 \u0432\u0441\u0435\u0433\u043e \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u043d\u0430\u043c \u0431\u044b \u043f\u0440\u0438\u0448\u043b\u043e\u0441\u044c \u043f\u0440\u043e\u0441\u043a\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u043a\u0432\u0430\u0434\u0440\u0430\u0442\u043d\u043e\u0439 \u043e\u0431\u043b\u0430\u0441\u0442\u044c\u044e, \u0432\u044b\u0447\u0438\u0441\u043b\u044f\u044f \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u043f\u0438\u043a\u0441\u0435\u043b\u044f \u0432 \u0446\u0435\u043d\u0442\u0440\u0435 \u043e\u0431\u043b\u0430\u0441\u0442\u0438 \u0435\u0433\u043e \u0441\u0432\u043e\u0439 \u043a\u043b\u0430\u0441\u0441."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\u042d\u0442\u043e \u043e\u0447\u0435\u043d\u044c \u043d\u0435\u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u043e\u0435 \u0440\u0435\u0448\u0435\u043d\u0438\u0435, \u043f\u043e\u0441\u043a\u043e\u043b\u044c\u043a\u0443 \u0442\u0440\u0435\u0431\u0443\u0435\u0442 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u044c \u043a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044e \u0441\u0442\u043e\u043b\u044c\u043a\u043e \u0440\u0430\u0437, \u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043f\u0438\u043a\u0441\u0435\u043b\u0435\u0439 \u043d\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0438. \u041f\u0440\u0438 \u044d\u0442\u043e\u043c \u043a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u0443 \u043f\u0440\u0438\u0448\u043b\u043e\u0441\u044c \u0431\u044b \u0432\u044b\u0434\u0435\u043b\u044f\u0442\u044c \u043e\u0434\u043d\u0438 \u0438 \u0442\u0435 \u0436\u0435 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u0438 \u0434\u043b\u044f \u043f\u0435\u0440\u0435\u0441\u0435\u043a\u0430\u044e\u0449\u0438\u0445\u0441\u044f \u0444\u0440\u0430\u0433\u043c\u0435\u043d\u0442\u043e\u0432."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u0441\u0435\u0442\u044c-\u0438\u0437-\u0441\u0432\u0451\u0440\u0442\u043e\u043a",children:"\u0421\u0435\u0442\u044c \u0438\u0437 \u0441\u0432\u0451\u0440\u0442\u043e\u043a"}),"\n",(0,s.jsxs)(n.p,{children:["\u041c\u044b \u043c\u043e\u0433\u043b\u0438 \u0431\u044b \u043a \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044e \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c \u0441\u0435\u0440\u0438\u044e \u0441\u0432\u0451\u0440\u0442\u043e\u043a, \u043a\u0430\u043a \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u043e \u043d\u0438\u0436\u0435 (",(0,s.jsx)(n.a,{href:"https://cs231n.stanford.edu/slides/2017/cs231n_2017_lecture11.pdf?ref=jeremyjordan.me",children:"\u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a"}),"):"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(83633).A+"",width:"923",height:"362"})}),"\n",(0,s.jsxs)(n.p,{children:["\u041a\u0430\u0436\u0434\u0430\u044f \u0441\u0432\u0451\u0440\u0442\u043a\u0430 \u0434\u043e\u043b\u0436\u043d\u0430 \u0438\u043c\u0435\u0442\u044c \u0448\u0430\u0433 (stride) 1 \u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c ",(0,s.jsx)(n.a,{href:"../ConvPool-Images/Conv-params#%D0%BF%D0%B0%D0%B4%D0%B4%D0%B8%D0%BD%D0%B3",children:"\u0434\u043e\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435"})," (padding) \u0432\u043e\u043a\u0440\u0443\u0433 \u0433\u0440\u0430\u043d\u0438\u0446 (padding), \u0447\u0442\u043e\u0431\u044b \u0440\u0430\u0437\u043c\u0435\u0440 \u0432\u044b\u0445\u043e\u0434\u0430 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u043b \u0441 \u0440\u0430\u0437\u043c\u0435\u0440\u043e\u043c \u0432\u0445\u043e\u0434\u0430."]}),"\n",(0,s.jsx)(n.p,{children:"\u0422\u0430\u043a\u043e\u0439 \u043f\u043e\u0434\u0445\u043e\u0434 \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u0435\u0435, \u0447\u0435\u043c \u043f\u0435\u0440\u0432\u044b\u0439, \u043f\u043e\u0441\u043a\u043e\u043b\u044c\u043a\u0443 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u0438, \u0438\u0437\u0432\u043b\u0435\u043a\u0430\u0435\u043c\u044b\u0435 \u0434\u043b\u044f \u0441\u043e\u0441\u0435\u0434\u043d\u0438\u0445 \u043f\u0438\u043a\u0441\u0435\u043b\u0435\u0439 \u043f\u043e \u043f\u0435\u0440\u0435\u0441\u0435\u043a\u0430\u044e\u0449\u0438\u043c\u0441\u044f \u0447\u0430\u0441\u0442\u044f\u043c \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f, \u0432\u044b\u0447\u0438\u0441\u043b\u044f\u044e\u0442\u0441\u044f \u043e\u0434\u043d\u043e\u043a\u0440\u0430\u0442\u043d\u043e \u0438 \u043f\u0435\u0440\u0435\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f."}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\u0422\u0435\u043c \u043d\u0435 \u043c\u0435\u043d\u0435\u0435, \u044d\u0442\u043e\u0442 \u043f\u043e\u0434\u0445\u043e\u0434 \u043e\u0447\u0435\u043d\u044c \u0437\u0430\u0442\u0440\u0430\u0442\u0435\u043d \u043f\u043e \u043f\u0430\u043c\u044f\u0442\u0438 \u0438 \u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u044f\u043c, \u043f\u043e\u0441\u043a\u043e\u043b\u044c\u043a\u0443 \u043f\u0440\u0435\u0434\u043f\u043e\u043b\u0430\u0433\u0430\u0435\u0442 \u043c\u043d\u043e\u0433\u043e\u043a\u0440\u0430\u0442\u043d\u0443\u044e \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0443 \u0442\u0435\u043d\u0437\u043e\u0440\u043e\u0432 \u0432\u044b\u0441\u043e\u043a\u043e\u0433\u043e \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0433\u043e \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044f."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u043a\u043e\u0434\u0438\u0440\u043e\u0432\u0449\u0438\u043a-\u0434\u0435\u043a\u043e\u0434\u0438\u0440\u043e\u0432\u0449\u0438\u043a",children:"\u041a\u043e\u0434\u0438\u0440\u043e\u0432\u0449\u0438\u043a-\u0434\u0435\u043a\u043e\u0434\u0438\u0440\u043e\u0432\u0449\u0438\u043a"}),"\n",(0,s.jsxs)(n.p,{children:["\u0422\u0440\u0435\u0442\u0438\u0439 \u043f\u043e\u0434\u0445\u043e\u0434 \u0442\u0430\u043a\u0436\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u0441\u0432\u0451\u0440\u0442\u043e\u0447\u043d\u0443\u044e \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0443, \u043d\u043e \u043f\u0440\u0435\u0434\u043f\u043e\u043b\u0430\u0433\u0430\u0435\u0442 \u043f\u043e\u0441\u0442\u0435\u043f\u0435\u043d\u043d\u043e\u0435 \u0443\u043c\u0435\u043d\u044c\u0448\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0433\u043e \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044f (spatial dimensionality), \u0430 \u0437\u0430\u0442\u0435\u043c \u0432\u043e\u0437\u0432\u0440\u0430\u0442 \u043a \u0438\u0441\u0445\u043e\u0434\u043d\u043e\u043c\u0443 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044e, \u043a\u0430\u043a \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u043e \u043d\u0438\u0436\u0435 (",(0,s.jsx)(n.a,{href:"https://cs231n.stanford.edu/slides/2017/cs231n_2017_lecture11.pdf?ref=jeremyjordan.me",children:"\u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a"}),"):"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(890).A+"",width:"933",height:"310"})}),"\n",(0,s.jsx)(n.p,{children:"\u0411\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u044f \u0442\u043e\u043c\u0443, \u0447\u0442\u043e \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0435 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u0435 \u0441\u043d\u0438\u0436\u0430\u0435\u0442\u0441\u044f, \u0443 \u043d\u0430\u0441 \u043f\u043e\u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u043e \u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0441\u0442\u0438 \u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u0435 \u0441\u043b\u043e\u0436\u043d\u044b\u0445 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432."}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u0421\u0432\u0451\u0440\u0442\u043e\u0447\u043d\u044b\u0435 \u0441\u043b\u043e\u0438, \u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0435 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u0435 \u043f\u043e\u0441\u0442\u0435\u043f\u0435\u043d\u043d\u043e \u0441\u043d\u0438\u0436\u0430\u0435\u0442\u0441\u044f, \u043d\u0430\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f ",(0,s.jsx)(n.strong,{children:"\u043a\u043e\u0434\u0438\u0440\u043e\u0432\u0449\u0438\u043a\u043e\u043c"})," (encoder)."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u041a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0435 \u0441\u0435\u0442\u0438 \u0432\u0435\u043a\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u043b\u0438 \u0432\u044b\u0445\u043e\u0434 \u043a\u043e\u0434\u0438\u0440\u043e\u0432\u0449\u0438\u043a\u0430 \u0438 \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u043b\u0438 \u043a \u043d\u0435\u043c\u0443 ",(0,s.jsx)(n.a,{href:"../MLP/Multilayer-perceptron",children:"\u043c\u043d\u043e\u0433\u043e\u0441\u043b\u043e\u0439\u043d\u044b\u0439 \u043f\u0435\u0440\u0441\u0435\u043f\u0442\u0440\u043e\u043d"}),". \u041d\u043e \u0432 \u0437\u0430\u0434\u0430\u0447\u0435 \u0441\u0435\u043c\u0430\u043d\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u0441\u0435\u0433\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438 \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0432\u044b\u0434\u0430\u0442\u044c \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0432 \u0432\u0438\u0434\u0435 \u0442\u0435\u043d\u0437\u043e\u0440\u0430 \u0442\u0430\u043a\u043e\u0433\u043e \u0436\u0435 \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0433\u043e \u0440\u0430\u0437\u043c\u0435\u0440\u0430, \u043a\u0430\u043a \u0432\u0445\u043e\u0434\u043d\u043e\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u0434\u0430\u043b\u0435\u0435 \u043a \u043f\u0440\u043e\u043c\u0435\u0436\u0443\u0442\u043e\u0447\u043d\u043e\u043c\u0443 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044e, \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u043e\u043c\u0443 \u043a\u043e\u0434\u0438\u0440\u043e\u0432\u0449\u0438\u043a\u043e\u043c, \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f ",(0,s.jsx)(n.strong,{children:"\u0434\u0435\u043a\u043e\u0434\u0438\u0440\u043e\u0432\u0449\u0438\u043a"})," (decoder), \u0441\u043e\u0441\u0442\u043e\u044f\u0449\u0438\u0439 \u0438\u0437 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0445 \u0441\u0432\u0451\u0440\u0442\u043e\u0447\u043d\u044b\u0445 \u0431\u043b\u043e\u043a\u043e\u0432, ",(0,s.jsx)(n.a,{href:"Upsampling-operations",children:"\u043f\u043e\u0432\u044b\u0448\u0430\u044e\u0449\u0438\u0445 \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0435 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u0435"})," (upsampling)."]}),"\n",(0,s.jsx)(n.h3,{id:"\u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0435-\u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u044b",children:"\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0435 \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u044b"}),"\n",(0,s.jsxs)(n.p,{children:["\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0435 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u043d\u043e\u0439 \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u044b \u0437\u0430\u043a\u043b\u044e\u0447\u0430\u0435\u0442\u0441\u044f \u0432 \u0442\u043e\u043c, \u0447\u0442\u043e \u043c\u044b \u043f\u043e \u043f\u0440\u043e\u043c\u0435\u0436\u0443\u0442\u043e\u0447\u043d\u043e\u043c\u0443 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044e ",(0,s.jsx)(n.strong,{children:"\u0432 \u043d\u0438\u0437\u043a\u043e\u043c \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u0438"})," (\u0432\u044b\u0445\u043e\u0434\u0443  \u043a\u043e\u0434\u0438\u0440\u043e\u0432\u0449\u0438\u043a\u0430) \u043f\u044b\u0442\u0430\u0435\u043c\u0441\u044f \u0432\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0441\u0435\u0433\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u043e\u043d\u043d\u0443\u044e \u043a\u0430\u0440\u0442\u0443 ",(0,s.jsx)(n.strong,{children:"\u0432 \u0432\u044b\u0441\u043e\u043a\u043e\u043c \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u0438"}),". \u042d\u0442\u043e \u043d\u0435\u0438\u0437\u0431\u0435\u0436\u043d\u043e \u0431\u0443\u0434\u0435\u0442 \u043f\u0440\u0438\u0432\u043e\u0434\u0438\u0442\u044c \u043a \u043f\u043e\u0442\u0435\u0440\u0435 \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0439 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u0438 \u043d\u0435\u0442\u043e\u0447\u043d\u043e\u0441\u0442\u044f\u043c \u043f\u0440\u0438 \u0432\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0438 \u0433\u0440\u0430\u043d\u0438\u0446 \u043c\u0435\u0436\u0434\u0443 \u043a\u043b\u0430\u0441\u0441\u0430\u043c\u0438."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\u0411\u043e\u043b\u0435\u0435 \u043f\u0440\u043e\u0434\u0432\u0438\u043d\u0443\u0442\u044b\u0435 \u043c\u0435\u0442\u043e\u0434\u044b \u0441\u0435\u0433\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438, \u043e \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0431\u0443\u0434\u0435\u0442 \u0440\u0430\u0441\u0441\u043a\u0430\u0437\u0430\u043d\u043e \u0434\u0430\u043b\u0435\u0435, \u043e\u0441\u043d\u043e\u0432\u0430\u043d\u044b \u043d\u0430 \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0435 \u043a\u043e\u0434\u0438\u0440\u043e\u0432\u0449\u0438\u043a\u0430-\u0434\u0435\u043a\u043e\u0434\u0438\u0440\u043e\u0432\u0449\u0438\u043a\u0430 \u0438 \u043f\u043e-\u0440\u0430\u0437\u043d\u043e\u043c\u0443 \u0440\u0435\u0448\u0430\u044e\u0442 \u044d\u0442\u0443 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0443."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},83633:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/conv-net-cac06e66ae2e390a88e51b7926ff5128.jpg"},890:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/encoder-decoder-8a6be380ec2be0f6b557777720d43523.jpg"},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>o});var s=t(96540);const r={},i=s.createContext(r);function c(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);