"use strict";(self["webpackChunkjanereka_ryru"]=self["webpackChunkjanereka_ryru"]||[]).push([[645],{5645:(t,s,a)=>{a.r(s),a.d(s,{default:()=>w});var e=a(3673),r=a(2323),i=a(8880);const n={class:"tags-form"},o={for:"tags"},g={class:"row bg-grey-3"},l=["onClick"],d={class:"text-caption"},u={style:{"font-family":"inherit","margin-top":"0"}};function p(t,s,a,p,m,h){const c=(0,e.up)("q-btn"),T=(0,e.up)("q-input");return(0,e.wg)(),(0,e.iD)("div",n,[(0,e._)("label",o,(0,r.zw)(t.$t("submission.formFieldLabelHashtags")),1),(0,e._)("div",g,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(m.tags,(t=>((0,e.wg)(),(0,e.iD)("div",{key:t,class:"cursor-pointer text-caption bg-grey-5 q-ma-xs q-pr-sm",onClick:s=>h.clearTag(t)},[(0,e.Wm)(c,{flat:"",dense:"",round:"",size:"xs",label:"x",class:"no-padding"}),(0,e._)("i",null,(0,r.zw)(t),1)],8,l)))),128))]),(0,e.Wm)(T,{dense:"",borderless:"",id:"tags",ref:"tagsForm","bg-color":"grey-3","input-class":"tags-input q-pl-md",modelValue:m.tagsText,"onUpdate:modelValue":s[0]||(s[0]=t=>m.tagsText=t),"lazy-rules":!0,rules:[h.hasOneTagAtLeast],onInput:s[1]||(s[1]=t=>h.parseTags()),onBlur:s[2]||(s[2]=t=>h.addLastTag()),onKeydown:s[3]||(s[3]=(0,i.D2)((0,i.iM)((t=>h.addLastTag()),["prevent"]),["enter"]))},null,8,["modelValue","rules"]),(0,e._)("span",d,[(0,e._)("i",null,[(0,e._)("pre",u,(0,r.zw)(t.$t("submission.formFieldHintHastags")),1)])])])}a(71),a(6801);const m={name:"TagsFormInput",props:{tagsFromProps:{type:Set,required:!1}},data(){return{tags:new Set,tagsText:""}},mounted(){this.tagsFromProps&&this.tagsFromProps.forEach((t=>this.tags.add(t))),this.tagsText=" "},methods:{parseTags(){const t=this.tagsText.split(",");t.length>1&&(this.tags.add(t[0].trim().toLowerCase()),t.splice(0,1),this.tagsText=t.join("").trim().toLowerCase(),this.$emit("parsedTags",this.tags))},addLastTag(){this.tagsText.trim().length>0&&(this.tags.add(this.tagsText.trim().toLowerCase()),this.tagsText="",this.$emit("parsedTags",this.tags))},clearTag(t){this.tagsText=" ",this.tags.delete(t),this.tagsText="",this.$refs.tagsForm.validate(),this.$emit("parsedTags",this.tags)},hasOneTagAtLeast(){return this.tags.size>=1||this.$t("submission.formValidationTagsNumber")}}};var h=a(4260),c=a(8240),T=a(4689),f=a(7518),x=a.n(f);const b=(0,h.Z)(m,[["render",p],["__scopeId","data-v-dcfb452a"]]),w=b;x()(m,"components",{QBtn:c.Z,QInput:T.Z})}}]);