"use strict";(self.webpackChunksite_new=self.webpackChunksite_new||[]).push([[2120],{23882:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>a});var o=t(74848),s=t(28453);const l={description:"Fully Convolutional Network \u0434\u043b\u044f \u0441\u0435\u043c\u0430\u043d\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u0441\u0435\u0433\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439.",keywords:["Fully Convolutional Network","\u0441\u0435\u0433\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439","\u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c \u0441\u0435\u0433\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439","semantic segmentation","\u043d\u0435\u0439\u0440\u043e\u0441\u0435\u0442\u044c FCN","\u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430 FCN"]},r="Fully Convolutional Network",i={id:"Neural-networks/Semantic-segmentation/FCN",title:"Fully Convolutional Network",description:"Fully Convolutional Network \u0434\u043b\u044f \u0441\u0435\u043c\u0430\u043d\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u0441\u0435\u0433\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439.",source:"@site/docs/Neural-networks/12-Semantic-segmentation/05-FCN.md",sourceDirName:"Neural-networks/12-Semantic-segmentation",slug:"/Neural-networks/Semantic-segmentation/FCN",permalink:"/docs/Neural-networks/Semantic-segmentation/FCN",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{description:"Fully Convolutional Network \u0434\u043b\u044f \u0441\u0435\u043c\u0430\u043d\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u0441\u0435\u0433\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439.",keywords:["Fully Convolutional Network","\u0441\u0435\u0433\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439","\u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c \u0441\u0435\u0433\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439","semantic segmentation","\u043d\u0435\u0439\u0440\u043e\u0441\u0435\u0442\u044c FCN","\u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430 FCN"]},sidebar:"Neural-networks",previous:{title:"\u041f\u043e\u0432\u044b\u0448\u0435\u043d\u0438\u0435 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044f",permalink:"/docs/Neural-networks/Semantic-segmentation/Upsampling-operations"},next:{title:"U-net \u0438 \u0435\u0451 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0435",permalink:"/docs/Neural-networks/Semantic-segmentation/U-net-and-extensions"}},c={},a=[{value:"\u041b\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0430",id:"\u043b\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0430",level:2}];function h(e){const n={a:"a",blockquote:"blockquote",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"fully-convolutional-network",children:"Fully Convolutional Network"}),"\n",(0,o.jsxs)(n.p,{children:["\u041e\u0434\u043d\u043e\u0439 \u0438\u0437 \u043f\u0435\u0440\u0432\u044b\u0445 \u043d\u0435\u0439\u0440\u043e\u0441\u0435\u0442\u0435\u0432\u044b\u0445 \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440 \u0434\u043b\u044f \u0440\u0435\u0448\u0435\u043d\u0438\u044f \u0437\u0430\u0434\u0430\u0447\u0438 ",(0,o.jsx)(n.a,{href:"Semantic-segmentation-task",children:"\u0441\u0435\u043c\u0430\u043d\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u0441\u0435\u0433\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438"})," \u0431\u044b\u043b\u0430 \u043c\u043e\u0434\u0435\u043b\u044c ",(0,o.jsx)(n.strong,{children:"Fully Convolutional Network"})," \u0438\u043b\u0438 ",(0,o.jsx)(n.strong,{children:"FCN"})," [",(0,o.jsx)(n.a,{href:"https://openaccess.thecvf.com/content_cvpr_2015/html/Long_Fully_Convolutional_Networks_2015_CVPR_paper.html",children:"1"}),"], \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043b\u0430\u0441\u044c \u043f\u043e\u043b\u043d\u043e\u0441\u0432\u0451\u0440\u0442\u043e\u0447\u043d\u0430\u044f \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430 \u0434\u043b\u044f \u0441\u0435\u043c\u0430\u043d\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u0441\u0435\u0433\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438."]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"\u042d\u0442\u0430 \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430 \u0441\u043e\u0441\u0442\u043e\u0438\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0441\u0432\u0451\u0440\u0442\u043e\u043a, \u043f\u0443\u043b\u0438\u043d\u0433\u043e\u0432, \u043d\u0435\u043b\u0438\u043d\u0435\u0439\u043d\u043e\u0441\u0442\u0435\u0439 \u0438 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0439 \u043f\u043e\u0432\u044b\u0448\u0435\u043d\u0438\u044f \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044f (upsampling)."}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["\u041f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u043e\u043c \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u044b \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0442\u043e, \u0447\u0442\u043e \u043e\u043d\u0430 \u043c\u043e\u0436\u0435\u0442 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0441\u043e \u0432\u0445\u043e\u0434\u043d\u044b\u043c \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435\u043c ",(0,o.jsx)("u",{children:"\u043f\u0440\u043e\u0438\u0437\u0432\u043e\u043b\u044c\u043d\u044b\u0445 \u0440\u0430\u0437\u043c\u0435\u0440\u043e\u0432"}),", \u0443\u0432\u0435\u043b\u0438\u0447\u0435\u043d\u0438\u0435 \u0432\u0445\u043e\u0434\u0430 \u0431\u0443\u0434\u0435\u0442 \u043f\u0440\u043e\u043f\u043e\u0440\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e \u0443\u0432\u0435\u043b\u0438\u0447\u0438\u0432\u0430\u0442\u044c \u0440\u0430\u0437\u043c\u0435\u0440 \u0432\u044b\u0445\u043e\u0434\u0430."]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"\u0425\u043e\u0442\u044f \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0441\u043b\u043e\u0451\u0432, \u0435\u0441\u0442\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u043e, \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043d\u044b \u043d\u0430 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0451\u043d\u043d\u043e\u0435 \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0435 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u0435."}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["\u0412 \u043f\u0440\u043e\u0441\u0442\u0435\u0439\u0448\u0435\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430 \u043c\u043e\u0433\u043b\u0430 \u0431\u044b \u0432\u044b\u0433\u043b\u044f\u0434\u0435\u0442\u044c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c [",(0,o.jsx)(n.a,{href:"https://openaccess.thecvf.com/content_cvpr_2015/html/Long_Fully_Convolutional_Networks_2015_CVPR_paper.html",children:"1"}),"]:\n",(0,o.jsx)(n.img,{src:t(97966).A+"",width:"673",height:"338"})]}),"\n",(0,o.jsxs)(n.p,{children:["\u041e\u0434\u043d\u0430\u043a\u043e \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0435\u0433\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438 \u0432 \u043f\u043e\u0434\u043e\u0431\u043d\u043e\u0439 \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u044b \u0431\u0443\u0434\u0435\u0442 \u043d\u0435\u0432\u044b\u0441\u043e\u043a\u0438\u043c \u0432\u0441\u043b\u0435\u0434\u0441\u0442\u0432\u0438\u0435 \u0442\u043e\u0433\u043e, \u0447\u0442\u043e ",(0,o.jsx)("u",{children:"\u043d\u0438\u0437\u043a\u043e\u0440\u0430\u0437\u043c\u0435\u0440\u043d\u044b\u0435"})," \u043f\u0440\u043e\u043c\u0435\u0436\u0443\u0442\u043e\u0447\u043d\u044b\u0435 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043f\u043e\u0441\u043b\u0435 \u0440\u0435\u0437\u043a\u043e\u0433\u043e \u043f\u043e\u0432\u044b\u0448\u0435\u043d\u0438\u044f \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044f \u043d\u0435 \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u044b \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u043e \u0432\u044b\u0434\u0435\u043b\u044f\u0442\u044c \u0433\u0440\u0430\u043d\u0438\u0446\u044b \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 ",(0,o.jsx)("u",{children:"\u0432 \u0432\u044b\u0441\u043e\u043a\u043e\u043c \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u0438"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["\u0425\u043e\u0442\u0435\u043b\u043e\u0441\u044c \u0431\u044b \u043a\u0430\u043a-\u0442\u043e \u0441\u043e\u0432\u043c\u0435\u0441\u0442\u0438\u0442\u044c \u0432\u044b\u0441\u043e\u043a\u043e\u0443\u0440\u043e\u0432\u043d\u0435\u0432\u044b\u0435 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043d\u0438\u0437\u043a\u043e\u0433\u043e \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044f, \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u044b\u0435 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u043e \u043a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u0446\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043e\u0431\u044a\u0435\u043a\u0442\u044b \u0441 \u043f\u0440\u043e\u0441\u0442\u044b\u043c\u0438 \u043f\u0440\u043e\u043c\u0435\u0436\u0443\u0442\u043e\u0447\u043d\u044b\u043c\u0438 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f\u043c\u0438 \u0441 \u0440\u0430\u043d\u043d\u0438\u0445 \u0441\u043b\u043e\u0451\u0432, \u0438\u043c\u0435\u044e\u0449\u0438\u0445 \u0431\u043e\u043b\u0435\u0435 \u0432\u044b\u0441\u043e\u043a\u043e\u0435 \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0435 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u0435, \u0447\u0442\u043e\u0431\u044b \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u043e \u043d\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u043a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u0446\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043e\u0431\u044a\u0435\u043a\u0442\u044b, \u043d\u043e \u0438 \u0432\u044b\u0434\u0435\u043b\u044f\u0442\u044c \u0438\u0445 \u0433\u0440\u0430\u043d\u0438\u0446\u044b \u0432 \u0432\u044b\u0441\u043e\u043a\u043e\u043c \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u0438. \u042d\u0442\u0443 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0443 \u043c\u044b \u0443\u0436\u0435 ",(0,o.jsx)(n.a,{href:"Semantic-segmentation-approaches#%D0%BE%D0%B3%D1%80%D0%B0%D0%BD%D0%B8%D1%87%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B0%D1%80%D1%85%D0%B8%D1%82%D0%B5%D0%BA%D1%82%D1%83%D1%80%D1%8B",children:"\u043e\u0431\u043e\u0437\u043d\u0430\u0447\u0430\u043b\u0438 \u0440\u0430\u043d\u0435\u0435"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"\u0414\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u0432 FCN \u043f\u0440\u0435\u0434\u043b\u0430\u0433\u0430\u0435\u0442\u0441\u044f \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0441\u0435\u0433\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u043e\u043d\u043d\u0443\u044e \u043a\u0430\u0440\u0442\u0443, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u043d\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u0435 \u043f\u0440\u043e\u043c\u0435\u0436\u0443\u0442\u043e\u0447\u043d\u043e\u0435 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435 (FCN-32s), \u043d\u043e \u0438 \u043f\u0440\u0435\u0434\u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u0435. \u041f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0435 \u0440\u0430\u0437\u043c\u0435\u0440\u044b \u043e\u0431\u043e\u0438\u0445 \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u043e\u0432 \u043f\u0440\u0438\u0432\u043e\u0434\u044f\u0442\u0441\u044f \u0432 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0435, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u0431\u0438\u043b\u0438\u043d\u0435\u0439\u043d\u0443\u044e \u0438\u043d\u0442\u0435\u0440\u043f\u043e\u043b\u044f\u0446\u0438\u044e \u0438 \u0441\u043a\u043b\u0430\u0434\u044b\u0432\u0430\u044e\u0442\u0441\u044f (FCN-16s). \u042d\u0442\u043e\u0442 \u0436\u0435 \u0442\u0440\u044e\u043a \u043f\u043e\u0432\u0442\u043e\u0440\u044f\u0435\u0442\u0441\u044f \u0435\u0449\u0451 \u0440\u0430\u0437, \u043a\u043e\u0433\u0434\u0430 \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u044b \u0441\u0442\u0440\u043e\u044f\u0442\u0441\u044f \u043f\u043e \u0435\u0449\u0451 \u0431\u043e\u043b\u0435\u0435 \u0440\u0430\u043d\u043d\u0435\u043c\u0443 \u043f\u0440\u043e\u043c\u0435\u0436\u0443\u0442\u043e\u0447\u043d\u043e\u043c\u0443 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044e \u0438 \u0441\u043a\u043b\u0430\u0434\u044b\u0432\u0430\u044e\u0442\u0441\u044f \u0441 \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u043e\u043c FCN-16s, \u0447\u0442\u043e \u0434\u0430\u0451\u0442 \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0443 FCN-8s."}),"\n",(0,o.jsxs)(n.p,{children:["\u0413\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0438 \u044d\u0442\u043e \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043e \u0441\u0445\u0435\u043c\u043e\u0439 \u043d\u0438\u0436\u0435 [",(0,o.jsx)(n.a,{href:"https://openaccess.thecvf.com/content_cvpr_2015/html/Long_Fully_Convolutional_Networks_2015_CVPR_paper.html",children:"1"}),"]:"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(85197).A+"",width:"1488",height:"344"})}),"\n",(0,o.jsxs)(n.p,{children:["\u0427\u0435\u043c \u0441\u0438\u043b\u044c\u043d\u0435\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u043a\u043e\u043c\u0431\u0438\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u043e\u0432 \u0431\u043e\u043b\u0435\u0435 \u043f\u043e\u0437\u0434\u043d\u0438\u0445 \u0438 \u0431\u043e\u043b\u0435\u0435 \u0440\u0430\u043d\u043d\u0438\u0445 \u0441\u043b\u043e\u0451\u0432, \u0442\u0435\u043c \u0442\u043e\u0447\u043d\u0435\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0441\u0435\u0433\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f [",(0,o.jsx)(n.a,{href:"https://openaccess.thecvf.com/content_cvpr_2015/html/Long_Fully_Convolutional_Networks_2015_CVPR_paper.html",children:"1"}),"]:"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(66371).A+"",width:"741",height:"307"})}),"\n",(0,o.jsx)(n.h2,{id:"\u043b\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0430",children:"\u041b\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0430"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://openaccess.thecvf.com/content_cvpr_2015/html/Long_Fully_Convolutional_Networks_2015_CVPR_paper.html",children:"Long J., Shelhamer E., Darrell T. Fully convolutional networks for semantic segmentation //Proceedings of the IEEE conference on computer vision and pattern recognition. \u2013 2015. \u2013 \u0421. 3431-3440."})}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},97966:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/FCN-basic-30adad4dc5bf161fe2579a931bf4343b.jpg"},66371:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/FCN-increasing-quality-bcff311099126ab16fbc4eccf374d8f6.png"},85197:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/FCN-versions-817e88d3432c1fad25774ec9c0f416b2.png"},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>i});var o=t(96540);const s={},l=o.createContext(s);function r(e){const n=o.useContext(l);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(l.Provider,{value:n},e.children)}}}]);