"use strict";(self["webpackChunkjanereka_ryru"]=self["webpackChunkjanereka_ryru"]||[]).push([[403],{7403:(e,l,i)=>{i.r(l),i.d(l,{default:()=>P});i(246);var a=i(3673),s=i(8880),t=i(2323);const o={class:"row no-wrap q-mr-md full-width items-center"},n={for:"filename",class:"inline-block q-mt-lg"},r={for:"description",class:"inline-block q-mt-lg"},d={class:"row no-wrap q-mt-xl items-center"},m={class:"text-h6"},c=(0,a._)("div",{class:"col-grow q-mx-md bg-black",style:{height:"2px"}},null,-1),u={class:"row justify-around"},p={class:"q-px-lg"},b={for:"authorname",class:"inline-block q-mt-lg"},h={for:"authorname",class:"inline-block q-mt-lg"},f={class:"text-body2"},g={class:"column items-center q-my-xl"},w={slot:"loading"};function F(e,l,i,F,y,q){const k=(0,a.up)("q-btn"),v=(0,a.up)("q-file"),$=(0,a.up)("q-input"),V=(0,a.up)("tags-form-input"),_=(0,a.up)("q-select"),S=(0,a.up)("q-checkbox"),x=(0,a.up)("q-spinner-hourglass"),T=(0,a.up)("q-form");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(T,{ref:"newMidiaForm",class:"constrain q-py-xl",onSubmit:(0,s.iM)(q.submit,["prevent","stop"])},{default:(0,a.w5)((()=>[(0,a._)("div",o,[(0,a.Wm)(k,{unelevated:"","no-wrap":"",color:"primary",size:"1.1em",onClick:l[0]||(l[0]=e=>q.pickFile()),label:e.$t("submission.buttonLabelNewFile")},null,8,["label"]),(0,a.wy)((0,a.Wm)(v,{dense:"",filled:"",id:"filepicker",modelValue:y.newFile,"onUpdate:modelValue":l[1]||(l[1]=e=>y.newFile=e),"label-slot":!y.newFile,accept:"ogg, ogv, avi, mp4, mpeg, webm, jpeg, jpg, png, gif, pdf, ods, odt, odp, mp3",class:"no-pointer-events q-pl-xs q-py-md",ref:"filePicker",onRejected:l[2]||(l[2]=e=>q.alertInvalidFile())},(0,a.Nv)({file:(0,a.w5)((()=>[(0,a._)("i",null,(0,t.zw)(y.newFile.name),1)])),_:2},[y.newFile?void 0:{name:"label",fn:(0,a.w5)((()=>[(0,a._)("i",null,(0,t.zw)(e.$t("submission.formFieldLabelFilepicker")),1)]))}]),1032,["modelValue","label-slot"]),[[s.F8,y.newFile]])]),(0,a._)("label",n,(0,t.zw)(e.$t("submission.formFieldLabelFilename")),1),(0,a.Wm)($,{dense:"",filled:"",id:"filename",modelValue:y.title,"onUpdate:modelValue":l[3]||(l[3]=e=>y.title=e),placeholder:e.$t("submission.formFieldPlaceholderFilename"),rules:[l=>!!l||e.$t("submission.formValidationFieldRequired")]},null,8,["modelValue","placeholder","rules"]),(0,a._)("label",r,(0,t.zw)(e.$t("submission.formFieldLabelDescription")),1),(0,a.Wm)($,{dense:"",filled:"",id:"description",type:"textarea",modelValue:y.description,"onUpdate:modelValue":l[4]||(l[4]=e=>y.description=e),placeholder:e.$t("submission.formFieldPlaceholderDescription"),rules:[l=>!!l||e.$t("submission.formValidationFieldRequired")]},null,8,["modelValue","placeholder","rules"]),(0,a.Wm)(V,{tagsFromProps:y.tags,onParsedTags:l[5]||(l[5]=e=>q.updateTags(e))},null,8,["tagsFromProps"]),(0,a._)("div",d,[(0,a._)("span",m,(0,t.zw)(e.$t("submission.formSectionTitleAuthor")),1),c]),(0,a._)("div",u,[(0,a._)("div",p,[(0,a._)("label",b,(0,t.zw)(e.$t("submission.formFieldLabelAuthorName")),1),(0,a.Wm)($,{dense:"",filled:"",id:"authorname",modelValue:y.authorname,"onUpdate:modelValue":l[6]||(l[6]=e=>y.authorname=e),placeholder:e.$t("submission.formFieldPlaceholderNameAuthor"),rules:[l=>!!l||e.$t("submission.formValidationFieldRequired")]},null,8,["modelValue","placeholder","rules"]),(0,a._)("label",h,(0,t.zw)(e.$t("submission.formFieldLabelAuthorOrigin")),1),(0,a.Wm)(_,{outlined:"",clearable:"",dense:"",filled:"",modelValue:y.aldeiaSelected,"onUpdate:modelValue":l[7]||(l[7]=e=>y.aldeiaSelected=e),options:y.aldeias,"label-slot":!y.aldeiaSelected,rules:[l=>!!l||e.$t("submission.formValidationFieldRequired")],"popup-content-class":"text-weight-medium q-ma-md","popup-content-style":"border: 2px solid black; border-radius: 5px;",color:"black",class:"q-my-sm",style:{"min-width":"250px"}},{selected:(0,a.w5)((()=>[(0,a._)("span",f,(0,t.zw)(y.aldeiaSelected),1)])),_:1},8,["modelValue","options","label-slot","rules"])])]),(0,a.Wm)(S,{dense:"",modelValue:y.acceptTerms,"onUpdate:modelValue":l[8]||(l[8]=e=>y.acceptTerms=e),label:e.$t("submission.formFieldLabelAcceptTerms"),class:"q-mt-lg"},null,8,["modelValue","label"]),(0,a._)("div",g,[(0,a.Wm)(k,{unelevated:"",color:"primary",type:"submit",loading:y.loading,label:e.$t("submission.buttonLabelSend")},{default:(0,a.w5)((()=>[(0,a._)("span",w,[(0,a.Wm)(x)])])),_:1},8,["loading","label"])])])),_:1},8,["onSubmit"])])}i(71);var y=i(1098);const q={name:"CreateMedia",components:{TagsFormInput:()=>i.e(645).then(i.bind(i,5645))},data(){return{mediaManager:y.b.getManager(),newFile:null,title:"",description:"",tags:new Set,authorname:"",aldeiaSelected:"Não pertence a uma aldeia",acceptTerms:!1,loading:!1,aldeias:["Gavião","Itaaka","Janeraka","Kwatinema","Muyryna","Não pertence a uma aldeia"]}},computed:{mediaFileType:function(){let e=null;const l=this.newFile.type;switch(l&&(e=l.split("/")),e[0]){case"audio":e="audio";break;case"image":e="imagem";break;case"video":e="video";break;case"application":e="arquivo";break;default:e=null}return e}},methods:{pickFile(){this.$refs.filePicker.pickFiles(),this.$refs.filePicker.blur()},alertInvalidFile(){this.$q.notify({type:"negative",message:this.$t("submission.alertInvalidFile"),actions:[{icon:"close",color:"white"}]})},updateTags(e){this.tags=e},async submit(){if(this.loading=!0,this.newFile)if(this.acceptTerms){this.mediaManager.makeMediaObject(this.title,this.description,Array.from(this.tags),this.authorname,this.aldeiaSelected,this.newFile,this.mediaFileType);const e=await this.mediaManager.performMediaCreation();e?(this.$q.notify({type:"positive",message:this.$t("submission.alertSubmissionSuccess"),actions:[{icon:"close",color:"white"}]}),this.$router.push("/acervo")):this.$q.notify({type:"negative",message:this.$t("submission.alertSubmissionError"),actions:[{icon:"close",color:"white"}]}),this.loading=!1}else this.$q.notify({type:"negative",message:this.$t("submission.alertMustAcceptTerms"),actions:[{icon:"close",color:"white"}]}),this.loading=!1;else this.$q.notify({type:"negative",message:this.$t("submission.alertNoFileSelected"),actions:[{icon:"close",color:"white"}]}),this.loading=!1}}};var k=i(4260),v=i(8689),$=i(8240),V=i(1052),_=i(4689),S=i(3314),x=i(6271),T=i(3282),M=i(7518),W=i.n(M);const z=(0,k.Z)(q,[["render",F]]),P=z;W()(q,"components",{QForm:v.Z,QBtn:$.Z,QFile:V.Z,QInput:_.Z,QSelect:S.Z,QCheckbox:x.Z,QSpinnerHourglass:T.Z})}}]);