(()=>{var bc="170";var $d=0,_h=1,Jd=2;var Pu=1,Kd=2,Fn=3,ai=0,ye=1,Bn=2,si=0,ns=1,li=2,vh=3,yh=4,Sc=5,kn=100,jd=101,Qd=102,tf=103,ef=104,nf=200,wc=201,sf=202,rf=203,Ja=204,$s=205,of=206,af=207,lf=208,cf=209,hf=210,uf=211,df=212,ff=213,pf=214,Ka=0,ja=1,Qa=2,os=3,tl=4,el=5,nl=6,il=7,Lu=0,mf=1,gf=2,ri=0,xf=1,_f=2,vf=3,yf=4,Mf=5,bf=6,Sf=7;var Du=300,as=301,ls=302,sl=303,rl=304,Uo=306,ol=1e3,Ei=1001,al=1002,Je=1003,wf=1004;var Er=1005;var ge=1006,pa=1007;var zn=1008;var pn=1009,Uu=1010,Nu=1011,Js=1012,Ec=1013,Ti=1014,Hn=1015,Ni=1016,Tc=1017,Cc=1018,cs=1020,qu=35902,Fu=1021,Ou=1022,fn=1023,Bu=1024,ku=1025,is=1026,hs=1027,zu=1028,Ac=1029,Hu=1030,Rc=1031;var Ic=1033,to=33776,eo=33777,no=33778,io=33779,ll=35840,cl=35841,hl=35842,ul=35843,dl=36196,fl=37492,pl=37496,ml=37808,gl=37809,xl=37810,_l=37811,vl=37812,yl=37813,Ml=37814,bl=37815,Sl=37816,wl=37817,El=37818,Tl=37819,Cl=37820,Al=37821,so=36492,Rl=36494,Il=36495,Vu=36283,Pl=36284,Ll=36285,Dl=36286;var ro=2300,Ul=2301,ma=2302,Mh=2400,bh=2401,Sh=2402;var Ef=3200,Tf=3201;var Gu=0,Cf=1,Ve="",Ie="srgb",di="srgb-linear",No="linear",le="srgb";var ki=7680;var wh=519,Af=512,Rf=513,If=514,Wu=515,Pf=516,Lf=517,Df=518,Uf=519,Eh=35044;var Th="300 es",Vn=2e3,oo=2001,ci=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},qe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var ga=Math.PI/180,Nl=180/Math.PI;function _s(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qe[i&255]+qe[i>>8&255]+qe[i>>16&255]+qe[i>>24&255]+"-"+qe[t&255]+qe[t>>8&255]+"-"+qe[t>>16&15|64]+qe[t>>24&255]+"-"+qe[e&63|128]+qe[e>>8&255]+"-"+qe[e>>16&255]+qe[e>>24&255]+qe[n&255]+qe[n>>8&255]+qe[n>>16&255]+qe[n>>24&255]).toLowerCase()}function Pe(i,t,e){return Math.max(t,Math.min(e,i))}function Nf(i,t){return(i%t+t)%t}function xa(i,t,e){return(1-e)*i+e*t}function Fs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function We(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var pt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Bt=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],m=n[5],g=n[8],x=s[0],p=s[3],d=s[6],E=s[1],_=s[4],v=s[7],N=s[2],P=s[5],q=s[8];return r[0]=o*x+a*E+l*N,r[3]=o*p+a*_+l*P,r[6]=o*d+a*v+l*q,r[1]=c*x+h*E+u*N,r[4]=c*p+h*_+u*P,r[7]=c*d+h*v+u*q,r[2]=f*x+m*E+g*N,r[5]=f*p+m*_+g*P,r[8]=f*d+m*v+g*q,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,m=c*r-o*l,g=e*u+n*f+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=u*x,t[1]=(s*c-h*n)*x,t[2]=(a*n-s*o)*x,t[3]=f*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=m*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(_a.makeScale(t,e)),this}rotate(t){return this.premultiply(_a.makeRotation(-t)),this}translate(t,e){return this.premultiply(_a.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},_a=new Bt;function Xu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ks(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function qf(){let i=Ks("canvas");return i.style.display="block",i}var Ch={};function Gs(i){i in Ch||(Ch[i]=!0,console.warn(i))}function Ff(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Of(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Bf(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var te={enabled:!0,workingColorSpace:di,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===le&&(i.r=Gn(i.r),i.g=Gn(i.g),i.b=Gn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===le&&(i.r=ss(i.r),i.g=ss(i.g),i.b=ss(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ve?No:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Gn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ss(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ah=[.64,.33,.3,.6,.15,.06],Rh=[.2126,.7152,.0722],Ih=[.3127,.329],Ph=new Bt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lh=new Bt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);te.define({[di]:{primaries:Ah,whitePoint:Ih,transfer:No,toXYZ:Ph,fromXYZ:Lh,luminanceCoefficients:Rh,workingColorSpaceConfig:{unpackColorSpace:Ie},outputColorSpaceConfig:{drawingBufferColorSpace:Ie}},[Ie]:{primaries:Ah,whitePoint:Ih,transfer:le,toXYZ:Ph,fromXYZ:Lh,luminanceCoefficients:Rh,outputColorSpaceConfig:{drawingBufferColorSpace:Ie}}});var zi,ql=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{zi===void 0&&(zi=Ks("canvas")),zi.width=t.width,zi.height=t.height;let n=zi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=zi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ks("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Gn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Gn(e[n]/255)*255):e[n]=Gn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},kf=0,ao=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:kf++}),this.uuid=_s(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(va(s[o].image)):r.push(va(s[o]))}else r=va(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function va(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ql.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var zf=0,Be=class i extends ci{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Ei,s=Ei,r=ge,o=zn,a=fn,l=pn,c=i.DEFAULT_ANISOTROPY,h=Ve){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zf++}),this.uuid=_s(),this.name="",this.source=new ao(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Du)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ol:t.x=t.x-Math.floor(t.x);break;case Ei:t.x=t.x<0?0:1;break;case al:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ol:t.y=t.y-Math.floor(t.y);break;case Ei:t.y=t.y<0?0:1;break;case al:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Be.DEFAULT_IMAGE=null;Be.DEFAULT_MAPPING=Du;Be.DEFAULT_ANISOTROPY=1;var ie=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],m=l[5],g=l[9],x=l[2],p=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(c+1)/2,v=(m+1)/2,N=(d+1)/2,P=(h+f)/4,q=(u+x)/4,I=(g+p)/4;return _>v&&_>N?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=P/n,r=q/n):v>N?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=P/s,r=I/s):N<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(N),n=q/r,s=I/r),this.set(n,s,r,e),this}let E=Math.sqrt((p-g)*(p-g)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(E)<.001&&(E=1),this.x=(p-g)/E,this.y=(u-x)/E,this.z=(f-h)/E,this.w=Math.acos((c+m+d-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Fl=class extends ci{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ie(0,0,t,e),this.scissorTest=!1,this.viewport=new ie(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ge,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Be(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new ao(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xe=class extends Fl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},lo=class extends Be{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Je,this.minFilter=Je,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ol=class extends Be{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Je,this.minFilter=Je,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ke=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],m=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=m,t[e+2]=g,t[e+3]=x;return}if(u!==x||l!==f||c!==m||h!==g){let p=1-a,d=l*f+c*m+h*g+u*x,E=d>=0?1:-1,_=1-d*d;if(_>Number.EPSILON){let N=Math.sqrt(_),P=Math.atan2(N,d*E);p=Math.sin(p*P)/N,a=Math.sin(a*P)/N}let v=a*E;if(l=l*p+f*v,c=c*p+m*v,h=h*p+g*v,u=u*p+x*v,p===1-a){let N=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=N,c*=N,h*=N,u*=N}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],f=r[o+1],m=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*m-c*f,t[e+1]=l*g+h*f+c*u-a*m,t[e+2]=c*g+h*m+a*f-l*u,t[e+3]=h*g-a*u-l*f-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),f=l(n/2),m=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u-f*m*g;break;case"YXZ":this._x=f*h*u+c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u+f*m*g;break;case"ZXY":this._x=f*h*u-c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u-f*m*g;break;case"ZYX":this._x=f*h*u-c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u+f*m*g;break;case"YZX":this._x=f*h*u+c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u-f*m*g;break;case"XZY":this._x=f*h*u-c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(n>a&&n>u){let m=2*Math.sqrt(1+n-a-u);this._w=(h-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>u){let m=2*Math.sqrt(1+a-n-u);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+u-n-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Pe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},k=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Dh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Dh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ya.copy(this).projectOnVector(t),this.sub(ya)}reflect(t){return this.sub(ya.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ya=new k,Dh=new Ke,Ci=class{constructor(t=new k(1/0,1/0,1/0),e=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(hn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(hn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=hn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,hn):hn.fromBufferAttribute(r,o),hn.applyMatrix4(t.matrixWorld),this.expandByPoint(hn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Tr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Tr.copy(n.boundingBox)),Tr.applyMatrix4(t.matrixWorld),this.union(Tr)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,hn),hn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Os),Cr.subVectors(this.max,Os),Hi.subVectors(t.a,Os),Vi.subVectors(t.b,Os),Gi.subVectors(t.c,Os),Kn.subVectors(Vi,Hi),jn.subVectors(Gi,Vi),gi.subVectors(Hi,Gi);let e=[0,-Kn.z,Kn.y,0,-jn.z,jn.y,0,-gi.z,gi.y,Kn.z,0,-Kn.x,jn.z,0,-jn.x,gi.z,0,-gi.x,-Kn.y,Kn.x,0,-jn.y,jn.x,0,-gi.y,gi.x,0];return!Ma(e,Hi,Vi,Gi,Cr)||(e=[1,0,0,0,1,0,0,0,1],!Ma(e,Hi,Vi,Gi,Cr))?!1:(Ar.crossVectors(Kn,jn),e=[Ar.x,Ar.y,Ar.z],Ma(e,Hi,Vi,Gi,Cr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,hn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(hn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Pn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Pn=[new k,new k,new k,new k,new k,new k,new k,new k],hn=new k,Tr=new Ci,Hi=new k,Vi=new k,Gi=new k,Kn=new k,jn=new k,gi=new k,Os=new k,Cr=new k,Ar=new k,xi=new k;function Ma(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){xi.fromArray(i,r);let a=s.x*Math.abs(xi.x)+s.y*Math.abs(xi.y)+s.z*Math.abs(xi.z),l=t.dot(xi),c=e.dot(xi),h=n.dot(xi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Hf=new Ci,Bs=new k,ba=new k,Ai=class{constructor(t=new k,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Hf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Bs.subVectors(t,this.center);let e=Bs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Bs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ba.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Bs.copy(t.center).add(ba)),this.expandByPoint(Bs.copy(t.center).sub(ba))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ln=new k,Sa=new k,Rr=new k,Qn=new k,wa=new k,Ir=new k,Ea=new k,js=class{constructor(t=new k,e=new k(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ln)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ln.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ln.copy(this.origin).addScaledVector(this.direction,e),Ln.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Sa.copy(t).add(e).multiplyScalar(.5),Rr.copy(e).sub(t).normalize(),Qn.copy(this.origin).sub(Sa);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Rr),a=Qn.dot(this.direction),l=-Qn.dot(Rr),c=Qn.lengthSq(),h=Math.abs(1-o*o),u,f,m,g;if(h>0)if(u=o*l-a,f=o*a-l,g=r*h,u>=0)if(f>=-g)if(f<=g){let x=1/h;u*=x,f*=x,m=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),m=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),m=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Sa).addScaledVector(Rr,f),m}intersectSphere(t,e){Ln.subVectors(t.center,this.origin);let n=Ln.dot(this.direction),s=Ln.dot(Ln)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Ln)!==null}intersectTriangle(t,e,n,s,r){wa.subVectors(e,t),Ir.subVectors(n,t),Ea.crossVectors(wa,Ir);let o=this.direction.dot(Ea),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Qn.subVectors(this.origin,t);let l=a*this.direction.dot(Ir.crossVectors(Qn,Ir));if(l<0)return null;let c=a*this.direction.dot(wa.cross(Qn));if(c<0||l+c>o)return null;let h=-a*Qn.dot(Ea);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ae=class i{constructor(t,e,n,s,r,o,a,l,c,h,u,f,m,g,x,p){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,f,m,g,x,p)}set(t,e,n,s,r,o,a,l,c,h,u,f,m,g,x,p){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=m,d[7]=g,d[11]=x,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Wi.setFromMatrixColumn(t,0).length(),r=1/Wi.setFromMatrixColumn(t,1).length(),o=1/Wi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,m=o*u,g=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=m+g*c,e[5]=f-x*c,e[9]=-a*l,e[2]=x-f*c,e[6]=g+m*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,m=l*u,g=c*h,x=c*u;e[0]=f+x*a,e[4]=g*a-m,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=m*a-g,e[6]=x+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,m=l*u,g=c*h,x=c*u;e[0]=f-x*a,e[4]=-o*u,e[8]=g+m*a,e[1]=m+g*a,e[5]=o*h,e[9]=x-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,m=o*u,g=a*h,x=a*u;e[0]=l*h,e[4]=g*c-m,e[8]=f*c+x,e[1]=l*u,e[5]=x*c+f,e[9]=m*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,m=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=x-f*u,e[8]=g*u+m,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=m*u+g,e[10]=f-x*u}else if(t.order==="XZY"){let f=o*l,m=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+x,e[5]=o*h,e[9]=m*u-g,e[2]=g*u-m,e[6]=a*h,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Vf,t,Gf)}lookAt(t,e,n){let s=this.elements;return Ze.subVectors(t,e),Ze.lengthSq()===0&&(Ze.z=1),Ze.normalize(),ti.crossVectors(n,Ze),ti.lengthSq()===0&&(Math.abs(n.z)===1?Ze.x+=1e-4:Ze.z+=1e-4,Ze.normalize(),ti.crossVectors(n,Ze)),ti.normalize(),Pr.crossVectors(Ze,ti),s[0]=ti.x,s[4]=Pr.x,s[8]=Ze.x,s[1]=ti.y,s[5]=Pr.y,s[9]=Ze.y,s[2]=ti.z,s[6]=Pr.z,s[10]=Ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],m=n[13],g=n[2],x=n[6],p=n[10],d=n[14],E=n[3],_=n[7],v=n[11],N=n[15],P=s[0],q=s[4],I=s[8],T=s[12],y=s[1],B=s[5],X=s[9],j=s[13],et=s[2],nt=s[6],it=s[10],ot=s[14],H=s[3],mt=s[7],xt=s[11],bt=s[15];return r[0]=o*P+a*y+l*et+c*H,r[4]=o*q+a*B+l*nt+c*mt,r[8]=o*I+a*X+l*it+c*xt,r[12]=o*T+a*j+l*ot+c*bt,r[1]=h*P+u*y+f*et+m*H,r[5]=h*q+u*B+f*nt+m*mt,r[9]=h*I+u*X+f*it+m*xt,r[13]=h*T+u*j+f*ot+m*bt,r[2]=g*P+x*y+p*et+d*H,r[6]=g*q+x*B+p*nt+d*mt,r[10]=g*I+x*X+p*it+d*xt,r[14]=g*T+x*j+p*ot+d*bt,r[3]=E*P+_*y+v*et+N*H,r[7]=E*q+_*B+v*nt+N*mt,r[11]=E*I+_*X+v*it+N*xt,r[15]=E*T+_*j+v*ot+N*bt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],m=t[14],g=t[3],x=t[7],p=t[11],d=t[15];return g*(+r*l*u-s*c*u-r*a*f+n*c*f+s*a*m-n*l*m)+x*(+e*l*m-e*c*f+r*o*f-s*o*m+s*c*h-r*l*h)+p*(+e*c*u-e*a*m-r*o*u+n*o*m+r*a*h-n*c*h)+d*(-s*a*h-e*l*u+e*a*f+s*o*u-n*o*f+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],m=t[11],g=t[12],x=t[13],p=t[14],d=t[15],E=u*p*c-x*f*c+x*l*m-a*p*m-u*l*d+a*f*d,_=g*f*c-h*p*c-g*l*m+o*p*m+h*l*d-o*f*d,v=h*x*c-g*u*c+g*a*m-o*x*m-h*a*d+o*u*d,N=g*u*l-h*x*l-g*a*f+o*x*f+h*a*p-o*u*p,P=e*E+n*_+s*v+r*N;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let q=1/P;return t[0]=E*q,t[1]=(x*f*r-u*p*r-x*s*m+n*p*m+u*s*d-n*f*d)*q,t[2]=(a*p*r-x*l*r+x*s*c-n*p*c-a*s*d+n*l*d)*q,t[3]=(u*l*r-a*f*r-u*s*c+n*f*c+a*s*m-n*l*m)*q,t[4]=_*q,t[5]=(h*p*r-g*f*r+g*s*m-e*p*m-h*s*d+e*f*d)*q,t[6]=(g*l*r-o*p*r-g*s*c+e*p*c+o*s*d-e*l*d)*q,t[7]=(o*f*r-h*l*r+h*s*c-e*f*c-o*s*m+e*l*m)*q,t[8]=v*q,t[9]=(g*u*r-h*x*r-g*n*m+e*x*m+h*n*d-e*u*d)*q,t[10]=(o*x*r-g*a*r+g*n*c-e*x*c-o*n*d+e*a*d)*q,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*m-e*a*m)*q,t[12]=N*q,t[13]=(h*x*s-g*u*s+g*n*f-e*x*f-h*n*p+e*u*p)*q,t[14]=(g*a*s-o*x*s-g*n*l+e*x*l+o*n*p-e*a*p)*q,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*f+e*a*f)*q,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,m=r*h,g=r*u,x=o*h,p=o*u,d=a*u,E=l*c,_=l*h,v=l*u,N=n.x,P=n.y,q=n.z;return s[0]=(1-(x+d))*N,s[1]=(m+v)*N,s[2]=(g-_)*N,s[3]=0,s[4]=(m-v)*P,s[5]=(1-(f+d))*P,s[6]=(p+E)*P,s[7]=0,s[8]=(g+_)*q,s[9]=(p-E)*q,s[10]=(1-(f+x))*q,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Wi.set(s[0],s[1],s[2]).length(),o=Wi.set(s[4],s[5],s[6]).length(),a=Wi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],un.copy(this);let c=1/r,h=1/o,u=1/a;return un.elements[0]*=c,un.elements[1]*=c,un.elements[2]*=c,un.elements[4]*=h,un.elements[5]*=h,un.elements[6]*=h,un.elements[8]*=u,un.elements[9]*=u,un.elements[10]*=u,e.setFromRotationMatrix(un),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Vn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),m,g;if(a===Vn)m=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===oo)m=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Vn){let l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(o-r),f=(e+t)*c,m=(n+s)*h,g,x;if(a===Vn)g=(o+r)*u,x=-2*u;else if(a===oo)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Wi=new k,un=new ae,Vf=new k(0,0,0),Gf=new k(1,1,1),ti=new k,Pr=new k,Ze=new k,Uh=new ae,Nh=new Ke,Sn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(Pe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Pe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Pe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Pe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Pe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Pe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Uh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Uh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Nh.setFromEuler(this),this.setFromQuaternion(Nh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Sn.DEFAULT_ORDER="XYZ";var co=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Wf=0,qh=new k,Xi=new Ke,Dn=new ae,Lr=new k,ks=new k,Xf=new k,Yf=new Ke,Fh=new k(1,0,0),Oh=new k(0,1,0),Bh=new k(0,0,1),kh={type:"added"},Zf={type:"removed"},Yi={type:"childadded",child:null},Ta={type:"childremoved",child:null},ke=class i extends ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wf++}),this.uuid=_s(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new k,e=new Sn,n=new Ke,s=new k(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ae},normalMatrix:{value:new Bt}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new co,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Xi.setFromAxisAngle(t,e),this.quaternion.multiply(Xi),this}rotateOnWorldAxis(t,e){return Xi.setFromAxisAngle(t,e),this.quaternion.premultiply(Xi),this}rotateX(t){return this.rotateOnAxis(Fh,t)}rotateY(t){return this.rotateOnAxis(Oh,t)}rotateZ(t){return this.rotateOnAxis(Bh,t)}translateOnAxis(t,e){return qh.copy(t).applyQuaternion(this.quaternion),this.position.add(qh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Fh,t)}translateY(t){return this.translateOnAxis(Oh,t)}translateZ(t){return this.translateOnAxis(Bh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Dn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Lr.copy(t):Lr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dn.lookAt(ks,Lr,this.up):Dn.lookAt(Lr,ks,this.up),this.quaternion.setFromRotationMatrix(Dn),s&&(Dn.extractRotation(s.matrixWorld),Xi.setFromRotationMatrix(Dn),this.quaternion.premultiply(Xi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(kh),Yi.child=t,this.dispatchEvent(Yi),Yi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Zf),Ta.child=t,this.dispatchEvent(Ta),Ta.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Dn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Dn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Dn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(kh),Yi.child=t,this.dispatchEvent(Yi),Yi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ks,t,Xf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ks,Yf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),m=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};ke.DEFAULT_UP=new k(0,1,0);ke.DEFAULT_MATRIX_AUTO_UPDATE=!0;ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var dn=new k,Un=new k,Ca=new k,Nn=new k,Zi=new k,$i=new k,zh=new k,Aa=new k,Ra=new k,Ia=new k,Pa=new ie,La=new ie,Da=new ie,Si=class i{constructor(t=new k,e=new k,n=new k){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),dn.subVectors(t,e),s.cross(dn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){dn.subVectors(s,e),Un.subVectors(n,e),Ca.subVectors(t,e);let o=dn.dot(dn),a=dn.dot(Un),l=dn.dot(Ca),c=Un.dot(Un),h=Un.dot(Ca),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,m=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-m-g,g,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Nn)===null?!1:Nn.x>=0&&Nn.y>=0&&Nn.x+Nn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Nn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Nn.x),l.addScaledVector(o,Nn.y),l.addScaledVector(a,Nn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Pa.setScalar(0),La.setScalar(0),Da.setScalar(0),Pa.fromBufferAttribute(t,e),La.fromBufferAttribute(t,n),Da.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Pa,r.x),o.addScaledVector(La,r.y),o.addScaledVector(Da,r.z),o}static isFrontFacing(t,e,n,s){return dn.subVectors(n,e),Un.subVectors(t,e),dn.cross(Un).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return dn.subVectors(this.c,this.b),Un.subVectors(this.a,this.b),dn.cross(Un).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Zi.subVectors(s,n),$i.subVectors(r,n),Aa.subVectors(t,n);let l=Zi.dot(Aa),c=$i.dot(Aa);if(l<=0&&c<=0)return e.copy(n);Ra.subVectors(t,s);let h=Zi.dot(Ra),u=$i.dot(Ra);if(h>=0&&u<=h)return e.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Zi,o);Ia.subVectors(t,r);let m=Zi.dot(Ia),g=$i.dot(Ia);if(g>=0&&m<=g)return e.copy(r);let x=m*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector($i,a);let p=h*g-m*u;if(p<=0&&u-h>=0&&m-g>=0)return zh.subVectors(r,s),a=(u-h)/(u-h+(m-g)),e.copy(s).addScaledVector(zh,a);let d=1/(p+x+f);return o=x*d,a=f*d,e.copy(n).addScaledVector(Zi,o).addScaledVector($i,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Yu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ei={h:0,s:0,l:0},Dr={h:0,s:0,l:0};function Ua(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var zt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ie){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=te.workingColorSpace){return this.r=t,this.g=e,this.b=n,te.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=te.workingColorSpace){if(t=Nf(t,1),e=Pe(e,0,1),n=Pe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Ua(o,r,t+1/3),this.g=Ua(o,r,t),this.b=Ua(o,r,t-1/3)}return te.toWorkingColorSpace(this,s),this}setStyle(t,e=Ie){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ie){let n=Yu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Gn(t.r),this.g=Gn(t.g),this.b=Gn(t.b),this}copyLinearToSRGB(t){return this.r=ss(t.r),this.g=ss(t.g),this.b=ss(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ie){return te.fromWorkingColorSpace(Fe.copy(this),t),Math.round(Pe(Fe.r*255,0,255))*65536+Math.round(Pe(Fe.g*255,0,255))*256+Math.round(Pe(Fe.b*255,0,255))}getHexString(t=Ie){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.fromWorkingColorSpace(Fe.copy(this),e);let n=Fe.r,s=Fe.g,r=Fe.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=te.workingColorSpace){return te.fromWorkingColorSpace(Fe.copy(this),e),t.r=Fe.r,t.g=Fe.g,t.b=Fe.b,t}getStyle(t=Ie){te.fromWorkingColorSpace(Fe.copy(this),t);let e=Fe.r,n=Fe.g,s=Fe.b;return t!==Ie?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ei),this.setHSL(ei.h+t,ei.s+e,ei.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ei),t.getHSL(Dr);let n=xa(ei.h,Dr.h,e),s=xa(ei.s,Dr.s,e),r=xa(ei.l,Dr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Fe=new zt;zt.NAMES=Yu;var $f=0,Wn=class extends ci{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$f++}),this.uuid=_s(),this.name="",this.blending=ns,this.side=ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ja,this.blendDst=$s,this.blendEquation=kn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ki,this.stencilZFail=ki,this.stencilZPass=ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ns&&(n.blending=this.blending),this.side!==ai&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ja&&(n.blendSrc=this.blendSrc),this.blendDst!==$s&&(n.blendDst=this.blendDst),this.blendEquation!==kn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==os&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ki&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ki&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ki&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},wn=class extends Wn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=Lu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ve=new k,Ur=new pt,Ae=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Eh,this.updateRanges=[],this.gpuType=Hn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ur.fromBufferAttribute(this,e),Ur.applyMatrix3(t),this.setXY(e,Ur.x,Ur.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix3(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix4(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyNormalMatrix(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.transformDirection(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Fs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=We(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Fs(e,this.array)),e}setX(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Fs(e,this.array)),e}setY(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Fs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Fs(e,this.array)),e}setW(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),n=We(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),n=We(n,this.array),s=We(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),n=We(n,this.array),s=We(s,this.array),r=We(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Eh&&(t.usage=this.usage),t}};var ho=class extends Ae{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var uo=class extends Ae{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var xe=class extends Ae{constructor(t,e,n){super(new Float32Array(t),e,n)}},Jf=0,nn=new ae,Na=new ke,Ji=new k,$e=new Ci,zs=new Ci,Ce=new k,Se=class i extends ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jf++}),this.uuid=_s(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Xu(t)?uo:ho)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Bt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return nn.makeRotationFromQuaternion(t),this.applyMatrix4(nn),this}rotateX(t){return nn.makeRotationX(t),this.applyMatrix4(nn),this}rotateY(t){return nn.makeRotationY(t),this.applyMatrix4(nn),this}rotateZ(t){return nn.makeRotationZ(t),this.applyMatrix4(nn),this}translate(t,e,n){return nn.makeTranslation(t,e,n),this.applyMatrix4(nn),this}scale(t,e,n){return nn.makeScale(t,e,n),this.applyMatrix4(nn),this}lookAt(t){return Na.lookAt(t),Na.updateMatrix(),this.applyMatrix4(Na.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ji).negate(),this.translate(Ji.x,Ji.y,Ji.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new xe(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ci);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];$e.setFromBufferAttribute(r),this.morphTargetsRelative?(Ce.addVectors(this.boundingBox.min,$e.min),this.boundingBox.expandByPoint(Ce),Ce.addVectors(this.boundingBox.max,$e.max),this.boundingBox.expandByPoint(Ce)):(this.boundingBox.expandByPoint($e.min),this.boundingBox.expandByPoint($e.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ai);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){let n=this.boundingSphere.center;if($e.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];zs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ce.addVectors($e.min,zs.min),$e.expandByPoint(Ce),Ce.addVectors($e.max,zs.max),$e.expandByPoint(Ce)):($e.expandByPoint(zs.min),$e.expandByPoint(zs.max))}$e.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ce.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ce));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ce.fromBufferAttribute(a,c),l&&(Ji.fromBufferAttribute(t,c),Ce.add(Ji)),s=Math.max(s,n.distanceToSquared(Ce))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ae(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<n.count;I++)a[I]=new k,l[I]=new k;let c=new k,h=new k,u=new k,f=new pt,m=new pt,g=new pt,x=new k,p=new k;function d(I,T,y){c.fromBufferAttribute(n,I),h.fromBufferAttribute(n,T),u.fromBufferAttribute(n,y),f.fromBufferAttribute(r,I),m.fromBufferAttribute(r,T),g.fromBufferAttribute(r,y),h.sub(c),u.sub(c),m.sub(f),g.sub(f);let B=1/(m.x*g.y-g.x*m.y);isFinite(B)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-m.y).multiplyScalar(B),p.copy(u).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(B),a[I].add(x),a[T].add(x),a[y].add(x),l[I].add(p),l[T].add(p),l[y].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let I=0,T=E.length;I<T;++I){let y=E[I],B=y.start,X=y.count;for(let j=B,et=B+X;j<et;j+=3)d(t.getX(j+0),t.getX(j+1),t.getX(j+2))}let _=new k,v=new k,N=new k,P=new k;function q(I){N.fromBufferAttribute(s,I),P.copy(N);let T=a[I];_.copy(T),_.sub(N.multiplyScalar(N.dot(T))).normalize(),v.crossVectors(P,T);let B=v.dot(l[I])<0?-1:1;o.setXYZW(I,_.x,_.y,_.z,B)}for(let I=0,T=E.length;I<T;++I){let y=E[I],B=y.start,X=y.count;for(let j=B,et=B+X;j<et;j+=3)q(t.getX(j+0)),q(t.getX(j+1)),q(t.getX(j+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ae(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);let s=new k,r=new k,o=new k,a=new k,l=new k,c=new k,h=new k,u=new k;if(t)for(let f=0,m=t.count;f<m;f+=3){let g=t.getX(f+0),x=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,p),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=e.count;f<m;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ce.fromBufferAttribute(t,e),Ce.normalize(),t.setXYZ(e,Ce.x,Ce.y,Ce.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),m=0,g=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?m=l[x]*a.data.stride+a.offset:m=l[x]*h;for(let d=0;d<h;d++)f[g++]=c[m++]}return new Ae(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],m=t(f,n);l.push(m)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let m=c[u];h.push(m.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,m=u.length;f<m;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Hh=new ae,_i=new js,Nr=new Ai,Vh=new k,qr=new k,Fr=new k,Or=new k,qa=new k,Br=new k,Gh=new k,kr=new k,$t=class extends ke{constructor(t=new Se,e=new wn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Br.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(qa.fromBufferAttribute(u,t),o?Br.addScaledVector(qa,h):Br.addScaledVector(qa.sub(e),h))}e.add(Br)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Nr.copy(n.boundingSphere),Nr.applyMatrix4(r),_i.copy(t.ray).recast(t.near),!(Nr.containsPoint(_i.origin)===!1&&(_i.intersectSphere(Nr,Vh)===null||_i.origin.distanceToSquared(Vh)>(t.far-t.near)**2))&&(Hh.copy(r).invert(),_i.copy(t.ray).applyMatrix4(Hh),!(n.boundingBox!==null&&_i.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,_i)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let p=f[g],d=o[p.materialIndex],E=Math.max(p.start,m.start),_=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let v=E,N=_;v<N;v+=3){let P=a.getX(v),q=a.getX(v+1),I=a.getX(v+2);s=zr(this,d,t,n,c,h,u,P,q,I),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,m.start),x=Math.min(a.count,m.start+m.count);for(let p=g,d=x;p<d;p+=3){let E=a.getX(p),_=a.getX(p+1),v=a.getX(p+2);s=zr(this,o,t,n,c,h,u,E,_,v),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let p=f[g],d=o[p.materialIndex],E=Math.max(p.start,m.start),_=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let v=E,N=_;v<N;v+=3){let P=v,q=v+1,I=v+2;s=zr(this,d,t,n,c,h,u,P,q,I),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let p=g,d=x;p<d;p+=3){let E=p,_=p+1,v=p+2;s=zr(this,o,t,n,c,h,u,E,_,v),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function Kf(i,t,e,n,s,r,o,a){let l;if(t.side===ye?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===ai,a),l===null)return null;kr.copy(a),kr.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(kr);return c<e.near||c>e.far?null:{distance:c,point:kr.clone(),object:i}}function zr(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,qr),i.getVertexPosition(l,Fr),i.getVertexPosition(c,Or);let h=Kf(i,t,e,n,qr,Fr,Or,Gh);if(h){let u=new k;Si.getBarycoord(Gh,qr,Fr,Or,u),s&&(h.uv=Si.getInterpolatedAttribute(s,a,l,c,u,new pt)),r&&(h.uv1=Si.getInterpolatedAttribute(r,a,l,c,u,new pt)),o&&(h.normal=Si.getInterpolatedAttribute(o,a,l,c,u,new k),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new k,materialIndex:0};Si.getNormal(qr,Fr,Or,f.normal),h.face=f,h.barycoord=u}return h}var mn=class i extends Se{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,m=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new xe(c,3)),this.setAttribute("normal",new xe(h,3)),this.setAttribute("uv",new xe(u,2));function g(x,p,d,E,_,v,N,P,q,I,T){let y=v/q,B=N/I,X=v/2,j=N/2,et=P/2,nt=q+1,it=I+1,ot=0,H=0,mt=new k;for(let xt=0;xt<it;xt++){let bt=xt*B-j;for(let qt=0;qt<nt;qt++){let jt=qt*y-X;mt[x]=jt*E,mt[p]=bt*_,mt[d]=et,c.push(mt.x,mt.y,mt.z),mt[x]=0,mt[p]=0,mt[d]=P>0?1:-1,h.push(mt.x,mt.y,mt.z),u.push(qt/q),u.push(1-xt/I),ot+=1}}for(let xt=0;xt<I;xt++)for(let bt=0;bt<q;bt++){let qt=f+bt+nt*xt,jt=f+bt+nt*(xt+1),U=f+(bt+1)+nt*(xt+1),D=f+(bt+1)+nt*xt;l.push(qt,jt,D),l.push(jt,U,D),H+=6}a.addGroup(m,H,T),m+=H,f+=ot}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function us(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function He(i){let t={};for(let e=0;e<i.length;e++){let n=us(i[e]);for(let s in n)t[s]=n[s]}return t}function jf(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Zu(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}var Qf={clone:us,merge:He},tp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ep=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Me=class extends Wn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tp,this.fragmentShader=ep,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=us(t.uniforms),this.uniformsGroups=jf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},fo=class extends ke{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=Vn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ni=new k,Wh=new pt,Xh=new pt,Oe=class extends fo{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Nl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ga*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Nl*2*Math.atan(Math.tan(ga*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ni.x,ni.y).multiplyScalar(-t/ni.z),ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ni.x,ni.y).multiplyScalar(-t/ni.z)}getViewSize(t,e){return this.getViewBounds(t,Wh,Xh),e.subVectors(Xh,Wh)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ga*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ki=-90,ji=1,Bl=class extends ke{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Oe(Ki,ji,t,e);s.layers=this.layers,this.add(s);let r=new Oe(Ki,ji,t,e);r.layers=this.layers,this.add(r);let o=new Oe(Ki,ji,t,e);o.layers=this.layers,this.add(o);let a=new Oe(Ki,ji,t,e);a.layers=this.layers,this.add(a);let l=new Oe(Ki,ji,t,e);l.layers=this.layers,this.add(l);let c=new Oe(Ki,ji,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Vn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===oo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Qs=class extends Be{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:as,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},kl=class extends Xe{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Qs(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ge}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new mn(5,5,5),r=new Me({name:"CubemapFromEquirect",uniforms:us(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ye,blending:si});r.uniforms.tEquirect.value=e;let o=new $t(s,r),a=e.minFilter;return e.minFilter===zn&&(e.minFilter=ge),new Bl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},Fa=new k,np=new k,ip=new Bt,On=class{constructor(t=new k(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Fa.subVectors(n,e).cross(np.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Fa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||ip.getNormalMatrix(t),s=this.coplanarPoint(Fa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},vi=new Ai,Hr=new k,tr=class{constructor(t=new On,e=new On,n=new On,s=new On,r=new On,o=new On){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Vn){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],m=s[8],g=s[9],x=s[10],p=s[11],d=s[12],E=s[13],_=s[14],v=s[15];if(n[0].setComponents(l-r,f-c,p-m,v-d).normalize(),n[1].setComponents(l+r,f+c,p+m,v+d).normalize(),n[2].setComponents(l+o,f+h,p+g,v+E).normalize(),n[3].setComponents(l-o,f-h,p-g,v-E).normalize(),n[4].setComponents(l-a,f-u,p-x,v-_).normalize(),e===Vn)n[5].setComponents(l+a,f+u,p+x,v+_).normalize();else if(e===oo)n[5].setComponents(a,u,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),vi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),vi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(vi)}intersectsSprite(t){return vi.center.set(0,0,0),vi.radius=.7071067811865476,vi.applyMatrix4(t.matrixWorld),this.intersectsSphere(vi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Hr.x=s.normal.x>0?t.max.x:t.min.x,Hr.y=s.normal.y>0?t.max.y:t.min.y,Hr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Hr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function $u(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function sp(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((m,g)=>m.start-g.start);let f=0;for(let m=1;m<u.length;m++){let g=u[f],x=u[m];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,u[f]=x)}u.length=f+1;for(let m=0,g=u.length;m<g;m++){let x=u[m];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var hi=class i extends Se{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,f=e/l,m=[],g=[],x=[],p=[];for(let d=0;d<h;d++){let E=d*f-o;for(let _=0;_<c;_++){let v=_*u-r;g.push(v,-E,0),x.push(0,0,1),p.push(_/a),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let E=0;E<a;E++){let _=E+c*d,v=E+c*(d+1),N=E+1+c*(d+1),P=E+1+c*d;m.push(_,v,P),m.push(v,N,P)}this.setIndex(m),this.setAttribute("position",new xe(g,3)),this.setAttribute("normal",new xe(x,3)),this.setAttribute("uv",new xe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},rp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,op=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ap=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,up=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,dp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,pp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,mp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,_p=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,vp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,yp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Mp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ep=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Tp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Cp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Ap=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Rp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ip=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Pp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Lp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Dp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Up=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Np="gl_FragColor = linearToOutputTexel( gl_FragColor );",qp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Fp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Op=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Bp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,kp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Hp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Yp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$p=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Kp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,jp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,t0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,e0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,n0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,i0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,s0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,r0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,o0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,a0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,l0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,c0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,h0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,u0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,d0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,f0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,p0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,m0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,g0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,x0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,v0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,y0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,M0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,b0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,S0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,w0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,E0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,T0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,C0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,A0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,R0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,I0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,P0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,L0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,D0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,U0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,N0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,q0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,F0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,O0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,B0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,k0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,z0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,H0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,V0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,G0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,W0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,X0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Y0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Z0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,J0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,K0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,j0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Q0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,tm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,em=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,nm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,im=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,sm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,om=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,am=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,um=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,dm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,fm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,pm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_m=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,vm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ym=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Sm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Em=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Tm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Am=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Rm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Im=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Dm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Um=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Fm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Zt={alphahash_fragment:rp,alphahash_pars_fragment:op,alphamap_fragment:ap,alphamap_pars_fragment:lp,alphatest_fragment:cp,alphatest_pars_fragment:hp,aomap_fragment:up,aomap_pars_fragment:dp,batching_pars_vertex:fp,batching_vertex:pp,begin_vertex:mp,beginnormal_vertex:gp,bsdfs:xp,iridescence_fragment:_p,bumpmap_pars_fragment:vp,clipping_planes_fragment:yp,clipping_planes_pars_fragment:Mp,clipping_planes_pars_vertex:bp,clipping_planes_vertex:Sp,color_fragment:wp,color_pars_fragment:Ep,color_pars_vertex:Tp,color_vertex:Cp,common:Ap,cube_uv_reflection_fragment:Rp,defaultnormal_vertex:Ip,displacementmap_pars_vertex:Pp,displacementmap_vertex:Lp,emissivemap_fragment:Dp,emissivemap_pars_fragment:Up,colorspace_fragment:Np,colorspace_pars_fragment:qp,envmap_fragment:Fp,envmap_common_pars_fragment:Op,envmap_pars_fragment:Bp,envmap_pars_vertex:kp,envmap_physical_pars_fragment:Kp,envmap_vertex:zp,fog_vertex:Hp,fog_pars_vertex:Vp,fog_fragment:Gp,fog_pars_fragment:Wp,gradientmap_pars_fragment:Xp,lightmap_pars_fragment:Yp,lights_lambert_fragment:Zp,lights_lambert_pars_fragment:$p,lights_pars_begin:Jp,lights_toon_fragment:jp,lights_toon_pars_fragment:Qp,lights_phong_fragment:t0,lights_phong_pars_fragment:e0,lights_physical_fragment:n0,lights_physical_pars_fragment:i0,lights_fragment_begin:s0,lights_fragment_maps:r0,lights_fragment_end:o0,logdepthbuf_fragment:a0,logdepthbuf_pars_fragment:l0,logdepthbuf_pars_vertex:c0,logdepthbuf_vertex:h0,map_fragment:u0,map_pars_fragment:d0,map_particle_fragment:f0,map_particle_pars_fragment:p0,metalnessmap_fragment:m0,metalnessmap_pars_fragment:g0,morphinstance_vertex:x0,morphcolor_vertex:_0,morphnormal_vertex:v0,morphtarget_pars_vertex:y0,morphtarget_vertex:M0,normal_fragment_begin:b0,normal_fragment_maps:S0,normal_pars_fragment:w0,normal_pars_vertex:E0,normal_vertex:T0,normalmap_pars_fragment:C0,clearcoat_normal_fragment_begin:A0,clearcoat_normal_fragment_maps:R0,clearcoat_pars_fragment:I0,iridescence_pars_fragment:P0,opaque_fragment:L0,packing:D0,premultiplied_alpha_fragment:U0,project_vertex:N0,dithering_fragment:q0,dithering_pars_fragment:F0,roughnessmap_fragment:O0,roughnessmap_pars_fragment:B0,shadowmap_pars_fragment:k0,shadowmap_pars_vertex:z0,shadowmap_vertex:H0,shadowmask_pars_fragment:V0,skinbase_vertex:G0,skinning_pars_vertex:W0,skinning_vertex:X0,skinnormal_vertex:Y0,specularmap_fragment:Z0,specularmap_pars_fragment:$0,tonemapping_fragment:J0,tonemapping_pars_fragment:K0,transmission_fragment:j0,transmission_pars_fragment:Q0,uv_pars_fragment:tm,uv_pars_vertex:em,uv_vertex:nm,worldpos_vertex:im,background_vert:sm,background_frag:rm,backgroundCube_vert:om,backgroundCube_frag:am,cube_vert:lm,cube_frag:cm,depth_vert:hm,depth_frag:um,distanceRGBA_vert:dm,distanceRGBA_frag:fm,equirect_vert:pm,equirect_frag:mm,linedashed_vert:gm,linedashed_frag:xm,meshbasic_vert:_m,meshbasic_frag:vm,meshlambert_vert:ym,meshlambert_frag:Mm,meshmatcap_vert:bm,meshmatcap_frag:Sm,meshnormal_vert:wm,meshnormal_frag:Em,meshphong_vert:Tm,meshphong_frag:Cm,meshphysical_vert:Am,meshphysical_frag:Rm,meshtoon_vert:Im,meshtoon_frag:Pm,points_vert:Lm,points_frag:Dm,shadow_vert:Um,shadow_frag:Nm,sprite_vert:qm,sprite_frag:Fm},St={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},envMapRotation:{value:new Bt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},Mn={basic:{uniforms:He([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:He([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new zt(0)}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:He([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:He([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:He([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new zt(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:He([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:He([St.points,St.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:He([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:He([St.common,St.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:He([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:He([St.sprite,St.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Bt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distanceRGBA:{uniforms:He([St.common,St.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distanceRGBA_vert,fragmentShader:Zt.distanceRGBA_frag},shadow:{uniforms:He([St.lights,St.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};Mn.physical={uniforms:He([Mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};var Vr={r:0,b:0,g:0},yi=new Sn,Om=new ae;function Bm(i,t,e,n,s,r,o){let a=new zt(0),l=r===!0?0:1,c,h,u=null,f=0,m=null;function g(E){let _=E.isScene===!0?E.background:null;return _&&_.isTexture&&(_=(E.backgroundBlurriness>0?e:t).get(_)),_}function x(E){let _=!1,v=g(E);v===null?d(a,l):v&&v.isColor&&(d(v,1),_=!0);let N=i.xr.getEnvironmentBlendMode();N==="additive"?n.buffers.color.setClear(0,0,0,1,o):N==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(E,_){let v=g(_);v&&(v.isCubeTexture||v.mapping===Uo)?(h===void 0&&(h=new $t(new mn(1,1,1),new Me({name:"BackgroundCubeMaterial",uniforms:us(Mn.backgroundCube.uniforms),vertexShader:Mn.backgroundCube.vertexShader,fragmentShader:Mn.backgroundCube.fragmentShader,side:ye,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(N,P,q){this.matrixWorld.copyPosition(q.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),yi.copy(_.backgroundRotation),yi.x*=-1,yi.y*=-1,yi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(yi.y*=-1,yi.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Om.makeRotationFromEuler(yi)),h.material.toneMapped=te.getTransfer(v.colorSpace)!==le,(u!==v||f!==v.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,u=v,f=v.version,m=i.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new $t(new hi(2,2),new Me({name:"BackgroundMaterial",uniforms:us(Mn.background.uniforms),vertexShader:Mn.background.vertexShader,fragmentShader:Mn.background.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=te.getTransfer(v.colorSpace)!==le,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,u=v,f=v.version,m=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function d(E,_){E.getRGB(Vr,Zu(i)),n.buffers.color.setClear(Vr.r,Vr.g,Vr.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(E,_=1){a.set(E),l=_,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,d(a,l)},render:x,addToRenderList:p}}function km(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(y,B,X,j,et){let nt=!1,it=u(j,X,B);r!==it&&(r=it,c(r.object)),nt=m(y,j,X,et),nt&&g(y,j,X,et),et!==null&&t.update(et,i.ELEMENT_ARRAY_BUFFER),(nt||o)&&(o=!1,v(y,B,X,j),et!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(et).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function u(y,B,X){let j=X.wireframe===!0,et=n[y.id];et===void 0&&(et={},n[y.id]=et);let nt=et[B.id];nt===void 0&&(nt={},et[B.id]=nt);let it=nt[j];return it===void 0&&(it=f(l()),nt[j]=it),it}function f(y){let B=[],X=[],j=[];for(let et=0;et<e;et++)B[et]=0,X[et]=0,j[et]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:X,attributeDivisors:j,object:y,attributes:{},index:null}}function m(y,B,X,j){let et=r.attributes,nt=B.attributes,it=0,ot=X.getAttributes();for(let H in ot)if(ot[H].location>=0){let xt=et[H],bt=nt[H];if(bt===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(bt=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(bt=y.instanceColor)),xt===void 0||xt.attribute!==bt||bt&&xt.data!==bt.data)return!0;it++}return r.attributesNum!==it||r.index!==j}function g(y,B,X,j){let et={},nt=B.attributes,it=0,ot=X.getAttributes();for(let H in ot)if(ot[H].location>=0){let xt=nt[H];xt===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(xt=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(xt=y.instanceColor));let bt={};bt.attribute=xt,xt&&xt.data&&(bt.data=xt.data),et[H]=bt,it++}r.attributes=et,r.attributesNum=it,r.index=j}function x(){let y=r.newAttributes;for(let B=0,X=y.length;B<X;B++)y[B]=0}function p(y){d(y,0)}function d(y,B){let X=r.newAttributes,j=r.enabledAttributes,et=r.attributeDivisors;X[y]=1,j[y]===0&&(i.enableVertexAttribArray(y),j[y]=1),et[y]!==B&&(i.vertexAttribDivisor(y,B),et[y]=B)}function E(){let y=r.newAttributes,B=r.enabledAttributes;for(let X=0,j=B.length;X<j;X++)B[X]!==y[X]&&(i.disableVertexAttribArray(X),B[X]=0)}function _(y,B,X,j,et,nt,it){it===!0?i.vertexAttribIPointer(y,B,X,et,nt):i.vertexAttribPointer(y,B,X,j,et,nt)}function v(y,B,X,j){x();let et=j.attributes,nt=X.getAttributes(),it=B.defaultAttributeValues;for(let ot in nt){let H=nt[ot];if(H.location>=0){let mt=et[ot];if(mt===void 0&&(ot==="instanceMatrix"&&y.instanceMatrix&&(mt=y.instanceMatrix),ot==="instanceColor"&&y.instanceColor&&(mt=y.instanceColor)),mt!==void 0){let xt=mt.normalized,bt=mt.itemSize,qt=t.get(mt);if(qt===void 0)continue;let jt=qt.buffer,U=qt.type,D=qt.bytesPerElement,R=U===i.INT||U===i.UNSIGNED_INT||mt.gpuType===Ec;if(mt.isInterleavedBufferAttribute){let w=mt.data,tt=w.stride,ut=mt.offset;if(w.isInstancedInterleavedBuffer){for(let S=0;S<H.locationSize;S++)d(H.location+S,w.meshPerAttribute);y.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=w.meshPerAttribute*w.count)}else for(let S=0;S<H.locationSize;S++)p(H.location+S);i.bindBuffer(i.ARRAY_BUFFER,jt);for(let S=0;S<H.locationSize;S++)_(H.location+S,bt/H.locationSize,U,xt,tt*D,(ut+bt/H.locationSize*S)*D,R)}else{if(mt.isInstancedBufferAttribute){for(let w=0;w<H.locationSize;w++)d(H.location+w,mt.meshPerAttribute);y.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let w=0;w<H.locationSize;w++)p(H.location+w);i.bindBuffer(i.ARRAY_BUFFER,jt);for(let w=0;w<H.locationSize;w++)_(H.location+w,bt/H.locationSize,U,xt,bt*D,bt/H.locationSize*w*D,R)}}else if(it!==void 0){let xt=it[ot];if(xt!==void 0)switch(xt.length){case 2:i.vertexAttrib2fv(H.location,xt);break;case 3:i.vertexAttrib3fv(H.location,xt);break;case 4:i.vertexAttrib4fv(H.location,xt);break;default:i.vertexAttrib1fv(H.location,xt)}}}}E()}function N(){I();for(let y in n){let B=n[y];for(let X in B){let j=B[X];for(let et in j)h(j[et].object),delete j[et];delete B[X]}delete n[y]}}function P(y){if(n[y.id]===void 0)return;let B=n[y.id];for(let X in B){let j=B[X];for(let et in j)h(j[et].object),delete j[et];delete B[X]}delete n[y.id]}function q(y){for(let B in n){let X=n[B];if(X[y.id]===void 0)continue;let j=X[y.id];for(let et in j)h(j[et].object),delete j[et];delete X[y.id]}}function I(){T(),o=!0,r!==s&&(r=s,c(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:T,dispose:N,releaseStatesOfGeometry:P,releaseStatesOfProgram:q,initAttributes:x,enableAttribute:p,disableUnusedAttributes:E}}function zm(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let m=0;for(let g=0;g<u;g++)m+=h[g];e.update(m,n,1)}function l(c,h,u,f){if(u===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)o(c[g],h[g],f[g]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*f[x];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Hm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let q=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(q.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(q){return!(q!==fn&&n.convert(q)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(q){let I=q===Ni&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(q!==pn&&n.convert(q)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&q!==Hn&&!I)}function l(q){if(q==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";q="mediump"}return q==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),N=g>0,P=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:E,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:N,maxSamples:P}}function Vm(i){let t=this,e=null,n=0,s=!1,r=!1,o=new On,a=new Bt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let m=u.length!==0||f||n!==0||s;return s=f,n=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,m){let g=u.clippingPlanes,x=u.clipIntersection,p=u.clipShadows,d=i.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{let E=r?0:n,_=E*4,v=d.clippingState||null;l.value=v,v=h(g,f,_,m);for(let N=0;N!==_;++N)v[N]=e[N];d.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,m,g){let x=u!==null?u.length:0,p=null;if(x!==0){if(p=l.value,g!==!0||p===null){let d=m+x*4,E=f.matrixWorldInverse;a.getNormalMatrix(E),(p===null||p.length<d)&&(p=new Float32Array(d));for(let _=0,v=m;_!==x;++_,v+=4)o.copy(u[_]).applyMatrix4(E,a),o.normal.toArray(p,v),p[v+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,p}}function Gm(i){let t=new WeakMap;function e(o,a){return a===sl?o.mapping=as:a===rl&&(o.mapping=ls),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===sl||a===rl)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new kl(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var ds=class extends fo{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ts=4,Yh=[.125,.215,.35,.446,.526,.582],wi=20,Oa=new ds,Zh=new zt,Ba=null,ka=0,za=0,Ha=!1,bi=(1+Math.sqrt(5))/2,Qi=1/bi,$h=[new k(-bi,Qi,0),new k(bi,Qi,0),new k(-Qi,0,bi),new k(Qi,0,bi),new k(0,bi,-Qi),new k(0,bi,Qi),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)],fs=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Ba=this._renderer.getRenderTarget(),ka=this._renderer.getActiveCubeFace(),za=this._renderer.getActiveMipmapLevel(),Ha=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ba,ka,za),this._renderer.xr.enabled=Ha,t.scissorTest=!1,Gr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===as||t.mapping===ls?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ba=this._renderer.getRenderTarget(),ka=this._renderer.getActiveCubeFace(),za=this._renderer.getActiveMipmapLevel(),Ha=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ge,minFilter:ge,generateMipmaps:!1,type:Ni,format:fn,colorSpace:di,depthBuffer:!1},s=Jh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jh(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Wm(r)),this._blurMaterial=Xm(r,t,e)}return s}_compileMaterial(t){let e=new $t(this._lodPlanes[0],t);this._renderer.compile(e,Oa)}_sceneToCubeUV(t,e,n,s){let a=new Oe(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Zh),h.toneMapping=ri,h.autoClear=!1;let m=new wn({name:"PMREM.Background",side:ye,depthWrite:!1,depthTest:!1}),g=new $t(new mn,m),x=!1,p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,x=!0):(m.color.copy(Zh),x=!0);for(let d=0;d<6;d++){let E=d%3;E===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):E===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));let _=this._cubeSize;Gr(s,E*_,d>2?_:0,_,_),h.setRenderTarget(s),x&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===as||t.mapping===ls;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=jh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kh());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new $t(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Gr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Oa)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=$h[(s-r-1)%$h.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new $t(this._lodPlanes[s],c),f=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*wi-1),x=r/g,p=isFinite(r)?1+Math.floor(h*x):wi;p>wi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${wi}`);let d=[],E=0;for(let q=0;q<wi;++q){let I=q/x,T=Math.exp(-I*I/2);d.push(T),q===0?E+=T:q<p&&(E+=2*T)}for(let q=0;q<d.length;q++)d[q]=d[q]/E;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:_}=this;f.dTheta.value=g,f.mipInt.value=_-n;let v=this._sizeLods[s],N=3*v*(s>_-ts?s-_+ts:0),P=4*(this._cubeSize-v);Gr(e,N,P,3*v,2*v),l.setRenderTarget(e),l.render(u,Oa)}};function Wm(i){let t=[],e=[],n=[],s=i,r=i-ts+1+Yh.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-ts?l=Yh[o-i+ts-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,x=3,p=2,d=1,E=new Float32Array(x*g*m),_=new Float32Array(p*g*m),v=new Float32Array(d*g*m);for(let P=0;P<m;P++){let q=P%3*2/3-1,I=P>2?0:-1,T=[q,I,0,q+2/3,I,0,q+2/3,I+1,0,q,I,0,q+2/3,I+1,0,q,I+1,0];E.set(T,x*g*P),_.set(f,p*g*P);let y=[P,P,P,P,P,P];v.set(y,d*g*P)}let N=new Se;N.setAttribute("position",new Ae(E,x)),N.setAttribute("uv",new Ae(_,p)),N.setAttribute("faceIndex",new Ae(v,d)),t.push(N),s>ts&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Jh(i,t,e){let n=new Xe(i,t,e);return n.texture.mapping=Uo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Gr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Xm(i,t,e){let n=new Float32Array(wi),s=new k(0,1,0);return new Me({name:"SphericalGaussianBlur",defines:{n:wi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function Kh(){return new Me({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function jh(){return new Me({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function Pc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Ym(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===sl||l===rl,h=l===as||l===ls;if(c||h){let u=t.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new fs(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let m=a.image;return c&&m&&m.height>0||h&&m&&s(m)?(e===null&&(e=new fs(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Zm(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Gs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function $m(i,t,e,n){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);for(let g in f.morphAttributes){let x=f.morphAttributes[g];for(let p=0,d=x.length;p<d;p++)t.remove(x[p])}f.removeEventListener("dispose",o),delete s[f.id];let m=r.get(f);m&&(t.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let g in f)t.update(f[g],i.ARRAY_BUFFER);let m=u.morphAttributes;for(let g in m){let x=m[g];for(let p=0,d=x.length;p<d;p++)t.update(x[p],i.ARRAY_BUFFER)}}function c(u){let f=[],m=u.index,g=u.attributes.position,x=0;if(m!==null){let E=m.array;x=m.version;for(let _=0,v=E.length;_<v;_+=3){let N=E[_+0],P=E[_+1],q=E[_+2];f.push(N,P,P,q,q,N)}}else if(g!==void 0){let E=g.array;x=g.version;for(let _=0,v=E.length/3-1;_<v;_+=3){let N=_+0,P=_+1,q=_+2;f.push(N,P,P,q,q,N)}}else return;let p=new(Xu(f)?uo:ho)(f,1);p.version=x;let d=r.get(u);d&&t.remove(d),r.set(u,p)}function h(u){let f=r.get(u);if(f){let m=u.index;m!==null&&f.version<m.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Jm(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,m){i.drawElements(n,m,r,f*o),e.update(m,n,1)}function c(f,m,g){g!==0&&(i.drawElementsInstanced(n,m,r,f*o,g),e.update(m,n,g))}function h(f,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,f,0,g);let p=0;for(let d=0;d<g;d++)p+=m[d];e.update(p,n,1)}function u(f,m,g,x){if(g===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<f.length;d++)c(f[d]/o,m[d],x[d]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,r,f,0,x,0,g);let d=0;for(let E=0;E<g;E++)d+=m[E]*x[E];e.update(d,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Km(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function jm(i,t,e){let n=new WeakMap,s=new ie;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let T=function(){q.dispose(),n.delete(a),a.removeEventListener("dispose",T)};f!==void 0&&f.texture.dispose();let m=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],E=a.morphAttributes.color||[],_=0;m===!0&&(_=1),g===!0&&(_=2),x===!0&&(_=3);let v=a.attributes.position.count*_,N=1;v>t.maxTextureSize&&(N=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let P=new Float32Array(v*N*4*u),q=new lo(P,v,N,u);q.type=Hn,q.needsUpdate=!0;let I=_*4;for(let y=0;y<u;y++){let B=p[y],X=d[y],j=E[y],et=v*N*4*y;for(let nt=0;nt<B.count;nt++){let it=nt*I;m===!0&&(s.fromBufferAttribute(B,nt),P[et+it+0]=s.x,P[et+it+1]=s.y,P[et+it+2]=s.z,P[et+it+3]=0),g===!0&&(s.fromBufferAttribute(X,nt),P[et+it+4]=s.x,P[et+it+5]=s.y,P[et+it+6]=s.z,P[et+it+7]=0),x===!0&&(s.fromBufferAttribute(j,nt),P[et+it+8]=s.x,P[et+it+9]=s.y,P[et+it+10]=s.z,P[et+it+11]=j.itemSize===4?s.w:1)}}f={count:u,texture:q,size:new pt(v,N)},n.set(a,f),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let m=0;for(let x=0;x<c.length;x++)m+=c[x];let g=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Qm(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var po=class extends Be{constructor(t,e,n,s,r,o,a,l,c,h=is){if(h!==is&&h!==hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===is&&(n=Ti),n===void 0&&h===hs&&(n=cs),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Je,this.minFilter=l!==void 0?l:Je,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Ju=new Be,Qh=new po(1,1),Ku=new lo,ju=new Ol,Qu=new Qs,tu=[],eu=[],nu=new Float32Array(16),iu=new Float32Array(9),su=new Float32Array(4);function vs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=tu[s];if(r===void 0&&(r=new Float32Array(s),tu[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function we(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ee(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function qo(i,t){let e=eu[t];e===void 0&&(e=new Int32Array(t),eu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function t1(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function e1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;i.uniform2fv(this.addr,t),Ee(e,t)}}function n1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(we(e,t))return;i.uniform3fv(this.addr,t),Ee(e,t)}}function i1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;i.uniform4fv(this.addr,t),Ee(e,t)}}function s1(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ee(e,t)}else{if(we(e,n))return;su.set(n),i.uniformMatrix2fv(this.addr,!1,su),Ee(e,n)}}function r1(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ee(e,t)}else{if(we(e,n))return;iu.set(n),i.uniformMatrix3fv(this.addr,!1,iu),Ee(e,n)}}function o1(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ee(e,t)}else{if(we(e,n))return;nu.set(n),i.uniformMatrix4fv(this.addr,!1,nu),Ee(e,n)}}function a1(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function l1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;i.uniform2iv(this.addr,t),Ee(e,t)}}function c1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;i.uniform3iv(this.addr,t),Ee(e,t)}}function h1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;i.uniform4iv(this.addr,t),Ee(e,t)}}function u1(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function d1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;i.uniform2uiv(this.addr,t),Ee(e,t)}}function f1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;i.uniform3uiv(this.addr,t),Ee(e,t)}}function p1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;i.uniform4uiv(this.addr,t),Ee(e,t)}}function m1(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Qh.compareFunction=Wu,r=Qh):r=Ju,e.setTexture2D(t||r,s)}function g1(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||ju,s)}function x1(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Qu,s)}function _1(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Ku,s)}function v1(i){switch(i){case 5126:return t1;case 35664:return e1;case 35665:return n1;case 35666:return i1;case 35674:return s1;case 35675:return r1;case 35676:return o1;case 5124:case 35670:return a1;case 35667:case 35671:return l1;case 35668:case 35672:return c1;case 35669:case 35673:return h1;case 5125:return u1;case 36294:return d1;case 36295:return f1;case 36296:return p1;case 35678:case 36198:case 36298:case 36306:case 35682:return m1;case 35679:case 36299:case 36307:return g1;case 35680:case 36300:case 36308:case 36293:return x1;case 36289:case 36303:case 36311:case 36292:return _1}}function y1(i,t){i.uniform1fv(this.addr,t)}function M1(i,t){let e=vs(t,this.size,2);i.uniform2fv(this.addr,e)}function b1(i,t){let e=vs(t,this.size,3);i.uniform3fv(this.addr,e)}function S1(i,t){let e=vs(t,this.size,4);i.uniform4fv(this.addr,e)}function w1(i,t){let e=vs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function E1(i,t){let e=vs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function T1(i,t){let e=vs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function C1(i,t){i.uniform1iv(this.addr,t)}function A1(i,t){i.uniform2iv(this.addr,t)}function R1(i,t){i.uniform3iv(this.addr,t)}function I1(i,t){i.uniform4iv(this.addr,t)}function P1(i,t){i.uniform1uiv(this.addr,t)}function L1(i,t){i.uniform2uiv(this.addr,t)}function D1(i,t){i.uniform3uiv(this.addr,t)}function U1(i,t){i.uniform4uiv(this.addr,t)}function N1(i,t,e){let n=this.cache,s=t.length,r=qo(e,s);we(n,r)||(i.uniform1iv(this.addr,r),Ee(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Ju,r[o])}function q1(i,t,e){let n=this.cache,s=t.length,r=qo(e,s);we(n,r)||(i.uniform1iv(this.addr,r),Ee(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||ju,r[o])}function F1(i,t,e){let n=this.cache,s=t.length,r=qo(e,s);we(n,r)||(i.uniform1iv(this.addr,r),Ee(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Qu,r[o])}function O1(i,t,e){let n=this.cache,s=t.length,r=qo(e,s);we(n,r)||(i.uniform1iv(this.addr,r),Ee(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Ku,r[o])}function B1(i){switch(i){case 5126:return y1;case 35664:return M1;case 35665:return b1;case 35666:return S1;case 35674:return w1;case 35675:return E1;case 35676:return T1;case 5124:case 35670:return C1;case 35667:case 35671:return A1;case 35668:case 35672:return R1;case 35669:case 35673:return I1;case 5125:return P1;case 36294:return L1;case 36295:return D1;case 36296:return U1;case 35678:case 36198:case 36298:case 36306:case 35682:return N1;case 35679:case 36299:case 36307:return q1;case 35680:case 36300:case 36308:case 36293:return F1;case 36289:case 36303:case 36311:case 36292:return O1}}var zl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=v1(e.type)}},Hl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=B1(e.type)}},Vl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Va=/(\w+)(\])?(\[|\.)?/g;function ru(i,t){i.seq.push(t),i.map[t.id]=t}function k1(i,t,e){let n=i.name,s=n.length;for(Va.lastIndex=0;;){let r=Va.exec(n),o=Va.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){ru(e,c===void 0?new zl(a,i,t):new Hl(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Vl(a),ru(e,u)),e=u}}}var rs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);k1(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function ou(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var z1=37297,H1=0;function V1(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var au=new Bt;function G1(i){te._getMatrix(au,te.workingColorSpace,i);let t=`mat3( ${au.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(i)){case No:return[t,"LinearTransferOETF"];case le:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function lu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+V1(i.getShaderSource(t),o)}else return s}function W1(i,t){let e=G1(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function X1(i,t){let e;switch(t){case xf:e="Linear";break;case _f:e="Reinhard";break;case vf:e="Cineon";break;case yf:e="ACESFilmic";break;case bf:e="AgX";break;case Sf:e="Neutral";break;case Mf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Wr=new k;function Y1(){te.getLuminanceCoefficients(Wr);let i=Wr.x.toFixed(4),t=Wr.y.toFixed(4),e=Wr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Z1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ws).join(`
`)}function $1(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function J1(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Ws(i){return i!==""}function cu(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function hu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var K1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gl(i){return i.replace(K1,Q1)}var j1=new Map;function Q1(i,t){let e=Zt[t];if(e===void 0){let n=j1.get(t);if(n!==void 0)e=Zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Gl(e)}var t3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uu(i){return i.replace(t3,e3)}function e3(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function du(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function n3(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Pu?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Kd?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Fn&&(t="SHADOWMAP_TYPE_VSM"),t}function i3(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case as:case ls:t="ENVMAP_TYPE_CUBE";break;case Uo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function s3(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ls:t="ENVMAP_MODE_REFRACTION";break}return t}function r3(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Lu:t="ENVMAP_BLENDING_MULTIPLY";break;case mf:t="ENVMAP_BLENDING_MIX";break;case gf:t="ENVMAP_BLENDING_ADD";break}return t}function o3(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function a3(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=n3(e),c=i3(e),h=s3(e),u=r3(e),f=o3(e),m=Z1(e),g=$1(r),x=s.createProgram(),p,d,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ws).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ws).join(`
`),d.length>0&&(d+=`
`)):(p=[du(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ws).join(`
`),d=[du(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ri?"#define TONE_MAPPING":"",e.toneMapping!==ri?Zt.tonemapping_pars_fragment:"",e.toneMapping!==ri?X1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,W1("linearToOutputTexel",e.outputColorSpace),Y1(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ws).join(`
`)),o=Gl(o),o=cu(o,e),o=hu(o,e),a=Gl(a),a=cu(a,e),a=hu(a,e),o=uu(o),a=uu(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",e.glslVersion===Th?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Th?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let _=E+p+o,v=E+d+a,N=ou(s,s.VERTEX_SHADER,_),P=ou(s,s.FRAGMENT_SHADER,v);s.attachShader(x,N),s.attachShader(x,P),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function q(B){if(i.debug.checkShaderErrors){let X=s.getProgramInfoLog(x).trim(),j=s.getShaderInfoLog(N).trim(),et=s.getShaderInfoLog(P).trim(),nt=!0,it=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(nt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,N,P);else{let ot=lu(s,N,"vertex"),H=lu(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+X+`
`+ot+`
`+H)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(j===""||et==="")&&(it=!1);it&&(B.diagnostics={runnable:nt,programLog:X,vertexShader:{log:j,prefix:p},fragmentShader:{log:et,prefix:d}})}s.deleteShader(N),s.deleteShader(P),I=new rs(s,x),T=J1(s,x)}let I;this.getUniforms=function(){return I===void 0&&q(this),I};let T;this.getAttributes=function(){return T===void 0&&q(this),T};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(x,z1)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=H1++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=N,this.fragmentShader=P,this}var l3=0,Wl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Xl(t),e.set(t,n)),n}},Xl=class{constructor(t){this.id=l3++,this.code=t,this.usedTimes=0}};function c3(i,t,e,n,s,r,o){let a=new co,l=new Wl,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures,m=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(T){return c.add(T),T===0?"uv":`uv${T}`}function p(T,y,B,X,j){let et=X.fog,nt=j.geometry,it=T.isMeshStandardMaterial?X.environment:null,ot=(T.isMeshStandardMaterial?e:t).get(T.envMap||it),H=ot&&ot.mapping===Uo?ot.image.height:null,mt=g[T.type];T.precision!==null&&(m=s.getMaxPrecision(T.precision),m!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",m,"instead."));let xt=nt.morphAttributes.position||nt.morphAttributes.normal||nt.morphAttributes.color,bt=xt!==void 0?xt.length:0,qt=0;nt.morphAttributes.position!==void 0&&(qt=1),nt.morphAttributes.normal!==void 0&&(qt=2),nt.morphAttributes.color!==void 0&&(qt=3);let jt,U,D,R;if(mt){let oe=Mn[mt];jt=oe.vertexShader,U=oe.fragmentShader}else jt=T.vertexShader,U=T.fragmentShader,l.update(T),D=l.getVertexShaderID(T),R=l.getFragmentShaderID(T);let w=i.getRenderTarget(),tt=i.state.buffers.depth.getReversed(),ut=j.isInstancedMesh===!0,S=j.isBatchedMesh===!0,J=!!T.map,z=!!T.matcap,G=!!ot,b=!!T.aoMap,Z=!!T.lightMap,Q=!!T.bumpMap,lt=!!T.normalMap,F=!!T.displacementMap,L=!!T.emissiveMap,ht=!!T.metalnessMap,A=!!T.roughnessMap,M=T.anisotropy>0,K=T.clearcoat>0,at=T.dispersion>0,ft=T.iridescence>0,dt=T.sheen>0,Pt=T.transmission>0,Mt=M&&!!T.anisotropyMap,Et=K&&!!T.clearcoatMap,Gt=K&&!!T.clearcoatNormalMap,_t=K&&!!T.clearcoatRoughnessMap,Rt=ft&&!!T.iridescenceMap,Ot=ft&&!!T.iridescenceThicknessMap,kt=dt&&!!T.sheenColorMap,It=dt&&!!T.sheenRoughnessMap,Qt=!!T.specularMap,Yt=!!T.specularColorMap,ce=!!T.specularIntensityMap,V=Pt&&!!T.transmissionMap,wt=Pt&&!!T.thicknessMap,ct=!!T.gradientMap,gt=!!T.alphaMap,At=T.alphaTest>0,Tt=!!T.alphaHash,Wt=!!T.extensions,_e=ri;T.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(_e=i.toneMapping);let Ne={shaderID:mt,shaderType:T.type,shaderName:T.name,vertexShader:jt,fragmentShader:U,defines:T.defines,customVertexShaderID:D,customFragmentShaderID:R,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:m,batching:S,batchingColor:S&&j._colorsTexture!==null,instancing:ut,instancingColor:ut&&j.instanceColor!==null,instancingMorph:ut&&j.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:w===null?i.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:di,alphaToCoverage:!!T.alphaToCoverage,map:J,matcap:z,envMap:G,envMapMode:G&&ot.mapping,envMapCubeUVHeight:H,aoMap:b,lightMap:Z,bumpMap:Q,normalMap:lt,displacementMap:f&&F,emissiveMap:L,normalMapObjectSpace:lt&&T.normalMapType===Cf,normalMapTangentSpace:lt&&T.normalMapType===Gu,metalnessMap:ht,roughnessMap:A,anisotropy:M,anisotropyMap:Mt,clearcoat:K,clearcoatMap:Et,clearcoatNormalMap:Gt,clearcoatRoughnessMap:_t,dispersion:at,iridescence:ft,iridescenceMap:Rt,iridescenceThicknessMap:Ot,sheen:dt,sheenColorMap:kt,sheenRoughnessMap:It,specularMap:Qt,specularColorMap:Yt,specularIntensityMap:ce,transmission:Pt,transmissionMap:V,thicknessMap:wt,gradientMap:ct,opaque:T.transparent===!1&&T.blending===ns&&T.alphaToCoverage===!1,alphaMap:gt,alphaTest:At,alphaHash:Tt,combine:T.combine,mapUv:J&&x(T.map.channel),aoMapUv:b&&x(T.aoMap.channel),lightMapUv:Z&&x(T.lightMap.channel),bumpMapUv:Q&&x(T.bumpMap.channel),normalMapUv:lt&&x(T.normalMap.channel),displacementMapUv:F&&x(T.displacementMap.channel),emissiveMapUv:L&&x(T.emissiveMap.channel),metalnessMapUv:ht&&x(T.metalnessMap.channel),roughnessMapUv:A&&x(T.roughnessMap.channel),anisotropyMapUv:Mt&&x(T.anisotropyMap.channel),clearcoatMapUv:Et&&x(T.clearcoatMap.channel),clearcoatNormalMapUv:Gt&&x(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_t&&x(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Rt&&x(T.iridescenceMap.channel),iridescenceThicknessMapUv:Ot&&x(T.iridescenceThicknessMap.channel),sheenColorMapUv:kt&&x(T.sheenColorMap.channel),sheenRoughnessMapUv:It&&x(T.sheenRoughnessMap.channel),specularMapUv:Qt&&x(T.specularMap.channel),specularColorMapUv:Yt&&x(T.specularColorMap.channel),specularIntensityMapUv:ce&&x(T.specularIntensityMap.channel),transmissionMapUv:V&&x(T.transmissionMap.channel),thicknessMapUv:wt&&x(T.thicknessMap.channel),alphaMapUv:gt&&x(T.alphaMap.channel),vertexTangents:!!nt.attributes.tangent&&(lt||M),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!nt.attributes.color&&nt.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!nt.attributes.uv&&(J||gt),fog:!!et,useFog:T.fog===!0,fogExp2:!!et&&et.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:tt,skinning:j.isSkinnedMesh===!0,morphTargets:nt.morphAttributes.position!==void 0,morphNormals:nt.morphAttributes.normal!==void 0,morphColors:nt.morphAttributes.color!==void 0,morphTargetsCount:bt,morphTextureStride:qt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&B.length>0,shadowMapType:i.shadowMap.type,toneMapping:_e,decodeVideoTexture:J&&T.map.isVideoTexture===!0&&te.getTransfer(T.map.colorSpace)===le,decodeVideoTextureEmissive:L&&T.emissiveMap.isVideoTexture===!0&&te.getTransfer(T.emissiveMap.colorSpace)===le,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Bn,flipSided:T.side===ye,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Wt&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Wt&&T.extensions.multiDraw===!0||S)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ne.vertexUv1s=c.has(1),Ne.vertexUv2s=c.has(2),Ne.vertexUv3s=c.has(3),c.clear(),Ne}function d(T){let y=[];if(T.shaderID?y.push(T.shaderID):(y.push(T.customVertexShaderID),y.push(T.customFragmentShaderID)),T.defines!==void 0)for(let B in T.defines)y.push(B),y.push(T.defines[B]);return T.isRawShaderMaterial===!1&&(E(y,T),_(y,T),y.push(i.outputColorSpace)),y.push(T.customProgramCacheKey),y.join()}function E(T,y){T.push(y.precision),T.push(y.outputColorSpace),T.push(y.envMapMode),T.push(y.envMapCubeUVHeight),T.push(y.mapUv),T.push(y.alphaMapUv),T.push(y.lightMapUv),T.push(y.aoMapUv),T.push(y.bumpMapUv),T.push(y.normalMapUv),T.push(y.displacementMapUv),T.push(y.emissiveMapUv),T.push(y.metalnessMapUv),T.push(y.roughnessMapUv),T.push(y.anisotropyMapUv),T.push(y.clearcoatMapUv),T.push(y.clearcoatNormalMapUv),T.push(y.clearcoatRoughnessMapUv),T.push(y.iridescenceMapUv),T.push(y.iridescenceThicknessMapUv),T.push(y.sheenColorMapUv),T.push(y.sheenRoughnessMapUv),T.push(y.specularMapUv),T.push(y.specularColorMapUv),T.push(y.specularIntensityMapUv),T.push(y.transmissionMapUv),T.push(y.thicknessMapUv),T.push(y.combine),T.push(y.fogExp2),T.push(y.sizeAttenuation),T.push(y.morphTargetsCount),T.push(y.morphAttributeCount),T.push(y.numDirLights),T.push(y.numPointLights),T.push(y.numSpotLights),T.push(y.numSpotLightMaps),T.push(y.numHemiLights),T.push(y.numRectAreaLights),T.push(y.numDirLightShadows),T.push(y.numPointLightShadows),T.push(y.numSpotLightShadows),T.push(y.numSpotLightShadowsWithMaps),T.push(y.numLightProbes),T.push(y.shadowMapType),T.push(y.toneMapping),T.push(y.numClippingPlanes),T.push(y.numClipIntersection),T.push(y.depthPacking)}function _(T,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),T.push(a.mask)}function v(T){let y=g[T.type],B;if(y){let X=Mn[y];B=Qf.clone(X.uniforms)}else B=T.uniforms;return B}function N(T,y){let B;for(let X=0,j=h.length;X<j;X++){let et=h[X];if(et.cacheKey===y){B=et,++B.usedTimes;break}}return B===void 0&&(B=new a3(i,y,T,r),h.push(B)),B}function P(T){if(--T.usedTimes===0){let y=h.indexOf(T);h[y]=h[h.length-1],h.pop(),T.destroy()}}function q(T){l.remove(T)}function I(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:v,acquireProgram:N,releaseProgram:P,releaseShaderCache:q,programs:h,dispose:I}}function h3(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function u3(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function fu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function pu(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,f,m,g,x,p){let d=i[t];return d===void 0?(d={id:u.id,object:u,geometry:f,material:m,groupOrder:g,renderOrder:u.renderOrder,z:x,group:p},i[t]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=m,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=x,d.group=p),t++,d}function a(u,f,m,g,x,p){let d=o(u,f,m,g,x,p);m.transmission>0?n.push(d):m.transparent===!0?s.push(d):e.push(d)}function l(u,f,m,g,x,p){let d=o(u,f,m,g,x,p);m.transmission>0?n.unshift(d):m.transparent===!0?s.unshift(d):e.unshift(d)}function c(u,f){e.length>1&&e.sort(u||u3),n.length>1&&n.sort(f||fu),s.length>1&&s.sort(f||fu)}function h(){for(let u=t,f=i.length;u<f;u++){let m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function d3(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new pu,i.set(n,[o])):s>=r.length?(o=new pu,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function f3(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new k,color:new zt};break;case"SpotLight":e={position:new k,direction:new k,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new k,color:new zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new k,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":e={color:new zt,position:new k,halfWidth:new k,halfHeight:new k};break}return i[t.id]=e,e}}}function p3(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var m3=0;function g3(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function x3(i){let t=new f3,e=p3(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new k);let s=new k,r=new ae,o=new ae;function a(c){let h=0,u=0,f=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let m=0,g=0,x=0,p=0,d=0,E=0,_=0,v=0,N=0,P=0,q=0;c.sort(g3);for(let T=0,y=c.length;T<y;T++){let B=c[T],X=B.color,j=B.intensity,et=B.distance,nt=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)h+=X.r*j,u+=X.g*j,f+=X.b*j;else if(B.isLightProbe){for(let it=0;it<9;it++)n.probe[it].addScaledVector(B.sh.coefficients[it],j);q++}else if(B.isDirectionalLight){let it=t.get(B);if(it.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){let ot=B.shadow,H=e.get(B);H.shadowIntensity=ot.intensity,H.shadowBias=ot.bias,H.shadowNormalBias=ot.normalBias,H.shadowRadius=ot.radius,H.shadowMapSize=ot.mapSize,n.directionalShadow[m]=H,n.directionalShadowMap[m]=nt,n.directionalShadowMatrix[m]=B.shadow.matrix,E++}n.directional[m]=it,m++}else if(B.isSpotLight){let it=t.get(B);it.position.setFromMatrixPosition(B.matrixWorld),it.color.copy(X).multiplyScalar(j),it.distance=et,it.coneCos=Math.cos(B.angle),it.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),it.decay=B.decay,n.spot[x]=it;let ot=B.shadow;if(B.map&&(n.spotLightMap[N]=B.map,N++,ot.updateMatrices(B),B.castShadow&&P++),n.spotLightMatrix[x]=ot.matrix,B.castShadow){let H=e.get(B);H.shadowIntensity=ot.intensity,H.shadowBias=ot.bias,H.shadowNormalBias=ot.normalBias,H.shadowRadius=ot.radius,H.shadowMapSize=ot.mapSize,n.spotShadow[x]=H,n.spotShadowMap[x]=nt,v++}x++}else if(B.isRectAreaLight){let it=t.get(B);it.color.copy(X).multiplyScalar(j),it.halfWidth.set(B.width*.5,0,0),it.halfHeight.set(0,B.height*.5,0),n.rectArea[p]=it,p++}else if(B.isPointLight){let it=t.get(B);if(it.color.copy(B.color).multiplyScalar(B.intensity),it.distance=B.distance,it.decay=B.decay,B.castShadow){let ot=B.shadow,H=e.get(B);H.shadowIntensity=ot.intensity,H.shadowBias=ot.bias,H.shadowNormalBias=ot.normalBias,H.shadowRadius=ot.radius,H.shadowMapSize=ot.mapSize,H.shadowCameraNear=ot.camera.near,H.shadowCameraFar=ot.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=nt,n.pointShadowMatrix[g]=B.shadow.matrix,_++}n.point[g]=it,g++}else if(B.isHemisphereLight){let it=t.get(B);it.skyColor.copy(B.color).multiplyScalar(j),it.groundColor.copy(B.groundColor).multiplyScalar(j),n.hemi[d]=it,d++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=St.LTC_FLOAT_1,n.rectAreaLTC2=St.LTC_FLOAT_2):(n.rectAreaLTC1=St.LTC_HALF_1,n.rectAreaLTC2=St.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let I=n.hash;(I.directionalLength!==m||I.pointLength!==g||I.spotLength!==x||I.rectAreaLength!==p||I.hemiLength!==d||I.numDirectionalShadows!==E||I.numPointShadows!==_||I.numSpotShadows!==v||I.numSpotMaps!==N||I.numLightProbes!==q)&&(n.directional.length=m,n.spot.length=x,n.rectArea.length=p,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=v+N-P,n.spotLightMap.length=N,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=q,I.directionalLength=m,I.pointLength=g,I.spotLength=x,I.rectAreaLength=p,I.hemiLength=d,I.numDirectionalShadows=E,I.numPointShadows=_,I.numSpotShadows=v,I.numSpotMaps=N,I.numLightProbes=q,n.version=m3++)}function l(c,h){let u=0,f=0,m=0,g=0,x=0,p=h.matrixWorldInverse;for(let d=0,E=c.length;d<E;d++){let _=c[d];if(_.isDirectionalLight){let v=n.directional[u];v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(p),u++}else if(_.isSpotLight){let v=n.spot[m];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(p),v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(p),m++}else if(_.isRectAreaLight){let v=n.rectArea[g];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(p),o.identity(),r.copy(_.matrixWorld),r.premultiply(p),o.extractRotation(r),v.halfWidth.set(_.width*.5,0,0),v.halfHeight.set(0,_.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){let v=n.point[f];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(p),f++}else if(_.isHemisphereLight){let v=n.hemi[x];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(p),x++}}}return{setup:a,setupView:l,state:n}}function mu(i){let t=new x3(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function _3(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new mu(i),t.set(s,[a])):r>=o.length?(a=new mu(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Yl=class extends Wn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Ef,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Zl=class extends Wn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},v3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,y3=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function M3(i,t,e){let n=new tr,s=new pt,r=new pt,o=new ie,a=new Yl({depthPacking:Tf}),l=new Zl,c={},h=e.maxTextureSize,u={[ai]:ye,[ye]:ai,[Bn]:Bn},f=new Me({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:v3,fragmentShader:y3}),m=f.clone();m.defines.HORIZONTAL_PASS=1;let g=new Se;g.setAttribute("position",new Ae(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new $t(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pu;let d=this.type;this.render=function(P,q,I){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||P.length===0)return;let T=i.getRenderTarget(),y=i.getActiveCubeFace(),B=i.getActiveMipmapLevel(),X=i.state;X.setBlending(si),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);let j=d!==Fn&&this.type===Fn,et=d===Fn&&this.type!==Fn;for(let nt=0,it=P.length;nt<it;nt++){let ot=P[nt],H=ot.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",ot,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let mt=H.getFrameExtents();if(s.multiply(mt),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/mt.x),s.x=r.x*mt.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/mt.y),s.y=r.y*mt.y,H.mapSize.y=r.y)),H.map===null||j===!0||et===!0){let bt=this.type!==Fn?{minFilter:Je,magFilter:Je}:{};H.map!==null&&H.map.dispose(),H.map=new Xe(s.x,s.y,bt),H.map.texture.name=ot.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();let xt=H.getViewportCount();for(let bt=0;bt<xt;bt++){let qt=H.getViewport(bt);o.set(r.x*qt.x,r.y*qt.y,r.x*qt.z,r.y*qt.w),X.viewport(o),H.updateMatrices(ot,bt),n=H.getFrustum(),v(q,I,H.camera,ot,this.type)}H.isPointLightShadow!==!0&&this.type===Fn&&E(H,I),H.needsUpdate=!1}d=this.type,p.needsUpdate=!1,i.setRenderTarget(T,y,B)};function E(P,q){let I=t.update(x);f.defines.VSM_SAMPLES!==P.blurSamples&&(f.defines.VSM_SAMPLES=P.blurSamples,m.defines.VSM_SAMPLES=P.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Xe(s.x,s.y)),f.uniforms.shadow_pass.value=P.map.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(q,null,I,f,x,null),m.uniforms.shadow_pass.value=P.mapPass.texture,m.uniforms.resolution.value=P.mapSize,m.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(q,null,I,m,x,null)}function _(P,q,I,T){let y=null,B=I.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(B!==void 0)y=B;else if(y=I.isPointLight===!0?l:a,i.localClippingEnabled&&q.clipShadows===!0&&Array.isArray(q.clippingPlanes)&&q.clippingPlanes.length!==0||q.displacementMap&&q.displacementScale!==0||q.alphaMap&&q.alphaTest>0||q.map&&q.alphaTest>0){let X=y.uuid,j=q.uuid,et=c[X];et===void 0&&(et={},c[X]=et);let nt=et[j];nt===void 0&&(nt=y.clone(),et[j]=nt,q.addEventListener("dispose",N)),y=nt}if(y.visible=q.visible,y.wireframe=q.wireframe,T===Fn?y.side=q.shadowSide!==null?q.shadowSide:q.side:y.side=q.shadowSide!==null?q.shadowSide:u[q.side],y.alphaMap=q.alphaMap,y.alphaTest=q.alphaTest,y.map=q.map,y.clipShadows=q.clipShadows,y.clippingPlanes=q.clippingPlanes,y.clipIntersection=q.clipIntersection,y.displacementMap=q.displacementMap,y.displacementScale=q.displacementScale,y.displacementBias=q.displacementBias,y.wireframeLinewidth=q.wireframeLinewidth,y.linewidth=q.linewidth,I.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let X=i.properties.get(y);X.light=I}return y}function v(P,q,I,T,y){if(P.visible===!1)return;if(P.layers.test(q.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&y===Fn)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,P.matrixWorld);let j=t.update(P),et=P.material;if(Array.isArray(et)){let nt=j.groups;for(let it=0,ot=nt.length;it<ot;it++){let H=nt[it],mt=et[H.materialIndex];if(mt&&mt.visible){let xt=_(P,mt,T,y);P.onBeforeShadow(i,P,q,I,j,xt,H),i.renderBufferDirect(I,null,j,xt,P,H),P.onAfterShadow(i,P,q,I,j,xt,H)}}}else if(et.visible){let nt=_(P,et,T,y);P.onBeforeShadow(i,P,q,I,j,nt,null),i.renderBufferDirect(I,null,j,nt,P,null),P.onAfterShadow(i,P,q,I,j,nt,null)}}let X=P.children;for(let j=0,et=X.length;j<et;j++)v(X[j],q,I,T,y)}function N(P){P.target.removeEventListener("dispose",N);for(let I in c){let T=c[I],y=P.target.uuid;y in T&&(T[y].dispose(),delete T[y])}}}var b3={[Ka]:ja,[Qa]:nl,[tl]:il,[os]:el,[ja]:Ka,[nl]:Qa,[il]:tl,[el]:os};function S3(i,t){function e(){let V=!1,wt=new ie,ct=null,gt=new ie(0,0,0,0);return{setMask:function(At){ct!==At&&!V&&(i.colorMask(At,At,At,At),ct=At)},setLocked:function(At){V=At},setClear:function(At,Tt,Wt,_e,Ne){Ne===!0&&(At*=_e,Tt*=_e,Wt*=_e),wt.set(At,Tt,Wt,_e),gt.equals(wt)===!1&&(i.clearColor(At,Tt,Wt,_e),gt.copy(wt))},reset:function(){V=!1,ct=null,gt.set(-1,0,0,0)}}}function n(){let V=!1,wt=!1,ct=null,gt=null,At=null;return{setReversed:function(Tt){if(wt!==Tt){let Wt=t.get("EXT_clip_control");wt?Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.ZERO_TO_ONE_EXT):Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.NEGATIVE_ONE_TO_ONE_EXT);let _e=At;At=null,this.setClear(_e)}wt=Tt},getReversed:function(){return wt},setTest:function(Tt){Tt?w(i.DEPTH_TEST):tt(i.DEPTH_TEST)},setMask:function(Tt){ct!==Tt&&!V&&(i.depthMask(Tt),ct=Tt)},setFunc:function(Tt){if(wt&&(Tt=b3[Tt]),gt!==Tt){switch(Tt){case Ka:i.depthFunc(i.NEVER);break;case ja:i.depthFunc(i.ALWAYS);break;case Qa:i.depthFunc(i.LESS);break;case os:i.depthFunc(i.LEQUAL);break;case tl:i.depthFunc(i.EQUAL);break;case el:i.depthFunc(i.GEQUAL);break;case nl:i.depthFunc(i.GREATER);break;case il:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}gt=Tt}},setLocked:function(Tt){V=Tt},setClear:function(Tt){At!==Tt&&(wt&&(Tt=1-Tt),i.clearDepth(Tt),At=Tt)},reset:function(){V=!1,ct=null,gt=null,At=null,wt=!1}}}function s(){let V=!1,wt=null,ct=null,gt=null,At=null,Tt=null,Wt=null,_e=null,Ne=null;return{setTest:function(oe){V||(oe?w(i.STENCIL_TEST):tt(i.STENCIL_TEST))},setMask:function(oe){wt!==oe&&!V&&(i.stencilMask(oe),wt=oe)},setFunc:function(oe,ln,Rn){(ct!==oe||gt!==ln||At!==Rn)&&(i.stencilFunc(oe,ln,Rn),ct=oe,gt=ln,At=Rn)},setOp:function(oe,ln,Rn){(Tt!==oe||Wt!==ln||_e!==Rn)&&(i.stencilOp(oe,ln,Rn),Tt=oe,Wt=ln,_e=Rn)},setLocked:function(oe){V=oe},setClear:function(oe){Ne!==oe&&(i.clearStencil(oe),Ne=oe)},reset:function(){V=!1,wt=null,ct=null,gt=null,At=null,Tt=null,Wt=null,_e=null,Ne=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},f=new WeakMap,m=[],g=null,x=!1,p=null,d=null,E=null,_=null,v=null,N=null,P=null,q=new zt(0,0,0),I=0,T=!1,y=null,B=null,X=null,j=null,et=null,nt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),it=!1,ot=0,H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(ot=parseFloat(/^WebGL (\d)/.exec(H)[1]),it=ot>=1):H.indexOf("OpenGL ES")!==-1&&(ot=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),it=ot>=2);let mt=null,xt={},bt=i.getParameter(i.SCISSOR_BOX),qt=i.getParameter(i.VIEWPORT),jt=new ie().fromArray(bt),U=new ie().fromArray(qt);function D(V,wt,ct,gt){let At=new Uint8Array(4),Tt=i.createTexture();i.bindTexture(V,Tt),i.texParameteri(V,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(V,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Wt=0;Wt<ct;Wt++)V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?i.texImage3D(wt,0,i.RGBA,1,1,gt,0,i.RGBA,i.UNSIGNED_BYTE,At):i.texImage2D(wt+Wt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,At);return Tt}let R={};R[i.TEXTURE_2D]=D(i.TEXTURE_2D,i.TEXTURE_2D,1),R[i.TEXTURE_CUBE_MAP]=D(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),R[i.TEXTURE_2D_ARRAY]=D(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),R[i.TEXTURE_3D]=D(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),w(i.DEPTH_TEST),o.setFunc(os),Q(!1),lt(_h),w(i.CULL_FACE),b(si);function w(V){h[V]!==!0&&(i.enable(V),h[V]=!0)}function tt(V){h[V]!==!1&&(i.disable(V),h[V]=!1)}function ut(V,wt){return u[V]!==wt?(i.bindFramebuffer(V,wt),u[V]=wt,V===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=wt),V===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=wt),!0):!1}function S(V,wt){let ct=m,gt=!1;if(V){ct=f.get(wt),ct===void 0&&(ct=[],f.set(wt,ct));let At=V.textures;if(ct.length!==At.length||ct[0]!==i.COLOR_ATTACHMENT0){for(let Tt=0,Wt=At.length;Tt<Wt;Tt++)ct[Tt]=i.COLOR_ATTACHMENT0+Tt;ct.length=At.length,gt=!0}}else ct[0]!==i.BACK&&(ct[0]=i.BACK,gt=!0);gt&&i.drawBuffers(ct)}function J(V){return g!==V?(i.useProgram(V),g=V,!0):!1}let z={[kn]:i.FUNC_ADD,[jd]:i.FUNC_SUBTRACT,[Qd]:i.FUNC_REVERSE_SUBTRACT};z[tf]=i.MIN,z[ef]=i.MAX;let G={[nf]:i.ZERO,[wc]:i.ONE,[sf]:i.SRC_COLOR,[Ja]:i.SRC_ALPHA,[hf]:i.SRC_ALPHA_SATURATE,[lf]:i.DST_COLOR,[of]:i.DST_ALPHA,[rf]:i.ONE_MINUS_SRC_COLOR,[$s]:i.ONE_MINUS_SRC_ALPHA,[cf]:i.ONE_MINUS_DST_COLOR,[af]:i.ONE_MINUS_DST_ALPHA,[uf]:i.CONSTANT_COLOR,[df]:i.ONE_MINUS_CONSTANT_COLOR,[ff]:i.CONSTANT_ALPHA,[pf]:i.ONE_MINUS_CONSTANT_ALPHA};function b(V,wt,ct,gt,At,Tt,Wt,_e,Ne,oe){if(V===si){x===!0&&(tt(i.BLEND),x=!1);return}if(x===!1&&(w(i.BLEND),x=!0),V!==Sc){if(V!==p||oe!==T){if((d!==kn||v!==kn)&&(i.blendEquation(i.FUNC_ADD),d=kn,v=kn),oe)switch(V){case ns:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case li:i.blendFunc(i.ONE,i.ONE);break;case vh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case yh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case ns:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case li:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case vh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case yh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}E=null,_=null,N=null,P=null,q.set(0,0,0),I=0,p=V,T=oe}return}At=At||wt,Tt=Tt||ct,Wt=Wt||gt,(wt!==d||At!==v)&&(i.blendEquationSeparate(z[wt],z[At]),d=wt,v=At),(ct!==E||gt!==_||Tt!==N||Wt!==P)&&(i.blendFuncSeparate(G[ct],G[gt],G[Tt],G[Wt]),E=ct,_=gt,N=Tt,P=Wt),(_e.equals(q)===!1||Ne!==I)&&(i.blendColor(_e.r,_e.g,_e.b,Ne),q.copy(_e),I=Ne),p=V,T=!1}function Z(V,wt){V.side===Bn?tt(i.CULL_FACE):w(i.CULL_FACE);let ct=V.side===ye;wt&&(ct=!ct),Q(ct),V.blending===ns&&V.transparent===!1?b(si):b(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),o.setFunc(V.depthFunc),o.setTest(V.depthTest),o.setMask(V.depthWrite),r.setMask(V.colorWrite);let gt=V.stencilWrite;a.setTest(gt),gt&&(a.setMask(V.stencilWriteMask),a.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),a.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),L(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?w(i.SAMPLE_ALPHA_TO_COVERAGE):tt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Q(V){y!==V&&(V?i.frontFace(i.CW):i.frontFace(i.CCW),y=V)}function lt(V){V!==$d?(w(i.CULL_FACE),V!==B&&(V===_h?i.cullFace(i.BACK):V===Jd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):tt(i.CULL_FACE),B=V}function F(V){V!==X&&(it&&i.lineWidth(V),X=V)}function L(V,wt,ct){V?(w(i.POLYGON_OFFSET_FILL),(j!==wt||et!==ct)&&(i.polygonOffset(wt,ct),j=wt,et=ct)):tt(i.POLYGON_OFFSET_FILL)}function ht(V){V?w(i.SCISSOR_TEST):tt(i.SCISSOR_TEST)}function A(V){V===void 0&&(V=i.TEXTURE0+nt-1),mt!==V&&(i.activeTexture(V),mt=V)}function M(V,wt,ct){ct===void 0&&(mt===null?ct=i.TEXTURE0+nt-1:ct=mt);let gt=xt[ct];gt===void 0&&(gt={type:void 0,texture:void 0},xt[ct]=gt),(gt.type!==V||gt.texture!==wt)&&(mt!==ct&&(i.activeTexture(ct),mt=ct),i.bindTexture(V,wt||R[V]),gt.type=V,gt.texture=wt)}function K(){let V=xt[mt];V!==void 0&&V.type!==void 0&&(i.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function at(){try{i.compressedTexImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ft(){try{i.compressedTexImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function dt(){try{i.texSubImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Pt(){try{i.texSubImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Mt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Et(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Gt(){try{i.texStorage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function _t(){try{i.texStorage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Rt(){try{i.texImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ot(){try{i.texImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function kt(V){jt.equals(V)===!1&&(i.scissor(V.x,V.y,V.z,V.w),jt.copy(V))}function It(V){U.equals(V)===!1&&(i.viewport(V.x,V.y,V.z,V.w),U.copy(V))}function Qt(V,wt){let ct=c.get(wt);ct===void 0&&(ct=new WeakMap,c.set(wt,ct));let gt=ct.get(V);gt===void 0&&(gt=i.getUniformBlockIndex(wt,V.name),ct.set(V,gt))}function Yt(V,wt){let gt=c.get(wt).get(V);l.get(wt)!==gt&&(i.uniformBlockBinding(wt,gt,V.__bindingPointIndex),l.set(wt,gt))}function ce(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},mt=null,xt={},u={},f=new WeakMap,m=[],g=null,x=!1,p=null,d=null,E=null,_=null,v=null,N=null,P=null,q=new zt(0,0,0),I=0,T=!1,y=null,B=null,X=null,j=null,et=null,jt.set(0,0,i.canvas.width,i.canvas.height),U.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:w,disable:tt,bindFramebuffer:ut,drawBuffers:S,useProgram:J,setBlending:b,setMaterial:Z,setFlipSided:Q,setCullFace:lt,setLineWidth:F,setPolygonOffset:L,setScissorTest:ht,activeTexture:A,bindTexture:M,unbindTexture:K,compressedTexImage2D:at,compressedTexImage3D:ft,texImage2D:Rt,texImage3D:Ot,updateUBOMapping:Qt,uniformBlockBinding:Yt,texStorage2D:Gt,texStorage3D:_t,texSubImage2D:dt,texSubImage3D:Pt,compressedTexSubImage2D:Mt,compressedTexSubImage3D:Et,scissor:kt,viewport:It,reset:ce}}function gu(i,t,e,n){let s=w3(n);switch(e){case Fu:return i*t;case Bu:return i*t;case ku:return i*t*2;case zu:return i*t/s.components*s.byteLength;case Ac:return i*t/s.components*s.byteLength;case Hu:return i*t*2/s.components*s.byteLength;case Rc:return i*t*2/s.components*s.byteLength;case Ou:return i*t*3/s.components*s.byteLength;case fn:return i*t*4/s.components*s.byteLength;case Ic:return i*t*4/s.components*s.byteLength;case to:case eo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case no:case io:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case cl:case ul:return Math.max(i,16)*Math.max(t,8)/4;case ll:case hl:return Math.max(i,8)*Math.max(t,8)/2;case dl:case fl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case pl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ml:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case gl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case xl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case _l:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case vl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case yl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ml:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case bl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Sl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case wl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case El:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Tl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Cl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Al:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case so:case Rl:case Il:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Vu:case Pl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ll:case Dl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function w3(i){switch(i){case pn:case Uu:return{byteLength:1,components:1};case Js:case Nu:case Ni:return{byteLength:2,components:1};case Tc:case Cc:return{byteLength:2,components:4};case Ti:case Ec:case Hn:return{byteLength:4,components:1};case qu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function E3(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new pt,h=new WeakMap,u,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,M){return m?new OffscreenCanvas(A,M):Ks("canvas")}function x(A,M,K){let at=1,ft=ht(A);if((ft.width>K||ft.height>K)&&(at=K/Math.max(ft.width,ft.height)),at<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let dt=Math.floor(at*ft.width),Pt=Math.floor(at*ft.height);u===void 0&&(u=g(dt,Pt));let Mt=M?g(dt,Pt):u;return Mt.width=dt,Mt.height=Pt,Mt.getContext("2d").drawImage(A,0,0,dt,Pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ft.width+"x"+ft.height+") to ("+dt+"x"+Pt+")."),Mt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ft.width+"x"+ft.height+")."),A;return A}function p(A){return A.generateMipmaps}function d(A){i.generateMipmap(A)}function E(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(A,M,K,at,ft=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let dt=M;if(M===i.RED&&(K===i.FLOAT&&(dt=i.R32F),K===i.HALF_FLOAT&&(dt=i.R16F),K===i.UNSIGNED_BYTE&&(dt=i.R8)),M===i.RED_INTEGER&&(K===i.UNSIGNED_BYTE&&(dt=i.R8UI),K===i.UNSIGNED_SHORT&&(dt=i.R16UI),K===i.UNSIGNED_INT&&(dt=i.R32UI),K===i.BYTE&&(dt=i.R8I),K===i.SHORT&&(dt=i.R16I),K===i.INT&&(dt=i.R32I)),M===i.RG&&(K===i.FLOAT&&(dt=i.RG32F),K===i.HALF_FLOAT&&(dt=i.RG16F),K===i.UNSIGNED_BYTE&&(dt=i.RG8)),M===i.RG_INTEGER&&(K===i.UNSIGNED_BYTE&&(dt=i.RG8UI),K===i.UNSIGNED_SHORT&&(dt=i.RG16UI),K===i.UNSIGNED_INT&&(dt=i.RG32UI),K===i.BYTE&&(dt=i.RG8I),K===i.SHORT&&(dt=i.RG16I),K===i.INT&&(dt=i.RG32I)),M===i.RGB_INTEGER&&(K===i.UNSIGNED_BYTE&&(dt=i.RGB8UI),K===i.UNSIGNED_SHORT&&(dt=i.RGB16UI),K===i.UNSIGNED_INT&&(dt=i.RGB32UI),K===i.BYTE&&(dt=i.RGB8I),K===i.SHORT&&(dt=i.RGB16I),K===i.INT&&(dt=i.RGB32I)),M===i.RGBA_INTEGER&&(K===i.UNSIGNED_BYTE&&(dt=i.RGBA8UI),K===i.UNSIGNED_SHORT&&(dt=i.RGBA16UI),K===i.UNSIGNED_INT&&(dt=i.RGBA32UI),K===i.BYTE&&(dt=i.RGBA8I),K===i.SHORT&&(dt=i.RGBA16I),K===i.INT&&(dt=i.RGBA32I)),M===i.RGB&&K===i.UNSIGNED_INT_5_9_9_9_REV&&(dt=i.RGB9_E5),M===i.RGBA){let Pt=ft?No:te.getTransfer(at);K===i.FLOAT&&(dt=i.RGBA32F),K===i.HALF_FLOAT&&(dt=i.RGBA16F),K===i.UNSIGNED_BYTE&&(dt=Pt===le?i.SRGB8_ALPHA8:i.RGBA8),K===i.UNSIGNED_SHORT_4_4_4_4&&(dt=i.RGBA4),K===i.UNSIGNED_SHORT_5_5_5_1&&(dt=i.RGB5_A1)}return(dt===i.R16F||dt===i.R32F||dt===i.RG16F||dt===i.RG32F||dt===i.RGBA16F||dt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),dt}function v(A,M){let K;return A?M===null||M===Ti||M===cs?K=i.DEPTH24_STENCIL8:M===Hn?K=i.DEPTH32F_STENCIL8:M===Js&&(K=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ti||M===cs?K=i.DEPTH_COMPONENT24:M===Hn?K=i.DEPTH_COMPONENT32F:M===Js&&(K=i.DEPTH_COMPONENT16),K}function N(A,M){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==Je&&A.minFilter!==ge?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function P(A){let M=A.target;M.removeEventListener("dispose",P),I(M),M.isVideoTexture&&h.delete(M)}function q(A){let M=A.target;M.removeEventListener("dispose",q),y(M)}function I(A){let M=n.get(A);if(M.__webglInit===void 0)return;let K=A.source,at=f.get(K);if(at){let ft=at[M.__cacheKey];ft.usedTimes--,ft.usedTimes===0&&T(A),Object.keys(at).length===0&&f.delete(K)}n.remove(A)}function T(A){let M=n.get(A);i.deleteTexture(M.__webglTexture);let K=A.source,at=f.get(K);delete at[M.__cacheKey],o.memory.textures--}function y(A){let M=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let at=0;at<6;at++){if(Array.isArray(M.__webglFramebuffer[at]))for(let ft=0;ft<M.__webglFramebuffer[at].length;ft++)i.deleteFramebuffer(M.__webglFramebuffer[at][ft]);else i.deleteFramebuffer(M.__webglFramebuffer[at]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[at])}else{if(Array.isArray(M.__webglFramebuffer))for(let at=0;at<M.__webglFramebuffer.length;at++)i.deleteFramebuffer(M.__webglFramebuffer[at]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let at=0;at<M.__webglColorRenderbuffer.length;at++)M.__webglColorRenderbuffer[at]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[at]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let K=A.textures;for(let at=0,ft=K.length;at<ft;at++){let dt=n.get(K[at]);dt.__webglTexture&&(i.deleteTexture(dt.__webglTexture),o.memory.textures--),n.remove(K[at])}n.remove(A)}let B=0;function X(){B=0}function j(){let A=B;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),B+=1,A}function et(A){let M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function nt(A,M){let K=n.get(A);if(A.isVideoTexture&&F(A),A.isRenderTargetTexture===!1&&A.version>0&&K.__version!==A.version){let at=A.image;if(at===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(at.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{U(K,A,M);return}}e.bindTexture(i.TEXTURE_2D,K.__webglTexture,i.TEXTURE0+M)}function it(A,M){let K=n.get(A);if(A.version>0&&K.__version!==A.version){U(K,A,M);return}e.bindTexture(i.TEXTURE_2D_ARRAY,K.__webglTexture,i.TEXTURE0+M)}function ot(A,M){let K=n.get(A);if(A.version>0&&K.__version!==A.version){U(K,A,M);return}e.bindTexture(i.TEXTURE_3D,K.__webglTexture,i.TEXTURE0+M)}function H(A,M){let K=n.get(A);if(A.version>0&&K.__version!==A.version){D(K,A,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture,i.TEXTURE0+M)}let mt={[ol]:i.REPEAT,[Ei]:i.CLAMP_TO_EDGE,[al]:i.MIRRORED_REPEAT},xt={[Je]:i.NEAREST,[wf]:i.NEAREST_MIPMAP_NEAREST,[Er]:i.NEAREST_MIPMAP_LINEAR,[ge]:i.LINEAR,[pa]:i.LINEAR_MIPMAP_NEAREST,[zn]:i.LINEAR_MIPMAP_LINEAR},bt={[Af]:i.NEVER,[Uf]:i.ALWAYS,[Rf]:i.LESS,[Wu]:i.LEQUAL,[If]:i.EQUAL,[Df]:i.GEQUAL,[Pf]:i.GREATER,[Lf]:i.NOTEQUAL};function qt(A,M){if(M.type===Hn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===ge||M.magFilter===pa||M.magFilter===Er||M.magFilter===zn||M.minFilter===ge||M.minFilter===pa||M.minFilter===Er||M.minFilter===zn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,mt[M.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,mt[M.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,mt[M.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,xt[M.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,xt[M.minFilter]),M.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,bt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Je||M.minFilter!==Er&&M.minFilter!==zn||M.type===Hn&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let K=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function jt(A,M){let K=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",P));let at=M.source,ft=f.get(at);ft===void 0&&(ft={},f.set(at,ft));let dt=et(M);if(dt!==A.__cacheKey){ft[dt]===void 0&&(ft[dt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,K=!0),ft[dt].usedTimes++;let Pt=ft[A.__cacheKey];Pt!==void 0&&(ft[A.__cacheKey].usedTimes--,Pt.usedTimes===0&&T(M)),A.__cacheKey=dt,A.__webglTexture=ft[dt].texture}return K}function U(A,M,K){let at=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(at=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(at=i.TEXTURE_3D);let ft=jt(A,M),dt=M.source;e.bindTexture(at,A.__webglTexture,i.TEXTURE0+K);let Pt=n.get(dt);if(dt.version!==Pt.__version||ft===!0){e.activeTexture(i.TEXTURE0+K);let Mt=te.getPrimaries(te.workingColorSpace),Et=M.colorSpace===Ve?null:te.getPrimaries(M.colorSpace),Gt=M.colorSpace===Ve||Mt===Et?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt);let _t=x(M.image,!1,s.maxTextureSize);_t=L(M,_t);let Rt=r.convert(M.format,M.colorSpace),Ot=r.convert(M.type),kt=_(M.internalFormat,Rt,Ot,M.colorSpace,M.isVideoTexture);qt(at,M);let It,Qt=M.mipmaps,Yt=M.isVideoTexture!==!0,ce=Pt.__version===void 0||ft===!0,V=dt.dataReady,wt=N(M,_t);if(M.isDepthTexture)kt=v(M.format===hs,M.type),ce&&(Yt?e.texStorage2D(i.TEXTURE_2D,1,kt,_t.width,_t.height):e.texImage2D(i.TEXTURE_2D,0,kt,_t.width,_t.height,0,Rt,Ot,null));else if(M.isDataTexture)if(Qt.length>0){Yt&&ce&&e.texStorage2D(i.TEXTURE_2D,wt,kt,Qt[0].width,Qt[0].height);for(let ct=0,gt=Qt.length;ct<gt;ct++)It=Qt[ct],Yt?V&&e.texSubImage2D(i.TEXTURE_2D,ct,0,0,It.width,It.height,Rt,Ot,It.data):e.texImage2D(i.TEXTURE_2D,ct,kt,It.width,It.height,0,Rt,Ot,It.data);M.generateMipmaps=!1}else Yt?(ce&&e.texStorage2D(i.TEXTURE_2D,wt,kt,_t.width,_t.height),V&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,_t.width,_t.height,Rt,Ot,_t.data)):e.texImage2D(i.TEXTURE_2D,0,kt,_t.width,_t.height,0,Rt,Ot,_t.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Yt&&ce&&e.texStorage3D(i.TEXTURE_2D_ARRAY,wt,kt,Qt[0].width,Qt[0].height,_t.depth);for(let ct=0,gt=Qt.length;ct<gt;ct++)if(It=Qt[ct],M.format!==fn)if(Rt!==null)if(Yt){if(V)if(M.layerUpdates.size>0){let At=gu(It.width,It.height,M.format,M.type);for(let Tt of M.layerUpdates){let Wt=It.data.subarray(Tt*At/It.data.BYTES_PER_ELEMENT,(Tt+1)*At/It.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,Tt,It.width,It.height,1,Rt,Wt)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,0,It.width,It.height,_t.depth,Rt,It.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ct,kt,It.width,It.height,_t.depth,0,It.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Yt?V&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,0,It.width,It.height,_t.depth,Rt,Ot,It.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ct,kt,It.width,It.height,_t.depth,0,Rt,Ot,It.data)}else{Yt&&ce&&e.texStorage2D(i.TEXTURE_2D,wt,kt,Qt[0].width,Qt[0].height);for(let ct=0,gt=Qt.length;ct<gt;ct++)It=Qt[ct],M.format!==fn?Rt!==null?Yt?V&&e.compressedTexSubImage2D(i.TEXTURE_2D,ct,0,0,It.width,It.height,Rt,It.data):e.compressedTexImage2D(i.TEXTURE_2D,ct,kt,It.width,It.height,0,It.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?V&&e.texSubImage2D(i.TEXTURE_2D,ct,0,0,It.width,It.height,Rt,Ot,It.data):e.texImage2D(i.TEXTURE_2D,ct,kt,It.width,It.height,0,Rt,Ot,It.data)}else if(M.isDataArrayTexture)if(Yt){if(ce&&e.texStorage3D(i.TEXTURE_2D_ARRAY,wt,kt,_t.width,_t.height,_t.depth),V)if(M.layerUpdates.size>0){let ct=gu(_t.width,_t.height,M.format,M.type);for(let gt of M.layerUpdates){let At=_t.data.subarray(gt*ct/_t.data.BYTES_PER_ELEMENT,(gt+1)*ct/_t.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,gt,_t.width,_t.height,1,Rt,Ot,At)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,_t.width,_t.height,_t.depth,Rt,Ot,_t.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,kt,_t.width,_t.height,_t.depth,0,Rt,Ot,_t.data);else if(M.isData3DTexture)Yt?(ce&&e.texStorage3D(i.TEXTURE_3D,wt,kt,_t.width,_t.height,_t.depth),V&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,_t.width,_t.height,_t.depth,Rt,Ot,_t.data)):e.texImage3D(i.TEXTURE_3D,0,kt,_t.width,_t.height,_t.depth,0,Rt,Ot,_t.data);else if(M.isFramebufferTexture){if(ce)if(Yt)e.texStorage2D(i.TEXTURE_2D,wt,kt,_t.width,_t.height);else{let ct=_t.width,gt=_t.height;for(let At=0;At<wt;At++)e.texImage2D(i.TEXTURE_2D,At,kt,ct,gt,0,Rt,Ot,null),ct>>=1,gt>>=1}}else if(Qt.length>0){if(Yt&&ce){let ct=ht(Qt[0]);e.texStorage2D(i.TEXTURE_2D,wt,kt,ct.width,ct.height)}for(let ct=0,gt=Qt.length;ct<gt;ct++)It=Qt[ct],Yt?V&&e.texSubImage2D(i.TEXTURE_2D,ct,0,0,Rt,Ot,It):e.texImage2D(i.TEXTURE_2D,ct,kt,Rt,Ot,It);M.generateMipmaps=!1}else if(Yt){if(ce){let ct=ht(_t);e.texStorage2D(i.TEXTURE_2D,wt,kt,ct.width,ct.height)}V&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Rt,Ot,_t)}else e.texImage2D(i.TEXTURE_2D,0,kt,Rt,Ot,_t);p(M)&&d(at),Pt.__version=dt.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function D(A,M,K){if(M.image.length!==6)return;let at=jt(A,M),ft=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+K);let dt=n.get(ft);if(ft.version!==dt.__version||at===!0){e.activeTexture(i.TEXTURE0+K);let Pt=te.getPrimaries(te.workingColorSpace),Mt=M.colorSpace===Ve?null:te.getPrimaries(M.colorSpace),Et=M.colorSpace===Ve||Pt===Mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);let Gt=M.isCompressedTexture||M.image[0].isCompressedTexture,_t=M.image[0]&&M.image[0].isDataTexture,Rt=[];for(let gt=0;gt<6;gt++)!Gt&&!_t?Rt[gt]=x(M.image[gt],!0,s.maxCubemapSize):Rt[gt]=_t?M.image[gt].image:M.image[gt],Rt[gt]=L(M,Rt[gt]);let Ot=Rt[0],kt=r.convert(M.format,M.colorSpace),It=r.convert(M.type),Qt=_(M.internalFormat,kt,It,M.colorSpace),Yt=M.isVideoTexture!==!0,ce=dt.__version===void 0||at===!0,V=ft.dataReady,wt=N(M,Ot);qt(i.TEXTURE_CUBE_MAP,M);let ct;if(Gt){Yt&&ce&&e.texStorage2D(i.TEXTURE_CUBE_MAP,wt,Qt,Ot.width,Ot.height);for(let gt=0;gt<6;gt++){ct=Rt[gt].mipmaps;for(let At=0;At<ct.length;At++){let Tt=ct[At];M.format!==fn?kt!==null?Yt?V&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,At,0,0,Tt.width,Tt.height,kt,Tt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,At,Qt,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Yt?V&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,At,0,0,Tt.width,Tt.height,kt,It,Tt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,At,Qt,Tt.width,Tt.height,0,kt,It,Tt.data)}}}else{if(ct=M.mipmaps,Yt&&ce){ct.length>0&&wt++;let gt=ht(Rt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,wt,Qt,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(_t){Yt?V&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Rt[gt].width,Rt[gt].height,kt,It,Rt[gt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,Qt,Rt[gt].width,Rt[gt].height,0,kt,It,Rt[gt].data);for(let At=0;At<ct.length;At++){let Wt=ct[At].image[gt].image;Yt?V&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,At+1,0,0,Wt.width,Wt.height,kt,It,Wt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,At+1,Qt,Wt.width,Wt.height,0,kt,It,Wt.data)}}else{Yt?V&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,kt,It,Rt[gt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,Qt,kt,It,Rt[gt]);for(let At=0;At<ct.length;At++){let Tt=ct[At];Yt?V&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,At+1,0,0,kt,It,Tt.image[gt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,At+1,Qt,kt,It,Tt.image[gt])}}}p(M)&&d(i.TEXTURE_CUBE_MAP),dt.__version=ft.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function R(A,M,K,at,ft,dt){let Pt=r.convert(K.format,K.colorSpace),Mt=r.convert(K.type),Et=_(K.internalFormat,Pt,Mt,K.colorSpace),Gt=n.get(M),_t=n.get(K);if(_t.__renderTarget=M,!Gt.__hasExternalTextures){let Rt=Math.max(1,M.width>>dt),Ot=Math.max(1,M.height>>dt);ft===i.TEXTURE_3D||ft===i.TEXTURE_2D_ARRAY?e.texImage3D(ft,dt,Et,Rt,Ot,M.depth,0,Pt,Mt,null):e.texImage2D(ft,dt,Et,Rt,Ot,0,Pt,Mt,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),lt(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,at,ft,_t.__webglTexture,0,Q(M)):(ft===i.TEXTURE_2D||ft>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ft<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,at,ft,_t.__webglTexture,dt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function w(A,M,K){if(i.bindRenderbuffer(i.RENDERBUFFER,A),M.depthBuffer){let at=M.depthTexture,ft=at&&at.isDepthTexture?at.type:null,dt=v(M.stencilBuffer,ft),Pt=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Mt=Q(M);lt(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Mt,dt,M.width,M.height):K?i.renderbufferStorageMultisample(i.RENDERBUFFER,Mt,dt,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,dt,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Pt,i.RENDERBUFFER,A)}else{let at=M.textures;for(let ft=0;ft<at.length;ft++){let dt=at[ft],Pt=r.convert(dt.format,dt.colorSpace),Mt=r.convert(dt.type),Et=_(dt.internalFormat,Pt,Mt,dt.colorSpace),Gt=Q(M);K&&lt(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt,Et,M.width,M.height):lt(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Gt,Et,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Et,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function tt(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let at=n.get(M.depthTexture);at.__renderTarget=M,(!at.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),nt(M.depthTexture,0);let ft=at.__webglTexture,dt=Q(M);if(M.depthTexture.format===is)lt(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ft,0,dt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ft,0);else if(M.depthTexture.format===hs)lt(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ft,0,dt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ft,0);else throw new Error("Unknown depthTexture format")}function ut(A){let M=n.get(A),K=A.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==A.depthTexture){let at=A.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),at){let ft=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,at.removeEventListener("dispose",ft)};at.addEventListener("dispose",ft),M.__depthDisposeCallback=ft}M.__boundDepthTexture=at}if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");tt(M.__webglFramebuffer,A)}else if(K){M.__webglDepthbuffer=[];for(let at=0;at<6;at++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[at]),M.__webglDepthbuffer[at]===void 0)M.__webglDepthbuffer[at]=i.createRenderbuffer(),w(M.__webglDepthbuffer[at],A,!1);else{let ft=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=M.__webglDepthbuffer[at];i.bindRenderbuffer(i.RENDERBUFFER,dt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ft,i.RENDERBUFFER,dt)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),w(M.__webglDepthbuffer,A,!1);else{let at=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ft),i.framebufferRenderbuffer(i.FRAMEBUFFER,at,i.RENDERBUFFER,ft)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function S(A,M,K){let at=n.get(A);M!==void 0&&R(at.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),K!==void 0&&ut(A)}function J(A){let M=A.texture,K=n.get(A),at=n.get(M);A.addEventListener("dispose",q);let ft=A.textures,dt=A.isWebGLCubeRenderTarget===!0,Pt=ft.length>1;if(Pt||(at.__webglTexture===void 0&&(at.__webglTexture=i.createTexture()),at.__version=M.version,o.memory.textures++),dt){K.__webglFramebuffer=[];for(let Mt=0;Mt<6;Mt++)if(M.mipmaps&&M.mipmaps.length>0){K.__webglFramebuffer[Mt]=[];for(let Et=0;Et<M.mipmaps.length;Et++)K.__webglFramebuffer[Mt][Et]=i.createFramebuffer()}else K.__webglFramebuffer[Mt]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){K.__webglFramebuffer=[];for(let Mt=0;Mt<M.mipmaps.length;Mt++)K.__webglFramebuffer[Mt]=i.createFramebuffer()}else K.__webglFramebuffer=i.createFramebuffer();if(Pt)for(let Mt=0,Et=ft.length;Mt<Et;Mt++){let Gt=n.get(ft[Mt]);Gt.__webglTexture===void 0&&(Gt.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&lt(A)===!1){K.__webglMultisampledFramebuffer=i.createFramebuffer(),K.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let Mt=0;Mt<ft.length;Mt++){let Et=ft[Mt];K.__webglColorRenderbuffer[Mt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,K.__webglColorRenderbuffer[Mt]);let Gt=r.convert(Et.format,Et.colorSpace),_t=r.convert(Et.type),Rt=_(Et.internalFormat,Gt,_t,Et.colorSpace,A.isXRRenderTarget===!0),Ot=Q(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ot,Rt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,K.__webglColorRenderbuffer[Mt])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(K.__webglDepthRenderbuffer=i.createRenderbuffer(),w(K.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(dt){e.bindTexture(i.TEXTURE_CUBE_MAP,at.__webglTexture),qt(i.TEXTURE_CUBE_MAP,M);for(let Mt=0;Mt<6;Mt++)if(M.mipmaps&&M.mipmaps.length>0)for(let Et=0;Et<M.mipmaps.length;Et++)R(K.__webglFramebuffer[Mt][Et],A,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Et);else R(K.__webglFramebuffer[Mt],A,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0);p(M)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Pt){for(let Mt=0,Et=ft.length;Mt<Et;Mt++){let Gt=ft[Mt],_t=n.get(Gt);e.bindTexture(i.TEXTURE_2D,_t.__webglTexture),qt(i.TEXTURE_2D,Gt),R(K.__webglFramebuffer,A,Gt,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,0),p(Gt)&&d(i.TEXTURE_2D)}e.unbindTexture()}else{let Mt=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Mt=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Mt,at.__webglTexture),qt(Mt,M),M.mipmaps&&M.mipmaps.length>0)for(let Et=0;Et<M.mipmaps.length;Et++)R(K.__webglFramebuffer[Et],A,M,i.COLOR_ATTACHMENT0,Mt,Et);else R(K.__webglFramebuffer,A,M,i.COLOR_ATTACHMENT0,Mt,0);p(M)&&d(Mt),e.unbindTexture()}A.depthBuffer&&ut(A)}function z(A){let M=A.textures;for(let K=0,at=M.length;K<at;K++){let ft=M[K];if(p(ft)){let dt=E(A),Pt=n.get(ft).__webglTexture;e.bindTexture(dt,Pt),d(dt),e.unbindTexture()}}}let G=[],b=[];function Z(A){if(A.samples>0){if(lt(A)===!1){let M=A.textures,K=A.width,at=A.height,ft=i.COLOR_BUFFER_BIT,dt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pt=n.get(A),Mt=M.length>1;if(Mt)for(let Et=0;Et<M.length;Et++)e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let Et=0;Et<M.length;Et++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ft|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ft|=i.STENCIL_BUFFER_BIT)),Mt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Pt.__webglColorRenderbuffer[Et]);let Gt=n.get(M[Et]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Gt,0)}i.blitFramebuffer(0,0,K,at,0,0,K,at,ft,i.NEAREST),l===!0&&(G.length=0,b.length=0,G.push(i.COLOR_ATTACHMENT0+Et),A.depthBuffer&&A.resolveDepthBuffer===!1&&(G.push(dt),b.push(dt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,b)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,G))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Mt)for(let Et=0;Et<M.length;Et++){e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.RENDERBUFFER,Pt.__webglColorRenderbuffer[Et]);let Gt=n.get(M[Et]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.TEXTURE_2D,Gt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let M=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function Q(A){return Math.min(s.maxSamples,A.samples)}function lt(A){let M=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function F(A){let M=o.render.frame;h.get(A)!==M&&(h.set(A,M),A.update())}function L(A,M){let K=A.colorSpace,at=A.format,ft=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||K!==di&&K!==Ve&&(te.getTransfer(K)===le?(at!==fn||ft!==pn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),M}function ht(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=j,this.resetTextureUnits=X,this.setTexture2D=nt,this.setTexture2DArray=it,this.setTexture3D=ot,this.setTextureCube=H,this.rebindTextures=S,this.setupRenderTarget=J,this.updateRenderTargetMipmap=z,this.updateMultisampleRenderTarget=Z,this.setupDepthRenderbuffer=ut,this.setupFrameBufferTexture=R,this.useMultisampledRTT=lt}function T3(i,t){function e(n,s=Ve){let r,o=te.getTransfer(s);if(n===pn)return i.UNSIGNED_BYTE;if(n===Tc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Cc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===qu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Uu)return i.BYTE;if(n===Nu)return i.SHORT;if(n===Js)return i.UNSIGNED_SHORT;if(n===Ec)return i.INT;if(n===Ti)return i.UNSIGNED_INT;if(n===Hn)return i.FLOAT;if(n===Ni)return i.HALF_FLOAT;if(n===Fu)return i.ALPHA;if(n===Ou)return i.RGB;if(n===fn)return i.RGBA;if(n===Bu)return i.LUMINANCE;if(n===ku)return i.LUMINANCE_ALPHA;if(n===is)return i.DEPTH_COMPONENT;if(n===hs)return i.DEPTH_STENCIL;if(n===zu)return i.RED;if(n===Ac)return i.RED_INTEGER;if(n===Hu)return i.RG;if(n===Rc)return i.RG_INTEGER;if(n===Ic)return i.RGBA_INTEGER;if(n===to||n===eo||n===no||n===io)if(o===le)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===to)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===no)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===io)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===to)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===eo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===no)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===io)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ll||n===cl||n===hl||n===ul)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ll)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===cl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===hl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ul)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===dl||n===fl||n===pl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===dl||n===fl)return o===le?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===pl)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ml||n===gl||n===xl||n===_l||n===vl||n===yl||n===Ml||n===bl||n===Sl||n===wl||n===El||n===Tl||n===Cl||n===Al)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ml)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===gl)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===xl)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===_l)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===vl)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===yl)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ml)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===bl)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Sl)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===wl)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===El)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Tl)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Cl)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Al)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===so||n===Rl||n===Il)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===so)return o===le?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Rl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Il)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Vu||n===Pl||n===Ll||n===Dl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===so)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Pl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ll)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Dl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===cs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var $l=class extends Oe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},ii=class extends ke{constructor(){super(),this.isGroup=!0,this.type="Group"}},C3={type:"move"},Xs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ii,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ii,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ii,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let p=e.getJointPose(x,n),d=this._getHandJoint(c,x);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(C3)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ii;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},A3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,R3=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Jl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new Be,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Me({vertexShader:A3,fragmentShader:R3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new $t(new hi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Kl=class extends ci{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,m=null,g=null,x=new Jl,p=e.getContextAttributes(),d=null,E=null,_=[],v=[],N=new pt,P=null,q=new Oe;q.viewport=new ie;let I=new Oe;I.viewport=new ie;let T=[q,I],y=new $l,B=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let D=_[U];return D===void 0&&(D=new Xs,_[U]=D),D.getTargetRaySpace()},this.getControllerGrip=function(U){let D=_[U];return D===void 0&&(D=new Xs,_[U]=D),D.getGripSpace()},this.getHand=function(U){let D=_[U];return D===void 0&&(D=new Xs,_[U]=D),D.getHandSpace()};function j(U){let D=v.indexOf(U.inputSource);if(D===-1)return;let R=_[D];R!==void 0&&(R.update(U.inputSource,U.frame,c||o),R.dispatchEvent({type:U.type,data:U.inputSource}))}function et(){s.removeEventListener("select",j),s.removeEventListener("selectstart",j),s.removeEventListener("selectend",j),s.removeEventListener("squeeze",j),s.removeEventListener("squeezestart",j),s.removeEventListener("squeezeend",j),s.removeEventListener("end",et),s.removeEventListener("inputsourceschange",nt);for(let U=0;U<_.length;U++){let D=v[U];D!==null&&(v[U]=null,_[U].disconnect(D))}B=null,X=null,x.reset(),t.setRenderTarget(d),m=null,f=null,u=null,s=null,E=null,jt.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(N.width,N.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){r=U,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){a=U,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(U){c=U},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(U){if(s=U,s!==null){if(d=t.getRenderTarget(),s.addEventListener("select",j),s.addEventListener("selectstart",j),s.addEventListener("selectend",j),s.addEventListener("squeeze",j),s.addEventListener("squeezestart",j),s.addEventListener("squeezeend",j),s.addEventListener("end",et),s.addEventListener("inputsourceschange",nt),p.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(N),s.renderState.layers===void 0){let D={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,D),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),E=new Xe(m.framebufferWidth,m.framebufferHeight,{format:fn,type:pn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let D=null,R=null,w=null;p.depth&&(w=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,D=p.stencil?hs:is,R=p.stencil?cs:Ti);let tt={colorFormat:e.RGBA8,depthFormat:w,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(tt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),E=new Xe(f.textureWidth,f.textureHeight,{format:fn,type:pn,depthTexture:new po(f.textureWidth,f.textureHeight,R,void 0,void 0,void 0,void 0,void 0,void 0,D),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),jt.setContext(s),jt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function nt(U){for(let D=0;D<U.removed.length;D++){let R=U.removed[D],w=v.indexOf(R);w>=0&&(v[w]=null,_[w].disconnect(R))}for(let D=0;D<U.added.length;D++){let R=U.added[D],w=v.indexOf(R);if(w===-1){for(let ut=0;ut<_.length;ut++)if(ut>=v.length){v.push(R),w=ut;break}else if(v[ut]===null){v[ut]=R,w=ut;break}if(w===-1)break}let tt=_[w];tt&&tt.connect(R)}}let it=new k,ot=new k;function H(U,D,R){it.setFromMatrixPosition(D.matrixWorld),ot.setFromMatrixPosition(R.matrixWorld);let w=it.distanceTo(ot),tt=D.projectionMatrix.elements,ut=R.projectionMatrix.elements,S=tt[14]/(tt[10]-1),J=tt[14]/(tt[10]+1),z=(tt[9]+1)/tt[5],G=(tt[9]-1)/tt[5],b=(tt[8]-1)/tt[0],Z=(ut[8]+1)/ut[0],Q=S*b,lt=S*Z,F=w/(-b+Z),L=F*-b;if(D.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(L),U.translateZ(F),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert(),tt[10]===-1)U.projectionMatrix.copy(D.projectionMatrix),U.projectionMatrixInverse.copy(D.projectionMatrixInverse);else{let ht=S+F,A=J+F,M=Q-L,K=lt+(w-L),at=z*J/A*ht,ft=G*J/A*ht;U.projectionMatrix.makePerspective(M,K,at,ft,ht,A),U.projectionMatrixInverse.copy(U.projectionMatrix).invert()}}function mt(U,D){D===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(D.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(s===null)return;let D=U.near,R=U.far;x.texture!==null&&(x.depthNear>0&&(D=x.depthNear),x.depthFar>0&&(R=x.depthFar)),y.near=I.near=q.near=D,y.far=I.far=q.far=R,(B!==y.near||X!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),B=y.near,X=y.far),q.layers.mask=U.layers.mask|2,I.layers.mask=U.layers.mask|4,y.layers.mask=q.layers.mask|I.layers.mask;let w=U.parent,tt=y.cameras;mt(y,w);for(let ut=0;ut<tt.length;ut++)mt(tt[ut],w);tt.length===2?H(y,q,I):y.projectionMatrix.copy(q.projectionMatrix),xt(U,y,w)};function xt(U,D,R){R===null?U.matrix.copy(D.matrixWorld):(U.matrix.copy(R.matrixWorld),U.matrix.invert(),U.matrix.multiply(D.matrixWorld)),U.matrix.decompose(U.position,U.quaternion,U.scale),U.updateMatrixWorld(!0),U.projectionMatrix.copy(D.projectionMatrix),U.projectionMatrixInverse.copy(D.projectionMatrixInverse),U.isPerspectiveCamera&&(U.fov=Nl*2*Math.atan(1/U.projectionMatrix.elements[5]),U.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(U){l=U,f!==null&&(f.fixedFoveation=U),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=U)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let bt=null;function qt(U,D){if(h=D.getViewerPose(c||o),g=D,h!==null){let R=h.views;m!==null&&(t.setRenderTargetFramebuffer(E,m.framebuffer),t.setRenderTarget(E));let w=!1;R.length!==y.cameras.length&&(y.cameras.length=0,w=!0);for(let ut=0;ut<R.length;ut++){let S=R[ut],J=null;if(m!==null)J=m.getViewport(S);else{let G=u.getViewSubImage(f,S);J=G.viewport,ut===0&&(t.setRenderTargetTextures(E,G.colorTexture,f.ignoreDepthValues?void 0:G.depthStencilTexture),t.setRenderTarget(E))}let z=T[ut];z===void 0&&(z=new Oe,z.layers.enable(ut),z.viewport=new ie,T[ut]=z),z.matrix.fromArray(S.transform.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale),z.projectionMatrix.fromArray(S.projectionMatrix),z.projectionMatrixInverse.copy(z.projectionMatrix).invert(),z.viewport.set(J.x,J.y,J.width,J.height),ut===0&&(y.matrix.copy(z.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),w===!0&&y.cameras.push(z)}let tt=s.enabledFeatures;if(tt&&tt.includes("depth-sensing")){let ut=u.getDepthInformation(R[0]);ut&&ut.isValid&&ut.texture&&x.init(t,ut,s.renderState)}}for(let R=0;R<_.length;R++){let w=v[R],tt=_[R];w!==null&&tt!==void 0&&tt.update(w,D,c||o)}bt&&bt(U,D),D.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:D}),g=null}let jt=new $u;jt.setAnimationLoop(qt),this.setAnimationLoop=function(U){bt=U},this.dispose=function(){}}},Mi=new Sn,I3=new ae;function P3(i,t){function e(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,Zu(i)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function s(p,d,E,_,v){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(p,d):d.isMeshToonMaterial?(r(p,d),u(p,d)):d.isMeshPhongMaterial?(r(p,d),h(p,d)):d.isMeshStandardMaterial?(r(p,d),f(p,d),d.isMeshPhysicalMaterial&&m(p,d,v)):d.isMeshMatcapMaterial?(r(p,d),g(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),x(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(o(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?l(p,d,E,_):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,e(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===ye&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,e(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===ye&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,e(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,e(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let E=t.get(d),_=E.envMap,v=E.envMapRotation;_&&(p.envMap.value=_,Mi.copy(v),Mi.x*=-1,Mi.y*=-1,Mi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Mi.y*=-1,Mi.z*=-1),p.envMapRotation.value.setFromMatrix4(I3.makeRotationFromEuler(Mi)),p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,p.aoMapTransform))}function o(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform))}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,E,_){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*E,p.scale.value=_*.5,d.map&&(p.map.value=d.map,e(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function h(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,E){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===ye&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,d){d.matcap&&(p.matcap.value=d.matcap)}function x(p,d){let E=t.get(d).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function L3(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,_){let v=_.program;n.uniformBlockBinding(E,v)}function c(E,_){let v=s[E.id];v===void 0&&(g(E),v=h(E),s[E.id]=v,E.addEventListener("dispose",p));let N=_.program;n.updateUBOMapping(E,N);let P=t.render.frame;r[E.id]!==P&&(f(E),r[E.id]=P)}function h(E){let _=u();E.__bindingPointIndex=_;let v=i.createBuffer(),N=E.__size,P=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,N,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,v),v}function u(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){let _=s[E.id],v=E.uniforms,N=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let P=0,q=v.length;P<q;P++){let I=Array.isArray(v[P])?v[P]:[v[P]];for(let T=0,y=I.length;T<y;T++){let B=I[T];if(m(B,P,T,N)===!0){let X=B.__offset,j=Array.isArray(B.value)?B.value:[B.value],et=0;for(let nt=0;nt<j.length;nt++){let it=j[nt],ot=x(it);typeof it=="number"||typeof it=="boolean"?(B.__data[0]=it,i.bufferSubData(i.UNIFORM_BUFFER,X+et,B.__data)):it.isMatrix3?(B.__data[0]=it.elements[0],B.__data[1]=it.elements[1],B.__data[2]=it.elements[2],B.__data[3]=0,B.__data[4]=it.elements[3],B.__data[5]=it.elements[4],B.__data[6]=it.elements[5],B.__data[7]=0,B.__data[8]=it.elements[6],B.__data[9]=it.elements[7],B.__data[10]=it.elements[8],B.__data[11]=0):(it.toArray(B.__data,et),et+=ot.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,X,B.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(E,_,v,N){let P=E.value,q=_+"_"+v;if(N[q]===void 0)return typeof P=="number"||typeof P=="boolean"?N[q]=P:N[q]=P.clone(),!0;{let I=N[q];if(typeof P=="number"||typeof P=="boolean"){if(I!==P)return N[q]=P,!0}else if(I.equals(P)===!1)return I.copy(P),!0}return!1}function g(E){let _=E.uniforms,v=0,N=16;for(let q=0,I=_.length;q<I;q++){let T=Array.isArray(_[q])?_[q]:[_[q]];for(let y=0,B=T.length;y<B;y++){let X=T[y],j=Array.isArray(X.value)?X.value:[X.value];for(let et=0,nt=j.length;et<nt;et++){let it=j[et],ot=x(it),H=v%N,mt=H%ot.boundary,xt=H+mt;v+=mt,xt!==0&&N-xt<ot.storage&&(v+=N-xt),X.__data=new Float32Array(ot.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=v,v+=ot.storage}}}let P=v%N;return P>0&&(v+=N-P),E.__size=v,E.__cache={},this}function x(E){let _={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(_.boundary=4,_.storage=4):E.isVector2?(_.boundary=8,_.storage=8):E.isVector3||E.isColor?(_.boundary=16,_.storage=12):E.isVector4?(_.boundary=16,_.storage=16):E.isMatrix3?(_.boundary=48,_.storage=48):E.isMatrix4?(_.boundary=64,_.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),_}function p(E){let _=E.target;_.removeEventListener("dispose",p);let v=o.indexOf(_.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function d(){for(let E in s)i.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:l,update:c,dispose:d}}var mo=class{constructor(t={}){let{canvas:e=qf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let g=new Uint32Array(4),x=new Int32Array(4),p=null,d=null,E=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ie,this.toneMapping=ri,this.toneMappingExposure=1;let v=this,N=!1,P=0,q=0,I=null,T=-1,y=null,B=new ie,X=new ie,j=null,et=new zt(0),nt=0,it=e.width,ot=e.height,H=1,mt=null,xt=null,bt=new ie(0,0,it,ot),qt=new ie(0,0,it,ot),jt=!1,U=new tr,D=!1,R=!1,w=new ae,tt=new ae,ut=new k,S=new ie,J={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},z=!1;function G(){return I===null?H:1}let b=n;function Z(C,W){return e.getContext(C,W)}try{let C={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${bc}`),e.addEventListener("webglcontextlost",gt,!1),e.addEventListener("webglcontextrestored",At,!1),e.addEventListener("webglcontextcreationerror",Tt,!1),b===null){let W="webgl2";if(b=Z(W,C),b===null)throw Z(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Q,lt,F,L,ht,A,M,K,at,ft,dt,Pt,Mt,Et,Gt,_t,Rt,Ot,kt,It,Qt,Yt,ce,V;function wt(){Q=new Zm(b),Q.init(),Yt=new T3(b,Q),lt=new Hm(b,Q,t,Yt),F=new S3(b,Q),lt.reverseDepthBuffer&&f&&F.buffers.depth.setReversed(!0),L=new Km(b),ht=new h3,A=new E3(b,Q,F,ht,lt,Yt,L),M=new Gm(v),K=new Ym(v),at=new sp(b),ce=new km(b,at),ft=new $m(b,at,L,ce),dt=new Qm(b,ft,at,L),kt=new jm(b,lt,A),_t=new Vm(ht),Pt=new c3(v,M,K,Q,lt,ce,_t),Mt=new P3(v,ht),Et=new d3,Gt=new _3(Q),Ot=new Bm(v,M,K,F,dt,m,l),Rt=new M3(v,dt,lt),V=new L3(b,L,lt,F),It=new zm(b,Q,L),Qt=new Jm(b,Q,L),L.programs=Pt.programs,v.capabilities=lt,v.extensions=Q,v.properties=ht,v.renderLists=Et,v.shadowMap=Rt,v.state=F,v.info=L}wt();let ct=new Kl(v,b);this.xr=ct,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){let C=Q.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=Q.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(C){C!==void 0&&(H=C,this.setSize(it,ot,!1))},this.getSize=function(C){return C.set(it,ot)},this.setSize=function(C,W,st=!0){if(ct.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}it=C,ot=W,e.width=Math.floor(C*H),e.height=Math.floor(W*H),st===!0&&(e.style.width=C+"px",e.style.height=W+"px"),this.setViewport(0,0,C,W)},this.getDrawingBufferSize=function(C){return C.set(it*H,ot*H).floor()},this.setDrawingBufferSize=function(C,W,st){it=C,ot=W,H=st,e.width=Math.floor(C*st),e.height=Math.floor(W*st),this.setViewport(0,0,C,W)},this.getCurrentViewport=function(C){return C.copy(B)},this.getViewport=function(C){return C.copy(bt)},this.setViewport=function(C,W,st,rt){C.isVector4?bt.set(C.x,C.y,C.z,C.w):bt.set(C,W,st,rt),F.viewport(B.copy(bt).multiplyScalar(H).round())},this.getScissor=function(C){return C.copy(qt)},this.setScissor=function(C,W,st,rt){C.isVector4?qt.set(C.x,C.y,C.z,C.w):qt.set(C,W,st,rt),F.scissor(X.copy(qt).multiplyScalar(H).round())},this.getScissorTest=function(){return jt},this.setScissorTest=function(C){F.setScissorTest(jt=C)},this.setOpaqueSort=function(C){mt=C},this.setTransparentSort=function(C){xt=C},this.getClearColor=function(C){return C.copy(Ot.getClearColor())},this.setClearColor=function(){Ot.setClearColor.apply(Ot,arguments)},this.getClearAlpha=function(){return Ot.getClearAlpha()},this.setClearAlpha=function(){Ot.setClearAlpha.apply(Ot,arguments)},this.clear=function(C=!0,W=!0,st=!0){let rt=0;if(C){let Y=!1;if(I!==null){let vt=I.texture.format;Y=vt===Ic||vt===Rc||vt===Ac}if(Y){let vt=I.texture.type,Ct=vt===pn||vt===Ti||vt===Js||vt===cs||vt===Tc||vt===Cc,Dt=Ot.getClearColor(),Ut=Ot.getClearAlpha(),Ht=Dt.r,Xt=Dt.g,Nt=Dt.b;Ct?(g[0]=Ht,g[1]=Xt,g[2]=Nt,g[3]=Ut,b.clearBufferuiv(b.COLOR,0,g)):(x[0]=Ht,x[1]=Xt,x[2]=Nt,x[3]=Ut,b.clearBufferiv(b.COLOR,0,x))}else rt|=b.COLOR_BUFFER_BIT}W&&(rt|=b.DEPTH_BUFFER_BIT),st&&(rt|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),b.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",gt,!1),e.removeEventListener("webglcontextrestored",At,!1),e.removeEventListener("webglcontextcreationerror",Tt,!1),Et.dispose(),Gt.dispose(),ht.dispose(),M.dispose(),K.dispose(),dt.dispose(),ce.dispose(),V.dispose(),Pt.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",hh),ct.removeEventListener("sessionend",uh),mi.stop()};function gt(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function At(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;let C=L.autoReset,W=Rt.enabled,st=Rt.autoUpdate,rt=Rt.needsUpdate,Y=Rt.type;wt(),L.autoReset=C,Rt.enabled=W,Rt.autoUpdate=st,Rt.needsUpdate=rt,Rt.type=Y}function Tt(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Wt(C){let W=C.target;W.removeEventListener("dispose",Wt),_e(W)}function _e(C){Ne(C),ht.remove(C)}function Ne(C){let W=ht.get(C).programs;W!==void 0&&(W.forEach(function(st){Pt.releaseProgram(st)}),C.isShaderMaterial&&Pt.releaseShaderCache(C))}this.renderBufferDirect=function(C,W,st,rt,Y,vt){W===null&&(W=J);let Ct=Y.isMesh&&Y.matrixWorld.determinant()<0,Dt=Xd(C,W,st,rt,Y);F.setMaterial(rt,Ct);let Ut=st.index,Ht=1;if(rt.wireframe===!0){if(Ut=ft.getWireframeAttribute(st),Ut===void 0)return;Ht=2}let Xt=st.drawRange,Nt=st.attributes.position,ee=Xt.start*Ht,he=(Xt.start+Xt.count)*Ht;vt!==null&&(ee=Math.max(ee,vt.start*Ht),he=Math.min(he,(vt.start+vt.count)*Ht)),Ut!==null?(ee=Math.max(ee,0),he=Math.min(he,Ut.count)):Nt!=null&&(ee=Math.max(ee,0),he=Math.min(he,Nt.count));let ue=he-ee;if(ue<0||ue===1/0)return;ce.setup(Y,rt,Dt,st,Ut);let Ge,se=It;if(Ut!==null&&(Ge=at.get(Ut),se=Qt,se.setIndex(Ge)),Y.isMesh)rt.wireframe===!0?(F.setLineWidth(rt.wireframeLinewidth*G()),se.setMode(b.LINES)):se.setMode(b.TRIANGLES);else if(Y.isLine){let Ft=rt.linewidth;Ft===void 0&&(Ft=1),F.setLineWidth(Ft*G()),Y.isLineSegments?se.setMode(b.LINES):Y.isLineLoop?se.setMode(b.LINE_LOOP):se.setMode(b.LINE_STRIP)}else Y.isPoints?se.setMode(b.POINTS):Y.isSprite&&se.setMode(b.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)se.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(Q.get("WEBGL_multi_draw"))se.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let Ft=Y._multiDrawStarts,In=Y._multiDrawCounts,re=Y._multiDrawCount,cn=Ut?at.get(Ut).bytesPerElement:1,Bi=ht.get(rt).currentProgram.getUniforms();for(let Ye=0;Ye<re;Ye++)Bi.setValue(b,"_gl_DrawID",Ye),se.render(Ft[Ye]/cn,In[Ye])}else if(Y.isInstancedMesh)se.renderInstances(ee,ue,Y.count);else if(st.isInstancedBufferGeometry){let Ft=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,In=Math.min(st.instanceCount,Ft);se.renderInstances(ee,ue,In)}else se.render(ee,ue)};function oe(C,W,st){C.transparent===!0&&C.side===Bn&&C.forceSinglePass===!1?(C.side=ye,C.needsUpdate=!0,wr(C,W,st),C.side=ai,C.needsUpdate=!0,wr(C,W,st),C.side=Bn):wr(C,W,st)}this.compile=function(C,W,st=null){st===null&&(st=C),d=Gt.get(st),d.init(W),_.push(d),st.traverseVisible(function(Y){Y.isLight&&Y.layers.test(W.layers)&&(d.pushLight(Y),Y.castShadow&&d.pushShadow(Y))}),C!==st&&C.traverseVisible(function(Y){Y.isLight&&Y.layers.test(W.layers)&&(d.pushLight(Y),Y.castShadow&&d.pushShadow(Y))}),d.setupLights();let rt=new Set;return C.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let vt=Y.material;if(vt)if(Array.isArray(vt))for(let Ct=0;Ct<vt.length;Ct++){let Dt=vt[Ct];oe(Dt,st,Y),rt.add(Dt)}else oe(vt,st,Y),rt.add(vt)}),_.pop(),d=null,rt},this.compileAsync=function(C,W,st=null){let rt=this.compile(C,W,st);return new Promise(Y=>{function vt(){if(rt.forEach(function(Ct){ht.get(Ct).currentProgram.isReady()&&rt.delete(Ct)}),rt.size===0){Y(C);return}setTimeout(vt,10)}Q.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let ln=null;function Rn(C){ln&&ln(C)}function hh(){mi.stop()}function uh(){mi.start()}let mi=new $u;mi.setAnimationLoop(Rn),typeof self<"u"&&mi.setContext(self),this.setAnimationLoop=function(C){ln=C,ct.setAnimationLoop(C),C===null?mi.stop():mi.start()},ct.addEventListener("sessionstart",hh),ct.addEventListener("sessionend",uh),this.render=function(C,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(W),W=ct.getCamera()),C.isScene===!0&&C.onBeforeRender(v,C,W,I),d=Gt.get(C,_.length),d.init(W),_.push(d),tt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),U.setFromProjectionMatrix(tt),R=this.localClippingEnabled,D=_t.init(this.clippingPlanes,R),p=Et.get(C,E.length),p.init(),E.push(p),ct.enabled===!0&&ct.isPresenting===!0){let vt=v.xr.getDepthSensingMesh();vt!==null&&fa(vt,W,-1/0,v.sortObjects)}fa(C,W,0,v.sortObjects),p.finish(),v.sortObjects===!0&&p.sort(mt,xt),z=ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1,z&&Ot.addToRenderList(p,C),this.info.render.frame++,D===!0&&_t.beginShadows();let st=d.state.shadowsArray;Rt.render(st,C,W),D===!0&&_t.endShadows(),this.info.autoReset===!0&&this.info.reset();let rt=p.opaque,Y=p.transmissive;if(d.setupLights(),W.isArrayCamera){let vt=W.cameras;if(Y.length>0)for(let Ct=0,Dt=vt.length;Ct<Dt;Ct++){let Ut=vt[Ct];fh(rt,Y,C,Ut)}z&&Ot.render(C);for(let Ct=0,Dt=vt.length;Ct<Dt;Ct++){let Ut=vt[Ct];dh(p,C,Ut,Ut.viewport)}}else Y.length>0&&fh(rt,Y,C,W),z&&Ot.render(C),dh(p,C,W);I!==null&&(A.updateMultisampleRenderTarget(I),A.updateRenderTargetMipmap(I)),C.isScene===!0&&C.onAfterRender(v,C,W),ce.resetDefaultState(),T=-1,y=null,_.pop(),_.length>0?(d=_[_.length-1],D===!0&&_t.setGlobalState(v.clippingPlanes,d.state.camera)):d=null,E.pop(),E.length>0?p=E[E.length-1]:p=null};function fa(C,W,st,rt){if(C.visible===!1)return;if(C.layers.test(W.layers)){if(C.isGroup)st=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(W);else if(C.isLight)d.pushLight(C),C.castShadow&&d.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||U.intersectsSprite(C)){rt&&S.setFromMatrixPosition(C.matrixWorld).applyMatrix4(tt);let Ct=dt.update(C),Dt=C.material;Dt.visible&&p.push(C,Ct,Dt,st,S.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||U.intersectsObject(C))){let Ct=dt.update(C),Dt=C.material;if(rt&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),S.copy(C.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),S.copy(Ct.boundingSphere.center)),S.applyMatrix4(C.matrixWorld).applyMatrix4(tt)),Array.isArray(Dt)){let Ut=Ct.groups;for(let Ht=0,Xt=Ut.length;Ht<Xt;Ht++){let Nt=Ut[Ht],ee=Dt[Nt.materialIndex];ee&&ee.visible&&p.push(C,Ct,ee,st,S.z,Nt)}}else Dt.visible&&p.push(C,Ct,Dt,st,S.z,null)}}let vt=C.children;for(let Ct=0,Dt=vt.length;Ct<Dt;Ct++)fa(vt[Ct],W,st,rt)}function dh(C,W,st,rt){let Y=C.opaque,vt=C.transmissive,Ct=C.transparent;d.setupLightsView(st),D===!0&&_t.setGlobalState(v.clippingPlanes,st),rt&&F.viewport(B.copy(rt)),Y.length>0&&Sr(Y,W,st),vt.length>0&&Sr(vt,W,st),Ct.length>0&&Sr(Ct,W,st),F.buffers.depth.setTest(!0),F.buffers.depth.setMask(!0),F.buffers.color.setMask(!0),F.setPolygonOffset(!1)}function fh(C,W,st,rt){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[rt.id]===void 0&&(d.state.transmissionRenderTarget[rt.id]=new Xe(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float")?Ni:pn,minFilter:zn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:te.workingColorSpace}));let vt=d.state.transmissionRenderTarget[rt.id],Ct=rt.viewport||B;vt.setSize(Ct.z,Ct.w);let Dt=v.getRenderTarget();v.setRenderTarget(vt),v.getClearColor(et),nt=v.getClearAlpha(),nt<1&&v.setClearColor(16777215,.5),v.clear(),z&&Ot.render(st);let Ut=v.toneMapping;v.toneMapping=ri;let Ht=rt.viewport;if(rt.viewport!==void 0&&(rt.viewport=void 0),d.setupLightsView(rt),D===!0&&_t.setGlobalState(v.clippingPlanes,rt),Sr(C,st,rt),A.updateMultisampleRenderTarget(vt),A.updateRenderTargetMipmap(vt),Q.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let Nt=0,ee=W.length;Nt<ee;Nt++){let he=W[Nt],ue=he.object,Ge=he.geometry,se=he.material,Ft=he.group;if(se.side===Bn&&ue.layers.test(rt.layers)){let In=se.side;se.side=ye,se.needsUpdate=!0,ph(ue,st,rt,Ge,se,Ft),se.side=In,se.needsUpdate=!0,Xt=!0}}Xt===!0&&(A.updateMultisampleRenderTarget(vt),A.updateRenderTargetMipmap(vt))}v.setRenderTarget(Dt),v.setClearColor(et,nt),Ht!==void 0&&(rt.viewport=Ht),v.toneMapping=Ut}function Sr(C,W,st){let rt=W.isScene===!0?W.overrideMaterial:null;for(let Y=0,vt=C.length;Y<vt;Y++){let Ct=C[Y],Dt=Ct.object,Ut=Ct.geometry,Ht=rt===null?Ct.material:rt,Xt=Ct.group;Dt.layers.test(st.layers)&&ph(Dt,W,st,Ut,Ht,Xt)}}function ph(C,W,st,rt,Y,vt){C.onBeforeRender(v,W,st,rt,Y,vt),C.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Y.onBeforeRender(v,W,st,rt,C,vt),Y.transparent===!0&&Y.side===Bn&&Y.forceSinglePass===!1?(Y.side=ye,Y.needsUpdate=!0,v.renderBufferDirect(st,W,rt,Y,C,vt),Y.side=ai,Y.needsUpdate=!0,v.renderBufferDirect(st,W,rt,Y,C,vt),Y.side=Bn):v.renderBufferDirect(st,W,rt,Y,C,vt),C.onAfterRender(v,W,st,rt,Y,vt)}function wr(C,W,st){W.isScene!==!0&&(W=J);let rt=ht.get(C),Y=d.state.lights,vt=d.state.shadowsArray,Ct=Y.state.version,Dt=Pt.getParameters(C,Y.state,vt,W,st),Ut=Pt.getProgramCacheKey(Dt),Ht=rt.programs;rt.environment=C.isMeshStandardMaterial?W.environment:null,rt.fog=W.fog,rt.envMap=(C.isMeshStandardMaterial?K:M).get(C.envMap||rt.environment),rt.envMapRotation=rt.environment!==null&&C.envMap===null?W.environmentRotation:C.envMapRotation,Ht===void 0&&(C.addEventListener("dispose",Wt),Ht=new Map,rt.programs=Ht);let Xt=Ht.get(Ut);if(Xt!==void 0){if(rt.currentProgram===Xt&&rt.lightsStateVersion===Ct)return gh(C,Dt),Xt}else Dt.uniforms=Pt.getUniforms(C),C.onBeforeCompile(Dt,v),Xt=Pt.acquireProgram(Dt,Ut),Ht.set(Ut,Xt),rt.uniforms=Dt.uniforms;let Nt=rt.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Nt.clippingPlanes=_t.uniform),gh(C,Dt),rt.needsLights=Zd(C),rt.lightsStateVersion=Ct,rt.needsLights&&(Nt.ambientLightColor.value=Y.state.ambient,Nt.lightProbe.value=Y.state.probe,Nt.directionalLights.value=Y.state.directional,Nt.directionalLightShadows.value=Y.state.directionalShadow,Nt.spotLights.value=Y.state.spot,Nt.spotLightShadows.value=Y.state.spotShadow,Nt.rectAreaLights.value=Y.state.rectArea,Nt.ltc_1.value=Y.state.rectAreaLTC1,Nt.ltc_2.value=Y.state.rectAreaLTC2,Nt.pointLights.value=Y.state.point,Nt.pointLightShadows.value=Y.state.pointShadow,Nt.hemisphereLights.value=Y.state.hemi,Nt.directionalShadowMap.value=Y.state.directionalShadowMap,Nt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Nt.spotShadowMap.value=Y.state.spotShadowMap,Nt.spotLightMatrix.value=Y.state.spotLightMatrix,Nt.spotLightMap.value=Y.state.spotLightMap,Nt.pointShadowMap.value=Y.state.pointShadowMap,Nt.pointShadowMatrix.value=Y.state.pointShadowMatrix),rt.currentProgram=Xt,rt.uniformsList=null,Xt}function mh(C){if(C.uniformsList===null){let W=C.currentProgram.getUniforms();C.uniformsList=rs.seqWithValue(W.seq,C.uniforms)}return C.uniformsList}function gh(C,W){let st=ht.get(C);st.outputColorSpace=W.outputColorSpace,st.batching=W.batching,st.batchingColor=W.batchingColor,st.instancing=W.instancing,st.instancingColor=W.instancingColor,st.instancingMorph=W.instancingMorph,st.skinning=W.skinning,st.morphTargets=W.morphTargets,st.morphNormals=W.morphNormals,st.morphColors=W.morphColors,st.morphTargetsCount=W.morphTargetsCount,st.numClippingPlanes=W.numClippingPlanes,st.numIntersection=W.numClipIntersection,st.vertexAlphas=W.vertexAlphas,st.vertexTangents=W.vertexTangents,st.toneMapping=W.toneMapping}function Xd(C,W,st,rt,Y){W.isScene!==!0&&(W=J),A.resetTextureUnits();let vt=W.fog,Ct=rt.isMeshStandardMaterial?W.environment:null,Dt=I===null?v.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:di,Ut=(rt.isMeshStandardMaterial?K:M).get(rt.envMap||Ct),Ht=rt.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,Xt=!!st.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),Nt=!!st.morphAttributes.position,ee=!!st.morphAttributes.normal,he=!!st.morphAttributes.color,ue=ri;rt.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(ue=v.toneMapping);let Ge=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,se=Ge!==void 0?Ge.length:0,Ft=ht.get(rt),In=d.state.lights;if(D===!0&&(R===!0||C!==y)){let en=C===y&&rt.id===T;_t.setState(rt,C,en)}let re=!1;rt.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==In.state.version||Ft.outputColorSpace!==Dt||Y.isBatchedMesh&&Ft.batching===!1||!Y.isBatchedMesh&&Ft.batching===!0||Y.isBatchedMesh&&Ft.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Ft.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Ft.instancing===!1||!Y.isInstancedMesh&&Ft.instancing===!0||Y.isSkinnedMesh&&Ft.skinning===!1||!Y.isSkinnedMesh&&Ft.skinning===!0||Y.isInstancedMesh&&Ft.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Ft.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Ft.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Ft.instancingMorph===!1&&Y.morphTexture!==null||Ft.envMap!==Ut||rt.fog===!0&&Ft.fog!==vt||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==_t.numPlanes||Ft.numIntersection!==_t.numIntersection)||Ft.vertexAlphas!==Ht||Ft.vertexTangents!==Xt||Ft.morphTargets!==Nt||Ft.morphNormals!==ee||Ft.morphColors!==he||Ft.toneMapping!==ue||Ft.morphTargetsCount!==se)&&(re=!0):(re=!0,Ft.__version=rt.version);let cn=Ft.currentProgram;re===!0&&(cn=wr(rt,W,Y));let Bi=!1,Ye=!1,Ns=!1,de=cn.getUniforms(),yn=Ft.uniforms;if(F.useProgram(cn.program)&&(Bi=!0,Ye=!0,Ns=!0),rt.id!==T&&(T=rt.id,Ye=!0),Bi||y!==C){F.buffers.depth.getReversed()?(w.copy(C.projectionMatrix),Of(w),Bf(w),de.setValue(b,"projectionMatrix",w)):de.setValue(b,"projectionMatrix",C.projectionMatrix),de.setValue(b,"viewMatrix",C.matrixWorldInverse);let $n=de.map.cameraPosition;$n!==void 0&&$n.setValue(b,ut.setFromMatrixPosition(C.matrixWorld)),lt.logarithmicDepthBuffer&&de.setValue(b,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&de.setValue(b,"isOrthographic",C.isOrthographicCamera===!0),y!==C&&(y=C,Ye=!0,Ns=!0)}if(Y.isSkinnedMesh){de.setOptional(b,Y,"bindMatrix"),de.setOptional(b,Y,"bindMatrixInverse");let en=Y.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),de.setValue(b,"boneTexture",en.boneTexture,A))}Y.isBatchedMesh&&(de.setOptional(b,Y,"batchingTexture"),de.setValue(b,"batchingTexture",Y._matricesTexture,A),de.setOptional(b,Y,"batchingIdTexture"),de.setValue(b,"batchingIdTexture",Y._indirectTexture,A),de.setOptional(b,Y,"batchingColorTexture"),Y._colorsTexture!==null&&de.setValue(b,"batchingColorTexture",Y._colorsTexture,A));let qs=st.morphAttributes;if((qs.position!==void 0||qs.normal!==void 0||qs.color!==void 0)&&kt.update(Y,st,cn),(Ye||Ft.receiveShadow!==Y.receiveShadow)&&(Ft.receiveShadow=Y.receiveShadow,de.setValue(b,"receiveShadow",Y.receiveShadow)),rt.isMeshGouraudMaterial&&rt.envMap!==null&&(yn.envMap.value=Ut,yn.flipEnvMap.value=Ut.isCubeTexture&&Ut.isRenderTargetTexture===!1?-1:1),rt.isMeshStandardMaterial&&rt.envMap===null&&W.environment!==null&&(yn.envMapIntensity.value=W.environmentIntensity),Ye&&(de.setValue(b,"toneMappingExposure",v.toneMappingExposure),Ft.needsLights&&Yd(yn,Ns),vt&&rt.fog===!0&&Mt.refreshFogUniforms(yn,vt),Mt.refreshMaterialUniforms(yn,rt,H,ot,d.state.transmissionRenderTarget[C.id]),rs.upload(b,mh(Ft),yn,A)),rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&(rs.upload(b,mh(Ft),yn,A),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&de.setValue(b,"center",Y.center),de.setValue(b,"modelViewMatrix",Y.modelViewMatrix),de.setValue(b,"normalMatrix",Y.normalMatrix),de.setValue(b,"modelMatrix",Y.matrixWorld),rt.isShaderMaterial||rt.isRawShaderMaterial){let en=rt.uniformsGroups;for(let $n=0,Jn=en.length;$n<Jn;$n++){let xh=en[$n];V.update(xh,cn),V.bind(xh,cn)}}return cn}function Yd(C,W){C.ambientLightColor.needsUpdate=W,C.lightProbe.needsUpdate=W,C.directionalLights.needsUpdate=W,C.directionalLightShadows.needsUpdate=W,C.pointLights.needsUpdate=W,C.pointLightShadows.needsUpdate=W,C.spotLights.needsUpdate=W,C.spotLightShadows.needsUpdate=W,C.rectAreaLights.needsUpdate=W,C.hemisphereLights.needsUpdate=W}function Zd(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(C,W,st){ht.get(C.texture).__webglTexture=W,ht.get(C.depthTexture).__webglTexture=st;let rt=ht.get(C);rt.__hasExternalTextures=!0,rt.__autoAllocateDepthBuffer=st===void 0,rt.__autoAllocateDepthBuffer||Q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),rt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,W){let st=ht.get(C);st.__webglFramebuffer=W,st.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(C,W=0,st=0){I=C,P=W,q=st;let rt=!0,Y=null,vt=!1,Ct=!1;if(C){let Ut=ht.get(C);if(Ut.__useDefaultFramebuffer!==void 0)F.bindFramebuffer(b.FRAMEBUFFER,null),rt=!1;else if(Ut.__webglFramebuffer===void 0)A.setupRenderTarget(C);else if(Ut.__hasExternalTextures)A.rebindTextures(C,ht.get(C.texture).__webglTexture,ht.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let Nt=C.depthTexture;if(Ut.__boundDepthTexture!==Nt){if(Nt!==null&&ht.has(Nt)&&(C.width!==Nt.image.width||C.height!==Nt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(C)}}let Ht=C.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(Ct=!0);let Xt=ht.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Xt[W])?Y=Xt[W][st]:Y=Xt[W],vt=!0):C.samples>0&&A.useMultisampledRTT(C)===!1?Y=ht.get(C).__webglMultisampledFramebuffer:Array.isArray(Xt)?Y=Xt[st]:Y=Xt,B.copy(C.viewport),X.copy(C.scissor),j=C.scissorTest}else B.copy(bt).multiplyScalar(H).floor(),X.copy(qt).multiplyScalar(H).floor(),j=jt;if(F.bindFramebuffer(b.FRAMEBUFFER,Y)&&rt&&F.drawBuffers(C,Y),F.viewport(B),F.scissor(X),F.setScissorTest(j),vt){let Ut=ht.get(C.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ut.__webglTexture,st)}else if(Ct){let Ut=ht.get(C.texture),Ht=W||0;b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,Ut.__webglTexture,st||0,Ht)}T=-1},this.readRenderTargetPixels=function(C,W,st,rt,Y,vt,Ct){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=ht.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ct!==void 0&&(Dt=Dt[Ct]),Dt){F.bindFramebuffer(b.FRAMEBUFFER,Dt);try{let Ut=C.texture,Ht=Ut.format,Xt=Ut.type;if(!lt.textureFormatReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!lt.textureTypeReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=C.width-rt&&st>=0&&st<=C.height-Y&&b.readPixels(W,st,rt,Y,Yt.convert(Ht),Yt.convert(Xt),vt)}finally{let Ut=I!==null?ht.get(I).__webglFramebuffer:null;F.bindFramebuffer(b.FRAMEBUFFER,Ut)}}},this.readRenderTargetPixelsAsync=async function(C,W,st,rt,Y,vt,Ct){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Dt=ht.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ct!==void 0&&(Dt=Dt[Ct]),Dt){let Ut=C.texture,Ht=Ut.format,Xt=Ut.type;if(!lt.textureFormatReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!lt.textureTypeReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=C.width-rt&&st>=0&&st<=C.height-Y){F.bindFramebuffer(b.FRAMEBUFFER,Dt);let Nt=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,Nt),b.bufferData(b.PIXEL_PACK_BUFFER,vt.byteLength,b.STREAM_READ),b.readPixels(W,st,rt,Y,Yt.convert(Ht),Yt.convert(Xt),0);let ee=I!==null?ht.get(I).__webglFramebuffer:null;F.bindFramebuffer(b.FRAMEBUFFER,ee);let he=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);return b.flush(),await Ff(b,he,4),b.bindBuffer(b.PIXEL_PACK_BUFFER,Nt),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,vt),b.deleteBuffer(Nt),b.deleteSync(he),vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,W=null,st=0){C.isTexture!==!0&&(Gs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,C=arguments[1]);let rt=Math.pow(2,-st),Y=Math.floor(C.image.width*rt),vt=Math.floor(C.image.height*rt),Ct=W!==null?W.x:0,Dt=W!==null?W.y:0;A.setTexture2D(C,0),b.copyTexSubImage2D(b.TEXTURE_2D,st,0,0,Ct,Dt,Y,vt),F.unbindTexture()},this.copyTextureToTexture=function(C,W,st=null,rt=null,Y=0){C.isTexture!==!0&&(Gs("WebGLRenderer: copyTextureToTexture function signature has changed."),rt=arguments[0]||null,C=arguments[1],W=arguments[2],Y=arguments[3]||0,st=null);let vt,Ct,Dt,Ut,Ht,Xt,Nt,ee,he,ue=C.isCompressedTexture?C.mipmaps[Y]:C.image;st!==null?(vt=st.max.x-st.min.x,Ct=st.max.y-st.min.y,Dt=st.isBox3?st.max.z-st.min.z:1,Ut=st.min.x,Ht=st.min.y,Xt=st.isBox3?st.min.z:0):(vt=ue.width,Ct=ue.height,Dt=ue.depth||1,Ut=0,Ht=0,Xt=0),rt!==null?(Nt=rt.x,ee=rt.y,he=rt.z):(Nt=0,ee=0,he=0);let Ge=Yt.convert(W.format),se=Yt.convert(W.type),Ft;W.isData3DTexture?(A.setTexture3D(W,0),Ft=b.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(A.setTexture2DArray(W,0),Ft=b.TEXTURE_2D_ARRAY):(A.setTexture2D(W,0),Ft=b.TEXTURE_2D),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,W.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,W.unpackAlignment);let In=b.getParameter(b.UNPACK_ROW_LENGTH),re=b.getParameter(b.UNPACK_IMAGE_HEIGHT),cn=b.getParameter(b.UNPACK_SKIP_PIXELS),Bi=b.getParameter(b.UNPACK_SKIP_ROWS),Ye=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,ue.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,ue.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Ut),b.pixelStorei(b.UNPACK_SKIP_ROWS,Ht),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Xt);let Ns=C.isDataArrayTexture||C.isData3DTexture,de=W.isDataArrayTexture||W.isData3DTexture;if(C.isRenderTargetTexture||C.isDepthTexture){let yn=ht.get(C),qs=ht.get(W),en=ht.get(yn.__renderTarget),$n=ht.get(qs.__renderTarget);F.bindFramebuffer(b.READ_FRAMEBUFFER,en.__webglFramebuffer),F.bindFramebuffer(b.DRAW_FRAMEBUFFER,$n.__webglFramebuffer);for(let Jn=0;Jn<Dt;Jn++)Ns&&b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,ht.get(C).__webglTexture,Y,Xt+Jn),C.isDepthTexture?(de&&b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,ht.get(W).__webglTexture,Y,he+Jn),b.blitFramebuffer(Ut,Ht,vt,Ct,Nt,ee,vt,Ct,b.DEPTH_BUFFER_BIT,b.NEAREST)):de?b.copyTexSubImage3D(Ft,Y,Nt,ee,he+Jn,Ut,Ht,vt,Ct):b.copyTexSubImage2D(Ft,Y,Nt,ee,he+Jn,Ut,Ht,vt,Ct);F.bindFramebuffer(b.READ_FRAMEBUFFER,null),F.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else de?C.isDataTexture||C.isData3DTexture?b.texSubImage3D(Ft,Y,Nt,ee,he,vt,Ct,Dt,Ge,se,ue.data):W.isCompressedArrayTexture?b.compressedTexSubImage3D(Ft,Y,Nt,ee,he,vt,Ct,Dt,Ge,ue.data):b.texSubImage3D(Ft,Y,Nt,ee,he,vt,Ct,Dt,Ge,se,ue):C.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,Y,Nt,ee,vt,Ct,Ge,se,ue.data):C.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,Y,Nt,ee,ue.width,ue.height,Ge,ue.data):b.texSubImage2D(b.TEXTURE_2D,Y,Nt,ee,vt,Ct,Ge,se,ue);b.pixelStorei(b.UNPACK_ROW_LENGTH,In),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,re),b.pixelStorei(b.UNPACK_SKIP_PIXELS,cn),b.pixelStorei(b.UNPACK_SKIP_ROWS,Bi),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Ye),Y===0&&W.generateMipmaps&&b.generateMipmap(Ft),F.unbindTexture()},this.copyTextureToTexture3D=function(C,W,st=null,rt=null,Y=0){return C.isTexture!==!0&&(Gs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),st=arguments[0]||null,rt=arguments[1]||null,C=arguments[2],W=arguments[3],Y=arguments[4]||0),Gs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,W,st,rt,Y)},this.initRenderTarget=function(C){ht.get(C).__webglFramebuffer===void 0&&A.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?A.setTextureCube(C,0):C.isData3DTexture?A.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?A.setTexture2DArray(C,0):A.setTexture2D(C,0),F.unbindTexture()},this.resetState=function(){P=0,q=0,I=null,F.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}};var En=class extends ke{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sn,this.environmentIntensity=1,this.environmentRotation=new Sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Ri=class extends Be{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Je,h=Je,u,f){super(null,o,a,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var er=class extends Wn{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new zt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},go=new k,xo=new k,xu=new ae,Hs=new js,Xr=new Ai,Ga=new k,_u=new k,jl=class extends ke{constructor(t=new Se,e=new er){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)go.fromBufferAttribute(e,s-1),xo.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=go.distanceTo(xo);t.setAttribute("lineDistance",new xe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xr.copy(n.boundingSphere),Xr.applyMatrix4(s),Xr.radius+=r,t.ray.intersectsSphere(Xr)===!1)return;xu.copy(s).invert(),Hs.copy(t.ray).applyMatrix4(xu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let m=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=m,p=g-1;x<p;x+=c){let d=h.getX(x),E=h.getX(x+1),_=Yr(this,t,Hs,l,d,E);_&&e.push(_)}if(this.isLineLoop){let x=h.getX(g-1),p=h.getX(m),d=Yr(this,t,Hs,l,x,p);d&&e.push(d)}}else{let m=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let x=m,p=g-1;x<p;x+=c){let d=Yr(this,t,Hs,l,x,x+1);d&&e.push(d)}if(this.isLineLoop){let x=Yr(this,t,Hs,l,g-1,m);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Yr(i,t,e,n,s,r){let o=i.geometry.attributes.position;if(go.fromBufferAttribute(o,s),xo.fromBufferAttribute(o,r),e.distanceSqToSegment(go,xo,Ga,_u)>n)return;Ga.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Ga);if(!(l<t.near||l>t.far))return{distance:l,point:_u.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var vu=new k,yu=new k,_o=class extends jl{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)vu.fromBufferAttribute(e,s),yu.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+vu.distanceTo(yu);t.setAttribute("lineDistance",new xe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Ql=class extends Wn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Mu=new ae,tc=new js,Zr=new Ai,$r=new k,vo=class extends ke{constructor(t=new Se,e=new Ql){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zr.copy(n.boundingSphere),Zr.applyMatrix4(s),Zr.radius+=r,t.ray.intersectsSphere(Zr)===!1)return;Mu.copy(s).invert(),tc.copy(t.ray).applyMatrix4(Mu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let g=f,x=m;g<x;g++){let p=c.getX(g);$r.fromBufferAttribute(u,p),bu($r,p,l,s,t,e,this)}}else{let f=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let g=f,x=m;g<x;g++)$r.fromBufferAttribute(u,g),bu($r,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function bu(i,t,e,n,s,r,o){let a=tc.distanceSqToPoint(i);if(a<e){let l=new k;tc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var ps=class extends Be{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isVideoTexture=!0,this.minFilter=o!==void 0?o:ge,this.magFilter=r!==void 0?r:ge,this.generateMipmaps=!1;let h=this;function u(){h.needsUpdate=!0,t.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in t&&t.requestVideoFrameCallback(u)}clone(){return new this.constructor(this.image).copy(this)}update(){let t=this.image;"requestVideoFrameCallback"in t===!1&&t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}};var yo=class extends Be{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},sn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],f=n[s+1]-h,m=(o-h)/f;return(s+m)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new pt:new k);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new k,s=[],r=[],o=[],a=new k,l=new ae;for(let m=0;m<=t;m++){let g=m/t;s[m]=this.getTangentAt(g,new k)}r[0]=new k,o[0]=new k;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let m=1;m<=t;m++){if(r[m]=r[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(s[m-1],s[m]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Pe(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(l.makeRotationAxis(a,g))}o[m].crossVectors(s[m],r[m])}if(e===!0){let m=Math.acos(Pe(r[0].dot(r[t]),-1,1));m/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(m=-m);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],m*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},nr=class extends sn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new pt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,m=c-this.aY;l=f*h-m*u+this.aX,c=f*u+m*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},ec=class extends nr{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Lc(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,m=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,m*=h,s(o,a,f,m)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Jr=new k,Wa=new Lc,Xa=new Lc,Ya=new Lc,nc=class extends sn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new k){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Jr.subVectors(s[0],s[1]).add(s[0]),c=Jr);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Jr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Jr),this.curveType==="centripetal"||this.curveType==="chordal"){let m=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),m),x=Math.pow(u.distanceToSquared(f),m),p=Math.pow(f.distanceToSquared(h),m);x<1e-4&&(x=1),g<1e-4&&(g=x),p<1e-4&&(p=x),Wa.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,x,p),Xa.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,x,p),Ya.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,x,p)}else this.curveType==="catmullrom"&&(Wa.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Xa.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Ya.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(Wa.calc(l),Xa.calc(l),Ya.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new k().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Su(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function D3(i,t){let e=1-i;return e*e*t}function U3(i,t){return 2*(1-i)*i*t}function N3(i,t){return i*i*t}function Ys(i,t,e,n){return D3(i,t)+U3(i,e)+N3(i,n)}function q3(i,t){let e=1-i;return e*e*e*t}function F3(i,t){let e=1-i;return 3*e*e*i*t}function O3(i,t){return 3*(1-i)*i*i*t}function B3(i,t){return i*i*i*t}function Zs(i,t,e,n,s){return q3(i,t)+F3(i,e)+O3(i,n)+B3(i,s)}var Mo=class extends sn{constructor(t=new pt,e=new pt,n=new pt,s=new pt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new pt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Zs(t,s.x,r.x,o.x,a.x),Zs(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ic=class extends sn{constructor(t=new k,e=new k,n=new k,s=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new k){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Zs(t,s.x,r.x,o.x,a.x),Zs(t,s.y,r.y,o.y,a.y),Zs(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},bo=class extends sn{constructor(t=new pt,e=new pt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new pt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new pt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},sc=class extends sn{constructor(t=new k,e=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new k){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new k){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},So=class extends sn{constructor(t=new pt,e=new pt,n=new pt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new pt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ys(t,s.x,r.x,o.x),Ys(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},rc=class extends sn{constructor(t=new k,e=new k,n=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new k){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ys(t,s.x,r.x,o.x),Ys(t,s.y,r.y,o.y),Ys(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},wo=class extends sn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new pt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Su(a,l.x,c.x,h.x,u.x),Su(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new pt().fromArray(s))}return this}},oc=Object.freeze({__proto__:null,ArcCurve:ec,CatmullRomCurve3:nc,CubicBezierCurve:Mo,CubicBezierCurve3:ic,EllipseCurve:nr,LineCurve:bo,LineCurve3:sc,QuadraticBezierCurve:So,QuadraticBezierCurve3:rc,SplineCurve:wo}),ac=class extends sn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new oc[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new oc[s.type]().fromJSON(s))}return this}},Xn=class extends ac{constructor(t){super(),this.type="Path",this.currentPoint=new pt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new bo(this.currentPoint.clone(),new pt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new So(this.currentPoint.clone(),new pt(t,e),new pt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new Mo(this.currentPoint.clone(),new pt(t,e),new pt(n,s),new pt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new wo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new nr(t,e,n,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}};var bn=class extends Xn{constructor(t){super(t),this.uuid=_s(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Xn().fromJSON(s))}return this}},k3={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=td(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,f,m;if(n&&(r=W3(i,t,r,e)),i.length>80*e){a=c=i[0],l=h=i[1];for(let g=e;g<s;g+=e)u=i[g],f=i[g+1],u<a&&(a=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);m=Math.max(c-a,h-l),m=m!==0?32767/m:0}return ir(r,o,e,a,l,m,0),o}};function td(i,t,e,n,s){let r,o;if(s===n2(i,t,e,n)>0)for(r=t;r<e;r+=n)o=wu(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=wu(r,i[r],i[r+1],o);return o&&Fo(o,o.next)&&(rr(o),o=o.next),o}function Ii(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Fo(e,e.next)||me(e.prev,e,e.next)===0)){if(rr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ir(i,t,e,n,s,r,o){if(!i)return;!o&&r&&J3(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?H3(i,n,s,r):z3(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),rr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=V3(Ii(i),t,e),ir(i,t,e,n,s,r,2)):o===2&&G3(i,t,e,n,s,r):ir(Ii(i),t,e,n,s,r,1);break}}}function z3(i){let t=i.prev,e=i,n=i.next;if(me(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,f=s>r?s>o?s:o:r>o?r:o,m=a>l?a>c?a:c:l>c?l:c,g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=m&&es(s,a,r,l,o,c,g.x,g.y)&&me(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function H3(i,t,e,n){let s=i.prev,r=i,o=i.next;if(me(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,f=o.y,m=a<l?a<c?a:c:l<c?l:c,g=h<u?h<f?h:f:u<f?u:f,x=a>l?a>c?a:c:l>c?l:c,p=h>u?h>f?h:f:u>f?u:f,d=lc(m,g,t,e,n),E=lc(x,p,t,e,n),_=i.prevZ,v=i.nextZ;for(;_&&_.z>=d&&v&&v.z<=E;){if(_.x>=m&&_.x<=x&&_.y>=g&&_.y<=p&&_!==s&&_!==o&&es(a,h,l,u,c,f,_.x,_.y)&&me(_.prev,_,_.next)>=0||(_=_.prevZ,v.x>=m&&v.x<=x&&v.y>=g&&v.y<=p&&v!==s&&v!==o&&es(a,h,l,u,c,f,v.x,v.y)&&me(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;_&&_.z>=d;){if(_.x>=m&&_.x<=x&&_.y>=g&&_.y<=p&&_!==s&&_!==o&&es(a,h,l,u,c,f,_.x,_.y)&&me(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;v&&v.z<=E;){if(v.x>=m&&v.x<=x&&v.y>=g&&v.y<=p&&v!==s&&v!==o&&es(a,h,l,u,c,f,v.x,v.y)&&me(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function V3(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!Fo(s,r)&&ed(s,n,n.next,r)&&sr(s,r)&&sr(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),rr(n),rr(n.next),n=i=r),n=n.next}while(n!==i);return Ii(n)}function G3(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Q3(o,a)){let l=nd(o,a);o=Ii(o,o.next),l=Ii(l,l.next),ir(o,t,e,n,s,r,0),ir(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function W3(i,t,e,n){let s=[],r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=td(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(j3(c));for(s.sort(X3),r=0;r<s.length;r++)e=Y3(s[r],e);return e}function X3(i,t){return i.x-t.x}function Y3(i,t){let e=Z3(i,t);if(!e)return t;let n=nd(e,i);return Ii(n,n.next),Ii(e,e.next)}function Z3(i,t){let e=t,n=-1/0,s,r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&es(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),sr(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&$3(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function $3(i,t){return me(i.prev,i,t.prev)<0&&me(t.next,i,i.next)<0}function J3(i,t,e,n){let s=i;do s.z===0&&(s.z=lc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,K3(s)}function K3(i){let t,e,n,s,r,o,a,l,c=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(o>1);return i}function lc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function j3(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function es(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Q3(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!t2(i,t)&&(sr(i,t)&&sr(t,i)&&e2(i,t)&&(me(i.prev,i,t.prev)||me(i,t.prev,t))||Fo(i,t)&&me(i.prev,i,i.next)>0&&me(t.prev,t,t.next)>0)}function me(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Fo(i,t){return i.x===t.x&&i.y===t.y}function ed(i,t,e,n){let s=jr(me(i,t,e)),r=jr(me(i,t,n)),o=jr(me(e,n,i)),a=jr(me(e,n,t));return!!(s!==r&&o!==a||s===0&&Kr(i,e,t)||r===0&&Kr(i,n,t)||o===0&&Kr(e,i,n)||a===0&&Kr(e,t,n))}function Kr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function jr(i){return i>0?1:i<0?-1:0}function t2(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&ed(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function sr(i,t){return me(i.prev,i,i.next)<0?me(i,t,i.next)>=0&&me(i,i.prev,t)>=0:me(i,t,i.prev)<0||me(i,i.next,t)<0}function e2(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function nd(i,t){let e=new cc(i.i,i.x,i.y),n=new cc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function wu(i,t,e,n){let s=new cc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function rr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function cc(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function n2(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var oi=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Eu(t),Tu(n,t);let o=t.length;e.forEach(Eu);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Tu(n,e[l]);let a=k3.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Eu(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Tu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Pi=class i extends Se{constructor(t=new bn([new pt(.5,.5),new pt(-.5,.5),new pt(-.5,-.5),new pt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new xe(s,3)),this.setAttribute("uv",new xe(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,m=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:m-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3,d=e.extrudePath,E=e.UVGenerator!==void 0?e.UVGenerator:i2,_,v=!1,N,P,q,I;d&&(_=d.getSpacedPoints(h),v=!0,f=!1,N=d.computeFrenetFrames(h,!1),P=new k,q=new k,I=new k),f||(p=0,m=0,g=0,x=0);let T=a.extractPoints(c),y=T.shape,B=T.holes;if(!oi.isClockWise(y)){y=y.reverse();for(let z=0,G=B.length;z<G;z++){let b=B[z];oi.isClockWise(b)&&(B[z]=b.reverse())}}let j=oi.triangulateShape(y,B),et=y;for(let z=0,G=B.length;z<G;z++){let b=B[z];y=y.concat(b)}function nt(z,G,b){return G||console.error("THREE.ExtrudeGeometry: vec does not exist"),z.clone().addScaledVector(G,b)}let it=y.length,ot=j.length;function H(z,G,b){let Z,Q,lt,F=z.x-G.x,L=z.y-G.y,ht=b.x-z.x,A=b.y-z.y,M=F*F+L*L,K=F*A-L*ht;if(Math.abs(K)>Number.EPSILON){let at=Math.sqrt(M),ft=Math.sqrt(ht*ht+A*A),dt=G.x-L/at,Pt=G.y+F/at,Mt=b.x-A/ft,Et=b.y+ht/ft,Gt=((Mt-dt)*A-(Et-Pt)*ht)/(F*A-L*ht);Z=dt+F*Gt-z.x,Q=Pt+L*Gt-z.y;let _t=Z*Z+Q*Q;if(_t<=2)return new pt(Z,Q);lt=Math.sqrt(_t/2)}else{let at=!1;F>Number.EPSILON?ht>Number.EPSILON&&(at=!0):F<-Number.EPSILON?ht<-Number.EPSILON&&(at=!0):Math.sign(L)===Math.sign(A)&&(at=!0),at?(Z=-L,Q=F,lt=Math.sqrt(M)):(Z=F,Q=L,lt=Math.sqrt(M/2))}return new pt(Z/lt,Q/lt)}let mt=[];for(let z=0,G=et.length,b=G-1,Z=z+1;z<G;z++,b++,Z++)b===G&&(b=0),Z===G&&(Z=0),mt[z]=H(et[z],et[b],et[Z]);let xt=[],bt,qt=mt.concat();for(let z=0,G=B.length;z<G;z++){let b=B[z];bt=[];for(let Z=0,Q=b.length,lt=Q-1,F=Z+1;Z<Q;Z++,lt++,F++)lt===Q&&(lt=0),F===Q&&(F=0),bt[Z]=H(b[Z],b[lt],b[F]);xt.push(bt),qt=qt.concat(bt)}for(let z=0;z<p;z++){let G=z/p,b=m*Math.cos(G*Math.PI/2),Z=g*Math.sin(G*Math.PI/2)+x;for(let Q=0,lt=et.length;Q<lt;Q++){let F=nt(et[Q],mt[Q],Z);w(F.x,F.y,-b)}for(let Q=0,lt=B.length;Q<lt;Q++){let F=B[Q];bt=xt[Q];for(let L=0,ht=F.length;L<ht;L++){let A=nt(F[L],bt[L],Z);w(A.x,A.y,-b)}}}let jt=g+x;for(let z=0;z<it;z++){let G=f?nt(y[z],qt[z],jt):y[z];v?(q.copy(N.normals[0]).multiplyScalar(G.x),P.copy(N.binormals[0]).multiplyScalar(G.y),I.copy(_[0]).add(q).add(P),w(I.x,I.y,I.z)):w(G.x,G.y,0)}for(let z=1;z<=h;z++)for(let G=0;G<it;G++){let b=f?nt(y[G],qt[G],jt):y[G];v?(q.copy(N.normals[z]).multiplyScalar(b.x),P.copy(N.binormals[z]).multiplyScalar(b.y),I.copy(_[z]).add(q).add(P),w(I.x,I.y,I.z)):w(b.x,b.y,u/h*z)}for(let z=p-1;z>=0;z--){let G=z/p,b=m*Math.cos(G*Math.PI/2),Z=g*Math.sin(G*Math.PI/2)+x;for(let Q=0,lt=et.length;Q<lt;Q++){let F=nt(et[Q],mt[Q],Z);w(F.x,F.y,u+b)}for(let Q=0,lt=B.length;Q<lt;Q++){let F=B[Q];bt=xt[Q];for(let L=0,ht=F.length;L<ht;L++){let A=nt(F[L],bt[L],Z);v?w(A.x,A.y+_[h-1].y,_[h-1].x+b):w(A.x,A.y,u+b)}}}U(),D();function U(){let z=s.length/3;if(f){let G=0,b=it*G;for(let Z=0;Z<ot;Z++){let Q=j[Z];tt(Q[2]+b,Q[1]+b,Q[0]+b)}G=h+p*2,b=it*G;for(let Z=0;Z<ot;Z++){let Q=j[Z];tt(Q[0]+b,Q[1]+b,Q[2]+b)}}else{for(let G=0;G<ot;G++){let b=j[G];tt(b[2],b[1],b[0])}for(let G=0;G<ot;G++){let b=j[G];tt(b[0]+it*h,b[1]+it*h,b[2]+it*h)}}n.addGroup(z,s.length/3-z,0)}function D(){let z=s.length/3,G=0;R(et,G),G+=et.length;for(let b=0,Z=B.length;b<Z;b++){let Q=B[b];R(Q,G),G+=Q.length}n.addGroup(z,s.length/3-z,1)}function R(z,G){let b=z.length;for(;--b>=0;){let Z=b,Q=b-1;Q<0&&(Q=z.length-1);for(let lt=0,F=h+p*2;lt<F;lt++){let L=it*lt,ht=it*(lt+1),A=G+Z+L,M=G+Q+L,K=G+Q+ht,at=G+Z+ht;ut(A,M,K,at)}}}function w(z,G,b){l.push(z),l.push(G),l.push(b)}function tt(z,G,b){S(z),S(G),S(b);let Z=s.length/3,Q=E.generateTopUV(n,s,Z-3,Z-2,Z-1);J(Q[0]),J(Q[1]),J(Q[2])}function ut(z,G,b,Z){S(z),S(G),S(Z),S(G),S(b),S(Z);let Q=s.length/3,lt=E.generateSideWallUV(n,s,Q-6,Q-3,Q-2,Q-1);J(lt[0]),J(lt[1]),J(lt[3]),J(lt[1]),J(lt[2]),J(lt[3])}function S(z){s.push(l[z*3+0]),s.push(l[z*3+1]),s.push(l[z*3+2])}function J(z){r.push(z.x),r.push(z.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return s2(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new oc[s.type]().fromJSON(s)),new i(n,t.options)}},i2={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new pt(r,o),new pt(a,l),new pt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[s*3],m=t[s*3+1],g=t[s*3+2],x=t[r*3],p=t[r*3+1],d=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new pt(o,1-l),new pt(c,1-u),new pt(f,1-g),new pt(x,1-d)]:[new pt(a,1-l),new pt(h,1-u),new pt(m,1-g),new pt(p,1-d)]}};function s2(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var ms=class i extends Se{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new k,f=new k,m=[],g=[],x=[],p=[];for(let d=0;d<=n;d++){let E=[],_=d/n,v=0;d===0&&o===0?v=.5/e:d===n&&l===Math.PI&&(v=-.5/e);for(let N=0;N<=e;N++){let P=N/e;u.x=-t*Math.cos(s+P*r)*Math.sin(o+_*a),u.y=t*Math.cos(o+_*a),u.z=t*Math.sin(s+P*r)*Math.sin(o+_*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),p.push(P+v,1-_),E.push(c++)}h.push(E)}for(let d=0;d<n;d++)for(let E=0;E<e;E++){let _=h[d][E+1],v=h[d][E],N=h[d+1][E],P=h[d+1][E+1];(d!==0||o>0)&&m.push(_,v,P),(d!==n-1||l<Math.PI)&&m.push(v,N,P)}this.setIndex(m),this.setAttribute("position",new xe(g,3)),this.setAttribute("normal",new xe(x,3)),this.setAttribute("uv",new xe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var ui=class extends Wn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gu,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},or=class extends ui{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new pt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Pe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new zt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new zt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new zt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};function Qr(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function r2(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var gs=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},hc=class extends gs{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Mh,endingEnd:Mh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case bh:r=t,a=2*e-n;break;case Sh:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case bh:o=t,l=2*n-e;break;case Sh:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,m=this._weightNext,g=(n-e)/(s-e),x=g*g,p=x*g,d=-f*p+2*f*x-f*g,E=(1+f)*p+(-1.5-2*f)*x+(-.5+f)*g+1,_=(-1-m)*p+(1.5+m)*x+.5*g,v=m*p-m*x;for(let N=0;N!==a;++N)r[N]=d*o[h+N]+E*o[c+N]+_*o[l+N]+v*o[u+N];return r}},uc=class extends gs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},dc=class extends gs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},gn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Qr(e,this.TimeBufferType),this.values=Qr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Qr(t.times,Array),values:Qr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new dc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new uc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new hc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ro:e=this.InterpolantFactoryMethodDiscrete;break;case Ul:e=this.InterpolantFactoryMethodLinear;break;case ma:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ro;case this.InterpolantFactoryMethodLinear:return Ul;case this.InterpolantFactoryMethodSmooth:return ma}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&r2(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ma,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*n,f=u-n,m=u+n;for(let g=0;g!==n;++g){let x=e[u+g];if(x!==e[f+g]||x!==e[m+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,f=o*n;for(let m=0;m!==n;++m)e[f+m]=e[u+m]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};gn.prototype.TimeBufferType=Float32Array;gn.prototype.ValueBufferType=Float32Array;gn.prototype.DefaultInterpolation=Ul;var Li=class extends gn{constructor(t,e,n){super(t,e,n)}};Li.prototype.ValueTypeName="bool";Li.prototype.ValueBufferType=Array;Li.prototype.DefaultInterpolation=ro;Li.prototype.InterpolantFactoryMethodLinear=void 0;Li.prototype.InterpolantFactoryMethodSmooth=void 0;var fc=class extends gn{};fc.prototype.ValueTypeName="color";var pc=class extends gn{};pc.prototype.ValueTypeName="number";var mc=class extends gs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)Ke.slerpFlat(r,0,o,c-a,o,c,l);return r}},Eo=class extends gn{InterpolantFactoryMethodLinear(t){return new mc(this.times,this.values,this.getValueSize(),t)}};Eo.prototype.ValueTypeName="quaternion";Eo.prototype.InterpolantFactoryMethodSmooth=void 0;var Di=class extends gn{constructor(t,e,n){super(t,e,n)}};Di.prototype.ValueTypeName="string";Di.prototype.ValueBufferType=Array;Di.prototype.DefaultInterpolation=ro;Di.prototype.InterpolantFactoryMethodLinear=void 0;Di.prototype.InterpolantFactoryMethodSmooth=void 0;var gc=class extends gn{};gc.prototype.ValueTypeName="vector";var To={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},xc=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let m=c[u],g=c[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}},o2=new xc,xn=class{constructor(t){this.manager=t!==void 0?t:o2,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};xn.DEFAULT_MATERIAL_NAME="__DEFAULT";var qn={},_c=class extends Error{constructor(t,e){super(t),this.response=e}},xs=class extends xn{constructor(t){super(t)}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=To.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(qn[t]!==void 0){qn[t].push({onLoad:e,onProgress:n,onError:s});return}qn[t]=[],qn[t].push({onLoad:e,onProgress:n,onError:s});let o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=qn[t],u=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),m=f?parseInt(f):0,g=m!==0,x=0,p=new ReadableStream({start(d){E();function E(){u.read().then(({done:_,value:v})=>{if(_)d.close();else{x+=v.byteLength;let N=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:m});for(let P=0,q=h.length;P<q;P++){let I=h[P];I.onProgress&&I.onProgress(N)}d.enqueue(v),E()}},_=>{d.error(_)})}}});return new Response(p)}else throw new _c(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,m=new TextDecoder(f);return c.arrayBuffer().then(g=>m.decode(g))}}}).then(c=>{To.add(t,c);let h=qn[t];delete qn[t];for(let u=0,f=h.length;u<f;u++){let m=h[u];m.onLoad&&m.onLoad(c)}}).catch(c=>{let h=qn[t];if(h===void 0)throw this.manager.itemError(t),c;delete qn[t];for(let u=0,f=h.length;u<f;u++){let m=h[u];m.onError&&m.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}};var Co=class extends xn{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=To.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;let a=Ks("img");function l(){h(),To.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(u){h(),s&&s(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}},Ao=class extends xn{constructor(t){super(t)}load(t,e,n,s){let r=new Qs;r.colorSpace=Ie;let o=new Co(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function l(c){o.load(t[c],function(h){r.images[c]=h,a++,a===6&&(r.needsUpdate=!0,e&&e(r))},void 0,s)}for(let c=0;c<t.length;++c)l(c);return r}};var Ro=class extends xn{constructor(t){super(t)}load(t,e,n,s){let r=new Be,o=new Co(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}},Io=class extends ke{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new zt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}};var Za=new ae,Cu=new k,Au=new k,Po=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pt(512,512),this.map=null,this.mapPass=null,this.matrix=new ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new tr,this._frameExtents=new pt(1,1),this._viewportCount=1,this._viewports=[new ie(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Cu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Cu),Au.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Au),e.updateMatrixWorld(),Za.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Za),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Za)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Ru=new ae,Vs=new k,$a=new k,vc=class extends Po{constructor(){super(new Oe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new pt(4,2),this._viewportCount=6,this._viewports=[new ie(2,1,1,1),new ie(0,1,1,1),new ie(3,1,1,1),new ie(1,1,1,1),new ie(3,0,1,1),new ie(1,0,1,1)],this._cubeDirections=[new k(1,0,0),new k(-1,0,0),new k(0,0,1),new k(0,0,-1),new k(0,1,0),new k(0,-1,0)],this._cubeUps=[new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,0,1),new k(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Vs.setFromMatrixPosition(t.matrixWorld),n.position.copy(Vs),$a.copy(n.position),$a.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt($a),n.updateMatrixWorld(),s.makeTranslation(-Vs.x,-Vs.y,-Vs.z),Ru.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ru)}},Ui=class extends Io{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new vc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},yc=class extends Po{constructor(){super(new ds(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Lo=class extends Io{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ke.DEFAULT_UP),this.updateMatrix(),this.target=new ke,this.shadow=new yc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Dc="\\[\\]\\.:\\/",a2=new RegExp("["+Dc+"]","g"),Uc="[^"+Dc+"]",l2="[^"+Dc.replace("\\.","")+"]",c2=/((?:WC+[\/:])*)/.source.replace("WC",Uc),h2=/(WCOD+)?/.source.replace("WCOD",l2),u2=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Uc),d2=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Uc),f2=new RegExp("^"+c2+h2+u2+d2+"$"),p2=["material","materials","bones","map"],Mc=class{constructor(t,e,n){let s=n||pe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},pe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(a2,"")}static parseTrackName(t){let e=f2.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);p2.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};pe.Composite=Mc;pe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};pe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};pe.prototype.GetterByBindingType=[pe.prototype._getValue_direct,pe.prototype._getValue_array,pe.prototype._getValue_arrayElement,pe.prototype._getValue_toArray];pe.prototype.SetterByBindingTypeAndVersioning=[[pe.prototype._setValue_direct,pe.prototype._setValue_direct_setNeedsUpdate,pe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[pe.prototype._setValue_array,pe.prototype._setValue_array_setNeedsUpdate,pe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[pe.prototype._setValue_arrayElement,pe.prototype._setValue_arrayElement_setNeedsUpdate,pe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[pe.prototype._setValue_fromArray,pe.prototype._setValue_fromArray_setNeedsUpdate,pe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var pg=new Float32Array(1);var Iu=new pt,Do=class{constructor(t=new pt(1/0,1/0),e=new pt(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Iu.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Iu).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}};var rn=class{constructor(){this.type="ShapePath",this.color=new zt,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new Xn,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,s){return this.currentPath.quadraticCurveTo(t,e,n,s),this}bezierCurveTo(t,e,n,s,r,o){return this.currentPath.bezierCurveTo(t,e,n,s,r,o),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(d){let E=[];for(let _=0,v=d.length;_<v;_++){let N=d[_],P=new bn;P.curves=N.curves,E.push(P)}return E}function n(d,E){let _=E.length,v=!1;for(let N=_-1,P=0;P<_;N=P++){let q=E[N],I=E[P],T=I.x-q.x,y=I.y-q.y;if(Math.abs(y)>Number.EPSILON){if(y<0&&(q=E[P],T=-T,I=E[N],y=-y),d.y<q.y||d.y>I.y)continue;if(d.y===q.y){if(d.x===q.x)return!0}else{let B=y*(d.x-q.x)-T*(d.y-q.y);if(B===0)return!0;if(B<0)continue;v=!v}}else{if(d.y!==q.y)continue;if(I.x<=d.x&&d.x<=q.x||q.x<=d.x&&d.x<=I.x)return!0}}return v}let s=oi.isClockWise,r=this.subPaths;if(r.length===0)return[];let o,a,l,c=[];if(r.length===1)return a=r[0],l=new bn,l.curves=a.curves,c.push(l),c;let h=!s(r[0].getPoints());h=t?!h:h;let u=[],f=[],m=[],g=0,x;f[g]=void 0,m[g]=[];for(let d=0,E=r.length;d<E;d++)a=r[d],x=a.getPoints(),o=s(x),o=t?!o:o,o?(!h&&f[g]&&g++,f[g]={s:new bn,p:x},f[g].s.curves=a.curves,h&&g++,m[g]=[]):m[g].push({h:a,p:x[0]});if(!f[0])return e(r);if(f.length>1){let d=!1,E=0;for(let _=0,v=f.length;_<v;_++)u[_]=[];for(let _=0,v=f.length;_<v;_++){let N=m[_];for(let P=0;P<N.length;P++){let q=N[P],I=!0;for(let T=0;T<f.length;T++)n(q.p,f[T].p)&&(_!==T&&E++,I?(I=!1,u[T].push(q)):d=!0);I&&u[_].push(q)}}E>0&&d===!1&&(m=u)}let p;for(let d=0,E=f.length;d<E;d++){l=f[d].s,c.push(l),p=m[d];for(let _=0,v=p.length;_<v;_++)l.holes.push(p[_].h)}return c}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bc);var m2=new ds(-1,1,1,-1,0,1),Nc=class extends Se{constructor(){super(),this.setAttribute("position",new xe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new xe([0,2,0,0,2,0],2))}},g2=new Nc,Oo=class{constructor(t){this._mesh=new $t(g2,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,m2)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var x2="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",_2=`
precision highp float;
uniform sampler2D tMap; uniform vec2 uTexel; uniform float uThreshold;
varying vec2 vUv;
void main(){
  vec3 c = texture2D(tMap, vUv + uTexel * vec2(-0.5, -0.5)).rgb + texture2D(tMap, vUv + uTexel * vec2(0.5, -0.5)).rgb
         + texture2D(tMap, vUv + uTexel * vec2(-0.5, 0.5)).rgb + texture2D(tMap, vUv + uTexel * vec2(0.5, 0.5)).rgb;
  c *= 0.25;
  float l = max(c.r, max(c.g, c.b));
  float k = max(l - uThreshold, 0.0) / max(l, 1e-4);          // keep only what is brighter than the threshold
  gl_FragColor = vec4(min(c * k, vec3(40.0)), 1.0);
}`,v2=`
precision highp float;
uniform sampler2D tMap; uniform vec2 uTexel;
varying vec2 vUv;
void main(){
  vec3 c = texture2D(tMap, vUv).rgb * 4.0;
  c += texture2D(tMap, vUv + uTexel * vec2(-1.0, -1.0)).rgb + texture2D(tMap, vUv + uTexel * vec2(1.0, -1.0)).rgb;
  c += texture2D(tMap, vUv + uTexel * vec2(-1.0, 1.0)).rgb + texture2D(tMap, vUv + uTexel * vec2(1.0, 1.0)).rgb;
  gl_FragColor = vec4(c / 8.0, 1.0);
}`,y2=`
precision highp float;
uniform sampler2D tMap; uniform vec2 uTexel; uniform float uGain;
varying vec2 vUv;
void main(){
  vec3 c = texture2D(tMap, vUv + uTexel * vec2(-1.0, 0.0)).rgb + texture2D(tMap, vUv + uTexel * vec2(1.0, 0.0)).rgb
         + texture2D(tMap, vUv + uTexel * vec2(0.0, -1.0)).rgb + texture2D(tMap, vUv + uTexel * vec2(0.0, 1.0)).rgb;
  c += (texture2D(tMap, vUv + uTexel * vec2(-0.5, -0.5)).rgb + texture2D(tMap, vUv + uTexel * vec2(0.5, -0.5)).rgb
      + texture2D(tMap, vUv + uTexel * vec2(-0.5, 0.5)).rgb + texture2D(tMap, vUv + uTexel * vec2(0.5, 0.5)).rgb) * 2.0;
  gl_FragColor = vec4(c / 12.0 * uGain, 1.0);
}`,M2=`
precision highp float;
uniform sampler2D tHdr, tBloom;
uniform float uExposure, uBloom, uVignette, uGrain, uTime, uWhite, uBlack, uAspect, uFringe, uSat;
varying vec2 vUv;
float hash(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
vec3 film(vec3 x){                                              // ACES-style filmic curve
  return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0);
}
void main(){
  vec2 d = vUv - 0.5;
  float r2 = dot(d * vec2(uAspect, 1.0), d * vec2(uAspect, 1.0)) / (0.25 * (uAspect * uAspect + 1.0));
  vec3 c;
  if (uFringe > 0.0) {                                          // a touch of lens colour fringing toward the corners
    vec2 o = d * r2 * uFringe;
    c = vec3(texture2D(tHdr, vUv + o).r, texture2D(tHdr, vUv).g, texture2D(tHdr, vUv - o).b);
  } else c = texture2D(tHdr, vUv).rgb;
  c += texture2D(tBloom, vUv).rgb * uBloom;
  c *= uExposure;
  c *= 1.0 - uVignette * smoothstep(0.25, 1.15, r2);
  c = film(c);
  c = max(mix(vec3(dot(c, vec3(0.2126, 0.7152, 0.0722))), c, uSat), 0.0);
  c = mix(c, vec3(1.0), uWhite);
  c *= 1.0 - uBlack;
  c = pow(c, vec3(1.0 / 2.2));
  c += (hash(gl_FragCoord.xy + fract(uTime) * 311.0) - 0.5) * uGrain;
  gl_FragColor = vec4(c, 1.0);
}`;function b2(i){let t=i.getContext(),e=!1;try{let n=t.createRenderbuffer(),s=t.createFramebuffer();t.bindRenderbuffer(t.RENDERBUFFER,n),t.renderbufferStorageMultisample(t.RENDERBUFFER,4,t.RGBA16F,4,4),t.bindFramebuffer(t.FRAMEBUFFER,s),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,n),e=t.checkFramebufferStatus(t.FRAMEBUFFER)===t.FRAMEBUFFER_COMPLETE&&t.getError()===t.NO_ERROR,t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindRenderbuffer(t.RENDERBUFFER,null),t.deleteFramebuffer(s),t.deleteRenderbuffer(n)}catch{e=!1}return i.resetState(),e}var Bo=class{constructor(t){let e=this.renderer=new mo({canvas:t,antialias:!1,alpha:!1,depth:!1,stencil:!1,powerPreference:"high-performance"});e.autoClear=!1,e.outputColorSpace=di,this.canvas=t;let n=e.extensions.has("EXT_color_buffer_half_float")||e.extensions.has("EXT_color_buffer_float");this.type=n?Ni:pn;let s={type:this.type,depthBuffer:!1,magFilter:ge,minFilter:ge};this.hdr=new Xe(4,4,{...s,depthBuffer:!0}),this.opts=s,this.ms=null,this.canMS=n&&e.capabilities.maxSamples>=4&&b2(e),this.levels=5,this.down=[],this.up=[];for(let o=0;o<this.levels;o++)this.down.push(new Xe(2,2,s)),this.up.push(new Xe(2,2,s));let r=(o,a)=>new Me({vertexShader:x2,fragmentShader:o,uniforms:a,depthTest:!1,depthWrite:!1});this.mPre=r(_2,{tMap:{value:null},uTexel:{value:new pt},uThreshold:{value:1}}),this.mDown=r(v2,{tMap:{value:null},uTexel:{value:new pt}}),this.mUp=r(y2,{tMap:{value:null},uTexel:{value:new pt},uGain:{value:1}}),this.mUp.blending=li,this.mFinal=r(M2,{tHdr:{value:this.hdr.texture},tBloom:{value:null},uExposure:{value:1},uBloom:{value:.5},uVignette:{value:.35},uGrain:{value:.022},uTime:{value:0},uWhite:{value:0},uBlack:{value:0},uAspect:{value:1},uFringe:{value:.006},uSat:{value:1}}),this.quad=new Oo(this.mPre),this.w=0,this.h=0,this.pw=0,this.ph=0,this.quality=1,this.ema=1/60,this.slow=0,this.fast=0,this.locked=!1,this.look={exposure:1,bloom:.5,threshold:1,vignette:.35,grain:.022,white:0,black:0,fringe:.006,sat:1}}govern(t){this.locked||(this.ema=this.ema*.9+t*.1,this.ema>1/40?(this.slow+=t,this.fast=0):this.ema<1/56?(this.fast+=t,this.slow=0):(this.slow=0,this.fast=0),this.slow>1.2&&this.quality>.5&&(this.quality=Math.max(.5,this.quality*.85),this.slow=0),this.fast>6&&this.quality<1&&(this.quality=Math.min(1,this.quality/.9),this.fast=0))}fit(){let t=this.canvas,e=Math.max(1,t.clientWidth),n=Math.max(1,t.clientHeight),s=Math.min(window.devicePixelRatio||1,2)*this.quality,r=34e5*this.quality*this.quality;e*n*s*s>r&&(s=Math.sqrt(r/(e*n)));let o=Math.max(2,Math.round(e*s)),a=Math.max(2,Math.round(n*s));if(o!==this.pw||a!==this.ph){this.pw=o,this.ph=a,this.renderer.setSize(o,a,!1),this.hdr.setSize(o,a),this.ms&&this.ms.setSize(o,a);let l=o,c=a;for(let h=0;h<this.levels;h++)l=Math.max(2,l>>1),c=Math.max(2,c>>1),this.down[h].setSize(l,c),this.up[h].setSize(l,c)}return this.w=e,this.h=n,{w:e,h:n,pw:o,ph:a}}_pass(t,e){this.quad.material=t,this.renderer.setRenderTarget(e),this.quad.render(this.renderer)}releaseMS(){this.ms&&(this.ms.dispose(),this.ms=null)}render(t,e,n,s){let r=this.renderer,o=this.look,a=this.hdr;s&&this.canMS&&(this.ms||(this.ms=new Xe(this.pw,this.ph,{...this.opts,depthBuffer:!0,samples:4})),a=this.ms),r.setRenderTarget(a),r.setClearColor(0,1),r.clear(!0,!0,!1);for(let h of t)h&&r.render(h,e);this.mPre.uniforms.tMap.value=a.texture,this.mPre.uniforms.uTexel.value.set(1/this.pw,1/this.ph),this.mPre.uniforms.uThreshold.value=o.threshold,this._pass(this.mPre,this.down[0]);for(let h=1;h<this.levels;h++)this.mDown.uniforms.tMap.value=this.down[h-1].texture,this.mDown.uniforms.uTexel.value.set(1/this.down[h-1].width,1/this.down[h-1].height),this._pass(this.mDown,this.down[h]);let l=this.down[this.levels-1];for(let h=this.levels-2;h>=0;h--)this.mDown.uniforms.tMap.value=this.down[h].texture,this.mDown.uniforms.uTexel.value.set(0,0),this._pass(this.mDown,this.up[h]),this.mUp.uniforms.tMap.value=l.texture,this.mUp.uniforms.uTexel.value.set(1/l.width,1/l.height),this.mUp.uniforms.uGain.value=1,this._pass(this.mUp,this.up[h]),l=this.up[h];let c=this.mFinal.uniforms;c.tHdr.value=a.texture,c.tBloom.value=l.texture,c.uExposure.value=o.exposure,c.uBloom.value=o.bloom/this.levels,c.uVignette.value=o.vignette,c.uGrain.value=o.grain,c.uTime.value=n,c.uWhite.value=o.white,c.uBlack.value=o.black,c.uAspect.value=this.pw/this.ph,c.uFringe.value=o.fringe,c.uSat.value=o.sat,this._pass(this.mFinal,null)}};var fe=Math.PI/180,Te=(i,t,e)=>Math.min(e,Math.max(t,i)),fi=(i,t,e)=>i+(t-i)*e,je=(i,t,e)=>{let n=Te((e-i)/(t-i),0,1);return n*n*(3-2*n)},id=i=>1-Math.pow(1-Te(i,0,1),3);var Yn=i=>((i+Math.PI)%(2*Math.PI)+2*Math.PI)%(2*Math.PI)-Math.PI;var lr=i=>Math.atan2(i[0],-i[2]),sd=i=>Math.asin(Te(i[1],-1,1));function cr(i,t){let[e,n,s,r]=i,[o,a,l,c]=t;return[e*c+r*o+n*l-s*a,n*c+r*a+s*o-e*l,s*c+r*l+e*a-n*o,r*c-e*o-n*a-s*l]}function ko(i,t,e,n){let s=Math.sin(n/2);return[i*s,t*s,e*s,Math.cos(n/2)]}function rd(i,t,e){let n=Math.cos(i/2),s=Math.cos(t/2),r=Math.cos(e/2),o=Math.sin(i/2),a=Math.sin(t/2),l=Math.sin(e/2);return[o*s*r+n*a*l,n*a*r-o*s*l,n*s*l-o*a*r,n*s*r+o*a*l]}function ys(i,t){let[e,n,s,r]=i,[o,a,l]=t,c=r*o+n*l-s*a,h=r*a+s*o-e*l,u=r*l+e*a-n*o,f=-e*o-n*a-s*l;return[c*r+f*-e+h*-s-u*-n,h*r+f*-n+u*-e-c*-s,u*r+f*-s+c*-n-h*-e]}var qc=i=>ko(0,1,0,-i),od=i=>ko(1,0,0,i);var Fc="assets/studio/",zo=640,Ho=360,_n=3,hr=2,S2=`
varying vec3 vDir;
void main(){
  vDir = position;
  gl_Position = projectionMatrix * vec4(mat3(viewMatrix) * position * 20.0, 1.0);
}`,w2=`
precision highp float;
uniform samplerCube tBase, tA, tB, tC;
uniform vec3 cBase, cNeon, cBeam, cWallA, cWallB, cDot;
uniform vec3 cScr[5];
uniform float uWallOn, uHot;
varying vec3 vDir;
vec3 dec(vec3 t){ return pow(t, vec3(2.2)); }
float hot(float t){ return 1.0 + uHot * smoothstep(0.82, 1.0, t); }    // lamps were clipped at white when stored: give them back their punch
void main(){
  vec3 d = normalize(vDir);
  float az = atan(d.x, -d.z);
  vec3 base = textureCube(tBase, d).rgb;
  vec3 a = textureCube(tA, d).rgb;
  vec3 b = textureCube(tB, d).rgb;
  vec3 c = textureCube(tC, d).rgb;
  vec3 col = base * cBase * hot(max(base.r, max(base.g, base.b)));
  col += dec(vec3(a.r)) * cNeon * hot(a.r);
  col += dec(vec3(a.g)) * cBeam * hot(a.g);
  // the wash comes up from the middle of the cyclorama outward, in two colours left and right
  float lit = 1.0 - smoothstep(uWallOn * 2.0 - 0.35, uWallOn * 2.0, abs(az));
  col += dec(vec3(a.b)) * mix(cWallA, cWallB, smoothstep(-1.1, 1.1, az)) * lit;
  col += dec(vec3(b.r)) * cDot;
  col += dec(vec3(b.g)) * cScr[0] + dec(vec3(b.b)) * cScr[1];
  col += dec(vec3(c.r)) * cScr[2] + dec(vec3(c.g)) * cScr[3] + dec(vec3(c.b)) * cScr[4];
  gl_FragColor = vec4(col, 1.0);
}`,E2=`
varying vec2 vUv;
void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,T2=`
precision highp float;
uniform sampler2D tVideo, tNext, tOver, tMatte;
uniform vec4 uRect, uRectNext;          // this screen's tile inside the atlas video: x, y, w, h
uniform vec4 uOverRect, uMatteRect;
uniform float uOn, uFocus, uGain, uTime, uSwap, uSeed, uHasVideo, uHasNext, uAspect, uDim;
varying vec2 vUv;
float h21(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
vec3 dec(vec3 t){ return pow(t, vec3(2.2)); }
void main(){
  vec2 uv = vUv;
  // switching category: the picture tears sideways in bands and the new one cuts in
  float band = floor(uv.y * 14.0);
  float tear = (h21(vec2(band, floor(uTime * 24.0) + uSeed)) - 0.5) * 0.35 * sin(uSwap * 3.14159);
  vec2 tuv = vec2(fract(uv.x + tear), uv.y);
  float cut = step(h21(vec2(band * 3.1, uSeed)), uSwap);
  vec3 vOld = dec(texture2D(tVideo, uRect.xy + tuv * uRect.zw).rgb) * uHasVideo;
  vec3 vNew = dec(texture2D(tNext, uRectNext.xy + tuv * uRectNext.zw).rgb) * uHasNext;
  vec3 v = mix(vOld, vNew, cut);
  // powering on: a bright line opens into the picture, with a little snow
  float open = smoothstep(0.0, 0.55, uOn);
  float line = smoothstep(open * 0.5 + 0.004, open * 0.5, abs(uv.y - 0.5));
  float snow = h21(uv * vec2(640.0, 360.0) + fract(uTime) * 91.0);
  v = mix(vec3(snow * 0.5), v, smoothstep(0.45, 1.0, uOn)) * line;
  v += vec3(0.9) * (1.0 - smoothstep(0.0, 0.25, uOn)) * smoothstep(0.012, 0.0, abs(uv.y - 0.5)) * step(0.001, uOn);
  // the lower third: number, title and badges
  vec4 ov = texture2D(tOver, uOverRect.xy + uv * uOverRect.zw);
  v = v * (1.0 - ov.a) + dec(ov.rgb / max(ov.a, 1e-4)) * ov.a * 0.9;
  v *= mix(uDim, 1.0, uFocus);
  // a red frame when you are looking at it
  vec2 e2 = min(uv, 1.0 - uv) * vec2(uAspect, 1.0);
  float e = min(e2.x, e2.y);
  v += vec3(1.0, 0.07, 0.17) * smoothstep(0.014, 0.006, e) * uFocus * 2.2;
  // a faint LED scan texture so it reads as a wall of light, not a flat picture
  v *= 0.96 + 0.04 * sin(uv.y * 360.0 * 3.14159);
  float m = texture2D(tMatte, uMatteRect.xy + uv * uMatteRect.zw).r;
  float lit = m * step(0.001, uOn);
  gl_FragColor = vec4(v * uGain * lit, 0.7 * lit * smoothstep(0.3, 1.0, uOn));
}`,ur={musician:{wallA:[.95,.08,.62],wallB:[.22,.12,1],beam:[.75,.82,1]},athlete:{wallA:[.05,.42,1],wallB:[0,.85,.9],beam:[1,.98,.95]},character:{wallA:[1,.36,.06],wallB:[.85,.1,.16],beam:[1,.8,.58]},yours:{wallA:[.55,.55,.6],wallB:[.3,.34,.45],beam:[1,.95,.9]}},Ms={base:.34,neon:.46,dot:1.3,beam:.065,wall:.056,scr:.5};function Vo(i,t,e){return new Promise((n,s)=>{let r=new Ao().load(t.map(o=>`${Fc}${i}_${o}.jpg`),()=>n(r),void 0,s);r.colorSpace=e?Ie:Ve,r.generateMipmaps=!!e,r.minFilter=e?zn:ge,r.magFilter=ge})}function C2(i){return new Promise((t,e)=>{let n=new Ro().load(i,()=>t(n),void 0,e)})}var Go=class{constructor(){this.scene=new En,this.ready=!1,this.screens=[],this.on={base:0,neon:0,dot:0,beam:0,wall:0,scr:[0,0,0,0,0],wallSweep:0},this.mood={wallA:new zt(...ur.musician.wallA),wallB:new zt(...ur.musician.wallB),beam:new zt(...ur.musician.beam)},this.moodTo={wallA:this.mood.wallA.clone(),wallB:this.mood.wallB.clone(),beam:this.mood.beam.clone()},this.screenColor=[0,1,2,3,4].map(()=>new zt(.2,.2,.22)),this.focus=-1,this.focusAmt=[0,0,0,0,0],this.dim=1,this.seq=null,this.swap=1,this.video=null,this.nextVideo=null,this.flicker=1,this.time=0,this._probe=document.createElement("canvas"),this._probe.width=_n*8,this._probe.height=hr*6,this._pctx=this._probe.getContext("2d",{willReadFrequently:!0}),this._probeT=0,this.overlay=document.createElement("canvas"),this.overlay.width=_n*zo,this.overlay.height=hr*Ho,this.octx=this.overlay.getContext("2d")}async load(t){let e=this.info=await(await fetch(Fc+"studio.json")).json(),n=e.faces,s=0,r=E=>E.then(_=>(s++,t&&t(s/5),_)),[o,a,l,c,h]=await Promise.all([r(Vo("base",n,!0)),r(Vo("a",n)),r(Vo("b",n)),r(Vo("c",n)),r(e.matte?C2(Fc+"mattes.jpg"):Promise.resolve(null))]);this.env=o;let u=e.gain;this.gain=u;let f=e.tint&&e.tint.neon?e.tint.neon:[1,.035,.07];this.neonTint=new zt(...f);let m=this.skyU={tBase:{value:o},tA:{value:a},tB:{value:l},tC:{value:c},cBase:{value:new k},cNeon:{value:new k},cBeam:{value:new k},cWallA:{value:new k},cWallB:{value:new k},cDot:{value:new k},cScr:{value:[0,1,2,3,4].map(()=>new k)},uWallOn:{value:0},uHot:{value:1.6}},g=new $t(new mn(2,2,2),new Me({vertexShader:S2,fragmentShader:w2,uniforms:m,side:ye,depthTest:!1,depthWrite:!1}));g.frustumCulled=!1,g.renderOrder=-10,this.scene.add(g);let x=new Ri(new Uint8Array([255,255,255,255]),1,1);x.needsUpdate=!0;let p=new Ri(new Uint8Array([0,0,0,255]),1,1);p.needsUpdate=!0,this.black=p,this.overTex=new yo(this.overlay),this.overTex.colorSpace=Ve,this.overTex.premultiplyAlpha=!0,h&&(h.colorSpace=Ve,h.generateMipmaps=!0),e.layout.screens.forEach((E,_)=>{let v=new k(...E.center),N=new k(...E.right),P=new k(...E.up),q=new k().crossVectors(N,P).normalize(),I=_%_n,T=Math.floor(_/_n),y=new ie(I/_n,1-(T+1)/hr,1/_n,1/hr),B=new Me({vertexShader:E2,fragmentShader:T2,depthTest:!1,depthWrite:!1,transparent:!0,blending:Sc,blendEquation:kn,blendSrc:wc,blendDst:$s,uniforms:{tVideo:{value:p},tNext:{value:p},tOver:{value:this.overTex},tMatte:{value:h||x},uRect:{value:y.clone()},uRectNext:{value:y.clone()},uOverRect:{value:y.clone()},uMatteRect:{value:h?y.clone():new ie(0,0,1,1)},uOn:{value:0},uFocus:{value:0},uGain:{value:1.5},uTime:{value:0},uSwap:{value:0},uSeed:{value:_*7.13},uHasVideo:{value:0},uHasNext:{value:0},uAspect:{value:E.width/E.height},uDim:{value:.62}}}),X=new $t(new hi(E.width,E.height),B);X.position.copy(v).addScaledVector(q,.01),X.quaternion.setFromRotationMatrix(new ae().makeBasis(N,P,q)),X.frustumCulled=!1,X.renderOrder=5,this.scene.add(X),this.screens.push({mesh:X,mat:B,c:v,right:N,up:P,n:q,hw:E.width/2,hh:E.height/2,dir:v.clone().normalize()})});let d=e.layout.emblem;if(d){this.dotMat=new wn({color:0,depthTest:!1,depthWrite:!1});let E=new $t(new ms(d.dot*.96,32,16),this.dotMat);E.position.set(...d.center),E.renderOrder=2,this.scene.add(E)}this._dust(),this.ready=!0}_dust(){let e=new Float32Array(780),n=new Float32Array(260);for(let a=0;a<260;a++){let l=(Math.random()-.5)*Math.PI*1.5,c=1.2+Math.random()*4.2;e[a*3]=Math.sin(l)*c,e[a*3+1]=-1.2+Math.random()*3.4,e[a*3+2]=-Math.cos(l)*c,n[a]=Math.random()}let s=new Se;s.setAttribute("position",new Ae(e,3)),s.setAttribute("aSeed",new Ae(n,1)),this.dustU={uTime:{value:0},uLevel:{value:0},uScale:{value:1}};let r=new Me({uniforms:this.dustU,depthTest:!1,depthWrite:!1,transparent:!0,blending:li,vertexShader:`
        attribute float aSeed; uniform float uTime, uScale; varying float vA;
        void main(){
          vec3 p = position;
          p.x += sin(uTime * 0.11 + aSeed * 40.0) * 0.25;
          p.y += sin(uTime * 0.07 + aSeed * 71.0) * 0.2 + mod(uTime * 0.012 * (0.5 + aSeed), 0.6);
          p.z += cos(uTime * 0.09 + aSeed * 23.0) * 0.25;
          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          gl_Position = projectionMatrix * mv;
          gl_PointSize = max(1.0, uScale * (0.8 + aSeed * 1.6) / max(-mv.z, 0.5));
          vA = (0.3 + 0.7 * sin(uTime * 0.6 + aSeed * 90.0)) * smoothstep(0.7, 2.0, -mv.z);
        }`,fragmentShader:`
        precision highp float; uniform float uLevel; varying float vA;
        void main(){ float d = length(gl_PointCoord - 0.5); gl_FragColor = vec4(vec3(1.0, 0.95, 0.88) * smoothstep(0.5, 0.0, d) * vA * uLevel, 1.0); }`}),o=new vo(s,r);o.frustumCulled=!1,o.renderOrder=8,this.scene.add(o)}setMood(t,e){let n=ur[t]||ur.yours;this.moodTo.wallA.setRGB(...n.wallA),this.moodTo.wallB.setRGB(...n.wallB),this.moodTo.beam.setRGB(...n.beam),e&&(this.mood.wallA.copy(this.moodTo.wallA),this.mood.wallB.copy(this.moodTo.wallB),this.mood.beam.copy(this.moodTo.beam))}dark(){Object.assign(this.on,{base:0,neon:0,dot:0,beam:0,wall:0,wallSweep:0}),this.on.scr=[0,0,0,0,0],this.seq=null}powerOn(t){this.seq={t:t?6:0},t&&this._runSeq(0)}get poweredOn(){return!this.seq}_runSeq(t){let e=this.seq;e.t+=t;let n=e.t,s=(a,l)=>Te((n-a)/(l-a),0,1),r=(a,l)=>{let c=s(a,l);return c>=1?1:c<=0?0:Math.sin(c*37)>-.2?c:c*.25};this.on.base=s(.15,1.6)**2,this.on.neon=r(.7,1.5),this.on.dot=s(1.35,1.75),this.on.wallSweep=s(1.2,2.9),this.on.wall=s(1.2,1.9),this.on.beam=r(1.9,2.6),[2,1,3,0,4].forEach((a,l)=>{this.on.scr[a]=s(2.3+l*.22,3.1+l*.22)}),n>4.3&&(this.seq=null,this.on.wallSweep=1)}setVideo(t,e){let n=t?this._videoTex(t):null;if(e&&this.video){this.nextVideo=t,this.nextTex=n,this.swap=0;for(let s of this.screens)s.mat.uniforms.tNext.value=n||this.black,s.mat.uniforms.uHasNext.value=n?1:0}else this._adopt(t,n),this.swap=1}_videoTex(t){if(t._tex)return t._tex;let e=new ps(t);return e.colorSpace=Ve,e.minFilter=ge,e.magFilter=ge,e.generateMipmaps=!1,t._tex=e,e}_adopt(t,e){this.video=t,this.videoTex=e;for(let n of this.screens)n.mat.uniforms.tVideo.value=e||this.black,n.mat.uniforms.uHasVideo.value=e?1:0,n.mat.uniforms.tNext.value=this.black,n.mat.uniforms.uHasNext.value=0,n.mat.uniforms.uSwap.value=0;this.nextVideo=null,this.nextTex=null}paintOverlay(t){let e=this.octx;e.clearRect(0,0,this.overlay.width,this.overlay.height);for(let n=0;n<5;n++)e.save(),e.translate(n%_n*zo,Math.floor(n/_n)*Ho),e.beginPath(),e.rect(0,0,zo,Ho),e.clip(),t(e,n,zo,Ho),e.restore();this.overTex&&(this.overTex.needsUpdate=!0)}pick(t){let e=-1,n=1/0;for(let s=0;s<this.screens.length;s++){let r=this.screens[s],o=t.dot(r.n);if(o>=-.02)continue;let a=r.c.dot(r.n)/o;if(a<=0||a>n)continue;let l=t.clone().multiplyScalar(a).sub(r.c);Math.abs(l.dot(r.right))<=r.hw*1.04&&Math.abs(l.dot(r.up))<=r.hh*1.06&&(n=a,e=s)}return e}heading(t){let e=this.screens[t].c;return Math.atan2(e.x,-e.z)}elevation(t){let e=this.screens[t].c;return Math.asin(e.y/e.length())}update(t,e,n){if(!this.ready)return;this.time+=t,this.seq&&this._runSeq(t);let s=-1,r=Math.cos(17*Math.PI/180);if(this.poweredOn&&e)for(let x=0;x<this.screens.length;x++){if(n&&!n[x])continue;let p=e.dot(this.screens[x].dir);p>r&&(r=p,s=x)}this.focus=s,this.swap<1&&(this.swap=Math.min(1,this.swap+t/.55),this.swap>=1&&this._adopt(this.nextVideo,this.nextTex));let o=1-Math.exp(-t*2.2);this.mood.wallA.lerp(this.moodTo.wallA,o),this.mood.wallB.lerp(this.moodTo.wallB,o),this.mood.beam.lerp(this.moodTo.beam,o);let a=.985+.015*Math.sin(this.time*47)*Math.sin(this.time*13.3);this.flicker+=(a-this.flicker)*.5,this._probeScreens(t);let l=this.gain,c=this.on,h=this.skyU,u=this.dim;h.cBase.value.setScalar(l.base*Ms.base*c.base*(.35+.65*u));let f=l.neon*Ms.neon*c.neon*this.flicker*(.5+.5*u);h.cNeon.value.set(this.neonTint.r*f,this.neonTint.g*f,this.neonTint.b*f);let m=l.beam*Ms.beam*c.beam*u;h.cBeam.value.set(this.mood.beam.r*m,this.mood.beam.g*m,this.mood.beam.b*m);let g=l.wall*Ms.wall*c.wall*(.25+.75*u);h.cWallA.value.set(this.mood.wallA.r*g,this.mood.wallA.g*g,this.mood.wallA.b*g),h.cWallB.value.set(this.mood.wallB.r*g,this.mood.wallB.g*g,this.mood.wallB.b*g),h.cDot.value.setScalar(l.dot*Ms.dot*c.dot),this.dotMat&&this.dotMat.color.setScalar(5.5*c.dot*this.flicker*(.45+.55*u)),h.uWallOn.value=c.wallSweep*1.9;for(let x=0;x<5;x++){let p=this.screens[x],d=p.mat.uniforms,E=!n||!!n[x],_=x===this.focus?1:0;this.focusAmt[x]+=(_-this.focusAmt[x])*Math.min(1,t*10);let v=c.scr[x]*(E?1:0);d.uOn.value=v,d.uFocus.value=this.focusAmt[x],d.uTime.value=this.time,d.uSwap.value=this.swap<1?this.swap:0,d.uDim.value=.62*u+0;let N=this.screenColor[x],P=l["scr"+(x+1)]*Ms.scr*A2(v)*(.62+.38*this.focusAmt[x])*(.3+.7*u);h.cScr.value[x].set(N.r*P,N.g*P,N.b*P)}this.dustU.uTime.value=this.time,this.dustU.uLevel.value=.22*c.beam*u+.05*c.base}setPixelScale(t){this.dustU&&(this.dustU.uScale.value=t*.0032)}_probeScreens(t){if(this._probeT-=t,this._probeT>0)return;this._probeT=.12;let e=this.swap<1&&this.nextVideo?this.nextVideo:this.video,n=[],s=!1;if(e&&e.readyState>=2&&e.videoWidth)try{let r=this._probe.width,o=this._probe.height;this._pctx.drawImage(e,0,0,r,o);let a=this._pctx.getImageData(0,0,r,o).data,l=r/_n,c=o/hr;for(let h=0;h<5;h++){let u=0,f=0,m=0,g=h%_n*l,x=Math.floor(h/_n)*c;for(let d=0;d<c;d++)for(let E=0;E<l;E++){let _=((x+d)*r+g+E)*4;u+=(a[_]/255)**2.2,f+=(a[_+1]/255)**2.2,m+=(a[_+2]/255)**2.2}let p=l*c;n.push([u/p,f/p,m/p])}s=!0}catch{s=!1}for(let r=0;r<5;r++){let o=s?n[r]:[.16,.16,.18],a=this.screenColor[r];a.r+=(Math.min(1.2,o[0]*1.6+.02)-a.r)*.35,a.g+=(Math.min(1.2,o[1]*1.6+.02)-a.g)*.35,a.b+=(Math.min(1.2,o[2]*1.6+.02)-a.b)*.35}}};function A2(i){return i*i*(3-2*i)}var R2=Ie,dr=class i extends xn{constructor(t){super(t),this.defaultDPI=90,this.defaultUnit="px"}load(t,e,n,s){let r=this,o=new xs(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(t,function(a){try{e(r.parse(a))}catch(l){s?s(l):console.error(l),r.manager.itemError(t)}},n,s)}parse(t){let e=this;function n(U,D){if(U.nodeType!==1)return;let R=v(U),w=!1,tt=null;switch(U.nodeName){case"svg":D=g(U,D);break;case"style":r(U);break;case"g":D=g(U,D);break;case"path":D=g(U,D),U.hasAttribute("d")&&(tt=s(U));break;case"rect":D=g(U,D),tt=l(U);break;case"polygon":D=g(U,D),tt=c(U);break;case"polyline":D=g(U,D),tt=h(U);break;case"circle":D=g(U,D),tt=u(U);break;case"ellipse":D=g(U,D),tt=f(U);break;case"line":D=g(U,D),tt=m(U);break;case"defs":w=!0;break;case"use":D=g(U,D);let J=(U.getAttributeNS("http://www.w3.org/1999/xlink","href")||"").substring(1),z=U.viewportElement.getElementById(J);z?n(z,D):console.warn("SVGLoader: 'use node' references non-existent node id: "+J);break;default:}tt&&(D.fill!==void 0&&D.fill!=="none"&&tt.color.setStyle(D.fill,R2),P(tt,bt),X.push(tt),tt.userData={node:U,style:D});let ut=U.childNodes;for(let S=0;S<ut.length;S++){let J=ut[S];w&&J.nodeName!=="style"&&J.nodeName!=="defs"||n(J,D)}R&&(et.pop(),et.length>0?bt.copy(et[et.length-1]):bt.identity())}function s(U){let D=new rn,R=new pt,w=new pt,tt=new pt,ut=!0,S=!1,J=U.getAttribute("d");if(J===""||J==="none")return null;let z=J.match(/[a-df-z][^a-df-z]*/ig);for(let G=0,b=z.length;G<b;G++){let Z=z[G],Q=Z.charAt(0),lt=Z.slice(1).trim();ut===!0&&(S=!0,ut=!1);let F;switch(Q){case"M":F=p(lt);for(let L=0,ht=F.length;L<ht;L+=2)R.x=F[L+0],R.y=F[L+1],w.x=R.x,w.y=R.y,L===0?D.moveTo(R.x,R.y):D.lineTo(R.x,R.y),L===0&&tt.copy(R);break;case"H":F=p(lt);for(let L=0,ht=F.length;L<ht;L++)R.x=F[L],w.x=R.x,w.y=R.y,D.lineTo(R.x,R.y),L===0&&S===!0&&tt.copy(R);break;case"V":F=p(lt);for(let L=0,ht=F.length;L<ht;L++)R.y=F[L],w.x=R.x,w.y=R.y,D.lineTo(R.x,R.y),L===0&&S===!0&&tt.copy(R);break;case"L":F=p(lt);for(let L=0,ht=F.length;L<ht;L+=2)R.x=F[L+0],R.y=F[L+1],w.x=R.x,w.y=R.y,D.lineTo(R.x,R.y),L===0&&S===!0&&tt.copy(R);break;case"C":F=p(lt);for(let L=0,ht=F.length;L<ht;L+=6)D.bezierCurveTo(F[L+0],F[L+1],F[L+2],F[L+3],F[L+4],F[L+5]),w.x=F[L+2],w.y=F[L+3],R.x=F[L+4],R.y=F[L+5],L===0&&S===!0&&tt.copy(R);break;case"S":F=p(lt);for(let L=0,ht=F.length;L<ht;L+=4)D.bezierCurveTo(x(R.x,w.x),x(R.y,w.y),F[L+0],F[L+1],F[L+2],F[L+3]),w.x=F[L+0],w.y=F[L+1],R.x=F[L+2],R.y=F[L+3],L===0&&S===!0&&tt.copy(R);break;case"Q":F=p(lt);for(let L=0,ht=F.length;L<ht;L+=4)D.quadraticCurveTo(F[L+0],F[L+1],F[L+2],F[L+3]),w.x=F[L+0],w.y=F[L+1],R.x=F[L+2],R.y=F[L+3],L===0&&S===!0&&tt.copy(R);break;case"T":F=p(lt);for(let L=0,ht=F.length;L<ht;L+=2){let A=x(R.x,w.x),M=x(R.y,w.y);D.quadraticCurveTo(A,M,F[L+0],F[L+1]),w.x=A,w.y=M,R.x=F[L+0],R.y=F[L+1],L===0&&S===!0&&tt.copy(R)}break;case"A":F=p(lt,[3,4],7);for(let L=0,ht=F.length;L<ht;L+=7){if(F[L+5]==R.x&&F[L+6]==R.y)continue;let A=R.clone();R.x=F[L+5],R.y=F[L+6],w.x=R.x,w.y=R.y,o(D,F[L],F[L+1],F[L+2],F[L+3],F[L+4],A,R),L===0&&S===!0&&tt.copy(R)}break;case"m":F=p(lt);for(let L=0,ht=F.length;L<ht;L+=2)R.x+=F[L+0],R.y+=F[L+1],w.x=R.x,w.y=R.y,L===0?D.moveTo(R.x,R.y):D.lineTo(R.x,R.y),L===0&&tt.copy(R);break;case"h":F=p(lt);for(let L=0,ht=F.length;L<ht;L++)R.x+=F[L],w.x=R.x,w.y=R.y,D.lineTo(R.x,R.y),L===0&&S===!0&&tt.copy(R);break;case"v":F=p(lt);for(let L=0,ht=F.length;L<ht;L++)R.y+=F[L],w.x=R.x,w.y=R.y,D.lineTo(R.x,R.y),L===0&&S===!0&&tt.copy(R);break;case"l":F=p(lt);for(let L=0,ht=F.length;L<ht;L+=2)R.x+=F[L+0],R.y+=F[L+1],w.x=R.x,w.y=R.y,D.lineTo(R.x,R.y),L===0&&S===!0&&tt.copy(R);break;case"c":F=p(lt);for(let L=0,ht=F.length;L<ht;L+=6)D.bezierCurveTo(R.x+F[L+0],R.y+F[L+1],R.x+F[L+2],R.y+F[L+3],R.x+F[L+4],R.y+F[L+5]),w.x=R.x+F[L+2],w.y=R.y+F[L+3],R.x+=F[L+4],R.y+=F[L+5],L===0&&S===!0&&tt.copy(R);break;case"s":F=p(lt);for(let L=0,ht=F.length;L<ht;L+=4)D.bezierCurveTo(x(R.x,w.x),x(R.y,w.y),R.x+F[L+0],R.y+F[L+1],R.x+F[L+2],R.y+F[L+3]),w.x=R.x+F[L+0],w.y=R.y+F[L+1],R.x+=F[L+2],R.y+=F[L+3],L===0&&S===!0&&tt.copy(R);break;case"q":F=p(lt);for(let L=0,ht=F.length;L<ht;L+=4)D.quadraticCurveTo(R.x+F[L+0],R.y+F[L+1],R.x+F[L+2],R.y+F[L+3]),w.x=R.x+F[L+0],w.y=R.y+F[L+1],R.x+=F[L+2],R.y+=F[L+3],L===0&&S===!0&&tt.copy(R);break;case"t":F=p(lt);for(let L=0,ht=F.length;L<ht;L+=2){let A=x(R.x,w.x),M=x(R.y,w.y);D.quadraticCurveTo(A,M,R.x+F[L+0],R.y+F[L+1]),w.x=A,w.y=M,R.x=R.x+F[L+0],R.y=R.y+F[L+1],L===0&&S===!0&&tt.copy(R)}break;case"a":F=p(lt,[3,4],7);for(let L=0,ht=F.length;L<ht;L+=7){if(F[L+5]==0&&F[L+6]==0)continue;let A=R.clone();R.x+=F[L+5],R.y+=F[L+6],w.x=R.x,w.y=R.y,o(D,F[L],F[L+1],F[L+2],F[L+3],F[L+4],A,R),L===0&&S===!0&&tt.copy(R)}break;case"Z":case"z":D.currentPath.autoClose=!0,D.currentPath.curves.length>0&&(R.copy(tt),D.currentPath.currentPoint.copy(R),ut=!0);break;default:console.warn(Z)}S=!1}return D}function r(U){if(!(!U.sheet||!U.sheet.cssRules||!U.sheet.cssRules.length))for(let D=0;D<U.sheet.cssRules.length;D++){let R=U.sheet.cssRules[D];if(R.type!==1)continue;let w=R.selectorText.split(/,/gm).filter(Boolean).map(tt=>tt.trim());for(let tt=0;tt<w.length;tt++){let ut=Object.fromEntries(Object.entries(R.style).filter(([,S])=>S!==""));j[w[tt]]=Object.assign(j[w[tt]]||{},ut)}}}function o(U,D,R,w,tt,ut,S,J){if(D==0||R==0){U.lineTo(J.x,J.y);return}w=w*Math.PI/180,D=Math.abs(D),R=Math.abs(R);let z=(S.x-J.x)/2,G=(S.y-J.y)/2,b=Math.cos(w)*z+Math.sin(w)*G,Z=-Math.sin(w)*z+Math.cos(w)*G,Q=D*D,lt=R*R,F=b*b,L=Z*Z,ht=F/Q+L/lt;if(ht>1){let Gt=Math.sqrt(ht);D=Gt*D,R=Gt*R,Q=D*D,lt=R*R}let A=Q*L+lt*F,M=(Q*lt-A)/A,K=Math.sqrt(Math.max(0,M));tt===ut&&(K=-K);let at=K*D*Z/R,ft=-K*R*b/D,dt=Math.cos(w)*at-Math.sin(w)*ft+(S.x+J.x)/2,Pt=Math.sin(w)*at+Math.cos(w)*ft+(S.y+J.y)/2,Mt=a(1,0,(b-at)/D,(Z-ft)/R),Et=a((b-at)/D,(Z-ft)/R,(-b-at)/D,(-Z-ft)/R)%(Math.PI*2);U.currentPath.absellipse(dt,Pt,D,R,Mt,Mt+Et,ut===0,w)}function a(U,D,R,w){let tt=U*R+D*w,ut=Math.sqrt(U*U+D*D)*Math.sqrt(R*R+w*w),S=Math.acos(Math.max(-1,Math.min(1,tt/ut)));return U*w-D*R<0&&(S=-S),S}function l(U){let D=_(U.getAttribute("x")||0),R=_(U.getAttribute("y")||0),w=_(U.getAttribute("rx")||U.getAttribute("ry")||0),tt=_(U.getAttribute("ry")||U.getAttribute("rx")||0),ut=_(U.getAttribute("width")),S=_(U.getAttribute("height")),J=1-.551915024494,z=new rn;return z.moveTo(D+w,R),z.lineTo(D+ut-w,R),(w!==0||tt!==0)&&z.bezierCurveTo(D+ut-w*J,R,D+ut,R+tt*J,D+ut,R+tt),z.lineTo(D+ut,R+S-tt),(w!==0||tt!==0)&&z.bezierCurveTo(D+ut,R+S-tt*J,D+ut-w*J,R+S,D+ut-w,R+S),z.lineTo(D+w,R+S),(w!==0||tt!==0)&&z.bezierCurveTo(D+w*J,R+S,D,R+S-tt*J,D,R+S-tt),z.lineTo(D,R+tt),(w!==0||tt!==0)&&z.bezierCurveTo(D,R+tt*J,D+w*J,R,D+w,R),z}function c(U){function D(ut,S,J){let z=_(S),G=_(J);tt===0?w.moveTo(z,G):w.lineTo(z,G),tt++}let R=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,w=new rn,tt=0;return U.getAttribute("points").replace(R,D),w.currentPath.autoClose=!0,w}function h(U){function D(ut,S,J){let z=_(S),G=_(J);tt===0?w.moveTo(z,G):w.lineTo(z,G),tt++}let R=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,w=new rn,tt=0;return U.getAttribute("points").replace(R,D),w.currentPath.autoClose=!1,w}function u(U){let D=_(U.getAttribute("cx")||0),R=_(U.getAttribute("cy")||0),w=_(U.getAttribute("r")||0),tt=new Xn;tt.absarc(D,R,w,0,Math.PI*2);let ut=new rn;return ut.subPaths.push(tt),ut}function f(U){let D=_(U.getAttribute("cx")||0),R=_(U.getAttribute("cy")||0),w=_(U.getAttribute("rx")||0),tt=_(U.getAttribute("ry")||0),ut=new Xn;ut.absellipse(D,R,w,tt,0,Math.PI*2);let S=new rn;return S.subPaths.push(ut),S}function m(U){let D=_(U.getAttribute("x1")||0),R=_(U.getAttribute("y1")||0),w=_(U.getAttribute("x2")||0),tt=_(U.getAttribute("y2")||0),ut=new rn;return ut.moveTo(D,R),ut.lineTo(w,tt),ut.currentPath.autoClose=!1,ut}function g(U,D){D=Object.assign({},D);let R={};if(U.hasAttribute("class")){let S=U.getAttribute("class").split(/\s/).filter(Boolean).map(J=>J.trim());for(let J=0;J<S.length;J++)R=Object.assign(R,j["."+S[J]])}U.hasAttribute("id")&&(R=Object.assign(R,j["#"+U.getAttribute("id")]));function w(S,J,z){z===void 0&&(z=function(b){return b.startsWith("url")&&console.warn("SVGLoader: url access in attributes is not implemented."),b}),U.hasAttribute(S)&&(D[J]=z(U.getAttribute(S))),R[S]&&(D[J]=z(R[S])),U.style&&U.style[S]!==""&&(D[J]=z(U.style[S]))}function tt(S){return Math.max(0,Math.min(1,_(S)))}function ut(S){return Math.max(0,_(S))}return w("fill","fill"),w("fill-opacity","fillOpacity",tt),w("fill-rule","fillRule"),w("opacity","opacity",tt),w("stroke","stroke"),w("stroke-opacity","strokeOpacity",tt),w("stroke-width","strokeWidth",ut),w("stroke-linejoin","strokeLineJoin"),w("stroke-linecap","strokeLineCap"),w("stroke-miterlimit","strokeMiterLimit",ut),w("visibility","visibility"),D}function x(U,D){return U-(D-U)}function p(U,D,R){if(typeof U!="string")throw new TypeError("Invalid input: "+typeof U);let w={SEPARATOR:/[ \t\r\n\,.\-+]/,WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/},tt=0,ut=1,S=2,J=3,z=tt,G=!0,b="",Z="",Q=[];function lt(A,M,K){let at=new SyntaxError('Unexpected character "'+A+'" at index '+M+".");throw at.partial=K,at}function F(){b!==""&&(Z===""?Q.push(Number(b)):Q.push(Number(b)*Math.pow(10,Number(Z)))),b="",Z=""}let L,ht=U.length;for(let A=0;A<ht;A++){if(L=U[A],Array.isArray(D)&&D.includes(Q.length%R)&&w.FLAGS.test(L)){z=ut,b=L,F();continue}if(z===tt){if(w.WHITESPACE.test(L))continue;if(w.DIGIT.test(L)||w.SIGN.test(L)){z=ut,b=L;continue}if(w.POINT.test(L)){z=S,b=L;continue}w.COMMA.test(L)&&(G&&lt(L,A,Q),G=!0)}if(z===ut){if(w.DIGIT.test(L)){b+=L;continue}if(w.POINT.test(L)){b+=L,z=S;continue}if(w.EXP.test(L)){z=J;continue}w.SIGN.test(L)&&b.length===1&&w.SIGN.test(b[0])&&lt(L,A,Q)}if(z===S){if(w.DIGIT.test(L)){b+=L;continue}if(w.EXP.test(L)){z=J;continue}w.POINT.test(L)&&b[b.length-1]==="."&&lt(L,A,Q)}if(z===J){if(w.DIGIT.test(L)){Z+=L;continue}if(w.SIGN.test(L)){if(Z===""){Z+=L;continue}Z.length===1&&w.SIGN.test(Z)&&lt(L,A,Q)}}w.WHITESPACE.test(L)?(F(),z=tt,G=!1):w.COMMA.test(L)?(F(),z=tt,G=!0):w.SIGN.test(L)?(F(),z=ut,b=L):w.POINT.test(L)?(F(),z=S,b=L):lt(L,A,Q)}return F(),Q}let d=["mm","cm","in","pt","pc","px"],E={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:72/6,pc:1,px:-1},px:{px:1}};function _(U){let D="px";if(typeof U=="string"||U instanceof String)for(let w=0,tt=d.length;w<tt;w++){let ut=d[w];if(U.endsWith(ut)){D=ut,U=U.substring(0,U.length-ut.length);break}}let R;return D==="px"&&e.defaultUnit!=="px"?R=E.in[e.defaultUnit]/e.defaultDPI:(R=E[D][e.defaultUnit],R<0&&(R=E[D].in*e.defaultDPI)),R*parseFloat(U)}function v(U){if(!(U.hasAttribute("transform")||U.nodeName==="use"&&(U.hasAttribute("x")||U.hasAttribute("y"))))return null;let D=N(U);return et.length>0&&D.premultiply(et[et.length-1]),bt.copy(D),et.push(D),D}function N(U){let D=new Bt,R=nt;if(U.nodeName==="use"&&(U.hasAttribute("x")||U.hasAttribute("y"))){let w=_(U.getAttribute("x")),tt=_(U.getAttribute("y"));D.translate(w,tt)}if(U.hasAttribute("transform")){let w=U.getAttribute("transform").split(")");for(let tt=w.length-1;tt>=0;tt--){let ut=w[tt].trim();if(ut==="")continue;let S=ut.indexOf("("),J=ut.length;if(S>0&&S<J){let z=ut.slice(0,S),G=p(ut.slice(S+1));switch(R.identity(),z){case"translate":if(G.length>=1){let b=G[0],Z=0;G.length>=2&&(Z=G[1]),R.translate(b,Z)}break;case"rotate":if(G.length>=1){let b=0,Z=0,Q=0;b=G[0]*Math.PI/180,G.length>=3&&(Z=G[1],Q=G[2]),it.makeTranslation(-Z,-Q),ot.makeRotation(b),H.multiplyMatrices(ot,it),it.makeTranslation(Z,Q),R.multiplyMatrices(it,H)}break;case"scale":if(G.length>=1){let b=G[0],Z=b;G.length>=2&&(Z=G[1]),R.scale(b,Z)}break;case"skewX":G.length===1&&R.set(1,Math.tan(G[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":G.length===1&&R.set(1,0,0,Math.tan(G[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":G.length===6&&R.set(G[0],G[2],G[4],G[1],G[3],G[5],0,0,1);break}}D.premultiply(R)}}return D}function P(U,D){function R(S){xt.set(S.x,S.y,1).applyMatrix3(D),S.set(xt.x,xt.y)}function w(S){let J=S.xRadius,z=S.yRadius,G=Math.cos(S.aRotation),b=Math.sin(S.aRotation),Z=new k(J*G,J*b,0),Q=new k(-z*b,z*G,0),lt=Z.applyMatrix3(D),F=Q.applyMatrix3(D),L=nt.set(lt.x,F.x,0,lt.y,F.y,0,0,0,1),ht=it.copy(L).invert(),K=ot.copy(ht).transpose().multiply(ht).elements,at=B(K[0],K[1],K[4]),ft=Math.sqrt(at.rt1),dt=Math.sqrt(at.rt2);if(S.xRadius=1/ft,S.yRadius=1/dt,S.aRotation=Math.atan2(at.sn,at.cs),!((S.aEndAngle-S.aStartAngle)%(2*Math.PI)<Number.EPSILON)){let Mt=it.set(ft,0,0,0,dt,0,0,0,1),Et=ot.set(at.cs,at.sn,0,-at.sn,at.cs,0,0,0,1),Gt=Mt.multiply(Et).multiply(L),_t=Rt=>{let{x:Ot,y:kt}=new k(Math.cos(Rt),Math.sin(Rt),0).applyMatrix3(Gt);return Math.atan2(kt,Ot)};S.aStartAngle=_t(S.aStartAngle),S.aEndAngle=_t(S.aEndAngle),q(D)&&(S.aClockwise=!S.aClockwise)}}function tt(S){let J=T(D),z=y(D);S.xRadius*=J,S.yRadius*=z;let G=J>Number.EPSILON?Math.atan2(D.elements[1],D.elements[0]):Math.atan2(-D.elements[3],D.elements[4]);S.aRotation+=G,q(D)&&(S.aStartAngle*=-1,S.aEndAngle*=-1,S.aClockwise=!S.aClockwise)}let ut=U.subPaths;for(let S=0,J=ut.length;S<J;S++){let G=ut[S].curves;for(let b=0;b<G.length;b++){let Z=G[b];Z.isLineCurve?(R(Z.v1),R(Z.v2)):Z.isCubicBezierCurve?(R(Z.v0),R(Z.v1),R(Z.v2),R(Z.v3)):Z.isQuadraticBezierCurve?(R(Z.v0),R(Z.v1),R(Z.v2)):Z.isEllipseCurve&&(mt.set(Z.aX,Z.aY),R(mt),Z.aX=mt.x,Z.aY=mt.y,I(D)?w(Z):tt(Z))}}}function q(U){let D=U.elements;return D[0]*D[4]-D[1]*D[3]<0}function I(U){let D=U.elements,R=D[0]*D[3]+D[1]*D[4];if(R===0)return!1;let w=T(U),tt=y(U);return Math.abs(R/(w*tt))>Number.EPSILON}function T(U){let D=U.elements;return Math.sqrt(D[0]*D[0]+D[1]*D[1])}function y(U){let D=U.elements;return Math.sqrt(D[3]*D[3]+D[4]*D[4])}function B(U,D,R){let w,tt,ut,S,J,z=U+R,G=U-R,b=Math.sqrt(G*G+4*D*D);return z>0?(w=.5*(z+b),J=1/w,tt=U*J*R-D*J*D):z<0?tt=.5*(z-b):(w=.5*b,tt=-.5*b),G>0?ut=G+b:ut=G-b,Math.abs(ut)>2*Math.abs(D)?(J=-2*D/ut,S=1/Math.sqrt(1+J*J),ut=J*S):Math.abs(D)===0?(ut=1,S=0):(J=-.5*ut/D,ut=1/Math.sqrt(1+J*J),S=J*ut),G>0&&(J=ut,ut=-S,S=J),{rt1:w,rt2:tt,cs:ut,sn:S}}let X=[],j={},et=[],nt=new Bt,it=new Bt,ot=new Bt,H=new Bt,mt=new pt,xt=new k,bt=new Bt,qt=new DOMParser().parseFromString(t,"image/svg+xml");return n(qt.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:X,xml:qt.documentElement}}static createShapes(t){let n={ORIGIN:0,DESTINATION:1,BETWEEN:2,LEFT:3,RIGHT:4,BEHIND:5,BEYOND:6},s={loc:n.ORIGIN,t:0};function r(x,p,d,E){let _=x.x,v=p.x,N=d.x,P=E.x,q=x.y,I=p.y,T=d.y,y=E.y,B=(P-N)*(q-T)-(y-T)*(_-N),X=(v-_)*(q-T)-(I-q)*(_-N),j=(y-T)*(v-_)-(P-N)*(I-q),et=B/j,nt=X/j;if(j===0&&B!==0||et<=0||et>=1||nt<0||nt>1)return null;if(B===0&&j===0){for(let it=0;it<2;it++)if(o(it===0?d:E,x,p),s.loc==n.ORIGIN){let ot=it===0?d:E;return{x:ot.x,y:ot.y,t:s.t}}else if(s.loc==n.BETWEEN){let ot=+(_+s.t*(v-_)).toPrecision(10),H=+(q+s.t*(I-q)).toPrecision(10);return{x:ot,y:H,t:s.t}}return null}else{for(let H=0;H<2;H++)if(o(H===0?d:E,x,p),s.loc==n.ORIGIN){let mt=H===0?d:E;return{x:mt.x,y:mt.y,t:s.t}}let it=+(_+et*(v-_)).toPrecision(10),ot=+(q+et*(I-q)).toPrecision(10);return{x:it,y:ot,t:et}}}function o(x,p,d){let E=d.x-p.x,_=d.y-p.y,v=x.x-p.x,N=x.y-p.y,P=E*N-v*_;if(x.x===p.x&&x.y===p.y){s.loc=n.ORIGIN,s.t=0;return}if(x.x===d.x&&x.y===d.y){s.loc=n.DESTINATION,s.t=1;return}if(P<-Number.EPSILON){s.loc=n.LEFT;return}if(P>Number.EPSILON){s.loc=n.RIGHT;return}if(E*v<0||_*N<0){s.loc=n.BEHIND;return}if(Math.sqrt(E*E+_*_)<Math.sqrt(v*v+N*N)){s.loc=n.BEYOND;return}let q;E!==0?q=v/E:q=N/_,s.loc=n.BETWEEN,s.t=q}function a(x,p){let d=[],E=[];for(let _=1;_<x.length;_++){let v=x[_-1],N=x[_];for(let P=1;P<p.length;P++){let q=p[P-1],I=p[P],T=r(v,N,q,I);T!==null&&d.find(y=>y.t<=T.t+Number.EPSILON&&y.t>=T.t-Number.EPSILON)===void 0&&(d.push(T),E.push(new pt(T.x,T.y)))}}return E}function l(x,p,d){let E=new pt;p.getCenter(E);let _=[];return d.forEach(v=>{v.boundingBox.containsPoint(E)&&a(x,v.points).forEach(P=>{_.push({identifier:v.identifier,isCW:v.isCW,point:P})})}),_.sort((v,N)=>v.point.x-N.point.x),_}function c(x,p,d,E,_){(_==null||_==="")&&(_="nonzero");let v=new pt;x.boundingBox.getCenter(v);let N=[new pt(d,v.y),new pt(E,v.y)],P=l(N,x.boundingBox,p);P.sort((X,j)=>X.point.x-j.point.x);let q=[],I=[];P.forEach(X=>{X.identifier===x.identifier?q.push(X):I.push(X)});let T=q[0].point.x,y=[],B=0;for(;B<I.length&&I[B].point.x<T;)y.length>0&&y[y.length-1]===I[B].identifier?y.pop():y.push(I[B].identifier),B++;if(y.push(x.identifier),_==="evenodd"){let X=y.length%2===0,j=y[y.length-2];return{identifier:x.identifier,isHole:X,for:j}}else if(_==="nonzero"){let X=!0,j=null,et=null;for(let nt=0;nt<y.length;nt++){let it=y[nt];X?(et=p[it].isCW,X=!1,j=it):et!==p[it].isCW&&(et=p[it].isCW,X=!0)}return{identifier:x.identifier,isHole:X,for:j}}else console.warn('fill-rule: "'+_+'" is currently not implemented.')}let h=999999999,u=-999999999,f=t.subPaths.map(x=>{let p=x.getPoints(),d=-999999999,E=999999999,_=-999999999,v=999999999;for(let N=0;N<p.length;N++){let P=p[N];P.y>d&&(d=P.y),P.y<E&&(E=P.y),P.x>_&&(_=P.x),P.x<v&&(v=P.x)}return u<=_&&(u=_+1),h>=v&&(h=v-1),{curves:x.curves,points:p,isCW:oi.isClockWise(p),identifier:-1,boundingBox:new Do(new pt(v,E),new pt(_,d))}});f=f.filter(x=>x.points.length>1);for(let x=0;x<f.length;x++)f[x].identifier=x;let m=f.map(x=>c(x,f,h,u,t.userData?t.userData.style.fillRule:void 0)),g=[];return f.forEach(x=>{if(!m[x.identifier].isHole){let d=new bn;d.curves=x.curves,m.filter(_=>_.isHole&&_.for===x.identifier).forEach(_=>{let v=f[_.identifier],N=new Xn;N.curves=v.curves,d.holes.push(N)}),g.push(d)}}),g}static getStrokeStyle(t,e,n,s,r){return t=t!==void 0?t:1,e=e!==void 0?e:"#000",n=n!==void 0?n:"miter",s=s!==void 0?s:"butt",r=r!==void 0?r:4,{strokeColor:e,strokeWidth:t,strokeLineJoin:n,strokeLineCap:s,strokeMiterLimit:r}}static pointsToStroke(t,e,n,s){let r=[],o=[],a=[];if(i.pointsToStrokeWithBuffers(t,e,n,s,r,o,a)===0)return null;let l=new Se;return l.setAttribute("position",new xe(r,3)),l.setAttribute("normal",new xe(o,3)),l.setAttribute("uv",new xe(a,2)),l}static pointsToStrokeWithBuffers(t,e,n,s,r,o,a,l){let c=new pt,h=new pt,u=new pt,f=new pt,m=new pt,g=new pt,x=new pt,p=new pt,d=new pt,E=new pt,_=new pt,v=new pt,N=new pt,P=new pt,q=new pt,I=new pt,T=new pt;n=n!==void 0?n:12,s=s!==void 0?s:.001,l=l!==void 0?l:0,t=G(t);let y=t.length;if(y<2)return 0;let B=t[0].equals(t[y-1]),X,j=t[0],et,nt=e.strokeWidth/2,it=1/(y-1),ot=0,H,mt,xt,bt,qt=!1,jt=0,U=l*3,D=l*2;R(t[0],t[1],c).multiplyScalar(nt),p.copy(t[0]).sub(c),d.copy(t[0]).add(c),E.copy(p),_.copy(d);for(let b=1;b<y;b++){X=t[b],b===y-1?B?et=t[1]:et=void 0:et=t[b+1];let Z=c;if(R(j,X,Z),u.copy(Z).multiplyScalar(nt),v.copy(X).sub(u),N.copy(X).add(u),H=ot+it,mt=!1,et!==void 0){R(X,et,h),u.copy(h).multiplyScalar(nt),P.copy(X).sub(u),q.copy(X).add(u),xt=!0,u.subVectors(et,j),Z.dot(u)<0&&(xt=!1),b===1&&(qt=xt),u.subVectors(et,X),u.normalize();let Q=Math.abs(Z.dot(u));if(Q>Number.EPSILON){let lt=nt/Q;u.multiplyScalar(-lt),f.subVectors(X,j),m.copy(f).setLength(lt).add(u),I.copy(m).negate();let F=m.length(),L=f.length();f.divideScalar(L),g.subVectors(et,X);let ht=g.length();switch(g.divideScalar(ht),f.dot(I)<L&&g.dot(I)<ht&&(mt=!0),T.copy(m).add(X),I.add(X),bt=!1,mt?xt?(q.copy(I),N.copy(I)):(P.copy(I),v.copy(I)):ut(),e.strokeLineJoin){case"bevel":S(xt,mt,H);break;case"round":J(xt,mt),xt?tt(X,v,P,H,0):tt(X,q,N,H,1);break;case"miter":case"miter-clip":default:let A=nt*e.strokeMiterLimit/F;if(A<1)if(e.strokeLineJoin!=="miter-clip"){S(xt,mt,H);break}else J(xt,mt),xt?(g.subVectors(T,v).multiplyScalar(A).add(v),x.subVectors(T,P).multiplyScalar(A).add(P),w(v,H,0),w(g,H,0),w(X,H,.5),w(X,H,.5),w(g,H,0),w(x,H,0),w(X,H,.5),w(x,H,0),w(P,H,0)):(g.subVectors(T,N).multiplyScalar(A).add(N),x.subVectors(T,q).multiplyScalar(A).add(q),w(N,H,1),w(g,H,1),w(X,H,.5),w(X,H,.5),w(g,H,1),w(x,H,1),w(X,H,.5),w(x,H,1),w(q,H,1));else mt?(xt?(w(d,ot,1),w(p,ot,0),w(T,H,0),w(d,ot,1),w(T,H,0),w(I,H,1)):(w(d,ot,1),w(p,ot,0),w(T,H,1),w(p,ot,0),w(I,H,0),w(T,H,1)),xt?P.copy(T):q.copy(T)):xt?(w(v,H,0),w(T,H,0),w(X,H,.5),w(X,H,.5),w(T,H,0),w(P,H,0)):(w(N,H,1),w(T,H,1),w(X,H,.5),w(X,H,.5),w(T,H,1),w(q,H,1)),bt=!0;break}}else ut()}else ut();!B&&b===y-1&&z(t[0],E,_,xt,!0,ot),ot=H,j=X,p.copy(P),d.copy(q)}if(!B)z(X,v,N,xt,!1,H);else if(mt&&r){let b=T,Z=I;qt!==xt&&(b=I,Z=T),xt?(bt||qt)&&(Z.toArray(r,0*3),Z.toArray(r,3*3),bt&&b.toArray(r,1*3)):(bt||!qt)&&(Z.toArray(r,1*3),Z.toArray(r,3*3),bt&&b.toArray(r,0*3))}return jt;function R(b,Z,Q){return Q.subVectors(Z,b),Q.set(-Q.y,Q.x).normalize()}function w(b,Z,Q){r&&(r[U]=b.x,r[U+1]=b.y,r[U+2]=0,o&&(o[U]=0,o[U+1]=0,o[U+2]=1),U+=3,a&&(a[D]=Z,a[D+1]=Q,D+=2)),jt+=3}function tt(b,Z,Q,lt,F){c.copy(Z).sub(b).normalize(),h.copy(Q).sub(b).normalize();let L=Math.PI,ht=c.dot(h);Math.abs(ht)<1&&(L=Math.abs(Math.acos(ht))),L/=n,u.copy(Z);for(let A=0,M=n-1;A<M;A++)f.copy(u).rotateAround(b,L),w(u,lt,F),w(f,lt,F),w(b,lt,.5),u.copy(f);w(f,lt,F),w(Q,lt,F),w(b,lt,.5)}function ut(){w(d,ot,1),w(p,ot,0),w(v,H,0),w(d,ot,1),w(v,H,0),w(N,H,1)}function S(b,Z,Q){Z?b?(w(d,ot,1),w(p,ot,0),w(v,H,0),w(d,ot,1),w(v,H,0),w(I,H,1),w(v,Q,0),w(P,Q,0),w(I,Q,.5)):(w(d,ot,1),w(p,ot,0),w(N,H,1),w(p,ot,0),w(I,H,0),w(N,H,1),w(N,Q,1),w(I,Q,0),w(q,Q,1)):b?(w(v,Q,0),w(P,Q,0),w(X,Q,.5)):(w(N,Q,1),w(q,Q,0),w(X,Q,.5))}function J(b,Z){Z&&(b?(w(d,ot,1),w(p,ot,0),w(v,H,0),w(d,ot,1),w(v,H,0),w(I,H,1),w(v,ot,0),w(X,H,.5),w(I,H,1),w(X,H,.5),w(P,ot,0),w(I,H,1)):(w(d,ot,1),w(p,ot,0),w(N,H,1),w(p,ot,0),w(I,H,0),w(N,H,1),w(N,ot,1),w(I,H,0),w(X,H,.5),w(X,H,.5),w(I,H,0),w(q,ot,1)))}function z(b,Z,Q,lt,F,L){switch(e.strokeLineCap){case"round":F?tt(b,Q,Z,L,.5):tt(b,Z,Q,L,.5);break;case"square":if(F)c.subVectors(Z,b),h.set(c.y,-c.x),u.addVectors(c,h).add(b),f.subVectors(h,c).add(b),lt?(u.toArray(r,1*3),f.toArray(r,0*3),f.toArray(r,3*3)):(u.toArray(r,1*3),a[3*2+1]===1?f.toArray(r,3*3):u.toArray(r,3*3),f.toArray(r,0*3));else{c.subVectors(Q,b),h.set(c.y,-c.x),u.addVectors(c,h).add(b),f.subVectors(h,c).add(b);let ht=r.length;lt?(u.toArray(r,ht-1*3),f.toArray(r,ht-2*3),f.toArray(r,ht-4*3)):(f.toArray(r,ht-2*3),u.toArray(r,ht-1*3),f.toArray(r,ht-4*3))}break;case"butt":default:break}}function G(b){let Z=!1;for(let lt=1,F=b.length-1;lt<F;lt++)if(b[lt].distanceTo(b[lt+1])<s){Z=!0;break}if(!Z)return b;let Q=[];Q.push(b[0]);for(let lt=1,F=b.length-1;lt<F;lt++)b[lt].distanceTo(b[lt+1])>=s&&Q.push(b[lt]);return Q.push(b[b.length-1]),Q}}};var Wo=class extends xn{constructor(t){super(t)}load(t,e,n,s){let r=this,o=new xs(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){let l=r.parse(JSON.parse(a));e&&e(l)},n,s)}parse(t){return new Oc(t)}},Oc=class{constructor(t){this.isFont=!0,this.type="Font",this.data=t}generateShapes(t,e=100){let n=[],s=I2(t,e,this.data);for(let r=0,o=s.length;r<o;r++)n.push(...s[r].toShapes());return n}};function I2(i,t,e){let n=Array.from(i),s=t/e.resolution,r=(e.boundingBox.yMax-e.boundingBox.yMin+e.underlineThickness)*s,o=[],a=0,l=0;for(let c=0;c<n.length;c++){let h=n[c];if(h===`
`)a=0,l-=r;else{let u=P2(h,s,a,l,e);a+=u.offsetX,o.push(u.path)}}return o}function P2(i,t,e,n,s){let r=s.glyphs[i]||s.glyphs["?"];if(!r){console.error('THREE.Font: character "'+i+'" does not exists in font family '+s.familyName+".");return}let o=new rn,a,l,c,h,u,f,m,g;if(r.o){let x=r._cachedOutline||(r._cachedOutline=r.o.split(" "));for(let p=0,d=x.length;p<d;)switch(x[p++]){case"m":a=x[p++]*t+e,l=x[p++]*t+n,o.moveTo(a,l);break;case"l":a=x[p++]*t+e,l=x[p++]*t+n,o.lineTo(a,l);break;case"q":c=x[p++]*t+e,h=x[p++]*t+n,u=x[p++]*t+e,f=x[p++]*t+n,o.quadraticCurveTo(u,f,c,h);break;case"b":c=x[p++]*t+e,h=x[p++]*t+n,u=x[p++]*t+e,f=x[p++]*t+n,m=x[p++]*t+e,g=x[p++]*t+n,o.bezierCurveTo(u,f,m,g,c,h);break}}return{offsetX:r.ha*t,path:o}}var Xo=class extends Pi{constructor(t,e={}){let n=e.font;if(n===void 0)super();else{let s=n.generateShapes(t,e.size);e.depth===void 0&&e.height!==void 0&&console.warn("THREE.TextGeometry: .height is now depreciated. Please use .depth instead"),e.depth=e.depth!==void 0?e.depth:e.height!==void 0?e.height:50,e.bevelThickness===void 0&&(e.bevelThickness=10),e.bevelSize===void 0&&(e.bevelSize=8),e.bevelEnabled===void 0&&(e.bevelEnabled=!1),super(s,e)}this.type="TextGeometry"}};var Yo=class extends En{constructor(){super();let t=new mn;t.deleteAttribute("uv");let e=new ui({side:ye}),n=new ui,s=new Ui(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new $t(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new $t(t,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);let a=new $t(t,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);let l=new $t(t,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);let c=new $t(t,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);let h=new $t(t,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let u=new $t(t,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);let f=new $t(t,bs(50));f.position.set(-16.116,14.37,8.208),f.scale.set(.1,2.428,2.739),this.add(f);let m=new $t(t,bs(50));m.position.set(-16.109,18.021,-8.207),m.scale.set(.1,2.425,2.751),this.add(m);let g=new $t(t,bs(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);let x=new $t(t,bs(43));x.position.set(-.462,8.89,14.52),x.scale.set(4.38,5.441,.088),this.add(x);let p=new $t(t,bs(20));p.position.set(3.235,11.486,-12.541),p.scale.set(2.5,2,.1),this.add(p);let d=new $t(t,bs(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function bs(i){let t=new wn;return t.color.setScalar(i),t}var ad={glyphs:{\u03BF:{x_min:0,x_max:764,ha:863,o:"m 380 -25 q 105 87 211 -25 q 0 372 0 200 q 104 660 0 545 q 380 775 209 775 q 658 659 552 775 q 764 372 764 544 q 658 87 764 200 q 380 -25 552 -25 m 379 142 q 515 216 466 142 q 557 373 557 280 q 515 530 557 465 q 379 607 466 607 q 245 530 294 607 q 204 373 204 465 q 245 218 204 283 q 379 142 294 142 "},S:{x_min:0,x_max:826,ha:915,o:"m 826 306 q 701 55 826 148 q 423 -29 587 -29 q 138 60 255 -29 q 0 318 13 154 l 208 318 q 288 192 216 238 q 437 152 352 152 q 559 181 506 152 q 623 282 623 217 q 466 411 623 372 q 176 487 197 478 q 18 719 18 557 q 136 958 18 869 q 399 1040 244 1040 q 670 956 561 1040 q 791 713 791 864 l 591 713 q 526 826 583 786 q 393 866 469 866 q 277 838 326 866 q 218 742 218 804 q 374 617 218 655 q 667 542 646 552 q 826 306 826 471 "},"\xA6":{x_min:0,x_max:143,ha:240,o:"m 143 462 l 0 462 l 0 984 l 143 984 l 143 462 m 143 -242 l 0 -242 l 0 280 l 143 280 l 143 -242 "},"/":{x_min:196.109375,x_max:632.5625,ha:828,o:"m 632 1040 l 289 -128 l 196 -128 l 538 1040 l 632 1040 "},\u03A4:{x_min:-.609375,x_max:808,ha:878,o:"m 808 831 l 508 831 l 508 0 l 298 0 l 298 831 l 0 831 l 0 1013 l 808 1013 l 808 831 "},y:{x_min:0,x_max:738.890625,ha:828,o:"m 738 749 l 444 -107 q 361 -238 413 -199 q 213 -277 308 -277 q 156 -275 176 -277 q 120 -271 131 -271 l 120 -110 q 147 -113 134 -111 q 179 -116 161 -116 q 247 -91 226 -116 q 269 -17 269 -67 q 206 173 269 -4 q 84 515 162 301 q 0 749 41 632 l 218 749 l 376 207 l 529 749 l 738 749 "},\u03A0:{x_min:0,x_max:809,ha:922,o:"m 809 0 l 598 0 l 598 836 l 208 836 l 208 0 l 0 0 l 0 1012 l 809 1012 l 809 0 "},\u0390:{x_min:-162,x_max:364,ha:364,o:"m 364 810 l 235 810 l 235 952 l 364 952 l 364 810 m 301 1064 l 86 810 l -12 810 l 123 1064 l 301 1064 m -33 810 l -162 810 l -162 952 l -33 952 l -33 810 m 200 0 l 0 0 l 0 748 l 200 748 l 200 0 "},g:{x_min:0,x_max:724,ha:839,o:"m 724 48 q 637 -223 724 -142 q 357 -304 551 -304 q 140 -253 226 -304 q 23 -72 36 -192 l 243 -72 q 290 -127 255 -110 q 368 -144 324 -144 q 504 -82 470 -144 q 530 71 530 -38 l 530 105 q 441 25 496 51 q 319 0 386 0 q 79 115 166 0 q 0 377 0 219 q 77 647 0 534 q 317 775 166 775 q 534 656 456 775 l 534 748 l 724 748 l 724 48 m 368 167 q 492 237 447 167 q 530 382 530 297 q 490 529 530 466 q 364 603 444 603 q 240 532 284 603 q 201 386 201 471 q 240 239 201 300 q 368 167 286 167 "},"\xB2":{x_min:0,x_max:463,ha:560,o:"m 463 791 q 365 627 463 706 q 151 483 258 555 l 455 483 l 455 382 l 0 382 q 84 565 0 488 q 244 672 97 576 q 331 784 331 727 q 299 850 331 824 q 228 876 268 876 q 159 848 187 876 q 132 762 132 820 l 10 762 q 78 924 10 866 q 228 976 137 976 q 392 925 322 976 q 463 791 463 874 "},"\u2013":{x_min:0,x_max:704.171875,ha:801,o:"m 704 297 l 0 297 l 0 450 l 704 450 l 704 297 "},\u039A:{x_min:0,x_max:899.671875,ha:969,o:"m 899 0 l 646 0 l 316 462 l 208 355 l 208 0 l 0 0 l 0 1013 l 208 1013 l 208 596 l 603 1013 l 863 1013 l 460 603 l 899 0 "},\u0192:{x_min:-46,x_max:440,ha:525,o:"m 440 609 l 316 609 l 149 -277 l -46 -277 l 121 609 l 14 609 l 14 749 l 121 749 q 159 949 121 894 q 344 1019 208 1019 l 440 1015 l 440 855 l 377 855 q 326 841 338 855 q 314 797 314 827 q 314 773 314 786 q 314 749 314 761 l 440 749 l 440 609 "},e:{x_min:0,x_max:708,ha:808,o:"m 708 321 l 207 321 q 254 186 207 236 q 362 141 298 141 q 501 227 453 141 l 700 227 q 566 36 662 104 q 362 -26 477 -26 q 112 72 213 -26 q 0 369 0 182 q 95 683 0 573 q 358 793 191 793 q 619 677 531 793 q 708 321 708 561 m 501 453 q 460 571 501 531 q 353 612 420 612 q 247 570 287 612 q 207 453 207 529 l 501 453 "},\u03CC:{x_min:0,x_max:764,ha:863,o:"m 380 -25 q 105 87 211 -25 q 0 372 0 200 q 104 660 0 545 q 380 775 209 775 q 658 659 552 775 q 764 372 764 544 q 658 87 764 200 q 380 -25 552 -25 m 379 142 q 515 216 466 142 q 557 373 557 280 q 515 530 557 465 q 379 607 466 607 q 245 530 294 607 q 204 373 204 465 q 245 218 204 283 q 379 142 294 142 m 593 1039 l 391 823 l 293 823 l 415 1039 l 593 1039 "},J:{x_min:0,x_max:649,ha:760,o:"m 649 294 q 573 48 649 125 q 327 -29 497 -29 q 61 82 136 -29 q 0 375 0 173 l 200 375 l 199 309 q 219 194 199 230 q 321 145 249 145 q 418 193 390 145 q 441 307 441 232 l 441 1013 l 649 1013 l 649 294 "},"\xBB":{x_min:-.234375,x_max:526,ha:624,o:"m 526 286 l 297 87 l 296 250 l 437 373 l 297 495 l 297 660 l 526 461 l 526 286 m 229 286 l 0 87 l 0 250 l 140 373 l 0 495 l 0 660 l 229 461 l 229 286 "},"\xA9":{x_min:3,x_max:1007,ha:1104,o:"m 507 -6 q 129 153 269 -6 q 3 506 3 298 q 127 857 3 713 q 502 1017 266 1017 q 880 855 740 1017 q 1007 502 1007 711 q 882 152 1007 295 q 507 -6 743 -6 m 502 934 q 184 800 302 934 q 79 505 79 680 q 184 210 79 331 q 501 76 302 76 q 819 210 701 76 q 925 507 925 331 q 820 800 925 682 q 502 934 704 934 m 758 410 q 676 255 748 313 q 506 197 605 197 q 298 291 374 197 q 229 499 229 377 q 297 713 229 624 q 494 811 372 811 q 666 760 593 811 q 752 616 739 710 l 621 616 q 587 688 621 658 q 509 719 554 719 q 404 658 441 719 q 368 511 368 598 q 403 362 368 427 q 498 298 438 298 q 624 410 606 298 l 758 410 "},\u03CE:{x_min:0,x_max:945,ha:1051,o:"m 566 528 l 372 528 l 372 323 q 372 298 372 311 q 373 271 372 285 q 360 183 373 211 q 292 142 342 142 q 219 222 243 142 q 203 365 203 279 q 241 565 203 461 q 334 748 273 650 l 130 748 q 36 552 68 650 q 0 337 0 444 q 69 96 0 204 q 276 -29 149 -29 q 390 0 337 -29 q 470 78 444 28 q 551 0 495 30 q 668 -29 608 -29 q 874 96 793 -29 q 945 337 945 205 q 910 547 945 444 q 814 748 876 650 l 610 748 q 703 565 671 650 q 742 365 742 462 q 718 189 742 237 q 651 142 694 142 q 577 190 597 142 q 565 289 565 221 l 565 323 l 566 528 m 718 1039 l 516 823 l 417 823 l 540 1039 l 718 1039 "},"^":{x_min:197.21875,x_max:630.5625,ha:828,o:"m 630 836 l 536 836 l 413 987 l 294 836 l 197 836 l 331 1090 l 493 1090 l 630 836 "},"\xAB":{x_min:0,x_max:526.546875,ha:624,o:"m 526 87 l 297 286 l 297 461 l 526 660 l 526 495 l 385 373 l 526 250 l 526 87 m 229 87 l 0 286 l 0 461 l 229 660 l 229 495 l 88 373 l 229 250 l 229 87 "},D:{x_min:0,x_max:864,ha:968,o:"m 400 1013 q 736 874 608 1013 q 864 523 864 735 q 717 146 864 293 q 340 0 570 0 l 0 0 l 0 1013 l 400 1013 m 398 837 l 206 837 l 206 182 l 372 182 q 584 276 507 182 q 657 504 657 365 q 594 727 657 632 q 398 837 522 837 "},"\u2219":{x_min:0,x_max:207,ha:304,o:"m 207 528 l 0 528 l 0 735 l 207 735 l 207 528 "},\u00FF:{x_min:0,x_max:47,ha:125,o:"m 47 3 q 37 -7 47 -7 q 28 0 30 -7 q 39 -4 32 -4 q 45 3 45 -1 l 37 0 q 28 9 28 0 q 39 19 28 19 l 47 16 l 47 19 l 47 3 m 37 1 q 44 8 44 1 q 37 16 44 16 q 30 8 30 16 q 37 1 30 1 m 26 1 l 23 22 l 14 0 l 3 22 l 3 3 l 0 25 l 13 1 l 22 25 l 26 1 "},w:{x_min:0,x_max:1056.953125,ha:1150,o:"m 1056 749 l 848 0 l 647 0 l 527 536 l 412 0 l 211 0 l 0 749 l 202 749 l 325 226 l 429 748 l 633 748 l 740 229 l 864 749 l 1056 749 "},$:{x_min:0,x_max:704,ha:800,o:"m 682 693 l 495 693 q 468 782 491 749 q 391 831 441 824 l 391 579 q 633 462 562 534 q 704 259 704 389 q 616 57 704 136 q 391 -22 528 -22 l 391 -156 l 308 -156 l 308 -22 q 76 69 152 -7 q 0 300 0 147 l 183 300 q 215 191 190 230 q 308 128 245 143 l 308 414 q 84 505 157 432 q 12 700 12 578 q 89 902 12 824 q 308 981 166 981 l 308 1069 l 391 1069 l 391 981 q 595 905 521 981 q 682 693 670 829 m 308 599 l 308 831 q 228 796 256 831 q 200 712 200 762 q 225 642 200 668 q 308 599 251 617 m 391 128 q 476 174 449 140 q 504 258 504 207 q 391 388 504 354 l 391 128 "},"\\":{x_min:-.03125,x_max:434.765625,ha:532,o:"m 434 -128 l 341 -128 l 0 1039 l 91 1040 l 434 -128 "},\u00B5:{x_min:0,x_max:647,ha:754,o:"m 647 0 l 478 0 l 478 68 q 412 9 448 30 q 330 -11 375 -11 q 261 3 296 -11 q 199 43 226 18 l 199 -277 l 0 -277 l 0 749 l 199 749 l 199 358 q 216 221 199 267 q 322 151 244 151 q 435 240 410 151 q 448 401 448 283 l 448 749 l 647 749 l 647 0 "},\u0399:{x_min:42,x_max:250,ha:413,o:"m 250 0 l 42 0 l 42 1013 l 250 1013 l 250 0 "},\u038E:{x_min:0,x_max:1211.15625,ha:1289,o:"m 1211 1012 l 907 376 l 907 0 l 697 0 l 697 376 l 374 1012 l 583 1012 l 802 576 l 1001 1012 l 1211 1012 m 313 1035 l 98 780 l 0 780 l 136 1035 l 313 1035 "},"\u2019":{x_min:0,x_max:192,ha:289,o:"m 192 834 q 137 692 192 751 q 0 626 83 634 l 0 697 q 101 831 101 723 l 0 831 l 0 1013 l 192 1013 l 192 834 "},\u039D:{x_min:0,x_max:833,ha:946,o:"m 833 0 l 617 0 l 206 696 l 206 0 l 0 0 l 0 1013 l 216 1013 l 629 315 l 629 1013 l 833 1013 l 833 0 "},"-":{x_min:27.78125,x_max:413.890625,ha:525,o:"m 413 279 l 27 279 l 27 468 l 413 468 l 413 279 "},Q:{x_min:0,x_max:995.59375,ha:1096,o:"m 995 49 l 885 -70 l 762 42 q 641 -12 709 4 q 497 -29 572 -29 q 135 123 271 -29 q 0 504 0 276 q 131 881 0 731 q 497 1040 270 1040 q 859 883 719 1040 q 994 506 994 731 q 966 321 994 413 q 884 152 938 229 l 995 49 m 730 299 q 767 395 755 344 q 779 504 779 446 q 713 743 779 644 q 505 857 638 857 q 284 745 366 857 q 210 501 210 644 q 279 265 210 361 q 492 157 357 157 q 615 181 557 157 l 508 287 l 620 405 l 730 299 "},\u03C2:{x_min:0,x_max:731.78125,ha:768,o:"m 731 448 l 547 448 q 485 571 531 533 q 369 610 440 610 q 245 537 292 610 q 204 394 204 473 q 322 186 204 238 q 540 133 430 159 q 659 -15 659 98 q 643 -141 659 -80 q 595 -278 627 -202 l 423 -278 q 458 -186 448 -215 q 474 -88 474 -133 q 352 0 474 -27 q 123 80 181 38 q 0 382 0 170 q 98 660 0 549 q 367 777 202 777 q 622 683 513 777 q 731 448 731 589 "},M:{x_min:0,x_max:1019,ha:1135,o:"m 1019 0 l 823 0 l 823 819 l 618 0 l 402 0 l 194 818 l 194 0 l 0 0 l 0 1013 l 309 1012 l 510 241 l 707 1013 l 1019 1013 l 1019 0 "},\u03A8:{x_min:0,x_max:995,ha:1085,o:"m 995 698 q 924 340 995 437 q 590 200 841 227 l 590 0 l 404 0 l 404 200 q 70 340 152 227 q 0 698 0 437 l 0 1013 l 188 1013 l 188 694 q 212 472 188 525 q 404 383 254 383 l 404 1013 l 590 1013 l 590 383 q 781 472 740 383 q 807 694 807 525 l 807 1013 l 995 1013 l 995 698 "},C:{x_min:0,x_max:970.828125,ha:1043,o:"m 970 345 q 802 70 933 169 q 490 -29 672 -29 q 130 130 268 -29 q 0 506 0 281 q 134 885 0 737 q 502 1040 275 1040 q 802 939 668 1040 q 965 679 936 838 l 745 679 q 649 809 716 761 q 495 857 582 857 q 283 747 361 857 q 214 508 214 648 q 282 267 214 367 q 493 154 359 154 q 651 204 584 154 q 752 345 718 255 l 970 345 "},"!":{x_min:0,x_max:204,ha:307,o:"m 204 739 q 182 515 204 686 q 152 282 167 398 l 52 282 q 13 589 27 473 q 0 739 0 704 l 0 1013 l 204 1013 l 204 739 m 204 0 l 0 0 l 0 203 l 204 203 l 204 0 "},"{":{x_min:0,x_max:501.390625,ha:599,o:"m 501 -285 q 229 -209 301 -285 q 176 -35 176 -155 q 182 47 176 -8 q 189 126 189 103 q 156 245 189 209 q 0 294 112 294 l 0 438 q 154 485 111 438 q 189 603 189 522 q 186 666 189 636 q 176 783 176 772 q 231 945 176 894 q 501 1015 306 1015 l 501 872 q 370 833 408 872 q 340 737 340 801 q 342 677 340 705 q 353 569 353 579 q 326 451 353 496 q 207 366 291 393 q 327 289 294 346 q 353 164 353 246 q 348 79 353 132 q 344 17 344 26 q 372 -95 344 -58 q 501 -141 408 -141 l 501 -285 "},X:{x_min:0,x_max:894.453125,ha:999,o:"m 894 0 l 654 0 l 445 351 l 238 0 l 0 0 l 316 516 l 0 1013 l 238 1013 l 445 659 l 652 1013 l 894 1013 l 577 519 l 894 0 "},"#":{x_min:0,x_max:1019.453125,ha:1117,o:"m 1019 722 l 969 582 l 776 581 l 717 417 l 919 417 l 868 279 l 668 278 l 566 -6 l 413 -5 l 516 279 l 348 279 l 247 -6 l 94 -6 l 196 278 l 0 279 l 49 417 l 245 417 l 304 581 l 98 582 l 150 722 l 354 721 l 455 1006 l 606 1006 l 507 721 l 673 722 l 776 1006 l 927 1006 l 826 721 l 1019 722 m 627 581 l 454 581 l 394 417 l 567 417 l 627 581 "},\u03B9:{x_min:42,x_max:242,ha:389,o:"m 242 0 l 42 0 l 42 749 l 242 749 l 242 0 "},\u0386:{x_min:0,x_max:995.828125,ha:1072,o:"m 313 1035 l 98 780 l 0 780 l 136 1035 l 313 1035 m 995 0 l 776 0 l 708 208 l 315 208 l 247 0 l 29 0 l 390 1012 l 629 1012 l 995 0 m 652 376 l 509 809 l 369 376 l 652 376 "},")":{x_min:0,x_max:389,ha:486,o:"m 389 357 q 319 14 389 187 q 145 -293 259 -134 l 0 -293 q 139 22 90 -142 q 189 358 189 187 q 139 689 189 525 q 0 1013 90 853 l 145 1013 q 319 703 258 857 q 389 357 389 528 "},\u03B5:{x_min:16.671875,x_max:652.78125,ha:742,o:"m 652 259 q 565 49 652 123 q 340 -25 479 -25 q 102 39 188 -25 q 16 197 16 104 q 45 299 16 249 q 134 390 75 348 q 58 456 86 419 q 25 552 25 502 q 120 717 25 653 q 322 776 208 776 q 537 710 456 776 q 625 508 625 639 l 445 508 q 415 585 445 563 q 327 608 386 608 q 254 590 293 608 q 215 544 215 573 q 252 469 215 490 q 336 453 280 453 q 369 455 347 453 q 400 456 391 456 l 400 308 l 329 308 q 247 291 280 308 q 204 223 204 269 q 255 154 204 172 q 345 143 286 143 q 426 174 398 143 q 454 259 454 206 l 652 259 "},\u0394:{x_min:0,x_max:981.953125,ha:1057,o:"m 981 0 l 0 0 l 386 1013 l 594 1013 l 981 0 m 715 175 l 490 765 l 266 175 l 715 175 "},"}":{x_min:0,x_max:500,ha:597,o:"m 500 294 q 348 246 390 294 q 315 128 315 209 q 320 42 315 101 q 326 -48 326 -17 q 270 -214 326 -161 q 0 -285 196 -285 l 0 -141 q 126 -97 90 -141 q 154 8 154 -64 q 150 91 154 37 q 146 157 146 145 q 172 281 146 235 q 294 366 206 339 q 173 451 208 390 q 146 576 146 500 q 150 655 146 603 q 154 731 154 708 q 126 831 154 799 q 0 872 90 872 l 0 1015 q 270 944 196 1015 q 326 777 326 891 q 322 707 326 747 q 313 593 313 612 q 347 482 313 518 q 500 438 390 438 l 500 294 "},"\u2030":{x_min:0,x_max:1681,ha:1775,o:"m 861 484 q 1048 404 979 484 q 1111 228 1111 332 q 1048 51 1111 123 q 859 -29 979 -29 q 672 50 740 -29 q 610 227 610 122 q 672 403 610 331 q 861 484 741 484 m 861 120 q 939 151 911 120 q 967 226 967 183 q 942 299 967 270 q 861 333 912 333 q 783 301 811 333 q 756 226 756 269 q 783 151 756 182 q 861 120 810 120 m 904 984 l 316 -28 l 205 -29 l 793 983 l 904 984 m 250 984 q 436 904 366 984 q 499 730 499 832 q 436 552 499 626 q 248 472 366 472 q 62 552 132 472 q 0 728 0 624 q 62 903 0 831 q 250 984 132 984 m 249 835 q 169 801 198 835 q 140 725 140 768 q 167 652 140 683 q 247 621 195 621 q 327 654 298 621 q 357 730 357 687 q 329 803 357 772 q 249 835 301 835 m 1430 484 q 1618 404 1548 484 q 1681 228 1681 332 q 1618 51 1681 123 q 1429 -29 1548 -29 q 1241 50 1309 -29 q 1179 227 1179 122 q 1241 403 1179 331 q 1430 484 1311 484 m 1431 120 q 1509 151 1481 120 q 1537 226 1537 183 q 1511 299 1537 270 q 1431 333 1482 333 q 1352 301 1380 333 q 1325 226 1325 269 q 1352 151 1325 182 q 1431 120 1379 120 "},a:{x_min:0,x_max:700,ha:786,o:"m 700 0 l 488 0 q 465 93 469 45 q 365 5 427 37 q 233 -26 303 -26 q 65 37 130 -26 q 0 205 0 101 q 120 409 0 355 q 343 452 168 431 q 465 522 465 468 q 424 588 465 565 q 337 611 384 611 q 250 581 285 611 q 215 503 215 552 l 26 503 q 113 707 26 633 q 328 775 194 775 q 538 723 444 775 q 657 554 657 659 l 657 137 q 666 73 657 101 q 700 33 675 45 l 700 0 m 465 297 l 465 367 q 299 322 358 340 q 193 217 193 287 q 223 150 193 174 q 298 127 254 127 q 417 175 370 127 q 465 297 465 224 "},"\u2014":{x_min:0,x_max:941.671875,ha:1039,o:"m 941 297 l 0 297 l 0 450 l 941 450 l 941 297 "},"=":{x_min:29.171875,x_max:798.609375,ha:828,o:"m 798 502 l 29 502 l 29 635 l 798 635 l 798 502 m 798 204 l 29 204 l 29 339 l 798 339 l 798 204 "},N:{x_min:0,x_max:833,ha:949,o:"m 833 0 l 617 0 l 206 695 l 206 0 l 0 0 l 0 1013 l 216 1013 l 629 315 l 629 1013 l 833 1013 l 833 0 "},\u03C1:{x_min:0,x_max:722,ha:810,o:"m 364 -17 q 271 0 313 -17 q 194 48 230 16 l 194 -278 l 0 -278 l 0 370 q 87 656 0 548 q 358 775 183 775 q 626 655 524 775 q 722 372 722 541 q 621 95 722 208 q 364 -17 520 -17 m 360 607 q 237 529 280 607 q 201 377 201 463 q 234 229 201 292 q 355 147 277 147 q 467 210 419 147 q 515 374 515 273 q 471 537 515 468 q 360 607 428 607 "},"2":{x_min:64,x_max:764,ha:828,o:"m 764 685 q 675 452 764 541 q 484 325 637 415 q 307 168 357 250 l 754 168 l 754 0 l 64 0 q 193 301 64 175 q 433 480 202 311 q 564 673 564 576 q 519 780 564 737 q 416 824 475 824 q 318 780 358 824 q 262 633 270 730 l 80 633 q 184 903 80 807 q 415 988 276 988 q 654 907 552 988 q 764 685 764 819 "},"\xAF":{x_min:0,x_max:775,ha:771,o:"m 775 958 l 0 958 l 0 1111 l 775 1111 l 775 958 "},Z:{x_min:0,x_max:804.171875,ha:906,o:"m 804 836 l 251 182 l 793 182 l 793 0 l 0 0 l 0 176 l 551 830 l 11 830 l 11 1013 l 804 1013 l 804 836 "},u:{x_min:0,x_max:668,ha:782,o:"m 668 0 l 474 0 l 474 89 q 363 9 425 37 q 233 -19 301 -19 q 61 53 123 -19 q 0 239 0 126 l 0 749 l 199 749 l 199 296 q 225 193 199 233 q 316 146 257 146 q 424 193 380 146 q 469 304 469 240 l 469 749 l 668 749 l 668 0 "},k:{x_min:0,x_max:688.890625,ha:771,o:"m 688 0 l 450 0 l 270 316 l 196 237 l 196 0 l 0 0 l 0 1013 l 196 1013 l 196 483 l 433 748 l 675 748 l 413 469 l 688 0 "},\u0397:{x_min:0,x_max:837,ha:950,o:"m 837 0 l 627 0 l 627 450 l 210 450 l 210 0 l 0 0 l 0 1013 l 210 1013 l 210 635 l 627 635 l 627 1013 l 837 1013 l 837 0 "},\u0391:{x_min:0,x_max:966.671875,ha:1043,o:"m 966 0 l 747 0 l 679 208 l 286 208 l 218 0 l 0 0 l 361 1013 l 600 1013 l 966 0 m 623 376 l 480 809 l 340 376 l 623 376 "},s:{x_min:0,x_max:681,ha:775,o:"m 681 229 q 568 33 681 105 q 340 -29 471 -29 q 107 39 202 -29 q 0 245 0 114 l 201 245 q 252 155 201 189 q 358 128 295 128 q 436 144 401 128 q 482 205 482 166 q 363 284 482 255 q 143 348 181 329 q 25 533 25 408 q 129 716 25 647 q 340 778 220 778 q 554 710 465 778 q 658 522 643 643 l 463 522 q 419 596 458 570 q 327 622 380 622 q 255 606 290 622 q 221 556 221 590 q 339 473 221 506 q 561 404 528 420 q 681 229 681 344 "},B:{x_min:0,x_max:835,ha:938,o:"m 674 547 q 791 450 747 518 q 835 304 835 383 q 718 75 835 158 q 461 0 612 0 l 0 0 l 0 1013 l 477 1013 q 697 951 609 1013 q 797 754 797 880 q 765 630 797 686 q 674 547 734 575 m 438 621 q 538 646 495 621 q 590 730 590 676 q 537 814 590 785 q 436 838 494 838 l 199 838 l 199 621 l 438 621 m 445 182 q 561 211 513 182 q 618 311 618 247 q 565 410 618 375 q 444 446 512 446 l 199 446 l 199 182 l 445 182 "},"\u2026":{x_min:0,x_max:819,ha:963,o:"m 206 0 l 0 0 l 0 207 l 206 207 l 206 0 m 512 0 l 306 0 l 306 207 l 512 207 l 512 0 m 819 0 l 613 0 l 613 207 l 819 207 l 819 0 "},"?":{x_min:1,x_max:687,ha:785,o:"m 687 734 q 621 563 687 634 q 501 454 560 508 q 436 293 436 386 l 251 293 l 251 391 q 363 557 251 462 q 476 724 476 653 q 432 827 476 788 q 332 866 389 866 q 238 827 275 866 q 195 699 195 781 l 1 699 q 110 955 1 861 q 352 1040 210 1040 q 582 963 489 1040 q 687 734 687 878 m 446 0 l 243 0 l 243 203 l 446 203 l 446 0 "},H:{x_min:0,x_max:838,ha:953,o:"m 838 0 l 628 0 l 628 450 l 210 450 l 210 0 l 0 0 l 0 1013 l 210 1013 l 210 635 l 628 635 l 628 1013 l 838 1013 l 838 0 "},\u03BD:{x_min:0,x_max:740.28125,ha:828,o:"m 740 749 l 473 0 l 266 0 l 0 749 l 222 749 l 373 211 l 529 749 l 740 749 "},c:{x_min:0,x_max:751.390625,ha:828,o:"m 751 282 q 625 58 725 142 q 384 -26 526 -26 q 107 84 215 -26 q 0 366 0 195 q 98 651 0 536 q 370 774 204 774 q 616 700 518 774 q 751 486 715 626 l 536 486 q 477 570 516 538 q 380 607 434 607 q 248 533 298 607 q 204 378 204 466 q 242 219 204 285 q 377 139 290 139 q 483 179 438 139 q 543 282 527 220 l 751 282 "},"\xB6":{x_min:0,x_max:566.671875,ha:678,o:"m 21 892 l 52 892 l 98 761 l 145 892 l 176 892 l 178 741 l 157 741 l 157 867 l 108 741 l 88 741 l 40 871 l 40 741 l 21 741 l 21 892 m 308 854 l 308 731 q 252 691 308 691 q 227 691 240 691 q 207 696 213 695 l 207 712 l 253 706 q 288 733 288 706 l 288 763 q 244 741 279 741 q 193 797 193 741 q 261 860 193 860 q 287 860 273 860 q 308 854 302 855 m 288 842 l 263 843 q 213 796 213 843 q 248 756 213 756 q 288 796 288 756 l 288 842 m 566 988 l 502 988 l 502 -1 l 439 -1 l 439 988 l 317 988 l 317 -1 l 252 -1 l 252 602 q 81 653 155 602 q 0 805 0 711 q 101 989 0 918 q 309 1053 194 1053 l 566 1053 l 566 988 "},\u03B2:{x_min:0,x_max:703,ha:789,o:"m 510 539 q 651 429 600 501 q 703 262 703 357 q 617 53 703 136 q 404 -29 532 -29 q 199 51 279 -29 l 199 -278 l 0 -278 l 0 627 q 77 911 0 812 q 343 1021 163 1021 q 551 957 464 1021 q 649 769 649 886 q 613 638 649 697 q 510 539 577 579 m 344 136 q 452 181 408 136 q 497 291 497 227 q 435 409 497 369 q 299 444 381 444 l 299 600 q 407 634 363 600 q 452 731 452 669 q 417 820 452 784 q 329 857 382 857 q 217 775 246 857 q 199 622 199 725 l 199 393 q 221 226 199 284 q 344 136 254 136 "},\u039C:{x_min:0,x_max:1019,ha:1132,o:"m 1019 0 l 823 0 l 823 818 l 617 0 l 402 0 l 194 818 l 194 0 l 0 0 l 0 1013 l 309 1013 l 509 241 l 708 1013 l 1019 1013 l 1019 0 "},\u038C:{x_min:.15625,x_max:1174,ha:1271,o:"m 676 -29 q 312 127 451 -29 q 179 505 179 277 q 311 883 179 733 q 676 1040 449 1040 q 1040 883 901 1040 q 1174 505 1174 733 q 1041 127 1174 277 q 676 -29 903 -29 m 676 154 q 890 266 811 154 q 961 506 961 366 q 891 745 961 648 q 676 857 812 857 q 462 747 541 857 q 392 506 392 648 q 461 266 392 365 q 676 154 540 154 m 314 1034 l 98 779 l 0 779 l 136 1034 l 314 1034 "},\u0389:{x_min:0,x_max:1248,ha:1361,o:"m 1248 0 l 1038 0 l 1038 450 l 621 450 l 621 0 l 411 0 l 411 1012 l 621 1012 l 621 635 l 1038 635 l 1038 1012 l 1248 1012 l 1248 0 m 313 1035 l 98 780 l 0 780 l 136 1035 l 313 1035 "},"\u2022":{x_min:-27.78125,x_max:691.671875,ha:775,o:"m 691 508 q 588 252 691 358 q 331 147 486 147 q 77 251 183 147 q -27 508 -27 355 q 75 761 -27 655 q 331 868 179 868 q 585 763 479 868 q 691 508 691 658 "},"\xA5":{x_min:0,x_max:836,ha:931,o:"m 195 625 l 0 1013 l 208 1013 l 427 576 l 626 1013 l 836 1013 l 650 625 l 777 625 l 777 472 l 578 472 l 538 389 l 777 389 l 777 236 l 532 236 l 532 0 l 322 0 l 322 236 l 79 236 l 79 389 l 315 389 l 273 472 l 79 472 l 79 625 l 195 625 "},"(":{x_min:0,x_max:388.890625,ha:486,o:"m 388 -293 l 243 -293 q 70 14 130 -134 q 0 357 0 189 q 69 703 0 526 q 243 1013 129 856 l 388 1013 q 248 695 297 860 q 200 358 200 530 q 248 24 200 187 q 388 -293 297 -138 "},U:{x_min:0,x_max:813,ha:926,o:"m 813 362 q 697 79 813 187 q 405 -29 582 -29 q 114 78 229 -29 q 0 362 0 186 l 0 1013 l 210 1013 l 210 387 q 260 226 210 291 q 408 154 315 154 q 554 226 500 154 q 603 387 603 291 l 603 1013 l 813 1013 l 813 362 "},\u03B3:{x_min:.0625,x_max:729.234375,ha:815,o:"m 729 749 l 457 37 l 457 -278 l 257 -278 l 257 37 q 218 155 243 95 q 170 275 194 215 l 0 749 l 207 749 l 363 284 l 522 749 l 729 749 "},\u03B1:{x_min:-1,x_max:722,ha:835,o:"m 722 0 l 531 0 l 530 101 q 433 8 491 41 q 304 -25 375 -25 q 72 104 157 -25 q -1 372 -1 216 q 72 643 -1 530 q 308 775 158 775 q 433 744 375 775 q 528 656 491 713 l 528 749 l 722 749 l 722 0 m 361 601 q 233 527 277 601 q 196 375 196 464 q 232 224 196 288 q 358 144 277 144 q 487 217 441 144 q 528 370 528 281 q 489 523 528 457 q 361 601 443 601 "},F:{x_min:0,x_max:706.953125,ha:778,o:"m 706 837 l 206 837 l 206 606 l 645 606 l 645 431 l 206 431 l 206 0 l 0 0 l 0 1013 l 706 1013 l 706 837 "},"\xAD":{x_min:0,x_max:704.171875,ha:801,o:"m 704 297 l 0 297 l 0 450 l 704 450 l 704 297 "},":":{x_min:0,x_max:207,ha:304,o:"m 207 528 l 0 528 l 0 735 l 207 735 l 207 528 m 207 0 l 0 0 l 0 207 l 207 207 l 207 0 "},\u03A7:{x_min:0,x_max:894.453125,ha:978,o:"m 894 0 l 654 0 l 445 351 l 238 0 l 0 0 l 316 516 l 0 1013 l 238 1013 l 445 660 l 652 1013 l 894 1013 l 577 519 l 894 0 "},"*":{x_min:115,x_max:713,ha:828,o:"m 713 740 l 518 688 l 651 525 l 531 438 l 412 612 l 290 439 l 173 523 l 308 688 l 115 741 l 159 880 l 342 816 l 343 1013 l 482 1013 l 481 816 l 664 880 l 713 740 "},"\u2020":{x_min:0,x_max:809,ha:894,o:"m 509 804 l 809 804 l 809 621 l 509 621 l 509 0 l 299 0 l 299 621 l 0 621 l 0 804 l 299 804 l 299 1011 l 509 1011 l 509 804 "},"\xB0":{x_min:-1,x_max:363,ha:460,o:"m 181 808 q 46 862 94 808 q -1 992 -1 917 q 44 1118 -1 1066 q 181 1175 96 1175 q 317 1118 265 1175 q 363 991 363 1066 q 315 862 363 917 q 181 808 267 808 m 181 908 q 240 933 218 908 q 263 992 263 958 q 242 1051 263 1027 q 181 1075 221 1075 q 120 1050 142 1075 q 99 991 99 1026 q 120 933 99 958 q 181 908 142 908 "},V:{x_min:0,x_max:895.828125,ha:997,o:"m 895 1013 l 550 0 l 347 0 l 0 1013 l 231 1013 l 447 256 l 666 1013 l 895 1013 "},\u039E:{x_min:0,x_max:751.390625,ha:800,o:"m 733 826 l 5 826 l 5 1012 l 733 1012 l 733 826 m 681 432 l 65 432 l 65 617 l 681 617 l 681 432 m 751 0 l 0 0 l 0 183 l 751 183 l 751 0 "},"\xA0":{x_min:0,x_max:0,ha:853},\u03AB:{x_min:-.21875,x_max:836.171875,ha:914,o:"m 610 1046 l 454 1046 l 454 1215 l 610 1215 l 610 1046 m 369 1046 l 212 1046 l 212 1215 l 369 1215 l 369 1046 m 836 1012 l 532 376 l 532 0 l 322 0 l 322 376 l 0 1012 l 208 1012 l 427 576 l 626 1012 l 836 1012 "},"0":{x_min:51,x_max:779,ha:828,o:"m 415 -26 q 142 129 242 -26 q 51 476 51 271 q 141 825 51 683 q 415 984 242 984 q 687 825 585 984 q 779 476 779 682 q 688 131 779 271 q 415 -26 587 -26 m 415 137 q 529 242 485 137 q 568 477 568 338 q 530 713 568 619 q 415 821 488 821 q 303 718 344 821 q 262 477 262 616 q 301 237 262 337 q 415 137 341 137 "},"\u201D":{x_min:0,x_max:469,ha:567,o:"m 192 834 q 137 692 192 751 q 0 626 83 634 l 0 697 q 101 831 101 723 l 0 831 l 0 1013 l 192 1013 l 192 834 m 469 834 q 414 692 469 751 q 277 626 360 634 l 277 697 q 379 831 379 723 l 277 831 l 277 1013 l 469 1013 l 469 834 "},"@":{x_min:0,x_max:1276,ha:1374,o:"m 1115 -52 q 895 -170 1015 -130 q 647 -211 776 -211 q 158 -34 334 -211 q 0 360 0 123 q 179 810 0 621 q 698 1019 377 1019 q 1138 859 981 1019 q 1276 514 1276 720 q 1173 210 1276 335 q 884 75 1062 75 q 784 90 810 75 q 737 186 749 112 q 647 104 698 133 q 532 75 596 75 q 360 144 420 75 q 308 308 308 205 q 398 568 308 451 q 638 696 497 696 q 731 671 690 696 q 805 604 772 647 l 840 673 l 964 673 q 886 373 915 490 q 856 239 856 257 q 876 201 856 214 q 920 188 895 188 q 1084 284 1019 188 q 1150 511 1150 380 q 1051 779 1150 672 q 715 905 934 905 q 272 734 439 905 q 121 363 121 580 q 250 41 121 170 q 647 -103 394 -103 q 863 -67 751 -103 q 1061 26 975 -32 l 1115 -52 m 769 483 q 770 500 770 489 q 733 567 770 539 q 651 596 695 596 q 508 504 566 596 q 457 322 457 422 q 483 215 457 256 q 561 175 509 175 q 671 221 625 175 q 733 333 718 268 l 769 483 "},\u038A:{x_min:0,x_max:619,ha:732,o:"m 313 1035 l 98 780 l 0 780 l 136 1035 l 313 1035 m 619 0 l 411 0 l 411 1012 l 619 1012 l 619 0 "},i:{x_min:14,x_max:214,ha:326,o:"m 214 830 l 14 830 l 14 1013 l 214 1013 l 214 830 m 214 0 l 14 0 l 14 748 l 214 748 l 214 0 "},\u0392:{x_min:0,x_max:835,ha:961,o:"m 675 547 q 791 450 747 518 q 835 304 835 383 q 718 75 835 158 q 461 0 612 0 l 0 0 l 0 1013 l 477 1013 q 697 951 609 1013 q 797 754 797 880 q 766 630 797 686 q 675 547 734 575 m 439 621 q 539 646 496 621 q 590 730 590 676 q 537 814 590 785 q 436 838 494 838 l 199 838 l 199 621 l 439 621 m 445 182 q 561 211 513 182 q 618 311 618 247 q 565 410 618 375 q 444 446 512 446 l 199 446 l 199 182 l 445 182 "},\u03C5:{x_min:0,x_max:656,ha:767,o:"m 656 416 q 568 55 656 145 q 326 -25 490 -25 q 59 97 137 -25 q 0 369 0 191 l 0 749 l 200 749 l 200 369 q 216 222 200 268 q 326 142 245 142 q 440 247 411 142 q 456 422 456 304 l 456 749 l 656 749 l 656 416 "},"]":{x_min:0,x_max:349,ha:446,o:"m 349 -300 l 0 -300 l 0 -154 l 163 -154 l 163 866 l 0 866 l 0 1013 l 349 1013 l 349 -300 "},m:{x_min:0,x_max:1065,ha:1174,o:"m 1065 0 l 866 0 l 866 483 q 836 564 866 532 q 759 596 807 596 q 663 555 700 596 q 627 454 627 514 l 627 0 l 433 0 l 433 481 q 403 563 433 531 q 323 596 374 596 q 231 554 265 596 q 197 453 197 513 l 197 0 l 0 0 l 0 748 l 189 748 l 189 665 q 279 745 226 715 q 392 775 333 775 q 509 744 455 775 q 606 659 563 713 q 695 744 640 713 q 814 775 749 775 q 992 702 920 775 q 1065 523 1065 630 l 1065 0 "},\u03C7:{x_min:0,x_max:759.71875,ha:847,o:"m 759 -299 l 548 -299 l 379 66 l 215 -299 l 0 -299 l 261 233 l 13 749 l 230 749 l 379 400 l 527 749 l 738 749 l 500 238 l 759 -299 "},"8":{x_min:57,x_max:770,ha:828,o:"m 625 516 q 733 416 697 477 q 770 284 770 355 q 675 69 770 161 q 415 -29 574 -29 q 145 65 244 -29 q 57 273 57 150 q 93 413 57 350 q 204 516 130 477 q 112 609 142 556 q 83 718 83 662 q 177 905 83 824 q 414 986 272 986 q 650 904 555 986 q 745 715 745 822 q 716 608 745 658 q 625 516 688 558 m 414 590 q 516 624 479 590 q 553 706 553 659 q 516 791 553 755 q 414 828 480 828 q 311 792 348 828 q 275 706 275 757 q 310 624 275 658 q 414 590 345 590 m 413 135 q 527 179 487 135 q 564 279 564 218 q 525 386 564 341 q 411 436 482 436 q 298 387 341 436 q 261 282 261 344 q 300 178 261 222 q 413 135 340 135 "},\u03AF:{x_min:42,x_max:371.171875,ha:389,o:"m 242 0 l 42 0 l 42 748 l 242 748 l 242 0 m 371 1039 l 169 823 l 71 823 l 193 1039 l 371 1039 "},\u0396:{x_min:0,x_max:804.171875,ha:886,o:"m 804 835 l 251 182 l 793 182 l 793 0 l 0 0 l 0 176 l 551 829 l 11 829 l 11 1012 l 804 1012 l 804 835 "},R:{x_min:0,x_max:836.109375,ha:947,o:"m 836 0 l 608 0 q 588 53 596 20 q 581 144 581 86 q 581 179 581 162 q 581 215 581 197 q 553 345 581 306 q 428 393 518 393 l 208 393 l 208 0 l 0 0 l 0 1013 l 491 1013 q 720 944 630 1013 q 819 734 819 869 q 778 584 819 654 q 664 485 738 513 q 757 415 727 463 q 794 231 794 358 l 794 170 q 800 84 794 116 q 836 31 806 51 l 836 0 m 462 838 l 208 838 l 208 572 l 452 572 q 562 604 517 572 q 612 704 612 640 q 568 801 612 765 q 462 838 525 838 "},o:{x_min:0,x_max:764,ha:871,o:"m 380 -26 q 105 86 211 -26 q 0 371 0 199 q 104 660 0 545 q 380 775 209 775 q 658 659 552 775 q 764 371 764 544 q 658 86 764 199 q 380 -26 552 -26 m 379 141 q 515 216 466 141 q 557 373 557 280 q 515 530 557 465 q 379 607 466 607 q 245 530 294 607 q 204 373 204 465 q 245 217 204 282 q 379 141 294 141 "},"5":{x_min:59,x_max:767,ha:828,o:"m 767 319 q 644 59 767 158 q 382 -29 533 -29 q 158 43 247 -29 q 59 264 59 123 l 252 264 q 295 165 252 201 q 400 129 339 129 q 512 172 466 129 q 564 308 564 220 q 514 437 564 387 q 398 488 464 488 q 329 472 361 488 q 271 420 297 456 l 93 428 l 157 958 l 722 958 l 722 790 l 295 790 l 271 593 q 348 635 306 621 q 431 649 389 649 q 663 551 560 649 q 767 319 767 453 "},"7":{x_min:65.28125,x_max:762.5,ha:828,o:"m 762 808 q 521 435 604 626 q 409 0 438 244 l 205 0 q 313 422 227 234 q 548 789 387 583 l 65 789 l 65 958 l 762 958 l 762 808 "},K:{x_min:0,x_max:900,ha:996,o:"m 900 0 l 647 0 l 316 462 l 208 355 l 208 0 l 0 0 l 0 1013 l 208 1013 l 208 595 l 604 1013 l 863 1013 l 461 603 l 900 0 "},",":{x_min:0,x_max:206,ha:303,o:"m 206 5 q 150 -151 206 -88 q 0 -238 94 -213 l 0 -159 q 84 -100 56 -137 q 111 -2 111 -62 l 0 -2 l 0 205 l 206 205 l 206 5 "},d:{x_min:0,x_max:722,ha:836,o:"m 722 0 l 530 0 l 530 101 q 303 -26 449 -26 q 72 103 155 -26 q 0 373 0 214 q 72 642 0 528 q 305 775 156 775 q 433 743 373 775 q 530 656 492 712 l 530 1013 l 722 1013 l 722 0 m 361 600 q 234 523 280 600 q 196 372 196 458 q 233 220 196 286 q 358 143 278 143 q 489 216 442 143 q 530 369 530 280 q 491 522 530 456 q 361 600 443 600 "},"\xA8":{x_min:212,x_max:609,ha:933,o:"m 609 1046 l 453 1046 l 453 1216 l 609 1216 l 609 1046 m 369 1046 l 212 1046 l 212 1216 l 369 1216 l 369 1046 "},E:{x_min:0,x_max:761.109375,ha:824,o:"m 761 0 l 0 0 l 0 1013 l 734 1013 l 734 837 l 206 837 l 206 621 l 690 621 l 690 446 l 206 446 l 206 186 l 761 186 l 761 0 "},Y:{x_min:0,x_max:836,ha:931,o:"m 836 1013 l 532 376 l 532 0 l 322 0 l 322 376 l 0 1013 l 208 1013 l 427 576 l 626 1013 l 836 1013 "},'"':{x_min:0,x_max:357,ha:454,o:"m 357 604 l 225 604 l 225 988 l 357 988 l 357 604 m 132 604 l 0 604 l 0 988 l 132 988 l 132 604 "},"\u2039":{x_min:35.984375,x_max:791.671875,ha:828,o:"m 791 17 l 36 352 l 35 487 l 791 823 l 791 672 l 229 421 l 791 168 l 791 17 "},"\u201E":{x_min:0,x_max:483,ha:588,o:"m 206 5 q 150 -151 206 -88 q 0 -238 94 -213 l 0 -159 q 84 -100 56 -137 q 111 -2 111 -62 l 0 -2 l 0 205 l 206 205 l 206 5 m 483 5 q 427 -151 483 -88 q 277 -238 371 -213 l 277 -159 q 361 -100 334 -137 q 388 -2 388 -62 l 277 -2 l 277 205 l 483 205 l 483 5 "},\u03B4:{x_min:6,x_max:732,ha:835,o:"m 732 352 q 630 76 732 177 q 354 -25 529 -25 q 101 74 197 -25 q 6 333 6 174 q 89 581 6 480 q 323 690 178 690 q 66 864 201 787 l 66 1013 l 669 1013 l 669 856 l 348 856 q 532 729 461 789 q 673 566 625 651 q 732 352 732 465 m 419 551 q 259 496 321 551 q 198 344 198 441 q 238 208 198 267 q 357 140 283 140 q 484 203 437 140 q 526 344 526 260 q 499 466 526 410 q 419 551 473 521 "},\u03AD:{x_min:16.671875,x_max:652.78125,ha:742,o:"m 652 259 q 565 49 652 123 q 340 -25 479 -25 q 102 39 188 -25 q 16 197 16 104 q 45 299 16 250 q 134 390 75 348 q 58 456 86 419 q 25 552 25 502 q 120 717 25 653 q 322 776 208 776 q 537 710 456 776 q 625 508 625 639 l 445 508 q 415 585 445 563 q 327 608 386 608 q 254 590 293 608 q 215 544 215 573 q 252 469 215 490 q 336 453 280 453 q 369 455 347 453 q 400 456 391 456 l 400 308 l 329 308 q 247 291 280 308 q 204 223 204 269 q 255 154 204 172 q 345 143 286 143 q 426 174 398 143 q 454 259 454 206 l 652 259 m 579 1039 l 377 823 l 279 823 l 401 1039 l 579 1039 "},\u03C9:{x_min:0,x_max:945,ha:1051,o:"m 565 323 l 565 289 q 577 190 565 221 q 651 142 597 142 q 718 189 694 142 q 742 365 742 237 q 703 565 742 462 q 610 749 671 650 l 814 749 q 910 547 876 650 q 945 337 945 444 q 874 96 945 205 q 668 -29 793 -29 q 551 0 608 -29 q 470 78 495 30 q 390 0 444 28 q 276 -29 337 -29 q 69 96 149 -29 q 0 337 0 204 q 36 553 0 444 q 130 749 68 650 l 334 749 q 241 565 273 650 q 203 365 203 461 q 219 222 203 279 q 292 142 243 142 q 360 183 342 142 q 373 271 373 211 q 372 298 372 285 q 372 323 372 311 l 372 528 l 566 528 l 565 323 "},"\xB4":{x_min:0,x_max:132,ha:299,o:"m 132 604 l 0 604 l 0 988 l 132 988 l 132 604 "},"\xB1":{x_min:29,x_max:798,ha:828,o:"m 798 480 l 484 480 l 484 254 l 344 254 l 344 480 l 29 480 l 29 615 l 344 615 l 344 842 l 484 842 l 484 615 l 798 615 l 798 480 m 798 0 l 29 0 l 29 136 l 798 136 l 798 0 "},"|":{x_min:0,x_max:143,ha:240,o:"m 143 462 l 0 462 l 0 984 l 143 984 l 143 462 m 143 -242 l 0 -242 l 0 280 l 143 280 l 143 -242 "},\u03CB:{x_min:0,x_max:656,ha:767,o:"m 535 810 l 406 810 l 406 952 l 535 952 l 535 810 m 271 810 l 142 810 l 142 952 l 271 952 l 271 810 m 656 417 q 568 55 656 146 q 326 -25 490 -25 q 59 97 137 -25 q 0 369 0 192 l 0 748 l 200 748 l 200 369 q 216 222 200 268 q 326 142 245 142 q 440 247 411 142 q 456 422 456 304 l 456 748 l 656 748 l 656 417 "},"\xA7":{x_min:0,x_max:633,ha:731,o:"m 633 469 q 601 356 633 406 q 512 274 569 305 q 570 197 548 242 q 593 105 593 152 q 501 -76 593 -5 q 301 -142 416 -142 q 122 -82 193 -142 q 43 108 43 -15 l 212 108 q 251 27 220 53 q 321 1 283 1 q 389 23 360 1 q 419 83 419 46 q 310 194 419 139 q 108 297 111 295 q 0 476 0 372 q 33 584 0 537 q 120 659 62 626 q 72 720 91 686 q 53 790 53 755 q 133 978 53 908 q 312 1042 207 1042 q 483 984 412 1042 q 574 807 562 921 l 409 807 q 379 875 409 851 q 307 900 349 900 q 244 881 270 900 q 218 829 218 862 q 324 731 218 781 q 524 636 506 647 q 633 469 633 565 m 419 334 q 473 411 473 372 q 451 459 473 436 q 390 502 430 481 l 209 595 q 167 557 182 577 q 153 520 153 537 q 187 461 153 491 q 263 413 212 440 l 419 334 "},b:{x_min:0,x_max:722,ha:822,o:"m 416 -26 q 289 6 346 -26 q 192 101 232 39 l 192 0 l 0 0 l 0 1013 l 192 1013 l 192 656 q 286 743 226 712 q 415 775 346 775 q 649 644 564 775 q 722 374 722 533 q 649 106 722 218 q 416 -26 565 -26 m 361 600 q 232 524 279 600 q 192 371 192 459 q 229 221 192 284 q 357 145 275 145 q 487 221 441 145 q 526 374 526 285 q 488 523 526 460 q 361 600 442 600 "},q:{x_min:0,x_max:722,ha:833,o:"m 722 -298 l 530 -298 l 530 97 q 306 -25 449 -25 q 73 104 159 -25 q 0 372 0 216 q 72 643 0 529 q 305 775 156 775 q 430 742 371 775 q 530 654 488 709 l 530 750 l 722 750 l 722 -298 m 360 601 q 234 527 278 601 q 197 378 197 466 q 233 225 197 291 q 357 144 277 144 q 488 217 441 144 q 530 370 530 282 q 491 523 530 459 q 360 601 443 601 "},\u03A9:{x_min:-.03125,x_max:1008.53125,ha:1108,o:"m 1008 0 l 589 0 l 589 199 q 717 368 670 265 q 764 580 764 471 q 698 778 764 706 q 504 855 629 855 q 311 773 380 855 q 243 563 243 691 q 289 360 243 458 q 419 199 336 262 l 419 0 l 0 0 l 0 176 l 202 176 q 77 355 123 251 q 32 569 32 459 q 165 908 32 776 q 505 1040 298 1040 q 844 912 711 1040 q 977 578 977 785 q 931 362 977 467 q 805 176 886 256 l 1008 176 l 1008 0 "},\u03CD:{x_min:0,x_max:656,ha:767,o:"m 656 417 q 568 55 656 146 q 326 -25 490 -25 q 59 97 137 -25 q 0 369 0 192 l 0 748 l 200 748 l 201 369 q 218 222 201 269 q 326 142 245 142 q 440 247 411 142 q 456 422 456 304 l 456 748 l 656 748 l 656 417 m 579 1039 l 378 823 l 279 823 l 401 1039 l 579 1039 "},z:{x_min:0,x_max:663.890625,ha:753,o:"m 663 0 l 0 0 l 0 154 l 411 591 l 25 591 l 25 749 l 650 749 l 650 584 l 245 165 l 663 165 l 663 0 "},"\u2122":{x_min:0,x_max:951,ha:1063,o:"m 405 921 l 255 921 l 255 506 l 149 506 l 149 921 l 0 921 l 0 1013 l 405 1013 l 405 921 m 951 506 l 852 506 l 852 916 l 750 506 l 643 506 l 539 915 l 539 506 l 442 506 l 442 1013 l 595 1012 l 695 625 l 794 1013 l 951 1013 l 951 506 "},\u03AE:{x_min:0,x_max:669,ha:779,o:"m 669 -278 l 469 -278 l 469 390 q 448 526 469 473 q 348 606 417 606 q 244 553 288 606 q 201 441 201 501 l 201 0 l 0 0 l 0 749 l 201 749 l 201 665 q 301 744 244 715 q 423 774 359 774 q 606 685 538 774 q 669 484 669 603 l 669 -278 m 495 1039 l 293 823 l 195 823 l 317 1039 l 495 1039 "},\u0398:{x_min:0,x_max:993,ha:1092,o:"m 497 -29 q 133 127 272 -29 q 0 505 0 277 q 133 883 0 733 q 497 1040 272 1040 q 861 883 722 1040 q 993 505 993 733 q 861 127 993 277 q 497 -29 722 -29 m 497 154 q 711 266 631 154 q 782 506 782 367 q 712 746 782 648 q 497 858 634 858 q 281 746 361 858 q 211 506 211 648 q 280 266 211 365 q 497 154 359 154 m 676 430 l 316 430 l 316 593 l 676 593 l 676 430 "},"\xAE":{x_min:3,x_max:1007,ha:1104,o:"m 507 -6 q 129 153 269 -6 q 3 506 3 298 q 127 857 3 713 q 502 1017 266 1017 q 880 855 740 1017 q 1007 502 1007 711 q 882 152 1007 295 q 507 -6 743 -6 m 502 934 q 184 800 302 934 q 79 505 79 680 q 184 210 79 331 q 501 76 302 76 q 819 210 701 76 q 925 507 925 331 q 820 800 925 682 q 502 934 704 934 m 782 190 l 639 190 q 627 225 632 202 q 623 285 623 248 l 623 326 q 603 411 623 384 q 527 439 584 439 l 388 439 l 388 190 l 257 190 l 257 829 l 566 829 q 709 787 654 829 q 772 654 772 740 q 746 559 772 604 q 675 497 720 514 q 735 451 714 483 q 756 341 756 419 l 756 299 q 760 244 756 265 q 782 212 764 223 l 782 190 m 546 718 l 388 718 l 388 552 l 541 552 q 612 572 584 552 q 641 635 641 593 q 614 695 641 672 q 546 718 587 718 "},"~":{x_min:0,x_max:851,ha:949,o:"m 851 968 q 795 750 851 831 q 599 656 730 656 q 406 744 506 656 q 259 832 305 832 q 162 775 193 832 q 139 656 139 730 l 0 656 q 58 871 0 787 q 251 968 124 968 q 442 879 341 968 q 596 791 544 791 q 691 849 663 791 q 712 968 712 892 l 851 968 "},\u0395:{x_min:0,x_max:761.546875,ha:824,o:"m 761 0 l 0 0 l 0 1012 l 735 1012 l 735 836 l 206 836 l 206 621 l 690 621 l 690 446 l 206 446 l 206 186 l 761 186 l 761 0 "},"\xB3":{x_min:0,x_max:467,ha:564,o:"m 467 555 q 393 413 467 466 q 229 365 325 365 q 70 413 134 365 q 0 565 0 467 l 123 565 q 163 484 131 512 q 229 461 190 461 q 299 486 269 461 q 329 553 329 512 q 281 627 329 607 q 187 641 248 641 l 187 722 q 268 737 237 722 q 312 804 312 758 q 285 859 312 837 q 224 882 259 882 q 165 858 189 882 q 135 783 140 834 l 12 783 q 86 930 20 878 q 230 976 145 976 q 379 931 314 976 q 444 813 444 887 q 423 744 444 773 q 365 695 402 716 q 439 640 412 676 q 467 555 467 605 "},"[":{x_min:0,x_max:347.21875,ha:444,o:"m 347 -300 l 0 -300 l 0 1013 l 347 1013 l 347 866 l 188 866 l 188 -154 l 347 -154 l 347 -300 "},L:{x_min:0,x_max:704.171875,ha:763,o:"m 704 0 l 0 0 l 0 1013 l 208 1013 l 208 186 l 704 186 l 704 0 "},\u03C3:{x_min:0,x_max:851.3125,ha:940,o:"m 851 594 l 712 594 q 761 369 761 485 q 658 83 761 191 q 379 -25 555 -25 q 104 87 208 -25 q 0 372 0 200 q 103 659 0 544 q 378 775 207 775 q 464 762 407 775 q 549 750 521 750 l 851 750 l 851 594 m 379 142 q 515 216 466 142 q 557 373 557 280 q 515 530 557 465 q 379 608 465 608 q 244 530 293 608 q 203 373 203 465 q 244 218 203 283 q 379 142 293 142 "},\u03B6:{x_min:0,x_max:622,ha:701,o:"m 622 -32 q 604 -158 622 -98 q 551 -278 587 -218 l 373 -278 q 426 -180 406 -229 q 446 -80 446 -131 q 421 -22 446 -37 q 354 -8 397 -8 q 316 -9 341 -8 q 280 -11 291 -11 q 75 69 150 -11 q 0 283 0 150 q 87 596 0 437 q 291 856 162 730 l 47 856 l 47 1013 l 592 1013 l 592 904 q 317 660 422 800 q 197 318 197 497 q 306 141 197 169 q 510 123 408 131 q 622 -32 622 102 "},\u03B8:{x_min:0,x_max:714,ha:817,o:"m 357 1022 q 633 833 534 1022 q 714 486 714 679 q 634 148 714 288 q 354 -25 536 -25 q 79 147 175 -25 q 0 481 0 288 q 79 831 0 679 q 357 1022 177 1022 m 510 590 q 475 763 510 687 q 351 862 430 862 q 233 763 272 862 q 204 590 204 689 l 510 590 m 510 440 l 204 440 q 233 251 204 337 q 355 131 274 131 q 478 248 434 131 q 510 440 510 337 "},\u039F:{x_min:0,x_max:995,ha:1092,o:"m 497 -29 q 133 127 272 -29 q 0 505 0 277 q 132 883 0 733 q 497 1040 270 1040 q 861 883 722 1040 q 995 505 995 733 q 862 127 995 277 q 497 -29 724 -29 m 497 154 q 711 266 632 154 q 781 506 781 365 q 711 745 781 647 q 497 857 632 857 q 283 747 361 857 q 213 506 213 647 q 282 266 213 365 q 497 154 361 154 "},\u0393:{x_min:0,x_max:703.84375,ha:742,o:"m 703 836 l 208 836 l 208 0 l 0 0 l 0 1012 l 703 1012 l 703 836 "}," ":{x_min:0,x_max:0,ha:375},"%":{x_min:0,x_max:1111,ha:1213,o:"m 861 484 q 1048 404 979 484 q 1111 228 1111 332 q 1048 51 1111 123 q 859 -29 979 -29 q 672 50 740 -29 q 610 227 610 122 q 672 403 610 331 q 861 484 741 484 m 861 120 q 939 151 911 120 q 967 226 967 183 q 942 299 967 270 q 861 333 912 333 q 783 301 811 333 q 756 226 756 269 q 783 151 756 182 q 861 120 810 120 m 904 984 l 316 -28 l 205 -29 l 793 983 l 904 984 m 250 984 q 436 904 366 984 q 499 730 499 832 q 436 552 499 626 q 248 472 366 472 q 62 552 132 472 q 0 728 0 624 q 62 903 0 831 q 250 984 132 984 m 249 835 q 169 801 198 835 q 140 725 140 768 q 167 652 140 683 q 247 621 195 621 q 327 654 298 621 q 357 730 357 687 q 329 803 357 772 q 249 835 301 835 "},P:{x_min:0,x_max:771,ha:838,o:"m 208 361 l 208 0 l 0 0 l 0 1013 l 450 1013 q 682 919 593 1013 q 771 682 771 826 q 687 452 771 544 q 466 361 604 361 l 208 361 m 421 837 l 208 837 l 208 544 l 410 544 q 525 579 480 544 q 571 683 571 615 q 527 792 571 747 q 421 837 484 837 "},\u0388:{x_min:0,x_max:1172.546875,ha:1235,o:"m 1172 0 l 411 0 l 411 1012 l 1146 1012 l 1146 836 l 617 836 l 617 621 l 1101 621 l 1101 446 l 617 446 l 617 186 l 1172 186 l 1172 0 m 313 1035 l 98 780 l 0 780 l 136 1035 l 313 1035 "},\u038F:{x_min:.4375,x_max:1189.546875,ha:1289,o:"m 1189 0 l 770 0 l 770 199 q 897 369 849 263 q 945 580 945 474 q 879 778 945 706 q 685 855 810 855 q 492 773 561 855 q 424 563 424 691 q 470 360 424 458 q 600 199 517 262 l 600 0 l 180 0 l 180 176 l 383 176 q 258 355 304 251 q 213 569 213 459 q 346 908 213 776 q 686 1040 479 1040 q 1025 912 892 1040 q 1158 578 1158 785 q 1112 362 1158 467 q 986 176 1067 256 l 1189 176 l 1189 0 m 314 1092 l 99 837 l 0 837 l 136 1092 l 314 1092 "},_:{x_min:61.109375,x_max:766.671875,ha:828,o:"m 766 -333 l 61 -333 l 61 -190 l 766 -190 l 766 -333 "},\u03AA:{x_min:-56,x_max:342,ha:503,o:"m 342 1046 l 186 1046 l 186 1215 l 342 1215 l 342 1046 m 101 1046 l -56 1046 l -56 1215 l 101 1215 l 101 1046 m 249 0 l 41 0 l 41 1012 l 249 1012 l 249 0 "},"+":{x_min:43,x_max:784,ha:828,o:"m 784 353 l 483 353 l 483 0 l 343 0 l 343 353 l 43 353 l 43 489 l 343 489 l 343 840 l 483 840 l 483 489 l 784 489 l 784 353 "},"\xBD":{x_min:0,x_max:1090,ha:1188,o:"m 1090 380 q 992 230 1090 301 q 779 101 886 165 q 822 94 784 95 q 924 93 859 93 l 951 93 l 973 93 l 992 93 l 1009 93 q 1046 93 1027 93 q 1085 93 1066 93 l 1085 0 l 650 0 l 654 38 q 815 233 665 137 q 965 376 965 330 q 936 436 965 412 q 869 461 908 461 q 806 435 831 461 q 774 354 780 409 l 659 354 q 724 505 659 451 q 870 554 783 554 q 1024 506 958 554 q 1090 380 1090 459 m 868 998 l 268 -28 l 154 -27 l 757 999 l 868 998 m 272 422 l 147 422 l 147 799 l 0 799 l 0 875 q 126 900 91 875 q 170 973 162 926 l 272 973 l 272 422 "},\u03A1:{x_min:0,x_max:771,ha:838,o:"m 208 361 l 208 0 l 0 0 l 0 1012 l 450 1012 q 682 919 593 1012 q 771 681 771 826 q 687 452 771 544 q 466 361 604 361 l 208 361 m 422 836 l 209 836 l 209 544 l 410 544 q 525 579 480 544 q 571 683 571 614 q 527 791 571 747 q 422 836 484 836 "},"'":{x_min:0,x_max:192,ha:289,o:"m 192 834 q 137 692 192 751 q 0 626 82 632 l 0 697 q 101 830 101 726 l 0 830 l 0 1013 l 192 1013 l 192 834 "},\u00AA:{x_min:0,x_max:350,ha:393,o:"m 350 625 l 245 625 q 237 648 241 636 q 233 672 233 661 q 117 611 192 611 q 33 643 66 611 q 0 727 0 675 q 116 846 0 828 q 233 886 233 864 q 211 919 233 907 q 168 931 190 931 q 108 877 108 931 l 14 877 q 56 977 14 942 q 165 1013 98 1013 q 270 987 224 1013 q 329 903 329 955 l 329 694 q 332 661 329 675 q 350 641 336 648 l 350 625 m 233 774 l 233 809 q 151 786 180 796 q 97 733 97 768 q 111 700 97 712 q 149 689 126 689 q 210 713 187 689 q 233 774 233 737 "},"\u0385":{x_min:57,x_max:584,ha:753,o:"m 584 810 l 455 810 l 455 952 l 584 952 l 584 810 m 521 1064 l 305 810 l 207 810 l 343 1064 l 521 1064 m 186 810 l 57 810 l 57 952 l 186 952 l 186 810 "},T:{x_min:0,x_max:809,ha:894,o:"m 809 831 l 509 831 l 509 0 l 299 0 l 299 831 l 0 831 l 0 1013 l 809 1013 l 809 831 "},\u03A6:{x_min:0,x_max:949,ha:1032,o:"m 566 0 l 385 0 l 385 121 q 111 230 222 121 q 0 508 0 340 q 112 775 0 669 q 385 892 219 875 l 385 1013 l 566 1013 l 566 892 q 836 776 732 875 q 949 507 949 671 q 838 231 949 341 q 566 121 728 121 l 566 0 m 566 285 q 701 352 650 285 q 753 508 753 419 q 703 658 753 597 q 566 729 653 720 l 566 285 m 385 285 l 385 729 q 245 661 297 717 q 193 516 193 604 q 246 356 193 427 q 385 285 300 285 "},j:{x_min:-45.828125,x_max:242,ha:361,o:"m 242 830 l 42 830 l 42 1013 l 242 1013 l 242 830 m 242 -119 q 180 -267 242 -221 q 20 -308 127 -308 l -45 -308 l -45 -140 l -24 -140 q 25 -130 8 -140 q 42 -88 42 -120 l 42 748 l 242 748 l 242 -119 "},\u03A3:{x_min:0,x_max:772.21875,ha:849,o:"m 772 0 l 0 0 l 0 140 l 368 526 l 18 862 l 18 1012 l 740 1012 l 740 836 l 315 836 l 619 523 l 298 175 l 772 175 l 772 0 "},"1":{x_min:197.609375,x_max:628,ha:828,o:"m 628 0 l 434 0 l 434 674 l 197 674 l 197 810 q 373 837 318 810 q 468 984 450 876 l 628 984 l 628 0 "},"\u203A":{x_min:36.109375,x_max:792,ha:828,o:"m 792 352 l 36 17 l 36 168 l 594 420 l 36 672 l 36 823 l 792 487 l 792 352 "},"<":{x_min:35.984375,x_max:791.671875,ha:828,o:"m 791 17 l 36 352 l 35 487 l 791 823 l 791 672 l 229 421 l 791 168 l 791 17 "},"\xA3":{x_min:0,x_max:716.546875,ha:814,o:"m 716 38 q 603 -9 658 5 q 502 -24 548 -24 q 398 -10 451 -24 q 239 25 266 25 q 161 12 200 25 q 77 -29 122 0 l 0 113 q 110 211 81 174 q 151 315 151 259 q 117 440 151 365 l 0 440 l 0 515 l 73 515 q 35 610 52 560 q 15 710 15 671 q 119 910 15 831 q 349 984 216 984 q 570 910 480 984 q 693 668 674 826 l 501 668 q 455 791 501 746 q 353 830 414 830 q 256 795 298 830 q 215 705 215 760 q 249 583 215 655 q 283 515 266 548 l 479 515 l 479 440 l 309 440 q 316 394 313 413 q 319 355 319 374 q 287 241 319 291 q 188 135 263 205 q 262 160 225 152 q 332 168 298 168 q 455 151 368 168 q 523 143 500 143 q 588 152 558 143 q 654 189 617 162 l 716 38 "},t:{x_min:0,x_max:412,ha:511,o:"m 412 -6 q 349 -8 391 -6 q 287 -11 307 -11 q 137 38 177 -11 q 97 203 97 87 l 97 609 l 0 609 l 0 749 l 97 749 l 97 951 l 297 951 l 297 749 l 412 749 l 412 609 l 297 609 l 297 191 q 315 152 297 162 q 366 143 334 143 q 389 143 378 143 q 412 143 400 143 l 412 -6 "},"\xAC":{x_min:0,x_max:704,ha:801,o:"m 704 93 l 551 93 l 551 297 l 0 297 l 0 450 l 704 450 l 704 93 "},\u03BB:{x_min:0,x_max:701.390625,ha:775,o:"m 701 0 l 491 0 l 345 444 l 195 0 l 0 0 l 238 697 l 131 1013 l 334 1013 l 701 0 "},W:{x_min:0,x_max:1291.671875,ha:1399,o:"m 1291 1013 l 1002 0 l 802 0 l 645 777 l 490 0 l 288 0 l 0 1013 l 215 1013 l 388 298 l 534 1012 l 757 1013 l 904 299 l 1076 1013 l 1291 1013 "},">":{x_min:36.109375,x_max:792,ha:828,o:"m 792 352 l 36 17 l 36 168 l 594 420 l 36 672 l 36 823 l 792 487 l 792 352 "},v:{x_min:0,x_max:740.28125,ha:828,o:"m 740 749 l 473 0 l 266 0 l 0 749 l 222 749 l 373 211 l 529 749 l 740 749 "},\u03C4:{x_min:.28125,x_max:618.734375,ha:699,o:"m 618 593 l 409 593 l 409 0 l 210 0 l 210 593 l 0 593 l 0 749 l 618 749 l 618 593 "},\u03BE:{x_min:0,x_max:640,ha:715,o:"m 640 -14 q 619 -157 640 -84 q 563 -299 599 -230 l 399 -299 q 442 -194 433 -223 q 468 -85 468 -126 q 440 -25 468 -41 q 368 -10 412 -10 q 333 -11 355 -10 q 302 -13 311 -13 q 91 60 179 -13 q 0 259 0 138 q 56 426 0 354 q 201 530 109 493 q 106 594 144 553 q 65 699 65 642 q 94 787 65 747 q 169 856 123 828 l 22 856 l 22 1013 l 597 1013 l 597 856 l 497 857 q 345 840 398 857 q 257 736 257 812 q 366 614 257 642 q 552 602 416 602 l 552 446 l 513 446 q 313 425 379 446 q 199 284 199 389 q 312 162 199 184 q 524 136 418 148 q 640 -14 640 105 "},"&":{x_min:-1,x_max:910.109375,ha:1007,o:"m 910 -1 l 676 -1 l 607 83 q 291 -47 439 -47 q 50 100 135 -47 q -1 273 -1 190 q 51 431 -1 357 q 218 568 104 505 q 151 661 169 629 q 120 769 120 717 q 201 951 120 885 q 382 1013 276 1013 q 555 957 485 1013 q 635 789 635 894 q 584 644 635 709 q 468 539 548 597 l 615 359 q 664 527 654 440 l 844 527 q 725 223 824 359 l 910 -1 m 461 787 q 436 848 461 826 q 381 870 412 870 q 325 849 349 870 q 301 792 301 829 q 324 719 301 757 q 372 660 335 703 q 430 714 405 680 q 461 787 461 753 m 500 214 l 318 441 q 198 286 198 363 q 225 204 198 248 q 347 135 268 135 q 425 153 388 135 q 500 214 462 172 "},\u039B:{x_min:0,x_max:894.453125,ha:974,o:"m 894 0 l 666 0 l 447 757 l 225 0 l 0 0 l 344 1013 l 547 1013 l 894 0 "},I:{x_min:41,x_max:249,ha:365,o:"m 249 0 l 41 0 l 41 1013 l 249 1013 l 249 0 "},G:{x_min:0,x_max:971,ha:1057,o:"m 971 -1 l 829 -1 l 805 118 q 479 -29 670 -29 q 126 133 261 -29 q 0 509 0 286 q 130 884 0 737 q 493 1040 268 1040 q 790 948 659 1040 q 961 698 920 857 l 736 698 q 643 813 709 769 q 500 857 578 857 q 285 746 364 857 q 213 504 213 644 q 285 263 213 361 q 505 154 365 154 q 667 217 598 154 q 761 374 736 280 l 548 374 l 548 548 l 971 548 l 971 -1 "},\u03B0:{x_min:0,x_max:655,ha:767,o:"m 583 810 l 454 810 l 454 952 l 583 952 l 583 810 m 186 810 l 57 809 l 57 952 l 186 952 l 186 810 m 516 1039 l 315 823 l 216 823 l 338 1039 l 516 1039 m 655 417 q 567 55 655 146 q 326 -25 489 -25 q 59 97 137 -25 q 0 369 0 192 l 0 748 l 200 748 l 201 369 q 218 222 201 269 q 326 142 245 142 q 439 247 410 142 q 455 422 455 304 l 455 748 l 655 748 l 655 417 "},"`":{x_min:0,x_max:190,ha:288,o:"m 190 654 l 0 654 l 0 830 q 55 970 0 909 q 190 1040 110 1031 l 190 969 q 111 922 134 952 q 88 836 88 892 l 190 836 l 190 654 "},"\xB7":{x_min:0,x_max:207,ha:304,o:"m 207 528 l 0 528 l 0 735 l 207 735 l 207 528 "},\u03A5:{x_min:-.21875,x_max:836.171875,ha:914,o:"m 836 1013 l 532 376 l 532 0 l 322 0 l 322 376 l 0 1013 l 208 1013 l 427 576 l 626 1013 l 836 1013 "},r:{x_min:0,x_max:431.9375,ha:513,o:"m 431 564 q 269 536 320 564 q 200 395 200 498 l 200 0 l 0 0 l 0 748 l 183 748 l 183 618 q 285 731 224 694 q 431 768 345 768 l 431 564 "},x:{x_min:0,x_max:738.890625,ha:826,o:"m 738 0 l 504 0 l 366 238 l 230 0 l 0 0 l 252 382 l 11 749 l 238 749 l 372 522 l 502 749 l 725 749 l 488 384 l 738 0 "},\u03BC:{x_min:0,x_max:647,ha:754,o:"m 647 0 l 477 0 l 477 68 q 411 9 448 30 q 330 -11 374 -11 q 261 3 295 -11 q 199 43 226 18 l 199 -278 l 0 -278 l 0 749 l 199 749 l 199 358 q 216 222 199 268 q 322 152 244 152 q 435 240 410 152 q 448 401 448 283 l 448 749 l 647 749 l 647 0 "},h:{x_min:0,x_max:669,ha:782,o:"m 669 0 l 469 0 l 469 390 q 449 526 469 472 q 353 607 420 607 q 248 554 295 607 q 201 441 201 501 l 201 0 l 0 0 l 0 1013 l 201 1013 l 201 665 q 303 743 245 715 q 425 772 362 772 q 609 684 542 772 q 669 484 669 605 l 669 0 "},".":{x_min:0,x_max:206,ha:303,o:"m 206 0 l 0 0 l 0 207 l 206 207 l 206 0 "},\u03C6:{x_min:-1,x_max:921,ha:990,o:"m 542 -278 l 367 -278 l 367 -22 q 99 92 200 -22 q -1 376 -1 206 q 72 627 -1 520 q 288 769 151 742 l 288 581 q 222 495 243 550 q 202 378 202 439 q 240 228 202 291 q 367 145 285 157 l 367 776 l 515 776 q 807 667 694 776 q 921 379 921 558 q 815 93 921 209 q 542 -22 709 -22 l 542 -278 m 542 145 q 672 225 625 145 q 713 381 713 291 q 671 536 713 470 q 542 611 624 611 l 542 145 "},";":{x_min:0,x_max:208,ha:306,o:"m 208 528 l 0 528 l 0 735 l 208 735 l 208 528 m 208 6 q 152 -151 208 -89 q 0 -238 96 -212 l 0 -158 q 87 -100 61 -136 q 113 0 113 -65 l 0 0 l 0 207 l 208 207 l 208 6 "},f:{x_min:0,x_max:424,ha:525,o:"m 424 609 l 300 609 l 300 0 l 107 0 l 107 609 l 0 609 l 0 749 l 107 749 q 145 949 107 894 q 328 1019 193 1019 l 424 1015 l 424 855 l 362 855 q 312 841 324 855 q 300 797 300 827 q 300 773 300 786 q 300 749 300 761 l 424 749 l 424 609 "},"\u201C":{x_min:0,x_max:468,ha:567,o:"m 190 631 l 0 631 l 0 807 q 55 947 0 885 q 190 1017 110 1010 l 190 947 q 88 813 88 921 l 190 813 l 190 631 m 468 631 l 278 631 l 278 807 q 333 947 278 885 q 468 1017 388 1010 l 468 947 q 366 813 366 921 l 468 813 l 468 631 "},A:{x_min:0,x_max:966.671875,ha:1069,o:"m 966 0 l 747 0 l 679 208 l 286 208 l 218 0 l 0 0 l 361 1013 l 600 1013 l 966 0 m 623 376 l 480 810 l 340 376 l 623 376 "},"6":{x_min:57,x_max:771,ha:828,o:"m 744 734 l 544 734 q 500 802 533 776 q 425 828 466 828 q 315 769 359 828 q 264 571 264 701 q 451 638 343 638 q 691 537 602 638 q 771 315 771 449 q 683 79 771 176 q 420 -29 586 -29 q 134 123 227 -29 q 57 455 57 250 q 184 865 57 721 q 452 988 293 988 q 657 916 570 988 q 744 734 744 845 m 426 128 q 538 178 498 128 q 578 300 578 229 q 538 422 578 372 q 415 479 493 479 q 303 430 342 479 q 264 313 264 381 q 308 184 264 240 q 426 128 352 128 "},"\u2018":{x_min:0,x_max:190,ha:289,o:"m 190 631 l 0 631 l 0 807 q 55 947 0 885 q 190 1017 110 1010 l 190 947 q 88 813 88 921 l 190 813 l 190 631 "},\u03CA:{x_min:-55,x_max:337,ha:389,o:"m 337 810 l 208 810 l 208 952 l 337 952 l 337 810 m 74 810 l -55 810 l -55 952 l 74 952 l 74 810 m 242 0 l 42 0 l 42 748 l 242 748 l 242 0 "},\u03C0:{x_min:.5,x_max:838.890625,ha:938,o:"m 838 593 l 750 593 l 750 0 l 549 0 l 549 593 l 287 593 l 287 0 l 88 0 l 88 593 l 0 593 l 0 749 l 838 749 l 838 593 "},\u03AC:{x_min:-1,x_max:722,ha:835,o:"m 722 0 l 531 0 l 530 101 q 433 8 491 41 q 304 -25 375 -25 q 72 104 157 -25 q -1 372 -1 216 q 72 643 -1 530 q 308 775 158 775 q 433 744 375 775 q 528 656 491 713 l 528 749 l 722 749 l 722 0 m 361 601 q 233 527 277 601 q 196 375 196 464 q 232 224 196 288 q 358 144 277 144 q 487 217 441 144 q 528 370 528 281 q 489 523 528 457 q 361 601 443 601 m 579 1039 l 377 823 l 279 823 l 401 1039 l 579 1039 "},O:{x_min:0,x_max:994,ha:1094,o:"m 497 -29 q 133 127 272 -29 q 0 505 0 277 q 131 883 0 733 q 497 1040 270 1040 q 860 883 721 1040 q 994 505 994 733 q 862 127 994 277 q 497 -29 723 -29 m 497 154 q 710 266 631 154 q 780 506 780 365 q 710 745 780 647 q 497 857 631 857 q 283 747 361 857 q 213 506 213 647 q 282 266 213 365 q 497 154 361 154 "},n:{x_min:0,x_max:669,ha:782,o:"m 669 0 l 469 0 l 469 452 q 442 553 469 513 q 352 601 412 601 q 245 553 290 601 q 200 441 200 505 l 200 0 l 0 0 l 0 748 l 194 748 l 194 659 q 289 744 230 713 q 416 775 349 775 q 600 700 531 775 q 669 509 669 626 l 669 0 "},"3":{x_min:61,x_max:767,ha:828,o:"m 767 290 q 653 51 767 143 q 402 -32 548 -32 q 168 48 262 -32 q 61 300 61 140 l 250 300 q 298 173 250 219 q 405 132 343 132 q 514 169 471 132 q 563 282 563 211 q 491 405 563 369 q 343 432 439 432 l 343 568 q 472 592 425 568 q 534 701 534 626 q 493 793 534 758 q 398 829 453 829 q 306 789 344 829 q 268 669 268 749 l 80 669 q 182 909 80 823 q 410 986 274 986 q 633 916 540 986 q 735 719 735 840 q 703 608 735 656 q 615 522 672 561 q 727 427 687 486 q 767 290 767 369 "},"9":{x_min:58,x_max:769,ha:828,o:"m 769 492 q 646 90 769 232 q 384 -33 539 -33 q 187 35 271 -33 q 83 224 98 107 l 282 224 q 323 154 286 182 q 404 127 359 127 q 513 182 471 127 q 563 384 563 248 q 475 335 532 355 q 372 315 418 315 q 137 416 224 315 q 58 642 58 507 q 144 877 58 781 q 407 984 239 984 q 694 827 602 984 q 769 492 769 699 m 416 476 q 525 521 488 476 q 563 632 563 566 q 521 764 563 709 q 403 826 474 826 q 297 773 337 826 q 258 649 258 720 q 295 530 258 577 q 416 476 339 476 "},l:{x_min:41,x_max:240,ha:363,o:"m 240 0 l 41 0 l 41 1013 l 240 1013 l 240 0 "},"\xA4":{x_min:40.265625,x_max:727.203125,ha:825,o:"m 727 792 l 594 659 q 620 552 620 609 q 598 459 620 504 l 725 331 l 620 224 l 491 352 q 382 331 443 331 q 273 352 322 331 l 144 224 l 40 330 l 167 459 q 147 552 147 501 q 172 658 147 608 l 40 794 l 147 898 l 283 759 q 383 776 330 776 q 482 759 434 776 l 620 898 l 727 792 m 383 644 q 308 617 334 644 q 283 551 283 590 q 309 489 283 517 q 381 462 335 462 q 456 488 430 462 q 482 554 482 515 q 455 616 482 588 q 383 644 429 644 "},\u03BA:{x_min:0,x_max:691.84375,ha:779,o:"m 691 0 l 479 0 l 284 343 l 196 252 l 196 0 l 0 0 l 0 749 l 196 749 l 196 490 l 440 749 l 677 749 l 416 479 l 691 0 "},"4":{x_min:53,x_max:775.21875,ha:828,o:"m 775 213 l 660 213 l 660 0 l 470 0 l 470 213 l 53 213 l 53 384 l 416 958 l 660 958 l 660 370 l 775 370 l 775 213 m 474 364 l 474 786 l 204 363 l 474 364 "},p:{x_min:0,x_max:722,ha:824,o:"m 415 -26 q 287 4 346 -26 q 192 92 228 34 l 192 -298 l 0 -298 l 0 750 l 192 750 l 192 647 q 289 740 230 706 q 416 775 347 775 q 649 645 566 775 q 722 375 722 534 q 649 106 722 218 q 415 -26 564 -26 m 363 603 q 232 529 278 603 q 192 375 192 465 q 230 222 192 286 q 360 146 276 146 q 487 221 441 146 q 526 371 526 285 q 488 523 526 458 q 363 603 443 603 "},"\u2021":{x_min:0,x_max:809,ha:894,o:"m 299 621 l 0 621 l 0 804 l 299 804 l 299 1011 l 509 1011 l 509 804 l 809 804 l 809 621 l 509 621 l 509 387 l 809 387 l 809 205 l 509 205 l 509 0 l 299 0 l 299 205 l 0 205 l 0 387 l 299 387 l 299 621 "},\u03C8:{x_min:0,x_max:875,ha:979,o:"m 522 142 q 657 274 620 163 q 671 352 671 316 l 671 748 l 875 748 l 875 402 q 806 134 875 240 q 525 -22 719 -1 l 525 -278 l 349 -278 l 349 -22 q 65 135 152 -1 q 0 402 0 238 l 0 748 l 204 748 l 204 352 q 231 240 204 295 q 353 142 272 159 l 353 922 l 524 922 l 522 142 "},\u03B7:{x_min:0,x_max:669,ha:779,o:"m 669 -278 l 469 -278 l 469 390 q 448 526 469 473 q 348 606 417 606 q 244 553 288 606 q 201 441 201 501 l 201 0 l 0 0 l 0 749 l 201 749 l 201 665 q 301 744 244 715 q 423 774 359 774 q 606 685 538 774 q 669 484 669 603 l 669 -278 "}},cssFontWeight:"bold",ascender:1216,underlinePosition:-100,cssFontStyle:"normal",boundingBox:{yMin:-333,xMin:-162,yMax:1216,xMax:1681},resolution:1e3,original_font_information:{postscript_name:"Helvetiker-Bold",version_string:"Version 1.00 2004 initial release",vendor_url:"http://www.magenta.gr",full_font_name:"Helvetiker Bold",font_family_name:"Helvetiker",copyright:"Copyright (c) Magenta ltd, 2004.",description:"",trademark:"",designer:"",designer_url:"",unique_font_identifier:"Magenta ltd:Helvetiker Bold:22-10-104",license_url:"http://www.ellak.gr/fonts/MgOpen/license.html",license_description:`Copyright (c) 2004 by MAGENTA Ltd. All Rights Reserved.\r
\r
Permission is hereby granted, free of charge, to any person obtaining a copy of the fonts accompanying this license ("Fonts") and associated documentation files (the "Font Software"), to reproduce and distribute the Font Software, including without limitation the rights to use, copy, merge, publish, distribute, and/or sell copies of the Font Software, and to permit persons to whom the Font Software is furnished to do so, subject to the following conditions: \r
\r
The above copyright and this permission notice shall be included in all copies of one or more of the Font Software typefaces.\r
\r
The Font Software may be modified, altered, or added to, and in particular the designs of glyphs or characters in the Fonts may be modified and additional glyphs or characters may be added to the Fonts, only if the fonts are renamed to names not containing the word "MgOpen", or if the modifications are accepted for inclusion in the Font Software itself by the each appointed Administrator.\r
\r
This License becomes null and void to the extent applicable to Fonts or Font Software that has been modified and is distributed under the "MgOpen" name.\r
\r
The Font Software may be sold as part of a larger software package but no copy of one or more of the Font Software typefaces may be sold by itself. \r
\r
THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL MAGENTA OR PERSONS OR BODIES IN CHARGE OF ADMINISTRATION AND MAINTENANCE OF THE FONT SOFTWARE BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM OTHER DEALINGS IN THE FONT SOFTWARE.`,manufacturer_name:"Magenta ltd",font_sub_family_name:"Bold"},descender:-334,familyName:"Helvetiker",lineHeight:1549,underlineThickness:50};var Le=[-108.09,-10.4,10.74],fr=[-108.6,-182.37,181.76],Bc=[26.9,39,51.82,62.93,75.89,88],kc=14751543,ld="M368.71 369.87 C367.92 369.78 367.64 369.69 367.22 369.38 C366.73 369.02 366.63 369 365.57 369 C364.21 369 363.7 368.87 363.22 368.41 C362.9 368.1 362.74 368.06 361.82 367.99 C360.83 367.93 360.74 367.9 360.26 367.46 C359.81 367.06 359.67 367 359.12 367 C358.63 367 358.45 366.94 358.28 366.73 C357.74 366.06 357.63 366 357.01 366 C356.45 366 356.36 365.96 356.11 365.59 C355.73 365.05 355.65 365 355.03 365 C354.51 365 354.39 364.93 353.97 364.34 C353.88 364.22 353.52 364.04 353.16 363.95 C352.5 363.77 351.91 363.36 350.94 362.41 C350.64 362.11 350.32 361.88 350.21 361.88 C349.92 361.88 349.04 361.13 347.04 359.19 C345.61 357.8 345.22 357.34 345.11 356.96 C345.02 356.62 344.7 356.19 344.04 355.52 C343.53 354.99 343 354.36 342.87 354.12 C342.75 353.87 342.56 353.6 342.45 353.51 C342.35 353.43 342.17 353.08 342.06 352.74 C341.95 352.4 341.75 352.07 341.62 352 C341.15 351.75 341 351.48 341 350.93 C341 350.38 340.93 350.25 340.27 349.72 C340.06 349.55 340 349.37 340 348.91 C340 348.41 339.94 348.26 339.56 347.87 C339.23 347.53 339.09 347.26 339.02 346.79 C338.96 346.43 338.78 345.98 338.58 345.72 C338.21 345.23 338 344.29 338 343.06 C338 342.43 337.94 342.22 337.65 341.81 C337.18 341.15 337 340.09 337 337.99 C337 336.53 336.97 336.26 336.75 335.9 C336.5 335.49 336.5 335.3 336.5 300.09 C336.5 280.62 336.5 264.62 336.5 264.53 C336.5 264.45 336.67 264.29 336.88 264.19 C337.2 264.02 338.09 264 343.88 264.03 C350.27 264.06 350.53 264.07 350.7 264.3 C350.85 264.51 350.87 269.57 350.88 298.93 C350.89 317.84 350.93 334.13 350.98 335.12 C351.05 336.66 351.11 337 351.33 337.38 C351.67 337.94 352 339.27 352 340.1 C352 340.66 352.05 340.79 352.43 341.17 C352.74 341.48 352.88 341.75 352.94 342.16 C353 342.55 353.15 342.86 353.43 343.15 C353.69 343.43 353.87 343.77 353.92 344.1 C353.98 344.47 354.15 344.77 354.53 345.17 C355.39 346.08 355.76 346.59 355.89 347.07 C356.07 347.72 359.28 350.93 359.93 351.11 C360.41 351.24 360.92 351.61 361.81 352.45 C362.22 352.84 362.5 352.99 362.91 353.05 C363.3 353.11 363.57 353.25 363.87 353.55 C364.17 353.87 364.42 353.99 364.86 354.05 C365.31 354.11 365.55 354.23 365.88 354.56 C366.26 354.96 366.36 355 367.02 355 C367.87 355 368.28 355.14 368.82 355.61 C369.25 355.99 369.08 355.97 373.62 356.17 C374.21 356.2 374.85 356.28 375.04 356.36 C375.23 356.44 375.67 356.5 376 356.5 C376.33 356.5 376.77 356.44 376.96 356.36 C377.15 356.28 377.79 356.2 378.38 356.17 C382.95 355.98 382.63 356.02 383.32 355.56 C383.83 355.21 384.11 355.12 384.87 355.05 C385.64 354.98 385.85 354.9 386.2 354.6 C386.45 354.38 386.89 354.17 387.29 354.07 C387.66 353.99 388.16 353.77 388.4 353.59 C388.63 353.4 389.08 353.17 389.38 353.06 C389.69 352.95 390.05 352.72 390.19 352.55 C390.34 352.36 390.65 352.19 390.99 352.11 C391.43 352.01 391.75 351.79 392.54 351.03 C393.43 350.17 395.11 348.49 396.5 347.06 C396.83 346.73 397.03 346.38 397.11 346 C397.19 345.65 397.36 345.34 397.55 345.19 C397.72 345.05 397.95 344.69 398.06 344.38 C398.17 344.08 398.4 343.64 398.58 343.4 C398.76 343.17 398.98 342.7 399.06 342.37 C399.15 342.03 399.37 341.58 399.55 341.37 C399.91 340.94 399.95 340.81 400.12 339.6 C400.2 338.99 400.34 338.61 400.6 338.22 C400.97 337.69 400.98 337.66 401.05 335.56 C401.09 334.39 401.12 317.94 401.13 298.99 C401.13 269.56 401.15 264.51 401.3 264.3 C401.47 264.07 401.73 264.06 408.12 264.03 C413.91 264 414.8 264.02 415.12 264.19 C415.33 264.29 415.5 264.45 415.5 264.53 C415.5 264.62 415.5 280.39 415.5 299.59 C415.5 334.3 415.5 334.49 415.25 334.9 C415.03 335.27 415 335.53 415 337.38 C415 339.87 414.86 340.85 414.37 341.7 C414.06 342.24 414 342.48 414 343.2 C414 344.22 413.84 344.88 413.43 345.49 C413.2 345.84 412.88 346.92 412.88 347.33 C412.88 347.36 412.68 347.58 412.44 347.82 C412.06 348.2 412 348.34 412 348.88 C412 349.37 411.94 349.55 411.73 349.72 C411.14 350.2 411.03 350.36 410.95 350.9 C410.89 351.29 410.75 351.57 410.5 351.81 C410.3 352.01 410.04 352.43 409.93 352.76 C409.82 353.09 409.65 353.43 409.55 353.51 C409.44 353.6 409.25 353.87 409.13 354.12 C409 354.36 408.46 355 407.94 355.54 C407.35 356.13 406.93 356.68 406.86 356.92 C406.79 357.19 406.19 357.92 405.12 359.04 C403.79 360.43 403.39 360.77 402.98 360.88 C402.61 360.98 402.21 361.28 401.52 361.96 C400.99 362.47 400.36 363 400.12 363.13 C399.87 363.25 399.6 363.44 399.51 363.55 C399.43 363.65 399.08 363.83 398.74 363.94 C398.4 364.05 398.07 364.25 398 364.38 C397.75 364.85 397.48 365 396.93 365 C396.38 365 396.25 365.07 395.72 365.73 C395.56 365.93 395.37 366 394.94 366 C394.37 366 394.25 366.07 393.72 366.73 C393.55 366.94 393.37 367 392.88 367 C392.37 367 392.18 367.07 391.84 367.37 C391.27 367.86 390.88 368 390 368 C389.35 368 389.22 368.05 388.75 368.44 C388.46 368.68 388.13 368.88 388.02 368.88 C387.91 368.89 387.19 368.93 386.43 368.98 C385.28 369.06 384.98 369.12 384.69 369.35 C384.5 369.5 384.14 369.69 383.89 369.77 C383.34 369.95 370.23 370.04 368.71 369.87 Z M83.2 368.8 C83.02 368.63 83 366.88 83 351.43 L83 334.26 L82.62 333.83 C82.41 333.59 82.16 333.12 82.06 332.79 C81.96 332.45 81.72 332.02 81.51 331.82 C81.25 331.57 81.11 331.29 81.05 330.9 C80.97 330.36 80.86 330.2 80.27 329.72 C80.06 329.56 80 329.37 80 328.94 C80 328.51 79.94 328.32 79.73 328.15 C79.58 328.04 79.38 327.85 79.28 327.75 C79 327.45 78.17 325.98 78.01 325.49 C77.93 325.24 77.73 324.91 77.56 324.75 C77.39 324.59 77.17 324.17 77.07 323.82 C76.96 323.45 76.73 323.03 76.51 322.82 C76.25 322.57 76.11 322.29 76.05 321.9 C75.97 321.36 75.86 321.2 75.27 320.72 C75.06 320.56 75 320.37 75 319.94 C75 319.51 74.94 319.32 74.73 319.15 C74.58 319.04 74.38 318.85 74.28 318.75 C74 318.45 73.17 316.98 73.01 316.49 C72.93 316.24 72.73 315.91 72.56 315.75 C72.39 315.59 72.17 315.17 72.07 314.82 C71.96 314.45 71.73 314.03 71.51 313.82 C71.25 313.57 71.11 313.29 71.05 312.9 C70.97 312.36 70.86 312.2 70.27 311.72 C70.06 311.56 70 311.37 70 310.94 C70 310.51 69.94 310.32 69.73 310.15 C69.58 310.04 69.38 309.85 69.28 309.75 C69 309.45 68.17 307.98 68.01 307.49 C67.93 307.24 67.73 306.91 67.56 306.75 C67.39 306.59 67.17 306.17 67.07 305.82 C66.96 305.45 66.73 305.03 66.51 304.82 C66.25 304.57 66.11 304.29 66.05 303.9 C65.97 303.36 65.86 303.2 65.27 302.72 C65.06 302.56 65 302.37 65 301.94 C65 301.51 64.94 301.32 64.73 301.15 C64.58 301.04 64.38 300.85 64.28 300.75 C64 300.45 63.17 298.98 63.01 298.49 C62.93 298.24 62.73 297.91 62.56 297.75 C62.39 297.59 62.17 297.17 62.07 296.82 C61.96 296.45 61.73 296.03 61.51 295.82 C61.25 295.57 61.11 295.29 61.05 294.9 C60.97 294.36 60.86 294.2 60.27 293.72 C60.06 293.56 60 293.37 60 292.94 C60 292.51 59.94 292.32 59.73 292.15 C59.58 292.04 59.38 291.85 59.28 291.75 C59 291.45 58.17 289.98 58.01 289.49 C57.93 289.24 57.73 288.91 57.56 288.75 C57.39 288.59 57.17 288.17 57.07 287.82 C56.96 287.45 56.73 287.03 56.51 286.82 C56.25 286.57 56.11 286.29 56.05 285.9 C55.97 285.36 55.86 285.2 55.27 284.72 C55.06 284.56 55 284.37 55 283.94 C55 283.51 54.94 283.32 54.73 283.15 C54.58 283.04 54.38 282.85 54.28 282.75 C54 282.45 53.17 280.98 53.01 280.49 C52.93 280.24 52.73 279.91 52.56 279.75 C52.39 279.59 52.17 279.17 52.07 278.82 C51.96 278.45 51.73 278.03 51.51 277.82 C51.25 277.57 51.11 277.29 51.05 276.9 C50.97 276.36 50.86 276.2 50.27 275.72 C50.06 275.56 50 275.37 50 274.94 C50 274.51 49.94 274.32 49.73 274.15 C49.58 274.04 49.38 273.85 49.28 273.75 C49 273.45 48.17 271.98 48.01 271.49 C47.93 271.24 47.73 270.91 47.56 270.75 C47.39 270.59 47.17 270.17 47.07 269.82 C46.96 269.45 46.73 269.03 46.51 268.82 C46.25 268.57 46.11 268.29 46.05 267.91 C45.99 267.49 45.86 267.25 45.49 266.92 C45.23 266.68 44.98 266.33 44.94 266.15 C44.89 265.97 44.66 265.61 44.43 265.35 C43.96 264.83 43.89 264.5 44.2 264.2 C44.37 264.02 45.31 264 52.6 264 C62.09 264 61.53 263.93 61.91 265.12 C62.03 265.49 62.29 265.97 62.49 266.18 C62.74 266.43 62.89 266.75 62.95 267.12 C63.02 267.54 63.15 267.79 63.46 268.08 C63.79 268.38 63.91 268.61 63.99 269.12 C64.07 269.65 64.17 269.84 64.55 270.14 C64.8 270.35 65 270.59 65 270.68 C65 270.77 65.19 271.12 65.42 271.45 C65.65 271.79 65.91 272.29 66 272.56 C66.09 272.84 66.29 273.24 66.45 273.45 C66.61 273.66 66.83 274.07 66.93 274.37 C67.04 274.66 67.29 275.1 67.5 275.33 C67.72 275.58 67.91 275.96 67.95 276.27 C68 276.57 68.19 276.96 68.4 277.19 C68.59 277.42 68.84 277.88 68.94 278.21 C69.04 278.55 69.28 278.98 69.49 279.18 C69.75 279.43 69.89 279.71 69.95 280.11 C70.02 280.54 70.14 280.79 70.46 281.08 C70.79 281.38 70.91 281.61 70.99 282.12 C71.07 282.65 71.17 282.84 71.55 283.14 C71.8 283.35 72 283.59 72 283.68 C72 283.77 72.19 284.12 72.42 284.45 C72.65 284.79 72.91 285.29 73 285.56 C73.09 285.84 73.29 286.24 73.45 286.45 C73.61 286.66 73.83 287.07 73.93 287.37 C74.04 287.66 74.29 288.1 74.5 288.33 C74.72 288.58 74.91 288.96 74.95 289.27 C75 289.57 75.19 289.96 75.4 290.19 C75.59 290.42 75.84 290.88 75.94 291.21 C76.04 291.55 76.28 291.98 76.49 292.18 C76.75 292.43 76.89 292.71 76.95 293.11 C77.02 293.54 77.14 293.79 77.46 294.08 C77.79 294.38 77.91 294.61 77.99 295.12 C78.07 295.65 78.17 295.84 78.55 296.14 C78.8 296.35 79 296.59 79 296.68 C79 296.77 79.19 297.12 79.42 297.45 C79.65 297.79 79.91 298.29 80 298.56 C80.09 298.84 80.29 299.24 80.45 299.45 C80.61 299.66 80.83 300.07 80.93 300.37 C81.04 300.66 81.29 301.1 81.5 301.33 C81.72 301.58 81.91 301.96 81.95 302.27 C82 302.57 82.19 302.96 82.4 303.19 C82.59 303.42 82.84 303.88 82.94 304.21 C83.04 304.55 83.28 304.98 83.49 305.18 C83.75 305.43 83.89 305.71 83.95 306.11 C84.02 306.54 84.14 306.79 84.46 307.08 C84.79 307.38 84.91 307.61 84.99 308.12 C85.07 308.65 85.17 308.84 85.55 309.14 C85.8 309.35 86 309.59 86 309.68 C86 309.77 86.19 310.12 86.42 310.45 C86.65 310.79 86.91 311.29 87 311.56 C87.09 311.84 87.3 312.24 87.46 312.45 C87.62 312.67 87.84 313.09 87.95 313.4 C88.05 313.71 88.28 314.1 88.45 314.26 C88.62 314.42 88.84 314.85 88.95 315.21 C89.13 315.83 90.12 317.25 90.37 317.25 C90.71 317.25 90.9 317.03 91.07 316.43 C91.17 316.07 91.43 315.56 91.63 315.31 C91.83 315.05 92 314.77 92 314.69 C92 314.61 92.22 314.34 92.5 314.09 C92.94 313.69 93 313.58 93 313.07 C93 312.63 93.06 312.44 93.27 312.28 C93.86 311.8 93.97 311.64 94.05 311.11 C94.11 310.74 94.27 310.42 94.55 310.12 C94.85 309.81 94.99 309.53 95.04 309.14 C95.08 308.76 95.22 308.48 95.5 308.19 C95.71 307.97 95.97 307.52 96.07 307.19 C96.17 306.87 96.41 306.42 96.6 306.19 C96.81 305.96 97 305.57 97.05 305.27 C97.09 304.96 97.28 304.58 97.51 304.32 C97.72 304.08 97.95 303.67 98.02 303.41 C98.09 303.15 98.31 302.73 98.52 302.47 C98.72 302.21 98.96 301.76 99.05 301.47 C99.22 300.92 99.97 299.58 100.28 299.25 C100.38 299.15 100.58 298.96 100.73 298.85 C100.94 298.68 101 298.49 101 298.06 C101 297.63 101.06 297.44 101.27 297.28 C101.93 296.75 102 296.63 102 296.06 C102 295.63 102.07 295.44 102.27 295.28 C102.86 294.8 102.97 294.64 103.05 294.11 C103.11 293.74 103.27 293.42 103.55 293.12 C103.85 292.81 103.99 292.53 104.04 292.14 C104.08 291.76 104.22 291.48 104.5 291.19 C104.71 290.97 104.97 290.52 105.07 290.19 C105.17 289.87 105.41 289.42 105.6 289.19 C105.81 288.96 106 288.57 106.05 288.27 C106.09 287.96 106.28 287.58 106.5 287.33 C106.71 287.1 106.96 286.66 107.07 286.37 C107.17 286.07 107.4 285.64 107.57 285.42 C107.74 285.19 107.96 284.75 108.06 284.43 C108.15 284.12 108.37 283.67 108.55 283.44 C108.73 283.21 108.88 282.95 108.88 282.87 C108.88 282.79 109.13 282.47 109.44 282.17 C109.94 281.68 110 281.55 110 281.06 C110 280.63 110.07 280.44 110.27 280.28 C110.86 279.8 110.97 279.64 111.05 279.11 C111.11 278.74 111.27 278.42 111.55 278.12 C111.85 277.81 111.99 277.53 112.04 277.14 C112.08 276.76 112.22 276.48 112.5 276.19 C112.71 275.97 112.97 275.52 113.07 275.19 C113.17 274.87 113.41 274.42 113.6 274.19 C113.81 273.96 114 273.57 114.05 273.27 C114.09 272.96 114.28 272.58 114.51 272.32 C114.72 272.08 114.95 271.67 115.02 271.41 C115.09 271.15 115.31 270.73 115.52 270.47 C115.72 270.21 115.96 269.76 116.05 269.47 C116.22 268.92 116.97 267.58 117.28 267.25 C117.38 267.15 117.58 266.96 117.73 266.85 C117.93 266.68 118 266.49 118 266.1 C118 265.62 118.08 265.48 118.73 264.78 L119.46 264 L127.58 264 C133.73 264 135.74 264.04 135.85 264.15 C136.13 264.44 136.02 264.98 135.56 265.49 C135.32 265.75 135.04 266.23 134.95 266.55 C134.85 266.87 134.63 267.33 134.45 267.56 C134.27 267.79 134.12 268.05 134.12 268.13 C134.12 268.21 133.88 268.52 133.58 268.82 C133.15 269.24 133.01 269.48 132.95 269.91 C132.89 270.29 132.75 270.57 132.49 270.82 C132.27 271.03 132.04 271.45 131.93 271.82 C131.83 272.17 131.6 272.59 131.43 272.75 C131.26 272.92 131.06 273.27 130.99 273.55 C130.91 273.83 130.7 274.26 130.52 274.5 C130.34 274.74 130.09 275.15 129.97 275.4 C129.86 275.66 129.71 275.88 129.66 275.88 C129.6 275.88 129.42 275.99 129.27 276.13 C129.07 276.32 129 276.53 129 276.94 C129 277.37 128.93 277.56 128.73 277.72 C128.14 278.2 128.03 278.36 127.95 278.9 C127.89 279.29 127.75 279.57 127.49 279.82 C127.28 280.02 127.04 280.45 126.93 280.8 C126.83 281.14 126.61 281.57 126.44 281.75 C126.27 281.92 126.05 282.31 125.94 282.62 C125.83 282.92 125.61 283.34 125.45 283.55 C125.29 283.76 125.12 284.06 125.07 284.22 C125.03 284.37 124.78 284.66 124.54 284.86 C124.17 285.17 124.07 285.35 123.99 285.9 C123.9 286.42 123.8 286.63 123.5 286.88 C123.23 287.09 123.06 287.39 122.94 287.87 C122.84 288.25 122.63 288.67 122.45 288.83 C122.29 288.99 122.06 289.39 121.94 289.73 C121.83 290.07 121.63 290.44 121.5 290.56 C121.37 290.68 121.16 291.04 121.04 291.36 C120.92 291.68 120.64 292.21 120.41 292.55 C120.19 292.88 120 293.22 120 293.31 C120 293.39 119.78 293.65 119.52 293.89 C119.14 294.23 119.02 294.45 118.95 294.89 C118.89 295.29 118.75 295.57 118.49 295.82 C118.27 296.03 118.04 296.45 117.93 296.82 C117.83 297.17 117.61 297.59 117.44 297.75 C117.27 297.91 117.07 298.24 116.99 298.49 C116.83 298.98 116 300.45 115.72 300.75 C115.62 300.85 115.42 301.04 115.27 301.15 C115.06 301.32 115 301.51 115 301.94 C115 302.37 114.94 302.56 114.73 302.72 C114.14 303.2 114.03 303.36 113.95 303.9 C113.89 304.29 113.75 304.57 113.49 304.82 C113.28 305.02 113.04 305.45 112.93 305.8 C112.83 306.14 112.61 306.57 112.44 306.75 C112.27 306.92 112.05 307.31 111.94 307.62 C111.83 307.92 111.61 308.35 111.44 308.58 C111.27 308.8 111.12 309.05 111.12 309.13 C111.12 309.21 110.88 309.52 110.58 309.81 C110.17 310.22 110.02 310.48 109.95 310.88 C109.89 311.23 109.72 311.58 109.45 311.88 C109.18 312.18 109 312.54 108.94 312.88 C108.88 313.2 108.71 313.55 108.49 313.78 C108.3 313.98 108.05 314.42 107.94 314.75 C107.83 315.08 107.63 315.44 107.5 315.56 C107.37 315.68 107.16 316.04 107.04 316.36 C106.92 316.68 106.64 317.21 106.41 317.55 C106.19 317.88 106 318.22 106 318.31 C106 318.39 105.78 318.65 105.52 318.89 C105.14 319.23 105.02 319.45 104.95 319.89 C104.89 320.29 104.75 320.57 104.49 320.82 C104.27 321.03 104.04 321.45 103.93 321.82 C103.83 322.17 103.61 322.59 103.44 322.75 C103.27 322.91 103.07 323.24 102.99 323.49 C102.77 324.17 101.95 325.51 101.46 326 C101.14 326.32 101.01 326.58 100.96 326.98 C100.91 327.39 100.79 327.62 100.47 327.92 C100.14 328.21 100.02 328.45 99.95 328.89 C99.89 329.29 99.75 329.57 99.49 329.82 C99.28 330.02 99.04 330.45 98.93 330.8 C98.83 331.14 98.61 331.57 98.44 331.75 C98.27 331.92 98.05 332.31 97.94 332.62 C97.83 332.92 97.59 333.37 97.4 333.62 L97.06 334.06 L97 351.41 C96.94 366.65 96.92 368.77 96.75 368.88 C96.64 368.95 93.91 369 89.98 369 C84.16 369 83.37 368.98 83.2 368.8 Z M444.2 368.8 C444.02 368.63 444 363.7 444 316.5 C444 269.02 444.02 264.38 444.2 264.19 C444.38 264.01 445.81 264 459.42 264.04 C475.49 264.09 477.49 264.12 478.04 264.35 C478.23 264.43 478.58 264.5 478.81 264.5 C479.04 264.5 479.47 264.61 479.77 264.75 C480.15 264.92 480.6 265 481.25 265 C482.52 265.01 484.03 265.3 484.57 265.63 C484.86 265.81 485.37 265.94 486.04 266.02 C486.88 266.12 487.17 266.22 487.69 266.57 C488.16 266.89 488.45 267 488.85 267 C489.31 267 489.45 267.07 489.88 267.5 C490.32 267.96 490.42 268 491.03 268 C491.39 268 491.81 268.07 491.95 268.16 C492.09 268.24 492.51 268.48 492.88 268.69 C493.25 268.89 493.74 269.27 493.97 269.52 C494.28 269.85 494.55 270.01 494.92 270.07 C495.43 270.15 495.88 270.47 496.94 271.49 C497.21 271.75 497.66 272.04 497.92 272.13 C498.29 272.24 498.93 272.8 500.45 274.31 C502.1 275.94 502.56 276.48 502.81 277.04 C502.98 277.42 503.29 277.86 503.49 278.01 C503.7 278.17 503.91 278.4 503.95 278.53 C503.99 278.66 504.19 278.95 504.39 279.18 C504.59 279.41 504.83 279.87 504.93 280.19 C505.03 280.52 505.29 280.97 505.5 281.19 C505.77 281.47 505.91 281.76 505.98 282.22 C506.05 282.66 506.21 283 506.47 283.3 C506.71 283.57 506.9 283.98 506.99 284.39 C507.07 284.75 507.25 285.23 507.39 285.46 C507.75 286.04 508 287.05 508 287.92 C508 288.5 508.08 288.8 508.36 289.3 C508.87 290.2 508.93 291.08 508.94 297 C508.94 301.45 508.91 302.2 508.71 303.17 C508.58 303.78 508.37 304.51 508.24 304.8 C508.1 305.11 508 305.6 508 306.06 C508 307 507.76 307.92 507.33 308.65 C507.1 309.04 507 309.39 507 309.81 C507 310.34 506.95 310.45 506.54 310.83 C506.11 311.22 506.06 311.32 505.99 312.12 C505.93 312.81 505.84 313.07 505.54 313.46 C505.33 313.72 505.09 314.16 505 314.44 C504.92 314.71 504.72 315.11 504.57 315.31 C504.41 315.52 504.19 315.88 504.06 316.12 C503.94 316.37 503.67 316.74 503.45 316.96 C502.22 318.21 502.01 318.48 501.89 318.94 C501.79 319.31 501.44 319.76 500.53 320.7 C498.85 322.44 497.53 323.57 496.84 323.87 C496.51 324 496.08 324.31 495.87 324.55 C495.66 324.79 495.36 325.03 495.21 325.07 C495.06 325.12 494.74 325.31 494.5 325.5 C494.26 325.69 493.81 325.93 493.5 326.04 C493.19 326.16 492.73 326.44 492.47 326.68 C491.85 327.25 491.84 327.65 492.43 328.03 C492.67 328.19 492.93 328.46 493.01 328.64 C493.08 328.83 493.28 329.1 493.44 329.26 C493.61 329.41 493.83 329.83 493.93 330.18 C494.06 330.62 494.24 330.91 494.5 331.11 C494.71 331.26 494.95 331.54 495.04 331.73 C495.12 331.91 495.33 332.26 495.51 332.5 C495.7 332.74 495.91 333.14 495.99 333.39 C496.07 333.63 496.29 333.99 496.49 334.18 C496.73 334.41 496.88 334.7 496.93 335.07 C496.99 335.48 497.12 335.71 497.43 335.97 C497.66 336.16 497.94 336.51 498.06 336.75 C498.18 336.99 498.38 337.3 498.51 337.44 C498.64 337.58 498.83 337.94 498.94 338.25 C499.04 338.55 499.31 338.98 499.54 339.19 C499.99 339.64 500.8 340.9 500.94 341.38 C500.99 341.55 501.21 341.88 501.44 342.12 C501.71 342.41 501.88 342.74 501.94 343.09 C502 343.48 502.13 343.72 502.43 343.97 C502.66 344.16 502.96 344.54 503.1 344.82 C503.24 345.1 503.44 345.4 503.55 345.49 C503.65 345.57 503.83 345.92 503.94 346.26 C504.06 346.63 504.28 346.97 504.49 347.12 C504.69 347.26 504.92 347.55 505 347.78 C505.09 348 505.27 348.3 505.39 348.44 C505.51 348.58 505.73 348.96 505.88 349.28 C506.02 349.61 506.27 350 506.44 350.16 C506.62 350.32 506.82 350.74 506.92 351.11 C507.05 351.6 507.21 351.87 507.49 352.09 C507.7 352.26 507.97 352.57 508.08 352.79 C508.19 353.01 508.38 353.3 508.51 353.44 C508.64 353.58 508.83 353.94 508.93 354.24 C509.04 354.54 509.31 355 509.53 355.25 C510.05 355.86 510.4 356.39 510.85 357.25 C511.04 357.63 511.34 358.08 511.52 358.25 C511.7 358.44 511.87 358.79 511.92 359.09 C511.98 359.49 512.14 359.75 512.56 360.17 C512.87 360.47 513.12 360.79 513.12 360.87 C513.12 360.95 513.29 361.22 513.49 361.48 C513.68 361.73 513.91 362.14 513.99 362.39 C514.07 362.63 514.29 362.99 514.49 363.18 C514.72 363.4 514.87 363.7 514.93 364.04 C514.98 364.41 515.14 364.69 515.45 365 C516.13 365.68 516.88 366.77 516.88 367.11 C516.88 367.3 517.06 367.57 517.39 367.87 C517.76 368.22 517.89 368.42 517.86 368.64 L517.81 368.94 L509.77 368.97 L501.73 369 L501.4 368.64 C500.98 368.2 500.61 367.63 500.15 366.75 C499.96 366.37 499.66 365.92 499.48 365.75 C499.3 365.56 499.13 365.21 499.08 364.91 C499.02 364.53 498.88 364.3 498.58 364.04 C498.35 363.85 498.07 363.52 497.97 363.31 C497.86 363.11 497.66 362.83 497.52 362.7 C497.38 362.57 497.17 362.18 497.07 361.82 C496.94 361.38 496.76 361.09 496.51 360.9 C496.3 360.75 496.04 360.44 495.93 360.22 C495.81 359.99 495.62 359.7 495.49 359.56 C495.36 359.42 495.17 359.06 495.06 358.75 C494.96 358.45 494.69 358.02 494.46 357.81 C494.01 357.37 493.2 356.1 493.06 355.62 C493.01 355.45 492.76 355.08 492.51 354.8 C491.96 354.16 491.61 353.64 491.15 352.75 C490.96 352.37 490.66 351.92 490.48 351.75 C490.3 351.56 490.13 351.21 490.08 350.91 C490.02 350.53 489.88 350.3 489.58 350.04 C489.35 349.85 489.04 349.46 488.9 349.18 C488.76 348.9 488.56 348.6 488.45 348.51 C488.35 348.43 488.18 348.09 488.07 347.76 C487.94 347.39 487.73 347.06 487.49 346.89 C487.28 346.73 487.05 346.46 486.96 346.27 C486.88 346.09 486.67 345.74 486.49 345.5 C486.3 345.26 486.09 344.85 486 344.6 C485.92 344.34 485.7 344.02 485.51 343.88 C485.31 343.74 485.08 343.45 485 343.22 C484.91 343 484.73 342.7 484.61 342.56 C484.49 342.42 484.27 342.06 484.14 341.75 C484 341.44 483.72 341.03 483.52 340.83 C483.27 340.59 483.12 340.3 483.07 339.93 C483.01 339.52 482.88 339.29 482.57 339.03 C482.35 338.84 482.06 338.52 481.93 338.31 C481.79 338.11 481.59 337.85 481.46 337.75 C481.34 337.65 481.16 337.26 481.06 336.88 C480.94 336.4 480.77 336.12 480.5 335.9 C480.29 335.74 480.01 335.39 479.88 335.14 C479.75 334.88 479.56 334.6 479.45 334.51 C479.35 334.43 479.17 334.08 479.06 333.74 C478.94 333.37 478.73 333.03 478.54 332.91 C478.37 332.8 478.13 332.51 478 332.26 C477.87 332.01 477.49 331.51 477.16 331.15 L476.56 330.48 L467.78 330.5 C462.82 330.5 458.87 330.56 458.7 330.62 C458.54 330.68 458.31 330.86 458.2 331.02 C458.02 331.28 458 333.06 458 349.96 C458 366.75 457.98 368.63 457.8 368.8 C457.63 368.98 456.84 369 451 369 C445.16 369 444.37 368.98 444.2 368.8 Z M530.2 368.8 C529.8 368.41 529.99 367.29 530.63 366.28 C530.82 365.99 531 365.53 531.05 365.26 C531.09 364.97 531.3 364.56 531.56 364.25 C531.92 363.82 532 363.62 532 363.17 C532 362.69 532.07 362.55 532.5 362.12 C532.96 361.68 533 361.58 533 360.97 C533 360.33 533.16 359.92 533.68 359.19 C533.81 359.01 533.96 358.57 534.02 358.22 C534.09 357.75 534.23 357.47 534.54 357.13 C534.91 356.75 534.98 356.57 535.05 355.88 C535.11 355.25 535.21 354.94 535.5 354.52 C535.71 354.23 535.94 353.71 536.01 353.37 C536.1 352.99 536.31 352.55 536.57 352.24 C536.92 351.82 537 351.62 537 351.16 C537 350.67 537.06 350.54 537.46 350.17 C537.89 349.78 537.93 349.68 538.01 348.86 C538.07 348.24 538.17 347.89 538.36 347.65 C538.73 347.19 538.97 346.65 539.06 346.09 C539.11 345.79 539.3 345.44 539.55 345.17 C539.9 344.81 539.98 344.61 540.03 344 C540.08 343.46 540.22 343.07 540.54 342.54 C540.78 342.14 541.02 341.57 541.07 341.27 C541.12 340.93 541.29 340.57 541.53 340.29 C541.79 340 541.95 339.66 542.02 339.22 C542.09 338.74 542.23 338.47 542.55 338.13 C542.93 337.74 542.98 337.6 543.02 336.86 C543.06 336.17 543.13 335.96 543.47 335.53 C543.73 335.22 543.92 334.78 544 334.38 C544.14 333.64 544.25 333.42 544.66 333.04 C544.89 332.82 544.98 332.58 545.03 332.01 C545.08 331.46 545.21 331.08 545.54 330.54 C545.78 330.14 546.02 329.57 546.07 329.27 C546.12 328.93 546.29 328.57 546.53 328.29 C546.79 328 546.95 327.66 547.02 327.22 C547.09 326.75 547.23 326.47 547.54 326.13 C547.91 325.75 547.98 325.57 548.05 324.88 C548.11 324.25 548.21 323.94 548.5 323.52 C548.71 323.23 548.94 322.71 549.01 322.37 C549.1 321.99 549.31 321.55 549.57 321.24 C549.93 320.81 550 320.63 550 320.11 C550 319.63 550.06 319.45 550.27 319.28 C550.95 318.73 551 318.64 551 317.97 C551 317.33 551.16 316.91 551.68 316.19 C551.81 316.01 551.96 315.57 552.02 315.22 C552.09 314.75 552.23 314.47 552.54 314.13 C552.91 313.75 552.98 313.57 553.05 312.88 C553.11 312.25 553.21 311.94 553.5 311.52 C553.71 311.23 553.94 310.71 554.01 310.37 C554.1 309.99 554.31 309.55 554.57 309.24 C554.92 308.82 555 308.62 555 308.16 C555 307.67 555.06 307.54 555.46 307.17 C555.89 306.78 555.93 306.68 556.01 305.86 C556.07 305.24 556.17 304.89 556.36 304.65 C556.73 304.19 556.97 303.65 557.06 303.09 C557.11 302.79 557.3 302.44 557.55 302.17 C557.9 301.81 557.98 301.61 558.03 300.99 C558.08 300.45 558.21 300.08 558.48 299.65 C558.69 299.32 558.93 298.76 559.01 298.4 C559.1 297.99 559.3 297.56 559.57 297.24 C559.92 296.82 560 296.62 560 296.16 C560 295.67 560.06 295.54 560.46 295.17 C560.89 294.78 560.93 294.68 561.01 293.88 C561.07 293.17 561.15 292.94 561.48 292.52 C561.73 292.22 561.92 291.78 562 291.38 C562.14 290.64 562.25 290.42 562.66 290.04 C562.89 289.82 562.98 289.58 563.03 289.01 C563.08 288.46 563.21 288.08 563.54 287.54 C563.78 287.14 564.02 286.57 564.07 286.27 C564.12 285.93 564.29 285.57 564.53 285.29 C564.79 285 564.95 284.66 565.02 284.22 C565.09 283.74 565.23 283.47 565.55 283.13 C565.93 282.74 565.98 282.6 566.02 281.86 C566.06 281.17 566.13 280.96 566.47 280.54 C566.7 280.24 566.93 279.76 567.01 279.39 C567.1 278.99 567.3 278.56 567.57 278.24 C567.93 277.81 568 277.63 568 277.11 C568 276.63 568.06 276.45 568.27 276.28 C568.95 275.73 569 275.64 569 274.95 C569 274.13 569.15 273.68 569.59 273.23 C569.8 273 569.95 272.67 570.01 272.23 C570.09 271.75 570.22 271.47 570.54 271.13 C570.91 270.75 570.98 270.57 571.05 269.88 C571.11 269.25 571.21 268.94 571.5 268.52 C571.71 268.23 571.94 267.71 572.01 267.37 C572.1 266.99 572.31 266.55 572.57 266.24 C572.92 265.82 573 265.62 573 265.16 C573 264.67 573.06 264.54 573.47 264.17 C573.9 263.77 573.94 263.69 574.01 262.82 C574.07 262.07 574.14 261.83 574.42 261.5 C574.61 261.28 574.84 260.89 574.95 260.65 C575.16 260.12 575.32 260 575.76 260 C576.3 260 576.71 260.42 576.87 261.15 C576.96 261.52 577.22 262.14 577.46 262.54 C577.78 263.07 577.92 263.46 577.97 264 C578.02 264.61 578.1 264.81 578.45 265.17 C578.7 265.44 578.89 265.79 578.94 266.09 C579.03 266.65 579.27 267.19 579.64 267.65 C579.83 267.89 579.93 268.24 579.99 268.86 C580.07 269.68 580.11 269.78 580.54 270.17 C580.94 270.54 581 270.67 581 271.16 C581 271.62 581.08 271.82 581.43 272.24 C581.69 272.55 581.9 272.99 581.99 273.37 C582.06 273.71 582.29 274.23 582.5 274.52 C582.79 274.94 582.89 275.25 582.95 275.88 C583.02 276.57 583.09 276.75 583.46 277.13 C583.77 277.47 583.91 277.75 583.98 278.22 C584.04 278.57 584.19 279.01 584.32 279.19 C584.84 279.91 585 280.33 585 280.97 C585 281.64 585.05 281.73 585.73 282.28 C585.94 282.45 586 282.63 586 283.11 C586 283.63 586.07 283.81 586.43 284.24 C586.69 284.55 586.9 284.99 586.99 285.37 C587.06 285.71 587.29 286.23 587.5 286.52 C587.79 286.94 587.89 287.25 587.95 287.88 C588.02 288.57 588.09 288.75 588.46 289.13 C588.77 289.47 588.91 289.75 588.98 290.22 C589.05 290.66 589.21 291 589.47 291.29 C589.71 291.57 589.88 291.93 589.93 292.27 C589.98 292.57 590.22 293.14 590.46 293.54 C590.78 294.07 590.92 294.46 590.97 295 C591.02 295.61 591.1 295.81 591.45 296.17 C591.7 296.44 591.89 296.79 591.94 297.09 C592.03 297.65 592.27 298.19 592.64 298.65 C592.83 298.89 592.93 299.24 592.99 299.86 C593.07 300.68 593.11 300.78 593.54 301.17 C593.94 301.54 594 301.67 594 302.16 C594 302.62 594.08 302.82 594.43 303.24 C594.69 303.55 594.9 303.99 594.99 304.37 C595.06 304.71 595.29 305.23 595.5 305.52 C595.79 305.94 595.89 306.25 595.95 306.88 C596.02 307.57 596.09 307.75 596.46 308.13 C596.78 308.47 596.91 308.75 596.99 309.23 C597.05 309.67 597.2 310 597.41 310.23 C597.85 310.68 598 311.13 598 311.95 C598 312.64 598.05 312.73 598.73 313.28 C598.94 313.45 599 313.63 599 314.12 C599 314.66 599.05 314.8 599.44 315.18 C599.68 315.42 599.88 315.64 599.88 315.67 C599.88 315.69 599.93 316.01 600 316.37 C600.08 316.78 600.27 317.21 600.53 317.53 C600.87 317.96 600.94 318.17 600.98 318.86 C601.02 319.6 601.07 319.74 601.45 320.13 C601.77 320.47 601.91 320.74 601.98 321.22 C602.05 321.66 602.21 322 602.47 322.3 C602.71 322.57 602.9 322.98 602.99 323.39 C603.07 323.76 603.31 324.32 603.52 324.65 C603.79 325.08 603.92 325.45 603.97 325.99 C604.02 326.61 604.1 326.81 604.45 327.17 C604.7 327.44 604.89 327.79 604.94 328.09 C605.03 328.65 605.27 329.19 605.64 329.65 C605.83 329.89 605.93 330.24 605.99 330.86 C606.07 331.68 606.11 331.78 606.54 332.17 C606.94 332.54 607 332.67 607 333.16 C607 333.62 607.08 333.82 607.43 334.24 C607.69 334.55 607.9 334.99 607.99 335.37 C608.06 335.71 608.29 336.23 608.5 336.52 C608.79 336.94 608.89 337.25 608.95 337.88 C609.02 338.57 609.09 338.75 609.46 339.13 C609.77 339.47 609.91 339.75 609.98 340.22 C610.05 340.66 610.21 341 610.47 341.29 C610.71 341.57 610.88 341.93 610.93 342.27 C610.98 342.57 611.22 343.14 611.46 343.54 C611.79 344.08 611.92 344.46 611.97 345.01 C612.02 345.58 612.11 345.82 612.34 346.04 C612.75 346.42 612.86 346.64 613 347.38 C613.08 347.78 613.27 348.22 613.52 348.52 C613.85 348.94 613.93 349.17 613.99 349.88 C614.07 350.68 614.11 350.78 614.54 351.17 C614.94 351.54 615 351.67 615 352.16 C615 352.62 615.08 352.82 615.43 353.24 C615.7 353.56 615.9 353.99 615.99 354.4 C616.07 354.76 616.3 355.32 616.51 355.64 C616.78 356.06 616.91 356.45 616.96 356.96 C617.02 357.57 617.1 357.76 617.46 358.13 C617.77 358.47 617.91 358.75 617.98 359.22 C618.04 359.57 618.19 360.01 618.32 360.19 C618.84 360.91 619 361.33 619 361.97 C619 362.64 619.05 362.73 619.73 363.28 C619.94 363.45 620 363.63 620 364.11 C620 364.63 620.07 364.81 620.43 365.25 C620.68 365.54 620.9 365.96 620.94 366.23 C621.04 366.82 621.34 367.5 621.5 367.5 C621.58 367.5 621.72 367.7 621.83 367.95 C621.99 368.35 621.99 368.43 621.82 368.7 L621.62 369 L613.99 369 C605.61 369 605.78 369.01 605.33 368.25 C605.21 368.05 605.08 367.51 605.04 367.06 C604.98 366.37 604.89 366.15 604.55 365.74 C604.3 365.44 604.09 365 604.01 364.6 C603.93 364.24 603.7 363.68 603.49 363.36 C603.23 362.95 603.09 362.54 603.02 361.95 C602.93 361.25 602.86 361.05 602.5 360.69 C602.12 360.29 602.08 360.17 602.01 359.26 C601.94 358.3 601.91 358.24 601.47 357.83 C601.06 357.46 601 357.33 601 356.83 C601 356.38 600.92 356.17 600.63 355.84 C600.14 355.28 600 354.88 600 354.05 C600 353.42 599.96 353.33 599.5 352.88 C599.07 352.45 599 352.31 599 351.84 C599 351.45 598.91 351.16 598.69 350.86 C598.18 350.17 598 349.67 598 348.98 C598 348.4 597.95 348.27 597.56 347.87 C597.23 347.53 597.09 347.26 597.02 346.79 C596.96 346.41 596.76 345.95 596.52 345.61 C596.2 345.16 596.12 344.89 596.05 344.15 C595.98 343.39 595.91 343.19 595.62 342.9 C595.43 342.72 595.13 342.32 594.95 342.03 C594.77 341.74 594.52 341.5 594.4 341.5 C587.74 341.45 555.42 341.53 555.31 341.6 C555.22 341.65 554.92 341.98 554.63 342.33 C554.28 342.78 554.09 343.17 554 343.62 C553.86 344.36 553.75 344.58 553.34 344.96 C553.1 345.18 553.02 345.42 552.96 346.09 C552.9 346.75 552.8 347.05 552.5 347.48 C552.29 347.77 552.06 348.3 551.99 348.64 C551.9 349.03 551.7 349.44 551.46 349.71 C551.15 350.06 551.06 350.31 550.98 350.97 C550.91 351.54 550.77 351.95 550.51 352.36 C550.3 352.68 550.07 353.24 549.99 353.6 C549.9 354.01 549.7 354.44 549.43 354.76 C549.08 355.18 549 355.38 549 355.83 C549 356.31 548.93 356.45 548.5 356.88 C548.04 357.33 548 357.42 548 358.05 C548 358.87 547.85 359.32 547.41 359.77 C547.2 360 547.05 360.33 546.99 360.77 C546.91 361.26 546.78 361.52 546.44 361.87 C546.04 362.28 546 362.39 546 363 C546 363.68 545.85 364.08 545.32 364.81 C545.19 364.99 545.04 365.43 544.98 365.78 C544.91 366.26 544.78 366.53 544.44 366.87 C544.05 367.27 544 367.4 544 367.95 C544 369.07 544.47 369 536.97 369 C531.16 369 530.37 368.98 530.2 368.8 Z M589.83 328.99 C590.14 328.73 590.03 328.23 589.53 327.72 C589.09 327.26 589.07 327.2 589.02 326.28 C588.98 325.38 588.95 325.28 588.55 324.87 C588.23 324.53 588.09 324.26 588.02 323.78 C587.96 323.43 587.81 322.99 587.68 322.81 C587.15 322.08 587 321.68 587 321 C587 320.39 586.95 320.28 586.56 319.87 C586.22 319.52 586.09 319.27 586.01 318.73 C585.93 318.29 585.75 317.83 585.51 317.49 C585.2 317.05 585.1 316.76 585.04 316.09 C584.98 315.42 584.9 315.18 584.66 314.96 C584.25 314.58 584.14 314.36 584 313.64 C583.94 313.3 583.71 312.78 583.5 312.48 C583.2 312.05 583.1 311.75 583.04 311.08 C582.97 310.36 582.9 310.15 582.55 309.74 C582.3 309.44 582.09 309 582.01 308.6 C581.93 308.24 581.7 307.68 581.49 307.36 C581.23 306.95 581.09 306.54 581.02 305.95 C580.94 305.31 580.85 305.04 580.59 304.78 C580.15 304.32 580 303.87 580 303.05 C580 302.42 579.96 302.33 579.5 301.88 C579.06 301.45 579 301.31 579 300.82 C579 300.38 578.92 300.17 578.63 299.84 C578.14 299.28 578 298.88 578 298.02 C578 297.36 577.96 297.26 577.56 296.88 C577.29 296.61 577.1 296.29 577.06 296.01 C576.92 295.12 576.87 295 576.47 294.55 C576.11 294.13 576.07 294.03 576.09 293.33 C576.12 292.44 575.9 292 575.44 292 C575.18 292 575.05 292.16 574.58 293.16 C574.28 293.79 573.99 294.52 573.95 294.78 C573.9 295.04 573.69 295.46 573.47 295.7 C573.15 296.06 573.06 296.31 572.98 296.96 C572.91 297.54 572.76 297.96 572.45 298.47 C572.21 298.87 571.98 299.43 571.94 299.72 C571.88 300.06 571.7 300.44 571.43 300.76 C571.08 301.18 571 301.38 571 301.83 C571 302.31 570.93 302.45 570.5 302.88 C570.04 303.33 570 303.42 570 304.05 C570 304.87 569.85 305.32 569.41 305.77 C569.2 306 569.05 306.33 568.99 306.77 C568.91 307.26 568.78 307.52 568.44 307.87 C568.04 308.28 568 308.39 568 309 C568 309.68 567.85 310.08 567.32 310.81 C567.19 310.99 567.04 311.43 566.98 311.78 C566.91 312.25 566.77 312.53 566.46 312.87 C566.09 313.25 566.02 313.43 565.95 314.12 C565.89 314.75 565.79 315.06 565.5 315.48 C565.28 315.78 565.06 316.3 565 316.64 C564.86 317.36 564.75 317.58 564.34 317.96 C564.1 318.18 564.02 318.42 563.96 319.09 C563.9 319.75 563.8 320.05 563.5 320.48 C563.29 320.77 563.06 321.3 562.99 321.64 C562.9 322.03 562.7 322.44 562.46 322.71 C562.15 323.06 562.06 323.31 561.98 323.97 C561.91 324.56 561.77 324.95 561.48 325.4 C561.26 325.75 561.04 326.3 560.98 326.66 C560.91 327.15 560.78 327.39 560.44 327.73 C559.97 328.18 559.89 328.54 560.17 328.94 C560.34 329.18 560.54 329.19 575 329.16 C585.89 329.14 589.7 329.1 589.83 328.99 Z M476.1 316.75 C476.35 316.6 476.73 316.5 477.07 316.5 C477.38 316.5 477.83 316.42 478.08 316.31 C478.34 316.2 479.16 316.1 480.11 316.05 L481.69 315.97 L482.13 315.54 C482.47 315.22 482.75 315.09 483.23 315.01 C483.67 314.94 484 314.8 484.23 314.58 C484.42 314.4 484.84 314.17 485.18 314.07 C485.53 313.97 485.95 313.72 486.18 313.48 C486.65 313 487.2 312.62 488 312.23 C488.77 311.86 489.94 310.66 490.1 310.08 C490.24 309.59 490.6 309.08 491.45 308.19 C491.84 307.78 491.99 307.5 492.05 307.09 C492.11 306.7 492.25 306.43 492.55 306.13 C492.93 305.77 492.98 305.63 493.06 304.82 C493.13 304.07 493.21 303.81 493.56 303.33 L493.97 302.75 L494.06 300.59 C494.12 299.15 494.22 298.28 494.34 297.96 C494.5 297.56 494.51 297.4 494.38 296.96 C494.29 296.67 494.15 295.45 494.07 294.25 C493.93 292.15 493.91 292.03 493.58 291.6 C493.33 291.27 493.2 290.88 493.08 290.14 C492.95 289.34 492.85 289.05 492.59 288.77 C492.4 288.58 492.17 288.16 492.07 287.83 C491.98 287.51 491.68 286.99 491.42 286.69 C490.67 285.83 490.38 285.43 490.17 284.91 C489.95 284.38 487.51 281.88 487.21 281.88 C487.11 281.88 486.79 281.68 486.5 281.44 C486.21 281.2 485.93 281 485.86 281 C485.8 281 485.53 280.8 485.25 280.55 C484.98 280.31 484.5 280.02 484.18 279.93 C483.86 279.83 483.42 279.59 483.19 279.4 C482.85 279.1 482.63 279.02 481.87 278.95 C481.11 278.88 480.83 278.79 480.32 278.44 L479.69 278.02 L477.5 277.96 C476.3 277.92 471.52 277.88 466.89 277.88 C459.15 277.87 458.45 277.88 458.23 278.08 C458.01 278.28 458 278.9 458 297.03 C458 317.72 457.94 316.24 458.79 316.75 C459.17 316.99 459.48 317 467.44 317 C475.46 317 475.7 316.99 476.1 316.75 Z";var Qe=.012,zc=Math.tan(Math.PI/6),pr=333.5*Qe/.82/zc,mr=1.1,Hc=5.3,D2=1.6,Vc={HOLD:mr,IN:mr+Hc,SHORT_START:mr+Hc*.52},$o=class{constructor(t){let e=this.scene=new En;e.background=null;let n=new fs(t);e.environment=n.fromScene(new Yo,.04).texture,e.environmentIntensity=.5,n.dispose();let s=this.logo=new ii,r=new dr().parse(`<svg xmlns="http://www.w3.org/2000/svg"><path d="${ld}" fill-rule="evenodd"/></svg>`),o=[];for(let N of r.paths)o.push(...dr.createShapes(N));let a=new Pi(o,{depth:34,bevelEnabled:!0,bevelThickness:2.4,bevelSize:1.5,bevelSegments:3,curveSegments:14}),l=new or({color:15921904,roughness:.3,metalness:0,clearcoat:1,clearcoatRoughness:.07}),c=new $t(a,l);c.scale.set(1,-1,1),c.position.set(-333.5,333.5,-17),s.add(c);let h=Le[0]-fr[0],u=Le[1]-fr[1],f=Math.hypot(h,u),m=Math.atan2(u,h),g=N=>Math.acos(Te((fr[2]*fr[2]-f*f-N*N)/(2*N*f),-1,1)),x=new ui({color:327681,emissive:kc,emissiveIntensity:2.6,roughness:.6,envMapIntensity:.15});for(let N=0;N<3;N++){let P=Bc[N*2],q=Bc[N*2+1],I=g(P),T=g(q),y=new bn;y.absarc(Le[0],Le[1],q,m-T,m+T,!1),y.absarc(Le[0],Le[1],P,m+I,m-I,!0),y.closePath();let B=new Pi(y,{depth:20,bevelEnabled:!0,bevelThickness:1.6,bevelSize:1,bevelSegments:2,curveSegments:72}),X=new $t(B,x);X.position.z=-10,s.add(X)}this.glow=x,this.dotMat=new wn({color:new zt(7,7,7)});let p=new $t(new ms(Le[2],48,32),this.dotMat);p.position.set(Le[0],Le[1],0),s.add(p),s.scale.setScalar(Qe),s.position.set(0,0,-pr),e.add(s);let d=(333.5-392)*Qe-.05,E=s.clone();E.scale.set(Qe,-Qe,Qe),E.position.y=2*d,e.add(E);let _=new $t(new hi(200,200),new Me({transparent:!0,depthWrite:!1,uniforms:{uC:{value:new k(0,d,-pr)},uShow:{value:1}},vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`precision highp float; uniform vec3 uC; uniform float uShow; varying vec3 vW;
        void main(){ float d = length(vW.xz - uC.xz); gl_FragColor = vec4(vec3(0.004, 0.004, 0.005), 1.0 - 0.13 * uShow * (1.0 - smoothstep(2.0, 14.0, d))); }`}));this.floorU=_.material.uniforms,_.rotation.x=-Math.PI/2,_.position.y=d,_.renderOrder=2,e.add(_),this.redLight=new Ui(kc,60,30,2),this.redLight.position.set(Le[0]*Qe,Le[1]*Qe+.5,-pr+1.2),e.add(this.redLight),this.whiteLight=new Ui(16777215,14,12,2),this.whiteLight.position.set(Le[0]*Qe,Le[1]*Qe,-pr+.5),e.add(this.whiteLight);let v=new Lo(14674175,1.7);v.position.set(-4,6,5),e.add(v),this.center=new k(Le[0]*Qe,Le[1]*Qe,-pr),this.dotR=Le[2]*Qe,this.L0=this.center.length(),this.K=Math.log(this.L0/(.3*this.dotR)),this.aim=new Ke().setFromRotationMatrix(new ae().lookAt(new k,this.center,new k(0,1,0))),this._words(),this._streaks(),this.q=new Ke,this.pos=new k,this.speed=0}_words(){let t=new Wo().parse(ad),e=new or({color:15921904,roughness:.3,clearcoat:1,clearcoatRoughness:.08,transparent:!0});this.words=[];let n=this.center.clone().normalize(),s=new k().crossVectors(n,new k(0,1,0)).normalize(),r=new k().crossVectors(s,n).normalize();[["MUSICIAN",.46,-1],["ATHLETE",.64,1],["CHARACTER",.8,-1]].forEach(([o,a,l])=>{let c=new Xo(o,{font:t,size:.2,depth:.05,curveSegments:6,bevelEnabled:!0,bevelThickness:.008,bevelSize:.005,bevelSegments:2});c.computeBoundingBox(),c.translate(-(c.boundingBox.max.x+c.boundingBox.min.x)/2,-.1,-.025);let h=new $t(c,e.clone()),u=this.L0*(1-a);h.position.copy(this.center).addScaledVector(n,-u).addScaledVector(s,l*.1).addScaledVector(r,l*.46),h.quaternion.copy(this.aim),h.rotateY(l*-.16),h.rotateX(l*.12),h.userData.at=u,this.scene.add(h),this.words.push(h)})}_streaks(){this.sN=220,this.sBase=new Float32Array(220*3);let e=new Float32Array(220*6),n=new Float32Array(220*6);for(let a=0;a<220;a++){let l=Math.random()*Math.PI*2,c=.35+Math.pow(Math.random(),.7)*3.2;this.sBase[a*3]=Math.cos(l)*c,this.sBase[a*3+1]=Math.sin(l)*c,this.sBase[a*3+2]=Math.random();let h=Math.random()<.4;for(let u=0;u<2;u++)n[a*6+u*3]=1,n[a*6+u*3+1]=h?.1:.95,n[a*6+u*3+2]=h?.2:.95}let s=new Se;s.setAttribute("position",new Ae(e,3)),s.setAttribute("color",new Ae(n,3)),this.sMat=new er({vertexColors:!0,transparent:!0,opacity:0,blending:li,depthWrite:!1}),this.streaks=new _o(s,this.sMat),this.streaks.frustumCulled=!1,this.scene.add(this.streaks);let r=this.center.clone().normalize(),o=new k(0,1,0);this.sX=new k().crossVectors(r,o).normalize(),this.sY=new k().crossVectors(this.sX,r).normalize(),this.sDir=r}fov(t){return 2*Math.atan(t>=1?zc:zc/t)*180/Math.PI}apply(t,e,n,s){let r=Te((t-mr)/Hc,0,1),o=Math.pow(r,D2),a=je(0,mr+.6,t)*.05,l=Math.exp(-this.K*o)*(1-a*(1-r)),c=this.L0*l;this.pos.copy(this.center).multiplyScalar(1-l),e.position.copy(this.pos);let h=je(.04,.6,r);this.q.identity().slerp(this.aim,h),e.quaternion.copy(this.q).multiply(n);let u=this._t==null?0:t-this._t;u>1e-4?this.speed=Math.max(0,(this._dist-c)/u):this._t==null&&(this.speed=0),this._dist=c,this._t=t;let f=this.L0-c;for(let p of this.words){let d=this.L0-p.userData.at-f;p.material.opacity=je(3.4,2,d)*je(.12,.7,d),p.visible=p.material.opacity>.01}let m=Te(this.speed,0,12);if(this.sMat.opacity=s?0:je(.3,2.6,m)*.8,this.sMat.opacity>.01){let p=this.streaks.geometry.attributes.position.array,d=.05+m*.12,E=14;for(let _=0;_<this.sN;_++){let v=((this.sBase[_*3+2]*E-f)%E+E)%E-2,N=this.sBase[_*3],P=this.sBase[_*3+1],q=this.pos.x+this.sX.x*N+this.sY.x*P+this.sDir.x*v,I=this.pos.y+this.sX.y*N+this.sY.y*P+this.sDir.y*v,T=this.pos.z+this.sX.z*N+this.sY.z*P+this.sDir.z*v;p[_*6]=q,p[_*6+1]=I,p[_*6+2]=T,p[_*6+3]=q+this.sDir.x*d,p[_*6+4]=I+this.sDir.y*d,p[_*6+5]=T+this.sDir.z*d}this.streaks.geometry.attributes.position.needsUpdate=!0}this.streaks.visible=this.sMat.opacity>.01;let g=je(this.dotR*30,this.dotR*2,c),x=je(5,1.2,c);return this.glow.emissiveIntensity=(1.6+.12*Math.sin(t*2.1))*(1-.4*x),this.floorU.uShow.value=1-je(4.5,2,c),this.dotMat.color.setScalar(7+30*g),je(this.dotR*1.6,this.dotR*.85,c)}reset(){this._dist=null,this._t=null,this.speed=0}};var U2=`
varying vec3 vDir;
void main(){ vDir = position; gl_Position = projectionMatrix * vec4(mat3(viewMatrix) * position * 20.0, 1.0); }`,N2=`
precision highp float;
uniform sampler2D tVid;
uniform float uFlat, uHas, uAspect, uSpan, uReveal, uGain, uFront, uStereo, uPitch;
uniform vec3 uFrom;
varying vec3 vDir;
vec3 dec(vec3 t){ return pow(t, vec3(2.2)); }
// The last step of drawing applies a film curve. A video should look as it was made, so undo that curve here.
vec3 unfilm(vec3 y){
  y = clamp(y, 0.0, 0.985);
  vec3 a = 2.51 - 2.43 * y, b = 0.03 - 0.59 * y;
  return (-b + sqrt(b * b + 0.56 * a * y)) / (2.0 * a);
}
void main(){
  vec3 d = normalize(vDir);
  float lon = atan(d.x, -d.z) - uFront;
  lon = mod(lon + 3.14159265, 6.2831853) - 3.14159265;
  vec3 col;
  if (uFlat < 0.5) {
    float lat = asin(clamp(d.y, -1.0, 1.0));
    vec2 uv = vec2(0.5 + lon / 6.2831853, 0.5 + lat / 3.14159265);
    if (uStereo > 0.5) uv.y = 0.5 + uv.y * 0.5;
    col = dec(texture2D(tVid, uv).rgb);
  } else {
    // a curved screen uSpan radians wide, straight ahead; the dark around it picks up a little of the picture's light
    float y = d.y / max(length(d.xz), 1e-4) - uPitch;
    float h = uSpan / uAspect;
    vec2 uv = vec2(0.5 + lon / uSpan, 0.5 + y / h);
    vec2 e = abs(uv - 0.5) - 0.5;
    float outside = max(e.x * uSpan, e.y * h);
    vec3 v = dec(texture2D(tVid, clamp(uv, 0.003, 0.997)).rgb);
    float inside = 1.0 - smoothstep(-0.002, 0.004, outside);
    vec3 spill = v * exp(-max(outside, 0.0) * 4.0) * 0.16;
    col = mix(spill, v, inside);
  }
  // the iris: opens from the screen you came from
  float ang = acos(clamp(dot(d, uFrom), -1.0, 1.0));
  float edge = uReveal * 3.5;
  float m = 1.0 - smoothstep(edge - 0.3, edge, ang);
  float rim = smoothstep(edge - 0.3, edge - 0.06, ang) * m * (1.0 - step(0.999, uReveal));
  gl_FragColor = vec4(unfilm(col * uGain * uHas) + vec3(1.0, 0.1, 0.2) * rim * 1.5, m);
}`,Jo=class{constructor(){this.scene=new En,this.black=new Ri(new Uint8Array([0,0,0,255]),1,1),this.black.needsUpdate=!0,this.U={tVid:{value:this.black},uFlat:{value:0},uHas:{value:0},uAspect:{value:16/9},uSpan:{value:2.3},uReveal:{value:0},uGain:{value:1},uFront:{value:0},uStereo:{value:0},uPitch:{value:0},uFrom:{value:new k(0,0,-1)}};let t=new $t(new mn(2,2,2),new Me({vertexShader:U2,fragmentShader:N2,uniforms:this.U,side:ye,depthTest:!1,depthWrite:!1,transparent:!0}));t.frustumCulled=!1,this.scene.add(t),this.video=null,this.tex=null,this.item=null,this.playing=!1,this.ended=!1,this.loading=!1,this.error="",this.dur=0,this.reveal=0,this.revealTo=0,this.front=0,this.onEnded=null,this.onChange=null,this.wholeFile=null}get active(){return this.reveal>.001||this.revealTo>0}get covering(){return this.reveal>=.999}get flat(){return this.item&&this.item.projection==="flat"}_changed(){this.onChange&&this.onChange()}_el(){if(this.video)return this.video;let t=document.createElement("video");return t.setAttribute("playsinline",""),t.setAttribute("webkit-playsinline",""),t.playsInline=!0,t.preload="auto",t.crossOrigin="anonymous",t.className="video-src",t.setAttribute("aria-hidden","true"),document.body.appendChild(t),t.addEventListener("ended",()=>this._end()),t.addEventListener("playing",()=>{this.loading=!1,this._changed()}),t.addEventListener("waiting",()=>{this.loading=!0,this._changed()}),t.addEventListener("pause",()=>this._changed()),t.addEventListener("loadedmetadata",()=>{if(isFinite(t.duration)&&(this.dur=t.duration),t.videoWidth&&t.videoHeight&&(this.U.uAspect.value=t.videoWidth/t.videoHeight,this.item&&this.item.local)){let e=t.videoWidth/t.videoHeight;this.U.uFlat.value=Math.abs(e-2)<.12||Math.abs(e-1)<.1?0:1,this.U.uStereo.value=Math.abs(e-1)<.1?1:0}this._changed()}),t.addEventListener("error",()=>{let e=this.item;if(!e)return;let n=()=>{this.error="This video could not be played.",this.loading=!1,this.playing=!1,this._changed()};if(this._retried||e.local){n();return}this._retried=!0;let s=t.getAttribute("src")===e.src?this.wholeFile?this.wholeFile(e.src):null:e.src;Promise.resolve(s).then(r=>{if(this.item!==e)return;if(!r){n();return}t.src=r;let o=t.play();o&&o.catch&&o.catch(()=>{this.playing=!1,this.loading=!1,this._changed()})})}),this.video=t,this.tex=new ps(t),this.tex.colorSpace=Ve,this.tex.minFilter=ge,this.tex.magFilter=ge,this.tex.generateMipmaps=!1,t}open(t,e,n,s){this.item=t,this.ended=!1,this.error="",this.front=n,this.U.uFront.value=n,this.U.uPitch.value=Math.tan(s||0)*0,this.U.uFlat.value=t.projection==="flat"?1:0,this.U.uStereo.value=t.stereo?1:0,e&&this.U.uFrom.value.copy(e);let r=this._el();this.loading=!0,this.dur=t.dur||0;let o=t.held||t.src;this._retried=!1,r.getAttribute("src")!==o&&(r.src=o);try{r.currentTime=0}catch{}r.muted=!1,r.loop=!1,this.playing=!0;let a=r.play();a&&a.catch&&a.catch(l=>{l&&l.name==="NotAllowedError"?(r.muted=!0,r.play().catch(()=>{this.playing=!1,this._changed()})):this.error||(this.playing=!1,this._changed())}),this.U.tVid.value=this.tex,this.U.uHas.value=1,this.revealTo=1,this._changed()}close(){this.video&&this.video.pause(),this.playing=!1,this.revealTo=0,this._changed()}time(){return this.video&&this.video.currentTime||0}play(){!this.item||!this.video||(this.ended&&this.seek(0),this.ended=!1,this.playing=!0,this.video.play().catch(()=>{}),this._changed())}pause(){this.playing=!1,this.video&&this.video.pause(),this._changed()}toggle(){this.playing?this.pause():this.play()}seek(t){if(t=Math.max(0,Math.min(this.dur||0,t)),this.video)try{this.video.currentTime=t}catch{}t<this.dur-.05&&(this.ended=!1),this._changed()}faceFront(t){this.front=t}_end(){this.ended||!this.item||(this.ended=!0,this.playing=!1,this._changed(),this.onEnded&&this.onEnded(this.item))}update(t,e){let n=e?100:this.revealTo>this.reveal?1.25:1.8;this.reveal<this.revealTo?this.reveal=Math.min(this.revealTo,this.reveal+t*n):this.reveal>this.revealTo&&(this.reveal=Math.max(this.revealTo,this.reveal-t*n));let s=this.reveal;this.U.uReveal.value=s*s*(3-2*s);let r=this.front-this.U.uFront.value;r=((r+Math.PI)%(2*Math.PI)+2*Math.PI)%(2*Math.PI)-Math.PI,this.U.uFront.value+=r*Math.min(1,t*6),this.reveal<=0&&this.revealTo<=0&&this.item&&(this.item=null,this.U.uHas.value=0)}};var q2=[-Math.SQRT1_2,0,0,Math.SQRT1_2],Ko=class{constructor(){this.prefer="motion",this.motion="off",this.devQ=null,this.yawOff=0,this.yaw=0,this.pitch=0,this.vyaw=0,this.vpitch=0,this.zoom=1,this.invert=!1,this.glide=!0,this.anim=null,this.dragging=!1,this.lastReading=0,this._onOri=this._onOri.bind(this)}get usingMotion(){return this.prefer==="motion"&&this.motion==="on"&&!!this.devQ}async enableMotion(){if(this.motion==="on")return!0;if(typeof window.DeviceOrientationEvent>"u")return this.motion="unavailable",!1;let t=this.heading();try{if(typeof DeviceOrientationEvent.requestPermission=="function"&&await DeviceOrientationEvent.requestPermission()!=="granted")return this.motion="unavailable",!1}catch{return this.motion="unavailable",!1}if(window.addEventListener("deviceorientation",this._onOri),this.motion="pending",!await new Promise(s=>{let r=performance.now(),o=()=>{this.devQ?s(!0):performance.now()-r>1600?s(!1):setTimeout(o,80)};o()}))return window.removeEventListener("deviceorientation",this._onOri),this.motion="unavailable",!1;this.motion="on";let n=lr(ys(this.devQ,[0,0,-1]));return this.yawOff=Yn(t-n-this.yaw),this.pitch=0,this.vpitch=0,!0}_onOri(t){if(t.alpha==null&&t.beta==null&&t.gamma==null)return;let e=screen.orientation&&typeof screen.orientation.angle=="number"?screen.orientation.angle:window.orientation||0,n=rd((t.beta||0)*fe,(t.alpha||0)*fe,-(t.gamma||0)*fe);n=cr(n,q2),n=cr(n,ko(0,0,1,-e*fe)),this.devQ=n,this.lastReading=performance.now()}setPrefer(t){if(t===this.prefer)return;let e=this.heading(),n=this.elevation();if(this.prefer=t,this.anim=null,this.stopGlide(),t==="touch")this.yaw=e,this.pitch=Te(n,-85*fe,85*fe);else if(this.motion==="on"&&this.devQ){let s=lr(ys(this.devQ,[0,0,-1]));this.yaw=0,this.yawOff=Yn(e-s)}}recenter(t=0){if(this.anim=null,this.stopGlide(),this.usingMotion){let e=lr(ys(this.devQ,[0,0,-1]));this.yaw=0,this.yawOff=Yn(t-e)}else this.yaw=t,this.pitch=0}quat(){return this.usingMotion?cr(qc(this.yawOff+this.yaw),this.devQ):cr(qc(this.yaw),od(this.pitch))}heading(){return lr(ys(this.quat(),[0,0,-1]))}elevation(){return sd(ys(this.quat(),[0,0,-1]))}drag(t,e,n,s){let r=this.invert?-1:1,o=-t*n*r;this.yaw+=o,this.usingMotion||(this.pitch=Te(this.pitch+e*n*r,-85*fe,85*fe));let a=1/Math.max(s,.008);this.vyaw=.75*this.vyaw+.25*o*a,this.vpitch=this.usingMotion?0:.75*this.vpitch+.25*e*n*r*a,this.anim=null}stopGlide(){this.vyaw=0,this.vpitch=0}face(t,{level:e=!0,duration:n=.7}={}){let s=Yn(t-this.heading());this.anim={y0:this.yaw,y1:this.yaw+s,p0:this.pitch,p1:e&&!this.usingMotion?0:this.pitch,k:0,dur:Math.max(.001,n)},this.stopGlide()}turn(t,e=.45){let n=this.anim?this.anim.y1:this.yaw;this.anim={y0:this.yaw,y1:n+t,p0:this.pitch,p1:this.pitch,k:0,dur:e},this.stopGlide()}update(t){if(this.anim){let e=this.anim;e.k=Math.min(1,e.k+t/e.dur);let n=id(e.k);this.yaw=e.y0+(e.y1-e.y0)*n,this.pitch=e.p0+(e.p1-e.p0)*n,e.k>=1&&(this.anim=null)}else if(!this.dragging&&(this.vyaw||this.vpitch)){if(!this.glide){this.stopGlide();return}this.yaw+=this.vyaw*t,this.usingMotion||(this.pitch=Te(this.pitch+this.vpitch*t,-85*fe,85*fe));let e=Math.exp(-t*4.2);this.vyaw*=e,this.vpitch*=e,Math.abs(this.vyaw)+Math.abs(this.vpitch)<.002&&this.stopGlide()}}spinSpeed(){return Math.abs(this.vyaw)}};var jo=[{id:"musician",name:"Musician"},{id:"athlete",name:"Athlete"},{id:"character",name:"Character"}],Zn={1:{name:"Calm",blurb:"A still or slow camera. Fine for anyone."},2:{name:"Moving",blurb:"Walking, drifting or gentle flight."},3:{name:"Intense",blurb:"Fast motion, drops and spins. A heads-up comes first."}},cd=[5,3,1,2,4],F2={musician:[["Main Stage, Front Row",2,!1,"Stand at the lip of a festival stage as the light rigs sweep over you and the crowd."],["The Session",1,!1,"A cellist alone in a wood-panelled studio, close enough to hear the bow."],["Rooftop Set",2,!0,"A DJ set on a city rooftop as the skyline lights up behind the booth."],["Drum Room",2,!1,"A concrete rehearsal room, one bare bulb, and you right beside the kit."],["Desert Piano",1,!1,"A grand piano on cracked desert ground at golden hour, with nothing else for miles."]],athlete:[["Final Whistle",2,!1,"The centre circle of a floodlit stadium as the whole place erupts."],["Big Wave",2,!0,"In the water beside the board as a turquoise wave stands up at sunrise."],["The Climb",2,!1,"A sheer granite wall high above the valley at dawn, rising beside the climber."],["Night Sprint",2,!1,"Track level on a wet night, out of the blocks beside the sprinter."],["Powder Line",3,!1,"Close behind a skier carving deep powder through the pines. Fast; sitting helps."]],character:[["The Lighthouse Keeper",1,!1,"Dusk on the gallery with the keeper as the lamp turns and the harbour lights come on."],["The Night Courier",2,!1,"Riding at the courier\u2019s shoulder through rain-wet neon streets."],["The Aurora Hunter",1,!1,"She has waited all winter on a frozen lake for this sky. Look up."],["The Clockmaker",1,!0,"A tiny shop full of ticking clocks, and one man at work under a brass lamp."],["The Stargazer",1,!1,"A telescope, a campfire and the Milky Way over a desert ridge."]]},Ss=[],ws={};for(let i of jo)ws[i.id]=F2[i.id].map(([t,e,n,s],r)=>{let o=`${i.id}-${r+1}`,a={id:o,cat:i.id,rank:r+1,title:t,comfort:e,isNew:n,why:s,creator:"YOURA Studios",src:`assets/video/${o}.mp4`,poster:`assets/video/${o}.jpg`,projection:"equirect",dur:0,standin:!1,missing:!0};return Ss.push(a),a});function hd(i){for(let t of Ss){let e=i&&i[t.id];if(!e){t.missing=!0;continue}t.missing=!1,t.dur=e.dur,t.projection=e.projection,t.standin=!!e.standin,t.creator=e.standin?"Stand-in scene":"YOURA Studios"}}var Gc="youra.v1",ud=()=>({settings:{look:"motion",invert:!1,recenter:!0,glide:!0,vignette:!0,headsUp:!0,hideIntense:!1,breaks:!1,intro:"short",autoplay:!0},watched:{},saved:[],reactions:{},firstRunDone:!1,introSeen:!1,firstPlayDone:!1,lastCategory:"musician"});function O2(){let i=ud();try{let t=localStorage.getItem(Gc);if(!t)return i;let e=JSON.parse(t);return{...i,...e,settings:{...i.settings,...e.settings||{}}}}catch{return i}}var Vt={d:O2(),get s(){return this.d.settings},save(){try{localStorage.setItem(Gc,JSON.stringify(this.d))}catch{}},set(i,t){this.d.settings[i]=t,this.save()},isSaved(i){return this.d.saved.includes(i)},toggleSaved(i){let t=this.d.saved.indexOf(i);return t>=0?this.d.saved.splice(t,1):this.d.saved.unshift(i),this.save(),t<0},isWatched(i){return!!this.d.watched[i]},markWatched(i){return this.d.watched[i]?!1:(this.d.watched[i]=Date.now(),this.save(),!0)},react(i,t){return this.d.reactions[i]===t?delete this.d.reactions[i]:this.d.reactions[i]=t,this.save(),this.d.reactions[i]||null},reset(){this.d=ud(),this.d.firstRunDone=!0,this.d.introSeen=!0;try{localStorage.removeItem(Gc)}catch{}this.save()}},gr=new Map,Qo=null;function ta(){return Qo||(Qo=new Promise(i=>{try{if(!("indexedDB"in window))return i(null);let t=indexedDB.open("youra",1);t.onupgradeneeded=()=>t.result.createObjectStore("videos",{keyPath:"id"}),t.onsuccess=()=>i(t.result),t.onerror=()=>i(null),t.onblocked=()=>i(null)}catch{i(null)}}),Qo)}function ea(i,t,e){return new Promise((n,s)=>{try{let r=i.transaction("videos",t),o=r.objectStore("videos"),a=e(o);r.oncomplete=()=>n(a&&"result"in a?a.result:void 0),r.onerror=()=>s(r.error),r.onabort=()=>s(r.error)}catch(r){s(r)}})}var xr={persistent:null,async all(){let i=await ta();if(this.persistent=!!i,!i)return[...gr.values()];try{return(await ea(i,"readonly",e=>e.getAll())||[]).sort((e,n)=>e.added-n.added)}catch{return[...gr.values()]}},async put(i){let t=await ta();if(t)try{return await ea(t,"readwrite",e=>e.put(i)),!0}catch{}return gr.set(i.id,i),!1},async remove(i){gr.delete(i);let t=await ta();if(t)try{await ea(t,"readwrite",e=>e.delete(i))}catch{}},async clear(){gr.clear();let i=await ta();if(i)try{await ea(i,"readwrite",t=>t.clear())}catch{}}};function O(i,t,...e){let n=document.createElement(i);if(t)for(let[s,r]of Object.entries(t))r==null||r===!1||(s==="class"?n.className=r:s==="style"&&typeof r=="object"?Object.assign(n.style,r):s==="html"?n.innerHTML=r:s.startsWith("on")&&typeof r=="function"?n.addEventListener(s.slice(2).toLowerCase(),r):typeof r=="boolean"||typeof r=="number"&&s in n?n[s]=r:n.setAttribute(s,r===!0?"":r));for(let s of e.flat(1/0))s==null||s===!1||n.append(s.nodeType?s:document.createTextNode(String(s)));return n}var B2={back:'<path d="M15 5l-7 7 7 7"/>',close:'<path d="M6 6l12 12M18 6L6 18"/>',play:'<path d="M8 5.5v13l10.5-6.5z" fill="currentColor" stroke="none"/>',pause:'<path d="M8 5h3v14H8zM13 5h3v14h-3z" fill="currentColor" stroke="none"/>',list:'<path d="M9 6h11M9 12h11M9 18h11"/><circle cx="4.5" cy="6" r="1" fill="currentColor"/><circle cx="4.5" cy="12" r="1" fill="currentColor"/><circle cx="4.5" cy="18" r="1" fill="currentColor"/>',saved:'<path d="M6.5 3.5h11v17l-5.5-4-5.5 4z"/>',savedOn:'<path d="M6.5 3.5h11v17l-5.5-4-5.5 4z" fill="currentColor"/>',gear:'<circle cx="12" cy="12" r="3.2"/><path d="M12 2.8v2.6M12 18.6v2.6M21.2 12h-2.6M5.4 12H2.8M18.5 5.5l-1.8 1.8M7.3 16.7l-1.8 1.8M18.5 18.5l-1.8-1.8M7.3 7.3L5.5 5.5"/>',share:'<path d="M12 15V3.5M7.5 8L12 3.5 16.5 8"/><path d="M5 12.5v6.5a1.5 1.5 0 001.5 1.5h11a1.5 1.5 0 001.5-1.5v-6.5"/>',motion:'<rect x="7" y="3" width="10" height="18" rx="2.2"/><path d="M3.5 8.5a6 6 0 000 7M20.5 8.5a6 6 0 010 7"/>',touch:'<path d="M9.5 11V5.5a1.5 1.5 0 013 0V11m0-1.5a1.5 1.5 0 013 0V12m0-1a1.5 1.5 0 013 0v4.5a6 6 0 01-6 6h-.6a6 6 0 01-4.9-2.6L4.6 15a1.5 1.5 0 012.4-1.8l2.5 2.3"/>',left:'<path d="M14.5 6l-6 6 6 6"/>',right:'<path d="M9.5 6l6 6-6 6"/>',check:'<path d="M5 12.5l4.5 4.5L19 7.5"/>',heart:'<path d="M12 20s-7.5-4.6-7.5-10.2A4.3 4.3 0 0112 7.3a4.3 4.3 0 017.5 2.5C19.5 15.4 12 20 12 20z"/>',heartOn:'<path d="M12 20s-7.5-4.6-7.5-10.2A4.3 4.3 0 0112 7.3a4.3 4.3 0 017.5 2.5C19.5 15.4 12 20 12 20z" fill="currentColor"/>',meh:'<circle cx="12" cy="12" r="8.5"/><path d="M8.5 15.5h7"/><circle cx="9" cy="10" r=".9" fill="currentColor"/><circle cx="15" cy="10" r=".9" fill="currentColor"/>',plus:'<path d="M12 5v14M5 12h14"/>',trash:'<path d="M4.5 7h15M10 7V4.5h4V7M6.5 7l1 13h9l1-13"/>',front:'<circle cx="12" cy="12" r="8.5"/><path d="M12 6.5l3 6.5h-6z" fill="currentColor" stroke="none"/>',replay:'<path d="M4.5 12a7.5 7.5 0 107.5-7.5H9"/><path d="M11 2l-2.5 2.5L11 7"/>',info:'<circle cx="12" cy="12" r="8.5"/><path d="M12 11v5.5"/><circle cx="12" cy="7.8" r=".9" fill="currentColor"/>'};function ne(i,t=22){let e=O("span",{class:"ico","aria-hidden":"true"});return e.innerHTML=`<svg width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${B2[i]||""}</svg>`,e}function Ts(i,t,e=22){let n=i.querySelector(".ico"),s=ne(t,e);n?n.replaceWith(s):i.prepend(s)}var k2=0;function _r(i=40){let t="ym"+ ++k2,e=O("span",{class:"mark","aria-hidden":"true"});return e.innerHTML=`<svg width="${i}" height="${i}" viewBox="-96 -134 192 192"><defs><mask id="${t}"><rect x="-96" y="-134" width="192" height="192" fill="#fff"/><circle cx="-0.51" cy="171.97" r="181.76" fill="#000"/></mask></defs><g fill="none" stroke="#E11737" mask="url(#${t})"><circle r="32.95" stroke-width="12.1"/><circle r="57.38" stroke-width="11.11"/><circle r="81.95" stroke-width="12.11"/></g><circle r="10.74" fill="#fff"/></svg>`,e}function Wc(i){let t=O("span",{class:"bars","aria-hidden":"true"});for(let e=1;e<=3;e++)t.append(O("i",{class:e<=i?"on":""}));return t}var Es=null,dd=0;function De(i,t=2600){Es||(Es=O("div",{class:"toast",role:"status","aria-live":"polite"}),document.getElementById("app").append(Es)),Es.textContent=i,Es.classList.add("on"),clearTimeout(dd),dd=setTimeout(()=>Es.classList.remove("on"),t)}function Xc({title:i,body:t,ok:e="OK",cancel:n="Cancel",danger:s=!1}){return new Promise(r=>{let o=h=>{c.classList.remove("open"),setTimeout(()=>c.remove(),250),document.removeEventListener("keydown",a,!0),r(h)},a=h=>{h.key==="Escape"&&(h.stopPropagation(),o(!1))},l=O("button",{class:"btn "+(s?"danger":"primary"),onclick:()=>o(!0)},e),c=O("div",{class:"modal",role:"alertdialog","aria-modal":"true","aria-labelledby":"cd-title"},O("div",{class:"modal-scrim",onclick:()=>o(!1)}),O("div",{class:"card"},O("h2",{id:"cd-title"},i),t?O("p",{class:"muted"},t):null,O("div",{class:"row end"},O("button",{class:"btn ghost",onclick:()=>o(!1)},n),l)));document.getElementById("app").append(c),document.addEventListener("keydown",a,!0),requestAnimationFrame(()=>{c.classList.add("open"),l.focus()})})}function Tn(i){return i=Math.max(0,Math.floor(i||0)),Math.floor(i/60)+":"+String(i%60).padStart(2,"0")}function Yc(i,t){i.onerror=()=>i.removeAttribute("src"),t&&t.poster?i.src=t.poster:i.removeAttribute("src")}function fd(i){let t=document.getElementById("app"),{store:e,toast:n}=i,s=[];function r(S,J,z){let G=document.activeElement;s.push({name:S,el:J,close:z,restore:G}),i.overlay=S}function o(S){let J=s.findIndex(G=>G.name===S);if(J<0)return null;let[z]=s.splice(J,1);if(i.overlay=s.length?s[s.length-1].name:null,z.restore&&z.restore.focus&&document.contains(z.restore))try{z.restore.focus({preventScroll:!0})}catch{}return z}function a(S){return s.some(J=>J.name===S)}function l(S){requestAnimationFrame(()=>{let J=S.querySelector("[data-autofocus]")||S.querySelector('button, [href], input, [tabindex]:not([tabindex="-1"])');if(J)try{J.focus({preventScroll:!0})}catch{}})}function c(S){S._open=!0,S.hidden=!1,requestAnimationFrame(()=>requestAnimationFrame(()=>{S._open&&S.classList.add("open")}))}function h(S){S._open=!1,S.classList.remove("open"),clearTimeout(S._t),S._t=setTimeout(()=>{S._open||(S.hidden=!0)},340)}let u=S=>String(S).padStart(2,"0"),f=S=>S.cat==="yours"?"Yours":i.catName(S.cat);function m(S,{long:J=!1}={}){let z=O("div",{class:"facts"});return S.rank&&z.append(O("span",{class:"mono"},"#"+u(S.rank))),S.dur&&z.append(O("span",{class:"mono"},Tn(S.dur))),S.comfort?z.append(O("span",{class:"comfort"},Wc(S.comfort),Zn[S.comfort].name)):z.append(O("span",null,"Not rated")),S.stereo&&z.append(O("span",{class:"tag"},"3D")),S.isNew&&!e.isWatched(S.id)&&z.append(O("span",{class:"tag red"},"NEW")),e.isWatched(S.id)&&z.append(O("span",{class:"watched"},ne("check",16),"Watched")),J&&S.standin&&z.append(O("span",{class:"tag ghost"},"Stand-in scene")),J&&S.missing&&z.append(O("span",{class:"tag ghost"},"Coming soon")),z}let g={};g.img=O("img",{class:"pv-img",alt:""}),g.rank=O("span",{class:"pv-rank mono"}),g.title=O("h2",{id:"pv-title"}),g.by=O("div",{class:"pv-by"}),g.facts=O("div"),g.why=O("p",{class:"why"}),g.comfort=O("p",{class:"note"}),g.watch=O("button",{class:"btn primary big","data-autofocus":""},ne("play",20),O("span",null,"Watch in 360\xB0")),g.save=O("button",{class:"btn icon-btn"},ne("saved",20),O("span",null,"Save")),g.share=O("button",{class:"btn icon-btn"},ne("share",20),O("span",null,"Share")),g.sheet=O("section",{class:"sheet",role:"dialog","aria-modal":"true","aria-labelledby":"pv-title"},O("div",{class:"grab","aria-hidden":"true"}),O("div",{class:"pv-media"},g.img,g.rank,O("button",{class:"round close","aria-label":"Close",onclick:()=>d()},ne("close",20))),g.title,g.by,g.facts,O("div",{class:"actions"},g.watch,g.save,g.share),g.why,g.comfort),g.wrap=O("div",{class:"sheet-wrap",hidden:!0},O("div",{class:"scrim",onclick:()=>d()}),g.sheet),t.append(g.wrap),g.watch.addEventListener("click",()=>{g.item&&i.watch(g.item)}),g.save.addEventListener("click",()=>{if(!g.item)return;let S=e.toggleSaved(g.item.id);i.refreshTile(g.item),x(),tt(),n(S?"Saved. Find it under Saved in the dock.":"Removed from Saved")}),g.share.addEventListener("click",()=>{g.item&&i.share(g.item)}),(()=>{let S=null,J=0;g.sheet.addEventListener("pointerdown",G=>{G.target.closest("button, a, input")||g.sheet.scrollTop>0||(S=G.clientY,J=0,g.sheet.style.transition="none")}),g.sheet.addEventListener("pointermove",G=>{S!=null&&(J=Math.max(0,G.clientY-S),g.sheet.style.transform=`translateY(${J}px)`)});let z=()=>{S!=null&&(S=null,g.sheet.style.transition="",g.sheet.style.transform="",J>90&&d())};g.sheet.addEventListener("pointerup",z),g.sheet.addEventListener("pointercancel",z)})();function x(){let S=g.item&&e.isSaved(g.item.id);Ts(g.save,S?"savedOn":"saved",20),g.save.querySelector("span:last-child").textContent=S?"Saved":"Save",g.save.setAttribute("aria-pressed",String(!!S)),g.save.classList.toggle("on",!!S)}function p(S){if(S){g.item=S,Yc(g.img,S),g.watch.querySelector("span:last-child").textContent=S.projection==="flat"?"Watch on the big screen":"Watch in 360\xB0",g.rank.textContent=u(S.rank),g.title.textContent=S.title,g.by.textContent=`${S.creator} \xB7 ${f(S)}`,g.facts.replaceChildren(m(S,{long:!0})),g.why.replaceChildren(O("span",{class:"label"},S.local?"Your video":"Why it\u2019s here"),S.why),g.comfort.textContent=S.comfort?`${Zn[S.comfort].name}: ${Zn[S.comfort].blurb}`:"Not rated for comfort. Videos you add aren\u2019t rated.",g.watch.disabled=!!S.missing,g.share.hidden=!!S.local||i.embedded,x(),a("preview")||(c(g.wrap),r("preview",g.wrap,d)),l(g.sheet);try{history.replaceState(null,"","#v-"+S.id)}catch{}}}function d(){if(a("preview")){h(g.wrap),o("preview");try{history.replaceState(null,"",location.pathname+location.search)}catch{}}}let E={};E.title=O("h2",{id:"hu-title"},"This one moves fast"),E.name=O("div",{class:"hu-name"}),E.dont=O("input",{type:"checkbox",id:"hu-dont"}),E.go=O("button",{class:"btn primary","data-autofocus":""},"Watch anyway"),E.calm=O("button",{class:"btn"},"Pick a calmer one"),E.card=O("div",{class:"card"},O("div",{class:"tag red"},"INTENSE MOTION"),E.title,E.name,O("p",{class:"muted"},"Expect quick turns and drops. Sitting down helps, and you can stop at any time."),O("ul",{class:"tips"},O("li",null,"Sit or stand somewhere steady."),O("li",null,"Look away from the screen if it\u2019s too much.")),O("div",{class:"stack"},E.go,E.calm),O("label",{class:"check"},E.dont,O("span",null,"Don\u2019t warn me again"))),E.wrap=O("div",{class:"modal",hidden:!0,role:"dialog","aria-modal":"true","aria-labelledby":"hu-title"},O("div",{class:"modal-scrim",onclick:()=>v()}),E.card),t.append(E.wrap),E.go.addEventListener("click",()=>{let S=E.item;E.dont.checked&&e.set("headsUp",!1),v(),i.watch(S,{skipHeadsUp:!0})}),E.calm.addEventListener("click",()=>{let S=E.item;v();let J=i.items(S.cat).filter(z=>z.comfort===1).sort((z,G)=>Math.abs(z.rank-S.rank)-Math.abs(G.rank-S.rank))[0];J&&(i.mode==="player"&&i.exitPlayer(),d(),i.cat!==J.cat&&i.setCategory(J.cat,{animate:!1}),i.faceItem(J),setTimeout(()=>p(J),i.reduced?0:650))});function _(S){E.item=S,E.name.textContent=`${u(S.rank)} \xB7 ${S.title}`,E.dont.checked=!1,y(),c(E.wrap),a("headsup")||r("headsup",E.wrap,v),l(E.card)}function v(){a("headsup")&&(h(E.wrap),o("headsup"))}let N={};N.motion=O("button",{class:"btn primary big","data-autofocus":""},ne("motion",20),O("span",null,"Use motion")),N.touch=O("button",{class:"btn big"},ne("touch",20),O("span",null,"Touch only")),N.list=O("button",{class:"btn ghost"},ne("list",20),O("span",null,"Browse as a list")),N.body=O("p",{class:"muted"}),N.note=O("p",{class:"note"}),N.card=O("div",{class:"card firstrun"},_r(52),O("h2",{id:"fr-title"},"Look around"),N.body,N.note,O("div",{class:"stack"},N.motion,N.touch,N.list)),N.wrap=O("div",{class:"modal light",hidden:!0,role:"dialog","aria-modal":"true","aria-labelledby":"fr-title"},O("div",{class:"modal-scrim"}),N.card),t.append(N.wrap);let P=()=>{e.d.firstRunDone=!0,e.save(),h(N.wrap),o("firstrun"),i.syncLook()};N.motion.addEventListener("click",()=>{let S=i.setLook("motion",{quiet:!0});P(),S.then(J=>{J&&n("Motion on. Turn your phone to look around."),i.afterFirstRun()})}),N.touch.addEventListener("click",()=>{i.setLook("touch",{quiet:!0}),P(),n("Drag to look around. Switch to motion any time, top right."),i.afterFirstRun()}),N.list.addEventListener("click",()=>{i.setLook(i.look.usingMotion?"motion":"touch",{quiet:!0}),P(),H()});function q(){let S=i.hasOrientation;N.body.textContent=i.motionLikely?"YOURA follows your phone. Turn, tilt and look up, the way you would standing there. A drag adds a turn on top.":"Drag to look around. On a phone or tablet, YOURA can follow its motion instead.",N.note.textContent=i.embedded?"This preview can\u2019t read motion sensors. On your iPhone, open YOURA from its own address (and add it to your Home Screen) for full motion tracking.":"No location access, and nothing leaves your phone.",N.motion.hidden=!(S&&i.motionLikely)||i.embedded,c(N.wrap),r("firstrun",N.wrap,()=>{}),l(N.card)}let I={};I.head=O("span",{class:"label"},"Up next"),I.count=O("span",{class:"count mono"}),I.bar=O("div",{class:"countbar"},O("i")),I.img=O("img",{alt:""}),I.t=O("div",{class:"t"}),I.m=O("div",{class:"m"}),I.next=O("button",{class:"un-next"},I.img,O("div",null,I.t,I.m)),I.play=O("button",{class:"btn primary","data-autofocus":""},ne("play",18),O("span",null,"Play now")),I.back=O("button",{class:"btn ghost"},"Back to the studio"),I.q=O("div",{class:"react-q"}),I.love=O("button",{class:"chip-btn"},ne("heart",18),O("span",null,"Loved it")),I.meh=O("button",{class:"chip-btn"},ne("meh",18),O("span",null,"Not for me")),I.dots=O("div",{class:"dots","aria-hidden":"true"}),I.done=O("p",{class:"muted"}),I.card=O("div",{class:"card upnext"},O("div",{class:"un-head"},I.head,I.count),I.bar,I.next,I.done,O("div",{class:"row"},I.play,I.back),O("div",{class:"react"},I.q,O("div",{class:"row"},I.love,I.meh)),I.dots),I.wrap=O("div",{class:"modal",hidden:!0,role:"dialog","aria-modal":"true","aria-label":"Up next"},O("div",{class:"modal-scrim"}),I.card),t.append(I.wrap);let T=null;function y(){T&&(clearInterval(T.timer),T=null,I.count.textContent="",I.card.classList.remove("counting"))}I.card.addEventListener("pointerdown",S=>{S.target.closest(".btn.primary")||y()}),I.play.addEventListener("click",()=>{let S=I.nextItem;y(),S&&i.watch(S)}),I.next.addEventListener("click",()=>{let S=I.nextItem;y(),S&&i.watch(S)}),I.back.addEventListener("click",()=>{y(),i.exitPlayer()});let B=S=>{let J=I.item;if(!J)return;let z=e.react(J.id,S);X(),z==="love"?n("Glad you liked it. We\u2019ll use that to pick what\u2019s next."):z==="meh"&&n("Thanks. We\u2019ll show fewer like it.")};I.love.addEventListener("click",()=>B("love")),I.meh.addEventListener("click",()=>B("meh"));function X(){let S=I.item?e.d.reactions[I.item.id]:null;I.love.classList.toggle("on",S==="love"),I.love.setAttribute("aria-pressed",String(S==="love")),I.meh.classList.toggle("on",S==="meh"),I.meh.setAttribute("aria-pressed",String(S==="meh")),Ts(I.love,S==="love"?"heartOn":"heart",18)}function j(S,J){I.item=S,I.nextItem=J,I.q.textContent=`How was \u201C${S.title}\u201D?`,X();let z=i.items(S.cat);if(I.dots.replaceChildren(...z.map(G=>O("i",{class:(e.isWatched(G.id)?"w ":"")+(G===S?"cur":"")}))),J?(I.next.hidden=!1,I.play.hidden=!1,I.done.hidden=!0,Yc(I.img,J),I.t.textContent=J.title,I.m.textContent=`${u(J.rank)} \xB7 ${Tn(J.dur)}${J.comfort?" \xB7 "+Zn[J.comfort].name:""}`):(I.next.hidden=!0,I.play.hidden=!0,I.done.hidden=!1,I.done.textContent=`That\u2019s every video in ${f(S)}. Try another category back in the studio.`),c(I.wrap),a("upnext")||r("upnext",I.wrap,et),l(I.card),y(),J&&e.s.autoplay&&!(J.comfort===3&&e.s.headsUp)){let G=5;I.count.textContent=`in ${G}`,I.card.classList.remove("counting"),I.card.offsetWidth,I.card.classList.add("counting"),T={timer:setInterval(()=>{if(G-=1,G>0){I.count.textContent=`in ${G}`;return}y(),i.watch(J)},1e3)}}}function et(){y(),a("upnext")&&(h(I.wrap),o("upnext"))}let nt={mode:"list",cat:null};nt.title=O("h2",{id:"ls-title"}),nt.sub=O("p",{class:"muted small"}),nt.tabs=O("div",{class:"tabs",role:"tablist","aria-label":"Categories"}),nt.rows=O("ol",{class:"rows"}),nt.empty=O("div",{class:"empty"}),nt.panel=O("section",{class:"panel",role:"dialog","aria-modal":"true","aria-labelledby":"ls-title"},O("header",{class:"panel-head"},O("button",{class:"round close","aria-label":"Close",onclick:()=>R("list")},ne("back",20)),O("div",null,nt.title,nt.sub)),nt.tabs,O("div",{class:"panel-body"},nt.rows,nt.empty)),nt.wrap=O("div",{class:"panel-wrap",hidden:!0},nt.panel),t.append(nt.wrap);function it(S){let J=O("img",{class:"thumb",alt:"",loading:"lazy"}),z=e.isSaved(S.id),G=O("span",{class:"m"},O("span",{class:"mono"},Tn(S.dur)),S.comfort?O("span",{class:"comfort"},Wc(S.comfort),Zn[S.comfort].name):O("span",null,"Not rated"),S.stereo?O("span",{class:"tag"},"3D"):null,S.isNew&&!e.isWatched(S.id)?O("span",{class:"tag red"},"NEW"):null,e.isWatched(S.id)?O("span",{class:"watched"},ne("check",14),"Watched"):null,nt.mode==="saved"?O("span",{class:"cat"},f(S)):null),b=O("button",{class:"round save"+(z?" on":""),"aria-pressed":String(z),"aria-label":(z?"Remove from Saved: ":"Save: ")+S.title},ne(z?"savedOn":"saved",20));b.addEventListener("click",()=>{let Q=e.toggleSaved(S.id);i.refreshTile(S),n(Q?"Saved":"Removed from Saved"),ot()});let Z=O("button",{class:"row-main","aria-label":`${u(S.rank)}. ${S.title}, ${Tn(S.dur)}${S.comfort?", "+Zn[S.comfort].name:""}${e.isWatched(S.id)?", watched":""}`},O("span",{class:"thumb-wrap"},J,O("span",{class:"rk mono"},u(S.rank))),O("span",{class:"info"},O("span",{class:"t"},S.title),G));return Z.addEventListener("click",()=>{R("list"),S.cat!==i.cat&&i.setCategory(S.cat,{animate:!1}),i.faceItem(S),setTimeout(()=>p(S),i.reduced?0:380)}),Yc(J,S),O("li",{class:e.isWatched(S.id)?"is-watched":""},Z,b)}function ot(){let S=nt.mode==="saved";nt.title.textContent=S?"Saved":"List",nt.sub.textContent=S?"Everything you\u2019ve saved, newest first.":"The same picks as the studio screens, in rank order. No looking around needed.",nt.tabs.hidden=S,S||nt.tabs.replaceChildren(...i.cats().map(z=>{let G=O("button",{class:"chip",role:"tab","aria-selected":String(z.id===nt.cat)},z.name);return G.addEventListener("click",()=>{nt.cat=z.id,ot()}),G}));let J=S?e.d.saved.map(z=>i.findItem(z)).filter(Boolean):i.items(nt.cat);nt.rows.replaceChildren(...J.map(it)),nt.empty.hidden=J.length>0,nt.empty.replaceChildren(S?O("p",null,"Nothing saved yet. Long-press a screen in the studio, or tap Save in a preview."):O("p",null,"No videos here yet."))}function H(S="list"){nt.mode=S,nt.cat=i.cat,ot(),a("list")||(c(nt.wrap),r("list",nt.wrap,()=>R("list"))),nt.panel.querySelector(".panel-body").scrollTop=0,l(nt.panel)}let mt={};mt.body=O("div",{class:"panel-body settings"}),mt.panel=O("section",{class:"panel",role:"dialog","aria-modal":"true","aria-labelledby":"st-title"},O("header",{class:"panel-head"},O("button",{class:"round close","aria-label":"Close",onclick:()=>R("settings")},ne("back",20)),O("div",null,O("h2",{id:"st-title"},"Settings"))),mt.body),mt.wrap=O("div",{class:"panel-wrap",hidden:!0},mt.panel),t.append(mt.wrap);function xt(S,J,z,G){let b="sw-"+S,Z=O("button",{class:"switch",role:"switch",id:b,"aria-checked":String(!!e.s[S]),"aria-labelledby":b+"-l"},O("i"));return Z.addEventListener("click",()=>{e.set(S,!e.s[S]),Z.setAttribute("aria-checked",String(!!e.s[S])),G&&G(e.s[S])}),O("div",{class:"set-row"},O("div",{class:"set-text"},O("div",{class:"set-label",id:b+"-l"},J),z?O("div",{class:"set-desc"},z):null),Z)}function bt(S,J,z,G,b){let Z=O("div",{class:"seg",role:"radiogroup","aria-label":S}),Q=()=>{for(let lt of Z.children)lt.setAttribute("aria-checked",String(lt.dataset.v===z()))};for(let[lt,F]of J){let L=O("button",{role:"radio","data-v":lt},F);L.addEventListener("click",async()=>{await G(lt),Q()}),Z.append(L)}return Q(),O("div",{class:"set-row col"},O("div",{class:"set-text"},O("div",{class:"set-label"},S),b?O("div",{class:"set-desc"},b):null),Z)}function qt(S,...J){return O("section",{class:"set-group"},O("h3",null,S),O("div",{class:"set-card"},...J))}function jt(){let S=i.look;return S.usingMotion?"Motion is on.":S.motion==="unavailable"?i.embedded?"This preview can\u2019t read motion sensors.":"No motion sensor is available here.":e.s.look==="motion"?"Motion starts with your next tap.":"Touch only."}function U(){let S=O("input",{type:"file",accept:"video/*,.mp4,.mov,.m4v",class:"sr",id:"add-video"});S.addEventListener("change",async()=>{let Z=S.files&&S.files[0];S.value="",Z&&await i.addVideoFile(Z)&&U()});let J=i.yours.map(Z=>{let Q=O("button",{class:"round small","aria-label":"Remove "+Z.title},ne("trash",18));return Q.addEventListener("click",async()=>{await Xc({title:"Remove this video?",body:`\u201C${Z.title}\u201D will be removed from this device.`,ok:"Remove",danger:!0})&&(await i.removeVideo(Z.id),U())}),O("div",{class:"set-row"},O("div",{class:"set-text"},O("div",{class:"set-label"},Z.title),O("div",{class:"set-desc mono"},Tn(Z.dur)+(Z.stereo?" \xB7 3D":""))),Q)}),z=O("div",{class:"set-desc",id:"motion-status"},jt()),G=O("button",{class:"btn danger"},"Reset YOURA");G.addEventListener("click",async()=>{await Xc({title:"Reset YOURA?",body:"This clears your saved videos, watch history, reactions, settings and any videos you added on this device.",ok:"Reset",danger:!0})&&(await i.resetAll(),U())});let b=O("button",{class:"btn"},ne("replay",18),O("span",null,"Replay the intro"));b.addEventListener("click",()=>{w(),i.replayIntro()}),mt.body.replaceChildren(qt("Looking around",bt("Look with",[["motion","Motion"],["touch","Touch only"]],()=>i.look.usingMotion||e.s.look==="motion"&&i.look.motion!=="unavailable"?"motion":"touch",async Z=>{await i.setLook(Z),z.textContent=jt()}),O("div",{class:"set-row"},z),xt("invert","Invert drag","Drag moves the view instead of the scene.",()=>i.applySettings()),xt("recenter","Recenter when a video starts","Each video begins with its front ahead of you."),xt("glide","Drag keeps gliding","Off stops the view the moment you let go.",()=>i.applySettings()),xt("vignette","Vignette when spinning fast","Darkens the edges during fast drag turns.")),qt("Comfort",xt("headsUp","Heads-up before Intense videos","One clear choice before fast motion. It never blocks the video."),xt("hideIntense","Hide Intense videos from the studio screens","They stay in the list.",()=>i.applySettings()),xt("breaks","Break reminder","A gentle nudge after 20 minutes of looking around.")),qt("Intro",bt("Each launch",[["full","Full"],["short","Short"],["off","Off"]],()=>e.s.intro,Z=>e.set("intro",Z),"The first launch always plays it in full."),O("div",{class:"set-row"},b)),qt("Playback",xt("autoplay","Play the next video automatically","Up next counts down from 5. Never into an Intense video without the heads-up.")),qt("Your videos",O("div",{class:"set-row col"},O("div",{class:"set-desc"},"Add a video from this device to watch it in YOURA\u2019s player, with motion. A 2:1 MP4 plays as 360\xB0, 1:1 as 3D over-under, and any other shape plays on the giant curved screen. It stays on this device."),O("label",{class:"btn",for:"add-video"},ne("plus",18),O("span",null,"Add a video")),S),...J),qt("About",O("div",{class:"set-row col"},O("p",{class:"set-desc"},Ss.some(Z=>Z.standin)?"The studio is a path-traced 3D scene, lit live. The videos on its screens are stand-in scenes for now; real clips take their place as they are added.":"The studio is a path-traced 3D scene, lit live."),O("p",{class:"set-desc"},"For motion tracking on iPhone, open YOURA in Safari from its own web address and allow Motion & Orientation when asked. Add it to your Home Screen to open it full screen.")),O("div",{class:"set-row"},G)))}function D(){U(),a("settings")||(c(mt.wrap),r("settings",mt.wrap,()=>R("settings"))),mt.body.scrollTop=0,l(mt.panel)}function R(S){a(S)&&(S==="list"&&h(nt.wrap),S==="settings"&&h(mt.wrap),o(S))}function w(){for(let S of[...s].reverse())S.name!=="firstrun"&&S.close()}function tt(){a("list")&&ot(),a("preview")&&(x(),g.facts.replaceChildren(m(g.item,{long:!0})))}function ut(S){if(S.key!=="Escape"||!s.length)return!1;let J=s[s.length-1];return J.name==="firstrun"||J.close(),!0}return{openPreview:p,closePreview:d,showHeadsUp:_,showFirstRun:q,showUpNext:j,hideUpNext:et,openList:()=>H("list"),openSaved:()=>H("saved"),openSettings:D,closeAll:w,refresh:tt,handleKey:ut}}var aa=document.getElementById("app"),Mr=typeof window.DeviceOrientationEvent<"u",eh=Mr&&typeof DeviceOrientationEvent.requestPermission=="function",z2=(navigator.maxTouchPoints||0)>0,Kc=Math.tan(30*fe),pd=.72,md=1.4,H2=20*60,la=5,V2=32*fe,Lt=new Ko,Ue=new Oe(90,1,.02,400),yr=new Ke,ca=new k,ze,An,Jt,Rs,Kt,Re,Is=0,jc=0,Cs=0,ia=0,As=1,sa=1,Ps=-2,Zc=0,ra=null,Fi={},gd={},$={mode:"boot",cat:"musician",slots:[null,null,null,null,null],yours:[],overlay:null,playing:null,reduced:!1,embedded:!1,motionLikely:Mr&&z2,hasOrientation:Mr,look:Lt,store:Vt,toast:De};function Ls(){return $.yours.length?[...jo,{id:"yours",name:"Yours"}]:jo}function Ed(i){return(Ls().find(t=>t.id===i)||{}).name||""}function nh(i){return i==="yours"?$.yours.slice(0,la):ws[i]||[]}function Td(i){return Vt.s.hideIntense&&i.comfort===3}function ua(i){let t=nh(i);return cd.map(e=>{let n=t[e-1];return n&&!Td(n)?n:null})}function Cd(i){return Ss.find(t=>t.id===i)||$.yours.find(t=>t.id===i)||null}function Ad(i){let t=nh(i.cat).filter(n=>!Td(n)&&!n.missing),e=t.indexOf(i);if(t.length<2||e<0)return null;for(let n=1;n<t.length;n++){let s=t[(e+n)%t.length];if(!Vt.isWatched(s.id))return s}return t[(e+1)%t.length]}Object.assign($,{cats:Ls,catName:Ed,items:nh,findItem:Cd,nextItem:Ad});Object.defineProperty($,"introT",{get:()=>Is,set:i=>{Is=i}});function Rd(i){aa.innerHTML="",aa.append(O("div",{class:"fallback"},_r(64),O("h1",null,"YOURA"),O("p",null,i),O("p",{class:"muted"},"Try the latest Safari or Chrome, with hardware acceleration on.")))}function G2(){$.reduced=matchMedia("(prefers-reduced-motion: reduce)").matches;try{$.embedded=window.self!==window.top}catch{$.embedded=!0}ze=O("canvas",{class:"gl",role:"img","aria-label":"360 degree view. Turn your phone, or drag, to look around."}),aa.append(ze);try{An=new Bo(ze),Rs=new $o(An.renderer),Jt=new Go,Kt=new Jo}catch(i){return console.error(i),Rd("This device can\u2019t draw YOURA\u2019s 3D view, because WebGL 2 is off or unavailable."),!1}return ze.addEventListener("webglcontextlost",i=>{i.preventDefault(),De("The 3D view was interrupted. Reloading\u2026",4e3)}),ze.addEventListener("webglcontextrestored",()=>location.reload()),Kt.wholeFile=ih,Object.assign($,{gfx:An,stage:Jt,theater:Kt,intro:Rs}),!0}var on={},yt={},Id=[];function xd(){let i=O("button",{class:"round look-btn",onclick:()=>oh(Lt.usingMotion?"touch":"motion")},ne("motion"));return Id.push(i),i}function _d(){return O("span",{class:"needle","aria-hidden":"true"},O("i"))}function W2(){yt.vignette=O("div",{class:"vignette","aria-hidden":"true"}),yt.loading=O("div",{class:"studio-loading",role:"status"},"Opening the studio\u2026"),yt.skip=O("button",{class:"pill skip",onclick:Fd},"Skip intro"),yt.introHint=O("div",{class:"pill hint intro-hint"},ne("touch",18),O("span",null,"Drag to look around")),on.intro=O("div",{class:"layer intro-ui"},yt.introHint,yt.skip),yt.compass=O("button",{class:"pill compass","aria-label":"Face number 1",onclick:Nd},_d(),O("span",{class:"num"},"01")),yt.motionChip=O("button",{class:"pill motion-chip",onclick:()=>oh("motion")},ne("motion",18),O("span",null,"Tap to turn on motion")),yt.chips=O("div",{class:"chips",role:"tablist","aria-label":"Categories"}),yt.gaze=O("div",{class:"gaze","aria-hidden":"true"}),yt.splash=O("div",{class:"splash","aria-hidden":"true"}),yt.live=O("div",{class:"sr","aria-live":"polite"}),on.home=O("div",{class:"layer home-ui"},O("button",{class:"sr sr-focus",onclick:()=>Re.openList()},"Browse the videos as a list"),O("div",{class:"topbar"},O("div",{class:"brand"},_r(30),O("span",null,"YOURA")),yt.compass,xd()),yt.motionChip,yt.gaze,yt.splash,O("button",{class:"round edge left","aria-label":"Turn left",onclick:()=>Qc(-1)},ne("left")),O("button",{class:"round edge right","aria-label":"Turn right",onclick:()=>Qc(1)},ne("right")),O("nav",{class:"dock","aria-label":"Browse"},yt.chips,O("div",{class:"tools"},O("button",{class:"tool",onclick:()=>Re.openList()},ne("list",20),O("span",null,"List")),O("button",{class:"tool",onclick:()=>Re.openSaved()},ne("saved",20),O("span",null,"Saved")),O("button",{class:"tool",onclick:()=>Re.openSettings()},ne("gear",20),O("span",null,"Settings")))),yt.live),yt.pTitle=O("div",{class:"ptitle"}),yt.pCreator=O("div",{class:"pcreator"}),yt.pFront=O("button",{class:"round compass","aria-label":"Bring the video in front of you",onclick:()=>{Kt.faceFront(Lt.heading()),vn()}},_d()),yt.pPlay=O("button",{class:"round play","aria-label":"Pause",onclick:()=>{Kt.toggle(),vn()}},ne("pause")),yt.pSeek=O("input",{class:"seek",type:"range",min:"0",max:"1000",step:"1",value:"0","aria-label":"Position in the video"}),yt.pTime=O("span",{class:"time"},"0:00 / 0:00"),yt.pHint=O("div",{class:"pill hint p-hint"}),yt.pLoading=O("div",{class:"loading",role:"status","aria-label":"Loading"},O("i")),yt.pError=O("div",{class:"perror",role:"alert"}),on.player=O("div",{class:"layer player-ui"},O("div",{class:"topbar"},O("div",{class:"pleft"},O("button",{class:"round back",onclick:da,"aria-label":"Back to the studio"},ne("back",22),O("span",{class:"wide-only"},"Studio")),O("div",{class:"pmeta"},yt.pTitle,yt.pCreator)),O("div",{class:"pright"},yt.pFront,xd())),yt.pLoading,yt.pError,yt.pHint,O("div",{class:"pbar"},yt.pPlay,yt.pSeek,yt.pTime)),aa.append(on.intro,on.home,on.player,yt.vignette,yt.loading);let i=!1,t=()=>{Kt.seek(yt.pSeek.value/1e3*(Kt.dur||0)),zd()};yt.pSeek.addEventListener("input",()=>{i=!0,t(),vn()}),yt.pSeek.addEventListener("change",()=>{i=!1,t(),vn()}),yt.pSeek.addEventListener("pointerup",()=>{i=!1}),$.isSeeking=()=>i}function br(i){for(let[t,e]of Object.entries(on))e.classList.toggle("on",t===i)}function Ds(){yt.chips.innerHTML="";let i=Ls();i.forEach((t,e)=>{yt.chips.append(O("button",{class:"chip",role:"tab",id:"chip-"+t.id,"aria-selected":String(t.id===$.cat),"aria-label":`${t.name}, ${e+1} of ${i.length}`,onclick:()=>Oi(t.id)},t.name))})}function X2(){for(let i of yt.chips.children)i.setAttribute("aria-selected",String(i.id==="chip-"+$.cat))}function Pd(i,t,e){i.dataset.text!==e&&(i.dataset.text=e,i.innerHTML="",i.append(ne(t,18),O("span",null,e)))}function an(){let i=Lt.usingMotion;for(let e of Id)Ts(e,i?"motion":"touch"),e.setAttribute("aria-label",i?"Motion on. Switch to touch only":"Touch only. Switch to motion"),e.classList.toggle("active",i);let t=Vt.s.look==="motion"&&!i&&Lt.motion!=="unavailable"&&eh;yt.motionChip.classList.toggle("on",t&&$.mode==="home"&&Vt.d.firstRunDone),Pd(yt.introHint,i?"motion":"touch",i?"Turn your phone to look around":"Drag to look around")}$.syncLook=()=>an();function Y2(i){$.reduced||(yt.splash.textContent=i,yt.splash.classList.remove("show"),yt.splash.offsetWidth,yt.splash.classList.add("show"))}var $c=new Map;function ih(i){return $c.has(i)||$c.set(i,fetch(i).then(t=>t.ok?t.blob():null).then(t=>t&&t.size?URL.createObjectURL(t):null).catch(()=>null)),$c.get(i)}async function Ld(i){if($.embedded)for(let t of ws[i]||[]){if(t.missing||t.held)continue;let e=await ih(t.src);e&&(t.held=e)}}function sh(i){if(i==="yours"||!ws[i])return null;if(Fi[i])return Fi[i];let t=`assets/video/${i}.mp4`,e=document.createElement("video");e.muted=!0,e.loop=!0,e.playsInline=!0,e.setAttribute("playsinline",""),e.setAttribute("webkit-playsinline",""),e.setAttribute("muted",""),e.preload="auto",e.crossOrigin="anonymous",e.className="video-src",e.setAttribute("aria-hidden","true"),e.addEventListener("playing",()=>{i===$.cat&&tn()});let n=$.embedded?["whole","direct"]:["direct","whole"],s=()=>{let o=n.shift();if(!o){e._dead=!0;return}if(o==="direct"){e.src=t,r();return}ih(t).then(a=>{a?(e.src=a,r()):s()})},r=()=>{e._ready=!0,i===$.cat&&$.mode==="home"&&!document.hidden&&Us(i)};return e._next=s,e.addEventListener("error",s),document.body.appendChild(e),Fi[i]=e,s(),e}function Dd(i){let t=Fi[i];return!!t&&!t._dead&&!t.paused&&t.readyState>=2}function Us(i){for(let[n,s]of Object.entries(Fi))n!==i&&!s.paused&&s.pause();let t=sh(i);if(!t||t._dead||!t._ready)return;let e=t.play();e&&e.catch&&e.catch(()=>{}),clearTimeout(t._watch),t._watch=setTimeout(()=>{i===$.cat&&$.mode==="home"&&!t.paused&&t.readyState<2&&t.networkState!==2&&t._next()},5e3)}function Ud(){for(let i of Object.values(Fi))i.paused||i.pause()}function Z2(i){if(!i.poster)return null;let t=gd[i.id];return t||(t=gd[i.id]=new Image,t.onload=()=>{$.slots.includes(i)&&tn()},t.src=i.poster),t.complete&&t.naturalWidth?t:null}var vd='Jost, "Avenir Next", system-ui, sans-serif',Jc='"IBM Plex Mono", ui-monospace, Menlo, monospace';function yd(i,t,e,n,s,r,o){i.fillStyle=o,i.beginPath(),i.moveTo(t+r,e),i.arcTo(t+n,e,t+n,e+s,r),i.arcTo(t+n,e+s,t,e+s,r),i.arcTo(t,e+s,t,e,r),i.arcTo(t,e,t+n,e,r),i.closePath(),i.fill()}function $2(i,t,e){if(i.measureText(t).width<=e)return t;let n=t;for(;n.length>1&&i.measureText(n+"\u2026").width>e;)n=n.slice(0,-1);return n.trimEnd()+"\u2026"}function tn(){if(!Jt||!Jt.ready)return;let i=Dd($.cat);Jt.paintOverlay((t,e,n,s)=>{let r=$.slots[e];if(!r)return;if(!i){let f=Z2(r);if(f){let m=Math.max(n/f.naturalWidth,s/f.naturalHeight);t.drawImage(f,(n-f.naturalWidth*m)/2,(s-f.naturalHeight*m)/2,f.naturalWidth*m,f.naturalHeight*m)}else{let m=t.createLinearGradient(0,0,n,s);m.addColorStop(0,"#1b1216"),m.addColorStop(1,"#0b0809"),t.fillStyle=m,t.fillRect(0,0,n,s)}}let o=Vt.isWatched(r.id);o&&(t.fillStyle="rgba(0,0,0,0.5)",t.fillRect(0,0,n,s));let a=t.createLinearGradient(0,s-170,0,s);a.addColorStop(0,"rgba(0,0,0,0)"),a.addColorStop(1,"rgba(0,0,0,0.86)"),t.fillStyle=a,t.fillRect(0,s-170,n,170),t.textBaseline="alphabetic",t.fillStyle="#FF3355",t.font=`500 34px ${Jc}`;let l=String(r.rank).padStart(2,"0");t.fillText(l,26,s-70);let c=t.measureText(l).width;t.font=`400 25px ${Jc}`,t.fillStyle="rgba(255,255,255,0.85)";let h=[r.dur?Tn(r.dur):"",r.comfort?Zn[r.comfort].name:""].filter(Boolean).join("  \xB7  ");t.fillText(h,26+c+18,s-72),t.fillStyle="#fff",t.font=`600 42px ${vd}`,t.fillText($2(t,r.title,n-52),26,s-24);let u=22;if(t.textBaseline="middle",r.isNew&&!o){t.font=`600 24px ${vd}`;let f=t.measureText("NEW").width+26;yd(t,u,20,f,38,8,"#E11737"),t.fillStyle="#fff",t.fillText("NEW",u+13,40),u+=f+10}if(r.missing){t.font=`500 20px ${Jc}`;let f=t.measureText("COMING SOON").width+24;yd(t,u,20,f,38,8,"rgba(0,0,0,0.7)"),t.fillStyle="rgba(255,255,255,0.85)",t.fillText("COMING SOON",u+12,40)}if(Vt.isSaved(r.id)&&(t.fillStyle="#E11737",t.beginPath(),t.moveTo(n-78,0),t.lineTo(n-34,0),t.lineTo(n-34,62),t.lineTo(n-56,47),t.lineTo(n-78,62),t.closePath(),t.fill()),o){let f=n/2,m=s/2-20;t.fillStyle="#fff",t.beginPath(),t.arc(f,m,40,0,Math.PI*2),t.fill(),t.strokeStyle="#141414",t.lineWidth=7,t.lineCap="round",t.lineJoin="round",t.beginPath(),t.moveTo(f-17,m+1),t.lineTo(f-5,m+13),t.lineTo(f+18,m-12),t.stroke()}})}$.refreshTile=()=>tn();var na=null;function rh(){return Lt.motion==="on"?Promise.resolve(!0):(na||(na=Lt.enableMotion().finally(()=>{na=null,an()})),na)}async function oh(i,{quiet:t=!1}={}){return i==="touch"?(Vt.set("look","touch"),Lt.setPrefer("touch"),an(),t||De("Touch only. Drag to look around."),!0):(Vt.set("look","motion"),Lt.setPrefer("motion"),await rh()?(an(),t||De("Motion on. Turn your phone to look around."),!0):(Lt.setPrefer("touch"),Vt.set("look","touch"),an(),De($.embedded?"This preview can\u2019t read motion sensors. Open YOURA at its own address for motion. Drag to look around for now.":"Motion isn\u2019t available here, so drag to look around. You can try again in Settings.",5200),!1))}$.setLook=oh;function J2(){let i=()=>{$.mode==="home"&&!Dd($.cat)&&Us($.cat),eh&&Vt.s.look==="motion"&&Lt.motion!=="on"&&Lt.motion!=="unavailable"&&Vt.d.firstRunDone&&rh().then(t=>{!t&&Vt.s.look==="motion"&&Lt.setPrefer("touch"),an()})};window.addEventListener("touchend",i,!0),window.addEventListener("click",i,!0)}function Qc(i){Lt.turn(i*V2,$.reduced?.01:.45)}function Nd(){Lt.face(0,{duration:$.reduced?.01:.7})}function ah(i){let t=$.slots.indexOf(i);t>=0&&Jt.ready&&Lt.face(Jt.heading(t),{duration:$.reduced?.01:.7})}$.faceItem=ah;function qd(i){if(Re.closeAll(),Ud(),Lt.recenter(0),an(),Rs.reset(),i==="off"||$.reduced){lh(!0);return}$.mode="intro",br("intro"),Is=i==="short"?Vc.SHORT_START:0,jc=0,yt.skip.classList.remove("show"),setTimeout(()=>{$.mode==="intro"&&yt.skip.classList.add("show")},700),yt.introHint.classList.remove("show"),i!=="short"&&(setTimeout(()=>{$.mode==="intro"&&yt.introHint.classList.add("show")},900),setTimeout(()=>yt.introHint.classList.remove("show"),4200))}$.replayIntro=()=>{Kt.active&&da(),Jt.dark(),qd("full")};function Fd(){$.mode==="intro"&&lh(!1)}function lh(i){$.mode="arrive",$.fastArrive=!!i,ia=0,br(null),yt.skip.classList.remove("show"),yt.introHint.classList.remove("show"),Vt.d.introSeen||(Vt.d.introSeen=!0,Vt.save())}function K2(){$.mode="home",yt.loading.classList.remove("on"),An.releaseMS(),Lt.recenter(0),Ue.position.set(0,0,0),Ls().some(t=>t.id===$.cat)||($.cat="musician"),$.slots=ua($.cat),Jt.dark(),Jt.setMood($.cat,!0),Us($.cat),Jt.setVideo(sh($.cat),!1),Ld($.cat),tn();let i=$.fastArrive||$.reduced;Jt.powerOn(i),Cs=$.fastArrive?0:1,sa=1,Ds(),Ps=-2,setTimeout(()=>{$.mode==="home"&&(br("home"),an())},i?300:2600),setTimeout(()=>{$.mode==="home"&&(Vt.d.firstRunDone?Od():Re.showFirstRun())},i?900:4700)}$.afterFirstRun=()=>Od();function Od(){if(!ra)return;let i=Cd(ra);ra=null,i&&(i.cat!==$.cat&&Oi(i.cat,{animate:!1}),ah(i),Re.openPreview(i))}var Md=0;function Oi(i,{animate:t=!0}={}){Ls().some(n=>n.id===i)||(i="musician");let e=i!==$.cat;if($.cat=i,Vt.d.lastCategory=i,Vt.save(),$.slots=ua(i),Jt.ready&&($.mode==="home"||$.mode==="player")){let n=e&&t&&!$.reduced&&$.mode==="home";Jt.setMood(i),e&&(Us(i),Jt.setVideo(sh(i),n),Ld(i)),clearTimeout(Md),n?Md=setTimeout(tn,280):tn(),Ps=-2}X2(),e&&t&&$.mode==="home"&&Y2(Ed(i))}$.setCategory=Oi;$.refreshSphere=()=>{$.slots=ua($.cat),tn(),Ps=-2};function j2(i,{skipHeadsUp:t=!1}={}){if(!i)return;if(i.missing){De("This video isn\u2019t in the app yet.");return}if(i.comfort===3&&Vt.s.headsUp&&!t){Re.showHeadsUp(i);return}Re.closeAll(),i.cat!==$.cat&&Ls().some(r=>r.id===i.cat)&&Oi(i.cat,{animate:!1});let e=$.slots.indexOf(i);ca.set(0,0,-1).applyQuaternion(yr);let n=e>=0&&Jt.ready?Jt.screens[e].dir:ca.clone(),s=Vt.s.recenter||e<0||!Jt.ready?Lt.heading():Jt.heading(e);$.mode="player",$.playing=i,As=1,Kt.open(i,n,s,0),br("player"),yt.pTitle.textContent=i.title,yt.pCreator.textContent=i.creator,yt.pError.classList.remove("on"),kd(),an(),vn(),Q2(),ch(!0)}$.watch=j2;function da(){let i=$.playing;Re.hideUpNext(),Kt.close(),ch(!1),$.playing=null,$.mode="home",br("home"),an(),Us($.cat),tn(),i&&ah(i),Ps=-2}$.exitPlayer=da;function Bd(i){i&&Vt.markWatched(i.id)&&tn()}var th=0;function vn(){on.player.classList.remove("calm"),clearTimeout(th),th=setTimeout(()=>{$.mode==="player"&&Kt.playing&&!$.isSeeking()&&!$.overlay&&on.player.classList.add("calm")},3e3)}function kd(){Ts(yt.pPlay,Kt.playing?"pause":"play"),yt.pPlay.setAttribute("aria-label",Kt.playing?"Pause":"Play")}var pi=null;function Q2(){if(pi=null,yt.pHint.classList.remove("show"),Vt.d.firstPlayDone)return;let i=Lt.usingMotion;Pd(yt.pHint,i?"motion":"touch",i?"Turn your phone to look around":"Drag to look around"),yt.pHint.classList.add("show"),pi={start:Lt.heading(),startPitch:Lt.elevation(),t:0}}function zd(){let i=Kt.dur||0,t=Kt.time();yt.pSeek.style.setProperty("--p",((i?Te(t/i,0,1):0)*100).toFixed(2)+"%");let e=`${Tn(t)} / ${Tn(i)}`;yt.pTime.textContent!==e&&(yt.pTime.textContent=e)}function tg(i){let t=Kt.dur||0,e=Kt.time();$.isSeeking()||(yt.pSeek.value=String(t?Math.round(e/t*1e3):0)),zd(),yt.pFront.querySelector(".needle").style.transform=`rotate(${(Yn(Kt.front-Lt.heading())/fe).toFixed(1)}deg)`,yt.pLoading.classList.toggle("on",Kt.loading&&!Kt.error),Kt.error&&!yt.pError.classList.contains("on")&&(yt.pError.textContent=Kt.error,yt.pError.classList.add("on")),t&&e>=t*.85&&Bd($.playing),pi&&(pi.t+=i,(Math.abs(Yn(Lt.heading()-pi.start))>12*fe||Math.abs(Lt.elevation()-pi.startPitch)>10*fe||pi.t>7)&&(yt.pHint.classList.remove("show"),pi=null,Vt.d.firstPlayDone=!0,Vt.save()))}function eg(i){return i>=1?Kc:Math.min(.86,Kc/i)}function ng(i){let t=Kc*As,e,n;i>=1?(n=t,e=t*i):(e=t,n=t/i);let s=1.7;return Math.max(e,n)>s&&(n*=s/Math.max(e,n)),n}var oa=0,bd=0;function Hd(i){requestAnimationFrame(Hd);let t=oa?Math.min(.1,Math.max(0,(i-oa)/1e3)):1/60;if(oa=i,document.hidden||$.mode==="boot")return;An.govern(t),Lt.update(t);let{pw:e,ph:n}=An.fit(),s=e/n,r=Lt.quat();yr.set(r[0],r[1],r[2],r[3]);let o=An.look,a=i/1e3;if(Ue.aspect=s,$.mode==="intro")$.freeze||(Is+=t,jc+=t),Ue.fov=Rs.fov(s),Ue.updateProjectionMatrix(),o.white=Rs.apply(Is,Ue,yr,$.reduced),o.black=1-je(0,.5,jc),o.exposure=1,o.bloom=.85,o.threshold=.9,o.vignette=.5,o.fringe=.006,o.grain=.022,o.sat=1,An.render([Rs.scene],Ue,a,!0),(o.white>=.995||Is>Vc.IN+.4)&&lh(!1);else if($.mode==="arrive"){if(ia+=t,o.white=$.fastArrive?0:1,o.black=$.fastArrive?1:0,An.render([],Ue,a),yt.loading.classList.toggle("on",ia>1.2&&!Jt.ready),yt.loading.classList.toggle("dark",!$.fastArrive),Jt.failed){Rd("YOURA couldn\u2019t load its studio. Check your connection and reload."),$.mode="boot";return}Jt.ready&&($.fastArrive||ia>.25)&&K2()}else if($.mode==="home"||$.mode==="player"){Ue.position.set(0,0,0),Ue.quaternion.copy(yr);let c=Kt.reveal*Kt.reveal*(3-2*Kt.reveal),h=fi(eg(s),ng(s),c);Ue.fov=2*Math.atan(h)/fe,Ue.updateProjectionMatrix(),Ue.updateMatrixWorld(),ca.set(0,0,-1).applyQuaternion(yr);let u=$.mode==="player"?.1:$.overlay&&$.overlay!=="firstrun"?.45:1;sa+=(u-sa)*Math.min(1,t*5),Jt.dim=sa,Jt.setPixelScale(n),Jt.update(t,$.mode==="home"&&!$.overlay?ca:null,$.slots),Kt.update(t,$.reduced),Cs>0&&(Cs=Math.max(0,Cs-t/1.1)),o.white=Cs*Cs,o.black=0,o.exposure=1,o.bloom=fi(.4,.12,c),o.threshold=fi(1.2,2.6,c),o.vignette=fi(.36,0,c),o.fringe=fi(.006,0,c),o.grain=fi(.022,.008,c),o.sat=fi(1.14,1,c),An.render([Kt.covering?null:Jt.scene,Kt.active?Kt.scene:null],Ue,a);let f=Fi[$.cat];f&&Kt.covering&&!f.paused&&f.pause(),$.mode==="home"?ig():tg(t)}let l=Vt.s.vignette&&($.mode==="home"||$.mode==="player")&&!Lt.usingMotion?je(1.2,3.6,Lt.spinSpeed()):0;Math.abs(l-bd)>.01&&(bd=l,yt.vignette.style.opacity=l.toFixed(3)),Vt.s.breaks&&($.mode==="home"||$.mode==="player")&&(Zc+=t,Zc>H2&&(Zc=0,De("Twenty minutes of looking around. A short break helps your eyes and neck.",6e3)))}function ig(){let i=Yn(0-Lt.heading())/fe;if(yt.compass.querySelector(".needle").style.transform=`rotate(${i.toFixed(1)}deg)`,yt.compass.classList.toggle("ahead",Math.abs(i)<12),Jt.focus!==Ps){Ps=Jt.focus,yt.gaze.classList.toggle("on",Jt.focus>=0);let t=Jt.focus>=0?$.slots[Jt.focus]:null;t&&!$.overlay&&(yt.live.textContent=`${String(t.rank).padStart(2,"0")}. ${t.title}`)}}var Cn=new Map,be=null,vr=null,Sd=new k;function sg(i,t){let e=ze.getBoundingClientRect();return Sd.set((i-e.left)/e.width*2-1,1-(t-e.top)/e.height*2,.5).unproject(Ue).sub(Ue.position).normalize(),Sd}function rg(){let i=ze.getBoundingClientRect(),t=Math.tan(Ue.fov*fe/2);return 2*Math.atan(t*Ue.aspect)/Math.max(1,i.width)}function Vd(i,t){if($.mode!=="home"||!Jt.ready||!Jt.poweredOn)return null;let e=Jt.pick(sg(i,t));return e>=0?$.slots[e]:null}function wd(i,t){if($.mode==="home"){let e=Vd(i,t);e&&Re.openPreview(e)}else $.mode==="player"&&(on.player.classList.contains("calm")||!Kt.playing?vn():(on.player.classList.add("calm"),clearTimeout(th)))}function og(){ze.addEventListener("pointerdown",t=>{if(t.pointerType==="mouse"&&t.button!==0)return;try{ze.setPointerCapture(t.pointerId)}catch{}Cn.set(t.pointerId,{x:t.clientX,y:t.clientY});let e=performance.now();if(Cn.size===1)be={x0:t.clientX,y0:t.clientY,t0:e,tl:e,moved:!1,pinch:null,long:!1,timer:0},Lt.dragging=!0,Lt.stopGlide(),Lt.anim=null,$.mode==="home"&&(be.timer=setTimeout(()=>{let n=be;if(!n||n.moved||n.pinch)return;let s=Vd(n.x0,n.y0);if(!s)return;n.long=!0;let r=Vt.toggleSaved(s.id);tn(),Re.refresh(),De(r?`Saved \u201C${s.title}\u201D`:`Removed \u201C${s.title}\u201D from Saved`)},550));else if(Cn.size===2&&be){clearTimeout(be.timer);let[n,s]=[...Cn.values()];be.pinch={d0:Math.hypot(n.x-s.x,n.y-s.y)||1,z0:As},be.moved=!0}}),ze.addEventListener("pointermove",t=>{let e=Cn.get(t.pointerId);if(!e||!be)return;let n=t.clientX-e.x,s=t.clientY-e.y;if(e.x=t.clientX,e.y=t.clientY,be.pinch){if(Cn.size>=2&&$.mode==="player"){let[o,a]=[...Cn.values()];As=Te(be.pinch.z0*be.pinch.d0/(Math.hypot(o.x-a.x,o.y-a.y)||1),pd,md)}return}let r=performance.now();!be.moved&&Math.hypot(t.clientX-be.x0,t.clientY-be.y0)>8&&(be.moved=!0,clearTimeout(be.timer),$.mode==="player"&&vn()),Lt.drag(n,s,rg(),(r-be.tl)/1e3),be.tl=r});let i=(t,e)=>{if(!Cn.has(t.pointerId)||(Cn.delete(t.pointerId),Cn.size>0))return;Lt.dragging=!1;let n=be;if(be=null,!!n&&(clearTimeout(n.timer),(performance.now()-n.tl>80||n.pinch||!Lt.glide)&&Lt.stopGlide(),!(e||n.long)&&!n.moved&&performance.now()-n.t0<500)){let s=vr={x:t.clientX,y:t.clientY};s.timer=setTimeout(()=>{vr===s&&(vr=null,wd(s.x,s.y))},380)}};ze.addEventListener("click",()=>{let t=vr;vr=null,t&&(clearTimeout(t.timer),wd(t.x,t.y))}),ze.addEventListener("contextmenu",t=>t.preventDefault()),ze.addEventListener("pointerup",t=>i(t,!1)),ze.addEventListener("pointercancel",t=>i(t,!0)),ze.addEventListener("lostpointercapture",t=>i(t,!0)),ze.addEventListener("wheel",t=>{if(t.preventDefault(),t.ctrlKey&&$.mode==="player"){As=Te(As*Math.exp(t.deltaY*.01),pd,md);return}Lt.yaw+=(t.deltaX||(t.shiftKey?t.deltaY:0))*.0025,!Lt.usingMotion&&!t.shiftKey&&(Lt.pitch=Te(Lt.pitch-t.deltaY*.0025,-85*fe,85*fe))},{passive:!1}),document.addEventListener("gesturestart",t=>t.preventDefault()),document.addEventListener("dblclick",t=>t.preventDefault()),document.addEventListener("keydown",t=>{if(t.defaultPrevented)return;if(Re.handleKey(t)){t.preventDefault();return}let e=t.target&&t.target.tagName||"";if(e==="INPUT"||e==="TEXTAREA"||e==="SELECT")return;if($.mode==="intro"){(t.key==="Escape"||t.key==="Enter"||t.key===" ")&&(Fd(),t.preventDefault());return}if($.overlay)return;let n=t.key;if(n==="ArrowLeft"||n==="ArrowRight"){if(e==="BUTTON"&&t.target.closest(".dock"))return;Qc(n==="ArrowLeft"?-1:1),t.preventDefault()}else(n==="ArrowUp"||n==="ArrowDown")&&!Lt.usingMotion?(Lt.anim={y0:Lt.yaw,y1:Lt.yaw,p0:Lt.pitch,p1:Te(Lt.pitch+(n==="ArrowUp"?12:-12)*fe,-85*fe,85*fe),k:0,dur:.3},t.preventDefault()):$.mode==="home"?(n==="Enter"||n===" ")&&e!=="BUTTON"&&Jt.focus>=0&&$.slots[Jt.focus]?(Re.openPreview($.slots[Jt.focus]),t.preventDefault()):(n==="Home"||n==="c")&&Nd():$.mode==="player"&&(n===" "&&e!=="BUTTON"?(Kt.toggle(),vn(),t.preventDefault()):n==="Escape"||n==="Backspace"?(da(),t.preventDefault()):n==="f"&&(Kt.faceFront(Lt.heading()),vn()))}),document.addEventListener("visibilitychange",()=>{document.hidden?($.mode==="player"&&Kt.playing&&Kt.pause(),Ud()):(oa=0,$.mode==="player"&&(ch(!0),vn()),$.mode==="home"&&Us($.cat))}),Kt.onChange=()=>{kd(),$.mode==="player"&&!Kt.playing&&vn()},Kt.onEnded=t=>{Bd(t),on.player.classList.remove("calm"),Re.showUpNext(t,Ad(t))}}var qi=null;async function ch(i){try{if(i)!qi&&"wakeLock"in navigator&&document.visibilityState==="visible"&&(qi=await navigator.wakeLock.request("screen"),qi.addEventListener("release",()=>{qi=null}));else if(qi){let t=qi;qi=null,await t.release()}}catch{}}var Gd=i=>Math.abs(i-2)<.12,ha=i=>Math.abs(i-1)<.1;function Wd(i,t){let e=i.w&&i.h?i.w/i.h:2;return{id:i.id,cat:"yours",rank:t+1,title:i.name,creator:"Added by you",comfort:0,dur:i.dur||0,why:"A video you added. It stays on this device and plays in YOURA\u2019s player.",isNew:!1,local:!0,standin:!1,missing:!1,projection:Gd(e)||ha(e)?"equirect":"flat",stereo:ha(e),src:URL.createObjectURL(i.blob),poster:i.poster||""}}async function ag(){let i=await xr.all();$.yours=i.slice(0,la).map(Wd),Ds(),Vt.d.lastCategory==="yours"&&$.yours.length&&$.mode==="home"&&$.cat!=="yours"&&Oi("yours",{animate:!1})}function lg(i){return new Promise(t=>{let e=document.createElement("video");e.muted=!0,e.playsInline=!0,e.setAttribute("playsinline",""),e.preload="auto";let n=!1,s=o=>{n||(n=!0,clearTimeout(r),e.removeAttribute("src"),e.load(),t(o))},r=setTimeout(()=>s(e.videoWidth?{dur:e.duration,w:e.videoWidth,h:e.videoHeight,poster:""}:null),9e3);e.addEventListener("loadedmetadata",()=>{try{e.currentTime=Math.min(2,(e.duration||4)*.1)}catch{s({dur:e.duration,w:e.videoWidth,h:e.videoHeight,poster:""})}}),e.addEventListener("seeked",()=>{let o="";try{let a=e.videoWidth,l=e.videoHeight,c=a/l,h=document.createElement("canvas");h.width=640,h.height=360;let u=h.getContext("2d");if(Gd(c)||ha(c)){let f=ha(c)?l/2:l,m=a*100/360,g=f*56/180;u.drawImage(e,(a-m)/2,(f-g)/2,m,g,0,0,640,360)}else{let f=Math.max(640/a,360/l);u.drawImage(e,(640-a*f)/2,(360-l*f)/2,a*f,l*f)}o=h.toDataURL("image/jpeg",.82)}catch{o=""}s({dur:e.duration,w:e.videoWidth,h:e.videoHeight,poster:o})}),e.addEventListener("error",()=>s(null)),e.src=i})}async function cg(i){if(!i)return!1;if(!/^video\//.test(i.type)&&!/\.(mp4|m4v|mov|webm)$/i.test(i.name))return De("That file isn\u2019t a video."),!1;if($.yours.length>=la)return De(`Yours holds ${la} videos. Remove one first.`),!1;De("Adding \u201C"+i.name+"\u201D\u2026",9e3);let t=URL.createObjectURL(i),e=await lg(t);if(URL.revokeObjectURL(t),!e)return De("This browser can\u2019t play that video. Try an H.264 or HEVC MP4.",5e3),!1;let n={id:"u-"+Date.now().toString(36),name:i.name.replace(/\.[^.]+$/,"").replace(/[_-]+/g," ").trim().slice(0,60)||"My video",blob:i,dur:isFinite(e.dur)?e.dur:0,w:e.w,h:e.h,poster:e.poster,added:Date.now()},s=await xr.put(n);return $.yours.push(Wd(n,$.yours.length)),Ds(),$.cat==="yours"&&$.refreshSphere(),De(s?"Added to Yours.":"Added to Yours until you close YOURA (this browser won\u2019t keep it).",5e3),!0}$.addVideoFile=cg;async function hg(i){let t=$.yours.findIndex(n=>n.id===i);if(t<0)return;let[e]=$.yours.splice(t,1);try{URL.revokeObjectURL(e.src)}catch{}$.yours.forEach((n,s)=>{n.rank=s+1}),await xr.remove(i),Vt.d.saved=Vt.d.saved.filter(n=>n!==i),Vt.save(),Ds(),$.cat==="yours"&&($.yours.length?$.refreshSphere():Oi("musician",{animate:!1}))}$.removeVideo=hg;async function ug(){await xr.clear(),$.yours.forEach(i=>{try{URL.revokeObjectURL(i.src)}catch{}}),$.yours=[],Vt.reset(),Lt.invert=!1,Lt.glide=!$.reduced,Lt.setPrefer(Lt.motion==="on"?"motion":"touch"),Ds(),Oi("musician",{animate:!1}),$.refreshSphere(),an(),De("YOURA is reset.")}$.resetAll=ug;$.applySettings=()=>{Lt.invert=Vt.s.invert,Lt.glide=Vt.s.glide&&!$.reduced,$.refreshSphere()};async function dg(i){let t=location.href.split("#")[0]+"#v-"+i.id,e={title:`${i.title} \xB7 YOURA`,text:`Look around \u201C${i.title}\u201D on YOURA.`,url:t};try{if(navigator.share){await navigator.share(e);return}}catch(n){if(n&&n.name==="AbortError")return}try{await navigator.clipboard.writeText(t),De("Link copied")}catch{De(t,6e3)}}$.share=dg;function fg(){if(!G2())return;W2(),Re=fd($),$.views=Re,window.YOURA=$,Lt.prefer=Vt.s.look==="touch"?"touch":"motion",Lt.invert=Vt.s.invert,Lt.glide=Vt.s.glide&&!$.reduced,$.cat=ws[Vt.d.lastCategory]?Vt.d.lastCategory:"musician";let i=/^#v-([\w-]+)$/.exec(location.hash||"");i&&(ra=i[1]),og(),Ds(),ag(),J2(),Vt.s.look==="motion"&&Mr&&!eh?rh().then(t=>{t||Lt.setPrefer("touch"),an()}):Mr||(Lt.prefer="touch"),fetch("assets/video/clips.json").then(t=>t.ok?t.json():null).catch(()=>null).then(t=>{hd(t),$.slots=ua($.cat),tn(),Re.refresh()}),Jt.load().then(()=>tn()).catch(t=>{console.error(t),Jt.failed=!0}),document.fonts&&document.fonts.load&&Promise.all([document.fonts.load("600 42px Jost"),document.fonts.load('500 34px "IBM Plex Mono"')]).then(()=>tn()).catch(()=>{}),qd(Vt.d.introSeen?Vt.s.intro||"short":"full"),requestAnimationFrame(Hd)}fg();})();
