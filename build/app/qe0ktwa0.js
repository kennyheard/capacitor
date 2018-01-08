/*! Built with http://stenciljs.com (es5) */

App.loadStyles("avocado-site","*{box-sizing:border-box}avocado-site{height:100%;display:flex;flex-flow:column}.row{display:flex}.col{flex:1}.container{max-width:1080px;margin:auto}.input-with-button{display:flex;height:50px}.input-with-button input{flex:1;height:100%}.input-with-button button{flex-grow:0;flex-shrink:1;margin:0;border:0;border-radius:0 3px 3px 0;height:100%}.input-with-button button:hover{transform:none}.app{height:100%;max-width:1080px;margin:auto}.landing-page #main-div{background-color:#030a04;color:#fff}#main-div{flex-grow:1;flex-shrink:0}#main-div site-header stencil-route-link a{color:#fff}::selection{background:#e7e7f2}::-moz-selection{background:#e7e7f2}body,html{font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\";width:100%;height:100%;padding:0;margin:0;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased}h1,h2,h3,h4{color:#16161d;letter-spacing:-1px;font-family:'Roboto Mono',-apple-system,BlinkMacSystemFont,\"Segoe UI\",Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"}h1{font-size:28px;font-weight:700}h2{font-size:20px;font-weight:700}h2,h3{margin-top:48px;margin-bottom:8px}p,ul{color:#2d2d4c;font-size:15px;line-height:2em;margin:24px 0}stencil-route-link:hover{cursor:pointer}.wrapper{line-height:32px;min-height:100%;padding-top:60px;margin:15px;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:flex-start;align-content:stretch;align-items:flex-start}pre{word-break:break-all;word-wrap:break-word;display:block;white-space:pre-wrap;margin:24px 0 28px;padding:16px 24px;border-radius:4px;color:#abb2bf;background-color:#404040}pre code{font-weight:500;display:block;overflow-x:auto;word-wrap:normal;white-space:pre;box-sizing:border-box;font-size:14px;line-height:20px}code{font-weight:400;font-family:\"Source Code Pro\",monospace;font-size:14px}.nextButton{background:#5851ff;color:#fff;text-decoration:none;border:none;font-size:13px;font-weight:700;text-transform:uppercase;padding:16px 20px;border-radius:2px;box-shadow:0 8px 16px rgba(0,0,0,.1),0 3px 6px rgba(0,0,0,.08);outline:0;letter-spacing:.04em;transition:all .15s ease;cursor:pointer;float:right;margin-right:5px}.nextButton:hover{text-decoration:none;transform:translateY(1px);box-shadow:0 2px 4px rgba(0,0,0,.04),0 1px 2px rgba(0,0,0,.16)}.backButton{color:#5851ff;background:#fff;text-decoration:none;float:left;border:none;font-size:13px;font-weight:700;text-transform:uppercase;padding:16px 20px;border-radius:2px;box-shadow:0 8px 16px rgba(0,0,0,.1),0 3px 6px rgba(0,0,0,.08);outline:0;letter-spacing:.04em;transition:all .15s ease;cursor:pointer;margin-bottom:15px;margin-left:5px}.backButton:hover{text-decoration:none;transform:translateY(1px);box-shadow:0 2px 4px rgba(0,0,0,.04),0 1px 2px rgba(0,0,0,.16)}.hljs-comment,.hljs-quote{color:#5c6370;font-style:italic}.hljs-doctag,.hljs-formula,.hljs-keyword{color:#c678dd}.hljs-deletion,.hljs-name,.hljs-section,.hljs-selector-tag,.hljs-subst{color:#e06c75}.hljs-literal{color:#56b6c2}.hljs-addition,.hljs-attribute,.hljs-meta-string,.hljs-regexp,.hljs-string{color:#98c379}.hljs-built_in,.hljs-class .hljs-title{color:#e6c07b}.hljs-attr,.hljs-number,.hljs-selector-attr,.hljs-selector-class,.hljs-selector-pseudo,.hljs-template-variable,.hljs-type,.hljs-variable{color:#d19a66}.hljs-bullet,.hljs-link,.hljs-meta,.hljs-selector-id,.hljs-symbol,.hljs-title{color:#61aeee}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}.hljs-link{text-decoration:underline}.landing-page footer .ionic-oss-logo{background-image:url(assets/img/ionic-os-logo.png)}footer{bottom:0;left:0;width:100%;background:#f8f8fc;height:8em;display:flex;margin-top:32px;flex:0 0 8em}footer .ionic-oss-logo{background:url(assets/img/ionic-os-dark-logo.png) no-repeat transparent;width:124px;height:16px;background-size:100%}footer .container{display:flex;flex:1;justify-content:space-between;align-items:center}footer .svg-button{margin-left:16px;transition:all .15s ease}footer .svg-button:hover{opacity:.5}#open-source img{width:50%}#open-source p{margin-top:0;margin-bottom:0;color:#a5a4b8;font-size:10px}\@media screen and (max-width:355px){.wrapper{padding-top:100px}}\@media screen and (max-width:450px){.wrapper{padding-top:80px}site-header a{display:none}site-header stencil-route-link a{display:initial}}\@media screen and (max-width:590px){.wrapper{margin-right:0;margin-left:0;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-flex-direction:column-reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse}.wrapper .pull-right{padding:0 15px;width:100%;min-height:100vh}.wrapper .pull-left{position:relative;padding:15px;width:100%;bottom:0;background-color:#16161d}.wrapper .pull-left *{color:#fff}}\@media screen and (min-width:590px){.wrapper .pull-left{min-width:250px;max-width:250px;position:-webkit-sticky;position:sticky;top:50px}.wrapper .pull-right{padding-left:96px;padding-right:32px;flex:1 1 auto;overflow:auto;min-height:100vh}}\navocado-site.hydrated{visibility:inherit}","landing-page",".landing-page landing-page h1,.landing-page landing-page h2{color:#fff}.landing-page landing-page p{color:#bcc0be}.footer-landing{background:#1d2322;margin-top:0}landing-page main{display:flex;flex-direction:column;margin-top:3em}landing-page #logo{width:4em;height:4em}landing-page #landing-cta-offset{flex:0;min-width:50px}landing-page #action-call{font-size:2.1em;line-height:normal;margin-top:1em;font-weight:600;margin-bottom:.9em}landing-page #action-more{margin:.2em 0 1em;color:#d0d5d3;font-weight:400}landing-page #action-more b{color:#fff}landing-page #landing-cta-image{background:url(assets/img/right-img.png) no-repeat transparent;background-size:contain;height:400px;background-position-x:100%}landing-page #cta-form{margin-top:3em}landing-page #cta-form input{font-size:14px;padding:5px 10px;width:200px;color:#747a79;background-color:#232926;border:none;border-radius:3px}landing-page #cta-form button{background-color:#2acb39;text-transform:uppercase;color:#fff}landing-page button{margin:8px;border:none;font-size:13px;font-weight:700;text-transform:uppercase;padding:16px 20px;border-radius:2px;box-shadow:0 8px 16px rgba(0,0,0,.1),0 3px 6px rgba(0,0,0,.08);outline:0;letter-spacing:.04em;transition:all .15s ease;cursor:pointer}landing-page button:first-child{margin-left:0}landing-page button:hover{box-shadow:0 3px 6px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.1);transform:translateY(1px)}landing-page #get-started{background:#7fd02e;color:#fff}landing-page #learn-more{background:#222823;color:#72d477}landing-page #youtube-video{opacity:0;transition:opacity .3s,transform .3s cubic-bezier(.36,.66,.04,1);position:absolute;z-index:9999;pointer-events:none;display:flex;justify-content:center;left:0;width:100%}landing-page #youtube-video iframe{box-shadow:0 8px 16px rgba(0,0,0,.15),0 20px 40px rgba(0,0,0,.2);border-radius:8px}landing-page .youtube-show{opacity:1!important;transform:translatey(-30px)!important;pointer-events:auto!important}landing-page #background{height:100%;position:fixed;width:100%;z-index:8888;top:0;left:0;bottom:0;right:0;opacity:0;pointer-events:none;background-color:#00082d;transition:opacity .3s cubic-bezier(.36,.66,.04,1)}landing-page .background-show{opacity:.4!important;pointer-events:auto!important}landing-page #three-points{display:flex;justify-content:space-around;margin-top:3.2em;margin-bottom:2.8em}landing-page .point-card{flex:1;position:relative;padding:0 2em}landing-page .point-card a{color:#fff;text-decoration:none}landing-page .point-card:first-child{padding-left:0}landing-page .point-card:last-child{padding-right:0}landing-page .point-card h2{margin-top:1em;font-size:16px}landing-page .point-card p{margin-top:.2em;font-weight:400;font-size:14px;letter-spacing:-.02em;line-height:30px}landing-page .point-card:before{content:'';display:block;background:url(assets/img/checkbox.png) no-repeat transparent;width:20px;height:20px;background-size:100%;margin-bottom:.3em}landing-page #launch-video,landing-page #mobile-video{display:flex;align-items:center;justify-content:center;line-height:4;transition:all .2s ease;cursor:pointer;text-decoration:none;outline:0}landing-page #launch-video:hover,landing-page #mobile-video:hover{opacity:.7}landing-page #launch-video img,landing-page #mobile-video img{height:1.2em}landing-page #launch-video span,landing-page #mobile-video span{font-size:14px;margin-left:8px;color:#5851ff;font-weight:500;transition:all .15s ease}landing-page #mobile-video{display:none}\@media screen and (max-width:740px){landing-page #action-call{width:auto}landing-page main{max-width:90%;margin:auto}landing-page #landing-cta-image{display:none}landing-page #launch-video{display:none}landing-page #youtube-video{display:none}landing-page #mobile-video{display:flex}landing-page #three-points{flex-direction:column;text-align:left;display:block;max-width:90%;margin:auto}landing-page #three-points .point-card{margin:1em 2.4em}landing-page #three-points .point-card::before{left:0}landing-page #three-points .point-card{margin-left:0;margin-right:0;padding:0}}\@media screen and (max-width:500px){landing-page main{max-width:90%;margin:auto}landing-page #landing-cta-image{display:none}landing-page #three-points{display:block;max-width:90%;margin:auto}landing-page #three-points .point-card{margin-left:0;margin-right:0;padding:0}landing-page #cta-form button{padding:10px 14px}}\nlanding-page.hydrated{visibility:inherit}","lazy-iframe","\nlazy-iframe.hydrated{visibility:inherit}","site-header",".landing-page .logo{color:#fff;font-family:'Roboto Mono',-apple-system,BlinkMacSystemFont,\"Segoe UI\",Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\";letter-spacing:1px;font-weight:600}.landing-page site-header{position:static}site-header{position:fixed;top:0;left:0;right:0;background-color:rgba(255,255,255,.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px);z-index:99}site-header .logo{font-size:24px}site-header .logo-link a{margin:0}site-header .site-header{padding:20px 0;max-width:1080px;margin:auto;display:flex;flex-direction:row;flex-wrap:nowrap;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}site-header a,site-header stencil-route-link a{font-size:14px;margin:8px 8px;margin-right:1.4em;color:#86869c;text-decoration:none;font-weight:500;letter-spacing:-.02em;text-decoration:none;transition:all .2s ease}site-header a:hover,site-header stencil-route-link a.link-active,site-header stencil-route-link a:hover{color:#2b2b38!important;text-decoration:none}site-header .pull-right{order:0;flex:1 1 auto;text-align:right}\@media screen and (max-width:450px){site-header img{padding-bottom:20px}site-header .pull-right{display:block;text-align:center}}\@media screen and (max-width:465px){site-header .button{display:none}}\@media screen and (max-width:722px){site-header a,site-header stencil-route-link a{font-size:12px;margin:8px 12px}site-header .pull-right{justify-content:space-around;display:flex}site-header .site-header{flex-direction:column}site-header stencil-route-link{margin-right:unset}}\nsite-header.hydrated{visibility:inherit}","site-menu","site-menu .star-button{margin-bottom:-2px;width:120px;margin-top:26px}site-menu h4{font-size:16px;font-weight:700;margin-bottom:0}site-menu #menu-list{list-style-type:none;margin:0;padding:0;-webkit-padding-start:0}site-menu #menu-list ul{padding:0;color:#2d2d4c;font-size:15px;line-height:2em;margin:0 0 28px}site-menu #menu-list li{list-style:none;margin:0;text-indent:0;font-size:14px;font-weight:400}site-menu a{color:#484854;text-decoration:none}site-menu stencil-route-link a{color:#484854;text-decoration:none}site-menu stencil-route-link .link-active{font-weight:700;color:#69d353;letter-spacing:-.013em}site-menu stencil-route-link:hover a{color:#2f2f35!important;font-weight:500;letter-spacing:-.013em}\nsite-menu.hydrated{visibility:inherit}");
App.loadComponents("qe0ktwa0",function(t,i,e,n){"use strict";var o=function(){function t(){this.isLandingPage=!1}return t.prototype.hostData=function(){return{class:{"landing-page":this.isLandingPage}}},t.prototype.render=function(){var t=this.isLandingPage?"footer-landing":"";return[i("div",{id:"main-div"},i("site-header",null),i("div",{class:"app"},i("stencil-router",{root:"/capacitor/"},i("stencil-route",{url:"/",component:"landing-page",exact:!0}),i("stencil-route",{url:"/blog",component:"blog-page"}),i("stencil-route",{url:"/demos",component:"demos-page"}),i("stencil-route",{url:"/docs/intro/:pageName?",routeRender:function(t){return i("document-component",{pages:[{undefined:"intro/index.html",intro:"intro/index.html","getting-started":"intro/getting-started.html","migrating-from-phonegap-cordova":"intro/migrating-from-phonegap-cordova.html"}[t.match.params.pageName]]})}}),i("stencil-route",{url:"/docs/basics/:pageName",routeRender:function(t){return i("document-component",{pages:[{"creating-apps":"basics/creating-apps.html","configuring-your-app":"basics/configuring-your-app.html","app-project-structure":"basics/app-project-structure.html","building-your-app":"basics/building-your-app.html","running-your-app":"basics/running-your-app.html"}[t.match.params.pageName]]})}}),i("stencil-route",{url:"/docs/ios/:pageName",routeRender:function(t){return i("document-component",{pages:[{configuration:"ios/configuration.html","managing-dependencies":"ios/managing-dependencies.html"}[t.match.params.pageName]]})}}),i("stencil-route",{url:"/docs/android/:pageName",routeRender:function(t){return i("document-component",{pages:[{configuration:"android/configuration.html","managing-dependencies":"android/managing-dependencies.html"}[t.match.params.pageName]]})}}),i("stencil-route",{url:"/docs/plugins/:pageName",routeRender:function(t){return i("document-component",{pages:[{undefined:"plugins/index.html","creating-plugins":"plugins/creating-plugins.html","plugin-api-javascript":"plugins/plugin-api-javascript.html"}[t.match.params.pageName]]})}}),i("stencil-route",{url:"/docs/apis/:pageName",routeRender:function(t){var e="apis/index.html",n=t.match.params.pageName;return n&&(e="apis/"+n+"/index.html"),i("document-component",{pages:[e]})}}),i("stencil-route",{url:"/resources",component:"resources-page"}),i("stencil-route",{url:"/pwa",component:"pwas-page"})))),i("footer",{class:t},i("div",{class:"container"},i("div",{id:"open-source"},i("a",{href:"http://ionicframework.com/",title:"IonicFramework.com",rel:"noopener"},i("div",{class:"ionic-oss-logo"})),i("p",null,"Released under ",i("span",{id:"mit"},"MIT License")," | Copyright @ 2017")),i("div",{id:"footer-icons"},i("a",{class:"svg-button",id:"stencil-twitter",href:"https://twitter.com/getcapacitor",target:"_blank",rel:"noopener",title:"Open the Capacitor account on twitter"},i("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 512 512"},i("path",{d:"M492 109.5c-17.4 7.7-36 13-55.6 15.3 20-12 35.4-31 42.6-53.6-18.7 11-39.4 19.2-61.5 23.5-17.7-19-43-30.7-70.7-30.7-53.5 0-96.8 43.4-96.8 97 0 7.5.8 15 2.5 22-80.5-4-152-42.6-199.6-101.3-8.4 14.3-13.2 31-13.2 48.7C39.8 164 57 193.7 83 211c-16-.3-31-4.7-44-12v1.2c0 47 33.4 86 77.7 95-8 2.2-16.7 3.4-25.5 3.4-6.2 0-12.3-.6-18.2-1.8 12.3 38.5 48 66.5 90.5 67.3-33 26-75 41.6-120.3 41.6-7.8 0-15.5-.5-23-1.4C62.7 432 113.6 448 168 448 346.7 448 444 300.3 444 172.2c0-4.2 0-8.4-.3-12.5 19-13.7 35.3-30.7 48.3-50.2z"}))),i("a",{class:"svg-button",id:"ionic-forum",href:"https://avocadojs.herokuapp.com/",target:"_blank",rel:"noopener",title:"Join the Avocado slack"},i("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 512 512"},i("path",{d:"M213.6 236.2l64-21.4 20.7 61.8-64 21.4z"}),i("path",{d:"M213.6 236.2l64-21.4 20.7 61.8-64 21.4z"}),i("path",{d:"M476 190C426.3 25 355-13.4 190 36S-13.4 157 36 322s121 203.4 286 154 203.4-121 154-286zm-83.4 107l-31 10.5 10.6 32.2c4.2 13-2.7 27.2-15.7 31.5-2.7.8-5.8 1.5-8.4 1.2-10-.4-19.5-7-23-17l-10.6-32-64 21.4L261 377c4.2 13-2.7 27.2-15.7 31.5-2.7.8-5.8 1.5-8.4 1.2-10-.4-19.7-7-23-17l-11-32.3-31 10.3c-2.7.8-5.8 1.5-8.4 1.2-10-.5-19.6-7-23-17-4.2-13 2.7-27.2 15.7-31.5l31-10.4-20.6-61.7-31 10.4c-2.8.8-6 1.5-8.5 1.2-10-.5-19.6-7-23-17-4.2-13 2.7-27.2 15.7-31.5l31-10.4-11-32c-4-13 2.8-27.2 15.8-31.5 13-4.2 27.2 2.7 31.5 15.7l10.7 32.2 64-21.5-10.6-32.3c-4.2-13 2.7-27.2 15.7-31.5 13-4.2 27.3 2.7 31.6 15.7l10.7 32 31-10.3c13-4.2 27.3 2.7 31.6 15.7 4 13-2.8 27.2-15.8 31.5l-31 10.3 20.6 61.8 31-10.3c13-4.2 27.3 2.7 31.6 15.7 4.2 13.2-2.7 27.4-15.8 31.7z"}))))))]},t}(),a=function(){function t(){document.querySelector("avocado-site").isLandingPage=!0,document.title="Capacitor: Universal Web Applications"}return t.prototype.componentDidUnload=function(){document.querySelector("avocado-site").isLandingPage=!1},t.prototype.render=function(){return i("div",null,i("main",null,i("div",{class:"row"},i("div",{class:"col"},i("h1",{id:"action-call"},"Build cross platform mobile apps with JavaScript and the Web"),i("div",{id:"action-more"},"Native Progressive Web Apps with HTML, CSS, and JavaScript",i("br",null),i("br",null),i("b",null,"Coming early 2018. Sign up below for updates")),i("section",{id:"buttons"},i("form",{id:"cta-form",action:"https://codiqa.createsend.com/t/t/s/flhuhj/",method:"post"},i("div",{class:"input-with-button"},i("input",{type:"email",placeholder:"Email address",id:"fieldEmail",name:"cm-flhuhj-flhuhj",required:!0}),i("button",{type:"submit"},"Notify me"))))),i("div",{class:"col",id:"landing-cta-offset"}),i("div",{class:"col",id:"landing-cta-image"}))),i("section",{id:"three-points"},i("div",{class:"point-card"},i("h2",null,"Cross Platform"),i("p",null,"Build web apps that run equally well on iOS, Android, Electron, and as Progressive Web Apps")),i("div",{class:"point-card"},i("h2",null,"Native Access"),i("p",null,"Access the full Native SDK on each platform, and easily deploy to App Stores (and the web!)")),i("div",{class:"point-card"},i("h2",null,"Open Source"),i("p",null,"Capacitor is completely open source (MIT) and maintained by ",i("a",{href:"http://ionicframework.com/"},"Ionic")," and its community."))))},t}(),r=function(){function t(){}return t.prototype.componentDidLoad=function(){var t=this;"IntersectionObserver"in window?(this.io=new IntersectionObserver(function(i){i[0].isIntersecting&&(t.handleIframe(),t.cleanup())}),this.io.observe(this.el.querySelector("iframe"))):this.handleIframe()},t.prototype.componentDidUnload=function(){this.cleanup()},t.prototype.handleIframe=function(){this.realSrc=this.src},t.prototype.cleanup=function(){this.io&&(this.io.disconnect(),this.io=null)},t.prototype.render=function(){return i("div",null,i("iframe",{frameBorder:"0",title:this.title,allowFullScreen:!0,width:"700",height:"450",src:this.realSrc}))},t}(),s=function(){function t(){}return t.prototype.render=function(){return i("div",{class:"site-header"},i("stencil-route-link",{url:"/",class:"logo-link"},i("div",{class:"logo"},"Capacitor")),i("div",{class:"pull-right"},i("stencil-route-link",{urlMatch:"/docs",url:"/docs/intro/"},"Docs")))},t}(),l=function(){function t(){this.MENU=[{title:"Essentials",items:[{title:"Introduction",url:"/docs/intro"},{title:"Getting Started",url:"/docs/intro/getting-started"},{title:"Migrating from PhoneGap/Cordova",url:"/docs/intro/migrating-from-phonegap-cordova"}]},{title:"Basics",items:[{title:"Creating Apps",url:"/docs/basics/creating-apps"},{title:"Project Structure",url:"/docs/basics/app-project-structure"},{title:"App Configuration",url:"/docs/basics/configuring-your-app"},{title:"Building your App",url:"/docs/basics/building-your-app"},{title:"Running your App",url:"/docs/basics/running-your-app"}]},{title:"iOS",items:[{title:"Configuration",url:"/docs/ios/configuration"},{title:"Managing Dependencies",url:"/docs/ios/managing-dependencies"}]},{title:"Android",items:[{title:"Configuration",url:"/docs/android/configuration"},{title:"Managing Dependencies",url:"/docs/android/managing-dependencies"}]},{title:"Plugins",items:[{title:"Introduction",url:"/docs/plugins/"},{title:"Installing Plugins",url:"/docs/plugins/installng-plugins/"},{title:"Creating Plugins",url:"/docs/plugins/creating-plugins/"},{title:"Plugin JavaScript API",url:"/docs/plugins/plugin-api-javascript"}]},{title:"APIs",items:[{title:"Accessibility",url:"/docs/apis/accessibility"},{title:"App State",url:"/docs/apis/app-state"},{title:"Camera",url:"/docs/apis/camera"},{title:"Clipboard",url:"/docs/apis/clipboard"},{title:"Console",url:"/docs/apis/console"},{title:"Device",url:"/docs/apis/device"},{title:"Filesystem",url:"/docs/apis/filesystem"},{title:"Geolocation",url:"/docs/apis/geolocation"},{title:"Haptics",url:"/docs/apis/haptics"},{title:"Keyboard",url:"/docs/apis/keyboard"},{title:"Local Notifications",url:"/docs/apis/local-notifications"},{title:"Modals",url:"/docs/apis/modals"},{title:"Motion",url:"/docs/apis/motion"},{title:"Network",url:"/docs/apis/network"},{title:"Photos",url:"/docs/apis/photos"},{title:"Push Notifications",url:"/docs/apis/push-notifications"},{title:"Share",url:"/docs/apis/share"},{title:"Splash Screen",url:"/docs/apis/splash-screen"},{title:"Status Bar",url:"/docs/apis/status-bar"},{title:"Storage",url:"/docs/apis/storage"},{title:"Toast",url:"/docs/apis/toast"}]}]}return t.prototype.render=function(){return i("div",null,i("iframe",{class:"star-button",src:"https://ghbtns.com/github-btn.html?user=ionic-team&repo=avocado&type=star&count=true",frameBorder:"0",scrolling:"0",width:"170px",height:"20px"}),i("ul",{id:"menu-list"},this.MENU.map(function(t){return i("li",null,i("h4",null,t.title),i("ul",null,t.items.map(function(t){return i("li",null,i("stencil-route-link",{url:t.url},t.title))})))})))},t}();t["avocado-site"]=o,t["landing-page"]=a,t["lazy-iframe"]=r,t["site-header"]=s,t["site-menu"]=l},["avocado-site",[["isLandingPage",1,1,3]],{}],["landing-page",[["el",7,0,1]],{}],["lazy-iframe",[["el",7,0,1],["realSrc",5,0,1],["src",1,1,2],["title",1,1,2]],{}],["site-header",0,{}],["site-menu",0,{}]);;