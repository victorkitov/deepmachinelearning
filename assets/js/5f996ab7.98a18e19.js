"use strict";(self.webpackChunksite_new=self.webpackChunksite_new||[]).push([[2286],{89730:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"Neural-networks/Semantic-segmentation/Accounting-for-context","title":"\u0423\u0447\u0451\u0442 \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0430","description":"\u041d\u0435\u0439\u0440\u043e\u0441\u0435\u0442\u0435\u0432\u044b\u0435 \u043c\u043e\u0434\u0435\u043b\u0438 PSPnet \u0438 DeepLab, \u043f\u043e\u0432\u044b\u0448\u0430\u044e\u0449\u0438\u0435 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0435\u0433\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439 \u0437\u0430 \u0441\u0447\u0451\u0442 \u0443\u0447\u0451\u0442\u0430 \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0430.","source":"@site/docs/Neural-networks/12-Semantic-segmentation/08-Accounting-for-context.md","sourceDirName":"Neural-networks/12-Semantic-segmentation","slug":"/Neural-networks/Semantic-segmentation/Accounting-for-context","permalink":"/docs/Neural-networks/Semantic-segmentation/Accounting-for-context","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"description":"\u041d\u0435\u0439\u0440\u043e\u0441\u0435\u0442\u0435\u0432\u044b\u0435 \u043c\u043e\u0434\u0435\u043b\u0438 PSPnet \u0438 DeepLab, \u043f\u043e\u0432\u044b\u0448\u0430\u044e\u0449\u0438\u0435 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0435\u0433\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439 \u0437\u0430 \u0441\u0447\u0451\u0442 \u0443\u0447\u0451\u0442\u0430 \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0430.","keywords":["\u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c\u044b \u0441\u0435\u0433\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438","\u043c\u043e\u0434\u0435\u043b\u0438 \u0441\u0435\u0433\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438","pspnet","pspnet \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430","deeplab","deeplab \u043d\u0435\u0439\u0440\u043e\u0441\u0435\u0442\u044c","\u0441\u0435\u043c\u0430\u043d\u0442\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0441\u0435\u0433\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f","semantic segmentation"]},"sidebar":"Neural-networks","previous":{"title":"U-net \u0438 \u0435\u0451 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0435","permalink":"/docs/Neural-networks/Semantic-segmentation/U-net-and-extensions"},"next":{"title":"\u0414\u0435\u0442\u0435\u043a\u0446\u0438\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432","permalink":"/docs/Neural-networks/Object-detection"}}');var i=t(74848),c=t(28453);const o={description:"\u041d\u0435\u0439\u0440\u043e\u0441\u0435\u0442\u0435\u0432\u044b\u0435 \u043c\u043e\u0434\u0435\u043b\u0438 PSPnet \u0438 DeepLab, \u043f\u043e\u0432\u044b\u0448\u0430\u044e\u0449\u0438\u0435 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0435\u0433\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439 \u0437\u0430 \u0441\u0447\u0451\u0442 \u0443\u0447\u0451\u0442\u0430 \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0430.",keywords:["\u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c\u044b \u0441\u0435\u0433\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438","\u043c\u043e\u0434\u0435\u043b\u0438 \u0441\u0435\u0433\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438","pspnet","pspnet \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430","deeplab","deeplab \u043d\u0435\u0439\u0440\u043e\u0441\u0435\u0442\u044c","\u0441\u0435\u043c\u0430\u043d\u0442\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0441\u0435\u0433\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f","semantic segmentation"]},r="\u0423\u0447\u0451\u0442 \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0430",a={},l=[{value:"PSPNet",id:"pspnet",level:2},{value:"DeepLab",id:"deeplab",level:2},{value:"\u041b\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0430",id:"\u043b\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0430",level:2}];function h(e){const n={a:"a",blockquote:"blockquote",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,c.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"\u0443\u0447\u0451\u0442-\u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0430",children:"\u0423\u0447\u0451\u0442 \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0430"})}),"\n",(0,i.jsxs)(n.p,{children:["\u041d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043a\u043e\u043c \u043a\u043b\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440 \u0434\u043b\u044f \u0437\u0430\u0434\u0430\u0447\u0438 ",(0,i.jsx)(n.a,{href:"Semantic-segmentation-task",children:"\u0441\u0435\u043c\u0430\u043d\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u0441\u0435\u0433\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438"})," \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0442\u043e, \u0447\u0442\u043e \u043e\u043d\u0438 \u043e\u0441\u043d\u043e\u0432\u0430\u043d\u044b \u043d\u0430 ",(0,i.jsx)(n.a,{href:"../ConvPool-Images/Conv-images",children:"\u0441\u0432\u0451\u0440\u0442\u043a\u0430\u0445"}),", \u0438\u043c\u0435\u044e\u0449\u0438\u0445 ",(0,i.jsx)(n.a,{href:"../ConvPool-1D/Conv-1D#%D0%B8%D0%B7%D0%B2%D0%BB%D0%B5%D1%87%D0%B5%D0%BD%D0%B8%D0%B5-%D1%81%D0%BB%D0%BE%D0%B6%D0%BD%D1%8B%D1%85-%D0%BD%D0%B5%D0%BB%D0%B8%D0%BD%D0%B5%D0%B9%D0%BD%D1%8B%D1%85-%D0%BF%D1%80%D0%B8%D0%B7%D0%BD%D0%B0%D0%BA%D0%BE%D0%B2",children:"\u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u043d\u0443\u044e \u043e\u0431\u043b\u0430\u0441\u0442\u044c \u0432\u0438\u0434\u0438\u043c\u043e\u0441\u0442\u0438"})," (receptive field). \u0418\u0437-\u0437\u0430 \u044d\u0442\u043e\u0433\u043e \u0441\u0435\u0433\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0441\u044f \u0441\u043b\u0438\u0448\u043a\u043e\u043c \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e, \u043d\u0435 \u0443\u0447\u0438\u0442\u044b\u0432\u0430\u044f \u0431\u043e\u043b\u0435\u0435 \u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u044b\u0439 \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442."]}),"\n",(0,i.jsx)(n.p,{children:'\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u043a\u0430\u0442\u0435\u0440 \u043d\u0430 \u0440\u0435\u043a\u0435 \u043c\u043e\u0436\u0435\u0442 \u043e\u0448\u0438\u0431\u043e\u0447\u043d\u043e \u043e\u0442\u043d\u043e\u0441\u0438\u0442\u044c\u0441\u044f \u043a \u043a\u043b\u0430\u0441\u0441\u0443 "\u043c\u0430\u0448\u0438\u043d\u0430", \u043f\u043e\u0442\u043e\u043c\u0443 \u0447\u0442\u043e \u043e\u043d \u0438\u043c\u0435\u0435\u0442 \u043f\u043e\u0445\u043e\u0436\u0438\u0439 \u043a\u0430\u043f\u043e\u0442 \u0438 \u0441\u0442\u0451\u043a\u043b\u0430. \u041d\u043e \u0435\u0441\u043b\u0438 \u0431\u044b \u0441\u0435\u0442\u044c \u043c\u043e\u0433\u043b\u0430 \u0432\u0438\u0434\u0435\u0442\u044c \u0431\u043e\u043b\u0435\u0435 \u0448\u0438\u0440\u043e\u043a\u0438\u0439 \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442 (\u0447\u0442\u043e \u0432\u043e\u043a\u0440\u0443\u0433 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0430 \u0432\u043e\u0434\u0430), \u0442\u043e \u043e\u043d\u0430 \u043d\u0435 \u0441\u0442\u0430\u043b\u0430 \u0431\u044b \u043e\u0442\u043d\u043e\u0441\u0438\u0442\u044c \u043a\u0430\u0442\u0435\u0440 \u043a \u043c\u0430\u0448\u0438\u043d\u0435.'}),"\n",(0,i.jsx)(n.p,{children:"\u0423\u0447\u0438\u0442\u044b\u0432\u0430\u0442\u044c \u0431\u043e\u043b\u0435\u0435 \u0448\u0438\u0440\u043e\u043a\u0438\u0439 \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442 \u043c\u043e\u0436\u043d\u043e, \u0443\u0432\u0435\u043b\u0438\u0447\u0438\u0432\u0430\u044f \u0447\u0438\u0441\u043b\u043e \u0441\u0432\u0451\u0440\u0442\u043e\u0447\u043d\u044b\u0445 \u0441\u043b\u043e\u0451\u0432. \u0422\u043e\u0433\u0434\u0430 \u0431\u043e\u043b\u0435\u0435 \u043f\u043e\u0437\u0434\u043d\u0438\u0435 \u0441\u0432\u0451\u0440\u0442\u043a\u0438 \u0431\u0443\u0434\u0443\u0442 \u0438\u043c\u0435\u0442\u044c \u0431\u043e\u043b\u0435\u0435 \u0448\u0438\u0440\u043e\u043a\u0443\u044e \u043e\u0431\u043b\u0430\u0441\u0442\u044c \u0432\u0438\u0434\u0438\u043c\u043e\u0441\u0442\u0438. \u041e\u0434\u043d\u0430\u043a\u043e \u044d\u0442\u043e \u043f\u0440\u0438\u0432\u043e\u0434\u0438\u0442 \u043a \u0431\u043e\u043b\u044c\u0448\u0435\u043c\u0443 \u0447\u0438\u0441\u043b\u0443 \u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u0439 \u0438 \u0443\u0441\u043b\u043e\u0436\u043d\u044f\u0435\u0442 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0443 \u0441\u0435\u0442\u0435\u0439."}),"\n",(0,i.jsxs)(n.p,{children:["\u0414\u043b\u044f \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u0443\u0447\u0451\u0442\u0430 \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0430 \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0441\u0432\u0451\u0440\u0442\u043a\u0438 \u0441\u043e ",(0,i.jsx)(n.a,{href:"../ConvPool-Images/Conv-params#%D1%81%D0%B4%D0%B2%D0%B8%D0%B3-dilation",children:"\u0441\u0434\u0432\u0438\u0433\u043e\u043c"})," (dilation) \u0431\u043e\u043b\u044c\u0448\u0435 \u0435\u0434\u0438\u043d\u0438\u0446\u044b \u043b\u0438\u0431\u043e \u0443\u0447\u0438\u0442\u044b\u0432\u0430\u0442\u044c \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b ",(0,i.jsx)(n.a,{href:"../ConvPool-Images/Pooling#%D0%BF%D0%B8%D1%80%D0%B0%D0%BC%D0%B8%D0%B4%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9-%D0%BF%D1%83%D0%BB%D0%B8%D0%BD%D0%B3",children:"\u043f\u0438\u0440\u0430\u043c\u0438\u0434\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043f\u0443\u043b\u0438\u043d\u0433\u0430"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"pspnet",children:"PSPNet"}),"\n",(0,i.jsxs)(n.p,{children:["\u041c\u043e\u0434\u0435\u043b\u044c ",(0,i.jsx)(n.strong,{children:"PSPNet"})," [",(0,i.jsx)(n.a,{href:"https://openaccess.thecvf.com/content_cvpr_2017/html/Zhao_Pyramid_Scene_Parsing_CVPR_2017_paper.html",children:"1"}),"] \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043f\u043e\u0432\u044b\u0441\u0438\u0442\u044c \u0442\u043e\u0447\u043d\u043e\u0441\u0442\u044c \u0441\u0435\u043c\u0430\u043d\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u0441\u0435\u0433\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438 \u0437\u0430 \u0441\u0447\u0451\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0431\u043e\u043b\u0435\u0435 \u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0430, \u0447\u0435\u043c \u043e\u0431\u043b\u0430\u0441\u0442\u044c \u0432\u0438\u0434\u0438\u043c\u043e\u0441\u0442\u0438 \u0441\u0432\u0451\u0440\u0442\u043e\u043a. \u042d\u0442\u043e \u0434\u043e\u0441\u0442\u0438\u0433\u0430\u0435\u0442\u0441\u044f \u0442\u0435\u043c, \u0447\u0442\u043e \u043f\u0440\u043e\u043c\u0435\u0436\u0443\u0442\u043e\u0447\u043d\u043e\u0435 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435, \u043f\u043e \u043a\u043e\u0442\u043e\u0440\u043e\u043c\u0443 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0441\u044f \u0441\u0435\u0433\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0441\u043e\u0441\u0442\u043e\u0438\u0442 \u0438\u0437"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u043f\u0440\u043e\u043c\u0435\u0436\u0443\u0442\u043e\u0447\u043d\u043e\u0433\u043e \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u0430 ",(0,i.jsx)(n.a,{href:"../Convolutional-architectures/ResNet#%D0%B2%D0%B0%D1%80%D0%B8%D0%B0%D0%BD%D1%82%D1%8B-%D0%B0%D1%80%D1%85%D0%B8%D1%82%D0%B5%D0%BA%D1%82%D1%83%D1%80%D1%8B",children:"ResNet101"})," \u0441\u043e \u0441\u0432\u0451\u0440\u0442\u043a\u0430\u043c\u0438 \u0441\u043e \u0441\u0434\u0432\u0438\u0433\u043e\u043c (dilation) \u0431\u043e\u043b\u044c\u0448\u0435 \u0435\u0434\u0438\u043d\u0438\u0446\u044b,"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u0432\u044b\u0445\u043e\u0434\u043e\u0432 \u043f\u0438\u0440\u0430\u043c\u0438\u0434\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043f\u0443\u043b\u0438\u043d\u0433\u0430, \u0440\u0430\u0441\u0442\u044f\u043d\u0443\u0442\u044b\u0445 \u0434\u043e \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0445 \u0440\u0430\u0437\u043c\u0435\u0440\u043e\u0432 \u043f\u0440\u043e\u043c\u0435\u0436\u0443\u0442\u043e\u0447\u043d\u043e\u0433\u043e \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0438\u0437 ResNet101."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u0413\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0438 \u0441\u0445\u0435\u043c\u0430 PSPNet \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u0430 \u043d\u0438\u0436\u0435 [",(0,i.jsx)(n.a,{href:"https://openaccess.thecvf.com/content_cvpr_2017/html/Zhao_Pyramid_Scene_Parsing_CVPR_2017_paper.html",children:"1"}),"]:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(24918).A+"",width:"1443",height:"399"})}),"\n",(0,i.jsxs)(n.p,{children:["\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043b\u043e\u0441\u044c 4 \u0441\u043b\u043e\u044f \u043f\u0438\u0440\u0430\u043c\u0438\u0434\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043f\u0443\u043b\u0438\u043d\u0433\u0430 \u0441 \u0441\u0435\u0442\u043a\u0430\u043c\u0438 1x1, 2x2, 3x3, 6x6. \u0414\u043b\u044f \u0442\u043e\u0433\u043e, \u0447\u0442\u043e\u0431\u044b \u0443\u043c\u0435\u043d\u044c\u0448\u0438\u0442\u044c \u0447\u0438\u0441\u043b\u043e \u043a\u0430\u043d\u0430\u043b\u043e\u0432, \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c\u044b\u0445 \u0438\u0437 \u043f\u0438\u0440\u0430\u043c\u0438\u0434\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043f\u0443\u043b\u0438\u043d\u0433\u0430, \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u0438  \u043f\u0443\u043b\u0438\u043d\u0433\u0430 \u043f\u0440\u043e\u043f\u0443\u0441\u043a\u0430\u043b\u0438\u0441\u044c \u0447\u0435\u0440\u0435\u0437 ",(0,i.jsx)(n.a,{href:"../ConvPool-Images/Special-conv#%D0%BF%D0%BE%D1%82%D0%BE%D1%87%D0%B5%D1%87%D0%BD%D0%B0%D1%8F-%D1%81%D0%B2%D1%91%D1%80%D1%82%D0%BA%D0%B0",children:"\u0441\u0432\u0451\u0440\u0442\u043a\u0438 1x1"}),", \u0441\u043d\u0438\u0436\u0430\u044e\u0449\u0438\u0435 \u0447\u0438\u0441\u043b\u043e \u043a\u0430\u043d\u0430\u043b\u043e\u0432 \u0432 4 \u0440\u0430\u0437\u0430."]}),"\n",(0,i.jsxs)(n.p,{children:["ResNet101 \u043e\u0431\u0443\u0447\u0430\u043b\u0441\u044f \u043d\u0430 \u0437\u0430\u0434\u0430\u0447\u0443 \u043a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438. \u0414\u043b\u044f \u0431\u043e\u043b\u0435\u0435 \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u043e\u0439 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0432\u043e \u0432\u0440\u0435\u043c\u044f \u0435\u0433\u043e \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043b\u0438\u0441\u044c \u043f\u043e\u0442\u0435\u0440\u0438 \u043a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438 \u043a\u0430\u043a \u0432 \u043a\u043e\u043d\u0446\u0435 \u0441\u0435\u0442\u0438, \u0442\u0430\u043a \u0438 \u0432 \u0441\u0435\u0440\u0435\u0434\u0438\u043d\u0435 (\u043f\u0440\u0438\u043d\u0446\u0438\u043f ",(0,i.jsx)(n.strong,{children:"deep supervision"}),"), \u0447\u0442\u043e \u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0438 \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u043e \u043d\u0430 \u0440\u0438\u0441\u0443\u043d\u043a\u0435:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(62573).A+"",width:"957",height:"302"})}),"\n",(0,i.jsx)(n.p,{children:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0441\u0432\u0451\u0440\u0442\u043e\u043a \u0441\u043e \u0441\u0434\u0432\u0438\u0433\u043e\u043c \u0431\u043e\u043b\u044c\u0448\u0435 \u0435\u0434\u0438\u043d\u0438\u0446\u044b (dilation>1) \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u043f\u043e\u0432\u044b\u0448\u0430\u043b\u043e \u043e\u0431\u043b\u0430\u0441\u0442\u044c \u0432\u0438\u0434\u0438\u043c\u043e\u0441\u0442\u0438 \u0441\u0432\u0451\u0440\u0442\u043e\u043a, \u0437\u0430\u0441\u0442\u0430\u0432\u043b\u044f\u044f \u0438\u0445 \u0443\u0447\u0438\u0442\u044b\u0432\u0430\u0442\u044c \u0431\u043e\u043b\u0435\u0435 \u0448\u0438\u0440\u043e\u043a\u0438\u0439 \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442."}),"\n",(0,i.jsx)(n.h2,{id:"deeplab",children:"DeepLab"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"DeepLab"})," \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0441\u043e\u0431\u043e\u0439 \u0441\u0435\u0440\u0438\u044e \u043c\u043e\u0434\u0435\u043b\u0435\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 1,2,3,3+ \u0441 \u043f\u043e\u0441\u0442\u0435\u043f\u0435\u043d\u043d\u044b\u043c \u0443\u043b\u0443\u0447\u0448\u0435\u043d\u0438\u0435\u043c \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0430. \u0420\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0438\u043c ",(0,i.jsx)(n.strong,{children:"DeepLab v3+"})," [",(0,i.jsx)(n.a,{href:"https://openaccess.thecvf.com/content_ECCV_2018/html/Liang-Chieh_Chen_Encoder-Decoder_with_Atrous_ECCV_2018_paper.html",children:"2"}),"]. \u0414\u043b\u044f \u0438\u0437\u0432\u043b\u0435\u0447\u0435\u043d\u0438\u044f \u043f\u0440\u043e\u043c\u0435\u0436\u0443\u0442\u043e\u0447\u043d\u043e\u0433\u043e \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432\u043e\u0433\u043e \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043b\u0438\u0441\u044c \u0441\u0432\u0451\u0440\u0442\u043e\u0447\u043d\u044b\u0435 \u0441\u043b\u043e\u0438 \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u044b ",(0,i.jsx)(n.a,{href:"../Convolutional-architectures/ResNet-improvements#xception-%D0%B8-resnext",children:"Xception"}),", \u043e\u0441\u043d\u043e\u0432\u0430\u043d\u043d\u043e\u0439 \u043d\u0430 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438 ",(0,i.jsx)(n.a,{href:"../ConvPool-Images/Special-conv#%D0%BF%D0%BE%D0%BA%D0%B0%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F-%D1%81%D0%B2%D1%91%D1%80%D1%82%D0%BA%D0%B0",children:"\u043f\u043e\u043a\u0430\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0441\u0435\u043f\u0430\u0440\u0430\u0431\u0435\u043b\u044c\u043d\u044b\u0445 \u0441\u0432\u0451\u0440\u0442\u043e\u043a"})," (depthwise separable convolutions), \u0441\u043e\u0441\u0442\u043e\u044f\u0449\u0438\u0445 \u0438\u0437 \u043f\u043e\u043a\u0430\u043d\u0430\u043b\u043e\u043d\u044b\u0445 \u0441\u0432\u0451\u0440\u0442\u043e\u043a, \u043f\u043e\u0432\u0435\u0440\u0445 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0434\u0435\u0439\u0441\u0442\u0432\u043e\u0432\u0430\u043b\u0438 \u0441\u0432\u0451\u0440\u0442\u043a\u0438 1x1. \u0412 DeepLab v3+ \u043f\u043e\u043a\u0430\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u0432\u0451\u0440\u0442\u043a\u0438 \u0448\u043b\u0438 \u0441\u043e \u0441\u0434\u0432\u0438\u0433\u043e\u043c (dilation) \u0431\u043e\u043b\u044c\u0448\u0435 \u0435\u0434\u0438\u043d\u0438\u0446\u044b, \u0438 \u043d\u0430\u0437\u044b\u0432\u0430\u043b\u0438\u0441\u044c ",(0,i.jsx)(n.strong,{children:"Atrous convolutions"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["\u0413\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0438 \u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0451\u043d\u043d\u0430\u044f \u0437\u0430\u043c\u0435\u043d\u0430 \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u0430 \u043d\u0438\u0436\u0435 [",(0,i.jsx)(n.a,{href:"https://openaccess.thecvf.com/content_ECCV_2018/html/Liang-Chieh_Chen_Encoder-Decoder_with_Atrous_ECCV_2018_paper.html",children:"2"}),"]:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(72110).A+"",width:"733",height:"534"})}),"\n",(0,i.jsx)(n.p,{children:"\u0422\u0430\u043a\u0436\u0435 \u0432 DeepLab v3+ \u043f\u0430\u0440\u0430\u043b\u043b\u0435\u043b\u044c\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043b\u0441\u044f \u043d\u0430\u0431\u043e\u0440 \u0441\u0432\u0451\u0440\u0442\u043e\u043a \u0441 \u0440\u0430\u0437\u043d\u044b\u043c \u0441\u0434\u0432\u0438\u0433\u043e\u043c: dilation=6,12,18, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0434\u043e\u043f\u043e\u043b\u043d\u044f\u043b\u0438\u0441\u044c \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u0430\u043c\u0438 \u0438\u0437 \u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043f\u0443\u043b\u0438\u043d\u0433\u0430. \u042d\u0442\u0430 \u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0431\u044b\u043b\u0430 \u043d\u0430\u0437\u0432\u0430\u043d\u0430 Atrous Spatial Pyramid Pooling (ASPP)."}),"\n",(0,i.jsxs)(n.p,{children:["\u0410\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430 DeepLab v3+ \u0446\u0435\u043b\u0438\u043a\u043e\u043c \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u0430 \u043d\u0438\u0436\u0435 [",(0,i.jsx)(n.a,{href:"https://openaccess.thecvf.com/content_ECCV_2018/html/Liang-Chieh_Chen_Encoder-Decoder_with_Atrous_ECCV_2018_paper.html",children:"2"}),"]:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(62901).A+"",width:"1049",height:"547"})}),"\n",(0,i.jsxs)(n.p,{children:["\u0410 \u0435\u0449\u0435 \u043d\u0438\u0436\u0435 \u043f\u043e\u043a\u0430\u0437\u0430\u043d \u0441\u0442\u044d\u043a \u0438\u0437 \u0441\u0432\u0451\u0440\u0442\u043e\u043a \u0441 \u0440\u0430\u0437\u043d\u044b\u043c \u0441\u0434\u0432\u0438\u0433\u043e\u043c (\u0434\u043b\u044f \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u044b DeepLab v2) [",(0,i.jsx)(n.a,{href:"https://ieeexplore.ieee.org/abstract/document/7913730",children:"3"}),"]:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(39958).A+"",width:"859",height:"443"})}),"\n",(0,i.jsx)(n.p,{children:"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u0441\u0432\u0451\u0440\u0442\u043e\u043a \u0441 \u0440\u0430\u0437\u043d\u044b\u043c\u0438 \u0441\u0434\u0432\u0438\u0433\u0430\u043c\u0438 \u043a\u043e\u043d\u043a\u0430\u0442\u0435\u043d\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c \u0438 \u0434\u043e\u043f\u043e\u043b\u043d\u044f\u043b\u0438\u0441\u044c \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u0430\u043c\u0438, \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u044b\u043c\u0438 \u0441 \u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043f\u0443\u043b\u0438\u043d\u0433\u0430."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"\u0412\u0441\u0451 \u044d\u0442\u043e \u043f\u043e\u0437\u0432\u043e\u043b\u0438\u043b\u043e \u043f\u0440\u0438 \u0441\u0435\u0433\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438 \u043f\u0438\u043a\u0441\u0435\u043b\u0435\u0439 \u0443\u0447\u0438\u0442\u044b\u0432\u0430\u0442\u044c \u043a\u0430\u043a \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u044b\u0435 \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u044b \u0440\u0430\u0437\u043d\u043e\u0433\u043e \u0440\u0430\u0437\u043c\u0435\u0440\u0430, \u0442\u0430\u043a \u0438 \u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u044b\u0439 \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442 \u0432 \u0446\u0435\u043b\u043e\u043c."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u0414\u0430\u043b\u0435\u0435 \u0432 \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0435 \u0447\u0438\u0441\u043b\u043e \u043a\u0430\u043d\u0430\u043b\u043e\u0432 \u0441\u043d\u0438\u0436\u0430\u043b\u043e\u0441\u044c \u0441\u0432\u0451\u0440\u0442\u043a\u0430\u043c\u0438 1x1. \u0414\u043b\u044f \u0443\u043b\u0443\u0447\u0448\u0435\u043d\u043d\u043e\u0433\u043e \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043e \u0433\u0440\u0430\u043d\u0438\u0446\u0430\u0445 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432, \u043d\u0438\u0437\u043a\u043e\u0443\u0440\u043e\u0432\u043d\u0435\u0432\u044b\u0435 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u0438 \u0441 \u043f\u0440\u043e\u043c\u0435\u0436\u0443\u0442\u043e\u0447\u043d\u043e\u0433\u043e \u0441\u043b\u043e\u044f \u043a\u043e\u0434\u0438\u0440\u043e\u0432\u0449\u0438\u043a\u0430 \u043a\u043e\u043d\u043a\u0430\u0442\u0435\u043d\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c \u0441 \u043f\u0440\u043e\u043c\u0435\u0436\u0443\u0442\u043e\u0447\u043d\u044b\u043c \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435\u043c \u0434\u0435\u043a\u043e\u0434\u0438\u0440\u043e\u0432\u0449\u0438\u043a\u0430."}),"\n",(0,i.jsx)(n.h2,{id:"\u043b\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0430",children:"\u041b\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0430"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://openaccess.thecvf.com/content_cvpr_2017/html/Zhao_Pyramid_Scene_Parsing_CVPR_2017_paper.html",children:"Zhao H. et al. Pyramid scene parsing network //Proceedings of the IEEE conference on computer vision and pattern recognition. \u2013 2017. \u2013 \u0421. 2881-2890."})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://openaccess.thecvf.com/content_ECCV_2018/html/Liang-Chieh_Chen_Encoder-Decoder_with_Atrous_ECCV_2018_paper.html",children:"Chen L. C. et al. Encoder-decoder with atrous separable convolution for semantic image segmentation //Proceedings of the European conference on computer vision (ECCV). \u2013 2018. \u2013 \u0421. 801-818."})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://ieeexplore.ieee.org/abstract/document/7913730",children:"Chen L. C. et al. Deeplab: Semantic image segmentation with deep convolutional nets, atrous convolution, and fully connected crfs //IEEE transactions on pattern analysis and machine intelligence. \u2013 2017. \u2013 \u0422. 40. \u2013 \u2116. 4. \u2013 \u0421. 834-848."})}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},39958:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/ASPP-block-76086c8a12d9ab24cbe7278f07bc28fc.png"},62901:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/DeepLab-architecture2-55f250877e7bbf792ec512658a4bde16.png"},72110:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/dilated-separable-conv-860c4b006f55f925b25cb20c4a7bd5cc.png"},62573:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/PSPNet-backbone-deep-supervision-1584edda7700ab80f6d56823912bf952.jpg"},24918:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/PSPNet-4dd316987bb5328ca507884a9eb0e88b.jpg"},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>r});var s=t(96540);const i={},c=s.createContext(i);function o(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);