"use strict";(self.webpackChunksite_new=self.webpackChunksite_new||[]).push([[4346],{52671:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=n(74848),s=n(28453);const i={description:"",keywords:["\u0441\u0432\u0435\u0440\u0442\u043e\u0447\u043d\u044b\u0435 \u0441\u0435\u0442\u0438","\u0441\u0432\u0435\u0440\u0442\u043e\u0447\u043d\u044b\u0435 \u0441\u0435\u0442\u0438 cnn","\u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430 \u0441\u0432\u0435\u0440\u0442\u043e\u0447\u043d\u043e\u0439 \u043d\u0435\u0439\u0440\u043e\u043d\u043d\u043e\u0439 \u0441\u0435\u0442\u0438","convnet"]},o="\u041a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f ImageNet",a={id:"Neural-networks/Convolutional-architectures/ImageNet",title:"\u041a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f ImageNet",description:"",source:"@site/docs/Neural-networks/11-Convolutional-architectures/01-ImageNet.md",sourceDirName:"Neural-networks/11-Convolutional-architectures",slug:"/Neural-networks/Convolutional-architectures/ImageNet",permalink:"/docs/Neural-networks/Convolutional-architectures/ImageNet",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"",keywords:["\u0441\u0432\u0435\u0440\u0442\u043e\u0447\u043d\u044b\u0435 \u0441\u0435\u0442\u0438","\u0441\u0432\u0435\u0440\u0442\u043e\u0447\u043d\u044b\u0435 \u0441\u0435\u0442\u0438 cnn","\u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430 \u0441\u0432\u0435\u0440\u0442\u043e\u0447\u043d\u043e\u0439 \u043d\u0435\u0439\u0440\u043e\u043d\u043d\u043e\u0439 \u0441\u0435\u0442\u0438","convnet"]},sidebar:"Neural-networks",previous:{title:"\u041e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u0441\u0432\u0451\u0440\u0442\u043e\u0447\u043d\u044b\u0435 \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u044b",permalink:"/docs/Neural-networks/Convolutional-architectures"},next:{title:"LeNet",permalink:"/docs/Neural-networks/Convolutional-architectures/LeNet"}},c={},l=[{value:"\u0412\u044b\u0431\u043e\u0440\u043a\u0430 ImageNet",id:"\u0432\u044b\u0431\u043e\u0440\u043a\u0430-imagenet",level:2},{value:"\u041b\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0430",id:"\u043b\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0430",level:2}];function d(e){const t={a:"a",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"\u043a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f-imagenet",children:"\u041a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f ImageNet"}),"\n",(0,r.jsx)(t.h2,{id:"\u0432\u044b\u0431\u043e\u0440\u043a\u0430-imagenet",children:"\u0412\u044b\u0431\u043e\u0440\u043a\u0430 ImageNet"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://www.image-net.org/",children:"ImageNet"})," - \u043e\u0434\u043d\u0430 \u0438\u0437 \u0441\u0430\u043c\u044b\u0445 \u0431\u043e\u043b\u044c\u0448\u0438\u0445 \u0440\u0430\u0437\u043c\u0435\u0447\u0435\u043d\u043d\u044b\u0445 \u0431\u0430\u0437 \u0434\u0430\u043d\u043d\u044b\u0445 \u0434\u043b\u044f \u043a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438 \u0438 \u043b\u043e\u043a\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439. \u041e\u043d\u0430 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0441\u0432\u044b\u0448\u0435 14 \u043c\u0438\u043b\u043b\u0438\u043e\u043d\u043e\u0432 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439, \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0438\u0437 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u043f\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d \u0432 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u043a\u043b\u0430\u0441\u0441 (\u043a\u0430\u043a\u043e\u0439 \u043e\u0431\u044a\u0435\u043a\u0442 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0451\u043d) \u0432\u043c\u0435\u0441\u0442\u0435 \u0441   \u043a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442\u0430\u043c\u0438 \u0432\u044b\u0434\u0435\u043b\u044f\u044e\u0449\u0435\u0433\u043e \u0435\u0433\u043e \u043f\u0440\u044f\u043c\u043e\u0443\u0433\u043e\u043b\u044c\u043d\u0438\u043a\u0430."]}),"\n",(0,r.jsxs)(t.p,{children:["\u0421\u0430\u043c\u0438 \u043a\u043b\u0430\u0441\u0441\u044b \u0440\u0430\u0437\u0431\u0438\u0442\u044b \u043f\u043e \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f\u043c \u0438 \u043f\u043e\u0434\u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f\u043c \u0430\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u043d\u043e \u0441\u0435\u043c\u0430\u043d\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u0441\u0435\u0442\u0438 ",(0,r.jsx)(t.a,{href:"https://ru.wikipedia.org/wiki/WordNet",children:"WordNet"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"\u0421 2010 \u0433\u043e\u0434\u0430 \u0432\u0435\u0434\u0451\u0442\u0441\u044f \u043f\u0440\u043e\u0435\u043a\u0442 ILSVRC (ImageNet Large Scale Visual Recognition Challenge), \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0435 \u0438\u0441\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u0441\u043e\u0440\u0435\u0432\u043d\u0443\u044e\u0442\u0441\u044f \u043f\u043e \u043f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u0438\u044e \u043d\u0430\u0438\u0431\u043e\u043b\u0435\u0435 \u0442\u043e\u0447\u043d\u044b\u0445 \u043a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u043e\u0432 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439, \u0432\u0437\u044f\u0442\u044b\u0445 \u0438\u0437 \u0431\u0430\u0437\u044b ImageNet. \u0412 ILSVRC \u0440\u0430\u0441\u0441\u043c\u0430\u0442\u0440\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u0437\u0430\u0434\u0430\u0447\u0430 \u043a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438 \u043d\u0430 1000 \u043e\u0442\u043e\u0431\u0440\u0430\u043d\u043d\u044b\u0445 \u043a\u043b\u0430\u0441\u0441\u043e\u0432."}),"\n",(0,r.jsx)(t.p,{children:"\u041f\u043e\u0441\u043a\u043e\u043b\u044c\u043a\u0443 \u043a\u043b\u0430\u0441\u0441\u043e\u0432 \u043c\u043d\u043e\u0433\u043e, \u0442\u043e \u043c\u0435\u0442\u043e\u0434\u044b \u043e\u0446\u0435\u043d\u0438\u0432\u0430\u044e\u0442\u0441\u044f \u043f\u043e top-5 \u0442\u043e\u0447\u043d\u043e\u0441\u0442\u0438. \u0422\u043e \u0435\u0441\u0442\u044c \u043f\u0440\u0435\u0434\u0441\u043a\u0430\u0437\u0430\u043d\u0438\u0435 \u0441\u0447\u0438\u0442\u0430\u0435\u0442\u0441\u044f \u0443\u0441\u043f\u0435\u0448\u043d\u044b\u043c, \u0435\u0441\u043b\u0438 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u043a\u043b\u0430\u0441\u0441 \u0432\u0441\u0442\u0440\u0435\u0447\u0430\u0435\u0442\u0441\u044f \u0441\u0440\u0435\u0434\u0438 \u043f\u044f\u0442\u0438 \u043d\u0430\u0438\u0431\u043e\u043b\u0435\u0435 \u0432\u0435\u0440\u043e\u044f\u0442\u043d\u044b\u0445 \u043a\u043b\u0430\u0441\u0441\u043e\u0432 \u043f\u043e \u043c\u043d\u0435\u043d\u0438\u044e \u043c\u043e\u0434\u0435\u043b\u0438."}),"\n",(0,r.jsxs)(t.p,{children:["Top-5 \u0442\u043e\u0447\u043d\u043e\u0441\u0442\u044c \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0445 \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u0438\u0440\u0443\u044e\u0449\u0438\u0445 \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c\u043e\u0432 \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u043d\u0430 \u043d\u0438\u0436\u0435 [",(0,r.jsx)(t.a,{href:"https://ieeexplore.ieee.org/abstract/document/8219390",children:"1"}),"]:"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:n(61591).A+"",width:"979",height:"554"})}),"\n",(0,r.jsxs)(t.p,{children:["\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b \u0441\u043e\u0440\u0435\u0432\u043d\u043e\u0432\u0430\u043d\u0438\u044f ILSVRC \u043f\u043e\u0440\u043e\u0434\u0438\u043b\u0438 \u043c\u0430\u0441\u0441\u043e\u0432\u044b\u0439 \u0438\u043d\u0442\u0435\u0440\u0435\u0441 \u043a \u0433\u043b\u0443\u0431\u043e\u043a\u0438\u043c \u043d\u0435\u0439\u0440\u043e\u0441\u0435\u0442\u044f\u043c, \u043a\u043e\u0442\u043e\u0440\u044b\u0435, \u043d\u0430\u0447\u0438\u043d\u0430\u044f \u0441 2012 \u0433\u043e\u0434\u0430 \u0441\u0442\u0430\u043b\u0438 \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u043b\u0443\u0447\u0448\u0438\u0435 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b \u043f\u043e \u0442\u043e\u0447\u043d\u043e\u0441\u0442\u0438, \u0430 c 2015 - \u0434\u0430\u0436\u0435 \u0431\u043e\u043b\u0435\u0435 \u0432\u044b\u0441\u043e\u043a\u0443\u044e \u0442\u043e\u0447\u043d\u043e\u0441\u0442\u044c, \u0447\u0435\u043c \u0447\u0435\u043b\u043e\u0432\u0435\u043a, \u043e\u0446\u0435\u043d\u0438\u0432\u0430\u0435\u043c\u0443\u044e \u0432 5.1% [",(0,r.jsx)(t.a,{href:"https://arxiv.org/abs/1409.0575",children:"2"}),"]. \u041f\u0440\u0438 \u044d\u0442\u043e\u043c \u0432\u0438\u0434\u043d\u043e, \u0447\u0442\u043e \u0447\u0438\u0441\u043b\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0445 \u0441\u043b\u043e\u0451\u0432 \u0432 \u0441\u0435\u0442\u044f\u0445 \u0442\u0430\u043a\u0436\u0435 \u0440\u043e\u0441\u043b\u043e."]}),"\n",(0,r.jsx)(t.p,{children:"\u0411\u0443\u0440\u043d\u044b\u0439 \u0440\u043e\u0441\u0442 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044f \u0433\u043b\u0443\u0431\u043e\u043a\u0438\u0445 \u043d\u0435\u0439\u0440\u043e\u0441\u0435\u0442\u0435\u0439 \u0431\u044b\u043b \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0435\u043d \u0432 \u043f\u0435\u0440\u0432\u0443\u044e \u043e\u0447\u0435\u0440\u0435\u0434\u044c \u043f\u043e\u044f\u0432\u043b\u0435\u043d\u0438\u0435\u043c \u043c\u043e\u0449\u043d\u044b\u0445 \u0432\u044b\u0447\u0438\u0441\u043b\u0438\u0442\u0435\u043b\u0435\u0439 (\u0432\u0438\u0434\u0435\u043e\u043a\u0430\u0440\u0442), \u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u044d\u0442\u0438 \u0441\u0435\u0442\u0438 \u043c\u043e\u0436\u043d\u043e \u0431\u044b\u043b\u043e \u043d\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0442\u044c \u0438 \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u0442\u044c. \u0422\u0430\u043a\u0436\u0435 \u043e\u043d \u0431\u044b\u043b \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0435\u043d \u043f\u043e\u044f\u0432\u043b\u0435\u043d\u0438\u0435\u043c \u043c\u043d\u043e\u0433\u0438\u0445 \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u043d\u044b\u0445 \u0438\u043d\u043d\u043e\u0432\u0430\u0446\u0438\u0439 \u0438 \u0438\u043d\u0436\u0435\u043d\u0435\u0440\u043d\u044b\u0445 \u043f\u0440\u0438\u0451\u043c\u043e\u0432 \u043f\u043e \u0440\u0435\u0433\u0443\u043b\u044f\u0440\u0438\u0437\u0430\u0446\u0438\u0438, \u043f\u043e\u0437\u0432\u043e\u043b\u0438\u0432\u0448\u0438\u0445 \u043d\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0442\u044c \u044d\u0442\u0438 \u043d\u0435\u0439\u0440\u043e\u0441\u0435\u0442\u0438 \u0442\u0430\u043a, \u0447\u0442\u043e\u0431\u044b \u043e\u043d\u0438 \u043d\u0435 \u043f\u0435\u0440\u0435\u043e\u0431\u0443\u0447\u0430\u043b\u0438\u0441\u044c."}),"\n",(0,r.jsx)(t.h2,{id:"\u043b\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0430",children:"\u041b\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0430"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://ieeexplore.ieee.org/abstract/document/8219390",children:"Nguyen K. et al. Iris recognition with off-the-shelf CNN features: A deep learning perspective //Ieee Access. \u2013 2017. \u2013 \u0422. 6. \u2013 \u0421. 18848-18855."})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://arxiv.org/abs/1409.0575",children:"Russakovsky O. et al. Imagenet large scale visual recognition challenge //International journal of computer vision. \u2013 2015. \u2013 \u0422. 115. \u2013 \u0421. 211-252."})}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},61591:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/ImageNet-accuracy-dynamics-d9bd1a3c2bb521b0a7dc9051298f2b47.png"},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var r=n(96540);const s={},i=r.createContext(s);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);