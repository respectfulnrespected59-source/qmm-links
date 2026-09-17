(()=>{var Yc="170";var um=0,Cu=1,dm=2;var Zd=1,Kc=2,hi=3,Kn=0,Zt=1,gt=2,Yn=0,qs=1,ct=2,Iu=3,Pu=4,fm=5,as=100,pm=101,mm=102,gm=103,xm=104,_m=200,ym=201,vm=202,Mm=203,Dl=204,Nl=205,bm=206,Em=207,Sm=208,wm=209,Tm=210,Am=211,Rm=212,Cm=213,Im=214,Ul=0,zl=1,Ol=2,$s=3,Fl=4,Bl=5,kl=6,Hl=7,$d=0,Pm=1,Lm=2,Ni=0,Zc=1,$c=2,Jc=3,to=4,Dm=5,jc=6,Qc=7,Lu="attached",Nm="detached",Jd=300,Js=301,js=302,Vl=303,Gl=304,Sa=306,cn=1e3,ui=1001,qr=1002,$t=1003,eh=1004;var Vs=1005;var ln=1006,Vr=1007;var qn=1008;var pi=1009,jd=1010,Qd=1011,Yr=1012,th=1013,cs=1014,zn=1015,Fn=1016,nh=1017,ih=1018,Qs=1020,ef=35902,tf=1021,nf=1022,En=1023,sf=1024,rf=1025,Ys=1026,er=1027,sh=1028,rh=1029,of=1030,oh=1031;var ah=1033,Wo=33776,Xo=33777,qo=33778,Yo=33779,Wl=35840,Xl=35841,ql=35842,Yl=35843,Kl=36196,Zl=37492,$l=37496,Jl=37808,jl=37809,Ql=37810,ec=37811,tc=37812,nc=37813,ic=37814,sc=37815,rc=37816,oc=37817,ac=37818,lc=37819,cc=37820,hc=37821,Ko=36492,uc=36494,dc=36495,af=36283,fc=36284,pc=36285,mc=36286,lh=2200,ch=2201,Um=2202,tr=2300,nr=2301,el=2302,Gs=2400,Ws=2401,Zo=2402,hh=2500,zm=2501,lf=0,wa=1,no=2,Om=3200,Fm=3201;var cf=0,Bm=1,Pi="",mt="srgb",jt="srgb-linear",Ta="linear",pt="srgb";var Es=7680;var Du=519,km=512,Hm=513,Vm=514,hf=515,Gm=516,Wm=517,Xm=518,qm=519,gc=35044;var Nu="300 es",di=2e3,$o=2001,mi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Uu=1234567,Gr=Math.PI/180,ir=180/Math.PI;function On(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qt[i&255]+qt[i>>8&255]+qt[i>>16&255]+qt[i>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[t&63|128]+qt[t>>8&255]+"-"+qt[t>>16&255]+qt[t>>24&255]+qt[n&255]+qt[n>>8&255]+qt[n>>16&255]+qt[n>>24&255]).toLowerCase()}function Kt(i,e,t){return Math.max(e,Math.min(t,i))}function uh(i,e){return(i%e+e)%e}function Ym(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Km(i,e,t){return i!==e?(t-i)/(e-i):0}function Wr(i,e,t){return(1-t)*i+t*e}function Zm(i,e,t,n){return Wr(i,e,1-Math.exp(-t*n))}function $m(i,e=1){return e-Math.abs(uh(i,e*2)-e)}function Jm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function jm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Qm(i,e){return i+Math.floor(Math.random()*(e-i+1))}function e0(i,e){return i+Math.random()*(e-i)}function t0(i){return i*(.5-Math.random())}function n0(i){i!==void 0&&(Uu=i);let e=Uu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function i0(i){return i*Gr}function s0(i){return i*ir}function r0(i){return(i&i-1)===0&&i!==0}function o0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function a0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function l0(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*u,l*h,l*d,a*c);break;case"YZY":i.set(l*d,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*d,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*f,a*c);break;case"YXY":i.set(l*f,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Un(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function _t(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var uf={DEG2RAD:Gr,RAD2DEG:ir,generateUUID:On,clamp:Kt,euclideanModulo:uh,mapLinear:Ym,inverseLerp:Km,lerp:Wr,damp:Zm,pingpong:$m,smoothstep:Jm,smootherstep:jm,randInt:Qm,randFloat:e0,randFloatSpread:t0,seededRandom:n0,degToRad:i0,radToDeg:s0,isPowerOfTwo:r0,ceilPowerOfTwo:o0,floorPowerOfTwo:a0,setQuaternionFromProperEuler:l0,normalize:_t,denormalize:Un},be=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Kt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},qe=class i{constructor(e,t,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],x=s[0],p=s[3],m=s[6],v=s[1],_=s[4],b=s[7],P=s[2],T=s[5],w=s[8];return r[0]=o*x+a*v+l*P,r[3]=o*p+a*_+l*T,r[6]=o*m+a*b+l*w,r[1]=c*x+u*v+h*P,r[4]=c*p+u*_+h*T,r[7]=c*m+u*b+h*w,r[2]=d*x+f*v+g*P,r[5]=d*p+f*_+g*T,r[8]=d*m+f*b+g*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*r,f=c*r-o*l,g=t*h+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=h*x,e[1]=(s*c-u*n)*x,e[2]=(a*n-s*o)*x,e[3]=d*x,e[4]=(u*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=f*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(tl.makeScale(e,t)),this}rotate(e){return this.premultiply(tl.makeRotation(-e)),this}translate(e,t){return this.premultiply(tl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},tl=new qe;function df(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Kr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function c0(){let i=Kr("canvas");return i.style.display="block",i}var zu={};function kr(i){i in zu||(zu[i]=!0,console.warn(i))}function h0(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function u0(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function d0(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var Je={enabled:!0,workingColorSpace:jt,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===pt&&(i.r=fi(i.r),i.g=fi(i.g),i.b=fi(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===pt&&(i.r=Ks(i.r),i.g=Ks(i.g),i.b=Ks(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Pi?Ta:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function fi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ks(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ou=[.64,.33,.3,.6,.15,.06],Fu=[.2126,.7152,.0722],Bu=[.3127,.329],ku=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hu=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Je.define({[jt]:{primaries:Ou,whitePoint:Bu,transfer:Ta,toXYZ:ku,fromXYZ:Hu,luminanceCoefficients:Fu,workingColorSpaceConfig:{unpackColorSpace:mt},outputColorSpaceConfig:{drawingBufferColorSpace:mt}},[mt]:{primaries:Ou,whitePoint:Bu,transfer:pt,toXYZ:ku,fromXYZ:Hu,luminanceCoefficients:Fu,outputColorSpaceConfig:{drawingBufferColorSpace:mt}}});var Ss,xc=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ss===void 0&&(Ss=Kr("canvas")),Ss.width=e.width,Ss.height=e.height;let n=Ss.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ss}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Kr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=fi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(fi(t[n]/255)*255):t[n]=fi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},f0=0,Jo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:f0++}),this.uuid=On(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(nl(s[o].image)):r.push(nl(s[o]))}else r=nl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function nl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?xc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var p0=0,Ht=class i extends mi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=ui,s=ui,r=ln,o=qn,a=En,l=pi,c=i.DEFAULT_ANISOTROPY,u=Pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:p0++}),this.uuid=On(),this.name="",this.source=new Jo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new be(0,0),this.repeat=new be(1,1),this.center=new be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Jd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case cn:e.x=e.x-Math.floor(e.x);break;case ui:e.x=e.x<0?0:1;break;case qr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case cn:e.y=e.y-Math.floor(e.y);break;case ui:e.y=e.y<0?0:1;break;case qr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ht.DEFAULT_IMAGE=null;Ht.DEFAULT_MAPPING=Jd;Ht.DEFAULT_ANISOTROPY=1;var lt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],g=l[9],x=l[2],p=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(c+1)/2,b=(f+1)/2,P=(m+1)/2,T=(u+d)/4,w=(h+x)/4,E=(g+p)/4;return _>b&&_>P?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=T/n,r=w/n):b>P?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=T/s,r=E/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=w/r,s=E/r),this.set(n,s,r,t),this}let v=Math.sqrt((p-g)*(p-g)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(p-g)/v,this.y=(h-x)/v,this.z=(d-u)/v,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},_c=class extends mi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Ht(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Jo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},tn=class extends _c{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},jo=class extends Ht{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=$t,this.minFilter=$t,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var yc=class extends Ht{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=$t,this.minFilter=$t,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Vt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3],d=r[o+0],f=r[o+1],g=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=x;return}if(h!==x||l!==d||c!==f||u!==g){let p=1-a,m=l*d+c*f+u*g+h*x,v=m>=0?1:-1,_=1-m*m;if(_>Number.EPSILON){let P=Math.sqrt(_),T=Math.atan2(P,m*v);p=Math.sin(p*T)/P,a=Math.sin(a*T)/P}let b=a*v;if(l=l*p+d*b,c=c*p+f*b,u=u*p+g*b,h=h*p+x*b,p===1-a){let P=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=P,c*=P,u*=P,h*=P}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*f-c*d,e[t+1]=l*g+u*d+c*h-a*f,e[t+2]=c*g+u*f+a*d-l*h,e[t+3]=u*g-a*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),h=a(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"YZX":this._x=d*u*h+c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h-d*f*g;break;case"XZY":this._x=d*u*h-c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>h){let f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>h){let f=2*Math.sqrt(1+a-n-h);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+h-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Kt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Vu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Vu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),u=2*(a*t-r*s),h=2*(r*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return il.copy(this).projectOnVector(e),this.sub(il)}reflect(e){return this.sub(il.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Kt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},il=new U,Vu=new Vt,Gt=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Pn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Pn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Pn):Pn.fromBufferAttribute(r,o),Pn.applyMatrix4(e.matrixWorld),this.expandByPoint(Pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),po.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),po.copy(n.boundingBox)),po.applyMatrix4(e.matrixWorld),this.union(po)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Pn),Pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Cr),mo.subVectors(this.max,Cr),ws.subVectors(e.a,Cr),Ts.subVectors(e.b,Cr),As.subVectors(e.c,Cr),wi.subVectors(Ts,ws),Ti.subVectors(As,Ts),es.subVectors(ws,As);let t=[0,-wi.z,wi.y,0,-Ti.z,Ti.y,0,-es.z,es.y,wi.z,0,-wi.x,Ti.z,0,-Ti.x,es.z,0,-es.x,-wi.y,wi.x,0,-Ti.y,Ti.x,0,-es.y,es.x,0];return!sl(t,ws,Ts,As,mo)||(t=[1,0,0,0,1,0,0,0,1],!sl(t,ws,Ts,As,mo))?!1:(go.crossVectors(wi,Ti),t=[go.x,go.y,go.z],sl(t,ws,Ts,As,mo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},si=[new U,new U,new U,new U,new U,new U,new U,new U],Pn=new U,po=new Gt,ws=new U,Ts=new U,As=new U,wi=new U,Ti=new U,es=new U,Cr=new U,mo=new U,go=new U,ts=new U;function sl(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ts.fromArray(i,r);let a=s.x*Math.abs(ts.x)+s.y*Math.abs(ts.y)+s.z*Math.abs(ts.z),l=e.dot(ts),c=t.dot(ts),u=n.dot(ts);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var m0=new Gt,Ir=new U,rl=new U,nn=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):m0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ir.subVectors(e,this.center);let t=Ir.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ir,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ir.copy(e.center).add(rl)),this.expandByPoint(Ir.copy(e.center).sub(rl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},ri=new U,ol=new U,xo=new U,Ai=new U,al=new U,_o=new U,ll=new U,hs=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ri)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ri.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ri.copy(this.origin).addScaledVector(this.direction,t),ri.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ol.copy(e).add(t).multiplyScalar(.5),xo.copy(t).sub(e).normalize(),Ai.copy(this.origin).sub(ol);let r=e.distanceTo(t)*.5,o=-this.direction.dot(xo),a=Ai.dot(this.direction),l=-Ai.dot(xo),c=Ai.lengthSq(),u=Math.abs(1-o*o),h,d,f,g;if(u>0)if(h=o*l-a,d=o*a-l,g=r*u,h>=0)if(d>=-g)if(d<=g){let x=1/u;h*=x,d*=x,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(ol).addScaledVector(xo,d),f}intersectSphere(e,t){ri.subVectors(e.center,this.origin);let n=ri.dot(this.direction),s=ri.dot(ri)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ri)!==null}intersectTriangle(e,t,n,s,r){al.subVectors(t,e),_o.subVectors(n,e),ll.crossVectors(al,_o);let o=this.direction.dot(ll),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ai.subVectors(this.origin,e);let l=a*this.direction.dot(_o.crossVectors(Ai,_o));if(l<0)return null;let c=a*this.direction.dot(al.cross(Ai));if(c<0||l+c>o)return null;let u=-a*Ai.dot(ll);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Be=class i{constructor(e,t,n,s,r,o,a,l,c,u,h,d,f,g,x,p){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,u,h,d,f,g,x,p)}set(e,t,n,s,r,o,a,l,c,u,h,d,f,g,x,p){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=d,m[3]=f,m[7]=g,m[11]=x,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Rs.setFromMatrixColumn(e,0).length(),r=1/Rs.setFromMatrixColumn(e,1).length(),o=1/Rs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let d=o*u,f=o*h,g=a*u,x=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+g*c,t[5]=d-x*c,t[9]=-a*l,t[2]=x-d*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*u,f=l*h,g=c*u,x=c*h;t[0]=d+x*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=x+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*u,f=l*h,g=c*u,x=c*h;t[0]=d-x*a,t[4]=-o*h,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=x-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*u,f=o*h,g=a*u,x=a*h;t[0]=l*u,t[4]=g*c-f,t[8]=d*c+x,t[1]=l*h,t[5]=x*c+d,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,f=o*c,g=a*l,x=a*c;t[0]=l*u,t[4]=x-d*h,t[8]=g*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*h+g,t[10]=d-x*h}else if(e.order==="XZY"){let d=o*l,f=o*c,g=a*l,x=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+x,t[5]=o*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=a*u,t[10]=x*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(g0,e,x0)}lookAt(e,t,n){let s=this.elements;return pn.subVectors(e,t),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),Ri.crossVectors(n,pn),Ri.lengthSq()===0&&(Math.abs(n.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),Ri.crossVectors(n,pn)),Ri.normalize(),yo.crossVectors(pn,Ri),s[0]=Ri.x,s[4]=yo.x,s[8]=pn.x,s[1]=Ri.y,s[5]=yo.y,s[9]=pn.y,s[2]=Ri.z,s[6]=yo.z,s[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],x=n[6],p=n[10],m=n[14],v=n[3],_=n[7],b=n[11],P=n[15],T=s[0],w=s[4],E=s[8],y=s[12],M=s[1],R=s[5],S=s[9],I=s[13],B=s[2],z=s[6],L=s[10],D=s[14],O=s[3],k=s[7],K=s[11],Z=s[15];return r[0]=o*T+a*M+l*B+c*O,r[4]=o*w+a*R+l*z+c*k,r[8]=o*E+a*S+l*L+c*K,r[12]=o*y+a*I+l*D+c*Z,r[1]=u*T+h*M+d*B+f*O,r[5]=u*w+h*R+d*z+f*k,r[9]=u*E+h*S+d*L+f*K,r[13]=u*y+h*I+d*D+f*Z,r[2]=g*T+x*M+p*B+m*O,r[6]=g*w+x*R+p*z+m*k,r[10]=g*E+x*S+p*L+m*K,r[14]=g*y+x*I+p*D+m*Z,r[3]=v*T+_*M+b*B+P*O,r[7]=v*w+_*R+b*z+P*k,r[11]=v*E+_*S+b*L+P*K,r[15]=v*y+_*I+b*D+P*Z,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],x=e[7],p=e[11],m=e[15];return g*(+r*l*h-s*c*h-r*a*d+n*c*d+s*a*f-n*l*f)+x*(+t*l*f-t*c*d+r*o*d-s*o*f+s*c*u-r*l*u)+p*(+t*c*h-t*a*f-r*o*h+n*o*f+r*a*u-n*c*u)+m*(-s*a*u-t*l*h+t*a*d+s*o*h-n*o*d+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],x=e[13],p=e[14],m=e[15],v=h*p*c-x*d*c+x*l*f-a*p*f-h*l*m+a*d*m,_=g*d*c-u*p*c-g*l*f+o*p*f+u*l*m-o*d*m,b=u*x*c-g*h*c+g*a*f-o*x*f-u*a*m+o*h*m,P=g*h*l-u*x*l-g*a*d+o*x*d+u*a*p-o*h*p,T=t*v+n*_+s*b+r*P;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/T;return e[0]=v*w,e[1]=(x*d*r-h*p*r-x*s*f+n*p*f+h*s*m-n*d*m)*w,e[2]=(a*p*r-x*l*r+x*s*c-n*p*c-a*s*m+n*l*m)*w,e[3]=(h*l*r-a*d*r-h*s*c+n*d*c+a*s*f-n*l*f)*w,e[4]=_*w,e[5]=(u*p*r-g*d*r+g*s*f-t*p*f-u*s*m+t*d*m)*w,e[6]=(g*l*r-o*p*r-g*s*c+t*p*c+o*s*m-t*l*m)*w,e[7]=(o*d*r-u*l*r+u*s*c-t*d*c-o*s*f+t*l*f)*w,e[8]=b*w,e[9]=(g*h*r-u*x*r-g*n*f+t*x*f+u*n*m-t*h*m)*w,e[10]=(o*x*r-g*a*r+g*n*c-t*x*c-o*n*m+t*a*m)*w,e[11]=(u*a*r-o*h*r-u*n*c+t*h*c+o*n*f-t*a*f)*w,e[12]=P*w,e[13]=(u*x*s-g*h*s+g*n*d-t*x*d-u*n*p+t*h*p)*w,e[14]=(g*a*s-o*x*s-g*n*l+t*x*l+o*n*p-t*a*p)*w,e[15]=(o*h*s-u*a*s+u*n*l-t*h*l-o*n*d+t*a*d)*w,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,d=r*c,f=r*u,g=r*h,x=o*u,p=o*h,m=a*h,v=l*c,_=l*u,b=l*h,P=n.x,T=n.y,w=n.z;return s[0]=(1-(x+m))*P,s[1]=(f+b)*P,s[2]=(g-_)*P,s[3]=0,s[4]=(f-b)*T,s[5]=(1-(d+m))*T,s[6]=(p+v)*T,s[7]=0,s[8]=(g+_)*w,s[9]=(p-v)*w,s[10]=(1-(d+x))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Rs.set(s[0],s[1],s[2]).length(),o=Rs.set(s[4],s[5],s[6]).length(),a=Rs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Ln.copy(this);let c=1/r,u=1/o,h=1/a;return Ln.elements[0]*=c,Ln.elements[1]*=c,Ln.elements[2]*=c,Ln.elements[4]*=u,Ln.elements[5]*=u,Ln.elements[6]*=u,Ln.elements[8]*=h,Ln.elements[9]*=h,Ln.elements[10]*=h,t.setFromRotationMatrix(Ln),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=di){let l=this.elements,c=2*r/(t-e),u=2*r/(n-s),h=(t+e)/(t-e),d=(n+s)/(n-s),f,g;if(a===di)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===$o)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=di){let l=this.elements,c=1/(t-e),u=1/(n-s),h=1/(o-r),d=(t+e)*c,f=(n+s)*u,g,x;if(a===di)g=(o+r)*h,x=-2*h;else if(a===$o)g=r*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Rs=new U,Ln=new Be,g0=new U(0,0,0),x0=new U(1,1,1),Ri=new U,yo=new U,pn=new U,Gu=new Be,Wu=new Vt,Zn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Kt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Gu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wu.setFromEuler(this),this.setFromQuaternion(Wu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Zn.DEFAULT_ORDER="XYZ";var Zr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},_0=0,Xu=new U,Cs=new Vt,oi=new Be,vo=new U,Pr=new U,y0=new U,v0=new Vt,qu=new U(1,0,0),Yu=new U(0,1,0),Ku=new U(0,0,1),Zu={type:"added"},M0={type:"removed"},Is={type:"childadded",child:null},cl={type:"childremoved",child:null},At=class i extends mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_0++}),this.uuid=On(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new U,t=new Zn,n=new Vt,s=new U(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Be},normalMatrix:{value:new qe}}),this.matrix=new Be,this.matrixWorld=new Be,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Cs.setFromAxisAngle(e,t),this.quaternion.multiply(Cs),this}rotateOnWorldAxis(e,t){return Cs.setFromAxisAngle(e,t),this.quaternion.premultiply(Cs),this}rotateX(e){return this.rotateOnAxis(qu,e)}rotateY(e){return this.rotateOnAxis(Yu,e)}rotateZ(e){return this.rotateOnAxis(Ku,e)}translateOnAxis(e,t){return Xu.copy(e).applyQuaternion(this.quaternion),this.position.add(Xu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(qu,e)}translateY(e){return this.translateOnAxis(Yu,e)}translateZ(e){return this.translateOnAxis(Ku,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(oi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?vo.copy(e):vo.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Pr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oi.lookAt(Pr,vo,this.up):oi.lookAt(vo,Pr,this.up),this.quaternion.setFromRotationMatrix(oi),s&&(oi.extractRotation(s.matrixWorld),Cs.setFromRotationMatrix(oi),this.quaternion.premultiply(Cs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Zu),Is.child=e,this.dispatchEvent(Is),Is.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(M0),cl.child=e,this.dispatchEvent(cl),cl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(oi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Zu),Is.child=e,this.dispatchEvent(Is),Is.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,e,y0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,v0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};At.DEFAULT_UP=new U(0,1,0);At.DEFAULT_MATRIX_AUTO_UPDATE=!0;At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Dn=new U,ai=new U,hl=new U,li=new U,Ps=new U,Ls=new U,$u=new U,ul=new U,dl=new U,fl=new U,pl=new lt,ml=new lt,gl=new lt,Li=class i{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Dn.subVectors(e,t),s.cross(Dn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Dn.subVectors(s,t),ai.subVectors(n,t),hl.subVectors(e,t);let o=Dn.dot(Dn),a=Dn.dot(ai),l=Dn.dot(hl),c=ai.dot(ai),u=ai.dot(hl),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let d=1/h,f=(c*l-a*u)*d,g=(o*u-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,li)===null?!1:li.x>=0&&li.y>=0&&li.x+li.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,li)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,li.x),l.addScaledVector(o,li.y),l.addScaledVector(a,li.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return pl.setScalar(0),ml.setScalar(0),gl.setScalar(0),pl.fromBufferAttribute(e,t),ml.fromBufferAttribute(e,n),gl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(pl,r.x),o.addScaledVector(ml,r.y),o.addScaledVector(gl,r.z),o}static isFrontFacing(e,t,n,s){return Dn.subVectors(n,t),ai.subVectors(e,t),Dn.cross(ai).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Dn.subVectors(this.c,this.b),ai.subVectors(this.a,this.b),Dn.cross(ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Ps.subVectors(s,n),Ls.subVectors(r,n),ul.subVectors(e,n);let l=Ps.dot(ul),c=Ls.dot(ul);if(l<=0&&c<=0)return t.copy(n);dl.subVectors(e,s);let u=Ps.dot(dl),h=Ls.dot(dl);if(u>=0&&h<=u)return t.copy(s);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Ps,o);fl.subVectors(e,r);let f=Ps.dot(fl),g=Ls.dot(fl);if(g>=0&&f<=g)return t.copy(r);let x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Ls,a);let p=u*g-f*h;if(p<=0&&h-u>=0&&f-g>=0)return $u.subVectors(r,s),a=(h-u)/(h-u+(f-g)),t.copy(s).addScaledVector($u,a);let m=1/(p+x+d);return o=x*m,a=d*m,t.copy(n).addScaledVector(Ps,o).addScaledVector(Ls,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ff={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ci={h:0,s:0,l:0},Mo={h:0,s:0,l:0};function xl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var ye=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Je.workingColorSpace){return this.r=e,this.g=t,this.b=n,Je.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Je.workingColorSpace){if(e=uh(e,1),t=Kt(t,0,1),n=Kt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=xl(o,r,e+1/3),this.g=xl(o,r,e),this.b=xl(o,r,e-1/3)}return Je.toWorkingColorSpace(this,s),this}setStyle(e,t=mt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=mt){let n=ff[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fi(e.r),this.g=fi(e.g),this.b=fi(e.b),this}copyLinearToSRGB(e){return this.r=Ks(e.r),this.g=Ks(e.g),this.b=Ks(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mt){return Je.fromWorkingColorSpace(Yt.copy(this),e),Math.round(Kt(Yt.r*255,0,255))*65536+Math.round(Kt(Yt.g*255,0,255))*256+Math.round(Kt(Yt.b*255,0,255))}getHexString(e=mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.fromWorkingColorSpace(Yt.copy(this),t);let n=Yt.r,s=Yt.g,r=Yt.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Je.workingColorSpace){return Je.fromWorkingColorSpace(Yt.copy(this),t),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=mt){Je.fromWorkingColorSpace(Yt.copy(this),e);let t=Yt.r,n=Yt.g,s=Yt.b;return e!==mt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ci),this.setHSL(Ci.h+e,Ci.s+t,Ci.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ci),e.getHSL(Mo);let n=Wr(Ci.h,Mo.h,t),s=Wr(Ci.s,Mo.s,t),r=Wr(Ci.l,Mo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Yt=new ye;ye.NAMES=ff;var b0=0,hn=class extends mi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:b0++}),this.uuid=On(),this.name="",this.blending=qs,this.side=Kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Dl,this.blendDst=Nl,this.blendEquation=as,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ye(0,0,0),this.blendAlpha=0,this.depthFunc=$s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Du,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Es,this.stencilZFail=Es,this.stencilZPass=Es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==qs&&(n.blending=this.blending),this.side!==Kn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Dl&&(n.blendSrc=this.blendSrc),this.blendDst!==Nl&&(n.blendDst=this.blendDst),this.blendEquation!==as&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==$s&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Du&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Es&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Es&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Es&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},ke=class extends hn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.combine=$d,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Nt=new U,bo=new be,je=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=gc,this.updateRanges=[],this.gpuType=zn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)bo.fromBufferAttribute(this,t),bo.applyMatrix3(e),this.setXY(t,bo.x,bo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix3(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Un(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=_t(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Un(t,this.array)),t}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Un(t,this.array)),t}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Un(t,this.array)),t}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Un(t,this.array)),t}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),s=_t(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),s=_t(s,this.array),r=_t(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==gc&&(e.usage=this.usage),e}};var sr=class extends je{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Qo=class extends je{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var tt=class extends je{constructor(e,t,n){super(new Float32Array(e),t,n)}},E0=0,bn=new Be,_l=new At,Ds=new U,mn=new Gt,Lr=new Gt,kt=new U,at=class i extends mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:E0++}),this.uuid=On(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(df(e)?Qo:sr)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new qe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return bn.makeRotationFromQuaternion(e),this.applyMatrix4(bn),this}rotateX(e){return bn.makeRotationX(e),this.applyMatrix4(bn),this}rotateY(e){return bn.makeRotationY(e),this.applyMatrix4(bn),this}rotateZ(e){return bn.makeRotationZ(e),this.applyMatrix4(bn),this}translate(e,t,n){return bn.makeTranslation(e,t,n),this.applyMatrix4(bn),this}scale(e,t,n){return bn.makeScale(e,t,n),this.applyMatrix4(bn),this}lookAt(e){return _l.lookAt(e),_l.updateMatrix(),this.applyMatrix4(_l.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ds).negate(),this.translate(Ds.x,Ds.y,Ds.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new tt(n,3))}else{for(let n=0,s=t.count;n<s;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];mn.setFromBufferAttribute(r),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new nn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){let n=this.boundingSphere.center;if(mn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Lr.setFromBufferAttribute(a),this.morphTargetsRelative?(kt.addVectors(mn.min,Lr.min),mn.expandByPoint(kt),kt.addVectors(mn.max,Lr.max),mn.expandByPoint(kt)):(mn.expandByPoint(Lr.min),mn.expandByPoint(Lr.max))}mn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)kt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(kt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)kt.fromBufferAttribute(a,c),l&&(Ds.fromBufferAttribute(e,c),kt.add(Ds)),s=Math.max(s,n.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new je(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let E=0;E<n.count;E++)a[E]=new U,l[E]=new U;let c=new U,u=new U,h=new U,d=new be,f=new be,g=new be,x=new U,p=new U;function m(E,y,M){c.fromBufferAttribute(n,E),u.fromBufferAttribute(n,y),h.fromBufferAttribute(n,M),d.fromBufferAttribute(r,E),f.fromBufferAttribute(r,y),g.fromBufferAttribute(r,M),u.sub(c),h.sub(c),f.sub(d),g.sub(d);let R=1/(f.x*g.y-g.x*f.y);isFinite(R)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(R),p.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(R),a[E].add(x),a[y].add(x),a[M].add(x),l[E].add(p),l[y].add(p),l[M].add(p))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let E=0,y=v.length;E<y;++E){let M=v[E],R=M.start,S=M.count;for(let I=R,B=R+S;I<B;I+=3)m(e.getX(I+0),e.getX(I+1),e.getX(I+2))}let _=new U,b=new U,P=new U,T=new U;function w(E){P.fromBufferAttribute(s,E),T.copy(P);let y=a[E];_.copy(y),_.sub(P.multiplyScalar(P.dot(y))).normalize(),b.crossVectors(T,y);let R=b.dot(l[E])<0?-1:1;o.setXYZW(E,_.x,_.y,_.z,R)}for(let E=0,y=v.length;E<y;++E){let M=v[E],R=M.start,S=M.count;for(let I=R,B=R+S;I<B;I+=3)w(e.getX(I+0)),w(e.getX(I+1)),w(e.getX(I+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new je(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new U,r=new U,o=new U,a=new U,l=new U,c=new U,u=new U,h=new U;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),x=e.getX(d+1),p=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,p),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)kt.fromBufferAttribute(e,t),kt.normalize(),e.setXYZ(t,kt.x,kt.y,kt.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u),f=0,g=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*u;for(let m=0;m<u;m++)d[g++]=c[f++]}return new je(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){let d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ju=new Be,ns=new hs,Eo=new nn,ju=new U,So=new U,wo=new U,To=new U,yl=new U,Ao=new U,Qu=new U,Ro=new U,le=class extends At{constructor(e=new at,t=new ke){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Ao.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],h=r[l];u!==0&&(yl.fromBufferAttribute(h,e),o?Ao.addScaledVector(yl,u):Ao.addScaledVector(yl.sub(t),u))}t.add(Ao)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Eo.copy(n.boundingSphere),Eo.applyMatrix4(r),ns.copy(e.ray).recast(e.near),!(Eo.containsPoint(ns.origin)===!1&&(ns.intersectSphere(Eo,ju)===null||ns.origin.distanceToSquared(ju)>(e.far-e.near)**2))&&(Ju.copy(r).invert(),ns.copy(e.ray).applyMatrix4(Ju),!(n.boundingBox!==null&&ns.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ns)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let p=d[g],m=o[p.materialIndex],v=Math.max(p.start,f.start),_=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let b=v,P=_;b<P;b+=3){let T=a.getX(b),w=a.getX(b+1),E=a.getX(b+2);s=Co(this,m,e,n,c,u,h,T,w,E),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let p=g,m=x;p<m;p+=3){let v=a.getX(p),_=a.getX(p+1),b=a.getX(p+2);s=Co(this,o,e,n,c,u,h,v,_,b),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let p=d[g],m=o[p.materialIndex],v=Math.max(p.start,f.start),_=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let b=v,P=_;b<P;b+=3){let T=b,w=b+1,E=b+2;s=Co(this,m,e,n,c,u,h,T,w,E),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let p=g,m=x;p<m;p+=3){let v=p,_=p+1,b=p+2;s=Co(this,o,e,n,c,u,h,v,_,b),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function S0(i,e,t,n,s,r,o,a){let l;if(e.side===Zt?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===Kn,a),l===null)return null;Ro.copy(a),Ro.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Ro);return c<t.near||c>t.far?null:{distance:c,point:Ro.clone(),object:i}}function Co(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,So),i.getVertexPosition(l,wo),i.getVertexPosition(c,To);let u=S0(i,e,t,n,So,wo,To,Qu);if(u){let h=new U;Li.getBarycoord(Qu,So,wo,To,h),s&&(u.uv=Li.getInterpolatedAttribute(s,a,l,c,h,new be)),r&&(u.uv1=Li.getInterpolatedAttribute(r,a,l,c,h,new be)),o&&(u.normal=Li.getInterpolatedAttribute(o,a,l,c,h,new U),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new U,materialIndex:0};Li.getNormal(So,wo,To,d.normal),u.face=d,u.barycoord=h}return u}var Rt=class i extends at{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],h=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new tt(c,3)),this.setAttribute("normal",new tt(u,3)),this.setAttribute("uv",new tt(h,2));function g(x,p,m,v,_,b,P,T,w,E,y){let M=b/w,R=P/E,S=b/2,I=P/2,B=T/2,z=w+1,L=E+1,D=0,O=0,k=new U;for(let K=0;K<L;K++){let Z=K*R-I;for(let Me=0;Me<z;Me++){let Te=Me*M-S;k[x]=Te*v,k[p]=Z*_,k[m]=B,c.push(k.x,k.y,k.z),k[x]=0,k[p]=0,k[m]=T>0?1:-1,u.push(k.x,k.y,k.z),h.push(Me/w),h.push(1-K/E),D+=1}}for(let K=0;K<E;K++)for(let Z=0;Z<w;Z++){let Me=d+Z+z*K,Te=d+Z+z*(K+1),$=d+(Z+1)+z*(K+1),ne=d+(Z+1)+z*K;l.push(Me,Te,ne),l.push(Te,$,ne),O+=6}a.addGroup(f,O,y),f+=O,d+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function rr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function en(i){let e={};for(let t=0;t<i.length;t++){let n=rr(i[t]);for(let s in n)e[s]=n[s]}return e}function w0(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function pf(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}var Gi={clone:rr,merge:en},T0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,A0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ct=class extends hn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=T0,this.fragmentShader=A0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=rr(e.uniforms),this.uniformsGroups=w0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},ea=class extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Be,this.projectionMatrix=new Be,this.projectionMatrixInverse=new Be,this.coordinateSystem=di}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ii=new U,ed=new be,td=new be,zt=class extends ea{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ir*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Gr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ir*2*Math.atan(Math.tan(Gr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ii.x,Ii.y).multiplyScalar(-e/Ii.z),Ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ii.x,Ii.y).multiplyScalar(-e/Ii.z)}getViewSize(e,t){return this.getViewBounds(e,ed,td),t.subVectors(td,ed)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Gr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ns=-90,Us=1,vc=class extends At{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new zt(Ns,Us,e,t);s.layers=this.layers,this.add(s);let r=new zt(Ns,Us,e,t);r.layers=this.layers,this.add(r);let o=new zt(Ns,Us,e,t);o.layers=this.layers,this.add(o);let a=new zt(Ns,Us,e,t);a.layers=this.layers,this.add(a);let l=new zt(Ns,Us,e,t);l.layers=this.layers,this.add(l);let c=new zt(Ns,Us,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===di)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===$o)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},ta=class extends Ht{constructor(e,t,n,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Js,super(e,t,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Mc=class extends tn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new ta(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ln}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Rt(5,5,5),r=new Ct({name:"CubemapFromEquirect",uniforms:rr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Zt,blending:Yn});r.uniforms.tEquirect.value=t;let o=new le(s,r),a=t.minFilter;return t.minFilter===qn&&(t.minFilter=ln),new vc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},vl=new U,R0=new U,C0=new qe,Nn=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=vl.subVectors(n,t).cross(R0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(vl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||C0.getNormalMatrix(e),s=this.coplanarPoint(vl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},is=new nn,Io=new U,$r=class{constructor(e=new Nn,t=new Nn,n=new Nn,s=new Nn,r=new Nn,o=new Nn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=di){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],d=s[7],f=s[8],g=s[9],x=s[10],p=s[11],m=s[12],v=s[13],_=s[14],b=s[15];if(n[0].setComponents(l-r,d-c,p-f,b-m).normalize(),n[1].setComponents(l+r,d+c,p+f,b+m).normalize(),n[2].setComponents(l+o,d+u,p+g,b+v).normalize(),n[3].setComponents(l-o,d-u,p-g,b-v).normalize(),n[4].setComponents(l-a,d-h,p-x,b-_).normalize(),t===di)n[5].setComponents(l+a,d+h,p+x,b+_).normalize();else if(t===$o)n[5].setComponents(a,h,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),is.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),is.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(is)}intersectsSprite(e){return is.center.set(0,0,0),is.radius=.7071067811865476,is.applyMatrix4(e.matrixWorld),this.intersectsSphere(is)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Io.x=s.normal.x>0?e.max.x:e.min.x,Io.y=s.normal.y>0?e.max.y:e.min.y,Io.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Io)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function mf(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function I0(i){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){let g=h[d],x=h[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,h[d]=x)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){let x=h[f];i.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Sn=class i extends at{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,h=e/a,d=t/l,f=[],g=[],x=[],p=[];for(let m=0;m<u;m++){let v=m*d-o;for(let _=0;_<c;_++){let b=_*h-r;g.push(b,-v,0),x.push(0,0,1),p.push(_/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<a;v++){let _=v+c*m,b=v+c*(m+1),P=v+1+c*(m+1),T=v+1+c*m;f.push(_,b,T),f.push(b,P,T)}this.setIndex(f),this.setAttribute("position",new tt(g,3)),this.setAttribute("normal",new tt(x,3)),this.setAttribute("uv",new tt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},P0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,L0=`#ifdef USE_ALPHAHASH
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
#endif`,D0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,N0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,U0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,z0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,O0=`#ifdef USE_AOMAP
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
#endif`,F0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,B0=`#ifdef USE_BATCHING
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
#endif`,k0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,H0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,V0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,G0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,W0=`#ifdef USE_IRIDESCENCE
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
#endif`,X0=`#ifdef USE_BUMPMAP
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
#endif`,q0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Y0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,K0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Z0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,J0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,j0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Q0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,eg=`#define PI 3.141592653589793
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
} // validated`,tg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ng=`vec3 transformedNormal = objectNormal;
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
#endif`,ig=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,og=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ag="gl_FragColor = linearToOutputTexel( gl_FragColor );",lg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cg=`#ifdef USE_ENVMAP
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
#endif`,hg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ug=`#ifdef USE_ENVMAP
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
#endif`,dg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fg=`#ifdef USE_ENVMAP
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
#endif`,pg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_g=`#ifdef USE_GRADIENTMAP
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
}`,yg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Mg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bg=`uniform bool receiveShadow;
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
#endif`,Eg=`#ifdef USE_ENVMAP
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
#endif`,Sg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Tg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ag=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Rg=`PhysicalMaterial material;
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
#endif`,Cg=`struct PhysicalMaterial {
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
}`,Ig=`
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
#endif`,Pg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Lg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Dg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ng=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ug=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Og=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,kg=`#if defined( USE_POINTS_UV )
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
#endif`,Hg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Vg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Wg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qg=`#ifdef USE_MORPHTARGETS
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
#endif`,Yg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Zg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,$g=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Qg=`#ifdef USE_NORMALMAP
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
#endif`,ex=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ix=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ox=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ax=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ux=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,px=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,mx=`float getShadowMask() {
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
}`,gx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xx=`#ifdef USE_SKINNING
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
#endif`,_x=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yx=`#ifdef USE_SKINNING
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
#endif`,vx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Mx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ex=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sx=`#ifdef USE_TRANSMISSION
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
#endif`,wx=`#ifdef USE_TRANSMISSION
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
#endif`,Tx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ax=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ix=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Px=`uniform sampler2D t2D;
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
}`,Lx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Nx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ux=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zx=`#include <common>
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
}`,Ox=`#if DEPTH_PACKING == 3200
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
}`,Fx=`#define DISTANCE
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
}`,Bx=`#define DISTANCE
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
}`,kx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vx=`uniform float scale;
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
}`,Gx=`uniform vec3 diffuse;
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
}`,Wx=`#include <common>
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
}`,Xx=`uniform vec3 diffuse;
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
}`,qx=`#define LAMBERT
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
}`,Yx=`#define LAMBERT
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
}`,Kx=`#define MATCAP
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
}`,Zx=`#define MATCAP
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
}`,$x=`#define NORMAL
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
}`,Jx=`#define NORMAL
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
}`,jx=`#define PHONG
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
}`,Qx=`#define PHONG
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
}`,e_=`#define STANDARD
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
}`,t_=`#define STANDARD
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
}`,n_=`#define TOON
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
}`,i_=`#define TOON
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
}`,s_=`uniform float size;
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
}`,r_=`uniform vec3 diffuse;
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
}`,o_=`#include <common>
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
}`,a_=`uniform vec3 color;
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
}`,l_=`uniform float rotation;
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
}`,c_=`uniform vec3 diffuse;
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
}`,Ze={alphahash_fragment:P0,alphahash_pars_fragment:L0,alphamap_fragment:D0,alphamap_pars_fragment:N0,alphatest_fragment:U0,alphatest_pars_fragment:z0,aomap_fragment:O0,aomap_pars_fragment:F0,batching_pars_vertex:B0,batching_vertex:k0,begin_vertex:H0,beginnormal_vertex:V0,bsdfs:G0,iridescence_fragment:W0,bumpmap_pars_fragment:X0,clipping_planes_fragment:q0,clipping_planes_pars_fragment:Y0,clipping_planes_pars_vertex:K0,clipping_planes_vertex:Z0,color_fragment:$0,color_pars_fragment:J0,color_pars_vertex:j0,color_vertex:Q0,common:eg,cube_uv_reflection_fragment:tg,defaultnormal_vertex:ng,displacementmap_pars_vertex:ig,displacementmap_vertex:sg,emissivemap_fragment:rg,emissivemap_pars_fragment:og,colorspace_fragment:ag,colorspace_pars_fragment:lg,envmap_fragment:cg,envmap_common_pars_fragment:hg,envmap_pars_fragment:ug,envmap_pars_vertex:dg,envmap_physical_pars_fragment:Eg,envmap_vertex:fg,fog_vertex:pg,fog_pars_vertex:mg,fog_fragment:gg,fog_pars_fragment:xg,gradientmap_pars_fragment:_g,lightmap_pars_fragment:yg,lights_lambert_fragment:vg,lights_lambert_pars_fragment:Mg,lights_pars_begin:bg,lights_toon_fragment:Sg,lights_toon_pars_fragment:wg,lights_phong_fragment:Tg,lights_phong_pars_fragment:Ag,lights_physical_fragment:Rg,lights_physical_pars_fragment:Cg,lights_fragment_begin:Ig,lights_fragment_maps:Pg,lights_fragment_end:Lg,logdepthbuf_fragment:Dg,logdepthbuf_pars_fragment:Ng,logdepthbuf_pars_vertex:Ug,logdepthbuf_vertex:zg,map_fragment:Og,map_pars_fragment:Fg,map_particle_fragment:Bg,map_particle_pars_fragment:kg,metalnessmap_fragment:Hg,metalnessmap_pars_fragment:Vg,morphinstance_vertex:Gg,morphcolor_vertex:Wg,morphnormal_vertex:Xg,morphtarget_pars_vertex:qg,morphtarget_vertex:Yg,normal_fragment_begin:Kg,normal_fragment_maps:Zg,normal_pars_fragment:$g,normal_pars_vertex:Jg,normal_vertex:jg,normalmap_pars_fragment:Qg,clearcoat_normal_fragment_begin:ex,clearcoat_normal_fragment_maps:tx,clearcoat_pars_fragment:nx,iridescence_pars_fragment:ix,opaque_fragment:sx,packing:rx,premultiplied_alpha_fragment:ox,project_vertex:ax,dithering_fragment:lx,dithering_pars_fragment:cx,roughnessmap_fragment:hx,roughnessmap_pars_fragment:ux,shadowmap_pars_fragment:dx,shadowmap_pars_vertex:fx,shadowmap_vertex:px,shadowmask_pars_fragment:mx,skinbase_vertex:gx,skinning_pars_vertex:xx,skinning_vertex:_x,skinnormal_vertex:yx,specularmap_fragment:vx,specularmap_pars_fragment:Mx,tonemapping_fragment:bx,tonemapping_pars_fragment:Ex,transmission_fragment:Sx,transmission_pars_fragment:wx,uv_pars_fragment:Tx,uv_pars_vertex:Ax,uv_vertex:Rx,worldpos_vertex:Cx,background_vert:Ix,background_frag:Px,backgroundCube_vert:Lx,backgroundCube_frag:Dx,cube_vert:Nx,cube_frag:Ux,depth_vert:zx,depth_frag:Ox,distanceRGBA_vert:Fx,distanceRGBA_frag:Bx,equirect_vert:kx,equirect_frag:Hx,linedashed_vert:Vx,linedashed_frag:Gx,meshbasic_vert:Wx,meshbasic_frag:Xx,meshlambert_vert:qx,meshlambert_frag:Yx,meshmatcap_vert:Kx,meshmatcap_frag:Zx,meshnormal_vert:$x,meshnormal_frag:Jx,meshphong_vert:jx,meshphong_frag:Qx,meshphysical_vert:e_,meshphysical_frag:t_,meshtoon_vert:n_,meshtoon_frag:i_,points_vert:s_,points_frag:r_,shadow_vert:o_,shadow_frag:a_,sprite_vert:l_,sprite_frag:c_},fe={common:{diffuse:{value:new ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new ye(16777215)},opacity:{value:1},center:{value:new be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},Xn={basic:{uniforms:en([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:en([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new ye(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:en([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new ye(0)},specular:{value:new ye(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:en([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:en([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new ye(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:en([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:en([fe.points,fe.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:en([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:en([fe.common,fe.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:en([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:en([fe.sprite,fe.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:en([fe.common,fe.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:en([fe.lights,fe.fog,{color:{value:new ye(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};Xn.physical={uniforms:en([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new ye(0)},specularColor:{value:new ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};var Po={r:0,b:0,g:0},ss=new Zn,h_=new Be;function u_(i,e,t,n,s,r,o){let a=new ye(0),l=r===!0?0:1,c,u,h=null,d=0,f=null;function g(v){let _=v.isScene===!0?v.background:null;return _&&_.isTexture&&(_=(v.backgroundBlurriness>0?t:e).get(_)),_}function x(v){let _=!1,b=g(v);b===null?m(a,l):b&&b.isColor&&(m(b,1),_=!0);let P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(v,_){let b=g(_);b&&(b.isCubeTexture||b.mapping===Sa)?(u===void 0&&(u=new le(new Rt(1,1,1),new Ct({name:"BackgroundCubeMaterial",uniforms:rr(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:Zt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,T,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),ss.copy(_.backgroundRotation),ss.x*=-1,ss.y*=-1,ss.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ss.y*=-1,ss.z*=-1),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(h_.makeRotationFromEuler(ss)),u.material.toneMapped=Je.getTransfer(b.colorSpace)!==pt,(h!==b||d!==b.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=b,d=b.version,f=i.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new le(new Sn(2,2),new Ct({name:"BackgroundMaterial",uniforms:rr(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=Je.getTransfer(b.colorSpace)!==pt,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||d!==b.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=b,d=b.version,f=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function m(v,_){v.getRGB(Po,pf(i)),n.buffers.color.setClear(Po.r,Po.g,Po.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(v,_=1){a.set(v),l=_,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,m(a,l)},render:x,addToRenderList:p}}function d_(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(M,R,S,I,B){let z=!1,L=h(I,S,R);r!==L&&(r=L,c(r.object)),z=f(M,I,S,B),z&&g(M,I,S,B),B!==null&&e.update(B,i.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,b(M,R,S,I),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function h(M,R,S){let I=S.wireframe===!0,B=n[M.id];B===void 0&&(B={},n[M.id]=B);let z=B[R.id];z===void 0&&(z={},B[R.id]=z);let L=z[I];return L===void 0&&(L=d(l()),z[I]=L),L}function d(M){let R=[],S=[],I=[];for(let B=0;B<t;B++)R[B]=0,S[B]=0,I[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:S,attributeDivisors:I,object:M,attributes:{},index:null}}function f(M,R,S,I){let B=r.attributes,z=R.attributes,L=0,D=S.getAttributes();for(let O in D)if(D[O].location>=0){let K=B[O],Z=z[O];if(Z===void 0&&(O==="instanceMatrix"&&M.instanceMatrix&&(Z=M.instanceMatrix),O==="instanceColor"&&M.instanceColor&&(Z=M.instanceColor)),K===void 0||K.attribute!==Z||Z&&K.data!==Z.data)return!0;L++}return r.attributesNum!==L||r.index!==I}function g(M,R,S,I){let B={},z=R.attributes,L=0,D=S.getAttributes();for(let O in D)if(D[O].location>=0){let K=z[O];K===void 0&&(O==="instanceMatrix"&&M.instanceMatrix&&(K=M.instanceMatrix),O==="instanceColor"&&M.instanceColor&&(K=M.instanceColor));let Z={};Z.attribute=K,K&&K.data&&(Z.data=K.data),B[O]=Z,L++}r.attributes=B,r.attributesNum=L,r.index=I}function x(){let M=r.newAttributes;for(let R=0,S=M.length;R<S;R++)M[R]=0}function p(M){m(M,0)}function m(M,R){let S=r.newAttributes,I=r.enabledAttributes,B=r.attributeDivisors;S[M]=1,I[M]===0&&(i.enableVertexAttribArray(M),I[M]=1),B[M]!==R&&(i.vertexAttribDivisor(M,R),B[M]=R)}function v(){let M=r.newAttributes,R=r.enabledAttributes;for(let S=0,I=R.length;S<I;S++)R[S]!==M[S]&&(i.disableVertexAttribArray(S),R[S]=0)}function _(M,R,S,I,B,z,L){L===!0?i.vertexAttribIPointer(M,R,S,B,z):i.vertexAttribPointer(M,R,S,I,B,z)}function b(M,R,S,I){x();let B=I.attributes,z=S.getAttributes(),L=R.defaultAttributeValues;for(let D in z){let O=z[D];if(O.location>=0){let k=B[D];if(k===void 0&&(D==="instanceMatrix"&&M.instanceMatrix&&(k=M.instanceMatrix),D==="instanceColor"&&M.instanceColor&&(k=M.instanceColor)),k!==void 0){let K=k.normalized,Z=k.itemSize,Me=e.get(k);if(Me===void 0)continue;let Te=Me.buffer,$=Me.type,ne=Me.bytesPerElement,pe=$===i.INT||$===i.UNSIGNED_INT||k.gpuType===th;if(k.isInterleavedBufferAttribute){let j=k.data,de=j.stride,se=k.offset;if(j.isInstancedInterleavedBuffer){for(let he=0;he<O.locationSize;he++)m(O.location+he,j.meshPerAttribute);M.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let he=0;he<O.locationSize;he++)p(O.location+he);i.bindBuffer(i.ARRAY_BUFFER,Te);for(let he=0;he<O.locationSize;he++)_(O.location+he,Z/O.locationSize,$,K,de*ne,(se+Z/O.locationSize*he)*ne,pe)}else{if(k.isInstancedBufferAttribute){for(let j=0;j<O.locationSize;j++)m(O.location+j,k.meshPerAttribute);M.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let j=0;j<O.locationSize;j++)p(O.location+j);i.bindBuffer(i.ARRAY_BUFFER,Te);for(let j=0;j<O.locationSize;j++)_(O.location+j,Z/O.locationSize,$,K,Z*ne,Z/O.locationSize*j*ne,pe)}}else if(L!==void 0){let K=L[D];if(K!==void 0)switch(K.length){case 2:i.vertexAttrib2fv(O.location,K);break;case 3:i.vertexAttrib3fv(O.location,K);break;case 4:i.vertexAttrib4fv(O.location,K);break;default:i.vertexAttrib1fv(O.location,K)}}}}v()}function P(){E();for(let M in n){let R=n[M];for(let S in R){let I=R[S];for(let B in I)u(I[B].object),delete I[B];delete R[S]}delete n[M]}}function T(M){if(n[M.id]===void 0)return;let R=n[M.id];for(let S in R){let I=R[S];for(let B in I)u(I[B].object),delete I[B];delete R[S]}delete n[M.id]}function w(M){for(let R in n){let S=n[R];if(S[M.id]===void 0)continue;let I=S[M.id];for(let B in I)u(I[B].object),delete I[B];delete S[M.id]}}function E(){y(),o=!0,r!==s&&(r=s,c(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:E,resetDefaultState:y,dispose:P,releaseStatesOfGeometry:T,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:p,disableUnusedAttributes:v}}function f_(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];t.update(f,n,1)}function l(c,u,h,d){if(h===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let g=0;for(let x=0;x<h;x++)g+=u[x]*d[x];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function p_(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==En&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let E=w===Fn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==pi&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==zn&&!E)}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:v,maxVaryings:_,maxFragmentUniforms:b,vertexTextures:P,maxSamples:T}}function m_(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Nn,a=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){let g=h.clippingPlanes,x=h.clipIntersection,p=h.clipShadows,m=i.get(h);if(!s||g===null||g.length===0||r&&!p)r?u(null):c();else{let v=r?0:n,_=v*4,b=m.clippingState||null;l.value=b,b=u(g,d,_,f);for(let P=0;P!==_;++P)b[P]=t[P];m.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,g){let x=h!==null?h.length:0,p=null;if(x!==0){if(p=l.value,g!==!0||p===null){let m=f+x*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<m)&&(p=new Float32Array(m));for(let _=0,b=f;_!==x;++_,b+=4)o.copy(h[_]).applyMatrix4(v,a),o.normal.toArray(p,b),p[b+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function g_(i){let e=new WeakMap;function t(o,a){return a===Vl?o.mapping=Js:a===Gl&&(o.mapping=js),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Vl||a===Gl)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Mc(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Ui=class extends ea{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Xs=4,nd=[.125,.215,.35,.446,.526,.582],ls=20,Ml=new Ui,id=new ye,bl=null,El=0,Sl=0,wl=!1,os=(1+Math.sqrt(5))/2,zs=1/os,sd=[new U(-os,zs,0),new U(os,zs,0),new U(-zs,0,os),new U(zs,0,os),new U(0,os,-zs),new U(0,os,zs),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],na=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){bl=this._renderer.getRenderTarget(),El=this._renderer.getActiveCubeFace(),Sl=this._renderer.getActiveMipmapLevel(),wl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ad(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=od(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(bl,El,Sl),this._renderer.xr.enabled=wl,e.scissorTest=!1,Lo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Js||e.mapping===js?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bl=this._renderer.getRenderTarget(),El=this._renderer.getActiveCubeFace(),Sl=this._renderer.getActiveMipmapLevel(),wl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:Fn,format:En,colorSpace:jt,depthBuffer:!1},s=rd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rd(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=x_(r)),this._blurMaterial=__(r,e,t)}return s}_compileMaterial(e){let t=new le(this._lodPlanes[0],e);this._renderer.compile(t,Ml)}_sceneToCubeUV(e,t,n,s){let a=new zt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(id),u.toneMapping=Ni,u.autoClear=!1;let f=new ke({name:"PMREM.Background",side:Zt,depthWrite:!1,depthTest:!1}),g=new le(new Rt,f),x=!1,p=e.background;p?p.isColor&&(f.color.copy(p),e.background=null,x=!0):(f.color.copy(id),x=!0);for(let m=0;m<6;m++){let v=m%3;v===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):v===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));let _=this._cubeSize;Lo(s,v*_,m>2?_:0,_,_),u.setRenderTarget(s),x&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Js||e.mapping===js;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ad()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=od());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new le(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Lo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Ml)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=sd[(s-r-1)%sd.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new le(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ls-1),x=r/g,p=isFinite(r)?1+Math.floor(u*x):ls;p>ls&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ls}`);let m=[],v=0;for(let w=0;w<ls;++w){let E=w/x,y=Math.exp(-E*E/2);m.push(y),w===0?v+=y:w<p&&(v+=2*y)}for(let w=0;w<m.length;w++)m[w]=m[w]/v;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-n;let b=this._sizeLods[s],P=3*b*(s>_-Xs?s-_+Xs:0),T=4*(this._cubeSize-b);Lo(t,P,T,3*b,2*b),l.setRenderTarget(t),l.render(h,Ml)}};function x_(i){let e=[],t=[],n=[],s=i,r=i-Xs+1+nd.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>i-Xs?l=nd[o-i+Xs-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,x=3,p=2,m=1,v=new Float32Array(x*g*f),_=new Float32Array(p*g*f),b=new Float32Array(m*g*f);for(let T=0;T<f;T++){let w=T%3*2/3-1,E=T>2?0:-1,y=[w,E,0,w+2/3,E,0,w+2/3,E+1,0,w,E,0,w+2/3,E+1,0,w,E+1,0];v.set(y,x*g*T),_.set(d,p*g*T);let M=[T,T,T,T,T,T];b.set(M,m*g*T)}let P=new at;P.setAttribute("position",new je(v,x)),P.setAttribute("uv",new je(_,p)),P.setAttribute("faceIndex",new je(b,m)),e.push(P),s>Xs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function rd(i,e,t){let n=new tn(i,e,t);return n.texture.mapping=Sa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Lo(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function __(i,e,t){let n=new Float32Array(ls),s=new U(0,1,0);return new Ct({name:"SphericalGaussianBlur",defines:{n:ls,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:dh(),fragmentShader:`

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
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function od(){return new Ct({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dh(),fragmentShader:`

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
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function ad(){return new Ct({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function dh(){return`

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
	`}function y_(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Vl||l===Gl,u=l===Js||l===js;if(c||u){let h=e.get(a),d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new na(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{let f=a.image;return c&&f&&f.height>0||u&&f&&s(f)?(t===null&&(t=new na(i)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function v_(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&kr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function M_(i,e,t,n){let s={},r=new WeakMap;function o(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let x=d.morphAttributes[g];for(let p=0,m=x.length;p<m;p++)e.remove(x[p])}d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(h){let d=h.attributes;for(let g in d)e.update(d[g],i.ARRAY_BUFFER);let f=h.morphAttributes;for(let g in f){let x=f[g];for(let p=0,m=x.length;p<m;p++)e.update(x[p],i.ARRAY_BUFFER)}}function c(h){let d=[],f=h.index,g=h.attributes.position,x=0;if(f!==null){let v=f.array;x=f.version;for(let _=0,b=v.length;_<b;_+=3){let P=v[_+0],T=v[_+1],w=v[_+2];d.push(P,T,T,w,w,P)}}else if(g!==void 0){let v=g.array;x=g.version;for(let _=0,b=v.length/3-1;_<b;_+=3){let P=_+0,T=_+1,w=_+2;d.push(P,T,T,w,w,P)}}else return;let p=new(df(d)?Qo:sr)(d,1);p.version=x;let m=r.get(h);m&&e.remove(m),r.set(h,p)}function u(h){let d=r.get(h);if(d){let f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function b_(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*o),t.update(f,n,1)}function c(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),t.update(f,n,g))}function u(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let p=0;for(let m=0;m<g;m++)p+=f[m];t.update(p,n,1)}function h(d,f,g,x){if(g===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<d.length;m++)c(d[m]/o,f[m],x[m]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,x,0,g);let m=0;for(let v=0;v<g;v++)m+=f[v]*x[v];t.update(m,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function E_(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function S_(i,e,t){let n=new WeakMap,s=new lt;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,d=n.get(a);if(d===void 0||d.count!==h){let y=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",y)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],_=0;f===!0&&(_=1),g===!0&&(_=2),x===!0&&(_=3);let b=a.attributes.position.count*_,P=1;b>e.maxTextureSize&&(P=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let T=new Float32Array(b*P*4*h),w=new jo(T,b,P,h);w.type=zn,w.needsUpdate=!0;let E=_*4;for(let M=0;M<h;M++){let R=p[M],S=m[M],I=v[M],B=b*P*4*M;for(let z=0;z<R.count;z++){let L=z*E;f===!0&&(s.fromBufferAttribute(R,z),T[B+L+0]=s.x,T[B+L+1]=s.y,T[B+L+2]=s.z,T[B+L+3]=0),g===!0&&(s.fromBufferAttribute(S,z),T[B+L+4]=s.x,T[B+L+5]=s.y,T[B+L+6]=s.z,T[B+L+7]=0),x===!0&&(s.fromBufferAttribute(I,z),T[B+L+8]=s.x,T[B+L+9]=s.y,T[B+L+10]=s.z,T[B+L+11]=I.itemSize===4?s.w:1)}}d={count:h,texture:w,size:new be(b,P)},n.set(a,d),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function w_(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var ia=class extends Ht{constructor(e,t,n,s,r,o,a,l,c,u=Ys){if(u!==Ys&&u!==er)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ys&&(n=cs),n===void 0&&u===er&&(n=Qs),super(null,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:$t,this.minFilter=l!==void 0?l:$t,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},gf=new Ht,ld=new ia(1,1),xf=new jo,_f=new yc,yf=new ta,cd=[],hd=[],ud=new Float32Array(16),dd=new Float32Array(9),fd=new Float32Array(4);function pr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=cd[s];if(r===void 0&&(r=new Float32Array(s),cd[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Ot(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ft(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Aa(i,e){let t=hd[e];t===void 0&&(t=new Int32Array(e),hd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function T_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function A_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;i.uniform2fv(this.addr,e),Ft(t,e)}}function R_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ot(t,e))return;i.uniform3fv(this.addr,e),Ft(t,e)}}function C_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;i.uniform4fv(this.addr,e),Ft(t,e)}}function I_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ft(t,e)}else{if(Ot(t,n))return;fd.set(n),i.uniformMatrix2fv(this.addr,!1,fd),Ft(t,n)}}function P_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ft(t,e)}else{if(Ot(t,n))return;dd.set(n),i.uniformMatrix3fv(this.addr,!1,dd),Ft(t,n)}}function L_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ft(t,e)}else{if(Ot(t,n))return;ud.set(n),i.uniformMatrix4fv(this.addr,!1,ud),Ft(t,n)}}function D_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function N_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;i.uniform2iv(this.addr,e),Ft(t,e)}}function U_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;i.uniform3iv(this.addr,e),Ft(t,e)}}function z_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;i.uniform4iv(this.addr,e),Ft(t,e)}}function O_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function F_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;i.uniform2uiv(this.addr,e),Ft(t,e)}}function B_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;i.uniform3uiv(this.addr,e),Ft(t,e)}}function k_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;i.uniform4uiv(this.addr,e),Ft(t,e)}}function H_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ld.compareFunction=hf,r=ld):r=gf,t.setTexture2D(e||r,s)}function V_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||_f,s)}function G_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||yf,s)}function W_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||xf,s)}function X_(i){switch(i){case 5126:return T_;case 35664:return A_;case 35665:return R_;case 35666:return C_;case 35674:return I_;case 35675:return P_;case 35676:return L_;case 5124:case 35670:return D_;case 35667:case 35671:return N_;case 35668:case 35672:return U_;case 35669:case 35673:return z_;case 5125:return O_;case 36294:return F_;case 36295:return B_;case 36296:return k_;case 35678:case 36198:case 36298:case 36306:case 35682:return H_;case 35679:case 36299:case 36307:return V_;case 35680:case 36300:case 36308:case 36293:return G_;case 36289:case 36303:case 36311:case 36292:return W_}}function q_(i,e){i.uniform1fv(this.addr,e)}function Y_(i,e){let t=pr(e,this.size,2);i.uniform2fv(this.addr,t)}function K_(i,e){let t=pr(e,this.size,3);i.uniform3fv(this.addr,t)}function Z_(i,e){let t=pr(e,this.size,4);i.uniform4fv(this.addr,t)}function $_(i,e){let t=pr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function J_(i,e){let t=pr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function j_(i,e){let t=pr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Q_(i,e){i.uniform1iv(this.addr,e)}function ey(i,e){i.uniform2iv(this.addr,e)}function ty(i,e){i.uniform3iv(this.addr,e)}function ny(i,e){i.uniform4iv(this.addr,e)}function iy(i,e){i.uniform1uiv(this.addr,e)}function sy(i,e){i.uniform2uiv(this.addr,e)}function ry(i,e){i.uniform3uiv(this.addr,e)}function oy(i,e){i.uniform4uiv(this.addr,e)}function ay(i,e,t){let n=this.cache,s=e.length,r=Aa(t,s);Ot(n,r)||(i.uniform1iv(this.addr,r),Ft(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||gf,r[o])}function ly(i,e,t){let n=this.cache,s=e.length,r=Aa(t,s);Ot(n,r)||(i.uniform1iv(this.addr,r),Ft(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||_f,r[o])}function cy(i,e,t){let n=this.cache,s=e.length,r=Aa(t,s);Ot(n,r)||(i.uniform1iv(this.addr,r),Ft(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||yf,r[o])}function hy(i,e,t){let n=this.cache,s=e.length,r=Aa(t,s);Ot(n,r)||(i.uniform1iv(this.addr,r),Ft(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||xf,r[o])}function uy(i){switch(i){case 5126:return q_;case 35664:return Y_;case 35665:return K_;case 35666:return Z_;case 35674:return $_;case 35675:return J_;case 35676:return j_;case 5124:case 35670:return Q_;case 35667:case 35671:return ey;case 35668:case 35672:return ty;case 35669:case 35673:return ny;case 5125:return iy;case 36294:return sy;case 36295:return ry;case 36296:return oy;case 35678:case 36198:case 36298:case 36306:case 35682:return ay;case 35679:case 36299:case 36307:return ly;case 35680:case 36300:case 36308:case 36293:return cy;case 36289:case 36303:case 36311:case 36292:return hy}}var bc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=X_(t.type)}},Ec=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=uy(t.type)}},Sc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Tl=/(\w+)(\])?(\[|\.)?/g;function pd(i,e){i.seq.push(e),i.map[e.id]=e}function dy(i,e,t){let n=i.name,s=n.length;for(Tl.lastIndex=0;;){let r=Tl.exec(n),o=Tl.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){pd(t,c===void 0?new bc(a,i,e):new Ec(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new Sc(a),pd(t,h)),t=h}}}var Zs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);dy(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function md(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var fy=37297,py=0;function my(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var gd=new qe;function gy(i){Je._getMatrix(gd,Je.workingColorSpace,i);let e=`mat3( ${gd.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(i)){case Ta:return[e,"LinearTransferOETF"];case pt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function xd(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+my(i.getShaderSource(e),o)}else return s}function xy(i,e){let t=gy(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function _y(i,e){let t;switch(e){case Zc:t="Linear";break;case $c:t="Reinhard";break;case Jc:t="Cineon";break;case to:t="ACESFilmic";break;case jc:t="AgX";break;case Qc:t="Neutral";break;case Dm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Do=new U;function yy(){Je.getLuminanceCoefficients(Do);let i=Do.x.toFixed(4),e=Do.y.toFixed(4),t=Do.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Hr).join(`
`)}function My(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function by(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Hr(i){return i!==""}function _d(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function yd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Ey=/^[ \t]*#include +<([\w\d./]+)>/gm;function wc(i){return i.replace(Ey,wy)}var Sy=new Map;function wy(i,e){let t=Ze[e];if(t===void 0){let n=Sy.get(e);if(n!==void 0)t=Ze[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return wc(t)}var Ty=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vd(i){return i.replace(Ty,Ay)}function Ay(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Md(i){let e=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Ry(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Zd?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Kc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===hi&&(e="SHADOWMAP_TYPE_VSM"),e}function Cy(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Js:case js:e="ENVMAP_TYPE_CUBE";break;case Sa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Iy(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case js:e="ENVMAP_MODE_REFRACTION";break}return e}function Py(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case $d:e="ENVMAP_BLENDING_MULTIPLY";break;case Pm:e="ENVMAP_BLENDING_MIX";break;case Lm:e="ENVMAP_BLENDING_ADD";break}return e}function Ly(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Dy(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Ry(t),c=Cy(t),u=Iy(t),h=Py(t),d=Ly(t),f=vy(t),g=My(r),x=s.createProgram(),p,m,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Hr).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Hr).join(`
`),m.length>0&&(m+=`
`)):(p=[Md(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hr).join(`
`),m=[Md(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ni?"#define TONE_MAPPING":"",t.toneMapping!==Ni?Ze.tonemapping_pars_fragment:"",t.toneMapping!==Ni?_y("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,xy("linearToOutputTexel",t.outputColorSpace),yy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Hr).join(`
`)),o=wc(o),o=_d(o,t),o=yd(o,t),a=wc(a),a=_d(a,t),a=yd(a,t),o=vd(o),a=vd(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===Nu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Nu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let _=v+p+o,b=v+m+a,P=md(s,s.VERTEX_SHADER,_),T=md(s,s.FRAGMENT_SHADER,b);s.attachShader(x,P),s.attachShader(x,T),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function w(R){if(i.debug.checkShaderErrors){let S=s.getProgramInfoLog(x).trim(),I=s.getShaderInfoLog(P).trim(),B=s.getShaderInfoLog(T).trim(),z=!0,L=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,P,T);else{let D=xd(s,P,"vertex"),O=xd(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+S+`
`+D+`
`+O)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(I===""||B==="")&&(L=!1);L&&(R.diagnostics={runnable:z,programLog:S,vertexShader:{log:I,prefix:p},fragmentShader:{log:B,prefix:m}})}s.deleteShader(P),s.deleteShader(T),E=new Zs(s,x),y=by(s,x)}let E;this.getUniforms=function(){return E===void 0&&w(this),E};let y;this.getAttributes=function(){return y===void 0&&w(this),y};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(x,fy)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=py++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=P,this.fragmentShader=T,this}var Ny=0,Tc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ac(e),t.set(e,n)),n}},Ac=class{constructor(e){this.id=Ny++,this.code=e,this.usedTimes=0}};function Uy(i,e,t,n,s,r,o){let a=new Zr,l=new Tc,c=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return c.add(y),y===0?"uv":`uv${y}`}function p(y,M,R,S,I){let B=S.fog,z=I.geometry,L=y.isMeshStandardMaterial?S.environment:null,D=(y.isMeshStandardMaterial?t:e).get(y.envMap||L),O=D&&D.mapping===Sa?D.image.height:null,k=g[y.type];y.precision!==null&&(f=s.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));let K=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Z=K!==void 0?K.length:0,Me=0;z.morphAttributes.position!==void 0&&(Me=1),z.morphAttributes.normal!==void 0&&(Me=2),z.morphAttributes.color!==void 0&&(Me=3);let Te,$,ne,pe;if(k){let xt=Xn[k];Te=xt.vertexShader,$=xt.fragmentShader}else Te=y.vertexShader,$=y.fragmentShader,l.update(y),ne=l.getVertexShaderID(y),pe=l.getFragmentShaderID(y);let j=i.getRenderTarget(),de=i.state.buffers.depth.getReversed(),se=I.isInstancedMesh===!0,he=I.isBatchedMesh===!0,oe=!!y.map,ue=!!y.matcap,ze=!!D,H=!!y.aoMap,yt=!!y.lightMap,et=!!y.bumpMap,$e=!!y.normalMap,Ue=!!y.displacementMap,Ge=!!y.emissiveMap,Ie=!!y.metalnessMap,N=!!y.roughnessMap,A=y.anisotropy>0,X=y.clearcoat>0,ee=y.dispersion>0,re=y.iridescence>0,Q=y.sheen>0,Pe=y.transmission>0,ge=A&&!!y.anisotropyMap,Ee=X&&!!y.clearcoatMap,st=X&&!!y.clearcoatNormalMap,ae=X&&!!y.clearcoatRoughnessMap,Se=re&&!!y.iridescenceMap,Oe=re&&!!y.iridescenceThicknessMap,Fe=Q&&!!y.sheenColorMap,we=Q&&!!y.sheenRoughnessMap,it=!!y.specularMap,Ke=!!y.specularColorMap,Et=!!y.specularIntensityMap,V=Pe&&!!y.transmissionMap,me=Pe&&!!y.thicknessMap,J=!!y.gradientMap,te=!!y.alphaMap,ve=y.alphaTest>0,xe=!!y.alphaHash,We=!!y.extensions,Lt=Ni;y.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Lt=i.toneMapping);let Xt={shaderID:k,shaderType:y.type,shaderName:y.name,vertexShader:Te,fragmentShader:$,defines:y.defines,customVertexShaderID:ne,customFragmentShaderID:pe,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:he,batchingColor:he&&I._colorsTexture!==null,instancing:se,instancingColor:se&&I.instanceColor!==null,instancingMorph:se&&I.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:j===null?i.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:jt,alphaToCoverage:!!y.alphaToCoverage,map:oe,matcap:ue,envMap:ze,envMapMode:ze&&D.mapping,envMapCubeUVHeight:O,aoMap:H,lightMap:yt,bumpMap:et,normalMap:$e,displacementMap:d&&Ue,emissiveMap:Ge,normalMapObjectSpace:$e&&y.normalMapType===Bm,normalMapTangentSpace:$e&&y.normalMapType===cf,metalnessMap:Ie,roughnessMap:N,anisotropy:A,anisotropyMap:ge,clearcoat:X,clearcoatMap:Ee,clearcoatNormalMap:st,clearcoatRoughnessMap:ae,dispersion:ee,iridescence:re,iridescenceMap:Se,iridescenceThicknessMap:Oe,sheen:Q,sheenColorMap:Fe,sheenRoughnessMap:we,specularMap:it,specularColorMap:Ke,specularIntensityMap:Et,transmission:Pe,transmissionMap:V,thicknessMap:me,gradientMap:J,opaque:y.transparent===!1&&y.blending===qs&&y.alphaToCoverage===!1,alphaMap:te,alphaTest:ve,alphaHash:xe,combine:y.combine,mapUv:oe&&x(y.map.channel),aoMapUv:H&&x(y.aoMap.channel),lightMapUv:yt&&x(y.lightMap.channel),bumpMapUv:et&&x(y.bumpMap.channel),normalMapUv:$e&&x(y.normalMap.channel),displacementMapUv:Ue&&x(y.displacementMap.channel),emissiveMapUv:Ge&&x(y.emissiveMap.channel),metalnessMapUv:Ie&&x(y.metalnessMap.channel),roughnessMapUv:N&&x(y.roughnessMap.channel),anisotropyMapUv:ge&&x(y.anisotropyMap.channel),clearcoatMapUv:Ee&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:st&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:Oe&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:we&&x(y.sheenRoughnessMap.channel),specularMapUv:it&&x(y.specularMap.channel),specularColorMapUv:Ke&&x(y.specularColorMap.channel),specularIntensityMapUv:Et&&x(y.specularIntensityMap.channel),transmissionMapUv:V&&x(y.transmissionMap.channel),thicknessMapUv:me&&x(y.thicknessMap.channel),alphaMapUv:te&&x(y.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&($e||A),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!z.attributes.uv&&(oe||te),fog:!!B,useFog:y.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:de,skinning:I.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:Me,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Lt,decodeVideoTexture:oe&&y.map.isVideoTexture===!0&&Je.getTransfer(y.map.colorSpace)===pt,decodeVideoTextureEmissive:Ge&&y.emissiveMap.isVideoTexture===!0&&Je.getTransfer(y.emissiveMap.colorSpace)===pt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===gt,flipSided:y.side===Zt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:We&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(We&&y.extensions.multiDraw===!0||he)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Xt.vertexUv1s=c.has(1),Xt.vertexUv2s=c.has(2),Xt.vertexUv3s=c.has(3),c.clear(),Xt}function m(y){let M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(let R in y.defines)M.push(R),M.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(v(M,y),_(M,y),M.push(i.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function v(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function _(y,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),y.push(a.mask)}function b(y){let M=g[y.type],R;if(M){let S=Xn[M];R=Gi.clone(S.uniforms)}else R=y.uniforms;return R}function P(y,M){let R;for(let S=0,I=u.length;S<I;S++){let B=u[S];if(B.cacheKey===M){R=B,++R.usedTimes;break}}return R===void 0&&(R=new Dy(i,M,y,r),u.push(R)),R}function T(y){if(--y.usedTimes===0){let M=u.indexOf(y);u[M]=u[u.length-1],u.pop(),y.destroy()}}function w(y){l.remove(y)}function E(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:b,acquireProgram:P,releaseProgram:T,releaseShaderCache:w,programs:u,dispose:E}}function zy(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Oy(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function bd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ed(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h,d,f,g,x,p){let m=i[e];return m===void 0?(m={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:x,group:p},i[e]=m):(m.id=h.id,m.object=h,m.geometry=d,m.material=f,m.groupOrder=g,m.renderOrder=h.renderOrder,m.z=x,m.group=p),e++,m}function a(h,d,f,g,x,p){let m=o(h,d,f,g,x,p);f.transmission>0?n.push(m):f.transparent===!0?s.push(m):t.push(m)}function l(h,d,f,g,x,p){let m=o(h,d,f,g,x,p);f.transmission>0?n.unshift(m):f.transparent===!0?s.unshift(m):t.unshift(m)}function c(h,d){t.length>1&&t.sort(h||Oy),n.length>1&&n.sort(d||bd),s.length>1&&s.sort(d||bd)}function u(){for(let h=e,d=i.length;h<d;h++){let f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function Fy(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Ed,i.set(n,[o])):s>=r.length?(o=new Ed,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function By(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new ye};break;case"SpotLight":t={position:new U,direction:new U,color:new ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new ye,groundColor:new ye};break;case"RectAreaLight":t={color:new ye,position:new U,halfWidth:new U,halfHeight:new U};break}return i[e.id]=t,t}}}function ky(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Hy=0;function Vy(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Gy(i){let e=new By,t=ky(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);let s=new U,r=new Be,o=new Be;function a(c){let u=0,h=0,d=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let f=0,g=0,x=0,p=0,m=0,v=0,_=0,b=0,P=0,T=0,w=0;c.sort(Vy);for(let y=0,M=c.length;y<M;y++){let R=c[y],S=R.color,I=R.intensity,B=R.distance,z=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=S.r*I,h+=S.g*I,d+=S.b*I;else if(R.isLightProbe){for(let L=0;L<9;L++)n.probe[L].addScaledVector(R.sh.coefficients[L],I);w++}else if(R.isDirectionalLight){let L=e.get(R);if(L.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let D=R.shadow,O=t.get(R);O.shadowIntensity=D.intensity,O.shadowBias=D.bias,O.shadowNormalBias=D.normalBias,O.shadowRadius=D.radius,O.shadowMapSize=D.mapSize,n.directionalShadow[f]=O,n.directionalShadowMap[f]=z,n.directionalShadowMatrix[f]=R.shadow.matrix,v++}n.directional[f]=L,f++}else if(R.isSpotLight){let L=e.get(R);L.position.setFromMatrixPosition(R.matrixWorld),L.color.copy(S).multiplyScalar(I),L.distance=B,L.coneCos=Math.cos(R.angle),L.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),L.decay=R.decay,n.spot[x]=L;let D=R.shadow;if(R.map&&(n.spotLightMap[P]=R.map,P++,D.updateMatrices(R),R.castShadow&&T++),n.spotLightMatrix[x]=D.matrix,R.castShadow){let O=t.get(R);O.shadowIntensity=D.intensity,O.shadowBias=D.bias,O.shadowNormalBias=D.normalBias,O.shadowRadius=D.radius,O.shadowMapSize=D.mapSize,n.spotShadow[x]=O,n.spotShadowMap[x]=z,b++}x++}else if(R.isRectAreaLight){let L=e.get(R);L.color.copy(S).multiplyScalar(I),L.halfWidth.set(R.width*.5,0,0),L.halfHeight.set(0,R.height*.5,0),n.rectArea[p]=L,p++}else if(R.isPointLight){let L=e.get(R);if(L.color.copy(R.color).multiplyScalar(R.intensity),L.distance=R.distance,L.decay=R.decay,R.castShadow){let D=R.shadow,O=t.get(R);O.shadowIntensity=D.intensity,O.shadowBias=D.bias,O.shadowNormalBias=D.normalBias,O.shadowRadius=D.radius,O.shadowMapSize=D.mapSize,O.shadowCameraNear=D.camera.near,O.shadowCameraFar=D.camera.far,n.pointShadow[g]=O,n.pointShadowMap[g]=z,n.pointShadowMatrix[g]=R.shadow.matrix,_++}n.point[g]=L,g++}else if(R.isHemisphereLight){let L=e.get(R);L.skyColor.copy(R.color).multiplyScalar(I),L.groundColor.copy(R.groundColor).multiplyScalar(I),n.hemi[m]=L,m++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=fe.LTC_FLOAT_1,n.rectAreaLTC2=fe.LTC_FLOAT_2):(n.rectAreaLTC1=fe.LTC_HALF_1,n.rectAreaLTC2=fe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;let E=n.hash;(E.directionalLength!==f||E.pointLength!==g||E.spotLength!==x||E.rectAreaLength!==p||E.hemiLength!==m||E.numDirectionalShadows!==v||E.numPointShadows!==_||E.numSpotShadows!==b||E.numSpotMaps!==P||E.numLightProbes!==w)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=b+P-T,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=w,E.directionalLength=f,E.pointLength=g,E.spotLength=x,E.rectAreaLength=p,E.hemiLength=m,E.numDirectionalShadows=v,E.numPointShadows=_,E.numSpotShadows=b,E.numSpotMaps=P,E.numLightProbes=w,n.version=Hy++)}function l(c,u){let h=0,d=0,f=0,g=0,x=0,p=u.matrixWorldInverse;for(let m=0,v=c.length;m<v;m++){let _=c[m];if(_.isDirectionalLight){let b=n.directional[h];b.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),h++}else if(_.isSpotLight){let b=n.spot[f];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),f++}else if(_.isRectAreaLight){let b=n.rectArea[g];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(p),o.identity(),r.copy(_.matrixWorld),r.premultiply(p),o.extractRotation(r),b.halfWidth.set(_.width*.5,0,0),b.halfHeight.set(0,_.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){let b=n.point[d];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(p),d++}else if(_.isHemisphereLight){let b=n.hemi[x];b.direction.setFromMatrixPosition(_.matrixWorld),b.direction.transformDirection(p),x++}}}return{setup:a,setupView:l,state:n}}function Sd(i){let e=new Gy(i),t=[],n=[];function s(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Wy(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Sd(i),e.set(s,[a])):r>=o.length?(a=new Sd(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Rc=class extends hn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Om,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Cc=class extends hn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Xy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qy=`uniform sampler2D shadow_pass;
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
}`;function Yy(i,e,t){let n=new $r,s=new be,r=new be,o=new lt,a=new Rc({depthPacking:Fm}),l=new Cc,c={},u=t.maxTextureSize,h={[Kn]:Zt,[Zt]:Kn,[gt]:gt},d=new Ct({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new be},radius:{value:4}},vertexShader:Xy,fragmentShader:qy}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new at;g.setAttribute("position",new je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new le(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zd;let m=this.type;this.render=function(T,w,E){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;let y=i.getRenderTarget(),M=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),S=i.state;S.setBlending(Yn),S.buffers.color.setClear(1,1,1,1),S.buffers.depth.setTest(!0),S.setScissorTest(!1);let I=m!==hi&&this.type===hi,B=m===hi&&this.type!==hi;for(let z=0,L=T.length;z<L;z++){let D=T[z],O=D.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",D,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);let k=O.getFrameExtents();if(s.multiply(k),r.copy(O.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/k.x),s.x=r.x*k.x,O.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/k.y),s.y=r.y*k.y,O.mapSize.y=r.y)),O.map===null||I===!0||B===!0){let Z=this.type!==hi?{minFilter:$t,magFilter:$t}:{};O.map!==null&&O.map.dispose(),O.map=new tn(s.x,s.y,Z),O.map.texture.name=D.name+".shadowMap",O.camera.updateProjectionMatrix()}i.setRenderTarget(O.map),i.clear();let K=O.getViewportCount();for(let Z=0;Z<K;Z++){let Me=O.getViewport(Z);o.set(r.x*Me.x,r.y*Me.y,r.x*Me.z,r.y*Me.w),S.viewport(o),O.updateMatrices(D,Z),n=O.getFrustum(),b(w,E,O.camera,D,this.type)}O.isPointLightShadow!==!0&&this.type===hi&&v(O,E),O.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(y,M,R)};function v(T,w){let E=e.update(x);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new tn(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(w,null,E,d,x,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(w,null,E,f,x,null)}function _(T,w,E,y){let M=null,R=E.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(R!==void 0)M=R;else if(M=E.isPointLight===!0?l:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let S=M.uuid,I=w.uuid,B=c[S];B===void 0&&(B={},c[S]=B);let z=B[I];z===void 0&&(z=M.clone(),B[I]=z,w.addEventListener("dispose",P)),M=z}if(M.visible=w.visible,M.wireframe=w.wireframe,y===hi?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:h[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,E.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let S=i.properties.get(M);S.light=E}return M}function b(T,w,E,y,M){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===hi)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,T.matrixWorld);let I=e.update(T),B=T.material;if(Array.isArray(B)){let z=I.groups;for(let L=0,D=z.length;L<D;L++){let O=z[L],k=B[O.materialIndex];if(k&&k.visible){let K=_(T,k,y,M);T.onBeforeShadow(i,T,w,E,I,K,O),i.renderBufferDirect(E,null,I,K,T,O),T.onAfterShadow(i,T,w,E,I,K,O)}}}else if(B.visible){let z=_(T,B,y,M);T.onBeforeShadow(i,T,w,E,I,z,null),i.renderBufferDirect(E,null,I,z,T,null),T.onAfterShadow(i,T,w,E,I,z,null)}}let S=T.children;for(let I=0,B=S.length;I<B;I++)b(S[I],w,E,y,M)}function P(T){T.target.removeEventListener("dispose",P);for(let E in c){let y=c[E],M=T.target.uuid;M in y&&(y[M].dispose(),delete y[M])}}}var Ky={[Ul]:zl,[Ol]:kl,[Fl]:Hl,[$s]:Bl,[zl]:Ul,[kl]:Ol,[Hl]:Fl,[Bl]:$s};function Zy(i,e){function t(){let V=!1,me=new lt,J=null,te=new lt(0,0,0,0);return{setMask:function(ve){J!==ve&&!V&&(i.colorMask(ve,ve,ve,ve),J=ve)},setLocked:function(ve){V=ve},setClear:function(ve,xe,We,Lt,Xt){Xt===!0&&(ve*=Lt,xe*=Lt,We*=Lt),me.set(ve,xe,We,Lt),te.equals(me)===!1&&(i.clearColor(ve,xe,We,Lt),te.copy(me))},reset:function(){V=!1,J=null,te.set(-1,0,0,0)}}}function n(){let V=!1,me=!1,J=null,te=null,ve=null;return{setReversed:function(xe){if(me!==xe){let We=e.get("EXT_clip_control");me?We.clipControlEXT(We.LOWER_LEFT_EXT,We.ZERO_TO_ONE_EXT):We.clipControlEXT(We.LOWER_LEFT_EXT,We.NEGATIVE_ONE_TO_ONE_EXT);let Lt=ve;ve=null,this.setClear(Lt)}me=xe},getReversed:function(){return me},setTest:function(xe){xe?j(i.DEPTH_TEST):de(i.DEPTH_TEST)},setMask:function(xe){J!==xe&&!V&&(i.depthMask(xe),J=xe)},setFunc:function(xe){if(me&&(xe=Ky[xe]),te!==xe){switch(xe){case Ul:i.depthFunc(i.NEVER);break;case zl:i.depthFunc(i.ALWAYS);break;case Ol:i.depthFunc(i.LESS);break;case $s:i.depthFunc(i.LEQUAL);break;case Fl:i.depthFunc(i.EQUAL);break;case Bl:i.depthFunc(i.GEQUAL);break;case kl:i.depthFunc(i.GREATER);break;case Hl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}te=xe}},setLocked:function(xe){V=xe},setClear:function(xe){ve!==xe&&(me&&(xe=1-xe),i.clearDepth(xe),ve=xe)},reset:function(){V=!1,J=null,te=null,ve=null,me=!1}}}function s(){let V=!1,me=null,J=null,te=null,ve=null,xe=null,We=null,Lt=null,Xt=null;return{setTest:function(xt){V||(xt?j(i.STENCIL_TEST):de(i.STENCIL_TEST))},setMask:function(xt){me!==xt&&!V&&(i.stencilMask(xt),me=xt)},setFunc:function(xt,Cn,ni){(J!==xt||te!==Cn||ve!==ni)&&(i.stencilFunc(xt,Cn,ni),J=xt,te=Cn,ve=ni)},setOp:function(xt,Cn,ni){(xe!==xt||We!==Cn||Lt!==ni)&&(i.stencilOp(xt,Cn,ni),xe=xt,We=Cn,Lt=ni)},setLocked:function(xt){V=xt},setClear:function(xt){Xt!==xt&&(i.clearStencil(xt),Xt=xt)},reset:function(){V=!1,me=null,J=null,te=null,ve=null,xe=null,We=null,Lt=null,Xt=null}}}let r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap,u={},h={},d=new WeakMap,f=[],g=null,x=!1,p=null,m=null,v=null,_=null,b=null,P=null,T=null,w=new ye(0,0,0),E=0,y=!1,M=null,R=null,S=null,I=null,B=null,z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),L=!1,D=0,O=i.getParameter(i.VERSION);O.indexOf("WebGL")!==-1?(D=parseFloat(/^WebGL (\d)/.exec(O)[1]),L=D>=1):O.indexOf("OpenGL ES")!==-1&&(D=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),L=D>=2);let k=null,K={},Z=i.getParameter(i.SCISSOR_BOX),Me=i.getParameter(i.VIEWPORT),Te=new lt().fromArray(Z),$=new lt().fromArray(Me);function ne(V,me,J,te){let ve=new Uint8Array(4),xe=i.createTexture();i.bindTexture(V,xe),i.texParameteri(V,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(V,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let We=0;We<J;We++)V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?i.texImage3D(me,0,i.RGBA,1,1,te,0,i.RGBA,i.UNSIGNED_BYTE,ve):i.texImage2D(me+We,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ve);return xe}let pe={};pe[i.TEXTURE_2D]=ne(i.TEXTURE_2D,i.TEXTURE_2D,1),pe[i.TEXTURE_CUBE_MAP]=ne(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),pe[i.TEXTURE_2D_ARRAY]=ne(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),pe[i.TEXTURE_3D]=ne(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),j(i.DEPTH_TEST),o.setFunc($s),et(!1),$e(Cu),j(i.CULL_FACE),H(Yn);function j(V){u[V]!==!0&&(i.enable(V),u[V]=!0)}function de(V){u[V]!==!1&&(i.disable(V),u[V]=!1)}function se(V,me){return h[V]!==me?(i.bindFramebuffer(V,me),h[V]=me,V===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=me),V===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=me),!0):!1}function he(V,me){let J=f,te=!1;if(V){J=d.get(me),J===void 0&&(J=[],d.set(me,J));let ve=V.textures;if(J.length!==ve.length||J[0]!==i.COLOR_ATTACHMENT0){for(let xe=0,We=ve.length;xe<We;xe++)J[xe]=i.COLOR_ATTACHMENT0+xe;J.length=ve.length,te=!0}}else J[0]!==i.BACK&&(J[0]=i.BACK,te=!0);te&&i.drawBuffers(J)}function oe(V){return g!==V?(i.useProgram(V),g=V,!0):!1}let ue={[as]:i.FUNC_ADD,[pm]:i.FUNC_SUBTRACT,[mm]:i.FUNC_REVERSE_SUBTRACT};ue[gm]=i.MIN,ue[xm]=i.MAX;let ze={[_m]:i.ZERO,[ym]:i.ONE,[vm]:i.SRC_COLOR,[Dl]:i.SRC_ALPHA,[Tm]:i.SRC_ALPHA_SATURATE,[Sm]:i.DST_COLOR,[bm]:i.DST_ALPHA,[Mm]:i.ONE_MINUS_SRC_COLOR,[Nl]:i.ONE_MINUS_SRC_ALPHA,[wm]:i.ONE_MINUS_DST_COLOR,[Em]:i.ONE_MINUS_DST_ALPHA,[Am]:i.CONSTANT_COLOR,[Rm]:i.ONE_MINUS_CONSTANT_COLOR,[Cm]:i.CONSTANT_ALPHA,[Im]:i.ONE_MINUS_CONSTANT_ALPHA};function H(V,me,J,te,ve,xe,We,Lt,Xt,xt){if(V===Yn){x===!0&&(de(i.BLEND),x=!1);return}if(x===!1&&(j(i.BLEND),x=!0),V!==fm){if(V!==p||xt!==y){if((m!==as||b!==as)&&(i.blendEquation(i.FUNC_ADD),m=as,b=as),xt)switch(V){case qs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ct:i.blendFunc(i.ONE,i.ONE);break;case Iu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Pu:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case qs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ct:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Iu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Pu:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}v=null,_=null,P=null,T=null,w.set(0,0,0),E=0,p=V,y=xt}return}ve=ve||me,xe=xe||J,We=We||te,(me!==m||ve!==b)&&(i.blendEquationSeparate(ue[me],ue[ve]),m=me,b=ve),(J!==v||te!==_||xe!==P||We!==T)&&(i.blendFuncSeparate(ze[J],ze[te],ze[xe],ze[We]),v=J,_=te,P=xe,T=We),(Lt.equals(w)===!1||Xt!==E)&&(i.blendColor(Lt.r,Lt.g,Lt.b,Xt),w.copy(Lt),E=Xt),p=V,y=!1}function yt(V,me){V.side===gt?de(i.CULL_FACE):j(i.CULL_FACE);let J=V.side===Zt;me&&(J=!J),et(J),V.blending===qs&&V.transparent===!1?H(Yn):H(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),o.setFunc(V.depthFunc),o.setTest(V.depthTest),o.setMask(V.depthWrite),r.setMask(V.colorWrite);let te=V.stencilWrite;a.setTest(te),te&&(a.setMask(V.stencilWriteMask),a.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),a.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Ge(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?j(i.SAMPLE_ALPHA_TO_COVERAGE):de(i.SAMPLE_ALPHA_TO_COVERAGE)}function et(V){M!==V&&(V?i.frontFace(i.CW):i.frontFace(i.CCW),M=V)}function $e(V){V!==um?(j(i.CULL_FACE),V!==R&&(V===Cu?i.cullFace(i.BACK):V===dm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):de(i.CULL_FACE),R=V}function Ue(V){V!==S&&(L&&i.lineWidth(V),S=V)}function Ge(V,me,J){V?(j(i.POLYGON_OFFSET_FILL),(I!==me||B!==J)&&(i.polygonOffset(me,J),I=me,B=J)):de(i.POLYGON_OFFSET_FILL)}function Ie(V){V?j(i.SCISSOR_TEST):de(i.SCISSOR_TEST)}function N(V){V===void 0&&(V=i.TEXTURE0+z-1),k!==V&&(i.activeTexture(V),k=V)}function A(V,me,J){J===void 0&&(k===null?J=i.TEXTURE0+z-1:J=k);let te=K[J];te===void 0&&(te={type:void 0,texture:void 0},K[J]=te),(te.type!==V||te.texture!==me)&&(k!==J&&(i.activeTexture(J),k=J),i.bindTexture(V,me||pe[V]),te.type=V,te.texture=me)}function X(){let V=K[k];V!==void 0&&V.type!==void 0&&(i.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function ee(){try{i.compressedTexImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function re(){try{i.compressedTexImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Q(){try{i.texSubImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Pe(){try{i.texSubImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ge(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ee(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function st(){try{i.texStorage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ae(){try{i.texStorage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Se(){try{i.texImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Oe(){try{i.texImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Fe(V){Te.equals(V)===!1&&(i.scissor(V.x,V.y,V.z,V.w),Te.copy(V))}function we(V){$.equals(V)===!1&&(i.viewport(V.x,V.y,V.z,V.w),$.copy(V))}function it(V,me){let J=c.get(me);J===void 0&&(J=new WeakMap,c.set(me,J));let te=J.get(V);te===void 0&&(te=i.getUniformBlockIndex(me,V.name),J.set(V,te))}function Ke(V,me){let te=c.get(me).get(V);l.get(me)!==te&&(i.uniformBlockBinding(me,te,V.__bindingPointIndex),l.set(me,te))}function Et(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},k=null,K={},h={},d=new WeakMap,f=[],g=null,x=!1,p=null,m=null,v=null,_=null,b=null,P=null,T=null,w=new ye(0,0,0),E=0,y=!1,M=null,R=null,S=null,I=null,B=null,Te.set(0,0,i.canvas.width,i.canvas.height),$.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:j,disable:de,bindFramebuffer:se,drawBuffers:he,useProgram:oe,setBlending:H,setMaterial:yt,setFlipSided:et,setCullFace:$e,setLineWidth:Ue,setPolygonOffset:Ge,setScissorTest:Ie,activeTexture:N,bindTexture:A,unbindTexture:X,compressedTexImage2D:ee,compressedTexImage3D:re,texImage2D:Se,texImage3D:Oe,updateUBOMapping:it,uniformBlockBinding:Ke,texStorage2D:st,texStorage3D:ae,texSubImage2D:Q,texSubImage3D:Pe,compressedTexSubImage2D:ge,compressedTexSubImage3D:Ee,scissor:Fe,viewport:we,reset:Et}}function wd(i,e,t,n){let s=$y(n);switch(t){case tf:return i*e;case sf:return i*e;case rf:return i*e*2;case sh:return i*e/s.components*s.byteLength;case rh:return i*e/s.components*s.byteLength;case of:return i*e*2/s.components*s.byteLength;case oh:return i*e*2/s.components*s.byteLength;case nf:return i*e*3/s.components*s.byteLength;case En:return i*e*4/s.components*s.byteLength;case ah:return i*e*4/s.components*s.byteLength;case Wo:case Xo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case qo:case Yo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Xl:case Yl:return Math.max(i,16)*Math.max(e,8)/4;case Wl:case ql:return Math.max(i,8)*Math.max(e,8)/2;case Kl:case Zl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case $l:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Jl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case jl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ql:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ec:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case tc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case nc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ic:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case sc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case rc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case oc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ac:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case lc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case cc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case hc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ko:case uc:case dc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case af:case fc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case pc:case mc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function $y(i){switch(i){case pi:case jd:return{byteLength:1,components:1};case Yr:case Qd:case Fn:return{byteLength:2,components:1};case nh:case ih:return{byteLength:2,components:4};case cs:case th:case zn:return{byteLength:4,components:1};case ef:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Jy(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new be,u=new WeakMap,h,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(N,A){return f?new OffscreenCanvas(N,A):Kr("canvas")}function x(N,A,X){let ee=1,re=Ie(N);if((re.width>X||re.height>X)&&(ee=X/Math.max(re.width,re.height)),ee<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){let Q=Math.floor(ee*re.width),Pe=Math.floor(ee*re.height);h===void 0&&(h=g(Q,Pe));let ge=A?g(Q,Pe):h;return ge.width=Q,ge.height=Pe,ge.getContext("2d").drawImage(N,0,0,Q,Pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+Q+"x"+Pe+")."),ge}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),N;return N}function p(N){return N.generateMipmaps}function m(N){i.generateMipmap(N)}function v(N){return N.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?i.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(N,A,X,ee,re=!1){if(N!==null){if(i[N]!==void 0)return i[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let Q=A;if(A===i.RED&&(X===i.FLOAT&&(Q=i.R32F),X===i.HALF_FLOAT&&(Q=i.R16F),X===i.UNSIGNED_BYTE&&(Q=i.R8)),A===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(Q=i.R8UI),X===i.UNSIGNED_SHORT&&(Q=i.R16UI),X===i.UNSIGNED_INT&&(Q=i.R32UI),X===i.BYTE&&(Q=i.R8I),X===i.SHORT&&(Q=i.R16I),X===i.INT&&(Q=i.R32I)),A===i.RG&&(X===i.FLOAT&&(Q=i.RG32F),X===i.HALF_FLOAT&&(Q=i.RG16F),X===i.UNSIGNED_BYTE&&(Q=i.RG8)),A===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(Q=i.RG8UI),X===i.UNSIGNED_SHORT&&(Q=i.RG16UI),X===i.UNSIGNED_INT&&(Q=i.RG32UI),X===i.BYTE&&(Q=i.RG8I),X===i.SHORT&&(Q=i.RG16I),X===i.INT&&(Q=i.RG32I)),A===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),X===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),X===i.UNSIGNED_INT&&(Q=i.RGB32UI),X===i.BYTE&&(Q=i.RGB8I),X===i.SHORT&&(Q=i.RGB16I),X===i.INT&&(Q=i.RGB32I)),A===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),X===i.UNSIGNED_INT&&(Q=i.RGBA32UI),X===i.BYTE&&(Q=i.RGBA8I),X===i.SHORT&&(Q=i.RGBA16I),X===i.INT&&(Q=i.RGBA32I)),A===i.RGB&&X===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),A===i.RGBA){let Pe=re?Ta:Je.getTransfer(ee);X===i.FLOAT&&(Q=i.RGBA32F),X===i.HALF_FLOAT&&(Q=i.RGBA16F),X===i.UNSIGNED_BYTE&&(Q=Pe===pt?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function b(N,A){let X;return N?A===null||A===cs||A===Qs?X=i.DEPTH24_STENCIL8:A===zn?X=i.DEPTH32F_STENCIL8:A===Yr&&(X=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===cs||A===Qs?X=i.DEPTH_COMPONENT24:A===zn?X=i.DEPTH_COMPONENT32F:A===Yr&&(X=i.DEPTH_COMPONENT16),X}function P(N,A){return p(N)===!0||N.isFramebufferTexture&&N.minFilter!==$t&&N.minFilter!==ln?Math.log2(Math.max(A.width,A.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?A.mipmaps.length:1}function T(N){let A=N.target;A.removeEventListener("dispose",T),E(A),A.isVideoTexture&&u.delete(A)}function w(N){let A=N.target;A.removeEventListener("dispose",w),M(A)}function E(N){let A=n.get(N);if(A.__webglInit===void 0)return;let X=N.source,ee=d.get(X);if(ee){let re=ee[A.__cacheKey];re.usedTimes--,re.usedTimes===0&&y(N),Object.keys(ee).length===0&&d.delete(X)}n.remove(N)}function y(N){let A=n.get(N);i.deleteTexture(A.__webglTexture);let X=N.source,ee=d.get(X);delete ee[A.__cacheKey],o.memory.textures--}function M(N){let A=n.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),n.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(A.__webglFramebuffer[ee]))for(let re=0;re<A.__webglFramebuffer[ee].length;re++)i.deleteFramebuffer(A.__webglFramebuffer[ee][re]);else i.deleteFramebuffer(A.__webglFramebuffer[ee]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[ee])}else{if(Array.isArray(A.__webglFramebuffer))for(let ee=0;ee<A.__webglFramebuffer.length;ee++)i.deleteFramebuffer(A.__webglFramebuffer[ee]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let ee=0;ee<A.__webglColorRenderbuffer.length;ee++)A.__webglColorRenderbuffer[ee]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[ee]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}let X=N.textures;for(let ee=0,re=X.length;ee<re;ee++){let Q=n.get(X[ee]);Q.__webglTexture&&(i.deleteTexture(Q.__webglTexture),o.memory.textures--),n.remove(X[ee])}n.remove(N)}let R=0;function S(){R=0}function I(){let N=R;return N>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+s.maxTextures),R+=1,N}function B(N){let A=[];return A.push(N.wrapS),A.push(N.wrapT),A.push(N.wrapR||0),A.push(N.magFilter),A.push(N.minFilter),A.push(N.anisotropy),A.push(N.internalFormat),A.push(N.format),A.push(N.type),A.push(N.generateMipmaps),A.push(N.premultiplyAlpha),A.push(N.flipY),A.push(N.unpackAlignment),A.push(N.colorSpace),A.join()}function z(N,A){let X=n.get(N);if(N.isVideoTexture&&Ue(N),N.isRenderTargetTexture===!1&&N.version>0&&X.__version!==N.version){let ee=N.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(X,N,A);return}}t.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+A)}function L(N,A){let X=n.get(N);if(N.version>0&&X.__version!==N.version){$(X,N,A);return}t.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+A)}function D(N,A){let X=n.get(N);if(N.version>0&&X.__version!==N.version){$(X,N,A);return}t.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+A)}function O(N,A){let X=n.get(N);if(N.version>0&&X.__version!==N.version){ne(X,N,A);return}t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+A)}let k={[cn]:i.REPEAT,[ui]:i.CLAMP_TO_EDGE,[qr]:i.MIRRORED_REPEAT},K={[$t]:i.NEAREST,[eh]:i.NEAREST_MIPMAP_NEAREST,[Vs]:i.NEAREST_MIPMAP_LINEAR,[ln]:i.LINEAR,[Vr]:i.LINEAR_MIPMAP_NEAREST,[qn]:i.LINEAR_MIPMAP_LINEAR},Z={[km]:i.NEVER,[qm]:i.ALWAYS,[Hm]:i.LESS,[hf]:i.LEQUAL,[Vm]:i.EQUAL,[Xm]:i.GEQUAL,[Gm]:i.GREATER,[Wm]:i.NOTEQUAL};function Me(N,A){if(A.type===zn&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===ln||A.magFilter===Vr||A.magFilter===Vs||A.magFilter===qn||A.minFilter===ln||A.minFilter===Vr||A.minFilter===Vs||A.minFilter===qn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(N,i.TEXTURE_WRAP_S,k[A.wrapS]),i.texParameteri(N,i.TEXTURE_WRAP_T,k[A.wrapT]),(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)&&i.texParameteri(N,i.TEXTURE_WRAP_R,k[A.wrapR]),i.texParameteri(N,i.TEXTURE_MAG_FILTER,K[A.magFilter]),i.texParameteri(N,i.TEXTURE_MIN_FILTER,K[A.minFilter]),A.compareFunction&&(i.texParameteri(N,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(N,i.TEXTURE_COMPARE_FUNC,Z[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===$t||A.minFilter!==Vs&&A.minFilter!==qn||A.type===zn&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){let X=e.get("EXT_texture_filter_anisotropic");i.texParameterf(N,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function Te(N,A){let X=!1;N.__webglInit===void 0&&(N.__webglInit=!0,A.addEventListener("dispose",T));let ee=A.source,re=d.get(ee);re===void 0&&(re={},d.set(ee,re));let Q=B(A);if(Q!==N.__cacheKey){re[Q]===void 0&&(re[Q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,X=!0),re[Q].usedTimes++;let Pe=re[N.__cacheKey];Pe!==void 0&&(re[N.__cacheKey].usedTimes--,Pe.usedTimes===0&&y(A)),N.__cacheKey=Q,N.__webglTexture=re[Q].texture}return X}function $(N,A,X){let ee=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ee=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ee=i.TEXTURE_3D);let re=Te(N,A),Q=A.source;t.bindTexture(ee,N.__webglTexture,i.TEXTURE0+X);let Pe=n.get(Q);if(Q.version!==Pe.__version||re===!0){t.activeTexture(i.TEXTURE0+X);let ge=Je.getPrimaries(Je.workingColorSpace),Ee=A.colorSpace===Pi?null:Je.getPrimaries(A.colorSpace),st=A.colorSpace===Pi||ge===Ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,st);let ae=x(A.image,!1,s.maxTextureSize);ae=Ge(A,ae);let Se=r.convert(A.format,A.colorSpace),Oe=r.convert(A.type),Fe=_(A.internalFormat,Se,Oe,A.colorSpace,A.isVideoTexture);Me(ee,A);let we,it=A.mipmaps,Ke=A.isVideoTexture!==!0,Et=Pe.__version===void 0||re===!0,V=Q.dataReady,me=P(A,ae);if(A.isDepthTexture)Fe=b(A.format===er,A.type),Et&&(Ke?t.texStorage2D(i.TEXTURE_2D,1,Fe,ae.width,ae.height):t.texImage2D(i.TEXTURE_2D,0,Fe,ae.width,ae.height,0,Se,Oe,null));else if(A.isDataTexture)if(it.length>0){Ke&&Et&&t.texStorage2D(i.TEXTURE_2D,me,Fe,it[0].width,it[0].height);for(let J=0,te=it.length;J<te;J++)we=it[J],Ke?V&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,we.width,we.height,Se,Oe,we.data):t.texImage2D(i.TEXTURE_2D,J,Fe,we.width,we.height,0,Se,Oe,we.data);A.generateMipmaps=!1}else Ke?(Et&&t.texStorage2D(i.TEXTURE_2D,me,Fe,ae.width,ae.height),V&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ae.width,ae.height,Se,Oe,ae.data)):t.texImage2D(i.TEXTURE_2D,0,Fe,ae.width,ae.height,0,Se,Oe,ae.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Ke&&Et&&t.texStorage3D(i.TEXTURE_2D_ARRAY,me,Fe,it[0].width,it[0].height,ae.depth);for(let J=0,te=it.length;J<te;J++)if(we=it[J],A.format!==En)if(Se!==null)if(Ke){if(V)if(A.layerUpdates.size>0){let ve=wd(we.width,we.height,A.format,A.type);for(let xe of A.layerUpdates){let We=we.data.subarray(xe*ve/we.data.BYTES_PER_ELEMENT,(xe+1)*ve/we.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,xe,we.width,we.height,1,Se,We)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,we.width,we.height,ae.depth,Se,we.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,J,Fe,we.width,we.height,ae.depth,0,we.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ke?V&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,we.width,we.height,ae.depth,Se,Oe,we.data):t.texImage3D(i.TEXTURE_2D_ARRAY,J,Fe,we.width,we.height,ae.depth,0,Se,Oe,we.data)}else{Ke&&Et&&t.texStorage2D(i.TEXTURE_2D,me,Fe,it[0].width,it[0].height);for(let J=0,te=it.length;J<te;J++)we=it[J],A.format!==En?Se!==null?Ke?V&&t.compressedTexSubImage2D(i.TEXTURE_2D,J,0,0,we.width,we.height,Se,we.data):t.compressedTexImage2D(i.TEXTURE_2D,J,Fe,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?V&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,we.width,we.height,Se,Oe,we.data):t.texImage2D(i.TEXTURE_2D,J,Fe,we.width,we.height,0,Se,Oe,we.data)}else if(A.isDataArrayTexture)if(Ke){if(Et&&t.texStorage3D(i.TEXTURE_2D_ARRAY,me,Fe,ae.width,ae.height,ae.depth),V)if(A.layerUpdates.size>0){let J=wd(ae.width,ae.height,A.format,A.type);for(let te of A.layerUpdates){let ve=ae.data.subarray(te*J/ae.data.BYTES_PER_ELEMENT,(te+1)*J/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,te,ae.width,ae.height,1,Se,Oe,ve)}A.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,Se,Oe,ae.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Fe,ae.width,ae.height,ae.depth,0,Se,Oe,ae.data);else if(A.isData3DTexture)Ke?(Et&&t.texStorage3D(i.TEXTURE_3D,me,Fe,ae.width,ae.height,ae.depth),V&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,Se,Oe,ae.data)):t.texImage3D(i.TEXTURE_3D,0,Fe,ae.width,ae.height,ae.depth,0,Se,Oe,ae.data);else if(A.isFramebufferTexture){if(Et)if(Ke)t.texStorage2D(i.TEXTURE_2D,me,Fe,ae.width,ae.height);else{let J=ae.width,te=ae.height;for(let ve=0;ve<me;ve++)t.texImage2D(i.TEXTURE_2D,ve,Fe,J,te,0,Se,Oe,null),J>>=1,te>>=1}}else if(it.length>0){if(Ke&&Et){let J=Ie(it[0]);t.texStorage2D(i.TEXTURE_2D,me,Fe,J.width,J.height)}for(let J=0,te=it.length;J<te;J++)we=it[J],Ke?V&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,Se,Oe,we):t.texImage2D(i.TEXTURE_2D,J,Fe,Se,Oe,we);A.generateMipmaps=!1}else if(Ke){if(Et){let J=Ie(ae);t.texStorage2D(i.TEXTURE_2D,me,Fe,J.width,J.height)}V&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Se,Oe,ae)}else t.texImage2D(i.TEXTURE_2D,0,Fe,Se,Oe,ae);p(A)&&m(ee),Pe.__version=Q.version,A.onUpdate&&A.onUpdate(A)}N.__version=A.version}function ne(N,A,X){if(A.image.length!==6)return;let ee=Te(N,A),re=A.source;t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+X);let Q=n.get(re);if(re.version!==Q.__version||ee===!0){t.activeTexture(i.TEXTURE0+X);let Pe=Je.getPrimaries(Je.workingColorSpace),ge=A.colorSpace===Pi?null:Je.getPrimaries(A.colorSpace),Ee=A.colorSpace===Pi||Pe===ge?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let st=A.isCompressedTexture||A.image[0].isCompressedTexture,ae=A.image[0]&&A.image[0].isDataTexture,Se=[];for(let te=0;te<6;te++)!st&&!ae?Se[te]=x(A.image[te],!0,s.maxCubemapSize):Se[te]=ae?A.image[te].image:A.image[te],Se[te]=Ge(A,Se[te]);let Oe=Se[0],Fe=r.convert(A.format,A.colorSpace),we=r.convert(A.type),it=_(A.internalFormat,Fe,we,A.colorSpace),Ke=A.isVideoTexture!==!0,Et=Q.__version===void 0||ee===!0,V=re.dataReady,me=P(A,Oe);Me(i.TEXTURE_CUBE_MAP,A);let J;if(st){Ke&&Et&&t.texStorage2D(i.TEXTURE_CUBE_MAP,me,it,Oe.width,Oe.height);for(let te=0;te<6;te++){J=Se[te].mipmaps;for(let ve=0;ve<J.length;ve++){let xe=J[ve];A.format!==En?Fe!==null?Ke?V&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,ve,0,0,xe.width,xe.height,Fe,xe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,ve,it,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ke?V&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,ve,0,0,xe.width,xe.height,Fe,we,xe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,ve,it,xe.width,xe.height,0,Fe,we,xe.data)}}}else{if(J=A.mipmaps,Ke&&Et){J.length>0&&me++;let te=Ie(Se[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,me,it,te.width,te.height)}for(let te=0;te<6;te++)if(ae){Ke?V&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Se[te].width,Se[te].height,Fe,we,Se[te].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,it,Se[te].width,Se[te].height,0,Fe,we,Se[te].data);for(let ve=0;ve<J.length;ve++){let We=J[ve].image[te].image;Ke?V&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,ve+1,0,0,We.width,We.height,Fe,we,We.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,ve+1,it,We.width,We.height,0,Fe,we,We.data)}}else{Ke?V&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Fe,we,Se[te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,it,Fe,we,Se[te]);for(let ve=0;ve<J.length;ve++){let xe=J[ve];Ke?V&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,ve+1,0,0,Fe,we,xe.image[te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,ve+1,it,Fe,we,xe.image[te])}}}p(A)&&m(i.TEXTURE_CUBE_MAP),Q.__version=re.version,A.onUpdate&&A.onUpdate(A)}N.__version=A.version}function pe(N,A,X,ee,re,Q){let Pe=r.convert(X.format,X.colorSpace),ge=r.convert(X.type),Ee=_(X.internalFormat,Pe,ge,X.colorSpace),st=n.get(A),ae=n.get(X);if(ae.__renderTarget=A,!st.__hasExternalTextures){let Se=Math.max(1,A.width>>Q),Oe=Math.max(1,A.height>>Q);re===i.TEXTURE_3D||re===i.TEXTURE_2D_ARRAY?t.texImage3D(re,Q,Ee,Se,Oe,A.depth,0,Pe,ge,null):t.texImage2D(re,Q,Ee,Se,Oe,0,Pe,ge,null)}t.bindFramebuffer(i.FRAMEBUFFER,N),$e(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,re,ae.__webglTexture,0,et(A)):(re===i.TEXTURE_2D||re>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ee,re,ae.__webglTexture,Q),t.bindFramebuffer(i.FRAMEBUFFER,null)}function j(N,A,X){if(i.bindRenderbuffer(i.RENDERBUFFER,N),A.depthBuffer){let ee=A.depthTexture,re=ee&&ee.isDepthTexture?ee.type:null,Q=b(A.stencilBuffer,re),Pe=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=et(A);$e(A)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ge,Q,A.width,A.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,ge,Q,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,Q,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Pe,i.RENDERBUFFER,N)}else{let ee=A.textures;for(let re=0;re<ee.length;re++){let Q=ee[re],Pe=r.convert(Q.format,Q.colorSpace),ge=r.convert(Q.type),Ee=_(Q.internalFormat,Pe,ge,Q.colorSpace),st=et(A);X&&$e(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,st,Ee,A.width,A.height):$e(A)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,st,Ee,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,Ee,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function de(N,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,N),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let ee=n.get(A.depthTexture);ee.__renderTarget=A,(!ee.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),z(A.depthTexture,0);let re=ee.__webglTexture,Q=et(A);if(A.depthTexture.format===Ys)$e(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,re,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,re,0);else if(A.depthTexture.format===er)$e(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,re,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function se(N){let A=n.get(N),X=N.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==N.depthTexture){let ee=N.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),ee){let re=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,ee.removeEventListener("dispose",re)};ee.addEventListener("dispose",re),A.__depthDisposeCallback=re}A.__boundDepthTexture=ee}if(N.depthTexture&&!A.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");de(A.__webglFramebuffer,N)}else if(X){A.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[ee]),A.__webglDepthbuffer[ee]===void 0)A.__webglDepthbuffer[ee]=i.createRenderbuffer(),j(A.__webglDepthbuffer[ee],N,!1);else{let re=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=A.__webglDepthbuffer[ee];i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,Q)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=i.createRenderbuffer(),j(A.__webglDepthbuffer,N,!1);else{let ee=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=A.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,re),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,re)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function he(N,A,X){let ee=n.get(N);A!==void 0&&pe(ee.__webglFramebuffer,N,N.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&se(N)}function oe(N){let A=N.texture,X=n.get(N),ee=n.get(A);N.addEventListener("dispose",w);let re=N.textures,Q=N.isWebGLCubeRenderTarget===!0,Pe=re.length>1;if(Pe||(ee.__webglTexture===void 0&&(ee.__webglTexture=i.createTexture()),ee.__version=A.version,o.memory.textures++),Q){X.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(A.mipmaps&&A.mipmaps.length>0){X.__webglFramebuffer[ge]=[];for(let Ee=0;Ee<A.mipmaps.length;Ee++)X.__webglFramebuffer[ge][Ee]=i.createFramebuffer()}else X.__webglFramebuffer[ge]=i.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){X.__webglFramebuffer=[];for(let ge=0;ge<A.mipmaps.length;ge++)X.__webglFramebuffer[ge]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(Pe)for(let ge=0,Ee=re.length;ge<Ee;ge++){let st=n.get(re[ge]);st.__webglTexture===void 0&&(st.__webglTexture=i.createTexture(),o.memory.textures++)}if(N.samples>0&&$e(N)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let ge=0;ge<re.length;ge++){let Ee=re[ge];X.__webglColorRenderbuffer[ge]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[ge]);let st=r.convert(Ee.format,Ee.colorSpace),ae=r.convert(Ee.type),Se=_(Ee.internalFormat,st,ae,Ee.colorSpace,N.isXRRenderTarget===!0),Oe=et(N);i.renderbufferStorageMultisample(i.RENDERBUFFER,Oe,Se,N.width,N.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,X.__webglColorRenderbuffer[ge])}i.bindRenderbuffer(i.RENDERBUFFER,null),N.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),j(X.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Q){t.bindTexture(i.TEXTURE_CUBE_MAP,ee.__webglTexture),Me(i.TEXTURE_CUBE_MAP,A);for(let ge=0;ge<6;ge++)if(A.mipmaps&&A.mipmaps.length>0)for(let Ee=0;Ee<A.mipmaps.length;Ee++)pe(X.__webglFramebuffer[ge][Ee],N,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ee);else pe(X.__webglFramebuffer[ge],N,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);p(A)&&m(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let ge=0,Ee=re.length;ge<Ee;ge++){let st=re[ge],ae=n.get(st);t.bindTexture(i.TEXTURE_2D,ae.__webglTexture),Me(i.TEXTURE_2D,st),pe(X.__webglFramebuffer,N,st,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,0),p(st)&&m(i.TEXTURE_2D)}t.unbindTexture()}else{let ge=i.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(ge=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ge,ee.__webglTexture),Me(ge,A),A.mipmaps&&A.mipmaps.length>0)for(let Ee=0;Ee<A.mipmaps.length;Ee++)pe(X.__webglFramebuffer[Ee],N,A,i.COLOR_ATTACHMENT0,ge,Ee);else pe(X.__webglFramebuffer,N,A,i.COLOR_ATTACHMENT0,ge,0);p(A)&&m(ge),t.unbindTexture()}N.depthBuffer&&se(N)}function ue(N){let A=N.textures;for(let X=0,ee=A.length;X<ee;X++){let re=A[X];if(p(re)){let Q=v(N),Pe=n.get(re).__webglTexture;t.bindTexture(Q,Pe),m(Q),t.unbindTexture()}}}let ze=[],H=[];function yt(N){if(N.samples>0){if($e(N)===!1){let A=N.textures,X=N.width,ee=N.height,re=i.COLOR_BUFFER_BIT,Q=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pe=n.get(N),ge=A.length>1;if(ge)for(let Ee=0;Ee<A.length;Ee++)t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let Ee=0;Ee<A.length;Ee++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(re|=i.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(re|=i.STENCIL_BUFFER_BIT)),ge){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Pe.__webglColorRenderbuffer[Ee]);let st=n.get(A[Ee]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,st,0)}i.blitFramebuffer(0,0,X,ee,0,0,X,ee,re,i.NEAREST),l===!0&&(ze.length=0,H.length=0,ze.push(i.COLOR_ATTACHMENT0+Ee),N.depthBuffer&&N.resolveDepthBuffer===!1&&(ze.push(Q),H.push(Q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,H)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ze))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ge)for(let Ee=0;Ee<A.length;Ee++){t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,Pe.__webglColorRenderbuffer[Ee]);let st=n.get(A[Ee]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,st,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&l){let A=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function et(N){return Math.min(s.maxSamples,N.samples)}function $e(N){let A=n.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Ue(N){let A=o.render.frame;u.get(N)!==A&&(u.set(N,A),N.update())}function Ge(N,A){let X=N.colorSpace,ee=N.format,re=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||X!==jt&&X!==Pi&&(Je.getTransfer(X)===pt?(ee!==En||re!==pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),A}function Ie(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=S,this.setTexture2D=z,this.setTexture2DArray=L,this.setTexture3D=D,this.setTextureCube=O,this.rebindTextures=he,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=ue,this.updateMultisampleRenderTarget=yt,this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=$e}function jy(i,e){function t(n,s=Pi){let r,o=Je.getTransfer(s);if(n===pi)return i.UNSIGNED_BYTE;if(n===nh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ih)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ef)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===jd)return i.BYTE;if(n===Qd)return i.SHORT;if(n===Yr)return i.UNSIGNED_SHORT;if(n===th)return i.INT;if(n===cs)return i.UNSIGNED_INT;if(n===zn)return i.FLOAT;if(n===Fn)return i.HALF_FLOAT;if(n===tf)return i.ALPHA;if(n===nf)return i.RGB;if(n===En)return i.RGBA;if(n===sf)return i.LUMINANCE;if(n===rf)return i.LUMINANCE_ALPHA;if(n===Ys)return i.DEPTH_COMPONENT;if(n===er)return i.DEPTH_STENCIL;if(n===sh)return i.RED;if(n===rh)return i.RED_INTEGER;if(n===of)return i.RG;if(n===oh)return i.RG_INTEGER;if(n===ah)return i.RGBA_INTEGER;if(n===Wo||n===Xo||n===qo||n===Yo)if(o===pt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Wo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Xo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===qo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Yo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Wo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Xo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===qo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Yo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Wl||n===Xl||n===ql||n===Yl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Wl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Xl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ql)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Yl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Kl||n===Zl||n===$l)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Kl||n===Zl)return o===pt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===$l)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Jl||n===jl||n===Ql||n===ec||n===tc||n===nc||n===ic||n===sc||n===rc||n===oc||n===ac||n===lc||n===cc||n===hc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Jl)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===jl)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ql)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ec)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===tc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===nc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ic)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===sc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===rc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===oc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ac)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===lc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===cc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===hc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ko||n===uc||n===dc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ko)return o===pt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===uc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===dc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===af||n===fc||n===pc||n===mc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ko)return r.COMPRESSED_RED_RGTC1_EXT;if(n===fc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===pc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===mc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Qs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Ic=class extends zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Ne=class extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}},Qy={type:"move"},Xr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ne,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ne,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ne,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let p=t.getJointPose(x,n),m=this._getHandJoint(c,x);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Qy)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ne;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},ev=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tv=`
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

}`,Pc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new Ht,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Ct({vertexShader:ev,fragmentShader:tv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new le(new Sn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Lc=class extends mi{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,g=null,x=new Pc,p=t.getContextAttributes(),m=null,v=null,_=[],b=[],P=new be,T=null,w=new zt;w.viewport=new lt;let E=new zt;E.viewport=new lt;let y=[w,E],M=new Ic,R=null,S=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ne=_[$];return ne===void 0&&(ne=new Xr,_[$]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function($){let ne=_[$];return ne===void 0&&(ne=new Xr,_[$]=ne),ne.getGripSpace()},this.getHand=function($){let ne=_[$];return ne===void 0&&(ne=new Xr,_[$]=ne),ne.getHandSpace()};function I($){let ne=b.indexOf($.inputSource);if(ne===-1)return;let pe=_[ne];pe!==void 0&&(pe.update($.inputSource,$.frame,c||o),pe.dispatchEvent({type:$.type,data:$.inputSource}))}function B(){s.removeEventListener("select",I),s.removeEventListener("selectstart",I),s.removeEventListener("selectend",I),s.removeEventListener("squeeze",I),s.removeEventListener("squeezestart",I),s.removeEventListener("squeezeend",I),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",z);for(let $=0;$<_.length;$++){let ne=b[$];ne!==null&&(b[$]=null,_[$].disconnect(ne))}R=null,S=null,x.reset(),e.setRenderTarget(m),f=null,d=null,h=null,s=null,v=null,Te.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",I),s.addEventListener("selectstart",I),s.addEventListener("selectend",I),s.addEventListener("squeeze",I),s.addEventListener("squeezestart",I),s.addEventListener("squeezeend",I),s.addEventListener("end",B),s.addEventListener("inputsourceschange",z),p.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(P),s.renderState.layers===void 0){let ne={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ne),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new tn(f.framebufferWidth,f.framebufferHeight,{format:En,type:pi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let ne=null,pe=null,j=null;p.depth&&(j=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=p.stencil?er:Ys,pe=p.stencil?Qs:cs);let de={colorFormat:t.RGBA8,depthFormat:j,scaleFactor:r};h=new XRWebGLBinding(s,t),d=h.createProjectionLayer(de),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new tn(d.textureWidth,d.textureHeight,{format:En,type:pi,depthTexture:new ia(d.textureWidth,d.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Te.setContext(s),Te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function z($){for(let ne=0;ne<$.removed.length;ne++){let pe=$.removed[ne],j=b.indexOf(pe);j>=0&&(b[j]=null,_[j].disconnect(pe))}for(let ne=0;ne<$.added.length;ne++){let pe=$.added[ne],j=b.indexOf(pe);if(j===-1){for(let se=0;se<_.length;se++)if(se>=b.length){b.push(pe),j=se;break}else if(b[se]===null){b[se]=pe,j=se;break}if(j===-1)break}let de=_[j];de&&de.connect(pe)}}let L=new U,D=new U;function O($,ne,pe){L.setFromMatrixPosition(ne.matrixWorld),D.setFromMatrixPosition(pe.matrixWorld);let j=L.distanceTo(D),de=ne.projectionMatrix.elements,se=pe.projectionMatrix.elements,he=de[14]/(de[10]-1),oe=de[14]/(de[10]+1),ue=(de[9]+1)/de[5],ze=(de[9]-1)/de[5],H=(de[8]-1)/de[0],yt=(se[8]+1)/se[0],et=he*H,$e=he*yt,Ue=j/(-H+yt),Ge=Ue*-H;if(ne.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Ge),$.translateZ(Ue),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),de[10]===-1)$.projectionMatrix.copy(ne.projectionMatrix),$.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{let Ie=he+Ue,N=oe+Ue,A=et-Ge,X=$e+(j-Ge),ee=ue*oe/N*Ie,re=ze*oe/N*Ie;$.projectionMatrix.makePerspective(A,X,ee,re,Ie,N),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function k($,ne){ne===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ne.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let ne=$.near,pe=$.far;x.texture!==null&&(x.depthNear>0&&(ne=x.depthNear),x.depthFar>0&&(pe=x.depthFar)),M.near=E.near=w.near=ne,M.far=E.far=w.far=pe,(R!==M.near||S!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),R=M.near,S=M.far),w.layers.mask=$.layers.mask|2,E.layers.mask=$.layers.mask|4,M.layers.mask=w.layers.mask|E.layers.mask;let j=$.parent,de=M.cameras;k(M,j);for(let se=0;se<de.length;se++)k(de[se],j);de.length===2?O(M,w,E):M.projectionMatrix.copy(w.projectionMatrix),K($,M,j)};function K($,ne,pe){pe===null?$.matrix.copy(ne.matrixWorld):($.matrix.copy(pe.matrixWorld),$.matrix.invert(),$.matrix.multiply(ne.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ne.projectionMatrix),$.projectionMatrixInverse.copy(ne.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=ir*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let Z=null;function Me($,ne){if(u=ne.getViewerPose(c||o),g=ne,u!==null){let pe=u.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let j=!1;pe.length!==M.cameras.length&&(M.cameras.length=0,j=!0);for(let se=0;se<pe.length;se++){let he=pe[se],oe=null;if(f!==null)oe=f.getViewport(he);else{let ze=h.getViewSubImage(d,he);oe=ze.viewport,se===0&&(e.setRenderTargetTextures(v,ze.colorTexture,d.ignoreDepthValues?void 0:ze.depthStencilTexture),e.setRenderTarget(v))}let ue=y[se];ue===void 0&&(ue=new zt,ue.layers.enable(se),ue.viewport=new lt,y[se]=ue),ue.matrix.fromArray(he.transform.matrix),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.projectionMatrix.fromArray(he.projectionMatrix),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert(),ue.viewport.set(oe.x,oe.y,oe.width,oe.height),se===0&&(M.matrix.copy(ue.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),j===!0&&M.cameras.push(ue)}let de=s.enabledFeatures;if(de&&de.includes("depth-sensing")){let se=h.getDepthInformation(pe[0]);se&&se.isValid&&se.texture&&x.init(e,se,s.renderState)}}for(let pe=0;pe<_.length;pe++){let j=b[pe],de=_[pe];j!==null&&de!==void 0&&de.update(j,ne,c||o)}Z&&Z($,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),g=null}let Te=new mf;Te.setAnimationLoop(Me),this.setAnimationLoop=function($){Z=$},this.dispose=function(){}}},rs=new Zn,nv=new Be;function iv(i,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,pf(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,v,_,b){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),h(p,m)):m.isMeshPhongMaterial?(r(p,m),u(p,m)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,b)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),x(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,v,_):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Zt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Zt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let v=e.get(m),_=v.envMap,b=v.envMapRotation;_&&(p.envMap.value=_,rs.copy(b),rs.x*=-1,rs.y*=-1,rs.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(rs.y*=-1,rs.z*=-1),p.envMapRotation.value.setFromMatrix4(nv.makeRotationFromEuler(rs)),p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,v,_){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*v,p.scale.value=_*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,v){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Zt&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function x(p,m){let v=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function sv(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,_){let b=_.program;n.uniformBlockBinding(v,b)}function c(v,_){let b=s[v.id];b===void 0&&(g(v),b=u(v),s[v.id]=b,v.addEventListener("dispose",p));let P=_.program;n.updateUBOMapping(v,P);let T=e.render.frame;r[v.id]!==T&&(d(v),r[v.id]=T)}function u(v){let _=h();v.__bindingPointIndex=_;let b=i.createBuffer(),P=v.__size,T=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,P,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,b),b}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let _=s[v.id],b=v.uniforms,P=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let T=0,w=b.length;T<w;T++){let E=Array.isArray(b[T])?b[T]:[b[T]];for(let y=0,M=E.length;y<M;y++){let R=E[y];if(f(R,T,y,P)===!0){let S=R.__offset,I=Array.isArray(R.value)?R.value:[R.value],B=0;for(let z=0;z<I.length;z++){let L=I[z],D=x(L);typeof L=="number"||typeof L=="boolean"?(R.__data[0]=L,i.bufferSubData(i.UNIFORM_BUFFER,S+B,R.__data)):L.isMatrix3?(R.__data[0]=L.elements[0],R.__data[1]=L.elements[1],R.__data[2]=L.elements[2],R.__data[3]=0,R.__data[4]=L.elements[3],R.__data[5]=L.elements[4],R.__data[6]=L.elements[5],R.__data[7]=0,R.__data[8]=L.elements[6],R.__data[9]=L.elements[7],R.__data[10]=L.elements[8],R.__data[11]=0):(L.toArray(R.__data,B),B+=D.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,S,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,_,b,P){let T=v.value,w=_+"_"+b;if(P[w]===void 0)return typeof T=="number"||typeof T=="boolean"?P[w]=T:P[w]=T.clone(),!0;{let E=P[w];if(typeof T=="number"||typeof T=="boolean"){if(E!==T)return P[w]=T,!0}else if(E.equals(T)===!1)return E.copy(T),!0}return!1}function g(v){let _=v.uniforms,b=0,P=16;for(let w=0,E=_.length;w<E;w++){let y=Array.isArray(_[w])?_[w]:[_[w]];for(let M=0,R=y.length;M<R;M++){let S=y[M],I=Array.isArray(S.value)?S.value:[S.value];for(let B=0,z=I.length;B<z;B++){let L=I[B],D=x(L),O=b%P,k=O%D.boundary,K=O+k;b+=k,K!==0&&P-K<D.storage&&(b+=P-K),S.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=b,b+=D.storage}}}let T=b%P;return T>0&&(b+=P-T),v.__size=b,v.__cache={},this}function x(v){let _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function p(v){let _=v.target;_.removeEventListener("dispose",p);let b=o.indexOf(_.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function m(){for(let v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}var sa=class{constructor(e={}){let{canvas:t=c0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let g=new Uint32Array(4),x=new Int32Array(4),p=null,m=null,v=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=mt,this.toneMapping=Ni,this.toneMappingExposure=1;let b=this,P=!1,T=0,w=0,E=null,y=-1,M=null,R=new lt,S=new lt,I=null,B=new ye(0),z=0,L=t.width,D=t.height,O=1,k=null,K=null,Z=new lt(0,0,L,D),Me=new lt(0,0,L,D),Te=!1,$=new $r,ne=!1,pe=!1,j=new Be,de=new Be,se=new U,he=new lt,oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ue=!1;function ze(){return E===null?O:1}let H=n;function yt(C,G){return t.getContext(C,G)}try{let C={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Yc}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",ve,!1),t.addEventListener("webglcontextcreationerror",xe,!1),H===null){let G="webgl2";if(H=yt(G,C),H===null)throw yt(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let et,$e,Ue,Ge,Ie,N,A,X,ee,re,Q,Pe,ge,Ee,st,ae,Se,Oe,Fe,we,it,Ke,Et,V;function me(){et=new v_(H),et.init(),Ke=new jy(H,et),$e=new p_(H,et,e,Ke),Ue=new Zy(H,et),$e.reverseDepthBuffer&&d&&Ue.buffers.depth.setReversed(!0),Ge=new E_(H),Ie=new zy,N=new Jy(H,et,Ue,Ie,$e,Ke,Ge),A=new g_(b),X=new y_(b),ee=new I0(H),Et=new d_(H,ee),re=new M_(H,ee,Ge,Et),Q=new w_(H,re,ee,Ge),Fe=new S_(H,$e,N),ae=new m_(Ie),Pe=new Uy(b,A,X,et,$e,Et,ae),ge=new iv(b,Ie),Ee=new Fy,st=new Wy(et),Oe=new u_(b,A,X,Ue,Q,f,l),Se=new Yy(b,Q,$e),V=new sv(H,Ge,$e,Ue),we=new f_(H,et,Ge),it=new b_(H,et,Ge),Ge.programs=Pe.programs,b.capabilities=$e,b.extensions=et,b.properties=Ie,b.renderLists=Ee,b.shadowMap=Se,b.state=Ue,b.info=Ge}me();let J=new Lc(b,H);this.xr=J,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let C=et.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=et.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(C){C!==void 0&&(O=C,this.setSize(L,D,!1))},this.getSize=function(C){return C.set(L,D)},this.setSize=function(C,G,q=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}L=C,D=G,t.width=Math.floor(C*O),t.height=Math.floor(G*O),q===!0&&(t.style.width=C+"px",t.style.height=G+"px"),this.setViewport(0,0,C,G)},this.getDrawingBufferSize=function(C){return C.set(L*O,D*O).floor()},this.setDrawingBufferSize=function(C,G,q){L=C,D=G,O=q,t.width=Math.floor(C*q),t.height=Math.floor(G*q),this.setViewport(0,0,C,G)},this.getCurrentViewport=function(C){return C.copy(R)},this.getViewport=function(C){return C.copy(Z)},this.setViewport=function(C,G,q,Y){C.isVector4?Z.set(C.x,C.y,C.z,C.w):Z.set(C,G,q,Y),Ue.viewport(R.copy(Z).multiplyScalar(O).round())},this.getScissor=function(C){return C.copy(Me)},this.setScissor=function(C,G,q,Y){C.isVector4?Me.set(C.x,C.y,C.z,C.w):Me.set(C,G,q,Y),Ue.scissor(S.copy(Me).multiplyScalar(O).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(C){Ue.setScissorTest(Te=C)},this.setOpaqueSort=function(C){k=C},this.setTransparentSort=function(C){K=C},this.getClearColor=function(C){return C.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor.apply(Oe,arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha.apply(Oe,arguments)},this.clear=function(C=!0,G=!0,q=!0){let Y=0;if(C){let W=!1;if(E!==null){let ce=E.texture.format;W=ce===ah||ce===oh||ce===rh}if(W){let ce=E.texture.type,_e=ce===pi||ce===cs||ce===Yr||ce===Qs||ce===nh||ce===ih,Ae=Oe.getClearColor(),Re=Oe.getClearAlpha(),He=Ae.r,Xe=Ae.g,Ce=Ae.b;_e?(g[0]=He,g[1]=Xe,g[2]=Ce,g[3]=Re,H.clearBufferuiv(H.COLOR,0,g)):(x[0]=He,x[1]=Xe,x[2]=Ce,x[3]=Re,H.clearBufferiv(H.COLOR,0,x))}else Y|=H.COLOR_BUFFER_BIT}G&&(Y|=H.DEPTH_BUFFER_BIT),q&&(Y|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",ve,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),Ee.dispose(),st.dispose(),Ie.dispose(),A.dispose(),X.dispose(),Q.dispose(),Et.dispose(),V.dispose(),Pe.dispose(),J.dispose(),J.removeEventListener("sessionstart",Mu),J.removeEventListener("sessionend",bu),Qi.stop()};function te(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function ve(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;let C=Ge.autoReset,G=Se.enabled,q=Se.autoUpdate,Y=Se.needsUpdate,W=Se.type;me(),Ge.autoReset=C,Se.enabled=G,Se.autoUpdate=q,Se.needsUpdate=Y,Se.type=W}function xe(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function We(C){let G=C.target;G.removeEventListener("dispose",We),Lt(G)}function Lt(C){Xt(C),Ie.remove(C)}function Xt(C){let G=Ie.get(C).programs;G!==void 0&&(G.forEach(function(q){Pe.releaseProgram(q)}),C.isShaderMaterial&&Pe.releaseShaderCache(C))}this.renderBufferDirect=function(C,G,q,Y,W,ce){G===null&&(G=oe);let _e=W.isMesh&&W.matrixWorld.determinant()<0,Ae=lm(C,G,q,Y,W);Ue.setMaterial(Y,_e);let Re=q.index,He=1;if(Y.wireframe===!0){if(Re=re.getWireframeAttribute(q),Re===void 0)return;He=2}let Xe=q.drawRange,Ce=q.attributes.position,rt=Xe.start*He,St=(Xe.start+Xe.count)*He;ce!==null&&(rt=Math.max(rt,ce.start*He),St=Math.min(St,(ce.start+ce.count)*He)),Re!==null?(rt=Math.max(rt,0),St=Math.min(St,Re.count)):Ce!=null&&(rt=Math.max(rt,0),St=Math.min(St,Ce.count));let wt=St-rt;if(wt<0||wt===1/0)return;Et.setup(W,Y,Ae,q,Re);let an,dt=we;if(Re!==null&&(an=ee.get(Re),dt=it,dt.setIndex(an)),W.isMesh)Y.wireframe===!0?(Ue.setLineWidth(Y.wireframeLinewidth*ze()),dt.setMode(H.LINES)):dt.setMode(H.TRIANGLES);else if(W.isLine){let Le=Y.linewidth;Le===void 0&&(Le=1),Ue.setLineWidth(Le*ze()),W.isLineSegments?dt.setMode(H.LINES):W.isLineLoop?dt.setMode(H.LINE_LOOP):dt.setMode(H.LINE_STRIP)}else W.isPoints?dt.setMode(H.POINTS):W.isSprite&&dt.setMode(H.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)dt.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(et.get("WEBGL_multi_draw"))dt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let Le=W._multiDrawStarts,ii=W._multiDrawCounts,ft=W._multiDrawCount,In=Re?ee.get(Re).bytesPerElement:1,bs=Ie.get(Y).currentProgram.getUniforms();for(let fn=0;fn<ft;fn++)bs.setValue(H,"_gl_DrawID",fn),dt.render(Le[fn]/In,ii[fn])}else if(W.isInstancedMesh)dt.renderInstances(rt,wt,W.count);else if(q.isInstancedBufferGeometry){let Le=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,ii=Math.min(q.instanceCount,Le);dt.renderInstances(rt,wt,ii)}else dt.render(rt,wt)};function xt(C,G,q){C.transparent===!0&&C.side===gt&&C.forceSinglePass===!1?(C.side=Zt,C.needsUpdate=!0,fo(C,G,q),C.side=Kn,C.needsUpdate=!0,fo(C,G,q),C.side=gt):fo(C,G,q)}this.compile=function(C,G,q=null){q===null&&(q=C),m=st.get(q),m.init(G),_.push(m),q.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),C!==q&&C.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),m.setupLights();let Y=new Set;return C.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let ce=W.material;if(ce)if(Array.isArray(ce))for(let _e=0;_e<ce.length;_e++){let Ae=ce[_e];xt(Ae,q,W),Y.add(Ae)}else xt(ce,q,W),Y.add(ce)}),_.pop(),m=null,Y},this.compileAsync=function(C,G,q=null){let Y=this.compile(C,G,q);return new Promise(W=>{function ce(){if(Y.forEach(function(_e){Ie.get(_e).currentProgram.isReady()&&Y.delete(_e)}),Y.size===0){W(C);return}setTimeout(ce,10)}et.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let Cn=null;function ni(C){Cn&&Cn(C)}function Mu(){Qi.stop()}function bu(){Qi.start()}let Qi=new mf;Qi.setAnimationLoop(ni),typeof self<"u"&&Qi.setContext(self),this.setAnimationLoop=function(C){Cn=C,J.setAnimationLoop(C),C===null?Qi.stop():Qi.start()},J.addEventListener("sessionstart",Mu),J.addEventListener("sessionend",bu),this.render=function(C,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(G),G=J.getCamera()),C.isScene===!0&&C.onBeforeRender(b,C,G,E),m=st.get(C,_.length),m.init(G),_.push(m),de.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),$.setFromProjectionMatrix(de),pe=this.localClippingEnabled,ne=ae.init(this.clippingPlanes,pe),p=Ee.get(C,v.length),p.init(),v.push(p),J.enabled===!0&&J.isPresenting===!0){let ce=b.xr.getDepthSensingMesh();ce!==null&&Qa(ce,G,-1/0,b.sortObjects)}Qa(C,G,0,b.sortObjects),p.finish(),b.sortObjects===!0&&p.sort(k,K),ue=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,ue&&Oe.addToRenderList(p,C),this.info.render.frame++,ne===!0&&ae.beginShadows();let q=m.state.shadowsArray;Se.render(q,C,G),ne===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset();let Y=p.opaque,W=p.transmissive;if(m.setupLights(),G.isArrayCamera){let ce=G.cameras;if(W.length>0)for(let _e=0,Ae=ce.length;_e<Ae;_e++){let Re=ce[_e];Su(Y,W,C,Re)}ue&&Oe.render(C);for(let _e=0,Ae=ce.length;_e<Ae;_e++){let Re=ce[_e];Eu(p,C,Re,Re.viewport)}}else W.length>0&&Su(Y,W,C,G),ue&&Oe.render(C),Eu(p,C,G);E!==null&&(N.updateMultisampleRenderTarget(E),N.updateRenderTargetMipmap(E)),C.isScene===!0&&C.onAfterRender(b,C,G),Et.resetDefaultState(),y=-1,M=null,_.pop(),_.length>0?(m=_[_.length-1],ne===!0&&ae.setGlobalState(b.clippingPlanes,m.state.camera)):m=null,v.pop(),v.length>0?p=v[v.length-1]:p=null};function Qa(C,G,q,Y){if(C.visible===!1)return;if(C.layers.test(G.layers)){if(C.isGroup)q=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(G);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||$.intersectsSprite(C)){Y&&he.setFromMatrixPosition(C.matrixWorld).applyMatrix4(de);let _e=Q.update(C),Ae=C.material;Ae.visible&&p.push(C,_e,Ae,q,he.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||$.intersectsObject(C))){let _e=Q.update(C),Ae=C.material;if(Y&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),he.copy(C.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),he.copy(_e.boundingSphere.center)),he.applyMatrix4(C.matrixWorld).applyMatrix4(de)),Array.isArray(Ae)){let Re=_e.groups;for(let He=0,Xe=Re.length;He<Xe;He++){let Ce=Re[He],rt=Ae[Ce.materialIndex];rt&&rt.visible&&p.push(C,_e,rt,q,he.z,Ce)}}else Ae.visible&&p.push(C,_e,Ae,q,he.z,null)}}let ce=C.children;for(let _e=0,Ae=ce.length;_e<Ae;_e++)Qa(ce[_e],G,q,Y)}function Eu(C,G,q,Y){let W=C.opaque,ce=C.transmissive,_e=C.transparent;m.setupLightsView(q),ne===!0&&ae.setGlobalState(b.clippingPlanes,q),Y&&Ue.viewport(R.copy(Y)),W.length>0&&uo(W,G,q),ce.length>0&&uo(ce,G,q),_e.length>0&&uo(_e,G,q),Ue.buffers.depth.setTest(!0),Ue.buffers.depth.setMask(!0),Ue.buffers.color.setMask(!0),Ue.setPolygonOffset(!1)}function Su(C,G,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[Y.id]===void 0&&(m.state.transmissionRenderTarget[Y.id]=new tn(1,1,{generateMipmaps:!0,type:et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float")?Fn:pi,minFilter:qn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));let ce=m.state.transmissionRenderTarget[Y.id],_e=Y.viewport||R;ce.setSize(_e.z,_e.w);let Ae=b.getRenderTarget();b.setRenderTarget(ce),b.getClearColor(B),z=b.getClearAlpha(),z<1&&b.setClearColor(16777215,.5),b.clear(),ue&&Oe.render(q);let Re=b.toneMapping;b.toneMapping=Ni;let He=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),m.setupLightsView(Y),ne===!0&&ae.setGlobalState(b.clippingPlanes,Y),uo(C,q,Y),N.updateMultisampleRenderTarget(ce),N.updateRenderTargetMipmap(ce),et.has("WEBGL_multisampled_render_to_texture")===!1){let Xe=!1;for(let Ce=0,rt=G.length;Ce<rt;Ce++){let St=G[Ce],wt=St.object,an=St.geometry,dt=St.material,Le=St.group;if(dt.side===gt&&wt.layers.test(Y.layers)){let ii=dt.side;dt.side=Zt,dt.needsUpdate=!0,wu(wt,q,Y,an,dt,Le),dt.side=ii,dt.needsUpdate=!0,Xe=!0}}Xe===!0&&(N.updateMultisampleRenderTarget(ce),N.updateRenderTargetMipmap(ce))}b.setRenderTarget(Ae),b.setClearColor(B,z),He!==void 0&&(Y.viewport=He),b.toneMapping=Re}function uo(C,G,q){let Y=G.isScene===!0?G.overrideMaterial:null;for(let W=0,ce=C.length;W<ce;W++){let _e=C[W],Ae=_e.object,Re=_e.geometry,He=Y===null?_e.material:Y,Xe=_e.group;Ae.layers.test(q.layers)&&wu(Ae,G,q,Re,He,Xe)}}function wu(C,G,q,Y,W,ce){C.onBeforeRender(b,G,q,Y,W,ce),C.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),W.onBeforeRender(b,G,q,Y,C,ce),W.transparent===!0&&W.side===gt&&W.forceSinglePass===!1?(W.side=Zt,W.needsUpdate=!0,b.renderBufferDirect(q,G,Y,W,C,ce),W.side=Kn,W.needsUpdate=!0,b.renderBufferDirect(q,G,Y,W,C,ce),W.side=gt):b.renderBufferDirect(q,G,Y,W,C,ce),C.onAfterRender(b,G,q,Y,W,ce)}function fo(C,G,q){G.isScene!==!0&&(G=oe);let Y=Ie.get(C),W=m.state.lights,ce=m.state.shadowsArray,_e=W.state.version,Ae=Pe.getParameters(C,W.state,ce,G,q),Re=Pe.getProgramCacheKey(Ae),He=Y.programs;Y.environment=C.isMeshStandardMaterial?G.environment:null,Y.fog=G.fog,Y.envMap=(C.isMeshStandardMaterial?X:A).get(C.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&C.envMap===null?G.environmentRotation:C.envMapRotation,He===void 0&&(C.addEventListener("dispose",We),He=new Map,Y.programs=He);let Xe=He.get(Re);if(Xe!==void 0){if(Y.currentProgram===Xe&&Y.lightsStateVersion===_e)return Au(C,Ae),Xe}else Ae.uniforms=Pe.getUniforms(C),C.onBeforeCompile(Ae,b),Xe=Pe.acquireProgram(Ae,Re),He.set(Re,Xe),Y.uniforms=Ae.uniforms;let Ce=Y.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ce.clippingPlanes=ae.uniform),Au(C,Ae),Y.needsLights=hm(C),Y.lightsStateVersion=_e,Y.needsLights&&(Ce.ambientLightColor.value=W.state.ambient,Ce.lightProbe.value=W.state.probe,Ce.directionalLights.value=W.state.directional,Ce.directionalLightShadows.value=W.state.directionalShadow,Ce.spotLights.value=W.state.spot,Ce.spotLightShadows.value=W.state.spotShadow,Ce.rectAreaLights.value=W.state.rectArea,Ce.ltc_1.value=W.state.rectAreaLTC1,Ce.ltc_2.value=W.state.rectAreaLTC2,Ce.pointLights.value=W.state.point,Ce.pointLightShadows.value=W.state.pointShadow,Ce.hemisphereLights.value=W.state.hemi,Ce.directionalShadowMap.value=W.state.directionalShadowMap,Ce.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ce.spotShadowMap.value=W.state.spotShadowMap,Ce.spotLightMatrix.value=W.state.spotLightMatrix,Ce.spotLightMap.value=W.state.spotLightMap,Ce.pointShadowMap.value=W.state.pointShadowMap,Ce.pointShadowMatrix.value=W.state.pointShadowMatrix),Y.currentProgram=Xe,Y.uniformsList=null,Xe}function Tu(C){if(C.uniformsList===null){let G=C.currentProgram.getUniforms();C.uniformsList=Zs.seqWithValue(G.seq,C.uniforms)}return C.uniformsList}function Au(C,G){let q=Ie.get(C);q.outputColorSpace=G.outputColorSpace,q.batching=G.batching,q.batchingColor=G.batchingColor,q.instancing=G.instancing,q.instancingColor=G.instancingColor,q.instancingMorph=G.instancingMorph,q.skinning=G.skinning,q.morphTargets=G.morphTargets,q.morphNormals=G.morphNormals,q.morphColors=G.morphColors,q.morphTargetsCount=G.morphTargetsCount,q.numClippingPlanes=G.numClippingPlanes,q.numIntersection=G.numClipIntersection,q.vertexAlphas=G.vertexAlphas,q.vertexTangents=G.vertexTangents,q.toneMapping=G.toneMapping}function lm(C,G,q,Y,W){G.isScene!==!0&&(G=oe),N.resetTextureUnits();let ce=G.fog,_e=Y.isMeshStandardMaterial?G.environment:null,Ae=E===null?b.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:jt,Re=(Y.isMeshStandardMaterial?X:A).get(Y.envMap||_e),He=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Xe=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ce=!!q.morphAttributes.position,rt=!!q.morphAttributes.normal,St=!!q.morphAttributes.color,wt=Ni;Y.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(wt=b.toneMapping);let an=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,dt=an!==void 0?an.length:0,Le=Ie.get(Y),ii=m.state.lights;if(ne===!0&&(pe===!0||C!==M)){let Mn=C===M&&Y.id===y;ae.setState(Y,C,Mn)}let ft=!1;Y.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==ii.state.version||Le.outputColorSpace!==Ae||W.isBatchedMesh&&Le.batching===!1||!W.isBatchedMesh&&Le.batching===!0||W.isBatchedMesh&&Le.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Le.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Le.instancing===!1||!W.isInstancedMesh&&Le.instancing===!0||W.isSkinnedMesh&&Le.skinning===!1||!W.isSkinnedMesh&&Le.skinning===!0||W.isInstancedMesh&&Le.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Le.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Le.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Le.instancingMorph===!1&&W.morphTexture!==null||Le.envMap!==Re||Y.fog===!0&&Le.fog!==ce||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==ae.numPlanes||Le.numIntersection!==ae.numIntersection)||Le.vertexAlphas!==He||Le.vertexTangents!==Xe||Le.morphTargets!==Ce||Le.morphNormals!==rt||Le.morphColors!==St||Le.toneMapping!==wt||Le.morphTargetsCount!==dt)&&(ft=!0):(ft=!0,Le.__version=Y.version);let In=Le.currentProgram;ft===!0&&(In=fo(Y,G,W));let bs=!1,fn=!1,Ar=!1,Tt=In.getUniforms(),Wn=Le.uniforms;if(Ue.useProgram(In.program)&&(bs=!0,fn=!0,Ar=!0),Y.id!==y&&(y=Y.id,fn=!0),bs||M!==C){Ue.buffers.depth.getReversed()?(j.copy(C.projectionMatrix),u0(j),d0(j),Tt.setValue(H,"projectionMatrix",j)):Tt.setValue(H,"projectionMatrix",C.projectionMatrix),Tt.setValue(H,"viewMatrix",C.matrixWorldInverse);let Ei=Tt.map.cameraPosition;Ei!==void 0&&Ei.setValue(H,se.setFromMatrixPosition(C.matrixWorld)),$e.logarithmicDepthBuffer&&Tt.setValue(H,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Tt.setValue(H,"isOrthographic",C.isOrthographicCamera===!0),M!==C&&(M=C,fn=!0,Ar=!0)}if(W.isSkinnedMesh){Tt.setOptional(H,W,"bindMatrix"),Tt.setOptional(H,W,"bindMatrixInverse");let Mn=W.skeleton;Mn&&(Mn.boneTexture===null&&Mn.computeBoneTexture(),Tt.setValue(H,"boneTexture",Mn.boneTexture,N))}W.isBatchedMesh&&(Tt.setOptional(H,W,"batchingTexture"),Tt.setValue(H,"batchingTexture",W._matricesTexture,N),Tt.setOptional(H,W,"batchingIdTexture"),Tt.setValue(H,"batchingIdTexture",W._indirectTexture,N),Tt.setOptional(H,W,"batchingColorTexture"),W._colorsTexture!==null&&Tt.setValue(H,"batchingColorTexture",W._colorsTexture,N));let Rr=q.morphAttributes;if((Rr.position!==void 0||Rr.normal!==void 0||Rr.color!==void 0)&&Fe.update(W,q,In),(fn||Le.receiveShadow!==W.receiveShadow)&&(Le.receiveShadow=W.receiveShadow,Tt.setValue(H,"receiveShadow",W.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Wn.envMap.value=Re,Wn.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&G.environment!==null&&(Wn.envMapIntensity.value=G.environmentIntensity),fn&&(Tt.setValue(H,"toneMappingExposure",b.toneMappingExposure),Le.needsLights&&cm(Wn,Ar),ce&&Y.fog===!0&&ge.refreshFogUniforms(Wn,ce),ge.refreshMaterialUniforms(Wn,Y,O,D,m.state.transmissionRenderTarget[C.id]),Zs.upload(H,Tu(Le),Wn,N)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Zs.upload(H,Tu(Le),Wn,N),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Tt.setValue(H,"center",W.center),Tt.setValue(H,"modelViewMatrix",W.modelViewMatrix),Tt.setValue(H,"normalMatrix",W.normalMatrix),Tt.setValue(H,"modelMatrix",W.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){let Mn=Y.uniformsGroups;for(let Ei=0,Si=Mn.length;Ei<Si;Ei++){let Ru=Mn[Ei];V.update(Ru,In),V.bind(Ru,In)}}return In}function cm(C,G){C.ambientLightColor.needsUpdate=G,C.lightProbe.needsUpdate=G,C.directionalLights.needsUpdate=G,C.directionalLightShadows.needsUpdate=G,C.pointLights.needsUpdate=G,C.pointLightShadows.needsUpdate=G,C.spotLights.needsUpdate=G,C.spotLightShadows.needsUpdate=G,C.rectAreaLights.needsUpdate=G,C.hemisphereLights.needsUpdate=G}function hm(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(C,G,q){Ie.get(C.texture).__webglTexture=G,Ie.get(C.depthTexture).__webglTexture=q;let Y=Ie.get(C);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=q===void 0,Y.__autoAllocateDepthBuffer||et.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,G){let q=Ie.get(C);q.__webglFramebuffer=G,q.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(C,G=0,q=0){E=C,T=G,w=q;let Y=!0,W=null,ce=!1,_e=!1;if(C){let Re=Ie.get(C);if(Re.__useDefaultFramebuffer!==void 0)Ue.bindFramebuffer(H.FRAMEBUFFER,null),Y=!1;else if(Re.__webglFramebuffer===void 0)N.setupRenderTarget(C);else if(Re.__hasExternalTextures)N.rebindTextures(C,Ie.get(C.texture).__webglTexture,Ie.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let Ce=C.depthTexture;if(Re.__boundDepthTexture!==Ce){if(Ce!==null&&Ie.has(Ce)&&(C.width!==Ce.image.width||C.height!==Ce.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(C)}}let He=C.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(_e=!0);let Xe=Ie.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Xe[G])?W=Xe[G][q]:W=Xe[G],ce=!0):C.samples>0&&N.useMultisampledRTT(C)===!1?W=Ie.get(C).__webglMultisampledFramebuffer:Array.isArray(Xe)?W=Xe[q]:W=Xe,R.copy(C.viewport),S.copy(C.scissor),I=C.scissorTest}else R.copy(Z).multiplyScalar(O).floor(),S.copy(Me).multiplyScalar(O).floor(),I=Te;if(Ue.bindFramebuffer(H.FRAMEBUFFER,W)&&Y&&Ue.drawBuffers(C,W),Ue.viewport(R),Ue.scissor(S),Ue.setScissorTest(I),ce){let Re=Ie.get(C.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+G,Re.__webglTexture,q)}else if(_e){let Re=Ie.get(C.texture),He=G||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Re.__webglTexture,q||0,He)}y=-1},this.readRenderTargetPixels=function(C,G,q,Y,W,ce,_e){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=Ie.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&_e!==void 0&&(Ae=Ae[_e]),Ae){Ue.bindFramebuffer(H.FRAMEBUFFER,Ae);try{let Re=C.texture,He=Re.format,Xe=Re.type;if(!$e.textureFormatReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$e.textureTypeReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=C.width-Y&&q>=0&&q<=C.height-W&&H.readPixels(G,q,Y,W,Ke.convert(He),Ke.convert(Xe),ce)}finally{let Re=E!==null?Ie.get(E).__webglFramebuffer:null;Ue.bindFramebuffer(H.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(C,G,q,Y,W,ce,_e){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=Ie.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&_e!==void 0&&(Ae=Ae[_e]),Ae){let Re=C.texture,He=Re.format,Xe=Re.type;if(!$e.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$e.textureTypeReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(G>=0&&G<=C.width-Y&&q>=0&&q<=C.height-W){Ue.bindFramebuffer(H.FRAMEBUFFER,Ae);let Ce=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Ce),H.bufferData(H.PIXEL_PACK_BUFFER,ce.byteLength,H.STREAM_READ),H.readPixels(G,q,Y,W,Ke.convert(He),Ke.convert(Xe),0);let rt=E!==null?Ie.get(E).__webglFramebuffer:null;Ue.bindFramebuffer(H.FRAMEBUFFER,rt);let St=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await h0(H,St,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,Ce),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,ce),H.deleteBuffer(Ce),H.deleteSync(St),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,G=null,q=0){C.isTexture!==!0&&(kr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),G=arguments[0]||null,C=arguments[1]);let Y=Math.pow(2,-q),W=Math.floor(C.image.width*Y),ce=Math.floor(C.image.height*Y),_e=G!==null?G.x:0,Ae=G!==null?G.y:0;N.setTexture2D(C,0),H.copyTexSubImage2D(H.TEXTURE_2D,q,0,0,_e,Ae,W,ce),Ue.unbindTexture()},this.copyTextureToTexture=function(C,G,q=null,Y=null,W=0){C.isTexture!==!0&&(kr("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,C=arguments[1],G=arguments[2],W=arguments[3]||0,q=null);let ce,_e,Ae,Re,He,Xe,Ce,rt,St,wt=C.isCompressedTexture?C.mipmaps[W]:C.image;q!==null?(ce=q.max.x-q.min.x,_e=q.max.y-q.min.y,Ae=q.isBox3?q.max.z-q.min.z:1,Re=q.min.x,He=q.min.y,Xe=q.isBox3?q.min.z:0):(ce=wt.width,_e=wt.height,Ae=wt.depth||1,Re=0,He=0,Xe=0),Y!==null?(Ce=Y.x,rt=Y.y,St=Y.z):(Ce=0,rt=0,St=0);let an=Ke.convert(G.format),dt=Ke.convert(G.type),Le;G.isData3DTexture?(N.setTexture3D(G,0),Le=H.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(N.setTexture2DArray(G,0),Le=H.TEXTURE_2D_ARRAY):(N.setTexture2D(G,0),Le=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,G.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,G.unpackAlignment);let ii=H.getParameter(H.UNPACK_ROW_LENGTH),ft=H.getParameter(H.UNPACK_IMAGE_HEIGHT),In=H.getParameter(H.UNPACK_SKIP_PIXELS),bs=H.getParameter(H.UNPACK_SKIP_ROWS),fn=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,wt.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,wt.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Re),H.pixelStorei(H.UNPACK_SKIP_ROWS,He),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Xe);let Ar=C.isDataArrayTexture||C.isData3DTexture,Tt=G.isDataArrayTexture||G.isData3DTexture;if(C.isRenderTargetTexture||C.isDepthTexture){let Wn=Ie.get(C),Rr=Ie.get(G),Mn=Ie.get(Wn.__renderTarget),Ei=Ie.get(Rr.__renderTarget);Ue.bindFramebuffer(H.READ_FRAMEBUFFER,Mn.__webglFramebuffer),Ue.bindFramebuffer(H.DRAW_FRAMEBUFFER,Ei.__webglFramebuffer);for(let Si=0;Si<Ae;Si++)Ar&&H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ie.get(C).__webglTexture,W,Xe+Si),C.isDepthTexture?(Tt&&H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ie.get(G).__webglTexture,W,St+Si),H.blitFramebuffer(Re,He,ce,_e,Ce,rt,ce,_e,H.DEPTH_BUFFER_BIT,H.NEAREST)):Tt?H.copyTexSubImage3D(Le,W,Ce,rt,St+Si,Re,He,ce,_e):H.copyTexSubImage2D(Le,W,Ce,rt,St+Si,Re,He,ce,_e);Ue.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ue.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Tt?C.isDataTexture||C.isData3DTexture?H.texSubImage3D(Le,W,Ce,rt,St,ce,_e,Ae,an,dt,wt.data):G.isCompressedArrayTexture?H.compressedTexSubImage3D(Le,W,Ce,rt,St,ce,_e,Ae,an,wt.data):H.texSubImage3D(Le,W,Ce,rt,St,ce,_e,Ae,an,dt,wt):C.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,W,Ce,rt,ce,_e,an,dt,wt.data):C.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,W,Ce,rt,wt.width,wt.height,an,wt.data):H.texSubImage2D(H.TEXTURE_2D,W,Ce,rt,ce,_e,an,dt,wt);H.pixelStorei(H.UNPACK_ROW_LENGTH,ii),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,ft),H.pixelStorei(H.UNPACK_SKIP_PIXELS,In),H.pixelStorei(H.UNPACK_SKIP_ROWS,bs),H.pixelStorei(H.UNPACK_SKIP_IMAGES,fn),W===0&&G.generateMipmaps&&H.generateMipmap(Le),Ue.unbindTexture()},this.copyTextureToTexture3D=function(C,G,q=null,Y=null,W=0){return C.isTexture!==!0&&(kr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,Y=arguments[1]||null,C=arguments[2],G=arguments[3],W=arguments[4]||0),kr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,G,q,Y,W)},this.initRenderTarget=function(C){Ie.get(C).__webglFramebuffer===void 0&&N.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?N.setTextureCube(C,0):C.isData3DTexture?N.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?N.setTexture2DArray(C,0):N.setTexture2D(C,0),Ue.unbindTexture()},this.resetState=function(){T=0,w=0,E=null,Ue.reset(),Et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}};var ra=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ye(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},oa=class extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zn,this.environmentIntensity=1,this.environmentRotation=new Zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},or=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=gc,this.updateRanges=[],this.version=0,this.uuid=On()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=On()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=On()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Qt=new U,us=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Un(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=_t(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Un(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Un(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Un(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Un(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),s=_t(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),s=_t(s,this.array),r=_t(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new je(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Jr=class extends hn{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Os,Dr=new U,Fs=new U,Bs=new U,ks=new be,Nr=new be,vf=new Be,No=new U,Ur=new U,Uo=new U,Td=new be,Al=new be,Ad=new be,aa=class extends At{constructor(e=new Jr){if(super(),this.isSprite=!0,this.type="Sprite",Os===void 0){Os=new at;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new or(t,5);Os.setIndex([0,1,2,0,2,3]),Os.setAttribute("position",new us(n,3,0,!1)),Os.setAttribute("uv",new us(n,2,3,!1))}this.geometry=Os,this.material=e,this.center=new be(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Fs.setFromMatrixScale(this.matrixWorld),vf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Bs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Fs.multiplyScalar(-Bs.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;zo(No.set(-.5,-.5,0),Bs,o,Fs,s,r),zo(Ur.set(.5,-.5,0),Bs,o,Fs,s,r),zo(Uo.set(.5,.5,0),Bs,o,Fs,s,r),Td.set(0,0),Al.set(1,0),Ad.set(1,1);let a=e.ray.intersectTriangle(No,Ur,Uo,!1,Dr);if(a===null&&(zo(Ur.set(-.5,.5,0),Bs,o,Fs,s,r),Al.set(0,1),a=e.ray.intersectTriangle(No,Uo,Ur,!1,Dr),a===null))return;let l=e.ray.origin.distanceTo(Dr);l<e.near||l>e.far||t.push({distance:l,point:Dr.clone(),uv:Li.getInterpolation(Dr,No,Ur,Uo,Td,Al,Ad,new be),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function zo(i,e,t,n,s,r){ks.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Nr.x=r*ks.x-s*ks.y,Nr.y=s*ks.x+r*ks.y):Nr.copy(ks),i.copy(e),i.x+=Nr.x,i.y+=Nr.y,i.applyMatrix4(vf)}var Rd=new U,Cd=new lt,Id=new lt,rv=new U,Pd=new Be,Oo=new U,Rl=new nn,Ld=new Be,Cl=new hs,ar=class extends le{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Lu,this.bindMatrix=new Be,this.bindMatrixInverse=new Be,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Gt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Oo),this.boundingBox.expandByPoint(Oo)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new nn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Oo),this.boundingSphere.expandByPoint(Oo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Rl.copy(this.boundingSphere),Rl.applyMatrix4(s),e.ray.intersectsSphere(Rl)!==!1&&(Ld.copy(s).invert(),Cl.copy(e.ray).applyMatrix4(Ld),!(this.boundingBox!==null&&Cl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Cl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new lt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Lu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Nm?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Cd.fromBufferAttribute(s.attributes.skinIndex,e),Id.fromBufferAttribute(s.attributes.skinWeight,e),Rd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=Id.getComponent(r);if(o!==0){let a=Cd.getComponent(r);Pd.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(rv.copy(Rd).applyMatrix4(Pd),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},ds=class extends At{constructor(){super(),this.isBone=!0,this.type="Bone"}},la=class extends Ht{constructor(e=null,t=1,n=1,s,r,o,a,l,c=$t,u=$t,h,d){super(null,o,a,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Dd=new Be,ov=new Be,lr=class i{constructor(e=[],t=[]){this.uuid=On(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Be)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Be;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:ov;Dd.multiplyMatrices(a,t[r]),Dd.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new la(t,e,e,En,zn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new ds),this.bones.push(o),this.boneInverses.push(new Be().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},fs=class extends je{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Hs=new Be,Nd=new Be,Fo=[],Ud=new Gt,av=new Be,zr=new le,Or=new nn,zi=class extends le{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new fs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,av)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Gt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Hs),Ud.copy(e.boundingBox).applyMatrix4(Hs),this.boundingBox.union(Ud)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new nn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Hs),Or.copy(e.boundingSphere).applyMatrix4(Hs),this.boundingSphere.union(Or)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(zr.geometry=this.geometry,zr.material=this.material,zr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Or.copy(this.boundingSphere),Or.applyMatrix4(n),e.ray.intersectsSphere(Or)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Hs),Nd.multiplyMatrices(n,Hs),zr.matrixWorld=Nd,zr.raycast(e,Fo);for(let o=0,a=Fo.length;o<a;o++){let l=Fo[o];l.instanceId=r,l.object=this,t.push(l)}Fo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new fs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new la(new Float32Array(s*this.count),s,this.count,sh,zn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var jr=class extends hn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ca=new U,ha=new U,zd=new Be,Fr=new hs,Bo=new nn,Il=new U,Od=new U,cr=class extends At{constructor(e=new at,t=new jr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)ca.fromBufferAttribute(t,s-1),ha.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=ca.distanceTo(ha);e.setAttribute("lineDistance",new tt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Bo.copy(n.boundingSphere),Bo.applyMatrix4(s),Bo.radius+=r,e.ray.intersectsSphere(Bo)===!1)return;zd.copy(s).invert(),Fr.copy(e.ray).applyMatrix4(zd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){let f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=f,p=g-1;x<p;x+=c){let m=u.getX(x),v=u.getX(x+1),_=ko(this,e,Fr,l,m,v);_&&t.push(_)}if(this.isLineLoop){let x=u.getX(g-1),p=u.getX(f),m=ko(this,e,Fr,l,x,p);m&&t.push(m)}}else{let f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let x=f,p=g-1;x<p;x+=c){let m=ko(this,e,Fr,l,x,x+1);m&&t.push(m)}if(this.isLineLoop){let x=ko(this,e,Fr,l,g-1,f);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ko(i,e,t,n,s,r){let o=i.geometry.attributes.position;if(ca.fromBufferAttribute(o,s),ha.fromBufferAttribute(o,r),t.distanceSqToSegment(ca,ha,Il,Od)>n)return;Il.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Il);if(!(l<e.near||l>e.far))return{distance:l,point:Od.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var Fd=new U,Bd=new U,ua=class extends cr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Fd.fromBufferAttribute(t,s),Bd.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Fd.distanceTo(Bd);e.setAttribute("lineDistance",new tt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},da=class extends cr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Oi=class extends hn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},kd=new Be,Dc=new hs,Ho=new nn,Vo=new U,gi=class extends At{constructor(e=new at,t=new Oi){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ho.copy(n.boundingSphere),Ho.applyMatrix4(s),Ho.radius+=r,e.ray.intersectsSphere(Ho)===!1)return;kd.copy(s).invert(),Dc.copy(e.ray).applyMatrix4(kd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,x=f;g<x;g++){let p=c.getX(g);Vo.fromBufferAttribute(h,p),Hd(Vo,p,l,s,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let g=d,x=f;g<x;g++)Vo.fromBufferAttribute(h,g),Hd(Vo,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Hd(i,e,t,n,s,r,o){let a=Dc.distanceSqToPoint(i);if(a<t){let l=new U;Dc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var wn=class extends Ht{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var fa=class i extends at{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new U,u=new be;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){let f=n+h/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[d]/e+1)/2,u.y=(o[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new tt(o,3)),this.setAttribute("normal",new tt(a,3)),this.setAttribute("uv",new tt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},vt=class i extends at{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],d=[],f=[],g=0,x=[],p=n/2,m=0;v(),o===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(u),this.setAttribute("position",new tt(h,3)),this.setAttribute("normal",new tt(d,3)),this.setAttribute("uv",new tt(f,2));function v(){let b=new U,P=new U,T=0,w=(t-e)/n;for(let E=0;E<=r;E++){let y=[],M=E/r,R=M*(t-e)+e;for(let S=0;S<=s;S++){let I=S/s,B=I*l+a,z=Math.sin(B),L=Math.cos(B);P.x=R*z,P.y=-M*n+p,P.z=R*L,h.push(P.x,P.y,P.z),b.set(z,w,L).normalize(),d.push(b.x,b.y,b.z),f.push(I,1-M),y.push(g++)}x.push(y)}for(let E=0;E<s;E++)for(let y=0;y<r;y++){let M=x[y][E],R=x[y+1][E],S=x[y+1][E+1],I=x[y][E+1];(e>0||y!==0)&&(u.push(M,R,I),T+=3),(t>0||y!==r-1)&&(u.push(R,S,I),T+=3)}c.addGroup(m,T,0),m+=T}function _(b){let P=g,T=new be,w=new U,E=0,y=b===!0?e:t,M=b===!0?1:-1;for(let S=1;S<=s;S++)h.push(0,p*M,0),d.push(0,M,0),f.push(.5,.5),g++;let R=g;for(let S=0;S<=s;S++){let B=S/s*l+a,z=Math.cos(B),L=Math.sin(B);w.x=y*L,w.y=p*M,w.z=y*z,h.push(w.x,w.y,w.z),d.push(0,M,0),T.x=z*.5+.5,T.y=L*.5*M+.5,f.push(T.x,T.y),g++}for(let S=0;S<s;S++){let I=P+S,B=R+S;b===!0?u.push(B,B+1,I):u.push(B+1,B,I),E+=3}c.addGroup(m,E,b===!0?1:2),m+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var pa=class i extends at{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),c(n),u(),this.setAttribute("position",new tt(r,3)),this.setAttribute("normal",new tt(r.slice(),3)),this.setAttribute("uv",new tt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let _=new U,b=new U,P=new U;for(let T=0;T<t.length;T+=3)f(t[T+0],_),f(t[T+1],b),f(t[T+2],P),l(_,b,P,v)}function l(v,_,b,P){let T=P+1,w=[];for(let E=0;E<=T;E++){w[E]=[];let y=v.clone().lerp(b,E/T),M=_.clone().lerp(b,E/T),R=T-E;for(let S=0;S<=R;S++)S===0&&E===T?w[E][S]=y:w[E][S]=y.clone().lerp(M,S/R)}for(let E=0;E<T;E++)for(let y=0;y<2*(T-E)-1;y++){let M=Math.floor(y/2);y%2===0?(d(w[E][M+1]),d(w[E+1][M]),d(w[E][M])):(d(w[E][M+1]),d(w[E+1][M+1]),d(w[E+1][M]))}}function c(v){let _=new U;for(let b=0;b<r.length;b+=3)_.x=r[b+0],_.y=r[b+1],_.z=r[b+2],_.normalize().multiplyScalar(v),r[b+0]=_.x,r[b+1]=_.y,r[b+2]=_.z}function u(){let v=new U;for(let _=0;_<r.length;_+=3){v.x=r[_+0],v.y=r[_+1],v.z=r[_+2];let b=p(v)/2/Math.PI+.5,P=m(v)/Math.PI+.5;o.push(b,1-P)}g(),h()}function h(){for(let v=0;v<o.length;v+=6){let _=o[v+0],b=o[v+2],P=o[v+4],T=Math.max(_,b,P),w=Math.min(_,b,P);T>.9&&w<.1&&(_<.2&&(o[v+0]+=1),b<.2&&(o[v+2]+=1),P<.2&&(o[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function f(v,_){let b=v*3;_.x=e[b+0],_.y=e[b+1],_.z=e[b+2]}function g(){let v=new U,_=new U,b=new U,P=new U,T=new be,w=new be,E=new be;for(let y=0,M=0;y<r.length;y+=9,M+=6){v.set(r[y+0],r[y+1],r[y+2]),_.set(r[y+3],r[y+4],r[y+5]),b.set(r[y+6],r[y+7],r[y+8]),T.set(o[M+0],o[M+1]),w.set(o[M+2],o[M+3]),E.set(o[M+4],o[M+5]),P.copy(v).add(_).add(b).divideScalar(3);let R=p(P);x(T,M+0,v,R),x(w,M+2,_,R),x(E,M+4,b,R)}}function x(v,_,b,P){P<0&&v.x===1&&(o[_]=v.x-1),b.x===0&&b.z===0&&(o[_]=P/2/Math.PI+.5)}function p(v){return Math.atan2(v.z,-v.x)}function m(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var ma=class i extends pa{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},hr=class i extends pa{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},sn=class i extends at{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],u=[],h=e,d=(t-e)/s,f=new U,g=new be;for(let x=0;x<=s;x++){for(let p=0;p<=n;p++){let m=r+p/n*o;f.x=h*Math.cos(m),f.y=h*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,u.push(g.x,g.y)}h+=d}for(let x=0;x<s;x++){let p=x*(n+1);for(let m=0;m<n;m++){let v=m+p,_=v,b=v+n+1,P=v+n+2,T=v+1;a.push(_,b,T),a.push(b,P,T)}}this.setIndex(a),this.setAttribute("position",new tt(l,3)),this.setAttribute("normal",new tt(c,3)),this.setAttribute("uv",new tt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Jt=class i extends at{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new U,d=new U,f=[],g=[],x=[],p=[];for(let m=0;m<=n;m++){let v=[],_=m/n,b=0;m===0&&o===0?b=.5/t:m===n&&l===Math.PI&&(b=-.5/t);for(let P=0;P<=t;P++){let T=P/t;h.x=-e*Math.cos(s+T*r)*Math.sin(o+_*a),h.y=e*Math.cos(o+_*a),h.z=e*Math.sin(s+T*r)*Math.sin(o+_*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),p.push(T+b,1-_),v.push(c++)}u.push(v)}for(let m=0;m<n;m++)for(let v=0;v<t;v++){let _=u[m][v+1],b=u[m][v],P=u[m+1][v],T=u[m+1][v+1];(m!==0||o>0)&&f.push(_,b,T),(m!==n-1||l<Math.PI)&&f.push(b,P,T)}this.setIndex(f),this.setAttribute("position",new tt(g,3)),this.setAttribute("normal",new tt(x,3)),this.setAttribute("uv",new tt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var $n=class i extends at{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],u=new U,h=new U,d=new U;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){let x=g/s*r,p=f/n*Math.PI*2;h.x=(e+t*Math.cos(p))*Math.cos(x),h.y=(e+t*Math.cos(p))*Math.sin(x),h.z=t*Math.sin(p),a.push(h.x,h.y,h.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){let x=(s+1)*f+g-1,p=(s+1)*(f-1)+g-1,m=(s+1)*(f-1)+g,v=(s+1)*f+g;o.push(x,p,v),o.push(p,m,v)}this.setIndex(o),this.setAttribute("position",new tt(a,3)),this.setAttribute("normal",new tt(l,3)),this.setAttribute("uv",new tt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var ga=class extends Ct{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}},Ve=class extends hn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cf,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},gn=class extends Ve{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new be(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Kt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ye(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ye(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ye(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function Go(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function lv(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function cv(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Vd(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s}function Mf(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}var Fi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break t}o=t.length;break n}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Nc=class extends Fi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Gs,endingEnd:Gs}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ws:r=e,a=2*t-n;break;case Zo:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ws:o=e,l=2*n-t;break;case Zo:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),x=g*g,p=x*g,m=-d*p+2*d*x-d*g,v=(1+d)*p+(-1.5-2*d)*x+(-.5+d)*g+1,_=(-1-f)*p+(1.5+f)*x+.5*g,b=f*p-f*x;for(let P=0;P!==a;++P)r[P]=m*o[u+P]+v*o[c+P]+_*o[l+P]+b*o[h+P];return r}},xa=class extends Fi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(s-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[c+d]*h+o[l+d]*u;return r}},Uc=class extends Fi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Tn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Go(t,this.TimeBufferType),this.values=Go(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Go(e.times,Array),values:Go(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Uc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new xa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Nc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case tr:t=this.InterpolantFactoryMethodDiscrete;break;case nr:t=this.InterpolantFactoryMethodLinear;break;case el:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return tr;case this.InterpolantFactoryMethodLinear:return nr;case this.InterpolantFactoryMethodSmooth:return el}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&lv(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===el,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{let h=a*n,d=h-n,f=h+n;for(let g=0;g!==n;++g){let x=t[h+g];if(x!==t[d+g]||x!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Tn.prototype.TimeBufferType=Float32Array;Tn.prototype.ValueBufferType=Float32Array;Tn.prototype.DefaultInterpolation=nr;var Bi=class extends Tn{constructor(e,t,n){super(e,t,n)}};Bi.prototype.ValueTypeName="bool";Bi.prototype.ValueBufferType=Array;Bi.prototype.DefaultInterpolation=tr;Bi.prototype.InterpolantFactoryMethodLinear=void 0;Bi.prototype.InterpolantFactoryMethodSmooth=void 0;var _a=class extends Tn{};_a.prototype.ValueTypeName="color";var xi=class extends Tn{};xi.prototype.ValueTypeName="number";var zc=class extends Fi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let u=c+a;c!==u;c+=4)Vt.slerpFlat(r,0,o,c-a,o,c,l);return r}},_i=class extends Tn{InterpolantFactoryMethodLinear(e){return new zc(this.times,this.values,this.getValueSize(),e)}};_i.prototype.ValueTypeName="quaternion";_i.prototype.InterpolantFactoryMethodSmooth=void 0;var ki=class extends Tn{constructor(e,t,n){super(e,t,n)}};ki.prototype.ValueTypeName="string";ki.prototype.ValueBufferType=Array;ki.prototype.DefaultInterpolation=tr;ki.prototype.InterpolantFactoryMethodLinear=void 0;ki.prototype.InterpolantFactoryMethodSmooth=void 0;var yi=class extends Tn{};yi.prototype.ValueTypeName="vector";var Hi=class{constructor(e="",t=-1,n=[],s=hh){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=On(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(uv(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Tn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let u=cv(l);l=Vd(l,1,u),c=Vd(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new xi(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],u=c.name.match(r);if(u&&u.length>1){let h=u[1],d=s[h];d||(s[h]=d=[]),d.push(c)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(h,d,f,g,x){if(f.length!==0){let p=[],m=[];Mf(f,p,m,g),p.length!==0&&x.push(new h(d,p,m))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let h=0;h<c.length;h++){let d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let x=0;x<d[g].morphTargets.length;x++)f[d[g].morphTargets[x]]=-1;for(let x in f){let p=[],m=[];for(let v=0;v!==d[g].morphTargets.length;++v){let _=d[g];p.push(_.time),m.push(_.morphTarget===x?1:0)}s.push(new xi(".morphTargetInfluence["+x+"]",p,m))}l=f.length*o}else{let f=".bones["+t[h].name+"]";n(yi,f+".position",d,"pos",s),n(_i,f+".quaternion",d,"rot",s),n(yi,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function hv(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return xi;case"vector":case"vector2":case"vector3":case"vector4":return yi;case"color":return _a;case"quaternion":return _i;case"bool":case"boolean":return Bi;case"string":return ki}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function uv(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=hv(i.type);if(i.times===void 0){let t=[],n=[];Mf(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var Di={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Oc=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){let f=c[h],g=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}},dv=new Oc,vi=class{constructor(e){this.manager=e!==void 0?e:dv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};vi.DEFAULT_MATERIAL_NAME="__DEFAULT";var ci={},Fc=class extends Error{constructor(e,t){super(e),this.response=t}},Qr=class extends vi{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Di.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ci[e]!==void 0){ci[e].push({onLoad:t,onProgress:n,onError:s});return}ci[e]=[],ci[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=ci[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0,x=0,p=new ReadableStream({start(m){v();function v(){h.read().then(({done:_,value:b})=>{if(_)m.close();else{x+=b.byteLength;let P=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:f});for(let T=0,w=u.length;T<w;T++){let E=u[T];E.onProgress&&E.onProgress(P)}m.enqueue(b),v()}},_=>{m.error(_)})}}});return new Response(p)}else throw new Fc(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{Di.add(e,c);let u=ci[e];delete ci[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{let u=ci[e];if(u===void 0)throw this.manager.itemError(e),c;delete ci[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Bc=class extends vi{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Di.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=Kr("img");function l(){u(),Di.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var ur=class extends vi{constructor(e){super(e)}load(e,t,n,s){let r=new Ht,o=new Bc(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},dr=class extends At{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ye(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},ya=class extends dr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ye(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Pl=new Be,Gd=new U,Wd=new U,eo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new be(512,512),this.map=null,this.mapPass=null,this.matrix=new Be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $r,this._frameExtents=new be(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Gd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Gd),Wd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Wd),t.updateMatrixWorld(),Pl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Pl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},kc=class extends eo{constructor(){super(new zt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=ir*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},va=class extends dr{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new kc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Xd=new Be,Br=new U,Ll=new U,Hc=class extends eo{constructor(){super(new zt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new be(4,2),this._viewportCount=6,this._viewports=[new lt(2,1,1,1),new lt(0,1,1,1),new lt(3,1,1,1),new lt(1,1,1,1),new lt(3,0,1,1),new lt(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Br.setFromMatrixPosition(e.matrixWorld),n.position.copy(Br),Ll.copy(n.position),Ll.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ll),n.updateMatrixWorld(),s.makeTranslation(-Br.x,-Br.y,-Br.z),Xd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xd)}},Jn=class extends dr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Hc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Vc=class extends eo{constructor(){super(new Ui(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},fr=class extends dr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.shadow=new Vc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Vi=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Ma=class extends vi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Di.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Di.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Di.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Di.add(e,l),r.manager.itemStart(e)}};var ba=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=qd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=qd();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function qd(){return performance.now()}var Gc=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let s,r,o;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,s=this.valueSize,r=e*s+s,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==s;++a)n[r+a]=n[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(n,r,0,a,s)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,s=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let l=t*this._origIndex;this._mixBufferRegion(n,s,l,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,s);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,s=n*this._origIndex;e.getValue(t,s);for(let r=n,o=s;r!==o;++r)t[r]=t[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,s,r){if(s>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,s){Vt.slerpFlat(e,t,e,t,e,n,s)}_slerpAdditive(e,t,n,s,r){let o=this._workIndex*r;Vt.multiplyQuaternionsFlat(e,o,e,t,e,n),Vt.slerpFlat(e,t,e,t,e,o,s)}_lerp(e,t,n,s,r){let o=1-s;for(let a=0;a!==r;++a){let l=t+a;e[l]=e[l]*o+e[n+a]*s}}_lerpAdditive(e,t,n,s,r){for(let o=0;o!==r;++o){let a=t+o;e[a]=e[a]+e[n+o]*s}}},fh="\\[\\]\\.:\\/",fv=new RegExp("["+fh+"]","g"),ph="[^"+fh+"]",pv="[^"+fh.replace("\\.","")+"]",mv=/((?:WC+[\/:])*)/.source.replace("WC",ph),gv=/(WCOD+)?/.source.replace("WCOD",pv),xv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ph),_v=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ph),yv=new RegExp("^"+mv+gv+xv+_v+"$"),vv=["material","materials","bones","map"],Wc=class{constructor(e,t,n){let s=n||ot.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ot=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(fv,"")}static parseTrackName(e){let t=yv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);vv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ot.Composite=Wc;ot.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ot.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ot.prototype.GetterByBindingType=[ot.prototype._getValue_direct,ot.prototype._getValue_array,ot.prototype._getValue_arrayElement,ot.prototype._getValue_toArray];ot.prototype.SetterByBindingTypeAndVersioning=[[ot.prototype._setValue_direct,ot.prototype._setValue_direct_setNeedsUpdate,ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_array,ot.prototype._setValue_array_setNeedsUpdate,ot.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_arrayElement,ot.prototype._setValue_arrayElement_setNeedsUpdate,ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_fromArray,ot.prototype._setValue_fromArray_setNeedsUpdate,ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Xc=class{constructor(e,t,n=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=s;let r=t.tracks,o=r.length,a=new Array(o),l={endingStart:Gs,endingEnd:Gs};for(let c=0;c!==o;++c){let u=r[c].createInterpolant(null);a[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=ch,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){let s=this._clip.duration,r=e._clip.duration,o=r/s,a=s/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let s=this._mixer,r=s.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=s._lendControlInterpolant(),this._timeScaleInterpolant=a);let l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,s){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case zm:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulateAdditive(a);break;case hh:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulate(s,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,s=this.time+e,r=this._loopCount,o=n===Um;if(e===0)return r===-1?s:o&&(r&1)===1?t-s:s;if(n===lh){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),s>=t||s<0){let a=Math.floor(s/t);s-=t*a,r+=Math.abs(a);let l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=s;if(o&&(r&1)===1)return t-s}return s}_setEndings(e,t,n){let s=this._interpolantSettings;n?(s.endingStart=Ws,s.endingEnd=Ws):(e?s.endingStart=this.zeroSlopeAtStart?Ws:Gs:s.endingStart=Zo,t?s.endingEnd=this.zeroSlopeAtEnd?Ws:Gs:s.endingEnd=Zo)}_scheduleFading(e,t,n){let s=this._mixer,r=s.time,o=this._weightInterpolant;o===null&&(o=s._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=t,a[1]=r+e,l[1]=n,this}},Mv=new Float32Array(1),ps=class extends mi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let n=e._localRoot||this._root,s=e._clip.tracks,r=s.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName,u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==r;++h){let d=s[h],f=d.name,g=u[f];if(g!==void 0)++g.referenceCount,o[h]=g;else{if(g=o[h],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,f));continue}let x=t&&t._propertyBindings[h].binding.parsedPath;g=new Gc(ot.create(n,f,x),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,f),o[h]=g}a[h].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,n)}let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let s=this._actions,r=this._actionsByClip,o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=s.length,s.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],s=e._cacheIndex;n._cacheIndex=s,t[s]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;let h=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let s=this._bindingsByRootAndName,r=this._bindings,o=s[t];o===void 0&&(o={},s[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,s=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[s],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[s]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new xa(new Float32Array(2),new Float32Array(2),1,Mv),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let s=t||this._root,r=s.uuid,o=typeof e=="string"?Hi.findByName(s,e):e,a=o!==null?o.uuid:e,l=this._actionsByClip[a],c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=hh),l!==void 0){let h=l.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;let u=new Xc(this,o,t,n);return this._bindAction(u,c),this._addInactiveAction(u,a,r),u}existingAction(e,t){let n=t||this._root,s=n.uuid,r=typeof e=="string"?Hi.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[s]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,s=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(s,e,r,o);let a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){let o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){let c=o[a];this._deactivateAction(c);let u=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete s[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(let o in r){let a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var Yd=new Be,Ea=class{constructor(e,t,n=0,s=1/0){this.ray=new hs(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Zr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Yd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Yd),this}intersectObject(e,t=!0,n=[]){return qc(e,this,n,t),n.sort(Kd),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)qc(e[s],this,n,t);return n.sort(Kd),n}};function Kd(i,e){return i.distance-e.distance}function qc(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)qc(r[o],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yc);var Ra={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var xn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},bv=new Ui(-1,1,1,-1,0,1),mh=class extends at{constructor(){super(),this.setAttribute("position",new tt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new tt([0,2,0,0,2,0],2))}},Ev=new mh,Wi=class{constructor(e){this._mesh=new le(Ev,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,bv)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Ca=class extends xn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Ct?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Gi.clone(e.uniforms),this.material=new Ct({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Wi(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var io=class extends xn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Ia=class extends xn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Pa=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new be);this._width=n.width,this._height=n.height,t=new tn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Fn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ca(Ra),this.copyPass.material.blending=Yn,this.clock=new ba}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}io!==void 0&&(o instanceof io?n=!0:o instanceof Ia&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new be);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var La=class extends xn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ye}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var bf={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ye(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var mr=class i extends xn{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new be(e.x,e.y):new be(256,256),this.clearColor=new ye(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new tn(r,o,{type:Fn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new tn(r,o,{type:Fn});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new tn(r,o,{type:Fn});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}let a=bf;this.highPassUniforms=Gi.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ct({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new be(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let u=Ra;this.copyUniforms=Gi.clone(u.uniforms),this.blendMaterial=new Ct({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:ct,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ye,this.oldClearAlpha=1,this.basic=new ke,this.fsQuad=new Wi(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new be(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Ct({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new be(.5,.5)},direction:{value:new be(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new Ct({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};mr.BlurDirectionX=new be(1,0);mr.BlurDirectionY=new be(0,1);var Ef={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Da=class extends xn{constructor(){super();let e=Ef;this.uniforms=Gi.clone(e.uniforms),this.material=new ga({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Wi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Je.getTransfer(this._outputColorSpace)===pt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Zc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===$c?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Jc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===to?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===jc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Qc&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var ie={purple:"#2D1B4E",gold:"#C9A84C",orange:"#E8843C",ink:"#0B0713",cyan:"#4CE0E0",red:"#C43B3B",char:"#B6D02E",violet:"#9b6cff",blue:"#2f6bff",hotred:"#ff2b2b",pink:"#ff7ad9",green:"#3ce08f"},Sf=7.4;var wf=9.6,Tf=8.4,Af=27,Rf=1.4,Cf=1,If=3,gh=21,Pf=.16,xh=.42;var Lf=.24,_n=.46;var Df=2;var Na=3,Mt={single:{name:"ASTROLABE BOLT",col:ie.gold,cd:.13,spd:24,size:.16,dmg:1},scatter:{name:"GIRIH SCATTER",col:ie.cyan,cd:.17,spd:22,size:.14,dmg:1},rapid:{name:"ALGEBRA RIG",col:"#bfe6ff",cd:.06,spd:28,size:.11,dmg:.6},beam:{name:"ASTROLABE BEAM",col:"#ffffff",cd:.24,spd:34,size:.13,dmg:1.6,pierce:!0},flame:{name:"ALCHEMICAL FLAME",col:ie.orange,cd:.11,spd:13,size:.34,dmg:.5,life:.42}},Nf={single:"ASTROLABE LANCE",scatter:"GIRIH RING",rapid:"ALGEBRA SWARM",beam:"ASTROLABE SWEEP",flame:"ALCHEMICAL BLOOM"},Uf=["single","scatter","rapid","beam","flame"],ms=.9,gr=3,_h=[3,3,6],xr=2.5,jn=1.15,yh=14,zf=.07,vh=.22,Of=.5,Xi=100,Ff=20,Bf=34,Mh=1.2,kf=30,Hf=.18,qi=1.15,Vf={grunt:{hp:3,spd:3.7,r:.5,aggro:13,contact:!0},shooter:{hp:5,spd:2.9,r:.5,aggro:15,keep:8,shootCd:1.7,bspd:9,armor:.5,guard:3},flyer:{hp:3,spd:4.6,r:.55,aggro:16,hover:3.3,diveCd:3.6},brute:{hp:16,spd:2.5,r:.95,aggro:12,contact:!0,armor:.65,guard:5}},Gf=3.2,un={off:[0,10.5,9.5],fov:44,lerp:6,near:.5,far:220,bossZoom:1.45},yn={ramparts:{key:"ramparts",name:"THE RAMPARTS",tag:"Moorish coast at dusk \xB7 girih arches \xB7 the book-burning engine at the gate",rail:"COAST \u2192 THE GATE",boss:"engine",accent:ie.gold,sky:["#3a2352","#241542","#0a0618"],fog:"#1a1030",win:"The erasure-engine is scrap. The libraries breathe another day. The knowledge stays UNERASED."},venus:{key:"venus",name:"NEO-VENUS",tag:"terraformed sky-city \xB7 Earth, the Moon, Jupiter & Saturn overhead \xB7 the Censor Array",rail:"SKY-DOCK \u2192 THE ARRAY",boss:"censor",accent:ie.pink,sky:["#150826","#9a4a3c","#c8783a"],fog:"#3a1a3a",win:"The Censor Array is dark. Venus keeps her records. The knowledge stays UNERASED."},archive:{key:"archive",name:"THE ARCHIVE DEEP",tag:"the vault beneath the library \xB7 candle-lit stacks \xB7 the Redactor press",rail:"STACKS \u2192 THE PRESS",boss:"redactor",accent:ie.violet,sky:["#07040c","#0d0716","#05030a"],fog:"#0a0614",win:"The Redactor is jammed mid-stamp. Every page it swallowed comes back. The knowledge stays UNERASED."}},Qn=["ramparts","venus","archive"],Ut={melvinci:{key:"melvinci",queen:!1,name:"MELVINCI",title:"THE KING",skin:"#5f3a20",skinD:"#3e2412",robe:"#241a5e",robeL:"#39299a",robeD:"#150e38",pant:"#181427",hair:"#1a1112",wrapB:ie.gold,aura:ie.cyan,accent:ie.cyan,gem:"#2ee6a8"},kimaya:{key:"kimaya",queen:!0,name:"KI-MAYA",title:"THE QUEEN",skin:"#5f3a20",skinD:"#3e2412",robe:"#0e5c3c",robeL:"#18936a",robeD:"#07321f",pant:"#0d4a32",hair:"#191021",wrapB:ie.gold,aura:ie.green,accent:ie.green,gem:"#ffd76a"}},Wf={engine:{name:"ERASURE-ENGINE",wake:"RAISE THE WARD  [V]",hp:80},censor:{name:"CENSOR ARRAY",wake:"CENSOR ARRAY \u2014 SHOOT THE GAPS",hp:90},redactor:{name:"THE REDACTOR",wake:"THE REDACTOR \u2014 DASH THE SHOCKWAVE",hp:70}},bh=[{key:"SCRIBE",min:0,hint:"Reach 4,000 style for SCHOLAR \u2014 parries, dash kills and blade finishers grow the multiplier."},{key:"SCHOLAR",min:4e3,hint:"Reach 8,000 style for SAGE \u2014 chain parries; three in a row arm the gold cannon."},{key:"SAGE",min:8e3,hint:"Take zero hits in the boss fight for UNERASED."},{key:"UNERASED",min:8e3,hint:"The knowledge stays UNERASED. There is nothing above this.",noHitBoss:!0}],Eh="unerased3d.lb.v1",Sh="unerased3d.codex.v1",Yi={ramparts:[{id:"r1",t:"THE SMUGGLED LIBRARIES",l:"When armed groups took Timbuktu in 2012, librarians led by Abdel Kader Haidara moved roughly 350,000 manuscripts out of the city in footlockers, by road and by river, to Bamako.",s:"Mali, 2012\u20132013"},{id:"r2",t:"AL-QARAWIYYIN",l:"Fatima al-Fihri founded the mosque and teaching centre of al-Qarawiyyin in Fez in 859 CE. It is recognised as the oldest existing, continually operating degree-granting university in the world.",s:"Fez, 859 CE"},{id:"r3",t:"THE BOOK OF OPTICS",l:"Ibn al-Haytham showed that we see because light enters the eye, not because the eye emits rays \u2014 and argued the case by experiment, in a work written around 1011\u20131021.",s:"Kitab al-Manazir"},{id:"r4",t:"AL-JABR",l:"Al-Khwarizmi's treatise of about 820 CE gave algebra its name from al-jabr, the restoring of a broken quantity. His own name, latinised, became the word algorithm.",s:"Baghdad, c. 820 CE"},{id:"r5",t:"AHMAD BABA'S SHELVES",l:"The Timbuktu scholar Ahmad Baba was deported to Marrakesh in 1594 and his library seized. He wrote that among his friends he had owned the smallest collection: sixteen hundred volumes.",s:"Timbuktu, 1594"},{id:"r6",t:"THE ASTROLABE MAKER",l:"Mariam al-Astrulabiyya, working in tenth-century Aleppo, built astrolabes \u2014 the instrument that let a traveller read latitude, hour and star from a disc of brass.",s:"Aleppo, 10th century"}],venus:[{id:"v1",t:"THE LENGTH OF A YEAR",l:"Around 900 CE al-Battani measured the solar year at 365 days, 5 hours, 46 minutes and 24 seconds \u2014 within about two minutes of the modern value.",s:"Al-Raqqa, c. 900 CE"},{id:"v2",t:"NABTA PLAYA",l:"A stone circle in the Nubian desert of southern Egypt, arranged some 7,000 years ago, aligns with the summer solstice \u2014 among the oldest known astronomical constructions.",s:"Nubia, c. 5000 BCE"},{id:"v3",t:"BANNEKER'S ALMANACS",l:"Benjamin Banneker, born free in Maryland in 1731, calculated the ephemerides for almanacs published from 1792, and sent a copy to Thomas Jefferson with a letter against slavery.",s:"Maryland, 1792"},{id:"v4",t:"CHECK THE NUMBERS",l:"Before Friendship 7 flew in 1962, John Glenn asked that Katherine Johnson verify the electronic computer's orbital figures by hand. He would not fly until she had.",s:"NASA, 1962"},{id:"v5",t:"THE GOLDEN RECORD",l:"Both Voyager probes carry a gold-plated disc of greetings in 55 languages and music from across the Earth, including Blind Willie Johnson's Dark Was the Night, Cold Was the Ground.",s:"Launched 1977"},{id:"v6",t:"THE HAKIMI TABLES",l:"Ibn Yunus observed from Cairo for nearly thirty years and left astronomical tables so careful that his eclipse records were still being used a thousand years later.",s:"Cairo, c. 1000 CE"}],archive:[{id:"a1",t:"ALEXANDRIA DID NOT BURN IN A NIGHT",l:"The great library was not ended by one fire. It lost its funding, its scholars were expelled, its city was fought over, and it faded across centuries. Neglect erases more than flame.",s:"Alexandria, 3rd c. BCE \u2013 3rd c. CE"},{id:"a2",t:"THE FIRE THAT SAVED THE BOOKS",l:"When Nineveh fell in 612 BCE the palace burned \u2014 and the blaze baked Ashurbanipal's clay tablets hard. Some 30,000 fragments survived because of the fire that destroyed the building.",s:"Nineveh, 612 BCE"},{id:"a3",t:"THE GARIMA GOSPELS",l:"Two illuminated gospel books kept at the Abba Garima monastery in Ethiopia have been radiocarbon dated to roughly 390\u2013660 CE, making them among the oldest surviving illustrated Christian manuscripts.",s:"Tigray, Ethiopia"},{id:"a4",t:"THE JARS AT QUMRAN",l:"Scrolls hidden in caves above the Dead Sea stayed there for about two thousand years, some sealed in pottery jars, until a shepherd found the first of them in 1947.",s:"Qumran, found 1947"},{id:"a5",t:"READING WAS THE CRIME",l:"Anti-literacy laws in the American South made it a punishable offence to teach an enslaved person to read \u2014 South Carolina from 1740, North Carolina from 1830. People learned anyway, in secret.",s:"United States, 1740\u20131865"},{id:"a6",t:"THE HOUSE OF WISDOM",l:"In ninth-century Baghdad, translators were paid to carry Greek, Persian, Syriac and Sanskrit works into Arabic \u2014 a deliberate, funded effort to keep other people's knowledge alive.",s:"Baghdad, 8th\u20139th century"}]};function Sv(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}var kn=(i,e)=>i+","+e,wv={ramparts:{seed:11,style:"stone",rooms:[{id:"coast",w:10,h:8,kind:"start"},{id:"court",w:14,h:10,dir:"N",foes:[["grunt",2],["shooter",1]],boxes:["scatter"],pillars:!0,terrace:!0},{id:"stair",w:6,h:10,dir:"N",foes:[["grunt",2]]},{id:"plaza",w:16,h:12,dir:"E",foes:[["grunt",3],["shooter",2]],boxes:["beam"],pillars:!0},{id:"wall",w:8,h:6,dir:"N",len:5,foes:[["shooter",2]]},{id:"bastion",w:14,h:12,dir:"N",foes:[["grunt",2],["shooter",1],["brute",1]],boxes:["rapid","power"],pillars:!0,terrace:!0},{id:"approach",w:10,h:10,dir:"W",len:5,foes:[["grunt",2],["shooter",2]],boxes:["flame","power"]},{id:"gate",w:15,h:11,dir:"N",len:5,kind:"boss",terrace:"boss"}]},venus:{seed:23,style:"slab",rooms:[{id:"dock",w:10,h:8,kind:"start"},{id:"pad1",w:12,h:10,dir:"N",len:6,foes:[["grunt",1],["shooter",1],["flyer",1]],boxes:["rapid"]},{id:"span",w:8,h:8,dir:"E",len:7,foes:[["flyer",2]]},{id:"pad2",w:14,h:12,dir:"N",len:6,foes:[["grunt",2],["shooter",2],["flyer",1]],boxes:["scatter","power"],pillars:!0,terrace:!0},{id:"bridge",w:6,h:8,dir:"W",len:8,foes:[["flyer",2]]},{id:"pad3",w:12,h:12,dir:"N",len:6,foes:[["grunt",2],["shooter",2]],boxes:["beam"],terrace:!0},{id:"hangar",w:12,h:10,dir:"N",len:6,foes:[["shooter",2],["flyer",1],["brute",1]],boxes:["flame","power"]},{id:"array",w:16,h:12,dir:"N",len:7,kind:"boss",terrace:"boss"}]},archive:{seed:37,style:"stacks",rooms:[{id:"well",w:10,h:8,kind:"start"},{id:"stack1",w:14,h:12,dir:"N",foes:[["grunt",2],["shooter",1]],boxes:["scatter"],shelves:!0},{id:"aisle",w:6,h:12,dir:"N",foes:[["grunt",2]]},{id:"stack2",w:16,h:12,dir:"W",foes:[["grunt",2],["shooter",2]],boxes:["power"],shelves:!0},{id:"reading",w:12,h:10,dir:"N",foes:[["grunt",3],["shooter",1]],boxes:["beam"],pillars:!0,terrace:!0},{id:"stack3",w:16,h:12,dir:"E",foes:[["grunt",2],["shooter",2]],boxes:["rapid"],shelves:!0},{id:"vault",w:10,h:10,dir:"N",foes:[["grunt",1],["shooter",2],["brute",1]],boxes:["flame","power"],terrace:!0},{id:"press",w:15,h:11,dir:"N",len:5,kind:"boss",terrace:"boss"}]}},Xf=(i,e,t)=>i.x0-t<e.x1&&i.x1+t>e.x0&&i.z0-t<e.z1&&i.z1+t>e.z0,qf=(i,e)=>{for(let t=i.z0;t<i.z1;t++)for(let n=i.x0;n<i.x1;n++)e(n,t)};function Tv(i){let e=[],t=[],n=null;for(let s of i.rooms){let r,o=null;if(!n)r={x0:0,z0:-s.h,x1:s.w,z1:0};else{let l=s.len||4,c=n.rect,u=Math.floor((c.x0+c.x1)/2),h=Math.floor((c.z0+c.z1)/2);if(s.dir==="N"){o={x0:u-1,x1:u+1,z0:c.z0-l,z1:c.z0};let d=u-Math.floor(s.w/2);r={x0:d,x1:d+s.w,z1:o.z0,z0:o.z0-s.h}}else if(s.dir==="E"){o={z0:h-1,z1:h+1,x0:c.x1,x1:c.x1+l};let d=h-Math.floor(s.h/2);r={x0:o.x1,x1:o.x1+s.w,z0:d,z1:d+s.h}}else if(s.dir==="W"){o={z0:h-1,z1:h+1,x1:c.x0,x0:c.x0-l};let d=h-Math.floor(s.h/2);r={x1:o.x0,x0:o.x0-s.w,z0:d,z1:d+s.h}}else throw new Error("room "+s.id+": bad dir "+s.dir)}for(let l of e)if(Xf(r,l.rect,1))throw new Error("room "+s.id+" overlaps "+l.id);for(let l of t)if(Xf(r,l.rect,1)&&l.to!==s.id)throw new Error("room "+s.id+" overlaps corridor into "+l.to);let a={...s,rect:r,doors:[]};if(o){t.push({rect:o,from:n.id,to:s.id,dir:s.dir});let l=s.dir,c=l==="N"?{x:o.x0+1,z:o.z1}:l==="E"?{x:o.x0,z:o.z0+1}:{x:o.x1,z:o.z0+1},u=l==="N"?{x:o.x0+1,z:o.z0}:l==="E"?{x:o.x1,z:o.z0+1}:{x:o.x0,z:o.z0+1};n.doors.push(c),a.doors.push(u)}e.push(a),n=a}return{rooms:e,corrs:t}}function Av(i){let e=[],t=i.rect,n=t.x1-t.x0,s=t.z1-t.z0;if(i.pillars)for(let r of[.25,.75])for(let o of[.25,.75])e.push([t.x0+Math.floor(n*r),t.z0+Math.floor(s*o)]);if(i.shelves){let r=0;for(let o=t.z0+3;o<t.z1-3;o+=3,r++){let a=r%2===0;for(let l=t.x0+2;l<t.x1-2;l++)a&&l<t.x0+5||!a&&l>=t.x1-5||e.push([l,o])}}return e}var Yf=1,Kf=2,Rv=1.4;function Cv(i){let e=i.rect,t=Math.floor((e.x0+e.x1)/2),n=Math.floor((e.z0+e.z1)/2),s=[];if(i.terrace==="boss"){let r=e.x1-e.x0;for(let o of[e.x0+Math.floor(r*.2),e.x1-Math.floor(r*.2)-2])for(let a=0;a<2;a++)for(let l=0;l<2;l++)s.push([o+a,n+l,Rv])}else if(i.terrace)for(let r=-1;r<=0;r++)s.push([t-2,n+r,Yf],[t-1,n+r,Yf],[t,n+r,Kf],[t+1,n+r,Kf]);return s}function Ua(i,e,t,n){return i.doors.some(s=>Math.abs(s.x-e)<n&&Math.abs(s.z-t)<n)}function wh(i){let e=wv[i];if(!e)throw new Error("no level: "+i);let t=Sv(e.seed),{rooms:n,corrs:s}=Tv(e),r=new Set,o=new Set;for(let y of n)qf(y.rect,(M,R)=>r.add(kn(M,R)));for(let y of s)qf(y.rect,(M,R)=>r.add(kn(M,R)));for(let y of n)for(let[M,R]of Av(y)){let S=kn(M,R);r.has(S)&&!Ua(y,M,R,3)&&o.add(S)}for(let y of o)r.delete(y);let a=new Map;for(let y of n)for(let[M,R,S]of Cv(y)){let I=kn(M,R);r.has(I)&&!o.has(I)&&!Ua(y,M,R,3)&&(a.set(I,S),r.delete(I))}let l=new Set;for(let y of r){let[M,R]=y.split(",").map(Number);for(let S=-1;S<=1;S++)for(let I=-1;I<=1;I++){let B=kn(M+I,R+S);!r.has(B)&&!o.has(B)&&!a.has(B)&&l.add(B)}}let c={x0:1/0,z0:1/0,x1:-1/0,z1:-1/0};for(let y of l){let[M,R]=y.split(",").map(Number);c.x0=Math.min(c.x0,M),c.z0=Math.min(c.z0,R),c.x1=Math.max(c.x1,M+1),c.z1=Math.max(c.z1,R+1)}let u=(y,M)=>({x:(y+.5)*2,z:(M+.5)*2}),h=[],d=[],f=[];for(let y of n){let M=y.rect,R=[],S=(z,L)=>z>=M.x0+1&&z<M.x1-1&&L>=M.z0+1&&L<M.z1-1&&r.has(kn(z,L));for(let[z,L]of y.foes||[])for(let D=0;D<L;D++){let O=null;for(let k=0;k<60&&!O;k++){let K=M.x0+1+Math.floor(t()*(M.x1-M.x0-2)),Z=M.z0+1+Math.floor(t()*(M.z1-M.z0-2));!S(K,Z)||Ua(y,K,Z,3)||R.some(Me=>Math.abs(Me[0]-K)<2&&Math.abs(Me[1]-Z)<2)||(O=[K,Z])}O&&(R.push(O),h.push({type:z,...u(O[0],O[1]),room:y.id}))}let I=[[M.x0+1,M.z0+1],[M.x1-2,M.z0+1],[M.x0+1,M.z1-2],[M.x1-2,M.z1-2]].filter(([z,L])=>r.has(kn(z,L))&&!Ua(y,z,L,2));for(let z=I.length-1;z>0;z--){let L=Math.floor(t()*(z+1));[I[z],I[L]]=[I[L],I[z]]}(y.boxes||[]).forEach((z,L)=>{let D=I[L%I.length];D&&d.push({kind:z,...u(D[0],D[1]),room:y.id})});let B=(z,L,D)=>{l.has(kn(z,L))&&f.push({...u(z,L),dir:D})};for(let z=M.x0+1;z<M.x1-1;z+=3)B(z,M.z0-1,"S"),B(z,M.z1,"N");for(let z=M.z0+2;z<M.z1-1;z+=3)B(M.x0-1,z,"E"),B(M.x1,z,"W")}let g=n.find(y=>y.kind==="start"),x=n.find(y=>y.kind==="boss"),p=g.rect,m=x.rect,v=u(Math.floor((p.x0+p.x1)/2),Math.floor((p.z0+p.z1)/2)),_=u(Math.floor((m.x0+m.x1)/2),m.z0+3),b=x.doors[0],P=[];if(b){let y=x.dir,M=y==="E"?-1:y==="W"?1:0,R=y==="N"?1:0;for(let S of[0,1])P.push(y==="N"?[b.x-1+S,b.z+R]:[b.x+M,b.z-1+S])}let T=n.map(y=>({id:y.id,kind:y.kind||"room",rect:y.rect,doors:y.doors,pillars:!!y.pillars,shelves:!!y.shelves,center:u((y.rect.x0+y.rect.x1)/2-.5,(y.rect.z0+y.rect.z1)/2-.5)})),w=new Set;return{key:i,style:e.style,cell:2,rooms:T,corridors:s.map(y=>y.rect),floor:r,walls:l,inner:o,dyn:w,plinths:a,bounds:c,start:v,bossPos:_,bossRect:m,gateCells:P,foes:h,boxes:d,torches:f,solidCell(y,M,R=0){let S=kn(y,M);if(l.has(S)||o.has(S)||w.has(S))return!0;let I=a.get(S);return I!==void 0?R<I-.4:!r.has(S)},heightAt(y,M){return a.get(kn(y,M))||0},roomAt(y,M){let R=Math.floor(y/2),S=Math.floor(M/2);return T.find(I=>R>=I.rect.x0&&R<I.rect.x1&&S>=I.rect.z0&&S<I.rect.z1)||null},sealGate(){for(let[y,M]of P)w.add(kn(y,M))},openGate(){w.clear()}}}function Zf(i,e,t,n,s=0){let r=!1,o=Math.floor((e-n)/2),a=Math.floor((e+n)/2),l=Math.floor((t-n)/2),c=Math.floor((t+n)/2);for(let u=l;u<=c;u++)for(let h=o;h<=a;h++){if(!i.solidCell(h,u,s))continue;let d=h*2,f=d+2,g=u*2,x=g+2,p=Math.max(d,Math.min(e,f)),m=Math.max(g,Math.min(t,x)),v=e-p,_=t-m,b=v*v+_*_;if(!(b>=n*n))if(r=!0,b>1e-8){let P=Math.sqrt(b),T=n-P;e+=v/P*T,t+=_/P*T}else{let P=e-d,T=f-e,w=t-g,E=x-t,y=Math.min(P,T,w,E);y===P?e=d-n:y===T?e=f+n:y===w?t=g-n:t=x+n}}return{x:e,z:t,hit:r}}function _r(i,e,t,n,s,r,o=0){let a=Zf(i,e+s,t,n,o),l=Zf(i,a.x,t+r,n,o);return{x:l.x,z:l.z,hit:a.hit||l.hit}}function so(i,e,t,n,s,r=0){let o=n-e,a=s-t,l=Math.max(1,Math.ceil(Math.hypot(o,a)/(2/2)));for(let c=1;c<=l;c++){let u=c/l;if(i.solidCell(Math.floor((e+o*u)/2),Math.floor((t+a*u)/2),r))return!0}return!1}function $f(i,e,t,n=1/0){let s=i.heightAt(Math.floor(e/2),Math.floor(t/2));return s&&n>=s-.4?s:0}var Iv=8;function Jf(i,e){return{hero:i,world:e,score:0,mult:1,bestMult:1,kills:0,styleKills:0,parries:0,parryChain:0,hits:0,bossHits:0,pages:0,t:0,inBoss:!1}}var Th=i=>Math.max(1,Math.min(Iv,Math.round(i*4)/4));function jf(i,e=!1){let t=Th(i.mult+(e?.25:.05)),n=Math.round((e?150:100)*i.mult);return{...i,score:i.score+n,mult:t,bestMult:Math.max(i.bestMult,t),kills:i.kills+1,styleKills:i.styleKills+(e?1:0)}}function Qf(i){let e=Th(i.mult+.5);return{...i,score:i.score+Math.round(150*i.mult),mult:e,bestMult:Math.max(i.bestMult,e),parries:i.parries+1,parryChain:i.parryChain+1}}function Ah(i){return{...i,score:i.score+300,pages:i.pages+1}}function ep(i,e){return{...i,score:i.score+Math.round(e*10*i.mult)}}function tp(i){return{...i,mult:Th(i.mult/2),parryChain:0,hits:i.hits+1,bossHits:i.bossHits+(i.inBoss?1:0)}}function np(i,e){return{...i,t:i.t+e}}function ip(i){return{...i,inBoss:!0}}function sp(i){return{...i,parryChain:0}}function Rh(i){return i.score>=8e3&&i.bossHits===0?"UNERASED":i.score>=8e3?"SAGE":i.score>=4e3?"SCHOLAR":"SCRIBE"}function rp(i){return(bh.find(e=>e.key===i)||bh[0]).hint}function yr(){try{return globalThis.localStorage||null}catch{return null}}function op(i,e){try{let t=JSON.parse(i.getItem(e)||"{}");return t&&typeof t=="object"?t:{}}catch{return{}}}function ap(i,e,t){try{return i.setItem(e,JSON.stringify(t)),!0}catch{return!1}}function za(i=yr()){return i?op(i,Eh):{}}function lp(i,e=yr()){let t=za(e),n={s:i.score,r:Rh(i),h:i.hero,t:Math.round(i.t),k:i.kills,w:i.parries,d:new Date().toISOString().slice(0,10)},s=[...t[i.world]||[],n].sort((o,a)=>a.s-o.s).slice(0,5),r={...t,[i.world]:s};return e&&ap(e,Eh,r),r}function ro(i,e=yr()){let t=za(e)[i]||[];return t.length?t[0]:null}function Oa(i=yr()){return i?op(i,Sh):{}}function Ch(i,e,t=yr()){let n=Oa(t),s=n[i]||[];if(s.includes(e))return n;let r={...n,[i]:[...s,e]};return t&&ap(t,Sh,r),r}function cp(i,e=yr()){return(Oa(e)[i]||[]).length}function Ih(i,e){let t=Yi[i];return t[Math.min(e,t.length-1)]}function hp(){let i=null,e=null,t=!1;function n(){if(i){i.state==="suspended"&&i.resume();return}let l=window.AudioContext||window.webkitAudioContext;l&&(i=new l,e=i.createGain(),e.gain.value=t?0:.5,e.connect(i.destination))}function s(l,c,u="square",h=.2,d){if(!i||t)return;let f=i.createOscillator(),g=i.createGain(),x=i.currentTime;f.type=u,f.frequency.setValueAtTime(l,x),d&&f.frequency.exponentialRampToValueAtTime(Math.max(20,d),x+c),g.gain.setValueAtTime(h,x),g.gain.exponentialRampToValueAtTime(.001,x+c),f.connect(g),g.connect(e),f.start(x),f.stop(x+c+.02)}function r(l,c=.2,u=400,h=4e3){if(!i||t)return;let d=Math.floor(i.sampleRate*l),f=i.createBuffer(1,d,i.sampleRate),g=f.getChannelData(0);for(let _=0;_<d;_++)g[_]=(Math.random()*2-1)*(1-_/d);let x=i.createBufferSource();x.buffer=f;let p=i.createBiquadFilter();p.type="highpass",p.frequency.value=u;let m=i.createBiquadFilter();m.type="lowpass",m.frequency.value=h;let v=i.createGain();v.gain.value=c,x.connect(p),p.connect(m),m.connect(v),v.connect(e),x.start()}let o={shoot(l){({single:()=>s(880,.07,"square",.12,300),scatter:()=>{s(660,.08,"sawtooth",.1,200),r(.05,.05,1500,5e3)},rapid:()=>s(1400,.04,"square",.08,700),beam:()=>s(1800,.14,"sine",.12,2600),flame:()=>r(.12,.08,200,1800)})[l]?.()},charged(){s(220,.35,"sawtooth",.22,1400),r(.2,.12,300,3e3)},chargeFull(){s(1200,.12,"sine",.1,1800)},blade(l){r(.08,.1,2e3,8e3),s(300+l*120,.09,"sawtooth",.09,900)},bladeHit(){r(.06,.16,800,4e3),s(140,.08,"square",.14,60)},parry(){s(1600,.12,"sine",.2,2400),s(2400,.2,"sine",.12,3200)},ward(){s(500,.1,"sine",.08,900)},shatter(){r(.3,.2,600,6e3),s(900,.3,"sawtooth",.12,120)},dash(){r(.1,.08,800,6e3),s(400,.1,"sine",.08,1200)},hurt(){s(180,.3,"sawtooth",.25,50),r(.2,.15,100,1500)},foeHit(){s(240,.05,"square",.08,120)},foeDie(){r(.15,.15,300,3e3),s(200,.18,"square",.12,40)},crate(){r(.12,.14,500,4e3),s(320,.1,"square",.1,160)},pickup(){[660,880,1320].forEach((l,c)=>setTimeout(()=>s(l,.12,"sine",.14),c*70))},page(){[523,659,784,1047].forEach((l,c)=>setTimeout(()=>s(l,.22,"sine",.12),c*110))},bossHit(){s(120,.08,"square",.1,70)},bossWake(){s(60,.9,"sawtooth",.3,200),r(.6,.2,80,900)},bossDie(){for(let l=0;l<6;l++)setTimeout(()=>{r(.3,.2,200,3e3),s(90,.4,"sawtooth",.2,30)},l*160)},beamTell(){s(1800,.5,"sine",.08,2600)},beamFire(){r(.4,.3,900,200),s(200,.4,"sawtooth",.2,80)},slam(){r(.5,.4,200,40),s(90,.5,"sawtooth",.3,30)},open(){s(900,.15,"sine",.15,1400)},ui(){s(700,.06,"sine",.08,1e3)},step(){r(.03,.03,300,1200)}};function a(){return t=!t,e&&(e.gain.value=t?0:.5),t}return{init:n,beep:s,noise:r,sfx:o,toggleMute:a,get muted(){return t},get ready(){return!!i}}}var up={KeyW:"up",ArrowUp:"up",KeyS:"down",ArrowDown:"down",KeyA:"left",ArrowLeft:"left",KeyD:"right",ArrowRight:"right",Space:"fire",KeyK:"fire",KeyJ:"blade",KeyV:"ward",KeyL:"ward",ShiftLeft:"jump",ShiftRight:"jump",KeyR:"camreset",KeyC:"swap",KeyQ:"swap",KeyP:"pause",Escape:"pause",KeyM:"mute",KeyN:"nexttrack",Enter:"confirm",Digit1:"ab1",Digit2:"ab2",Digit3:"ab3",KeyF:"ult",Numpad1:"ab1",Numpad2:"ab2",Numpad3:"ab3"};function dp(i,e,t,n){let s={sprint:!1,orbit:!1,orbitDX:0,orbitDY:0,zoom:0,jump:!1,up:!1,down:!1,left:!1,right:!1,fire:!1,blade:!1,ward:!1,dash:!1,swap:!1,mx:0,mz:0,aimX:0,aimZ:-1,mouseAim:!1,touch:!1,sx:0,sz:0},r=new Set,o={},a=new Ea,l=new Nn(new U(0,1,0),-.9),c=new be,u=new U,h=0,d=0,f=-1e9,g=0;function x(L){r.add(L)}let p=.85,m=0,v=!1;function _(L){let D=performance.now()/1e3;o[L]&&D-o[L]<Lf?(s.sprint=!0,o[L]=0):o[L]=D}let b=()=>s.up||s.down||s.left||s.right;window.addEventListener("keydown",L=>{let D=up[L.code];D&&(["fire","jump","up","down","left","right"].includes(D)&&L.preventDefault(),!s[D]&&(D==="up"||D==="down"||D==="left"||D==="right")&&(b()||(m=performance.now()/1e3,v=!1),_(D),g=performance.now()),L.repeat||x(D),D in s&&(s[D]=!0))}),window.addEventListener("keyup",L=>{let D=up[L.code];D&&D in s&&(s[D]=!1),b()||(s.sprint=!1,v=!1)}),window.addEventListener("blur",()=>{for(let L of["up","down","left","right","fire","blade","ward","dash"])s[L]=!1}),i.addEventListener("contextmenu",L=>L.preventDefault());let P=-1e9,T=0,w=0;i.addEventListener("mousemove",L=>{h=L.clientX,d=L.clientY,s.orbit?(s.orbitDX+=L.clientX-T,s.orbitDY+=L.clientY-w,T=L.clientX,w=L.clientY):f=performance.now()}),i.addEventListener("wheel",L=>{s.zoom+=Math.sign(L.deltaY),L.preventDefault()},{passive:!1}),i.addEventListener("mousedown",L=>{if(!s.touch){if(L.button===0){let D=performance.now();D-P<320?(s.orbit=!0,s.fire=!1,T=L.clientX,w=L.clientY):(s.fire=!0,x("fire")),P=D}L.button===2&&(s.blade=!0,x("blade"))}}),window.addEventListener("mouseup",L=>{L.button===0&&(s.fire=!1,s.orbit=!1),L.button===2&&(s.blade=!1)});let E=null,y=0,M=0,R=52;function S(L,D){let O=L-y,k=D-M,K=Math.hypot(O,k);K>R&&(O*=R/K,k*=R/K),t.style.transform=`translate(${O}px,${k}px)`;let Z=.18,Me=Math.min(1,Math.hypot(O,k)/R);if(Me<Z){s.sx=0,s.sz=0;return}let Te=(Me-Z)/(1-Z);s.sx=O/R*Te/Me,s.sz=k/R*Te/Me}if(e){e.addEventListener("pointerdown",D=>{s.touch=!0,E=D.pointerId;let O=e.getBoundingClientRect();y=O.left+O.width/2,M=O.top+O.height/2,e.setPointerCapture(D.pointerId),e.classList.add("hit"),S(D.clientX,D.clientY),D.preventDefault()}),e.addEventListener("pointermove",D=>{D.pointerId===E&&S(D.clientX,D.clientY)});let L=D=>{D.pointerId===E&&(E=null,s.sx=0,s.sz=0,t.style.transform="",e.classList.remove("hit"))};e.addEventListener("pointerup",L),e.addEventListener("pointercancel",L)}for(let[L,D]of Object.entries(n||{})){if(!D)continue;D.addEventListener("pointerdown",k=>{s.touch=!0,s[L]=!0,x(L),D.classList.add("hit"),k.preventDefault()});let O=()=>{s[L]=!1,D.classList.remove("hit")};D.addEventListener("pointerup",O),D.addEventListener("pointercancel",O),D.addEventListener("pointerleave",O)}window.addEventListener("touchstart",()=>{s.touch=!0,document.body.classList.add("touch")},{once:!0,passive:!0});function I(L,D,O){let k=(s.right?1:0)-(s.left?1:0),K=(s.down?1:0)-(s.up?1:0);if(L&&(k||K)){let $=D-L.position.x,ne=O-L.position.z,pe=Math.hypot($,ne)||1,j=$/pe,de=ne/pe,se=-de*k+j*-K,he=j*k+de*-K;k=se,K=he}b()&&!v&&performance.now()/1e3-m>p&&(v=!0,x("longdash")),(s.sx||s.sz)&&(k=s.sx,K=s.sz);let Z=Math.hypot(k,K);Z>1&&(k/=Z,K/=Z),s.mx=k,s.mz=K;let Me=performance.now();if(!s.touch&&Me-f<4e3&&f>g-4e3&&L&&(c.set(h/window.innerWidth*2-1,-(d/window.innerHeight)*2+1),a.setFromCamera(c,L),a.ray.intersectPlane(l,u))){let $=u.x-D,ne=u.z-O,pe=Math.hypot($,ne);if(pe>.3){s.aimX=$/pe,s.aimZ=ne/pe,s.mouseAim=!0;return}}s.mouseAim=!1,Z>.05&&(s.aimX=k/Math.max(Z,1e-6),s.aimZ=K/Math.max(Z,1e-6))}function B(L){return r.has(L)?(r.delete(L),!0):!1}function z(){r.clear()}return{IN:s,update:I,pressed:B,clearEdges:z,press:x}}var Ph=new Map;function Lh(i="rgba(255,255,255,1)",e="rgba(255,255,255,0)",t=64){let n="r"+i+e+t;if(Ph.has(n))return Ph.get(n);let s=document.createElement("canvas");s.width=s.height=t;let r=s.getContext("2d"),o=r.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);o.addColorStop(0,i),o.addColorStop(.35,i),o.addColorStop(1,e),r.fillStyle=o,r.fillRect(0,0,t,t);let a=new wn(s);return a.colorSpace=mt,Ph.set(n,a),a}function Pv(){return Lh("rgba(0,0,0,0.55)","rgba(0,0,0,0)",64)}function bt(i,e,t=.9){let n=new Jr({map:Lh(),color:i,transparent:!0,opacity:t,blending:ct,depthWrite:!1}),s=new aa(n);return s.scale.set(e,e,1),s}function Hn(i){let e=new le(new Sn(i*2,i*2),new ke({map:Pv(),transparent:!0,depthWrite:!1}));return e.rotation.x=-Math.PI/2,e.position.y=.03,e.renderOrder=1,e}var gs=900,Lv=40;function fp(i){let e=new Float32Array(gs*3),t=new Float32Array(gs*3),n=new Float32Array(gs),s=new Float32Array(gs),r=new at;r.setAttribute("position",new je(e,3)),r.setAttribute("pcol",new je(t,3)),r.setAttribute("psize",new je(n,1)),r.setAttribute("palpha",new je(s,1));let o=new Ct({transparent:!0,depthWrite:!1,blending:ct,uniforms:{map:{value:Lh()},scaleY:{value:600}},vertexShader:`attribute vec3 pcol; attribute float psize; attribute float palpha; varying vec3 vc; varying float va; uniform float scaleY;
      void main(){ vc=pcol; va=palpha; vec4 mv=modelViewMatrix*vec4(position,1.0); gl_PointSize=psize*scaleY/-mv.z; gl_Position=projectionMatrix*mv; }`,fragmentShader:"uniform sampler2D map; varying vec3 vc; varying float va; void main(){ vec4 t=texture2D(map,gl_PointCoord); gl_FragColor=vec4(vc*t.rgb, t.a*va); }"}),a=new gi(r,o);a.frustumCulled=!1,i.add(a);let l=[],c=new ye;function u(m,v,_,b,P=8,T={}){c.set(b);for(let w=0;w<P&&l.length<gs;w++){let E=Math.random()*Math.PI*2,y=(T.spd||4)*(.4+Math.random()*.8),M=(T.up??3)*(.3+Math.random()*.9);l.push({x:m,y:v,z:_,vx:Math.cos(E)*y,vy:M,vz:Math.sin(E)*y,life:T.life||.6,t:0,r:c.r,g:c.g,b:c.b,size:T.size||.5,grav:T.grav??9,drag:T.drag??.9})}}function h(m,v,_,b,P=.4,T=.9,w=1.5){l.length<gs&&(c.set(b),l.push({x:m,y:v,z:_,vx:(Math.random()-.5)*.8,vy:w,vz:(Math.random()-.5)*.8,life:T,t:0,r:c.r,g:c.g,b:c.b,size:P,grav:-.5,drag:.98}))}let d=new sn(.82,1,48),f=[];function g(m,v,_,b=3,P=.5,T=.06){let w=f.find(E=>!E.alive);if(!w){if(f.length>=Lv)return;let E=new le(d,new ke({color:_,transparent:!0,blending:ct,depthWrite:!1,side:gt}));E.rotation.x=-Math.PI/2,i.add(E),w={m:E,alive:!1},f.push(w)}w.alive=!0,w.t=0,w.life=P,w.maxR=b,w.m.material.color.set(_),w.m.position.set(m,T,v),w.m.visible=!0}function x(m){for(let v=l.length-1;v>=0;v--){let _=l[v];if(_.t+=m,_.t>=_.life){l[v]=l[l.length-1],l.pop();continue}_.vy-=_.grav*m,_.vx*=_.drag,_.vz*=_.drag,_.x+=_.vx*m,_.y+=_.vy*m,_.z+=_.vz*m,_.y<.05&&_.grav>0&&(_.y=.05,_.vy*=-.3)}for(let v=0;v<gs;v++)if(v<l.length){let _=l[v],b=1-_.t/_.life;e[v*3]=_.x,e[v*3+1]=_.y,e[v*3+2]=_.z,t[v*3]=_.r,t[v*3+1]=_.g,t[v*3+2]=_.b,n[v]=_.size*(.6+.4*b),s[v]=b}else s[v]=0,n[v]=0;r.attributes.position.needsUpdate=!0,r.attributes.pcol.needsUpdate=!0,r.attributes.psize.needsUpdate=!0,r.attributes.palpha.needsUpdate=!0,r.setDrawRange(0,Math.max(1,l.length));for(let v of f){if(!v.alive)continue;v.t+=m;let _=v.t/v.life;if(_>=1){v.alive=!1,v.m.visible=!1;continue}let b=.2+v.maxR*_;v.m.scale.set(b,b,1),v.m.material.opacity=(1-_)*.9}}function p(){l.length=0;for(let m of f)m.alive=!1,m.m.visible=!1}return{spawn:u,ember:h,ring:g,update:x,clear:p,get count(){return l.length}}}function ei(i,e=256){let t=document.createElement("canvas");t.width=t.height=e;let n=t.getContext("2d");i(n,e);let s=new wn(t);return s.colorSpace=mt,s.wrapS=s.wrapT=cn,s.anisotropy=4,s}var Dv=new ur,Dh=new Map;function vr(i){if(Dh.has(i))return Dh.get(i);let e=(n,s)=>{let r=Dv.load(`./assets/tex_ship/${i}_${n}.jpg`);return r.wrapS=r.wrapT=cn,r.anisotropy=8,s&&(r.colorSpace=mt),r},t={map:e("Diffuse",!0),normalMap:e("nor_gl"),roughnessMap:e("Rough")};return Dh.set(i,t),t}function Fa(i,e,t,n){i.fillStyle=n;for(let s=0;s<t;s++)i.fillRect(Math.random()*e,Math.random()*e,1.5,1.5)}function Mr(i,e,t,n,s,r){i.strokeStyle=s,i.lineWidth=r,i.beginPath();for(let o=0;o<2;o++){let a=o*Math.PI/4;for(let l=0;l<4;l++){let c=a+l*Math.PI/2,u=e+Math.cos(c)*n,h=t+Math.sin(c)*n;l?i.lineTo(u,h):i.moveTo(u,h)}i.closePath()}i.stroke()}var Nv={stone:{pbr:{floor:"red_sandstone_pavement",wall:"large_sandstone_blocks_01",tint:"#fff0dc"},props:"ramparts",wallH:2.4,hemi:["#5a3f7a","#2a1a12",1.1],sun:["#ffb070",1.1,[.4,1,.6]],torch:{col:"#ffa040",y:1.75,kind:"flame",light:"#ff9a3c",intensity:14,dist:13},floor:()=>ei((i,e)=>{i.fillStyle="#5c4b3c",i.fillRect(0,0,e,e),Fa(i,e,900,"rgba(0,0,0,.25)"),Fa(i,e,500,"rgba(255,220,180,.12)"),i.strokeStyle="rgba(20,10,5,.55)",i.lineWidth=4,i.strokeRect(2,2,e-4,e-4),Mr(i,e/2,e/2,e*.36,"rgba(201,168,76,.28)",3),Mr(i,e/2,e/2,e*.18,"rgba(76,224,224,.18)",2)}),wall:()=>ei((i,e)=>{i.fillStyle="#7a6650",i.fillRect(0,0,e,e),Fa(i,e,700,"rgba(0,0,0,.22)"),i.strokeStyle="rgba(30,18,10,.6)",i.lineWidth=4;for(let t=0;t<e;t+=64){i.beginPath(),i.moveTo(0,t),i.lineTo(e,t),i.stroke();for(let n=t/64%2?64:0;n<e;n+=128)i.beginPath(),i.moveTo(n,t),i.lineTo(n,t+64),i.stroke()}i.fillStyle="rgba(201,168,76,.5)",i.fillRect(0,18,e,10),Mr(i,e*.25,23,9,"rgba(11,7,19,.6)",2),Mr(i,e*.75,23,9,"rgba(11,7,19,.6)",2)}),top:()=>ei((i,e)=>{i.fillStyle="#8a7560",i.fillRect(0,0,e,e),Fa(i,e,600,"rgba(0,0,0,.2)"),i.strokeStyle="rgba(30,18,10,.5)",i.lineWidth=4,i.strokeRect(2,2,e-4,e-4)})},slab:{pbr:{floor:"metal_plate",wall:"metal_plate",tint:"#9a86b0",glowFloor:!0},wallH:.9,hemi:["#ff7ad9","#20101c",.7],sun:["#ffb27a",1,[-.5,1,.5]],torch:{col:ie.pink,y:1.4,kind:"pylon",light:"#ff7ad9",intensity:10,dist:12},floor:()=>ei((i,e)=>{i.fillStyle="#2a1230",i.fillRect(0,0,e,e);let t=e/4;i.strokeStyle="rgba(255,122,217,.45)",i.lineWidth=3;for(let s=0;s<3;s++)for(let r=0;r<3;r++){let o=r*t*1.6+s%2*t*.8+t*.4,a=s*t*1.4+t*.5;i.beginPath();for(let l=0;l<6;l++){let c=l*Math.PI/3,u=o+Math.cos(c)*t*.45,h=a+Math.sin(c)*t*.45;l?i.lineTo(u,h):i.moveTo(u,h)}i.closePath(),i.stroke()}let n=i.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);n.addColorStop(0,"rgba(255,122,217,.12)"),n.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=n,i.fillRect(0,0,e,e)}),wall:()=>ei((i,e)=>{i.fillStyle="#3b1d45",i.fillRect(0,0,e,e),i.fillStyle="rgba(255,122,217,.85)",i.fillRect(0,0,e,8),i.fillStyle="rgba(76,224,224,.7)";for(let t=16;t<e;t+=48)i.fillRect(t,e/2-3,20,6)}),top:()=>ei((i,e)=>{i.fillStyle="#4a2456",i.fillRect(0,0,e,e),i.strokeStyle="rgba(255,122,217,.8)",i.lineWidth=8,i.strokeRect(4,4,e-8,e-8)})},stacks:{pbr:{floor:"dark_wooden_planks",pillar:"cobblestone_03",tint:"#f0d0a8"},props:"archive",wallH:2.8,hemi:["#6a5aaa","#3a2418",1.9],sun:["#c8a8ff",1.3,[.2,1,.3]],torch:{col:"#ffd27a",y:1.2,kind:"candle",light:"#ffc66a",intensity:9,dist:10},floor:()=>ei((i,e)=>{i.fillStyle="#3a2618",i.fillRect(0,0,e,e),i.strokeStyle="rgba(0,0,0,.45)",i.lineWidth=3;for(let t=0;t<e;t+=42)i.beginPath(),i.moveTo(0,t),i.lineTo(e,t),i.stroke();i.strokeStyle="rgba(255,200,140,.08)",i.lineWidth=1;for(let t=0;t<40;t++){let n=Math.random()*e;i.beginPath(),i.moveTo(0,n),i.bezierCurveTo(e/3,n+6,e*2/3,n-6,e,n),i.stroke()}i.fillStyle="rgba(155,108,255,.10)",i.beginPath(),i.arc(e*.7,e*.3,e*.12,0,7),i.fill()}),wall:()=>ei((i,e)=>{i.fillStyle="#2a1a10",i.fillRect(0,0,e,e);let t=["#8c2f2f","#2f6b4a","#c9a84c","#2f4b8c","#e8dcc0","#6b3a8c","#b56a2a"];for(let n=0;n<3;n++){let s=12+n*82;i.fillStyle="#1a100a",i.fillRect(0,s+66,e,8);let r=4;for(;r<e-4;){let o=9+Math.random()*14;i.fillStyle=t[Math.floor(Math.random()*t.length)],i.fillRect(r,s+6+Math.random()*8,o-2,60),r+=o}}}),top:()=>ei((i,e)=>{i.fillStyle="#3a2618",i.fillRect(0,0,e,e),i.strokeStyle="rgba(0,0,0,.5)",i.lineWidth=6,i.strokeRect(3,3,e-6,e-6)})}};function Uv(i,e,t=.5){let n=i.floor.size,s=new Float32Array(n*12),r=new Float32Array(n*12),o=new Float32Array(n*8),a=new Uint32Array(n*6),l=0;for(let u of i.floor){let[h,d]=u.split(",").map(Number),f=h*2,g=d*2,x=f+2,p=g+2,m=l*4;s.set([f,0,g,x,0,g,x,0,p,f,0,p],l*12),r.set([0,1,0,0,1,0,0,1,0,0,1,0],l*12),o.set([f*t,g*t,x*t,g*t,x*t,p*t,f*t,p*t],l*8),a.set([m,m+2,m+1,m,m+3,m+2],l*6),l++}let c=new at;return c.setAttribute("position",new je(s,3)),c.setAttribute("normal",new je(r,3)),c.setAttribute("uv",new je(o,2)),c.setIndex(new je(a,1)),new le(c,e)}function zv(i){let e=new Ct({side:Zt,depthWrite:!1,fog:!1,uniforms:{c0:{value:new ye(i[0])},c1:{value:new ye(i[1])},c2:{value:new ye(i[2])}},vertexShader:"varying vec3 vp; void main(){ vp=normalize(position); gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"uniform vec3 c0,c1,c2; varying vec3 vp; void main(){ float h=vp.y; vec3 c = h>0.0 ? mix(c1,c0,smoothstep(0.0,0.7,h)) : mix(c1,c2,smoothstep(0.0,-0.5,h)); gl_FragColor=vec4(c,1.0); }"}),t=new le(new Jt(190,24,16),e);return t.frustumCulled=!1,t}function Ov(i){let e=new Float32Array(i*3);for(let s=0;s<i;s++){let r=Math.random()*6.283,o=Math.acos(Math.random()*.9+.1),a=175;e.set([a*Math.sin(o)*Math.cos(r),a*Math.cos(o),a*Math.sin(o)*Math.sin(r)],s*3)}let t=new at;t.setAttribute("position",new je(e,3));let n=new gi(t,new Oi({color:"#fff4dc",size:1.6,sizeAttenuation:!1,transparent:!0,opacity:.85,fog:!1}));return n.frustumCulled=!1,n}function Ba(i,e,t,n){let s=ei(e,256),r=new le(new Jt(i,32,24),new ke({map:s,fog:!1}));if(r.position.set(...t),r.frustumCulled=!1,n){let o=new le(new sn(i*1.4,i*2.3,64),new ke({color:"#e8d6a8",transparent:!0,opacity:.75,side:gt,fog:!1}));o.rotation.x=-1.2,o.rotation.y=.3,r.add(o)}return r}function pp(i){return(e,t)=>{for(let n=0;n<i.length;n++)e.fillStyle=i[n],e.fillRect(0,n*t/i.length,t,t/i.length+2);for(let n=0;n<40;n++)e.fillStyle="rgba(255,255,255,.08)",e.beginPath(),e.ellipse(Math.random()*t,Math.random()*t,20+Math.random()*40,4+Math.random()*6,0,0,7),e.fill()}}function Fv(i,e){i.fillStyle="#1e5fb8",i.fillRect(0,0,e,e),i.fillStyle="#3f8f3a";for(let t=0;t<9;t++)i.beginPath(),i.ellipse(Math.random()*e,Math.random()*e,20+Math.random()*50,15+Math.random()*35,Math.random()*3,0,7),i.fill();i.fillStyle="rgba(255,255,255,.55)";for(let t=0;t<30;t++)i.beginPath(),i.ellipse(Math.random()*e,Math.random()*e,18+Math.random()*30,4+Math.random()*5,Math.random()*3,0,7),i.fill()}function Bv(i,e){i.fillStyle="#c9c4b8",i.fillRect(0,0,e,e);for(let t=0;t<40;t++)i.fillStyle="rgba(60,55,50,.35)",i.beginPath(),i.arc(Math.random()*e,Math.random()*e,3+Math.random()*12,0,7),i.fill()}function Nh(i,e,t,n=null,s={}){let r=Nv[e.style],o=new Ne;i.add(o);let a=[];i.background=new ye(t.sky[2]),i.fog=new ra(t.fog,34,95);let l=zv(t.sky);o.add(l),e.style!=="stacks"&&o.add(Ov(e.style==="slab"?700:400));let c=[];if(e.style==="slab"){c.push(Ba(34,Fv,[40,-95,-60]),Ba(9,Bv,[-30,-70,-20]),Ba(48,pp(["#c7a27a","#e3c39a","#a9744f","#e8d3b0","#b8865c","#d9b98f","#a06a48"]),[-110,-120,-150]),Ba(30,pp(["#e9d8a6","#d4bf8a","#f0e2b8","#c9b07a"]),[120,-105,-110],!0));for(let j of c)o.add(j)}let u=new ya(r.hemi[0],r.hemi[1],r.hemi[2]);o.add(u);let h=new fr(r.sun[0],r.sun[1]*1.3),d=new U(...r.sun[2]).normalize();if(o.add(h,h.target),s.shadows){h.castShadow=!0,h.shadow.mapSize.set(1024,1024);let j=h.shadow.camera;j.left=j.bottom=-16,j.right=j.top=16,j.near=1,j.far=80,h.shadow.bias=-8e-4,h.shadow.normalBias=.03}let f=r.floor(),g=r.wall(),x=r.top();a.push(f,g,x);let p;r.pbr&&r.pbr.floor?(p=new Ve({...vr(r.pbr.floor),color:r.pbr.tint,roughness:1,metalness:r.pbr.glowFloor?.55:.05,normalScale:new be(1.2,1.2)}),r.pbr.glowFloor&&(p.emissive=new ye("#ff7ad9"),p.emissiveIntensity=.45,p.emissiveMap=f)):p=new Ve({map:f,roughness:.88,metalness:.05});let m=Uv(e,p,r.pbr?.25:.5);m.receiveShadow=!0,o.add(m),a.push(m.geometry,m.material);let v=r.wallH,_=new Rt(2,v,2);_.translate(0,v/2,0);let b=r.pbr&&r.pbr.wall&&e.style==="stone"?new Ve({...vr(r.pbr.wall),color:"#f0dcc0",roughness:1}):new Ve({map:g,roughness:.85,...r.pbr&&r.pbr.wall?{normalMap:vr(r.pbr.wall).normalMap,metalness:.5}:{}}),P=new Ve({map:x,roughness:.9});e.style==="slab"&&(b.emissive=new ye("#ff7ad9"),b.emissiveIntensity=.25,b.emissiveMap=g);let T=[b,b,P,P,b,b],w=[...e.walls].map(j=>j.split(",").map(Number)),E=[],y=[];for(let j of e.inner){let[de,se]=j.split(",").map(Number),he=e.roomAt((de+.5)*2,(se+.5)*2);(he&&he.pillars?y:E).push([de,se])}let M=new zi(_,T,w.length+E.length),R=new Be,S=new ye;if([...w,...E].forEach(([j,de],se)=>{R.makeTranslation((j+.5)*2,0,(de+.5)*2),M.setMatrixAt(se,R),S.setHSL(0,0,.82+Math.random()*.18),M.setColorAt(se,S)}),M.castShadow=M.receiveShadow=!0,M.instanceMatrix.needsUpdate=!0,M.instanceColor&&(M.instanceColor.needsUpdate=!0),o.add(M),a.push(_,b,P),y.length){let j=new vt(.55,.68,v+.6,12);j.translate(0,(v+.6)/2,0);let de=r.pbr&&(r.pbr.pillar||r.pbr.wall)?new Ve({...vr(r.pbr.pillar||r.pbr.wall),color:"#e8d4b8",roughness:1}):new Ve({map:g,roughness:.8}),se=new zi(j,de,y.length);se.castShadow=se.receiveShadow=!0;let he=new zi(new Rt(1.6,.3,1.6),new Ve({color:ie.gold,roughness:.4,metalness:.6}),y.length);y.forEach(([oe,ue],ze)=>{R.makeTranslation((oe+.5)*2,0,(ue+.5)*2),se.setMatrixAt(ze,R),R.makeTranslation((oe+.5)*2,v+.6,(ue+.5)*2),he.setMatrixAt(ze,R)}),se.instanceMatrix.needsUpdate=!0,he.instanceMatrix.needsUpdate=!0,o.add(se,he),a.push(j,de)}let I=new le(new Sn(600,600),new Ve({color:e.style==="stone"?"#0d1a3a":e.style==="slab"?"#1a0a22":"#050308",roughness:1,metalness:0}));I.rotation.x=-Math.PI/2,I.position.y=-.5,e.style!=="slab"&&o.add(I);let B=[];for(let j of e.torches){let de=j.dir==="S"?[0,1]:j.dir==="N"?[0,-1]:j.dir==="E"?[1,0]:[-1,0],se=j.x+de[0]*1.02,he=j.z+de[1]*1.02,oe=new Ne;if(oe.position.set(se,0,he),r.torch.kind==="flame"){let H=new le(new Rt(.18,.5,.18),new Ve({color:"#2a1a10"}));H.position.y=r.torch.y-.3,oe.add(H);let yt=new le(new vt(.2,.1,.18,8),new Ve({color:ie.gold,metalness:.7,roughness:.3}));yt.position.y=r.torch.y-.02,oe.add(yt)}else if(r.torch.kind==="pylon"){let H=new le(new vt(.08,.12,r.torch.y,8),new Ve({color:"#3b1d45",emissive:ie.pink,emissiveIntensity:.8}));H.position.y=r.torch.y/2,oe.add(H)}else{let H=new le(new vt(.07,.09,.5,8),new Ve({color:"#efe3c0"}));H.position.y=r.torch.y-.25,oe.add(H);let yt=new le(new vt(.16,.2,.9,8),new Ve({color:"#1a100a"}));yt.position.y=r.torch.y-.95,oe.add(yt)}let ue=bt(r.torch.col,r.torch.kind==="candle"?.9:1.6,.75),ze=bt("#fff2c0",r.torch.kind==="candle"?.35:.6,.9);ue.position.y=ze.position.y=r.torch.y+.22,oe.add(ue,ze),o.add(oe),B.push({g:oe,outer:ue,inner:ze,x:se,z:he,seed:Math.random()*10})}let z=[];for(let j=0;j<6;j++){let de=new Jn(r.torch.light,0,r.torch.dist,2);de.position.set(0,-50,0),o.add(de),z.push(de)}let L=e.gateCells,D=new Ne;if(L.length){let j=(L[0][0]+L[1][0]+1)/2*2,de=(L[0][1]+L[1][1]+1)/2*2,se=L[0][1]===L[1][1],he=new Ve({color:"#15151c",emissive:ie.char,emissiveIntensity:.35,metalness:.8,roughness:.3});for(let ze=-3;ze<=3;ze++){let H=new le(new vt(.09,.09,3.2,8),he);H.position.set(se?ze*.58:0,1.6,se?0:ze*.58),D.add(H)}let oe=new le(new Rt(se?2*2:.3,.26,se?.3:2*2),he);oe.position.y=3.1,D.add(oe);let ue=oe.clone();ue.position.y=.4,D.add(ue),D.position.set(j,7,de),D.visible=!1,o.add(D)}Wv(o,e,r,e.style),Vv(o,e,r,n);let O=Xv(o,e.style),k=qv(o,e,e.style),K=7,Z=!1;function Me(){Z=!0,D.visible=!0,K=0}function Te(){Z=!1,K=7}let $=0;function ne(j,de,se,he){for(let oe of B){let ue=.85+Math.sin(de*13+oe.seed)*.1+Math.sin(de*29+oe.seed*3)*.06;oe.outer.scale.setScalar((r.torch.kind==="candle"?.9:1.6)*ue),oe.inner.scale.setScalar((r.torch.kind==="candle"?.35:.6)*(2-ue))}if($-=j,$<=0){$=.25;let oe=B.map(ue=>({tr:ue,d:(ue.x-se)**2+(ue.z-he)**2})).sort((ue,ze)=>ue.d-ze.d).slice(0,z.length);z.forEach((ue,ze)=>{let H=oe[ze];H&&H.d<30*30?(ue.userData.on=!0,ue.position.set(H.tr.x,r.torch.y+.3,H.tr.z),ue.userData.seed=H.tr.seed):ue.userData.on=!1})}for(let oe of z)oe.intensity=oe.userData.on?r.torch.intensity*(.85+Math.sin(de*11+(oe.userData.seed||0))*.15):0;for(let oe of c)oe.rotation.y+=j*.02;D.visible&&(D.position.y+=(K-D.position.y)*Math.min(1,j*6),!Z&&D.position.y>6.5&&(D.visible=!1)),l.position.set(se,0,he),O.update(j,de,se,he);for(let oe of k)oe.material.opacity=oe.userData.base*(.75+Math.sin(de*.7+oe.userData.seed)*.25);h.target.position.set(se,0,he),h.position.set(se+d.x*40,d.y*40,he+d.z*40)}function pe(){i.remove(o);for(let j of a)j.dispose&&j.dispose();i.fog=null}return{group:o,update:ne,dispose:pe,gate:{seal:Me,open:Te},wallH:v,style:e.style}}var kv={ramparts:{floor:["barrel_large","barrel_small_stack","keg_decorated","trunk_large_A","rubble_large","sword_shield_broken","box_stacked"],banners:["banner_patternA_red","banner_patternA_yellow","banner_shield_red"]},archive:{floor:["table_medium_decorated_A","trunk_medium_B","shelf_small_candles","candle_triple","coin_stack_large","barrel_small_stack"],banners:[]}};function Hv(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function Vv(i,e,t,n){let s=kv[t.props];if(!s||!n||!n.props)return;let r=Hv(e.key.length*977+e.rooms.length),o=(c,u)=>c+","+u,a=[...e.boxes,e.start].map(c=>[Math.floor(c.x/2),Math.floor(c.z/2)]),l=(c,u,h,d,f=.5,g=0)=>{let x=n.props[c];if(!x)return!1;let p=x.clone(!0);return p.scale.setScalar(f),p.position.set(u,g,h),p.rotation.y=d,p.traverse(m=>{m.isMesh&&(m.castShadow=!0,m.receiveShadow=!0)}),i.add(p),!0};for(let c of e.rooms){if(c.kind==="boss")continue;let u=c.rect,h=[];for(let x=u.x0;x<u.x1;x++)for(let p=u.z0;p<u.z1;p++){if(e.solidCell(x,p))continue;let m=[[1,0],[-1,0],[0,1],[0,-1]].find(([v,_])=>e.walls.has(o(x+v,p+_)));m&&(c.doors.some(v=>Math.abs(v.x-x)<3&&Math.abs(v.z-p)<3)||a.some(([v,_])=>Math.abs(v-x)<2&&Math.abs(_-p)<2)||h.push([x,p,m]))}for(let x=h.length-1;x>0;x--){let p=Math.floor(r()*(x+1));[h[x],h[p]]=[h[p],h[x]]}let d=0,f=[],g=3+Math.floor(r()*3);for(let[x,p,[m,v]]of h){if(d>=g)break;if(f.some(([T,w])=>Math.abs(T-x)<3&&Math.abs(w-p)<3))continue;let _=s.floor[Math.floor(r()*s.floor.length)],b=(x+.5)*2+m*.35,P=(p+.5)*2+v*.35;l(_,b,P,Math.atan2(-m,-v)+(r()-.5)*.6)&&(e.inner.add(o(x,p)),f.push([x,p]),d++)}if(s.banners.length){let x=0;for(let p of e.torches){let m=Math.floor(p.x/2),v=Math.floor(p.z/2);if(m<u.x0-1||m>u.x1||v<u.z0-1||v>u.z1||x++%2)continue;let _=p.dir==="S"?[0,1]:p.dir==="N"?[0,-1]:p.dir==="E"?[1,0]:[-1,0],b=[_[1],-_[0]];l(s.banners[x%s.banners.length],p.x+_[0]*1.02+b[0]*1,p.z+_[1]*1.02+b[1]*1,Math.atan2(_[0],_[1]),.42,.2)}}}}function Gv(i){let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d");t.strokeStyle=i,t.lineWidth=6,t.shadowColor=i,t.shadowBlur=18,t.strokeRect(10,10,236,236),Mr(t,128,128,88,i,5),Mr(t,128,128,44,i,3);let n=new wn(e);return n.colorSpace=mt,n}var mp={stone:{wall:"large_sandstone_blocks_01",tint:"#f0dcc0",rune:"#ffc65a"},slab:{wall:"metal_plate",tint:"#b8a8d8",rune:"#ff7ad9"},stacks:{wall:"cobblestone_03",tint:"#e8d4b8",rune:"#b89aff"}};function Wv(i,e,t,n){if(!e.plinths||!e.plinths.size)return;let s=mp[n]||mp.stone,r=new Ve({...vr(s.wall),color:s.tint,roughness:1}),o=new Ve({...vr(s.wall),color:s.tint,roughness:.9}),a=new Ve({color:ie.gold,metalness:.75,roughness:.3,emissive:"#3a2a08",emissiveIntensity:.4}),l=new ke({map:Gv(s.rune),transparent:!0,opacity:.55,blending:ct,depthWrite:!1}),c=new Rt(2,1,2),u=new Rt(2+.06,.1,2+.06),h=new Sn(2*.9,2*.9);for(let[d,f]of e.plinths){let[g,x]=d.split(",").map(Number),p=(g+.5)*2,m=(x+.5)*2,v=new le(c,[r,r,o,o,r,r]);v.scale.y=f,v.position.set(p,f/2,m),v.castShadow=v.receiveShadow=!0,i.add(v);let _=new le(u,a);_.position.set(p,f-.05,m),i.add(_);let b=new le(h,l);b.rotation.x=-Math.PI/2,b.position.set(p,f+.02,m),i.add(b)}}function Xv(i,e){let s=new Float32Array(780),r=new Float32Array(260);for(let f=0;f<260;f++)s[f*3]=(Math.random()-.5)*16*2,s[f*3+1]=Math.random()*7,s[f*3+2]=(Math.random()-.5)*16*2,r[f]=Math.random()*6.28;let o=new at;o.setAttribute("position",new je(s,3));let a=e==="slab"?"#ff9ae6":e==="stacks"?"#ffe2a8":"#ffaa55",l=new Oi({color:a,size:e==="stacks"?.07:.1,transparent:!0,opacity:.75,blending:ct,depthWrite:!1,map:bt(a,1).material.map}),c=new gi(o,l);c.frustumCulled=!1,i.add(c);let u=e==="stone"?.55:e==="slab"?.25:.08,h=0,d=0;return{update(f,g,x,p){let m=x-h,v=p-d;h=x,d=p;for(let _=0;_<260;_++){let b=s[_*3]-m,P=s[_*3+1]+u*f,T=s[_*3+2]-v;b+=Math.sin(g*.6+r[_])*.12*f,T+=Math.cos(g*.5+r[_])*.12*f,b>16?b-=2*16:b<-16&&(b+=2*16),T>16?T-=2*16:T<-16&&(T+=2*16),P>7&&(P-=7),s[_*3]=b,s[_*3+1]=P,s[_*3+2]=T}c.position.set(x,0,p),o.attributes.position.needsUpdate=!0}}}function qv(i,e,t){let n=document.createElement("canvas");n.width=64,n.height=256;let s=n.getContext("2d"),r=s.createLinearGradient(0,0,0,256);r.addColorStop(0,"rgba(255,255,255,0.9)"),r.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=r,s.fillRect(0,0,64,256);let o=s.createLinearGradient(0,0,64,0);o.addColorStop(0,"rgba(0,0,0,1)"),o.addColorStop(.5,"rgba(0,0,0,0)"),o.addColorStop(1,"rgba(0,0,0,1)"),s.globalCompositeOperation="destination-out",s.fillStyle=o,s.fillRect(0,0,64,256);let a=new wn(n),l=t==="slab"?"#ffb2ec":t==="stacks"?"#b8a0ff":"#ffd9a0",c=[];for(let u of e.rooms){if(u.kind==="boss")continue;let h=u.center.x+(u.rect.x1-u.rect.x0)*.35,d=u.center.z-1;for(let f of[0,Math.PI/2]){let g=new le(new Sn(3.2,11),new ke({map:a,color:l,transparent:!0,opacity:.1,blending:ct,depthWrite:!1,side:gt}));g.position.set(h,4.8,d),g.rotation.set(0,f,-.28),g.userData={base:t==="stacks"?.14:.1,seed:Math.random()*6},i.add(g),c.push(g)}}return c}var ti=(i,e={})=>new Ve({color:i,roughness:.7,metalness:.05,...e});function Vn(i,e,t,n){return new le(new Rt(i,e,t),n)}function Ki(i,e,t,n,s=10){return new le(new vt(i,e,t,s),n)}function ka(i,e,t=14,n=10){return new le(new Jt(i,t,n),e)}function Yv(){let i=document.createElement("canvas");i.width=256,i.height=128;let e=i.getContext("2d");e.fillStyle="rgba(76,224,224,.08)",e.fillRect(0,0,256,128),e.strokeStyle="rgba(200,255,255,.9)",e.lineWidth=2;for(let n=0;n<5;n++)for(let s=0;s<8;s++){let r=s*34+n%2*17,o=n*30+8;e.beginPath();for(let a=0;a<6;a++){let l=a*Math.PI/3+Math.PI/6,c=r+Math.cos(l)*15,u=o+Math.sin(l)*15;a?e.lineTo(c,u):e.moveTo(c,u)}e.closePath(),e.stroke()}let t=new wn(i);return t.colorSpace=mt,t.wrapS=t.wrapT=cn,t}function gp(i,e){let t=new Ne;i.add(t);let n={skin:ti(e.skin),skinD:ti(e.skinD),robe:ti(e.robe),robeL:ti(e.robeL),robeD:ti(e.robeD),pant:ti(e.pant),hair:ti(e.hair,{roughness:.9}),gold:ti(e.wrapB,{metalness:.75,roughness:.3}),boot:ti("#0e0b14",{roughness:.6}),gem:new Ve({color:e.gem,emissive:e.gem,emissiveIntensity:1.2})},s=Object.values(n);t.add(Hn(.62));let r=new Jn(e.aura,5,7,2);r.position.y=1.9,t.add(r);let o=new le(new sn(.5,.78,40),new ke({color:e.aura,transparent:!0,opacity:.55,blending:ct,depthWrite:!1,side:gt}));o.rotation.x=-Math.PI/2,o.position.y=.05,t.add(o);let a=new Ne;t.add(a);let l=Vn(.5,.22,.3,n.pant);l.position.y=.98,a.add(l);let c=Vn(.54,.07,.34,n.gold);c.position.y=1.1,a.add(c);let u=Vn(.58,.6,.34,n.robe);u.position.y=1.42,a.add(u);let h=Vn(.3,.42,.04,n.gold);h.position.set(0,1.45,.18),a.add(h);let d=Vn(.62,.1,.38,n.robeL);d.position.y=1.72,a.add(d);for(let se of[-1,1]){let he=ka(.13,n.robeL);he.position.set(se*.34,1.66,0),a.add(he)}let f=Ki(.08,.09,.12,n.skinD);f.position.y=1.8,a.add(f);let g=new Ne;g.position.y=1.98,a.add(g),g.add(ka(.21,n.skin,16,12));let x=new le(new Jt(.235,16,8,0,Math.PI*2,0,Math.PI*.55),n.hair);if(x.position.y=.02,g.add(x),e.queen){let se=Ki(.06,.05,.55,n.hair);se.position.set(0,-.2,-.2),se.rotation.x=.35,g.add(se);let he=ka(.2,n.hair,12,8);he.position.set(0,.16,-.06),he.scale.set(1.2,.8,1.1),g.add(he)}else{let se=Ki(.19,.24,.12,n.hair,12);se.position.y=.17,g.add(se)}let p=new le(new $n(.215,.028,8,24),n.gold);p.rotation.x=Math.PI/2,p.position.y=.06,g.add(p);let m=new le(new hr(.05),n.gem);m.position.set(0,.06,.22),g.add(m);for(let se of[-1,1]){let he=new le(new Jt(.03,8,6),new ke({color:e.accent}));he.position.set(se*.08,-.01,.19),g.add(he)}function v(se){let he=new Ne;he.position.set(se*.36,1.62,0);let oe=Ki(.085,.075,.36,n.robeL);oe.position.y=-.18,he.add(oe);let ue=new Ne;ue.position.y=-.36,he.add(ue);let ze=Ki(.07,.06,.34,n.skin);ze.position.y=-.17,ue.add(ze);let H=Ki(.09,.09,.06,n.gold);H.position.y=-.04,ue.add(H);let yt=new Ne;return yt.position.y=-.36,ue.add(yt),yt.add(ka(.075,n.skinD,10,8)),{g:he,elbow:ue,hand:yt}}let _=v(1),b=v(-1);a.add(_.g,b.g);let P=new Ne;P.rotation.x=Math.PI/2,_.hand.add(P),P.add(Vn(.11,.12,.42,ti("#141020",{metalness:.6,roughness:.35})));let T=Vn(.13,.14,.08,n.gold);T.position.z=.02,P.add(T);let w=new Ve({color:"#ffffff",emissive:"#C9A84C",emissiveIntensity:1.5}),E=new le(new vt(.05,.06,.16,8),w);E.rotation.x=Math.PI/2,E.position.z=.27,P.add(E);let y=bt("#C9A84C",.5,.8);y.position.z=.3,P.add(y);let M=new ke({color:e.aura,transparent:!0,opacity:.95,blending:ct,depthWrite:!1}),R=new Ne;R.visible=!1,b.hand.add(R);let S=new le(new Rt(.06,.06,2),new ke({color:"#ffffff",transparent:!0,opacity:.95,blending:ct,depthWrite:!1}));S.position.z=1,R.add(S);let I=new le(new Rt(.16,.12,2.1),M);I.position.z=1.05,R.add(I);let B=Vn(.08,.08,.26,n.gold);B.position.z=-.05,R.add(B);let z=new le(new sn(.5,xr,28,1,-jn,jn*2),new ke({color:e.aura,transparent:!0,opacity:0,blending:ct,depthWrite:!1,side:gt}));z.rotation.x=-Math.PI/2,z.rotation.z=-Math.PI/2,z.position.y=1.05,t.add(z);let L=new ke({map:Yv(),color:e.accent,transparent:!0,opacity:0,blending:ct,depthWrite:!1,side:gt}),D=new le(new vt(1.05,1.05,2,24,1,!0,-qi,qi*2),L);D.position.y=1.05,t.add(D);let O=bt(e.accent,2.6,0);O.position.set(0,1,.7),t.add(O);function k(se){let he=new Ne;he.position.set(se*.15,.9,0);let oe=Ki(.11,.095,.42,n.pant);oe.position.y=-.21,he.add(oe);let ue=new Ne;ue.position.y=-.42,he.add(ue);let ze=Ki(.09,.08,.4,n.pant);ze.position.y=-.2,ue.add(ze);let H=Vn(.2,.14,.32,n.boot);H.position.set(0,-.45,.05),ue.add(H);let yt=Vn(.22,.04,.34,n.gold);return yt.position.set(0,-.39,.05),ue.add(yt),{g:he,knee:ue}}let K=k(1),Z=k(-1);a.add(K.g,Z.g);let Me=null;if(!e.queen)Me=Vn(.5,.72,.07,n.robeD),Me.position.set(0,.62,-.19),a.add(Me);else{let se=new le(new vt(.3,.46,.4,14,1,!0),n.robeL);se.position.y=.78,a.add(se)}let Te={phase:0,bladeT:-1,bladeN:0,hurtT:0};function $(se){w.emissive.set(se),y.material.color.set(se)}function ne(se){Te.bladeT=0,Te.bladeN=se,R.visible=!0}function pe(){Te.hurtT=.18}function j(se,he,oe){t.position.set(oe.x,0,oe.z),t.rotation.y=Math.atan2(oe.fx,oe.fz),t.visible=oe.alive&&!(oe.invuln>0&&Math.floor(he*14)%2===0);let ue=oe.mv;Te.phase+=se*(9+ue*4)*(ue>.05?1:0);let ze=Math.sin(Te.phase)*.8*ue,H=Math.abs(Math.sin(Te.phase))*.07*ue,yt=oe.mvx*oe.fx+oe.mvz*oe.fz,et=oe.mvx*oe.fz-oe.mvz*oe.fx;a.position.y=H,a.rotation.x=oe.dashing?.55:.16*yt*ue,a.rotation.z=-.14*et*ue,K.g.rotation.x=oe.dashing?-.9:ze,Z.g.rotation.x=oe.dashing?.9:-ze,K.knee.rotation.x=Math.max(0,-ze)*1.2,Z.knee.rotation.x=Math.max(0,ze)*1.2,u.scale.y=1+Math.sin(he*2.1)*.015*(1-ue);let $e=oe.firing||oe.charge>.05||ue<.05;if(_.g.rotation.x=$e?-Math.PI/2+.1:-ze*.9,_.g.rotation.z=$e?-.12:0,_.elbow.rotation.x=$e?0:-.5,Te.bladeT>=0){Te.bladeT+=se/.22;let Ge=Math.min(1,Te.bladeT),Ie=Te.bladeN,N=Ie===2?-1.4:Ie===1?-jn:jn,A=Ie===2?-1.6:-N;b.g.rotation.x=-Math.PI/2+(Ie===2?Ge<.4?-.6*(1-Ge/.4):.35*(Ge-.4)/.6:0),b.g.rotation.y=Ie===2?0:N+(A-N)*(Ge<.5?2*Ge*Ge:1-2*(1-Ge)*(1-Ge)),b.g.rotation.z=0,b.elbow.rotation.x=0,z.material.opacity=.55*(1-Ge),z.scale.setScalar(Ie===2?1.25:1),Te.bladeT>=1.6&&(Te.bladeT=-1,R.visible=!1,z.material.opacity=0)}else oe.ward?(b.g.rotation.x=-Math.PI/2+.3,b.g.rotation.y=.3,b.g.rotation.z=.2,b.elbow.rotation.x=-.6):(b.g.rotation.x=ze*.9,b.g.rotation.y=0,b.g.rotation.z=.08,b.elbow.rotation.x=-.5);let Ue=oe.ward?1:0;if(L.opacity+=(.7*Ue-L.opacity)*Math.min(1,se*14),O.material.opacity=L.opacity*.5,D.scale.setScalar(.8+.2*L.opacity/.7),L.map.offset.y=he*.15,oe.parryFlash>0?(L.color.set("#ffffff"),L.opacity=1):L.color.set(e.accent),o.material.opacity=.4+Math.sin(he*3)*.12+(oe.charge>0?oe.charge*.4:0),o.scale.setScalar(1+Math.sin(he*3)*.05+oe.charge*.5),y.scale.setScalar(.5+oe.charge*1.4+(oe.firing?.25:0)),Me&&(Me.rotation.x=-.25*ue-Math.sin(Te.phase)*.15*ue),Te.hurtT>0){Te.hurtT-=se;for(let Ge of s)Ge.emissive.set("#ff2b2b"),Ge.emissiveIntensity=Te.hurtT/.18*1.5}else for(let Ge of s)Ge!==n.gem&&(Ge.emissiveIntensity=0)}function de(){i.remove(t)}return{group:t,update:j,setWeaponColor:$,playBlade:ne,hurtFlash:pe,dispose:de,radius:_n}}function _p(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new at,c=0;for(let u=0;u<i.length;++u){let h=i[u],d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in h.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(h.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in h.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(h.morphAttributes[f])}if(e){let f;if(t)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,u),c+=f}}if(t){let u=0,h=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let g=0;g<f.count;++g)h.push(f.getX(g)+u);u+=i[d].attributes.position.count}l.setIndex(h)}for(let u in r){let h=xp(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(let u in o){let h=o[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<h;++d){let f=[];for(let x=0;x<o[u].length;++x)f.push(o[u][x][d]);let g=xp(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function xp(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let u=i[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}let o=new e(r),a=new je(o,t,n),l=0;for(let c=0;c<i.length;++c){let u=i[c];if(u.isInterleavedBufferAttribute){let h=l/t;for(let d=0,f=u.count;d<f;d++)for(let g=0;g<t;g++){let x=u.getComponent(d,g);a.setComponent(d+h,g,x)}}else o.set(u.array,l);l+=u.count*t}return s!==void 0&&(a.gpuType=s),a}function Uh(i,e){if(e===lf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===no||e===wa){let t=i.getIndex();if(t===null){let o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===no)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var Ha=class extends vi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Vh(t)}),this.register(function(t){return new Gh(t)}),this.register(function(t){return new jh(t)}),this.register(function(t){return new Qh(t)}),this.register(function(t){return new eu(t)}),this.register(function(t){return new Xh(t)}),this.register(function(t){return new qh(t)}),this.register(function(t){return new Yh(t)}),this.register(function(t){return new Kh(t)}),this.register(function(t){return new Hh(t)}),this.register(function(t){return new Zh(t)}),this.register(function(t){return new Wh(t)}),this.register(function(t){return new Jh(t)}),this.register(function(t){return new $h(t)}),this.register(function(t){return new Bh(t)}),this.register(function(t){return new tu(t)}),this.register(function(t){return new nu(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=Vi.extractUrlBase(e);o=Vi.resolveURL(c,this.path)}else o=Vi.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Qr(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Ep){try{o[Qe.KHR_BINARY_GLTF]=new iu(e)}catch(h){s&&s(h);return}r=JSON.parse(o[Qe.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new hu(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case Qe.KHR_MATERIALS_UNLIT:o[h]=new kh;break;case Qe.KHR_DRACO_MESH_COMPRESSION:o[h]=new su(r,this.dracoLoader);break;case Qe.KHR_TEXTURE_TRANSFORM:o[h]=new ru;break;case Qe.KHR_MESH_QUANTIZATION:o[h]=new ou;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function Kv(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}var Qe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Bh=class{constructor(e){this.parser=e,this.name=Qe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,u=new ye(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],jt);let h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new fr(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Jn(u),c.distance=h;break;case"spot":c=new va(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Mi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}},kh=class{constructor(){this.name=Qe.KHR_MATERIALS_UNLIT}getMaterialType(){return ke}extendParams(e,t,n){let s=[];e.color=new ye(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],jt),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,mt))}return Promise.all(s)}},Hh=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Vh=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:gn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new be(a,a)}return Promise.all(r)}},Gh=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:gn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},Wh=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:gn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},Xh=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:gn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new ye(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],jt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,mt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},qh=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:gn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},Yh=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:gn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new ye().setRGB(a[0],a[1],a[2],jt),Promise.all(r)}},Kh=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:gn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Zh=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:gn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new ye().setRGB(a[0],a[1],a[2],jt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,mt)),Promise.all(r)}},$h=class{constructor(e){this.parser=e,this.name=Qe.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:gn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},Jh=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:gn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},jh=class{constructor(e){this.parser=e,this.name=Qe.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},Qh=class{constructor(e){this.parser=e,this.name=Qe.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},eu=class{constructor(e){this.parser=e,this.name=Qe.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},tu=class{constructor(e){this.name=Qe.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(f),u,h,d,s.mode,s.filter),f})})}else return null}},nu=class{constructor(e){this.name=Qe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==An.TRIANGLES&&c.mode!==An.TRIANGLE_STRIP&&c.mode!==An.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,f=[];for(let g of h){let x=new Be,p=new U,m=new Vt,v=new U(1,1,1),_=new zi(g.geometry,g.material,d);for(let b=0;b<d;b++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,b),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,b),l.SCALE&&v.fromBufferAttribute(l.SCALE,b),_.setMatrixAt(b,x.compose(p,m,v));for(let b in l)if(b==="_COLOR_0"){let P=l[b];_.instanceColor=new fs(P.array,P.itemSize,P.normalized)}else b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"&&g.geometry.setAttribute(b,l[b]);At.prototype.copy.call(_,g),this.parser.assignFinalMaterial(_),f.push(_)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}},Ep="glTF",oo=12,yp={JSON:1313821514,BIN:5130562},iu=class{constructor(e){this.name=Qe.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,oo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Ep)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-oo,r=new DataView(e,oo),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===yp.JSON){let c=new Uint8Array(e,oo+o,a);this.content=n.decode(c)}else if(l===yp.BIN){let c=oo+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},su=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Qe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let u in o){let h=lu[u]||u.toLowerCase();a[h]=o[u]}for(let u in e.attributes){let h=lu[u]||u.toLowerCase();if(o[u]!==void 0){let d=n.accessors[e.attributes[u]],f=br[d.componentType];c[h]=f.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){s.decodeDracoFile(u,function(f){for(let g in f.attributes){let x=f.attributes[g],p=l[g];p!==void 0&&(x.normalized=p)}h(f)},a,c,jt,d)})})}},ru=class{constructor(){this.name=Qe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},ou=class{constructor(){this.name=Qe.KHR_MESH_QUANTIZATION}},Va=class extends Fi{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=s-t,h=(n-t)/u,d=h*h,f=d*h,g=e*c,x=g-c,p=-2*f+3*d,m=f-d,v=1-p,_=m-d+h;for(let b=0;b!==a;b++){let P=o[x+b+a],T=o[x+b+l]*u,w=o[g+b+a],E=o[g+b]*u;r[b]=v*P+_*T+p*w+m*E}return r}},Zv=new Vt,au=class extends Va{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return Zv.fromArray(r).normalize().toArray(r),r}},An={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},br={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},vp={9728:$t,9729:ln,9984:eh,9985:Vr,9986:Vs,9987:qn},Mp={33071:ui,33648:qr,10497:cn},zh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},lu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Zi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},$v={CUBICSPLINE:void 0,LINEAR:nr,STEP:tr},Oh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Jv(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Ve({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Kn})),i.DefaultMaterial}function xs(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Mi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function jv(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){let h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){let h=e[c];if(n){let d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;o.push(d)}if(s){let d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;a.push(d)}if(r){let d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let u=c[0],h=c[1],d=c[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function Qv(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function eM(i){let e,t=i.extensions&&i.extensions[Qe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Fh(t.attributes):e=i.indices+":"+Fh(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Fh(i.targets[n]);return e}function Fh(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function cu(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function tM(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var nM=new Be,hu=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Kv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new ur(this.options.manager):this.textureLoader=new Ma(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Qr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return xs(r,a,s),Mi(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,u]of o.children.entries())r(u,a.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Qe.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(Vi.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=zh[s.type],a=br[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new je(c,o,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=zh[s.type],c=br[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,x,p;if(f&&f!==h){let m=Math.floor(d/f),v="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count,_=t.cache.get(v);_||(x=new c(a,m*f,s.count*f/u),_=new or(x,f/u),t.cache.add(v,_)),p=new us(_,l,d%f/u,g)}else a===null?x=new c(s.count*l):x=new c(a,d,s.count*l),p=new je(x,l,g);if(s.sparse!==void 0){let m=zh.SCALAR,v=br[s.sparse.indices.componentType],_=s.sparse.indices.byteOffset||0,b=s.sparse.values.byteOffset||0,P=new v(o[1],_,s.sparse.count*m),T=new c(o[2],b,s.sparse.count*l);a!==null&&(p=new je(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let w=0,E=P.length;w<E;w++){let y=P[w];if(p.setX(y,T[w*l]),l>=2&&p.setY(y,T[w*l+1]),l>=3&&p.setZ(y,T[w*l+2]),l>=4&&p.setW(y,T[w*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=g}return p})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return u.magFilter=vp[d.magFilter]||ln,u.minFilter=vp[d.minFilter]||qn,u.wrapS=Mp[d.wrapS]||cn,u.wrapT=Mp[d.wrapT]||cn,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==$t&&u.minFilter!==ln,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let o=s.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;let d=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(l).then(function(h){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(x){let p=new Ht(x);p.needsUpdate=!0,d(p)}),t.load(Vi.resolveURL(h,r.path),g,void 0,f)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),Mi(h,o),h.userData.mimeType=o.mimeType||tM(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Qe.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[Qe.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[Qe.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Oi,hn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new jr,hn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Ve}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},l=r.extensions||{},c=[];if(l[Qe.KHR_MATERIALS_UNLIT]){let h=s[Qe.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{let h=r.pbrMetallicRoughness||{};if(a.color=new ye(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){let d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],jt),a.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,mt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=gt);let u=r.alphaMode||Oh.OPAQUE;if(u===Oh.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Oh.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==ke&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new be(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==ke&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==ke){let h=r.emissiveFactor;a.emissive=new ye().setRGB(h[0],h[1],h[2],jt)}return r.emissiveTexture!==void 0&&o!==ke&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,mt)),Promise.all(c).then(function(){let h=new o(a);return r.name&&(h.name=r.name),Mi(h,r),t.associations.set(h,{materials:e}),r.extensions&&xs(s,h,r),h})}createUniqueName(e){let t=ot.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[Qe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return bp(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],u=eM(c),h=s[u];if(h)o.push(h.promise);else{let d;c.extensions&&c.extensions[Qe.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=bp(new at,c,t),s[u]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let u=o[l].material===void 0?Jv(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let f=0,g=u.length;f<g;f++){let x=u[f],p=o[f],m,v=c[f];if(p.mode===An.TRIANGLES||p.mode===An.TRIANGLE_STRIP||p.mode===An.TRIANGLE_FAN||p.mode===void 0)m=r.isSkinnedMesh===!0?new ar(x,v):new le(x,v),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),p.mode===An.TRIANGLE_STRIP?m.geometry=Uh(m.geometry,wa):p.mode===An.TRIANGLE_FAN&&(m.geometry=Uh(m.geometry,no));else if(p.mode===An.LINES)m=new ua(x,v);else if(p.mode===An.LINE_STRIP)m=new cr(x,v);else if(p.mode===An.LINE_LOOP)m=new da(x,v);else if(p.mode===An.POINTS)m=new gi(x,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&Qv(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),Mi(m,r),p.extensions&&xs(s,m,p),t.assignFinalMaterial(m),h.push(m)}for(let f=0,g=h.length;f<g;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&xs(s,h[0],r),h[0];let d=new Ne;r.extensions&&xs(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=h.length;f<g;f++)d.add(h[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new zt(uf.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Ui(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Mi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],l=[];for(let c=0,u=o.length;c<u;c++){let h=o[c];if(h){a.push(h);let d=new Be;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new lr(a,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,d=s.channels.length;h<d;h++){let f=s.channels[h],g=s.samplers[f.sampler],x=f.target,p=x.node,m=s.parameters!==void 0?s.parameters[g.input]:g.input,v=s.parameters!==void 0?s.parameters[g.output]:g.output;x.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",v)),c.push(g),u.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){let d=h[0],f=h[1],g=h[2],x=h[3],p=h[4],m=[];for(let v=0,_=d.length;v<_;v++){let b=d[v],P=f[v],T=g[v],w=x[v],E=p[v];if(b===void 0)continue;b.updateMatrix&&b.updateMatrix();let y=n._createAnimationTracks(b,P,T,w,E);if(y)for(let M=0;M<y.length;M++)m.push(y[M])}return new Hi(r,void 0,m)})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,nM)});for(let f=0,g=h.length;f<g;f++)u.add(h[f]);return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new ds:c.length>1?u=new Ne:c.length===1?u=c[0]:u=new At,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),Mi(u,r),r.extensions&&xs(n,u,r),r.matrix!==void 0){let h=new Be;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new Ne;n.name&&(r.name=s.createUniqueName(n.name)),Mi(r,n),n.extensions&&xs(t,r,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);let c=u=>{let h=new Map;for(let[d,f]of s.associations)(d instanceof hn||d instanceof Ht)&&h.set(d,f);return u.traverse(d=>{let f=s.associations.get(d);f!=null&&h.set(d,f)}),h};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,l=[];Zi[r.path]===Zi.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(Zi[r.path]){case Zi.weights:c=xi;break;case Zi.rotation:c=_i;break;case Zi.position:case Zi.scale:c=yi;break;default:switch(n.itemSize){case 1:c=xi;break;case 2:case 3:default:c=yi;break}break}let u=s.interpolation!==void 0?$v[s.interpolation]:nr,h=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){let g=new c(l[d]+"."+Zi[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=cu(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof _i?au:Va;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function iM(i,e,t){let n=e.attributes,s=new Gt;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new U(l[0],l[1],l[2]),new U(c[0],c[1],c[2])),a.normalized){let u=cu(br[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new U,l=new U;for(let c=0,u=r.length;c<u;c++){let h=r[c];if(h.POSITION!==void 0){let d=t.json.accessors[h.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let x=cu(br[d.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new nn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function bp(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(let o in n){let a=lu[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return Je.workingColorSpace!==jt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Je.workingColorSpace}" not supported.`),Mi(i,e),iM(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?jv(i,e.targets,t):i})}function uu(i){let e=new Map,t=new Map,n=i.clone();return Sp(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Sp(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)Sp(i.children[n],e.children[n],t)}var Wa=i=>ot.sanitizeNodeName(i),Ap={hips:"root",spine:"hips",chest:"spine",head:"chest","upperarm.l":"chest","lowerarm.l":"upperarm.l","wrist.l":"lowerarm.l","hand.l":"wrist.l","handslot.l":"hand.l","upperarm.r":"chest","lowerarm.r":"upperarm.r","wrist.r":"lowerarm.r","hand.r":"wrist.r","handslot.r":"hand.r","upperleg.l":"hips","lowerleg.l":"upperleg.l","foot.l":"lowerleg.l","toes.l":"foot.l","upperleg.r":"hips","lowerleg.r":"upperleg.r","foot.r":"lowerleg.r","toes.r":"foot.r"},_s=["root",...Object.keys(Ap)],Rp={hipsY:.406,armLen:.576};async function Cp(i,e){let t=await i.loadAsync(e),n={};t.scene.traverse(r=>{for(let o of _s)r.name===Wa(o)&&(n[o]={q:r.quaternion.clone(),p:r.position.clone()})});for(let r of _s)if(!n[r])throw new Error("anim library is missing bone "+r);let s={};for(let r of t.animations)s[r.name]=r;return{rest:n,clips:s}}function sM(i){let e=new at;for(let t of["position","normal","uv"]){let n=i.getAttribute(t);if(!n)continue;let s=new Float32Array(n.count*n.itemSize);for(let r=0;r<n.count;r++)for(let o=0;o<n.itemSize;o++)s[r*n.itemSize+o]=n.getComponent(r,o);e.setAttribute(t,new je(s,n.itemSize))}i.index&&e.setIndex(Array.from(i.index.array));for(let t of i.groups)e.addGroup(t.start,t.count,t.materialIndex);return e}function rM(i,e,t){i.updateMatrixWorld(!0);let n=[],s=[];if(i.traverse(l=>{if(!l.isMesh)return;let c=sM(l.geometry);c.applyMatrix4(l.matrixWorld),c.attributes.normal||c.computeVertexNormals(),n.push(c),s.push(l.material)}),!n.length)throw new Error("model has no meshes");let r=n.length===1?n[0]:_p(n,!0);r.rotateY(e),r.computeBoundingBox();let o=r.boundingBox,a=t/(o.max.y-o.min.y);return r.translate(-(o.min.x+o.max.x)/2,-o.min.y,-(o.min.z+o.max.z)/2),r.scale(a,a,a),r.computeBoundingBox(),{geo:r,mats:s.length===1?s[0]:s}}function oM(i,e,t){let n=i.array,s=i.count,r={x:e*(t.shoulder??.105),y:e*.815},o=l=>{let c=null,u=-1;for(let h=0;h<s;h++){let d=n[h*3]*l,f=n[h*3+1];f>e*.36&&f<e*.64&&d>u&&(u=d,c=[n[h*3],f,n[h*3+2]])}return c},a=l=>{let c=0,u=0;for(let h=0;h<s;h++){let d=n[h*3];n[h*3+1]<e*.07&&d*l>e*.01&&(c+=d,u++)}return u?c/u:l*e*.07};return{sh:r,tipL:o(1),tipR:o(-1),ankleL:a(1),ankleR:a(-1),hipsY:e*.5,spineY:e*.6,chestY:e*.7,headY:e*.855,legX:e*(t.hipWidth??.085),legTopY:e*.49}}function aM(i,e,t){let n={};for(let o of _s){let a=new ds;a.name=Wa(o),a.quaternion.copy(i.rest[o].q),n[o]=a}for(let[o,a]of Object.entries(Ap))n[a].add(n[o]);n.hips.position.set(0,e.hipsY,0),n.spine.position.set(0,e.spineY-e.hipsY,0),n.chest.position.set(0,e.chestY-e.spineY,0),n.head.position.set(0,e.headY-e.chestY,0);let s=new U(0,1,0),r=(o,a,l,c)=>{let u=s.clone().applyQuaternion(a),h=new U().subVectors(c,l).normalize();o.quaternion.copy(new Vt().setFromUnitVectors(u,h).multiply(a))};for(let[o,a,l,c]of[["l",1,e.tipL,e.ankleL],["r",-1,e.tipR,e.ankleR]]){let u=new U(a*e.sh.x,e.sh.y,0),h=l?new U(...l):u.clone().add(new U(a*.2*t,-.38*t,0)),d=u.distanceTo(h);n["upperarm."+o].position.set(a*e.sh.x,e.sh.y-e.chestY,0),r(n["upperarm."+o],i.rest["upperarm."+o].q,u,h),n["lowerarm."+o].position.set(0,d*.42,0),n["wrist."+o].position.set(0,d*.38,0),n["hand."+o].position.set(0,d*.08,0),n["handslot."+o].position.copy(i.rest["handslot."+o].p).multiplyScalar(d/Rp.armLen);let f=new U(a*e.legX,e.legTopY,0),g=new U(c,t*.045,0),x=f.distanceTo(g);n["upperleg."+o].position.set(a*e.legX,e.legTopY-e.hipsY,0),r(n["upperleg."+o],i.rest["upperleg."+o].q,f,g),n["lowerleg."+o].position.set(0,x*.5,0),n["foot."+o].position.set(0,x*.5,0),n["toes."+o].position.set(0,t*.075,0)}return n}var lM=["hips","spine","chest","head","upperarm.l","lowerarm.l","wrist.l","hand.l","upperarm.r","lowerarm.r","wrist.r","hand.r","upperleg.l","lowerleg.l","foot.l","upperleg.r","lowerleg.r","foot.r"],wp={hips:"spine",spine:"chest",chest:"head","upperarm.l":"lowerarm.l","lowerarm.l":"wrist.l","wrist.l":"hand.l","upperarm.r":"lowerarm.r","lowerarm.r":"wrist.r","wrist.r":"hand.r","upperleg.l":"lowerleg.l","lowerleg.l":"foot.l","foot.l":"toes.l","upperleg.r":"lowerleg.r","lowerleg.r":"foot.r","foot.r":"toes.r"},Ga=new U,Tp=new U,cM=new U;function hM(i,e,t){Ga.subVectors(t,e),Tp.subVectors(i,e);let n=Math.max(0,Math.min(1,Tp.dot(Ga)/Math.max(Ga.lengthSq(),1e-9)));return i.distanceTo(cM.copy(e).addScaledVector(Ga,n))}function uM(i,e,t,n){let s={};_s.forEach((f,g)=>{s[f]=g});let r=lM.map(f=>{let g=e[f].getWorldPosition(new U),x;if(wp[f])x=e[wp[f]].getWorldPosition(new U);else if(f==="head")x=g.clone().add(new U(0,n*.15,0));else{let m=e["wrist."+f.slice(-1)].getWorldPosition(new U);x=g.clone().add(g.clone().sub(m).normalize().multiplyScalar(n*.1))}let p=f.endsWith(".l")?1:f.endsWith(".r")?-1:0;return{n:f,i:s[f],a:g,b:x,side:p,leg:f.includes("leg")||f.startsWith("foot"),arm:f.includes("arm")||f.startsWith("wrist")||f.startsWith("hand")}}),o=i.attributes.position,a=o.count,l=new Uint16Array(a*4),c=new Float32Array(a*4),u=new U,h=n*.02,d=[];for(let f=0;f<a;f++){u.fromBufferAttribute(o,f),d.length=0;for(let x of r){if(x.side&&u.x*x.side<-n*.02||x.leg&&u.y>t.hipsY+n*.02||x.arm&&(u.y<n*.3||Math.abs(u.x)<n*.07)||x.n==="head"&&u.y<n*.78)continue;let p=hM(u,x.a,x.b);x.arm&&p>n*.075||x.leg&&p>n*.1||d.push([x.i,1/Math.pow(p+h,4)])}d.sort((x,p)=>p[1]-x[1]);let g=0;for(let x=0;x<4&&x<d.length;x++)g+=d[x][1];for(let x=0;x<4;x++)l[f*4+x]=d[x]?d[x][0]:0,c[f*4+x]=d[x]?d[x][1]/(g||1):0}i.setAttribute("skinIndex",new sr(l,4)),i.setAttribute("skinWeight",new tt(c,4))}var Er=["spine","chest","head","upperarm.l","lowerarm.l","wrist.l","hand.l","handslot.l","upperarm.r","lowerarm.r","wrist.r","hand.r","handslot.r"],ao=_s.filter(i=>!Er.includes(i));function dM(i,e,t=null){let n=new Set((t||_s).map(Wa)),s=[];for(let r of i.tracks){let{nodeName:o,propertyName:a}=ot.parseTrackName(r.name);if(n.has(o)){if(a==="quaternion")s.push(r.clone());else if(a==="position"&&o===Wa("hips")){let l=r.clone(),c=e/Rp.hipsY;for(let u=0;u<l.values.length;u++)l.values[u]*=c;s.push(l)}}}return new Hi(i.name+(t===Er?":upper":t===ao?":lower":""),i.duration,s)}function du(i,e,t={}){let n=t.height??1.8,{geo:s,mats:r}=rM(i,t.yaw??-Math.PI/2,n),o=oM(s.attributes.position,n,t.build||{}),a=aM(e,o,n),l=new ar(s,r);l.add(a.root),l.updateMatrixWorld(!0),uM(s,a,o,n),l.bind(new lr(_s.map(g=>a[g]))),s.boundingSphere=new nn(new U(0,n*.5,0),n*.9);let c={},u=(g,x=null)=>{let p=g+"|"+(x===Er?"u":x===ao?"l":"f");if(c[p])return c[p];let m=e.clips[g];return m?c[p]=dM(m,o.hipsY,x):null},h=new ps(l),d={};return{mesh:l,bones:a,mixer:h,action:g=>{if(d[g])return d[g];let x=u(g);return x?d[g]=h.clipAction(x):null},clip:u,landmarks:o,height:n}}function Ip(i,{length:e=1,flip:t=!1,grip:n=.12,twist:s=0}={}){i.updateMatrixWorld(!0);let r=[],o=new U;i.traverse(p=>{if(!p.isMesh)return;let m=p.geometry.attributes.position;for(let v=0;v<m.count;v+=3)r.push(new U(m.getX(v),m.getY(v),m.getZ(v)).applyMatrix4(p.matrixWorld))});let a=r.reduce((p,m)=>p.add(m),new U).multiplyScalar(1/r.length),l=[[0,0,0],[0,0,0],[0,0,0]];for(let p of r){let m=[p.x-a.x,p.y-a.y,p.z-a.z];for(let v=0;v<3;v++)for(let _=0;_<3;_++)l[v][_]+=m[v]*m[_]}let c=new U(1,1,1).normalize();for(let p=0;p<40;p++)c=new U(l[0][0]*c.x+l[0][1]*c.y+l[0][2]*c.z,l[1][0]*c.x+l[1][1]*c.y+l[1][2]*c.z,l[2][0]*c.x+l[2][1]*c.y+l[2][2]*c.z).normalize();t&&c.negate();let u=new Vt().setFromUnitVectors(c,new U(0,1,0)),h=1/0,d=-1/0;for(let p of r){let m=p.clone().sub(a).applyQuaternion(u).y;h=Math.min(h,m),d=Math.max(d,m)}let f=e/(d-h);i.position.sub(a);let g=new Ne;g.add(i),g.quaternion.copy(u),g.scale.setScalar(f),g.position.set(0,-h*f-n*e,0);let x=new Ne;return x.add(g),x.rotation.y=s,x}var Pp="./assets/",fu={melvinci:{height:1.86,idle:"Idle",idleDrawn:"2H_Melee_Idle",run:"Running_A",blade:["2H_Melee_Attack_Slice","2H_Melee_Attack_Chop","2H_Melee_Attack_Spin"],weapons:[{file:"melvinci_blade",slot:"handslot.r",length:1.35,grip:.1,glow:"#4CE0E0",drawOn:"melee",sheath:{bone:"chest",pos:[.2,.42,-.3],rot:[.2,0,Math.PI-.62]}},{file:"melvinci_cannon",slot:"handslot.l",length:.42,grip:.45}],castHand:"handslot.l"},kimaya:{height:1.74,idle:"Idle",idleDrawn:"Idle",run:"Running_B",blade:["1H_Melee_Attack_Slice_Diagonal","1H_Melee_Attack_Slice_Horizontal","1H_Melee_Attack_Stab"],weapons:[{file:"kimaya_saber",slot:"handslot.r",length:1,grip:.14,glow:"#ff7ad9",drawOn:"melee",sheath:{bone:"hips",pos:[.24,.02,.02],rot:[.15,0,Math.PI-.3]}},{file:"kimaya_scepter",slot:"handslot.l",length:1.25,grip:.38,glow:"#3ce08f",drawOn:"cast",sheath:{bone:"chest",pos:[.03,-.23,-.3],rot:[-.15,0,-.36]}}],castHand:"wrist.l",bracers:["wrist.l","wrist.r"]}},Lp={grunt:{file:"grunt",rig:!0,height:2,move:"Running_A",attack:"Unarmed_Melee_Attack_Punch_A",idle:"Unarmed_Idle"},shooter:{file:"shooter",rig:!0,height:2.2,move:"Walking_A",attack:"1H_Ranged_Shoot",idle:"1H_Ranged_Aiming"},brute:{file:"brute",rig:!0,height:2.8,move:"Walking_B",attack:"2H_Melee_Attack_Chop",idle:"2H_Melee_Idle"},flyer:{file:"flyer",rig:!1,size:1.5}},fM=["barrel_large","barrel_small_stack","box_stacked","keg_decorated","trunk_large_A","trunk_medium_B","banner_patternA_red","banner_patternA_yellow","banner_shield_red","table_medium_decorated_A","candle_triple","shelf_small_candles","rubble_large","sword_shield_broken","coin_stack_large"],Dp={engine:{file:"boss_engine",size:4.6,y:0},censor:{file:"boss_censor",size:5.2,y:-2.6},redactor:{file:"boss_redactor",size:3.8,y:-.2}};async function Up(i=()=>{}){let e=new Ha,t={heroes:{},foes:{},bosses:{},weapons:{},props:{},lib:null,missing:[]},n=async(a,l)=>{try{return await e.loadAsync(Pp+a)}catch{return t.missing.push(l),null}},s=0,r=8+Object.keys(Lp).length+Object.keys(Dp).length,o=()=>i(++s/r);t.lib=await Cp(e,Pp+"anims/kaykit_rig.glb").catch(()=>(t.missing.push("anim library"),null)),o(),await Promise.all(["melvinci_blade","melvinci_cannon","kimaya_chakram","kimaya_saber","kimaya_scepter"].map(a=>n(`models/weapons/${a}.glb`,a).then(l=>{l&&(t.weapons[a]=l.scene),o()})));for(let a of Object.keys(fu)){let l=await n(`models/heroes/${a}.glb`,a);if(o(),!l||!t.lib)continue;let c=fu[a],u=du(l.scene,t.lib,{height:c.height});for(let h of c.weapons){let d=t.weapons[h.file];if(!d)continue;let f=new Ne;f.name=`wpn_${h.file}`,f.add(Ip(d.clone(!0),h)),u.bones[h.slot].add(f)}t.heroes[a]=u}for(let[a,l]of Object.entries(Lp)){let c=await n(`models/foes/${l.file}.glb`,l.file);o(),c&&(l.rig&&t.lib?t.foes[a]={rig:du(c.scene,t.lib,{height:l.height}),spec:l}:t.foes[a]={scene:Np(c.scene,l.size),spec:l})}await Promise.all(fM.map(a=>n(`props/${a}.glb`,a).then(l=>{l&&(t.props[a]=l.scene)})));for(let[a,l]of Object.entries(Dp)){let c=await n(`models/foes/${l.file}.glb`,l.file);o(),c&&(t.bosses[a]=Np(c.scene,l.size,l.y))}return t}function Np(i,e,t=0){let n=new Ne;n.add(i),n.rotation.y=-Math.PI/2,n.updateMatrixWorld(!0);let s=new Gt().setFromObject(n).getSize(new U),r=e/Math.max(s.x,s.y,s.z);n.scale.setScalar(r),n.updateMatrixWorld(!0);let o=new Gt().setFromObject(n),a=o.getCenter(new U);n.position.set(-a.x,-o.min.y+t,-a.z);let l=new Ne;return l.add(n),l}function qa(i){let e=[];return i.traverse(t=>{if(!t.isMesh)return;let n=s=>{let r=s.clone();return r.userData.baseEmissive=r.emissive?r.emissive.getHex():0,r.userData.baseEI=r.emissiveIntensity??0,e.push(r),r};t.material=Array.isArray(t.material)?t.material.map(n):n(t.material),t.castShadow=!0}),e}function $i(i,e,t="#ffffff"){for(let n of i)n.emissive&&(e>0?(n.emissive.set(t),n.emissiveIntensity=1.4*e):(n.emissive.setHex(n.userData.baseEmissive),n.emissiveIntensity=n.userData.baseEI))}function zp(i,e){let t=new Map,n=(u,h)=>{let d=u+(h===Er?"|u":h===ao?"|l":"|f");if(t.has(d))return t.get(d);let f=e.clip(u,h);if(!f)return null;let g=i.clipAction(f);return t.set(d,g),g},s=null,r=null,o=null,a=0,l="",c=(u,h,d,f=1)=>(u===h||(u&&u.fadeOut(d),h&&(h.setLoop(ch,1/0),h.reset().setEffectiveTimeScale(f).setEffectiveWeight(1).fadeIn(d).play())),h);return{loop(u,h=null,d=1){if(o)return;let f=n(u,h?ao:null),g=h?n(h,Er):null;s=c(s,f,.18,d),s&&s.setEffectiveTimeScale(d),r=c(r,g,.12)},oneShot(u,h=1,d=!1){let f=n(u,null);return f?(s&&s.fadeOut(.08),r&&r.fadeOut(.08),s=null,r=null,o&&o!==f&&o.fadeOut(.06),f.setLoop(lh,1),f.clampWhenFinished=d,o=f,l=u,f.reset().setEffectiveTimeScale(h).setEffectiveWeight(1).fadeIn(.06).play(),a=f.getClip().duration/h,a):0},update(u){o&&(a-=u,a<=0&&!o.clampWhenFinished&&(o.fadeOut(.15),o=null)),i.update(u)},get busy(){return!!o},get shotName(){return o?l:""}}}function pM(){let i=document.createElement("canvas");i.width=256,i.height=128;let e=i.getContext("2d");e.strokeStyle="rgba(220,255,255,.95)",e.lineWidth=2;for(let n=0;n<5;n++)for(let s=0;s<8;s++){let r=s*34+n%2*17,o=n*30+8;e.beginPath();for(let a=0;a<6;a++){let l=a*Math.PI/3+Math.PI/6;e.lineTo(r+Math.cos(l)*15,o+Math.sin(l)*15)}e.closePath(),e.stroke()}let t=new wn(i);return t.colorSpace=mt,t.wrapS=t.wrapT=cn,t}function mM(i,e){let s=new Float32Array(132),r=new Float32Array(22*2*3),o=[];for(let g=0;g<21;g++){let x=g*2;o.push(x,x+1,x+2,x+1,x+3,x+2)}let a=new at;a.setAttribute("position",new je(s,3)),a.setAttribute("color",new je(r,3)),a.setIndex(o);let l=new ke({vertexColors:!0,transparent:!0,blending:ct,depthWrite:!1,side:gt}),c=new le(a,l);c.frustumCulled=!1,c.visible=!1,i.add(c);let u=new ye(e),h=new ye("#ffffff"),d=new ye,f=[];return{add(g,x){f.unshift({b:g.clone(),t:x.clone(),age:0}),f.length>22&&f.pop()},update(g){for(let x of f)x.age+=g;for(;f.length&&f[f.length-1].age>.2;)f.pop();if(c.visible=f.length>1,!!c.visible){for(let x=0;x<22;x++){let p=f[Math.min(x,f.length-1)],m=x<f.length?Math.max(0,1-p.age/.2)*(1-x/22):0;s.set([p.b.x,p.b.y,p.b.z],x*6),s.set([p.t.x,p.t.y,p.t.z],x*6+3),d.copy(u).lerp(h,.65*m),r.set([u.r*m*.35,u.g*m*.35,u.b*m*.35],x*6),r.set([d.r*m,d.g*m,d.b*m],x*6+3)}a.attributes.position.needsUpdate=!0,a.attributes.color.needsUpdate=!0}},dispose(){i.remove(c),a.dispose(),l.dispose()}}}var Xa=i=>ot.sanitizeNodeName(i);function Op(i,e,t){let n=e&&e.heroes[t];if(!n)return null;let s=Ut[t],r=fu[t],o=new Ne;i.add(o);let a=uu(n.mesh);o.add(a);let l=qa(a),c={};a.traverse(D=>{D.isBone&&(c[D.name]=D)});let u=zp(new ps(a),n);o.add(Hn(.7));let h=new Jn(s.aura,6,8,2);h.position.y=2.1,o.add(h);let d=new le(new sn(.55,.85,48),new ke({color:s.aura,transparent:!0,opacity:.5,blending:ct,depthWrite:!1,side:gt}));d.rotation.x=-Math.PI/2,d.position.y=.05,o.add(d);let f=c[Xa(r.castHand)],g=bt("#C9A84C",.6,.85);f&&f.add(g);let x=new le(new sn(.5,xr,32,1,-jn,jn*2),new ke({color:s.aura,transparent:!0,opacity:0,blending:ct,depthWrite:!1,side:gt}));x.rotation.x=-Math.PI/2,x.rotation.z=-Math.PI/2,x.position.y=1.1,o.add(x);let p=new ke({map:pM(),color:s.accent,transparent:!0,opacity:0,blending:ct,depthWrite:!1,side:gt}),m=new le(new vt(1.15,1.15,2.3,28,1,!0,-qi,qi*2),p);m.position.y=1.15,o.add(m);let v=(r.bracers||[]).map(D=>{let O=c[Xa(D)];if(!O)return null;let k=new Ve({color:"#C9A84C",metalness:.8,roughness:.25,emissive:s.aura,emissiveIntensity:.6}),K=new le(new $n(.075,.022,8,24),k);K.rotation.x=Math.PI/2,O.add(K);let Z=bt(s.aura,.35,.6);return O.add(Z),{ringMat:k,glow:Z}}).filter(Boolean),_=r.weapons.filter(D=>D.sheath).map(D=>{let O=a.getObjectByName(`wpn_${D.file}`);if(!O)return null;let k=c[Xa(D.slot)],K=c[Xa(D.sheath.bone)],Z=bt(D.glow||s.aura,.1,0);return k.add(Z),{w:D,holder:O,hand:k,rest:K,spark:Z,drawn:!1,igniteT:0,sparkT:0,trail:mM(i,D.glow||s.aura),baseL:new U(0,D.length*.28,0),tipL:new U(0,D.length*(.97-D.grip),0)}}).filter(Boolean);function b(D){D.rest.add(D.holder),D.holder.position.set(...D.w.sheath.pos),D.holder.rotation.set(...D.w.sheath.rot),D.holder.scale.setScalar(1),D.drawn=!1,D.sparkT=.22}function P(D){D.drawn||(D.hand.add(D.holder),D.holder.position.set(0,0,0),D.holder.rotation.set(0,0,0),D.drawn=!0,D.igniteT=.14,D.sparkT=.25)}for(let D of _)b(D);let T=0,w=(D="melee")=>{for(let O of _)(O.w.drawOn||"melee")===D?P(O):O.drawn&&b(O);T=D==="cast"?1.2:1.7},E=0,y=0,M=!0,R=0,S=!1,I=0,B=new U,z=new U;function L(D,O,k){let K=k.y||0;if(o.position.set(k.x,K,k.z),o.rotation.y=Math.atan2(k.fx,k.fz),o.visible=!(k.alive&&k.invuln>0&&Math.floor(O*14)%2===0),!k.alive&&M&&u.oneShot("Death_A",1,!0),M=k.alive,k.alive){if(k.dashing&&!k.longDash&&R<=0){let ne=k.mvx*k.fx+k.mvz*k.fz,pe=k.mvx*k.fz-k.mvz*k.fx,j=Math.abs(ne)>=Math.abs(pe)?ne>=0?"Dodge_Forward":"Dodge_Backward":pe>0?"Dodge_Left":"Dodge_Right";R=u.oneShot(j,2.6)}R>0&&(R-=D),k.air&&!S&&!k.dashing&&u.oneShot("Jump_Start",2.4),!k.air&&S&&u.oneShot("Jump_Land",2.8),S=!!k.air;let Z=k.ward?"Blocking":k.firing||k.charge>.05?"Spellcasting":null,Te=_.some(ne=>ne.drawn)?r.idleDrawn:r.idle,$=1;if(k.air)Te="Jump_Idle";else if(k.mv>.1){let ne=k.mvx*k.fx+k.mvz*k.fz,pe=k.mvx*k.fz-k.mvz*k.fx;ne>.5?(Te=r.run,$=k.longDash?2.2:k.sprint?1.45:1):ne<-.5?(Te="Walking_Backwards",$=1.6):Te=pe>0?"Running_Strafe_Left":"Running_Strafe_Right"}u.loop(Te,Z,$)}if(u.update(D),T>0&&(T-=D,T<=0))if(u.busy)T=.15;else for(let Z of _)Z.drawn&&b(Z);for(let Z of _){if(Z.igniteT>0){Z.igniteT-=D;let Me=1-Math.max(0,Z.igniteT)/.14;Z.holder.scale.set(1,.15+.85*Me,1)}Z.sparkT>0?(Z.sparkT-=D,Z.spark.material.opacity=Math.max(0,Z.sparkT/.25),Z.spark.scale.setScalar(.4+(1-Z.sparkT/.25)*1.6)):Z.spark.material.opacity=0}p.opacity+=((k.ward?.75:0)-p.opacity)*Math.min(1,D*14),p.map.offset.y=O*.15,p.color.set(k.parryFlash>0?"#ffffff":s.accent),x.material.opacity=0,I>0&&(I-=D);for(let Z of _)I>0&&Z.drawn&&Z.w.drawOn!=="cast"&&(Z.holder.updateWorldMatrix(!0,!1),Z.trail.add(Z.holder.localToWorld(B.copy(Z.baseL)),Z.holder.localToWorld(z.copy(Z.tipL)))),Z.trail.update(D);d.material.opacity=(k.air?.15:.35)+Math.sin(O*3)*.1+k.charge*.25,d.scale.setScalar(1+k.charge*.35),g.scale.setScalar(.5+k.charge*.9+(k.firing?.2:0));for(let Z of v){let Me=k.firing||k.charge>.05?1:0;Z.ringMat.emissiveIntensity+=(.6+Me*2.4+k.charge*2-Z.ringMat.emissiveIntensity)*Math.min(1,D*12),Z.glow.scale.setScalar(.3+Me*.35+k.charge*.6)}h.intensity=5+k.charge*4,y>0&&(y-=D,$i(l,Math.max(0,y/.2),"#ff2b2b"),y<=0&&$i(l,0))}return{group:o,update:L,dispose(){i.remove(o);for(let D of _)D.trail.dispose()},setWeaponColor(D){g.material.color.set(D)},playBlade(D){w("melee");let O=u.oneShot(r.blade[D%3],D===2?1.9:2.3);I=Math.min(.55,O)},playOnce(D,O=1){return/Melee/.test(D)?(w("melee"),I=.5):/Spellcast/.test(D)&&w("cast"),u.oneShot(D,O)},hurtFlash(){y=.2,u.busy||u.oneShot("Hit_A",1.8)},castPoint(D=new U){return f?f.getWorldPosition(D):D.set(o.position.x,1.2,o.position.z)},get bladeDrawn(){return _.some(D=>D.drawn)},radius:.5,isModel:!0}}function Fp(i,e){let t=i&&i.foes[e];if(!t)return null;let n=new Ne;if(n.add(Hn(e==="brute"?1.1:.7)),t.rig){let s=uu(t.rig.mesh);n.add(s);let r=zp(new ps(s),t.rig);r.loop(t.spec.idle),n.userData={mats:qa(s),drv:r,spec:t.spec,model:!0}}else{let s=t.scene.clone(!0);n.add(s),n.userData={mats:qa(s),spec:t.spec,model:!0,body:s}}return n}function Bp(i,e,t){let n=i&&i.bosses[e.key];if(!n)return null;e.mesh.traverse(r=>{r.isMesh&&(r.material.isMeshStandardMaterial||r.geometry&&r.geometry.type==="SphereGeometry")&&(r.visible=!1)});let s=n.clone(!0);return(t||e.mesh).add(s),{inst:s,mats:qa(s)}}var ys={root:"#ff2b2b",sacral:"#ff8a2b",solar:"#ffd23c",heart:"#3ce08f",throat:"#3cb8ff",third:"#6b5bff",crown:"#b56cff"},kp=["root","sacral","solar","heart","throat","third","crown"],Sr={max:100,kill:8,parry:12,bladeHit:3},gM={melvinci:[{id:"quake",key:"1",name:"ROOT QUAKE",chakra:"root",cd:6},{id:"beam",key:"2",name:"SOLAR MELANIN BEAM",chakra:"solar",cd:9},{id:"blink",key:"3",name:"THIRD-EYE STEP",chakra:"third",cd:7},{id:"nova",key:"F",name:"CROWN NOVA",chakra:"crown",ult:!0}],kimaya:[{id:"storm",key:"1",name:"CHAKRAM STORM",chakra:"throat",cd:7},{id:"lotus",key:"2",name:"HEART LOTUS",chakra:"heart",cd:14},{id:"sonic",key:"3",name:"SACRAL SONIC",chakra:"sacral",cd:8},{id:"starfall",key:"F",name:"ANCESTRAL STARFALL",chakra:"crown",ult:!0}]};function xM(i,e,t){return i.ult?t>=Sr.max:(e[i.id]||0)<=0}function _M(i,e,t=1){return Math.min(Sr.max,i+(Sr[e]||0)*t)}function Hp(i,e,t){let n=gM[t],s={},r=[],o=0,a=yM(n),l=(p,m,v)=>e.foes.list.filter(_=>_.alive&&Math.hypot(_.x-p,_.z-m)<v+_.r&&Math.abs(_.y-(e.H.y||0))<3.4);function c(p,m,v,_,b=10,P=0){let T=0;for(let E of l(p,m,v)){let y=E.x-p,M=E.z-m,R=Math.hypot(y,M)||1;P&&(E.stunT=Math.max(E.stunT||0,P)),e.foes.damage(E,_,!0,y/R,M/R,b),T++}let w=e.boss;return w&&w.alive&&w.awake&&Math.hypot(w.x-p,w.z-m)<v+w.r&&(w.damage(w.hit({x:p,z:m,y:1})?_*1.2:_*.5,!0),T++),T}let u=p=>ys[p],h=(p,m)=>{e.hero.playOnce&&e.hero.playOnce(p,m)};function d(p,m,v){e.fx.ring(p,m,v,3,.35),e.fx.spawn(p,1,m,v,18,{spd:5,up:3,size:.55}),c(p,m,2.6,3,10)}let f={quake(p){h("2H_Melee_Attack_Chop",2.2),r.push({t:.22,run:()=>{let m=u("root");e.fx.ring(p.x,p.z,m,6.5,.55),e.fx.ring(p.x,p.z,"#ffffff",3.5,.3),e.fx.spawn(p.x,.3,p.z,m,40,{spd:9,up:5,size:.6});for(let v=0;v<10;v++){let _=v/10*Math.PI*2;e.fx.spawn(p.x+Math.cos(_)*3,.2,p.z+Math.sin(_)*3,"#8a5a3a",4,{spd:3,up:6,size:.5})}c(p.x,p.z,5.5,4,18),e.shake(10),e.audio.sfx.slam()}})},beam(p){h("Spellcast_Long",1.1);let m=u("solar"),v=17,_=new le(new vt(.16,.16,v,10,1,!0),new ke({color:"#fff6c8",transparent:!0,opacity:.95,blending:ct,depthWrite:!1})),b=new le(new vt(.55,.55,v,14,1,!0),new ke({color:m,transparent:!0,opacity:.45,blending:ct,depthWrite:!1})),P=new Ne;_.position.y=v/2,b.position.y=v/2,P.add(_,b),P.rotation.x=Math.PI/2;let T=new Ne;T.add(P),i.add(T);let w=bt(m,2.2,.9);i.add(w);let E=0;e.audio.sfx.beamFire(),r.push({t:1.25,every:y=>{if(T.position.set(p.x+p.fx*.6,p.y+1.25,p.z+p.fz*.6),T.rotation.y=Math.atan2(p.fx,p.fz),w.position.copy(T.position),b.scale.x=b.scale.z=.85+Math.random()*.3,E-=y,E<=0){E=.08;for(let M=1;M<v;M+=1.2){let R=T.position.x+p.fx*M,S=T.position.z+p.fz*M;if(e.level.solidCell(Math.floor(R/2),Math.floor(S/2),p.y+.8))break;c(R,S,.9,.9,3)}e.fx.spawn(T.position.x+p.fx*(2+Math.random()*10),p.y+1.25,T.position.z+p.fz*(2+Math.random()*10),m,3,{spd:2,up:1.5,size:.45}),e.shake(2)}},run:()=>{i.remove(T),i.remove(w)}})},blink(p){let m=u("third");d(p.x,p.z,m);let v=p.x,_=p.z;for(let b=0;b<14;b++){let P=_r(e.level,v,_,_n,p.fx*.5,p.fz*.5,p.y);if(P.hit)break;v=P.x,_=P.z}p.x=v,p.z=_,p.invuln=Math.max(p.invuln,.45),h("Dodge_Forward",3),r.push({t:.12,run:()=>d(p.x,p.z,m)}),e.audio.sfx.dash()},storm(p){let m=u("throat");h("Spellcast_Raise",1.8);let v=[0,1,2].map(()=>{let P=e.assets&&e.assets.weapons.kimaya_chakram,T=new Ne;if(P){let w=P.clone(!0),E=new Gt().setFromObject(w),y=E.getSize(new U),M=.9/Math.max(y.x,y.y,y.z);w.scale.setScalar(M),w.position.copy(E.getCenter(new U).multiplyScalar(-M)),T.add(w)}return T.add(bt(m,1.8,.7)),i.add(T),T}),_=0,b=0;r.push({t:3.4,every:P=>{b+=P*7,_-=P,v.forEach((T,w)=>{let E=b+w*Math.PI*2/3,y=2.7;if(T.position.set(p.x+Math.cos(E)*y,p.y+1.1,p.z+Math.sin(E)*y),T.rotation.y+=P*20,_<=0){c(T.position.x,T.position.z,.9,1.3,6);for(let M of e.combat.ebullets)M.alive&&Math.hypot(M.x-T.position.x,M.z-T.position.z)<1&&(M.alive=!1,M.mesh.visible=!1)}Math.random()<P*20&&e.fx.spawn(T.position.x,1.1,T.position.z,m,1,{spd:1,up:.5,size:.4,life:.3})}),_<=0&&(_=.18)},run:()=>v.forEach(P=>i.remove(P))}),e.audio.sfx.charged()},lotus(p){let m=u("heart");h("Spellcast_Raise",1.4),p.lives<Na?(p.lives++,e.hud.flash("HEART LOTUS \u2014 A LIFE RESTORED",m)):e.hud.flash("HEART LOTUS",m),p.shield=Xi,p.wardBroken=0,p.invuln=Math.max(p.invuln,1);for(let v=0;v<3;v++)e.fx.ring(p.x,p.z,v?"#ffffff":m,3+v*1.5,.5+v*.15);for(let v=0;v<8;v++){let _=v/8*Math.PI*2;e.fx.spawn(p.x+Math.cos(_)*1.2,.2,p.z+Math.sin(_)*1.2,m,6,{spd:1,up:7,size:.55,grav:2})}c(p.x,p.z,4,3,14),e.audio.sfx.page()},sonic(p){let m=u("sacral");h("Spellcast_Shoot",2);let v=.62,_=9;for(let P=1;P<=_;P+=1.5)for(let T=-2;T<=2;T++){let w=Math.atan2(p.fz,p.fx)+T*v/2;e.fx.spawn(p.x+Math.cos(w)*P,1,p.z+Math.sin(w)*P,m,2,{spd:2,up:1,size:.5,life:.4})}for(let P of e.foes.list){if(!P.alive)continue;let T=P.x-p.x,w=P.z-p.z,E=Math.hypot(T,w);E>_||E<.01||(T*p.fx+w*p.fz)/E>Math.cos(v)&&(P.stunT=2.2,e.foes.damage(P,3,!0,T/E,w/E,16))}let b=e.boss;if(b&&b.alive&&b.awake){let P=b.x-p.x,T=b.z-p.z,w=Math.hypot(P,T)||1;w<_+b.r&&(P*p.fx+T*p.fz)/w>Math.cos(v)&&(b.damage(4,!0),b.stun=Math.max(b.stun||0,.8))}e.fx.ring(p.x+p.fx*2,p.z+p.fz*2,m,5,.4),e.shake(6),e.audio.sfx.beamTell()},nova(p){g(p,"Spellcast_Raise",kp.map(m=>ys[m]),10,12,"CROWN NOVA",!1)},starfall(p){g(p,"Spellcast_Long",["#fff6c8",ys.crown,ys.throat,"#ffd76a"],7,9,"ANCESTRAL STARFALL",!0)}};function g(p,m,v,_,b,P,T){h(m,.9),e.hud.flash(P,v[v.length-1]),e.hud.screenFlash&&e.hud.screenFlash(v[0]),e.shake(12),e.audio.sfx.bossWake(),p.invuln=Math.max(p.invuln,1.6);let w=[],E=e.boss;E&&E.alive&&E.awake&&Math.hypot(E.x-p.x,E.z-p.z)<22&&w.push({boss:E});for(let M of e.foes.list.filter(R=>R.alive).sort((R,S)=>Math.hypot(R.x-p.x,R.z-p.z)-Math.hypot(S.x-p.x,S.z-p.z)).slice(0,12))Math.hypot(M.x-p.x,M.z-p.z)<18&&w.push({e:M});let y=Math.max(7,w.length);for(let M=0;M<y;M++){let R=v[M%v.length],S=bt(R,1.6,1);S.add(bt("#ffffff",.4,1)),i.add(S);let I=w.length?w[M%w.length]:null,B=M/y*Math.PI*2,z=.5+M*(T?.1:.05),L=0;r.push({t:z+.55,every:D=>{L+=D;let O=I?I.boss?I.boss.x:I.e.x:p.x+Math.cos(B)*7,k=I?I.boss?I.boss.z:I.e.z:p.z+Math.sin(B)*7;if(L<z)T?S.position.set(O+Math.sin(L*9+M)*.3,16,k):S.position.set(p.x+Math.cos(B+L*3)*1.6,2.2+L,p.z+Math.sin(B+L*3)*1.6);else{let K=Math.min(1,(L-z)/.5),Z=T?O:p.x+Math.cos(B)*1.6,Me=T?16:2.2+z,Te=T?k:p.z+Math.sin(B)*1.6;S.position.set(Z+(O-Z)*K,Me+(.8-Me)*K*K,Te+(k-Te)*K)}Math.random()<D*30&&e.fx.spawn(S.position.x,S.position.y,S.position.z,R,1,{spd:.5,up:0,size:.5,life:.35,grav:0})},run:()=>{i.remove(S);let D=S.position.x,O=S.position.z;e.fx.ring(D,O,R,4,.45),e.fx.spawn(D,.8,O,R,24,{spd:7,up:5,size:.6}),I&&I.boss&&I.boss.alive&&I.boss.damage(b,!0),c(D,O,2.4,_,16),e.shake(5),e.audio.sfx.crate()}})}}function x(p,m,v){for(let _ of Object.keys(s))s[_]=Math.max(0,s[_]-p);if(m.alive){for(let _ of n)if(v(_.ult?"ult":"ab"+_.key)){if(!xM(_,s,o)){e.audio.beep(160,.08,"square",.06);continue}_.ult?o=0:s[_.id]=_.cd,_.ult||e.hud.flash(_.name,ys[_.chakra]),f[_.id](m)}}for(let _=r.length-1;_>=0;_--){let b=r[_];b.t-=p,b.every&&b.every(p),b.t<=0&&(r.splice(_,1),b.run&&b.run())}vM(a,n,s,o)}return{update:x,addMeter(p,m=1){o=_M(o,p,m)},get meter(){return o},set meter(p){o=p},cooldowns:s,kit:n,dispose(){for(let p of r)p.run&&p.run();r.length=0,a.root.remove()}}}function yM(i){let e=document.createElement("div");e.className="hotbar";let t=document.createElement("div");t.className="chakra";let n=document.createElement("i"),s=document.createElement("span");s.textContent="CHAKRA",t.append(n,s);let r=document.createElement("div");r.className="slots";let o={};for(let a of i){let l=document.createElement("div");l.className="slot"+(a.ult?" ult":""),l.style.setProperty("--c",ys[a.chakra]);let c=document.createElement("b");c.textContent=a.key;let u=document.createElement("em"),h=document.createElement("small");h.textContent=a.name,l.append(c,u,h),r.append(l),o[a.id]=l}return e.append(t,r),(document.getElementById("hud")||document.body).appendChild(e),n.style.background=`linear-gradient(90deg, ${kp.map(a=>ys[a]).join(",")})`,{root:e,fill:n,slots:o}}function vM(i,e,t,n){i.fill.style.width=n+"%",i.root.classList.toggle("full",n>=Sr.max);for(let s of e){let r=i.slots[s.id],o=s.ult?1-n/Sr.max:(t[s.id]||0)/s.cd;r.style.setProperty("--cd",Math.max(0,Math.min(1,o))*360+"deg"),r.classList.toggle("ready",s.ult?n>=Sr.max:!(t[s.id]>0))}}var Gp=[{id:"01",file:"01_i_refuse.mp3",title:"I Refuse"},{id:"02",file:"02_world_wide_wake_up.mp3",title:"World Wide Wake Up"},{id:"03",file:"03_it_is_what_it_is.mp3",title:"It Is What It Is"},{id:"04",file:"04_they_don_t.mp3",title:"They Don't"},{id:"05",file:"05_scfl_10_2.mp3",title:"SCFL 10-2"},{id:"06",file:"06_supa_groovy_plugged_in.mp3",title:"Supa Groovy Plugged In"},{id:"07",file:"07_soulful_plugged_in.mp3",title:"Soulful Plugged In"},{id:"08",file:"08_i_am_affirmation.mp3",title:"I Am Affirmation"},{id:"09",file:"09_the_lion_rises.mp3",title:"The Lion Rises"},{id:"10",file:"10_battle_of_kirina.mp3",title:"Battle of Kirina"},{id:"11",file:"11_nine_witches_of_mali.mp3",title:"Nine Witches of Mali"},{id:"12",file:"12_buffalo_woman_rising.mp3",title:"Buffalo Woman Rising"},{id:"13",file:"13_crippled_prince.mp3",title:"Crippled Prince"},{id:"14",file:"14_nana_triban.mp3",title:"Nana Triban"},{id:"15",file:"15_kurukan_fuga.mp3",title:"Kurukan Fuga"},{id:"16",file:"16_light_as_a_feather.mp3",title:"Light as a Feather"},{id:"17",file:"17_truth_is_the_feather.mp3",title:"Truth Is the Feather"},{id:"18",file:"18_kind_hands.mp3",title:"Kind Hands"},{id:"19",file:"19_my_heart_at_home.mp3",title:"My Heart at Home"},{id:"20",file:"20_balance_of_maat.mp3",title:"Balance of Maat"}],Vp={menu:["02"],ramparts:["01","05","04","03","06"],venus:["06","07","08","16","17","18"],archive:["09","11","12","13","14","15"],boss:["10"],win:["19","20"]},Wp=new Set(["menu","boss"]),MM="https://quantummelaninmedia.com/assets/audio/";function bM(i){let e=Vp[i]||Vp.menu;return Wp.has(i)?e.slice():[...e,...Gp.map(t=>t.id).filter(t=>!e.includes(t))]}function Xp({base:i="./assets/music/",volume:e=.55}={}){let t=new Audio;t.preload="auto";let n=[],s=0,r=null,o=!1,a=!1,l=!1,c=null,u=!1,h=document.createElement("div");h.id="nowPlaying",h.className="hidden";let d=document.createElement("b");d.textContent="\u266A";let f=document.createElement("span"),g=document.createElement("small");g.textContent="N skip \xB7 M mute",h.append(d,f,g),document.body.appendChild(h);let x=_=>Gp.find(b=>b.id===_),p=()=>o?0:a?e*.35:e;function m(_,b,P){clearInterval(c);let T=t.volume,w=performance.now();c=setInterval(()=>{let y=Math.min(1,(performance.now()-w)/b);t.volume=Math.max(0,Math.min(1,T+(_-T)*y)),y>=1&&(clearInterval(c),P&&P())},30)}function v(_){s=(_+n.length)%n.length;let b=x(n[s]);if(!b)return;t.src=(u?MM:i)+b.file,t.volume=0,f.textContent=b.title.toUpperCase(),h.classList.remove("hidden"),h.classList.remove("flash"),h.offsetWidth,h.classList.add("flash");let P=t.play();P&&P.catch&&P.catch(()=>{}),m(p(),900)}return t.addEventListener("ended",()=>{Wp.has(r)&&n.length===1?(t.currentTime=0,t.play().catch(()=>{})):v(s+1)}),t.addEventListener("error",()=>{u||(u=!0,v(s))}),{play(_){l=!0,_!==r&&(r=_,n=bM(_),t.src&&!t.paused?m(0,500,()=>v(0)):v(0))},next(){l&&n.length&&m(0,300,()=>v(s+1))},setMuted(_){o=_,m(p(),200)},duck(_){a=_,m(p(),300)},get moment(){return r},get title(){let _=x(n[s]);return _?_.title:""},get usingRemote(){return u},el:t}}var EM=()=>new Ve({color:"#1b1b24",roughness:.55,metalness:.35}),SM=()=>new Ve({color:ie.char,emissive:ie.char,emissiveIntensity:.9}),pu=()=>new ke({color:ie.hotred});function dn(i,e,t,n){return new le(new Rt(i,e,t),n)}function wM(i){let e=new Ne,t=EM(),n=SM(),s=[t,n];if(e.add(Hn(.55)),i==="grunt"){let r=dn(.7,.8,.5,t);r.position.y=.95,e.add(r);let o=dn(.5,.06,.04,n);o.position.set(0,1.05,.27),e.add(o);let a=dn(.44,.36,.4,t);a.position.y=1.55,e.add(a);let l=dn(.34,.07,.04,pu());l.position.set(0,1.56,.21),e.add(l);for(let c of[-1,1]){let u=dn(.18,.62,.18,t);u.position.set(c*.5,.95,.1),u.rotation.x=-.5,e.add(u);let h=dn(.26,.2,.3,n);h.position.set(c*.5,.62,.35),e.add(h);let d=dn(.22,.5,.26,t);d.position.set(c*.18,.28,0),e.add(d)}}else if(i==="shooter"){let r=dn(.56,1,.44,t);r.position.y=1.05,e.add(r);let o=dn(.5,.6,.24,t);o.position.set(0,1.2,-.3),e.add(o);let a=dn(.08,.5,.08,n);a.position.set(0,1.2,-.44),e.add(a);let l=dn(.36,.34,.36,t);l.position.y=1.72,e.add(l);let c=new le(new vt(.11,.13,.16,10),pu());c.rotation.x=Math.PI/2,c.position.set(0,1.72,.22),e.add(c);let u=dn(.14,.14,.8,t);u.position.set(.32,1.15,.35),e.add(u);let h=dn(.1,.1,.1,n);h.position.set(.32,1.15,.78),e.add(h);for(let d of[-1,1]){let f=dn(.18,.55,.22,t);f.position.set(d*.15,.28,0),e.add(f)}}else{let r=new le(new vt(.46,.4,.18,14),t);e.add(r);let o=new le(new $n(.5,.05,6,18),n);o.rotation.x=Math.PI/2,e.add(o);let a=new le(new Jt(.1,8,6),pu());a.position.set(0,.02,.44),e.add(a);let l=bt(ie.cyan,.9,.7);l.position.y=-.2,e.add(l),e.userData.disc=r}return e.userData.mats=s,e}function qp(i,e){let t=[],n=[];function s(h,d,f){let g=Vf[h],x=Fp(e.assets,h)||wM(h);i.add(x);let p={type:h,x:d,z:f,y:h==="flyer"?g.hover:0,hp:g.hp,max:g.hp,r:g.r,cfg:g,alive:!0,aggro:!1,mesh:x,vx:0,vz:0,kx:0,kz:0,knock:0,shootT:1+Math.random()*(g.shootCd||1),diveT:2+Math.random()*2,dive:0,dx:0,dz:0,anim:Math.random()*6,hurtT:0,fx:0,fz:1,orbit:Math.random()*6.28,strafe:Math.random()<.5?1:-1};return t.push(p),p}function r(h,d,f,g=0,x=0,p=6){h.alive&&(d*=e.comboHit?e.comboHit():1,h.cfg.armor&&!(h.brokenT>0)&&(h.chain=e.t-(h.lastHitT??-9)<Cf?(h.chain||0)+1:1,h.lastHitT=e.t,h.chain>=h.cfg.guard?(h.brokenT=If,h.stunT=Math.max(h.stunT||0,1.2),h.chain=0,e.hud.flash("GUARD BREAK","#ffd76a"),e.fx.ring(h.x,h.z,"#ffd76a",2.6,.35),e.fx.spawn(h.x,h.y+1.4,h.z,"#ffd76a",16,{spd:5,up:3,size:.45}),e.audio.sfx.shatter(),e.hitstop(.08)):(d*=1-h.cfg.armor,e.fx.spawn(h.x,h.y+1.2,h.z,"#c8c8d8",3,{spd:3,up:1.5,size:.3,life:.25}))),h.hp-=d,h.hurtT=.12,h.kx=g,h.kz=x,h.knock=p,h.hp<=0?o(h,f):e.audio.sfx.foeHit())}function o(h,d){h.alive=!1;let f=h.mesh.userData;f.drv?(f.drv.oneShot("Death_A",1.5,!0),n.push({e:h,t:1.6})):i.remove(h.mesh),e.fx.spawn(h.x,h.y+.9,h.z,ie.char,14,{spd:5,up:4}),e.fx.spawn(h.x,h.y+.9,h.z,"#ffffff",5,{spd:3,size:.35}),e.fx.ring(h.x,h.z,ie.char,2.2,.35),e.audio.sfx.foeDie(),e.onKill(h,d)}function a(h){l(h);let d=e.H,f=e.level;for(let g of t){if(!g.alive)continue;g.anim+=h,g.brokenT>0&&(g.brokenT-=h);let x=d.x-g.x,p=d.z-g.z,m=Math.hypot(x,p)||.001,v=x/m,_=p/m;!g.aggro&&m<g.cfg.aggro&&d.alive&&(g.aggro=!0);let b=0,P=0;if(g.stunT>0)g.stunT-=h,Math.random()<h*12&&e.fx.spawn(g.x,g.y+2.1,g.z,"#ffd76a",1,{spd:1.5,up:.5,size:.35,life:.4,grav:0});else if(g.aggro&&d.alive)if(g.type==="grunt"||g.type==="brute")m>g.r+d.r+.05&&(b=v,P=_);else if(g.type==="shooter")m>g.cfg.keep+1.5?(b=v,P=_):m<g.cfg.keep-1.5&&(b=-v,P=-_),b+=-_*g.strafe*.5,P+=v*g.strafe*.5,g.shootT-=h,g.shootT<=0&&(g.shootT=g.cfg.shootCd*(.85+Math.random()*.3),so(f,g.x,g.z,d.x,d.z,(d.y+1.1)*.5)||(e.combat.spawnEBullet({x:g.x+v*.6,y:1.15,z:g.z+_*.6,vx:v*g.cfg.bspd,vz:_*g.cfg.bspd,vy:(d.y+1.1-1.15)/m*g.cfg.bspd,kind:"red"}),e.fx.spawn(g.x+v*.8,1.15,g.z+_*.8,ie.hotred,4,{spd:2,up:1,size:.3}),e.audio.beep(520,.08,"square",.08,200)));else if(g.orbit+=h*.9*g.strafe,g.dive===0){let z=d.x+Math.cos(g.orbit)*5,L=d.z+Math.sin(g.orbit)*5,D=z-g.x,O=L-g.z,k=Math.hypot(D,O)||1;b=D/k*Math.min(1,k/2),P=O/k*Math.min(1,k/2),g.y+=(g.cfg.hover+Math.sin(g.anim*3)*.3-g.y)*Math.min(1,h*4),g.diveT-=h,g.diveT<=0&&(g.dive=1,g.diveT=.35,g.dx=v,g.dz=_)}else g.dive===1?(g.diveT-=h,g.y+=(g.cfg.hover+.7-g.y)*h*6,g.diveT<=0&&(g.dive=2,g.diveT=.55,g.dx=v,g.dz=_,e.audio.beep(900,.2,"sawtooth",.1,200))):(g.diveT-=h,b=g.dx*2.4,P=g.dz*2.4,g.y+=(d.y+.9-g.y)*h*10,g.diveT<=0&&(g.dive=0,g.diveT=g.cfg.diveCd));else g.type==="flyer"&&(g.y=g.cfg.hover+Math.sin(g.anim*2)*.25);for(let z of t){if(z===g||!z.alive||z.type==="flyer"!=(g.type==="flyer"))continue;let L=g.x-z.x,D=g.z-z.z,O=Math.hypot(L,D);O<1.2&&O>.001&&(b+=L/O*(1.2-O)*1.5,P+=D/O*(1.2-O)*1.5)}let T=g.cfg.spd*(e.slowMul||1),w=b*T+g.kx*g.knock,E=P*T+g.kz*g.knock;g.knock=Math.max(0,g.knock-h*26);let y=_r(f,g.x,g.z,g.r,w*h,E*h,g.type==="flyer"?9:0);if(g.x=y.x,g.z=y.z,Math.abs(b)+Math.abs(P)>.05||g.aggro){let z=g.aggro?v:b,L=g.aggro?_:P;g.fx+=(z-g.fx)*Math.min(1,h*8),g.fz+=(L-g.fz)*Math.min(1,h*8)}let M=g.r+d.r+(g.type==="flyer"?.1:.05);d.alive&&m<M&&(g.type==="flyer"?Math.abs(g.y-(d.y+1))<1.3:d.y<.8)&&(e.wardBlocks(g.x,g.z)?(e.wardAbsorb(12,g.x,g.z),g.kx=-v,g.kz=-_,g.knock=10):e.hurt("contact",g.x,g.z)&&(g.kx=-v,g.kz=-_,g.knock=8));let R=g.mesh;R.position.set(g.x,g.y,g.z),R.rotation.y=Math.atan2(g.fx,g.fz);let S=g.type==="flyer"?0:Math.abs(Math.sin(g.anim*8))*.08*(Math.abs(b)+Math.abs(P)>.05?1:0);R.position.y=g.y+S;let I=R.userData,B=Math.abs(b)+Math.abs(P)>.05;if(I.model)I.drv&&(I.drv.loop(B?I.spec.move:I.spec.idle,null,g.type==="brute"?.8:1),I.drv.update(h),R.position.y=g.y),g.type==="flyer"&&(R.rotation.x=g.dive===2?.5:Math.sin(g.anim*2)*.12,R.rotation.z=Math.sin(g.anim*3)*.1),g.hurtT>0&&(g.hurtT-=h,$i(I.mats,1),g.hurtT<=0&&$i(I.mats,0));else if(g.type==="flyer"&&(I.disc.rotation.y+=h*6,R.rotation.x=g.dive===2?.6:Math.sin(g.anim*2)*.1),g.hurtT>0){g.hurtT-=h;for(let z of I.mats)z.emissive.set("#ffffff"),z.emissiveIntensity=1.5}else I.mats[0].emissiveIntensity=0,I.mats[1].emissive.set(ie.char),I.mats[1].emissiveIntensity=.9+Math.sin(g.anim*5)*.3}}function l(h){for(let d=n.length-1;d>=0;d--){let f=n[d];f.t-=h,f.e.mesh.userData.drv.update(h),f.t<.6&&(f.e.mesh.position.y-=h*1.4),f.t<=0&&(i.remove(f.e.mesh),n.splice(d,1))}}function c(){for(let h of t)i.remove(h.mesh);t.length=0,n.length=0}function u(h){return t.filter(d=>d.alive&&(!h||d.type===h)).length}return{list:t,spawn:s,update:a,damage:r,clear:c,aliveCount:u}}var TM=160,AM=200,Yp=i=>i.y+(i.type==="flyer"?0:i.type==="brute"?1.4:1),RM={red:{col:ie.hotred,size:.2},ember:{col:ie.orange,size:.24},pulse:{col:ie.pink,size:.22},ink:{col:ie.violet,size:.34}};function Kp(i,e){let t=new le(new Jt(i,8,6),new ke({color:"#ffffff"})),n=bt(e,i*6,.85);return t.add(n),t.userData.glow=n,t.visible=!1,t}function Zp(i,e){let t=[],n=[],s=[],r=[],o=[],a=[];for(let E=0;E<TM;E++){let y=Kp(.15,ie.gold);i.add(y),t.push({alive:!1,mesh:y})}for(let E=0;E<AM;E++){let y=Kp(.2,ie.hotred);i.add(y),n.push({alive:!1,mesh:y})}let l=new sn(.86,1,56),c=new fa(1,24),u=1.05;function h(E,y,M,R,S,I={}){let B=t.find(L=>!L.alive);if(!B)return null;let z=Mt[S];return Object.assign(B,{alive:!0,x:E,y:I.y??u,z:y,vx:M*z.spd*(I.spdMul||1),vz:R*z.spd*(I.spdMul||1),life:I.life||z.life||2.2,dmg:I.dmg||z.dmg,pierce:I.pierce||!!z.pierce,size:I.size||z.size,kind:S,hit:new Set,reflected:!!I.reflected}),B.mesh.visible=!0,B.mesh.scale.setScalar(B.size/.15),B.mesh.userData.glow.material.color.set(I.col||z.col),B.mesh.position.set(E,B.y,y),B.mesh.lookAt(E+M,B.y,y+R),B.mesh.scale.z*=S==="beam"?4:S==="rapid"?2.2:1.4,B}function d(E,y,M,R){u=(E.y||0)+1.05;let S=E.fx,I=E.fz,B=E.x+S*.9,z=E.z+I*.9,L=1+(M-1)*.35,D=Mt[y].size*(1+(M-1)*.18),O=(k,K,Z)=>[k*Math.cos(Z)-K*Math.sin(Z),k*Math.sin(Z)+K*Math.cos(Z)];if(R)if(y==="single")h(B,z,S,I,y,{dmg:6*L,size:D*2.4,pierce:!0,col:"#ffffff"});else if(y==="scatter")for(let k=0;k<14;k++){let K=k/14*Math.PI*2;h(E.x+Math.cos(K)*.8,E.z+Math.sin(K)*.8,Math.cos(K),Math.sin(K),y,{dmg:1.5*L,size:D*1.3})}else if(y==="rapid")for(let k=0;k<9;k++){let[K,Z]=O(S,I,(k-4)*.16);h(B,z,K,Z,y,{dmg:.9*L,size:D*1.4,spdMul:.9+k*.03})}else if(y==="beam")for(let k=0;k<5;k++){let[K,Z]=O(S,I,(k-2)*.28);h(B,z,K,Z,y,{dmg:2.2*L,size:D*1.5,pierce:!0,col:"#ffffff"})}else for(let k=0;k<12;k++){let K=k/12*Math.PI*2;h(E.x+Math.cos(K)*.9,E.z+Math.sin(K)*.9,Math.cos(K),Math.sin(K),y,{dmg:1.2*L,size:D*1.6,life:.7})}else if(y==="single")h(B,z,S,I,y,{dmg:Mt.single.dmg*L,size:D});else if(y==="scatter"){let k=3+Math.min(2,M-1);for(let K=0;K<k;K++){let[Z,Me]=O(S,I,(K-(k-1)/2)*.22);h(B,z,Z,Me,y,{dmg:Mt.scatter.dmg*L,size:D})}}else if(y==="rapid"){let k=(E.shotIx=(E.shotIx||0)+1)%2?1:-1;h(B-I*.22*k,z+S*.22*k,S,I,y,{dmg:Mt.rapid.dmg*L,size:D})}else if(y==="beam")h(B,z,S,I,y,{dmg:Mt.beam.dmg*L,size:D});else for(let k=0;k<2;k++){let[K,Z]=O(S,I,(Math.random()-.5)*.5);h(B,z,K,Z,y,{dmg:Mt.flame.dmg*L,size:D*(.8+Math.random()*.5),spdMul:.8+Math.random()*.5})}}function f(E){let y=n.find(R=>!R.alive);if(!y)return null;let M=RM[E.kind||"red"];return Object.assign(y,{alive:!0,x:E.x,y:E.y??1.1,z:E.z,vx:E.vx,vy:E.vy||0,vz:E.vz,life:E.life||Gf,kind:E.kind||"red",grav:!!E.grav,size:M.size}),y.mesh.visible=!0,y.mesh.scale.setScalar(M.size/.2),y.mesh.userData.glow.material.color.set(M.col),y.mesh.position.set(y.x,y.y,y.z),y}function g(E,y,M,R=12,S=10){let I=new le(l,new ke({color:M,transparent:!0,opacity:.95,blending:ct,depthWrite:!1,side:gt}));I.rotation.x=-Math.PI/2,I.position.set(E,.12,y),i.add(I),s.push({x:E,z:y,r:.5,spd:R,maxR:S,mesh:I,col:M,passed:!1})}function x(E,y){let M=new le(c,new ke({color:"#2a0f4a",transparent:!0,opacity:.85,depthWrite:!1}));M.rotation.x=-Math.PI/2,M.position.set(E,.08,y),M.scale.setScalar(1.5),i.add(M),r.push({x:E,z:y,r:1.5,t:3.5,mesh:M})}function p(E){let y=new Ne;y.position.set(E.x,0,E.z);let M=new le(new vt(.75,.85,.3,8),new Ve({color:"#2a2030",roughness:.6}));M.position.y=.15,y.add(M);let R=new le(new Rt(.85,.85,.85),new Ve({color:"#2D1B4E",roughness:.45,metalness:.3,emissive:ie.gold,emissiveIntensity:.15}));R.position.y=.95,y.add(R);let S=new le(new Rt(.9,.12,.9),new Ve({color:ie.gold,metalness:.8,roughness:.25}));S.position.y=.95,y.add(S);let I=S.clone();I.rotation.z=Math.PI/2,y.add(I);let B=bt(ie.gold,1.8,.35);B.position.y=1,y.add(B),i.add(y),o.push({x:E.x,z:E.z,kind:E.kind,hp:2,alive:!0,mesh:y,crate:R,glow:B,t:Math.random()*6})}function m(E,y,M){let R=M==="power"?ie.gold:Mt[M].col,S=new Ne;S.position.set(E,0,y);let I=new le(M==="power"?new hr(.34):new ma(.3,0),new Ve({color:R,emissive:R,emissiveIntensity:1.2,metalness:.5,roughness:.2}));I.position.y=1.1,S.add(I);let B=bt(R,1.6,.6);B.position.y=1.1,S.add(B);let z=new le(new sn(.5,.62,24),new ke({color:R,transparent:!0,opacity:.6,blending:ct,depthWrite:!1,side:gt}));z.rotation.x=-Math.PI/2,z.position.y=.06,S.add(z),i.add(S),a.push({x:E,z:y,kind:M,mesh:S,core:I,t:0})}function v(E){E.alive=!1,E.mesh.visible=!1}function _(E){let y=e.H,M=e.level,R=e.boss;for(let S of t){if(!S.alive)continue;let I=S.x,B=S.z;if(S.x+=S.vx*E,S.z+=S.vz*E,S.life-=E,S.life<=0){v(S);continue}if(so(M,I,B,S.x,S.z,S.y-.4)){e.fx.spawn(I,S.y,B,Mt[S.kind].col,4,{spd:2,up:1.5,size:.3}),v(S);continue}let z=!1;for(let L of e.foes.list){if(!L.alive||S.hit.has(L)||Math.abs(Yp(L)-S.y)>(L.type==="brute"?1.6:1.25))continue;let D=L.x-S.x,O=L.z-S.z;if(D*D+O*O<(L.r+S.size)**2){S.hit.add(L);let k=Math.hypot(S.vx,S.vz)||1;if(e.foes.damage(L,S.dmg,S.reflected,S.vx/k,S.vz/k,S.kind==="flame"?2:5),e.fx.spawn(S.x,S.y,S.z,Mt[S.kind].col,3,{spd:2,up:1,size:.3}),!S.pierce){z=!0;break}}}if(!z&&R&&R.alive&&R.awake){let L=R.x-S.x,D=R.z-S.z;L*L+D*D<(R.r+S.size)**2&&!S.hit.has(R)&&(S.hit.add(R),R.hit(S)?(R.damage(S.dmg,S.reflected),e.fx.spawn(S.x,S.y,S.z,Mt[S.kind].col,4,{spd:2,up:1,size:.3})):(e.fx.spawn(S.x,S.y,S.z,"#ffffff",3,{spd:2,up:1,size:.25}),e.audio.beep(200,.05,"square",.06)),S.pierce||(z=!0))}if(!z)for(let L of o){if(!L.alive)continue;let D=L.x-S.x,O=L.z-S.z;if(D*D+O*O<.85&&(b(L,S.dmg),!S.pierce)){z=!0;break}}if(z){v(S);continue}S.mesh.position.set(S.x,S.y,S.z),S.kind==="flame"&&S.mesh.scale.setScalar(S.size/.15*(1+(1-S.life/.42)*1.4))}for(let S of n){if(!S.alive)continue;let I=S.x,B=S.z;if(S.x+=S.vx*E,S.z+=S.vz*E,S.life-=E,S.grav||(S.y+=S.vy*E),S.grav&&(S.vy-=22*E,S.y+=S.vy*E,S.y<=.2)){x(S.x,S.z),e.fx.spawn(S.x,.3,S.z,ie.violet,10,{spd:3,up:2}),e.audio.noise(.1,.1,200,1200),v(S);continue}if(S.life<=0||!S.grav&&so(M,I,B,S.x,S.z,S.y-.4)){v(S);continue}if(y.alive){let z=y.x-S.x,L=y.z-S.z;if(z*z+L*L<(_n+S.size)**2&&(S.grav?S.y<y.y+1.9&&S.y>y.y-.2:Math.abs(S.y-(y.y+1.1))<1)){if(e.wardBlocks(S.x,S.z)){if(e.wardAbsorb(18,S.x,S.z)==="parry"){let O=Math.hypot(S.vx,S.vz)||1;h(S.x,S.z,-S.vx/O,-S.vz/O,"single",{dmg:3,size:.28,reflected:!0,col:"#ffffff",spdMul:1.1,y:S.y})}v(S);continue}if(e.hurt("shot",S.x,S.z)){v(S);continue}}}S.mesh.position.set(S.x,S.y,S.z)}for(let S=s.length-1;S>=0;S--){let I=s[S];if(I.r+=I.spd*E,I.mesh.scale.setScalar(I.r),I.mesh.material.opacity=.95*(1-I.r/I.maxR),I.r>=I.maxR){i.remove(I.mesh),I.mesh.material.dispose(),s.splice(S,1);continue}if(y.alive&&!I.passed){let B=Math.hypot(y.x-I.x,y.z-I.z);Math.abs(B-I.r)<.45+_n&&y.y<.35&&(y.dashT>0?(I.passed=!0,e.onStyle("dash")):y.ward?(I.passed=!0,e.wardAbsorb(30,I.x,I.z)):e.hurt("wave",I.x,I.z)&&(I.passed=!0))}}for(let S=r.length-1;S>=0;S--){let I=r[S];if(I.t-=E,I.mesh.material.opacity=Math.min(.85,I.t*.6),I.t<=0){i.remove(I.mesh),I.mesh.material.dispose(),r.splice(S,1);continue}y.y<.1&&Math.hypot(y.x-I.x,y.z-I.z)<I.r&&(e.slowMul=.5)}for(let S of o)S.alive&&(S.t+=E,S.crate.rotation.y=S.t*.6,S.crate.position.y=.95+Math.sin(S.t*2)*.05,S.glow.material.opacity=.3+Math.sin(S.t*3)*.12);for(let S=a.length-1;S>=0;S--){let I=a[S];I.t+=E,I.core.rotation.y=I.t*2,I.core.rotation.x=I.t,I.core.position.y=1.1+Math.sin(I.t*3)*.12,y.alive&&Math.hypot(y.x-I.x,y.z-I.z)<1.1&&(i.remove(I.mesh),a.splice(S,1),e.onPickup(I.kind,I.x,I.z))}}function b(E,y){E.hp-=y,E.crate.material.emissiveIntensity=1.2,setTimeout(()=>{E.crate.material.emissiveIntensity=.15},80),e.audio.beep(300,.05,"square",.08,150),E.hp<=0&&(E.alive=!1,i.remove(E.mesh),e.fx.spawn(E.x,1,E.z,ie.gold,18,{spd:5,up:5}),e.fx.spawn(E.x,1,E.z,"#ffffff",6,{spd:3,size:.35}),e.fx.ring(E.x,E.z,ie.gold,2.5,.4),e.audio.sfx.crate(),m(E.x,E.z,E.kind),e.onCrate(E))}function P(E,y){let M=e.H,R=0,S=xr+(y?.6:0),I=(z,L,D)=>{let O=z-M.x,k=L-M.z,K=Math.hypot(O,k);return K>S+D?!1:K<.001?!0:(O*M.fx+k*M.fz)/K>Math.cos(jn+Math.asin(Math.min(1,D/Math.max(K,D))))};for(let z of e.foes.list){if(!z.alive||!I(z.x,z.z,z.r)||Math.abs(Yp(z)-(M.y+1))>1.7)continue;R++;let L=z.x-M.x,D=z.z-M.z,O=Math.hypot(L,D)||1;e.foes.damage(z,_h[E],E===2||y,L/O,D/O,E===2?14:6),e.fx.spawn(z.x,1,z.z,"#ffffff",5,{spd:3,up:2,size:.35})}let B=e.boss;B&&B.alive&&B.awake&&I(B.x,B.z,B.r)&&(B.hit({x:B.x,z:B.z,y:1})?(B.damage(_h[E],E===2),R++):e.audio.beep(200,.05,"square",.06));for(let z of n)z.alive&&I(z.x,z.z,z.size)&&(v(z),e.fx.spawn(z.x,z.y,z.z,"#ffffff",4,{spd:3,up:1,size:.3}),e.onStyle("cut"));for(let z of o)z.alive&&I(z.x,z.z,.6)&&b(z,2);return R}function T(){for(let E of t)v(E);for(let E of n)v(E);for(let E of s)i.remove(E.mesh);s.length=0;for(let E of r)i.remove(E.mesh);r.length=0;for(let E of o)E.alive&&i.remove(E.mesh);o.length=0;for(let E of a)i.remove(E.mesh);a.length=0}function w(){for(let E of n)v(E)}return{bullets:t,ebullets:n,waves:s,crates:o,pickups:a,fire:d,spawnEBullet:f,spawnWave:g,spawnCrate:p,spawnPickup:m,bladeStrike:P,update:_,clear:T,clearEnemyShots:w,WEP_ORDER:Uf}}var vs=(i={})=>new Ve({color:"#1b1b24",roughness:.5,metalness:.4,...i}),Ms=(i,e=1)=>new Ve({color:i,emissive:i,emissiveIntensity:e});function Gn(i,e,t,n){return new le(new Rt(i,e,t),n)}var mu=(i,e,t,n=2)=>{let s=i.bossRect;return[Math.max(s.x0*2+n,Math.min(s.x1*2-n,e)),Math.max(s.z0*2+n,Math.min(s.z1*2-n,t))]};function Ya(i,e,t,n=10){let s=i.H;if(!s.alive||s.y>1.3)return;let r=s.x-e.x,o=s.z-e.z,a=Math.hypot(r,o)||.001;if(a<t+_n){let l=r/a,c=o/a;s.ward?(i.wardAbsorb(kf,e.x,e.z),i.shove(l,c,n)):i.hurt("boss",e.x,e.z)&&i.shove(l,c,n*.6)}}function CM(i,e,t){let n=new Ne;i.add(n),n.add(Hn(2.4));let s=vs(),r=Ms(ie.char,.9),o=[s,r],a=Gn(3.4,2.2,2.6,s);a.position.y=1.5,n.add(a);let l=Gn(1.6,1.2,.3,Ms(ie.orange,1.6));l.position.set(0,1.3,1.35),n.add(l);let c=bt(ie.orange,3.2,.7);c.position.set(0,1.3,1.6),n.add(c);for(let f of[-1,1]){let g=Gn(1,.9,3,vs({color:"#101016"}));g.position.set(f*1.9,.45,0),n.add(g);let x=Gn(1.02,.1,2.6,r);x.position.set(f*1.9,.5,0),n.add(x)}let u=new le(new vt(.35,.45,1.6,10),s);u.position.set(-.8,3.2,-.6),n.add(u);let h=u.clone();h.position.x=.8,n.add(h);let d=Gn(2.2,.16,1.2,Ms(ie.gold,.4));d.position.set(0,2.7,.4),n.add(d);for(let f of[-1,1]){let g=new le(new Jt(.14,8,6),new ke({color:ie.hotred}));g.position.set(f*.7,2.1,1.32),n.add(g)}Object.assign(t,{mesh:n,mats:o,r:2,y:0,home:{x:t.x,z:t.z},shootT:1.5,pat:0,burst:0,burstT:0,lunge:0,lungeT:0,lungeCd:3,tx:0,tz:0}),t.hit=()=>!0,t.update=f=>{let g=e.H,x=t.x,p=t.z+1.2;if(t.t+=f,t.lunge===0&&(t.x=t.home.x+Math.sin(t.t*.7)*3,t.z=t.home.z+Math.sin(t.t*1.2)*.6),Math.random()<f*22&&e.fx.ember(t.x+(Math.random()-.5)*1.2,1.4,t.z+1.4,ie.orange,.35,.8,1.8),Math.random()<f*8&&e.fx.ember(t.x-.8+Math.random()*1.6,4,t.z-.6,"#efe6cf",.3,1.4,.8),t.hp/t.max<.33&&Math.random()<f*6&&e.fx.spawn(t.x+1.2,2.4,t.z,"#ffffff",3,{spd:2,up:2,size:.3}),t.shootT-=f,t.burst>0){if(t.burstT-=f,t.burstT<=0&&g.alive){t.burst--,t.burstT=.16;let m=g.x-x,v=g.z-p,_=Math.hypot(m,v)||1;e.combat.spawnEBullet({x,y:1.3,z:p,vx:m/_*11,vz:v/_*11,kind:"ember"}),e.fx.spawn(x,1.3,p,ie.orange,5,{spd:2,up:1,size:.3}),e.audio.noise(.08,.14,500,200)}}else if(t.shootT<=0&&g.alive)if(t.pat=(t.pat+1)%3,t.pat===2)t.burst=3,t.burstT=0,t.shootT=1.6;else{t.shootT=1.15;let m=Math.atan2(g.z-p,g.x-x);for(let v=-2;v<=2;v++){let _=m+v*.2+Math.sin(t.t)*.12;e.combat.spawnEBullet({x,y:1.3,z:p,vx:Math.cos(_)*9,vz:Math.sin(_)*9,kind:"ember"})}e.fx.spawn(x,1.3,p,ie.orange,8,{spd:3,up:2,size:.3}),e.audio.noise(.12,.18,400,150)}if(Ya(e,t,t.r),t.hp/t.max<.5)if(t.lungeCd-=f,t.lunge===0&&t.lungeCd<=0)t.lunge=1,t.lungeT=.5,e.audio.noise(.5,.2,200,600),e.flash("TREADS FLARE \u2014 DASH THE WAVE",ie.char);else if(t.lunge===1){if(t.lungeT-=f,r.emissiveIntensity=2.5,t.lungeT<=0){t.lunge=2,t.lungeT=.34;let m=g.x-t.x,v=g.z-t.z,_=Math.hypot(m,v)||1;t.tx=m/_,t.tz=v/_}}else if(t.lunge===2){t.lungeT-=f;let[m,v]=mu(e.level,t.x+t.tx*22*f,t.z+t.tz*22*f,2.6);t.x=m,t.z=v,Ya(e,t,t.r+.3),t.lungeT<=0&&(t.lunge=3,t.lungeT=.9,e.shake(10),e.audio.sfx.slam(),e.combat.spawnWave(t.x,t.z,ie.char,13,11),e.fx.spawn(t.x,.3,t.z,ie.char,24,{spd:6,up:4}),e.fx.ring(t.x,t.z,ie.char,4,.5))}else t.lunge===3&&(t.lungeT-=f,r.emissiveIntensity=.9,t.x+=(t.home.x-t.x)*Math.min(1,f*3),t.z+=(t.home.z-t.z)*Math.min(1,f*3),t.lungeT<=0&&(t.lunge=0,t.lungeCd=4.5));n.position.set(t.x,t.y+Math.sin(t.t*1.2)*.06,t.z),n.rotation.y=Math.atan2(g.x-t.x,g.z-t.z)*.25,c.material.opacity=.5+Math.sin(t.t*6)*.2}}function IM(i,e,t){let n=new Ne;i.add(n),n.add(Hn(2.2));let s=Ms(ie.pink,1.4),r=vs({color:"#2a1230"}),o=Ms(ie.pink,.8),a=[s,r,o],l=new Ne;l.position.y=2.4,n.add(l);let c=new le(new Jt(.9,20,14),s);l.add(c);let u=bt(ie.pink,3.4,.6);l.add(u);let h=new le(new $n(2.2,.06,8,48),o);h.rotation.x=Math.PI/2,l.add(h);let d=new Ne;l.add(d);let f=[];for(let p=0;p<6;p++){let m=new Ne;m.rotation.y=p*Math.PI/3;let v=Gn(1.15,1.7,.22,r);v.position.z=2,m.add(v);let _=Gn(1.17,.08,.24,o);_.position.set(0,.85,2),m.add(_),d.add(m),f.push(v)}let g=bt(ie.cyan,1.8,.6);g.position.y=-1.1,l.add(g);let x=new le(new Sn(1.8,40),new ke({color:ie.pink,transparent:!0,opacity:0,blending:ct,depthWrite:!1,side:gt}));x.rotation.x=-Math.PI/2,x.position.y=.1,i.add(x),t.mount=d,Object.assign(t,{mesh:n,mats:a,extra:[x],r:2.3,y:2.4,home:{x:t.x,z:t.z},rot:0,open:0,openCd:4,mode:"cruise",modeT:2.2,shootT:1.2,beamOn:0,spawnCd:5,bx:0,bz:0,bdx:0,bdz:1}),t.hit=p=>{if(t.open>0)return!0;let m=Math.atan2(p.x-t.x,p.z-t.z),v=Math.PI/3;return((m-t.rot)%v+v)%v>v*.62},t.update=p=>{let m=e.H;t.t+=p,t.rot+=p*(t.open>0?.3:.9),d.rotation.y=t.rot,t.x=t.home.x+Math.sin(t.t*.5)*4.5,t.z=t.home.z+Math.sin(t.t*1.3)*1.4,t.open>0?t.open-=p:(t.openCd-=p,t.openCd<=0&&(t.open=1.8,t.openCd=4.5,e.flash("ARRAY OPEN \u2014 HIT THE CORE",ie.cyan),e.audio.sfx.open()));let v=t.open>0?3.2:2;for(let _ of f)_.position.z+=(v-_.position.z)*Math.min(1,p*6);if(Math.random()<p*18&&e.fx.ember(t.x+(Math.random()-.5)*2,1.2,t.z+(Math.random()-.5)*2,ie.pink,.3,.7,-1.5),t.modeT-=p,t.spawnCd-=p,t.mode==="cruise"){if(t.shootT-=p,t.shootT<=0&&m.alive){t.shootT=1.1;let _=Math.atan2(m.z-t.z,m.x-t.x);for(let b of[-.12,0,.12])e.combat.spawnEBullet({x:t.x,y:1.3,z:t.z,vx:Math.cos(_+b)*10,vz:Math.sin(_+b)*10,kind:"pulse"});e.fx.spawn(t.x,1.5,t.z,ie.pink,6,{spd:3,up:1,size:.3}),e.audio.beep(1400,.08,"sine",.12,600)}if(t.modeT<=0){let _=e.foes.aliveCount("flyer");if(t.mode=t.spawnCd<=0&&_<3?"deploy":"sweep",t.modeT=t.mode==="sweep"?.75:.9,t.mode==="sweep"){let b=m.x-t.x,P=m.z-t.z,T=Math.hypot(b,P)||1;t.bdx=b/T,t.bdz=P/T,t.bx=t.x,t.bz=t.z,e.audio.sfx.beamTell(),e.flash("BEAM \u2014 STEP OFF THE LINE",ie.pink)}}}else if(t.mode==="sweep"){if(x.position.set(t.bx+t.bdx*20,.1,t.bz+t.bdz*20),x.rotation.z=-Math.atan2(t.bdx,t.bdz),t.beamOn<=0&&(x.material.opacity=.25+Math.floor(t.t*12)%2*.25),t.modeT<=0&&t.beamOn<=0&&(t.beamOn=.4,e.shake(5),e.audio.sfx.beamFire()),t.beamOn>0){if(t.beamOn-=p,x.material.opacity=.95,Math.random()<p*40&&e.fx.spawn(t.bx+t.bdx*Math.random()*30,.3,t.bz+t.bdz*Math.random()*30,ie.pink,2,{spd:2,up:4,size:.3}),m.alive){let _=m.x-t.bx,b=m.z-t.bz,P=_*t.bdx+b*t.bdz,T=Math.abs(_*t.bdz-b*t.bdx);P>0&&P<40&&T<.9+_n&&m.y<1.2&&(m.ward?e.wardAbsorb(70*p,t.x,t.z):e.hurt("beam",t.x,t.z))}t.beamOn<=0&&(t.mode="cruise",t.modeT=2.4,t.shootT=.8,x.material.opacity=0)}}else if(t.mode==="deploy"&&t.modeT<=0){for(let _ of[-1.6,1.6]){let[b,P]=mu(e.level,t.x+_,t.z+1.5);e.foes.spawn("flyer",b,P).aggro=!0}e.fx.spawn(t.x,1.8,t.z,ie.cyan,14,{spd:4,up:2}),e.audio.beep(500,.2,"square",.15,250),t.spawnCd=9,t.mode="cruise",t.modeT=2.4}Ya(e,t,1.6),n.position.set(t.x,0,t.z),l.position.y=2.4+Math.sin(t.t*1.6)*.2,c.rotation.y+=p,u.material.opacity=t.open>0?.9:.5,s.emissiveIntensity=t.open>0?2.4:1.4}}function PM(i,e,t){let n=new Ne;i.add(n);let s=Hn(2);n.add(s);let r=vs({color:"#141018"}),o=Ms(ie.violet,.9),a=Ms(ie.gold,.1),l=[r,o],c=new Ne;n.add(c);let u=Gn(3.2,1.8,2.4,r);u.position.y=.9,c.add(u);for(let P of[-1,1]){let T=Gn(.1,.5,2.3,o);T.position.set(P*1.62,.9,0),c.add(T)}let h=new le(new vt(.7,.7,.14,16),a);h.position.set(0,1.86,.4),c.add(h);let d=bt(ie.gold,2.4,0);d.position.set(0,2,.4),c.add(d);let f=new le(new vt(.4,.5,8,10),vs({color:"#22202a"}));f.position.y=5.8,c.add(f);let g=e.level.bossRect,x=g.x0*2+1,p=g.x1*2-1,m=g.z0*2+1,v=g.z1*2-1,_=new Ne;i.add(_);for(let P of[m+1.5,v-1.5]){let T=Gn(p-x,.3,.5,vs({color:"#22202a"}));T.position.set((x+p)/2,7.2,P),_.add(T)}let b=Gn(1.4,.4,v-m-2.5,vs({color:"#22202a"}));b.position.set(LM(e).x,7.2,(m+v)/2),_.add(b),t.mount=c,Object.assign(t,{mesh:n,mats:l,extra:[_],r:1.9,y:5.5,state:"track",st:2,topY:5.5,botY:0,vul:!1}),t.hit=()=>t.vul,t.update=P=>{let T=e.H;t.t+=P,t.st-=P;let[w,E]=mu(e.level,T.x,T.z,2.5);if(t.state==="track")t.vul=!1,t.x+=(w-t.x)*Math.min(1,P*2.2),t.z+=(E-t.z)*Math.min(1,P*2.2),t.y=t.topY+Math.sin(t.t*2)*.15,t.st<=0&&(t.state="slam",t.st=.22,e.audio.noise(.2,.2,300,80));else if(t.state==="slam"){if(t.y+=(t.botY-t.y)*Math.min(1,P*14),t.st<=0){t.y=t.botY,t.state="down",t.st=1.1,t.vul=!0,e.shake(12),e.audio.sfx.slam(),e.combat.spawnWave(t.x,t.z,ie.violet,13,9);for(let y=0;y<3;y++){let M=Math.atan2(T.z-t.z,T.x-t.x)+(y-1)*.9+(Math.random()-.5)*.4,R=4+Math.random()*3;e.combat.spawnEBullet({x:t.x,y:2.2,z:t.z,vx:Math.cos(M)*R,vz:Math.sin(M)*R,vy:7.5,kind:"ink",grav:!0,life:6})}e.fx.spawn(t.x,.3,t.z,ie.violet,26,{spd:6,up:4}),e.fx.ring(t.x,t.z,ie.violet,5,.5),e.flash("SEAL EXPOSED \u2014 FIRE",ie.gold)}}else t.state==="down"?t.st<=0&&(t.state="rise",t.st=.6,t.vul=!1):t.state==="rise"&&(t.y+=(t.topY-t.y)*Math.min(1,P*6),t.st<=0&&(t.state="track",t.st=1.6+Math.random()*.8));Math.random()<P*8&&e.fx.ember(t.x-1.4+Math.random()*2.8,t.y+.2,t.z+(Math.random()-.5)*2,"#6a3cff",.3,.8,-1),t.state!=="track"&&Ya(e,t,1.9),n.position.set(t.x,0,t.z),c.position.y=t.y,s.scale.setScalar(1-t.y/8),b.position.x=t.x,a.emissiveIntensity=t.vul?2.2:.1,d.material.opacity=t.vul?.8:0,o.emissiveIntensity=t.vul?2:.9}}var LM=i=>i.level.bossPos;function $p(i,e,t){let n=Wf[t],s=e.level.bossPos,r={key:t,name:n.name,wake:n.wake,x:s.x,z:s.z,hp:n.hp,max:n.hp,alive:!0,awake:!1,t:0,hurtT:0,stun:0,extra:[],dying:0};({engine:CM,censor:IM,redactor:PM})[t](i,e,r);let o=Bp(e.assets,r,r.mount),a=r.update;r.damage=(l,c)=>{r.alive&&(l*=e.comboHit?e.comboHit():1,r.hp-=l,r.hurtT=.1,e.audio.sfx.bossHit(),e.onBossDamage(l,c),r.hp<=0&&(r.hp=0,r.alive=!1,r.dying=2.4,e.onBossDead()))},r.update=l=>{if(!r.alive){r.dying-=l,Math.random()<l*14&&(e.fx.spawn(r.x+(Math.random()-.5)*3,1+Math.random()*2,r.z+(Math.random()-.5)*3,Math.random()<.5?"#ffffff":ie.orange,10,{spd:6,up:5}),e.shake(4)),r.mesh.position.y-=l*.35,r.mesh.rotation.z+=l*.15;return}if(r.stun>0){r.stun-=l,r.t+=l*.1,r.mesh.rotation.x=Math.sin(r.t*40)*.03;return}if(a(l),r.hurtT>0){r.hurtT-=l,r.wasHurt=!0;for(let c of r.mats)c.emissive.set("#ffffff"),c.emissiveIntensity=1.6;o&&$i(o.mats,1),r.hurtT<=0&&o&&$i(o.mats,0)}else if(r.wasHurt){r.wasHurt=!1;for(let c of r.mats)c.emissive.setHex(c.userData.def.c),c.emissiveIntensity=c.userData.def.i}};for(let l of r.mats)l.userData.def={c:l.emissive.getHex(),i:l.emissiveIntensity};return r.dispose=()=>{i.remove(r.mesh);for(let l of r.extra)i.remove(l)},r.mesh.position.set(r.x,0,r.z),r}var DM=i=>document.getElementById(i),lo=i=>String(i).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]);function Jp(){let i={};for(let w of["hud","heroName","heroTitle","lives","wep","pow","wardBar","chargeBar","score","mult","pages","rail","flash","bossBar","bossName","bossFill","pageCard","pgTitle","pgLine","pgSrc","menu","select","worldSel","codexPop","pausePop","endPop","cardM","cardK","wrow","cxWrap","endMsg","endSub","rkRank","rkScore","rkGrid","rkHint","rkWorld","rkRows","nextWorld","muteBtn","pauseBtn","touch","hint"])i[w]=DM(w);let e=0,t=0;function n(w){for(let E of document.querySelectorAll(".overlay"))E.classList.add("hidden");w&&i[w].classList.remove("hidden"),document.body.classList.toggle("playing",!w),i.pauseBtn.classList.toggle("hidden",!!w),i.muteBtn.classList.toggle("hidden",!!w&&w!=="pausePop")}function s(w,E=ie.gold){i.flash.textContent=w,i.flash.style.color=E,i.flash.style.textShadow=`0 0 18px ${E}`,e=1.7,i.flash.style.opacity=1}function r(w){i.hint.textContent=w||""}function o(w){i.heroName.textContent=w.name,i.heroName.style.color=w.accent,i.heroTitle.textContent=w.title}function a(w){i.rail.textContent=w.rail,i.rail.style.color=w.accent}function l(w){i.pgTitle.textContent=w.t,i.pgLine.textContent=w.l,i.pgSrc.textContent=w.s,t=4.8,i.pageCard.classList.remove("hidden")}function c(w){i.bossName.textContent=w,i.bossBar.classList.remove("hidden")}function u(w,E){i.bossFill.style.width=Math.max(0,w/E*100)+"%"}function h(){i.bossBar.classList.add("hidden")}function d(w,E,y,M){i.lives.textContent="\u25C6".repeat(Math.max(0,E.lives))+"\u25C7".repeat(Math.max(0,3-E.lives));let R=Mt[E.weapon];i.wep.textContent=R.name,i.wep.style.color=R.col,i.wep.style.borderColor=R.col,i.pow.innerHTML=Array.from({length:gr},(S,I)=>`<i class="${I<E.power?"on":""}"></i>`).join(""),i.wardBar.firstElementChild.style.width=Math.max(0,E.shield/Xi*100)+"%",i.wardBar.classList.toggle("broken",E.wardBroken>0),i.chargeBar.firstElementChild.style.width=Math.min(1,E.charge/ms)*100+"%",i.chargeBar.classList.toggle("full",E.charge>=ms),i.score.textContent=y.score.toLocaleString(),i.mult.textContent="\xD7"+y.mult.toFixed(2).replace(/\.?0+$/,""),i.mult.style.color=y.mult>=4?ie.gold:y.mult>=2?ie.cyan:"#cfc6b8",i.pages.textContent=`${y.pages}/${Yi[M.key].length} PAGES`,e>0&&(e-=w,e<.5&&(i.flash.style.opacity=e/.5)),t>0&&(t-=w,t<=0&&i.pageCard.classList.add("hidden"))}function f(w){i.cardM.classList.toggle("sel",w==="melvinci"),i.cardK.classList.toggle("sel",w==="kimaya")}function g(w,E){i.wrow.innerHTML=Qn.map(y=>{let M=yn[y],R=ro(y),S=cp(y),I=!E.includes(y);return`<div class="selcard wcard ${w===y?"sel":""} ${I?"locked":""}" data-w="${y}" style="--acc:${M.accent}">
        <div class="wglyph" style="background:radial-gradient(circle at 50% 60%, ${M.sky[1]}, ${M.sky[2]})"><span style="color:${M.accent}">${y==="ramparts"?"\u26EB":y==="venus"?"\u263F":"\u{1F4DC}"}</span></div>
        <div class="selname" style="color:${M.accent}">${M.name}</div><div class="seltag">${lo(M.tag)}</div>
        <div class="selbest">${R?`BEST ${R.s.toLocaleString()} \xB7 ${R.r} \xB7 ${Ut[R.h]?Ut[R.h].name:R.h}`:"NO RUN YET"} &nbsp;\xB7&nbsp; CODEX ${S}/${Yi[y].length}</div>
        ${I?'<div class="lock">CLEAR THE PREVIOUS FRONT</div>':""}</div>`}).join("")}function x(){let w=Oa();i.cxWrap.innerHTML=Qn.map(E=>{let y=yn[E],M=w[E]||[];return`<div class="cx-world"><h3 style="color:${y.accent}">${y.name} <small>${M.length}/${Yi[E].length} recovered</small></h3>`+Yi[E].map(R=>M.includes(R.id)?`<div class="cx-page"><b>${lo(R.t)}</b><p>${lo(R.l)}</p><small>${lo(R.s)}</small></div>`:`<div class="cx-page redacted"><b>${lo(R.t)}</b><p><span class="bar" style="width:92%"></span><span class="bar" style="width:76%"></span><span class="bar" style="width:58%"></span></p><small>REDACTED \u2014 recover it in ${y.name}</small></div>`).join("")+"</div>"}).join("")}function p(w,E,y,M,R){i.endMsg.textContent=M?"UNERASED":"ERASED",i.endMsg.style.color=M?ie.gold:ie.hotred,i.endSub.textContent=M?y.win:"The line broke. The pages you recovered stay in the Codex \u2014 the rest are still out there.",i.rkRank.textContent=E,i.rkRank.style.color=E==="UNERASED"?ie.gold:E==="SAGE"?ie.cyan:E==="SCHOLAR"?ie.green:"#cfc6b8",i.rkScore.textContent=w.score.toLocaleString();let S=Math.floor(w.t/60),I=Math.floor(w.t%60),B=[["TIME",`${S}:${String(I).padStart(2,"0")}`],["HITS",w.hits],["KILLS",`${w.kills} \xB7 ${w.styleKills} style`],["PARRIES",w.parries],["BEST MULT","\xD7"+w.bestMult],["PAGES",`${w.pages}/${Yi[y.key].length}`]];i.rkGrid.innerHTML=B.map(([L,D])=>`<div><small>${L}</small><b>${D}</b></div>`).join(""),i.rkHint.textContent=rp(E),i.rkWorld.textContent=y.name;let z=za()[y.key]||[];i.rkRows.innerHTML=z.length?z.map((L,D)=>`<div class="lbrow"><span>${D+1}</span><b>${L.s.toLocaleString()}</b><span>${L.r}</span><span style="color:${Ut[L.h]?Ut[L.h].accent:"#fff"}">${Ut[L.h]?Ut[L.h].name:L.h}</span><span>${L.d}</span></div>`).join(""):'<div class="lbrow"><span>\u2014</span></div>',i.nextWorld.classList.toggle("hidden",!(M&&R)),R&&(i.nextWorld.textContent=`Next: ${yn[R].name} \u25B8`)}let m=null;function v(w){m||(m=document.createElement("div"),m.className="screenflash",document.body.appendChild(m)),m.style.background=`radial-gradient(circle at 50% 55%, ${w}88, ${w}00 70%)`,m.classList.remove("go"),m.offsetWidth,m.classList.add("go")}let _=null,b=0;function P(w){if(!_){_=document.createElement("div"),_.id="combo";let E=document.createElement("b"),y=document.createElement("small");y.textContent="HIT COMBO",_.append(E,y),i.hud.appendChild(_)}if(w<2){_.classList.remove("on"),b=0;return}_.firstChild.textContent=w,_.classList.add("on"),_.style.color=w>=30?"#ff7ad9":w>=15?"#ffd76a":w>=6?"#4CE0E0":"#f4ecd8",w!==b&&(_.classList.remove("pop"),_.offsetWidth,_.classList.add("pop"),b=w)}function T(w){i.muteBtn.textContent=w?"\u{1F507}":"\u{1F50A}"}return{el:i,show:n,flash:s,hint:r,setHero:o,setWorld:a,showPage:l,boss:c,bossHp:u,hideBoss:h,update:d,renderSelect:f,renderWorlds:g,renderCodex:x,renderEnd:p,setMuted:T,screenFlash:v,combo:P}}var on=Xp({base:/quantummelaninmedia\.com$/.test(location.hostname)?"/assets/audio/":"./assets/music/"}),ut=i=>document.getElementById(i),tm=ut("scene"),bi=new sa({canvas:tm,antialias:!0,powerPreference:"high-performance"});bi.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5));bi.outputColorSpace=mt;bi.toneMapping=to;bi.toneMappingExposure=1.05;var Rn=new oa,vn=new zt(un.fov,1,un.near,un.far),ja=new URLSearchParams(location.search).has("lq")?"low":"high";ja==="high"&&(bi.shadowMap.enabled=!0,bi.shadowMap.type=Kc);var Ji=ja==="high"?new Pa(bi):null,_u=null;Ji&&(Ji.addPass(new La(Rn,vn)),_u=new mr(new be(512,512),.75,.45,.78),Ji.addPass(_u),Ji.addPass(new Da));var gu=()=>Ji?Ji.render():bi.render(Rn,vn);function nm(){let i=window.innerWidth,e=window.innerHeight;bi.setSize(i,e,!1),vn.aspect=i/e,vn.updateProjectionMatrix(),Ji&&(Ji.setSize(i,e),_u.setSize(Math.round(i/2),Math.round(e/2)))}window.addEventListener("resize",nm);nm();var ht=hp(),De=Jp(),It=fp(Rn),Bt=dp(tm,ut("stick"),ut("knob"),{fire:ut("tFire"),blade:ut("tBlade"),ward:ut("tWard"),dash:ut("tDash"),swap:ut("tSwap"),jump:ut("tJump"),ab1:ut("tAb1"),ab2:ut("tAb2"),ab3:ut("tAb3"),ult:ut("tUlt")}),nt=Bt.IN,F={scene:Rn,camera:vn,audio:ht,fx:It,hud:De,input:Bt,assets:null,level:null,world:null,hero:null,foes:null,combat:null,boss:null,run:null,t:0,slowMul:1,H:null},Pt="menu",Dt="melvinci",Wt="ramparts",ji=null,Za=[],wr=0,$a=0,Tr=-1,co=-1,Ka=1,rn={yaw:0,pitch:1,dist:1},Ja=new U,jp=new U,im=()=>{let i=["ramparts"];return ro("ramparts")&&i.push("venus"),ro("venus")&&i.push("archive"),i};function NM(i,e){return{x:i,z:e,y:0,vy:0,onGround:!0,airJumps:1,vx:0,vz:0,fx:0,fz:-1,r:_n,alive:!0,invuln:0,dashT:0,dashCd:0,ddx:0,ddz:-1,ward:!1,wardT:9,wardBroken:0,parried:!1,shield:Xi,regenDelay:0,weapon:"single",power:1,owned:["single"],lives:Na,fireCd:0,charge:0,charged:!1,wasFiring:!1,bladeN:0,bladeT:0,bladeWindow:0,mv:0,mvx:0,mvz:0,parryFlash:0,deadT:0,shotIx:0}}F.flash=(i,e)=>De.flash(i,e);F.shake=i=>{wr=Math.max(wr,i)};F.hitstop=i=>{$a=Math.max($a,i)};F.shove=(i,e,t)=>{F.H.vx+=i*t,F.H.vz+=e*t};F.wardBlocks=(i,e)=>{let t=F.H;if(!t.ward)return!1;let n=i-t.x,s=e-t.z,r=Math.hypot(n,s)||1;return(n*t.fx+s*t.fz)/r>Math.cos(qi)};F.wardAbsorb=(i,e,t)=>{let n=F.H;return n.wardT<Hf&&!n.parried?(n.parried=!0,F.run=Qf(F.run),F.powers&&F.powers.addMeter("parry"),n.parryFlash=.18,ht.sfx.parry(),It.ring(n.x,n.z,"#ffffff",2.4,.3),It.spawn(n.x+n.fx*.9,1.1,n.z+n.fz*.9,"#ffffff",10,{spd:4,up:2,size:.35}),De.flash(F.run.parryChain>=3?"GOLD CANNON ARMED \u2014 FIRE":"PARRY",F.run.parryChain>=3?ie.gold:ie.cyan),F.hitstop(.05),"parry"):(n.shield-=i,n.regenDelay=Mh,ht.sfx.ward(),It.spawn(e+(n.x-e)*.5,1.1,t+(n.z-t)*.5,Ut[Dt].accent,5,{spd:2,up:1,size:.3}),F.shake(2),n.shield<=0?(n.shield=0,n.ward=!1,n.wardBroken=1.6,ht.sfx.shatter(),De.flash("WARD SHATTERED",ie.hotred),It.spawn(n.x,1.1,n.z,Ut[Dt].accent,20,{spd:5,up:3}),"shatter"):"block")};F.hurt=(i,e,t)=>{let n=F.H;if(!n.alive||n.invuln>0||n.dashT>0)return!1;if(F.combo.n=0,F.combo.t=0,De.combo(0),n.lives--,F.run=tp(F.run),n.invuln=Df,n.weapon="single",n.power=1,n.charge=0,n.charged=!1,n.ward=!1,F.hero.setWeaponColor(Mt.single.col),F.hero.hurtFlash(),ht.sfx.hurt(),F.shake(7),F.hitstop(.06),It.spawn(n.x,1.1,n.z,ie.hotred,16,{spd:5,up:3}),It.ring(n.x,n.z,ie.hotred,2.5,.4),e!==void 0){let s=n.x-e,r=n.z-t,o=Math.hypot(s,r)||1;F.shove(s/o,r/o,9)}return n.lives<=0?(n.alive=!1,n.deadT=1.6,De.flash("THE LINE BREAKS",ie.hotred)):De.flash(n.lives===1?"LAST LIFE \u2014 HOLD THE LINE":"HIT \u2014 BLASTER RESET",ie.hotred),!0};F.combo={n:0,t:0,best:0};F.comboHit=()=>{let i=F.combo;return i.n=i.t>0?i.n+1:1,i.t=Rf,i.best=Math.max(i.best,i.n),De.combo(i.n),1+Math.min(1.5,(i.n-1)*.08)};F.onKill=(i,e)=>{F.run=jf(F.run,e||F.H.dashT>0),F.powers&&F.powers.addMeter("kill")};F.onStyle=i=>{F.run={...F.run,score:F.run.score+(i==="dash"?50:10)},i==="dash"&&De.flash("DASHED THE WAVE",ie.cyan)};F.onCrate=()=>{let i=Ih(Wt,F.run.pages);F.run=Ah(F.run),Ch(Wt,i.id),De.showPage(i),ht.sfx.page()};F.onPickup=(i,e,t)=>{let n=F.H;i==="power"?(n.power=Math.min(gr,n.power+1),De.flash(n.power===gr?"POWER MAX":"POWER UP",ie.gold)):(n.owned.includes(i)||n.owned.push(i),n.weapon=i,F.hero.setWeaponColor(Mt[i].col),De.flash(Mt[i].name,Mt[i].col)),ht.sfx.pickup(),It.spawn(e,1.1,t,i==="power"?ie.gold:Mt[i].col,16,{spd:4,up:4})};F.onBossDamage=i=>{F.run=ep(F.run,i),De.bossHp(F.boss.hp,F.boss.max)};F.onBossDead=()=>{ht.sfx.bossDie(),De.flash(F.boss.name+" \u2014 DOWN",ie.gold),F.shake(12),co=2.6,De.hideBoss(),F.world.gate.open(),F.level.openGate()};var yu=i=>Op(Rn,F.assets,i)||gp(Rn,Ut[i]);function UM(){let i=wh("ramparts"),e=Nh(Rn,i,yn.ramparts,F.assets,{shadows:ja==="high"});Za=[yu("melvinci"),yu("kimaya")],ji={level:i,world:e,s:i.start}}function zM(){if(ji){ji.world.dispose();for(let i of Za)i.dispose();ji=null,Za=[]}}function OM(i,e){let t=ji.s;Za.forEach((s,r)=>{let o=r===0==(Dt==="melvinci"),a=t.x+(r?1.4:-1.4);s.update(i,e,{x:a,z:t.z,fx:Math.sin(e*.4)*.3,fz:1,mv:0,mvx:0,mvz:0,dashing:!1,invuln:0,alive:!0,ward:!1,charge:Pt==="select"&&o?.5+Math.sin(e*4)*.3:0,firing:!1,parryFlash:0}),s.group.visible=!0});let n=e*.12;Ja.set(t.x+Math.sin(n)*9,6.5,t.z+4+Math.cos(n)*5),vn.position.lerp(Ja,Math.min(1,i*2)),vn.lookAt(t.x,1.4,t.z),ji.world.update(i,e,t.x,t.z)}function ho(i,e){zM(),sm(),Wt=i,Dt=e;let t=wh(i),n=Nh(Rn,t,yn[i],F.assets,{shadows:ja==="high"});F.level=t,F.world=n,F.hero=yu(e),F.H=NM(t.start.x,t.start.z),F.foes=qp(Rn,F),F.combat=Zp(Rn,F),F.powers=Hp(Rn,F,e),F.boss=$p(Rn,F,yn[i].boss),F.run=Jf(e,i),F.t=0,co=-1,Tr=-1;for(let s of t.foes)F.foes.spawn(s.type,s.x,s.z);for(let s of t.boxes)F.combat.spawnCrate(s);De.setHero(Ut[e]),De.setWorld(yn[i]),De.hideBoss(),De.show(null),De.flash(yn[i].name,yn[i].accent),De.hint(nt.touch?"":"WASD move (double-tap = sprint, long hold = long dash) \xB7 SHIFT jump (x2) \xB7 SPACE / click fire \xB7 J blade \xB7 V ward \xB7 1 2 3 chakra \xB7 F limit break \xB7 double-click + drag = spin camera \xB7 wheel zoom \xB7 R reset view"),vn.position.set(F.H.x+un.off[0],un.off[1],F.H.z+un.off[2]),vn.lookAt(F.H.x,1,F.H.z),Pt="play",Bt.clearEdges(),on.play(i)}function sm(){F.level&&(F.powers&&(F.powers.dispose(),F.powers=null),F.world.dispose(),F.hero.dispose(),F.foes.clear(),F.combat.clear(),F.boss&&F.boss.dispose(),It.clear(),F.level=null,F.boss=null)}function Qp(i){let e=Rh(F.run);lp(F.run);let t=Qn.indexOf(Wt),n=i&&t<Qn.length-1?Qn[t+1]:null;De.renderEnd(F.run,e,yn[Wt],i,n),De.show("endPop"),Pt="end",De.hint(""),on.play(i?"win":"menu")}function FM(i){let e=F.H,t=F.level;F.slowMul=1,F.combat.update(i),Bt.update(vn,e.x,e.z);for(let f of["invuln","dashCd","fireCd","regenDelay","wardBroken","bladeT","bladeWindow","parryFlash"])e[f]>0&&(e[f]-=i);if(!e.alive){e.deadT-=i,e.mv=0,e.deadT<=0&&Tr<0&&(Tr=.01);return}if(Bt.pressed("dash")&&e.dashCd<=0&&e.dashT<=0){e.dashT=Pf,e.dashCd=xh;let f=Math.hypot(nt.mx,nt.mz);e.ddx=f>.1?nt.mx/f:e.fx,e.ddz=f>.1?nt.mz/f:e.fz,e.ward=!1,ht.sfx.dash(),It.ring(e.x,e.z,Ut[Dt].accent,1.8,.3),It.spawn(e.x,.4,e.z,Ut[Dt].accent,6,{spd:2,up:1,size:.35})}if(Bt.pressed("longdash")&&e.dashT<=0&&e.dashCd<=0&&Math.hypot(nt.mx,nt.mz)>.3){let f=Math.hypot(nt.mx,nt.mz);e.dashT=.42,e.dashCd=1.1,e.longDash=!0,e.ddx=nt.mx/f,e.ddz=nt.mz/f,e.invuln=Math.max(e.invuln,.25),ht.sfx.dash(),It.ring(e.x,e.z,Ut[Dt].accent,2.6,.35,e.y+.06),F.shake(2)}if(e.dashT>0){e.dashT-=i;let f=e.longDash?3:1;Math.random()<i*40*f&&It.spawn(e.x-e.ddx*.4,e.y+.6+Math.random()*.8,e.z-e.ddz*.4,Ut[Dt].accent,e.longDash?3:2,{spd:1,up:.3,size:e.longDash?.55:.4,life:.4,grav:0}),e.dashT<=0&&(e.longDash=!1)}let n=nt.ward&&e.shield>0&&e.wardBroken<=0&&e.dashT<=0&&e.bladeT<=0;n&&!e.ward?(e.ward=!0,e.wardT=0,e.parried=!1,ht.sfx.ward()):n||(e.ward=!1),e.ward?(e.wardT+=i,e.shield-=Ff*i,e.regenDelay=Mh,e.shield<=0&&(e.shield=0,e.ward=!1,e.wardBroken=1.6,ht.sfx.shatter(),De.flash("WARD SHATTERED",ie.hotred))):e.regenDelay<=0&&e.shield<Xi&&(e.shield=Math.min(Xi,e.shield+Bf*i));let s=Math.hypot(nt.mx,nt.mz),r=Sf*(e.ward?.55:1)*(nt.sprint&&!e.ward?1.55:1)*F.slowMul,o,a;if(e.dashT>0){let f=e.longDash?gh*1.15:gh;o=e.ddx*f,a=e.ddz*f}else o=nt.mx*r,a=nt.mz*r;o+=e.vx,a+=e.vz,e.vx*=Math.pow(.02,i),e.vz*=Math.pow(.02,i),Bt.pressed("jump")&&(e.onGround?(e.vy=wf,e.onGround=!1,ht.beep(420,.12,"sine",.08,820),It.ring(e.x,e.z,Ut[Dt].accent,1.4,.25,e.y+.06)):e.airJumps>0&&(e.airJumps--,e.vy=Tf,ht.beep(620,.12,"sine",.08,1200),It.spawn(e.x,e.y+.2,e.z,Ut[Dt].accent,12,{spd:3,up:-1,size:.45}))),e.vy-=Af*i,e.y+=e.vy*i;let l=_r(t,e.x,e.z,_n,o*i,a*i,e.y);e.x=l.x,e.z=l.z;let c=$f(t,e.x,e.z,e.y);e.y<=c?(!e.onGround&&e.vy<-7&&(F.shake(2),It.ring(e.x,e.z,"#c8b8a0",1.6,.3,c+.06)),e.y=c,e.vy=0,e.onGround=!0,e.airJumps=1):e.onGround=!1,e.mv=e.dashT>0?1:Math.min(1,s),e.mvx=e.dashT>0?e.ddx:s>.05?nt.mx/s:0,e.mvz=e.dashT>0?e.ddz:s>.05?nt.mz/s:0,e.mv>.05&&Math.random()<i*8&&e.dashT<=0&&e.onGround&&It.spawn(e.x-e.mvx*.3,e.y+.1,e.z-e.mvz*.3,"#8a7560",1,{spd:.6,up:.8,size:.3,life:.4}),e.fx+=(nt.aimX-e.fx)*Math.min(1,i*18),e.fz+=(nt.aimZ-e.fz)*Math.min(1,i*18);let u=Math.hypot(e.fx,e.fz)||1;e.fx/=u,e.fz/=u;let h=nt.fire&&e.bladeT<=0;if(h?(F.run.parryChain>=3&&Bt.pressed("fire")?(F.run=sp(F.run),F.combat.fire(e,"single",gr,!0),ht.sfx.charged(),De.flash("GOLD CANNON",ie.gold),F.shake(6),F.boss&&F.boss.alive&&F.boss.awake&&(F.boss.stun=1.6,De.flash("GOLD CANNON \u2014 BOSS STUNNED",ie.gold))):e.fireCd<=0&&(e.fireCd=Mt[e.weapon].cd,F.combat.fire(e,e.weapon,e.power,!1),ht.sfx.shoot(e.weapon),It.spawn(e.x+e.fx*1.1,1.05,e.z+e.fz*1.1,Mt[e.weapon].col,2,{spd:1.5,up:.6,size:.3,life:.25})),e.charge=Math.min(ms,e.charge+i),e.charge>=ms&&!e.charged&&(e.charged=!0,ht.sfx.chargeFull()),e.charge>.3&&Math.random()<i*30&&It.spawn(e.x+e.fx*.9+(Math.random()-.5),1.05+(Math.random()-.5),e.z+e.fz*.9+(Math.random()-.5),Mt[e.weapon].col,1,{spd:.2,up:.3,size:.3,life:.3,grav:-3})):e.wasFiring&&(e.charged&&(F.hero.playOnce&&F.hero.playOnce("Spellcast_Shoot",1.8),F.combat.fire(e,e.weapon,e.power,!0),ht.sfx.charged(),De.flash(Nf[e.weapon],Mt[e.weapon].col),F.shake(4),It.ring(e.x,e.z,Mt[e.weapon].col,2.6,.35)),e.charge=0,e.charged=!1),e.wasFiring=h,Bt.pressed("fire"),Bt.pressed("blade")&&e.bladeT<=0){let f=e.bladeWindow>0?(e.bladeN+1)%3:0;e.bladeN=f,e.bladeT=vh,e.bladeWindow=Of+vh;let g=e.dashT>0||e.dashCd>xh-.12;g&&(e.vx+=e.fx*yh,e.vz+=e.fz*yh),F.hero.playBlade(f);let x=F.combat.bladeStrike(f,g);x?(F.hitstop(zf*(f===2?1.6:1)),ht.sfx.bladeHit(),F.shake(f===2?5:2),F.powers.addMeter("bladeHit",x)):ht.sfx.blade(f)}Bt.pressed("swap")&&e.owned.length>1&&(e.weapon=e.owned[(e.owned.indexOf(e.weapon)+1)%e.owned.length],F.hero.setWeaponColor(Mt[e.weapon].col),ht.sfx.ui(),De.flash(Mt[e.weapon].name,Mt[e.weapon].col)),F.powers.update(i,e,f=>Bt.pressed(f));let d=F.boss;if(d&&d.alive&&!d.awake){let f=t.roomAt(e.x,e.z),g=t.gateCells[0];f&&f.kind==="boss"&&Math.hypot(e.x-(g[0]+.5)*2,e.z-(g[1]+.5)*2)>3.2&&(d.awake=!0,t.sealGate(),F.world.gate.seal(),De.boss(d.name),De.bossHp(d.hp,d.max),De.flash(d.wake,ie.hotred),ht.sfx.bossWake(),on.play("boss"),F.run=ip(F.run),F.combat.clearEnemyShots(),F.shake(8))}}var em=performance.now();function rm(i){requestAnimationFrame(rm);let e=Math.min(.05,(i-em)/1e3);em=i,om(e)}function om(i){let e=i;if($a>0&&($a-=i,e=i*.08),F.t+=e,Pt==="menu"||Pt==="select"||Pt==="world"||Pt==="codex"){ji&&OM(e,F.t),It.update(e),gu();return}if(Pt==="play"){if(Bt.pressed("pause")){Pt="pause",De.show("pausePop"),on.duck(!0);return}if(Bt.pressed("mute")){let l=ht.toggleMute();De.setMuted(l),on.setMuted(l)}if(Bt.pressed("nexttrack")&&on.next(),F.run=np(F.run,e),F.combo.t>0&&(F.combo.t-=e,F.combo.t<=0&&(F.combo.n=0,De.combo(0))),FM(e),F.foes.update(e),F.boss&&F.boss.update(e),F.world.update(e,F.t,F.H.x,F.H.z),It.update(e),F.hero.update(e,F.t,{x:F.H.x,y:F.H.y,air:!F.H.onGround,longDash:!!F.H.longDash,sprint:nt.sprint,z:F.H.z,fx:F.H.fx,fz:F.H.fz,mv:F.H.mv,mvx:F.H.mvx,mvz:F.H.mvz,dashing:F.H.dashT>0,invuln:F.H.invuln,alive:F.H.alive,ward:F.H.ward,charge:F.H.charge/ms,firing:nt.fire&&F.H.bladeT<=0,parryFlash:F.H.parryFlash}),De.update(e,F.H,F.run,yn[Wt]),co>0&&(co-=e,co<=0)){let l=Ih(Wt,F.run.pages);F.run=Ah(F.run),Ch(Wt,l.id),De.showPage(l),Qp(!0);return}if(Tr>0&&(Tr-=e,Tr<=0)){Qp(!1);return}}if(!F.H){gu();return}let t=F.H;wr=Math.max(0,wr-e*22);let n=F.level&&(()=>{let l=F.level.roomAt(t.x,t.z);return l&&l.kind==="boss"})();Ka+=((n?un.bossZoom:1)-Ka)*Math.min(1,e*2),nt.orbit&&(rn.yaw-=nt.orbitDX*.006,rn.pitch=Math.max(.25,Math.min(1.9,rn.pitch-nt.orbitDY*.004))),nt.orbitDX=0,nt.orbitDY=0,nt.zoom&&(rn.dist=Math.max(.35,Math.min(1.8,rn.dist*(1+nt.zoom*.08))),nt.zoom=0),Bt.pressed("camreset")&&(rn.yaw=0,rn.pitch=1,rn.dist=1,De.flash("CAMERA RESET",ie.cyan));let s=un.off[0],r=un.off[2]*Ka*rn.dist,o=un.off[1]*Ka*rn.dist*rn.pitch,a=nt.orbit?0:1.2;Ja.set(t.x+Math.cos(rn.yaw)*s+Math.sin(rn.yaw)*r+t.fx*a,o+t.y*.75,t.z-Math.sin(rn.yaw)*s+Math.cos(rn.yaw)*r+t.fz*a),vn.position.lerp(Ja,Math.min(1,e*(nt.orbit?14:un.lerp))),jp.set(t.x+t.fx*a+(Math.random()-.5)*wr*.08,1+t.y*.8+(Math.random()-.5)*wr*.08,t.z+t.fz*a),vn.lookAt(jp),gu()}function vu(){sm(),ji||UM(),Pt="menu",De.show("menu"),De.hideBoss(),on.moment&&on.play("menu")}ut("start").onclick=()=>{ht.init(),ht.sfx.ui(),on.play("menu"),Pt="select",De.renderSelect(Dt),De.show("select")};ut("codexBtn").onclick=()=>{ht.init(),De.renderCodex(),Pt="codex",De.show("codexPop")};ut("cxBack").onclick=()=>{Pt="menu",De.show("menu")};ut("cardM").onclick=()=>{Dt="melvinci",De.renderSelect(Dt),ht.sfx.ui()};ut("cardK").onclick=()=>{Dt="kimaya",De.renderSelect(Dt),ht.sfx.ui()};ut("confirm").onclick=()=>{Pt="world",De.renderWorlds(Wt,im()),De.show("worldSel")};ut("wrow").onclick=i=>{let e=i.target.closest(".wcard");!e||e.classList.contains("locked")||(Wt=e.dataset.w,De.renderWorlds(Wt,im()),ht.sfx.ui())};ut("wconfirm").onclick=()=>{ht.init(),ho(Wt,Dt)};ut("backSel").onclick=()=>{Pt="select",De.show("select")};ut("resume").onclick=()=>{Pt="play",De.show(null),Bt.clearEdges(),on.duck(!1)};ut("quit").onclick=()=>vu();ut("again").onclick=()=>ho(Wt,Dt);ut("nextWorld").onclick=()=>{let i=Qn.indexOf(Wt);ho(Qn[Math.min(i+1,Qn.length-1)],Dt)};ut("toMenu").onclick=()=>vu();ut("pauseBtn").onclick=()=>{Pt==="play"&&(Pt="pause",De.show("pausePop"),on.duck(!0))};ut("muteBtn").onclick=()=>{let i=ht.toggleMute();De.setMuted(i),on.setMuted(i)};window.addEventListener("keydown",i=>{i.code==="KeyP"&&Pt==="pause"&&(Pt="play",De.show(null),Bt.clearEdges(),on.duck(!1)),i.code==="KeyN"&&Pt!=="play"&&on.next()});window.__unerased={G:F,ready:!1,get mode(){return Pt},step:i=>om(i),start:(i,e)=>ho(i||Wt,e||Dt),warp:i=>{ho(i||Wt,Dt);let e=F.level.gateCells[0];F.H.x=(e[0]+.5)*2,F.H.z=(e[1]+.5)*2+3,vn.position.set(F.H.x,un.off[1],F.H.z+un.off[2])},toBoss:()=>{let i=F.level.gateCells[0];F.H.x=(i[0]+.5)*2,F.H.z=(i[1]+.5)*2-6},snapshot:()=>({mode:Pt,world:Wt,hero:Dt,H:F.H&&{x:F.H.x,y:F.H.y,onGround:F.H.onGround,z:F.H.z,lives:F.H.lives,weapon:F.H.weapon,alive:F.H.alive},foes:F.foes&&F.foes.aliveCount(),boss:F.boss&&{awake:F.boss.awake,hp:F.boss.hp,alive:F.boss.alive},run:F.run,fx:It.count}),press:i=>Bt.press(i),IN:nt,music:on,combo:()=>F.combo,fillMeter:()=>{F.powers&&(F.powers.meter=100)}};var am=ut("start"),xu=ut("loadLine");am.disabled=!0;Up(i=>{xu.textContent=`SUMMONING THE WARRIORS \xB7 ${Math.round(i*100)}%`}).then(i=>{F.assets=i,xu.textContent=i.missing.length?"READY \xB7 missing: "+i.missing.join(", "):""}).catch(i=>{F.assets=null,xu.textContent="READY (classic models) \xB7 "+i.message}).finally(()=>{am.disabled=!1,vu(),window.__unerased.ready=!0});requestAnimationFrame(rm);})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
