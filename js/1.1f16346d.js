(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{"619d":function(e,t,i){"use strict";i.r(t);var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("q-dialog",{attrs:{value:e.isOpen,"full-height":"","full-width":"",persistent:""},on:{hide:function(t){return e.$emit("hide")}}},[i("q-card",[i("q-card-section",[i("div",{staticClass:"text-h6"},[e._v("Corte a imagem")])]),e.file?i("q-card-section",{staticClass:"q-pt-none height-crooper"},[i("cropper",{ref:"cropper",staticClass:"cropper",attrs:{"auto-zoom":!0,"stencil-props":{aspectRatio:e.ratio},"resize-image":{adjustStencil:!1},src:e.imgURL}})],1):e._e(),e.file?i("q-card-actions",{staticClass:"bg-white",attrs:{align:"right"}},[i("q-btn",{attrs:{flat:"",label:"Cortar e Salvar",color:"purple",icon:"content_cut",loading:e.loadingBtnCrop||e.loadingCropLocal},on:{click:e.crop}}),i("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Fechar",color:"red",disable:e.loadingBtnCrop||e.loadingCropLocal}})],1):e._e()],1)],1)},a=[],r=i("ded3"),s=i.n(r),n=(i("a79d"),i("e6cf"),i("2b3d"),i("ddb0"),i("2f62")),l={props:{isOpen:{type:Boolean,required:!0},file:{required:!0},ratio:{type:Number,required:!0},component:{type:String,required:!1}},data(){return{imgURL:"",loadingCropLocal:!1}},watch:{file(){this.file&&(this.isOpenDialog=!0,this.createFile())},loadingBtnCrop(){this.loadingBtnCrop||this.$emit("hide")},wasSend(){this.wasSend&&this.toggleStateWasSend()}},computed:s()({},Object(n["d"])({loadingBtnCrop:e=>e.fotosEvideos.loadingBtnCrop})),methods:{crop(){const{coordinates:e}=this.$refs.cropper.getResult();let t=new Image;t.src=this.imgURL;let i=new FormData;i.append("file",this.file),t.addEventListener("load",(o=>{let a=e.width,r=e.height,s=100*e.width/t.width,n=100*e.height/t.height;e.width=s,e.height=n,this.getImageCroped({file:i,coordinates:e,imgWidth:a,imgHeight:r})}))},getImageCroped(e){this.loadingCropLocal=!0;let t=`width=${e.coordinates.width}&height=${e.coordinates.height}&left=${e.coordinates.left}&top=${e.coordinates.top}&watermarkwidth=${e.imgWidth}&watermarkheight=${e.imgHeight}`,i=this.$route.path;"/vip"===i?t+="&imageType=vip":"/girlsofmonth"===i?t+="&imageType=garotames":"profile"===this.component?t+="&imageType=perfil&resizeWidth=180&resizeHeight=180":"capa"===this.component?t+="&imageType=capa&resizeWidth=851&resizeHeight=315":t+="&imageType=galeria",fetch(`https://fadas-crop.herokuapp.com/cropimage?${t}`,{method:"POST",body:e.file}).then((e=>e.blob())).then((e=>{this.$emit("sendImage",e)})).catch((e=>{console.error(e),this.$q.notify({type:"negative",message:"Erro ao enviar a foto"})})).finally((()=>{this.loadingCropLocal=!1}))},createFile(){this.file&&(this.fullWidth=!0,this.imgURL=window.URL.createObjectURL(this.file))}}},c=l,d=(i("f12f"),i("2877")),p=i("24e8"),h=i("f09f"),g=i("a370"),f=i("4b7e"),m=i("9c40"),u=i("7f67"),w=i("eebe"),C=i.n(w),b=Object(d["a"])(c,o,a,!1,null,null,null);t["default"]=b.exports;C()(b,"components",{QDialog:p["a"],QCard:h["a"],QCardSection:g["a"],QCardActions:f["a"],QBtn:m["a"]}),C()(b,"directives",{ClosePopup:u["a"]})},"9b3c":function(e,t,i){},f12f:function(e,t,i){"use strict";i("9b3c")}}]);