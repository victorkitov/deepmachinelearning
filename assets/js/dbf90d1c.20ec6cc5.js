"use strict";(self.webpackChunksite_new=self.webpackChunksite_new||[]).push([[1254],{5939:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"Machine-learning/Boosting/Comparison-with-bagging","title":"\u0421\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u0435 \u0431\u0443\u0441\u0442\u0438\u043d\u0433\u0430 \u0441 \u0434\u0440\u0443\u0433\u0438\u043c\u0438 \u0430\u043d\u0441\u0430\u043c\u0431\u043b\u044f\u043c\u0438 \u043c\u043e\u0434\u0435\u043b\u0435\u0439","description":"\u0421\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u0435 \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c\u0430 \u0431\u0443\u0441\u0442\u0438\u043d\u0433\u0430 \u0441 \u0431\u044d\u0433\u0433\u0438\u043d\u0433\u043e\u043c, \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u044b\u043c \u043b\u0435\u0441\u043e\u043c, \u0441\u0442\u044d\u043a\u0438\u043d\u0433\u043e\u043c \u0438 \u0434\u0440\u0443\u0433\u0438\u043c\u0438 \u043c\u0435\u0442\u043e\u0434\u0430\u043c\u0438 \u043f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u0438\u044f \u0430\u043d\u0441\u0430\u043c\u0431\u043b\u0435\u0439 \u043c\u043e\u0434\u0435\u043b\u0435\u0439.","source":"@site/docs/Machine-learning/16-Boosting/02-Comparison-with-bagging.md","sourceDirName":"Machine-learning/16-Boosting","slug":"/Machine-learning/Boosting/Comparison-with-bagging","permalink":"/docs/Machine-learning/Boosting/Comparison-with-bagging","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"description":"\u0421\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u0435 \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c\u0430 \u0431\u0443\u0441\u0442\u0438\u043d\u0433\u0430 \u0441 \u0431\u044d\u0433\u0433\u0438\u043d\u0433\u043e\u043c, \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u044b\u043c \u043b\u0435\u0441\u043e\u043c, \u0441\u0442\u044d\u043a\u0438\u043d\u0433\u043e\u043c \u0438 \u0434\u0440\u0443\u0433\u0438\u043c\u0438 \u043c\u0435\u0442\u043e\u0434\u0430\u043c\u0438 \u043f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u0438\u044f \u0430\u043d\u0441\u0430\u043c\u0431\u043b\u0435\u0439 \u043c\u043e\u0434\u0435\u043b\u0435\u0439."},"sidebar":"Machine-learning","previous":{"title":"\u0411\u0443\u0441\u0442\u0438\u043d\u0433","permalink":"/docs/Machine-learning/Boosting/Boosting-general"},"next":{"title":"\u0410\u043b\u0433\u043e\u0440\u0438\u0442\u043c AdaBoost","permalink":"/docs/Machine-learning/Boosting/AdaBoost"}}');var t=i(74848),o=i(28453);const r={description:"\u0421\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u0435 \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c\u0430 \u0431\u0443\u0441\u0442\u0438\u043d\u0433\u0430 \u0441 \u0431\u044d\u0433\u0433\u0438\u043d\u0433\u043e\u043c, \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u044b\u043c \u043b\u0435\u0441\u043e\u043c, \u0441\u0442\u044d\u043a\u0438\u043d\u0433\u043e\u043c \u0438 \u0434\u0440\u0443\u0433\u0438\u043c\u0438 \u043c\u0435\u0442\u043e\u0434\u0430\u043c\u0438 \u043f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u0438\u044f \u0430\u043d\u0441\u0430\u043c\u0431\u043b\u0435\u0439 \u043c\u043e\u0434\u0435\u043b\u0435\u0439."},a="\u0421\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u0435 \u0431\u0443\u0441\u0442\u0438\u043d\u0433\u0430 \u0441 \u0434\u0440\u0443\u0433\u0438\u043c\u0438 \u0430\u043d\u0441\u0430\u043c\u0431\u043b\u044f\u043c\u0438 \u043c\u043e\u0434\u0435\u043b\u0435\u0439",c={},l=[{value:"\u0411\u0443\u0441\u0442\u0438\u043d\u0433 \u0438 \u0431\u044d\u0433\u0433\u0438\u043d\u0433",id:"\u0431\u0443\u0441\u0442\u0438\u043d\u0433-\u0438-\u0431\u044d\u0433\u0433\u0438\u043d\u0433",level:2},{value:"\u0411\u0443\u0441\u0442\u0438\u043d\u0433 \u0438 \u0441\u0442\u044d\u043a\u0438\u043d\u0433",id:"\u0431\u0443\u0441\u0442\u0438\u043d\u0433-\u0438-\u0441\u0442\u044d\u043a\u0438\u043d\u0433",level:2}];function d(e){const n={a:"a",em:"em",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"\u0441\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u0435-\u0431\u0443\u0441\u0442\u0438\u043d\u0433\u0430-\u0441-\u0434\u0440\u0443\u0433\u0438\u043c\u0438-\u0430\u043d\u0441\u0430\u043c\u0431\u043b\u044f\u043c\u0438-\u043c\u043e\u0434\u0435\u043b\u0435\u0439",children:"\u0421\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u0435 \u0431\u0443\u0441\u0442\u0438\u043d\u0433\u0430 \u0441 \u0434\u0440\u0443\u0433\u0438\u043c\u0438 \u0430\u043d\u0441\u0430\u043c\u0431\u043b\u044f\u043c\u0438 \u043c\u043e\u0434\u0435\u043b\u0435\u0439"})}),"\n",(0,t.jsx)(n.h2,{id:"\u0431\u0443\u0441\u0442\u0438\u043d\u0433-\u0438-\u0431\u044d\u0433\u0433\u0438\u043d\u0433",children:"\u0411\u0443\u0441\u0442\u0438\u043d\u0433 \u0438 \u0431\u044d\u0433\u0433\u0438\u043d\u0433"}),"\n",(0,t.jsxs)(n.p,{children:["\u0420\u0430\u043d\u0435\u0435 \u0438\u0437\u0443\u0447\u0435\u043d\u043d\u044b\u0435 \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c\u044b \u043f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u0438\u044f \u0430\u043d\u0441\u0430\u043c\u0431\u043b\u044f, \u0442\u0430\u043a\u0438\u0435 \u043a\u0430\u043a \u0431\u044d\u0433\u0433\u0438\u043d\u0433, \u043c\u0435\u0442\u043e\u0434 \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u044b\u0445 \u043f\u043e\u0434\u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432 \u0438 \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u044b\u0439 \u043b\u0435\u0441, \u043d\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u044e\u0442 \u043c\u043e\u0434\u0435\u043b\u0438 \u043d\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e \u0434\u0440\u0443\u0433 \u043e\u0442 \u0434\u0440\u0443\u0433\u0430, \u0447\u0442\u043e  \u0441\u043d\u0438\u0436\u0430\u0435\u0442 ",(0,t.jsx)(n.a,{href:"../Bias-variance/Model-complexity",children:"\u043f\u0435\u0440\u0435\u043e\u0431\u0443\u0447\u0435\u043d\u043d\u043e\u0441\u0442\u044c"})," \u0431\u0430\u0437\u043e\u0432\u044b\u0445 \u043c\u043e\u0434\u0435\u043b\u0435\u0439 (\u0441\u043d\u0438\u0436\u0430\u0435\u0442 \u0434\u0438\u0441\u043f\u0435\u0440\u0441\u0438\u044e \u0438\u0445 \u043e\u0448\u0438\u0431\u043e\u043a \u0432 ",(0,t.jsx)(n.a,{href:"../Bias-variance/Bias-variance-decomposition",children:"\u0440\u0430\u0437\u043b\u043e\u0436\u0435\u043d\u0438\u0438 \u043d\u0430 \u0441\u043c\u0435\u0449\u0435\u043d\u0438\u0435 \u0438 \u0440\u0430\u0437\u0431\u0440\u043e\u0441"}),"). \u042d\u0442\u043e \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u043e \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0443 \u043a\u0430\u0436\u0434\u043e\u0439 \u043c\u043e\u0434\u0435\u043b\u0438 \u043f\u043e \u0440\u0430\u0437\u043d\u044b\u043c \u0432\u044b\u0447\u0438\u0441\u043b\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u043c \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430\u043c. \u041d\u0435\u043b\u044c\u0437\u044f \u043f\u0435\u0440\u0435\u043e\u0431\u0443\u0447\u0438\u0442\u044c\u0441\u044f \u043f\u043e \u0447\u0438\u0441\u043b\u0443 \u0431\u0430\u0437\u043e\u0432\u044b\u0445 \u043c\u043e\u0434\u0435\u043b\u0435\u0439 - \u043f\u0440\u0438 \u0443\u0432\u0435\u043b\u0438\u0447\u0435\u043d\u0438\u0438 \u0438\u0445 \u0447\u0438\u0441\u043b\u0430 \u0441\u0440\u0435\u0434\u043d\u0435\u0435 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u043e \u0430\u043d\u0441\u0430\u043c\u0431\u043b\u044f \u0431\u0443\u0434\u0435\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u0440\u0430\u0441\u0442\u0438. \u041e\u0434\u043d\u0430\u043a\u043e \u043d\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u044c \u043f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u0438\u044f \u043a\u0430\u0436\u0434\u043e\u0439 \u0431\u0430\u0437\u043e\u0432\u043e\u0439 \u043c\u043e\u0434\u0435\u043b\u0438 ",(0,t.jsx)(n.em,{children:"\u043d\u0435 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043c\u043e\u0434\u0435\u043b\u044f\u043c \u0438\u0441\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u0441\u0438\u0441\u0442\u0435\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u043e\u0448\u0438\u0431\u043a\u0438 \u0430\u043d\u0441\u0430\u043c\u0431\u043b\u044f"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["\u0412 \u0431\u0443\u0441\u0442\u0438\u043d\u0433\u0435 \u043c\u043e\u0434\u0435\u043b\u0438 \u043d\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u044e\u0442\u0441\u044f \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e, \u0438\u0441\u043f\u0440\u0430\u0432\u043b\u044f\u044f \u043e\u0448\u0438\u0431\u043a\u0438 \u0443\u0436\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u043e\u0433\u043e \u0430\u043d\u0441\u0430\u043c\u0431\u043b\u044f. \u0412 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0435 \u044d\u0442\u043e\u0433\u043e \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442 \u0431\u043e\u0440\u044c\u0431\u0430 \u0441 \u043d\u0435\u0434\u043e\u043e\u0431\u0443\u0447\u0435\u043d\u043d\u043e\u0441\u0442\u044c\u044e \u0431\u0430\u0437\u043e\u0432\u044b\u0445 \u043c\u043e\u0434\u0435\u043b\u0435\u0439 (\u0441\u043d\u0438\u0436\u0435\u043d\u0438\u0435 \u0441\u0438\u0441\u0442\u0435\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u0441\u043c\u0435\u0449\u0435\u043d\u0438\u044f \u0431\u0430\u0437\u043e\u0432\u044b\u0445 \u043c\u043e\u0434\u0435\u043b\u0435\u0439 \u0432 ",(0,t.jsx)(n.a,{href:"../Bias-variance/Bias-variance-decomposition",children:"\u0440\u0430\u0437\u043b\u043e\u0436\u0435\u043d\u0438\u0438 \u043d\u0430 \u0441\u043c\u0435\u0449\u0435\u043d\u0438\u0435 \u0438 \u0440\u0430\u0437\u0431\u0440\u043e\u0441"}),"). \u041f\u043e\u044d\u0442\u043e\u043c\u0443 \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c \u0431\u0443\u0441\u0442\u0438\u043d\u0433\u0430, \u043a\u0430\u043a \u043f\u0440\u0430\u0432\u0438\u043b\u043e, \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0442\u043e\u0447\u043d\u0435\u0435 \u0431\u044d\u0433\u0433\u0438\u043d\u0433\u0430, \u043d\u043e \u0442\u0440\u0435\u0431\u0443\u0435\u0442 \u0431\u043e\u043b\u0435\u0435 \u0442\u0449\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0439 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u043f\u043e \u0447\u0438\u0441\u043b\u0443 \u0431\u0430\u0437\u043e\u0432\u044b\u0445 \u043c\u043e\u0434\u0435\u043b\u0435\u0439, \u043f\u043e\u0441\u043a\u043e\u043b\u044c\u043a\u0443 \u043c\u043e\u0436\u0435\u0442 \u043f\u0435\u0440\u0435\u043e\u0431\u0443\u0447\u0430\u0442\u044c\u0441\u044f, \u0435\u0441\u043b\u0438 \u0438\u0445 \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u0441\u043b\u0438\u0448\u043a\u043e\u043c \u043c\u043d\u043e\u0433\u043e, \u043a\u0430\u043a \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u043e \u043d\u0430 \u0433\u0440\u0430\u0444\u0438\u043a\u0435:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"boosting-overfitting.png",src:i(89692).A+"",width:"850",height:"578"})}),"\n",(0,t.jsx)(n.p,{children:"\u0414\u043b\u044f \u043f\u043e\u0434\u0431\u043e\u0440\u0430 \u043e\u043f\u0442\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u0431\u0430\u0437\u043e\u0432\u044b\u0445 \u043c\u043e\u0434\u0435\u043b\u0435\u0439 \u043d\u0443\u0436\u043d\u043e \u043e\u0442\u0441\u043b\u0435\u0436\u0438\u0432\u0430\u0442\u044c \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u043e \u0430\u043d\u0441\u0430\u043c\u0431\u043b\u044f \u043d\u0430 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e\u0439 \u0432\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0439 \u0432\u044b\u0431\u043e\u0440\u043a\u0435."}),"\n",(0,t.jsx)(n.p,{children:"\u0422\u0430\u043a\u0436\u0435 \u0438\u0442\u0435\u0440\u0430\u0442\u0438\u0432\u043d\u0430\u044f \u043f\u0440\u043e\u0446\u0435\u0434\u0443\u0440\u0430 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0431\u0430\u0437\u043e\u0432\u044b\u0445 \u043c\u043e\u0434\u0435\u043b\u0435\u0439 \u0432 \u0431\u0443\u0441\u0442\u0438\u043d\u0433\u0435 \u043d\u0435 \u0434\u043e\u043f\u0443\u0441\u043a\u0430\u0435\u0442 \u043f\u0430\u0440\u0430\u043b\u043b\u0435\u043b\u0438\u0437\u0430\u0446\u0438\u044e \u0432 \u0438\u0445 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0438: \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0443\u044e \u043c\u043e\u0434\u0435\u043b\u044c \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e, \u043b\u0438\u0448\u044c \u043a\u043e\u0433\u0434\u0430 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043d\u044b \u0432\u0441\u0435 \u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0438\u0435!"}),"\n",(0,t.jsx)(n.h2,{id:"\u0431\u0443\u0441\u0442\u0438\u043d\u0433-\u0438-\u0441\u0442\u044d\u043a\u0438\u043d\u0433",children:"\u0411\u0443\u0441\u0442\u0438\u043d\u0433 \u0438 \u0441\u0442\u044d\u043a\u0438\u043d\u0433"}),"\n",(0,t.jsxs)(n.p,{children:["\u0418\u0442\u0435\u0440\u0430\u0442\u0438\u0432\u043d\u0430\u044f \u043f\u0440\u043e\u0446\u0435\u0434\u0443\u0440\u0430 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u043c\u043e\u0434\u0435\u043b\u0438 \u0438 \u043a\u043e\u044d\u0444\u0444\u0438\u0446\u0438\u0435\u043d\u0442\u0430 \u043f\u0440\u0438 \u043d\u0435\u0439 \u0432 \u0431\u0443\u0441\u0442\u0438\u043d\u0433\u0435 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0431\u044b\u0441\u0442\u0440\u043e \u0441\u0442\u0440\u043e\u0438\u0442\u044c \u043b\u0438\u043d\u0435\u0439\u043d\u0443\u044e \u0430\u0433\u0440\u0435\u0433\u0438\u0440\u0443\u044e\u0449\u0443\u044e \u043c\u043e\u0434\u0435\u043b\u044c (\u043a\u0430\u043a \u0432 ",(0,t.jsx)(n.a,{href:"../Model-ensembles/Stacking#%D0%BB%D0%B8%D0%BD%D0%B5%D0%B9%D0%BD%D1%8B%D0%B9-%D1%81%D1%82%D1%8D%D0%BA%D0%B8%D0%BD%D0%B3",children:"\u043b\u0438\u043d\u0435\u0439\u043d\u043e\u043c \u0441\u0442\u044d\u043a\u0438\u043d\u0433\u0435"}),"), \u043e\u0434\u043d\u0430\u043a\u043e \u043a\u043e\u044d\u0444\u0444\u0438\u0446\u0438\u0435\u043d\u0442 \u043f\u0440\u0438 \u0442\u0435\u043a\u0443\u0449\u0435\u0439 \u043c\u043e\u0434\u0435\u043b\u0438 ",(0,t.jsx)(n.em,{children:"\u0443\u0447\u0438\u0442\u044b\u0432\u0430\u044e\u0442 \u043e\u0448\u0438\u0431\u043a\u0438 \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u0435\u0434\u0448\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0445 \u043c\u043e\u0434\u0435\u043b\u0435\u0439"}),", \u043d\u043e \u043d\u0435 \u0431\u0443\u0434\u0443\u0449\u0438\u0445. \u0422\u0430\u043a\u0436\u0435 \u0431\u0430\u0437\u043e\u0432\u044b\u0435 \u043c\u043e\u0434\u0435\u043b\u0438 \u0432 \u0441\u0442\u044d\u043a\u0438\u043d\u0433\u0435 \u043d\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u044e\u0442\u0441\u044f \u043f\u0440\u0435\u0434\u0441\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u043a\u043e\u043d\u0435\u0447\u043d\u0443\u044e \u0446\u0435\u043b\u0435\u0432\u0443\u044e \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0443\u044e, \u0430 \u0432 \u0431\u0443\u0441\u0442\u0438\u043d\u0433\u0435 - ",(0,t.jsx)(n.em,{children:"\u043e\u0448\u0438\u0431\u043a\u0443 \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0442\u0435\u043a\u0443\u0449\u0438\u043c \u0430\u043d\u0441\u0430\u043c\u0431\u043b\u0435\u043c"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},89692:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/boosting-overfitting-ee8523ea7b1a1ab9f3327a9d011b63b5.png"},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>a});var s=i(96540);const t={},o=s.createContext(t);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);