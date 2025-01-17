"use strict";(self.webpackChunksite_new=self.webpackChunksite_new||[]).push([[9982],{87557:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var t=n(74848),r=n(28453);const i={description:"",sidebar_label:"CornerNet",keywords:["\u0434\u0435\u0442\u0435\u043a\u0446\u0438\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432","object detection","\u0437\u0430\u0434\u0430\u0447\u0430 \u0434\u0435\u0442\u0435\u043a\u0446\u0438\u0438 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432","\u0434\u0435\u0442\u0435\u043a\u0446\u0438\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u043d\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0438","\u043c\u0435\u0442\u043e\u0434\u044b \u0434\u0435\u0442\u0435\u043a\u0446\u0438\u0438 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432","object detection models","\u043d\u0435\u0439\u0440\u043e\u043d\u043d\u0430\u044f \u0441\u0435\u0442\u044c"]},a="\u041c\u043e\u0434\u0435\u043b\u044c CornerNet",c={id:"Neural-networks/Object-detection/CornerNet",title:"\u041c\u043e\u0434\u0435\u043b\u044c CornerNet",description:"",source:"@site/docs/Neural-networks/13-Object-detection/08-CornerNet.md",sourceDirName:"Neural-networks/13-Object-detection",slug:"/Neural-networks/Object-detection/CornerNet",permalink:"/docs/Neural-networks/Object-detection/CornerNet",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{description:"",sidebar_label:"CornerNet",keywords:["\u0434\u0435\u0442\u0435\u043a\u0446\u0438\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432","object detection","\u0437\u0430\u0434\u0430\u0447\u0430 \u0434\u0435\u0442\u0435\u043a\u0446\u0438\u0438 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432","\u0434\u0435\u0442\u0435\u043a\u0446\u0438\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u043d\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0438","\u043c\u0435\u0442\u043e\u0434\u044b \u0434\u0435\u0442\u0435\u043a\u0446\u0438\u0438 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432","object detection models","\u043d\u0435\u0439\u0440\u043e\u043d\u043d\u0430\u044f \u0441\u0435\u0442\u044c"]},sidebar:"Neural-networks",previous:{title:"RetinaNet",permalink:"/docs/Neural-networks/Object-detection/RetinaNet"},next:{title:"CenterNet",permalink:"/docs/Neural-networks/Object-detection/CenterNet"}},l={},h=[{value:"\u041b\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0430",id:"\u043b\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0430",level:2}];function o(e){const s={a:"a",annotation:"annotation",h1:"h1",h2:"h2",img:"img",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msup:"msup",ol:"ol",p:"p",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"\u043c\u043e\u0434\u0435\u043b\u044c-cornernet",children:"\u041c\u043e\u0434\u0435\u043b\u044c CornerNet"}),"\n",(0,t.jsxs)(s.p,{children:["\u041c\u043e\u0434\u0435\u043b\u044c ",(0,t.jsx)(s.strong,{children:"CornerNet"})," [",(0,t.jsx)(s.a,{href:"https://openaccess.thecvf.com/content_ECCV_2018/html/Hei_Law_CornerNet_Detecting_Objects_ECCV_2018_paper.html",children:"1"}),"] \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u043f\u0440\u0438\u043d\u0446\u0438\u043f\u0438\u0430\u043b\u044c\u043d\u043e \u0434\u0440\u0443\u0433\u043e\u0439 \u043f\u043e\u0434\u0445\u043e\u0434 \u043a \u0434\u0435\u0442\u0435\u043a\u0446\u0438\u0438 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432, \u0447\u0435\u043c \u043c\u0435\u0442\u043e\u0434\u044b \u043e\u0441\u043d\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u043d\u0430 \u0448\u0430\u0431\u043b\u043e\u043d\u043d\u044b\u0445 \u0440\u0430\u043c\u043a\u0430\u0445 (anchor boxes), \u0442\u0430\u043a\u0438\u0435 \u043a\u0430\u043a ",(0,t.jsx)(s.a,{href:"SSD",children:"SSD"})," \u0438 ",(0,t.jsx)(s.a,{href:"RetinaNet",children:"RetinaNet"}),", \u0447\u0442\u043e \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u043e \u043f\u043e\u0432\u044b\u0448\u0430\u0435\u0442 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u043e \u0434\u0435\u0442\u0435\u043a\u0446\u0438\u0439 \u043d\u0430 \u0434\u0430\u0442\u0430\u0441\u0435\u0442\u0435 ",(0,t.jsx)(s.a,{href:"https://cocodataset.org/#home",children:"MS COCO"})," [",(0,t.jsx)(s.a,{href:"https://link.springer.com/chapter/10.1007/978-3-319-10602-1_48",children:"2"}),"]."]}),"\n",(0,t.jsxs)(s.p,{children:["\u0412\u043d\u0430\u0447\u0430\u043b\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u043f\u0443\u0441\u043a\u0430\u0435\u0442\u0441\u044f \u0447\u0435\u0440\u0435\u0437 \u0434\u0432\u0430 \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0445 hourglass \u0431\u043b\u043e\u043a\u0430 [",(0,t.jsx)(s.a,{href:"https://arxiv.org/pdf/1603.06937",children:"3"}),"], \u0432 \u043a\u0430\u0436\u0434\u043e\u043c \u0438\u0437 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0435 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0441\u043d\u0430\u0447\u0430\u043b\u0430 \u0441\u043d\u0438\u0436\u0430\u0435\u0442\u0441\u044f (\u0441\u0432\u0451\u0440\u0442\u043a\u0430\u043c\u0438 \u0441 ",(0,t.jsx)(s.a,{href:"../ConvPool-Images/Conv-params#%D1%88%D0%B0%D0%B3-stride",children:"\u0448\u0430\u0433\u043e\u043c"})," 2), \u0430 \u0437\u0430\u0442\u0435\u043c \u043f\u043e\u0432\u044b\u0448\u0430\u0435\u0442\u0441\u044f (\u0441\u0432\u0451\u0440\u0442\u043a\u0430\u043c\u0438 \u0438 ",(0,t.jsx)(s.a,{href:"../Semantic-segmentation/Upsampling-operations#%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%BF%D0%BE%D0%BB%D1%8F%D1%86%D0%B8%D1%8F-%D0%B1%D0%BB%D0%B8%D0%B6%D0%B0%D0%B9%D1%88%D0%B8%D0%BC-%D1%81%D0%BE%D1%81%D0%B5%D0%B4%D0%BE%D0%BC",children:"\u0438\u043d\u0442\u0435\u0440\u043f\u043e\u043b\u044f\u0446\u0438\u0435\u0439 \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0438\u043c \u0441\u043e\u0441\u0435\u0434\u043e\u043c"}),"), \u043f\u0440\u0438 \u044d\u0442\u043e\u043c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u043f\u0440\u043e\u0431\u0440\u043e\u0441 \u0441\u0432\u044f\u0437\u0435\u0439 (skip-connections), \u043a\u0430\u043a \u0432 ",(0,t.jsx)(s.a,{href:"../Convolutional-architectures/ResNet#%D0%BE%D1%81%D1%82%D0%B0%D1%82%D0%BE%D1%87%D0%BD%D1%8B%D0%B9-%D0%B1%D0%BB%D0%BE%D0%BA",children:"\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u044b\u0445-\u0431\u043b\u043e\u043a\u0430\u0445 ResNet"}),", \u043d\u043e \u0441 \u043f\u0440\u043e\u043c\u0435\u0436\u0443\u0442\u043e\u0447\u043d\u043e\u0439 \u0442\u0440\u0430\u043d\u0441\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0435\u0439 (\u0441\u043c. [",(0,t.jsx)(s.a,{href:"https://arxiv.org/pdf/1603.06937",children:"3"}),"]). \u041f\u0440\u043e\u0431\u0440\u043e\u0441 \u0441\u0432\u044f\u0437\u0435\u0439, \u043a\u0430\u043a \u0438 \u0432 ResNet, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f, \u0447\u0442\u043e\u0431\u044b \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0434\u0435\u0442\u0430\u043b\u044c\u043d\u0443\u044e \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e \u0433\u0440\u0430\u043d\u0438\u0446\u0430\u0445 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432."]}),"\n",(0,t.jsxs)(s.p,{children:["\u0418\u0434\u0435\u0439\u043d\u043e \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u043e\u0434\u043d\u043e\u0433\u043e hourglass \u0431\u043b\u043e\u043a\u0430 \u043f\u043e\u043a\u0430\u0437\u0430\u043d \u043d\u0438\u0436\u0435 [",(0,t.jsx)(s.a,{href:"https://arxiv.org/pdf/1603.06937",children:"3"}),"]:"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:n(51025).A+"",width:"693",height:"302"})}),"\n",(0,t.jsxs)(s.p,{children:["\u0414\u0430\u043b\u044c\u043d\u0435\u0439\u0448\u0430\u044f \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0432\u0435\u0434\u0451\u0442\u0441\u044f \u0441 \u0432\u044b\u0445\u043e\u0434\u043e\u0432 \u0432\u0442\u043e\u0440\u043e\u0433\u043e hourglass \u0431\u043b\u043e\u043a\u0430, \u0430 \u043d\u0435 \u043d\u0430 \u0440\u0430\u0437\u043d\u044b\u0445 \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0445 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044f\u0445, \u043a\u0430\u043a \u0432 ",(0,t.jsx)(s.a,{href:"SSD",children:"SSD"})," \u0438 ",(0,t.jsx)(s.a,{href:"RetinaNet",children:"RetinaNet"}),". \u041f\u043e \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u043e\u043c\u0443 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044e \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u0438\u0440\u0443\u044e\u0442\u0441\u044f ",(0,t.jsx)(s.strong,{children:"\u0442\u0435\u043f\u043b\u043e\u0432\u044b\u0435 \u043a\u0430\u0440\u0442\u044b"})," (heatmaps) \u043b\u0435\u0432\u044b\u0445 \u0432\u0435\u0440\u0445\u043d\u0438\u0445 \u0443\u0433\u043b\u043e\u0432 \u0438 \u043f\u0440\u0430\u0432\u044b\u0445 \u043d\u0438\u0436\u043d\u0438\u0445 \u0443\u0433\u043b\u043e\u0432 \u0440\u0430\u043c\u043e\u043a, \u0432\u044b\u0434\u0435\u043b\u044f\u044e\u0449\u0438\u0445 \u0446\u0435\u043b\u0435\u0432\u044b\u0435 \u043e\u0431\u044a\u0435\u043a\u0442\u044b. \u0412 \u043a\u0430\u0436\u0434\u043e\u0439 \u043f\u043e\u0437\u0438\u0446\u0438\u0438 \u0442\u0435\u043f\u043b\u043e\u0432\u043e\u0439 \u043a\u0430\u0440\u0442\u044b \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u0438\u0440\u043e\u0435\u0442\u0441\u044f \u0443\u0432\u0435\u0440\u0435\u043d\u043d\u043e\u0441\u0442\u044c (score) \u0432 \u0442\u043e\u043c, \u0447\u0442\u043e \u0438\u043c\u0435\u043d\u043d\u043e \u0432 \u044d\u0442\u043e\u0439 \u043f\u043e\u0437\u0438\u0446\u0438\u0438 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u043b\u0435\u0432\u044b\u0439 \u0432\u0435\u0440\u0445\u043d\u0438\u0439 / \u043f\u0440\u0430\u0432\u044b\u0439 \u043d\u0438\u0436\u043d\u0438\u0439 \u0443\u0433\u043e\u043b \u0440\u0430\u043c\u043a\u0438, \u0432\u044b\u0434\u0435\u043b\u044f\u044e\u0449\u0435\u0439 \u043a\u0430\u043a\u043e\u0439-\u043b\u0438\u0431\u043e \u043e\u0431\u044a\u0435\u043a\u0442 \u043d\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0438."]}),"\n",(0,t.jsx)(s.p,{children:"\u041f\u043e\u0441\u043a\u043e\u043b\u044c\u043a\u0443 \u0438\u0437\u0432\u043b\u0435\u043a\u0430\u044e\u0442\u0441\u044f \u043e\u0434\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e \u0432\u0441\u0435 \u043b\u0435\u0432\u044b\u0435 \u0432\u0435\u0440\u0445\u043d\u0438\u0435 \u0438 \u043f\u0440\u0430\u0432\u044b\u0435 \u043d\u0438\u0436\u043d\u0438\u0435 \u0443\u0433\u043b\u044b, \u0438\u0445 \u043d\u0443\u0436\u043d\u043e \u043a\u0430\u043a-\u0442\u043e \u0441\u043e\u043f\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0434\u0440\u0443\u0433 \u0434\u0440\u0443\u0433\u0443. \u0414\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u0441\u0435\u0442\u044c \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u0438\u0440\u0443\u0435\u0442 \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0442\u0435\u043f\u043b\u043e\u0432\u043e\u0439 \u043a\u0430\u0440\u0442\u044b \u0441\u0432\u043e\u0439 \u044d\u043c\u0431\u0435\u0434\u0434\u0438\u043d\u0433 (\u0432\u0435\u043a\u0442\u043e\u0440 \u0444\u0438\u043a\u0441\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u0440\u0430\u0437\u043c\u0435\u0440\u0430), \u043f\u043e\u043b\u0443\u0447\u0430\u044f \u043a\u0430\u0440\u0442\u0443 \u044d\u043c\u0431\u0435\u0434\u0434\u0438\u043d\u0433\u043e\u0432. \u041b\u0435\u0432\u044b\u0439 \u0432\u0435\u0440\u0445\u043d\u0438\u0439 \u0443\u0433\u043e\u043b \u0441\u043e\u043f\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043f\u0440\u0430\u0432\u043e\u043c\u0443 \u043d\u0438\u0436\u043d\u0435\u043c\u0443 \u0441 \u043d\u0430\u0438\u0431\u043e\u043b\u0435\u0435 \u043f\u043e\u0445\u043e\u0436\u0438\u043c \u044d\u043c\u0431\u0435\u0434\u0434\u0438\u043d\u0433\u043e\u043c."}),"\n",(0,t.jsxs)(s.p,{children:["\u042d\u0442\u0430 \u043c\u0435\u0442\u043e\u0434\u043e\u043b\u043e\u0433\u0438\u044f \u043f\u0440\u043e\u0438\u043b\u043b\u044e\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u0430 \u043d\u0438\u0436\u0435 [",(0,t.jsx)(s.a,{href:"https://openaccess.thecvf.com/content_ECCV_2018/html/Hei_Law_CornerNet_Detecting_Objects_ECCV_2018_paper.html",children:"1"}),"]:"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:n(40420).A+"",width:"1719",height:"848"})}),"\n",(0,t.jsx)(s.p,{children:"\u0422\u0430\u043a\u043e\u0439 \u043f\u043e\u0434\u0445\u043e\u0434 \u043e\u0431\u043b\u0430\u0434\u0430\u0435\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c\u0438 \u043f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430\u043c\u0438:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"\u041f\u0440\u043e\u043f\u0430\u0434\u0430\u0435\u0442 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u044c \u0441\u043f\u0435\u0446\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438 \u0448\u0430\u0431\u043b\u043e\u043d\u043d\u044b\u0445 \u0440\u0430\u043c\u043e\u043a, \u043c\u0435\u0442\u043e\u0434 \u0441\u043f\u043e\u0441\u043e\u0431\u0435\u043d \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u043f\u043e\u0434\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0442\u044c\u0441\u044f \u043f\u043e\u0434 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u043b\u044c\u043d\u044b\u0435 \u0440\u0430\u0437\u043c\u0435\u0440\u044b \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["\u041f\u0440\u043e\u043f\u0430\u0434\u0430\u0435\u0442 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0435 \u043d\u0430 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u0434\u0435\u0442\u0435\u043a\u0442\u0438\u0440\u0443\u0435\u043c\u044b\u0445 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432. \u0414\u043b\u044f \u0441\u043f\u0435\u0446\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438 \u0432\u0441\u0435\u0445 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0445 \u0440\u0430\u043c\u043e\u043a \u043d\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0438 ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsxs)(s.mrow,{children:[(0,t.jsx)(s.mi,{children:"H"}),(0,t.jsx)(s.mo,{children:"\xd7"}),(0,t.jsx)(s.mi,{children:"W"})]}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"H\\times W"})]})})}),(0,t.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"0.7667em",verticalAlign:"-0.0833em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.08125em"},children:"H"}),(0,t.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,t.jsx)(s.span,{className:"mbin",children:"\xd7"}),(0,t.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"0.6833em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"W"})]})]})]})," \u043f\u0440\u0438 \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u0435 \u0440\u0430\u043c\u043e\u043a \u043f\u043e\u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043b\u043e\u0441\u044c \u0431\u044b ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsxs)(s.mrow,{children:[(0,t.jsx)(s.mi,{children:"O"}),(0,t.jsx)(s.mo,{stretchy:"false",children:"("}),(0,t.jsxs)(s.msup,{children:[(0,t.jsx)(s.mi,{children:"H"}),(0,t.jsx)(s.mn,{children:"2"})]}),(0,t.jsxs)(s.msup,{children:[(0,t.jsx)(s.mi,{children:"W"}),(0,t.jsx)(s.mn,{children:"2"})]}),(0,t.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"O(H^2 W^2)"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,t.jsx)(s.span,{className:"mopen",children:"("}),(0,t.jsxs)(s.span,{className:"mord",children:[(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.08125em"},children:"H"}),(0,t.jsx)(s.span,{className:"msupsub",children:(0,t.jsx)(s.span,{className:"vlist-t",children:(0,t.jsx)(s.span,{className:"vlist-r",children:(0,t.jsx)(s.span,{className:"vlist",style:{height:"0.8141em"},children:(0,t.jsxs)(s.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,t.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,t.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,t.jsx)(s.span,{className:"mord mtight",children:"2"})})]})})})})})]}),(0,t.jsxs)(s.span,{className:"mord",children:[(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"W"}),(0,t.jsx)(s.span,{className:"msupsub",children:(0,t.jsx)(s.span,{className:"vlist-t",children:(0,t.jsx)(s.span,{className:"vlist-r",children:(0,t.jsx)(s.span,{className:"vlist",style:{height:"0.8141em"},children:(0,t.jsxs)(s.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,t.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,t.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,t.jsx)(s.span,{className:"mord mtight",children:"2"})})]})})})})})]}),(0,t.jsx)(s.span,{className:"mclose",children:")"})]})})]})," \u0432\u044b\u0445\u043e\u0434\u043e\u0432, \u0432 \u0442\u043e \u0432\u0440\u0435\u043c\u044f \u043a\u0430\u043a \u043f\u0440\u0438 \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u0435 \u043b\u0435\u0432\u044b\u0445 \u0432\u0435\u0440\u0445\u043d\u0438\u0445 \u0438 \u043f\u0440\u0430\u0432\u044b\u0445 \u043d\u0438\u0436\u043d\u0438\u0445 \u0443\u0433\u043b\u043e\u0432 \u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u043b\u0438\u0448\u044c ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsxs)(s.mrow,{children:[(0,t.jsx)(s.mi,{children:"O"}),(0,t.jsx)(s.mo,{stretchy:"false",children:"("}),(0,t.jsx)(s.mn,{children:"2"}),(0,t.jsx)(s.mi,{children:"H"}),(0,t.jsx)(s.mi,{children:"W"}),(0,t.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"O(2HW)"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,t.jsx)(s.span,{className:"mopen",children:"("}),(0,t.jsx)(s.span,{className:"mord",children:"2"}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.08125em"},children:"H"}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"W"}),(0,t.jsx)(s.span,{className:"mclose",children:")"})]})})]})," \u0432\u044b\u0445\u043e\u0434\u043e\u0432."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["\u041f\u043e\u043b\u043d\u0430\u044f \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430 CornerNet \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u0430 \u043d\u0430 \u0440\u0438\u0441\u0443\u043d\u043a\u0435 [",(0,t.jsx)(s.a,{href:"https://openaccess.thecvf.com/content_ECCV_2018/html/Hei_Law_CornerNet_Detecting_Objects_ECCV_2018_paper.html",children:"1"}),"]:"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:n(68738).A+"",width:"1149",height:"296"})}),"\n",(0,t.jsx)(s.p,{children:"\u041f\u043e\u043c\u0438\u043c\u043e \u0442\u0435\u043f\u043b\u043e\u0432\u044b\u0445 \u043a\u0430\u0440\u0442 \u0438 \u044d\u043c\u0431\u0435\u0434\u0434\u0438\u043d\u0433\u043e\u0432 \u0443\u0433\u043b\u043e\u0432 \u0441\u0435\u0442\u044c \u0442\u0430\u043a\u0436\u0435 \u043f\u0440\u0435\u0434\u0441\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442 \u0441\u043c\u0435\u0449\u0435\u043d\u0438\u044f (offsets) \u0434\u043b\u044f \u0443\u0433\u043b\u043e\u0432 \u0432 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0445 \u043f\u043e\u0437\u0438\u0446\u0438\u044f\u0445, \u0447\u0442\u043e\u0431\u044b \u0432\u043d\u0435\u0441\u0442\u0438 \u0437\u0430\u043a\u043b\u044e\u0447\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u0438\u0432\u044b \u0432 \u0438\u0442\u043e\u0433\u043e\u0432\u044b\u0435 \u0440\u0430\u043c\u043a\u0438 \u0438 \u0432\u044b\u0434\u0435\u043b\u0438\u0442\u044c \u0438\u0445 \u0442\u043e\u0447\u043d\u0435\u0435. \u042d\u0442\u043e\u0442 \u0448\u0430\u0433 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c, \u043f\u043e\u0441\u043a\u043e\u043b\u044c\u043a\u0443 hourglass \u0431\u043b\u043e\u043a\u0438 \u0432\u044b\u0434\u0430\u044e\u0442 \u043a\u0430\u0440\u0442\u0443 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432 \u0431\u043e\u043b\u0435\u0435 \u043d\u0438\u0437\u043a\u043e\u0433\u043e \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0433\u043e \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044f, \u0447\u0435\u043c \u0438\u0441\u0445\u043e\u0434\u043d\u043e\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b \u0443\u0442\u043e\u0447\u043d\u0435\u043d\u0438\u044f \u043f\u0440\u0438 \u0432\u043e\u0437\u0432\u0440\u0430\u0442\u0435 \u043a \u0438\u0441\u0445\u043e\u0434\u043d\u043e\u043c\u0443 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044e."}),"\n",(0,t.jsxs)(s.p,{children:["\u0427\u0430\u0441\u0442\u043e \u0446\u0435\u043b\u0435\u0432\u043e\u0439 \u043e\u0431\u044a\u0435\u043a\u0442 \u043d\u0435 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442\u0441\u044f \u0432 \u043b\u0435\u0432\u043e\u043c \u0432\u0435\u0440\u0445\u043d\u0435\u043c \u0438 \u043f\u0440\u0430\u0432\u043e\u043c \u043d\u0438\u0436\u043d\u0435\u043c \u0443\u0433\u043b\u0443 \u0432\u044b\u0434\u0435\u043b\u044f\u044e\u0449\u0435\u0439 \u0435\u0433\u043e \u0440\u0430\u043c\u043a\u0438, \u043a\u0430\u043a \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u043e \u043d\u0438\u0436\u0435 [",(0,t.jsx)(s.a,{href:"https://openaccess.thecvf.com/content_ECCV_2018/html/Hei_Law_CornerNet_Detecting_Objects_ECCV_2018_paper.html",children:"1"}),"]:"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:n(69150).A+"",width:"1244",height:"291"})}),"\n",(0,t.jsx)(s.p,{children:"\u0427\u0442\u043e\u0431\u044b \u043f\u043e\u043c\u043e\u0447\u044c \u0441\u0432\u0451\u0440\u0442\u043a\u0430\u043c \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u0443\u044e \u043b\u043e\u043a\u0430\u0446\u0438\u044e \u0443\u0433\u043b\u043e\u0432 \u0440\u0430\u043c\u043a\u0438, \u043a \u0432\u044b\u0445\u043e\u0434\u0443 hourglass-\u0431\u043b\u043e\u043a\u0430 \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0439 \u0432\u0438\u0434 \u0443\u0433\u043b\u043e\u0432\u043e\u0433\u043e \u043f\u0443\u043b\u0438\u043d\u0433\u0430 (corner pooling)."}),"\n",(0,t.jsx)(s.p,{children:"\u0414\u043b\u044f \u0438\u0437\u043b\u0435\u0447\u0435\u043d\u0438\u044f \u0432\u0435\u0440\u0445\u043d\u0435\u0433\u043e \u043b\u0435\u0432\u043e\u0433\u043e \u0443\u0433\u043b\u0430 \u0432 \u043a\u0430\u0436\u0434\u043e\u0439 \u043f\u043e\u0437\u0438\u0446\u0438\u0438:"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"\u0438\u0449\u0435\u0442\u0441\u044f \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0439 \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u0432\u043d\u0438\u0437 \u043e\u0442 \u043f\u043e\u0437\u0438\u0446\u0438\u0438"}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"\u0438\u0449\u0435\u0442\u0441\u044f \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0439 \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u0432\u043f\u0440\u0430\u0432\u043e \u043e\u0442 \u043f\u043e\u0437\u0438\u0446\u0438\u0438"}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"\u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b \u0434\u0432\u0443\u0445 \u043d\u0430\u0439\u0434\u0435\u043d\u043d\u044b\u0445 \u043c\u0430\u043a\u0441\u0438\u043c\u0443\u043c\u043e\u0432 \u0441\u043a\u043b\u0430\u0434\u044b\u0432\u0430\u044e\u0442\u0441\u044f"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["\u042d\u0442\u043e \u043f\u0440\u043e\u0438\u043b\u043b\u044e\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043e \u043d\u0430 \u0441\u0445\u0435\u043c\u0435 \u043d\u0438\u0436\u0435 [",(0,t.jsx)(s.a,{href:"https://openaccess.thecvf.com/content_ECCV_2018/html/Hei_Law_CornerNet_Detecting_Objects_ECCV_2018_paper.html",children:"1"}),"]:"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:n(57962).A+"",width:"1321",height:"782"})}),"\n",(0,t.jsx)(s.p,{children:"\u0414\u043b\u044f \u0438\u0437\u043b\u0435\u0447\u0435\u043d\u0438\u044f \u043f\u0440\u0430\u0432\u043e\u0433\u043e \u043d\u0438\u0436\u043d\u0435\u0433\u043e \u0443\u0433\u043b\u0430 \u0443\u0433\u043b\u043e\u0432\u043e\u0439 \u043f\u0443\u043b\u0438\u043d\u0433 \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442 \u043d\u0430\u043e\u0431\u043e\u0440\u043e\u0442:"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"\u0438\u0449\u0435\u0442\u0441\u044f \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0439 \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u0432\u0432\u0435\u0440\u0445 \u043e\u0442 \u043f\u043e\u0437\u0438\u0446\u0438\u0438"}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"\u0438\u0449\u0435\u0442\u0441\u044f \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0439 \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u0432\u043b\u0435\u0432\u043e \u043e\u0442 \u043f\u043e\u0437\u0438\u0446\u0438\u0438"}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"\u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b \u0434\u0432\u0443\u0445 \u043d\u0430\u0439\u0434\u0435\u043d\u043d\u044b\u0445 \u043c\u0430\u043a\u0441\u0438\u043c\u0443\u043c\u043e\u0432 \u0442\u0430\u043a\u0436\u0435 \u0441\u043a\u043b\u0430\u0434\u044b\u0432\u0430\u044e\u0442\u0441\u044f"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["\u0423\u0433\u043b\u043e\u0432\u043e\u0439 \u043f\u0443\u043b\u0438\u043d\u0433 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u043e \u043f\u043e\u0432\u044b\u0441\u0438\u0442\u044c \u0442\u043e\u0447\u043d\u043e\u0441\u0442\u044c \u043b\u043e\u043a\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438, \u043a\u0430\u043a \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u043e \u043d\u0438\u0436\u0435 [",(0,t.jsx)(s.a,{href:"https://openaccess.thecvf.com/content_ECCV_2018/html/Hei_Law_CornerNet_Detecting_Objects_ECCV_2018_paper.html",children:"1"}),"]:"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:n(76365).A+"",width:"1283",height:"454"})}),"\n",(0,t.jsx)(s.p,{children:"\u0415\u0441\u043b\u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0438\u0437\u0432\u043b\u0435\u0447\u044c \u043e\u0431\u044a\u0435\u043a\u0442\u044b \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043a\u043b\u0430\u0441\u0441\u043e\u0432, \u0442\u043e \u0441\u0435\u0442\u044c \u043d\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u0432\u044b\u0434\u0430\u0432\u0430\u0442\u044c \u0441\u0442\u043e\u043b\u044c\u043a\u043e \u0442\u0435\u043f\u043b\u043e\u0432\u044b\u0445 \u043a\u0430\u0440\u0442 (heatmaps), \u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0438\u0437\u0432\u043b\u0435\u043a\u0430\u0435\u0442\u0441\u044f \u043a\u043b\u0430\u0441\u0441\u043e\u0432 - \u043f\u043e \u0441\u0432\u043e\u0435\u043c\u0443 \u043d\u0430\u0431\u043e\u0440\u0443 \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u043a\u043b\u0430\u0441\u0441\u0430 (\u043a\u0440\u043e\u043c\u0435 \u0444\u043e\u043d\u043e\u0432\u043e\u0433\u043e)."}),"\n",(0,t.jsx)(s.p,{children:"\u0424\u0443\u043d\u043a\u0446\u0438\u044f \u043f\u043e\u0442\u0435\u0440\u044c \u0441\u043e\u0441\u0442\u043e\u0438\u0442 \u0438\u0437 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"\u043f\u043e\u0442\u0435\u0440\u0438 \u043b\u043e\u043a\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438: \u0442\u0435\u043f\u043b\u043e\u0432\u044b\u0435 \u043a\u0430\u0440\u0442\u044b \u0432\u044b\u0441\u0442\u0443\u043f\u0430\u044e\u0442 \u0431\u0438\u043d\u0430\u0440\u043d\u044b\u043c\u0438 \u043a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u0430\u043c\u0438, \u0434\u0435\u0442\u0435\u043a\u0442\u0438\u0440\u0443\u044e\u0449\u0438\u043c\u0438 \u043f\u0440\u0438\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u0435 \u0443\u0433\u043b\u0430, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u043d\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u044e\u0442\u0441\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f focal loss, \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u043d\u043e\u0439 \u0432 \u043c\u043e\u0434\u0435\u043b\u0438 RetinaNet. \u041f\u0440\u0438 \u044d\u0442\u043e\u043c, \u0443\u0447\u0451\u0442 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u044f \u0446\u0435\u043b\u0435\u0432\u043e\u0433\u043e \u0443\u0433\u043b\u0430 \u0443\u0447\u0438\u0442\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0441\u043b\u0430\u0431\u0435\u0435 (\u0437\u0430 \u0441\u0447\u0451\u0442 \u043f\u043e\u043d\u0438\u0436\u0430\u044e\u0449\u0435\u0433\u043e \u043a\u043e\u044d\u0444\u0444\u0438\u0446\u0438\u0435\u043d\u0442\u0430), \u0435\u0441\u043b\u0438 \u0440\u0435\u0430\u043b\u044c\u043d\u044b\u0439 \u0443\u0433\u043e\u043b \u043f\u0440\u0438\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043d\u0435\u043f\u043e\u0434\u0430\u043b\u0451\u043a\u0443."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"\u043f\u043e\u0442\u0435\u0440\u0438 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u044f: \u044d\u043c\u0431\u0435\u0434\u0434\u0438\u043d\u0433\u0438 \u0443\u0433\u043b\u043e\u0432 \u043e\u0434\u043d\u043e\u0439 \u0446\u0435\u043b\u0435\u0432\u043e\u0439 \u0440\u0430\u043c\u043a\u0438 \u043f\u043e\u043e\u0449\u0440\u044f\u044e\u0442\u0441\u044f \u0431\u044b\u0442\u044c \u0431\u043e\u043b\u0435\u0435 \u043f\u043e\u0445\u043e\u0436\u0438\u043c\u0438, \u0430 \u0440\u0430\u0437\u043d\u044b\u0445 \u0440\u0430\u043c\u043e\u043a - \u043d\u0435\u043f\u043e\u0445\u043e\u0436\u0438\u043c\u0438."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"\u043f\u043e\u0442\u0435\u0440\u0438 \u043b\u043e\u043a\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438: \u0448\u0442\u0440\u0430\u0444\u0443\u044e\u0442 \u043d\u0435\u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0435 \u0438\u0437\u0432\u043b\u0435\u0447\u0451\u043d\u043d\u044b\u0445 \u0440\u0430\u043c\u043e\u043a \u0438 \u0438\u0441\u0442\u0438\u043d\u043d\u044b\u0445 \u0440\u0430\u043c\u043e\u043a \u043f\u043e \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0425\u0443\u0431\u0435\u0440\u0430."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"\u041f\u0440\u0438 \u043f\u0440\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u043c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438 \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c\u0430 \u0434\u0435\u0442\u0435\u043a\u0446\u0438\u0438 \u0438\u0437\u0432\u043b\u0435\u043a\u0430\u043b\u0438\u0441\u044c \u0441 \u0438\u0441\u0445\u043e\u0434\u043d\u043e\u0433\u043e \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0438 \u0437\u0435\u0440\u043a\u0430\u043b\u044c\u043d\u043e \u043e\u0442\u0440\u0430\u0436\u0451\u043d\u043d\u043e\u0433\u043e, \u043f\u043e\u0441\u043b\u0435 \u0447\u0435\u0433\u043e \u043a \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430\u043c \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u043b\u043e\u0441\u044c \u043c\u044f\u0433\u043a\u043e\u0435 \u043f\u043e\u0434\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043d\u0435-\u043c\u0430\u043a\u0441\u0438\u043c\u0443\u043c\u043e\u0432 (soft NMS)."}),"\n",(0,t.jsxs)(s.p,{children:["\u041c\u043e\u0434\u0435\u043b\u044c CornerNet \u043e\u0431\u043e\u0433\u043d\u0430\u043b\u0430 \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c\u044b SSD \u0438 RetinaNet, \u043f\u043e\u043a\u0430\u0437\u0430\u0432 \u043d\u0430 \u0434\u0430\u0442\u0430\u0441\u0435\u0442\u0435 MS COCO [",(0,t.jsx)(s.a,{href:"https://link.springer.com/chapter/10.1007/978-3-319-10602-1_48",children:"2"}),"] \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u043e AP=42.2."]}),"\n",(0,t.jsx)(s.h2,{id:"\u043b\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0430",children:"\u041b\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0430"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://openaccess.thecvf.com/content_ECCV_2018/html/Hei_Law_CornerNet_Detecting_Objects_ECCV_2018_paper.html",children:"Law H., Deng J. Cornernet: Detecting objects as paired keypoints //Proceedings of the European conference on computer vision (ECCV). \u2013 2018. \u2013 \u0421. 734-750."})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://link.springer.com/chapter/10.1007/978-3-319-10602-1_48",children:"Lin T. Y. et al. Microsoft coco: Common objects in context //Computer Vision\u2013ECCV 2014: 13th European Conference, Zurich, Switzerland, September 6-12, 2014, Proceedings, Part V 13. \u2013 Springer International Publishing, 2014. \u2013 \u0421. 740-755."})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://arxiv.org/pdf/1603.06937",children:"Wang D. Stacked dense-hourglass networks for human pose estimation : \u0434\u0438\u0441. \u2013 University of Illinois at Urbana-Champaign, 2018."})}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},68738:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/CornerNet-9f551220504e16801b44f75146fe1402.jpg"},76365:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/CornerPooling-demo-8408e7a5e758e11c1e7b3eb65e350270.jpg"},40420:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/Heatmaps-embeddings-f5ff3f1f779a99118b26f0dd18a7b001.jpg"},69150:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/No-object-at-corners-4d11783675ed7433546a3da8b1f4baa5.jpg"},57962:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/corner-pooling-dde5d980ad94b6b849329766d9c0b773.jpg"},51025:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/hourglass-block-e17cca74f03c1a729c3a38224eb1d1ae.png"},28453:(e,s,n)=>{n.d(s,{R:()=>a,x:()=>c});var t=n(96540);const r={},i=t.createContext(r);function a(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);