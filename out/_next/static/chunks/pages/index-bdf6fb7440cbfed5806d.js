(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5809:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Se}});var s=n(3624),r=n(7294),a=n(1655),i=n(4942),o=n(5987),l=n(4184),c=n.n(l),d=n(5893),u=function(e){var t=e.className,n=e.size,s=void 0===n?"md":n;return(0,d.jsxs)("svg",{className:c()("animate-spin text-brandPrimary",{"h-3 w-3":"sm"===s,"h-5 w-5":"md"===s},t),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[(0,d.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,d.jsx)("path",{className:"opacity-90",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})},m="md",f="sm",x="xs",h="primary",p="secondary",v="danger",b=["startIcon","endIcon","className","variant","size","isLoading","disabled","children","block"];function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var w=function(e){var t=e.startIcon,n=e.endIcon,s=e.className,a=e.variant,i=void 0===a?h:a,l=e.size,g=void 0===l?m:l,w=e.isLoading,y=void 0!==w&&w,N=e.disabled,C=void 0!==N&&N,k=e.children,O=e.block,P=void 0!==O&&O,E=(0,o.Z)(e,b),S=y||C;return(0,d.jsx)("button",j(j({disabled:S,className:c()("font-bold px-4 flex flex-row items-center justify-center outline-none ring-opacity-75 text-white focus:outline-none custom-button-active-effect",{"w-full":P,"py-2":g!==x,"py-1":g===x,"h-7":g===x,"h-9":g===f,"h-16":g===m,"text-base":g===x,"text-sm":g===f,"text-lg":g===m,"rounded-xl":g===m,rounded:g===x,"rounded-lg":g===f,"bg-brandPrimary hover:bg-brandPrimaryHover":i===h,"bg-brandSecondary hover:bg-brandSecondaryHover":i===p,"bg-failure hover:bg-failureHover":i===v,"bg-disabled hover:bg-disabled active:shadow-none cursor-now-allowed remove-active-effect":S,"text-disabled":S},s)},E),{},{children:(0,d.jsxs)(d.Fragment,{children:[y&&(0,d.jsx)(u,{className:"mr-2"}),(0,r.isValidElement)(t)&&(0,r.cloneElement)(t),k,(0,r.isValidElement)(n)&&(0,r.cloneElement)(n)]})}))};var y=function(){return(0,d.jsxs)("footer",{className:"px-2 sm:px-6 text-center mb-2 sm:mb-6 mt-4",children:[(0,d.jsx)("h5",{className:"text-md sm:text-lg font-bold",children:"Backed by"}),(0,d.jsxs)("div",{className:"hidden sm:block select-none",children:[(0,d.jsxs)("div",{className:"mt-6 flex flex-row items-end justify-center space-x-6",children:[(0,d.jsx)("img",{src:"/images/backed/alameda.svg",width:216,height:44}),(0,d.jsx)("img",{src:"/images/backed/qtum.svg",width:100,height:32}),(0,d.jsx)("img",{src:"/images/backed/ngc.svg",width:178,height:20})]}),(0,d.jsxs)("div",{className:"mt-6 flex flex-row items-center justify-center space-x-6",children:[(0,d.jsx)("img",{src:"/images/backed/sino.svg",width:80,height:24}),(0,d.jsx)("img",{src:"/images/backed/petrock.svg",width:98,height:24}),(0,d.jsx)("img",{src:"/images/backed/svc.svg",width:68,height:24}),(0,d.jsx)("img",{src:"/images/backed/rock.svg",width:74,height:24}),(0,d.jsx)("img",{src:"/images/backed/mgnr.svg",width:105,height:24}),(0,d.jsx)("img",{src:"/images/backed/coin98.svg",width:82,height:24}),(0,d.jsx)("img",{src:"/images/backed/solana.svg",width:98,height:24})]})]}),(0,d.jsx)("div",{className:"sm:hidden my-2 mx-2",children:(0,d.jsx)("img",{src:"/images/backed/all.png",width:"100%"})})]})},N=n(885),C=n(4873),k=function(e){var t=(0,r.useContext)(C.t),n=t.onPresent,s=t.onDismiss;return[(0,r.useCallback)((function(){n(e)}),[e,n]),s]},O=function(e){var t=e.className,n=e.onShowWallets,a=(0,s.Os)(),i=a.wallet,o=a.connected,l=a.deactivate,u=k((0,d.jsx)(s.xY,{})),m=(0,N.Z)(u,1)[0],f=(0,r.useCallback)((function(){o&&i?l():(n&&n(),m())}),[i,o]);return(0,d.jsx)("button",{className:c()("h-10 px-4 text-sm font-bold rounded-xl border flex flex-row items-center justify-center","outline-none focus:outline-none hover:text-white","shadow-outerButton custom-button-active-effect",{"text-brandPrimary hover:bg-brandPrimaryHover":!o,"text-failure hover:bg-failureHover":o},t),onClick:f,children:1==o?"Disconnect":"Connect Wallet"})},P=function(){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("div",{className:"select-none hidden dark:block",children:(0,d.jsx)("img",{src:"/icons/parrot-logo-d.svg",alt:"Parrot",width:"152",height:"40"})}),(0,d.jsx)("div",{className:"select-none dark:hidden",children:(0,d.jsx)("img",{src:"/icons/parrot-logo.svg",alt:"Parrot",width:"152",height:"40"})})]})},E=n(2223),S=n(3949),D=n(3802),I=n(4734),R=function(){var e=(0,s.Os)(),t=e.setEndpoint,n=e.endpoint,a=e.customRpcUrl,i=(0,r.useState)(a),o=i[0],l=i[1],u=(0,r.useCallback)((function(e){l(e.target.value)}),[l]),m=(0,r.useCallback)((function(e,n){return function(){o&&(e.rpcURL=o,t(e)),n()}}),[o]),f=(0,r.useCallback)((function(e,n){return function(){t(e),n()}}),[t]);return(0,d.jsxs)(E.J,{className:"relative hidden sm:block",children:[(0,d.jsxs)(E.J.Button,{className:"h-10 px-4 text-sm rounded-xl border outline-none focus:outline-none flex flex-row items-center justify-center border-black space-x-2 hover:bg-lightgray sm:min-w-rpc",children:[(0,d.jsx)("svg",{className:"w-5 h-5",width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:(0,d.jsx)("path",{d:"M15.4061 16.6799C15.509 15.836 15.4747 14.9788 15.3903 14.1693C15.807 13.9894 16.0707 13.6984 16.1656 13.2857C16.788 13.2963 17.3892 13.2566 18.0274 13.0529C17.4921 14.537 16.6087 15.6508 15.48 16.619C15.4061 16.6799 15.4061 16.6799 15.4061 16.6799ZM8.28323 18.4206C9.97363 16.4127 12.1598 14.8466 13.5944 13.955C13.7975 14.1296 14.0876 14.291 14.3592 14.3466C14.4594 15.3307 14.3882 16.3333 14.2801 17.4524C12.8877 18.2434 11.5876 18.6058 9.99736 18.6058C9.35654 18.6058 8.95042 18.5767 8.34916 18.4418L8.28323 18.4206ZM2.96677 14.9418C3.11445 13.9444 3.48892 12.2751 4.55432 10.4339C4.67036 10.4603 4.87869 10.4947 5.00264 10.4947C5.26108 10.4947 5.50897 10.463 5.72257 10.3148C7.48945 11.6243 9.83913 12.6746 12.8903 13.0503C11.0232 13.955 8.70781 15.6746 7.03323 18.0635C5.34283 17.4365 4.0981 16.5026 3.04852 15.037L2.96677 14.9418ZM2.16508 6.48413C2.42352 7.01058 2.78481 7.62169 3.43091 8.16402C3.34916 8.41005 3.3096 8.62434 3.3096 8.82275C3.3096 9.19577 3.4019 9.59524 3.65506 9.8545C2.80854 11.0794 2.36287 12.4577 2.16772 13.5397C1.65348 12.4762 1.4135 11.2249 1.4135 9.99206C1.4135 8.75926 1.67721 7.5873 2.14662 6.52646C2.14399 6.5291 2.11498 6.57407 2.16508 6.48413ZM6.33966 2.21693C6.88555 2.51058 7.65295 2.97619 8.51266 3.64815C8.423 3.84656 8.37289 4.06878 8.37289 4.29894C8.37289 4.42857 8.39135 4.55291 8.423 4.67725C7.26793 5.48413 6.34494 6.33069 5.55116 7.24339C5.38766 7.18518 5.12395 7.12434 4.93935 7.12434C4.64662 7.12434 4.34335 7.2037 4.10865 7.34127C3.5654 6.81217 3.02479 5.93122 2.75844 5.39153C3.62605 3.99471 4.84705 2.92593 6.33966 2.21693ZM13.6181 2.19841C12.7136 2.47619 11.8697 2.79365 11.097 3.15079C10.807 2.86772 10.414 2.69048 9.97626 2.69048C9.71519 2.69048 9.53059 2.7328 9.31171 2.84392C8.72099 2.37566 8.1962 1.99735 7.71624 1.70106C8.47046 1.48413 9.17458 1.38624 9.99736 1.38624C11.2948 1.38624 12.5185 1.68254 13.6181 2.19841ZM6.47152 7.90741C7.202 7.07672 8.01688 6.35714 9.06909 5.6164C9.33808 5.82011 9.61498 5.90741 9.9789 5.90741C10.24 5.90741 10.4325 5.86243 10.6514 5.75132C11.875 7.15873 13.1171 8.94709 13.8027 11.2831C13.4889 11.418 13.2648 11.672 13.1619 11.9788C10.3165 11.6508 8.18038 10.6138 6.52162 9.41534C6.62447 9.22222 6.65348 9.05556 6.65348 8.82275C6.65348 8.51323 6.57964 8.23545 6.42933 7.98942L6.47152 7.90741ZM18.5865 9.99471C18.5865 10.619 18.5733 11.2143 18.4045 11.7698C17.7426 11.9815 16.9673 12.1667 16.1814 12.1667C16.01 11.5794 15.4668 11.0979 14.9024 11.0873C14.4066 8.54762 12.8903 6.36508 11.461 4.90741C11.548 4.70899 11.5823 4.5291 11.5823 4.29894C11.5823 4.23545 11.5717 4.17725 11.5638 4.1164C12.5607 3.65344 13.6709 3.25397 14.9077 2.93915C17.1282 4.49735 18.5865 7.07672 18.5865 9.99471ZM10 0C4.48576 0 0 4.48677 0 10C0 15.5132 4.48576 20 10 20C15.5142 20 20 15.5132 20 10C20 4.48677 15.5142 0 10 0Z"})}),(0,d.jsx)("span",{className:"flex-1",children:null===n||void 0===n?void 0:n.rpcName}),(0,d.jsx)(D.v4q,{className:"w-5 h-5","aria-hidden":"true"})]}),(0,d.jsx)(S.u,{as:r.Fragment,enter:"transition ease-out duration-200",enterFrom:"opacity-0 translate-y-1",enterTo:"opacity-100 translate-y-0",leave:"transition ease-in duration-150",leaveFrom:"opacity-100 translate-y-0",leaveTo:"opacity-0 translate-y-1",children:(0,d.jsx)(E.J.Panel,{className:"z-40 absolute bg-default w-full mt-1 right-0 origin-top-right rounded-lg shadow-lg outline-none focus:outline-none border border-secondary",children:function(e){var t=e.close;return I.s5.map((function(e,n){return(0,d.jsx)("div",{children:"custom"!==e.id?(0,d.jsx)("button",{onClick:f(e,t),className:c()("group flex items-center justify-center w-full px-2 py-4 hover:text-brandPrimary",{"border-t border-gray":n>0}),children:e.rpcName}):(0,d.jsxs)("div",{className:"border-t border-gray group w-full flex flex-col items-center px-3 py-3",children:[(0,d.jsxs)("div",{className:"flex flex-row items-center w-full",children:[(0,d.jsx)("label",{className:"flex-1 font-bold",children:"Custom RPC"}),(0,d.jsx)("button",{className:"text-brandPrimary text-sm",onClick:m(e,t),children:"edit"})]}),(0,d.jsx)("input",{placeholder:"https://api.mainnet-beta.solana.com",className:"bg-input appearance-none pt-2 text-xs focus:outline-none outline-none inline-flex w-full",value:o,onChange:u})]})},e.id)}))}})})]})},L=function(){return(0,d.jsx)("header",{className:"px-2 sm:px-6 absolute top-0 w-full z-10",children:(0,d.jsxs)("div",{className:"flex flex-row items-center justify-between h-16",children:[(0,d.jsx)("div",{children:(0,d.jsx)(P,{})}),(0,d.jsxs)("div",{className:"flex flex-row items-center justify-end space-x-2 sm:space-x-4",children:[(0,d.jsx)(R,{}),(0,d.jsx)(O,{})]})]})})},Z=n(8130),M=function(e){var t=e.title,n=e.titleRight,s=e.overlayContent,r=e.children,a=e.className;return(0,d.jsxs)("div",{className:c()("bg-white w-full max-w-card rounded-3xl shadow-card overflow-hidden relative",a),children:[s,(0,d.jsxs)("div",{className:c()({"w-full h-full filter blur-sm":!!s}),children:[!!s&&(0,d.jsx)("div",{className:"absolute rounded-3xl z-10 bg-overlay top-0 bottom-0 left-0 right-0"}),(0,d.jsxs)("header",{className:"border-b-2 border-brandPrimary px-4 sm:px-6 flex flex-row items-center",children:[(0,d.jsx)("h1",{className:"text-md font-bold flex-1 pt-6 pb-4",children:t}),n]}),(0,d.jsx)("div",{className:"p-4 sm:p-6 break-words",children:r})]})]})},B=n(381),A=n.n(B),T=n(9958),z=function(){return(0,r.useContext)(T._)};function _(e){var t=z().manual,n=e?A().unix(e.startIdoTs.toNumber()):void 0,s=e?A().unix(e.endIdoTs.toNumber()):void 0,r=e?A().unix(e.withdrawMelonTs.toNumber()):void 0,a=e?A().unix(e.endDepositsTs.toNumber()):void 0,i=null!==a&&void 0!==a&&a.isBefore()&&null!==s&&void 0!==s&&s.isAfter()?"Deposits are closed":null!==s&&void 0!==s&&s.isBefore()?"The IDO has ended":"The IDO is starting...";return{updated:t,pool:e,startIdo:n,endIdo:s,startRedeem:r,endDeposits:a,poolStatus:i}}var V=function(e){var t=e.date,n=e.poolStatus,s=e.className,r=z().doForceRefresh;return t?(0,d.jsx)(Z.ZP,{date:t.format(),renderer:function(e){var t=e.days,r=e.hours,a=e.minutes,i=e.seconds;return r+=24*t,e.completed?(0,d.jsx)("p",{className:"text-sm mt-2 py-2 text-center",children:n}):(0,d.jsxs)("div",{className:c()(s,"flex items-center"),children:[(0,d.jsxs)("div",{className:"flex flex-col items-center",children:[(0,d.jsx)("span",{className:"bg-black text-white text-center font-bold mx-1 w-8 inline-block py-2 rounded",children:r<10?"0".concat(r):r}),(0,d.jsx)("span",{className:"text-xs mt-1 text-secondary",children:"hrs"})]}),(0,d.jsxs)("div",{className:"flex flex-col items-center",children:[(0,d.jsx)("span",{className:"bg-black text-white text-center font-bold mx-1 w-8 inline-block py-2 rounded",children:a<10?"0".concat(a):a}),(0,d.jsx)("span",{className:"text-xs mt-1 text-secondary",children:"mins"})]}),(0,d.jsxs)("div",{className:"flex flex-col items-center",children:[(0,d.jsx)("span",{className:"bg-black text-white text-center font-bold mx-1 w-8 inline-block py-2 rounded",children:i<10?"0".concat(i):i}),(0,d.jsx)("span",{className:"text-xs mt-1 text-secondary",children:"secs"})]})]})},onComplete:r}):null},U=function(e){var t=e.children,n=e.pool,s=e.title,r=_(n),a=r.startIdo,i=r.endIdo,o=r.startRedeem,l=r.endDeposits,c=r.poolStatus,u=a.isAfter(),m=l.isBefore(),f=i.isBefore()&&o.isAfter(),x=i.isBefore(),h=u;return(0,d.jsx)(M,{title:s,overlayContent:h&&(0,d.jsx)("div",{className:"absolute z-10 w-full px-8 h-full flex items-center justify-center",children:(0,d.jsxs)("div",{className:"bg-white w-full p-6 rounded-3xl flex flex-col items-center space-y-3",children:[u&&(0,d.jsx)("h3",{children:"Entry Starts"}),f&&(0,d.jsx)("h3",{children:"Redeem Starts"}),(0,d.jsx)(V,{date:u?a:o,poolStatus:c})]})}),titleRight:!x&&(0,d.jsx)("div",{className:"bg-brandSecondary rounded-3xl mt-1 px-3 py-2 text-xs font-bold",children:m?"Grace Period":"Sale Period"}),children:t})},W=n(5861),F=n(7757),q=n.n(F),H=n(6049),J=n(4431),Y=n.n(J),G=n(7162),K=n(3370),X=n(4566),$=n(1690);function Q(e){var t=(0,X.Z)((function(e){return e})),n=t.mints,s=t.actions,a=(0,r.useState)(),i=a[0],o=a[1],l=(0,r.useState)(),c=l[0],d=l[1],u=(0,r.useCallback)((0,W.Z)(q().mark((function t(){var n,r,a;return q().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.fetchVaults(e);case 2:n=t.sent,r=n.usdc,a=n.watermelon,o(r),d(a);case 7:case"end":return t.stop()}}),t)}))),[s,o,d]);(0,r.useEffect)((function(){u().catch((function(e){(0,K.h)({type:"warn",title:"Update vaults failed",message:e.message})}))}),[]),function(e,t){var n=(0,r.useRef)();(0,r.useEffect)((function(){n.current=e}),[e]),(0,r.useEffect)((function(){if(null!==t){var e=setInterval((function(){n.current&&n.current()}),t);return function(){clearInterval(e)}}}),[t])}((0,W.Z)(q().mark((function t(){return q().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u();case 2:return t.next=4,s.fetchRedeemableMint(e);case 4:case"end":return t.stop()}}),t)}))),15e3);var m=(0,r.useMemo)((function(){return(0,$.fE)(n,i)}),[n,i]),f=(0,r.useMemo)((function(){return(0,$.fE)(n,c)}),[n,c]),x=(0,r.useMemo)((function(){return m&&f?new(Y())(m).dividedBy(f):void 0}),[m,f]);return{usdcBalance:m,prtBalance:f,estimatedPrice:x,fetchVaults:u}}var ee,te=n(7333);function ne(){return(ne=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e}).apply(this,arguments)}var se=function(e){return r.createElement("svg",ne({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 292.362 292.362"},e),ee||(ee=r.createElement("path",{d:"M286.935 69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952 0-9.233 1.807-12.85 5.424C1.807 72.998 0 77.279 0 82.228c0 4.948 1.807 9.229 5.424 12.847l127.907 127.907c3.621 3.617 7.902 5.428 12.85 5.428s9.233-1.811 12.847-5.428L286.935 95.074c3.613-3.617 5.427-7.898 5.427-12.847 0-4.948-1.814-9.229-5.427-12.85z"})))},re=function(e){var t=e.className,n=e.symbol,s=e.size,r=void 0===s?"64":s,a=e.icon,i=null!==a&&void 0!==a&&a.startsWith("http")?a:"/icons/".concat(a);return(0,d.jsx)("img",{className:t,src:i,alt:n,width:r,height:r})},ae=function(e){var t=e.disabled,n=e.max,s=e.maxPercentage,a=e.onChange,i=(0,r.useMemo)((function(){return[{label:"25%",value:25},{label:"50%",value:50},{label:"75%",value:75},{label:"100%",value:s}]}),[s]),o=(0,r.useCallback)((function(e){return function(){a(new(Y())(n).multipliedBy(e/100).toString())}}),[n,a]);return(0,d.jsx)("div",{className:c()("flex flex-row items-center -mx-2"),children:i.map((function(e){return(0,d.jsx)("button",{disabled:t,className:c()("px-2 outline-none focus:outline-none text-tertiary",{}),onClick:o(e.value),children:e.label},e.value)}))})},ie=function(e,t,n){var s=new(Y())(e);if(!s.isNaN())switch(n){case"ceil":return s.decimalPlaces(t,Y().ROUND_CEIL).toString();case"floor":return s.decimalPlaces(t,Y().ROUND_FLOOR).toString();default:return}},oe=function(e){var t=e.className,n=e.title,s=e.maxLabel,a=e.maxValue,i=e.maxPercentage,o=void 0===i?100:i,l=e.maxIsLoading,m=e.maxIsRefreshing,f=e.placeholder,x=e.tokenIcon,h=e.tokenSymbol,p=e.tokenNameDetail,v=void 0===p?null:p,b=e.value,g=e.valueRound,j=e.decimals,w=e.disabled,y=void 0!==w&&w,N=e.readOnly,C=void 0!==N&&N,k=e.hasError,O=void 0!==k&&k,P=e.errorMessage,E=e.onChange,S=e.onRefreshMax,D=e.onSelectToken,I=(0,r.useCallback)((function(e){var t=e.value;E&&E(t)}),[E]),R=(0,r.useCallback)((function(e){var t;return!(null===(t=e.value.match("^\\d*\\.?\\d{0,".concat(j,"}$")))||void 0===t||!t.length)}),[E,j]),L=(0,r.useCallback)((function(){if(E&&!y&&!C&&a){var e=ie(a,j,g);e&&E(e)}}),[E,y,C,a]),Z=(0,r.useCallback)((function(e){if(E&&!y&&!C&&e){var t=ie(e,j,g);t&&E(t)}}),[E,y,C]);return(0,d.jsxs)("div",{className:"mb-3",children:[(0,d.jsxs)("div",{className:"flex flex-row items-center justify-between mb-3",children:[(0,d.jsx)("label",{className:"flex-1 text-sm font-bold",children:n}),!!a&&(0,d.jsx)(ae,{disabled:y&&l,current:b,max:a,maxPercentage:o,onChange:Z})]}),(0,d.jsxs)("div",{className:c()("flex flex-row items-center rounded-lg border",{"bg-disabled":y,"bg-input":!y,"bg-tertiary":C,"border-transparent":!O,"border-error":O,className:t}),children:[(0,d.jsx)(te.Z,{thousandSeparator:!0,className:c()("flex-1 p-4 appearance-none w-full outline-none focus:outline-none text-black bg-transparent",{"text-disabled":y&&!C}),value:b,isAllowed:R,isNumericString:!0,placeholder:f,onValueChange:I,disabled:y,readOnly:C,autoComplete:"off",inputMode:"numeric"}),(0,d.jsxs)("button",{className:c()("flex flex-row items-center justify-center space-x-1 p-2 pr-4 outline-none m-w-24 ease-out transition-colors duration-100 focus:outline-none rounded-lg",{"hover:bg-secondary":!y&&D,"cursor-default":y||!D}),onClick:D,disabled:y,children:[(0,d.jsx)(re,{symbol:h,icon:x,size:"24"}),(0,d.jsxs)("div",{className:c()("min-w-symbol flex flex-col items-center",{"text-disabled":y}),children:[(0,d.jsx)("span",{className:"px-1",children:h}),v&&(0,d.jsx)("span",{className:"text-xs text-secondary mt-1",children:v})]}),!!D&&(0,d.jsx)(se,{className:c()("w-2 ml-2 relative fill-current",{visible:D,"text-secondary":y,"text-black":!y})})]})]}),(0,d.jsxs)("div",{className:"flex flex-row py-2",children:[O&&(0,d.jsx)("span",{className:"text-xs text-error",children:P}),(0,d.jsx)("span",{className:"flex-1"}),(0,d.jsxs)("button",{className:"text-xs text-secondary outline-none focus:outline-none",onClick:L,children:[s," ",l?"":a]}),l&&(0,d.jsx)(u,{className:"mx-1",size:"sm"}),S&&(0,d.jsx)("button",{disabled:m,onClick:S,children:(0,d.jsx)(H.DuK,{className:c()("w-3 h-3 ml-1",{"animate-spin":m})})})]})]})},le=function(e){var t=e.activeIndex,n=void 0===t?0:t,s=e.onItemClick,a=e.children;return(0,d.jsx)("div",{className:"flex flex-row items-center justify-center space-x-6",children:r.Children.map(a,(function(e,t){return(0,r.cloneElement)(e,{isActive:n===t,onClick:s?function(){return s(t)}:void 0})}))})},ce=["isActive","variant","children"];function de(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function ue(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?de(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):de(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var me=function(e){var t=e.isActive,n=void 0!==t&&t,s=e.variant,r=void 0===s?h:s,a=e.children,i=(0,o.Z)(e,ce);return(0,d.jsxs)("button",ue(ue({className:c()("px-2 py-1 pb-0 outline-none focus:outline-none text-mdx","btn-".concat(r),{"text-tertiary":!n,"text-brandPrimary":n,"font-bold":n,"text-disabled":i.disabled,"cursor-not-allowed":i.disabled})},i),{},{children:[a,(0,d.jsx)("div",{className:c()("rounded-full h-1 mx-4 mt-1",{"bg-brandPrimary":n,"bg-transparent":!n})})]}))},fe=["value","displayMax","defaultIfNull","valueDecimals","displayDecimals","roundMode"];function xe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function he(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?xe(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):xe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var pe=function(e){var t=e.value,n=e.displayMax,s=e.defaultIfNull,a=void 0===s?"":s,i=e.valueDecimals,l=void 0===i?0:i,c=e.displayDecimals,u=void 0===c?2:c,m=e.roundMode,f=void 0===m?Y().ROUND_FLOOR:m,x=(0,o.Z)(e,fe),h=(0,r.useMemo)((function(){var e=new(Y())(t||0).dividedBy(new(Y())(10).pow(l)).decimalPlaces(u,f),s=new(Y())(n||"0"),r=t?e.toFixed(u):a;return n&&t&&!e.isNaN()&&e.gt(s)&&(r="".concat(n),x.prefix=">"),{result:r,prefix:x.prefix}}),[t,n]),p=h.result,v=h.prefix;return p===a?(0,d.jsxs)("div",{className:x.className,children:[a,"N/A"===a?"":x.suffix||""]}):(0,d.jsx)(te.Z,he(he({thousandSeparator:!0,value:p,displayType:"text"},x),{},{prefix:v}))},ve=n(9359),be=n(3935),ge=n(5778);function je(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function we(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?je(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):je(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ye=function(e,t){var n=t.placement,s=void 0===n?"auto":n,a=t.trigger,i=void 0===a?"hover":a,o=t.tooltipPadding,l=void 0===o?{left:16,right:16}:o,c=t.tooltipOffset,u=void 0===c?[0,8]:c,m=(0,r.useState)(null),f=m[0],x=m[1],h=(0,r.useState)(null),p=h[0],v=h[1],b=(0,r.useState)(null),g=b[0],j=b[1],w=(0,r.useState)(!1),y=w[0],N=w[1],C=(0,r.useRef)(!1),k=(0,r.useRef)(),O=(0,r.useCallback)((function(e){var t=function(){e.stopPropagation(),e.preventDefault(),N(!1)};"hover"===i?(k.current&&window.clearTimeout(k.current),e.target===p&&(C.current=!1),C.current||(k.current=window.setTimeout((function(){C.current||t()}),100))):t()}),[p,i]),P=(0,r.useCallback)((function(e){e.stopPropagation(),e.preventDefault(),N(!0),"hover"===i&&(e.target===f&&clearTimeout(k.current),e.target===p&&(C.current=!0))}),[p,f,i]),E=(0,r.useCallback)((function(e){e.stopPropagation(),N(!y)}),[y]);(0,r.useEffect)((function(){if(null!==f&&"hover"===i)return ve.tq?(f.addEventListener("touchstart",P),f.addEventListener("touchend",O)):(f.addEventListener("mouseenter",P),f.addEventListener("mouseleave",O)),function(){f.removeEventListener("touchstart",P),f.removeEventListener("touchend",O),f.removeEventListener("mouseenter",P),f.removeEventListener("mouseleave",P)}}),[i,f,O,P]),(0,r.useEffect)((function(){if(null!==p&&"hover"===i)return p.addEventListener("mouseenter",P),p.addEventListener("mouseleave",O),function(){p.removeEventListener("mouseenter",P),p.removeEventListener("mouseleave",O)}}),[i,p,O,P]),(0,r.useEffect)((function(){if(null!==f&&"click"===i)return f.addEventListener("click",E),function(){return f.removeEventListener("click",E)}}),[i,f,y,E]),(0,r.useEffect)((function(){if("click"===i){var e=function(e){var t=e.target;t instanceof Node&&(null==p||null==f||p.contains(t)||f.contains(t)||N(!1))};return document.addEventListener("mousedown",e),function(){return document.removeEventListener("mousedown",e)}}}),[i,f,p]),(0,r.useEffect)((function(){if(null!==f&&"focus"===i)return f.addEventListener("focus",P),f.addEventListener("blur",O),function(){f.removeEventListener("focus",P),f.removeEventListener("blur",O)}}),[i,f,P,O]);var S=(0,ge.D)(f,p,{placement:s,modifiers:[{name:"arrow",options:{element:g}},{name:"offset",options:{offset:u}},{name:"preventOverflow",options:{padding:l}}]}),D=S.styles,I=S.attributes,R=(0,d.jsxs)("div",we(we({className:"tooltip-container z-20 max-w-tooltip rounded p-3 text-xs leading-snug text-white whitespace-no-wrap bg-black shadow-lg",ref:v,style:D.popper},I.popper),{},{children:[e,(0,d.jsx)("div",{className:"tooltip-arrow ",ref:j,style:D.arrow,children:(0,d.jsx)("div",{className:"w-2 h-2 transform rotate-45 bg-black"})})]})),L=(0,be.createPortal)(R,document.getElementById("tooltip-portal-root"));return{targetRef:x,tooltip:null!==L&&void 0!==L?L:R,tooltipVisible:y}},Ne=function(e){var t=e.endIdo,n=e.endDeposits,s=e.poolStatus,r=e.estimatedPrice,a=e.vaultPrtBalance,i=e.vaultUsdcBalance,o=ye("In the first 24 hours, you may deposit or withdraw your USDC from the vault. During the sale period, the PRT price can fluctuate.",{placement:"bottom-start",trigger:"hover"}),l=o.targetRef,c=o.tooltip,u=o.tooltipVisible,m=ye("After 24 hours, deposits will be restricted and only withdrawals allowed. During the grace period, the PRT price can only go down.",{placement:"bottom-start",trigger:"hover"}),f=m.targetRef,x=m.tooltip,h=m.tooltipVisible;return(0,d.jsxs)("div",{className:"flex flex-col space-y-2",children:[(0,d.jsxs)("div",{className:"bg-secondary rounded-xl p-6 grid grid-cols-2 gap-2",children:[(0,d.jsxs)("div",{children:[(0,d.jsxs)("div",{className:"text-sm text-secondary flex flex-row items-center justify-center",children:[(0,d.jsx)("span",{className:"mr-1",children:"Sale Period Ends"}),(0,d.jsx)("span",{ref:l,children:(0,d.jsx)(H.zqj,{className:"h-5 w-5"})}),u&&c]}),(0,d.jsx)(V,{poolStatus:s,date:n,className:"justify-center pt-2"})]}),(0,d.jsxs)("div",{children:[(0,d.jsxs)("div",{className:"text-sm text-secondary flex flex-row items-center justify-center",children:[(0,d.jsx)("span",{className:"mr-1",children:"Grace Period Ends"}),(0,d.jsx)("span",{ref:f,children:(0,d.jsx)(H.zqj,{className:"h-5 w-5"})}),h&&x]}),(0,d.jsx)(V,{poolStatus:s,date:t,className:"justify-center pt-2"})]})]}),(0,d.jsxs)("div",{className:"bg-secondary rounded-xl p-6 text-center",children:[(0,d.jsx)("p",{className:"text-sm text-secondary",children:"USDC Contributed"}),(0,d.jsxs)("div",{className:"flex items-center justify-center pt-2",children:[(0,d.jsx)("img",{alt:"",width:"20",height:"20",src:"/icons/usdc.svg",className:"mr-2"}),(0,d.jsx)(pe,{className:"font-bold text-mdx",value:i,defaultIfNull:"N/A"})]})]}),(0,d.jsxs)("div",{className:"bg-secondary rounded-xl p-6 text-center",children:[(0,d.jsx)("p",{className:"text-sm text-secondary",children:"Estimated Token Price"}),(0,d.jsxs)("div",{className:"flex items-center justify-center pt-2",children:[(0,d.jsx)("img",{alt:"",width:"20",height:"20",src:"/icons/usdc.svg",className:"mr-2"}),(0,d.jsx)(pe,{className:"font-bold text-mdx",value:r,defaultIfNull:"N/A",displayDecimals:6})]})]}),(0,d.jsxs)("div",{className:"bg-secondary rounded-xl p-6 text-center",children:[(0,d.jsx)("p",{className:"text-sm text-secondary",children:"PRT For Sale"}),(0,d.jsxs)("div",{className:"flex items-center justify-center pt-2",children:[(0,d.jsx)("img",{className:"h-5 mr-2 w-auto",src:"/icons/prt.svg",alt:"mango"}),(0,d.jsx)(pe,{className:"font-bold text-mdx",value:a,defaultIfNull:"N/A"})]})]})]})},Ce=function(e){var t,n,s=e.pool,a=(0,X.Z)((function(e){return e.actions})),i=(0,X.Z)((function(e){return e.connected})),o=(0,G.Z)(s),l=_(s),c=l.startIdo,u=l.endIdo,m=l.endDeposits,f=l.poolStatus,x=Q(s),h=(0,r.useState)(!0),p=h[0],v=h[1],b=(0,r.useState)(!1),g=b[0],j=b[1],y=(0,r.useState)(!1),N=y[0],C=y[1],k=(0,r.useState)(!0),O=k[0],P=k[1],E=(0,r.useState)("0"),S=E[0],D=E[1],I=(null===(t=o.usdc)||void 0===t?void 0:t.balance)||0,R=(null===(n=o.redeemable)||void 0===n?void 0:n.balance)||0,L=O?I:R;(0,r.useEffect)((function(){D("")}),[L]);var Z=(0,r.useCallback)((function(){j(!0)}),[]),M=(0,r.useCallback)((function(e){P(0===e)}),[P]),B=(0,r.useCallback)((function(e){D(e),O&&null!==m&&void 0!==m&&m.isBefore()&&+e>R&&(0,K.h)({title:"Deposits ended",message:"Contribution cannot increase"})}),[O,m,R]),A=(0,r.useCallback)((0,W.Z)(q().mark((function e(){return q().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("handleRefresh start"),C(!0),e.prev=2,e.next=5,a.fetchWalletTokenAccounts();case 5:return e.prev=5,setTimeout((function(){return C(!1)}),1e3),e.finish(5);case 8:case"end":return e.stop()}}),e,null,[[2,,5,8]])}))),[a]),T=(0,r.useCallback)((function(){var e={hasError:!1,message:""};return g?e:new(Y())(S).gt(L)?(e.hasError=!0,e.message="Insufficient USDC balance",e):e}),[g,O,S,L]);(0,r.useEffect)((function(){p&&(O&&o.usdc&&v(!1),!O&&o.redeemable&&v(!1),setTimeout((function(){return v(!1)}),2e3))}),[o]),(0,r.useEffect)((function(){g&&function(){var e=(0,W.Z)(q().mark((function e(){return q().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(+S<=0)){e.next=4;break}return(0,K.h)({type:"warn",title:O?"Required a deposit amount":"Required a withdraw amount",message:"Please enter a valid amount"}),j(!1),e.abrupt("return");case 4:if(e.prev=4,!O){e.next=10;break}return e.next=8,a.submitDepositContribution(s,+S);case 8:e.next=12;break;case 10:return e.next=12,a.submitWithdrawContribution(s,+S);case 12:j(!1),x.fetchVaults(),e.next=20;break;case 16:e.prev=16,e.t0=e.catch(4),(0,K.h)({type:"error",title:O?"Deposit error":"Withdraw error",message:e.t0.message}),j(!1);case 20:case"end":return e.stop()}}),e,null,[[4,16]])})));return function(){return e.apply(this,arguments)}}()()}),[g,O]);var z=c.isBefore()&&u.isAfter()&&m.isAfter(),V=c.isBefore()&&u.isAfter();(0,r.useEffect)((function(){!z&&c.isBefore()&&M(1)}),[z,c]);var U=T(),F=!i||p||g||U.hasError||(O?!z:!V);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(le,{activeIndex:O?0:1,onItemClick:M,children:[(0,d.jsx)(me,{disabled:!z,children:"Deposit"}),(0,d.jsx)(me,{children:"Withdraw"})]}),(0,d.jsx)("div",{className:"mt-4"}),(0,d.jsx)(oe,{title:O?"I want to deposit":"Withdraw collateral",placeholder:"0",maxValue:L.toString(),maxIsLoading:i&&p,maxIsRefreshing:N,maxLabel:O?"balance:":"max withdraw:",errorMessage:U.message,hasError:U.hasError,tokenSymbol:"USDC",tokenIcon:"usdc.svg",value:S,valueRound:"ceil",decimals:6,onRefreshMax:A,onChange:B,disabled:!i}),(0,d.jsx)(w,{onClick:Z,className:"w-full my-4",disabled:F,isLoading:g,children:g?"Waiting approval":O?"Deposit":"Withdraw"}),(null===m||void 0===m?void 0:m.isBefore())&&(null===u||void 0===u?void 0:u.isAfter())&&(0,d.jsxs)("div",{className:"flex items-center space-x-2 mb-4",children:[(0,d.jsx)(H.AV5,{className:"h-5 w-5 text-secondary"}),(0,d.jsxs)("div",{className:"text-xxs sm:text-xs",children:[(0,d.jsx)("p",{className:"mb-1",children:"You can only withdraw your contribution during the grace period."}),(0,d.jsx)("p",{children:"Any withdrawals cannot be reversed."})]})]}),(0,d.jsx)(Ne,{endDeposits:m,endIdo:u,poolStatus:f,vaultPrtBalance:x.prtBalance,vaultUsdcBalance:x.usdcBalance,estimatedPrice:x.estimatedPrice})]})},ke=function(e){var t,n=e.pool,s=(0,X.Z)((function(e){return e.actions})),a=(0,X.Z)((function(e){return e.connected})),i=(0,X.Z)((function(e){return e.mints})),o=(0,G.Z)(n),l=Q(n),c=l.prtBalance,u=l.usdcBalance,m=l.fetchVaults,f=_(n),x=f.startRedeem,h=f.poolStatus,p=(0,r.useState)(!1),v=p[0],b=p[1],g=(0,r.useState)(!0),j=g[0],y=g[1],N=(null===(t=o.redeemable)||void 0===t?void 0:t.balance)||0,C=(0,r.useMemo)((function(){var e=(0,$.cM)(i,n.redeemableMint);return c&&e?N*c/e:0}),[c,N,i,n.redeemableMint]),k=(0,r.useCallback)((function(){b(!0)}),[]);(0,r.useEffect)((function(){n.redeemableMint&&s.fetchMints()}),[]),(0,r.useEffect)((function(){y(!0),o.redeemable&&y(!1)}),[o]),(0,r.useEffect)((function(){v&&function(){var e=(0,W.Z)(q().mark((function e(){return q().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.submitRedeem(n);case 3:b(!1),m(),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),(0,K.h)({type:"error",title:"Redeem error",message:e.t0.message}),b(!1);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}()()}),[v]);var O=!a||j||C<=0||x.isAfter();return(0,d.jsxs)("div",{className:"",children:[x.isAfter()&&(0,d.jsxs)("div",{className:"bg-secondary rounded-xl p-6 text-center mb-2",children:[(0,d.jsx)("p",{className:"text-sm text-secondary",children:"Redeem starts"}),(0,d.jsx)(V,{poolStatus:h,date:x,className:"justify-center pt-2"})]}),(0,d.jsxs)("div",{className:"bg-secondary rounded-xl p-6 text-center",children:[(0,d.jsx)("p",{className:"text-sm text-secondary",children:"Total raised"}),(0,d.jsxs)("div",{className:"flex items-center justify-center pt-2",children:[(0,d.jsx)("img",{alt:"",width:"20",height:"20",src:"/icons/usdc.svg",className:"mr-2"}),(0,d.jsx)(pe,{className:"font-bold text-mdx",value:I.CV||u,defaultIfNull:"N/A"})]})]}),(0,d.jsxs)("div",{className:"bg-secondary rounded-xl p-6 text-center mt-2",children:[(0,d.jsx)("p",{className:"text-sm text-secondary",children:"Your contribution"}),(0,d.jsxs)("div",{className:"flex items-center justify-center pt-2",children:[(0,d.jsx)("img",{alt:"",width:"20",height:"20",src:"/icons/usdc.svg",className:"mr-2"}),(0,d.jsx)(pe,{className:"font-bold text-mdx",value:N,defaultIfNull:"N/A"})]})]}),(0,d.jsxs)("div",{className:"bg-secondary rounded-xl p-6 text-center mt-2",children:[(0,d.jsx)("p",{className:"text-sm text-secondary",children:"Redeemable amount"}),(0,d.jsxs)("div",{className:"flex items-center justify-center pt-2",children:[(0,d.jsx)("img",{alt:"",width:"20",height:"20",src:"/icons/prt.svg",className:"mr-2"}),(0,d.jsx)(pe,{className:"font-bold text-mdx",value:C,displayDecimals:6,defaultIfNull:"N/A"})]})]}),(0,d.jsx)(w,{onClick:k,className:"w-full mt-6",disabled:O,isLoading:v,children:v?"Waiting approval":"Redeem PRT"})]})},Oe=function(e){var t=e.pool,n=e.round,s=_(t),r=s.startIdo,a=s.endIdo,i=s.startRedeem,o=s.endDeposits;return(0,d.jsxs)(U,{title:"IDO Round ".concat(n),pool:t,children:[a.isAfter()&&(0,d.jsx)(Ce,{pool:t}),a.isBefore()&&(0,d.jsx)(ke,{pool:t}),(0,d.jsxs)("div",{className:"hidden bg-secondary rounded-xl p-2 mt-4 space-y-3 font-mono text-xs",children:[(0,d.jsxs)("p",{children:["Start Ido: ",null===r||void 0===r?void 0:r.fromNow()," (",null===r||void 0===r?void 0:r.format(),")"]}),(0,d.jsxs)("p",{children:["End Deposits: ",null===o||void 0===o?void 0:o.fromNow()," (",null===o||void 0===o?void 0:o.format(),")"]}),(0,d.jsxs)("p",{children:["End Withdraws/Ido: ",null===a||void 0===a?void 0:a.fromNow()," (",null===a||void 0===a?void 0:a.format(),")"]}),(0,d.jsxs)("p",{children:["Start Redeem: ",null===i||void 0===i?void 0:i.fromNow()," (",null===i||void 0===i?void 0:i.format(),")"]})]})]})},Pe=n(5208),Ee=function(){var e=(0,X.Z)((function(e){return e.pools})),t=(0,s.Os)().endpoint,n=(0,r.useContext)(Pe.d),i=n.loadIDO,o=n.loadingIDO,l=n.loadingError,c=(0,r.useCallback)((function(){i(t)}),[t.rpcURL,i]);return(0,d.jsxs)("main",{className:"w-full flex flex-col items-center md:items-start justify-center my-4 space-y-4 sm:my-6 md:space-x-6 md:flex-row md:space-y-0",children:[e.map((function(e,t){return(0,d.jsx)(Oe,{pool:e,round:"".concat(t+1)},e.publicKey.toBase58())})),!!l&&(0,d.jsxs)(M,{title:"Error",className:"md:col-span-2",children:[(0,d.jsx)("p",{className:"leading-snug mb-6",children:l}),(0,d.jsx)(w,{size:"sm",onClick:c,children:"Retry to load"})]}),o&&[1,2].map((function(e){return(0,d.jsx)(M,{title:"Loading...",children:(0,d.jsx)(a.ZP,{count:3,height:90,className:"mt-2"})},e)}))]})},Se=function(){z().doForceRefresh;return(0,d.jsxs)("div",{className:"min-h-screen flex flex-col bg-scaffold",children:[(0,d.jsx)(L,{}),(0,d.jsxs)("div",{className:"w-full flex justify-center items-center overflow-hidden",children:[(0,d.jsx)("img",{className:"max-w-none hidden sm:block",width:1440,height:500,src:"/images/bg/d1.png",srcSet:"/images/bg/d1.png 1x, /images/bg/d2.png 2x"}),(0,d.jsx)("img",{className:"max-w-none block sm:hidden",width:1e3,height:1100,src:"/images/bg/m1.png",srcSet:"/images/bg/m1.png 1x, /images/bg/m2.png 2x"})]}),(0,d.jsxs)("div",{className:"-mt-32",children:[!1,(0,d.jsx)(Ee,{})]}),(0,d.jsx)(y,{})]})}},5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(5809)}])}},function(e){e.O(0,[194,774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);