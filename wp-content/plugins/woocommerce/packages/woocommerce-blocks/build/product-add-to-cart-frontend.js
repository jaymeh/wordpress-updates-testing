(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[58],{139:function(e,t,r){"use strict";var s=r(0);r(200),t.a=()=>Object(s.createElement)("span",{className:"wc-block-components-spinner","aria-hidden":"true"})},18:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return c}));const s=e=>!(e=>null===e)(e)&&e instanceof Object&&e.constructor===Object;function c(e,t){return s(e)&&t in e}},200:function(e,t){},203:function(e,t,r){"use strict";r.d(t,"b",(function(){return i})),r.d(t,"a",(function(){return u}));var s=r(0),c=r(3),n=r(11),o=r.n(n);const a=Object(s.createContext)({getValidationError:()=>"",setValidationErrors:e=>{},clearValidationError:e=>{},clearAllValidationErrors:()=>{},hideValidationError:()=>{},showValidationError:()=>{},showAllValidationErrors:()=>{},hasValidationErrors:!1,getValidationErrorId:e=>e}),i=()=>Object(s.useContext)(a),u=e=>{let{children:t}=e;const[r,n]=Object(s.useState)({}),i=Object(s.useCallback)(e=>r[e],[r]),u=Object(s.useCallback)(e=>{const t=r[e];return!t||t.hidden?"":"validate-error-"+e},[r]),l=Object(s.useCallback)(e=>{n(t=>{if(!t[e])return t;const{[e]:r,...s}=t;return s})},[]),d=Object(s.useCallback)(()=>{n({})},[]),b=Object(s.useCallback)(e=>{e&&n(t=>(e=Object(c.pickBy)(e,(e,r)=>!("string"!=typeof e.message||t.hasOwnProperty(r)&&o()(t[r],e))),0===Object.values(e).length?t:{...t,...e}))},[]),E=Object(s.useCallback)((e,t)=>{n(r=>{if(!r.hasOwnProperty(e))return r;const s={...r[e],...t};return o()(r[e],s)?r:{...r,[e]:s}})},[]),p={getValidationError:i,setValidationErrors:b,clearValidationError:l,clearAllValidationErrors:d,hideValidationError:Object(s.useCallback)(e=>{E(e,{hidden:!0})},[E]),showValidationError:Object(s.useCallback)(e=>{E(e,{hidden:!1})},[E]),showAllValidationErrors:Object(s.useCallback)(()=>{n(e=>{const t={};return Object.keys(e).forEach(r=>{e[r].hidden&&(t[r]={...e[r],hidden:!1})}),0===Object.values(t).length?e:{...e,...t}})},[]),hasValidationErrors:Object.keys(r).length>0,getValidationErrorId:u};return Object(s.createElement)(a.Provider,{value:p},t)}},208:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var s=r(98);const c=(e,t)=>function(r){let c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;const n=s.a.addEventCallback(e,r,c);return t(n),()=>{t(s.a.removeEventCallback(e,n.id))}}},210:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return o}));const s=(e,t)=>e[t]?Array.from(e[t].values()).sort((e,t)=>e.priority-t.priority):[];var c=r(30);const n=async(e,t,r)=>{const c=s(e,t),n=[];for(const e of c)try{const t=await Promise.resolve(e.callback(r));"object"==typeof t&&n.push(t)}catch(e){console.error(e)}return!n.length||n},o=async(e,t,r)=>{const n=[],o=s(e,t);for(const e of o)try{const t=await Promise.resolve(e.callback(r));if("object"!=typeof t||null===t)continue;if(!t.hasOwnProperty("type"))throw new Error("Returned objects from event emitter observers must return an object with a type property");if(Object(c.a)(t)||Object(c.b)(t))return n.push(t),n;n.push(t)}catch(e){return console.error(e),n.push({type:"error"}),n}return n}},268:function(e,t){},270:function(e,t,r){"use strict";var s=r(12),c=r.n(s),n=r(0),o=r(42),a=r(4),i=r.n(a),u=r(139);r(271),t.a=e=>{let{className:t,showSpinner:r=!1,children:s,variant:a="contained",...l}=e;const d=i()("wc-block-components-button",t,a,{"wc-block-components-button--loading":r});return Object(n.createElement)(o.a,c()({className:d},l),r&&Object(n.createElement)(u.a,null),Object(n.createElement)("span",{className:"wc-block-components-button__text"},s))}},271:function(e,t){},281:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var s=r(0),c=r(203);r(268);const n=e=>{let{errorMessage:t="",propertyName:r="",elementId:n=""}=e;const{getValidationError:o,getValidationErrorId:a}=Object(c.b)();if(!t||"string"!=typeof t){const e=o(r)||{};if(!e.message||e.hidden)return null;t=e.message}return Object(s.createElement)("div",{className:"wc-block-components-validation-error",role:"alert"},Object(s.createElement)("p",{id:a(n)},t))}},30:function(e,t,r){"use strict";r.d(t,"c",(function(){return n})),r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return u})),r.d(t,"d",(function(){return d}));var s=r(18);let c,n;!function(e){e.SUCCESS="success",e.FAIL="failure",e.ERROR="error"}(c||(c={})),function(e){e.PAYMENTS="wc/payment-area",e.EXPRESS_PAYMENTS="wc/express-payment-area"}(n||(n={}));const o=(e,t)=>Object(s.a)(e)&&"type"in e&&e.type===t,a=e=>o(e,c.SUCCESS),i=e=>o(e,c.ERROR),u=e=>o(e,c.FAIL),l=e=>!Object(s.a)(e)||void 0===e.retry||!0===e.retry,d=()=>({responseTypes:c,noticeContexts:n,shouldRetry:l,isSuccessResponse:a,isErrorResponse:i,isFailResponse:u})},31:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var s=r(0),c=r(11),n=r.n(c);function o(e){const t=Object(s.useRef)(e);return n()(e,t.current)||(t.current=e),t.current}},359:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var s=r(0),c=r(7),n=r(6),o=r(17),a=r(32);const i=(e,t)=>{const r=e.find(e=>{let{id:r}=e;return r===t});return r?r.quantity:0},u=e=>{const{addItemToCart:t}=Object(c.useDispatch)(n.CART_STORE_KEY),{cartItems:r,cartIsLoading:u}=Object(a.a)(),{createErrorNotice:l,removeNotice:d}=Object(c.useDispatch)("core/notices"),[b,E]=Object(s.useState)(!1),p=Object(s.useRef)(i(r,e));return Object(s.useEffect)(()=>{const t=i(r,e);t!==p.current&&(p.current=t)},[r,e]),{cartQuantity:Number.isFinite(p.current)?p.current:0,addingToCart:b,cartIsLoading:u,addToCart:function(){let r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return E(!0),t(e,r).then(()=>{d("add-to-cart")}).catch(e=>{l(Object(o.decodeEntities)(e.message),{id:"add-to-cart",context:"wc/all-products",isDismissible:!0})}).finally(()=>{E(!1)})}}}},365:function(e,t){},367:function(e,t){},433:function(e,t,r){"use strict";r.r(t);var s=r(123),c=r(0),n=r(4),o=r.n(n),a=r(1),i=r(31);const u=e=>e.is_purchasable||!1;var l=r(7);const d={PRISTINE:"pristine",IDLE:"idle",DISABLED:"disabled",PROCESSING:"processing",BEFORE_PROCESSING:"before_processing",AFTER_PROCESSING:"after_processing"},b={status:d.PRISTINE,hasError:!1,quantity:0,processingResponse:null,requestParams:{}},E={SET_PRISTINE:"set_pristine",SET_IDLE:"set_idle",SET_DISABLED:"set_disabled",SET_PROCESSING:"set_processing",SET_BEFORE_PROCESSING:"set_before_processing",SET_AFTER_PROCESSING:"set_after_processing",SET_PROCESSING_RESPONSE:"set_processing_response",SET_HAS_ERROR:"set_has_error",SET_NO_ERROR:"set_no_error",SET_QUANTITY:"set_quantity",SET_REQUEST_PARAMS:"set_request_params"},{SET_PRISTINE:p,SET_IDLE:m,SET_DISABLED:O,SET_PROCESSING:h,SET_BEFORE_PROCESSING:_,SET_AFTER_PROCESSING:f,SET_PROCESSING_RESPONSE:j,SET_HAS_ERROR:g,SET_NO_ERROR:S,SET_QUANTITY:v,SET_REQUEST_PARAMS:y}=E,R=()=>({type:m}),C=function(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];const t=e?g:S;return{type:t}},{SET_PRISTINE:P,SET_IDLE:T,SET_DISABLED:A,SET_PROCESSING:k,SET_BEFORE_PROCESSING:w,SET_AFTER_PROCESSING:N,SET_PROCESSING_RESPONSE:I,SET_HAS_ERROR:D,SET_NO_ERROR:F,SET_QUANTITY:V,SET_REQUEST_PARAMS:B}=E,{PRISTINE:q,IDLE:x,DISABLED:L,PROCESSING:G,BEFORE_PROCESSING:M,AFTER_PROCESSING:Q}=d,W=function(){let e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,{quantity:r,type:s,data:c}=arguments.length>1?arguments[1]:void 0;switch(s){case P:e=b;break;case T:e=t.status!==x?{...t,status:x}:t;break;case A:e=t.status!==L?{...t,status:L}:t;break;case V:e=r!==t.quantity?{...t,quantity:r}:t;break;case B:e={...t,requestParams:{...t.requestParams,...c}};break;case I:e={...t,processingResponse:c};break;case k:e=t.status!==G?{...t,status:G,hasError:!1}:t,e=!1===e.hasError?e:{...e,hasError:!1};break;case w:e=t.status!==M?{...t,status:M,hasError:!1}:t;break;case N:e=t.status!==Q?{...t,status:Q}:t;break;case D:e=t.hasError?t:{...t,hasError:!0},e=t.status===G||t.status===M?{...e,status:x}:e;break;case F:e=t.hasError?{...t,hasError:!1}:t}return e!==t&&s!==P&&e.status===q&&(e.status=x),e};var H=r(98),U=r(208);const K=e=>({onAddToCartAfterProcessingWithSuccess:Object(U.a)("add_to_cart_after_processing_with_success",e),onAddToCartProcessingWithError:Object(U.a)("add_to_cart_after_processing_with_error",e),onAddToCartBeforeProcessing:Object(U.a)("add_to_cart_before_processing",e)});var Y=r(210),J=r(203),X=r(30),z=r(83);const Z=Object(c.createContext)({product:{},productType:"simple",productIsPurchasable:!0,productHasOptions:!1,supportsFormElements:!0,showFormElements:!1,quantity:0,minQuantity:1,maxQuantity:99,requestParams:{},isIdle:!1,isDisabled:!1,isProcessing:!1,isBeforeProcessing:!1,isAfterProcessing:!1,hasError:!1,eventRegistration:{onAddToCartAfterProcessingWithSuccess:e=>{},onAddToCartAfterProcessingWithError:e=>{},onAddToCartBeforeProcessing:e=>{}},dispatchActions:{resetForm:()=>{},submitForm:()=>{},setQuantity:e=>{},setHasError:e=>{},setAfterProcessing:e=>{},setRequestParams:e=>{}}}),$=()=>Object(c.useContext)(Z),ee=e=>{var t,r,s,n;let{children:o,product:E,showFormElements:m}=e;const[g,S]=Object(c.useReducer)(W,b),[P,T]=Object(c.useReducer)(H.b,{}),A=Object(i.a)(P),{createErrorNotice:k}=Object(l.useDispatch)("core/notices"),{setValidationErrors:w}=Object(J.b)(),{isSuccessResponse:N,isErrorResponse:I,isFailResponse:D}=Object(X.d)(),F=Object(c.useMemo)(()=>({onAddToCartAfterProcessingWithSuccess:K(T).onAddToCartAfterProcessingWithSuccess,onAddToCartAfterProcessingWithError:K(T).onAddToCartAfterProcessingWithError,onAddToCartBeforeProcessing:K(T).onAddToCartBeforeProcessing}),[T]),V=Object(c.useMemo)(()=>({resetForm:()=>{S({type:p})},submitForm:()=>{S({type:_})},setQuantity:e=>{S((e=>({type:v,quantity:e}))(e))},setHasError:e=>{S(C(e))},setRequestParams:e=>{S((e=>({type:y,data:e}))(e))},setAfterProcessing:e=>{S({type:j,data:e}),S({type:f})}}),[]);Object(c.useEffect)(()=>{const e=g.status,t=!E.id||!u(E);e!==d.DISABLED||t?e!==d.DISABLED&&t&&S({type:O}):S(R())},[g.status,E,S]),Object(c.useEffect)(()=>{g.status===d.BEFORE_PROCESSING&&(Object(z.b)("error","wc/add-to-cart"),Object(Y.a)(A,"add_to_cart_before_processing",{}).then(e=>{!0!==e?(Array.isArray(e)&&e.forEach(e=>{let{errorMessage:t,validationErrors:r}=e;t&&k(t,{context:"wc/add-to-cart"}),r&&w(r)}),S(R())):S({type:h})}))},[g.status,w,k,S,A,null==E?void 0:E.id]),Object(c.useEffect)(()=>{if(g.status===d.AFTER_PROCESSING){const e={processingResponse:g.processingResponse},t=e=>{let t=!1;return e.forEach(e=>{const{message:r,messageContext:s}=e;(I(e)||D(e))&&r&&(t=!0,k(r,s?{context:s}:void 0))}),t};if(g.hasError)return void Object(Y.b)(A,"add_to_cart_after_processing_with_error",e).then(r=>{if(!t(r)){var s;const t=(null===(s=e.processingResponse)||void 0===s?void 0:s.message)||Object(a.__)("Something went wrong. Please contact us for assistance.","woocommerce");k(t,{id:"add-to-cart",context:"woocommerce/single-product/"+((null==E?void 0:E.id)||0)})}S(R())});Object(Y.b)(A,"add_to_cart_after_processing_with_success",e).then(e=>{t(e)?S(C(!0)):S(R())})}},[g.status,g.hasError,g.processingResponse,V,k,I,D,N,A,null==E?void 0:E.id]);const B=(e=>["simple","variable"].includes(e.type||"simple"))(E),q={product:E,productType:E.type||"simple",productIsPurchasable:u(E),productHasOptions:E.has_options||!1,supportsFormElements:B,showFormElements:m&&B,quantity:g.quantity||(null==E||null===(t=E.add_to_cart)||void 0===t?void 0:t.minimum)||1,minQuantity:(null==E||null===(r=E.add_to_cart)||void 0===r?void 0:r.minimum)||1,maxQuantity:(null==E||null===(s=E.add_to_cart)||void 0===s?void 0:s.maximum)||99,multipleOf:(null==E||null===(n=E.add_to_cart)||void 0===n?void 0:n.multiple_of)||1,requestParams:g.requestParams,isIdle:g.status===d.IDLE,isDisabled:g.status===d.DISABLED,isProcessing:g.status===d.PROCESSING,isBeforeProcessing:g.status===d.BEFORE_PROCESSING,isAfterProcessing:g.status===d.AFTER_PROCESSING,hasError:g.hasError,eventRegistration:F,dispatchActions:V};return Object(c.createElement)(Z.Provider,{value:q},o)};var te=r(28),re=r.n(te),se=r(17),ce=r(71),ne=r(32),oe=()=>{const{dispatchActions:e,product:t,quantity:r,eventRegistration:s,hasError:n,isProcessing:o,requestParams:i}=$(),{hasValidationErrors:u,showAllValidationErrors:d}=Object(J.b)(),{createErrorNotice:b,removeNotice:E}=Object(l.useDispatch)("core/notices"),{receiveCart:p}=Object(ne.a)(),[m,O]=Object(c.useState)(!1),h=!n&&o,_=Object(c.useCallback)(()=>!u||(d(),{type:"error"}),[u,d]);Object(c.useEffect)(()=>{const e=s.onAddToCartBeforeProcessing(_,0);return()=>{e()}},[s,_]);const f=Object(c.useCallback)(()=>{O(!0),E("add-to-cart","woocommerce/single-product/"+((null==t?void 0:t.id)||0));const s={id:t.id||0,quantity:r,...i};re()({path:"/wc/store/v1/cart/add-item",method:"POST",data:s,cache:"no-store",parse:!1}).then(r=>{re.a.setNonce(r.headers),r.json().then((function(s){r.ok?p(s):(s.body&&s.body.message?b(Object(se.decodeEntities)(s.body.message),{id:"add-to-cart",context:"woocommerce/single-product/"+((null==t?void 0:t.id)||0)}):b(Object(a.__)("Something went wrong. Please contact us for assistance.","woocommerce"),{id:"add-to-cart",context:"woocommerce/single-product/"+((null==t?void 0:t.id)||0)}),e.setHasError()),Object(ce.c)({preserveCartData:!0}),e.setAfterProcessing(s),O(!1)}))}).catch(t=>{t.json().then((function(t){var r;null!==(r=t.data)&&void 0!==r&&r.cart&&p(t.data.cart),e.setHasError(),e.setAfterProcessing(t),O(!1)}))})},[t,b,E,p,e,r,i]);return Object(c.useEffect)(()=>{h&&!m&&f()},[h,f,m]),null};const ae=e=>{let{children:t,product:r,showFormElements:s}=e;return Object(c.createElement)(J.a,null,Object(c.createElement)(ee,{product:r,showFormElements:s},t,Object(c.createElement)(oe,null)))};var ie=r(47),ue=r(3),le=(r(365),r(270)),de=r(108),be=r(366),Ee=r(59),pe=r(359);const me=e=>{let{className:t,href:r,text:s,onClick:n}=e;return Object(c.createElement)(le.a,{className:t,href:r,onClick:n,rel:"nofollow"},s)},Oe=e=>{let{className:t,quantityInCart:r,isProcessing:s,isDisabled:n,isDone:o,onClick:i}=e;return Object(c.createElement)(le.a,{className:t,disabled:n,showSpinner:s,onClick:i},o&&r>0?Object(a.sprintf)(
/* translators: %s number of products in cart. */
Object(a._n)("%d in cart","%d in cart",r,"woocommerce"),r):Object(a.__)("Add to cart","woocommerce"),!!o&&Object(c.createElement)(de.a,{icon:be.a}))};var he=()=>{const{showFormElements:e,productIsPurchasable:t,productHasOptions:r,product:s,productType:n,isDisabled:o,isProcessing:i,eventRegistration:u,hasError:l,dispatchActions:d}=$(),{parentName:b}=Object(ie.useInnerBlockLayoutContext)(),{dispatchStoreEvent:E}=Object(Ee.a)(),{cartQuantity:p}=Object(pe.a)(s.id||0),[m,O]=Object(c.useState)(!1),h=s.add_to_cart||{url:"",text:""};return Object(c.useEffect)(()=>{const e=u.onAddToCartAfterProcessingWithSuccess(()=>(l||O(!0),!0),0);return()=>{e()}},[u,l]),(e||!r&&"simple"===n)&&t?Object(c.createElement)(Oe,{className:"wc-block-components-product-add-to-cart-button",quantityInCart:p,isDisabled:o,isProcessing:i,isDone:m,onClick:()=>{d.submitForm("woocommerce/single-product/"+((null==s?void 0:s.id)||0)),E("cart-add-item",{product:s,listName:b})}}):Object(c.createElement)(me,{className:"wc-block-components-product-add-to-cart-button",href:h.url,text:h.text||Object(a.__)("View Product","woocommerce"),onClick:()=>{E("product-view-link",{product:s,listName:b})}})},_e=r(51),fe=e=>{let{disabled:t,min:r,max:s,step:n=1,value:o,onChange:a}=e;const i=void 0!==s,u=Object(_e.a)(e=>{let t=e;i&&(t=Math.min(t,Math.floor(s/n)*n)),t=Math.max(t,Math.ceil(r/n)*n),t=Math.floor(t/n)*n,t!==e&&a(t)},300);return Object(c.createElement)("input",{className:"wc-block-components-product-add-to-cart-quantity",type:"number",value:o,min:r,max:s,step:n,hidden:1===s,disabled:t,onChange:e=>{a(e.target.value),u(e.target.value)}})},je=e=>{let{reason:t=Object(a.__)("Sorry, this product cannot be purchased.","woocommerce")}=e;return Object(c.createElement)("div",{className:"wc-block-components-product-add-to-cart-unavailable"},t)},ge=()=>{const{product:e,quantity:t,minQuantity:r,maxQuantity:s,multipleOf:n,dispatchActions:o,isDisabled:i}=$();return e.id&&!e.is_purchasable?Object(c.createElement)(je,null):e.id&&!e.is_in_stock?Object(c.createElement)(je,{reason:Object(a.__)("This product is currently out of stock and cannot be purchased.","woocommerce")}):Object(c.createElement)(c.Fragment,null,Object(c.createElement)(fe,{value:t,min:r,max:s,step:n,disabled:i,onChange:o.setQuantity}),Object(c.createElement)(he,null))},Se=(r(367),r(434)),ve=r(5),ye=r(281);const Re={value:"",label:Object(a.__)("Select an option","woocommerce")};var Ce=e=>{let{attributeName:t,options:r=[],value:s="",onChange:n=(()=>{}),errorMessage:i=Object(a.__)("Please select a value.","woocommerce")}=e;const{getValidationError:u,setValidationErrors:l,clearValidationError:d}=Object(J.b)(),b=t,E=u(b)||{};return Object(ve.useEffect)(()=>{s?d(b):l({[b]:{message:i,hidden:!0}})},[s,b,i,d,l]),Object(ve.useEffect)(()=>()=>{d(b)},[b,d]),Object(c.createElement)("div",{className:"wc-block-components-product-add-to-cart-attribute-picker__container"},Object(c.createElement)(Se.a,{label:Object(se.decodeEntities)(t),value:s||"",options:[Re,...r],onChange:n,required:!0,className:o()("wc-block-components-product-add-to-cart-attribute-picker__select",{"has-error":E.message&&!E.hidden})}),Object(c.createElement)(ye.a,{propertyName:b,elementId:b}))},Pe=r(18);const Te=(e,t,r)=>{const s=Object.values(t).map(e=>{let{id:t}=e;return t});if(Object.values(r).every(e=>""===e))return s;const c=Object.keys(e);return s.filter(e=>c.every(s=>{const c=r[s]||"",n=t["id:"+e].attributes[s];return""===c||null===n||n===c}))};var Ae=e=>{let{attributes:t,variationAttributes:r,setRequestParams:s}=e;const n=Object(i.a)(t),o=Object(i.a)(r),[a,u]=Object(c.useState)(0),[l,d]=Object(c.useState)({}),[b,E]=Object(c.useState)(!1),p=Object(c.useMemo)(()=>((e,t,r)=>{const s={},c=Object.keys(e),n=Object.values(r).filter(Boolean).length>0;return c.forEach(c=>{const o=e[c],a={...r,[c]:null},i=n?Te(e,t,a):null,u=null!==i?i.map(e=>t["id:"+e].attributes[c]):null;s[c]=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return Object.values(e).map(e=>{let{name:r,slug:s}=e;return null===t||t.includes(null)||t.includes(s)?{value:s,label:Object(se.decodeEntities)(r)}:null}).filter(Boolean)}(o.terms,u)}),s})(n,o,l),[l,n,o]);return Object(c.useEffect)(()=>{if(!b){const e=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!Object(Pe.a)(e))return{};const t=Object.keys(e),r={};return 0===t.length||t.forEach(t=>{const s=e[t],c=s.terms.filter(e=>e.default);var n;c.length>0&&(r[s.name]=null===(n=c[0])||void 0===n?void 0:n.slug)}),r}(t);e&&d({...e}),E(!0)}},[l,t,b]),Object(c.useEffect)(()=>{Object.values(l).filter(e=>""!==e).length===Object.keys(n).length?u(((e,t,r)=>Te(e,t,r)[0]||0)(n,o,l)):a>0&&u(0)},[l,a,n,o]),Object(c.useEffect)(()=>{s({id:a,variation:Object.keys(l).map(e=>({attribute:e,value:l[e]}))})},[s,a,l]),Object(c.createElement)("div",{className:"wc-block-components-product-add-to-cart-attribute-picker"},Object.keys(n).map(e=>Object(c.createElement)(Ce,{key:e,attributeName:e,options:p[e],value:l[e],onChange:t=>{d({...l,[e]:t})}})))},ke=e=>{let{product:t,dispatchers:r}=e;const s=(e=>e?Object(ue.keyBy)(Object.values(e).filter(e=>{let{has_variations:t}=e;return t}),"name"):{})(t.attributes),n=(e=>{if(!e)return{};const t={};return e.forEach(e=>{let{id:r,attributes:s}=e;t["id:"+r]={id:r,attributes:s.reduce((e,t)=>{let{name:r,value:s}=t;return e[r]=s,e},{})}}),t})(t.variations);return 0===Object.keys(s).length||0===n.length?null:Object(c.createElement)(Ae,{attributes:s,variationAttributes:n,setRequestParams:r.setRequestParams})},we=()=>{const{product:e,quantity:t,minQuantity:r,maxQuantity:s,multipleOf:n,dispatchActions:o,isDisabled:i}=$();return e.id&&!e.is_purchasable?Object(c.createElement)(je,null):e.id&&!e.is_in_stock?Object(c.createElement)(je,{reason:Object(a.__)("This product is currently out of stock and cannot be purchased.","woocommerce")}):Object(c.createElement)(c.Fragment,null,Object(c.createElement)(ke,{product:e,dispatchers:o}),Object(c.createElement)(fe,{value:t,min:r,max:s,step:n,disabled:i,onChange:o.setQuantity}),Object(c.createElement)(he,null))},Ne=()=>Object(c.createElement)(he,null),Ie=r(336),De=()=>Object(c.createElement)(Ie.a,{className:"wc-block-components-product-add-to-cart-group-list"},"This is a placeholder for the grouped products form element."),Fe=()=>Object(c.createElement)(De,null);const Ve=()=>{const{showFormElements:e,productType:t}=$();return e?"variable"===t?Object(c.createElement)(we,null):"grouped"===t?Object(c.createElement)(Fe,null):"external"===t?Object(c.createElement)(Ne,null):"simple"===t||"variation"===t?Object(c.createElement)(ge,null):null:Object(c.createElement)(he,null)};var Be=Object(s.withProductDataContext)(e=>{let{className:t,showFormElements:r}=e;const{product:s}=Object(ie.useProductDataContext)(),n=o()(t,"wc-block-components-product-add-to-cart",{"wc-block-components-product-add-to-cart--placeholder":Object(ue.isEmpty)(s)});return Object(c.createElement)(ae,{product:s,showFormElements:r},Object(c.createElement)("div",{className:n},Object(c.createElement)(Ve,null)))});t.default=Object(s.withFilteredAttributes)({showFormElements:{type:"boolean",default:!1},productId:{type:"number",default:0}})(Be)},83:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return n}));var s=r(7);const c=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;const r=Object(s.select)("core/notices").getNotices(e);return r.some(e=>e.type===t)},n=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";const r=Object(s.select)("core/notices").getNotices(),{removeNotice:c}=Object(s.dispatch)("core/notices"),n=r.filter(t=>t.status===e);n.forEach(e=>c(e.id,t))}},98:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return a}));var s=r(3);let c;!function(e){e.ADD_EVENT_CALLBACK="add_event_callback",e.REMOVE_EVENT_CALLBACK="remove_event_callback"}(c||(c={}));const n={addEventCallback:function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10;return{id:Object(s.uniqueId)(),type:c.ADD_EVENT_CALLBACK,eventType:e,callback:t,priority:r}},removeEventCallback:(e,t)=>({id:t,type:c.REMOVE_EVENT_CALLBACK,eventType:e})},o={},a=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,{type:t,eventType:r,id:s,callback:n,priority:a}=arguments.length>1?arguments[1]:void 0;const i=e.hasOwnProperty(r)?new Map(e[r]):new Map;switch(t){case c.ADD_EVENT_CALLBACK:return i.set(s,{priority:a,callback:n}),{...e,[r]:i};case c.REMOVE_EVENT_CALLBACK:return i.delete(s),{...e,[r]:i}}}}}]);