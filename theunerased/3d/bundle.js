(()=>{var th="170";var km=0,ku=1,Hm=2;var af=1,nh=2,di=3,Zn=0,$t=1,xt=2,Kn=0,Zs=1,ht=2,Hu=3,Vu=4,Vm=5,us=100,Gm=101,Wm=102,Xm=103,qm=104,Ym=200,Km=201,Zm=202,$m=203,Hl=204,Vl=205,Jm=206,jm=207,Qm=208,e0=209,t0=210,n0=211,i0=212,s0=213,r0=214,Gl=0,Wl=1,Xl=2,Qs=3,ql=4,Yl=5,Kl=6,Zl=7,lf=0,o0=1,a0=2,Oi=0,ih=1,sh=2,rh=3,so=4,l0=5,oh=6,ah=7,Gu="attached",c0="detached",cf=300,er=301,tr=302,$l=303,Jl=304,Ia=306,hn=1e3,fi=1001,Zr=1002,Jt=1003,lh=1004;var Xs=1005;var cn=1006,Xr=1007;var Yn=1008;var gi=1009,hf=1010,uf=1011,$r=1012,ch=1013,fs=1014,zn=1015,Bn=1016,hh=1017,uh=1018,nr=1020,df=35902,ff=1021,pf=1022,Sn=1023,mf=1024,gf=1025,$s=1026,ir=1027,dh=1028,fh=1029,xf=1030,ph=1031;var mh=1033,$o=33776,Jo=33777,jo=33778,Qo=33779,jl=35840,Ql=35841,ec=35842,tc=35843,nc=36196,ic=37492,sc=37496,rc=37808,oc=37809,ac=37810,lc=37811,cc=37812,hc=37813,uc=37814,dc=37815,fc=37816,pc=37817,mc=37818,gc=37819,xc=37820,_c=37821,ea=36492,yc=36494,vc=36495,_f=36283,Mc=36284,bc=36285,Ec=36286,gh=2200,xh=2201,h0=2202,sr=2300,rr=2301,ll=2302,qs=2400,Ys=2401,ta=2402,_h=2500,u0=2501,yf=0,Pa=1,ro=2,d0=3200,f0=3201;var vf=0,p0=1,Di="",gt="srgb",Qt="srgb-linear",La="linear",mt="srgb";var Ts=7680;var Wu=519,m0=512,g0=513,x0=514,Mf=515,_0=516,y0=517,v0=518,M0=519,Sc=35044;var Xu="300 es",pi=2e3,na=2001,xi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],qu=1234567,qr=Math.PI/180,or=180/Math.PI;function Fn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Yt[i&255]+Yt[i>>8&255]+Yt[i>>16&255]+Yt[i>>24&255]+"-"+Yt[e&255]+Yt[e>>8&255]+"-"+Yt[e>>16&15|64]+Yt[e>>24&255]+"-"+Yt[t&63|128]+Yt[t>>8&255]+"-"+Yt[t>>16&255]+Yt[t>>24&255]+Yt[n&255]+Yt[n>>8&255]+Yt[n>>16&255]+Yt[n>>24&255]).toLowerCase()}function Zt(i,e,t){return Math.max(e,Math.min(t,i))}function yh(i,e){return(i%e+e)%e}function b0(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function E0(i,e,t){return i!==e?(t-i)/(e-i):0}function Yr(i,e,t){return(1-t)*i+t*e}function S0(i,e,t,n){return Yr(i,e,1-Math.exp(-t*n))}function w0(i,e=1){return e-Math.abs(yh(i,e*2)-e)}function T0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function A0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function R0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function C0(i,e){return i+Math.random()*(e-i)}function I0(i){return i*(.5-Math.random())}function P0(i){i!==void 0&&(qu=i);let e=qu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function L0(i){return i*qr}function D0(i){return i*or}function N0(i){return(i&i-1)===0&&i!==0}function U0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function O0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function z0(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),f=o((e-n)/2),p=r((n-e)/2),m=o((n-e)/2);switch(s){case"XYX":i.set(a*u,l*h,l*f,a*c);break;case"YZY":i.set(l*f,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*f,a*u,a*c);break;case"XZX":i.set(a*u,l*m,l*p,a*c);break;case"YXY":i.set(l*p,a*u,l*m,a*c);break;case"ZYZ":i.set(l*m,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function On(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function yt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var bf={DEG2RAD:qr,RAD2DEG:or,generateUUID:Fn,clamp:Zt,euclideanModulo:yh,mapLinear:b0,inverseLerp:E0,lerp:Yr,damp:S0,pingpong:w0,smoothstep:T0,smootherstep:A0,randInt:R0,randFloat:C0,randFloatSpread:I0,seededRandom:P0,degToRad:L0,radToDeg:D0,isPowerOfTwo:N0,ceilPowerOfTwo:U0,floorPowerOfTwo:O0,setQuaternionFromProperEuler:z0,normalize:yt,denormalize:On},be=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Zt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ke=class i{constructor(e,t,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],p=n[5],m=n[8],x=s[0],g=s[3],d=s[6],b=s[1],y=s[4],M=s[7],C=s[2],T=s[5],E=s[8];return r[0]=o*x+a*b+l*C,r[3]=o*g+a*y+l*T,r[6]=o*d+a*M+l*E,r[1]=c*x+u*b+h*C,r[4]=c*g+u*y+h*T,r[7]=c*d+u*M+h*E,r[2]=f*x+p*b+m*C,r[5]=f*g+p*y+m*T,r[8]=f*d+p*M+m*E,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*r,p=c*r-o*l,m=t*h+n*f+s*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return e[0]=h*x,e[1]=(s*c-u*n)*x,e[2]=(a*n-s*o)*x,e[3]=f*x,e[4]=(u*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=p*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(cl.makeScale(e,t)),this}rotate(e){return this.premultiply(cl.makeRotation(-e)),this}translate(e,t){return this.premultiply(cl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},cl=new Ke;function Ef(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Jr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function F0(){let i=Jr("canvas");return i.style.display="block",i}var Yu={};function Gr(i){i in Yu||(Yu[i]=!0,console.warn(i))}function B0(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function k0(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function H0(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var je={enabled:!0,workingColorSpace:Qt,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===mt&&(i.r=mi(i.r),i.g=mi(i.g),i.b=mi(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===mt&&(i.r=Js(i.r),i.g=Js(i.g),i.b=Js(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Di?La:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function mi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Js(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ku=[.64,.33,.3,.6,.15,.06],Zu=[.2126,.7152,.0722],$u=[.3127,.329],Ju=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ju=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);je.define({[Qt]:{primaries:Ku,whitePoint:$u,transfer:La,toXYZ:Ju,fromXYZ:ju,luminanceCoefficients:Zu,workingColorSpaceConfig:{unpackColorSpace:gt},outputColorSpaceConfig:{drawingBufferColorSpace:gt}},[gt]:{primaries:Ku,whitePoint:$u,transfer:mt,toXYZ:Ju,fromXYZ:ju,luminanceCoefficients:Zu,outputColorSpaceConfig:{drawingBufferColorSpace:gt}}});var As,wc=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{As===void 0&&(As=Jr("canvas")),As.width=e.width,As.height=e.height;let n=As.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=As}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Jr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=mi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(mi(t[n]/255)*255):t[n]=mi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},V0=0,ia=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:V0++}),this.uuid=Fn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(hl(s[o].image)):r.push(hl(s[o]))}else r=hl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function hl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?wc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var G0=0,Vt=class i extends xi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=fi,s=fi,r=cn,o=Yn,a=Sn,l=gi,c=i.DEFAULT_ANISOTROPY,u=Di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:G0++}),this.uuid=Fn(),this.name="",this.source=new ia(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new be(0,0),this.repeat=new be(1,1),this.center=new be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==cf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hn:e.x=e.x-Math.floor(e.x);break;case fi:e.x=e.x<0?0:1;break;case Zr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case hn:e.y=e.y-Math.floor(e.y);break;case fi:e.y=e.y<0?0:1;break;case Zr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Vt.DEFAULT_IMAGE=null;Vt.DEFAULT_MAPPING=cf;Vt.DEFAULT_ANISOTROPY=1;var ct=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],m=l[9],x=l[2],g=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(c+1)/2,M=(p+1)/2,C=(d+1)/2,T=(u+f)/4,E=(h+x)/4,I=(m+g)/4;return y>M&&y>C?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=T/n,r=E/n):M>C?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=T/s,r=I/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=E/r,s=I/r),this.set(n,s,r,t),this}let b=Math.sqrt((g-m)*(g-m)+(h-x)*(h-x)+(f-u)*(f-u));return Math.abs(b)<.001&&(b=1),this.x=(g-m)/b,this.y=(h-x)/b,this.z=(f-u)/b,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Tc=class extends xi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ct(0,0,e,t),this.scissorTest=!1,this.viewport=new ct(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Vt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new ia(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},nn=class extends Tc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},sa=class extends Vt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ac=class extends Vt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var At=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3],f=r[o+0],p=r[o+1],m=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=m,e[t+3]=x;return}if(h!==x||l!==f||c!==p||u!==m){let g=1-a,d=l*f+c*p+u*m+h*x,b=d>=0?1:-1,y=1-d*d;if(y>Number.EPSILON){let C=Math.sqrt(y),T=Math.atan2(C,d*b);g=Math.sin(g*T)/C,a=Math.sin(a*T)/C}let M=a*b;if(l=l*g+f*M,c=c*g+p*M,u=u*g+m*M,h=h*g+x*M,g===1-a){let C=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=C,c*=C,u*=C,h*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[o],f=r[o+1],p=r[o+2],m=r[o+3];return e[t]=a*m+u*h+l*p-c*f,e[t+1]=l*m+u*f+c*h-a*p,e[t+2]=c*m+u*p+a*f-l*h,e[t+3]=u*m-a*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),h=a(r/2),f=l(n/2),p=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*p*m,this._y=c*p*h-f*u*m,this._z=c*u*m+f*p*h,this._w=c*u*h-f*p*m;break;case"YXZ":this._x=f*u*h+c*p*m,this._y=c*p*h-f*u*m,this._z=c*u*m-f*p*h,this._w=c*u*h+f*p*m;break;case"ZXY":this._x=f*u*h-c*p*m,this._y=c*p*h+f*u*m,this._z=c*u*m+f*p*h,this._w=c*u*h-f*p*m;break;case"ZYX":this._x=f*u*h-c*p*m,this._y=c*p*h+f*u*m,this._z=c*u*m-f*p*h,this._w=c*u*h+f*p*m;break;case"YZX":this._x=f*u*h+c*p*m,this._y=c*p*h+f*u*m,this._z=c*u*m-f*p*h,this._w=c*u*h-f*p*m;break;case"XZY":this._x=f*u*h-c*p*m,this._y=c*p*h-f*u*m,this._z=c*u*m+f*p*h,this._w=c*u*h+f*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>h){let p=2*Math.sqrt(1+n-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>h){let p=2*Math.sqrt(1+a-n-h);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+h-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Zt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},N=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Qu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Qu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),u=2*(a*t-r*s),h=2*(r*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ul.copy(this).projectOnVector(e),this.sub(ul)}reflect(e){return this.sub(ul.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Zt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ul=new N,Qu=new At,Wt=class{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ln.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ln.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Ln.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ln):Ln.fromBufferAttribute(r,o),Ln.applyMatrix4(e.matrixWorld),this.expandByPoint(Ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),vo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),vo.copy(n.boundingBox)),vo.applyMatrix4(e.matrixWorld),this.union(vo)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ln),Ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Lr),Mo.subVectors(this.max,Lr),Rs.subVectors(e.a,Lr),Cs.subVectors(e.b,Lr),Is.subVectors(e.c,Lr),Ai.subVectors(Cs,Rs),Ri.subVectors(Is,Cs),ss.subVectors(Rs,Is);let t=[0,-Ai.z,Ai.y,0,-Ri.z,Ri.y,0,-ss.z,ss.y,Ai.z,0,-Ai.x,Ri.z,0,-Ri.x,ss.z,0,-ss.x,-Ai.y,Ai.x,0,-Ri.y,Ri.x,0,-ss.y,ss.x,0];return!dl(t,Rs,Cs,Is,Mo)||(t=[1,0,0,0,1,0,0,0,1],!dl(t,Rs,Cs,Is,Mo))?!1:(bo.crossVectors(Ai,Ri),t=[bo.x,bo.y,bo.z],dl(t,Rs,Cs,Is,Mo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},oi=[new N,new N,new N,new N,new N,new N,new N,new N],Ln=new N,vo=new Wt,Rs=new N,Cs=new N,Is=new N,Ai=new N,Ri=new N,ss=new N,Lr=new N,Mo=new N,bo=new N,rs=new N;function dl(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){rs.fromArray(i,r);let a=s.x*Math.abs(rs.x)+s.y*Math.abs(rs.y)+s.z*Math.abs(rs.z),l=e.dot(rs),c=t.dot(rs),u=n.dot(rs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var W0=new Wt,Dr=new N,fl=new N,sn=class{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):W0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Dr.subVectors(e,this.center);let t=Dr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Dr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Dr.copy(e.center).add(fl)),this.expandByPoint(Dr.copy(e.center).sub(fl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},ai=new N,pl=new N,Eo=new N,Ci=new N,ml=new N,So=new N,gl=new N,ps=class{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ai.copy(this.origin).addScaledVector(this.direction,t),ai.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){pl.copy(e).add(t).multiplyScalar(.5),Eo.copy(t).sub(e).normalize(),Ci.copy(this.origin).sub(pl);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Eo),a=Ci.dot(this.direction),l=-Ci.dot(Eo),c=Ci.lengthSq(),u=Math.abs(1-o*o),h,f,p,m;if(u>0)if(h=o*l-a,f=o*a-l,m=r*u,h>=0)if(f>=-m)if(f<=m){let x=1/u;h*=x,f*=x,p=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f<=-m?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c):f<=m?(h=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(pl).addScaledVector(Eo,f),p}intersectSphere(e,t){ai.subVectors(e.center,this.origin);let n=ai.dot(this.direction),s=ai.dot(ai)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ai)!==null}intersectTriangle(e,t,n,s,r){ml.subVectors(t,e),So.subVectors(n,e),gl.crossVectors(ml,So);let o=this.direction.dot(gl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ci.subVectors(this.origin,e);let l=a*this.direction.dot(So.crossVectors(Ci,So));if(l<0)return null;let c=a*this.direction.dot(ml.cross(Ci));if(c<0||l+c>o)return null;let u=-a*Ci.dot(gl);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Be=class i{constructor(e,t,n,s,r,o,a,l,c,u,h,f,p,m,x,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,u,h,f,p,m,x,g)}set(e,t,n,s,r,o,a,l,c,u,h,f,p,m,x,g){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=m,d[11]=x,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Ps.setFromMatrixColumn(e,0).length(),r=1/Ps.setFromMatrixColumn(e,1).length(),o=1/Ps.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let f=o*u,p=o*h,m=a*u,x=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+m*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=m+p*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*u,p=l*h,m=c*u,x=c*h;t[0]=f+x*a,t[4]=m*a-p,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=p*a-m,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*u,p=l*h,m=c*u,x=c*h;t[0]=f-x*a,t[4]=-o*h,t[8]=m+p*a,t[1]=p+m*a,t[5]=o*u,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*u,p=o*h,m=a*u,x=a*h;t[0]=l*u,t[4]=m*c-p,t[8]=f*c+x,t[1]=l*h,t[5]=x*c+f,t[9]=p*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,p=o*c,m=a*l,x=a*c;t[0]=l*u,t[4]=x-f*h,t[8]=m*h+p,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*h+m,t[10]=f-x*h}else if(e.order==="XZY"){let f=o*l,p=o*c,m=a*l,x=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+x,t[5]=o*u,t[9]=p*h-m,t[2]=m*h-p,t[6]=a*u,t[10]=x*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(X0,e,q0)}lookAt(e,t,n){let s=this.elements;return mn.subVectors(e,t),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),Ii.crossVectors(n,mn),Ii.lengthSq()===0&&(Math.abs(n.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),Ii.crossVectors(n,mn)),Ii.normalize(),wo.crossVectors(mn,Ii),s[0]=Ii.x,s[4]=wo.x,s[8]=mn.x,s[1]=Ii.y,s[5]=wo.y,s[9]=mn.y,s[2]=Ii.z,s[6]=wo.z,s[10]=mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],p=n[13],m=n[2],x=n[6],g=n[10],d=n[14],b=n[3],y=n[7],M=n[11],C=n[15],T=s[0],E=s[4],I=s[8],_=s[12],v=s[1],w=s[5],U=s[9],S=s[13],D=s[2],z=s[6],P=s[10],O=s[14],F=s[3],$=s[7],Y=s[11],ne=s[15];return r[0]=o*T+a*v+l*D+c*F,r[4]=o*E+a*w+l*z+c*$,r[8]=o*I+a*U+l*P+c*Y,r[12]=o*_+a*S+l*O+c*ne,r[1]=u*T+h*v+f*D+p*F,r[5]=u*E+h*w+f*z+p*$,r[9]=u*I+h*U+f*P+p*Y,r[13]=u*_+h*S+f*O+p*ne,r[2]=m*T+x*v+g*D+d*F,r[6]=m*E+x*w+g*z+d*$,r[10]=m*I+x*U+g*P+d*Y,r[14]=m*_+x*S+g*O+d*ne,r[3]=b*T+y*v+M*D+C*F,r[7]=b*E+y*w+M*z+C*$,r[11]=b*I+y*U+M*P+C*Y,r[15]=b*_+y*S+M*O+C*ne,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],p=e[14],m=e[3],x=e[7],g=e[11],d=e[15];return m*(+r*l*h-s*c*h-r*a*f+n*c*f+s*a*p-n*l*p)+x*(+t*l*p-t*c*f+r*o*f-s*o*p+s*c*u-r*l*u)+g*(+t*c*h-t*a*p-r*o*h+n*o*p+r*a*u-n*c*u)+d*(-s*a*u-t*l*h+t*a*f+s*o*h-n*o*f+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],p=e[11],m=e[12],x=e[13],g=e[14],d=e[15],b=h*g*c-x*f*c+x*l*p-a*g*p-h*l*d+a*f*d,y=m*f*c-u*g*c-m*l*p+o*g*p+u*l*d-o*f*d,M=u*x*c-m*h*c+m*a*p-o*x*p-u*a*d+o*h*d,C=m*h*l-u*x*l-m*a*f+o*x*f+u*a*g-o*h*g,T=t*b+n*y+s*M+r*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/T;return e[0]=b*E,e[1]=(x*f*r-h*g*r-x*s*p+n*g*p+h*s*d-n*f*d)*E,e[2]=(a*g*r-x*l*r+x*s*c-n*g*c-a*s*d+n*l*d)*E,e[3]=(h*l*r-a*f*r-h*s*c+n*f*c+a*s*p-n*l*p)*E,e[4]=y*E,e[5]=(u*g*r-m*f*r+m*s*p-t*g*p-u*s*d+t*f*d)*E,e[6]=(m*l*r-o*g*r-m*s*c+t*g*c+o*s*d-t*l*d)*E,e[7]=(o*f*r-u*l*r+u*s*c-t*f*c-o*s*p+t*l*p)*E,e[8]=M*E,e[9]=(m*h*r-u*x*r-m*n*p+t*x*p+u*n*d-t*h*d)*E,e[10]=(o*x*r-m*a*r+m*n*c-t*x*c-o*n*d+t*a*d)*E,e[11]=(u*a*r-o*h*r-u*n*c+t*h*c+o*n*p-t*a*p)*E,e[12]=C*E,e[13]=(u*x*s-m*h*s+m*n*f-t*x*f-u*n*g+t*h*g)*E,e[14]=(m*a*s-o*x*s-m*n*l+t*x*l+o*n*g-t*a*g)*E,e[15]=(o*h*s-u*a*s+u*n*l-t*h*l-o*n*f+t*a*f)*E,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,f=r*c,p=r*u,m=r*h,x=o*u,g=o*h,d=a*h,b=l*c,y=l*u,M=l*h,C=n.x,T=n.y,E=n.z;return s[0]=(1-(x+d))*C,s[1]=(p+M)*C,s[2]=(m-y)*C,s[3]=0,s[4]=(p-M)*T,s[5]=(1-(f+d))*T,s[6]=(g+b)*T,s[7]=0,s[8]=(m+y)*E,s[9]=(g-b)*E,s[10]=(1-(f+x))*E,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Ps.set(s[0],s[1],s[2]).length(),o=Ps.set(s[4],s[5],s[6]).length(),a=Ps.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Dn.copy(this);let c=1/r,u=1/o,h=1/a;return Dn.elements[0]*=c,Dn.elements[1]*=c,Dn.elements[2]*=c,Dn.elements[4]*=u,Dn.elements[5]*=u,Dn.elements[6]*=u,Dn.elements[8]*=h,Dn.elements[9]*=h,Dn.elements[10]*=h,t.setFromRotationMatrix(Dn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=pi){let l=this.elements,c=2*r/(t-e),u=2*r/(n-s),h=(t+e)/(t-e),f=(n+s)/(n-s),p,m;if(a===pi)p=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===na)p=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=pi){let l=this.elements,c=1/(t-e),u=1/(n-s),h=1/(o-r),f=(t+e)*c,p=(n+s)*u,m,x;if(a===pi)m=(o+r)*h,x=-2*h;else if(a===na)m=r*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ps=new N,Dn=new Be,X0=new N(0,0,0),q0=new N(1,1,1),Ii=new N,wo=new N,mn=new N,ed=new Be,td=new At,$n=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Zt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ed.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ed,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return td.setFromEuler(this),this.setFromQuaternion(td,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};$n.DEFAULT_ORDER="XYZ";var jr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Y0=0,nd=new N,Ls=new At,li=new Be,To=new N,Nr=new N,K0=new N,Z0=new At,id=new N(1,0,0),sd=new N(0,1,0),rd=new N(0,0,1),od={type:"added"},$0={type:"removed"},Ds={type:"childadded",child:null},xl={type:"childremoved",child:null},Rt=class i extends xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Y0++}),this.uuid=Fn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new N,t=new $n,n=new At,s=new N(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Be},normalMatrix:{value:new Ke}}),this.matrix=new Be,this.matrixWorld=new Be,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ls.setFromAxisAngle(e,t),this.quaternion.multiply(Ls),this}rotateOnWorldAxis(e,t){return Ls.setFromAxisAngle(e,t),this.quaternion.premultiply(Ls),this}rotateX(e){return this.rotateOnAxis(id,e)}rotateY(e){return this.rotateOnAxis(sd,e)}rotateZ(e){return this.rotateOnAxis(rd,e)}translateOnAxis(e,t){return nd.copy(e).applyQuaternion(this.quaternion),this.position.add(nd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(id,e)}translateY(e){return this.translateOnAxis(sd,e)}translateZ(e){return this.translateOnAxis(rd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(li.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?To.copy(e):To.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?li.lookAt(Nr,To,this.up):li.lookAt(To,Nr,this.up),this.quaternion.setFromRotationMatrix(li),s&&(li.extractRotation(s.matrixWorld),Ls.setFromRotationMatrix(li),this.quaternion.premultiply(Ls.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(od),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent($0),xl.child=e,this.dispatchEvent(xl),xl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),li.multiply(e.parent.matrixWorld)),e.applyMatrix4(li),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(od),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nr,e,K0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nr,Z0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),p=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Rt.DEFAULT_UP=new N(0,1,0);Rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Nn=new N,ci=new N,_l=new N,hi=new N,Ns=new N,Us=new N,ad=new N,yl=new N,vl=new N,Ml=new N,bl=new ct,El=new ct,Sl=new ct,Ni=class i{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Nn.subVectors(e,t),s.cross(Nn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Nn.subVectors(s,t),ci.subVectors(n,t),_l.subVectors(e,t);let o=Nn.dot(Nn),a=Nn.dot(ci),l=Nn.dot(_l),c=ci.dot(ci),u=ci.dot(_l),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let f=1/h,p=(c*l-a*u)*f,m=(o*u-a*l)*f;return r.set(1-p-m,m,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,hi)===null?!1:hi.x>=0&&hi.y>=0&&hi.x+hi.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,hi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,hi.x),l.addScaledVector(o,hi.y),l.addScaledVector(a,hi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return bl.setScalar(0),El.setScalar(0),Sl.setScalar(0),bl.fromBufferAttribute(e,t),El.fromBufferAttribute(e,n),Sl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(bl,r.x),o.addScaledVector(El,r.y),o.addScaledVector(Sl,r.z),o}static isFrontFacing(e,t,n,s){return Nn.subVectors(n,t),ci.subVectors(e,t),Nn.cross(ci).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nn.subVectors(this.c,this.b),ci.subVectors(this.a,this.b),Nn.cross(ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Ns.subVectors(s,n),Us.subVectors(r,n),yl.subVectors(e,n);let l=Ns.dot(yl),c=Us.dot(yl);if(l<=0&&c<=0)return t.copy(n);vl.subVectors(e,s);let u=Ns.dot(vl),h=Us.dot(vl);if(u>=0&&h<=u)return t.copy(s);let f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Ns,o);Ml.subVectors(e,r);let p=Ns.dot(Ml),m=Us.dot(Ml);if(m>=0&&p<=m)return t.copy(r);let x=p*c-l*m;if(x<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(n).addScaledVector(Us,a);let g=u*m-p*h;if(g<=0&&h-u>=0&&p-m>=0)return ad.subVectors(r,s),a=(h-u)/(h-u+(p-m)),t.copy(s).addScaledVector(ad,a);let d=1/(g+x+f);return o=x*d,a=f*d,t.copy(n).addScaledVector(Ns,o).addScaledVector(Us,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Sf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pi={h:0,s:0,l:0},Ao={h:0,s:0,l:0};function wl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var ve=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=je.workingColorSpace){return this.r=e,this.g=t,this.b=n,je.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=je.workingColorSpace){if(e=yh(e,1),t=Zt(t,0,1),n=Zt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=wl(o,r,e+1/3),this.g=wl(o,r,e),this.b=wl(o,r,e-1/3)}return je.toWorkingColorSpace(this,s),this}setStyle(e,t=gt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=gt){let n=Sf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mi(e.r),this.g=mi(e.g),this.b=mi(e.b),this}copyLinearToSRGB(e){return this.r=Js(e.r),this.g=Js(e.g),this.b=Js(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gt){return je.fromWorkingColorSpace(Kt.copy(this),e),Math.round(Zt(Kt.r*255,0,255))*65536+Math.round(Zt(Kt.g*255,0,255))*256+Math.round(Zt(Kt.b*255,0,255))}getHexString(e=gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.fromWorkingColorSpace(Kt.copy(this),t);let n=Kt.r,s=Kt.g,r=Kt.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=je.workingColorSpace){return je.fromWorkingColorSpace(Kt.copy(this),t),e.r=Kt.r,e.g=Kt.g,e.b=Kt.b,e}getStyle(e=gt){je.fromWorkingColorSpace(Kt.copy(this),e);let t=Kt.r,n=Kt.g,s=Kt.b;return e!==gt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Pi),this.setHSL(Pi.h+e,Pi.s+t,Pi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Pi),e.getHSL(Ao);let n=Yr(Pi.h,Ao.h,t),s=Yr(Pi.s,Ao.s,t),r=Yr(Pi.l,Ao.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Kt=new ve;ve.NAMES=Sf;var J0=0,un=class extends xi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:J0++}),this.uuid=Fn(),this.name="",this.blending=Zs,this.side=Zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hl,this.blendDst=Vl,this.blendEquation=us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ve(0,0,0),this.blendAlpha=0,this.depthFunc=Qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ts,this.stencilZFail=Ts,this.stencilZPass=Ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Zs&&(n.blending=this.blending),this.side!==Zn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Hl&&(n.blendSrc=this.blendSrc),this.blendDst!==Vl&&(n.blendDst=this.blendDst),this.blendEquation!==us&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Qs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ts&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ts&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ts&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},ke=class extends un{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.combine=lf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Ut=new N,Ro=new be,Qe=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Sc,this.updateRanges=[],this.gpuType=zn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ro.fromBufferAttribute(this,t),Ro.applyMatrix3(e),this.setXY(t,Ro.x,Ro.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix3(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=On(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=yt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=On(t,this.array)),t}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=On(t,this.array)),t}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=On(t,this.array)),t}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=On(t,this.array)),t}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),s=yt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),s=yt(s,this.array),r=yt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Sc&&(e.usage=this.usage),e}};var ar=class extends Qe{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ra=class extends Qe{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var tt=class extends Qe{constructor(e,t,n){super(new Float32Array(e),t,n)}},j0=0,En=new Be,Tl=new Rt,Os=new N,gn=new Wt,Ur=new Wt,Ht=new N,lt=class i extends xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:j0++}),this.uuid=Fn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ef(e)?ra:ar)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ke().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return En.makeRotationFromQuaternion(e),this.applyMatrix4(En),this}rotateX(e){return En.makeRotationX(e),this.applyMatrix4(En),this}rotateY(e){return En.makeRotationY(e),this.applyMatrix4(En),this}rotateZ(e){return En.makeRotationZ(e),this.applyMatrix4(En),this}translate(e,t,n){return En.makeTranslation(e,t,n),this.applyMatrix4(En),this}scale(e,t,n){return En.makeScale(e,t,n),this.applyMatrix4(En),this}lookAt(e){return Tl.lookAt(e),Tl.updateMatrix(),this.applyMatrix4(Tl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Os).negate(),this.translate(Os.x,Os.y,Os.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new tt(n,3))}else{for(let n=0,s=t.count;n<s;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];gn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){let n=this.boundingSphere.center;if(gn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Ur.setFromBufferAttribute(a),this.morphTargetsRelative?(Ht.addVectors(gn.min,Ur.min),gn.expandByPoint(Ht),Ht.addVectors(gn.max,Ur.max),gn.expandByPoint(Ht)):(gn.expandByPoint(Ur.min),gn.expandByPoint(Ur.max))}gn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Ht.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Ht));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ht.fromBufferAttribute(a,c),l&&(Os.fromBufferAttribute(e,c),Ht.add(Os)),s=Math.max(s,n.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qe(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<n.count;I++)a[I]=new N,l[I]=new N;let c=new N,u=new N,h=new N,f=new be,p=new be,m=new be,x=new N,g=new N;function d(I,_,v){c.fromBufferAttribute(n,I),u.fromBufferAttribute(n,_),h.fromBufferAttribute(n,v),f.fromBufferAttribute(r,I),p.fromBufferAttribute(r,_),m.fromBufferAttribute(r,v),u.sub(c),h.sub(c),p.sub(f),m.sub(f);let w=1/(p.x*m.y-m.x*p.y);isFinite(w)&&(x.copy(u).multiplyScalar(m.y).addScaledVector(h,-p.y).multiplyScalar(w),g.copy(h).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(w),a[I].add(x),a[_].add(x),a[v].add(x),l[I].add(g),l[_].add(g),l[v].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let I=0,_=b.length;I<_;++I){let v=b[I],w=v.start,U=v.count;for(let S=w,D=w+U;S<D;S+=3)d(e.getX(S+0),e.getX(S+1),e.getX(S+2))}let y=new N,M=new N,C=new N,T=new N;function E(I){C.fromBufferAttribute(s,I),T.copy(C);let _=a[I];y.copy(_),y.sub(C.multiplyScalar(C.dot(_))).normalize(),M.crossVectors(T,_);let w=M.dot(l[I])<0?-1:1;o.setXYZW(I,y.x,y.y,y.z,w)}for(let I=0,_=b.length;I<_;++I){let v=b[I],w=v.start,U=v.count;for(let S=w,D=w+U;S<D;S+=3)E(e.getX(S+0)),E(e.getX(S+1)),E(e.getX(S+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Qe(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let s=new N,r=new N,o=new N,a=new N,l=new N,c=new N,u=new N,h=new N;if(e)for(let f=0,p=e.count;f<p;f+=3){let m=e.getX(f+0),x=e.getX(f+1),g=e.getX(f+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,g),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),a.add(u),l.add(u),c.add(u),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ht.fromBufferAttribute(e,t),Ht.normalize(),e.setXYZ(t,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u),p=0,m=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*u;for(let d=0;d<u;d++)f[m++]=c[p++]}return new Qe(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){let f=c[u],p=e(f,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){let p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},ld=new Be,os=new ps,Co=new sn,cd=new N,Io=new N,Po=new N,Lo=new N,Al=new N,Do=new N,hd=new N,No=new N,ue=class extends Rt{constructor(e=new lt,t=new ke){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Do.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],h=r[l];u!==0&&(Al.fromBufferAttribute(h,e),o?Do.addScaledVector(Al,u):Do.addScaledVector(Al.sub(t),u))}t.add(Do)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Co.copy(n.boundingSphere),Co.applyMatrix4(r),os.copy(e.ray).recast(e.near),!(Co.containsPoint(os.origin)===!1&&(os.intersectSphere(Co,cd)===null||os.origin.distanceToSquared(cd)>(e.far-e.near)**2))&&(ld.copy(r).invert(),os.copy(e.ray).applyMatrix4(ld),!(n.boundingBox!==null&&os.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,os)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=f.length;m<x;m++){let g=f[m],d=o[g.materialIndex],b=Math.max(g.start,p.start),y=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let M=b,C=y;M<C;M+=3){let T=a.getX(M),E=a.getX(M+1),I=a.getX(M+2);s=Uo(this,d,e,n,c,u,h,T,E,I),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let g=m,d=x;g<d;g+=3){let b=a.getX(g),y=a.getX(g+1),M=a.getX(g+2);s=Uo(this,o,e,n,c,u,h,b,y,M),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,x=f.length;m<x;m++){let g=f[m],d=o[g.materialIndex],b=Math.max(g.start,p.start),y=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let M=b,C=y;M<C;M+=3){let T=M,E=M+1,I=M+2;s=Uo(this,d,e,n,c,u,h,T,E,I),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let g=m,d=x;g<d;g+=3){let b=g,y=g+1,M=g+2;s=Uo(this,o,e,n,c,u,h,b,y,M),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function Q0(i,e,t,n,s,r,o,a){let l;if(e.side===$t?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===Zn,a),l===null)return null;No.copy(a),No.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(No);return c<t.near||c>t.far?null:{distance:c,point:No.clone(),object:i}}function Uo(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,Io),i.getVertexPosition(l,Po),i.getVertexPosition(c,Lo);let u=Q0(i,e,t,n,Io,Po,Lo,hd);if(u){let h=new N;Ni.getBarycoord(hd,Io,Po,Lo,h),s&&(u.uv=Ni.getInterpolatedAttribute(s,a,l,c,h,new be)),r&&(u.uv1=Ni.getInterpolatedAttribute(r,a,l,c,h,new be)),o&&(u.normal=Ni.getInterpolatedAttribute(o,a,l,c,h,new N),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new N,materialIndex:0};Ni.getNormal(Io,Po,Lo,f.normal),u.face=f,u.barycoord=h}return u}var Ct=class i extends lt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],h=[],f=0,p=0;m("z","y","x",-1,-1,n,t,e,o,r,0),m("z","y","x",1,-1,n,t,-e,o,r,1),m("x","z","y",1,1,e,n,t,s,o,2),m("x","z","y",1,-1,e,n,-t,s,o,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new tt(c,3)),this.setAttribute("normal",new tt(u,3)),this.setAttribute("uv",new tt(h,2));function m(x,g,d,b,y,M,C,T,E,I,_){let v=M/E,w=C/I,U=M/2,S=C/2,D=T/2,z=E+1,P=I+1,O=0,F=0,$=new N;for(let Y=0;Y<P;Y++){let ne=Y*w-S;for(let fe=0;fe<z;fe++){let Ae=fe*v-U;$[x]=Ae*b,$[g]=ne*y,$[d]=D,c.push($.x,$.y,$.z),$[x]=0,$[g]=0,$[d]=T>0?1:-1,u.push($.x,$.y,$.z),h.push(fe/E),h.push(1-Y/I),O+=1}}for(let Y=0;Y<I;Y++)for(let ne=0;ne<E;ne++){let fe=f+ne+z*Y,Ae=f+ne+z*(Y+1),J=f+(ne+1)+z*(Y+1),ce=f+(ne+1)+z*Y;l.push(fe,Ae,ce),l.push(Ae,J,ce),F+=6}a.addGroup(p,F,_),p+=F,f+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function lr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function tn(i){let e={};for(let t=0;t<i.length;t++){let n=lr(i[t]);for(let s in n)e[s]=n[s]}return e}function eg(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function wf(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}var Xi={clone:lr,merge:tn},tg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ng=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,It=class extends un{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tg,this.fragmentShader=ng,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=lr(e.uniforms),this.uniformsGroups=eg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},oa=class extends Rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Be,this.projectionMatrix=new Be,this.projectionMatrixInverse=new Be,this.coordinateSystem=pi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Li=new N,ud=new be,dd=new be,zt=class extends oa{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=or*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(qr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return or*2*Math.atan(Math.tan(qr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Li.x,Li.y).multiplyScalar(-e/Li.z),Li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Li.x,Li.y).multiplyScalar(-e/Li.z)}getViewSize(e,t){return this.getViewBounds(e,ud,dd),t.subVectors(dd,ud)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(qr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},zs=-90,Fs=1,Rc=class extends Rt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new zt(zs,Fs,e,t);s.layers=this.layers,this.add(s);let r=new zt(zs,Fs,e,t);r.layers=this.layers,this.add(r);let o=new zt(zs,Fs,e,t);o.layers=this.layers,this.add(o);let a=new zt(zs,Fs,e,t);a.layers=this.layers,this.add(a);let l=new zt(zs,Fs,e,t);l.layers=this.layers,this.add(l);let c=new zt(zs,Fs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===pi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===na)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,f,p),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},aa=class extends Vt{constructor(e,t,n,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:er,super(e,t,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Cc=class extends nn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new aa(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:cn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ct(5,5,5),r=new It({name:"CubemapFromEquirect",uniforms:lr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$t,blending:Kn});r.uniforms.tEquirect.value=t;let o=new ue(s,r),a=t.minFilter;return t.minFilter===Yn&&(t.minFilter=cn),new Rc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},Rl=new N,ig=new N,sg=new Ke,Un=class{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Rl.subVectors(n,t).cross(ig.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Rl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||sg.getNormalMatrix(e),s=this.coplanarPoint(Rl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},as=new sn,Oo=new N,Qr=class{constructor(e=new Un,t=new Un,n=new Un,s=new Un,r=new Un,o=new Un){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=pi){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],f=s[7],p=s[8],m=s[9],x=s[10],g=s[11],d=s[12],b=s[13],y=s[14],M=s[15];if(n[0].setComponents(l-r,f-c,g-p,M-d).normalize(),n[1].setComponents(l+r,f+c,g+p,M+d).normalize(),n[2].setComponents(l+o,f+u,g+m,M+b).normalize(),n[3].setComponents(l-o,f-u,g-m,M-b).normalize(),n[4].setComponents(l-a,f-h,g-x,M-y).normalize(),t===pi)n[5].setComponents(l+a,f+h,g+x,M+y).normalize();else if(t===na)n[5].setComponents(a,h,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),as.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),as.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(as)}intersectsSprite(e){return as.center.set(0,0,0),as.radius=.7071067811865476,as.applyMatrix4(e.matrixWorld),this.intersectsSphere(as)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Oo.x=s.normal.x>0?e.max.x:e.min.x,Oo.y=s.normal.y>0?e.max.y:e.min.y,Oo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Oo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Tf(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function rg(i){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,h=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((p,m)=>p.start-m.start);let f=0;for(let p=1;p<h.length;p++){let m=h[f],x=h[p];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++f,h[f]=x)}h.length=f+1;for(let p=0,m=h.length;p<m;p++){let x=h[p];i.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var wn=class i extends lt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,h=e/a,f=t/l,p=[],m=[],x=[],g=[];for(let d=0;d<u;d++){let b=d*f-o;for(let y=0;y<c;y++){let M=y*h-r;m.push(M,-b,0),x.push(0,0,1),g.push(y/a),g.push(1-d/l)}}for(let d=0;d<l;d++)for(let b=0;b<a;b++){let y=b+c*d,M=b+c*(d+1),C=b+1+c*(d+1),T=b+1+c*d;p.push(y,M,T),p.push(M,C,T)}this.setIndex(p),this.setAttribute("position",new tt(m,3)),this.setAttribute("normal",new tt(x,3)),this.setAttribute("uv",new tt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},og=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ag=`#ifdef USE_ALPHAHASH
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
#endif`,lg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ug=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dg=`#ifdef USE_AOMAP
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
#endif`,fg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pg=`#ifdef USE_BATCHING
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
#endif`,mg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_g=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,yg=`#ifdef USE_IRIDESCENCE
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
#endif`,vg=`#ifdef USE_BUMPMAP
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
#endif`,Mg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,bg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Eg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Tg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ag=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Rg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Cg=`#define PI 3.141592653589793
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
} // validated`,Ig=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Pg=`vec3 transformedNormal = objectNormal;
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
#endif`,Lg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ng=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ug=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Og="gl_FragColor = linearToOutputTexel( gl_FragColor );",zg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Fg=`#ifdef USE_ENVMAP
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
#endif`,Bg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,kg=`#ifdef USE_ENVMAP
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
#endif`,Hg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vg=`#ifdef USE_ENVMAP
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
#endif`,Gg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yg=`#ifdef USE_GRADIENTMAP
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
}`,Kg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$g=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jg=`uniform bool receiveShadow;
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
#endif`,jg=`#ifdef USE_ENVMAP
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
#endif`,Qg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ex=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,tx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ix=`PhysicalMaterial material;
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
#endif`,sx=`struct PhysicalMaterial {
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
}`,rx=`
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
#endif`,ox=`#if defined( RE_IndirectDiffuse )
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
#endif`,ax=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ux=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,dx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,px=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,mx=`#if defined( USE_POINTS_UV )
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
#endif`,gx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_x=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mx=`#ifdef USE_MORPHTARGETS
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
#endif`,bx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ex=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Sx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,wx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ax=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Rx=`#ifdef USE_NORMALMAP
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
#endif`,Cx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ix=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Px=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Lx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Dx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Nx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ux=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ox=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Hx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Wx=`float getShadowMask() {
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
}`,Xx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qx=`#ifdef USE_SKINNING
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
#endif`,Yx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Kx=`#ifdef USE_SKINNING
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
#endif`,Zx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$x=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qx=`#ifdef USE_TRANSMISSION
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
#endif`,e_=`#ifdef USE_TRANSMISSION
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
#endif`,t_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,n_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,i_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,s_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,r_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,o_=`uniform sampler2D t2D;
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
}`,a_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,l_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,c_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,h_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,u_=`#include <common>
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
}`,d_=`#if DEPTH_PACKING == 3200
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
}`,f_=`#define DISTANCE
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
}`,p_=`#define DISTANCE
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
}`,m_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,g_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x_=`uniform float scale;
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
}`,__=`uniform vec3 diffuse;
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
}`,y_=`#include <common>
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
}`,v_=`uniform vec3 diffuse;
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
}`,M_=`#define LAMBERT
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
}`,b_=`#define LAMBERT
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
}`,E_=`#define MATCAP
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
}`,S_=`#define MATCAP
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
}`,w_=`#define NORMAL
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
}`,T_=`#define NORMAL
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
}`,A_=`#define PHONG
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
}`,R_=`#define PHONG
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
}`,C_=`#define STANDARD
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
}`,I_=`#define STANDARD
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
}`,P_=`#define TOON
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
}`,L_=`#define TOON
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
}`,D_=`uniform float size;
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
}`,N_=`uniform vec3 diffuse;
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
}`,U_=`#include <common>
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
}`,O_=`uniform vec3 color;
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
}`,z_=`uniform float rotation;
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
}`,F_=`uniform vec3 diffuse;
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
}`,Je={alphahash_fragment:og,alphahash_pars_fragment:ag,alphamap_fragment:lg,alphamap_pars_fragment:cg,alphatest_fragment:hg,alphatest_pars_fragment:ug,aomap_fragment:dg,aomap_pars_fragment:fg,batching_pars_vertex:pg,batching_vertex:mg,begin_vertex:gg,beginnormal_vertex:xg,bsdfs:_g,iridescence_fragment:yg,bumpmap_pars_fragment:vg,clipping_planes_fragment:Mg,clipping_planes_pars_fragment:bg,clipping_planes_pars_vertex:Eg,clipping_planes_vertex:Sg,color_fragment:wg,color_pars_fragment:Tg,color_pars_vertex:Ag,color_vertex:Rg,common:Cg,cube_uv_reflection_fragment:Ig,defaultnormal_vertex:Pg,displacementmap_pars_vertex:Lg,displacementmap_vertex:Dg,emissivemap_fragment:Ng,emissivemap_pars_fragment:Ug,colorspace_fragment:Og,colorspace_pars_fragment:zg,envmap_fragment:Fg,envmap_common_pars_fragment:Bg,envmap_pars_fragment:kg,envmap_pars_vertex:Hg,envmap_physical_pars_fragment:jg,envmap_vertex:Vg,fog_vertex:Gg,fog_pars_vertex:Wg,fog_fragment:Xg,fog_pars_fragment:qg,gradientmap_pars_fragment:Yg,lightmap_pars_fragment:Kg,lights_lambert_fragment:Zg,lights_lambert_pars_fragment:$g,lights_pars_begin:Jg,lights_toon_fragment:Qg,lights_toon_pars_fragment:ex,lights_phong_fragment:tx,lights_phong_pars_fragment:nx,lights_physical_fragment:ix,lights_physical_pars_fragment:sx,lights_fragment_begin:rx,lights_fragment_maps:ox,lights_fragment_end:ax,logdepthbuf_fragment:lx,logdepthbuf_pars_fragment:cx,logdepthbuf_pars_vertex:hx,logdepthbuf_vertex:ux,map_fragment:dx,map_pars_fragment:fx,map_particle_fragment:px,map_particle_pars_fragment:mx,metalnessmap_fragment:gx,metalnessmap_pars_fragment:xx,morphinstance_vertex:_x,morphcolor_vertex:yx,morphnormal_vertex:vx,morphtarget_pars_vertex:Mx,morphtarget_vertex:bx,normal_fragment_begin:Ex,normal_fragment_maps:Sx,normal_pars_fragment:wx,normal_pars_vertex:Tx,normal_vertex:Ax,normalmap_pars_fragment:Rx,clearcoat_normal_fragment_begin:Cx,clearcoat_normal_fragment_maps:Ix,clearcoat_pars_fragment:Px,iridescence_pars_fragment:Lx,opaque_fragment:Dx,packing:Nx,premultiplied_alpha_fragment:Ux,project_vertex:Ox,dithering_fragment:zx,dithering_pars_fragment:Fx,roughnessmap_fragment:Bx,roughnessmap_pars_fragment:kx,shadowmap_pars_fragment:Hx,shadowmap_pars_vertex:Vx,shadowmap_vertex:Gx,shadowmask_pars_fragment:Wx,skinbase_vertex:Xx,skinning_pars_vertex:qx,skinning_vertex:Yx,skinnormal_vertex:Kx,specularmap_fragment:Zx,specularmap_pars_fragment:$x,tonemapping_fragment:Jx,tonemapping_pars_fragment:jx,transmission_fragment:Qx,transmission_pars_fragment:e_,uv_pars_fragment:t_,uv_pars_vertex:n_,uv_vertex:i_,worldpos_vertex:s_,background_vert:r_,background_frag:o_,backgroundCube_vert:a_,backgroundCube_frag:l_,cube_vert:c_,cube_frag:h_,depth_vert:u_,depth_frag:d_,distanceRGBA_vert:f_,distanceRGBA_frag:p_,equirect_vert:m_,equirect_frag:g_,linedashed_vert:x_,linedashed_frag:__,meshbasic_vert:y_,meshbasic_frag:v_,meshlambert_vert:M_,meshlambert_frag:b_,meshmatcap_vert:E_,meshmatcap_frag:S_,meshnormal_vert:w_,meshnormal_frag:T_,meshphong_vert:A_,meshphong_frag:R_,meshphysical_vert:C_,meshphysical_frag:I_,meshtoon_vert:P_,meshtoon_frag:L_,points_vert:D_,points_frag:N_,shadow_vert:U_,shadow_frag:O_,sprite_vert:z_,sprite_frag:F_},pe={common:{diffuse:{value:new ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new ve(16777215)},opacity:{value:1},center:{value:new be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},qn={basic:{uniforms:tn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:tn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new ve(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:tn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new ve(0)},specular:{value:new ve(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:tn([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:tn([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new ve(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:tn([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:tn([pe.points,pe.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:tn([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:tn([pe.common,pe.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:tn([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:tn([pe.sprite,pe.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distanceRGBA:{uniforms:tn([pe.common,pe.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distanceRGBA_vert,fragmentShader:Je.distanceRGBA_frag},shadow:{uniforms:tn([pe.lights,pe.fog,{color:{value:new ve(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};qn.physical={uniforms:tn([qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new ve(0)},specularColor:{value:new ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};var zo={r:0,b:0,g:0},ls=new $n,B_=new Be;function k_(i,e,t,n,s,r,o){let a=new ve(0),l=r===!0?0:1,c,u,h=null,f=0,p=null;function m(b){let y=b.isScene===!0?b.background:null;return y&&y.isTexture&&(y=(b.backgroundBlurriness>0?t:e).get(y)),y}function x(b){let y=!1,M=m(b);M===null?d(a,l):M&&M.isColor&&(d(M,1),y=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(b,y){let M=m(y);M&&(M.isCubeTexture||M.mapping===Ia)?(u===void 0&&(u=new ue(new Ct(1,1,1),new It({name:"BackgroundCubeMaterial",uniforms:lr(qn.backgroundCube.uniforms),vertexShader:qn.backgroundCube.vertexShader,fragmentShader:qn.backgroundCube.fragmentShader,side:$t,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,T,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),ls.copy(y.backgroundRotation),ls.x*=-1,ls.y*=-1,ls.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ls.y*=-1,ls.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(B_.makeRotationFromEuler(ls)),u.material.toneMapped=je.getTransfer(M.colorSpace)!==mt,(h!==M||f!==M.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=M,f=M.version,p=i.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new ue(new wn(2,2),new It({name:"BackgroundMaterial",uniforms:lr(qn.background.uniforms),vertexShader:qn.background.vertexShader,fragmentShader:qn.background.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=je.getTransfer(M.colorSpace)!==mt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||f!==M.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,h=M,f=M.version,p=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function d(b,y){b.getRGB(zo,wf(i)),n.buffers.color.setClear(zo.r,zo.g,zo.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(b,y=1){a.set(b),l=y,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,d(a,l)},render:x,addToRenderList:g}}function H_(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(v,w,U,S,D){let z=!1,P=h(S,U,w);r!==P&&(r=P,c(r.object)),z=p(v,S,U,D),z&&m(v,S,U,D),D!==null&&e.update(D,i.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,M(v,w,U,S),D!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(D).buffer))}function l(){return i.createVertexArray()}function c(v){return i.bindVertexArray(v)}function u(v){return i.deleteVertexArray(v)}function h(v,w,U){let S=U.wireframe===!0,D=n[v.id];D===void 0&&(D={},n[v.id]=D);let z=D[w.id];z===void 0&&(z={},D[w.id]=z);let P=z[S];return P===void 0&&(P=f(l()),z[S]=P),P}function f(v){let w=[],U=[],S=[];for(let D=0;D<t;D++)w[D]=0,U[D]=0,S[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:U,attributeDivisors:S,object:v,attributes:{},index:null}}function p(v,w,U,S){let D=r.attributes,z=w.attributes,P=0,O=U.getAttributes();for(let F in O)if(O[F].location>=0){let Y=D[F],ne=z[F];if(ne===void 0&&(F==="instanceMatrix"&&v.instanceMatrix&&(ne=v.instanceMatrix),F==="instanceColor"&&v.instanceColor&&(ne=v.instanceColor)),Y===void 0||Y.attribute!==ne||ne&&Y.data!==ne.data)return!0;P++}return r.attributesNum!==P||r.index!==S}function m(v,w,U,S){let D={},z=w.attributes,P=0,O=U.getAttributes();for(let F in O)if(O[F].location>=0){let Y=z[F];Y===void 0&&(F==="instanceMatrix"&&v.instanceMatrix&&(Y=v.instanceMatrix),F==="instanceColor"&&v.instanceColor&&(Y=v.instanceColor));let ne={};ne.attribute=Y,Y&&Y.data&&(ne.data=Y.data),D[F]=ne,P++}r.attributes=D,r.attributesNum=P,r.index=S}function x(){let v=r.newAttributes;for(let w=0,U=v.length;w<U;w++)v[w]=0}function g(v){d(v,0)}function d(v,w){let U=r.newAttributes,S=r.enabledAttributes,D=r.attributeDivisors;U[v]=1,S[v]===0&&(i.enableVertexAttribArray(v),S[v]=1),D[v]!==w&&(i.vertexAttribDivisor(v,w),D[v]=w)}function b(){let v=r.newAttributes,w=r.enabledAttributes;for(let U=0,S=w.length;U<S;U++)w[U]!==v[U]&&(i.disableVertexAttribArray(U),w[U]=0)}function y(v,w,U,S,D,z,P){P===!0?i.vertexAttribIPointer(v,w,U,D,z):i.vertexAttribPointer(v,w,U,S,D,z)}function M(v,w,U,S){x();let D=S.attributes,z=U.getAttributes(),P=w.defaultAttributeValues;for(let O in z){let F=z[O];if(F.location>=0){let $=D[O];if($===void 0&&(O==="instanceMatrix"&&v.instanceMatrix&&($=v.instanceMatrix),O==="instanceColor"&&v.instanceColor&&($=v.instanceColor)),$!==void 0){let Y=$.normalized,ne=$.itemSize,fe=e.get($);if(fe===void 0)continue;let Ae=fe.buffer,J=fe.type,ce=fe.bytesPerElement,xe=J===i.INT||J===i.UNSIGNED_INT||$.gpuType===ch;if($.isInterleavedBufferAttribute){let te=$.data,V=te.stride,j=$.offset;if(te.isInstancedInterleavedBuffer){for(let X=0;X<F.locationSize;X++)d(F.location+X,te.meshPerAttribute);v.isInstancedMesh!==!0&&S._maxInstanceCount===void 0&&(S._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let X=0;X<F.locationSize;X++)g(F.location+X);i.bindBuffer(i.ARRAY_BUFFER,Ae);for(let X=0;X<F.locationSize;X++)y(F.location+X,ne/F.locationSize,J,Y,V*ce,(j+ne/F.locationSize*X)*ce,xe)}else{if($.isInstancedBufferAttribute){for(let te=0;te<F.locationSize;te++)d(F.location+te,$.meshPerAttribute);v.isInstancedMesh!==!0&&S._maxInstanceCount===void 0&&(S._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let te=0;te<F.locationSize;te++)g(F.location+te);i.bindBuffer(i.ARRAY_BUFFER,Ae);for(let te=0;te<F.locationSize;te++)y(F.location+te,ne/F.locationSize,J,Y,ne*ce,ne/F.locationSize*te*ce,xe)}}else if(P!==void 0){let Y=P[O];if(Y!==void 0)switch(Y.length){case 2:i.vertexAttrib2fv(F.location,Y);break;case 3:i.vertexAttrib3fv(F.location,Y);break;case 4:i.vertexAttrib4fv(F.location,Y);break;default:i.vertexAttrib1fv(F.location,Y)}}}}b()}function C(){I();for(let v in n){let w=n[v];for(let U in w){let S=w[U];for(let D in S)u(S[D].object),delete S[D];delete w[U]}delete n[v]}}function T(v){if(n[v.id]===void 0)return;let w=n[v.id];for(let U in w){let S=w[U];for(let D in S)u(S[D].object),delete S[D];delete w[U]}delete n[v.id]}function E(v){for(let w in n){let U=n[w];if(U[v.id]===void 0)continue;let S=U[v.id];for(let D in S)u(S[D].object),delete S[D];delete U[v.id]}}function I(){_(),o=!0,r!==s&&(r=s,c(r.object))}function _(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:_,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfProgram:E,initAttributes:x,enableAttribute:g,disableUnusedAttributes:b}}function V_(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let p=0;for(let m=0;m<h;m++)p+=u[m];t.update(p,n,1)}function l(c,u,h,f){if(h===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<c.length;m++)o(c[m],u[m],f[m]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let m=0;for(let x=0;x<h;x++)m+=u[x]*f[x];t.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function G_(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let E=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(E){return!(E!==Sn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){let I=E===Bn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==gi&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==zn&&!I)}function l(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=m>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:b,maxVaryings:y,maxFragmentUniforms:M,vertexTextures:C,maxSamples:T}}function W_(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Un,a=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let p=h.length!==0||f||n!==0||s;return s=f,n=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,p){let m=h.clippingPlanes,x=h.clipIntersection,g=h.clipShadows,d=i.get(h);if(!s||m===null||m.length===0||r&&!g)r?u(null):c();else{let b=r?0:n,y=b*4,M=d.clippingState||null;l.value=M,M=u(m,f,y,p);for(let C=0;C!==y;++C)M[C]=t[C];d.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,p,m){let x=h!==null?h.length:0,g=null;if(x!==0){if(g=l.value,m!==!0||g===null){let d=p+x*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(g===null||g.length<d)&&(g=new Float32Array(d));for(let y=0,M=p;y!==x;++y,M+=4)o.copy(h[y]).applyMatrix4(b,a),o.normal.toArray(g,M),g[M+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function X_(i){let e=new WeakMap;function t(o,a){return a===$l?o.mapping=er:a===Jl&&(o.mapping=tr),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===$l||a===Jl)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Cc(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var zi=class extends oa{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ks=4,fd=[.125,.215,.35,.446,.526,.582],ds=20,Cl=new zi,pd=new ve,Il=null,Pl=0,Ll=0,Dl=!1,hs=(1+Math.sqrt(5))/2,Bs=1/hs,md=[new N(-hs,Bs,0),new N(hs,Bs,0),new N(-Bs,0,hs),new N(Bs,0,hs),new N(0,hs,-Bs),new N(0,hs,Bs),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],la=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Il=this._renderer.getRenderTarget(),Pl=this._renderer.getActiveCubeFace(),Ll=this._renderer.getActiveMipmapLevel(),Dl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_d(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Il,Pl,Ll),this._renderer.xr.enabled=Dl,e.scissorTest=!1,Fo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===er||e.mapping===tr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Il=this._renderer.getRenderTarget(),Pl=this._renderer.getActiveCubeFace(),Ll=this._renderer.getActiveMipmapLevel(),Dl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:Bn,format:Sn,colorSpace:Qt,depthBuffer:!1},s=gd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gd(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=q_(r)),this._blurMaterial=Y_(r,e,t)}return s}_compileMaterial(e){let t=new ue(this._lodPlanes[0],e);this._renderer.compile(t,Cl)}_sceneToCubeUV(e,t,n,s){let a=new zt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(pd),u.toneMapping=Oi,u.autoClear=!1;let p=new ke({name:"PMREM.Background",side:$t,depthWrite:!1,depthTest:!1}),m=new ue(new Ct,p),x=!1,g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,x=!0):(p.color.copy(pd),x=!0);for(let d=0;d<6;d++){let b=d%3;b===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):b===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));let y=this._cubeSize;Fo(s,b*y,d>2?y:0,y,y),u.setRenderTarget(s),x&&u.render(m,a),u.render(e,a)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=g}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===er||e.mapping===tr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=_d()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xd());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new ue(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Fo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Cl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=md[(s-r-1)%md.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new ue(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ds-1),x=r/m,g=isFinite(r)?1+Math.floor(u*x):ds;g>ds&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ds}`);let d=[],b=0;for(let E=0;E<ds;++E){let I=E/x,_=Math.exp(-I*I/2);d.push(_),E===0?b+=_:E<g&&(b+=2*_)}for(let E=0;E<d.length;E++)d[E]=d[E]/b;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:y}=this;f.dTheta.value=m,f.mipInt.value=y-n;let M=this._sizeLods[s],C=3*M*(s>y-Ks?s-y+Ks:0),T=4*(this._cubeSize-M);Fo(t,C,T,3*M,2*M),l.setRenderTarget(t),l.render(h,Cl)}};function q_(i){let e=[],t=[],n=[],s=i,r=i-Ks+1+fd.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>i-Ks?l=fd[o-i+Ks-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,m=6,x=3,g=2,d=1,b=new Float32Array(x*m*p),y=new Float32Array(g*m*p),M=new Float32Array(d*m*p);for(let T=0;T<p;T++){let E=T%3*2/3-1,I=T>2?0:-1,_=[E,I,0,E+2/3,I,0,E+2/3,I+1,0,E,I,0,E+2/3,I+1,0,E,I+1,0];b.set(_,x*m*T),y.set(f,g*m*T);let v=[T,T,T,T,T,T];M.set(v,d*m*T)}let C=new lt;C.setAttribute("position",new Qe(b,x)),C.setAttribute("uv",new Qe(y,g)),C.setAttribute("faceIndex",new Qe(M,d)),e.push(C),s>Ks&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function gd(i,e,t){let n=new nn(i,e,t);return n.texture.mapping=Ia,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Fo(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Y_(i,e,t){let n=new Float32Array(ds),s=new N(0,1,0);return new It({name:"SphericalGaussianBlur",defines:{n:ds,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:vh(),fragmentShader:`

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
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function xd(){return new It({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vh(),fragmentShader:`

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
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function _d(){return new It({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function vh(){return`

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
	`}function K_(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===$l||l===Jl,u=l===er||l===tr;if(c||u){let h=e.get(a),f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new la(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{let p=a.image;return c&&p&&p.height>0||u&&p&&s(p)?(t===null&&(t=new la(i)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Z_(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Gr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function $_(i,e,t,n){let s={},r=new WeakMap;function o(h){let f=h.target;f.index!==null&&e.remove(f.index);for(let m in f.attributes)e.remove(f.attributes[m]);for(let m in f.morphAttributes){let x=f.morphAttributes[m];for(let g=0,d=x.length;g<d;g++)e.remove(x[g])}f.removeEventListener("dispose",o),delete s[f.id];let p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(h){let f=h.attributes;for(let m in f)e.update(f[m],i.ARRAY_BUFFER);let p=h.morphAttributes;for(let m in p){let x=p[m];for(let g=0,d=x.length;g<d;g++)e.update(x[g],i.ARRAY_BUFFER)}}function c(h){let f=[],p=h.index,m=h.attributes.position,x=0;if(p!==null){let b=p.array;x=p.version;for(let y=0,M=b.length;y<M;y+=3){let C=b[y+0],T=b[y+1],E=b[y+2];f.push(C,T,T,E,E,C)}}else if(m!==void 0){let b=m.array;x=m.version;for(let y=0,M=b.length/3-1;y<M;y+=3){let C=y+0,T=y+1,E=y+2;f.push(C,T,T,E,E,C)}}else return;let g=new(Ef(f)?ra:ar)(f,1);g.version=x;let d=r.get(h);d&&e.remove(d),r.set(h,g)}function u(h){let f=r.get(h);if(f){let p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function J_(i,e,t){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,p){i.drawElements(n,p,r,f*o),t.update(p,n,1)}function c(f,p,m){m!==0&&(i.drawElementsInstanced(n,p,r,f*o,m),t.update(p,n,m))}function u(f,p,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,m);let g=0;for(let d=0;d<m;d++)g+=p[d];t.update(g,n,1)}function h(f,p,m,x){if(m===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let d=0;d<f.length;d++)c(f[d]/o,p[d],x[d]);else{g.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,x,0,m);let d=0;for(let b=0;b<m;b++)d+=p[b]*x[b];t.update(d,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function j_(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Q_(i,e,t){let n=new WeakMap,s=new ct;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,f=n.get(a);if(f===void 0||f.count!==h){let _=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",_)};f!==void 0&&f.texture.dispose();let p=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],y=0;p===!0&&(y=1),m===!0&&(y=2),x===!0&&(y=3);let M=a.attributes.position.count*y,C=1;M>e.maxTextureSize&&(C=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let T=new Float32Array(M*C*4*h),E=new sa(T,M,C,h);E.type=zn,E.needsUpdate=!0;let I=y*4;for(let v=0;v<h;v++){let w=g[v],U=d[v],S=b[v],D=M*C*4*v;for(let z=0;z<w.count;z++){let P=z*I;p===!0&&(s.fromBufferAttribute(w,z),T[D+P+0]=s.x,T[D+P+1]=s.y,T[D+P+2]=s.z,T[D+P+3]=0),m===!0&&(s.fromBufferAttribute(U,z),T[D+P+4]=s.x,T[D+P+5]=s.y,T[D+P+6]=s.z,T[D+P+7]=0),x===!0&&(s.fromBufferAttribute(S,z),T[D+P+8]=s.x,T[D+P+9]=s.y,T[D+P+10]=s.z,T[D+P+11]=S.itemSize===4?s.w:1)}}f={count:h,texture:E,size:new be(M,C)},n.set(a,f),a.addEventListener("dispose",_)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];let m=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function ey(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var ca=class extends Vt{constructor(e,t,n,s,r,o,a,l,c,u=$s){if(u!==$s&&u!==ir)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===$s&&(n=fs),n===void 0&&u===ir&&(n=nr),super(null,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Jt,this.minFilter=l!==void 0?l:Jt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Af=new Vt,yd=new ca(1,1),Rf=new sa,Cf=new Ac,If=new aa,vd=[],Md=[],bd=new Float32Array(16),Ed=new Float32Array(9),Sd=new Float32Array(4);function xr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=vd[s];if(r===void 0&&(r=new Float32Array(s),vd[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Ft(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Bt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Da(i,e){let t=Md[e];t===void 0&&(t=new Int32Array(e),Md[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function ty(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function ny(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;i.uniform2fv(this.addr,e),Bt(t,e)}}function iy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ft(t,e))return;i.uniform3fv(this.addr,e),Bt(t,e)}}function sy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;i.uniform4fv(this.addr,e),Bt(t,e)}}function ry(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Bt(t,e)}else{if(Ft(t,n))return;Sd.set(n),i.uniformMatrix2fv(this.addr,!1,Sd),Bt(t,n)}}function oy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Bt(t,e)}else{if(Ft(t,n))return;Ed.set(n),i.uniformMatrix3fv(this.addr,!1,Ed),Bt(t,n)}}function ay(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Bt(t,e)}else{if(Ft(t,n))return;bd.set(n),i.uniformMatrix4fv(this.addr,!1,bd),Bt(t,n)}}function ly(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function cy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;i.uniform2iv(this.addr,e),Bt(t,e)}}function hy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;i.uniform3iv(this.addr,e),Bt(t,e)}}function uy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;i.uniform4iv(this.addr,e),Bt(t,e)}}function dy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function fy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;i.uniform2uiv(this.addr,e),Bt(t,e)}}function py(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;i.uniform3uiv(this.addr,e),Bt(t,e)}}function my(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;i.uniform4uiv(this.addr,e),Bt(t,e)}}function gy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(yd.compareFunction=Mf,r=yd):r=Af,t.setTexture2D(e||r,s)}function xy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Cf,s)}function _y(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||If,s)}function yy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Rf,s)}function vy(i){switch(i){case 5126:return ty;case 35664:return ny;case 35665:return iy;case 35666:return sy;case 35674:return ry;case 35675:return oy;case 35676:return ay;case 5124:case 35670:return ly;case 35667:case 35671:return cy;case 35668:case 35672:return hy;case 35669:case 35673:return uy;case 5125:return dy;case 36294:return fy;case 36295:return py;case 36296:return my;case 35678:case 36198:case 36298:case 36306:case 35682:return gy;case 35679:case 36299:case 36307:return xy;case 35680:case 36300:case 36308:case 36293:return _y;case 36289:case 36303:case 36311:case 36292:return yy}}function My(i,e){i.uniform1fv(this.addr,e)}function by(i,e){let t=xr(e,this.size,2);i.uniform2fv(this.addr,t)}function Ey(i,e){let t=xr(e,this.size,3);i.uniform3fv(this.addr,t)}function Sy(i,e){let t=xr(e,this.size,4);i.uniform4fv(this.addr,t)}function wy(i,e){let t=xr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Ty(i,e){let t=xr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Ay(i,e){let t=xr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Ry(i,e){i.uniform1iv(this.addr,e)}function Cy(i,e){i.uniform2iv(this.addr,e)}function Iy(i,e){i.uniform3iv(this.addr,e)}function Py(i,e){i.uniform4iv(this.addr,e)}function Ly(i,e){i.uniform1uiv(this.addr,e)}function Dy(i,e){i.uniform2uiv(this.addr,e)}function Ny(i,e){i.uniform3uiv(this.addr,e)}function Uy(i,e){i.uniform4uiv(this.addr,e)}function Oy(i,e,t){let n=this.cache,s=e.length,r=Da(t,s);Ft(n,r)||(i.uniform1iv(this.addr,r),Bt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Af,r[o])}function zy(i,e,t){let n=this.cache,s=e.length,r=Da(t,s);Ft(n,r)||(i.uniform1iv(this.addr,r),Bt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Cf,r[o])}function Fy(i,e,t){let n=this.cache,s=e.length,r=Da(t,s);Ft(n,r)||(i.uniform1iv(this.addr,r),Bt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||If,r[o])}function By(i,e,t){let n=this.cache,s=e.length,r=Da(t,s);Ft(n,r)||(i.uniform1iv(this.addr,r),Bt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Rf,r[o])}function ky(i){switch(i){case 5126:return My;case 35664:return by;case 35665:return Ey;case 35666:return Sy;case 35674:return wy;case 35675:return Ty;case 35676:return Ay;case 5124:case 35670:return Ry;case 35667:case 35671:return Cy;case 35668:case 35672:return Iy;case 35669:case 35673:return Py;case 5125:return Ly;case 36294:return Dy;case 36295:return Ny;case 36296:return Uy;case 35678:case 36198:case 36298:case 36306:case 35682:return Oy;case 35679:case 36299:case 36307:return zy;case 35680:case 36300:case 36308:case 36293:return Fy;case 36289:case 36303:case 36311:case 36292:return By}}var Ic=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=vy(t.type)}},Pc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ky(t.type)}},Lc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Nl=/(\w+)(\])?(\[|\.)?/g;function wd(i,e){i.seq.push(e),i.map[e.id]=e}function Hy(i,e,t){let n=i.name,s=n.length;for(Nl.lastIndex=0;;){let r=Nl.exec(n),o=Nl.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){wd(t,c===void 0?new Ic(a,i,e):new Pc(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new Lc(a),wd(t,h)),t=h}}}var js=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Hy(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Td(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Vy=37297,Gy=0;function Wy(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Ad=new Ke;function Xy(i){je._getMatrix(Ad,je.workingColorSpace,i);let e=`mat3( ${Ad.elements.map(t=>t.toFixed(4))} )`;switch(je.getTransfer(i)){case La:return[e,"LinearTransferOETF"];case mt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Rd(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Wy(i.getShaderSource(e),o)}else return s}function qy(i,e){let t=Xy(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Yy(i,e){let t;switch(e){case ih:t="Linear";break;case sh:t="Reinhard";break;case rh:t="Cineon";break;case so:t="ACESFilmic";break;case oh:t="AgX";break;case ah:t="Neutral";break;case l0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Bo=new N;function Ky(){je.getLuminanceCoefficients(Bo);let i=Bo.x.toFixed(4),e=Bo.y.toFixed(4),t=Bo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Zy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wr).join(`
`)}function $y(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Jy(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Wr(i){return i!==""}function Cd(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Id(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var jy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dc(i){return i.replace(jy,ev)}var Qy=new Map;function ev(i,e){let t=Je[e];if(t===void 0){let n=Qy.get(e);if(n!==void 0)t=Je[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Dc(t)}var tv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pd(i){return i.replace(tv,nv)}function nv(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ld(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function iv(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===af?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===nh?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===di&&(e="SHADOWMAP_TYPE_VSM"),e}function sv(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case er:case tr:e="ENVMAP_TYPE_CUBE";break;case Ia:e="ENVMAP_TYPE_CUBE_UV";break}return e}function rv(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case tr:e="ENVMAP_MODE_REFRACTION";break}return e}function ov(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case lf:e="ENVMAP_BLENDING_MULTIPLY";break;case o0:e="ENVMAP_BLENDING_MIX";break;case a0:e="ENVMAP_BLENDING_ADD";break}return e}function av(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function lv(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=iv(t),c=sv(t),u=rv(t),h=ov(t),f=av(t),p=Zy(t),m=$y(r),x=s.createProgram(),g,d,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Wr).join(`
`),g.length>0&&(g+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Wr).join(`
`),d.length>0&&(d+=`
`)):(g=[Ld(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wr).join(`
`),d=[Ld(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Oi?"#define TONE_MAPPING":"",t.toneMapping!==Oi?Je.tonemapping_pars_fragment:"",t.toneMapping!==Oi?Yy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,qy("linearToOutputTexel",t.outputColorSpace),Ky(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Wr).join(`
`)),o=Dc(o),o=Cd(o,t),o=Id(o,t),a=Dc(a),a=Cd(a,t),a=Id(a,t),o=Pd(o),a=Pd(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",t.glslVersion===Xu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Xu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let y=b+g+o,M=b+d+a,C=Td(s,s.VERTEX_SHADER,y),T=Td(s,s.FRAGMENT_SHADER,M);s.attachShader(x,C),s.attachShader(x,T),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function E(w){if(i.debug.checkShaderErrors){let U=s.getProgramInfoLog(x).trim(),S=s.getShaderInfoLog(C).trim(),D=s.getShaderInfoLog(T).trim(),z=!0,P=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,C,T);else{let O=Rd(s,C,"vertex"),F=Rd(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+U+`
`+O+`
`+F)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(S===""||D==="")&&(P=!1);P&&(w.diagnostics={runnable:z,programLog:U,vertexShader:{log:S,prefix:g},fragmentShader:{log:D,prefix:d}})}s.deleteShader(C),s.deleteShader(T),I=new js(s,x),_=Jy(s,x)}let I;this.getUniforms=function(){return I===void 0&&E(this),I};let _;this.getAttributes=function(){return _===void 0&&E(this),_};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(x,Vy)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Gy++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=C,this.fragmentShader=T,this}var cv=0,Nc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Uc(e),t.set(e,n)),n}},Uc=class{constructor(e){this.id=cv++,this.code=e,this.usedTimes=0}};function hv(i,e,t,n,s,r,o){let a=new jr,l=new Nc,c=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(_){return c.add(_),_===0?"uv":`uv${_}`}function g(_,v,w,U,S){let D=U.fog,z=S.geometry,P=_.isMeshStandardMaterial?U.environment:null,O=(_.isMeshStandardMaterial?t:e).get(_.envMap||P),F=O&&O.mapping===Ia?O.image.height:null,$=m[_.type];_.precision!==null&&(p=s.getMaxPrecision(_.precision),p!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",p,"instead."));let Y=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ne=Y!==void 0?Y.length:0,fe=0;z.morphAttributes.position!==void 0&&(fe=1),z.morphAttributes.normal!==void 0&&(fe=2),z.morphAttributes.color!==void 0&&(fe=3);let Ae,J,ce,xe;if($){let _t=qn[$];Ae=_t.vertexShader,J=_t.fragmentShader}else Ae=_.vertexShader,J=_.fragmentShader,l.update(_),ce=l.getVertexShaderID(_),xe=l.getFragmentShaderID(_);let te=i.getRenderTarget(),V=i.state.buffers.depth.getReversed(),j=S.isInstancedMesh===!0,X=S.isBatchedMesh===!0,oe=!!_.map,ee=!!_.matcap,Te=!!O,k=!!_.aoMap,rt=!!_.lightMap,He=!!_.bumpMap,Ge=!!_.normalMap,Ue=!!_.displacementMap,Xe=!!_.emissiveMap,Pe=!!_.metalnessMap,L=!!_.roughnessMap,A=_.anisotropy>0,q=_.clearcoat>0,se=_.dispersion>0,le=_.iridescence>0,ie=_.sheen>0,Le=_.transmission>0,ge=A&&!!_.anisotropyMap,Ee=q&&!!_.clearcoatMap,st=q&&!!_.clearcoatNormalMap,he=q&&!!_.clearcoatRoughnessMap,Se=le&&!!_.iridescenceMap,ze=le&&!!_.iridescenceThicknessMap,Fe=ie&&!!_.sheenColorMap,we=ie&&!!_.sheenRoughnessMap,it=!!_.specularMap,$e=!!_.specularColorMap,Et=!!_.specularIntensityMap,H=Le&&!!_.transmissionMap,me=Le&&!!_.thicknessMap,Q=!!_.gradientMap,re=!!_.alphaMap,Me=_.alphaTest>0,_e=!!_.alphaHash,qe=!!_.extensions,Dt=Oi;_.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Dt=i.toneMapping);let qt={shaderID:$,shaderType:_.type,shaderName:_.name,vertexShader:Ae,fragmentShader:J,defines:_.defines,customVertexShaderID:ce,customFragmentShaderID:xe,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:p,batching:X,batchingColor:X&&S._colorsTexture!==null,instancing:j,instancingColor:j&&S.instanceColor!==null,instancingMorph:j&&S.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:te===null?i.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Qt,alphaToCoverage:!!_.alphaToCoverage,map:oe,matcap:ee,envMap:Te,envMapMode:Te&&O.mapping,envMapCubeUVHeight:F,aoMap:k,lightMap:rt,bumpMap:He,normalMap:Ge,displacementMap:f&&Ue,emissiveMap:Xe,normalMapObjectSpace:Ge&&_.normalMapType===p0,normalMapTangentSpace:Ge&&_.normalMapType===vf,metalnessMap:Pe,roughnessMap:L,anisotropy:A,anisotropyMap:ge,clearcoat:q,clearcoatMap:Ee,clearcoatNormalMap:st,clearcoatRoughnessMap:he,dispersion:se,iridescence:le,iridescenceMap:Se,iridescenceThicknessMap:ze,sheen:ie,sheenColorMap:Fe,sheenRoughnessMap:we,specularMap:it,specularColorMap:$e,specularIntensityMap:Et,transmission:Le,transmissionMap:H,thicknessMap:me,gradientMap:Q,opaque:_.transparent===!1&&_.blending===Zs&&_.alphaToCoverage===!1,alphaMap:re,alphaTest:Me,alphaHash:_e,combine:_.combine,mapUv:oe&&x(_.map.channel),aoMapUv:k&&x(_.aoMap.channel),lightMapUv:rt&&x(_.lightMap.channel),bumpMapUv:He&&x(_.bumpMap.channel),normalMapUv:Ge&&x(_.normalMap.channel),displacementMapUv:Ue&&x(_.displacementMap.channel),emissiveMapUv:Xe&&x(_.emissiveMap.channel),metalnessMapUv:Pe&&x(_.metalnessMap.channel),roughnessMapUv:L&&x(_.roughnessMap.channel),anisotropyMapUv:ge&&x(_.anisotropyMap.channel),clearcoatMapUv:Ee&&x(_.clearcoatMap.channel),clearcoatNormalMapUv:st&&x(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&x(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&x(_.iridescenceMap.channel),iridescenceThicknessMapUv:ze&&x(_.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&x(_.sheenColorMap.channel),sheenRoughnessMapUv:we&&x(_.sheenRoughnessMap.channel),specularMapUv:it&&x(_.specularMap.channel),specularColorMapUv:$e&&x(_.specularColorMap.channel),specularIntensityMapUv:Et&&x(_.specularIntensityMap.channel),transmissionMapUv:H&&x(_.transmissionMap.channel),thicknessMapUv:me&&x(_.thicknessMap.channel),alphaMapUv:re&&x(_.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Ge||A),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:S.isPoints===!0&&!!z.attributes.uv&&(oe||re),fog:!!D,useFog:_.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:V,skinning:S.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:fe,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&w.length>0,shadowMapType:i.shadowMap.type,toneMapping:Dt,decodeVideoTexture:oe&&_.map.isVideoTexture===!0&&je.getTransfer(_.map.colorSpace)===mt,decodeVideoTextureEmissive:Xe&&_.emissiveMap.isVideoTexture===!0&&je.getTransfer(_.emissiveMap.colorSpace)===mt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===xt,flipSided:_.side===$t,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:qe&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qe&&_.extensions.multiDraw===!0||X)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return qt.vertexUv1s=c.has(1),qt.vertexUv2s=c.has(2),qt.vertexUv3s=c.has(3),c.clear(),qt}function d(_){let v=[];if(_.shaderID?v.push(_.shaderID):(v.push(_.customVertexShaderID),v.push(_.customFragmentShaderID)),_.defines!==void 0)for(let w in _.defines)v.push(w),v.push(_.defines[w]);return _.isRawShaderMaterial===!1&&(b(v,_),y(v,_),v.push(i.outputColorSpace)),v.push(_.customProgramCacheKey),v.join()}function b(_,v){_.push(v.precision),_.push(v.outputColorSpace),_.push(v.envMapMode),_.push(v.envMapCubeUVHeight),_.push(v.mapUv),_.push(v.alphaMapUv),_.push(v.lightMapUv),_.push(v.aoMapUv),_.push(v.bumpMapUv),_.push(v.normalMapUv),_.push(v.displacementMapUv),_.push(v.emissiveMapUv),_.push(v.metalnessMapUv),_.push(v.roughnessMapUv),_.push(v.anisotropyMapUv),_.push(v.clearcoatMapUv),_.push(v.clearcoatNormalMapUv),_.push(v.clearcoatRoughnessMapUv),_.push(v.iridescenceMapUv),_.push(v.iridescenceThicknessMapUv),_.push(v.sheenColorMapUv),_.push(v.sheenRoughnessMapUv),_.push(v.specularMapUv),_.push(v.specularColorMapUv),_.push(v.specularIntensityMapUv),_.push(v.transmissionMapUv),_.push(v.thicknessMapUv),_.push(v.combine),_.push(v.fogExp2),_.push(v.sizeAttenuation),_.push(v.morphTargetsCount),_.push(v.morphAttributeCount),_.push(v.numDirLights),_.push(v.numPointLights),_.push(v.numSpotLights),_.push(v.numSpotLightMaps),_.push(v.numHemiLights),_.push(v.numRectAreaLights),_.push(v.numDirLightShadows),_.push(v.numPointLightShadows),_.push(v.numSpotLightShadows),_.push(v.numSpotLightShadowsWithMaps),_.push(v.numLightProbes),_.push(v.shadowMapType),_.push(v.toneMapping),_.push(v.numClippingPlanes),_.push(v.numClipIntersection),_.push(v.depthPacking)}function y(_,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),_.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),_.push(a.mask)}function M(_){let v=m[_.type],w;if(v){let U=qn[v];w=Xi.clone(U.uniforms)}else w=_.uniforms;return w}function C(_,v){let w;for(let U=0,S=u.length;U<S;U++){let D=u[U];if(D.cacheKey===v){w=D,++w.usedTimes;break}}return w===void 0&&(w=new lv(i,v,_,r),u.push(w)),w}function T(_){if(--_.usedTimes===0){let v=u.indexOf(_);u[v]=u[u.length-1],u.pop(),_.destroy()}}function E(_){l.remove(_)}function I(){l.dispose()}return{getParameters:g,getProgramCacheKey:d,getUniforms:M,acquireProgram:C,releaseProgram:T,releaseShaderCache:E,programs:u,dispose:I}}function uv(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function dv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Dd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Nd(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h,f,p,m,x,g){let d=i[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:m,renderOrder:h.renderOrder,z:x,group:g},i[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=m,d.renderOrder=h.renderOrder,d.z=x,d.group=g),e++,d}function a(h,f,p,m,x,g){let d=o(h,f,p,m,x,g);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):t.push(d)}function l(h,f,p,m,x,g){let d=o(h,f,p,m,x,g);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):t.unshift(d)}function c(h,f){t.length>1&&t.sort(h||dv),n.length>1&&n.sort(f||Dd),s.length>1&&s.sort(f||Dd)}function u(){for(let h=e,f=i.length;h<f;h++){let p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function fv(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Nd,i.set(n,[o])):s>=r.length?(o=new Nd,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function pv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new ve};break;case"SpotLight":t={position:new N,direction:new N,color:new ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new ve,groundColor:new ve};break;case"RectAreaLight":t={color:new ve,position:new N,halfWidth:new N,halfHeight:new N};break}return i[e.id]=t,t}}}function mv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var gv=0;function xv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function _v(i){let e=new pv,t=mv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);let s=new N,r=new Be,o=new Be;function a(c){let u=0,h=0,f=0;for(let _=0;_<9;_++)n.probe[_].set(0,0,0);let p=0,m=0,x=0,g=0,d=0,b=0,y=0,M=0,C=0,T=0,E=0;c.sort(xv);for(let _=0,v=c.length;_<v;_++){let w=c[_],U=w.color,S=w.intensity,D=w.distance,z=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)u+=U.r*S,h+=U.g*S,f+=U.b*S;else if(w.isLightProbe){for(let P=0;P<9;P++)n.probe[P].addScaledVector(w.sh.coefficients[P],S);E++}else if(w.isDirectionalLight){let P=e.get(w);if(P.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let O=w.shadow,F=t.get(w);F.shadowIntensity=O.intensity,F.shadowBias=O.bias,F.shadowNormalBias=O.normalBias,F.shadowRadius=O.radius,F.shadowMapSize=O.mapSize,n.directionalShadow[p]=F,n.directionalShadowMap[p]=z,n.directionalShadowMatrix[p]=w.shadow.matrix,b++}n.directional[p]=P,p++}else if(w.isSpotLight){let P=e.get(w);P.position.setFromMatrixPosition(w.matrixWorld),P.color.copy(U).multiplyScalar(S),P.distance=D,P.coneCos=Math.cos(w.angle),P.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),P.decay=w.decay,n.spot[x]=P;let O=w.shadow;if(w.map&&(n.spotLightMap[C]=w.map,C++,O.updateMatrices(w),w.castShadow&&T++),n.spotLightMatrix[x]=O.matrix,w.castShadow){let F=t.get(w);F.shadowIntensity=O.intensity,F.shadowBias=O.bias,F.shadowNormalBias=O.normalBias,F.shadowRadius=O.radius,F.shadowMapSize=O.mapSize,n.spotShadow[x]=F,n.spotShadowMap[x]=z,M++}x++}else if(w.isRectAreaLight){let P=e.get(w);P.color.copy(U).multiplyScalar(S),P.halfWidth.set(w.width*.5,0,0),P.halfHeight.set(0,w.height*.5,0),n.rectArea[g]=P,g++}else if(w.isPointLight){let P=e.get(w);if(P.color.copy(w.color).multiplyScalar(w.intensity),P.distance=w.distance,P.decay=w.decay,w.castShadow){let O=w.shadow,F=t.get(w);F.shadowIntensity=O.intensity,F.shadowBias=O.bias,F.shadowNormalBias=O.normalBias,F.shadowRadius=O.radius,F.shadowMapSize=O.mapSize,F.shadowCameraNear=O.camera.near,F.shadowCameraFar=O.camera.far,n.pointShadow[m]=F,n.pointShadowMap[m]=z,n.pointShadowMatrix[m]=w.shadow.matrix,y++}n.point[m]=P,m++}else if(w.isHemisphereLight){let P=e.get(w);P.skyColor.copy(w.color).multiplyScalar(S),P.groundColor.copy(w.groundColor).multiplyScalar(S),n.hemi[d]=P,d++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pe.LTC_FLOAT_1,n.rectAreaLTC2=pe.LTC_FLOAT_2):(n.rectAreaLTC1=pe.LTC_HALF_1,n.rectAreaLTC2=pe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;let I=n.hash;(I.directionalLength!==p||I.pointLength!==m||I.spotLength!==x||I.rectAreaLength!==g||I.hemiLength!==d||I.numDirectionalShadows!==b||I.numPointShadows!==y||I.numSpotShadows!==M||I.numSpotMaps!==C||I.numLightProbes!==E)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=g,n.point.length=m,n.hemi.length=d,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=M+C-T,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=E,I.directionalLength=p,I.pointLength=m,I.spotLength=x,I.rectAreaLength=g,I.hemiLength=d,I.numDirectionalShadows=b,I.numPointShadows=y,I.numSpotShadows=M,I.numSpotMaps=C,I.numLightProbes=E,n.version=gv++)}function l(c,u){let h=0,f=0,p=0,m=0,x=0,g=u.matrixWorldInverse;for(let d=0,b=c.length;d<b;d++){let y=c[d];if(y.isDirectionalLight){let M=n.directional[h];M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),h++}else if(y.isSpotLight){let M=n.spot[p];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),p++}else if(y.isRectAreaLight){let M=n.rectArea[m];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(g),o.identity(),r.copy(y.matrixWorld),r.premultiply(g),o.extractRotation(r),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),m++}else if(y.isPointLight){let M=n.point[f];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(g),f++}else if(y.isHemisphereLight){let M=n.hemi[x];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(g),x++}}}return{setup:a,setupView:l,state:n}}function Ud(i){let e=new _v(i),t=[],n=[];function s(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function yv(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Ud(i),e.set(s,[a])):r>=o.length?(a=new Ud(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Oc=class extends un{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=d0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},zc=class extends un{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},vv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Mv=`uniform sampler2D shadow_pass;
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
}`;function bv(i,e,t){let n=new Qr,s=new be,r=new be,o=new ct,a=new Oc({depthPacking:f0}),l=new zc,c={},u=t.maxTextureSize,h={[Zn]:$t,[$t]:Zn,[xt]:xt},f=new It({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new be},radius:{value:4}},vertexShader:vv,fragmentShader:Mv}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new lt;m.setAttribute("position",new Qe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ue(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=af;let d=this.type;this.render=function(T,E,I){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;let _=i.getRenderTarget(),v=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),U=i.state;U.setBlending(Kn),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let S=d!==di&&this.type===di,D=d===di&&this.type!==di;for(let z=0,P=T.length;z<P;z++){let O=T[z],F=O.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",O,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);let $=F.getFrameExtents();if(s.multiply($),r.copy(F.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/$.x),s.x=r.x*$.x,F.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/$.y),s.y=r.y*$.y,F.mapSize.y=r.y)),F.map===null||S===!0||D===!0){let ne=this.type!==di?{minFilter:Jt,magFilter:Jt}:{};F.map!==null&&F.map.dispose(),F.map=new nn(s.x,s.y,ne),F.map.texture.name=O.name+".shadowMap",F.camera.updateProjectionMatrix()}i.setRenderTarget(F.map),i.clear();let Y=F.getViewportCount();for(let ne=0;ne<Y;ne++){let fe=F.getViewport(ne);o.set(r.x*fe.x,r.y*fe.y,r.x*fe.z,r.y*fe.w),U.viewport(o),F.updateMatrices(O,ne),n=F.getFrustum(),M(E,I,F.camera,O,this.type)}F.isPointLightShadow!==!0&&this.type===di&&b(F,I),F.needsUpdate=!1}d=this.type,g.needsUpdate=!1,i.setRenderTarget(_,v,w)};function b(T,E){let I=e.update(x);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new nn(s.x,s.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(E,null,I,f,x,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(E,null,I,p,x,null)}function y(T,E,I,_){let v=null,w=I.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(w!==void 0)v=w;else if(v=I.isPointLight===!0?l:a,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){let U=v.uuid,S=E.uuid,D=c[U];D===void 0&&(D={},c[U]=D);let z=D[S];z===void 0&&(z=v.clone(),D[S]=z,E.addEventListener("dispose",C)),v=z}if(v.visible=E.visible,v.wireframe=E.wireframe,_===di?v.side=E.shadowSide!==null?E.shadowSide:E.side:v.side=E.shadowSide!==null?E.shadowSide:h[E.side],v.alphaMap=E.alphaMap,v.alphaTest=E.alphaTest,v.map=E.map,v.clipShadows=E.clipShadows,v.clippingPlanes=E.clippingPlanes,v.clipIntersection=E.clipIntersection,v.displacementMap=E.displacementMap,v.displacementScale=E.displacementScale,v.displacementBias=E.displacementBias,v.wireframeLinewidth=E.wireframeLinewidth,v.linewidth=E.linewidth,I.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let U=i.properties.get(v);U.light=I}return v}function M(T,E,I,_,v){if(T.visible===!1)return;if(T.layers.test(E.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&v===di)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,T.matrixWorld);let S=e.update(T),D=T.material;if(Array.isArray(D)){let z=S.groups;for(let P=0,O=z.length;P<O;P++){let F=z[P],$=D[F.materialIndex];if($&&$.visible){let Y=y(T,$,_,v);T.onBeforeShadow(i,T,E,I,S,Y,F),i.renderBufferDirect(I,null,S,Y,T,F),T.onAfterShadow(i,T,E,I,S,Y,F)}}}else if(D.visible){let z=y(T,D,_,v);T.onBeforeShadow(i,T,E,I,S,z,null),i.renderBufferDirect(I,null,S,z,T,null),T.onAfterShadow(i,T,E,I,S,z,null)}}let U=T.children;for(let S=0,D=U.length;S<D;S++)M(U[S],E,I,_,v)}function C(T){T.target.removeEventListener("dispose",C);for(let I in c){let _=c[I],v=T.target.uuid;v in _&&(_[v].dispose(),delete _[v])}}}var Ev={[Gl]:Wl,[Xl]:Kl,[ql]:Zl,[Qs]:Yl,[Wl]:Gl,[Kl]:Xl,[Zl]:ql,[Yl]:Qs};function Sv(i,e){function t(){let H=!1,me=new ct,Q=null,re=new ct(0,0,0,0);return{setMask:function(Me){Q!==Me&&!H&&(i.colorMask(Me,Me,Me,Me),Q=Me)},setLocked:function(Me){H=Me},setClear:function(Me,_e,qe,Dt,qt){qt===!0&&(Me*=Dt,_e*=Dt,qe*=Dt),me.set(Me,_e,qe,Dt),re.equals(me)===!1&&(i.clearColor(Me,_e,qe,Dt),re.copy(me))},reset:function(){H=!1,Q=null,re.set(-1,0,0,0)}}}function n(){let H=!1,me=!1,Q=null,re=null,Me=null;return{setReversed:function(_e){if(me!==_e){let qe=e.get("EXT_clip_control");me?qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.ZERO_TO_ONE_EXT):qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.NEGATIVE_ONE_TO_ONE_EXT);let Dt=Me;Me=null,this.setClear(Dt)}me=_e},getReversed:function(){return me},setTest:function(_e){_e?te(i.DEPTH_TEST):V(i.DEPTH_TEST)},setMask:function(_e){Q!==_e&&!H&&(i.depthMask(_e),Q=_e)},setFunc:function(_e){if(me&&(_e=Ev[_e]),re!==_e){switch(_e){case Gl:i.depthFunc(i.NEVER);break;case Wl:i.depthFunc(i.ALWAYS);break;case Xl:i.depthFunc(i.LESS);break;case Qs:i.depthFunc(i.LEQUAL);break;case ql:i.depthFunc(i.EQUAL);break;case Yl:i.depthFunc(i.GEQUAL);break;case Kl:i.depthFunc(i.GREATER);break;case Zl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}re=_e}},setLocked:function(_e){H=_e},setClear:function(_e){Me!==_e&&(me&&(_e=1-_e),i.clearDepth(_e),Me=_e)},reset:function(){H=!1,Q=null,re=null,Me=null,me=!1}}}function s(){let H=!1,me=null,Q=null,re=null,Me=null,_e=null,qe=null,Dt=null,qt=null;return{setTest:function(_t){H||(_t?te(i.STENCIL_TEST):V(i.STENCIL_TEST))},setMask:function(_t){me!==_t&&!H&&(i.stencilMask(_t),me=_t)},setFunc:function(_t,In,si){(Q!==_t||re!==In||Me!==si)&&(i.stencilFunc(_t,In,si),Q=_t,re=In,Me=si)},setOp:function(_t,In,si){(_e!==_t||qe!==In||Dt!==si)&&(i.stencilOp(_t,In,si),_e=_t,qe=In,Dt=si)},setLocked:function(_t){H=_t},setClear:function(_t){qt!==_t&&(i.clearStencil(_t),qt=_t)},reset:function(){H=!1,me=null,Q=null,re=null,Me=null,_e=null,qe=null,Dt=null,qt=null}}}let r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap,u={},h={},f=new WeakMap,p=[],m=null,x=!1,g=null,d=null,b=null,y=null,M=null,C=null,T=null,E=new ve(0,0,0),I=0,_=!1,v=null,w=null,U=null,S=null,D=null,z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),P=!1,O=0,F=i.getParameter(i.VERSION);F.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(F)[1]),P=O>=1):F.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),P=O>=2);let $=null,Y={},ne=i.getParameter(i.SCISSOR_BOX),fe=i.getParameter(i.VIEWPORT),Ae=new ct().fromArray(ne),J=new ct().fromArray(fe);function ce(H,me,Q,re){let Me=new Uint8Array(4),_e=i.createTexture();i.bindTexture(H,_e),i.texParameteri(H,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(H,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let qe=0;qe<Q;qe++)H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY?i.texImage3D(me,0,i.RGBA,1,1,re,0,i.RGBA,i.UNSIGNED_BYTE,Me):i.texImage2D(me+qe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Me);return _e}let xe={};xe[i.TEXTURE_2D]=ce(i.TEXTURE_2D,i.TEXTURE_2D,1),xe[i.TEXTURE_CUBE_MAP]=ce(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[i.TEXTURE_2D_ARRAY]=ce(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),xe[i.TEXTURE_3D]=ce(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),te(i.DEPTH_TEST),o.setFunc(Qs),He(!1),Ge(ku),te(i.CULL_FACE),k(Kn);function te(H){u[H]!==!0&&(i.enable(H),u[H]=!0)}function V(H){u[H]!==!1&&(i.disable(H),u[H]=!1)}function j(H,me){return h[H]!==me?(i.bindFramebuffer(H,me),h[H]=me,H===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=me),H===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=me),!0):!1}function X(H,me){let Q=p,re=!1;if(H){Q=f.get(me),Q===void 0&&(Q=[],f.set(me,Q));let Me=H.textures;if(Q.length!==Me.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let _e=0,qe=Me.length;_e<qe;_e++)Q[_e]=i.COLOR_ATTACHMENT0+_e;Q.length=Me.length,re=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,re=!0);re&&i.drawBuffers(Q)}function oe(H){return m!==H?(i.useProgram(H),m=H,!0):!1}let ee={[us]:i.FUNC_ADD,[Gm]:i.FUNC_SUBTRACT,[Wm]:i.FUNC_REVERSE_SUBTRACT};ee[Xm]=i.MIN,ee[qm]=i.MAX;let Te={[Ym]:i.ZERO,[Km]:i.ONE,[Zm]:i.SRC_COLOR,[Hl]:i.SRC_ALPHA,[t0]:i.SRC_ALPHA_SATURATE,[Qm]:i.DST_COLOR,[Jm]:i.DST_ALPHA,[$m]:i.ONE_MINUS_SRC_COLOR,[Vl]:i.ONE_MINUS_SRC_ALPHA,[e0]:i.ONE_MINUS_DST_COLOR,[jm]:i.ONE_MINUS_DST_ALPHA,[n0]:i.CONSTANT_COLOR,[i0]:i.ONE_MINUS_CONSTANT_COLOR,[s0]:i.CONSTANT_ALPHA,[r0]:i.ONE_MINUS_CONSTANT_ALPHA};function k(H,me,Q,re,Me,_e,qe,Dt,qt,_t){if(H===Kn){x===!0&&(V(i.BLEND),x=!1);return}if(x===!1&&(te(i.BLEND),x=!0),H!==Vm){if(H!==g||_t!==_){if((d!==us||M!==us)&&(i.blendEquation(i.FUNC_ADD),d=us,M=us),_t)switch(H){case Zs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ht:i.blendFunc(i.ONE,i.ONE);break;case Hu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Vu:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case Zs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ht:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Hu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Vu:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}b=null,y=null,C=null,T=null,E.set(0,0,0),I=0,g=H,_=_t}return}Me=Me||me,_e=_e||Q,qe=qe||re,(me!==d||Me!==M)&&(i.blendEquationSeparate(ee[me],ee[Me]),d=me,M=Me),(Q!==b||re!==y||_e!==C||qe!==T)&&(i.blendFuncSeparate(Te[Q],Te[re],Te[_e],Te[qe]),b=Q,y=re,C=_e,T=qe),(Dt.equals(E)===!1||qt!==I)&&(i.blendColor(Dt.r,Dt.g,Dt.b,qt),E.copy(Dt),I=qt),g=H,_=!1}function rt(H,me){H.side===xt?V(i.CULL_FACE):te(i.CULL_FACE);let Q=H.side===$t;me&&(Q=!Q),He(Q),H.blending===Zs&&H.transparent===!1?k(Kn):k(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),o.setFunc(H.depthFunc),o.setTest(H.depthTest),o.setMask(H.depthWrite),r.setMask(H.colorWrite);let re=H.stencilWrite;a.setTest(re),re&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Xe(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?te(i.SAMPLE_ALPHA_TO_COVERAGE):V(i.SAMPLE_ALPHA_TO_COVERAGE)}function He(H){v!==H&&(H?i.frontFace(i.CW):i.frontFace(i.CCW),v=H)}function Ge(H){H!==km?(te(i.CULL_FACE),H!==w&&(H===ku?i.cullFace(i.BACK):H===Hm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):V(i.CULL_FACE),w=H}function Ue(H){H!==U&&(P&&i.lineWidth(H),U=H)}function Xe(H,me,Q){H?(te(i.POLYGON_OFFSET_FILL),(S!==me||D!==Q)&&(i.polygonOffset(me,Q),S=me,D=Q)):V(i.POLYGON_OFFSET_FILL)}function Pe(H){H?te(i.SCISSOR_TEST):V(i.SCISSOR_TEST)}function L(H){H===void 0&&(H=i.TEXTURE0+z-1),$!==H&&(i.activeTexture(H),$=H)}function A(H,me,Q){Q===void 0&&($===null?Q=i.TEXTURE0+z-1:Q=$);let re=Y[Q];re===void 0&&(re={type:void 0,texture:void 0},Y[Q]=re),(re.type!==H||re.texture!==me)&&($!==Q&&(i.activeTexture(Q),$=Q),i.bindTexture(H,me||xe[H]),re.type=H,re.texture=me)}function q(){let H=Y[$];H!==void 0&&H.type!==void 0&&(i.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function se(){try{i.compressedTexImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function le(){try{i.compressedTexImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ie(){try{i.texSubImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Le(){try{i.texSubImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ge(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ee(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function st(){try{i.texStorage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function he(){try{i.texStorage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Se(){try{i.texImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ze(){try{i.texImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Fe(H){Ae.equals(H)===!1&&(i.scissor(H.x,H.y,H.z,H.w),Ae.copy(H))}function we(H){J.equals(H)===!1&&(i.viewport(H.x,H.y,H.z,H.w),J.copy(H))}function it(H,me){let Q=c.get(me);Q===void 0&&(Q=new WeakMap,c.set(me,Q));let re=Q.get(H);re===void 0&&(re=i.getUniformBlockIndex(me,H.name),Q.set(H,re))}function $e(H,me){let re=c.get(me).get(H);l.get(me)!==re&&(i.uniformBlockBinding(me,re,H.__bindingPointIndex),l.set(me,re))}function Et(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},$=null,Y={},h={},f=new WeakMap,p=[],m=null,x=!1,g=null,d=null,b=null,y=null,M=null,C=null,T=null,E=new ve(0,0,0),I=0,_=!1,v=null,w=null,U=null,S=null,D=null,Ae.set(0,0,i.canvas.width,i.canvas.height),J.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:te,disable:V,bindFramebuffer:j,drawBuffers:X,useProgram:oe,setBlending:k,setMaterial:rt,setFlipSided:He,setCullFace:Ge,setLineWidth:Ue,setPolygonOffset:Xe,setScissorTest:Pe,activeTexture:L,bindTexture:A,unbindTexture:q,compressedTexImage2D:se,compressedTexImage3D:le,texImage2D:Se,texImage3D:ze,updateUBOMapping:it,uniformBlockBinding:$e,texStorage2D:st,texStorage3D:he,texSubImage2D:ie,texSubImage3D:Le,compressedTexSubImage2D:ge,compressedTexSubImage3D:Ee,scissor:Fe,viewport:we,reset:Et}}function Od(i,e,t,n){let s=wv(n);switch(t){case ff:return i*e;case mf:return i*e;case gf:return i*e*2;case dh:return i*e/s.components*s.byteLength;case fh:return i*e/s.components*s.byteLength;case xf:return i*e*2/s.components*s.byteLength;case ph:return i*e*2/s.components*s.byteLength;case pf:return i*e*3/s.components*s.byteLength;case Sn:return i*e*4/s.components*s.byteLength;case mh:return i*e*4/s.components*s.byteLength;case $o:case Jo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case jo:case Qo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ql:case tc:return Math.max(i,16)*Math.max(e,8)/4;case jl:case ec:return Math.max(i,8)*Math.max(e,8)/2;case nc:case ic:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case sc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case rc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case oc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ac:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case lc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case cc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case hc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case uc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case dc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case fc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case pc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case mc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case gc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case xc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case _c:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ea:case yc:case vc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case _f:case Mc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case bc:case Ec:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function wv(i){switch(i){case gi:case hf:return{byteLength:1,components:1};case $r:case uf:case Bn:return{byteLength:2,components:1};case hh:case uh:return{byteLength:2,components:4};case fs:case ch:case zn:return{byteLength:4,components:1};case df:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Tv(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new be,u=new WeakMap,h,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(L,A){return p?new OffscreenCanvas(L,A):Jr("canvas")}function x(L,A,q){let se=1,le=Pe(L);if((le.width>q||le.height>q)&&(se=q/Math.max(le.width,le.height)),se<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){let ie=Math.floor(se*le.width),Le=Math.floor(se*le.height);h===void 0&&(h=m(ie,Le));let ge=A?m(ie,Le):h;return ge.width=ie,ge.height=Le,ge.getContext("2d").drawImage(L,0,0,ie,Le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+ie+"x"+Le+")."),ge}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+")."),L;return L}function g(L){return L.generateMipmaps}function d(L){i.generateMipmap(L)}function b(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(L,A,q,se,le=!1){if(L!==null){if(i[L]!==void 0)return i[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ie=A;if(A===i.RED&&(q===i.FLOAT&&(ie=i.R32F),q===i.HALF_FLOAT&&(ie=i.R16F),q===i.UNSIGNED_BYTE&&(ie=i.R8)),A===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(ie=i.R8UI),q===i.UNSIGNED_SHORT&&(ie=i.R16UI),q===i.UNSIGNED_INT&&(ie=i.R32UI),q===i.BYTE&&(ie=i.R8I),q===i.SHORT&&(ie=i.R16I),q===i.INT&&(ie=i.R32I)),A===i.RG&&(q===i.FLOAT&&(ie=i.RG32F),q===i.HALF_FLOAT&&(ie=i.RG16F),q===i.UNSIGNED_BYTE&&(ie=i.RG8)),A===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(ie=i.RG8UI),q===i.UNSIGNED_SHORT&&(ie=i.RG16UI),q===i.UNSIGNED_INT&&(ie=i.RG32UI),q===i.BYTE&&(ie=i.RG8I),q===i.SHORT&&(ie=i.RG16I),q===i.INT&&(ie=i.RG32I)),A===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(ie=i.RGB8UI),q===i.UNSIGNED_SHORT&&(ie=i.RGB16UI),q===i.UNSIGNED_INT&&(ie=i.RGB32UI),q===i.BYTE&&(ie=i.RGB8I),q===i.SHORT&&(ie=i.RGB16I),q===i.INT&&(ie=i.RGB32I)),A===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(ie=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(ie=i.RGBA16UI),q===i.UNSIGNED_INT&&(ie=i.RGBA32UI),q===i.BYTE&&(ie=i.RGBA8I),q===i.SHORT&&(ie=i.RGBA16I),q===i.INT&&(ie=i.RGBA32I)),A===i.RGB&&q===i.UNSIGNED_INT_5_9_9_9_REV&&(ie=i.RGB9_E5),A===i.RGBA){let Le=le?La:je.getTransfer(se);q===i.FLOAT&&(ie=i.RGBA32F),q===i.HALF_FLOAT&&(ie=i.RGBA16F),q===i.UNSIGNED_BYTE&&(ie=Le===mt?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT_4_4_4_4&&(ie=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(ie=i.RGB5_A1)}return(ie===i.R16F||ie===i.R32F||ie===i.RG16F||ie===i.RG32F||ie===i.RGBA16F||ie===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function M(L,A){let q;return L?A===null||A===fs||A===nr?q=i.DEPTH24_STENCIL8:A===zn?q=i.DEPTH32F_STENCIL8:A===$r&&(q=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===fs||A===nr?q=i.DEPTH_COMPONENT24:A===zn?q=i.DEPTH_COMPONENT32F:A===$r&&(q=i.DEPTH_COMPONENT16),q}function C(L,A){return g(L)===!0||L.isFramebufferTexture&&L.minFilter!==Jt&&L.minFilter!==cn?Math.log2(Math.max(A.width,A.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?A.mipmaps.length:1}function T(L){let A=L.target;A.removeEventListener("dispose",T),I(A),A.isVideoTexture&&u.delete(A)}function E(L){let A=L.target;A.removeEventListener("dispose",E),v(A)}function I(L){let A=n.get(L);if(A.__webglInit===void 0)return;let q=L.source,se=f.get(q);if(se){let le=se[A.__cacheKey];le.usedTimes--,le.usedTimes===0&&_(L),Object.keys(se).length===0&&f.delete(q)}n.remove(L)}function _(L){let A=n.get(L);i.deleteTexture(A.__webglTexture);let q=L.source,se=f.get(q);delete se[A.__cacheKey],o.memory.textures--}function v(L){let A=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(A.__webglFramebuffer[se]))for(let le=0;le<A.__webglFramebuffer[se].length;le++)i.deleteFramebuffer(A.__webglFramebuffer[se][le]);else i.deleteFramebuffer(A.__webglFramebuffer[se]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[se])}else{if(Array.isArray(A.__webglFramebuffer))for(let se=0;se<A.__webglFramebuffer.length;se++)i.deleteFramebuffer(A.__webglFramebuffer[se]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let se=0;se<A.__webglColorRenderbuffer.length;se++)A.__webglColorRenderbuffer[se]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[se]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}let q=L.textures;for(let se=0,le=q.length;se<le;se++){let ie=n.get(q[se]);ie.__webglTexture&&(i.deleteTexture(ie.__webglTexture),o.memory.textures--),n.remove(q[se])}n.remove(L)}let w=0;function U(){w=0}function S(){let L=w;return L>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+s.maxTextures),w+=1,L}function D(L){let A=[];return A.push(L.wrapS),A.push(L.wrapT),A.push(L.wrapR||0),A.push(L.magFilter),A.push(L.minFilter),A.push(L.anisotropy),A.push(L.internalFormat),A.push(L.format),A.push(L.type),A.push(L.generateMipmaps),A.push(L.premultiplyAlpha),A.push(L.flipY),A.push(L.unpackAlignment),A.push(L.colorSpace),A.join()}function z(L,A){let q=n.get(L);if(L.isVideoTexture&&Ue(L),L.isRenderTargetTexture===!1&&L.version>0&&q.__version!==L.version){let se=L.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(q,L,A);return}}t.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+A)}function P(L,A){let q=n.get(L);if(L.version>0&&q.__version!==L.version){J(q,L,A);return}t.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+A)}function O(L,A){let q=n.get(L);if(L.version>0&&q.__version!==L.version){J(q,L,A);return}t.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+A)}function F(L,A){let q=n.get(L);if(L.version>0&&q.__version!==L.version){ce(q,L,A);return}t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+A)}let $={[hn]:i.REPEAT,[fi]:i.CLAMP_TO_EDGE,[Zr]:i.MIRRORED_REPEAT},Y={[Jt]:i.NEAREST,[lh]:i.NEAREST_MIPMAP_NEAREST,[Xs]:i.NEAREST_MIPMAP_LINEAR,[cn]:i.LINEAR,[Xr]:i.LINEAR_MIPMAP_NEAREST,[Yn]:i.LINEAR_MIPMAP_LINEAR},ne={[m0]:i.NEVER,[M0]:i.ALWAYS,[g0]:i.LESS,[Mf]:i.LEQUAL,[x0]:i.EQUAL,[v0]:i.GEQUAL,[_0]:i.GREATER,[y0]:i.NOTEQUAL};function fe(L,A){if(A.type===zn&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===cn||A.magFilter===Xr||A.magFilter===Xs||A.magFilter===Yn||A.minFilter===cn||A.minFilter===Xr||A.minFilter===Xs||A.minFilter===Yn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,$[A.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,$[A.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,$[A.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,Y[A.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,Y[A.minFilter]),A.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,ne[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Jt||A.minFilter!==Xs&&A.minFilter!==Yn||A.type===zn&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){let q=e.get("EXT_texture_filter_anisotropic");i.texParameterf(L,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function Ae(L,A){let q=!1;L.__webglInit===void 0&&(L.__webglInit=!0,A.addEventListener("dispose",T));let se=A.source,le=f.get(se);le===void 0&&(le={},f.set(se,le));let ie=D(A);if(ie!==L.__cacheKey){le[ie]===void 0&&(le[ie]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,q=!0),le[ie].usedTimes++;let Le=le[L.__cacheKey];Le!==void 0&&(le[L.__cacheKey].usedTimes--,Le.usedTimes===0&&_(A)),L.__cacheKey=ie,L.__webglTexture=le[ie].texture}return q}function J(L,A,q){let se=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(se=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(se=i.TEXTURE_3D);let le=Ae(L,A),ie=A.source;t.bindTexture(se,L.__webglTexture,i.TEXTURE0+q);let Le=n.get(ie);if(ie.version!==Le.__version||le===!0){t.activeTexture(i.TEXTURE0+q);let ge=je.getPrimaries(je.workingColorSpace),Ee=A.colorSpace===Di?null:je.getPrimaries(A.colorSpace),st=A.colorSpace===Di||ge===Ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,st);let he=x(A.image,!1,s.maxTextureSize);he=Xe(A,he);let Se=r.convert(A.format,A.colorSpace),ze=r.convert(A.type),Fe=y(A.internalFormat,Se,ze,A.colorSpace,A.isVideoTexture);fe(se,A);let we,it=A.mipmaps,$e=A.isVideoTexture!==!0,Et=Le.__version===void 0||le===!0,H=ie.dataReady,me=C(A,he);if(A.isDepthTexture)Fe=M(A.format===ir,A.type),Et&&($e?t.texStorage2D(i.TEXTURE_2D,1,Fe,he.width,he.height):t.texImage2D(i.TEXTURE_2D,0,Fe,he.width,he.height,0,Se,ze,null));else if(A.isDataTexture)if(it.length>0){$e&&Et&&t.texStorage2D(i.TEXTURE_2D,me,Fe,it[0].width,it[0].height);for(let Q=0,re=it.length;Q<re;Q++)we=it[Q],$e?H&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,we.width,we.height,Se,ze,we.data):t.texImage2D(i.TEXTURE_2D,Q,Fe,we.width,we.height,0,Se,ze,we.data);A.generateMipmaps=!1}else $e?(Et&&t.texStorage2D(i.TEXTURE_2D,me,Fe,he.width,he.height),H&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,he.width,he.height,Se,ze,he.data)):t.texImage2D(i.TEXTURE_2D,0,Fe,he.width,he.height,0,Se,ze,he.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){$e&&Et&&t.texStorage3D(i.TEXTURE_2D_ARRAY,me,Fe,it[0].width,it[0].height,he.depth);for(let Q=0,re=it.length;Q<re;Q++)if(we=it[Q],A.format!==Sn)if(Se!==null)if($e){if(H)if(A.layerUpdates.size>0){let Me=Od(we.width,we.height,A.format,A.type);for(let _e of A.layerUpdates){let qe=we.data.subarray(_e*Me/we.data.BYTES_PER_ELEMENT,(_e+1)*Me/we.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,_e,we.width,we.height,1,Se,qe)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,we.width,we.height,he.depth,Se,we.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,Fe,we.width,we.height,he.depth,0,we.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $e?H&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,we.width,we.height,he.depth,Se,ze,we.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Q,Fe,we.width,we.height,he.depth,0,Se,ze,we.data)}else{$e&&Et&&t.texStorage2D(i.TEXTURE_2D,me,Fe,it[0].width,it[0].height);for(let Q=0,re=it.length;Q<re;Q++)we=it[Q],A.format!==Sn?Se!==null?$e?H&&t.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,we.width,we.height,Se,we.data):t.compressedTexImage2D(i.TEXTURE_2D,Q,Fe,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?H&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,we.width,we.height,Se,ze,we.data):t.texImage2D(i.TEXTURE_2D,Q,Fe,we.width,we.height,0,Se,ze,we.data)}else if(A.isDataArrayTexture)if($e){if(Et&&t.texStorage3D(i.TEXTURE_2D_ARRAY,me,Fe,he.width,he.height,he.depth),H)if(A.layerUpdates.size>0){let Q=Od(he.width,he.height,A.format,A.type);for(let re of A.layerUpdates){let Me=he.data.subarray(re*Q/he.data.BYTES_PER_ELEMENT,(re+1)*Q/he.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,re,he.width,he.height,1,Se,ze,Me)}A.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,Se,ze,he.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Fe,he.width,he.height,he.depth,0,Se,ze,he.data);else if(A.isData3DTexture)$e?(Et&&t.texStorage3D(i.TEXTURE_3D,me,Fe,he.width,he.height,he.depth),H&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,Se,ze,he.data)):t.texImage3D(i.TEXTURE_3D,0,Fe,he.width,he.height,he.depth,0,Se,ze,he.data);else if(A.isFramebufferTexture){if(Et)if($e)t.texStorage2D(i.TEXTURE_2D,me,Fe,he.width,he.height);else{let Q=he.width,re=he.height;for(let Me=0;Me<me;Me++)t.texImage2D(i.TEXTURE_2D,Me,Fe,Q,re,0,Se,ze,null),Q>>=1,re>>=1}}else if(it.length>0){if($e&&Et){let Q=Pe(it[0]);t.texStorage2D(i.TEXTURE_2D,me,Fe,Q.width,Q.height)}for(let Q=0,re=it.length;Q<re;Q++)we=it[Q],$e?H&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,Se,ze,we):t.texImage2D(i.TEXTURE_2D,Q,Fe,Se,ze,we);A.generateMipmaps=!1}else if($e){if(Et){let Q=Pe(he);t.texStorage2D(i.TEXTURE_2D,me,Fe,Q.width,Q.height)}H&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Se,ze,he)}else t.texImage2D(i.TEXTURE_2D,0,Fe,Se,ze,he);g(A)&&d(se),Le.__version=ie.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function ce(L,A,q){if(A.image.length!==6)return;let se=Ae(L,A),le=A.source;t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+q);let ie=n.get(le);if(le.version!==ie.__version||se===!0){t.activeTexture(i.TEXTURE0+q);let Le=je.getPrimaries(je.workingColorSpace),ge=A.colorSpace===Di?null:je.getPrimaries(A.colorSpace),Ee=A.colorSpace===Di||Le===ge?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let st=A.isCompressedTexture||A.image[0].isCompressedTexture,he=A.image[0]&&A.image[0].isDataTexture,Se=[];for(let re=0;re<6;re++)!st&&!he?Se[re]=x(A.image[re],!0,s.maxCubemapSize):Se[re]=he?A.image[re].image:A.image[re],Se[re]=Xe(A,Se[re]);let ze=Se[0],Fe=r.convert(A.format,A.colorSpace),we=r.convert(A.type),it=y(A.internalFormat,Fe,we,A.colorSpace),$e=A.isVideoTexture!==!0,Et=ie.__version===void 0||se===!0,H=le.dataReady,me=C(A,ze);fe(i.TEXTURE_CUBE_MAP,A);let Q;if(st){$e&&Et&&t.texStorage2D(i.TEXTURE_CUBE_MAP,me,it,ze.width,ze.height);for(let re=0;re<6;re++){Q=Se[re].mipmaps;for(let Me=0;Me<Q.length;Me++){let _e=Q[Me];A.format!==Sn?Fe!==null?$e?H&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Me,0,0,_e.width,_e.height,Fe,_e.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Me,it,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$e?H&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Me,0,0,_e.width,_e.height,Fe,we,_e.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Me,it,_e.width,_e.height,0,Fe,we,_e.data)}}}else{if(Q=A.mipmaps,$e&&Et){Q.length>0&&me++;let re=Pe(Se[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,me,it,re.width,re.height)}for(let re=0;re<6;re++)if(he){$e?H&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Se[re].width,Se[re].height,Fe,we,Se[re].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,it,Se[re].width,Se[re].height,0,Fe,we,Se[re].data);for(let Me=0;Me<Q.length;Me++){let qe=Q[Me].image[re].image;$e?H&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Me+1,0,0,qe.width,qe.height,Fe,we,qe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Me+1,it,qe.width,qe.height,0,Fe,we,qe.data)}}else{$e?H&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Fe,we,Se[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,it,Fe,we,Se[re]);for(let Me=0;Me<Q.length;Me++){let _e=Q[Me];$e?H&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Me+1,0,0,Fe,we,_e.image[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Me+1,it,Fe,we,_e.image[re])}}}g(A)&&d(i.TEXTURE_CUBE_MAP),ie.__version=le.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function xe(L,A,q,se,le,ie){let Le=r.convert(q.format,q.colorSpace),ge=r.convert(q.type),Ee=y(q.internalFormat,Le,ge,q.colorSpace),st=n.get(A),he=n.get(q);if(he.__renderTarget=A,!st.__hasExternalTextures){let Se=Math.max(1,A.width>>ie),ze=Math.max(1,A.height>>ie);le===i.TEXTURE_3D||le===i.TEXTURE_2D_ARRAY?t.texImage3D(le,ie,Ee,Se,ze,A.depth,0,Le,ge,null):t.texImage2D(le,ie,Ee,Se,ze,0,Le,ge,null)}t.bindFramebuffer(i.FRAMEBUFFER,L),Ge(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,se,le,he.__webglTexture,0,He(A)):(le===i.TEXTURE_2D||le>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,se,le,he.__webglTexture,ie),t.bindFramebuffer(i.FRAMEBUFFER,null)}function te(L,A,q){if(i.bindRenderbuffer(i.RENDERBUFFER,L),A.depthBuffer){let se=A.depthTexture,le=se&&se.isDepthTexture?se.type:null,ie=M(A.stencilBuffer,le),Le=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=He(A);Ge(A)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ge,ie,A.width,A.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,ge,ie,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,ie,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Le,i.RENDERBUFFER,L)}else{let se=A.textures;for(let le=0;le<se.length;le++){let ie=se[le],Le=r.convert(ie.format,ie.colorSpace),ge=r.convert(ie.type),Ee=y(ie.internalFormat,Le,ge,ie.colorSpace),st=He(A);q&&Ge(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,st,Ee,A.width,A.height):Ge(A)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,st,Ee,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,Ee,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function V(L,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,L),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let se=n.get(A.depthTexture);se.__renderTarget=A,(!se.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),z(A.depthTexture,0);let le=se.__webglTexture,ie=He(A);if(A.depthTexture.format===$s)Ge(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,le,0,ie):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,le,0);else if(A.depthTexture.format===ir)Ge(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,le,0,ie):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,le,0);else throw new Error("Unknown depthTexture format")}function j(L){let A=n.get(L),q=L.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==L.depthTexture){let se=L.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),se){let le=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,se.removeEventListener("dispose",le)};se.addEventListener("dispose",le),A.__depthDisposeCallback=le}A.__boundDepthTexture=se}if(L.depthTexture&&!A.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");V(A.__webglFramebuffer,L)}else if(q){A.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[se]),A.__webglDepthbuffer[se]===void 0)A.__webglDepthbuffer[se]=i.createRenderbuffer(),te(A.__webglDepthbuffer[se],L,!1);else{let le=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=A.__webglDepthbuffer[se];i.bindRenderbuffer(i.RENDERBUFFER,ie),i.framebufferRenderbuffer(i.FRAMEBUFFER,le,i.RENDERBUFFER,ie)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=i.createRenderbuffer(),te(A.__webglDepthbuffer,L,!1);else{let se=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=A.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,le),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,le)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function X(L,A,q){let se=n.get(L);A!==void 0&&xe(se.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&j(L)}function oe(L){let A=L.texture,q=n.get(L),se=n.get(A);L.addEventListener("dispose",E);let le=L.textures,ie=L.isWebGLCubeRenderTarget===!0,Le=le.length>1;if(Le||(se.__webglTexture===void 0&&(se.__webglTexture=i.createTexture()),se.__version=A.version,o.memory.textures++),ie){q.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(A.mipmaps&&A.mipmaps.length>0){q.__webglFramebuffer[ge]=[];for(let Ee=0;Ee<A.mipmaps.length;Ee++)q.__webglFramebuffer[ge][Ee]=i.createFramebuffer()}else q.__webglFramebuffer[ge]=i.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){q.__webglFramebuffer=[];for(let ge=0;ge<A.mipmaps.length;ge++)q.__webglFramebuffer[ge]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(Le)for(let ge=0,Ee=le.length;ge<Ee;ge++){let st=n.get(le[ge]);st.__webglTexture===void 0&&(st.__webglTexture=i.createTexture(),o.memory.textures++)}if(L.samples>0&&Ge(L)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let ge=0;ge<le.length;ge++){let Ee=le[ge];q.__webglColorRenderbuffer[ge]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[ge]);let st=r.convert(Ee.format,Ee.colorSpace),he=r.convert(Ee.type),Se=y(Ee.internalFormat,st,he,Ee.colorSpace,L.isXRRenderTarget===!0),ze=He(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,ze,Se,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,q.__webglColorRenderbuffer[ge])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),te(q.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ie){t.bindTexture(i.TEXTURE_CUBE_MAP,se.__webglTexture),fe(i.TEXTURE_CUBE_MAP,A);for(let ge=0;ge<6;ge++)if(A.mipmaps&&A.mipmaps.length>0)for(let Ee=0;Ee<A.mipmaps.length;Ee++)xe(q.__webglFramebuffer[ge][Ee],L,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ee);else xe(q.__webglFramebuffer[ge],L,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);g(A)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Le){for(let ge=0,Ee=le.length;ge<Ee;ge++){let st=le[ge],he=n.get(st);t.bindTexture(i.TEXTURE_2D,he.__webglTexture),fe(i.TEXTURE_2D,st),xe(q.__webglFramebuffer,L,st,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,0),g(st)&&d(i.TEXTURE_2D)}t.unbindTexture()}else{let ge=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ge=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ge,se.__webglTexture),fe(ge,A),A.mipmaps&&A.mipmaps.length>0)for(let Ee=0;Ee<A.mipmaps.length;Ee++)xe(q.__webglFramebuffer[Ee],L,A,i.COLOR_ATTACHMENT0,ge,Ee);else xe(q.__webglFramebuffer,L,A,i.COLOR_ATTACHMENT0,ge,0);g(A)&&d(ge),t.unbindTexture()}L.depthBuffer&&j(L)}function ee(L){let A=L.textures;for(let q=0,se=A.length;q<se;q++){let le=A[q];if(g(le)){let ie=b(L),Le=n.get(le).__webglTexture;t.bindTexture(ie,Le),d(ie),t.unbindTexture()}}}let Te=[],k=[];function rt(L){if(L.samples>0){if(Ge(L)===!1){let A=L.textures,q=L.width,se=L.height,le=i.COLOR_BUFFER_BIT,ie=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Le=n.get(L),ge=A.length>1;if(ge)for(let Ee=0;Ee<A.length;Ee++)t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let Ee=0;Ee<A.length;Ee++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(le|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(le|=i.STENCIL_BUFFER_BIT)),ge){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Le.__webglColorRenderbuffer[Ee]);let st=n.get(A[Ee]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,st,0)}i.blitFramebuffer(0,0,q,se,0,0,q,se,le,i.NEAREST),l===!0&&(Te.length=0,k.length=0,Te.push(i.COLOR_ATTACHMENT0+Ee),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Te.push(ie),k.push(ie),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,k)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Te))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ge)for(let Ee=0;Ee<A.length;Ee++){t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,Le.__webglColorRenderbuffer[Ee]);let st=n.get(A[Ee]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,st,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){let A=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function He(L){return Math.min(s.maxSamples,L.samples)}function Ge(L){let A=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Ue(L){let A=o.render.frame;u.get(L)!==A&&(u.set(L,A),L.update())}function Xe(L,A){let q=L.colorSpace,se=L.format,le=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||q!==Qt&&q!==Di&&(je.getTransfer(q)===mt?(se!==Sn||le!==gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),A}function Pe(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=S,this.resetTextureUnits=U,this.setTexture2D=z,this.setTexture2DArray=P,this.setTexture3D=O,this.setTextureCube=F,this.rebindTextures=X,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=rt,this.setupDepthRenderbuffer=j,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=Ge}function Av(i,e){function t(n,s=Di){let r,o=je.getTransfer(s);if(n===gi)return i.UNSIGNED_BYTE;if(n===hh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===uh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===df)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===hf)return i.BYTE;if(n===uf)return i.SHORT;if(n===$r)return i.UNSIGNED_SHORT;if(n===ch)return i.INT;if(n===fs)return i.UNSIGNED_INT;if(n===zn)return i.FLOAT;if(n===Bn)return i.HALF_FLOAT;if(n===ff)return i.ALPHA;if(n===pf)return i.RGB;if(n===Sn)return i.RGBA;if(n===mf)return i.LUMINANCE;if(n===gf)return i.LUMINANCE_ALPHA;if(n===$s)return i.DEPTH_COMPONENT;if(n===ir)return i.DEPTH_STENCIL;if(n===dh)return i.RED;if(n===fh)return i.RED_INTEGER;if(n===xf)return i.RG;if(n===ph)return i.RG_INTEGER;if(n===mh)return i.RGBA_INTEGER;if(n===$o||n===Jo||n===jo||n===Qo)if(o===mt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===$o)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Jo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===jo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Qo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===$o)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Jo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===jo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Qo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===jl||n===Ql||n===ec||n===tc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===jl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ql)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ec)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===tc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===nc||n===ic||n===sc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===nc||n===ic)return o===mt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===sc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===rc||n===oc||n===ac||n===lc||n===cc||n===hc||n===uc||n===dc||n===fc||n===pc||n===mc||n===gc||n===xc||n===_c)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===rc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===oc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ac)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===lc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===cc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===hc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===uc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===dc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===fc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===pc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===mc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===gc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===xc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===_c)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ea||n===yc||n===vc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ea)return o===mt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===yc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===vc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===_f||n===Mc||n===bc||n===Ec)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ea)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Mc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===bc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ec)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===nr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Fc=class extends zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Oe=class extends Rt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Rv={type:"move"},Kr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Oe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Oe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Oe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,n),d=this._getHandJoint(c,x);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,m=.005;c.inputState.pinching&&f>p+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Rv)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Oe;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Cv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Iv=`
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

}`,Bc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new Vt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new It({vertexShader:Cv,fragmentShader:Iv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ue(new wn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},kc=class extends xi{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,m=null,x=new Bc,g=t.getContextAttributes(),d=null,b=null,y=[],M=[],C=new be,T=null,E=new zt;E.viewport=new ct;let I=new zt;I.viewport=new ct;let _=[E,I],v=new Fc,w=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ce=y[J];return ce===void 0&&(ce=new Kr,y[J]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(J){let ce=y[J];return ce===void 0&&(ce=new Kr,y[J]=ce),ce.getGripSpace()},this.getHand=function(J){let ce=y[J];return ce===void 0&&(ce=new Kr,y[J]=ce),ce.getHandSpace()};function S(J){let ce=M.indexOf(J.inputSource);if(ce===-1)return;let xe=y[ce];xe!==void 0&&(xe.update(J.inputSource,J.frame,c||o),xe.dispatchEvent({type:J.type,data:J.inputSource}))}function D(){s.removeEventListener("select",S),s.removeEventListener("selectstart",S),s.removeEventListener("selectend",S),s.removeEventListener("squeeze",S),s.removeEventListener("squeezestart",S),s.removeEventListener("squeezeend",S),s.removeEventListener("end",D),s.removeEventListener("inputsourceschange",z);for(let J=0;J<y.length;J++){let ce=M[J];ce!==null&&(M[J]=null,y[J].disconnect(ce))}w=null,U=null,x.reset(),e.setRenderTarget(d),p=null,f=null,h=null,s=null,b=null,Ae.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(d=e.getRenderTarget(),s.addEventListener("select",S),s.addEventListener("selectstart",S),s.addEventListener("selectend",S),s.addEventListener("squeeze",S),s.addEventListener("squeezestart",S),s.addEventListener("squeezeend",S),s.addEventListener("end",D),s.addEventListener("inputsourceschange",z),g.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(C),s.renderState.layers===void 0){let ce={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,ce),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new nn(p.framebufferWidth,p.framebufferHeight,{format:Sn,type:gi,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let ce=null,xe=null,te=null;g.depth&&(te=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=g.stencil?ir:$s,xe=g.stencil?nr:fs);let V={colorFormat:t.RGBA8,depthFormat:te,scaleFactor:r};h=new XRWebGLBinding(s,t),f=h.createProjectionLayer(V),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new nn(f.textureWidth,f.textureHeight,{format:Sn,type:gi,depthTexture:new ca(f.textureWidth,f.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ae.setContext(s),Ae.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function z(J){for(let ce=0;ce<J.removed.length;ce++){let xe=J.removed[ce],te=M.indexOf(xe);te>=0&&(M[te]=null,y[te].disconnect(xe))}for(let ce=0;ce<J.added.length;ce++){let xe=J.added[ce],te=M.indexOf(xe);if(te===-1){for(let j=0;j<y.length;j++)if(j>=M.length){M.push(xe),te=j;break}else if(M[j]===null){M[j]=xe,te=j;break}if(te===-1)break}let V=y[te];V&&V.connect(xe)}}let P=new N,O=new N;function F(J,ce,xe){P.setFromMatrixPosition(ce.matrixWorld),O.setFromMatrixPosition(xe.matrixWorld);let te=P.distanceTo(O),V=ce.projectionMatrix.elements,j=xe.projectionMatrix.elements,X=V[14]/(V[10]-1),oe=V[14]/(V[10]+1),ee=(V[9]+1)/V[5],Te=(V[9]-1)/V[5],k=(V[8]-1)/V[0],rt=(j[8]+1)/j[0],He=X*k,Ge=X*rt,Ue=te/(-k+rt),Xe=Ue*-k;if(ce.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Xe),J.translateZ(Ue),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),V[10]===-1)J.projectionMatrix.copy(ce.projectionMatrix),J.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{let Pe=X+Ue,L=oe+Ue,A=He-Xe,q=Ge+(te-Xe),se=ee*oe/L*Pe,le=Te*oe/L*Pe;J.projectionMatrix.makePerspective(A,q,se,le,Pe,L),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function $(J,ce){ce===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ce.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let ce=J.near,xe=J.far;x.texture!==null&&(x.depthNear>0&&(ce=x.depthNear),x.depthFar>0&&(xe=x.depthFar)),v.near=I.near=E.near=ce,v.far=I.far=E.far=xe,(w!==v.near||U!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),w=v.near,U=v.far),E.layers.mask=J.layers.mask|2,I.layers.mask=J.layers.mask|4,v.layers.mask=E.layers.mask|I.layers.mask;let te=J.parent,V=v.cameras;$(v,te);for(let j=0;j<V.length;j++)$(V[j],te);V.length===2?F(v,E,I):v.projectionMatrix.copy(E.projectionMatrix),Y(J,v,te)};function Y(J,ce,xe){xe===null?J.matrix.copy(ce.matrixWorld):(J.matrix.copy(xe.matrixWorld),J.matrix.invert(),J.matrix.multiply(ce.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ce.projectionMatrix),J.projectionMatrixInverse.copy(ce.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=or*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(J){l=J,f!==null&&(f.fixedFoveation=J),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=J)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(v)};let ne=null;function fe(J,ce){if(u=ce.getViewerPose(c||o),m=ce,u!==null){let xe=u.views;p!==null&&(e.setRenderTargetFramebuffer(b,p.framebuffer),e.setRenderTarget(b));let te=!1;xe.length!==v.cameras.length&&(v.cameras.length=0,te=!0);for(let j=0;j<xe.length;j++){let X=xe[j],oe=null;if(p!==null)oe=p.getViewport(X);else{let Te=h.getViewSubImage(f,X);oe=Te.viewport,j===0&&(e.setRenderTargetTextures(b,Te.colorTexture,f.ignoreDepthValues?void 0:Te.depthStencilTexture),e.setRenderTarget(b))}let ee=_[j];ee===void 0&&(ee=new zt,ee.layers.enable(j),ee.viewport=new ct,_[j]=ee),ee.matrix.fromArray(X.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(X.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(oe.x,oe.y,oe.width,oe.height),j===0&&(v.matrix.copy(ee.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),te===!0&&v.cameras.push(ee)}let V=s.enabledFeatures;if(V&&V.includes("depth-sensing")){let j=h.getDepthInformation(xe[0]);j&&j.isValid&&j.texture&&x.init(e,j,s.renderState)}}for(let xe=0;xe<y.length;xe++){let te=M[xe],V=y[xe];te!==null&&V!==void 0&&V.update(te,ce,c||o)}ne&&ne(J,ce),ce.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ce}),m=null}let Ae=new Tf;Ae.setAnimationLoop(fe),this.setAnimationLoop=function(J){ne=J},this.dispose=function(){}}},cs=new $n,Pv=new Be;function Lv(i,e){function t(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function n(g,d){d.color.getRGB(g.fogColor.value,wf(i)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function s(g,d,b,y,M){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(g,d):d.isMeshToonMaterial?(r(g,d),h(g,d)):d.isMeshPhongMaterial?(r(g,d),u(g,d)):d.isMeshStandardMaterial?(r(g,d),f(g,d),d.isMeshPhysicalMaterial&&p(g,d,M)):d.isMeshMatcapMaterial?(r(g,d),m(g,d)):d.isMeshDepthMaterial?r(g,d):d.isMeshDistanceMaterial?(r(g,d),x(g,d)):d.isMeshNormalMaterial?r(g,d):d.isLineBasicMaterial?(o(g,d),d.isLineDashedMaterial&&a(g,d)):d.isPointsMaterial?l(g,d,b,y):d.isSpriteMaterial?c(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,t(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===$t&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,t(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===$t&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,t(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,t(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);let b=e.get(d),y=b.envMap,M=b.envMapRotation;y&&(g.envMap.value=y,cs.copy(M),cs.x*=-1,cs.y*=-1,cs.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(cs.y*=-1,cs.z*=-1),g.envMapRotation.value.setFromMatrix4(Pv.makeRotationFromEuler(cs)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,g.aoMapTransform))}function o(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform))}function a(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function l(g,d,b,y){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*b,g.scale.value=y*.5,d.map&&(g.map.value=d.map,t(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function c(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function u(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function h(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function f(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function p(g,d,b){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===$t&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,d){d.matcap&&(g.matcap.value=d.matcap)}function x(g,d){let b=e.get(d).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Dv(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,y){let M=y.program;n.uniformBlockBinding(b,M)}function c(b,y){let M=s[b.id];M===void 0&&(m(b),M=u(b),s[b.id]=M,b.addEventListener("dispose",g));let C=y.program;n.updateUBOMapping(b,C);let T=e.render.frame;r[b.id]!==T&&(f(b),r[b.id]=T)}function u(b){let y=h();b.__bindingPointIndex=y;let M=i.createBuffer(),C=b.__size,T=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,C,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,M),M}function h(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){let y=s[b.id],M=b.uniforms,C=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let T=0,E=M.length;T<E;T++){let I=Array.isArray(M[T])?M[T]:[M[T]];for(let _=0,v=I.length;_<v;_++){let w=I[_];if(p(w,T,_,C)===!0){let U=w.__offset,S=Array.isArray(w.value)?w.value:[w.value],D=0;for(let z=0;z<S.length;z++){let P=S[z],O=x(P);typeof P=="number"||typeof P=="boolean"?(w.__data[0]=P,i.bufferSubData(i.UNIFORM_BUFFER,U+D,w.__data)):P.isMatrix3?(w.__data[0]=P.elements[0],w.__data[1]=P.elements[1],w.__data[2]=P.elements[2],w.__data[3]=0,w.__data[4]=P.elements[3],w.__data[5]=P.elements[4],w.__data[6]=P.elements[5],w.__data[7]=0,w.__data[8]=P.elements[6],w.__data[9]=P.elements[7],w.__data[10]=P.elements[8],w.__data[11]=0):(P.toArray(w.__data,D),D+=O.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(b,y,M,C){let T=b.value,E=y+"_"+M;if(C[E]===void 0)return typeof T=="number"||typeof T=="boolean"?C[E]=T:C[E]=T.clone(),!0;{let I=C[E];if(typeof T=="number"||typeof T=="boolean"){if(I!==T)return C[E]=T,!0}else if(I.equals(T)===!1)return I.copy(T),!0}return!1}function m(b){let y=b.uniforms,M=0,C=16;for(let E=0,I=y.length;E<I;E++){let _=Array.isArray(y[E])?y[E]:[y[E]];for(let v=0,w=_.length;v<w;v++){let U=_[v],S=Array.isArray(U.value)?U.value:[U.value];for(let D=0,z=S.length;D<z;D++){let P=S[D],O=x(P),F=M%C,$=F%O.boundary,Y=F+$;M+=$,Y!==0&&C-Y<O.storage&&(M+=C-Y),U.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=M,M+=O.storage}}}let T=M%C;return T>0&&(M+=C-T),b.__size=M,b.__cache={},this}function x(b){let y={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(y.boundary=4,y.storage=4):b.isVector2?(y.boundary=8,y.storage=8):b.isVector3||b.isColor?(y.boundary=16,y.storage=12):b.isVector4?(y.boundary=16,y.storage=16):b.isMatrix3?(y.boundary=48,y.storage=48):b.isMatrix4?(y.boundary=64,y.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),y}function g(b){let y=b.target;y.removeEventListener("dispose",g);let M=o.indexOf(y.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function d(){for(let b in s)i.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:c,dispose:d}}var ha=class{constructor(e={}){let{canvas:t=F0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let m=new Uint32Array(4),x=new Int32Array(4),g=null,d=null,b=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=gt,this.toneMapping=Oi,this.toneMappingExposure=1;let M=this,C=!1,T=0,E=0,I=null,_=-1,v=null,w=new ct,U=new ct,S=null,D=new ve(0),z=0,P=t.width,O=t.height,F=1,$=null,Y=null,ne=new ct(0,0,P,O),fe=new ct(0,0,P,O),Ae=!1,J=new Qr,ce=!1,xe=!1,te=new Be,V=new Be,j=new N,X=new ct,oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ee=!1;function Te(){return I===null?F:1}let k=n;function rt(R,G){return t.getContext(R,G)}try{let R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${th}`),t.addEventListener("webglcontextlost",re,!1),t.addEventListener("webglcontextrestored",Me,!1),t.addEventListener("webglcontextcreationerror",_e,!1),k===null){let G="webgl2";if(k=rt(G,R),k===null)throw rt(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let He,Ge,Ue,Xe,Pe,L,A,q,se,le,ie,Le,ge,Ee,st,he,Se,ze,Fe,we,it,$e,Et,H;function me(){He=new Z_(k),He.init(),$e=new Av(k,He),Ge=new G_(k,He,e,$e),Ue=new Sv(k,He),Ge.reverseDepthBuffer&&f&&Ue.buffers.depth.setReversed(!0),Xe=new j_(k),Pe=new uv,L=new Tv(k,He,Ue,Pe,Ge,$e,Xe),A=new X_(M),q=new K_(M),se=new rg(k),Et=new H_(k,se),le=new $_(k,se,Xe,Et),ie=new ey(k,le,se,Xe),Fe=new Q_(k,Ge,L),he=new W_(Pe),Le=new hv(M,A,q,He,Ge,Et,he),ge=new Lv(M,Pe),Ee=new fv,st=new yv(He),ze=new k_(M,A,q,Ue,ie,p,l),Se=new bv(M,ie,Ge),H=new Dv(k,Xe,Ge,Ue),we=new V_(k,He,Xe),it=new J_(k,He,Xe),Xe.programs=Le.programs,M.capabilities=Ge,M.extensions=He,M.properties=Pe,M.renderLists=Ee,M.shadowMap=Se,M.state=Ue,M.info=Xe}me();let Q=new kc(M,k);this.xr=Q,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let R=He.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=He.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(R){R!==void 0&&(F=R,this.setSize(P,O,!1))},this.getSize=function(R){return R.set(P,O)},this.setSize=function(R,G,K=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=R,O=G,t.width=Math.floor(R*F),t.height=Math.floor(G*F),K===!0&&(t.style.width=R+"px",t.style.height=G+"px"),this.setViewport(0,0,R,G)},this.getDrawingBufferSize=function(R){return R.set(P*F,O*F).floor()},this.setDrawingBufferSize=function(R,G,K){P=R,O=G,F=K,t.width=Math.floor(R*K),t.height=Math.floor(G*K),this.setViewport(0,0,R,G)},this.getCurrentViewport=function(R){return R.copy(w)},this.getViewport=function(R){return R.copy(ne)},this.setViewport=function(R,G,K,Z){R.isVector4?ne.set(R.x,R.y,R.z,R.w):ne.set(R,G,K,Z),Ue.viewport(w.copy(ne).multiplyScalar(F).round())},this.getScissor=function(R){return R.copy(fe)},this.setScissor=function(R,G,K,Z){R.isVector4?fe.set(R.x,R.y,R.z,R.w):fe.set(R,G,K,Z),Ue.scissor(U.copy(fe).multiplyScalar(F).round())},this.getScissorTest=function(){return Ae},this.setScissorTest=function(R){Ue.setScissorTest(Ae=R)},this.setOpaqueSort=function(R){$=R},this.setTransparentSort=function(R){Y=R},this.getClearColor=function(R){return R.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor.apply(ze,arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha.apply(ze,arguments)},this.clear=function(R=!0,G=!0,K=!0){let Z=0;if(R){let W=!1;if(I!==null){let de=I.texture.format;W=de===mh||de===ph||de===fh}if(W){let de=I.texture.type,ye=de===gi||de===fs||de===$r||de===nr||de===hh||de===uh,Re=ze.getClearColor(),Ce=ze.getClearAlpha(),Ve=Re.r,Ye=Re.g,Ie=Re.b;ye?(m[0]=Ve,m[1]=Ye,m[2]=Ie,m[3]=Ce,k.clearBufferuiv(k.COLOR,0,m)):(x[0]=Ve,x[1]=Ye,x[2]=Ie,x[3]=Ce,k.clearBufferiv(k.COLOR,0,x))}else Z|=k.COLOR_BUFFER_BIT}G&&(Z|=k.DEPTH_BUFFER_BIT),K&&(Z|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",re,!1),t.removeEventListener("webglcontextrestored",Me,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),Ee.dispose(),st.dispose(),Pe.dispose(),A.dispose(),q.dispose(),ie.dispose(),Et.dispose(),H.dispose(),Le.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",Lu),Q.removeEventListener("sessionend",Du),is.stop()};function re(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function Me(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;let R=Xe.autoReset,G=Se.enabled,K=Se.autoUpdate,Z=Se.needsUpdate,W=Se.type;me(),Xe.autoReset=R,Se.enabled=G,Se.autoUpdate=K,Se.needsUpdate=Z,Se.type=W}function _e(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function qe(R){let G=R.target;G.removeEventListener("dispose",qe),Dt(G)}function Dt(R){qt(R),Pe.remove(R)}function qt(R){let G=Pe.get(R).programs;G!==void 0&&(G.forEach(function(K){Le.releaseProgram(K)}),R.isShaderMaterial&&Le.releaseShaderCache(R))}this.renderBufferDirect=function(R,G,K,Z,W,de){G===null&&(G=oe);let ye=W.isMesh&&W.matrixWorld.determinant()<0,Re=zm(R,G,K,Z,W);Ue.setMaterial(Z,ye);let Ce=K.index,Ve=1;if(Z.wireframe===!0){if(Ce=le.getWireframeAttribute(K),Ce===void 0)return;Ve=2}let Ye=K.drawRange,Ie=K.attributes.position,ot=Ye.start*Ve,St=(Ye.start+Ye.count)*Ve;de!==null&&(ot=Math.max(ot,de.start*Ve),St=Math.min(St,(de.start+de.count)*Ve)),Ce!==null?(ot=Math.max(ot,0),St=Math.min(St,Ce.count)):Ie!=null&&(ot=Math.max(ot,0),St=Math.min(St,Ie.count));let wt=St-ot;if(wt<0||wt===1/0)return;Et.setup(W,Z,Re,K,Ce);let ln,ft=we;if(Ce!==null&&(ln=se.get(Ce),ft=it,ft.setIndex(ln)),W.isMesh)Z.wireframe===!0?(Ue.setLineWidth(Z.wireframeLinewidth*Te()),ft.setMode(k.LINES)):ft.setMode(k.TRIANGLES);else if(W.isLine){let De=Z.linewidth;De===void 0&&(De=1),Ue.setLineWidth(De*Te()),W.isLineSegments?ft.setMode(k.LINES):W.isLineLoop?ft.setMode(k.LINE_LOOP):ft.setMode(k.LINE_STRIP)}else W.isPoints?ft.setMode(k.POINTS):W.isSprite&&ft.setMode(k.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)ft.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(He.get("WEBGL_multi_draw"))ft.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let De=W._multiDrawStarts,ri=W._multiDrawCounts,pt=W._multiDrawCount,Pn=Ce?se.get(Ce).bytesPerElement:1,ws=Pe.get(Z).currentProgram.getUniforms();for(let pn=0;pn<pt;pn++)ws.setValue(k,"_gl_DrawID",pn),ft.render(De[pn]/Pn,ri[pn])}else if(W.isInstancedMesh)ft.renderInstances(ot,wt,W.count);else if(K.isInstancedBufferGeometry){let De=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,ri=Math.min(K.instanceCount,De);ft.renderInstances(ot,wt,ri)}else ft.render(ot,wt)};function _t(R,G,K){R.transparent===!0&&R.side===xt&&R.forceSinglePass===!1?(R.side=$t,R.needsUpdate=!0,yo(R,G,K),R.side=Zn,R.needsUpdate=!0,yo(R,G,K),R.side=xt):yo(R,G,K)}this.compile=function(R,G,K=null){K===null&&(K=R),d=st.get(K),d.init(G),y.push(d),K.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(d.pushLight(W),W.castShadow&&d.pushShadow(W))}),R!==K&&R.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(d.pushLight(W),W.castShadow&&d.pushShadow(W))}),d.setupLights();let Z=new Set;return R.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let de=W.material;if(de)if(Array.isArray(de))for(let ye=0;ye<de.length;ye++){let Re=de[ye];_t(Re,K,W),Z.add(Re)}else _t(de,K,W),Z.add(de)}),y.pop(),d=null,Z},this.compileAsync=function(R,G,K=null){let Z=this.compile(R,G,K);return new Promise(W=>{function de(){if(Z.forEach(function(ye){Pe.get(ye).currentProgram.isReady()&&Z.delete(ye)}),Z.size===0){W(R);return}setTimeout(de,10)}He.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let In=null;function si(R){In&&In(R)}function Lu(){is.stop()}function Du(){is.start()}let is=new Tf;is.setAnimationLoop(si),typeof self<"u"&&is.setContext(self),this.setAnimationLoop=function(R){In=R,Q.setAnimationLoop(R),R===null?is.stop():is.start()},Q.addEventListener("sessionstart",Lu),Q.addEventListener("sessionend",Du),this.render=function(R,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(G),G=Q.getCamera()),R.isScene===!0&&R.onBeforeRender(M,R,G,I),d=st.get(R,y.length),d.init(G),y.push(d),V.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),J.setFromProjectionMatrix(V),xe=this.localClippingEnabled,ce=he.init(this.clippingPlanes,xe),g=Ee.get(R,b.length),g.init(),b.push(g),Q.enabled===!0&&Q.isPresenting===!0){let de=M.xr.getDepthSensingMesh();de!==null&&al(de,G,-1/0,M.sortObjects)}al(R,G,0,M.sortObjects),g.finish(),M.sortObjects===!0&&g.sort($,Y),ee=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,ee&&ze.addToRenderList(g,R),this.info.render.frame++,ce===!0&&he.beginShadows();let K=d.state.shadowsArray;Se.render(K,R,G),ce===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset();let Z=g.opaque,W=g.transmissive;if(d.setupLights(),G.isArrayCamera){let de=G.cameras;if(W.length>0)for(let ye=0,Re=de.length;ye<Re;ye++){let Ce=de[ye];Uu(Z,W,R,Ce)}ee&&ze.render(R);for(let ye=0,Re=de.length;ye<Re;ye++){let Ce=de[ye];Nu(g,R,Ce,Ce.viewport)}}else W.length>0&&Uu(Z,W,R,G),ee&&ze.render(R),Nu(g,R,G);I!==null&&(L.updateMultisampleRenderTarget(I),L.updateRenderTargetMipmap(I)),R.isScene===!0&&R.onAfterRender(M,R,G),Et.resetDefaultState(),_=-1,v=null,y.pop(),y.length>0?(d=y[y.length-1],ce===!0&&he.setGlobalState(M.clippingPlanes,d.state.camera)):d=null,b.pop(),b.length>0?g=b[b.length-1]:g=null};function al(R,G,K,Z){if(R.visible===!1)return;if(R.layers.test(G.layers)){if(R.isGroup)K=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(G);else if(R.isLight)d.pushLight(R),R.castShadow&&d.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||J.intersectsSprite(R)){Z&&X.setFromMatrixPosition(R.matrixWorld).applyMatrix4(V);let ye=ie.update(R),Re=R.material;Re.visible&&g.push(R,ye,Re,K,X.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||J.intersectsObject(R))){let ye=ie.update(R),Re=R.material;if(Z&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),X.copy(R.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),X.copy(ye.boundingSphere.center)),X.applyMatrix4(R.matrixWorld).applyMatrix4(V)),Array.isArray(Re)){let Ce=ye.groups;for(let Ve=0,Ye=Ce.length;Ve<Ye;Ve++){let Ie=Ce[Ve],ot=Re[Ie.materialIndex];ot&&ot.visible&&g.push(R,ye,ot,K,X.z,Ie)}}else Re.visible&&g.push(R,ye,Re,K,X.z,null)}}let de=R.children;for(let ye=0,Re=de.length;ye<Re;ye++)al(de[ye],G,K,Z)}function Nu(R,G,K,Z){let W=R.opaque,de=R.transmissive,ye=R.transparent;d.setupLightsView(K),ce===!0&&he.setGlobalState(M.clippingPlanes,K),Z&&Ue.viewport(w.copy(Z)),W.length>0&&_o(W,G,K),de.length>0&&_o(de,G,K),ye.length>0&&_o(ye,G,K),Ue.buffers.depth.setTest(!0),Ue.buffers.depth.setMask(!0),Ue.buffers.color.setMask(!0),Ue.setPolygonOffset(!1)}function Uu(R,G,K,Z){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[Z.id]===void 0&&(d.state.transmissionRenderTarget[Z.id]=new nn(1,1,{generateMipmaps:!0,type:He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float")?Bn:gi,minFilter:Yn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:je.workingColorSpace}));let de=d.state.transmissionRenderTarget[Z.id],ye=Z.viewport||w;de.setSize(ye.z,ye.w);let Re=M.getRenderTarget();M.setRenderTarget(de),M.getClearColor(D),z=M.getClearAlpha(),z<1&&M.setClearColor(16777215,.5),M.clear(),ee&&ze.render(K);let Ce=M.toneMapping;M.toneMapping=Oi;let Ve=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),d.setupLightsView(Z),ce===!0&&he.setGlobalState(M.clippingPlanes,Z),_o(R,K,Z),L.updateMultisampleRenderTarget(de),L.updateRenderTargetMipmap(de),He.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let Ie=0,ot=G.length;Ie<ot;Ie++){let St=G[Ie],wt=St.object,ln=St.geometry,ft=St.material,De=St.group;if(ft.side===xt&&wt.layers.test(Z.layers)){let ri=ft.side;ft.side=$t,ft.needsUpdate=!0,Ou(wt,K,Z,ln,ft,De),ft.side=ri,ft.needsUpdate=!0,Ye=!0}}Ye===!0&&(L.updateMultisampleRenderTarget(de),L.updateRenderTargetMipmap(de))}M.setRenderTarget(Re),M.setClearColor(D,z),Ve!==void 0&&(Z.viewport=Ve),M.toneMapping=Ce}function _o(R,G,K){let Z=G.isScene===!0?G.overrideMaterial:null;for(let W=0,de=R.length;W<de;W++){let ye=R[W],Re=ye.object,Ce=ye.geometry,Ve=Z===null?ye.material:Z,Ye=ye.group;Re.layers.test(K.layers)&&Ou(Re,G,K,Ce,Ve,Ye)}}function Ou(R,G,K,Z,W,de){R.onBeforeRender(M,G,K,Z,W,de),R.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),W.onBeforeRender(M,G,K,Z,R,de),W.transparent===!0&&W.side===xt&&W.forceSinglePass===!1?(W.side=$t,W.needsUpdate=!0,M.renderBufferDirect(K,G,Z,W,R,de),W.side=Zn,W.needsUpdate=!0,M.renderBufferDirect(K,G,Z,W,R,de),W.side=xt):M.renderBufferDirect(K,G,Z,W,R,de),R.onAfterRender(M,G,K,Z,W,de)}function yo(R,G,K){G.isScene!==!0&&(G=oe);let Z=Pe.get(R),W=d.state.lights,de=d.state.shadowsArray,ye=W.state.version,Re=Le.getParameters(R,W.state,de,G,K),Ce=Le.getProgramCacheKey(Re),Ve=Z.programs;Z.environment=R.isMeshStandardMaterial?G.environment:null,Z.fog=G.fog,Z.envMap=(R.isMeshStandardMaterial?q:A).get(R.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&R.envMap===null?G.environmentRotation:R.envMapRotation,Ve===void 0&&(R.addEventListener("dispose",qe),Ve=new Map,Z.programs=Ve);let Ye=Ve.get(Ce);if(Ye!==void 0){if(Z.currentProgram===Ye&&Z.lightsStateVersion===ye)return Fu(R,Re),Ye}else Re.uniforms=Le.getUniforms(R),R.onBeforeCompile(Re,M),Ye=Le.acquireProgram(Re,Ce),Ve.set(Ce,Ye),Z.uniforms=Re.uniforms;let Ie=Z.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ie.clippingPlanes=he.uniform),Fu(R,Re),Z.needsLights=Bm(R),Z.lightsStateVersion=ye,Z.needsLights&&(Ie.ambientLightColor.value=W.state.ambient,Ie.lightProbe.value=W.state.probe,Ie.directionalLights.value=W.state.directional,Ie.directionalLightShadows.value=W.state.directionalShadow,Ie.spotLights.value=W.state.spot,Ie.spotLightShadows.value=W.state.spotShadow,Ie.rectAreaLights.value=W.state.rectArea,Ie.ltc_1.value=W.state.rectAreaLTC1,Ie.ltc_2.value=W.state.rectAreaLTC2,Ie.pointLights.value=W.state.point,Ie.pointLightShadows.value=W.state.pointShadow,Ie.hemisphereLights.value=W.state.hemi,Ie.directionalShadowMap.value=W.state.directionalShadowMap,Ie.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ie.spotShadowMap.value=W.state.spotShadowMap,Ie.spotLightMatrix.value=W.state.spotLightMatrix,Ie.spotLightMap.value=W.state.spotLightMap,Ie.pointShadowMap.value=W.state.pointShadowMap,Ie.pointShadowMatrix.value=W.state.pointShadowMatrix),Z.currentProgram=Ye,Z.uniformsList=null,Ye}function zu(R){if(R.uniformsList===null){let G=R.currentProgram.getUniforms();R.uniformsList=js.seqWithValue(G.seq,R.uniforms)}return R.uniformsList}function Fu(R,G){let K=Pe.get(R);K.outputColorSpace=G.outputColorSpace,K.batching=G.batching,K.batchingColor=G.batchingColor,K.instancing=G.instancing,K.instancingColor=G.instancingColor,K.instancingMorph=G.instancingMorph,K.skinning=G.skinning,K.morphTargets=G.morphTargets,K.morphNormals=G.morphNormals,K.morphColors=G.morphColors,K.morphTargetsCount=G.morphTargetsCount,K.numClippingPlanes=G.numClippingPlanes,K.numIntersection=G.numClipIntersection,K.vertexAlphas=G.vertexAlphas,K.vertexTangents=G.vertexTangents,K.toneMapping=G.toneMapping}function zm(R,G,K,Z,W){G.isScene!==!0&&(G=oe),L.resetTextureUnits();let de=G.fog,ye=Z.isMeshStandardMaterial?G.environment:null,Re=I===null?M.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Qt,Ce=(Z.isMeshStandardMaterial?q:A).get(Z.envMap||ye),Ve=Z.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Ye=!!K.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Ie=!!K.morphAttributes.position,ot=!!K.morphAttributes.normal,St=!!K.morphAttributes.color,wt=Oi;Z.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(wt=M.toneMapping);let ln=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ft=ln!==void 0?ln.length:0,De=Pe.get(Z),ri=d.state.lights;if(ce===!0&&(xe===!0||R!==v)){let bn=R===v&&Z.id===_;he.setState(Z,R,bn)}let pt=!1;Z.version===De.__version?(De.needsLights&&De.lightsStateVersion!==ri.state.version||De.outputColorSpace!==Re||W.isBatchedMesh&&De.batching===!1||!W.isBatchedMesh&&De.batching===!0||W.isBatchedMesh&&De.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&De.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&De.instancing===!1||!W.isInstancedMesh&&De.instancing===!0||W.isSkinnedMesh&&De.skinning===!1||!W.isSkinnedMesh&&De.skinning===!0||W.isInstancedMesh&&De.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&De.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&De.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&De.instancingMorph===!1&&W.morphTexture!==null||De.envMap!==Ce||Z.fog===!0&&De.fog!==de||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==he.numPlanes||De.numIntersection!==he.numIntersection)||De.vertexAlphas!==Ve||De.vertexTangents!==Ye||De.morphTargets!==Ie||De.morphNormals!==ot||De.morphColors!==St||De.toneMapping!==wt||De.morphTargetsCount!==ft)&&(pt=!0):(pt=!0,De.__version=Z.version);let Pn=De.currentProgram;pt===!0&&(Pn=yo(Z,G,W));let ws=!1,pn=!1,Ir=!1,Tt=Pn.getUniforms(),Xn=De.uniforms;if(Ue.useProgram(Pn.program)&&(ws=!0,pn=!0,Ir=!0),Z.id!==_&&(_=Z.id,pn=!0),ws||v!==R){Ue.buffers.depth.getReversed()?(te.copy(R.projectionMatrix),k0(te),H0(te),Tt.setValue(k,"projectionMatrix",te)):Tt.setValue(k,"projectionMatrix",R.projectionMatrix),Tt.setValue(k,"viewMatrix",R.matrixWorldInverse);let wi=Tt.map.cameraPosition;wi!==void 0&&wi.setValue(k,j.setFromMatrixPosition(R.matrixWorld)),Ge.logarithmicDepthBuffer&&Tt.setValue(k,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Tt.setValue(k,"isOrthographic",R.isOrthographicCamera===!0),v!==R&&(v=R,pn=!0,Ir=!0)}if(W.isSkinnedMesh){Tt.setOptional(k,W,"bindMatrix"),Tt.setOptional(k,W,"bindMatrixInverse");let bn=W.skeleton;bn&&(bn.boneTexture===null&&bn.computeBoneTexture(),Tt.setValue(k,"boneTexture",bn.boneTexture,L))}W.isBatchedMesh&&(Tt.setOptional(k,W,"batchingTexture"),Tt.setValue(k,"batchingTexture",W._matricesTexture,L),Tt.setOptional(k,W,"batchingIdTexture"),Tt.setValue(k,"batchingIdTexture",W._indirectTexture,L),Tt.setOptional(k,W,"batchingColorTexture"),W._colorsTexture!==null&&Tt.setValue(k,"batchingColorTexture",W._colorsTexture,L));let Pr=K.morphAttributes;if((Pr.position!==void 0||Pr.normal!==void 0||Pr.color!==void 0)&&Fe.update(W,K,Pn),(pn||De.receiveShadow!==W.receiveShadow)&&(De.receiveShadow=W.receiveShadow,Tt.setValue(k,"receiveShadow",W.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(Xn.envMap.value=Ce,Xn.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&G.environment!==null&&(Xn.envMapIntensity.value=G.environmentIntensity),pn&&(Tt.setValue(k,"toneMappingExposure",M.toneMappingExposure),De.needsLights&&Fm(Xn,Ir),de&&Z.fog===!0&&ge.refreshFogUniforms(Xn,de),ge.refreshMaterialUniforms(Xn,Z,F,O,d.state.transmissionRenderTarget[R.id]),js.upload(k,zu(De),Xn,L)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(js.upload(k,zu(De),Xn,L),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Tt.setValue(k,"center",W.center),Tt.setValue(k,"modelViewMatrix",W.modelViewMatrix),Tt.setValue(k,"normalMatrix",W.normalMatrix),Tt.setValue(k,"modelMatrix",W.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){let bn=Z.uniformsGroups;for(let wi=0,Ti=bn.length;wi<Ti;wi++){let Bu=bn[wi];H.update(Bu,Pn),H.bind(Bu,Pn)}}return Pn}function Fm(R,G){R.ambientLightColor.needsUpdate=G,R.lightProbe.needsUpdate=G,R.directionalLights.needsUpdate=G,R.directionalLightShadows.needsUpdate=G,R.pointLights.needsUpdate=G,R.pointLightShadows.needsUpdate=G,R.spotLights.needsUpdate=G,R.spotLightShadows.needsUpdate=G,R.rectAreaLights.needsUpdate=G,R.hemisphereLights.needsUpdate=G}function Bm(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(R,G,K){Pe.get(R.texture).__webglTexture=G,Pe.get(R.depthTexture).__webglTexture=K;let Z=Pe.get(R);Z.__hasExternalTextures=!0,Z.__autoAllocateDepthBuffer=K===void 0,Z.__autoAllocateDepthBuffer||He.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,G){let K=Pe.get(R);K.__webglFramebuffer=G,K.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(R,G=0,K=0){I=R,T=G,E=K;let Z=!0,W=null,de=!1,ye=!1;if(R){let Ce=Pe.get(R);if(Ce.__useDefaultFramebuffer!==void 0)Ue.bindFramebuffer(k.FRAMEBUFFER,null),Z=!1;else if(Ce.__webglFramebuffer===void 0)L.setupRenderTarget(R);else if(Ce.__hasExternalTextures)L.rebindTextures(R,Pe.get(R.texture).__webglTexture,Pe.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let Ie=R.depthTexture;if(Ce.__boundDepthTexture!==Ie){if(Ie!==null&&Pe.has(Ie)&&(R.width!==Ie.image.width||R.height!==Ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(R)}}let Ve=R.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(ye=!0);let Ye=Pe.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ye[G])?W=Ye[G][K]:W=Ye[G],de=!0):R.samples>0&&L.useMultisampledRTT(R)===!1?W=Pe.get(R).__webglMultisampledFramebuffer:Array.isArray(Ye)?W=Ye[K]:W=Ye,w.copy(R.viewport),U.copy(R.scissor),S=R.scissorTest}else w.copy(ne).multiplyScalar(F).floor(),U.copy(fe).multiplyScalar(F).floor(),S=Ae;if(Ue.bindFramebuffer(k.FRAMEBUFFER,W)&&Z&&Ue.drawBuffers(R,W),Ue.viewport(w),Ue.scissor(U),Ue.setScissorTest(S),de){let Ce=Pe.get(R.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ce.__webglTexture,K)}else if(ye){let Ce=Pe.get(R.texture),Ve=G||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ce.__webglTexture,K||0,Ve)}_=-1},this.readRenderTargetPixels=function(R,G,K,Z,W,de,ye){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=Pe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ye!==void 0&&(Re=Re[ye]),Re){Ue.bindFramebuffer(k.FRAMEBUFFER,Re);try{let Ce=R.texture,Ve=Ce.format,Ye=Ce.type;if(!Ge.textureFormatReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ge.textureTypeReadable(Ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=R.width-Z&&K>=0&&K<=R.height-W&&k.readPixels(G,K,Z,W,$e.convert(Ve),$e.convert(Ye),de)}finally{let Ce=I!==null?Pe.get(I).__webglFramebuffer:null;Ue.bindFramebuffer(k.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(R,G,K,Z,W,de,ye){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=Pe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ye!==void 0&&(Re=Re[ye]),Re){let Ce=R.texture,Ve=Ce.format,Ye=Ce.type;if(!Ge.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ge.textureTypeReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(G>=0&&G<=R.width-Z&&K>=0&&K<=R.height-W){Ue.bindFramebuffer(k.FRAMEBUFFER,Re);let Ie=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Ie),k.bufferData(k.PIXEL_PACK_BUFFER,de.byteLength,k.STREAM_READ),k.readPixels(G,K,Z,W,$e.convert(Ve),$e.convert(Ye),0);let ot=I!==null?Pe.get(I).__webglFramebuffer:null;Ue.bindFramebuffer(k.FRAMEBUFFER,ot);let St=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await B0(k,St,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Ie),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,de),k.deleteBuffer(Ie),k.deleteSync(St),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,G=null,K=0){R.isTexture!==!0&&(Gr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),G=arguments[0]||null,R=arguments[1]);let Z=Math.pow(2,-K),W=Math.floor(R.image.width*Z),de=Math.floor(R.image.height*Z),ye=G!==null?G.x:0,Re=G!==null?G.y:0;L.setTexture2D(R,0),k.copyTexSubImage2D(k.TEXTURE_2D,K,0,0,ye,Re,W,de),Ue.unbindTexture()},this.copyTextureToTexture=function(R,G,K=null,Z=null,W=0){R.isTexture!==!0&&(Gr("WebGLRenderer: copyTextureToTexture function signature has changed."),Z=arguments[0]||null,R=arguments[1],G=arguments[2],W=arguments[3]||0,K=null);let de,ye,Re,Ce,Ve,Ye,Ie,ot,St,wt=R.isCompressedTexture?R.mipmaps[W]:R.image;K!==null?(de=K.max.x-K.min.x,ye=K.max.y-K.min.y,Re=K.isBox3?K.max.z-K.min.z:1,Ce=K.min.x,Ve=K.min.y,Ye=K.isBox3?K.min.z:0):(de=wt.width,ye=wt.height,Re=wt.depth||1,Ce=0,Ve=0,Ye=0),Z!==null?(Ie=Z.x,ot=Z.y,St=Z.z):(Ie=0,ot=0,St=0);let ln=$e.convert(G.format),ft=$e.convert(G.type),De;G.isData3DTexture?(L.setTexture3D(G,0),De=k.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(L.setTexture2DArray(G,0),De=k.TEXTURE_2D_ARRAY):(L.setTexture2D(G,0),De=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,G.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,G.unpackAlignment);let ri=k.getParameter(k.UNPACK_ROW_LENGTH),pt=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Pn=k.getParameter(k.UNPACK_SKIP_PIXELS),ws=k.getParameter(k.UNPACK_SKIP_ROWS),pn=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,wt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,wt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Ce),k.pixelStorei(k.UNPACK_SKIP_ROWS,Ve),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Ye);let Ir=R.isDataArrayTexture||R.isData3DTexture,Tt=G.isDataArrayTexture||G.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){let Xn=Pe.get(R),Pr=Pe.get(G),bn=Pe.get(Xn.__renderTarget),wi=Pe.get(Pr.__renderTarget);Ue.bindFramebuffer(k.READ_FRAMEBUFFER,bn.__webglFramebuffer),Ue.bindFramebuffer(k.DRAW_FRAMEBUFFER,wi.__webglFramebuffer);for(let Ti=0;Ti<Re;Ti++)Ir&&k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Pe.get(R).__webglTexture,W,Ye+Ti),R.isDepthTexture?(Tt&&k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Pe.get(G).__webglTexture,W,St+Ti),k.blitFramebuffer(Ce,Ve,de,ye,Ie,ot,de,ye,k.DEPTH_BUFFER_BIT,k.NEAREST)):Tt?k.copyTexSubImage3D(De,W,Ie,ot,St+Ti,Ce,Ve,de,ye):k.copyTexSubImage2D(De,W,Ie,ot,St+Ti,Ce,Ve,de,ye);Ue.bindFramebuffer(k.READ_FRAMEBUFFER,null),Ue.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Tt?R.isDataTexture||R.isData3DTexture?k.texSubImage3D(De,W,Ie,ot,St,de,ye,Re,ln,ft,wt.data):G.isCompressedArrayTexture?k.compressedTexSubImage3D(De,W,Ie,ot,St,de,ye,Re,ln,wt.data):k.texSubImage3D(De,W,Ie,ot,St,de,ye,Re,ln,ft,wt):R.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,W,Ie,ot,de,ye,ln,ft,wt.data):R.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,W,Ie,ot,wt.width,wt.height,ln,wt.data):k.texSubImage2D(k.TEXTURE_2D,W,Ie,ot,de,ye,ln,ft,wt);k.pixelStorei(k.UNPACK_ROW_LENGTH,ri),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,pt),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Pn),k.pixelStorei(k.UNPACK_SKIP_ROWS,ws),k.pixelStorei(k.UNPACK_SKIP_IMAGES,pn),W===0&&G.generateMipmaps&&k.generateMipmap(De),Ue.unbindTexture()},this.copyTextureToTexture3D=function(R,G,K=null,Z=null,W=0){return R.isTexture!==!0&&(Gr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),K=arguments[0]||null,Z=arguments[1]||null,R=arguments[2],G=arguments[3],W=arguments[4]||0),Gr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,G,K,Z,W)},this.initRenderTarget=function(R){Pe.get(R).__webglFramebuffer===void 0&&L.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?L.setTextureCube(R,0):R.isData3DTexture?L.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?L.setTexture2DArray(R,0):L.setTexture2D(R,0),Ue.unbindTexture()},this.resetState=function(){T=0,E=0,I=null,Ue.reset(),Et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=je._getDrawingBufferColorSpace(e),t.unpackColorSpace=je._getUnpackColorSpace()}};var ua=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ve(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},da=class extends Rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $n,this.environmentIntensity=1,this.environmentRotation=new $n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},cr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Sc,this.updateRanges=[],this.version=0,this.uuid=Fn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},en=new N,ms=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyMatrix4(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyNormalMatrix(e),this.setXYZ(t,en.x,en.y,en.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.transformDirection(e),this.setXYZ(t,en.x,en.y,en.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=On(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=yt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=On(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=On(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=On(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=On(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),s=yt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),s=yt(s,this.array),r=yt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Qe(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},eo=class extends un{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new ve(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ks,Or=new N,Hs=new N,Vs=new N,Gs=new be,zr=new be,Pf=new Be,ko=new N,Fr=new N,Ho=new N,zd=new be,Ul=new be,Fd=new be,fa=class extends Rt{constructor(e=new eo){if(super(),this.isSprite=!0,this.type="Sprite",ks===void 0){ks=new lt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new cr(t,5);ks.setIndex([0,1,2,0,2,3]),ks.setAttribute("position",new ms(n,3,0,!1)),ks.setAttribute("uv",new ms(n,2,3,!1))}this.geometry=ks,this.material=e,this.center=new be(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Hs.setFromMatrixScale(this.matrixWorld),Pf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Vs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Hs.multiplyScalar(-Vs.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Vo(ko.set(-.5,-.5,0),Vs,o,Hs,s,r),Vo(Fr.set(.5,-.5,0),Vs,o,Hs,s,r),Vo(Ho.set(.5,.5,0),Vs,o,Hs,s,r),zd.set(0,0),Ul.set(1,0),Fd.set(1,1);let a=e.ray.intersectTriangle(ko,Fr,Ho,!1,Or);if(a===null&&(Vo(Fr.set(-.5,.5,0),Vs,o,Hs,s,r),Ul.set(0,1),a=e.ray.intersectTriangle(ko,Ho,Fr,!1,Or),a===null))return;let l=e.ray.origin.distanceTo(Or);l<e.near||l>e.far||t.push({distance:l,point:Or.clone(),uv:Ni.getInterpolation(Or,ko,Fr,Ho,zd,Ul,Fd,new be),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Vo(i,e,t,n,s,r){Gs.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(zr.x=r*Gs.x-s*Gs.y,zr.y=s*Gs.x+r*Gs.y):zr.copy(Gs),i.copy(e),i.x+=zr.x,i.y+=zr.y,i.applyMatrix4(Pf)}var Bd=new N,kd=new ct,Hd=new ct,Nv=new N,Vd=new Be,Go=new N,Ol=new sn,Gd=new Be,zl=new ps,hr=class extends ue{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Gu,this.bindMatrix=new Be,this.bindMatrixInverse=new Be,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Wt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Go),this.boundingBox.expandByPoint(Go)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new sn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Go),this.boundingSphere.expandByPoint(Go)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ol.copy(this.boundingSphere),Ol.applyMatrix4(s),e.ray.intersectsSphere(Ol)!==!1&&(Gd.copy(s).invert(),zl.copy(e.ray).applyMatrix4(Gd),!(this.boundingBox!==null&&zl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,zl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new ct,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Gu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===c0?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;kd.fromBufferAttribute(s.attributes.skinIndex,e),Hd.fromBufferAttribute(s.attributes.skinWeight,e),Bd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=Hd.getComponent(r);if(o!==0){let a=kd.getComponent(r);Vd.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Nv.copy(Bd).applyMatrix4(Vd),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},gs=class extends Rt{constructor(){super(),this.isBone=!0,this.type="Bone"}},pa=class extends Vt{constructor(e=null,t=1,n=1,s,r,o,a,l,c=Jt,u=Jt,h,f){super(null,o,a,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Wd=new Be,Uv=new Be,ur=class i{constructor(e=[],t=[]){this.uuid=Fn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Be)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Be;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:Uv;Wd.multiplyMatrices(a,t[r]),Wd.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new pa(t,e,e,Sn,zn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new gs),this.bones.push(o),this.boneInverses.push(new Be().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},xs=class extends Qe{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ws=new Be,Xd=new Be,Wo=[],qd=new Wt,Ov=new Be,Br=new ue,kr=new sn,Fi=class extends ue{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new xs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Ov)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Wt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ws),qd.copy(e.boundingBox).applyMatrix4(Ws),this.boundingBox.union(qd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new sn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ws),kr.copy(e.boundingSphere).applyMatrix4(Ws),this.boundingSphere.union(kr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Br.geometry=this.geometry,Br.material=this.material,Br.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),kr.copy(this.boundingSphere),kr.applyMatrix4(n),e.ray.intersectsSphere(kr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ws),Xd.multiplyMatrices(n,Ws),Br.matrixWorld=Xd,Br.raycast(e,Wo);for(let o=0,a=Wo.length;o<a;o++){let l=Wo[o];l.instanceId=r,l.object=this,t.push(l)}Wo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new xs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new pa(new Float32Array(s*this.count),s,this.count,dh,zn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var to=class extends un{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ma=new N,ga=new N,Yd=new Be,Hr=new ps,Xo=new sn,Fl=new N,Kd=new N,dr=class extends Rt{constructor(e=new lt,t=new to){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)ma.fromBufferAttribute(t,s-1),ga.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=ma.distanceTo(ga);e.setAttribute("lineDistance",new tt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xo.copy(n.boundingSphere),Xo.applyMatrix4(s),Xo.radius+=r,e.ray.intersectsSphere(Xo)===!1)return;Yd.copy(s).invert(),Hr.copy(e.ray).applyMatrix4(Yd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){let p=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let x=p,g=m-1;x<g;x+=c){let d=u.getX(x),b=u.getX(x+1),y=qo(this,e,Hr,l,d,b);y&&t.push(y)}if(this.isLineLoop){let x=u.getX(m-1),g=u.getX(p),d=qo(this,e,Hr,l,x,g);d&&t.push(d)}}else{let p=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let x=p,g=m-1;x<g;x+=c){let d=qo(this,e,Hr,l,x,x+1);d&&t.push(d)}if(this.isLineLoop){let x=qo(this,e,Hr,l,m-1,p);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function qo(i,e,t,n,s,r){let o=i.geometry.attributes.position;if(ma.fromBufferAttribute(o,s),ga.fromBufferAttribute(o,r),t.distanceSqToSegment(ma,ga,Fl,Kd)>n)return;Fl.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Fl);if(!(l<e.near||l>e.far))return{distance:l,point:Kd.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var Zd=new N,$d=new N,xa=class extends dr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Zd.fromBufferAttribute(t,s),$d.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Zd.distanceTo($d);e.setAttribute("lineDistance",new tt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},_a=class extends dr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Bi=class extends un{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Jd=new Be,Hc=new ps,Yo=new sn,Ko=new N,_i=class extends Rt{constructor(e=new lt,t=new Bi){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Yo.copy(n.boundingSphere),Yo.applyMatrix4(s),Yo.radius+=r,e.ray.intersectsSphere(Yo)===!1)return;Jd.copy(s).invert(),Hc.copy(e.ray).applyMatrix4(Jd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let m=f,x=p;m<x;m++){let g=c.getX(m);Ko.fromBufferAttribute(h,g),jd(Ko,g,l,s,e,t,this)}}else{let f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let m=f,x=p;m<x;m++)Ko.fromBufferAttribute(h,m),jd(Ko,m,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function jd(i,e,t,n,s,r,o){let a=Hc.distanceSqToPoint(i);if(a<t){let l=new N;Hc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Tn=class extends Vt{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ya=class i extends lt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new N,u=new be;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){let p=n+h/t*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/e+1)/2,u.y=(o[f+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new tt(o,3)),this.setAttribute("normal",new tt(a,3)),this.setAttribute("uv",new tt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},vt=class i extends lt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],f=[],p=[],m=0,x=[],g=n/2,d=0;b(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new tt(h,3)),this.setAttribute("normal",new tt(f,3)),this.setAttribute("uv",new tt(p,2));function b(){let M=new N,C=new N,T=0,E=(t-e)/n;for(let I=0;I<=r;I++){let _=[],v=I/r,w=v*(t-e)+e;for(let U=0;U<=s;U++){let S=U/s,D=S*l+a,z=Math.sin(D),P=Math.cos(D);C.x=w*z,C.y=-v*n+g,C.z=w*P,h.push(C.x,C.y,C.z),M.set(z,E,P).normalize(),f.push(M.x,M.y,M.z),p.push(S,1-v),_.push(m++)}x.push(_)}for(let I=0;I<s;I++)for(let _=0;_<r;_++){let v=x[_][I],w=x[_+1][I],U=x[_+1][I+1],S=x[_][I+1];(e>0||_!==0)&&(u.push(v,w,S),T+=3),(t>0||_!==r-1)&&(u.push(w,U,S),T+=3)}c.addGroup(d,T,0),d+=T}function y(M){let C=m,T=new be,E=new N,I=0,_=M===!0?e:t,v=M===!0?1:-1;for(let U=1;U<=s;U++)h.push(0,g*v,0),f.push(0,v,0),p.push(.5,.5),m++;let w=m;for(let U=0;U<=s;U++){let D=U/s*l+a,z=Math.cos(D),P=Math.sin(D);E.x=_*P,E.y=g*v,E.z=_*z,h.push(E.x,E.y,E.z),f.push(0,v,0),T.x=z*.5+.5,T.y=P*.5*v+.5,p.push(T.x,T.y),m++}for(let U=0;U<s;U++){let S=C+U,D=w+U;M===!0?u.push(D,D+1,S):u.push(D+1,D,S),I+=3}c.addGroup(d,I,M===!0?1:2),d+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var va=class i extends lt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),c(n),u(),this.setAttribute("position",new tt(r,3)),this.setAttribute("normal",new tt(r.slice(),3)),this.setAttribute("uv",new tt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(b){let y=new N,M=new N,C=new N;for(let T=0;T<t.length;T+=3)p(t[T+0],y),p(t[T+1],M),p(t[T+2],C),l(y,M,C,b)}function l(b,y,M,C){let T=C+1,E=[];for(let I=0;I<=T;I++){E[I]=[];let _=b.clone().lerp(M,I/T),v=y.clone().lerp(M,I/T),w=T-I;for(let U=0;U<=w;U++)U===0&&I===T?E[I][U]=_:E[I][U]=_.clone().lerp(v,U/w)}for(let I=0;I<T;I++)for(let _=0;_<2*(T-I)-1;_++){let v=Math.floor(_/2);_%2===0?(f(E[I][v+1]),f(E[I+1][v]),f(E[I][v])):(f(E[I][v+1]),f(E[I+1][v+1]),f(E[I+1][v]))}}function c(b){let y=new N;for(let M=0;M<r.length;M+=3)y.x=r[M+0],y.y=r[M+1],y.z=r[M+2],y.normalize().multiplyScalar(b),r[M+0]=y.x,r[M+1]=y.y,r[M+2]=y.z}function u(){let b=new N;for(let y=0;y<r.length;y+=3){b.x=r[y+0],b.y=r[y+1],b.z=r[y+2];let M=g(b)/2/Math.PI+.5,C=d(b)/Math.PI+.5;o.push(M,1-C)}m(),h()}function h(){for(let b=0;b<o.length;b+=6){let y=o[b+0],M=o[b+2],C=o[b+4],T=Math.max(y,M,C),E=Math.min(y,M,C);T>.9&&E<.1&&(y<.2&&(o[b+0]+=1),M<.2&&(o[b+2]+=1),C<.2&&(o[b+4]+=1))}}function f(b){r.push(b.x,b.y,b.z)}function p(b,y){let M=b*3;y.x=e[M+0],y.y=e[M+1],y.z=e[M+2]}function m(){let b=new N,y=new N,M=new N,C=new N,T=new be,E=new be,I=new be;for(let _=0,v=0;_<r.length;_+=9,v+=6){b.set(r[_+0],r[_+1],r[_+2]),y.set(r[_+3],r[_+4],r[_+5]),M.set(r[_+6],r[_+7],r[_+8]),T.set(o[v+0],o[v+1]),E.set(o[v+2],o[v+3]),I.set(o[v+4],o[v+5]),C.copy(b).add(y).add(M).divideScalar(3);let w=g(C);x(T,v+0,b,w),x(E,v+2,y,w),x(I,v+4,M,w)}}function x(b,y,M,C){C<0&&b.x===1&&(o[y]=b.x-1),M.x===0&&M.z===0&&(o[y]=C/2/Math.PI+.5)}function g(b){return Math.atan2(b.z,-b.x)}function d(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var Ma=class i extends va{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},fr=class i extends va{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},rn=class i extends lt{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],u=[],h=e,f=(t-e)/s,p=new N,m=new be;for(let x=0;x<=s;x++){for(let g=0;g<=n;g++){let d=r+g/n*o;p.x=h*Math.cos(d),p.y=h*Math.sin(d),l.push(p.x,p.y,p.z),c.push(0,0,1),m.x=(p.x/t+1)/2,m.y=(p.y/t+1)/2,u.push(m.x,m.y)}h+=f}for(let x=0;x<s;x++){let g=x*(n+1);for(let d=0;d<n;d++){let b=d+g,y=b,M=b+n+1,C=b+n+2,T=b+1;a.push(y,M,T),a.push(M,C,T)}}this.setIndex(a),this.setAttribute("position",new tt(l,3)),this.setAttribute("normal",new tt(c,3)),this.setAttribute("uv",new tt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var jt=class i extends lt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new N,f=new N,p=[],m=[],x=[],g=[];for(let d=0;d<=n;d++){let b=[],y=d/n,M=0;d===0&&o===0?M=.5/t:d===n&&l===Math.PI&&(M=-.5/t);for(let C=0;C<=t;C++){let T=C/t;h.x=-e*Math.cos(s+T*r)*Math.sin(o+y*a),h.y=e*Math.cos(o+y*a),h.z=e*Math.sin(s+T*r)*Math.sin(o+y*a),m.push(h.x,h.y,h.z),f.copy(h).normalize(),x.push(f.x,f.y,f.z),g.push(T+M,1-y),b.push(c++)}u.push(b)}for(let d=0;d<n;d++)for(let b=0;b<t;b++){let y=u[d][b+1],M=u[d][b],C=u[d+1][b],T=u[d+1][b+1];(d!==0||o>0)&&p.push(y,M,T),(d!==n-1||l<Math.PI)&&p.push(M,C,T)}this.setIndex(p),this.setAttribute("position",new tt(m,3)),this.setAttribute("normal",new tt(x,3)),this.setAttribute("uv",new tt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Jn=class i extends lt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],u=new N,h=new N,f=new N;for(let p=0;p<=n;p++)for(let m=0;m<=s;m++){let x=m/s*r,g=p/n*Math.PI*2;h.x=(e+t*Math.cos(g))*Math.cos(x),h.y=(e+t*Math.cos(g))*Math.sin(x),h.z=t*Math.sin(g),a.push(h.x,h.y,h.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),f.subVectors(h,u).normalize(),l.push(f.x,f.y,f.z),c.push(m/s),c.push(p/n)}for(let p=1;p<=n;p++)for(let m=1;m<=s;m++){let x=(s+1)*p+m-1,g=(s+1)*(p-1)+m-1,d=(s+1)*(p-1)+m,b=(s+1)*p+m;o.push(x,g,b),o.push(g,d,b)}this.setIndex(o),this.setAttribute("position",new tt(a,3)),this.setAttribute("normal",new tt(l,3)),this.setAttribute("uv",new tt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var ba=class extends It{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}},We=class extends un{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vf,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},xn=class extends We{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new be(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Zt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ve(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ve(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ve(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function Zo(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function zv(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Fv(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Qd(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s}function Lf(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}var ki=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break t}o=t.length;break n}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Vc=class extends ki{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:qs,endingEnd:qs}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ys:r=e,a=2*t-n;break;case ta:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ys:o=e,l=2*n-t;break;case ta:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,p=this._weightNext,m=(n-t)/(s-t),x=m*m,g=x*m,d=-f*g+2*f*x-f*m,b=(1+f)*g+(-1.5-2*f)*x+(-.5+f)*m+1,y=(-1-p)*g+(1.5+p)*x+.5*m,M=p*g-p*x;for(let C=0;C!==a;++C)r[C]=d*o[u+C]+b*o[c+C]+y*o[l+C]+M*o[h+C];return r}},Ea=class extends ki{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(s-t),h=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*u;return r}},Gc=class extends ki{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},An=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Zo(t,this.TimeBufferType),this.values=Zo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Zo(e.times,Array),values:Zo(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Gc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ea(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Vc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case sr:t=this.InterpolantFactoryMethodDiscrete;break;case rr:t=this.InterpolantFactoryMethodLinear;break;case ll:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return sr;case this.InterpolantFactoryMethodLinear:return rr;case this.InterpolantFactoryMethodSmooth:return ll}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&zv(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ll,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{let h=a*n,f=h-n,p=h+n;for(let m=0;m!==n;++m){let x=t[h+m];if(x!==t[f+m]||x!==t[p+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*n,f=o*n;for(let p=0;p!==n;++p)t[f+p]=t[h+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};An.prototype.TimeBufferType=Float32Array;An.prototype.ValueBufferType=Float32Array;An.prototype.DefaultInterpolation=rr;var Hi=class extends An{constructor(e,t,n){super(e,t,n)}};Hi.prototype.ValueTypeName="bool";Hi.prototype.ValueBufferType=Array;Hi.prototype.DefaultInterpolation=sr;Hi.prototype.InterpolantFactoryMethodLinear=void 0;Hi.prototype.InterpolantFactoryMethodSmooth=void 0;var Sa=class extends An{};Sa.prototype.ValueTypeName="color";var yi=class extends An{};yi.prototype.ValueTypeName="number";var Wc=class extends ki{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let u=c+a;c!==u;c+=4)At.slerpFlat(r,0,o,c-a,o,c,l);return r}},vi=class extends An{InterpolantFactoryMethodLinear(e){return new Wc(this.times,this.values,this.getValueSize(),e)}};vi.prototype.ValueTypeName="quaternion";vi.prototype.InterpolantFactoryMethodSmooth=void 0;var Vi=class extends An{constructor(e,t,n){super(e,t,n)}};Vi.prototype.ValueTypeName="string";Vi.prototype.ValueBufferType=Array;Vi.prototype.DefaultInterpolation=sr;Vi.prototype.InterpolantFactoryMethodLinear=void 0;Vi.prototype.InterpolantFactoryMethodSmooth=void 0;var Mi=class extends An{};Mi.prototype.ValueTypeName="vector";var Gi=class{constructor(e="",t=-1,n=[],s=_h){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Fn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(kv(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(An.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let u=Fv(l);l=Qd(l,1,u),c=Qd(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new yi(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],u=c.name.match(r);if(u&&u.length>1){let h=u[1],f=s[h];f||(s[h]=f=[]),f.push(c)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(h,f,p,m,x){if(p.length!==0){let g=[],d=[];Lf(p,g,d,m),g.length!==0&&x.push(new h(f,g,d))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let h=0;h<c.length;h++){let f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let p={},m;for(m=0;m<f.length;m++)if(f[m].morphTargets)for(let x=0;x<f[m].morphTargets.length;x++)p[f[m].morphTargets[x]]=-1;for(let x in p){let g=[],d=[];for(let b=0;b!==f[m].morphTargets.length;++b){let y=f[m];g.push(y.time),d.push(y.morphTarget===x?1:0)}s.push(new yi(".morphTargetInfluence["+x+"]",g,d))}l=p.length*o}else{let p=".bones["+t[h].name+"]";n(Mi,p+".position",f,"pos",s),n(vi,p+".quaternion",f,"rot",s),n(Mi,p+".scale",f,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function Bv(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return yi;case"vector":case"vector2":case"vector3":case"vector4":return Mi;case"color":return Sa;case"quaternion":return vi;case"bool":case"boolean":return Hi;case"string":return Vi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function kv(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Bv(i.type);if(i.times===void 0){let t=[],n=[];Lf(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var Ui={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Xc=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){let p=c[h],m=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return m}return null}}},Hv=new Xc,bi=class{constructor(e){this.manager=e!==void 0?e:Hv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};bi.DEFAULT_MATERIAL_NAME="__DEFAULT";var ui={},qc=class extends Error{constructor(e,t){super(e),this.response=t}},no=class extends bi{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Ui.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ui[e]!==void 0){ui[e].push({onLoad:t,onProgress:n,onError:s});return}ui[e]=[],ui[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=ui[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=f?parseInt(f):0,m=p!==0,x=0,g=new ReadableStream({start(d){b();function b(){h.read().then(({done:y,value:M})=>{if(y)d.close();else{x+=M.byteLength;let C=new ProgressEvent("progress",{lengthComputable:m,loaded:x,total:p});for(let T=0,E=u.length;T<E;T++){let I=u[T];I.onProgress&&I.onProgress(C)}d.enqueue(M),b()}},y=>{d.error(y)})}}});return new Response(g)}else throw new qc(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(m=>p.decode(m))}}}).then(c=>{Ui.add(e,c);let u=ui[e];delete ui[e];for(let h=0,f=u.length;h<f;h++){let p=u[h];p.onLoad&&p.onLoad(c)}}).catch(c=>{let u=ui[e];if(u===void 0)throw this.manager.itemError(e),c;delete ui[e];for(let h=0,f=u.length;h<f;h++){let p=u[h];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Yc=class extends bi{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Ui.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=Jr("img");function l(){u(),Ui.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var pr=class extends bi{constructor(e){super(e)}load(e,t,n,s){let r=new Vt,o=new Yc(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},mr=class extends Rt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ve(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},wa=class extends mr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ve(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Bl=new Be,ef=new N,tf=new N,io=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new be(512,512),this.map=null,this.mapPass=null,this.matrix=new Be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qr,this._frameExtents=new be(1,1),this._viewportCount=1,this._viewports=[new ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;ef.setFromMatrixPosition(e.matrixWorld),t.position.copy(ef),tf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(tf),t.updateMatrixWorld(),Bl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Bl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Kc=class extends io{constructor(){super(new zt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=or*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Ta=class extends mr{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Kc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},nf=new Be,Vr=new N,kl=new N,Zc=class extends io{constructor(){super(new zt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new be(4,2),this._viewportCount=6,this._viewports=[new ct(2,1,1,1),new ct(0,1,1,1),new ct(3,1,1,1),new ct(1,1,1,1),new ct(3,0,1,1),new ct(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Vr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Vr),kl.copy(n.position),kl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(kl),n.updateMatrixWorld(),s.makeTranslation(-Vr.x,-Vr.y,-Vr.z),nf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nf)}},jn=class extends mr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Zc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},$c=class extends io{constructor(){super(new zi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},gr=class extends mr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.shadow=new $c}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Wi=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Aa=class extends bi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Ui.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Ui.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Ui.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Ui.add(e,l),r.manager.itemStart(e)}};var Ra=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=sf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=sf();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function sf(){return performance.now()}var Jc=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let s,r,o;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,s=this.valueSize,r=e*s+s,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==s;++a)n[r+a]=n[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(n,r,0,a,s)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,s=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let l=t*this._origIndex;this._mixBufferRegion(n,s,l,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,s);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,s=n*this._origIndex;e.getValue(t,s);for(let r=n,o=s;r!==o;++r)t[r]=t[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,s,r){if(s>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,s){At.slerpFlat(e,t,e,t,e,n,s)}_slerpAdditive(e,t,n,s,r){let o=this._workIndex*r;At.multiplyQuaternionsFlat(e,o,e,t,e,n),At.slerpFlat(e,t,e,t,e,o,s)}_lerp(e,t,n,s,r){let o=1-s;for(let a=0;a!==r;++a){let l=t+a;e[l]=e[l]*o+e[n+a]*s}}_lerpAdditive(e,t,n,s,r){for(let o=0;o!==r;++o){let a=t+o;e[a]=e[a]+e[n+o]*s}}},Mh="\\[\\]\\.:\\/",Vv=new RegExp("["+Mh+"]","g"),bh="[^"+Mh+"]",Gv="[^"+Mh.replace("\\.","")+"]",Wv=/((?:WC+[\/:])*)/.source.replace("WC",bh),Xv=/(WCOD+)?/.source.replace("WCOD",Gv),qv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",bh),Yv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",bh),Kv=new RegExp("^"+Wv+Xv+qv+Yv+"$"),Zv=["material","materials","bones","map"],jc=class{constructor(e,t,n){let s=n||at.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},at=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Vv,"")}static parseTrackName(e){let t=Kv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Zv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};at.Composite=jc;at.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};at.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};at.prototype.GetterByBindingType=[at.prototype._getValue_direct,at.prototype._getValue_array,at.prototype._getValue_arrayElement,at.prototype._getValue_toArray];at.prototype.SetterByBindingTypeAndVersioning=[[at.prototype._setValue_direct,at.prototype._setValue_direct_setNeedsUpdate,at.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[at.prototype._setValue_array,at.prototype._setValue_array_setNeedsUpdate,at.prototype._setValue_array_setMatrixWorldNeedsUpdate],[at.prototype._setValue_arrayElement,at.prototype._setValue_arrayElement_setNeedsUpdate,at.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[at.prototype._setValue_fromArray,at.prototype._setValue_fromArray_setNeedsUpdate,at.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Qc=class{constructor(e,t,n=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=s;let r=t.tracks,o=r.length,a=new Array(o),l={endingStart:qs,endingEnd:qs};for(let c=0;c!==o;++c){let u=r[c].createInterpolant(null);a[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=xh,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){let s=this._clip.duration,r=e._clip.duration,o=r/s,a=s/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let s=this._mixer,r=s.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=s._lendControlInterpolant(),this._timeScaleInterpolant=a);let l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,s){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case u0:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulateAdditive(a);break;case _h:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulate(s,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,s=this.time+e,r=this._loopCount,o=n===h0;if(e===0)return r===-1?s:o&&(r&1)===1?t-s:s;if(n===gh){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),s>=t||s<0){let a=Math.floor(s/t);s-=t*a,r+=Math.abs(a);let l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=s;if(o&&(r&1)===1)return t-s}return s}_setEndings(e,t,n){let s=this._interpolantSettings;n?(s.endingStart=Ys,s.endingEnd=Ys):(e?s.endingStart=this.zeroSlopeAtStart?Ys:qs:s.endingStart=ta,t?s.endingEnd=this.zeroSlopeAtEnd?Ys:qs:s.endingEnd=ta)}_scheduleFading(e,t,n){let s=this._mixer,r=s.time,o=this._weightInterpolant;o===null&&(o=s._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=t,a[1]=r+e,l[1]=n,this}},$v=new Float32Array(1),_s=class extends xi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let n=e._localRoot||this._root,s=e._clip.tracks,r=s.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName,u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==r;++h){let f=s[h],p=f.name,m=u[p];if(m!==void 0)++m.referenceCount,o[h]=m;else{if(m=o[h],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,l,p));continue}let x=t&&t._propertyBindings[h].binding.parsedPath;m=new Jc(at.create(n,p,x),f.ValueTypeName,f.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,l,p),o[h]=m}a[h].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,n)}let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let s=this._actions,r=this._actionsByClip,o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=s.length,s.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],s=e._cacheIndex;n._cacheIndex=s,t[s]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;let h=a.actionByRoot,f=(e._localRoot||this._root).uuid;delete h[f],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let s=this._bindingsByRootAndName,r=this._bindings,o=s[t];o===void 0&&(o={},s[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,s=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[s],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[s]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new Ea(new Float32Array(2),new Float32Array(2),1,$v),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let s=t||this._root,r=s.uuid,o=typeof e=="string"?Gi.findByName(s,e):e,a=o!==null?o.uuid:e,l=this._actionsByClip[a],c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=_h),l!==void 0){let h=l.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;let u=new Qc(this,o,t,n);return this._bindAction(u,c),this._addInactiveAction(u,a,r),u}existingAction(e,t){let n=t||this._root,s=n.uuid,r=typeof e=="string"?Gi.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[s]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,s=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(s,e,r,o);let a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){let o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){let c=o[a];this._deactivateAction(c);let u=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete s[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(let o in r){let a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var rf=new Be,Ca=class{constructor(e,t,n=0,s=1/0){this.ray=new ps(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new jr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return rf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(rf),this}intersectObject(e,t=!0,n=[]){return eh(e,this,n,t),n.sort(of),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)eh(e[s],this,n,t);return n.sort(of),n}};function of(i,e){return i.distance-e.distance}function eh(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)eh(r[o],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:th}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=th);var Na={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var _n=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Jv=new zi(-1,1,1,-1,0,1),Eh=class extends lt{constructor(){super(),this.setAttribute("position",new tt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new tt([0,2,0,0,2,0],2))}},jv=new Eh,qi=class{constructor(e){this._mesh=new ue(jv,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Jv)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Ua=class extends _n{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof It?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Xi.clone(e.uniforms),this.material=new It({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new qi(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var oo=class extends _n{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Oa=class extends _n{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var za=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new be);this._width=n.width,this._height=n.height,t=new nn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Bn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ua(Na),this.copyPass.material.blending=Kn,this.clock=new Ra}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}oo!==void 0&&(o instanceof oo?n=!0:o instanceof Oa&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new be);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Fa=class extends _n{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ve}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var Df={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ve(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var _r=class i extends _n{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new be(e.x,e.y):new be(256,256),this.clearColor=new ve(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new nn(r,o,{type:Bn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let f=new nn(r,o,{type:Bn});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let p=new nn(r,o,{type:Bn});p.texture.name="UnrealBloomPass.v"+h,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),o=Math.round(o/2)}let a=Df;this.highPassUniforms=Xi.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new It({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new be(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let u=Na;this.copyUniforms=Xi.clone(u.uniforms),this.blendMaterial=new It({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:ht,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ve,this.oldClearAlpha=1,this.basic=new ke,this.fsQuad=new qi(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new be(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new It({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new be(.5,.5)},direction:{value:new be(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new It({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};_r.BlurDirectionX=new be(1,0);_r.BlurDirectionY=new be(0,1);var Nf={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Ba=class extends _n{constructor(){super();let e=Nf;this.uniforms=Xi.clone(e.uniforms),this.material=new ba({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new qi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},je.getTransfer(this._outputColorSpace)===mt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ih?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===sh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===rh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===so?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===oh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ah&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Sh=[{id:"icb01",title:"I CALL BULLSHIT \xB7 VOL 1",world:"ramparts"},{id:"icb04",title:"THE PERSIAN THREAD \xB7 VOL 4",world:"ramparts"},{id:"icb05",title:"BEFORE THE PLAYBOOK \xB7 VOL 5",world:"ramparts"},{id:"shogun",title:"THE BLACK SHOGUN ANCESTORS",world:"ramparts"},{id:"mansas",title:"NO BS NO CAP \xB7 THE MANSAS",world:"ramparts"},{id:"icb06",title:"THE FIRST THOUGHT \xB7 VOL 6",world:"venus"},{id:"icb08",title:"BEFORE THE BEGINNING \xB7 VOL 8",world:"venus"},{id:"nabta",title:"NO BS NO CAP \xB7 NABTA PLAYA",world:"venus"},{id:"cs1",title:"COSMIC SHIFTS \xB7 VOL 1",world:"venus"},{id:"cs2",title:"COSMIC SHIFTS \xB7 VOL 2",world:"venus"},{id:"icb02",title:"THE FIRST ERASURE \xB7 VOL 2",world:"archive"},{id:"icb03",title:"THE WEB OF AMNESIA \xB7 VOL 3",world:"archive"},{id:"icb07",title:"THE PLAGUE INHERITANCE \xB7 VOL 7",world:"archive"},{id:"icb10",title:"B.S. BODY SNATCHERS \xB7 VOL 10",world:"archive"},{id:"jinn",title:"POLY JINN-ISIS",world:"archive"},{id:"oms",title:"THE OCCULT MEDIA SPELL",world:"archive"},{id:"legacy",title:"THE LEGACY DOCUMENT",world:"archive"}],Uf={ramparts:[{id:"r01",v:"icb01",t:"KHEM BECAME CHEMISTRY",l:"The word chemistry derives from Khem, the ancient Egyptian name for Egypt: the Black Land. Ka became the bioelectromagnetic field, Ma'at became natural law, Nun became the quantum vacuum. The science was renamed and re-presented without its authors' names attached. This is not interpretation. This is etymology.",s:"I Call Bullshit \xB7 Ch. 2, The Etymology Is the Evidence"},{id:"r02",v:"icb01",t:"VRIL. ORGONE. SCALAR. SAME THEFT.",l:"In 1938 Himmler's SS Ahnenerbe sent an expedition to Tibet to claim its spiritual science as Aryan property. The hidden force they called vril was rebranded as orgone, then scalar energy, then torsion fields. Each rebrand erased the African and Asian origins further. Different names. Same theft.",s:"I Call Bullshit \xB7 Ch. 3, The Nazi-Tibet Operation"},{id:"r03",v:"icb01",t:"THE FOUR MOVES",l:"The suppression has always had four moves: Physical Destruction, Institutional Exclusion, Terminological Appropriation, and Economic Suppression and Microdosing. They burned the libraries. They renamed the science. They excluded the scientists. Now they sell you the microdose and call it enlightenment.",s:"I Call Bullshit \xB7 Ch. 5, The Suppression Has Always Had Four Moves"},{id:"r04",v:"icb04",t:"ELAM BUILT BEFORE PERSIA",l:"The Elamites raised Chogha Zanbil, a five-tiered ziggurat 60 meters high, around 1250 BCE, and ruled from Susa, inhabited since 4395 BCE. Herodotus listed Aithiopes, burnt-faced people, among the Persian Empire's subjects. The Iranian national narrative pretends they never existed. This is not a knowledge gap. It is a policy.",s:"The Persian Thread \xB7 Part II, The Elamites"},{id:"r05",v:"icb04",t:"THE DOUBLE DELETION",l:"One sentence erases two truths: they are dark because it is very, very hot in the southern part of Iran. Blaming the climate erases the ancient Elamite presence and the Indian Ocean slave trade at once, leaving 1 to 2 million Afro-Iranians in a historical vacuum. Sun doesn't cause ancestry.",s:"The Persian Thread \xB7 Part IV, The Double Deletion"},{id:"r06",v:"icb04",t:"THEY COULDN'T ERASE THE DRUMS",l:"Bandari music of southern Iran is East African memory passed body to body. Its Zar rituals still name spirits Pepe and Mature, from the Swahili, and Cinyase, from the Nyasa language of Malawi. Slavery in Iran was abolished only in 1929. The archive survives in the body when it cannot survive in the books.",s:"The Persian Thread \xB7 Part V, The Living Archive"},{id:"r07",v:"icb05",t:"WHITE SKIN IS YOUNGER THAN KEMET",l:"Ancient DNA shows European hunter-gatherers in Spain, Luxembourg and Hungary still lacked the light-skin variants SLC24A5 and SLC45A2. For 30,000 years the people of Europe were dark-skinned. White skin is younger than agriculture, younger than Elam, younger than Kemet. It is not the origin of anything. It is a result.",s:"Before the Playbook \xB7 Part I, White Skin Is Not Ancient"},{id:"r08",v:"icb05",t:"SKY FATHER OVER EARTH MOTHER",l:"Around 3300 BCE the Yamnaya came off the Pontic-Caspian steppe with the horse, the wheel, bronze weapons and a Sky Father god. In about 500 years they accounted for up to 75% of central Europe's DNA, replacing goddess-centered Old Europe, whose cities were larger than the earliest cities of Mesopotamia.",s:"Before the Playbook \xB7 Parts II-IV, Old Europe and the Yamnaya"},{id:"r09",v:"icb05",t:"NOT CORRUPTED. SURROUNDED.",l:"The Hyksos were not spiritually corrupted from within. By the time they were expelled in 1550 BCE, the world around them had been running the Yamnaya conquest operating system for 1,500 years. The playbook started when someone decided the Father in the Sky was more important than the Mother in the Earth.",s:"Before the Playbook \xB7 Preface and Part V"},{id:"r10",v:"shogun",t:"YASUKE WAS NOT A MYTH",l:"The Shinchoko-ki, a Japanese eyewitness chronicle, records an African man reaching Kyoto in 1581. Oda Nobunaga took him into personal service with a house, a stipend, a sword and the name Yasuke. He fought at Honno-ji in 1582. His strength surpassed that of 10 men. The African samurai is a documented fact.",s:"The Black Shogun Ancestors \xB7 Ch. I, Yasuke"},{id:"r11",v:"shogun",t:"THE GREAT GENERAL OF 797",l:"Sakanoue no Tamuramaro was named Sei-i Taishogun in 797, only the second man to hold the title, and his weapons were buried with him by imperial decree. Chamberlain in 1911, DuBois in 1915 and Woodson in 1922 named him Black. That scholarship was met not with refutation but with omission.",s:"The Black Shogun Ancestors \xB7 Ch. II, The Black Shogun"},{id:"r12",v:"shogun",t:"THE ASYMMETRIC STANDARD",l:"Scandinavian sagas were treated as serious evidence of Viking voyages to North America. Septimius Severus's Libyan origin is celebrated. Tamuramaro's potential African origin is treated as a curiosity. The standard applied to Black historical claims is demonstrably higher. I Call Bullshit on that asymmetry, on the record.",s:"The Black Shogun Ancestors \xB7 Ch. V, The Scholarly Battlefield"},{id:"r13",v:"mansas",t:"THE CHARTER OF KURUKAN FUGA",l:"Proclaimed after the victory at Kirina and held in the bodies of griots for nearly 800 years, the Manden Charter protected the right to life, made every child's education the duty of the entire society, and said women should be associated with all governance. Thirteenth century. UNESCO inscribed it in 2009.",s:"The Mansas \xB7 Part IV, The Kurukan Fuga"},{id:"r14",v:"mansas",t:"2,000 SHIPS WEST",l:"In Cairo in 1324 Mansa Musa told how the king before him sent 400 ships to find the furthest limit of the Atlantic, then sailed himself with 2,000 and never came back. Recorded by al-Umari, it proves an empire attempted the crossing more than 180 years before Columbus. The most aggressively suppressed part of the record.",s:"The Mansas \xB7 Part VI, The Atlantic Voyage of Mansa Muhammad ibn Qu"},{id:"r15",v:"mansas",t:"THE SISTER WHO WON KIRINA",l:"Nana Triban, sold into marriage with the sorcerer-king Sumanguru, played along until he bragged his secret: the spur of a white rooster could kill him. She fled to Sundiata's camp with it, and he tipped his arrow with it. The decisive weapon at Kirina was not his cavalry. It was his sister's mind.",s:"The Mansas \xB7 Part III, Nana Triban"},{id:"r16",v:"mansas",t:"QUEEN KASSI, CO-EQUAL RULER",l:"Mali reserved a throne-level role for a co-equal queen. When Mansa Suleyman tried to demote Kassi for a commoner, the noble women of court rebelled, and from sanctuary in the mosque she sent secret messages that sparked civil war. Ibn Battuta saw her receive gifts in her own right in 1352.",s:"The Mansas \xB7 Part V, Queen Kassi"}],venus:[{id:"v01",v:"icb06",t:"THE THREE THOUGHTS OF WAR",l:"If all is thought, war began as a thought. Three of them: I am separate from the Earth. There is not enough. The Other is my enemy. Believed deeply enough, long enough, and passed down through enough generations of children raised in fear, they became the entire edifice of 5,000 years of war.",s:"The First Thought \xB7 Part II, The Three Candidate First Thoughts"},{id:"v02",v:"icb06",t:"HOW A THOUGHT BECOMES AN EMPIRE",l:"Thought becomes story. Story becomes memory, then emotion, then instinct, then culture. Priesthood codifies culture into theology, theology into law, and law enforced by military power becomes civilization. Once it is law, nobody has to believe the thought consciously anymore. The law enforces it.",s:"The First Thought \xB7 Part III, The Transmission Mechanism"},{id:"v03",v:"icb06",t:"MY TRUTH IS THE FINAL MOVE",l:"After 5,000 years of suppressing access to cosmic truth through violence and erasure, the most elegant move needs no army: get people to abandon the concept of a truth accessible to all and replace it with 'my truth.' Kemet's answer was Maat, a cosmic order that existed before the human observer.",s:"The First Thought \xB7 Part V, My Truth vs. THE Truth"},{id:"v04",v:"icb08",t:"ONE MAN FOR EVERY 17 WOMEN",l:"Around 5,000 BCE the diversity of the male Y-chromosome collapsed across Africa, Europe and Asia to a level equal to one man reproducing for every 17 women. The official mask says warfare. Pull it off and the question remains: what was coordinated enough to do this on a planetary scale?",s:"Before the Beginning \xB7 Mask #1, The Genetic Bottleneck"},{id:"v05",v:"icb08",t:"ENKI VERSUS ENLIL",l:"The oldest written records on Earth describe a split: Enki, of wisdom and water, who warns Ziusudra of the flood and consistently favors humanity, and Enlil, of authority and control, who seeks to limit and destroy it. The same battle as Maat and Isfet, Earth Mother and Sky Father, in different centuries.",s:"Before the Beginning \xB7 Mask #4, The Sumerian Tablets"},{id:"v06",v:"icb08",t:"THE FLOOD CAME BEFORE GENESIS",l:"The Sumerian flood story, Epic of Gilgamesh tablet XI, predates the Genesis flood by at least 1,000 years: a divine warning, a man told to build a boat, animals taken aboard, a landing on a mountain, birds sent out to find land. The Genesis story is documented to come after.",s:"Before the Beginning \xB7 Mask #4, The Sumerian Tablets"},{id:"v07",v:"nabta",t:"OLDER THAN STONEHENGE",l:"By 4800 BCE the builders of Nabta Playa had raised the world's oldest known astronomical calendar circle, its stone gates aligned to the summer solstice sunrise, 2,000 years before Stonehenge. Its alignments may also track Sirius and Orion's Belt. Most Egyptologists Wendorf spoke to had never heard of it.",s:"No BS No Cap \xB7 Nabta Playa, Ch. 3 and 4"},{id:"v08",v:"nabta",t:"HATHOR WAS BORN IN THE SAHARA",l:"Around 5,500 BCE Nabta Playa's pastoralists buried sacrificial cattle in clay-lined chambers and left a cow-shaped stone, perhaps the oldest known sculpture in Egypt. Britannica says Hathor's worship began in dynastic times. Wrong. It began at Nabta Playa, 2,000 years before any dynastic Egyptian was born.",s:"No BS No Cap \xB7 Nabta Playa, Ch. 3, What They Actually Did"},{id:"v09",v:"nabta",t:"BLACK GENESIS",l:"History forgot Nabta Playa because 20th-century archaeology was looking toward the Fertile Crescent. Dental and skeletal analysis points to a sub-Saharan African people who, as the Sahara dried, moved east to the Nile. The lead excavators themselves called it a black genesis for Egyptian civilization.",s:"No BS No Cap \xB7 Nabta Playa, Ch. 1, 2 and 5"},{id:"v10",v:"cs1",t:"THE VENUS TABLE",l:"Dresden Codex: sixty-five Venus cycles of 584 days, corrected by subtracting 4 or 8 days. No fractions, no decimals, no algebra. Alternated nine to two, the corrections hold the table within one day of the real Venus for roughly 8,049 years. Somebody counted, and they were not guessing.",s:"Cosmic Shifts Vol. I \xB7 Ch. 1, Mesoamerica"},{id:"v11",v:"cs1",t:"WHERE YOUR 24 HOURS CAME FROM",l:"Kemet ran thirty-six decan stars, one per ten-day decade. About 18 rose on a night, about 7 were lost to twilight, and the 11 risings left marked 12 intervals. Mirror that onto daylight and you have the 24-hour day. It is not a Babylonian import. Every clock on Earth still runs on this arithmetic.",s:"Cosmic Shifts Vol. I \xB7 Ch. 2, Kemet"},{id:"v12",v:"cs1",t:"THE DECREE THEY IGNORED",l:"In 238 BCE a synod of Egyptian priests at Canopus ordered a sixth epagomenal day every fourth year, giving the reason outright: the rise of Sothis advances to another day in every 4 years. It was not implemented. Somebody understood the problem exactly, said so in writing, and was ignored.",s:"Cosmic Shifts Vol. I \xB7 Ch. 2, The Sothic Cycle"},{id:"v13",v:"cs1",t:"THE COUNT IS STILL ALIVE",l:"Highland Guatemalan daykeepers, the ajq'ijab', have kept the 260-day Tzolk'in without interruption through the Conquest, the colonial period and twentieth-century violence. Somebody counted today's day-sign this morning. The Dreamspell 13-Moon calendar is a modern invention wearing its name.",s:"Cosmic Shifts Vol. I \xB7 Ch. 1, Mesoamerica"},{id:"v14",v:"cs2",t:"A NUMBER THAT SURVIVED",l:"Hipparchus found precession around 129 BCE by comparing his measure of Spica with one Timocharis wrote down 160 years before. It is invisible in one lifetime; its discovery was an act of archival comparison. His own treatise is lost, known only through Ptolemy. Transmission is everything.",s:"Cosmic Shifts Vol. II \xB7 Ch. 10, Precession"},{id:"v15",v:"cs2",t:"THE DIGGING STARS",l:"One small cluster served as a calendar on every inhabited continent. Xhosa isiLimela, Sotho Selemela, Swahili Kilimia: the digging stars, whose winter rising opens the planting year. M\u0101ori Matariki opens the new year. Hesiod timed harvest and ploughing by it. The Pleiades, read the world over.",s:"Cosmic Shifts Vol. II \xB7 Ch. 13, The Pleiades"},{id:"v16",v:"cs2",t:"THE FARMERS WHO READ EL NI\xD1O",l:"Andean farmers on the altiplano watch the Pleiades around 24 June and forecast the rains from how bright and numerous the stars look, a practice documented within decades of the Spanish conquest and still done now. A 2000 study in Nature proposed the mechanism: El Ni\xF1o cirrus dims the cluster.",s:"Cosmic Shifts Vol. II \xB7 Ch. 13, The One Place Layer 3 Might Pass"}],archive:[{id:"a01",v:"icb02",t:"THE FIRST ERASURE",l:"The playbook didn't start in 1938. It started in 1550 BCE. The Hyksos, a melanated Canaanite-Hamitic people, grew into Egypt's Nile Delta for generations before they ruled it. Ahmose I burned Avaris, sacked their tombs and chased them into Canaan. And the first people they erased looked like you.",s:"The First Erasure \xB7 Preface and Part II, Move 1"},{id:"a02",v:"icb02",t:"THE KING WHO SAVED THE PAPYRI",l:"Hyksos King Apophis had scribes copy the Rhind Mathematical Papyrus and the Edwin Smith Surgical Papyrus, the world's oldest known surgical document. Their chariot and composite bow built the New Kingdom. Then they were left off the temple king lists. The science was kept. The scientists were erased.",s:"The First Erasure \xB7 Ch. 3 and Part II, Moves 2-3"},{id:"a03",v:"icb02",t:"AVARIS. ALEXANDRIA. CORDOBA.",l:"The line is unbroken: the Hyksos cut from the king lists, the Library of Alexandria dismantled and Hypatia murdered, the libraries of Cordoba and Granada burned by the Inquisition. They burned Avaris. They burned Alexandria. They burned Cordoba. Then they sold the stolen science back to us as enlightenment.",s:"The First Erasure \xB7 Part IV, The Unbroken Line"},{id:"a04",v:"icb03",t:"MOOR MEANT BLACK",l:"From the Middle Ages to the 17th century Europeans depicted Moors as black and called Muslims of any other complexion 'white Moors.' An 1817 encyclopedia still defined moor as a negro, a blackamoor. The default Moor was Black. Modern literature reversed it, and that is not accidental.",s:"The Web of Amnesia \xB7 Thread 3, The Blackamoors"},{id:"a05",v:"icb03",t:"THE HOOD CAME FROM SPAIN",l:"The pointed hood began as the capirote, forced on those the Spanish Inquisition convicted of heresy or impure blood, while limpieza de sangre made ancestry, not faith, the basis for rights. Its targets were Moriscos and converted Jews. The target changed. The uniform stayed the same.",s:"The Web of Amnesia \xB7 Threads 4 and 6, The Moriscos and the KKK"},{id:"a06",v:"icb07",t:"THEY WERE LACKING COWS",l:"The plagues did not originate in Africa. They came from grain silos, animal pens and dense farming settlements: 8 of 15 major temperate diseases reached humans from domestic animals. Cows gave us measles. They called Indigenous peoples primitive for not having diseases. They were lacking cows.",s:"The Plague Inheritance \xB7 Parts I and III"},{id:"a07",v:"icb07",t:"IMMUNITY BUILT ON GRAVES",l:"European immunity was not a biological gift. It was the inherited scar tissue of 5,000 years of civilizational sickness. When the diseases reached the Americas, up to 95% of the Indigenous population died. They were healthy until a sick civilization arrived and called the catastrophe an act of God.",s:"The Plague Inheritance \xB7 Parts III and IV"},{id:"a08",v:"icb10",t:"THE BODY SNATCHERS' OFFER",l:"The final phase of the five-thousand-year epistemicide is not another law, curriculum or algorithm. It is an offer from transhumanism, the Silicon Valley theology of body abandonment: leave your biological body behind, something better is waiting. This document is why you should not take that offer.",s:"B.S. Body Snatchers \xB7 Authors' Declaration"},{id:"a09",v:"jinn",t:"ONE PERSON. ONE CHROMOSOME.",l:"The SLC24A5 mutation behind European light skin traces to a single ancestral copy that arose in West Asia, possibly 22,000 to 29,000 years ago. Most European selection for pale skin came in the last 8,000 years. It is a reduced production of melanin. That is the entirety of what it is.",s:"POLY JINN-ISIS \xB7 Ch. 1, The Indictment, Section III"},{id:"a10",v:"jinn",t:"HOW WHITE SKIN WAS GRAFTED",l:"In 1795 Blumenbach coined 'Caucasian' and cast white skin not as a recent low-UV mutation but as humanity's original form, every other color a degeneration. Morton, Nott, Gliddon and Agassiz built polygenism on top. The mutation became a mythology, then a mandate. The meaning was assigned.",s:"POLY JINN-ISIS \xB7 Ch. 1, The Indictment, Section IV"},{id:"a11",v:"jinn",t:"FROM SKULLS TO CLASSROOMS",l:"Samuel Morton manipulated skull measurements to fit a predetermined racial hierarchy. Darwin dealt polygenism a death blow, but it mutated into eugenics. In 1960 Louisiana made Race and Reason required reading for every high school student. The pipeline from Morton's skulls to Louisiana's classrooms was direct.",s:"POLY JINN-ISIS \xB7 Ch. 1, The Indictment, Section IV"},{id:"a12",v:"oms",t:"THE INVERSION DOCTRINE",l:"The spell runs on stolen Kemetic science turned upside down. Crowley's Thelema inverted it for power, and Kenneth Grant's Typhonian Order made Set, the chaos against which Ma'at defines itself, the object of worship. Cosmic balance was replaced with the worship of entropy.",s:"The Occult Media Spell \xB7 Ch. 1, The Inversion Doctrine"},{id:"a13",v:"oms",t:"THE LAB AND THE STUDIO",l:"The CIA's MK-Ultra used drugs, hypnosis, sensory deprivation and trauma to split personalities, experimenting on prisoners, mental patients and, disproportionately, Black Americans. Operation Mockingbird recruited hundreds of journalists, editors and executives. The line between intelligence and entertainment blurred.",s:"The Occult Media Spell \xB7 Ch. 2, MK-Ultra and Operation Mockingbird"},{id:"a14",v:"oms",t:"HIP-HOP, HIJACKED",l:"Hip-hop was born in the Bronx as peace, love, unity and having fun: a weapon of the people. The industry's gatekeepers moved to co-opt it. Consciousness and social commentary gave way to materialism, violence and nihilism. Conscious artists were marginalized; the most toxic narratives were rewarded.",s:"The Occult Media Spell \xB7 Ch. 4, The Trinity of Trauma"},{id:"a15",v:"oms",t:"GRANDMASTER AND GRAND WIZARD",l:"Asian martial arts titles meant teacher: Sensei, Shihan, Soke, Sabom-nim, Sifu. Grandmaster is a Western invention, from the Grand Master of the Templars and Freemasonry, the same fraternal well that gave the KKK its Grand Wizard. Reclaim the authentic titles. Honor the melanated lineage.",s:"The Occult Media Spell \xB7 Ch. 7, The Grandmaster and the Grand Wizard"},{id:"a16",v:"oms",t:"THE COUNTER-SPELL",l:"Teachers of melanin, consciousness and African spirituality, from Dr. Delbert Blair to Bobby Hemmitt to Dr. Laila Afrika, have seen their books made hard to find and their lectures scrubbed from the internet. The system does not waste its energy on those who pose no threat. They are the counter-spell.",s:"The Occult Media Spell \xB7 Ch. 5, The Counter-Spell"},{id:"a17",v:"legacy",t:"ALEXANDRIA: HOUSE OF STOLEN GOODS",l:"The Library of Alexandria, founded under Ptolemy I, was not a gift to the world. It was a repository for stolen goods, mandated to collect the texts of every conquered civilization. Ships arriving in Alexandria had to surrender their books for copying. The originals were kept; copies were returned.",s:"The Legacy Document \xB7 Ch. 2.2, Alexander and the Looting of the Mind"},{id:"a18",v:"legacy",t:"THE FIRST EPISTEMICIDE",l:"Alexandria burned in stages: Caesar's harbor fire in 48 BCE, Aurelian's attack in 270-275 CE, Theodosius I's destruction of the Serapeum in 391 CE. Steal the knowledge, destroy the source, present it as original. You cannot be accused of plagiarism if the original no longer exists.",s:"The Legacy Document \xB7 Ch. 2.4, The Burning of the Libraries"},{id:"a19",v:"legacy",t:"GRANADA, 1502",l:"After Granada fell, Cardinal Cisneros ordered all Arabic manuscripts in Granada burned in 1502, an estimated 80,000 to 1,000,000 volumes. What Europe had learned in Moorish universities for three centuries was repackaged as the Renaissance, its origins erased. The second great epistemicide.",s:"The Legacy Document \xB7 Ch. 5.1, The Reconquista"},{id:"a20",v:"legacy",t:"ONE SERPENT, SEVEN SKINS",l:"The serpent does not die. It sheds its skin: military conquest, religious fabrication, Moorish appropriation, colonial slavery, institutional control, pharmaceutical suppression, and now Kemetic science retold in quantum vocabulary with melanin omitted. One serpent. Seven skins. One target.",s:"The Legacy Document \xB7 Ch. 15.1, The Serpent's Seven Skins"}]};var ae={purple:"#2D1B4E",gold:"#C9A84C",orange:"#E8843C",ink:"#0B0713",cyan:"#4CE0E0",red:"#C43B3B",char:"#B6D02E",violet:"#9b6cff",blue:"#2f6bff",hotred:"#ff2b2b",pink:"#ff7ad9",green:"#3ce08f"},Of=7.4;var zf=9.6,Ff=8.4,Bf=27,kf=1.4,Hf=1,Vf=3,wh=21,Gf=.16,Th=.42;var Wf=.24,yn=.46;var Xf=2;var ka=3,Mt={single:{name:"ASTROLABE BOLT",col:ae.gold,cd:.13,spd:24,size:.16,dmg:1},scatter:{name:"GIRIH SCATTER",col:ae.cyan,cd:.17,spd:22,size:.14,dmg:1},rapid:{name:"ALGEBRA RIG",col:"#bfe6ff",cd:.06,spd:28,size:.11,dmg:.6},beam:{name:"ASTROLABE BEAM",col:"#ffffff",cd:.24,spd:34,size:.13,dmg:1.6,pierce:!0},flame:{name:"ALCHEMICAL FLAME",col:ae.orange,cd:.11,spd:13,size:.34,dmg:.5,life:.42}},qf={single:"ASTROLABE LANCE",scatter:"GIRIH RING",rapid:"ALGEBRA SWARM",beam:"ASTROLABE SWEEP",flame:"ALCHEMICAL BLOOM"},Yf=["single","scatter","rapid","beam","flame"],ys=.9,yr=3,Ah=[3,3,6],vr=2.5,Qn=1.15,Rh=14,Kf=.07,Ch=.22,Zf=.5,Yi=100,$f=20,Jf=34,Ih=1.2,jf=30,Qf=.18,Ki=1.15,ep={grunt:{hp:3,spd:3.7,r:.5,aggro:13,contact:!0},shooter:{hp:5,spd:2.9,r:.5,aggro:15,keep:8,shootCd:1.7,bspd:9,armor:.5,guard:3},flyer:{hp:3,spd:4.6,r:.55,aggro:16,hover:3.3,diveCd:3.6},brute:{hp:16,spd:2.5,r:.95,aggro:12,contact:!0,armor:.65,guard:5}},tp=3.2,dn={off:[0,10.5,9.5],fov:44,lerp:6,near:.5,far:220,bossZoom:1.45},vn={ramparts:{key:"ramparts",name:"THE RAMPARTS",tag:"Moorish coast at dusk \xB7 girih arches \xB7 the book-burning engine at the gate",rail:"COAST \u2192 THE GATE",boss:"engine",accent:ae.gold,sky:["#3a2352","#241542","#0a0618"],fog:"#1a1030",win:"The erasure-engine is scrap. The libraries breathe another day. The knowledge stays UNERASED."},venus:{key:"venus",name:"NEO-VENUS",tag:"terraformed sky-city \xB7 Earth, the Moon, Jupiter & Saturn overhead \xB7 the Censor Array",rail:"SKY-DOCK \u2192 THE ARRAY",boss:"censor",accent:ae.pink,sky:["#150826","#9a4a3c","#c8783a"],fog:"#3a1a3a",win:"The Censor Array is dark. Venus keeps her records. The knowledge stays UNERASED."},archive:{key:"archive",name:"THE ARCHIVE DEEP",tag:"the vault beneath the library \xB7 candle-lit stacks \xB7 the Redactor press",rail:"STACKS \u2192 THE PRESS",boss:"redactor",accent:ae.violet,sky:["#07040c","#0d0716","#05030a"],fog:"#0a0614",win:"The Redactor is jammed mid-stamp. Every page it swallowed comes back. The knowledge stays UNERASED."}},ei=["ramparts","venus","archive"],Ot={melvinci:{key:"melvinci",queen:!1,name:"MELVINCI",title:"THE KING",skin:"#5f3a20",skinD:"#3e2412",robe:"#241a5e",robeL:"#39299a",robeD:"#150e38",pant:"#181427",hair:"#1a1112",wrapB:ae.gold,aura:ae.cyan,accent:ae.cyan,gem:"#2ee6a8"},kimaya:{key:"kimaya",queen:!0,name:"KI-MAYA",title:"THE QUEEN",skin:"#5f3a20",skinD:"#3e2412",robe:"#0e5c3c",robeL:"#18936a",robeD:"#07321f",pant:"#0d4a32",hair:"#191021",wrapB:ae.gold,aura:ae.green,accent:ae.green,gem:"#ffd76a"}},np={engine:{name:"ERASURE-ENGINE",wake:"RAISE THE WARD  [V]",hp:80},censor:{name:"CENSOR ARRAY",wake:"CENSOR ARRAY \u2014 SHOOT THE GAPS",hp:90},redactor:{name:"THE REDACTOR",wake:"THE REDACTOR \u2014 DASH THE SHOCKWAVE",hp:70}},Ph=[{key:"SCRIBE",min:0,hint:"Reach 4,000 style for SCHOLAR \u2014 parries, dash kills and blade finishers grow the multiplier."},{key:"SCHOLAR",min:4e3,hint:"Reach 8,000 style for SAGE \u2014 chain parries; three in a row arm the gold cannon."},{key:"SAGE",min:8e3,hint:"Take zero hits in the boss fight for UNERASED."},{key:"UNERASED",min:8e3,hint:"The knowledge stays UNERASED. There is nothing above this.",noHitBoss:!0}],Lh="unerased3d.lb.v1",Dh="unerased3d.codex.v2",ao=Uf;function Qv(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}var Hn=(i,e)=>i+","+e,eM={ramparts:{seed:11,style:"stone",rooms:[{id:"coast",w:10,h:8,kind:"start"},{id:"court",w:14,h:10,dir:"N",foes:[["grunt",2],["shooter",1]],boxes:["scatter"],pillars:!0,terrace:!0},{id:"stair",w:6,h:10,dir:"N",foes:[["grunt",2]]},{id:"plaza",w:16,h:12,dir:"E",foes:[["grunt",3],["shooter",2]],boxes:["beam"],pillars:!0},{id:"wall",w:8,h:6,dir:"N",len:5,foes:[["shooter",2]]},{id:"bastion",w:14,h:12,dir:"N",foes:[["grunt",2],["shooter",1],["brute",1]],boxes:["rapid","power"],pillars:!0,terrace:!0},{id:"approach",w:10,h:10,dir:"W",len:5,foes:[["grunt",2],["shooter",2]],boxes:["flame","power"]},{id:"gate",w:15,h:11,dir:"N",len:5,kind:"boss",terrace:"boss"}]},venus:{seed:23,style:"slab",rooms:[{id:"dock",w:10,h:8,kind:"start"},{id:"pad1",w:12,h:10,dir:"N",len:6,foes:[["grunt",1],["shooter",1],["flyer",1]],boxes:["rapid"]},{id:"span",w:8,h:8,dir:"E",len:7,foes:[["flyer",2]]},{id:"pad2",w:14,h:12,dir:"N",len:6,foes:[["grunt",2],["shooter",2],["flyer",1]],boxes:["scatter","power"],pillars:!0,terrace:!0},{id:"bridge",w:6,h:8,dir:"W",len:8,foes:[["flyer",2]]},{id:"pad3",w:12,h:12,dir:"N",len:6,foes:[["grunt",2],["shooter",2]],boxes:["beam"],terrace:!0},{id:"hangar",w:12,h:10,dir:"N",len:6,foes:[["shooter",2],["flyer",1],["brute",1]],boxes:["flame","power"]},{id:"array",w:16,h:12,dir:"N",len:7,kind:"boss",terrace:"boss"}]},archive:{seed:37,style:"stacks",rooms:[{id:"well",w:10,h:8,kind:"start"},{id:"stack1",w:14,h:12,dir:"N",foes:[["grunt",2],["shooter",1]],boxes:["scatter"],shelves:!0},{id:"aisle",w:6,h:12,dir:"N",foes:[["grunt",2]]},{id:"stack2",w:16,h:12,dir:"W",foes:[["grunt",2],["shooter",2]],boxes:["power"],shelves:!0},{id:"reading",w:12,h:10,dir:"N",foes:[["grunt",3],["shooter",1]],boxes:["beam"],pillars:!0,terrace:!0},{id:"stack3",w:16,h:12,dir:"E",foes:[["grunt",2],["shooter",2]],boxes:["rapid"],shelves:!0},{id:"vault",w:10,h:10,dir:"N",foes:[["grunt",1],["shooter",2],["brute",1]],boxes:["flame","power"],terrace:!0},{id:"press",w:15,h:11,dir:"N",len:5,kind:"boss",terrace:"boss"}]}},ip=(i,e,t)=>i.x0-t<e.x1&&i.x1+t>e.x0&&i.z0-t<e.z1&&i.z1+t>e.z0,sp=(i,e)=>{for(let t=i.z0;t<i.z1;t++)for(let n=i.x0;n<i.x1;n++)e(n,t)};function tM(i){let e=[],t=[],n=null;for(let s of i.rooms){let r,o=null;if(!n)r={x0:0,z0:-s.h,x1:s.w,z1:0};else{let l=s.len||4,c=n.rect,u=Math.floor((c.x0+c.x1)/2),h=Math.floor((c.z0+c.z1)/2);if(s.dir==="N"){o={x0:u-1,x1:u+1,z0:c.z0-l,z1:c.z0};let f=u-Math.floor(s.w/2);r={x0:f,x1:f+s.w,z1:o.z0,z0:o.z0-s.h}}else if(s.dir==="E"){o={z0:h-1,z1:h+1,x0:c.x1,x1:c.x1+l};let f=h-Math.floor(s.h/2);r={x0:o.x1,x1:o.x1+s.w,z0:f,z1:f+s.h}}else if(s.dir==="W"){o={z0:h-1,z1:h+1,x1:c.x0,x0:c.x0-l};let f=h-Math.floor(s.h/2);r={x1:o.x0,x0:o.x0-s.w,z0:f,z1:f+s.h}}else throw new Error("room "+s.id+": bad dir "+s.dir)}for(let l of e)if(ip(r,l.rect,1))throw new Error("room "+s.id+" overlaps "+l.id);for(let l of t)if(ip(r,l.rect,1)&&l.to!==s.id)throw new Error("room "+s.id+" overlaps corridor into "+l.to);let a={...s,rect:r,doors:[]};if(o){t.push({rect:o,from:n.id,to:s.id,dir:s.dir});let l=s.dir,c=l==="N"?{x:o.x0+1,z:o.z1}:l==="E"?{x:o.x0,z:o.z0+1}:{x:o.x1,z:o.z0+1},u=l==="N"?{x:o.x0+1,z:o.z0}:l==="E"?{x:o.x1,z:o.z0+1}:{x:o.x0,z:o.z0+1};n.doors.push(c),a.doors.push(u)}e.push(a),n=a}return{rooms:e,corrs:t}}function nM(i){let e=[],t=i.rect,n=t.x1-t.x0,s=t.z1-t.z0;if(i.pillars)for(let r of[.25,.75])for(let o of[.25,.75])e.push([t.x0+Math.floor(n*r),t.z0+Math.floor(s*o)]);if(i.shelves){let r=0;for(let o=t.z0+3;o<t.z1-3;o+=3,r++){let a=r%2===0;for(let l=t.x0+2;l<t.x1-2;l++)a&&l<t.x0+5||!a&&l>=t.x1-5||e.push([l,o])}}return e}var rp=1,op=2,iM=1.4;function sM(i){let e=i.rect,t=Math.floor((e.x0+e.x1)/2),n=Math.floor((e.z0+e.z1)/2),s=[];if(i.terrace==="boss"){let r=e.x1-e.x0;for(let o of[e.x0+Math.floor(r*.2),e.x1-Math.floor(r*.2)-2])for(let a=0;a<2;a++)for(let l=0;l<2;l++)s.push([o+a,n+l,iM])}else if(i.terrace)for(let r=-1;r<=0;r++)s.push([t-2,n+r,rp],[t-1,n+r,rp],[t,n+r,op],[t+1,n+r,op]);return s}function Ha(i,e,t,n){return i.doors.some(s=>Math.abs(s.x-e)<n&&Math.abs(s.z-t)<n)}function Nh(i){let e=eM[i];if(!e)throw new Error("no level: "+i);let t=Qv(e.seed),{rooms:n,corrs:s}=tM(e),r=new Set,o=new Set;for(let _ of n)sp(_.rect,(v,w)=>r.add(Hn(v,w)));for(let _ of s)sp(_.rect,(v,w)=>r.add(Hn(v,w)));for(let _ of n)for(let[v,w]of nM(_)){let U=Hn(v,w);r.has(U)&&!Ha(_,v,w,3)&&o.add(U)}for(let _ of o)r.delete(_);let a=new Map;for(let _ of n)for(let[v,w,U]of sM(_)){let S=Hn(v,w);r.has(S)&&!o.has(S)&&!Ha(_,v,w,3)&&(a.set(S,U),r.delete(S))}let l=new Set;for(let _ of r){let[v,w]=_.split(",").map(Number);for(let U=-1;U<=1;U++)for(let S=-1;S<=1;S++){let D=Hn(v+S,w+U);!r.has(D)&&!o.has(D)&&!a.has(D)&&l.add(D)}}let c={x0:1/0,z0:1/0,x1:-1/0,z1:-1/0};for(let _ of l){let[v,w]=_.split(",").map(Number);c.x0=Math.min(c.x0,v),c.z0=Math.min(c.z0,w),c.x1=Math.max(c.x1,v+1),c.z1=Math.max(c.z1,w+1)}let u=(_,v)=>({x:(_+.5)*2,z:(v+.5)*2}),h=[],f=[],p=[];for(let _ of n){let v=_.rect,w=[],U=(z,P)=>z>=v.x0+1&&z<v.x1-1&&P>=v.z0+1&&P<v.z1-1&&r.has(Hn(z,P));for(let[z,P]of _.foes||[])for(let O=0;O<P;O++){let F=null;for(let $=0;$<60&&!F;$++){let Y=v.x0+1+Math.floor(t()*(v.x1-v.x0-2)),ne=v.z0+1+Math.floor(t()*(v.z1-v.z0-2));!U(Y,ne)||Ha(_,Y,ne,3)||w.some(fe=>Math.abs(fe[0]-Y)<2&&Math.abs(fe[1]-ne)<2)||(F=[Y,ne])}F&&(w.push(F),h.push({type:z,...u(F[0],F[1]),room:_.id}))}let S=[[v.x0+1,v.z0+1],[v.x1-2,v.z0+1],[v.x0+1,v.z1-2],[v.x1-2,v.z1-2]].filter(([z,P])=>r.has(Hn(z,P))&&!Ha(_,z,P,2));for(let z=S.length-1;z>0;z--){let P=Math.floor(t()*(z+1));[S[z],S[P]]=[S[P],S[z]]}(_.boxes||[]).forEach((z,P)=>{let O=S[P%S.length];O&&f.push({kind:z,...u(O[0],O[1]),room:_.id})});let D=(z,P,O)=>{l.has(Hn(z,P))&&p.push({...u(z,P),dir:O})};for(let z=v.x0+1;z<v.x1-1;z+=3)D(z,v.z0-1,"S"),D(z,v.z1,"N");for(let z=v.z0+2;z<v.z1-1;z+=3)D(v.x0-1,z,"E"),D(v.x1,z,"W")}let m=n.find(_=>_.kind==="start"),x=n.find(_=>_.kind==="boss"),g=m.rect,d=x.rect,b=u(Math.floor((g.x0+g.x1)/2),Math.floor((g.z0+g.z1)/2)),y=u(Math.floor((d.x0+d.x1)/2),d.z0+3),M=x.doors[0],C=[];if(M){let _=x.dir,v=_==="E"?-1:_==="W"?1:0,w=_==="N"?1:0;for(let U of[0,1])C.push(_==="N"?[M.x-1+U,M.z+w]:[M.x+v,M.z-1+U])}let T=n.map(_=>({id:_.id,kind:_.kind||"room",rect:_.rect,doors:_.doors,pillars:!!_.pillars,shelves:!!_.shelves,center:u((_.rect.x0+_.rect.x1)/2-.5,(_.rect.z0+_.rect.z1)/2-.5)})),E=new Set;return{key:i,style:e.style,cell:2,rooms:T,corridors:s.map(_=>_.rect),floor:r,walls:l,inner:o,dyn:E,plinths:a,bounds:c,start:b,bossPos:y,bossRect:d,gateCells:C,foes:h,boxes:f,torches:p,solidCell(_,v,w=0){let U=Hn(_,v);if(l.has(U)||o.has(U)||E.has(U))return!0;let S=a.get(U);return S!==void 0?w<S-.4:!r.has(U)},heightAt(_,v){return a.get(Hn(_,v))||0},roomAt(_,v){let w=Math.floor(_/2),U=Math.floor(v/2);return T.find(S=>w>=S.rect.x0&&w<S.rect.x1&&U>=S.rect.z0&&U<S.rect.z1)||null},sealGate(){for(let[_,v]of C)E.add(Hn(_,v))},openGate(){E.clear()}}}function ap(i,e,t,n,s=0){let r=!1,o=Math.floor((e-n)/2),a=Math.floor((e+n)/2),l=Math.floor((t-n)/2),c=Math.floor((t+n)/2);for(let u=l;u<=c;u++)for(let h=o;h<=a;h++){if(!i.solidCell(h,u,s))continue;let f=h*2,p=f+2,m=u*2,x=m+2,g=Math.max(f,Math.min(e,p)),d=Math.max(m,Math.min(t,x)),b=e-g,y=t-d,M=b*b+y*y;if(!(M>=n*n))if(r=!0,M>1e-8){let C=Math.sqrt(M),T=n-C;e+=b/C*T,t+=y/C*T}else{let C=e-f,T=p-e,E=t-m,I=x-t,_=Math.min(C,T,E,I);_===C?e=f-n:_===T?e=p+n:_===E?t=m-n:t=x+n}}return{x:e,z:t,hit:r}}function Mr(i,e,t,n,s,r,o=0){let a=Math.max(1,Math.ceil(Math.hypot(s,r)/(n*.5))),l=!1;for(let c=0;c<a;c++){let u=ap(i,e+s/a,t,n,o),h=ap(i,u.x,t+r/a,n,o);e=h.x,t=h.z,l=l||u.hit||h.hit}return{x:e,z:t,hit:l}}function lo(i,e,t,n,s,r=0){let o=n-e,a=s-t,l=Math.max(1,Math.ceil(Math.hypot(o,a)/(2/2)));for(let c=1;c<=l;c++){let u=c/l;if(i.solidCell(Math.floor((e+o*u)/2),Math.floor((t+a*u)/2),r))return!0}return!1}function lp(i,e,t,n=1/0){let s=i.heightAt(Math.floor(e/2),Math.floor(t/2));return s&&n>=s-.4?s:0}var rM=8;function cp(i,e){return{hero:i,world:e,score:0,mult:1,bestMult:1,kills:0,styleKills:0,parries:0,parryChain:0,hits:0,bossHits:0,pages:0,t:0,inBoss:!1}}var Uh=i=>Math.max(1,Math.min(rM,Math.round(i*4)/4));function hp(i,e=!1){let t=Uh(i.mult+(e?.25:.05)),n=Math.round((e?150:100)*i.mult);return{...i,score:i.score+n,mult:t,bestMult:Math.max(i.bestMult,t),kills:i.kills+1,styleKills:i.styleKills+(e?1:0)}}function up(i){let e=Uh(i.mult+.5);return{...i,score:i.score+Math.round(150*i.mult),mult:e,bestMult:Math.max(i.bestMult,e),parries:i.parries+1,parryChain:i.parryChain+1}}function Oh(i){return{...i,score:i.score+300,pages:i.pages+1}}function dp(i,e){return{...i,score:i.score+Math.round(e*10*i.mult)}}function fp(i){return{...i,mult:Uh(i.mult/2),parryChain:0,hits:i.hits+1,bossHits:i.bossHits+(i.inBoss?1:0)}}function pp(i,e){return{...i,t:i.t+e}}function mp(i){return{...i,inBoss:!0}}function gp(i){return{...i,parryChain:0}}function zh(i){return i.score>=8e3&&i.bossHits===0?"UNERASED":i.score>=8e3?"SAGE":i.score>=4e3?"SCHOLAR":"SCRIBE"}function xp(i){return(Ph.find(e=>e.key===i)||Ph[0]).hint}function br(){try{return globalThis.localStorage||null}catch{return null}}function _p(i,e){try{let t=JSON.parse(i.getItem(e)||"{}");return t&&typeof t=="object"?t:{}}catch{return{}}}function yp(i,e,t){try{return i.setItem(e,JSON.stringify(t)),!0}catch{return!1}}function Va(i=br()){return i?_p(i,Lh):{}}function vp(i,e=br()){let t=Va(e),n={s:i.score,r:zh(i),h:i.hero,t:Math.round(i.t),k:i.kills,w:i.parries,d:new Date().toISOString().slice(0,10)},s=[...t[i.world]||[],n].sort((o,a)=>a.s-o.s).slice(0,5),r={...t,[i.world]:s};return e&&yp(e,Lh,r),r}function co(i,e=br()){let t=Va(e)[i]||[];return t.length?t[0]:null}function ho(i=br()){return i?_p(i,Dh):{}}function Fh(i,e,t=br()){let n=ho(t),s=n[i]||[];if(s.includes(e))return n;let r={...n,[i]:[...s,e]};return t&&yp(t,Dh,r),r}function Mp(i,e=br()){return(ho(e)[i]||[]).length}function Bh(i,e,t=ho()[i]||[]){let n=ao[i];return n.find(s=>!t.includes(s.id))||n[e%n.length]}function bp(){let i=null,e=null,t=!1,n=1,s=()=>t?0:.5*n;function r(){if(i){i.state==="suspended"&&i.resume();return}let f=window.AudioContext||window.webkitAudioContext;f&&(i=new f,e=i.createGain(),e.gain.value=s(),e.connect(i.destination))}function o(f,p,m="square",x=.2,g){if(!i||t)return;let d=i.createOscillator(),b=i.createGain(),y=i.currentTime;d.type=m,d.frequency.setValueAtTime(f,y),g&&d.frequency.exponentialRampToValueAtTime(Math.max(20,g),y+p),b.gain.setValueAtTime(x,y),b.gain.exponentialRampToValueAtTime(.001,y+p),d.connect(b),b.connect(e),d.start(y),d.stop(y+p+.02)}function a(f,p=.2,m=400,x=4e3){if(!i||t)return;let g=Math.floor(i.sampleRate*f),d=i.createBuffer(1,g,i.sampleRate),b=d.getChannelData(0);for(let E=0;E<g;E++)b[E]=(Math.random()*2-1)*(1-E/g);let y=i.createBufferSource();y.buffer=d;let M=i.createBiquadFilter();M.type="highpass",M.frequency.value=m;let C=i.createBiquadFilter();C.type="lowpass",C.frequency.value=x;let T=i.createGain();T.gain.value=p,y.connect(M),M.connect(C),C.connect(T),T.connect(e),y.start()}let l={shoot(f){({single:()=>o(880,.07,"square",.12,300),scatter:()=>{o(660,.08,"sawtooth",.1,200),a(.05,.05,1500,5e3)},rapid:()=>o(1400,.04,"square",.08,700),beam:()=>o(1800,.14,"sine",.12,2600),flame:()=>a(.12,.08,200,1800)})[f]?.()},charged(){o(220,.35,"sawtooth",.22,1400),a(.2,.12,300,3e3)},chargeFull(){o(1200,.12,"sine",.1,1800)},blade(f){a(.08,.1,2e3,8e3),o(300+f*120,.09,"sawtooth",.09,900)},bladeHit(){a(.06,.16,800,4e3),o(140,.08,"square",.14,60)},parry(){o(1600,.12,"sine",.2,2400),o(2400,.2,"sine",.12,3200)},ward(){o(500,.1,"sine",.08,900)},shatter(){a(.3,.2,600,6e3),o(900,.3,"sawtooth",.12,120)},dash(){a(.1,.08,800,6e3),o(400,.1,"sine",.08,1200)},hurt(){o(180,.3,"sawtooth",.25,50),a(.2,.15,100,1500)},foeHit(){o(240,.05,"square",.08,120)},foeDie(){a(.15,.15,300,3e3),o(200,.18,"square",.12,40)},crate(){a(.12,.14,500,4e3),o(320,.1,"square",.1,160)},pickup(){[660,880,1320].forEach((f,p)=>setTimeout(()=>o(f,.12,"sine",.14),p*70))},page(){[523,659,784,1047].forEach((f,p)=>setTimeout(()=>o(f,.22,"sine",.12),p*110))},bossHit(){o(120,.08,"square",.1,70)},bossWake(){o(60,.9,"sawtooth",.3,200),a(.6,.2,80,900)},bossDie(){for(let f=0;f<6;f++)setTimeout(()=>{a(.3,.2,200,3e3),o(90,.4,"sawtooth",.2,30)},f*160)},beamTell(){o(1800,.5,"sine",.08,2600)},beamFire(){a(.4,.3,900,200),o(200,.4,"sawtooth",.2,80)},slam(){a(.5,.4,200,40),o(90,.5,"sawtooth",.3,30)},open(){o(900,.15,"sine",.15,1400)},ui(){o(700,.06,"sine",.08,1e3)},step(){a(.03,.03,300,1200)}};function c(){return t=!t,e&&(e.gain.value=s()),t}function u(f){t=!!f,e&&(e.gain.value=s())}function h(f){n=Math.max(0,Math.min(1,f)),e&&(e.gain.value=s())}return{init:r,beep:o,noise:a,sfx:l,toggleMute:c,setMuted:u,setVolume:h,get muted(){return t},get ready(){return!!i}}}var Ep={KeyW:"up",ArrowUp:"up",KeyS:"down",ArrowDown:"down",KeyA:"left",ArrowLeft:"left",KeyD:"right",ArrowRight:"right",Space:"fire",KeyK:"fire",KeyJ:"blade",KeyV:"ward",KeyL:"ward",ShiftLeft:"jump",ShiftRight:"jump",KeyR:"camreset",KeyC:"swap",KeyQ:"swap",KeyP:"pause",Escape:"pause",KeyM:"mute",KeyN:"nexttrack",Enter:"confirm",KeyF:"magic",KeyE:"magic",Digit1:"magic",Numpad1:"magic"};function Sp(i,e,t,n){let s={sprint:!1,orbit:!1,orbitDX:0,orbitDY:0,zoom:0,jump:!1,up:!1,down:!1,left:!1,right:!1,fire:!1,blade:!1,ward:!1,dash:!1,swap:!1,mx:0,mz:0,aimX:0,aimZ:-1,mouseAim:!1,touch:!1,sx:0,sz:0},r=new Set,o={},a=new Ca,l=new Un(new N(0,1,0),-.9),c=new be,u=new N,h=0,f=0,p=-1e9,m=0;function x(P){r.add(P)}let g=.85,d=0,b=!1;function y(P){let O=performance.now()/1e3;o[P]&&O-o[P]<Wf?(s.sprint=!0,o[P]=0):o[P]=O}let M=()=>s.up||s.down||s.left||s.right;window.addEventListener("keydown",P=>{let O=Ep[P.code];O&&(["fire","jump","up","down","left","right"].includes(O)&&P.preventDefault(),!s[O]&&(O==="up"||O==="down"||O==="left"||O==="right")&&(M()||(d=performance.now()/1e3,b=!1),y(O),m=performance.now()),P.repeat||x(O),O in s&&(s[O]=!0))}),window.addEventListener("keyup",P=>{let O=Ep[P.code];O&&O in s&&(s[O]=!1),M()||(s.sprint=!1,b=!1)}),window.addEventListener("blur",()=>{for(let P of["up","down","left","right","fire","blade","ward","dash"])s[P]=!1}),i.addEventListener("contextmenu",P=>P.preventDefault());let C=-1e9,T=0,E=0;i.addEventListener("mousemove",P=>{h=P.clientX,f=P.clientY,s.orbit?(s.orbitDX+=P.clientX-T,s.orbitDY+=P.clientY-E,T=P.clientX,E=P.clientY):p=performance.now()}),i.addEventListener("wheel",P=>{s.zoom+=Math.sign(P.deltaY),P.preventDefault()},{passive:!1}),i.addEventListener("mousedown",P=>{if(!s.touch){if(P.button===0){let O=performance.now();O-C<320?(s.orbit=!0,s.fire=!1,T=P.clientX,E=P.clientY):(s.fire=!0,x("fire")),C=O}P.button===2&&(s.blade=!0,x("blade"))}}),window.addEventListener("mouseup",P=>{P.button===0&&(s.fire=!1,s.orbit=!1),P.button===2&&(s.blade=!1)});let I=null,_=0,v=0,w=52;function U(P,O){let F=P-_,$=O-v,Y=Math.hypot(F,$);Y>w&&(F*=w/Y,$*=w/Y),t.style.transform=`translate(${F}px,${$}px)`;let ne=.18,fe=Math.min(1,Math.hypot(F,$)/w);if(fe<ne){s.sx=0,s.sz=0;return}let Ae=(fe-ne)/(1-ne);s.sx=F/w*Ae/fe,s.sz=$/w*Ae/fe}if(e){e.addEventListener("pointerdown",O=>{s.touch=!0,I=O.pointerId;let F=e.getBoundingClientRect();_=F.left+F.width/2,v=F.top+F.height/2,e.setPointerCapture(O.pointerId),e.classList.add("hit"),U(O.clientX,O.clientY),O.preventDefault()}),e.addEventListener("pointermove",O=>{O.pointerId===I&&U(O.clientX,O.clientY)});let P=O=>{O.pointerId===I&&(I=null,s.sx=0,s.sz=0,t.style.transform="",e.classList.remove("hit"))};e.addEventListener("pointerup",P),e.addEventListener("pointercancel",P)}for(let[P,O]of Object.entries(n||{})){if(!O)continue;O.addEventListener("pointerdown",$=>{s.touch=!0,s[P]=!0,x(P),O.classList.add("hit"),$.preventDefault()});let F=()=>{s[P]=!1,O.classList.remove("hit")};O.addEventListener("pointerup",F),O.addEventListener("pointercancel",F),O.addEventListener("pointerleave",F)}window.addEventListener("touchstart",()=>{s.touch=!0,document.body.classList.add("touch")},{once:!0,passive:!0});function S(P,O,F){let $=(s.right?1:0)-(s.left?1:0),Y=(s.down?1:0)-(s.up?1:0);if(P&&($||Y)){let J=O-P.position.x,ce=F-P.position.z,xe=Math.hypot(J,ce)||1,te=J/xe,V=ce/xe,j=-V*$+te*-Y,X=te*$+V*-Y;$=j,Y=X}M()&&!b&&performance.now()/1e3-d>g&&(b=!0,x("longdash")),(s.sx||s.sz)&&($=s.sx,Y=s.sz);let ne=Math.hypot($,Y);ne>1&&($/=ne,Y/=ne),s.mx=$,s.mz=Y;let fe=performance.now();if(!s.touch&&fe-p<4e3&&p>m-4e3&&P&&(c.set(h/window.innerWidth*2-1,-(f/window.innerHeight)*2+1),a.setFromCamera(c,P),a.ray.intersectPlane(l,u))){let J=u.x-O,ce=u.z-F,xe=Math.hypot(J,ce);if(xe>.3){s.aimX=J/xe,s.aimZ=ce/xe,s.mouseAim=!0;return}}s.mouseAim=!1,ne>.05&&(s.aimX=$/Math.max(ne,1e-6),s.aimZ=Y/Math.max(ne,1e-6))}function D(P){return r.has(P)?(r.delete(P),!0):!1}function z(){r.clear()}return{IN:s,update:S,pressed:D,clearEdges:z,press:x}}var kh=new Map;function Hh(i="rgba(255,255,255,1)",e="rgba(255,255,255,0)",t=64){let n="r"+i+e+t;if(kh.has(n))return kh.get(n);let s=document.createElement("canvas");s.width=s.height=t;let r=s.getContext("2d"),o=r.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);o.addColorStop(0,i),o.addColorStop(.35,i),o.addColorStop(1,e),r.fillStyle=o,r.fillRect(0,0,t,t);let a=new Tn(s);return a.colorSpace=gt,kh.set(n,a),a}function oM(){return Hh("rgba(0,0,0,0.55)","rgba(0,0,0,0)",64)}function bt(i,e,t=.9){let n=new eo({map:Hh(),color:i,transparent:!0,opacity:t,blending:ht,depthWrite:!1}),s=new fa(n);return s.scale.set(e,e,1),s}function Vn(i){let e=new ue(new wn(i*2,i*2),new ke({map:oM(),transparent:!0,depthWrite:!1}));return e.rotation.x=-Math.PI/2,e.position.y=.03,e.renderOrder=1,e}var vs=900,aM=40;function wp(i){let e=new Float32Array(vs*3),t=new Float32Array(vs*3),n=new Float32Array(vs),s=new Float32Array(vs),r=new lt;r.setAttribute("position",new Qe(e,3)),r.setAttribute("pcol",new Qe(t,3)),r.setAttribute("psize",new Qe(n,1)),r.setAttribute("palpha",new Qe(s,1));let o=new It({transparent:!0,depthWrite:!1,blending:ht,uniforms:{map:{value:Hh()},scaleY:{value:600}},vertexShader:`attribute vec3 pcol; attribute float psize; attribute float palpha; varying vec3 vc; varying float va; uniform float scaleY;
      void main(){ vc=pcol; va=palpha; vec4 mv=modelViewMatrix*vec4(position,1.0); gl_PointSize=psize*scaleY/-mv.z; gl_Position=projectionMatrix*mv; }`,fragmentShader:"uniform sampler2D map; varying vec3 vc; varying float va; void main(){ vec4 t=texture2D(map,gl_PointCoord); gl_FragColor=vec4(vc*t.rgb, t.a*va); }"}),a=new _i(r,o);a.frustumCulled=!1,i.add(a);let l=[],c=new ve;function u(d,b,y,M,C=8,T={}){c.set(M);for(let E=0;E<C&&l.length<vs;E++){let I=Math.random()*Math.PI*2,_=(T.spd||4)*(.4+Math.random()*.8),v=(T.up??3)*(.3+Math.random()*.9);l.push({x:d,y:b,z:y,vx:Math.cos(I)*_,vy:v,vz:Math.sin(I)*_,life:T.life||.6,t:0,r:c.r,g:c.g,b:c.b,size:T.size||.5,grav:T.grav??9,drag:T.drag??.9})}}function h(d,b,y,M,C=.4,T=.9,E=1.5){l.length<vs&&(c.set(M),l.push({x:d,y:b,z:y,vx:(Math.random()-.5)*.8,vy:E,vz:(Math.random()-.5)*.8,life:T,t:0,r:c.r,g:c.g,b:c.b,size:C,grav:-.5,drag:.98}))}let f=new rn(.82,1,48),p=[];function m(d,b,y,M=3,C=.5,T=.06){let E=p.find(I=>!I.alive);if(!E){if(p.length>=aM)return;let I=new ue(f,new ke({color:y,transparent:!0,blending:ht,depthWrite:!1,side:xt}));I.rotation.x=-Math.PI/2,i.add(I),E={m:I,alive:!1},p.push(E)}E.alive=!0,E.t=0,E.life=C,E.maxR=M,E.m.material.color.set(y),E.m.position.set(d,T,b),E.m.visible=!0}function x(d){for(let b=l.length-1;b>=0;b--){let y=l[b];if(y.t+=d,y.t>=y.life){l[b]=l[l.length-1],l.pop();continue}y.vy-=y.grav*d,y.vx*=y.drag,y.vz*=y.drag,y.x+=y.vx*d,y.y+=y.vy*d,y.z+=y.vz*d,y.y<.05&&y.grav>0&&(y.y=.05,y.vy*=-.3)}for(let b=0;b<vs;b++)if(b<l.length){let y=l[b],M=1-y.t/y.life;e[b*3]=y.x,e[b*3+1]=y.y,e[b*3+2]=y.z,t[b*3]=y.r,t[b*3+1]=y.g,t[b*3+2]=y.b,n[b]=y.size*(.6+.4*M),s[b]=M}else s[b]=0,n[b]=0;r.attributes.position.needsUpdate=!0,r.attributes.pcol.needsUpdate=!0,r.attributes.psize.needsUpdate=!0,r.attributes.palpha.needsUpdate=!0,r.setDrawRange(0,Math.max(1,l.length));for(let b of p){if(!b.alive)continue;b.t+=d;let y=b.t/b.life;if(y>=1){b.alive=!1,b.m.visible=!1;continue}let M=.2+b.maxR*y;b.m.scale.set(M,M,1),b.m.material.opacity=(1-y)*.9}}function g(){l.length=0;for(let d of p)d.alive=!1,d.m.visible=!1}return{spawn:u,ember:h,ring:m,update:x,clear:g,get count(){return l.length}}}function ti(i,e=256){let t=document.createElement("canvas");t.width=t.height=e;let n=t.getContext("2d");i(n,e);let s=new Tn(t);return s.colorSpace=gt,s.wrapS=s.wrapT=hn,s.anisotropy=4,s}var lM=new pr,Vh=new Map;function Er(i){if(Vh.has(i))return Vh.get(i);let e=(n,s)=>{let r=lM.load(`./assets/tex_ship/${i}_${n}.jpg`);return r.wrapS=r.wrapT=hn,r.anisotropy=8,s&&(r.colorSpace=gt),r},t={map:e("Diffuse",!0),normalMap:e("nor_gl"),roughnessMap:e("Rough")};return Vh.set(i,t),t}function Ga(i,e,t,n){i.fillStyle=n;for(let s=0;s<t;s++)i.fillRect(Math.random()*e,Math.random()*e,1.5,1.5)}function Sr(i,e,t,n,s,r){i.strokeStyle=s,i.lineWidth=r,i.beginPath();for(let o=0;o<2;o++){let a=o*Math.PI/4;for(let l=0;l<4;l++){let c=a+l*Math.PI/2,u=e+Math.cos(c)*n,h=t+Math.sin(c)*n;l?i.lineTo(u,h):i.moveTo(u,h)}i.closePath()}i.stroke()}var cM={stone:{pbr:{floor:"red_sandstone_pavement",wall:"large_sandstone_blocks_01",tint:"#fff0dc"},props:"ramparts",wallH:2.4,hemi:["#5a3f7a","#2a1a12",1.1],sun:["#ffb070",1.1,[.4,1,.6]],torch:{col:"#ffa040",y:1.75,kind:"flame",light:"#ff9a3c",intensity:14,dist:13},floor:()=>ti((i,e)=>{i.fillStyle="#5c4b3c",i.fillRect(0,0,e,e),Ga(i,e,900,"rgba(0,0,0,.25)"),Ga(i,e,500,"rgba(255,220,180,.12)"),i.strokeStyle="rgba(20,10,5,.55)",i.lineWidth=4,i.strokeRect(2,2,e-4,e-4),Sr(i,e/2,e/2,e*.36,"rgba(201,168,76,.28)",3),Sr(i,e/2,e/2,e*.18,"rgba(76,224,224,.18)",2)}),wall:()=>ti((i,e)=>{i.fillStyle="#7a6650",i.fillRect(0,0,e,e),Ga(i,e,700,"rgba(0,0,0,.22)"),i.strokeStyle="rgba(30,18,10,.6)",i.lineWidth=4;for(let t=0;t<e;t+=64){i.beginPath(),i.moveTo(0,t),i.lineTo(e,t),i.stroke();for(let n=t/64%2?64:0;n<e;n+=128)i.beginPath(),i.moveTo(n,t),i.lineTo(n,t+64),i.stroke()}i.fillStyle="rgba(201,168,76,.5)",i.fillRect(0,18,e,10),Sr(i,e*.25,23,9,"rgba(11,7,19,.6)",2),Sr(i,e*.75,23,9,"rgba(11,7,19,.6)",2)}),top:()=>ti((i,e)=>{i.fillStyle="#8a7560",i.fillRect(0,0,e,e),Ga(i,e,600,"rgba(0,0,0,.2)"),i.strokeStyle="rgba(30,18,10,.5)",i.lineWidth=4,i.strokeRect(2,2,e-4,e-4)})},slab:{pbr:{floor:"metal_plate",wall:"metal_plate",tint:"#e8def4",glowFloor:!0},wallH:.9,hemi:["#ffc8ee","#5a3a5c",1.7],sun:["#ffd2a8",1.6,[-.5,1,.5]],torch:{col:ae.pink,y:1.4,kind:"pylon",light:"#ff7ad9",intensity:10,dist:12},floor:()=>ti((i,e)=>{i.fillStyle="#4a2a5c",i.fillRect(0,0,e,e);let t=e/4;i.strokeStyle="rgba(255,150,225,.8)",i.lineWidth=3;for(let s=0;s<3;s++)for(let r=0;r<3;r++){let o=r*t*1.6+s%2*t*.8+t*.4,a=s*t*1.4+t*.5;i.beginPath();for(let l=0;l<6;l++){let c=l*Math.PI/3,u=o+Math.cos(c)*t*.45,h=a+Math.sin(c)*t*.45;l?i.lineTo(u,h):i.moveTo(u,h)}i.closePath(),i.stroke()}let n=i.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);n.addColorStop(0,"rgba(255,122,217,.12)"),n.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=n,i.fillRect(0,0,e,e)}),wall:()=>ti((i,e)=>{i.fillStyle="#3b1d45",i.fillRect(0,0,e,e),i.fillStyle="rgba(255,122,217,.85)",i.fillRect(0,0,e,8),i.fillStyle="rgba(76,224,224,.7)";for(let t=16;t<e;t+=48)i.fillRect(t,e/2-3,20,6)}),top:()=>ti((i,e)=>{i.fillStyle="#4a2456",i.fillRect(0,0,e,e),i.strokeStyle="rgba(255,122,217,.8)",i.lineWidth=8,i.strokeRect(4,4,e-8,e-8)})},stacks:{pbr:{floor:"dark_wooden_planks",pillar:"cobblestone_03",tint:"#f0d0a8"},props:"archive",wallH:2.8,hemi:["#6a5aaa","#3a2418",1.9],sun:["#c8a8ff",1.3,[.2,1,.3]],torch:{col:"#ffd27a",y:1.2,kind:"candle",light:"#ffc66a",intensity:9,dist:10},floor:()=>ti((i,e)=>{i.fillStyle="#3a2618",i.fillRect(0,0,e,e),i.strokeStyle="rgba(0,0,0,.45)",i.lineWidth=3;for(let t=0;t<e;t+=42)i.beginPath(),i.moveTo(0,t),i.lineTo(e,t),i.stroke();i.strokeStyle="rgba(255,200,140,.08)",i.lineWidth=1;for(let t=0;t<40;t++){let n=Math.random()*e;i.beginPath(),i.moveTo(0,n),i.bezierCurveTo(e/3,n+6,e*2/3,n-6,e,n),i.stroke()}i.fillStyle="rgba(155,108,255,.10)",i.beginPath(),i.arc(e*.7,e*.3,e*.12,0,7),i.fill()}),wall:()=>ti((i,e)=>{i.fillStyle="#2a1a10",i.fillRect(0,0,e,e);let t=["#8c2f2f","#2f6b4a","#c9a84c","#2f4b8c","#e8dcc0","#6b3a8c","#b56a2a"];for(let n=0;n<3;n++){let s=12+n*82;i.fillStyle="#1a100a",i.fillRect(0,s+66,e,8);let r=4;for(;r<e-4;){let o=9+Math.random()*14;i.fillStyle=t[Math.floor(Math.random()*t.length)],i.fillRect(r,s+6+Math.random()*8,o-2,60),r+=o}}}),top:()=>ti((i,e)=>{i.fillStyle="#3a2618",i.fillRect(0,0,e,e),i.strokeStyle="rgba(0,0,0,.5)",i.lineWidth=6,i.strokeRect(3,3,e-6,e-6)})}};function hM(i,e,t=.5){let n=i.floor.size,s=new Float32Array(n*12),r=new Float32Array(n*12),o=new Float32Array(n*8),a=new Uint32Array(n*6),l=0;for(let u of i.floor){let[h,f]=u.split(",").map(Number),p=h*2,m=f*2,x=p+2,g=m+2,d=l*4;s.set([p,0,m,x,0,m,x,0,g,p,0,g],l*12),r.set([0,1,0,0,1,0,0,1,0,0,1,0],l*12),o.set([p*t,m*t,x*t,m*t,x*t,g*t,p*t,g*t],l*8),a.set([d,d+2,d+1,d,d+3,d+2],l*6),l++}let c=new lt;return c.setAttribute("position",new Qe(s,3)),c.setAttribute("normal",new Qe(r,3)),c.setAttribute("uv",new Qe(o,2)),c.setIndex(new Qe(a,1)),new ue(c,e)}function uM(i){let e=new It({side:$t,depthWrite:!1,fog:!1,uniforms:{c0:{value:new ve(i[0])},c1:{value:new ve(i[1])},c2:{value:new ve(i[2])}},vertexShader:"varying vec3 vp; void main(){ vp=normalize(position); gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"uniform vec3 c0,c1,c2; varying vec3 vp; void main(){ float h=vp.y; vec3 c = h>0.0 ? mix(c1,c0,smoothstep(0.0,0.7,h)) : mix(c1,c2,smoothstep(0.0,-0.5,h)); gl_FragColor=vec4(c,1.0); }"}),t=new ue(new jt(190,24,16),e);return t.frustumCulled=!1,t}function dM(i){let e=new Float32Array(i*3);for(let s=0;s<i;s++){let r=Math.random()*6.283,o=Math.acos(Math.random()*.9+.1),a=175;e.set([a*Math.sin(o)*Math.cos(r),a*Math.cos(o),a*Math.sin(o)*Math.sin(r)],s*3)}let t=new lt;t.setAttribute("position",new Qe(e,3));let n=new _i(t,new Bi({color:"#fff4dc",size:1.6,sizeAttenuation:!1,transparent:!0,opacity:.85,fog:!1}));return n.frustumCulled=!1,n}function Wa(i,e,t,n){let s=ti(e,256),r=new ue(new jt(i,32,24),new ke({map:s,fog:!1}));if(r.position.set(...t),r.frustumCulled=!1,n){let o=new ue(new rn(i*1.4,i*2.3,64),new ke({color:"#e8d6a8",transparent:!0,opacity:.75,side:xt,fog:!1}));o.rotation.x=-1.2,o.rotation.y=.3,r.add(o)}return r}function Tp(i){return(e,t)=>{for(let n=0;n<i.length;n++)e.fillStyle=i[n],e.fillRect(0,n*t/i.length,t,t/i.length+2);for(let n=0;n<40;n++)e.fillStyle="rgba(255,255,255,.08)",e.beginPath(),e.ellipse(Math.random()*t,Math.random()*t,20+Math.random()*40,4+Math.random()*6,0,0,7),e.fill()}}function fM(i,e){i.fillStyle="#1e5fb8",i.fillRect(0,0,e,e),i.fillStyle="#3f8f3a";for(let t=0;t<9;t++)i.beginPath(),i.ellipse(Math.random()*e,Math.random()*e,20+Math.random()*50,15+Math.random()*35,Math.random()*3,0,7),i.fill();i.fillStyle="rgba(255,255,255,.55)";for(let t=0;t<30;t++)i.beginPath(),i.ellipse(Math.random()*e,Math.random()*e,18+Math.random()*30,4+Math.random()*5,Math.random()*3,0,7),i.fill()}function pM(i,e){i.fillStyle="#c9c4b8",i.fillRect(0,0,e,e);for(let t=0;t<40;t++)i.fillStyle="rgba(60,55,50,.35)",i.beginPath(),i.arc(Math.random()*e,Math.random()*e,3+Math.random()*12,0,7),i.fill()}function Gh(i,e,t,n=null,s={}){let r=cM[e.style],o=new Oe;i.add(o);let a=[];i.background=new ve(t.sky[2]),i.fog=new ua(t.fog,34,95);let l=uM(t.sky);o.add(l),e.style!=="stacks"&&o.add(dM(e.style==="slab"?700:400));let c=[];if(e.style==="slab"){c.push(Wa(34,fM,[40,-95,-60]),Wa(9,pM,[-30,-70,-20]),Wa(48,Tp(["#c7a27a","#e3c39a","#a9744f","#e8d3b0","#b8865c","#d9b98f","#a06a48"]),[-110,-120,-150]),Wa(30,Tp(["#e9d8a6","#d4bf8a","#f0e2b8","#c9b07a"]),[120,-105,-110],!0));for(let te of c)o.add(te)}let u=new wa(r.hemi[0],r.hemi[1],r.hemi[2]);o.add(u);let h=new gr(r.sun[0],r.sun[1]*1.3),f=new N(...r.sun[2]).normalize();if(o.add(h,h.target),s.shadows){h.castShadow=!0,h.shadow.mapSize.set(1024,1024);let te=h.shadow.camera;te.left=te.bottom=-16,te.right=te.top=16,te.near=1,te.far=80,h.shadow.bias=-8e-4,h.shadow.normalBias=.03}let p=r.floor(),m=r.wall(),x=r.top();a.push(p,m,x);let g;r.pbr&&r.pbr.floor?(g=new We({...Er(r.pbr.floor),color:r.pbr.tint,roughness:1,metalness:r.pbr.glowFloor?.2:.05,normalScale:new be(1.2,1.2)}),r.pbr.glowFloor&&(g.emissive=new ve("#ff7ad9"),g.emissiveIntensity=.75,g.emissiveMap=p)):g=new We({map:p,roughness:.88,metalness:.05});let d=hM(e,g,r.pbr?.25:.5);d.receiveShadow=!0,o.add(d),a.push(d.geometry,d.material);let b=r.wallH,y=new Ct(2,b,2);y.translate(0,b/2,0);let M=r.pbr&&r.pbr.wall&&e.style==="stone"?new We({...Er(r.pbr.wall),color:"#f0dcc0",roughness:1}):new We({map:m,roughness:.85,...r.pbr&&r.pbr.wall?{normalMap:Er(r.pbr.wall).normalMap,metalness:.5}:{}}),C=new We({map:x,roughness:.9});e.style==="slab"&&(M.emissive=new ve("#ff7ad9"),M.emissiveIntensity=.25,M.emissiveMap=m);let T=[M,M,C,C,M,M],E=[...e.walls].map(te=>te.split(",").map(Number)),I=[],_=[];for(let te of e.inner){let[V,j]=te.split(",").map(Number),X=e.roomAt((V+.5)*2,(j+.5)*2);(X&&X.pillars?_:I).push([V,j])}let v=new Fi(y,T,E.length+I.length),w=new Be,U=new ve;if([...E,...I].forEach(([te,V],j)=>{w.makeTranslation((te+.5)*2,0,(V+.5)*2),v.setMatrixAt(j,w),U.setHSL(0,0,.82+Math.random()*.18),v.setColorAt(j,U)}),v.castShadow=v.receiveShadow=!0,v.instanceMatrix.needsUpdate=!0,v.instanceColor&&(v.instanceColor.needsUpdate=!0),o.add(v),a.push(y,M,C),_.length){let te=new vt(.55,.68,b+.6,12);te.translate(0,(b+.6)/2,0);let V=r.pbr&&(r.pbr.pillar||r.pbr.wall)?new We({...Er(r.pbr.pillar||r.pbr.wall),color:"#e8d4b8",roughness:1}):new We({map:m,roughness:.8}),j=new Fi(te,V,_.length);j.castShadow=j.receiveShadow=!0;let X=new Fi(new Ct(1.6,.3,1.6),new We({color:ae.gold,roughness:.4,metalness:.6}),_.length);_.forEach(([oe,ee],Te)=>{w.makeTranslation((oe+.5)*2,0,(ee+.5)*2),j.setMatrixAt(Te,w),w.makeTranslation((oe+.5)*2,b+.6,(ee+.5)*2),X.setMatrixAt(Te,w)}),j.instanceMatrix.needsUpdate=!0,X.instanceMatrix.needsUpdate=!0,o.add(j,X),a.push(te,V)}let S=new ue(new wn(600,600),new We({color:e.style==="stone"?"#0d1a3a":e.style==="slab"?"#1a0a22":"#050308",roughness:1,metalness:0}));S.rotation.x=-Math.PI/2,S.position.y=-.5,e.style!=="slab"&&o.add(S);let D=[];for(let te of e.torches){let V=te.dir==="S"?[0,1]:te.dir==="N"?[0,-1]:te.dir==="E"?[1,0]:[-1,0],j=te.x+V[0]*1.02,X=te.z+V[1]*1.02,oe=new Oe;if(oe.position.set(j,0,X),r.torch.kind==="flame"){let k=new ue(new Ct(.18,.5,.18),new We({color:"#2a1a10"}));k.position.y=r.torch.y-.3,oe.add(k);let rt=new ue(new vt(.2,.1,.18,8),new We({color:ae.gold,metalness:.7,roughness:.3}));rt.position.y=r.torch.y-.02,oe.add(rt)}else if(r.torch.kind==="pylon"){let k=new ue(new vt(.08,.12,r.torch.y,8),new We({color:"#3b1d45",emissive:ae.pink,emissiveIntensity:.8}));k.position.y=r.torch.y/2,oe.add(k)}else{let k=new ue(new vt(.07,.09,.5,8),new We({color:"#efe3c0"}));k.position.y=r.torch.y-.25,oe.add(k);let rt=new ue(new vt(.16,.2,.9,8),new We({color:"#1a100a"}));rt.position.y=r.torch.y-.95,oe.add(rt)}let ee=bt(r.torch.col,r.torch.kind==="candle"?.9:1.6,.75),Te=bt("#fff2c0",r.torch.kind==="candle"?.35:.6,.9);ee.position.y=Te.position.y=r.torch.y+.22,oe.add(ee,Te),o.add(oe),D.push({g:oe,outer:ee,inner:Te,x:j,z:X,seed:Math.random()*10})}let z=[];for(let te=0;te<6;te++){let V=new jn(r.torch.light,0,r.torch.dist,2);V.position.set(0,-50,0),o.add(V),z.push(V)}let P=e.gateCells,O=new Oe;if(P.length){let te=(P[0][0]+P[1][0]+1)/2*2,V=(P[0][1]+P[1][1]+1)/2*2,j=P[0][1]===P[1][1],X=new We({color:"#15151c",emissive:ae.char,emissiveIntensity:.35,metalness:.8,roughness:.3});for(let Te=-3;Te<=3;Te++){let k=new ue(new vt(.09,.09,3.2,8),X);k.position.set(j?Te*.58:0,1.6,j?0:Te*.58),O.add(k)}let oe=new ue(new Ct(j?2*2:.3,.26,j?.3:2*2),X);oe.position.y=3.1,O.add(oe);let ee=oe.clone();ee.position.y=.4,O.add(ee),O.position.set(te,7,V),O.visible=!1,o.add(O)}yM(o,e,r,e.style),xM(o,e,r,n);let F=vM(o,e.style),$=MM(o,e,e.style),Y=7,ne=!1;function fe(){ne=!0,O.visible=!0,Y=0}function Ae(){ne=!1,Y=7}let J=0;function ce(te,V,j,X){for(let oe of D){let ee=.85+Math.sin(V*13+oe.seed)*.1+Math.sin(V*29+oe.seed*3)*.06;oe.outer.scale.setScalar((r.torch.kind==="candle"?.9:1.6)*ee),oe.inner.scale.setScalar((r.torch.kind==="candle"?.35:.6)*(2-ee))}if(J-=te,J<=0){J=.25;let oe=D.map(ee=>({tr:ee,d:(ee.x-j)**2+(ee.z-X)**2})).sort((ee,Te)=>ee.d-Te.d).slice(0,z.length);z.forEach((ee,Te)=>{let k=oe[Te];k&&k.d<30*30?(ee.userData.on=!0,ee.position.set(k.tr.x,r.torch.y+.3,k.tr.z),ee.userData.seed=k.tr.seed):ee.userData.on=!1})}for(let oe of z)oe.intensity=oe.userData.on?r.torch.intensity*(.85+Math.sin(V*11+(oe.userData.seed||0))*.15):0;for(let oe of c)oe.rotation.y+=te*.02;O.visible&&(O.position.y+=(Y-O.position.y)*Math.min(1,te*6),!ne&&O.position.y>6.5&&(O.visible=!1)),l.position.set(j,0,X),F.update(te,V,j,X);for(let oe of $)oe.material.opacity=oe.userData.base*(.75+Math.sin(V*.7+oe.userData.seed)*.25);h.target.position.set(j,0,X),h.position.set(j+f.x*40,f.y*40,X+f.z*40)}function xe(){i.remove(o);for(let te of a)te.dispose&&te.dispose();i.fog=null}return{group:o,update:ce,dispose:xe,gate:{seal:fe,open:Ae},wallH:b,style:e.style}}var mM={ramparts:{floor:["barrel_large","barrel_small_stack","keg_decorated","trunk_large_A","rubble_large","sword_shield_broken","box_stacked"],banners:["banner_patternA_red","banner_patternA_yellow","banner_shield_red"]},archive:{floor:["table_medium_decorated_A","trunk_medium_B","shelf_small_candles","candle_triple","coin_stack_large","barrel_small_stack"],banners:[]}};function gM(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function xM(i,e,t,n){let s=mM[t.props];if(!s||!n||!n.props)return;let r=gM(e.key.length*977+e.rooms.length),o=(c,u)=>c+","+u,a=[...e.boxes,e.start].map(c=>[Math.floor(c.x/2),Math.floor(c.z/2)]),l=(c,u,h,f,p=.5,m=0)=>{let x=n.props[c];if(!x)return!1;let g=x.clone(!0);return g.scale.setScalar(p),g.position.set(u,m,h),g.rotation.y=f,g.traverse(d=>{d.isMesh&&(d.castShadow=!0,d.receiveShadow=!0)}),i.add(g),!0};for(let c of e.rooms){if(c.kind==="boss")continue;let u=c.rect,h=[];for(let x=u.x0;x<u.x1;x++)for(let g=u.z0;g<u.z1;g++){if(e.solidCell(x,g))continue;let d=[[1,0],[-1,0],[0,1],[0,-1]].find(([b,y])=>e.walls.has(o(x+b,g+y)));d&&(c.doors.some(b=>Math.abs(b.x-x)<3&&Math.abs(b.z-g)<3)||a.some(([b,y])=>Math.abs(b-x)<2&&Math.abs(y-g)<2)||h.push([x,g,d]))}for(let x=h.length-1;x>0;x--){let g=Math.floor(r()*(x+1));[h[x],h[g]]=[h[g],h[x]]}let f=0,p=[],m=3+Math.floor(r()*3);for(let[x,g,[d,b]]of h){if(f>=m)break;if(p.some(([T,E])=>Math.abs(T-x)<3&&Math.abs(E-g)<3))continue;let y=s.floor[Math.floor(r()*s.floor.length)],M=(x+.5)*2+d*.35,C=(g+.5)*2+b*.35;l(y,M,C,Math.atan2(-d,-b)+(r()-.5)*.6)&&(e.inner.add(o(x,g)),p.push([x,g]),f++)}if(s.banners.length){let x=0;for(let g of e.torches){let d=Math.floor(g.x/2),b=Math.floor(g.z/2);if(d<u.x0-1||d>u.x1||b<u.z0-1||b>u.z1||x++%2)continue;let y=g.dir==="S"?[0,1]:g.dir==="N"?[0,-1]:g.dir==="E"?[1,0]:[-1,0],M=[y[1],-y[0]];l(s.banners[x%s.banners.length],g.x+y[0]*1.02+M[0]*1,g.z+y[1]*1.02+M[1]*1,Math.atan2(y[0],y[1]),.42,.2)}}}}function _M(i){let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d");t.strokeStyle=i,t.lineWidth=6,t.shadowColor=i,t.shadowBlur=18,t.strokeRect(10,10,236,236),Sr(t,128,128,88,i,5),Sr(t,128,128,44,i,3);let n=new Tn(e);return n.colorSpace=gt,n}var Ap={stone:{wall:"large_sandstone_blocks_01",tint:"#f0dcc0",rune:"#ffc65a"},slab:{wall:"metal_plate",tint:"#b8a8d8",rune:"#ff7ad9"},stacks:{wall:"cobblestone_03",tint:"#e8d4b8",rune:"#b89aff"}};function yM(i,e,t,n){if(!e.plinths||!e.plinths.size)return;let s=Ap[n]||Ap.stone,r=new We({...Er(s.wall),color:s.tint,roughness:1}),o=new We({...Er(s.wall),color:s.tint,roughness:.9}),a=new We({color:ae.gold,metalness:.75,roughness:.3,emissive:"#3a2a08",emissiveIntensity:.4}),l=new ke({map:_M(s.rune),transparent:!0,opacity:.55,blending:ht,depthWrite:!1}),c=new Ct(2,1,2),u=new Ct(2+.06,.1,2+.06),h=new wn(2*.9,2*.9);for(let[f,p]of e.plinths){let[m,x]=f.split(",").map(Number),g=(m+.5)*2,d=(x+.5)*2,b=new ue(c,[r,r,o,o,r,r]);b.scale.y=p,b.position.set(g,p/2,d),b.castShadow=b.receiveShadow=!0,i.add(b);let y=new ue(u,a);y.position.set(g,p-.05,d),i.add(y);let M=new ue(h,l);M.rotation.x=-Math.PI/2,M.position.set(g,p+.02,d),i.add(M)}}function vM(i,e){let s=new Float32Array(780),r=new Float32Array(260);for(let p=0;p<260;p++)s[p*3]=(Math.random()-.5)*16*2,s[p*3+1]=Math.random()*7,s[p*3+2]=(Math.random()-.5)*16*2,r[p]=Math.random()*6.28;let o=new lt;o.setAttribute("position",new Qe(s,3));let a=e==="slab"?"#ff9ae6":e==="stacks"?"#ffe2a8":"#ffaa55",l=new Bi({color:a,size:e==="stacks"?.07:.1,transparent:!0,opacity:.75,blending:ht,depthWrite:!1,map:bt(a,1).material.map}),c=new _i(o,l);c.frustumCulled=!1,i.add(c);let u=e==="stone"?.55:e==="slab"?.25:.08,h=0,f=0;return{update(p,m,x,g){let d=x-h,b=g-f;h=x,f=g;for(let y=0;y<260;y++){let M=s[y*3]-d,C=s[y*3+1]+u*p,T=s[y*3+2]-b;M+=Math.sin(m*.6+r[y])*.12*p,T+=Math.cos(m*.5+r[y])*.12*p,M>16?M-=2*16:M<-16&&(M+=2*16),T>16?T-=2*16:T<-16&&(T+=2*16),C>7&&(C-=7),s[y*3]=M,s[y*3+1]=C,s[y*3+2]=T}c.position.set(x,0,g),o.attributes.position.needsUpdate=!0}}}function MM(i,e,t){let n=document.createElement("canvas");n.width=64,n.height=256;let s=n.getContext("2d"),r=s.createLinearGradient(0,0,0,256);r.addColorStop(0,"rgba(255,255,255,0.9)"),r.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=r,s.fillRect(0,0,64,256);let o=s.createLinearGradient(0,0,64,0);o.addColorStop(0,"rgba(0,0,0,1)"),o.addColorStop(.5,"rgba(0,0,0,0)"),o.addColorStop(1,"rgba(0,0,0,1)"),s.globalCompositeOperation="destination-out",s.fillStyle=o,s.fillRect(0,0,64,256);let a=new Tn(n),l=t==="slab"?"#ffb2ec":t==="stacks"?"#b8a0ff":"#ffd9a0",c=[];for(let u of e.rooms){if(u.kind==="boss")continue;let h=u.center.x+(u.rect.x1-u.rect.x0)*.35,f=u.center.z-1;for(let p of[0,Math.PI/2]){let m=new ue(new wn(3.2,11),new ke({map:a,color:l,transparent:!0,opacity:.1,blending:ht,depthWrite:!1,side:xt}));m.position.set(h,4.8,f),m.rotation.set(0,p,-.28),m.userData={base:t==="stacks"?.14:.1,seed:Math.random()*6},i.add(m),c.push(m)}}return c}var ni=(i,e={})=>new We({color:i,roughness:.7,metalness:.05,...e});function Gn(i,e,t,n){return new ue(new Ct(i,e,t),n)}function Zi(i,e,t,n,s=10){return new ue(new vt(i,e,t,s),n)}function Xa(i,e,t=14,n=10){return new ue(new jt(i,t,n),e)}function bM(){let i=document.createElement("canvas");i.width=256,i.height=128;let e=i.getContext("2d");e.fillStyle="rgba(76,224,224,.08)",e.fillRect(0,0,256,128),e.strokeStyle="rgba(200,255,255,.9)",e.lineWidth=2;for(let n=0;n<5;n++)for(let s=0;s<8;s++){let r=s*34+n%2*17,o=n*30+8;e.beginPath();for(let a=0;a<6;a++){let l=a*Math.PI/3+Math.PI/6,c=r+Math.cos(l)*15,u=o+Math.sin(l)*15;a?e.lineTo(c,u):e.moveTo(c,u)}e.closePath(),e.stroke()}let t=new Tn(i);return t.colorSpace=gt,t.wrapS=t.wrapT=hn,t}function Rp(i,e){let t=new Oe;i.add(t);let n={skin:ni(e.skin),skinD:ni(e.skinD),robe:ni(e.robe),robeL:ni(e.robeL),robeD:ni(e.robeD),pant:ni(e.pant),hair:ni(e.hair,{roughness:.9}),gold:ni(e.wrapB,{metalness:.75,roughness:.3}),boot:ni("#0e0b14",{roughness:.6}),gem:new We({color:e.gem,emissive:e.gem,emissiveIntensity:1.2})},s=Object.values(n);t.add(Vn(.62));let r=new jn(e.aura,5,7,2);r.position.y=1.9,t.add(r);let o=new ue(new rn(.5,.78,40),new ke({color:e.aura,transparent:!0,opacity:.55,blending:ht,depthWrite:!1,side:xt}));o.rotation.x=-Math.PI/2,o.position.y=.05,t.add(o);let a=new Oe;t.add(a);let l=Gn(.5,.22,.3,n.pant);l.position.y=.98,a.add(l);let c=Gn(.54,.07,.34,n.gold);c.position.y=1.1,a.add(c);let u=Gn(.58,.6,.34,n.robe);u.position.y=1.42,a.add(u);let h=Gn(.3,.42,.04,n.gold);h.position.set(0,1.45,.18),a.add(h);let f=Gn(.62,.1,.38,n.robeL);f.position.y=1.72,a.add(f);for(let j of[-1,1]){let X=Xa(.13,n.robeL);X.position.set(j*.34,1.66,0),a.add(X)}let p=Zi(.08,.09,.12,n.skinD);p.position.y=1.8,a.add(p);let m=new Oe;m.position.y=1.98,a.add(m),m.add(Xa(.21,n.skin,16,12));let x=new ue(new jt(.235,16,8,0,Math.PI*2,0,Math.PI*.55),n.hair);if(x.position.y=.02,m.add(x),e.queen){let j=Zi(.06,.05,.55,n.hair);j.position.set(0,-.2,-.2),j.rotation.x=.35,m.add(j);let X=Xa(.2,n.hair,12,8);X.position.set(0,.16,-.06),X.scale.set(1.2,.8,1.1),m.add(X)}else{let j=Zi(.19,.24,.12,n.hair,12);j.position.y=.17,m.add(j)}let g=new ue(new Jn(.215,.028,8,24),n.gold);g.rotation.x=Math.PI/2,g.position.y=.06,m.add(g);let d=new ue(new fr(.05),n.gem);d.position.set(0,.06,.22),m.add(d);for(let j of[-1,1]){let X=new ue(new jt(.03,8,6),new ke({color:e.accent}));X.position.set(j*.08,-.01,.19),m.add(X)}function b(j){let X=new Oe;X.position.set(j*.36,1.62,0);let oe=Zi(.085,.075,.36,n.robeL);oe.position.y=-.18,X.add(oe);let ee=new Oe;ee.position.y=-.36,X.add(ee);let Te=Zi(.07,.06,.34,n.skin);Te.position.y=-.17,ee.add(Te);let k=Zi(.09,.09,.06,n.gold);k.position.y=-.04,ee.add(k);let rt=new Oe;return rt.position.y=-.36,ee.add(rt),rt.add(Xa(.075,n.skinD,10,8)),{g:X,elbow:ee,hand:rt}}let y=b(1),M=b(-1);a.add(y.g,M.g);let C=new Oe;C.rotation.x=Math.PI/2,y.hand.add(C),C.add(Gn(.11,.12,.42,ni("#141020",{metalness:.6,roughness:.35})));let T=Gn(.13,.14,.08,n.gold);T.position.z=.02,C.add(T);let E=new We({color:"#ffffff",emissive:"#C9A84C",emissiveIntensity:1.5}),I=new ue(new vt(.05,.06,.16,8),E);I.rotation.x=Math.PI/2,I.position.z=.27,C.add(I);let _=bt("#C9A84C",.5,.8);_.position.z=.3,C.add(_);let v=new ke({color:e.aura,transparent:!0,opacity:.95,blending:ht,depthWrite:!1}),w=new Oe;w.visible=!1,M.hand.add(w);let U=new ue(new Ct(.06,.06,2),new ke({color:"#ffffff",transparent:!0,opacity:.95,blending:ht,depthWrite:!1}));U.position.z=1,w.add(U);let S=new ue(new Ct(.16,.12,2.1),v);S.position.z=1.05,w.add(S);let D=Gn(.08,.08,.26,n.gold);D.position.z=-.05,w.add(D);let z=new ue(new rn(.5,vr,28,1,-Qn,Qn*2),new ke({color:e.aura,transparent:!0,opacity:0,blending:ht,depthWrite:!1,side:xt}));z.rotation.x=-Math.PI/2,z.rotation.z=-Math.PI/2,z.position.y=1.05,t.add(z);let P=new ke({map:bM(),color:e.accent,transparent:!0,opacity:0,blending:ht,depthWrite:!1,side:xt}),O=new ue(new vt(1.05,1.05,2,24,1,!0,-Ki,Ki*2),P);O.position.y=1.05,t.add(O);let F=bt(e.accent,2.6,0);F.position.set(0,1,.7),t.add(F);function $(j){let X=new Oe;X.position.set(j*.15,.9,0);let oe=Zi(.11,.095,.42,n.pant);oe.position.y=-.21,X.add(oe);let ee=new Oe;ee.position.y=-.42,X.add(ee);let Te=Zi(.09,.08,.4,n.pant);Te.position.y=-.2,ee.add(Te);let k=Gn(.2,.14,.32,n.boot);k.position.set(0,-.45,.05),ee.add(k);let rt=Gn(.22,.04,.34,n.gold);return rt.position.set(0,-.39,.05),ee.add(rt),{g:X,knee:ee}}let Y=$(1),ne=$(-1);a.add(Y.g,ne.g);let fe=null;if(!e.queen)fe=Gn(.5,.72,.07,n.robeD),fe.position.set(0,.62,-.19),a.add(fe);else{let j=new ue(new vt(.3,.46,.4,14,1,!0),n.robeL);j.position.y=.78,a.add(j)}let Ae={phase:0,bladeT:-1,bladeN:0,hurtT:0};function J(j){E.emissive.set(j),_.material.color.set(j)}function ce(j){Ae.bladeT=0,Ae.bladeN=j,w.visible=!0}function xe(){Ae.hurtT=.18}function te(j,X,oe){t.position.set(oe.x,0,oe.z),t.rotation.y=Math.atan2(oe.fx,oe.fz),t.visible=oe.alive&&!(oe.invuln>0&&Math.floor(X*14)%2===0);let ee=oe.mv;Ae.phase+=j*(9+ee*4)*(ee>.05?1:0);let Te=Math.sin(Ae.phase)*.8*ee,k=Math.abs(Math.sin(Ae.phase))*.07*ee,rt=oe.mvx*oe.fx+oe.mvz*oe.fz,He=oe.mvx*oe.fz-oe.mvz*oe.fx;a.position.y=k,a.rotation.x=oe.dashing?.55:.16*rt*ee,a.rotation.z=-.14*He*ee,Y.g.rotation.x=oe.dashing?-.9:Te,ne.g.rotation.x=oe.dashing?.9:-Te,Y.knee.rotation.x=Math.max(0,-Te)*1.2,ne.knee.rotation.x=Math.max(0,Te)*1.2,u.scale.y=1+Math.sin(X*2.1)*.015*(1-ee);let Ge=oe.firing||oe.charge>.05||ee<.05;if(y.g.rotation.x=Ge?-Math.PI/2+.1:-Te*.9,y.g.rotation.z=Ge?-.12:0,y.elbow.rotation.x=Ge?0:-.5,Ae.bladeT>=0){Ae.bladeT+=j/.22;let Xe=Math.min(1,Ae.bladeT),Pe=Ae.bladeN,L=Pe===2?-1.4:Pe===1?-Qn:Qn,A=Pe===2?-1.6:-L;M.g.rotation.x=-Math.PI/2+(Pe===2?Xe<.4?-.6*(1-Xe/.4):.35*(Xe-.4)/.6:0),M.g.rotation.y=Pe===2?0:L+(A-L)*(Xe<.5?2*Xe*Xe:1-2*(1-Xe)*(1-Xe)),M.g.rotation.z=0,M.elbow.rotation.x=0,z.material.opacity=.55*(1-Xe),z.scale.setScalar(Pe===2?1.25:1),Ae.bladeT>=1.6&&(Ae.bladeT=-1,w.visible=!1,z.material.opacity=0)}else oe.ward?(M.g.rotation.x=-Math.PI/2+.3,M.g.rotation.y=.3,M.g.rotation.z=.2,M.elbow.rotation.x=-.6):(M.g.rotation.x=Te*.9,M.g.rotation.y=0,M.g.rotation.z=.08,M.elbow.rotation.x=-.5);let Ue=oe.ward?1:0;if(P.opacity+=(.7*Ue-P.opacity)*Math.min(1,j*14),F.material.opacity=P.opacity*.5,O.scale.setScalar(.8+.2*P.opacity/.7),P.map.offset.y=X*.15,oe.parryFlash>0?(P.color.set("#ffffff"),P.opacity=1):P.color.set(e.accent),o.material.opacity=.4+Math.sin(X*3)*.12+(oe.charge>0?oe.charge*.4:0),o.scale.setScalar(1+Math.sin(X*3)*.05+oe.charge*.5),_.scale.setScalar(.5+oe.charge*1.4+(oe.firing?.25:0)),fe&&(fe.rotation.x=-.25*ee-Math.sin(Ae.phase)*.15*ee),Ae.hurtT>0){Ae.hurtT-=j;for(let Xe of s)Xe.emissive.set("#ff2b2b"),Xe.emissiveIntensity=Ae.hurtT/.18*1.5}else for(let Xe of s)Xe!==n.gem&&(Xe.emissiveIntensity=0)}function V(){i.remove(t)}return{group:t,update:te,setWeaponColor:J,playBlade:ce,hurtFlash:xe,dispose:V,radius:yn}}function Ip(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new lt,c=0;for(let u=0;u<i.length;++u){let h=i[u],f=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in h.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(h.attributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in h.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(h.morphAttributes[p])}if(e){let p;if(t)p=h.index.count;else if(h.attributes.position!==void 0)p=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,u),c+=p}}if(t){let u=0,h=[];for(let f=0;f<i.length;++f){let p=i[f].index;for(let m=0;m<p.count;++m)h.push(p.getX(m)+u);u+=i[f].attributes.position.count}l.setIndex(h)}for(let u in r){let h=Cp(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(let u in o){let h=o[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<h;++f){let p=[];for(let x=0;x<o[u].length;++x)p.push(o[u][x][f]);let m=Cp(p);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(m)}}return l}function Cp(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let u=i[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}let o=new e(r),a=new Qe(o,t,n),l=0;for(let c=0;c<i.length;++c){let u=i[c];if(u.isInterleavedBufferAttribute){let h=l/t;for(let f=0,p=u.count;f<p;f++)for(let m=0;m<t;m++){let x=u.getComponent(f,m);a.setComponent(f+h,m,x)}}else o.set(u.array,l);l+=u.count*t}return s!==void 0&&(a.gpuType=s),a}function Wh(i,e){if(e===yf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===ro||e===Pa){let t=i.getIndex();if(t===null){let o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===ro)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var qa=class extends bi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Jh(t)}),this.register(function(t){return new jh(t)}),this.register(function(t){return new au(t)}),this.register(function(t){return new lu(t)}),this.register(function(t){return new cu(t)}),this.register(function(t){return new eu(t)}),this.register(function(t){return new tu(t)}),this.register(function(t){return new nu(t)}),this.register(function(t){return new iu(t)}),this.register(function(t){return new $h(t)}),this.register(function(t){return new su(t)}),this.register(function(t){return new Qh(t)}),this.register(function(t){return new ou(t)}),this.register(function(t){return new ru(t)}),this.register(function(t){return new Kh(t)}),this.register(function(t){return new hu(t)}),this.register(function(t){return new uu(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=Wi.extractUrlBase(e);o=Wi.resolveURL(c,this.path)}else o=Wi.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new no(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Up){try{o[et.KHR_BINARY_GLTF]=new du(e)}catch(h){s&&s(h);return}r=JSON.parse(o[et.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new yu(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case et.KHR_MATERIALS_UNLIT:o[h]=new Zh;break;case et.KHR_DRACO_MESH_COMPRESSION:o[h]=new fu(r,this.dracoLoader);break;case et.KHR_TEXTURE_TRANSFORM:o[h]=new pu;break;case et.KHR_MESH_QUANTIZATION:o[h]=new mu;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function EM(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}var et={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Kh=class{constructor(e){this.parser=e,this.name=et.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,u=new ve(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Qt);let h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new gr(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new jn(u),c.distance=h;break;case"spot":c=new Ta(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Ei(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}},Zh=class{constructor(){this.name=et.KHR_MATERIALS_UNLIT}getMaterialType(){return ke}extendParams(e,t,n){let s=[];e.color=new ve(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Qt),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,gt))}return Promise.all(s)}},$h=class{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Jh=class{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new be(a,a)}return Promise.all(r)}},jh=class{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},Qh=class{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},eu=class{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new ve(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Qt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,gt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},tu=class{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},nu=class{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new ve().setRGB(a[0],a[1],a[2],Qt),Promise.all(r)}},iu=class{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},su=class{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new ve().setRGB(a[0],a[1],a[2],Qt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,gt)),Promise.all(r)}},ru=class{constructor(e){this.parser=e,this.name=et.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},ou=class{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},au=class{constructor(e){this.parser=e,this.name=et.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},lu=class{constructor(e){this.parser=e,this.name=et.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},cu=class{constructor(e){this.parser=e,this.name=et.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},hu=class{constructor(e){this.name=et.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,s.mode,s.filter).then(function(p){return p.buffer}):o.ready.then(function(){let p=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(p),u,h,f,s.mode,s.filter),p})})}else return null}},uu=class{constructor(e){this.name=et.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==Rn.TRIANGLES&&c.mode!==Rn.TRIANGLE_STRIP&&c.mode!==Rn.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,p=[];for(let m of h){let x=new Be,g=new N,d=new At,b=new N(1,1,1),y=new Fi(m.geometry,m.material,f);for(let M=0;M<f;M++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,M),l.ROTATION&&d.fromBufferAttribute(l.ROTATION,M),l.SCALE&&b.fromBufferAttribute(l.SCALE,M),y.setMatrixAt(M,x.compose(g,d,b));for(let M in l)if(M==="_COLOR_0"){let C=l[M];y.instanceColor=new xs(C.array,C.itemSize,C.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&m.geometry.setAttribute(M,l[M]);Rt.prototype.copy.call(y,m),this.parser.assignFinalMaterial(y),p.push(y)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}},Up="glTF",uo=12,Pp={JSON:1313821514,BIN:5130562},du=class{constructor(e){this.name=et.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,uo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Up)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-uo,r=new DataView(e,uo),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===Pp.JSON){let c=new Uint8Array(e,uo+o,a);this.content=n.decode(c)}else if(l===Pp.BIN){let c=uo+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},fu=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=et.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let u in o){let h=xu[u]||u.toLowerCase();a[h]=o[u]}for(let u in e.attributes){let h=xu[u]||u.toLowerCase();if(o[u]!==void 0){let f=n.accessors[e.attributes[u]],p=wr[f.componentType];c[h]=p.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,f){s.decodeDracoFile(u,function(p){for(let m in p.attributes){let x=p.attributes[m],g=l[m];g!==void 0&&(x.normalized=g)}h(p)},a,c,Qt,f)})})}},pu=class{constructor(){this.name=et.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},mu=class{constructor(){this.name=et.KHR_MESH_QUANTIZATION}},Ya=class extends ki{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=s-t,h=(n-t)/u,f=h*h,p=f*h,m=e*c,x=m-c,g=-2*p+3*f,d=p-f,b=1-g,y=d-f+h;for(let M=0;M!==a;M++){let C=o[x+M+a],T=o[x+M+l]*u,E=o[m+M+a],I=o[m+M]*u;r[M]=b*C+y*T+g*E+d*I}return r}},SM=new At,gu=class extends Ya{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return SM.fromArray(r).normalize().toArray(r),r}},Rn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},wr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Lp={9728:Jt,9729:cn,9984:lh,9985:Xr,9986:Xs,9987:Yn},Dp={33071:fi,33648:Zr,10497:hn},Xh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},xu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},$i={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},wM={CUBICSPLINE:void 0,LINEAR:rr,STEP:sr},qh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function TM(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new We({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Zn})),i.DefaultMaterial}function Ms(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Ei(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function AM(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){let h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){let h=e[c];if(n){let f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;o.push(f)}if(s){let f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;a.push(f)}if(r){let f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let u=c[0],h=c[1],f=c[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function RM(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function CM(i){let e,t=i.extensions&&i.extensions[et.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Yh(t.attributes):e=i.indices+":"+Yh(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Yh(i.targets[n]);return e}function Yh(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function _u(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function IM(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var PM=new Be,yu=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new EM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new pr(this.options.manager):this.textureLoader=new Aa(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new no(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return Ms(r,a,s),Ei(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,u]of o.children.entries())r(u,a.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[et.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(Wi.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=Xh[s.type],a=wr[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new Qe(c,o,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=Xh[s.type],c=wr[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=s.byteOffset||0,p=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,m=s.normalized===!0,x,g;if(p&&p!==h){let d=Math.floor(f/p),b="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+d+":"+s.count,y=t.cache.get(b);y||(x=new c(a,d*p,s.count*p/u),y=new cr(x,p/u),t.cache.add(b,y)),g=new ms(y,l,f%p/u,m)}else a===null?x=new c(s.count*l):x=new c(a,f,s.count*l),g=new Qe(x,l,m);if(s.sparse!==void 0){let d=Xh.SCALAR,b=wr[s.sparse.indices.componentType],y=s.sparse.indices.byteOffset||0,M=s.sparse.values.byteOffset||0,C=new b(o[1],y,s.sparse.count*d),T=new c(o[2],M,s.sparse.count*l);a!==null&&(g=new Qe(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let E=0,I=C.length;E<I;E++){let _=C[E];if(g.setX(_,T[E*l]),l>=2&&g.setY(_,T[E*l+1]),l>=3&&g.setZ(_,T[E*l+2]),l>=4&&g.setW(_,T[E*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let f=(r.samplers||{})[o.sampler]||{};return u.magFilter=Lp[f.magFilter]||cn,u.minFilter=Lp[f.minFilter]||Yn,u.wrapS=Dp[f.wrapS]||hn,u.wrapT=Dp[f.wrapT]||hn,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Jt&&u.minFilter!==cn,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let o=s.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;let f=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(l).then(function(h){return new Promise(function(f,p){let m=f;t.isImageBitmapLoader===!0&&(m=function(x){let g=new Vt(x);g.needsUpdate=!0,f(g)}),t.load(Wi.resolveURL(h,r.path),m,void 0,p)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),Ei(h,o),h.userData.mimeType=o.mimeType||IM(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[et.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[et.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[et.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Bi,un.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new to,un.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return We}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},l=r.extensions||{},c=[];if(l[et.KHR_MATERIALS_UNLIT]){let h=s[et.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{let h=r.pbrMetallicRoughness||{};if(a.color=new ve(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){let f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],Qt),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,gt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=xt);let u=r.alphaMode||qh.OPAQUE;if(u===qh.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===qh.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==ke&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new be(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==ke&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==ke){let h=r.emissiveFactor;a.emissive=new ve().setRGB(h[0],h[1],h[2],Qt)}return r.emissiveTexture!==void 0&&o!==ke&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,gt)),Promise.all(c).then(function(){let h=new o(a);return r.name&&(h.name=r.name),Ei(h,r),t.associations.set(h,{materials:e}),r.extensions&&Ms(s,h,r),h})}createUniqueName(e){let t=at.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[et.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Np(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],u=CM(c),h=s[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[et.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=Np(new lt,c,t),s[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let u=o[l].material===void 0?TM(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let p=0,m=u.length;p<m;p++){let x=u[p],g=o[p],d,b=c[p];if(g.mode===Rn.TRIANGLES||g.mode===Rn.TRIANGLE_STRIP||g.mode===Rn.TRIANGLE_FAN||g.mode===void 0)d=r.isSkinnedMesh===!0?new hr(x,b):new ue(x,b),d.isSkinnedMesh===!0&&d.normalizeSkinWeights(),g.mode===Rn.TRIANGLE_STRIP?d.geometry=Wh(d.geometry,Pa):g.mode===Rn.TRIANGLE_FAN&&(d.geometry=Wh(d.geometry,ro));else if(g.mode===Rn.LINES)d=new xa(x,b);else if(g.mode===Rn.LINE_STRIP)d=new dr(x,b);else if(g.mode===Rn.LINE_LOOP)d=new _a(x,b);else if(g.mode===Rn.POINTS)d=new _i(x,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(d.geometry.morphAttributes).length>0&&RM(d,r),d.name=t.createUniqueName(r.name||"mesh_"+e),Ei(d,r),g.extensions&&Ms(s,d,g),t.assignFinalMaterial(d),h.push(d)}for(let p=0,m=h.length;p<m;p++)t.associations.set(h[p],{meshes:e,primitives:p});if(h.length===1)return r.extensions&&Ms(s,h[0],r),h[0];let f=new Oe;r.extensions&&Ms(s,f,r),t.associations.set(f,{meshes:e});for(let p=0,m=h.length;p<m;p++)f.add(h[p]);return f})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new zt(bf.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new zi(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Ei(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],l=[];for(let c=0,u=o.length;c<u;c++){let h=o[c];if(h){a.push(h);let f=new Be;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new ur(a,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,f=s.channels.length;h<f;h++){let p=s.channels[h],m=s.samplers[p.sampler],x=p.target,g=x.node,d=s.parameters!==void 0?s.parameters[m.input]:m.input,b=s.parameters!==void 0?s.parameters[m.output]:m.output;x.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",d)),l.push(this.getDependency("accessor",b)),c.push(m),u.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){let f=h[0],p=h[1],m=h[2],x=h[3],g=h[4],d=[];for(let b=0,y=f.length;b<y;b++){let M=f[b],C=p[b],T=m[b],E=x[b],I=g[b];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();let _=n._createAnimationTracks(M,C,T,E,I);if(_)for(let v=0;v<_.length;v++)d.push(_[v])}return new Gi(r,void 0,d)})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(f,PM)});for(let p=0,m=h.length;p<m;p++)u.add(h[p]);return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new gs:c.length>1?u=new Oe:c.length===1?u=c[0]:u=new Rt,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),Ei(u,r),r.extensions&&Ms(n,u,r),r.matrix!==void 0){let h=new Be;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new Oe;n.name&&(r.name=s.createUniqueName(n.name)),Ei(r,n),n.extensions&&Ms(t,r,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);let c=u=>{let h=new Map;for(let[f,p]of s.associations)(f instanceof un||f instanceof Vt)&&h.set(f,p);return u.traverse(f=>{let p=s.associations.get(f);p!=null&&h.set(f,p)}),h};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,l=[];$i[r.path]===$i.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch($i[r.path]){case $i.weights:c=yi;break;case $i.rotation:c=vi;break;case $i.position:case $i.scale:c=Mi;break;default:switch(n.itemSize){case 1:c=yi;break;case 2:case 3:default:c=Mi;break}break}let u=s.interpolation!==void 0?wM[s.interpolation]:rr,h=this._getArrayFromAccessor(n);for(let f=0,p=l.length;f<p;f++){let m=new c(l[f]+"."+$i[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),o.push(m)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=_u(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof vi?gu:Ya;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function LM(i,e,t){let n=e.attributes,s=new Wt;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new N(l[0],l[1],l[2]),new N(c[0],c[1],c[2])),a.normalized){let u=_u(wr[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new N,l=new N;for(let c=0,u=r.length;c<u;c++){let h=r[c];if(h.POSITION!==void 0){let f=t.json.accessors[h.POSITION],p=f.min,m=f.max;if(p!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(m[2]))),f.normalized){let x=_u(wr[f.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new sn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Np(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(let o in n){let a=xu[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return je.workingColorSpace!==Qt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${je.workingColorSpace}" not supported.`),Ei(i,e),LM(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?AM(i,e.targets,t):i})}function vu(i){let e=new Map,t=new Map,n=i.clone();return Op(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Op(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)Op(i.children[n],e.children[n],t)}var Za=i=>at.sanitizeNodeName(i),Bp={hips:"root",spine:"hips",chest:"spine",head:"chest","upperarm.l":"chest","lowerarm.l":"upperarm.l","wrist.l":"lowerarm.l","hand.l":"wrist.l","handslot.l":"hand.l","upperarm.r":"chest","lowerarm.r":"upperarm.r","wrist.r":"lowerarm.r","hand.r":"wrist.r","handslot.r":"hand.r","upperleg.l":"hips","lowerleg.l":"upperleg.l","foot.l":"lowerleg.l","toes.l":"foot.l","upperleg.r":"hips","lowerleg.r":"upperleg.r","foot.r":"lowerleg.r","toes.r":"foot.r"},bs=["root",...Object.keys(Bp)],kp={hipsY:.406,armLen:.576};async function Hp(i,e){let t=await i.loadAsync(e),n={};t.scene.traverse(r=>{for(let o of bs)r.name===Za(o)&&(n[o]={q:r.quaternion.clone(),p:r.position.clone()})});for(let r of bs)if(!n[r])throw new Error("anim library is missing bone "+r);let s={};for(let r of t.animations)s[r.name]=r;return{rest:n,clips:s}}function DM(i){let e=new lt;for(let t of["position","normal","uv"]){let n=i.getAttribute(t);if(!n)continue;let s=new Float32Array(n.count*n.itemSize);for(let r=0;r<n.count;r++)for(let o=0;o<n.itemSize;o++)s[r*n.itemSize+o]=n.getComponent(r,o);e.setAttribute(t,new Qe(s,n.itemSize))}i.index&&e.setIndex(Array.from(i.index.array));for(let t of i.groups)e.addGroup(t.start,t.count,t.materialIndex);return e}function NM(i,e,t){i.updateMatrixWorld(!0);let n=[],s=[];if(i.traverse(l=>{if(!l.isMesh)return;let c=DM(l.geometry);c.applyMatrix4(l.matrixWorld),c.attributes.normal||c.computeVertexNormals(),n.push(c),s.push(l.material)}),!n.length)throw new Error("model has no meshes");let r=n.length===1?n[0]:Ip(n,!0);r.rotateY(e),r.computeBoundingBox();let o=r.boundingBox,a=t/(o.max.y-o.min.y);return r.translate(-(o.min.x+o.max.x)/2,-o.min.y,-(o.min.z+o.max.z)/2),r.scale(a,a,a),r.computeBoundingBox(),{geo:r,mats:s.length===1?s[0]:s}}function UM(i,e,t){let n=i.array,s=i.count,r={x:e*(t.shoulder??.105),y:e*.815},o=l=>{let c=null,u=-1;for(let h=0;h<s;h++){let f=n[h*3]*l,p=n[h*3+1];p>e*.36&&p<e*.64&&f>u&&(u=f,c=[n[h*3],p,n[h*3+2]])}return c},a=l=>{let c=0,u=0;for(let h=0;h<s;h++){let f=n[h*3];n[h*3+1]<e*.07&&f*l>e*.01&&(c+=f,u++)}return u?c/u:l*e*.07};return{sh:r,tipL:o(1),tipR:o(-1),ankleL:a(1),ankleR:a(-1),hipsY:e*.5,spineY:e*.6,chestY:e*.7,headY:e*.855,legX:e*(t.hipWidth??.085),legTopY:e*.49}}function OM(i,e,t){let n={};for(let o of bs){let a=new gs;a.name=Za(o),a.quaternion.copy(i.rest[o].q),n[o]=a}for(let[o,a]of Object.entries(Bp))n[a].add(n[o]);n.hips.position.set(0,e.hipsY,0),n.spine.position.set(0,e.spineY-e.hipsY,0),n.chest.position.set(0,e.chestY-e.spineY,0),n.head.position.set(0,e.headY-e.chestY,0);let s=new N(0,1,0),r=(o,a,l,c)=>{let u=s.clone().applyQuaternion(a),h=new N().subVectors(c,l).normalize();o.quaternion.copy(new At().setFromUnitVectors(u,h).multiply(a))};for(let[o,a,l,c]of[["l",1,e.tipL,e.ankleL],["r",-1,e.tipR,e.ankleR]]){let u=new N(a*e.sh.x,e.sh.y,0),h=l?new N(...l):u.clone().add(new N(a*.2*t,-.38*t,0)),f=u.distanceTo(h);n["upperarm."+o].position.set(a*e.sh.x,e.sh.y-e.chestY,0),r(n["upperarm."+o],i.rest["upperarm."+o].q,u,h),n["lowerarm."+o].position.set(0,f*.42,0),n["wrist."+o].position.set(0,f*.38,0),n["hand."+o].position.set(0,f*.08,0),n["handslot."+o].position.copy(i.rest["handslot."+o].p).multiplyScalar(f/kp.armLen);let p=new N(a*e.legX,e.legTopY,0),m=new N(c,t*.045,0),x=p.distanceTo(m);n["upperleg."+o].position.set(a*e.legX,e.legTopY-e.hipsY,0),r(n["upperleg."+o],i.rest["upperleg."+o].q,p,m),n["lowerleg."+o].position.set(0,x*.5,0),n["foot."+o].position.set(0,x*.5,0),n["toes."+o].position.set(0,t*.075,0)}return n}var zM=["hips","spine","chest","head","upperarm.l","lowerarm.l","wrist.l","hand.l","upperarm.r","lowerarm.r","wrist.r","hand.r","upperleg.l","lowerleg.l","foot.l","upperleg.r","lowerleg.r","foot.r"],zp={hips:"spine",spine:"chest",chest:"head","upperarm.l":"lowerarm.l","lowerarm.l":"wrist.l","wrist.l":"hand.l","upperarm.r":"lowerarm.r","lowerarm.r":"wrist.r","wrist.r":"hand.r","upperleg.l":"lowerleg.l","lowerleg.l":"foot.l","foot.l":"toes.l","upperleg.r":"lowerleg.r","lowerleg.r":"foot.r","foot.r":"toes.r"},Ka=new N,Fp=new N,FM=new N;function BM(i,e,t){Ka.subVectors(t,e),Fp.subVectors(i,e);let n=Math.max(0,Math.min(1,Fp.dot(Ka)/Math.max(Ka.lengthSq(),1e-9)));return i.distanceTo(FM.copy(e).addScaledVector(Ka,n))}function kM(i,e,t,n){let s={};bs.forEach((p,m)=>{s[p]=m});let r=zM.map(p=>{let m=e[p].getWorldPosition(new N),x;if(zp[p])x=e[zp[p]].getWorldPosition(new N);else if(p==="head")x=m.clone().add(new N(0,n*.15,0));else{let d=e["wrist."+p.slice(-1)].getWorldPosition(new N);x=m.clone().add(m.clone().sub(d).normalize().multiplyScalar(n*.1))}let g=p.endsWith(".l")?1:p.endsWith(".r")?-1:0;return{n:p,i:s[p],a:m,b:x,side:g,leg:p.includes("leg")||p.startsWith("foot"),arm:p.includes("arm")||p.startsWith("wrist")||p.startsWith("hand")}}),o=i.attributes.position,a=o.count,l=new Uint16Array(a*4),c=new Float32Array(a*4),u=new N,h=n*.02,f=[];for(let p=0;p<a;p++){u.fromBufferAttribute(o,p),f.length=0;for(let x of r){if(x.side&&u.x*x.side<-n*.02||x.leg&&u.y>t.hipsY+n*.02||x.arm&&(u.y<n*.3||Math.abs(u.x)<n*.07)||x.n==="head"&&u.y<n*.78)continue;let g=BM(u,x.a,x.b);x.arm&&g>n*.075||x.leg&&g>n*.1||f.push([x.i,1/Math.pow(g+h,4)])}f.sort((x,g)=>g[1]-x[1]);let m=0;for(let x=0;x<4&&x<f.length;x++)m+=f[x][1];for(let x=0;x<4;x++)l[p*4+x]=f[x]?f[x][0]:0,c[p*4+x]=f[x]?f[x][1]/(m||1):0}i.setAttribute("skinIndex",new ar(l,4)),i.setAttribute("skinWeight",new tt(c,4))}var Tr=["spine","chest","head","upperarm.l","lowerarm.l","wrist.l","hand.l","handslot.l","upperarm.r","lowerarm.r","wrist.r","hand.r","handslot.r"],fo=bs.filter(i=>!Tr.includes(i));function HM(i,e,t=null){let n=new Set((t||bs).map(Za)),s=[];for(let r of i.tracks){let{nodeName:o,propertyName:a}=at.parseTrackName(r.name);if(n.has(o)){if(a==="quaternion")s.push(r.clone());else if(a==="position"&&o===Za("hips")){let l=r.clone(),c=e/kp.hipsY;for(let u=0;u<l.values.length;u++)l.values[u]*=c;s.push(l)}}}return new Gi(i.name+(t===Tr?":upper":t===fo?":lower":""),i.duration,s)}function Mu(i,e,t={}){let n=t.height??1.8,{geo:s,mats:r}=NM(i,t.yaw??-Math.PI/2,n),o=UM(s.attributes.position,n,t.build||{}),a=OM(e,o,n),l=new hr(s,r);l.add(a.root),l.updateMatrixWorld(!0),kM(s,a,o,n),l.bind(new ur(bs.map(m=>a[m]))),s.boundingSphere=new sn(new N(0,n*.5,0),n*.9);let c={},u=(m,x=null)=>{let g=m+"|"+(x===Tr?"u":x===fo?"l":"f");if(c[g])return c[g];let d=e.clips[m];return d?c[g]=HM(d,o.hipsY,x):null},h=new _s(l),f={};return{mesh:l,bones:a,mixer:h,action:m=>{if(f[m])return f[m];let x=u(m);return x?f[m]=h.clipAction(x):null},clip:u,landmarks:o,height:n}}function Vp(i,{length:e=1,flip:t=!1,grip:n=.12,twist:s=0}={}){i.updateMatrixWorld(!0);let r=[],o=new N;i.traverse(g=>{if(!g.isMesh)return;let d=g.geometry.attributes.position;for(let b=0;b<d.count;b+=3)r.push(new N(d.getX(b),d.getY(b),d.getZ(b)).applyMatrix4(g.matrixWorld))});let a=r.reduce((g,d)=>g.add(d),new N).multiplyScalar(1/r.length),l=[[0,0,0],[0,0,0],[0,0,0]];for(let g of r){let d=[g.x-a.x,g.y-a.y,g.z-a.z];for(let b=0;b<3;b++)for(let y=0;y<3;y++)l[b][y]+=d[b]*d[y]}let c=new N(1,1,1).normalize();for(let g=0;g<40;g++)c=new N(l[0][0]*c.x+l[0][1]*c.y+l[0][2]*c.z,l[1][0]*c.x+l[1][1]*c.y+l[1][2]*c.z,l[2][0]*c.x+l[2][1]*c.y+l[2][2]*c.z).normalize();t&&c.negate();let u=new At().setFromUnitVectors(c,new N(0,1,0)),h=1/0,f=-1/0;for(let g of r){let d=g.clone().sub(a).applyQuaternion(u).y;h=Math.min(h,d),f=Math.max(f,d)}let p=e/(f-h);i.position.sub(a);let m=new Oe;m.add(i),m.quaternion.copy(u),m.scale.setScalar(p),m.position.set(0,-h*p-n*e,0);let x=new Oe;return x.add(m),x.rotation.y=s,x}var Gp="./assets/",Su={melvinci:{height:1.86,idle:"Idle",idleDrawn:"2H_Melee_Idle",run:"Running_A",blade:["2H_Melee_Attack_Slice","2H_Melee_Attack_Chop","2H_Melee_Attack_Spin"],weapons:[{file:"melvinci_blade",slot:"handslot.r",length:1.35,grip:.1,glow:"#4CE0E0",drawOn:"melee",sheath:{bone:"chest",pos:[.2,.42,-.3],rot:[.2,0,Math.PI-.62]}},{file:"melvinci_cannon",slot:"handslot.l",length:.42,grip:.45}],castHand:"handslot.l"},kimaya:{height:1.74,idle:"Idle",idleDrawn:"Idle",run:"Running_B",blade:["1H_Melee_Attack_Slice_Diagonal","1H_Melee_Attack_Slice_Horizontal","1H_Melee_Attack_Stab"],weapons:[{file:"kimaya_saber",slot:"handslot.r",length:1,grip:.14,glow:"#ff7ad9",drawOn:"melee",sheath:{bone:"hips",pos:[.24,.02,.02],rot:[.15,0,Math.PI-.3]}},{file:"kimaya_scepter",slot:"handslot.l",length:1.25,grip:.38,glow:"#3ce08f",drawOn:"cast",sheath:{bone:"chest",pos:[.03,-.23,-.3],rot:[-.15,0,-.36]}}],castHand:"wrist.l",bracers:["wrist.l","wrist.r"]}},Wp={grunt:{file:"grunt",rig:!0,height:2,move:"Running_A",attack:"Unarmed_Melee_Attack_Punch_A",idle:"Unarmed_Idle"},shooter:{file:"shooter",rig:!0,height:2.2,move:"Walking_A",attack:"1H_Ranged_Shoot",idle:"1H_Ranged_Aiming"},brute:{file:"brute",rig:!0,height:2.8,move:"Walking_B",attack:"2H_Melee_Attack_Chop",idle:"2H_Melee_Idle"},flyer:{file:"flyer",rig:!1,size:1.5}},VM=["barrel_large","barrel_small_stack","box_stacked","keg_decorated","trunk_large_A","trunk_medium_B","banner_patternA_red","banner_patternA_yellow","banner_shield_red","table_medium_decorated_A","candle_triple","shelf_small_candles","rubble_large","sword_shield_broken","coin_stack_large"],Xp={engine:{file:"boss_engine",size:4.6,y:0},censor:{file:"boss_censor",size:5.2,y:-2.6},redactor:{file:"boss_redactor",size:3.8,y:-.2}};async function tm(i=()=>{}){let e=new qa,t={heroes:{},foes:{},bosses:{},weapons:{},props:{},lib:null,missing:[]},n=async(a,l)=>{try{return await e.loadAsync(Gp+a)}catch{return t.missing.push(l),null}},s=0,r=8+Object.keys(Wp).length+Object.keys(Xp).length,o=()=>i(++s/r);t.lib=await Hp(e,Gp+"anims/kaykit_rig.glb").catch(()=>(t.missing.push("anim library"),null)),o(),await Promise.all(["melvinci_blade","melvinci_cannon","kimaya_chakram","kimaya_saber","kimaya_scepter"].map(a=>n(`models/weapons/${a}.glb`,a).then(l=>{l&&(t.weapons[a]=l.scene),o()})));for(let a of Object.keys(Su)){let l=await n(`models/heroes/${a}.glb`,a);if(o(),!l||!t.lib)continue;let c=Su[a],u=Mu(l.scene,t.lib,{height:c.height});for(let h of c.weapons){let f=t.weapons[h.file];if(!f)continue;let p=new Oe;p.name=`wpn_${h.file}`,p.add(Vp(f.clone(!0),h)),u.bones[h.slot].add(p)}t.heroes[a]=u}for(let[a,l]of Object.entries(Wp)){let c=await n(`models/foes/${l.file}.glb`,l.file);o(),c&&(l.rig&&t.lib?t.foes[a]={rig:Mu(c.scene,t.lib,{height:l.height}),spec:l}:t.foes[a]={scene:qp(c.scene,l.size),spec:l})}await Promise.all(VM.map(a=>n(`props/${a}.glb`,a).then(l=>{l&&(t.props[a]=l.scene)})));for(let[a,l]of Object.entries(Xp)){let c=await n(`models/foes/${l.file}.glb`,l.file);o(),c&&(t.bosses[a]=qp(c.scene,l.size,l.y))}return t}function qp(i,e,t=0){let n=new Oe;n.add(i),n.rotation.y=-Math.PI/2,n.updateMatrixWorld(!0);let s=new Wt().setFromObject(n).getSize(new N),r=e/Math.max(s.x,s.y,s.z);n.scale.setScalar(r),n.updateMatrixWorld(!0);let o=new Wt().setFromObject(n),a=o.getCenter(new N);n.position.set(-a.x,-o.min.y+t,-a.z);let l=new Oe;return l.add(n),l}function $a(i){let e=[];return i.traverse(t=>{if(!t.isMesh)return;let n=s=>{let r=s.clone();return r.userData.baseEmissive=r.emissive?r.emissive.getHex():0,r.userData.baseEI=r.emissiveIntensity??0,e.push(r),r};t.material=Array.isArray(t.material)?t.material.map(n):n(t.material),t.castShadow=!0}),e}function Ji(i,e,t="#ffffff"){for(let n of i)n.emissive&&(e>0?(n.emissive.set(t),n.emissiveIntensity=1.4*e):(n.emissive.setHex(n.userData.baseEmissive),n.emissiveIntensity=n.userData.baseEI))}function nm(i,e){let t=new Map,n=(u,h)=>{let f=u+(h===Tr?"|u":h===fo?"|l":"|f");if(t.has(f))return t.get(f);let p=e.clip(u,h);if(!p)return null;let m=i.clipAction(p);return t.set(f,m),m},s=null,r=null,o=null,a=0,l="",c=(u,h,f,p=1)=>(u===h||(u&&u.fadeOut(f),h&&(h.setLoop(xh,1/0),h.reset().setEffectiveTimeScale(p).setEffectiveWeight(1).fadeIn(f).play())),h);return{loop(u,h=null,f=1){if(o)return;let p=n(u,h?fo:null),m=h?n(h,Tr):null;s=c(s,p,.18,f),s&&s.setEffectiveTimeScale(f),r=c(r,m,.12)},oneShot(u,h=1,f=!1){let p=n(u,null);return p?(s&&s.fadeOut(.08),r&&r.fadeOut(.08),s=null,r=null,o&&o!==p&&o.fadeOut(.06),p.setLoop(gh,1),p.clampWhenFinished=f,o=p,l=u,p.reset().setEffectiveTimeScale(h).setEffectiveWeight(1).fadeIn(.06).play(),a=p.getClip().duration/h,a):0},update(u){o&&(a-=u,a<=0&&!o.clampWhenFinished&&(o.fadeOut(.15),o=null)),i.update(u)},get busy(){return!!o},get shotName(){return o?l:""}}}function GM(){let i=document.createElement("canvas");i.width=256,i.height=128;let e=i.getContext("2d");e.strokeStyle="rgba(220,255,255,.95)",e.lineWidth=2;for(let n=0;n<5;n++)for(let s=0;s<8;s++){let r=s*34+n%2*17,o=n*30+8;e.beginPath();for(let a=0;a<6;a++){let l=a*Math.PI/3+Math.PI/6;e.lineTo(r+Math.cos(l)*15,o+Math.sin(l)*15)}e.closePath(),e.stroke()}let t=new Tn(i);return t.colorSpace=gt,t.wrapS=t.wrapT=hn,t}function WM(i,e){let s=new Float32Array(132),r=new Float32Array(22*2*3),o=[];for(let m=0;m<21;m++){let x=m*2;o.push(x,x+1,x+2,x+1,x+3,x+2)}let a=new lt;a.setAttribute("position",new Qe(s,3)),a.setAttribute("color",new Qe(r,3)),a.setIndex(o);let l=new ke({vertexColors:!0,transparent:!0,blending:ht,depthWrite:!1,side:xt}),c=new ue(a,l);c.frustumCulled=!1,c.visible=!1,i.add(c);let u=new ve(e),h=new ve("#ffffff"),f=new ve,p=[];return{add(m,x){p.unshift({b:m.clone(),t:x.clone(),age:0}),p.length>22&&p.pop()},update(m){for(let x of p)x.age+=m;for(;p.length&&p[p.length-1].age>.2;)p.pop();if(c.visible=p.length>1,!!c.visible){for(let x=0;x<22;x++){let g=p[Math.min(x,p.length-1)],d=x<p.length?Math.max(0,1-g.age/.2)*(1-x/22):0;s.set([g.b.x,g.b.y,g.b.z],x*6),s.set([g.t.x,g.t.y,g.t.z],x*6+3),f.copy(u).lerp(h,.65*d),r.set([u.r*d*.35,u.g*d*.35,u.b*d*.35],x*6),r.set([f.r*d,f.g*d,f.b*d],x*6+3)}a.attributes.position.needsUpdate=!0,a.attributes.color.needsUpdate=!0}},dispose(){i.remove(c),a.dispose(),l.dispose()}}}var ii=i=>at.sanitizeNodeName(i),Yp=new N,Ja=new N,Kp=new N,Zp=new N,$p=new N,ja=new At,Jp=new At,bu=new At,jp=new At,Qa=new At,XM=new At;function im(i,e){i.getWorldQuaternion(bu),bu.premultiply(e),i.parent.getWorldQuaternion(jp),i.quaternion.copy(jp.invert().multiply(bu)),i.updateWorldMatrix(!1,!0)}function Eu(i,e,t,n,s,r,o){!e||!t||o<=.001||(e.getWorldPosition(Yp),t.getWorldPosition(Ja),Kp.subVectors(Ja,Yp).normalize(),i.getWorldQuaternion(Qa),Zp.set(n,s,r).normalize().applyQuaternion(Qa),Jp.setFromUnitVectors(Kp,Zp),ja.slerpQuaternions(XM,Jp,o),im(e,ja))}function Qp(i,e,t){!e||Math.abs(t)<1e-4||(i.getWorldQuaternion(Qa),$p.set(1,0,0).applyQuaternion(Qa),ja.setFromAxisAngle($p,t),im(e,ja))}var em={fire:{lean:.32,upper:[-.22,-.2,1],lower:[-.62,-.05,1],wrist:[-.35,0,1]},rest:{lean:.04,upper:[.26,-1,.06],lower:[.1,-1,.3],wrist:[.05,-1,.3]}};function sm(i,e,t){let n=e&&e.heroes[t];if(!n)return null;let s=Ot[t],r=Su[t],o=new Oe;i.add(o);let a=vu(n.mesh);o.add(a);let l=$a(a),c={};a.traverse(V=>{V.isBone&&(c[V.name]=V)});let u=nm(new _s(a),n);o.add(Vn(.7));let h=new jn(s.aura,6,8,2);h.position.y=2.1,o.add(h);let f=new ue(new rn(.55,.85,48),new ke({color:s.aura,transparent:!0,opacity:.5,blending:ht,depthWrite:!1,side:xt}));f.rotation.x=-Math.PI/2,f.position.y=.05,o.add(f);let p=c[ii(r.castHand)],m=bt("#C9A84C",.6,.85);p&&p.add(m);let x=new ue(new rn(.5,vr,32,1,-Qn,Qn*2),new ke({color:s.aura,transparent:!0,opacity:0,blending:ht,depthWrite:!1,side:xt}));x.rotation.x=-Math.PI/2,x.rotation.z=-Math.PI/2,x.position.y=1.1,o.add(x);let g=new ke({map:GM(),color:s.accent,transparent:!0,opacity:0,blending:ht,depthWrite:!1,side:xt}),d=new ue(new vt(1.15,1.15,2.3,28,1,!0,-Ki,Ki*2),g);d.position.y=1.15,o.add(d);let b=(r.bracers||[]).map(V=>{let j=c[ii(V)];if(!j)return null;let X=new We({color:"#C9A84C",metalness:.8,roughness:.25,emissive:s.aura,emissiveIntensity:.6}),oe=new ue(new Jn(.075,.022,8,24),X);oe.rotation.x=Math.PI/2,j.add(oe);let ee=bt(s.aura,.35,.6);return j.add(ee),{ringMat:X,glow:ee}}).filter(Boolean),y=r.weapons.filter(V=>V.sheath).map(V=>{let j=a.getObjectByName(`wpn_${V.file}`);if(!j)return null;let X=c[ii(V.slot)],oe=c[ii(V.sheath.bone)],ee=bt(V.glow||s.aura,.1,0);return X.add(ee),{w:V,holder:j,hand:X,rest:oe,spark:ee,drawn:!1,igniteT:0,sparkT:0,trail:WM(i,V.glow||s.aura),baseL:new N(0,V.length*.28,0),tipL:new N(0,V.length*(.97-V.grip),0)}}).filter(Boolean);function M(V){V.rest.add(V.holder),V.holder.position.set(...V.w.sheath.pos),V.holder.rotation.set(...V.w.sheath.rot),V.holder.scale.setScalar(1),V.drawn=!1,V.sparkT=.22}function C(V){V.drawn||(V.hand.add(V.holder),V.holder.position.set(0,0,0),V.holder.rotation.set(0,0,0),V.drawn=!0,V.igniteT=.14,V.sparkT=.25)}for(let V of y)M(V);let T=0,E=r.bracers?["l","r"].map(V=>({up:c[ii("upperarm."+V)],lo:c[ii("lowerarm."+V)],wr:c[ii("wrist."+V)],hd:c[ii("hand."+V)]})).filter(V=>V.up&&V.lo&&V.wr&&V.hd):[],I=c[ii("chest")],_=c[ii("spine")],v=0,w=0,U=0,S=E.length?[_,I,...E.flatMap(V=>[V.up,V.lo,V.wr])].filter(Boolean):[],D=S.map(V=>V.quaternion.clone()),z=!1,P=new N;function O(){if(E.length){S.forEach((V,j)=>D[j].copy(V.quaternion)),z=!0,o.updateWorldMatrix(!0,!0);for(let[V,j]of[[em.rest,w],[em.fire,v]])if(!(j<=.001)){Qp(o,_,V.lean*.45*j),Qp(o,I,V.lean*.55*j);for(let X of E){X.up.getWorldPosition(P),o.worldToLocal(P);let oe=Math.sign(P.x)||1;Eu(o,X.up,X.lo,V.upper[0]*oe,V.upper[1],V.upper[2],j),Eu(o,X.lo,X.wr,V.lower[0]*oe,V.lower[1],V.lower[2],j),Eu(o,X.wr,X.hd,V.wrist[0]*oe,V.wrist[1],V.wrist[2],j)}}}}let F=(V="melee")=>{for(let j of y)(j.w.drawOn||"melee")===V?C(j):j.drawn&&M(j);T=V==="cast"?1.2:1.7},$=0,Y=0,ne=!0,fe=0,Ae=!1,J=0,ce=new N,xe=new N;function te(V,j,X){let oe=X.y||0;if(o.position.set(X.x,oe,X.z),o.rotation.y=Math.atan2(X.fx,X.fz),o.visible=!(X.alive&&X.invuln>0&&Math.floor(j*14)%2===0),!X.alive&&ne&&u.oneShot("Death_A",1,!0),ne=X.alive,X.alive){if(X.dashing&&!X.longDash&&fe<=0){let He=X.mvx*X.fx+X.mvz*X.fz,Ge=X.mvx*X.fz-X.mvz*X.fx,Ue=Math.abs(He)>=Math.abs(Ge)?He>=0?"Dodge_Forward":"Dodge_Backward":Ge>0?"Dodge_Left":"Dodge_Right";fe=u.oneShot(Ue,2.6)}fe>0&&(fe-=V),X.air&&!Ae&&!X.dashing&&u.oneShot("Jump_Start",2.4),!X.air&&Ae&&u.oneShot("Jump_Land",2.8),Ae=!!X.air;let ee=X.ward?"Blocking":(X.firing||X.charge>.05)&&!E.length?"Spellcasting":null,k=y.some(He=>He.drawn)?r.idleDrawn:r.idle,rt=1;if(X.air)k="Jump_Idle";else if(X.mv>.1){let He=X.mvx*X.fx+X.mvz*X.fz,Ge=X.mvx*X.fz-X.mvz*X.fx;He>.5?(k=r.run,rt=X.longDash?2.2:X.sprint?1.45:1):He<-.5?(k="Walking_Backwards",rt=1.6):k=Ge>0?"Running_Strafe_Left":"Running_Strafe_Right"}u.loop(k,ee,rt)}if(z&&(S.forEach((ee,Te)=>ee.quaternion.copy(D[Te])),z=!1),u.update(V),E.length){let ee=X.alive&&(X.firing||X.charge>.05||U>0)&&J<=0&&!X.ward,Te=X.alive&&!ee&&!X.air&&!(X.mv>.1)&&!u.busy&&!X.ward;U>0&&(U-=V),v+=((ee?1:0)-v)*Math.min(1,V*16),w+=((Te?1:0)-w)*Math.min(1,V*6),O()}if(T>0&&(T-=V,T<=0))if(u.busy)T=.15;else for(let ee of y)ee.drawn&&M(ee);for(let ee of y){if(ee.igniteT>0){ee.igniteT-=V;let Te=1-Math.max(0,ee.igniteT)/.14;ee.holder.scale.set(1,.15+.85*Te,1)}ee.sparkT>0?(ee.sparkT-=V,ee.spark.material.opacity=Math.max(0,ee.sparkT/.25),ee.spark.scale.setScalar(.4+(1-ee.sparkT/.25)*1.6)):ee.spark.material.opacity=0}g.opacity+=((X.ward?.75:0)-g.opacity)*Math.min(1,V*14),g.map.offset.y=j*.15,g.color.set(X.parryFlash>0?"#ffffff":s.accent),x.material.opacity=0,J>0&&(J-=V);for(let ee of y)J>0&&ee.drawn&&ee.w.drawOn!=="cast"&&(ee.holder.updateWorldMatrix(!0,!1),ee.trail.add(ee.holder.localToWorld(ce.copy(ee.baseL)),ee.holder.localToWorld(xe.copy(ee.tipL)))),ee.trail.update(V);f.material.opacity=(X.air?.15:.35)+Math.sin(j*3)*.1+X.charge*.25,f.scale.setScalar(1+X.charge*.35),m.scale.setScalar(.5+X.charge*.9+(X.firing?.2:0));for(let ee of b){let Te=X.firing||X.charge>.05?1:0;ee.ringMat.emissiveIntensity+=(.6+Te*2.4+X.charge*2-ee.ringMat.emissiveIntensity)*Math.min(1,V*12),ee.glow.scale.setScalar(.3+Te*.35+X.charge*.6)}h.intensity=5+X.charge*4,Y>0&&(Y-=V,Ji(l,Math.max(0,Y/.2),"#ff2b2b"),Y<=0&&Ji(l,0))}return{group:o,update:te,dispose(){i.remove(o);for(let V of y)V.trail.dispose()},setWeaponColor(V){m.material.color.set(V)},playBlade(V){F("melee");let j=u.oneShot(r.blade[V%3],V===2?1.9:2.3);J=Math.min(.55,j)},playOnce(V,j=1){return/Melee/.test(V)?(F("melee"),J=.5):/Spellcast/.test(V)&&F("cast"),u.oneShot(V,j)},hurtFlash(){Y=.2,u.busy||u.oneShot("Hit_A",1.8)},castPoint(V=new N){return E.length===2?(E[0].wr.getWorldPosition(V),E[1].wr.getWorldPosition(Ja),V.add(Ja).multiplyScalar(.5)):p?p.getWorldPosition(V):V.set(o.position.x,1.2,o.position.z)},firesFromHands:E.length===2,brace(){U=.18},get bladeDrawn(){return y.some(V=>V.drawn)},radius:.5,isModel:!0}}function rm(i,e){let t=i&&i.foes[e];if(!t)return null;let n=new Oe;if(n.add(Vn(e==="brute"?1.1:.7)),t.rig){let s=vu(t.rig.mesh);n.add(s);let r=nm(new _s(s),t.rig);r.loop(t.spec.idle),n.userData={mats:$a(s),drv:r,spec:t.spec,model:!0}}else{let s=t.scene.clone(!0);n.add(s),n.userData={mats:$a(s),spec:t.spec,model:!0,body:s}}return n}function om(i,e,t){let n=i&&i.bosses[e.key];if(!n)return null;e.mesh.traverse(r=>{r.isMesh&&(r.material.isMeshStandardMaterial||r.geometry&&r.geometry.type==="SphereGeometry")&&(r.visible=!1)});let s=n.clone(!0);return(t||e.mesh).add(s),{inst:s,mats:$a(s)}}var ji={root:"#ff2b2b",sacral:"#ff8a2b",solar:"#ffd23c",heart:"#3ce08f",throat:"#3cb8ff",third:"#6b5bff",crown:"#b56cff"},am=["root","sacral","solar","heart","throat","third","crown"],Ar={max:100,step:25,kill:8,parry:12,bladeHit:3,trickle:2.5},lm="MAX MELANIN MAGIC BLAST",qM={melvinci:[{id:"quake",name:"ROOT QUAKE",chakra:"root"},{id:"beam",name:"SOLAR MELANIN BEAM",chakra:"solar"},{id:"blink",name:"THIRD-EYE STEP",chakra:"third"},{id:"nova",name:"CROWN NOVA",chakra:"crown",ult:!0}],kimaya:[{id:"storm",name:"CHAKRAM STORM",chakra:"throat"},{id:"sonic",name:"SACRAL SONIC",chakra:"sacral"},{id:"lotus",name:"HEART LOTUS",chakra:"heart"},{id:"starfall",name:"ANCESTRAL STARFALL",chakra:"crown",ult:!0}]};function el(i){return Math.max(0,Math.min(4,Math.floor(i/Ar.step+1e-9)))}function YM(i){let e=el(i);return{level:e,meter:e?i-e*Ar.step:i}}function KM(i,e,t=1){return Math.min(Ar.max,i+(Ar[e]||0)*t)}var cm=i=>i>=4?"MAX":i?"LV"+i:"\u2014";function hm(i,e,t){let n=qM[t],s=[],r=0,o=0,a=-1,l=ZM(),c=(d,b,y)=>e.foes.list.filter(M=>M.alive&&Math.hypot(M.x-d,M.z-b)<y+M.r&&Math.abs(M.y-(e.H.y||0))<3.4);function u(d,b,y,M,C=10,T=0){let E=0;for(let _ of c(d,b,y)){let v=_.x-d,w=_.z-b,U=Math.hypot(v,w)||1;T&&(_.stunT=Math.max(_.stunT||0,T)),e.foes.damage(_,M,!0,v/U,w/U,C),E++}let I=e.boss;return I&&I.alive&&I.awake&&Math.hypot(I.x-d,I.z-b)<y+I.r&&(I.damage(I.hit({x:d,z:b,y:1})?M*1.2:M*.5,!0),E++),E}let h=d=>ji[d],f=(d,b)=>{e.hero.playOnce&&e.hero.playOnce(d,b)};function p(d,b,y){e.fx.ring(d,b,y,3,.35),e.fx.spawn(d,1,b,y,18,{spd:5,up:3,size:.55}),u(d,b,2.6,3,10)}let m={quake(d){f("2H_Melee_Attack_Chop",2.2),s.push({t:.22,run:()=>{let b=h("root");e.fx.ring(d.x,d.z,b,6.5,.55),e.fx.ring(d.x,d.z,"#ffffff",3.5,.3),e.fx.spawn(d.x,.3,d.z,b,40,{spd:9,up:5,size:.6});for(let y=0;y<10;y++){let M=y/10*Math.PI*2;e.fx.spawn(d.x+Math.cos(M)*3,.2,d.z+Math.sin(M)*3,"#8a5a3a",4,{spd:3,up:6,size:.5})}u(d.x,d.z,5.5,4,18),e.shake(10),e.audio.sfx.slam()}})},beam(d){f("Spellcast_Long",1.1);let b=h("solar"),y=17,M=new ue(new vt(.16,.16,y,10,1,!0),new ke({color:"#fff6c8",transparent:!0,opacity:.95,blending:ht,depthWrite:!1})),C=new ue(new vt(.55,.55,y,14,1,!0),new ke({color:b,transparent:!0,opacity:.45,blending:ht,depthWrite:!1})),T=new Oe;M.position.y=y/2,C.position.y=y/2,T.add(M,C),T.rotation.x=Math.PI/2;let E=new Oe;E.add(T),i.add(E);let I=bt(b,2.2,.9);i.add(I);let _=0;e.audio.sfx.beamFire(),s.push({t:1.25,every:v=>{if(E.position.set(d.x+d.fx*.6,d.y+1.25,d.z+d.fz*.6),E.rotation.y=Math.atan2(d.fx,d.fz),I.position.copy(E.position),C.scale.x=C.scale.z=.85+Math.random()*.3,_-=v,_<=0){_=.08;for(let w=1;w<y;w+=1.2){let U=E.position.x+d.fx*w,S=E.position.z+d.fz*w;if(e.level.solidCell(Math.floor(U/2),Math.floor(S/2),d.y+.8))break;u(U,S,.9,.9,3)}e.fx.spawn(E.position.x+d.fx*(2+Math.random()*10),d.y+1.25,E.position.z+d.fz*(2+Math.random()*10),b,3,{spd:2,up:1.5,size:.45}),e.shake(2)}},run:()=>{i.remove(E),i.remove(I)}})},blink(d){let b=h("third");p(d.x,d.z,b);let y=d.x,M=d.z;for(let C=0;C<14;C++){let T=Mr(e.level,y,M,yn,d.fx*.5,d.fz*.5,d.y);if(T.hit)break;y=T.x,M=T.z}d.x=y,d.z=M,d.invuln=Math.max(d.invuln,.45),f("Dodge_Forward",3),s.push({t:.12,run:()=>p(d.x,d.z,b)}),e.audio.sfx.dash()},storm(d){let b=h("throat");f("Spellcast_Raise",1.8);let y=[0,1,2].map(()=>{let T=e.assets&&e.assets.weapons.kimaya_chakram,E=new Oe;if(T){let I=T.clone(!0),_=new Wt().setFromObject(I),v=_.getSize(new N),w=.9/Math.max(v.x,v.y,v.z);I.scale.setScalar(w),I.position.copy(_.getCenter(new N).multiplyScalar(-w)),E.add(I)}return E.add(bt(b,1.8,.7)),i.add(E),E}),M=0,C=0;s.push({t:3.4,every:T=>{C+=T*7,M-=T,y.forEach((E,I)=>{let _=C+I*Math.PI*2/3,v=2.7;if(E.position.set(d.x+Math.cos(_)*v,d.y+1.1,d.z+Math.sin(_)*v),E.rotation.y+=T*20,M<=0){u(E.position.x,E.position.z,.9,1.3,6);for(let w of e.combat.ebullets)w.alive&&Math.hypot(w.x-E.position.x,w.z-E.position.z)<1&&(w.alive=!1,w.mesh.visible=!1)}Math.random()<T*20&&e.fx.spawn(E.position.x,1.1,E.position.z,b,1,{spd:1,up:.5,size:.4,life:.3})}),M<=0&&(M=.18)},run:()=>y.forEach(T=>i.remove(T))}),e.audio.sfx.charged()},lotus(d){let b=h("heart");f("Spellcast_Raise",1.4),d.lives<ka?(d.lives++,e.hud.flash("HEART LOTUS \u2014 A LIFE RESTORED",b)):e.hud.flash("HEART LOTUS",b),d.shield=Yi,d.wardBroken=0,d.invuln=Math.max(d.invuln,1);for(let y=0;y<3;y++)e.fx.ring(d.x,d.z,y?"#ffffff":b,3+y*1.5,.5+y*.15);for(let y=0;y<8;y++){let M=y/8*Math.PI*2;e.fx.spawn(d.x+Math.cos(M)*1.2,.2,d.z+Math.sin(M)*1.2,b,6,{spd:1,up:7,size:.55,grav:2})}u(d.x,d.z,4,3,14),e.audio.sfx.page()},sonic(d){let b=h("sacral");f("Spellcast_Shoot",2);let y=.62,M=9;for(let T=1;T<=M;T+=1.5)for(let E=-2;E<=2;E++){let I=Math.atan2(d.fz,d.fx)+E*y/2;e.fx.spawn(d.x+Math.cos(I)*T,1,d.z+Math.sin(I)*T,b,2,{spd:2,up:1,size:.5,life:.4})}for(let T of e.foes.list){if(!T.alive)continue;let E=T.x-d.x,I=T.z-d.z,_=Math.hypot(E,I);_>M||_<.01||(E*d.fx+I*d.fz)/_>Math.cos(y)&&(T.stunT=2.2,e.foes.damage(T,3,!0,E/_,I/_,16))}let C=e.boss;if(C&&C.alive&&C.awake){let T=C.x-d.x,E=C.z-d.z,I=Math.hypot(T,E)||1;I<M+C.r&&(T*d.fx+E*d.fz)/I>Math.cos(y)&&(C.damage(4,!0),C.stun=Math.max(C.stun||0,.8))}e.fx.ring(d.x+d.fx*2,d.z+d.fz*2,b,5,.4),e.shake(6),e.audio.sfx.beamTell()},nova(d){x(d,"Spellcast_Raise",am.map(b=>ji[b]),10,12,"CROWN NOVA",!1)},starfall(d){x(d,"Spellcast_Long",["#fff6c8",ji.crown,ji.throat,"#ffd76a"],7,9,"ANCESTRAL STARFALL",!0)}};function x(d,b,y,M,C,T,E){f(b,.9),e.hud.flash(`${lm} \xB7 ${T}`,y[y.length-1]),e.hud.screenFlash&&e.hud.screenFlash(y[0]),e.shake(12),e.audio.sfx.bossWake(),d.invuln=Math.max(d.invuln,1.6);let I=[],_=e.boss;_&&_.alive&&_.awake&&Math.hypot(_.x-d.x,_.z-d.z)<22&&I.push({boss:_});for(let w of e.foes.list.filter(U=>U.alive).sort((U,S)=>Math.hypot(U.x-d.x,U.z-d.z)-Math.hypot(S.x-d.x,S.z-d.z)).slice(0,12))Math.hypot(w.x-d.x,w.z-d.z)<18&&I.push({e:w});let v=Math.max(7,I.length);for(let w=0;w<v;w++){let U=y[w%y.length],S=bt(U,1.6,1);S.add(bt("#ffffff",.4,1)),i.add(S);let D=I.length?I[w%I.length]:null,z=w/v*Math.PI*2,P=.5+w*(E?.1:.05),O=0;s.push({t:P+.55,every:F=>{O+=F;let $=D?D.boss?D.boss.x:D.e.x:d.x+Math.cos(z)*7,Y=D?D.boss?D.boss.z:D.e.z:d.z+Math.sin(z)*7;if(O<P)E?S.position.set($+Math.sin(O*9+w)*.3,16,Y):S.position.set(d.x+Math.cos(z+O*3)*1.6,2.2+O,d.z+Math.sin(z+O*3)*1.6);else{let ne=Math.min(1,(O-P)/.5),fe=E?$:d.x+Math.cos(z)*1.6,Ae=E?16:2.2+P,J=E?Y:d.z+Math.sin(z)*1.6;S.position.set(fe+($-fe)*ne,Ae+(.8-Ae)*ne*ne,J+(Y-J)*ne)}Math.random()<F*30&&e.fx.spawn(S.position.x,S.position.y,S.position.z,U,1,{spd:.5,up:0,size:.5,life:.35,grav:0})},run:()=>{i.remove(S);let F=S.position.x,$=S.position.z;e.fx.ring(F,$,U,4,.45),e.fx.spawn(F,.8,$,U,24,{spd:7,up:5,size:.6}),D&&D.boss&&D.boss.alive&&D.boss.damage(C,!0),u(F,$,2.4,M,16),e.shake(5),e.audio.sfx.crate()}})}}function g(d,b,y){if(o=Math.max(0,o-d),b.alive&&(r=Math.min(Ar.max,r+Ar.trickle*d)),y("magic")&&b.alive&&o<=0){let{level:C,meter:T}=YM(r);if(!C)e.audio.beep(160,.08,"square",.06);else{let E=n[C-1];r=T,o=.45,E.ult||e.hud.flash(`${cm(C)} \xB7 ${E.name}`,ji[E.chakra]),m[E.id](b)}}for(let C=s.length-1;C>=0;C--){let T=s[C];T.t-=d,T.every&&T.every(d),T.t<=0&&(s.splice(C,1),T.run&&T.run())}let M=el(r);M>a&&a>=0&&e.audio.beep(520+M*140,.1,"sine",.05,900+M*180),a=M,$M(l,n,r)}return{update:g,addMeter(d,b=1){r=KM(r,d,b)},get meter(){return r},set meter(d){r=d},get level(){return el(r)},kit:n,dispose(){for(let d of s)d.run&&d.run();s.length=0,l.root.remove()}}}function ZM(){let i=document.createElement("div");i.className="magicbar";let e=document.createElement("b");e.className="mlv";let t=document.createElement("div");t.className="mtrack";let n=document.createElement("i");t.append(n);for(let r=1;r<4;r++){let o=document.createElement("u");o.style.left=r*25+"%",t.append(o)}let s=document.createElement("small");return s.className="mname",i.append(e,t,s),(document.getElementById("hud")||document.body).appendChild(i),n.style.background=`linear-gradient(90deg, ${am.map(r=>ji[r]).join(",")})`,{root:i,badge:e,fill:n,name:s,btn:document.getElementById("tMagic"),last:""}}function $M(i,e,t){let n=el(t),s=n?e[n-1]:null,r=Math.round(t);i.fill.style.width=r+"%";let o=n+"|"+r;o!==i.last&&(i.last=o,i.root.classList.toggle("max",n>=4),i.root.style.setProperty("--c",s?ji[s.chakra]:"#8a7fa8"),i.badge.textContent=cm(n),i.name.textContent=n>=4?`${lm} \xB7 F`:s?`${s.name} \xB7 F`:"MAGIC CHARGING",i.btn&&(i.btn.style.setProperty("--pct",r*3.6+"deg"),i.btn.style.setProperty("--c",s?ji[s.chakra]:"#8a7fa8"),i.btn.classList.toggle("max",n>=4),i.btn.classList.toggle("ready",n>0),i.btn.dataset.lv=n>=4?"MAX":n?"LV"+n:""))}var dm=[{id:"01",file:"01_i_refuse.mp3",title:"I Refuse"},{id:"02",file:"02_world_wide_wake_up.mp3",title:"World Wide Wake Up"},{id:"03",file:"03_it_is_what_it_is.mp3",title:"It Is What It Is"},{id:"04",file:"04_they_don_t.mp3",title:"They Don't"},{id:"05",file:"05_scfl_10_2.mp3",title:"SCFL 10-2"},{id:"06",file:"06_supa_groovy_plugged_in.mp3",title:"Supa Groovy Plugged In"},{id:"07",file:"07_soulful_plugged_in.mp3",title:"Soulful Plugged In"},{id:"08",file:"08_i_am_affirmation.mp3",title:"I Am Affirmation"},{id:"09",file:"09_the_lion_rises.mp3",title:"The Lion Rises"},{id:"10",file:"10_battle_of_kirina.mp3",title:"Battle of Kirina"},{id:"11",file:"11_nine_witches_of_mali.mp3",title:"Nine Witches of Mali"},{id:"12",file:"12_buffalo_woman_rising.mp3",title:"Buffalo Woman Rising"},{id:"13",file:"13_crippled_prince.mp3",title:"Crippled Prince"},{id:"14",file:"14_nana_triban.mp3",title:"Nana Triban"},{id:"15",file:"15_kurukan_fuga.mp3",title:"Kurukan Fuga"},{id:"16",file:"16_light_as_a_feather.mp3",title:"Light as a Feather"},{id:"17",file:"17_truth_is_the_feather.mp3",title:"Truth Is the Feather"},{id:"18",file:"18_kind_hands.mp3",title:"Kind Hands"},{id:"19",file:"19_my_heart_at_home.mp3",title:"My Heart at Home"},{id:"20",file:"20_balance_of_maat.mp3",title:"Balance of Maat"}],um={menu:["02"],ramparts:["01","05","04","03","06"],venus:["06","07","08","16","17","18"],archive:["09","11","12","13","14","15"],boss:["10"],win:["19","20"]},fm=new Set(["menu","boss"]),JM="https://quantummelaninmedia.com/assets/audio/";function jM(i){let e=um[i]||um.menu;return fm.has(i)?e.slice():[...e,...dm.map(t=>t.id).filter(t=>!e.includes(t))]}function pm({base:i="./assets/music/",volume:e=.55}={}){let t=new Audio;t.preload="auto";let n=[],s=0,r=null,o=!1,a=!1,l=!1,c=null,u=!1,h=document.createElement("div");h.id="nowPlaying",h.className="hidden";let f=document.createElement("b");f.textContent="\u266A";let p=document.createElement("span"),m=document.createElement("small");m.textContent="N skip \xB7 M music on/off",h.append(f,p,m),document.body.appendChild(h);let x=y=>dm.find(M=>M.id===y),g=()=>o?0:a?e*.35:e;function d(y,M,C){clearInterval(c);let T=t.volume,E=performance.now();c=setInterval(()=>{let _=Math.min(1,(performance.now()-E)/M);t.volume=Math.max(0,Math.min(1,T+(y-T)*_)),_>=1&&(clearInterval(c),C&&C())},30)}function b(y){s=(y+n.length)%n.length;let M=x(n[s]);if(!M)return;t.src=(u?JM:i)+M.file,t.volume=0,p.textContent=M.title.toUpperCase(),h.classList.remove("hidden"),h.classList.remove("flash"),h.offsetWidth,h.classList.add("flash");let C=t.play();C&&C.catch&&C.catch(()=>{}),d(g(),900)}return t.addEventListener("ended",()=>{fm.has(r)&&n.length===1?(t.currentTime=0,t.play().catch(()=>{})):b(s+1)}),t.addEventListener("error",()=>{u||(u=!0,b(s))}),{play(y){l=!0,y!==r&&(r=y,n=jM(y),t.src&&!t.paused?d(0,500,()=>b(0)):b(0))},next(){l&&n.length&&d(0,300,()=>b(s+1))},setMuted(y){o=y,d(g(),200)},setVolume(y){e=Math.max(0,Math.min(1,y)),d(g(),120)},duck(y){a=y,d(g(),300)},get moment(){return r},get title(){let y=x(n[s]);return y?y.title:""},get usingRemote(){return u},el:t}}var QM=()=>new We({color:"#1b1b24",roughness:.55,metalness:.35}),eb=()=>new We({color:ae.char,emissive:ae.char,emissiveIntensity:.9}),wu=()=>new ke({color:ae.hotred});function fn(i,e,t,n){return new ue(new Ct(i,e,t),n)}function tb(i){let e=new Oe,t=QM(),n=eb(),s=[t,n];if(e.add(Vn(.55)),i==="grunt"){let r=fn(.7,.8,.5,t);r.position.y=.95,e.add(r);let o=fn(.5,.06,.04,n);o.position.set(0,1.05,.27),e.add(o);let a=fn(.44,.36,.4,t);a.position.y=1.55,e.add(a);let l=fn(.34,.07,.04,wu());l.position.set(0,1.56,.21),e.add(l);for(let c of[-1,1]){let u=fn(.18,.62,.18,t);u.position.set(c*.5,.95,.1),u.rotation.x=-.5,e.add(u);let h=fn(.26,.2,.3,n);h.position.set(c*.5,.62,.35),e.add(h);let f=fn(.22,.5,.26,t);f.position.set(c*.18,.28,0),e.add(f)}}else if(i==="shooter"){let r=fn(.56,1,.44,t);r.position.y=1.05,e.add(r);let o=fn(.5,.6,.24,t);o.position.set(0,1.2,-.3),e.add(o);let a=fn(.08,.5,.08,n);a.position.set(0,1.2,-.44),e.add(a);let l=fn(.36,.34,.36,t);l.position.y=1.72,e.add(l);let c=new ue(new vt(.11,.13,.16,10),wu());c.rotation.x=Math.PI/2,c.position.set(0,1.72,.22),e.add(c);let u=fn(.14,.14,.8,t);u.position.set(.32,1.15,.35),e.add(u);let h=fn(.1,.1,.1,n);h.position.set(.32,1.15,.78),e.add(h);for(let f of[-1,1]){let p=fn(.18,.55,.22,t);p.position.set(f*.15,.28,0),e.add(p)}}else{let r=new ue(new vt(.46,.4,.18,14),t);e.add(r);let o=new ue(new Jn(.5,.05,6,18),n);o.rotation.x=Math.PI/2,e.add(o);let a=new ue(new jt(.1,8,6),wu());a.position.set(0,.02,.44),e.add(a);let l=bt(ae.cyan,.9,.7);l.position.y=-.2,e.add(l),e.userData.disc=r}return e.userData.mats=s,e}function mm(i,e){let t=[],n=[];function s(h,f,p){let m=ep[h],x=rm(e.assets,h)||tb(h);i.add(x);let g={type:h,x:f,z:p,y:h==="flyer"?m.hover:0,hp:m.hp,max:m.hp,r:m.r,cfg:m,alive:!0,aggro:!1,mesh:x,vx:0,vz:0,kx:0,kz:0,knock:0,shootT:1+Math.random()*(m.shootCd||1),diveT:2+Math.random()*2,dive:0,dx:0,dz:0,anim:Math.random()*6,hurtT:0,fx:0,fz:1,orbit:Math.random()*6.28,strafe:Math.random()<.5?1:-1};return t.push(g),g}function r(h,f,p,m=0,x=0,g=6){h.alive&&(f*=e.comboHit?e.comboHit():1,h.cfg.armor&&!(h.brokenT>0)&&(h.chain=e.t-(h.lastHitT??-9)<Hf?(h.chain||0)+1:1,h.lastHitT=e.t,h.chain>=h.cfg.guard?(h.brokenT=Vf,h.stunT=Math.max(h.stunT||0,1.2),h.chain=0,e.hud.flash("GUARD BREAK","#ffd76a"),e.fx.ring(h.x,h.z,"#ffd76a",2.6,.35),e.fx.spawn(h.x,h.y+1.4,h.z,"#ffd76a",16,{spd:5,up:3,size:.45}),e.audio.sfx.shatter(),e.hitstop(.08)):(f*=1-h.cfg.armor,e.fx.spawn(h.x,h.y+1.2,h.z,"#c8c8d8",3,{spd:3,up:1.5,size:.3,life:.25}))),h.hp-=f,h.hurtT=.12,h.kx=m,h.kz=x,h.knock=g,h.hp<=0?o(h,p):e.audio.sfx.foeHit())}function o(h,f){h.alive=!1;let p=h.mesh.userData;p.drv?(p.drv.oneShot("Death_A",1.5,!0),n.push({e:h,t:1.6})):i.remove(h.mesh),e.fx.spawn(h.x,h.y+.9,h.z,ae.char,14,{spd:5,up:4}),e.fx.spawn(h.x,h.y+.9,h.z,"#ffffff",5,{spd:3,size:.35}),e.fx.ring(h.x,h.z,ae.char,2.2,.35),e.audio.sfx.foeDie(),e.onKill(h,f)}function a(h){l(h);let f=e.H,p=e.level;for(let m of t){if(!m.alive)continue;m.anim+=h,m.brokenT>0&&(m.brokenT-=h);let x=f.x-m.x,g=f.z-m.z,d=Math.hypot(x,g)||.001,b=x/d,y=g/d;!m.aggro&&d<m.cfg.aggro&&f.alive&&(m.aggro=!0);let M=0,C=0;if(m.stunT>0)m.stunT-=h,Math.random()<h*12&&e.fx.spawn(m.x,m.y+2.1,m.z,"#ffd76a",1,{spd:1.5,up:.5,size:.35,life:.4,grav:0});else if(m.aggro&&f.alive)if(m.type==="grunt"||m.type==="brute")d>m.r+f.r+.05&&(M=b,C=y);else if(m.type==="shooter")d>m.cfg.keep+1.5?(M=b,C=y):d<m.cfg.keep-1.5&&(M=-b,C=-y),M+=-y*m.strafe*.5,C+=b*m.strafe*.5,m.shootT-=h,m.shootT<=0&&(m.shootT=m.cfg.shootCd*(.85+Math.random()*.3),lo(p,m.x,m.z,f.x,f.z,(f.y+1.1)*.5)||(e.combat.spawnEBullet({x:m.x+b*.6,y:1.15,z:m.z+y*.6,vx:b*m.cfg.bspd,vz:y*m.cfg.bspd,vy:(f.y+1.1-1.15)/d*m.cfg.bspd,kind:"red"}),e.fx.spawn(m.x+b*.8,1.15,m.z+y*.8,ae.hotred,4,{spd:2,up:1,size:.3}),e.audio.beep(520,.08,"square",.08,200)));else if(m.orbit+=h*.9*m.strafe,m.dive===0){let z=f.x+Math.cos(m.orbit)*5,P=f.z+Math.sin(m.orbit)*5,O=z-m.x,F=P-m.z,$=Math.hypot(O,F)||1;M=O/$*Math.min(1,$/2),C=F/$*Math.min(1,$/2),m.y+=(m.cfg.hover+Math.sin(m.anim*3)*.3-m.y)*Math.min(1,h*4),m.diveT-=h,m.diveT<=0&&(m.dive=1,m.diveT=.35,m.dx=b,m.dz=y)}else m.dive===1?(m.diveT-=h,m.y+=(m.cfg.hover+.7-m.y)*h*6,m.diveT<=0&&(m.dive=2,m.diveT=.55,m.dx=b,m.dz=y,e.audio.beep(900,.2,"sawtooth",.1,200))):(m.diveT-=h,M=m.dx*2.4,C=m.dz*2.4,m.y+=(f.y+.9-m.y)*h*10,m.diveT<=0&&(m.dive=0,m.diveT=m.cfg.diveCd));else m.type==="flyer"&&(m.y=m.cfg.hover+Math.sin(m.anim*2)*.25);for(let z of t){if(z===m||!z.alive||z.type==="flyer"!=(m.type==="flyer"))continue;let P=m.x-z.x,O=m.z-z.z,F=Math.hypot(P,O);F<1.2&&F>.001&&(M+=P/F*(1.2-F)*1.5,C+=O/F*(1.2-F)*1.5)}let T=m.cfg.spd*(e.slowMul||1),E=M*T+m.kx*m.knock,I=C*T+m.kz*m.knock;m.knock=Math.max(0,m.knock-h*26);let _=Mr(p,m.x,m.z,m.r,E*h,I*h,m.type==="flyer"?9:0);if(m.x=_.x,m.z=_.z,Math.abs(M)+Math.abs(C)>.05||m.aggro){let z=m.aggro?b:M,P=m.aggro?y:C;m.fx+=(z-m.fx)*Math.min(1,h*8),m.fz+=(P-m.fz)*Math.min(1,h*8)}let v=m.r+f.r+(m.type==="flyer"?.1:.05);f.alive&&d<v&&(m.type==="flyer"?Math.abs(m.y-(f.y+1))<1.3:f.y<.8)&&(e.wardBlocks(m.x,m.z)?(e.wardAbsorb(12,m.x,m.z),m.kx=-b,m.kz=-y,m.knock=10):e.hurt("contact",m.x,m.z)&&(m.kx=-b,m.kz=-y,m.knock=8));let w=m.mesh;w.position.set(m.x,m.y,m.z),w.rotation.y=Math.atan2(m.fx,m.fz);let U=m.type==="flyer"?0:Math.abs(Math.sin(m.anim*8))*.08*(Math.abs(M)+Math.abs(C)>.05?1:0);w.position.y=m.y+U;let S=w.userData,D=Math.abs(M)+Math.abs(C)>.05;if(S.model)S.drv&&(S.drv.loop(D?S.spec.move:S.spec.idle,null,m.type==="brute"?.8:1),S.drv.update(h),w.position.y=m.y),m.type==="flyer"&&(w.rotation.x=m.dive===2?.5:Math.sin(m.anim*2)*.12,w.rotation.z=Math.sin(m.anim*3)*.1),m.hurtT>0&&(m.hurtT-=h,Ji(S.mats,1),m.hurtT<=0&&Ji(S.mats,0));else if(m.type==="flyer"&&(S.disc.rotation.y+=h*6,w.rotation.x=m.dive===2?.6:Math.sin(m.anim*2)*.1),m.hurtT>0){m.hurtT-=h;for(let z of S.mats)z.emissive.set("#ffffff"),z.emissiveIntensity=1.5}else S.mats[0].emissiveIntensity=0,S.mats[1].emissive.set(ae.char),S.mats[1].emissiveIntensity=.9+Math.sin(m.anim*5)*.3}}function l(h){for(let f=n.length-1;f>=0;f--){let p=n[f];p.t-=h,p.e.mesh.userData.drv.update(h),p.t<.6&&(p.e.mesh.position.y-=h*1.4),p.t<=0&&(i.remove(p.e.mesh),n.splice(f,1))}}function c(){for(let h of t)i.remove(h.mesh);t.length=0,n.length=0}function u(h){return t.filter(f=>f.alive&&(!h||f.type===h)).length}return{list:t,spawn:s,update:a,damage:r,clear:c,aliveCount:u}}var nb=160,ib=200,gm=i=>i.y+(i.type==="flyer"?0:i.type==="brute"?1.4:1),sb={red:{col:ae.hotred,size:.2},ember:{col:ae.orange,size:.24},pulse:{col:ae.pink,size:.22},ink:{col:ae.violet,size:.34}};function xm(i,e){let t=new ue(new jt(i,8,6),new ke({color:"#ffffff"})),n=bt(e,i*6,.85);return t.add(n),t.userData.glow=n,t.visible=!1,t}function _m(i,e){let t=[],n=[],s=[],r=[],o=[],a=[];for(let _=0;_<nb;_++){let v=xm(.15,ae.gold);i.add(v),t.push({alive:!1,mesh:v})}for(let _=0;_<ib;_++){let v=xm(.2,ae.hotred);i.add(v),n.push({alive:!1,mesh:v})}let l=new rn(.86,1,56),c=new ya(1,24),u=1.05;function h(_,v,w,U,S,D={}){let z=t.find(O=>!O.alive);if(!z)return null;let P=Mt[S];return Object.assign(z,{alive:!0,x:_,y:D.y??u,z:v,vx:w*P.spd*(D.spdMul||1),vz:U*P.spd*(D.spdMul||1),life:D.life||P.life||2.2,dmg:D.dmg||P.dmg,pierce:D.pierce||!!P.pierce,size:D.size||P.size,kind:S,hit:new Set,reflected:!!D.reflected}),z.mesh.visible=!0,z.mesh.scale.setScalar(z.size/.15),z.mesh.userData.glow.material.color.set(D.col||P.col),z.mesh.position.set(_,z.y,v),z.mesh.lookAt(_+w,z.y,v+U),z.mesh.scale.z*=S==="beam"?4:S==="rapid"?2.2:1.4,z}let f=new N;function p(_,v,w,U){u=(_.y||0)+1.05;let S=_.x+_.fx*.9,D=_.z+_.fz*.9;if(e.hero&&e.hero.firesFromHands){e.hero.brace();let Y=e.hero.castPoint(f);S=Y.x+_.fx*.25,D=Y.z+_.fz*.25,u=Y.y}let z=_.fx,P=_.fz,O=1+(w-1)*.35,F=Mt[v].size*(1+(w-1)*.18),$=(Y,ne,fe)=>[Y*Math.cos(fe)-ne*Math.sin(fe),Y*Math.sin(fe)+ne*Math.cos(fe)];if(U)if(v==="single")h(S,D,z,P,v,{dmg:6*O,size:F*2.4,pierce:!0,col:"#ffffff"});else if(v==="scatter")for(let Y=0;Y<14;Y++){let ne=Y/14*Math.PI*2;h(_.x+Math.cos(ne)*.8,_.z+Math.sin(ne)*.8,Math.cos(ne),Math.sin(ne),v,{dmg:1.5*O,size:F*1.3})}else if(v==="rapid")for(let Y=0;Y<9;Y++){let[ne,fe]=$(z,P,(Y-4)*.16);h(S,D,ne,fe,v,{dmg:.9*O,size:F*1.4,spdMul:.9+Y*.03})}else if(v==="beam")for(let Y=0;Y<5;Y++){let[ne,fe]=$(z,P,(Y-2)*.28);h(S,D,ne,fe,v,{dmg:2.2*O,size:F*1.5,pierce:!0,col:"#ffffff"})}else for(let Y=0;Y<12;Y++){let ne=Y/12*Math.PI*2;h(_.x+Math.cos(ne)*.9,_.z+Math.sin(ne)*.9,Math.cos(ne),Math.sin(ne),v,{dmg:1.2*O,size:F*1.6,life:.7})}else if(v==="single")h(S,D,z,P,v,{dmg:Mt.single.dmg*O,size:F});else if(v==="scatter"){let Y=3+Math.min(2,w-1);for(let ne=0;ne<Y;ne++){let[fe,Ae]=$(z,P,(ne-(Y-1)/2)*.22);h(S,D,fe,Ae,v,{dmg:Mt.scatter.dmg*O,size:F})}}else if(v==="rapid"){let Y=(_.shotIx=(_.shotIx||0)+1)%2?1:-1;h(S-P*.22*Y,D+z*.22*Y,z,P,v,{dmg:Mt.rapid.dmg*O,size:F})}else if(v==="beam")h(S,D,z,P,v,{dmg:Mt.beam.dmg*O,size:F});else for(let Y=0;Y<2;Y++){let[ne,fe]=$(z,P,(Math.random()-.5)*.5);h(S,D,ne,fe,v,{dmg:Mt.flame.dmg*O,size:F*(.8+Math.random()*.5),spdMul:.8+Math.random()*.5})}}function m(_){let v=n.find(U=>!U.alive);if(!v)return null;let w=sb[_.kind||"red"];return Object.assign(v,{alive:!0,x:_.x,y:_.y??1.1,z:_.z,vx:_.vx,vy:_.vy||0,vz:_.vz,life:_.life||tp,kind:_.kind||"red",grav:!!_.grav,size:w.size}),v.mesh.visible=!0,v.mesh.scale.setScalar(w.size/.2),v.mesh.userData.glow.material.color.set(w.col),v.mesh.position.set(v.x,v.y,v.z),v}function x(_,v,w,U=12,S=10){let D=new ue(l,new ke({color:w,transparent:!0,opacity:.95,blending:ht,depthWrite:!1,side:xt}));D.rotation.x=-Math.PI/2,D.position.set(_,.12,v),i.add(D),s.push({x:_,z:v,r:.5,spd:U,maxR:S,mesh:D,col:w,passed:!1})}function g(_,v){let w=new ue(c,new ke({color:"#2a0f4a",transparent:!0,opacity:.85,depthWrite:!1}));w.rotation.x=-Math.PI/2,w.position.set(_,.08,v),w.scale.setScalar(1.5),i.add(w),r.push({x:_,z:v,r:1.5,t:3.5,mesh:w})}function d(_){let v=new Oe;v.position.set(_.x,0,_.z);let w=new ue(new vt(.75,.85,.3,8),new We({color:"#2a2030",roughness:.6}));w.position.y=.15,v.add(w);let U=new ue(new Ct(.85,.85,.85),new We({color:"#2D1B4E",roughness:.45,metalness:.3,emissive:ae.gold,emissiveIntensity:.15}));U.position.y=.95,v.add(U);let S=new ue(new Ct(.9,.12,.9),new We({color:ae.gold,metalness:.8,roughness:.25}));S.position.y=.95,v.add(S);let D=S.clone();D.rotation.z=Math.PI/2,v.add(D);let z=bt(ae.gold,1.8,.35);z.position.y=1,v.add(z),i.add(v),o.push({x:_.x,z:_.z,kind:_.kind,hp:2,alive:!0,mesh:v,crate:U,glow:z,t:Math.random()*6})}function b(_,v,w){let U=w==="power"?ae.gold:Mt[w].col,S=new Oe;S.position.set(_,0,v);let D=new ue(w==="power"?new fr(.34):new Ma(.3,0),new We({color:U,emissive:U,emissiveIntensity:1.2,metalness:.5,roughness:.2}));D.position.y=1.1,S.add(D);let z=bt(U,1.6,.6);z.position.y=1.1,S.add(z);let P=new ue(new rn(.5,.62,24),new ke({color:U,transparent:!0,opacity:.6,blending:ht,depthWrite:!1,side:xt}));P.rotation.x=-Math.PI/2,P.position.y=.06,S.add(P),i.add(S),a.push({x:_,z:v,kind:w,mesh:S,core:D,t:0})}function y(_){_.alive=!1,_.mesh.visible=!1}function M(_){let v=e.H,w=e.level,U=e.boss;for(let S of t){if(!S.alive)continue;let D=S.x,z=S.z;if(S.x+=S.vx*_,S.z+=S.vz*_,S.life-=_,S.life<=0){y(S);continue}if(lo(w,D,z,S.x,S.z,S.y-.4)){e.fx.spawn(D,S.y,z,Mt[S.kind].col,4,{spd:2,up:1.5,size:.3}),y(S);continue}let P=!1;for(let O of e.foes.list){if(!O.alive||S.hit.has(O)||Math.abs(gm(O)-S.y)>(O.type==="brute"?1.6:1.25))continue;let F=O.x-S.x,$=O.z-S.z;if(F*F+$*$<(O.r+S.size)**2){S.hit.add(O);let Y=Math.hypot(S.vx,S.vz)||1;if(e.foes.damage(O,S.dmg,S.reflected,S.vx/Y,S.vz/Y,S.kind==="flame"?2:5),e.fx.spawn(S.x,S.y,S.z,Mt[S.kind].col,3,{spd:2,up:1,size:.3}),!S.pierce){P=!0;break}}}if(!P&&U&&U.alive&&U.awake){let O=U.x-S.x,F=U.z-S.z;O*O+F*F<(U.r+S.size)**2&&!S.hit.has(U)&&(S.hit.add(U),U.hit(S)?(U.damage(S.dmg,S.reflected),e.fx.spawn(S.x,S.y,S.z,Mt[S.kind].col,4,{spd:2,up:1,size:.3})):(e.fx.spawn(S.x,S.y,S.z,"#ffffff",3,{spd:2,up:1,size:.25}),e.audio.beep(200,.05,"square",.06)),S.pierce||(P=!0))}if(!P)for(let O of o){if(!O.alive)continue;let F=O.x-S.x,$=O.z-S.z;if(F*F+$*$<.85&&(C(O,S.dmg),!S.pierce)){P=!0;break}}if(P){y(S);continue}S.mesh.position.set(S.x,S.y,S.z),S.kind==="flame"&&S.mesh.scale.setScalar(S.size/.15*(1+(1-S.life/.42)*1.4))}for(let S of n){if(!S.alive)continue;let D=S.x,z=S.z;if(S.x+=S.vx*_,S.z+=S.vz*_,S.life-=_,S.grav||(S.y+=S.vy*_),S.grav&&(S.vy-=22*_,S.y+=S.vy*_,S.y<=.2)){g(S.x,S.z),e.fx.spawn(S.x,.3,S.z,ae.violet,10,{spd:3,up:2}),e.audio.noise(.1,.1,200,1200),y(S);continue}if(S.life<=0||!S.grav&&lo(w,D,z,S.x,S.z,S.y-.4)){y(S);continue}if(v.alive){let P=v.x-S.x,O=v.z-S.z;if(P*P+O*O<(yn+S.size)**2&&(S.grav?S.y<v.y+1.9&&S.y>v.y-.2:Math.abs(S.y-(v.y+1.1))<1)){if(e.wardBlocks(S.x,S.z)){if(e.wardAbsorb(18,S.x,S.z)==="parry"){let $=Math.hypot(S.vx,S.vz)||1;h(S.x,S.z,-S.vx/$,-S.vz/$,"single",{dmg:3,size:.28,reflected:!0,col:"#ffffff",spdMul:1.1,y:S.y})}y(S);continue}if(e.hurt("shot",S.x,S.z)){y(S);continue}}}S.mesh.position.set(S.x,S.y,S.z)}for(let S=s.length-1;S>=0;S--){let D=s[S];if(D.r+=D.spd*_,D.mesh.scale.setScalar(D.r),D.mesh.material.opacity=.95*(1-D.r/D.maxR),D.r>=D.maxR){i.remove(D.mesh),D.mesh.material.dispose(),s.splice(S,1);continue}if(v.alive&&!D.passed){let z=Math.hypot(v.x-D.x,v.z-D.z);Math.abs(z-D.r)<.45+yn&&v.y<.35&&(v.dashT>0?(D.passed=!0,e.onStyle("dash")):v.ward?(D.passed=!0,e.wardAbsorb(30,D.x,D.z)):e.hurt("wave",D.x,D.z)&&(D.passed=!0))}}for(let S=r.length-1;S>=0;S--){let D=r[S];if(D.t-=_,D.mesh.material.opacity=Math.min(.85,D.t*.6),D.t<=0){i.remove(D.mesh),D.mesh.material.dispose(),r.splice(S,1);continue}v.y<.1&&Math.hypot(v.x-D.x,v.z-D.z)<D.r&&(e.slowMul=.5)}for(let S of o)S.alive&&(S.t+=_,S.crate.rotation.y=S.t*.6,S.crate.position.y=.95+Math.sin(S.t*2)*.05,S.glow.material.opacity=.3+Math.sin(S.t*3)*.12);for(let S=a.length-1;S>=0;S--){let D=a[S];D.t+=_,D.core.rotation.y=D.t*2,D.core.rotation.x=D.t,D.core.position.y=1.1+Math.sin(D.t*3)*.12,v.alive&&Math.hypot(v.x-D.x,v.z-D.z)<1.1&&(i.remove(D.mesh),a.splice(S,1),e.onPickup(D.kind,D.x,D.z))}}function C(_,v){_.hp-=v,_.crate.material.emissiveIntensity=1.2,setTimeout(()=>{_.crate.material.emissiveIntensity=.15},80),e.audio.beep(300,.05,"square",.08,150),_.hp<=0&&(_.alive=!1,i.remove(_.mesh),e.fx.spawn(_.x,1,_.z,ae.gold,18,{spd:5,up:5}),e.fx.spawn(_.x,1,_.z,"#ffffff",6,{spd:3,size:.35}),e.fx.ring(_.x,_.z,ae.gold,2.5,.4),e.audio.sfx.crate(),b(_.x,_.z,_.kind),e.onCrate(_))}function T(_,v){let w=e.H,U=0,S=vr+(v?.6:0),D=(P,O,F)=>{let $=P-w.x,Y=O-w.z,ne=Math.hypot($,Y);return ne>S+F?!1:ne<.001?!0:($*w.fx+Y*w.fz)/ne>Math.cos(Qn+Math.asin(Math.min(1,F/Math.max(ne,F))))};for(let P of e.foes.list){if(!P.alive||!D(P.x,P.z,P.r)||Math.abs(gm(P)-(w.y+1))>1.7)continue;U++;let O=P.x-w.x,F=P.z-w.z,$=Math.hypot(O,F)||1;e.foes.damage(P,Ah[_],_===2||v,O/$,F/$,_===2?14:6),e.fx.spawn(P.x,1,P.z,"#ffffff",5,{spd:3,up:2,size:.35})}let z=e.boss;z&&z.alive&&z.awake&&D(z.x,z.z,z.r)&&(z.hit({x:z.x,z:z.z,y:1})?(z.damage(Ah[_],_===2),U++):e.audio.beep(200,.05,"square",.06));for(let P of n)P.alive&&D(P.x,P.z,P.size)&&(y(P),e.fx.spawn(P.x,P.y,P.z,"#ffffff",4,{spd:3,up:1,size:.3}),e.onStyle("cut"));for(let P of o)P.alive&&D(P.x,P.z,.6)&&C(P,2);return U}function E(){for(let _ of t)y(_);for(let _ of n)y(_);for(let _ of s)i.remove(_.mesh);s.length=0;for(let _ of r)i.remove(_.mesh);r.length=0;for(let _ of o)_.alive&&i.remove(_.mesh);o.length=0;for(let _ of a)i.remove(_.mesh);a.length=0}function I(){for(let _ of n)y(_)}return{bullets:t,ebullets:n,waves:s,crates:o,pickups:a,fire:p,spawnEBullet:m,spawnWave:x,spawnCrate:d,spawnPickup:b,bladeStrike:T,update:M,clear:E,clearEnemyShots:I,WEP_ORDER:Yf}}var Es=(i={})=>new We({color:"#1b1b24",roughness:.5,metalness:.4,...i}),Ss=(i,e=1)=>new We({color:i,emissive:i,emissiveIntensity:e});function Wn(i,e,t,n){return new ue(new Ct(i,e,t),n)}var Tu=(i,e,t,n=2)=>{let s=i.bossRect;return[Math.max(s.x0*2+n,Math.min(s.x1*2-n,e)),Math.max(s.z0*2+n,Math.min(s.z1*2-n,t))]};function tl(i,e,t,n=10){let s=i.H;if(!s.alive||s.y>1.3)return;let r=s.x-e.x,o=s.z-e.z,a=Math.hypot(r,o)||.001;if(a<t+yn){let l=r/a,c=o/a;s.ward?(i.wardAbsorb(jf,e.x,e.z),i.shove(l,c,n)):i.hurt("boss",e.x,e.z)&&i.shove(l,c,n*.6)}}function rb(i,e,t){let n=new Oe;i.add(n),n.add(Vn(2.4));let s=Es(),r=Ss(ae.char,.9),o=[s,r],a=Wn(3.4,2.2,2.6,s);a.position.y=1.5,n.add(a);let l=Wn(1.6,1.2,.3,Ss(ae.orange,1.6));l.position.set(0,1.3,1.35),n.add(l);let c=bt(ae.orange,3.2,.7);c.position.set(0,1.3,1.6),n.add(c);for(let p of[-1,1]){let m=Wn(1,.9,3,Es({color:"#101016"}));m.position.set(p*1.9,.45,0),n.add(m);let x=Wn(1.02,.1,2.6,r);x.position.set(p*1.9,.5,0),n.add(x)}let u=new ue(new vt(.35,.45,1.6,10),s);u.position.set(-.8,3.2,-.6),n.add(u);let h=u.clone();h.position.x=.8,n.add(h);let f=Wn(2.2,.16,1.2,Ss(ae.gold,.4));f.position.set(0,2.7,.4),n.add(f);for(let p of[-1,1]){let m=new ue(new jt(.14,8,6),new ke({color:ae.hotred}));m.position.set(p*.7,2.1,1.32),n.add(m)}Object.assign(t,{mesh:n,mats:o,r:2,y:0,home:{x:t.x,z:t.z},shootT:1.5,pat:0,burst:0,burstT:0,lunge:0,lungeT:0,lungeCd:3,tx:0,tz:0}),t.hit=()=>!0,t.update=p=>{let m=e.H,x=t.x,g=t.z+1.2;if(t.t+=p,t.lunge===0&&(t.x=t.home.x+Math.sin(t.t*.7)*3,t.z=t.home.z+Math.sin(t.t*1.2)*.6),Math.random()<p*22&&e.fx.ember(t.x+(Math.random()-.5)*1.2,1.4,t.z+1.4,ae.orange,.35,.8,1.8),Math.random()<p*8&&e.fx.ember(t.x-.8+Math.random()*1.6,4,t.z-.6,"#efe6cf",.3,1.4,.8),t.hp/t.max<.33&&Math.random()<p*6&&e.fx.spawn(t.x+1.2,2.4,t.z,"#ffffff",3,{spd:2,up:2,size:.3}),t.shootT-=p,t.burst>0){if(t.burstT-=p,t.burstT<=0&&m.alive){t.burst--,t.burstT=.16;let d=m.x-x,b=m.z-g,y=Math.hypot(d,b)||1;e.combat.spawnEBullet({x,y:1.3,z:g,vx:d/y*11,vz:b/y*11,kind:"ember"}),e.fx.spawn(x,1.3,g,ae.orange,5,{spd:2,up:1,size:.3}),e.audio.noise(.08,.14,500,200)}}else if(t.shootT<=0&&m.alive)if(t.pat=(t.pat+1)%3,t.pat===2)t.burst=3,t.burstT=0,t.shootT=1.6;else{t.shootT=1.15;let d=Math.atan2(m.z-g,m.x-x);for(let b=-2;b<=2;b++){let y=d+b*.2+Math.sin(t.t)*.12;e.combat.spawnEBullet({x,y:1.3,z:g,vx:Math.cos(y)*9,vz:Math.sin(y)*9,kind:"ember"})}e.fx.spawn(x,1.3,g,ae.orange,8,{spd:3,up:2,size:.3}),e.audio.noise(.12,.18,400,150)}if(tl(e,t,t.r),t.hp/t.max<.5)if(t.lungeCd-=p,t.lunge===0&&t.lungeCd<=0)t.lunge=1,t.lungeT=.5,e.audio.noise(.5,.2,200,600),e.flash("TREADS FLARE \u2014 DASH THE WAVE",ae.char);else if(t.lunge===1){if(t.lungeT-=p,r.emissiveIntensity=2.5,t.lungeT<=0){t.lunge=2,t.lungeT=.34;let d=m.x-t.x,b=m.z-t.z,y=Math.hypot(d,b)||1;t.tx=d/y,t.tz=b/y}}else if(t.lunge===2){t.lungeT-=p;let[d,b]=Tu(e.level,t.x+t.tx*22*p,t.z+t.tz*22*p,2.6);t.x=d,t.z=b,tl(e,t,t.r+.3),t.lungeT<=0&&(t.lunge=3,t.lungeT=.9,e.shake(10),e.audio.sfx.slam(),e.combat.spawnWave(t.x,t.z,ae.char,13,11),e.fx.spawn(t.x,.3,t.z,ae.char,24,{spd:6,up:4}),e.fx.ring(t.x,t.z,ae.char,4,.5))}else t.lunge===3&&(t.lungeT-=p,r.emissiveIntensity=.9,t.x+=(t.home.x-t.x)*Math.min(1,p*3),t.z+=(t.home.z-t.z)*Math.min(1,p*3),t.lungeT<=0&&(t.lunge=0,t.lungeCd=4.5));n.position.set(t.x,t.y+Math.sin(t.t*1.2)*.06,t.z),n.rotation.y=Math.atan2(m.x-t.x,m.z-t.z)*.25,c.material.opacity=.5+Math.sin(t.t*6)*.2}}function ob(i,e,t){let n=new Oe;i.add(n),n.add(Vn(2.2));let s=Ss(ae.pink,1.4),r=Es({color:"#2a1230"}),o=Ss(ae.pink,.8),a=[s,r,o],l=new Oe;l.position.y=2.4,n.add(l);let c=new ue(new jt(.9,20,14),s);l.add(c);let u=bt(ae.pink,3.4,.6);l.add(u);let h=new ue(new Jn(2.2,.06,8,48),o);h.rotation.x=Math.PI/2,l.add(h);let f=new Oe;l.add(f);let p=[];for(let g=0;g<6;g++){let d=new Oe;d.rotation.y=g*Math.PI/3;let b=Wn(1.15,1.7,.22,r);b.position.z=2,d.add(b);let y=Wn(1.17,.08,.24,o);y.position.set(0,.85,2),d.add(y),f.add(d),p.push(b)}let m=bt(ae.cyan,1.8,.6);m.position.y=-1.1,l.add(m);let x=new ue(new wn(1.8,40),new ke({color:ae.pink,transparent:!0,opacity:0,blending:ht,depthWrite:!1,side:xt}));x.rotation.x=-Math.PI/2,x.position.y=.1,i.add(x),t.mount=f,Object.assign(t,{mesh:n,mats:a,extra:[x],r:2.3,y:2.4,home:{x:t.x,z:t.z},rot:0,open:0,openCd:4,mode:"cruise",modeT:2.2,shootT:1.2,beamOn:0,spawnCd:5,bx:0,bz:0,bdx:0,bdz:1}),t.hit=g=>{if(t.open>0)return!0;let d=Math.atan2(g.x-t.x,g.z-t.z),b=Math.PI/3;return((d-t.rot)%b+b)%b>b*.62},t.update=g=>{let d=e.H;t.t+=g,t.rot+=g*(t.open>0?.3:.9),f.rotation.y=t.rot,t.x=t.home.x+Math.sin(t.t*.5)*4.5,t.z=t.home.z+Math.sin(t.t*1.3)*1.4,t.open>0?t.open-=g:(t.openCd-=g,t.openCd<=0&&(t.open=1.8,t.openCd=4.5,e.flash("ARRAY OPEN \u2014 HIT THE CORE",ae.cyan),e.audio.sfx.open()));let b=t.open>0?3.2:2;for(let y of p)y.position.z+=(b-y.position.z)*Math.min(1,g*6);if(Math.random()<g*18&&e.fx.ember(t.x+(Math.random()-.5)*2,1.2,t.z+(Math.random()-.5)*2,ae.pink,.3,.7,-1.5),t.modeT-=g,t.spawnCd-=g,t.mode==="cruise"){if(t.shootT-=g,t.shootT<=0&&d.alive){t.shootT=1.1;let y=Math.atan2(d.z-t.z,d.x-t.x);for(let M of[-.12,0,.12])e.combat.spawnEBullet({x:t.x,y:1.3,z:t.z,vx:Math.cos(y+M)*10,vz:Math.sin(y+M)*10,kind:"pulse"});e.fx.spawn(t.x,1.5,t.z,ae.pink,6,{spd:3,up:1,size:.3}),e.audio.beep(1400,.08,"sine",.12,600)}if(t.modeT<=0){let y=e.foes.aliveCount("flyer");if(t.mode=t.spawnCd<=0&&y<3?"deploy":"sweep",t.modeT=t.mode==="sweep"?.75:.9,t.mode==="sweep"){let M=d.x-t.x,C=d.z-t.z,T=Math.hypot(M,C)||1;t.bdx=M/T,t.bdz=C/T,t.bx=t.x,t.bz=t.z,e.audio.sfx.beamTell(),e.flash("BEAM \u2014 STEP OFF THE LINE",ae.pink)}}}else if(t.mode==="sweep"){if(x.position.set(t.bx+t.bdx*20,.1,t.bz+t.bdz*20),x.rotation.z=-Math.atan2(t.bdx,t.bdz),t.beamOn<=0&&(x.material.opacity=.25+Math.floor(t.t*12)%2*.25),t.modeT<=0&&t.beamOn<=0&&(t.beamOn=.4,e.shake(5),e.audio.sfx.beamFire()),t.beamOn>0){if(t.beamOn-=g,x.material.opacity=.95,Math.random()<g*40&&e.fx.spawn(t.bx+t.bdx*Math.random()*30,.3,t.bz+t.bdz*Math.random()*30,ae.pink,2,{spd:2,up:4,size:.3}),d.alive){let y=d.x-t.bx,M=d.z-t.bz,C=y*t.bdx+M*t.bdz,T=Math.abs(y*t.bdz-M*t.bdx);C>0&&C<40&&T<.9+yn&&d.y<1.2&&(d.ward?e.wardAbsorb(70*g,t.x,t.z):e.hurt("beam",t.x,t.z))}t.beamOn<=0&&(t.mode="cruise",t.modeT=2.4,t.shootT=.8,x.material.opacity=0)}}else if(t.mode==="deploy"&&t.modeT<=0){for(let y of[-1.6,1.6]){let[M,C]=Tu(e.level,t.x+y,t.z+1.5);e.foes.spawn("flyer",M,C).aggro=!0}e.fx.spawn(t.x,1.8,t.z,ae.cyan,14,{spd:4,up:2}),e.audio.beep(500,.2,"square",.15,250),t.spawnCd=9,t.mode="cruise",t.modeT=2.4}tl(e,t,1.6),n.position.set(t.x,0,t.z),l.position.y=2.4+Math.sin(t.t*1.6)*.2,c.rotation.y+=g,u.material.opacity=t.open>0?.9:.5,s.emissiveIntensity=t.open>0?2.4:1.4}}function ab(i,e,t){let n=new Oe;i.add(n);let s=Vn(2);n.add(s);let r=Es({color:"#141018"}),o=Ss(ae.violet,.9),a=Ss(ae.gold,.1),l=[r,o],c=new Oe;n.add(c);let u=Wn(3.2,1.8,2.4,r);u.position.y=.9,c.add(u);for(let C of[-1,1]){let T=Wn(.1,.5,2.3,o);T.position.set(C*1.62,.9,0),c.add(T)}let h=new ue(new vt(.7,.7,.14,16),a);h.position.set(0,1.86,.4),c.add(h);let f=bt(ae.gold,2.4,0);f.position.set(0,2,.4),c.add(f);let p=new ue(new vt(.4,.5,8,10),Es({color:"#22202a"}));p.position.y=5.8,c.add(p);let m=e.level.bossRect,x=m.x0*2+1,g=m.x1*2-1,d=m.z0*2+1,b=m.z1*2-1,y=new Oe;i.add(y);for(let C of[d+1.5,b-1.5]){let T=Wn(g-x,.3,.5,Es({color:"#22202a"}));T.position.set((x+g)/2,7.2,C),y.add(T)}let M=Wn(1.4,.4,b-d-2.5,Es({color:"#22202a"}));M.position.set(lb(e).x,7.2,(d+b)/2),y.add(M),t.mount=c,Object.assign(t,{mesh:n,mats:l,extra:[y],r:1.9,y:5.5,state:"track",st:2,topY:5.5,botY:0,vul:!1}),t.hit=()=>t.vul,t.update=C=>{let T=e.H;t.t+=C,t.st-=C;let[E,I]=Tu(e.level,T.x,T.z,2.5);if(t.state==="track")t.vul=!1,t.x+=(E-t.x)*Math.min(1,C*2.2),t.z+=(I-t.z)*Math.min(1,C*2.2),t.y=t.topY+Math.sin(t.t*2)*.15,t.st<=0&&(t.state="slam",t.st=.22,e.audio.noise(.2,.2,300,80));else if(t.state==="slam"){if(t.y+=(t.botY-t.y)*Math.min(1,C*14),t.st<=0){t.y=t.botY,t.state="down",t.st=1.1,t.vul=!0,e.shake(12),e.audio.sfx.slam(),e.combat.spawnWave(t.x,t.z,ae.violet,13,9);for(let _=0;_<3;_++){let v=Math.atan2(T.z-t.z,T.x-t.x)+(_-1)*.9+(Math.random()-.5)*.4,w=4+Math.random()*3;e.combat.spawnEBullet({x:t.x,y:2.2,z:t.z,vx:Math.cos(v)*w,vz:Math.sin(v)*w,vy:7.5,kind:"ink",grav:!0,life:6})}e.fx.spawn(t.x,.3,t.z,ae.violet,26,{spd:6,up:4}),e.fx.ring(t.x,t.z,ae.violet,5,.5),e.flash("SEAL EXPOSED \u2014 FIRE",ae.gold)}}else t.state==="down"?t.st<=0&&(t.state="rise",t.st=.6,t.vul=!1):t.state==="rise"&&(t.y+=(t.topY-t.y)*Math.min(1,C*6),t.st<=0&&(t.state="track",t.st=1.6+Math.random()*.8));Math.random()<C*8&&e.fx.ember(t.x-1.4+Math.random()*2.8,t.y+.2,t.z+(Math.random()-.5)*2,"#6a3cff",.3,.8,-1),t.state!=="track"&&tl(e,t,1.9),n.position.set(t.x,0,t.z),c.position.y=t.y,s.scale.setScalar(1-t.y/8),M.position.x=t.x,a.emissiveIntensity=t.vul?2.2:.1,f.material.opacity=t.vul?.8:0,o.emissiveIntensity=t.vul?2:.9}}var lb=i=>i.level.bossPos;function ym(i,e,t){let n=np[t],s=e.level.bossPos,r={key:t,name:n.name,wake:n.wake,x:s.x,z:s.z,hp:n.hp,max:n.hp,alive:!0,awake:!1,t:0,hurtT:0,stun:0,extra:[],dying:0};({engine:rb,censor:ob,redactor:ab})[t](i,e,r);let o=om(e.assets,r,r.mount),a=r.update;r.damage=(l,c)=>{r.alive&&(l*=e.comboHit?e.comboHit():1,r.hp-=l,r.hurtT=.1,e.audio.sfx.bossHit(),e.onBossDamage(l,c),r.hp<=0&&(r.hp=0,r.alive=!1,r.dying=2.4,e.onBossDead()))},r.update=l=>{if(!r.alive){r.dying-=l,Math.random()<l*14&&(e.fx.spawn(r.x+(Math.random()-.5)*3,1+Math.random()*2,r.z+(Math.random()-.5)*3,Math.random()<.5?"#ffffff":ae.orange,10,{spd:6,up:5}),e.shake(4)),r.mesh.position.y-=l*.35,r.mesh.rotation.z+=l*.15;return}if(r.stun>0){r.stun-=l,r.t+=l*.1,r.mesh.rotation.x=Math.sin(r.t*40)*.03;return}if(a(l),r.hurtT>0){r.hurtT-=l,r.wasHurt=!0;for(let c of r.mats)c.emissive.set("#ffffff"),c.emissiveIntensity=1.6;o&&Ji(o.mats,1),r.hurtT<=0&&o&&Ji(o.mats,0)}else if(r.wasHurt){r.wasHurt=!1;for(let c of r.mats)c.emissive.setHex(c.userData.def.c),c.emissiveIntensity=c.userData.def.i}};for(let l of r.mats)l.userData.def={c:l.emissive.getHex(),i:l.emissiveIntensity};return r.dispose=()=>{i.remove(r.mesh);for(let l of r.extra)i.remove(l)},r.mesh.position.set(r.x,0,r.z),r}var cb=i=>document.getElementById(i),Qi=i=>String(i).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]);function vm(){let i={};for(let E of["hud","heroName","heroTitle","lives","wep","pow","wardBar","chargeBar","score","mult","pages","rail","flash","bossBar","bossName","bossFill","pageCard","pgTitle","pgLine","pgSrc","menu","select","worldSel","codexPop","pausePop","endPop","cardM","cardK","wrow","cxWrap","endMsg","endSub","rkRank","rkScore","rkGrid","rkHint","rkWorld","rkRows","nextWorld","muteBtn","sfxBtn","pauseBtn","touch","hint"])i[E]=cb(E);let e=0,t=0;function n(E){for(let I of document.querySelectorAll(".overlay"))I.classList.add("hidden");E&&i[E].classList.remove("hidden"),document.body.classList.toggle("playing",!E),i.pauseBtn.classList.toggle("hidden",!!E),i.muteBtn.classList.toggle("hidden",!!E&&E!=="pausePop"),i.sfxBtn.classList.toggle("hidden",!!E&&E!=="pausePop")}function s(E,I=ae.gold){i.flash.textContent=E,i.flash.style.color=I,i.flash.style.textShadow=`0 0 18px ${I}`,e=1.7,i.flash.style.opacity=1}function r(E){i.hint.textContent=E||""}function o(E){i.heroName.textContent=E.name,i.heroName.style.color=E.accent,i.heroTitle.textContent=E.title}function a(E){i.rail.textContent=E.rail,i.rail.style.color=E.accent}function l(E){i.pgTitle.textContent=E.t,i.pgLine.textContent=E.l,i.pgSrc.textContent=E.s,t=4.8,i.pageCard.classList.remove("hidden")}function c(E){i.bossName.textContent=E,i.bossBar.classList.remove("hidden")}function u(E,I){i.bossFill.style.width=Math.max(0,E/I*100)+"%"}function h(){i.bossBar.classList.add("hidden")}function f(E,I,_,v){i.lives.textContent="\u25C6".repeat(Math.max(0,I.lives))+"\u25C7".repeat(Math.max(0,3-I.lives));let w=Mt[I.weapon];i.wep.textContent=w.name,i.wep.style.color=w.col,i.wep.style.borderColor=w.col,i.pow.innerHTML=Array.from({length:yr},(U,S)=>`<i class="${S<I.power?"on":""}"></i>`).join(""),i.wardBar.firstElementChild.style.width=Math.max(0,I.shield/Yi*100)+"%",i.wardBar.classList.toggle("broken",I.wardBroken>0),i.chargeBar.firstElementChild.style.width=Math.min(1,I.charge/ys)*100+"%",i.chargeBar.classList.toggle("full",I.charge>=ys),i.score.textContent=_.score.toLocaleString(),i.mult.textContent="\xD7"+_.mult.toFixed(2).replace(/\.?0+$/,""),i.mult.style.color=_.mult>=4?ae.gold:_.mult>=2?ae.cyan:"#cfc6b8",i.pages.textContent=`${_.pages} RECORDS RECOVERED`,e>0&&(e-=E,e<.5&&(i.flash.style.opacity=e/.5)),t>0&&(t-=E,t<=0&&i.pageCard.classList.add("hidden"))}function p(E){i.cardM.classList.toggle("sel",E==="melvinci"),i.cardK.classList.toggle("sel",E==="kimaya")}function m(E,I){i.wrow.innerHTML=ei.map(_=>{let v=vn[_],w=co(_),U=Mp(_),S=!I.includes(_);return`<div class="selcard wcard ${E===_?"sel":""} ${S?"locked":""}" data-w="${_}" style="--acc:${v.accent}">
        <div class="wglyph" style="background:radial-gradient(circle at 50% 60%, ${v.sky[1]}, ${v.sky[2]})"><span style="color:${v.accent}">${_==="ramparts"?"\u26EB":_==="venus"?"\u263F":"\u{1F4DC}"}</span></div>
        <div class="selname" style="color:${v.accent}">${v.name}</div><div class="seltag">${Qi(v.tag)}</div>
        <div class="selbest">${w?`BEST ${w.s.toLocaleString()} \xB7 ${w.r} \xB7 ${Ot[w.h]?Ot[w.h].name:w.h}`:"NO RUN YET"} &nbsp;\xB7&nbsp; CODEX ${U}/${ao[_].length}</div>
        ${S?'<div class="lock">CLEAR THE PREVIOUS FRONT</div>':""}</div>`}).join("")}function x(){let E=ho(),I=/[?&]codexall/.test(location.search),_=["\u2726 \u25C8 \u2726","\u25C8 \u2726 \u25C8","\u2727 \u2726 \u2727"],v=(w,U,S,D)=>I||U.includes(w.id)?`<div class="cx-scroll"><div class="cx-paper"><span class="cx-glyphs">${_[D%_.length]}</span><b>${Qi(w.t)}</b><p>${Qi(w.l)}</p><small>${Qi(w.s)}</small><span class="cx-seal">\u2726</span></div></div>`:`<div class="cx-scroll sealed"><div class="cx-paper"><span class="cx-glyphs">\u2726 \u2726 \u2726</span><b>${Qi(w.t)}</b><span class="cx-ink" style="width:94%"></span><span class="cx-ink" style="width:80%"></span><span class="cx-ink" style="width:88%"></span><span class="cx-ink" style="width:56%"></span><span class="cx-stamp">REDACTED</span><small>Recover it in ${Qi(S.name)}</small></div></div>`;i.cxWrap.innerHTML=ei.map(w=>{let U=vn[w],S=E[w]||[],D=ao[w],z=D.filter(O=>S.includes(O.id)).length,P=Sh.filter(O=>D.some(F=>F.v===O.id));return`<div class="cx-world" style="--acc:${U.accent}"><h3>${Qi(U.name)} <small>${z}/${D.length} recovered</small></h3>`+P.map(O=>{let F=D.filter(Y=>Y.v===O.id),$=F.filter(Y=>S.includes(Y.id)).length;return`<div class="cx-vol">${Qi(O.title)} <small>${$}/${F.length}</small></div><div class="cx-grid">${F.map((Y,ne)=>v(Y,S,U,ne)).join("")}</div>`}).join("")+"</div>"}).join("")}function g(E,I,_,v,w){i.endMsg.textContent=v?"UNERASED":"ERASED",i.endMsg.style.color=v?ae.gold:ae.hotred,i.endSub.textContent=v?_.win:"The line broke. The pages you recovered stay in the Codex \u2014 the rest are still out there.",i.rkRank.textContent=I,i.rkRank.style.color=I==="UNERASED"?ae.gold:I==="SAGE"?ae.cyan:I==="SCHOLAR"?ae.green:"#cfc6b8",i.rkScore.textContent=E.score.toLocaleString();let U=Math.floor(E.t/60),S=Math.floor(E.t%60),D=[["TIME",`${U}:${String(S).padStart(2,"0")}`],["HITS",E.hits],["KILLS",`${E.kills} \xB7 ${E.styleKills} style`],["PARRIES",E.parries],["BEST MULT","\xD7"+E.bestMult],["RECORDS",E.pages]];i.rkGrid.innerHTML=D.map(([P,O])=>`<div><small>${P}</small><b>${O}</b></div>`).join(""),i.rkHint.textContent=xp(I),i.rkWorld.textContent=_.name;let z=Va()[_.key]||[];i.rkRows.innerHTML=z.length?z.map((P,O)=>`<div class="lbrow"><span>${O+1}</span><b>${P.s.toLocaleString()}</b><span>${P.r}</span><span style="color:${Ot[P.h]?Ot[P.h].accent:"#fff"}">${Ot[P.h]?Ot[P.h].name:P.h}</span><span>${P.d}</span></div>`).join(""):'<div class="lbrow"><span>\u2014</span></div>',i.nextWorld.classList.toggle("hidden",!(v&&w)),w&&(i.nextWorld.textContent=`Next: ${vn[w].name} \u25B8`)}let d=null;function b(E){d||(d=document.createElement("div"),d.className="screenflash",document.body.appendChild(d)),d.style.background=`radial-gradient(circle at 50% 55%, ${E}88, ${E}00 70%)`,d.classList.remove("go"),d.offsetWidth,d.classList.add("go")}let y=null,M=0;function C(E){if(!y){y=document.createElement("div"),y.id="combo";let I=document.createElement("b"),_=document.createElement("small");_.textContent="HIT COMBO",y.append(I,_),i.hud.appendChild(y)}if(E<2){y.classList.remove("on"),M=0;return}y.firstChild.textContent=E,y.classList.add("on"),y.style.color=E>=30?"#ff7ad9":E>=15?"#ffd76a":E>=6?"#4CE0E0":"#f4ecd8",E!==M&&(y.classList.remove("pop"),y.offsetWidth,y.classList.add("pop"),M=E)}function T(E,I){i.muteBtn.classList.toggle("off",!!I),i.muteBtn.title=I?"Music is off (M)":"Music is on (M)",i.sfxBtn.textContent=E?"\u{1F507}":"\u{1F50A}",i.sfxBtn.classList.toggle("off",!!E)}return{el:i,show:n,flash:s,hint:r,setHero:o,setWorld:a,showPage:l,boss:c,bossHp:u,hideBoss:h,update:f,renderSelect:p,renderWorlds:m,renderCodex:x,renderEnd:g,setMuted:T,screenFlash:b,combo:C}}var bm="unerased3d.sound.v1",po=Object.freeze({music:.55,sfx:1,musicOn:!0,sfxOn:!0}),Mm=i=>typeof i=="number"&&Number.isFinite(i)?Math.max(0,Math.min(1,i)):null;function es(i,e={}){let t={...po,...i,...e};return{music:Mm(t.music)??po.music,sfx:Mm(t.sfx)??po.sfx,musicOn:typeof t.musicOn=="boolean"?t.musicOn:po.musicOn,sfxOn:typeof t.sfxOn=="boolean"?t.sfxOn:po.sfxOn}}function Em(){try{return globalThis.localStorage||null}catch{return null}}function Sm(i=Em()){if(!i)return es({});try{return es(JSON.parse(i.getItem(bm)||"{}")||{})}catch{return es({})}}function wm(i,e=Em()){if(!e)return!1;try{return e.setItem(bm,JSON.stringify(i)),!0}catch{return!1}}function Tm(i,e,t){let n=document.createElement("div");n.className="soundpanel";let s=(o,a,l)=>{let c=document.createElement("div");c.className="srow";let u=document.createElement("span");u.textContent=o;let h=document.createElement("input");h.type="range",h.min="0",h.max="100",h.step="1",h.setAttribute("aria-label",o+" volume");let f=document.createElement("b"),p=document.createElement("button");return p.type="button",p.className="stoggle",h.addEventListener("input",()=>t({[a]:Number(h.value)/100,[l]:!0})),p.addEventListener("click",()=>t({[l]:!e()[l]})),c.append(u,h,f,p),{wrap:c,render(m){h.value=String(Math.round(m[a]*100)),f.textContent=m[l]?Math.round(m[a]*100)+"%":"OFF",p.textContent=m[l]?"ON":"OFF",p.classList.toggle("off",!m[l]),c.classList.toggle("muted",!m[l])}}},r=[s("MUSIC","music","musicOn"),s("EFFECTS","sfx","sfxOn")];return n.append(...r.map(o=>o.wrap)),i.appendChild(n),{render(o){for(let a of r)a.render(o)}}}var an=pm({base:/quantummelaninmedia\.com$/.test(location.hostname)?"/assets/audio/":"./assets/music/"}),dt=i=>document.getElementById(i),Im=dt("scene"),Si=new ha({canvas:Im,antialias:!0,powerPreference:"high-performance"});Si.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5));Si.outputColorSpace=gt;Si.toneMapping=so;Si.toneMappingExposure=1.05;var Cn=new da,Mn=new zt(dn.fov,1,dn.near,dn.far),ol=new URLSearchParams(location.search).has("lq")?"low":"high";ol==="high"&&(Si.shadowMap.enabled=!0,Si.shadowMap.type=nh);var ts=ol==="high"?new za(Si):null,Cu=null;ts&&(ts.addPass(new Fa(Cn,Mn)),Cu=new _r(new be(512,512),.75,.45,.78),ts.addPass(Cu),ts.addPass(new Ba));var Au=()=>ts?ts.render():Si.render(Cn,Mn);function Pm(){let i=window.innerWidth,e=window.innerHeight;Si.setSize(i,e,!1),Mn.aspect=i/e,Mn.updateProjectionMatrix(),ts&&(ts.setSize(i,e),Cu.setSize(Math.round(i/2),Math.round(e/2)))}window.addEventListener("resize",Pm);Pm();var ut=bp(),Ne=vm(),Pt=wp(Cn),kt=Sp(Im,dt("stick"),dt("knob"),{fire:dt("tFire"),blade:dt("tBlade"),ward:dt("tWard"),dash:dt("tDash"),swap:dt("tSwap"),jump:dt("tJump"),magic:dt("tMagic")}),nt=kt.IN,Gt=Sm(),hb=[dt("menuSound"),dt("pauseSound")].filter(Boolean).map(i=>Tm(i,()=>Gt,e=>xo(es(Gt,e))));function xo(i){Gt=i,wm(Gt),an.setVolume(Gt.music),an.setMuted(!Gt.musicOn),ut.setVolume(Gt.sfx),ut.setMuted(!Gt.sfxOn),Ne.setMuted(!Gt.sfxOn,!Gt.musicOn);for(let e of hb)e.render(Gt)}xo(Gt);var B={scene:Cn,camera:Mn,audio:ut,fx:Pt,hud:Ne,input:kt,assets:null,level:null,world:null,hero:null,foes:null,combat:null,boss:null,run:null,t:0,slowMul:1,H:null},Lt="menu",Nt="melvinci",Xt="ramparts",ns=null,il=[],Rr=0,sl=0,Cr=-1,mo=-1,nl=1,on={yaw:0,pitch:1,dist:1},rl=new N,Am=new N,Lm=()=>{let i=["ramparts"];return co("ramparts")&&i.push("venus"),co("venus")&&i.push("archive"),i};function ub(i,e){return{x:i,z:e,y:0,vy:0,onGround:!0,airJumps:1,vx:0,vz:0,fx:0,fz:-1,r:yn,alive:!0,invuln:0,dashT:0,dashCd:0,ddx:0,ddz:-1,ward:!1,wardT:9,wardBroken:0,parried:!1,shield:Yi,regenDelay:0,weapon:"single",power:1,owned:["single"],lives:ka,fireCd:0,charge:0,charged:!1,wasFiring:!1,bladeN:0,bladeT:0,bladeWindow:0,mv:0,mvx:0,mvz:0,parryFlash:0,deadT:0,shotIx:0}}B.flash=(i,e)=>Ne.flash(i,e);B.shake=i=>{Rr=Math.max(Rr,i)};B.hitstop=i=>{sl=Math.max(sl,i)};B.shove=(i,e,t)=>{B.H.vx+=i*t,B.H.vz+=e*t};B.wardBlocks=(i,e)=>{let t=B.H;if(!t.ward)return!1;let n=i-t.x,s=e-t.z,r=Math.hypot(n,s)||1;return(n*t.fx+s*t.fz)/r>Math.cos(Ki)};B.wardAbsorb=(i,e,t)=>{let n=B.H;return n.wardT<Qf&&!n.parried?(n.parried=!0,B.run=up(B.run),B.powers&&B.powers.addMeter("parry"),n.parryFlash=.18,ut.sfx.parry(),Pt.ring(n.x,n.z,"#ffffff",2.4,.3),Pt.spawn(n.x+n.fx*.9,1.1,n.z+n.fz*.9,"#ffffff",10,{spd:4,up:2,size:.35}),Ne.flash(B.run.parryChain>=3?"GOLD CANNON ARMED \u2014 FIRE":"PARRY",B.run.parryChain>=3?ae.gold:ae.cyan),B.hitstop(.05),"parry"):(n.shield-=i,n.regenDelay=Ih,ut.sfx.ward(),Pt.spawn(e+(n.x-e)*.5,1.1,t+(n.z-t)*.5,Ot[Nt].accent,5,{spd:2,up:1,size:.3}),B.shake(2),n.shield<=0?(n.shield=0,n.ward=!1,n.wardBroken=1.6,ut.sfx.shatter(),Ne.flash("WARD SHATTERED",ae.hotred),Pt.spawn(n.x,1.1,n.z,Ot[Nt].accent,20,{spd:5,up:3}),"shatter"):"block")};B.hurt=(i,e,t)=>{let n=B.H;if(!n.alive||n.invuln>0||n.dashT>0)return!1;if(B.combo.n=0,B.combo.t=0,Ne.combo(0),n.lives--,B.run=fp(B.run),n.invuln=Xf,n.weapon="single",n.power=1,n.charge=0,n.charged=!1,n.ward=!1,B.hero.setWeaponColor(Mt.single.col),B.hero.hurtFlash(),ut.sfx.hurt(),B.shake(7),B.hitstop(.06),Pt.spawn(n.x,1.1,n.z,ae.hotred,16,{spd:5,up:3}),Pt.ring(n.x,n.z,ae.hotred,2.5,.4),e!==void 0){let s=n.x-e,r=n.z-t,o=Math.hypot(s,r)||1;B.shove(s/o,r/o,9)}return n.lives<=0?(n.alive=!1,n.deadT=1.6,Ne.flash("THE LINE BREAKS",ae.hotred)):Ne.flash(n.lives===1?"LAST LIFE \u2014 HOLD THE LINE":"HIT \u2014 BLASTER RESET",ae.hotred),!0};B.combo={n:0,t:0,best:0};B.comboHit=()=>{let i=B.combo;return i.n=i.t>0?i.n+1:1,i.t=kf,i.best=Math.max(i.best,i.n),Ne.combo(i.n),1+Math.min(1.5,(i.n-1)*.08)};B.onKill=(i,e)=>{B.run=hp(B.run,e||B.H.dashT>0),B.powers&&B.powers.addMeter("kill")};B.onStyle=i=>{B.run={...B.run,score:B.run.score+(i==="dash"?50:10)},i==="dash"&&Ne.flash("DASHED THE WAVE",ae.cyan)};B.onCrate=()=>{let i=Bh(Xt,B.run.pages);B.run=Oh(B.run),Fh(Xt,i.id),Ne.showPage(i),ut.sfx.page()};B.onPickup=(i,e,t)=>{let n=B.H;i==="power"?(n.power=Math.min(yr,n.power+1),Ne.flash(n.power===yr?"POWER MAX":"POWER UP",ae.gold)):(n.owned.includes(i)||n.owned.push(i),n.weapon=i,B.hero.setWeaponColor(Mt[i].col),Ne.flash(Mt[i].name,Mt[i].col)),ut.sfx.pickup(),Pt.spawn(e,1.1,t,i==="power"?ae.gold:Mt[i].col,16,{spd:4,up:4})};B.onBossDamage=i=>{B.run=dp(B.run,i),Ne.bossHp(B.boss.hp,B.boss.max)};B.onBossDead=()=>{ut.sfx.bossDie(),Ne.flash(B.boss.name+" \u2014 DOWN",ae.gold),B.shake(12),mo=2.6,Ne.hideBoss(),B.world.gate.open(),B.level.openGate()};var Iu=i=>sm(Cn,B.assets,i)||Rp(Cn,Ot[i]);function db(){let i=Nh("ramparts"),e=Gh(Cn,i,vn.ramparts,B.assets,{shadows:ol==="high"});il=[Iu("melvinci"),Iu("kimaya")],ns={level:i,world:e,s:i.start}}function fb(){if(ns){ns.world.dispose();for(let i of il)i.dispose();ns=null,il=[]}}function pb(i,e){let t=ns.s;il.forEach((s,r)=>{let o=r===0==(Nt==="melvinci"),a=t.x+(r?1.4:-1.4);s.update(i,e,{x:a,z:t.z,fx:Math.sin(e*.4)*.3,fz:1,mv:0,mvx:0,mvz:0,dashing:!1,invuln:0,alive:!0,ward:!1,charge:Lt==="select"&&o?.5+Math.sin(e*4)*.3:0,firing:!1,parryFlash:0}),s.group.visible=!0});let n=e*.12;rl.set(t.x+Math.sin(n)*9,6.5,t.z+4+Math.cos(n)*5),Mn.position.lerp(rl,Math.min(1,i*2)),Mn.lookAt(t.x,1.4,t.z),ns.world.update(i,e,t.x,t.z)}function go(i,e){fb(),Dm(),Xt=i,Nt=e;let t=Nh(i),n=Gh(Cn,t,vn[i],B.assets,{shadows:ol==="high"});B.level=t,B.world=n,B.hero=Iu(e),B.H=ub(t.start.x,t.start.z),B.foes=mm(Cn,B),B.combat=_m(Cn,B),B.powers=hm(Cn,B,e),B.boss=ym(Cn,B,vn[i].boss),B.run=cp(e,i),B.t=0,mo=-1,Cr=-1;for(let s of t.foes)B.foes.spawn(s.type,s.x,s.z);for(let s of t.boxes)B.combat.spawnCrate(s);Ne.setHero(Ot[e]),Ne.setWorld(vn[i]),Ne.hideBoss(),Ne.show(null),Ne.flash(vn[i].name,vn[i].accent),Ne.hint(nt.touch?"":"WASD move (double-tap = sprint, long hold = long dash) \xB7 SHIFT jump (x2) \xB7 SPACE / click fire \xB7 J blade \xB7 V ward \xB7 F magic (LV1 \u2192 LV2 \u2192 LV3 \u2192 MAX MELANIN MAGIC BLAST) \xB7 double-click + drag = spin camera \xB7 wheel zoom \xB7 R reset view"),Mn.position.set(B.H.x+dn.off[0],dn.off[1],B.H.z+dn.off[2]),Mn.lookAt(B.H.x,1,B.H.z),Lt="play",kt.clearEdges(),an.play(i)}function Dm(){B.level&&(B.powers&&(B.powers.dispose(),B.powers=null),B.world.dispose(),B.hero.dispose(),B.foes.clear(),B.combat.clear(),B.boss&&B.boss.dispose(),Pt.clear(),B.level=null,B.boss=null)}function Rm(i){let e=zh(B.run);vp(B.run);let t=ei.indexOf(Xt),n=i&&t<ei.length-1?ei[t+1]:null;Ne.renderEnd(B.run,e,vn[Xt],i,n),Ne.show("endPop"),Lt="end",Ne.hint(""),an.play(i?"win":"menu")}function mb(i){let e=B.H,t=B.level;B.slowMul=1,B.combat.update(i),kt.update(Mn,e.x,e.z);for(let p of["invuln","dashCd","fireCd","regenDelay","wardBroken","bladeT","bladeWindow","parryFlash"])e[p]>0&&(e[p]-=i);if(!e.alive){e.deadT-=i,e.mv=0,e.deadT<=0&&Cr<0&&(Cr=.01);return}if(kt.pressed("dash")&&e.dashCd<=0&&e.dashT<=0){e.dashT=Gf,e.dashCd=Th;let p=Math.hypot(nt.mx,nt.mz);e.ddx=p>.1?nt.mx/p:e.fx,e.ddz=p>.1?nt.mz/p:e.fz,e.ward=!1,ut.sfx.dash(),Pt.ring(e.x,e.z,Ot[Nt].accent,1.8,.3),Pt.spawn(e.x,.4,e.z,Ot[Nt].accent,6,{spd:2,up:1,size:.35})}if(kt.pressed("longdash")&&e.dashT<=0&&e.dashCd<=0&&Math.hypot(nt.mx,nt.mz)>.3){let p=Math.hypot(nt.mx,nt.mz);e.dashT=.42,e.dashCd=1.1,e.longDash=!0,e.ddx=nt.mx/p,e.ddz=nt.mz/p,e.invuln=Math.max(e.invuln,.25),ut.sfx.dash(),Pt.ring(e.x,e.z,Ot[Nt].accent,2.6,.35,e.y+.06),B.shake(2)}if(e.dashT>0){e.dashT-=i;let p=e.longDash?3:1;Math.random()<i*40*p&&Pt.spawn(e.x-e.ddx*.4,e.y+.6+Math.random()*.8,e.z-e.ddz*.4,Ot[Nt].accent,e.longDash?3:2,{spd:1,up:.3,size:e.longDash?.55:.4,life:.4,grav:0}),e.dashT<=0&&(e.longDash=!1)}let n=nt.ward&&e.shield>0&&e.wardBroken<=0&&e.dashT<=0&&e.bladeT<=0;n&&!e.ward?(e.ward=!0,e.wardT=0,e.parried=!1,ut.sfx.ward()):n||(e.ward=!1),e.ward?(e.wardT+=i,e.shield-=$f*i,e.regenDelay=Ih,e.shield<=0&&(e.shield=0,e.ward=!1,e.wardBroken=1.6,ut.sfx.shatter(),Ne.flash("WARD SHATTERED",ae.hotred))):e.regenDelay<=0&&e.shield<Yi&&(e.shield=Math.min(Yi,e.shield+Jf*i));let s=Math.hypot(nt.mx,nt.mz),r=Of*(e.ward?.55:1)*(nt.sprint&&!e.ward?1.55:1)*B.slowMul,o,a;if(e.dashT>0){let p=e.longDash?wh*1.15:wh;o=e.ddx*p,a=e.ddz*p}else o=nt.mx*r,a=nt.mz*r;o+=e.vx,a+=e.vz,e.vx*=Math.pow(.02,i),e.vz*=Math.pow(.02,i),kt.pressed("jump")&&(e.onGround?(e.vy=zf,e.onGround=!1,ut.beep(420,.12,"sine",.08,820),Pt.ring(e.x,e.z,Ot[Nt].accent,1.4,.25,e.y+.06)):e.airJumps>0&&(e.airJumps--,e.vy=Ff,ut.beep(620,.12,"sine",.08,1200),Pt.spawn(e.x,e.y+.2,e.z,Ot[Nt].accent,12,{spd:3,up:-1,size:.45}))),e.vy-=Bf*i,e.y+=e.vy*i;let l=Mr(t,e.x,e.z,yn,o*i,a*i,e.y);e.x=l.x,e.z=l.z,t.solidCell(Math.floor(e.x/2),Math.floor(e.z/2),e.y)?e.safeX!==void 0&&(e.x=e.safeX,e.z=e.safeZ,e.vx=e.vz=0,e.dashT=0,e.longDash=!1):(e.safeX=e.x,e.safeZ=e.z);let c=lp(t,e.x,e.z,e.y);e.y<=c?(!e.onGround&&e.vy<-7&&(B.shake(2),Pt.ring(e.x,e.z,"#c8b8a0",1.6,.3,c+.06)),e.y=c,e.vy=0,e.onGround=!0,e.airJumps=1):e.onGround=!1,e.mv=e.dashT>0?1:Math.min(1,s),e.mvx=e.dashT>0?e.ddx:s>.05?nt.mx/s:0,e.mvz=e.dashT>0?e.ddz:s>.05?nt.mz/s:0,e.mv>.05&&Math.random()<i*8&&e.dashT<=0&&e.onGround&&Pt.spawn(e.x-e.mvx*.3,e.y+.1,e.z-e.mvz*.3,"#8a7560",1,{spd:.6,up:.8,size:.3,life:.4}),e.fx+=(nt.aimX-e.fx)*Math.min(1,i*18),e.fz+=(nt.aimZ-e.fz)*Math.min(1,i*18);let u=Math.hypot(e.fx,e.fz)||1;e.fx/=u,e.fz/=u;let h=nt.fire&&e.bladeT<=0;if(h?(B.run.parryChain>=3&&kt.pressed("fire")?(B.run=gp(B.run),B.combat.fire(e,"single",yr,!0),ut.sfx.charged(),Ne.flash("GOLD CANNON",ae.gold),B.shake(6),B.boss&&B.boss.alive&&B.boss.awake&&(B.boss.stun=1.6,Ne.flash("GOLD CANNON \u2014 BOSS STUNNED",ae.gold))):e.fireCd<=0&&(e.fireCd=Mt[e.weapon].cd,B.combat.fire(e,e.weapon,e.power,!1),ut.sfx.shoot(e.weapon),Pt.spawn(e.x+e.fx*1.1,1.05,e.z+e.fz*1.1,Mt[e.weapon].col,2,{spd:1.5,up:.6,size:.3,life:.25})),e.charge=Math.min(ys,e.charge+i),e.charge>=ys&&!e.charged&&(e.charged=!0,ut.sfx.chargeFull()),e.charge>.3&&Math.random()<i*30&&Pt.spawn(e.x+e.fx*.9+(Math.random()-.5),1.05+(Math.random()-.5),e.z+e.fz*.9+(Math.random()-.5),Mt[e.weapon].col,1,{spd:.2,up:.3,size:.3,life:.3,grav:-3})):e.wasFiring&&(e.charged&&(B.hero.playOnce&&B.hero.playOnce("Spellcast_Shoot",1.8),B.combat.fire(e,e.weapon,e.power,!0),ut.sfx.charged(),Ne.flash(qf[e.weapon],Mt[e.weapon].col),B.shake(4),Pt.ring(e.x,e.z,Mt[e.weapon].col,2.6,.35)),e.charge=0,e.charged=!1),e.wasFiring=h,kt.pressed("fire"),kt.pressed("blade")&&e.bladeT<=0){let p=e.bladeWindow>0?(e.bladeN+1)%3:0;e.bladeN=p,e.bladeT=Ch,e.bladeWindow=Zf+Ch;let m=e.dashT>0||e.dashCd>Th-.12;m&&(e.vx+=e.fx*Rh,e.vz+=e.fz*Rh),B.hero.playBlade(p);let x=B.combat.bladeStrike(p,m);x?(B.hitstop(Kf*(p===2?1.6:1)),ut.sfx.bladeHit(),B.shake(p===2?5:2),B.powers.addMeter("bladeHit",x)):ut.sfx.blade(p)}kt.pressed("swap")&&e.owned.length>1&&(e.weapon=e.owned[(e.owned.indexOf(e.weapon)+1)%e.owned.length],B.hero.setWeaponColor(Mt[e.weapon].col),ut.sfx.ui(),Ne.flash(Mt[e.weapon].name,Mt[e.weapon].col)),B.powers.update(i,e,p=>kt.pressed(p));let f=B.boss;if(f&&f.alive&&!f.awake){let p=t.roomAt(e.x,e.z),m=t.gateCells[0];p&&p.kind==="boss"&&Math.hypot(e.x-(m[0]+.5)*2,e.z-(m[1]+.5)*2)>3.2&&(f.awake=!0,t.sealGate(),B.world.gate.seal(),Ne.boss(f.name),Ne.bossHp(f.hp,f.max),Ne.flash(f.wake,ae.hotred),ut.sfx.bossWake(),an.play("boss"),B.run=mp(B.run),B.combat.clearEnemyShots(),B.shake(8))}}var Cm=performance.now();function Nm(i){requestAnimationFrame(Nm);let e=Math.min(.05,(i-Cm)/1e3);Cm=i,Um(e)}function Um(i){let e=i;if(sl>0&&(sl-=i,e=i*.08),B.t+=e,Lt==="menu"||Lt==="select"||Lt==="world"||Lt==="codex"){ns&&pb(e,B.t),Pt.update(e),Au();return}if(Lt==="play"){if(kt.pressed("pause")){Lt="pause",Ne.show("pausePop"),an.duck(!0);return}if(kt.pressed("mute")&&xo(es(Gt,{musicOn:!Gt.musicOn})),kt.pressed("nexttrack")&&an.next(),B.run=pp(B.run,e),B.combo.t>0&&(B.combo.t-=e,B.combo.t<=0&&(B.combo.n=0,Ne.combo(0))),mb(e),B.foes.update(e),B.boss&&B.boss.update(e),B.world.update(e,B.t,B.H.x,B.H.z),Pt.update(e),B.hero.update(e,B.t,{x:B.H.x,y:B.H.y,air:!B.H.onGround,longDash:!!B.H.longDash,sprint:nt.sprint,z:B.H.z,fx:B.H.fx,fz:B.H.fz,mv:B.H.mv,mvx:B.H.mvx,mvz:B.H.mvz,dashing:B.H.dashT>0,invuln:B.H.invuln,alive:B.H.alive,ward:B.H.ward,charge:B.H.charge/ys,firing:nt.fire&&B.H.bladeT<=0,parryFlash:B.H.parryFlash}),Ne.update(e,B.H,B.run,vn[Xt]),mo>0&&(mo-=e,mo<=0)){let l=Bh(Xt,B.run.pages);B.run=Oh(B.run),Fh(Xt,l.id),Ne.showPage(l),Rm(!0);return}if(Cr>0&&(Cr-=e,Cr<=0)){Rm(!1);return}}if(!B.H){Au();return}let t=B.H;Rr=Math.max(0,Rr-e*22);let n=B.level&&(()=>{let l=B.level.roomAt(t.x,t.z);return l&&l.kind==="boss"})();nl+=((n?dn.bossZoom:1)-nl)*Math.min(1,e*2),nt.orbit&&(on.yaw-=nt.orbitDX*.006,on.pitch=Math.max(.25,Math.min(1.9,on.pitch-nt.orbitDY*.004))),nt.orbitDX=0,nt.orbitDY=0,nt.zoom&&(on.dist=Math.max(.35,Math.min(1.8,on.dist*(1+nt.zoom*.08))),nt.zoom=0),kt.pressed("camreset")&&(on.yaw=0,on.pitch=1,on.dist=1,Ne.flash("CAMERA RESET",ae.cyan));let s=dn.off[0],r=dn.off[2]*nl*on.dist,o=dn.off[1]*nl*on.dist*on.pitch,a=nt.orbit?0:1.2;rl.set(t.x+Math.cos(on.yaw)*s+Math.sin(on.yaw)*r+t.fx*a,o+t.y*.75,t.z-Math.sin(on.yaw)*s+Math.cos(on.yaw)*r+t.fz*a),Mn.position.lerp(rl,Math.min(1,e*(nt.orbit?14:dn.lerp))),Am.set(t.x+t.fx*a+(Math.random()-.5)*Rr*.08,1+t.y*.8+(Math.random()-.5)*Rr*.08,t.z+t.fz*a),Mn.lookAt(Am),Au()}function Pu(){Dm(),ns||db(),Lt="menu",Ne.show("menu"),Ne.hideBoss(),an.moment&&an.play("menu")}dt("start").onclick=()=>{ut.init(),ut.sfx.ui(),an.play("menu"),Lt="select",Ne.renderSelect(Nt),Ne.show("select")};dt("codexBtn").onclick=()=>{ut.init(),Ne.renderCodex(),Lt="codex",Ne.show("codexPop")};dt("cxBack").onclick=()=>{Lt="menu",Ne.show("menu")};dt("cardM").onclick=()=>{Nt="melvinci",Ne.renderSelect(Nt),ut.sfx.ui()};dt("cardK").onclick=()=>{Nt="kimaya",Ne.renderSelect(Nt),ut.sfx.ui()};dt("confirm").onclick=()=>{Lt="world",Ne.renderWorlds(Xt,Lm()),Ne.show("worldSel")};dt("wrow").onclick=i=>{let e=i.target.closest(".wcard");!e||e.classList.contains("locked")||(Xt=e.dataset.w,Ne.renderWorlds(Xt,Lm()),ut.sfx.ui())};dt("wconfirm").onclick=()=>{ut.init(),go(Xt,Nt)};dt("backSel").onclick=()=>{Lt="select",Ne.show("select")};dt("resume").onclick=()=>{Lt="play",Ne.show(null),kt.clearEdges(),an.duck(!1)};dt("quit").onclick=()=>Pu();dt("again").onclick=()=>go(Xt,Nt);dt("nextWorld").onclick=()=>{let i=ei.indexOf(Xt);go(ei[Math.min(i+1,ei.length-1)],Nt)};dt("toMenu").onclick=()=>Pu();dt("pauseBtn").onclick=()=>{Lt==="play"&&(Lt="pause",Ne.show("pausePop"),an.duck(!0))};dt("muteBtn").onclick=()=>xo(es(Gt,{musicOn:!Gt.musicOn}));dt("sfxBtn").onclick=()=>xo(es(Gt,{sfxOn:!Gt.sfxOn}));window.addEventListener("keydown",i=>{i.code==="KeyP"&&Lt==="pause"&&(Lt="play",Ne.show(null),kt.clearEdges(),an.duck(!1)),i.code==="KeyN"&&Lt!=="play"&&an.next()});window.__unerased={G:B,ready:!1,get mode(){return Lt},step:i=>Um(i),start:(i,e)=>go(i||Xt,e||Nt),warp:i=>{go(i||Xt,Nt);let e=B.level.gateCells[0];B.H.x=(e[0]+.5)*2,B.H.z=(e[1]+.5)*2+3,Mn.position.set(B.H.x,dn.off[1],B.H.z+dn.off[2])},toBoss:()=>{let i=B.level.gateCells[0];B.H.x=(i[0]+.5)*2,B.H.z=(i[1]+.5)*2-6},snapshot:()=>({mode:Lt,world:Xt,hero:Nt,H:B.H&&{x:B.H.x,y:B.H.y,onGround:B.H.onGround,z:B.H.z,lives:B.H.lives,weapon:B.H.weapon,alive:B.H.alive},foes:B.foes&&B.foes.aliveCount(),boss:B.boss&&{awake:B.boss.awake,hp:B.boss.hp,alive:B.boss.alive},run:B.run,fx:Pt.count}),press:i=>kt.press(i),IN:nt,music:an,combo:()=>B.combo,fillMeter:()=>{B.powers&&(B.powers.meter=100)},setMeter:i=>{B.powers&&(B.powers.meter=i)}};var Om=dt("start"),Ru=dt("loadLine");Om.disabled=!0;tm(i=>{Ru.textContent=`SUMMONING THE WARRIORS \xB7 ${Math.round(i*100)}%`}).then(i=>{B.assets=i,Ru.textContent=i.missing.length?"READY \xB7 missing: "+i.missing.join(", "):""}).catch(i=>{B.assets=null,Ru.textContent="READY (classic models) \xB7 "+i.message}).finally(()=>{Om.disabled=!1,Pu(),window.__unerased.ready=!0});requestAnimationFrame(Nm);})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
