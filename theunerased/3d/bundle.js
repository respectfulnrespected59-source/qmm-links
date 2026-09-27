(()=>{var yh="170";var H0=0,ld=1,V0=2;var Cf=1,vh=2,mi=3,Jn=0,Qt=1,gt=2,$n=0,ir=1,ht=2,cd=3,hd=4,G0=5,gs=100,W0=101,X0=102,Y0=103,q0=104,K0=200,Z0=201,$0=202,J0=203,rc=204,oc=205,j0=206,Q0=207,eg=208,tg=209,ng=210,ig=211,sg=212,rg=213,og=214,ac=0,lc=1,cc=2,ar=3,hc=4,uc=5,dc=6,fc=7,If=0,ag=1,lg=2,Fi=0,Mh=1,bh=2,Eh=3,fo=4,cg=5,Sh=6,wh=7,ud="attached",hg="detached",Pf=300,lr=301,cr=302,pc=303,mc=304,Ha=306,dn=1e3,gi=1001,io=1002,en=1003,Th=1004;var Qs=1005;var un=1006,Qr=1007;var wn=1008;var yi=1009,Lf=1010,Df=1011,so=1012,Ah=1013,_s=1014,Bn=1015,Vn=1016,Rh=1017,Ch=1018,hr=1020,Nf=35902,Of=1021,Uf=1022,Tn=1023,zf=1024,Ff=1025,sr=1026,ur=1027,Ih=1028,Ph=1029,kf=1030,Lh=1031;var Dh=1033,aa=33776,la=33777,ca=33778,ha=33779,gc=35840,xc=35841,_c=35842,yc=35843,vc=36196,Mc=37492,bc=37496,Ec=37808,Sc=37809,wc=37810,Tc=37811,Ac=37812,Rc=37813,Cc=37814,Ic=37815,Pc=37816,Lc=37817,Dc=37818,Nc=37819,Oc=37820,Uc=37821,ua=36492,zc=36494,Fc=36495,Bf=36283,kc=36284,Bc=36285,Hc=36286,Nh=2200,Oh=2201,ug=2202,dr=2300,fr=2301,Tl=2302,er=2400,tr=2401,da=2402,Uh=2500,dg=2501,Hf=0,Va=1,po=2,fg=3200,pg=3201;var Vf=0,mg=1,Oi="",mt="srgb",nn="srgb-linear",Ga="linear",pt="srgb";var Ns=7680;var dd=519,gg=512,xg=513,_g=514,Gf=515,yg=516,vg=517,Mg=518,bg=519,Vc=35044;var fd="300 es",xi=2e3,fa=2001,vi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},$t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],pd=1234567,eo=Math.PI/180,pr=180/Math.PI;function Hn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return($t[i&255]+$t[i>>8&255]+$t[i>>16&255]+$t[i>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[t&63|128]+$t[t>>8&255]+"-"+$t[t>>16&255]+$t[t>>24&255]+$t[n&255]+$t[n>>8&255]+$t[n>>16&255]+$t[n>>24&255]).toLowerCase()}function jt(i,e,t){return Math.max(e,Math.min(t,i))}function zh(i,e){return(i%e+e)%e}function Eg(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Sg(i,e,t){return i!==e?(t-i)/(e-i):0}function to(i,e,t){return(1-t)*i+t*e}function wg(i,e,t,n){return to(i,e,1-Math.exp(-t*n))}function Tg(i,e=1){return e-Math.abs(zh(i,e*2)-e)}function Ag(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Rg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Cg(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Ig(i,e){return i+Math.random()*(e-i)}function Pg(i){return i*(.5-Math.random())}function Lg(i){i!==void 0&&(pd=i);let e=pd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Dg(i){return i*eo}function Ng(i){return i*pr}function Og(i){return(i&i-1)===0&&i!==0}function Ug(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function zg(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Fg(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),x=o((n-e)/2);switch(s){case"XYX":i.set(a*h,l*u,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*x,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*x,a*c);break;case"ZYZ":i.set(l*x,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function kn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function _t(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Wf={DEG2RAD:eo,RAD2DEG:pr,generateUUID:Hn,clamp:jt,euclideanModulo:zh,mapLinear:Eg,inverseLerp:Sg,lerp:to,damp:wg,pingpong:Tg,smoothstep:Ag,smootherstep:Rg,randInt:Cg,randFloat:Ig,randFloatSpread:Pg,seededRandom:Lg,degToRad:Dg,radToDeg:Ng,isPowerOfTwo:Og,ceilPowerOfTwo:Ug,floorPowerOfTwo:zg,setQuaternionFromProperEuler:Fg,normalize:_t,denormalize:kn},Te=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(jt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ze=class i{constructor(e,t,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],x=n[8],m=s[0],g=s[3],p=s[6],_=s[1],v=s[4],y=s[7],S=s[2],E=s[5],w=s[8];return r[0]=o*m+a*_+l*S,r[3]=o*g+a*v+l*E,r[6]=o*p+a*y+l*w,r[1]=c*m+h*_+u*S,r[4]=c*g+h*v+u*E,r[7]=c*p+h*y+u*w,r[2]=d*m+f*_+x*S,r[5]=d*g+f*v+x*E,r[8]=d*p+f*y+x*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,x=t*u+n*d+s*f;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/x;return e[0]=u*m,e[1]=(s*c-h*n)*m,e[2]=(a*n-s*o)*m,e[3]=d*m,e[4]=(h*t-s*l)*m,e[5]=(s*r-a*t)*m,e[6]=f*m,e[7]=(n*l-c*t)*m,e[8]=(o*t-n*r)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Al.makeScale(e,t)),this}rotate(e){return this.premultiply(Al.makeRotation(-e)),this}translate(e,t){return this.premultiply(Al.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Al=new Ze;function Xf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ro(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function kg(){let i=ro("canvas");return i.style.display="block",i}var md={};function Jr(i){i in md||(md[i]=!0,console.warn(i))}function Bg(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Hg(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Vg(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var Qe={enabled:!0,workingColorSpace:nn,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===pt&&(i.r=_i(i.r),i.g=_i(i.g),i.b=_i(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===pt&&(i.r=rr(i.r),i.g=rr(i.g),i.b=rr(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Oi?Ga:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function _i(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function rr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var gd=[.64,.33,.3,.6,.15,.06],xd=[.2126,.7152,.0722],_d=[.3127,.329],yd=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vd=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Qe.define({[nn]:{primaries:gd,whitePoint:_d,transfer:Ga,toXYZ:yd,fromXYZ:vd,luminanceCoefficients:xd,workingColorSpaceConfig:{unpackColorSpace:mt},outputColorSpaceConfig:{drawingBufferColorSpace:mt}},[mt]:{primaries:gd,whitePoint:_d,transfer:pt,toXYZ:yd,fromXYZ:vd,luminanceCoefficients:xd,outputColorSpaceConfig:{drawingBufferColorSpace:mt}}});var Os,Gc=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Os===void 0&&(Os=ro("canvas")),Os.width=e.width,Os.height=e.height;let n=Os.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Os}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ro("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=_i(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(_i(t[n]/255)*255):t[n]=_i(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Gg=0,pa=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gg++}),this.uuid=Hn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Rl(s[o].image)):r.push(Rl(s[o]))}else r=Rl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Rl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Gc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Wg=0,Wt=class i extends vi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=gi,s=gi,r=un,o=wn,a=Tn,l=yi,c=i.DEFAULT_ANISOTROPY,h=Oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wg++}),this.uuid=Hn(),this.name="",this.source=new pa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Te(0,0),this.repeat=new Te(1,1),this.center=new Te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Pf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case dn:e.x=e.x-Math.floor(e.x);break;case gi:e.x=e.x<0?0:1;break;case io:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case dn:e.y=e.y-Math.floor(e.y);break;case gi:e.y=e.y<0?0:1;break;case io:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Wt.DEFAULT_IMAGE=null;Wt.DEFAULT_MAPPING=Pf;Wt.DEFAULT_ANISOTROPY=1;var ct=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],x=l[9],m=l[2],g=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-m)<.01&&Math.abs(x-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+m)<.1&&Math.abs(x+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,y=(f+1)/2,S=(p+1)/2,E=(h+d)/4,w=(u+m)/4,I=(x+g)/4;return v>y&&v>S?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=E/n,r=w/n):y>S?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=E/s,r=I/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=w/r,s=I/r),this.set(n,s,r,t),this}let _=Math.sqrt((g-x)*(g-x)+(u-m)*(u-m)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(g-x)/_,this.y=(u-m)/_,this.z=(d-h)/_,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Wc=class extends vi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ct(0,0,e,t),this.scissorTest=!1,this.viewport=new ct(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Wt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new pa(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},on=class extends Wc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ma=class extends Wt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Xc=class extends Wt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var At=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],f=r[o+1],x=r[o+2],m=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=x,e[t+3]=m;return}if(u!==m||l!==d||c!==f||h!==x){let g=1-a,p=l*d+c*f+h*x+u*m,_=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){let S=Math.sqrt(v),E=Math.atan2(S,p*_);g=Math.sin(g*E)/S,a=Math.sin(a*E)/S}let y=a*_;if(l=l*g+d*y,c=c*g+f*y,h=h*g+x*y,u=u*g+m*y,g===1-a){let S=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=S,c*=S,h*=S,u*=S}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],x=r[o+3];return e[t]=a*x+h*u+l*f-c*d,e[t+1]=l*x+h*d+c*u-a*f,e[t+2]=c*x+h*f+a*d-l*u,e[t+3]=h*x-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),f=l(s/2),x=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*x,this._y=c*f*u-d*h*x,this._z=c*h*x+d*f*u,this._w=c*h*u-d*f*x;break;case"YXZ":this._x=d*h*u+c*f*x,this._y=c*f*u-d*h*x,this._z=c*h*x-d*f*u,this._w=c*h*u+d*f*x;break;case"ZXY":this._x=d*h*u-c*f*x,this._y=c*f*u+d*h*x,this._z=c*h*x+d*f*u,this._w=c*h*u-d*f*x;break;case"ZYX":this._x=d*h*u-c*f*x,this._y=c*f*u+d*h*x,this._z=c*h*x-d*f*u,this._w=c*h*u+d*f*x;break;case"YZX":this._x=d*h*u+c*f*x,this._y=c*f*u+d*h*x,this._z=c*h*x-d*f*u,this._w=c*h*u-d*f*x;break;case"XZY":this._x=d*h*u-c*f*x,this._y=c*f*u-d*h*x,this._z=c*h*x+d*f*u,this._w=c*h*u+d*f*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(jt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},O=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Md.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Md.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Cl.copy(this).projectOnVector(e),this.sub(Cl)}reflect(e){return this.sub(Cl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(jt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Cl=new O,Md=new At,qt=class{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(On.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(On.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=On.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,On):On.fromBufferAttribute(r,o),On.applyMatrix4(e.matrixWorld),this.expandByPoint(On);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Po.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Po.copy(n.boundingBox)),Po.applyMatrix4(e.matrixWorld),this.union(Po)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,On),On.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Br),Lo.subVectors(this.max,Br),Us.subVectors(e.a,Br),zs.subVectors(e.b,Br),Fs.subVectors(e.c,Br),Ci.subVectors(zs,Us),Ii.subVectors(Fs,zs),cs.subVectors(Us,Fs);let t=[0,-Ci.z,Ci.y,0,-Ii.z,Ii.y,0,-cs.z,cs.y,Ci.z,0,-Ci.x,Ii.z,0,-Ii.x,cs.z,0,-cs.x,-Ci.y,Ci.x,0,-Ii.y,Ii.x,0,-cs.y,cs.x,0];return!Il(t,Us,zs,Fs,Lo)||(t=[1,0,0,0,1,0,0,0,1],!Il(t,Us,zs,Fs,Lo))?!1:(Do.crossVectors(Ci,Ii),t=[Do.x,Do.y,Do.z],Il(t,Us,zs,Fs,Lo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,On).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(On).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},ci=[new O,new O,new O,new O,new O,new O,new O,new O],On=new O,Po=new qt,Us=new O,zs=new O,Fs=new O,Ci=new O,Ii=new O,cs=new O,Br=new O,Lo=new O,Do=new O,hs=new O;function Il(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){hs.fromArray(i,r);let a=s.x*Math.abs(hs.x)+s.y*Math.abs(hs.y)+s.z*Math.abs(hs.z),l=e.dot(hs),c=t.dot(hs),h=n.dot(hs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Xg=new qt,Hr=new O,Pl=new O,an=class{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Xg.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Hr.subVectors(e,this.center);let t=Hr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Hr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Pl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Hr.copy(e.center).add(Pl)),this.expandByPoint(Hr.copy(e.center).sub(Pl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},hi=new O,Ll=new O,No=new O,Pi=new O,Dl=new O,Oo=new O,Nl=new O,ys=class{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=hi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(hi.copy(this.origin).addScaledVector(this.direction,t),hi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ll.copy(e).add(t).multiplyScalar(.5),No.copy(t).sub(e).normalize(),Pi.copy(this.origin).sub(Ll);let r=e.distanceTo(t)*.5,o=-this.direction.dot(No),a=Pi.dot(this.direction),l=-Pi.dot(No),c=Pi.lengthSq(),h=Math.abs(1-o*o),u,d,f,x;if(h>0)if(u=o*l-a,d=o*a-l,x=r*h,u>=0)if(d>=-x)if(d<=x){let m=1/h;u*=m,d*=m,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-x?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=x?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ll).addScaledVector(No,d),f}intersectSphere(e,t){hi.subVectors(e.center,this.origin);let n=hi.dot(this.direction),s=hi.dot(hi)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,hi)!==null}intersectTriangle(e,t,n,s,r){Dl.subVectors(t,e),Oo.subVectors(n,e),Nl.crossVectors(Dl,Oo);let o=this.direction.dot(Nl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Pi.subVectors(this.origin,e);let l=a*this.direction.dot(Oo.crossVectors(Pi,Oo));if(l<0)return null;let c=a*this.direction.dot(Dl.cross(Pi));if(c<0||l+c>o)return null;let h=-a*Pi.dot(Nl);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ge=class i{constructor(e,t,n,s,r,o,a,l,c,h,u,d,f,x,m,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,u,d,f,x,m,g)}set(e,t,n,s,r,o,a,l,c,h,u,d,f,x,m,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=x,p[11]=m,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/ks.setFromMatrixColumn(e,0).length(),r=1/ks.setFromMatrixColumn(e,1).length(),o=1/ks.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,f=o*u,x=a*h,m=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+x*c,t[5]=d-m*c,t[9]=-a*l,t[2]=m-d*c,t[6]=x+f*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,x=c*h,m=c*u;t[0]=d+m*a,t[4]=x*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-x,t[6]=m+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,x=c*h,m=c*u;t[0]=d-m*a,t[4]=-o*u,t[8]=x+f*a,t[1]=f+x*a,t[5]=o*h,t[9]=m-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*h,f=o*u,x=a*h,m=a*u;t[0]=l*h,t[4]=x*c-f,t[8]=d*c+m,t[1]=l*u,t[5]=m*c+d,t[9]=f*c-x,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,f=o*c,x=a*l,m=a*c;t[0]=l*h,t[4]=m-d*u,t[8]=x*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+x,t[10]=d-m*u}else if(e.order==="XZY"){let d=o*l,f=o*c,x=a*l,m=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+m,t[5]=o*h,t[9]=f*u-x,t[2]=x*u-f,t[6]=a*h,t[10]=m*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Yg,e,qg)}lookAt(e,t,n){let s=this.elements;return xn.subVectors(e,t),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),Li.crossVectors(n,xn),Li.lengthSq()===0&&(Math.abs(n.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),Li.crossVectors(n,xn)),Li.normalize(),Uo.crossVectors(xn,Li),s[0]=Li.x,s[4]=Uo.x,s[8]=xn.x,s[1]=Li.y,s[5]=Uo.y,s[9]=xn.y,s[2]=Li.z,s[6]=Uo.z,s[10]=xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],x=n[2],m=n[6],g=n[10],p=n[14],_=n[3],v=n[7],y=n[11],S=n[15],E=s[0],w=s[4],I=s[8],b=s[12],M=s[1],L=s[5],k=s[9],F=s[13],H=s[2],T=s[6],C=s[10],V=s[14],z=s[3],D=s[7],B=s[11],J=s[15];return r[0]=o*E+a*M+l*H+c*z,r[4]=o*w+a*L+l*T+c*D,r[8]=o*I+a*k+l*C+c*B,r[12]=o*b+a*F+l*V+c*J,r[1]=h*E+u*M+d*H+f*z,r[5]=h*w+u*L+d*T+f*D,r[9]=h*I+u*k+d*C+f*B,r[13]=h*b+u*F+d*V+f*J,r[2]=x*E+m*M+g*H+p*z,r[6]=x*w+m*L+g*T+p*D,r[10]=x*I+m*k+g*C+p*B,r[14]=x*b+m*F+g*V+p*J,r[3]=_*E+v*M+y*H+S*z,r[7]=_*w+v*L+y*T+S*D,r[11]=_*I+v*k+y*C+S*B,r[15]=_*b+v*F+y*V+S*J,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],x=e[3],m=e[7],g=e[11],p=e[15];return x*(+r*l*u-s*c*u-r*a*d+n*c*d+s*a*f-n*l*f)+m*(+t*l*f-t*c*d+r*o*d-s*o*f+s*c*h-r*l*h)+g*(+t*c*u-t*a*f-r*o*u+n*o*f+r*a*h-n*c*h)+p*(-s*a*h-t*l*u+t*a*d+s*o*u-n*o*d+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],x=e[12],m=e[13],g=e[14],p=e[15],_=u*g*c-m*d*c+m*l*f-a*g*f-u*l*p+a*d*p,v=x*d*c-h*g*c-x*l*f+o*g*f+h*l*p-o*d*p,y=h*m*c-x*u*c+x*a*f-o*m*f-h*a*p+o*u*p,S=x*u*l-h*m*l-x*a*d+o*m*d+h*a*g-o*u*g,E=t*_+n*v+s*y+r*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/E;return e[0]=_*w,e[1]=(m*d*r-u*g*r-m*s*f+n*g*f+u*s*p-n*d*p)*w,e[2]=(a*g*r-m*l*r+m*s*c-n*g*c-a*s*p+n*l*p)*w,e[3]=(u*l*r-a*d*r-u*s*c+n*d*c+a*s*f-n*l*f)*w,e[4]=v*w,e[5]=(h*g*r-x*d*r+x*s*f-t*g*f-h*s*p+t*d*p)*w,e[6]=(x*l*r-o*g*r-x*s*c+t*g*c+o*s*p-t*l*p)*w,e[7]=(o*d*r-h*l*r+h*s*c-t*d*c-o*s*f+t*l*f)*w,e[8]=y*w,e[9]=(x*u*r-h*m*r-x*n*f+t*m*f+h*n*p-t*u*p)*w,e[10]=(o*m*r-x*a*r+x*n*c-t*m*c-o*n*p+t*a*p)*w,e[11]=(h*a*r-o*u*r-h*n*c+t*u*c+o*n*f-t*a*f)*w,e[12]=S*w,e[13]=(h*m*s-x*u*s+x*n*d-t*m*d-h*n*g+t*u*g)*w,e[14]=(x*a*s-o*m*s-x*n*l+t*m*l+o*n*g-t*a*g)*w,e[15]=(o*u*s-h*a*s+h*n*l-t*u*l-o*n*d+t*a*d)*w,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,x=r*u,m=o*h,g=o*u,p=a*u,_=l*c,v=l*h,y=l*u,S=n.x,E=n.y,w=n.z;return s[0]=(1-(m+p))*S,s[1]=(f+y)*S,s[2]=(x-v)*S,s[3]=0,s[4]=(f-y)*E,s[5]=(1-(d+p))*E,s[6]=(g+_)*E,s[7]=0,s[8]=(x+v)*w,s[9]=(g-_)*w,s[10]=(1-(d+m))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=ks.set(s[0],s[1],s[2]).length(),o=ks.set(s[4],s[5],s[6]).length(),a=ks.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Un.copy(this);let c=1/r,h=1/o,u=1/a;return Un.elements[0]*=c,Un.elements[1]*=c,Un.elements[2]*=c,Un.elements[4]*=h,Un.elements[5]*=h,Un.elements[6]*=h,Un.elements[8]*=u,Un.elements[9]*=u,Un.elements[10]*=u,t.setFromRotationMatrix(Un),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=xi){let l=this.elements,c=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s),f,x;if(a===xi)f=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===fa)f=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=xi){let l=this.elements,c=1/(t-e),h=1/(n-s),u=1/(o-r),d=(t+e)*c,f=(n+s)*h,x,m;if(a===xi)x=(o+r)*u,m=-2*u;else if(a===fa)x=r*u,m=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=m,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ks=new O,Un=new Ge,Yg=new O(0,0,0),qg=new O(1,1,1),Li=new O,Uo=new O,xn=new O,bd=new Ge,Ed=new At,jn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(jt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-jt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return bd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ed.setFromEuler(this),this.setFromQuaternion(Ed,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};jn.DEFAULT_ORDER="XYZ";var oo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Kg=0,Sd=new O,Bs=new At,ui=new Ge,zo=new O,Vr=new O,Zg=new O,$g=new At,wd=new O(1,0,0),Td=new O(0,1,0),Ad=new O(0,0,1),Rd={type:"added"},Jg={type:"removed"},Hs={type:"childadded",child:null},Ol={type:"childremoved",child:null},Rt=class i extends vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kg++}),this.uuid=Hn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new O,t=new jn,n=new At,s=new O(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ge},normalMatrix:{value:new Ze}}),this.matrix=new Ge,this.matrixWorld=new Ge,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new oo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Bs.setFromAxisAngle(e,t),this.quaternion.multiply(Bs),this}rotateOnWorldAxis(e,t){return Bs.setFromAxisAngle(e,t),this.quaternion.premultiply(Bs),this}rotateX(e){return this.rotateOnAxis(wd,e)}rotateY(e){return this.rotateOnAxis(Td,e)}rotateZ(e){return this.rotateOnAxis(Ad,e)}translateOnAxis(e,t){return Sd.copy(e).applyQuaternion(this.quaternion),this.position.add(Sd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(wd,e)}translateY(e){return this.translateOnAxis(Td,e)}translateZ(e){return this.translateOnAxis(Ad,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ui.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?zo.copy(e):zo.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Vr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ui.lookAt(Vr,zo,this.up):ui.lookAt(zo,Vr,this.up),this.quaternion.setFromRotationMatrix(ui),s&&(ui.extractRotation(s.matrixWorld),Bs.setFromRotationMatrix(ui),this.quaternion.premultiply(Bs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Rd),Hs.child=e,this.dispatchEvent(Hs),Hs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Jg),Ol.child=e,this.dispatchEvent(Ol),Ol.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Rd),Hs.child=e,this.dispatchEvent(Hs),Hs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vr,e,Zg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vr,$g,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),x=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),x.length>0&&(n.nodes=x)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Rt.DEFAULT_UP=new O(0,1,0);Rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var zn=new O,di=new O,Ul=new O,fi=new O,Vs=new O,Gs=new O,Cd=new O,zl=new O,Fl=new O,kl=new O,Bl=new ct,Hl=new ct,Vl=new ct,Ui=class i{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),zn.subVectors(e,t),s.cross(zn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){zn.subVectors(s,t),di.subVectors(n,t),Ul.subVectors(e,t);let o=zn.dot(zn),a=zn.dot(di),l=zn.dot(Ul),c=di.dot(di),h=di.dot(Ul),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,x=(o*h-a*l)*d;return r.set(1-f-x,x,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,fi)===null?!1:fi.x>=0&&fi.y>=0&&fi.x+fi.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,fi.x),l.addScaledVector(o,fi.y),l.addScaledVector(a,fi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return Bl.setScalar(0),Hl.setScalar(0),Vl.setScalar(0),Bl.fromBufferAttribute(e,t),Hl.fromBufferAttribute(e,n),Vl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Bl,r.x),o.addScaledVector(Hl,r.y),o.addScaledVector(Vl,r.z),o}static isFrontFacing(e,t,n,s){return zn.subVectors(n,t),di.subVectors(e,t),zn.cross(di).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zn.subVectors(this.c,this.b),di.subVectors(this.a,this.b),zn.cross(di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Vs.subVectors(s,n),Gs.subVectors(r,n),zl.subVectors(e,n);let l=Vs.dot(zl),c=Gs.dot(zl);if(l<=0&&c<=0)return t.copy(n);Fl.subVectors(e,s);let h=Vs.dot(Fl),u=Gs.dot(Fl);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Vs,o);kl.subVectors(e,r);let f=Vs.dot(kl),x=Gs.dot(kl);if(x>=0&&f<=x)return t.copy(r);let m=f*c-l*x;if(m<=0&&c>=0&&x<=0)return a=c/(c-x),t.copy(n).addScaledVector(Gs,a);let g=h*x-f*u;if(g<=0&&u-h>=0&&f-x>=0)return Cd.subVectors(r,s),a=(u-h)/(u-h+(f-x)),t.copy(s).addScaledVector(Cd,a);let p=1/(g+m+d);return o=m*p,a=d*p,t.copy(n).addScaledVector(Vs,o).addScaledVector(Gs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Yf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Di={h:0,s:0,l:0},Fo={h:0,s:0,l:0};function Gl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Se=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Qe.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Qe.workingColorSpace){if(e=zh(e,1),t=jt(t,0,1),n=jt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Gl(o,r,e+1/3),this.g=Gl(o,r,e),this.b=Gl(o,r,e-1/3)}return Qe.toWorkingColorSpace(this,s),this}setStyle(e,t=mt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=mt){let n=Yf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_i(e.r),this.g=_i(e.g),this.b=_i(e.b),this}copyLinearToSRGB(e){return this.r=rr(e.r),this.g=rr(e.g),this.b=rr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mt){return Qe.fromWorkingColorSpace(Jt.copy(this),e),Math.round(jt(Jt.r*255,0,255))*65536+Math.round(jt(Jt.g*255,0,255))*256+Math.round(jt(Jt.b*255,0,255))}getHexString(e=mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.fromWorkingColorSpace(Jt.copy(this),t);let n=Jt.r,s=Jt.g,r=Jt.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(Jt.copy(this),t),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=mt){Qe.fromWorkingColorSpace(Jt.copy(this),e);let t=Jt.r,n=Jt.g,s=Jt.b;return e!==mt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Di),this.setHSL(Di.h+e,Di.s+t,Di.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Di),e.getHSL(Fo);let n=to(Di.h,Fo.h,t),s=to(Di.s,Fo.s,t),r=to(Di.l,Fo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Jt=new Se;Se.NAMES=Yf;var jg=0,fn=class extends vi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jg++}),this.uuid=Hn(),this.name="",this.blending=ir,this.side=Jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rc,this.blendDst=oc,this.blendEquation=gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Se(0,0,0),this.blendAlpha=0,this.depthFunc=ar,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ns,this.stencilZFail=Ns,this.stencilZPass=Ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ir&&(n.blending=this.blending),this.side!==Jn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==rc&&(n.blendSrc=this.blendSrc),this.blendDst!==oc&&(n.blendDst=this.blendDst),this.blendEquation!==gs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ar&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==dd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ns&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ns&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ns&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},We=class extends fn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.combine=If,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var zt=new O,ko=new Te,et=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Vc,this.updateRanges=[],this.gpuType=Bn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ko.fromBufferAttribute(this,t),ko.applyMatrix3(e),this.setXY(t,ko.x,ko.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix3(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=kn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=_t(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=kn(t,this.array)),t}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=kn(t,this.array)),t}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=kn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=kn(t,this.array)),t}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),s=_t(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),s=_t(s,this.array),r=_t(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Vc&&(e.usage=this.usage),e}};var mr=class extends et{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ga=class extends et{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var it=class extends et{constructor(e,t,n){super(new Float32Array(e),t,n)}},Qg=0,Sn=new Ge,Wl=new Rt,Ws=new O,_n=new qt,Gr=new qt,Gt=new O,lt=class i extends vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qg++}),this.uuid=Hn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Xf(e)?ga:mr)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ze().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Sn.makeRotationFromQuaternion(e),this.applyMatrix4(Sn),this}rotateX(e){return Sn.makeRotationX(e),this.applyMatrix4(Sn),this}rotateY(e){return Sn.makeRotationY(e),this.applyMatrix4(Sn),this}rotateZ(e){return Sn.makeRotationZ(e),this.applyMatrix4(Sn),this}translate(e,t,n){return Sn.makeTranslation(e,t,n),this.applyMatrix4(Sn),this}scale(e,t,n){return Sn.makeScale(e,t,n),this.applyMatrix4(Sn),this}lookAt(e){return Wl.lookAt(e),Wl.updateMatrix(),this.applyMatrix4(Wl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ws).negate(),this.translate(Ws.x,Ws.y,Ws.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new it(n,3))}else{for(let n=0,s=t.count;n<s;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];_n.setFromBufferAttribute(r),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new an);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){let n=this.boundingSphere.center;if(_n.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Gr.setFromBufferAttribute(a),this.morphTargetsRelative?(Gt.addVectors(_n.min,Gr.min),_n.expandByPoint(Gt),Gt.addVectors(_n.max,Gr.max),_n.expandByPoint(Gt)):(_n.expandByPoint(Gr.min),_n.expandByPoint(Gr.max))}_n.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Gt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Gt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Gt.fromBufferAttribute(a,c),l&&(Ws.fromBufferAttribute(e,c),Gt.add(Ws)),s=Math.max(s,n.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new et(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<n.count;I++)a[I]=new O,l[I]=new O;let c=new O,h=new O,u=new O,d=new Te,f=new Te,x=new Te,m=new O,g=new O;function p(I,b,M){c.fromBufferAttribute(n,I),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,I),f.fromBufferAttribute(r,b),x.fromBufferAttribute(r,M),h.sub(c),u.sub(c),f.sub(d),x.sub(d);let L=1/(f.x*x.y-x.x*f.y);isFinite(L)&&(m.copy(h).multiplyScalar(x.y).addScaledVector(u,-f.y).multiplyScalar(L),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-x.x).multiplyScalar(L),a[I].add(m),a[b].add(m),a[M].add(m),l[I].add(g),l[b].add(g),l[M].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let I=0,b=_.length;I<b;++I){let M=_[I],L=M.start,k=M.count;for(let F=L,H=L+k;F<H;F+=3)p(e.getX(F+0),e.getX(F+1),e.getX(F+2))}let v=new O,y=new O,S=new O,E=new O;function w(I){S.fromBufferAttribute(s,I),E.copy(S);let b=a[I];v.copy(b),v.sub(S.multiplyScalar(S.dot(b))).normalize(),y.crossVectors(E,b);let L=y.dot(l[I])<0?-1:1;o.setXYZW(I,v.x,v.y,v.z,L)}for(let I=0,b=_.length;I<b;++I){let M=_[I],L=M.start,k=M.count;for(let F=L,H=L+k;F<H;F+=3)w(e.getX(F+0)),w(e.getX(F+1)),w(e.getX(F+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new et(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new O,r=new O,o=new O,a=new O,l=new O,c=new O,h=new O,u=new O;if(e)for(let d=0,f=e.count;d<f;d+=3){let x=e.getX(d+0),m=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,m),o.fromBufferAttribute(t,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Gt.fromBufferAttribute(e,t),Gt.normalize(),e.setXYZ(t,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,x=0;for(let m=0,g=l.length;m<g;m++){a.isInterleavedBufferAttribute?f=l[m]*a.data.stride+a.offset:f=l[m]*h;for(let p=0;p<h;p++)d[x++]=c[f++]}return new et(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Id=new Ge,us=new ys,Bo=new an,Pd=new O,Ho=new O,Vo=new O,Go=new O,Xl=new O,Wo=new O,Ld=new O,Xo=new O,ge=class extends Rt{constructor(e=new lt,t=new We){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Wo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Xl.fromBufferAttribute(u,e),o?Wo.addScaledVector(Xl,h):Wo.addScaledVector(Xl.sub(t),h))}t.add(Wo)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Bo.copy(n.boundingSphere),Bo.applyMatrix4(r),us.copy(e.ray).recast(e.near),!(Bo.containsPoint(us.origin)===!1&&(us.intersectSphere(Bo,Pd)===null||us.origin.distanceToSquared(Pd)>(e.far-e.near)**2))&&(Id.copy(r).invert(),us.copy(e.ray).applyMatrix4(Id),!(n.boundingBox!==null&&us.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,us)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,m=d.length;x<m;x++){let g=d[x],p=o[g.materialIndex],_=Math.max(g.start,f.start),v=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let y=_,S=v;y<S;y+=3){let E=a.getX(y),w=a.getX(y+1),I=a.getX(y+2);s=Yo(this,p,e,n,c,h,u,E,w,I),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let x=Math.max(0,f.start),m=Math.min(a.count,f.start+f.count);for(let g=x,p=m;g<p;g+=3){let _=a.getX(g),v=a.getX(g+1),y=a.getX(g+2);s=Yo(this,o,e,n,c,h,u,_,v,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,m=d.length;x<m;x++){let g=d[x],p=o[g.materialIndex],_=Math.max(g.start,f.start),v=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let y=_,S=v;y<S;y+=3){let E=y,w=y+1,I=y+2;s=Yo(this,p,e,n,c,h,u,E,w,I),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let x=Math.max(0,f.start),m=Math.min(l.count,f.start+f.count);for(let g=x,p=m;g<p;g+=3){let _=g,v=g+1,y=g+2;s=Yo(this,o,e,n,c,h,u,_,v,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function ex(i,e,t,n,s,r,o,a){let l;if(e.side===Qt?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===Jn,a),l===null)return null;Xo.copy(a),Xo.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Xo);return c<t.near||c>t.far?null:{distance:c,point:Xo.clone(),object:i}}function Yo(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,Ho),i.getVertexPosition(l,Vo),i.getVertexPosition(c,Go);let h=ex(i,e,t,n,Ho,Vo,Go,Ld);if(h){let u=new O;Ui.getBarycoord(Ld,Ho,Vo,Go,u),s&&(h.uv=Ui.getInterpolatedAttribute(s,a,l,c,u,new Te)),r&&(h.uv1=Ui.getInterpolatedAttribute(r,a,l,c,u,new Te)),o&&(h.normal=Ui.getInterpolatedAttribute(o,a,l,c,u,new O),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new O,materialIndex:0};Ui.getNormal(Ho,Vo,Go,d.normal),h.face=d,h.barycoord=u}return h}var Ct=class i extends lt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;x("z","y","x",-1,-1,n,t,e,o,r,0),x("z","y","x",1,-1,n,t,-e,o,r,1),x("x","z","y",1,1,e,n,t,s,o,2),x("x","z","y",1,-1,e,n,-t,s,o,3),x("x","y","z",1,-1,e,t,n,s,r,4),x("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new it(c,3)),this.setAttribute("normal",new it(h,3)),this.setAttribute("uv",new it(u,2));function x(m,g,p,_,v,y,S,E,w,I,b){let M=y/w,L=S/I,k=y/2,F=S/2,H=E/2,T=w+1,C=I+1,V=0,z=0,D=new O;for(let B=0;B<C;B++){let J=B*L-F;for(let ce=0;ce<T;ce++){let ue=ce*M-k;D[m]=ue*_,D[g]=J*v,D[p]=H,c.push(D.x,D.y,D.z),D[m]=0,D[g]=0,D[p]=E>0?1:-1,h.push(D.x,D.y,D.z),u.push(ce/w),u.push(1-B/I),V+=1}}for(let B=0;B<I;B++)for(let J=0;J<w;J++){let ce=d+J+T*B,ue=d+J+T*(B+1),q=d+(J+1)+T*(B+1),ee=d+(J+1)+T*B;l.push(ce,ue,ee),l.push(ue,q,ee),z+=6}a.addGroup(f,z,b),f+=z,d+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function gr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function rn(i){let e={};for(let t=0;t<i.length;t++){let n=gr(i[t]);for(let s in n)e[s]=n[s]}return e}function tx(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function qf(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}var qi={clone:gr,merge:rn},nx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ix=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,It=class extends fn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nx,this.fragmentShader=ix,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=gr(e.uniforms),this.uniformsGroups=tx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},xa=class extends Rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ge,this.projectionMatrix=new Ge,this.projectionMatrixInverse=new Ge,this.coordinateSystem=xi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ni=new O,Dd=new Te,Nd=new Te,kt=class extends xa{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=pr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(eo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return pr*2*Math.atan(Math.tan(eo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ni.x,Ni.y).multiplyScalar(-e/Ni.z),Ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ni.x,Ni.y).multiplyScalar(-e/Ni.z)}getViewSize(e,t){return this.getViewBounds(e,Dd,Nd),t.subVectors(Nd,Dd)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(eo*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Xs=-90,Ys=1,Yc=class extends Rt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new kt(Xs,Ys,e,t);s.layers=this.layers,this.add(s);let r=new kt(Xs,Ys,e,t);r.layers=this.layers,this.add(r);let o=new kt(Xs,Ys,e,t);o.layers=this.layers,this.add(o);let a=new kt(Xs,Ys,e,t);a.layers=this.layers,this.add(a);let l=new kt(Xs,Ys,e,t);l.layers=this.layers,this.add(l);let c=new kt(Xs,Ys,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===xi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===fa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},_a=class extends Wt{constructor(e,t,n,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:lr,super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},qc=class extends on{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new _a(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:un}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ct(5,5,5),r=new It({name:"CubemapFromEquirect",uniforms:gr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qt,blending:$n});r.uniforms.tEquirect.value=t;let o=new ge(s,r),a=t.minFilter;return t.minFilter===wn&&(t.minFilter=un),new Yc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},Yl=new O,sx=new O,rx=new Ze,Fn=class{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Yl.subVectors(n,t).cross(sx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Yl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||rx.getNormalMatrix(e),s=this.coplanarPoint(Yl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ds=new an,qo=new O,ao=class{constructor(e=new Fn,t=new Fn,n=new Fn,s=new Fn,r=new Fn,o=new Fn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=xi){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],x=s[9],m=s[10],g=s[11],p=s[12],_=s[13],v=s[14],y=s[15];if(n[0].setComponents(l-r,d-c,g-f,y-p).normalize(),n[1].setComponents(l+r,d+c,g+f,y+p).normalize(),n[2].setComponents(l+o,d+h,g+x,y+_).normalize(),n[3].setComponents(l-o,d-h,g-x,y-_).normalize(),n[4].setComponents(l-a,d-u,g-m,y-v).normalize(),t===xi)n[5].setComponents(l+a,d+u,g+m,y+v).normalize();else if(t===fa)n[5].setComponents(a,u,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ds.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ds.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ds)}intersectsSprite(e){return ds.center.set(0,0,0),ds.radius=.7071067811865476,ds.applyMatrix4(e.matrixWorld),this.intersectsSphere(ds)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(qo.x=s.normal.x>0?e.max.x:e.min.x,qo.y=s.normal.y>0?e.max.y:e.min.y,qo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(qo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Kf(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function ox(i){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,x)=>f.start-x.start);let d=0;for(let f=1;f<u.length;f++){let x=u[d],m=u[f];m.start<=x.start+x.count+1?x.count=Math.max(x.count,m.start+m.count-x.start):(++d,u[d]=m)}u.length=d+1;for(let f=0,x=u.length;f<x;f++){let m=u[f];i.bufferSubData(c,m.start*h.BYTES_PER_ELEMENT,h,m.start,m.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var An=class i extends lt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=e/a,d=t/l,f=[],x=[],m=[],g=[];for(let p=0;p<h;p++){let _=p*d-o;for(let v=0;v<c;v++){let y=v*u-r;x.push(y,-_,0),m.push(0,0,1),g.push(v/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let _=0;_<a;_++){let v=_+c*p,y=_+c*(p+1),S=_+1+c*(p+1),E=_+1+c*p;f.push(v,y,E),f.push(y,S,E)}this.setIndex(f),this.setAttribute("position",new it(x,3)),this.setAttribute("normal",new it(m,3)),this.setAttribute("uv",new it(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},ax=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lx=`#ifdef USE_ALPHAHASH
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
#endif`,cx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ux=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fx=`#ifdef USE_AOMAP
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
#endif`,px=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mx=`#ifdef USE_BATCHING
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
#endif`,gx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_x=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,vx=`#ifdef USE_IRIDESCENCE
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
#endif`,Mx=`#ifdef USE_BUMPMAP
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
#endif`,bx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ex=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Tx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ax=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Rx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Cx=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Ix=`#define PI 3.141592653589793
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
} // validated`,Px=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Lx=`vec3 transformedNormal = objectNormal;
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
#endif`,Dx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Nx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ox=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ux=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kx=`#ifdef USE_ENVMAP
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
#endif`,Bx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Hx=`#ifdef USE_ENVMAP
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
#endif`,Vx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gx=`#ifdef USE_ENVMAP
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
#endif`,Wx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Yx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Kx=`#ifdef USE_GRADIENTMAP
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
}`,Zx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$x=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jx=`uniform bool receiveShadow;
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
#endif`,Qx=`#ifdef USE_ENVMAP
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
#endif`,e_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,t_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,n_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,i_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,s_=`PhysicalMaterial material;
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
#endif`,r_=`struct PhysicalMaterial {
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
}`,o_=`
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
#endif`,a_=`#if defined( RE_IndirectDiffuse )
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
#endif`,l_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,c_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,h_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,u_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,d_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,f_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,p_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,m_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,g_=`#if defined( USE_POINTS_UV )
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
#endif`,x_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,__=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,y_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,v_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,M_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,b_=`#ifdef USE_MORPHTARGETS
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
#endif`,E_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,S_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,w_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,T_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,A_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,R_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,C_=`#ifdef USE_NORMALMAP
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
#endif`,I_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,P_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,L_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,D_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,N_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,O_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,U_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,z_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,F_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,k_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,B_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,H_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,V_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,G_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,W_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,X_=`float getShadowMask() {
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
}`,Y_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,q_=`#ifdef USE_SKINNING
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
#endif`,K_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Z_=`#ifdef USE_SKINNING
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
#endif`,$_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,J_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,j_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Q_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ey=`#ifdef USE_TRANSMISSION
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
#endif`,ty=`#ifdef USE_TRANSMISSION
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
#endif`,ny=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ry=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,oy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ay=`uniform sampler2D t2D;
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
}`,ly=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,hy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dy=`#include <common>
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
}`,fy=`#if DEPTH_PACKING == 3200
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
}`,py=`#define DISTANCE
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
}`,my=`#define DISTANCE
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
}`,gy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_y=`uniform float scale;
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
}`,yy=`uniform vec3 diffuse;
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
}`,vy=`#include <common>
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
}`,My=`uniform vec3 diffuse;
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
}`,by=`#define LAMBERT
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
}`,Ey=`#define LAMBERT
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
}`,Sy=`#define MATCAP
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
}`,wy=`#define MATCAP
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
}`,Ty=`#define NORMAL
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
}`,Ay=`#define NORMAL
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
}`,Ry=`#define PHONG
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
}`,Cy=`#define PHONG
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
}`,Iy=`#define STANDARD
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
}`,Py=`#define STANDARD
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
}`,Ly=`#define TOON
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
}`,Dy=`#define TOON
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
}`,Ny=`uniform float size;
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
}`,Oy=`uniform vec3 diffuse;
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
}`,Uy=`#include <common>
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
}`,zy=`uniform vec3 color;
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
}`,Fy=`uniform float rotation;
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
}`,ky=`uniform vec3 diffuse;
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
}`,je={alphahash_fragment:ax,alphahash_pars_fragment:lx,alphamap_fragment:cx,alphamap_pars_fragment:hx,alphatest_fragment:ux,alphatest_pars_fragment:dx,aomap_fragment:fx,aomap_pars_fragment:px,batching_pars_vertex:mx,batching_vertex:gx,begin_vertex:xx,beginnormal_vertex:_x,bsdfs:yx,iridescence_fragment:vx,bumpmap_pars_fragment:Mx,clipping_planes_fragment:bx,clipping_planes_pars_fragment:Ex,clipping_planes_pars_vertex:Sx,clipping_planes_vertex:wx,color_fragment:Tx,color_pars_fragment:Ax,color_pars_vertex:Rx,color_vertex:Cx,common:Ix,cube_uv_reflection_fragment:Px,defaultnormal_vertex:Lx,displacementmap_pars_vertex:Dx,displacementmap_vertex:Nx,emissivemap_fragment:Ox,emissivemap_pars_fragment:Ux,colorspace_fragment:zx,colorspace_pars_fragment:Fx,envmap_fragment:kx,envmap_common_pars_fragment:Bx,envmap_pars_fragment:Hx,envmap_pars_vertex:Vx,envmap_physical_pars_fragment:Qx,envmap_vertex:Gx,fog_vertex:Wx,fog_pars_vertex:Xx,fog_fragment:Yx,fog_pars_fragment:qx,gradientmap_pars_fragment:Kx,lightmap_pars_fragment:Zx,lights_lambert_fragment:$x,lights_lambert_pars_fragment:Jx,lights_pars_begin:jx,lights_toon_fragment:e_,lights_toon_pars_fragment:t_,lights_phong_fragment:n_,lights_phong_pars_fragment:i_,lights_physical_fragment:s_,lights_physical_pars_fragment:r_,lights_fragment_begin:o_,lights_fragment_maps:a_,lights_fragment_end:l_,logdepthbuf_fragment:c_,logdepthbuf_pars_fragment:h_,logdepthbuf_pars_vertex:u_,logdepthbuf_vertex:d_,map_fragment:f_,map_pars_fragment:p_,map_particle_fragment:m_,map_particle_pars_fragment:g_,metalnessmap_fragment:x_,metalnessmap_pars_fragment:__,morphinstance_vertex:y_,morphcolor_vertex:v_,morphnormal_vertex:M_,morphtarget_pars_vertex:b_,morphtarget_vertex:E_,normal_fragment_begin:S_,normal_fragment_maps:w_,normal_pars_fragment:T_,normal_pars_vertex:A_,normal_vertex:R_,normalmap_pars_fragment:C_,clearcoat_normal_fragment_begin:I_,clearcoat_normal_fragment_maps:P_,clearcoat_pars_fragment:L_,iridescence_pars_fragment:D_,opaque_fragment:N_,packing:O_,premultiplied_alpha_fragment:U_,project_vertex:z_,dithering_fragment:F_,dithering_pars_fragment:k_,roughnessmap_fragment:B_,roughnessmap_pars_fragment:H_,shadowmap_pars_fragment:V_,shadowmap_pars_vertex:G_,shadowmap_vertex:W_,shadowmask_pars_fragment:X_,skinbase_vertex:Y_,skinning_pars_vertex:q_,skinning_vertex:K_,skinnormal_vertex:Z_,specularmap_fragment:$_,specularmap_pars_fragment:J_,tonemapping_fragment:j_,tonemapping_pars_fragment:Q_,transmission_fragment:ey,transmission_pars_fragment:ty,uv_pars_fragment:ny,uv_pars_vertex:iy,uv_vertex:sy,worldpos_vertex:ry,background_vert:oy,background_frag:ay,backgroundCube_vert:ly,backgroundCube_frag:cy,cube_vert:hy,cube_frag:uy,depth_vert:dy,depth_frag:fy,distanceRGBA_vert:py,distanceRGBA_frag:my,equirect_vert:gy,equirect_frag:xy,linedashed_vert:_y,linedashed_frag:yy,meshbasic_vert:vy,meshbasic_frag:My,meshlambert_vert:by,meshlambert_frag:Ey,meshmatcap_vert:Sy,meshmatcap_frag:wy,meshnormal_vert:Ty,meshnormal_frag:Ay,meshphong_vert:Ry,meshphong_frag:Cy,meshphysical_vert:Iy,meshphysical_frag:Py,meshtoon_vert:Ly,meshtoon_frag:Dy,points_vert:Ny,points_frag:Oy,shadow_vert:Uy,shadow_frag:zy,sprite_vert:Fy,sprite_frag:ky},_e={common:{diffuse:{value:new Se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new Te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new Se(16777215)},opacity:{value:1},center:{value:new Te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},Zn={basic:{uniforms:rn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:rn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Se(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:rn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Se(0)},specular:{value:new Se(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:rn([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new Se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:rn([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new Se(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:rn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:rn([_e.points,_e.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:rn([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:rn([_e.common,_e.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:rn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:rn([_e.sprite,_e.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:rn([_e.common,_e.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:rn([_e.lights,_e.fog,{color:{value:new Se(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};Zn.physical={uniforms:rn([Zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new Te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new Se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new Te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new Se(0)},specularColor:{value:new Se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new Te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};var Ko={r:0,b:0,g:0},fs=new jn,By=new Ge;function Hy(i,e,t,n,s,r,o){let a=new Se(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function x(_){let v=_.isScene===!0?_.background:null;return v&&v.isTexture&&(v=(_.backgroundBlurriness>0?t:e).get(v)),v}function m(_){let v=!1,y=x(_);y===null?p(a,l):y&&y.isColor&&(p(y,1),v=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(_,v){let y=x(v);y&&(y.isCubeTexture||y.mapping===Ha)?(h===void 0&&(h=new ge(new Ct(1,1,1),new It({name:"BackgroundCubeMaterial",uniforms:gr(Zn.backgroundCube.uniforms),vertexShader:Zn.backgroundCube.vertexShader,fragmentShader:Zn.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(S,E,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),fs.copy(v.backgroundRotation),fs.x*=-1,fs.y*=-1,fs.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(fs.y*=-1,fs.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(By.makeRotationFromEuler(fs)),h.material.toneMapped=Qe.getTransfer(y.colorSpace)!==pt,(u!==y||d!==y.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=y,d=y.version,f=i.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new ge(new An(2,2),new It({name:"BackgroundMaterial",uniforms:gr(Zn.background.uniforms),vertexShader:Zn.background.vertexShader,fragmentShader:Zn.background.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(y.colorSpace)!==pt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,f=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function p(_,v){_.getRGB(Ko,qf(i)),n.buffers.color.setClear(Ko.r,Ko.g,Ko.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(_,v=1){a.set(_),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,p(a,l)},render:m,addToRenderList:g}}function Vy(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(M,L,k,F,H){let T=!1,C=u(F,k,L);r!==C&&(r=C,c(r.object)),T=f(M,F,k,H),T&&x(M,F,k,H),H!==null&&e.update(H,i.ELEMENT_ARRAY_BUFFER),(T||o)&&(o=!1,y(M,L,k,F),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,L,k){let F=k.wireframe===!0,H=n[M.id];H===void 0&&(H={},n[M.id]=H);let T=H[L.id];T===void 0&&(T={},H[L.id]=T);let C=T[F];return C===void 0&&(C=d(l()),T[F]=C),C}function d(M){let L=[],k=[],F=[];for(let H=0;H<t;H++)L[H]=0,k[H]=0,F[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:k,attributeDivisors:F,object:M,attributes:{},index:null}}function f(M,L,k,F){let H=r.attributes,T=L.attributes,C=0,V=k.getAttributes();for(let z in V)if(V[z].location>=0){let B=H[z],J=T[z];if(J===void 0&&(z==="instanceMatrix"&&M.instanceMatrix&&(J=M.instanceMatrix),z==="instanceColor"&&M.instanceColor&&(J=M.instanceColor)),B===void 0||B.attribute!==J||J&&B.data!==J.data)return!0;C++}return r.attributesNum!==C||r.index!==F}function x(M,L,k,F){let H={},T=L.attributes,C=0,V=k.getAttributes();for(let z in V)if(V[z].location>=0){let B=T[z];B===void 0&&(z==="instanceMatrix"&&M.instanceMatrix&&(B=M.instanceMatrix),z==="instanceColor"&&M.instanceColor&&(B=M.instanceColor));let J={};J.attribute=B,B&&B.data&&(J.data=B.data),H[z]=J,C++}r.attributes=H,r.attributesNum=C,r.index=F}function m(){let M=r.newAttributes;for(let L=0,k=M.length;L<k;L++)M[L]=0}function g(M){p(M,0)}function p(M,L){let k=r.newAttributes,F=r.enabledAttributes,H=r.attributeDivisors;k[M]=1,F[M]===0&&(i.enableVertexAttribArray(M),F[M]=1),H[M]!==L&&(i.vertexAttribDivisor(M,L),H[M]=L)}function _(){let M=r.newAttributes,L=r.enabledAttributes;for(let k=0,F=L.length;k<F;k++)L[k]!==M[k]&&(i.disableVertexAttribArray(k),L[k]=0)}function v(M,L,k,F,H,T,C){C===!0?i.vertexAttribIPointer(M,L,k,H,T):i.vertexAttribPointer(M,L,k,F,H,T)}function y(M,L,k,F){m();let H=F.attributes,T=k.getAttributes(),C=L.defaultAttributeValues;for(let V in T){let z=T[V];if(z.location>=0){let D=H[V];if(D===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(D=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(D=M.instanceColor)),D!==void 0){let B=D.normalized,J=D.itemSize,ce=e.get(D);if(ce===void 0)continue;let ue=ce.buffer,q=ce.type,ee=ce.bytesPerElement,te=q===i.INT||q===i.UNSIGNED_INT||D.gpuType===Ah;if(D.isInterleavedBufferAttribute){let K=D.data,de=K.stride,ae=D.offset;if(K.isInstancedInterleavedBuffer){for(let pe=0;pe<z.locationSize;pe++)p(z.location+pe,K.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let pe=0;pe<z.locationSize;pe++)g(z.location+pe);i.bindBuffer(i.ARRAY_BUFFER,ue);for(let pe=0;pe<z.locationSize;pe++)v(z.location+pe,J/z.locationSize,q,B,de*ee,(ae+J/z.locationSize*pe)*ee,te)}else{if(D.isInstancedBufferAttribute){for(let K=0;K<z.locationSize;K++)p(z.location+K,D.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=D.meshPerAttribute*D.count)}else for(let K=0;K<z.locationSize;K++)g(z.location+K);i.bindBuffer(i.ARRAY_BUFFER,ue);for(let K=0;K<z.locationSize;K++)v(z.location+K,J/z.locationSize,q,B,J*ee,J/z.locationSize*K*ee,te)}}else if(C!==void 0){let B=C[V];if(B!==void 0)switch(B.length){case 2:i.vertexAttrib2fv(z.location,B);break;case 3:i.vertexAttrib3fv(z.location,B);break;case 4:i.vertexAttrib4fv(z.location,B);break;default:i.vertexAttrib1fv(z.location,B)}}}}_()}function S(){I();for(let M in n){let L=n[M];for(let k in L){let F=L[k];for(let H in F)h(F[H].object),delete F[H];delete L[k]}delete n[M]}}function E(M){if(n[M.id]===void 0)return;let L=n[M.id];for(let k in L){let F=L[k];for(let H in F)h(F[H].object),delete F[H];delete L[k]}delete n[M.id]}function w(M){for(let L in n){let k=n[L];if(k[M.id]===void 0)continue;let F=k[M.id];for(let H in F)h(F[H].object),delete F[H];delete k[M.id]}}function I(){b(),o=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:b,dispose:S,releaseStatesOfGeometry:E,releaseStatesOfProgram:w,initAttributes:m,enableAttribute:g,disableUnusedAttributes:_}}function Gy(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let x=0;x<u;x++)f+=h[x];t.update(f,n,1)}function l(c,h,u,d){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let x=0;x<c.length;x++)o(c[x],h[x],d[x]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let x=0;for(let m=0;m<u;m++)x+=h[m]*d[m];t.update(x,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Wy(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==Tn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let I=w===Vn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==yi&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Bn&&!I)}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=x>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:x,maxTextureSize:m,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:_,maxVaryings:v,maxFragmentUniforms:y,vertexTextures:S,maxSamples:E}}function Xy(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Fn,a=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let x=u.clippingPlanes,m=u.clipIntersection,g=u.clipShadows,p=i.get(u);if(!s||x===null||x.length===0||r&&!g)r?h(null):c();else{let _=r?0:n,v=_*4,y=p.clippingState||null;l.value=y,y=h(x,d,v,f);for(let S=0;S!==v;++S)y[S]=t[S];p.clippingState=y,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,x){let m=u!==null?u.length:0,g=null;if(m!==0){if(g=l.value,x!==!0||g===null){let p=f+m*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(g===null||g.length<p)&&(g=new Float32Array(p));for(let v=0,y=f;v!==m;++v,y+=4)o.copy(u[v]).applyMatrix4(_,a),o.normal.toArray(g,y),g[y+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,g}}function Yy(i){let e=new WeakMap;function t(o,a){return a===pc?o.mapping=lr:a===mc&&(o.mapping=cr),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===pc||a===mc)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new qc(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var ki=class extends xa{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},nr=4,Od=[.125,.215,.35,.446,.526,.582],xs=20,ql=new ki,Ud=new Se,Kl=null,Zl=0,$l=0,Jl=!1,ms=(1+Math.sqrt(5))/2,qs=1/ms,zd=[new O(-ms,qs,0),new O(ms,qs,0),new O(-qs,0,ms),new O(qs,0,ms),new O(0,ms,-qs),new O(0,ms,qs),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)],ya=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Kl=this._renderer.getRenderTarget(),Zl=this._renderer.getActiveCubeFace(),$l=this._renderer.getActiveMipmapLevel(),Jl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Kl,Zl,$l),this._renderer.xr.enabled=Jl,e.scissorTest=!1,Zo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===lr||e.mapping===cr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Kl=this._renderer.getRenderTarget(),Zl=this._renderer.getActiveCubeFace(),$l=this._renderer.getActiveMipmapLevel(),Jl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:un,minFilter:un,generateMipmaps:!1,type:Vn,format:Tn,colorSpace:nn,depthBuffer:!1},s=Fd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fd(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qy(r)),this._blurMaterial=Ky(r,e,t)}return s}_compileMaterial(e){let t=new ge(this._lodPlanes[0],e);this._renderer.compile(t,ql)}_sceneToCubeUV(e,t,n,s){let a=new kt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Ud),h.toneMapping=Fi,h.autoClear=!1;let f=new We({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1}),x=new ge(new Ct,f),m=!1,g=e.background;g?g.isColor&&(f.color.copy(g),e.background=null,m=!0):(f.color.copy(Ud),m=!0);for(let p=0;p<6;p++){let _=p%3;_===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):_===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let v=this._cubeSize;Zo(s,_*v,p>2?v:0,v,v),h.setRenderTarget(s),m&&h.render(x,a),h.render(e,a)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=g}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===lr||e.mapping===cr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kd());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new ge(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Zo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,ql)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=zd[(s-r-1)%zd.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new ge(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*xs-1),m=r/x,g=isFinite(r)?1+Math.floor(h*m):xs;g>xs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${xs}`);let p=[],_=0;for(let w=0;w<xs;++w){let I=w/m,b=Math.exp(-I*I/2);p.push(b),w===0?_+=b:w<g&&(_+=2*b)}for(let w=0;w<p.length;w++)p[w]=p[w]/_;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:v}=this;d.dTheta.value=x,d.mipInt.value=v-n;let y=this._sizeLods[s],S=3*y*(s>v-nr?s-v+nr:0),E=4*(this._cubeSize-y);Zo(t,S,E,3*y,2*y),l.setRenderTarget(t),l.render(u,ql)}};function qy(i){let e=[],t=[],n=[],s=i,r=i-nr+1+Od.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>i-nr?l=Od[o-i+nr-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,x=6,m=3,g=2,p=1,_=new Float32Array(m*x*f),v=new Float32Array(g*x*f),y=new Float32Array(p*x*f);for(let E=0;E<f;E++){let w=E%3*2/3-1,I=E>2?0:-1,b=[w,I,0,w+2/3,I,0,w+2/3,I+1,0,w,I,0,w+2/3,I+1,0,w,I+1,0];_.set(b,m*x*E),v.set(d,g*x*E);let M=[E,E,E,E,E,E];y.set(M,p*x*E)}let S=new lt;S.setAttribute("position",new et(_,m)),S.setAttribute("uv",new et(v,g)),S.setAttribute("faceIndex",new et(y,p)),e.push(S),s>nr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Fd(i,e,t){let n=new on(i,e,t);return n.texture.mapping=Ha,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Zo(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Ky(i,e,t){let n=new Float32Array(xs),s=new O(0,1,0);return new It({name:"SphericalGaussianBlur",defines:{n:xs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Fh(),fragmentShader:`

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
		`,blending:$n,depthTest:!1,depthWrite:!1})}function kd(){return new It({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fh(),fragmentShader:`

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
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Bd(){return new It({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Fh(){return`

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
	`}function Zy(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===pc||l===mc,h=l===lr||l===cr;if(c||h){let u=e.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new ya(i)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new ya(i)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function $y(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Jr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Jy(i,e,t,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let x in d.attributes)e.remove(d.attributes[x]);for(let x in d.morphAttributes){let m=d.morphAttributes[x];for(let g=0,p=m.length;g<p;g++)e.remove(m[g])}d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let x in d)e.update(d[x],i.ARRAY_BUFFER);let f=u.morphAttributes;for(let x in f){let m=f[x];for(let g=0,p=m.length;g<p;g++)e.update(m[g],i.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,x=u.attributes.position,m=0;if(f!==null){let _=f.array;m=f.version;for(let v=0,y=_.length;v<y;v+=3){let S=_[v+0],E=_[v+1],w=_[v+2];d.push(S,E,E,w,w,S)}}else if(x!==void 0){let _=x.array;m=x.version;for(let v=0,y=_.length/3-1;v<y;v+=3){let S=v+0,E=v+1,w=v+2;d.push(S,E,E,w,w,S)}}else return;let g=new(Xf(d)?ga:mr)(d,1);g.version=m;let p=r.get(u);p&&e.remove(p),r.set(u,g)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function jy(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*o),t.update(f,n,1)}function c(d,f,x){x!==0&&(i.drawElementsInstanced(n,f,r,d*o,x),t.update(f,n,x))}function h(d,f,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,x);let g=0;for(let p=0;p<x;p++)g+=f[p];t.update(g,n,1)}function u(d,f,x,m){if(x===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],m[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,m,0,x);let p=0;for(let _=0;_<x;_++)p+=f[_]*m[_];t.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Qy(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function ev(i,e,t){let n=new WeakMap,s=new ct;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let b=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],v=0;f===!0&&(v=1),x===!0&&(v=2),m===!0&&(v=3);let y=a.attributes.position.count*v,S=1;y>e.maxTextureSize&&(S=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let E=new Float32Array(y*S*4*u),w=new ma(E,y,S,u);w.type=Bn,w.needsUpdate=!0;let I=v*4;for(let M=0;M<u;M++){let L=g[M],k=p[M],F=_[M],H=y*S*4*M;for(let T=0;T<L.count;T++){let C=T*I;f===!0&&(s.fromBufferAttribute(L,T),E[H+C+0]=s.x,E[H+C+1]=s.y,E[H+C+2]=s.z,E[H+C+3]=0),x===!0&&(s.fromBufferAttribute(k,T),E[H+C+4]=s.x,E[H+C+5]=s.y,E[H+C+6]=s.z,E[H+C+7]=0),m===!0&&(s.fromBufferAttribute(F,T),E[H+C+8]=s.x,E[H+C+9]=s.y,E[H+C+10]=s.z,E[H+C+11]=F.itemSize===4?s.w:1)}}d={count:u,texture:w,size:new Te(y,S)},n.set(a,d),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let m=0;m<c.length;m++)f+=c[m];let x=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function tv(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var va=class extends Wt{constructor(e,t,n,s,r,o,a,l,c,h=sr){if(h!==sr&&h!==ur)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===sr&&(n=_s),n===void 0&&h===ur&&(n=hr),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:en,this.minFilter=l!==void 0?l:en,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Zf=new Wt,Hd=new va(1,1),$f=new ma,Jf=new Xc,jf=new _a,Vd=[],Gd=[],Wd=new Float32Array(16),Xd=new Float32Array(9),Yd=new Float32Array(4);function wr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Vd[s];if(r===void 0&&(r=new Float32Array(s),Vd[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Bt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ht(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Wa(i,e){let t=Gd[e];t===void 0&&(t=new Int32Array(e),Gd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function nv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function iv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;i.uniform2fv(this.addr,e),Ht(t,e)}}function sv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Bt(t,e))return;i.uniform3fv(this.addr,e),Ht(t,e)}}function rv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;i.uniform4fv(this.addr,e),Ht(t,e)}}function ov(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ht(t,e)}else{if(Bt(t,n))return;Yd.set(n),i.uniformMatrix2fv(this.addr,!1,Yd),Ht(t,n)}}function av(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ht(t,e)}else{if(Bt(t,n))return;Xd.set(n),i.uniformMatrix3fv(this.addr,!1,Xd),Ht(t,n)}}function lv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ht(t,e)}else{if(Bt(t,n))return;Wd.set(n),i.uniformMatrix4fv(this.addr,!1,Wd),Ht(t,n)}}function cv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function hv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;i.uniform2iv(this.addr,e),Ht(t,e)}}function uv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;i.uniform3iv(this.addr,e),Ht(t,e)}}function dv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;i.uniform4iv(this.addr,e),Ht(t,e)}}function fv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function pv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;i.uniform2uiv(this.addr,e),Ht(t,e)}}function mv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;i.uniform3uiv(this.addr,e),Ht(t,e)}}function gv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;i.uniform4uiv(this.addr,e),Ht(t,e)}}function xv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Hd.compareFunction=Gf,r=Hd):r=Zf,t.setTexture2D(e||r,s)}function _v(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Jf,s)}function yv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||jf,s)}function vv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||$f,s)}function Mv(i){switch(i){case 5126:return nv;case 35664:return iv;case 35665:return sv;case 35666:return rv;case 35674:return ov;case 35675:return av;case 35676:return lv;case 5124:case 35670:return cv;case 35667:case 35671:return hv;case 35668:case 35672:return uv;case 35669:case 35673:return dv;case 5125:return fv;case 36294:return pv;case 36295:return mv;case 36296:return gv;case 35678:case 36198:case 36298:case 36306:case 35682:return xv;case 35679:case 36299:case 36307:return _v;case 35680:case 36300:case 36308:case 36293:return yv;case 36289:case 36303:case 36311:case 36292:return vv}}function bv(i,e){i.uniform1fv(this.addr,e)}function Ev(i,e){let t=wr(e,this.size,2);i.uniform2fv(this.addr,t)}function Sv(i,e){let t=wr(e,this.size,3);i.uniform3fv(this.addr,t)}function wv(i,e){let t=wr(e,this.size,4);i.uniform4fv(this.addr,t)}function Tv(i,e){let t=wr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Av(i,e){let t=wr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Rv(i,e){let t=wr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Cv(i,e){i.uniform1iv(this.addr,e)}function Iv(i,e){i.uniform2iv(this.addr,e)}function Pv(i,e){i.uniform3iv(this.addr,e)}function Lv(i,e){i.uniform4iv(this.addr,e)}function Dv(i,e){i.uniform1uiv(this.addr,e)}function Nv(i,e){i.uniform2uiv(this.addr,e)}function Ov(i,e){i.uniform3uiv(this.addr,e)}function Uv(i,e){i.uniform4uiv(this.addr,e)}function zv(i,e,t){let n=this.cache,s=e.length,r=Wa(t,s);Bt(n,r)||(i.uniform1iv(this.addr,r),Ht(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Zf,r[o])}function Fv(i,e,t){let n=this.cache,s=e.length,r=Wa(t,s);Bt(n,r)||(i.uniform1iv(this.addr,r),Ht(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Jf,r[o])}function kv(i,e,t){let n=this.cache,s=e.length,r=Wa(t,s);Bt(n,r)||(i.uniform1iv(this.addr,r),Ht(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||jf,r[o])}function Bv(i,e,t){let n=this.cache,s=e.length,r=Wa(t,s);Bt(n,r)||(i.uniform1iv(this.addr,r),Ht(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||$f,r[o])}function Hv(i){switch(i){case 5126:return bv;case 35664:return Ev;case 35665:return Sv;case 35666:return wv;case 35674:return Tv;case 35675:return Av;case 35676:return Rv;case 5124:case 35670:return Cv;case 35667:case 35671:return Iv;case 35668:case 35672:return Pv;case 35669:case 35673:return Lv;case 5125:return Dv;case 36294:return Nv;case 36295:return Ov;case 36296:return Uv;case 35678:case 36198:case 36298:case 36306:case 35682:return zv;case 35679:case 36299:case 36307:return Fv;case 35680:case 36300:case 36308:case 36293:return kv;case 36289:case 36303:case 36311:case 36292:return Bv}}var Kc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Mv(t.type)}},Zc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Hv(t.type)}},$c=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},jl=/(\w+)(\])?(\[|\.)?/g;function qd(i,e){i.seq.push(e),i.map[e.id]=e}function Vv(i,e,t){let n=i.name,s=n.length;for(jl.lastIndex=0;;){let r=jl.exec(n),o=jl.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){qd(t,c===void 0?new Kc(a,i,e):new Zc(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new $c(a),qd(t,u)),t=u}}}var or=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Vv(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Kd(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Gv=37297,Wv=0;function Xv(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Zd=new Ze;function Yv(i){Qe._getMatrix(Zd,Qe.workingColorSpace,i);let e=`mat3( ${Zd.elements.map(t=>t.toFixed(4))} )`;switch(Qe.getTransfer(i)){case Ga:return[e,"LinearTransferOETF"];case pt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function $d(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Xv(i.getShaderSource(e),o)}else return s}function qv(i,e){let t=Yv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Kv(i,e){let t;switch(e){case Mh:t="Linear";break;case bh:t="Reinhard";break;case Eh:t="Cineon";break;case fo:t="ACESFilmic";break;case Sh:t="AgX";break;case wh:t="Neutral";break;case cg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var $o=new O;function Zv(){Qe.getLuminanceCoefficients($o);let i=$o.x.toFixed(4),e=$o.y.toFixed(4),t=$o.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $v(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(jr).join(`
`)}function Jv(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function jv(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function jr(i){return i!==""}function Jd(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function jd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Qv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jc(i){return i.replace(Qv,tM)}var eM=new Map;function tM(i,e){let t=je[e];if(t===void 0){let n=eM.get(e);if(n!==void 0)t=je[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Jc(t)}var nM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qd(i){return i.replace(nM,iM)}function iM(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ef(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function sM(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Cf?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===vh?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===mi&&(e="SHADOWMAP_TYPE_VSM"),e}function rM(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case lr:case cr:e="ENVMAP_TYPE_CUBE";break;case Ha:e="ENVMAP_TYPE_CUBE_UV";break}return e}function oM(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case cr:e="ENVMAP_MODE_REFRACTION";break}return e}function aM(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case If:e="ENVMAP_BLENDING_MULTIPLY";break;case ag:e="ENVMAP_BLENDING_MIX";break;case lg:e="ENVMAP_BLENDING_ADD";break}return e}function lM(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function cM(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=sM(t),c=rM(t),h=oM(t),u=aM(t),d=lM(t),f=$v(t),x=Jv(r),m=s.createProgram(),g,p,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(jr).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(jr).join(`
`),p.length>0&&(p+=`
`)):(g=[ef(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(jr).join(`
`),p=[ef(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Fi?"#define TONE_MAPPING":"",t.toneMapping!==Fi?je.tonemapping_pars_fragment:"",t.toneMapping!==Fi?Kv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,qv("linearToOutputTexel",t.outputColorSpace),Zv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(jr).join(`
`)),o=Jc(o),o=Jd(o,t),o=jd(o,t),a=Jc(a),a=Jd(a,t),a=jd(a,t),o=Qd(o),a=Qd(a),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===fd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===fd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=_+g+o,y=_+p+a,S=Kd(s,s.VERTEX_SHADER,v),E=Kd(s,s.FRAGMENT_SHADER,y);s.attachShader(m,S),s.attachShader(m,E),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function w(L){if(i.debug.checkShaderErrors){let k=s.getProgramInfoLog(m).trim(),F=s.getShaderInfoLog(S).trim(),H=s.getShaderInfoLog(E).trim(),T=!0,C=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(T=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,S,E);else{let V=$d(s,S,"vertex"),z=$d(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+k+`
`+V+`
`+z)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(F===""||H==="")&&(C=!1);C&&(L.diagnostics={runnable:T,programLog:k,vertexShader:{log:F,prefix:g},fragmentShader:{log:H,prefix:p}})}s.deleteShader(S),s.deleteShader(E),I=new or(s,m),b=jv(s,m)}let I;this.getUniforms=function(){return I===void 0&&w(this),I};let b;this.getAttributes=function(){return b===void 0&&w(this),b};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(m,Gv)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Wv++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=S,this.fragmentShader=E,this}var hM=0,jc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Qc(e),t.set(e,n)),n}},Qc=class{constructor(e){this.id=hM++,this.code=e,this.usedTimes=0}};function uM(i,e,t,n,s,r,o){let a=new oo,l=new jc,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(b){return c.add(b),b===0?"uv":`uv${b}`}function g(b,M,L,k,F){let H=k.fog,T=F.geometry,C=b.isMeshStandardMaterial?k.environment:null,V=(b.isMeshStandardMaterial?t:e).get(b.envMap||C),z=V&&V.mapping===Ha?V.image.height:null,D=x[b.type];b.precision!==null&&(f=s.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));let B=T.morphAttributes.position||T.morphAttributes.normal||T.morphAttributes.color,J=B!==void 0?B.length:0,ce=0;T.morphAttributes.position!==void 0&&(ce=1),T.morphAttributes.normal!==void 0&&(ce=2),T.morphAttributes.color!==void 0&&(ce=3);let ue,q,ee,te;if(D){let xt=Zn[D];ue=xt.vertexShader,q=xt.fragmentShader}else ue=b.vertexShader,q=b.fragmentShader,l.update(b),ee=l.getVertexShaderID(b),te=l.getFragmentShaderID(b);let K=i.getRenderTarget(),de=i.state.buffers.depth.getReversed(),ae=F.isInstancedMesh===!0,pe=F.isBatchedMesh===!0,he=!!b.map,fe=!!b.matcap,Ae=!!V,A=!!b.aoMap,ye=!!b.lightMap,Q=!!b.bumpMap,ze=!!b.normalMap,le=!!b.displacementMap,Pe=!!b.emissiveMap,De=!!b.metalnessMap,N=!!b.roughnessMap,R=b.anisotropy>0,Y=b.clearcoat>0,ie=b.dispersion>0,se=b.iridescence>0,ne=b.sheen>0,Fe=b.transmission>0,Me=R&&!!b.anisotropyMap,Re=Y&&!!b.clearcoatMap,rt=Y&&!!b.clearcoatNormalMap,me=Y&&!!b.clearcoatRoughnessMap,Ce=se&&!!b.iridescenceMap,He=se&&!!b.iridescenceThicknessMap,Ve=ne&&!!b.sheenColorMap,Ie=ne&&!!b.sheenRoughnessMap,st=!!b.specularMap,Je=!!b.specularColorMap,Et=!!b.specularIntensityMap,G=Fe&&!!b.transmissionMap,ve=Fe&&!!b.thicknessMap,j=!!b.gradientMap,oe=!!b.alphaMap,we=b.alphaTest>0,be=!!b.alphaHash,qe=!!b.extensions,Nt=Fi;b.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Nt=i.toneMapping);let Zt={shaderID:D,shaderType:b.type,shaderName:b.name,vertexShader:ue,fragmentShader:q,defines:b.defines,customVertexShaderID:ee,customFragmentShaderID:te,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:pe,batchingColor:pe&&F._colorsTexture!==null,instancing:ae,instancingColor:ae&&F.instanceColor!==null,instancingMorph:ae&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:K===null?i.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:nn,alphaToCoverage:!!b.alphaToCoverage,map:he,matcap:fe,envMap:Ae,envMapMode:Ae&&V.mapping,envMapCubeUVHeight:z,aoMap:A,lightMap:ye,bumpMap:Q,normalMap:ze,displacementMap:d&&le,emissiveMap:Pe,normalMapObjectSpace:ze&&b.normalMapType===mg,normalMapTangentSpace:ze&&b.normalMapType===Vf,metalnessMap:De,roughnessMap:N,anisotropy:R,anisotropyMap:Me,clearcoat:Y,clearcoatMap:Re,clearcoatNormalMap:rt,clearcoatRoughnessMap:me,dispersion:ie,iridescence:se,iridescenceMap:Ce,iridescenceThicknessMap:He,sheen:ne,sheenColorMap:Ve,sheenRoughnessMap:Ie,specularMap:st,specularColorMap:Je,specularIntensityMap:Et,transmission:Fe,transmissionMap:G,thicknessMap:ve,gradientMap:j,opaque:b.transparent===!1&&b.blending===ir&&b.alphaToCoverage===!1,alphaMap:oe,alphaTest:we,alphaHash:be,combine:b.combine,mapUv:he&&m(b.map.channel),aoMapUv:A&&m(b.aoMap.channel),lightMapUv:ye&&m(b.lightMap.channel),bumpMapUv:Q&&m(b.bumpMap.channel),normalMapUv:ze&&m(b.normalMap.channel),displacementMapUv:le&&m(b.displacementMap.channel),emissiveMapUv:Pe&&m(b.emissiveMap.channel),metalnessMapUv:De&&m(b.metalnessMap.channel),roughnessMapUv:N&&m(b.roughnessMap.channel),anisotropyMapUv:Me&&m(b.anisotropyMap.channel),clearcoatMapUv:Re&&m(b.clearcoatMap.channel),clearcoatNormalMapUv:rt&&m(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&m(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&m(b.iridescenceMap.channel),iridescenceThicknessMapUv:He&&m(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ve&&m(b.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&m(b.sheenRoughnessMap.channel),specularMapUv:st&&m(b.specularMap.channel),specularColorMapUv:Je&&m(b.specularColorMap.channel),specularIntensityMapUv:Et&&m(b.specularIntensityMap.channel),transmissionMapUv:G&&m(b.transmissionMap.channel),thicknessMapUv:ve&&m(b.thicknessMap.channel),alphaMapUv:oe&&m(b.alphaMap.channel),vertexTangents:!!T.attributes.tangent&&(ze||R),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!T.attributes.color&&T.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!T.attributes.uv&&(he||oe),fog:!!H,useFog:b.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:de,skinning:F.isSkinnedMesh===!0,morphTargets:T.morphAttributes.position!==void 0,morphNormals:T.morphAttributes.normal!==void 0,morphColors:T.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:ce,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:Nt,decodeVideoTexture:he&&b.map.isVideoTexture===!0&&Qe.getTransfer(b.map.colorSpace)===pt,decodeVideoTextureEmissive:Pe&&b.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(b.emissiveMap.colorSpace)===pt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===gt,flipSided:b.side===Qt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:qe&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qe&&b.extensions.multiDraw===!0||pe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Zt.vertexUv1s=c.has(1),Zt.vertexUv2s=c.has(2),Zt.vertexUv3s=c.has(3),c.clear(),Zt}function p(b){let M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(let L in b.defines)M.push(L),M.push(b.defines[L]);return b.isRawShaderMaterial===!1&&(_(M,b),v(M,b),M.push(i.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function _(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function v(b,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),b.push(a.mask)}function y(b){let M=x[b.type],L;if(M){let k=Zn[M];L=qi.clone(k.uniforms)}else L=b.uniforms;return L}function S(b,M){let L;for(let k=0,F=h.length;k<F;k++){let H=h[k];if(H.cacheKey===M){L=H,++L.usedTimes;break}}return L===void 0&&(L=new cM(i,M,b,r),h.push(L)),L}function E(b){if(--b.usedTimes===0){let M=h.indexOf(b);h[M]=h[h.length-1],h.pop(),b.destroy()}}function w(b){l.remove(b)}function I(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:y,acquireProgram:S,releaseProgram:E,releaseShaderCache:w,programs:h,dispose:I}}function dM(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function fM(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function tf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function nf(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,d,f,x,m,g){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:x,renderOrder:u.renderOrder,z:m,group:g},i[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=x,p.renderOrder=u.renderOrder,p.z=m,p.group=g),e++,p}function a(u,d,f,x,m,g){let p=o(u,d,f,x,m,g);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(u,d,f,x,m,g){let p=o(u,d,f,x,m,g);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||fM),n.length>1&&n.sort(d||tf),s.length>1&&s.sort(d||tf)}function h(){for(let u=e,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function pM(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new nf,i.set(n,[o])):s>=r.length?(o=new nf,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function mM(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new Se};break;case"SpotLight":t={position:new O,direction:new O,color:new Se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Se,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Se,groundColor:new Se};break;case"RectAreaLight":t={color:new Se,position:new O,halfWidth:new O,halfHeight:new O};break}return i[e.id]=t,t}}}function gM(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var xM=0;function _M(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function yM(i){let e=new mM,t=gM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new O);let s=new O,r=new Ge,o=new Ge;function a(c){let h=0,u=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let f=0,x=0,m=0,g=0,p=0,_=0,v=0,y=0,S=0,E=0,w=0;c.sort(_M);for(let b=0,M=c.length;b<M;b++){let L=c[b],k=L.color,F=L.intensity,H=L.distance,T=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=k.r*F,u+=k.g*F,d+=k.b*F;else if(L.isLightProbe){for(let C=0;C<9;C++)n.probe[C].addScaledVector(L.sh.coefficients[C],F);w++}else if(L.isDirectionalLight){let C=e.get(L);if(C.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let V=L.shadow,z=t.get(L);z.shadowIntensity=V.intensity,z.shadowBias=V.bias,z.shadowNormalBias=V.normalBias,z.shadowRadius=V.radius,z.shadowMapSize=V.mapSize,n.directionalShadow[f]=z,n.directionalShadowMap[f]=T,n.directionalShadowMatrix[f]=L.shadow.matrix,_++}n.directional[f]=C,f++}else if(L.isSpotLight){let C=e.get(L);C.position.setFromMatrixPosition(L.matrixWorld),C.color.copy(k).multiplyScalar(F),C.distance=H,C.coneCos=Math.cos(L.angle),C.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),C.decay=L.decay,n.spot[m]=C;let V=L.shadow;if(L.map&&(n.spotLightMap[S]=L.map,S++,V.updateMatrices(L),L.castShadow&&E++),n.spotLightMatrix[m]=V.matrix,L.castShadow){let z=t.get(L);z.shadowIntensity=V.intensity,z.shadowBias=V.bias,z.shadowNormalBias=V.normalBias,z.shadowRadius=V.radius,z.shadowMapSize=V.mapSize,n.spotShadow[m]=z,n.spotShadowMap[m]=T,y++}m++}else if(L.isRectAreaLight){let C=e.get(L);C.color.copy(k).multiplyScalar(F),C.halfWidth.set(L.width*.5,0,0),C.halfHeight.set(0,L.height*.5,0),n.rectArea[g]=C,g++}else if(L.isPointLight){let C=e.get(L);if(C.color.copy(L.color).multiplyScalar(L.intensity),C.distance=L.distance,C.decay=L.decay,L.castShadow){let V=L.shadow,z=t.get(L);z.shadowIntensity=V.intensity,z.shadowBias=V.bias,z.shadowNormalBias=V.normalBias,z.shadowRadius=V.radius,z.shadowMapSize=V.mapSize,z.shadowCameraNear=V.camera.near,z.shadowCameraFar=V.camera.far,n.pointShadow[x]=z,n.pointShadowMap[x]=T,n.pointShadowMatrix[x]=L.shadow.matrix,v++}n.point[x]=C,x++}else if(L.isHemisphereLight){let C=e.get(L);C.skyColor.copy(L.color).multiplyScalar(F),C.groundColor.copy(L.groundColor).multiplyScalar(F),n.hemi[p]=C,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_e.LTC_FLOAT_1,n.rectAreaLTC2=_e.LTC_FLOAT_2):(n.rectAreaLTC1=_e.LTC_HALF_1,n.rectAreaLTC2=_e.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let I=n.hash;(I.directionalLength!==f||I.pointLength!==x||I.spotLength!==m||I.rectAreaLength!==g||I.hemiLength!==p||I.numDirectionalShadows!==_||I.numPointShadows!==v||I.numSpotShadows!==y||I.numSpotMaps!==S||I.numLightProbes!==w)&&(n.directional.length=f,n.spot.length=m,n.rectArea.length=g,n.point.length=x,n.hemi.length=p,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=y+S-E,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=w,I.directionalLength=f,I.pointLength=x,I.spotLength=m,I.rectAreaLength=g,I.hemiLength=p,I.numDirectionalShadows=_,I.numPointShadows=v,I.numSpotShadows=y,I.numSpotMaps=S,I.numLightProbes=w,n.version=xM++)}function l(c,h){let u=0,d=0,f=0,x=0,m=0,g=h.matrixWorldInverse;for(let p=0,_=c.length;p<_;p++){let v=c[p];if(v.isDirectionalLight){let y=n.directional[u];y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),u++}else if(v.isSpotLight){let y=n.spot[f];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),f++}else if(v.isRectAreaLight){let y=n.rectArea[x];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),o.identity(),r.copy(v.matrixWorld),r.premultiply(g),o.extractRotation(r),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),x++}else if(v.isPointLight){let y=n.point[d];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),d++}else if(v.isHemisphereLight){let y=n.hemi[m];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:n}}function sf(i){let e=new yM(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function vM(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new sf(i),e.set(s,[a])):r>=o.length?(a=new sf(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var eh=class extends fn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=fg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},th=class extends fn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},MM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bM=`uniform sampler2D shadow_pass;
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
}`;function EM(i,e,t){let n=new ao,s=new Te,r=new Te,o=new ct,a=new eh({depthPacking:pg}),l=new th,c={},h=t.maxTextureSize,u={[Jn]:Qt,[Qt]:Jn,[gt]:gt},d=new It({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Te},radius:{value:4}},vertexShader:MM,fragmentShader:bM}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let x=new lt;x.setAttribute("position",new et(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let m=new ge(x,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cf;let p=this.type;this.render=function(E,w,I){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;let b=i.getRenderTarget(),M=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),k=i.state;k.setBlending($n),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let F=p!==mi&&this.type===mi,H=p===mi&&this.type!==mi;for(let T=0,C=E.length;T<C;T++){let V=E[T],z=V.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);let D=z.getFrameExtents();if(s.multiply(D),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/D.x),s.x=r.x*D.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/D.y),s.y=r.y*D.y,z.mapSize.y=r.y)),z.map===null||F===!0||H===!0){let J=this.type!==mi?{minFilter:en,magFilter:en}:{};z.map!==null&&z.map.dispose(),z.map=new on(s.x,s.y,J),z.map.texture.name=V.name+".shadowMap",z.camera.updateProjectionMatrix()}i.setRenderTarget(z.map),i.clear();let B=z.getViewportCount();for(let J=0;J<B;J++){let ce=z.getViewport(J);o.set(r.x*ce.x,r.y*ce.y,r.x*ce.z,r.y*ce.w),k.viewport(o),z.updateMatrices(V,J),n=z.getFrustum(),y(w,I,z.camera,V,this.type)}z.isPointLightShadow!==!0&&this.type===mi&&_(z,I),z.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(b,M,L)};function _(E,w){let I=e.update(m);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new on(s.x,s.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(w,null,I,d,m,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(w,null,I,f,m,null)}function v(E,w,I,b){let M=null,L=I.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(L!==void 0)M=L;else if(M=I.isPointLight===!0?l:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let k=M.uuid,F=w.uuid,H=c[k];H===void 0&&(H={},c[k]=H);let T=H[F];T===void 0&&(T=M.clone(),H[F]=T,w.addEventListener("dispose",S)),M=T}if(M.visible=w.visible,M.wireframe=w.wireframe,b===mi?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:u[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,I.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let k=i.properties.get(M);k.light=I}return M}function y(E,w,I,b,M){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===mi)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,E.matrixWorld);let F=e.update(E),H=E.material;if(Array.isArray(H)){let T=F.groups;for(let C=0,V=T.length;C<V;C++){let z=T[C],D=H[z.materialIndex];if(D&&D.visible){let B=v(E,D,b,M);E.onBeforeShadow(i,E,w,I,F,B,z),i.renderBufferDirect(I,null,F,B,E,z),E.onAfterShadow(i,E,w,I,F,B,z)}}}else if(H.visible){let T=v(E,H,b,M);E.onBeforeShadow(i,E,w,I,F,T,null),i.renderBufferDirect(I,null,F,T,E,null),E.onAfterShadow(i,E,w,I,F,T,null)}}let k=E.children;for(let F=0,H=k.length;F<H;F++)y(k[F],w,I,b,M)}function S(E){E.target.removeEventListener("dispose",S);for(let I in c){let b=c[I],M=E.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}var SM={[ac]:lc,[cc]:dc,[hc]:fc,[ar]:uc,[lc]:ac,[dc]:cc,[fc]:hc,[uc]:ar};function wM(i,e){function t(){let G=!1,ve=new ct,j=null,oe=new ct(0,0,0,0);return{setMask:function(we){j!==we&&!G&&(i.colorMask(we,we,we,we),j=we)},setLocked:function(we){G=we},setClear:function(we,be,qe,Nt,Zt){Zt===!0&&(we*=Nt,be*=Nt,qe*=Nt),ve.set(we,be,qe,Nt),oe.equals(ve)===!1&&(i.clearColor(we,be,qe,Nt),oe.copy(ve))},reset:function(){G=!1,j=null,oe.set(-1,0,0,0)}}}function n(){let G=!1,ve=!1,j=null,oe=null,we=null;return{setReversed:function(be){if(ve!==be){let qe=e.get("EXT_clip_control");ve?qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.ZERO_TO_ONE_EXT):qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.NEGATIVE_ONE_TO_ONE_EXT);let Nt=we;we=null,this.setClear(Nt)}ve=be},getReversed:function(){return ve},setTest:function(be){be?K(i.DEPTH_TEST):de(i.DEPTH_TEST)},setMask:function(be){j!==be&&!G&&(i.depthMask(be),j=be)},setFunc:function(be){if(ve&&(be=SM[be]),oe!==be){switch(be){case ac:i.depthFunc(i.NEVER);break;case lc:i.depthFunc(i.ALWAYS);break;case cc:i.depthFunc(i.LESS);break;case ar:i.depthFunc(i.LEQUAL);break;case hc:i.depthFunc(i.EQUAL);break;case uc:i.depthFunc(i.GEQUAL);break;case dc:i.depthFunc(i.GREATER);break;case fc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}oe=be}},setLocked:function(be){G=be},setClear:function(be){we!==be&&(ve&&(be=1-be),i.clearDepth(be),we=be)},reset:function(){G=!1,j=null,oe=null,we=null,ve=!1}}}function s(){let G=!1,ve=null,j=null,oe=null,we=null,be=null,qe=null,Nt=null,Zt=null;return{setTest:function(xt){G||(xt?K(i.STENCIL_TEST):de(i.STENCIL_TEST))},setMask:function(xt){ve!==xt&&!G&&(i.stencilMask(xt),ve=xt)},setFunc:function(xt,Dn,ai){(j!==xt||oe!==Dn||we!==ai)&&(i.stencilFunc(xt,Dn,ai),j=xt,oe=Dn,we=ai)},setOp:function(xt,Dn,ai){(be!==xt||qe!==Dn||Nt!==ai)&&(i.stencilOp(xt,Dn,ai),be=xt,qe=Dn,Nt=ai)},setLocked:function(xt){G=xt},setClear:function(xt){Zt!==xt&&(i.clearStencil(xt),Zt=xt)},reset:function(){G=!1,ve=null,j=null,oe=null,we=null,be=null,qe=null,Nt=null,Zt=null}}}let r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,f=[],x=null,m=!1,g=null,p=null,_=null,v=null,y=null,S=null,E=null,w=new Se(0,0,0),I=0,b=!1,M=null,L=null,k=null,F=null,H=null,T=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),C=!1,V=0,z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(z)[1]),C=V>=1):z.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),C=V>=2);let D=null,B={},J=i.getParameter(i.SCISSOR_BOX),ce=i.getParameter(i.VIEWPORT),ue=new ct().fromArray(J),q=new ct().fromArray(ce);function ee(G,ve,j,oe){let we=new Uint8Array(4),be=i.createTexture();i.bindTexture(G,be),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let qe=0;qe<j;qe++)G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?i.texImage3D(ve,0,i.RGBA,1,1,oe,0,i.RGBA,i.UNSIGNED_BYTE,we):i.texImage2D(ve+qe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,we);return be}let te={};te[i.TEXTURE_2D]=ee(i.TEXTURE_2D,i.TEXTURE_2D,1),te[i.TEXTURE_CUBE_MAP]=ee(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[i.TEXTURE_2D_ARRAY]=ee(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),te[i.TEXTURE_3D]=ee(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),K(i.DEPTH_TEST),o.setFunc(ar),Q(!1),ze(ld),K(i.CULL_FACE),A($n);function K(G){h[G]!==!0&&(i.enable(G),h[G]=!0)}function de(G){h[G]!==!1&&(i.disable(G),h[G]=!1)}function ae(G,ve){return u[G]!==ve?(i.bindFramebuffer(G,ve),u[G]=ve,G===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ve),G===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ve),!0):!1}function pe(G,ve){let j=f,oe=!1;if(G){j=d.get(ve),j===void 0&&(j=[],d.set(ve,j));let we=G.textures;if(j.length!==we.length||j[0]!==i.COLOR_ATTACHMENT0){for(let be=0,qe=we.length;be<qe;be++)j[be]=i.COLOR_ATTACHMENT0+be;j.length=we.length,oe=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,oe=!0);oe&&i.drawBuffers(j)}function he(G){return x!==G?(i.useProgram(G),x=G,!0):!1}let fe={[gs]:i.FUNC_ADD,[W0]:i.FUNC_SUBTRACT,[X0]:i.FUNC_REVERSE_SUBTRACT};fe[Y0]=i.MIN,fe[q0]=i.MAX;let Ae={[K0]:i.ZERO,[Z0]:i.ONE,[$0]:i.SRC_COLOR,[rc]:i.SRC_ALPHA,[ng]:i.SRC_ALPHA_SATURATE,[eg]:i.DST_COLOR,[j0]:i.DST_ALPHA,[J0]:i.ONE_MINUS_SRC_COLOR,[oc]:i.ONE_MINUS_SRC_ALPHA,[tg]:i.ONE_MINUS_DST_COLOR,[Q0]:i.ONE_MINUS_DST_ALPHA,[ig]:i.CONSTANT_COLOR,[sg]:i.ONE_MINUS_CONSTANT_COLOR,[rg]:i.CONSTANT_ALPHA,[og]:i.ONE_MINUS_CONSTANT_ALPHA};function A(G,ve,j,oe,we,be,qe,Nt,Zt,xt){if(G===$n){m===!0&&(de(i.BLEND),m=!1);return}if(m===!1&&(K(i.BLEND),m=!0),G!==G0){if(G!==g||xt!==b){if((p!==gs||y!==gs)&&(i.blendEquation(i.FUNC_ADD),p=gs,y=gs),xt)switch(G){case ir:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ht:i.blendFunc(i.ONE,i.ONE);break;case cd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case hd:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case ir:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ht:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case cd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case hd:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}_=null,v=null,S=null,E=null,w.set(0,0,0),I=0,g=G,b=xt}return}we=we||ve,be=be||j,qe=qe||oe,(ve!==p||we!==y)&&(i.blendEquationSeparate(fe[ve],fe[we]),p=ve,y=we),(j!==_||oe!==v||be!==S||qe!==E)&&(i.blendFuncSeparate(Ae[j],Ae[oe],Ae[be],Ae[qe]),_=j,v=oe,S=be,E=qe),(Nt.equals(w)===!1||Zt!==I)&&(i.blendColor(Nt.r,Nt.g,Nt.b,Zt),w.copy(Nt),I=Zt),g=G,b=!1}function ye(G,ve){G.side===gt?de(i.CULL_FACE):K(i.CULL_FACE);let j=G.side===Qt;ve&&(j=!j),Q(j),G.blending===ir&&G.transparent===!1?A($n):A(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),r.setMask(G.colorWrite);let oe=G.stencilWrite;a.setTest(oe),oe&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Pe(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?K(i.SAMPLE_ALPHA_TO_COVERAGE):de(i.SAMPLE_ALPHA_TO_COVERAGE)}function Q(G){M!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),M=G)}function ze(G){G!==H0?(K(i.CULL_FACE),G!==L&&(G===ld?i.cullFace(i.BACK):G===V0?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):de(i.CULL_FACE),L=G}function le(G){G!==k&&(C&&i.lineWidth(G),k=G)}function Pe(G,ve,j){G?(K(i.POLYGON_OFFSET_FILL),(F!==ve||H!==j)&&(i.polygonOffset(ve,j),F=ve,H=j)):de(i.POLYGON_OFFSET_FILL)}function De(G){G?K(i.SCISSOR_TEST):de(i.SCISSOR_TEST)}function N(G){G===void 0&&(G=i.TEXTURE0+T-1),D!==G&&(i.activeTexture(G),D=G)}function R(G,ve,j){j===void 0&&(D===null?j=i.TEXTURE0+T-1:j=D);let oe=B[j];oe===void 0&&(oe={type:void 0,texture:void 0},B[j]=oe),(oe.type!==G||oe.texture!==ve)&&(D!==j&&(i.activeTexture(j),D=j),i.bindTexture(G,ve||te[G]),oe.type=G,oe.texture=ve)}function Y(){let G=B[D];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function ie(){try{i.compressedTexImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function se(){try{i.compressedTexImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ne(){try{i.texSubImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Fe(){try{i.texSubImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Me(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Re(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function rt(){try{i.texStorage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function me(){try{i.texStorage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ce(){try{i.texImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function He(){try{i.texImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ve(G){ue.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),ue.copy(G))}function Ie(G){q.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),q.copy(G))}function st(G,ve){let j=c.get(ve);j===void 0&&(j=new WeakMap,c.set(ve,j));let oe=j.get(G);oe===void 0&&(oe=i.getUniformBlockIndex(ve,G.name),j.set(G,oe))}function Je(G,ve){let oe=c.get(ve).get(G);l.get(ve)!==oe&&(i.uniformBlockBinding(ve,oe,G.__bindingPointIndex),l.set(ve,oe))}function Et(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},D=null,B={},u={},d=new WeakMap,f=[],x=null,m=!1,g=null,p=null,_=null,v=null,y=null,S=null,E=null,w=new Se(0,0,0),I=0,b=!1,M=null,L=null,k=null,F=null,H=null,ue.set(0,0,i.canvas.width,i.canvas.height),q.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:K,disable:de,bindFramebuffer:ae,drawBuffers:pe,useProgram:he,setBlending:A,setMaterial:ye,setFlipSided:Q,setCullFace:ze,setLineWidth:le,setPolygonOffset:Pe,setScissorTest:De,activeTexture:N,bindTexture:R,unbindTexture:Y,compressedTexImage2D:ie,compressedTexImage3D:se,texImage2D:Ce,texImage3D:He,updateUBOMapping:st,uniformBlockBinding:Je,texStorage2D:rt,texStorage3D:me,texSubImage2D:ne,texSubImage3D:Fe,compressedTexSubImage2D:Me,compressedTexSubImage3D:Re,scissor:Ve,viewport:Ie,reset:Et}}function rf(i,e,t,n){let s=TM(n);switch(t){case Of:return i*e;case zf:return i*e;case Ff:return i*e*2;case Ih:return i*e/s.components*s.byteLength;case Ph:return i*e/s.components*s.byteLength;case kf:return i*e*2/s.components*s.byteLength;case Lh:return i*e*2/s.components*s.byteLength;case Uf:return i*e*3/s.components*s.byteLength;case Tn:return i*e*4/s.components*s.byteLength;case Dh:return i*e*4/s.components*s.byteLength;case aa:case la:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ca:case ha:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case xc:case yc:return Math.max(i,16)*Math.max(e,8)/4;case gc:case _c:return Math.max(i,8)*Math.max(e,8)/2;case vc:case Mc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case bc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ec:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Sc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case wc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Tc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ac:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Rc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Cc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ic:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Pc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Lc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Dc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Nc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Oc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Uc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ua:case zc:case Fc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Bf:case kc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Bc:case Hc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function TM(i){switch(i){case yi:case Lf:return{byteLength:1,components:1};case so:case Df:case Vn:return{byteLength:2,components:1};case Rh:case Ch:return{byteLength:2,components:4};case _s:case Ah:case Bn:return{byteLength:4,components:1};case Nf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function AM(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Te,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(N,R){return f?new OffscreenCanvas(N,R):ro("canvas")}function m(N,R,Y){let ie=1,se=De(N);if((se.width>Y||se.height>Y)&&(ie=Y/Math.max(se.width,se.height)),ie<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){let ne=Math.floor(ie*se.width),Fe=Math.floor(ie*se.height);u===void 0&&(u=x(ne,Fe));let Me=R?x(ne,Fe):u;return Me.width=ne,Me.height=Fe,Me.getContext("2d").drawImage(N,0,0,ne,Fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+ne+"x"+Fe+")."),Me}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),N;return N}function g(N){return N.generateMipmaps}function p(N){i.generateMipmap(N)}function _(N){return N.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?i.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(N,R,Y,ie,se=!1){if(N!==null){if(i[N]!==void 0)return i[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ne=R;if(R===i.RED&&(Y===i.FLOAT&&(ne=i.R32F),Y===i.HALF_FLOAT&&(ne=i.R16F),Y===i.UNSIGNED_BYTE&&(ne=i.R8)),R===i.RED_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ne=i.R8UI),Y===i.UNSIGNED_SHORT&&(ne=i.R16UI),Y===i.UNSIGNED_INT&&(ne=i.R32UI),Y===i.BYTE&&(ne=i.R8I),Y===i.SHORT&&(ne=i.R16I),Y===i.INT&&(ne=i.R32I)),R===i.RG&&(Y===i.FLOAT&&(ne=i.RG32F),Y===i.HALF_FLOAT&&(ne=i.RG16F),Y===i.UNSIGNED_BYTE&&(ne=i.RG8)),R===i.RG_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ne=i.RG8UI),Y===i.UNSIGNED_SHORT&&(ne=i.RG16UI),Y===i.UNSIGNED_INT&&(ne=i.RG32UI),Y===i.BYTE&&(ne=i.RG8I),Y===i.SHORT&&(ne=i.RG16I),Y===i.INT&&(ne=i.RG32I)),R===i.RGB_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ne=i.RGB8UI),Y===i.UNSIGNED_SHORT&&(ne=i.RGB16UI),Y===i.UNSIGNED_INT&&(ne=i.RGB32UI),Y===i.BYTE&&(ne=i.RGB8I),Y===i.SHORT&&(ne=i.RGB16I),Y===i.INT&&(ne=i.RGB32I)),R===i.RGBA_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ne=i.RGBA8UI),Y===i.UNSIGNED_SHORT&&(ne=i.RGBA16UI),Y===i.UNSIGNED_INT&&(ne=i.RGBA32UI),Y===i.BYTE&&(ne=i.RGBA8I),Y===i.SHORT&&(ne=i.RGBA16I),Y===i.INT&&(ne=i.RGBA32I)),R===i.RGB&&Y===i.UNSIGNED_INT_5_9_9_9_REV&&(ne=i.RGB9_E5),R===i.RGBA){let Fe=se?Ga:Qe.getTransfer(ie);Y===i.FLOAT&&(ne=i.RGBA32F),Y===i.HALF_FLOAT&&(ne=i.RGBA16F),Y===i.UNSIGNED_BYTE&&(ne=Fe===pt?i.SRGB8_ALPHA8:i.RGBA8),Y===i.UNSIGNED_SHORT_4_4_4_4&&(ne=i.RGBA4),Y===i.UNSIGNED_SHORT_5_5_5_1&&(ne=i.RGB5_A1)}return(ne===i.R16F||ne===i.R32F||ne===i.RG16F||ne===i.RG32F||ne===i.RGBA16F||ne===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function y(N,R){let Y;return N?R===null||R===_s||R===hr?Y=i.DEPTH24_STENCIL8:R===Bn?Y=i.DEPTH32F_STENCIL8:R===so&&(Y=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===_s||R===hr?Y=i.DEPTH_COMPONENT24:R===Bn?Y=i.DEPTH_COMPONENT32F:R===so&&(Y=i.DEPTH_COMPONENT16),Y}function S(N,R){return g(N)===!0||N.isFramebufferTexture&&N.minFilter!==en&&N.minFilter!==un?Math.log2(Math.max(R.width,R.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?R.mipmaps.length:1}function E(N){let R=N.target;R.removeEventListener("dispose",E),I(R),R.isVideoTexture&&h.delete(R)}function w(N){let R=N.target;R.removeEventListener("dispose",w),M(R)}function I(N){let R=n.get(N);if(R.__webglInit===void 0)return;let Y=N.source,ie=d.get(Y);if(ie){let se=ie[R.__cacheKey];se.usedTimes--,se.usedTimes===0&&b(N),Object.keys(ie).length===0&&d.delete(Y)}n.remove(N)}function b(N){let R=n.get(N);i.deleteTexture(R.__webglTexture);let Y=N.source,ie=d.get(Y);delete ie[R.__cacheKey],o.memory.textures--}function M(N){let R=n.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),n.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(R.__webglFramebuffer[ie]))for(let se=0;se<R.__webglFramebuffer[ie].length;se++)i.deleteFramebuffer(R.__webglFramebuffer[ie][se]);else i.deleteFramebuffer(R.__webglFramebuffer[ie]);R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer[ie])}else{if(Array.isArray(R.__webglFramebuffer))for(let ie=0;ie<R.__webglFramebuffer.length;ie++)i.deleteFramebuffer(R.__webglFramebuffer[ie]);else i.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&i.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let ie=0;ie<R.__webglColorRenderbuffer.length;ie++)R.__webglColorRenderbuffer[ie]&&i.deleteRenderbuffer(R.__webglColorRenderbuffer[ie]);R.__webglDepthRenderbuffer&&i.deleteRenderbuffer(R.__webglDepthRenderbuffer)}let Y=N.textures;for(let ie=0,se=Y.length;ie<se;ie++){let ne=n.get(Y[ie]);ne.__webglTexture&&(i.deleteTexture(ne.__webglTexture),o.memory.textures--),n.remove(Y[ie])}n.remove(N)}let L=0;function k(){L=0}function F(){let N=L;return N>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+s.maxTextures),L+=1,N}function H(N){let R=[];return R.push(N.wrapS),R.push(N.wrapT),R.push(N.wrapR||0),R.push(N.magFilter),R.push(N.minFilter),R.push(N.anisotropy),R.push(N.internalFormat),R.push(N.format),R.push(N.type),R.push(N.generateMipmaps),R.push(N.premultiplyAlpha),R.push(N.flipY),R.push(N.unpackAlignment),R.push(N.colorSpace),R.join()}function T(N,R){let Y=n.get(N);if(N.isVideoTexture&&le(N),N.isRenderTargetTexture===!1&&N.version>0&&Y.__version!==N.version){let ie=N.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(Y,N,R);return}}t.bindTexture(i.TEXTURE_2D,Y.__webglTexture,i.TEXTURE0+R)}function C(N,R){let Y=n.get(N);if(N.version>0&&Y.__version!==N.version){q(Y,N,R);return}t.bindTexture(i.TEXTURE_2D_ARRAY,Y.__webglTexture,i.TEXTURE0+R)}function V(N,R){let Y=n.get(N);if(N.version>0&&Y.__version!==N.version){q(Y,N,R);return}t.bindTexture(i.TEXTURE_3D,Y.__webglTexture,i.TEXTURE0+R)}function z(N,R){let Y=n.get(N);if(N.version>0&&Y.__version!==N.version){ee(Y,N,R);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture,i.TEXTURE0+R)}let D={[dn]:i.REPEAT,[gi]:i.CLAMP_TO_EDGE,[io]:i.MIRRORED_REPEAT},B={[en]:i.NEAREST,[Th]:i.NEAREST_MIPMAP_NEAREST,[Qs]:i.NEAREST_MIPMAP_LINEAR,[un]:i.LINEAR,[Qr]:i.LINEAR_MIPMAP_NEAREST,[wn]:i.LINEAR_MIPMAP_LINEAR},J={[gg]:i.NEVER,[bg]:i.ALWAYS,[xg]:i.LESS,[Gf]:i.LEQUAL,[_g]:i.EQUAL,[Mg]:i.GEQUAL,[yg]:i.GREATER,[vg]:i.NOTEQUAL};function ce(N,R){if(R.type===Bn&&e.has("OES_texture_float_linear")===!1&&(R.magFilter===un||R.magFilter===Qr||R.magFilter===Qs||R.magFilter===wn||R.minFilter===un||R.minFilter===Qr||R.minFilter===Qs||R.minFilter===wn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(N,i.TEXTURE_WRAP_S,D[R.wrapS]),i.texParameteri(N,i.TEXTURE_WRAP_T,D[R.wrapT]),(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)&&i.texParameteri(N,i.TEXTURE_WRAP_R,D[R.wrapR]),i.texParameteri(N,i.TEXTURE_MAG_FILTER,B[R.magFilter]),i.texParameteri(N,i.TEXTURE_MIN_FILTER,B[R.minFilter]),R.compareFunction&&(i.texParameteri(N,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(N,i.TEXTURE_COMPARE_FUNC,J[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===en||R.minFilter!==Qs&&R.minFilter!==wn||R.type===Bn&&e.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||n.get(R).__currentAnisotropy){let Y=e.get("EXT_texture_filter_anisotropic");i.texParameterf(N,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,s.getMaxAnisotropy())),n.get(R).__currentAnisotropy=R.anisotropy}}}function ue(N,R){let Y=!1;N.__webglInit===void 0&&(N.__webglInit=!0,R.addEventListener("dispose",E));let ie=R.source,se=d.get(ie);se===void 0&&(se={},d.set(ie,se));let ne=H(R);if(ne!==N.__cacheKey){se[ne]===void 0&&(se[ne]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),se[ne].usedTimes++;let Fe=se[N.__cacheKey];Fe!==void 0&&(se[N.__cacheKey].usedTimes--,Fe.usedTimes===0&&b(R)),N.__cacheKey=ne,N.__webglTexture=se[ne].texture}return Y}function q(N,R,Y){let ie=i.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(ie=i.TEXTURE_2D_ARRAY),R.isData3DTexture&&(ie=i.TEXTURE_3D);let se=ue(N,R),ne=R.source;t.bindTexture(ie,N.__webglTexture,i.TEXTURE0+Y);let Fe=n.get(ne);if(ne.version!==Fe.__version||se===!0){t.activeTexture(i.TEXTURE0+Y);let Me=Qe.getPrimaries(Qe.workingColorSpace),Re=R.colorSpace===Oi?null:Qe.getPrimaries(R.colorSpace),rt=R.colorSpace===Oi||Me===Re?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);let me=m(R.image,!1,s.maxTextureSize);me=Pe(R,me);let Ce=r.convert(R.format,R.colorSpace),He=r.convert(R.type),Ve=v(R.internalFormat,Ce,He,R.colorSpace,R.isVideoTexture);ce(ie,R);let Ie,st=R.mipmaps,Je=R.isVideoTexture!==!0,Et=Fe.__version===void 0||se===!0,G=ne.dataReady,ve=S(R,me);if(R.isDepthTexture)Ve=y(R.format===ur,R.type),Et&&(Je?t.texStorage2D(i.TEXTURE_2D,1,Ve,me.width,me.height):t.texImage2D(i.TEXTURE_2D,0,Ve,me.width,me.height,0,Ce,He,null));else if(R.isDataTexture)if(st.length>0){Je&&Et&&t.texStorage2D(i.TEXTURE_2D,ve,Ve,st[0].width,st[0].height);for(let j=0,oe=st.length;j<oe;j++)Ie=st[j],Je?G&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,Ie.width,Ie.height,Ce,He,Ie.data):t.texImage2D(i.TEXTURE_2D,j,Ve,Ie.width,Ie.height,0,Ce,He,Ie.data);R.generateMipmaps=!1}else Je?(Et&&t.texStorage2D(i.TEXTURE_2D,ve,Ve,me.width,me.height),G&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,me.width,me.height,Ce,He,me.data)):t.texImage2D(i.TEXTURE_2D,0,Ve,me.width,me.height,0,Ce,He,me.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){Je&&Et&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,Ve,st[0].width,st[0].height,me.depth);for(let j=0,oe=st.length;j<oe;j++)if(Ie=st[j],R.format!==Tn)if(Ce!==null)if(Je){if(G)if(R.layerUpdates.size>0){let we=rf(Ie.width,Ie.height,R.format,R.type);for(let be of R.layerUpdates){let qe=Ie.data.subarray(be*we/Ie.data.BYTES_PER_ELEMENT,(be+1)*we/Ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,be,Ie.width,Ie.height,1,Ce,qe)}R.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,Ie.width,Ie.height,me.depth,Ce,Ie.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,Ve,Ie.width,Ie.height,me.depth,0,Ie.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Je?G&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,Ie.width,Ie.height,me.depth,Ce,He,Ie.data):t.texImage3D(i.TEXTURE_2D_ARRAY,j,Ve,Ie.width,Ie.height,me.depth,0,Ce,He,Ie.data)}else{Je&&Et&&t.texStorage2D(i.TEXTURE_2D,ve,Ve,st[0].width,st[0].height);for(let j=0,oe=st.length;j<oe;j++)Ie=st[j],R.format!==Tn?Ce!==null?Je?G&&t.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,Ie.width,Ie.height,Ce,Ie.data):t.compressedTexImage2D(i.TEXTURE_2D,j,Ve,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?G&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,Ie.width,Ie.height,Ce,He,Ie.data):t.texImage2D(i.TEXTURE_2D,j,Ve,Ie.width,Ie.height,0,Ce,He,Ie.data)}else if(R.isDataArrayTexture)if(Je){if(Et&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,Ve,me.width,me.height,me.depth),G)if(R.layerUpdates.size>0){let j=rf(me.width,me.height,R.format,R.type);for(let oe of R.layerUpdates){let we=me.data.subarray(oe*j/me.data.BYTES_PER_ELEMENT,(oe+1)*j/me.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,oe,me.width,me.height,1,Ce,He,we)}R.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,Ce,He,me.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ve,me.width,me.height,me.depth,0,Ce,He,me.data);else if(R.isData3DTexture)Je?(Et&&t.texStorage3D(i.TEXTURE_3D,ve,Ve,me.width,me.height,me.depth),G&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,Ce,He,me.data)):t.texImage3D(i.TEXTURE_3D,0,Ve,me.width,me.height,me.depth,0,Ce,He,me.data);else if(R.isFramebufferTexture){if(Et)if(Je)t.texStorage2D(i.TEXTURE_2D,ve,Ve,me.width,me.height);else{let j=me.width,oe=me.height;for(let we=0;we<ve;we++)t.texImage2D(i.TEXTURE_2D,we,Ve,j,oe,0,Ce,He,null),j>>=1,oe>>=1}}else if(st.length>0){if(Je&&Et){let j=De(st[0]);t.texStorage2D(i.TEXTURE_2D,ve,Ve,j.width,j.height)}for(let j=0,oe=st.length;j<oe;j++)Ie=st[j],Je?G&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,Ce,He,Ie):t.texImage2D(i.TEXTURE_2D,j,Ve,Ce,He,Ie);R.generateMipmaps=!1}else if(Je){if(Et){let j=De(me);t.texStorage2D(i.TEXTURE_2D,ve,Ve,j.width,j.height)}G&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ce,He,me)}else t.texImage2D(i.TEXTURE_2D,0,Ve,Ce,He,me);g(R)&&p(ie),Fe.__version=ne.version,R.onUpdate&&R.onUpdate(R)}N.__version=R.version}function ee(N,R,Y){if(R.image.length!==6)return;let ie=ue(N,R),se=R.source;t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+Y);let ne=n.get(se);if(se.version!==ne.__version||ie===!0){t.activeTexture(i.TEXTURE0+Y);let Fe=Qe.getPrimaries(Qe.workingColorSpace),Me=R.colorSpace===Oi?null:Qe.getPrimaries(R.colorSpace),Re=R.colorSpace===Oi||Fe===Me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);let rt=R.isCompressedTexture||R.image[0].isCompressedTexture,me=R.image[0]&&R.image[0].isDataTexture,Ce=[];for(let oe=0;oe<6;oe++)!rt&&!me?Ce[oe]=m(R.image[oe],!0,s.maxCubemapSize):Ce[oe]=me?R.image[oe].image:R.image[oe],Ce[oe]=Pe(R,Ce[oe]);let He=Ce[0],Ve=r.convert(R.format,R.colorSpace),Ie=r.convert(R.type),st=v(R.internalFormat,Ve,Ie,R.colorSpace),Je=R.isVideoTexture!==!0,Et=ne.__version===void 0||ie===!0,G=se.dataReady,ve=S(R,He);ce(i.TEXTURE_CUBE_MAP,R);let j;if(rt){Je&&Et&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ve,st,He.width,He.height);for(let oe=0;oe<6;oe++){j=Ce[oe].mipmaps;for(let we=0;we<j.length;we++){let be=j[we];R.format!==Tn?Ve!==null?Je?G&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,we,0,0,be.width,be.height,Ve,be.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,we,st,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Je?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,we,0,0,be.width,be.height,Ve,Ie,be.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,we,st,be.width,be.height,0,Ve,Ie,be.data)}}}else{if(j=R.mipmaps,Je&&Et){j.length>0&&ve++;let oe=De(Ce[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ve,st,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(me){Je?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Ce[oe].width,Ce[oe].height,Ve,Ie,Ce[oe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,st,Ce[oe].width,Ce[oe].height,0,Ve,Ie,Ce[oe].data);for(let we=0;we<j.length;we++){let qe=j[we].image[oe].image;Je?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,we+1,0,0,qe.width,qe.height,Ve,Ie,qe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,we+1,st,qe.width,qe.height,0,Ve,Ie,qe.data)}}else{Je?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Ve,Ie,Ce[oe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,st,Ve,Ie,Ce[oe]);for(let we=0;we<j.length;we++){let be=j[we];Je?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,we+1,0,0,Ve,Ie,be.image[oe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,we+1,st,Ve,Ie,be.image[oe])}}}g(R)&&p(i.TEXTURE_CUBE_MAP),ne.__version=se.version,R.onUpdate&&R.onUpdate(R)}N.__version=R.version}function te(N,R,Y,ie,se,ne){let Fe=r.convert(Y.format,Y.colorSpace),Me=r.convert(Y.type),Re=v(Y.internalFormat,Fe,Me,Y.colorSpace),rt=n.get(R),me=n.get(Y);if(me.__renderTarget=R,!rt.__hasExternalTextures){let Ce=Math.max(1,R.width>>ne),He=Math.max(1,R.height>>ne);se===i.TEXTURE_3D||se===i.TEXTURE_2D_ARRAY?t.texImage3D(se,ne,Re,Ce,He,R.depth,0,Fe,Me,null):t.texImage2D(se,ne,Re,Ce,He,0,Fe,Me,null)}t.bindFramebuffer(i.FRAMEBUFFER,N),ze(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,se,me.__webglTexture,0,Q(R)):(se===i.TEXTURE_2D||se>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ie,se,me.__webglTexture,ne),t.bindFramebuffer(i.FRAMEBUFFER,null)}function K(N,R,Y){if(i.bindRenderbuffer(i.RENDERBUFFER,N),R.depthBuffer){let ie=R.depthTexture,se=ie&&ie.isDepthTexture?ie.type:null,ne=y(R.stencilBuffer,se),Fe=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Me=Q(R);ze(R)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Me,ne,R.width,R.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,Me,ne,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,ne,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Fe,i.RENDERBUFFER,N)}else{let ie=R.textures;for(let se=0;se<ie.length;se++){let ne=ie[se],Fe=r.convert(ne.format,ne.colorSpace),Me=r.convert(ne.type),Re=v(ne.internalFormat,Fe,Me,ne.colorSpace),rt=Q(R);Y&&ze(R)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,rt,Re,R.width,R.height):ze(R)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,rt,Re,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,Re,R.width,R.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function de(N,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,N),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let ie=n.get(R.depthTexture);ie.__renderTarget=R,(!ie.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),T(R.depthTexture,0);let se=ie.__webglTexture,ne=Q(R);if(R.depthTexture.format===sr)ze(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,se,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,se,0);else if(R.depthTexture.format===ur)ze(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,se,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function ae(N){let R=n.get(N),Y=N.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==N.depthTexture){let ie=N.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),ie){let se=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,ie.removeEventListener("dispose",se)};ie.addEventListener("dispose",se),R.__depthDisposeCallback=se}R.__boundDepthTexture=ie}if(N.depthTexture&&!R.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");de(R.__webglFramebuffer,N)}else if(Y){R.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(t.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer[ie]),R.__webglDepthbuffer[ie]===void 0)R.__webglDepthbuffer[ie]=i.createRenderbuffer(),K(R.__webglDepthbuffer[ie],N,!1);else{let se=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=R.__webglDepthbuffer[ie];i.bindRenderbuffer(i.RENDERBUFFER,ne),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,ne)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=i.createRenderbuffer(),K(R.__webglDepthbuffer,N,!1);else{let ie=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=R.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,se),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,se)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function pe(N,R,Y){let ie=n.get(N);R!==void 0&&te(ie.__webglFramebuffer,N,N.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Y!==void 0&&ae(N)}function he(N){let R=N.texture,Y=n.get(N),ie=n.get(R);N.addEventListener("dispose",w);let se=N.textures,ne=N.isWebGLCubeRenderTarget===!0,Fe=se.length>1;if(Fe||(ie.__webglTexture===void 0&&(ie.__webglTexture=i.createTexture()),ie.__version=R.version,o.memory.textures++),ne){Y.__webglFramebuffer=[];for(let Me=0;Me<6;Me++)if(R.mipmaps&&R.mipmaps.length>0){Y.__webglFramebuffer[Me]=[];for(let Re=0;Re<R.mipmaps.length;Re++)Y.__webglFramebuffer[Me][Re]=i.createFramebuffer()}else Y.__webglFramebuffer[Me]=i.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){Y.__webglFramebuffer=[];for(let Me=0;Me<R.mipmaps.length;Me++)Y.__webglFramebuffer[Me]=i.createFramebuffer()}else Y.__webglFramebuffer=i.createFramebuffer();if(Fe)for(let Me=0,Re=se.length;Me<Re;Me++){let rt=n.get(se[Me]);rt.__webglTexture===void 0&&(rt.__webglTexture=i.createTexture(),o.memory.textures++)}if(N.samples>0&&ze(N)===!1){Y.__webglMultisampledFramebuffer=i.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Me=0;Me<se.length;Me++){let Re=se[Me];Y.__webglColorRenderbuffer[Me]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Y.__webglColorRenderbuffer[Me]);let rt=r.convert(Re.format,Re.colorSpace),me=r.convert(Re.type),Ce=v(Re.internalFormat,rt,me,Re.colorSpace,N.isXRRenderTarget===!0),He=Q(N);i.renderbufferStorageMultisample(i.RENDERBUFFER,He,Ce,N.width,N.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,Y.__webglColorRenderbuffer[Me])}i.bindRenderbuffer(i.RENDERBUFFER,null),N.depthBuffer&&(Y.__webglDepthRenderbuffer=i.createRenderbuffer(),K(Y.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ne){t.bindTexture(i.TEXTURE_CUBE_MAP,ie.__webglTexture),ce(i.TEXTURE_CUBE_MAP,R);for(let Me=0;Me<6;Me++)if(R.mipmaps&&R.mipmaps.length>0)for(let Re=0;Re<R.mipmaps.length;Re++)te(Y.__webglFramebuffer[Me][Re],N,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Re);else te(Y.__webglFramebuffer[Me],N,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0);g(R)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Fe){for(let Me=0,Re=se.length;Me<Re;Me++){let rt=se[Me],me=n.get(rt);t.bindTexture(i.TEXTURE_2D,me.__webglTexture),ce(i.TEXTURE_2D,rt),te(Y.__webglFramebuffer,N,rt,i.COLOR_ATTACHMENT0+Me,i.TEXTURE_2D,0),g(rt)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let Me=i.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Me=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Me,ie.__webglTexture),ce(Me,R),R.mipmaps&&R.mipmaps.length>0)for(let Re=0;Re<R.mipmaps.length;Re++)te(Y.__webglFramebuffer[Re],N,R,i.COLOR_ATTACHMENT0,Me,Re);else te(Y.__webglFramebuffer,N,R,i.COLOR_ATTACHMENT0,Me,0);g(R)&&p(Me),t.unbindTexture()}N.depthBuffer&&ae(N)}function fe(N){let R=N.textures;for(let Y=0,ie=R.length;Y<ie;Y++){let se=R[Y];if(g(se)){let ne=_(N),Fe=n.get(se).__webglTexture;t.bindTexture(ne,Fe),p(ne),t.unbindTexture()}}}let Ae=[],A=[];function ye(N){if(N.samples>0){if(ze(N)===!1){let R=N.textures,Y=N.width,ie=N.height,se=i.COLOR_BUFFER_BIT,ne=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Fe=n.get(N),Me=R.length>1;if(Me)for(let Re=0;Re<R.length;Re++)t.bindFramebuffer(i.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer);for(let Re=0;Re<R.length;Re++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(se|=i.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(se|=i.STENCIL_BUFFER_BIT)),Me){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Fe.__webglColorRenderbuffer[Re]);let rt=n.get(R[Re]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,rt,0)}i.blitFramebuffer(0,0,Y,ie,0,0,Y,ie,se,i.NEAREST),l===!0&&(Ae.length=0,A.length=0,Ae.push(i.COLOR_ATTACHMENT0+Re),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Ae.push(ne),A.push(ne),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,A)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ae))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Me)for(let Re=0;Re<R.length;Re++){t.bindFramebuffer(i.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,Fe.__webglColorRenderbuffer[Re]);let rt=n.get(R[Re]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,rt,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&l){let R=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[R])}}}function Q(N){return Math.min(s.maxSamples,N.samples)}function ze(N){let R=n.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function le(N){let R=o.render.frame;h.get(N)!==R&&(h.set(N,R),N.update())}function Pe(N,R){let Y=N.colorSpace,ie=N.format,se=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||Y!==nn&&Y!==Oi&&(Qe.getTransfer(Y)===pt?(ie!==Tn||se!==yi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),R}function De(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=k,this.setTexture2D=T,this.setTexture2DArray=C,this.setTexture3D=V,this.setTextureCube=z,this.rebindTextures=pe,this.setupRenderTarget=he,this.updateRenderTargetMipmap=fe,this.updateMultisampleRenderTarget=ye,this.setupDepthRenderbuffer=ae,this.setupFrameBufferTexture=te,this.useMultisampledRTT=ze}function RM(i,e){function t(n,s=Oi){let r,o=Qe.getTransfer(s);if(n===yi)return i.UNSIGNED_BYTE;if(n===Rh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ch)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Nf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Lf)return i.BYTE;if(n===Df)return i.SHORT;if(n===so)return i.UNSIGNED_SHORT;if(n===Ah)return i.INT;if(n===_s)return i.UNSIGNED_INT;if(n===Bn)return i.FLOAT;if(n===Vn)return i.HALF_FLOAT;if(n===Of)return i.ALPHA;if(n===Uf)return i.RGB;if(n===Tn)return i.RGBA;if(n===zf)return i.LUMINANCE;if(n===Ff)return i.LUMINANCE_ALPHA;if(n===sr)return i.DEPTH_COMPONENT;if(n===ur)return i.DEPTH_STENCIL;if(n===Ih)return i.RED;if(n===Ph)return i.RED_INTEGER;if(n===kf)return i.RG;if(n===Lh)return i.RG_INTEGER;if(n===Dh)return i.RGBA_INTEGER;if(n===aa||n===la||n===ca||n===ha)if(o===pt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===aa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===la)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ha)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===aa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===la)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ca)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ha)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===gc||n===xc||n===_c||n===yc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===gc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===xc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===_c)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===yc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===vc||n===Mc||n===bc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===vc||n===Mc)return o===pt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===bc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ec||n===Sc||n===wc||n===Tc||n===Ac||n===Rc||n===Cc||n===Ic||n===Pc||n===Lc||n===Dc||n===Nc||n===Oc||n===Uc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ec)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Sc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===wc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Tc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ac)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Rc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Cc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ic)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Pc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Lc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Dc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Nc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Oc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Uc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ua||n===zc||n===Fc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ua)return o===pt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===zc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Fc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Bf||n===kc||n===Bc||n===Hc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ua)return r.COMPRESSED_RED_RGTC1_EXT;if(n===kc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Bc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Hc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===hr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var nh=class extends kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Be=class extends Rt{constructor(){super(),this.isGroup=!0,this.type="Group"}},CM={type:"move"},no=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Be,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Be,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Be,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let m of e.hand.values()){let g=t.getJointPose(m,n),p=this._getHandJoint(c,m);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,x=.005;c.inputState.pinching&&d>f+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(CM)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Be;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},IM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,PM=`
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

}`,ih=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new Wt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new It({vertexShader:IM,fragmentShader:PM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ge(new An(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},sh=class extends vi{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,x=null,m=new ih,g=t.getContextAttributes(),p=null,_=null,v=[],y=[],S=new Te,E=null,w=new kt;w.viewport=new ct;let I=new kt;I.viewport=new ct;let b=[w,I],M=new nh,L=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ee=v[q];return ee===void 0&&(ee=new no,v[q]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(q){let ee=v[q];return ee===void 0&&(ee=new no,v[q]=ee),ee.getGripSpace()},this.getHand=function(q){let ee=v[q];return ee===void 0&&(ee=new no,v[q]=ee),ee.getHandSpace()};function F(q){let ee=y.indexOf(q.inputSource);if(ee===-1)return;let te=v[ee];te!==void 0&&(te.update(q.inputSource,q.frame,c||o),te.dispatchEvent({type:q.type,data:q.inputSource}))}function H(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",T);for(let q=0;q<v.length;q++){let ee=y[q];ee!==null&&(y[q]=null,v[q].disconnect(ee))}L=null,k=null,m.reset(),e.setRenderTarget(p),f=null,d=null,u=null,s=null,_=null,ue.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(S.width,S.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",H),s.addEventListener("inputsourceschange",T),g.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(S),s.renderState.layers===void 0){let ee={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ee),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new on(f.framebufferWidth,f.framebufferHeight,{format:Tn,type:yi,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let ee=null,te=null,K=null;g.depth&&(K=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=g.stencil?ur:sr,te=g.stencil?hr:_s);let de={colorFormat:t.RGBA8,depthFormat:K,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(de),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new on(d.textureWidth,d.textureHeight,{format:Tn,type:yi,depthTexture:new va(d.textureWidth,d.textureHeight,te,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ue.setContext(s),ue.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function T(q){for(let ee=0;ee<q.removed.length;ee++){let te=q.removed[ee],K=y.indexOf(te);K>=0&&(y[K]=null,v[K].disconnect(te))}for(let ee=0;ee<q.added.length;ee++){let te=q.added[ee],K=y.indexOf(te);if(K===-1){for(let ae=0;ae<v.length;ae++)if(ae>=y.length){y.push(te),K=ae;break}else if(y[ae]===null){y[ae]=te,K=ae;break}if(K===-1)break}let de=v[K];de&&de.connect(te)}}let C=new O,V=new O;function z(q,ee,te){C.setFromMatrixPosition(ee.matrixWorld),V.setFromMatrixPosition(te.matrixWorld);let K=C.distanceTo(V),de=ee.projectionMatrix.elements,ae=te.projectionMatrix.elements,pe=de[14]/(de[10]-1),he=de[14]/(de[10]+1),fe=(de[9]+1)/de[5],Ae=(de[9]-1)/de[5],A=(de[8]-1)/de[0],ye=(ae[8]+1)/ae[0],Q=pe*A,ze=pe*ye,le=K/(-A+ye),Pe=le*-A;if(ee.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Pe),q.translateZ(le),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),de[10]===-1)q.projectionMatrix.copy(ee.projectionMatrix),q.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{let De=pe+le,N=he+le,R=Q-Pe,Y=ze+(K-Pe),ie=fe*he/N*De,se=Ae*he/N*De;q.projectionMatrix.makePerspective(R,Y,ie,se,De,N),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function D(q,ee){ee===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ee.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let ee=q.near,te=q.far;m.texture!==null&&(m.depthNear>0&&(ee=m.depthNear),m.depthFar>0&&(te=m.depthFar)),M.near=I.near=w.near=ee,M.far=I.far=w.far=te,(L!==M.near||k!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),L=M.near,k=M.far),w.layers.mask=q.layers.mask|2,I.layers.mask=q.layers.mask|4,M.layers.mask=w.layers.mask|I.layers.mask;let K=q.parent,de=M.cameras;D(M,K);for(let ae=0;ae<de.length;ae++)D(de[ae],K);de.length===2?z(M,w,I):M.projectionMatrix.copy(w.projectionMatrix),B(q,M,K)};function B(q,ee,te){te===null?q.matrix.copy(ee.matrixWorld):(q.matrix.copy(te.matrixWorld),q.matrix.invert(),q.matrix.multiply(ee.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ee.projectionMatrix),q.projectionMatrixInverse.copy(ee.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=pr*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(M)};let J=null;function ce(q,ee){if(h=ee.getViewerPose(c||o),x=ee,h!==null){let te=h.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let K=!1;te.length!==M.cameras.length&&(M.cameras.length=0,K=!0);for(let ae=0;ae<te.length;ae++){let pe=te[ae],he=null;if(f!==null)he=f.getViewport(pe);else{let Ae=u.getViewSubImage(d,pe);he=Ae.viewport,ae===0&&(e.setRenderTargetTextures(_,Ae.colorTexture,d.ignoreDepthValues?void 0:Ae.depthStencilTexture),e.setRenderTarget(_))}let fe=b[ae];fe===void 0&&(fe=new kt,fe.layers.enable(ae),fe.viewport=new ct,b[ae]=fe),fe.matrix.fromArray(pe.transform.matrix),fe.matrix.decompose(fe.position,fe.quaternion,fe.scale),fe.projectionMatrix.fromArray(pe.projectionMatrix),fe.projectionMatrixInverse.copy(fe.projectionMatrix).invert(),fe.viewport.set(he.x,he.y,he.width,he.height),ae===0&&(M.matrix.copy(fe.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),K===!0&&M.cameras.push(fe)}let de=s.enabledFeatures;if(de&&de.includes("depth-sensing")){let ae=u.getDepthInformation(te[0]);ae&&ae.isValid&&ae.texture&&m.init(e,ae,s.renderState)}}for(let te=0;te<v.length;te++){let K=y[te],de=v[te];K!==null&&de!==void 0&&de.update(K,ee,c||o)}J&&J(q,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),x=null}let ue=new Kf;ue.setAnimationLoop(ce),this.setAnimationLoop=function(q){J=q},this.dispose=function(){}}},ps=new jn,LM=new Ge;function DM(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,qf(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,_,v,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,y)):p.isMeshMatcapMaterial?(r(g,p),x(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),m(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,_,v):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Qt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Qt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let _=e.get(p),v=_.envMap,y=_.envMapRotation;v&&(g.envMap.value=v,ps.copy(y),ps.x*=-1,ps.y*=-1,ps.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ps.y*=-1,ps.z*=-1),g.envMapRotation.value.setFromMatrix4(LM.makeRotationFromEuler(ps)),g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,_,v){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*_,g.scale.value=v*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,_){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Qt&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,p){p.matcap&&(g.matcap.value=p.matcap)}function m(g,p){let _=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function NM(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,v){let y=v.program;n.uniformBlockBinding(_,y)}function c(_,v){let y=s[_.id];y===void 0&&(x(_),y=h(_),s[_.id]=y,_.addEventListener("dispose",g));let S=v.program;n.updateUBOMapping(_,S);let E=e.render.frame;r[_.id]!==E&&(d(_),r[_.id]=E)}function h(_){let v=u();_.__bindingPointIndex=v;let y=i.createBuffer(),S=_.__size,E=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,S,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,y),y}function u(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){let v=s[_.id],y=_.uniforms,S=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let E=0,w=y.length;E<w;E++){let I=Array.isArray(y[E])?y[E]:[y[E]];for(let b=0,M=I.length;b<M;b++){let L=I[b];if(f(L,E,b,S)===!0){let k=L.__offset,F=Array.isArray(L.value)?L.value:[L.value],H=0;for(let T=0;T<F.length;T++){let C=F[T],V=m(C);typeof C=="number"||typeof C=="boolean"?(L.__data[0]=C,i.bufferSubData(i.UNIFORM_BUFFER,k+H,L.__data)):C.isMatrix3?(L.__data[0]=C.elements[0],L.__data[1]=C.elements[1],L.__data[2]=C.elements[2],L.__data[3]=0,L.__data[4]=C.elements[3],L.__data[5]=C.elements[4],L.__data[6]=C.elements[5],L.__data[7]=0,L.__data[8]=C.elements[6],L.__data[9]=C.elements[7],L.__data[10]=C.elements[8],L.__data[11]=0):(C.toArray(L.__data,H),H+=V.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(_,v,y,S){let E=_.value,w=v+"_"+y;if(S[w]===void 0)return typeof E=="number"||typeof E=="boolean"?S[w]=E:S[w]=E.clone(),!0;{let I=S[w];if(typeof E=="number"||typeof E=="boolean"){if(I!==E)return S[w]=E,!0}else if(I.equals(E)===!1)return I.copy(E),!0}return!1}function x(_){let v=_.uniforms,y=0,S=16;for(let w=0,I=v.length;w<I;w++){let b=Array.isArray(v[w])?v[w]:[v[w]];for(let M=0,L=b.length;M<L;M++){let k=b[M],F=Array.isArray(k.value)?k.value:[k.value];for(let H=0,T=F.length;H<T;H++){let C=F[H],V=m(C),z=y%S,D=z%V.boundary,B=z+D;y+=D,B!==0&&S-B<V.storage&&(y+=S-B),k.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=y,y+=V.storage}}}let E=y%S;return E>0&&(y+=S-E),_.__size=y,_.__cache={},this}function m(_){let v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function g(_){let v=_.target;v.removeEventListener("dispose",g);let y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function p(){for(let _ in s)i.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var Ma=class{constructor(e={}){let{canvas:t=kg(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let x=new Uint32Array(4),m=new Int32Array(4),g=null,p=null,_=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=mt,this.toneMapping=Fi,this.toneMappingExposure=1;let y=this,S=!1,E=0,w=0,I=null,b=-1,M=null,L=new ct,k=new ct,F=null,H=new Se(0),T=0,C=t.width,V=t.height,z=1,D=null,B=null,J=new ct(0,0,C,V),ce=new ct(0,0,C,V),ue=!1,q=new ao,ee=!1,te=!1,K=new Ge,de=new Ge,ae=new O,pe=new ct,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},fe=!1;function Ae(){return I===null?z:1}let A=n;function ye(P,W){return t.getContext(P,W)}try{let P={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${yh}`),t.addEventListener("webglcontextlost",oe,!1),t.addEventListener("webglcontextrestored",we,!1),t.addEventListener("webglcontextcreationerror",be,!1),A===null){let W="webgl2";if(A=ye(W,P),A===null)throw ye(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let Q,ze,le,Pe,De,N,R,Y,ie,se,ne,Fe,Me,Re,rt,me,Ce,He,Ve,Ie,st,Je,Et,G;function ve(){Q=new $y(A),Q.init(),Je=new RM(A,Q),ze=new Wy(A,Q,e,Je),le=new wM(A,Q),ze.reverseDepthBuffer&&d&&le.buffers.depth.setReversed(!0),Pe=new Qy(A),De=new dM,N=new AM(A,Q,le,De,ze,Je,Pe),R=new Yy(y),Y=new Zy(y),ie=new ox(A),Et=new Vy(A,ie),se=new Jy(A,ie,Pe,Et),ne=new tv(A,se,ie,Pe),Ve=new ev(A,ze,N),me=new Xy(De),Fe=new uM(y,R,Y,Q,ze,Et,me),Me=new DM(y,De),Re=new pM,rt=new vM(Q),He=new Hy(y,R,Y,le,ne,f,l),Ce=new EM(y,ne,ze),G=new NM(A,Pe,ze,le),Ie=new Gy(A,Q,Pe),st=new jy(A,Q,Pe),Pe.programs=Fe.programs,y.capabilities=ze,y.extensions=Q,y.properties=De,y.renderLists=Re,y.shadowMap=Ce,y.state=le,y.info=Pe}ve();let j=new sh(y,A);this.xr=j,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){let P=Q.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){let P=Q.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(P){P!==void 0&&(z=P,this.setSize(C,V,!1))},this.getSize=function(P){return P.set(C,V)},this.setSize=function(P,W,Z=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}C=P,V=W,t.width=Math.floor(P*z),t.height=Math.floor(W*z),Z===!0&&(t.style.width=P+"px",t.style.height=W+"px"),this.setViewport(0,0,P,W)},this.getDrawingBufferSize=function(P){return P.set(C*z,V*z).floor()},this.setDrawingBufferSize=function(P,W,Z){C=P,V=W,z=Z,t.width=Math.floor(P*Z),t.height=Math.floor(W*Z),this.setViewport(0,0,P,W)},this.getCurrentViewport=function(P){return P.copy(L)},this.getViewport=function(P){return P.copy(J)},this.setViewport=function(P,W,Z,$){P.isVector4?J.set(P.x,P.y,P.z,P.w):J.set(P,W,Z,$),le.viewport(L.copy(J).multiplyScalar(z).round())},this.getScissor=function(P){return P.copy(ce)},this.setScissor=function(P,W,Z,$){P.isVector4?ce.set(P.x,P.y,P.z,P.w):ce.set(P,W,Z,$),le.scissor(k.copy(ce).multiplyScalar(z).round())},this.getScissorTest=function(){return ue},this.setScissorTest=function(P){le.setScissorTest(ue=P)},this.setOpaqueSort=function(P){D=P},this.setTransparentSort=function(P){B=P},this.getClearColor=function(P){return P.copy(He.getClearColor())},this.setClearColor=function(){He.setClearColor.apply(He,arguments)},this.getClearAlpha=function(){return He.getClearAlpha()},this.setClearAlpha=function(){He.setClearAlpha.apply(He,arguments)},this.clear=function(P=!0,W=!0,Z=!0){let $=0;if(P){let X=!1;if(I!==null){let xe=I.texture.format;X=xe===Dh||xe===Lh||xe===Ph}if(X){let xe=I.texture.type,Ee=xe===yi||xe===_s||xe===so||xe===hr||xe===Rh||xe===Ch,Ne=He.getClearColor(),Oe=He.getClearAlpha(),Xe=Ne.r,Ke=Ne.g,Ue=Ne.b;Ee?(x[0]=Xe,x[1]=Ke,x[2]=Ue,x[3]=Oe,A.clearBufferuiv(A.COLOR,0,x)):(m[0]=Xe,m[1]=Ke,m[2]=Ue,m[3]=Oe,A.clearBufferiv(A.COLOR,0,m))}else $|=A.COLOR_BUFFER_BIT}W&&($|=A.DEPTH_BUFFER_BIT),Z&&($|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",oe,!1),t.removeEventListener("webglcontextrestored",we,!1),t.removeEventListener("webglcontextcreationerror",be,!1),Re.dispose(),rt.dispose(),De.dispose(),R.dispose(),Y.dispose(),ne.dispose(),Et.dispose(),G.dispose(),Fe.dispose(),j.dispose(),j.removeEventListener("sessionstart",ed),j.removeEventListener("sessionend",td),ls.stop()};function oe(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function we(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;let P=Pe.autoReset,W=Ce.enabled,Z=Ce.autoUpdate,$=Ce.needsUpdate,X=Ce.type;ve(),Pe.autoReset=P,Ce.enabled=W,Ce.autoUpdate=Z,Ce.needsUpdate=$,Ce.type=X}function be(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function qe(P){let W=P.target;W.removeEventListener("dispose",qe),Nt(W)}function Nt(P){Zt(P),De.remove(P)}function Zt(P){let W=De.get(P).programs;W!==void 0&&(W.forEach(function(Z){Fe.releaseProgram(Z)}),P.isShaderMaterial&&Fe.releaseShaderCache(P))}this.renderBufferDirect=function(P,W,Z,$,X,xe){W===null&&(W=he);let Ee=X.isMesh&&X.matrixWorld.determinant()<0,Ne=F0(P,W,Z,$,X);le.setMaterial($,Ee);let Oe=Z.index,Xe=1;if($.wireframe===!0){if(Oe=se.getWireframeAttribute(Z),Oe===void 0)return;Xe=2}let Ke=Z.drawRange,Ue=Z.attributes.position,ot=Ke.start*Xe,St=(Ke.start+Ke.count)*Xe;xe!==null&&(ot=Math.max(ot,xe.start*Xe),St=Math.min(St,(xe.start+xe.count)*Xe)),Oe!==null?(ot=Math.max(ot,0),St=Math.min(St,Oe.count)):Ue!=null&&(ot=Math.max(ot,0),St=Math.min(St,Ue.count));let wt=St-ot;if(wt<0||wt===1/0)return;Et.setup(X,$,Ne,Z,Oe);let hn,dt=Ie;if(Oe!==null&&(hn=ie.get(Oe),dt=st,dt.setIndex(hn)),X.isMesh)$.wireframe===!0?(le.setLineWidth($.wireframeLinewidth*Ae()),dt.setMode(A.LINES)):dt.setMode(A.TRIANGLES);else if(X.isLine){let ke=$.linewidth;ke===void 0&&(ke=1),le.setLineWidth(ke*Ae()),X.isLineSegments?dt.setMode(A.LINES):X.isLineLoop?dt.setMode(A.LINE_LOOP):dt.setMode(A.LINE_STRIP)}else X.isPoints?dt.setMode(A.POINTS):X.isSprite&&dt.setMode(A.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)dt.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(Q.get("WEBGL_multi_draw"))dt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let ke=X._multiDrawStarts,li=X._multiDrawCounts,ft=X._multiDrawCount,Nn=Oe?ie.get(Oe).bytesPerElement:1,Ds=De.get($).currentProgram.getUniforms();for(let gn=0;gn<ft;gn++)Ds.setValue(A,"_gl_DrawID",gn),dt.render(ke[gn]/Nn,li[gn])}else if(X.isInstancedMesh)dt.renderInstances(ot,wt,X.count);else if(Z.isInstancedBufferGeometry){let ke=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,li=Math.min(Z.instanceCount,ke);dt.renderInstances(ot,wt,li)}else dt.render(ot,wt)};function xt(P,W,Z){P.transparent===!0&&P.side===gt&&P.forceSinglePass===!1?(P.side=Qt,P.needsUpdate=!0,Io(P,W,Z),P.side=Jn,P.needsUpdate=!0,Io(P,W,Z),P.side=gt):Io(P,W,Z)}this.compile=function(P,W,Z=null){Z===null&&(Z=P),p=rt.get(Z),p.init(W),v.push(p),Z.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),P!==Z&&P.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),p.setupLights();let $=new Set;return P.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let xe=X.material;if(xe)if(Array.isArray(xe))for(let Ee=0;Ee<xe.length;Ee++){let Ne=xe[Ee];xt(Ne,Z,X),$.add(Ne)}else xt(xe,Z,X),$.add(xe)}),v.pop(),p=null,$},this.compileAsync=function(P,W,Z=null){let $=this.compile(P,W,Z);return new Promise(X=>{function xe(){if($.forEach(function(Ee){De.get(Ee).currentProgram.isReady()&&$.delete(Ee)}),$.size===0){X(P);return}setTimeout(xe,10)}Q.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let Dn=null;function ai(P){Dn&&Dn(P)}function ed(){ls.stop()}function td(){ls.start()}let ls=new Kf;ls.setAnimationLoop(ai),typeof self<"u"&&ls.setContext(self),this.setAnimationLoop=function(P){Dn=P,j.setAnimationLoop(P),P===null?ls.stop():ls.start()},j.addEventListener("sessionstart",ed),j.addEventListener("sessionend",td),this.render=function(P,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(W),W=j.getCamera()),P.isScene===!0&&P.onBeforeRender(y,P,W,I),p=rt.get(P,v.length),p.init(W),v.push(p),de.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),q.setFromProjectionMatrix(de),te=this.localClippingEnabled,ee=me.init(this.clippingPlanes,te),g=Re.get(P,_.length),g.init(),_.push(g),j.enabled===!0&&j.isPresenting===!0){let xe=y.xr.getDepthSensingMesh();xe!==null&&wl(xe,W,-1/0,y.sortObjects)}wl(P,W,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(D,B),fe=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,fe&&He.addToRenderList(g,P),this.info.render.frame++,ee===!0&&me.beginShadows();let Z=p.state.shadowsArray;Ce.render(Z,P,W),ee===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset();let $=g.opaque,X=g.transmissive;if(p.setupLights(),W.isArrayCamera){let xe=W.cameras;if(X.length>0)for(let Ee=0,Ne=xe.length;Ee<Ne;Ee++){let Oe=xe[Ee];id($,X,P,Oe)}fe&&He.render(P);for(let Ee=0,Ne=xe.length;Ee<Ne;Ee++){let Oe=xe[Ee];nd(g,P,Oe,Oe.viewport)}}else X.length>0&&id($,X,P,W),fe&&He.render(P),nd(g,P,W);I!==null&&(N.updateMultisampleRenderTarget(I),N.updateRenderTargetMipmap(I)),P.isScene===!0&&P.onAfterRender(y,P,W),Et.resetDefaultState(),b=-1,M=null,v.pop(),v.length>0?(p=v[v.length-1],ee===!0&&me.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,_.pop(),_.length>0?g=_[_.length-1]:g=null};function wl(P,W,Z,$){if(P.visible===!1)return;if(P.layers.test(W.layers)){if(P.isGroup)Z=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(W);else if(P.isLight)p.pushLight(P),P.castShadow&&p.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||q.intersectsSprite(P)){$&&pe.setFromMatrixPosition(P.matrixWorld).applyMatrix4(de);let Ee=ne.update(P),Ne=P.material;Ne.visible&&g.push(P,Ee,Ne,Z,pe.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||q.intersectsObject(P))){let Ee=ne.update(P),Ne=P.material;if($&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),pe.copy(P.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),pe.copy(Ee.boundingSphere.center)),pe.applyMatrix4(P.matrixWorld).applyMatrix4(de)),Array.isArray(Ne)){let Oe=Ee.groups;for(let Xe=0,Ke=Oe.length;Xe<Ke;Xe++){let Ue=Oe[Xe],ot=Ne[Ue.materialIndex];ot&&ot.visible&&g.push(P,Ee,ot,Z,pe.z,Ue)}}else Ne.visible&&g.push(P,Ee,Ne,Z,pe.z,null)}}let xe=P.children;for(let Ee=0,Ne=xe.length;Ee<Ne;Ee++)wl(xe[Ee],W,Z,$)}function nd(P,W,Z,$){let X=P.opaque,xe=P.transmissive,Ee=P.transparent;p.setupLightsView(Z),ee===!0&&me.setGlobalState(y.clippingPlanes,Z),$&&le.viewport(L.copy($)),X.length>0&&Co(X,W,Z),xe.length>0&&Co(xe,W,Z),Ee.length>0&&Co(Ee,W,Z),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1)}function id(P,W,Z,$){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[$.id]===void 0&&(p.state.transmissionRenderTarget[$.id]=new on(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float")?Vn:yi,minFilter:wn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));let xe=p.state.transmissionRenderTarget[$.id],Ee=$.viewport||L;xe.setSize(Ee.z,Ee.w);let Ne=y.getRenderTarget();y.setRenderTarget(xe),y.getClearColor(H),T=y.getClearAlpha(),T<1&&y.setClearColor(16777215,.5),y.clear(),fe&&He.render(Z);let Oe=y.toneMapping;y.toneMapping=Fi;let Xe=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),p.setupLightsView($),ee===!0&&me.setGlobalState(y.clippingPlanes,$),Co(P,Z,$),N.updateMultisampleRenderTarget(xe),N.updateRenderTargetMipmap(xe),Q.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let Ue=0,ot=W.length;Ue<ot;Ue++){let St=W[Ue],wt=St.object,hn=St.geometry,dt=St.material,ke=St.group;if(dt.side===gt&&wt.layers.test($.layers)){let li=dt.side;dt.side=Qt,dt.needsUpdate=!0,sd(wt,Z,$,hn,dt,ke),dt.side=li,dt.needsUpdate=!0,Ke=!0}}Ke===!0&&(N.updateMultisampleRenderTarget(xe),N.updateRenderTargetMipmap(xe))}y.setRenderTarget(Ne),y.setClearColor(H,T),Xe!==void 0&&($.viewport=Xe),y.toneMapping=Oe}function Co(P,W,Z){let $=W.isScene===!0?W.overrideMaterial:null;for(let X=0,xe=P.length;X<xe;X++){let Ee=P[X],Ne=Ee.object,Oe=Ee.geometry,Xe=$===null?Ee.material:$,Ke=Ee.group;Ne.layers.test(Z.layers)&&sd(Ne,W,Z,Oe,Xe,Ke)}}function sd(P,W,Z,$,X,xe){P.onBeforeRender(y,W,Z,$,X,xe),P.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),X.onBeforeRender(y,W,Z,$,P,xe),X.transparent===!0&&X.side===gt&&X.forceSinglePass===!1?(X.side=Qt,X.needsUpdate=!0,y.renderBufferDirect(Z,W,$,X,P,xe),X.side=Jn,X.needsUpdate=!0,y.renderBufferDirect(Z,W,$,X,P,xe),X.side=gt):y.renderBufferDirect(Z,W,$,X,P,xe),P.onAfterRender(y,W,Z,$,X,xe)}function Io(P,W,Z){W.isScene!==!0&&(W=he);let $=De.get(P),X=p.state.lights,xe=p.state.shadowsArray,Ee=X.state.version,Ne=Fe.getParameters(P,X.state,xe,W,Z),Oe=Fe.getProgramCacheKey(Ne),Xe=$.programs;$.environment=P.isMeshStandardMaterial?W.environment:null,$.fog=W.fog,$.envMap=(P.isMeshStandardMaterial?Y:R).get(P.envMap||$.environment),$.envMapRotation=$.environment!==null&&P.envMap===null?W.environmentRotation:P.envMapRotation,Xe===void 0&&(P.addEventListener("dispose",qe),Xe=new Map,$.programs=Xe);let Ke=Xe.get(Oe);if(Ke!==void 0){if($.currentProgram===Ke&&$.lightsStateVersion===Ee)return od(P,Ne),Ke}else Ne.uniforms=Fe.getUniforms(P),P.onBeforeCompile(Ne,y),Ke=Fe.acquireProgram(Ne,Oe),Xe.set(Oe,Ke),$.uniforms=Ne.uniforms;let Ue=$.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Ue.clippingPlanes=me.uniform),od(P,Ne),$.needsLights=B0(P),$.lightsStateVersion=Ee,$.needsLights&&(Ue.ambientLightColor.value=X.state.ambient,Ue.lightProbe.value=X.state.probe,Ue.directionalLights.value=X.state.directional,Ue.directionalLightShadows.value=X.state.directionalShadow,Ue.spotLights.value=X.state.spot,Ue.spotLightShadows.value=X.state.spotShadow,Ue.rectAreaLights.value=X.state.rectArea,Ue.ltc_1.value=X.state.rectAreaLTC1,Ue.ltc_2.value=X.state.rectAreaLTC2,Ue.pointLights.value=X.state.point,Ue.pointLightShadows.value=X.state.pointShadow,Ue.hemisphereLights.value=X.state.hemi,Ue.directionalShadowMap.value=X.state.directionalShadowMap,Ue.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ue.spotShadowMap.value=X.state.spotShadowMap,Ue.spotLightMatrix.value=X.state.spotLightMatrix,Ue.spotLightMap.value=X.state.spotLightMap,Ue.pointShadowMap.value=X.state.pointShadowMap,Ue.pointShadowMatrix.value=X.state.pointShadowMatrix),$.currentProgram=Ke,$.uniformsList=null,Ke}function rd(P){if(P.uniformsList===null){let W=P.currentProgram.getUniforms();P.uniformsList=or.seqWithValue(W.seq,P.uniforms)}return P.uniformsList}function od(P,W){let Z=De.get(P);Z.outputColorSpace=W.outputColorSpace,Z.batching=W.batching,Z.batchingColor=W.batchingColor,Z.instancing=W.instancing,Z.instancingColor=W.instancingColor,Z.instancingMorph=W.instancingMorph,Z.skinning=W.skinning,Z.morphTargets=W.morphTargets,Z.morphNormals=W.morphNormals,Z.morphColors=W.morphColors,Z.morphTargetsCount=W.morphTargetsCount,Z.numClippingPlanes=W.numClippingPlanes,Z.numIntersection=W.numClipIntersection,Z.vertexAlphas=W.vertexAlphas,Z.vertexTangents=W.vertexTangents,Z.toneMapping=W.toneMapping}function F0(P,W,Z,$,X){W.isScene!==!0&&(W=he),N.resetTextureUnits();let xe=W.fog,Ee=$.isMeshStandardMaterial?W.environment:null,Ne=I===null?y.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:nn,Oe=($.isMeshStandardMaterial?Y:R).get($.envMap||Ee),Xe=$.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Ke=!!Z.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ue=!!Z.morphAttributes.position,ot=!!Z.morphAttributes.normal,St=!!Z.morphAttributes.color,wt=Fi;$.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(wt=y.toneMapping);let hn=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,dt=hn!==void 0?hn.length:0,ke=De.get($),li=p.state.lights;if(ee===!0&&(te===!0||P!==M)){let En=P===M&&$.id===b;me.setState($,P,En)}let ft=!1;$.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==li.state.version||ke.outputColorSpace!==Ne||X.isBatchedMesh&&ke.batching===!1||!X.isBatchedMesh&&ke.batching===!0||X.isBatchedMesh&&ke.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&ke.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&ke.instancing===!1||!X.isInstancedMesh&&ke.instancing===!0||X.isSkinnedMesh&&ke.skinning===!1||!X.isSkinnedMesh&&ke.skinning===!0||X.isInstancedMesh&&ke.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&ke.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&ke.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&ke.instancingMorph===!1&&X.morphTexture!==null||ke.envMap!==Oe||$.fog===!0&&ke.fog!==xe||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==me.numPlanes||ke.numIntersection!==me.numIntersection)||ke.vertexAlphas!==Xe||ke.vertexTangents!==Ke||ke.morphTargets!==Ue||ke.morphNormals!==ot||ke.morphColors!==St||ke.toneMapping!==wt||ke.morphTargetsCount!==dt)&&(ft=!0):(ft=!0,ke.__version=$.version);let Nn=ke.currentProgram;ft===!0&&(Nn=Io($,W,X));let Ds=!1,gn=!1,Fr=!1,Tt=Nn.getUniforms(),Kn=ke.uniforms;if(le.useProgram(Nn.program)&&(Ds=!0,gn=!0,Fr=!0),$.id!==b&&(b=$.id,gn=!0),Ds||M!==P){le.buffers.depth.getReversed()?(K.copy(P.projectionMatrix),Hg(K),Vg(K),Tt.setValue(A,"projectionMatrix",K)):Tt.setValue(A,"projectionMatrix",P.projectionMatrix),Tt.setValue(A,"viewMatrix",P.matrixWorldInverse);let Ai=Tt.map.cameraPosition;Ai!==void 0&&Ai.setValue(A,ae.setFromMatrixPosition(P.matrixWorld)),ze.logarithmicDepthBuffer&&Tt.setValue(A,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Tt.setValue(A,"isOrthographic",P.isOrthographicCamera===!0),M!==P&&(M=P,gn=!0,Fr=!0)}if(X.isSkinnedMesh){Tt.setOptional(A,X,"bindMatrix"),Tt.setOptional(A,X,"bindMatrixInverse");let En=X.skeleton;En&&(En.boneTexture===null&&En.computeBoneTexture(),Tt.setValue(A,"boneTexture",En.boneTexture,N))}X.isBatchedMesh&&(Tt.setOptional(A,X,"batchingTexture"),Tt.setValue(A,"batchingTexture",X._matricesTexture,N),Tt.setOptional(A,X,"batchingIdTexture"),Tt.setValue(A,"batchingIdTexture",X._indirectTexture,N),Tt.setOptional(A,X,"batchingColorTexture"),X._colorsTexture!==null&&Tt.setValue(A,"batchingColorTexture",X._colorsTexture,N));let kr=Z.morphAttributes;if((kr.position!==void 0||kr.normal!==void 0||kr.color!==void 0)&&Ve.update(X,Z,Nn),(gn||ke.receiveShadow!==X.receiveShadow)&&(ke.receiveShadow=X.receiveShadow,Tt.setValue(A,"receiveShadow",X.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Kn.envMap.value=Oe,Kn.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&W.environment!==null&&(Kn.envMapIntensity.value=W.environmentIntensity),gn&&(Tt.setValue(A,"toneMappingExposure",y.toneMappingExposure),ke.needsLights&&k0(Kn,Fr),xe&&$.fog===!0&&Me.refreshFogUniforms(Kn,xe),Me.refreshMaterialUniforms(Kn,$,z,V,p.state.transmissionRenderTarget[P.id]),or.upload(A,rd(ke),Kn,N)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(or.upload(A,rd(ke),Kn,N),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Tt.setValue(A,"center",X.center),Tt.setValue(A,"modelViewMatrix",X.modelViewMatrix),Tt.setValue(A,"normalMatrix",X.normalMatrix),Tt.setValue(A,"modelMatrix",X.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){let En=$.uniformsGroups;for(let Ai=0,Ri=En.length;Ai<Ri;Ai++){let ad=En[Ai];G.update(ad,Nn),G.bind(ad,Nn)}}return Nn}function k0(P,W){P.ambientLightColor.needsUpdate=W,P.lightProbe.needsUpdate=W,P.directionalLights.needsUpdate=W,P.directionalLightShadows.needsUpdate=W,P.pointLights.needsUpdate=W,P.pointLightShadows.needsUpdate=W,P.spotLights.needsUpdate=W,P.spotLightShadows.needsUpdate=W,P.rectAreaLights.needsUpdate=W,P.hemisphereLights.needsUpdate=W}function B0(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(P,W,Z){De.get(P.texture).__webglTexture=W,De.get(P.depthTexture).__webglTexture=Z;let $=De.get(P);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=Z===void 0,$.__autoAllocateDepthBuffer||Q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,W){let Z=De.get(P);Z.__webglFramebuffer=W,Z.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(P,W=0,Z=0){I=P,E=W,w=Z;let $=!0,X=null,xe=!1,Ee=!1;if(P){let Oe=De.get(P);if(Oe.__useDefaultFramebuffer!==void 0)le.bindFramebuffer(A.FRAMEBUFFER,null),$=!1;else if(Oe.__webglFramebuffer===void 0)N.setupRenderTarget(P);else if(Oe.__hasExternalTextures)N.rebindTextures(P,De.get(P.texture).__webglTexture,De.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){let Ue=P.depthTexture;if(Oe.__boundDepthTexture!==Ue){if(Ue!==null&&De.has(Ue)&&(P.width!==Ue.image.width||P.height!==Ue.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(P)}}let Xe=P.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Ee=!0);let Ke=De.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Ke[W])?X=Ke[W][Z]:X=Ke[W],xe=!0):P.samples>0&&N.useMultisampledRTT(P)===!1?X=De.get(P).__webglMultisampledFramebuffer:Array.isArray(Ke)?X=Ke[Z]:X=Ke,L.copy(P.viewport),k.copy(P.scissor),F=P.scissorTest}else L.copy(J).multiplyScalar(z).floor(),k.copy(ce).multiplyScalar(z).floor(),F=ue;if(le.bindFramebuffer(A.FRAMEBUFFER,X)&&$&&le.drawBuffers(P,X),le.viewport(L),le.scissor(k),le.setScissorTest(F),xe){let Oe=De.get(P.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+W,Oe.__webglTexture,Z)}else if(Ee){let Oe=De.get(P.texture),Xe=W||0;A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,Oe.__webglTexture,Z||0,Xe)}b=-1},this.readRenderTargetPixels=function(P,W,Z,$,X,xe,Ee){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=De.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ne=Ne[Ee]),Ne){le.bindFramebuffer(A.FRAMEBUFFER,Ne);try{let Oe=P.texture,Xe=Oe.format,Ke=Oe.type;if(!ze.textureFormatReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ze.textureTypeReadable(Ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=P.width-$&&Z>=0&&Z<=P.height-X&&A.readPixels(W,Z,$,X,Je.convert(Xe),Je.convert(Ke),xe)}finally{let Oe=I!==null?De.get(I).__webglFramebuffer:null;le.bindFramebuffer(A.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(P,W,Z,$,X,xe,Ee){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=De.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ne=Ne[Ee]),Ne){let Oe=P.texture,Xe=Oe.format,Ke=Oe.type;if(!ze.textureFormatReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ze.textureTypeReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=P.width-$&&Z>=0&&Z<=P.height-X){le.bindFramebuffer(A.FRAMEBUFFER,Ne);let Ue=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,Ue),A.bufferData(A.PIXEL_PACK_BUFFER,xe.byteLength,A.STREAM_READ),A.readPixels(W,Z,$,X,Je.convert(Xe),Je.convert(Ke),0);let ot=I!==null?De.get(I).__webglFramebuffer:null;le.bindFramebuffer(A.FRAMEBUFFER,ot);let St=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await Bg(A,St,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,Ue),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,xe),A.deleteBuffer(Ue),A.deleteSync(St),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(P,W=null,Z=0){P.isTexture!==!0&&(Jr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,P=arguments[1]);let $=Math.pow(2,-Z),X=Math.floor(P.image.width*$),xe=Math.floor(P.image.height*$),Ee=W!==null?W.x:0,Ne=W!==null?W.y:0;N.setTexture2D(P,0),A.copyTexSubImage2D(A.TEXTURE_2D,Z,0,0,Ee,Ne,X,xe),le.unbindTexture()},this.copyTextureToTexture=function(P,W,Z=null,$=null,X=0){P.isTexture!==!0&&(Jr("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,P=arguments[1],W=arguments[2],X=arguments[3]||0,Z=null);let xe,Ee,Ne,Oe,Xe,Ke,Ue,ot,St,wt=P.isCompressedTexture?P.mipmaps[X]:P.image;Z!==null?(xe=Z.max.x-Z.min.x,Ee=Z.max.y-Z.min.y,Ne=Z.isBox3?Z.max.z-Z.min.z:1,Oe=Z.min.x,Xe=Z.min.y,Ke=Z.isBox3?Z.min.z:0):(xe=wt.width,Ee=wt.height,Ne=wt.depth||1,Oe=0,Xe=0,Ke=0),$!==null?(Ue=$.x,ot=$.y,St=$.z):(Ue=0,ot=0,St=0);let hn=Je.convert(W.format),dt=Je.convert(W.type),ke;W.isData3DTexture?(N.setTexture3D(W,0),ke=A.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(N.setTexture2DArray(W,0),ke=A.TEXTURE_2D_ARRAY):(N.setTexture2D(W,0),ke=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,W.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,W.unpackAlignment);let li=A.getParameter(A.UNPACK_ROW_LENGTH),ft=A.getParameter(A.UNPACK_IMAGE_HEIGHT),Nn=A.getParameter(A.UNPACK_SKIP_PIXELS),Ds=A.getParameter(A.UNPACK_SKIP_ROWS),gn=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,wt.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,wt.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Oe),A.pixelStorei(A.UNPACK_SKIP_ROWS,Xe),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Ke);let Fr=P.isDataArrayTexture||P.isData3DTexture,Tt=W.isDataArrayTexture||W.isData3DTexture;if(P.isRenderTargetTexture||P.isDepthTexture){let Kn=De.get(P),kr=De.get(W),En=De.get(Kn.__renderTarget),Ai=De.get(kr.__renderTarget);le.bindFramebuffer(A.READ_FRAMEBUFFER,En.__webglFramebuffer),le.bindFramebuffer(A.DRAW_FRAMEBUFFER,Ai.__webglFramebuffer);for(let Ri=0;Ri<Ne;Ri++)Fr&&A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,De.get(P).__webglTexture,X,Ke+Ri),P.isDepthTexture?(Tt&&A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,De.get(W).__webglTexture,X,St+Ri),A.blitFramebuffer(Oe,Xe,xe,Ee,Ue,ot,xe,Ee,A.DEPTH_BUFFER_BIT,A.NEAREST)):Tt?A.copyTexSubImage3D(ke,X,Ue,ot,St+Ri,Oe,Xe,xe,Ee):A.copyTexSubImage2D(ke,X,Ue,ot,St+Ri,Oe,Xe,xe,Ee);le.bindFramebuffer(A.READ_FRAMEBUFFER,null),le.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else Tt?P.isDataTexture||P.isData3DTexture?A.texSubImage3D(ke,X,Ue,ot,St,xe,Ee,Ne,hn,dt,wt.data):W.isCompressedArrayTexture?A.compressedTexSubImage3D(ke,X,Ue,ot,St,xe,Ee,Ne,hn,wt.data):A.texSubImage3D(ke,X,Ue,ot,St,xe,Ee,Ne,hn,dt,wt):P.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,X,Ue,ot,xe,Ee,hn,dt,wt.data):P.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,X,Ue,ot,wt.width,wt.height,hn,wt.data):A.texSubImage2D(A.TEXTURE_2D,X,Ue,ot,xe,Ee,hn,dt,wt);A.pixelStorei(A.UNPACK_ROW_LENGTH,li),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,ft),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Nn),A.pixelStorei(A.UNPACK_SKIP_ROWS,Ds),A.pixelStorei(A.UNPACK_SKIP_IMAGES,gn),X===0&&W.generateMipmaps&&A.generateMipmap(ke),le.unbindTexture()},this.copyTextureToTexture3D=function(P,W,Z=null,$=null,X=0){return P.isTexture!==!0&&(Jr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Z=arguments[0]||null,$=arguments[1]||null,P=arguments[2],W=arguments[3],X=arguments[4]||0),Jr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(P,W,Z,$,X)},this.initRenderTarget=function(P){De.get(P).__webglFramebuffer===void 0&&N.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?N.setTextureCube(P,0):P.isData3DTexture?N.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?N.setTexture2DArray(P,0):N.setTexture2D(P,0),le.unbindTexture()},this.resetState=function(){E=0,w=0,I=null,le.reset(),Et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}};var ba=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Se(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ea=class extends Rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new jn,this.environmentIntensity=1,this.environmentRotation=new jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},xr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Vc,this.updateRanges=[],this.version=0,this.uuid=Hn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},sn=new O,vs=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix4(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyNormalMatrix(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.transformDirection(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=kn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=_t(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=kn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=kn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=kn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=kn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),s=_t(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),s=_t(s,this.array),r=_t(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new et(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},lo=class extends fn{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ks,Wr=new O,Zs=new O,$s=new O,Js=new Te,Xr=new Te,Qf=new Ge,Jo=new O,Yr=new O,jo=new O,of=new Te,Ql=new Te,af=new Te,Sa=class extends Rt{constructor(e=new lo){if(super(),this.isSprite=!0,this.type="Sprite",Ks===void 0){Ks=new lt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new xr(t,5);Ks.setIndex([0,1,2,0,2,3]),Ks.setAttribute("position",new vs(n,3,0,!1)),Ks.setAttribute("uv",new vs(n,2,3,!1))}this.geometry=Ks,this.material=e,this.center=new Te(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Zs.setFromMatrixScale(this.matrixWorld),Qf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),$s.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Zs.multiplyScalar(-$s.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Qo(Jo.set(-.5,-.5,0),$s,o,Zs,s,r),Qo(Yr.set(.5,-.5,0),$s,o,Zs,s,r),Qo(jo.set(.5,.5,0),$s,o,Zs,s,r),of.set(0,0),Ql.set(1,0),af.set(1,1);let a=e.ray.intersectTriangle(Jo,Yr,jo,!1,Wr);if(a===null&&(Qo(Yr.set(-.5,.5,0),$s,o,Zs,s,r),Ql.set(0,1),a=e.ray.intersectTriangle(Jo,jo,Yr,!1,Wr),a===null))return;let l=e.ray.origin.distanceTo(Wr);l<e.near||l>e.far||t.push({distance:l,point:Wr.clone(),uv:Ui.getInterpolation(Wr,Jo,Yr,jo,of,Ql,af,new Te),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Qo(i,e,t,n,s,r){Js.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Xr.x=r*Js.x-s*Js.y,Xr.y=s*Js.x+r*Js.y):Xr.copy(Js),i.copy(e),i.x+=Xr.x,i.y+=Xr.y,i.applyMatrix4(Qf)}var lf=new O,cf=new ct,hf=new ct,OM=new O,uf=new Ge,ea=new O,ec=new an,df=new Ge,tc=new ys,_r=class extends ge{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ud,this.bindMatrix=new Ge,this.bindMatrixInverse=new Ge,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new qt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ea),this.boundingBox.expandByPoint(ea)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new an),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ea),this.boundingSphere.expandByPoint(ea)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ec.copy(this.boundingSphere),ec.applyMatrix4(s),e.ray.intersectsSphere(ec)!==!1&&(df.copy(s).invert(),tc.copy(e.ray).applyMatrix4(df),!(this.boundingBox!==null&&tc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,tc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new ct,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ud?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===hg?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;cf.fromBufferAttribute(s.attributes.skinIndex,e),hf.fromBufferAttribute(s.attributes.skinWeight,e),lf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=hf.getComponent(r);if(o!==0){let a=cf.getComponent(r);uf.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(OM.copy(lf).applyMatrix4(uf),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},Ms=class extends Rt{constructor(){super(),this.isBone=!0,this.type="Bone"}},wa=class extends Wt{constructor(e=null,t=1,n=1,s,r,o,a,l,c=en,h=en,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ff=new Ge,UM=new Ge,yr=class i{constructor(e=[],t=[]){this.uuid=Hn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ge)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ge;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:UM;ff.multiplyMatrices(a,t[r]),ff.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new wa(t,e,e,Tn,Bn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Ms),this.bones.push(o),this.boneInverses.push(new Ge().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},bs=class extends et{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},js=new Ge,pf=new Ge,ta=[],mf=new qt,zM=new Ge,qr=new ge,Kr=new an,Bi=class extends ge{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new bs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,zM)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new qt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,js),mf.copy(e.boundingBox).applyMatrix4(js),this.boundingBox.union(mf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new an),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,js),Kr.copy(e.boundingSphere).applyMatrix4(js),this.boundingSphere.union(Kr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(qr.geometry=this.geometry,qr.material=this.material,qr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Kr.copy(this.boundingSphere),Kr.applyMatrix4(n),e.ray.intersectsSphere(Kr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,js),pf.multiplyMatrices(n,js),qr.matrixWorld=pf,qr.raycast(e,ta);for(let o=0,a=ta.length;o<a;o++){let l=ta[o];l.instanceId=r,l.object=this,t.push(l)}ta.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new bs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new wa(new Float32Array(s*this.count),s,this.count,Ih,Bn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var co=class extends fn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Se(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ta=new O,Aa=new O,gf=new Ge,Zr=new ys,na=new an,nc=new O,xf=new O,vr=class extends Rt{constructor(e=new lt,t=new co){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Ta.fromBufferAttribute(t,s-1),Aa.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Ta.distanceTo(Aa);e.setAttribute("lineDistance",new it(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),na.copy(n.boundingSphere),na.applyMatrix4(s),na.radius+=r,e.ray.intersectsSphere(na)===!1)return;gf.copy(s).invert(),Zr.copy(e.ray).applyMatrix4(gf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),x=Math.min(h.count,o.start+o.count);for(let m=f,g=x-1;m<g;m+=c){let p=h.getX(m),_=h.getX(m+1),v=ia(this,e,Zr,l,p,_);v&&t.push(v)}if(this.isLineLoop){let m=h.getX(x-1),g=h.getX(f),p=ia(this,e,Zr,l,m,g);p&&t.push(p)}}else{let f=Math.max(0,o.start),x=Math.min(d.count,o.start+o.count);for(let m=f,g=x-1;m<g;m+=c){let p=ia(this,e,Zr,l,m,m+1);p&&t.push(p)}if(this.isLineLoop){let m=ia(this,e,Zr,l,x-1,f);m&&t.push(m)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ia(i,e,t,n,s,r){let o=i.geometry.attributes.position;if(Ta.fromBufferAttribute(o,s),Aa.fromBufferAttribute(o,r),t.distanceSqToSegment(Ta,Aa,nc,xf)>n)return;nc.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(nc);if(!(l<e.near||l>e.far))return{distance:l,point:xf.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var _f=new O,yf=new O,Ra=class extends vr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)_f.fromBufferAttribute(t,s),yf.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+_f.distanceTo(yf);e.setAttribute("lineDistance",new it(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ca=class extends vr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Hi=class extends fn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},vf=new Ge,rh=new ys,sa=new an,ra=new O,Mi=class extends Rt{constructor(e=new lt,t=new Hi){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),sa.copy(n.boundingSphere),sa.applyMatrix4(s),sa.radius+=r,e.ray.intersectsSphere(sa)===!1)return;vf.copy(s).invert(),rh.copy(e.ray).applyMatrix4(vf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let x=d,m=f;x<m;x++){let g=c.getX(x);ra.fromBufferAttribute(u,g),Mf(ra,g,l,s,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let x=d,m=f;x<m;x++)ra.fromBufferAttribute(u,x),Mf(ra,x,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Mf(i,e,t,n,s,r,o){let a=rh.distanceSqToPoint(i);if(a<t){let l=new O;rh.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Rn=class extends Wt{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ia=class i extends lt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new O,h=new Te;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new it(o,3)),this.setAttribute("normal",new it(a,3)),this.setAttribute("uv",new it(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},vt=class i extends lt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],x=0,m=[],g=n/2,p=0;_(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new it(u,3)),this.setAttribute("normal",new it(d,3)),this.setAttribute("uv",new it(f,2));function _(){let y=new O,S=new O,E=0,w=(t-e)/n;for(let I=0;I<=r;I++){let b=[],M=I/r,L=M*(t-e)+e;for(let k=0;k<=s;k++){let F=k/s,H=F*l+a,T=Math.sin(H),C=Math.cos(H);S.x=L*T,S.y=-M*n+g,S.z=L*C,u.push(S.x,S.y,S.z),y.set(T,w,C).normalize(),d.push(y.x,y.y,y.z),f.push(F,1-M),b.push(x++)}m.push(b)}for(let I=0;I<s;I++)for(let b=0;b<r;b++){let M=m[b][I],L=m[b+1][I],k=m[b+1][I+1],F=m[b][I+1];(e>0||b!==0)&&(h.push(M,L,F),E+=3),(t>0||b!==r-1)&&(h.push(L,k,F),E+=3)}c.addGroup(p,E,0),p+=E}function v(y){let S=x,E=new Te,w=new O,I=0,b=y===!0?e:t,M=y===!0?1:-1;for(let k=1;k<=s;k++)u.push(0,g*M,0),d.push(0,M,0),f.push(.5,.5),x++;let L=x;for(let k=0;k<=s;k++){let H=k/s*l+a,T=Math.cos(H),C=Math.sin(H);w.x=b*C,w.y=g*M,w.z=b*T,u.push(w.x,w.y,w.z),d.push(0,M,0),E.x=T*.5+.5,E.y=C*.5*M+.5,f.push(E.x,E.y),x++}for(let k=0;k<s;k++){let F=S+k,H=L+k;y===!0?h.push(H,H+1,F):h.push(H+1,H,F),I+=3}c.addGroup(p,I,y===!0?1:2),p+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Pa=class i extends lt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new it(r,3)),this.setAttribute("normal",new it(r.slice(),3)),this.setAttribute("uv",new it(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){let v=new O,y=new O,S=new O;for(let E=0;E<t.length;E+=3)f(t[E+0],v),f(t[E+1],y),f(t[E+2],S),l(v,y,S,_)}function l(_,v,y,S){let E=S+1,w=[];for(let I=0;I<=E;I++){w[I]=[];let b=_.clone().lerp(y,I/E),M=v.clone().lerp(y,I/E),L=E-I;for(let k=0;k<=L;k++)k===0&&I===E?w[I][k]=b:w[I][k]=b.clone().lerp(M,k/L)}for(let I=0;I<E;I++)for(let b=0;b<2*(E-I)-1;b++){let M=Math.floor(b/2);b%2===0?(d(w[I][M+1]),d(w[I+1][M]),d(w[I][M])):(d(w[I][M+1]),d(w[I+1][M+1]),d(w[I+1][M]))}}function c(_){let v=new O;for(let y=0;y<r.length;y+=3)v.x=r[y+0],v.y=r[y+1],v.z=r[y+2],v.normalize().multiplyScalar(_),r[y+0]=v.x,r[y+1]=v.y,r[y+2]=v.z}function h(){let _=new O;for(let v=0;v<r.length;v+=3){_.x=r[v+0],_.y=r[v+1],_.z=r[v+2];let y=g(_)/2/Math.PI+.5,S=p(_)/Math.PI+.5;o.push(y,1-S)}x(),u()}function u(){for(let _=0;_<o.length;_+=6){let v=o[_+0],y=o[_+2],S=o[_+4],E=Math.max(v,y,S),w=Math.min(v,y,S);E>.9&&w<.1&&(v<.2&&(o[_+0]+=1),y<.2&&(o[_+2]+=1),S<.2&&(o[_+4]+=1))}}function d(_){r.push(_.x,_.y,_.z)}function f(_,v){let y=_*3;v.x=e[y+0],v.y=e[y+1],v.z=e[y+2]}function x(){let _=new O,v=new O,y=new O,S=new O,E=new Te,w=new Te,I=new Te;for(let b=0,M=0;b<r.length;b+=9,M+=6){_.set(r[b+0],r[b+1],r[b+2]),v.set(r[b+3],r[b+4],r[b+5]),y.set(r[b+6],r[b+7],r[b+8]),E.set(o[M+0],o[M+1]),w.set(o[M+2],o[M+3]),I.set(o[M+4],o[M+5]),S.copy(_).add(v).add(y).divideScalar(3);let L=g(S);m(E,M+0,_,L),m(w,M+2,v,L),m(I,M+4,y,L)}}function m(_,v,y,S){S<0&&_.x===1&&(o[v]=_.x-1),y.x===0&&y.z===0&&(o[v]=S/2/Math.PI+.5)}function g(_){return Math.atan2(_.z,-_.x)}function p(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var La=class i extends Pa{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Mr=class i extends Pa{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},ln=class i extends lt{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],h=[],u=e,d=(t-e)/s,f=new O,x=new Te;for(let m=0;m<=s;m++){for(let g=0;g<=n;g++){let p=r+g/n*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),x.x=(f.x/t+1)/2,x.y=(f.y/t+1)/2,h.push(x.x,x.y)}u+=d}for(let m=0;m<s;m++){let g=m*(n+1);for(let p=0;p<n;p++){let _=p+g,v=_,y=_+n+1,S=_+n+2,E=_+1;a.push(v,y,E),a.push(y,S,E)}}this.setIndex(a),this.setAttribute("position",new it(l,3)),this.setAttribute("normal",new it(c,3)),this.setAttribute("uv",new it(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var tn=class i extends lt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new O,d=new O,f=[],x=[],m=[],g=[];for(let p=0;p<=n;p++){let _=[],v=p/n,y=0;p===0&&o===0?y=.5/t:p===n&&l===Math.PI&&(y=-.5/t);for(let S=0;S<=t;S++){let E=S/t;u.x=-e*Math.cos(s+E*r)*Math.sin(o+v*a),u.y=e*Math.cos(o+v*a),u.z=e*Math.sin(s+E*r)*Math.sin(o+v*a),x.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),g.push(E+y,1-v),_.push(c++)}h.push(_)}for(let p=0;p<n;p++)for(let _=0;_<t;_++){let v=h[p][_+1],y=h[p][_],S=h[p+1][_],E=h[p+1][_+1];(p!==0||o>0)&&f.push(v,y,E),(p!==n-1||l<Math.PI)&&f.push(y,S,E)}this.setIndex(f),this.setAttribute("position",new it(x,3)),this.setAttribute("normal",new it(m,3)),this.setAttribute("uv",new it(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Qn=class i extends lt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new O,u=new O,d=new O;for(let f=0;f<=n;f++)for(let x=0;x<=s;x++){let m=x/s*r,g=f/n*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(m),u.y=(e+t*Math.cos(g))*Math.sin(m),u.z=t*Math.sin(g),a.push(u.x,u.y,u.z),h.x=e*Math.cos(m),h.y=e*Math.sin(m),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(x/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let x=1;x<=s;x++){let m=(s+1)*f+x-1,g=(s+1)*(f-1)+x-1,p=(s+1)*(f-1)+x,_=(s+1)*f+x;o.push(m,g,_),o.push(g,p,_)}this.setIndex(o),this.setAttribute("position",new it(a,3)),this.setAttribute("normal",new it(l,3)),this.setAttribute("uv",new it(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Da=class extends It{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}},Ye=class extends fn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vf,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},yn=class extends Ye{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Te(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return jt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Se(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Se(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Se(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function oa(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function FM(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function kM(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function bf(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s}function ep(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}var Vi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break t}o=t.length;break n}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},oh=class extends Vi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:er,endingEnd:er}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case tr:r=e,a=2*t-n;break;case da:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case tr:o=e,l=2*n-t;break;case da:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,x=(n-t)/(s-t),m=x*x,g=m*x,p=-d*g+2*d*m-d*x,_=(1+d)*g+(-1.5-2*d)*m+(-.5+d)*x+1,v=(-1-f)*g+(1.5+f)*m+.5*x,y=f*g-f*m;for(let S=0;S!==a;++S)r[S]=p*o[h+S]+_*o[c+S]+v*o[l+S]+y*o[u+S];return r}},Na=class extends Vi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},ah=class extends Vi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Cn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=oa(t,this.TimeBufferType),this.values=oa(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:oa(e.times,Array),values:oa(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ah(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Na(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new oh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case dr:t=this.InterpolantFactoryMethodDiscrete;break;case fr:t=this.InterpolantFactoryMethodLinear;break;case Tl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return dr;case this.InterpolantFactoryMethodLinear:return fr;case this.InterpolantFactoryMethodSmooth:return Tl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&FM(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Tl,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let u=a*n,d=u-n,f=u+n;for(let x=0;x!==n;++x){let m=t[u+x];if(m!==t[d+x]||m!==t[f+x]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Cn.prototype.TimeBufferType=Float32Array;Cn.prototype.ValueBufferType=Float32Array;Cn.prototype.DefaultInterpolation=fr;var Gi=class extends Cn{constructor(e,t,n){super(e,t,n)}};Gi.prototype.ValueTypeName="bool";Gi.prototype.ValueBufferType=Array;Gi.prototype.DefaultInterpolation=dr;Gi.prototype.InterpolantFactoryMethodLinear=void 0;Gi.prototype.InterpolantFactoryMethodSmooth=void 0;var Oa=class extends Cn{};Oa.prototype.ValueTypeName="color";var bi=class extends Cn{};bi.prototype.ValueTypeName="number";var lh=class extends Vi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)At.slerpFlat(r,0,o,c-a,o,c,l);return r}},Ei=class extends Cn{InterpolantFactoryMethodLinear(e){return new lh(this.times,this.values,this.getValueSize(),e)}};Ei.prototype.ValueTypeName="quaternion";Ei.prototype.InterpolantFactoryMethodSmooth=void 0;var Wi=class extends Cn{constructor(e,t,n){super(e,t,n)}};Wi.prototype.ValueTypeName="string";Wi.prototype.ValueBufferType=Array;Wi.prototype.DefaultInterpolation=dr;Wi.prototype.InterpolantFactoryMethodLinear=void 0;Wi.prototype.InterpolantFactoryMethodSmooth=void 0;var Si=class extends Cn{};Si.prototype.ValueTypeName="vector";var Xi=class{constructor(e="",t=-1,n=[],s=Uh){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Hn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(HM(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Cn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let h=kM(l);l=bf(l,1,h),c=bf(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new bi(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],h=c.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(c)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,d,f,x,m){if(f.length!==0){let g=[],p=[];ep(f,g,p,x),g.length!==0&&m.push(new u(d,g,p))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let u=0;u<c.length;u++){let d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},x;for(x=0;x<d.length;x++)if(d[x].morphTargets)for(let m=0;m<d[x].morphTargets.length;m++)f[d[x].morphTargets[m]]=-1;for(let m in f){let g=[],p=[];for(let _=0;_!==d[x].morphTargets.length;++_){let v=d[x];g.push(v.time),p.push(v.morphTarget===m?1:0)}s.push(new bi(".morphTargetInfluence["+m+"]",g,p))}l=f.length*o}else{let f=".bones["+t[u].name+"]";n(Si,f+".position",d,"pos",s),n(Ei,f+".quaternion",d,"rot",s),n(Si,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function BM(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return bi;case"vector":case"vector2":case"vector3":case"vector4":return Si;case"color":return Oa;case"quaternion":return Ei;case"bool":case"boolean":return Gi;case"string":return Wi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function HM(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=BM(i.type);if(i.times===void 0){let t=[],n=[];ep(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var zi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},ch=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],x=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return x}return null}}},VM=new ch,wi=class{constructor(e){this.manager=e!==void 0?e:VM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};wi.DEFAULT_MATERIAL_NAME="__DEFAULT";var pi={},hh=class extends Error{constructor(e,t){super(e),this.response=t}},ho=class extends wi{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=zi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(pi[e]!==void 0){pi[e].push({onLoad:t,onProgress:n,onError:s});return}pi[e]=[],pi[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=pi[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,x=f!==0,m=0,g=new ReadableStream({start(p){_();function _(){u.read().then(({done:v,value:y})=>{if(v)p.close();else{m+=y.byteLength;let S=new ProgressEvent("progress",{lengthComputable:x,loaded:m,total:f});for(let E=0,w=h.length;E<w;E++){let I=h[E];I.onProgress&&I.onProgress(S)}p.enqueue(y),_()}},v=>{p.error(v)})}}});return new Response(g)}else throw new hh(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(x=>f.decode(x))}}}).then(c=>{zi.add(e,c);let h=pi[e];delete pi[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=pi[e];if(h===void 0)throw this.manager.itemError(e),c;delete pi[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var uh=class extends wi{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=zi.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=ro("img");function l(){h(),zi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var br=class extends wi{constructor(e){super(e)}load(e,t,n,s){let r=new Wt,o=new uh(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Er=class extends Rt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Se(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Ua=class extends Er{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Se(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},ic=new Ge,Ef=new O,Sf=new O,uo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Te(512,512),this.map=null,this.mapPass=null,this.matrix=new Ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ao,this._frameExtents=new Te(1,1),this._viewportCount=1,this._viewports=[new ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Ef.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ef),Sf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Sf),t.updateMatrixWorld(),ic.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ic),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ic)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},dh=class extends uo{constructor(){super(new kt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=pr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},za=class extends Er{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new dh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},wf=new Ge,$r=new O,sc=new O,fh=class extends uo{constructor(){super(new kt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Te(4,2),this._viewportCount=6,this._viewports=[new ct(2,1,1,1),new ct(0,1,1,1),new ct(3,1,1,1),new ct(1,1,1,1),new ct(3,0,1,1),new ct(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),$r.setFromMatrixPosition(e.matrixWorld),n.position.copy($r),sc.copy(n.position),sc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(sc),n.updateMatrixWorld(),s.makeTranslation(-$r.x,-$r.y,-$r.z),wf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wf)}},ei=class extends Er{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new fh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},ph=class extends uo{constructor(){super(new ki(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Sr=class extends Er{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.shadow=new ph}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Yi=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Fa=class extends wi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=zi.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return zi.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),zi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});zi.add(e,l),r.manager.itemStart(e)}};var ka=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Tf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Tf();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Tf(){return performance.now()}var mh=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let s,r,o;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,s=this.valueSize,r=e*s+s,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==s;++a)n[r+a]=n[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(n,r,0,a,s)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,s=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let l=t*this._origIndex;this._mixBufferRegion(n,s,l,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,s);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,s=n*this._origIndex;e.getValue(t,s);for(let r=n,o=s;r!==o;++r)t[r]=t[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,s,r){if(s>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,s){At.slerpFlat(e,t,e,t,e,n,s)}_slerpAdditive(e,t,n,s,r){let o=this._workIndex*r;At.multiplyQuaternionsFlat(e,o,e,t,e,n),At.slerpFlat(e,t,e,t,e,o,s)}_lerp(e,t,n,s,r){let o=1-s;for(let a=0;a!==r;++a){let l=t+a;e[l]=e[l]*o+e[n+a]*s}}_lerpAdditive(e,t,n,s,r){for(let o=0;o!==r;++o){let a=t+o;e[a]=e[a]+e[n+o]*s}}},kh="\\[\\]\\.:\\/",GM=new RegExp("["+kh+"]","g"),Bh="[^"+kh+"]",WM="[^"+kh.replace("\\.","")+"]",XM=/((?:WC+[\/:])*)/.source.replace("WC",Bh),YM=/(WCOD+)?/.source.replace("WCOD",WM),qM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Bh),KM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Bh),ZM=new RegExp("^"+XM+YM+qM+KM+"$"),$M=["material","materials","bones","map"],gh=class{constructor(e,t,n){let s=n||at.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},at=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(GM,"")}static parseTrackName(e){let t=ZM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);$M.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};at.Composite=gh;at.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};at.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};at.prototype.GetterByBindingType=[at.prototype._getValue_direct,at.prototype._getValue_array,at.prototype._getValue_arrayElement,at.prototype._getValue_toArray];at.prototype.SetterByBindingTypeAndVersioning=[[at.prototype._setValue_direct,at.prototype._setValue_direct_setNeedsUpdate,at.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[at.prototype._setValue_array,at.prototype._setValue_array_setNeedsUpdate,at.prototype._setValue_array_setMatrixWorldNeedsUpdate],[at.prototype._setValue_arrayElement,at.prototype._setValue_arrayElement_setNeedsUpdate,at.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[at.prototype._setValue_fromArray,at.prototype._setValue_fromArray_setNeedsUpdate,at.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var xh=class{constructor(e,t,n=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=s;let r=t.tracks,o=r.length,a=new Array(o),l={endingStart:er,endingEnd:er};for(let c=0;c!==o;++c){let h=r[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Oh,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){let s=this._clip.duration,r=e._clip.duration,o=r/s,a=s/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let s=this._mixer,r=s.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=s._lendControlInterpolant(),this._timeScaleInterpolant=a);let l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,s){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case dg:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulateAdditive(a);break;case Uh:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulate(s,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,s=this.time+e,r=this._loopCount,o=n===ug;if(e===0)return r===-1?s:o&&(r&1)===1?t-s:s;if(n===Nh){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),s>=t||s<0){let a=Math.floor(s/t);s-=t*a,r+=Math.abs(a);let l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=s;if(o&&(r&1)===1)return t-s}return s}_setEndings(e,t,n){let s=this._interpolantSettings;n?(s.endingStart=tr,s.endingEnd=tr):(e?s.endingStart=this.zeroSlopeAtStart?tr:er:s.endingStart=da,t?s.endingEnd=this.zeroSlopeAtEnd?tr:er:s.endingEnd=da)}_scheduleFading(e,t,n){let s=this._mixer,r=s.time,o=this._weightInterpolant;o===null&&(o=s._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=t,a[1]=r+e,l[1]=n,this}},JM=new Float32Array(1),Es=class extends vi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let n=e._localRoot||this._root,s=e._clip.tracks,r=s.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName,h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==r;++u){let d=s[u],f=d.name,x=h[f];if(x!==void 0)++x.referenceCount,o[u]=x;else{if(x=o[u],x!==void 0){x._cacheIndex===null&&(++x.referenceCount,this._addInactiveBinding(x,l,f));continue}let m=t&&t._propertyBindings[u].binding.parsedPath;x=new mh(at.create(n,f,m),d.ValueTypeName,d.getValueSize()),++x.referenceCount,this._addInactiveBinding(x,l,f),o[u]=x}a[u].resultBuffer=x.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,n)}let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let s=this._actions,r=this._actionsByClip,o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=s.length,s.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],s=e._cacheIndex;n._cacheIndex=s,t[s]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;let u=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let s=this._bindingsByRootAndName,r=this._bindings,o=s[t];o===void 0&&(o={},s[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,s=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[s],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[s]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new Na(new Float32Array(2),new Float32Array(2),1,JM),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let s=t||this._root,r=s.uuid,o=typeof e=="string"?Xi.findByName(s,e):e,a=o!==null?o.uuid:e,l=this._actionsByClip[a],c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Uh),l!==void 0){let u=l.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;let h=new xh(this,o,t,n);return this._bindAction(h,c),this._addInactiveAction(h,a,r),h}existingAction(e,t){let n=t||this._root,s=n.uuid,r=typeof e=="string"?Xi.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[s]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,s=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(s,e,r,o);let a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){let o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){let c=o[a];this._deactivateAction(c);let h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete s[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(let o in r){let a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var Af=new Ge,Ba=class{constructor(e,t,n=0,s=1/0){this.ray=new ys(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new oo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Af.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Af),this}intersectObject(e,t=!0,n=[]){return _h(e,this,n,t),n.sort(Rf),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)_h(e[s],this,n,t);return n.sort(Rf),n}};function Rf(i,e){return i.distance-e.distance}function _h(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)_h(r[o],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yh);var Xa={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var vn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},jM=new ki(-1,1,1,-1,0,1),Hh=class extends lt{constructor(){super(),this.setAttribute("position",new it([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new it([0,2,0,0,2,0],2))}},QM=new Hh,Ki=class{constructor(e){this._mesh=new ge(QM,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,jM)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Ya=class extends vn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof It?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=qi.clone(e.uniforms),this.material=new It({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Ki(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var mo=class extends vn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},qa=class extends vn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Ka=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Te);this._width=n.width,this._height=n.height,t=new on(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Vn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ya(Xa),this.copyPass.material.blending=$n,this.clock=new ka}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}mo!==void 0&&(o instanceof mo?n=!0:o instanceof qa&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Te);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Za=class extends vn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Se}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var tp={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Se(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Tr=class i extends vn{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new Te(e.x,e.y):new Te(256,256),this.clearColor=new Se(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new on(r,o,{type:Vn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new on(r,o,{type:Vn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new on(r,o,{type:Vn});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}let a=tp;this.highPassUniforms=qi.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new It({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Te(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Xa;this.copyUniforms=qi.clone(h.uniforms),this.blendMaterial=new It({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:ht,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Se,this.oldClearAlpha=1,this.basic=new We,this.fsQuad=new Ki(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Te(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new It({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Te(.5,.5)},direction:{value:new Te(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}};Tr.BlurDirectionX=new Te(1,0);Tr.BlurDirectionY=new Te(0,1);var np={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var $a=class extends vn{constructor(){super();let e=np;this.uniforms=qi.clone(e.uniforms),this.material=new Da({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Ki(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Qe.getTransfer(this._outputColorSpace)===pt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Mh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===bh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Eh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===fo?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Sh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===wh&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Vh=[{id:"icb01",title:"I CALL BULLSHIT \xB7 VOL 1",world:"ramparts"},{id:"icb04",title:"THE PERSIAN THREAD \xB7 VOL 4",world:"ramparts"},{id:"icb05",title:"BEFORE THE PLAYBOOK \xB7 VOL 5",world:"ramparts"},{id:"shogun",title:"THE BLACK SHOGUN ANCESTORS",world:"ramparts"},{id:"mansas",title:"NO BS NO CAP \xB7 THE MANSAS",world:"ramparts"},{id:"icb06",title:"THE FIRST THOUGHT \xB7 VOL 6",world:"venus"},{id:"icb08",title:"BEFORE THE BEGINNING \xB7 VOL 8",world:"venus"},{id:"nabta",title:"NO BS NO CAP \xB7 NABTA PLAYA",world:"venus"},{id:"cs1",title:"COSMIC SHIFTS \xB7 VOL 1",world:"venus"},{id:"cs2",title:"COSMIC SHIFTS \xB7 VOL 2",world:"venus"},{id:"icb02",title:"THE FIRST ERASURE \xB7 VOL 2",world:"archive"},{id:"icb03",title:"THE WEB OF AMNESIA \xB7 VOL 3",world:"archive"},{id:"icb07",title:"THE PLAGUE INHERITANCE \xB7 VOL 7",world:"archive"},{id:"icb10",title:"B.S. BODY SNATCHERS \xB7 VOL 10",world:"archive"},{id:"jinn",title:"POLY JINN-ISIS",world:"archive"},{id:"oms",title:"THE OCCULT MEDIA SPELL",world:"archive"},{id:"legacy",title:"THE LEGACY DOCUMENT",world:"archive"}],ip={ramparts:[{id:"r01",v:"icb01",t:"KHEM BECAME CHEMISTRY",l:"The word chemistry derives from Khem, the ancient Egyptian name for Egypt: the Black Land. Ka became the bioelectromagnetic field, Ma'at became natural law, Nun became the quantum vacuum. The science was renamed and re-presented without its authors' names attached. This is not interpretation. This is etymology.",s:"I Call Bullshit \xB7 Ch. 2, The Etymology Is the Evidence"},{id:"r02",v:"icb01",t:"VRIL. ORGONE. SCALAR. SAME THEFT.",l:"In 1938 Himmler's SS Ahnenerbe sent an expedition to Tibet to claim its spiritual science as Aryan property. The hidden force they called vril was rebranded as orgone, then scalar energy, then torsion fields. Each rebrand erased the African and Asian origins further. Different names. Same theft.",s:"I Call Bullshit \xB7 Ch. 3, The Nazi-Tibet Operation"},{id:"r03",v:"icb01",t:"THE FOUR MOVES",l:"The suppression has always had four moves: Physical Destruction, Institutional Exclusion, Terminological Appropriation, and Economic Suppression and Microdosing. They burned the libraries. They renamed the science. They excluded the scientists. Now they sell you the microdose and call it enlightenment.",s:"I Call Bullshit \xB7 Ch. 5, The Suppression Has Always Had Four Moves"},{id:"r04",v:"icb04",t:"ELAM BUILT BEFORE PERSIA",l:"The Elamites raised Chogha Zanbil, a five-tiered ziggurat 60 meters high, around 1250 BCE, and ruled from Susa, inhabited since 4395 BCE. Herodotus listed Aithiopes, burnt-faced people, among the Persian Empire's subjects. The Iranian national narrative pretends they never existed. This is not a knowledge gap. It is a policy.",s:"The Persian Thread \xB7 Part II, The Elamites"},{id:"r05",v:"icb04",t:"THE DOUBLE DELETION",l:"One sentence erases two truths: they are dark because it is very, very hot in the southern part of Iran. Blaming the climate erases the ancient Elamite presence and the Indian Ocean slave trade at once, leaving 1 to 2 million Afro-Iranians in a historical vacuum. Sun doesn't cause ancestry.",s:"The Persian Thread \xB7 Part IV, The Double Deletion"},{id:"r06",v:"icb04",t:"THEY COULDN'T ERASE THE DRUMS",l:"Bandari music of southern Iran is East African memory passed body to body. Its Zar rituals still name spirits Pepe and Mature, from the Swahili, and Cinyase, from the Nyasa language of Malawi. Slavery in Iran was abolished only in 1929. The archive survives in the body when it cannot survive in the books.",s:"The Persian Thread \xB7 Part V, The Living Archive"},{id:"r07",v:"icb05",t:"WHITE SKIN IS YOUNGER THAN KEMET",l:"Ancient DNA shows European hunter-gatherers in Spain, Luxembourg and Hungary still lacked the light-skin variants SLC24A5 and SLC45A2. For 30,000 years the people of Europe were dark-skinned. White skin is younger than agriculture, younger than Elam, younger than Kemet. It is not the origin of anything. It is a result.",s:"Before the Playbook \xB7 Part I, White Skin Is Not Ancient"},{id:"r08",v:"icb05",t:"SKY FATHER OVER EARTH MOTHER",l:"Around 3300 BCE the Yamnaya came off the Pontic-Caspian steppe with the horse, the wheel, bronze weapons and a Sky Father god. In about 500 years they accounted for up to 75% of central Europe's DNA, replacing goddess-centered Old Europe, whose cities were larger than the earliest cities of Mesopotamia.",s:"Before the Playbook \xB7 Parts II-IV, Old Europe and the Yamnaya"},{id:"r09",v:"icb05",t:"NOT CORRUPTED. SURROUNDED.",l:"The Hyksos were not spiritually corrupted from within. By the time they were expelled in 1550 BCE, the world around them had been running the Yamnaya conquest operating system for 1,500 years. The playbook started when someone decided the Father in the Sky was more important than the Mother in the Earth.",s:"Before the Playbook \xB7 Preface and Part V"},{id:"r10",v:"shogun",t:"YASUKE WAS NOT A MYTH",l:"The Shinchoko-ki, a Japanese eyewitness chronicle, records an African man reaching Kyoto in 1581. Oda Nobunaga took him into personal service with a house, a stipend, a sword and the name Yasuke. He fought at Honno-ji in 1582. His strength surpassed that of 10 men. The African samurai is a documented fact.",s:"The Black Shogun Ancestors \xB7 Ch. I, Yasuke"},{id:"r11",v:"shogun",t:"THE GREAT GENERAL OF 797",l:"Sakanoue no Tamuramaro was named Sei-i Taishogun in 797, only the second man to hold the title, and his weapons were buried with him by imperial decree. Chamberlain in 1911, DuBois in 1915 and Woodson in 1922 named him Black. That scholarship was met not with refutation but with omission.",s:"The Black Shogun Ancestors \xB7 Ch. II, The Black Shogun"},{id:"r12",v:"shogun",t:"THE ASYMMETRIC STANDARD",l:"Scandinavian sagas were treated as serious evidence of Viking voyages to North America. Septimius Severus's Libyan origin is celebrated. Tamuramaro's potential African origin is treated as a curiosity. The standard applied to Black historical claims is demonstrably higher. I Call Bullshit on that asymmetry, on the record.",s:"The Black Shogun Ancestors \xB7 Ch. V, The Scholarly Battlefield"},{id:"r13",v:"mansas",t:"THE CHARTER OF KURUKAN FUGA",l:"Proclaimed after the victory at Kirina and held in the bodies of griots for nearly 800 years, the Manden Charter protected the right to life, made every child's education the duty of the entire society, and said women should be associated with all governance. Thirteenth century. UNESCO inscribed it in 2009.",s:"The Mansas \xB7 Part IV, The Kurukan Fuga"},{id:"r14",v:"mansas",t:"2,000 SHIPS WEST",l:"In Cairo in 1324 Mansa Musa told how the king before him sent 400 ships to find the furthest limit of the Atlantic, then sailed himself with 2,000 and never came back. Recorded by al-Umari, it proves an empire attempted the crossing more than 180 years before Columbus. The most aggressively suppressed part of the record.",s:"The Mansas \xB7 Part VI, The Atlantic Voyage of Mansa Muhammad ibn Qu"},{id:"r15",v:"mansas",t:"THE SISTER WHO WON KIRINA",l:"Nana Triban, sold into marriage with the sorcerer-king Sumanguru, played along until he bragged his secret: the spur of a white rooster could kill him. She fled to Sundiata's camp with it, and he tipped his arrow with it. The decisive weapon at Kirina was not his cavalry. It was his sister's mind.",s:"The Mansas \xB7 Part III, Nana Triban"},{id:"r16",v:"mansas",t:"QUEEN KASSI, CO-EQUAL RULER",l:"Mali reserved a throne-level role for a co-equal queen. When Mansa Suleyman tried to demote Kassi for a commoner, the noble women of court rebelled, and from sanctuary in the mosque she sent secret messages that sparked civil war. Ibn Battuta saw her receive gifts in her own right in 1352.",s:"The Mansas \xB7 Part V, Queen Kassi"}],venus:[{id:"v01",v:"icb06",t:"THE THREE THOUGHTS OF WAR",l:"If all is thought, war began as a thought. Three of them: I am separate from the Earth. There is not enough. The Other is my enemy. Believed deeply enough, long enough, and passed down through enough generations of children raised in fear, they became the entire edifice of 5,000 years of war.",s:"The First Thought \xB7 Part II, The Three Candidate First Thoughts"},{id:"v02",v:"icb06",t:"HOW A THOUGHT BECOMES AN EMPIRE",l:"Thought becomes story. Story becomes memory, then emotion, then instinct, then culture. Priesthood codifies culture into theology, theology into law, and law enforced by military power becomes civilization. Once it is law, nobody has to believe the thought consciously anymore. The law enforces it.",s:"The First Thought \xB7 Part III, The Transmission Mechanism"},{id:"v03",v:"icb06",t:"MY TRUTH IS THE FINAL MOVE",l:"After 5,000 years of suppressing access to cosmic truth through violence and erasure, the most elegant move needs no army: get people to abandon the concept of a truth accessible to all and replace it with 'my truth.' Kemet's answer was Maat, a cosmic order that existed before the human observer.",s:"The First Thought \xB7 Part V, My Truth vs. THE Truth"},{id:"v04",v:"icb08",t:"ONE MAN FOR EVERY 17 WOMEN",l:"Around 5,000 BCE the diversity of the male Y-chromosome collapsed across Africa, Europe and Asia to a level equal to one man reproducing for every 17 women. The official mask says warfare. Pull it off and the question remains: what was coordinated enough to do this on a planetary scale?",s:"Before the Beginning \xB7 Mask #1, The Genetic Bottleneck"},{id:"v05",v:"icb08",t:"ENKI VERSUS ENLIL",l:"The oldest written records on Earth describe a split: Enki, of wisdom and water, who warns Ziusudra of the flood and consistently favors humanity, and Enlil, of authority and control, who seeks to limit and destroy it. The same battle as Maat and Isfet, Earth Mother and Sky Father, in different centuries.",s:"Before the Beginning \xB7 Mask #4, The Sumerian Tablets"},{id:"v06",v:"icb08",t:"THE FLOOD CAME BEFORE GENESIS",l:"The Sumerian flood story, Epic of Gilgamesh tablet XI, predates the Genesis flood by at least 1,000 years: a divine warning, a man told to build a boat, animals taken aboard, a landing on a mountain, birds sent out to find land. The Genesis story is documented to come after.",s:"Before the Beginning \xB7 Mask #4, The Sumerian Tablets"},{id:"v07",v:"nabta",t:"OLDER THAN STONEHENGE",l:"By 4800 BCE the builders of Nabta Playa had raised the world's oldest known astronomical calendar circle, its stone gates aligned to the summer solstice sunrise, 2,000 years before Stonehenge. Its alignments may also track Sirius and Orion's Belt. Most Egyptologists Wendorf spoke to had never heard of it.",s:"No BS No Cap \xB7 Nabta Playa, Ch. 3 and 4"},{id:"v08",v:"nabta",t:"HATHOR WAS BORN IN THE SAHARA",l:"Around 5,500 BCE Nabta Playa's pastoralists buried sacrificial cattle in clay-lined chambers and left a cow-shaped stone, perhaps the oldest known sculpture in Egypt. Britannica says Hathor's worship began in dynastic times. Wrong. It began at Nabta Playa, 2,000 years before any dynastic Egyptian was born.",s:"No BS No Cap \xB7 Nabta Playa, Ch. 3, What They Actually Did"},{id:"v09",v:"nabta",t:"BLACK GENESIS",l:"History forgot Nabta Playa because 20th-century archaeology was looking toward the Fertile Crescent. Dental and skeletal analysis points to a sub-Saharan African people who, as the Sahara dried, moved east to the Nile. The lead excavators themselves called it a black genesis for Egyptian civilization.",s:"No BS No Cap \xB7 Nabta Playa, Ch. 1, 2 and 5"},{id:"v10",v:"cs1",t:"THE VENUS TABLE",l:"Dresden Codex: sixty-five Venus cycles of 584 days, corrected by subtracting 4 or 8 days. No fractions, no decimals, no algebra. Alternated nine to two, the corrections hold the table within one day of the real Venus for roughly 8,049 years. Somebody counted, and they were not guessing.",s:"Cosmic Shifts Vol. I \xB7 Ch. 1, Mesoamerica"},{id:"v11",v:"cs1",t:"WHERE YOUR 24 HOURS CAME FROM",l:"Kemet ran thirty-six decan stars, one per ten-day decade. About 18 rose on a night, about 7 were lost to twilight, and the 11 risings left marked 12 intervals. Mirror that onto daylight and you have the 24-hour day. It is not a Babylonian import. Every clock on Earth still runs on this arithmetic.",s:"Cosmic Shifts Vol. I \xB7 Ch. 2, Kemet"},{id:"v12",v:"cs1",t:"THE DECREE THEY IGNORED",l:"In 238 BCE a synod of Egyptian priests at Canopus ordered a sixth epagomenal day every fourth year, giving the reason outright: the rise of Sothis advances to another day in every 4 years. It was not implemented. Somebody understood the problem exactly, said so in writing, and was ignored.",s:"Cosmic Shifts Vol. I \xB7 Ch. 2, The Sothic Cycle"},{id:"v13",v:"cs1",t:"THE COUNT IS STILL ALIVE",l:"Highland Guatemalan daykeepers, the ajq'ijab', have kept the 260-day Tzolk'in without interruption through the Conquest, the colonial period and twentieth-century violence. Somebody counted today's day-sign this morning. The Dreamspell 13-Moon calendar is a modern invention wearing its name.",s:"Cosmic Shifts Vol. I \xB7 Ch. 1, Mesoamerica"},{id:"v14",v:"cs2",t:"A NUMBER THAT SURVIVED",l:"Hipparchus found precession around 129 BCE by comparing his measure of Spica with one Timocharis wrote down 160 years before. It is invisible in one lifetime; its discovery was an act of archival comparison. His own treatise is lost, known only through Ptolemy. Transmission is everything.",s:"Cosmic Shifts Vol. II \xB7 Ch. 10, Precession"},{id:"v15",v:"cs2",t:"THE DIGGING STARS",l:"One small cluster served as a calendar on every inhabited continent. Xhosa isiLimela, Sotho Selemela, Swahili Kilimia: the digging stars, whose winter rising opens the planting year. M\u0101ori Matariki opens the new year. Hesiod timed harvest and ploughing by it. The Pleiades, read the world over.",s:"Cosmic Shifts Vol. II \xB7 Ch. 13, The Pleiades"},{id:"v16",v:"cs2",t:"THE FARMERS WHO READ EL NI\xD1O",l:"Andean farmers on the altiplano watch the Pleiades around 24 June and forecast the rains from how bright and numerous the stars look, a practice documented within decades of the Spanish conquest and still done now. A 2000 study in Nature proposed the mechanism: El Ni\xF1o cirrus dims the cluster.",s:"Cosmic Shifts Vol. II \xB7 Ch. 13, The One Place Layer 3 Might Pass"}],archive:[{id:"a01",v:"icb02",t:"THE FIRST ERASURE",l:"The playbook didn't start in 1938. It started in 1550 BCE. The Hyksos, a melanated Canaanite-Hamitic people, grew into Egypt's Nile Delta for generations before they ruled it. Ahmose I burned Avaris, sacked their tombs and chased them into Canaan. And the first people they erased looked like you.",s:"The First Erasure \xB7 Preface and Part II, Move 1"},{id:"a02",v:"icb02",t:"THE KING WHO SAVED THE PAPYRI",l:"Hyksos King Apophis had scribes copy the Rhind Mathematical Papyrus and the Edwin Smith Surgical Papyrus, the world's oldest known surgical document. Their chariot and composite bow built the New Kingdom. Then they were left off the temple king lists. The science was kept. The scientists were erased.",s:"The First Erasure \xB7 Ch. 3 and Part II, Moves 2-3"},{id:"a03",v:"icb02",t:"AVARIS. ALEXANDRIA. CORDOBA.",l:"The line is unbroken: the Hyksos cut from the king lists, the Library of Alexandria dismantled and Hypatia murdered, the libraries of Cordoba and Granada burned by the Inquisition. They burned Avaris. They burned Alexandria. They burned Cordoba. Then they sold the stolen science back to us as enlightenment.",s:"The First Erasure \xB7 Part IV, The Unbroken Line"},{id:"a04",v:"icb03",t:"MOOR MEANT BLACK",l:"From the Middle Ages to the 17th century Europeans depicted Moors as black and called Muslims of any other complexion 'white Moors.' An 1817 encyclopedia still defined moor as a negro, a blackamoor. The default Moor was Black. Modern literature reversed it, and that is not accidental.",s:"The Web of Amnesia \xB7 Thread 3, The Blackamoors"},{id:"a05",v:"icb03",t:"THE HOOD CAME FROM SPAIN",l:"The pointed hood began as the capirote, forced on those the Spanish Inquisition convicted of heresy or impure blood, while limpieza de sangre made ancestry, not faith, the basis for rights. Its targets were Moriscos and converted Jews. The target changed. The uniform stayed the same.",s:"The Web of Amnesia \xB7 Threads 4 and 6, The Moriscos and the KKK"},{id:"a06",v:"icb07",t:"THEY WERE LACKING COWS",l:"The plagues did not originate in Africa. They came from grain silos, animal pens and dense farming settlements: 8 of 15 major temperate diseases reached humans from domestic animals. Cows gave us measles. They called Indigenous peoples primitive for not having diseases. They were lacking cows.",s:"The Plague Inheritance \xB7 Parts I and III"},{id:"a07",v:"icb07",t:"IMMUNITY BUILT ON GRAVES",l:"European immunity was not a biological gift. It was the inherited scar tissue of 5,000 years of civilizational sickness. When the diseases reached the Americas, up to 95% of the Indigenous population died. They were healthy until a sick civilization arrived and called the catastrophe an act of God.",s:"The Plague Inheritance \xB7 Parts III and IV"},{id:"a08",v:"icb10",t:"THE BODY SNATCHERS' OFFER",l:"The final phase of the five-thousand-year epistemicide is not another law, curriculum or algorithm. It is an offer from transhumanism, the Silicon Valley theology of body abandonment: leave your biological body behind, something better is waiting. This document is why you should not take that offer.",s:"B.S. Body Snatchers \xB7 Authors' Declaration"},{id:"a09",v:"jinn",t:"ONE PERSON. ONE CHROMOSOME.",l:"The SLC24A5 mutation behind European light skin traces to a single ancestral copy that arose in West Asia, possibly 22,000 to 29,000 years ago. Most European selection for pale skin came in the last 8,000 years. It is a reduced production of melanin. That is the entirety of what it is.",s:"POLY JINN-ISIS \xB7 Ch. 1, The Indictment, Section III"},{id:"a10",v:"jinn",t:"HOW WHITE SKIN WAS GRAFTED",l:"In 1795 Blumenbach coined 'Caucasian' and cast white skin not as a recent low-UV mutation but as humanity's original form, every other color a degeneration. Morton, Nott, Gliddon and Agassiz built polygenism on top. The mutation became a mythology, then a mandate. The meaning was assigned.",s:"POLY JINN-ISIS \xB7 Ch. 1, The Indictment, Section IV"},{id:"a11",v:"jinn",t:"FROM SKULLS TO CLASSROOMS",l:"Samuel Morton manipulated skull measurements to fit a predetermined racial hierarchy. Darwin dealt polygenism a death blow, but it mutated into eugenics. In 1960 Louisiana made Race and Reason required reading for every high school student. The pipeline from Morton's skulls to Louisiana's classrooms was direct.",s:"POLY JINN-ISIS \xB7 Ch. 1, The Indictment, Section IV"},{id:"a12",v:"oms",t:"THE INVERSION DOCTRINE",l:"The spell runs on stolen Kemetic science turned upside down. Crowley's Thelema inverted it for power, and Kenneth Grant's Typhonian Order made Set, the chaos against which Ma'at defines itself, the object of worship. Cosmic balance was replaced with the worship of entropy.",s:"The Occult Media Spell \xB7 Ch. 1, The Inversion Doctrine"},{id:"a13",v:"oms",t:"THE LAB AND THE STUDIO",l:"The CIA's MK-Ultra used drugs, hypnosis, sensory deprivation and trauma to split personalities, experimenting on prisoners, mental patients and, disproportionately, Black Americans. Operation Mockingbird recruited hundreds of journalists, editors and executives. The line between intelligence and entertainment blurred.",s:"The Occult Media Spell \xB7 Ch. 2, MK-Ultra and Operation Mockingbird"},{id:"a14",v:"oms",t:"HIP-HOP, HIJACKED",l:"Hip-hop was born in the Bronx as peace, love, unity and having fun: a weapon of the people. The industry's gatekeepers moved to co-opt it. Consciousness and social commentary gave way to materialism, violence and nihilism. Conscious artists were marginalized; the most toxic narratives were rewarded.",s:"The Occult Media Spell \xB7 Ch. 4, The Trinity of Trauma"},{id:"a15",v:"oms",t:"GRANDMASTER AND GRAND WIZARD",l:"Asian martial arts titles meant teacher: Sensei, Shihan, Soke, Sabom-nim, Sifu. Grandmaster is a Western invention, from the Grand Master of the Templars and Freemasonry, the same fraternal well that gave the KKK its Grand Wizard. Reclaim the authentic titles. Honor the melanated lineage.",s:"The Occult Media Spell \xB7 Ch. 7, The Grandmaster and the Grand Wizard"},{id:"a16",v:"oms",t:"THE COUNTER-SPELL",l:"Teachers of melanin, consciousness and African spirituality, from Dr. Delbert Blair to Bobby Hemmitt to Dr. Laila Afrika, have seen their books made hard to find and their lectures scrubbed from the internet. The system does not waste its energy on those who pose no threat. They are the counter-spell.",s:"The Occult Media Spell \xB7 Ch. 5, The Counter-Spell"},{id:"a17",v:"legacy",t:"ALEXANDRIA: HOUSE OF STOLEN GOODS",l:"The Library of Alexandria, founded under Ptolemy I, was not a gift to the world. It was a repository for stolen goods, mandated to collect the texts of every conquered civilization. Ships arriving in Alexandria had to surrender their books for copying. The originals were kept; copies were returned.",s:"The Legacy Document \xB7 Ch. 2.2, Alexander and the Looting of the Mind"},{id:"a18",v:"legacy",t:"THE FIRST EPISTEMICIDE",l:"Alexandria burned in stages: Caesar's harbor fire in 48 BCE, Aurelian's attack in 270-275 CE, Theodosius I's destruction of the Serapeum in 391 CE. Steal the knowledge, destroy the source, present it as original. You cannot be accused of plagiarism if the original no longer exists.",s:"The Legacy Document \xB7 Ch. 2.4, The Burning of the Libraries"},{id:"a19",v:"legacy",t:"GRANADA, 1502",l:"After Granada fell, Cardinal Cisneros ordered all Arabic manuscripts in Granada burned in 1502, an estimated 80,000 to 1,000,000 volumes. What Europe had learned in Moorish universities for three centuries was repackaged as the Renaissance, its origins erased. The second great epistemicide.",s:"The Legacy Document \xB7 Ch. 5.1, The Reconquista"},{id:"a20",v:"legacy",t:"ONE SERPENT, SEVEN SKINS",l:"The serpent does not die. It sheds its skin: military conquest, religious fabrication, Moorish appropriation, colonial slavery, institutional control, pharmaceutical suppression, and now Kemetic science retold in quantum vocabulary with melanin omitted. One serpent. Seven skins. One target.",s:"The Legacy Document \xB7 Ch. 15.1, The Serpent's Seven Skins"}]};var re={purple:"#2D1B4E",gold:"#C9A84C",orange:"#E8843C",ink:"#0B0713",cyan:"#4CE0E0",red:"#C43B3B",char:"#B6D02E",violet:"#9b6cff",blue:"#2f6bff",hotred:"#ff2b2b",pink:"#ff7ad9",green:"#3ce08f"},ja=7.4;var sp=9.6,rp=8.4,op=27,Gh=.55,ap=1.4,lp=1,cp=3,Wh=21,hp=.16,Xh=.42,up=.22,dp=.24,Mn=.46;var fp=2;var Qa=3,Mt={single:{name:"ASTROLABE BOLT",col:re.gold,cd:.13,spd:24,size:.16,dmg:1},scatter:{name:"GIRIH SCATTER",col:re.cyan,cd:.17,spd:22,size:.14,dmg:1},rapid:{name:"ALGEBRA RIG",col:"#bfe6ff",cd:.06,spd:28,size:.11,dmg:.6},beam:{name:"ASTROLABE BEAM",col:"#ffffff",cd:.24,spd:34,size:.13,dmg:1.6,pierce:!0},flame:{name:"ALCHEMICAL FLAME",col:re.orange,cd:.11,spd:13,size:.34,dmg:.5,life:.42}},pp={single:"ASTROLABE LANCE",scatter:"GIRIH RING",rapid:"ALGEBRA SWARM",beam:"ASTROLABE SWEEP",flame:"ALCHEMICAL BLOOM"},mp=["single","scatter","rapid","beam","flame"],Ss=.9,Ar=3,Ja=["#e8a84c","#5fe0cf","#f29bb0","#fff3c4"],ti=[{dmg:4,reach:1.6,arc:1.35,t:.24,speed:2.1,hitstop:.09,shake:3,knock:8,unarmed:!1,launch:!1,preFreeze:.05,col:Ja[0],name:"IAIJUTSU"},{dmg:3.6,reach:1.55,arc:1,t:.2,speed:2.3,hitstop:.08,shake:4,knock:10,unarmed:!1,launch:!1,preFreeze:0,col:Ja[1],name:"KESA-GIRI"},{dmg:3.2,reach:1.6,arc:.45,t:.15,speed:2.8,hitstop:.07,shake:3,knock:14,unarmed:!1,launch:!1,preFreeze:0,col:Ja[2],name:"TSUKI"},{dmg:10,reach:1.7,arc:1.4,t:.36,speed:1.5,hitstop:.22,shake:9,knock:22,unarmed:!1,launch:!0,preFreeze:.05,col:Ja[3],name:"TACHI ULTRA"}],go=ti.length,lS=ti.map(i=>i.dmg),el=2.5,Zi=1.15,gp=14;var Yh=.5,$i=100,xp=20,_p=34,qh=1.2,yp=30,vp=.18,Ji=1.15,Mp={grunt:{hp:3,spd:3.7,r:.5,aggro:13,contact:!0},shooter:{hp:5,spd:2.9,r:.5,aggro:15,keep:8,shootCd:1.7,bspd:9,armor:.5,guard:3},flyer:{hp:3,spd:4.6,r:.55,aggro:16,hover:3.3,diveCd:3.6},brute:{hp:16,spd:2.5,r:.95,aggro:12,contact:!0,armor:.65,guard:5}},bp=3.2,Ot={off:[1.25,3.3,5.9],fov:58,lerp:6,near:.3,far:260,bossZoom:1.5,lookHeight:1.55,overhead:[0,10.5,9.5],trail:2.6,minDist:2.2},bn={ramparts:{key:"ramparts",name:"THE RAMPARTS",tag:"Moorish coast at dusk \xB7 girih arches \xB7 the book-burning engine at the gate",rail:"COAST \u2192 THE GATE",boss:"engine",accent:re.gold,sky:["#3a2352","#241542","#0a0618"],fog:"#1a1030",win:"The erasure-engine is scrap. The libraries breathe another day. The knowledge stays UNERASED."},venus:{key:"venus",name:"NEO-VENUS",tag:"terraformed sky-city \xB7 Earth, the Moon, Jupiter & Saturn overhead \xB7 the Censor Array",rail:"SKY-DOCK \u2192 THE ARRAY",boss:"censor",accent:re.pink,sky:["#150826","#9a4a3c","#c8783a"],fog:"#3a1a3a",win:"The Censor Array is dark. Venus keeps her records. The knowledge stays UNERASED."},archive:{key:"archive",name:"THE ARCHIVE DEEP",tag:"the vault beneath the library \xB7 candle-lit stacks \xB7 the Redactor press",rail:"STACKS \u2192 THE PRESS",boss:"redactor",accent:re.violet,sky:["#07040c","#0d0716","#05030a"],fog:"#0a0614",win:"The Redactor is jammed mid-stamp. Every page it swallowed comes back. The knowledge stays UNERASED."}},ni=["ramparts","venus","archive"],Ft={melvinci:{key:"melvinci",queen:!1,name:"MELVINCI",title:"THE KING",skin:"#5f3a20",skinD:"#3e2412",robe:"#241a5e",robeL:"#39299a",robeD:"#150e38",pant:"#181427",hair:"#1a1112",wrapB:re.gold,aura:re.cyan,accent:re.cyan,gem:"#2ee6a8"},kimaya:{key:"kimaya",queen:!0,name:"KI-MAYA",title:"THE QUEEN",skin:"#5f3a20",skinD:"#3e2412",robe:"#0e5c3c",robeL:"#18936a",robeD:"#07321f",pant:"#0d4a32",hair:"#191021",wrapB:re.gold,aura:re.green,accent:re.green,gem:"#ffd76a"},bizzle:{key:"bizzle",queen:!1,name:"3BIZZLE",title:"023 DESTROYER OF INJUSTICES",skin:"#4a2c18",skinD:"#2e1a0c",robe:"#0b0b0d",robeL:"#26262b",robeD:"#050506",pant:"#101012",hair:"#140c0a",wrapB:re.gold,aura:"#2ee6a8",accent:"#2ee6a8",gem:"#ff2b2b"},mahal:{key:"mahal",queen:!0,name:"MAJESTIC HEALER",title:"aka COSMIC08B \xB7 VLTRN8",skin:"#6b4028",skinD:"#452615",robe:"#5b2a9e",robeL:"#8a4fd6",robeD:"#2f1456",pant:"#3a1a66",hair:"#1a0f0c",wrapB:re.gold,aura:"#b56cff",accent:"#b56cff",gem:"#e8c25a"}},Ep={engine:{name:"ERASURE-ENGINE",wake:"RAISE THE WARD  [V]",hp:80},censor:{name:"CENSOR ARRAY",wake:"CENSOR ARRAY \u2014 SHOOT THE GAPS",hp:90},redactor:{name:"THE REDACTOR",wake:"THE REDACTOR \u2014 DASH THE SHOCKWAVE",hp:70}},Kh=[{key:"SCRIBE",min:0,hint:"Reach 4,000 style for SCHOLAR \u2014 parries, dash kills and blade finishers grow the multiplier."},{key:"SCHOLAR",min:4e3,hint:"Reach 8,000 style for SAGE \u2014 chain parries; three in a row arm the gold cannon."},{key:"SAGE",min:8e3,hint:"Take zero hits in the boss fight for UNERASED."},{key:"UNERASED",min:8e3,hint:"The knowledge stays UNERASED. There is nothing above this.",noHitBoss:!0}],Zh="unerased3d.lb.v1",$h="unerased3d.codex.v2",xo=ip;function eb(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}var Wn=(i,e)=>i+","+e,tb={ramparts:{seed:11,style:"stone",rooms:[{id:"coast",w:10,h:8,kind:"start"},{id:"court",w:14,h:10,dir:"N",foes:[["grunt",2],["shooter",1]],boxes:["scatter"],pillars:!0,terrace:!0},{id:"stair",w:6,h:10,dir:"N",foes:[["grunt",2]]},{id:"plaza",w:16,h:12,dir:"E",foes:[["grunt",3],["shooter",2]],boxes:["beam"],pillars:!0},{id:"wall",w:8,h:6,dir:"N",len:5,foes:[["shooter",2]]},{id:"bastion",w:14,h:12,dir:"N",foes:[["grunt",2],["shooter",1],["brute",1]],boxes:["rapid","power"],pillars:!0,terrace:!0},{id:"approach",w:10,h:10,dir:"W",len:5,foes:[["grunt",2],["shooter",2]],boxes:["flame","power"]},{id:"gate",w:15,h:11,dir:"N",len:5,kind:"boss",terrace:"boss"}]},venus:{seed:23,style:"slab",rooms:[{id:"dock",w:10,h:8,kind:"start"},{id:"pad1",w:12,h:10,dir:"N",len:6,foes:[["grunt",1],["shooter",1],["flyer",1]],boxes:["rapid"]},{id:"span",w:8,h:8,dir:"E",len:7,foes:[["flyer",2]]},{id:"pad2",w:14,h:12,dir:"N",len:6,foes:[["grunt",2],["shooter",2],["flyer",1]],boxes:["scatter","power"],pillars:!0,terrace:!0},{id:"bridge",w:6,h:8,dir:"W",len:8,foes:[["flyer",2]]},{id:"pad3",w:12,h:12,dir:"N",len:6,foes:[["grunt",2],["shooter",2]],boxes:["beam"],terrace:!0},{id:"hangar",w:12,h:10,dir:"N",len:6,foes:[["shooter",2],["flyer",1],["brute",1]],boxes:["flame","power"]},{id:"array",w:16,h:12,dir:"N",len:7,kind:"boss",terrace:"boss"}]},archive:{seed:37,style:"stacks",rooms:[{id:"well",w:10,h:8,kind:"start"},{id:"stack1",w:14,h:12,dir:"N",foes:[["grunt",2],["shooter",1]],boxes:["scatter"],shelves:!0},{id:"aisle",w:6,h:12,dir:"N",foes:[["grunt",2]]},{id:"stack2",w:16,h:12,dir:"W",foes:[["grunt",2],["shooter",2]],boxes:["power"],shelves:!0},{id:"reading",w:12,h:10,dir:"N",foes:[["grunt",3],["shooter",1]],boxes:["beam"],pillars:!0,terrace:!0},{id:"stack3",w:16,h:12,dir:"E",foes:[["grunt",2],["shooter",2]],boxes:["rapid"],shelves:!0},{id:"vault",w:10,h:10,dir:"N",foes:[["grunt",1],["shooter",2],["brute",1]],boxes:["flame","power"],terrace:!0},{id:"press",w:15,h:11,dir:"N",len:5,kind:"boss",terrace:"boss"}]}},Sp=(i,e,t)=>i.x0-t<e.x1&&i.x1+t>e.x0&&i.z0-t<e.z1&&i.z1+t>e.z0,wp=(i,e)=>{for(let t=i.z0;t<i.z1;t++)for(let n=i.x0;n<i.x1;n++)e(n,t)};function nb(i){let e=[],t=[],n=null;for(let s of i.rooms){let r,o=null;if(!n)r={x0:0,z0:-s.h,x1:s.w,z1:0};else{let l=s.len||4,c=n.rect,h=Math.floor((c.x0+c.x1)/2),u=Math.floor((c.z0+c.z1)/2);if(s.dir==="N"){o={x0:h-1,x1:h+1,z0:c.z0-l,z1:c.z0};let d=h-Math.floor(s.w/2);r={x0:d,x1:d+s.w,z1:o.z0,z0:o.z0-s.h}}else if(s.dir==="E"){o={z0:u-1,z1:u+1,x0:c.x1,x1:c.x1+l};let d=u-Math.floor(s.h/2);r={x0:o.x1,x1:o.x1+s.w,z0:d,z1:d+s.h}}else if(s.dir==="W"){o={z0:u-1,z1:u+1,x1:c.x0,x0:c.x0-l};let d=u-Math.floor(s.h/2);r={x1:o.x0,x0:o.x0-s.w,z0:d,z1:d+s.h}}else throw new Error("room "+s.id+": bad dir "+s.dir)}for(let l of e)if(Sp(r,l.rect,1))throw new Error("room "+s.id+" overlaps "+l.id);for(let l of t)if(Sp(r,l.rect,1)&&l.to!==s.id)throw new Error("room "+s.id+" overlaps corridor into "+l.to);let a={...s,rect:r,doors:[]};if(o){t.push({rect:o,from:n.id,to:s.id,dir:s.dir});let l=s.dir,c=l==="N"?{x:o.x0+1,z:o.z1}:l==="E"?{x:o.x0,z:o.z0+1}:{x:o.x1,z:o.z0+1},h=l==="N"?{x:o.x0+1,z:o.z0}:l==="E"?{x:o.x1,z:o.z0+1}:{x:o.x0,z:o.z0+1};n.doors.push(c),a.doors.push(h)}e.push(a),n=a}return{rooms:e,corrs:t}}function ib(i){let e=[],t=i.rect,n=t.x1-t.x0,s=t.z1-t.z0;if(i.pillars)for(let r of[.25,.75])for(let o of[.25,.75])e.push([t.x0+Math.floor(n*r),t.z0+Math.floor(s*o)]);if(i.shelves){let r=0;for(let o=t.z0+3;o<t.z1-3;o+=3,r++){let a=r%2===0;for(let l=t.x0+2;l<t.x1-2;l++)a&&l<t.x0+5||!a&&l>=t.x1-5||e.push([l,o])}}return e}var Tp=1,Ap=2,sb=1.4;function rb(i){let e=i.rect,t=Math.floor((e.x0+e.x1)/2),n=Math.floor((e.z0+e.z1)/2),s=[];if(i.terrace==="boss"){let r=e.x1-e.x0;for(let o of[e.x0+Math.floor(r*.2),e.x1-Math.floor(r*.2)-2])for(let a=0;a<2;a++)for(let l=0;l<2;l++)s.push([o+a,n+l,sb])}else if(i.terrace)for(let r=-1;r<=0;r++)s.push([t-2,n+r,Tp],[t-1,n+r,Tp],[t,n+r,Ap],[t+1,n+r,Ap]);return s}function tl(i,e,t,n){return i.doors.some(s=>Math.abs(s.x-e)<n&&Math.abs(s.z-t)<n)}function Jh(i){let e=tb[i];if(!e)throw new Error("no level: "+i);let t=eb(e.seed),{rooms:n,corrs:s}=nb(e),r=new Set,o=new Set;for(let b of n)wp(b.rect,(M,L)=>r.add(Wn(M,L)));for(let b of s)wp(b.rect,(M,L)=>r.add(Wn(M,L)));for(let b of n)for(let[M,L]of ib(b)){let k=Wn(M,L);r.has(k)&&!tl(b,M,L,3)&&o.add(k)}for(let b of o)r.delete(b);let a=new Map;for(let b of n)for(let[M,L,k]of rb(b)){let F=Wn(M,L);r.has(F)&&!o.has(F)&&!tl(b,M,L,3)&&(a.set(F,k),r.delete(F))}let l=new Set;for(let b of r){let[M,L]=b.split(",").map(Number);for(let k=-1;k<=1;k++)for(let F=-1;F<=1;F++){let H=Wn(M+F,L+k);!r.has(H)&&!o.has(H)&&!a.has(H)&&l.add(H)}}let c={x0:1/0,z0:1/0,x1:-1/0,z1:-1/0};for(let b of l){let[M,L]=b.split(",").map(Number);c.x0=Math.min(c.x0,M),c.z0=Math.min(c.z0,L),c.x1=Math.max(c.x1,M+1),c.z1=Math.max(c.z1,L+1)}let h=(b,M)=>({x:(b+.5)*2,z:(M+.5)*2}),u=[],d=[],f=[];for(let b of n){let M=b.rect,L=[],k=(T,C)=>T>=M.x0+1&&T<M.x1-1&&C>=M.z0+1&&C<M.z1-1&&r.has(Wn(T,C));for(let[T,C]of b.foes||[])for(let V=0;V<C;V++){let z=null;for(let D=0;D<60&&!z;D++){let B=M.x0+1+Math.floor(t()*(M.x1-M.x0-2)),J=M.z0+1+Math.floor(t()*(M.z1-M.z0-2));!k(B,J)||tl(b,B,J,3)||L.some(ce=>Math.abs(ce[0]-B)<2&&Math.abs(ce[1]-J)<2)||(z=[B,J])}z&&(L.push(z),u.push({type:T,...h(z[0],z[1]),room:b.id}))}let F=[[M.x0+1,M.z0+1],[M.x1-2,M.z0+1],[M.x0+1,M.z1-2],[M.x1-2,M.z1-2]].filter(([T,C])=>r.has(Wn(T,C))&&!tl(b,T,C,2));for(let T=F.length-1;T>0;T--){let C=Math.floor(t()*(T+1));[F[T],F[C]]=[F[C],F[T]]}(b.boxes||[]).forEach((T,C)=>{let V=F[C%F.length];V&&d.push({kind:T,...h(V[0],V[1]),room:b.id})});let H=(T,C,V)=>{l.has(Wn(T,C))&&f.push({...h(T,C),dir:V})};for(let T=M.x0+1;T<M.x1-1;T+=3)H(T,M.z0-1,"S"),H(T,M.z1,"N");for(let T=M.z0+2;T<M.z1-1;T+=3)H(M.x0-1,T,"E"),H(M.x1,T,"W")}let x=n.find(b=>b.kind==="start"),m=n.find(b=>b.kind==="boss"),g=x.rect,p=m.rect,_=h(Math.floor((g.x0+g.x1)/2),Math.floor((g.z0+g.z1)/2)),v=h(Math.floor((p.x0+p.x1)/2),p.z0+3),y=m.doors[0],S=[];if(y){let b=m.dir,M=b==="E"?-1:b==="W"?1:0,L=b==="N"?1:0;for(let k of[0,1])S.push(b==="N"?[y.x-1+k,y.z+L]:[y.x+M,y.z-1+k])}let E=n.map(b=>({id:b.id,kind:b.kind||"room",rect:b.rect,doors:b.doors,pillars:!!b.pillars,shelves:!!b.shelves,center:h((b.rect.x0+b.rect.x1)/2-.5,(b.rect.z0+b.rect.z1)/2-.5)})),w=new Set;return{key:i,style:e.style,cell:2,rooms:E,corridors:s.map(b=>b.rect),floor:r,walls:l,inner:o,dyn:w,plinths:a,bounds:c,start:_,bossPos:v,bossRect:p,gateCells:S,foes:u,boxes:d,torches:f,solidCell(b,M,L=0){let k=Wn(b,M);if(l.has(k)||o.has(k)||w.has(k))return!0;let F=a.get(k);return F!==void 0?L<F-.4:!r.has(k)},heightAt(b,M){return a.get(Wn(b,M))||0},roomAt(b,M){let L=Math.floor(b/2),k=Math.floor(M/2);return E.find(F=>L>=F.rect.x0&&L<F.rect.x1&&k>=F.rect.z0&&k<F.rect.z1)||null},sealGate(){for(let[b,M]of S)w.add(Wn(b,M))},openGate(){w.clear()}}}function Rp(i,e,t,n,s=0){let r=!1,o=Math.floor((e-n)/2),a=Math.floor((e+n)/2),l=Math.floor((t-n)/2),c=Math.floor((t+n)/2);for(let h=l;h<=c;h++)for(let u=o;u<=a;u++){if(!i.solidCell(u,h,s))continue;let d=u*2,f=d+2,x=h*2,m=x+2,g=Math.max(d,Math.min(e,f)),p=Math.max(x,Math.min(t,m)),_=e-g,v=t-p,y=_*_+v*v;if(!(y>=n*n))if(r=!0,y>1e-8){let S=Math.sqrt(y),E=n-S;e+=_/S*E,t+=v/S*E}else{let S=e-d,E=f-e,w=t-x,I=m-t,b=Math.min(S,E,w,I);b===S?e=d-n:b===E?e=f+n:b===w?t=x-n:t=m+n}}return{x:e,z:t,hit:r}}function Rr(i,e,t,n,s,r,o=0){let a=Math.max(1,Math.ceil(Math.hypot(s,r)/(n*.5))),l=!1;for(let c=0;c<a;c++){let h=Rp(i,e+s/a,t,n,o),u=Rp(i,h.x,t+r/a,n,o);e=u.x,t=u.z,l=l||h.hit||u.hit}return{x:e,z:t,hit:l}}function ws(i,e,t,n,s,r=0){let o=n-e,a=s-t,l=Math.max(1,Math.ceil(Math.hypot(o,a)/(2/2)));for(let c=1;c<=l;c++){let h=c/l;if(i.solidCell(Math.floor((e+o*h)/2),Math.floor((t+a*h)/2),r))return!0}return!1}function Cp(i,e,t,n=1/0){let s=i.heightAt(Math.floor(e/2),Math.floor(t/2));return s&&n>=s-.4?s:0}var ob=8;function Ip(i,e){return{hero:i,world:e,score:0,mult:1,bestMult:1,kills:0,styleKills:0,parries:0,parryChain:0,hits:0,bossHits:0,pages:0,t:0,inBoss:!1}}var Qh=i=>Math.max(1,Math.min(ob,Math.round(i*4)/4));function Pp(i,e=!1){let t=Qh(i.mult+(e?.25:.05)),n=Math.round((e?150:100)*i.mult);return{...i,score:i.score+n,mult:t,bestMult:Math.max(i.bestMult,t),kills:i.kills+1,styleKills:i.styleKills+(e?1:0)}}function Lp(i){let e=Qh(i.mult+.5);return{...i,score:i.score+Math.round(150*i.mult),mult:e,bestMult:Math.max(i.bestMult,e),parries:i.parries+1,parryChain:i.parryChain+1}}function eu(i){return{...i,score:i.score+300,pages:i.pages+1}}function Dp(i,e){return{...i,score:i.score+Math.round(e*10*i.mult)}}function Np(i){return{...i,mult:Qh(i.mult/2),parryChain:0,hits:i.hits+1,bossHits:i.bossHits+(i.inBoss?1:0)}}function Op(i,e){return{...i,t:i.t+e}}function Up(i){return{...i,inBoss:!0}}function zp(i){return{...i,parryChain:0}}function tu(i){return i.score>=8e3&&i.bossHits===0?"UNERASED":i.score>=8e3?"SAGE":i.score>=4e3?"SCHOLAR":"SCRIBE"}function Fp(i){return(Kh.find(e=>e.key===i)||Kh[0]).hint}function Cr(){try{return globalThis.localStorage||null}catch{return null}}function kp(i,e){try{let t=JSON.parse(i.getItem(e)||"{}");return t&&typeof t=="object"?t:{}}catch{return{}}}function Bp(i,e,t){try{return i.setItem(e,JSON.stringify(t)),!0}catch{return!1}}function nl(i=Cr()){return i?kp(i,Zh):{}}function Hp(i,e=Cr()){let t=nl(e),n={s:i.score,r:tu(i),h:i.hero,t:Math.round(i.t),k:i.kills,w:i.parries,d:new Date().toISOString().slice(0,10)},s=[...t[i.world]||[],n].sort((o,a)=>a.s-o.s).slice(0,5),r={...t,[i.world]:s};return e&&Bp(e,Zh,r),r}function _o(i,e=Cr()){let t=nl(e)[i]||[];return t.length?t[0]:null}function yo(i=Cr()){return i?kp(i,$h):{}}function nu(i,e,t=Cr()){let n=yo(t),s=n[i]||[];if(s.includes(e))return n;let r={...n,[i]:[...s,e]};return t&&Bp(t,$h,r),r}function Vp(i,e=Cr()){return(yo(e)[i]||[]).length}function iu(i,e,t=yo()[i]||[]){let n=xo[i];return n.find(s=>!t.includes(s.id))||n[e%n.length]}var jh={perScroll:.12,perPower:.15,max:2.2};function su(i,e){let t=Number.isFinite(i)?Math.max(0,i):0,n=Number.isFinite(e)?Math.max(1,e):1;return Math.min(jh.max,1+jh.perScroll*t+jh.perPower*(n-1))}function Gp(){let i=null,e=null,t=!1,n=1,s=()=>t?0:.5*n;function r(){if(i){i.state==="suspended"&&i.resume();return}let m=window.AudioContext||window.webkitAudioContext;m&&(i=new m,e=i.createGain(),e.gain.value=s(),e.connect(i.destination))}function o(m,g,p="square",_=.2,v){if(!i||t)return;let y=i.createOscillator(),S=i.createGain(),E=i.currentTime;y.type=p,y.frequency.setValueAtTime(m,E),v&&y.frequency.exponentialRampToValueAtTime(Math.max(20,v),E+g),S.gain.setValueAtTime(_,E),S.gain.exponentialRampToValueAtTime(.001,E+g),y.connect(S),S.connect(e),y.start(E),y.stop(E+g+.02)}function a(m,g=.2,p=400,_=4e3){if(!i||t)return;let v=Math.floor(i.sampleRate*m),y=i.createBuffer(1,v,i.sampleRate),S=y.getChannelData(0);for(let M=0;M<v;M++)S[M]=(Math.random()*2-1)*(1-M/v);let E=i.createBufferSource();E.buffer=y;let w=i.createBiquadFilter();w.type="highpass",w.frequency.value=p;let I=i.createBiquadFilter();I.type="lowpass",I.frequency.value=_;let b=i.createGain();b.gain.value=g,E.connect(w),w.connect(I),I.connect(b),b.connect(e),E.start()}function l(m,g,p=.3,_=40){if(!i||t)return;let v=i.createOscillator(),y=i.createGain(),S=i.currentTime;v.type="sine",v.frequency.setValueAtTime(m,S),v.frequency.exponentialRampToValueAtTime(Math.max(20,_),S+g*.9),y.gain.setValueAtTime(0,S),y.gain.linearRampToValueAtTime(p,S+.004),y.gain.exponentialRampToValueAtTime(.001,S+g),v.connect(y),y.connect(e),v.start(S),v.stop(S+g+.02)}function c(m,g,p=.1){if(!(!i||t))for(let[_,v]of[[1,p],[2.76,p*.5],[5.4,p*.22]]){let y=i.createOscillator(),S=i.createGain(),E=i.currentTime;y.type="sine",y.frequency.value=m*_*(.99+Math.random()*.02),S.gain.setValueAtTime(v,E),S.gain.exponentialRampToValueAtTime(.001,E+g),y.connect(S),S.connect(e),y.start(E),y.stop(E+g+.02)}}let h=(m,g=.07)=>m*(1-g+Math.random()*g*2),u={shoot(m){({single:()=>o(880,.07,"square",.12,300),scatter:()=>{o(660,.08,"sawtooth",.1,200),a(.05,.05,1500,5e3)},rapid:()=>o(1400,.04,"square",.08,700),beam:()=>o(1800,.14,"sine",.12,2600),flame:()=>a(.12,.08,200,1800)})[m]?.()},charged(){o(220,.35,"sawtooth",.22,1400),a(.2,.12,300,3e3)},chargeFull(){o(1200,.12,"sine",.1,1800)},blade(m){let g=(m%4+4)%4;g===0?(a(.15,.09,h(1400),9e3),o(h(520),.14,"sawtooth",.05,180)):g===1?(a(.1,.1,h(420),2600),l(h(120),.1,.09)):g===2?a(.06,.09,h(900),6e3):(a(.3,.1,h(700),7e3),o(h(200),.3,"sawtooth",.07,900),c(h(320),.35,.05))},bladeHit(m=1){let g=Math.max(1,Math.min(1.8,m));a(.05,.16*g,h(1200),7e3),l(h(150)*(2-g*.4),.16*g,.3*g),c(h(240),.18*g,.05*g),g>1.35&&o(h(90),.2,"sine",.12,40)},berserkHit(){a(.12,.2,300,5e3),l(110,.42,.42,32),c(180,.5,.1),o(70,.45,"sine",.16,28)},parry(){o(1600,.12,"sine",.2,2400),o(2400,.2,"sine",.12,3200)},ward(){o(500,.1,"sine",.08,900)},shatter(){a(.3,.2,600,6e3),o(900,.3,"sawtooth",.12,120)},dash(){a(.1,.08,800,6e3),o(400,.1,"sine",.08,1200)},hurt(){o(180,.3,"sawtooth",.25,50),a(.2,.15,100,1500)},foeHit(){a(.03,.07,h(1600),6e3),l(h(200),.07,.1)},foeDie(){a(.18,.16,h(320),3400),l(h(140),.26,.24,30),c(h(210),.22,.05)},crate(){a(.12,.14,500,4e3),o(320,.1,"square",.1,160)},pickup(){[660,880,1320].forEach((m,g)=>setTimeout(()=>o(m,.12,"sine",.14),g*70))},page(){[523,659,784,1047].forEach((m,g)=>setTimeout(()=>o(m,.22,"sine",.12),g*110))},bossHit(){o(120,.08,"square",.1,70)},bossWake(){o(60,.9,"sawtooth",.3,200),a(.6,.2,80,900)},bossDie(){for(let m=0;m<6;m++)setTimeout(()=>{a(.3,.2,200,3e3),o(90,.4,"sawtooth",.2,30)},m*160)},beamTell(){o(1800,.5,"sine",.08,2600)},beamFire(){a(.4,.3,900,200),o(200,.4,"sawtooth",.2,80)},slam(){a(.5,.4,200,40),o(90,.5,"sawtooth",.3,30)},open(){o(900,.15,"sine",.15,1400)},ui(){o(700,.06,"sine",.08,1e3)},step(){a(.03,.03,300,1200)}};function d(){return t=!t,e&&(e.gain.value=s()),t}function f(m){t=!!m,e&&(e.gain.value=s())}function x(m){n=Math.max(0,Math.min(1,m)),e&&(e.gain.value=s())}return{init:r,beep:o,noise:a,sfx:u,toggleMute:d,setMuted:f,setVolume:x,get muted(){return t},get ready(){return!!i}}}var ru={KeyW:"up",ArrowUp:"up",KeyS:"down",ArrowDown:"down",KeyA:"left",ArrowLeft:"left",KeyD:"right",ArrowRight:"right",Space:"blade",KeyK:"fire",KeyV:"ward",KeyL:"ward",KeyF:"magic",ShiftLeft:"jump",ShiftRight:"jump",Tab:"lock",KeyC:"swap",KeyR:"camreset",KeyP:"pause",Escape:"pause",KeyM:"mute",KeyN:"nexttrack",Enter:"confirm"};var Xp="WASD / arrows move (double-tap = dash) \xB7 SPACE attack (3-hit combo) \xB7 SHIFT jump (x2) \xB7 right-click / K blaster (hold to charge) \xB7 V or L hold = ward \xB7 F magic \xB7 TAB / middle-click lock on \xB7 double-click + drag = spin camera \xB7 wheel zoom \xB7 R reset view";function Yp(i,e,t){let n=.2126*i+.7152*e+.0722*t;return n>=Wp?0:ab*(1-n/Wp)}var Wp=.34,ab=.55;var In={maxYawRate:2.2,yawAccel:4.5,moveDeadzone:.25,towardInfluence:.3,follow:7.5,lookFollow:7.5,leadFollow:2.6,pullInRate:9,pullOutRate:1.6};function qp(i,e,t,n,s=In){if(!(n>s.moveDeadzone))return 0;let r=Math.hypot(i,e);if(r<1e-6)return 0;let o=i/r,a=e/r,l=Math.sin(t),c=Math.cos(t),h=o*c-a*l,u=-o*l-a*c,d=u>=0?1:s.towardInfluence+(1-s.towardInfluence)*(1+u),f=-h*s.maxYawRate*d;return Math.max(-s.maxYawRate,Math.min(s.maxYawRate,f))}function Kp(i,e,t){return i+Math.atan2(e,t)}function Zp(i,e,t){let n=Math.sin(t),s=Math.cos(t);return{x:s*i+n*e,z:-n*i+s*e}}function $p(i,e,t,n=!1){return e==null?null:!n&&i&&i.key===e?i:{key:e,yaw:t}}var Jp={takeoverPx:40,travelHalfLife:.2,hold:4};function jp(i,e,t,n,s=Jp){let r=i||{travel:0,t:n,armedAt:-1/0},o=r.travel*Math.pow(.5,Math.max(0,n-r.t)/s.travelHalfLife)+Math.hypot(e,t);return o>=s.takeoverPx?{travel:0,t:n,armedAt:n}:{travel:o,t:n,armedAt:r.armedAt}}function Qp(i,e,t,n=Jp){return i?i.armedAt>t&&e-i.armedAt<n.hold:!1}function ji(i,e,t,n){return e+(i-e)*Math.exp(-t*n)}var lb={walkRef:2.7,runRef:8.1,strafeRef:6.8,backRef:3.9,walkToRun:4.6,runToWalk:4,minScale:.62,maxScale:1.55,idleSpeed:.35};function em(i,e,t,n,s=lb){if(i<s.idleSpeed)return{clip:null,timeScale:1,running:!1};let r=n?i>s.runToWalk:i>s.walkToRun,o=e<-.5,a=!o&&Math.abs(t)>Math.abs(e),l=o?"back":a?t>0?"strafeRight":"strafeLeft":r?"run":"walk",c=o?s.backRef:a?s.strafeRef:r?s.runRef:s.walkRef,h=Math.max(s.minScale,Math.min(s.maxScale,i/c));return{clip:l,timeScale:h,running:r}}function tm(i,e,t=!0){return!t||!Number.isFinite(i)||i<=0?0:Math.min(i,e)}function nm(i,e,t=.22){if(!(i>0)||!(e>0))return 1;let n=1-Math.max(0,Math.min(1,i/e));return t+(1-t)*n*n}function im(i){if(i<=0)return 1;if(i>=1)return 0;let e=Math.exp(-3.2*i*i),t=1-i*i*(3-2*i)*(1-(1-i)*.15);return Math.max(0,e*Math.max(0,t))}var cb={perHit:.22,max:.8};function sm(i,e=cb){return i>0?1+Math.min(e.max,i*e.perHit):1}function rm(i,e,t,n){let s={sprint:!1,orbit:!1,orbitDX:0,orbitDY:0,zoom:0,jump:!1,up:!1,down:!1,left:!1,right:!1,fire:!1,blade:!1,ward:!1,dash:!1,swap:!1,mx:0,mz:0,aimX:0,aimZ:-1,mouseAim:!1,touch:!1,sx:0,sz:0},r=new Set,o={},a=new Ba,l=new Fn(new O(0,1,0),-.9),c=new Te,h=new O,u=0,d=0,f=!1,x=null,m=-1e9,g=null;function p(T){r.add(T)}function _(T){let C=performance.now()/1e3;o[T]&&C-o[T]<dp?(s.sprint=!0,p("dash"),o[T]=0):o[T]=C}let v=()=>s.up||s.down||s.left||s.right;window.addEventListener("keydown",T=>{let C=ru[T.code];C&&(["blade","fire","jump","up","down","left","right","lock"].includes(C)&&T.preventDefault(),!s[C]&&(C==="up"||C==="down"||C==="left"||C==="right")&&(_(C),m=performance.now()/1e3),T.repeat||p(C),C in s&&(s[C]=!0))}),window.addEventListener("keyup",T=>{let C=ru[T.code];C&&C in s&&(s[C]=!1),v()||(s.sprint=!1)}),window.addEventListener("blur",()=>{for(let T of["up","down","left","right","fire","blade","ward","dash"])s[T]=!1}),i.addEventListener("contextmenu",T=>T.preventDefault());let y=-1e9,S=0,E=0;i.addEventListener("mousemove",T=>{let C=f?T.clientX-u:0,V=f?T.clientY-d:0;f=!0,u=T.clientX,d=T.clientY,s.orbit?(s.orbitDX+=T.clientX-S,s.orbitDY+=T.clientY-E,S=T.clientX,E=T.clientY):x=jp(x,C,V,performance.now()/1e3)}),i.addEventListener("wheel",T=>{s.zoom+=Math.sign(T.deltaY),T.preventDefault()},{passive:!1}),i.addEventListener("mousedown",T=>{if(!s.touch){if(T.button===0){let C=performance.now();C-y<320?(s.orbit=!0,s.blade=!1,S=T.clientX,E=T.clientY):(s.blade=!0,p("blade")),y=C}T.button===1&&(p("lock"),T.preventDefault()),T.button===2&&(s.fire=!0,p("fire"))}}),window.addEventListener("mouseup",T=>{T.button===0&&(s.blade=!1,s.orbit=!1),T.button===2&&(s.fire=!1)});let w=null,I=0,b=0,M=52;function L(T,C){let V=T-I,z=C-b,D=Math.hypot(V,z);D>M&&(V*=M/D,z*=M/D),t.style.transform=`translate(${V}px,${z}px)`;let B=.18,J=Math.min(1,Math.hypot(V,z)/M);if(J<B){s.sx=0,s.sz=0;return}let ce=(J-B)/(1-B);s.sx=V/M*ce/J,s.sz=z/M*ce/J}if(e){e.addEventListener("pointerdown",C=>{s.touch=!0,w=C.pointerId;let V=e.getBoundingClientRect();I=V.left+V.width/2,b=V.top+V.height/2,e.setPointerCapture(C.pointerId),e.classList.add("hit"),L(C.clientX,C.clientY),C.preventDefault()}),e.addEventListener("pointermove",C=>{C.pointerId===w&&L(C.clientX,C.clientY)});let T=C=>{C.pointerId===w&&(w=null,s.sx=0,s.sz=0,t.style.transform="",e.classList.remove("hit"))};e.addEventListener("pointerup",T),e.addEventListener("pointercancel",T)}for(let[T,C]of Object.entries(n||{})){if(!C)continue;C.addEventListener("pointerdown",z=>{s.touch=!0,s[T]=!0,p(T),C.classList.add("hit"),z.preventDefault()});let V=()=>{s[T]=!1,C.classList.remove("hit")};C.addEventListener("pointerup",V),C.addEventListener("pointercancel",V),C.addEventListener("pointerleave",V)}window.addEventListener("touchstart",()=>{s.touch=!0,document.body.classList.add("touch")},{once:!0,passive:!0});function k(T,C,V,z=0,D=!1){let B=(s.right?1:0)-(s.left?1:0),J=(s.down?1:0)-(s.up?1:0),ce=B||J?`${B},${J}`:null;if((s.sx||s.sz)&&(B=s.sx,J=s.sz,ce="stick"),g=$p(g,ce,z,D),g){let ee=Zp(B,J,g.yaw);B=ee.x,J=ee.z}let ue=Math.hypot(B,J);if(ue>1&&(B/=ue,J/=ue),s.mx=B,s.mz=J,!s.touch&&Qp(x,performance.now()/1e3,m)&&T&&(c.set(u/window.innerWidth*2-1,-(d/window.innerHeight)*2+1),a.setFromCamera(c,T),a.ray.intersectPlane(l,h))){let ee=h.x-C,te=h.z-V,K=Math.hypot(ee,te);if(K>.3){s.aimX=ee/K,s.aimZ=te/K,s.mouseAim=!0;return}}s.mouseAim=!1,ue>.05&&(s.aimX=B/Math.max(ue,1e-6),s.aimZ=J/Math.max(ue,1e-6))}function F(T){return r.has(T)?(r.delete(T),!0):!1}function H(){r.clear()}return{IN:s,update:k,pressed:F,clearEdges:H,press:p}}var hb={staggerPerDmg:.05,staggerMin:.14,staggerMax:.6,launchStagger:.55,flashMin:.08,flashMax:.16};function lm(i,e=1,t=hb){let n=Math.max(1,e||1),s=Math.min(t.staggerMax,Math.max(t.staggerMin,i.dmg*t.staggerPerDmg))*(.85+.15*n);i.launch&&(s=Math.max(s,t.launchStagger));let r=Math.min(1,Math.max(0,(i.dmg-3)/7));return{hitstop:i.hitstop*(.85+n*.3),stagger:s,knock:i.knock*n,flash:t.flashMin+(t.flashMax-t.flashMin)*r}}function cm(i,e,t,n,s,r,o){let a=Math.atan2(e[1]-i[1],e[0]-i[0]),l=Math.atan2(n[1]-t[1],n[0]-t[0]),c=Math.atan2(Math.sin(l-a),Math.cos(l-a)),h=Math.min(12,Math.max(1,Math.ceil(Math.abs(c)/.35)));if(h>1){let u=Math.hypot(e[0]-i[0],e[1]-i[1]),d=Math.hypot(n[0]-t[0],n[1]-t[1]),f=i,x=e;for(let m=1;m<=h;m++){let g=m/h,p=[i[0]+(t[0]-i[0])*g,i[1]+(t[1]-i[1])*g],_=a+c*g,v=u+(d-u)*g,y=m===h?n:[p[0]+Math.cos(_)*v,p[1]+Math.sin(_)*v];if(om(f,x,m===h?t:p,y,s,r,o))return!0;f=m===h?t:p,x=y}return!1}return om(i,e,t,n,s,r,o)}function om(i,e,t,n,s,r,o){let a=[i,e,n,t];if(am(s,r,i,e,n)||am(s,r,i,n,t))return!0;for(let l=0;l<4;l++)if(ub(s,r,a[l],a[(l+1)%4])<=o)return!0;return!1}function ub(i,e,t,n){let s=n[0]-t[0],r=n[1]-t[1],o=s*s+r*r,a=o>0?Math.max(0,Math.min(1,((i-t[0])*s+(e-t[1])*r)/o)):0;return Math.hypot(i-(t[0]+s*a),e-(t[1]+r*a))}function am(i,e,t,n,s){let r=(d,f,x)=>(d[0]-x[0])*(f[1]-x[1])-(f[0]-x[0])*(d[1]-x[1]),o=[i,e],a=r(o,t,n),l=r(o,n,s),c=r(o,s,t),h=a<0||l<0||c<0,u=a>0||l>0||c>0;return!(h&&u)}function hm(i,e,t,n,s=.15){return Math.min(i,e)<=t+n+s&&Math.max(i,e)>=t-s}function um(i,e){let t=Math.max(0,Math.min(1,e));return i.arc*(1-2*t)}var db={minSpeed:12,maxInward:2.5};function dm(i,e,t,n,s=db){return n>0?t/n>=s.minSpeed&&(e-i)/n>=-s.maxInward:!1}var ou={range:14,arc:1.25,breakRange:20,gain:2.6};function fm(i,e,t,n,s,r=ou){let o=-1,a=1/0,l=Math.cos(r.arc);return s.forEach((c,h)=>{if(!c||c.alive===!1)return;let u=c.x-i,d=c.z-e,f=Math.hypot(u,d);if(f>r.range)return;let x=f>1e-6?(u*t+d*n)/f:1;if(x<l)return;let m=f*(1.5-.5*x);m<a&&(a=m,o=h)}),o}function fb(i){return Math.atan2(Math.sin(i),Math.cos(i))}function pm(i,e,t,n,s=0){return Math.atan2(-(t-i),-(n-e))-s}function mm(i,e,t,n=ou){let s=fb(e-i)*n.gain;return Math.max(-t,Math.min(t,s))}function gm(i,e,t,n=ou){return!!i&&i.alive!==!1&&Math.hypot(i.x-e,i.z-t)<=n.breakRange}var xm={buffer:.25};function _m(i){return!i||i.done?"none":i.cutting?"cut":i.cutDone?"recovery":"windup"}function ym(i){return i!=="cut"}function vm(i,e,t){return{bladeT:0,bladeWindow:Math.max(e,i>0?t:0)}}var au=new Map;function lu(i="rgba(255,255,255,1)",e="rgba(255,255,255,0)",t=128){let n="r"+i+e+t;if(au.has(n))return au.get(n);let s=document.createElement("canvas");s.width=s.height=t;let r=s.getContext("2d"),o=r.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2),a=/rgba?\(([^)]+)\)/.exec(i),[l,c,h]=a?a[1].split(",").slice(0,3).map(f=>parseFloat(f)):[255,255,255],u=a&&a[1].split(",").length>3?parseFloat(a[1].split(",")[3]):1;for(let f=0;f<=16;f++){let x=f/16;o.addColorStop(x,`rgba(${l},${c},${h},${(u*im(x)).toFixed(4)})`)}r.fillStyle=o,r.fillRect(0,0,t,t);let d=new Rn(s);return d.colorSpace=mt,d.minFilter=wn,d.generateMipmaps=!0,au.set(n,d),d}function pb(){return lu("rgba(0,0,0,0.55)","rgba(0,0,0,0)",64)}function bt(i,e,t=.9){let n=new lo({map:lu(),color:i,transparent:!0,opacity:t,blending:ht,depthWrite:!1}),s=new Sa(n);return s.scale.set(e,e,1),s}function Xn(i){let e=new ge(new An(i*2,i*2),new We({map:pb(),transparent:!0,depthWrite:!1}));return e.rotation.x=-Math.PI/2,e.position.y=.03,e.renderOrder=1,e}var Ts=900,mb=40;function Mm(i){let e=new Float32Array(Ts*3),t=new Float32Array(Ts*3),n=new Float32Array(Ts),s=new Float32Array(Ts),r=new lt;r.setAttribute("position",new et(e,3)),r.setAttribute("pcol",new et(t,3)),r.setAttribute("psize",new et(n,1)),r.setAttribute("palpha",new et(s,1));let o=new It({transparent:!0,depthWrite:!1,blending:ht,uniforms:{map:{value:lu()},scaleY:{value:600}},vertexShader:`attribute vec3 pcol; attribute float psize; attribute float palpha; varying vec3 vc; varying float va; uniform float scaleY;
      void main(){ vc=pcol; va=palpha; vec4 mv=modelViewMatrix*vec4(position,1.0); gl_PointSize=psize*scaleY/-mv.z; gl_Position=projectionMatrix*mv; }`,fragmentShader:"uniform sampler2D map; varying vec3 vc; varying float va; void main(){ vec4 t=texture2D(map,gl_PointCoord); gl_FragColor=vec4(vc*t.rgb, t.a*va); }"}),a=new Mi(r,o);a.frustumCulled=!1,i.add(a);let l=[],c=new Se;function h(y,S,E,w,I=8,b={}){c.set(w);for(let M=0;M<I&&l.length<Ts;M++){let L=Math.random()*Math.PI*2,k=(b.spd||4)*(.4+Math.random()*.8),F=(b.up??3)*(.3+Math.random()*.9);l.push({x:y,y:S,z:E,vx:Math.cos(L)*k,vy:F,vz:Math.sin(L)*k,life:b.life||.6,t:0,r:c.r,g:c.g,b:c.b,size:b.size||.5,grav:b.grav??9,drag:b.drag??.9})}}function u(y,S,E,w,I=.4,b=.9,M=1.5){l.length<Ts&&(c.set(w),l.push({x:y,y:S,z:E,vx:(Math.random()-.5)*.8,vy:M,vz:(Math.random()-.5)*.8,life:b,t:0,r:c.r,g:c.g,b:c.b,size:I,grav:-.5,drag:.98}))}let d=24,f=[];function x(y,S,E,w,I=1.6,b=.13){let M=f.find(L=>!L.alive);if(!M){if(f.length>=d)return;let L=bt(w,1,1);L.renderOrder=3,i.add(L),M={s:L,alive:!1},f.push(M)}M.alive=!0,M.t=0,M.life=b,M.size=I,M.s.material.color.set(w),M.s.position.set(y,S,E),M.s.visible=!0}let m=new ln(.82,1,48),g=[];function p(y,S,E,w=3,I=.5,b=.06){let M=g.find(L=>!L.alive);if(!M){if(g.length>=mb)return;let L=new ge(m,new We({color:E,transparent:!0,blending:ht,depthWrite:!1,side:gt}));L.rotation.x=-Math.PI/2,i.add(L),M={m:L,alive:!1},g.push(M)}M.alive=!0,M.t=0,M.life=I,M.maxR=w,M.m.material.color.set(E),M.m.position.set(y,b,S),M.m.visible=!0}function _(y){for(let S=l.length-1;S>=0;S--){let E=l[S];if(E.t+=y,E.t>=E.life){l[S]=l[l.length-1],l.pop();continue}E.vy-=E.grav*y,E.vx*=E.drag,E.vz*=E.drag,E.x+=E.vx*y,E.y+=E.vy*y,E.z+=E.vz*y,E.y<.05&&E.grav>0&&(E.y=.05,E.vy*=-.3)}for(let S=0;S<Ts;S++)if(S<l.length){let E=l[S],w=1-E.t/E.life;e[S*3]=E.x,e[S*3+1]=E.y,e[S*3+2]=E.z,t[S*3]=E.r,t[S*3+1]=E.g,t[S*3+2]=E.b,n[S]=E.size*(.6+.4*w),s[S]=w}else s[S]=0,n[S]=0;r.attributes.position.needsUpdate=!0,r.attributes.pcol.needsUpdate=!0,r.attributes.psize.needsUpdate=!0,r.attributes.palpha.needsUpdate=!0,r.setDrawRange(0,Math.max(1,l.length));for(let S of f){if(!S.alive)continue;S.t+=y;let E=S.t/S.life;if(E>=1){S.alive=!1,S.s.visible=!1;continue}let w=E<.3?E/.3:1,I=E<.3?1:1-(E-.3)/.7;S.s.scale.setScalar(S.size*(.35+.65*w)*(1+E*.5)),S.s.material.opacity=I}for(let S of g){if(!S.alive)continue;S.t+=y;let E=S.t/S.life;if(E>=1){S.alive=!1,S.m.visible=!1;continue}let w=.2+S.maxR*E;S.m.scale.set(w,w,1),S.m.material.opacity=(1-E)*.9}}function v(){l.length=0;for(let y of g)y.alive=!1,y.m.visible=!1;for(let y of f)y.alive=!1,y.s.visible=!1}return{spawn:h,ember:u,ring:p,flash:x,update:_,clear:v,get count(){return l.length}}}function ii(i,e=256){let t=document.createElement("canvas");t.width=t.height=e;let n=t.getContext("2d");i(n,e);let s=new Rn(t);return s.colorSpace=mt,s.wrapS=s.wrapT=dn,s.anisotropy=Ir,s}var gb=new br,rl=new Map,Ir=8;function Sm(i){try{Ir=Math.max(1,i.capabilities.getMaxAnisotropy())}catch{Ir=8}for(let e of rl.values())for(let t of Object.values(e))t.anisotropy=Ir,t.needsUpdate=!0;return Ir}function Pr(i){if(rl.has(i))return rl.get(i);let e=(n,s)=>{let r=gb.load(`./assets/tex_ship/${i}_${n}.jpg`);return r.wrapS=r.wrapT=dn,r.anisotropy=Ir,s&&(r.colorSpace=mt),r},t={map:e("Diffuse",!0),normalMap:e("nor_gl"),roughnessMap:e("Rough")};return rl.set(i,t),t}function il(i,e,t,n){i.fillStyle=n;for(let s=0;s<t;s++)i.fillRect(Math.random()*e,Math.random()*e,1.5,1.5)}function Lr(i,e,t,n,s,r){i.strokeStyle=s,i.lineWidth=r,i.beginPath();for(let o=0;o<2;o++){let a=o*Math.PI/4;for(let l=0;l<4;l++){let c=a+l*Math.PI/2,h=e+Math.cos(c)*n,u=t+Math.sin(c)*n;l?i.lineTo(h,u):i.moveTo(h,u)}i.closePath()}i.stroke()}var xb={stone:{pbr:{floor:"red_sandstone_pavement",wall:"large_sandstone_blocks_01",tint:"#fff0dc"},props:"ramparts",wallH:2.4,hemi:["#5a3f7a","#2a1a12",1.1],sun:["#ffb070",1.1,[.4,1,.6]],torch:{col:"#ffa040",y:1.75,kind:"flame",light:"#ff9a3c",intensity:14,dist:13},floor:()=>ii((i,e)=>{i.fillStyle="#5c4b3c",i.fillRect(0,0,e,e),il(i,e,900,"rgba(0,0,0,.25)"),il(i,e,500,"rgba(255,220,180,.12)"),i.strokeStyle="rgba(20,10,5,.55)",i.lineWidth=4,i.strokeRect(2,2,e-4,e-4),Lr(i,e/2,e/2,e*.36,"rgba(201,168,76,.28)",3),Lr(i,e/2,e/2,e*.18,"rgba(76,224,224,.18)",2)}),wall:()=>ii((i,e)=>{i.fillStyle="#7a6650",i.fillRect(0,0,e,e),il(i,e,700,"rgba(0,0,0,.22)"),i.strokeStyle="rgba(30,18,10,.6)",i.lineWidth=4;for(let t=0;t<e;t+=64){i.beginPath(),i.moveTo(0,t),i.lineTo(e,t),i.stroke();for(let n=t/64%2?64:0;n<e;n+=128)i.beginPath(),i.moveTo(n,t),i.lineTo(n,t+64),i.stroke()}i.fillStyle="rgba(201,168,76,.5)",i.fillRect(0,18,e,10),Lr(i,e*.25,23,9,"rgba(11,7,19,.6)",2),Lr(i,e*.75,23,9,"rgba(11,7,19,.6)",2)}),top:()=>ii((i,e)=>{i.fillStyle="#8a7560",i.fillRect(0,0,e,e),il(i,e,600,"rgba(0,0,0,.2)"),i.strokeStyle="rgba(30,18,10,.5)",i.lineWidth=4,i.strokeRect(2,2,e-4,e-4)})},slab:{pbr:{floor:"metal_plate",wall:"metal_plate",tint:"#e8def4",glowFloor:!0},props:"venus",wallH:.9,hemi:["#ffc8ee","#5a3a5c",1.7],sun:["#ffd2a8",1.6,[-.5,1,.5]],torch:{col:re.pink,y:1.4,kind:"pylon",light:"#ff7ad9",intensity:10,dist:12},floor:()=>ii((i,e)=>{i.fillStyle="#4a2a5c",i.fillRect(0,0,e,e);let t=e/4;i.strokeStyle="rgba(255,150,225,.8)",i.lineWidth=3;for(let s=0;s<3;s++)for(let r=0;r<3;r++){let o=r*t*1.6+s%2*t*.8+t*.4,a=s*t*1.4+t*.5;i.beginPath();for(let l=0;l<6;l++){let c=l*Math.PI/3,h=o+Math.cos(c)*t*.45,u=a+Math.sin(c)*t*.45;l?i.lineTo(h,u):i.moveTo(h,u)}i.closePath(),i.stroke()}let n=i.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);n.addColorStop(0,"rgba(255,122,217,.12)"),n.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=n,i.fillRect(0,0,e,e)}),wall:()=>ii((i,e)=>{i.fillStyle="#3b1d45",i.fillRect(0,0,e,e),i.fillStyle="rgba(255,122,217,.85)",i.fillRect(0,0,e,8),i.fillStyle="rgba(76,224,224,.7)";for(let t=16;t<e;t+=48)i.fillRect(t,e/2-3,20,6)}),top:()=>ii((i,e)=>{i.fillStyle="#4a2456",i.fillRect(0,0,e,e),i.strokeStyle="rgba(255,122,217,.8)",i.lineWidth=8,i.strokeRect(4,4,e-8,e-8)})},stacks:{pbr:{floor:"dark_wooden_planks",pillar:"cobblestone_03",tint:"#f0d0a8"},props:"archive",wallH:2.8,hemi:["#6a5aaa","#3a2418",1.9],sun:["#c8a8ff",1.3,[.2,1,.3]],torch:{col:"#ffd27a",y:1.2,kind:"candle",light:"#ffc66a",intensity:9,dist:10},floor:()=>ii((i,e)=>{i.fillStyle="#3a2618",i.fillRect(0,0,e,e),i.strokeStyle="rgba(0,0,0,.45)",i.lineWidth=3;for(let t=0;t<e;t+=42)i.beginPath(),i.moveTo(0,t),i.lineTo(e,t),i.stroke();i.strokeStyle="rgba(255,200,140,.08)",i.lineWidth=1;for(let t=0;t<40;t++){let n=Math.random()*e;i.beginPath(),i.moveTo(0,n),i.bezierCurveTo(e/3,n+6,e*2/3,n-6,e,n),i.stroke()}i.fillStyle="rgba(155,108,255,.10)",i.beginPath(),i.arc(e*.7,e*.3,e*.12,0,7),i.fill()}),wall:()=>ii((i,e)=>{i.fillStyle="#2a1a10",i.fillRect(0,0,e,e);let t=["#8c2f2f","#2f6b4a","#c9a84c","#2f4b8c","#e8dcc0","#6b3a8c","#b56a2a"];for(let n=0;n<3;n++){let s=12+n*82;i.fillStyle="#1a100a",i.fillRect(0,s+66,e,8);let r=4;for(;r<e-4;){let o=9+Math.random()*14;i.fillStyle=t[Math.floor(Math.random()*t.length)],i.fillRect(r,s+6+Math.random()*8,o-2,60),r+=o}}}),top:()=>ii((i,e)=>{i.fillStyle="#3a2618",i.fillRect(0,0,e,e),i.strokeStyle="rgba(0,0,0,.5)",i.lineWidth=6,i.strokeRect(3,3,e-6,e-6)})}};function _b(i,e,t=.5){let n=i.floor.size,s=new Float32Array(n*12),r=new Float32Array(n*12),o=new Float32Array(n*8),a=new Uint32Array(n*6),l=0;for(let h of i.floor){let[u,d]=h.split(",").map(Number),f=u*2,x=d*2,m=f+2,g=x+2,p=l*4;s.set([f,0,x,m,0,x,m,0,g,f,0,g],l*12),r.set([0,1,0,0,1,0,0,1,0,0,1,0],l*12),o.set([f*t,x*t,m*t,x*t,m*t,g*t,f*t,g*t],l*8),a.set([p,p+2,p+1,p,p+3,p+2],l*6),l++}let c=new lt;return c.setAttribute("position",new et(s,3)),c.setAttribute("normal",new et(r,3)),c.setAttribute("uv",new et(o,2)),c.setIndex(new et(a,1)),new ge(c,e)}function yb(i){let e=new It({side:Qt,depthWrite:!1,fog:!1,uniforms:{c0:{value:new Se(i[0])},c1:{value:new Se(i[1])},c2:{value:new Se(i[2])}},vertexShader:"varying vec3 vp; void main(){ vp=normalize(position); gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"uniform vec3 c0,c1,c2; varying vec3 vp; void main(){ float h=vp.y; vec3 c = h>0.0 ? mix(c1,c0,smoothstep(0.0,0.7,h)) : mix(c1,c2,smoothstep(0.0,-0.5,h)); gl_FragColor=vec4(c,1.0); }"}),t=new ge(new tn(190,24,16),e);return t.frustumCulled=!1,t}function vb(i){let e=new Float32Array(i*3);for(let s=0;s<i;s++){let r=Math.random()*6.283,o=Math.acos(Math.random()*.9+.1),a=175;e.set([a*Math.sin(o)*Math.cos(r),a*Math.cos(o),a*Math.sin(o)*Math.sin(r)],s*3)}let t=new lt;t.setAttribute("position",new et(e,3));let n=new Mi(t,new Hi({color:"#fff4dc",size:1.6,sizeAttenuation:!1,transparent:!0,opacity:.85,fog:!1}));return n.frustumCulled=!1,n}function sl(i,e,t,n){let s=ii(e,256),r=new ge(new tn(i,32,24),new We({map:s,fog:!1}));if(r.position.set(...t),r.frustumCulled=!1,n){let o=new ge(new ln(i*1.4,i*2.3,64),new We({color:"#e8d6a8",transparent:!0,opacity:.75,side:gt,fog:!1}));o.rotation.x=-1.2,o.rotation.y=.3,r.add(o)}return r}function bm(i){return(e,t)=>{for(let n=0;n<i.length;n++)e.fillStyle=i[n],e.fillRect(0,n*t/i.length,t,t/i.length+2);for(let n=0;n<40;n++)e.fillStyle="rgba(255,255,255,.08)",e.beginPath(),e.ellipse(Math.random()*t,Math.random()*t,20+Math.random()*40,4+Math.random()*6,0,0,7),e.fill()}}function Mb(i,e){i.fillStyle="#1e5fb8",i.fillRect(0,0,e,e),i.fillStyle="#3f8f3a";for(let t=0;t<9;t++)i.beginPath(),i.ellipse(Math.random()*e,Math.random()*e,20+Math.random()*50,15+Math.random()*35,Math.random()*3,0,7),i.fill();i.fillStyle="rgba(255,255,255,.55)";for(let t=0;t<30;t++)i.beginPath(),i.ellipse(Math.random()*e,Math.random()*e,18+Math.random()*30,4+Math.random()*5,Math.random()*3,0,7),i.fill()}function bb(i,e){i.fillStyle="#c9c4b8",i.fillRect(0,0,e,e);for(let t=0;t<40;t++)i.fillStyle="rgba(60,55,50,.35)",i.beginPath(),i.arc(Math.random()*e,Math.random()*e,3+Math.random()*12,0,7),i.fill()}function cu(i,e,t,n=null,s={}){let r=xb[e.style],o=new Be;i.add(o);let a=[];i.background=new Se(t.sky[2]),i.fog=new ba(t.fog,34,95);let l=yb(t.sky);o.add(l),e.style!=="stacks"&&o.add(vb(e.style==="slab"?700:400));let c=[];if(e.style==="slab"){c.push(sl(34,Mb,[40,-95,-60]),sl(9,bb,[-30,-70,-20]),sl(48,bm(["#c7a27a","#e3c39a","#a9744f","#e8d3b0","#b8865c","#d9b98f","#a06a48"]),[-110,-120,-150]),sl(30,bm(["#e9d8a6","#d4bf8a","#f0e2b8","#c9b07a"]),[120,-105,-110],!0));for(let K of c)o.add(K)}let h=new Ua(r.hemi[0],r.hemi[1],r.hemi[2]);o.add(h);let u=new Sr(r.sun[0],r.sun[1]*1.3),d=new O(...r.sun[2]).normalize();if(o.add(u,u.target),s.shadows){u.castShadow=!0,u.shadow.mapSize.set(1024,1024);let K=u.shadow.camera;K.left=K.bottom=-16,K.right=K.top=16,K.near=1,K.far=80,u.shadow.bias=-8e-4,u.shadow.normalBias=.03}let f=r.floor(),x=r.wall(),m=r.top();a.push(f,x,m);let g;r.pbr&&r.pbr.floor?(g=new Ye({...Pr(r.pbr.floor),color:r.pbr.tint,roughness:1,metalness:r.pbr.glowFloor?.2:.05,normalScale:new Te(1.2,1.2)}),r.pbr.glowFloor&&(g.emissive=new Se("#ff7ad9"),g.emissiveIntensity=.75,g.emissiveMap=f)):g=new Ye({map:f,roughness:.88,metalness:.05});let p=_b(e,g,r.pbr?.25:.5);p.receiveShadow=!0,o.add(p),a.push(p.geometry,p.material);let _=r.wallH,v=new Ct(2,_,2);v.translate(0,_/2,0);let y=r.pbr&&r.pbr.wall&&e.style==="stone"?new Ye({...Pr(r.pbr.wall),color:"#f0dcc0",roughness:1}):new Ye({map:x,roughness:.85,...r.pbr&&r.pbr.wall?{normalMap:Pr(r.pbr.wall).normalMap,metalness:.5}:{}}),S=new Ye({map:m,roughness:.9});e.style==="slab"&&(y.emissive=new Se("#ff7ad9"),y.emissiveIntensity=.25,y.emissiveMap=x);let E=[y,y,S,S,y,y],w=[...e.walls].map(K=>K.split(",").map(Number)),I=[],b=[];for(let K of e.inner){let[de,ae]=K.split(",").map(Number),pe=e.roomAt((de+.5)*2,(ae+.5)*2);(pe&&pe.pillars?b:I).push([de,ae])}let M=new Bi(v,E,w.length+I.length),L=new Ge,k=new Se;if([...w,...I].forEach(([K,de],ae)=>{L.makeTranslation((K+.5)*2,0,(de+.5)*2),M.setMatrixAt(ae,L),k.setHSL(0,0,.82+Math.random()*.18),M.setColorAt(ae,k)}),M.castShadow=M.receiveShadow=!0,M.instanceMatrix.needsUpdate=!0,M.instanceColor&&(M.instanceColor.needsUpdate=!0),o.add(M),a.push(v,y,S),b.length){let K=new vt(.55,.68,_+.6,12);K.translate(0,(_+.6)/2,0);let de=r.pbr&&(r.pbr.pillar||r.pbr.wall)?new Ye({...Pr(r.pbr.pillar||r.pbr.wall),color:"#e8d4b8",roughness:1}):new Ye({map:x,roughness:.8}),ae=new Bi(K,de,b.length);ae.castShadow=ae.receiveShadow=!0;let pe=new Bi(new Ct(1.6,.3,1.6),new Ye({color:re.gold,roughness:.4,metalness:.6}),b.length);b.forEach(([he,fe],Ae)=>{L.makeTranslation((he+.5)*2,0,(fe+.5)*2),ae.setMatrixAt(Ae,L),L.makeTranslation((he+.5)*2,_+.6,(fe+.5)*2),pe.setMatrixAt(Ae,L)}),ae.instanceMatrix.needsUpdate=!0,pe.instanceMatrix.needsUpdate=!0,o.add(ae,pe),a.push(K,de)}let F=new ge(new An(600,600),new Ye({color:e.style==="stone"?"#0d1a3a":e.style==="slab"?"#1a0a22":"#050308",roughness:1,metalness:0}));F.rotation.x=-Math.PI/2,F.position.y=-.5,e.style!=="slab"&&o.add(F);let H=[];for(let K of e.torches){let de=K.dir==="S"?[0,1]:K.dir==="N"?[0,-1]:K.dir==="E"?[1,0]:[-1,0],ae=K.x+de[0]*1.02,pe=K.z+de[1]*1.02,he=new Be;if(he.position.set(ae,0,pe),r.torch.kind==="flame"){let A=new ge(new Ct(.18,.5,.18),new Ye({color:"#2a1a10"}));A.position.y=r.torch.y-.3,he.add(A);let ye=new ge(new vt(.2,.1,.18,8),new Ye({color:re.gold,metalness:.7,roughness:.3}));ye.position.y=r.torch.y-.02,he.add(ye)}else if(r.torch.kind==="pylon"){let A=new ge(new vt(.08,.12,r.torch.y,8),new Ye({color:"#3b1d45",emissive:re.pink,emissiveIntensity:.8}));A.position.y=r.torch.y/2,he.add(A)}else{let A=new ge(new vt(.07,.09,.5,8),new Ye({color:"#efe3c0"}));A.position.y=r.torch.y-.25,he.add(A);let ye=new ge(new vt(.16,.2,.9,8),new Ye({color:"#1a100a"}));ye.position.y=r.torch.y-.95,he.add(ye)}let fe=bt(r.torch.col,r.torch.kind==="candle"?.9:1.6,.75),Ae=bt("#fff2c0",r.torch.kind==="candle"?.35:.6,.9);fe.position.y=Ae.position.y=r.torch.y+.22,he.add(fe,Ae),o.add(he),H.push({g:he,outer:fe,inner:Ae,x:ae,z:pe,seed:Math.random()*10})}let T=[];for(let K=0;K<6;K++){let de=new ei(r.torch.light,0,r.torch.dist,2);de.position.set(0,-50,0),o.add(de),T.push(de)}let C=e.gateCells,V=new Be;if(C.length){let K=(C[0][0]+C[1][0]+1)/2*2,de=(C[0][1]+C[1][1]+1)/2*2,ae=C[0][1]===C[1][1],pe=new Ye({color:"#15151c",emissive:re.char,emissiveIntensity:.35,metalness:.8,roughness:.3});for(let Ae=-3;Ae<=3;Ae++){let A=new ge(new vt(.09,.09,3.2,8),pe);A.position.set(ae?Ae*.58:0,1.6,ae?0:Ae*.58),V.add(A)}let he=new ge(new Ct(ae?2*2:.3,.26,ae?.3:2*2),pe);he.position.y=3.1,V.add(he);let fe=he.clone();fe.position.y=.4,V.add(fe),V.position.set(K,7,de),V.visible=!1,o.add(V)}Ab(o,e,r,e.style),wb(o,e,r,n);let z=Rb(o,e.style),D=Cb(o,e,e.style),B=7,J=!1;function ce(){J=!0,V.visible=!0,B=0}function ue(){J=!1,B=7}let q=0;function ee(K,de,ae,pe){for(let he of H){let fe=.85+Math.sin(de*13+he.seed)*.1+Math.sin(de*29+he.seed*3)*.06;he.outer.scale.setScalar((r.torch.kind==="candle"?.9:1.6)*fe),he.inner.scale.setScalar((r.torch.kind==="candle"?.35:.6)*(2-fe))}if(q-=K,q<=0){q=.25;let he=H.map(fe=>({tr:fe,d:(fe.x-ae)**2+(fe.z-pe)**2})).sort((fe,Ae)=>fe.d-Ae.d).slice(0,T.length);T.forEach((fe,Ae)=>{let A=he[Ae];A&&A.d<30*30?(fe.userData.on=!0,fe.position.set(A.tr.x,r.torch.y+.3,A.tr.z),fe.userData.seed=A.tr.seed):fe.userData.on=!1})}for(let he of T)he.intensity=he.userData.on?r.torch.intensity*(.85+Math.sin(de*11+(he.userData.seed||0))*.15):0;for(let he of c)he.rotation.y+=K*.02;V.visible&&(V.position.y+=(B-V.position.y)*Math.min(1,K*6),!J&&V.position.y>6.5&&(V.visible=!1)),l.position.set(ae,0,pe),z.update(K,de,ae,pe);for(let he of D)he.material.opacity=he.userData.base*(.75+Math.sin(de*.7+he.userData.seed)*.25);u.target.position.set(ae,0,pe),u.position.set(ae+d.x*40,d.y*40,pe+d.z*40)}function te(){i.remove(o);for(let K of a)K.dispose&&K.dispose();i.fog=null}return{group:o,update:ee,dispose:te,gate:{seal:ce,open:ue},wallH:_,style:e.style}}var Eb={ramparts:{floor:["ramp_arch","ramp_pillar","ramp_brazier","ramp_arch","ramp_pillar","rubble_large","box_stacked","barrel_large","sword_shield_broken"],banners:["banner_patternA_red","banner_patternA_yellow","banner_shield_red"]},venus:{floor:["venus_pylon","venus_module","venus_node","venus_pylon","venus_module"],banners:[]},archive:{floor:["arch_stack","arch_candles","arch_press","arch_stack","arch_candles","shelf_small_candles","candle_triple","table_medium_decorated_A","trunk_medium_B"],banners:[]}};function Sb(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function wb(i,e,t,n){let s=Eb[t.props];if(!s||!n||!n.props)return;let r=Sb(e.key.length*977+e.rooms.length),o=(c,h)=>c+","+h,a=[...e.boxes,e.start].map(c=>[Math.floor(c.x/2),Math.floor(c.z/2)]),l=(c,h,u,d,f=.5,x=0)=>{let m=n.props[c];if(!m)return!1;let g=m.clone(!0);return g.scale.setScalar(f),g.position.set(h,x,u),g.rotation.y=d,g.traverse(p=>{p.isMesh&&(p.castShadow=!0,p.receiveShadow=!0)}),i.add(g),!0};for(let c of e.rooms){if(c.kind==="boss")continue;let h=c.rect,u=[];for(let m=h.x0;m<h.x1;m++)for(let g=h.z0;g<h.z1;g++){if(e.solidCell(m,g))continue;let p=[[1,0],[-1,0],[0,1],[0,-1]].find(([_,v])=>e.walls.has(o(m+_,g+v)));p&&(c.doors.some(_=>Math.abs(_.x-m)<3&&Math.abs(_.z-g)<3)||a.some(([_,v])=>Math.abs(_-m)<2&&Math.abs(v-g)<2)||u.push([m,g,p]))}for(let m=u.length-1;m>0;m--){let g=Math.floor(r()*(m+1));[u[m],u[g]]=[u[g],u[m]]}let d=0,f=[],x=3+Math.floor(r()*3);for(let[m,g,[p,_]]of u){if(d>=x)break;if(f.some(([E,w])=>Math.abs(E-m)<3&&Math.abs(w-g)<3))continue;let v=s.floor[Math.floor(r()*s.floor.length)],y=(m+.5)*2+p*.35,S=(g+.5)*2+_*.35;l(v,y,S,Math.atan2(-p,-_)+(r()-.5)*.6)&&(e.inner.add(o(m,g)),f.push([m,g]),d++)}if(s.banners.length){let m=0;for(let g of e.torches){let p=Math.floor(g.x/2),_=Math.floor(g.z/2);if(p<h.x0-1||p>h.x1||_<h.z0-1||_>h.z1||m++%2)continue;let v=g.dir==="S"?[0,1]:g.dir==="N"?[0,-1]:g.dir==="E"?[1,0]:[-1,0],y=[v[1],-v[0]];l(s.banners[m%s.banners.length],g.x+v[0]*1.02+y[0]*1,g.z+v[1]*1.02+y[1]*1,Math.atan2(v[0],v[1]),.42,.2)}}}}function Tb(i){let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d");t.strokeStyle=i,t.lineWidth=6,t.shadowColor=i,t.shadowBlur=18,t.strokeRect(10,10,236,236),Lr(t,128,128,88,i,5),Lr(t,128,128,44,i,3);let n=new Rn(e);return n.colorSpace=mt,n}var Em={stone:{wall:"large_sandstone_blocks_01",tint:"#f0dcc0",rune:"#ffc65a"},slab:{wall:"metal_plate",tint:"#b8a8d8",rune:"#ff7ad9"},stacks:{wall:"cobblestone_03",tint:"#e8d4b8",rune:"#b89aff"}};function Ab(i,e,t,n){if(!e.plinths||!e.plinths.size)return;let s=Em[n]||Em.stone,r=new Ye({...Pr(s.wall),color:s.tint,roughness:1}),o=new Ye({...Pr(s.wall),color:s.tint,roughness:.9}),a=new Ye({color:re.gold,metalness:.75,roughness:.3,emissive:"#3a2a08",emissiveIntensity:.4}),l=new We({map:Tb(s.rune),transparent:!0,opacity:.55,blending:ht,depthWrite:!1}),c=new Ct(2,1,2),h=new Ct(2+.06,.1,2+.06),u=new An(2*.9,2*.9);for(let[d,f]of e.plinths){let[x,m]=d.split(",").map(Number),g=(x+.5)*2,p=(m+.5)*2,_=new ge(c,[r,r,o,o,r,r]);_.scale.y=f,_.position.set(g,f/2,p),_.castShadow=_.receiveShadow=!0,i.add(_);let v=new ge(h,a);v.position.set(g,f-.05,p),i.add(v);let y=new ge(u,l);y.rotation.x=-Math.PI/2,y.position.set(g,f+.02,p),i.add(y)}}function Rb(i,e){let s=new Float32Array(780),r=new Float32Array(260);for(let f=0;f<260;f++)s[f*3]=(Math.random()-.5)*16*2,s[f*3+1]=Math.random()*7,s[f*3+2]=(Math.random()-.5)*16*2,r[f]=Math.random()*6.28;let o=new lt;o.setAttribute("position",new et(s,3));let a=e==="slab"?"#ff9ae6":e==="stacks"?"#ffe2a8":"#ffaa55",l=new Hi({color:a,size:e==="stacks"?.07:.1,transparent:!0,opacity:.75,blending:ht,depthWrite:!1,map:bt(a,1).material.map}),c=new Mi(o,l);c.frustumCulled=!1,i.add(c);let h=e==="stone"?.55:e==="slab"?.25:.08,u=0,d=0;return{update(f,x,m,g){let p=m-u,_=g-d;u=m,d=g;for(let v=0;v<260;v++){let y=s[v*3]-p,S=s[v*3+1]+h*f,E=s[v*3+2]-_;y+=Math.sin(x*.6+r[v])*.12*f,E+=Math.cos(x*.5+r[v])*.12*f,y>16?y-=2*16:y<-16&&(y+=2*16),E>16?E-=2*16:E<-16&&(E+=2*16),S>7&&(S-=7),s[v*3]=y,s[v*3+1]=S,s[v*3+2]=E}c.position.set(m,0,g),o.attributes.position.needsUpdate=!0}}}function Cb(i,e,t){let n=document.createElement("canvas");n.width=64,n.height=256;let s=n.getContext("2d"),r=s.createLinearGradient(0,0,0,256);r.addColorStop(0,"rgba(255,255,255,0.9)"),r.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=r,s.fillRect(0,0,64,256);let o=s.createLinearGradient(0,0,64,0);o.addColorStop(0,"rgba(0,0,0,1)"),o.addColorStop(.5,"rgba(0,0,0,0)"),o.addColorStop(1,"rgba(0,0,0,1)"),s.globalCompositeOperation="destination-out",s.fillStyle=o,s.fillRect(0,0,64,256);let a=new Rn(n),l=t==="slab"?"#ffb2ec":t==="stacks"?"#b8a0ff":"#ffd9a0",c=[];for(let h of e.rooms){if(h.kind==="boss")continue;let u=h.center.x+(h.rect.x1-h.rect.x0)*.35,d=h.center.z-1;for(let f of[0,Math.PI/2]){let x=new ge(new An(3.2,11),new We({map:a,color:l,transparent:!0,opacity:.1,blending:ht,depthWrite:!1,side:gt}));x.position.set(u,4.8,d),x.rotation.set(0,f,-.28),x.userData={base:t==="stacks"?.14:.1,seed:Math.random()*6},i.add(x),c.push(x)}}return c}var si=(i,e={})=>new Ye({color:i,roughness:.7,metalness:.05,...e});function Yn(i,e,t,n){return new ge(new Ct(i,e,t),n)}function Qi(i,e,t,n,s=10){return new ge(new vt(i,e,t,s),n)}function ol(i,e,t=14,n=10){return new ge(new tn(i,t,n),e)}function Ib(){let i=document.createElement("canvas");i.width=256,i.height=128;let e=i.getContext("2d");e.fillStyle="rgba(76,224,224,.08)",e.fillRect(0,0,256,128),e.strokeStyle="rgba(200,255,255,.9)",e.lineWidth=2;for(let n=0;n<5;n++)for(let s=0;s<8;s++){let r=s*34+n%2*17,o=n*30+8;e.beginPath();for(let a=0;a<6;a++){let l=a*Math.PI/3+Math.PI/6,c=r+Math.cos(l)*15,h=o+Math.sin(l)*15;a?e.lineTo(c,h):e.moveTo(c,h)}e.closePath(),e.stroke()}let t=new Rn(i);return t.colorSpace=mt,t.wrapS=t.wrapT=dn,t}function wm(i,e){let t=new Be;i.add(t);let n={skin:si(e.skin),skinD:si(e.skinD),robe:si(e.robe),robeL:si(e.robeL),robeD:si(e.robeD),pant:si(e.pant),hair:si(e.hair,{roughness:.9}),gold:si(e.wrapB,{metalness:.75,roughness:.3}),boot:si("#0e0b14",{roughness:.6}),gem:new Ye({color:e.gem,emissive:e.gem,emissiveIntensity:1.2})},s=Object.values(n);t.add(Xn(.62));let r=new ei(e.aura,5,7,2);r.position.y=1.9,t.add(r);let o=new ge(new ln(.5,.78,40),new We({color:e.aura,transparent:!0,opacity:.55,blending:ht,depthWrite:!1,side:gt}));o.rotation.x=-Math.PI/2,o.position.y=.05,t.add(o);let a=new Be;t.add(a);let l=Yn(.5,.22,.3,n.pant);l.position.y=.98,a.add(l);let c=Yn(.54,.07,.34,n.gold);c.position.y=1.1,a.add(c);let h=Yn(.58,.6,.34,n.robe);h.position.y=1.42,a.add(h);let u=Yn(.3,.42,.04,n.gold);u.position.set(0,1.45,.18),a.add(u);let d=Yn(.62,.1,.38,n.robeL);d.position.y=1.72,a.add(d);for(let ae of[-1,1]){let pe=ol(.13,n.robeL);pe.position.set(ae*.34,1.66,0),a.add(pe)}let f=Qi(.08,.09,.12,n.skinD);f.position.y=1.8,a.add(f);let x=new Be;x.position.y=1.98,a.add(x),x.add(ol(.21,n.skin,16,12));let m=new ge(new tn(.235,16,8,0,Math.PI*2,0,Math.PI*.55),n.hair);if(m.position.y=.02,x.add(m),e.queen){let ae=Qi(.06,.05,.55,n.hair);ae.position.set(0,-.2,-.2),ae.rotation.x=.35,x.add(ae);let pe=ol(.2,n.hair,12,8);pe.position.set(0,.16,-.06),pe.scale.set(1.2,.8,1.1),x.add(pe)}else{let ae=Qi(.19,.24,.12,n.hair,12);ae.position.y=.17,x.add(ae)}let g=new ge(new Qn(.215,.028,8,24),n.gold);g.rotation.x=Math.PI/2,g.position.y=.06,x.add(g);let p=new ge(new Mr(.05),n.gem);p.position.set(0,.06,.22),x.add(p);for(let ae of[-1,1]){let pe=new ge(new tn(.03,8,6),new We({color:e.accent}));pe.position.set(ae*.08,-.01,.19),x.add(pe)}function _(ae){let pe=new Be;pe.position.set(ae*.36,1.62,0);let he=Qi(.085,.075,.36,n.robeL);he.position.y=-.18,pe.add(he);let fe=new Be;fe.position.y=-.36,pe.add(fe);let Ae=Qi(.07,.06,.34,n.skin);Ae.position.y=-.17,fe.add(Ae);let A=Qi(.09,.09,.06,n.gold);A.position.y=-.04,fe.add(A);let ye=new Be;return ye.position.y=-.36,fe.add(ye),ye.add(ol(.075,n.skinD,10,8)),{g:pe,elbow:fe,hand:ye}}let v=_(1),y=_(-1);a.add(v.g,y.g);let S=new Be;S.rotation.x=Math.PI/2,v.hand.add(S),S.add(Yn(.11,.12,.42,si("#141020",{metalness:.6,roughness:.35})));let E=Yn(.13,.14,.08,n.gold);E.position.z=.02,S.add(E);let w=new Ye({color:"#ffffff",emissive:"#C9A84C",emissiveIntensity:1.5}),I=new ge(new vt(.05,.06,.16,8),w);I.rotation.x=Math.PI/2,I.position.z=.27,S.add(I);let b=bt("#C9A84C",.5,.8);b.position.z=.3,S.add(b);let M=new We({color:e.aura,transparent:!0,opacity:.95,blending:ht,depthWrite:!1}),L=new Be;L.visible=!1,y.hand.add(L);let k=new ge(new Ct(.06,.06,2),new We({color:"#ffffff",transparent:!0,opacity:.95,blending:ht,depthWrite:!1}));k.position.z=1,L.add(k);let F=new ge(new Ct(.16,.12,2.1),M);F.position.z=1.05,L.add(F);let H=Yn(.08,.08,.26,n.gold);H.position.z=-.05,L.add(H);let T=new ge(new ln(.5,el,28,1,-Zi,Zi*2),new We({color:e.aura,transparent:!0,opacity:0,blending:ht,depthWrite:!1,side:gt}));T.rotation.x=-Math.PI/2,T.rotation.z=-Math.PI/2,T.position.y=1.05,t.add(T);let C=new We({map:Ib(),color:e.accent,transparent:!0,opacity:0,blending:ht,depthWrite:!1,side:gt}),V=new ge(new vt(1.05,1.05,2,24,1,!0,-Ji,Ji*2),C);V.position.y=1.05,t.add(V);let z=bt(e.accent,2.6,0);z.position.set(0,1,.7),t.add(z);function D(ae){let pe=new Be;pe.position.set(ae*.15,.9,0);let he=Qi(.11,.095,.42,n.pant);he.position.y=-.21,pe.add(he);let fe=new Be;fe.position.y=-.42,pe.add(fe);let Ae=Qi(.09,.08,.4,n.pant);Ae.position.y=-.2,fe.add(Ae);let A=Yn(.2,.14,.32,n.boot);A.position.set(0,-.45,.05),fe.add(A);let ye=Yn(.22,.04,.34,n.gold);return ye.position.set(0,-.39,.05),fe.add(ye),{g:pe,knee:fe}}let B=D(1),J=D(-1);a.add(B.g,J.g);let ce=null;if(!e.queen)ce=Yn(.5,.72,.07,n.robeD),ce.position.set(0,.62,-.19),a.add(ce);else{let ae=new ge(new vt(.3,.46,.4,14,1,!0),n.robeL);ae.position.y=.78,a.add(ae)}let ue={phase:0,bladeT:-1,bladeN:0,hurtT:0};function q(ae){w.emissive.set(ae),b.material.color.set(ae)}function ee(ae){ue.bladeT=0,ue.bladeN=ae,L.visible=!0}function te(){ue.hurtT=.18}function K(ae,pe,he){t.position.set(he.x,0,he.z),t.rotation.y=Math.atan2(he.fx,he.fz),t.visible=he.alive&&!(he.invuln>0&&Math.floor(pe*14)%2===0);let fe=he.mv;ue.phase+=ae*(9+fe*4)*(fe>.05?1:0);let Ae=Math.sin(ue.phase)*.8*fe,A=Math.abs(Math.sin(ue.phase))*.07*fe,ye=he.mvx*he.fx+he.mvz*he.fz,Q=he.mvx*he.fz-he.mvz*he.fx;a.position.y=A,a.rotation.x=he.dashing?.55:.16*ye*fe,a.rotation.z=-.14*Q*fe,B.g.rotation.x=he.dashing?-.9:Ae,J.g.rotation.x=he.dashing?.9:-Ae,B.knee.rotation.x=Math.max(0,-Ae)*1.2,J.knee.rotation.x=Math.max(0,Ae)*1.2,h.scale.y=1+Math.sin(pe*2.1)*.015*(1-fe);let ze=he.firing||he.charge>.05||fe<.05;if(v.g.rotation.x=ze?-Math.PI/2+.1:-Ae*.9,v.g.rotation.z=ze?-.12:0,v.elbow.rotation.x=ze?0:-.5,ue.bladeT>=0){ue.bladeT+=ae/.22;let Pe=Math.min(1,ue.bladeT),De=ue.bladeN,N=De===2?-1.4:De===1?-Zi:Zi,R=De===2?-1.6:-N;y.g.rotation.x=-Math.PI/2+(De===2?Pe<.4?-.6*(1-Pe/.4):.35*(Pe-.4)/.6:0),y.g.rotation.y=De===2?0:N+(R-N)*(Pe<.5?2*Pe*Pe:1-2*(1-Pe)*(1-Pe)),y.g.rotation.z=0,y.elbow.rotation.x=0,T.material.opacity=.55*(1-Pe),T.scale.setScalar(De===2?1.25:1),ue.bladeT>=1.6&&(ue.bladeT=-1,L.visible=!1,T.material.opacity=0)}else he.ward?(y.g.rotation.x=-Math.PI/2+.3,y.g.rotation.y=.3,y.g.rotation.z=.2,y.elbow.rotation.x=-.6):(y.g.rotation.x=Ae*.9,y.g.rotation.y=0,y.g.rotation.z=.08,y.elbow.rotation.x=-.5);let le=he.ward?1:0;if(C.opacity+=(.7*le-C.opacity)*Math.min(1,ae*14),z.material.opacity=C.opacity*.5,V.scale.setScalar(.8+.2*C.opacity/.7),C.map.offset.y=pe*.15,he.parryFlash>0?(C.color.set("#ffffff"),C.opacity=1):C.color.set(e.accent),o.material.opacity=.4+Math.sin(pe*3)*.12+(he.charge>0?he.charge*.4:0),o.scale.setScalar(1+Math.sin(pe*3)*.05+he.charge*.5),b.scale.setScalar(.5+he.charge*1.4+(he.firing?.25:0)),ce&&(ce.rotation.x=-.25*fe-Math.sin(ue.phase)*.15*fe),ue.hurtT>0){ue.hurtT-=ae;for(let Pe of s)Pe.emissive.set("#ff2b2b"),Pe.emissiveIntensity=ue.hurtT/.18*1.5}else for(let Pe of s)Pe!==n.gem&&(Pe.emissiveIntensity=0)}function de(){i.remove(t)}return{group:t,update:K,setWeaponColor:q,playBlade:ee,hurtFlash:te,dispose:de,radius:Mn}}function Am(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new lt,c=0;for(let h=0;h<i.length;++h){let u=i[h],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(t){let h=0,u=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let x=0;x<f.count;++x)u.push(f.getX(x)+h);h+=i[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=Tm(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let m=0;m<o[h].length;++m)f.push(o[h][m][d]);let x=Tm(f);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(x)}}return l}function Tm(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new et(o,t,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let u=l/t;for(let d=0,f=h.count;d<f;d++)for(let x=0;x<t;x++){let m=h.getComponent(d,x);a.setComponent(d+u,x,m)}}else o.set(h.array,l);l+=h.count*t}return s!==void 0&&(a.gpuType=s),a}function hu(i,e){if(e===Hf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===po||e===Va){let t=i.getIndex();if(t===null){let o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===po)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var al=class extends wi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new xu(t)}),this.register(function(t){return new _u(t)}),this.register(function(t){return new Au(t)}),this.register(function(t){return new Ru(t)}),this.register(function(t){return new Cu(t)}),this.register(function(t){return new vu(t)}),this.register(function(t){return new Mu(t)}),this.register(function(t){return new bu(t)}),this.register(function(t){return new Eu(t)}),this.register(function(t){return new gu(t)}),this.register(function(t){return new Su(t)}),this.register(function(t){return new yu(t)}),this.register(function(t){return new Tu(t)}),this.register(function(t){return new wu(t)}),this.register(function(t){return new pu(t)}),this.register(function(t){return new Iu(t)}),this.register(function(t){return new Pu(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=Yi.extractUrlBase(e);o=Yi.resolveURL(c,this.path)}else o=Yi.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new ho(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Lm){try{o[tt.KHR_BINARY_GLTF]=new Lu(e)}catch(u){s&&s(u);return}r=JSON.parse(o[tt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new ku(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case tt.KHR_MATERIALS_UNLIT:o[u]=new mu;break;case tt.KHR_DRACO_MESH_COMPRESSION:o[u]=new Du(r,this.dracoLoader);break;case tt.KHR_TEXTURE_TRANSFORM:o[u]=new Nu;break;case tt.KHR_MESH_QUANTIZATION:o[u]=new Ou;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function Pb(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}var tt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},pu=class{constructor(e){this.parser=e,this.name=tt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new Se(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],nn);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Sr(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new ei(h),c.distance=u;break;case"spot":c=new za(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Ti(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}},mu=class{constructor(){this.name=tt.KHR_MATERIALS_UNLIT}getMaterialType(){return We}extendParams(e,t,n){let s=[];e.color=new Se(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],nn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,mt))}return Promise.all(s)}},gu=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},xu=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Te(a,a)}return Promise.all(r)}},_u=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},yu=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},vu=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Se(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],nn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,mt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},Mu=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},bu=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Se().setRGB(a[0],a[1],a[2],nn),Promise.all(r)}},Eu=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Su=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new Se().setRGB(a[0],a[1],a[2],nn),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,mt)),Promise.all(r)}},wu=class{constructor(e){this.parser=e,this.name=tt.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},Tu=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},Au=class{constructor(e){this.parser=e,this.name=tt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},Ru=class{constructor(e){this.parser=e,this.name=tt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Cu=class{constructor(e){this.parser=e,this.name=tt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Iu=class{constructor(e){this.name=tt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=s.byteOffset||0,c=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}},Pu=class{constructor(e){this.name=tt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==Pn.TRIANGLES&&c.mode!==Pn.TRIANGLE_STRIP&&c.mode!==Pn.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(let x of u){let m=new Ge,g=new O,p=new At,_=new O(1,1,1),v=new Bi(x.geometry,x.material,d);for(let y=0;y<d;y++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,y),l.SCALE&&_.fromBufferAttribute(l.SCALE,y),v.setMatrixAt(y,m.compose(g,p,_));for(let y in l)if(y==="_COLOR_0"){let S=l[y];v.instanceColor=new bs(S.array,S.itemSize,S.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&x.geometry.setAttribute(y,l[y]);Rt.prototype.copy.call(v,x),this.parser.assignFinalMaterial(v),f.push(v)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},Lm="glTF",vo=12,Rm={JSON:1313821514,BIN:5130562},Lu=class{constructor(e){this.name=tt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,vo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Lm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-vo,r=new DataView(e,vo),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===Rm.JSON){let c=new Uint8Array(e,vo+o,a);this.content=n.decode(c)}else if(l===Rm.BIN){let c=vo+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Du=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=tt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let h in o){let u=zu[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=zu[h]||h.toLowerCase();if(o[h]!==void 0){let d=n.accessors[e.attributes[h]],f=Dr[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(let x in f.attributes){let m=f.attributes[x],g=l[x];g!==void 0&&(m.normalized=g)}u(f)},a,c,nn,d)})})}},Nu=class{constructor(){this.name=tt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Ou=class{constructor(){this.name=tt.KHR_MESH_QUANTIZATION}},ll=class extends Vi{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=s-t,u=(n-t)/h,d=u*u,f=d*u,x=e*c,m=x-c,g=-2*f+3*d,p=f-d,_=1-g,v=p-d+u;for(let y=0;y!==a;y++){let S=o[m+y+a],E=o[m+y+l]*h,w=o[x+y+a],I=o[x+y]*h;r[y]=_*S+v*E+g*w+p*I}return r}},Lb=new At,Uu=class extends ll{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return Lb.fromArray(r).normalize().toArray(r),r}},Pn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Dr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Cm={9728:en,9729:un,9984:Th,9985:Qr,9986:Qs,9987:wn},Im={33071:gi,33648:io,10497:dn},uu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},zu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},es={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Db={CUBICSPLINE:void 0,LINEAR:fr,STEP:dr},du={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Nb(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Ye({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Jn})),i.DefaultMaterial}function As(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Ti(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Ob(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;o.push(d)}if(s){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],d=c[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function Ub(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function zb(i){let e,t=i.extensions&&i.extensions[tt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+fu(t.attributes):e=i.indices+":"+fu(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+fu(i.targets[n]);return e}function fu(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Fu(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Fb(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var kb=new Ge,ku=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Pb,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new br(this.options.manager):this.textureLoader=new Fa(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ho(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return As(r,a,s),Ti(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,h]of o.children.entries())r(h,a.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[tt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(Yi.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=uu[s.type],a=Dr[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new et(c,o,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=uu[s.type],c=Dr[s.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,x=s.normalized===!0,m,g;if(f&&f!==u){let p=Math.floor(d/f),_="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,v=t.cache.get(_);v||(m=new c(a,p*f,s.count*f/h),v=new xr(m,f/h),t.cache.add(_,v)),g=new vs(v,l,d%f/h,x)}else a===null?m=new c(s.count*l):m=new c(a,d,s.count*l),g=new et(m,l,x);if(s.sparse!==void 0){let p=uu.SCALAR,_=Dr[s.sparse.indices.componentType],v=s.sparse.indices.byteOffset||0,y=s.sparse.values.byteOffset||0,S=new _(o[1],v,s.sparse.count*p),E=new c(o[2],y,s.sparse.count*l);a!==null&&(g=new et(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let w=0,I=S.length;w<I;w++){let b=S[w];if(g.setX(b,E[w*l]),l>=2&&g.setY(b,E[w*l+1]),l>=3&&g.setZ(b,E[w*l+2]),l>=4&&g.setW(b,E[w*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=x}return g})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return h.magFilter=Cm[d.magFilter]||un,h.minFilter=Cm[d.minFilter]||wn,h.wrapS=Im[d.wrapS]||dn,h.wrapT=Im[d.wrapT]||dn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==en&&h.minFilter!==un,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let o=s.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;let d=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let x=d;t.isImageBitmapLoader===!0&&(x=function(m){let g=new Wt(m);g.needsUpdate=!0,d(g)}),t.load(Yi.resolveURL(u,r.path),x,void 0,f)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),Ti(u,o),u.userData.mimeType=o.mimeType||Fb(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[tt.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[tt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[tt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Hi,fn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new co,fn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Ye}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},l=r.extensions||{},c=[];if(l[tt.KHR_MATERIALS_UNLIT]){let u=s[tt.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new Se(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],nn),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,mt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=gt);let h=r.alphaMode||du.OPAQUE;if(h===du.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===du.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==We&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Te(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==We&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==We){let u=r.emissiveFactor;a.emissive=new Se().setRGB(u[0],u[1],u[2],nn)}return r.emissiveTexture!==void 0&&o!==We&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,mt)),Promise.all(c).then(function(){let u=new o(a);return r.name&&(u.name=r.name),Ti(u,r),t.associations.set(u,{materials:e}),r.extensions&&As(s,u,r),u})}createUniqueName(e){let t=at.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[tt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Pm(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],h=zb(c),u=s[h];if(u)o.push(u.promise);else{let d;c.extensions&&c.extensions[tt.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Pm(new lt,c,t),s[h]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let h=o[l].material===void 0?Nb(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,x=h.length;f<x;f++){let m=h[f],g=o[f],p,_=c[f];if(g.mode===Pn.TRIANGLES||g.mode===Pn.TRIANGLE_STRIP||g.mode===Pn.TRIANGLE_FAN||g.mode===void 0)p=r.isSkinnedMesh===!0?new _r(m,_):new ge(m,_),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===Pn.TRIANGLE_STRIP?p.geometry=hu(p.geometry,Va):g.mode===Pn.TRIANGLE_FAN&&(p.geometry=hu(p.geometry,po));else if(g.mode===Pn.LINES)p=new Ra(m,_);else if(g.mode===Pn.LINE_STRIP)p=new vr(m,_);else if(g.mode===Pn.LINE_LOOP)p=new Ca(m,_);else if(g.mode===Pn.POINTS)p=new Mi(m,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&Ub(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Ti(p,r),g.extensions&&As(s,p,g),t.assignFinalMaterial(p),u.push(p)}for(let f=0,x=u.length;f<x;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&As(s,u[0],r),u[0];let d=new Be;r.extensions&&As(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,x=u.length;f<x;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new kt(Wf.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new ki(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Ti(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],l=[];for(let c=0,h=o.length;c<h;c++){let u=o[c];if(u){a.push(u);let d=new Ge;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new yr(a,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){let f=s.channels[u],x=s.samplers[f.sampler],m=f.target,g=m.node,p=s.parameters!==void 0?s.parameters[x.input]:x.input,_=s.parameters!==void 0?s.parameters[x.output]:x.output;m.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",_)),c.push(x),h.push(m))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],x=u[2],m=u[3],g=u[4],p=[];for(let _=0,v=d.length;_<v;_++){let y=d[_],S=f[_],E=x[_],w=m[_],I=g[_];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();let b=n._createAnimationTracks(y,S,E,w,I);if(b)for(let M=0;M<b.length;M++)p.push(b[M])}return new Xi(r,void 0,p)})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,kb)});for(let f=0,x=u.length;f<x;f++)h.add(u[f]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new Ms:c.length>1?h=new Be:c.length===1?h=c[0]:h=new Rt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Ti(h,r),r.extensions&&As(n,h,r),r.matrix!==void 0){let u=new Ge;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new Be;n.name&&(r.name=s.createUniqueName(n.name)),Ti(r,n),n.extensions&&As(t,r,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);let c=h=>{let u=new Map;for(let[d,f]of s.associations)(d instanceof fn||d instanceof Wt)&&u.set(d,f);return h.traverse(d=>{let f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,l=[];es[r.path]===es.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(es[r.path]){case es.weights:c=bi;break;case es.rotation:c=Ei;break;case es.position:case es.scale:c=Si;break;default:switch(n.itemSize){case 1:c=bi;break;case 2:case 3:default:c=Si;break}break}let h=s.interpolation!==void 0?Db[s.interpolation]:fr,u=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){let x=new c(l[d]+"."+es[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),o.push(x)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Fu(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Ei?Uu:ll;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Bb(i,e,t){let n=e.attributes,s=new qt;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new O(l[0],l[1],l[2]),new O(c[0],c[1],c[2])),a.normalized){let h=Fu(Dr[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new O,l=new O;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,x=d.max;if(f!==void 0&&x!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(x[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(x[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(x[2]))),d.normalized){let m=Fu(Dr[d.componentType]);l.multiplyScalar(m)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new an;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Pm(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(let o in n){let a=zu[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return Qe.workingColorSpace!==nn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Qe.workingColorSpace}" not supported.`),Ti(i,e),Bb(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?Ob(i,e.targets,t):i})}function Bu(i){let e=new Map,t=new Map,n=i.clone();return Dm(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Dm(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)Dm(i.children[n],e.children[n],t)}var hl=i=>at.sanitizeNodeName(i),Um={hips:"root",spine:"hips",chest:"spine",head:"chest","upperarm.l":"chest","lowerarm.l":"upperarm.l","wrist.l":"lowerarm.l","hand.l":"wrist.l","handslot.l":"hand.l","upperarm.r":"chest","lowerarm.r":"upperarm.r","wrist.r":"lowerarm.r","hand.r":"wrist.r","handslot.r":"hand.r","upperleg.l":"hips","lowerleg.l":"upperleg.l","foot.l":"lowerleg.l","toes.l":"foot.l","upperleg.r":"hips","lowerleg.r":"upperleg.r","foot.r":"lowerleg.r","toes.r":"foot.r"},Rs=["root",...Object.keys(Um)],zm={hipsY:.406,armLen:.576};async function Fm(i,e){let t=await i.loadAsync(e),n={};t.scene.traverse(r=>{for(let o of Rs)r.name===hl(o)&&(n[o]={q:r.quaternion.clone(),p:r.position.clone()})});for(let r of Rs)if(!n[r])throw new Error("anim library is missing bone "+r);let s={};for(let r of t.animations)s[r.name]=r;return{rest:n,clips:s}}function Hb(i){let e=new lt;for(let t of["position","normal","uv"]){let n=i.getAttribute(t);if(!n)continue;let s=new Float32Array(n.count*n.itemSize);for(let r=0;r<n.count;r++)for(let o=0;o<n.itemSize;o++)s[r*n.itemSize+o]=n.getComponent(r,o);e.setAttribute(t,new et(s,n.itemSize))}i.index&&e.setIndex(Array.from(i.index.array));for(let t of i.groups)e.addGroup(t.start,t.count,t.materialIndex);return e}function Vb(i,e,t){i.updateMatrixWorld(!0);let n=[],s=[];if(i.traverse(l=>{if(!l.isMesh)return;let c=Hb(l.geometry);c.applyMatrix4(l.matrixWorld),c.attributes.normal||c.computeVertexNormals(),n.push(c),s.push(l.material)}),!n.length)throw new Error("model has no meshes");let r=n.length===1?n[0]:Am(n,!0);r.rotateY(e),r.computeBoundingBox();let o=r.boundingBox,a=t/(o.max.y-o.min.y);return r.translate(-(o.min.x+o.max.x)/2,-o.min.y,-(o.min.z+o.max.z)/2),r.scale(a,a,a),r.computeBoundingBox(),{geo:r,mats:s.length===1?s[0]:s}}function Gb(i,e,t){let n=i.array,s=i.count,r={x:e*(t.shoulder??.105),y:e*.815},o=l=>{let c=null,h=-1;for(let u=0;u<s;u++){let d=n[u*3]*l,f=n[u*3+1];f>e*.36&&f<e*.64&&d>h&&(h=d,c=[n[u*3],f,n[u*3+2]])}return c},a=l=>{let c=0,h=0;for(let u=0;u<s;u++){let d=n[u*3];n[u*3+1]<e*.07&&d*l>e*.01&&(c+=d,h++)}return h?c/h:l*e*.07};return{sh:r,tipL:o(1),tipR:o(-1),ankleL:a(1),ankleR:a(-1),hipsY:e*.5,spineY:e*.6,chestY:e*.7,headY:e*.855,legX:e*(t.hipWidth??.085),legTopY:e*.49}}function Wb(i,e,t){let n={};for(let o of Rs){let a=new Ms;a.name=hl(o),a.quaternion.copy(i.rest[o].q),n[o]=a}for(let[o,a]of Object.entries(Um))n[a].add(n[o]);n.hips.position.set(0,e.hipsY,0),n.spine.position.set(0,e.spineY-e.hipsY,0),n.chest.position.set(0,e.chestY-e.spineY,0),n.head.position.set(0,e.headY-e.chestY,0);let s=new O(0,1,0),r=(o,a,l,c)=>{let h=s.clone().applyQuaternion(a),u=new O().subVectors(c,l).normalize();o.quaternion.copy(new At().setFromUnitVectors(h,u).multiply(a))};for(let[o,a,l,c]of[["l",1,e.tipL,e.ankleL],["r",-1,e.tipR,e.ankleR]]){let h=new O(a*e.sh.x,e.sh.y,0),u=l?new O(...l):h.clone().add(new O(a*.2*t,-.38*t,0)),d=h.distanceTo(u);n["upperarm."+o].position.set(a*e.sh.x,e.sh.y-e.chestY,0),r(n["upperarm."+o],i.rest["upperarm."+o].q,h,u),n["lowerarm."+o].position.set(0,d*.42,0),n["wrist."+o].position.set(0,d*.38,0),n["hand."+o].position.set(0,d*.08,0),n["handslot."+o].position.copy(i.rest["handslot."+o].p).multiplyScalar(d/zm.armLen);let f=new O(a*e.legX,e.legTopY,0),x=new O(c,t*.045,0),m=f.distanceTo(x);n["upperleg."+o].position.set(a*e.legX,e.legTopY-e.hipsY,0),r(n["upperleg."+o],i.rest["upperleg."+o].q,f,x),n["lowerleg."+o].position.set(0,m*.5,0),n["foot."+o].position.set(0,m*.5,0),n["toes."+o].position.set(0,t*.075,0)}return n}var Xb=["hips","spine","chest","head","upperarm.l","lowerarm.l","wrist.l","hand.l","upperarm.r","lowerarm.r","wrist.r","hand.r","upperleg.l","lowerleg.l","foot.l","upperleg.r","lowerleg.r","foot.r"],Nm={hips:"spine",spine:"chest",chest:"head","upperarm.l":"lowerarm.l","lowerarm.l":"wrist.l","wrist.l":"hand.l","upperarm.r":"lowerarm.r","lowerarm.r":"wrist.r","wrist.r":"hand.r","upperleg.l":"lowerleg.l","lowerleg.l":"foot.l","foot.l":"toes.l","upperleg.r":"lowerleg.r","lowerleg.r":"foot.r","foot.r":"toes.r"},cl=new O,Om=new O,Yb=new O;function qb(i,e,t){cl.subVectors(t,e),Om.subVectors(i,e);let n=Math.max(0,Math.min(1,Om.dot(cl)/Math.max(cl.lengthSq(),1e-9)));return i.distanceTo(Yb.copy(e).addScaledVector(cl,n))}function Kb(i,e,t,n){let s={};Rs.forEach((f,x)=>{s[f]=x});let r=Xb.map(f=>{let x=e[f].getWorldPosition(new O),m;if(Nm[f])m=e[Nm[f]].getWorldPosition(new O);else if(f==="head")m=x.clone().add(new O(0,n*.15,0));else{let p=e["wrist."+f.slice(-1)].getWorldPosition(new O);m=x.clone().add(x.clone().sub(p).normalize().multiplyScalar(n*.1))}let g=f.endsWith(".l")?1:f.endsWith(".r")?-1:0;return{n:f,i:s[f],a:x,b:m,side:g,leg:f.includes("leg")||f.startsWith("foot"),arm:f.includes("arm")||f.startsWith("wrist")||f.startsWith("hand")}}),o=i.attributes.position,a=o.count,l=new Uint16Array(a*4),c=new Float32Array(a*4),h=new O,u=n*.02,d=[];for(let f=0;f<a;f++){h.fromBufferAttribute(o,f),d.length=0;for(let m of r){if(m.side&&h.x*m.side<-n*.02||m.leg&&h.y>t.hipsY+n*.02||m.arm&&(h.y<n*.3||Math.abs(h.x)<n*.07)||m.n==="head"&&h.y<n*.78)continue;let g=qb(h,m.a,m.b);m.arm&&g>n*.075||m.leg&&g>n*.1||d.push([m.i,1/Math.pow(g+u,4)])}d.sort((m,g)=>g[1]-m[1]);let x=0;for(let m=0;m<4&&m<d.length;m++)x+=d[m][1];for(let m=0;m<4;m++)l[f*4+m]=d[m]?d[m][0]:0,c[f*4+m]=d[m]?d[m][1]/(x||1):0}i.setAttribute("skinIndex",new mr(l,4)),i.setAttribute("skinWeight",new it(c,4))}var Nr=["spine","chest","head","upperarm.l","lowerarm.l","wrist.l","hand.l","handslot.l","upperarm.r","lowerarm.r","wrist.r","hand.r","handslot.r"],Mo=Rs.filter(i=>!Nr.includes(i));function Zb(i,e,t=null){let n=new Set((t||Rs).map(hl)),s=[];for(let r of i.tracks){let{nodeName:o,propertyName:a}=at.parseTrackName(r.name);if(n.has(o)){if(a==="quaternion")s.push(r.clone());else if(a==="position"&&o===hl("hips")){let l=r.clone(),c=e/zm.hipsY;for(let h=0;h<l.values.length;h++)l.values[h]*=c;s.push(l)}}}return new Xi(i.name+(t===Nr?":upper":t===Mo?":lower":""),i.duration,s)}function Hu(i,e,t={}){let n=t.height??1.8,{geo:s,mats:r}=Vb(i,t.yaw??-Math.PI/2,n),o=Gb(s.attributes.position,n,t.build||{}),a=Wb(e,o,n),l=new _r(s,r);l.add(a.root),l.updateMatrixWorld(!0),Kb(s,a,o,n),l.bind(new yr(Rs.map(x=>a[x]))),s.boundingSphere=new an(new O(0,n*.5,0),n*.9);let c={},h=(x,m=null)=>{let g=x+"|"+(m===Nr?"u":m===Mo?"l":"f");if(c[g])return c[g];let p=e.clips[x];return p?c[g]=Zb(p,o.hipsY,m):null},u=new Es(l),d={};return{mesh:l,bones:a,mixer:u,action:x=>{if(d[x])return d[x];let m=h(x);return m?d[x]=u.clipAction(m):null},clip:h,landmarks:o,height:n}}function km(i,{length:e=1,flip:t=!1,grip:n=.12,twist:s=0}={}){i.updateMatrixWorld(!0);let r=[],o=new O;i.traverse(g=>{if(!g.isMesh)return;let p=g.geometry.attributes.position;for(let _=0;_<p.count;_+=3)r.push(new O(p.getX(_),p.getY(_),p.getZ(_)).applyMatrix4(g.matrixWorld))});let a=r.reduce((g,p)=>g.add(p),new O).multiplyScalar(1/r.length),l=[[0,0,0],[0,0,0],[0,0,0]];for(let g of r){let p=[g.x-a.x,g.y-a.y,g.z-a.z];for(let _=0;_<3;_++)for(let v=0;v<3;v++)l[_][v]+=p[_]*p[v]}let c=new O(1,1,1).normalize();for(let g=0;g<40;g++)c=new O(l[0][0]*c.x+l[0][1]*c.y+l[0][2]*c.z,l[1][0]*c.x+l[1][1]*c.y+l[1][2]*c.z,l[2][0]*c.x+l[2][1]*c.y+l[2][2]*c.z).normalize();t&&c.negate();let h=new At().setFromUnitVectors(c,new O(0,1,0)),u=1/0,d=-1/0;for(let g of r){let p=g.clone().sub(a).applyQuaternion(h).y;u=Math.min(u,p),d=Math.max(d,p)}let f=e/(d-u);i.position.sub(a);let x=new Be;x.add(i),x.quaternion.copy(h),x.scale.setScalar(f),x.position.set(0,-u*f-n*e,0);let m=new Be;return m.add(x),m.rotation.y=s,m}var Bm="./assets/",bo={melvinci:{height:1.86,idle:"Idle",idleDrawn:"2H_Melee_Idle",run:"Running_A",walk:"Walking_A",blade:["2H_Melee_Attack_Slice","1H_Melee_Attack_Slice_Diagonal","2H_Melee_Attack_Stab","2H_Melee_Attack_Chop"],weapons:[{file:"melvinci_blade",slot:"handslot.r",length:1.35,grip:.1,flip:!0,glow:"#4CE0E0",drawOn:"melee",sheath:{bone:"chest",pos:[.2,.42,-.3],rot:[.2,0,Math.PI-.62]}},{file:"melvinci_cannon",slot:"handslot.l",length:.72,grip:.45}],castHand:"handslot.l"},kimaya:{height:1.74,idle:"Idle",idleDrawn:"Idle",run:"Running_B",walk:"Walking_B",blade:["1H_Melee_Attack_Slice_Horizontal","1H_Melee_Attack_Slice_Diagonal","1H_Melee_Attack_Stab","1H_Melee_Attack_Chop"],weapons:[{file:"kimaya_saber",slot:"handslot.r",length:1,grip:.14,flip:!0,glow:"#ff7ad9",drawOn:"melee",sheath:{bone:"hips",pos:[.24,.02,.02],rot:[.15,0,Math.PI-.3]}},{file:"kimaya_scepter",slot:"handslot.l",length:1.25,grip:.38,glow:"#3ce08f",drawOn:"cast",sheath:{bone:"chest",pos:[.03,-.23,-.3],rot:[-.15,0,-.36]}}],castHand:"wrist.l",bracers:["wrist.l","wrist.r"]},bizzle:{height:1.98,idle:"Idle",idleDrawn:"2H_Melee_Idle",run:"Running_A",walk:"Walking_A",blade:["2H_Melee_Attack_Slice","1H_Melee_Attack_Slice_Diagonal","2H_Melee_Attack_Stab","2H_Melee_Attack_Chop"],weapons:[{file:"bizzle_blade",slot:"handslot.r",length:1.3,grip:.12,flip:!1,glow:"#ff2b2b",drawOn:"melee",sheath:{bone:"chest",pos:[.2,.44,-.46],rot:[.2,0,Math.PI-.62]}},{file:"bizzle_cannon",slot:"handslot.r",length:1.05,grip:.35,trail:!1,drawOn:"gun",handRot:[Math.PI/2,0,0],sheath:{bone:"hips",pos:[.3,.05,.06],rot:[.1,0,Math.PI-.2]}}],castHand:"handslot.l",gun:{file:"bizzle_cannon",aim:"2H_Ranged_Aiming"}},mahal:{height:1.7,idle:"Idle",idleDrawn:"Idle",run:"Running_B",walk:"Walking_B",blade:["1H_Melee_Attack_Slice_Horizontal","1H_Melee_Attack_Slice_Diagonal","1H_Melee_Attack_Stab","1H_Melee_Attack_Chop"],weapons:[{file:"mahal_sword",slot:"handslot.r",length:1.05,grip:.16,flip:!1,glow:"#b56cff",drawOn:"melee",sheath:{bone:"hips",pos:[.24,.26,.02],rot:[.15,0,Math.PI-.3]}},{file:"mahal_shield",slot:"lowerarm.l",length:.8,grip:.5,twist:0,trail:!1,drawOn:"melee",sheath:{bone:"chest",pos:[0,.12,-.3],rot:[0,Math.PI,0]}}],castHand:"wrist.l",bracers:["wrist.l","wrist.r"]}},Hm=[...new Set([...Object.values(bo).flatMap(i=>i.weapons.map(e=>e.file)),"kimaya_chakram"])],Vm={grunt:{file:"grunt",rig:!0,height:2,move:"Running_A",attack:"Unarmed_Melee_Attack_Punch_A",idle:"Unarmed_Idle"},shooter:{file:"shooter",rig:!0,height:2.2,move:"Walking_A",attack:"1H_Ranged_Shoot",idle:"1H_Ranged_Aiming"},brute:{file:"brute",rig:!0,height:2.8,move:"Walking_B",attack:"2H_Melee_Attack_Chop",idle:"2H_Melee_Idle"},flyer:{file:"flyer",rig:!1,size:1.5}},$b=new Set(["ramp_arch","ramp_pillar","ramp_brazier","venus_pylon","venus_module","venus_node","arch_stack","arch_candles","arch_press"]),Jb=-Math.PI/2,jb=["barrel_large","barrel_small_stack","box_stacked","keg_decorated","trunk_large_A","trunk_medium_B","banner_patternA_red","banner_patternA_yellow","banner_shield_red","table_medium_decorated_A","candle_triple","shelf_small_candles","rubble_large","sword_shield_broken","coin_stack_large","ramp_arch","ramp_pillar","ramp_brazier","venus_pylon","venus_module","venus_node","arch_stack","arch_candles","arch_press"],Gm={engine:{file:"boss_engine",size:4.6,y:0},censor:{file:"boss_censor",size:5.2,y:-2.6},redactor:{file:"boss_redactor",size:3.8,y:-.2}};async function Qm(i=()=>{}){let e=new al,t={heroes:{},foes:{},bosses:{},weapons:{},props:{},lib:null,missing:[]},n=async(a,l)=>{try{return await e.loadAsync(Bm+a)}catch{return t.missing.push(l),null}},s=0,r=1+Hm.length+Object.keys(bo).length+Object.keys(Vm).length+Object.keys(Gm).length,o=()=>i(++s/r);t.lib=await Fm(e,Bm+"anims/kaykit_rig.glb").catch(()=>(t.missing.push("anim library"),null)),o(),await Promise.all(Hm.map(a=>n(`models/weapons/${a}.glb`,a).then(l=>{l&&(t.weapons[a]=l.scene),o()})));for(let a of Object.keys(bo)){let l=await n(`models/heroes/${a}.glb`,a);if(o(),!l||!t.lib)continue;let c=bo[a],h=Hu(l.scene,t.lib,{height:c.height});for(let u of c.weapons){let d=t.weapons[u.file];if(!d)continue;let f=new Be;f.name=`wpn_${u.file}`,f.add(km(d.clone(!0),u)),h.bones[u.slot].add(f)}t.heroes[a]=h}for(let[a,l]of Object.entries(Vm)){let c=await n(`models/foes/${l.file}.glb`,l.file);o(),c&&(l.rig&&t.lib?t.foes[a]={rig:Hu(c.scene,t.lib,{height:l.height}),spec:l}:t.foes[a]={scene:Wm(c.scene,l.size),spec:l})}await Promise.all(jb.map(a=>n(`props/${a}.glb`,a).then(l=>{l&&($b.has(a)&&(l.scene.rotation.y=Jb),l.scene.name=`prop_${a}`,t.props[a]=l.scene)})));for(let[a,l]of Object.entries(Gm)){let c=await n(`models/foes/${l.file}.glb`,l.file);o(),c&&(t.bosses[a]=Wm(c.scene,l.size,l.y))}return t}function Wm(i,e,t=0){let n=new Be;n.add(i),n.rotation.y=-Math.PI/2,n.updateMatrixWorld(!0);let s=new qt().setFromObject(n).getSize(new O),r=e/Math.max(s.x,s.y,s.z);n.scale.setScalar(r),n.updateMatrixWorld(!0);let o=new qt().setFromObject(n),a=o.getCenter(new O);n.position.set(-a.x,-o.min.y+t,-a.z);let l=new Be;return l.add(n),l}function Qb(i){if(!i.emissive||!i.color)return;let e=Yp(i.color.r,i.color.g,i.color.b);e<=0||(i.emissive.copy(i.color),i.emissiveIntensity=Math.max(i.emissiveIntensity??0,e),i.map&&!i.emissiveMap&&(i.emissiveMap=i.map))}function ul(i){let e=[];return i.traverse(t=>{if(!t.isMesh)return;let n=s=>{let r=s.clone();return Qb(r),r.userData.baseEmissive=r.emissive?r.emissive.getHex():0,r.userData.baseEI=r.emissiveIntensity??0,e.push(r),r};t.material=Array.isArray(t.material)?t.material.map(n):n(t.material),t.castShadow=!0}),e}function ts(i,e,t="#ffffff"){for(let n of i)n.emissive&&(e>0?(n.emissive.set(t),n.emissiveIntensity=1.4*e):(n.emissive.setHex(n.userData.baseEmissive),n.emissiveIntensity=n.userData.baseEI))}function e0(i,e){let t=new Map,n=(h,u)=>{let d=h+(u===Nr?"|u":u===Mo?"|l":"|f");if(t.has(d))return t.get(d);let f=e.clip(h,u);if(!f)return null;let x=i.clipAction(f);return t.set(d,x),x},s=null,r=null,o=null,a=0,l="",c=(h,u,d,f=1)=>(h===u||(h&&h.fadeOut(d),u&&(u.setLoop(Oh,1/0),u.reset().setEffectiveTimeScale(f).setEffectiveWeight(1).fadeIn(d).play())),u);return{loop(h,u=null,d=1){if(o)return;let f=n(h,u?Mo:null),x=u?n(u,Nr):null;s=c(s,f,.18,d),s&&s.setEffectiveTimeScale(d),r=c(r,x,.12)},oneShot(h,u=1,d=!1){let f=n(h,null);return f?(s&&s.fadeOut(.08),r&&r.fadeOut(.08),s=null,r=null,o&&o!==f&&o.fadeOut(.06),f.setLoop(Nh,1),f.clampWhenFinished=d,o=f,l=h,f.reset().setEffectiveTimeScale(u).setEffectiveWeight(1).fadeIn(.06).play(),a=f.getClip().duration/u,a):0},update(h){o&&(a-=h,a<=0&&!o.clampWhenFinished&&(o.fadeOut(.15),o=null)),i.update(h)},get busy(){return!!o},get shotName(){return o?l:""}}}function eE(){let i=document.createElement("canvas");i.width=256,i.height=128;let e=i.getContext("2d");e.strokeStyle="rgba(220,255,255,.95)",e.lineWidth=2;for(let n=0;n<5;n++)for(let s=0;s<8;s++){let r=s*34+n%2*17,o=n*30+8;e.beginPath();for(let a=0;a<6;a++){let l=a*Math.PI/3+Math.PI/6;e.lineTo(r+Math.cos(l)*15,o+Math.sin(l)*15)}e.closePath(),e.stroke()}let t=new Rn(i);return t.colorSpace=mt,t.wrapS=t.wrapT=dn,t}function tE(i,e){let t=.2,n=22,s=new Float32Array(n*2*3),r=new Float32Array(n*2*3),o=[];for(let x=0;x<n-1;x++){let m=x*2;o.push(m,m+1,m+2,m+1,m+3,m+2)}let a=new lt;a.setAttribute("position",new et(s,3)),a.setAttribute("color",new et(r,3)),a.setIndex(o);let l=new We({vertexColors:!0,transparent:!0,blending:ht,depthWrite:!1,side:gt}),c=new ge(a,l);c.frustumCulled=!1,c.visible=!1,i.add(c);let h=new Se(e),u=new Se("#ffffff"),d=new Se,f=[];return{add(x,m){f.unshift({b:x.clone(),t:m.clone(),age:0}),f.length>n&&f.pop()},style(x,m=.2){h.set(x),t=m},update(x){for(let m of f)m.age+=x;for(;f.length&&f[f.length-1].age>t;)f.pop();if(c.visible=f.length>1,!!c.visible){for(let m=0;m<n;m++){let g=f[Math.min(m,f.length-1)],p=m<f.length?Math.max(0,1-g.age/t)*(1-m/n):0;s.set([g.b.x,g.b.y,g.b.z],m*6),s.set([g.t.x,g.t.y,g.t.z],m*6+3),d.copy(h).lerp(u,.3*p),r.set([h.r*p*.35,h.g*p*.35,h.b*p*.35],m*6),r.set([d.r*p,d.g*p,d.b*p],m*6+3)}a.attributes.position.needsUpdate=!0,a.attributes.color.needsUpdate=!0}},dispose(){i.remove(c),a.dispose(),l.dispose()}}}var ri=i=>at.sanitizeNodeName(i),Xm=new O,dl=new O,Ym=new O,qm=new O,Km=new O,fl=new At,Zm=new At,Vu=new At,$m=new At,pl=new At,nE=new At;function t0(i,e){i.getWorldQuaternion(Vu),Vu.premultiply(e),i.parent.getWorldQuaternion($m),i.quaternion.copy($m.invert().multiply(Vu)),i.updateWorldMatrix(!1,!0)}function Gu(i,e,t,n,s,r,o){!e||!t||o<=.001||(e.getWorldPosition(Xm),t.getWorldPosition(dl),Ym.subVectors(dl,Xm).normalize(),i.getWorldQuaternion(pl),qm.set(n,s,r).normalize().applyQuaternion(pl),Zm.setFromUnitVectors(Ym,qm),fl.slerpQuaternions(nE,Zm,o),t0(e,fl))}function Jm(i,e,t){!e||Math.abs(t)<1e-4||(i.getWorldQuaternion(pl),Km.set(1,0,0).applyQuaternion(pl),fl.setFromAxisAngle(Km,t),t0(e,fl))}var jm={fire:{lean:.32,upper:[-.22,-.2,1],lower:[-.62,-.05,1],wrist:[-.35,0,1]},rest:{lean:.04,upper:[.26,-1,.06],lower:[.1,-1,.3],wrist:[.05,-1,.3]}};function n0(i,e,t){let n=e&&e.heroes[t];if(!n)return null;let s=Ft[t],r=bo[t],o=new Be;i.add(o);let a=new Be;o.add(a);let l=Bu(n.mesh);a.add(l);let c=ul(l),h={};l.traverse(A=>{A.isBone&&(h[A.name]=A)});let u=e0(new Es(l),n);o.add(Xn(.7));let d=new ei(s.aura,6,8,2);d.position.y=2.1,o.add(d);let f=new ge(new ln(.55,.85,48),new We({color:s.aura,transparent:!0,opacity:.5,blending:ht,depthWrite:!1,side:gt}));f.rotation.x=-Math.PI/2,f.position.y=.05,o.add(f);let x=h[ri(r.castHand)],m=bt("#C9A84C",.6,.85);x&&x.add(m);let g=new ge(new ln(.5,el,32,1,-Zi,Zi*2),new We({color:s.aura,transparent:!0,opacity:0,blending:ht,depthWrite:!1,side:gt}));g.rotation.x=-Math.PI/2,g.rotation.z=-Math.PI/2,g.position.y=1.1,o.add(g);let p=new We({map:eE(),color:s.accent,transparent:!0,opacity:0,blending:ht,depthWrite:!1,side:gt}),_=new ge(new vt(1.15,1.15,2.3,28,1,!0,-Ji,Ji*2),p);_.position.y=1.15,o.add(_);let v=(r.bracers||[]).map(A=>{let ye=h[ri(A)];if(!ye)return null;let Q=new Ye({color:"#C9A84C",metalness:.8,roughness:.25,emissive:s.aura,emissiveIntensity:.6}),ze=new ge(new Qn(.075,.022,8,24),Q);ze.rotation.x=Math.PI/2,ye.add(ze);let le=bt(s.aura,.35,.6);return ye.add(le),{ringMat:Q,glow:le}}).filter(Boolean),y=r.weapons.filter(A=>A.sheath).map(A=>{let ye=l.getObjectByName(`wpn_${A.file}`);if(!ye)return null;let Q=h[ri(A.slot)],ze=h[ri(A.sheath.bone)],le=bt(A.glow||s.aura,.1,0);return Q.add(le),{w:A,holder:ye,hand:Q,rest:ze,spark:le,drawn:!1,igniteT:0,sparkT:0,trail:tE(i,A.glow||s.aura),baseL:new O(0,A.length*.28,0),tipL:new O(0,A.length*(.97-A.grip),0)}}).filter(Boolean);function S(A){A.rest.add(A.holder),A.holder.position.set(...A.w.sheath.pos),A.holder.rotation.set(...A.w.sheath.rot),A.holder.scale.setScalar(1),A.drawn=!1,A.sparkT=.22}function E(A){A.drawn||(A.hand.add(A.holder),A.holder.position.set(0,0,0),A.holder.rotation.set(...A.w.handRot||[0,0,0]),A.drawn=!0,A.igniteT=.14,A.sparkT=.25)}for(let A of y)S(A);let w=0,I=r.bracers?["l","r"].map(A=>({up:h[ri("upperarm."+A)],lo:h[ri("lowerarm."+A)],wr:h[ri("wrist."+A)],hd:h[ri("hand."+A)]})).filter(A=>A.up&&A.lo&&A.wr&&A.hd):[],b=h[ri("chest")],M=h[ri("spine")],L=0,k=0,F=0,H=I.length?[M,b,...I.flatMap(A=>[A.up,A.lo,A.wr])].filter(Boolean):[],T=H.map(A=>A.quaternion.clone()),C=!1,V=!1,z=new O;function D(){if(I.length){H.forEach((A,ye)=>T[ye].copy(A.quaternion)),V=!0,o.updateWorldMatrix(!0,!0);for(let[A,ye]of[[jm.rest,k],[jm.fire,L]])if(!(ye<=.001)){Jm(o,M,A.lean*.45*ye),Jm(o,b,A.lean*.55*ye);for(let Q of I){Q.up.getWorldPosition(z),o.worldToLocal(z);let ze=Math.sign(z.x)||1;Gu(o,Q.up,Q.lo,A.upper[0]*ze,A.upper[1],A.upper[2],ye),Gu(o,Q.lo,Q.wr,A.lower[0]*ze,A.lower[1],A.lower[2],ye),Gu(o,Q.wr,Q.hd,A.wrist[0]*ze,A.wrist[1],A.wrist[2],ye)}}}}let B=(A="melee")=>{for(let ye of y)(ye.w.drawOn||"melee")===A?E(ye):ye.drawn&&S(ye);w=A==="cast"?1.2:1.7},J=0,ce=0,ue=!0,q=0,ee=!1,te=0,K=()=>r.gun&&y.find(A=>A.w.file===r.gun.file),de=()=>{let A=K();return!!(A&&A.drawn)},ae=new O,pe=r.height*.55,he=new O,fe=new O;function Ae(A,ye,Q){let ze=Q.y||0;o.position.set(Q.x,ze,Q.z),o.rotation.y=Math.atan2(Q.fx,Q.fz);{let le=Q.flip>0?Q.flip*Q.flip*(3-2*Q.flip):0,Pe=Math.PI*2*le;a.rotation.x=Pe,a.position.set(0,pe-pe*Math.cos(Pe),-pe*Math.sin(Pe))}if(o.visible=!(Q.alive&&Q.invuln>0&&Math.floor(ye*14)%2===0),!Q.alive&&ue&&u.oneShot("Death_A",1,!0),ue=Q.alive,Q.alive){if(Q.dashing&&!Q.longDash&&q<=0){let Y=Q.mvx*Q.fx+Q.mvz*Q.fz,ie=Q.mvx*Q.fz-Q.mvz*Q.fx,se=Math.abs(Y)>=Math.abs(ie)?Y>=0?"Dodge_Forward":"Dodge_Backward":ie>0?"Dodge_Left":"Dodge_Right";q=u.oneShot(se,2.6)}q>0&&(q-=A),Q.air&&!ee&&!Q.dashing&&u.oneShot("Jump_Start",2.4),!Q.air&&ee&&u.oneShot("Jump_Land",2.8),ee=!!Q.air;let le=(Q.firing||Q.charge>.05)&&te<=0;r.gun&&le&&!de()&&B("gun");let Pe=Q.ward?"Blocking":le&&r.gun?r.gun.aim:le&&!I.length?"Spellcasting":null,N=y.some(Y=>Y.drawn)?r.idleDrawn:r.idle,R=1;if(Q.air)N="Jump_Idle";else{let Y=Q.mvx*Q.fx+Q.mvz*Q.fz,ie=Q.mvx*Q.fz-Q.mvz*Q.fx,se=em(Q.speed??Q.mv*ja,Y,-ie,C);C=se.running,se.clip&&(N=se.clip==="run"?r.run:se.clip==="walk"?r.walk||"Walking_A":se.clip==="back"?"Walking_Backwards":se.clip==="strafeLeft"?"Running_Strafe_Left":"Running_Strafe_Right",R=se.timeScale)}u.loop(N,Pe,R)}if(V&&(H.forEach((le,Pe)=>le.quaternion.copy(T[Pe])),V=!1),u.update(A),I.length){let le=Q.alive&&(Q.firing||Q.charge>.05||F>0)&&te<=0&&!Q.ward,Pe=Q.alive&&!le&&!Q.air&&!(Q.mv>.1)&&!u.busy&&!Q.ward;F>0&&(F-=A),L+=((le?1:0)-L)*Math.min(1,A*16),k+=((Pe?1:0)-k)*Math.min(1,A*6),D()}if(w>0&&(w-=A,w<=0))if(u.busy)w=.15;else for(let le of y)le.drawn&&S(le);for(let le of y){if(le.igniteT>0){le.igniteT-=A;let Pe=1-Math.max(0,le.igniteT)/.14;le.holder.scale.set(1,.15+.85*Pe,1)}le.sparkT>0?(le.sparkT-=A,le.spark.material.opacity=Math.max(0,le.sparkT/.25),le.spark.scale.setScalar(.4+(1-le.sparkT/.25)*1.6)):le.spark.material.opacity=0}p.opacity+=((Q.ward?.75:0)-p.opacity)*Math.min(1,A*14),p.map.offset.y=ye*.15,p.color.set(Q.parryFlash>0?"#ffffff":s.accent),g.material.opacity=0,te>0&&(te-=A);for(let le of y)te>0&&le.drawn&&le.w.drawOn!=="cast"&&le.w.trail!==!1&&(le.holder.updateWorldMatrix(!0,!1),le.trail.add(le.holder.localToWorld(he.copy(le.baseL)),le.holder.localToWorld(fe.copy(le.tipL)))),le.trail.update(A);f.material.opacity=(Q.air?.15:.35)+Math.sin(ye*3)*.1+Q.charge*.25,f.scale.setScalar(1+Q.charge*.35),m.scale.setScalar(.5+Q.charge*.9+(Q.firing?.2:0));for(let le of v){let Pe=Q.firing||Q.charge>.05?1:0;le.ringMat.emissiveIntensity+=(.6+Pe*2.4+Q.charge*2-le.ringMat.emissiveIntensity)*Math.min(1,A*12),le.glow.scale.setScalar(.3+Pe*.35+Q.charge*.6)}d.intensity=5+Q.charge*4,ce>0&&(ce-=A,ts(c,Math.max(0,ce/.2),"#ff2b2b"),ce<=0&&ts(c,0))}return{group:o,update:Ae,dispose(){i.remove(o);for(let A of y)A.trail.dispose()},setWeaponColor(A){m.material.color.set(A)},playBlade(A,ye=2.3,Q=!0,ze=null){if(Q&&B("melee"),ze)for(let Pe of y)Pe.w.trail!==!1&&Pe.trail.style(ze.col,ze.trailLife||.2);let le=u.oneShot(r.blade[A%r.blade.length],ye);return te=Math.min(.55,le),le},playOnce(A,ye=1){return/Melee/.test(A)?(B("melee"),te=.5):/Spellcast/.test(A)&&B("cast"),u.oneShot(A,ye)},hurtFlash(){ce=.2,u.busy||u.oneShot("Hit_A",1.8)},castPoint(A=new O){return I.length===2?(I[0].wr.getWorldPosition(A),I[1].wr.getWorldPosition(dl),A.add(dl).multiplyScalar(.5)):x?x.getWorldPosition(A):A.set(o.position.x,1.2,o.position.z)},firesFromHands:I.length===2,firesFromGun:!!r.gun,get flipAngle(){return a.rotation.x},muzzlePoint(A=new O){let ye=K();return ye?(ye.drawn||B("gun"),ye.holder.updateWorldMatrix(!0,!1),ye.holder.localToWorld(A.copy(ae.set(0,ye.w.length*(1-ye.w.grip),0)))):A.set(o.position.x,1.2,o.position.z)},brace(){F=.18},bladeSegment(A={hilt:new O,tip:new O}){let ye=y.find(Q=>Q.drawn&&Q.w.drawOn==="melee"&&Q.w.trail!==!1);return ye?(ye.holder.updateWorldMatrix(!0,!1),ye.holder.localToWorld(A.hilt.set(0,0,0)),ye.holder.localToWorld(A.tip.copy(ye.tipL)),A):null},get swinging(){return te>0},cancelSwing(){te=0},get shotName(){return u.shotName},get bladeDrawn(){return y.some(A=>A.drawn)},radius:.5,isModel:!0}}function i0(i,e){let t=i&&i.foes[e];if(!t)return null;let n=new Be;if(n.add(Xn(e==="brute"?1.1:.7)),t.rig){let s=Bu(t.rig.mesh);n.add(s);let r=e0(new Es(s),t.rig);r.loop(t.spec.idle),n.userData={mats:ul(s),drv:r,spec:t.spec,model:!0}}else{let s=t.scene.clone(!0);n.add(s),n.userData={mats:ul(s),spec:t.spec,model:!0,body:s}}return n}function s0(i,e,t){let n=i&&i.bosses[e.key];if(!n)return null;e.mesh.traverse(r=>{r.isMesh&&(r.material.isMeshStandardMaterial||r.geometry&&r.geometry.type==="SphereGeometry")&&(r.visible=!1)});let s=n.clone(!0);return(t||e.mesh).add(s),{inst:s,mats:ul(s)}}var ns={root:"#ff2b2b",sacral:"#ff8a2b",solar:"#ffd23c",heart:"#3ce08f",throat:"#3cb8ff",third:"#6b5bff",crown:"#b56cff"},r0=["root","sacral","solar","heart","throat","third","crown"],Or={max:100,step:25,kill:8,parry:12,bladeHit:3,trickle:2.5},o0="MAX MELANIN MAGIC BLAST",iE={melvinci:[{id:"quake",name:"ROOT QUAKE",chakra:"root"},{id:"beam",name:"SOLAR MELANIN BEAM",chakra:"solar"},{id:"blink",name:"THIRD-EYE STEP",chakra:"third"},{id:"nova",name:"CROWN NOVA",chakra:"crown",ult:!0}],kimaya:[{id:"storm",name:"CHAKRAM STORM",chakra:"throat"},{id:"sonic",name:"SACRAL SONIC",chakra:"sacral"},{id:"lotus",name:"HEART LOTUS",chakra:"heart"},{id:"starfall",name:"ANCESTRAL STARFALL",chakra:"crown",ult:!0}],bizzle:[{id:"quake",name:"RALLY STRIPE SLAM",chakra:"root"},{id:"beam",name:"JADE CORE PULSE",chakra:"heart",color:"#2ee6a8"},{id:"blink",name:"BLACK BUMBLE BEE BLITZ",chakra:"solar"},{id:"nova",name:"DESTROYER OF INJUSTICES",chakra:"root",ult:!0,cols:["#ff2b2b","#2ee6a8","#ffd23c","#ffffff"]}],mahal:[{id:"sonic",name:"THE POWER OF BREATH",chakra:"throat"},{id:"storm",name:"MEDIC DRONE SWARM",chakra:"crown",model:null},{id:"lotus",name:"MAJESTIC HEAL",chakra:"heart"},{id:"starfall",name:"COSMIC HEALING RAIN",chakra:"crown",ult:!0,cols:["#fff6c8","#b56cff","#e8c25a","#3ce08f"]}]};function ml(i){return Math.max(0,Math.min(4,Math.floor(i/Or.step+1e-9)))}function sE(i){let e=ml(i);return{level:e,meter:e?i-e*Or.step:i}}function rE(i,e,t=1){return Math.min(Or.max,i+(Or[e]||0)*t)}var a0=i=>i>=4?"MAX":i?"LV"+i:"\u2014";function l0(i,e,t){let n=iE[t],s=[],r=0,o=0,a=-1,l=oE(),c=(_,v,y)=>e.foes.list.filter(S=>S.alive&&Math.hypot(S.x-_,S.z-v)<y+S.r&&Math.abs(S.y-(e.H.y||0))<3.4);function h(_,v,y,S,E=10,w=0){let I=0;for(let M of c(_,v,y)){let L=M.x-_,k=M.z-v,F=Math.hypot(L,k)||1;w&&(M.stunT=Math.max(M.stunT||0,w)),e.foes.damage(M,S,!0,L/F,k/F,E),I++}let b=e.boss;return b&&b.alive&&b.awake&&Math.hypot(b.x-_,b.z-v)<y+b.r&&(b.damage(b.hit({x:_,z:v,y:1})?S*1.2:S*.5,!0),I++),I}let u=_=>ns[_],d=_=>_.color||ns[_.chakra],f=(_,v)=>{e.hero.playOnce&&e.hero.playOnce(_,v)};function x(_,v,y){e.fx.ring(_,v,y,3,.35),e.fx.spawn(_,1,v,y,18,{spd:5,up:3,size:.55}),h(_,v,2.6,3,10)}let m={quake(_,v){f("2H_Melee_Attack_Chop",2.2),s.push({t:.22,run:()=>{let y=d(v);e.fx.ring(_.x,_.z,y,6.5,.55),e.fx.ring(_.x,_.z,"#ffffff",3.5,.3),e.fx.spawn(_.x,.3,_.z,y,40,{spd:9,up:5,size:.6});for(let S=0;S<10;S++){let E=S/10*Math.PI*2;e.fx.spawn(_.x+Math.cos(E)*3,.2,_.z+Math.sin(E)*3,"#8a5a3a",4,{spd:3,up:6,size:.5})}h(_.x,_.z,5.5,4,18),e.shake(10),e.audio.sfx.slam()}})},beam(_,v){f("Spellcast_Long",1.1);let y=d(v),S=17,E=new ge(new vt(.16,.16,S,10,1,!0),new We({color:"#fff6c8",transparent:!0,opacity:.95,blending:ht,depthWrite:!1})),w=new ge(new vt(.55,.55,S,14,1,!0),new We({color:y,transparent:!0,opacity:.45,blending:ht,depthWrite:!1})),I=new Be;E.position.y=S/2,w.position.y=S/2,I.add(E,w),I.rotation.x=Math.PI/2;let b=new Be;b.add(I),i.add(b);let M=bt(y,2.2,.9);i.add(M);let L=0;e.audio.sfx.beamFire(),s.push({t:1.25,every:k=>{if(b.position.set(_.x+_.fx*.6,_.y+1.25,_.z+_.fz*.6),b.rotation.y=Math.atan2(_.fx,_.fz),M.position.copy(b.position),w.scale.x=w.scale.z=.85+Math.random()*.3,L-=k,L<=0){L=.08;for(let F=1;F<S;F+=1.2){let H=b.position.x+_.fx*F,T=b.position.z+_.fz*F;if(e.level.solidCell(Math.floor(H/2),Math.floor(T/2),_.y+.8))break;h(H,T,.9,.9,3)}e.fx.spawn(b.position.x+_.fx*(2+Math.random()*10),_.y+1.25,b.position.z+_.fz*(2+Math.random()*10),y,3,{spd:2,up:1.5,size:.45}),e.shake(2)}},run:()=>{i.remove(b),i.remove(M)}})},blink(_,v){let y=d(v);x(_.x,_.z,y);let S=_.x,E=_.z;for(let w=0;w<14;w++){let I=Rr(e.level,S,E,Mn,_.fx*.5,_.fz*.5,_.y);if(I.hit)break;S=I.x,E=I.z}_.x=S,_.z=E,_.invuln=Math.max(_.invuln,.45),f("Dodge_Forward",3),s.push({t:.12,run:()=>x(_.x,_.z,y)}),e.audio.sfx.dash()},storm(_,v){let y=d(v);f("Spellcast_Raise",1.8);let S=v.model===void 0?"kimaya_chakram":v.model,E=[0,1,2].map(()=>{let b=S&&e.assets&&e.assets.weapons[S],M=new Be;if(b){let L=b.clone(!0),k=new qt().setFromObject(L),F=k.getSize(new O),H=.9/Math.max(F.x,F.y,F.z);L.scale.setScalar(H),L.position.copy(k.getCenter(new O).multiplyScalar(-H)),M.add(L)}return M.add(bt(y,1.8,.7)),i.add(M),M}),w=0,I=0;s.push({t:3.4,every:b=>{I+=b*7,w-=b,E.forEach((M,L)=>{let k=I+L*Math.PI*2/3,F=2.7;if(M.position.set(_.x+Math.cos(k)*F,_.y+1.1,_.z+Math.sin(k)*F),M.rotation.y+=b*20,w<=0){h(M.position.x,M.position.z,.9,1.3,6);for(let H of e.combat.ebullets)H.alive&&Math.hypot(H.x-M.position.x,H.z-M.position.z)<1&&(H.alive=!1,H.mesh.visible=!1)}Math.random()<b*20&&e.fx.spawn(M.position.x,1.1,M.position.z,y,1,{spd:1,up:.5,size:.4,life:.3})}),w<=0&&(w=.18)},run:()=>E.forEach(b=>i.remove(b))}),e.audio.sfx.charged()},lotus(_,v){let y=d(v);f("Spellcast_Raise",1.4),_.lives<Qa?(_.lives++,e.hud.flash(`${v.name} \u2014 A LIFE RESTORED`,y)):e.hud.flash(v.name,y),_.shield=$i,_.wardBroken=0,_.invuln=Math.max(_.invuln,1);for(let S=0;S<3;S++)e.fx.ring(_.x,_.z,S?"#ffffff":y,3+S*1.5,.5+S*.15);for(let S=0;S<8;S++){let E=S/8*Math.PI*2;e.fx.spawn(_.x+Math.cos(E)*1.2,.2,_.z+Math.sin(E)*1.2,y,6,{spd:1,up:7,size:.55,grav:2})}h(_.x,_.z,4,3,14),e.audio.sfx.page()},sonic(_,v){let y=d(v);f("Spellcast_Shoot",2);let S=.62,E=9;for(let I=1;I<=E;I+=1.5)for(let b=-2;b<=2;b++){let M=Math.atan2(_.fz,_.fx)+b*S/2;e.fx.spawn(_.x+Math.cos(M)*I,1,_.z+Math.sin(M)*I,y,2,{spd:2,up:1,size:.5,life:.4})}for(let I of e.foes.list){if(!I.alive)continue;let b=I.x-_.x,M=I.z-_.z,L=Math.hypot(b,M);L>E||L<.01||(b*_.fx+M*_.fz)/L>Math.cos(S)&&(I.stunT=2.2,e.foes.damage(I,3,!0,b/L,M/L,16))}let w=e.boss;if(w&&w.alive&&w.awake){let I=w.x-_.x,b=w.z-_.z,M=Math.hypot(I,b)||1;M<E+w.r&&(I*_.fx+b*_.fz)/M>Math.cos(S)&&(w.damage(4,!0),w.stun=Math.max(w.stun||0,.8))}e.fx.ring(_.x+_.fx*2,_.z+_.fz*2,y,5,.4),e.shake(6),e.audio.sfx.beamTell()},nova(_,v){g(_,"Spellcast_Raise",v.cols||r0.map(y=>ns[y]),10,12,v.name,!1)},starfall(_,v){g(_,"Spellcast_Long",v.cols||["#fff6c8",ns.crown,ns.throat,"#ffd76a"],7,9,v.name,!0)}};function g(_,v,y,S,E,w,I){f(v,.9),e.hud.flash(`${o0} \xB7 ${w}`,y[y.length-1]),e.hud.screenFlash&&e.hud.screenFlash(y[0]),e.shake(12),e.audio.sfx.bossWake(),_.invuln=Math.max(_.invuln,1.6);let b=[],M=e.boss;M&&M.alive&&M.awake&&Math.hypot(M.x-_.x,M.z-_.z)<22&&b.push({boss:M});for(let k of e.foes.list.filter(F=>F.alive).sort((F,H)=>Math.hypot(F.x-_.x,F.z-_.z)-Math.hypot(H.x-_.x,H.z-_.z)).slice(0,12))Math.hypot(k.x-_.x,k.z-_.z)<18&&b.push({e:k});let L=Math.max(7,b.length);for(let k=0;k<L;k++){let F=y[k%y.length],H=bt(F,1.6,1);H.add(bt("#ffffff",.4,1)),i.add(H);let T=b.length?b[k%b.length]:null,C=k/L*Math.PI*2,V=.5+k*(I?.1:.05),z=0;s.push({t:V+.55,every:D=>{z+=D;let B=T?T.boss?T.boss.x:T.e.x:_.x+Math.cos(C)*7,J=T?T.boss?T.boss.z:T.e.z:_.z+Math.sin(C)*7;if(z<V)I?H.position.set(B+Math.sin(z*9+k)*.3,16,J):H.position.set(_.x+Math.cos(C+z*3)*1.6,2.2+z,_.z+Math.sin(C+z*3)*1.6);else{let ce=Math.min(1,(z-V)/.5),ue=I?B:_.x+Math.cos(C)*1.6,q=I?16:2.2+V,ee=I?J:_.z+Math.sin(C)*1.6;H.position.set(ue+(B-ue)*ce,q+(.8-q)*ce*ce,ee+(J-ee)*ce)}Math.random()<D*30&&e.fx.spawn(H.position.x,H.position.y,H.position.z,F,1,{spd:.5,up:0,size:.5,life:.35,grav:0})},run:()=>{i.remove(H);let D=H.position.x,B=H.position.z;e.fx.ring(D,B,F,4,.45),e.fx.spawn(D,.8,B,F,24,{spd:7,up:5,size:.6}),T&&T.boss&&T.boss.alive&&T.boss.damage(E,!0),h(D,B,2.4,S,16),e.shake(5),e.audio.sfx.crate()}})}}function p(_,v,y){if(o=Math.max(0,o-_),v.alive&&(r=Math.min(Or.max,r+Or.trickle*_)),y("magic")&&v.alive&&o<=0){let{level:E,meter:w}=sE(r);if(!E)e.audio.beep(160,.08,"square",.06);else{let I=n[E-1];r=w,o=.45,I.ult||e.hud.flash(`${a0(E)} \xB7 ${I.name}`,d(I)),m[I.id](v,I)}}for(let E=s.length-1;E>=0;E--){let w=s[E];w.t-=_,w.every&&w.every(_),w.t<=0&&(s.splice(E,1),w.run&&w.run())}let S=ml(r);S>a&&a>=0&&e.audio.beep(520+S*140,.1,"sine",.05,900+S*180),a=S,aE(l,n,r)}return{update:p,addMeter(_,v=1){r=rE(r,_,v)},get meter(){return r},set meter(_){r=_},get level(){return ml(r)},kit:n,dispose(){for(let _ of s)_.run&&_.run();s.length=0,l.root.remove()}}}function oE(){let i=document.createElement("div");i.className="magicbar";let e=document.createElement("b");e.className="mlv";let t=document.createElement("div");t.className="mtrack";let n=document.createElement("i");t.append(n);for(let r=1;r<4;r++){let o=document.createElement("u");o.style.left=r*25+"%",t.append(o)}let s=document.createElement("small");return s.className="mname",i.append(e,t,s),(document.getElementById("hud")||document.body).appendChild(i),n.style.background=`linear-gradient(90deg, ${r0.map(r=>ns[r]).join(",")})`,{root:i,badge:e,fill:n,name:s,btn:document.getElementById("tMagic"),last:""}}function aE(i,e,t){let n=ml(t),s=n?e[n-1]:null,r=Math.round(t);i.fill.style.width=r+"%";let o=n+"|"+r;o!==i.last&&(i.last=o,i.root.classList.toggle("max",n>=4),i.root.style.setProperty("--c",s?ns[s.chakra]:"#8a7fa8"),i.badge.textContent=a0(n),i.name.textContent=n>=4?`${o0} \xB7 F`:s?`${s.name} \xB7 F`:"MAGIC CHARGING",i.btn&&(i.btn.style.setProperty("--pct",r*3.6+"deg"),i.btn.style.setProperty("--c",s?ns[s.chakra]:"#8a7fa8"),i.btn.classList.toggle("max",n>=4),i.btn.classList.toggle("ready",n>0),i.btn.dataset.lv=n>=4?"MAX":n?"LV"+n:""))}var h0=[{id:"01",file:"01_i_refuse.mp3",title:"I Refuse"},{id:"02",file:"02_world_wide_wake_up.mp3",title:"World Wide Wake Up"},{id:"03",file:"03_it_is_what_it_is.mp3",title:"It Is What It Is"},{id:"04",file:"04_they_don_t.mp3",title:"They Don't"},{id:"05",file:"05_scfl_10_2.mp3",title:"SCFL 10-2"},{id:"06",file:"06_supa_groovy_plugged_in.mp3",title:"Supa Groovy Plugged In"},{id:"07",file:"07_soulful_plugged_in.mp3",title:"Soulful Plugged In"},{id:"08",file:"08_i_am_affirmation.mp3",title:"I Am Affirmation"},{id:"09",file:"09_the_lion_rises.mp3",title:"The Lion Rises"},{id:"10",file:"10_battle_of_kirina.mp3",title:"Battle of Kirina"},{id:"11",file:"11_nine_witches_of_mali.mp3",title:"Nine Witches of Mali"},{id:"12",file:"12_buffalo_woman_rising.mp3",title:"Buffalo Woman Rising"},{id:"13",file:"13_crippled_prince.mp3",title:"Crippled Prince"},{id:"14",file:"14_nana_triban.mp3",title:"Nana Triban"},{id:"15",file:"15_kurukan_fuga.mp3",title:"Kurukan Fuga"},{id:"16",file:"16_light_as_a_feather.mp3",title:"Light as a Feather"},{id:"17",file:"17_truth_is_the_feather.mp3",title:"Truth Is the Feather"},{id:"18",file:"18_kind_hands.mp3",title:"Kind Hands"},{id:"19",file:"19_my_heart_at_home.mp3",title:"My Heart at Home"},{id:"20",file:"20_balance_of_maat.mp3",title:"Balance of Maat"}],c0={menu:["02"],ramparts:["01","05","04","03","06"],venus:["06","07","08","16","17","18"],archive:["09","11","12","13","14","15"],boss:["10"],win:["19","20"]},u0=new Set(["menu","boss"]),lE="https://quantummelaninmedia.com/assets/audio/";function cE(i){let e=c0[i]||c0.menu;return u0.has(i)?e.slice():[...e,...h0.map(t=>t.id).filter(t=>!e.includes(t))]}function d0({base:i="./assets/music/",volume:e=.55}={}){let t=new Audio;t.preload="auto";let n=[],s=0,r=null,o=!1,a=!1,l=!1,c=null,h=!1,u=document.createElement("div");u.id="nowPlaying",u.className="hidden";let d=document.createElement("b");d.textContent="\u266A";let f=document.createElement("span"),x=document.createElement("small");x.textContent="N skip \xB7 M music on/off",u.append(d,f,x),document.body.appendChild(u);let m=v=>h0.find(y=>y.id===v),g=()=>o?0:a?e*.35:e;function p(v,y,S){clearInterval(c);let E=t.volume,w=performance.now();c=setInterval(()=>{let b=Math.min(1,(performance.now()-w)/y);t.volume=Math.max(0,Math.min(1,E+(v-E)*b)),b>=1&&(clearInterval(c),S&&S())},30)}function _(v){s=(v+n.length)%n.length;let y=m(n[s]);if(!y)return;t.src=(h?lE:i)+y.file,t.volume=0,f.textContent=y.title.toUpperCase(),u.classList.remove("hidden"),u.classList.remove("flash"),u.offsetWidth,u.classList.add("flash");let S=t.play();S&&S.catch&&S.catch(()=>{}),p(g(),900)}return t.addEventListener("ended",()=>{u0.has(r)&&n.length===1?(t.currentTime=0,t.play().catch(()=>{})):_(s+1)}),t.addEventListener("error",()=>{h||(h=!0,_(s))}),{play(v){l=!0,v!==r&&(r=v,n=cE(v),t.src&&!t.paused?p(0,500,()=>_(0)):_(0))},next(){l&&n.length&&p(0,300,()=>_(s+1))},setMuted(v){o=v,p(g(),200)},setVolume(v){e=Math.max(0,Math.min(1,v)),p(g(),120)},duck(v){a=v,p(g(),300)},get moment(){return r},get title(){let v=m(n[s]);return v?v.title:""},get usingRemote(){return h},el:t}}var hE=()=>new Ye({color:"#1b1b24",roughness:.55,metalness:.35}),uE=()=>new Ye({color:re.char,emissive:re.char,emissiveIntensity:.9}),Wu=()=>new We({color:re.hotred});function pn(i,e,t,n){return new ge(new Ct(i,e,t),n)}function dE(i){let e=new Be,t=hE(),n=uE(),s=[t,n];if(e.add(Xn(.55)),i==="grunt"){let r=pn(.7,.8,.5,t);r.position.y=.95,e.add(r);let o=pn(.5,.06,.04,n);o.position.set(0,1.05,.27),e.add(o);let a=pn(.44,.36,.4,t);a.position.y=1.55,e.add(a);let l=pn(.34,.07,.04,Wu());l.position.set(0,1.56,.21),e.add(l);for(let c of[-1,1]){let h=pn(.18,.62,.18,t);h.position.set(c*.5,.95,.1),h.rotation.x=-.5,e.add(h);let u=pn(.26,.2,.3,n);u.position.set(c*.5,.62,.35),e.add(u);let d=pn(.22,.5,.26,t);d.position.set(c*.18,.28,0),e.add(d)}}else if(i==="shooter"){let r=pn(.56,1,.44,t);r.position.y=1.05,e.add(r);let o=pn(.5,.6,.24,t);o.position.set(0,1.2,-.3),e.add(o);let a=pn(.08,.5,.08,n);a.position.set(0,1.2,-.44),e.add(a);let l=pn(.36,.34,.36,t);l.position.y=1.72,e.add(l);let c=new ge(new vt(.11,.13,.16,10),Wu());c.rotation.x=Math.PI/2,c.position.set(0,1.72,.22),e.add(c);let h=pn(.14,.14,.8,t);h.position.set(.32,1.15,.35),e.add(h);let u=pn(.1,.1,.1,n);u.position.set(.32,1.15,.78),e.add(u);for(let d of[-1,1]){let f=pn(.18,.55,.22,t);f.position.set(d*.15,.28,0),e.add(f)}}else{let r=new ge(new vt(.46,.4,.18,14),t);e.add(r);let o=new ge(new Qn(.5,.05,6,18),n);o.rotation.x=Math.PI/2,e.add(o);let a=new ge(new tn(.1,8,6),Wu());a.position.set(0,.02,.44),e.add(a);let l=bt(re.cyan,.9,.7);l.position.y=-.2,e.add(l),e.userData.disc=r}return e.userData.mats=s,e}function f0(i,e){let t=[],n=[];function s(d,f,x){let m=Mp[d],g=i0(e.assets,d)||dE(d);i.add(g);let p={type:d,x:f,z:x,y:d==="flyer"?m.hover:0,hp:m.hp,max:m.hp,r:m.r,cfg:m,alive:!0,aggro:!1,mesh:g,vx:0,vz:0,kx:0,kz:0,knock:0,shootT:1+Math.random()*(m.shootCd||1),diveT:2+Math.random()*2,dive:0,dx:0,dz:0,anim:Math.random()*6,hurtT:0,fx:0,fz:1,orbit:Math.random()*6.28,strafe:Math.random()<.5?1:-1};return t.push(p),p}function r(d,f,x,m=0,g=0,p=6,_=null){if(!d.alive)return;f*=e.comboHit?e.comboHit():1,d.cfg.armor&&!(d.brokenT>0)&&(d.chain=e.t-(d.lastHitT??-9)<lp?(d.chain||0)+1:1,d.lastHitT=e.t,d.chain>=d.cfg.guard?(d.brokenT=cp,d.stunT=Math.max(d.stunT||0,1.2),d.chain=0,e.hud.flash("GUARD BREAK","#ffd76a"),e.fx.ring(d.x,d.z,"#ffd76a",2.6,.35),e.fx.spawn(d.x,d.y+1.4,d.z,"#ffd76a",16,{spd:5,up:3,size:.45}),e.audio.sfx.shatter(),e.hitstop(.08)):(f*=1-d.cfg.armor,e.fx.spawn(d.x,d.y+1.2,d.z,"#c8c8d8",3,{spd:3,up:1.5,size:.3,life:.25}))),d.hp-=f,d.hurtT=_?_.flash:.12,d.kx=m,d.kz=g,d.knock=p;let v=d.cfg.armor&&!(d.brokenT>0);if(_&&_.stagger>0&&!v&&d.hp>0){d.staggerT=Math.max(d.staggerT||0,_.stagger),d.type==="flyer"&&(d.dive=0);let y=d.mesh.userData;y.drv&&_.stagger>=.25&&y.drv.oneShot("Hit_A",1.7)}d.hp<=0?o(d,x):e.audio.sfx.foeHit()}function o(d,f){d.alive=!1;let x=d.mesh.userData;x.drv?(x.drv.oneShot("Death_A",1.5,!0),n.push({e:d,t:1.6})):i.remove(d.mesh),e.fx.spawn(d.x,d.y+.9,d.z,re.char,14,{spd:5,up:4}),e.fx.spawn(d.x,d.y+.9,d.z,"#ffffff",5,{spd:3,size:.35}),e.fx.ring(d.x,d.z,re.char,2.2,.35),e.audio.sfx.foeDie(),e.onKill(d,f)}function a(d){l(d);let f=e.H,x=e.level;for(let m of t){if(!m.alive)continue;m.anim+=d,m.brokenT>0&&(m.brokenT-=d);let g=f.x-m.x,p=f.z-m.z,_=Math.hypot(g,p)||.001,v=g/_,y=p/_;!m.aggro&&_<m.cfg.aggro&&f.alive&&(m.aggro=!0);let S=0,E=0;if(m.stunT>0)m.stunT-=d,Math.random()<d*12&&e.fx.spawn(m.x,m.y+2.1,m.z,"#ffd76a",1,{spd:1.5,up:.5,size:.35,life:.4,grav:0});else if(m.staggerT>0)m.staggerT-=d;else if(m.aggro&&f.alive)if(m.type==="grunt"||m.type==="brute")_>m.r+f.r+.05&&(S=v,E=y);else if(m.type==="shooter")_>m.cfg.keep+1.5?(S=v,E=y):_<m.cfg.keep-1.5&&(S=-v,E=-y),S+=-y*m.strafe*.5,E+=v*m.strafe*.5,m.shootT-=d,m.shootT<=0&&(m.shootT=m.cfg.shootCd*(.85+Math.random()*.3),ws(x,m.x,m.z,f.x,f.z,(f.y+1.1)*.5)||(e.combat.spawnEBullet({x:m.x+v*.6,y:1.15,z:m.z+y*.6,vx:v*m.cfg.bspd,vz:y*m.cfg.bspd,vy:(f.y+1.1-1.15)/_*m.cfg.bspd,kind:"red"}),e.fx.spawn(m.x+v*.8,1.15,m.z+y*.8,re.hotred,4,{spd:2,up:1,size:.3}),e.audio.beep(520,.08,"square",.08,200)));else if(m.orbit+=d*.9*m.strafe,m.dive===0){let C=f.x+Math.cos(m.orbit)*5,V=f.z+Math.sin(m.orbit)*5,z=C-m.x,D=V-m.z,B=Math.hypot(z,D)||1;S=z/B*Math.min(1,B/2),E=D/B*Math.min(1,B/2),m.y+=(m.cfg.hover+Math.sin(m.anim*3)*.3-m.y)*Math.min(1,d*4),m.diveT-=d,m.diveT<=0&&(m.dive=1,m.diveT=.35,m.dx=v,m.dz=y)}else m.dive===1?(m.diveT-=d,m.y+=(m.cfg.hover+.7-m.y)*d*6,m.diveT<=0&&(m.dive=2,m.diveT=.55,m.dx=v,m.dz=y,e.audio.beep(900,.2,"sawtooth",.1,200))):(m.diveT-=d,S=m.dx*2.4,E=m.dz*2.4,m.y+=(f.y+.9-m.y)*d*10,m.diveT<=0&&(m.dive=0,m.diveT=m.cfg.diveCd));else m.type==="flyer"&&(m.y=m.cfg.hover+Math.sin(m.anim*2)*.25);for(let C of t){if(C===m||!C.alive||C.type==="flyer"!=(m.type==="flyer"))continue;let V=m.x-C.x,z=m.z-C.z,D=Math.hypot(V,z);D<1.2&&D>.001&&(S+=V/D*(1.2-D)*1.5,E+=z/D*(1.2-D)*1.5)}let w=m.cfg.spd*(e.slowMul||1),I=S*w+m.kx*m.knock,b=E*w+m.kz*m.knock;m.knock=Math.max(0,m.knock-d*26);let M=Rr(x,m.x,m.z,m.r,I*d,b*d,m.type==="flyer"?9:0);if(m.x=M.x,m.z=M.z,Math.abs(S)+Math.abs(E)>.05||m.aggro){let C=m.aggro?v:S,V=m.aggro?y:E;m.fx+=(C-m.fx)*Math.min(1,d*8),m.fz+=(V-m.fz)*Math.min(1,d*8)}let L=m.r+f.r+(m.type==="flyer"?.1:.05);f.alive&&!(m.staggerT>0)&&_<L&&(m.type==="flyer"?Math.abs(m.y-(f.y+1))<1.3:f.y<.8)&&(e.wardBlocks(m.x,m.z)?(e.wardAbsorb(12,m.x,m.z),m.kx=-v,m.kz=-y,m.knock=10):e.hurt("contact",m.x,m.z)&&(m.kx=-v,m.kz=-y,m.knock=8));let k=m.mesh;k.position.set(m.x,m.y,m.z),k.rotation.y=Math.atan2(m.fx,m.fz);let F=m.type==="flyer"?0:Math.abs(Math.sin(m.anim*8))*.08*(Math.abs(S)+Math.abs(E)>.05?1:0);k.position.y=m.y+F;let H=k.userData,T=Math.abs(S)+Math.abs(E)>.05;if(H.model)H.drv&&(H.drv.loop(T?H.spec.move:H.spec.idle,null,m.type==="brute"?.8:1),H.drv.update(d),k.position.y=m.y),m.type==="flyer"&&(k.rotation.x=m.dive===2?.5:Math.sin(m.anim*2)*.12,k.rotation.z=Math.sin(m.anim*3)*.1),m.hurtT>0&&(m.hurtT-=d,ts(H.mats,1),m.hurtT<=0&&ts(H.mats,0));else if(m.type==="flyer"&&(H.disc.rotation.y+=d*6,k.rotation.x=m.dive===2?.6:Math.sin(m.anim*2)*.1),m.hurtT>0){m.hurtT-=d;for(let C of H.mats)C.emissive.set("#ffffff"),C.emissiveIntensity=1.5}else H.mats[0].emissiveIntensity=0,H.mats[1].emissive.set(re.char),H.mats[1].emissiveIntensity=.9+Math.sin(m.anim*5)*.3}}function l(d){for(let f=n.length-1;f>=0;f--){let x=n[f];x.t-=d,x.e.mesh.userData.drv.update(d),x.t<.6&&(x.e.mesh.position.y-=d*1.4),x.t<=0&&(i.remove(x.e.mesh),n.splice(f,1))}}function c(){for(let d of t)i.remove(d.mesh);t.length=0,n.length=0}function h(d){return t.filter(f=>f.alive&&(!d||f.type===d)).length}function u(d,f,x){let m=null,g=1/0,p=Math.cos(f);for(let _ of t){if(!_.alive)continue;let v=_.x-d.x,y=_.z-d.z,S=Math.hypot(v,y);S>x||S>=g||f<Math.PI&&S>.001&&(v*d.fx+y*d.fz)/S<p||(m=_,g=S)}return m?{foe:m,d:g}:null}return{list:t,spawn:s,update:a,damage:r,clear:c,aliveCount:h,nearestInArc:u}}var fE=160,pE=200,p0=i=>i.y+(i.type==="flyer"?0:i.type==="brute"?1.4:1),mE={red:{col:re.hotred,size:.2},ember:{col:re.orange,size:.24},pulse:{col:re.pink,size:.22},ink:{col:re.violet,size:.34}};function m0(i,e){let t=new ge(new tn(i,8,6),new We({color:"#ffffff"})),n=bt(e,i*6,.85);return t.add(n),t.userData.glow=n,t.visible=!1,t}function g0(i,e){let t=[],n=[],s=[],r=[],o=[],a=[];for(let T=0;T<fE;T++){let C=m0(.15,re.gold);i.add(C),t.push({alive:!1,mesh:C})}for(let T=0;T<pE;T++){let C=m0(.2,re.hotred);i.add(C),n.push({alive:!1,mesh:C})}let l=new ln(.86,1,56),c=new Ia(1,24),h=1.05;function u(T,C,V,z,D,B={}){let J=t.find(ue=>!ue.alive);if(!J)return null;let ce=Mt[D];return Object.assign(J,{alive:!0,x:T,y:B.y??h,z:C,vx:V*ce.spd*(B.spdMul||1),vz:z*ce.spd*(B.spdMul||1),life:B.life||ce.life||2.2,dmg:B.dmg||ce.dmg,pierce:B.pierce||!!ce.pierce,size:B.size||ce.size,kind:D,hit:new Set,reflected:!!B.reflected}),J.mesh.visible=!0,J.mesh.scale.setScalar(J.size/.15),J.mesh.userData.glow.material.color.set(B.col||ce.col),J.mesh.position.set(T,J.y,C),J.mesh.lookAt(T+V,J.y,C+z),J.mesh.scale.z*=D==="beam"?4:D==="rapid"?2.2:1.4,J}let d=new O;function f(T,C,V,z){h=(T.y||0)+1.05;let D=T.x+T.fx*.9,B=T.z+T.fz*.9;if(e.hero&&e.hero.firesFromHands){e.hero.brace();let te=e.hero.castPoint(d);D=te.x+T.fx*.25,B=te.z+T.fz*.25,h=te.y}else if(e.hero&&e.hero.firesFromGun){let te=e.hero.muzzlePoint(d);D=te.x+T.fx*.1,B=te.z+T.fz*.1,h=te.y}let J=T.fx,ce=T.fz,ue=1+(V-1)*.35,q=Mt[C].size*(1+(V-1)*.18),ee=(te,K,de)=>[te*Math.cos(de)-K*Math.sin(de),te*Math.sin(de)+K*Math.cos(de)];if(z)if(C==="single")u(D,B,J,ce,C,{dmg:6*ue,size:q*2.4,pierce:!0,col:"#ffffff"});else if(C==="scatter")for(let te=0;te<14;te++){let K=te/14*Math.PI*2;u(T.x+Math.cos(K)*.8,T.z+Math.sin(K)*.8,Math.cos(K),Math.sin(K),C,{dmg:1.5*ue,size:q*1.3})}else if(C==="rapid")for(let te=0;te<9;te++){let[K,de]=ee(J,ce,(te-4)*.16);u(D,B,K,de,C,{dmg:.9*ue,size:q*1.4,spdMul:.9+te*.03})}else if(C==="beam")for(let te=0;te<5;te++){let[K,de]=ee(J,ce,(te-2)*.28);u(D,B,K,de,C,{dmg:2.2*ue,size:q*1.5,pierce:!0,col:"#ffffff"})}else for(let te=0;te<12;te++){let K=te/12*Math.PI*2;u(T.x+Math.cos(K)*.9,T.z+Math.sin(K)*.9,Math.cos(K),Math.sin(K),C,{dmg:1.2*ue,size:q*1.6,life:.7})}else if(C==="single")u(D,B,J,ce,C,{dmg:Mt.single.dmg*ue,size:q});else if(C==="scatter"){let te=3+Math.min(2,V-1);for(let K=0;K<te;K++){let[de,ae]=ee(J,ce,(K-(te-1)/2)*.22);u(D,B,de,ae,C,{dmg:Mt.scatter.dmg*ue,size:q})}}else if(C==="rapid"){let te=(T.shotIx=(T.shotIx||0)+1)%2?1:-1;u(D-ce*.22*te,B+J*.22*te,J,ce,C,{dmg:Mt.rapid.dmg*ue,size:q})}else if(C==="beam")u(D,B,J,ce,C,{dmg:Mt.beam.dmg*ue,size:q});else for(let te=0;te<2;te++){let[K,de]=ee(J,ce,(Math.random()-.5)*.5);u(D,B,K,de,C,{dmg:Mt.flame.dmg*ue,size:q*(.8+Math.random()*.5),spdMul:.8+Math.random()*.5})}}function x(T){let C=n.find(z=>!z.alive);if(!C)return null;let V=mE[T.kind||"red"];return Object.assign(C,{alive:!0,x:T.x,y:T.y??1.1,z:T.z,vx:T.vx,vy:T.vy||0,vz:T.vz,life:T.life||bp,kind:T.kind||"red",grav:!!T.grav,size:V.size}),C.mesh.visible=!0,C.mesh.scale.setScalar(V.size/.2),C.mesh.userData.glow.material.color.set(V.col),C.mesh.position.set(C.x,C.y,C.z),C}function m(T,C,V,z=12,D=10){let B=new ge(l,new We({color:V,transparent:!0,opacity:.95,blending:ht,depthWrite:!1,side:gt}));B.rotation.x=-Math.PI/2,B.position.set(T,.12,C),i.add(B),s.push({x:T,z:C,r:.5,spd:z,maxR:D,mesh:B,col:V,passed:!1})}function g(T,C){let V=new ge(c,new We({color:"#2a0f4a",transparent:!0,opacity:.85,depthWrite:!1}));V.rotation.x=-Math.PI/2,V.position.set(T,.08,C),V.scale.setScalar(1.5),i.add(V),r.push({x:T,z:C,r:1.5,t:3.5,mesh:V})}function p(T){let C=new Be;C.position.set(T.x,0,T.z);let V=new ge(new vt(.75,.85,.3,8),new Ye({color:"#2a2030",roughness:.6}));V.position.y=.15,C.add(V);let z=new ge(new Ct(.85,.85,.85),new Ye({color:"#2D1B4E",roughness:.45,metalness:.3,emissive:re.gold,emissiveIntensity:.15}));z.position.y=.95,C.add(z);let D=new ge(new Ct(.9,.12,.9),new Ye({color:re.gold,metalness:.8,roughness:.25}));D.position.y=.95,C.add(D);let B=D.clone();B.rotation.z=Math.PI/2,C.add(B);let J=bt(re.gold,1.8,.35);J.position.y=1,C.add(J),i.add(C),o.push({x:T.x,z:T.z,kind:T.kind,hp:2,alive:!0,mesh:C,crate:z,glow:J,t:Math.random()*6})}function _(T,C,V){let z=V==="power"?re.gold:Mt[V].col,D=new Be;D.position.set(T,0,C);let B=new ge(V==="power"?new Mr(.34):new La(.3,0),new Ye({color:z,emissive:z,emissiveIntensity:1.2,metalness:.5,roughness:.2}));B.position.y=1.1,D.add(B);let J=bt(z,1.6,.6);J.position.y=1.1,D.add(J);let ce=new ge(new ln(.5,.62,24),new We({color:z,transparent:!0,opacity:.6,blending:ht,depthWrite:!1,side:gt}));ce.rotation.x=-Math.PI/2,ce.position.y=.06,D.add(ce),i.add(D),a.push({x:T,z:C,kind:V,mesh:D,core:B,t:0})}function v(T){T.alive=!1,T.mesh.visible=!1}function y(T){let C=e.H,V=e.level,z=e.boss;for(let D of t){if(!D.alive)continue;let B=D.x,J=D.z;if(D.x+=D.vx*T,D.z+=D.vz*T,D.life-=T,D.life<=0){v(D);continue}if(ws(V,B,J,D.x,D.z,D.y-.4)){e.fx.spawn(B,D.y,J,Mt[D.kind].col,4,{spd:2,up:1.5,size:.3}),v(D);continue}let ce=!1;for(let ue of e.foes.list){if(!ue.alive||D.hit.has(ue)||Math.abs(p0(ue)-D.y)>(ue.type==="brute"?1.6:1.25))continue;let q=ue.x-D.x,ee=ue.z-D.z;if(q*q+ee*ee<(ue.r+D.size)**2){D.hit.add(ue);let te=Math.hypot(D.vx,D.vz)||1;if(e.foes.damage(ue,D.dmg,D.reflected,D.vx/te,D.vz/te,D.kind==="flame"?2:5),e.fx.spawn(D.x,D.y,D.z,Mt[D.kind].col,3,{spd:2,up:1,size:.3}),!D.pierce){ce=!0;break}}}if(!ce&&z&&z.alive&&z.awake){let ue=z.x-D.x,q=z.z-D.z;ue*ue+q*q<(z.r+D.size)**2&&!D.hit.has(z)&&(D.hit.add(z),z.hit(D)?(z.damage(D.dmg,D.reflected),e.fx.spawn(D.x,D.y,D.z,Mt[D.kind].col,4,{spd:2,up:1,size:.3})):(e.fx.spawn(D.x,D.y,D.z,"#ffffff",3,{spd:2,up:1,size:.25}),e.audio.beep(200,.05,"square",.06)),D.pierce||(ce=!0))}if(!ce)for(let ue of o){if(!ue.alive)continue;let q=ue.x-D.x,ee=ue.z-D.z;if(q*q+ee*ee<.85&&(S(ue,D.dmg),!D.pierce)){ce=!0;break}}if(ce){v(D);continue}D.mesh.position.set(D.x,D.y,D.z),D.kind==="flame"&&D.mesh.scale.setScalar(D.size/.15*(1+(1-D.life/.42)*1.4))}for(let D of n){if(!D.alive)continue;let B=D.x,J=D.z;if(D.x+=D.vx*T,D.z+=D.vz*T,D.life-=T,D.grav||(D.y+=D.vy*T),D.grav&&(D.vy-=22*T,D.y+=D.vy*T,D.y<=.2)){g(D.x,D.z),e.fx.spawn(D.x,.3,D.z,re.violet,10,{spd:3,up:2}),e.audio.noise(.1,.1,200,1200),v(D);continue}if(D.life<=0||!D.grav&&ws(V,B,J,D.x,D.z,D.y-.4)){v(D);continue}if(C.alive){let ce=C.x-D.x,ue=C.z-D.z;if(ce*ce+ue*ue<(Mn+D.size)**2&&(D.grav?D.y<C.y+1.9&&D.y>C.y-.2:Math.abs(D.y-(C.y+1.1))<1)){if(e.wardBlocks(D.x,D.z)){if(e.wardAbsorb(18,D.x,D.z)==="parry"){let ee=Math.hypot(D.vx,D.vz)||1;u(D.x,D.z,-D.vx/ee,-D.vz/ee,"single",{dmg:3,size:.28,reflected:!0,col:"#ffffff",spdMul:1.1,y:D.y})}v(D);continue}if(e.hurt("shot",D.x,D.z)){v(D);continue}}}D.mesh.position.set(D.x,D.y,D.z)}for(let D=s.length-1;D>=0;D--){let B=s[D];if(B.r+=B.spd*T,B.mesh.scale.setScalar(B.r),B.mesh.material.opacity=.95*(1-B.r/B.maxR),B.r>=B.maxR){i.remove(B.mesh),B.mesh.material.dispose(),s.splice(D,1);continue}if(C.alive&&!B.passed){let J=Math.hypot(C.x-B.x,C.z-B.z);Math.abs(J-B.r)<.45+Mn&&C.y<.35&&(C.dashT>0?(B.passed=!0,e.onStyle("dash")):C.ward?(B.passed=!0,e.wardAbsorb(30,B.x,B.z)):e.hurt("wave",B.x,B.z)&&(B.passed=!0))}}for(let D=r.length-1;D>=0;D--){let B=r[D];if(B.t-=T,B.mesh.material.opacity=Math.min(.85,B.t*.6),B.t<=0){i.remove(B.mesh),B.mesh.material.dispose(),r.splice(D,1);continue}C.y<.1&&Math.hypot(C.x-B.x,C.z-B.z)<B.r&&(e.slowMul=.5)}for(let D of o)D.alive&&(D.t+=T,D.crate.rotation.y=D.t*.6,D.crate.position.y=.95+Math.sin(D.t*2)*.05,D.glow.material.opacity=.3+Math.sin(D.t*3)*.12);for(let D=a.length-1;D>=0;D--){let B=a[D];B.t+=T,B.core.rotation.y=B.t*2,B.core.rotation.x=B.t,B.core.position.y=1.1+Math.sin(B.t*3)*.12,C.alive&&Math.hypot(C.x-B.x,C.z-B.z)<1.1&&(i.remove(B.mesh),a.splice(D,1),e.onPickup(B.kind,B.x,B.z))}}function S(T,C){T.hp-=C,T.crate.material.emissiveIntensity=1.2,setTimeout(()=>{T.crate.material.emissiveIntensity=.15},80),e.audio.beep(300,.05,"square",.08,150),T.hp<=0&&(T.alive=!1,i.remove(T.mesh),e.fx.spawn(T.x,1,T.z,re.gold,18,{spd:5,up:5}),e.fx.spawn(T.x,1,T.z,"#ffffff",6,{spd:3,size:.35}),e.fx.ring(T.x,T.z,re.gold,2.5,.4),e.audio.sfx.crate(),_(T.x,T.z,T.kind),e.onCrate(T))}let E=null,w={hilt:new O,tip:new O};function I(T,C,V=1,z=1,D=0){let B=ti[T%ti.length];return E={n:T,C:B,last:T%ti.length===ti.length-1,lunge:C,mom:V,sword:z,dur:Math.max(D||0,B.t),t:0,prev:null,hit:new Set,hits:0,react:lm(B,V)},E}function b(){let T=E;return E=null,T}function M(T,C){let V=um(E.C,C),z=Math.cos(V),D=Math.sin(V),B=T.fx*z-T.fz*D,J=T.fz*z+T.fx*D;return w.hilt.set(T.x+B*.3,T.y+1.1,T.z+J*.3),w.tip.set(T.x+B*1.6,T.y+1.1,T.z+J*1.6),w}function L(T){return T.type==="flyer"?[T.y-.45,.9]:[T.y,T.type==="brute"?2.8:T.type==="shooter"?2.2:2]}function k(T,C,V=!1){let z=E;if(!z)return 0;let D=e.H;if(z.t+=T,z.done)return 0;if(z.t>z.dur)return z.done=!0,0;if(V&&(C=M(D,z.t/z.C.t)),!C)return z.prev=null,0;let B={a:[C.hilt.x,C.hilt.z],b:[C.tip.x,C.tip.z],y0:Math.min(C.hilt.y,C.tip.y),y1:Math.max(C.hilt.y,C.tip.y)},J=z.prev;if(z.prev=B,!J)return 0;let ce=Math.hypot(J.b[0]-D.x,J.b[1]-D.z),ue=Math.hypot(B.b[0]-D.x,B.b[1]-D.z),q=V||dm(ce,ue,Math.hypot(B.b[0]-J.b[0],B.b[1]-J.b[1]),T);if(z.cutting&&!q&&(z.cutDone=!0),z.cutting=q,!q||V&&z.t>z.C.t)return 0;let ee=Math.min(J.y0,B.y0),te=Math.max(J.y1,B.y1),K=(A,ye,Q)=>cm(J.a,J.b,B.a,B.b,A,ye,Q),{C:de,mom:ae,sword:pe,react:he}=z,fe=0;for(let A of e.foes.list){if(!A.alive||z.hit.has(A))continue;let[ye,Q]=L(A);if(!hm(ee,te,ye,Q)||!K(A.x,A.z,A.r))continue;z.hit.add(A),fe++;let ze=A.x-D.x,le=A.z-D.z,Pe=Math.hypot(ze,le)||1;e.foes.damage(A,de.dmg*ae*pe,de.launch||z.lunge,ze/Pe,le/Pe,he.knock,he),e.fx.spawn(A.x,1,A.z,"#ffffff",5,{spd:3,up:2,size:.35}),e.fx.flash(A.x,p0(A),A.z,de.col||(z.last||ae>1.3?"#fff4c8":"#ffffff"),(z.last?3.4:1.9)*(.9+ae*.25),z.last?.18:.12)}let Ae=e.boss;Ae&&Ae.alive&&Ae.awake&&!z.hit.has(Ae)&&K(Ae.x,Ae.z,Ae.r)&&(z.hit.add(Ae),Ae.hit({x:Ae.x,z:Ae.z,y:1})?(Ae.damage(de.dmg*ae*pe,de.launch),fe++):e.audio.beep(200,.05,"square",.06));for(let A of n)A.alive&&K(A.x,A.z,A.size)&&(v(A),e.fx.spawn(A.x,A.y,A.z,"#ffffff",4,{spd:3,up:1,size:.3}),e.onStyle("cut"));for(let A of o)A.alive&&!z.hit.has(A)&&K(A.x,A.z,.6)&&(z.hit.add(A),S(A,2));return fe&&!z.hits&&z.last&&e.fx.ring(D.x+D.fx*1.2,D.z+D.fz*1.2,"#fff4c8",3.6,.32),z.hits+=fe,fe}function F(){E=null;for(let T of t)v(T);for(let T of n)v(T);for(let T of s)i.remove(T.mesh);s.length=0;for(let T of r)i.remove(T.mesh);r.length=0;for(let T of o)T.alive&&i.remove(T.mesh);o.length=0;for(let T of a)i.remove(T.mesh);a.length=0}function H(){for(let T of n)v(T)}return{bullets:t,ebullets:n,waves:s,crates:o,pickups:a,fire:f,spawnEBullet:x,spawnWave:m,spawnCrate:p,spawnPickup:_,beginStrike:I,sweepStrike:k,endStrike:b,get strike(){return E&&!E.done?E:null},update:y,clear:F,clearEnemyShots:H,WEP_ORDER:mp}}var Cs=(i={})=>new Ye({color:"#1b1b24",roughness:.5,metalness:.4,...i}),Is=(i,e=1)=>new Ye({color:i,emissive:i,emissiveIntensity:e});function qn(i,e,t,n){return new ge(new Ct(i,e,t),n)}var Xu=(i,e,t,n=2)=>{let s=i.bossRect;return[Math.max(s.x0*2+n,Math.min(s.x1*2-n,e)),Math.max(s.z0*2+n,Math.min(s.z1*2-n,t))]};function gl(i,e,t,n=10){let s=i.H;if(!s.alive||s.y>1.3)return;let r=s.x-e.x,o=s.z-e.z,a=Math.hypot(r,o)||.001;if(a<t+Mn){let l=r/a,c=o/a;s.ward?(i.wardAbsorb(yp,e.x,e.z),i.shove(l,c,n)):i.hurt("boss",e.x,e.z)&&i.shove(l,c,n*.6)}}function gE(i,e,t){let n=new Be;i.add(n),n.add(Xn(2.4));let s=Cs(),r=Is(re.char,.9),o=[s,r],a=qn(3.4,2.2,2.6,s);a.position.y=1.5,n.add(a);let l=qn(1.6,1.2,.3,Is(re.orange,1.6));l.position.set(0,1.3,1.35),n.add(l);let c=bt(re.orange,3.2,.7);c.position.set(0,1.3,1.6),n.add(c);for(let f of[-1,1]){let x=qn(1,.9,3,Cs({color:"#101016"}));x.position.set(f*1.9,.45,0),n.add(x);let m=qn(1.02,.1,2.6,r);m.position.set(f*1.9,.5,0),n.add(m)}let h=new ge(new vt(.35,.45,1.6,10),s);h.position.set(-.8,3.2,-.6),n.add(h);let u=h.clone();u.position.x=.8,n.add(u);let d=qn(2.2,.16,1.2,Is(re.gold,.4));d.position.set(0,2.7,.4),n.add(d);for(let f of[-1,1]){let x=new ge(new tn(.14,8,6),new We({color:re.hotred}));x.position.set(f*.7,2.1,1.32),n.add(x)}Object.assign(t,{mesh:n,mats:o,r:2,y:0,home:{x:t.x,z:t.z},shootT:1.5,pat:0,burst:0,burstT:0,lunge:0,lungeT:0,lungeCd:3,tx:0,tz:0}),t.hit=()=>!0,t.update=f=>{let x=e.H,m=t.x,g=t.z+1.2;if(t.t+=f,t.lunge===0&&(t.x=t.home.x+Math.sin(t.t*.7)*3,t.z=t.home.z+Math.sin(t.t*1.2)*.6),Math.random()<f*22&&e.fx.ember(t.x+(Math.random()-.5)*1.2,1.4,t.z+1.4,re.orange,.35,.8,1.8),Math.random()<f*8&&e.fx.ember(t.x-.8+Math.random()*1.6,4,t.z-.6,"#efe6cf",.3,1.4,.8),t.hp/t.max<.33&&Math.random()<f*6&&e.fx.spawn(t.x+1.2,2.4,t.z,"#ffffff",3,{spd:2,up:2,size:.3}),t.shootT-=f,t.burst>0){if(t.burstT-=f,t.burstT<=0&&x.alive){t.burst--,t.burstT=.16;let p=x.x-m,_=x.z-g,v=Math.hypot(p,_)||1;e.combat.spawnEBullet({x:m,y:1.3,z:g,vx:p/v*11,vz:_/v*11,kind:"ember"}),e.fx.spawn(m,1.3,g,re.orange,5,{spd:2,up:1,size:.3}),e.audio.noise(.08,.14,500,200)}}else if(t.shootT<=0&&x.alive)if(t.pat=(t.pat+1)%3,t.pat===2)t.burst=3,t.burstT=0,t.shootT=1.6;else{t.shootT=1.15;let p=Math.atan2(x.z-g,x.x-m);for(let _=-2;_<=2;_++){let v=p+_*.2+Math.sin(t.t)*.12;e.combat.spawnEBullet({x:m,y:1.3,z:g,vx:Math.cos(v)*9,vz:Math.sin(v)*9,kind:"ember"})}e.fx.spawn(m,1.3,g,re.orange,8,{spd:3,up:2,size:.3}),e.audio.noise(.12,.18,400,150)}if(gl(e,t,t.r),t.hp/t.max<.5)if(t.lungeCd-=f,t.lunge===0&&t.lungeCd<=0)t.lunge=1,t.lungeT=.5,e.audio.noise(.5,.2,200,600),e.flash("TREADS FLARE \u2014 DASH THE WAVE",re.char);else if(t.lunge===1){if(t.lungeT-=f,r.emissiveIntensity=2.5,t.lungeT<=0){t.lunge=2,t.lungeT=.34;let p=x.x-t.x,_=x.z-t.z,v=Math.hypot(p,_)||1;t.tx=p/v,t.tz=_/v}}else if(t.lunge===2){t.lungeT-=f;let[p,_]=Xu(e.level,t.x+t.tx*22*f,t.z+t.tz*22*f,2.6);t.x=p,t.z=_,gl(e,t,t.r+.3),t.lungeT<=0&&(t.lunge=3,t.lungeT=.9,e.shake(10),e.audio.sfx.slam(),e.combat.spawnWave(t.x,t.z,re.char,13,11),e.fx.spawn(t.x,.3,t.z,re.char,24,{spd:6,up:4}),e.fx.ring(t.x,t.z,re.char,4,.5))}else t.lunge===3&&(t.lungeT-=f,r.emissiveIntensity=.9,t.x+=(t.home.x-t.x)*Math.min(1,f*3),t.z+=(t.home.z-t.z)*Math.min(1,f*3),t.lungeT<=0&&(t.lunge=0,t.lungeCd=4.5));n.position.set(t.x,t.y+Math.sin(t.t*1.2)*.06,t.z),n.rotation.y=Math.atan2(x.x-t.x,x.z-t.z)*.25,c.material.opacity=.5+Math.sin(t.t*6)*.2}}function xE(i,e,t){let n=new Be;i.add(n),n.add(Xn(2.2));let s=Is(re.pink,1.4),r=Cs({color:"#2a1230"}),o=Is(re.pink,.8),a=[s,r,o],l=new Be;l.position.y=2.4,n.add(l);let c=new ge(new tn(.9,20,14),s);l.add(c);let h=bt(re.pink,3.4,.6);l.add(h);let u=new ge(new Qn(2.2,.06,8,48),o);u.rotation.x=Math.PI/2,l.add(u);let d=new Be;l.add(d);let f=[];for(let g=0;g<6;g++){let p=new Be;p.rotation.y=g*Math.PI/3;let _=qn(1.15,1.7,.22,r);_.position.z=2,p.add(_);let v=qn(1.17,.08,.24,o);v.position.set(0,.85,2),p.add(v),d.add(p),f.push(_)}let x=bt(re.cyan,1.8,.6);x.position.y=-1.1,l.add(x);let m=new ge(new An(1.8,40),new We({color:re.pink,transparent:!0,opacity:0,blending:ht,depthWrite:!1,side:gt}));m.rotation.x=-Math.PI/2,m.position.y=.1,i.add(m),t.mount=d,Object.assign(t,{mesh:n,mats:a,extra:[m],r:2.3,y:2.4,home:{x:t.x,z:t.z},rot:0,open:0,openCd:4,mode:"cruise",modeT:2.2,shootT:1.2,beamOn:0,spawnCd:5,bx:0,bz:0,bdx:0,bdz:1}),t.hit=g=>{if(t.open>0)return!0;let p=Math.atan2(g.x-t.x,g.z-t.z),_=Math.PI/3;return((p-t.rot)%_+_)%_>_*.62},t.update=g=>{let p=e.H;t.t+=g,t.rot+=g*(t.open>0?.3:.9),d.rotation.y=t.rot,t.x=t.home.x+Math.sin(t.t*.5)*4.5,t.z=t.home.z+Math.sin(t.t*1.3)*1.4,t.open>0?t.open-=g:(t.openCd-=g,t.openCd<=0&&(t.open=1.8,t.openCd=4.5,e.flash("ARRAY OPEN \u2014 HIT THE CORE",re.cyan),e.audio.sfx.open()));let _=t.open>0?3.2:2;for(let v of f)v.position.z+=(_-v.position.z)*Math.min(1,g*6);if(Math.random()<g*18&&e.fx.ember(t.x+(Math.random()-.5)*2,1.2,t.z+(Math.random()-.5)*2,re.pink,.3,.7,-1.5),t.modeT-=g,t.spawnCd-=g,t.mode==="cruise"){if(t.shootT-=g,t.shootT<=0&&p.alive){t.shootT=1.1;let v=Math.atan2(p.z-t.z,p.x-t.x);for(let y of[-.12,0,.12])e.combat.spawnEBullet({x:t.x,y:1.3,z:t.z,vx:Math.cos(v+y)*10,vz:Math.sin(v+y)*10,kind:"pulse"});e.fx.spawn(t.x,1.5,t.z,re.pink,6,{spd:3,up:1,size:.3}),e.audio.beep(1400,.08,"sine",.12,600)}if(t.modeT<=0){let v=e.foes.aliveCount("flyer");if(t.mode=t.spawnCd<=0&&v<3?"deploy":"sweep",t.modeT=t.mode==="sweep"?.75:.9,t.mode==="sweep"){let y=p.x-t.x,S=p.z-t.z,E=Math.hypot(y,S)||1;t.bdx=y/E,t.bdz=S/E,t.bx=t.x,t.bz=t.z,e.audio.sfx.beamTell(),e.flash("BEAM \u2014 STEP OFF THE LINE",re.pink)}}}else if(t.mode==="sweep"){if(m.position.set(t.bx+t.bdx*20,.1,t.bz+t.bdz*20),m.rotation.z=-Math.atan2(t.bdx,t.bdz),t.beamOn<=0&&(m.material.opacity=.25+Math.floor(t.t*12)%2*.25),t.modeT<=0&&t.beamOn<=0&&(t.beamOn=.4,e.shake(5),e.audio.sfx.beamFire()),t.beamOn>0){if(t.beamOn-=g,m.material.opacity=.95,Math.random()<g*40&&e.fx.spawn(t.bx+t.bdx*Math.random()*30,.3,t.bz+t.bdz*Math.random()*30,re.pink,2,{spd:2,up:4,size:.3}),p.alive){let v=p.x-t.bx,y=p.z-t.bz,S=v*t.bdx+y*t.bdz,E=Math.abs(v*t.bdz-y*t.bdx);S>0&&S<40&&E<.9+Mn&&p.y<1.2&&(p.ward?e.wardAbsorb(70*g,t.x,t.z):e.hurt("beam",t.x,t.z))}t.beamOn<=0&&(t.mode="cruise",t.modeT=2.4,t.shootT=.8,m.material.opacity=0)}}else if(t.mode==="deploy"&&t.modeT<=0){for(let v of[-1.6,1.6]){let[y,S]=Xu(e.level,t.x+v,t.z+1.5);e.foes.spawn("flyer",y,S).aggro=!0}e.fx.spawn(t.x,1.8,t.z,re.cyan,14,{spd:4,up:2}),e.audio.beep(500,.2,"square",.15,250),t.spawnCd=9,t.mode="cruise",t.modeT=2.4}gl(e,t,1.6),n.position.set(t.x,0,t.z),l.position.y=2.4+Math.sin(t.t*1.6)*.2,c.rotation.y+=g,h.material.opacity=t.open>0?.9:.5,s.emissiveIntensity=t.open>0?2.4:1.4}}function _E(i,e,t){let n=new Be;i.add(n);let s=Xn(2);n.add(s);let r=Cs({color:"#141018"}),o=Is(re.violet,.9),a=Is(re.gold,.1),l=[r,o],c=new Be;n.add(c);let h=qn(3.2,1.8,2.4,r);h.position.y=.9,c.add(h);for(let S of[-1,1]){let E=qn(.1,.5,2.3,o);E.position.set(S*1.62,.9,0),c.add(E)}let u=new ge(new vt(.7,.7,.14,16),a);u.position.set(0,1.86,.4),c.add(u);let d=bt(re.gold,2.4,0);d.position.set(0,2,.4),c.add(d);let f=new ge(new vt(.4,.5,8,10),Cs({color:"#22202a"}));f.position.y=5.8,c.add(f);let x=e.level.bossRect,m=x.x0*2+1,g=x.x1*2-1,p=x.z0*2+1,_=x.z1*2-1,v=new Be;i.add(v);for(let S of[p+1.5,_-1.5]){let E=qn(g-m,.3,.5,Cs({color:"#22202a"}));E.position.set((m+g)/2,7.2,S),v.add(E)}let y=qn(1.4,.4,_-p-2.5,Cs({color:"#22202a"}));y.position.set(yE(e).x,7.2,(p+_)/2),v.add(y),t.mount=c,Object.assign(t,{mesh:n,mats:l,extra:[v],r:1.9,y:5.5,state:"track",st:2,topY:5.5,botY:0,vul:!1}),t.hit=()=>t.vul,t.update=S=>{let E=e.H;t.t+=S,t.st-=S;let[w,I]=Xu(e.level,E.x,E.z,2.5);if(t.state==="track")t.vul=!1,t.x+=(w-t.x)*Math.min(1,S*2.2),t.z+=(I-t.z)*Math.min(1,S*2.2),t.y=t.topY+Math.sin(t.t*2)*.15,t.st<=0&&(t.state="slam",t.st=.22,e.audio.noise(.2,.2,300,80));else if(t.state==="slam"){if(t.y+=(t.botY-t.y)*Math.min(1,S*14),t.st<=0){t.y=t.botY,t.state="down",t.st=1.1,t.vul=!0,e.shake(12),e.audio.sfx.slam(),e.combat.spawnWave(t.x,t.z,re.violet,13,9);for(let b=0;b<3;b++){let M=Math.atan2(E.z-t.z,E.x-t.x)+(b-1)*.9+(Math.random()-.5)*.4,L=4+Math.random()*3;e.combat.spawnEBullet({x:t.x,y:2.2,z:t.z,vx:Math.cos(M)*L,vz:Math.sin(M)*L,vy:7.5,kind:"ink",grav:!0,life:6})}e.fx.spawn(t.x,.3,t.z,re.violet,26,{spd:6,up:4}),e.fx.ring(t.x,t.z,re.violet,5,.5),e.flash("SEAL EXPOSED \u2014 FIRE",re.gold)}}else t.state==="down"?t.st<=0&&(t.state="rise",t.st=.6,t.vul=!1):t.state==="rise"&&(t.y+=(t.topY-t.y)*Math.min(1,S*6),t.st<=0&&(t.state="track",t.st=1.6+Math.random()*.8));Math.random()<S*8&&e.fx.ember(t.x-1.4+Math.random()*2.8,t.y+.2,t.z+(Math.random()-.5)*2,"#6a3cff",.3,.8,-1),t.state!=="track"&&gl(e,t,1.9),n.position.set(t.x,0,t.z),c.position.y=t.y,s.scale.setScalar(1-t.y/8),y.position.x=t.x,a.emissiveIntensity=t.vul?2.2:.1,d.material.opacity=t.vul?.8:0,o.emissiveIntensity=t.vul?2:.9}}var yE=i=>i.level.bossPos;function x0(i,e,t){let n=Ep[t],s=e.level.bossPos,r={key:t,name:n.name,wake:n.wake,x:s.x,z:s.z,hp:n.hp,max:n.hp,alive:!0,awake:!1,t:0,hurtT:0,stun:0,extra:[],dying:0};({engine:gE,censor:xE,redactor:_E})[t](i,e,r);let o=s0(e.assets,r,r.mount),a=r.update;r.damage=(l,c)=>{r.alive&&(l*=e.comboHit?e.comboHit():1,r.hp-=l,r.hurtT=.1,e.audio.sfx.bossHit(),e.onBossDamage(l,c),r.hp<=0&&(r.hp=0,r.alive=!1,r.dying=2.4,e.onBossDead()))},r.update=l=>{if(!r.alive){r.dying-=l,Math.random()<l*14&&(e.fx.spawn(r.x+(Math.random()-.5)*3,1+Math.random()*2,r.z+(Math.random()-.5)*3,Math.random()<.5?"#ffffff":re.orange,10,{spd:6,up:5}),e.shake(4)),r.mesh.position.y-=l*.35,r.mesh.rotation.z+=l*.15;return}if(r.stun>0){r.stun-=l,r.t+=l*.1,r.mesh.rotation.x=Math.sin(r.t*40)*.03;return}if(a(l),r.hurtT>0){r.hurtT-=l,r.wasHurt=!0;for(let c of r.mats)c.emissive.set("#ffffff"),c.emissiveIntensity=1.6;o&&ts(o.mats,1),r.hurtT<=0&&o&&ts(o.mats,0)}else if(r.wasHurt){r.wasHurt=!1;for(let c of r.mats)c.emissive.setHex(c.userData.def.c),c.emissiveIntensity=c.userData.def.i}};for(let l of r.mats)l.userData.def={c:l.emissive.getHex(),i:l.emissiveIntensity};return r.dispose=()=>{i.remove(r.mesh);for(let l of r.extra)i.remove(l)},r.mesh.position.set(r.x,0,r.z),r}var vE=i=>document.getElementById(i),is=i=>String(i).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]);function _0(){let i={};for(let w of["hud","heroName","heroTitle","lives","wep","pow","wardBar","chargeBar","score","mult","pages","rail","flash","bossBar","bossName","bossFill","pageCard","pgTitle","pgLine","pgSrc","menu","select","worldSel","codexPop","pausePop","endPop","cardM","cardK","wrow","cxWrap","endMsg","endSub","rkRank","rkScore","rkGrid","rkHint","rkWorld","rkRows","nextWorld","muteBtn","sfxBtn","pauseBtn","touch","hint"])i[w]=vE(w);let e=0,t=0;function n(w){for(let I of document.querySelectorAll(".overlay"))I.classList.add("hidden");w&&i[w].classList.remove("hidden"),document.body.classList.toggle("playing",!w),i.pauseBtn.classList.toggle("hidden",!!w),i.muteBtn.classList.toggle("hidden",!!w&&w!=="pausePop"),i.sfxBtn.classList.toggle("hidden",!!w&&w!=="pausePop")}function s(w,I=re.gold){i.flash.textContent=w,i.flash.style.color=I,i.flash.style.textShadow=`0 0 18px ${I}`,e=1.7,i.flash.style.opacity=1}function r(w){i.hint.textContent=w||""}function o(w){i.heroName.textContent=w.name,i.heroName.style.color=w.accent,i.heroTitle.textContent=w.title}function a(w){i.rail.textContent=w.rail,i.rail.style.color=w.accent}function l(w){i.pgTitle.textContent=w.t,i.pgLine.textContent=w.l,i.pgSrc.textContent=w.s,t=4.8,i.pageCard.classList.remove("hidden")}function c(w){i.bossName.textContent=w,i.bossBar.classList.remove("hidden")}function h(w,I){i.bossFill.style.width=Math.max(0,w/I*100)+"%"}function u(){i.bossBar.classList.add("hidden")}function d(w,I,b,M){i.lives.textContent="\u25C6".repeat(Math.max(0,I.lives))+"\u25C7".repeat(Math.max(0,3-I.lives));let L=Mt[I.weapon];i.wep.textContent=L.name,i.wep.style.color=L.col,i.wep.style.borderColor=L.col,i.pow.innerHTML=Array.from({length:Ar},(k,F)=>`<i class="${F<I.power?"on":""}"></i>`).join(""),i.wardBar.firstElementChild.style.width=Math.max(0,I.shield/$i*100)+"%",i.wardBar.classList.toggle("broken",I.wardBroken>0),i.chargeBar.firstElementChild.style.width=Math.min(1,I.charge/Ss)*100+"%",i.chargeBar.classList.toggle("full",I.charge>=Ss),i.score.textContent=b.score.toLocaleString(),i.mult.textContent="\xD7"+b.mult.toFixed(2).replace(/\.?0+$/,""),i.mult.style.color=b.mult>=4?re.gold:b.mult>=2?re.cyan:"#cfc6b8",i.pages.textContent=`${b.pages} RECORDS RECOVERED`,e>0&&(e-=w,e<.5&&(i.flash.style.opacity=e/.5)),t>0&&(t-=w,t<=0&&i.pageCard.classList.add("hidden"))}function f(w){document.querySelectorAll(".selcard.hero[data-hero]").forEach(I=>I.classList.toggle("sel",I.dataset.hero===w))}function x(w,I){i.wrow.innerHTML=ni.map(b=>{let M=bn[b],L=_o(b),k=Vp(b),F=!I.includes(b);return`<div class="selcard wcard ${w===b?"sel":""} ${F?"locked":""}" data-w="${b}" style="--acc:${M.accent}">
        <div class="wglyph" style="background:radial-gradient(circle at 50% 60%, ${M.sky[1]}, ${M.sky[2]})"><span style="color:${M.accent}">${b==="ramparts"?"\u26EB":b==="venus"?"\u263F":"\u{1F4DC}"}</span></div>
        <div class="selname" style="color:${M.accent}">${M.name}</div><div class="seltag">${is(M.tag)}</div>
        <div class="selbest">${L?`BEST ${L.s.toLocaleString()} \xB7 ${L.r} \xB7 ${Ft[L.h]?Ft[L.h].name:L.h}`:"NO RUN YET"} &nbsp;\xB7&nbsp; CODEX ${k}/${xo[b].length}</div>
        ${F?'<div class="lock">CLEAR THE PREVIOUS FRONT</div>':""}</div>`}).join("")}function m(){let w=yo(),I=/[?&]codexall/.test(location.search),b=["\u2726 \u25C8 \u2726","\u25C8 \u2726 \u25C8","\u2727 \u2726 \u2727"],M=(L,k,F,H)=>I||k.includes(L.id)?`<div class="cx-scroll"><div class="cx-paper"><span class="cx-glyphs">${b[H%b.length]}</span><b>${is(L.t)}</b><p>${is(L.l)}</p><small>${is(L.s)}</small><span class="cx-seal">\u2726</span></div></div>`:`<div class="cx-scroll sealed"><div class="cx-paper"><span class="cx-glyphs">\u2726 \u2726 \u2726</span><b>${is(L.t)}</b><span class="cx-ink" style="width:94%"></span><span class="cx-ink" style="width:80%"></span><span class="cx-ink" style="width:88%"></span><span class="cx-ink" style="width:56%"></span><span class="cx-stamp">REDACTED</span><small>Recover it in ${is(F.name)}</small></div></div>`;i.cxWrap.innerHTML=ni.map(L=>{let k=bn[L],F=w[L]||[],H=xo[L],T=H.filter(V=>F.includes(V.id)).length,C=Vh.filter(V=>H.some(z=>z.v===V.id));return`<div class="cx-world" style="--acc:${k.accent}"><h3>${is(k.name)} <small>${T}/${H.length} recovered</small></h3>`+C.map(V=>{let z=H.filter(B=>B.v===V.id),D=z.filter(B=>F.includes(B.id)).length;return`<div class="cx-vol">${is(V.title)} <small>${D}/${z.length}</small></div><div class="cx-grid">${z.map((B,J)=>M(B,F,k,J)).join("")}</div>`}).join("")+"</div>"}).join("")}function g(w,I,b,M,L){i.endMsg.textContent=M?"UNERASED":"ERASED",i.endMsg.style.color=M?re.gold:re.hotred,i.endSub.textContent=M?b.win:"The line broke. The pages you recovered stay in the Codex \u2014 the rest are still out there.",i.rkRank.textContent=I,i.rkRank.style.color=I==="UNERASED"?re.gold:I==="SAGE"?re.cyan:I==="SCHOLAR"?re.green:"#cfc6b8",i.rkScore.textContent=w.score.toLocaleString();let k=Math.floor(w.t/60),F=Math.floor(w.t%60),H=[["TIME",`${k}:${String(F).padStart(2,"0")}`],["HITS",w.hits],["KILLS",`${w.kills} \xB7 ${w.styleKills} style`],["PARRIES",w.parries],["BEST MULT","\xD7"+w.bestMult],["RECORDS",w.pages]];i.rkGrid.innerHTML=H.map(([C,V])=>`<div><small>${C}</small><b>${V}</b></div>`).join(""),i.rkHint.textContent=Fp(I),i.rkWorld.textContent=b.name;let T=nl()[b.key]||[];i.rkRows.innerHTML=T.length?T.map((C,V)=>`<div class="lbrow"><span>${V+1}</span><b>${C.s.toLocaleString()}</b><span>${C.r}</span><span style="color:${Ft[C.h]?Ft[C.h].accent:"#fff"}">${Ft[C.h]?Ft[C.h].name:C.h}</span><span>${C.d}</span></div>`).join(""):'<div class="lbrow"><span>\u2014</span></div>',i.nextWorld.classList.toggle("hidden",!(M&&L)),L&&(i.nextWorld.textContent=`Next: ${bn[L].name} \u25B8`)}let p=null;function _(w){p||(p=document.createElement("div"),p.className="screenflash",document.body.appendChild(p)),p.style.background=`radial-gradient(circle at 50% 55%, ${w}88, ${w}00 70%)`,p.classList.remove("go"),p.offsetWidth,p.classList.add("go")}let v=null,y=0;function S(w){if(!v){v=document.createElement("div"),v.id="combo";let I=document.createElement("b"),b=document.createElement("small");b.textContent="HIT COMBO",v.append(I,b),i.hud.appendChild(v)}if(w<2){v.classList.remove("on"),y=0;return}v.firstChild.textContent=w,v.classList.add("on"),v.style.color=w>=30?"#ff7ad9":w>=15?"#ffd76a":w>=6?"#4CE0E0":"#f4ecd8",w!==y&&(v.classList.remove("pop"),v.offsetWidth,v.classList.add("pop"),y=w)}function E(w,I){i.muteBtn.classList.toggle("off",!!I),i.muteBtn.title=I?"Music is off (M)":"Music is on (M)",i.sfxBtn.textContent=w?"\u{1F507}":"\u{1F50A}",i.sfxBtn.classList.toggle("off",!!w)}return{el:i,show:n,flash:s,hint:r,setHero:o,setWorld:a,showPage:l,boss:c,bossHp:h,hideBoss:u,update:d,renderSelect:f,renderWorlds:x,renderCodex:m,renderEnd:g,setMuted:E,screenFlash:_,combo:S}}var v0="unerased3d.sound.v1",Eo=Object.freeze({music:.55,sfx:1,musicOn:!0,sfxOn:!0}),y0=i=>typeof i=="number"&&Number.isFinite(i)?Math.max(0,Math.min(1,i)):null;function ss(i,e={}){let t={...Eo,...i,...e};return{music:y0(t.music)??Eo.music,sfx:y0(t.sfx)??Eo.sfx,musicOn:typeof t.musicOn=="boolean"?t.musicOn:Eo.musicOn,sfxOn:typeof t.sfxOn=="boolean"?t.sfxOn:Eo.sfxOn}}function M0(){try{return globalThis.localStorage||null}catch{return null}}function b0(i=M0()){if(!i)return ss({});try{return ss(JSON.parse(i.getItem(v0)||"{}")||{})}catch{return ss({})}}function E0(i,e=M0()){if(!e)return!1;try{return e.setItem(v0,JSON.stringify(i)),!0}catch{return!1}}function S0(i,e,t){let n=document.createElement("div");n.className="soundpanel";let s=(o,a,l)=>{let c=document.createElement("div");c.className="srow";let h=document.createElement("span");h.textContent=o;let u=document.createElement("input");u.type="range",u.min="0",u.max="100",u.step="1",u.setAttribute("aria-label",o+" volume");let d=document.createElement("b"),f=document.createElement("button");return f.type="button",f.className="stoggle",u.addEventListener("input",()=>t({[a]:Number(u.value)/100,[l]:!0})),f.addEventListener("click",()=>t({[l]:!e()[l]})),c.append(h,u,d,f),{wrap:c,render(x){u.value=String(Math.round(x[a]*100)),d.textContent=x[l]?Math.round(x[a]*100)+"%":"OFF",f.textContent=x[l]?"ON":"OFF",f.classList.toggle("off",!x[l]),c.classList.toggle("muted",!x[l])}}},r=[s("MUSIC","music","musicOn"),s("EFFECTS","sfx","sfxOn")];return n.append(...r.map(o=>o.wrap)),i.appendChild(n),{render(o){for(let a of r)a.render(o)}}}var cn=d0({base:/quantummelaninmedia\.com$/.test(location.hostname)?"/assets/audio/":"./assets/music/"}),yt=i=>document.getElementById(i),C0=yt("scene"),oi=new Ma({canvas:C0,antialias:!0,powerPreference:"high-performance"});Sm(oi);oi.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5));oi.outputColorSpace=mt;oi.toneMapping=fo;oi.toneMappingExposure=.98;var Ln=new Ea,mn=new kt(Ot.fov,1,Ot.near,Ot.far),Sl=new URLSearchParams(location.search).has("lq")?"low":"high";Sl==="high"&&(oi.shadowMap.enabled=!0,oi.shadowMap.type=vh);var os=Sl==="high"?new Ka(oi):null,Zu=null;os&&(os.addPass(new Za(Ln,mn)),Zu=new Tr(new Te(512,512),.52,.72,.86),os.addPass(Zu),os.addPass(new $a));var Yu=()=>os?os.render():oi.render(Ln,mn);function I0(){let i=window.innerWidth,e=window.innerHeight;oi.setSize(i,e,!1),mn.aspect=i/e,mn.updateProjectionMatrix(),os&&(os.setSize(i,e),Zu.setSize(i,e))}window.addEventListener("resize",I0);I0();var ut=Gp(),Le=_0(),Lt=Mm(Ln),Vt=rm(C0,yt("stick"),yt("knob"),{fire:yt("tFire"),blade:yt("tBlade"),ward:yt("tWard"),dash:yt("tDash"),swap:yt("tSwap"),jump:yt("tJump"),magic:yt("tMagic")}),nt=Vt.IN,Xt=b0(),ME=[yt("menuSound"),yt("pauseSound")].filter(Boolean).map(i=>S0(i,()=>Xt,e=>Ro(ss(Xt,e))));function Ro(i){Xt=i,E0(Xt),cn.setVolume(Xt.music),cn.setMuted(!Xt.musicOn),ut.setVolume(Xt.sfx),ut.setMuted(!Xt.sfxOn),Le.setMuted(!Xt.sfxOn,!Xt.musicOn);for(let e of ME)e.render(Xt)}Ro(Xt);var U={scene:Ln,camera:mn,audio:ut,fx:Lt,hud:Le,input:Vt,assets:null,level:null,world:null,hero:null,foes:null,combat:null,boss:null,run:null,t:0,slowMul:1,H:null},Dt="menu",Yt="melvinci",Kt="ramparts",as=null,Ml=[],Ur=0,bl=0,zr=-1,To=-1,wo=1,xl=0,So=0,rs=1,Ps=0,Ls=0,_l=0,yl=1,vl=0,$u=!0,Pt={yaw:0,pitch:1,dist:1},El=new O,w0=new O,Ju=()=>Kp(Pt.yaw,Ot.off[0],Ot.off[2]*wo*Pt.dist),Ut=null,qu=0;function bE(){let i=U.foes.list.filter(e=>e.alive);return U.boss&&U.boss.alive&&U.boss.awake&&i.push(U.boss),i}function T0(i){let e=bE(),t=fm(i.x,i.z,i.fx,i.fz,e);return t>=0?e[t]:null}function EE(i){let e=U.H;if(Vt.pressed("lock")&&(Ut?(Ut=null,Le.flash("LOCK OFF",re.cyan)):(Ut=T0(e),Ut?(Le.flash(Ut===U.boss?"LOCKED \u2014 "+U.boss.name:"LOCKED",re.gold),qu=0,ut.sfx.ui()):Le.flash("NOTHING TO LOCK",re.cyan))),Ut&&!gm(Ut,e.x,e.z)){let r=Ut.alive===!1;Ut=r?T0(e):null,Ut||Le.flash(r?"TARGET DOWN":"LOCK LOST",re.cyan)}if(!Ut)return;let t=Ut.x-e.x,n=Ut.z-e.z,s=Math.hypot(t,n);s>.05&&(nt.aimX=t/s,nt.aimZ=n/s),(qu-=i)<=0&&(qu=.35,Lt.ring(Ut.x,Ut.z,re.gold,(Ut.r||.6)*2.2,.32,(Ut.y||0)+.06))}var P0=()=>{let i=["ramparts"];return _o("ramparts")&&i.push("venus"),_o("venus")&&i.push("archive"),i};function SE(i,e){return{x:i,z:e,y:0,vy:0,onGround:!0,airJumps:1,vx:0,vz:0,fx:0,fz:-1,r:Mn,alive:!0,invuln:0,dashT:0,dashCd:0,ddx:0,ddz:-1,ward:!1,wardT:9,wardBroken:0,parried:!1,shield:$i,regenDelay:0,weapon:"single",power:1,owned:["single"],lives:Qa,fireCd:0,charge:0,charged:!1,wasFiring:!1,bladeN:0,bladeT:0,bladeWindow:0,mv:0,mvx:0,mvz:0,parryFlash:0,deadT:0,shotIx:0}}U.flash=(i,e)=>Le.flash(i,e);U.shake=i=>{Ur=Math.max(Ur,i)};U.hitstop=i=>{bl=Math.max(bl,i)};U.shove=(i,e,t)=>{U.H.vx+=i*t,U.H.vz+=e*t};U.wardBlocks=(i,e)=>{let t=U.H;if(!t.ward)return!1;let n=i-t.x,s=e-t.z,r=Math.hypot(n,s)||1;return(n*t.fx+s*t.fz)/r>Math.cos(Ji)};U.wardAbsorb=(i,e,t)=>{let n=U.H;return n.wardT<vp&&!n.parried?(n.parried=!0,U.run=Lp(U.run),U.powers&&U.powers.addMeter("parry"),n.parryFlash=.18,ut.sfx.parry(),Lt.ring(n.x,n.z,"#ffffff",2.4,.3),Lt.spawn(n.x+n.fx*.9,1.1,n.z+n.fz*.9,"#ffffff",10,{spd:4,up:2,size:.35}),Le.flash(U.run.parryChain>=3?"GOLD CANNON ARMED \u2014 FIRE":"PARRY",U.run.parryChain>=3?re.gold:re.cyan),U.hitstop(.05),"parry"):(n.shield-=i,n.regenDelay=qh,ut.sfx.ward(),Lt.spawn(e+(n.x-e)*.5,1.1,t+(n.z-t)*.5,Ft[Yt].accent,5,{spd:2,up:1,size:.3}),U.shake(2),n.shield<=0?(n.shield=0,n.ward=!1,n.wardBroken=1.6,ut.sfx.shatter(),Le.flash("WARD SHATTERED",re.hotred),Lt.spawn(n.x,1.1,n.z,Ft[Yt].accent,20,{spd:5,up:3}),"shatter"):"block")};U.hurt=(i,e,t)=>{let n=U.H;if(!n.alive||n.invuln>0||n.dashT>0)return!1;if(U.combo.n=0,U.combo.t=0,Le.combo(0),n.lives--,U.run=Np(U.run),n.invuln=fp,n.weapon="single",n.power=1,n.charge=0,n.charged=!1,n.ward=!1,U.hero.setWeaponColor(Mt.single.col),U.hero.hurtFlash(),ut.sfx.hurt(),U.shake(7),U.hitstop(.06),Lt.spawn(n.x,1.1,n.z,re.hotred,16,{spd:5,up:3}),Lt.ring(n.x,n.z,re.hotred,2.5,.4),e!==void 0){let s=n.x-e,r=n.z-t,o=Math.hypot(s,r)||1;U.shove(s/o,r/o,9)}return n.lives<=0?(n.alive=!1,n.deadT=1.6,Le.flash("THE LINE BREAKS",re.hotred)):Le.flash(n.lives===1?"LAST LIFE \u2014 HOLD THE LINE":"HIT \u2014 BLASTER RESET",re.hotred),!0};U.combo={n:0,t:0,best:0};U.comboHit=()=>{let i=U.combo;return i.n=i.t>0?i.n+1:1,i.t=ap,i.best=Math.max(i.best,i.n),Le.combo(i.n),1+Math.min(1.5,(i.n-1)*.08)};U.onKill=(i,e)=>{U.run=Pp(U.run,e||U.H.dashT>0),U.powers&&U.powers.addMeter("kill")};U.onStyle=i=>{U.run={...U.run,score:U.run.score+(i==="dash"?50:10)},i==="dash"&&Le.flash("DASHED THE WAVE",re.cyan)};U.onCrate=()=>{let i=iu(Kt,U.run.pages);U.run=eu(U.run),nu(Kt,i.id),Le.showPage(i),ut.sfx.page(),L0()};function L0(){Le.flash(`BLADE \xD7${su(U.run.pages,U.H.power).toFixed(2)}`,re.gold)}U.onPickup=(i,e,t)=>{let n=U.H;i==="power"?(n.power=Math.min(Ar,n.power+1),setTimeout(L0,900),Le.flash(n.power===Ar?"POWER MAX":"POWER UP",re.gold)):(n.owned.includes(i)||n.owned.push(i),n.weapon=i,U.hero.setWeaponColor(Mt[i].col),Le.flash(Mt[i].name,Mt[i].col)),ut.sfx.pickup(),Lt.spawn(e,1.1,t,i==="power"?re.gold:Mt[i].col,16,{spd:4,up:4})};U.onBossDamage=i=>{U.run=Dp(U.run,i),Le.bossHp(U.boss.hp,U.boss.max)};U.onBossDead=()=>{ut.sfx.bossDie(),Le.flash(U.boss.name+" \u2014 DOWN",re.gold),U.shake(12),To=2.6,Le.hideBoss(),U.world.gate.open(),U.level.openGate()};var D0=i=>n0(Ln,U.assets,i)||wm(Ln,Ft[i]),ju=Object.keys(Ft),wE=1.5;function TE(){let i=Jh("ramparts"),e=cu(Ln,i,bn.ramparts,U.assets,{shadows:Sl==="high"});Ml=ju.map(D0),as={level:i,world:e,s:i.start}}function AE(){if(as){as.world.dispose();for(let i of Ml)i.dispose();as=null,Ml=[]}}function RE(i,e){let t=as.s;Ml.forEach((s,r)=>{let o=ju[r]===Yt,a=t.x+(r-(ju.length-1)/2)*wE;s.update(i,e,{x:a,z:t.z,fx:Math.sin(e*.4)*.3,fz:1,mv:0,mvx:0,mvz:0,dashing:!1,invuln:0,alive:!0,ward:!1,charge:Dt==="select"&&o?.5+Math.sin(e*4)*.3:0,firing:!1,parryFlash:0}),s.group.visible=!0});let n=e*.12;El.set(t.x+Math.sin(n)*9,6.5,t.z+4+Math.cos(n)*5),mn.position.lerp(El,Math.min(1,i*2)),mn.lookAt(t.x,1.4,t.z),as.world.update(i,e,t.x,t.z)}function Ao(i,e){AE(),N0(),Kt=i,Yt=e;let t=Jh(i),n=cu(Ln,t,bn[i],U.assets,{shadows:Sl==="high"});U.level=t,U.world=n,U.hero=D0(e),U.H=SE(t.start.x,t.start.z),U.foes=f0(Ln,U),U.combat=g0(Ln,U),U.powers=l0(Ln,U,e),U.boss=x0(Ln,U,bn[i].boss),U.run=Ip(e,i),U.t=0,To=-1,zr=-1;for(let s of t.foes)U.foes.spawn(s.type,s.x,s.z);for(let s of t.boxes)U.combat.spawnCrate(s);Le.setHero(Ft[e]),Le.setWorld(bn[i]),Le.hideBoss(),Le.show(null),Le.flash(bn[i].name,bn[i].accent),Le.hint(nt.touch?"":Xp),mn.position.set(U.H.x+Ot.off[0],Ot.off[1],U.H.z+Ot.off[2]),mn.lookAt(U.H.x,1,U.H.z),Dt="play",Vt.clearEdges(),cn.play(i),Ut=null,$u=!0}function N0(){U.level&&(U.powers&&(U.powers.dispose(),U.powers=null),U.world.dispose(),U.hero.dispose(),U.foes.clear(),U.combat.clear(),U.boss&&U.boss.dispose(),Lt.clear(),U.level=null,U.boss=null)}function A0(i){let e=tu(U.run);Hp(U.run);let t=ni.indexOf(Kt),n=i&&t<ni.length-1?ni[t+1]:null;Le.renderEnd(U.run,e,bn[Kt],i,n),Le.show("endPop"),Dt="end",Le.hint(""),cn.play(i?"win":"menu")}function CE(i){let e=U.H,t=U.level;U.slowMul=1,U.combat.update(i),Vt.update(mn,e.x,e.z,Ju(),nt.orbit),EE(i);for(let p of["invuln","dashCd","fireCd","regenDelay","wardBroken","bladeT","bladeWindow","parryFlash"])e[p]>0&&(e[p]-=i);if(e.bladeWindow<=0&&e.chain&&(e.chain=0),!e.alive){e.deadT-=i,e.mv=0,e.deadT<=0&&zr<0&&(zr=.01);return}let n=!1;if((Vt.pressed("dash")||e.dashQueue>0)&&(ym(_m(U.combat.strike))?(e.dashQueue=0,n=!0):e.dashQueue>0?e.dashQueue-=i:e.dashQueue=xm.buffer),n&&e.dashCd<=0&&e.dashT<=0&&(e.bladeT>0||U.combat.strike)){let p=U.combat.endStrike();p&&!p.hits&&(e.chain=0),Object.assign(e,vm(e.bladeT,e.bladeWindow,Yh)),e.bladeQueue=0,U.hero.cancelSwing&&U.hero.cancelSwing()}if(n&&e.dashCd<=0&&e.dashT<=0){e.dashT=hp,e.dashCd=Xh,e.invuln=Math.max(e.invuln,up);let p=Math.hypot(nt.mx,nt.mz);e.ddx=p>.1?nt.mx/p:e.fx,e.ddz=p>.1?nt.mz/p:e.fz,e.ward=!1,ut.sfx.dash(),Lt.ring(e.x,e.z,Ft[Yt].accent,1.8,.3),Lt.spawn(e.x,.4,e.z,Ft[Yt].accent,6,{spd:2,up:1,size:.35})}if(e.dashT>0){e.dashT-=i;let p=e.longDash?3:1;Math.random()<i*40*p&&Lt.spawn(e.x-e.ddx*.4,e.y+.6+Math.random()*.8,e.z-e.ddz*.4,Ft[Yt].accent,e.longDash?3:2,{spd:1,up:.3,size:e.longDash?.55:.4,life:.4,grav:0}),e.dashT<=0&&(e.longDash=!1)}let s=nt.ward&&e.shield>0&&e.wardBroken<=0&&e.dashT<=0&&e.bladeT<=0;s&&!e.ward?(e.ward=!0,e.wardT=0,e.parried=!1,ut.sfx.ward()):s||(e.ward=!1),e.ward?(e.wardT+=i,e.shield-=xp*i,e.regenDelay=qh,e.shield<=0&&(e.shield=0,e.ward=!1,e.wardBroken=1.6,ut.sfx.shatter(),Le.flash("WARD SHATTERED",re.hotred))):e.regenDelay<=0&&e.shield<$i&&(e.shield=Math.min($i,e.shield+_p*i));let r=ti[(e.bladeN%go+go)%go],o=nm(e.bladeT,r.t),a=Math.hypot(nt.mx,nt.mz),l=ja*(e.ward?.55:1)*(nt.sprint&&!e.ward?1.55:1)*U.slowMul*o,c,h;if(e.dashT>0){let p=e.longDash?Wh*1.15:Wh;c=e.ddx*p,h=e.ddz*p}else c=nt.mx*l,h=nt.mz*l;c+=e.vx,h+=e.vz,e.vx*=Math.pow(.02,i),e.vz*=Math.pow(.02,i),Vt.pressed("jump")&&(e.onGround?(e.vy=sp,e.onGround=!1,ut.beep(420,.12,"sine",.08,820),Lt.ring(e.x,e.z,Ft[Yt].accent,1.4,.25,e.y+.06)):e.airJumps>0&&(e.airJumps--,e.vy=rp,e.flipT=Gh,ut.beep(620,.12,"sine",.08,1200),Lt.spawn(e.x,e.y+.2,e.z,Ft[Yt].accent,12,{spd:3,up:-1,size:.45}))),e.flipT=Math.max(0,(e.flipT||0)-i),e.vy-=op*i,e.y+=e.vy*i;let u=Rr(t,e.x,e.z,Mn,c*i,h*i,e.y);e.speed=i>0?Math.hypot(u.x-e.x,u.z-e.z)/i:0,e.x=u.x,e.z=u.z,t.solidCell(Math.floor(e.x/2),Math.floor(e.z/2),e.y)?e.safeX!==void 0&&(e.x=e.safeX,e.z=e.safeZ,e.vx=e.vz=0,e.dashT=0,e.longDash=!1):(e.safeX=e.x,e.safeZ=e.z);let d=Cp(t,e.x,e.z,e.y);e.y<=d?(!e.onGround&&e.vy<-7&&(U.shake(2),Lt.ring(e.x,e.z,"#c8b8a0",1.6,.3,d+.06)),e.y=d,e.vy=0,e.onGround=!0,e.airJumps=1):e.onGround=!1,e.mv=e.dashT>0?1:Math.min(1,a),e.mvx=e.dashT>0?e.ddx:a>.05?nt.mx/a:0,e.mvz=e.dashT>0?e.ddz:a>.05?nt.mz/a:0,e.mv>.05&&Math.random()<i*8&&e.dashT<=0&&e.onGround&&Lt.spawn(e.x-e.mvx*.3,e.y+.1,e.z-e.mvz*.3,"#8a7560",1,{spd:.6,up:.8,size:.3,life:.4}),e.fx+=(nt.aimX-e.fx)*Math.min(1,i*18),e.fz+=(nt.aimZ-e.fz)*Math.min(1,i*18);let f=Math.hypot(e.fx,e.fz)||1;e.fx/=f,e.fz/=f;let x=nt.fire&&e.bladeT<=0;x?(U.run.parryChain>=3&&Vt.pressed("fire")?(U.run=zp(U.run),U.combat.fire(e,"single",Ar,!0),ut.sfx.charged(),Le.flash("GOLD CANNON",re.gold),U.shake(6),U.boss&&U.boss.alive&&U.boss.awake&&(U.boss.stun=1.6,Le.flash("GOLD CANNON \u2014 BOSS STUNNED",re.gold))):e.fireCd<=0&&(e.fireCd=Mt[e.weapon].cd,U.combat.fire(e,e.weapon,e.power,!1),ut.sfx.shoot(e.weapon),Lt.spawn(e.x+e.fx*1.1,1.05,e.z+e.fz*1.1,Mt[e.weapon].col,2,{spd:1.5,up:.6,size:.3,life:.25})),e.charge=Math.min(Ss,e.charge+i),e.charge>=Ss&&!e.charged&&(e.charged=!0,ut.sfx.chargeFull()),e.charge>.3&&Math.random()<i*30&&Lt.spawn(e.x+e.fx*.9+(Math.random()-.5),1.05+(Math.random()-.5),e.z+e.fz*.9+(Math.random()-.5),Mt[e.weapon].col,1,{spd:.2,up:.3,size:.3,life:.3,grav:-3})):e.wasFiring&&(e.charged&&(U.hero.playOnce&&U.hero.playOnce("Spellcast_Shoot",1.8),U.combat.fire(e,e.weapon,e.power,!0),ut.sfx.charged(),Le.flash(pp[e.weapon],Mt[e.weapon].col),U.shake(4),Lt.ring(e.x,e.z,Mt[e.weapon].col,2.6,.35)),e.charge=0,e.charged=!1),e.wasFiring=x,Vt.pressed("fire"),Vt.pressed("blade")?e.bladeQueue=.4:e.bladeQueue>0&&(e.bladeQueue-=i);let m=!!(U.combat.strike&&!U.combat.strike.cutDone);if(e.bladeQueue>0&&e.bladeT<=0&&!m){e.bladeQueue=0;let p=e.bladeWindow>0?(e.bladeN+1)%go:0,_=ti[p];e.bladeN=p,e.bladeT=_.t,e.bladeWindow=Yh+_.t;let v=e.dashT>0||e.dashCd>Xh-.12,y=U.foes.nearestInArc?U.foes.nearestInArc(e,_.arc,_.reach+2.2):null,S=y?y.d-_.reach*.75:1/0,E=tm(S,_.launch?1.5:.9,!!y),w=v?gp:Math.min(4.5,E/Math.max(.12,_.t));e.vx+=e.fx*w,e.vz+=e.fz*w,_.preFreeze&&U.hitstop(_.preFreeze);let I=U.hero.playBlade(p,_.speed,!_.unarmed,{col:_.col,trailLife:_.launch?.34:.22}),b=U.combat.endStrike();b&&!b.hits&&(e.chain=0);let M=sm(e.chain||0);U.combat.beginStrike(p,v,M,su(U.run.pages,e.power),I),ut.sfx.blade(p)}Vt.pressed("swap")&&e.owned.length>1&&(e.weapon=e.owned[(e.owned.indexOf(e.weapon)+1)%e.owned.length],U.hero.setWeaponColor(Mt[e.weapon].col),ut.sfx.ui(),Le.flash(Mt[e.weapon].name,Mt[e.weapon].col)),U.powers.update(i,e,p=>Vt.pressed(p));let g=U.boss;if(g&&g.alive&&!g.awake){let p=t.roomAt(e.x,e.z),_=t.gateCells[0];p&&p.kind==="boss"&&Math.hypot(e.x-(_[0]+.5)*2,e.z-(_[1]+.5)*2)>3.2&&(g.awake=!0,t.sealGate(),U.world.gate.seal(),Le.boss(g.name),Le.bossHp(g.hp,g.max),Le.flash(g.wake,re.hotred),ut.sfx.bossWake(),cn.play("boss"),U.run=Up(U.run),U.combat.clearEnemyShots(),U.shake(8))}}var IE={hilt:new O,tip:new O};function PE(i){let e=U.combat.strike;if(!e)return;let t=!!U.hero.bladeSegment,n=!e.hits,s=U.combat.sweepStrike(i,t?U.hero.bladeSegment(IE):null,!t);if(!s||(U.powers.addMeter("bladeHit",s),!n))return;let r=U.H,o=e.C;r.chain=(r.chain||0)+1,U.hitstop(e.react.hitstop),o.launch?(ut.sfx.berserkHit(),Le.flash(o.name,o.col)):ut.sfx.bladeHit(e.mom),U.shake(o.shake*e.mom),r.chain>=2&&Le.combo(r.chain)}var R0=performance.now();function O0(i){requestAnimationFrame(O0);let e=Math.min(.05,(i-R0)/1e3);R0=i,U0(e)}function U0(i){let e=i;if(bl>0&&(bl-=i,e=i*.08),U.t+=e,Dt==="menu"||Dt==="select"||Dt==="world"||Dt==="codex"){as&&RE(e,U.t),Lt.update(e),Yu();return}if(Dt==="play"){if(Vt.pressed("pause")){Dt="pause",Le.show("pausePop"),cn.duck(!0);return}if(Vt.pressed("mute")&&Ro(ss(Xt,{musicOn:!Xt.musicOn})),Vt.pressed("nexttrack")&&cn.next(),U.run=Op(U.run,e),U.combo.t>0&&(U.combo.t-=e,U.combo.t<=0&&(U.combo.n=0,Le.combo(0))),CE(e),U.foes.update(e),U.boss&&U.boss.update(e),U.world.update(e,U.t,U.H.x,U.H.z),Lt.update(e),U.hero.update(e,U.t,{x:U.H.x,y:U.H.y,air:!U.H.onGround,flip:U.H.flipT>0&&!U.H.onGround?1-U.H.flipT/Gh:0,longDash:!!U.H.longDash,sprint:nt.sprint,z:U.H.z,fx:U.H.fx,fz:U.H.fz,mv:U.H.mv,mvx:U.H.mvx,mvz:U.H.mvz,speed:U.H.speed||0,dashing:U.H.dashT>0,invuln:U.H.invuln,alive:U.H.alive,ward:U.H.ward,charge:U.H.charge/Ss,firing:nt.fire&&U.H.bladeT<=0,parryFlash:U.H.parryFlash}),PE(e),Le.update(e,U.H,U.run,bn[Kt]),To>0&&(To-=e,To<=0)){let p=iu(Kt,U.run.pages);U.run=eu(U.run),nu(Kt,p.id),Le.showPage(p),A0(!0);return}if(zr>0&&(zr-=e,zr<=0)){A0(!1);return}}if(!U.H){Yu();return}let t=U.H;Ur=Math.max(0,Ur-e*22);let n=U.level&&(()=>{let p=U.level.roomAt(t.x,t.z);return p&&p.kind==="boss"})();if(wo+=((n?Ot.bossZoom:1)-wo)*Math.min(1,e*2),nt.orbit&&(Pt.yaw-=nt.orbitDX*.006,Pt.pitch=Math.max(.25,Math.min(1.9,Pt.pitch-nt.orbitDY*.004))),nt.orbitDX=0,nt.orbitDY=0,nt.zoom&&(Pt.dist=Math.max(.35,Math.min(1.8,Pt.dist*(1+nt.zoom*.08))),nt.zoom=0),Vt.pressed("camreset")&&(Pt.yaw=0,Pt.pitch=1,Pt.dist=1,Le.flash("CAMERA RESET",re.cyan)),$u){$u=!1,So=0,rs=1,Pt.yaw=0,Ps=t.fx*1.2,Ls=t.fz*1.2,_l=t.x+Ps,yl=Ot.lookHeight+t.y*.8,vl=t.z+Ls;let p=Ot.off[2]*Pt.dist,_=Ot.off[1]*Pt.dist*Pt.pitch;mn.position.set(t.x+Ot.off[0]+Ps,t.y*.75+_,t.z+p+Ls)}let r=!nt.orbit&&xl<=0?Ut&&U.level?mm(Pt.yaw,pm(t.x,t.z,Ut.x,Ut.z,Ju()-Pt.yaw),In.maxYawRate):qp(t.mvx,t.mvz,Ju(),t.mv):0;So=ji(So,r,In.yawAccel,e),nt.orbit&&(So=0),Pt.yaw+=So*e,nt.orbit?xl=1.6:xl>0&&(xl-=e);let o=nt.orbit?0:1.2;Ps=ji(Ps,t.fx*o,In.leadFollow,e),Ls=ji(Ls,t.fz*o,In.leadFollow,e);let a=Ot.off[0],l=Ot.off[2]*wo*Pt.dist,c=Ot.off[1]*wo*Pt.dist*Pt.pitch,h=Math.sin(Pt.yaw),u=Math.cos(Pt.yaw),d=u*a+h*l,f=-h*a+u*l,x=1;if(U.level&&!nt.orbit){let p=t.y+1.2;for(;x>.3&&ws(U.level,t.x,t.z,t.x+d*x,t.z+f*x,p);)x-=.04;Math.hypot(d,f)*x<Ot.minDist&&(x=Math.max(x,Ot.minDist/(Math.hypot(d,f)||1)))}rs=ji(rs,x,x<rs?In.pullInRate:In.pullOutRate,e);let m=(1-rs)*1.1;El.set(t.x+d*rs+Ps,t.y*.75+c*(.55+.45*rs)+m,t.z+f*rs+Ls);let g=1-Math.exp(-(nt.orbit?14:In.follow)*e);mn.position.lerp(El,g),_l=ji(_l,t.x+Ps,In.lookFollow,e),yl=ji(yl,Ot.lookHeight+t.y*.8,In.lookFollow,e),vl=ji(vl,t.z+Ls,In.lookFollow,e),w0.set(_l+(Math.random()-.5)*Ur*.08,yl+(Math.random()-.5)*Ur*.08,vl),mn.lookAt(w0),Yu()}function Qu(){N0(),as||TE(),Dt="menu",Le.show("menu"),Le.hideBoss(),cn.moment&&cn.play("menu")}yt("start").onclick=()=>{ut.init(),ut.sfx.ui(),cn.play("menu"),Dt="select",Le.renderSelect(Yt),Le.show("select")};yt("codexBtn").onclick=()=>{ut.init(),Le.renderCodex(),Dt="codex",Le.show("codexPop")};yt("cxBack").onclick=()=>{Dt="menu",Le.show("menu")};document.querySelectorAll(".selcard.hero[data-hero]").forEach(i=>{i.onclick=()=>{Yt=i.dataset.hero,Le.renderSelect(Yt),ut.sfx.ui()}});yt("confirm").onclick=()=>{Dt="world",Le.renderWorlds(Kt,P0()),Le.show("worldSel")};yt("wrow").onclick=i=>{let e=i.target.closest(".wcard");!e||e.classList.contains("locked")||(Kt=e.dataset.w,Le.renderWorlds(Kt,P0()),ut.sfx.ui())};yt("wconfirm").onclick=()=>{ut.init(),Ao(Kt,Yt)};yt("backSel").onclick=()=>{Dt="select",Le.show("select")};yt("resume").onclick=()=>{Dt="play",Le.show(null),Vt.clearEdges(),cn.duck(!1)};yt("quit").onclick=()=>Qu();yt("again").onclick=()=>Ao(Kt,Yt);yt("nextWorld").onclick=()=>{let i=ni.indexOf(Kt);Ao(ni[Math.min(i+1,ni.length-1)],Yt)};yt("toMenu").onclick=()=>Qu();yt("pauseBtn").onclick=()=>{Dt==="play"&&(Dt="pause",Le.show("pausePop"),cn.duck(!0))};yt("muteBtn").onclick=()=>Ro(ss(Xt,{musicOn:!Xt.musicOn}));yt("sfxBtn").onclick=()=>Ro(ss(Xt,{sfxOn:!Xt.sfxOn}));window.addEventListener("keydown",i=>{i.code==="KeyP"&&Dt==="pause"&&(Dt="play",Le.show(null),Vt.clearEdges(),cn.duck(!1)),i.code==="KeyN"&&Dt!=="play"&&cn.next()});window.__unerased={G:U,ready:!1,get mode(){return Dt},step:i=>U0(i),start:(i,e)=>Ao(i||Kt,e||Yt),warp:i=>{Ao(i||Kt,Yt);let e=U.level.gateCells[0];U.H.x=(e[0]+.5)*2,U.H.z=(e[1]+.5)*2+3,mn.position.set(U.H.x,Ot.off[1],U.H.z+Ot.off[2])},toBoss:()=>{let i=U.level.gateCells[0];U.H.x=(i[0]+.5)*2,U.H.z=(i[1]+.5)*2-6},snapshot:()=>({mode:Dt,world:Kt,hero:Yt,H:U.H&&{x:U.H.x,y:U.H.y,onGround:U.H.onGround,z:U.H.z,lives:U.H.lives,weapon:U.H.weapon,alive:U.H.alive},foes:U.foes&&U.foes.aliveCount(),boss:U.boss&&{awake:U.boss.awake,hp:U.boss.hp,alive:U.boss.alive},run:U.run,fx:Lt.count}),press:i=>Vt.press(i),IN:nt,music:cn,get lock(){return Ut},get viewYaw(){return Pt.yaw},combo:()=>U.combo,fillMeter:()=>{U.powers&&(U.powers.meter=100)},setMeter:i=>{U.powers&&(U.powers.meter=i)}};var z0=yt("start"),Ku=yt("loadLine");z0.disabled=!0;Qm(i=>{Ku.textContent=`SUMMONING THE WARRIORS \xB7 ${Math.round(i*100)}%`}).then(i=>{U.assets=i,Ku.textContent=i.missing.length?"READY \xB7 missing: "+i.missing.join(", "):""}).catch(i=>{U.assets=null,Ku.textContent="READY (classic models) \xB7 "+i.message}).finally(()=>{z0.disabled=!1,Qu(),window.__unerased.ready=!0});requestAnimationFrame(O0);})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
