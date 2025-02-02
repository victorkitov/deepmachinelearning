"use strict";(self.webpackChunksite_new=self.webpackChunksite_new||[]).push([[229],{63735:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"Machine-learning/Data-preprocessing/Data-imputation","title":"\u0417\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u043f\u0443\u0441\u043a\u043e\u0432","description":"\u041c\u0435\u0442\u043e\u0434\u044b \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043f\u0440\u043e\u043f\u0443\u0441\u043a\u043e\u0432 \u043f\u0440\u0438 \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 \u0434\u043b\u044f \u043c\u043e\u0434\u0435\u043b\u0435\u0439 \u043c\u0430\u0448\u0438\u043d\u043d\u043e\u0433\u043e \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f.","source":"@site/docs/Machine-learning/04-Data-preprocessing/02-Data-imputation.md","sourceDirName":"Machine-learning/04-Data-preprocessing","slug":"/Machine-learning/Data-preprocessing/Data-imputation","permalink":"/docs/Machine-learning/Data-preprocessing/Data-imputation","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"description":"\u041c\u0435\u0442\u043e\u0434\u044b \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043f\u0440\u043e\u043f\u0443\u0441\u043a\u043e\u0432 \u043f\u0440\u0438 \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 \u0434\u043b\u044f \u043c\u043e\u0434\u0435\u043b\u0435\u0439 \u043c\u0430\u0448\u0438\u043d\u043d\u043e\u0433\u043e \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f."},"sidebar":"Machine-learning","previous":{"title":"\u0424\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u044f \u0432\u044b\u0431\u0440\u043e\u0441\u043e\u0432","permalink":"/docs/Machine-learning/Data-preprocessing/Outlier-filtering"},"next":{"title":"\u041e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0433\u043e \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u0430","permalink":"/docs/Machine-learning/Data-preprocessing/Time-preprocessing"}}');var s=i(74848),r=i(28453);const a={description:"\u041c\u0435\u0442\u043e\u0434\u044b \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043f\u0440\u043e\u043f\u0443\u0441\u043a\u043e\u0432 \u043f\u0440\u0438 \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 \u0434\u043b\u044f \u043c\u043e\u0434\u0435\u043b\u0435\u0439 \u043c\u0430\u0448\u0438\u043d\u043d\u043e\u0433\u043e \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f."},c="\u0417\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u043f\u0443\u0441\u043a\u043e\u0432",l={},o=[{value:"\u041f\u0440\u043e\u043f\u0443\u0441\u043a\u0438 \u0432 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0430\u043b\u044c\u043d\u044b\u0445 \u0438 \u0431\u0438\u043d\u0430\u0440\u043d\u044b\u0445 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u0430\u0445",id:"\u043f\u0440\u043e\u043f\u0443\u0441\u043a\u0438-\u0432-\u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0430\u043b\u044c\u043d\u044b\u0445-\u0438-\u0431\u0438\u043d\u0430\u0440\u043d\u044b\u0445-\u043f\u0440\u0438\u0437\u043d\u0430\u043a\u0430\u0445",level:2},{value:"\u041f\u0440\u043e\u043f\u0443\u0441\u043a\u0438 \u0432 \u0432\u0435\u0449\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0445 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u0430\u0445",id:"\u043f\u0440\u043e\u043f\u0443\u0441\u043a\u0438-\u0432-\u0432\u0435\u0449\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0445-\u043f\u0440\u0438\u0437\u043d\u0430\u043a\u0430\u0445",level:2}];function d(n){const e={admonition:"admonition",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"\u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435-\u043f\u0440\u043e\u043f\u0443\u0441\u043a\u043e\u0432",children:"\u0417\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u043f\u0443\u0441\u043a\u043e\u0432"})}),"\n",(0,s.jsx)(e.p,{children:"\u041a\u043e\u0433\u0434\u0430 \u043c\u044b \u0438\u0437\u043c\u0435\u0440\u044f\u0435\u043c \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u0438 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432, \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0438\u0437 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432 \u043c\u043e\u0433\u0443\u0442 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c. \u0412 \u044d\u0442\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \u0432\u0435\u043a\u0442\u043e\u0440 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432 \u0431\u0443\u0434\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u043f\u0443\u0441\u043a\u0438 (missing values). \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0435\u0441\u043b\u0438 \u043e\u0431\u044a\u0435\u043a\u0442, \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442 \u0447\u0435\u043b\u043e\u0432\u0435\u043a\u0430 \u043f\u043e \u0434\u0430\u043d\u043d\u044b\u043c \u0430\u043d\u043a\u0435\u0442\u044b, \u0442\u043e \u0447\u0435\u043b\u043e\u0432\u0435\u043a \u043c\u043e\u0436\u0435\u0442 \u043f\u0440\u0435\u0434\u043f\u043e\u0447\u0435\u0441\u0442\u044c \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0435 \u043f\u043e\u043b\u044f \u0430\u043d\u043a\u0435\u0442\u044b \u043d\u0435 \u0437\u0430\u043f\u043e\u043b\u043d\u044f\u0442\u044c. \u041f\u0440\u0438 \u044d\u0442\u043e\u043c \u0431\u043e\u043b\u044c\u0448\u0438\u043d\u0441\u0442\u0432\u043e \u043c\u043e\u0434\u0435\u043b\u0435\u0439 \u043c\u0430\u0448\u0438\u043d\u043d\u043e\u0433\u043e \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f \u0442\u0440\u0435\u0431\u0443\u044e\u0442 \u0434\u043b\u044f \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u043f\u043e\u043b\u043d\u044b\u0439 \u0432\u0435\u043a\u0442\u043e\u0440 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432 \u0431\u0435\u0437 \u043f\u0440\u043e\u043f\u0443\u0441\u043a\u043e\u0432."}),"\n",(0,s.jsxs)(e.p,{children:["\u041f\u0440\u043e\u0441\u0442\u0435\u0439\u0448\u0438\u043c \u043f\u0440\u0438\u0451\u043c\u043e\u043c \u0431\u0443\u0434\u0435\u0442 \u043f\u0440\u043e\u0441\u0442\u043e \u0438\u0441\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0432\u0441\u0435 \u043e\u0431\u044a\u0435\u043a\u0442\u044b, \u0443 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0445\u043e\u0442\u044f \u0431\u044b \u043e\u0434\u0438\u043d \u0438\u0437 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432 \u043d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d. \u042d\u0442\u043e\u0442 \u043f\u0440\u0438\u0451\u043c \u043f\u043e\u0434\u0445\u043e\u0434\u0438\u0442, \u0435\u0441\u043b\u0438 \u0447\u0438\u0441\u043b\u043e \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u0441 \u043f\u0440\u043e\u043f\u0443\u0449\u0435\u043d\u043d\u044b\u043c\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f\u043c\u0438 \u043d\u0435\u0432\u0435\u043b\u0438\u043a\u043e \u043e\u0442\u043d\u043e\u0441\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u043e\u0431\u0449\u0435\u0433\u043e \u043e\u0431\u044a\u0435\u043c\u0430 \u0432\u044b\u0431\u043e\u0440\u043a\u0438. \u0415\u0441\u043b\u0438 \u0436\u0435 \u0442\u0430\u043a\u0438\u0445 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u043c\u043d\u043e\u0433\u043e, \u0442\u043e \u043d\u0443\u0436\u043d\u043e \u0432\u044b\u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c ",(0,s.jsx)(e.strong,{children:"\u0441\u0445\u0435\u043c\u0443 \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043f\u0440\u043e\u043f\u0443\u0449\u0435\u043d\u043d\u044b\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439"})," (missing values imputation)."]}),"\n",(0,s.jsx)(e.h2,{id:"\u043f\u0440\u043e\u043f\u0443\u0441\u043a\u0438-\u0432-\u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0430\u043b\u044c\u043d\u044b\u0445-\u0438-\u0431\u0438\u043d\u0430\u0440\u043d\u044b\u0445-\u043f\u0440\u0438\u0437\u043d\u0430\u043a\u0430\u0445",children:"\u041f\u0440\u043e\u043f\u0443\u0441\u043a\u0438 \u0432 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0430\u043b\u044c\u043d\u044b\u0445 \u0438 \u0431\u0438\u043d\u0430\u0440\u043d\u044b\u0445 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u0430\u0445"}),"\n",(0,s.jsx)(e.p,{children:"\u0414\u043b\u044f \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0430\u043b\u044c\u043d\u044b\u0445 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432 (\u0438 \u0431\u0438\u043d\u0430\u0440\u043d\u044b\u0445, \u0435\u0441\u043b\u0438 \u0447\u0438\u0441\u043b\u043e \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0439 \u0440\u0430\u0432\u043d\u043e \u0434\u0432\u0443\u043c) \u043f\u0440\u043e\u043f\u0443\u0441\u043a\u0438 \u043c\u043e\u0436\u043d\u043e \u0437\u0430\u043f\u043e\u043b\u043d\u044f\u0442\u044c:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["\u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e \u0447\u0430\u0441\u0442\u043e\u0439 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0435\u0439 (\u0432 \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0435 \u044d\u0442\u043e \u043d\u0430\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f ",(0,s.jsx)(e.strong,{children:"\u043c\u043e\u0434\u043e\u0439 \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044f"}),", mode imputation)"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u043d\u043e\u0432\u043e\u0439 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0435\u0439 [\u043f\u0440\u043e\u043f\u0443\u0441\u043a]"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u0411\u043e\u043b\u0435\u0435 \u043f\u0440\u043e\u0434\u0432\u0438\u043d\u0443\u0442\u0430\u044f \u0442\u0435\u0445\u043d\u0438\u043a\u0430 \u0437\u0430\u043a\u043b\u044e\u0447\u0430\u0435\u0442\u0441\u044f \u0432 \u043f\u0440\u0435\u0434\u0441\u043a\u0430\u0437\u0430\u043d\u0438\u0438 \u043f\u0440\u043e\u043f\u0443\u0449\u0435\u043d\u043d\u043e\u0439 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u043c \u043a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u043e\u043c, \u0432\u044b\u0443\u0447\u0435\u043d\u043d\u044b\u043c \u043f\u0440\u0435\u0434\u0441\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u0430 \u0441 \u043f\u0440\u043e\u043f\u0443\u0441\u043a\u0430\u043c\u0438 \u043f\u043e \u043e\u0441\u0442\u0430\u0432\u0448\u0438\u043c\u0441\u044f \u0438\u0437\u0432\u0435\u0441\u0442\u043d\u044b\u043c \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u0430\u043c. \u042d\u0442\u043e \u043f\u043e\u0437\u0432\u043e\u043b\u0438\u0442 \u0437\u0430\u043f\u043e\u043b\u043d\u044f\u0442\u044c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043d\u0435 \u043a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u043e\u0439, \u0430 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439 \u0432\u0435\u043b\u0438\u0447\u0438\u043d\u043e\u0439 \u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u0434\u0440\u0443\u0433\u0438\u0445 \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a \u043e\u0431\u044a\u0435\u043a\u0442\u0430. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0447\u0435\u043b\u043e\u0432\u0435\u043a \u043c\u043e\u0433 \u043d\u0435 \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u0443\u0440\u043e\u0432\u0435\u043d\u044c \u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u043b\u0438\u0431\u043e \u043f\u043e\u0442\u043e\u043c\u0443 \u0447\u0442\u043e \u043e\u043d \u0441\u0442\u0435\u0441\u043d\u044f\u0435\u0442\u0441\u044f \u0441\u043a\u0430\u0437\u0430\u0442\u044c, \u0447\u0442\u043e \u0442\u043e\u0442 \u043d\u0438\u0437\u043a\u0438\u0439, \u043b\u0438\u0431\u043e \u043f\u043e\u0442\u043e\u043c\u0443, \u0447\u0442\u043e \u043f\u043e\u043b\u0435\u043d\u0438\u043b\u0441\u044f \u0435\u0433\u043e \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c. \u0412\u0430\u0436\u043d\u043e \u0434\u0438\u0444\u0444\u0435\u0440\u0435\u043d\u0446\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u044d\u0442\u0438 \u0434\u0432\u0435 \u043f\u0440\u0438\u0447\u0438\u043d\u044b."}),"\n",(0,s.jsx)(e.h2,{id:"\u043f\u0440\u043e\u043f\u0443\u0441\u043a\u0438-\u0432-\u0432\u0435\u0449\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0445-\u043f\u0440\u0438\u0437\u043d\u0430\u043a\u0430\u0445",children:"\u041f\u0440\u043e\u043f\u0443\u0441\u043a\u0438 \u0432 \u0432\u0435\u0449\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0445 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u0430\u0445"}),"\n",(0,s.jsx)(e.p,{children:"\u0414\u043b\u044f \u0432\u0435\u0449\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0445 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432 \u043f\u0440\u043e\u043f\u0443\u0441\u043a\u0438 \u043c\u043e\u0436\u043d\u043e \u0437\u0430\u043f\u043e\u043b\u043d\u044f\u0442\u044c"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u0432\u044b\u0431\u043e\u0440\u043e\u0447\u043d\u044b\u043c \u0441\u0440\u0435\u0434\u043d\u0438\u043c"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u0432\u044b\u0431\u043e\u0440\u043e\u0447\u043d\u043e\u0439 \u043c\u0435\u0434\u0438\u0430\u043d\u043e\u0439"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u0412\u044b\u0431\u043e\u0440\u043e\u0447\u043d\u044b\u0435 \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0438 \u0441\u0447\u0438\u0442\u0430\u044e\u0442\u0441\u044f \u043f\u043e \u043f\u0440\u0438\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u043c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f\u043c \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u0430 \u0432 \u0434\u0440\u0443\u0433\u0438\u0445 \u043e\u0431\u044a\u0435\u043a\u0442\u0430\u0445. \u041c\u0435\u0434\u0438\u0430\u043d\u0430 \u0431\u043e\u043b\u0435\u0435 \u043f\u0440\u0435\u0434\u043f\u043e\u0447\u0442\u0438\u0442\u0435\u043b\u044c\u043d\u0430, \u043f\u043e\u0441\u043a\u043e\u043b\u044c\u043a\u0443 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043c\u0435\u0440\u043e\u0439 \u043e\u0446\u0435\u043d\u043a\u0438 \u0446\u0435\u043d\u0442\u0440\u0430 \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044f, \u0443\u0441\u0442\u043e\u0439\u0447\u0438\u0432\u043e\u0439 \u043a \u043d\u0430\u043b\u0438\u0447\u0438\u044e \u0432\u044b\u0431\u0440\u043e\u0441\u043e\u0432 (robust to outliers), \u0432 \u043e\u0442\u043b\u0438\u0447\u0438\u0435 \u043e\u0442 \u0441\u0440\u0435\u0434\u043d\u0435\u0433\u043e."}),"\n",(0,s.jsx)(e.admonition,{title:"\u0417\u0430\u0434\u0430\u0447\u0430",type:"note",children:(0,s.jsx)(e.p,{children:"\u041e\u0446\u0435\u043d\u0438\u0442\u0435, \u043d\u0430\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0441\u0438\u043b\u044c\u043d\u043e \u043c\u043e\u0436\u0435\u0442 \u0441\u043c\u0435\u0441\u0442\u0438\u0442\u044c\u0441\u044f \u0441\u0440\u0435\u0434\u043d\u0435\u0435 \u0438 \u043c\u0435\u0434\u0438\u0430\u043d\u0430 \u043f\u0440\u0438 \u0432\u043d\u0435\u0441\u0435\u043d\u0438\u0438 \u043e\u0434\u043d\u043e\u0433\u043e \u043e\u0447\u0435\u043d\u044c \u0431\u043e\u043b\u044c\u0448\u043e\u0433\u043e \u0438\u043b\u0438 \u043e\u0447\u0435\u043d\u044c \u043c\u0430\u043b\u043e\u0433\u043e \u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u044f \u0432 \u0432\u044b\u0431\u043e\u0440\u043a\u0443."})}),"\n",(0,s.jsx)(e.p,{children:'\u0427\u0430\u0441\u0442\u043e, \u043e\u0434\u043d\u0430\u043a\u043e, \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u0438 \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e \u0437\u0430\u043f\u043e\u043b\u043d\u044f\u0442\u044c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435\u043c "\u0432 \u0441\u0440\u0435\u0434\u043d\u0435\u043c", \u043f\u043e\u0441\u043a\u043e\u043b\u044c\u043a\u0443 \u0441\u0430\u043c \u0444\u0430\u043a\u0442 \u0442\u043e\u0433\u043e, \u0447\u0442\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u043f\u0443\u0449\u0435\u043d\u043e, \u043c\u043e\u0436\u0435\u0442 \u0433\u043e\u0432\u043e\u0440\u0438\u0442\u044c \u043e \u043d\u0435\u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u043e\u0441\u0442\u0438 \u0440\u0435\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u0430. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0447\u0435\u043b\u043e\u0432\u0435\u043a \u043c\u043e\u0433 \u043d\u0435 \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u0432\u0435\u043b\u0438\u0447\u0438\u043d\u0443 \u0441\u0432\u043e\u0435\u0439 \u0437\u0430\u0440\u043f\u043b\u0430\u0442\u044b, \u0435\u0441\u043b\u0438 \u0435\u043c\u0443 \u043a\u0430\u0436\u0435\u0442\u0441\u044f, \u0447\u0442\u043e \u043e\u043d\u0430 \u0441\u043b\u0438\u0448\u043a\u043e\u043c \u043c\u0430\u043b\u0435\u043d\u044c\u043a\u0430\u044f \u0438\u043b\u0438, \u043d\u0430\u043e\u0431\u043e\u0440\u043e\u0442, \u0441\u043b\u0438\u0448\u043a\u043e\u043c \u0431\u043e\u043b\u044c\u0448\u0430\u044f. \u0414\u043b\u044f \u0442\u0430\u043a\u0438\u0445 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u0439 \u043d\u0443\u0436\u043d\u043e \u043f\u0440\u0435\u0434\u0441\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u043f\u0443\u0449\u0435\u043d\u043d\u043e\u0433\u043e \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u0430 \u043f\u043e \u0434\u0440\u0443\u0433\u0438\u043c \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u0430\u043c, \u0440\u0435\u0448\u0430\u044f \u0437\u0430\u0434\u0430\u0447\u0443 \u0440\u0435\u0433\u0440\u0435\u0441\u0441\u0438\u0438. \u041b\u0438\u0431\u043e \u043f\u043e\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0442\u044c \u0443\u0441\u043b\u043e\u0432\u043d\u043e\u0435 \u0441\u0440\u0435\u0434\u043d\u0435\u0435 \u0438\u043b\u0438 \u0443\u0441\u043b\u043e\u0432\u043d\u0443\u044e \u043c\u0435\u0434\u0438\u0430\u043d\u0443 \u043f\u0440\u0438 \u0443\u0441\u043b\u043e\u0432\u0438\u0438 \u0434\u0440\u0443\u0433\u043e\u0433\u043e \u0438\u0437\u0432\u0435\u0441\u0442\u043d\u043e\u0433\u043e \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u0430, \u0441\u0432\u044f\u0437\u0430\u043d\u043d\u043e\u0433\u043e \u0441 \u0440\u0430\u0441\u0441\u043c\u0430\u0442\u0440\u0438\u0432\u0430\u0435\u043c\u044b\u043c.'}),"\n",(0,s.jsxs)(e.admonition,{title:"\u0418\u043d\u0434\u0438\u043a\u0430\u0442\u043e\u0440 \u043f\u0440\u043e\u043f\u0443\u0441\u043a\u0430",type:"tip",children:[(0,s.jsx)(e.p,{children:"\u041c\u043e\u0436\u043d\u043e \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u0431\u0438\u043d\u0430\u0440\u043d\u044b\u0439 \u043f\u0440\u0438\u0437\u043d\u0430\u043a, \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0437\u0443\u044e\u0449\u0438\u0439 \u0431\u044b\u043b\u043e \u043b\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u0435\u0440\u0432\u043e\u043d\u0430\u0447\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u0430 \u0438\u0437\u0432\u0435\u0441\u0442\u043d\u043e \u0437\u0430\u0440\u0430\u043d\u0435\u0435 \u0438\u043b\u0438 \u0431\u044b\u043b\u043e \u043f\u0440\u043e\u043f\u0443\u0449\u0435\u043d\u043e \u0441 \u043f\u043e\u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435\u043c. \u042d\u0442\u043e \u043f\u043e\u0437\u0432\u043e\u043b\u0438\u0442 \u043c\u043e\u0434\u0435\u043b\u0438 \u043c\u0430\u0448\u0438\u043d\u043d\u043e\u0433\u043e \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f \u0440\u0430\u0437\u043b\u0438\u0447\u0430\u0442\u044c \u044d\u0442\u0438 \u0434\u0432\u0435 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u0438 \u0438 \u043e\u0442\u043d\u043e\u0441\u0438\u0442\u044c\u0441\u044f \u043a \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u043e\u043c\u0443 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044e \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u0430 \u0441 \u0431\u043e\u043b\u044c\u0448\u0438\u043c \u043d\u0435\u0434\u043e\u0432\u0435\u0440\u0438\u0435\u043c."}),(0,s.jsx)(e.p,{children:"\u041f\u0440\u0438 \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0438 \u0443\u0441\u043b\u043e\u0432\u043d\u043e\u0439 \u043c\u043e\u0434\u043e\u0439/\u0441\u0440\u0435\u0434\u043d\u0438\u043c/\u043c\u0435\u0434\u0438\u0430\u043d\u043e\u0439 \u043c\u043e\u0436\u043d\u043e \u0442\u0430\u043a\u0436\u0435 \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u0438\u0437\u043d\u0430\u043a \u0443\u0441\u043b\u043e\u0432\u043d\u043e\u0433\u043e \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u043e\u0433\u043e \u043e\u0442\u043a\u043b\u043e\u043d\u0435\u043d\u0438\u044f, \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u0434\u0441\u043a\u0430\u0437\u0430\u0442\u044c \u043c\u043e\u0434\u0435\u043b\u0438, \u0441 \u043a\u0430\u043a\u0438\u043c \u0443\u0440\u043e\u0432\u043d\u0435\u043c \u043d\u0435\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0451\u043d\u043d\u043e\u0441\u0442\u0438 \u043f\u0440\u0438\u0437\u043d\u0430\u043a \u0431\u044b\u043b \u043f\u0440\u0435\u0434\u0441\u043a\u0430\u0437\u0430\u043d."})]})]})}function p(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},28453:(n,e,i)=>{i.d(e,{R:()=>a,x:()=>c});var t=i(96540);const s={},r=t.createContext(s);function a(n){const e=t.useContext(r);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:a(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);