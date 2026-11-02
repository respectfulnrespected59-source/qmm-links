"use strict";(()=>{var bh="170";var tg=0,md=1,ng=2;var Uf=1,Eh=2,gi=3,jn=0,Qt=1,gt=2,Jn=0,sr=1,ht=2,gd=3,xd=4,ig=5,xs=100,sg=101,rg=102,og=103,ag=104,lg=200,cg=201,hg=202,ug=203,lc=204,cc=205,dg=206,fg=207,pg=208,mg=209,gg=210,xg=211,_g=212,yg=213,vg=214,hc=0,uc=1,dc=2,lr=3,fc=4,pc=5,mc=6,gc=7,zf=0,Mg=1,bg=2,ki=0,Sh=1,wh=2,Th=3,po=4,Eg=5,Ah=6,Rh=7,_d="attached",Sg="detached",Ff=300,cr=301,hr=302,xc=303,_c=304,Va=306,dn=1e3,xi=1001,so=1002,en=1003,Ch=1004;var er=1005;var un=1006,eo=1007;var wn=1008;var vi=1009,kf=1010,Bf=1011,ro=1012,Ih=1013,ys=1014,Hn=1015,Gn=1016,Ph=1017,Lh=1018,ur=1020,Hf=35902,Vf=1021,Gf=1022,Tn=1023,Wf=1024,Xf=1025,rr=1026,dr=1027,Dh=1028,Nh=1029,Yf=1030,Oh=1031;var Uh=1033,la=33776,ca=33777,ha=33778,ua=33779,yc=35840,vc=35841,Mc=35842,bc=35843,Ec=36196,Sc=37492,wc=37496,Tc=37808,Ac=37809,Rc=37810,Cc=37811,Ic=37812,Pc=37813,Lc=37814,Dc=37815,Nc=37816,Oc=37817,Uc=37818,zc=37819,Fc=37820,kc=37821,da=36492,Bc=36494,Hc=36495,qf=36283,Vc=36284,Gc=36285,Wc=36286,zh=2200,Fh=2201,wg=2202,fr=2300,pr=2301,Cl=2302,tr=2400,nr=2401,fa=2402,kh=2500,Tg=2501,Kf=0,Ga=1,mo=2,Ag=3200,Rg=3201;var Zf=0,Cg=1,Ui="",mt="srgb",nn="srgb-linear",Wa="linear",pt="srgb";var Os=7680;var yd=519,Ig=512,Pg=513,Lg=514,$f=515,Dg=516,Ng=517,Og=518,Ug=519,Xc=35044;var vd="300 es",_i=2e3,pa=2001,Mi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},$t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Md=1234567,to=Math.PI/180,mr=180/Math.PI;function Vn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return($t[i&255]+$t[i>>8&255]+$t[i>>16&255]+$t[i>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[t&63|128]+$t[t>>8&255]+"-"+$t[t>>16&255]+$t[t>>24&255]+$t[n&255]+$t[n>>8&255]+$t[n>>16&255]+$t[n>>24&255]).toLowerCase()}function jt(i,e,t){return Math.max(e,Math.min(t,i))}function Bh(i,e){return(i%e+e)%e}function zg(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Fg(i,e,t){return i!==e?(t-i)/(e-i):0}function no(i,e,t){return(1-t)*i+t*e}function kg(i,e,t,n){return no(i,e,1-Math.exp(-t*n))}function Bg(i,e=1){return e-Math.abs(Bh(i,e*2)-e)}function Hg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Vg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Gg(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Wg(i,e){return i+Math.random()*(e-i)}function Xg(i){return i*(.5-Math.random())}function Yg(i){i!==void 0&&(Md=i);let e=Md+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function qg(i){return i*to}function Kg(i){return i*mr}function Zg(i){return(i&i-1)===0&&i!==0}function $g(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Jg(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function jg(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),x=o((n-e)/2);switch(s){case"XYX":i.set(a*h,l*u,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*x,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*x,a*c);break;case"ZYZ":i.set(l*x,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Bn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function _t(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Jf={DEG2RAD:to,RAD2DEG:mr,generateUUID:Vn,clamp:jt,euclideanModulo:Bh,mapLinear:zg,inverseLerp:Fg,lerp:no,damp:kg,pingpong:Bg,smoothstep:Hg,smootherstep:Vg,randInt:Gg,randFloat:Wg,randFloatSpread:Xg,seededRandom:Yg,degToRad:qg,radToDeg:Kg,isPowerOfTwo:Zg,ceilPowerOfTwo:$g,floorPowerOfTwo:Jg,setQuaternionFromProperEuler:jg,normalize:_t,denormalize:Bn},Re=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(jt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ze=class i{constructor(e,t,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],x=n[8],p=s[0],g=s[3],m=s[6],_=s[1],v=s[4],y=s[7],w=s[2],E=s[5],S=s[8];return r[0]=o*p+a*_+l*w,r[3]=o*g+a*v+l*E,r[6]=o*m+a*y+l*S,r[1]=c*p+h*_+u*w,r[4]=c*g+h*v+u*E,r[7]=c*m+h*y+u*S,r[2]=d*p+f*_+x*w,r[5]=d*g+f*v+x*E,r[8]=d*m+f*y+x*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,x=t*u+n*d+s*f;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let p=1/x;return e[0]=u*p,e[1]=(s*c-h*n)*p,e[2]=(a*n-s*o)*p,e[3]=d*p,e[4]=(h*t-s*l)*p,e[5]=(s*r-a*t)*p,e[6]=f*p,e[7]=(n*l-c*t)*p,e[8]=(o*t-n*r)*p,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Il.makeScale(e,t)),this}rotate(e){return this.premultiply(Il.makeRotation(-e)),this}translate(e,t){return this.premultiply(Il.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Il=new Ze;function jf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function oo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Qg(){let i=oo("canvas");return i.style.display="block",i}var bd={};function jr(i){i in bd||(bd[i]=!0,console.warn(i))}function ex(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function tx(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function nx(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var Qe={enabled:!0,workingColorSpace:nn,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===pt&&(i.r=yi(i.r),i.g=yi(i.g),i.b=yi(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===pt&&(i.r=or(i.r),i.g=or(i.g),i.b=or(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ui?Wa:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function yi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function or(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ed=[.64,.33,.3,.6,.15,.06],Sd=[.2126,.7152,.0722],wd=[.3127,.329],Td=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ad=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Qe.define({[nn]:{primaries:Ed,whitePoint:wd,transfer:Wa,toXYZ:Td,fromXYZ:Ad,luminanceCoefficients:Sd,workingColorSpaceConfig:{unpackColorSpace:mt},outputColorSpaceConfig:{drawingBufferColorSpace:mt}},[mt]:{primaries:Ed,whitePoint:wd,transfer:pt,toXYZ:Td,fromXYZ:Ad,luminanceCoefficients:Sd,outputColorSpaceConfig:{drawingBufferColorSpace:mt}}});var Us,Yc=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Us===void 0&&(Us=oo("canvas")),Us.width=e.width,Us.height=e.height;let n=Us.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Us}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=oo("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=yi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(yi(t[n]/255)*255):t[n]=yi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},ix=0,ma=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ix++}),this.uuid=Vn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Pl(s[o].image)):r.push(Pl(s[o]))}else r=Pl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Pl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Yc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var sx=0,Wt=class i extends Mi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=xi,s=xi,r=un,o=wn,a=Tn,l=vi,c=i.DEFAULT_ANISOTROPY,h=Ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sx++}),this.uuid=Vn(),this.name="",this.source=new ma(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Re(0,0),this.repeat=new Re(1,1),this.center=new Re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ff)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case dn:e.x=e.x-Math.floor(e.x);break;case xi:e.x=e.x<0?0:1;break;case so:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case dn:e.y=e.y-Math.floor(e.y);break;case xi:e.y=e.y<0?0:1;break;case so:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Wt.DEFAULT_IMAGE=null;Wt.DEFAULT_MAPPING=Ff;Wt.DEFAULT_ANISOTROPY=1;var ct=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],x=l[9],p=l[2],g=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-p)<.01&&Math.abs(x-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+p)<.1&&Math.abs(x+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,y=(f+1)/2,w=(m+1)/2,E=(h+d)/4,S=(u+p)/4,C=(x+g)/4;return v>y&&v>w?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=E/n,r=S/n):y>w?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=E/s,r=C/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=S/r,s=C/r),this.set(n,s,r,t),this}let _=Math.sqrt((g-x)*(g-x)+(u-p)*(u-p)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(g-x)/_,this.y=(u-p)/_,this.z=(d-h)/_,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},qc=class extends Mi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ct(0,0,e,t),this.scissorTest=!1,this.viewport=new ct(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Wt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new ma(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},on=class extends qc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ga=class extends Wt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Kc=class extends Wt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Rt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],f=r[o+1],x=r[o+2],p=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=x,e[t+3]=p;return}if(u!==p||l!==d||c!==f||h!==x){let g=1-a,m=l*d+c*f+h*x+u*p,_=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){let w=Math.sqrt(v),E=Math.atan2(w,m*_);g=Math.sin(g*E)/w,a=Math.sin(a*E)/w}let y=a*_;if(l=l*g+d*y,c=c*g+f*y,h=h*g+x*y,u=u*g+p*y,g===1-a){let w=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=w,c*=w,h*=w,u*=w}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],x=r[o+3];return e[t]=a*x+h*u+l*f-c*d,e[t+1]=l*x+h*d+c*u-a*f,e[t+2]=c*x+h*f+a*d-l*u,e[t+3]=h*x-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),f=l(s/2),x=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*x,this._y=c*f*u-d*h*x,this._z=c*h*x+d*f*u,this._w=c*h*u-d*f*x;break;case"YXZ":this._x=d*h*u+c*f*x,this._y=c*f*u-d*h*x,this._z=c*h*x-d*f*u,this._w=c*h*u+d*f*x;break;case"ZXY":this._x=d*h*u-c*f*x,this._y=c*f*u+d*h*x,this._z=c*h*x+d*f*u,this._w=c*h*u-d*f*x;break;case"ZYX":this._x=d*h*u-c*f*x,this._y=c*f*u+d*h*x,this._z=c*h*x-d*f*u,this._w=c*h*u+d*f*x;break;case"YZX":this._x=d*h*u+c*f*x,this._y=c*f*u+d*h*x,this._z=c*h*x-d*f*u,this._w=c*h*u-d*f*x;break;case"XZY":this._x=d*h*u-c*f*x,this._y=c*f*u-d*h*x,this._z=c*h*x+d*f*u,this._w=c*h*u+d*f*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(jt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},O=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Rd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Rd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ll.copy(this).projectOnVector(e),this.sub(Ll)}reflect(e){return this.sub(Ll.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(jt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ll=new O,Rd=new Rt,qt=class{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Un.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Un.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Un.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Un):Un.fromBufferAttribute(r,o),Un.applyMatrix4(e.matrixWorld),this.expandByPoint(Un);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Lo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Lo.copy(n.boundingBox)),Lo.applyMatrix4(e.matrixWorld),this.union(Lo)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Un),Un.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Hr),Do.subVectors(this.max,Hr),zs.subVectors(e.a,Hr),Fs.subVectors(e.b,Hr),ks.subVectors(e.c,Hr),Ii.subVectors(Fs,zs),Pi.subVectors(ks,Fs),hs.subVectors(zs,ks);let t=[0,-Ii.z,Ii.y,0,-Pi.z,Pi.y,0,-hs.z,hs.y,Ii.z,0,-Ii.x,Pi.z,0,-Pi.x,hs.z,0,-hs.x,-Ii.y,Ii.x,0,-Pi.y,Pi.x,0,-hs.y,hs.x,0];return!Dl(t,zs,Fs,ks,Do)||(t=[1,0,0,0,1,0,0,0,1],!Dl(t,zs,Fs,ks,Do))?!1:(No.crossVectors(Ii,Pi),t=[No.x,No.y,No.z],Dl(t,zs,Fs,ks,Do))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Un).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Un).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},hi=[new O,new O,new O,new O,new O,new O,new O,new O],Un=new O,Lo=new qt,zs=new O,Fs=new O,ks=new O,Ii=new O,Pi=new O,hs=new O,Hr=new O,Do=new O,No=new O,us=new O;function Dl(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){us.fromArray(i,r);let a=s.x*Math.abs(us.x)+s.y*Math.abs(us.y)+s.z*Math.abs(us.z),l=e.dot(us),c=t.dot(us),h=n.dot(us);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var rx=new qt,Vr=new O,Nl=new O,an=class{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):rx.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vr.subVectors(e,this.center);let t=Vr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Vr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Nl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vr.copy(e.center).add(Nl)),this.expandByPoint(Vr.copy(e.center).sub(Nl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},ui=new O,Ol=new O,Oo=new O,Li=new O,Ul=new O,Uo=new O,zl=new O,vs=class{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ui)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ui.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ui.copy(this.origin).addScaledVector(this.direction,t),ui.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ol.copy(e).add(t).multiplyScalar(.5),Oo.copy(t).sub(e).normalize(),Li.copy(this.origin).sub(Ol);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Oo),a=Li.dot(this.direction),l=-Li.dot(Oo),c=Li.lengthSq(),h=Math.abs(1-o*o),u,d,f,x;if(h>0)if(u=o*l-a,d=o*a-l,x=r*h,u>=0)if(d>=-x)if(d<=x){let p=1/h;u*=p,d*=p,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-x?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=x?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ol).addScaledVector(Oo,d),f}intersectSphere(e,t){ui.subVectors(e.center,this.origin);let n=ui.dot(this.direction),s=ui.dot(ui)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ui)!==null}intersectTriangle(e,t,n,s,r){Ul.subVectors(t,e),Uo.subVectors(n,e),zl.crossVectors(Ul,Uo);let o=this.direction.dot(zl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Li.subVectors(this.origin,e);let l=a*this.direction.dot(Uo.crossVectors(Li,Uo));if(l<0)return null;let c=a*this.direction.dot(Ul.cross(Li));if(c<0||l+c>o)return null;let h=-a*Li.dot(zl);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ge=class i{constructor(e,t,n,s,r,o,a,l,c,h,u,d,f,x,p,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,u,d,f,x,p,g)}set(e,t,n,s,r,o,a,l,c,h,u,d,f,x,p,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=x,m[11]=p,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Bs.setFromMatrixColumn(e,0).length(),r=1/Bs.setFromMatrixColumn(e,1).length(),o=1/Bs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,f=o*u,x=a*h,p=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+x*c,t[5]=d-p*c,t[9]=-a*l,t[2]=p-d*c,t[6]=x+f*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,x=c*h,p=c*u;t[0]=d+p*a,t[4]=x*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-x,t[6]=p+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,x=c*h,p=c*u;t[0]=d-p*a,t[4]=-o*u,t[8]=x+f*a,t[1]=f+x*a,t[5]=o*h,t[9]=p-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*h,f=o*u,x=a*h,p=a*u;t[0]=l*h,t[4]=x*c-f,t[8]=d*c+p,t[1]=l*u,t[5]=p*c+d,t[9]=f*c-x,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,f=o*c,x=a*l,p=a*c;t[0]=l*h,t[4]=p-d*u,t[8]=x*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+x,t[10]=d-p*u}else if(e.order==="XZY"){let d=o*l,f=o*c,x=a*l,p=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+p,t[5]=o*h,t[9]=f*u-x,t[2]=x*u-f,t[6]=a*h,t[10]=p*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ox,e,ax)}lookAt(e,t,n){let s=this.elements;return xn.subVectors(e,t),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),Di.crossVectors(n,xn),Di.lengthSq()===0&&(Math.abs(n.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),Di.crossVectors(n,xn)),Di.normalize(),zo.crossVectors(xn,Di),s[0]=Di.x,s[4]=zo.x,s[8]=xn.x,s[1]=Di.y,s[5]=zo.y,s[9]=xn.y,s[2]=Di.z,s[6]=zo.z,s[10]=xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],x=n[2],p=n[6],g=n[10],m=n[14],_=n[3],v=n[7],y=n[11],w=n[15],E=s[0],S=s[4],C=s[8],b=s[12],M=s[1],I=s[5],B=s[9],k=s[13],V=s[2],L=s[6],A=s[10],F=s[14],U=s[3],D=s[7],H=s[11],Q=s[15];return r[0]=o*E+a*M+l*V+c*U,r[4]=o*S+a*I+l*L+c*D,r[8]=o*C+a*B+l*A+c*H,r[12]=o*b+a*k+l*F+c*Q,r[1]=h*E+u*M+d*V+f*U,r[5]=h*S+u*I+d*L+f*D,r[9]=h*C+u*B+d*A+f*H,r[13]=h*b+u*k+d*F+f*Q,r[2]=x*E+p*M+g*V+m*U,r[6]=x*S+p*I+g*L+m*D,r[10]=x*C+p*B+g*A+m*H,r[14]=x*b+p*k+g*F+m*Q,r[3]=_*E+v*M+y*V+w*U,r[7]=_*S+v*I+y*L+w*D,r[11]=_*C+v*B+y*A+w*H,r[15]=_*b+v*k+y*F+w*Q,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],x=e[3],p=e[7],g=e[11],m=e[15];return x*(+r*l*u-s*c*u-r*a*d+n*c*d+s*a*f-n*l*f)+p*(+t*l*f-t*c*d+r*o*d-s*o*f+s*c*h-r*l*h)+g*(+t*c*u-t*a*f-r*o*u+n*o*f+r*a*h-n*c*h)+m*(-s*a*h-t*l*u+t*a*d+s*o*u-n*o*d+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],x=e[12],p=e[13],g=e[14],m=e[15],_=u*g*c-p*d*c+p*l*f-a*g*f-u*l*m+a*d*m,v=x*d*c-h*g*c-x*l*f+o*g*f+h*l*m-o*d*m,y=h*p*c-x*u*c+x*a*f-o*p*f-h*a*m+o*u*m,w=x*u*l-h*p*l-x*a*d+o*p*d+h*a*g-o*u*g,E=t*_+n*v+s*y+r*w;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/E;return e[0]=_*S,e[1]=(p*d*r-u*g*r-p*s*f+n*g*f+u*s*m-n*d*m)*S,e[2]=(a*g*r-p*l*r+p*s*c-n*g*c-a*s*m+n*l*m)*S,e[3]=(u*l*r-a*d*r-u*s*c+n*d*c+a*s*f-n*l*f)*S,e[4]=v*S,e[5]=(h*g*r-x*d*r+x*s*f-t*g*f-h*s*m+t*d*m)*S,e[6]=(x*l*r-o*g*r-x*s*c+t*g*c+o*s*m-t*l*m)*S,e[7]=(o*d*r-h*l*r+h*s*c-t*d*c-o*s*f+t*l*f)*S,e[8]=y*S,e[9]=(x*u*r-h*p*r-x*n*f+t*p*f+h*n*m-t*u*m)*S,e[10]=(o*p*r-x*a*r+x*n*c-t*p*c-o*n*m+t*a*m)*S,e[11]=(h*a*r-o*u*r-h*n*c+t*u*c+o*n*f-t*a*f)*S,e[12]=w*S,e[13]=(h*p*s-x*u*s+x*n*d-t*p*d-h*n*g+t*u*g)*S,e[14]=(x*a*s-o*p*s-x*n*l+t*p*l+o*n*g-t*a*g)*S,e[15]=(o*u*s-h*a*s+h*n*l-t*u*l-o*n*d+t*a*d)*S,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,x=r*u,p=o*h,g=o*u,m=a*u,_=l*c,v=l*h,y=l*u,w=n.x,E=n.y,S=n.z;return s[0]=(1-(p+m))*w,s[1]=(f+y)*w,s[2]=(x-v)*w,s[3]=0,s[4]=(f-y)*E,s[5]=(1-(d+m))*E,s[6]=(g+_)*E,s[7]=0,s[8]=(x+v)*S,s[9]=(g-_)*S,s[10]=(1-(d+p))*S,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Bs.set(s[0],s[1],s[2]).length(),o=Bs.set(s[4],s[5],s[6]).length(),a=Bs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],zn.copy(this);let c=1/r,h=1/o,u=1/a;return zn.elements[0]*=c,zn.elements[1]*=c,zn.elements[2]*=c,zn.elements[4]*=h,zn.elements[5]*=h,zn.elements[6]*=h,zn.elements[8]*=u,zn.elements[9]*=u,zn.elements[10]*=u,t.setFromRotationMatrix(zn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=_i){let l=this.elements,c=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s),f,x;if(a===_i)f=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===pa)f=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=_i){let l=this.elements,c=1/(t-e),h=1/(n-s),u=1/(o-r),d=(t+e)*c,f=(n+s)*h,x,p;if(a===_i)x=(o+r)*u,p=-2*u;else if(a===pa)x=r*u,p=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=p,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Bs=new O,zn=new Ge,ox=new O(0,0,0),ax=new O(1,1,1),Di=new O,zo=new O,xn=new O,Cd=new Ge,Id=new Rt,Qn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(jt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-jt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Cd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Cd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Id.setFromEuler(this),this.setFromQuaternion(Id,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Qn.DEFAULT_ORDER="XYZ";var ao=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},lx=0,Pd=new O,Hs=new Rt,di=new Ge,Fo=new O,Gr=new O,cx=new O,hx=new Rt,Ld=new O(1,0,0),Dd=new O(0,1,0),Nd=new O(0,0,1),Od={type:"added"},ux={type:"removed"},Vs={type:"childadded",child:null},Fl={type:"childremoved",child:null},Ct=class i extends Mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lx++}),this.uuid=Vn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new O,t=new Qn,n=new Rt,s=new O(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ge},normalMatrix:{value:new Ze}}),this.matrix=new Ge,this.matrixWorld=new Ge,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ao,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Hs.setFromAxisAngle(e,t),this.quaternion.multiply(Hs),this}rotateOnWorldAxis(e,t){return Hs.setFromAxisAngle(e,t),this.quaternion.premultiply(Hs),this}rotateX(e){return this.rotateOnAxis(Ld,e)}rotateY(e){return this.rotateOnAxis(Dd,e)}rotateZ(e){return this.rotateOnAxis(Nd,e)}translateOnAxis(e,t){return Pd.copy(e).applyQuaternion(this.quaternion),this.position.add(Pd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ld,e)}translateY(e){return this.translateOnAxis(Dd,e)}translateZ(e){return this.translateOnAxis(Nd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Fo.copy(e):Fo.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Gr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?di.lookAt(Gr,Fo,this.up):di.lookAt(Fo,Gr,this.up),this.quaternion.setFromRotationMatrix(di),s&&(di.extractRotation(s.matrixWorld),Hs.setFromRotationMatrix(di),this.quaternion.premultiply(Hs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Od),Vs.child=e,this.dispatchEvent(Vs),Vs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ux),Fl.child=e,this.dispatchEvent(Fl),Fl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),di.multiply(e.parent.matrixWorld)),e.applyMatrix4(di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Od),Vs.child=e,this.dispatchEvent(Vs),Vs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gr,e,cx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gr,hx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),x=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),x.length>0&&(n.nodes=x)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Ct.DEFAULT_UP=new O(0,1,0);Ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Fn=new O,fi=new O,kl=new O,pi=new O,Gs=new O,Ws=new O,Ud=new O,Bl=new O,Hl=new O,Vl=new O,Gl=new ct,Wl=new ct,Xl=new ct,zi=class i{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Fn.subVectors(e,t),s.cross(Fn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Fn.subVectors(s,t),fi.subVectors(n,t),kl.subVectors(e,t);let o=Fn.dot(Fn),a=Fn.dot(fi),l=Fn.dot(kl),c=fi.dot(fi),h=fi.dot(kl),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,x=(o*h-a*l)*d;return r.set(1-f-x,x,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,pi)===null?!1:pi.x>=0&&pi.y>=0&&pi.x+pi.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,pi.x),l.addScaledVector(o,pi.y),l.addScaledVector(a,pi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return Gl.setScalar(0),Wl.setScalar(0),Xl.setScalar(0),Gl.fromBufferAttribute(e,t),Wl.fromBufferAttribute(e,n),Xl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Gl,r.x),o.addScaledVector(Wl,r.y),o.addScaledVector(Xl,r.z),o}static isFrontFacing(e,t,n,s){return Fn.subVectors(n,t),fi.subVectors(e,t),Fn.cross(fi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fn.subVectors(this.c,this.b),fi.subVectors(this.a,this.b),Fn.cross(fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Gs.subVectors(s,n),Ws.subVectors(r,n),Bl.subVectors(e,n);let l=Gs.dot(Bl),c=Ws.dot(Bl);if(l<=0&&c<=0)return t.copy(n);Hl.subVectors(e,s);let h=Gs.dot(Hl),u=Ws.dot(Hl);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Gs,o);Vl.subVectors(e,r);let f=Gs.dot(Vl),x=Ws.dot(Vl);if(x>=0&&f<=x)return t.copy(r);let p=f*c-l*x;if(p<=0&&c>=0&&x<=0)return a=c/(c-x),t.copy(n).addScaledVector(Ws,a);let g=h*x-f*u;if(g<=0&&u-h>=0&&f-x>=0)return Ud.subVectors(r,s),a=(u-h)/(u-h+(f-x)),t.copy(s).addScaledVector(Ud,a);let m=1/(g+p+d);return o=p*m,a=d*m,t.copy(n).addScaledVector(Gs,o).addScaledVector(Ws,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Qf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ni={h:0,s:0,l:0},ko={h:0,s:0,l:0};function Yl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Te=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Qe.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Qe.workingColorSpace){if(e=Bh(e,1),t=jt(t,0,1),n=jt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Yl(o,r,e+1/3),this.g=Yl(o,r,e),this.b=Yl(o,r,e-1/3)}return Qe.toWorkingColorSpace(this,s),this}setStyle(e,t=mt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=mt){let n=Qf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=yi(e.r),this.g=yi(e.g),this.b=yi(e.b),this}copyLinearToSRGB(e){return this.r=or(e.r),this.g=or(e.g),this.b=or(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mt){return Qe.fromWorkingColorSpace(Jt.copy(this),e),Math.round(jt(Jt.r*255,0,255))*65536+Math.round(jt(Jt.g*255,0,255))*256+Math.round(jt(Jt.b*255,0,255))}getHexString(e=mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.fromWorkingColorSpace(Jt.copy(this),t);let n=Jt.r,s=Jt.g,r=Jt.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(Jt.copy(this),t),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=mt){Qe.fromWorkingColorSpace(Jt.copy(this),e);let t=Jt.r,n=Jt.g,s=Jt.b;return e!==mt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ni),this.setHSL(Ni.h+e,Ni.s+t,Ni.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ni),e.getHSL(ko);let n=no(Ni.h,ko.h,t),s=no(Ni.s,ko.s,t),r=no(Ni.l,ko.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Jt=new Te;Te.NAMES=Qf;var dx=0,fn=class extends Mi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dx++}),this.uuid=Vn(),this.name="",this.blending=sr,this.side=jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=lc,this.blendDst=cc,this.blendEquation=xs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Te(0,0,0),this.blendAlpha=0,this.depthFunc=lr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Os,this.stencilZFail=Os,this.stencilZPass=Os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==sr&&(n.blending=this.blending),this.side!==jn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==lc&&(n.blendSrc=this.blendSrc),this.blendDst!==cc&&(n.blendDst=this.blendDst),this.blendEquation!==xs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==lr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Os&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Os&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Os&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},We=class extends fn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.combine=zf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var zt=new O,Bo=new Re,et=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Xc,this.updateRanges=[],this.gpuType=Hn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Bo.fromBufferAttribute(this,t),Bo.applyMatrix3(e),this.setXY(t,Bo.x,Bo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix3(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Bn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=_t(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Bn(t,this.array)),t}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Bn(t,this.array)),t}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Bn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Bn(t,this.array)),t}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),s=_t(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),s=_t(s,this.array),r=_t(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Xc&&(e.usage=this.usage),e}};var gr=class extends et{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var xa=class extends et{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var it=class extends et{constructor(e,t,n){super(new Float32Array(e),t,n)}},fx=0,Sn=new Ge,ql=new Ct,Xs=new O,_n=new qt,Wr=new qt,Gt=new O,lt=class i extends Mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fx++}),this.uuid=Vn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jf(e)?xa:gr)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ze().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Sn.makeRotationFromQuaternion(e),this.applyMatrix4(Sn),this}rotateX(e){return Sn.makeRotationX(e),this.applyMatrix4(Sn),this}rotateY(e){return Sn.makeRotationY(e),this.applyMatrix4(Sn),this}rotateZ(e){return Sn.makeRotationZ(e),this.applyMatrix4(Sn),this}translate(e,t,n){return Sn.makeTranslation(e,t,n),this.applyMatrix4(Sn),this}scale(e,t,n){return Sn.makeScale(e,t,n),this.applyMatrix4(Sn),this}lookAt(e){return ql.lookAt(e),ql.updateMatrix(),this.applyMatrix4(ql.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xs).negate(),this.translate(Xs.x,Xs.y,Xs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new it(n,3))}else{for(let n=0,s=t.count;n<s;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];_n.setFromBufferAttribute(r),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new an);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){let n=this.boundingSphere.center;if(_n.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Wr.setFromBufferAttribute(a),this.morphTargetsRelative?(Gt.addVectors(_n.min,Wr.min),_n.expandByPoint(Gt),Gt.addVectors(_n.max,Wr.max),_n.expandByPoint(Gt)):(_n.expandByPoint(Wr.min),_n.expandByPoint(Wr.max))}_n.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Gt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Gt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Gt.fromBufferAttribute(a,c),l&&(Xs.fromBufferAttribute(e,c),Gt.add(Xs)),s=Math.max(s,n.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new et(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new O,l[C]=new O;let c=new O,h=new O,u=new O,d=new Re,f=new Re,x=new Re,p=new O,g=new O;function m(C,b,M){c.fromBufferAttribute(n,C),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,C),f.fromBufferAttribute(r,b),x.fromBufferAttribute(r,M),h.sub(c),u.sub(c),f.sub(d),x.sub(d);let I=1/(f.x*x.y-x.x*f.y);isFinite(I)&&(p.copy(h).multiplyScalar(x.y).addScaledVector(u,-f.y).multiplyScalar(I),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-x.x).multiplyScalar(I),a[C].add(p),a[b].add(p),a[M].add(p),l[C].add(g),l[b].add(g),l[M].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let C=0,b=_.length;C<b;++C){let M=_[C],I=M.start,B=M.count;for(let k=I,V=I+B;k<V;k+=3)m(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let v=new O,y=new O,w=new O,E=new O;function S(C){w.fromBufferAttribute(s,C),E.copy(w);let b=a[C];v.copy(b),v.sub(w.multiplyScalar(w.dot(b))).normalize(),y.crossVectors(E,b);let I=y.dot(l[C])<0?-1:1;o.setXYZW(C,v.x,v.y,v.z,I)}for(let C=0,b=_.length;C<b;++C){let M=_[C],I=M.start,B=M.count;for(let k=I,V=I+B;k<V;k+=3)S(e.getX(k+0)),S(e.getX(k+1)),S(e.getX(k+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new et(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new O,r=new O,o=new O,a=new O,l=new O,c=new O,h=new O,u=new O;if(e)for(let d=0,f=e.count;d<f;d+=3){let x=e.getX(d+0),p=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,p),o.fromBufferAttribute(t,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,x),l.fromBufferAttribute(n,p),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(p,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Gt.fromBufferAttribute(e,t),Gt.normalize(),e.setXYZ(t,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,x=0;for(let p=0,g=l.length;p<g;p++){a.isInterleavedBufferAttribute?f=l[p]*a.data.stride+a.offset:f=l[p]*h;for(let m=0;m<h;m++)d[x++]=c[f++]}return new et(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},zd=new Ge,ds=new vs,Ho=new an,Fd=new O,Vo=new O,Go=new O,Wo=new O,Kl=new O,Xo=new O,kd=new O,Yo=new O,ge=class extends Ct{constructor(e=new lt,t=new We){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Xo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Kl.fromBufferAttribute(u,e),o?Xo.addScaledVector(Kl,h):Xo.addScaledVector(Kl.sub(t),h))}t.add(Xo)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ho.copy(n.boundingSphere),Ho.applyMatrix4(r),ds.copy(e.ray).recast(e.near),!(Ho.containsPoint(ds.origin)===!1&&(ds.intersectSphere(Ho,Fd)===null||ds.origin.distanceToSquared(Fd)>(e.far-e.near)**2))&&(zd.copy(r).invert(),ds.copy(e.ray).applyMatrix4(zd),!(n.boundingBox!==null&&ds.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ds)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,p=d.length;x<p;x++){let g=d[x],m=o[g.materialIndex],_=Math.max(g.start,f.start),v=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let y=_,w=v;y<w;y+=3){let E=a.getX(y),S=a.getX(y+1),C=a.getX(y+2);s=qo(this,m,e,n,c,h,u,E,S,C),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let x=Math.max(0,f.start),p=Math.min(a.count,f.start+f.count);for(let g=x,m=p;g<m;g+=3){let _=a.getX(g),v=a.getX(g+1),y=a.getX(g+2);s=qo(this,o,e,n,c,h,u,_,v,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,p=d.length;x<p;x++){let g=d[x],m=o[g.materialIndex],_=Math.max(g.start,f.start),v=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let y=_,w=v;y<w;y+=3){let E=y,S=y+1,C=y+2;s=qo(this,m,e,n,c,h,u,E,S,C),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let x=Math.max(0,f.start),p=Math.min(l.count,f.start+f.count);for(let g=x,m=p;g<m;g+=3){let _=g,v=g+1,y=g+2;s=qo(this,o,e,n,c,h,u,_,v,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function px(i,e,t,n,s,r,o,a){let l;if(e.side===Qt?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===jn,a),l===null)return null;Yo.copy(a),Yo.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Yo);return c<t.near||c>t.far?null:{distance:c,point:Yo.clone(),object:i}}function qo(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,Vo),i.getVertexPosition(l,Go),i.getVertexPosition(c,Wo);let h=px(i,e,t,n,Vo,Go,Wo,kd);if(h){let u=new O;zi.getBarycoord(kd,Vo,Go,Wo,u),s&&(h.uv=zi.getInterpolatedAttribute(s,a,l,c,u,new Re)),r&&(h.uv1=zi.getInterpolatedAttribute(r,a,l,c,u,new Re)),o&&(h.normal=zi.getInterpolatedAttribute(o,a,l,c,u,new O),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new O,materialIndex:0};zi.getNormal(Vo,Go,Wo,d.normal),h.face=d,h.barycoord=u}return h}var It=class i extends lt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;x("z","y","x",-1,-1,n,t,e,o,r,0),x("z","y","x",1,-1,n,t,-e,o,r,1),x("x","z","y",1,1,e,n,t,s,o,2),x("x","z","y",1,-1,e,n,-t,s,o,3),x("x","y","z",1,-1,e,t,n,s,r,4),x("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new it(c,3)),this.setAttribute("normal",new it(h,3)),this.setAttribute("uv",new it(u,2));function x(p,g,m,_,v,y,w,E,S,C,b){let M=y/S,I=w/C,B=y/2,k=w/2,V=E/2,L=S+1,A=C+1,F=0,U=0,D=new O;for(let H=0;H<A;H++){let Q=H*I-k;for(let ce=0;ce<L;ce++){let pe=ce*M-B;D[p]=pe*_,D[g]=Q*v,D[m]=V,c.push(D.x,D.y,D.z),D[p]=0,D[g]=0,D[m]=E>0?1:-1,h.push(D.x,D.y,D.z),u.push(ce/S),u.push(1-H/C),F+=1}}for(let H=0;H<C;H++)for(let Q=0;Q<S;Q++){let ce=d+Q+L*H,pe=d+Q+L*(H+1),Y=d+(Q+1)+L*(H+1),oe=d+(Q+1)+L*H;l.push(ce,pe,oe),l.push(pe,Y,oe),U+=6}a.addGroup(f,U,b),f+=U,d+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function xr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function rn(i){let e={};for(let t=0;t<i.length;t++){let n=xr(i[t]);for(let s in n)e[s]=n[s]}return e}function mx(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ep(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}var Ki={clone:xr,merge:rn},gx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Pt=class extends fn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gx,this.fragmentShader=xx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xr(e.uniforms),this.uniformsGroups=mx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},_a=class extends Ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ge,this.projectionMatrix=new Ge,this.projectionMatrixInverse=new Ge,this.coordinateSystem=_i}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Oi=new O,Bd=new Re,Hd=new Re,Bt=class extends _a{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=mr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(to*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return mr*2*Math.atan(Math.tan(to*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Oi.x,Oi.y).multiplyScalar(-e/Oi.z),Oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Oi.x,Oi.y).multiplyScalar(-e/Oi.z)}getViewSize(e,t){return this.getViewBounds(e,Bd,Hd),t.subVectors(Hd,Bd)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(to*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ys=-90,qs=1,Zc=class extends Ct{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Bt(Ys,qs,e,t);s.layers=this.layers,this.add(s);let r=new Bt(Ys,qs,e,t);r.layers=this.layers,this.add(r);let o=new Bt(Ys,qs,e,t);o.layers=this.layers,this.add(o);let a=new Bt(Ys,qs,e,t);a.layers=this.layers,this.add(a);let l=new Bt(Ys,qs,e,t);l.layers=this.layers,this.add(l);let c=new Bt(Ys,qs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===_i)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===pa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=p,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},ya=class extends Wt{constructor(e,t,n,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:cr,super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},$c=class extends on{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new ya(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:un}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new It(5,5,5),r=new Pt({name:"CubemapFromEquirect",uniforms:xr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qt,blending:Jn});r.uniforms.tEquirect.value=t;let o=new ge(s,r),a=t.minFilter;return t.minFilter===wn&&(t.minFilter=un),new Zc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},Zl=new O,_x=new O,yx=new Ze,kn=class{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Zl.subVectors(n,t).cross(_x.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Zl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||yx.getNormalMatrix(e),s=this.coplanarPoint(Zl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},fs=new an,Ko=new O,lo=class{constructor(e=new kn,t=new kn,n=new kn,s=new kn,r=new kn,o=new kn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=_i){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],x=s[9],p=s[10],g=s[11],m=s[12],_=s[13],v=s[14],y=s[15];if(n[0].setComponents(l-r,d-c,g-f,y-m).normalize(),n[1].setComponents(l+r,d+c,g+f,y+m).normalize(),n[2].setComponents(l+o,d+h,g+x,y+_).normalize(),n[3].setComponents(l-o,d-h,g-x,y-_).normalize(),n[4].setComponents(l-a,d-u,g-p,y-v).normalize(),t===_i)n[5].setComponents(l+a,d+u,g+p,y+v).normalize();else if(t===pa)n[5].setComponents(a,u,p,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),fs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fs)}intersectsSprite(e){return fs.center.set(0,0,0),fs.radius=.7071067811865476,fs.applyMatrix4(e.matrixWorld),this.intersectsSphere(fs)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Ko.x=s.normal.x>0?e.max.x:e.min.x,Ko.y=s.normal.y>0?e.max.y:e.min.y,Ko.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ko)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function tp(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function vx(i){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,x)=>f.start-x.start);let d=0;for(let f=1;f<u.length;f++){let x=u[d],p=u[f];p.start<=x.start+x.count+1?x.count=Math.max(x.count,p.start+p.count-x.start):(++d,u[d]=p)}u.length=d+1;for(let f=0,x=u.length;f<x;f++){let p=u[f];i.bufferSubData(c,p.start*h.BYTES_PER_ELEMENT,h,p.start,p.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var An=class i extends lt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=e/a,d=t/l,f=[],x=[],p=[],g=[];for(let m=0;m<h;m++){let _=m*d-o;for(let v=0;v<c;v++){let y=v*u-r;x.push(y,-_,0),p.push(0,0,1),g.push(v/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let _=0;_<a;_++){let v=_+c*m,y=_+c*(m+1),w=_+1+c*(m+1),E=_+1+c*m;f.push(v,y,E),f.push(y,w,E)}this.setIndex(f),this.setAttribute("position",new it(x,3)),this.setAttribute("normal",new it(p,3)),this.setAttribute("uv",new it(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Mx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bx=`#ifdef USE_ALPHAHASH
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
#endif`,Ex=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Sx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Tx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ax=`#ifdef USE_AOMAP
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
#endif`,Rx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cx=`#ifdef USE_BATCHING
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
#endif`,Ix=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Px=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Lx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Dx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Nx=`#ifdef USE_IRIDESCENCE
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
#endif`,Ox=`#ifdef USE_BUMPMAP
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
#endif`,Ux=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,zx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Hx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Vx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Gx=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Wx=`#define PI 3.141592653589793
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
} // validated`,Xx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Yx=`vec3 transformedNormal = objectNormal;
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
#endif`,qx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Kx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$x=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jx="gl_FragColor = linearToOutputTexel( gl_FragColor );",jx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Qx=`#ifdef USE_ENVMAP
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
#endif`,e_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,t_=`#ifdef USE_ENVMAP
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
#endif`,n_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,i_=`#ifdef USE_ENVMAP
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
#endif`,s_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,r_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,o_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,a_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,l_=`#ifdef USE_GRADIENTMAP
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
}`,c_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,h_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,u_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,d_=`uniform bool receiveShadow;
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
#endif`,f_=`#ifdef USE_ENVMAP
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
#endif`,p_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,m_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,g_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,x_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,__=`PhysicalMaterial material;
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
#endif`,y_=`struct PhysicalMaterial {
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
}`,v_=`
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
#endif`,M_=`#if defined( RE_IndirectDiffuse )
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
#endif`,b_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,E_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,S_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,w_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,T_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,A_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,R_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,C_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,I_=`#if defined( USE_POINTS_UV )
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
#endif`,P_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,L_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,D_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,N_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,O_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,U_=`#ifdef USE_MORPHTARGETS
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
#endif`,z_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,F_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,k_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,B_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,H_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,V_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,G_=`#ifdef USE_NORMALMAP
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
#endif`,W_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,X_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Y_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,q_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,K_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Z_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,J_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,j_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Q_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ey=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ty=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ny=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,iy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ry=`float getShadowMask() {
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
}`,oy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ay=`#ifdef USE_SKINNING
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
#endif`,ly=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cy=`#ifdef USE_SKINNING
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
#endif`,hy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,uy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,py=`#ifdef USE_TRANSMISSION
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
#endif`,my=`#ifdef USE_TRANSMISSION
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
#endif`,gy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_y=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,vy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,My=`uniform sampler2D t2D;
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
}`,by=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ey=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Sy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ty=`#include <common>
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
}`,Ay=`#if DEPTH_PACKING == 3200
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
}`,Ry=`#define DISTANCE
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
}`,Cy=`#define DISTANCE
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
}`,Iy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Py=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ly=`uniform float scale;
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
}`,Dy=`uniform vec3 diffuse;
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
}`,Ny=`#include <common>
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
}`,Oy=`uniform vec3 diffuse;
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
}`,Uy=`#define LAMBERT
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
}`,zy=`#define LAMBERT
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
}`,Fy=`#define MATCAP
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
}`,ky=`#define MATCAP
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
}`,By=`#define NORMAL
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
}`,Hy=`#define NORMAL
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
}`,Vy=`#define PHONG
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
}`,Gy=`#define PHONG
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
}`,Wy=`#define STANDARD
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
}`,Xy=`#define STANDARD
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
}`,Yy=`#define TOON
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
}`,qy=`#define TOON
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
}`,Ky=`uniform float size;
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
}`,Zy=`uniform vec3 diffuse;
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
}`,$y=`#include <common>
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
}`,Jy=`uniform vec3 color;
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
}`,jy=`uniform float rotation;
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
}`,Qy=`uniform vec3 diffuse;
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
}`,je={alphahash_fragment:Mx,alphahash_pars_fragment:bx,alphamap_fragment:Ex,alphamap_pars_fragment:Sx,alphatest_fragment:wx,alphatest_pars_fragment:Tx,aomap_fragment:Ax,aomap_pars_fragment:Rx,batching_pars_vertex:Cx,batching_vertex:Ix,begin_vertex:Px,beginnormal_vertex:Lx,bsdfs:Dx,iridescence_fragment:Nx,bumpmap_pars_fragment:Ox,clipping_planes_fragment:Ux,clipping_planes_pars_fragment:zx,clipping_planes_pars_vertex:Fx,clipping_planes_vertex:kx,color_fragment:Bx,color_pars_fragment:Hx,color_pars_vertex:Vx,color_vertex:Gx,common:Wx,cube_uv_reflection_fragment:Xx,defaultnormal_vertex:Yx,displacementmap_pars_vertex:qx,displacementmap_vertex:Kx,emissivemap_fragment:Zx,emissivemap_pars_fragment:$x,colorspace_fragment:Jx,colorspace_pars_fragment:jx,envmap_fragment:Qx,envmap_common_pars_fragment:e_,envmap_pars_fragment:t_,envmap_pars_vertex:n_,envmap_physical_pars_fragment:f_,envmap_vertex:i_,fog_vertex:s_,fog_pars_vertex:r_,fog_fragment:o_,fog_pars_fragment:a_,gradientmap_pars_fragment:l_,lightmap_pars_fragment:c_,lights_lambert_fragment:h_,lights_lambert_pars_fragment:u_,lights_pars_begin:d_,lights_toon_fragment:p_,lights_toon_pars_fragment:m_,lights_phong_fragment:g_,lights_phong_pars_fragment:x_,lights_physical_fragment:__,lights_physical_pars_fragment:y_,lights_fragment_begin:v_,lights_fragment_maps:M_,lights_fragment_end:b_,logdepthbuf_fragment:E_,logdepthbuf_pars_fragment:S_,logdepthbuf_pars_vertex:w_,logdepthbuf_vertex:T_,map_fragment:A_,map_pars_fragment:R_,map_particle_fragment:C_,map_particle_pars_fragment:I_,metalnessmap_fragment:P_,metalnessmap_pars_fragment:L_,morphinstance_vertex:D_,morphcolor_vertex:N_,morphnormal_vertex:O_,morphtarget_pars_vertex:U_,morphtarget_vertex:z_,normal_fragment_begin:F_,normal_fragment_maps:k_,normal_pars_fragment:B_,normal_pars_vertex:H_,normal_vertex:V_,normalmap_pars_fragment:G_,clearcoat_normal_fragment_begin:W_,clearcoat_normal_fragment_maps:X_,clearcoat_pars_fragment:Y_,iridescence_pars_fragment:q_,opaque_fragment:K_,packing:Z_,premultiplied_alpha_fragment:$_,project_vertex:J_,dithering_fragment:j_,dithering_pars_fragment:Q_,roughnessmap_fragment:ey,roughnessmap_pars_fragment:ty,shadowmap_pars_fragment:ny,shadowmap_pars_vertex:iy,shadowmap_vertex:sy,shadowmask_pars_fragment:ry,skinbase_vertex:oy,skinning_pars_vertex:ay,skinning_vertex:ly,skinnormal_vertex:cy,specularmap_fragment:hy,specularmap_pars_fragment:uy,tonemapping_fragment:dy,tonemapping_pars_fragment:fy,transmission_fragment:py,transmission_pars_fragment:my,uv_pars_fragment:gy,uv_pars_vertex:xy,uv_vertex:_y,worldpos_vertex:yy,background_vert:vy,background_frag:My,backgroundCube_vert:by,backgroundCube_frag:Ey,cube_vert:Sy,cube_frag:wy,depth_vert:Ty,depth_frag:Ay,distanceRGBA_vert:Ry,distanceRGBA_frag:Cy,equirect_vert:Iy,equirect_frag:Py,linedashed_vert:Ly,linedashed_frag:Dy,meshbasic_vert:Ny,meshbasic_frag:Oy,meshlambert_vert:Uy,meshlambert_frag:zy,meshmatcap_vert:Fy,meshmatcap_frag:ky,meshnormal_vert:By,meshnormal_frag:Hy,meshphong_vert:Vy,meshphong_frag:Gy,meshphysical_vert:Wy,meshphysical_frag:Xy,meshtoon_vert:Yy,meshtoon_frag:qy,points_vert:Ky,points_frag:Zy,shadow_vert:$y,shadow_frag:Jy,sprite_vert:jy,sprite_frag:Qy},ve={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new Re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new Re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},$n={basic:{uniforms:rn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:rn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Te(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:rn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:rn([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:rn([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new Te(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:rn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:rn([ve.points,ve.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:rn([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:rn([ve.common,ve.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:rn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:rn([ve.sprite,ve.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:rn([ve.common,ve.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:rn([ve.lights,ve.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};$n.physical={uniforms:rn([$n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new Re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new Re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new Re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};var Zo={r:0,b:0,g:0},ps=new Qn,ev=new Ge;function tv(i,e,t,n,s,r,o){let a=new Te(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function x(_){let v=_.isScene===!0?_.background:null;return v&&v.isTexture&&(v=(_.backgroundBlurriness>0?t:e).get(v)),v}function p(_){let v=!1,y=x(_);y===null?m(a,l):y&&y.isColor&&(m(y,1),v=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(_,v){let y=x(v);y&&(y.isCubeTexture||y.mapping===Va)?(h===void 0&&(h=new ge(new It(1,1,1),new Pt({name:"BackgroundCubeMaterial",uniforms:xr($n.backgroundCube.uniforms),vertexShader:$n.backgroundCube.vertexShader,fragmentShader:$n.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,E,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ps.copy(v.backgroundRotation),ps.x*=-1,ps.y*=-1,ps.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ps.y*=-1,ps.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(ev.makeRotationFromEuler(ps)),h.material.toneMapped=Qe.getTransfer(y.colorSpace)!==pt,(u!==y||d!==y.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=y,d=y.version,f=i.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new ge(new An(2,2),new Pt({name:"BackgroundMaterial",uniforms:xr($n.background.uniforms),vertexShader:$n.background.vertexShader,fragmentShader:$n.background.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(y.colorSpace)!==pt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,f=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function m(_,v){_.getRGB(Zo,ep(i)),n.buffers.color.setClear(Zo.r,Zo.g,Zo.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(_,v=1){a.set(_),l=v,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,m(a,l)},render:p,addToRenderList:g}}function nv(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(M,I,B,k,V){let L=!1,A=u(k,B,I);r!==A&&(r=A,c(r.object)),L=f(M,k,B,V),L&&x(M,k,B,V),V!==null&&e.update(V,i.ELEMENT_ARRAY_BUFFER),(L||o)&&(o=!1,y(M,I,B,k),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,I,B){let k=B.wireframe===!0,V=n[M.id];V===void 0&&(V={},n[M.id]=V);let L=V[I.id];L===void 0&&(L={},V[I.id]=L);let A=L[k];return A===void 0&&(A=d(l()),L[k]=A),A}function d(M){let I=[],B=[],k=[];for(let V=0;V<t;V++)I[V]=0,B[V]=0,k[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:B,attributeDivisors:k,object:M,attributes:{},index:null}}function f(M,I,B,k){let V=r.attributes,L=I.attributes,A=0,F=B.getAttributes();for(let U in F)if(F[U].location>=0){let H=V[U],Q=L[U];if(Q===void 0&&(U==="instanceMatrix"&&M.instanceMatrix&&(Q=M.instanceMatrix),U==="instanceColor"&&M.instanceColor&&(Q=M.instanceColor)),H===void 0||H.attribute!==Q||Q&&H.data!==Q.data)return!0;A++}return r.attributesNum!==A||r.index!==k}function x(M,I,B,k){let V={},L=I.attributes,A=0,F=B.getAttributes();for(let U in F)if(F[U].location>=0){let H=L[U];H===void 0&&(U==="instanceMatrix"&&M.instanceMatrix&&(H=M.instanceMatrix),U==="instanceColor"&&M.instanceColor&&(H=M.instanceColor));let Q={};Q.attribute=H,H&&H.data&&(Q.data=H.data),V[U]=Q,A++}r.attributes=V,r.attributesNum=A,r.index=k}function p(){let M=r.newAttributes;for(let I=0,B=M.length;I<B;I++)M[I]=0}function g(M){m(M,0)}function m(M,I){let B=r.newAttributes,k=r.enabledAttributes,V=r.attributeDivisors;B[M]=1,k[M]===0&&(i.enableVertexAttribArray(M),k[M]=1),V[M]!==I&&(i.vertexAttribDivisor(M,I),V[M]=I)}function _(){let M=r.newAttributes,I=r.enabledAttributes;for(let B=0,k=I.length;B<k;B++)I[B]!==M[B]&&(i.disableVertexAttribArray(B),I[B]=0)}function v(M,I,B,k,V,L,A){A===!0?i.vertexAttribIPointer(M,I,B,V,L):i.vertexAttribPointer(M,I,B,k,V,L)}function y(M,I,B,k){p();let V=k.attributes,L=B.getAttributes(),A=I.defaultAttributeValues;for(let F in L){let U=L[F];if(U.location>=0){let D=V[F];if(D===void 0&&(F==="instanceMatrix"&&M.instanceMatrix&&(D=M.instanceMatrix),F==="instanceColor"&&M.instanceColor&&(D=M.instanceColor)),D!==void 0){let H=D.normalized,Q=D.itemSize,ce=e.get(D);if(ce===void 0)continue;let pe=ce.buffer,Y=ce.type,oe=ce.bytesPerElement,ie=Y===i.INT||Y===i.UNSIGNED_INT||D.gpuType===Ih;if(D.isInterleavedBufferAttribute){let Z=D.data,K=Z.stride,$=D.offset;if(Z.isInstancedInterleavedBuffer){for(let ee=0;ee<U.locationSize;ee++)m(U.location+ee,Z.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let ee=0;ee<U.locationSize;ee++)g(U.location+ee);i.bindBuffer(i.ARRAY_BUFFER,pe);for(let ee=0;ee<U.locationSize;ee++)v(U.location+ee,Q/U.locationSize,Y,H,K*oe,($+Q/U.locationSize*ee)*oe,ie)}else{if(D.isInstancedBufferAttribute){for(let Z=0;Z<U.locationSize;Z++)m(U.location+Z,D.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=D.meshPerAttribute*D.count)}else for(let Z=0;Z<U.locationSize;Z++)g(U.location+Z);i.bindBuffer(i.ARRAY_BUFFER,pe);for(let Z=0;Z<U.locationSize;Z++)v(U.location+Z,Q/U.locationSize,Y,H,Q*oe,Q/U.locationSize*Z*oe,ie)}}else if(A!==void 0){let H=A[F];if(H!==void 0)switch(H.length){case 2:i.vertexAttrib2fv(U.location,H);break;case 3:i.vertexAttrib3fv(U.location,H);break;case 4:i.vertexAttrib4fv(U.location,H);break;default:i.vertexAttrib1fv(U.location,H)}}}}_()}function w(){C();for(let M in n){let I=n[M];for(let B in I){let k=I[B];for(let V in k)h(k[V].object),delete k[V];delete I[B]}delete n[M]}}function E(M){if(n[M.id]===void 0)return;let I=n[M.id];for(let B in I){let k=I[B];for(let V in k)h(k[V].object),delete k[V];delete I[B]}delete n[M.id]}function S(M){for(let I in n){let B=n[I];if(B[M.id]===void 0)continue;let k=B[M.id];for(let V in k)h(k[V].object),delete k[V];delete B[M.id]}}function C(){b(),o=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:b,dispose:w,releaseStatesOfGeometry:E,releaseStatesOfProgram:S,initAttributes:p,enableAttribute:g,disableUnusedAttributes:_}}function iv(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let x=0;x<u;x++)f+=h[x];t.update(f,n,1)}function l(c,h,u,d){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let x=0;x<c.length;x++)o(c[x],h[x],d[x]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let x=0;for(let p=0;p<u;p++)x+=h[p]*d[p];t.update(x,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function sv(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let S=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(S){return!(S!==Tn&&n.convert(S)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(S){let C=S===Gn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(S!==vi&&n.convert(S)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&S!==Hn&&!C)}function l(S){if(S==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=x>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:x,maxTextureSize:p,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:_,maxVaryings:v,maxFragmentUniforms:y,vertexTextures:w,maxSamples:E}}function rv(i){let e=this,t=null,n=0,s=!1,r=!1,o=new kn,a=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let x=u.clippingPlanes,p=u.clipIntersection,g=u.clipShadows,m=i.get(u);if(!s||x===null||x.length===0||r&&!g)r?h(null):c();else{let _=r?0:n,v=_*4,y=m.clippingState||null;l.value=y,y=h(x,d,v,f);for(let w=0;w!==v;++w)y[w]=t[w];m.clippingState=y,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,x){let p=u!==null?u.length:0,g=null;if(p!==0){if(g=l.value,x!==!0||g===null){let m=f+p*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(g===null||g.length<m)&&(g=new Float32Array(m));for(let v=0,y=f;v!==p;++v,y+=4)o.copy(u[v]).applyMatrix4(_,a),o.normal.toArray(g,y),g[y+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,g}}function ov(i){let e=new WeakMap;function t(o,a){return a===xc?o.mapping=cr:a===_c&&(o.mapping=hr),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===xc||a===_c)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new $c(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Bi=class extends _a{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ir=4,Vd=[.125,.215,.35,.446,.526,.582],_s=20,$l=new Bi,Gd=new Te,Jl=null,jl=0,Ql=0,ec=!1,gs=(1+Math.sqrt(5))/2,Ks=1/gs,Wd=[new O(-gs,Ks,0),new O(gs,Ks,0),new O(-Ks,0,gs),new O(Ks,0,gs),new O(0,gs,-Ks),new O(0,gs,Ks),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)],va=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Jl=this._renderer.getRenderTarget(),jl=this._renderer.getActiveCubeFace(),Ql=this._renderer.getActiveMipmapLevel(),ec=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Jl,jl,Ql),this._renderer.xr.enabled=ec,e.scissorTest=!1,$o(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===cr||e.mapping===hr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Jl=this._renderer.getRenderTarget(),jl=this._renderer.getActiveCubeFace(),Ql=this._renderer.getActiveMipmapLevel(),ec=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:un,minFilter:un,generateMipmaps:!1,type:Gn,format:Tn,colorSpace:nn,depthBuffer:!1},s=Xd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xd(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=av(r)),this._blurMaterial=lv(r,e,t)}return s}_compileMaterial(e){let t=new ge(this._lodPlanes[0],e);this._renderer.compile(t,$l)}_sceneToCubeUV(e,t,n,s){let a=new Bt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Gd),h.toneMapping=ki,h.autoClear=!1;let f=new We({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1}),x=new ge(new It,f),p=!1,g=e.background;g?g.isColor&&(f.color.copy(g),e.background=null,p=!0):(f.color.copy(Gd),p=!0);for(let m=0;m<6;m++){let _=m%3;_===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):_===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));let v=this._cubeSize;$o(s,_*v,m>2?v:0,v,v),h.setRenderTarget(s),p&&h.render(x,a),h.render(e,a)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=g}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===cr||e.mapping===hr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=qd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yd());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new ge(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;$o(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,$l)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Wd[(s-r-1)%Wd.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new ge(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*_s-1),p=r/x,g=isFinite(r)?1+Math.floor(h*p):_s;g>_s&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${_s}`);let m=[],_=0;for(let S=0;S<_s;++S){let C=S/p,b=Math.exp(-C*C/2);m.push(b),S===0?_+=b:S<g&&(_+=2*b)}for(let S=0;S<m.length;S++)m[S]=m[S]/_;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:v}=this;d.dTheta.value=x,d.mipInt.value=v-n;let y=this._sizeLods[s],w=3*y*(s>v-ir?s-v+ir:0),E=4*(this._cubeSize-y);$o(t,w,E,3*y,2*y),l.setRenderTarget(t),l.render(u,$l)}};function av(i){let e=[],t=[],n=[],s=i,r=i-ir+1+Vd.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>i-ir?l=Vd[o-i+ir-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,x=6,p=3,g=2,m=1,_=new Float32Array(p*x*f),v=new Float32Array(g*x*f),y=new Float32Array(m*x*f);for(let E=0;E<f;E++){let S=E%3*2/3-1,C=E>2?0:-1,b=[S,C,0,S+2/3,C,0,S+2/3,C+1,0,S,C,0,S+2/3,C+1,0,S,C+1,0];_.set(b,p*x*E),v.set(d,g*x*E);let M=[E,E,E,E,E,E];y.set(M,m*x*E)}let w=new lt;w.setAttribute("position",new et(_,p)),w.setAttribute("uv",new et(v,g)),w.setAttribute("faceIndex",new et(y,m)),e.push(w),s>ir&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Xd(i,e,t){let n=new on(i,e,t);return n.texture.mapping=Va,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function $o(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function lv(i,e,t){let n=new Float32Array(_s),s=new O(0,1,0);return new Pt({name:"SphericalGaussianBlur",defines:{n:_s,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Hh(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function Yd(){return new Pt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hh(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function qd(){return new Pt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function Hh(){return`

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
	`}function cv(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===xc||l===_c,h=l===cr||l===hr;if(c||h){let u=e.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new va(i)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new va(i)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function hv(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&jr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function uv(i,e,t,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let x in d.attributes)e.remove(d.attributes[x]);for(let x in d.morphAttributes){let p=d.morphAttributes[x];for(let g=0,m=p.length;g<m;g++)e.remove(p[g])}d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let x in d)e.update(d[x],i.ARRAY_BUFFER);let f=u.morphAttributes;for(let x in f){let p=f[x];for(let g=0,m=p.length;g<m;g++)e.update(p[g],i.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,x=u.attributes.position,p=0;if(f!==null){let _=f.array;p=f.version;for(let v=0,y=_.length;v<y;v+=3){let w=_[v+0],E=_[v+1],S=_[v+2];d.push(w,E,E,S,S,w)}}else if(x!==void 0){let _=x.array;p=x.version;for(let v=0,y=_.length/3-1;v<y;v+=3){let w=v+0,E=v+1,S=v+2;d.push(w,E,E,S,S,w)}}else return;let g=new(jf(d)?xa:gr)(d,1);g.version=p;let m=r.get(u);m&&e.remove(m),r.set(u,g)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function dv(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*o),t.update(f,n,1)}function c(d,f,x){x!==0&&(i.drawElementsInstanced(n,f,r,d*o,x),t.update(f,n,x))}function h(d,f,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,x);let g=0;for(let m=0;m<x;m++)g+=f[m];t.update(g,n,1)}function u(d,f,x,p){if(x===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<d.length;m++)c(d[m]/o,f[m],p[m]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,p,0,x);let m=0;for(let _=0;_<x;_++)m+=f[_]*p[_];t.update(m,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function fv(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function pv(i,e,t){let n=new WeakMap,s=new ct;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let b=function(){S.dispose(),n.delete(a),a.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],v=0;f===!0&&(v=1),x===!0&&(v=2),p===!0&&(v=3);let y=a.attributes.position.count*v,w=1;y>e.maxTextureSize&&(w=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let E=new Float32Array(y*w*4*u),S=new ga(E,y,w,u);S.type=Hn,S.needsUpdate=!0;let C=v*4;for(let M=0;M<u;M++){let I=g[M],B=m[M],k=_[M],V=y*w*4*M;for(let L=0;L<I.count;L++){let A=L*C;f===!0&&(s.fromBufferAttribute(I,L),E[V+A+0]=s.x,E[V+A+1]=s.y,E[V+A+2]=s.z,E[V+A+3]=0),x===!0&&(s.fromBufferAttribute(B,L),E[V+A+4]=s.x,E[V+A+5]=s.y,E[V+A+6]=s.z,E[V+A+7]=0),p===!0&&(s.fromBufferAttribute(k,L),E[V+A+8]=s.x,E[V+A+9]=s.y,E[V+A+10]=s.z,E[V+A+11]=k.itemSize===4?s.w:1)}}d={count:u,texture:S,size:new Re(y,w)},n.set(a,d),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let p=0;p<c.length;p++)f+=c[p];let x=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function mv(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var Ma=class extends Wt{constructor(e,t,n,s,r,o,a,l,c,h=rr){if(h!==rr&&h!==dr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===rr&&(n=ys),n===void 0&&h===dr&&(n=ur),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:en,this.minFilter=l!==void 0?l:en,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},np=new Wt,Kd=new Ma(1,1),ip=new ga,sp=new Kc,rp=new ya,Zd=[],$d=[],Jd=new Float32Array(16),jd=new Float32Array(9),Qd=new Float32Array(4);function Tr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Zd[s];if(r===void 0&&(r=new Float32Array(s),Zd[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Ht(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Vt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Xa(i,e){let t=$d[e];t===void 0&&(t=new Int32Array(e),$d[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function gv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function xv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;i.uniform2fv(this.addr,e),Vt(t,e)}}function _v(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ht(t,e))return;i.uniform3fv(this.addr,e),Vt(t,e)}}function yv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;i.uniform4fv(this.addr,e),Vt(t,e)}}function vv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,n))return;Qd.set(n),i.uniformMatrix2fv(this.addr,!1,Qd),Vt(t,n)}}function Mv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,n))return;jd.set(n),i.uniformMatrix3fv(this.addr,!1,jd),Vt(t,n)}}function bv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,n))return;Jd.set(n),i.uniformMatrix4fv(this.addr,!1,Jd),Vt(t,n)}}function Ev(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Sv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;i.uniform2iv(this.addr,e),Vt(t,e)}}function wv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;i.uniform3iv(this.addr,e),Vt(t,e)}}function Tv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;i.uniform4iv(this.addr,e),Vt(t,e)}}function Av(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Rv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;i.uniform2uiv(this.addr,e),Vt(t,e)}}function Cv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;i.uniform3uiv(this.addr,e),Vt(t,e)}}function Iv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;i.uniform4uiv(this.addr,e),Vt(t,e)}}function Pv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Kd.compareFunction=$f,r=Kd):r=np,t.setTexture2D(e||r,s)}function Lv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||sp,s)}function Dv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||rp,s)}function Nv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||ip,s)}function Ov(i){switch(i){case 5126:return gv;case 35664:return xv;case 35665:return _v;case 35666:return yv;case 35674:return vv;case 35675:return Mv;case 35676:return bv;case 5124:case 35670:return Ev;case 35667:case 35671:return Sv;case 35668:case 35672:return wv;case 35669:case 35673:return Tv;case 5125:return Av;case 36294:return Rv;case 36295:return Cv;case 36296:return Iv;case 35678:case 36198:case 36298:case 36306:case 35682:return Pv;case 35679:case 36299:case 36307:return Lv;case 35680:case 36300:case 36308:case 36293:return Dv;case 36289:case 36303:case 36311:case 36292:return Nv}}function Uv(i,e){i.uniform1fv(this.addr,e)}function zv(i,e){let t=Tr(e,this.size,2);i.uniform2fv(this.addr,t)}function Fv(i,e){let t=Tr(e,this.size,3);i.uniform3fv(this.addr,t)}function kv(i,e){let t=Tr(e,this.size,4);i.uniform4fv(this.addr,t)}function Bv(i,e){let t=Tr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Hv(i,e){let t=Tr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Vv(i,e){let t=Tr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Gv(i,e){i.uniform1iv(this.addr,e)}function Wv(i,e){i.uniform2iv(this.addr,e)}function Xv(i,e){i.uniform3iv(this.addr,e)}function Yv(i,e){i.uniform4iv(this.addr,e)}function qv(i,e){i.uniform1uiv(this.addr,e)}function Kv(i,e){i.uniform2uiv(this.addr,e)}function Zv(i,e){i.uniform3uiv(this.addr,e)}function $v(i,e){i.uniform4uiv(this.addr,e)}function Jv(i,e,t){let n=this.cache,s=e.length,r=Xa(t,s);Ht(n,r)||(i.uniform1iv(this.addr,r),Vt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||np,r[o])}function jv(i,e,t){let n=this.cache,s=e.length,r=Xa(t,s);Ht(n,r)||(i.uniform1iv(this.addr,r),Vt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||sp,r[o])}function Qv(i,e,t){let n=this.cache,s=e.length,r=Xa(t,s);Ht(n,r)||(i.uniform1iv(this.addr,r),Vt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||rp,r[o])}function eM(i,e,t){let n=this.cache,s=e.length,r=Xa(t,s);Ht(n,r)||(i.uniform1iv(this.addr,r),Vt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||ip,r[o])}function tM(i){switch(i){case 5126:return Uv;case 35664:return zv;case 35665:return Fv;case 35666:return kv;case 35674:return Bv;case 35675:return Hv;case 35676:return Vv;case 5124:case 35670:return Gv;case 35667:case 35671:return Wv;case 35668:case 35672:return Xv;case 35669:case 35673:return Yv;case 5125:return qv;case 36294:return Kv;case 36295:return Zv;case 36296:return $v;case 35678:case 36198:case 36298:case 36306:case 35682:return Jv;case 35679:case 36299:case 36307:return jv;case 35680:case 36300:case 36308:case 36293:return Qv;case 36289:case 36303:case 36311:case 36292:return eM}}var Jc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ov(t.type)}},jc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=tM(t.type)}},Qc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},tc=/(\w+)(\])?(\[|\.)?/g;function ef(i,e){i.seq.push(e),i.map[e.id]=e}function nM(i,e,t){let n=i.name,s=n.length;for(tc.lastIndex=0;;){let r=tc.exec(n),o=tc.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){ef(t,c===void 0?new Jc(a,i,e):new jc(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new Qc(a),ef(t,u)),t=u}}}var ar=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);nM(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function tf(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var iM=37297,sM=0;function rM(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var nf=new Ze;function oM(i){Qe._getMatrix(nf,Qe.workingColorSpace,i);let e=`mat3( ${nf.elements.map(t=>t.toFixed(4))} )`;switch(Qe.getTransfer(i)){case Wa:return[e,"LinearTransferOETF"];case pt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function sf(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+rM(i.getShaderSource(e),o)}else return s}function aM(i,e){let t=oM(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function lM(i,e){let t;switch(e){case Sh:t="Linear";break;case wh:t="Reinhard";break;case Th:t="Cineon";break;case po:t="ACESFilmic";break;case Ah:t="AgX";break;case Rh:t="Neutral";break;case Eg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Jo=new O;function cM(){Qe.getLuminanceCoefficients(Jo);let i=Jo.x.toFixed(4),e=Jo.y.toFixed(4),t=Jo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hM(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qr).join(`
`)}function uM(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function dM(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Qr(i){return i!==""}function rf(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function of(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var fM=/^[ \t]*#include +<([\w\d./]+)>/gm;function eh(i){return i.replace(fM,mM)}var pM=new Map;function mM(i,e){let t=je[e];if(t===void 0){let n=pM.get(e);if(n!==void 0)t=je[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return eh(t)}var gM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function af(i){return i.replace(gM,xM)}function xM(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function lf(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function _M(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Uf?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Eh?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===gi&&(e="SHADOWMAP_TYPE_VSM"),e}function yM(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case cr:case hr:e="ENVMAP_TYPE_CUBE";break;case Va:e="ENVMAP_TYPE_CUBE_UV";break}return e}function vM(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case hr:e="ENVMAP_MODE_REFRACTION";break}return e}function MM(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case zf:e="ENVMAP_BLENDING_MULTIPLY";break;case Mg:e="ENVMAP_BLENDING_MIX";break;case bg:e="ENVMAP_BLENDING_ADD";break}return e}function bM(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function EM(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=_M(t),c=yM(t),h=vM(t),u=MM(t),d=bM(t),f=hM(t),x=uM(r),p=s.createProgram(),g,m,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Qr).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Qr).join(`
`),m.length>0&&(m+=`
`)):(g=[lf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qr).join(`
`),m=[lf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ki?"#define TONE_MAPPING":"",t.toneMapping!==ki?je.tonemapping_pars_fragment:"",t.toneMapping!==ki?lM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,aM("linearToOutputTexel",t.outputColorSpace),cM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Qr).join(`
`)),o=eh(o),o=rf(o,t),o=of(o,t),a=eh(a),a=rf(a,t),a=of(a,t),o=af(o),a=af(a),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===vd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===vd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let v=_+g+o,y=_+m+a,w=tf(s,s.VERTEX_SHADER,v),E=tf(s,s.FRAGMENT_SHADER,y);s.attachShader(p,w),s.attachShader(p,E),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function S(I){if(i.debug.checkShaderErrors){let B=s.getProgramInfoLog(p).trim(),k=s.getShaderInfoLog(w).trim(),V=s.getShaderInfoLog(E).trim(),L=!0,A=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(L=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,w,E);else{let F=sf(s,w,"vertex"),U=sf(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+B+`
`+F+`
`+U)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(k===""||V==="")&&(A=!1);A&&(I.diagnostics={runnable:L,programLog:B,vertexShader:{log:k,prefix:g},fragmentShader:{log:V,prefix:m}})}s.deleteShader(w),s.deleteShader(E),C=new ar(s,p),b=dM(s,p)}let C;this.getUniforms=function(){return C===void 0&&S(this),C};let b;this.getAttributes=function(){return b===void 0&&S(this),b};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(p,iM)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=sM++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=w,this.fragmentShader=E,this}var SM=0,th=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new nh(e),t.set(e,n)),n}},nh=class{constructor(e){this.id=SM++,this.code=e,this.usedTimes=0}};function wM(i,e,t,n,s,r,o){let a=new ao,l=new th,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(b){return c.add(b),b===0?"uv":`uv${b}`}function g(b,M,I,B,k){let V=B.fog,L=k.geometry,A=b.isMeshStandardMaterial?B.environment:null,F=(b.isMeshStandardMaterial?t:e).get(b.envMap||A),U=F&&F.mapping===Va?F.image.height:null,D=x[b.type];b.precision!==null&&(f=s.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));let H=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,Q=H!==void 0?H.length:0,ce=0;L.morphAttributes.position!==void 0&&(ce=1),L.morphAttributes.normal!==void 0&&(ce=2),L.morphAttributes.color!==void 0&&(ce=3);let pe,Y,oe,ie;if(D){let xt=$n[D];pe=xt.vertexShader,Y=xt.fragmentShader}else pe=b.vertexShader,Y=b.fragmentShader,l.update(b),oe=l.getVertexShaderID(b),ie=l.getFragmentShaderID(b);let Z=i.getRenderTarget(),K=i.state.buffers.depth.getReversed(),$=k.isInstancedMesh===!0,ee=k.isBatchedMesh===!0,re=!!b.map,se=!!b.matcap,_e=!!F,T=!!b.aoMap,ye=!!b.lightMap,te=!!b.bumpMap,Me=!!b.normalMap,he=!!b.displacementMap,Ce=!!b.emissiveMap,Ne=!!b.metalnessMap,N=!!b.roughnessMap,R=b.anisotropy>0,q=b.clearcoat>0,le=b.dispersion>0,de=b.iridescence>0,ae=b.sheen>0,Fe=b.transmission>0,Ee=R&&!!b.anisotropyMap,Ie=q&&!!b.clearcoatMap,rt=q&&!!b.clearcoatNormalMap,me=q&&!!b.clearcoatRoughnessMap,Pe=de&&!!b.iridescenceMap,He=de&&!!b.iridescenceThicknessMap,Ve=ae&&!!b.sheenColorMap,Le=ae&&!!b.sheenRoughnessMap,st=!!b.specularMap,Je=!!b.specularColorMap,Et=!!b.specularIntensityMap,G=Fe&&!!b.transmissionMap,be=Fe&&!!b.thicknessMap,ne=!!b.gradientMap,fe=!!b.alphaMap,Ae=b.alphaTest>0,Se=!!b.alphaHash,qe=!!b.extensions,Nt=ki;b.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Nt=i.toneMapping);let Zt={shaderID:D,shaderType:b.type,shaderName:b.name,vertexShader:pe,fragmentShader:Y,defines:b.defines,customVertexShaderID:oe,customFragmentShaderID:ie,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:ee,batchingColor:ee&&k._colorsTexture!==null,instancing:$,instancingColor:$&&k.instanceColor!==null,instancingMorph:$&&k.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Z===null?i.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:nn,alphaToCoverage:!!b.alphaToCoverage,map:re,matcap:se,envMap:_e,envMapMode:_e&&F.mapping,envMapCubeUVHeight:U,aoMap:T,lightMap:ye,bumpMap:te,normalMap:Me,displacementMap:d&&he,emissiveMap:Ce,normalMapObjectSpace:Me&&b.normalMapType===Cg,normalMapTangentSpace:Me&&b.normalMapType===Zf,metalnessMap:Ne,roughnessMap:N,anisotropy:R,anisotropyMap:Ee,clearcoat:q,clearcoatMap:Ie,clearcoatNormalMap:rt,clearcoatRoughnessMap:me,dispersion:le,iridescence:de,iridescenceMap:Pe,iridescenceThicknessMap:He,sheen:ae,sheenColorMap:Ve,sheenRoughnessMap:Le,specularMap:st,specularColorMap:Je,specularIntensityMap:Et,transmission:Fe,transmissionMap:G,thicknessMap:be,gradientMap:ne,opaque:b.transparent===!1&&b.blending===sr&&b.alphaToCoverage===!1,alphaMap:fe,alphaTest:Ae,alphaHash:Se,combine:b.combine,mapUv:re&&p(b.map.channel),aoMapUv:T&&p(b.aoMap.channel),lightMapUv:ye&&p(b.lightMap.channel),bumpMapUv:te&&p(b.bumpMap.channel),normalMapUv:Me&&p(b.normalMap.channel),displacementMapUv:he&&p(b.displacementMap.channel),emissiveMapUv:Ce&&p(b.emissiveMap.channel),metalnessMapUv:Ne&&p(b.metalnessMap.channel),roughnessMapUv:N&&p(b.roughnessMap.channel),anisotropyMapUv:Ee&&p(b.anisotropyMap.channel),clearcoatMapUv:Ie&&p(b.clearcoatMap.channel),clearcoatNormalMapUv:rt&&p(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&p(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Pe&&p(b.iridescenceMap.channel),iridescenceThicknessMapUv:He&&p(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ve&&p(b.sheenColorMap.channel),sheenRoughnessMapUv:Le&&p(b.sheenRoughnessMap.channel),specularMapUv:st&&p(b.specularMap.channel),specularColorMapUv:Je&&p(b.specularColorMap.channel),specularIntensityMapUv:Et&&p(b.specularIntensityMap.channel),transmissionMapUv:G&&p(b.transmissionMap.channel),thicknessMapUv:be&&p(b.thicknessMap.channel),alphaMapUv:fe&&p(b.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(Me||R),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!L.attributes.uv&&(re||fe),fog:!!V,useFog:b.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:K,skinning:k.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:ce,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:Nt,decodeVideoTexture:re&&b.map.isVideoTexture===!0&&Qe.getTransfer(b.map.colorSpace)===pt,decodeVideoTextureEmissive:Ce&&b.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(b.emissiveMap.colorSpace)===pt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===gt,flipSided:b.side===Qt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:qe&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qe&&b.extensions.multiDraw===!0||ee)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Zt.vertexUv1s=c.has(1),Zt.vertexUv2s=c.has(2),Zt.vertexUv3s=c.has(3),c.clear(),Zt}function m(b){let M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(let I in b.defines)M.push(I),M.push(b.defines[I]);return b.isRawShaderMaterial===!1&&(_(M,b),v(M,b),M.push(i.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function _(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function v(b,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),b.push(a.mask)}function y(b){let M=x[b.type],I;if(M){let B=$n[M];I=Ki.clone(B.uniforms)}else I=b.uniforms;return I}function w(b,M){let I;for(let B=0,k=h.length;B<k;B++){let V=h[B];if(V.cacheKey===M){I=V,++I.usedTimes;break}}return I===void 0&&(I=new EM(i,M,b,r),h.push(I)),I}function E(b){if(--b.usedTimes===0){let M=h.indexOf(b);h[M]=h[h.length-1],h.pop(),b.destroy()}}function S(b){l.remove(b)}function C(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:y,acquireProgram:w,releaseProgram:E,releaseShaderCache:S,programs:h,dispose:C}}function TM(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function AM(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function cf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function hf(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,d,f,x,p,g){let m=i[e];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:x,renderOrder:u.renderOrder,z:p,group:g},i[e]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=x,m.renderOrder=u.renderOrder,m.z=p,m.group=g),e++,m}function a(u,d,f,x,p,g){let m=o(u,d,f,x,p,g);f.transmission>0?n.push(m):f.transparent===!0?s.push(m):t.push(m)}function l(u,d,f,x,p,g){let m=o(u,d,f,x,p,g);f.transmission>0?n.unshift(m):f.transparent===!0?s.unshift(m):t.unshift(m)}function c(u,d){t.length>1&&t.sort(u||AM),n.length>1&&n.sort(d||cf),s.length>1&&s.sort(d||cf)}function h(){for(let u=e,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function RM(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new hf,i.set(n,[o])):s>=r.length?(o=new hf,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function CM(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new Te};break;case"SpotLight":t={position:new O,direction:new O,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Te,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":t={color:new Te,position:new O,halfWidth:new O,halfHeight:new O};break}return i[e.id]=t,t}}}function IM(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var PM=0;function LM(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function DM(i){let e=new CM,t=IM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new O);let s=new O,r=new Ge,o=new Ge;function a(c){let h=0,u=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let f=0,x=0,p=0,g=0,m=0,_=0,v=0,y=0,w=0,E=0,S=0;c.sort(LM);for(let b=0,M=c.length;b<M;b++){let I=c[b],B=I.color,k=I.intensity,V=I.distance,L=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=B.r*k,u+=B.g*k,d+=B.b*k;else if(I.isLightProbe){for(let A=0;A<9;A++)n.probe[A].addScaledVector(I.sh.coefficients[A],k);S++}else if(I.isDirectionalLight){let A=e.get(I);if(A.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let F=I.shadow,U=t.get(I);U.shadowIntensity=F.intensity,U.shadowBias=F.bias,U.shadowNormalBias=F.normalBias,U.shadowRadius=F.radius,U.shadowMapSize=F.mapSize,n.directionalShadow[f]=U,n.directionalShadowMap[f]=L,n.directionalShadowMatrix[f]=I.shadow.matrix,_++}n.directional[f]=A,f++}else if(I.isSpotLight){let A=e.get(I);A.position.setFromMatrixPosition(I.matrixWorld),A.color.copy(B).multiplyScalar(k),A.distance=V,A.coneCos=Math.cos(I.angle),A.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),A.decay=I.decay,n.spot[p]=A;let F=I.shadow;if(I.map&&(n.spotLightMap[w]=I.map,w++,F.updateMatrices(I),I.castShadow&&E++),n.spotLightMatrix[p]=F.matrix,I.castShadow){let U=t.get(I);U.shadowIntensity=F.intensity,U.shadowBias=F.bias,U.shadowNormalBias=F.normalBias,U.shadowRadius=F.radius,U.shadowMapSize=F.mapSize,n.spotShadow[p]=U,n.spotShadowMap[p]=L,y++}p++}else if(I.isRectAreaLight){let A=e.get(I);A.color.copy(B).multiplyScalar(k),A.halfWidth.set(I.width*.5,0,0),A.halfHeight.set(0,I.height*.5,0),n.rectArea[g]=A,g++}else if(I.isPointLight){let A=e.get(I);if(A.color.copy(I.color).multiplyScalar(I.intensity),A.distance=I.distance,A.decay=I.decay,I.castShadow){let F=I.shadow,U=t.get(I);U.shadowIntensity=F.intensity,U.shadowBias=F.bias,U.shadowNormalBias=F.normalBias,U.shadowRadius=F.radius,U.shadowMapSize=F.mapSize,U.shadowCameraNear=F.camera.near,U.shadowCameraFar=F.camera.far,n.pointShadow[x]=U,n.pointShadowMap[x]=L,n.pointShadowMatrix[x]=I.shadow.matrix,v++}n.point[x]=A,x++}else if(I.isHemisphereLight){let A=e.get(I);A.skyColor.copy(I.color).multiplyScalar(k),A.groundColor.copy(I.groundColor).multiplyScalar(k),n.hemi[m]=A,m++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ve.LTC_FLOAT_1,n.rectAreaLTC2=ve.LTC_FLOAT_2):(n.rectAreaLTC1=ve.LTC_HALF_1,n.rectAreaLTC2=ve.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let C=n.hash;(C.directionalLength!==f||C.pointLength!==x||C.spotLength!==p||C.rectAreaLength!==g||C.hemiLength!==m||C.numDirectionalShadows!==_||C.numPointShadows!==v||C.numSpotShadows!==y||C.numSpotMaps!==w||C.numLightProbes!==S)&&(n.directional.length=f,n.spot.length=p,n.rectArea.length=g,n.point.length=x,n.hemi.length=m,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=y+w-E,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=S,C.directionalLength=f,C.pointLength=x,C.spotLength=p,C.rectAreaLength=g,C.hemiLength=m,C.numDirectionalShadows=_,C.numPointShadows=v,C.numSpotShadows=y,C.numSpotMaps=w,C.numLightProbes=S,n.version=PM++)}function l(c,h){let u=0,d=0,f=0,x=0,p=0,g=h.matrixWorldInverse;for(let m=0,_=c.length;m<_;m++){let v=c[m];if(v.isDirectionalLight){let y=n.directional[u];y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),u++}else if(v.isSpotLight){let y=n.spot[f];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),f++}else if(v.isRectAreaLight){let y=n.rectArea[x];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),o.identity(),r.copy(v.matrixWorld),r.premultiply(g),o.extractRotation(r),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),x++}else if(v.isPointLight){let y=n.point[d];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),d++}else if(v.isHemisphereLight){let y=n.hemi[p];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(g),p++}}}return{setup:a,setupView:l,state:n}}function uf(i){let e=new DM(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function NM(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new uf(i),e.set(s,[a])):r>=o.length?(a=new uf(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var ih=class extends fn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Ag,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},sh=class extends fn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},OM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,UM=`uniform sampler2D shadow_pass;
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
}`;function zM(i,e,t){let n=new lo,s=new Re,r=new Re,o=new ct,a=new ih({depthPacking:Rg}),l=new sh,c={},h=t.maxTextureSize,u={[jn]:Qt,[Qt]:jn,[gt]:gt},d=new Pt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Re},radius:{value:4}},vertexShader:OM,fragmentShader:UM}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let x=new lt;x.setAttribute("position",new et(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let p=new ge(x,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uf;let m=this.type;this.render=function(E,S,C){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;let b=i.getRenderTarget(),M=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),B=i.state;B.setBlending(Jn),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let k=m!==gi&&this.type===gi,V=m===gi&&this.type!==gi;for(let L=0,A=E.length;L<A;L++){let F=E[L],U=F.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",F,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;s.copy(U.mapSize);let D=U.getFrameExtents();if(s.multiply(D),r.copy(U.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/D.x),s.x=r.x*D.x,U.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/D.y),s.y=r.y*D.y,U.mapSize.y=r.y)),U.map===null||k===!0||V===!0){let Q=this.type!==gi?{minFilter:en,magFilter:en}:{};U.map!==null&&U.map.dispose(),U.map=new on(s.x,s.y,Q),U.map.texture.name=F.name+".shadowMap",U.camera.updateProjectionMatrix()}i.setRenderTarget(U.map),i.clear();let H=U.getViewportCount();for(let Q=0;Q<H;Q++){let ce=U.getViewport(Q);o.set(r.x*ce.x,r.y*ce.y,r.x*ce.z,r.y*ce.w),B.viewport(o),U.updateMatrices(F,Q),n=U.getFrustum(),y(S,C,U.camera,F,this.type)}U.isPointLightShadow!==!0&&this.type===gi&&_(U,C),U.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(b,M,I)};function _(E,S){let C=e.update(p);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new on(s.x,s.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(S,null,C,d,p,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(S,null,C,f,p,null)}function v(E,S,C,b){let M=null,I=C.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(I!==void 0)M=I;else if(M=C.isPointLight===!0?l:a,i.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){let B=M.uuid,k=S.uuid,V=c[B];V===void 0&&(V={},c[B]=V);let L=V[k];L===void 0&&(L=M.clone(),V[k]=L,S.addEventListener("dispose",w)),M=L}if(M.visible=S.visible,M.wireframe=S.wireframe,b===gi?M.side=S.shadowSide!==null?S.shadowSide:S.side:M.side=S.shadowSide!==null?S.shadowSide:u[S.side],M.alphaMap=S.alphaMap,M.alphaTest=S.alphaTest,M.map=S.map,M.clipShadows=S.clipShadows,M.clippingPlanes=S.clippingPlanes,M.clipIntersection=S.clipIntersection,M.displacementMap=S.displacementMap,M.displacementScale=S.displacementScale,M.displacementBias=S.displacementBias,M.wireframeLinewidth=S.wireframeLinewidth,M.linewidth=S.linewidth,C.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let B=i.properties.get(M);B.light=C}return M}function y(E,S,C,b,M){if(E.visible===!1)return;if(E.layers.test(S.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===gi)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,E.matrixWorld);let k=e.update(E),V=E.material;if(Array.isArray(V)){let L=k.groups;for(let A=0,F=L.length;A<F;A++){let U=L[A],D=V[U.materialIndex];if(D&&D.visible){let H=v(E,D,b,M);E.onBeforeShadow(i,E,S,C,k,H,U),i.renderBufferDirect(C,null,k,H,E,U),E.onAfterShadow(i,E,S,C,k,H,U)}}}else if(V.visible){let L=v(E,V,b,M);E.onBeforeShadow(i,E,S,C,k,L,null),i.renderBufferDirect(C,null,k,L,E,null),E.onAfterShadow(i,E,S,C,k,L,null)}}let B=E.children;for(let k=0,V=B.length;k<V;k++)y(B[k],S,C,b,M)}function w(E){E.target.removeEventListener("dispose",w);for(let C in c){let b=c[C],M=E.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}var FM={[hc]:uc,[dc]:mc,[fc]:gc,[lr]:pc,[uc]:hc,[mc]:dc,[gc]:fc,[pc]:lr};function kM(i,e){function t(){let G=!1,be=new ct,ne=null,fe=new ct(0,0,0,0);return{setMask:function(Ae){ne!==Ae&&!G&&(i.colorMask(Ae,Ae,Ae,Ae),ne=Ae)},setLocked:function(Ae){G=Ae},setClear:function(Ae,Se,qe,Nt,Zt){Zt===!0&&(Ae*=Nt,Se*=Nt,qe*=Nt),be.set(Ae,Se,qe,Nt),fe.equals(be)===!1&&(i.clearColor(Ae,Se,qe,Nt),fe.copy(be))},reset:function(){G=!1,ne=null,fe.set(-1,0,0,0)}}}function n(){let G=!1,be=!1,ne=null,fe=null,Ae=null;return{setReversed:function(Se){if(be!==Se){let qe=e.get("EXT_clip_control");be?qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.ZERO_TO_ONE_EXT):qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.NEGATIVE_ONE_TO_ONE_EXT);let Nt=Ae;Ae=null,this.setClear(Nt)}be=Se},getReversed:function(){return be},setTest:function(Se){Se?Z(i.DEPTH_TEST):K(i.DEPTH_TEST)},setMask:function(Se){ne!==Se&&!G&&(i.depthMask(Se),ne=Se)},setFunc:function(Se){if(be&&(Se=FM[Se]),fe!==Se){switch(Se){case hc:i.depthFunc(i.NEVER);break;case uc:i.depthFunc(i.ALWAYS);break;case dc:i.depthFunc(i.LESS);break;case lr:i.depthFunc(i.LEQUAL);break;case fc:i.depthFunc(i.EQUAL);break;case pc:i.depthFunc(i.GEQUAL);break;case mc:i.depthFunc(i.GREATER);break;case gc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}fe=Se}},setLocked:function(Se){G=Se},setClear:function(Se){Ae!==Se&&(be&&(Se=1-Se),i.clearDepth(Se),Ae=Se)},reset:function(){G=!1,ne=null,fe=null,Ae=null,be=!1}}}function s(){let G=!1,be=null,ne=null,fe=null,Ae=null,Se=null,qe=null,Nt=null,Zt=null;return{setTest:function(xt){G||(xt?Z(i.STENCIL_TEST):K(i.STENCIL_TEST))},setMask:function(xt){be!==xt&&!G&&(i.stencilMask(xt),be=xt)},setFunc:function(xt,Nn,li){(ne!==xt||fe!==Nn||Ae!==li)&&(i.stencilFunc(xt,Nn,li),ne=xt,fe=Nn,Ae=li)},setOp:function(xt,Nn,li){(Se!==xt||qe!==Nn||Nt!==li)&&(i.stencilOp(xt,Nn,li),Se=xt,qe=Nn,Nt=li)},setLocked:function(xt){G=xt},setClear:function(xt){Zt!==xt&&(i.clearStencil(xt),Zt=xt)},reset:function(){G=!1,be=null,ne=null,fe=null,Ae=null,Se=null,qe=null,Nt=null,Zt=null}}}let r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,f=[],x=null,p=!1,g=null,m=null,_=null,v=null,y=null,w=null,E=null,S=new Te(0,0,0),C=0,b=!1,M=null,I=null,B=null,k=null,V=null,L=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),A=!1,F=0,U=i.getParameter(i.VERSION);U.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(U)[1]),A=F>=1):U.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),A=F>=2);let D=null,H={},Q=i.getParameter(i.SCISSOR_BOX),ce=i.getParameter(i.VIEWPORT),pe=new ct().fromArray(Q),Y=new ct().fromArray(ce);function oe(G,be,ne,fe){let Ae=new Uint8Array(4),Se=i.createTexture();i.bindTexture(G,Se),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let qe=0;qe<ne;qe++)G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?i.texImage3D(be,0,i.RGBA,1,1,fe,0,i.RGBA,i.UNSIGNED_BYTE,Ae):i.texImage2D(be+qe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ae);return Se}let ie={};ie[i.TEXTURE_2D]=oe(i.TEXTURE_2D,i.TEXTURE_2D,1),ie[i.TEXTURE_CUBE_MAP]=oe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[i.TEXTURE_2D_ARRAY]=oe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ie[i.TEXTURE_3D]=oe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Z(i.DEPTH_TEST),o.setFunc(lr),te(!1),Me(md),Z(i.CULL_FACE),T(Jn);function Z(G){h[G]!==!0&&(i.enable(G),h[G]=!0)}function K(G){h[G]!==!1&&(i.disable(G),h[G]=!1)}function $(G,be){return u[G]!==be?(i.bindFramebuffer(G,be),u[G]=be,G===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=be),G===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=be),!0):!1}function ee(G,be){let ne=f,fe=!1;if(G){ne=d.get(be),ne===void 0&&(ne=[],d.set(be,ne));let Ae=G.textures;if(ne.length!==Ae.length||ne[0]!==i.COLOR_ATTACHMENT0){for(let Se=0,qe=Ae.length;Se<qe;Se++)ne[Se]=i.COLOR_ATTACHMENT0+Se;ne.length=Ae.length,fe=!0}}else ne[0]!==i.BACK&&(ne[0]=i.BACK,fe=!0);fe&&i.drawBuffers(ne)}function re(G){return x!==G?(i.useProgram(G),x=G,!0):!1}let se={[xs]:i.FUNC_ADD,[sg]:i.FUNC_SUBTRACT,[rg]:i.FUNC_REVERSE_SUBTRACT};se[og]=i.MIN,se[ag]=i.MAX;let _e={[lg]:i.ZERO,[cg]:i.ONE,[hg]:i.SRC_COLOR,[lc]:i.SRC_ALPHA,[gg]:i.SRC_ALPHA_SATURATE,[pg]:i.DST_COLOR,[dg]:i.DST_ALPHA,[ug]:i.ONE_MINUS_SRC_COLOR,[cc]:i.ONE_MINUS_SRC_ALPHA,[mg]:i.ONE_MINUS_DST_COLOR,[fg]:i.ONE_MINUS_DST_ALPHA,[xg]:i.CONSTANT_COLOR,[_g]:i.ONE_MINUS_CONSTANT_COLOR,[yg]:i.CONSTANT_ALPHA,[vg]:i.ONE_MINUS_CONSTANT_ALPHA};function T(G,be,ne,fe,Ae,Se,qe,Nt,Zt,xt){if(G===Jn){p===!0&&(K(i.BLEND),p=!1);return}if(p===!1&&(Z(i.BLEND),p=!0),G!==ig){if(G!==g||xt!==b){if((m!==xs||y!==xs)&&(i.blendEquation(i.FUNC_ADD),m=xs,y=xs),xt)switch(G){case sr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ht:i.blendFunc(i.ONE,i.ONE);break;case gd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case xd:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case sr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ht:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case gd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case xd:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}_=null,v=null,w=null,E=null,S.set(0,0,0),C=0,g=G,b=xt}return}Ae=Ae||be,Se=Se||ne,qe=qe||fe,(be!==m||Ae!==y)&&(i.blendEquationSeparate(se[be],se[Ae]),m=be,y=Ae),(ne!==_||fe!==v||Se!==w||qe!==E)&&(i.blendFuncSeparate(_e[ne],_e[fe],_e[Se],_e[qe]),_=ne,v=fe,w=Se,E=qe),(Nt.equals(S)===!1||Zt!==C)&&(i.blendColor(Nt.r,Nt.g,Nt.b,Zt),S.copy(Nt),C=Zt),g=G,b=!1}function ye(G,be){G.side===gt?K(i.CULL_FACE):Z(i.CULL_FACE);let ne=G.side===Qt;be&&(ne=!ne),te(ne),G.blending===sr&&G.transparent===!1?T(Jn):T(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),r.setMask(G.colorWrite);let fe=G.stencilWrite;a.setTest(fe),fe&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Ce(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?Z(i.SAMPLE_ALPHA_TO_COVERAGE):K(i.SAMPLE_ALPHA_TO_COVERAGE)}function te(G){M!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),M=G)}function Me(G){G!==tg?(Z(i.CULL_FACE),G!==I&&(G===md?i.cullFace(i.BACK):G===ng?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):K(i.CULL_FACE),I=G}function he(G){G!==B&&(A&&i.lineWidth(G),B=G)}function Ce(G,be,ne){G?(Z(i.POLYGON_OFFSET_FILL),(k!==be||V!==ne)&&(i.polygonOffset(be,ne),k=be,V=ne)):K(i.POLYGON_OFFSET_FILL)}function Ne(G){G?Z(i.SCISSOR_TEST):K(i.SCISSOR_TEST)}function N(G){G===void 0&&(G=i.TEXTURE0+L-1),D!==G&&(i.activeTexture(G),D=G)}function R(G,be,ne){ne===void 0&&(D===null?ne=i.TEXTURE0+L-1:ne=D);let fe=H[ne];fe===void 0&&(fe={type:void 0,texture:void 0},H[ne]=fe),(fe.type!==G||fe.texture!==be)&&(D!==ne&&(i.activeTexture(ne),D=ne),i.bindTexture(G,be||ie[G]),fe.type=G,fe.texture=be)}function q(){let G=H[D];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function le(){try{i.compressedTexImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function de(){try{i.compressedTexImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ae(){try{i.texSubImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Fe(){try{i.texSubImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ee(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ie(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function rt(){try{i.texStorage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function me(){try{i.texStorage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Pe(){try{i.texImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function He(){try{i.texImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ve(G){pe.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),pe.copy(G))}function Le(G){Y.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),Y.copy(G))}function st(G,be){let ne=c.get(be);ne===void 0&&(ne=new WeakMap,c.set(be,ne));let fe=ne.get(G);fe===void 0&&(fe=i.getUniformBlockIndex(be,G.name),ne.set(G,fe))}function Je(G,be){let fe=c.get(be).get(G);l.get(be)!==fe&&(i.uniformBlockBinding(be,fe,G.__bindingPointIndex),l.set(be,fe))}function Et(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},D=null,H={},u={},d=new WeakMap,f=[],x=null,p=!1,g=null,m=null,_=null,v=null,y=null,w=null,E=null,S=new Te(0,0,0),C=0,b=!1,M=null,I=null,B=null,k=null,V=null,pe.set(0,0,i.canvas.width,i.canvas.height),Y.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Z,disable:K,bindFramebuffer:$,drawBuffers:ee,useProgram:re,setBlending:T,setMaterial:ye,setFlipSided:te,setCullFace:Me,setLineWidth:he,setPolygonOffset:Ce,setScissorTest:Ne,activeTexture:N,bindTexture:R,unbindTexture:q,compressedTexImage2D:le,compressedTexImage3D:de,texImage2D:Pe,texImage3D:He,updateUBOMapping:st,uniformBlockBinding:Je,texStorage2D:rt,texStorage3D:me,texSubImage2D:ae,texSubImage3D:Fe,compressedTexSubImage2D:Ee,compressedTexSubImage3D:Ie,scissor:Ve,viewport:Le,reset:Et}}function df(i,e,t,n){let s=BM(n);switch(t){case Vf:return i*e;case Wf:return i*e;case Xf:return i*e*2;case Dh:return i*e/s.components*s.byteLength;case Nh:return i*e/s.components*s.byteLength;case Yf:return i*e*2/s.components*s.byteLength;case Oh:return i*e*2/s.components*s.byteLength;case Gf:return i*e*3/s.components*s.byteLength;case Tn:return i*e*4/s.components*s.byteLength;case Uh:return i*e*4/s.components*s.byteLength;case la:case ca:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ha:case ua:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case vc:case bc:return Math.max(i,16)*Math.max(e,8)/4;case yc:case Mc:return Math.max(i,8)*Math.max(e,8)/2;case Ec:case Sc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case wc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Tc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ac:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Rc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Cc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ic:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Pc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Lc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Dc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Nc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Oc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Uc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case zc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Fc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case kc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case da:case Bc:case Hc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case qf:case Vc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Gc:case Wc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function BM(i){switch(i){case vi:case kf:return{byteLength:1,components:1};case ro:case Bf:case Gn:return{byteLength:2,components:1};case Ph:case Lh:return{byteLength:2,components:4};case ys:case Ih:case Hn:return{byteLength:4,components:1};case Hf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function HM(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Re,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(N,R){return f?new OffscreenCanvas(N,R):oo("canvas")}function p(N,R,q){let le=1,de=Ne(N);if((de.width>q||de.height>q)&&(le=q/Math.max(de.width,de.height)),le<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){let ae=Math.floor(le*de.width),Fe=Math.floor(le*de.height);u===void 0&&(u=x(ae,Fe));let Ee=R?x(ae,Fe):u;return Ee.width=ae,Ee.height=Fe,Ee.getContext("2d").drawImage(N,0,0,ae,Fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+de.width+"x"+de.height+") to ("+ae+"x"+Fe+")."),Ee}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+de.width+"x"+de.height+")."),N;return N}function g(N){return N.generateMipmaps}function m(N){i.generateMipmap(N)}function _(N){return N.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?i.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(N,R,q,le,de=!1){if(N!==null){if(i[N]!==void 0)return i[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ae=R;if(R===i.RED&&(q===i.FLOAT&&(ae=i.R32F),q===i.HALF_FLOAT&&(ae=i.R16F),q===i.UNSIGNED_BYTE&&(ae=i.R8)),R===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(ae=i.R8UI),q===i.UNSIGNED_SHORT&&(ae=i.R16UI),q===i.UNSIGNED_INT&&(ae=i.R32UI),q===i.BYTE&&(ae=i.R8I),q===i.SHORT&&(ae=i.R16I),q===i.INT&&(ae=i.R32I)),R===i.RG&&(q===i.FLOAT&&(ae=i.RG32F),q===i.HALF_FLOAT&&(ae=i.RG16F),q===i.UNSIGNED_BYTE&&(ae=i.RG8)),R===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(ae=i.RG8UI),q===i.UNSIGNED_SHORT&&(ae=i.RG16UI),q===i.UNSIGNED_INT&&(ae=i.RG32UI),q===i.BYTE&&(ae=i.RG8I),q===i.SHORT&&(ae=i.RG16I),q===i.INT&&(ae=i.RG32I)),R===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(ae=i.RGB8UI),q===i.UNSIGNED_SHORT&&(ae=i.RGB16UI),q===i.UNSIGNED_INT&&(ae=i.RGB32UI),q===i.BYTE&&(ae=i.RGB8I),q===i.SHORT&&(ae=i.RGB16I),q===i.INT&&(ae=i.RGB32I)),R===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(ae=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(ae=i.RGBA16UI),q===i.UNSIGNED_INT&&(ae=i.RGBA32UI),q===i.BYTE&&(ae=i.RGBA8I),q===i.SHORT&&(ae=i.RGBA16I),q===i.INT&&(ae=i.RGBA32I)),R===i.RGB&&q===i.UNSIGNED_INT_5_9_9_9_REV&&(ae=i.RGB9_E5),R===i.RGBA){let Fe=de?Wa:Qe.getTransfer(le);q===i.FLOAT&&(ae=i.RGBA32F),q===i.HALF_FLOAT&&(ae=i.RGBA16F),q===i.UNSIGNED_BYTE&&(ae=Fe===pt?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT_4_4_4_4&&(ae=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(ae=i.RGB5_A1)}return(ae===i.R16F||ae===i.R32F||ae===i.RG16F||ae===i.RG32F||ae===i.RGBA16F||ae===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function y(N,R){let q;return N?R===null||R===ys||R===ur?q=i.DEPTH24_STENCIL8:R===Hn?q=i.DEPTH32F_STENCIL8:R===ro&&(q=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===ys||R===ur?q=i.DEPTH_COMPONENT24:R===Hn?q=i.DEPTH_COMPONENT32F:R===ro&&(q=i.DEPTH_COMPONENT16),q}function w(N,R){return g(N)===!0||N.isFramebufferTexture&&N.minFilter!==en&&N.minFilter!==un?Math.log2(Math.max(R.width,R.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?R.mipmaps.length:1}function E(N){let R=N.target;R.removeEventListener("dispose",E),C(R),R.isVideoTexture&&h.delete(R)}function S(N){let R=N.target;R.removeEventListener("dispose",S),M(R)}function C(N){let R=n.get(N);if(R.__webglInit===void 0)return;let q=N.source,le=d.get(q);if(le){let de=le[R.__cacheKey];de.usedTimes--,de.usedTimes===0&&b(N),Object.keys(le).length===0&&d.delete(q)}n.remove(N)}function b(N){let R=n.get(N);i.deleteTexture(R.__webglTexture);let q=N.source,le=d.get(q);delete le[R.__cacheKey],o.memory.textures--}function M(N){let R=n.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),n.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let le=0;le<6;le++){if(Array.isArray(R.__webglFramebuffer[le]))for(let de=0;de<R.__webglFramebuffer[le].length;de++)i.deleteFramebuffer(R.__webglFramebuffer[le][de]);else i.deleteFramebuffer(R.__webglFramebuffer[le]);R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer[le])}else{if(Array.isArray(R.__webglFramebuffer))for(let le=0;le<R.__webglFramebuffer.length;le++)i.deleteFramebuffer(R.__webglFramebuffer[le]);else i.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&i.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let le=0;le<R.__webglColorRenderbuffer.length;le++)R.__webglColorRenderbuffer[le]&&i.deleteRenderbuffer(R.__webglColorRenderbuffer[le]);R.__webglDepthRenderbuffer&&i.deleteRenderbuffer(R.__webglDepthRenderbuffer)}let q=N.textures;for(let le=0,de=q.length;le<de;le++){let ae=n.get(q[le]);ae.__webglTexture&&(i.deleteTexture(ae.__webglTexture),o.memory.textures--),n.remove(q[le])}n.remove(N)}let I=0;function B(){I=0}function k(){let N=I;return N>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+s.maxTextures),I+=1,N}function V(N){let R=[];return R.push(N.wrapS),R.push(N.wrapT),R.push(N.wrapR||0),R.push(N.magFilter),R.push(N.minFilter),R.push(N.anisotropy),R.push(N.internalFormat),R.push(N.format),R.push(N.type),R.push(N.generateMipmaps),R.push(N.premultiplyAlpha),R.push(N.flipY),R.push(N.unpackAlignment),R.push(N.colorSpace),R.join()}function L(N,R){let q=n.get(N);if(N.isVideoTexture&&he(N),N.isRenderTargetTexture===!1&&N.version>0&&q.__version!==N.version){let le=N.image;if(le===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(q,N,R);return}}t.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+R)}function A(N,R){let q=n.get(N);if(N.version>0&&q.__version!==N.version){Y(q,N,R);return}t.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+R)}function F(N,R){let q=n.get(N);if(N.version>0&&q.__version!==N.version){Y(q,N,R);return}t.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+R)}function U(N,R){let q=n.get(N);if(N.version>0&&q.__version!==N.version){oe(q,N,R);return}t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+R)}let D={[dn]:i.REPEAT,[xi]:i.CLAMP_TO_EDGE,[so]:i.MIRRORED_REPEAT},H={[en]:i.NEAREST,[Ch]:i.NEAREST_MIPMAP_NEAREST,[er]:i.NEAREST_MIPMAP_LINEAR,[un]:i.LINEAR,[eo]:i.LINEAR_MIPMAP_NEAREST,[wn]:i.LINEAR_MIPMAP_LINEAR},Q={[Ig]:i.NEVER,[Ug]:i.ALWAYS,[Pg]:i.LESS,[$f]:i.LEQUAL,[Lg]:i.EQUAL,[Og]:i.GEQUAL,[Dg]:i.GREATER,[Ng]:i.NOTEQUAL};function ce(N,R){if(R.type===Hn&&e.has("OES_texture_float_linear")===!1&&(R.magFilter===un||R.magFilter===eo||R.magFilter===er||R.magFilter===wn||R.minFilter===un||R.minFilter===eo||R.minFilter===er||R.minFilter===wn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(N,i.TEXTURE_WRAP_S,D[R.wrapS]),i.texParameteri(N,i.TEXTURE_WRAP_T,D[R.wrapT]),(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)&&i.texParameteri(N,i.TEXTURE_WRAP_R,D[R.wrapR]),i.texParameteri(N,i.TEXTURE_MAG_FILTER,H[R.magFilter]),i.texParameteri(N,i.TEXTURE_MIN_FILTER,H[R.minFilter]),R.compareFunction&&(i.texParameteri(N,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(N,i.TEXTURE_COMPARE_FUNC,Q[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===en||R.minFilter!==er&&R.minFilter!==wn||R.type===Hn&&e.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||n.get(R).__currentAnisotropy){let q=e.get("EXT_texture_filter_anisotropic");i.texParameterf(N,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,s.getMaxAnisotropy())),n.get(R).__currentAnisotropy=R.anisotropy}}}function pe(N,R){let q=!1;N.__webglInit===void 0&&(N.__webglInit=!0,R.addEventListener("dispose",E));let le=R.source,de=d.get(le);de===void 0&&(de={},d.set(le,de));let ae=V(R);if(ae!==N.__cacheKey){de[ae]===void 0&&(de[ae]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,q=!0),de[ae].usedTimes++;let Fe=de[N.__cacheKey];Fe!==void 0&&(de[N.__cacheKey].usedTimes--,Fe.usedTimes===0&&b(R)),N.__cacheKey=ae,N.__webglTexture=de[ae].texture}return q}function Y(N,R,q){let le=i.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(le=i.TEXTURE_2D_ARRAY),R.isData3DTexture&&(le=i.TEXTURE_3D);let de=pe(N,R),ae=R.source;t.bindTexture(le,N.__webglTexture,i.TEXTURE0+q);let Fe=n.get(ae);if(ae.version!==Fe.__version||de===!0){t.activeTexture(i.TEXTURE0+q);let Ee=Qe.getPrimaries(Qe.workingColorSpace),Ie=R.colorSpace===Ui?null:Qe.getPrimaries(R.colorSpace),rt=R.colorSpace===Ui||Ee===Ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);let me=p(R.image,!1,s.maxTextureSize);me=Ce(R,me);let Pe=r.convert(R.format,R.colorSpace),He=r.convert(R.type),Ve=v(R.internalFormat,Pe,He,R.colorSpace,R.isVideoTexture);ce(le,R);let Le,st=R.mipmaps,Je=R.isVideoTexture!==!0,Et=Fe.__version===void 0||de===!0,G=ae.dataReady,be=w(R,me);if(R.isDepthTexture)Ve=y(R.format===dr,R.type),Et&&(Je?t.texStorage2D(i.TEXTURE_2D,1,Ve,me.width,me.height):t.texImage2D(i.TEXTURE_2D,0,Ve,me.width,me.height,0,Pe,He,null));else if(R.isDataTexture)if(st.length>0){Je&&Et&&t.texStorage2D(i.TEXTURE_2D,be,Ve,st[0].width,st[0].height);for(let ne=0,fe=st.length;ne<fe;ne++)Le=st[ne],Je?G&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,Le.width,Le.height,Pe,He,Le.data):t.texImage2D(i.TEXTURE_2D,ne,Ve,Le.width,Le.height,0,Pe,He,Le.data);R.generateMipmaps=!1}else Je?(Et&&t.texStorage2D(i.TEXTURE_2D,be,Ve,me.width,me.height),G&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,me.width,me.height,Pe,He,me.data)):t.texImage2D(i.TEXTURE_2D,0,Ve,me.width,me.height,0,Pe,He,me.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){Je&&Et&&t.texStorage3D(i.TEXTURE_2D_ARRAY,be,Ve,st[0].width,st[0].height,me.depth);for(let ne=0,fe=st.length;ne<fe;ne++)if(Le=st[ne],R.format!==Tn)if(Pe!==null)if(Je){if(G)if(R.layerUpdates.size>0){let Ae=df(Le.width,Le.height,R.format,R.type);for(let Se of R.layerUpdates){let qe=Le.data.subarray(Se*Ae/Le.data.BYTES_PER_ELEMENT,(Se+1)*Ae/Le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,Se,Le.width,Le.height,1,Pe,qe)}R.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,Le.width,Le.height,me.depth,Pe,Le.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ne,Ve,Le.width,Le.height,me.depth,0,Le.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Je?G&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,Le.width,Le.height,me.depth,Pe,He,Le.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ne,Ve,Le.width,Le.height,me.depth,0,Pe,He,Le.data)}else{Je&&Et&&t.texStorage2D(i.TEXTURE_2D,be,Ve,st[0].width,st[0].height);for(let ne=0,fe=st.length;ne<fe;ne++)Le=st[ne],R.format!==Tn?Pe!==null?Je?G&&t.compressedTexSubImage2D(i.TEXTURE_2D,ne,0,0,Le.width,Le.height,Pe,Le.data):t.compressedTexImage2D(i.TEXTURE_2D,ne,Ve,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?G&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,Le.width,Le.height,Pe,He,Le.data):t.texImage2D(i.TEXTURE_2D,ne,Ve,Le.width,Le.height,0,Pe,He,Le.data)}else if(R.isDataArrayTexture)if(Je){if(Et&&t.texStorage3D(i.TEXTURE_2D_ARRAY,be,Ve,me.width,me.height,me.depth),G)if(R.layerUpdates.size>0){let ne=df(me.width,me.height,R.format,R.type);for(let fe of R.layerUpdates){let Ae=me.data.subarray(fe*ne/me.data.BYTES_PER_ELEMENT,(fe+1)*ne/me.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,fe,me.width,me.height,1,Pe,He,Ae)}R.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,Pe,He,me.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ve,me.width,me.height,me.depth,0,Pe,He,me.data);else if(R.isData3DTexture)Je?(Et&&t.texStorage3D(i.TEXTURE_3D,be,Ve,me.width,me.height,me.depth),G&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,Pe,He,me.data)):t.texImage3D(i.TEXTURE_3D,0,Ve,me.width,me.height,me.depth,0,Pe,He,me.data);else if(R.isFramebufferTexture){if(Et)if(Je)t.texStorage2D(i.TEXTURE_2D,be,Ve,me.width,me.height);else{let ne=me.width,fe=me.height;for(let Ae=0;Ae<be;Ae++)t.texImage2D(i.TEXTURE_2D,Ae,Ve,ne,fe,0,Pe,He,null),ne>>=1,fe>>=1}}else if(st.length>0){if(Je&&Et){let ne=Ne(st[0]);t.texStorage2D(i.TEXTURE_2D,be,Ve,ne.width,ne.height)}for(let ne=0,fe=st.length;ne<fe;ne++)Le=st[ne],Je?G&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,Pe,He,Le):t.texImage2D(i.TEXTURE_2D,ne,Ve,Pe,He,Le);R.generateMipmaps=!1}else if(Je){if(Et){let ne=Ne(me);t.texStorage2D(i.TEXTURE_2D,be,Ve,ne.width,ne.height)}G&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Pe,He,me)}else t.texImage2D(i.TEXTURE_2D,0,Ve,Pe,He,me);g(R)&&m(le),Fe.__version=ae.version,R.onUpdate&&R.onUpdate(R)}N.__version=R.version}function oe(N,R,q){if(R.image.length!==6)return;let le=pe(N,R),de=R.source;t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+q);let ae=n.get(de);if(de.version!==ae.__version||le===!0){t.activeTexture(i.TEXTURE0+q);let Fe=Qe.getPrimaries(Qe.workingColorSpace),Ee=R.colorSpace===Ui?null:Qe.getPrimaries(R.colorSpace),Ie=R.colorSpace===Ui||Fe===Ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let rt=R.isCompressedTexture||R.image[0].isCompressedTexture,me=R.image[0]&&R.image[0].isDataTexture,Pe=[];for(let fe=0;fe<6;fe++)!rt&&!me?Pe[fe]=p(R.image[fe],!0,s.maxCubemapSize):Pe[fe]=me?R.image[fe].image:R.image[fe],Pe[fe]=Ce(R,Pe[fe]);let He=Pe[0],Ve=r.convert(R.format,R.colorSpace),Le=r.convert(R.type),st=v(R.internalFormat,Ve,Le,R.colorSpace),Je=R.isVideoTexture!==!0,Et=ae.__version===void 0||le===!0,G=de.dataReady,be=w(R,He);ce(i.TEXTURE_CUBE_MAP,R);let ne;if(rt){Je&&Et&&t.texStorage2D(i.TEXTURE_CUBE_MAP,be,st,He.width,He.height);for(let fe=0;fe<6;fe++){ne=Pe[fe].mipmaps;for(let Ae=0;Ae<ne.length;Ae++){let Se=ne[Ae];R.format!==Tn?Ve!==null?Je?G&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ae,0,0,Se.width,Se.height,Ve,Se.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ae,st,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Je?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ae,0,0,Se.width,Se.height,Ve,Le,Se.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ae,st,Se.width,Se.height,0,Ve,Le,Se.data)}}}else{if(ne=R.mipmaps,Je&&Et){ne.length>0&&be++;let fe=Ne(Pe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,be,st,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(me){Je?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Pe[fe].width,Pe[fe].height,Ve,Le,Pe[fe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,st,Pe[fe].width,Pe[fe].height,0,Ve,Le,Pe[fe].data);for(let Ae=0;Ae<ne.length;Ae++){let qe=ne[Ae].image[fe].image;Je?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ae+1,0,0,qe.width,qe.height,Ve,Le,qe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ae+1,st,qe.width,qe.height,0,Ve,Le,qe.data)}}else{Je?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Ve,Le,Pe[fe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,st,Ve,Le,Pe[fe]);for(let Ae=0;Ae<ne.length;Ae++){let Se=ne[Ae];Je?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ae+1,0,0,Ve,Le,Se.image[fe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ae+1,st,Ve,Le,Se.image[fe])}}}g(R)&&m(i.TEXTURE_CUBE_MAP),ae.__version=de.version,R.onUpdate&&R.onUpdate(R)}N.__version=R.version}function ie(N,R,q,le,de,ae){let Fe=r.convert(q.format,q.colorSpace),Ee=r.convert(q.type),Ie=v(q.internalFormat,Fe,Ee,q.colorSpace),rt=n.get(R),me=n.get(q);if(me.__renderTarget=R,!rt.__hasExternalTextures){let Pe=Math.max(1,R.width>>ae),He=Math.max(1,R.height>>ae);de===i.TEXTURE_3D||de===i.TEXTURE_2D_ARRAY?t.texImage3D(de,ae,Ie,Pe,He,R.depth,0,Fe,Ee,null):t.texImage2D(de,ae,Ie,Pe,He,0,Fe,Ee,null)}t.bindFramebuffer(i.FRAMEBUFFER,N),Me(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,le,de,me.__webglTexture,0,te(R)):(de===i.TEXTURE_2D||de>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,le,de,me.__webglTexture,ae),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Z(N,R,q){if(i.bindRenderbuffer(i.RENDERBUFFER,N),R.depthBuffer){let le=R.depthTexture,de=le&&le.isDepthTexture?le.type:null,ae=y(R.stencilBuffer,de),Fe=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ee=te(R);Me(R)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ee,ae,R.width,R.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ee,ae,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,ae,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Fe,i.RENDERBUFFER,N)}else{let le=R.textures;for(let de=0;de<le.length;de++){let ae=le[de],Fe=r.convert(ae.format,ae.colorSpace),Ee=r.convert(ae.type),Ie=v(ae.internalFormat,Fe,Ee,ae.colorSpace),rt=te(R);q&&Me(R)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,rt,Ie,R.width,R.height):Me(R)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,rt,Ie,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,Ie,R.width,R.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function K(N,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,N),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let le=n.get(R.depthTexture);le.__renderTarget=R,(!le.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),L(R.depthTexture,0);let de=le.__webglTexture,ae=te(R);if(R.depthTexture.format===rr)Me(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,de,0,ae):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,de,0);else if(R.depthTexture.format===dr)Me(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,de,0,ae):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,de,0);else throw new Error("Unknown depthTexture format")}function $(N){let R=n.get(N),q=N.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==N.depthTexture){let le=N.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),le){let de=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,le.removeEventListener("dispose",de)};le.addEventListener("dispose",de),R.__depthDisposeCallback=de}R.__boundDepthTexture=le}if(N.depthTexture&&!R.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");K(R.__webglFramebuffer,N)}else if(q){R.__webglDepthbuffer=[];for(let le=0;le<6;le++)if(t.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer[le]),R.__webglDepthbuffer[le]===void 0)R.__webglDepthbuffer[le]=i.createRenderbuffer(),Z(R.__webglDepthbuffer[le],N,!1);else{let de=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=R.__webglDepthbuffer[le];i.bindRenderbuffer(i.RENDERBUFFER,ae),i.framebufferRenderbuffer(i.FRAMEBUFFER,de,i.RENDERBUFFER,ae)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=i.createRenderbuffer(),Z(R.__webglDepthbuffer,N,!1);else{let le=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=R.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,de),i.framebufferRenderbuffer(i.FRAMEBUFFER,le,i.RENDERBUFFER,de)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ee(N,R,q){let le=n.get(N);R!==void 0&&ie(le.__webglFramebuffer,N,N.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&$(N)}function re(N){let R=N.texture,q=n.get(N),le=n.get(R);N.addEventListener("dispose",S);let de=N.textures,ae=N.isWebGLCubeRenderTarget===!0,Fe=de.length>1;if(Fe||(le.__webglTexture===void 0&&(le.__webglTexture=i.createTexture()),le.__version=R.version,o.memory.textures++),ae){q.__webglFramebuffer=[];for(let Ee=0;Ee<6;Ee++)if(R.mipmaps&&R.mipmaps.length>0){q.__webglFramebuffer[Ee]=[];for(let Ie=0;Ie<R.mipmaps.length;Ie++)q.__webglFramebuffer[Ee][Ie]=i.createFramebuffer()}else q.__webglFramebuffer[Ee]=i.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){q.__webglFramebuffer=[];for(let Ee=0;Ee<R.mipmaps.length;Ee++)q.__webglFramebuffer[Ee]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(Fe)for(let Ee=0,Ie=de.length;Ee<Ie;Ee++){let rt=n.get(de[Ee]);rt.__webglTexture===void 0&&(rt.__webglTexture=i.createTexture(),o.memory.textures++)}if(N.samples>0&&Me(N)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let Ee=0;Ee<de.length;Ee++){let Ie=de[Ee];q.__webglColorRenderbuffer[Ee]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[Ee]);let rt=r.convert(Ie.format,Ie.colorSpace),me=r.convert(Ie.type),Pe=v(Ie.internalFormat,rt,me,Ie.colorSpace,N.isXRRenderTarget===!0),He=te(N);i.renderbufferStorageMultisample(i.RENDERBUFFER,He,Pe,N.width,N.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,q.__webglColorRenderbuffer[Ee])}i.bindRenderbuffer(i.RENDERBUFFER,null),N.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),Z(q.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ae){t.bindTexture(i.TEXTURE_CUBE_MAP,le.__webglTexture),ce(i.TEXTURE_CUBE_MAP,R);for(let Ee=0;Ee<6;Ee++)if(R.mipmaps&&R.mipmaps.length>0)for(let Ie=0;Ie<R.mipmaps.length;Ie++)ie(q.__webglFramebuffer[Ee][Ie],N,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ie);else ie(q.__webglFramebuffer[Ee],N,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0);g(R)&&m(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Fe){for(let Ee=0,Ie=de.length;Ee<Ie;Ee++){let rt=de[Ee],me=n.get(rt);t.bindTexture(i.TEXTURE_2D,me.__webglTexture),ce(i.TEXTURE_2D,rt),ie(q.__webglFramebuffer,N,rt,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,0),g(rt)&&m(i.TEXTURE_2D)}t.unbindTexture()}else{let Ee=i.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Ee=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ee,le.__webglTexture),ce(Ee,R),R.mipmaps&&R.mipmaps.length>0)for(let Ie=0;Ie<R.mipmaps.length;Ie++)ie(q.__webglFramebuffer[Ie],N,R,i.COLOR_ATTACHMENT0,Ee,Ie);else ie(q.__webglFramebuffer,N,R,i.COLOR_ATTACHMENT0,Ee,0);g(R)&&m(Ee),t.unbindTexture()}N.depthBuffer&&$(N)}function se(N){let R=N.textures;for(let q=0,le=R.length;q<le;q++){let de=R[q];if(g(de)){let ae=_(N),Fe=n.get(de).__webglTexture;t.bindTexture(ae,Fe),m(ae),t.unbindTexture()}}}let _e=[],T=[];function ye(N){if(N.samples>0){if(Me(N)===!1){let R=N.textures,q=N.width,le=N.height,de=i.COLOR_BUFFER_BIT,ae=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Fe=n.get(N),Ee=R.length>1;if(Ee)for(let Ie=0;Ie<R.length;Ie++)t.bindFramebuffer(i.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer);for(let Ie=0;Ie<R.length;Ie++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(de|=i.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(de|=i.STENCIL_BUFFER_BIT)),Ee){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Fe.__webglColorRenderbuffer[Ie]);let rt=n.get(R[Ie]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,rt,0)}i.blitFramebuffer(0,0,q,le,0,0,q,le,de,i.NEAREST),l===!0&&(_e.length=0,T.length=0,_e.push(i.COLOR_ATTACHMENT0+Ie),N.depthBuffer&&N.resolveDepthBuffer===!1&&(_e.push(ae),T.push(ae),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,T)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,_e))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ee)for(let Ie=0;Ie<R.length;Ie++){t.bindFramebuffer(i.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,Fe.__webglColorRenderbuffer[Ie]);let rt=n.get(R[Ie]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,rt,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&l){let R=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[R])}}}function te(N){return Math.min(s.maxSamples,N.samples)}function Me(N){let R=n.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function he(N){let R=o.render.frame;h.get(N)!==R&&(h.set(N,R),N.update())}function Ce(N,R){let q=N.colorSpace,le=N.format,de=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||q!==nn&&q!==Ui&&(Qe.getTransfer(q)===pt?(le!==Tn||de!==vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),R}function Ne(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=B,this.setTexture2D=L,this.setTexture2DArray=A,this.setTexture3D=F,this.setTextureCube=U,this.rebindTextures=ee,this.setupRenderTarget=re,this.updateRenderTargetMipmap=se,this.updateMultisampleRenderTarget=ye,this.setupDepthRenderbuffer=$,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=Me}function VM(i,e){function t(n,s=Ui){let r,o=Qe.getTransfer(s);if(n===vi)return i.UNSIGNED_BYTE;if(n===Ph)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Lh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Hf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===kf)return i.BYTE;if(n===Bf)return i.SHORT;if(n===ro)return i.UNSIGNED_SHORT;if(n===Ih)return i.INT;if(n===ys)return i.UNSIGNED_INT;if(n===Hn)return i.FLOAT;if(n===Gn)return i.HALF_FLOAT;if(n===Vf)return i.ALPHA;if(n===Gf)return i.RGB;if(n===Tn)return i.RGBA;if(n===Wf)return i.LUMINANCE;if(n===Xf)return i.LUMINANCE_ALPHA;if(n===rr)return i.DEPTH_COMPONENT;if(n===dr)return i.DEPTH_STENCIL;if(n===Dh)return i.RED;if(n===Nh)return i.RED_INTEGER;if(n===Yf)return i.RG;if(n===Oh)return i.RG_INTEGER;if(n===Uh)return i.RGBA_INTEGER;if(n===la||n===ca||n===ha||n===ua)if(o===pt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===la)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ha)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===la)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ca)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ha)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ua)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===yc||n===vc||n===Mc||n===bc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===yc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===vc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Mc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===bc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ec||n===Sc||n===wc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ec||n===Sc)return o===pt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===wc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Tc||n===Ac||n===Rc||n===Cc||n===Ic||n===Pc||n===Lc||n===Dc||n===Nc||n===Oc||n===Uc||n===zc||n===Fc||n===kc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Tc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ac)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Rc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Cc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ic)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Pc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Lc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Dc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Nc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Oc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Uc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===zc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Fc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===kc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===da||n===Bc||n===Hc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===da)return o===pt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Bc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Hc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===qf||n===Vc||n===Gc||n===Wc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===da)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Vc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Gc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Wc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ur?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var rh=class extends Bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Be=class extends Ct{constructor(){super(),this.isGroup=!0,this.type="Group"}},GM={type:"move"},io=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Be,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Be,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Be,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let p of e.hand.values()){let g=t.getJointPose(p,n),m=this._getHandJoint(c,p);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,x=.005;c.inputState.pinching&&d>f+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(GM)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Be;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},WM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,XM=`
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

}`,oh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new Wt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Pt({vertexShader:WM,fragmentShader:XM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ge(new An(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ah=class extends Mi{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,x=null,p=new oh,g=t.getContextAttributes(),m=null,_=null,v=[],y=[],w=new Re,E=null,S=new Bt;S.viewport=new ct;let C=new Bt;C.viewport=new ct;let b=[S,C],M=new rh,I=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let oe=v[Y];return oe===void 0&&(oe=new io,v[Y]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(Y){let oe=v[Y];return oe===void 0&&(oe=new io,v[Y]=oe),oe.getGripSpace()},this.getHand=function(Y){let oe=v[Y];return oe===void 0&&(oe=new io,v[Y]=oe),oe.getHandSpace()};function k(Y){let oe=y.indexOf(Y.inputSource);if(oe===-1)return;let ie=v[oe];ie!==void 0&&(ie.update(Y.inputSource,Y.frame,c||o),ie.dispatchEvent({type:Y.type,data:Y.inputSource}))}function V(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",L);for(let Y=0;Y<v.length;Y++){let oe=y[Y];oe!==null&&(y[Y]=null,v[Y].disconnect(oe))}I=null,B=null,p.reset(),e.setRenderTarget(m),f=null,d=null,u=null,s=null,_=null,pe.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",V),s.addEventListener("inputsourceschange",L),g.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(w),s.renderState.layers===void 0){let oe={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,oe),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new on(f.framebufferWidth,f.framebufferHeight,{format:Tn,type:vi,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let oe=null,ie=null,Z=null;g.depth&&(Z=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=g.stencil?dr:rr,ie=g.stencil?ur:ys);let K={colorFormat:t.RGBA8,depthFormat:Z,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(K),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new on(d.textureWidth,d.textureHeight,{format:Tn,type:vi,depthTexture:new Ma(d.textureWidth,d.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),pe.setContext(s),pe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function L(Y){for(let oe=0;oe<Y.removed.length;oe++){let ie=Y.removed[oe],Z=y.indexOf(ie);Z>=0&&(y[Z]=null,v[Z].disconnect(ie))}for(let oe=0;oe<Y.added.length;oe++){let ie=Y.added[oe],Z=y.indexOf(ie);if(Z===-1){for(let $=0;$<v.length;$++)if($>=y.length){y.push(ie),Z=$;break}else if(y[$]===null){y[$]=ie,Z=$;break}if(Z===-1)break}let K=v[Z];K&&K.connect(ie)}}let A=new O,F=new O;function U(Y,oe,ie){A.setFromMatrixPosition(oe.matrixWorld),F.setFromMatrixPosition(ie.matrixWorld);let Z=A.distanceTo(F),K=oe.projectionMatrix.elements,$=ie.projectionMatrix.elements,ee=K[14]/(K[10]-1),re=K[14]/(K[10]+1),se=(K[9]+1)/K[5],_e=(K[9]-1)/K[5],T=(K[8]-1)/K[0],ye=($[8]+1)/$[0],te=ee*T,Me=ee*ye,he=Z/(-T+ye),Ce=he*-T;if(oe.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Ce),Y.translateZ(he),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),K[10]===-1)Y.projectionMatrix.copy(oe.projectionMatrix),Y.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{let Ne=ee+he,N=re+he,R=te-Ce,q=Me+(Z-Ce),le=se*re/N*Ne,de=_e*re/N*Ne;Y.projectionMatrix.makePerspective(R,q,le,de,Ne,N),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function D(Y,oe){oe===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(oe.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let oe=Y.near,ie=Y.far;p.texture!==null&&(p.depthNear>0&&(oe=p.depthNear),p.depthFar>0&&(ie=p.depthFar)),M.near=C.near=S.near=oe,M.far=C.far=S.far=ie,(I!==M.near||B!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),I=M.near,B=M.far),S.layers.mask=Y.layers.mask|2,C.layers.mask=Y.layers.mask|4,M.layers.mask=S.layers.mask|C.layers.mask;let Z=Y.parent,K=M.cameras;D(M,Z);for(let $=0;$<K.length;$++)D(K[$],Z);K.length===2?U(M,S,C):M.projectionMatrix.copy(S.projectionMatrix),H(Y,M,Z)};function H(Y,oe,ie){ie===null?Y.matrix.copy(oe.matrixWorld):(Y.matrix.copy(ie.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(oe.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(oe.projectionMatrix),Y.projectionMatrixInverse.copy(oe.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=mr*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(M)};let Q=null;function ce(Y,oe){if(h=oe.getViewerPose(c||o),x=oe,h!==null){let ie=h.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let Z=!1;ie.length!==M.cameras.length&&(M.cameras.length=0,Z=!0);for(let $=0;$<ie.length;$++){let ee=ie[$],re=null;if(f!==null)re=f.getViewport(ee);else{let _e=u.getViewSubImage(d,ee);re=_e.viewport,$===0&&(e.setRenderTargetTextures(_,_e.colorTexture,d.ignoreDepthValues?void 0:_e.depthStencilTexture),e.setRenderTarget(_))}let se=b[$];se===void 0&&(se=new Bt,se.layers.enable($),se.viewport=new ct,b[$]=se),se.matrix.fromArray(ee.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(ee.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(re.x,re.y,re.width,re.height),$===0&&(M.matrix.copy(se.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),Z===!0&&M.cameras.push(se)}let K=s.enabledFeatures;if(K&&K.includes("depth-sensing")){let $=u.getDepthInformation(ie[0]);$&&$.isValid&&$.texture&&p.init(e,$,s.renderState)}}for(let ie=0;ie<v.length;ie++){let Z=y[ie],K=v[ie];Z!==null&&K!==void 0&&K.update(Z,oe,c||o)}Q&&Q(Y,oe),oe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:oe}),x=null}let pe=new tp;pe.setAnimationLoop(ce),this.setAnimationLoop=function(Y){Q=Y},this.dispose=function(){}}},ms=new Qn,YM=new Ge;function qM(i,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,ep(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,_,v,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m)):m.isMeshStandardMaterial?(r(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,y)):m.isMeshMatcapMaterial?(r(g,m),x(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),p(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,_,v):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Qt&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Qt&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let _=e.get(m),v=_.envMap,y=_.envMapRotation;v&&(g.envMap.value=v,ms.copy(y),ms.x*=-1,ms.y*=-1,ms.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ms.y*=-1,ms.z*=-1),g.envMapRotation.value.setFromMatrix4(YM.makeRotationFromEuler(ms)),g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,_,v){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*_,g.scale.value=v*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,_){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Qt&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,m){m.matcap&&(g.matcap.value=m.matcap)}function p(g,m){let _=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function KM(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,v){let y=v.program;n.uniformBlockBinding(_,y)}function c(_,v){let y=s[_.id];y===void 0&&(x(_),y=h(_),s[_.id]=y,_.addEventListener("dispose",g));let w=v.program;n.updateUBOMapping(_,w);let E=e.render.frame;r[_.id]!==E&&(d(_),r[_.id]=E)}function h(_){let v=u();_.__bindingPointIndex=v;let y=i.createBuffer(),w=_.__size,E=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,w,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,y),y}function u(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){let v=s[_.id],y=_.uniforms,w=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let E=0,S=y.length;E<S;E++){let C=Array.isArray(y[E])?y[E]:[y[E]];for(let b=0,M=C.length;b<M;b++){let I=C[b];if(f(I,E,b,w)===!0){let B=I.__offset,k=Array.isArray(I.value)?I.value:[I.value],V=0;for(let L=0;L<k.length;L++){let A=k[L],F=p(A);typeof A=="number"||typeof A=="boolean"?(I.__data[0]=A,i.bufferSubData(i.UNIFORM_BUFFER,B+V,I.__data)):A.isMatrix3?(I.__data[0]=A.elements[0],I.__data[1]=A.elements[1],I.__data[2]=A.elements[2],I.__data[3]=0,I.__data[4]=A.elements[3],I.__data[5]=A.elements[4],I.__data[6]=A.elements[5],I.__data[7]=0,I.__data[8]=A.elements[6],I.__data[9]=A.elements[7],I.__data[10]=A.elements[8],I.__data[11]=0):(A.toArray(I.__data,V),V+=F.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(_,v,y,w){let E=_.value,S=v+"_"+y;if(w[S]===void 0)return typeof E=="number"||typeof E=="boolean"?w[S]=E:w[S]=E.clone(),!0;{let C=w[S];if(typeof E=="number"||typeof E=="boolean"){if(C!==E)return w[S]=E,!0}else if(C.equals(E)===!1)return C.copy(E),!0}return!1}function x(_){let v=_.uniforms,y=0,w=16;for(let S=0,C=v.length;S<C;S++){let b=Array.isArray(v[S])?v[S]:[v[S]];for(let M=0,I=b.length;M<I;M++){let B=b[M],k=Array.isArray(B.value)?B.value:[B.value];for(let V=0,L=k.length;V<L;V++){let A=k[V],F=p(A),U=y%w,D=U%F.boundary,H=U+D;y+=D,H!==0&&w-H<F.storage&&(y+=w-H),B.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=y,y+=F.storage}}}let E=y%w;return E>0&&(y+=w-E),_.__size=y,_.__cache={},this}function p(_){let v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function g(_){let v=_.target;v.removeEventListener("dispose",g);let y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function m(){for(let _ in s)i.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}var ba=class{constructor(e={}){let{canvas:t=Qg(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let x=new Uint32Array(4),p=new Int32Array(4),g=null,m=null,_=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=mt,this.toneMapping=ki,this.toneMappingExposure=1;let y=this,w=!1,E=0,S=0,C=null,b=-1,M=null,I=new ct,B=new ct,k=null,V=new Te(0),L=0,A=t.width,F=t.height,U=1,D=null,H=null,Q=new ct(0,0,A,F),ce=new ct(0,0,A,F),pe=!1,Y=new lo,oe=!1,ie=!1,Z=new Ge,K=new Ge,$=new O,ee=new ct,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},se=!1;function _e(){return C===null?U:1}let T=n;function ye(P,W){return t.getContext(P,W)}try{let P={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${bh}`),t.addEventListener("webglcontextlost",fe,!1),t.addEventListener("webglcontextrestored",Ae,!1),t.addEventListener("webglcontextcreationerror",Se,!1),T===null){let W="webgl2";if(T=ye(W,P),T===null)throw ye(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let te,Me,he,Ce,Ne,N,R,q,le,de,ae,Fe,Ee,Ie,rt,me,Pe,He,Ve,Le,st,Je,Et,G;function be(){te=new hv(T),te.init(),Je=new VM(T,te),Me=new sv(T,te,e,Je),he=new kM(T,te),Me.reverseDepthBuffer&&d&&he.buffers.depth.setReversed(!0),Ce=new fv(T),Ne=new TM,N=new HM(T,te,he,Ne,Me,Je,Ce),R=new ov(y),q=new cv(y),le=new vx(T),Et=new nv(T,le),de=new uv(T,le,Ce,Et),ae=new mv(T,de,le,Ce),Ve=new pv(T,Me,N),me=new rv(Ne),Fe=new wM(y,R,q,te,Me,Et,me),Ee=new qM(y,Ne),Ie=new RM,rt=new NM(te),He=new tv(y,R,q,he,ae,f,l),Pe=new zM(y,ae,Me),G=new KM(T,Ce,Me,he),Le=new iv(T,te,Ce),st=new dv(T,te,Ce),Ce.programs=Fe.programs,y.capabilities=Me,y.extensions=te,y.properties=Ne,y.renderLists=Ie,y.shadowMap=Pe,y.state=he,y.info=Ce}be();let ne=new ah(y,T);this.xr=ne,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){let P=te.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){let P=te.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(P){P!==void 0&&(U=P,this.setSize(A,F,!1))},this.getSize=function(P){return P.set(A,F)},this.setSize=function(P,W,J=!0){if(ne.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}A=P,F=W,t.width=Math.floor(P*U),t.height=Math.floor(W*U),J===!0&&(t.style.width=P+"px",t.style.height=W+"px"),this.setViewport(0,0,P,W)},this.getDrawingBufferSize=function(P){return P.set(A*U,F*U).floor()},this.setDrawingBufferSize=function(P,W,J){A=P,F=W,U=J,t.width=Math.floor(P*J),t.height=Math.floor(W*J),this.setViewport(0,0,P,W)},this.getCurrentViewport=function(P){return P.copy(I)},this.getViewport=function(P){return P.copy(Q)},this.setViewport=function(P,W,J,j){P.isVector4?Q.set(P.x,P.y,P.z,P.w):Q.set(P,W,J,j),he.viewport(I.copy(Q).multiplyScalar(U).round())},this.getScissor=function(P){return P.copy(ce)},this.setScissor=function(P,W,J,j){P.isVector4?ce.set(P.x,P.y,P.z,P.w):ce.set(P,W,J,j),he.scissor(B.copy(ce).multiplyScalar(U).round())},this.getScissorTest=function(){return pe},this.setScissorTest=function(P){he.setScissorTest(pe=P)},this.setOpaqueSort=function(P){D=P},this.setTransparentSort=function(P){H=P},this.getClearColor=function(P){return P.copy(He.getClearColor())},this.setClearColor=function(){He.setClearColor.apply(He,arguments)},this.getClearAlpha=function(){return He.getClearAlpha()},this.setClearAlpha=function(){He.setClearAlpha.apply(He,arguments)},this.clear=function(P=!0,W=!0,J=!0){let j=0;if(P){let X=!1;if(C!==null){let xe=C.texture.format;X=xe===Uh||xe===Oh||xe===Nh}if(X){let xe=C.texture.type,we=xe===vi||xe===ys||xe===ro||xe===ur||xe===Ph||xe===Lh,Oe=He.getClearColor(),Ue=He.getClearAlpha(),Xe=Oe.r,Ke=Oe.g,ze=Oe.b;we?(x[0]=Xe,x[1]=Ke,x[2]=ze,x[3]=Ue,T.clearBufferuiv(T.COLOR,0,x)):(p[0]=Xe,p[1]=Ke,p[2]=ze,p[3]=Ue,T.clearBufferiv(T.COLOR,0,p))}else j|=T.COLOR_BUFFER_BIT}W&&(j|=T.DEPTH_BUFFER_BIT),J&&(j|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",fe,!1),t.removeEventListener("webglcontextrestored",Ae,!1),t.removeEventListener("webglcontextcreationerror",Se,!1),Ie.dispose(),rt.dispose(),Ne.dispose(),R.dispose(),q.dispose(),ae.dispose(),Et.dispose(),G.dispose(),Fe.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",ad),ne.removeEventListener("sessionend",ld),cs.stop()};function fe(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function Ae(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let P=Ce.autoReset,W=Pe.enabled,J=Pe.autoUpdate,j=Pe.needsUpdate,X=Pe.type;be(),Ce.autoReset=P,Pe.enabled=W,Pe.autoUpdate=J,Pe.needsUpdate=j,Pe.type=X}function Se(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function qe(P){let W=P.target;W.removeEventListener("dispose",qe),Nt(W)}function Nt(P){Zt(P),Ne.remove(P)}function Zt(P){let W=Ne.get(P).programs;W!==void 0&&(W.forEach(function(J){Fe.releaseProgram(J)}),P.isShaderMaterial&&Fe.releaseShaderCache(P))}this.renderBufferDirect=function(P,W,J,j,X,xe){W===null&&(W=re);let we=X.isMesh&&X.matrixWorld.determinant()<0,Oe=j0(P,W,J,j,X);he.setMaterial(j,we);let Ue=J.index,Xe=1;if(j.wireframe===!0){if(Ue=de.getWireframeAttribute(J),Ue===void 0)return;Xe=2}let Ke=J.drawRange,ze=J.attributes.position,ot=Ke.start*Xe,St=(Ke.start+Ke.count)*Xe;xe!==null&&(ot=Math.max(ot,xe.start*Xe),St=Math.min(St,(xe.start+xe.count)*Xe)),Ue!==null?(ot=Math.max(ot,0),St=Math.min(St,Ue.count)):ze!=null&&(ot=Math.max(ot,0),St=Math.min(St,ze.count));let wt=St-ot;if(wt<0||wt===1/0)return;Et.setup(X,j,Oe,J,Ue);let hn,dt=Le;if(Ue!==null&&(hn=le.get(Ue),dt=st,dt.setIndex(hn)),X.isMesh)j.wireframe===!0?(he.setLineWidth(j.wireframeLinewidth*_e()),dt.setMode(T.LINES)):dt.setMode(T.TRIANGLES);else if(X.isLine){let ke=j.linewidth;ke===void 0&&(ke=1),he.setLineWidth(ke*_e()),X.isLineSegments?dt.setMode(T.LINES):X.isLineLoop?dt.setMode(T.LINE_LOOP):dt.setMode(T.LINE_STRIP)}else X.isPoints?dt.setMode(T.POINTS):X.isSprite&&dt.setMode(T.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)dt.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(te.get("WEBGL_multi_draw"))dt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let ke=X._multiDrawStarts,ci=X._multiDrawCounts,ft=X._multiDrawCount,On=Ue?le.get(Ue).bytesPerElement:1,Ns=Ne.get(j).currentProgram.getUniforms();for(let gn=0;gn<ft;gn++)Ns.setValue(T,"_gl_DrawID",gn),dt.render(ke[gn]/On,ci[gn])}else if(X.isInstancedMesh)dt.renderInstances(ot,wt,X.count);else if(J.isInstancedBufferGeometry){let ke=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,ci=Math.min(J.instanceCount,ke);dt.renderInstances(ot,wt,ci)}else dt.render(ot,wt)};function xt(P,W,J){P.transparent===!0&&P.side===gt&&P.forceSinglePass===!1?(P.side=Qt,P.needsUpdate=!0,Po(P,W,J),P.side=jn,P.needsUpdate=!0,Po(P,W,J),P.side=gt):Po(P,W,J)}this.compile=function(P,W,J=null){J===null&&(J=P),m=rt.get(J),m.init(W),v.push(m),J.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(m.pushLight(X),X.castShadow&&m.pushShadow(X))}),P!==J&&P.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(m.pushLight(X),X.castShadow&&m.pushShadow(X))}),m.setupLights();let j=new Set;return P.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let xe=X.material;if(xe)if(Array.isArray(xe))for(let we=0;we<xe.length;we++){let Oe=xe[we];xt(Oe,J,X),j.add(Oe)}else xt(xe,J,X),j.add(xe)}),v.pop(),m=null,j},this.compileAsync=function(P,W,J=null){let j=this.compile(P,W,J);return new Promise(X=>{function xe(){if(j.forEach(function(we){Ne.get(we).currentProgram.isReady()&&j.delete(we)}),j.size===0){X(P);return}setTimeout(xe,10)}te.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let Nn=null;function li(P){Nn&&Nn(P)}function ad(){cs.stop()}function ld(){cs.start()}let cs=new tp;cs.setAnimationLoop(li),typeof self<"u"&&cs.setContext(self),this.setAnimationLoop=function(P){Nn=P,ne.setAnimationLoop(P),P===null?cs.stop():cs.start()},ne.addEventListener("sessionstart",ad),ne.addEventListener("sessionend",ld),this.render=function(P,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(W),W=ne.getCamera()),P.isScene===!0&&P.onBeforeRender(y,P,W,C),m=rt.get(P,v.length),m.init(W),v.push(m),K.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Y.setFromProjectionMatrix(K),ie=this.localClippingEnabled,oe=me.init(this.clippingPlanes,ie),g=Ie.get(P,_.length),g.init(),_.push(g),ne.enabled===!0&&ne.isPresenting===!0){let xe=y.xr.getDepthSensingMesh();xe!==null&&Rl(xe,W,-1/0,y.sortObjects)}Rl(P,W,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(D,H),se=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,se&&He.addToRenderList(g,P),this.info.render.frame++,oe===!0&&me.beginShadows();let J=m.state.shadowsArray;Pe.render(J,P,W),oe===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset();let j=g.opaque,X=g.transmissive;if(m.setupLights(),W.isArrayCamera){let xe=W.cameras;if(X.length>0)for(let we=0,Oe=xe.length;we<Oe;we++){let Ue=xe[we];hd(j,X,P,Ue)}se&&He.render(P);for(let we=0,Oe=xe.length;we<Oe;we++){let Ue=xe[we];cd(g,P,Ue,Ue.viewport)}}else X.length>0&&hd(j,X,P,W),se&&He.render(P),cd(g,P,W);C!==null&&(N.updateMultisampleRenderTarget(C),N.updateRenderTargetMipmap(C)),P.isScene===!0&&P.onAfterRender(y,P,W),Et.resetDefaultState(),b=-1,M=null,v.pop(),v.length>0?(m=v[v.length-1],oe===!0&&me.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,_.pop(),_.length>0?g=_[_.length-1]:g=null};function Rl(P,W,J,j){if(P.visible===!1)return;if(P.layers.test(W.layers)){if(P.isGroup)J=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(W);else if(P.isLight)m.pushLight(P),P.castShadow&&m.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||Y.intersectsSprite(P)){j&&ee.setFromMatrixPosition(P.matrixWorld).applyMatrix4(K);let we=ae.update(P),Oe=P.material;Oe.visible&&g.push(P,we,Oe,J,ee.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||Y.intersectsObject(P))){let we=ae.update(P),Oe=P.material;if(j&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),ee.copy(P.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),ee.copy(we.boundingSphere.center)),ee.applyMatrix4(P.matrixWorld).applyMatrix4(K)),Array.isArray(Oe)){let Ue=we.groups;for(let Xe=0,Ke=Ue.length;Xe<Ke;Xe++){let ze=Ue[Xe],ot=Oe[ze.materialIndex];ot&&ot.visible&&g.push(P,we,ot,J,ee.z,ze)}}else Oe.visible&&g.push(P,we,Oe,J,ee.z,null)}}let xe=P.children;for(let we=0,Oe=xe.length;we<Oe;we++)Rl(xe[we],W,J,j)}function cd(P,W,J,j){let X=P.opaque,xe=P.transmissive,we=P.transparent;m.setupLightsView(J),oe===!0&&me.setGlobalState(y.clippingPlanes,J),j&&he.viewport(I.copy(j)),X.length>0&&Io(X,W,J),xe.length>0&&Io(xe,W,J),we.length>0&&Io(we,W,J),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function hd(P,W,J,j){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[j.id]===void 0&&(m.state.transmissionRenderTarget[j.id]=new on(1,1,{generateMipmaps:!0,type:te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float")?Gn:vi,minFilter:wn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));let xe=m.state.transmissionRenderTarget[j.id],we=j.viewport||I;xe.setSize(we.z,we.w);let Oe=y.getRenderTarget();y.setRenderTarget(xe),y.getClearColor(V),L=y.getClearAlpha(),L<1&&y.setClearColor(16777215,.5),y.clear(),se&&He.render(J);let Ue=y.toneMapping;y.toneMapping=ki;let Xe=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),m.setupLightsView(j),oe===!0&&me.setGlobalState(y.clippingPlanes,j),Io(P,J,j),N.updateMultisampleRenderTarget(xe),N.updateRenderTargetMipmap(xe),te.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let ze=0,ot=W.length;ze<ot;ze++){let St=W[ze],wt=St.object,hn=St.geometry,dt=St.material,ke=St.group;if(dt.side===gt&&wt.layers.test(j.layers)){let ci=dt.side;dt.side=Qt,dt.needsUpdate=!0,ud(wt,J,j,hn,dt,ke),dt.side=ci,dt.needsUpdate=!0,Ke=!0}}Ke===!0&&(N.updateMultisampleRenderTarget(xe),N.updateRenderTargetMipmap(xe))}y.setRenderTarget(Oe),y.setClearColor(V,L),Xe!==void 0&&(j.viewport=Xe),y.toneMapping=Ue}function Io(P,W,J){let j=W.isScene===!0?W.overrideMaterial:null;for(let X=0,xe=P.length;X<xe;X++){let we=P[X],Oe=we.object,Ue=we.geometry,Xe=j===null?we.material:j,Ke=we.group;Oe.layers.test(J.layers)&&ud(Oe,W,J,Ue,Xe,Ke)}}function ud(P,W,J,j,X,xe){P.onBeforeRender(y,W,J,j,X,xe),P.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),X.onBeforeRender(y,W,J,j,P,xe),X.transparent===!0&&X.side===gt&&X.forceSinglePass===!1?(X.side=Qt,X.needsUpdate=!0,y.renderBufferDirect(J,W,j,X,P,xe),X.side=jn,X.needsUpdate=!0,y.renderBufferDirect(J,W,j,X,P,xe),X.side=gt):y.renderBufferDirect(J,W,j,X,P,xe),P.onAfterRender(y,W,J,j,X,xe)}function Po(P,W,J){W.isScene!==!0&&(W=re);let j=Ne.get(P),X=m.state.lights,xe=m.state.shadowsArray,we=X.state.version,Oe=Fe.getParameters(P,X.state,xe,W,J),Ue=Fe.getProgramCacheKey(Oe),Xe=j.programs;j.environment=P.isMeshStandardMaterial?W.environment:null,j.fog=W.fog,j.envMap=(P.isMeshStandardMaterial?q:R).get(P.envMap||j.environment),j.envMapRotation=j.environment!==null&&P.envMap===null?W.environmentRotation:P.envMapRotation,Xe===void 0&&(P.addEventListener("dispose",qe),Xe=new Map,j.programs=Xe);let Ke=Xe.get(Ue);if(Ke!==void 0){if(j.currentProgram===Ke&&j.lightsStateVersion===we)return fd(P,Oe),Ke}else Oe.uniforms=Fe.getUniforms(P),P.onBeforeCompile(Oe,y),Ke=Fe.acquireProgram(Oe,Ue),Xe.set(Ue,Ke),j.uniforms=Oe.uniforms;let ze=j.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(ze.clippingPlanes=me.uniform),fd(P,Oe),j.needsLights=eg(P),j.lightsStateVersion=we,j.needsLights&&(ze.ambientLightColor.value=X.state.ambient,ze.lightProbe.value=X.state.probe,ze.directionalLights.value=X.state.directional,ze.directionalLightShadows.value=X.state.directionalShadow,ze.spotLights.value=X.state.spot,ze.spotLightShadows.value=X.state.spotShadow,ze.rectAreaLights.value=X.state.rectArea,ze.ltc_1.value=X.state.rectAreaLTC1,ze.ltc_2.value=X.state.rectAreaLTC2,ze.pointLights.value=X.state.point,ze.pointLightShadows.value=X.state.pointShadow,ze.hemisphereLights.value=X.state.hemi,ze.directionalShadowMap.value=X.state.directionalShadowMap,ze.directionalShadowMatrix.value=X.state.directionalShadowMatrix,ze.spotShadowMap.value=X.state.spotShadowMap,ze.spotLightMatrix.value=X.state.spotLightMatrix,ze.spotLightMap.value=X.state.spotLightMap,ze.pointShadowMap.value=X.state.pointShadowMap,ze.pointShadowMatrix.value=X.state.pointShadowMatrix),j.currentProgram=Ke,j.uniformsList=null,Ke}function dd(P){if(P.uniformsList===null){let W=P.currentProgram.getUniforms();P.uniformsList=ar.seqWithValue(W.seq,P.uniforms)}return P.uniformsList}function fd(P,W){let J=Ne.get(P);J.outputColorSpace=W.outputColorSpace,J.batching=W.batching,J.batchingColor=W.batchingColor,J.instancing=W.instancing,J.instancingColor=W.instancingColor,J.instancingMorph=W.instancingMorph,J.skinning=W.skinning,J.morphTargets=W.morphTargets,J.morphNormals=W.morphNormals,J.morphColors=W.morphColors,J.morphTargetsCount=W.morphTargetsCount,J.numClippingPlanes=W.numClippingPlanes,J.numIntersection=W.numClipIntersection,J.vertexAlphas=W.vertexAlphas,J.vertexTangents=W.vertexTangents,J.toneMapping=W.toneMapping}function j0(P,W,J,j,X){W.isScene!==!0&&(W=re),N.resetTextureUnits();let xe=W.fog,we=j.isMeshStandardMaterial?W.environment:null,Oe=C===null?y.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:nn,Ue=(j.isMeshStandardMaterial?q:R).get(j.envMap||we),Xe=j.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Ke=!!J.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),ze=!!J.morphAttributes.position,ot=!!J.morphAttributes.normal,St=!!J.morphAttributes.color,wt=ki;j.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(wt=y.toneMapping);let hn=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,dt=hn!==void 0?hn.length:0,ke=Ne.get(j),ci=m.state.lights;if(oe===!0&&(ie===!0||P!==M)){let En=P===M&&j.id===b;me.setState(j,P,En)}let ft=!1;j.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==ci.state.version||ke.outputColorSpace!==Oe||X.isBatchedMesh&&ke.batching===!1||!X.isBatchedMesh&&ke.batching===!0||X.isBatchedMesh&&ke.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&ke.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&ke.instancing===!1||!X.isInstancedMesh&&ke.instancing===!0||X.isSkinnedMesh&&ke.skinning===!1||!X.isSkinnedMesh&&ke.skinning===!0||X.isInstancedMesh&&ke.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&ke.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&ke.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&ke.instancingMorph===!1&&X.morphTexture!==null||ke.envMap!==Ue||j.fog===!0&&ke.fog!==xe||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==me.numPlanes||ke.numIntersection!==me.numIntersection)||ke.vertexAlphas!==Xe||ke.vertexTangents!==Ke||ke.morphTargets!==ze||ke.morphNormals!==ot||ke.morphColors!==St||ke.toneMapping!==wt||ke.morphTargetsCount!==dt)&&(ft=!0):(ft=!0,ke.__version=j.version);let On=ke.currentProgram;ft===!0&&(On=Po(j,W,X));let Ns=!1,gn=!1,kr=!1,Tt=On.getUniforms(),Zn=ke.uniforms;if(he.useProgram(On.program)&&(Ns=!0,gn=!0,kr=!0),j.id!==b&&(b=j.id,gn=!0),Ns||M!==P){he.buffers.depth.getReversed()?(Z.copy(P.projectionMatrix),tx(Z),nx(Z),Tt.setValue(T,"projectionMatrix",Z)):Tt.setValue(T,"projectionMatrix",P.projectionMatrix),Tt.setValue(T,"viewMatrix",P.matrixWorldInverse);let Ri=Tt.map.cameraPosition;Ri!==void 0&&Ri.setValue(T,$.setFromMatrixPosition(P.matrixWorld)),Me.logarithmicDepthBuffer&&Tt.setValue(T,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Tt.setValue(T,"isOrthographic",P.isOrthographicCamera===!0),M!==P&&(M=P,gn=!0,kr=!0)}if(X.isSkinnedMesh){Tt.setOptional(T,X,"bindMatrix"),Tt.setOptional(T,X,"bindMatrixInverse");let En=X.skeleton;En&&(En.boneTexture===null&&En.computeBoneTexture(),Tt.setValue(T,"boneTexture",En.boneTexture,N))}X.isBatchedMesh&&(Tt.setOptional(T,X,"batchingTexture"),Tt.setValue(T,"batchingTexture",X._matricesTexture,N),Tt.setOptional(T,X,"batchingIdTexture"),Tt.setValue(T,"batchingIdTexture",X._indirectTexture,N),Tt.setOptional(T,X,"batchingColorTexture"),X._colorsTexture!==null&&Tt.setValue(T,"batchingColorTexture",X._colorsTexture,N));let Br=J.morphAttributes;if((Br.position!==void 0||Br.normal!==void 0||Br.color!==void 0)&&Ve.update(X,J,On),(gn||ke.receiveShadow!==X.receiveShadow)&&(ke.receiveShadow=X.receiveShadow,Tt.setValue(T,"receiveShadow",X.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(Zn.envMap.value=Ue,Zn.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&W.environment!==null&&(Zn.envMapIntensity.value=W.environmentIntensity),gn&&(Tt.setValue(T,"toneMappingExposure",y.toneMappingExposure),ke.needsLights&&Q0(Zn,kr),xe&&j.fog===!0&&Ee.refreshFogUniforms(Zn,xe),Ee.refreshMaterialUniforms(Zn,j,U,F,m.state.transmissionRenderTarget[P.id]),ar.upload(T,dd(ke),Zn,N)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(ar.upload(T,dd(ke),Zn,N),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Tt.setValue(T,"center",X.center),Tt.setValue(T,"modelViewMatrix",X.modelViewMatrix),Tt.setValue(T,"normalMatrix",X.normalMatrix),Tt.setValue(T,"modelMatrix",X.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){let En=j.uniformsGroups;for(let Ri=0,Ci=En.length;Ri<Ci;Ri++){let pd=En[Ri];G.update(pd,On),G.bind(pd,On)}}return On}function Q0(P,W){P.ambientLightColor.needsUpdate=W,P.lightProbe.needsUpdate=W,P.directionalLights.needsUpdate=W,P.directionalLightShadows.needsUpdate=W,P.pointLights.needsUpdate=W,P.pointLightShadows.needsUpdate=W,P.spotLights.needsUpdate=W,P.spotLightShadows.needsUpdate=W,P.rectAreaLights.needsUpdate=W,P.hemisphereLights.needsUpdate=W}function eg(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(P,W,J){Ne.get(P.texture).__webglTexture=W,Ne.get(P.depthTexture).__webglTexture=J;let j=Ne.get(P);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=J===void 0,j.__autoAllocateDepthBuffer||te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,W){let J=Ne.get(P);J.__webglFramebuffer=W,J.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(P,W=0,J=0){C=P,E=W,S=J;let j=!0,X=null,xe=!1,we=!1;if(P){let Ue=Ne.get(P);if(Ue.__useDefaultFramebuffer!==void 0)he.bindFramebuffer(T.FRAMEBUFFER,null),j=!1;else if(Ue.__webglFramebuffer===void 0)N.setupRenderTarget(P);else if(Ue.__hasExternalTextures)N.rebindTextures(P,Ne.get(P.texture).__webglTexture,Ne.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){let ze=P.depthTexture;if(Ue.__boundDepthTexture!==ze){if(ze!==null&&Ne.has(ze)&&(P.width!==ze.image.width||P.height!==ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(P)}}let Xe=P.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(we=!0);let Ke=Ne.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Ke[W])?X=Ke[W][J]:X=Ke[W],xe=!0):P.samples>0&&N.useMultisampledRTT(P)===!1?X=Ne.get(P).__webglMultisampledFramebuffer:Array.isArray(Ke)?X=Ke[J]:X=Ke,I.copy(P.viewport),B.copy(P.scissor),k=P.scissorTest}else I.copy(Q).multiplyScalar(U).floor(),B.copy(ce).multiplyScalar(U).floor(),k=pe;if(he.bindFramebuffer(T.FRAMEBUFFER,X)&&j&&he.drawBuffers(P,X),he.viewport(I),he.scissor(B),he.setScissorTest(k),xe){let Ue=Ne.get(P.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ue.__webglTexture,J)}else if(we){let Ue=Ne.get(P.texture),Xe=W||0;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,Ue.__webglTexture,J||0,Xe)}b=-1},this.readRenderTargetPixels=function(P,W,J,j,X,xe,we){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=Ne.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&we!==void 0&&(Oe=Oe[we]),Oe){he.bindFramebuffer(T.FRAMEBUFFER,Oe);try{let Ue=P.texture,Xe=Ue.format,Ke=Ue.type;if(!Me.textureFormatReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Me.textureTypeReadable(Ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=P.width-j&&J>=0&&J<=P.height-X&&T.readPixels(W,J,j,X,Je.convert(Xe),Je.convert(Ke),xe)}finally{let Ue=C!==null?Ne.get(C).__webglFramebuffer:null;he.bindFramebuffer(T.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(P,W,J,j,X,xe,we){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=Ne.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&we!==void 0&&(Oe=Oe[we]),Oe){let Ue=P.texture,Xe=Ue.format,Ke=Ue.type;if(!Me.textureFormatReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Me.textureTypeReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=P.width-j&&J>=0&&J<=P.height-X){he.bindFramebuffer(T.FRAMEBUFFER,Oe);let ze=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,ze),T.bufferData(T.PIXEL_PACK_BUFFER,xe.byteLength,T.STREAM_READ),T.readPixels(W,J,j,X,Je.convert(Xe),Je.convert(Ke),0);let ot=C!==null?Ne.get(C).__webglFramebuffer:null;he.bindFramebuffer(T.FRAMEBUFFER,ot);let St=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await ex(T,St,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,ze),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,xe),T.deleteBuffer(ze),T.deleteSync(St),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(P,W=null,J=0){P.isTexture!==!0&&(jr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,P=arguments[1]);let j=Math.pow(2,-J),X=Math.floor(P.image.width*j),xe=Math.floor(P.image.height*j),we=W!==null?W.x:0,Oe=W!==null?W.y:0;N.setTexture2D(P,0),T.copyTexSubImage2D(T.TEXTURE_2D,J,0,0,we,Oe,X,xe),he.unbindTexture()},this.copyTextureToTexture=function(P,W,J=null,j=null,X=0){P.isTexture!==!0&&(jr("WebGLRenderer: copyTextureToTexture function signature has changed."),j=arguments[0]||null,P=arguments[1],W=arguments[2],X=arguments[3]||0,J=null);let xe,we,Oe,Ue,Xe,Ke,ze,ot,St,wt=P.isCompressedTexture?P.mipmaps[X]:P.image;J!==null?(xe=J.max.x-J.min.x,we=J.max.y-J.min.y,Oe=J.isBox3?J.max.z-J.min.z:1,Ue=J.min.x,Xe=J.min.y,Ke=J.isBox3?J.min.z:0):(xe=wt.width,we=wt.height,Oe=wt.depth||1,Ue=0,Xe=0,Ke=0),j!==null?(ze=j.x,ot=j.y,St=j.z):(ze=0,ot=0,St=0);let hn=Je.convert(W.format),dt=Je.convert(W.type),ke;W.isData3DTexture?(N.setTexture3D(W,0),ke=T.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(N.setTexture2DArray(W,0),ke=T.TEXTURE_2D_ARRAY):(N.setTexture2D(W,0),ke=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,W.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,W.unpackAlignment);let ci=T.getParameter(T.UNPACK_ROW_LENGTH),ft=T.getParameter(T.UNPACK_IMAGE_HEIGHT),On=T.getParameter(T.UNPACK_SKIP_PIXELS),Ns=T.getParameter(T.UNPACK_SKIP_ROWS),gn=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,wt.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,wt.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Ue),T.pixelStorei(T.UNPACK_SKIP_ROWS,Xe),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Ke);let kr=P.isDataArrayTexture||P.isData3DTexture,Tt=W.isDataArrayTexture||W.isData3DTexture;if(P.isRenderTargetTexture||P.isDepthTexture){let Zn=Ne.get(P),Br=Ne.get(W),En=Ne.get(Zn.__renderTarget),Ri=Ne.get(Br.__renderTarget);he.bindFramebuffer(T.READ_FRAMEBUFFER,En.__webglFramebuffer),he.bindFramebuffer(T.DRAW_FRAMEBUFFER,Ri.__webglFramebuffer);for(let Ci=0;Ci<Oe;Ci++)kr&&T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Ne.get(P).__webglTexture,X,Ke+Ci),P.isDepthTexture?(Tt&&T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Ne.get(W).__webglTexture,X,St+Ci),T.blitFramebuffer(Ue,Xe,xe,we,ze,ot,xe,we,T.DEPTH_BUFFER_BIT,T.NEAREST)):Tt?T.copyTexSubImage3D(ke,X,ze,ot,St+Ci,Ue,Xe,xe,we):T.copyTexSubImage2D(ke,X,ze,ot,St+Ci,Ue,Xe,xe,we);he.bindFramebuffer(T.READ_FRAMEBUFFER,null),he.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else Tt?P.isDataTexture||P.isData3DTexture?T.texSubImage3D(ke,X,ze,ot,St,xe,we,Oe,hn,dt,wt.data):W.isCompressedArrayTexture?T.compressedTexSubImage3D(ke,X,ze,ot,St,xe,we,Oe,hn,wt.data):T.texSubImage3D(ke,X,ze,ot,St,xe,we,Oe,hn,dt,wt):P.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,X,ze,ot,xe,we,hn,dt,wt.data):P.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,X,ze,ot,wt.width,wt.height,hn,wt.data):T.texSubImage2D(T.TEXTURE_2D,X,ze,ot,xe,we,hn,dt,wt);T.pixelStorei(T.UNPACK_ROW_LENGTH,ci),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,ft),T.pixelStorei(T.UNPACK_SKIP_PIXELS,On),T.pixelStorei(T.UNPACK_SKIP_ROWS,Ns),T.pixelStorei(T.UNPACK_SKIP_IMAGES,gn),X===0&&W.generateMipmaps&&T.generateMipmap(ke),he.unbindTexture()},this.copyTextureToTexture3D=function(P,W,J=null,j=null,X=0){return P.isTexture!==!0&&(jr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),J=arguments[0]||null,j=arguments[1]||null,P=arguments[2],W=arguments[3],X=arguments[4]||0),jr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(P,W,J,j,X)},this.initRenderTarget=function(P){Ne.get(P).__webglFramebuffer===void 0&&N.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?N.setTextureCube(P,0):P.isData3DTexture?N.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?N.setTexture2DArray(P,0):N.setTexture2D(P,0),he.unbindTexture()},this.resetState=function(){E=0,S=0,C=null,he.reset(),Et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}};var Ea=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Te(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Sa=class extends Ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qn,this.environmentIntensity=1,this.environmentRotation=new Qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},_r=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Xc,this.updateRanges=[],this.version=0,this.uuid=Vn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},sn=new O,Ms=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix4(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyNormalMatrix(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.transformDirection(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Bn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=_t(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Bn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Bn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Bn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Bn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),s=_t(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),s=_t(s,this.array),r=_t(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new et(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},co=class extends fn{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Zs,Xr=new O,$s=new O,Js=new O,js=new Re,Yr=new Re,op=new Ge,jo=new O,qr=new O,Qo=new O,ff=new Re,nc=new Re,pf=new Re,wa=class extends Ct{constructor(e=new co){if(super(),this.isSprite=!0,this.type="Sprite",Zs===void 0){Zs=new lt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new _r(t,5);Zs.setIndex([0,1,2,0,2,3]),Zs.setAttribute("position",new Ms(n,3,0,!1)),Zs.setAttribute("uv",new Ms(n,2,3,!1))}this.geometry=Zs,this.material=e,this.center=new Re(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),$s.setFromMatrixScale(this.matrixWorld),op.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Js.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&$s.multiplyScalar(-Js.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;ea(jo.set(-.5,-.5,0),Js,o,$s,s,r),ea(qr.set(.5,-.5,0),Js,o,$s,s,r),ea(Qo.set(.5,.5,0),Js,o,$s,s,r),ff.set(0,0),nc.set(1,0),pf.set(1,1);let a=e.ray.intersectTriangle(jo,qr,Qo,!1,Xr);if(a===null&&(ea(qr.set(-.5,.5,0),Js,o,$s,s,r),nc.set(0,1),a=e.ray.intersectTriangle(jo,Qo,qr,!1,Xr),a===null))return;let l=e.ray.origin.distanceTo(Xr);l<e.near||l>e.far||t.push({distance:l,point:Xr.clone(),uv:zi.getInterpolation(Xr,jo,qr,Qo,ff,nc,pf,new Re),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function ea(i,e,t,n,s,r){js.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Yr.x=r*js.x-s*js.y,Yr.y=s*js.x+r*js.y):Yr.copy(js),i.copy(e),i.x+=Yr.x,i.y+=Yr.y,i.applyMatrix4(op)}var mf=new O,gf=new ct,xf=new ct,ZM=new O,_f=new Ge,ta=new O,ic=new an,yf=new Ge,sc=new vs,yr=class extends ge{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=_d,this.bindMatrix=new Ge,this.bindMatrixInverse=new Ge,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new qt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ta),this.boundingBox.expandByPoint(ta)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new an),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ta),this.boundingSphere.expandByPoint(ta)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ic.copy(this.boundingSphere),ic.applyMatrix4(s),e.ray.intersectsSphere(ic)!==!1&&(yf.copy(s).invert(),sc.copy(e.ray).applyMatrix4(yf),!(this.boundingBox!==null&&sc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,sc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new ct,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===_d?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Sg?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;gf.fromBufferAttribute(s.attributes.skinIndex,e),xf.fromBufferAttribute(s.attributes.skinWeight,e),mf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=xf.getComponent(r);if(o!==0){let a=gf.getComponent(r);_f.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(ZM.copy(mf).applyMatrix4(_f),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},bs=class extends Ct{constructor(){super(),this.isBone=!0,this.type="Bone"}},Ta=class extends Wt{constructor(e=null,t=1,n=1,s,r,o,a,l,c=en,h=en,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},vf=new Ge,$M=new Ge,vr=class i{constructor(e=[],t=[]){this.uuid=Vn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ge)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ge;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:$M;vf.multiplyMatrices(a,t[r]),vf.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Ta(t,e,e,Tn,Hn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new bs),this.bones.push(o),this.boneInverses.push(new Ge().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},Es=class extends et{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Qs=new Ge,Mf=new Ge,na=[],bf=new qt,JM=new Ge,Kr=new ge,Zr=new an,Hi=class extends ge{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Es(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,JM)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new qt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Qs),bf.copy(e.boundingBox).applyMatrix4(Qs),this.boundingBox.union(bf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new an),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Qs),Zr.copy(e.boundingSphere).applyMatrix4(Qs),this.boundingSphere.union(Zr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Kr.geometry=this.geometry,Kr.material=this.material,Kr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Zr.copy(this.boundingSphere),Zr.applyMatrix4(n),e.ray.intersectsSphere(Zr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Qs),Mf.multiplyMatrices(n,Qs),Kr.matrixWorld=Mf,Kr.raycast(e,na);for(let o=0,a=na.length;o<a;o++){let l=na[o];l.instanceId=r,l.object=this,t.push(l)}na.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Es(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ta(new Float32Array(s*this.count),s,this.count,Dh,Hn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var ho=class extends fn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Te(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Aa=new O,Ra=new O,Ef=new Ge,$r=new vs,ia=new an,rc=new O,Sf=new O,Mr=class extends Ct{constructor(e=new lt,t=new ho){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Aa.fromBufferAttribute(t,s-1),Ra.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Aa.distanceTo(Ra);e.setAttribute("lineDistance",new it(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ia.copy(n.boundingSphere),ia.applyMatrix4(s),ia.radius+=r,e.ray.intersectsSphere(ia)===!1)return;Ef.copy(s).invert(),$r.copy(e.ray).applyMatrix4(Ef);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),x=Math.min(h.count,o.start+o.count);for(let p=f,g=x-1;p<g;p+=c){let m=h.getX(p),_=h.getX(p+1),v=sa(this,e,$r,l,m,_);v&&t.push(v)}if(this.isLineLoop){let p=h.getX(x-1),g=h.getX(f),m=sa(this,e,$r,l,p,g);m&&t.push(m)}}else{let f=Math.max(0,o.start),x=Math.min(d.count,o.start+o.count);for(let p=f,g=x-1;p<g;p+=c){let m=sa(this,e,$r,l,p,p+1);m&&t.push(m)}if(this.isLineLoop){let p=sa(this,e,$r,l,x-1,f);p&&t.push(p)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function sa(i,e,t,n,s,r){let o=i.geometry.attributes.position;if(Aa.fromBufferAttribute(o,s),Ra.fromBufferAttribute(o,r),t.distanceSqToSegment(Aa,Ra,rc,Sf)>n)return;rc.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(rc);if(!(l<e.near||l>e.far))return{distance:l,point:Sf.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var wf=new O,Tf=new O,Ca=class extends Mr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)wf.fromBufferAttribute(t,s),Tf.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+wf.distanceTo(Tf);e.setAttribute("lineDistance",new it(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ia=class extends Mr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Vi=class extends fn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Af=new Ge,lh=new vs,ra=new an,oa=new O,bi=class extends Ct{constructor(e=new lt,t=new Vi){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ra.copy(n.boundingSphere),ra.applyMatrix4(s),ra.radius+=r,e.ray.intersectsSphere(ra)===!1)return;Af.copy(s).invert(),lh.copy(e.ray).applyMatrix4(Af);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let x=d,p=f;x<p;x++){let g=c.getX(x);oa.fromBufferAttribute(u,g),Rf(oa,g,l,s,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let x=d,p=f;x<p;x++)oa.fromBufferAttribute(u,x),Rf(oa,x,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Rf(i,e,t,n,s,r,o){let a=lh.distanceSqToPoint(i);if(a<t){let l=new O;lh.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Rn=class extends Wt{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Pa=class i extends lt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new O,h=new Re;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new it(o,3)),this.setAttribute("normal",new it(a,3)),this.setAttribute("uv",new it(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},vt=class i extends lt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],x=0,p=[],g=n/2,m=0;_(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new it(u,3)),this.setAttribute("normal",new it(d,3)),this.setAttribute("uv",new it(f,2));function _(){let y=new O,w=new O,E=0,S=(t-e)/n;for(let C=0;C<=r;C++){let b=[],M=C/r,I=M*(t-e)+e;for(let B=0;B<=s;B++){let k=B/s,V=k*l+a,L=Math.sin(V),A=Math.cos(V);w.x=I*L,w.y=-M*n+g,w.z=I*A,u.push(w.x,w.y,w.z),y.set(L,S,A).normalize(),d.push(y.x,y.y,y.z),f.push(k,1-M),b.push(x++)}p.push(b)}for(let C=0;C<s;C++)for(let b=0;b<r;b++){let M=p[b][C],I=p[b+1][C],B=p[b+1][C+1],k=p[b][C+1];(e>0||b!==0)&&(h.push(M,I,k),E+=3),(t>0||b!==r-1)&&(h.push(I,B,k),E+=3)}c.addGroup(m,E,0),m+=E}function v(y){let w=x,E=new Re,S=new O,C=0,b=y===!0?e:t,M=y===!0?1:-1;for(let B=1;B<=s;B++)u.push(0,g*M,0),d.push(0,M,0),f.push(.5,.5),x++;let I=x;for(let B=0;B<=s;B++){let V=B/s*l+a,L=Math.cos(V),A=Math.sin(V);S.x=b*A,S.y=g*M,S.z=b*L,u.push(S.x,S.y,S.z),d.push(0,M,0),E.x=L*.5+.5,E.y=A*.5*M+.5,f.push(E.x,E.y),x++}for(let B=0;B<s;B++){let k=w+B,V=I+B;y===!0?h.push(V,V+1,k):h.push(V+1,V,k),C+=3}c.addGroup(m,C,y===!0?1:2),m+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var La=class i extends lt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new it(r,3)),this.setAttribute("normal",new it(r.slice(),3)),this.setAttribute("uv",new it(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){let v=new O,y=new O,w=new O;for(let E=0;E<t.length;E+=3)f(t[E+0],v),f(t[E+1],y),f(t[E+2],w),l(v,y,w,_)}function l(_,v,y,w){let E=w+1,S=[];for(let C=0;C<=E;C++){S[C]=[];let b=_.clone().lerp(y,C/E),M=v.clone().lerp(y,C/E),I=E-C;for(let B=0;B<=I;B++)B===0&&C===E?S[C][B]=b:S[C][B]=b.clone().lerp(M,B/I)}for(let C=0;C<E;C++)for(let b=0;b<2*(E-C)-1;b++){let M=Math.floor(b/2);b%2===0?(d(S[C][M+1]),d(S[C+1][M]),d(S[C][M])):(d(S[C][M+1]),d(S[C+1][M+1]),d(S[C+1][M]))}}function c(_){let v=new O;for(let y=0;y<r.length;y+=3)v.x=r[y+0],v.y=r[y+1],v.z=r[y+2],v.normalize().multiplyScalar(_),r[y+0]=v.x,r[y+1]=v.y,r[y+2]=v.z}function h(){let _=new O;for(let v=0;v<r.length;v+=3){_.x=r[v+0],_.y=r[v+1],_.z=r[v+2];let y=g(_)/2/Math.PI+.5,w=m(_)/Math.PI+.5;o.push(y,1-w)}x(),u()}function u(){for(let _=0;_<o.length;_+=6){let v=o[_+0],y=o[_+2],w=o[_+4],E=Math.max(v,y,w),S=Math.min(v,y,w);E>.9&&S<.1&&(v<.2&&(o[_+0]+=1),y<.2&&(o[_+2]+=1),w<.2&&(o[_+4]+=1))}}function d(_){r.push(_.x,_.y,_.z)}function f(_,v){let y=_*3;v.x=e[y+0],v.y=e[y+1],v.z=e[y+2]}function x(){let _=new O,v=new O,y=new O,w=new O,E=new Re,S=new Re,C=new Re;for(let b=0,M=0;b<r.length;b+=9,M+=6){_.set(r[b+0],r[b+1],r[b+2]),v.set(r[b+3],r[b+4],r[b+5]),y.set(r[b+6],r[b+7],r[b+8]),E.set(o[M+0],o[M+1]),S.set(o[M+2],o[M+3]),C.set(o[M+4],o[M+5]),w.copy(_).add(v).add(y).divideScalar(3);let I=g(w);p(E,M+0,_,I),p(S,M+2,v,I),p(C,M+4,y,I)}}function p(_,v,y,w){w<0&&_.x===1&&(o[v]=_.x-1),y.x===0&&y.z===0&&(o[v]=w/2/Math.PI+.5)}function g(_){return Math.atan2(_.z,-_.x)}function m(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var Da=class i extends La{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},br=class i extends La{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},ln=class i extends lt{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],h=[],u=e,d=(t-e)/s,f=new O,x=new Re;for(let p=0;p<=s;p++){for(let g=0;g<=n;g++){let m=r+g/n*o;f.x=u*Math.cos(m),f.y=u*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),x.x=(f.x/t+1)/2,x.y=(f.y/t+1)/2,h.push(x.x,x.y)}u+=d}for(let p=0;p<s;p++){let g=p*(n+1);for(let m=0;m<n;m++){let _=m+g,v=_,y=_+n+1,w=_+n+2,E=_+1;a.push(v,y,E),a.push(y,w,E)}}this.setIndex(a),this.setAttribute("position",new it(l,3)),this.setAttribute("normal",new it(c,3)),this.setAttribute("uv",new it(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var tn=class i extends lt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new O,d=new O,f=[],x=[],p=[],g=[];for(let m=0;m<=n;m++){let _=[],v=m/n,y=0;m===0&&o===0?y=.5/t:m===n&&l===Math.PI&&(y=-.5/t);for(let w=0;w<=t;w++){let E=w/t;u.x=-e*Math.cos(s+E*r)*Math.sin(o+v*a),u.y=e*Math.cos(o+v*a),u.z=e*Math.sin(s+E*r)*Math.sin(o+v*a),x.push(u.x,u.y,u.z),d.copy(u).normalize(),p.push(d.x,d.y,d.z),g.push(E+y,1-v),_.push(c++)}h.push(_)}for(let m=0;m<n;m++)for(let _=0;_<t;_++){let v=h[m][_+1],y=h[m][_],w=h[m+1][_],E=h[m+1][_+1];(m!==0||o>0)&&f.push(v,y,E),(m!==n-1||l<Math.PI)&&f.push(y,w,E)}this.setIndex(f),this.setAttribute("position",new it(x,3)),this.setAttribute("normal",new it(p,3)),this.setAttribute("uv",new it(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var ei=class i extends lt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new O,u=new O,d=new O;for(let f=0;f<=n;f++)for(let x=0;x<=s;x++){let p=x/s*r,g=f/n*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(p),u.y=(e+t*Math.cos(g))*Math.sin(p),u.z=t*Math.sin(g),a.push(u.x,u.y,u.z),h.x=e*Math.cos(p),h.y=e*Math.sin(p),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(x/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let x=1;x<=s;x++){let p=(s+1)*f+x-1,g=(s+1)*(f-1)+x-1,m=(s+1)*(f-1)+x,_=(s+1)*f+x;o.push(p,g,_),o.push(g,m,_)}this.setIndex(o),this.setAttribute("position",new it(a,3)),this.setAttribute("normal",new it(l,3)),this.setAttribute("uv",new it(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Na=class extends Pt{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}},Ye=class extends fn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zf,this.normalScale=new Re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},yn=class extends Ye{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Re(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return jt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Te(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Te(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Te(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function aa(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function jM(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function QM(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Cf(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s}function ap(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}var Gi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break t}o=t.length;break n}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ch=class extends Gi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:tr,endingEnd:tr}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case nr:r=e,a=2*t-n;break;case fa:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case nr:o=e,l=2*n-t;break;case fa:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,x=(n-t)/(s-t),p=x*x,g=p*x,m=-d*g+2*d*p-d*x,_=(1+d)*g+(-1.5-2*d)*p+(-.5+d)*x+1,v=(-1-f)*g+(1.5+f)*p+.5*x,y=f*g-f*p;for(let w=0;w!==a;++w)r[w]=m*o[h+w]+_*o[c+w]+v*o[l+w]+y*o[u+w];return r}},Oa=class extends Gi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},hh=class extends Gi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Cn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=aa(t,this.TimeBufferType),this.values=aa(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:aa(e.times,Array),values:aa(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new hh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Oa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ch(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case fr:t=this.InterpolantFactoryMethodDiscrete;break;case pr:t=this.InterpolantFactoryMethodLinear;break;case Cl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return fr;case this.InterpolantFactoryMethodLinear:return pr;case this.InterpolantFactoryMethodSmooth:return Cl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&jM(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Cl,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let u=a*n,d=u-n,f=u+n;for(let x=0;x!==n;++x){let p=t[u+x];if(p!==t[d+x]||p!==t[f+x]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Cn.prototype.TimeBufferType=Float32Array;Cn.prototype.ValueBufferType=Float32Array;Cn.prototype.DefaultInterpolation=pr;var Wi=class extends Cn{constructor(e,t,n){super(e,t,n)}};Wi.prototype.ValueTypeName="bool";Wi.prototype.ValueBufferType=Array;Wi.prototype.DefaultInterpolation=fr;Wi.prototype.InterpolantFactoryMethodLinear=void 0;Wi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ua=class extends Cn{};Ua.prototype.ValueTypeName="color";var Ei=class extends Cn{};Ei.prototype.ValueTypeName="number";var uh=class extends Gi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)Rt.slerpFlat(r,0,o,c-a,o,c,l);return r}},Si=class extends Cn{InterpolantFactoryMethodLinear(e){return new uh(this.times,this.values,this.getValueSize(),e)}};Si.prototype.ValueTypeName="quaternion";Si.prototype.InterpolantFactoryMethodSmooth=void 0;var Xi=class extends Cn{constructor(e,t,n){super(e,t,n)}};Xi.prototype.ValueTypeName="string";Xi.prototype.ValueBufferType=Array;Xi.prototype.DefaultInterpolation=fr;Xi.prototype.InterpolantFactoryMethodLinear=void 0;Xi.prototype.InterpolantFactoryMethodSmooth=void 0;var wi=class extends Cn{};wi.prototype.ValueTypeName="vector";var Yi=class{constructor(e="",t=-1,n=[],s=kh){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Vn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(tb(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Cn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let h=QM(l);l=Cf(l,1,h),c=Cf(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Ei(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],h=c.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(c)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,d,f,x,p){if(f.length!==0){let g=[],m=[];ap(f,g,m,x),g.length!==0&&p.push(new u(d,g,m))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let u=0;u<c.length;u++){let d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},x;for(x=0;x<d.length;x++)if(d[x].morphTargets)for(let p=0;p<d[x].morphTargets.length;p++)f[d[x].morphTargets[p]]=-1;for(let p in f){let g=[],m=[];for(let _=0;_!==d[x].morphTargets.length;++_){let v=d[x];g.push(v.time),m.push(v.morphTarget===p?1:0)}s.push(new Ei(".morphTargetInfluence["+p+"]",g,m))}l=f.length*o}else{let f=".bones["+t[u].name+"]";n(wi,f+".position",d,"pos",s),n(Si,f+".quaternion",d,"rot",s),n(wi,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function eb(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ei;case"vector":case"vector2":case"vector3":case"vector4":return wi;case"color":return Ua;case"quaternion":return Si;case"bool":case"boolean":return Wi;case"string":return Xi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function tb(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=eb(i.type);if(i.times===void 0){let t=[],n=[];ap(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var Fi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},dh=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],x=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return x}return null}}},nb=new dh,Ti=class{constructor(e){this.manager=e!==void 0?e:nb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Ti.DEFAULT_MATERIAL_NAME="__DEFAULT";var mi={},fh=class extends Error{constructor(e,t){super(e),this.response=t}},uo=class extends Ti{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Fi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(mi[e]!==void 0){mi[e].push({onLoad:t,onProgress:n,onError:s});return}mi[e]=[],mi[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=mi[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,x=f!==0,p=0,g=new ReadableStream({start(m){_();function _(){u.read().then(({done:v,value:y})=>{if(v)m.close();else{p+=y.byteLength;let w=new ProgressEvent("progress",{lengthComputable:x,loaded:p,total:f});for(let E=0,S=h.length;E<S;E++){let C=h[E];C.onProgress&&C.onProgress(w)}m.enqueue(y),_()}},v=>{m.error(v)})}}});return new Response(g)}else throw new fh(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(x=>f.decode(x))}}}).then(c=>{Fi.add(e,c);let h=mi[e];delete mi[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=mi[e];if(h===void 0)throw this.manager.itemError(e),c;delete mi[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var ph=class extends Ti{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Fi.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=oo("img");function l(){h(),Fi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var Er=class extends Ti{constructor(e){super(e)}load(e,t,n,s){let r=new Wt,o=new ph(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Sr=class extends Ct{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},za=class extends Sr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Te(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},oc=new Ge,If=new O,Pf=new O,fo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Re(512,512),this.map=null,this.mapPass=null,this.matrix=new Ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lo,this._frameExtents=new Re(1,1),this._viewportCount=1,this._viewports=[new ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;If.setFromMatrixPosition(e.matrixWorld),t.position.copy(If),Pf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Pf),t.updateMatrixWorld(),oc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(oc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(oc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},mh=class extends fo{constructor(){super(new Bt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=mr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Fa=class extends Sr{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.target=new Ct,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new mh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Lf=new Ge,Jr=new O,ac=new O,gh=class extends fo{constructor(){super(new Bt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Re(4,2),this._viewportCount=6,this._viewports=[new ct(2,1,1,1),new ct(0,1,1,1),new ct(3,1,1,1),new ct(1,1,1,1),new ct(3,0,1,1),new ct(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Jr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Jr),ac.copy(n.position),ac.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ac),n.updateMatrixWorld(),s.makeTranslation(-Jr.x,-Jr.y,-Jr.z),Lf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lf)}},ti=class extends Sr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new gh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},xh=class extends fo{constructor(){super(new Bi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},wr=class extends Sr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.target=new Ct,this.shadow=new xh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var qi=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var ka=class extends Ti{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Fi.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Fi.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Fi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Fi.add(e,l),r.manager.itemStart(e)}};var Ba=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Df(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Df();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Df(){return performance.now()}var _h=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let s,r,o;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,s=this.valueSize,r=e*s+s,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==s;++a)n[r+a]=n[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(n,r,0,a,s)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,s=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let l=t*this._origIndex;this._mixBufferRegion(n,s,l,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,s);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,s=n*this._origIndex;e.getValue(t,s);for(let r=n,o=s;r!==o;++r)t[r]=t[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,s,r){if(s>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,s){Rt.slerpFlat(e,t,e,t,e,n,s)}_slerpAdditive(e,t,n,s,r){let o=this._workIndex*r;Rt.multiplyQuaternionsFlat(e,o,e,t,e,n),Rt.slerpFlat(e,t,e,t,e,o,s)}_lerp(e,t,n,s,r){let o=1-s;for(let a=0;a!==r;++a){let l=t+a;e[l]=e[l]*o+e[n+a]*s}}_lerpAdditive(e,t,n,s,r){for(let o=0;o!==r;++o){let a=t+o;e[a]=e[a]+e[n+o]*s}}},Vh="\\[\\]\\.:\\/",ib=new RegExp("["+Vh+"]","g"),Gh="[^"+Vh+"]",sb="[^"+Vh.replace("\\.","")+"]",rb=/((?:WC+[\/:])*)/.source.replace("WC",Gh),ob=/(WCOD+)?/.source.replace("WCOD",sb),ab=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Gh),lb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Gh),cb=new RegExp("^"+rb+ob+ab+lb+"$"),hb=["material","materials","bones","map"],yh=class{constructor(e,t,n){let s=n||at.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},at=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ib,"")}static parseTrackName(e){let t=cb.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);hb.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};at.Composite=yh;at.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};at.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};at.prototype.GetterByBindingType=[at.prototype._getValue_direct,at.prototype._getValue_array,at.prototype._getValue_arrayElement,at.prototype._getValue_toArray];at.prototype.SetterByBindingTypeAndVersioning=[[at.prototype._setValue_direct,at.prototype._setValue_direct_setNeedsUpdate,at.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[at.prototype._setValue_array,at.prototype._setValue_array_setNeedsUpdate,at.prototype._setValue_array_setMatrixWorldNeedsUpdate],[at.prototype._setValue_arrayElement,at.prototype._setValue_arrayElement_setNeedsUpdate,at.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[at.prototype._setValue_fromArray,at.prototype._setValue_fromArray_setNeedsUpdate,at.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var vh=class{constructor(e,t,n=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=s;let r=t.tracks,o=r.length,a=new Array(o),l={endingStart:tr,endingEnd:tr};for(let c=0;c!==o;++c){let h=r[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Fh,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){let s=this._clip.duration,r=e._clip.duration,o=r/s,a=s/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let s=this._mixer,r=s.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=s._lendControlInterpolant(),this._timeScaleInterpolant=a);let l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,s){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Tg:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulateAdditive(a);break;case kh:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulate(s,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,s=this.time+e,r=this._loopCount,o=n===wg;if(e===0)return r===-1?s:o&&(r&1)===1?t-s:s;if(n===zh){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),s>=t||s<0){let a=Math.floor(s/t);s-=t*a,r+=Math.abs(a);let l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=s;if(o&&(r&1)===1)return t-s}return s}_setEndings(e,t,n){let s=this._interpolantSettings;n?(s.endingStart=nr,s.endingEnd=nr):(e?s.endingStart=this.zeroSlopeAtStart?nr:tr:s.endingStart=fa,t?s.endingEnd=this.zeroSlopeAtEnd?nr:tr:s.endingEnd=fa)}_scheduleFading(e,t,n){let s=this._mixer,r=s.time,o=this._weightInterpolant;o===null&&(o=s._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=t,a[1]=r+e,l[1]=n,this}},ub=new Float32Array(1),Ss=class extends Mi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let n=e._localRoot||this._root,s=e._clip.tracks,r=s.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName,h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==r;++u){let d=s[u],f=d.name,x=h[f];if(x!==void 0)++x.referenceCount,o[u]=x;else{if(x=o[u],x!==void 0){x._cacheIndex===null&&(++x.referenceCount,this._addInactiveBinding(x,l,f));continue}let p=t&&t._propertyBindings[u].binding.parsedPath;x=new _h(at.create(n,f,p),d.ValueTypeName,d.getValueSize()),++x.referenceCount,this._addInactiveBinding(x,l,f),o[u]=x}a[u].resultBuffer=x.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,n)}let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let s=this._actions,r=this._actionsByClip,o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=s.length,s.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],s=e._cacheIndex;n._cacheIndex=s,t[s]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;let u=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let s=this._bindingsByRootAndName,r=this._bindings,o=s[t];o===void 0&&(o={},s[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,s=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[s],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[s]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new Oa(new Float32Array(2),new Float32Array(2),1,ub),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let s=t||this._root,r=s.uuid,o=typeof e=="string"?Yi.findByName(s,e):e,a=o!==null?o.uuid:e,l=this._actionsByClip[a],c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=kh),l!==void 0){let u=l.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;let h=new vh(this,o,t,n);return this._bindAction(h,c),this._addInactiveAction(h,a,r),h}existingAction(e,t){let n=t||this._root,s=n.uuid,r=typeof e=="string"?Yi.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[s]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,s=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(s,e,r,o);let a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){let o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){let c=o[a];this._deactivateAction(c);let h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete s[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(let o in r){let a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var Nf=new Ge,Ha=class{constructor(e,t,n=0,s=1/0){this.ray=new vs(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new ao,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Nf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Nf),this}intersectObject(e,t=!0,n=[]){return Mh(e,this,n,t),n.sort(Of),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Mh(e[s],this,n,t);return n.sort(Of),n}};function Of(i,e){return i.distance-e.distance}function Mh(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Mh(r[o],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bh);var Ya={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var vn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},db=new Bi(-1,1,1,-1,0,1),Wh=class extends lt{constructor(){super(),this.setAttribute("position",new it([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new it([0,2,0,0,2,0],2))}},fb=new Wh,Zi=class{constructor(e){this._mesh=new ge(fb,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,db)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var qa=class extends vn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Pt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ki.clone(e.uniforms),this.material=new Pt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Zi(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var go=class extends vn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Ka=class extends vn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Za=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Re);this._width=n.width,this._height=n.height,t=new on(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Gn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new qa(Ya),this.copyPass.material.blending=Jn,this.clock=new Ba}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}go!==void 0&&(o instanceof go?n=!0:o instanceof Ka&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Re);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var $a=class extends vn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Te}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var lp={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Te(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Ar=class i extends vn{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new Re(e.x,e.y):new Re(256,256),this.clearColor=new Te(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new on(r,o,{type:Gn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new on(r,o,{type:Gn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new on(r,o,{type:Gn});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}let a=lp;this.highPassUniforms=Ki.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Pt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Re(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Ya;this.copyUniforms=Ki.clone(h.uniforms),this.blendMaterial=new Pt({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:ht,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Te,this.oldClearAlpha=1,this.basic=new We,this.fsQuad=new Zi(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Re(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Pt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Re(.5,.5)},direction:{value:new Re(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new Pt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};Ar.BlurDirectionX=new Re(1,0);Ar.BlurDirectionY=new Re(0,1);var cp={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Ja=class extends vn{constructor(){super();let e=cp;this.uniforms=Ki.clone(e.uniforms),this.material=new Na({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Zi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Qe.getTransfer(this._outputColorSpace)===pt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Sh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===wh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Th?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===po?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ah?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Rh&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Xh=[{id:"icb01",title:"I CALL BULLSHIT \xB7 VOL 1",world:"ramparts"},{id:"icb04",title:"THE PERSIAN THREAD \xB7 VOL 4",world:"ramparts"},{id:"icb05",title:"BEFORE THE PLAYBOOK \xB7 VOL 5",world:"ramparts"},{id:"shogun",title:"THE BLACK SHOGUN ANCESTORS",world:"ramparts"},{id:"mansas",title:"NO BS NO CAP \xB7 THE MANSAS",world:"ramparts"},{id:"icb06",title:"THE FIRST THOUGHT \xB7 VOL 6",world:"venus"},{id:"icb08",title:"BEFORE THE BEGINNING \xB7 VOL 8",world:"venus"},{id:"nabta",title:"NO BS NO CAP \xB7 NABTA PLAYA",world:"venus"},{id:"cs1",title:"COSMIC SHIFTS \xB7 VOL 1",world:"venus"},{id:"cs2",title:"COSMIC SHIFTS \xB7 VOL 2",world:"venus"},{id:"icb02",title:"THE FIRST ERASURE \xB7 VOL 2",world:"archive"},{id:"icb03",title:"THE WEB OF AMNESIA \xB7 VOL 3",world:"archive"},{id:"icb07",title:"THE PLAGUE INHERITANCE \xB7 VOL 7",world:"archive"},{id:"icb10",title:"B.S. BODY SNATCHERS \xB7 VOL 10",world:"archive"},{id:"jinn",title:"POLY JINN-ISIS",world:"archive"},{id:"oms",title:"THE OCCULT MEDIA SPELL",world:"archive"},{id:"legacy",title:"THE LEGACY DOCUMENT",world:"archive"}],hp={ramparts:[{id:"r01",v:"icb01",t:"KHEM BECAME CHEMISTRY",l:"The word chemistry derives from Khem, the ancient Egyptian name for Egypt: the Black Land. Ka became the bioelectromagnetic field, Ma'at became natural law, Nun became the quantum vacuum. The science was renamed and re-presented without its authors' names attached. This is not interpretation. This is etymology.",s:"I Call Bullshit \xB7 Ch. 2, The Etymology Is the Evidence"},{id:"r02",v:"icb01",t:"VRIL. ORGONE. SCALAR. SAME THEFT.",l:"In 1938 Himmler's SS Ahnenerbe sent an expedition to Tibet to claim its spiritual science as Aryan property. The hidden force they called vril was rebranded as orgone, then scalar energy, then torsion fields. Each rebrand erased the African and Asian origins further. Different names. Same theft.",s:"I Call Bullshit \xB7 Ch. 3, The Nazi-Tibet Operation"},{id:"r03",v:"icb01",t:"THE FOUR MOVES",l:"The suppression has always had four moves: Physical Destruction, Institutional Exclusion, Terminological Appropriation, and Economic Suppression and Microdosing. They burned the libraries. They renamed the science. They excluded the scientists. Now they sell you the microdose and call it enlightenment.",s:"I Call Bullshit \xB7 Ch. 5, The Suppression Has Always Had Four Moves"},{id:"r04",v:"icb04",t:"ELAM BUILT BEFORE PERSIA",l:"The Elamites raised Chogha Zanbil, a five-tiered ziggurat 60 meters high, around 1250 BCE, and ruled from Susa, inhabited since 4395 BCE. Herodotus listed Aithiopes, burnt-faced people, among the Persian Empire's subjects. The Iranian national narrative pretends they never existed. This is not a knowledge gap. It is a policy.",s:"The Persian Thread \xB7 Part II, The Elamites"},{id:"r05",v:"icb04",t:"THE DOUBLE DELETION",l:"One sentence erases two truths: they are dark because it is very, very hot in the southern part of Iran. Blaming the climate erases the ancient Elamite presence and the Indian Ocean slave trade at once, leaving 1 to 2 million Afro-Iranians in a historical vacuum. Sun doesn't cause ancestry.",s:"The Persian Thread \xB7 Part IV, The Double Deletion"},{id:"r06",v:"icb04",t:"THEY COULDN'T ERASE THE DRUMS",l:"Bandari music of southern Iran is East African memory passed body to body. Its Zar rituals still name spirits Pepe and Mature, from the Swahili, and Cinyase, from the Nyasa language of Malawi. Slavery in Iran was abolished only in 1929. The archive survives in the body when it cannot survive in the books.",s:"The Persian Thread \xB7 Part V, The Living Archive"},{id:"r07",v:"icb05",t:"WHITE SKIN IS YOUNGER THAN KEMET",l:"Ancient DNA shows European hunter-gatherers in Spain, Luxembourg and Hungary still lacked the light-skin variants SLC24A5 and SLC45A2. For 30,000 years the people of Europe were dark-skinned. White skin is younger than agriculture, younger than Elam, younger than Kemet. It is not the origin of anything. It is a result.",s:"Before the Playbook \xB7 Part I, White Skin Is Not Ancient"},{id:"r08",v:"icb05",t:"SKY FATHER OVER EARTH MOTHER",l:"Around 3300 BCE the Yamnaya came off the Pontic-Caspian steppe with the horse, the wheel, bronze weapons and a Sky Father god. In about 500 years they accounted for up to 75% of central Europe's DNA, replacing goddess-centered Old Europe, whose cities were larger than the earliest cities of Mesopotamia.",s:"Before the Playbook \xB7 Parts II-IV, Old Europe and the Yamnaya"},{id:"r09",v:"icb05",t:"NOT CORRUPTED. SURROUNDED.",l:"The Hyksos were not spiritually corrupted from within. By the time they were expelled in 1550 BCE, the world around them had been running the Yamnaya conquest operating system for 1,500 years. The playbook started when someone decided the Father in the Sky was more important than the Mother in the Earth.",s:"Before the Playbook \xB7 Preface and Part V"},{id:"r10",v:"shogun",t:"YASUKE WAS NOT A MYTH",l:"The Shinchoko-ki, a Japanese eyewitness chronicle, records an African man reaching Kyoto in 1581. Oda Nobunaga took him into personal service with a house, a stipend, a sword and the name Yasuke. He fought at Honno-ji in 1582. His strength surpassed that of 10 men. The African samurai is a documented fact.",s:"The Black Shogun Ancestors \xB7 Ch. I, Yasuke"},{id:"r11",v:"shogun",t:"THE GREAT GENERAL OF 797",l:"Sakanoue no Tamuramaro was named Sei-i Taishogun in 797, only the second man to hold the title, and his weapons were buried with him by imperial decree. Chamberlain in 1911, DuBois in 1915 and Woodson in 1922 named him Black. That scholarship was met not with refutation but with omission.",s:"The Black Shogun Ancestors \xB7 Ch. II, The Black Shogun"},{id:"r12",v:"shogun",t:"THE ASYMMETRIC STANDARD",l:"Scandinavian sagas were treated as serious evidence of Viking voyages to North America. Septimius Severus's Libyan origin is celebrated. Tamuramaro's potential African origin is treated as a curiosity. The standard applied to Black historical claims is demonstrably higher. I Call Bullshit on that asymmetry, on the record.",s:"The Black Shogun Ancestors \xB7 Ch. V, The Scholarly Battlefield"},{id:"r13",v:"mansas",t:"THE CHARTER OF KURUKAN FUGA",l:"Proclaimed after the victory at Kirina and held in the bodies of griots for nearly 800 years, the Manden Charter protected the right to life, made every child's education the duty of the entire society, and said women should be associated with all governance. Thirteenth century. UNESCO inscribed it in 2009.",s:"The Mansas \xB7 Part IV, The Kurukan Fuga"},{id:"r14",v:"mansas",t:"2,000 SHIPS WEST",l:"In Cairo in 1324 Mansa Musa told how the king before him sent 400 ships to find the furthest limit of the Atlantic, then sailed himself with 2,000 and never came back. Recorded by al-Umari, it proves an empire attempted the crossing more than 180 years before Columbus. The most aggressively suppressed part of the record.",s:"The Mansas \xB7 Part VI, The Atlantic Voyage of Mansa Muhammad ibn Qu"},{id:"r15",v:"mansas",t:"THE SISTER WHO WON KIRINA",l:"Nana Triban, sold into marriage with the sorcerer-king Sumanguru, played along until he bragged his secret: the spur of a white rooster could kill him. She fled to Sundiata's camp with it, and he tipped his arrow with it. The decisive weapon at Kirina was not his cavalry. It was his sister's mind.",s:"The Mansas \xB7 Part III, Nana Triban"},{id:"r16",v:"mansas",t:"QUEEN KASSI, CO-EQUAL RULER",l:"Mali reserved a throne-level role for a co-equal queen. When Mansa Suleyman tried to demote Kassi for a commoner, the noble women of court rebelled, and from sanctuary in the mosque she sent secret messages that sparked civil war. Ibn Battuta saw her receive gifts in her own right in 1352.",s:"The Mansas \xB7 Part V, Queen Kassi"}],venus:[{id:"v01",v:"icb06",t:"THE THREE THOUGHTS OF WAR",l:"If all is thought, war began as a thought. Three of them: I am separate from the Earth. There is not enough. The Other is my enemy. Believed deeply enough, long enough, and passed down through enough generations of children raised in fear, they became the entire edifice of 5,000 years of war.",s:"The First Thought \xB7 Part II, The Three Candidate First Thoughts"},{id:"v02",v:"icb06",t:"HOW A THOUGHT BECOMES AN EMPIRE",l:"Thought becomes story. Story becomes memory, then emotion, then instinct, then culture. Priesthood codifies culture into theology, theology into law, and law enforced by military power becomes civilization. Once it is law, nobody has to believe the thought consciously anymore. The law enforces it.",s:"The First Thought \xB7 Part III, The Transmission Mechanism"},{id:"v03",v:"icb06",t:"MY TRUTH IS THE FINAL MOVE",l:"After 5,000 years of suppressing access to cosmic truth through violence and erasure, the most elegant move needs no army: get people to abandon the concept of a truth accessible to all and replace it with 'my truth.' Kemet's answer was Maat, a cosmic order that existed before the human observer.",s:"The First Thought \xB7 Part V, My Truth vs. THE Truth"},{id:"v04",v:"icb08",t:"ONE MAN FOR EVERY 17 WOMEN",l:"Around 5,000 BCE the diversity of the male Y-chromosome collapsed across Africa, Europe and Asia to a level equal to one man reproducing for every 17 women. The official mask says warfare. Pull it off and the question remains: what was coordinated enough to do this on a planetary scale?",s:"Before the Beginning \xB7 Mask #1, The Genetic Bottleneck"},{id:"v05",v:"icb08",t:"ENKI VERSUS ENLIL",l:"The oldest written records on Earth describe a split: Enki, of wisdom and water, who warns Ziusudra of the flood and consistently favors humanity, and Enlil, of authority and control, who seeks to limit and destroy it. The same battle as Maat and Isfet, Earth Mother and Sky Father, in different centuries.",s:"Before the Beginning \xB7 Mask #4, The Sumerian Tablets"},{id:"v06",v:"icb08",t:"THE FLOOD CAME BEFORE GENESIS",l:"The Sumerian flood story, Epic of Gilgamesh tablet XI, predates the Genesis flood by at least 1,000 years: a divine warning, a man told to build a boat, animals taken aboard, a landing on a mountain, birds sent out to find land. The Genesis story is documented to come after.",s:"Before the Beginning \xB7 Mask #4, The Sumerian Tablets"},{id:"v07",v:"nabta",t:"OLDER THAN STONEHENGE",l:"By 4800 BCE the builders of Nabta Playa had raised the world's oldest known astronomical calendar circle, its stone gates aligned to the summer solstice sunrise, 2,000 years before Stonehenge. Its alignments may also track Sirius and Orion's Belt. Most Egyptologists Wendorf spoke to had never heard of it.",s:"No BS No Cap \xB7 Nabta Playa, Ch. 3 and 4"},{id:"v08",v:"nabta",t:"HATHOR WAS BORN IN THE SAHARA",l:"Around 5,500 BCE Nabta Playa's pastoralists buried sacrificial cattle in clay-lined chambers and left a cow-shaped stone, perhaps the oldest known sculpture in Egypt. Britannica says Hathor's worship began in dynastic times. Wrong. It began at Nabta Playa, 2,000 years before any dynastic Egyptian was born.",s:"No BS No Cap \xB7 Nabta Playa, Ch. 3, What They Actually Did"},{id:"v09",v:"nabta",t:"BLACK GENESIS",l:"History forgot Nabta Playa because 20th-century archaeology was looking toward the Fertile Crescent. Dental and skeletal analysis points to a sub-Saharan African people who, as the Sahara dried, moved east to the Nile. The lead excavators themselves called it a black genesis for Egyptian civilization.",s:"No BS No Cap \xB7 Nabta Playa, Ch. 1, 2 and 5"},{id:"v10",v:"cs1",t:"THE VENUS TABLE",l:"Dresden Codex: sixty-five Venus cycles of 584 days, corrected by subtracting 4 or 8 days. No fractions, no decimals, no algebra. Alternated nine to two, the corrections hold the table within one day of the real Venus for roughly 8,049 years. Somebody counted, and they were not guessing.",s:"Cosmic Shifts Vol. I \xB7 Ch. 1, Mesoamerica"},{id:"v11",v:"cs1",t:"WHERE YOUR 24 HOURS CAME FROM",l:"Kemet ran thirty-six decan stars, one per ten-day decade. About 18 rose on a night, about 7 were lost to twilight, and the 11 risings left marked 12 intervals. Mirror that onto daylight and you have the 24-hour day. It is not a Babylonian import. Every clock on Earth still runs on this arithmetic.",s:"Cosmic Shifts Vol. I \xB7 Ch. 2, Kemet"},{id:"v12",v:"cs1",t:"THE DECREE THEY IGNORED",l:"In 238 BCE a synod of Egyptian priests at Canopus ordered a sixth epagomenal day every fourth year, giving the reason outright: the rise of Sothis advances to another day in every 4 years. It was not implemented. Somebody understood the problem exactly, said so in writing, and was ignored.",s:"Cosmic Shifts Vol. I \xB7 Ch. 2, The Sothic Cycle"},{id:"v13",v:"cs1",t:"THE COUNT IS STILL ALIVE",l:"Highland Guatemalan daykeepers, the ajq'ijab', have kept the 260-day Tzolk'in without interruption through the Conquest, the colonial period and twentieth-century violence. Somebody counted today's day-sign this morning. The Dreamspell 13-Moon calendar is a modern invention wearing its name.",s:"Cosmic Shifts Vol. I \xB7 Ch. 1, Mesoamerica"},{id:"v14",v:"cs2",t:"A NUMBER THAT SURVIVED",l:"Hipparchus found precession around 129 BCE by comparing his measure of Spica with one Timocharis wrote down 160 years before. It is invisible in one lifetime; its discovery was an act of archival comparison. His own treatise is lost, known only through Ptolemy. Transmission is everything.",s:"Cosmic Shifts Vol. II \xB7 Ch. 10, Precession"},{id:"v15",v:"cs2",t:"THE DIGGING STARS",l:"One small cluster served as a calendar on every inhabited continent. Xhosa isiLimela, Sotho Selemela, Swahili Kilimia: the digging stars, whose winter rising opens the planting year. M\u0101ori Matariki opens the new year. Hesiod timed harvest and ploughing by it. The Pleiades, read the world over.",s:"Cosmic Shifts Vol. II \xB7 Ch. 13, The Pleiades"},{id:"v16",v:"cs2",t:"THE FARMERS WHO READ EL NI\xD1O",l:"Andean farmers on the altiplano watch the Pleiades around 24 June and forecast the rains from how bright and numerous the stars look, a practice documented within decades of the Spanish conquest and still done now. A 2000 study in Nature proposed the mechanism: El Ni\xF1o cirrus dims the cluster.",s:"Cosmic Shifts Vol. II \xB7 Ch. 13, The One Place Layer 3 Might Pass"}],archive:[{id:"a01",v:"icb02",t:"THE FIRST ERASURE",l:"The playbook didn't start in 1938. It started in 1550 BCE. The Hyksos, a melanated Canaanite-Hamitic people, grew into Egypt's Nile Delta for generations before they ruled it. Ahmose I burned Avaris, sacked their tombs and chased them into Canaan. And the first people they erased looked like you.",s:"The First Erasure \xB7 Preface and Part II, Move 1"},{id:"a02",v:"icb02",t:"THE KING WHO SAVED THE PAPYRI",l:"Hyksos King Apophis had scribes copy the Rhind Mathematical Papyrus and the Edwin Smith Surgical Papyrus, the world's oldest known surgical document. Their chariot and composite bow built the New Kingdom. Then they were left off the temple king lists. The science was kept. The scientists were erased.",s:"The First Erasure \xB7 Ch. 3 and Part II, Moves 2-3"},{id:"a03",v:"icb02",t:"AVARIS. ALEXANDRIA. CORDOBA.",l:"The line is unbroken: the Hyksos cut from the king lists, the Library of Alexandria dismantled and Hypatia murdered, the libraries of Cordoba and Granada burned by the Inquisition. They burned Avaris. They burned Alexandria. They burned Cordoba. Then they sold the stolen science back to us as enlightenment.",s:"The First Erasure \xB7 Part IV, The Unbroken Line"},{id:"a04",v:"icb03",t:"MOOR MEANT BLACK",l:"From the Middle Ages to the 17th century Europeans depicted Moors as black and called Muslims of any other complexion 'white Moors.' An 1817 encyclopedia still defined moor as a negro, a blackamoor. The default Moor was Black. Modern literature reversed it, and that is not accidental.",s:"The Web of Amnesia \xB7 Thread 3, The Blackamoors"},{id:"a05",v:"icb03",t:"THE HOOD CAME FROM SPAIN",l:"The pointed hood began as the capirote, forced on those the Spanish Inquisition convicted of heresy or impure blood, while limpieza de sangre made ancestry, not faith, the basis for rights. Its targets were Moriscos and converted Jews. The target changed. The uniform stayed the same.",s:"The Web of Amnesia \xB7 Threads 4 and 6, The Moriscos and the KKK"},{id:"a06",v:"icb07",t:"THEY WERE LACKING COWS",l:"The plagues did not originate in Africa. They came from grain silos, animal pens and dense farming settlements: 8 of 15 major temperate diseases reached humans from domestic animals. Cows gave us measles. They called Indigenous peoples primitive for not having diseases. They were lacking cows.",s:"The Plague Inheritance \xB7 Parts I and III"},{id:"a07",v:"icb07",t:"IMMUNITY BUILT ON GRAVES",l:"European immunity was not a biological gift. It was the inherited scar tissue of 5,000 years of civilizational sickness. When the diseases reached the Americas, up to 95% of the Indigenous population died. They were healthy until a sick civilization arrived and called the catastrophe an act of God.",s:"The Plague Inheritance \xB7 Parts III and IV"},{id:"a08",v:"icb10",t:"THE BODY SNATCHERS' OFFER",l:"The final phase of the five-thousand-year epistemicide is not another law, curriculum or algorithm. It is an offer from transhumanism, the Silicon Valley theology of body abandonment: leave your biological body behind, something better is waiting. This document is why you should not take that offer.",s:"B.S. Body Snatchers \xB7 Authors' Declaration"},{id:"a09",v:"jinn",t:"ONE PERSON. ONE CHROMOSOME.",l:"The SLC24A5 mutation behind European light skin traces to a single ancestral copy that arose in West Asia, possibly 22,000 to 29,000 years ago. Most European selection for pale skin came in the last 8,000 years. It is a reduced production of melanin. That is the entirety of what it is.",s:"POLY JINN-ISIS \xB7 Ch. 1, The Indictment, Section III"},{id:"a10",v:"jinn",t:"HOW WHITE SKIN WAS GRAFTED",l:"In 1795 Blumenbach coined 'Caucasian' and cast white skin not as a recent low-UV mutation but as humanity's original form, every other color a degeneration. Morton, Nott, Gliddon and Agassiz built polygenism on top. The mutation became a mythology, then a mandate. The meaning was assigned.",s:"POLY JINN-ISIS \xB7 Ch. 1, The Indictment, Section IV"},{id:"a11",v:"jinn",t:"FROM SKULLS TO CLASSROOMS",l:"Samuel Morton manipulated skull measurements to fit a predetermined racial hierarchy. Darwin dealt polygenism a death blow, but it mutated into eugenics. In 1960 Louisiana made Race and Reason required reading for every high school student. The pipeline from Morton's skulls to Louisiana's classrooms was direct.",s:"POLY JINN-ISIS \xB7 Ch. 1, The Indictment, Section IV"},{id:"a12",v:"oms",t:"THE INVERSION DOCTRINE",l:"The spell runs on stolen Kemetic science turned upside down. Crowley's Thelema inverted it for power, and Kenneth Grant's Typhonian Order made Set, the chaos against which Ma'at defines itself, the object of worship. Cosmic balance was replaced with the worship of entropy.",s:"The Occult Media Spell \xB7 Ch. 1, The Inversion Doctrine"},{id:"a13",v:"oms",t:"THE LAB AND THE STUDIO",l:"The CIA's MK-Ultra used drugs, hypnosis, sensory deprivation and trauma to split personalities, experimenting on prisoners, mental patients and, disproportionately, Black Americans. Operation Mockingbird recruited hundreds of journalists, editors and executives. The line between intelligence and entertainment blurred.",s:"The Occult Media Spell \xB7 Ch. 2, MK-Ultra and Operation Mockingbird"},{id:"a14",v:"oms",t:"HIP-HOP, HIJACKED",l:"Hip-hop was born in the Bronx as peace, love, unity and having fun: a weapon of the people. The industry's gatekeepers moved to co-opt it. Consciousness and social commentary gave way to materialism, violence and nihilism. Conscious artists were marginalized; the most toxic narratives were rewarded.",s:"The Occult Media Spell \xB7 Ch. 4, The Trinity of Trauma"},{id:"a15",v:"oms",t:"GRANDMASTER AND GRAND WIZARD",l:"Asian martial arts titles meant teacher: Sensei, Shihan, Soke, Sabom-nim, Sifu. Grandmaster is a Western invention, from the Grand Master of the Templars and Freemasonry, the same fraternal well that gave the KKK its Grand Wizard. Reclaim the authentic titles. Honor the melanated lineage.",s:"The Occult Media Spell \xB7 Ch. 7, The Grandmaster and the Grand Wizard"},{id:"a16",v:"oms",t:"THE COUNTER-SPELL",l:"Teachers of melanin, consciousness and African spirituality, from Dr. Delbert Blair to Bobby Hemmitt to Dr. Laila Afrika, have seen their books made hard to find and their lectures scrubbed from the internet. The system does not waste its energy on those who pose no threat. They are the counter-spell.",s:"The Occult Media Spell \xB7 Ch. 5, The Counter-Spell"},{id:"a17",v:"legacy",t:"ALEXANDRIA: HOUSE OF STOLEN GOODS",l:"The Library of Alexandria, founded under Ptolemy I, was not a gift to the world. It was a repository for stolen goods, mandated to collect the texts of every conquered civilization. Ships arriving in Alexandria had to surrender their books for copying. The originals were kept; copies were returned.",s:"The Legacy Document \xB7 Ch. 2.2, Alexander and the Looting of the Mind"},{id:"a18",v:"legacy",t:"THE FIRST EPISTEMICIDE",l:"Alexandria burned in stages: Caesar's harbor fire in 48 BCE, Aurelian's attack in 270-275 CE, Theodosius I's destruction of the Serapeum in 391 CE. Steal the knowledge, destroy the source, present it as original. You cannot be accused of plagiarism if the original no longer exists.",s:"The Legacy Document \xB7 Ch. 2.4, The Burning of the Libraries"},{id:"a19",v:"legacy",t:"GRANADA, 1502",l:"After Granada fell, Cardinal Cisneros ordered all Arabic manuscripts in Granada burned in 1502, an estimated 80,000 to 1,000,000 volumes. What Europe had learned in Moorish universities for three centuries was repackaged as the Renaissance, its origins erased. The second great epistemicide.",s:"The Legacy Document \xB7 Ch. 5.1, The Reconquista"},{id:"a20",v:"legacy",t:"ONE SERPENT, SEVEN SKINS",l:"The serpent does not die. It sheds its skin: military conquest, religious fabrication, Moorish appropriation, colonial slavery, institutional control, pharmaceutical suppression, and now Kemetic science retold in quantum vocabulary with melanin omitted. One serpent. Seven skins. One target.",s:"The Legacy Document \xB7 Ch. 15.1, The Serpent's Seven Skins"}]};var ue={purple:"#2D1B4E",gold:"#C9A84C",orange:"#E8843C",ink:"#0B0713",cyan:"#4CE0E0",red:"#C43B3B",char:"#B6D02E",violet:"#9b6cff",blue:"#2f6bff",hotred:"#ff2b2b",pink:"#ff7ad9",green:"#3ce08f"},Qa=7.4;var up=9.6,dp=8.4,fp=27,Yh=.55,pp=1.4,mp=1,gp=3,qh=21,xp=.16,Kh=.42,_p=.22,yp=.24,Mn=.46;var vp=2;var el=3,Mt={single:{name:"ASTROLABE BOLT",col:ue.gold,cd:.13,spd:24,size:.16,dmg:1},scatter:{name:"GIRIH SCATTER",col:ue.cyan,cd:.17,spd:22,size:.14,dmg:1},rapid:{name:"ALGEBRA RIG",col:"#bfe6ff",cd:.06,spd:28,size:.11,dmg:.6},beam:{name:"ASTROLABE BEAM",col:"#ffffff",cd:.24,spd:34,size:.13,dmg:1.6,pierce:!0},flame:{name:"ALCHEMICAL FLAME",col:ue.orange,cd:.11,spd:13,size:.34,dmg:.5,life:.42}},Mp={single:"ASTROLABE LANCE",scatter:"GIRIH RING",rapid:"ALGEBRA SWARM",beam:"ASTROLABE SWEEP",flame:"ALCHEMICAL BLOOM"},bp=["single","scatter","rapid","beam","flame"],ws=.9,Rr=3,ja=["#e8a84c","#5fe0cf","#f29bb0","#fff3c4"],ni=[{dmg:4,reach:1.6,arc:1.35,t:.24,speed:2.1,hitstop:.09,shake:3,knock:8,unarmed:!1,launch:!1,preFreeze:.05,col:ja[0],name:"IAIJUTSU"},{dmg:3.6,reach:1.55,arc:1,t:.2,speed:2.3,hitstop:.08,shake:4,knock:10,unarmed:!1,launch:!1,preFreeze:0,col:ja[1],name:"KESA-GIRI"},{dmg:3.2,reach:1.6,arc:.45,t:.15,speed:2.8,hitstop:.07,shake:3,knock:14,unarmed:!1,launch:!1,preFreeze:0,col:ja[2],name:"TSUKI"},{dmg:10,reach:1.7,arc:1.4,t:.36,speed:1.5,hitstop:.22,shake:9,knock:22,unarmed:!1,launch:!0,preFreeze:.05,col:ja[3],name:"TACHI ULTRA"}],xo=ni.length,CS=ni.map(i=>i.dmg),tl=2.5,$i=1.15,Ep=14;var Zh=.5,Ji=100,Sp=20,wp=34,$h=1.2,Tp=30,Ap=.18,ji=1.15,Rp={grunt:{hp:3,spd:3.7,r:.5,aggro:13,contact:!0},shooter:{hp:5,spd:2.9,r:.5,aggro:15,keep:8,shootCd:1.7,bspd:9,armor:.5,guard:3},flyer:{hp:3,spd:4.6,r:.55,aggro:16,hover:3.3,diveCd:3.6},brute:{hp:16,spd:2.5,r:.95,aggro:12,contact:!0,armor:.65,guard:5}},Cp=3.2,Ot={off:[1.25,3.3,5.9],fov:58,lerp:6,near:.3,far:260,bossZoom:1.5,lookHeight:1.55,overhead:[0,10.5,9.5],trail:2.6,minDist:2.2},bn={ramparts:{key:"ramparts",name:"THE RAMPARTS",tag:"Moorish coast at dusk \xB7 girih arches \xB7 the book-burning engine at the gate",rail:"COAST \u2192 THE GATE",boss:"engine",accent:ue.gold,sky:["#3a2352","#241542","#0a0618"],fog:"#1a1030",win:"The erasure-engine is scrap. The libraries breathe another day. The knowledge stays UNERASED."},venus:{key:"venus",name:"NEO-VENUS",tag:"terraformed sky-city \xB7 Earth, the Moon, Jupiter & Saturn overhead \xB7 the Censor Array",rail:"SKY-DOCK \u2192 THE ARRAY",boss:"censor",accent:ue.pink,sky:["#150826","#9a4a3c","#c8783a"],fog:"#3a1a3a",win:"The Censor Array is dark. Venus keeps her records. The knowledge stays UNERASED."},archive:{key:"archive",name:"THE ARCHIVE DEEP",tag:"the vault beneath the library \xB7 candle-lit stacks \xB7 the Redactor press",rail:"STACKS \u2192 THE PRESS",boss:"redactor",accent:ue.violet,sky:["#07040c","#0d0716","#05030a"],fog:"#0a0614",win:"The Redactor is jammed mid-stamp. Every page it swallowed comes back. The knowledge stays UNERASED."}},ii=["ramparts","venus","archive"],Ft={melvinci:{key:"melvinci",queen:!1,name:"MELVINCI",title:"THE KING",skin:"#5f3a20",skinD:"#3e2412",robe:"#241a5e",robeL:"#39299a",robeD:"#150e38",pant:"#181427",hair:"#1a1112",wrapB:ue.gold,aura:ue.cyan,accent:ue.cyan,gem:"#2ee6a8"},kimaya:{key:"kimaya",queen:!0,name:"KI-MAYA",title:"THE QUEEN",skin:"#5f3a20",skinD:"#3e2412",robe:"#0e5c3c",robeL:"#18936a",robeD:"#07321f",pant:"#0d4a32",hair:"#191021",wrapB:ue.gold,aura:ue.green,accent:ue.green,gem:"#ffd76a"},bizzle:{key:"bizzle",queen:!1,name:"3BIZZLE",title:"023 DESTROYER OF INJUSTICES",skin:"#4a2c18",skinD:"#2e1a0c",robe:"#0b0b0d",robeL:"#26262b",robeD:"#050506",pant:"#101012",hair:"#140c0a",wrapB:ue.gold,aura:"#2ee6a8",accent:"#2ee6a8",gem:"#ff2b2b"},mahal:{key:"mahal",queen:!0,name:"MAJESTIC HEALER",title:"aka COSMIC08B \xB7 VLTRN8",skin:"#6b4028",skinD:"#452615",robe:"#5b2a9e",robeL:"#8a4fd6",robeD:"#2f1456",pant:"#3a1a66",hair:"#1a0f0c",wrapB:ue.gold,aura:"#b56cff",accent:"#b56cff",gem:"#e8c25a"}},Ip={engine:{name:"ERASURE-ENGINE",wake:"RAISE THE WARD  [V]",hp:80},censor:{name:"CENSOR ARRAY",wake:"CENSOR ARRAY \u2014 SHOOT THE GAPS",hp:90},redactor:{name:"THE REDACTOR",wake:"THE REDACTOR \u2014 DASH THE SHOCKWAVE",hp:70}},Jh=[{key:"SCRIBE",min:0,hint:"Reach 4,000 style for SCHOLAR \u2014 parries, dash kills and blade finishers grow the multiplier."},{key:"SCHOLAR",min:4e3,hint:"Reach 8,000 style for SAGE \u2014 chain parries; three in a row arm the gold cannon."},{key:"SAGE",min:8e3,hint:"Take zero hits in the boss fight for UNERASED."},{key:"UNERASED",min:8e3,hint:"The knowledge stays UNERASED. There is nothing above this.",noHitBoss:!0}],jh="unerased3d.lb.v1",Qh="unerased3d.codex.v2",_o=hp;function pb(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}var Xn=(i,e)=>i+","+e,mb={ramparts:{seed:11,style:"stone",rooms:[{id:"coast",w:10,h:8,kind:"start"},{id:"court",w:14,h:10,dir:"N",foes:[["grunt",2],["shooter",1]],boxes:["scatter"],pillars:!0,terrace:!0},{id:"stair",w:6,h:10,dir:"N",foes:[["grunt",2]]},{id:"plaza",w:16,h:12,dir:"E",foes:[["grunt",3],["shooter",2]],boxes:["beam"],pillars:!0},{id:"wall",w:8,h:6,dir:"N",len:5,foes:[["shooter",2]]},{id:"bastion",w:14,h:12,dir:"N",foes:[["grunt",2],["shooter",1],["brute",1]],boxes:["rapid","power"],pillars:!0,terrace:!0},{id:"approach",w:10,h:10,dir:"W",len:5,foes:[["grunt",2],["shooter",2]],boxes:["flame","power"]},{id:"gate",w:15,h:11,dir:"N",len:5,kind:"boss",terrace:"boss"}]},venus:{seed:23,style:"slab",rooms:[{id:"dock",w:10,h:8,kind:"start"},{id:"pad1",w:12,h:10,dir:"N",len:6,foes:[["grunt",1],["shooter",1],["flyer",1]],boxes:["rapid"]},{id:"span",w:8,h:8,dir:"E",len:7,foes:[["flyer",2]]},{id:"pad2",w:14,h:12,dir:"N",len:6,foes:[["grunt",2],["shooter",2],["flyer",1]],boxes:["scatter","power"],pillars:!0,terrace:!0},{id:"bridge",w:6,h:8,dir:"W",len:8,foes:[["flyer",2]]},{id:"pad3",w:12,h:12,dir:"N",len:6,foes:[["grunt",2],["shooter",2]],boxes:["beam"],terrace:!0},{id:"hangar",w:12,h:10,dir:"N",len:6,foes:[["shooter",2],["flyer",1],["brute",1]],boxes:["flame","power"]},{id:"array",w:16,h:12,dir:"N",len:7,kind:"boss",terrace:"boss"}]},archive:{seed:37,style:"stacks",rooms:[{id:"well",w:10,h:8,kind:"start"},{id:"stack1",w:14,h:12,dir:"N",foes:[["grunt",2],["shooter",1]],boxes:["scatter"],shelves:!0},{id:"aisle",w:6,h:12,dir:"N",foes:[["grunt",2]]},{id:"stack2",w:16,h:12,dir:"W",foes:[["grunt",2],["shooter",2]],boxes:["power"],shelves:!0},{id:"reading",w:12,h:10,dir:"N",foes:[["grunt",3],["shooter",1]],boxes:["beam"],pillars:!0,terrace:!0},{id:"stack3",w:16,h:12,dir:"E",foes:[["grunt",2],["shooter",2]],boxes:["rapid"],shelves:!0},{id:"vault",w:10,h:10,dir:"N",foes:[["grunt",1],["shooter",2],["brute",1]],boxes:["flame","power"],terrace:!0},{id:"press",w:15,h:11,dir:"N",len:5,kind:"boss",terrace:"boss"}]}},Pp=(i,e,t)=>i.x0-t<e.x1&&i.x1+t>e.x0&&i.z0-t<e.z1&&i.z1+t>e.z0,Lp=(i,e)=>{for(let t=i.z0;t<i.z1;t++)for(let n=i.x0;n<i.x1;n++)e(n,t)};function gb(i){let e=[],t=[],n=null;for(let s of i.rooms){let r,o=null;if(!n)r={x0:0,z0:-s.h,x1:s.w,z1:0};else{let l=s.len||4,c=n.rect,h=Math.floor((c.x0+c.x1)/2),u=Math.floor((c.z0+c.z1)/2);if(s.dir==="N"){o={x0:h-1,x1:h+1,z0:c.z0-l,z1:c.z0};let d=h-Math.floor(s.w/2);r={x0:d,x1:d+s.w,z1:o.z0,z0:o.z0-s.h}}else if(s.dir==="E"){o={z0:u-1,z1:u+1,x0:c.x1,x1:c.x1+l};let d=u-Math.floor(s.h/2);r={x0:o.x1,x1:o.x1+s.w,z0:d,z1:d+s.h}}else if(s.dir==="W"){o={z0:u-1,z1:u+1,x1:c.x0,x0:c.x0-l};let d=u-Math.floor(s.h/2);r={x1:o.x0,x0:o.x0-s.w,z0:d,z1:d+s.h}}else throw new Error("room "+s.id+": bad dir "+s.dir)}for(let l of e)if(Pp(r,l.rect,1))throw new Error("room "+s.id+" overlaps "+l.id);for(let l of t)if(Pp(r,l.rect,1)&&l.to!==s.id)throw new Error("room "+s.id+" overlaps corridor into "+l.to);let a={...s,rect:r,doors:[]};if(o){t.push({rect:o,from:n.id,to:s.id,dir:s.dir});let l=s.dir,c=l==="N"?{x:o.x0+1,z:o.z1}:l==="E"?{x:o.x0,z:o.z0+1}:{x:o.x1,z:o.z0+1},h=l==="N"?{x:o.x0+1,z:o.z0}:l==="E"?{x:o.x1,z:o.z0+1}:{x:o.x0,z:o.z0+1};n.doors.push(c),a.doors.push(h)}e.push(a),n=a}return{rooms:e,corrs:t}}function xb(i){let e=[],t=i.rect,n=t.x1-t.x0,s=t.z1-t.z0;if(i.pillars)for(let r of[.25,.75])for(let o of[.25,.75])e.push([t.x0+Math.floor(n*r),t.z0+Math.floor(s*o)]);if(i.shelves){let r=0;for(let o=t.z0+3;o<t.z1-3;o+=3,r++){let a=r%2===0;for(let l=t.x0+2;l<t.x1-2;l++)a&&l<t.x0+5||!a&&l>=t.x1-5||e.push([l,o])}}return e}var Dp=1,Np=2,_b=1.4;function yb(i){let e=i.rect,t=Math.floor((e.x0+e.x1)/2),n=Math.floor((e.z0+e.z1)/2),s=[];if(i.terrace==="boss"){let r=e.x1-e.x0;for(let o of[e.x0+Math.floor(r*.2),e.x1-Math.floor(r*.2)-2])for(let a=0;a<2;a++)for(let l=0;l<2;l++)s.push([o+a,n+l,_b])}else if(i.terrace)for(let r=-1;r<=0;r++)s.push([t-2,n+r,Dp],[t-1,n+r,Dp],[t,n+r,Np],[t+1,n+r,Np]);return s}function nl(i,e,t,n){return i.doors.some(s=>Math.abs(s.x-e)<n&&Math.abs(s.z-t)<n)}function eu(i){let e=mb[i];if(!e)throw new Error("no level: "+i);let t=pb(e.seed),{rooms:n,corrs:s}=gb(e),r=new Set,o=new Set;for(let b of n)Lp(b.rect,(M,I)=>r.add(Xn(M,I)));for(let b of s)Lp(b.rect,(M,I)=>r.add(Xn(M,I)));for(let b of n)for(let[M,I]of xb(b)){let B=Xn(M,I);r.has(B)&&!nl(b,M,I,3)&&o.add(B)}for(let b of o)r.delete(b);let a=new Map;for(let b of n)for(let[M,I,B]of yb(b)){let k=Xn(M,I);r.has(k)&&!o.has(k)&&!nl(b,M,I,3)&&(a.set(k,B),r.delete(k))}let l=new Set;for(let b of r){let[M,I]=b.split(",").map(Number);for(let B=-1;B<=1;B++)for(let k=-1;k<=1;k++){let V=Xn(M+k,I+B);!r.has(V)&&!o.has(V)&&!a.has(V)&&l.add(V)}}let c={x0:1/0,z0:1/0,x1:-1/0,z1:-1/0};for(let b of l){let[M,I]=b.split(",").map(Number);c.x0=Math.min(c.x0,M),c.z0=Math.min(c.z0,I),c.x1=Math.max(c.x1,M+1),c.z1=Math.max(c.z1,I+1)}let h=(b,M)=>({x:(b+.5)*2,z:(M+.5)*2}),u=[],d=[],f=[];for(let b of n){let M=b.rect,I=[],B=(L,A)=>L>=M.x0+1&&L<M.x1-1&&A>=M.z0+1&&A<M.z1-1&&r.has(Xn(L,A));for(let[L,A]of b.foes||[])for(let F=0;F<A;F++){let U=null;for(let D=0;D<60&&!U;D++){let H=M.x0+1+Math.floor(t()*(M.x1-M.x0-2)),Q=M.z0+1+Math.floor(t()*(M.z1-M.z0-2));!B(H,Q)||nl(b,H,Q,3)||I.some(ce=>Math.abs(ce[0]-H)<2&&Math.abs(ce[1]-Q)<2)||(U=[H,Q])}U&&(I.push(U),u.push({type:L,...h(U[0],U[1]),room:b.id}))}let k=[[M.x0+1,M.z0+1],[M.x1-2,M.z0+1],[M.x0+1,M.z1-2],[M.x1-2,M.z1-2]].filter(([L,A])=>r.has(Xn(L,A))&&!nl(b,L,A,2));for(let L=k.length-1;L>0;L--){let A=Math.floor(t()*(L+1));[k[L],k[A]]=[k[A],k[L]]}(b.boxes||[]).forEach((L,A)=>{let F=k[A%k.length];F&&d.push({kind:L,...h(F[0],F[1]),room:b.id})});let V=(L,A,F)=>{l.has(Xn(L,A))&&f.push({...h(L,A),dir:F})};for(let L=M.x0+1;L<M.x1-1;L+=3)V(L,M.z0-1,"S"),V(L,M.z1,"N");for(let L=M.z0+2;L<M.z1-1;L+=3)V(M.x0-1,L,"E"),V(M.x1,L,"W")}let x=n.find(b=>b.kind==="start"),p=n.find(b=>b.kind==="boss"),g=x.rect,m=p.rect,_=h(Math.floor((g.x0+g.x1)/2),Math.floor((g.z0+g.z1)/2)),v=h(Math.floor((m.x0+m.x1)/2),m.z0+3),y=p.doors[0],w=[];if(y){let b=p.dir,M=b==="E"?-1:b==="W"?1:0,I=b==="N"?1:0;for(let B of[0,1])w.push(b==="N"?[y.x-1+B,y.z+I]:[y.x+M,y.z-1+B])}let E=n.map(b=>({id:b.id,kind:b.kind||"room",rect:b.rect,doors:b.doors,pillars:!!b.pillars,shelves:!!b.shelves,center:h((b.rect.x0+b.rect.x1)/2-.5,(b.rect.z0+b.rect.z1)/2-.5)})),S=new Set;return{key:i,style:e.style,cell:2,rooms:E,corridors:s.map(b=>b.rect),floor:r,walls:l,inner:o,dyn:S,plinths:a,bounds:c,start:_,bossPos:v,bossRect:m,gateCells:w,foes:u,boxes:d,torches:f,solidCell(b,M,I=0){let B=Xn(b,M);if(l.has(B)||o.has(B)||S.has(B))return!0;let k=a.get(B);return k!==void 0?I<k-.4:!r.has(B)},heightAt(b,M){return a.get(Xn(b,M))||0},roomAt(b,M){let I=Math.floor(b/2),B=Math.floor(M/2);return E.find(k=>I>=k.rect.x0&&I<k.rect.x1&&B>=k.rect.z0&&B<k.rect.z1)||null},sealGate(){for(let[b,M]of w)S.add(Xn(b,M))},openGate(){S.clear()}}}function Op(i,e,t,n,s=0){let r=!1,o=Math.floor((e-n)/2),a=Math.floor((e+n)/2),l=Math.floor((t-n)/2),c=Math.floor((t+n)/2);for(let h=l;h<=c;h++)for(let u=o;u<=a;u++){if(!i.solidCell(u,h,s))continue;let d=u*2,f=d+2,x=h*2,p=x+2,g=Math.max(d,Math.min(e,f)),m=Math.max(x,Math.min(t,p)),_=e-g,v=t-m,y=_*_+v*v;if(!(y>=n*n))if(r=!0,y>1e-8){let w=Math.sqrt(y),E=n-w;e+=_/w*E,t+=v/w*E}else{let w=e-d,E=f-e,S=t-x,C=p-t,b=Math.min(w,E,S,C);b===w?e=d-n:b===E?e=f+n:b===S?t=x-n:t=p+n}}return{x:e,z:t,hit:r}}function Cr(i,e,t,n,s,r,o=0){let a=Math.max(1,Math.ceil(Math.hypot(s,r)/(n*.5))),l=!1;for(let c=0;c<a;c++){let h=Op(i,e+s/a,t,n,o),u=Op(i,h.x,t+r/a,n,o);e=u.x,t=u.z,l=l||h.hit||u.hit}return{x:e,z:t,hit:l}}function Ts(i,e,t,n,s,r=0){let o=n-e,a=s-t,l=Math.max(1,Math.ceil(Math.hypot(o,a)/(2/2)));for(let c=1;c<=l;c++){let h=c/l;if(i.solidCell(Math.floor((e+o*h)/2),Math.floor((t+a*h)/2),r))return!0}return!1}function Up(i,e,t,n=1/0){let s=i.heightAt(Math.floor(e/2),Math.floor(t/2));return s&&n>=s-.4?s:0}var vb=8;function zp(i,e){return{hero:i,world:e,score:0,mult:1,bestMult:1,kills:0,styleKills:0,parries:0,parryChain:0,hits:0,bossHits:0,pages:0,t:0,inBoss:!1}}var nu=i=>Math.max(1,Math.min(vb,Math.round(i*4)/4));function Fp(i,e=!1){let t=nu(i.mult+(e?.25:.05)),n=Math.round((e?150:100)*i.mult);return{...i,score:i.score+n,mult:t,bestMult:Math.max(i.bestMult,t),kills:i.kills+1,styleKills:i.styleKills+(e?1:0)}}function kp(i){let e=nu(i.mult+.5);return{...i,score:i.score+Math.round(150*i.mult),mult:e,bestMult:Math.max(i.bestMult,e),parries:i.parries+1,parryChain:i.parryChain+1}}function iu(i){return{...i,score:i.score+300,pages:i.pages+1}}function Bp(i,e){return{...i,score:i.score+Math.round(e*10*i.mult)}}function Hp(i){return{...i,mult:nu(i.mult/2),parryChain:0,hits:i.hits+1,bossHits:i.bossHits+(i.inBoss?1:0)}}function Vp(i,e){return{...i,t:i.t+e}}function Gp(i){return{...i,inBoss:!0}}function Wp(i){return{...i,parryChain:0}}function su(i){return i.score>=8e3&&i.bossHits===0?"UNERASED":i.score>=8e3?"SAGE":i.score>=4e3?"SCHOLAR":"SCRIBE"}function Xp(i){return(Jh.find(e=>e.key===i)||Jh[0]).hint}function Ir(){try{return globalThis.localStorage||null}catch{return null}}function Yp(i,e){try{let t=JSON.parse(i.getItem(e)||"{}");return t&&typeof t=="object"?t:{}}catch{return{}}}function qp(i,e,t){try{return i.setItem(e,JSON.stringify(t)),!0}catch{return!1}}function il(i=Ir()){return i?Yp(i,jh):{}}function Kp(i,e=Ir()){let t=il(e),n={s:i.score,r:su(i),h:i.hero,t:Math.round(i.t),k:i.kills,w:i.parries,d:new Date().toISOString().slice(0,10)},s=[...t[i.world]||[],n].sort((o,a)=>a.s-o.s).slice(0,5),r={...t,[i.world]:s};return e&&qp(e,jh,r),r}function yo(i,e=Ir()){let t=il(e)[i]||[];return t.length?t[0]:null}function vo(i=Ir()){return i?Yp(i,Qh):{}}function ru(i,e,t=Ir()){let n=vo(t),s=n[i]||[];if(s.includes(e))return n;let r={...n,[i]:[...s,e]};return t&&qp(t,Qh,r),r}function Zp(i,e=Ir()){return(vo(e)[i]||[]).length}function ou(i,e,t=vo()[i]||[]){let n=_o[i];return n.find(s=>!t.includes(s.id))||n[e%n.length]}var tu={perScroll:.12,perPower:.15,max:2.2};function au(i,e){let t=Number.isFinite(i)?Math.max(0,i):0,n=Number.isFinite(e)?Math.max(1,e):1;return Math.min(tu.max,1+tu.perScroll*t+tu.perPower*(n-1))}function $p(){let i=null,e=null,t=!1,n=1,s=()=>t?0:.5*n;function r(){if(i){i.state==="suspended"&&i.resume();return}let p=window.AudioContext||window.webkitAudioContext;p&&(i=new p,e=i.createGain(),e.gain.value=s(),e.connect(i.destination))}function o(p,g,m="square",_=.2,v){if(!i||t)return;let y=i.createOscillator(),w=i.createGain(),E=i.currentTime;y.type=m,y.frequency.setValueAtTime(p,E),v&&y.frequency.exponentialRampToValueAtTime(Math.max(20,v),E+g),w.gain.setValueAtTime(_,E),w.gain.exponentialRampToValueAtTime(.001,E+g),y.connect(w),w.connect(e),y.start(E),y.stop(E+g+.02)}function a(p,g=.2,m=400,_=4e3){if(!i||t)return;let v=Math.floor(i.sampleRate*p),y=i.createBuffer(1,v,i.sampleRate),w=y.getChannelData(0);for(let M=0;M<v;M++)w[M]=(Math.random()*2-1)*(1-M/v);let E=i.createBufferSource();E.buffer=y;let S=i.createBiquadFilter();S.type="highpass",S.frequency.value=m;let C=i.createBiquadFilter();C.type="lowpass",C.frequency.value=_;let b=i.createGain();b.gain.value=g,E.connect(S),S.connect(C),C.connect(b),b.connect(e),E.start()}function l(p,g,m=.3,_=40){if(!i||t)return;let v=i.createOscillator(),y=i.createGain(),w=i.currentTime;v.type="sine",v.frequency.setValueAtTime(p,w),v.frequency.exponentialRampToValueAtTime(Math.max(20,_),w+g*.9),y.gain.setValueAtTime(0,w),y.gain.linearRampToValueAtTime(m,w+.004),y.gain.exponentialRampToValueAtTime(.001,w+g),v.connect(y),y.connect(e),v.start(w),v.stop(w+g+.02)}function c(p,g,m=.1){if(!(!i||t))for(let[_,v]of[[1,m],[2.76,m*.5],[5.4,m*.22]]){let y=i.createOscillator(),w=i.createGain(),E=i.currentTime;y.type="sine",y.frequency.value=p*_*(.99+Math.random()*.02),w.gain.setValueAtTime(v,E),w.gain.exponentialRampToValueAtTime(.001,E+g),y.connect(w),w.connect(e),y.start(E),y.stop(E+g+.02)}}let h=(p,g=.07)=>p*(1-g+Math.random()*g*2),u={shoot(p){({single:()=>o(880,.07,"square",.12,300),scatter:()=>{o(660,.08,"sawtooth",.1,200),a(.05,.05,1500,5e3)},rapid:()=>o(1400,.04,"square",.08,700),beam:()=>o(1800,.14,"sine",.12,2600),flame:()=>a(.12,.08,200,1800)})[p]?.()},charged(){o(220,.35,"sawtooth",.22,1400),a(.2,.12,300,3e3)},chargeFull(){o(1200,.12,"sine",.1,1800)},blade(p){let g=(p%4+4)%4;g===0?(a(.15,.09,h(1400),9e3),o(h(520),.14,"sawtooth",.05,180)):g===1?(a(.1,.1,h(420),2600),l(h(120),.1,.09)):g===2?a(.06,.09,h(900),6e3):(a(.3,.1,h(700),7e3),o(h(200),.3,"sawtooth",.07,900),c(h(320),.35,.05))},bladeHit(p=1){let g=Math.max(1,Math.min(1.8,p));a(.05,.16*g,h(1200),7e3),l(h(150)*(2-g*.4),.16*g,.3*g),c(h(240),.18*g,.05*g),g>1.35&&o(h(90),.2,"sine",.12,40)},berserkHit(){a(.12,.2,300,5e3),l(110,.42,.42,32),c(180,.5,.1),o(70,.45,"sine",.16,28)},parry(){o(1600,.12,"sine",.2,2400),o(2400,.2,"sine",.12,3200)},ward(){o(500,.1,"sine",.08,900)},shatter(){a(.3,.2,600,6e3),o(900,.3,"sawtooth",.12,120)},dash(){a(.1,.08,800,6e3),o(400,.1,"sine",.08,1200)},hurt(){o(180,.3,"sawtooth",.25,50),a(.2,.15,100,1500)},foeHit(){a(.03,.07,h(1600),6e3),l(h(200),.07,.1)},foeDie(){a(.18,.16,h(320),3400),l(h(140),.26,.24,30),c(h(210),.22,.05)},crate(){a(.12,.14,500,4e3),o(320,.1,"square",.1,160)},pickup(){[660,880,1320].forEach((p,g)=>setTimeout(()=>o(p,.12,"sine",.14),g*70))},page(){[523,659,784,1047].forEach((p,g)=>setTimeout(()=>o(p,.22,"sine",.12),g*110))},bossHit(){o(120,.08,"square",.1,70)},bossWake(){o(60,.9,"sawtooth",.3,200),a(.6,.2,80,900)},bossDie(){for(let p=0;p<6;p++)setTimeout(()=>{a(.3,.2,200,3e3),o(90,.4,"sawtooth",.2,30)},p*160)},beamTell(){o(1800,.5,"sine",.08,2600)},beamFire(){a(.4,.3,900,200),o(200,.4,"sawtooth",.2,80)},slam(){a(.5,.4,200,40),o(90,.5,"sawtooth",.3,30)},open(){o(900,.15,"sine",.15,1400)},ui(){o(700,.06,"sine",.08,1e3)},step(){a(.03,.03,300,1200)}};function d(){return t=!t,e&&(e.gain.value=s()),t}function f(p){t=!!p,e&&(e.gain.value=s())}function x(p){n=Math.max(0,Math.min(1,p)),e&&(e.gain.value=s())}return{init:r,beep:o,noise:a,sfx:u,toggleMute:d,setMuted:f,setVolume:x,get muted(){return t},get ready(){return!!i}}}var lu={KeyW:"up",ArrowUp:"up",KeyS:"down",ArrowDown:"down",KeyA:"left",ArrowLeft:"left",KeyD:"right",ArrowRight:"right",Space:"blade",KeyK:"fire",KeyV:"ward",KeyL:"ward",KeyF:"magic",ShiftLeft:"jump",ShiftRight:"jump",Tab:"lock",KeyC:"swap",KeyR:"camreset",KeyP:"pause",Escape:"pause",KeyM:"mute",KeyN:"nexttrack",Enter:"confirm"};var cu="WASD / arrows move (double-tap = dash) \xB7 SPACE attack (3-hit combo) \xB7 SHIFT jump (x2) \xB7 right-click / K blaster (hold to charge) \xB7 V or L hold = ward \xB7 F magic \xB7 TAB / middle-click lock on \xB7 double-click + drag = spin camera \xB7 wheel zoom \xB7 R reset view",hu="Left stick move \xB7 X attack (3-hit combo) \xB7 A jump (x2) \xB7 B dodge \xB7 RT blaster (hold to charge) \xB7 LT hold = ward \xB7 Y magic \xB7 RB lock on \xB7 LB swap weapon \xB7 right stick = spin camera \xB7 R3 reset view \xB7 MENU pause";function jp(i,e,t){let n=.2126*i+.7152*e+.0722*t;return n>=Jp?0:Mb*(1-n/Jp)}var Jp=.34,Mb=.55;var In={maxYawRate:2.2,yawAccel:4.5,moveDeadzone:.25,towardInfluence:.3,follow:7.5,lookFollow:7.5,leadFollow:2.6,pullInRate:9,pullOutRate:1.6};function Qp(i,e,t,n,s=In){if(!(n>s.moveDeadzone))return 0;let r=Math.hypot(i,e);if(r<1e-6)return 0;let o=i/r,a=e/r,l=Math.sin(t),c=Math.cos(t),h=o*c-a*l,u=-o*l-a*c,d=u>=0?1:s.towardInfluence+(1-s.towardInfluence)*(1+u),f=-h*s.maxYawRate*d;return Math.max(-s.maxYawRate,Math.min(s.maxYawRate,f))}function em(i,e,t){return i+Math.atan2(e,t)}function tm(i,e,t){let n=Math.sin(t),s=Math.cos(t);return{x:s*i+n*e,z:-n*i+s*e}}function nm(i,e,t,n=!1){return e==null?null:!n&&i&&i.key===e?i:{key:e,yaw:t}}var im={takeoverPx:40,travelHalfLife:.2,hold:4};function sm(i,e,t,n,s=im){let r=i||{travel:0,t:n,armedAt:-1/0},o=r.travel*Math.pow(.5,Math.max(0,n-r.t)/s.travelHalfLife)+Math.hypot(e,t);return o>=s.takeoverPx?{travel:0,t:n,armedAt:n}:{travel:o,t:n,armedAt:r.armedAt}}function rm(i,e,t,n=im){return i?i.armedAt>t&&e-i.armedAt<n.hold:!1}function Qi(i,e,t,n){return e+(i-e)*Math.exp(-t*n)}var bb={walkRef:2.7,runRef:8.1,strafeRef:6.8,backRef:3.9,walkToRun:4.6,runToWalk:4,minScale:.62,maxScale:1.55,idleSpeed:.35};function om(i,e,t,n,s=bb){if(i<s.idleSpeed)return{clip:null,timeScale:1,running:!1};let r=n?i>s.runToWalk:i>s.walkToRun,o=e<-.5,a=!o&&Math.abs(t)>Math.abs(e),l=o?"back":a?t>0?"strafeRight":"strafeLeft":r?"run":"walk",c=o?s.backRef:a?s.strafeRef:r?s.runRef:s.walkRef,h=Math.max(s.minScale,Math.min(s.maxScale,i/c));return{clip:l,timeScale:h,running:r}}function am(i,e,t=!0){return!t||!Number.isFinite(i)||i<=0?0:Math.min(i,e)}function lm(i,e,t=.22){if(!(i>0)||!(e>0))return 1;let n=1-Math.max(0,Math.min(1,i/e));return t+(1-t)*n*n}function cm(i){if(i<=0)return 1;if(i>=1)return 0;let e=Math.exp(-3.2*i*i),t=1-i*i*(3-2*i)*(1-(1-i)*.15);return Math.max(0,e*Math.max(0,t))}var Eb={perHit:.22,max:.8};function hm(i,e=Eb){return i>0?1+Math.min(e.max,i*e.perHit):1}function um(i,e,t,n){let s={sprint:!1,orbit:!1,orbitDX:0,orbitDY:0,zoom:0,jump:!1,up:!1,down:!1,left:!1,right:!1,fire:!1,blade:!1,ward:!1,dash:!1,swap:!1,mx:0,mz:0,aimX:0,aimZ:-1,mouseAim:!1,touch:!1,sx:0,sz:0},r=new Set,o={},a=new Ha,l=new kn(new O(0,1,0),-.9),c=new Re,h=new O,u=0,d=0,f=!1,x=null,p=-1e9,g=null;function m(A){r.add(A)}function _(A,F){F&&m(A),A in s&&(s[A]=F)}function v(A){let F=performance.now()/1e3;o[A]&&F-o[A]<yp?(s.sprint=!0,m("dash"),o[A]=0):o[A]=F}let y=()=>s.up||s.down||s.left||s.right;window.addEventListener("keydown",A=>{let F=lu[A.code];F&&(["blade","fire","jump","up","down","left","right","lock"].includes(F)&&A.preventDefault(),!s[F]&&(F==="up"||F==="down"||F==="left"||F==="right")&&(v(F),p=performance.now()/1e3),A.repeat||m(F),F in s&&(s[F]=!0))}),window.addEventListener("keyup",A=>{let F=lu[A.code];F&&F in s&&(s[F]=!1),y()||(s.sprint=!1)}),window.addEventListener("blur",()=>{for(let A of["up","down","left","right","fire","blade","ward","dash"])s[A]=!1}),i.addEventListener("contextmenu",A=>A.preventDefault());let w=-1e9,E=0,S=0;i.addEventListener("mousemove",A=>{let F=f?A.clientX-u:0,U=f?A.clientY-d:0;f=!0,u=A.clientX,d=A.clientY,s.orbit?(s.orbitDX+=A.clientX-E,s.orbitDY+=A.clientY-S,E=A.clientX,S=A.clientY):x=sm(x,F,U,performance.now()/1e3)}),i.addEventListener("wheel",A=>{s.zoom+=Math.sign(A.deltaY),A.preventDefault()},{passive:!1}),i.addEventListener("mousedown",A=>{if(!s.touch){if(A.button===0){let F=performance.now();F-w<320?(s.orbit=!0,s.blade=!1,E=A.clientX,S=A.clientY):(s.blade=!0,m("blade")),w=F}A.button===1&&(m("lock"),A.preventDefault()),A.button===2&&(s.fire=!0,m("fire"))}}),window.addEventListener("mouseup",A=>{A.button===0&&(s.blade=!1,s.orbit=!1),A.button===2&&(s.fire=!1)});let C=null,b=0,M=0,I=52;function B(A,F){let U=A-b,D=F-M,H=Math.hypot(U,D);H>I&&(U*=I/H,D*=I/H),t.style.transform=`translate(${U}px,${D}px)`;let Q=.18,ce=Math.min(1,Math.hypot(U,D)/I);if(ce<Q){s.sx=0,s.sz=0;return}let pe=(ce-Q)/(1-Q);s.sx=U/I*pe/ce,s.sz=D/I*pe/ce}if(e){e.addEventListener("pointerdown",F=>{s.touch=!0,C=F.pointerId;let U=e.getBoundingClientRect();b=U.left+U.width/2,M=U.top+U.height/2,e.setPointerCapture(F.pointerId),e.classList.add("hit"),B(F.clientX,F.clientY),F.preventDefault()}),e.addEventListener("pointermove",F=>{F.pointerId===C&&B(F.clientX,F.clientY)});let A=F=>{F.pointerId===C&&(C=null,s.sx=0,s.sz=0,t.style.transform="",e.classList.remove("hit"))};e.addEventListener("pointerup",A),e.addEventListener("pointercancel",A)}for(let[A,F]of Object.entries(n||{})){if(!F)continue;F.addEventListener("pointerdown",D=>{s.touch=!0,s[A]=!0,m(A),F.classList.add("hit"),D.preventDefault()});let U=()=>{s[A]=!1,F.classList.remove("hit")};F.addEventListener("pointerup",U),F.addEventListener("pointercancel",U),F.addEventListener("pointerleave",U)}window.addEventListener("touchstart",()=>{s.touch=!0,document.body.classList.add("touch")},{once:!0,passive:!0});function k(A,F,U,D=0,H=!1){let Q=(s.right?1:0)-(s.left?1:0),ce=(s.down?1:0)-(s.up?1:0),pe=Q||ce?`${Q},${ce}`:null;if((s.sx||s.sz)&&(Q=s.sx,ce=s.sz,pe="stick"),g=nm(g,pe,D,H),g){let ie=tm(Q,ce,g.yaw);Q=ie.x,ce=ie.z}let Y=Math.hypot(Q,ce);if(Y>1&&(Q/=Y,ce/=Y),s.mx=Q,s.mz=ce,!s.touch&&rm(x,performance.now()/1e3,p)&&A&&(c.set(u/window.innerWidth*2-1,-(d/window.innerHeight)*2+1),a.setFromCamera(c,A),a.ray.intersectPlane(l,h))){let ie=h.x-F,Z=h.z-U,K=Math.hypot(ie,Z);if(K>.3){s.aimX=ie/K,s.aimZ=Z/K,s.mouseAim=!0;return}}s.mouseAim=!1,Y>.05&&(s.aimX=Q/Math.max(Y,1e-6),s.aimZ=ce/Math.max(Y,1e-6))}function V(A){return r.has(A)?(r.delete(A),!0):!1}function L(){r.clear()}return{IN:s,update:k,pressed:V,clearEdges:L,press:m,padAction:_}}var Sb={a:0,b:1,x:2,y:3,lb:4,rb:5,lt:6,rt:7,view:8,menu:9,l3:10,r3:11,up:12,down:13,left:14,right:15},Pn={dead:.16,trigger:.35,curve:1.6,orbitRate:430,orbitRateY:300,sprintOff:.3,menuStick:.5,navRepeat:.28,scrollRate:900,cardGrace:.35},uu=Object.freeze({x:"blade",a:"jump",b:"dash",y:"magic",rt:"fire",lt:"ward",rb:"lock",lb:"swap",r3:"camreset",l3:"sprint",menu:"pause",up:"up",down:"down",left:"left",right:"right"}),dm=Object.freeze(["sprint"]);function du(i,e,t=Pn.dead){let n=Math.hypot(i,e);if(!(n>t))return{x:0,y:0};let s=Math.min(1,(n-t)/(1-t));return{x:i/n*s,y:e/n*s}}function wb(i,e,t=Pn.dead,n=Pn.curve){let s=du(i,e,t),r=Math.hypot(s.x,s.y);if(!r)return{x:0,y:0};let o=Math.pow(r,n)/r;return{x:s.x*o,y:s.y*o}}function fm(i){if(!i||!i.connected)return null;let e=i.buttons||[],t=i.axes||[],n=o=>{let a=e[o];return a==null?0:typeof a=="number"?a:a.value||(a.pressed?1:0)},s=o=>Number.isFinite(t[o])?t[o]:0,r={};for(let[o,a]of Object.entries(Sb))r[o]=n(a)>(o==="lt"||o==="rt"?Pn.trigger:.5);return{id:i.id||"",standard:i.mapping==="standard",held:r,lx:s(0),ly:s(1),rx:s(2),ry:s(3)}}function pm(i,e){let t=[],n=[];for(let s of Object.keys(e)){let r=!!(i&&i[s]);e[s]&&!r?t.push(s):!e[s]&&r&&n.push(s)}return{down:t,up:n}}function mm(i,e,t){return t<Pn.sprintOff?!1:e?!0:i}function gm(i,e,t){let n=wb(i,e);return{dx:n.x*Pn.orbitRate*t,dy:n.y*Pn.orbitRateY*t}}function xm(i){if(i.held.up)return"up";if(i.held.down)return"down";if(i.held.left)return"left";if(i.held.right)return"right";let e=Math.abs(i.lx),t=Math.abs(i.ly);return!(Math.hypot(i.lx,i.ly)>Pn.menuStick)||Math.max(e,t)<Math.min(e,t)*1.25?null:e>t?i.lx>0?"right":"left":i.ly>0?"down":"up"}var Tb={up:[0,-1],down:[0,1],left:[-1,0],right:[1,0]};function _m(i,e,t){let[n,s]=Tb[t]||[0,0],r=a=>{let l=-1,c=1/0;return e.forEach((h,u)=>{let d=h.x-i.x,f=h.y-i.y,x=d*n+f*s,p=Math.abs(d*s-f*n);if(x<=4||a&&p>x*2)return;let g=x+p*2;g<c&&(c=g,l=u)}),l},o=r(!0);return o>=0?o:r(!1)}var Ab="#resume, #backSel, #cxBack",Rb="button, .selcard, .wcard",sl=new Set(dm),Cb=["rt","lt"],Ib=3;function ym(i,{isPlaying:e,onConnect:t=()=>{},onDevice:n=()=>{}}){let s=i.IN,r=null,o=null,a={},l=!1,c=!1,h=!1,u=0,d=!1,f=0,x=!1,p=null,g=null,m=!1,_=0,v=!1,y=!0,w=null,E=0,S=!1,C=0,b=0,M=null,I=null,B=()=>{S&&(S=!1,n(!1))};window.addEventListener("keydown",B,{passive:!0}),window.addEventListener("mousedown",B,{passive:!0});let k=()=>{S||(S=!0,n(!0))},V=K=>{let $=String(K&&K.message||K);$!==M&&console.warn("[pad]",$),M=$};function L(){let K=[];try{K=navigator.getGamepads?[...navigator.getGamepads()]:[]}catch($){V($)}return K.find($=>$&&$.connected)||null}function A(){for(let K of Object.values(a))K&&!sl.has(K)&&i.padAction(K,!1);a={},l&&(s.sprint=!1,l=!1),c&&(s.sx=0,s.sz=0,c=!1),h&&(s.orbit=!1,h=!1)}function F(K){for(let $ of K.up){let ee=a[$];delete a[$],ee&&!sl.has(ee)&&i.padAction(ee,!1)}for(let $ of K.down){let ee=uu[$];ee&&(a[$]=ee,C++,sl.has(ee)||i.padAction(ee,!0))}}function U(K,$){for(let ee of Cb){if(!K.held[ee]||$.down.includes(ee))continue;let re=uu[ee];a[ee]=re,re in s&&(s[re]=!0)}}function D(K,$,ee){let re=du(K.lx,K.ly),se=Math.hypot(re.x,re.y);se>0?(s.sx=re.x,s.sz=re.y,c=!0):c&&(s.sx=0,s.sz=0,c=!1);let _e=mm(l,$.down.includes("b")||$.down.includes("l3"),se);_e!==l&&(l=_e,s.sprint=_e);let T=gm(K.rx,K.ry,ee);T.dx||T.dy?(s.orbit=!0,h=!0,s.orbitDX+=T.dx,s.orbitDY-=T.dy):h&&(s.orbit=!1,h=!1)}function H(){for(let K of Object.values(a))!sl.has(K)&&K in s&&!s[K]&&(s[K]=!0);l&&!s.sprint&&(s.sprint=!0)}function Q(K,$,ee,re){re&&U(K,$),H(),F($),D(K,$,ee)}function ce(){let K=[...document.querySelectorAll(".overlay")].find(ee=>!ee.classList.contains("hidden"))||null;if(!K)return{root:K,list:[]};let $=[...K.querySelectorAll(Rb)].filter(ee=>!ee.disabled&&!ee.classList.contains("locked")&&ee.getClientRects().length>0&&getComputedStyle(ee).visibility!=="hidden");return{root:K,list:$}}let pe=K=>{let $=K.getBoundingClientRect();return{x:$.left+$.width/2,y:$.top+$.height/2}};function Y(K,$=!0){if(p!==K&&(p&&p.classList.remove("padfocus"),p=K,!!K)){K.classList.add("padfocus");try{K.focus({preventScroll:!0}),$&&K.scrollIntoView({block:"nearest",inline:"nearest"})}catch(ee){V(ee)}}}function oe(K,$,ee,re){let{root:se,list:_e}=ce();if(!se||!_e.length){Y(null),g=null;return}if(se.id==="codexPop"){let Me=K.held.down?1:K.held.up?-1:Math.abs(K.ly)>.3?K.ly:0;Me&&se.scrollBy(0,Me*Pn.scrollRate*re)}se!==g&&(g=se,m=!1,_=ee,v=d,y=!K.held.a),K.held.a||(y=!0);let T=v&&ee-_<Pn.cardGrace*1e3;(!m||!_e.includes(p))&&Y(se.querySelector(".selcard.sel, .wcard.sel")||_e.find(Me=>Me.id==="nextWorld")||_e.find(Me=>Me.matches(".btn:not(.ghost)"))||_e[0],se.id!=="codexPop");let ye=se.id==="codexPop"?null:xm(K);if(!ye)w=null;else if(ye!==w||ee-E>Pn.navRepeat*1e3){w=ye,E=ee,m=!0;let Me=_e.filter(Ce=>Ce!==p),he=_m(pe(p),Me.map(pe),ye);he>=0&&Y(Me[he])}let te=Me=>[...se.querySelectorAll(Me)].find(he=>he.getClientRects().length>0);if($.down.includes("a")&&y&&!T)C++,p.click();else if($.down.includes("b")){let Me=te(Ab);Me&&(C++,Me.click())}else if($.down.includes("menu")){let Me=te("#resume");Me&&(C++,Me.click())}}function ie(K){requestAnimationFrame(ie);let $=u?Math.min(.1,(K-u)/1e3):0;u=K;try{let ee=L();if(f=ee?0:f+1,!ee){if(!r)return;if(!(document.visibilityState==="visible"&&document.hasFocus())){A(),x=!1;return}if(f<Ib)return;let te=e();r=null,A(),o=null,Y(null),S=!1,n(!1),t(!1,""),te&&i.press("pause");return}let re=!r;r=ee,re&&t(!0,ee.id||"");let se=fm(ee);if(!se)return;let _e=pm(o&&o.held,se.held),T=e();(_e.down.length||Math.hypot(se.lx,se.ly)>.5||Math.hypot(se.rx,se.ry)>.5)&&k(),T?(d||(Y(null),g=null,m=!1),S?(Q(se,_e,$,!x),x=!0):x&&(A(),x=!1)):((d||x)&&A(),x=!1,oe(se,_e,K,$)),d=T,o=se}catch(ee){V(ee)}}requestAnimationFrame(ie);function Z(K,$,ee){let re=r&&r.vibrationActuator;if(!(!re||!re.playEffect||!S)){b++;try{let se=re.playEffect("dual-rumble",{startDelay:0,duration:ee,strongMagnitude:K,weakMagnitude:$});se&&se.catch&&se.catch(_e=>{I=String(_e&&_e.message||_e)})}catch(se){I=String(se&&se.message||se)}}}return{rumble:Z,get active(){return!!r&&S},get state(){return{active:!!r&&S,plugged:!!r,id:r?r.id:"",standard:r?r.mapping==="standard":!1,presses:C,rumbles:b,sprint:l,orbit:h,held:Object.values(a),lastError:M,rumbleError:I,focus:p?p.dataset.hero||p.dataset.w||p.id||p.textContent.trim().slice(0,24):null}}}}var Pb={staggerPerDmg:.05,staggerMin:.14,staggerMax:.6,launchStagger:.55,flashMin:.08,flashMax:.16};function bm(i,e=1,t=Pb){let n=Math.max(1,e||1),s=Math.min(t.staggerMax,Math.max(t.staggerMin,i.dmg*t.staggerPerDmg))*(.85+.15*n);i.launch&&(s=Math.max(s,t.launchStagger));let r=Math.min(1,Math.max(0,(i.dmg-3)/7));return{hitstop:i.hitstop*(.85+n*.3),stagger:s,knock:i.knock*n,flash:t.flashMin+(t.flashMax-t.flashMin)*r}}function Em(i,e,t,n,s,r,o){let a=Math.atan2(e[1]-i[1],e[0]-i[0]),l=Math.atan2(n[1]-t[1],n[0]-t[0]),c=Math.atan2(Math.sin(l-a),Math.cos(l-a)),h=Math.min(12,Math.max(1,Math.ceil(Math.abs(c)/.35)));if(h>1){let u=Math.hypot(e[0]-i[0],e[1]-i[1]),d=Math.hypot(n[0]-t[0],n[1]-t[1]),f=i,x=e;for(let p=1;p<=h;p++){let g=p/h,m=[i[0]+(t[0]-i[0])*g,i[1]+(t[1]-i[1])*g],_=a+c*g,v=u+(d-u)*g,y=p===h?n:[m[0]+Math.cos(_)*v,m[1]+Math.sin(_)*v];if(vm(f,x,p===h?t:m,y,s,r,o))return!0;f=p===h?t:m,x=y}return!1}return vm(i,e,t,n,s,r,o)}function vm(i,e,t,n,s,r,o){let a=[i,e,n,t];if(Mm(s,r,i,e,n)||Mm(s,r,i,n,t))return!0;for(let l=0;l<4;l++)if(Lb(s,r,a[l],a[(l+1)%4])<=o)return!0;return!1}function Lb(i,e,t,n){let s=n[0]-t[0],r=n[1]-t[1],o=s*s+r*r,a=o>0?Math.max(0,Math.min(1,((i-t[0])*s+(e-t[1])*r)/o)):0;return Math.hypot(i-(t[0]+s*a),e-(t[1]+r*a))}function Mm(i,e,t,n,s){let r=(d,f,x)=>(d[0]-x[0])*(f[1]-x[1])-(f[0]-x[0])*(d[1]-x[1]),o=[i,e],a=r(o,t,n),l=r(o,n,s),c=r(o,s,t),h=a<0||l<0||c<0,u=a>0||l>0||c>0;return!(h&&u)}function Sm(i,e,t,n,s=.15){return Math.min(i,e)<=t+n+s&&Math.max(i,e)>=t-s}function wm(i,e){let t=Math.max(0,Math.min(1,e));return i.arc*(1-2*t)}var Db={minSpeed:12,maxInward:2.5};function Tm(i,e,t,n,s=Db){return n>0?t/n>=s.minSpeed&&(e-i)/n>=-s.maxInward:!1}var fu={range:14,arc:1.25,breakRange:20,gain:2.6};function Am(i,e,t,n,s,r=fu){let o=-1,a=1/0,l=Math.cos(r.arc);return s.forEach((c,h)=>{if(!c||c.alive===!1)return;let u=c.x-i,d=c.z-e,f=Math.hypot(u,d);if(f>r.range)return;let x=f>1e-6?(u*t+d*n)/f:1;if(x<l)return;let p=f*(1.5-.5*x);p<a&&(a=p,o=h)}),o}function Nb(i){return Math.atan2(Math.sin(i),Math.cos(i))}function Rm(i,e,t,n,s=0){return Math.atan2(-(t-i),-(n-e))-s}function Cm(i,e,t,n=fu){let s=Nb(e-i)*n.gain;return Math.max(-t,Math.min(t,s))}function Im(i,e,t,n=fu){return!!i&&i.alive!==!1&&Math.hypot(i.x-e,i.z-t)<=n.breakRange}var Pm={buffer:.25};function Lm(i){return!i||i.done?"none":i.cutting?"cut":i.cutDone?"recovery":"windup"}function Dm(i){return i!=="cut"}function Nm(i,e,t){return{bladeT:0,bladeWindow:Math.max(e,i>0?t:0)}}var pu=new Map;function mu(i="rgba(255,255,255,1)",e="rgba(255,255,255,0)",t=128){let n="r"+i+e+t;if(pu.has(n))return pu.get(n);let s=document.createElement("canvas");s.width=s.height=t;let r=s.getContext("2d"),o=r.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2),a=/rgba?\(([^)]+)\)/.exec(i),[l,c,h]=a?a[1].split(",").slice(0,3).map(f=>parseFloat(f)):[255,255,255],u=a&&a[1].split(",").length>3?parseFloat(a[1].split(",")[3]):1;for(let f=0;f<=16;f++){let x=f/16;o.addColorStop(x,`rgba(${l},${c},${h},${(u*cm(x)).toFixed(4)})`)}r.fillStyle=o,r.fillRect(0,0,t,t);let d=new Rn(s);return d.colorSpace=mt,d.minFilter=wn,d.generateMipmaps=!0,pu.set(n,d),d}function Ob(){return mu("rgba(0,0,0,0.55)","rgba(0,0,0,0)",64)}function bt(i,e,t=.9){let n=new co({map:mu(),color:i,transparent:!0,opacity:t,blending:ht,depthWrite:!1}),s=new wa(n);return s.scale.set(e,e,1),s}function Yn(i){let e=new ge(new An(i*2,i*2),new We({map:Ob(),transparent:!0,depthWrite:!1}));return e.rotation.x=-Math.PI/2,e.position.y=.03,e.renderOrder=1,e}var As=900,Ub=40;function Om(i){let e=new Float32Array(As*3),t=new Float32Array(As*3),n=new Float32Array(As),s=new Float32Array(As),r=new lt;r.setAttribute("position",new et(e,3)),r.setAttribute("pcol",new et(t,3)),r.setAttribute("psize",new et(n,1)),r.setAttribute("palpha",new et(s,1));let o=new Pt({transparent:!0,depthWrite:!1,blending:ht,uniforms:{map:{value:mu()},scaleY:{value:600}},vertexShader:`attribute vec3 pcol; attribute float psize; attribute float palpha; varying vec3 vc; varying float va; uniform float scaleY;
      void main(){ vc=pcol; va=palpha; vec4 mv=modelViewMatrix*vec4(position,1.0); gl_PointSize=psize*scaleY/-mv.z; gl_Position=projectionMatrix*mv; }`,fragmentShader:"uniform sampler2D map; varying vec3 vc; varying float va; void main(){ vec4 t=texture2D(map,gl_PointCoord); gl_FragColor=vec4(vc*t.rgb, t.a*va); }"}),a=new bi(r,o);a.frustumCulled=!1,i.add(a);let l=[],c=new Te;function h(y,w,E,S,C=8,b={}){c.set(S);for(let M=0;M<C&&l.length<As;M++){let I=Math.random()*Math.PI*2,B=(b.spd||4)*(.4+Math.random()*.8),k=(b.up??3)*(.3+Math.random()*.9);l.push({x:y,y:w,z:E,vx:Math.cos(I)*B,vy:k,vz:Math.sin(I)*B,life:b.life||.6,t:0,r:c.r,g:c.g,b:c.b,size:b.size||.5,grav:b.grav??9,drag:b.drag??.9})}}function u(y,w,E,S,C=.4,b=.9,M=1.5){l.length<As&&(c.set(S),l.push({x:y,y:w,z:E,vx:(Math.random()-.5)*.8,vy:M,vz:(Math.random()-.5)*.8,life:b,t:0,r:c.r,g:c.g,b:c.b,size:C,grav:-.5,drag:.98}))}let d=24,f=[];function x(y,w,E,S,C=1.6,b=.13){let M=f.find(I=>!I.alive);if(!M){if(f.length>=d)return;let I=bt(S,1,1);I.renderOrder=3,i.add(I),M={s:I,alive:!1},f.push(M)}M.alive=!0,M.t=0,M.life=b,M.size=C,M.s.material.color.set(S),M.s.position.set(y,w,E),M.s.visible=!0}let p=new ln(.82,1,48),g=[];function m(y,w,E,S=3,C=.5,b=.06){let M=g.find(I=>!I.alive);if(!M){if(g.length>=Ub)return;let I=new ge(p,new We({color:E,transparent:!0,blending:ht,depthWrite:!1,side:gt}));I.rotation.x=-Math.PI/2,i.add(I),M={m:I,alive:!1},g.push(M)}M.alive=!0,M.t=0,M.life=C,M.maxR=S,M.m.material.color.set(E),M.m.position.set(y,b,w),M.m.visible=!0}function _(y){for(let w=l.length-1;w>=0;w--){let E=l[w];if(E.t+=y,E.t>=E.life){l[w]=l[l.length-1],l.pop();continue}E.vy-=E.grav*y,E.vx*=E.drag,E.vz*=E.drag,E.x+=E.vx*y,E.y+=E.vy*y,E.z+=E.vz*y,E.y<.05&&E.grav>0&&(E.y=.05,E.vy*=-.3)}for(let w=0;w<As;w++)if(w<l.length){let E=l[w],S=1-E.t/E.life;e[w*3]=E.x,e[w*3+1]=E.y,e[w*3+2]=E.z,t[w*3]=E.r,t[w*3+1]=E.g,t[w*3+2]=E.b,n[w]=E.size*(.6+.4*S),s[w]=S}else s[w]=0,n[w]=0;r.attributes.position.needsUpdate=!0,r.attributes.pcol.needsUpdate=!0,r.attributes.psize.needsUpdate=!0,r.attributes.palpha.needsUpdate=!0,r.setDrawRange(0,Math.max(1,l.length));for(let w of f){if(!w.alive)continue;w.t+=y;let E=w.t/w.life;if(E>=1){w.alive=!1,w.s.visible=!1;continue}let S=E<.3?E/.3:1,C=E<.3?1:1-(E-.3)/.7;w.s.scale.setScalar(w.size*(.35+.65*S)*(1+E*.5)),w.s.material.opacity=C}for(let w of g){if(!w.alive)continue;w.t+=y;let E=w.t/w.life;if(E>=1){w.alive=!1,w.m.visible=!1;continue}let S=.2+w.maxR*E;w.m.scale.set(S,S,1),w.m.material.opacity=(1-E)*.9}}function v(){l.length=0;for(let y of g)y.alive=!1,y.m.visible=!1;for(let y of f)y.alive=!1,y.s.visible=!1}return{spawn:h,ember:u,ring:m,flash:x,update:_,clear:v,get count(){return l.length}}}function si(i,e=256){let t=document.createElement("canvas");t.width=t.height=e;let n=t.getContext("2d");i(n,e);let s=new Rn(t);return s.colorSpace=mt,s.wrapS=s.wrapT=dn,s.anisotropy=Pr,s}var zb=new Er,al=new Map,Pr=8;function Fm(i){try{Pr=Math.max(1,i.capabilities.getMaxAnisotropy())}catch{Pr=8}for(let e of al.values())for(let t of Object.values(e))t.anisotropy=Pr,t.needsUpdate=!0;return Pr}function Lr(i){if(al.has(i))return al.get(i);let e=(n,s)=>{let r=zb.load(`./assets/tex_ship/${i}_${n}.jpg`);return r.wrapS=r.wrapT=dn,r.anisotropy=Pr,s&&(r.colorSpace=mt),r},t={map:e("Diffuse",!0),normalMap:e("nor_gl"),roughnessMap:e("Rough")};return al.set(i,t),t}function rl(i,e,t,n){i.fillStyle=n;for(let s=0;s<t;s++)i.fillRect(Math.random()*e,Math.random()*e,1.5,1.5)}function Dr(i,e,t,n,s,r){i.strokeStyle=s,i.lineWidth=r,i.beginPath();for(let o=0;o<2;o++){let a=o*Math.PI/4;for(let l=0;l<4;l++){let c=a+l*Math.PI/2,h=e+Math.cos(c)*n,u=t+Math.sin(c)*n;l?i.lineTo(h,u):i.moveTo(h,u)}i.closePath()}i.stroke()}var Fb={stone:{pbr:{floor:"red_sandstone_pavement",wall:"large_sandstone_blocks_01",tint:"#fff0dc"},props:"ramparts",wallH:2.4,hemi:["#5a3f7a","#2a1a12",1.1],sun:["#ffb070",1.1,[.4,1,.6]],torch:{col:"#ffa040",y:1.75,kind:"flame",light:"#ff9a3c",intensity:14,dist:13},floor:()=>si((i,e)=>{i.fillStyle="#5c4b3c",i.fillRect(0,0,e,e),rl(i,e,900,"rgba(0,0,0,.25)"),rl(i,e,500,"rgba(255,220,180,.12)"),i.strokeStyle="rgba(20,10,5,.55)",i.lineWidth=4,i.strokeRect(2,2,e-4,e-4),Dr(i,e/2,e/2,e*.36,"rgba(201,168,76,.28)",3),Dr(i,e/2,e/2,e*.18,"rgba(76,224,224,.18)",2)}),wall:()=>si((i,e)=>{i.fillStyle="#7a6650",i.fillRect(0,0,e,e),rl(i,e,700,"rgba(0,0,0,.22)"),i.strokeStyle="rgba(30,18,10,.6)",i.lineWidth=4;for(let t=0;t<e;t+=64){i.beginPath(),i.moveTo(0,t),i.lineTo(e,t),i.stroke();for(let n=t/64%2?64:0;n<e;n+=128)i.beginPath(),i.moveTo(n,t),i.lineTo(n,t+64),i.stroke()}i.fillStyle="rgba(201,168,76,.5)",i.fillRect(0,18,e,10),Dr(i,e*.25,23,9,"rgba(11,7,19,.6)",2),Dr(i,e*.75,23,9,"rgba(11,7,19,.6)",2)}),top:()=>si((i,e)=>{i.fillStyle="#8a7560",i.fillRect(0,0,e,e),rl(i,e,600,"rgba(0,0,0,.2)"),i.strokeStyle="rgba(30,18,10,.5)",i.lineWidth=4,i.strokeRect(2,2,e-4,e-4)})},slab:{pbr:{floor:"metal_plate",wall:"metal_plate",tint:"#e8def4",glowFloor:!0},props:"venus",wallH:.9,hemi:["#ffc8ee","#5a3a5c",1.7],sun:["#ffd2a8",1.6,[-.5,1,.5]],torch:{col:ue.pink,y:1.4,kind:"pylon",light:"#ff7ad9",intensity:10,dist:12},floor:()=>si((i,e)=>{i.fillStyle="#4a2a5c",i.fillRect(0,0,e,e);let t=e/4;i.strokeStyle="rgba(255,150,225,.8)",i.lineWidth=3;for(let s=0;s<3;s++)for(let r=0;r<3;r++){let o=r*t*1.6+s%2*t*.8+t*.4,a=s*t*1.4+t*.5;i.beginPath();for(let l=0;l<6;l++){let c=l*Math.PI/3,h=o+Math.cos(c)*t*.45,u=a+Math.sin(c)*t*.45;l?i.lineTo(h,u):i.moveTo(h,u)}i.closePath(),i.stroke()}let n=i.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);n.addColorStop(0,"rgba(255,122,217,.12)"),n.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=n,i.fillRect(0,0,e,e)}),wall:()=>si((i,e)=>{i.fillStyle="#3b1d45",i.fillRect(0,0,e,e),i.fillStyle="rgba(255,122,217,.85)",i.fillRect(0,0,e,8),i.fillStyle="rgba(76,224,224,.7)";for(let t=16;t<e;t+=48)i.fillRect(t,e/2-3,20,6)}),top:()=>si((i,e)=>{i.fillStyle="#4a2456",i.fillRect(0,0,e,e),i.strokeStyle="rgba(255,122,217,.8)",i.lineWidth=8,i.strokeRect(4,4,e-8,e-8)})},stacks:{pbr:{floor:"dark_wooden_planks",pillar:"cobblestone_03",tint:"#f0d0a8"},props:"archive",wallH:2.8,hemi:["#6a5aaa","#3a2418",1.9],sun:["#c8a8ff",1.3,[.2,1,.3]],torch:{col:"#ffd27a",y:1.2,kind:"candle",light:"#ffc66a",intensity:9,dist:10},floor:()=>si((i,e)=>{i.fillStyle="#3a2618",i.fillRect(0,0,e,e),i.strokeStyle="rgba(0,0,0,.45)",i.lineWidth=3;for(let t=0;t<e;t+=42)i.beginPath(),i.moveTo(0,t),i.lineTo(e,t),i.stroke();i.strokeStyle="rgba(255,200,140,.08)",i.lineWidth=1;for(let t=0;t<40;t++){let n=Math.random()*e;i.beginPath(),i.moveTo(0,n),i.bezierCurveTo(e/3,n+6,e*2/3,n-6,e,n),i.stroke()}i.fillStyle="rgba(155,108,255,.10)",i.beginPath(),i.arc(e*.7,e*.3,e*.12,0,7),i.fill()}),wall:()=>si((i,e)=>{i.fillStyle="#2a1a10",i.fillRect(0,0,e,e);let t=["#8c2f2f","#2f6b4a","#c9a84c","#2f4b8c","#e8dcc0","#6b3a8c","#b56a2a"];for(let n=0;n<3;n++){let s=12+n*82;i.fillStyle="#1a100a",i.fillRect(0,s+66,e,8);let r=4;for(;r<e-4;){let o=9+Math.random()*14;i.fillStyle=t[Math.floor(Math.random()*t.length)],i.fillRect(r,s+6+Math.random()*8,o-2,60),r+=o}}}),top:()=>si((i,e)=>{i.fillStyle="#3a2618",i.fillRect(0,0,e,e),i.strokeStyle="rgba(0,0,0,.5)",i.lineWidth=6,i.strokeRect(3,3,e-6,e-6)})}};function kb(i,e,t=.5){let n=i.floor.size,s=new Float32Array(n*12),r=new Float32Array(n*12),o=new Float32Array(n*8),a=new Uint32Array(n*6),l=0;for(let h of i.floor){let[u,d]=h.split(",").map(Number),f=u*2,x=d*2,p=f+2,g=x+2,m=l*4;s.set([f,0,x,p,0,x,p,0,g,f,0,g],l*12),r.set([0,1,0,0,1,0,0,1,0,0,1,0],l*12),o.set([f*t,x*t,p*t,x*t,p*t,g*t,f*t,g*t],l*8),a.set([m,m+2,m+1,m,m+3,m+2],l*6),l++}let c=new lt;return c.setAttribute("position",new et(s,3)),c.setAttribute("normal",new et(r,3)),c.setAttribute("uv",new et(o,2)),c.setIndex(new et(a,1)),new ge(c,e)}function Bb(i){let e=new Pt({side:Qt,depthWrite:!1,fog:!1,uniforms:{c0:{value:new Te(i[0])},c1:{value:new Te(i[1])},c2:{value:new Te(i[2])}},vertexShader:"varying vec3 vp; void main(){ vp=normalize(position); gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"uniform vec3 c0,c1,c2; varying vec3 vp; void main(){ float h=vp.y; vec3 c = h>0.0 ? mix(c1,c0,smoothstep(0.0,0.7,h)) : mix(c1,c2,smoothstep(0.0,-0.5,h)); gl_FragColor=vec4(c,1.0); }"}),t=new ge(new tn(190,24,16),e);return t.frustumCulled=!1,t}function Hb(i){let e=new Float32Array(i*3);for(let s=0;s<i;s++){let r=Math.random()*6.283,o=Math.acos(Math.random()*.9+.1),a=175;e.set([a*Math.sin(o)*Math.cos(r),a*Math.cos(o),a*Math.sin(o)*Math.sin(r)],s*3)}let t=new lt;t.setAttribute("position",new et(e,3));let n=new bi(t,new Vi({color:"#fff4dc",size:1.6,sizeAttenuation:!1,transparent:!0,opacity:.85,fog:!1}));return n.frustumCulled=!1,n}function ol(i,e,t,n){let s=si(e,256),r=new ge(new tn(i,32,24),new We({map:s,fog:!1}));if(r.position.set(...t),r.frustumCulled=!1,n){let o=new ge(new ln(i*1.4,i*2.3,64),new We({color:"#e8d6a8",transparent:!0,opacity:.75,side:gt,fog:!1}));o.rotation.x=-1.2,o.rotation.y=.3,r.add(o)}return r}function Um(i){return(e,t)=>{for(let n=0;n<i.length;n++)e.fillStyle=i[n],e.fillRect(0,n*t/i.length,t,t/i.length+2);for(let n=0;n<40;n++)e.fillStyle="rgba(255,255,255,.08)",e.beginPath(),e.ellipse(Math.random()*t,Math.random()*t,20+Math.random()*40,4+Math.random()*6,0,0,7),e.fill()}}function Vb(i,e){i.fillStyle="#1e5fb8",i.fillRect(0,0,e,e),i.fillStyle="#3f8f3a";for(let t=0;t<9;t++)i.beginPath(),i.ellipse(Math.random()*e,Math.random()*e,20+Math.random()*50,15+Math.random()*35,Math.random()*3,0,7),i.fill();i.fillStyle="rgba(255,255,255,.55)";for(let t=0;t<30;t++)i.beginPath(),i.ellipse(Math.random()*e,Math.random()*e,18+Math.random()*30,4+Math.random()*5,Math.random()*3,0,7),i.fill()}function Gb(i,e){i.fillStyle="#c9c4b8",i.fillRect(0,0,e,e);for(let t=0;t<40;t++)i.fillStyle="rgba(60,55,50,.35)",i.beginPath(),i.arc(Math.random()*e,Math.random()*e,3+Math.random()*12,0,7),i.fill()}function gu(i,e,t,n=null,s={}){let r=Fb[e.style],o=new Be;i.add(o);let a=[];i.background=new Te(t.sky[2]),i.fog=new Ea(t.fog,34,95);let l=Bb(t.sky);o.add(l),e.style!=="stacks"&&o.add(Hb(e.style==="slab"?700:400));let c=[];if(e.style==="slab"){c.push(ol(34,Vb,[40,-95,-60]),ol(9,Gb,[-30,-70,-20]),ol(48,Um(["#c7a27a","#e3c39a","#a9744f","#e8d3b0","#b8865c","#d9b98f","#a06a48"]),[-110,-120,-150]),ol(30,Um(["#e9d8a6","#d4bf8a","#f0e2b8","#c9b07a"]),[120,-105,-110],!0));for(let Z of c)o.add(Z)}let h=new za(r.hemi[0],r.hemi[1],r.hemi[2]);o.add(h);let u=new wr(r.sun[0],r.sun[1]*1.3),d=new O(...r.sun[2]).normalize();if(o.add(u,u.target),s.shadows){u.castShadow=!0,u.shadow.mapSize.set(1024,1024);let Z=u.shadow.camera;Z.left=Z.bottom=-16,Z.right=Z.top=16,Z.near=1,Z.far=80,u.shadow.bias=-8e-4,u.shadow.normalBias=.03}let f=r.floor(),x=r.wall(),p=r.top();a.push(f,x,p);let g;r.pbr&&r.pbr.floor?(g=new Ye({...Lr(r.pbr.floor),color:r.pbr.tint,roughness:1,metalness:r.pbr.glowFloor?.2:.05,normalScale:new Re(1.2,1.2)}),r.pbr.glowFloor&&(g.emissive=new Te("#ff7ad9"),g.emissiveIntensity=.75,g.emissiveMap=f)):g=new Ye({map:f,roughness:.88,metalness:.05});let m=kb(e,g,r.pbr?.25:.5);m.receiveShadow=!0,o.add(m),a.push(m.geometry,m.material);let _=r.wallH,v=new It(2,_,2);v.translate(0,_/2,0);let y=r.pbr&&r.pbr.wall&&e.style==="stone"?new Ye({...Lr(r.pbr.wall),color:"#f0dcc0",roughness:1}):new Ye({map:x,roughness:.85,...r.pbr&&r.pbr.wall?{normalMap:Lr(r.pbr.wall).normalMap,metalness:.5}:{}}),w=new Ye({map:p,roughness:.9});e.style==="slab"&&(y.emissive=new Te("#ff7ad9"),y.emissiveIntensity=.25,y.emissiveMap=x);let E=[y,y,w,w,y,y],S=[...e.walls].map(Z=>Z.split(",").map(Number)),C=[],b=[];for(let Z of e.inner){let[K,$]=Z.split(",").map(Number),ee=e.roomAt((K+.5)*2,($+.5)*2);(ee&&ee.pillars?b:C).push([K,$])}let M=new Hi(v,E,S.length+C.length),I=new Ge,B=new Te;if([...S,...C].forEach(([Z,K],$)=>{I.makeTranslation((Z+.5)*2,0,(K+.5)*2),M.setMatrixAt($,I),B.setHSL(0,0,.82+Math.random()*.18),M.setColorAt($,B)}),M.castShadow=M.receiveShadow=!0,M.instanceMatrix.needsUpdate=!0,M.instanceColor&&(M.instanceColor.needsUpdate=!0),o.add(M),a.push(v,y,w),b.length){let Z=new vt(.55,.68,_+.6,12);Z.translate(0,(_+.6)/2,0);let K=r.pbr&&(r.pbr.pillar||r.pbr.wall)?new Ye({...Lr(r.pbr.pillar||r.pbr.wall),color:"#e8d4b8",roughness:1}):new Ye({map:x,roughness:.8}),$=new Hi(Z,K,b.length);$.castShadow=$.receiveShadow=!0;let ee=new Hi(new It(1.6,.3,1.6),new Ye({color:ue.gold,roughness:.4,metalness:.6}),b.length);b.forEach(([re,se],_e)=>{I.makeTranslation((re+.5)*2,0,(se+.5)*2),$.setMatrixAt(_e,I),I.makeTranslation((re+.5)*2,_+.6,(se+.5)*2),ee.setMatrixAt(_e,I)}),$.instanceMatrix.needsUpdate=!0,ee.instanceMatrix.needsUpdate=!0,o.add($,ee),a.push(Z,K)}let k=new ge(new An(600,600),new Ye({color:e.style==="stone"?"#0d1a3a":e.style==="slab"?"#1a0a22":"#050308",roughness:1,metalness:0}));k.rotation.x=-Math.PI/2,k.position.y=-.5,e.style!=="slab"&&o.add(k);let V=[];for(let Z of e.torches){let K=Z.dir==="S"?[0,1]:Z.dir==="N"?[0,-1]:Z.dir==="E"?[1,0]:[-1,0],$=Z.x+K[0]*1.02,ee=Z.z+K[1]*1.02,re=new Be;if(re.position.set($,0,ee),r.torch.kind==="flame"){let T=new ge(new It(.18,.5,.18),new Ye({color:"#2a1a10"}));T.position.y=r.torch.y-.3,re.add(T);let ye=new ge(new vt(.2,.1,.18,8),new Ye({color:ue.gold,metalness:.7,roughness:.3}));ye.position.y=r.torch.y-.02,re.add(ye)}else if(r.torch.kind==="pylon"){let T=new ge(new vt(.08,.12,r.torch.y,8),new Ye({color:"#3b1d45",emissive:ue.pink,emissiveIntensity:.8}));T.position.y=r.torch.y/2,re.add(T)}else{let T=new ge(new vt(.07,.09,.5,8),new Ye({color:"#efe3c0"}));T.position.y=r.torch.y-.25,re.add(T);let ye=new ge(new vt(.16,.2,.9,8),new Ye({color:"#1a100a"}));ye.position.y=r.torch.y-.95,re.add(ye)}let se=bt(r.torch.col,r.torch.kind==="candle"?.9:1.6,.75),_e=bt("#fff2c0",r.torch.kind==="candle"?.35:.6,.9);se.position.y=_e.position.y=r.torch.y+.22,re.add(se,_e),o.add(re),V.push({g:re,outer:se,inner:_e,x:$,z:ee,seed:Math.random()*10})}let L=[];for(let Z=0;Z<6;Z++){let K=new ti(r.torch.light,0,r.torch.dist,2);K.position.set(0,-50,0),o.add(K),L.push(K)}let A=e.gateCells,F=new Be;if(A.length){let Z=(A[0][0]+A[1][0]+1)/2*2,K=(A[0][1]+A[1][1]+1)/2*2,$=A[0][1]===A[1][1],ee=new Ye({color:"#15151c",emissive:ue.char,emissiveIntensity:.35,metalness:.8,roughness:.3});for(let _e=-3;_e<=3;_e++){let T=new ge(new vt(.09,.09,3.2,8),ee);T.position.set($?_e*.58:0,1.6,$?0:_e*.58),F.add(T)}let re=new ge(new It($?2*2:.3,.26,$?.3:2*2),ee);re.position.y=3.1,F.add(re);let se=re.clone();se.position.y=.4,F.add(se),F.position.set(Z,7,K),F.visible=!1,o.add(F)}Kb(o,e,r,e.style),Yb(o,e,r,n);let U=Zb(o,e.style),D=$b(o,e,e.style),H=7,Q=!1;function ce(){Q=!0,F.visible=!0,H=0}function pe(){Q=!1,H=7}let Y=0;function oe(Z,K,$,ee){for(let re of V){let se=.85+Math.sin(K*13+re.seed)*.1+Math.sin(K*29+re.seed*3)*.06;re.outer.scale.setScalar((r.torch.kind==="candle"?.9:1.6)*se),re.inner.scale.setScalar((r.torch.kind==="candle"?.35:.6)*(2-se))}if(Y-=Z,Y<=0){Y=.25;let re=V.map(se=>({tr:se,d:(se.x-$)**2+(se.z-ee)**2})).sort((se,_e)=>se.d-_e.d).slice(0,L.length);L.forEach((se,_e)=>{let T=re[_e];T&&T.d<30*30?(se.userData.on=!0,se.position.set(T.tr.x,r.torch.y+.3,T.tr.z),se.userData.seed=T.tr.seed):se.userData.on=!1})}for(let re of L)re.intensity=re.userData.on?r.torch.intensity*(.85+Math.sin(K*11+(re.userData.seed||0))*.15):0;for(let re of c)re.rotation.y+=Z*.02;F.visible&&(F.position.y+=(H-F.position.y)*Math.min(1,Z*6),!Q&&F.position.y>6.5&&(F.visible=!1)),l.position.set($,0,ee),U.update(Z,K,$,ee);for(let re of D)re.material.opacity=re.userData.base*(.75+Math.sin(K*.7+re.userData.seed)*.25);u.target.position.set($,0,ee),u.position.set($+d.x*40,d.y*40,ee+d.z*40)}function ie(){i.remove(o);for(let Z of a)Z.dispose&&Z.dispose();i.fog=null}return{group:o,update:oe,dispose:ie,gate:{seal:ce,open:pe},wallH:_,style:e.style}}var Wb={ramparts:{floor:["ramp_arch","ramp_pillar","ramp_brazier","ramp_arch","ramp_pillar","rubble_large","box_stacked","barrel_large","sword_shield_broken"],banners:["banner_patternA_red","banner_patternA_yellow","banner_shield_red"]},venus:{floor:["venus_pylon","venus_module","venus_node","venus_pylon","venus_module"],banners:[]},archive:{floor:["arch_stack","arch_candles","arch_press","arch_stack","arch_candles","shelf_small_candles","candle_triple","table_medium_decorated_A","trunk_medium_B"],banners:[]}};function Xb(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function Yb(i,e,t,n){let s=Wb[t.props];if(!s||!n||!n.props)return;let r=Xb(e.key.length*977+e.rooms.length),o=(c,h)=>c+","+h,a=[...e.boxes,e.start].map(c=>[Math.floor(c.x/2),Math.floor(c.z/2)]),l=(c,h,u,d,f=.5,x=0)=>{let p=n.props[c];if(!p)return!1;let g=p.clone(!0);return g.scale.setScalar(f),g.position.set(h,x,u),g.rotation.y=d,g.traverse(m=>{m.isMesh&&(m.castShadow=!0,m.receiveShadow=!0)}),i.add(g),!0};for(let c of e.rooms){if(c.kind==="boss")continue;let h=c.rect,u=[];for(let p=h.x0;p<h.x1;p++)for(let g=h.z0;g<h.z1;g++){if(e.solidCell(p,g))continue;let m=[[1,0],[-1,0],[0,1],[0,-1]].find(([_,v])=>e.walls.has(o(p+_,g+v)));m&&(c.doors.some(_=>Math.abs(_.x-p)<3&&Math.abs(_.z-g)<3)||a.some(([_,v])=>Math.abs(_-p)<2&&Math.abs(v-g)<2)||u.push([p,g,m]))}for(let p=u.length-1;p>0;p--){let g=Math.floor(r()*(p+1));[u[p],u[g]]=[u[g],u[p]]}let d=0,f=[],x=3+Math.floor(r()*3);for(let[p,g,[m,_]]of u){if(d>=x)break;if(f.some(([E,S])=>Math.abs(E-p)<3&&Math.abs(S-g)<3))continue;let v=s.floor[Math.floor(r()*s.floor.length)],y=(p+.5)*2+m*.35,w=(g+.5)*2+_*.35;l(v,y,w,Math.atan2(-m,-_)+(r()-.5)*.6)&&(e.inner.add(o(p,g)),f.push([p,g]),d++)}if(s.banners.length){let p=0;for(let g of e.torches){let m=Math.floor(g.x/2),_=Math.floor(g.z/2);if(m<h.x0-1||m>h.x1||_<h.z0-1||_>h.z1||p++%2)continue;let v=g.dir==="S"?[0,1]:g.dir==="N"?[0,-1]:g.dir==="E"?[1,0]:[-1,0],y=[v[1],-v[0]];l(s.banners[p%s.banners.length],g.x+v[0]*1.02+y[0]*1,g.z+v[1]*1.02+y[1]*1,Math.atan2(v[0],v[1]),.42,.2)}}}}function qb(i){let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d");t.strokeStyle=i,t.lineWidth=6,t.shadowColor=i,t.shadowBlur=18,t.strokeRect(10,10,236,236),Dr(t,128,128,88,i,5),Dr(t,128,128,44,i,3);let n=new Rn(e);return n.colorSpace=mt,n}var zm={stone:{wall:"large_sandstone_blocks_01",tint:"#f0dcc0",rune:"#ffc65a"},slab:{wall:"metal_plate",tint:"#b8a8d8",rune:"#ff7ad9"},stacks:{wall:"cobblestone_03",tint:"#e8d4b8",rune:"#b89aff"}};function Kb(i,e,t,n){if(!e.plinths||!e.plinths.size)return;let s=zm[n]||zm.stone,r=new Ye({...Lr(s.wall),color:s.tint,roughness:1}),o=new Ye({...Lr(s.wall),color:s.tint,roughness:.9}),a=new Ye({color:ue.gold,metalness:.75,roughness:.3,emissive:"#3a2a08",emissiveIntensity:.4}),l=new We({map:qb(s.rune),transparent:!0,opacity:.55,blending:ht,depthWrite:!1}),c=new It(2,1,2),h=new It(2+.06,.1,2+.06),u=new An(2*.9,2*.9);for(let[d,f]of e.plinths){let[x,p]=d.split(",").map(Number),g=(x+.5)*2,m=(p+.5)*2,_=new ge(c,[r,r,o,o,r,r]);_.scale.y=f,_.position.set(g,f/2,m),_.castShadow=_.receiveShadow=!0,i.add(_);let v=new ge(h,a);v.position.set(g,f-.05,m),i.add(v);let y=new ge(u,l);y.rotation.x=-Math.PI/2,y.position.set(g,f+.02,m),i.add(y)}}function Zb(i,e){let s=new Float32Array(780),r=new Float32Array(260);for(let f=0;f<260;f++)s[f*3]=(Math.random()-.5)*16*2,s[f*3+1]=Math.random()*7,s[f*3+2]=(Math.random()-.5)*16*2,r[f]=Math.random()*6.28;let o=new lt;o.setAttribute("position",new et(s,3));let a=e==="slab"?"#ff9ae6":e==="stacks"?"#ffe2a8":"#ffaa55",l=new Vi({color:a,size:e==="stacks"?.07:.1,transparent:!0,opacity:.75,blending:ht,depthWrite:!1,map:bt(a,1).material.map}),c=new bi(o,l);c.frustumCulled=!1,i.add(c);let h=e==="stone"?.55:e==="slab"?.25:.08,u=0,d=0;return{update(f,x,p,g){let m=p-u,_=g-d;u=p,d=g;for(let v=0;v<260;v++){let y=s[v*3]-m,w=s[v*3+1]+h*f,E=s[v*3+2]-_;y+=Math.sin(x*.6+r[v])*.12*f,E+=Math.cos(x*.5+r[v])*.12*f,y>16?y-=2*16:y<-16&&(y+=2*16),E>16?E-=2*16:E<-16&&(E+=2*16),w>7&&(w-=7),s[v*3]=y,s[v*3+1]=w,s[v*3+2]=E}c.position.set(p,0,g),o.attributes.position.needsUpdate=!0}}}function $b(i,e,t){let n=document.createElement("canvas");n.width=64,n.height=256;let s=n.getContext("2d"),r=s.createLinearGradient(0,0,0,256);r.addColorStop(0,"rgba(255,255,255,0.9)"),r.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=r,s.fillRect(0,0,64,256);let o=s.createLinearGradient(0,0,64,0);o.addColorStop(0,"rgba(0,0,0,1)"),o.addColorStop(.5,"rgba(0,0,0,0)"),o.addColorStop(1,"rgba(0,0,0,1)"),s.globalCompositeOperation="destination-out",s.fillStyle=o,s.fillRect(0,0,64,256);let a=new Rn(n),l=t==="slab"?"#ffb2ec":t==="stacks"?"#b8a0ff":"#ffd9a0",c=[];for(let h of e.rooms){if(h.kind==="boss")continue;let u=h.center.x+(h.rect.x1-h.rect.x0)*.35,d=h.center.z-1;for(let f of[0,Math.PI/2]){let x=new ge(new An(3.2,11),new We({map:a,color:l,transparent:!0,opacity:.1,blending:ht,depthWrite:!1,side:gt}));x.position.set(u,4.8,d),x.rotation.set(0,f,-.28),x.userData={base:t==="stacks"?.14:.1,seed:Math.random()*6},i.add(x),c.push(x)}}return c}var ri=(i,e={})=>new Ye({color:i,roughness:.7,metalness:.05,...e});function qn(i,e,t,n){return new ge(new It(i,e,t),n)}function es(i,e,t,n,s=10){return new ge(new vt(i,e,t,s),n)}function ll(i,e,t=14,n=10){return new ge(new tn(i,t,n),e)}function Jb(){let i=document.createElement("canvas");i.width=256,i.height=128;let e=i.getContext("2d");e.fillStyle="rgba(76,224,224,.08)",e.fillRect(0,0,256,128),e.strokeStyle="rgba(200,255,255,.9)",e.lineWidth=2;for(let n=0;n<5;n++)for(let s=0;s<8;s++){let r=s*34+n%2*17,o=n*30+8;e.beginPath();for(let a=0;a<6;a++){let l=a*Math.PI/3+Math.PI/6,c=r+Math.cos(l)*15,h=o+Math.sin(l)*15;a?e.lineTo(c,h):e.moveTo(c,h)}e.closePath(),e.stroke()}let t=new Rn(i);return t.colorSpace=mt,t.wrapS=t.wrapT=dn,t}function km(i,e){let t=new Be;i.add(t);let n={skin:ri(e.skin),skinD:ri(e.skinD),robe:ri(e.robe),robeL:ri(e.robeL),robeD:ri(e.robeD),pant:ri(e.pant),hair:ri(e.hair,{roughness:.9}),gold:ri(e.wrapB,{metalness:.75,roughness:.3}),boot:ri("#0e0b14",{roughness:.6}),gem:new Ye({color:e.gem,emissive:e.gem,emissiveIntensity:1.2})},s=Object.values(n);t.add(Yn(.62));let r=new ti(e.aura,5,7,2);r.position.y=1.9,t.add(r);let o=new ge(new ln(.5,.78,40),new We({color:e.aura,transparent:!0,opacity:.55,blending:ht,depthWrite:!1,side:gt}));o.rotation.x=-Math.PI/2,o.position.y=.05,t.add(o);let a=new Be;t.add(a);let l=qn(.5,.22,.3,n.pant);l.position.y=.98,a.add(l);let c=qn(.54,.07,.34,n.gold);c.position.y=1.1,a.add(c);let h=qn(.58,.6,.34,n.robe);h.position.y=1.42,a.add(h);let u=qn(.3,.42,.04,n.gold);u.position.set(0,1.45,.18),a.add(u);let d=qn(.62,.1,.38,n.robeL);d.position.y=1.72,a.add(d);for(let $ of[-1,1]){let ee=ll(.13,n.robeL);ee.position.set($*.34,1.66,0),a.add(ee)}let f=es(.08,.09,.12,n.skinD);f.position.y=1.8,a.add(f);let x=new Be;x.position.y=1.98,a.add(x),x.add(ll(.21,n.skin,16,12));let p=new ge(new tn(.235,16,8,0,Math.PI*2,0,Math.PI*.55),n.hair);if(p.position.y=.02,x.add(p),e.queen){let $=es(.06,.05,.55,n.hair);$.position.set(0,-.2,-.2),$.rotation.x=.35,x.add($);let ee=ll(.2,n.hair,12,8);ee.position.set(0,.16,-.06),ee.scale.set(1.2,.8,1.1),x.add(ee)}else{let $=es(.19,.24,.12,n.hair,12);$.position.y=.17,x.add($)}let g=new ge(new ei(.215,.028,8,24),n.gold);g.rotation.x=Math.PI/2,g.position.y=.06,x.add(g);let m=new ge(new br(.05),n.gem);m.position.set(0,.06,.22),x.add(m);for(let $ of[-1,1]){let ee=new ge(new tn(.03,8,6),new We({color:e.accent}));ee.position.set($*.08,-.01,.19),x.add(ee)}function _($){let ee=new Be;ee.position.set($*.36,1.62,0);let re=es(.085,.075,.36,n.robeL);re.position.y=-.18,ee.add(re);let se=new Be;se.position.y=-.36,ee.add(se);let _e=es(.07,.06,.34,n.skin);_e.position.y=-.17,se.add(_e);let T=es(.09,.09,.06,n.gold);T.position.y=-.04,se.add(T);let ye=new Be;return ye.position.y=-.36,se.add(ye),ye.add(ll(.075,n.skinD,10,8)),{g:ee,elbow:se,hand:ye}}let v=_(1),y=_(-1);a.add(v.g,y.g);let w=new Be;w.rotation.x=Math.PI/2,v.hand.add(w),w.add(qn(.11,.12,.42,ri("#141020",{metalness:.6,roughness:.35})));let E=qn(.13,.14,.08,n.gold);E.position.z=.02,w.add(E);let S=new Ye({color:"#ffffff",emissive:"#C9A84C",emissiveIntensity:1.5}),C=new ge(new vt(.05,.06,.16,8),S);C.rotation.x=Math.PI/2,C.position.z=.27,w.add(C);let b=bt("#C9A84C",.5,.8);b.position.z=.3,w.add(b);let M=new We({color:e.aura,transparent:!0,opacity:.95,blending:ht,depthWrite:!1}),I=new Be;I.visible=!1,y.hand.add(I);let B=new ge(new It(.06,.06,2),new We({color:"#ffffff",transparent:!0,opacity:.95,blending:ht,depthWrite:!1}));B.position.z=1,I.add(B);let k=new ge(new It(.16,.12,2.1),M);k.position.z=1.05,I.add(k);let V=qn(.08,.08,.26,n.gold);V.position.z=-.05,I.add(V);let L=new ge(new ln(.5,tl,28,1,-$i,$i*2),new We({color:e.aura,transparent:!0,opacity:0,blending:ht,depthWrite:!1,side:gt}));L.rotation.x=-Math.PI/2,L.rotation.z=-Math.PI/2,L.position.y=1.05,t.add(L);let A=new We({map:Jb(),color:e.accent,transparent:!0,opacity:0,blending:ht,depthWrite:!1,side:gt}),F=new ge(new vt(1.05,1.05,2,24,1,!0,-ji,ji*2),A);F.position.y=1.05,t.add(F);let U=bt(e.accent,2.6,0);U.position.set(0,1,.7),t.add(U);function D($){let ee=new Be;ee.position.set($*.15,.9,0);let re=es(.11,.095,.42,n.pant);re.position.y=-.21,ee.add(re);let se=new Be;se.position.y=-.42,ee.add(se);let _e=es(.09,.08,.4,n.pant);_e.position.y=-.2,se.add(_e);let T=qn(.2,.14,.32,n.boot);T.position.set(0,-.45,.05),se.add(T);let ye=qn(.22,.04,.34,n.gold);return ye.position.set(0,-.39,.05),se.add(ye),{g:ee,knee:se}}let H=D(1),Q=D(-1);a.add(H.g,Q.g);let ce=null;if(!e.queen)ce=qn(.5,.72,.07,n.robeD),ce.position.set(0,.62,-.19),a.add(ce);else{let $=new ge(new vt(.3,.46,.4,14,1,!0),n.robeL);$.position.y=.78,a.add($)}let pe={phase:0,bladeT:-1,bladeN:0,hurtT:0};function Y($){S.emissive.set($),b.material.color.set($)}function oe($){pe.bladeT=0,pe.bladeN=$,I.visible=!0}function ie(){pe.hurtT=.18}function Z($,ee,re){t.position.set(re.x,0,re.z),t.rotation.y=Math.atan2(re.fx,re.fz),t.visible=re.alive&&!(re.invuln>0&&Math.floor(ee*14)%2===0);let se=re.mv;pe.phase+=$*(9+se*4)*(se>.05?1:0);let _e=Math.sin(pe.phase)*.8*se,T=Math.abs(Math.sin(pe.phase))*.07*se,ye=re.mvx*re.fx+re.mvz*re.fz,te=re.mvx*re.fz-re.mvz*re.fx;a.position.y=T,a.rotation.x=re.dashing?.55:.16*ye*se,a.rotation.z=-.14*te*se,H.g.rotation.x=re.dashing?-.9:_e,Q.g.rotation.x=re.dashing?.9:-_e,H.knee.rotation.x=Math.max(0,-_e)*1.2,Q.knee.rotation.x=Math.max(0,_e)*1.2,h.scale.y=1+Math.sin(ee*2.1)*.015*(1-se);let Me=re.firing||re.charge>.05||se<.05;if(v.g.rotation.x=Me?-Math.PI/2+.1:-_e*.9,v.g.rotation.z=Me?-.12:0,v.elbow.rotation.x=Me?0:-.5,pe.bladeT>=0){pe.bladeT+=$/.22;let Ce=Math.min(1,pe.bladeT),Ne=pe.bladeN,N=Ne===2?-1.4:Ne===1?-$i:$i,R=Ne===2?-1.6:-N;y.g.rotation.x=-Math.PI/2+(Ne===2?Ce<.4?-.6*(1-Ce/.4):.35*(Ce-.4)/.6:0),y.g.rotation.y=Ne===2?0:N+(R-N)*(Ce<.5?2*Ce*Ce:1-2*(1-Ce)*(1-Ce)),y.g.rotation.z=0,y.elbow.rotation.x=0,L.material.opacity=.55*(1-Ce),L.scale.setScalar(Ne===2?1.25:1),pe.bladeT>=1.6&&(pe.bladeT=-1,I.visible=!1,L.material.opacity=0)}else re.ward?(y.g.rotation.x=-Math.PI/2+.3,y.g.rotation.y=.3,y.g.rotation.z=.2,y.elbow.rotation.x=-.6):(y.g.rotation.x=_e*.9,y.g.rotation.y=0,y.g.rotation.z=.08,y.elbow.rotation.x=-.5);let he=re.ward?1:0;if(A.opacity+=(.7*he-A.opacity)*Math.min(1,$*14),U.material.opacity=A.opacity*.5,F.scale.setScalar(.8+.2*A.opacity/.7),A.map.offset.y=ee*.15,re.parryFlash>0?(A.color.set("#ffffff"),A.opacity=1):A.color.set(e.accent),o.material.opacity=.4+Math.sin(ee*3)*.12+(re.charge>0?re.charge*.4:0),o.scale.setScalar(1+Math.sin(ee*3)*.05+re.charge*.5),b.scale.setScalar(.5+re.charge*1.4+(re.firing?.25:0)),ce&&(ce.rotation.x=-.25*se-Math.sin(pe.phase)*.15*se),pe.hurtT>0){pe.hurtT-=$;for(let Ce of s)Ce.emissive.set("#ff2b2b"),Ce.emissiveIntensity=pe.hurtT/.18*1.5}else for(let Ce of s)Ce!==n.gem&&(Ce.emissiveIntensity=0)}function K(){i.remove(t)}return{group:t,update:Z,setWeaponColor:Y,playBlade:oe,hurtFlash:ie,dispose:K,radius:Mn}}function Hm(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new lt,c=0;for(let h=0;h<i.length;++h){let u=i[h],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(t){let h=0,u=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let x=0;x<f.count;++x)u.push(f.getX(x)+h);h+=i[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=Bm(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let p=0;p<o[h].length;++p)f.push(o[h][p][d]);let x=Bm(f);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(x)}}return l}function Bm(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new et(o,t,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let u=l/t;for(let d=0,f=h.count;d<f;d++)for(let x=0;x<t;x++){let p=h.getComponent(d,x);a.setComponent(d+u,x,p)}}else o.set(h.array,l);l+=h.count*t}return s!==void 0&&(a.gpuType=s),a}function xu(i,e){if(e===Kf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===mo||e===Ga){let t=i.getIndex();if(t===null){let o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===mo)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var cl=class extends Ti{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Su(t)}),this.register(function(t){return new wu(t)}),this.register(function(t){return new Nu(t)}),this.register(function(t){return new Ou(t)}),this.register(function(t){return new Uu(t)}),this.register(function(t){return new Au(t)}),this.register(function(t){return new Ru(t)}),this.register(function(t){return new Cu(t)}),this.register(function(t){return new Iu(t)}),this.register(function(t){return new Eu(t)}),this.register(function(t){return new Pu(t)}),this.register(function(t){return new Tu(t)}),this.register(function(t){return new Du(t)}),this.register(function(t){return new Lu(t)}),this.register(function(t){return new Mu(t)}),this.register(function(t){return new zu(t)}),this.register(function(t){return new Fu(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=qi.extractUrlBase(e);o=qi.resolveURL(c,this.path)}else o=qi.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new uo(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Ym){try{o[tt.KHR_BINARY_GLTF]=new ku(e)}catch(u){s&&s(u);return}r=JSON.parse(o[tt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Yu(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case tt.KHR_MATERIALS_UNLIT:o[u]=new bu;break;case tt.KHR_DRACO_MESH_COMPRESSION:o[u]=new Bu(r,this.dracoLoader);break;case tt.KHR_TEXTURE_TRANSFORM:o[u]=new Hu;break;case tt.KHR_MESH_QUANTIZATION:o[u]=new Vu;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function jb(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}var tt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Mu=class{constructor(e){this.parser=e,this.name=tt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new Te(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],nn);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new wr(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new ti(h),c.distance=u;break;case"spot":c=new Fa(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Ai(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}},bu=class{constructor(){this.name=tt.KHR_MATERIALS_UNLIT}getMaterialType(){return We}extendParams(e,t,n){let s=[];e.color=new Te(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],nn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,mt))}return Promise.all(s)}},Eu=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Su=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Re(a,a)}return Promise.all(r)}},wu=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},Tu=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},Au=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Te(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],nn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,mt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},Ru=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},Cu=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Te().setRGB(a[0],a[1],a[2],nn),Promise.all(r)}},Iu=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Pu=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new Te().setRGB(a[0],a[1],a[2],nn),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,mt)),Promise.all(r)}},Lu=class{constructor(e){this.parser=e,this.name=tt.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},Du=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},Nu=class{constructor(e){this.parser=e,this.name=tt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},Ou=class{constructor(e){this.parser=e,this.name=tt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Uu=class{constructor(e){this.parser=e,this.name=tt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},zu=class{constructor(e){this.name=tt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=s.byteOffset||0,c=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}},Fu=class{constructor(e){this.name=tt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==Ln.TRIANGLES&&c.mode!==Ln.TRIANGLE_STRIP&&c.mode!==Ln.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(let x of u){let p=new Ge,g=new O,m=new Rt,_=new O(1,1,1),v=new Hi(x.geometry,x.material,d);for(let y=0;y<d;y++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,y),l.SCALE&&_.fromBufferAttribute(l.SCALE,y),v.setMatrixAt(y,p.compose(g,m,_));for(let y in l)if(y==="_COLOR_0"){let w=l[y];v.instanceColor=new Es(w.array,w.itemSize,w.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&x.geometry.setAttribute(y,l[y]);Ct.prototype.copy.call(v,x),this.parser.assignFinalMaterial(v),f.push(v)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},Ym="glTF",Mo=12,Vm={JSON:1313821514,BIN:5130562},ku=class{constructor(e){this.name=tt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Mo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Ym)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Mo,r=new DataView(e,Mo),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===Vm.JSON){let c=new Uint8Array(e,Mo+o,a);this.content=n.decode(c)}else if(l===Vm.BIN){let c=Mo+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Bu=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=tt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let h in o){let u=Wu[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=Wu[h]||h.toLowerCase();if(o[h]!==void 0){let d=n.accessors[e.attributes[h]],f=Nr[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(let x in f.attributes){let p=f.attributes[x],g=l[x];g!==void 0&&(p.normalized=g)}u(f)},a,c,nn,d)})})}},Hu=class{constructor(){this.name=tt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Vu=class{constructor(){this.name=tt.KHR_MESH_QUANTIZATION}},hl=class extends Gi{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=s-t,u=(n-t)/h,d=u*u,f=d*u,x=e*c,p=x-c,g=-2*f+3*d,m=f-d,_=1-g,v=m-d+u;for(let y=0;y!==a;y++){let w=o[p+y+a],E=o[p+y+l]*h,S=o[x+y+a],C=o[x+y]*h;r[y]=_*w+v*E+g*S+m*C}return r}},Qb=new Rt,Gu=class extends hl{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return Qb.fromArray(r).normalize().toArray(r),r}},Ln={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Nr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Gm={9728:en,9729:un,9984:Ch,9985:eo,9986:er,9987:wn},Wm={33071:xi,33648:so,10497:dn},_u={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Wu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ts={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},eE={CUBICSPLINE:void 0,LINEAR:pr,STEP:fr},yu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function tE(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Ye({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:jn})),i.DefaultMaterial}function Rs(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Ai(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function nE(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;o.push(d)}if(s){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],d=c[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function iE(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function sE(i){let e,t=i.extensions&&i.extensions[tt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+vu(t.attributes):e=i.indices+":"+vu(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+vu(i.targets[n]);return e}function vu(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Xu(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function rE(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var oE=new Ge,Yu=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new jb,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new Er(this.options.manager):this.textureLoader=new ka(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new uo(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return Rs(r,a,s),Ai(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,h]of o.children.entries())r(h,a.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[tt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(qi.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=_u[s.type],a=Nr[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new et(c,o,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=_u[s.type],c=Nr[s.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,x=s.normalized===!0,p,g;if(f&&f!==u){let m=Math.floor(d/f),_="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count,v=t.cache.get(_);v||(p=new c(a,m*f,s.count*f/h),v=new _r(p,f/h),t.cache.add(_,v)),g=new Ms(v,l,d%f/h,x)}else a===null?p=new c(s.count*l):p=new c(a,d,s.count*l),g=new et(p,l,x);if(s.sparse!==void 0){let m=_u.SCALAR,_=Nr[s.sparse.indices.componentType],v=s.sparse.indices.byteOffset||0,y=s.sparse.values.byteOffset||0,w=new _(o[1],v,s.sparse.count*m),E=new c(o[2],y,s.sparse.count*l);a!==null&&(g=new et(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let S=0,C=w.length;S<C;S++){let b=w[S];if(g.setX(b,E[S*l]),l>=2&&g.setY(b,E[S*l+1]),l>=3&&g.setZ(b,E[S*l+2]),l>=4&&g.setW(b,E[S*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=x}return g})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return h.magFilter=Gm[d.magFilter]||un,h.minFilter=Gm[d.minFilter]||wn,h.wrapS=Wm[d.wrapS]||dn,h.wrapT=Wm[d.wrapT]||dn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==en&&h.minFilter!==un,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let o=s.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;let d=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let x=d;t.isImageBitmapLoader===!0&&(x=function(p){let g=new Wt(p);g.needsUpdate=!0,d(g)}),t.load(qi.resolveURL(u,r.path),x,void 0,f)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),Ai(u,o),u.userData.mimeType=o.mimeType||rE(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[tt.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[tt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[tt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Vi,fn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new ho,fn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Ye}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},l=r.extensions||{},c=[];if(l[tt.KHR_MATERIALS_UNLIT]){let u=s[tt.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new Te(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],nn),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,mt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=gt);let h=r.alphaMode||yu.OPAQUE;if(h===yu.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===yu.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==We&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Re(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==We&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==We){let u=r.emissiveFactor;a.emissive=new Te().setRGB(u[0],u[1],u[2],nn)}return r.emissiveTexture!==void 0&&o!==We&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,mt)),Promise.all(c).then(function(){let u=new o(a);return r.name&&(u.name=r.name),Ai(u,r),t.associations.set(u,{materials:e}),r.extensions&&Rs(s,u,r),u})}createUniqueName(e){let t=at.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[tt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Xm(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],h=sE(c),u=s[h];if(u)o.push(u.promise);else{let d;c.extensions&&c.extensions[tt.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Xm(new lt,c,t),s[h]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let h=o[l].material===void 0?tE(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,x=h.length;f<x;f++){let p=h[f],g=o[f],m,_=c[f];if(g.mode===Ln.TRIANGLES||g.mode===Ln.TRIANGLE_STRIP||g.mode===Ln.TRIANGLE_FAN||g.mode===void 0)m=r.isSkinnedMesh===!0?new yr(p,_):new ge(p,_),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),g.mode===Ln.TRIANGLE_STRIP?m.geometry=xu(m.geometry,Ga):g.mode===Ln.TRIANGLE_FAN&&(m.geometry=xu(m.geometry,mo));else if(g.mode===Ln.LINES)m=new Ca(p,_);else if(g.mode===Ln.LINE_STRIP)m=new Mr(p,_);else if(g.mode===Ln.LINE_LOOP)m=new Ia(p,_);else if(g.mode===Ln.POINTS)m=new bi(p,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(m.geometry.morphAttributes).length>0&&iE(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),Ai(m,r),g.extensions&&Rs(s,m,g),t.assignFinalMaterial(m),u.push(m)}for(let f=0,x=u.length;f<x;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&Rs(s,u[0],r),u[0];let d=new Be;r.extensions&&Rs(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,x=u.length;f<x;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Bt(Jf.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Bi(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Ai(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],l=[];for(let c=0,h=o.length;c<h;c++){let u=o[c];if(u){a.push(u);let d=new Ge;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new vr(a,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){let f=s.channels[u],x=s.samplers[f.sampler],p=f.target,g=p.node,m=s.parameters!==void 0?s.parameters[x.input]:x.input,_=s.parameters!==void 0?s.parameters[x.output]:x.output;p.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",_)),c.push(x),h.push(p))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],x=u[2],p=u[3],g=u[4],m=[];for(let _=0,v=d.length;_<v;_++){let y=d[_],w=f[_],E=x[_],S=p[_],C=g[_];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();let b=n._createAnimationTracks(y,w,E,S,C);if(b)for(let M=0;M<b.length;M++)m.push(b[M])}return new Yi(r,void 0,m)})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,oE)});for(let f=0,x=u.length;f<x;f++)h.add(u[f]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new bs:c.length>1?h=new Be:c.length===1?h=c[0]:h=new Ct,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Ai(h,r),r.extensions&&Rs(n,h,r),r.matrix!==void 0){let u=new Ge;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new Be;n.name&&(r.name=s.createUniqueName(n.name)),Ai(r,n),n.extensions&&Rs(t,r,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);let c=h=>{let u=new Map;for(let[d,f]of s.associations)(d instanceof fn||d instanceof Wt)&&u.set(d,f);return h.traverse(d=>{let f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,l=[];ts[r.path]===ts.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(ts[r.path]){case ts.weights:c=Ei;break;case ts.rotation:c=Si;break;case ts.position:case ts.scale:c=wi;break;default:switch(n.itemSize){case 1:c=Ei;break;case 2:case 3:default:c=wi;break}break}let h=s.interpolation!==void 0?eE[s.interpolation]:pr,u=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){let x=new c(l[d]+"."+ts[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),o.push(x)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Xu(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Si?Gu:hl;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function aE(i,e,t){let n=e.attributes,s=new qt;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new O(l[0],l[1],l[2]),new O(c[0],c[1],c[2])),a.normalized){let h=Xu(Nr[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new O,l=new O;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,x=d.max;if(f!==void 0&&x!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(x[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(x[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(x[2]))),d.normalized){let p=Xu(Nr[d.componentType]);l.multiplyScalar(p)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new an;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Xm(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(let o in n){let a=Wu[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return Qe.workingColorSpace!==nn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Qe.workingColorSpace}" not supported.`),Ai(i,e),aE(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?nE(i,e.targets,t):i})}function qu(i){let e=new Map,t=new Map,n=i.clone();return qm(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function qm(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)qm(i.children[n],e.children[n],t)}var dl=i=>at.sanitizeNodeName(i),$m={hips:"root",spine:"hips",chest:"spine",head:"chest","upperarm.l":"chest","lowerarm.l":"upperarm.l","wrist.l":"lowerarm.l","hand.l":"wrist.l","handslot.l":"hand.l","upperarm.r":"chest","lowerarm.r":"upperarm.r","wrist.r":"lowerarm.r","hand.r":"wrist.r","handslot.r":"hand.r","upperleg.l":"hips","lowerleg.l":"upperleg.l","foot.l":"lowerleg.l","toes.l":"foot.l","upperleg.r":"hips","lowerleg.r":"upperleg.r","foot.r":"lowerleg.r","toes.r":"foot.r"},Cs=["root",...Object.keys($m)],Jm={hipsY:.406,armLen:.576};async function jm(i,e){let t=await i.loadAsync(e),n={};t.scene.traverse(r=>{for(let o of Cs)r.name===dl(o)&&(n[o]={q:r.quaternion.clone(),p:r.position.clone()})});for(let r of Cs)if(!n[r])throw new Error("anim library is missing bone "+r);let s={};for(let r of t.animations)s[r.name]=r;return{rest:n,clips:s}}function lE(i){let e=new lt;for(let t of["position","normal","uv"]){let n=i.getAttribute(t);if(!n)continue;let s=new Float32Array(n.count*n.itemSize);for(let r=0;r<n.count;r++)for(let o=0;o<n.itemSize;o++)s[r*n.itemSize+o]=n.getComponent(r,o);e.setAttribute(t,new et(s,n.itemSize))}i.index&&e.setIndex(Array.from(i.index.array));for(let t of i.groups)e.addGroup(t.start,t.count,t.materialIndex);return e}function cE(i,e,t){i.updateMatrixWorld(!0);let n=[],s=[];if(i.traverse(l=>{if(!l.isMesh)return;let c=lE(l.geometry);c.applyMatrix4(l.matrixWorld),c.attributes.normal||c.computeVertexNormals(),n.push(c),s.push(l.material)}),!n.length)throw new Error("model has no meshes");let r=n.length===1?n[0]:Hm(n,!0);r.rotateY(e),r.computeBoundingBox();let o=r.boundingBox,a=t/(o.max.y-o.min.y);return r.translate(-(o.min.x+o.max.x)/2,-o.min.y,-(o.min.z+o.max.z)/2),r.scale(a,a,a),r.computeBoundingBox(),{geo:r,mats:s.length===1?s[0]:s}}function hE(i,e,t){let n=i.array,s=i.count,r={x:e*(t.shoulder??.105),y:e*.815},o=l=>{let c=null,h=-1;for(let u=0;u<s;u++){let d=n[u*3]*l,f=n[u*3+1];f>e*.36&&f<e*.64&&d>h&&(h=d,c=[n[u*3],f,n[u*3+2]])}return c},a=l=>{let c=0,h=0;for(let u=0;u<s;u++){let d=n[u*3];n[u*3+1]<e*.07&&d*l>e*.01&&(c+=d,h++)}return h?c/h:l*e*.07};return{sh:r,tipL:o(1),tipR:o(-1),ankleL:a(1),ankleR:a(-1),hipsY:e*.5,spineY:e*.6,chestY:e*.7,headY:e*.855,legX:e*(t.hipWidth??.085),legTopY:e*.49}}function uE(i,e,t){let n={};for(let o of Cs){let a=new bs;a.name=dl(o),a.quaternion.copy(i.rest[o].q),n[o]=a}for(let[o,a]of Object.entries($m))n[a].add(n[o]);n.hips.position.set(0,e.hipsY,0),n.spine.position.set(0,e.spineY-e.hipsY,0),n.chest.position.set(0,e.chestY-e.spineY,0),n.head.position.set(0,e.headY-e.chestY,0);let s=new O(0,1,0),r=(o,a,l,c)=>{let h=s.clone().applyQuaternion(a),u=new O().subVectors(c,l).normalize();o.quaternion.copy(new Rt().setFromUnitVectors(h,u).multiply(a))};for(let[o,a,l,c]of[["l",1,e.tipL,e.ankleL],["r",-1,e.tipR,e.ankleR]]){let h=new O(a*e.sh.x,e.sh.y,0),u=l?new O(...l):h.clone().add(new O(a*.2*t,-.38*t,0)),d=h.distanceTo(u);n["upperarm."+o].position.set(a*e.sh.x,e.sh.y-e.chestY,0),r(n["upperarm."+o],i.rest["upperarm."+o].q,h,u),n["lowerarm."+o].position.set(0,d*.42,0),n["wrist."+o].position.set(0,d*.38,0),n["hand."+o].position.set(0,d*.08,0),n["handslot."+o].position.copy(i.rest["handslot."+o].p).multiplyScalar(d/Jm.armLen);let f=new O(a*e.legX,e.legTopY,0),x=new O(c,t*.045,0),p=f.distanceTo(x);n["upperleg."+o].position.set(a*e.legX,e.legTopY-e.hipsY,0),r(n["upperleg."+o],i.rest["upperleg."+o].q,f,x),n["lowerleg."+o].position.set(0,p*.5,0),n["foot."+o].position.set(0,p*.5,0),n["toes."+o].position.set(0,t*.075,0)}return n}var dE=["hips","spine","chest","head","upperarm.l","lowerarm.l","wrist.l","hand.l","upperarm.r","lowerarm.r","wrist.r","hand.r","upperleg.l","lowerleg.l","foot.l","upperleg.r","lowerleg.r","foot.r"],Km={hips:"spine",spine:"chest",chest:"head","upperarm.l":"lowerarm.l","lowerarm.l":"wrist.l","wrist.l":"hand.l","upperarm.r":"lowerarm.r","lowerarm.r":"wrist.r","wrist.r":"hand.r","upperleg.l":"lowerleg.l","lowerleg.l":"foot.l","foot.l":"toes.l","upperleg.r":"lowerleg.r","lowerleg.r":"foot.r","foot.r":"toes.r"},ul=new O,Zm=new O,fE=new O;function pE(i,e,t){ul.subVectors(t,e),Zm.subVectors(i,e);let n=Math.max(0,Math.min(1,Zm.dot(ul)/Math.max(ul.lengthSq(),1e-9)));return i.distanceTo(fE.copy(e).addScaledVector(ul,n))}function mE(i,e,t,n){let s={};Cs.forEach((f,x)=>{s[f]=x});let r=dE.map(f=>{let x=e[f].getWorldPosition(new O),p;if(Km[f])p=e[Km[f]].getWorldPosition(new O);else if(f==="head")p=x.clone().add(new O(0,n*.15,0));else{let m=e["wrist."+f.slice(-1)].getWorldPosition(new O);p=x.clone().add(x.clone().sub(m).normalize().multiplyScalar(n*.1))}let g=f.endsWith(".l")?1:f.endsWith(".r")?-1:0;return{n:f,i:s[f],a:x,b:p,side:g,leg:f.includes("leg")||f.startsWith("foot"),arm:f.includes("arm")||f.startsWith("wrist")||f.startsWith("hand")}}),o=i.attributes.position,a=o.count,l=new Uint16Array(a*4),c=new Float32Array(a*4),h=new O,u=n*.02,d=[];for(let f=0;f<a;f++){h.fromBufferAttribute(o,f),d.length=0;for(let p of r){if(p.side&&h.x*p.side<-n*.02||p.leg&&h.y>t.hipsY+n*.02||p.arm&&(h.y<n*.3||Math.abs(h.x)<n*.07)||p.n==="head"&&h.y<n*.78)continue;let g=pE(h,p.a,p.b);p.arm&&g>n*.075||p.leg&&g>n*.1||d.push([p.i,1/Math.pow(g+u,4)])}d.sort((p,g)=>g[1]-p[1]);let x=0;for(let p=0;p<4&&p<d.length;p++)x+=d[p][1];for(let p=0;p<4;p++)l[f*4+p]=d[p]?d[p][0]:0,c[f*4+p]=d[p]?d[p][1]/(x||1):0}i.setAttribute("skinIndex",new gr(l,4)),i.setAttribute("skinWeight",new it(c,4))}var Or=["spine","chest","head","upperarm.l","lowerarm.l","wrist.l","hand.l","handslot.l","upperarm.r","lowerarm.r","wrist.r","hand.r","handslot.r"],bo=Cs.filter(i=>!Or.includes(i));function gE(i,e,t=null){let n=new Set((t||Cs).map(dl)),s=[];for(let r of i.tracks){let{nodeName:o,propertyName:a}=at.parseTrackName(r.name);if(n.has(o)){if(a==="quaternion")s.push(r.clone());else if(a==="position"&&o===dl("hips")){let l=r.clone(),c=e/Jm.hipsY;for(let h=0;h<l.values.length;h++)l.values[h]*=c;s.push(l)}}}return new Yi(i.name+(t===Or?":upper":t===bo?":lower":""),i.duration,s)}function Ku(i,e,t={}){let n=t.height??1.8,{geo:s,mats:r}=cE(i,t.yaw??-Math.PI/2,n),o=hE(s.attributes.position,n,t.build||{}),a=uE(e,o,n),l=new yr(s,r);l.add(a.root),l.updateMatrixWorld(!0),mE(s,a,o,n),l.bind(new vr(Cs.map(x=>a[x]))),s.boundingSphere=new an(new O(0,n*.5,0),n*.9);let c={},h=(x,p=null)=>{let g=x+"|"+(p===Or?"u":p===bo?"l":"f");if(c[g])return c[g];let m=e.clips[x];return m?c[g]=gE(m,o.hipsY,p):null},u=new Ss(l),d={};return{mesh:l,bones:a,mixer:u,action:x=>{if(d[x])return d[x];let p=h(x);return p?d[x]=u.clipAction(p):null},clip:h,landmarks:o,height:n}}function Qm(i,{length:e=1,flip:t=!1,grip:n=.12,twist:s=0}={}){i.updateMatrixWorld(!0);let r=[],o=new O;i.traverse(g=>{if(!g.isMesh)return;let m=g.geometry.attributes.position;for(let _=0;_<m.count;_+=3)r.push(new O(m.getX(_),m.getY(_),m.getZ(_)).applyMatrix4(g.matrixWorld))});let a=r.reduce((g,m)=>g.add(m),new O).multiplyScalar(1/r.length),l=[[0,0,0],[0,0,0],[0,0,0]];for(let g of r){let m=[g.x-a.x,g.y-a.y,g.z-a.z];for(let _=0;_<3;_++)for(let v=0;v<3;v++)l[_][v]+=m[_]*m[v]}let c=new O(1,1,1).normalize();for(let g=0;g<40;g++)c=new O(l[0][0]*c.x+l[0][1]*c.y+l[0][2]*c.z,l[1][0]*c.x+l[1][1]*c.y+l[1][2]*c.z,l[2][0]*c.x+l[2][1]*c.y+l[2][2]*c.z).normalize();t&&c.negate();let h=new Rt().setFromUnitVectors(c,new O(0,1,0)),u=1/0,d=-1/0;for(let g of r){let m=g.clone().sub(a).applyQuaternion(h).y;u=Math.min(u,m),d=Math.max(d,m)}let f=e/(d-u);i.position.sub(a);let x=new Be;x.add(i),x.quaternion.copy(h),x.scale.setScalar(f),x.position.set(0,-u*f-n*e,0);let p=new Be;return p.add(x),p.rotation.y=s,p}var e0="./assets/",Eo={melvinci:{height:1.86,idle:"Idle",idleDrawn:"2H_Melee_Idle",run:"Running_A",walk:"Walking_A",blade:["2H_Melee_Attack_Slice","1H_Melee_Attack_Slice_Diagonal","2H_Melee_Attack_Stab","2H_Melee_Attack_Chop"],weapons:[{file:"melvinci_blade",slot:"handslot.r",length:1.35,grip:.1,flip:!0,glow:"#4CE0E0",drawOn:"melee",sheath:{bone:"chest",pos:[.2,.42,-.3],rot:[.2,0,Math.PI-.62]}},{file:"melvinci_cannon",slot:"handslot.l",length:.72,grip:.45}],castHand:"handslot.l"},kimaya:{height:1.74,idle:"Idle",idleDrawn:"Idle",run:"Running_B",walk:"Walking_B",blade:["1H_Melee_Attack_Slice_Horizontal","1H_Melee_Attack_Slice_Diagonal","1H_Melee_Attack_Stab","1H_Melee_Attack_Chop"],weapons:[{file:"kimaya_saber",slot:"handslot.r",length:1,grip:.14,flip:!0,glow:"#ff7ad9",drawOn:"melee",sheath:{bone:"hips",pos:[.24,.02,.02],rot:[.15,0,Math.PI-.3]}},{file:"kimaya_scepter",slot:"handslot.l",length:1.25,grip:.38,glow:"#3ce08f",drawOn:"cast",sheath:{bone:"chest",pos:[.03,-.23,-.3],rot:[-.15,0,-.36]}}],castHand:"wrist.l",bracers:["wrist.l","wrist.r"]},bizzle:{height:1.98,idle:"Idle",idleDrawn:"2H_Melee_Idle",run:"Running_A",walk:"Walking_A",blade:["2H_Melee_Attack_Slice","1H_Melee_Attack_Slice_Diagonal","2H_Melee_Attack_Stab","2H_Melee_Attack_Chop"],weapons:[{file:"bizzle_blade",slot:"handslot.r",length:1.3,grip:.12,flip:!1,glow:"#ff2b2b",drawOn:"melee",sheath:{bone:"chest",pos:[.2,.44,-.46],rot:[.2,0,Math.PI-.62]}},{file:"bizzle_cannon",slot:"handslot.r",length:1.05,grip:.35,trail:!1,drawOn:"gun",handRot:[Math.PI/2,0,0],sheath:{bone:"hips",pos:[.3,.05,.06],rot:[.1,0,Math.PI-.2]}}],castHand:"handslot.l",gun:{file:"bizzle_cannon",aim:"2H_Ranged_Aiming"}},mahal:{height:1.7,idle:"Idle",idleDrawn:"Idle",run:"Running_B",walk:"Walking_B",blade:["1H_Melee_Attack_Slice_Horizontal","1H_Melee_Attack_Slice_Diagonal","1H_Melee_Attack_Stab","1H_Melee_Attack_Chop"],weapons:[{file:"mahal_sword",slot:"handslot.r",length:1.05,grip:.16,flip:!1,glow:"#b56cff",drawOn:"melee",sheath:{bone:"hips",pos:[.24,.26,.02],rot:[.15,0,Math.PI-.3]}},{file:"mahal_shield",slot:"lowerarm.l",length:.8,grip:.5,twist:0,trail:!1,drawOn:"melee",sheath:{bone:"chest",pos:[0,.12,-.3],rot:[0,Math.PI,0]}}],castHand:"wrist.l",bracers:["wrist.l","wrist.r"]}},t0=[...new Set([...Object.values(Eo).flatMap(i=>i.weapons.map(e=>e.file)),"kimaya_chakram"])],n0={grunt:{file:"grunt",rig:!0,height:2,move:"Running_A",attack:"Unarmed_Melee_Attack_Punch_A",idle:"Unarmed_Idle"},shooter:{file:"shooter",rig:!0,height:2.2,move:"Walking_A",attack:"1H_Ranged_Shoot",idle:"1H_Ranged_Aiming"},brute:{file:"brute",rig:!0,height:2.8,move:"Walking_B",attack:"2H_Melee_Attack_Chop",idle:"2H_Melee_Idle"},flyer:{file:"flyer",rig:!1,size:1.5}},xE=new Set(["ramp_arch","ramp_pillar","ramp_brazier","venus_pylon","venus_module","venus_node","arch_stack","arch_candles","arch_press"]),_E=-Math.PI/2,yE=["barrel_large","barrel_small_stack","box_stacked","keg_decorated","trunk_large_A","trunk_medium_B","banner_patternA_red","banner_patternA_yellow","banner_shield_red","table_medium_decorated_A","candle_triple","shelf_small_candles","rubble_large","sword_shield_broken","coin_stack_large","ramp_arch","ramp_pillar","ramp_brazier","venus_pylon","venus_module","venus_node","arch_stack","arch_candles","arch_press"],i0={engine:{file:"boss_engine",size:4.6,y:0},censor:{file:"boss_censor",size:5.2,y:-2.6},redactor:{file:"boss_redactor",size:3.8,y:-.2}};async function f0(i=()=>{}){let e=new cl,t={heroes:{},foes:{},bosses:{},weapons:{},props:{},lib:null,missing:[]},n=async(a,l)=>{try{return await e.loadAsync(e0+a)}catch{return t.missing.push(l),null}},s=0,r=1+t0.length+Object.keys(Eo).length+Object.keys(n0).length+Object.keys(i0).length,o=()=>i(++s/r);t.lib=await jm(e,e0+"anims/kaykit_rig.glb").catch(()=>(t.missing.push("anim library"),null)),o(),await Promise.all(t0.map(a=>n(`models/weapons/${a}.glb`,a).then(l=>{l&&(t.weapons[a]=l.scene),o()})));for(let a of Object.keys(Eo)){let l=await n(`models/heroes/${a}.glb`,a);if(o(),!l||!t.lib)continue;let c=Eo[a],h=Ku(l.scene,t.lib,{height:c.height});for(let u of c.weapons){let d=t.weapons[u.file];if(!d)continue;let f=new Be;f.name=`wpn_${u.file}`,f.add(Qm(d.clone(!0),u)),h.bones[u.slot].add(f)}t.heroes[a]=h}for(let[a,l]of Object.entries(n0)){let c=await n(`models/foes/${l.file}.glb`,l.file);o(),c&&(l.rig&&t.lib?t.foes[a]={rig:Ku(c.scene,t.lib,{height:l.height}),spec:l}:t.foes[a]={scene:s0(c.scene,l.size),spec:l})}await Promise.all(yE.map(a=>n(`props/${a}.glb`,a).then(l=>{l&&(xE.has(a)&&(l.scene.rotation.y=_E),l.scene.name=`prop_${a}`,t.props[a]=l.scene)})));for(let[a,l]of Object.entries(i0)){let c=await n(`models/foes/${l.file}.glb`,l.file);o(),c&&(t.bosses[a]=s0(c.scene,l.size,l.y))}return t}function s0(i,e,t=0){let n=new Be;n.add(i),n.rotation.y=-Math.PI/2,n.updateMatrixWorld(!0);let s=new qt().setFromObject(n).getSize(new O),r=e/Math.max(s.x,s.y,s.z);n.scale.setScalar(r),n.updateMatrixWorld(!0);let o=new qt().setFromObject(n),a=o.getCenter(new O);n.position.set(-a.x,-o.min.y+t,-a.z);let l=new Be;return l.add(n),l}function vE(i){if(!i.emissive||!i.color)return;let e=jp(i.color.r,i.color.g,i.color.b);e<=0||(i.emissive.copy(i.color),i.emissiveIntensity=Math.max(i.emissiveIntensity??0,e),i.map&&!i.emissiveMap&&(i.emissiveMap=i.map))}function fl(i){let e=[];return i.traverse(t=>{if(!t.isMesh)return;let n=s=>{let r=s.clone();return vE(r),r.userData.baseEmissive=r.emissive?r.emissive.getHex():0,r.userData.baseEI=r.emissiveIntensity??0,e.push(r),r};t.material=Array.isArray(t.material)?t.material.map(n):n(t.material),t.castShadow=!0}),e}function ns(i,e,t="#ffffff"){for(let n of i)n.emissive&&(e>0?(n.emissive.set(t),n.emissiveIntensity=1.4*e):(n.emissive.setHex(n.userData.baseEmissive),n.emissiveIntensity=n.userData.baseEI))}function p0(i,e){let t=new Map,n=(h,u)=>{let d=h+(u===Or?"|u":u===bo?"|l":"|f");if(t.has(d))return t.get(d);let f=e.clip(h,u);if(!f)return null;let x=i.clipAction(f);return t.set(d,x),x},s=null,r=null,o=null,a=0,l="",c=(h,u,d,f=1)=>(h===u||(h&&h.fadeOut(d),u&&(u.setLoop(Fh,1/0),u.reset().setEffectiveTimeScale(f).setEffectiveWeight(1).fadeIn(d).play())),u);return{loop(h,u=null,d=1){if(o)return;let f=n(h,u?bo:null),x=u?n(u,Or):null;s=c(s,f,.18,d),s&&s.setEffectiveTimeScale(d),r=c(r,x,.12)},oneShot(h,u=1,d=!1){let f=n(h,null);return f?(s&&s.fadeOut(.08),r&&r.fadeOut(.08),s=null,r=null,o&&o!==f&&o.fadeOut(.06),f.setLoop(zh,1),f.clampWhenFinished=d,o=f,l=h,f.reset().setEffectiveTimeScale(u).setEffectiveWeight(1).fadeIn(.06).play(),a=f.getClip().duration/u,a):0},update(h){o&&(a-=h,a<=0&&!o.clampWhenFinished&&(o.fadeOut(.15),o=null)),i.update(h)},get busy(){return!!o},get shotName(){return o?l:""}}}function ME(){let i=document.createElement("canvas");i.width=256,i.height=128;let e=i.getContext("2d");e.strokeStyle="rgba(220,255,255,.95)",e.lineWidth=2;for(let n=0;n<5;n++)for(let s=0;s<8;s++){let r=s*34+n%2*17,o=n*30+8;e.beginPath();for(let a=0;a<6;a++){let l=a*Math.PI/3+Math.PI/6;e.lineTo(r+Math.cos(l)*15,o+Math.sin(l)*15)}e.closePath(),e.stroke()}let t=new Rn(i);return t.colorSpace=mt,t.wrapS=t.wrapT=dn,t}function bE(i,e){let t=.2,n=22,s=new Float32Array(n*2*3),r=new Float32Array(n*2*3),o=[];for(let x=0;x<n-1;x++){let p=x*2;o.push(p,p+1,p+2,p+1,p+3,p+2)}let a=new lt;a.setAttribute("position",new et(s,3)),a.setAttribute("color",new et(r,3)),a.setIndex(o);let l=new We({vertexColors:!0,transparent:!0,blending:ht,depthWrite:!1,side:gt}),c=new ge(a,l);c.frustumCulled=!1,c.visible=!1,i.add(c);let h=new Te(e),u=new Te("#ffffff"),d=new Te,f=[];return{add(x,p){f.unshift({b:x.clone(),t:p.clone(),age:0}),f.length>n&&f.pop()},style(x,p=.2){h.set(x),t=p},update(x){for(let p of f)p.age+=x;for(;f.length&&f[f.length-1].age>t;)f.pop();if(c.visible=f.length>1,!!c.visible){for(let p=0;p<n;p++){let g=f[Math.min(p,f.length-1)],m=p<f.length?Math.max(0,1-g.age/t)*(1-p/n):0;s.set([g.b.x,g.b.y,g.b.z],p*6),s.set([g.t.x,g.t.y,g.t.z],p*6+3),d.copy(h).lerp(u,.3*m),r.set([h.r*m*.35,h.g*m*.35,h.b*m*.35],p*6),r.set([d.r*m,d.g*m,d.b*m],p*6+3)}a.attributes.position.needsUpdate=!0,a.attributes.color.needsUpdate=!0}},dispose(){i.remove(c),a.dispose(),l.dispose()}}}var oi=i=>at.sanitizeNodeName(i),r0=new O,pl=new O,o0=new O,a0=new O,l0=new O,ml=new Rt,c0=new Rt,Zu=new Rt,h0=new Rt,gl=new Rt,EE=new Rt;function m0(i,e){i.getWorldQuaternion(Zu),Zu.premultiply(e),i.parent.getWorldQuaternion(h0),i.quaternion.copy(h0.invert().multiply(Zu)),i.updateWorldMatrix(!1,!0)}function $u(i,e,t,n,s,r,o){!e||!t||o<=.001||(e.getWorldPosition(r0),t.getWorldPosition(pl),o0.subVectors(pl,r0).normalize(),i.getWorldQuaternion(gl),a0.set(n,s,r).normalize().applyQuaternion(gl),c0.setFromUnitVectors(o0,a0),ml.slerpQuaternions(EE,c0,o),m0(e,ml))}function u0(i,e,t){!e||Math.abs(t)<1e-4||(i.getWorldQuaternion(gl),l0.set(1,0,0).applyQuaternion(gl),ml.setFromAxisAngle(l0,t),m0(e,ml))}var d0={fire:{lean:.32,upper:[-.22,-.2,1],lower:[-.62,-.05,1],wrist:[-.35,0,1]},rest:{lean:.04,upper:[.26,-1,.06],lower:[.1,-1,.3],wrist:[.05,-1,.3]}};function g0(i,e,t){let n=e&&e.heroes[t];if(!n)return null;let s=Ft[t],r=Eo[t],o=new Be;i.add(o);let a=new Be;o.add(a);let l=qu(n.mesh);a.add(l);let c=fl(l),h={};l.traverse(T=>{T.isBone&&(h[T.name]=T)});let u=p0(new Ss(l),n);o.add(Yn(.7));let d=new ti(s.aura,6,8,2);d.position.y=2.1,o.add(d);let f=new ge(new ln(.55,.85,48),new We({color:s.aura,transparent:!0,opacity:.5,blending:ht,depthWrite:!1,side:gt}));f.rotation.x=-Math.PI/2,f.position.y=.05,o.add(f);let x=h[oi(r.castHand)],p=bt("#C9A84C",.6,.85);x&&x.add(p);let g=new ge(new ln(.5,tl,32,1,-$i,$i*2),new We({color:s.aura,transparent:!0,opacity:0,blending:ht,depthWrite:!1,side:gt}));g.rotation.x=-Math.PI/2,g.rotation.z=-Math.PI/2,g.position.y=1.1,o.add(g);let m=new We({map:ME(),color:s.accent,transparent:!0,opacity:0,blending:ht,depthWrite:!1,side:gt}),_=new ge(new vt(1.15,1.15,2.3,28,1,!0,-ji,ji*2),m);_.position.y=1.15,o.add(_);let v=(r.bracers||[]).map(T=>{let ye=h[oi(T)];if(!ye)return null;let te=new Ye({color:"#C9A84C",metalness:.8,roughness:.25,emissive:s.aura,emissiveIntensity:.6}),Me=new ge(new ei(.075,.022,8,24),te);Me.rotation.x=Math.PI/2,ye.add(Me);let he=bt(s.aura,.35,.6);return ye.add(he),{ringMat:te,glow:he}}).filter(Boolean),y=r.weapons.filter(T=>T.sheath).map(T=>{let ye=l.getObjectByName(`wpn_${T.file}`);if(!ye)return null;let te=h[oi(T.slot)],Me=h[oi(T.sheath.bone)],he=bt(T.glow||s.aura,.1,0);return te.add(he),{w:T,holder:ye,hand:te,rest:Me,spark:he,drawn:!1,igniteT:0,sparkT:0,trail:bE(i,T.glow||s.aura),baseL:new O(0,T.length*.28,0),tipL:new O(0,T.length*(.97-T.grip),0)}}).filter(Boolean);function w(T){T.rest.add(T.holder),T.holder.position.set(...T.w.sheath.pos),T.holder.rotation.set(...T.w.sheath.rot),T.holder.scale.setScalar(1),T.drawn=!1,T.sparkT=.22}function E(T){T.drawn||(T.hand.add(T.holder),T.holder.position.set(0,0,0),T.holder.rotation.set(...T.w.handRot||[0,0,0]),T.drawn=!0,T.igniteT=.14,T.sparkT=.25)}for(let T of y)w(T);let S=0,C=r.bracers?["l","r"].map(T=>({up:h[oi("upperarm."+T)],lo:h[oi("lowerarm."+T)],wr:h[oi("wrist."+T)],hd:h[oi("hand."+T)]})).filter(T=>T.up&&T.lo&&T.wr&&T.hd):[],b=h[oi("chest")],M=h[oi("spine")],I=0,B=0,k=0,V=C.length?[M,b,...C.flatMap(T=>[T.up,T.lo,T.wr])].filter(Boolean):[],L=V.map(T=>T.quaternion.clone()),A=!1,F=!1,U=new O;function D(){if(C.length){V.forEach((T,ye)=>L[ye].copy(T.quaternion)),F=!0,o.updateWorldMatrix(!0,!0);for(let[T,ye]of[[d0.rest,B],[d0.fire,I]])if(!(ye<=.001)){u0(o,M,T.lean*.45*ye),u0(o,b,T.lean*.55*ye);for(let te of C){te.up.getWorldPosition(U),o.worldToLocal(U);let Me=Math.sign(U.x)||1;$u(o,te.up,te.lo,T.upper[0]*Me,T.upper[1],T.upper[2],ye),$u(o,te.lo,te.wr,T.lower[0]*Me,T.lower[1],T.lower[2],ye),$u(o,te.wr,te.hd,T.wrist[0]*Me,T.wrist[1],T.wrist[2],ye)}}}}let H=(T="melee")=>{for(let ye of y)(ye.w.drawOn||"melee")===T?E(ye):ye.drawn&&w(ye);S=T==="cast"?1.2:1.7},Q=0,ce=0,pe=!0,Y=0,oe=!1,ie=0,Z=()=>r.gun&&y.find(T=>T.w.file===r.gun.file),K=()=>{let T=Z();return!!(T&&T.drawn)},$=new O,ee=r.height*.55,re=new O,se=new O;function _e(T,ye,te){let Me=te.y||0;o.position.set(te.x,Me,te.z),o.rotation.y=Math.atan2(te.fx,te.fz);{let he=te.flip>0?te.flip*te.flip*(3-2*te.flip):0,Ce=Math.PI*2*he;a.rotation.x=Ce,a.position.set(0,ee-ee*Math.cos(Ce),-ee*Math.sin(Ce))}if(o.visible=!(te.alive&&te.invuln>0&&Math.floor(ye*14)%2===0),!te.alive&&pe&&u.oneShot("Death_A",1,!0),pe=te.alive,te.alive){if(te.dashing&&!te.longDash&&Y<=0){let q=te.mvx*te.fx+te.mvz*te.fz,le=te.mvx*te.fz-te.mvz*te.fx,de=Math.abs(q)>=Math.abs(le)?q>=0?"Dodge_Forward":"Dodge_Backward":le>0?"Dodge_Left":"Dodge_Right";Y=u.oneShot(de,2.6)}Y>0&&(Y-=T),te.air&&!oe&&!te.dashing&&u.oneShot("Jump_Start",2.4),!te.air&&oe&&u.oneShot("Jump_Land",2.8),oe=!!te.air;let he=(te.firing||te.charge>.05)&&ie<=0;r.gun&&he&&!K()&&H("gun");let Ce=te.ward?"Blocking":he&&r.gun?r.gun.aim:he&&!C.length?"Spellcasting":null,N=y.some(q=>q.drawn)?r.idleDrawn:r.idle,R=1;if(te.air)N="Jump_Idle";else{let q=te.mvx*te.fx+te.mvz*te.fz,le=te.mvx*te.fz-te.mvz*te.fx,de=om(te.speed??te.mv*Qa,q,-le,A);A=de.running,de.clip&&(N=de.clip==="run"?r.run:de.clip==="walk"?r.walk||"Walking_A":de.clip==="back"?"Walking_Backwards":de.clip==="strafeLeft"?"Running_Strafe_Left":"Running_Strafe_Right",R=de.timeScale)}u.loop(N,Ce,R)}if(F&&(V.forEach((he,Ce)=>he.quaternion.copy(L[Ce])),F=!1),u.update(T),C.length){let he=te.alive&&(te.firing||te.charge>.05||k>0)&&ie<=0&&!te.ward,Ce=te.alive&&!he&&!te.air&&!(te.mv>.1)&&!u.busy&&!te.ward;k>0&&(k-=T),I+=((he?1:0)-I)*Math.min(1,T*16),B+=((Ce?1:0)-B)*Math.min(1,T*6),D()}if(S>0&&(S-=T,S<=0))if(u.busy)S=.15;else for(let he of y)he.drawn&&w(he);for(let he of y){if(he.igniteT>0){he.igniteT-=T;let Ce=1-Math.max(0,he.igniteT)/.14;he.holder.scale.set(1,.15+.85*Ce,1)}he.sparkT>0?(he.sparkT-=T,he.spark.material.opacity=Math.max(0,he.sparkT/.25),he.spark.scale.setScalar(.4+(1-he.sparkT/.25)*1.6)):he.spark.material.opacity=0}m.opacity+=((te.ward?.75:0)-m.opacity)*Math.min(1,T*14),m.map.offset.y=ye*.15,m.color.set(te.parryFlash>0?"#ffffff":s.accent),g.material.opacity=0,ie>0&&(ie-=T);for(let he of y)ie>0&&he.drawn&&he.w.drawOn!=="cast"&&he.w.trail!==!1&&(he.holder.updateWorldMatrix(!0,!1),he.trail.add(he.holder.localToWorld(re.copy(he.baseL)),he.holder.localToWorld(se.copy(he.tipL)))),he.trail.update(T);f.material.opacity=(te.air?.15:.35)+Math.sin(ye*3)*.1+te.charge*.25,f.scale.setScalar(1+te.charge*.35),p.scale.setScalar(.5+te.charge*.9+(te.firing?.2:0));for(let he of v){let Ce=te.firing||te.charge>.05?1:0;he.ringMat.emissiveIntensity+=(.6+Ce*2.4+te.charge*2-he.ringMat.emissiveIntensity)*Math.min(1,T*12),he.glow.scale.setScalar(.3+Ce*.35+te.charge*.6)}d.intensity=5+te.charge*4,ce>0&&(ce-=T,ns(c,Math.max(0,ce/.2),"#ff2b2b"),ce<=0&&ns(c,0))}return{group:o,update:_e,dispose(){i.remove(o);for(let T of y)T.trail.dispose()},setWeaponColor(T){p.material.color.set(T)},playBlade(T,ye=2.3,te=!0,Me=null){if(te&&H("melee"),Me)for(let Ce of y)Ce.w.trail!==!1&&Ce.trail.style(Me.col,Me.trailLife||.2);let he=u.oneShot(r.blade[T%r.blade.length],ye);return ie=Math.min(.55,he),he},playOnce(T,ye=1){return/Melee/.test(T)?(H("melee"),ie=.5):/Spellcast/.test(T)&&H("cast"),u.oneShot(T,ye)},hurtFlash(){ce=.2,u.busy||u.oneShot("Hit_A",1.8)},castPoint(T=new O){return C.length===2?(C[0].wr.getWorldPosition(T),C[1].wr.getWorldPosition(pl),T.add(pl).multiplyScalar(.5)):x?x.getWorldPosition(T):T.set(o.position.x,1.2,o.position.z)},firesFromHands:C.length===2,firesFromGun:!!r.gun,get flipAngle(){return a.rotation.x},muzzlePoint(T=new O){let ye=Z();return ye?(ye.drawn||H("gun"),ye.holder.updateWorldMatrix(!0,!1),ye.holder.localToWorld(T.copy($.set(0,ye.w.length*(1-ye.w.grip),0)))):T.set(o.position.x,1.2,o.position.z)},brace(){k=.18},bladeSegment(T={hilt:new O,tip:new O}){let ye=y.find(te=>te.drawn&&te.w.drawOn==="melee"&&te.w.trail!==!1);return ye?(ye.holder.updateWorldMatrix(!0,!1),ye.holder.localToWorld(T.hilt.set(0,0,0)),ye.holder.localToWorld(T.tip.copy(ye.tipL)),T):null},get swinging(){return ie>0},cancelSwing(){ie=0},get shotName(){return u.shotName},get bladeDrawn(){return y.some(T=>T.drawn)},radius:.5,isModel:!0}}function x0(i,e){let t=i&&i.foes[e];if(!t)return null;let n=new Be;if(n.add(Yn(e==="brute"?1.1:.7)),t.rig){let s=qu(t.rig.mesh);n.add(s);let r=p0(new Ss(s),t.rig);r.loop(t.spec.idle),n.userData={mats:fl(s),drv:r,spec:t.spec,model:!0}}else{let s=t.scene.clone(!0);n.add(s),n.userData={mats:fl(s),spec:t.spec,model:!0,body:s}}return n}function _0(i,e,t){let n=i&&i.bosses[e.key];if(!n)return null;e.mesh.traverse(r=>{r.isMesh&&(r.material.isMeshStandardMaterial||r.geometry&&r.geometry.type==="SphereGeometry")&&(r.visible=!1)});let s=n.clone(!0);return(t||e.mesh).add(s),{inst:s,mats:fl(s)}}var is={root:"#ff2b2b",sacral:"#ff8a2b",solar:"#ffd23c",heart:"#3ce08f",throat:"#3cb8ff",third:"#6b5bff",crown:"#b56cff"},y0=["root","sacral","solar","heart","throat","third","crown"],Ur={max:100,step:25,kill:8,parry:12,bladeHit:3,trickle:2.5},v0="MAX MELANIN MAGIC BLAST",SE={melvinci:[{id:"quake",name:"ROOT QUAKE",chakra:"root"},{id:"beam",name:"SOLAR MELANIN BEAM",chakra:"solar"},{id:"blink",name:"THIRD-EYE STEP",chakra:"third"},{id:"nova",name:"CROWN NOVA",chakra:"crown",ult:!0}],kimaya:[{id:"storm",name:"CHAKRAM STORM",chakra:"throat"},{id:"sonic",name:"SACRAL SONIC",chakra:"sacral"},{id:"lotus",name:"HEART LOTUS",chakra:"heart"},{id:"starfall",name:"ANCESTRAL STARFALL",chakra:"crown",ult:!0}],bizzle:[{id:"quake",name:"RALLY STRIPE SLAM",chakra:"root"},{id:"beam",name:"JADE CORE PULSE",chakra:"heart",color:"#2ee6a8"},{id:"blink",name:"BLACK BUMBLE BEE BLITZ",chakra:"solar"},{id:"nova",name:"DESTROYER OF INJUSTICES",chakra:"root",ult:!0,cols:["#ff2b2b","#2ee6a8","#ffd23c","#ffffff"]}],mahal:[{id:"sonic",name:"THE POWER OF BREATH",chakra:"throat"},{id:"storm",name:"MEDIC DRONE SWARM",chakra:"crown",model:null},{id:"lotus",name:"MAJESTIC HEAL",chakra:"heart"},{id:"starfall",name:"COSMIC HEALING RAIN",chakra:"crown",ult:!0,cols:["#fff6c8","#b56cff","#e8c25a","#3ce08f"]}]};function xl(i){return Math.max(0,Math.min(4,Math.floor(i/Ur.step+1e-9)))}function wE(i){let e=xl(i);return{level:e,meter:e?i-e*Ur.step:i}}function TE(i,e,t=1){return Math.min(Ur.max,i+(Ur[e]||0)*t)}var M0=i=>i>=4?"MAX":i?"LV"+i:"\u2014";function b0(i,e,t){let n=SE[t],s=[],r=0,o=0,a=-1,l=AE(),c=(_,v,y)=>e.foes.list.filter(w=>w.alive&&Math.hypot(w.x-_,w.z-v)<y+w.r&&Math.abs(w.y-(e.H.y||0))<3.4);function h(_,v,y,w,E=10,S=0){let C=0;for(let M of c(_,v,y)){let I=M.x-_,B=M.z-v,k=Math.hypot(I,B)||1;S&&(M.stunT=Math.max(M.stunT||0,S)),e.foes.damage(M,w,!0,I/k,B/k,E),C++}let b=e.boss;return b&&b.alive&&b.awake&&Math.hypot(b.x-_,b.z-v)<y+b.r&&(b.damage(b.hit({x:_,z:v,y:1})?w*1.2:w*.5,!0),C++),C}let u=_=>is[_],d=_=>_.color||is[_.chakra],f=(_,v)=>{e.hero.playOnce&&e.hero.playOnce(_,v)};function x(_,v,y){e.fx.ring(_,v,y,3,.35),e.fx.spawn(_,1,v,y,18,{spd:5,up:3,size:.55}),h(_,v,2.6,3,10)}let p={quake(_,v){f("2H_Melee_Attack_Chop",2.2),s.push({t:.22,run:()=>{let y=d(v);e.fx.ring(_.x,_.z,y,6.5,.55),e.fx.ring(_.x,_.z,"#ffffff",3.5,.3),e.fx.spawn(_.x,.3,_.z,y,40,{spd:9,up:5,size:.6});for(let w=0;w<10;w++){let E=w/10*Math.PI*2;e.fx.spawn(_.x+Math.cos(E)*3,.2,_.z+Math.sin(E)*3,"#8a5a3a",4,{spd:3,up:6,size:.5})}h(_.x,_.z,5.5,4,18),e.shake(10),e.audio.sfx.slam()}})},beam(_,v){f("Spellcast_Long",1.1);let y=d(v),w=17,E=new ge(new vt(.16,.16,w,10,1,!0),new We({color:"#fff6c8",transparent:!0,opacity:.95,blending:ht,depthWrite:!1})),S=new ge(new vt(.55,.55,w,14,1,!0),new We({color:y,transparent:!0,opacity:.45,blending:ht,depthWrite:!1})),C=new Be;E.position.y=w/2,S.position.y=w/2,C.add(E,S),C.rotation.x=Math.PI/2;let b=new Be;b.add(C),i.add(b);let M=bt(y,2.2,.9);i.add(M);let I=0;e.audio.sfx.beamFire(),s.push({t:1.25,every:B=>{if(b.position.set(_.x+_.fx*.6,_.y+1.25,_.z+_.fz*.6),b.rotation.y=Math.atan2(_.fx,_.fz),M.position.copy(b.position),S.scale.x=S.scale.z=.85+Math.random()*.3,I-=B,I<=0){I=.08;for(let k=1;k<w;k+=1.2){let V=b.position.x+_.fx*k,L=b.position.z+_.fz*k;if(e.level.solidCell(Math.floor(V/2),Math.floor(L/2),_.y+.8))break;h(V,L,.9,.9,3)}e.fx.spawn(b.position.x+_.fx*(2+Math.random()*10),_.y+1.25,b.position.z+_.fz*(2+Math.random()*10),y,3,{spd:2,up:1.5,size:.45}),e.shake(2)}},run:()=>{i.remove(b),i.remove(M)}})},blink(_,v){let y=d(v);x(_.x,_.z,y);let w=_.x,E=_.z;for(let S=0;S<14;S++){let C=Cr(e.level,w,E,Mn,_.fx*.5,_.fz*.5,_.y);if(C.hit)break;w=C.x,E=C.z}_.x=w,_.z=E,_.invuln=Math.max(_.invuln,.45),f("Dodge_Forward",3),s.push({t:.12,run:()=>x(_.x,_.z,y)}),e.audio.sfx.dash()},storm(_,v){let y=d(v);f("Spellcast_Raise",1.8);let w=v.model===void 0?"kimaya_chakram":v.model,E=[0,1,2].map(()=>{let b=w&&e.assets&&e.assets.weapons[w],M=new Be;if(b){let I=b.clone(!0),B=new qt().setFromObject(I),k=B.getSize(new O),V=.9/Math.max(k.x,k.y,k.z);I.scale.setScalar(V),I.position.copy(B.getCenter(new O).multiplyScalar(-V)),M.add(I)}return M.add(bt(y,1.8,.7)),i.add(M),M}),S=0,C=0;s.push({t:3.4,every:b=>{C+=b*7,S-=b,E.forEach((M,I)=>{let B=C+I*Math.PI*2/3,k=2.7;if(M.position.set(_.x+Math.cos(B)*k,_.y+1.1,_.z+Math.sin(B)*k),M.rotation.y+=b*20,S<=0){h(M.position.x,M.position.z,.9,1.3,6);for(let V of e.combat.ebullets)V.alive&&Math.hypot(V.x-M.position.x,V.z-M.position.z)<1&&(V.alive=!1,V.mesh.visible=!1)}Math.random()<b*20&&e.fx.spawn(M.position.x,1.1,M.position.z,y,1,{spd:1,up:.5,size:.4,life:.3})}),S<=0&&(S=.18)},run:()=>E.forEach(b=>i.remove(b))}),e.audio.sfx.charged()},lotus(_,v){let y=d(v);f("Spellcast_Raise",1.4),_.lives<el?(_.lives++,e.hud.flash(`${v.name} \u2014 A LIFE RESTORED`,y)):e.hud.flash(v.name,y),_.shield=Ji,_.wardBroken=0,_.invuln=Math.max(_.invuln,1);for(let w=0;w<3;w++)e.fx.ring(_.x,_.z,w?"#ffffff":y,3+w*1.5,.5+w*.15);for(let w=0;w<8;w++){let E=w/8*Math.PI*2;e.fx.spawn(_.x+Math.cos(E)*1.2,.2,_.z+Math.sin(E)*1.2,y,6,{spd:1,up:7,size:.55,grav:2})}h(_.x,_.z,4,3,14),e.audio.sfx.page()},sonic(_,v){let y=d(v);f("Spellcast_Shoot",2);let w=.62,E=9;for(let C=1;C<=E;C+=1.5)for(let b=-2;b<=2;b++){let M=Math.atan2(_.fz,_.fx)+b*w/2;e.fx.spawn(_.x+Math.cos(M)*C,1,_.z+Math.sin(M)*C,y,2,{spd:2,up:1,size:.5,life:.4})}for(let C of e.foes.list){if(!C.alive)continue;let b=C.x-_.x,M=C.z-_.z,I=Math.hypot(b,M);I>E||I<.01||(b*_.fx+M*_.fz)/I>Math.cos(w)&&(C.stunT=2.2,e.foes.damage(C,3,!0,b/I,M/I,16))}let S=e.boss;if(S&&S.alive&&S.awake){let C=S.x-_.x,b=S.z-_.z,M=Math.hypot(C,b)||1;M<E+S.r&&(C*_.fx+b*_.fz)/M>Math.cos(w)&&(S.damage(4,!0),S.stun=Math.max(S.stun||0,.8))}e.fx.ring(_.x+_.fx*2,_.z+_.fz*2,y,5,.4),e.shake(6),e.audio.sfx.beamTell()},nova(_,v){g(_,"Spellcast_Raise",v.cols||y0.map(y=>is[y]),10,12,v.name,!1)},starfall(_,v){g(_,"Spellcast_Long",v.cols||["#fff6c8",is.crown,is.throat,"#ffd76a"],7,9,v.name,!0)}};function g(_,v,y,w,E,S,C){f(v,.9),e.hud.flash(`${v0} \xB7 ${S}`,y[y.length-1]),e.hud.screenFlash&&e.hud.screenFlash(y[0]),e.shake(12),e.audio.sfx.bossWake(),_.invuln=Math.max(_.invuln,1.6);let b=[],M=e.boss;M&&M.alive&&M.awake&&Math.hypot(M.x-_.x,M.z-_.z)<22&&b.push({boss:M});for(let B of e.foes.list.filter(k=>k.alive).sort((k,V)=>Math.hypot(k.x-_.x,k.z-_.z)-Math.hypot(V.x-_.x,V.z-_.z)).slice(0,12))Math.hypot(B.x-_.x,B.z-_.z)<18&&b.push({e:B});let I=Math.max(7,b.length);for(let B=0;B<I;B++){let k=y[B%y.length],V=bt(k,1.6,1);V.add(bt("#ffffff",.4,1)),i.add(V);let L=b.length?b[B%b.length]:null,A=B/I*Math.PI*2,F=.5+B*(C?.1:.05),U=0;s.push({t:F+.55,every:D=>{U+=D;let H=L?L.boss?L.boss.x:L.e.x:_.x+Math.cos(A)*7,Q=L?L.boss?L.boss.z:L.e.z:_.z+Math.sin(A)*7;if(U<F)C?V.position.set(H+Math.sin(U*9+B)*.3,16,Q):V.position.set(_.x+Math.cos(A+U*3)*1.6,2.2+U,_.z+Math.sin(A+U*3)*1.6);else{let ce=Math.min(1,(U-F)/.5),pe=C?H:_.x+Math.cos(A)*1.6,Y=C?16:2.2+F,oe=C?Q:_.z+Math.sin(A)*1.6;V.position.set(pe+(H-pe)*ce,Y+(.8-Y)*ce*ce,oe+(Q-oe)*ce)}Math.random()<D*30&&e.fx.spawn(V.position.x,V.position.y,V.position.z,k,1,{spd:.5,up:0,size:.5,life:.35,grav:0})},run:()=>{i.remove(V);let D=V.position.x,H=V.position.z;e.fx.ring(D,H,k,4,.45),e.fx.spawn(D,.8,H,k,24,{spd:7,up:5,size:.6}),L&&L.boss&&L.boss.alive&&L.boss.damage(E,!0),h(D,H,2.4,w,16),e.shake(5),e.audio.sfx.crate()}})}}function m(_,v,y){if(o=Math.max(0,o-_),v.alive&&(r=Math.min(Ur.max,r+Ur.trickle*_)),y("magic")&&v.alive&&o<=0){let{level:E,meter:S}=wE(r);if(!E)e.audio.beep(160,.08,"square",.06);else{let C=n[E-1];r=S,o=.45,C.ult||e.hud.flash(`${M0(E)} \xB7 ${C.name}`,d(C)),p[C.id](v,C)}}for(let E=s.length-1;E>=0;E--){let S=s[E];S.t-=_,S.every&&S.every(_),S.t<=0&&(s.splice(E,1),S.run&&S.run())}let w=xl(r);w>a&&a>=0&&e.audio.beep(520+w*140,.1,"sine",.05,900+w*180),a=w,RE(l,n,r)}return{update:m,addMeter(_,v=1){r=TE(r,_,v)},get meter(){return r},set meter(_){r=_},get level(){return xl(r)},kit:n,dispose(){for(let _ of s)_.run&&_.run();s.length=0,l.root.remove()}}}function AE(){let i=document.createElement("div");i.className="magicbar";let e=document.createElement("b");e.className="mlv";let t=document.createElement("div");t.className="mtrack";let n=document.createElement("i");t.append(n);for(let r=1;r<4;r++){let o=document.createElement("u");o.style.left=r*25+"%",t.append(o)}let s=document.createElement("small");return s.className="mname",i.append(e,t,s),(document.getElementById("hud")||document.body).appendChild(i),n.style.background=`linear-gradient(90deg, ${y0.map(r=>is[r]).join(",")})`,{root:i,badge:e,fill:n,name:s,btn:document.getElementById("tMagic"),last:""}}function RE(i,e,t){let n=xl(t),s=n?e[n-1]:null,r=Math.round(t);i.fill.style.width=r+"%";let o=n+"|"+r;o!==i.last&&(i.last=o,i.root.classList.toggle("max",n>=4),i.root.style.setProperty("--c",s?is[s.chakra]:"#8a7fa8"),i.badge.textContent=M0(n),i.name.textContent=n>=4?`${v0} \xB7 F`:s?`${s.name} \xB7 F`:"MAGIC CHARGING",i.btn&&(i.btn.style.setProperty("--pct",r*3.6+"deg"),i.btn.style.setProperty("--c",s?is[s.chakra]:"#8a7fa8"),i.btn.classList.toggle("max",n>=4),i.btn.classList.toggle("ready",n>0),i.btn.dataset.lv=n>=4?"MAX":n?"LV"+n:""))}var S0=[{id:"01",file:"01_i_refuse.mp3",title:"I Refuse"},{id:"02",file:"02_world_wide_wake_up.mp3",title:"World Wide Wake Up"},{id:"03",file:"03_it_is_what_it_is.mp3",title:"It Is What It Is"},{id:"04",file:"04_they_don_t.mp3",title:"They Don't"},{id:"05",file:"05_scfl_10_2.mp3",title:"SCFL 10-2"},{id:"06",file:"06_supa_groovy_plugged_in.mp3",title:"Supa Groovy Plugged In"},{id:"07",file:"07_soulful_plugged_in.mp3",title:"Soulful Plugged In"},{id:"08",file:"08_i_am_affirmation.mp3",title:"I Am Affirmation"},{id:"09",file:"09_the_lion_rises.mp3",title:"The Lion Rises"},{id:"10",file:"10_battle_of_kirina.mp3",title:"Battle of Kirina"},{id:"11",file:"11_nine_witches_of_mali.mp3",title:"Nine Witches of Mali"},{id:"12",file:"12_buffalo_woman_rising.mp3",title:"Buffalo Woman Rising"},{id:"13",file:"13_crippled_prince.mp3",title:"Crippled Prince"},{id:"14",file:"14_nana_triban.mp3",title:"Nana Triban"},{id:"15",file:"15_kurukan_fuga.mp3",title:"Kurukan Fuga"},{id:"16",file:"16_light_as_a_feather.mp3",title:"Light as a Feather"},{id:"17",file:"17_truth_is_the_feather.mp3",title:"Truth Is the Feather"},{id:"18",file:"18_kind_hands.mp3",title:"Kind Hands"},{id:"19",file:"19_my_heart_at_home.mp3",title:"My Heart at Home"},{id:"20",file:"20_balance_of_maat.mp3",title:"Balance of Maat"}],E0={menu:["02"],ramparts:["01","05","04","03","06"],venus:["06","07","08","16","17","18"],archive:["09","11","12","13","14","15"],boss:["10"],win:["19","20"]},w0=new Set(["menu","boss"]),CE="https://quantummelaninmedia.com/assets/audio/";function IE(i){let e=E0[i]||E0.menu;return w0.has(i)?e.slice():[...e,...S0.map(t=>t.id).filter(t=>!e.includes(t))]}function T0({base:i="./assets/music/",volume:e=.55}={}){let t=new Audio;t.preload="auto";let n=[],s=0,r=null,o=!1,a=!1,l=!1,c=null,h=!1,u=document.createElement("div");u.id="nowPlaying",u.className="hidden";let d=document.createElement("b");d.textContent="\u266A";let f=document.createElement("span"),x=document.createElement("small");x.textContent="N skip \xB7 M music on/off",u.append(d,f,x),document.body.appendChild(u);let p=v=>S0.find(y=>y.id===v),g=()=>o?0:a?e*.35:e;function m(v,y,w){clearInterval(c);let E=t.volume,S=performance.now();c=setInterval(()=>{let b=Math.min(1,(performance.now()-S)/y);t.volume=Math.max(0,Math.min(1,E+(v-E)*b)),b>=1&&(clearInterval(c),w&&w())},30)}function _(v){s=(v+n.length)%n.length;let y=p(n[s]);if(!y)return;t.src=(h?CE:i)+y.file,t.volume=0,f.textContent=y.title.toUpperCase(),u.classList.remove("hidden"),u.classList.remove("flash"),u.offsetWidth,u.classList.add("flash");let w=t.play();w&&w.catch&&w.catch(()=>{}),m(g(),900)}return t.addEventListener("ended",()=>{w0.has(r)&&n.length===1?(t.currentTime=0,t.play().catch(()=>{})):_(s+1)}),t.addEventListener("error",()=>{h||(h=!0,_(s))}),{play(v){l=!0,v!==r&&(r=v,n=IE(v),t.src&&!t.paused?m(0,500,()=>_(0)):_(0))},next(){l&&n.length&&m(0,300,()=>_(s+1))},setMuted(v){o=v,m(g(),200)},setVolume(v){e=Math.max(0,Math.min(1,v)),m(g(),120)},duck(v){a=v,m(g(),300)},get moment(){return r},get title(){let v=p(n[s]);return v?v.title:""},get usingRemote(){return h},el:t}}var PE=()=>new Ye({color:"#1b1b24",roughness:.55,metalness:.35}),LE=()=>new Ye({color:ue.char,emissive:ue.char,emissiveIntensity:.9}),Ju=()=>new We({color:ue.hotred});function pn(i,e,t,n){return new ge(new It(i,e,t),n)}function DE(i){let e=new Be,t=PE(),n=LE(),s=[t,n];if(e.add(Yn(.55)),i==="grunt"){let r=pn(.7,.8,.5,t);r.position.y=.95,e.add(r);let o=pn(.5,.06,.04,n);o.position.set(0,1.05,.27),e.add(o);let a=pn(.44,.36,.4,t);a.position.y=1.55,e.add(a);let l=pn(.34,.07,.04,Ju());l.position.set(0,1.56,.21),e.add(l);for(let c of[-1,1]){let h=pn(.18,.62,.18,t);h.position.set(c*.5,.95,.1),h.rotation.x=-.5,e.add(h);let u=pn(.26,.2,.3,n);u.position.set(c*.5,.62,.35),e.add(u);let d=pn(.22,.5,.26,t);d.position.set(c*.18,.28,0),e.add(d)}}else if(i==="shooter"){let r=pn(.56,1,.44,t);r.position.y=1.05,e.add(r);let o=pn(.5,.6,.24,t);o.position.set(0,1.2,-.3),e.add(o);let a=pn(.08,.5,.08,n);a.position.set(0,1.2,-.44),e.add(a);let l=pn(.36,.34,.36,t);l.position.y=1.72,e.add(l);let c=new ge(new vt(.11,.13,.16,10),Ju());c.rotation.x=Math.PI/2,c.position.set(0,1.72,.22),e.add(c);let h=pn(.14,.14,.8,t);h.position.set(.32,1.15,.35),e.add(h);let u=pn(.1,.1,.1,n);u.position.set(.32,1.15,.78),e.add(u);for(let d of[-1,1]){let f=pn(.18,.55,.22,t);f.position.set(d*.15,.28,0),e.add(f)}}else{let r=new ge(new vt(.46,.4,.18,14),t);e.add(r);let o=new ge(new ei(.5,.05,6,18),n);o.rotation.x=Math.PI/2,e.add(o);let a=new ge(new tn(.1,8,6),Ju());a.position.set(0,.02,.44),e.add(a);let l=bt(ue.cyan,.9,.7);l.position.y=-.2,e.add(l),e.userData.disc=r}return e.userData.mats=s,e}function A0(i,e){let t=[],n=[];function s(d,f,x){let p=Rp[d],g=x0(e.assets,d)||DE(d);i.add(g);let m={type:d,x:f,z:x,y:d==="flyer"?p.hover:0,hp:p.hp,max:p.hp,r:p.r,cfg:p,alive:!0,aggro:!1,mesh:g,vx:0,vz:0,kx:0,kz:0,knock:0,shootT:1+Math.random()*(p.shootCd||1),diveT:2+Math.random()*2,dive:0,dx:0,dz:0,anim:Math.random()*6,hurtT:0,fx:0,fz:1,orbit:Math.random()*6.28,strafe:Math.random()<.5?1:-1};return t.push(m),m}function r(d,f,x,p=0,g=0,m=6,_=null){if(!d.alive)return;f*=e.comboHit?e.comboHit():1,d.cfg.armor&&!(d.brokenT>0)&&(d.chain=e.t-(d.lastHitT??-9)<mp?(d.chain||0)+1:1,d.lastHitT=e.t,d.chain>=d.cfg.guard?(d.brokenT=gp,d.stunT=Math.max(d.stunT||0,1.2),d.chain=0,e.hud.flash("GUARD BREAK","#ffd76a"),e.fx.ring(d.x,d.z,"#ffd76a",2.6,.35),e.fx.spawn(d.x,d.y+1.4,d.z,"#ffd76a",16,{spd:5,up:3,size:.45}),e.audio.sfx.shatter(),e.hitstop(.08)):(f*=1-d.cfg.armor,e.fx.spawn(d.x,d.y+1.2,d.z,"#c8c8d8",3,{spd:3,up:1.5,size:.3,life:.25}))),d.hp-=f,d.hurtT=_?_.flash:.12,d.kx=p,d.kz=g,d.knock=m;let v=d.cfg.armor&&!(d.brokenT>0);if(_&&_.stagger>0&&!v&&d.hp>0){d.staggerT=Math.max(d.staggerT||0,_.stagger),d.type==="flyer"&&(d.dive=0);let y=d.mesh.userData;y.drv&&_.stagger>=.25&&y.drv.oneShot("Hit_A",1.7)}d.hp<=0?o(d,x):e.audio.sfx.foeHit()}function o(d,f){d.alive=!1;let x=d.mesh.userData;x.drv?(x.drv.oneShot("Death_A",1.5,!0),n.push({e:d,t:1.6})):i.remove(d.mesh),e.fx.spawn(d.x,d.y+.9,d.z,ue.char,14,{spd:5,up:4}),e.fx.spawn(d.x,d.y+.9,d.z,"#ffffff",5,{spd:3,size:.35}),e.fx.ring(d.x,d.z,ue.char,2.2,.35),e.audio.sfx.foeDie(),e.onKill(d,f)}function a(d){l(d);let f=e.H,x=e.level;for(let p of t){if(!p.alive)continue;p.anim+=d,p.brokenT>0&&(p.brokenT-=d);let g=f.x-p.x,m=f.z-p.z,_=Math.hypot(g,m)||.001,v=g/_,y=m/_;!p.aggro&&_<p.cfg.aggro&&f.alive&&(p.aggro=!0);let w=0,E=0;if(p.stunT>0)p.stunT-=d,Math.random()<d*12&&e.fx.spawn(p.x,p.y+2.1,p.z,"#ffd76a",1,{spd:1.5,up:.5,size:.35,life:.4,grav:0});else if(p.staggerT>0)p.staggerT-=d;else if(p.aggro&&f.alive)if(p.type==="grunt"||p.type==="brute")_>p.r+f.r+.05&&(w=v,E=y);else if(p.type==="shooter")_>p.cfg.keep+1.5?(w=v,E=y):_<p.cfg.keep-1.5&&(w=-v,E=-y),w+=-y*p.strafe*.5,E+=v*p.strafe*.5,p.shootT-=d,p.shootT<=0&&(p.shootT=p.cfg.shootCd*(.85+Math.random()*.3),Ts(x,p.x,p.z,f.x,f.z,(f.y+1.1)*.5)||(e.combat.spawnEBullet({x:p.x+v*.6,y:1.15,z:p.z+y*.6,vx:v*p.cfg.bspd,vz:y*p.cfg.bspd,vy:(f.y+1.1-1.15)/_*p.cfg.bspd,kind:"red"}),e.fx.spawn(p.x+v*.8,1.15,p.z+y*.8,ue.hotred,4,{spd:2,up:1,size:.3}),e.audio.beep(520,.08,"square",.08,200)));else if(p.orbit+=d*.9*p.strafe,p.dive===0){let A=f.x+Math.cos(p.orbit)*5,F=f.z+Math.sin(p.orbit)*5,U=A-p.x,D=F-p.z,H=Math.hypot(U,D)||1;w=U/H*Math.min(1,H/2),E=D/H*Math.min(1,H/2),p.y+=(p.cfg.hover+Math.sin(p.anim*3)*.3-p.y)*Math.min(1,d*4),p.diveT-=d,p.diveT<=0&&(p.dive=1,p.diveT=.35,p.dx=v,p.dz=y)}else p.dive===1?(p.diveT-=d,p.y+=(p.cfg.hover+.7-p.y)*d*6,p.diveT<=0&&(p.dive=2,p.diveT=.55,p.dx=v,p.dz=y,e.audio.beep(900,.2,"sawtooth",.1,200))):(p.diveT-=d,w=p.dx*2.4,E=p.dz*2.4,p.y+=(f.y+.9-p.y)*d*10,p.diveT<=0&&(p.dive=0,p.diveT=p.cfg.diveCd));else p.type==="flyer"&&(p.y=p.cfg.hover+Math.sin(p.anim*2)*.25);for(let A of t){if(A===p||!A.alive||A.type==="flyer"!=(p.type==="flyer"))continue;let F=p.x-A.x,U=p.z-A.z,D=Math.hypot(F,U);D<1.2&&D>.001&&(w+=F/D*(1.2-D)*1.5,E+=U/D*(1.2-D)*1.5)}let S=p.cfg.spd*(e.slowMul||1),C=w*S+p.kx*p.knock,b=E*S+p.kz*p.knock;p.knock=Math.max(0,p.knock-d*26);let M=Cr(x,p.x,p.z,p.r,C*d,b*d,p.type==="flyer"?9:0);if(p.x=M.x,p.z=M.z,Math.abs(w)+Math.abs(E)>.05||p.aggro){let A=p.aggro?v:w,F=p.aggro?y:E;p.fx+=(A-p.fx)*Math.min(1,d*8),p.fz+=(F-p.fz)*Math.min(1,d*8)}let I=p.r+f.r+(p.type==="flyer"?.1:.05);f.alive&&!(p.staggerT>0)&&_<I&&(p.type==="flyer"?Math.abs(p.y-(f.y+1))<1.3:f.y<.8)&&(e.wardBlocks(p.x,p.z)?(e.wardAbsorb(12,p.x,p.z),p.kx=-v,p.kz=-y,p.knock=10):e.hurt("contact",p.x,p.z)&&(p.kx=-v,p.kz=-y,p.knock=8));let B=p.mesh;B.position.set(p.x,p.y,p.z),B.rotation.y=Math.atan2(p.fx,p.fz);let k=p.type==="flyer"?0:Math.abs(Math.sin(p.anim*8))*.08*(Math.abs(w)+Math.abs(E)>.05?1:0);B.position.y=p.y+k;let V=B.userData,L=Math.abs(w)+Math.abs(E)>.05;if(V.model)V.drv&&(V.drv.loop(L?V.spec.move:V.spec.idle,null,p.type==="brute"?.8:1),V.drv.update(d),B.position.y=p.y),p.type==="flyer"&&(B.rotation.x=p.dive===2?.5:Math.sin(p.anim*2)*.12,B.rotation.z=Math.sin(p.anim*3)*.1),p.hurtT>0&&(p.hurtT-=d,ns(V.mats,1),p.hurtT<=0&&ns(V.mats,0));else if(p.type==="flyer"&&(V.disc.rotation.y+=d*6,B.rotation.x=p.dive===2?.6:Math.sin(p.anim*2)*.1),p.hurtT>0){p.hurtT-=d;for(let A of V.mats)A.emissive.set("#ffffff"),A.emissiveIntensity=1.5}else V.mats[0].emissiveIntensity=0,V.mats[1].emissive.set(ue.char),V.mats[1].emissiveIntensity=.9+Math.sin(p.anim*5)*.3}}function l(d){for(let f=n.length-1;f>=0;f--){let x=n[f];x.t-=d,x.e.mesh.userData.drv.update(d),x.t<.6&&(x.e.mesh.position.y-=d*1.4),x.t<=0&&(i.remove(x.e.mesh),n.splice(f,1))}}function c(){for(let d of t)i.remove(d.mesh);t.length=0,n.length=0}function h(d){return t.filter(f=>f.alive&&(!d||f.type===d)).length}function u(d,f,x){let p=null,g=1/0,m=Math.cos(f);for(let _ of t){if(!_.alive)continue;let v=_.x-d.x,y=_.z-d.z,w=Math.hypot(v,y);w>x||w>=g||f<Math.PI&&w>.001&&(v*d.fx+y*d.fz)/w<m||(p=_,g=w)}return p?{foe:p,d:g}:null}return{list:t,spawn:s,update:a,damage:r,clear:c,aliveCount:h,nearestInArc:u}}var NE=160,OE=200,R0=i=>i.y+(i.type==="flyer"?0:i.type==="brute"?1.4:1),UE={red:{col:ue.hotred,size:.2},ember:{col:ue.orange,size:.24},pulse:{col:ue.pink,size:.22},ink:{col:ue.violet,size:.34}};function C0(i,e){let t=new ge(new tn(i,8,6),new We({color:"#ffffff"})),n=bt(e,i*6,.85);return t.add(n),t.userData.glow=n,t.visible=!1,t}function I0(i,e){let t=[],n=[],s=[],r=[],o=[],a=[];for(let L=0;L<NE;L++){let A=C0(.15,ue.gold);i.add(A),t.push({alive:!1,mesh:A})}for(let L=0;L<OE;L++){let A=C0(.2,ue.hotred);i.add(A),n.push({alive:!1,mesh:A})}let l=new ln(.86,1,56),c=new Pa(1,24),h=1.05;function u(L,A,F,U,D,H={}){let Q=t.find(pe=>!pe.alive);if(!Q)return null;let ce=Mt[D];return Object.assign(Q,{alive:!0,x:L,y:H.y??h,z:A,vx:F*ce.spd*(H.spdMul||1),vz:U*ce.spd*(H.spdMul||1),life:H.life||ce.life||2.2,dmg:H.dmg||ce.dmg,pierce:H.pierce||!!ce.pierce,size:H.size||ce.size,kind:D,hit:new Set,reflected:!!H.reflected}),Q.mesh.visible=!0,Q.mesh.scale.setScalar(Q.size/.15),Q.mesh.userData.glow.material.color.set(H.col||ce.col),Q.mesh.position.set(L,Q.y,A),Q.mesh.lookAt(L+F,Q.y,A+U),Q.mesh.scale.z*=D==="beam"?4:D==="rapid"?2.2:1.4,Q}let d=new O;function f(L,A,F,U){h=(L.y||0)+1.05;let D=L.x+L.fx*.9,H=L.z+L.fz*.9;if(e.hero&&e.hero.firesFromHands){e.hero.brace();let ie=e.hero.castPoint(d);D=ie.x+L.fx*.25,H=ie.z+L.fz*.25,h=ie.y}else if(e.hero&&e.hero.firesFromGun){let ie=e.hero.muzzlePoint(d);D=ie.x+L.fx*.1,H=ie.z+L.fz*.1,h=ie.y}let Q=L.fx,ce=L.fz,pe=1+(F-1)*.35,Y=Mt[A].size*(1+(F-1)*.18),oe=(ie,Z,K)=>[ie*Math.cos(K)-Z*Math.sin(K),ie*Math.sin(K)+Z*Math.cos(K)];if(U)if(A==="single")u(D,H,Q,ce,A,{dmg:6*pe,size:Y*2.4,pierce:!0,col:"#ffffff"});else if(A==="scatter")for(let ie=0;ie<14;ie++){let Z=ie/14*Math.PI*2;u(L.x+Math.cos(Z)*.8,L.z+Math.sin(Z)*.8,Math.cos(Z),Math.sin(Z),A,{dmg:1.5*pe,size:Y*1.3})}else if(A==="rapid")for(let ie=0;ie<9;ie++){let[Z,K]=oe(Q,ce,(ie-4)*.16);u(D,H,Z,K,A,{dmg:.9*pe,size:Y*1.4,spdMul:.9+ie*.03})}else if(A==="beam")for(let ie=0;ie<5;ie++){let[Z,K]=oe(Q,ce,(ie-2)*.28);u(D,H,Z,K,A,{dmg:2.2*pe,size:Y*1.5,pierce:!0,col:"#ffffff"})}else for(let ie=0;ie<12;ie++){let Z=ie/12*Math.PI*2;u(L.x+Math.cos(Z)*.9,L.z+Math.sin(Z)*.9,Math.cos(Z),Math.sin(Z),A,{dmg:1.2*pe,size:Y*1.6,life:.7})}else if(A==="single")u(D,H,Q,ce,A,{dmg:Mt.single.dmg*pe,size:Y});else if(A==="scatter"){let ie=3+Math.min(2,F-1);for(let Z=0;Z<ie;Z++){let[K,$]=oe(Q,ce,(Z-(ie-1)/2)*.22);u(D,H,K,$,A,{dmg:Mt.scatter.dmg*pe,size:Y})}}else if(A==="rapid"){let ie=(L.shotIx=(L.shotIx||0)+1)%2?1:-1;u(D-ce*.22*ie,H+Q*.22*ie,Q,ce,A,{dmg:Mt.rapid.dmg*pe,size:Y})}else if(A==="beam")u(D,H,Q,ce,A,{dmg:Mt.beam.dmg*pe,size:Y});else for(let ie=0;ie<2;ie++){let[Z,K]=oe(Q,ce,(Math.random()-.5)*.5);u(D,H,Z,K,A,{dmg:Mt.flame.dmg*pe,size:Y*(.8+Math.random()*.5),spdMul:.8+Math.random()*.5})}}function x(L){let A=n.find(U=>!U.alive);if(!A)return null;let F=UE[L.kind||"red"];return Object.assign(A,{alive:!0,x:L.x,y:L.y??1.1,z:L.z,vx:L.vx,vy:L.vy||0,vz:L.vz,life:L.life||Cp,kind:L.kind||"red",grav:!!L.grav,size:F.size}),A.mesh.visible=!0,A.mesh.scale.setScalar(F.size/.2),A.mesh.userData.glow.material.color.set(F.col),A.mesh.position.set(A.x,A.y,A.z),A}function p(L,A,F,U=12,D=10){let H=new ge(l,new We({color:F,transparent:!0,opacity:.95,blending:ht,depthWrite:!1,side:gt}));H.rotation.x=-Math.PI/2,H.position.set(L,.12,A),i.add(H),s.push({x:L,z:A,r:.5,spd:U,maxR:D,mesh:H,col:F,passed:!1})}function g(L,A){let F=new ge(c,new We({color:"#2a0f4a",transparent:!0,opacity:.85,depthWrite:!1}));F.rotation.x=-Math.PI/2,F.position.set(L,.08,A),F.scale.setScalar(1.5),i.add(F),r.push({x:L,z:A,r:1.5,t:3.5,mesh:F})}function m(L){let A=new Be;A.position.set(L.x,0,L.z);let F=new ge(new vt(.75,.85,.3,8),new Ye({color:"#2a2030",roughness:.6}));F.position.y=.15,A.add(F);let U=new ge(new It(.85,.85,.85),new Ye({color:"#2D1B4E",roughness:.45,metalness:.3,emissive:ue.gold,emissiveIntensity:.15}));U.position.y=.95,A.add(U);let D=new ge(new It(.9,.12,.9),new Ye({color:ue.gold,metalness:.8,roughness:.25}));D.position.y=.95,A.add(D);let H=D.clone();H.rotation.z=Math.PI/2,A.add(H);let Q=bt(ue.gold,1.8,.35);Q.position.y=1,A.add(Q),i.add(A),o.push({x:L.x,z:L.z,kind:L.kind,hp:2,alive:!0,mesh:A,crate:U,glow:Q,t:Math.random()*6})}function _(L,A,F){let U=F==="power"?ue.gold:Mt[F].col,D=new Be;D.position.set(L,0,A);let H=new ge(F==="power"?new br(.34):new Da(.3,0),new Ye({color:U,emissive:U,emissiveIntensity:1.2,metalness:.5,roughness:.2}));H.position.y=1.1,D.add(H);let Q=bt(U,1.6,.6);Q.position.y=1.1,D.add(Q);let ce=new ge(new ln(.5,.62,24),new We({color:U,transparent:!0,opacity:.6,blending:ht,depthWrite:!1,side:gt}));ce.rotation.x=-Math.PI/2,ce.position.y=.06,D.add(ce),i.add(D),a.push({x:L,z:A,kind:F,mesh:D,core:H,t:0})}function v(L){L.alive=!1,L.mesh.visible=!1}function y(L){let A=e.H,F=e.level,U=e.boss;for(let D of t){if(!D.alive)continue;let H=D.x,Q=D.z;if(D.x+=D.vx*L,D.z+=D.vz*L,D.life-=L,D.life<=0){v(D);continue}if(Ts(F,H,Q,D.x,D.z,D.y-.4)){e.fx.spawn(H,D.y,Q,Mt[D.kind].col,4,{spd:2,up:1.5,size:.3}),v(D);continue}let ce=!1;for(let pe of e.foes.list){if(!pe.alive||D.hit.has(pe)||Math.abs(R0(pe)-D.y)>(pe.type==="brute"?1.6:1.25))continue;let Y=pe.x-D.x,oe=pe.z-D.z;if(Y*Y+oe*oe<(pe.r+D.size)**2){D.hit.add(pe);let ie=Math.hypot(D.vx,D.vz)||1;if(e.foes.damage(pe,D.dmg,D.reflected,D.vx/ie,D.vz/ie,D.kind==="flame"?2:5),e.fx.spawn(D.x,D.y,D.z,Mt[D.kind].col,3,{spd:2,up:1,size:.3}),!D.pierce){ce=!0;break}}}if(!ce&&U&&U.alive&&U.awake){let pe=U.x-D.x,Y=U.z-D.z;pe*pe+Y*Y<(U.r+D.size)**2&&!D.hit.has(U)&&(D.hit.add(U),U.hit(D)?(U.damage(D.dmg,D.reflected),e.fx.spawn(D.x,D.y,D.z,Mt[D.kind].col,4,{spd:2,up:1,size:.3})):(e.fx.spawn(D.x,D.y,D.z,"#ffffff",3,{spd:2,up:1,size:.25}),e.audio.beep(200,.05,"square",.06)),D.pierce||(ce=!0))}if(!ce)for(let pe of o){if(!pe.alive)continue;let Y=pe.x-D.x,oe=pe.z-D.z;if(Y*Y+oe*oe<.85&&(w(pe,D.dmg),!D.pierce)){ce=!0;break}}if(ce){v(D);continue}D.mesh.position.set(D.x,D.y,D.z),D.kind==="flame"&&D.mesh.scale.setScalar(D.size/.15*(1+(1-D.life/.42)*1.4))}for(let D of n){if(!D.alive)continue;let H=D.x,Q=D.z;if(D.x+=D.vx*L,D.z+=D.vz*L,D.life-=L,D.grav||(D.y+=D.vy*L),D.grav&&(D.vy-=22*L,D.y+=D.vy*L,D.y<=.2)){g(D.x,D.z),e.fx.spawn(D.x,.3,D.z,ue.violet,10,{spd:3,up:2}),e.audio.noise(.1,.1,200,1200),v(D);continue}if(D.life<=0||!D.grav&&Ts(F,H,Q,D.x,D.z,D.y-.4)){v(D);continue}if(A.alive){let ce=A.x-D.x,pe=A.z-D.z;if(ce*ce+pe*pe<(Mn+D.size)**2&&(D.grav?D.y<A.y+1.9&&D.y>A.y-.2:Math.abs(D.y-(A.y+1.1))<1)){if(e.wardBlocks(D.x,D.z)){if(e.wardAbsorb(18,D.x,D.z)==="parry"){let oe=Math.hypot(D.vx,D.vz)||1;u(D.x,D.z,-D.vx/oe,-D.vz/oe,"single",{dmg:3,size:.28,reflected:!0,col:"#ffffff",spdMul:1.1,y:D.y})}v(D);continue}if(e.hurt("shot",D.x,D.z)){v(D);continue}}}D.mesh.position.set(D.x,D.y,D.z)}for(let D=s.length-1;D>=0;D--){let H=s[D];if(H.r+=H.spd*L,H.mesh.scale.setScalar(H.r),H.mesh.material.opacity=.95*(1-H.r/H.maxR),H.r>=H.maxR){i.remove(H.mesh),H.mesh.material.dispose(),s.splice(D,1);continue}if(A.alive&&!H.passed){let Q=Math.hypot(A.x-H.x,A.z-H.z);Math.abs(Q-H.r)<.45+Mn&&A.y<.35&&(A.dashT>0?(H.passed=!0,e.onStyle("dash")):A.ward?(H.passed=!0,e.wardAbsorb(30,H.x,H.z)):e.hurt("wave",H.x,H.z)&&(H.passed=!0))}}for(let D=r.length-1;D>=0;D--){let H=r[D];if(H.t-=L,H.mesh.material.opacity=Math.min(.85,H.t*.6),H.t<=0){i.remove(H.mesh),H.mesh.material.dispose(),r.splice(D,1);continue}A.y<.1&&Math.hypot(A.x-H.x,A.z-H.z)<H.r&&(e.slowMul=.5)}for(let D of o)D.alive&&(D.t+=L,D.crate.rotation.y=D.t*.6,D.crate.position.y=.95+Math.sin(D.t*2)*.05,D.glow.material.opacity=.3+Math.sin(D.t*3)*.12);for(let D=a.length-1;D>=0;D--){let H=a[D];H.t+=L,H.core.rotation.y=H.t*2,H.core.rotation.x=H.t,H.core.position.y=1.1+Math.sin(H.t*3)*.12,A.alive&&Math.hypot(A.x-H.x,A.z-H.z)<1.1&&(i.remove(H.mesh),a.splice(D,1),e.onPickup(H.kind,H.x,H.z))}}function w(L,A){L.hp-=A,L.crate.material.emissiveIntensity=1.2,setTimeout(()=>{L.crate.material.emissiveIntensity=.15},80),e.audio.beep(300,.05,"square",.08,150),L.hp<=0&&(L.alive=!1,i.remove(L.mesh),e.fx.spawn(L.x,1,L.z,ue.gold,18,{spd:5,up:5}),e.fx.spawn(L.x,1,L.z,"#ffffff",6,{spd:3,size:.35}),e.fx.ring(L.x,L.z,ue.gold,2.5,.4),e.audio.sfx.crate(),_(L.x,L.z,L.kind),e.onCrate(L))}let E=null,S={hilt:new O,tip:new O};function C(L,A,F=1,U=1,D=0){let H=ni[L%ni.length];return E={n:L,C:H,last:L%ni.length===ni.length-1,lunge:A,mom:F,sword:U,dur:Math.max(D||0,H.t),t:0,prev:null,hit:new Set,hits:0,react:bm(H,F)},E}function b(){let L=E;return E=null,L}function M(L,A){let F=wm(E.C,A),U=Math.cos(F),D=Math.sin(F),H=L.fx*U-L.fz*D,Q=L.fz*U+L.fx*D;return S.hilt.set(L.x+H*.3,L.y+1.1,L.z+Q*.3),S.tip.set(L.x+H*1.6,L.y+1.1,L.z+Q*1.6),S}function I(L){return L.type==="flyer"?[L.y-.45,.9]:[L.y,L.type==="brute"?2.8:L.type==="shooter"?2.2:2]}function B(L,A,F=!1){let U=E;if(!U)return 0;let D=e.H;if(U.t+=L,U.done)return 0;if(U.t>U.dur)return U.done=!0,0;if(F&&(A=M(D,U.t/U.C.t)),!A)return U.prev=null,0;let H={a:[A.hilt.x,A.hilt.z],b:[A.tip.x,A.tip.z],y0:Math.min(A.hilt.y,A.tip.y),y1:Math.max(A.hilt.y,A.tip.y)},Q=U.prev;if(U.prev=H,!Q)return 0;let ce=Math.hypot(Q.b[0]-D.x,Q.b[1]-D.z),pe=Math.hypot(H.b[0]-D.x,H.b[1]-D.z),Y=F||Tm(ce,pe,Math.hypot(H.b[0]-Q.b[0],H.b[1]-Q.b[1]),L);if(U.cutting&&!Y&&(U.cutDone=!0),U.cutting=Y,!Y||F&&U.t>U.C.t)return 0;let oe=Math.min(Q.y0,H.y0),ie=Math.max(Q.y1,H.y1),Z=(T,ye,te)=>Em(Q.a,Q.b,H.a,H.b,T,ye,te),{C:K,mom:$,sword:ee,react:re}=U,se=0;for(let T of e.foes.list){if(!T.alive||U.hit.has(T))continue;let[ye,te]=I(T);if(!Sm(oe,ie,ye,te)||!Z(T.x,T.z,T.r))continue;U.hit.add(T),se++;let Me=T.x-D.x,he=T.z-D.z,Ce=Math.hypot(Me,he)||1;e.foes.damage(T,K.dmg*$*ee,K.launch||U.lunge,Me/Ce,he/Ce,re.knock,re),e.fx.spawn(T.x,1,T.z,"#ffffff",5,{spd:3,up:2,size:.35}),e.fx.flash(T.x,R0(T),T.z,K.col||(U.last||$>1.3?"#fff4c8":"#ffffff"),(U.last?3.4:1.9)*(.9+$*.25),U.last?.18:.12)}let _e=e.boss;_e&&_e.alive&&_e.awake&&!U.hit.has(_e)&&Z(_e.x,_e.z,_e.r)&&(U.hit.add(_e),_e.hit({x:_e.x,z:_e.z,y:1})?(_e.damage(K.dmg*$*ee,K.launch),se++):e.audio.beep(200,.05,"square",.06));for(let T of n)T.alive&&Z(T.x,T.z,T.size)&&(v(T),e.fx.spawn(T.x,T.y,T.z,"#ffffff",4,{spd:3,up:1,size:.3}),e.onStyle("cut"));for(let T of o)T.alive&&!U.hit.has(T)&&Z(T.x,T.z,.6)&&(U.hit.add(T),w(T,2));return se&&!U.hits&&U.last&&e.fx.ring(D.x+D.fx*1.2,D.z+D.fz*1.2,"#fff4c8",3.6,.32),U.hits+=se,se}function k(){E=null;for(let L of t)v(L);for(let L of n)v(L);for(let L of s)i.remove(L.mesh);s.length=0;for(let L of r)i.remove(L.mesh);r.length=0;for(let L of o)L.alive&&i.remove(L.mesh);o.length=0;for(let L of a)i.remove(L.mesh);a.length=0}function V(){for(let L of n)v(L)}return{bullets:t,ebullets:n,waves:s,crates:o,pickups:a,fire:f,spawnEBullet:x,spawnWave:p,spawnCrate:m,spawnPickup:_,beginStrike:C,sweepStrike:B,endStrike:b,get strike(){return E&&!E.done?E:null},update:y,clear:k,clearEnemyShots:V,WEP_ORDER:bp}}var Is=(i={})=>new Ye({color:"#1b1b24",roughness:.5,metalness:.4,...i}),Ps=(i,e=1)=>new Ye({color:i,emissive:i,emissiveIntensity:e});function Kn(i,e,t,n){return new ge(new It(i,e,t),n)}var ju=(i,e,t,n=2)=>{let s=i.bossRect;return[Math.max(s.x0*2+n,Math.min(s.x1*2-n,e)),Math.max(s.z0*2+n,Math.min(s.z1*2-n,t))]};function _l(i,e,t,n=10){let s=i.H;if(!s.alive||s.y>1.3)return;let r=s.x-e.x,o=s.z-e.z,a=Math.hypot(r,o)||.001;if(a<t+Mn){let l=r/a,c=o/a;s.ward?(i.wardAbsorb(Tp,e.x,e.z),i.shove(l,c,n)):i.hurt("boss",e.x,e.z)&&i.shove(l,c,n*.6)}}function zE(i,e,t){let n=new Be;i.add(n),n.add(Yn(2.4));let s=Is(),r=Ps(ue.char,.9),o=[s,r],a=Kn(3.4,2.2,2.6,s);a.position.y=1.5,n.add(a);let l=Kn(1.6,1.2,.3,Ps(ue.orange,1.6));l.position.set(0,1.3,1.35),n.add(l);let c=bt(ue.orange,3.2,.7);c.position.set(0,1.3,1.6),n.add(c);for(let f of[-1,1]){let x=Kn(1,.9,3,Is({color:"#101016"}));x.position.set(f*1.9,.45,0),n.add(x);let p=Kn(1.02,.1,2.6,r);p.position.set(f*1.9,.5,0),n.add(p)}let h=new ge(new vt(.35,.45,1.6,10),s);h.position.set(-.8,3.2,-.6),n.add(h);let u=h.clone();u.position.x=.8,n.add(u);let d=Kn(2.2,.16,1.2,Ps(ue.gold,.4));d.position.set(0,2.7,.4),n.add(d);for(let f of[-1,1]){let x=new ge(new tn(.14,8,6),new We({color:ue.hotred}));x.position.set(f*.7,2.1,1.32),n.add(x)}Object.assign(t,{mesh:n,mats:o,r:2,y:0,home:{x:t.x,z:t.z},shootT:1.5,pat:0,burst:0,burstT:0,lunge:0,lungeT:0,lungeCd:3,tx:0,tz:0}),t.hit=()=>!0,t.update=f=>{let x=e.H,p=t.x,g=t.z+1.2;if(t.t+=f,t.lunge===0&&(t.x=t.home.x+Math.sin(t.t*.7)*3,t.z=t.home.z+Math.sin(t.t*1.2)*.6),Math.random()<f*22&&e.fx.ember(t.x+(Math.random()-.5)*1.2,1.4,t.z+1.4,ue.orange,.35,.8,1.8),Math.random()<f*8&&e.fx.ember(t.x-.8+Math.random()*1.6,4,t.z-.6,"#efe6cf",.3,1.4,.8),t.hp/t.max<.33&&Math.random()<f*6&&e.fx.spawn(t.x+1.2,2.4,t.z,"#ffffff",3,{spd:2,up:2,size:.3}),t.shootT-=f,t.burst>0){if(t.burstT-=f,t.burstT<=0&&x.alive){t.burst--,t.burstT=.16;let m=x.x-p,_=x.z-g,v=Math.hypot(m,_)||1;e.combat.spawnEBullet({x:p,y:1.3,z:g,vx:m/v*11,vz:_/v*11,kind:"ember"}),e.fx.spawn(p,1.3,g,ue.orange,5,{spd:2,up:1,size:.3}),e.audio.noise(.08,.14,500,200)}}else if(t.shootT<=0&&x.alive)if(t.pat=(t.pat+1)%3,t.pat===2)t.burst=3,t.burstT=0,t.shootT=1.6;else{t.shootT=1.15;let m=Math.atan2(x.z-g,x.x-p);for(let _=-2;_<=2;_++){let v=m+_*.2+Math.sin(t.t)*.12;e.combat.spawnEBullet({x:p,y:1.3,z:g,vx:Math.cos(v)*9,vz:Math.sin(v)*9,kind:"ember"})}e.fx.spawn(p,1.3,g,ue.orange,8,{spd:3,up:2,size:.3}),e.audio.noise(.12,.18,400,150)}if(_l(e,t,t.r),t.hp/t.max<.5)if(t.lungeCd-=f,t.lunge===0&&t.lungeCd<=0)t.lunge=1,t.lungeT=.5,e.audio.noise(.5,.2,200,600),e.flash("TREADS FLARE \u2014 DASH THE WAVE",ue.char);else if(t.lunge===1){if(t.lungeT-=f,r.emissiveIntensity=2.5,t.lungeT<=0){t.lunge=2,t.lungeT=.34;let m=x.x-t.x,_=x.z-t.z,v=Math.hypot(m,_)||1;t.tx=m/v,t.tz=_/v}}else if(t.lunge===2){t.lungeT-=f;let[m,_]=ju(e.level,t.x+t.tx*22*f,t.z+t.tz*22*f,2.6);t.x=m,t.z=_,_l(e,t,t.r+.3),t.lungeT<=0&&(t.lunge=3,t.lungeT=.9,e.shake(10),e.audio.sfx.slam(),e.combat.spawnWave(t.x,t.z,ue.char,13,11),e.fx.spawn(t.x,.3,t.z,ue.char,24,{spd:6,up:4}),e.fx.ring(t.x,t.z,ue.char,4,.5))}else t.lunge===3&&(t.lungeT-=f,r.emissiveIntensity=.9,t.x+=(t.home.x-t.x)*Math.min(1,f*3),t.z+=(t.home.z-t.z)*Math.min(1,f*3),t.lungeT<=0&&(t.lunge=0,t.lungeCd=4.5));n.position.set(t.x,t.y+Math.sin(t.t*1.2)*.06,t.z),n.rotation.y=Math.atan2(x.x-t.x,x.z-t.z)*.25,c.material.opacity=.5+Math.sin(t.t*6)*.2}}function FE(i,e,t){let n=new Be;i.add(n),n.add(Yn(2.2));let s=Ps(ue.pink,1.4),r=Is({color:"#2a1230"}),o=Ps(ue.pink,.8),a=[s,r,o],l=new Be;l.position.y=2.4,n.add(l);let c=new ge(new tn(.9,20,14),s);l.add(c);let h=bt(ue.pink,3.4,.6);l.add(h);let u=new ge(new ei(2.2,.06,8,48),o);u.rotation.x=Math.PI/2,l.add(u);let d=new Be;l.add(d);let f=[];for(let g=0;g<6;g++){let m=new Be;m.rotation.y=g*Math.PI/3;let _=Kn(1.15,1.7,.22,r);_.position.z=2,m.add(_);let v=Kn(1.17,.08,.24,o);v.position.set(0,.85,2),m.add(v),d.add(m),f.push(_)}let x=bt(ue.cyan,1.8,.6);x.position.y=-1.1,l.add(x);let p=new ge(new An(1.8,40),new We({color:ue.pink,transparent:!0,opacity:0,blending:ht,depthWrite:!1,side:gt}));p.rotation.x=-Math.PI/2,p.position.y=.1,i.add(p),t.mount=d,Object.assign(t,{mesh:n,mats:a,extra:[p],r:2.3,y:2.4,home:{x:t.x,z:t.z},rot:0,open:0,openCd:4,mode:"cruise",modeT:2.2,shootT:1.2,beamOn:0,spawnCd:5,bx:0,bz:0,bdx:0,bdz:1}),t.hit=g=>{if(t.open>0)return!0;let m=Math.atan2(g.x-t.x,g.z-t.z),_=Math.PI/3;return((m-t.rot)%_+_)%_>_*.62},t.update=g=>{let m=e.H;t.t+=g,t.rot+=g*(t.open>0?.3:.9),d.rotation.y=t.rot,t.x=t.home.x+Math.sin(t.t*.5)*4.5,t.z=t.home.z+Math.sin(t.t*1.3)*1.4,t.open>0?t.open-=g:(t.openCd-=g,t.openCd<=0&&(t.open=1.8,t.openCd=4.5,e.flash("ARRAY OPEN \u2014 HIT THE CORE",ue.cyan),e.audio.sfx.open()));let _=t.open>0?3.2:2;for(let v of f)v.position.z+=(_-v.position.z)*Math.min(1,g*6);if(Math.random()<g*18&&e.fx.ember(t.x+(Math.random()-.5)*2,1.2,t.z+(Math.random()-.5)*2,ue.pink,.3,.7,-1.5),t.modeT-=g,t.spawnCd-=g,t.mode==="cruise"){if(t.shootT-=g,t.shootT<=0&&m.alive){t.shootT=1.1;let v=Math.atan2(m.z-t.z,m.x-t.x);for(let y of[-.12,0,.12])e.combat.spawnEBullet({x:t.x,y:1.3,z:t.z,vx:Math.cos(v+y)*10,vz:Math.sin(v+y)*10,kind:"pulse"});e.fx.spawn(t.x,1.5,t.z,ue.pink,6,{spd:3,up:1,size:.3}),e.audio.beep(1400,.08,"sine",.12,600)}if(t.modeT<=0){let v=e.foes.aliveCount("flyer");if(t.mode=t.spawnCd<=0&&v<3?"deploy":"sweep",t.modeT=t.mode==="sweep"?.75:.9,t.mode==="sweep"){let y=m.x-t.x,w=m.z-t.z,E=Math.hypot(y,w)||1;t.bdx=y/E,t.bdz=w/E,t.bx=t.x,t.bz=t.z,e.audio.sfx.beamTell(),e.flash("BEAM \u2014 STEP OFF THE LINE",ue.pink)}}}else if(t.mode==="sweep"){if(p.position.set(t.bx+t.bdx*20,.1,t.bz+t.bdz*20),p.rotation.z=-Math.atan2(t.bdx,t.bdz),t.beamOn<=0&&(p.material.opacity=.25+Math.floor(t.t*12)%2*.25),t.modeT<=0&&t.beamOn<=0&&(t.beamOn=.4,e.shake(5),e.audio.sfx.beamFire()),t.beamOn>0){if(t.beamOn-=g,p.material.opacity=.95,Math.random()<g*40&&e.fx.spawn(t.bx+t.bdx*Math.random()*30,.3,t.bz+t.bdz*Math.random()*30,ue.pink,2,{spd:2,up:4,size:.3}),m.alive){let v=m.x-t.bx,y=m.z-t.bz,w=v*t.bdx+y*t.bdz,E=Math.abs(v*t.bdz-y*t.bdx);w>0&&w<40&&E<.9+Mn&&m.y<1.2&&(m.ward?e.wardAbsorb(70*g,t.x,t.z):e.hurt("beam",t.x,t.z))}t.beamOn<=0&&(t.mode="cruise",t.modeT=2.4,t.shootT=.8,p.material.opacity=0)}}else if(t.mode==="deploy"&&t.modeT<=0){for(let v of[-1.6,1.6]){let[y,w]=ju(e.level,t.x+v,t.z+1.5);e.foes.spawn("flyer",y,w).aggro=!0}e.fx.spawn(t.x,1.8,t.z,ue.cyan,14,{spd:4,up:2}),e.audio.beep(500,.2,"square",.15,250),t.spawnCd=9,t.mode="cruise",t.modeT=2.4}_l(e,t,1.6),n.position.set(t.x,0,t.z),l.position.y=2.4+Math.sin(t.t*1.6)*.2,c.rotation.y+=g,h.material.opacity=t.open>0?.9:.5,s.emissiveIntensity=t.open>0?2.4:1.4}}function kE(i,e,t){let n=new Be;i.add(n);let s=Yn(2);n.add(s);let r=Is({color:"#141018"}),o=Ps(ue.violet,.9),a=Ps(ue.gold,.1),l=[r,o],c=new Be;n.add(c);let h=Kn(3.2,1.8,2.4,r);h.position.y=.9,c.add(h);for(let w of[-1,1]){let E=Kn(.1,.5,2.3,o);E.position.set(w*1.62,.9,0),c.add(E)}let u=new ge(new vt(.7,.7,.14,16),a);u.position.set(0,1.86,.4),c.add(u);let d=bt(ue.gold,2.4,0);d.position.set(0,2,.4),c.add(d);let f=new ge(new vt(.4,.5,8,10),Is({color:"#22202a"}));f.position.y=5.8,c.add(f);let x=e.level.bossRect,p=x.x0*2+1,g=x.x1*2-1,m=x.z0*2+1,_=x.z1*2-1,v=new Be;i.add(v);for(let w of[m+1.5,_-1.5]){let E=Kn(g-p,.3,.5,Is({color:"#22202a"}));E.position.set((p+g)/2,7.2,w),v.add(E)}let y=Kn(1.4,.4,_-m-2.5,Is({color:"#22202a"}));y.position.set(BE(e).x,7.2,(m+_)/2),v.add(y),t.mount=c,Object.assign(t,{mesh:n,mats:l,extra:[v],r:1.9,y:5.5,state:"track",st:2,topY:5.5,botY:0,vul:!1}),t.hit=()=>t.vul,t.update=w=>{let E=e.H;t.t+=w,t.st-=w;let[S,C]=ju(e.level,E.x,E.z,2.5);if(t.state==="track")t.vul=!1,t.x+=(S-t.x)*Math.min(1,w*2.2),t.z+=(C-t.z)*Math.min(1,w*2.2),t.y=t.topY+Math.sin(t.t*2)*.15,t.st<=0&&(t.state="slam",t.st=.22,e.audio.noise(.2,.2,300,80));else if(t.state==="slam"){if(t.y+=(t.botY-t.y)*Math.min(1,w*14),t.st<=0){t.y=t.botY,t.state="down",t.st=1.1,t.vul=!0,e.shake(12),e.audio.sfx.slam(),e.combat.spawnWave(t.x,t.z,ue.violet,13,9);for(let b=0;b<3;b++){let M=Math.atan2(E.z-t.z,E.x-t.x)+(b-1)*.9+(Math.random()-.5)*.4,I=4+Math.random()*3;e.combat.spawnEBullet({x:t.x,y:2.2,z:t.z,vx:Math.cos(M)*I,vz:Math.sin(M)*I,vy:7.5,kind:"ink",grav:!0,life:6})}e.fx.spawn(t.x,.3,t.z,ue.violet,26,{spd:6,up:4}),e.fx.ring(t.x,t.z,ue.violet,5,.5),e.flash("SEAL EXPOSED \u2014 FIRE",ue.gold)}}else t.state==="down"?t.st<=0&&(t.state="rise",t.st=.6,t.vul=!1):t.state==="rise"&&(t.y+=(t.topY-t.y)*Math.min(1,w*6),t.st<=0&&(t.state="track",t.st=1.6+Math.random()*.8));Math.random()<w*8&&e.fx.ember(t.x-1.4+Math.random()*2.8,t.y+.2,t.z+(Math.random()-.5)*2,"#6a3cff",.3,.8,-1),t.state!=="track"&&_l(e,t,1.9),n.position.set(t.x,0,t.z),c.position.y=t.y,s.scale.setScalar(1-t.y/8),y.position.x=t.x,a.emissiveIntensity=t.vul?2.2:.1,d.material.opacity=t.vul?.8:0,o.emissiveIntensity=t.vul?2:.9}}var BE=i=>i.level.bossPos;function P0(i,e,t){let n=Ip[t],s=e.level.bossPos,r={key:t,name:n.name,wake:n.wake,x:s.x,z:s.z,hp:n.hp,max:n.hp,alive:!0,awake:!1,t:0,hurtT:0,stun:0,extra:[],dying:0};({engine:zE,censor:FE,redactor:kE})[t](i,e,r);let o=_0(e.assets,r,r.mount),a=r.update;r.damage=(l,c)=>{r.alive&&(l*=e.comboHit?e.comboHit():1,r.hp-=l,r.hurtT=.1,e.audio.sfx.bossHit(),e.onBossDamage(l,c),r.hp<=0&&(r.hp=0,r.alive=!1,r.dying=2.4,e.onBossDead()))},r.update=l=>{if(!r.alive){r.dying-=l,Math.random()<l*14&&(e.fx.spawn(r.x+(Math.random()-.5)*3,1+Math.random()*2,r.z+(Math.random()-.5)*3,Math.random()<.5?"#ffffff":ue.orange,10,{spd:6,up:5}),e.shake(4)),r.mesh.position.y-=l*.35,r.mesh.rotation.z+=l*.15;return}if(r.stun>0){r.stun-=l,r.t+=l*.1,r.mesh.rotation.x=Math.sin(r.t*40)*.03;return}if(a(l),r.hurtT>0){r.hurtT-=l,r.wasHurt=!0;for(let c of r.mats)c.emissive.set("#ffffff"),c.emissiveIntensity=1.6;o&&ns(o.mats,1),r.hurtT<=0&&o&&ns(o.mats,0)}else if(r.wasHurt){r.wasHurt=!1;for(let c of r.mats)c.emissive.setHex(c.userData.def.c),c.emissiveIntensity=c.userData.def.i}};for(let l of r.mats)l.userData.def={c:l.emissive.getHex(),i:l.emissiveIntensity};return r.dispose=()=>{i.remove(r.mesh);for(let l of r.extra)i.remove(l)},r.mesh.position.set(r.x,0,r.z),r}var HE=i=>document.getElementById(i),ss=i=>String(i).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]);function L0(){let i={};for(let S of["hud","heroName","heroTitle","lives","wep","pow","wardBar","chargeBar","score","mult","pages","rail","flash","bossBar","bossName","bossFill","pageCard","pgTitle","pgLine","pgSrc","menu","select","worldSel","codexPop","pausePop","endPop","cardM","cardK","wrow","cxWrap","endMsg","endSub","rkRank","rkScore","rkGrid","rkHint","rkWorld","rkRows","nextWorld","muteBtn","sfxBtn","pauseBtn","touch","hint"])i[S]=HE(S);let e=0,t=0;function n(S){for(let C of document.querySelectorAll(".overlay"))C.classList.add("hidden");S&&i[S].classList.remove("hidden"),document.body.classList.toggle("playing",!S),i.pauseBtn.classList.toggle("hidden",!!S),i.muteBtn.classList.toggle("hidden",!!S&&S!=="pausePop"),i.sfxBtn.classList.toggle("hidden",!!S&&S!=="pausePop")}function s(S,C=ue.gold){i.flash.textContent=S,i.flash.style.color=C,i.flash.style.textShadow=`0 0 18px ${C}`,e=1.7,i.flash.style.opacity=1}function r(S){i.hint.textContent=S||""}function o(S){i.heroName.textContent=S.name,i.heroName.style.color=S.accent,i.heroTitle.textContent=S.title}function a(S){i.rail.textContent=S.rail,i.rail.style.color=S.accent}function l(S){i.pgTitle.textContent=S.t,i.pgLine.textContent=S.l,i.pgSrc.textContent=S.s,t=4.8,i.pageCard.classList.remove("hidden")}function c(S){i.bossName.textContent=S,i.bossBar.classList.remove("hidden")}function h(S,C){i.bossFill.style.width=Math.max(0,S/C*100)+"%"}function u(){i.bossBar.classList.add("hidden")}function d(S,C,b,M){i.lives.textContent="\u25C6".repeat(Math.max(0,C.lives))+"\u25C7".repeat(Math.max(0,3-C.lives));let I=Mt[C.weapon];i.wep.textContent=I.name,i.wep.style.color=I.col,i.wep.style.borderColor=I.col,i.pow.innerHTML=Array.from({length:Rr},(B,k)=>`<i class="${k<C.power?"on":""}"></i>`).join(""),i.wardBar.firstElementChild.style.width=Math.max(0,C.shield/Ji*100)+"%",i.wardBar.classList.toggle("broken",C.wardBroken>0),i.chargeBar.firstElementChild.style.width=Math.min(1,C.charge/ws)*100+"%",i.chargeBar.classList.toggle("full",C.charge>=ws),i.score.textContent=b.score.toLocaleString(),i.mult.textContent="\xD7"+b.mult.toFixed(2).replace(/\.?0+$/,""),i.mult.style.color=b.mult>=4?ue.gold:b.mult>=2?ue.cyan:"#cfc6b8",i.pages.textContent=`${b.pages} RECORDS RECOVERED`,e>0&&(e-=S,e<.5&&(i.flash.style.opacity=e/.5)),t>0&&(t-=S,t<=0&&i.pageCard.classList.add("hidden"))}function f(S){document.querySelectorAll(".selcard.hero[data-hero]").forEach(C=>C.classList.toggle("sel",C.dataset.hero===S))}function x(S,C){i.wrow.innerHTML=ii.map(b=>{let M=bn[b],I=yo(b),B=Zp(b),k=!C.includes(b);return`<div class="selcard wcard ${S===b?"sel":""} ${k?"locked":""}" data-w="${b}" style="--acc:${M.accent}">
        <div class="wglyph" style="background:radial-gradient(circle at 50% 60%, ${M.sky[1]}, ${M.sky[2]})"><span style="color:${M.accent}">${b==="ramparts"?"\u26EB":b==="venus"?"\u263F":"\u{1F4DC}"}</span></div>
        <div class="selname" style="color:${M.accent}">${M.name}</div><div class="seltag">${ss(M.tag)}</div>
        <div class="selbest">${I?`BEST ${I.s.toLocaleString()} \xB7 ${I.r} \xB7 ${Ft[I.h]?Ft[I.h].name:I.h}`:"NO RUN YET"} &nbsp;\xB7&nbsp; CODEX ${B}/${_o[b].length}</div>
        ${k?'<div class="lock">CLEAR THE PREVIOUS FRONT</div>':""}</div>`}).join("")}function p(){let S=vo(),C=/[?&]codexall/.test(location.search),b=["\u2726 \u25C8 \u2726","\u25C8 \u2726 \u25C8","\u2727 \u2726 \u2727"],M=(I,B,k,V)=>C||B.includes(I.id)?`<div class="cx-scroll"><div class="cx-paper"><span class="cx-glyphs">${b[V%b.length]}</span><b>${ss(I.t)}</b><p>${ss(I.l)}</p><small>${ss(I.s)}</small><span class="cx-seal">\u2726</span></div></div>`:`<div class="cx-scroll sealed"><div class="cx-paper"><span class="cx-glyphs">\u2726 \u2726 \u2726</span><b>${ss(I.t)}</b><span class="cx-ink" style="width:94%"></span><span class="cx-ink" style="width:80%"></span><span class="cx-ink" style="width:88%"></span><span class="cx-ink" style="width:56%"></span><span class="cx-stamp">REDACTED</span><small>Recover it in ${ss(k.name)}</small></div></div>`;i.cxWrap.innerHTML=ii.map(I=>{let B=bn[I],k=S[I]||[],V=_o[I],L=V.filter(F=>k.includes(F.id)).length,A=Xh.filter(F=>V.some(U=>U.v===F.id));return`<div class="cx-world" style="--acc:${B.accent}"><h3>${ss(B.name)} <small>${L}/${V.length} recovered</small></h3>`+A.map(F=>{let U=V.filter(H=>H.v===F.id),D=U.filter(H=>k.includes(H.id)).length;return`<div class="cx-vol">${ss(F.title)} <small>${D}/${U.length}</small></div><div class="cx-grid">${U.map((H,Q)=>M(H,k,B,Q)).join("")}</div>`}).join("")+"</div>"}).join("")}function g(S,C,b,M,I){i.endMsg.textContent=M?"UNERASED":"ERASED",i.endMsg.style.color=M?ue.gold:ue.hotred,i.endSub.textContent=M?b.win:"The line broke. The pages you recovered stay in the Codex \u2014 the rest are still out there.",i.rkRank.textContent=C,i.rkRank.style.color=C==="UNERASED"?ue.gold:C==="SAGE"?ue.cyan:C==="SCHOLAR"?ue.green:"#cfc6b8",i.rkScore.textContent=S.score.toLocaleString();let B=Math.floor(S.t/60),k=Math.floor(S.t%60),V=[["TIME",`${B}:${String(k).padStart(2,"0")}`],["HITS",S.hits],["KILLS",`${S.kills} \xB7 ${S.styleKills} style`],["PARRIES",S.parries],["BEST MULT","\xD7"+S.bestMult],["RECORDS",S.pages]];i.rkGrid.innerHTML=V.map(([A,F])=>`<div><small>${A}</small><b>${F}</b></div>`).join(""),i.rkHint.textContent=Xp(C),i.rkWorld.textContent=b.name;let L=il()[b.key]||[];i.rkRows.innerHTML=L.length?L.map((A,F)=>`<div class="lbrow"><span>${F+1}</span><b>${A.s.toLocaleString()}</b><span>${A.r}</span><span style="color:${Ft[A.h]?Ft[A.h].accent:"#fff"}">${Ft[A.h]?Ft[A.h].name:A.h}</span><span>${A.d}</span></div>`).join(""):'<div class="lbrow"><span>\u2014</span></div>',i.nextWorld.classList.toggle("hidden",!(M&&I)),I&&(i.nextWorld.textContent=`Next: ${bn[I].name} \u25B8`)}let m=null;function _(S){m||(m=document.createElement("div"),m.className="screenflash",document.body.appendChild(m)),m.style.background=`radial-gradient(circle at 50% 55%, ${S}88, ${S}00 70%)`,m.classList.remove("go"),m.offsetWidth,m.classList.add("go")}let v=null,y=0;function w(S){if(!v){v=document.createElement("div"),v.id="combo";let C=document.createElement("b"),b=document.createElement("small");b.textContent="HIT COMBO",v.append(C,b),i.hud.appendChild(v)}if(S<2){v.classList.remove("on"),y=0;return}v.firstChild.textContent=S,v.classList.add("on"),v.style.color=S>=30?"#ff7ad9":S>=15?"#ffd76a":S>=6?"#4CE0E0":"#f4ecd8",S!==y&&(v.classList.remove("pop"),v.offsetWidth,v.classList.add("pop"),y=S)}function E(S,C){i.muteBtn.classList.toggle("off",!!C),i.muteBtn.title=C?"Music is off (M)":"Music is on (M)",i.sfxBtn.textContent=S?"\u{1F507}":"\u{1F50A}",i.sfxBtn.classList.toggle("off",!!S)}return{el:i,show:n,flash:s,hint:r,setHero:o,setWorld:a,showPage:l,boss:c,bossHp:h,hideBoss:u,update:d,renderSelect:f,renderWorlds:x,renderCodex:p,renderEnd:g,setMuted:E,screenFlash:_,combo:w}}var N0="unerased3d.sound.v1",So=Object.freeze({music:.55,sfx:1,musicOn:!0,sfxOn:!0}),D0=i=>typeof i=="number"&&Number.isFinite(i)?Math.max(0,Math.min(1,i)):null;function rs(i,e={}){let t={...So,...i,...e};return{music:D0(t.music)??So.music,sfx:D0(t.sfx)??So.sfx,musicOn:typeof t.musicOn=="boolean"?t.musicOn:So.musicOn,sfxOn:typeof t.sfxOn=="boolean"?t.sfxOn:So.sfxOn}}function O0(){try{return globalThis.localStorage||null}catch{return null}}function U0(i=O0()){if(!i)return rs({});try{return rs(JSON.parse(i.getItem(N0)||"{}")||{})}catch{return rs({})}}function z0(i,e=O0()){if(!e)return!1;try{return e.setItem(N0,JSON.stringify(i)),!0}catch{return!1}}function F0(i,e,t){let n=document.createElement("div");n.className="soundpanel";let s=(o,a,l)=>{let c=document.createElement("div");c.className="srow";let h=document.createElement("span");h.textContent=o;let u=document.createElement("input");u.type="range",u.min="0",u.max="100",u.step="1",u.setAttribute("aria-label",o+" volume");let d=document.createElement("b"),f=document.createElement("button");return f.type="button",f.className="stoggle",u.addEventListener("input",()=>t({[a]:Number(u.value)/100,[l]:!0})),f.addEventListener("click",()=>t({[l]:!e()[l]})),c.append(h,u,d,f),{wrap:c,render(x){u.value=String(Math.round(x[a]*100)),d.textContent=x[l]?Math.round(x[a]*100)+"%":"OFF",f.textContent=x[l]?"ON":"OFF",f.classList.toggle("off",!x[l]),c.classList.toggle("muted",!x[l])}}},r=[s("MUSIC","music","musicOn"),s("EFFECTS","sfx","sfxOn")];return n.append(...r.map(o=>o.wrap)),i.appendChild(n),{render(o){for(let a of r)a.render(o)}}}var cn=T0({base:/quantummelaninmedia\.com$/.test(location.hostname)?"/assets/audio/":"./assets/music/"}),yt=i=>document.getElementById(i),G0=yt("scene"),ai=new ba({canvas:G0,antialias:!0,powerPreference:"high-performance"});Fm(ai);ai.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5));ai.outputColorSpace=mt;ai.toneMapping=po;ai.toneMappingExposure=.98;var Dn=new Sa,mn=new Bt(Ot.fov,1,Ot.near,Ot.far),Tl=new URLSearchParams(location.search).has("lq")?"low":"high";Tl==="high"&&(ai.shadowMap.enabled=!0,ai.shadowMap.type=Eh);var as=Tl==="high"?new Za(ai):null,nd=null;as&&(as.addPass(new $a(Dn,mn)),nd=new Ar(new Re(512,512),.52,.72,.86),as.addPass(nd),as.addPass(new Ja));var Qu=()=>as?as.render():ai.render(Dn,mn);function W0(){let i=window.innerWidth,e=window.innerHeight;ai.setSize(i,e,!1),mn.aspect=i/e,mn.updateProjectionMatrix(),as&&(as.setSize(i,e),nd.setSize(i,e))}window.addEventListener("resize",W0);W0();var ut=$p(),De=L0(),Dt=Om(Dn),kt=um(G0,yt("stick"),yt("knob"),{fire:yt("tFire"),blade:yt("tBlade"),ward:yt("tWard"),dash:yt("tDash"),swap:yt("tSwap"),jump:yt("tJump"),magic:yt("tMagic")}),nt=kt.IN,Al=ym(kt,{isPlaying:()=>At==="play",onConnect:i=>De.flash(i?"CONTROLLER CONNECTED":"CONTROLLER UNPLUGGED",ue.cyan),onDevice:i=>{At==="play"&&De.hint(i?hu:nt.touch?"":cu)}}),Xt=U0(),VE=[yt("menuSound"),yt("pauseSound")].filter(Boolean).map(i=>F0(i,()=>Xt,e=>Co(rs(Xt,e))));function Co(i){Xt=i,z0(Xt),cn.setVolume(Xt.music),cn.setMuted(!Xt.musicOn),ut.setVolume(Xt.sfx),ut.setMuted(!Xt.sfxOn),De.setMuted(!Xt.sfxOn,!Xt.musicOn);for(let e of VE)e.render(Xt)}Co(Xt);var z={scene:Dn,camera:mn,audio:ut,fx:Dt,hud:De,input:kt,assets:null,level:null,world:null,hero:null,foes:null,combat:null,boss:null,run:null,t:0,slowMul:1,H:null},At="menu",Yt="melvinci",Kt="ramparts",ls=null,El=[],zr=0,Sl=0,Fr=-1,Ao=-1,To=1,yl=0,wo=0,os=1,Ls=0,Ds=0,vl=0,Ml=1,bl=0,id=!0,Lt={yaw:0,pitch:1,dist:1},wl=new O,k0=new O,sd=()=>em(Lt.yaw,Ot.off[0],Ot.off[2]*To*Lt.dist),Ut=null,ed=0;function GE(){let i=z.foes.list.filter(e=>e.alive);return z.boss&&z.boss.alive&&z.boss.awake&&i.push(z.boss),i}function B0(i){let e=GE(),t=Am(i.x,i.z,i.fx,i.fz,e);return t>=0?e[t]:null}function WE(i){let e=z.H;if(kt.pressed("lock")&&(Ut?(Ut=null,De.flash("LOCK OFF",ue.cyan)):(Ut=B0(e),Ut?(De.flash(Ut===z.boss?"LOCKED \u2014 "+z.boss.name:"LOCKED",ue.gold),ed=0,ut.sfx.ui()):De.flash("NOTHING TO LOCK",ue.cyan))),Ut&&!Im(Ut,e.x,e.z)){let r=Ut.alive===!1;Ut=r?B0(e):null,Ut||De.flash(r?"TARGET DOWN":"LOCK LOST",ue.cyan)}if(!Ut)return;let t=Ut.x-e.x,n=Ut.z-e.z,s=Math.hypot(t,n);s>.05&&(nt.aimX=t/s,nt.aimZ=n/s),(ed-=i)<=0&&(ed=.35,Dt.ring(Ut.x,Ut.z,ue.gold,(Ut.r||.6)*2.2,.32,(Ut.y||0)+.06))}var X0=()=>{let i=["ramparts"];return yo("ramparts")&&i.push("venus"),yo("venus")&&i.push("archive"),i};function XE(i,e){return{x:i,z:e,y:0,vy:0,onGround:!0,airJumps:1,vx:0,vz:0,fx:0,fz:-1,r:Mn,alive:!0,invuln:0,dashT:0,dashCd:0,ddx:0,ddz:-1,ward:!1,wardT:9,wardBroken:0,parried:!1,shield:Ji,regenDelay:0,weapon:"single",power:1,owned:["single"],lives:el,fireCd:0,charge:0,charged:!1,wasFiring:!1,bladeN:0,bladeT:0,bladeWindow:0,mv:0,mvx:0,mvz:0,parryFlash:0,deadT:0,shotIx:0}}z.flash=(i,e)=>De.flash(i,e);z.shake=i=>{zr=Math.max(zr,i),Al.rumble(Math.min(1,i/12),Math.min(1,i/8)*.6,60+i*14)};z.hitstop=i=>{Sl=Math.max(Sl,i)};z.shove=(i,e,t)=>{z.H.vx+=i*t,z.H.vz+=e*t};z.wardBlocks=(i,e)=>{let t=z.H;if(!t.ward)return!1;let n=i-t.x,s=e-t.z,r=Math.hypot(n,s)||1;return(n*t.fx+s*t.fz)/r>Math.cos(ji)};z.wardAbsorb=(i,e,t)=>{let n=z.H;return n.wardT<Ap&&!n.parried?(n.parried=!0,z.run=kp(z.run),z.powers&&z.powers.addMeter("parry"),n.parryFlash=.18,ut.sfx.parry(),Dt.ring(n.x,n.z,"#ffffff",2.4,.3),Dt.spawn(n.x+n.fx*.9,1.1,n.z+n.fz*.9,"#ffffff",10,{spd:4,up:2,size:.35}),De.flash(z.run.parryChain>=3?"GOLD CANNON ARMED \u2014 FIRE":"PARRY",z.run.parryChain>=3?ue.gold:ue.cyan),z.hitstop(.05),"parry"):(n.shield-=i,n.regenDelay=$h,ut.sfx.ward(),Dt.spawn(e+(n.x-e)*.5,1.1,t+(n.z-t)*.5,Ft[Yt].accent,5,{spd:2,up:1,size:.3}),z.shake(2),n.shield<=0?(n.shield=0,n.ward=!1,n.wardBroken=1.6,ut.sfx.shatter(),De.flash("WARD SHATTERED",ue.hotred),Dt.spawn(n.x,1.1,n.z,Ft[Yt].accent,20,{spd:5,up:3}),"shatter"):"block")};z.hurt=(i,e,t)=>{let n=z.H;if(!n.alive||n.invuln>0||n.dashT>0)return!1;if(z.combo.n=0,z.combo.t=0,De.combo(0),n.lives--,z.run=Hp(z.run),n.invuln=vp,n.weapon="single",n.power=1,n.charge=0,n.charged=!1,n.ward=!1,z.hero.setWeaponColor(Mt.single.col),z.hero.hurtFlash(),ut.sfx.hurt(),z.shake(7),z.hitstop(.06),Al.rumble(1,.85,260),Dt.spawn(n.x,1.1,n.z,ue.hotred,16,{spd:5,up:3}),Dt.ring(n.x,n.z,ue.hotred,2.5,.4),e!==void 0){let s=n.x-e,r=n.z-t,o=Math.hypot(s,r)||1;z.shove(s/o,r/o,9)}return n.lives<=0?(n.alive=!1,n.deadT=1.6,De.flash("THE LINE BREAKS",ue.hotred)):De.flash(n.lives===1?"LAST LIFE \u2014 HOLD THE LINE":"HIT \u2014 BLASTER RESET",ue.hotred),!0};z.combo={n:0,t:0,best:0};z.comboHit=()=>{let i=z.combo;return i.n=i.t>0?i.n+1:1,i.t=pp,i.best=Math.max(i.best,i.n),De.combo(i.n),1+Math.min(1.5,(i.n-1)*.08)};z.onKill=(i,e)=>{z.run=Fp(z.run,e||z.H.dashT>0),z.powers&&z.powers.addMeter("kill")};z.onStyle=i=>{z.run={...z.run,score:z.run.score+(i==="dash"?50:10)},i==="dash"&&De.flash("DASHED THE WAVE",ue.cyan)};z.onCrate=()=>{let i=ou(Kt,z.run.pages);z.run=iu(z.run),ru(Kt,i.id),De.showPage(i),ut.sfx.page(),Y0()};function Y0(){De.flash(`BLADE \xD7${au(z.run.pages,z.H.power).toFixed(2)}`,ue.gold)}z.onPickup=(i,e,t)=>{let n=z.H;i==="power"?(n.power=Math.min(Rr,n.power+1),setTimeout(Y0,900),De.flash(n.power===Rr?"POWER MAX":"POWER UP",ue.gold)):(n.owned.includes(i)||n.owned.push(i),n.weapon=i,z.hero.setWeaponColor(Mt[i].col),De.flash(Mt[i].name,Mt[i].col)),ut.sfx.pickup(),Dt.spawn(e,1.1,t,i==="power"?ue.gold:Mt[i].col,16,{spd:4,up:4})};z.onBossDamage=i=>{z.run=Bp(z.run,i),De.bossHp(z.boss.hp,z.boss.max)};z.onBossDead=()=>{ut.sfx.bossDie(),De.flash(z.boss.name+" \u2014 DOWN",ue.gold),z.shake(12),Ao=2.6,De.hideBoss(),z.world.gate.open(),z.level.openGate()};var q0=i=>g0(Dn,z.assets,i)||km(Dn,Ft[i]),rd=Object.keys(Ft),YE=1.5;function qE(){let i=eu("ramparts"),e=gu(Dn,i,bn.ramparts,z.assets,{shadows:Tl==="high"});El=rd.map(q0),ls={level:i,world:e,s:i.start}}function KE(){if(ls){ls.world.dispose();for(let i of El)i.dispose();ls=null,El=[]}}function ZE(i,e){let t=ls.s;El.forEach((s,r)=>{let o=rd[r]===Yt,a=t.x+(r-(rd.length-1)/2)*YE;s.update(i,e,{x:a,z:t.z,fx:Math.sin(e*.4)*.3,fz:1,mv:0,mvx:0,mvz:0,dashing:!1,invuln:0,alive:!0,ward:!1,charge:At==="select"&&o?.5+Math.sin(e*4)*.3:0,firing:!1,parryFlash:0}),s.group.visible=!0});let n=e*.12;wl.set(t.x+Math.sin(n)*9,6.5,t.z+4+Math.cos(n)*5),mn.position.lerp(wl,Math.min(1,i*2)),mn.lookAt(t.x,1.4,t.z),ls.world.update(i,e,t.x,t.z)}function Ro(i,e){KE(),K0(),Kt=i,Yt=e;let t=eu(i),n=gu(Dn,t,bn[i],z.assets,{shadows:Tl==="high"});z.level=t,z.world=n,z.hero=q0(e),z.H=XE(t.start.x,t.start.z),z.foes=A0(Dn,z),z.combat=I0(Dn,z),z.powers=b0(Dn,z,e),z.boss=P0(Dn,z,bn[i].boss),z.run=zp(e,i),z.t=0,Ao=-1,Fr=-1;for(let s of t.foes)z.foes.spawn(s.type,s.x,s.z);for(let s of t.boxes)z.combat.spawnCrate(s);De.setHero(Ft[e]),De.setWorld(bn[i]),De.hideBoss(),De.show(null),De.flash(bn[i].name,bn[i].accent),De.hint(Al.active?hu:nt.touch?"":cu),mn.position.set(z.H.x+Ot.off[0],Ot.off[1],z.H.z+Ot.off[2]),mn.lookAt(z.H.x,1,z.H.z),At="play",kt.clearEdges(),cn.play(i),Ut=null,id=!0}function K0(){z.level&&(z.powers&&(z.powers.dispose(),z.powers=null),z.world.dispose(),z.hero.dispose(),z.foes.clear(),z.combat.clear(),z.boss&&z.boss.dispose(),Dt.clear(),z.level=null,z.boss=null)}function H0(i){let e=su(z.run);Kp(z.run);let t=ii.indexOf(Kt),n=i&&t<ii.length-1?ii[t+1]:null;De.renderEnd(z.run,e,bn[Kt],i,n),De.show("endPop"),At="end",De.hint(""),cn.play(i?"win":"menu")}function $E(i){let e=z.H,t=z.level;z.slowMul=1,z.combat.update(i),kt.update(mn,e.x,e.z,sd(),nt.orbit),WE(i);for(let m of["invuln","dashCd","fireCd","regenDelay","wardBroken","bladeT","bladeWindow","parryFlash"])e[m]>0&&(e[m]-=i);if(e.bladeWindow<=0&&e.chain&&(e.chain=0),!e.alive){e.deadT-=i,e.mv=0,e.deadT<=0&&Fr<0&&(Fr=.01);return}let n=!1;if((kt.pressed("dash")||e.dashQueue>0)&&(Dm(Lm(z.combat.strike))?(e.dashQueue=0,n=!0):e.dashQueue>0?e.dashQueue-=i:e.dashQueue=Pm.buffer),n&&e.dashCd<=0&&e.dashT<=0&&(e.bladeT>0||z.combat.strike)){let m=z.combat.endStrike();m&&!m.hits&&(e.chain=0),Object.assign(e,Nm(e.bladeT,e.bladeWindow,Zh)),e.bladeQueue=0,z.hero.cancelSwing&&z.hero.cancelSwing()}if(n&&e.dashCd<=0&&e.dashT<=0){e.dashT=xp,e.dashCd=Kh,e.invuln=Math.max(e.invuln,_p);let m=Math.hypot(nt.mx,nt.mz);e.ddx=m>.1?nt.mx/m:e.fx,e.ddz=m>.1?nt.mz/m:e.fz,e.ward=!1,ut.sfx.dash(),Dt.ring(e.x,e.z,Ft[Yt].accent,1.8,.3),Dt.spawn(e.x,.4,e.z,Ft[Yt].accent,6,{spd:2,up:1,size:.35})}if(e.dashT>0){e.dashT-=i;let m=e.longDash?3:1;Math.random()<i*40*m&&Dt.spawn(e.x-e.ddx*.4,e.y+.6+Math.random()*.8,e.z-e.ddz*.4,Ft[Yt].accent,e.longDash?3:2,{spd:1,up:.3,size:e.longDash?.55:.4,life:.4,grav:0}),e.dashT<=0&&(e.longDash=!1)}let s=nt.ward&&e.shield>0&&e.wardBroken<=0&&e.dashT<=0&&e.bladeT<=0;s&&!e.ward?(e.ward=!0,e.wardT=0,e.parried=!1,ut.sfx.ward()):s||(e.ward=!1),e.ward?(e.wardT+=i,e.shield-=Sp*i,e.regenDelay=$h,e.shield<=0&&(e.shield=0,e.ward=!1,e.wardBroken=1.6,ut.sfx.shatter(),De.flash("WARD SHATTERED",ue.hotred))):e.regenDelay<=0&&e.shield<Ji&&(e.shield=Math.min(Ji,e.shield+wp*i));let r=ni[(e.bladeN%xo+xo)%xo],o=lm(e.bladeT,r.t),a=Math.hypot(nt.mx,nt.mz),l=Qa*(e.ward?.55:1)*(nt.sprint&&!e.ward?1.55:1)*z.slowMul*o,c,h;if(e.dashT>0){let m=e.longDash?qh*1.15:qh;c=e.ddx*m,h=e.ddz*m}else c=nt.mx*l,h=nt.mz*l;c+=e.vx,h+=e.vz,e.vx*=Math.pow(.02,i),e.vz*=Math.pow(.02,i),kt.pressed("jump")&&(e.onGround?(e.vy=up,e.onGround=!1,ut.beep(420,.12,"sine",.08,820),Dt.ring(e.x,e.z,Ft[Yt].accent,1.4,.25,e.y+.06)):e.airJumps>0&&(e.airJumps--,e.vy=dp,e.flipT=Yh,ut.beep(620,.12,"sine",.08,1200),Dt.spawn(e.x,e.y+.2,e.z,Ft[Yt].accent,12,{spd:3,up:-1,size:.45}))),e.flipT=Math.max(0,(e.flipT||0)-i),e.vy-=fp*i,e.y+=e.vy*i;let u=Cr(t,e.x,e.z,Mn,c*i,h*i,e.y);e.speed=i>0?Math.hypot(u.x-e.x,u.z-e.z)/i:0,e.x=u.x,e.z=u.z,t.solidCell(Math.floor(e.x/2),Math.floor(e.z/2),e.y)?e.safeX!==void 0&&(e.x=e.safeX,e.z=e.safeZ,e.vx=e.vz=0,e.dashT=0,e.longDash=!1):(e.safeX=e.x,e.safeZ=e.z);let d=Up(t,e.x,e.z,e.y);e.y<=d?(!e.onGround&&e.vy<-7&&(z.shake(2),Dt.ring(e.x,e.z,"#c8b8a0",1.6,.3,d+.06)),e.y=d,e.vy=0,e.onGround=!0,e.airJumps=1):e.onGround=!1,e.mv=e.dashT>0?1:Math.min(1,a),e.mvx=e.dashT>0?e.ddx:a>.05?nt.mx/a:0,e.mvz=e.dashT>0?e.ddz:a>.05?nt.mz/a:0,e.mv>.05&&Math.random()<i*8&&e.dashT<=0&&e.onGround&&Dt.spawn(e.x-e.mvx*.3,e.y+.1,e.z-e.mvz*.3,"#8a7560",1,{spd:.6,up:.8,size:.3,life:.4}),e.fx+=(nt.aimX-e.fx)*Math.min(1,i*18),e.fz+=(nt.aimZ-e.fz)*Math.min(1,i*18);let f=Math.hypot(e.fx,e.fz)||1;e.fx/=f,e.fz/=f;let x=nt.fire&&e.bladeT<=0;x?(z.run.parryChain>=3&&kt.pressed("fire")?(z.run=Wp(z.run),z.combat.fire(e,"single",Rr,!0),ut.sfx.charged(),De.flash("GOLD CANNON",ue.gold),z.shake(6),z.boss&&z.boss.alive&&z.boss.awake&&(z.boss.stun=1.6,De.flash("GOLD CANNON \u2014 BOSS STUNNED",ue.gold))):e.fireCd<=0&&(e.fireCd=Mt[e.weapon].cd,z.combat.fire(e,e.weapon,e.power,!1),ut.sfx.shoot(e.weapon),Dt.spawn(e.x+e.fx*1.1,1.05,e.z+e.fz*1.1,Mt[e.weapon].col,2,{spd:1.5,up:.6,size:.3,life:.25})),e.charge=Math.min(ws,e.charge+i),e.charge>=ws&&!e.charged&&(e.charged=!0,ut.sfx.chargeFull()),e.charge>.3&&Math.random()<i*30&&Dt.spawn(e.x+e.fx*.9+(Math.random()-.5),1.05+(Math.random()-.5),e.z+e.fz*.9+(Math.random()-.5),Mt[e.weapon].col,1,{spd:.2,up:.3,size:.3,life:.3,grav:-3})):e.wasFiring&&(e.charged&&(z.hero.playOnce&&z.hero.playOnce("Spellcast_Shoot",1.8),z.combat.fire(e,e.weapon,e.power,!0),ut.sfx.charged(),De.flash(Mp[e.weapon],Mt[e.weapon].col),z.shake(4),Dt.ring(e.x,e.z,Mt[e.weapon].col,2.6,.35)),e.charge=0,e.charged=!1),e.wasFiring=x,kt.pressed("fire"),kt.pressed("blade")?e.bladeQueue=.4:e.bladeQueue>0&&(e.bladeQueue-=i);let p=!!(z.combat.strike&&!z.combat.strike.cutDone);if(e.bladeQueue>0&&e.bladeT<=0&&!p){e.bladeQueue=0;let m=e.bladeWindow>0?(e.bladeN+1)%xo:0,_=ni[m];e.bladeN=m,e.bladeT=_.t,e.bladeWindow=Zh+_.t;let v=e.dashT>0||e.dashCd>Kh-.12,y=z.foes.nearestInArc?z.foes.nearestInArc(e,_.arc,_.reach+2.2):null,w=y?y.d-_.reach*.75:1/0,E=am(w,_.launch?1.5:.9,!!y),S=v?Ep:Math.min(4.5,E/Math.max(.12,_.t));e.vx+=e.fx*S,e.vz+=e.fz*S,_.preFreeze&&z.hitstop(_.preFreeze);let C=z.hero.playBlade(m,_.speed,!_.unarmed,{col:_.col,trailLife:_.launch?.34:.22}),b=z.combat.endStrike();b&&!b.hits&&(e.chain=0);let M=hm(e.chain||0);z.combat.beginStrike(m,v,M,au(z.run.pages,e.power),C),ut.sfx.blade(m)}kt.pressed("swap")&&e.owned.length>1&&(e.weapon=e.owned[(e.owned.indexOf(e.weapon)+1)%e.owned.length],z.hero.setWeaponColor(Mt[e.weapon].col),ut.sfx.ui(),De.flash(Mt[e.weapon].name,Mt[e.weapon].col)),z.powers.update(i,e,m=>kt.pressed(m));let g=z.boss;if(g&&g.alive&&!g.awake){let m=t.roomAt(e.x,e.z),_=t.gateCells[0];m&&m.kind==="boss"&&Math.hypot(e.x-(_[0]+.5)*2,e.z-(_[1]+.5)*2)>3.2&&(g.awake=!0,t.sealGate(),z.world.gate.seal(),De.boss(g.name),De.bossHp(g.hp,g.max),De.flash(g.wake,ue.hotred),ut.sfx.bossWake(),cn.play("boss"),z.run=Gp(z.run),z.combat.clearEnemyShots(),z.shake(8))}}var JE={hilt:new O,tip:new O};function jE(i){let e=z.combat.strike;if(!e)return;let t=!!z.hero.bladeSegment,n=!e.hits,s=z.combat.sweepStrike(i,t?z.hero.bladeSegment(JE):null,!t);if(!s||(z.powers.addMeter("bladeHit",s),!n))return;let r=z.H,o=e.C;r.chain=(r.chain||0)+1,z.hitstop(e.react.hitstop),o.launch?(ut.sfx.berserkHit(),De.flash(o.name,o.col)):ut.sfx.bladeHit(e.mom),z.shake(o.shake*e.mom),r.chain>=2&&De.combo(r.chain)}var V0=performance.now();function Z0(i){requestAnimationFrame(Z0);let e=Math.min(.05,(i-V0)/1e3);V0=i,$0(e)}function $0(i){let e=i;if(Sl>0&&(Sl-=i,e=i*.08),z.t+=e,At==="menu"||At==="select"||At==="world"||At==="codex"){ls&&ZE(e,z.t),Dt.update(e),Qu();return}if(At==="play"){if(kt.pressed("pause")){At="pause",De.show("pausePop"),cn.duck(!0);return}if(kt.pressed("mute")&&Co(rs(Xt,{musicOn:!Xt.musicOn})),kt.pressed("nexttrack")&&cn.next(),z.run=Vp(z.run,e),z.combo.t>0&&(z.combo.t-=e,z.combo.t<=0&&(z.combo.n=0,De.combo(0))),$E(e),z.foes.update(e),z.boss&&z.boss.update(e),z.world.update(e,z.t,z.H.x,z.H.z),Dt.update(e),z.hero.update(e,z.t,{x:z.H.x,y:z.H.y,air:!z.H.onGround,flip:z.H.flipT>0&&!z.H.onGround?1-z.H.flipT/Yh:0,longDash:!!z.H.longDash,sprint:nt.sprint,z:z.H.z,fx:z.H.fx,fz:z.H.fz,mv:z.H.mv,mvx:z.H.mvx,mvz:z.H.mvz,speed:z.H.speed||0,dashing:z.H.dashT>0,invuln:z.H.invuln,alive:z.H.alive,ward:z.H.ward,charge:z.H.charge/ws,firing:nt.fire&&z.H.bladeT<=0,parryFlash:z.H.parryFlash}),jE(e),De.update(e,z.H,z.run,bn[Kt]),Ao>0&&(Ao-=e,Ao<=0)){let m=ou(Kt,z.run.pages);z.run=iu(z.run),ru(Kt,m.id),De.showPage(m),H0(!0);return}if(Fr>0&&(Fr-=e,Fr<=0)){H0(!1);return}}if(!z.H){Qu();return}let t=z.H;zr=Math.max(0,zr-e*22);let n=z.level&&(()=>{let m=z.level.roomAt(t.x,t.z);return m&&m.kind==="boss"})();if(To+=((n?Ot.bossZoom:1)-To)*Math.min(1,e*2),nt.orbit&&(Lt.yaw-=nt.orbitDX*.006,Lt.pitch=Math.max(.25,Math.min(1.9,Lt.pitch-nt.orbitDY*.004))),nt.orbitDX=0,nt.orbitDY=0,nt.zoom&&(Lt.dist=Math.max(.35,Math.min(1.8,Lt.dist*(1+nt.zoom*.08))),nt.zoom=0),kt.pressed("camreset")&&(Lt.yaw=0,Lt.pitch=1,Lt.dist=1,De.flash("CAMERA RESET",ue.cyan)),id){id=!1,wo=0,os=1,Lt.yaw=0,Ls=t.fx*1.2,Ds=t.fz*1.2,vl=t.x+Ls,Ml=Ot.lookHeight+t.y*.8,bl=t.z+Ds;let m=Ot.off[2]*Lt.dist,_=Ot.off[1]*Lt.dist*Lt.pitch;mn.position.set(t.x+Ot.off[0]+Ls,t.y*.75+_,t.z+m+Ds)}let r=!nt.orbit&&yl<=0?Ut&&z.level?Cm(Lt.yaw,Rm(t.x,t.z,Ut.x,Ut.z,sd()-Lt.yaw),In.maxYawRate):Qp(t.mvx,t.mvz,sd(),t.mv):0;wo=Qi(wo,r,In.yawAccel,e),nt.orbit&&(wo=0),Lt.yaw+=wo*e,nt.orbit?yl=1.6:yl>0&&(yl-=e);let o=nt.orbit?0:1.2;Ls=Qi(Ls,t.fx*o,In.leadFollow,e),Ds=Qi(Ds,t.fz*o,In.leadFollow,e);let a=Ot.off[0],l=Ot.off[2]*To*Lt.dist,c=Ot.off[1]*To*Lt.dist*Lt.pitch,h=Math.sin(Lt.yaw),u=Math.cos(Lt.yaw),d=u*a+h*l,f=-h*a+u*l,x=1;if(z.level&&!nt.orbit){let m=t.y+1.2;for(;x>.3&&Ts(z.level,t.x,t.z,t.x+d*x,t.z+f*x,m);)x-=.04;Math.hypot(d,f)*x<Ot.minDist&&(x=Math.max(x,Ot.minDist/(Math.hypot(d,f)||1)))}os=Qi(os,x,x<os?In.pullInRate:In.pullOutRate,e);let p=(1-os)*1.1;wl.set(t.x+d*os+Ls,t.y*.75+c*(.55+.45*os)+p,t.z+f*os+Ds);let g=1-Math.exp(-(nt.orbit?14:In.follow)*e);mn.position.lerp(wl,g),vl=Qi(vl,t.x+Ls,In.lookFollow,e),Ml=Qi(Ml,Ot.lookHeight+t.y*.8,In.lookFollow,e),bl=Qi(bl,t.z+Ds,In.lookFollow,e),k0.set(vl+(Math.random()-.5)*zr*.08,Ml+(Math.random()-.5)*zr*.08,bl),mn.lookAt(k0),Qu()}function od(){K0(),ls||qE(),At="menu",De.show("menu"),De.hideBoss(),cn.moment&&cn.play("menu")}yt("start").onclick=()=>{ut.init(),ut.sfx.ui(),cn.play("menu"),At="select",De.renderSelect(Yt),De.show("select")};yt("codexBtn").onclick=()=>{ut.init(),De.renderCodex(),At="codex",De.show("codexPop")};yt("cxBack").onclick=()=>{At="menu",De.show("menu")};document.querySelectorAll(".selcard.hero[data-hero]").forEach(i=>{i.onclick=()=>{Yt=i.dataset.hero,De.renderSelect(Yt),ut.sfx.ui()}});yt("confirm").onclick=()=>{At="world",De.renderWorlds(Kt,X0()),De.show("worldSel")};yt("wrow").onclick=i=>{let e=i.target.closest(".wcard");!e||e.classList.contains("locked")||(Kt=e.dataset.w,De.renderWorlds(Kt,X0()),ut.sfx.ui())};yt("wconfirm").onclick=()=>{ut.init(),Ro(Kt,Yt)};yt("backSel").onclick=()=>{At="select",De.show("select")};yt("resume").onclick=()=>{At="play",De.show(null),kt.clearEdges(),cn.duck(!1)};yt("quit").onclick=()=>od();yt("again").onclick=()=>Ro(Kt,Yt);yt("nextWorld").onclick=()=>{let i=ii.indexOf(Kt);Ro(ii[Math.min(i+1,ii.length-1)],Yt)};yt("toMenu").onclick=()=>od();yt("pauseBtn").onclick=()=>{At==="play"&&(At="pause",De.show("pausePop"),cn.duck(!0))};yt("muteBtn").onclick=()=>Co(rs(Xt,{musicOn:!Xt.musicOn}));yt("sfxBtn").onclick=()=>Co(rs(Xt,{sfxOn:!Xt.sfxOn}));window.addEventListener("keydown",i=>{i.code==="KeyP"&&At==="pause"&&(At="play",De.show(null),kt.clearEdges(),cn.duck(!1)),i.code==="KeyN"&&At!=="play"&&cn.next()});window.__unerased={G:z,ready:!1,get mode(){return At},step:i=>$0(i),start:(i,e)=>Ro(i||Kt,e||Yt),warp:i=>{Ro(i||Kt,Yt);let e=z.level.gateCells[0];z.H.x=(e[0]+.5)*2,z.H.z=(e[1]+.5)*2+3,mn.position.set(z.H.x,Ot.off[1],z.H.z+Ot.off[2])},toBoss:()=>{let i=z.level.gateCells[0];z.H.x=(i[0]+.5)*2,z.H.z=(i[1]+.5)*2-6},snapshot:()=>({mode:At,world:Kt,hero:Yt,H:z.H&&{x:z.H.x,y:z.H.y,onGround:z.H.onGround,z:z.H.z,lives:z.H.lives,weapon:z.H.weapon,alive:z.H.alive},foes:z.foes&&z.foes.aliveCount(),boss:z.boss&&{awake:z.boss.awake,hp:z.boss.hp,alive:z.boss.alive},run:z.run,fx:Dt.count}),press:i=>kt.press(i),IN:nt,music:cn,get pad(){return Al.state},get lock(){return Ut},get viewYaw(){return Lt.yaw},combo:()=>z.combo,fillMeter:()=>{z.powers&&(z.powers.meter=100)},setMeter:i=>{z.powers&&(z.powers.meter=i)}};var J0=yt("start"),td=yt("loadLine");J0.disabled=!0;f0(i=>{td.textContent=`SUMMONING THE WARRIORS \xB7 ${Math.round(i*100)}%`}).then(i=>{z.assets=i,td.textContent=i.missing.length?"READY \xB7 missing: "+i.missing.join(", "):""}).catch(i=>{z.assets=null,td.textContent="READY (classic models) \xB7 "+i.message}).finally(()=>{J0.disabled=!1,od(),window.__unerased.ready=!0});requestAnimationFrame(Z0);})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
