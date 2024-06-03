import{z as le,d as O,I as Re,E as W,N as $e,s as A,b as D,o as K,g as j,f as x,J as ke,n as q,c as te,w as v,e as a,aQ as Ge,h as Te,K as Ke,aE as Ee,Q as Ve,P as Ue,aR as De,aS as Fe,q as ae,r as _,X as se,W as H,aC as Ie,af as He,x as Be,y as Z,aN as pe,al as We,D as je,V as ne,a4 as qe,aO as Ze,aP as Me,ac as Je,ad as Ye,t as ee,a as N,u as ye,_ as he,aT as Qe,aU as Xe,aV as eo,aW as oo,aX as no,aY as to,aZ as ao,a_ as co,a$ as ro,B as io,a0 as uo,b0 as Pe,b1 as xe,b2 as lo,b3 as so}from"./index-DSC3Ms3s.js";import{F as yo,a as ho}from"./index-DP1lsub_.js";import{S as fo}from"./index-DYJE_-5E.js";import{u as Co,M as vo,D as zo}from"./index-C9PAZute.js";import{a as fe,M as U,I as mo,b as po,c as bo}from"./index-Cl0MKicR.js";import{S as go,C as _o}from"./index-Dx-HpozK.js";import"./keyboard-DIWrcbmK.js";const So=({direction:e,type:n,offset:o})=>e==="vertical"?{transform:`translateY(${-o}px)`}:{transform:`translateX(${-o}px)`},Ce=Symbol("ArcoTabs"),wo=O({name:"TabsTab",components:{IconHover:fe,IconClose:Re},props:{tab:{type:Object,required:!0},active:Boolean,editable:Boolean},emits:["click","delete"],setup(e,{emit:n}){const o=W("tabs-tab"),r=$e(Ce,{}),i=l=>{e.tab.disabled||n("click",e.tab.key,l)},u=l=>{l.key==="Enter"&&i(l)},t=A(()=>Object.assign(r.trigger==="click"?{onClick:i}:{onMouseover:i},{onKeydown:u})),c=l=>{e.tab.disabled||n("delete",e.tab.key,l)},y=A(()=>[o,{[`${o}-active`]:e.active,[`${o}-closable`]:e.editable&&e.tab.closable,[`${o}-disabled`]:e.tab.disabled}]);return{prefixCls:o,cls:y,eventHandlers:t,handleDelete:c}}});function Ao(e,n,o,r,i,u){const t=D("icon-close"),c=D("icon-hover");return K(),j("div",Ke({tabindex:"0",class:e.cls},e.eventHandlers),[x("span",{class:q(`${e.prefixCls}-title`)},[ke(e.$slots,"default")],2),e.editable&&e.tab.closable?(K(),te(c,{key:0,class:q(`${e.prefixCls}-close-btn`),onClick:Ge(e.handleDelete,["stop"])},{default:v(()=>[a(t)]),_:1},8,["class","onClick"])):Te("v-if",!0)],16)}var $o=le(wo,[["render",Ao]]);function ko(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!Ee(e)}var be=O({name:"TabsButton",props:{type:{type:String,default:"next"},direction:{type:String,default:"horizontal"},disabled:{type:Boolean,default:!1},onClick:{type:Function}},emits:["click"],setup(e,{emit:n}){const o=W("tabs-nav-button"),r=t=>{e.disabled||n("click",e.type,t)},i=()=>e.direction==="horizontal"?e.type==="next"?a(Ve,null,null):a(Ue,null,null):e.type==="next"?a(De,null,null):a(Fe,null,null),u=A(()=>[o,{[`${o}-disabled`]:e.disabled,[`${o}-left`]:e.direction==="horizontal"&&e.type==="previous",[`${o}-right`]:e.direction==="horizontal"&&e.type==="next",[`${o}-up`]:e.direction==="vertical"&&e.type==="previous",[`${o}-down`]:e.direction==="vertical"&&e.type==="next"}]);return()=>{let t;return a("div",{class:u.value,onClick:r},[a(fe,{disabled:e.disabled},ko(t=i())?t:{default:()=>[t]})])}}});const To=O({name:"TabsNavInk",props:{activeTabRef:{type:Object},direction:{type:String},disabled:Boolean,animation:Boolean},setup(e){const{activeTabRef:n}=ae(e),o=W("tabs-nav-ink"),r=_(0),i=_(0),u=A(()=>e.direction==="vertical"?{top:`${r.value}px`,height:`${i.value}px`}:{left:`${r.value}px`,width:`${i.value}px`}),t=()=>{if(n.value){const y=e.direction==="vertical"?n.value.offsetTop:n.value.offsetLeft,l=e.direction==="vertical"?n.value.offsetHeight:n.value.offsetWidth;(y!==r.value||l!==i.value)&&(r.value=y,i.value=l)}};se(()=>{H(()=>t())}),Ie(()=>{t()});const c=A(()=>[o,{[`${o}-animation`]:e.animation,[`${o}-disabled`]:e.disabled}]);return{prefixCls:o,cls:c,style:u}}});function Io(e,n,o,r,i,u){return K(),j("div",{class:q(e.cls),style:He(e.style)},null,6)}var Bo=le(To,[["render",Io]]),Mo=O({name:"TabsNav",props:{tabs:{type:Array,required:!0},direction:{type:String,required:!0},type:{type:String,required:!0},activeKey:{type:[String,Number]},activeIndex:{type:Number,required:!0},position:{type:String,required:!0},size:{type:String,required:!0},showAddButton:{type:Boolean,default:!1},editable:{type:Boolean,default:!1},animation:{type:Boolean,required:!0},headerPadding:{type:Boolean,default:!0}},emits:["click","add","delete"],setup(e,{emit:n,slots:o}){const{tabs:r,activeKey:i,activeIndex:u,direction:t}=ae(e),c=W("tabs-nav"),y=_(),l=_(),S=_({}),p=A(()=>{if(!Be(i.value))return S.value[i.value]}),$=_(),w=A(()=>e.editable&&["line","card","card-gutter"].includes(e.type)),b=_(!1),m=_(0),h=_(0),k=_([]),C=_(0),T=()=>{var f,g,F;return(F=t.value==="vertical"?(f=y.value)==null?void 0:f.offsetHeight:(g=y.value)==null?void 0:g.offsetWidth)!=null?F:0},L=()=>!l.value||!y.value?0:t.value==="vertical"?l.value.offsetHeight-y.value.offsetHeight:l.value.offsetWidth-y.value.offsetWidth,R=()=>r.value.map(f=>{const g=S.value[f.key];return t.value==="vertical"?g.offsetTop+g.offsetHeight:g.offsetLeft+g.offsetWidth}),M=()=>{b.value=E(),b.value?(m.value=T(),h.value=L(),k.value=R(),C.value>h.value&&(C.value=h.value)):C.value=0},E=()=>y.value&&l.value?e.direction==="vertical"?l.value.offsetHeight>y.value.offsetHeight:l.value.offsetWidth>y.value.offsetWidth:!1,P=f=>{var g;return((g=k.value[f-1])!=null?g:0)>=C.value&&k.value[f]<=C.value+m.value},G=f=>y.value?f==="previous"?C.value-m.value:C.value+m.value:0,s=f=>!y.value||!l.value||f<0?0:f>h.value?h.value:f,d=(f,g)=>{n("click",f,g)},z=(f,g)=>{n("delete",f,g)},V=f=>{C.value=s(G(f))},ce=()=>{M(),$.value&&$.value.$forceUpdate()};Z(r,()=>{H(()=>{M()})}),Z(u,(f,g)=>{H(()=>{var F;if(b.value)if(f>=g){const B=f<k.value.length-1?f+1:f;P(B)||(C.value=k.value[B]-m.value)}else{const B=f>0?f-1:f;P(B)||(C.value=(F=k.value[B-1])!=null?F:0)}})}),se(()=>{M()});const J=()=>!w.value||!e.showAddButton?null:a("div",{class:`${c}-add-btn`,onClick:f=>n("add",f)},[a(fe,null,{default:()=>[a(We,null,null)]})]),re=A(()=>[c,`${c}-${e.direction}`,`${c}-${e.position}`,`${c}-size-${e.size}`,`${c}-type-${e.type}`]),Y=A(()=>[`${c}-tab-list`,{[`${c}-tab-list-no-padding`]:!e.headerPadding&&["line","text"].includes(e.type)&&e.direction==="horizontal"}]),de=A(()=>So({direction:e.direction,type:e.type,offset:C.value})),I=A(()=>[`${c}-tab`,{[`${c}-tab-scroll`]:b.value}]);return()=>{var f;return a("div",{class:re.value},[b.value&&a(be,{type:"previous",direction:e.direction,disabled:C.value<=0,onClick:V},null),a(pe,{onResize:()=>M()},{default:()=>[a("div",{class:I.value,ref:y},[a(pe,{onResize:ce},{default:()=>[a("div",{ref:l,class:Y.value,style:de.value},[e.tabs.map((g,F)=>a($o,{key:g.key,ref:B=>{B!=null&&B.$el&&(S.value[g.key]=B.$el)},active:g.key===i.value,tab:g,editable:e.editable,onClick:d,onDelete:z},{default:()=>{var B,ze,me;return[(me=(ze=(B=g.slots).title)==null?void 0:ze.call(B))!=null?me:g.title]}})),e.type==="line"&&p.value&&a(Bo,{ref:$,activeTabRef:p.value,direction:e.direction,disabled:!1,animation:e.animation},null)])]}),!b.value&&J()])]}),b.value&&a(be,{type:"next",direction:e.direction,disabled:C.value>=h.value,onClick:V},null),a("div",{class:`${c}-extra`},[b.value&&J(),(f=o.extra)==null?void 0:f.call(o)])])}}}),ie=O({name:"Tabs",props:{activeKey:{type:[String,Number],default:void 0},defaultActiveKey:{type:[String,Number],default:void 0},position:{type:String,default:"top"},size:{type:String},type:{type:String,default:"line"},direction:{type:String,default:"horizontal"},editable:{type:Boolean,default:!1},showAddButton:{type:Boolean,default:!1},destroyOnHide:{type:Boolean,default:!1},lazyLoad:{type:Boolean,default:!1},justify:{type:Boolean,default:!1},animation:{type:Boolean,default:!1},headerPadding:{type:Boolean,default:!0},autoSwitch:{type:Boolean,default:!1},hideContent:{type:Boolean,default:!1},trigger:{type:String,default:"click"}},emits:{"update:activeKey":e=>!0,change:e=>!0,tabClick:(e,n)=>!0,add:e=>!0,delete:(e,n)=>!0},setup(e,{emit:n,slots:o}){const{size:r,lazyLoad:i,destroyOnHide:u,trigger:t}=ae(e),c=W("tabs"),{mergedSize:y}=je(r),l=A(()=>e.direction==="vertical"?"left":e.position),S=A(()=>["left","right"].includes(l.value)?"vertical":"horizontal"),{children:p,components:$}=Co("TabPane"),w=ne(new Map),b=A(()=>{const d=[];return $.value.forEach(z=>{const V=w.get(z);V&&d.push(V)}),d}),m=A(()=>b.value.map(d=>d.key)),h=(d,z)=>{w.set(d,z)},k=d=>{w.delete(d)},C=_(e.defaultActiveKey),T=A(()=>{var d;const z=(d=e.activeKey)!=null?d:C.value;return Be(z)?m.value[0]:z}),L=A(()=>{const d=m.value.indexOf(T.value);return d===-1?0:d});qe(Ce,ne({lazyLoad:i,destroyOnHide:u,activeKey:T,addItem:h,removeItem:k,trigger:t}));const R=d=>{d!==T.value&&(C.value=d,n("update:activeKey",d),n("change",d))},M=(d,z)=>{R(d),n("tabClick",d,z)},E=d=>{n("add",d),e.autoSwitch&&H(()=>{const z=m.value[m.value.length-1];R(z)})},P=(d,z)=>{n("delete",d,z)},G=()=>a("div",{class:[`${c}-content`,{[`${c}-content-hide`]:e.hideContent}]},[a("div",{class:[`${c}-content-list`,{[`${c}-content-animation`]:e.animation}],style:{marginLeft:`-${L.value*100}%`}},[p.value])]),s=A(()=>[c,`${c}-${S.value}`,`${c}-${l.value}`,`${c}-type-${e.type}`,`${c}-size-${y.value}`,{[`${c}-justify`]:e.justify}]);return()=>{var d;return p.value=(d=o.default)==null?void 0:d.call(o),a("div",{class:s.value},[l.value==="bottom"&&G(),a(Mo,{tabs:b.value,activeKey:T.value,activeIndex:L.value,direction:S.value,position:l.value,editable:e.editable,animation:e.animation,showAddButton:e.showAddButton,headerPadding:e.headerPadding,size:y.value,type:e.type,onClick:M,onAdd:E,onDelete:P},{extra:o.extra}),l.value!=="bottom"&&G()])}}}),Po=Object.defineProperty,ge=Object.getOwnPropertySymbols,xo=Object.prototype.hasOwnProperty,No=Object.prototype.propertyIsEnumerable,_e=(e,n,o)=>n in e?Po(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,Oo=(e,n)=>{for(var o in n||(n={}))xo.call(n,o)&&_e(e,o,n[o]);if(ge)for(var o of ge(n))No.call(n,o)&&_e(e,o,n[o]);return e};const Lo=O({name:"TabPane",props:{title:String,disabled:{type:Boolean,default:!1},closable:{type:Boolean,default:!0},destroyOnHide:{type:Boolean,default:!1}},setup(e,{slots:n}){var o;const{title:r,disabled:i,closable:u}=ae(e),t=Me(),c=W("tabs"),y=$e(Ce,{}),l=_(),S=A(()=>t==null?void 0:t.vnode.key),p=A(()=>S.value===y.activeKey),$=_(y.lazyLoad?p.value:!0),w=ne({key:S,title:r,disabled:i,closable:u,slots:n});return t!=null&&t.uid&&((o=y.addItem)==null||o.call(y,t.uid,w)),Ze(()=>{var b;t!=null&&t.uid&&((b=y.removeItem)==null||b.call(y,t.uid))}),Z(p,b=>{b?$.value||($.value=!0):(e.destroyOnHide||y.destroyOnHide)&&($.value=!1)}),Ie(()=>{w.slots=Oo({},n)}),{prefixCls:c,active:p,itemRef:l,mounted:$}}});function Ro(e,n,o,r,i,u){return K(),j("div",{ref:"itemRef",class:q([`${e.prefixCls}-content-item`,{[`${e.prefixCls}-content-item-active`]:e.active}])},[e.mounted?(K(),j("div",{key:0,class:q(`${e.prefixCls}-pane`)},[ke(e.$slots,"default")],2)):Te("v-if",!0)],2)}var oe=le(Lo,[["render",Ro]]);const Go=Object.assign(ie,{TabPane:oe,install:(e,n)=>{Je(e,n);const o=Ye(n);e.component(o+ie.name,ie),e.component(o+oe.name,oe)}}),Se=[{en:"Afghanistan",zh:"阿富汗",countryCode:"AF",code:"93"},{en:"Alaska",zh:"阿拉斯加",countryCode:"US",code:"1907"},{en:"Albania",zh:"阿尔巴尼亚",countryCode:"AL",code:"355"},{en:"Algeria",zh:"阿尔及利亚",countryCode:"DZ",code:"213"},{en:"American Samoa",zh:"美属萨摩亚",countryCode:"AS",code:"1684"},{en:"Andorra",zh:"安道尔",countryCode:"AD",code:"376"},{en:"Angola",zh:"安哥拉",countryCode:"AO",code:"244"},{en:"Anguilla",zh:"安圭拉",countryCode:"AI",code:"1264"},{en:"Antigua and Barbuda",zh:"安提瓜和巴布达",countryCode:"AG",code:"1268"},{en:"Argentina",zh:"阿根廷",countryCode:"AR",code:"54"},{en:"Armenia",zh:"亚美尼亚",countryCode:"AM",code:"374"},{en:"Aruba",zh:"阿鲁巴",countryCode:"AW",code:"297"},{en:"Ascension",zh:"阿森松",countryCode:"SH",code:"247"},{en:"Australia",zh:"澳大利亚",countryCode:"AU",code:"61"},{en:"Austria",zh:"奥地利",countryCode:"AT",code:"43"},{en:"Azerbaijan",zh:"阿塞拜疆",countryCode:"AZ",code:"994"},{en:"Bahamas",zh:"巴哈马",countryCode:"BS",code:"1242"},{en:"Bahrain",zh:"巴林",countryCode:"BH",code:"973"},{en:"Bangladesh",zh:"孟加拉国",countryCode:"BD",code:"880"},{en:"Barbados",zh:"巴巴多斯",countryCode:"BB",code:"1246"},{en:"Belarus",zh:"白俄罗斯",countryCode:"BY",code:"375"},{en:"Belgium",zh:"比利时",countryCode:"BE",code:"32"},{en:"Belize",zh:"伯利兹",countryCode:"BZ",code:"501"},{en:"Benin",zh:"贝宁",countryCode:"BJ",code:"229"},{en:"Bermuda",zh:"百慕大群岛",countryCode:"BM",code:"1441"},{en:"Bhutan",zh:"不丹",countryCode:"BT",code:"975"},{en:"Bolivia",zh:"玻利维亚",countryCode:"BO",code:"591"},{en:"Bosnia and Herzegovina",zh:"波斯尼亚和黑塞哥维那",countryCode:"BA",code:"387"},{en:"Botswana",zh:"博茨瓦纳",countryCode:"BW",code:"267"},{en:"Brazil",zh:"巴西",countryCode:"BR",code:"55"},{en:"Brunei",zh:"文莱",countryCode:"BN",code:"673"},{en:"Bulgaria",zh:"保加利亚",countryCode:"BG",code:"359"},{en:"Burkina Faso",zh:"布基纳法索",countryCode:"BF",code:"226"},{en:"Burundi",zh:"布隆迪",countryCode:"BI",code:"257"},{en:"Cambodia",zh:"柬埔寨",countryCode:"KH",code:"855"},{en:"Cameroon",zh:"喀麦隆",countryCode:"CM",code:"237"},{en:"Islas Canarias",zh:"加那利群岛",countryCode:"ES",code:"34"},{en:"Cape Verde",zh:"开普",countryCode:"CV",code:"238"},{en:"Cayman Islands",zh:"开曼群岛",countryCode:"KY",code:"1345"},{en:"Central African Republic",zh:"中非共和国",countryCode:"CF",code:"236"},{en:"Chad",zh:"乍得",countryCode:"TD",code:"235"},{en:"China",zh:"中国",countryCode:"CN",code:"86"},{en:"Chile",zh:"智利",countryCode:"CL",code:"56"},{en:"Christmas Island",zh:"圣诞岛",countryCode:"CX",code:"0061 9164"},{en:"Cocos Island",zh:"科科斯岛",countryCode:"CC",code:"0061 9162"},{en:"Colombia",zh:"哥伦比亚",countryCode:"CO",code:"57"},{en:"Dominican Republic",zh:"多米尼加共和国",countryCode:"DO",code:"1809"},{en:"Comoros",zh:"科摩罗",countryCode:"KM",code:"269"},{en:"Republic Of The Congo",zh:"刚果共和国",countryCode:"CG",code:"242"},{en:"Cook Islands",zh:"库克群岛",countryCode:"CK",code:"682"},{en:"Costa Rica",zh:"哥斯达黎加",countryCode:"CR",code:"506"},{en:"Croatia",zh:"克罗地亚",countryCode:"HR",code:"385"},{en:"Cuba",zh:"古巴",countryCode:"CU",code:"53"},{en:"Curacao",zh:"库拉索",countryCode:"CW",code:"599"},{en:"Cyprus",zh:"塞浦路斯",countryCode:"CY",code:"357"},{en:"Czech",zh:"捷克",countryCode:"CZ",code:"420"},{en:"Denmark",zh:"丹麦",countryCode:"DK",code:"45"},{en:"Djibouti",zh:"吉布提",countryCode:"DJ",code:"253"},{en:"Dominica",zh:"多米尼加",countryCode:"DM",code:"1767"},{en:"Dominican Republic",zh:"多米尼加共和国",countryCode:"DO",code:"1809"},{en:"Ecuador",zh:"厄瓜多尔",countryCode:"EC",code:"593"},{en:"Egypt",zh:"埃及",countryCode:"EG",code:"20"},{en:"El Salvador",zh:"萨尔瓦多",countryCode:"SV",code:"503"},{en:"Equatorial Guinea",zh:"赤道几内亚",countryCode:"GQ",code:"240"},{en:"Eritrea",zh:"厄立特里亚",countryCode:"ER",code:"291"},{en:"Estonia",zh:"爱沙尼亚",countryCode:"EE",code:"372"},{en:"Ethiopia",zh:"埃塞俄比亚",countryCode:"ET",code:"251"},{en:"Falkland Islands",zh:"福克兰群岛",countryCode:"FK",code:"500"},{en:"Faroe Islands",zh:"法罗群岛",countryCode:"FO",code:"298"},{en:"Fiji",zh:"斐济",countryCode:"FJ",code:"679"},{en:"Finland",zh:"芬兰",countryCode:"FI",code:"358"},{en:"France",zh:"法国",countryCode:"FR",code:"33"},{en:"French Guiana",zh:"法属圭亚那",countryCode:"GF",code:"594"},{en:"French Polynesia",zh:"法属波利尼西亚",countryCode:"PF",code:"689"},{en:"Gabon",zh:"加蓬",countryCode:"GA",code:"241"},{en:"Gambia",zh:"冈比亚",countryCode:"GM",code:"220"},{en:"Georgia",zh:"格鲁吉亚",countryCode:"GE",code:"995"},{en:"Germany",zh:"德国",countryCode:"DE",code:"49"},{en:"Ghana",zh:"加纳",countryCode:"GH",code:"233"},{en:"Gibraltar",zh:"直布罗陀",countryCode:"GI",code:"350"},{en:"Greece",zh:"希腊",countryCode:"GR",code:"30"},{en:"Greenland",zh:"格陵兰岛",countryCode:"GL",code:"299"},{en:"Grenada",zh:"格林纳达",countryCode:"GD",code:"1473"},{en:"Guadeloupe",zh:"瓜德罗普岛",countryCode:"GP",code:"590"},{en:"Guam",zh:"关岛",countryCode:"GU",code:"1671"},{en:"Guatemala",zh:"瓜地马拉",countryCode:"GT",code:"502"},{en:"Guinea",zh:"几内亚",countryCode:"GN",code:"224"},{en:"Guinea-Bissau",zh:"几内亚比绍共和国",countryCode:"GW",code:"245"},{en:"Guyana",zh:"圭亚那",countryCode:"GY",code:"592"},{en:"Haiti",zh:"海地",countryCode:"HT",code:"509"},{en:"Hawaii",zh:"夏威夷",countryCode:"US",code:"1808"},{en:"Honduras",zh:"洪都拉斯",countryCode:"HN",code:"504"},{en:"Hong Kong",zh:"中国香港",countryCode:"HK",code:"852"},{en:"Hungary",zh:"匈牙利",countryCode:"HU",code:"36"},{en:"Iceland",zh:"冰岛",countryCode:"IS",code:"354"},{en:"India",zh:"印度",countryCode:"IN",code:"91"},{en:"Indonesia",zh:"印度尼西亚",countryCode:"ID",code:"62"},{en:"Iran",zh:"伊朗",countryCode:"IR",code:"98"},{en:"Iraq",zh:"伊拉克",countryCode:"IQ",code:"964"},{en:"Ireland",zh:"爱尔兰",countryCode:"IE",code:"353"},{en:"Israel",zh:"以色列",countryCode:"IL",code:"972"},{en:"Italy",zh:"意大利",countryCode:"IT",code:"39"},{en:"Ivory Coast",zh:"象牙海岸",countryCode:"CI",code:"225"},{en:"Jamaica",zh:"牙买加",countryCode:"JM",code:"1876"},{en:"Japan",zh:"日本",countryCode:"JP",code:"81"},{en:"Jordan",zh:"约旦",countryCode:"JO",code:"962"},{en:"Kazakhstan",zh:"哈萨克斯坦",countryCode:"KZ",code:"7"},{en:"Kenya",zh:"肯尼亚",countryCode:"KE",code:"254"},{en:"Kiribati",zh:"基里巴斯",countryCode:"KI",code:"686"},{en:"Korea Democratic Rep.",zh:"朝鲜",countryCode:"KP",code:"85"},{en:"South Korea",zh:"韩国",countryCode:"KR",code:"82"},{en:"Kuwait",zh:"科威特",countryCode:"KW",code:"965"},{en:"Kyrgyzstan",zh:"吉尔吉斯斯坦",countryCode:"KG",code:"996"},{en:"Laos",zh:"老挝",countryCode:"LA",code:"856"},{en:"Latvia",zh:"拉脱维亚",countryCode:"LV",code:"371"},{en:"Lebanon",zh:"黎巴嫩",countryCode:"LB",code:"961"},{en:"Lesotho",zh:"莱索托",countryCode:"LS",code:"266"},{en:"Liberia",zh:"利比里亚",countryCode:"LR",code:"231"},{en:"Libya",zh:"利比亚",countryCode:"LY",code:"218"},{en:"Liechtenstein",zh:"列支敦士登",countryCode:"LI",code:"423"},{en:"Lithuania",zh:"立陶宛",countryCode:"LT",code:"370"},{en:"Luxembourg",zh:"卢森堡",countryCode:"LU",code:"352"},{en:"Macau",zh:"中国澳门",countryCode:"MO",code:"853"},{en:"Macedonia",zh:"马其顿",countryCode:"MK",code:"389"},{en:"Madagascar",zh:"马达加斯加",countryCode:"MG",code:"261"},{en:"Malawi",zh:"马拉维",countryCode:"MW",code:"265"},{en:"Malaysia",zh:"马来西亚",countryCode:"MY",code:"60"},{en:"Maldives",zh:"马尔代夫",countryCode:"MV",code:"960"},{en:"Mali",zh:"马里",countryCode:"ML",code:"223"},{en:"Malta",zh:"马耳他",countryCode:"MT",code:"356"},{en:"Marshall Islands",zh:"马绍尔群岛",countryCode:"MH",code:"692"},{en:"Martinique",zh:"马提尼克",countryCode:"MQ",code:"596"},{en:"Mauritania",zh:"毛里塔尼亚",countryCode:"MR",code:"222"},{en:"Mauritius",zh:"毛里求斯",countryCode:"MU",code:"230"},{en:"Mayotte",zh:"马约特",countryCode:"YT",code:"269"},{en:"Mexico",zh:"墨西哥",countryCode:"MX",code:"52"},{en:"Micronesia",zh:"密克罗尼西亚",countryCode:"FM",code:"691"},{en:"Moldova",zh:"摩尔多瓦",countryCode:"MD",code:"373"},{en:"Monaco",zh:"摩纳哥",countryCode:"MC",code:"377"},{en:"Mongolia",zh:"蒙古",countryCode:"MN",code:"976"},{en:"Montenegro",zh:"黑山",countryCode:"ME",code:"382"},{en:"Montserrat",zh:"蒙特塞拉特岛",countryCode:"MS",code:"1664"},{en:"Morocco",zh:"摩洛哥",countryCode:"MA",code:"212"},{en:"Mozambique",zh:"莫桑比克",countryCode:"MZ",code:"258"},{en:"Myanmar",zh:"缅甸",countryCode:"MM",code:"95"},{en:"Namibia",zh:"纳米比亚",countryCode:"NA",code:"264"},{en:"Nauru",zh:"拿鲁岛",countryCode:"NR",code:"674"},{en:"Nepal",zh:"尼泊尔",countryCode:"NP",code:"977"},{en:"Netherlands",zh:"荷兰",countryCode:"NL",code:"31"},{en:"New Caledonia",zh:"新喀里多尼亚",countryCode:"NC",code:"687"},{en:"New Zealand",zh:"新西兰",countryCode:"NZ",code:"64"},{en:"Nicaragua",zh:"尼加拉瓜",countryCode:"NI",code:"505"},{en:"Niger",zh:"尼日尔",countryCode:"NE",code:"227"},{en:"Nigeria",zh:"尼日利亚",countryCode:"NG",code:"234"},{en:"Niue Island",zh:"纽埃岛(新)",countryCode:"NU",code:"683"},{en:"Norfolk Island",zh:"诺福克岛(澳)",countryCode:"NF",code:"6723"},{en:"Norway",zh:"挪威",countryCode:"NO",code:"47"},{en:"Oman",zh:"阿曼",countryCode:"OM",code:"968"},{en:"Palau",zh:"帕劳",countryCode:"PW",code:"680"},{en:"Panama",zh:"巴拿马",countryCode:"PA",code:"507"},{en:"Papua New Guinea",zh:"巴布亚新几内亚",countryCode:"PG",code:"675"},{en:"Paraguay",zh:"巴拉圭",countryCode:"PY",code:"595"},{en:"Peru",zh:"秘鲁",countryCode:"PE",code:"51"},{en:"Philippines",zh:"菲律宾",countryCode:"PH",code:"63"},{en:"Poland",zh:"波兰",countryCode:"PL",code:"48"},{en:"Portugal",zh:"葡萄牙",countryCode:"PT",code:"351"},{en:"Pakistan",zh:"巴基斯坦",countryCode:"PK",code:"92"},{en:"Puerto Rico",zh:"波多黎各",countryCode:"PR",code:"1787"},{en:"Qatar",zh:"卡塔尔",countryCode:"QA",code:"974"},{en:"Réunion Island",zh:"留尼汪",countryCode:"RE",code:"262"},{en:"Romania",zh:"罗马尼亚",countryCode:"RO",code:"40"},{en:"Russia",zh:"俄罗斯",countryCode:"RU",code:"7"},{en:"Rwanda",zh:"卢旺达",countryCode:"RW",code:"250"},{en:"Samoa,Eastern",zh:"东萨摩亚(美)",countryCode:"AS",code:"684"},{en:"Samoa",zh:"萨摩亚",countryCode:"WS",code:"685"},{en:"San Marino",zh:"圣马力诺",countryCode:"SM",code:"378"},{en:"Saint Pierre and Miquelon",zh:"圣彼埃尔和密克隆岛",countryCode:"PM",code:"508"},{en:"Sao Tome and Principe",zh:"圣多美和普林西比",countryCode:"ST",code:"239"},{en:"Saudi Arabia",zh:"沙特阿拉伯",countryCode:"SA",code:"966"},{en:"Senegal",zh:"塞内加尔",countryCode:"SN",code:"221"},{en:"Serbia",zh:"塞尔维亚",countryCode:"RS",code:"381"},{en:"Seychelles",zh:"塞舌尔",countryCode:"SC",code:"248"},{en:"Sierra Leone",zh:"塞拉利昂",countryCode:"SL",code:"232"},{en:"Singapore",zh:"新加坡",countryCode:"SG",code:"65"},{en:"Saint Maarten (Dutch Part)",zh:"圣马丁岛（荷兰部分）",countryCode:"SX",code:"1721"},{en:"Slovakia",zh:"斯洛伐克",countryCode:"SK",code:"421"},{en:"Slovenia",zh:"斯洛文尼亚",countryCode:"SI",code:"386"},{en:"Solomon Islands",zh:"所罗门群岛",countryCode:"SB",code:"677"},{en:"Somalia",zh:"索马里",countryCode:"SO",code:"252"},{en:"South Africa",zh:"南非",countryCode:"ZA",code:"27"},{en:"Spain",zh:"西班牙",countryCode:"ES",code:"34"},{en:"Sri Lanka",zh:"斯里兰卡",countryCode:"LK",code:"94"},{en:"St.Helena",zh:"圣赫勒拿",countryCode:"SH",code:"290"},{en:"Saint Lucia",zh:"圣露西亚",countryCode:"LC",code:"1758"},{en:"Saint Vincent and The Grenadines",zh:"圣文森特和格林纳丁斯",countryCode:"VC",code:"1784"},{en:"Sudan",zh:"苏丹",countryCode:"SD",code:"249"},{en:"Suriname",zh:"苏里南",countryCode:"SR",code:"597"},{en:"Swaziland",zh:"斯威士兰",countryCode:"SZ",code:"268"},{en:"Sweden",zh:"瑞典",countryCode:"SE",code:"46"},{en:"Switzerland",zh:"瑞士",countryCode:"CH",code:"41"},{en:"Syria",zh:"叙利亚",countryCode:"SY",code:"963"},{en:"Taiwan",zh:"中国台湾",countryCode:"TW",code:"886"},{en:"Tajikistan",zh:"塔吉克斯坦",countryCode:"TJ",code:"992"},{en:"Tanzania",zh:"坦桑尼亚",countryCode:"TZ",code:"255"},{en:"Thailand",zh:"泰国",countryCode:"TH",code:"66"},{en:"Timor-Leste",zh:"东帝汶",countryCode:"TL",code:"670"},{en:"United Arab Emirates",zh:"阿拉伯联合酋长国",countryCode:"AE",code:"971"},{en:"Togo",zh:"多哥",countryCode:"TG",code:"228"},{en:"Tokelau Is.",zh:"托克劳群岛(新)",countryCode:"TK",code:"690"},{en:"Tonga",zh:"汤加",countryCode:"TO",code:"676"},{en:"Trinidad and Tobago",zh:"特立尼达和多巴哥",countryCode:"TT",code:"1868"},{en:"Tunisia",zh:"突尼斯",countryCode:"TN",code:"216"},{en:"Turkey",zh:"土耳其",countryCode:"TR",code:"90"},{en:"Turkmenistan",zh:"土库曼斯坦",countryCode:"TM",code:"993"},{en:"Turks and Caicos Islands",zh:"特克斯和凯科斯群岛",countryCode:"TC",code:"1649"},{en:"Tuvalu",zh:"图瓦卢",countryCode:"TK",code:"688"},{en:"United States/Canada",zh:"美国/加拿大",countryCode:"US/CA",code:"1"},{en:"Uganda",zh:"乌干达",countryCode:"UG",code:"256"},{en:"Ukraine",zh:"乌克兰",countryCode:"UA",code:"380"},{en:"United Kingdom",zh:"英国",countryCode:"GB",code:"44"},{en:"Uruguay",zh:"乌拉圭",countryCode:"UY",code:"598"},{en:"Uzbekistan",zh:"乌兹别克斯坦",countryCode:"UZ",code:"998"},{en:"Vanuatu",zh:"瓦努阿图",countryCode:"VU",code:"678"},{en:"Venezuela",zh:"委内瑞拉",countryCode:"VE",code:"58"},{en:"Vietnam",zh:"越南",countryCode:"VN",code:"84"},{en:"Virgin Islands, British",zh:"英属处女群岛",countryCode:"VG",code:"1340"},{en:"Virgin Islands, US",zh:"美属维尔京群岛",countryCode:"VI",code:"1284"},{en:"Wake I.",zh:"威克岛(美)",countryCode:"UM",code:"1808"},{en:"Yemen",zh:"也门",countryCode:"YE",code:"967"},{en:"Zambia",zh:"赞比亚",countryCode:"ZM",code:"260"},{en:"Zanzibar",zh:"桑给巴尔",countryCode:"TZ",code:"259"},{en:"Zimbabwe",zh:"津巴布韦",countryCode:"ZW",code:"263"}],Ko=O({__name:"index",setup(e){Se.sort((r,i)=>Number(r.code)-Number(i.code));const n=_("86"),o={label:"zh",value:"code"};return(r,i)=>{const u=go;return K(),te(u,{modelValue:n.value,"onUpdate:modelValue":i[0]||(i[0]=t=>n.value=t),style:{width:"85px","padding-right":"6px"},options:ye(Se),"field-names":o,triggerProps:{contentStyle:{width:"200px"}},"unmount-on-close":""},{label:v(({data:t})=>[x("span",null,"+"+ee(t==null?void 0:t.code),1)]),option:v(({data:t})=>[N("+"+ee(t==null?void 0:t.code)+" "+ee(t==null?void 0:t.zh),1)]),_:1},8,["modelValue","options"])}}}),Eo=he(Ko,[["__scopeId","data-v-b995d83f"]]);function Vo(e){return Xe()?(eo(e),!0):!1}function ve(e){return typeof e=="function"?e():ye(e)}const Uo=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Do=Object.prototype.toString,Fo=e=>Do.call(e)==="[object Object]",Ho=()=>{};function Wo(e,n){function o(...r){return new Promise((i,u)=>{Promise.resolve(e(()=>n.apply(this,r),{fn:n,thisArg:this,args:r})).then(i).catch(u)})}return o}const Ne=e=>e();function jo(e=Ne){const n=_(!0);function o(){n.value=!1}function r(){n.value=!0}const i=(...u)=>{n.value&&e(...u)};return{isActive:Qe(n),pause:o,resume:r,eventFilter:i}}function qo(e){return Me()}function Zo(e,n,o={}){const{eventFilter:r=Ne,...i}=o;return Z(e,Wo(r,n),i)}function Jo(e,n,o={}){const{eventFilter:r,...i}=o,{eventFilter:u,pause:t,resume:c,isActive:y}=jo(r);return{stop:Zo(e,n,{...i,eventFilter:u}),pause:t,resume:c,isActive:y}}function Yo(e,n=!0,o){qo()?se(e,o):n?e():H(e)}function Qo(e){var n;const o=ve(e);return(n=o==null?void 0:o.$el)!=null?n:o}const ue=Uo?window:void 0;function we(...e){let n,o,r,i;if(typeof e[0]=="string"||Array.isArray(e[0])?([o,r,i]=e,n=ue):[n,o,r,i]=e,!n)return Ho;Array.isArray(o)||(o=[o]),Array.isArray(r)||(r=[r]);const u=[],t=()=>{u.forEach(S=>S()),u.length=0},c=(S,p,$,w)=>(S.addEventListener(p,$,w),()=>S.removeEventListener(p,$,w)),y=Z(()=>[Qo(n),ve(i)],([S,p])=>{if(t(),!S)return;const $=Fo(p)?{...p}:p;u.push(...o.flatMap(w=>r.map(b=>c(S,w,b,$))))},{immediate:!0,flush:"post"}),l=()=>{y(),t()};return Vo(l),l}const Q=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},X="__vueuse_ssr_handlers__",Xo=en();function en(){return X in Q||(Q[X]=Q[X]||{}),Q[X]}function on(e,n){return Xo[e]||n}function nn(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}const tn={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},Ae="vueuse-storage";function an(e,n,o,r={}){var i;const{flush:u="pre",deep:t=!0,listenToStorageChanges:c=!0,writeDefaults:y=!0,mergeDefaults:l=!1,shallow:S,window:p=ue,eventFilter:$,onError:w=s=>{console.error(s)},initOnMounted:b}=r,m=(S?oo:_)(typeof n=="function"?n():n);if(!o)try{o=on("getDefaultStorage",()=>{var s;return(s=ue)==null?void 0:s.localStorage})()}catch(s){w(s)}if(!o)return m;const h=ve(n),k=nn(h),C=(i=r.serializer)!=null?i:tn[k],{pause:T,resume:L}=Jo(m,()=>M(m.value),{flush:u,deep:t,eventFilter:$});p&&c&&Yo(()=>{we(p,"storage",P),we(p,Ae,G),b&&P()}),b||P();function R(s,d){p&&p.dispatchEvent(new CustomEvent(Ae,{detail:{key:e,oldValue:s,newValue:d,storageArea:o}}))}function M(s){try{const d=o.getItem(e);if(s==null)R(d,null),o.removeItem(e);else{const z=C.write(s);d!==z&&(o.setItem(e,z),R(d,z))}}catch(d){w(d)}}function E(s){const d=s?s.newValue:o.getItem(e);if(d==null)return y&&h!=null&&o.setItem(e,C.write(h)),h;if(!s&&l){const z=C.read(d);return typeof l=="function"?l(z,h):k==="object"&&!Array.isArray(z)?{...h,...z}:z}else return typeof d!="string"?d:C.read(d)}function P(s){if(!(s&&s.storageArea!==o)){if(s&&s.key==null){m.value=h;return}if(!(s&&s.key!==e)){T();try{(s==null?void 0:s.newValue)!==C.write(m.value)&&(m.value=E(s))}catch(d){w(d)}finally{s?H(L):L()}}}}function G(s){P(s.detail)}return m}const cn=x("div",null," You can customize modal body text by the current situation. This modal will be closed immediately once you press the OK button. ",-1),Oe=O({__name:"ModalView",setup(e){const n=_(!1),o=()=>{n.value=!1},r=()=>{n.value=!1};return(i,u)=>{const t=vo;return K(),te(t,{visible:n.value,"onUpdate:visible":u[0]||(u[0]=c=>n.value=c),onCancel:r,onOk:o},{title:v(()=>[N("微信登录")]),default:v(()=>[cn]),_:1},8,["visible"])}}});function rn(e){const n=no(Oe,e),o=document.createElement("div");document.body.append(o),n.mount(o);function r(){n.unmount(),o.remove()}return{close:r}}const Le=e=>(Pe("data-v-3ebb2b57"),e=e(),xe(),e),dn=Le(()=>x("div",{class:"login-form-title"},"欢迎登录",-1)),un={class:"login-form-actions"},ln=Le(()=>x("span",null,"和",-1)),sn=O({__name:"LoginForm",setup(e){const n=to(),o=_(!1),r=_("获取验证码"),i=_(),u=_("1"),t=an("login-config",{rememberPassword:!1,userAccount:"",userPassword:""}),c=ne({userAccount:t.value.userAccount,userPassword:t.value.userPassword,agreement:!0,phone:"",captcha:""}),y={userAccount:[{required:!0,message:"请输入账号/邮箱"}],captcha:[{required:!0,message:"请输入验证码"}],userPassword:[{required:!0,message:"请输入密码"},{match:/^(?![\d]+$)(?![a-z]+$)(?![A-Z]+$)(?![~!@#$%^&*.]+$)[\da-zA-z~!@#$%^&*.]{6,32}$|^11111$/,message:"密码格式不正确"}],phone:[{required:!0,message:"请输入手机号"},{length:11,message:"手机号格式不正确"}]},l=ao(),S=()=>{u.value==="1"&&i.value.validateField(["userAccount","userPassword"]).then(async m=>{var k;if(m)return;if(!c.agreement)return U.info("请阅读并同意服务协议和隐私政策");const h=await co(c);if(h.data.code===0){await l.fetchLoginUser(),ro((k=h.data.saTokenInfo)==null?void 0:k.tokenValue);const{rememberPassword:C}=t.value;t.value.userAccount=C?c.userAccount:"",t.value.userPassword=C?c.userPassword:"",U.success("登录成功！"),n.push({path:"/"})}else U.error("登录失败，"+h.data.message)}),u.value==="2"&&i.value.validateField(["phone","captcha"]).then(m=>{if(!m&&!c.agreement)return U.info("请阅读并同意服务协议和隐私政策")})},p=m=>{t.value.rememberPassword=m},$=async()=>{U.info("功能还在开发，敬请期待！")},w=async()=>{U.info("功能还在开发，敬请期待！")},b=async()=>{U.success("微信登录"),rn({title:"微信登录",getQrcode(){return""}})};return(m,h)=>{const k=D("icon-user"),C=mo,T=yo,L=D("icon-lock"),R=po,M=_o,E=oe,P=Eo,G=bo,s=io,d=Go,z=zo,V=D("icon-qq-circle-fill"),ce=D("icon-wechat"),J=D("icon-github"),re=fo,Y=uo,de=ho;return K(),te(de,{ref_key:"formRef",ref:i,model:c,rules:y,class:"login-form-wrapper",layout:"vertical"},{default:v(()=>[dn,a(d,{"active-key":u.value,"onUpdate:activeKey":h[4]||(h[4]=I=>u.value=I),animation:"",size:"mini"},{default:v(()=>[a(E,{key:"1","destroy-on-hide":"",title:"账号登录"},{default:v(()=>[a(T,{field:"userAccount","hide-label":"","validate-trigger":"blur"},{default:v(()=>[a(C,{modelValue:c.userAccount,"onUpdate:modelValue":h[0]||(h[0]=I=>c.userAccount=I),autocomplete:"userAccount",placeholder:"账号/邮箱"},{prefix:v(()=>[a(k)]),_:1},8,["modelValue"])]),_:1}),a(T,{field:"userPassword","hide-label":"","validate-trigger":"blur"},{default:v(()=>[a(R,{modelValue:c.userPassword,"onUpdate:modelValue":h[1]||(h[1]=I=>c.userPassword=I),"allow-clear":"",autocomplete:"current-password",placeholder:"请输入密码"},{prefix:v(()=>[a(L)]),_:1},8,["modelValue"])]),_:1}),a(M,{"model-value":ye(t).rememberPassword,checked:"rememberPassword",onChange:p},{default:v(()=>[N(" 记住密码 ")]),_:1},8,["model-value"])]),_:1}),a(E,{key:"2","destroy-on-hide":"",title:"手机号登录"},{default:v(()=>[a(T,{field:"phone","hide-label":"","validate-trigger":"blur"},{default:v(()=>[a(G,{style:{width:"320px"}},{default:v(()=>[a(P),a(C,{modelValue:c.phone,"onUpdate:modelValue":h[2]||(h[2]=I=>c.phone=I),"max-length":11,"allow-clear":"",placeholder:"请输入手机号"},null,8,["modelValue"])]),_:1})]),_:1}),a(T,{field:"captcha","hide-label":""},{default:v(()=>[a(G,{style:{width:"320px"}},{default:v(()=>[a(C,{modelValue:c.captcha,"onUpdate:modelValue":h[3]||(h[3]=I=>c.captcha=I),"allow-clear":"",placeholder:"请输入验证码"},null,8,["modelValue"]),a(s,{disabled:o.value,style:{width:"100px"},onClick:$},{default:v(()=>[N(ee(r.value),1)]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1})]),_:1},8,["active-key"]),a(s,{long:"",style:{margin:"32px 0 6px"},type:"primary",onClick:S},{default:v(()=>[N(" 登录")]),_:1}),a(s,{class:"login-form-register-btn",href:"/user/register",long:"",type:"text"},{default:v(()=>[N(" 注册 ")]),_:1}),a(z,{orientation:"center"},{default:v(()=>[N("更多方式")]),_:1}),a(re,{size:2,class:"login-form-more",fill:""},{split:v(()=>[a(z,{direction:"vertical"})]),default:v(()=>[a(V,{onClick:w}),a(ce,{style:{color:"#38ad19",cursor:"pointer"},onClick:b}),a(J,{onClick:w})]),_:1}),x("div",un,[a(M,{modelValue:c.agreement,"onUpdate:modelValue":h[5]||(h[5]=I=>c.agreement=I)},{default:v(()=>[N("我已阅读并同意")]),_:1},8,["modelValue"]),a(Y,{href:"https://blog.cuuxx.com/cc",target:"_blank"},{default:v(()=>[N("版权协议")]),_:1}),ln,a(Y,{href:"https://blog.cuuxx.com/privacy",target:"_blank"},{default:v(()=>[N(" 隐私政策")]),_:1})]),a(Oe)]),_:1},8,["model"])}}}),yn=he(sn,[["__scopeId","data-v-3ebb2b57"]]),hn=e=>(Pe("data-v-fdda0aec"),e=e(),xe(),e),fn={class:"container"},Cn=hn(()=>x("header",{class:"header"},[x("img",{class:"logo",src:lo,style:{height:"55px"}}),x("div",{class:"header-text"},"轻享开放平台")],-1)),vn={class:"content"},zn={class:"footer"},mn=O({__name:"UserLoginPage",setup(e){return(n,o)=>{const r=so;return K(),j("div",fn,[Cn,x("div",vn,[a(yn)]),x("div",zn,[a(r)])])}}}),$n=he(mn,[["__scopeId","data-v-fdda0aec"]]);export{$n as default};
