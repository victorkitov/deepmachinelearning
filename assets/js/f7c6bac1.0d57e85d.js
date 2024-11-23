"use strict";(self.webpackChunksite_new=self.webpackChunksite_new||[]).push([[5946],{71438:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>c,metadata:()=>r,toc:()=>h});var t=n(74848),a=n(28453);const c={description:""},i="Mask R-CNN",r={id:"Neural-networks/Instance-segmentation/Mask-R-CNN",title:"Mask R-CNN",description:"",source:"@site/docs/Neural-networks/14-Instance-segmentation/02-Mask-R-CNN.md",sourceDirName:"Neural-networks/14-Instance-segmentation",slug:"/Neural-networks/Instance-segmentation/Mask-R-CNN",permalink:"/docs/Neural-networks/Instance-segmentation/Mask-R-CNN",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{description:""},sidebar:"Neural-networks",previous:{title:"\u0421\u0435\u0433\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u044d\u043a\u0437\u0435\u043c\u043f\u043b\u044f\u0440\u043e\u0432",permalink:"/docs/Neural-networks/Instance-segmentation/Problem-statement"},next:{title:"YOLACT",permalink:"/docs/Neural-networks/Instance-segmentation/YOLACT"}},l={},h=[{value:"\u041b\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0430",id:"\u043b\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0430",level:2}];function o(e){const s={a:"a",annotation:"annotation",h1:"h1",h2:"h2",img:"img",li:"li",math:"math",mi:"mi",mrow:"mrow",ol:"ol",p:"p",semantics:"semantics",span:"span",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"mask-r-cnn",children:"Mask R-CNN"}),"\n",(0,t.jsxs)(s.p,{children:["\u041c\u043e\u0434\u0435\u043b\u044c Mask R-CNN [",(0,t.jsx)(s.a,{href:"https://openaccess.thecvf.com/content_iccv_2017/html/He_Mask_R-CNN_ICCV_2017_paper.html",children:"1"}),"] \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0441\u043e\u0431\u043e\u0439 \u043a\u043b\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u043d\u0435\u0439\u0440\u043e\u0441\u0435\u0442\u0435\u0432\u043e\u0439 \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c \u0441\u0435\u0433\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438 \u044d\u043a\u0437\u0435\u043c\u043f\u043b\u044f\u0440\u043e\u0432 (instance segmentation). \u041e\u043d\u0430 \u0441\u0442\u0440\u043e\u0438\u0442\u0441\u044f \u043d\u0430 \u0431\u0430\u0437\u0435 \u0434\u0435\u0442\u0435\u043a\u0442\u043e\u0440\u0430 Faster R-CNN [",(0,t.jsx)(s.a,{href:"https://ieeexplore.ieee.org/abstract/document/7485869/",children:"2"}),"], \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u043e\u0442\u043d\u043e\u0441\u0438\u0442\u0441\u044f \u043a \u043a\u043b\u0430\u0441\u0441\u0443 \u0434\u0432\u0443\u0445\u0441\u0442\u0430\u0434\u0438\u0439\u043d\u044b\u0445 \u043c\u0435\u0442\u043e\u0434\u043e\u0432:"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"\u043d\u0430 \u043f\u0435\u0440\u0432\u043e\u043c \u0448\u0430\u0433\u0435 \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u044e\u0442\u0441\u044f \u0440\u0435\u0433\u0438\u043e\u043d\u044b-\u043a\u0430\u043d\u0434\u0438\u0434\u0430\u0442\u044b (regions of interest, ROI) \u043d\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0438, \u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u043c\u043e\u0433\u0443\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c\u0441\u044f \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u0443\u044e\u0449\u0438\u0435 \u043e\u0431\u044a\u0435\u043a\u0442\u044b"}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"\u043d\u0430 \u0432\u0442\u043e\u0440\u043e\u043c \u0448\u0430\u0433\u0435 \u043a\u0430\u0436\u0434\u044b\u0439 \u0440\u0435\u0433\u0438\u043e\u043d \u043a\u0430\u043d\u0434\u0438\u0434\u0430\u0442 \u043e\u0442\u043d\u043e\u0441\u0438\u0442\u0441\u044f \u043a \u0442\u043e\u043c\u0443 \u0438\u043b\u0438 \u0438\u043d\u043e\u043c\u0443 \u043a\u043b\u0430\u0441\u0441\u0443, \u0443\u0442\u043e\u0447\u043d\u044f\u0435\u0442\u0441\u044f \u043c\u0435\u0441\u0442\u043e\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0449\u0435\u0439 \u0435\u0433\u043e \u0440\u0430\u043c\u043a\u0438 \u0438 \u043f\u0440\u0435\u0434\u0441\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u043c\u0430\u0441\u043a\u0430, \u0432\u044b\u0434\u0435\u043b\u044f\u044e\u0449\u0430\u044f \u043e\u0431\u044a\u0435\u043a\u0442."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["\u041e\u0431\u0449\u0430\u044f \u0441\u0445\u0435\u043c\u0430 \u043c\u0435\u0442\u043e\u0434\u0430 \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u0430 \u043d\u0438\u0436\u0435 [",(0,t.jsx)(s.a,{href:"https://openaccess.thecvf.com/content_iccv_2017/html/He_Mask_R-CNN_ICCV_2017_paper.html",children:"1"}),"]:"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:n(36879).A+"",width:"975",height:"438"})}),"\n",(0,t.jsxs)(s.p,{children:["\u0412\u044b\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u043c\u0430\u0441\u043a\u0438 \u0432\u044b\u0434\u0435\u043b\u0435\u043d\u043e \u0432 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u0443\u044e \u0432\u0435\u0442\u043a\u0443 \u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u0439, \u043d\u0435 \u0437\u0430\u0432\u0438\u0441\u044f\u0449\u0438\u0445 \u043e\u0442 \u043a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438 \u043e\u0431\u044a\u0435\u043a\u0442\u0430 (class) \u0438 \u0443\u0442\u043e\u0447\u043d\u0435\u043d\u0438\u044f \u043f\u043e\u0437\u0438\u0446\u0438\u0438 \u0440\u0430\u043c\u043a\u0438 (box). \u041e\u043d\u043e \u043e\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0441\u0435\u0440\u0438\u0435\u0439 \u0441\u0432\u0451\u0440\u0442\u043e\u043a \u0438 \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u0441\u0432\u0451\u0440\u0442\u043e\u043a. \u0412 \u043a\u043e\u043d\u0446\u0435 \u0432\u044b\u0434\u0430\u0451\u0442\u0441\u044f ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsx)(s.mrow,{children:(0,t.jsx)(s.mi,{children:"C"})}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"C"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"0.6833em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.07153em"},children:"C"})]})})]})," \u043a\u0430\u0440\u0442 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432, \u043e\u0442\u0432\u0435\u0447\u0430\u044e\u0449\u0438\u0445 \u0432\u044b\u0434\u0435\u043b\u0435\u043d\u0438\u044e \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0438\u0437 \u043a\u043b\u0430\u0441\u0441\u043e\u0432. \u0424\u0443\u043d\u043a\u0446\u0438\u044f \u043f\u043e\u0442\u0435\u0440\u044c \u0432\u044b\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u043c\u0430\u0441\u043a\u0438 \u0448\u0442\u0440\u0430\u0444\u0443\u0435\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u043d\u0435\u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0435 \u043a\u0430\u0440\u0442\u044b, \u043e\u0442\u0432\u0435\u0447\u0430\u044e\u0449\u0435\u0439 \u043a\u043b\u0430\u0441\u0441\u0443, \u043f\u0440\u0435\u0434\u0441\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u043c\u0443 \u043a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u043e\u043c."]}),"\n",(0,t.jsx)(s.p,{children:"\u0412 \u0446\u0435\u043b\u043e\u043c \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u043f\u043e\u0442\u0435\u0440\u044c \u0441\u043e\u0441\u0442\u043e\u0438\u0442 \u0438\u0437 3\u0445 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"\u0442\u043e\u0447\u043d\u043e\u0441\u0442\u044c \u043a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438"}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"\u0442\u043e\u0447\u043d\u043e\u0441\u0442\u044c \u0432\u044b\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u0440\u0430\u043c\u043a\u0438"}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"\u0442\u043e\u0447\u043d\u043e\u0441\u0442\u044c \u0432\u044b\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u043c\u0430\u0441\u043a\u0438 \u043d\u0430 \u0440\u0430\u043c\u043a\u0435"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"\u0412\u044b\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u0440\u0435\u0433\u0438\u043e\u043d\u043e\u0432-\u043a\u0430\u043d\u0434\u0438\u0434\u0430\u0442\u043e\u0432 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u043b\u043e\u0441\u044c \u043f\u043e \u043a\u0430\u0440\u0442\u0435 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432, \u0438\u0437\u0432\u043b\u0435\u043a\u0430\u0435\u043c\u044b\u0445 \u0441\u0432\u0451\u0440\u0442\u043e\u0447\u043d\u044b\u043c \u043a\u043e\u0434\u0438\u0440\u043e\u0432\u0449\u0438\u043a\u043e\u043c (backbone). \u041d\u0430\u0438\u043b\u0443\u0447\u0448\u0438\u0439 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0434\u0430\u043b\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0441\u0435\u0442\u0438 FPN."}),"\n",(0,t.jsxs)(s.p,{children:["\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0432\u0435\u0442\u0432\u0438 \u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u0439, \u0432\u044b\u0434\u0435\u043b\u044f\u044e\u0449\u0435\u0439 \u043c\u0430\u0441\u043a\u0443 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u044b \u043d\u0438\u0436\u0435 \u0434\u043b\u044f \u0441\u043b\u0443\u0447\u0430\u044f, \u043a\u043e\u0433\u0434\u0430 \u043a\u043e\u0434\u0438\u0440\u043e\u0432\u0449\u0438\u043a\u043e\u043c \u0432\u044b\u0441\u0442\u0443\u043f\u0430\u0435\u0442 ResNet \u0438 FPN [",(0,t.jsx)(s.a,{href:"https://openaccess.thecvf.com/content_iccv_2017/html/He_Mask_R-CNN_ICCV_2017_paper.html",children:"1"}),"]:"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:n(15174).A+"",width:"930",height:"286"})}),"\n",(0,t.jsxs)(s.p,{children:["\u0414\u043b\u044f \u043f\u043e\u0432\u044b\u0448\u0435\u043d\u0438\u044f \u0442\u043e\u0447\u043d\u043e\u0441\u0442\u0438, \u0432 Mask R-CNN \u0432\u043c\u0435\u0441\u0442\u043e \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 RoIPool \u0438\u0437 Faster R-CNN (\u0432\u044b\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u043e\u0434\u043d\u043e\u0433\u043e \u0441\u043b\u043e\u044f \u043f\u0438\u0440\u0430\u043c\u0438\u0434\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043f\u0443\u043b\u0438\u043d\u0433\u0430) \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043b\u0430\u0441\u044c \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u044f RoIAlign, \u0434\u0435\u043b\u0430\u0432\u0448\u0430\u044f \u0442\u043e \u0436\u0435 \u0441\u0430\u043c\u043e\u0435, \u043d\u043e \u043d\u0435 \u043d\u0430\u0434 \u0438\u0441\u0445\u043e\u0434\u043d\u044b\u043c\u0438 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u0430\u043c\u0438, \u0430 \u043d\u0430\u0434 \u0438\u0445 \u0431\u0438\u043b\u0438\u043d\u0435\u0439\u043d\u043e \u0438\u043d\u0442\u0435\u0440\u043f\u043e\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u043c\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f\u043c\u0438 \u0441 \u0443\u0447\u0451\u0442\u043e\u043c \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u043b\u044c\u043d\u043e\u0433\u043e \u0440\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0440\u0430\u043c\u043a\u0438 \u0440\u0435\u0433\u0438\u043e\u043d\u0430 \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u0430 \u043e\u0442\u043d\u043e\u0441\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u043a\u0430\u0440\u0442\u044b \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432, \u0447\u0442\u043e \u043f\u0440\u043e\u0438\u043b\u043b\u044e\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043e \u043d\u0438\u0436\u0435 [",(0,t.jsx)(s.a,{href:"https://openaccess.thecvf.com/content_iccv_2017/html/He_Mask_R-CNN_ICCV_2017_paper.html",children:"1"}),"]:"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:n(39327).A+"",width:"419",height:"413"})}),"\n",(0,t.jsxs)(s.p,{children:["\u041f\u0440\u0438\u043c\u0435\u0440\u044b \u0440\u0430\u0431\u043e\u0442\u044b \u0441\u0435\u0442\u0438 \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u043d\u044b \u043d\u0438\u0436\u0435 [",(0,t.jsx)(s.a,{href:"https://openaccess.thecvf.com/content_iccv_2017/html/He_Mask_R-CNN_ICCV_2017_paper.html",children:"1"}),"]:"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:n(97273).A+"",width:"925",height:"655"})}),"\n",(0,t.jsxs)(s.p,{children:["\u041c\u043e\u0434\u0435\u043b\u044c Mask R-CNN \u043c\u043e\u0436\u0435\u0442 \u0442\u0430\u043a\u0436\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0434\u043b\u044f \u043e\u0446\u0435\u043d\u043a\u0438 \u043f\u043e\u0437. \u0414\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u0432\u043c\u0435\u0441\u0442\u043e ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsx)(s.mrow,{children:(0,t.jsx)(s.mi,{children:"C"})}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"C"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"0.6833em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.07153em"},children:"C"})]})})]})," \u043c\u0430\u0441\u043e\u043a \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u043a\u043b\u0430\u0441\u0441\u0430 \u043f\u0440\u0435\u0434\u0441\u043a\u0430\u0437\u044b\u0432\u0430\u043b\u043e\u0441\u044c ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsx)(s.mrow,{children:(0,t.jsx)(s.mi,{children:"K"})}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"K"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"0.6833em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.07153em"},children:"K"})]})})]})," \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0445 \u043a\u0430\u0440\u0442 \u0440\u0435\u0439\u0442\u0438\u043d\u0433\u043e\u0432 \u043f\u0440\u0438\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u044f \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u043e\u043f\u043e\u0440\u043d\u043e\u0433\u043e \u0443\u0437\u043b\u0430 \u0442\u0435\u043b\u0430, \u043f\u043e \u043a\u043e\u0442\u043e\u0440\u044b\u043c \u0432\u043e\u0441\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u043f\u043e\u0437\u0430 \u0447\u0435\u043b\u043e\u0432\u0435\u043a\u0430. \u041f\u0440\u0438\u043c\u0435\u0440\u044b \u0440\u0430\u0431\u043e\u0442\u044b \u043c\u043e\u0434\u0435\u043b\u0438 \u0434\u043b\u044f \u043e\u0446\u0435\u043d\u043a\u0438 \u043f\u043e\u0437 \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u043d\u044b \u043d\u0430 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u043c \u0440\u0438\u0441\u0443\u043d\u043a\u0435 [",(0,t.jsx)(s.a,{href:"https://openaccess.thecvf.com/content_iccv_2017/html/He_Mask_R-CNN_ICCV_2017_paper.html",children:"1"}),"]:"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:n(71892).A+"",width:"866",height:"593"})}),"\n",(0,t.jsx)(s.h2,{id:"\u043b\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0430",children:"\u041b\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0430"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://openaccess.thecvf.com/content_iccv_2017/html/He_Mask_R-CNN_ICCV_2017_paper.html",children:"He K. et al. Mask r-cnn //Proceedings of the IEEE international conference on computer vision. \u2013 2017. \u2013 \u0421. 2961-2969."})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://ieeexplore.ieee.org/abstract/document/7485869/",children:"Ren S. et al. Faster R-CNN: Towards real-time object detection with region proposal networks //IEEE transactions on pattern analysis and machine intelligence. \u2013 2016. \u2013 \u0422. 39. \u2013 \u2116. 6. \u2013 \u0421. 1137-1149."})}),"\n"]})]})}function d(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},15174:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/Mask-R-CNN-mask-subnet-480b25d148ae9909083bd529cc22665d.png"},36879:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/Mask-R-CNN-262a41d99f39fcb6dfe298436ed53bda.png"},39327:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/RoIAlign-2436ec87d7610d978ac2519cebb2c3ab.png"},97273:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/instance-segmentation-results-13b5706b97e99fb98a03d987f347241e.jpg"},71892:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/pose-estimation-results-d5fa6c55cc1fb4096363cadb90006111.jpg"},28453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>r});var t=n(96540);const a={},c=t.createContext(a);function i(e){const s=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(c.Provider,{value:s},e.children)}}}]);