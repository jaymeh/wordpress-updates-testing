(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[22],{114:function(e,t,n){"use strict";var c=n(15),a=n.n(c),o=n(0),r=n(150),l=n(6),s=n.n(l);n(214);const i=e=>({thousandSeparator:null==e?void 0:e.thousandSeparator,decimalSeparator:null==e?void 0:e.decimalSeparator,decimalScale:null==e?void 0:e.minorUnit,fixedDecimalScale:!0,prefix:null==e?void 0:e.prefix,suffix:null==e?void 0:e.suffix,isNumericString:!0});t.a=e=>{let{className:t,value:n,currency:c,onValueChange:l,displayType:u="text",...m}=e;const p="string"==typeof n?parseInt(n,10):n;if(!Number.isFinite(p))return null;const b=p/10**c.minorUnit;if(!Number.isFinite(b))return null;const d=s()("wc-block-formatted-money-amount","wc-block-components-formatted-money-amount",t),f={...m,...i(c),value:void 0,currency:void 0,onValueChange:void 0},v=l?e=>{const t=+e.value*10**c.minorUnit;l(t)}:()=>{};return Object(o.createElement)(r.a,a()({className:d,displayType:u},f,{value:b,onValueChange:v}))}},214:function(e,t){},367:function(e,t){},438:function(e,t,n){"use strict";var c=n(0),a=n(1),o=n(6),r=n.n(o),l=n(114),s=n(11),i=n(43),u=n(2),m=n(44);n(367),t.a=e=>{let{currency:t,values:n,className:o}=e;const p=Object(u.getSetting)("taxesEnabled",!0)&&Object(u.getSetting)("displayCartPricesIncludingTax",!1),{total_price:b,total_tax:d,tax_lines:f}=n,{receiveCart:v,...j}=Object(i.a)(),O=Object(s.__experimentalApplyCheckoutFilter)({filterName:"totalLabel",defaultValue:Object(a.__)("Total","woocommerce"),extensions:j.extensions,arg:{cart:j}}),x=parseInt(d,10),g=f&&f.length>0?Object(a.sprintf)(
/* translators: %s is a list of tax rates */
Object(a.__)("Including %s","woocommerce"),f.map(e=>{let{name:n,price:c}=e;return`${Object(m.formatPrice)(c,t)} ${n}`}).join(", ")):Object(a.__)("Including <TaxAmount/> in taxes","woocommerce");return Object(c.createElement)(s.TotalsItem,{className:r()("wc-block-components-totals-footer-item",o),currency:t,label:O,value:parseInt(b,10),description:p&&0!==x&&Object(c.createElement)("p",{className:"wc-block-components-totals-footer-item-tax"},Object(c.createInterpolateElement)(g,{TaxAmount:Object(c.createElement)(l.a,{className:"wc-block-components-totals-footer-item-tax-value",currency:t,value:x})}))})}},516:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(438),o=n(44),r=n(43),l=n(11);const s=()=>{const{extensions:e,receiveCart:t,...n}=Object(r.a)(),a={extensions:e,cart:n,context:"woocommerce/cart"};return Object(c.createElement)(l.ExperimentalOrderMeta.Slot,a)};t.default=e=>{let{children:t,className:n=""}=e;const{cartTotals:l}=Object(r.a)(),i=Object(o.getCurrencyFromPriceResponse)(l);return Object(c.createElement)("div",{className:n},t,Object(c.createElement)("div",{className:"wc-block-components-totals-wrapper"},Object(c.createElement)(a.a,{currency:i,values:l})),Object(c.createElement)(s,null))}}}]);