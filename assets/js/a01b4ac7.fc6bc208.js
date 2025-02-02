"use strict";(self.webpackChunksite_new=self.webpackChunksite_new||[]).push([[4150],{7088:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>r,contentTitle:()=>i,default:()=>o,frontMatter:()=>c,metadata:()=>l,toc:()=>m});var a=n(74848),t=n(28453);const c={description:"\u041d\u0435\u0439\u0440\u043e\u0441\u0435\u0442\u044c Mask R-CNN \u0434\u043b\u044f \u0437\u0430\u0434\u0430\u0447\u0438 \u0438\u043d\u0441\u0442\u0430\u043d\u0441 \u0441\u0435\u0433\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438 (\u0441\u0435\u0433\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u043d\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0438).",keywords:["YOLACT","yolo instance segmentation","instance segmentation models","\u043c\u0435\u0442\u043e\u0434\u044b \u0438\u043d\u0441\u0442\u0430\u043d\u0441 \u0441\u0435\u0433\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438","\u043c\u0435\u0442\u043e\u0434\u044b \u0441\u0435\u0433\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432","\u0441\u0435\u0433\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u043d\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0438","\u043d\u0435\u0439\u0440\u043e\u043d\u043d\u0430\u044f \u0441\u0435\u0442\u044c"]},i="YOLACT",l={id:"Neural-networks/Instance-segmentation/YOLACT",title:"YOLACT",description:"\u041d\u0435\u0439\u0440\u043e\u0441\u0435\u0442\u044c Mask R-CNN \u0434\u043b\u044f \u0437\u0430\u0434\u0430\u0447\u0438 \u0438\u043d\u0441\u0442\u0430\u043d\u0441 \u0441\u0435\u0433\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438 (\u0441\u0435\u0433\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u043d\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0438).",source:"@site/docs/Neural-networks/14-Instance-segmentation/03-YOLACT.md",sourceDirName:"Neural-networks/14-Instance-segmentation",slug:"/Neural-networks/Instance-segmentation/YOLACT",permalink:"/docs/Neural-networks/Instance-segmentation/YOLACT",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{description:"\u041d\u0435\u0439\u0440\u043e\u0441\u0435\u0442\u044c Mask R-CNN \u0434\u043b\u044f \u0437\u0430\u0434\u0430\u0447\u0438 \u0438\u043d\u0441\u0442\u0430\u043d\u0441 \u0441\u0435\u0433\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438 (\u0441\u0435\u0433\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u043d\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0438).",keywords:["YOLACT","yolo instance segmentation","instance segmentation models","\u043c\u0435\u0442\u043e\u0434\u044b \u0438\u043d\u0441\u0442\u0430\u043d\u0441 \u0441\u0435\u0433\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438","\u043c\u0435\u0442\u043e\u0434\u044b \u0441\u0435\u0433\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432","\u0441\u0435\u0433\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u043d\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0438","\u043d\u0435\u0439\u0440\u043e\u043d\u043d\u0430\u044f \u0441\u0435\u0442\u044c"]},sidebar:"Neural-networks",previous:{title:"Mask R-CNN",permalink:"/docs/Neural-networks/Instance-segmentation/Mask-R-CNN"},next:{title:"\u042d\u043c\u0431\u0435\u0434\u0434\u0438\u043d\u0433\u0438 \u0441\u043b\u043e\u0432 \u0438 \u043f\u0430\u0440\u0430\u0433\u0440\u0430\u0444\u043e\u0432",permalink:"/docs/Neural-networks/Embeddings"}},r={},m=[{value:"\u041b\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0430",id:"\u043b\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0430",level:2}];function h(e){const s={a:"a",annotation:"annotation",blockquote:"blockquote",h1:"h1",h2:"h2",img:"img",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",ol:"ol",p:"p",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.h1,{id:"yolact",children:"YOLACT"}),"\n",(0,a.jsxs)(s.p,{children:["\u041c\u043e\u0434\u0435\u043b\u044c ",(0,a.jsx)(s.strong,{children:"YOLACT"})," - \u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0439 \u043e\u0434\u043d\u043e\u0441\u0442\u0430\u0434\u0438\u0439\u043d\u044b\u0439 \u043c\u0435\u0442\u043e\u0434 ",(0,a.jsx)(s.a,{href:"Problem-statement",children:"\u0441\u0435\u0433\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432"})," (instance segmentation). \u041e\u043d \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u043c\u0435\u043d\u0435\u0435 \u0442\u043e\u0447\u043d\u043e, \u0447\u0435\u043c Mask R-CNN, \u043d\u043e \u0437\u0430\u0442\u043e \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u043e \u0431\u044b\u0441\u0442\u0440\u0435\u0435, \u043f\u043e\u0441\u043a\u043e\u043b\u044c\u043a\u0443 \u0432 \u043d\u0451\u043c \u043d\u0435 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0441\u044f \u043f\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u044d\u0442\u0430\u043f \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0438 ",(0,a.jsx)(s.a,{href:"../Object-detection/Two-stage-detectors",children:"\u0440\u0435\u0433\u0438\u043e\u043d\u043e\u0432 \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u0430"})," (regions of interest, RoI)."]}),"\n",(0,a.jsxs)(s.p,{children:["\u0410\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430 \u0441\u0435\u0442\u0438 \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u0430 \u043d\u0438\u0436\u0435 [",(0,a.jsx)(s.a,{href:"https://openaccess.thecvf.com/content_ICCV_2019/html/Bolya_YOLACT_Real-Time_Instance_Segmentation_ICCV_2019_paper.html",children:"1"}),"]:"]}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{src:n(60099).A+"",width:"1184",height:"446"})}),"\n",(0,a.jsxs)(s.p,{children:["\u0412\u043d\u0430\u0447\u0430\u043b\u0435 \u0438\u0437 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0438\u0437\u0432\u043b\u0435\u043a\u0430\u0435\u0442\u0441\u044f \u043f\u0440\u043e\u043c\u0435\u0436\u0443\u0442\u043e\u0447\u043d\u043e\u0435 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432\u043e\u0435 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0443 ",(0,a.jsx)(s.a,{href:"../Object-detection/Feature-Pyramid-Network",children:"Feature Pyramid Network"})," (FPN), \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u044e\u0449\u0443\u044e \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c  \u0441\u0435\u043c\u0430\u043d\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0441\u043b\u043e\u0436\u043d\u044b\u0435 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u0438 \u0432 \u0432\u044b\u0441\u043e\u043a\u043e\u043c \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u0438."]}),"\n",(0,a.jsxs)(s.p,{children:["\u0410\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u043d\u043e \u043c\u043e\u0434\u0435\u043b\u0438 ",(0,a.jsx)(s.a,{href:"../Object-detection/RetinaNet",children:"RetinaNet"}),", \u043d\u0430 \u043a\u0430\u0436\u0434\u043e\u043c \u0443\u0440\u043e\u0432\u043d\u0435 \u0434\u0435\u043a\u043e\u0434\u0438\u0440\u043e\u0432\u0449\u0438\u043a\u0430 FPN (\u0438 \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0439 \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0439 \u043f\u043e\u0437\u0438\u0446\u0438\u0438) \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u043e\u0434\u0438\u043d\u0430\u043a\u043e\u0432\u044b\u0439 \u0434\u0435\u0442\u0435\u043a\u0442\u043e\u0440. \u041f\u043e\u0441\u043a\u043e\u043b\u044c\u043a\u0443 \u043a\u0430\u0436\u0434\u044b\u0439 \u0443\u0440\u043e\u0432\u0435\u043d\u044c \u0438\u043c\u0435\u0435\u0442 \u0441\u0432\u043e\u0451 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u0435, \u044d\u0442\u043e \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0434\u0435\u0442\u0435\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043a\u0430\u043a \u0431\u043e\u043b\u044c\u0448\u0438\u0435, \u0442\u0430\u043a \u0438 \u043c\u0430\u043b\u044b\u0435 \u043e\u0431\u044a\u0435\u043a\u0442\u044b. \u0414\u0435\u0442\u0435\u043a\u0442\u043e\u0440, \u0432 \u0441\u0432\u043e\u044e \u043e\u0447\u0435\u0440\u0435\u0434\u044c, \u0432\u044b\u0434\u0430\u0451\u0442 \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0438\u0437 ",(0,a.jsx)(s.a,{href:"../Object-detection/SSD#%D0%BF%D1%80%D0%BE%D0%B3%D0%BD%D0%BE%D0%B7%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5",children:"\u0448\u0430\u0431\u043b\u043e\u043d\u043e\u0432 \u0432\u044b\u0434\u0435\u043b\u044f\u044e\u0449\u0438\u0445 \u0440\u0430\u043c\u043e\u043a"})," (",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsx)(s.mrow,{children:(0,a.jsx)(s.mi,{children:"a"})}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"a"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.4306em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"a"})]})})]})," \u0448\u0442\u0443\u043a):"]}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"4 \u0440\u0435\u0433\u0440\u0435\u0441\u0441\u0438\u043e\u043d\u043d\u044b\u0445 \u043e\u0442\u0432\u0435\u0442\u0430 (\u043a\u043e\u0440\u0440\u0435\u043a\u0446\u0438\u0438 \u043a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442 \u0432\u044b\u0434\u0435\u043b\u044f\u044e\u0449\u0435\u0439 \u0440\u0430\u043c\u043a\u0438);"}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:[(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsx)(s.mrow,{children:(0,a.jsx)(s.mi,{children:"C"})}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"C"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.6833em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.07153em"},children:"C"})]})})]})," \u0432\u0435\u0440\u043e\u044f\u0442\u043d\u043e\u0441\u0442\u0435\u0439 \u043a\u043b\u0430\u0441\u0441\u043e\u0432."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(s.p,{children:["\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u0435\u0442\u0435\u043a\u0442\u043e\u0440 \u0432 YOLACT \u043f\u0440\u0435\u0434\u0441\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442 ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsx)(s.mrow,{children:(0,a.jsx)(s.mi,{children:"k"})}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"k"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.6944em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"})]})})]})," ",(0,a.jsx)(s.strong,{children:"\u0441\u043c\u0435\u0448\u0438\u0432\u0430\u044e\u0449\u0438\u0445 \u043a\u043e\u044d\u0444\u0444\u0438\u0446\u0438\u0435\u043d\u0442\u043e\u0432"})," (mask coefficients), \u043a\u0430\u043a \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u043e \u043d\u0430 \u0441\u0445\u0435\u043c\u0435 [",(0,a.jsx)(s.a,{href:"https://openaccess.thecvf.com/content_ICCV_2019/html/Bolya_YOLACT_Real-Time_Instance_Segmentation_ICCV_2019_paper.html",children:"1"}),"] \u0441\u043f\u0440\u0430\u0432\u0430 (\u0441\u043b\u0435\u0432\u0430 \u0434\u043b\u044f \u0441\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u044f \u043f\u043e\u043a\u0430\u0437\u0430\u043d \u0434\u0435\u0442\u0435\u043a\u0442\u043e\u0440 \u0432 RetinaNet) [",(0,a.jsx)(s.a,{href:"https://openaccess.thecvf.com/content_ICCV_2019/html/Bolya_YOLACT_Real-Time_Instance_Segmentation_ICCV_2019_paper.html",children:"1"}),"]:"]}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{src:n(86926).A+"",width:"779",height:"505"})}),"\n",(0,a.jsxs)(s.p,{children:["\u0422\u0430\u043a\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c, \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0443\u0440\u043e\u0432\u043d\u044f FPN \u0434\u0435\u043a\u043e\u0434\u0438\u0440\u043e\u0432\u0449\u0438\u043a\u0430 \u0438 \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0439 \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0439 \u043f\u043e\u0437\u0438\u0446\u0438\u0438 \u043f\u0440\u0435\u0434\u0441\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"a"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"("}),(0,a.jsx)(s.mn,{children:"4"}),(0,a.jsx)(s.mo,{children:"+"}),(0,a.jsx)(s.mi,{children:"C"}),(0,a.jsx)(s.mo,{children:"+"}),(0,a.jsx)(s.mi,{children:"k"}),(0,a.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"a(4+C+k)"})]})})}),(0,a.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"a"}),(0,a.jsx)(s.span,{className:"mopen",children:"("}),(0,a.jsx)(s.span,{className:"mord",children:"4"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsx)(s.span,{className:"mbin",children:"+"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.7667em",verticalAlign:"-0.0833em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.07153em"},children:"C"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsx)(s.span,{className:"mbin",children:"+"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"}),(0,a.jsx)(s.span,{className:"mclose",children:")"})]})]})]})," \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439."]}),"\n",(0,a.jsxs)(s.p,{children:["\u0422\u0430\u043a\u0436\u0435 \u043a \u0441\u0430\u043c\u043e\u043c\u0443 \u043d\u0438\u0436\u043d\u0435\u043c\u0443 \u044f\u0440\u0443\u0441\u0443 FPN \u0434\u0435\u043a\u043e\u0434\u0438\u0440\u043e\u0432\u0449\u0438\u043a\u0430 (\u043e\u0431\u043b\u0430\u0434\u0430\u044e\u0449\u0435\u0433\u043e \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u043c \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u043c \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u0435\u043c) \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f \u0441\u0435\u0442\u044c, \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u044e\u0449\u0430\u044f ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsx)(s.mrow,{children:(0,a.jsx)(s.mi,{children:"k"})}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"k"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.6944em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"})]})})]})," ",(0,a.jsx)(s.strong,{children:"\u043c\u0430\u0441\u043e\u043a-\u043f\u0440\u043e\u0442\u043e\u0442\u0438\u043f\u043e\u0432"})," (prototypes), \u0438\u0437 \u043b\u0438\u043d\u0435\u0439\u043d\u043e\u0439 \u043a\u043e\u043c\u0431\u0438\u043d\u0430\u0446\u0438\u0438 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0431\u0443\u0434\u0443\u0442 \u0441\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0442\u044c\u0441\u044f \u0438\u0442\u043e\u0433\u043e\u0432\u044b\u0435 \u043c\u0430\u0441\u043a\u0438 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432. \u041f\u0440\u0438\u043c\u0435\u0440\u044b \u043c\u0430\u0441\u043e\u043a \u043f\u0440\u043e\u0442\u043e\u0442\u0438\u043f\u043e\u0432 \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u043d\u044b \u043d\u0438\u0436\u0435 [",(0,a.jsx)(s.a,{href:"https://openaccess.thecvf.com/content_ICCV_2019/html/Bolya_YOLACT_Real-Time_Instance_Segmentation_ICCV_2019_paper.html",children:"1"}),"]:"]}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{src:n(23997).A+"",width:"608",height:"691"})}),"\n",(0,a.jsxs)(s.p,{children:["\u0412\u044b\u0447\u0438\u0441\u043b\u0438\u0442\u0435\u043b\u044c\u043d\u0430\u044f \u0432\u0435\u0442\u043a\u0430 \u0434\u043b\u044f \u0438\u0445 \u0432\u044b\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u0441\u043e\u0441\u0442\u043e\u044f\u043b\u0430 \u0438\u0437 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0439 ",(0,a.jsx)(s.a,{href:"../Semantic-segmentation/Upsampling-operations",children:"\u043f\u043e\u0432\u044b\u0448\u0435\u043d\u0438\u044f \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044f"})," \u0438 ",(0,a.jsx)(s.a,{href:"../ConvPool-Images/Conv-images",children:"\u0441\u0432\u0451\u0440\u0442\u043e\u043a"})," [",(0,a.jsx)(s.a,{href:"https://openaccess.thecvf.com/content_ICCV_2019/html/Bolya_YOLACT_Real-Time_Instance_Segmentation_ICCV_2019_paper.html",children:"1"}),"]:"]}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{src:n(18176).A+"",width:"525",height:"233"})}),"\n",(0,a.jsx)(s.p,{children:"\u041a\u0430\u0436\u0434\u043e\u043c\u0443 \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u0443 \u0434\u0435\u0442\u0435\u043a\u0442\u043e\u0440\u0430 \u043d\u0430 \u043a\u0430\u0436\u0434\u043e\u0439 \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0439 \u043f\u043e\u0437\u0438\u0446\u0438\u0438 \u0441\u0442\u0430\u0432\u0438\u043b\u0430\u0441\u044c \u0432 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0435 \u043c\u0430\u0441\u043a\u0430, \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c\u0430\u044f \u043a\u0430\u043a \u043b\u0438\u043d\u0435\u0439\u043d\u0430\u044f \u043a\u043e\u043c\u0431\u0438\u043d\u0430\u0446\u0438\u044f \u043c\u0430\u0441\u043e\u043a-\u043f\u0440\u043e\u0442\u043e\u0442\u0438\u043f\u043e\u0432, \u0432\u0437\u0432\u0435\u0448\u0435\u043d\u043d\u044b\u0445 \u0441 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u044b\u043c\u0438 \u0440\u0430\u043d\u0435\u0435 \u0441\u043c\u0435\u0448\u0438\u0432\u0430\u044e\u0449\u0438\u043c\u0438 \u043a\u043e\u044d\u0444\u0444\u0438\u0446\u0438\u0435\u043d\u0442\u0430\u043c\u0438 \u0432 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0439 \u043f\u043e\u0437\u0438\u0446\u0438\u0438 (\u0448\u0430\u0433 assembly \u043d\u0430 \u043f\u0435\u0440\u0432\u043e\u043c \u0440\u0438\u0441\u0443\u043d\u043a\u0435), \u043f\u043e\u0441\u043b\u0435 \u0447\u0435\u0433\u043e \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u0430\u044f \u043c\u0430\u0441\u043a\u0430 \u043e\u0431\u0440\u0435\u0437\u0430\u043b\u0430\u0441\u044c \u0432\u044b\u0434\u0435\u043b\u044f\u044e\u0449\u0435\u0439 \u0440\u0430\u043c\u043a\u043e\u0439, \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u043e\u0439 \u0438\u0437 \u0437\u0430\u0434\u0430\u0447\u0438 \u0440\u0435\u0433\u0440\u0435\u0441\u0441\u0438\u0438 \u0434\u0435\u0442\u0435\u043a\u0442\u043e\u0440\u0430 (\u0448\u0430\u0433 crop \u043d\u0430 \u043f\u0435\u0440\u0432\u043e\u043c \u0440\u0438\u0441\u0443\u043d\u043a\u0435)."}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"YOLOACT \u0440\u0430\u0441\u0448\u0438\u0444\u0440\u043e\u0432\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u043a\u0430\u043a You Only Look At CoefficienTs, \u043f\u043e\u0441\u043a\u043e\u043b\u044c\u043a\u0443 \u043c\u0430\u0441\u043a\u0430 \u0432\u044b\u0434\u0435\u043b\u0435\u043d\u0438\u0439 \u0441\u0442\u0440\u043e\u0438\u0442\u0441\u044f \u043a\u0430\u043a \u043b\u0438\u043d\u0435\u0439\u043d\u0430\u044f \u043a\u043e\u043c\u0431\u0438\u043d\u0430\u0446\u0438\u044f \u043c\u0430\u0441\u043e\u043a-\u043f\u0440\u043e\u0442\u043e\u0442\u0438\u043f\u043e\u0432 \u0441 \u043f\u0440\u0435\u0434\u0441\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u043c\u0438 \u043a\u043e\u044d\u0444\u0444\u0438\u0446\u0438\u0435\u043d\u0442\u0430\u043c\u0438."}),"\n"]}),"\n",(0,a.jsxs)(s.p,{children:["\u041f\u0440\u0438\u043c\u0435\u0440\u044b \u0438\u0442\u043e\u0433\u043e\u0432\u044b\u0445 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u0432 \u0440\u0430\u0431\u043e\u0442\u044b YOLACT \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u043d\u044b \u043d\u0430 \u0440\u0438\u0441\u0443\u043d\u043a\u0435 [",(0,a.jsx)(s.a,{href:"https://openaccess.thecvf.com/content_ICCV_2019/html/Bolya_YOLACT_Real-Time_Instance_Segmentation_ICCV_2019_paper.html",children:"1"}),"]:"]}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{src:n(74961).A+"",width:"734",height:"762"})}),"\n",(0,a.jsx)(s.h2,{id:"\u043b\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0430",children:"\u041b\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0430"}),"\n",(0,a.jsxs)(s.ol,{children:["\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"https://openaccess.thecvf.com/content_ICCV_2019/html/Bolya_YOLACT_Real-Time_Instance_Segmentation_ICCV_2019_paper.html",children:"Bolya D. et al. Yolact: Real-time instance segmentation //Proceedings of the IEEE/CVF international conference on computer vision. \u2013 2019. \u2013 \u0421. 9157-9166."})}),"\n"]})]})}function o(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},18176:(e,s,n)=>{n.d(s,{A:()=>a});const a=n.p+"assets/images/ProtoNet-f529d16dd0a3fe4ba4030db7da017862.png"},60099:(e,s,n)=>{n.d(s,{A:()=>a});const a=n.p+"assets/images/YOLACT-architecture-8eeeb49cf58e33dea944c178f3e6d22a.jpg"},86926:(e,s,n)=>{n.d(s,{A:()=>a});const a=n.p+"assets/images/detector-head-cf927ee23f4264a155a808dca69bc130.png"},23997:(e,s,n)=>{n.d(s,{A:()=>a});const a=n.p+"assets/images/prototype-masks-b286e03ce96b332502141d1c6217ccc9.jpg"},74961:(e,s,n)=>{n.d(s,{A:()=>a});const a=n.p+"assets/images/results-cfa8d731b98e9456450b782634f5758f.jpg"},28453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>l});var a=n(96540);const t={},c=a.createContext(t);function i(e){const s=a.useContext(c);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),a.createElement(c.Provider,{value:s},e.children)}}}]);