(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[18],{114:function(e,t,c){"use strict";var r=c(15),a=c.n(r),n=c(0),s=c(150),o=c(6),l=c.n(o);c(214);const i=e=>({thousandSeparator:null==e?void 0:e.thousandSeparator,decimalSeparator:null==e?void 0:e.decimalSeparator,decimalScale:null==e?void 0:e.minorUnit,fixedDecimalScale:!0,prefix:null==e?void 0:e.prefix,suffix:null==e?void 0:e.suffix,isNumericString:!0});t.a=e=>{let{className:t,value:c,currency:r,onValueChange:o,displayType:u="text",...d}=e;const b="string"==typeof c?parseInt(c,10):c;if(!Number.isFinite(b))return null;const m=b/10**r.minorUnit;if(!Number.isFinite(m))return null;const p=l()("wc-block-formatted-money-amount","wc-block-components-formatted-money-amount",t),O={...d,...i(r),value:void 0,currency:void 0,onValueChange:void 0},E=o?e=>{const t=+e.value*10**r.minorUnit;o(t)}:()=>{};return Object(n.createElement)(s.a,a()({className:p,displayType:u},O,{value:m,onValueChange:E}))}},115:function(e,t,c){"use strict";c.d(t,"a",(function(){return a})),c(53);var r=c(37);const a=()=>r.n>1},116:function(e,t,c){"use strict";c.d(t,"a",(function(){return n}));var r=c(23),a=c(20);const n=e=>Object(r.a)(e)?JSON.parse(e)||{}:Object(a.a)(e)?e:{}},151:function(e,t,c){"use strict";c.d(t,"a",(function(){return o}));var r=c(66),a=c(115),n=c(20),s=c(116);const o=e=>{if(!Object(a.a)())return{className:"",style:{}};const t=Object(n.a)(e)?e:{},c=Object(s.a)(t.style);return Object(r.__experimentalUseBorderProps)({...t,style:c})}},21:function(e,t,c){"use strict";var r=c(0),a=c(6),n=c.n(a);t.a=e=>{let t,{label:c,screenReaderLabel:a,wrapperElement:s,wrapperProps:o={}}=e;const l=null!=c,i=null!=a;return!l&&i?(t=s||"span",o={...o,className:n()(o.className,"screen-reader-text")},Object(r.createElement)(t,o,a)):(t=s||r.Fragment,l&&i&&c!==a?Object(r.createElement)(t,o,Object(r.createElement)("span",{"aria-hidden":"true"},c),Object(r.createElement)("span",{className:"screen-reader-text"},a)):Object(r.createElement)(t,o,c))}},214:function(e,t){},281:function(e,t,c){"use strict";var r=c(15),a=c.n(r),n=c(0),s=c(55),o=c(6),l=c.n(o),i=c(148);c(282),t.a=e=>{let{className:t,showSpinner:c=!1,children:r,variant:o="contained",...u}=e;const d=l()("wc-block-components-button","wp-element-button",t,o,{"wc-block-components-button--loading":c});return Object(n.createElement)(s.a,a()({className:d},u),c&&Object(n.createElement)(i.a,null),Object(n.createElement)("span",{className:"wc-block-components-button__text"},r))}},282:function(e,t){},285:function(e,t,c){"use strict";c.d(t,"a",(function(){return o}));var r=c(66),a=c(115),n=c(20),s=c(116);const o=e=>{if(!Object(a.a)())return{className:"",style:{}};const t=Object(n.a)(e)?e:{},c=Object(s.a)(t.style);return Object(r.__experimentalUseColorProps)({...t,style:c})}},289:function(e,t,c){"use strict";c.d(t,"a",(function(){return n}));var r=c(20),a=c(116);const n=e=>{const t=Object(r.a)(e)?e:{},c=Object(a.a)(t.style),n=Object(r.a)(c.typography)?c.typography:{};return{style:{fontSize:t.fontSize?`var(--wp--preset--font-size--${t.fontSize})`:n.fontSize,lineHeight:n.lineHeight,fontWeight:n.fontWeight,fontStyle:n.fontStyle,textTransform:n.textTransform,fontFamily:t.fontFamily}}}},298:function(e,t,c){"use strict";var r=c(0),a=c(1),n=c(114),s=c(6),o=c.n(s),l=c(44);c(299);const i=e=>{let{currency:t,maxPrice:c,minPrice:s,priceClassName:i,priceStyle:u={}}=e;return Object(r.createElement)(r.Fragment,null,Object(r.createElement)("span",{className:"screen-reader-text"},Object(a.sprintf)(
/* translators: %1$s min price, %2$s max price */
Object(a.__)("Price between %1$s and %2$s","woocommerce"),Object(l.formatPrice)(s),Object(l.formatPrice)(c))),Object(r.createElement)("span",{"aria-hidden":!0},Object(r.createElement)(n.a,{className:o()("wc-block-components-product-price__value",i),currency:t,value:s,style:u})," — ",Object(r.createElement)(n.a,{className:o()("wc-block-components-product-price__value",i),currency:t,value:c,style:u})))},u=e=>{let{currency:t,regularPriceClassName:c,regularPriceStyle:s,regularPrice:l,priceClassName:i,priceStyle:u,price:d}=e;return Object(r.createElement)(r.Fragment,null,Object(r.createElement)("span",{className:"screen-reader-text"},Object(a.__)("Previous price:","woocommerce")),Object(r.createElement)(n.a,{currency:t,renderText:e=>Object(r.createElement)("del",{className:o()("wc-block-components-product-price__regular",c),style:s},e),value:l}),Object(r.createElement)("span",{className:"screen-reader-text"},Object(a.__)("Discounted price:","woocommerce")),Object(r.createElement)(n.a,{currency:t,renderText:e=>Object(r.createElement)("ins",{className:o()("wc-block-components-product-price__value","is-discounted",i),style:u},e),value:d}))};t.a=e=>{let{align:t,className:c,currency:a,format:s="<price/>",maxPrice:l,minPrice:d,price:b,priceClassName:m,priceStyle:p,regularPrice:O,regularPriceClassName:E,regularPriceStyle:j}=e;const _=o()(c,"price","wc-block-components-product-price",{["wc-block-components-product-price--align-"+t]:t});s.includes("<price/>")||(s="<price/>",console.error("Price formats need to include the `<price/>` tag."));const g=O&&b!==O;let f=Object(r.createElement)("span",{className:o()("wc-block-components-product-price__value",m)});return g?f=Object(r.createElement)(u,{currency:a,price:b,priceClassName:m,priceStyle:p,regularPrice:O,regularPriceClassName:E,regularPriceStyle:j}):void 0!==d&&void 0!==l?f=Object(r.createElement)(i,{currency:a,maxPrice:l,minPrice:d,priceClassName:m,priceStyle:p}):b&&(f=Object(r.createElement)(n.a,{className:o()("wc-block-components-product-price__value",m),currency:a,value:b,style:p})),Object(r.createElement)("span",{className:_},Object(r.createInterpolateElement)(s,{price:f}))}},299:function(e,t){},30:function(e,t,c){"use strict";c.d(t,"a",(function(){return s}));var r=c(0),a=c(13),n=c.n(a);function s(e){const t=Object(r.useRef)(e);return n()(e,t.current)||(t.current=e),t.current}},300:function(e,t,c){"use strict";var r=c(15),a=c.n(r),n=c(0),s=c(31),o=c(6),l=c.n(o);c(301),t.a=e=>{let{className:t="",disabled:c=!1,name:r,permalink:o="",target:i,rel:u,style:d,onClick:b,...m}=e;const p=l()("wc-block-components-product-name",t);if(c){const e=m;return Object(n.createElement)("span",a()({className:p},e,{dangerouslySetInnerHTML:{__html:Object(s.decodeEntities)(r)}}))}return Object(n.createElement)("a",a()({className:p,href:o,target:i},m,{dangerouslySetInnerHTML:{__html:Object(s.decodeEntities)(r)},style:d}))}},301:function(e,t){},325:function(e,t,c){"use strict";c.r(t),c.d(t,"Block",(function(){return p}));var r=c(0),a=c(1),n=c(6),s=c.n(n),o=c(21),l=c(52),i=c(151),u=c(285),d=c(289),b=c(327),m=c(137);c(326);const p=e=>{const{className:t,align:c}=e,{parentClassName:n}=Object(l.useInnerBlockLayoutContext)(),{product:m}=Object(l.useProductDataContext)(),p=Object(i.a)(e),O=Object(u.a)(e),E=Object(d.a)(e),j=Object(b.a)(e);if(!m.id||!m.on_sale)return null;const _="string"==typeof c?"wc-block-components-product-sale-badge--align-"+c:"";return Object(r.createElement)("div",{className:s()("wc-block-components-product-sale-badge",t,_,{[n+"__product-onsale"]:n},O.className,p.className),style:{...O.style,...p.style,...E.style,...j.style}},Object(r.createElement)(o.a,{label:Object(a.__)("Sale","woocommerce"),screenReaderLabel:Object(a.__)("Product on sale","woocommerce")}))};t.default=Object(m.withProductDataContext)(p)},326:function(e,t){},327:function(e,t,c){"use strict";c.d(t,"a",(function(){return o}));var r=c(66),a=c(115),n=c(20),s=c(116);const o=e=>{if(!Object(a.a)())return{style:{}};const t=Object(n.a)(e)?e:{},c=Object(s.a)(t.style);return Object(r.__experimentalGetSpacingClassesAndStyles)({...t,style:c})}},350:function(e,t){},351:function(e,t,c){"use strict";c.d(t,"a",(function(){return g}));var r=c(15),a=c.n(r),n=c(0),s=c(1),o=c(6),l=c.n(o),i=c(2),u=c(52),d=c(289),b=c(151),m=c(327),p=c(137),O=c(73),E=c(325);c(352);const j=()=>Object(n.createElement)("img",{src:i.PLACEHOLDER_IMG_SRC,alt:"",width:void 0,height:void 0}),_=e=>{let{image:t,loaded:c,showFullSize:r,fallbackAlt:s}=e;const{thumbnail:o,src:l,srcset:i,sizes:u,alt:d}=t||{},b={alt:d||s,hidden:!c,src:o,...r&&{src:l,srcSet:i,sizes:u}};return Object(n.createElement)(n.Fragment,null,b.src&&Object(n.createElement)("img",a()({"data-testid":"product-image"},b)),!t&&Object(n.createElement)(j,null))},g=e=>{const{className:t,imageSizing:c="full-size",showProductLink:r=!0,showSaleBadge:a,saleBadgeAlign:o="right"}=e,{parentClassName:i}=Object(u.useInnerBlockLayoutContext)(),{product:p,isLoading:g}=Object(u.useProductDataContext)(),{dispatchStoreEvent:f}=Object(O.a)(),y=Object(d.a)(e),h=Object(b.a)(e),S=Object(m.a)(e);if(!p.id)return Object(n.createElement)("div",{className:l()(t,"wc-block-components-product-image",{[i+"__product-image"]:i},h.className),style:{...y.style,...h.style,...S.style}},Object(n.createElement)(j,null));const v=!!p.images.length,N=v?p.images[0]:null,k=r?"a":n.Fragment,w=Object(s.sprintf)(
/* translators: %s is referring to the product name */
Object(s.__)("Link to %s","woocommerce"),p.name),P={href:p.permalink,...!v&&{"aria-label":w},onClick:()=>{f("product-view-link",{product:p})}};return Object(n.createElement)("div",{className:l()(t,"wc-block-components-product-image",{[i+"__product-image"]:i},h.className),style:{...y.style,...h.style,...S.style}},Object(n.createElement)(k,r&&P,!!a&&Object(n.createElement)(E.default,{align:o,product:p}),Object(n.createElement)(_,{fallbackAlt:p.name,image:N,loaded:!g,showFullSize:"cropped"!==c})))};t.b=Object(p.withProductDataContext)(g)},352:function(e,t){},353:function(e,t,c){"use strict";c.d(t,"a",(function(){return O}));var r=c(0),a=c(6),n=c.n(a),s=c(52),o=c(115),l=c(137),i=c(300),u=c(73),d=c(285),b=c(327),m=c(289);c(354);const p=e=>{let{children:t,headingLevel:c,elementType:a="h"+c,...n}=e;return Object(r.createElement)(a,n,t)},O=e=>{const{className:t,headingLevel:c=2,showProductLink:a=!0,linkTarget:l,align:O}=e,{parentClassName:E}=Object(s.useInnerBlockLayoutContext)(),{product:j}=Object(s.useProductDataContext)(),{dispatchStoreEvent:_}=Object(u.a)(),g=Object(d.a)(e),f=Object(b.a)(e),y=Object(m.a)(e);return j.id?Object(r.createElement)(p,{headingLevel:c,className:n()(t,g.className,"wc-block-components-product-title",{[E+"__product-title"]:E,["wc-block-components-product-title--align-"+O]:O&&Object(o.a)()}),style:Object(o.a)()?{...f.style,...y.style,...g.style}:{}},Object(r.createElement)(i.a,{disabled:!a,name:j.name,permalink:j.permalink,target:l,onClick:()=>{_("product-view-link",{product:j})}})):Object(r.createElement)(p,{headingLevel:c,className:n()(t,g.className,"wc-block-components-product-title",{[E+"__product-title"]:E,["wc-block-components-product-title--align-"+O]:O&&Object(o.a)()}),style:Object(o.a)()?{...f.style,...y.style,...g.style}:{}})};t.b=Object(l.withProductDataContext)(O)},354:function(e,t){},355:function(e,t){},356:function(e,t){},357:function(e,t){},358:function(e,t){},374:function(e,t,c){"use strict";var r=c(0),a=c(6),n=c.n(a),s=c(1),o=c(30);const l=e=>e.is_purchasable||!1;var i=c(7),u=c(3);const d={PRISTINE:"pristine",IDLE:"idle",DISABLED:"disabled",PROCESSING:"processing",BEFORE_PROCESSING:"before_processing",AFTER_PROCESSING:"after_processing"},b={status:d.PRISTINE,hasError:!1,quantity:0,processingResponse:null,requestParams:{}},m={SET_PRISTINE:"set_pristine",SET_IDLE:"set_idle",SET_DISABLED:"set_disabled",SET_PROCESSING:"set_processing",SET_BEFORE_PROCESSING:"set_before_processing",SET_AFTER_PROCESSING:"set_after_processing",SET_PROCESSING_RESPONSE:"set_processing_response",SET_HAS_ERROR:"set_has_error",SET_NO_ERROR:"set_no_error",SET_QUANTITY:"set_quantity",SET_REQUEST_PARAMS:"set_request_params"},{SET_PRISTINE:p,SET_IDLE:O,SET_DISABLED:E,SET_PROCESSING:j,SET_BEFORE_PROCESSING:_,SET_AFTER_PROCESSING:g,SET_PROCESSING_RESPONSE:f,SET_HAS_ERROR:y,SET_NO_ERROR:h,SET_QUANTITY:S,SET_REQUEST_PARAMS:v}=m,N=()=>({type:O}),k=function(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];const t=e?y:h;return{type:t}},{SET_PRISTINE:w,SET_IDLE:P,SET_DISABLED:C,SET_PROCESSING:R,SET_BEFORE_PROCESSING:T,SET_AFTER_PROCESSING:A,SET_PROCESSING_RESPONSE:I,SET_HAS_ERROR:x,SET_NO_ERROR:D,SET_QUANTITY:L,SET_REQUEST_PARAMS:B}=m,{PRISTINE:F,IDLE:q,DISABLED:G,PROCESSING:Q,BEFORE_PROCESSING:M,AFTER_PROCESSING:H}=d,V=function(){let e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,{quantity:c,type:r,data:a}=arguments.length>1?arguments[1]:void 0;switch(r){case w:e=b;break;case P:e=t.status!==q?{...t,status:q}:t;break;case C:e=t.status!==G?{...t,status:G}:t;break;case L:e=c!==t.quantity?{...t,quantity:c}:t;break;case B:e={...t,requestParams:{...t.requestParams,...a}};break;case I:e={...t,processingResponse:a};break;case R:e=t.status!==Q?{...t,status:Q,hasError:!1}:t,e=!1===e.hasError?e:{...e,hasError:!1};break;case T:e=t.status!==M?{...t,status:M,hasError:!1}:t;break;case A:e=t.status!==H?{...t,status:H}:t;break;case x:e=t.hasError?t:{...t,hasError:!0},e=t.status===Q||t.status===M?{...e,status:q}:e;break;case D:e=t.hasError?{...t,hasError:!1}:t}return e!==t&&r!==w&&e.status===F&&(e.status=q),e};var z=c(107),W=c(223);const U=e=>({onAddToCartAfterProcessingWithSuccess:Object(W.a)("add_to_cart_after_processing_with_success",e),onAddToCartProcessingWithError:Object(W.a)("add_to_cart_after_processing_with_error",e),onAddToCartBeforeProcessing:Object(W.a)("add_to_cart_before_processing",e)});var Y=c(230),$=c(38);const K=Object(r.createContext)({product:{},productType:"simple",productIsPurchasable:!0,productHasOptions:!1,supportsFormElements:!0,showFormElements:!1,quantity:0,minQuantity:1,maxQuantity:99,requestParams:{},isIdle:!1,isDisabled:!1,isProcessing:!1,isBeforeProcessing:!1,isAfterProcessing:!1,hasError:!1,eventRegistration:{onAddToCartAfterProcessingWithSuccess:e=>{},onAddToCartAfterProcessingWithError:e=>{},onAddToCartBeforeProcessing:e=>{}},dispatchActions:{resetForm:()=>{},submitForm:()=>{},setQuantity:e=>{},setHasError:e=>{},setAfterProcessing:e=>{},setRequestParams:e=>{}}}),J=()=>Object(r.useContext)(K),X=e=>{var t,c,a,n;let{children:m,product:O,showFormElements:y}=e;const[h,w]=Object(r.useReducer)(V,b),[P,C]=Object(r.useReducer)(z.b,{}),R=Object(o.a)(P),{createErrorNotice:T}=Object(i.useDispatch)("core/notices"),{setValidationErrors:A}=Object(i.useDispatch)(u.VALIDATION_STORE_KEY),I=Object(r.useMemo)(()=>({onAddToCartAfterProcessingWithSuccess:U(C).onAddToCartAfterProcessingWithSuccess,onAddToCartAfterProcessingWithError:U(C).onAddToCartAfterProcessingWithError,onAddToCartBeforeProcessing:U(C).onAddToCartBeforeProcessing}),[C]),x=Object(r.useMemo)(()=>({resetForm:()=>{w({type:p})},submitForm:()=>{w({type:_})},setQuantity:e=>{w((e=>({type:S,quantity:e}))(e))},setHasError:e=>{w(k(e))},setRequestParams:e=>{w((e=>({type:v,data:e}))(e))},setAfterProcessing:e=>{w({type:f,data:e}),w({type:g})}}),[]);Object(r.useEffect)(()=>{const e=h.status,t=!O.id||!l(O);e!==d.DISABLED||t?e!==d.DISABLED&&t&&w({type:E}):w(N())},[h.status,O,w]),Object(r.useEffect)(()=>{h.status===d.BEFORE_PROCESSING&&(((e,t)=>{const c=Object(i.select)("core/notices").getNotices("wc/add-to-cart"),{removeNotice:r}=Object(i.dispatch)("core/notices");c.filter(e=>"error"===e.status).forEach(e=>r(e.id,"wc/add-to-cart"))})(),Object(Y.a)(R,"add_to_cart_before_processing",{}).then(e=>{!0!==e?(Array.isArray(e)&&e.forEach(e=>{let{errorMessage:t,validationErrors:c}=e;t&&T(t,{context:"wc/add-to-cart"}),c&&A(c)}),w(N())):w({type:j})}))},[h.status,A,T,w,R,null==O?void 0:O.id]),Object(r.useEffect)(()=>{if(h.status===d.AFTER_PROCESSING){const e={processingResponse:h.processingResponse},t=e=>{let t=!1;return e.forEach(e=>{const{message:c,messageContext:r}=e;(Object($.b)(e)||Object($.c)(e))&&c&&(t=!0,T(c,r?{context:r}:void 0))}),t};if(h.hasError)return void Object(Y.b)(R,"add_to_cart_after_processing_with_error",e).then(c=>{if(!t(c)){var r;const t=(null===(r=e.processingResponse)||void 0===r?void 0:r.message)||Object(s.__)("Something went wrong. Please contact us for assistance.","woocommerce");T(t,{id:"add-to-cart",context:"woocommerce/single-product/"+((null==O?void 0:O.id)||0)})}w(N())});Object(Y.b)(R,"add_to_cart_after_processing_with_success",e).then(e=>{t(e)?w(k(!0)):w(N())})}},[h.status,h.hasError,h.processingResponse,x,T,R,null==O?void 0:O.id]);const D=(e=>["simple","variable"].includes(e.type||"simple"))(O),L={product:O,productType:O.type||"simple",productIsPurchasable:l(O),productHasOptions:O.has_options||!1,supportsFormElements:D,showFormElements:y&&D,quantity:h.quantity||(null==O||null===(t=O.add_to_cart)||void 0===t?void 0:t.minimum)||1,minQuantity:(null==O||null===(c=O.add_to_cart)||void 0===c?void 0:c.minimum)||1,maxQuantity:(null==O||null===(a=O.add_to_cart)||void 0===a?void 0:a.maximum)||99,multipleOf:(null==O||null===(n=O.add_to_cart)||void 0===n?void 0:n.multiple_of)||1,requestParams:h.requestParams,isIdle:h.status===d.IDLE,isDisabled:h.status===d.DISABLED,isProcessing:h.status===d.PROCESSING,isBeforeProcessing:h.status===d.BEFORE_PROCESSING,isAfterProcessing:h.status===d.AFTER_PROCESSING,hasError:h.hasError,eventRegistration:I,dispatchActions:x};return Object(r.createElement)(K.Provider,{value:L},m)};var Z=c(35),ee=c.n(Z),te=c(31),ce=c(90),re=c(43),ae=()=>{const{dispatchActions:e,product:t,quantity:c,eventRegistration:a,hasError:n,isProcessing:o,requestParams:l}=J(),{showAllValidationErrors:d}=Object(i.useDispatch)(u.VALIDATION_STORE_KEY),b=Object(i.useSelect)(e=>e(u.VALIDATION_STORE_KEY).hasValidationErrors),{createErrorNotice:m,removeNotice:p}=Object(i.useDispatch)("core/notices"),{receiveCart:O}=Object(re.a)(),[E,j]=Object(r.useState)(!1),_=!n&&o,g=Object(r.useCallback)(()=>!b()||(d(),{type:"error"}),[b,d]);Object(r.useEffect)(()=>{const e=a.onAddToCartBeforeProcessing(g,0);return()=>{e()}},[a,g]);const f=Object(r.useCallback)(()=>{j(!0),p("add-to-cart","woocommerce/single-product/"+((null==t?void 0:t.id)||0));const r={id:t.id||0,quantity:c,...l};ee()({path:"/wc/store/v1/cart/add-item",method:"POST",data:r,cache:"no-store",parse:!1}).then(c=>{ee.a.setNonce(c.headers),c.json().then((function(r){c.ok?O(r):(r.body&&r.body.message?m(Object(te.decodeEntities)(r.body.message),{id:"add-to-cart",context:"woocommerce/single-product/"+((null==t?void 0:t.id)||0)}):m(Object(s.__)("Something went wrong. Please contact us for assistance.","woocommerce"),{id:"add-to-cart",context:"woocommerce/single-product/"+((null==t?void 0:t.id)||0)}),e.setHasError()),Object(ce.c)({preserveCartData:!0}),e.setAfterProcessing(r),j(!1)}))}).catch(t=>{t.json().then((function(t){var c;null!==(c=t.data)&&void 0!==c&&c.cart&&O(t.data.cart),e.setHasError(),e.setAfterProcessing(t),j(!1)}))})},[t,m,p,O,e,c,l]);return Object(r.useEffect)(()=>{_&&!E&&f()},[_,f,E]),null};const ne=e=>{let{children:t,product:c,showFormElements:a}=e;return Object(r.createElement)(X,{product:c,showFormElements:a},t,Object(r.createElement)(ae,null))};var se=c(52),oe=c(5),le=c(137),ie=(c(357),c(281)),ue=c(76),de=c(421),be=c(73),me=c(382);const pe=e=>{let{className:t,href:c,text:a,onClick:n}=e;return Object(r.createElement)(ie.a,{className:t,href:c,onClick:n,rel:"nofollow"},a)},Oe=e=>{let{className:t,quantityInCart:c,isProcessing:a,isDisabled:n,isDone:o,onClick:l}=e;return Object(r.createElement)(ie.a,{className:t,disabled:n,showSpinner:a,onClick:l},o&&c>0?Object(s.sprintf)(
/* translators: %s number of products in cart. */
Object(s._n)("%d in cart","%d in cart",c,"woocommerce"),c):Object(s.__)("Add to cart","woocommerce"),!!o&&Object(r.createElement)(ue.a,{icon:de.a}))};var Ee=()=>{const{showFormElements:e,productIsPurchasable:t,productHasOptions:c,product:a,productType:n,isDisabled:o,isProcessing:l,eventRegistration:i,hasError:u,dispatchActions:d}=J(),{parentName:b}=Object(se.useInnerBlockLayoutContext)(),{dispatchStoreEvent:m}=Object(be.a)(),{cartQuantity:p}=Object(me.a)(a.id||0),[O,E]=Object(r.useState)(!1),j=a.add_to_cart||{url:"",text:""};return Object(r.useEffect)(()=>{const e=i.onAddToCartAfterProcessingWithSuccess(()=>(u||E(!0),!0),0);return()=>{e()}},[i,u]),(e||!c&&"simple"===n)&&t?Object(r.createElement)(Oe,{className:"wc-block-components-product-add-to-cart-button",quantityInCart:p,isDisabled:o,isProcessing:l,isDone:O,onClick:()=>{d.submitForm("woocommerce/single-product/"+((null==a?void 0:a.id)||0)),m("cart-add-item",{product:a,listName:b})}}):Object(r.createElement)(pe,{className:"wc-block-components-product-add-to-cart-button",href:j.url,text:j.text||Object(s.__)("View Product","woocommerce"),onClick:()=>{m("product-view-link",{product:a,listName:b})}})},je=c(57),_e=e=>{let{disabled:t,min:c,max:a,step:n=1,value:s,onChange:o}=e;const l=void 0!==a,i=Object(je.a)(e=>{let t=e;l&&(t=Math.min(t,Math.floor(a/n)*n)),t=Math.max(t,Math.ceil(c/n)*n),t=Math.floor(t/n)*n,t!==e&&(null==o||o(t))},300);return Object(r.createElement)("input",{className:"wc-block-components-product-add-to-cart-quantity",type:"number",value:s,min:c,max:a,step:n,hidden:1===a,disabled:t,onChange:e=>{null==o||o(e.target.value),i(Number(e.target.value))}})},ge=e=>{let{reason:t=Object(s.__)("Sorry, this product cannot be purchased.","woocommerce")}=e;return Object(r.createElement)("div",{className:"wc-block-components-product-add-to-cart-unavailable"},t)},fe=()=>{const{product:e,quantity:t,minQuantity:c,maxQuantity:a,multipleOf:n,dispatchActions:o,isDisabled:l}=J();return e.id&&!e.is_purchasable?Object(r.createElement)(ge,null):e.id&&!e.is_in_stock?Object(r.createElement)(ge,{reason:Object(s.__)("This product is currently out of stock and cannot be purchased.","woocommerce")}):Object(r.createElement)(r.Fragment,null,Object(r.createElement)(_e,{value:t,min:c,max:a,step:n,disabled:l,onChange:o.setQuantity}),Object(r.createElement)(Ee,null))},ye=(c(358),c(492)),he=c(8),Se=c(11);const ve={value:"",label:Object(s.__)("Select an option","woocommerce")};var Ne=e=>{let{attributeName:t,options:c=[],value:a="",onChange:o=(()=>{}),errorMessage:l=Object(s.__)("Please select a value.","woocommerce")}=e;const d=t,{setValidationErrors:b,clearValidationError:m}=Object(i.useDispatch)(u.VALIDATION_STORE_KEY),{error:p}=Object(i.useSelect)(e=>({error:e(u.VALIDATION_STORE_KEY).getValidationError(d)||{}}));return Object(he.useEffect)(()=>{a?m(d):b({[d]:{message:l,hidden:!0}})},[a,d,l,m,b]),Object(he.useEffect)(()=>()=>{m(d)},[d,m]),Object(r.createElement)("div",{className:"wc-block-components-product-add-to-cart-attribute-picker__container"},Object(r.createElement)(ye.a,{label:Object(te.decodeEntities)(t),value:a||"",options:[ve,...c],onChange:o,required:!0,className:n()("wc-block-components-product-add-to-cart-attribute-picker__select",{"has-error":(null==p?void 0:p.message)&&!(null!=p&&p.hidden)})}),Object(r.createElement)(Se.ValidationInputError,{propertyName:d,elementId:d}))},ke=c(20);const we=(e,t,c)=>{const r=Object.values(t).map(e=>{let{id:t}=e;return t});if(Object.values(c).every(e=>""===e))return r;const a=Object.keys(e);return r.filter(e=>a.every(r=>{const a=c[r]||"",n=t["id:"+e].attributes[r];return""===a||null===n||n===a}))};var Pe=e=>{let{attributes:t,variationAttributes:c,setRequestParams:a}=e;const n=Object(o.a)(t),s=Object(o.a)(c),[l,i]=Object(r.useState)(0),[u,d]=Object(r.useState)({}),[b,m]=Object(r.useState)(!1),p=Object(r.useMemo)(()=>((e,t,c)=>{const r={},a=Object.keys(e),n=Object.values(c).filter(Boolean).length>0;return a.forEach(a=>{const s=e[a],o={...c,[a]:null},l=n?we(e,t,o):null,i=null!==l?l.map(e=>t["id:"+e].attributes[a]):null;r[a]=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return Object.values(e).map(e=>{let{name:c,slug:r}=e;return null===t||t.includes(null)||t.includes(r)?{value:r,label:Object(te.decodeEntities)(c)}:null}).filter(Boolean)}(s.terms,i)}),r})(n,s,u),[u,n,s]);return Object(r.useEffect)(()=>{if(!b){const e=(e=>Object(ke.a)(e)?0===Object.keys(e).length?{}:Object.values(e).reduce((e,t)=>{const c=t.terms.filter(e=>e.default);var r;return c.length>0&&(e[t.name]=null===(r=c[0])||void 0===r?void 0:r.slug),e},{}):{})(t);e&&d({...e}),m(!0)}},[u,t,b]),Object(r.useEffect)(()=>{Object.values(u).filter(e=>""!==e).length===Object.keys(n).length?i(((e,t,c)=>we(e,t,c)[0]||0)(n,s,u)):l>0&&i(0)},[u,l,n,s]),Object(r.useEffect)(()=>{a({id:l,variation:Object.keys(u).map(e=>({attribute:e,value:u[e]}))})},[a,l,u]),Object(r.createElement)("div",{className:"wc-block-components-product-add-to-cart-attribute-picker"},Object.keys(n).map(e=>Object(r.createElement)(Ne,{key:e,attributeName:e,options:p[e].filter(Boolean),value:u[e],onChange:t=>{d({...u,[e]:t})}})))},Ce=e=>{let{dispatchers:t,product:c}=e;const a=(e=>e?Object(oe.keyBy)(Object.values(e).filter(e=>{let{has_variations:t}=e;return t}),"name"):{})(c.attributes),n=(e=>{if(!e)return{};const t={};return e.forEach(e=>{let{id:c,attributes:r}=e;t["id:"+c]={id:c,attributes:r.reduce((e,t)=>{let{name:c,value:r}=t;return e[c]=r,e},{})}}),t})(c.variations);return 0===Object.keys(a).length||0===Object.keys(n).length?null:Object(r.createElement)(Pe,{attributes:a,variationAttributes:n,setRequestParams:t.setRequestParams})},Re=()=>{const{product:e,quantity:t,minQuantity:c,maxQuantity:a,multipleOf:n,dispatchActions:o,isDisabled:l}=J();return e.id&&!e.is_purchasable?Object(r.createElement)(ge,null):e.id&&!e.is_in_stock?Object(r.createElement)(ge,{reason:Object(s.__)("This product is currently out of stock and cannot be purchased.","woocommerce")}):Object(r.createElement)(r.Fragment,null,Object(r.createElement)(Ce,{product:e,dispatchers:o}),Object(r.createElement)(_e,{value:t,min:c,max:a,step:n,disabled:l,onChange:o.setQuantity}),Object(r.createElement)(Ee,null))},Te=()=>Object(r.createElement)(Ee,null),Ae=c(392),Ie=()=>Object(r.createElement)(Ae.a,{className:"wc-block-components-product-add-to-cart-group-list"},"This is a placeholder for the grouped products form element."),xe=()=>Object(r.createElement)(Ie,null);const De=()=>{const{showFormElements:e,productType:t}=J();return e?"variable"===t?Object(r.createElement)(Re,null):"grouped"===t?Object(r.createElement)(xe,null):"external"===t?Object(r.createElement)(Te,null):"simple"===t||"variation"===t?Object(r.createElement)(fe,null):null:Object(r.createElement)(Ee,null)};t.a=Object(le.withProductDataContext)(e=>{let{className:t,showFormElements:c}=e;const{product:a}=Object(se.useProductDataContext)(),s=n()(t,"wc-block-components-product-add-to-cart",{"wc-block-components-product-add-to-cart--placeholder":Object(oe.isEmpty)(a)});return Object(r.createElement)(ne,{product:a,showFormElements:c},Object(r.createElement)("div",{className:s},Object(r.createElement)(De,null)))})},379:function(e,t,c){"use strict";c.r(t),c.d(t,"Block",(function(){return b}));var r=c(0),a=c(6),n=c.n(a),s=c(298),o=c(44),l=c(52),i=c(285),u=c(289),d=c(137);c(350);const b=e=>{var t,c;const{className:a,textAlign:d}=e,{parentClassName:b}=Object(l.useInnerBlockLayoutContext)(),{product:m}=Object(l.useProductDataContext)(),p=Object(i.a)(e),O=Object(u.a)(e),E=n()("wc-block-components-product-price",a,p.className,{[b+"__product-price"]:b}),j={...O.style,...p.style};if(!m.id)return Object(r.createElement)(s.a,{align:d,className:E});const _=m.prices,g=Object(o.getCurrencyFromPriceResponse)(_),f=_.price!==_.regular_price,y=n()({[b+"__product-price__value"]:b,[b+"__product-price__value--on-sale"]:f});return Object(r.createElement)(s.a,{align:d,className:E,priceStyle:j,regularPriceStyle:j,priceClassName:y,currency:g,price:_.price,minPrice:null==_||null===(t=_.price_range)||void 0===t?void 0:t.min_amount,maxPrice:null==_||null===(c=_.price_range)||void 0===c?void 0:c.max_amount,regularPrice:_.regular_price,regularPriceClassName:n()({[b+"__product-price__regular"]:b})})};t.default=Object(d.withProductDataContext)(b)},380:function(e,t,c){"use strict";c.r(t),c.d(t,"Block",(function(){return O}));var r=c(0),a=c(1),n=c(6),s=c.n(n),o=c(52),l=c(285),i=c(289),u=c(327),d=c(137),b=c(91);c(355);const m=e=>{const{rating:t,reviews:c,parentClassName:n}=e,o={width:t/5*100+"%"},l=Object(a.sprintf)(
/* translators: %f is referring to the average rating value */
Object(a.__)("Rated %f out of 5","woocommerce"),t),i={__html:Object(a.sprintf)(
/* translators: %1$s is referring to the average rating value, %2$s is referring to the number of ratings */
Object(a._n)("Rated %1$s out of 5 based on %2$s customer rating","Rated %1$s out of 5 based on %2$s customer ratings",c,"woocommerce"),Object(a.sprintf)('<strong class="rating">%f</strong>',t),Object(a.sprintf)('<span class="rating">%d</span>',c))};return Object(r.createElement)("div",{className:s()("wc-block-components-product-rating__stars",n+"__product-rating__stars"),role:"img","aria-label":l},Object(r.createElement)("span",{style:o,dangerouslySetInnerHTML:i}))},p=e=>{const{href:t}=e,c=Object(a.__)("Add review","woocommerce");return t?Object(r.createElement)("a",{className:"wc-block-components-product-rating__link",href:t},c):null},O=e=>{const{textAlign:t}=e,{parentClassName:c}=Object(o.useInnerBlockLayoutContext)(),{product:a}=Object(o.useProductDataContext)(),n=(e=>{const t=parseFloat(e.average_rating);return Number.isFinite(t)&&t>0?t:0})(a),d=Object(l.a)(e),O=Object(i.a)(e),E=Object(u.a)(e),j=(e=>{const t=Object(b.a)(e.review_count)?e.review_count:parseInt(e.review_count,10);return Number.isFinite(t)&&t>0?t:0})(a),_=(e=>{const{permalink:t}=e;return t+"#reviews"})(a),g=s()(d.className,"wc-block-components-product-rating",{[c+"__product-rating"]:c,["has-text-align-"+t]:t}),f=j?Object(r.createElement)(m,{rating:n,reviews:j,parentClassName:c}):Object(r.createElement)(p,{href:_});return Object(r.createElement)("div",{className:g,style:{...d.style,...O.style,...E.style}},f)};t.default=Object(d.withProductDataContext)(O)},381:function(e,t,c){"use strict";c.r(t),c.d(t,"Block",(function(){return h}));var r=c(15),a=c.n(r),n=c(0),s=c(6),o=c.n(s),l=c(1),i=c(73),u=c(382),d=c(285),b=c(151),m=c(289),p=c(327),O=c(31),E=c(37),j=c(2),_=c(52),g=c(137);c(356);const f=e=>{let{product:t,colorStyles:c,borderStyles:r,typographyStyles:s,spacingStyles:d,textAlign:b}=e;const{id:m,permalink:p,add_to_cart:_,has_options:g,is_purchasable:f,is_in_stock:y}=t,{dispatchStoreEvent:h}=Object(i.a)(),{cartQuantity:S,addingToCart:v,addToCart:N}=Object(u.a)(m),k=Number.isFinite(S)&&S>0,w=!g&&f&&y,P=Object(O.decodeEntities)((null==_?void 0:_.description)||""),C=k?Object(l.sprintf)(
/* translators: %s number of products in cart. */
Object(l._n)("%d in cart","%d in cart",S,"woocommerce"),S):Object(O.decodeEntities)((null==_?void 0:_.text)||Object(l.__)("Add to cart","woocommerce")),R=w?"button":"a",T={};return w?T.onClick=async()=>{await N(),h("cart-add-item",{product:t});const{cartRedirectAfterAdd:e}=Object(j.getSetting)("productsSettings");e&&(window.location.href=E.c)}:(T.href=p,T.rel="nofollow",T.onClick=()=>{h("product-view-link",{product:t})}),Object(n.createElement)(R,a()({"aria-label":P,className:o()("wp-block-button__link","wp-element-button","add_to_cart_button","wc-block-components-product-button__button",c.className,r.className,{loading:v,added:k},{["has-text-align-"+b]:b}),style:{...c.style,...r.style,...s.style,...d.style},disabled:v},T),C)},y=e=>{let{colorStyles:t,borderStyles:c,typographyStyles:r,spacingStyles:a}=e;return Object(n.createElement)("button",{className:o()("wp-block-button__link","wp-element-button","add_to_cart_button","wc-block-components-product-button__button","wc-block-components-product-button__button--placeholder",t.className,c.className),style:{...t.style,...c.style,...r.style,...a.style},disabled:!0})},h=e=>{const{className:t,textAlign:c}=e,{parentClassName:r}=Object(_.useInnerBlockLayoutContext)(),{product:a}=Object(_.useProductDataContext)(),s=Object(d.a)(e),l=Object(b.a)(e),i=Object(m.a)(e),u=Object(p.a)(e);return Object(n.createElement)("div",{className:o()(t,"wp-block-button","wc-block-components-product-button",{[r+"__product-add-to-cart"]:r},{["has-text-align-"+c]:c})},a.id?Object(n.createElement)(f,{product:a,colorStyles:s,borderStyles:l,typographyStyles:i,spacingStyles:u}):Object(n.createElement)(y,{colorStyles:s,borderStyles:l,typographyStyles:i,spacingStyles:u}))};t.default=Object(g.withProductDataContext)(h)},382:function(e,t,c){"use strict";c.d(t,"a",(function(){return i}));var r=c(0),a=c(7),n=c(3),s=c(31),o=c(43);const l=(e,t)=>{const c=e.find(e=>{let{id:c}=e;return c===t});return c?c.quantity:0},i=e=>{const{addItemToCart:t}=Object(a.useDispatch)(n.CART_STORE_KEY),{cartItems:c,cartIsLoading:i}=Object(o.a)(),{createErrorNotice:u,removeNotice:d}=Object(a.useDispatch)("core/notices"),[b,m]=Object(r.useState)(!1),p=Object(r.useRef)(l(c,e));return Object(r.useEffect)(()=>{const t=l(c,e);t!==p.current&&(p.current=t)},[c,e]),{cartQuantity:Number.isFinite(p.current)?p.current:0,addingToCart:b,cartIsLoading:i,addToCart:function(){let c=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return m(!0),t(e,c).then(()=>{d("add-to-cart")}).catch(e=>{u(Object(s.decodeEntities)(e.message),{id:"add-to-cart",context:"wc/all-products",isDismissible:!0})}).finally(()=>{m(!1)})}}}},499:function(e,t,c){"use strict";c.r(t);var r=c(0),a=c(43),n=c(52),s=c(351),o=c(353),l=c(380),i=c(325),u=c(379),d=c(381),b=c(374),m=e=>{let{product:t}=e;return Object(r.createElement)("div",{className:"cross-sells-product"},Object(r.createElement)(n.InnerBlockLayoutContextProvider,{parentName:"woocommerce/cart-cross-sells-block",parentClassName:"wp-block-cart-cross-sells-product"},Object(r.createElement)(n.ProductDataContextProvider,{isLoading:!1,product:t},Object(r.createElement)("div",null,Object(r.createElement)(s.a,{className:"",showSaleBadge:!1,productId:t.id,showProductLink:!1,saleBadgeAlign:"left",imageSizing:"full-size",isDescendentOfQueryLoop:!1}),Object(r.createElement)(o.a,{align:"",headingLevel:2,showProductLink:!0}),Object(r.createElement)(l.Block,null),Object(r.createElement)(i.Block,{productId:t.id,align:"left"}),Object(r.createElement)(u.Block,null)),t.is_in_stock?Object(r.createElement)(b.a,null):Object(r.createElement)(d.Block,null))))},p=e=>{let{products:t,columns:c}=e;const a=t.map((e,t)=>t>=c?null:Object(r.createElement)(m,{isLoading:!1,product:e,key:e.id}));return Object(r.createElement)("div",null,a)},O=c(163);t.default=e=>{let{className:t,columns:c}=e;const{crossSellsProducts:n}=Object(a.a)();return void 0===c&&(c=O.attributes.columns.default),Object(r.createElement)(p,{className:t,columns:c,products:n})}}}]);