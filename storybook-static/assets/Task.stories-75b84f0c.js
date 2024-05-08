import{r as A}from"./index-8b3efc3f.js";import{P as i}from"./index-8d47fad6.js";var b={exports:{}},p={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E=A,j=Symbol.for("react.element"),N=Symbol.for("react.fragment"),R=Object.prototype.hasOwnProperty,I=E.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,O={key:!0,ref:!0,__self:!0,__source:!0};function S(t,e,n){var s,o={},d=null,m=null;n!==void 0&&(d=""+n),e.key!==void 0&&(d=""+e.key),e.ref!==void 0&&(m=e.ref);for(s in e)R.call(e,s)&&!O.hasOwnProperty(s)&&(o[s]=e[s]);if(t&&t.defaultProps)for(s in e=t.defaultProps,e)o[s]===void 0&&(o[s]=e[s]);return{$$typeof:j,type:t,key:d,ref:m,props:o,_owner:I.current}}p.Fragment=N;p.jsx=S;p.jsxs=S;b.exports=p;var r=b.exports;function u({task:{id:t,title:e,state:n},onArchiveTask:s,onPinTask:o}){return r.jsxs("div",{className:`list-item ${n}`,children:[r.jsxs("label",{htmlFor:"checked","aria-label":`archiveTask-${t}`,className:"checkbox",children:[r.jsx("input",{type:"checkbox",disabled:!0,name:"checked",id:`archiveTask-${t}`,checked:n==="TASK_ARCHIVED"}),r.jsx("span",{className:"checkbox-custom",onClick:()=>s(t)})]}),r.jsx("label",{htmlFor:"title","aria-label":e,className:"title",children:r.jsx("input",{type:"text",value:e,readOnly:!0,name:"title",placeholder:"Input title"})}),n!=="TASK_ARCHIVED"&&r.jsx("button",{className:"pin-button",onClick:()=>o(t),id:`pinTask-${t}`,"aria-label":`pinTask-${t}`,children:r.jsx("span",{className:"icon-star"})},`pinTask-${t}`)]})}u.propTypes={task:i.shape({id:i.string.isRequired,title:i.string.isRequired,state:i.string.isRequired}),onArchiveTask:i.func,onPinTask:i.func};u.__docgenInfo={description:"",methods:[],displayName:"Task",props:{task:{description:"Composition of the task",type:{name:"shape",value:{id:{name:"string",description:"Id of the task",required:!0},title:{name:"string",description:"Title of the task",required:!0},state:{name:"string",description:"Current state of the task",required:!0}}},required:!1},onArchiveTask:{description:"Event to change the task to archived",type:{name:"func"},required:!1},onPinTask:{description:"Event to change the task to pinned",type:{name:"func"},required:!1}}};const D={component:u,title:"Task",tags:["autodocs"]},a={args:{task:{id:"1",title:"Test Task",state:"TASK_INBOX"}}},c={args:{task:{...a.args.task,state:"TASK_PINNED"}}},l={args:{task:{...a.args.task,state:"TASK_ARCHIVED"}}};var k,f,_;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    task: {
      id: "1",
      title: "Test Task",
      state: "TASK_INBOX"
    }
  }
}`,...(_=(f=a.parameters)==null?void 0:f.docs)==null?void 0:_.source}}};var h,T,g;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: "TASK_PINNED"
    }
  }
}`,...(g=(T=c.parameters)==null?void 0:T.docs)==null?void 0:g.source}}};var x,v,y;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: "TASK_ARCHIVED"
    }
  }
}`,...(y=(v=l.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};const P=["Default","Pinned","Archived"],$=Object.freeze(Object.defineProperty({__proto__:null,Archived:l,Default:a,Pinned:c,__namedExportsOrder:P,default:D},Symbol.toStringTag,{value:"Module"}));export{a as D,u as T,$ as a,r as j};
