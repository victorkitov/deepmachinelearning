"use strict";(self.webpackChunksite_new=self.webpackChunksite_new||[]).push([[8983],{31:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var r=n(4848),i=n(8453);const s={description:"\u041f\u043e\u043d\u044f\u0442\u0438\u0435 \u043e\u0442\u0431\u043e\u0440\u0430 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432 (feature selection) \u0438 \u0441\u043d\u0438\u0436\u0435\u043d\u0438\u044f \u0440\u0430\u0437\u043c\u0435\u0440\u043d\u043e\u0441\u0442\u0438 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432\u043e\u0433\u043e \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0430 (dimensionality reduction) \u043d\u0430 \u044d\u0442\u0430\u043f\u0435 \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0438 \u0434\u0430\u043d\u043d\u044b\u0445 \u0434\u043b\u044f \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f \u043c\u043e\u0434\u0435\u043b\u0435\u0439 \u043c\u0430\u0448\u0438\u043d\u043d\u043e\u0433\u043e \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f."},o="\u0421\u043e\u043a\u0440\u0430\u0449\u0435\u043d\u0438\u0435 \u0447\u0438\u0441\u043b\u0430 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432",a={id:"Data-preprocessing/Feature-reduction",title:"\u0421\u043e\u043a\u0440\u0430\u0449\u0435\u043d\u0438\u0435 \u0447\u0438\u0441\u043b\u0430 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432",description:"\u041f\u043e\u043d\u044f\u0442\u0438\u0435 \u043e\u0442\u0431\u043e\u0440\u0430 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432 (feature selection) \u0438 \u0441\u043d\u0438\u0436\u0435\u043d\u0438\u044f \u0440\u0430\u0437\u043c\u0435\u0440\u043d\u043e\u0441\u0442\u0438 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432\u043e\u0433\u043e \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0430 (dimensionality reduction) \u043d\u0430 \u044d\u0442\u0430\u043f\u0435 \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0438 \u0434\u0430\u043d\u043d\u044b\u0445 \u0434\u043b\u044f \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f \u043c\u043e\u0434\u0435\u043b\u0435\u0439 \u043c\u0430\u0448\u0438\u043d\u043d\u043e\u0433\u043e \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f.",source:"@site/docs/03-Data-preprocessing/07-Feature-reduction.md",sourceDirName:"03-Data-preprocessing",slug:"/Data-preprocessing/Feature-reduction",permalink:"/docs/Data-preprocessing/Feature-reduction",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{description:"\u041f\u043e\u043d\u044f\u0442\u0438\u0435 \u043e\u0442\u0431\u043e\u0440\u0430 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432 (feature selection) \u0438 \u0441\u043d\u0438\u0436\u0435\u043d\u0438\u044f \u0440\u0430\u0437\u043c\u0435\u0440\u043d\u043e\u0441\u0442\u0438 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432\u043e\u0433\u043e \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0430 (dimensionality reduction) \u043d\u0430 \u044d\u0442\u0430\u043f\u0435 \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0438 \u0434\u0430\u043d\u043d\u044b\u0445 \u0434\u043b\u044f \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f \u043c\u043e\u0434\u0435\u043b\u0435\u0439 \u043c\u0430\u0448\u0438\u043d\u043d\u043e\u0433\u043e \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f."},sidebar:"tutorialSidebar",previous:{title:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432",permalink:"/docs/Data-preprocessing/Feature-generation"},next:{title:"\u041a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u044b \u0432 \u043e\u0431\u0449\u0435\u043c \u0432\u0438\u0434\u0435",permalink:"/docs/category/\u043a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u044b-\u0432-\u043e\u0431\u0449\u0435\u043c-\u0432\u0438\u0434\u0435"}},c={},d=[];function p(e){const t={em:"em",h1:"h1",img:"img",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"\u0441\u043e\u043a\u0440\u0430\u0449\u0435\u043d\u0438\u0435-\u0447\u0438\u0441\u043b\u0430-\u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432",children:"\u0421\u043e\u043a\u0440\u0430\u0449\u0435\u043d\u0438\u0435 \u0447\u0438\u0441\u043b\u0430 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432"}),"\n",(0,r.jsx)(t.p,{children:"\u0418\u0441\u0445\u043e\u0434\u043d\u044b\u0445 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0441\u0440\u0430\u0437\u0443 \u0438\u0437\u0432\u0435\u0441\u0442\u043d\u043e \u0441\u043b\u0438\u0448\u043a\u043e\u043c \u043c\u043d\u043e\u0433\u043e. \u041b\u0438\u0431\u043e \u043c\u043e\u0433\u043b\u043e \u043f\u043e\u044f\u0432\u0438\u0442\u0441\u044f \u043c\u043d\u043e\u0433\u043e \u043d\u043e\u0432\u044b\u0445 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432 \u043f\u043e\u0441\u043b\u0435 \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0438 \u043d\u043e\u0432\u044b\u0445 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432 \u0438\u0437 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0445. \u0427\u0438\u0441\u043b\u043e \u043e\u0446\u0435\u043d\u0438\u0432\u0430\u0435\u043c\u044b\u0445 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432 \u0440\u0430\u0441\u0442\u0435\u0442 \u0441 \u0443\u0432\u0435\u043b\u0438\u0447\u0435\u043d\u0438\u0435\u043c \u0447\u0438\u0441\u043b\u0430 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u043b\u0438\u043d\u0435\u0439\u043d\u044b\u0435 \u043c\u043e\u0434\u0435\u043b\u0438 \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u0438\u0440\u0443\u044e\u0442 \u043e\u0442\u043a\u043b\u0438\u043a, \u043e\u0442\u0442\u0430\u043b\u043a\u0438\u0432\u0430\u044f\u0441\u044c \u043e\u0442 \u043b\u0438\u043d\u0435\u0439\u043d\u043e\u0439 \u043a\u043e\u043c\u0431\u0438\u043d\u0430\u0446\u0438\u0438 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432 \u0441 \u043e\u0446\u0435\u043d\u0438\u0432\u0430\u0435\u043c\u044b\u043c\u0438 \u0432\u0435\u0441\u0430\u043c\u0438. \u0427\u0435\u043c \u0431\u043e\u043b\u044c\u0448\u0435 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432 - \u0442\u0435\u043c \u0431\u043e\u043b\u044c\u0448\u0435 \u0432\u0435\u0441\u043e\u0432 \u043d\u0443\u0436\u043d\u043e \u043e\u0446\u0435\u043d\u0438\u0442\u044c. \u041f\u0440\u0438 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u043d\u043e\u0439 \u043e\u0431\u0443\u0447\u0430\u044e\u0449\u0435\u0439 \u0432\u044b\u0431\u043e\u0440\u043a\u0435 \u044d\u0442\u043e \u0431\u0443\u0434\u0435\u0442 \u043f\u0440\u0438\u0432\u043e\u0434\u0438\u0442\u044c \u043a \u043f\u0435\u0440\u0435\u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044e \u043c\u043e\u0434\u0435\u043b\u0438. \u0423\u0432\u0435\u043b\u0438\u0447\u0435\u043d\u0438\u0435 \u0447\u0438\u0441\u043b\u0430 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432 \u0442\u0430\u043a\u0436\u0435 \u0443\u0432\u0435\u043b\u0438\u0447\u0438\u0432\u0430\u0435\u0442 \u043d\u0430\u043a\u043b\u0430\u0434\u043d\u044b\u0435 \u0440\u0430\u0441\u0445\u043e\u0434\u044b \u043d\u0430 \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435 \u0438 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0443 \u0434\u0430\u043d\u043d\u044b\u0445."}),"\n",(0,r.jsx)(t.p,{children:"\u041f\u043e\u044d\u0442\u043e\u043c\u0443, \u0435\u0441\u043b\u0438 \u0447\u0438\u0441\u043b\u043e \u0432\u0445\u043e\u0434\u043d\u044b\u0445 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432 \u0432\u0435\u043b\u0438\u043a\u043e, \u0442\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442 \u0441\u043e\u043a\u0440\u0430\u0449\u0435\u043d\u0438\u0435 \u0447\u0438\u0441\u043b\u0430 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u043c\u043e\u0436\u0435\u0442 \u043e\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043b\u044f\u0442\u044c\u0441\u044f \u043c\u0435\u0442\u043e\u0434\u0430\u043c\u0438 \u043e\u0442\u0431\u043e\u0440\u0430 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432 (feature selection) \u0438 \u0441\u043d\u0438\u0436\u0435\u043d\u0438\u044f \u0440\u0430\u0437\u043c\u0435\u0440\u043d\u043e\u0441\u0442\u0438 (dimensionality reduction), \u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0438 \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u0445 \u043d\u0438\u0436\u0435:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"feature-reduction.png",src:n(3963).A+"",width:"723",height:"388"})}),"\n",(0,r.jsxs)(t.p,{children:["\u041e\u0442\u0431\u043e\u0440 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432 \u0438 \u0441\u043d\u0438\u0436\u0435\u043d\u0438\u0435 \u0440\u0430\u0437\u043c\u0435\u0440\u043d\u043e\u0441\u0442\u0438 \u0440\u0435\u0448\u0430\u044e\u0442 \u043e\u0434\u0438\u043d\u0430\u043a\u043e\u0432\u0443\u044e \u0437\u0430\u0434\u0430\u0447\u0443 \u0441\u043e\u043a\u0440\u0430\u0449\u0435\u043d\u0438\u044f \u0447\u0438\u0441\u043b\u0430 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0431\u0443\u0434\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043f\u043e\u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0430\u044f \u043c\u043e\u0434\u0435\u043b\u044c. \u041e\u0434\u043d\u0430\u043a\u043e \u043f\u0440\u0438 \u043e\u0442\u0431\u043e\u0440\u0435 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u043f\u043e\u0434\u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u043e \u0438\u0437 \u0438\u0441\u0445\u043e\u0434\u043d\u044b\u0445 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432, \u0430 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0435 \u043f\u0440\u043e\u0441\u0442\u043e \u043e\u0442\u0431\u0440\u0430\u0441\u044b\u0432\u0430\u044e\u0442\u0441\u044f. \u041f\u0440\u0438 \u0441\u043d\u0438\u0436\u0435\u043d\u0438\u0438 \u0440\u0430\u0437\u043c\u0435\u0440\u043d\u043e\u0441\u0442\u0438 \u043a\u0430\u0436\u0434\u044b\u0439 \u0432\u044b\u0445\u043e\u0434\u043d\u043e\u0439 \u043f\u0440\u0438\u0437\u043d\u0430\u043a \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0442\u0441\u044f \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u043c \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c ",(0,r.jsx)(t.em,{children:"\u043d\u0430\u0434 \u0432\u0441\u0435\u043c\u0438 \u0438\u0441\u0445\u043e\u0434\u043d\u044b\u043c\u0438 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u0430\u043c\u0438"}),". \u0412 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043c\u0435\u0442\u043e\u0434\u0430 \u043e\u0442\u0431\u043e\u0440\u0430 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432 \u043c\u043e\u0436\u043d\u043e \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u043f\u043e\u0434\u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u043e \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0441\u0438\u043b\u044c\u043d\u0435\u0435 \u0432\u0441\u0435\u0433\u043e \u0441\u043a\u043e\u0440\u0440\u0435\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u044b \u0441 \u043e\u0442\u043a\u043b\u0438\u043a\u043e\u043c. \u0410 \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0441\u043d\u0438\u0436\u0435\u043d\u0438\u044f \u0440\u0430\u0437\u043c\u0435\u0440\u043d\u043e\u0441\u0442\u0438 \u0447\u0430\u0441\u0442\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f ",(0,r.jsx)(t.strong,{children:"\u043c\u0435\u0442\u043e\u0434 \u0433\u043b\u0430\u0432\u043d\u044b\u0445 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442"})," (principal component analysis, PCA), \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043b\u0438\u043d\u0435\u0439\u043d\u043e\u0439 \u0442\u0440\u0430\u043d\u0441\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0435\u0439 \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u0438\u0442 \u043e\u0431\u044a\u0435\u043a\u0442\u044b \u0438\u0437 \u043c\u043d\u043e\u0433\u043e\u043c\u0435\u0440\u043d\u043e\u0433\u043e \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432\u043e\u0433\u043e \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0430 \u0432 \u043c\u0430\u043b\u043e\u043c\u0435\u0440\u043d\u043e\u0435 \u0442\u0430\u043a\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c, \u0447\u0442\u043e\u0431\u044b \u0441\u0443\u043c\u043c\u0430 \u043a\u0432\u0430\u0434\u0440\u0430\u0442\u043e\u0432 \u0440\u0430\u0441\u0441\u0442\u043e\u044f\u043d\u0438\u0439 \u043e\u0442 \u0438\u0441\u0445\u043e\u0434\u043d\u044b\u0445 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u0434\u043e \u0438\u0445 \u043f\u0440\u043e\u0435\u043a\u0446\u0438\u0439 \u043e\u043a\u0430\u0437\u044b\u0432\u0430\u043b\u0430\u0441\u044c \u043d\u0430\u0438\u043c\u0435\u043d\u044c\u0448\u0435\u0439, \u043a\u0430\u043a \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u043e \u043d\u0438\u0436\u0435 \u043f\u0440\u0438 \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u0435 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u0438\u0437 3-\u0445 \u043c\u0435\u0440\u043d\u043e\u0433\u043e \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432\u043e\u0433\u043e \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0430 \u0432 2-\u043c\u0435\u0440\u043d\u043e\u0435:"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"PCA-example.png",src:n(8516).A+"",width:"1055",height:"359"})})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},8516:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/PCA-example-0762d1a168f0614a18ad23709db22580.png"},3963:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/feature-reduction-e20c5616e68d2a4a6dc4b6a73319e28a.png"},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var r=n(6540);const i={},s=r.createContext(i);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);