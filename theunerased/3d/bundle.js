(()=>{var _h="170";var m0=0,sd=1,g0=2;var wf=1,yh=2,pi=3,$n=0,jt=1,mt=2,Zn=0,nr=1,ht=2,rd=3,od=4,x0=5,ms=100,_0=101,y0=102,v0=103,M0=104,b0=200,E0=201,S0=202,w0=203,sc=204,rc=205,T0=206,A0=207,R0=208,C0=209,I0=210,P0=211,L0=212,D0=213,N0=214,oc=0,ac=1,lc=2,or=3,cc=4,hc=5,uc=6,dc=7,Tf=0,U0=1,O0=2,zi=0,vh=1,Mh=2,bh=3,uo=4,z0=5,Eh=6,Sh=7,ad="attached",F0="detached",Af=300,ar=301,lr=302,fc=303,pc=304,ka=306,un=1e3,mi=1001,no=1002,Qt=1003,wh=1004;var js=1005;var hn=1006,jr=1007;var Sn=1008;var _i=1009,Rf=1010,Cf=1011,io=1012,Th=1013,xs=1014,Fn=1015,Bn=1016,Ah=1017,Rh=1018,cr=1020,If=35902,Pf=1021,Lf=1022,wn=1023,Df=1024,Nf=1025,ir=1026,hr=1027,Ch=1028,Ih=1029,Uf=1030,Ph=1031;var Lh=1033,ra=33776,oa=33777,aa=33778,la=33779,mc=35840,gc=35841,xc=35842,_c=35843,yc=36196,vc=37492,Mc=37496,bc=37808,Ec=37809,Sc=37810,wc=37811,Tc=37812,Ac=37813,Rc=37814,Cc=37815,Ic=37816,Pc=37817,Lc=37818,Dc=37819,Nc=37820,Uc=37821,ca=36492,Oc=36494,zc=36495,Of=36283,Fc=36284,kc=36285,Bc=36286,Dh=2200,Nh=2201,k0=2202,ur=2300,dr=2301,wl=2302,Qs=2400,er=2401,ha=2402,Uh=2500,B0=2501,zf=0,Ba=1,fo=2,H0=3200,V0=3201;var Ff=0,G0=1,Ni="",pt="srgb",tn="srgb-linear",Ha="linear",ft="srgb";var Ds=7680;var ld=519,W0=512,X0=513,Y0=514,kf=515,q0=516,K0=517,Z0=518,$0=519,Hc=35044;var cd="300 es",gi=2e3,ua=2001,yi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],hd=1234567,Qr=Math.PI/180,fr=180/Math.PI;function kn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Zt[i&255]+Zt[i>>8&255]+Zt[i>>16&255]+Zt[i>>24&255]+"-"+Zt[e&255]+Zt[e>>8&255]+"-"+Zt[e>>16&15|64]+Zt[e>>24&255]+"-"+Zt[t&63|128]+Zt[t>>8&255]+"-"+Zt[t>>16&255]+Zt[t>>24&255]+Zt[n&255]+Zt[n>>8&255]+Zt[n>>16&255]+Zt[n>>24&255]).toLowerCase()}function Jt(i,e,t){return Math.max(e,Math.min(t,i))}function Oh(i,e){return(i%e+e)%e}function J0(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function j0(i,e,t){return i!==e?(t-i)/(e-i):0}function eo(i,e,t){return(1-t)*i+t*e}function Q0(i,e,t,n){return eo(i,e,1-Math.exp(-t*n))}function eg(i,e=1){return e-Math.abs(Oh(i,e*2)-e)}function tg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function ng(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function ig(i,e){return i+Math.floor(Math.random()*(e-i+1))}function sg(i,e){return i+Math.random()*(e-i)}function rg(i){return i*(.5-Math.random())}function og(i){i!==void 0&&(hd=i);let e=hd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ag(i){return i*Qr}function lg(i){return i*fr}function cg(i){return(i&i-1)===0&&i!==0}function hg(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ug(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function dg(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),x=o((n-e)/2);switch(s){case"XYX":i.set(a*h,l*u,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*x,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*x,a*c);break;case"ZYZ":i.set(l*x,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function zn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function _t(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Bf={DEG2RAD:Qr,RAD2DEG:fr,generateUUID:kn,clamp:Jt,euclideanModulo:Oh,mapLinear:J0,inverseLerp:j0,lerp:eo,damp:Q0,pingpong:eg,smoothstep:tg,smootherstep:ng,randInt:ig,randFloat:sg,randFloatSpread:rg,seededRandom:og,degToRad:ag,radToDeg:lg,isPowerOfTwo:cg,ceilPowerOfTwo:hg,floorPowerOfTwo:ug,setQuaternionFromProperEuler:dg,normalize:_t,denormalize:zn},we=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Jt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ze=class i{constructor(e,t,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],x=n[8],p=s[0],g=s[3],m=s[6],v=s[1],b=s[4],M=s[7],w=s[2],S=s[5],T=s[8];return r[0]=o*p+a*v+l*w,r[3]=o*g+a*b+l*S,r[6]=o*m+a*M+l*T,r[1]=c*p+h*v+u*w,r[4]=c*g+h*b+u*S,r[7]=c*m+h*M+u*T,r[2]=d*p+f*v+x*w,r[5]=d*g+f*b+x*S,r[8]=d*m+f*M+x*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,x=t*u+n*d+s*f;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let p=1/x;return e[0]=u*p,e[1]=(s*c-h*n)*p,e[2]=(a*n-s*o)*p,e[3]=d*p,e[4]=(h*t-s*l)*p,e[5]=(s*r-a*t)*p,e[6]=f*p,e[7]=(n*l-c*t)*p,e[8]=(o*t-n*r)*p,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Tl.makeScale(e,t)),this}rotate(e){return this.premultiply(Tl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Tl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Tl=new Ze;function Hf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function so(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function fg(){let i=so("canvas");return i.style.display="block",i}var ud={};function $r(i){i in ud||(ud[i]=!0,console.warn(i))}function pg(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function mg(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function gg(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var Qe={enabled:!0,workingColorSpace:tn,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===ft&&(i.r=xi(i.r),i.g=xi(i.g),i.b=xi(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===ft&&(i.r=sr(i.r),i.g=sr(i.g),i.b=sr(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ni?Ha:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function xi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function sr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var dd=[.64,.33,.3,.6,.15,.06],fd=[.2126,.7152,.0722],pd=[.3127,.329],md=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gd=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Qe.define({[tn]:{primaries:dd,whitePoint:pd,transfer:Ha,toXYZ:md,fromXYZ:gd,luminanceCoefficients:fd,workingColorSpaceConfig:{unpackColorSpace:pt},outputColorSpaceConfig:{drawingBufferColorSpace:pt}},[pt]:{primaries:dd,whitePoint:pd,transfer:ft,toXYZ:md,fromXYZ:gd,luminanceCoefficients:fd,outputColorSpaceConfig:{drawingBufferColorSpace:pt}}});var Ns,Vc=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ns===void 0&&(Ns=so("canvas")),Ns.width=e.width,Ns.height=e.height;let n=Ns.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ns}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=so("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=xi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(xi(t[n]/255)*255):t[n]=xi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},xg=0,da=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xg++}),this.uuid=kn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Al(s[o].image)):r.push(Al(s[o]))}else r=Al(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Al(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Vc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var _g=0,Vt=class i extends yi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=mi,s=mi,r=hn,o=Sn,a=wn,l=_i,c=i.DEFAULT_ANISOTROPY,h=Ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_g++}),this.uuid=kn(),this.name="",this.source=new da(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new we(0,0),this.repeat=new we(1,1),this.center=new we(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Af)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case un:e.x=e.x-Math.floor(e.x);break;case mi:e.x=e.x<0?0:1;break;case no:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case un:e.y=e.y-Math.floor(e.y);break;case mi:e.y=e.y<0?0:1;break;case no:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Vt.DEFAULT_IMAGE=null;Vt.DEFAULT_MAPPING=Af;Vt.DEFAULT_ANISOTROPY=1;var ct=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],x=l[9],p=l[2],g=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-p)<.01&&Math.abs(x-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+p)<.1&&Math.abs(x+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(c+1)/2,M=(f+1)/2,w=(m+1)/2,S=(h+d)/4,T=(u+p)/4,I=(x+g)/4;return b>M&&b>w?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=S/n,r=T/n):M>w?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=S/s,r=I/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=T/r,s=I/r),this.set(n,s,r,t),this}let v=Math.sqrt((g-x)*(g-x)+(u-p)*(u-p)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(g-x)/v,this.y=(u-p)/v,this.z=(d-h)/v,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Gc=class extends yi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ct(0,0,e,t),this.scissorTest=!1,this.viewport=new ct(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Vt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new da(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},rn=class extends Gc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},fa=class extends Vt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Wc=class extends Vt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var At=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],f=r[o+1],x=r[o+2],p=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=x,e[t+3]=p;return}if(u!==p||l!==d||c!==f||h!==x){let g=1-a,m=l*d+c*f+h*x+u*p,v=m>=0?1:-1,b=1-m*m;if(b>Number.EPSILON){let w=Math.sqrt(b),S=Math.atan2(w,m*v);g=Math.sin(g*S)/w,a=Math.sin(a*S)/w}let M=a*v;if(l=l*g+d*M,c=c*g+f*M,h=h*g+x*M,u=u*g+p*M,g===1-a){let w=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=w,c*=w,h*=w,u*=w}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],x=r[o+3];return e[t]=a*x+h*u+l*f-c*d,e[t+1]=l*x+h*d+c*u-a*f,e[t+2]=c*x+h*f+a*d-l*u,e[t+3]=h*x-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),f=l(s/2),x=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*x,this._y=c*f*u-d*h*x,this._z=c*h*x+d*f*u,this._w=c*h*u-d*f*x;break;case"YXZ":this._x=d*h*u+c*f*x,this._y=c*f*u-d*h*x,this._z=c*h*x-d*f*u,this._w=c*h*u+d*f*x;break;case"ZXY":this._x=d*h*u-c*f*x,this._y=c*f*u+d*h*x,this._z=c*h*x+d*f*u,this._w=c*h*u-d*f*x;break;case"ZYX":this._x=d*h*u-c*f*x,this._y=c*f*u+d*h*x,this._z=c*h*x-d*f*u,this._w=c*h*u+d*f*x;break;case"YZX":this._x=d*h*u+c*f*x,this._y=c*f*u+d*h*x,this._z=c*h*x-d*f*u,this._w=c*h*u-d*f*x;break;case"XZY":this._x=d*h*u-c*f*x,this._y=c*f*u-d*h*x,this._z=c*h*x+d*f*u,this._w=c*h*u+d*f*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Jt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},N=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(xd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(xd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Rl.copy(this).projectOnVector(e),this.sub(Rl)}reflect(e){return this.sub(Rl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Jt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Rl=new N,xd=new At,Yt=class{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Dn):Dn.fromBufferAttribute(r,o),Dn.applyMatrix4(e.matrixWorld),this.expandByPoint(Dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Co.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Co.copy(n.boundingBox)),Co.applyMatrix4(e.matrixWorld),this.union(Co)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Dn),Dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(kr),Io.subVectors(this.max,kr),Us.subVectors(e.a,kr),Os.subVectors(e.b,kr),zs.subVectors(e.c,kr),Ri.subVectors(Os,Us),Ci.subVectors(zs,Os),ls.subVectors(Us,zs);let t=[0,-Ri.z,Ri.y,0,-Ci.z,Ci.y,0,-ls.z,ls.y,Ri.z,0,-Ri.x,Ci.z,0,-Ci.x,ls.z,0,-ls.x,-Ri.y,Ri.x,0,-Ci.y,Ci.x,0,-ls.y,ls.x,0];return!Cl(t,Us,Os,zs,Io)||(t=[1,0,0,0,1,0,0,0,1],!Cl(t,Us,Os,zs,Io))?!1:(Po.crossVectors(Ri,Ci),t=[Po.x,Po.y,Po.z],Cl(t,Us,Os,zs,Io))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},li=[new N,new N,new N,new N,new N,new N,new N,new N],Dn=new N,Co=new Yt,Us=new N,Os=new N,zs=new N,Ri=new N,Ci=new N,ls=new N,kr=new N,Io=new N,Po=new N,cs=new N;function Cl(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){cs.fromArray(i,r);let a=s.x*Math.abs(cs.x)+s.y*Math.abs(cs.y)+s.z*Math.abs(cs.z),l=e.dot(cs),c=t.dot(cs),h=n.dot(cs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var yg=new Yt,Br=new N,Il=new N,on=class{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):yg.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Br.subVectors(e,this.center);let t=Br.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Br,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Il.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Br.copy(e.center).add(Il)),this.expandByPoint(Br.copy(e.center).sub(Il))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},ci=new N,Pl=new N,Lo=new N,Ii=new N,Ll=new N,Do=new N,Dl=new N,_s=class{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ci)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ci.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ci.copy(this.origin).addScaledVector(this.direction,t),ci.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Pl.copy(e).add(t).multiplyScalar(.5),Lo.copy(t).sub(e).normalize(),Ii.copy(this.origin).sub(Pl);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Lo),a=Ii.dot(this.direction),l=-Ii.dot(Lo),c=Ii.lengthSq(),h=Math.abs(1-o*o),u,d,f,x;if(h>0)if(u=o*l-a,d=o*a-l,x=r*h,u>=0)if(d>=-x)if(d<=x){let p=1/h;u*=p,d*=p,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-x?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=x?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Pl).addScaledVector(Lo,d),f}intersectSphere(e,t){ci.subVectors(e.center,this.origin);let n=ci.dot(this.direction),s=ci.dot(ci)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ci)!==null}intersectTriangle(e,t,n,s,r){Ll.subVectors(t,e),Do.subVectors(n,e),Dl.crossVectors(Ll,Do);let o=this.direction.dot(Dl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ii.subVectors(this.origin,e);let l=a*this.direction.dot(Do.crossVectors(Ii,Do));if(l<0)return null;let c=a*this.direction.dot(Ll.cross(Ii));if(c<0||l+c>o)return null;let h=-a*Ii.dot(Dl);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ge=class i{constructor(e,t,n,s,r,o,a,l,c,h,u,d,f,x,p,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,u,d,f,x,p,g)}set(e,t,n,s,r,o,a,l,c,h,u,d,f,x,p,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=x,m[11]=p,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Fs.setFromMatrixColumn(e,0).length(),r=1/Fs.setFromMatrixColumn(e,1).length(),o=1/Fs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,f=o*u,x=a*h,p=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+x*c,t[5]=d-p*c,t[9]=-a*l,t[2]=p-d*c,t[6]=x+f*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,x=c*h,p=c*u;t[0]=d+p*a,t[4]=x*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-x,t[6]=p+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,x=c*h,p=c*u;t[0]=d-p*a,t[4]=-o*u,t[8]=x+f*a,t[1]=f+x*a,t[5]=o*h,t[9]=p-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*h,f=o*u,x=a*h,p=a*u;t[0]=l*h,t[4]=x*c-f,t[8]=d*c+p,t[1]=l*u,t[5]=p*c+d,t[9]=f*c-x,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,f=o*c,x=a*l,p=a*c;t[0]=l*h,t[4]=p-d*u,t[8]=x*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+x,t[10]=d-p*u}else if(e.order==="XZY"){let d=o*l,f=o*c,x=a*l,p=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+p,t[5]=o*h,t[9]=f*u-x,t[2]=x*u-f,t[6]=a*h,t[10]=p*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vg,e,Mg)}lookAt(e,t,n){let s=this.elements;return gn.subVectors(e,t),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),Pi.crossVectors(n,gn),Pi.lengthSq()===0&&(Math.abs(n.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),Pi.crossVectors(n,gn)),Pi.normalize(),No.crossVectors(gn,Pi),s[0]=Pi.x,s[4]=No.x,s[8]=gn.x,s[1]=Pi.y,s[5]=No.y,s[9]=gn.y,s[2]=Pi.z,s[6]=No.z,s[10]=gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],x=n[2],p=n[6],g=n[10],m=n[14],v=n[3],b=n[7],M=n[11],w=n[15],S=s[0],T=s[4],I=s[8],_=s[12],y=s[1],A=s[5],U=s[9],E=s[13],C=s[2],z=s[6],O=s[10],B=s[14],k=s[3],$=s[7],W=s[11],Z=s[15];return r[0]=o*S+a*y+l*C+c*k,r[4]=o*T+a*A+l*z+c*$,r[8]=o*I+a*U+l*O+c*W,r[12]=o*_+a*E+l*B+c*Z,r[1]=h*S+u*y+d*C+f*k,r[5]=h*T+u*A+d*z+f*$,r[9]=h*I+u*U+d*O+f*W,r[13]=h*_+u*E+d*B+f*Z,r[2]=x*S+p*y+g*C+m*k,r[6]=x*T+p*A+g*z+m*$,r[10]=x*I+p*U+g*O+m*W,r[14]=x*_+p*E+g*B+m*Z,r[3]=v*S+b*y+M*C+w*k,r[7]=v*T+b*A+M*z+w*$,r[11]=v*I+b*U+M*O+w*W,r[15]=v*_+b*E+M*B+w*Z,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],x=e[3],p=e[7],g=e[11],m=e[15];return x*(+r*l*u-s*c*u-r*a*d+n*c*d+s*a*f-n*l*f)+p*(+t*l*f-t*c*d+r*o*d-s*o*f+s*c*h-r*l*h)+g*(+t*c*u-t*a*f-r*o*u+n*o*f+r*a*h-n*c*h)+m*(-s*a*h-t*l*u+t*a*d+s*o*u-n*o*d+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],x=e[12],p=e[13],g=e[14],m=e[15],v=u*g*c-p*d*c+p*l*f-a*g*f-u*l*m+a*d*m,b=x*d*c-h*g*c-x*l*f+o*g*f+h*l*m-o*d*m,M=h*p*c-x*u*c+x*a*f-o*p*f-h*a*m+o*u*m,w=x*u*l-h*p*l-x*a*d+o*p*d+h*a*g-o*u*g,S=t*v+n*b+s*M+r*w;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/S;return e[0]=v*T,e[1]=(p*d*r-u*g*r-p*s*f+n*g*f+u*s*m-n*d*m)*T,e[2]=(a*g*r-p*l*r+p*s*c-n*g*c-a*s*m+n*l*m)*T,e[3]=(u*l*r-a*d*r-u*s*c+n*d*c+a*s*f-n*l*f)*T,e[4]=b*T,e[5]=(h*g*r-x*d*r+x*s*f-t*g*f-h*s*m+t*d*m)*T,e[6]=(x*l*r-o*g*r-x*s*c+t*g*c+o*s*m-t*l*m)*T,e[7]=(o*d*r-h*l*r+h*s*c-t*d*c-o*s*f+t*l*f)*T,e[8]=M*T,e[9]=(x*u*r-h*p*r-x*n*f+t*p*f+h*n*m-t*u*m)*T,e[10]=(o*p*r-x*a*r+x*n*c-t*p*c-o*n*m+t*a*m)*T,e[11]=(h*a*r-o*u*r-h*n*c+t*u*c+o*n*f-t*a*f)*T,e[12]=w*T,e[13]=(h*p*s-x*u*s+x*n*d-t*p*d-h*n*g+t*u*g)*T,e[14]=(x*a*s-o*p*s-x*n*l+t*p*l+o*n*g-t*a*g)*T,e[15]=(o*u*s-h*a*s+h*n*l-t*u*l-o*n*d+t*a*d)*T,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,x=r*u,p=o*h,g=o*u,m=a*u,v=l*c,b=l*h,M=l*u,w=n.x,S=n.y,T=n.z;return s[0]=(1-(p+m))*w,s[1]=(f+M)*w,s[2]=(x-b)*w,s[3]=0,s[4]=(f-M)*S,s[5]=(1-(d+m))*S,s[6]=(g+v)*S,s[7]=0,s[8]=(x+b)*T,s[9]=(g-v)*T,s[10]=(1-(d+p))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Fs.set(s[0],s[1],s[2]).length(),o=Fs.set(s[4],s[5],s[6]).length(),a=Fs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Nn.copy(this);let c=1/r,h=1/o,u=1/a;return Nn.elements[0]*=c,Nn.elements[1]*=c,Nn.elements[2]*=c,Nn.elements[4]*=h,Nn.elements[5]*=h,Nn.elements[6]*=h,Nn.elements[8]*=u,Nn.elements[9]*=u,Nn.elements[10]*=u,t.setFromRotationMatrix(Nn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=gi){let l=this.elements,c=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s),f,x;if(a===gi)f=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===ua)f=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=gi){let l=this.elements,c=1/(t-e),h=1/(n-s),u=1/(o-r),d=(t+e)*c,f=(n+s)*h,x,p;if(a===gi)x=(o+r)*u,p=-2*u;else if(a===ua)x=r*u,p=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=p,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Fs=new N,Nn=new Ge,vg=new N(0,0,0),Mg=new N(1,1,1),Pi=new N,No=new N,gn=new N,_d=new Ge,yd=new At,Jn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Jt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Jt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return _d.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_d,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return yd.setFromEuler(this),this.setFromQuaternion(yd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Jn.DEFAULT_ORDER="XYZ";var ro=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},bg=0,vd=new N,ks=new At,hi=new Ge,Uo=new N,Hr=new N,Eg=new N,Sg=new At,Md=new N(1,0,0),bd=new N(0,1,0),Ed=new N(0,0,1),Sd={type:"added"},wg={type:"removed"},Bs={type:"childadded",child:null},Nl={type:"childremoved",child:null},Rt=class i extends yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bg++}),this.uuid=kn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new N,t=new Jn,n=new At,s=new N(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ge},normalMatrix:{value:new Ze}}),this.matrix=new Ge,this.matrixWorld=new Ge,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ro,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ks.setFromAxisAngle(e,t),this.quaternion.multiply(ks),this}rotateOnWorldAxis(e,t){return ks.setFromAxisAngle(e,t),this.quaternion.premultiply(ks),this}rotateX(e){return this.rotateOnAxis(Md,e)}rotateY(e){return this.rotateOnAxis(bd,e)}rotateZ(e){return this.rotateOnAxis(Ed,e)}translateOnAxis(e,t){return vd.copy(e).applyQuaternion(this.quaternion),this.position.add(vd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Md,e)}translateY(e){return this.translateOnAxis(bd,e)}translateZ(e){return this.translateOnAxis(Ed,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Uo.copy(e):Uo.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Hr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hi.lookAt(Hr,Uo,this.up):hi.lookAt(Uo,Hr,this.up),this.quaternion.setFromRotationMatrix(hi),s&&(hi.extractRotation(s.matrixWorld),ks.setFromRotationMatrix(hi),this.quaternion.premultiply(ks.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Sd),Bs.child=e,this.dispatchEvent(Bs),Bs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(wg),Nl.child=e,this.dispatchEvent(Nl),Nl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hi.multiply(e.parent.matrixWorld)),e.applyMatrix4(hi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Sd),Bs.child=e,this.dispatchEvent(Bs),Bs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hr,e,Eg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hr,Sg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),x=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),x.length>0&&(n.nodes=x)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Rt.DEFAULT_UP=new N(0,1,0);Rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Un=new N,ui=new N,Ul=new N,di=new N,Hs=new N,Vs=new N,wd=new N,Ol=new N,zl=new N,Fl=new N,kl=new ct,Bl=new ct,Hl=new ct,Ui=class i{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Un.subVectors(e,t),s.cross(Un);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Un.subVectors(s,t),ui.subVectors(n,t),Ul.subVectors(e,t);let o=Un.dot(Un),a=Un.dot(ui),l=Un.dot(Ul),c=ui.dot(ui),h=ui.dot(Ul),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,x=(o*h-a*l)*d;return r.set(1-f-x,x,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,di)===null?!1:di.x>=0&&di.y>=0&&di.x+di.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,di.x),l.addScaledVector(o,di.y),l.addScaledVector(a,di.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return kl.setScalar(0),Bl.setScalar(0),Hl.setScalar(0),kl.fromBufferAttribute(e,t),Bl.fromBufferAttribute(e,n),Hl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(kl,r.x),o.addScaledVector(Bl,r.y),o.addScaledVector(Hl,r.z),o}static isFrontFacing(e,t,n,s){return Un.subVectors(n,t),ui.subVectors(e,t),Un.cross(ui).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Un.subVectors(this.c,this.b),ui.subVectors(this.a,this.b),Un.cross(ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Hs.subVectors(s,n),Vs.subVectors(r,n),Ol.subVectors(e,n);let l=Hs.dot(Ol),c=Vs.dot(Ol);if(l<=0&&c<=0)return t.copy(n);zl.subVectors(e,s);let h=Hs.dot(zl),u=Vs.dot(zl);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Hs,o);Fl.subVectors(e,r);let f=Hs.dot(Fl),x=Vs.dot(Fl);if(x>=0&&f<=x)return t.copy(r);let p=f*c-l*x;if(p<=0&&c>=0&&x<=0)return a=c/(c-x),t.copy(n).addScaledVector(Vs,a);let g=h*x-f*u;if(g<=0&&u-h>=0&&f-x>=0)return wd.subVectors(r,s),a=(u-h)/(u-h+(f-x)),t.copy(s).addScaledVector(wd,a);let m=1/(g+p+d);return o=p*m,a=d*m,t.copy(n).addScaledVector(Hs,o).addScaledVector(Vs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Vf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Li={h:0,s:0,l:0},Oo={h:0,s:0,l:0};function Vl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var be=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Qe.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Qe.workingColorSpace){if(e=Oh(e,1),t=Jt(t,0,1),n=Jt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Vl(o,r,e+1/3),this.g=Vl(o,r,e),this.b=Vl(o,r,e-1/3)}return Qe.toWorkingColorSpace(this,s),this}setStyle(e,t=pt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=pt){let n=Vf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xi(e.r),this.g=xi(e.g),this.b=xi(e.b),this}copyLinearToSRGB(e){return this.r=sr(e.r),this.g=sr(e.g),this.b=sr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pt){return Qe.fromWorkingColorSpace($t.copy(this),e),Math.round(Jt($t.r*255,0,255))*65536+Math.round(Jt($t.g*255,0,255))*256+Math.round(Jt($t.b*255,0,255))}getHexString(e=pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.fromWorkingColorSpace($t.copy(this),t);let n=$t.r,s=$t.g,r=$t.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Qe.workingColorSpace){return Qe.fromWorkingColorSpace($t.copy(this),t),e.r=$t.r,e.g=$t.g,e.b=$t.b,e}getStyle(e=pt){Qe.fromWorkingColorSpace($t.copy(this),e);let t=$t.r,n=$t.g,s=$t.b;return e!==pt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Li),this.setHSL(Li.h+e,Li.s+t,Li.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Li),e.getHSL(Oo);let n=eo(Li.h,Oo.h,t),s=eo(Li.s,Oo.s,t),r=eo(Li.l,Oo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},$t=new be;be.NAMES=Vf;var Tg=0,dn=class extends yi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tg++}),this.uuid=kn(),this.name="",this.blending=nr,this.side=$n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sc,this.blendDst=rc,this.blendEquation=ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new be(0,0,0),this.blendAlpha=0,this.depthFunc=or,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ld,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ds,this.stencilZFail=Ds,this.stencilZPass=Ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==nr&&(n.blending=this.blending),this.side!==$n&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==sc&&(n.blendSrc=this.blendSrc),this.blendDst!==rc&&(n.blendDst=this.blendDst),this.blendEquation!==ms&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==or&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ld&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ds&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ds&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ds&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},We=class extends dn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.combine=Tf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Nt=new N,zo=new we,et=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Hc,this.updateRanges=[],this.gpuType=Fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)zo.fromBufferAttribute(this,t),zo.applyMatrix3(e),this.setXY(t,zo.x,zo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix3(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=zn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=_t(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=zn(t,this.array)),t}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=zn(t,this.array)),t}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=zn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=zn(t,this.array)),t}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),s=_t(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),s=_t(s,this.array),r=_t(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Hc&&(e.usage=this.usage),e}};var pr=class extends et{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var pa=class extends et{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var nt=class extends et{constructor(e,t,n){super(new Float32Array(e),t,n)}},Ag=0,En=new Ge,Gl=new Rt,Gs=new N,xn=new Yt,Vr=new Yt,Ht=new N,lt=class i extends yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ag++}),this.uuid=kn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Hf(e)?pa:pr)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ze().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return En.makeRotationFromQuaternion(e),this.applyMatrix4(En),this}rotateX(e){return En.makeRotationX(e),this.applyMatrix4(En),this}rotateY(e){return En.makeRotationY(e),this.applyMatrix4(En),this}rotateZ(e){return En.makeRotationZ(e),this.applyMatrix4(En),this}translate(e,t,n){return En.makeTranslation(e,t,n),this.applyMatrix4(En),this}scale(e,t,n){return En.makeScale(e,t,n),this.applyMatrix4(En),this}lookAt(e){return Gl.lookAt(e),Gl.updateMatrix(),this.applyMatrix4(Gl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gs).negate(),this.translate(Gs.x,Gs.y,Gs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new nt(n,3))}else{for(let n=0,s=t.count;n<s;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];xn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new on);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){let n=this.boundingSphere.center;if(xn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Vr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ht.addVectors(xn.min,Vr.min),xn.expandByPoint(Ht),Ht.addVectors(xn.max,Vr.max),xn.expandByPoint(Ht)):(xn.expandByPoint(Vr.min),xn.expandByPoint(Vr.max))}xn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Ht.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Ht));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ht.fromBufferAttribute(a,c),l&&(Gs.fromBufferAttribute(e,c),Ht.add(Gs)),s=Math.max(s,n.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new et(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<n.count;I++)a[I]=new N,l[I]=new N;let c=new N,h=new N,u=new N,d=new we,f=new we,x=new we,p=new N,g=new N;function m(I,_,y){c.fromBufferAttribute(n,I),h.fromBufferAttribute(n,_),u.fromBufferAttribute(n,y),d.fromBufferAttribute(r,I),f.fromBufferAttribute(r,_),x.fromBufferAttribute(r,y),h.sub(c),u.sub(c),f.sub(d),x.sub(d);let A=1/(f.x*x.y-x.x*f.y);isFinite(A)&&(p.copy(h).multiplyScalar(x.y).addScaledVector(u,-f.y).multiplyScalar(A),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-x.x).multiplyScalar(A),a[I].add(p),a[_].add(p),a[y].add(p),l[I].add(g),l[_].add(g),l[y].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let I=0,_=v.length;I<_;++I){let y=v[I],A=y.start,U=y.count;for(let E=A,C=A+U;E<C;E+=3)m(e.getX(E+0),e.getX(E+1),e.getX(E+2))}let b=new N,M=new N,w=new N,S=new N;function T(I){w.fromBufferAttribute(s,I),S.copy(w);let _=a[I];b.copy(_),b.sub(w.multiplyScalar(w.dot(_))).normalize(),M.crossVectors(S,_);let A=M.dot(l[I])<0?-1:1;o.setXYZW(I,b.x,b.y,b.z,A)}for(let I=0,_=v.length;I<_;++I){let y=v[I],A=y.start,U=y.count;for(let E=A,C=A+U;E<C;E+=3)T(e.getX(E+0)),T(e.getX(E+1)),T(e.getX(E+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new et(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new N,r=new N,o=new N,a=new N,l=new N,c=new N,h=new N,u=new N;if(e)for(let d=0,f=e.count;d<f;d+=3){let x=e.getX(d+0),p=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,p),o.fromBufferAttribute(t,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,x),l.fromBufferAttribute(n,p),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(p,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ht.fromBufferAttribute(e,t),Ht.normalize(),e.setXYZ(t,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,x=0;for(let p=0,g=l.length;p<g;p++){a.isInterleavedBufferAttribute?f=l[p]*a.data.stride+a.offset:f=l[p]*h;for(let m=0;m<h;m++)d[x++]=c[f++]}return new et(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Td=new Ge,hs=new _s,Fo=new on,Ad=new N,ko=new N,Bo=new N,Ho=new N,Wl=new N,Vo=new N,Rd=new N,Go=new N,ue=class extends Rt{constructor(e=new lt,t=new We){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Vo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Wl.fromBufferAttribute(u,e),o?Vo.addScaledVector(Wl,h):Vo.addScaledVector(Wl.sub(t),h))}t.add(Vo)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Fo.copy(n.boundingSphere),Fo.applyMatrix4(r),hs.copy(e.ray).recast(e.near),!(Fo.containsPoint(hs.origin)===!1&&(hs.intersectSphere(Fo,Ad)===null||hs.origin.distanceToSquared(Ad)>(e.far-e.near)**2))&&(Td.copy(r).invert(),hs.copy(e.ray).applyMatrix4(Td),!(n.boundingBox!==null&&hs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,hs)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,p=d.length;x<p;x++){let g=d[x],m=o[g.materialIndex],v=Math.max(g.start,f.start),b=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let M=v,w=b;M<w;M+=3){let S=a.getX(M),T=a.getX(M+1),I=a.getX(M+2);s=Wo(this,m,e,n,c,h,u,S,T,I),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let x=Math.max(0,f.start),p=Math.min(a.count,f.start+f.count);for(let g=x,m=p;g<m;g+=3){let v=a.getX(g),b=a.getX(g+1),M=a.getX(g+2);s=Wo(this,o,e,n,c,h,u,v,b,M),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,p=d.length;x<p;x++){let g=d[x],m=o[g.materialIndex],v=Math.max(g.start,f.start),b=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let M=v,w=b;M<w;M+=3){let S=M,T=M+1,I=M+2;s=Wo(this,m,e,n,c,h,u,S,T,I),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let x=Math.max(0,f.start),p=Math.min(l.count,f.start+f.count);for(let g=x,m=p;g<m;g+=3){let v=g,b=g+1,M=g+2;s=Wo(this,o,e,n,c,h,u,v,b,M),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function Rg(i,e,t,n,s,r,o,a){let l;if(e.side===jt?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===$n,a),l===null)return null;Go.copy(a),Go.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Go);return c<t.near||c>t.far?null:{distance:c,point:Go.clone(),object:i}}function Wo(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,ko),i.getVertexPosition(l,Bo),i.getVertexPosition(c,Ho);let h=Rg(i,e,t,n,ko,Bo,Ho,Rd);if(h){let u=new N;Ui.getBarycoord(Rd,ko,Bo,Ho,u),s&&(h.uv=Ui.getInterpolatedAttribute(s,a,l,c,u,new we)),r&&(h.uv1=Ui.getInterpolatedAttribute(r,a,l,c,u,new we)),o&&(h.normal=Ui.getInterpolatedAttribute(o,a,l,c,u,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new N,materialIndex:0};Ui.getNormal(ko,Bo,Ho,d.normal),h.face=d,h.barycoord=u}return h}var Ct=class i extends lt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;x("z","y","x",-1,-1,n,t,e,o,r,0),x("z","y","x",1,-1,n,t,-e,o,r,1),x("x","z","y",1,1,e,n,t,s,o,2),x("x","z","y",1,-1,e,n,-t,s,o,3),x("x","y","z",1,-1,e,t,n,s,r,4),x("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new nt(c,3)),this.setAttribute("normal",new nt(h,3)),this.setAttribute("uv",new nt(u,2));function x(p,g,m,v,b,M,w,S,T,I,_){let y=M/T,A=w/I,U=M/2,E=w/2,C=S/2,z=T+1,O=I+1,B=0,k=0,$=new N;for(let W=0;W<O;W++){let Z=W*A-E;for(let pe=0;pe<z;pe++){let Se=pe*y-U;$[p]=Se*v,$[g]=Z*b,$[m]=C,c.push($.x,$.y,$.z),$[p]=0,$[g]=0,$[m]=S>0?1:-1,h.push($.x,$.y,$.z),u.push(pe/T),u.push(1-W/I),B+=1}}for(let W=0;W<I;W++)for(let Z=0;Z<T;Z++){let pe=d+Z+z*W,Se=d+Z+z*(W+1),K=d+(Z+1)+z*(W+1),re=d+(Z+1)+z*W;l.push(pe,Se,re),l.push(Se,K,re),k+=6}a.addGroup(f,k,_),f+=k,d+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function mr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function sn(i){let e={};for(let t=0;t<i.length;t++){let n=mr(i[t]);for(let s in n)e[s]=n[s]}return e}function Cg(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Gf(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}var Yi={clone:mr,merge:sn},Ig=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,It=class extends dn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ig,this.fragmentShader=Pg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=mr(e.uniforms),this.uniformsGroups=Cg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},ma=class extends Rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ge,this.projectionMatrix=new Ge,this.projectionMatrixInverse=new Ge,this.coordinateSystem=gi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Di=new N,Cd=new we,Id=new we,zt=class extends ma{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=fr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Qr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fr*2*Math.atan(Math.tan(Qr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Di.x,Di.y).multiplyScalar(-e/Di.z),Di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Di.x,Di.y).multiplyScalar(-e/Di.z)}getViewSize(e,t){return this.getViewBounds(e,Cd,Id),t.subVectors(Id,Cd)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Qr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ws=-90,Xs=1,Xc=class extends Rt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new zt(Ws,Xs,e,t);s.layers=this.layers,this.add(s);let r=new zt(Ws,Xs,e,t);r.layers=this.layers,this.add(r);let o=new zt(Ws,Xs,e,t);o.layers=this.layers,this.add(o);let a=new zt(Ws,Xs,e,t);a.layers=this.layers,this.add(a);let l=new zt(Ws,Xs,e,t);l.layers=this.layers,this.add(l);let c=new zt(Ws,Xs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===gi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ua)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=p,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},ga=class extends Vt{constructor(e,t,n,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:ar,super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Yc=class extends rn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new ga(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:hn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ct(5,5,5),r=new It({name:"CubemapFromEquirect",uniforms:mr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:jt,blending:Zn});r.uniforms.tEquirect.value=t;let o=new ue(s,r),a=t.minFilter;return t.minFilter===Sn&&(t.minFilter=hn),new Xc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},Xl=new N,Lg=new N,Dg=new Ze,On=class{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Xl.subVectors(n,t).cross(Lg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Xl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Dg.getNormalMatrix(e),s=this.coplanarPoint(Xl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},us=new on,Xo=new N,oo=class{constructor(e=new On,t=new On,n=new On,s=new On,r=new On,o=new On){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=gi){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],x=s[9],p=s[10],g=s[11],m=s[12],v=s[13],b=s[14],M=s[15];if(n[0].setComponents(l-r,d-c,g-f,M-m).normalize(),n[1].setComponents(l+r,d+c,g+f,M+m).normalize(),n[2].setComponents(l+o,d+h,g+x,M+v).normalize(),n[3].setComponents(l-o,d-h,g-x,M-v).normalize(),n[4].setComponents(l-a,d-u,g-p,M-b).normalize(),t===gi)n[5].setComponents(l+a,d+u,g+p,M+b).normalize();else if(t===ua)n[5].setComponents(a,u,p,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),us.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),us.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(us)}intersectsSprite(e){return us.center.set(0,0,0),us.radius=.7071067811865476,us.applyMatrix4(e.matrixWorld),this.intersectsSphere(us)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Xo.x=s.normal.x>0?e.max.x:e.min.x,Xo.y=s.normal.y>0?e.max.y:e.min.y,Xo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Xo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Wf(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Ng(i){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,x)=>f.start-x.start);let d=0;for(let f=1;f<u.length;f++){let x=u[d],p=u[f];p.start<=x.start+x.count+1?x.count=Math.max(x.count,p.start+p.count-x.start):(++d,u[d]=p)}u.length=d+1;for(let f=0,x=u.length;f<x;f++){let p=u[f];i.bufferSubData(c,p.start*h.BYTES_PER_ELEMENT,h,p.start,p.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Tn=class i extends lt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=e/a,d=t/l,f=[],x=[],p=[],g=[];for(let m=0;m<h;m++){let v=m*d-o;for(let b=0;b<c;b++){let M=b*u-r;x.push(M,-v,0),p.push(0,0,1),g.push(b/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<a;v++){let b=v+c*m,M=v+c*(m+1),w=v+1+c*(m+1),S=v+1+c*m;f.push(b,M,S),f.push(M,w,S)}this.setIndex(f),this.setAttribute("position",new nt(x,3)),this.setAttribute("normal",new nt(p,3)),this.setAttribute("uv",new nt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Ug=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Og=`#ifdef USE_ALPHAHASH
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
#endif`,zg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Bg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hg=`#ifdef USE_AOMAP
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
#endif`,Vg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gg=`#ifdef USE_BATCHING
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
#endif`,Wg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Xg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Yg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Kg=`#ifdef USE_IRIDESCENCE
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
#endif`,Zg=`#ifdef USE_BUMPMAP
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
#endif`,$g=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Jg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ex=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,tx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,nx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ix=`#if defined( USE_COLOR_ALPHA )
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
#endif`,sx=`#define PI 3.141592653589793
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
} // validated`,rx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ox=`vec3 transformedNormal = objectNormal;
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
#endif`,ax=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ux="gl_FragColor = linearToOutputTexel( gl_FragColor );",dx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fx=`#ifdef USE_ENVMAP
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
#endif`,px=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,mx=`#ifdef USE_ENVMAP
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
#endif`,gx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xx=`#ifdef USE_ENVMAP
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
#endif`,_x=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Mx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bx=`#ifdef USE_GRADIENTMAP
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
}`,Ex=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Sx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Tx=`uniform bool receiveShadow;
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
#endif`,Ax=`#ifdef USE_ENVMAP
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
#endif`,Rx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Cx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ix=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Px=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Lx=`PhysicalMaterial material;
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
#endif`,Dx=`struct PhysicalMaterial {
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
}`,Nx=`
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
#endif`,Ux=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ox=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Hx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Wx=`#if defined( USE_POINTS_UV )
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
#endif`,Xx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Yx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Kx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$x=`#ifdef USE_MORPHTARGETS
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
#endif`,Jx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Qx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,e_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,t_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,n_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,i_=`#ifdef USE_NORMALMAP
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
#endif`,s_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,r_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,o_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,a_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,l_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,c_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,h_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,u_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,d_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,f_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,p_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,m_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,g_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,x_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,__=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,y_=`float getShadowMask() {
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
}`,v_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,M_=`#ifdef USE_SKINNING
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
#endif`,b_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,E_=`#ifdef USE_SKINNING
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
#endif`,S_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,w_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,T_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,A_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,R_=`#ifdef USE_TRANSMISSION
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
#endif`,C_=`#ifdef USE_TRANSMISSION
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
#endif`,I_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,P_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,L_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,D_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,N_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,U_=`uniform sampler2D t2D;
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
}`,O_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,z_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,F_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,k_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,B_=`#include <common>
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
}`,H_=`#if DEPTH_PACKING == 3200
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
}`,V_=`#define DISTANCE
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
}`,G_=`#define DISTANCE
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
}`,W_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,X_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Y_=`uniform float scale;
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
}`,q_=`uniform vec3 diffuse;
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
}`,K_=`#include <common>
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
}`,Z_=`uniform vec3 diffuse;
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
}`,$_=`#define LAMBERT
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
}`,J_=`#define LAMBERT
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
}`,j_=`#define MATCAP
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
}`,Q_=`#define MATCAP
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
}`,ey=`#define NORMAL
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
}`,ty=`#define NORMAL
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
}`,ny=`#define PHONG
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
}`,iy=`#define PHONG
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
}`,sy=`#define STANDARD
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
}`,ry=`#define STANDARD
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
}`,oy=`#define TOON
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
}`,ay=`#define TOON
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
}`,ly=`uniform float size;
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
}`,cy=`uniform vec3 diffuse;
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
}`,hy=`#include <common>
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
}`,uy=`uniform vec3 color;
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
}`,dy=`uniform float rotation;
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
}`,fy=`uniform vec3 diffuse;
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
}`,je={alphahash_fragment:Ug,alphahash_pars_fragment:Og,alphamap_fragment:zg,alphamap_pars_fragment:Fg,alphatest_fragment:kg,alphatest_pars_fragment:Bg,aomap_fragment:Hg,aomap_pars_fragment:Vg,batching_pars_vertex:Gg,batching_vertex:Wg,begin_vertex:Xg,beginnormal_vertex:Yg,bsdfs:qg,iridescence_fragment:Kg,bumpmap_pars_fragment:Zg,clipping_planes_fragment:$g,clipping_planes_pars_fragment:Jg,clipping_planes_pars_vertex:jg,clipping_planes_vertex:Qg,color_fragment:ex,color_pars_fragment:tx,color_pars_vertex:nx,color_vertex:ix,common:sx,cube_uv_reflection_fragment:rx,defaultnormal_vertex:ox,displacementmap_pars_vertex:ax,displacementmap_vertex:lx,emissivemap_fragment:cx,emissivemap_pars_fragment:hx,colorspace_fragment:ux,colorspace_pars_fragment:dx,envmap_fragment:fx,envmap_common_pars_fragment:px,envmap_pars_fragment:mx,envmap_pars_vertex:gx,envmap_physical_pars_fragment:Ax,envmap_vertex:xx,fog_vertex:_x,fog_pars_vertex:yx,fog_fragment:vx,fog_pars_fragment:Mx,gradientmap_pars_fragment:bx,lightmap_pars_fragment:Ex,lights_lambert_fragment:Sx,lights_lambert_pars_fragment:wx,lights_pars_begin:Tx,lights_toon_fragment:Rx,lights_toon_pars_fragment:Cx,lights_phong_fragment:Ix,lights_phong_pars_fragment:Px,lights_physical_fragment:Lx,lights_physical_pars_fragment:Dx,lights_fragment_begin:Nx,lights_fragment_maps:Ux,lights_fragment_end:Ox,logdepthbuf_fragment:zx,logdepthbuf_pars_fragment:Fx,logdepthbuf_pars_vertex:kx,logdepthbuf_vertex:Bx,map_fragment:Hx,map_pars_fragment:Vx,map_particle_fragment:Gx,map_particle_pars_fragment:Wx,metalnessmap_fragment:Xx,metalnessmap_pars_fragment:Yx,morphinstance_vertex:qx,morphcolor_vertex:Kx,morphnormal_vertex:Zx,morphtarget_pars_vertex:$x,morphtarget_vertex:Jx,normal_fragment_begin:jx,normal_fragment_maps:Qx,normal_pars_fragment:e_,normal_pars_vertex:t_,normal_vertex:n_,normalmap_pars_fragment:i_,clearcoat_normal_fragment_begin:s_,clearcoat_normal_fragment_maps:r_,clearcoat_pars_fragment:o_,iridescence_pars_fragment:a_,opaque_fragment:l_,packing:c_,premultiplied_alpha_fragment:h_,project_vertex:u_,dithering_fragment:d_,dithering_pars_fragment:f_,roughnessmap_fragment:p_,roughnessmap_pars_fragment:m_,shadowmap_pars_fragment:g_,shadowmap_pars_vertex:x_,shadowmap_vertex:__,shadowmask_pars_fragment:y_,skinbase_vertex:v_,skinning_pars_vertex:M_,skinning_vertex:b_,skinnormal_vertex:E_,specularmap_fragment:S_,specularmap_pars_fragment:w_,tonemapping_fragment:T_,tonemapping_pars_fragment:A_,transmission_fragment:R_,transmission_pars_fragment:C_,uv_pars_fragment:I_,uv_pars_vertex:P_,uv_vertex:L_,worldpos_vertex:D_,background_vert:N_,background_frag:U_,backgroundCube_vert:O_,backgroundCube_frag:z_,cube_vert:F_,cube_frag:k_,depth_vert:B_,depth_frag:H_,distanceRGBA_vert:V_,distanceRGBA_frag:G_,equirect_vert:W_,equirect_frag:X_,linedashed_vert:Y_,linedashed_frag:q_,meshbasic_vert:K_,meshbasic_frag:Z_,meshlambert_vert:$_,meshlambert_frag:J_,meshmatcap_vert:j_,meshmatcap_frag:Q_,meshnormal_vert:ey,meshnormal_frag:ty,meshphong_vert:ny,meshphong_frag:iy,meshphysical_vert:sy,meshphysical_frag:ry,meshtoon_vert:oy,meshtoon_frag:ay,points_vert:ly,points_frag:cy,shadow_vert:hy,shadow_frag:uy,sprite_vert:dy,sprite_frag:fy},ge={common:{diffuse:{value:new be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new we(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new be(16777215)},opacity:{value:1},center:{value:new we(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},Kn={basic:{uniforms:sn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:sn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new be(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:sn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new be(0)},specular:{value:new be(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:sn([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:sn([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new be(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:sn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:sn([ge.points,ge.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:sn([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:sn([ge.common,ge.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:sn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:sn([ge.sprite,ge.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:sn([ge.common,ge.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:sn([ge.lights,ge.fog,{color:{value:new be(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};Kn.physical={uniforms:sn([Kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new we(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new we},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new be(0)},specularColor:{value:new be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new we},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};var Yo={r:0,b:0,g:0},ds=new Jn,py=new Ge;function my(i,e,t,n,s,r,o){let a=new be(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function x(v){let b=v.isScene===!0?v.background:null;return b&&b.isTexture&&(b=(v.backgroundBlurriness>0?t:e).get(b)),b}function p(v){let b=!1,M=x(v);M===null?m(a,l):M&&M.isColor&&(m(M,1),b=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(v,b){let M=x(b);M&&(M.isCubeTexture||M.mapping===ka)?(h===void 0&&(h=new ue(new Ct(1,1,1),new It({name:"BackgroundCubeMaterial",uniforms:mr(Kn.backgroundCube.uniforms),vertexShader:Kn.backgroundCube.vertexShader,fragmentShader:Kn.backgroundCube.fragmentShader,side:jt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,S,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ds.copy(b.backgroundRotation),ds.x*=-1,ds.y*=-1,ds.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ds.y*=-1,ds.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(py.makeRotationFromEuler(ds)),h.material.toneMapped=Qe.getTransfer(M.colorSpace)!==ft,(u!==M||d!==M.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=M,d=M.version,f=i.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new ue(new Tn(2,2),new It({name:"BackgroundMaterial",uniforms:mr(Kn.background.uniforms),vertexShader:Kn.background.vertexShader,fragmentShader:Kn.background.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(M.colorSpace)!==ft,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||d!==M.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=M,d=M.version,f=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function m(v,b){v.getRGB(Yo,Gf(i)),n.buffers.color.setClear(Yo.r,Yo.g,Yo.b,b,o)}return{getClearColor:function(){return a},setClearColor:function(v,b=1){a.set(v),l=b,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,m(a,l)},render:p,addToRenderList:g}}function gy(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(y,A,U,E,C){let z=!1,O=u(E,U,A);r!==O&&(r=O,c(r.object)),z=f(y,E,U,C),z&&x(y,E,U,C),C!==null&&e.update(C,i.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,M(y,A,U,E),C!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(C).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function u(y,A,U){let E=U.wireframe===!0,C=n[y.id];C===void 0&&(C={},n[y.id]=C);let z=C[A.id];z===void 0&&(z={},C[A.id]=z);let O=z[E];return O===void 0&&(O=d(l()),z[E]=O),O}function d(y){let A=[],U=[],E=[];for(let C=0;C<t;C++)A[C]=0,U[C]=0,E[C]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:U,attributeDivisors:E,object:y,attributes:{},index:null}}function f(y,A,U,E){let C=r.attributes,z=A.attributes,O=0,B=U.getAttributes();for(let k in B)if(B[k].location>=0){let W=C[k],Z=z[k];if(Z===void 0&&(k==="instanceMatrix"&&y.instanceMatrix&&(Z=y.instanceMatrix),k==="instanceColor"&&y.instanceColor&&(Z=y.instanceColor)),W===void 0||W.attribute!==Z||Z&&W.data!==Z.data)return!0;O++}return r.attributesNum!==O||r.index!==E}function x(y,A,U,E){let C={},z=A.attributes,O=0,B=U.getAttributes();for(let k in B)if(B[k].location>=0){let W=z[k];W===void 0&&(k==="instanceMatrix"&&y.instanceMatrix&&(W=y.instanceMatrix),k==="instanceColor"&&y.instanceColor&&(W=y.instanceColor));let Z={};Z.attribute=W,W&&W.data&&(Z.data=W.data),C[k]=Z,O++}r.attributes=C,r.attributesNum=O,r.index=E}function p(){let y=r.newAttributes;for(let A=0,U=y.length;A<U;A++)y[A]=0}function g(y){m(y,0)}function m(y,A){let U=r.newAttributes,E=r.enabledAttributes,C=r.attributeDivisors;U[y]=1,E[y]===0&&(i.enableVertexAttribArray(y),E[y]=1),C[y]!==A&&(i.vertexAttribDivisor(y,A),C[y]=A)}function v(){let y=r.newAttributes,A=r.enabledAttributes;for(let U=0,E=A.length;U<E;U++)A[U]!==y[U]&&(i.disableVertexAttribArray(U),A[U]=0)}function b(y,A,U,E,C,z,O){O===!0?i.vertexAttribIPointer(y,A,U,C,z):i.vertexAttribPointer(y,A,U,E,C,z)}function M(y,A,U,E){p();let C=E.attributes,z=U.getAttributes(),O=A.defaultAttributeValues;for(let B in z){let k=z[B];if(k.location>=0){let $=C[B];if($===void 0&&(B==="instanceMatrix"&&y.instanceMatrix&&($=y.instanceMatrix),B==="instanceColor"&&y.instanceColor&&($=y.instanceColor)),$!==void 0){let W=$.normalized,Z=$.itemSize,pe=e.get($);if(pe===void 0)continue;let Se=pe.buffer,K=pe.type,re=pe.bytesPerElement,me=K===i.INT||K===i.UNSIGNED_INT||$.gpuType===Th;if($.isInterleavedBufferAttribute){let j=$.data,xe=j.stride,ae=$.offset;if(j.isInstancedInterleavedBuffer){for(let ce=0;ce<k.locationSize;ce++)m(k.location+ce,j.meshPerAttribute);y.isInstancedMesh!==!0&&E._maxInstanceCount===void 0&&(E._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ce=0;ce<k.locationSize;ce++)g(k.location+ce);i.bindBuffer(i.ARRAY_BUFFER,Se);for(let ce=0;ce<k.locationSize;ce++)b(k.location+ce,Z/k.locationSize,K,W,xe*re,(ae+Z/k.locationSize*ce)*re,me)}else{if($.isInstancedBufferAttribute){for(let j=0;j<k.locationSize;j++)m(k.location+j,$.meshPerAttribute);y.isInstancedMesh!==!0&&E._maxInstanceCount===void 0&&(E._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let j=0;j<k.locationSize;j++)g(k.location+j);i.bindBuffer(i.ARRAY_BUFFER,Se);for(let j=0;j<k.locationSize;j++)b(k.location+j,Z/k.locationSize,K,W,Z*re,Z/k.locationSize*j*re,me)}}else if(O!==void 0){let W=O[B];if(W!==void 0)switch(W.length){case 2:i.vertexAttrib2fv(k.location,W);break;case 3:i.vertexAttrib3fv(k.location,W);break;case 4:i.vertexAttrib4fv(k.location,W);break;default:i.vertexAttrib1fv(k.location,W)}}}}v()}function w(){I();for(let y in n){let A=n[y];for(let U in A){let E=A[U];for(let C in E)h(E[C].object),delete E[C];delete A[U]}delete n[y]}}function S(y){if(n[y.id]===void 0)return;let A=n[y.id];for(let U in A){let E=A[U];for(let C in E)h(E[C].object),delete E[C];delete A[U]}delete n[y.id]}function T(y){for(let A in n){let U=n[A];if(U[y.id]===void 0)continue;let E=U[y.id];for(let C in E)h(E[C].object),delete E[C];delete U[y.id]}}function I(){_(),o=!0,r!==s&&(r=s,c(r.object))}function _(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:_,dispose:w,releaseStatesOfGeometry:S,releaseStatesOfProgram:T,initAttributes:p,enableAttribute:g,disableUnusedAttributes:v}}function xy(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let x=0;x<u;x++)f+=h[x];t.update(f,n,1)}function l(c,h,u,d){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let x=0;x<c.length;x++)o(c[x],h[x],d[x]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let x=0;for(let p=0;p<u;p++)x+=h[p]*d[p];t.update(x,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function _y(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==wn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let I=T===Bn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==_i&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Fn&&!I)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=x>0,S=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:x,maxTextureSize:p,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:v,maxVaryings:b,maxFragmentUniforms:M,vertexTextures:w,maxSamples:S}}function yy(i){let e=this,t=null,n=0,s=!1,r=!1,o=new On,a=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let x=u.clippingPlanes,p=u.clipIntersection,g=u.clipShadows,m=i.get(u);if(!s||x===null||x.length===0||r&&!g)r?h(null):c();else{let v=r?0:n,b=v*4,M=m.clippingState||null;l.value=M,M=h(x,d,b,f);for(let w=0;w!==b;++w)M[w]=t[w];m.clippingState=M,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,x){let p=u!==null?u.length:0,g=null;if(p!==0){if(g=l.value,x!==!0||g===null){let m=f+p*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<m)&&(g=new Float32Array(m));for(let b=0,M=f;b!==p;++b,M+=4)o.copy(u[b]).applyMatrix4(v,a),o.normal.toArray(g,M),g[M+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,g}}function vy(i){let e=new WeakMap;function t(o,a){return a===fc?o.mapping=ar:a===pc&&(o.mapping=lr),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===fc||a===pc)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Yc(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Fi=class extends ma{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},tr=4,Pd=[.125,.215,.35,.446,.526,.582],gs=20,Yl=new Fi,Ld=new be,ql=null,Kl=0,Zl=0,$l=!1,ps=(1+Math.sqrt(5))/2,Ys=1/ps,Dd=[new N(-ps,Ys,0),new N(ps,Ys,0),new N(-Ys,0,ps),new N(Ys,0,ps),new N(0,ps,-Ys),new N(0,ps,Ys),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],xa=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){ql=this._renderer.getRenderTarget(),Kl=this._renderer.getActiveCubeFace(),Zl=this._renderer.getActiveMipmapLevel(),$l=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Od(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ud(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ql,Kl,Zl),this._renderer.xr.enabled=$l,e.scissorTest=!1,qo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ar||e.mapping===lr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ql=this._renderer.getRenderTarget(),Kl=this._renderer.getActiveCubeFace(),Zl=this._renderer.getActiveMipmapLevel(),$l=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:hn,minFilter:hn,generateMipmaps:!1,type:Bn,format:wn,colorSpace:tn,depthBuffer:!1},s=Nd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nd(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=My(r)),this._blurMaterial=by(r,e,t)}return s}_compileMaterial(e){let t=new ue(this._lodPlanes[0],e);this._renderer.compile(t,Yl)}_sceneToCubeUV(e,t,n,s){let a=new zt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Ld),h.toneMapping=zi,h.autoClear=!1;let f=new We({name:"PMREM.Background",side:jt,depthWrite:!1,depthTest:!1}),x=new ue(new Ct,f),p=!1,g=e.background;g?g.isColor&&(f.color.copy(g),e.background=null,p=!0):(f.color.copy(Ld),p=!0);for(let m=0;m<6;m++){let v=m%3;v===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):v===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));let b=this._cubeSize;qo(s,v*b,m>2?b:0,b,b),h.setRenderTarget(s),p&&h.render(x,a),h.render(e,a)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=g}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===ar||e.mapping===lr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Od()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ud());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new ue(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;qo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Yl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Dd[(s-r-1)%Dd.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new ue(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*gs-1),p=r/x,g=isFinite(r)?1+Math.floor(h*p):gs;g>gs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${gs}`);let m=[],v=0;for(let T=0;T<gs;++T){let I=T/p,_=Math.exp(-I*I/2);m.push(_),T===0?v+=_:T<g&&(v+=2*_)}for(let T=0;T<m.length;T++)m[T]=m[T]/v;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:b}=this;d.dTheta.value=x,d.mipInt.value=b-n;let M=this._sizeLods[s],w=3*M*(s>b-tr?s-b+tr:0),S=4*(this._cubeSize-M);qo(t,w,S,3*M,2*M),l.setRenderTarget(t),l.render(u,Yl)}};function My(i){let e=[],t=[],n=[],s=i,r=i-tr+1+Pd.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>i-tr?l=Pd[o-i+tr-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,x=6,p=3,g=2,m=1,v=new Float32Array(p*x*f),b=new Float32Array(g*x*f),M=new Float32Array(m*x*f);for(let S=0;S<f;S++){let T=S%3*2/3-1,I=S>2?0:-1,_=[T,I,0,T+2/3,I,0,T+2/3,I+1,0,T,I,0,T+2/3,I+1,0,T,I+1,0];v.set(_,p*x*S),b.set(d,g*x*S);let y=[S,S,S,S,S,S];M.set(y,m*x*S)}let w=new lt;w.setAttribute("position",new et(v,p)),w.setAttribute("uv",new et(b,g)),w.setAttribute("faceIndex",new et(M,m)),e.push(w),s>tr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Nd(i,e,t){let n=new rn(i,e,t);return n.texture.mapping=ka,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function qo(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function by(i,e,t){let n=new Float32Array(gs),s=new N(0,1,0);return new It({name:"SphericalGaussianBlur",defines:{n:gs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:zh(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Ud(){return new It({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zh(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Od(){return new It({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function zh(){return`

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
	`}function Ey(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===fc||l===pc,h=l===ar||l===lr;if(c||h){let u=e.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new xa(i)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new xa(i)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Sy(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&$r("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function wy(i,e,t,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let x in d.attributes)e.remove(d.attributes[x]);for(let x in d.morphAttributes){let p=d.morphAttributes[x];for(let g=0,m=p.length;g<m;g++)e.remove(p[g])}d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let x in d)e.update(d[x],i.ARRAY_BUFFER);let f=u.morphAttributes;for(let x in f){let p=f[x];for(let g=0,m=p.length;g<m;g++)e.update(p[g],i.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,x=u.attributes.position,p=0;if(f!==null){let v=f.array;p=f.version;for(let b=0,M=v.length;b<M;b+=3){let w=v[b+0],S=v[b+1],T=v[b+2];d.push(w,S,S,T,T,w)}}else if(x!==void 0){let v=x.array;p=x.version;for(let b=0,M=v.length/3-1;b<M;b+=3){let w=b+0,S=b+1,T=b+2;d.push(w,S,S,T,T,w)}}else return;let g=new(Hf(d)?pa:pr)(d,1);g.version=p;let m=r.get(u);m&&e.remove(m),r.set(u,g)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Ty(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*o),t.update(f,n,1)}function c(d,f,x){x!==0&&(i.drawElementsInstanced(n,f,r,d*o,x),t.update(f,n,x))}function h(d,f,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,x);let g=0;for(let m=0;m<x;m++)g+=f[m];t.update(g,n,1)}function u(d,f,x,p){if(x===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<d.length;m++)c(d[m]/o,f[m],p[m]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,p,0,x);let m=0;for(let v=0;v<x;v++)m+=f[v]*p[v];t.update(m,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Ay(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Ry(i,e,t){let n=new WeakMap,s=new ct;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let _=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",_)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],b=0;f===!0&&(b=1),x===!0&&(b=2),p===!0&&(b=3);let M=a.attributes.position.count*b,w=1;M>e.maxTextureSize&&(w=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let S=new Float32Array(M*w*4*u),T=new fa(S,M,w,u);T.type=Fn,T.needsUpdate=!0;let I=b*4;for(let y=0;y<u;y++){let A=g[y],U=m[y],E=v[y],C=M*w*4*y;for(let z=0;z<A.count;z++){let O=z*I;f===!0&&(s.fromBufferAttribute(A,z),S[C+O+0]=s.x,S[C+O+1]=s.y,S[C+O+2]=s.z,S[C+O+3]=0),x===!0&&(s.fromBufferAttribute(U,z),S[C+O+4]=s.x,S[C+O+5]=s.y,S[C+O+6]=s.z,S[C+O+7]=0),p===!0&&(s.fromBufferAttribute(E,z),S[C+O+8]=s.x,S[C+O+9]=s.y,S[C+O+10]=s.z,S[C+O+11]=E.itemSize===4?s.w:1)}}d={count:u,texture:T,size:new we(M,w)},n.set(a,d),a.addEventListener("dispose",_)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let p=0;p<c.length;p++)f+=c[p];let x=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Cy(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var _a=class extends Vt{constructor(e,t,n,s,r,o,a,l,c,h=ir){if(h!==ir&&h!==hr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ir&&(n=xs),n===void 0&&h===hr&&(n=cr),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Qt,this.minFilter=l!==void 0?l:Qt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Xf=new Vt,zd=new _a(1,1),Yf=new fa,qf=new Wc,Kf=new ga,Fd=[],kd=[],Bd=new Float32Array(16),Hd=new Float32Array(9),Vd=new Float32Array(4);function Sr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Fd[s];if(r===void 0&&(r=new Float32Array(s),Fd[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Ft(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function kt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Va(i,e){let t=kd[e];t===void 0&&(t=new Int32Array(e),kd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Iy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Py(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;i.uniform2fv(this.addr,e),kt(t,e)}}function Ly(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ft(t,e))return;i.uniform3fv(this.addr,e),kt(t,e)}}function Dy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;i.uniform4fv(this.addr,e),kt(t,e)}}function Ny(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),kt(t,e)}else{if(Ft(t,n))return;Vd.set(n),i.uniformMatrix2fv(this.addr,!1,Vd),kt(t,n)}}function Uy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),kt(t,e)}else{if(Ft(t,n))return;Hd.set(n),i.uniformMatrix3fv(this.addr,!1,Hd),kt(t,n)}}function Oy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),kt(t,e)}else{if(Ft(t,n))return;Bd.set(n),i.uniformMatrix4fv(this.addr,!1,Bd),kt(t,n)}}function zy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Fy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;i.uniform2iv(this.addr,e),kt(t,e)}}function ky(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;i.uniform3iv(this.addr,e),kt(t,e)}}function By(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;i.uniform4iv(this.addr,e),kt(t,e)}}function Hy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Vy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;i.uniform2uiv(this.addr,e),kt(t,e)}}function Gy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;i.uniform3uiv(this.addr,e),kt(t,e)}}function Wy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;i.uniform4uiv(this.addr,e),kt(t,e)}}function Xy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(zd.compareFunction=kf,r=zd):r=Xf,t.setTexture2D(e||r,s)}function Yy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||qf,s)}function qy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Kf,s)}function Ky(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Yf,s)}function Zy(i){switch(i){case 5126:return Iy;case 35664:return Py;case 35665:return Ly;case 35666:return Dy;case 35674:return Ny;case 35675:return Uy;case 35676:return Oy;case 5124:case 35670:return zy;case 35667:case 35671:return Fy;case 35668:case 35672:return ky;case 35669:case 35673:return By;case 5125:return Hy;case 36294:return Vy;case 36295:return Gy;case 36296:return Wy;case 35678:case 36198:case 36298:case 36306:case 35682:return Xy;case 35679:case 36299:case 36307:return Yy;case 35680:case 36300:case 36308:case 36293:return qy;case 36289:case 36303:case 36311:case 36292:return Ky}}function $y(i,e){i.uniform1fv(this.addr,e)}function Jy(i,e){let t=Sr(e,this.size,2);i.uniform2fv(this.addr,t)}function jy(i,e){let t=Sr(e,this.size,3);i.uniform3fv(this.addr,t)}function Qy(i,e){let t=Sr(e,this.size,4);i.uniform4fv(this.addr,t)}function ev(i,e){let t=Sr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function tv(i,e){let t=Sr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function nv(i,e){let t=Sr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function iv(i,e){i.uniform1iv(this.addr,e)}function sv(i,e){i.uniform2iv(this.addr,e)}function rv(i,e){i.uniform3iv(this.addr,e)}function ov(i,e){i.uniform4iv(this.addr,e)}function av(i,e){i.uniform1uiv(this.addr,e)}function lv(i,e){i.uniform2uiv(this.addr,e)}function cv(i,e){i.uniform3uiv(this.addr,e)}function hv(i,e){i.uniform4uiv(this.addr,e)}function uv(i,e,t){let n=this.cache,s=e.length,r=Va(t,s);Ft(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Xf,r[o])}function dv(i,e,t){let n=this.cache,s=e.length,r=Va(t,s);Ft(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||qf,r[o])}function fv(i,e,t){let n=this.cache,s=e.length,r=Va(t,s);Ft(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Kf,r[o])}function pv(i,e,t){let n=this.cache,s=e.length,r=Va(t,s);Ft(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Yf,r[o])}function mv(i){switch(i){case 5126:return $y;case 35664:return Jy;case 35665:return jy;case 35666:return Qy;case 35674:return ev;case 35675:return tv;case 35676:return nv;case 5124:case 35670:return iv;case 35667:case 35671:return sv;case 35668:case 35672:return rv;case 35669:case 35673:return ov;case 5125:return av;case 36294:return lv;case 36295:return cv;case 36296:return hv;case 35678:case 36198:case 36298:case 36306:case 35682:return uv;case 35679:case 36299:case 36307:return dv;case 35680:case 36300:case 36308:case 36293:return fv;case 36289:case 36303:case 36311:case 36292:return pv}}var qc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Zy(t.type)}},Kc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=mv(t.type)}},Zc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Jl=/(\w+)(\])?(\[|\.)?/g;function Gd(i,e){i.seq.push(e),i.map[e.id]=e}function gv(i,e,t){let n=i.name,s=n.length;for(Jl.lastIndex=0;;){let r=Jl.exec(n),o=Jl.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Gd(t,c===void 0?new qc(a,i,e):new Kc(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new Zc(a),Gd(t,u)),t=u}}}var rr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);gv(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Wd(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var xv=37297,_v=0;function yv(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Xd=new Ze;function vv(i){Qe._getMatrix(Xd,Qe.workingColorSpace,i);let e=`mat3( ${Xd.elements.map(t=>t.toFixed(4))} )`;switch(Qe.getTransfer(i)){case Ha:return[e,"LinearTransferOETF"];case ft:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Yd(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+yv(i.getShaderSource(e),o)}else return s}function Mv(i,e){let t=vv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function bv(i,e){let t;switch(e){case vh:t="Linear";break;case Mh:t="Reinhard";break;case bh:t="Cineon";break;case uo:t="ACESFilmic";break;case Eh:t="AgX";break;case Sh:t="Neutral";break;case z0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ko=new N;function Ev(){Qe.getLuminanceCoefficients(Ko);let i=Ko.x.toFixed(4),e=Ko.y.toFixed(4),t=Ko.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Sv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Jr).join(`
`)}function wv(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Tv(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Jr(i){return i!==""}function qd(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Kd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Av=/^[ \t]*#include +<([\w\d./]+)>/gm;function $c(i){return i.replace(Av,Cv)}var Rv=new Map;function Cv(i,e){let t=je[e];if(t===void 0){let n=Rv.get(e);if(n!==void 0)t=je[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return $c(t)}var Iv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zd(i){return i.replace(Iv,Pv)}function Pv(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function $d(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function Lv(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===wf?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===yh?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===pi&&(e="SHADOWMAP_TYPE_VSM"),e}function Dv(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ar:case lr:e="ENVMAP_TYPE_CUBE";break;case ka:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Nv(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case lr:e="ENVMAP_MODE_REFRACTION";break}return e}function Uv(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Tf:e="ENVMAP_BLENDING_MULTIPLY";break;case U0:e="ENVMAP_BLENDING_MIX";break;case O0:e="ENVMAP_BLENDING_ADD";break}return e}function Ov(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function zv(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Lv(t),c=Dv(t),h=Nv(t),u=Uv(t),d=Ov(t),f=Sv(t),x=wv(r),p=s.createProgram(),g,m,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Jr).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Jr).join(`
`),m.length>0&&(m+=`
`)):(g=[$d(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Jr).join(`
`),m=[$d(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==zi?"#define TONE_MAPPING":"",t.toneMapping!==zi?je.tonemapping_pars_fragment:"",t.toneMapping!==zi?bv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,Mv("linearToOutputTexel",t.outputColorSpace),Ev(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Jr).join(`
`)),o=$c(o),o=qd(o,t),o=Kd(o,t),a=$c(a),a=qd(a,t),a=Kd(a,t),o=Zd(o),a=Zd(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===cd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===cd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let b=v+g+o,M=v+m+a,w=Wd(s,s.VERTEX_SHADER,b),S=Wd(s,s.FRAGMENT_SHADER,M);s.attachShader(p,w),s.attachShader(p,S),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function T(A){if(i.debug.checkShaderErrors){let U=s.getProgramInfoLog(p).trim(),E=s.getShaderInfoLog(w).trim(),C=s.getShaderInfoLog(S).trim(),z=!0,O=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,w,S);else{let B=Yd(s,w,"vertex"),k=Yd(s,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+U+`
`+B+`
`+k)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(E===""||C==="")&&(O=!1);O&&(A.diagnostics={runnable:z,programLog:U,vertexShader:{log:E,prefix:g},fragmentShader:{log:C,prefix:m}})}s.deleteShader(w),s.deleteShader(S),I=new rr(s,p),_=Tv(s,p)}let I;this.getUniforms=function(){return I===void 0&&T(this),I};let _;this.getAttributes=function(){return _===void 0&&T(this),_};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(p,xv)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=_v++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=w,this.fragmentShader=S,this}var Fv=0,Jc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new jc(e),t.set(e,n)),n}},jc=class{constructor(e){this.id=Fv++,this.code=e,this.usedTimes=0}};function kv(i,e,t,n,s,r,o){let a=new ro,l=new Jc,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return c.add(_),_===0?"uv":`uv${_}`}function g(_,y,A,U,E){let C=U.fog,z=E.geometry,O=_.isMeshStandardMaterial?U.environment:null,B=(_.isMeshStandardMaterial?t:e).get(_.envMap||O),k=B&&B.mapping===ka?B.image.height:null,$=x[_.type];_.precision!==null&&(f=s.getMaxPrecision(_.precision),f!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",f,"instead."));let W=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Z=W!==void 0?W.length:0,pe=0;z.morphAttributes.position!==void 0&&(pe=1),z.morphAttributes.normal!==void 0&&(pe=2),z.morphAttributes.color!==void 0&&(pe=3);let Se,K,re,me;if($){let xt=Kn[$];Se=xt.vertexShader,K=xt.fragmentShader}else Se=_.vertexShader,K=_.fragmentShader,l.update(_),re=l.getVertexShaderID(_),me=l.getFragmentShaderID(_);let j=i.getRenderTarget(),xe=i.state.buffers.depth.getReversed(),ae=E.isInstancedMesh===!0,ce=E.isBatchedMesh===!0,le=!!_.map,fe=!!_.matcap,Be=!!B,L=!!_.aoMap,Te=!!_.lightMap,Q=!!_.bumpMap,Fe=!!_.normalMap,oe=!!_.displacementMap,Ie=!!_.emissiveMap,Pe=!!_.metalnessMap,D=!!_.roughnessMap,R=_.anisotropy>0,X=_.clearcoat>0,te=_.dispersion>0,ne=_.iridescence>0,ee=_.sheen>0,Ue=_.transmission>0,ye=R&&!!_.anisotropyMap,Ae=X&&!!_.clearcoatMap,st=X&&!!_.clearcoatNormalMap,he=X&&!!_.clearcoatRoughnessMap,Re=ne&&!!_.iridescenceMap,He=ne&&!!_.iridescenceThicknessMap,Ve=ee&&!!_.sheenColorMap,Ce=ee&&!!_.sheenRoughnessMap,it=!!_.specularMap,Je=!!_.specularColorMap,Et=!!_.specularIntensityMap,H=Ue&&!!_.transmissionMap,_e=Ue&&!!_.thicknessMap,J=!!_.gradientMap,ie=!!_.alphaMap,Ee=_.alphaTest>0,ve=!!_.alphaHash,qe=!!_.extensions,Lt=zi;_.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Lt=i.toneMapping);let Kt={shaderID:$,shaderType:_.type,shaderName:_.name,vertexShader:Se,fragmentShader:K,defines:_.defines,customVertexShaderID:re,customFragmentShaderID:me,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:f,batching:ce,batchingColor:ce&&E._colorsTexture!==null,instancing:ae,instancingColor:ae&&E.instanceColor!==null,instancingMorph:ae&&E.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:j===null?i.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:tn,alphaToCoverage:!!_.alphaToCoverage,map:le,matcap:fe,envMap:Be,envMapMode:Be&&B.mapping,envMapCubeUVHeight:k,aoMap:L,lightMap:Te,bumpMap:Q,normalMap:Fe,displacementMap:d&&oe,emissiveMap:Ie,normalMapObjectSpace:Fe&&_.normalMapType===G0,normalMapTangentSpace:Fe&&_.normalMapType===Ff,metalnessMap:Pe,roughnessMap:D,anisotropy:R,anisotropyMap:ye,clearcoat:X,clearcoatMap:Ae,clearcoatNormalMap:st,clearcoatRoughnessMap:he,dispersion:te,iridescence:ne,iridescenceMap:Re,iridescenceThicknessMap:He,sheen:ee,sheenColorMap:Ve,sheenRoughnessMap:Ce,specularMap:it,specularColorMap:Je,specularIntensityMap:Et,transmission:Ue,transmissionMap:H,thicknessMap:_e,gradientMap:J,opaque:_.transparent===!1&&_.blending===nr&&_.alphaToCoverage===!1,alphaMap:ie,alphaTest:Ee,alphaHash:ve,combine:_.combine,mapUv:le&&p(_.map.channel),aoMapUv:L&&p(_.aoMap.channel),lightMapUv:Te&&p(_.lightMap.channel),bumpMapUv:Q&&p(_.bumpMap.channel),normalMapUv:Fe&&p(_.normalMap.channel),displacementMapUv:oe&&p(_.displacementMap.channel),emissiveMapUv:Ie&&p(_.emissiveMap.channel),metalnessMapUv:Pe&&p(_.metalnessMap.channel),roughnessMapUv:D&&p(_.roughnessMap.channel),anisotropyMapUv:ye&&p(_.anisotropyMap.channel),clearcoatMapUv:Ae&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:st&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:He&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ve&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&p(_.sheenRoughnessMap.channel),specularMapUv:it&&p(_.specularMap.channel),specularColorMapUv:Je&&p(_.specularColorMap.channel),specularIntensityMapUv:Et&&p(_.specularIntensityMap.channel),transmissionMapUv:H&&p(_.transmissionMap.channel),thicknessMapUv:_e&&p(_.thicknessMap.channel),alphaMapUv:ie&&p(_.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Fe||R),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:E.isPoints===!0&&!!z.attributes.uv&&(le||ie),fog:!!C,useFog:_.fog===!0,fogExp2:!!C&&C.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:xe,skinning:E.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:pe,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:Lt,decodeVideoTexture:le&&_.map.isVideoTexture===!0&&Qe.getTransfer(_.map.colorSpace)===ft,decodeVideoTextureEmissive:Ie&&_.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(_.emissiveMap.colorSpace)===ft,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===mt,flipSided:_.side===jt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:qe&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qe&&_.extensions.multiDraw===!0||ce)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Kt.vertexUv1s=c.has(1),Kt.vertexUv2s=c.has(2),Kt.vertexUv3s=c.has(3),c.clear(),Kt}function m(_){let y=[];if(_.shaderID?y.push(_.shaderID):(y.push(_.customVertexShaderID),y.push(_.customFragmentShaderID)),_.defines!==void 0)for(let A in _.defines)y.push(A),y.push(_.defines[A]);return _.isRawShaderMaterial===!1&&(v(y,_),b(y,_),y.push(i.outputColorSpace)),y.push(_.customProgramCacheKey),y.join()}function v(_,y){_.push(y.precision),_.push(y.outputColorSpace),_.push(y.envMapMode),_.push(y.envMapCubeUVHeight),_.push(y.mapUv),_.push(y.alphaMapUv),_.push(y.lightMapUv),_.push(y.aoMapUv),_.push(y.bumpMapUv),_.push(y.normalMapUv),_.push(y.displacementMapUv),_.push(y.emissiveMapUv),_.push(y.metalnessMapUv),_.push(y.roughnessMapUv),_.push(y.anisotropyMapUv),_.push(y.clearcoatMapUv),_.push(y.clearcoatNormalMapUv),_.push(y.clearcoatRoughnessMapUv),_.push(y.iridescenceMapUv),_.push(y.iridescenceThicknessMapUv),_.push(y.sheenColorMapUv),_.push(y.sheenRoughnessMapUv),_.push(y.specularMapUv),_.push(y.specularColorMapUv),_.push(y.specularIntensityMapUv),_.push(y.transmissionMapUv),_.push(y.thicknessMapUv),_.push(y.combine),_.push(y.fogExp2),_.push(y.sizeAttenuation),_.push(y.morphTargetsCount),_.push(y.morphAttributeCount),_.push(y.numDirLights),_.push(y.numPointLights),_.push(y.numSpotLights),_.push(y.numSpotLightMaps),_.push(y.numHemiLights),_.push(y.numRectAreaLights),_.push(y.numDirLightShadows),_.push(y.numPointLightShadows),_.push(y.numSpotLightShadows),_.push(y.numSpotLightShadowsWithMaps),_.push(y.numLightProbes),_.push(y.shadowMapType),_.push(y.toneMapping),_.push(y.numClippingPlanes),_.push(y.numClipIntersection),_.push(y.depthPacking)}function b(_,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),_.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),_.push(a.mask)}function M(_){let y=x[_.type],A;if(y){let U=Kn[y];A=Yi.clone(U.uniforms)}else A=_.uniforms;return A}function w(_,y){let A;for(let U=0,E=h.length;U<E;U++){let C=h[U];if(C.cacheKey===y){A=C,++A.usedTimes;break}}return A===void 0&&(A=new zv(i,y,_,r),h.push(A)),A}function S(_){if(--_.usedTimes===0){let y=h.indexOf(_);h[y]=h[h.length-1],h.pop(),_.destroy()}}function T(_){l.remove(_)}function I(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:M,acquireProgram:w,releaseProgram:S,releaseShaderCache:T,programs:h,dispose:I}}function Bv(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Hv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Jd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function jd(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,d,f,x,p,g){let m=i[e];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:x,renderOrder:u.renderOrder,z:p,group:g},i[e]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=x,m.renderOrder=u.renderOrder,m.z=p,m.group=g),e++,m}function a(u,d,f,x,p,g){let m=o(u,d,f,x,p,g);f.transmission>0?n.push(m):f.transparent===!0?s.push(m):t.push(m)}function l(u,d,f,x,p,g){let m=o(u,d,f,x,p,g);f.transmission>0?n.unshift(m):f.transparent===!0?s.unshift(m):t.unshift(m)}function c(u,d){t.length>1&&t.sort(u||Hv),n.length>1&&n.sort(d||Jd),s.length>1&&s.sort(d||Jd)}function h(){for(let u=e,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Vv(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new jd,i.set(n,[o])):s>=r.length?(o=new jd,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Gv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new be};break;case"SpotLight":t={position:new N,direction:new N,color:new be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new be,groundColor:new be};break;case"RectAreaLight":t={color:new be,position:new N,halfWidth:new N,halfHeight:new N};break}return i[e.id]=t,t}}}function Wv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Xv=0;function Yv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function qv(i){let e=new Gv,t=Wv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);let s=new N,r=new Ge,o=new Ge;function a(c){let h=0,u=0,d=0;for(let _=0;_<9;_++)n.probe[_].set(0,0,0);let f=0,x=0,p=0,g=0,m=0,v=0,b=0,M=0,w=0,S=0,T=0;c.sort(Yv);for(let _=0,y=c.length;_<y;_++){let A=c[_],U=A.color,E=A.intensity,C=A.distance,z=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)h+=U.r*E,u+=U.g*E,d+=U.b*E;else if(A.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(A.sh.coefficients[O],E);T++}else if(A.isDirectionalLight){let O=e.get(A);if(O.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let B=A.shadow,k=t.get(A);k.shadowIntensity=B.intensity,k.shadowBias=B.bias,k.shadowNormalBias=B.normalBias,k.shadowRadius=B.radius,k.shadowMapSize=B.mapSize,n.directionalShadow[f]=k,n.directionalShadowMap[f]=z,n.directionalShadowMatrix[f]=A.shadow.matrix,v++}n.directional[f]=O,f++}else if(A.isSpotLight){let O=e.get(A);O.position.setFromMatrixPosition(A.matrixWorld),O.color.copy(U).multiplyScalar(E),O.distance=C,O.coneCos=Math.cos(A.angle),O.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),O.decay=A.decay,n.spot[p]=O;let B=A.shadow;if(A.map&&(n.spotLightMap[w]=A.map,w++,B.updateMatrices(A),A.castShadow&&S++),n.spotLightMatrix[p]=B.matrix,A.castShadow){let k=t.get(A);k.shadowIntensity=B.intensity,k.shadowBias=B.bias,k.shadowNormalBias=B.normalBias,k.shadowRadius=B.radius,k.shadowMapSize=B.mapSize,n.spotShadow[p]=k,n.spotShadowMap[p]=z,M++}p++}else if(A.isRectAreaLight){let O=e.get(A);O.color.copy(U).multiplyScalar(E),O.halfWidth.set(A.width*.5,0,0),O.halfHeight.set(0,A.height*.5,0),n.rectArea[g]=O,g++}else if(A.isPointLight){let O=e.get(A);if(O.color.copy(A.color).multiplyScalar(A.intensity),O.distance=A.distance,O.decay=A.decay,A.castShadow){let B=A.shadow,k=t.get(A);k.shadowIntensity=B.intensity,k.shadowBias=B.bias,k.shadowNormalBias=B.normalBias,k.shadowRadius=B.radius,k.shadowMapSize=B.mapSize,k.shadowCameraNear=B.camera.near,k.shadowCameraFar=B.camera.far,n.pointShadow[x]=k,n.pointShadowMap[x]=z,n.pointShadowMatrix[x]=A.shadow.matrix,b++}n.point[x]=O,x++}else if(A.isHemisphereLight){let O=e.get(A);O.skyColor.copy(A.color).multiplyScalar(E),O.groundColor.copy(A.groundColor).multiplyScalar(E),n.hemi[m]=O,m++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ge.LTC_FLOAT_1,n.rectAreaLTC2=ge.LTC_FLOAT_2):(n.rectAreaLTC1=ge.LTC_HALF_1,n.rectAreaLTC2=ge.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let I=n.hash;(I.directionalLength!==f||I.pointLength!==x||I.spotLength!==p||I.rectAreaLength!==g||I.hemiLength!==m||I.numDirectionalShadows!==v||I.numPointShadows!==b||I.numSpotShadows!==M||I.numSpotMaps!==w||I.numLightProbes!==T)&&(n.directional.length=f,n.spot.length=p,n.rectArea.length=g,n.point.length=x,n.hemi.length=m,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=M+w-S,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=T,I.directionalLength=f,I.pointLength=x,I.spotLength=p,I.rectAreaLength=g,I.hemiLength=m,I.numDirectionalShadows=v,I.numPointShadows=b,I.numSpotShadows=M,I.numSpotMaps=w,I.numLightProbes=T,n.version=Xv++)}function l(c,h){let u=0,d=0,f=0,x=0,p=0,g=h.matrixWorldInverse;for(let m=0,v=c.length;m<v;m++){let b=c[m];if(b.isDirectionalLight){let M=n.directional[u];M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),u++}else if(b.isSpotLight){let M=n.spot[f];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),f++}else if(b.isRectAreaLight){let M=n.rectArea[x];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(g),o.identity(),r.copy(b.matrixWorld),r.premultiply(g),o.extractRotation(r),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),x++}else if(b.isPointLight){let M=n.point[d];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(g),d++}else if(b.isHemisphereLight){let M=n.hemi[p];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(g),p++}}}return{setup:a,setupView:l,state:n}}function Qd(i){let e=new qv(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Kv(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Qd(i),e.set(s,[a])):r>=o.length?(a=new Qd(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Qc=class extends dn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=H0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},eh=class extends dn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Zv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$v=`uniform sampler2D shadow_pass;
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
}`;function Jv(i,e,t){let n=new oo,s=new we,r=new we,o=new ct,a=new Qc({depthPacking:V0}),l=new eh,c={},h=t.maxTextureSize,u={[$n]:jt,[jt]:$n,[mt]:mt},d=new It({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new we},radius:{value:4}},vertexShader:Zv,fragmentShader:$v}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let x=new lt;x.setAttribute("position",new et(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let p=new ue(x,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wf;let m=this.type;this.render=function(S,T,I){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;let _=i.getRenderTarget(),y=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),U=i.state;U.setBlending(Zn),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let E=m!==pi&&this.type===pi,C=m===pi&&this.type!==pi;for(let z=0,O=S.length;z<O;z++){let B=S[z],k=B.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);let $=k.getFrameExtents();if(s.multiply($),r.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/$.x),s.x=r.x*$.x,k.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/$.y),s.y=r.y*$.y,k.mapSize.y=r.y)),k.map===null||E===!0||C===!0){let Z=this.type!==pi?{minFilter:Qt,magFilter:Qt}:{};k.map!==null&&k.map.dispose(),k.map=new rn(s.x,s.y,Z),k.map.texture.name=B.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();let W=k.getViewportCount();for(let Z=0;Z<W;Z++){let pe=k.getViewport(Z);o.set(r.x*pe.x,r.y*pe.y,r.x*pe.z,r.y*pe.w),U.viewport(o),k.updateMatrices(B,Z),n=k.getFrustum(),M(T,I,k.camera,B,this.type)}k.isPointLightShadow!==!0&&this.type===pi&&v(k,I),k.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(_,y,A)};function v(S,T){let I=e.update(p);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new rn(s.x,s.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(T,null,I,d,p,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(T,null,I,f,p,null)}function b(S,T,I,_){let y=null,A=I.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(A!==void 0)y=A;else if(y=I.isPointLight===!0?l:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let U=y.uuid,E=T.uuid,C=c[U];C===void 0&&(C={},c[U]=C);let z=C[E];z===void 0&&(z=y.clone(),C[E]=z,T.addEventListener("dispose",w)),y=z}if(y.visible=T.visible,y.wireframe=T.wireframe,_===pi?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:u[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,I.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let U=i.properties.get(y);U.light=I}return y}function M(S,T,I,_,y){if(S.visible===!1)return;if(S.layers.test(T.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&y===pi)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,S.matrixWorld);let E=e.update(S),C=S.material;if(Array.isArray(C)){let z=E.groups;for(let O=0,B=z.length;O<B;O++){let k=z[O],$=C[k.materialIndex];if($&&$.visible){let W=b(S,$,_,y);S.onBeforeShadow(i,S,T,I,E,W,k),i.renderBufferDirect(I,null,E,W,S,k),S.onAfterShadow(i,S,T,I,E,W,k)}}}else if(C.visible){let z=b(S,C,_,y);S.onBeforeShadow(i,S,T,I,E,z,null),i.renderBufferDirect(I,null,E,z,S,null),S.onAfterShadow(i,S,T,I,E,z,null)}}let U=S.children;for(let E=0,C=U.length;E<C;E++)M(U[E],T,I,_,y)}function w(S){S.target.removeEventListener("dispose",w);for(let I in c){let _=c[I],y=S.target.uuid;y in _&&(_[y].dispose(),delete _[y])}}}var jv={[oc]:ac,[lc]:uc,[cc]:dc,[or]:hc,[ac]:oc,[uc]:lc,[dc]:cc,[hc]:or};function Qv(i,e){function t(){let H=!1,_e=new ct,J=null,ie=new ct(0,0,0,0);return{setMask:function(Ee){J!==Ee&&!H&&(i.colorMask(Ee,Ee,Ee,Ee),J=Ee)},setLocked:function(Ee){H=Ee},setClear:function(Ee,ve,qe,Lt,Kt){Kt===!0&&(Ee*=Lt,ve*=Lt,qe*=Lt),_e.set(Ee,ve,qe,Lt),ie.equals(_e)===!1&&(i.clearColor(Ee,ve,qe,Lt),ie.copy(_e))},reset:function(){H=!1,J=null,ie.set(-1,0,0,0)}}}function n(){let H=!1,_e=!1,J=null,ie=null,Ee=null;return{setReversed:function(ve){if(_e!==ve){let qe=e.get("EXT_clip_control");_e?qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.ZERO_TO_ONE_EXT):qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.NEGATIVE_ONE_TO_ONE_EXT);let Lt=Ee;Ee=null,this.setClear(Lt)}_e=ve},getReversed:function(){return _e},setTest:function(ve){ve?j(i.DEPTH_TEST):xe(i.DEPTH_TEST)},setMask:function(ve){J!==ve&&!H&&(i.depthMask(ve),J=ve)},setFunc:function(ve){if(_e&&(ve=jv[ve]),ie!==ve){switch(ve){case oc:i.depthFunc(i.NEVER);break;case ac:i.depthFunc(i.ALWAYS);break;case lc:i.depthFunc(i.LESS);break;case or:i.depthFunc(i.LEQUAL);break;case cc:i.depthFunc(i.EQUAL);break;case hc:i.depthFunc(i.GEQUAL);break;case uc:i.depthFunc(i.GREATER);break;case dc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ie=ve}},setLocked:function(ve){H=ve},setClear:function(ve){Ee!==ve&&(_e&&(ve=1-ve),i.clearDepth(ve),Ee=ve)},reset:function(){H=!1,J=null,ie=null,Ee=null,_e=!1}}}function s(){let H=!1,_e=null,J=null,ie=null,Ee=null,ve=null,qe=null,Lt=null,Kt=null;return{setTest:function(xt){H||(xt?j(i.STENCIL_TEST):xe(i.STENCIL_TEST))},setMask:function(xt){_e!==xt&&!H&&(i.stencilMask(xt),_e=xt)},setFunc:function(xt,Pn,oi){(J!==xt||ie!==Pn||Ee!==oi)&&(i.stencilFunc(xt,Pn,oi),J=xt,ie=Pn,Ee=oi)},setOp:function(xt,Pn,oi){(ve!==xt||qe!==Pn||Lt!==oi)&&(i.stencilOp(xt,Pn,oi),ve=xt,qe=Pn,Lt=oi)},setLocked:function(xt){H=xt},setClear:function(xt){Kt!==xt&&(i.clearStencil(xt),Kt=xt)},reset:function(){H=!1,_e=null,J=null,ie=null,Ee=null,ve=null,qe=null,Lt=null,Kt=null}}}let r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,f=[],x=null,p=!1,g=null,m=null,v=null,b=null,M=null,w=null,S=null,T=new be(0,0,0),I=0,_=!1,y=null,A=null,U=null,E=null,C=null,z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,B=0,k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(k)[1]),O=B>=1):k.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),O=B>=2);let $=null,W={},Z=i.getParameter(i.SCISSOR_BOX),pe=i.getParameter(i.VIEWPORT),Se=new ct().fromArray(Z),K=new ct().fromArray(pe);function re(H,_e,J,ie){let Ee=new Uint8Array(4),ve=i.createTexture();i.bindTexture(H,ve),i.texParameteri(H,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(H,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let qe=0;qe<J;qe++)H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY?i.texImage3D(_e,0,i.RGBA,1,1,ie,0,i.RGBA,i.UNSIGNED_BYTE,Ee):i.texImage2D(_e+qe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ee);return ve}let me={};me[i.TEXTURE_2D]=re(i.TEXTURE_2D,i.TEXTURE_2D,1),me[i.TEXTURE_CUBE_MAP]=re(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),me[i.TEXTURE_2D_ARRAY]=re(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),me[i.TEXTURE_3D]=re(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),j(i.DEPTH_TEST),o.setFunc(or),Q(!1),Fe(sd),j(i.CULL_FACE),L(Zn);function j(H){h[H]!==!0&&(i.enable(H),h[H]=!0)}function xe(H){h[H]!==!1&&(i.disable(H),h[H]=!1)}function ae(H,_e){return u[H]!==_e?(i.bindFramebuffer(H,_e),u[H]=_e,H===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=_e),H===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=_e),!0):!1}function ce(H,_e){let J=f,ie=!1;if(H){J=d.get(_e),J===void 0&&(J=[],d.set(_e,J));let Ee=H.textures;if(J.length!==Ee.length||J[0]!==i.COLOR_ATTACHMENT0){for(let ve=0,qe=Ee.length;ve<qe;ve++)J[ve]=i.COLOR_ATTACHMENT0+ve;J.length=Ee.length,ie=!0}}else J[0]!==i.BACK&&(J[0]=i.BACK,ie=!0);ie&&i.drawBuffers(J)}function le(H){return x!==H?(i.useProgram(H),x=H,!0):!1}let fe={[ms]:i.FUNC_ADD,[_0]:i.FUNC_SUBTRACT,[y0]:i.FUNC_REVERSE_SUBTRACT};fe[v0]=i.MIN,fe[M0]=i.MAX;let Be={[b0]:i.ZERO,[E0]:i.ONE,[S0]:i.SRC_COLOR,[sc]:i.SRC_ALPHA,[I0]:i.SRC_ALPHA_SATURATE,[R0]:i.DST_COLOR,[T0]:i.DST_ALPHA,[w0]:i.ONE_MINUS_SRC_COLOR,[rc]:i.ONE_MINUS_SRC_ALPHA,[C0]:i.ONE_MINUS_DST_COLOR,[A0]:i.ONE_MINUS_DST_ALPHA,[P0]:i.CONSTANT_COLOR,[L0]:i.ONE_MINUS_CONSTANT_COLOR,[D0]:i.CONSTANT_ALPHA,[N0]:i.ONE_MINUS_CONSTANT_ALPHA};function L(H,_e,J,ie,Ee,ve,qe,Lt,Kt,xt){if(H===Zn){p===!0&&(xe(i.BLEND),p=!1);return}if(p===!1&&(j(i.BLEND),p=!0),H!==x0){if(H!==g||xt!==_){if((m!==ms||M!==ms)&&(i.blendEquation(i.FUNC_ADD),m=ms,M=ms),xt)switch(H){case nr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ht:i.blendFunc(i.ONE,i.ONE);break;case rd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case od:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case nr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ht:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case rd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case od:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}v=null,b=null,w=null,S=null,T.set(0,0,0),I=0,g=H,_=xt}return}Ee=Ee||_e,ve=ve||J,qe=qe||ie,(_e!==m||Ee!==M)&&(i.blendEquationSeparate(fe[_e],fe[Ee]),m=_e,M=Ee),(J!==v||ie!==b||ve!==w||qe!==S)&&(i.blendFuncSeparate(Be[J],Be[ie],Be[ve],Be[qe]),v=J,b=ie,w=ve,S=qe),(Lt.equals(T)===!1||Kt!==I)&&(i.blendColor(Lt.r,Lt.g,Lt.b,Kt),T.copy(Lt),I=Kt),g=H,_=!1}function Te(H,_e){H.side===mt?xe(i.CULL_FACE):j(i.CULL_FACE);let J=H.side===jt;_e&&(J=!J),Q(J),H.blending===nr&&H.transparent===!1?L(Zn):L(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),o.setFunc(H.depthFunc),o.setTest(H.depthTest),o.setMask(H.depthWrite),r.setMask(H.colorWrite);let ie=H.stencilWrite;a.setTest(ie),ie&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Ie(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?j(i.SAMPLE_ALPHA_TO_COVERAGE):xe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Q(H){y!==H&&(H?i.frontFace(i.CW):i.frontFace(i.CCW),y=H)}function Fe(H){H!==m0?(j(i.CULL_FACE),H!==A&&(H===sd?i.cullFace(i.BACK):H===g0?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):xe(i.CULL_FACE),A=H}function oe(H){H!==U&&(O&&i.lineWidth(H),U=H)}function Ie(H,_e,J){H?(j(i.POLYGON_OFFSET_FILL),(E!==_e||C!==J)&&(i.polygonOffset(_e,J),E=_e,C=J)):xe(i.POLYGON_OFFSET_FILL)}function Pe(H){H?j(i.SCISSOR_TEST):xe(i.SCISSOR_TEST)}function D(H){H===void 0&&(H=i.TEXTURE0+z-1),$!==H&&(i.activeTexture(H),$=H)}function R(H,_e,J){J===void 0&&($===null?J=i.TEXTURE0+z-1:J=$);let ie=W[J];ie===void 0&&(ie={type:void 0,texture:void 0},W[J]=ie),(ie.type!==H||ie.texture!==_e)&&($!==J&&(i.activeTexture(J),$=J),i.bindTexture(H,_e||me[H]),ie.type=H,ie.texture=_e)}function X(){let H=W[$];H!==void 0&&H.type!==void 0&&(i.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function te(){try{i.compressedTexImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ne(){try{i.compressedTexImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ee(){try{i.texSubImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ue(){try{i.texSubImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ye(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ae(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function st(){try{i.texStorage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function he(){try{i.texStorage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Re(){try{i.texImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function He(){try{i.texImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ve(H){Se.equals(H)===!1&&(i.scissor(H.x,H.y,H.z,H.w),Se.copy(H))}function Ce(H){K.equals(H)===!1&&(i.viewport(H.x,H.y,H.z,H.w),K.copy(H))}function it(H,_e){let J=c.get(_e);J===void 0&&(J=new WeakMap,c.set(_e,J));let ie=J.get(H);ie===void 0&&(ie=i.getUniformBlockIndex(_e,H.name),J.set(H,ie))}function Je(H,_e){let ie=c.get(_e).get(H);l.get(_e)!==ie&&(i.uniformBlockBinding(_e,ie,H.__bindingPointIndex),l.set(_e,ie))}function Et(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},$=null,W={},u={},d=new WeakMap,f=[],x=null,p=!1,g=null,m=null,v=null,b=null,M=null,w=null,S=null,T=new be(0,0,0),I=0,_=!1,y=null,A=null,U=null,E=null,C=null,Se.set(0,0,i.canvas.width,i.canvas.height),K.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:j,disable:xe,bindFramebuffer:ae,drawBuffers:ce,useProgram:le,setBlending:L,setMaterial:Te,setFlipSided:Q,setCullFace:Fe,setLineWidth:oe,setPolygonOffset:Ie,setScissorTest:Pe,activeTexture:D,bindTexture:R,unbindTexture:X,compressedTexImage2D:te,compressedTexImage3D:ne,texImage2D:Re,texImage3D:He,updateUBOMapping:it,uniformBlockBinding:Je,texStorage2D:st,texStorage3D:he,texSubImage2D:ee,texSubImage3D:Ue,compressedTexSubImage2D:ye,compressedTexSubImage3D:Ae,scissor:Ve,viewport:Ce,reset:Et}}function ef(i,e,t,n){let s=eM(n);switch(t){case Pf:return i*e;case Df:return i*e;case Nf:return i*e*2;case Ch:return i*e/s.components*s.byteLength;case Ih:return i*e/s.components*s.byteLength;case Uf:return i*e*2/s.components*s.byteLength;case Ph:return i*e*2/s.components*s.byteLength;case Lf:return i*e*3/s.components*s.byteLength;case wn:return i*e*4/s.components*s.byteLength;case Lh:return i*e*4/s.components*s.byteLength;case ra:case oa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case aa:case la:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case gc:case _c:return Math.max(i,16)*Math.max(e,8)/4;case mc:case xc:return Math.max(i,8)*Math.max(e,8)/2;case yc:case vc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Mc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case bc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ec:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Sc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case wc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Tc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ac:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Rc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Cc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ic:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Pc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Lc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Dc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Nc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Uc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ca:case Oc:case zc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Of:case Fc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case kc:case Bc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function eM(i){switch(i){case _i:case Rf:return{byteLength:1,components:1};case io:case Cf:case Bn:return{byteLength:2,components:1};case Ah:case Rh:return{byteLength:2,components:4};case xs:case Th:case Fn:return{byteLength:4,components:1};case If:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function tM(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new we,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(D,R){return f?new OffscreenCanvas(D,R):so("canvas")}function p(D,R,X){let te=1,ne=Pe(D);if((ne.width>X||ne.height>X)&&(te=X/Math.max(ne.width,ne.height)),te<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){let ee=Math.floor(te*ne.width),Ue=Math.floor(te*ne.height);u===void 0&&(u=x(ee,Ue));let ye=R?x(ee,Ue):u;return ye.width=ee,ye.height=Ue,ye.getContext("2d").drawImage(D,0,0,ee,Ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+ee+"x"+Ue+")."),ye}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),D;return D}function g(D){return D.generateMipmaps}function m(D){i.generateMipmap(D)}function v(D){return D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?i.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(D,R,X,te,ne=!1){if(D!==null){if(i[D]!==void 0)return i[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ee=R;if(R===i.RED&&(X===i.FLOAT&&(ee=i.R32F),X===i.HALF_FLOAT&&(ee=i.R16F),X===i.UNSIGNED_BYTE&&(ee=i.R8)),R===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(ee=i.R8UI),X===i.UNSIGNED_SHORT&&(ee=i.R16UI),X===i.UNSIGNED_INT&&(ee=i.R32UI),X===i.BYTE&&(ee=i.R8I),X===i.SHORT&&(ee=i.R16I),X===i.INT&&(ee=i.R32I)),R===i.RG&&(X===i.FLOAT&&(ee=i.RG32F),X===i.HALF_FLOAT&&(ee=i.RG16F),X===i.UNSIGNED_BYTE&&(ee=i.RG8)),R===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(ee=i.RG8UI),X===i.UNSIGNED_SHORT&&(ee=i.RG16UI),X===i.UNSIGNED_INT&&(ee=i.RG32UI),X===i.BYTE&&(ee=i.RG8I),X===i.SHORT&&(ee=i.RG16I),X===i.INT&&(ee=i.RG32I)),R===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(ee=i.RGB8UI),X===i.UNSIGNED_SHORT&&(ee=i.RGB16UI),X===i.UNSIGNED_INT&&(ee=i.RGB32UI),X===i.BYTE&&(ee=i.RGB8I),X===i.SHORT&&(ee=i.RGB16I),X===i.INT&&(ee=i.RGB32I)),R===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(ee=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(ee=i.RGBA16UI),X===i.UNSIGNED_INT&&(ee=i.RGBA32UI),X===i.BYTE&&(ee=i.RGBA8I),X===i.SHORT&&(ee=i.RGBA16I),X===i.INT&&(ee=i.RGBA32I)),R===i.RGB&&X===i.UNSIGNED_INT_5_9_9_9_REV&&(ee=i.RGB9_E5),R===i.RGBA){let Ue=ne?Ha:Qe.getTransfer(te);X===i.FLOAT&&(ee=i.RGBA32F),X===i.HALF_FLOAT&&(ee=i.RGBA16F),X===i.UNSIGNED_BYTE&&(ee=Ue===ft?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT_4_4_4_4&&(ee=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(ee=i.RGB5_A1)}return(ee===i.R16F||ee===i.R32F||ee===i.RG16F||ee===i.RG32F||ee===i.RGBA16F||ee===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function M(D,R){let X;return D?R===null||R===xs||R===cr?X=i.DEPTH24_STENCIL8:R===Fn?X=i.DEPTH32F_STENCIL8:R===io&&(X=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===xs||R===cr?X=i.DEPTH_COMPONENT24:R===Fn?X=i.DEPTH_COMPONENT32F:R===io&&(X=i.DEPTH_COMPONENT16),X}function w(D,R){return g(D)===!0||D.isFramebufferTexture&&D.minFilter!==Qt&&D.minFilter!==hn?Math.log2(Math.max(R.width,R.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?R.mipmaps.length:1}function S(D){let R=D.target;R.removeEventListener("dispose",S),I(R),R.isVideoTexture&&h.delete(R)}function T(D){let R=D.target;R.removeEventListener("dispose",T),y(R)}function I(D){let R=n.get(D);if(R.__webglInit===void 0)return;let X=D.source,te=d.get(X);if(te){let ne=te[R.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&_(D),Object.keys(te).length===0&&d.delete(X)}n.remove(D)}function _(D){let R=n.get(D);i.deleteTexture(R.__webglTexture);let X=D.source,te=d.get(X);delete te[R.__cacheKey],o.memory.textures--}function y(D){let R=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(R.__webglFramebuffer[te]))for(let ne=0;ne<R.__webglFramebuffer[te].length;ne++)i.deleteFramebuffer(R.__webglFramebuffer[te][ne]);else i.deleteFramebuffer(R.__webglFramebuffer[te]);R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer[te])}else{if(Array.isArray(R.__webglFramebuffer))for(let te=0;te<R.__webglFramebuffer.length;te++)i.deleteFramebuffer(R.__webglFramebuffer[te]);else i.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&i.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let te=0;te<R.__webglColorRenderbuffer.length;te++)R.__webglColorRenderbuffer[te]&&i.deleteRenderbuffer(R.__webglColorRenderbuffer[te]);R.__webglDepthRenderbuffer&&i.deleteRenderbuffer(R.__webglDepthRenderbuffer)}let X=D.textures;for(let te=0,ne=X.length;te<ne;te++){let ee=n.get(X[te]);ee.__webglTexture&&(i.deleteTexture(ee.__webglTexture),o.memory.textures--),n.remove(X[te])}n.remove(D)}let A=0;function U(){A=0}function E(){let D=A;return D>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+s.maxTextures),A+=1,D}function C(D){let R=[];return R.push(D.wrapS),R.push(D.wrapT),R.push(D.wrapR||0),R.push(D.magFilter),R.push(D.minFilter),R.push(D.anisotropy),R.push(D.internalFormat),R.push(D.format),R.push(D.type),R.push(D.generateMipmaps),R.push(D.premultiplyAlpha),R.push(D.flipY),R.push(D.unpackAlignment),R.push(D.colorSpace),R.join()}function z(D,R){let X=n.get(D);if(D.isVideoTexture&&oe(D),D.isRenderTargetTexture===!1&&D.version>0&&X.__version!==D.version){let te=D.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(X,D,R);return}}t.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+R)}function O(D,R){let X=n.get(D);if(D.version>0&&X.__version!==D.version){K(X,D,R);return}t.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+R)}function B(D,R){let X=n.get(D);if(D.version>0&&X.__version!==D.version){K(X,D,R);return}t.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+R)}function k(D,R){let X=n.get(D);if(D.version>0&&X.__version!==D.version){re(X,D,R);return}t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+R)}let $={[un]:i.REPEAT,[mi]:i.CLAMP_TO_EDGE,[no]:i.MIRRORED_REPEAT},W={[Qt]:i.NEAREST,[wh]:i.NEAREST_MIPMAP_NEAREST,[js]:i.NEAREST_MIPMAP_LINEAR,[hn]:i.LINEAR,[jr]:i.LINEAR_MIPMAP_NEAREST,[Sn]:i.LINEAR_MIPMAP_LINEAR},Z={[W0]:i.NEVER,[$0]:i.ALWAYS,[X0]:i.LESS,[kf]:i.LEQUAL,[Y0]:i.EQUAL,[Z0]:i.GEQUAL,[q0]:i.GREATER,[K0]:i.NOTEQUAL};function pe(D,R){if(R.type===Fn&&e.has("OES_texture_float_linear")===!1&&(R.magFilter===hn||R.magFilter===jr||R.magFilter===js||R.magFilter===Sn||R.minFilter===hn||R.minFilter===jr||R.minFilter===js||R.minFilter===Sn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,$[R.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,$[R.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,$[R.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,W[R.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,W[R.minFilter]),R.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,Z[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===Qt||R.minFilter!==js&&R.minFilter!==Sn||R.type===Fn&&e.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||n.get(R).__currentAnisotropy){let X=e.get("EXT_texture_filter_anisotropic");i.texParameterf(D,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,s.getMaxAnisotropy())),n.get(R).__currentAnisotropy=R.anisotropy}}}function Se(D,R){let X=!1;D.__webglInit===void 0&&(D.__webglInit=!0,R.addEventListener("dispose",S));let te=R.source,ne=d.get(te);ne===void 0&&(ne={},d.set(te,ne));let ee=C(R);if(ee!==D.__cacheKey){ne[ee]===void 0&&(ne[ee]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,X=!0),ne[ee].usedTimes++;let Ue=ne[D.__cacheKey];Ue!==void 0&&(ne[D.__cacheKey].usedTimes--,Ue.usedTimes===0&&_(R)),D.__cacheKey=ee,D.__webglTexture=ne[ee].texture}return X}function K(D,R,X){let te=i.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(te=i.TEXTURE_2D_ARRAY),R.isData3DTexture&&(te=i.TEXTURE_3D);let ne=Se(D,R),ee=R.source;t.bindTexture(te,D.__webglTexture,i.TEXTURE0+X);let Ue=n.get(ee);if(ee.version!==Ue.__version||ne===!0){t.activeTexture(i.TEXTURE0+X);let ye=Qe.getPrimaries(Qe.workingColorSpace),Ae=R.colorSpace===Ni?null:Qe.getPrimaries(R.colorSpace),st=R.colorSpace===Ni||ye===Ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,st);let he=p(R.image,!1,s.maxTextureSize);he=Ie(R,he);let Re=r.convert(R.format,R.colorSpace),He=r.convert(R.type),Ve=b(R.internalFormat,Re,He,R.colorSpace,R.isVideoTexture);pe(te,R);let Ce,it=R.mipmaps,Je=R.isVideoTexture!==!0,Et=Ue.__version===void 0||ne===!0,H=ee.dataReady,_e=w(R,he);if(R.isDepthTexture)Ve=M(R.format===hr,R.type),Et&&(Je?t.texStorage2D(i.TEXTURE_2D,1,Ve,he.width,he.height):t.texImage2D(i.TEXTURE_2D,0,Ve,he.width,he.height,0,Re,He,null));else if(R.isDataTexture)if(it.length>0){Je&&Et&&t.texStorage2D(i.TEXTURE_2D,_e,Ve,it[0].width,it[0].height);for(let J=0,ie=it.length;J<ie;J++)Ce=it[J],Je?H&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,Ce.width,Ce.height,Re,He,Ce.data):t.texImage2D(i.TEXTURE_2D,J,Ve,Ce.width,Ce.height,0,Re,He,Ce.data);R.generateMipmaps=!1}else Je?(Et&&t.texStorage2D(i.TEXTURE_2D,_e,Ve,he.width,he.height),H&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,he.width,he.height,Re,He,he.data)):t.texImage2D(i.TEXTURE_2D,0,Ve,he.width,he.height,0,Re,He,he.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){Je&&Et&&t.texStorage3D(i.TEXTURE_2D_ARRAY,_e,Ve,it[0].width,it[0].height,he.depth);for(let J=0,ie=it.length;J<ie;J++)if(Ce=it[J],R.format!==wn)if(Re!==null)if(Je){if(H)if(R.layerUpdates.size>0){let Ee=ef(Ce.width,Ce.height,R.format,R.type);for(let ve of R.layerUpdates){let qe=Ce.data.subarray(ve*Ee/Ce.data.BYTES_PER_ELEMENT,(ve+1)*Ee/Ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,ve,Ce.width,Ce.height,1,Re,qe)}R.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,Ce.width,Ce.height,he.depth,Re,Ce.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,J,Ve,Ce.width,Ce.height,he.depth,0,Ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Je?H&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,Ce.width,Ce.height,he.depth,Re,He,Ce.data):t.texImage3D(i.TEXTURE_2D_ARRAY,J,Ve,Ce.width,Ce.height,he.depth,0,Re,He,Ce.data)}else{Je&&Et&&t.texStorage2D(i.TEXTURE_2D,_e,Ve,it[0].width,it[0].height);for(let J=0,ie=it.length;J<ie;J++)Ce=it[J],R.format!==wn?Re!==null?Je?H&&t.compressedTexSubImage2D(i.TEXTURE_2D,J,0,0,Ce.width,Ce.height,Re,Ce.data):t.compressedTexImage2D(i.TEXTURE_2D,J,Ve,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?H&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,Ce.width,Ce.height,Re,He,Ce.data):t.texImage2D(i.TEXTURE_2D,J,Ve,Ce.width,Ce.height,0,Re,He,Ce.data)}else if(R.isDataArrayTexture)if(Je){if(Et&&t.texStorage3D(i.TEXTURE_2D_ARRAY,_e,Ve,he.width,he.height,he.depth),H)if(R.layerUpdates.size>0){let J=ef(he.width,he.height,R.format,R.type);for(let ie of R.layerUpdates){let Ee=he.data.subarray(ie*J/he.data.BYTES_PER_ELEMENT,(ie+1)*J/he.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ie,he.width,he.height,1,Re,He,Ee)}R.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,Re,He,he.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ve,he.width,he.height,he.depth,0,Re,He,he.data);else if(R.isData3DTexture)Je?(Et&&t.texStorage3D(i.TEXTURE_3D,_e,Ve,he.width,he.height,he.depth),H&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,Re,He,he.data)):t.texImage3D(i.TEXTURE_3D,0,Ve,he.width,he.height,he.depth,0,Re,He,he.data);else if(R.isFramebufferTexture){if(Et)if(Je)t.texStorage2D(i.TEXTURE_2D,_e,Ve,he.width,he.height);else{let J=he.width,ie=he.height;for(let Ee=0;Ee<_e;Ee++)t.texImage2D(i.TEXTURE_2D,Ee,Ve,J,ie,0,Re,He,null),J>>=1,ie>>=1}}else if(it.length>0){if(Je&&Et){let J=Pe(it[0]);t.texStorage2D(i.TEXTURE_2D,_e,Ve,J.width,J.height)}for(let J=0,ie=it.length;J<ie;J++)Ce=it[J],Je?H&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,Re,He,Ce):t.texImage2D(i.TEXTURE_2D,J,Ve,Re,He,Ce);R.generateMipmaps=!1}else if(Je){if(Et){let J=Pe(he);t.texStorage2D(i.TEXTURE_2D,_e,Ve,J.width,J.height)}H&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Re,He,he)}else t.texImage2D(i.TEXTURE_2D,0,Ve,Re,He,he);g(R)&&m(te),Ue.__version=ee.version,R.onUpdate&&R.onUpdate(R)}D.__version=R.version}function re(D,R,X){if(R.image.length!==6)return;let te=Se(D,R),ne=R.source;t.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+X);let ee=n.get(ne);if(ne.version!==ee.__version||te===!0){t.activeTexture(i.TEXTURE0+X);let Ue=Qe.getPrimaries(Qe.workingColorSpace),ye=R.colorSpace===Ni?null:Qe.getPrimaries(R.colorSpace),Ae=R.colorSpace===Ni||Ue===ye?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let st=R.isCompressedTexture||R.image[0].isCompressedTexture,he=R.image[0]&&R.image[0].isDataTexture,Re=[];for(let ie=0;ie<6;ie++)!st&&!he?Re[ie]=p(R.image[ie],!0,s.maxCubemapSize):Re[ie]=he?R.image[ie].image:R.image[ie],Re[ie]=Ie(R,Re[ie]);let He=Re[0],Ve=r.convert(R.format,R.colorSpace),Ce=r.convert(R.type),it=b(R.internalFormat,Ve,Ce,R.colorSpace),Je=R.isVideoTexture!==!0,Et=ee.__version===void 0||te===!0,H=ne.dataReady,_e=w(R,He);pe(i.TEXTURE_CUBE_MAP,R);let J;if(st){Je&&Et&&t.texStorage2D(i.TEXTURE_CUBE_MAP,_e,it,He.width,He.height);for(let ie=0;ie<6;ie++){J=Re[ie].mipmaps;for(let Ee=0;Ee<J.length;Ee++){let ve=J[Ee];R.format!==wn?Ve!==null?Je?H&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ee,0,0,ve.width,ve.height,Ve,ve.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ee,it,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Je?H&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ee,0,0,ve.width,ve.height,Ve,Ce,ve.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ee,it,ve.width,ve.height,0,Ve,Ce,ve.data)}}}else{if(J=R.mipmaps,Je&&Et){J.length>0&&_e++;let ie=Pe(Re[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,_e,it,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(he){Je?H&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Re[ie].width,Re[ie].height,Ve,Ce,Re[ie].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,it,Re[ie].width,Re[ie].height,0,Ve,Ce,Re[ie].data);for(let Ee=0;Ee<J.length;Ee++){let qe=J[Ee].image[ie].image;Je?H&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ee+1,0,0,qe.width,qe.height,Ve,Ce,qe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ee+1,it,qe.width,qe.height,0,Ve,Ce,qe.data)}}else{Je?H&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Ve,Ce,Re[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,it,Ve,Ce,Re[ie]);for(let Ee=0;Ee<J.length;Ee++){let ve=J[Ee];Je?H&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ee+1,0,0,Ve,Ce,ve.image[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ee+1,it,Ve,Ce,ve.image[ie])}}}g(R)&&m(i.TEXTURE_CUBE_MAP),ee.__version=ne.version,R.onUpdate&&R.onUpdate(R)}D.__version=R.version}function me(D,R,X,te,ne,ee){let Ue=r.convert(X.format,X.colorSpace),ye=r.convert(X.type),Ae=b(X.internalFormat,Ue,ye,X.colorSpace),st=n.get(R),he=n.get(X);if(he.__renderTarget=R,!st.__hasExternalTextures){let Re=Math.max(1,R.width>>ee),He=Math.max(1,R.height>>ee);ne===i.TEXTURE_3D||ne===i.TEXTURE_2D_ARRAY?t.texImage3D(ne,ee,Ae,Re,He,R.depth,0,Ue,ye,null):t.texImage2D(ne,ee,Ae,Re,He,0,Ue,ye,null)}t.bindFramebuffer(i.FRAMEBUFFER,D),Fe(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,ne,he.__webglTexture,0,Q(R)):(ne===i.TEXTURE_2D||ne>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,te,ne,he.__webglTexture,ee),t.bindFramebuffer(i.FRAMEBUFFER,null)}function j(D,R,X){if(i.bindRenderbuffer(i.RENDERBUFFER,D),R.depthBuffer){let te=R.depthTexture,ne=te&&te.isDepthTexture?te.type:null,ee=M(R.stencilBuffer,ne),Ue=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ye=Q(R);Fe(R)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ye,ee,R.width,R.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,ye,ee,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,ee,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ue,i.RENDERBUFFER,D)}else{let te=R.textures;for(let ne=0;ne<te.length;ne++){let ee=te[ne],Ue=r.convert(ee.format,ee.colorSpace),ye=r.convert(ee.type),Ae=b(ee.internalFormat,Ue,ye,ee.colorSpace),st=Q(R);X&&Fe(R)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,st,Ae,R.width,R.height):Fe(R)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,st,Ae,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,Ae,R.width,R.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function xe(D,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,D),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let te=n.get(R.depthTexture);te.__renderTarget=R,(!te.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),z(R.depthTexture,0);let ne=te.__webglTexture,ee=Q(R);if(R.depthTexture.format===ir)Fe(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0);else if(R.depthTexture.format===hr)Fe(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function ae(D){let R=n.get(D),X=D.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==D.depthTexture){let te=D.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),te){let ne=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,te.removeEventListener("dispose",ne)};te.addEventListener("dispose",ne),R.__depthDisposeCallback=ne}R.__boundDepthTexture=te}if(D.depthTexture&&!R.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");xe(R.__webglFramebuffer,D)}else if(X){R.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(t.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer[te]),R.__webglDepthbuffer[te]===void 0)R.__webglDepthbuffer[te]=i.createRenderbuffer(),j(R.__webglDepthbuffer[te],D,!1);else{let ne=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ee=R.__webglDepthbuffer[te];i.bindRenderbuffer(i.RENDERBUFFER,ee),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,ee)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=i.createRenderbuffer(),j(R.__webglDepthbuffer,D,!1);else{let te=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=R.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ne),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,ne)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ce(D,R,X){let te=n.get(D);R!==void 0&&me(te.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&ae(D)}function le(D){let R=D.texture,X=n.get(D),te=n.get(R);D.addEventListener("dispose",T);let ne=D.textures,ee=D.isWebGLCubeRenderTarget===!0,Ue=ne.length>1;if(Ue||(te.__webglTexture===void 0&&(te.__webglTexture=i.createTexture()),te.__version=R.version,o.memory.textures++),ee){X.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(R.mipmaps&&R.mipmaps.length>0){X.__webglFramebuffer[ye]=[];for(let Ae=0;Ae<R.mipmaps.length;Ae++)X.__webglFramebuffer[ye][Ae]=i.createFramebuffer()}else X.__webglFramebuffer[ye]=i.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){X.__webglFramebuffer=[];for(let ye=0;ye<R.mipmaps.length;ye++)X.__webglFramebuffer[ye]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(Ue)for(let ye=0,Ae=ne.length;ye<Ae;ye++){let st=n.get(ne[ye]);st.__webglTexture===void 0&&(st.__webglTexture=i.createTexture(),o.memory.textures++)}if(D.samples>0&&Fe(D)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let ye=0;ye<ne.length;ye++){let Ae=ne[ye];X.__webglColorRenderbuffer[ye]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[ye]);let st=r.convert(Ae.format,Ae.colorSpace),he=r.convert(Ae.type),Re=b(Ae.internalFormat,st,he,Ae.colorSpace,D.isXRRenderTarget===!0),He=Q(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,He,Re,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,X.__webglColorRenderbuffer[ye])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),j(X.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ee){t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture),pe(i.TEXTURE_CUBE_MAP,R);for(let ye=0;ye<6;ye++)if(R.mipmaps&&R.mipmaps.length>0)for(let Ae=0;Ae<R.mipmaps.length;Ae++)me(X.__webglFramebuffer[ye][Ae],D,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ae);else me(X.__webglFramebuffer[ye],D,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);g(R)&&m(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ue){for(let ye=0,Ae=ne.length;ye<Ae;ye++){let st=ne[ye],he=n.get(st);t.bindTexture(i.TEXTURE_2D,he.__webglTexture),pe(i.TEXTURE_2D,st),me(X.__webglFramebuffer,D,st,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,0),g(st)&&m(i.TEXTURE_2D)}t.unbindTexture()}else{let ye=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ye=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ye,te.__webglTexture),pe(ye,R),R.mipmaps&&R.mipmaps.length>0)for(let Ae=0;Ae<R.mipmaps.length;Ae++)me(X.__webglFramebuffer[Ae],D,R,i.COLOR_ATTACHMENT0,ye,Ae);else me(X.__webglFramebuffer,D,R,i.COLOR_ATTACHMENT0,ye,0);g(R)&&m(ye),t.unbindTexture()}D.depthBuffer&&ae(D)}function fe(D){let R=D.textures;for(let X=0,te=R.length;X<te;X++){let ne=R[X];if(g(ne)){let ee=v(D),Ue=n.get(ne).__webglTexture;t.bindTexture(ee,Ue),m(ee),t.unbindTexture()}}}let Be=[],L=[];function Te(D){if(D.samples>0){if(Fe(D)===!1){let R=D.textures,X=D.width,te=D.height,ne=i.COLOR_BUFFER_BIT,ee=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ue=n.get(D),ye=R.length>1;if(ye)for(let Ae=0;Ae<R.length;Ae++)t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let Ae=0;Ae<R.length;Ae++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ne|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ne|=i.STENCIL_BUFFER_BIT)),ye){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ue.__webglColorRenderbuffer[Ae]);let st=n.get(R[Ae]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,st,0)}i.blitFramebuffer(0,0,X,te,0,0,X,te,ne,i.NEAREST),l===!0&&(Be.length=0,L.length=0,Be.push(i.COLOR_ATTACHMENT0+Ae),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Be.push(ee),L.push(ee),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,L)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Be))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ye)for(let Ae=0;Ae<R.length;Ae++){t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.RENDERBUFFER,Ue.__webglColorRenderbuffer[Ae]);let st=n.get(R[Ae]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.TEXTURE_2D,st,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){let R=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[R])}}}function Q(D){return Math.min(s.maxSamples,D.samples)}function Fe(D){let R=n.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function oe(D){let R=o.render.frame;h.get(D)!==R&&(h.set(D,R),D.update())}function Ie(D,R){let X=D.colorSpace,te=D.format,ne=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||X!==tn&&X!==Ni&&(Qe.getTransfer(X)===ft?(te!==wn||ne!==_i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),R}function Pe(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=E,this.resetTextureUnits=U,this.setTexture2D=z,this.setTexture2DArray=O,this.setTexture3D=B,this.setTextureCube=k,this.rebindTextures=ce,this.setupRenderTarget=le,this.updateRenderTargetMipmap=fe,this.updateMultisampleRenderTarget=Te,this.setupDepthRenderbuffer=ae,this.setupFrameBufferTexture=me,this.useMultisampledRTT=Fe}function nM(i,e){function t(n,s=Ni){let r,o=Qe.getTransfer(s);if(n===_i)return i.UNSIGNED_BYTE;if(n===Ah)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Rh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===If)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Rf)return i.BYTE;if(n===Cf)return i.SHORT;if(n===io)return i.UNSIGNED_SHORT;if(n===Th)return i.INT;if(n===xs)return i.UNSIGNED_INT;if(n===Fn)return i.FLOAT;if(n===Bn)return i.HALF_FLOAT;if(n===Pf)return i.ALPHA;if(n===Lf)return i.RGB;if(n===wn)return i.RGBA;if(n===Df)return i.LUMINANCE;if(n===Nf)return i.LUMINANCE_ALPHA;if(n===ir)return i.DEPTH_COMPONENT;if(n===hr)return i.DEPTH_STENCIL;if(n===Ch)return i.RED;if(n===Ih)return i.RED_INTEGER;if(n===Uf)return i.RG;if(n===Ph)return i.RG_INTEGER;if(n===Lh)return i.RGBA_INTEGER;if(n===ra||n===oa||n===aa||n===la)if(o===ft)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ra)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===la)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ra)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===oa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===aa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===la)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===mc||n===gc||n===xc||n===_c)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===mc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===gc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===xc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===_c)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===yc||n===vc||n===Mc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===yc||n===vc)return o===ft?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Mc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===bc||n===Ec||n===Sc||n===wc||n===Tc||n===Ac||n===Rc||n===Cc||n===Ic||n===Pc||n===Lc||n===Dc||n===Nc||n===Uc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===bc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ec)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Sc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===wc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Tc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ac)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Rc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Cc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ic)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Pc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Lc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Dc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Nc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Uc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ca||n===Oc||n===zc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ca)return o===ft?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Oc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===zc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Of||n===Fc||n===kc||n===Bc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ca)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Fc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===kc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Bc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===cr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var th=class extends zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},ke=class extends Rt{constructor(){super(),this.isGroup=!0,this.type="Group"}},iM={type:"move"},to=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ke,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ke,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ke,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let p of e.hand.values()){let g=t.getJointPose(p,n),m=this._getHandJoint(c,p);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,x=.005;c.inputState.pinching&&d>f+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(iM)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ke;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},sM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rM=`
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

}`,nh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new Vt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new It({vertexShader:sM,fragmentShader:rM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ue(new Tn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ih=class extends yi{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,x=null,p=new nh,g=t.getContextAttributes(),m=null,v=null,b=[],M=[],w=new we,S=null,T=new zt;T.viewport=new ct;let I=new zt;I.viewport=new ct;let _=[T,I],y=new th,A=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let re=b[K];return re===void 0&&(re=new to,b[K]=re),re.getTargetRaySpace()},this.getControllerGrip=function(K){let re=b[K];return re===void 0&&(re=new to,b[K]=re),re.getGripSpace()},this.getHand=function(K){let re=b[K];return re===void 0&&(re=new to,b[K]=re),re.getHandSpace()};function E(K){let re=M.indexOf(K.inputSource);if(re===-1)return;let me=b[re];me!==void 0&&(me.update(K.inputSource,K.frame,c||o),me.dispatchEvent({type:K.type,data:K.inputSource}))}function C(){s.removeEventListener("select",E),s.removeEventListener("selectstart",E),s.removeEventListener("selectend",E),s.removeEventListener("squeeze",E),s.removeEventListener("squeezestart",E),s.removeEventListener("squeezeend",E),s.removeEventListener("end",C),s.removeEventListener("inputsourceschange",z);for(let K=0;K<b.length;K++){let re=M[K];re!==null&&(M[K]=null,b[K].disconnect(re))}A=null,U=null,p.reset(),e.setRenderTarget(m),f=null,d=null,u=null,s=null,v=null,Se.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",E),s.addEventListener("selectstart",E),s.addEventListener("selectend",E),s.addEventListener("squeeze",E),s.addEventListener("squeezestart",E),s.addEventListener("squeezeend",E),s.addEventListener("end",C),s.addEventListener("inputsourceschange",z),g.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(w),s.renderState.layers===void 0){let re={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,re),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new rn(f.framebufferWidth,f.framebufferHeight,{format:wn,type:_i,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let re=null,me=null,j=null;g.depth&&(j=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=g.stencil?hr:ir,me=g.stencil?cr:xs);let xe={colorFormat:t.RGBA8,depthFormat:j,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(xe),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new rn(d.textureWidth,d.textureHeight,{format:wn,type:_i,depthTexture:new _a(d.textureWidth,d.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Se.setContext(s),Se.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function z(K){for(let re=0;re<K.removed.length;re++){let me=K.removed[re],j=M.indexOf(me);j>=0&&(M[j]=null,b[j].disconnect(me))}for(let re=0;re<K.added.length;re++){let me=K.added[re],j=M.indexOf(me);if(j===-1){for(let ae=0;ae<b.length;ae++)if(ae>=M.length){M.push(me),j=ae;break}else if(M[ae]===null){M[ae]=me,j=ae;break}if(j===-1)break}let xe=b[j];xe&&xe.connect(me)}}let O=new N,B=new N;function k(K,re,me){O.setFromMatrixPosition(re.matrixWorld),B.setFromMatrixPosition(me.matrixWorld);let j=O.distanceTo(B),xe=re.projectionMatrix.elements,ae=me.projectionMatrix.elements,ce=xe[14]/(xe[10]-1),le=xe[14]/(xe[10]+1),fe=(xe[9]+1)/xe[5],Be=(xe[9]-1)/xe[5],L=(xe[8]-1)/xe[0],Te=(ae[8]+1)/ae[0],Q=ce*L,Fe=ce*Te,oe=j/(-L+Te),Ie=oe*-L;if(re.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Ie),K.translateZ(oe),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),xe[10]===-1)K.projectionMatrix.copy(re.projectionMatrix),K.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{let Pe=ce+oe,D=le+oe,R=Q-Ie,X=Fe+(j-Ie),te=fe*le/D*Pe,ne=Be*le/D*Pe;K.projectionMatrix.makePerspective(R,X,te,ne,Pe,D),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function $(K,re){re===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(re.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let re=K.near,me=K.far;p.texture!==null&&(p.depthNear>0&&(re=p.depthNear),p.depthFar>0&&(me=p.depthFar)),y.near=I.near=T.near=re,y.far=I.far=T.far=me,(A!==y.near||U!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),A=y.near,U=y.far),T.layers.mask=K.layers.mask|2,I.layers.mask=K.layers.mask|4,y.layers.mask=T.layers.mask|I.layers.mask;let j=K.parent,xe=y.cameras;$(y,j);for(let ae=0;ae<xe.length;ae++)$(xe[ae],j);xe.length===2?k(y,T,I):y.projectionMatrix.copy(T.projectionMatrix),W(K,y,j)};function W(K,re,me){me===null?K.matrix.copy(re.matrixWorld):(K.matrix.copy(me.matrixWorld),K.matrix.invert(),K.matrix.multiply(re.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(re.projectionMatrix),K.projectionMatrixInverse.copy(re.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=fr*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(y)};let Z=null;function pe(K,re){if(h=re.getViewerPose(c||o),x=re,h!==null){let me=h.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let j=!1;me.length!==y.cameras.length&&(y.cameras.length=0,j=!0);for(let ae=0;ae<me.length;ae++){let ce=me[ae],le=null;if(f!==null)le=f.getViewport(ce);else{let Be=u.getViewSubImage(d,ce);le=Be.viewport,ae===0&&(e.setRenderTargetTextures(v,Be.colorTexture,d.ignoreDepthValues?void 0:Be.depthStencilTexture),e.setRenderTarget(v))}let fe=_[ae];fe===void 0&&(fe=new zt,fe.layers.enable(ae),fe.viewport=new ct,_[ae]=fe),fe.matrix.fromArray(ce.transform.matrix),fe.matrix.decompose(fe.position,fe.quaternion,fe.scale),fe.projectionMatrix.fromArray(ce.projectionMatrix),fe.projectionMatrixInverse.copy(fe.projectionMatrix).invert(),fe.viewport.set(le.x,le.y,le.width,le.height),ae===0&&(y.matrix.copy(fe.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),j===!0&&y.cameras.push(fe)}let xe=s.enabledFeatures;if(xe&&xe.includes("depth-sensing")){let ae=u.getDepthInformation(me[0]);ae&&ae.isValid&&ae.texture&&p.init(e,ae,s.renderState)}}for(let me=0;me<b.length;me++){let j=M[me],xe=b[me];j!==null&&xe!==void 0&&xe.update(j,re,c||o)}Z&&Z(K,re),re.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:re}),x=null}let Se=new Wf;Se.setAnimationLoop(pe),this.setAnimationLoop=function(K){Z=K},this.dispose=function(){}}},fs=new Jn,oM=new Ge;function aM(i,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Gf(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,v,b,M){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m)):m.isMeshStandardMaterial?(r(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,M)):m.isMeshMatcapMaterial?(r(g,m),x(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),p(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,v,b):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===jt&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===jt&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let v=e.get(m),b=v.envMap,M=v.envMapRotation;b&&(g.envMap.value=b,fs.copy(M),fs.x*=-1,fs.y*=-1,fs.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(fs.y*=-1,fs.z*=-1),g.envMapRotation.value.setFromMatrix4(oM.makeRotationFromEuler(fs)),g.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,v,b){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*v,g.scale.value=b*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,v){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===jt&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,m){m.matcap&&(g.matcap.value=m.matcap)}function p(g,m){let v=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function lM(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,b){let M=b.program;n.uniformBlockBinding(v,M)}function c(v,b){let M=s[v.id];M===void 0&&(x(v),M=h(v),s[v.id]=M,v.addEventListener("dispose",g));let w=b.program;n.updateUBOMapping(v,w);let S=e.render.frame;r[v.id]!==S&&(d(v),r[v.id]=S)}function h(v){let b=u();v.__bindingPointIndex=b;let M=i.createBuffer(),w=v.__size,S=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,w,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,M),M}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let b=s[v.id],M=v.uniforms,w=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let S=0,T=M.length;S<T;S++){let I=Array.isArray(M[S])?M[S]:[M[S]];for(let _=0,y=I.length;_<y;_++){let A=I[_];if(f(A,S,_,w)===!0){let U=A.__offset,E=Array.isArray(A.value)?A.value:[A.value],C=0;for(let z=0;z<E.length;z++){let O=E[z],B=p(O);typeof O=="number"||typeof O=="boolean"?(A.__data[0]=O,i.bufferSubData(i.UNIFORM_BUFFER,U+C,A.__data)):O.isMatrix3?(A.__data[0]=O.elements[0],A.__data[1]=O.elements[1],A.__data[2]=O.elements[2],A.__data[3]=0,A.__data[4]=O.elements[3],A.__data[5]=O.elements[4],A.__data[6]=O.elements[5],A.__data[7]=0,A.__data[8]=O.elements[6],A.__data[9]=O.elements[7],A.__data[10]=O.elements[8],A.__data[11]=0):(O.toArray(A.__data,C),C+=B.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,A.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,b,M,w){let S=v.value,T=b+"_"+M;if(w[T]===void 0)return typeof S=="number"||typeof S=="boolean"?w[T]=S:w[T]=S.clone(),!0;{let I=w[T];if(typeof S=="number"||typeof S=="boolean"){if(I!==S)return w[T]=S,!0}else if(I.equals(S)===!1)return I.copy(S),!0}return!1}function x(v){let b=v.uniforms,M=0,w=16;for(let T=0,I=b.length;T<I;T++){let _=Array.isArray(b[T])?b[T]:[b[T]];for(let y=0,A=_.length;y<A;y++){let U=_[y],E=Array.isArray(U.value)?U.value:[U.value];for(let C=0,z=E.length;C<z;C++){let O=E[C],B=p(O),k=M%w,$=k%B.boundary,W=k+$;M+=$,W!==0&&w-W<B.storage&&(M+=w-W),U.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=M,M+=B.storage}}}let S=M%w;return S>0&&(M+=w-S),v.__size=M,v.__cache={},this}function p(v){let b={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(b.boundary=4,b.storage=4):v.isVector2?(b.boundary=8,b.storage=8):v.isVector3||v.isColor?(b.boundary=16,b.storage=12):v.isVector4?(b.boundary=16,b.storage=16):v.isMatrix3?(b.boundary=48,b.storage=48):v.isMatrix4?(b.boundary=64,b.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),b}function g(v){let b=v.target;b.removeEventListener("dispose",g);let M=o.indexOf(b.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function m(){for(let v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}var ya=class{constructor(e={}){let{canvas:t=fg(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let x=new Uint32Array(4),p=new Int32Array(4),g=null,m=null,v=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=pt,this.toneMapping=zi,this.toneMappingExposure=1;let M=this,w=!1,S=0,T=0,I=null,_=-1,y=null,A=new ct,U=new ct,E=null,C=new be(0),z=0,O=t.width,B=t.height,k=1,$=null,W=null,Z=new ct(0,0,O,B),pe=new ct(0,0,O,B),Se=!1,K=new oo,re=!1,me=!1,j=new Ge,xe=new Ge,ae=new N,ce=new ct,le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},fe=!1;function Be(){return I===null?k:1}let L=n;function Te(P,V){return t.getContext(P,V)}try{let P={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${_h}`),t.addEventListener("webglcontextlost",ie,!1),t.addEventListener("webglcontextrestored",Ee,!1),t.addEventListener("webglcontextcreationerror",ve,!1),L===null){let V="webgl2";if(L=Te(V,P),L===null)throw Te(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let Q,Fe,oe,Ie,Pe,D,R,X,te,ne,ee,Ue,ye,Ae,st,he,Re,He,Ve,Ce,it,Je,Et,H;function _e(){Q=new Sy(L),Q.init(),Je=new nM(L,Q),Fe=new _y(L,Q,e,Je),oe=new Qv(L,Q),Fe.reverseDepthBuffer&&d&&oe.buffers.depth.setReversed(!0),Ie=new Ay(L),Pe=new Bv,D=new tM(L,Q,oe,Pe,Fe,Je,Ie),R=new vy(M),X=new Ey(M),te=new Ng(L),Et=new gy(L,te),ne=new wy(L,te,Ie,Et),ee=new Cy(L,ne,te,Ie),Ve=new Ry(L,Fe,D),he=new yy(Pe),Ue=new kv(M,R,X,Q,Fe,Et,he),ye=new aM(M,Pe),Ae=new Vv,st=new Kv(Q),He=new my(M,R,X,oe,ee,f,l),Re=new Jv(M,ee,Fe),H=new lM(L,Ie,Fe,oe),Ce=new xy(L,Q,Ie),it=new Ty(L,Q,Ie),Ie.programs=Ue.programs,M.capabilities=Fe,M.extensions=Q,M.properties=Pe,M.renderLists=Ae,M.shadowMap=Re,M.state=oe,M.info=Ie}_e();let J=new ih(M,L);this.xr=J,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let P=Q.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){let P=Q.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(P){P!==void 0&&(k=P,this.setSize(O,B,!1))},this.getSize=function(P){return P.set(O,B)},this.setSize=function(P,V,Y=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=P,B=V,t.width=Math.floor(P*k),t.height=Math.floor(V*k),Y===!0&&(t.style.width=P+"px",t.style.height=V+"px"),this.setViewport(0,0,P,V)},this.getDrawingBufferSize=function(P){return P.set(O*k,B*k).floor()},this.setDrawingBufferSize=function(P,V,Y){O=P,B=V,k=Y,t.width=Math.floor(P*Y),t.height=Math.floor(V*Y),this.setViewport(0,0,P,V)},this.getCurrentViewport=function(P){return P.copy(A)},this.getViewport=function(P){return P.copy(Z)},this.setViewport=function(P,V,Y,q){P.isVector4?Z.set(P.x,P.y,P.z,P.w):Z.set(P,V,Y,q),oe.viewport(A.copy(Z).multiplyScalar(k).round())},this.getScissor=function(P){return P.copy(pe)},this.setScissor=function(P,V,Y,q){P.isVector4?pe.set(P.x,P.y,P.z,P.w):pe.set(P,V,Y,q),oe.scissor(U.copy(pe).multiplyScalar(k).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(P){oe.setScissorTest(Se=P)},this.setOpaqueSort=function(P){$=P},this.setTransparentSort=function(P){W=P},this.getClearColor=function(P){return P.copy(He.getClearColor())},this.setClearColor=function(){He.setClearColor.apply(He,arguments)},this.getClearAlpha=function(){return He.getClearAlpha()},this.setClearAlpha=function(){He.setClearAlpha.apply(He,arguments)},this.clear=function(P=!0,V=!0,Y=!0){let q=0;if(P){let G=!1;if(I!==null){let de=I.texture.format;G=de===Lh||de===Ph||de===Ih}if(G){let de=I.texture.type,Me=de===_i||de===xs||de===io||de===cr||de===Ah||de===Rh,Le=He.getClearColor(),De=He.getClearAlpha(),Xe=Le.r,Ke=Le.g,Ne=Le.b;Me?(x[0]=Xe,x[1]=Ke,x[2]=Ne,x[3]=De,L.clearBufferuiv(L.COLOR,0,x)):(p[0]=Xe,p[1]=Ke,p[2]=Ne,p[3]=De,L.clearBufferiv(L.COLOR,0,p))}else q|=L.COLOR_BUFFER_BIT}V&&(q|=L.DEPTH_BUFFER_BIT),Y&&(q|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ie,!1),t.removeEventListener("webglcontextrestored",Ee,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),Ae.dispose(),st.dispose(),Pe.dispose(),R.dispose(),X.dispose(),ee.dispose(),Et.dispose(),H.dispose(),Ue.dispose(),J.dispose(),J.removeEventListener("sessionstart",$u),J.removeEventListener("sessionend",Ju),as.stop()};function ie(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function Ee(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let P=Ie.autoReset,V=Re.enabled,Y=Re.autoUpdate,q=Re.needsUpdate,G=Re.type;_e(),Ie.autoReset=P,Re.enabled=V,Re.autoUpdate=Y,Re.needsUpdate=q,Re.type=G}function ve(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function qe(P){let V=P.target;V.removeEventListener("dispose",qe),Lt(V)}function Lt(P){Kt(P),Pe.remove(P)}function Kt(P){let V=Pe.get(P).programs;V!==void 0&&(V.forEach(function(Y){Ue.releaseProgram(Y)}),P.isShaderMaterial&&Ue.releaseShaderCache(P))}this.renderBufferDirect=function(P,V,Y,q,G,de){V===null&&(V=le);let Me=G.isMesh&&G.matrixWorld.determinant()<0,Le=d0(P,V,Y,q,G);oe.setMaterial(q,Me);let De=Y.index,Xe=1;if(q.wireframe===!0){if(De=ne.getWireframeAttribute(Y),De===void 0)return;Xe=2}let Ke=Y.drawRange,Ne=Y.attributes.position,ot=Ke.start*Xe,St=(Ke.start+Ke.count)*Xe;de!==null&&(ot=Math.max(ot,de.start*Xe),St=Math.min(St,(de.start+de.count)*Xe)),De!==null?(ot=Math.max(ot,0),St=Math.min(St,De.count)):Ne!=null&&(ot=Math.max(ot,0),St=Math.min(St,Ne.count));let wt=St-ot;if(wt<0||wt===1/0)return;Et.setup(G,q,Le,Y,De);let cn,ut=Ce;if(De!==null&&(cn=te.get(De),ut=it,ut.setIndex(cn)),G.isMesh)q.wireframe===!0?(oe.setLineWidth(q.wireframeLinewidth*Be()),ut.setMode(L.LINES)):ut.setMode(L.TRIANGLES);else if(G.isLine){let Oe=q.linewidth;Oe===void 0&&(Oe=1),oe.setLineWidth(Oe*Be()),G.isLineSegments?ut.setMode(L.LINES):G.isLineLoop?ut.setMode(L.LINE_LOOP):ut.setMode(L.LINE_STRIP)}else G.isPoints?ut.setMode(L.POINTS):G.isSprite&&ut.setMode(L.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)ut.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(Q.get("WEBGL_multi_draw"))ut.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let Oe=G._multiDrawStarts,ai=G._multiDrawCounts,dt=G._multiDrawCount,Ln=De?te.get(De).bytesPerElement:1,Ls=Pe.get(q).currentProgram.getUniforms();for(let mn=0;mn<dt;mn++)Ls.setValue(L,"_gl_DrawID",mn),ut.render(Oe[mn]/Ln,ai[mn])}else if(G.isInstancedMesh)ut.renderInstances(ot,wt,G.count);else if(Y.isInstancedBufferGeometry){let Oe=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,ai=Math.min(Y.instanceCount,Oe);ut.renderInstances(ot,wt,ai)}else ut.render(ot,wt)};function xt(P,V,Y){P.transparent===!0&&P.side===mt&&P.forceSinglePass===!1?(P.side=jt,P.needsUpdate=!0,Ro(P,V,Y),P.side=$n,P.needsUpdate=!0,Ro(P,V,Y),P.side=mt):Ro(P,V,Y)}this.compile=function(P,V,Y=null){Y===null&&(Y=P),m=st.get(Y),m.init(V),b.push(m),Y.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),P!==Y&&P.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),m.setupLights();let q=new Set;return P.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let de=G.material;if(de)if(Array.isArray(de))for(let Me=0;Me<de.length;Me++){let Le=de[Me];xt(Le,Y,G),q.add(Le)}else xt(de,Y,G),q.add(de)}),b.pop(),m=null,q},this.compileAsync=function(P,V,Y=null){let q=this.compile(P,V,Y);return new Promise(G=>{function de(){if(q.forEach(function(Me){Pe.get(Me).currentProgram.isReady()&&q.delete(Me)}),q.size===0){G(P);return}setTimeout(de,10)}Q.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let Pn=null;function oi(P){Pn&&Pn(P)}function $u(){as.stop()}function Ju(){as.start()}let as=new Wf;as.setAnimationLoop(oi),typeof self<"u"&&as.setContext(self),this.setAnimationLoop=function(P){Pn=P,J.setAnimationLoop(P),P===null?as.stop():as.start()},J.addEventListener("sessionstart",$u),J.addEventListener("sessionend",Ju),this.render=function(P,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(V),V=J.getCamera()),P.isScene===!0&&P.onBeforeRender(M,P,V,I),m=st.get(P,b.length),m.init(V),b.push(m),xe.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),K.setFromProjectionMatrix(xe),me=this.localClippingEnabled,re=he.init(this.clippingPlanes,me),g=Ae.get(P,v.length),g.init(),v.push(g),J.enabled===!0&&J.isPresenting===!0){let de=M.xr.getDepthSensingMesh();de!==null&&Sl(de,V,-1/0,M.sortObjects)}Sl(P,V,0,M.sortObjects),g.finish(),M.sortObjects===!0&&g.sort($,W),fe=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,fe&&He.addToRenderList(g,P),this.info.render.frame++,re===!0&&he.beginShadows();let Y=m.state.shadowsArray;Re.render(Y,P,V),re===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset();let q=g.opaque,G=g.transmissive;if(m.setupLights(),V.isArrayCamera){let de=V.cameras;if(G.length>0)for(let Me=0,Le=de.length;Me<Le;Me++){let De=de[Me];Qu(q,G,P,De)}fe&&He.render(P);for(let Me=0,Le=de.length;Me<Le;Me++){let De=de[Me];ju(g,P,De,De.viewport)}}else G.length>0&&Qu(q,G,P,V),fe&&He.render(P),ju(g,P,V);I!==null&&(D.updateMultisampleRenderTarget(I),D.updateRenderTargetMipmap(I)),P.isScene===!0&&P.onAfterRender(M,P,V),Et.resetDefaultState(),_=-1,y=null,b.pop(),b.length>0?(m=b[b.length-1],re===!0&&he.setGlobalState(M.clippingPlanes,m.state.camera)):m=null,v.pop(),v.length>0?g=v[v.length-1]:g=null};function Sl(P,V,Y,q){if(P.visible===!1)return;if(P.layers.test(V.layers)){if(P.isGroup)Y=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(V);else if(P.isLight)m.pushLight(P),P.castShadow&&m.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||K.intersectsSprite(P)){q&&ce.setFromMatrixPosition(P.matrixWorld).applyMatrix4(xe);let Me=ee.update(P),Le=P.material;Le.visible&&g.push(P,Me,Le,Y,ce.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||K.intersectsObject(P))){let Me=ee.update(P),Le=P.material;if(q&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),ce.copy(P.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),ce.copy(Me.boundingSphere.center)),ce.applyMatrix4(P.matrixWorld).applyMatrix4(xe)),Array.isArray(Le)){let De=Me.groups;for(let Xe=0,Ke=De.length;Xe<Ke;Xe++){let Ne=De[Xe],ot=Le[Ne.materialIndex];ot&&ot.visible&&g.push(P,Me,ot,Y,ce.z,Ne)}}else Le.visible&&g.push(P,Me,Le,Y,ce.z,null)}}let de=P.children;for(let Me=0,Le=de.length;Me<Le;Me++)Sl(de[Me],V,Y,q)}function ju(P,V,Y,q){let G=P.opaque,de=P.transmissive,Me=P.transparent;m.setupLightsView(Y),re===!0&&he.setGlobalState(M.clippingPlanes,Y),q&&oe.viewport(A.copy(q)),G.length>0&&Ao(G,V,Y),de.length>0&&Ao(de,V,Y),Me.length>0&&Ao(Me,V,Y),oe.buffers.depth.setTest(!0),oe.buffers.depth.setMask(!0),oe.buffers.color.setMask(!0),oe.setPolygonOffset(!1)}function Qu(P,V,Y,q){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[q.id]===void 0&&(m.state.transmissionRenderTarget[q.id]=new rn(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float")?Bn:_i,minFilter:Sn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));let de=m.state.transmissionRenderTarget[q.id],Me=q.viewport||A;de.setSize(Me.z,Me.w);let Le=M.getRenderTarget();M.setRenderTarget(de),M.getClearColor(C),z=M.getClearAlpha(),z<1&&M.setClearColor(16777215,.5),M.clear(),fe&&He.render(Y);let De=M.toneMapping;M.toneMapping=zi;let Xe=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),m.setupLightsView(q),re===!0&&he.setGlobalState(M.clippingPlanes,q),Ao(P,Y,q),D.updateMultisampleRenderTarget(de),D.updateRenderTargetMipmap(de),Q.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let Ne=0,ot=V.length;Ne<ot;Ne++){let St=V[Ne],wt=St.object,cn=St.geometry,ut=St.material,Oe=St.group;if(ut.side===mt&&wt.layers.test(q.layers)){let ai=ut.side;ut.side=jt,ut.needsUpdate=!0,ed(wt,Y,q,cn,ut,Oe),ut.side=ai,ut.needsUpdate=!0,Ke=!0}}Ke===!0&&(D.updateMultisampleRenderTarget(de),D.updateRenderTargetMipmap(de))}M.setRenderTarget(Le),M.setClearColor(C,z),Xe!==void 0&&(q.viewport=Xe),M.toneMapping=De}function Ao(P,V,Y){let q=V.isScene===!0?V.overrideMaterial:null;for(let G=0,de=P.length;G<de;G++){let Me=P[G],Le=Me.object,De=Me.geometry,Xe=q===null?Me.material:q,Ke=Me.group;Le.layers.test(Y.layers)&&ed(Le,V,Y,De,Xe,Ke)}}function ed(P,V,Y,q,G,de){P.onBeforeRender(M,V,Y,q,G,de),P.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),G.onBeforeRender(M,V,Y,q,P,de),G.transparent===!0&&G.side===mt&&G.forceSinglePass===!1?(G.side=jt,G.needsUpdate=!0,M.renderBufferDirect(Y,V,q,G,P,de),G.side=$n,G.needsUpdate=!0,M.renderBufferDirect(Y,V,q,G,P,de),G.side=mt):M.renderBufferDirect(Y,V,q,G,P,de),P.onAfterRender(M,V,Y,q,G,de)}function Ro(P,V,Y){V.isScene!==!0&&(V=le);let q=Pe.get(P),G=m.state.lights,de=m.state.shadowsArray,Me=G.state.version,Le=Ue.getParameters(P,G.state,de,V,Y),De=Ue.getProgramCacheKey(Le),Xe=q.programs;q.environment=P.isMeshStandardMaterial?V.environment:null,q.fog=V.fog,q.envMap=(P.isMeshStandardMaterial?X:R).get(P.envMap||q.environment),q.envMapRotation=q.environment!==null&&P.envMap===null?V.environmentRotation:P.envMapRotation,Xe===void 0&&(P.addEventListener("dispose",qe),Xe=new Map,q.programs=Xe);let Ke=Xe.get(De);if(Ke!==void 0){if(q.currentProgram===Ke&&q.lightsStateVersion===Me)return nd(P,Le),Ke}else Le.uniforms=Ue.getUniforms(P),P.onBeforeCompile(Le,M),Ke=Ue.acquireProgram(Le,De),Xe.set(De,Ke),q.uniforms=Le.uniforms;let Ne=q.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Ne.clippingPlanes=he.uniform),nd(P,Le),q.needsLights=p0(P),q.lightsStateVersion=Me,q.needsLights&&(Ne.ambientLightColor.value=G.state.ambient,Ne.lightProbe.value=G.state.probe,Ne.directionalLights.value=G.state.directional,Ne.directionalLightShadows.value=G.state.directionalShadow,Ne.spotLights.value=G.state.spot,Ne.spotLightShadows.value=G.state.spotShadow,Ne.rectAreaLights.value=G.state.rectArea,Ne.ltc_1.value=G.state.rectAreaLTC1,Ne.ltc_2.value=G.state.rectAreaLTC2,Ne.pointLights.value=G.state.point,Ne.pointLightShadows.value=G.state.pointShadow,Ne.hemisphereLights.value=G.state.hemi,Ne.directionalShadowMap.value=G.state.directionalShadowMap,Ne.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ne.spotShadowMap.value=G.state.spotShadowMap,Ne.spotLightMatrix.value=G.state.spotLightMatrix,Ne.spotLightMap.value=G.state.spotLightMap,Ne.pointShadowMap.value=G.state.pointShadowMap,Ne.pointShadowMatrix.value=G.state.pointShadowMatrix),q.currentProgram=Ke,q.uniformsList=null,Ke}function td(P){if(P.uniformsList===null){let V=P.currentProgram.getUniforms();P.uniformsList=rr.seqWithValue(V.seq,P.uniforms)}return P.uniformsList}function nd(P,V){let Y=Pe.get(P);Y.outputColorSpace=V.outputColorSpace,Y.batching=V.batching,Y.batchingColor=V.batchingColor,Y.instancing=V.instancing,Y.instancingColor=V.instancingColor,Y.instancingMorph=V.instancingMorph,Y.skinning=V.skinning,Y.morphTargets=V.morphTargets,Y.morphNormals=V.morphNormals,Y.morphColors=V.morphColors,Y.morphTargetsCount=V.morphTargetsCount,Y.numClippingPlanes=V.numClippingPlanes,Y.numIntersection=V.numClipIntersection,Y.vertexAlphas=V.vertexAlphas,Y.vertexTangents=V.vertexTangents,Y.toneMapping=V.toneMapping}function d0(P,V,Y,q,G){V.isScene!==!0&&(V=le),D.resetTextureUnits();let de=V.fog,Me=q.isMeshStandardMaterial?V.environment:null,Le=I===null?M.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:tn,De=(q.isMeshStandardMaterial?X:R).get(q.envMap||Me),Xe=q.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Ke=!!Y.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ne=!!Y.morphAttributes.position,ot=!!Y.morphAttributes.normal,St=!!Y.morphAttributes.color,wt=zi;q.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(wt=M.toneMapping);let cn=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ut=cn!==void 0?cn.length:0,Oe=Pe.get(q),ai=m.state.lights;if(re===!0&&(me===!0||P!==y)){let bn=P===y&&q.id===_;he.setState(q,P,bn)}let dt=!1;q.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==ai.state.version||Oe.outputColorSpace!==Le||G.isBatchedMesh&&Oe.batching===!1||!G.isBatchedMesh&&Oe.batching===!0||G.isBatchedMesh&&Oe.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Oe.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Oe.instancing===!1||!G.isInstancedMesh&&Oe.instancing===!0||G.isSkinnedMesh&&Oe.skinning===!1||!G.isSkinnedMesh&&Oe.skinning===!0||G.isInstancedMesh&&Oe.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Oe.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Oe.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Oe.instancingMorph===!1&&G.morphTexture!==null||Oe.envMap!==De||q.fog===!0&&Oe.fog!==de||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==he.numPlanes||Oe.numIntersection!==he.numIntersection)||Oe.vertexAlphas!==Xe||Oe.vertexTangents!==Ke||Oe.morphTargets!==Ne||Oe.morphNormals!==ot||Oe.morphColors!==St||Oe.toneMapping!==wt||Oe.morphTargetsCount!==ut)&&(dt=!0):(dt=!0,Oe.__version=q.version);let Ln=Oe.currentProgram;dt===!0&&(Ln=Ro(q,V,G));let Ls=!1,mn=!1,zr=!1,Tt=Ln.getUniforms(),qn=Oe.uniforms;if(oe.useProgram(Ln.program)&&(Ls=!0,mn=!0,zr=!0),q.id!==_&&(_=q.id,mn=!0),Ls||y!==P){oe.buffers.depth.getReversed()?(j.copy(P.projectionMatrix),mg(j),gg(j),Tt.setValue(L,"projectionMatrix",j)):Tt.setValue(L,"projectionMatrix",P.projectionMatrix),Tt.setValue(L,"viewMatrix",P.matrixWorldInverse);let Ti=Tt.map.cameraPosition;Ti!==void 0&&Ti.setValue(L,ae.setFromMatrixPosition(P.matrixWorld)),Fe.logarithmicDepthBuffer&&Tt.setValue(L,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Tt.setValue(L,"isOrthographic",P.isOrthographicCamera===!0),y!==P&&(y=P,mn=!0,zr=!0)}if(G.isSkinnedMesh){Tt.setOptional(L,G,"bindMatrix"),Tt.setOptional(L,G,"bindMatrixInverse");let bn=G.skeleton;bn&&(bn.boneTexture===null&&bn.computeBoneTexture(),Tt.setValue(L,"boneTexture",bn.boneTexture,D))}G.isBatchedMesh&&(Tt.setOptional(L,G,"batchingTexture"),Tt.setValue(L,"batchingTexture",G._matricesTexture,D),Tt.setOptional(L,G,"batchingIdTexture"),Tt.setValue(L,"batchingIdTexture",G._indirectTexture,D),Tt.setOptional(L,G,"batchingColorTexture"),G._colorsTexture!==null&&Tt.setValue(L,"batchingColorTexture",G._colorsTexture,D));let Fr=Y.morphAttributes;if((Fr.position!==void 0||Fr.normal!==void 0||Fr.color!==void 0)&&Ve.update(G,Y,Ln),(mn||Oe.receiveShadow!==G.receiveShadow)&&(Oe.receiveShadow=G.receiveShadow,Tt.setValue(L,"receiveShadow",G.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(qn.envMap.value=De,qn.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&V.environment!==null&&(qn.envMapIntensity.value=V.environmentIntensity),mn&&(Tt.setValue(L,"toneMappingExposure",M.toneMappingExposure),Oe.needsLights&&f0(qn,zr),de&&q.fog===!0&&ye.refreshFogUniforms(qn,de),ye.refreshMaterialUniforms(qn,q,k,B,m.state.transmissionRenderTarget[P.id]),rr.upload(L,td(Oe),qn,D)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(rr.upload(L,td(Oe),qn,D),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Tt.setValue(L,"center",G.center),Tt.setValue(L,"modelViewMatrix",G.modelViewMatrix),Tt.setValue(L,"normalMatrix",G.normalMatrix),Tt.setValue(L,"modelMatrix",G.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){let bn=q.uniformsGroups;for(let Ti=0,Ai=bn.length;Ti<Ai;Ti++){let id=bn[Ti];H.update(id,Ln),H.bind(id,Ln)}}return Ln}function f0(P,V){P.ambientLightColor.needsUpdate=V,P.lightProbe.needsUpdate=V,P.directionalLights.needsUpdate=V,P.directionalLightShadows.needsUpdate=V,P.pointLights.needsUpdate=V,P.pointLightShadows.needsUpdate=V,P.spotLights.needsUpdate=V,P.spotLightShadows.needsUpdate=V,P.rectAreaLights.needsUpdate=V,P.hemisphereLights.needsUpdate=V}function p0(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(P,V,Y){Pe.get(P.texture).__webglTexture=V,Pe.get(P.depthTexture).__webglTexture=Y;let q=Pe.get(P);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=Y===void 0,q.__autoAllocateDepthBuffer||Q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,V){let Y=Pe.get(P);Y.__webglFramebuffer=V,Y.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(P,V=0,Y=0){I=P,S=V,T=Y;let q=!0,G=null,de=!1,Me=!1;if(P){let De=Pe.get(P);if(De.__useDefaultFramebuffer!==void 0)oe.bindFramebuffer(L.FRAMEBUFFER,null),q=!1;else if(De.__webglFramebuffer===void 0)D.setupRenderTarget(P);else if(De.__hasExternalTextures)D.rebindTextures(P,Pe.get(P.texture).__webglTexture,Pe.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){let Ne=P.depthTexture;if(De.__boundDepthTexture!==Ne){if(Ne!==null&&Pe.has(Ne)&&(P.width!==Ne.image.width||P.height!==Ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(P)}}let Xe=P.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Me=!0);let Ke=Pe.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Ke[V])?G=Ke[V][Y]:G=Ke[V],de=!0):P.samples>0&&D.useMultisampledRTT(P)===!1?G=Pe.get(P).__webglMultisampledFramebuffer:Array.isArray(Ke)?G=Ke[Y]:G=Ke,A.copy(P.viewport),U.copy(P.scissor),E=P.scissorTest}else A.copy(Z).multiplyScalar(k).floor(),U.copy(pe).multiplyScalar(k).floor(),E=Se;if(oe.bindFramebuffer(L.FRAMEBUFFER,G)&&q&&oe.drawBuffers(P,G),oe.viewport(A),oe.scissor(U),oe.setScissorTest(E),de){let De=Pe.get(P.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+V,De.__webglTexture,Y)}else if(Me){let De=Pe.get(P.texture),Xe=V||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,De.__webglTexture,Y||0,Xe)}_=-1},this.readRenderTargetPixels=function(P,V,Y,q,G,de,Me){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=Pe.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Me!==void 0&&(Le=Le[Me]),Le){oe.bindFramebuffer(L.FRAMEBUFFER,Le);try{let De=P.texture,Xe=De.format,Ke=De.type;if(!Fe.textureFormatReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Fe.textureTypeReadable(Ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=P.width-q&&Y>=0&&Y<=P.height-G&&L.readPixels(V,Y,q,G,Je.convert(Xe),Je.convert(Ke),de)}finally{let De=I!==null?Pe.get(I).__webglFramebuffer:null;oe.bindFramebuffer(L.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(P,V,Y,q,G,de,Me){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=Pe.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Me!==void 0&&(Le=Le[Me]),Le){let De=P.texture,Xe=De.format,Ke=De.type;if(!Fe.textureFormatReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Fe.textureTypeReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(V>=0&&V<=P.width-q&&Y>=0&&Y<=P.height-G){oe.bindFramebuffer(L.FRAMEBUFFER,Le);let Ne=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ne),L.bufferData(L.PIXEL_PACK_BUFFER,de.byteLength,L.STREAM_READ),L.readPixels(V,Y,q,G,Je.convert(Xe),Je.convert(Ke),0);let ot=I!==null?Pe.get(I).__webglFramebuffer:null;oe.bindFramebuffer(L.FRAMEBUFFER,ot);let St=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await pg(L,St,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ne),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,de),L.deleteBuffer(Ne),L.deleteSync(St),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(P,V=null,Y=0){P.isTexture!==!0&&($r("WebGLRenderer: copyFramebufferToTexture function signature has changed."),V=arguments[0]||null,P=arguments[1]);let q=Math.pow(2,-Y),G=Math.floor(P.image.width*q),de=Math.floor(P.image.height*q),Me=V!==null?V.x:0,Le=V!==null?V.y:0;D.setTexture2D(P,0),L.copyTexSubImage2D(L.TEXTURE_2D,Y,0,0,Me,Le,G,de),oe.unbindTexture()},this.copyTextureToTexture=function(P,V,Y=null,q=null,G=0){P.isTexture!==!0&&($r("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,P=arguments[1],V=arguments[2],G=arguments[3]||0,Y=null);let de,Me,Le,De,Xe,Ke,Ne,ot,St,wt=P.isCompressedTexture?P.mipmaps[G]:P.image;Y!==null?(de=Y.max.x-Y.min.x,Me=Y.max.y-Y.min.y,Le=Y.isBox3?Y.max.z-Y.min.z:1,De=Y.min.x,Xe=Y.min.y,Ke=Y.isBox3?Y.min.z:0):(de=wt.width,Me=wt.height,Le=wt.depth||1,De=0,Xe=0,Ke=0),q!==null?(Ne=q.x,ot=q.y,St=q.z):(Ne=0,ot=0,St=0);let cn=Je.convert(V.format),ut=Je.convert(V.type),Oe;V.isData3DTexture?(D.setTexture3D(V,0),Oe=L.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(D.setTexture2DArray(V,0),Oe=L.TEXTURE_2D_ARRAY):(D.setTexture2D(V,0),Oe=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,V.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,V.unpackAlignment);let ai=L.getParameter(L.UNPACK_ROW_LENGTH),dt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Ln=L.getParameter(L.UNPACK_SKIP_PIXELS),Ls=L.getParameter(L.UNPACK_SKIP_ROWS),mn=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,wt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,wt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,De),L.pixelStorei(L.UNPACK_SKIP_ROWS,Xe),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ke);let zr=P.isDataArrayTexture||P.isData3DTexture,Tt=V.isDataArrayTexture||V.isData3DTexture;if(P.isRenderTargetTexture||P.isDepthTexture){let qn=Pe.get(P),Fr=Pe.get(V),bn=Pe.get(qn.__renderTarget),Ti=Pe.get(Fr.__renderTarget);oe.bindFramebuffer(L.READ_FRAMEBUFFER,bn.__webglFramebuffer),oe.bindFramebuffer(L.DRAW_FRAMEBUFFER,Ti.__webglFramebuffer);for(let Ai=0;Ai<Le;Ai++)zr&&L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Pe.get(P).__webglTexture,G,Ke+Ai),P.isDepthTexture?(Tt&&L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Pe.get(V).__webglTexture,G,St+Ai),L.blitFramebuffer(De,Xe,de,Me,Ne,ot,de,Me,L.DEPTH_BUFFER_BIT,L.NEAREST)):Tt?L.copyTexSubImage3D(Oe,G,Ne,ot,St+Ai,De,Xe,de,Me):L.copyTexSubImage2D(Oe,G,Ne,ot,St+Ai,De,Xe,de,Me);oe.bindFramebuffer(L.READ_FRAMEBUFFER,null),oe.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Tt?P.isDataTexture||P.isData3DTexture?L.texSubImage3D(Oe,G,Ne,ot,St,de,Me,Le,cn,ut,wt.data):V.isCompressedArrayTexture?L.compressedTexSubImage3D(Oe,G,Ne,ot,St,de,Me,Le,cn,wt.data):L.texSubImage3D(Oe,G,Ne,ot,St,de,Me,Le,cn,ut,wt):P.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,G,Ne,ot,de,Me,cn,ut,wt.data):P.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,G,Ne,ot,wt.width,wt.height,cn,wt.data):L.texSubImage2D(L.TEXTURE_2D,G,Ne,ot,de,Me,cn,ut,wt);L.pixelStorei(L.UNPACK_ROW_LENGTH,ai),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,dt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ln),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ls),L.pixelStorei(L.UNPACK_SKIP_IMAGES,mn),G===0&&V.generateMipmaps&&L.generateMipmap(Oe),oe.unbindTexture()},this.copyTextureToTexture3D=function(P,V,Y=null,q=null,G=0){return P.isTexture!==!0&&($r("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Y=arguments[0]||null,q=arguments[1]||null,P=arguments[2],V=arguments[3],G=arguments[4]||0),$r('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(P,V,Y,q,G)},this.initRenderTarget=function(P){Pe.get(P).__webglFramebuffer===void 0&&D.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?D.setTextureCube(P,0):P.isData3DTexture?D.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?D.setTexture2DArray(P,0):D.setTexture2D(P,0),oe.unbindTexture()},this.resetState=function(){S=0,T=0,I=null,oe.reset(),Et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}};var va=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new be(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ma=class extends Rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Jn,this.environmentIntensity=1,this.environmentRotation=new Jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},gr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Hc,this.updateRanges=[],this.version=0,this.uuid=kn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=kn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=kn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},nn=new N,ys=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix4(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyNormalMatrix(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.transformDirection(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=zn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=_t(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=zn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=zn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=zn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=zn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),s=_t(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),s=_t(s,this.array),r=_t(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new et(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ao=class extends dn{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new be(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},qs,Gr=new N,Ks=new N,Zs=new N,$s=new we,Wr=new we,Zf=new Ge,Zo=new N,Xr=new N,$o=new N,tf=new we,jl=new we,nf=new we,ba=class extends Rt{constructor(e=new ao){if(super(),this.isSprite=!0,this.type="Sprite",qs===void 0){qs=new lt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new gr(t,5);qs.setIndex([0,1,2,0,2,3]),qs.setAttribute("position",new ys(n,3,0,!1)),qs.setAttribute("uv",new ys(n,2,3,!1))}this.geometry=qs,this.material=e,this.center=new we(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ks.setFromMatrixScale(this.matrixWorld),Zf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Zs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ks.multiplyScalar(-Zs.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Jo(Zo.set(-.5,-.5,0),Zs,o,Ks,s,r),Jo(Xr.set(.5,-.5,0),Zs,o,Ks,s,r),Jo($o.set(.5,.5,0),Zs,o,Ks,s,r),tf.set(0,0),jl.set(1,0),nf.set(1,1);let a=e.ray.intersectTriangle(Zo,Xr,$o,!1,Gr);if(a===null&&(Jo(Xr.set(-.5,.5,0),Zs,o,Ks,s,r),jl.set(0,1),a=e.ray.intersectTriangle(Zo,$o,Xr,!1,Gr),a===null))return;let l=e.ray.origin.distanceTo(Gr);l<e.near||l>e.far||t.push({distance:l,point:Gr.clone(),uv:Ui.getInterpolation(Gr,Zo,Xr,$o,tf,jl,nf,new we),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Jo(i,e,t,n,s,r){$s.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Wr.x=r*$s.x-s*$s.y,Wr.y=s*$s.x+r*$s.y):Wr.copy($s),i.copy(e),i.x+=Wr.x,i.y+=Wr.y,i.applyMatrix4(Zf)}var sf=new N,rf=new ct,of=new ct,cM=new N,af=new Ge,jo=new N,Ql=new on,lf=new Ge,ec=new _s,xr=class extends ue{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ad,this.bindMatrix=new Ge,this.bindMatrixInverse=new Ge,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Yt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,jo),this.boundingBox.expandByPoint(jo)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new on),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,jo),this.boundingSphere.expandByPoint(jo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ql.copy(this.boundingSphere),Ql.applyMatrix4(s),e.ray.intersectsSphere(Ql)!==!1&&(lf.copy(s).invert(),ec.copy(e.ray).applyMatrix4(lf),!(this.boundingBox!==null&&ec.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ec)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new ct,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ad?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===F0?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;rf.fromBufferAttribute(s.attributes.skinIndex,e),of.fromBufferAttribute(s.attributes.skinWeight,e),sf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=of.getComponent(r);if(o!==0){let a=rf.getComponent(r);af.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(cM.copy(sf).applyMatrix4(af),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},vs=class extends Rt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Ea=class extends Vt{constructor(e=null,t=1,n=1,s,r,o,a,l,c=Qt,h=Qt,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},cf=new Ge,hM=new Ge,_r=class i{constructor(e=[],t=[]){this.uuid=kn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ge)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ge;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:hM;cf.multiplyMatrices(a,t[r]),cf.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Ea(t,e,e,wn,Fn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new vs),this.bones.push(o),this.boneInverses.push(new Ge().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},Ms=class extends et{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Js=new Ge,hf=new Ge,Qo=[],uf=new Yt,uM=new Ge,Yr=new ue,qr=new on,ki=class extends ue{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ms(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,uM)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Yt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Js),uf.copy(e.boundingBox).applyMatrix4(Js),this.boundingBox.union(uf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new on),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Js),qr.copy(e.boundingSphere).applyMatrix4(Js),this.boundingSphere.union(qr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Yr.geometry=this.geometry,Yr.material=this.material,Yr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qr.copy(this.boundingSphere),qr.applyMatrix4(n),e.ray.intersectsSphere(qr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Js),hf.multiplyMatrices(n,Js),Yr.matrixWorld=hf,Yr.raycast(e,Qo);for(let o=0,a=Qo.length;o<a;o++){let l=Qo[o];l.instanceId=r,l.object=this,t.push(l)}Qo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ms(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ea(new Float32Array(s*this.count),s,this.count,Ch,Fn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var lo=class extends dn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Sa=new N,wa=new N,df=new Ge,Kr=new _s,ea=new on,tc=new N,ff=new N,yr=class extends Rt{constructor(e=new lt,t=new lo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Sa.fromBufferAttribute(t,s-1),wa.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Sa.distanceTo(wa);e.setAttribute("lineDistance",new nt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ea.copy(n.boundingSphere),ea.applyMatrix4(s),ea.radius+=r,e.ray.intersectsSphere(ea)===!1)return;df.copy(s).invert(),Kr.copy(e.ray).applyMatrix4(df);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),x=Math.min(h.count,o.start+o.count);for(let p=f,g=x-1;p<g;p+=c){let m=h.getX(p),v=h.getX(p+1),b=ta(this,e,Kr,l,m,v);b&&t.push(b)}if(this.isLineLoop){let p=h.getX(x-1),g=h.getX(f),m=ta(this,e,Kr,l,p,g);m&&t.push(m)}}else{let f=Math.max(0,o.start),x=Math.min(d.count,o.start+o.count);for(let p=f,g=x-1;p<g;p+=c){let m=ta(this,e,Kr,l,p,p+1);m&&t.push(m)}if(this.isLineLoop){let p=ta(this,e,Kr,l,x-1,f);p&&t.push(p)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ta(i,e,t,n,s,r){let o=i.geometry.attributes.position;if(Sa.fromBufferAttribute(o,s),wa.fromBufferAttribute(o,r),t.distanceSqToSegment(Sa,wa,tc,ff)>n)return;tc.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(tc);if(!(l<e.near||l>e.far))return{distance:l,point:ff.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var pf=new N,mf=new N,Ta=class extends yr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)pf.fromBufferAttribute(t,s),mf.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+pf.distanceTo(mf);e.setAttribute("lineDistance",new nt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Aa=class extends yr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Bi=class extends dn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},gf=new Ge,sh=new _s,na=new on,ia=new N,vi=class extends Rt{constructor(e=new lt,t=new Bi){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),na.copy(n.boundingSphere),na.applyMatrix4(s),na.radius+=r,e.ray.intersectsSphere(na)===!1)return;gf.copy(s).invert(),sh.copy(e.ray).applyMatrix4(gf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let x=d,p=f;x<p;x++){let g=c.getX(x);ia.fromBufferAttribute(u,g),xf(ia,g,l,s,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let x=d,p=f;x<p;x++)ia.fromBufferAttribute(u,x),xf(ia,x,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function xf(i,e,t,n,s,r,o){let a=sh.distanceSqToPoint(i);if(a<t){let l=new N;sh.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var An=class extends Vt{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ra=class i extends lt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new N,h=new we;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new nt(o,3)),this.setAttribute("normal",new nt(a,3)),this.setAttribute("uv",new nt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},vt=class i extends lt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],x=0,p=[],g=n/2,m=0;v(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new nt(u,3)),this.setAttribute("normal",new nt(d,3)),this.setAttribute("uv",new nt(f,2));function v(){let M=new N,w=new N,S=0,T=(t-e)/n;for(let I=0;I<=r;I++){let _=[],y=I/r,A=y*(t-e)+e;for(let U=0;U<=s;U++){let E=U/s,C=E*l+a,z=Math.sin(C),O=Math.cos(C);w.x=A*z,w.y=-y*n+g,w.z=A*O,u.push(w.x,w.y,w.z),M.set(z,T,O).normalize(),d.push(M.x,M.y,M.z),f.push(E,1-y),_.push(x++)}p.push(_)}for(let I=0;I<s;I++)for(let _=0;_<r;_++){let y=p[_][I],A=p[_+1][I],U=p[_+1][I+1],E=p[_][I+1];(e>0||_!==0)&&(h.push(y,A,E),S+=3),(t>0||_!==r-1)&&(h.push(A,U,E),S+=3)}c.addGroup(m,S,0),m+=S}function b(M){let w=x,S=new we,T=new N,I=0,_=M===!0?e:t,y=M===!0?1:-1;for(let U=1;U<=s;U++)u.push(0,g*y,0),d.push(0,y,0),f.push(.5,.5),x++;let A=x;for(let U=0;U<=s;U++){let C=U/s*l+a,z=Math.cos(C),O=Math.sin(C);T.x=_*O,T.y=g*y,T.z=_*z,u.push(T.x,T.y,T.z),d.push(0,y,0),S.x=z*.5+.5,S.y=O*.5*y+.5,f.push(S.x,S.y),x++}for(let U=0;U<s;U++){let E=w+U,C=A+U;M===!0?h.push(C,C+1,E):h.push(C+1,C,E),I+=3}c.addGroup(m,I,M===!0?1:2),m+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Ca=class i extends lt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new nt(r,3)),this.setAttribute("normal",new nt(r.slice(),3)),this.setAttribute("uv",new nt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let b=new N,M=new N,w=new N;for(let S=0;S<t.length;S+=3)f(t[S+0],b),f(t[S+1],M),f(t[S+2],w),l(b,M,w,v)}function l(v,b,M,w){let S=w+1,T=[];for(let I=0;I<=S;I++){T[I]=[];let _=v.clone().lerp(M,I/S),y=b.clone().lerp(M,I/S),A=S-I;for(let U=0;U<=A;U++)U===0&&I===S?T[I][U]=_:T[I][U]=_.clone().lerp(y,U/A)}for(let I=0;I<S;I++)for(let _=0;_<2*(S-I)-1;_++){let y=Math.floor(_/2);_%2===0?(d(T[I][y+1]),d(T[I+1][y]),d(T[I][y])):(d(T[I][y+1]),d(T[I+1][y+1]),d(T[I+1][y]))}}function c(v){let b=new N;for(let M=0;M<r.length;M+=3)b.x=r[M+0],b.y=r[M+1],b.z=r[M+2],b.normalize().multiplyScalar(v),r[M+0]=b.x,r[M+1]=b.y,r[M+2]=b.z}function h(){let v=new N;for(let b=0;b<r.length;b+=3){v.x=r[b+0],v.y=r[b+1],v.z=r[b+2];let M=g(v)/2/Math.PI+.5,w=m(v)/Math.PI+.5;o.push(M,1-w)}x(),u()}function u(){for(let v=0;v<o.length;v+=6){let b=o[v+0],M=o[v+2],w=o[v+4],S=Math.max(b,M,w),T=Math.min(b,M,w);S>.9&&T<.1&&(b<.2&&(o[v+0]+=1),M<.2&&(o[v+2]+=1),w<.2&&(o[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function f(v,b){let M=v*3;b.x=e[M+0],b.y=e[M+1],b.z=e[M+2]}function x(){let v=new N,b=new N,M=new N,w=new N,S=new we,T=new we,I=new we;for(let _=0,y=0;_<r.length;_+=9,y+=6){v.set(r[_+0],r[_+1],r[_+2]),b.set(r[_+3],r[_+4],r[_+5]),M.set(r[_+6],r[_+7],r[_+8]),S.set(o[y+0],o[y+1]),T.set(o[y+2],o[y+3]),I.set(o[y+4],o[y+5]),w.copy(v).add(b).add(M).divideScalar(3);let A=g(w);p(S,y+0,v,A),p(T,y+2,b,A),p(I,y+4,M,A)}}function p(v,b,M,w){w<0&&v.x===1&&(o[b]=v.x-1),M.x===0&&M.z===0&&(o[b]=w/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function m(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var Ia=class i extends Ca{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},vr=class i extends Ca{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},an=class i extends lt{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],h=[],u=e,d=(t-e)/s,f=new N,x=new we;for(let p=0;p<=s;p++){for(let g=0;g<=n;g++){let m=r+g/n*o;f.x=u*Math.cos(m),f.y=u*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),x.x=(f.x/t+1)/2,x.y=(f.y/t+1)/2,h.push(x.x,x.y)}u+=d}for(let p=0;p<s;p++){let g=p*(n+1);for(let m=0;m<n;m++){let v=m+g,b=v,M=v+n+1,w=v+n+2,S=v+1;a.push(b,M,S),a.push(M,w,S)}}this.setIndex(a),this.setAttribute("position",new nt(l,3)),this.setAttribute("normal",new nt(c,3)),this.setAttribute("uv",new nt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var en=class i extends lt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new N,d=new N,f=[],x=[],p=[],g=[];for(let m=0;m<=n;m++){let v=[],b=m/n,M=0;m===0&&o===0?M=.5/t:m===n&&l===Math.PI&&(M=-.5/t);for(let w=0;w<=t;w++){let S=w/t;u.x=-e*Math.cos(s+S*r)*Math.sin(o+b*a),u.y=e*Math.cos(o+b*a),u.z=e*Math.sin(s+S*r)*Math.sin(o+b*a),x.push(u.x,u.y,u.z),d.copy(u).normalize(),p.push(d.x,d.y,d.z),g.push(S+M,1-b),v.push(c++)}h.push(v)}for(let m=0;m<n;m++)for(let v=0;v<t;v++){let b=h[m][v+1],M=h[m][v],w=h[m+1][v],S=h[m+1][v+1];(m!==0||o>0)&&f.push(b,M,S),(m!==n-1||l<Math.PI)&&f.push(M,w,S)}this.setIndex(f),this.setAttribute("position",new nt(x,3)),this.setAttribute("normal",new nt(p,3)),this.setAttribute("uv",new nt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var jn=class i extends lt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new N,u=new N,d=new N;for(let f=0;f<=n;f++)for(let x=0;x<=s;x++){let p=x/s*r,g=f/n*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(p),u.y=(e+t*Math.cos(g))*Math.sin(p),u.z=t*Math.sin(g),a.push(u.x,u.y,u.z),h.x=e*Math.cos(p),h.y=e*Math.sin(p),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(x/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let x=1;x<=s;x++){let p=(s+1)*f+x-1,g=(s+1)*(f-1)+x-1,m=(s+1)*(f-1)+x,v=(s+1)*f+x;o.push(p,g,v),o.push(g,m,v)}this.setIndex(o),this.setAttribute("position",new nt(a,3)),this.setAttribute("normal",new nt(l,3)),this.setAttribute("uv",new nt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Pa=class extends It{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}},Ye=class extends dn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ff,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},_n=class extends Ye{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new we(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Jt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new be(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new be(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new be(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function sa(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function dM(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function fM(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function _f(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s}function $f(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}var Hi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break t}o=t.length;break n}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},rh=class extends Hi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Qs,endingEnd:Qs}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case er:r=e,a=2*t-n;break;case ha:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case er:o=e,l=2*n-t;break;case ha:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,x=(n-t)/(s-t),p=x*x,g=p*x,m=-d*g+2*d*p-d*x,v=(1+d)*g+(-1.5-2*d)*p+(-.5+d)*x+1,b=(-1-f)*g+(1.5+f)*p+.5*x,M=f*g-f*p;for(let w=0;w!==a;++w)r[w]=m*o[h+w]+v*o[c+w]+b*o[l+w]+M*o[u+w];return r}},La=class extends Hi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},oh=class extends Hi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Rn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=sa(t,this.TimeBufferType),this.values=sa(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:sa(e.times,Array),values:sa(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new oh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new La(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new rh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ur:t=this.InterpolantFactoryMethodDiscrete;break;case dr:t=this.InterpolantFactoryMethodLinear;break;case wl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ur;case this.InterpolantFactoryMethodLinear:return dr;case this.InterpolantFactoryMethodSmooth:return wl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&dM(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===wl,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let u=a*n,d=u-n,f=u+n;for(let x=0;x!==n;++x){let p=t[u+x];if(p!==t[d+x]||p!==t[f+x]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Rn.prototype.TimeBufferType=Float32Array;Rn.prototype.ValueBufferType=Float32Array;Rn.prototype.DefaultInterpolation=dr;var Vi=class extends Rn{constructor(e,t,n){super(e,t,n)}};Vi.prototype.ValueTypeName="bool";Vi.prototype.ValueBufferType=Array;Vi.prototype.DefaultInterpolation=ur;Vi.prototype.InterpolantFactoryMethodLinear=void 0;Vi.prototype.InterpolantFactoryMethodSmooth=void 0;var Da=class extends Rn{};Da.prototype.ValueTypeName="color";var Mi=class extends Rn{};Mi.prototype.ValueTypeName="number";var ah=class extends Hi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)At.slerpFlat(r,0,o,c-a,o,c,l);return r}},bi=class extends Rn{InterpolantFactoryMethodLinear(e){return new ah(this.times,this.values,this.getValueSize(),e)}};bi.prototype.ValueTypeName="quaternion";bi.prototype.InterpolantFactoryMethodSmooth=void 0;var Gi=class extends Rn{constructor(e,t,n){super(e,t,n)}};Gi.prototype.ValueTypeName="string";Gi.prototype.ValueBufferType=Array;Gi.prototype.DefaultInterpolation=ur;Gi.prototype.InterpolantFactoryMethodLinear=void 0;Gi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ei=class extends Rn{};Ei.prototype.ValueTypeName="vector";var Wi=class{constructor(e="",t=-1,n=[],s=Uh){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=kn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(mM(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Rn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let h=fM(l);l=_f(l,1,h),c=_f(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Mi(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],h=c.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(c)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,d,f,x,p){if(f.length!==0){let g=[],m=[];$f(f,g,m,x),g.length!==0&&p.push(new u(d,g,m))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let u=0;u<c.length;u++){let d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},x;for(x=0;x<d.length;x++)if(d[x].morphTargets)for(let p=0;p<d[x].morphTargets.length;p++)f[d[x].morphTargets[p]]=-1;for(let p in f){let g=[],m=[];for(let v=0;v!==d[x].morphTargets.length;++v){let b=d[x];g.push(b.time),m.push(b.morphTarget===p?1:0)}s.push(new Mi(".morphTargetInfluence["+p+"]",g,m))}l=f.length*o}else{let f=".bones["+t[u].name+"]";n(Ei,f+".position",d,"pos",s),n(bi,f+".quaternion",d,"rot",s),n(Ei,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function pM(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Mi;case"vector":case"vector2":case"vector3":case"vector4":return Ei;case"color":return Da;case"quaternion":return bi;case"bool":case"boolean":return Vi;case"string":return Gi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function mM(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=pM(i.type);if(i.times===void 0){let t=[],n=[];$f(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var Oi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},lh=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],x=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return x}return null}}},gM=new lh,Si=class{constructor(e){this.manager=e!==void 0?e:gM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Si.DEFAULT_MATERIAL_NAME="__DEFAULT";var fi={},ch=class extends Error{constructor(e,t){super(e),this.response=t}},co=class extends Si{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Oi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(fi[e]!==void 0){fi[e].push({onLoad:t,onProgress:n,onError:s});return}fi[e]=[],fi[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=fi[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,x=f!==0,p=0,g=new ReadableStream({start(m){v();function v(){u.read().then(({done:b,value:M})=>{if(b)m.close();else{p+=M.byteLength;let w=new ProgressEvent("progress",{lengthComputable:x,loaded:p,total:f});for(let S=0,T=h.length;S<T;S++){let I=h[S];I.onProgress&&I.onProgress(w)}m.enqueue(M),v()}},b=>{m.error(b)})}}});return new Response(g)}else throw new ch(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(x=>f.decode(x))}}}).then(c=>{Oi.add(e,c);let h=fi[e];delete fi[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=fi[e];if(h===void 0)throw this.manager.itemError(e),c;delete fi[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var hh=class extends Si{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Oi.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=so("img");function l(){h(),Oi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var Mr=class extends Si{constructor(e){super(e)}load(e,t,n,s){let r=new Vt,o=new hh(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},br=class extends Rt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new be(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Na=class extends br{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new be(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},nc=new Ge,yf=new N,vf=new N,ho=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new we(512,512),this.map=null,this.mapPass=null,this.matrix=new Ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new oo,this._frameExtents=new we(1,1),this._viewportCount=1,this._viewports=[new ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;yf.setFromMatrixPosition(e.matrixWorld),t.position.copy(yf),vf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(vf),t.updateMatrixWorld(),nc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(nc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},uh=class extends ho{constructor(){super(new zt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=fr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Ua=class extends br{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new uh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Mf=new Ge,Zr=new N,ic=new N,dh=class extends ho{constructor(){super(new zt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new we(4,2),this._viewportCount=6,this._viewports=[new ct(2,1,1,1),new ct(0,1,1,1),new ct(3,1,1,1),new ct(1,1,1,1),new ct(3,0,1,1),new ct(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Zr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Zr),ic.copy(n.position),ic.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ic),n.updateMatrixWorld(),s.makeTranslation(-Zr.x,-Zr.y,-Zr.z),Mf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Mf)}},Qn=class extends br{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new dh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},fh=class extends ho{constructor(){super(new Fi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Er=class extends br{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.shadow=new fh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Xi=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Oa=class extends Si{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Oi.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Oi.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Oi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Oi.add(e,l),r.manager.itemStart(e)}};var za=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=bf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=bf();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function bf(){return performance.now()}var ph=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let s,r,o;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,s=this.valueSize,r=e*s+s,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==s;++a)n[r+a]=n[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(n,r,0,a,s)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,s=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let l=t*this._origIndex;this._mixBufferRegion(n,s,l,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,s);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,s=n*this._origIndex;e.getValue(t,s);for(let r=n,o=s;r!==o;++r)t[r]=t[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,s,r){if(s>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,s){At.slerpFlat(e,t,e,t,e,n,s)}_slerpAdditive(e,t,n,s,r){let o=this._workIndex*r;At.multiplyQuaternionsFlat(e,o,e,t,e,n),At.slerpFlat(e,t,e,t,e,o,s)}_lerp(e,t,n,s,r){let o=1-s;for(let a=0;a!==r;++a){let l=t+a;e[l]=e[l]*o+e[n+a]*s}}_lerpAdditive(e,t,n,s,r){for(let o=0;o!==r;++o){let a=t+o;e[a]=e[a]+e[n+o]*s}}},Fh="\\[\\]\\.:\\/",xM=new RegExp("["+Fh+"]","g"),kh="[^"+Fh+"]",_M="[^"+Fh.replace("\\.","")+"]",yM=/((?:WC+[\/:])*)/.source.replace("WC",kh),vM=/(WCOD+)?/.source.replace("WCOD",_M),MM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",kh),bM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",kh),EM=new RegExp("^"+yM+vM+MM+bM+"$"),SM=["material","materials","bones","map"],mh=class{constructor(e,t,n){let s=n||at.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},at=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(xM,"")}static parseTrackName(e){let t=EM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);SM.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};at.Composite=mh;at.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};at.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};at.prototype.GetterByBindingType=[at.prototype._getValue_direct,at.prototype._getValue_array,at.prototype._getValue_arrayElement,at.prototype._getValue_toArray];at.prototype.SetterByBindingTypeAndVersioning=[[at.prototype._setValue_direct,at.prototype._setValue_direct_setNeedsUpdate,at.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[at.prototype._setValue_array,at.prototype._setValue_array_setNeedsUpdate,at.prototype._setValue_array_setMatrixWorldNeedsUpdate],[at.prototype._setValue_arrayElement,at.prototype._setValue_arrayElement_setNeedsUpdate,at.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[at.prototype._setValue_fromArray,at.prototype._setValue_fromArray_setNeedsUpdate,at.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var gh=class{constructor(e,t,n=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=s;let r=t.tracks,o=r.length,a=new Array(o),l={endingStart:Qs,endingEnd:Qs};for(let c=0;c!==o;++c){let h=r[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Nh,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){let s=this._clip.duration,r=e._clip.duration,o=r/s,a=s/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let s=this._mixer,r=s.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=s._lendControlInterpolant(),this._timeScaleInterpolant=a);let l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,s){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case B0:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulateAdditive(a);break;case Uh:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulate(s,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,s=this.time+e,r=this._loopCount,o=n===k0;if(e===0)return r===-1?s:o&&(r&1)===1?t-s:s;if(n===Dh){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),s>=t||s<0){let a=Math.floor(s/t);s-=t*a,r+=Math.abs(a);let l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=s;if(o&&(r&1)===1)return t-s}return s}_setEndings(e,t,n){let s=this._interpolantSettings;n?(s.endingStart=er,s.endingEnd=er):(e?s.endingStart=this.zeroSlopeAtStart?er:Qs:s.endingStart=ha,t?s.endingEnd=this.zeroSlopeAtEnd?er:Qs:s.endingEnd=ha)}_scheduleFading(e,t,n){let s=this._mixer,r=s.time,o=this._weightInterpolant;o===null&&(o=s._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=t,a[1]=r+e,l[1]=n,this}},wM=new Float32Array(1),bs=class extends yi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let n=e._localRoot||this._root,s=e._clip.tracks,r=s.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName,h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==r;++u){let d=s[u],f=d.name,x=h[f];if(x!==void 0)++x.referenceCount,o[u]=x;else{if(x=o[u],x!==void 0){x._cacheIndex===null&&(++x.referenceCount,this._addInactiveBinding(x,l,f));continue}let p=t&&t._propertyBindings[u].binding.parsedPath;x=new ph(at.create(n,f,p),d.ValueTypeName,d.getValueSize()),++x.referenceCount,this._addInactiveBinding(x,l,f),o[u]=x}a[u].resultBuffer=x.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,n)}let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let s=this._actions,r=this._actionsByClip,o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=s.length,s.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],s=e._cacheIndex;n._cacheIndex=s,t[s]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;let u=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let s=this._bindingsByRootAndName,r=this._bindings,o=s[t];o===void 0&&(o={},s[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,s=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[s],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[s]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new La(new Float32Array(2),new Float32Array(2),1,wM),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let s=t||this._root,r=s.uuid,o=typeof e=="string"?Wi.findByName(s,e):e,a=o!==null?o.uuid:e,l=this._actionsByClip[a],c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Uh),l!==void 0){let u=l.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;let h=new gh(this,o,t,n);return this._bindAction(h,c),this._addInactiveAction(h,a,r),h}existingAction(e,t){let n=t||this._root,s=n.uuid,r=typeof e=="string"?Wi.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[s]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,s=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(s,e,r,o);let a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){let o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){let c=o[a];this._deactivateAction(c);let h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete s[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(let o in r){let a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var Ef=new Ge,Fa=class{constructor(e,t,n=0,s=1/0){this.ray=new _s(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new ro,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ef.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ef),this}intersectObject(e,t=!0,n=[]){return xh(e,this,n,t),n.sort(Sf),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)xh(e[s],this,n,t);return n.sort(Sf),n}};function Sf(i,e){return i.distance-e.distance}function xh(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)xh(r[o],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_h}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_h);var Ga={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var yn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},TM=new Fi(-1,1,1,-1,0,1),Bh=class extends lt{constructor(){super(),this.setAttribute("position",new nt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new nt([0,2,0,0,2,0],2))}},AM=new Bh,qi=class{constructor(e){this._mesh=new ue(AM,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,TM)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Wa=class extends yn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof It?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Yi.clone(e.uniforms),this.material=new It({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new qi(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var po=class extends yn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Xa=class extends yn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Ya=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new we);this._width=n.width,this._height=n.height,t=new rn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Bn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Wa(Ga),this.copyPass.material.blending=Zn,this.clock=new za}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}po!==void 0&&(o instanceof po?n=!0:o instanceof Xa&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new we);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var qa=class extends yn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new be}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var Jf={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new be(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var wr=class i extends yn{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new we(e.x,e.y):new we(256,256),this.clearColor=new be(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new rn(r,o,{type:Bn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new rn(r,o,{type:Bn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new rn(r,o,{type:Bn});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}let a=Jf;this.highPassUniforms=Yi.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new It({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new we(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Ga;this.copyUniforms=Yi.clone(h.uniforms),this.blendMaterial=new It({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:ht,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new be,this.oldClearAlpha=1,this.basic=new We,this.fsQuad=new qi(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new we(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new It({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new we(.5,.5)},direction:{value:new we(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}};wr.BlurDirectionX=new we(1,0);wr.BlurDirectionY=new we(0,1);var jf={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Ka=class extends yn{constructor(){super();let e=jf;this.uniforms=Yi.clone(e.uniforms),this.material=new Pa({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new qi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Qe.getTransfer(this._outputColorSpace)===ft&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===vh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Mh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===bh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===uo?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Eh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Sh&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Hh=[{id:"icb01",title:"I CALL BULLSHIT \xB7 VOL 1",world:"ramparts"},{id:"icb04",title:"THE PERSIAN THREAD \xB7 VOL 4",world:"ramparts"},{id:"icb05",title:"BEFORE THE PLAYBOOK \xB7 VOL 5",world:"ramparts"},{id:"shogun",title:"THE BLACK SHOGUN ANCESTORS",world:"ramparts"},{id:"mansas",title:"NO BS NO CAP \xB7 THE MANSAS",world:"ramparts"},{id:"icb06",title:"THE FIRST THOUGHT \xB7 VOL 6",world:"venus"},{id:"icb08",title:"BEFORE THE BEGINNING \xB7 VOL 8",world:"venus"},{id:"nabta",title:"NO BS NO CAP \xB7 NABTA PLAYA",world:"venus"},{id:"cs1",title:"COSMIC SHIFTS \xB7 VOL 1",world:"venus"},{id:"cs2",title:"COSMIC SHIFTS \xB7 VOL 2",world:"venus"},{id:"icb02",title:"THE FIRST ERASURE \xB7 VOL 2",world:"archive"},{id:"icb03",title:"THE WEB OF AMNESIA \xB7 VOL 3",world:"archive"},{id:"icb07",title:"THE PLAGUE INHERITANCE \xB7 VOL 7",world:"archive"},{id:"icb10",title:"B.S. BODY SNATCHERS \xB7 VOL 10",world:"archive"},{id:"jinn",title:"POLY JINN-ISIS",world:"archive"},{id:"oms",title:"THE OCCULT MEDIA SPELL",world:"archive"},{id:"legacy",title:"THE LEGACY DOCUMENT",world:"archive"}],Qf={ramparts:[{id:"r01",v:"icb01",t:"KHEM BECAME CHEMISTRY",l:"The word chemistry derives from Khem, the ancient Egyptian name for Egypt: the Black Land. Ka became the bioelectromagnetic field, Ma'at became natural law, Nun became the quantum vacuum. The science was renamed and re-presented without its authors' names attached. This is not interpretation. This is etymology.",s:"I Call Bullshit \xB7 Ch. 2, The Etymology Is the Evidence"},{id:"r02",v:"icb01",t:"VRIL. ORGONE. SCALAR. SAME THEFT.",l:"In 1938 Himmler's SS Ahnenerbe sent an expedition to Tibet to claim its spiritual science as Aryan property. The hidden force they called vril was rebranded as orgone, then scalar energy, then torsion fields. Each rebrand erased the African and Asian origins further. Different names. Same theft.",s:"I Call Bullshit \xB7 Ch. 3, The Nazi-Tibet Operation"},{id:"r03",v:"icb01",t:"THE FOUR MOVES",l:"The suppression has always had four moves: Physical Destruction, Institutional Exclusion, Terminological Appropriation, and Economic Suppression and Microdosing. They burned the libraries. They renamed the science. They excluded the scientists. Now they sell you the microdose and call it enlightenment.",s:"I Call Bullshit \xB7 Ch. 5, The Suppression Has Always Had Four Moves"},{id:"r04",v:"icb04",t:"ELAM BUILT BEFORE PERSIA",l:"The Elamites raised Chogha Zanbil, a five-tiered ziggurat 60 meters high, around 1250 BCE, and ruled from Susa, inhabited since 4395 BCE. Herodotus listed Aithiopes, burnt-faced people, among the Persian Empire's subjects. The Iranian national narrative pretends they never existed. This is not a knowledge gap. It is a policy.",s:"The Persian Thread \xB7 Part II, The Elamites"},{id:"r05",v:"icb04",t:"THE DOUBLE DELETION",l:"One sentence erases two truths: they are dark because it is very, very hot in the southern part of Iran. Blaming the climate erases the ancient Elamite presence and the Indian Ocean slave trade at once, leaving 1 to 2 million Afro-Iranians in a historical vacuum. Sun doesn't cause ancestry.",s:"The Persian Thread \xB7 Part IV, The Double Deletion"},{id:"r06",v:"icb04",t:"THEY COULDN'T ERASE THE DRUMS",l:"Bandari music of southern Iran is East African memory passed body to body. Its Zar rituals still name spirits Pepe and Mature, from the Swahili, and Cinyase, from the Nyasa language of Malawi. Slavery in Iran was abolished only in 1929. The archive survives in the body when it cannot survive in the books.",s:"The Persian Thread \xB7 Part V, The Living Archive"},{id:"r07",v:"icb05",t:"WHITE SKIN IS YOUNGER THAN KEMET",l:"Ancient DNA shows European hunter-gatherers in Spain, Luxembourg and Hungary still lacked the light-skin variants SLC24A5 and SLC45A2. For 30,000 years the people of Europe were dark-skinned. White skin is younger than agriculture, younger than Elam, younger than Kemet. It is not the origin of anything. It is a result.",s:"Before the Playbook \xB7 Part I, White Skin Is Not Ancient"},{id:"r08",v:"icb05",t:"SKY FATHER OVER EARTH MOTHER",l:"Around 3300 BCE the Yamnaya came off the Pontic-Caspian steppe with the horse, the wheel, bronze weapons and a Sky Father god. In about 500 years they accounted for up to 75% of central Europe's DNA, replacing goddess-centered Old Europe, whose cities were larger than the earliest cities of Mesopotamia.",s:"Before the Playbook \xB7 Parts II-IV, Old Europe and the Yamnaya"},{id:"r09",v:"icb05",t:"NOT CORRUPTED. SURROUNDED.",l:"The Hyksos were not spiritually corrupted from within. By the time they were expelled in 1550 BCE, the world around them had been running the Yamnaya conquest operating system for 1,500 years. The playbook started when someone decided the Father in the Sky was more important than the Mother in the Earth.",s:"Before the Playbook \xB7 Preface and Part V"},{id:"r10",v:"shogun",t:"YASUKE WAS NOT A MYTH",l:"The Shinchoko-ki, a Japanese eyewitness chronicle, records an African man reaching Kyoto in 1581. Oda Nobunaga took him into personal service with a house, a stipend, a sword and the name Yasuke. He fought at Honno-ji in 1582. His strength surpassed that of 10 men. The African samurai is a documented fact.",s:"The Black Shogun Ancestors \xB7 Ch. I, Yasuke"},{id:"r11",v:"shogun",t:"THE GREAT GENERAL OF 797",l:"Sakanoue no Tamuramaro was named Sei-i Taishogun in 797, only the second man to hold the title, and his weapons were buried with him by imperial decree. Chamberlain in 1911, DuBois in 1915 and Woodson in 1922 named him Black. That scholarship was met not with refutation but with omission.",s:"The Black Shogun Ancestors \xB7 Ch. II, The Black Shogun"},{id:"r12",v:"shogun",t:"THE ASYMMETRIC STANDARD",l:"Scandinavian sagas were treated as serious evidence of Viking voyages to North America. Septimius Severus's Libyan origin is celebrated. Tamuramaro's potential African origin is treated as a curiosity. The standard applied to Black historical claims is demonstrably higher. I Call Bullshit on that asymmetry, on the record.",s:"The Black Shogun Ancestors \xB7 Ch. V, The Scholarly Battlefield"},{id:"r13",v:"mansas",t:"THE CHARTER OF KURUKAN FUGA",l:"Proclaimed after the victory at Kirina and held in the bodies of griots for nearly 800 years, the Manden Charter protected the right to life, made every child's education the duty of the entire society, and said women should be associated with all governance. Thirteenth century. UNESCO inscribed it in 2009.",s:"The Mansas \xB7 Part IV, The Kurukan Fuga"},{id:"r14",v:"mansas",t:"2,000 SHIPS WEST",l:"In Cairo in 1324 Mansa Musa told how the king before him sent 400 ships to find the furthest limit of the Atlantic, then sailed himself with 2,000 and never came back. Recorded by al-Umari, it proves an empire attempted the crossing more than 180 years before Columbus. The most aggressively suppressed part of the record.",s:"The Mansas \xB7 Part VI, The Atlantic Voyage of Mansa Muhammad ibn Qu"},{id:"r15",v:"mansas",t:"THE SISTER WHO WON KIRINA",l:"Nana Triban, sold into marriage with the sorcerer-king Sumanguru, played along until he bragged his secret: the spur of a white rooster could kill him. She fled to Sundiata's camp with it, and he tipped his arrow with it. The decisive weapon at Kirina was not his cavalry. It was his sister's mind.",s:"The Mansas \xB7 Part III, Nana Triban"},{id:"r16",v:"mansas",t:"QUEEN KASSI, CO-EQUAL RULER",l:"Mali reserved a throne-level role for a co-equal queen. When Mansa Suleyman tried to demote Kassi for a commoner, the noble women of court rebelled, and from sanctuary in the mosque she sent secret messages that sparked civil war. Ibn Battuta saw her receive gifts in her own right in 1352.",s:"The Mansas \xB7 Part V, Queen Kassi"}],venus:[{id:"v01",v:"icb06",t:"THE THREE THOUGHTS OF WAR",l:"If all is thought, war began as a thought. Three of them: I am separate from the Earth. There is not enough. The Other is my enemy. Believed deeply enough, long enough, and passed down through enough generations of children raised in fear, they became the entire edifice of 5,000 years of war.",s:"The First Thought \xB7 Part II, The Three Candidate First Thoughts"},{id:"v02",v:"icb06",t:"HOW A THOUGHT BECOMES AN EMPIRE",l:"Thought becomes story. Story becomes memory, then emotion, then instinct, then culture. Priesthood codifies culture into theology, theology into law, and law enforced by military power becomes civilization. Once it is law, nobody has to believe the thought consciously anymore. The law enforces it.",s:"The First Thought \xB7 Part III, The Transmission Mechanism"},{id:"v03",v:"icb06",t:"MY TRUTH IS THE FINAL MOVE",l:"After 5,000 years of suppressing access to cosmic truth through violence and erasure, the most elegant move needs no army: get people to abandon the concept of a truth accessible to all and replace it with 'my truth.' Kemet's answer was Maat, a cosmic order that existed before the human observer.",s:"The First Thought \xB7 Part V, My Truth vs. THE Truth"},{id:"v04",v:"icb08",t:"ONE MAN FOR EVERY 17 WOMEN",l:"Around 5,000 BCE the diversity of the male Y-chromosome collapsed across Africa, Europe and Asia to a level equal to one man reproducing for every 17 women. The official mask says warfare. Pull it off and the question remains: what was coordinated enough to do this on a planetary scale?",s:"Before the Beginning \xB7 Mask #1, The Genetic Bottleneck"},{id:"v05",v:"icb08",t:"ENKI VERSUS ENLIL",l:"The oldest written records on Earth describe a split: Enki, of wisdom and water, who warns Ziusudra of the flood and consistently favors humanity, and Enlil, of authority and control, who seeks to limit and destroy it. The same battle as Maat and Isfet, Earth Mother and Sky Father, in different centuries.",s:"Before the Beginning \xB7 Mask #4, The Sumerian Tablets"},{id:"v06",v:"icb08",t:"THE FLOOD CAME BEFORE GENESIS",l:"The Sumerian flood story, Epic of Gilgamesh tablet XI, predates the Genesis flood by at least 1,000 years: a divine warning, a man told to build a boat, animals taken aboard, a landing on a mountain, birds sent out to find land. The Genesis story is documented to come after.",s:"Before the Beginning \xB7 Mask #4, The Sumerian Tablets"},{id:"v07",v:"nabta",t:"OLDER THAN STONEHENGE",l:"By 4800 BCE the builders of Nabta Playa had raised the world's oldest known astronomical calendar circle, its stone gates aligned to the summer solstice sunrise, 2,000 years before Stonehenge. Its alignments may also track Sirius and Orion's Belt. Most Egyptologists Wendorf spoke to had never heard of it.",s:"No BS No Cap \xB7 Nabta Playa, Ch. 3 and 4"},{id:"v08",v:"nabta",t:"HATHOR WAS BORN IN THE SAHARA",l:"Around 5,500 BCE Nabta Playa's pastoralists buried sacrificial cattle in clay-lined chambers and left a cow-shaped stone, perhaps the oldest known sculpture in Egypt. Britannica says Hathor's worship began in dynastic times. Wrong. It began at Nabta Playa, 2,000 years before any dynastic Egyptian was born.",s:"No BS No Cap \xB7 Nabta Playa, Ch. 3, What They Actually Did"},{id:"v09",v:"nabta",t:"BLACK GENESIS",l:"History forgot Nabta Playa because 20th-century archaeology was looking toward the Fertile Crescent. Dental and skeletal analysis points to a sub-Saharan African people who, as the Sahara dried, moved east to the Nile. The lead excavators themselves called it a black genesis for Egyptian civilization.",s:"No BS No Cap \xB7 Nabta Playa, Ch. 1, 2 and 5"},{id:"v10",v:"cs1",t:"THE VENUS TABLE",l:"Dresden Codex: sixty-five Venus cycles of 584 days, corrected by subtracting 4 or 8 days. No fractions, no decimals, no algebra. Alternated nine to two, the corrections hold the table within one day of the real Venus for roughly 8,049 years. Somebody counted, and they were not guessing.",s:"Cosmic Shifts Vol. I \xB7 Ch. 1, Mesoamerica"},{id:"v11",v:"cs1",t:"WHERE YOUR 24 HOURS CAME FROM",l:"Kemet ran thirty-six decan stars, one per ten-day decade. About 18 rose on a night, about 7 were lost to twilight, and the 11 risings left marked 12 intervals. Mirror that onto daylight and you have the 24-hour day. It is not a Babylonian import. Every clock on Earth still runs on this arithmetic.",s:"Cosmic Shifts Vol. I \xB7 Ch. 2, Kemet"},{id:"v12",v:"cs1",t:"THE DECREE THEY IGNORED",l:"In 238 BCE a synod of Egyptian priests at Canopus ordered a sixth epagomenal day every fourth year, giving the reason outright: the rise of Sothis advances to another day in every 4 years. It was not implemented. Somebody understood the problem exactly, said so in writing, and was ignored.",s:"Cosmic Shifts Vol. I \xB7 Ch. 2, The Sothic Cycle"},{id:"v13",v:"cs1",t:"THE COUNT IS STILL ALIVE",l:"Highland Guatemalan daykeepers, the ajq'ijab', have kept the 260-day Tzolk'in without interruption through the Conquest, the colonial period and twentieth-century violence. Somebody counted today's day-sign this morning. The Dreamspell 13-Moon calendar is a modern invention wearing its name.",s:"Cosmic Shifts Vol. I \xB7 Ch. 1, Mesoamerica"},{id:"v14",v:"cs2",t:"A NUMBER THAT SURVIVED",l:"Hipparchus found precession around 129 BCE by comparing his measure of Spica with one Timocharis wrote down 160 years before. It is invisible in one lifetime; its discovery was an act of archival comparison. His own treatise is lost, known only through Ptolemy. Transmission is everything.",s:"Cosmic Shifts Vol. II \xB7 Ch. 10, Precession"},{id:"v15",v:"cs2",t:"THE DIGGING STARS",l:"One small cluster served as a calendar on every inhabited continent. Xhosa isiLimela, Sotho Selemela, Swahili Kilimia: the digging stars, whose winter rising opens the planting year. M\u0101ori Matariki opens the new year. Hesiod timed harvest and ploughing by it. The Pleiades, read the world over.",s:"Cosmic Shifts Vol. II \xB7 Ch. 13, The Pleiades"},{id:"v16",v:"cs2",t:"THE FARMERS WHO READ EL NI\xD1O",l:"Andean farmers on the altiplano watch the Pleiades around 24 June and forecast the rains from how bright and numerous the stars look, a practice documented within decades of the Spanish conquest and still done now. A 2000 study in Nature proposed the mechanism: El Ni\xF1o cirrus dims the cluster.",s:"Cosmic Shifts Vol. II \xB7 Ch. 13, The One Place Layer 3 Might Pass"}],archive:[{id:"a01",v:"icb02",t:"THE FIRST ERASURE",l:"The playbook didn't start in 1938. It started in 1550 BCE. The Hyksos, a melanated Canaanite-Hamitic people, grew into Egypt's Nile Delta for generations before they ruled it. Ahmose I burned Avaris, sacked their tombs and chased them into Canaan. And the first people they erased looked like you.",s:"The First Erasure \xB7 Preface and Part II, Move 1"},{id:"a02",v:"icb02",t:"THE KING WHO SAVED THE PAPYRI",l:"Hyksos King Apophis had scribes copy the Rhind Mathematical Papyrus and the Edwin Smith Surgical Papyrus, the world's oldest known surgical document. Their chariot and composite bow built the New Kingdom. Then they were left off the temple king lists. The science was kept. The scientists were erased.",s:"The First Erasure \xB7 Ch. 3 and Part II, Moves 2-3"},{id:"a03",v:"icb02",t:"AVARIS. ALEXANDRIA. CORDOBA.",l:"The line is unbroken: the Hyksos cut from the king lists, the Library of Alexandria dismantled and Hypatia murdered, the libraries of Cordoba and Granada burned by the Inquisition. They burned Avaris. They burned Alexandria. They burned Cordoba. Then they sold the stolen science back to us as enlightenment.",s:"The First Erasure \xB7 Part IV, The Unbroken Line"},{id:"a04",v:"icb03",t:"MOOR MEANT BLACK",l:"From the Middle Ages to the 17th century Europeans depicted Moors as black and called Muslims of any other complexion 'white Moors.' An 1817 encyclopedia still defined moor as a negro, a blackamoor. The default Moor was Black. Modern literature reversed it, and that is not accidental.",s:"The Web of Amnesia \xB7 Thread 3, The Blackamoors"},{id:"a05",v:"icb03",t:"THE HOOD CAME FROM SPAIN",l:"The pointed hood began as the capirote, forced on those the Spanish Inquisition convicted of heresy or impure blood, while limpieza de sangre made ancestry, not faith, the basis for rights. Its targets were Moriscos and converted Jews. The target changed. The uniform stayed the same.",s:"The Web of Amnesia \xB7 Threads 4 and 6, The Moriscos and the KKK"},{id:"a06",v:"icb07",t:"THEY WERE LACKING COWS",l:"The plagues did not originate in Africa. They came from grain silos, animal pens and dense farming settlements: 8 of 15 major temperate diseases reached humans from domestic animals. Cows gave us measles. They called Indigenous peoples primitive for not having diseases. They were lacking cows.",s:"The Plague Inheritance \xB7 Parts I and III"},{id:"a07",v:"icb07",t:"IMMUNITY BUILT ON GRAVES",l:"European immunity was not a biological gift. It was the inherited scar tissue of 5,000 years of civilizational sickness. When the diseases reached the Americas, up to 95% of the Indigenous population died. They were healthy until a sick civilization arrived and called the catastrophe an act of God.",s:"The Plague Inheritance \xB7 Parts III and IV"},{id:"a08",v:"icb10",t:"THE BODY SNATCHERS' OFFER",l:"The final phase of the five-thousand-year epistemicide is not another law, curriculum or algorithm. It is an offer from transhumanism, the Silicon Valley theology of body abandonment: leave your biological body behind, something better is waiting. This document is why you should not take that offer.",s:"B.S. Body Snatchers \xB7 Authors' Declaration"},{id:"a09",v:"jinn",t:"ONE PERSON. ONE CHROMOSOME.",l:"The SLC24A5 mutation behind European light skin traces to a single ancestral copy that arose in West Asia, possibly 22,000 to 29,000 years ago. Most European selection for pale skin came in the last 8,000 years. It is a reduced production of melanin. That is the entirety of what it is.",s:"POLY JINN-ISIS \xB7 Ch. 1, The Indictment, Section III"},{id:"a10",v:"jinn",t:"HOW WHITE SKIN WAS GRAFTED",l:"In 1795 Blumenbach coined 'Caucasian' and cast white skin not as a recent low-UV mutation but as humanity's original form, every other color a degeneration. Morton, Nott, Gliddon and Agassiz built polygenism on top. The mutation became a mythology, then a mandate. The meaning was assigned.",s:"POLY JINN-ISIS \xB7 Ch. 1, The Indictment, Section IV"},{id:"a11",v:"jinn",t:"FROM SKULLS TO CLASSROOMS",l:"Samuel Morton manipulated skull measurements to fit a predetermined racial hierarchy. Darwin dealt polygenism a death blow, but it mutated into eugenics. In 1960 Louisiana made Race and Reason required reading for every high school student. The pipeline from Morton's skulls to Louisiana's classrooms was direct.",s:"POLY JINN-ISIS \xB7 Ch. 1, The Indictment, Section IV"},{id:"a12",v:"oms",t:"THE INVERSION DOCTRINE",l:"The spell runs on stolen Kemetic science turned upside down. Crowley's Thelema inverted it for power, and Kenneth Grant's Typhonian Order made Set, the chaos against which Ma'at defines itself, the object of worship. Cosmic balance was replaced with the worship of entropy.",s:"The Occult Media Spell \xB7 Ch. 1, The Inversion Doctrine"},{id:"a13",v:"oms",t:"THE LAB AND THE STUDIO",l:"The CIA's MK-Ultra used drugs, hypnosis, sensory deprivation and trauma to split personalities, experimenting on prisoners, mental patients and, disproportionately, Black Americans. Operation Mockingbird recruited hundreds of journalists, editors and executives. The line between intelligence and entertainment blurred.",s:"The Occult Media Spell \xB7 Ch. 2, MK-Ultra and Operation Mockingbird"},{id:"a14",v:"oms",t:"HIP-HOP, HIJACKED",l:"Hip-hop was born in the Bronx as peace, love, unity and having fun: a weapon of the people. The industry's gatekeepers moved to co-opt it. Consciousness and social commentary gave way to materialism, violence and nihilism. Conscious artists were marginalized; the most toxic narratives were rewarded.",s:"The Occult Media Spell \xB7 Ch. 4, The Trinity of Trauma"},{id:"a15",v:"oms",t:"GRANDMASTER AND GRAND WIZARD",l:"Asian martial arts titles meant teacher: Sensei, Shihan, Soke, Sabom-nim, Sifu. Grandmaster is a Western invention, from the Grand Master of the Templars and Freemasonry, the same fraternal well that gave the KKK its Grand Wizard. Reclaim the authentic titles. Honor the melanated lineage.",s:"The Occult Media Spell \xB7 Ch. 7, The Grandmaster and the Grand Wizard"},{id:"a16",v:"oms",t:"THE COUNTER-SPELL",l:"Teachers of melanin, consciousness and African spirituality, from Dr. Delbert Blair to Bobby Hemmitt to Dr. Laila Afrika, have seen their books made hard to find and their lectures scrubbed from the internet. The system does not waste its energy on those who pose no threat. They are the counter-spell.",s:"The Occult Media Spell \xB7 Ch. 5, The Counter-Spell"},{id:"a17",v:"legacy",t:"ALEXANDRIA: HOUSE OF STOLEN GOODS",l:"The Library of Alexandria, founded under Ptolemy I, was not a gift to the world. It was a repository for stolen goods, mandated to collect the texts of every conquered civilization. Ships arriving in Alexandria had to surrender their books for copying. The originals were kept; copies were returned.",s:"The Legacy Document \xB7 Ch. 2.2, Alexander and the Looting of the Mind"},{id:"a18",v:"legacy",t:"THE FIRST EPISTEMICIDE",l:"Alexandria burned in stages: Caesar's harbor fire in 48 BCE, Aurelian's attack in 270-275 CE, Theodosius I's destruction of the Serapeum in 391 CE. Steal the knowledge, destroy the source, present it as original. You cannot be accused of plagiarism if the original no longer exists.",s:"The Legacy Document \xB7 Ch. 2.4, The Burning of the Libraries"},{id:"a19",v:"legacy",t:"GRANADA, 1502",l:"After Granada fell, Cardinal Cisneros ordered all Arabic manuscripts in Granada burned in 1502, an estimated 80,000 to 1,000,000 volumes. What Europe had learned in Moorish universities for three centuries was repackaged as the Renaissance, its origins erased. The second great epistemicide.",s:"The Legacy Document \xB7 Ch. 5.1, The Reconquista"},{id:"a20",v:"legacy",t:"ONE SERPENT, SEVEN SKINS",l:"The serpent does not die. It sheds its skin: military conquest, religious fabrication, Moorish appropriation, colonial slavery, institutional control, pharmaceutical suppression, and now Kemetic science retold in quantum vocabulary with melanin omitted. One serpent. Seven skins. One target.",s:"The Legacy Document \xB7 Ch. 15.1, The Serpent's Seven Skins"}]};var se={purple:"#2D1B4E",gold:"#C9A84C",orange:"#E8843C",ink:"#0B0713",cyan:"#4CE0E0",red:"#C43B3B",char:"#B6D02E",violet:"#9b6cff",blue:"#2f6bff",hotred:"#ff2b2b",pink:"#ff7ad9",green:"#3ce08f"},$a=7.4;var ep=9.6,tp=8.4,np=27,Vh=.55,ip=1.4,sp=1,rp=3,Gh=21,op=.16,Wh=.42,ap=.22,lp=.24,vn=.46;var cp=2;var Ja=3,Mt={single:{name:"ASTROLABE BOLT",col:se.gold,cd:.13,spd:24,size:.16,dmg:1},scatter:{name:"GIRIH SCATTER",col:se.cyan,cd:.17,spd:22,size:.14,dmg:1},rapid:{name:"ALGEBRA RIG",col:"#bfe6ff",cd:.06,spd:28,size:.11,dmg:.6},beam:{name:"ASTROLABE BEAM",col:"#ffffff",cd:.24,spd:34,size:.13,dmg:1.6,pierce:!0},flame:{name:"ALCHEMICAL FLAME",col:se.orange,cd:.11,spd:13,size:.34,dmg:.5,life:.42}},hp={single:"ASTROLABE LANCE",scatter:"GIRIH RING",rapid:"ALGEBRA SWARM",beam:"ASTROLABE SWEEP",flame:"ALCHEMICAL BLOOM"},up=["single","scatter","rapid","beam","flame"],Es=.9,Tr=3,Za=["#e8a84c","#5fe0cf","#f29bb0","#fff3c4"],ei=[{dmg:4,reach:3,arc:1.35,t:.24,speed:2.1,hitstop:.09,shake:3,knock:8,unarmed:!1,launch:!1,preFreeze:.05,col:Za[0],name:"IAIJUTSU"},{dmg:3.6,reach:2.7,arc:1,t:.2,speed:2.3,hitstop:.08,shake:4,knock:10,unarmed:!1,launch:!1,preFreeze:0,col:Za[1],name:"KESA-GIRI"},{dmg:3.2,reach:3.1,arc:.45,t:.15,speed:2.8,hitstop:.07,shake:3,knock:14,unarmed:!1,launch:!1,preFreeze:0,col:Za[2],name:"TSUKI"},{dmg:10,reach:3.6,arc:1.4,t:.36,speed:1.5,hitstop:.22,shake:9,knock:22,unarmed:!1,launch:!0,preFreeze:.05,col:Za[3],name:"TACHI ULTRA"}],mo=ei.length,RE=ei.map(i=>i.dmg),ja=2.5,Ki=1.15,dp=14;var fp=.5,Zi=100,pp=20,mp=34,Xh=1.2,gp=30,xp=.18,$i=1.15,_p={grunt:{hp:3,spd:3.7,r:.5,aggro:13,contact:!0},shooter:{hp:5,spd:2.9,r:.5,aggro:15,keep:8,shootCd:1.7,bspd:9,armor:.5,guard:3},flyer:{hp:3,spd:4.6,r:.55,aggro:16,hover:3.3,diveCd:3.6},brute:{hp:16,spd:2.5,r:.95,aggro:12,contact:!0,armor:.65,guard:5}},yp=3.2,Ut={off:[1.25,3.3,5.9],fov:58,lerp:6,near:.3,far:260,bossZoom:1.5,lookHeight:1.55,overhead:[0,10.5,9.5],trail:2.6,minDist:2.2},Mn={ramparts:{key:"ramparts",name:"THE RAMPARTS",tag:"Moorish coast at dusk \xB7 girih arches \xB7 the book-burning engine at the gate",rail:"COAST \u2192 THE GATE",boss:"engine",accent:se.gold,sky:["#3a2352","#241542","#0a0618"],fog:"#1a1030",win:"The erasure-engine is scrap. The libraries breathe another day. The knowledge stays UNERASED."},venus:{key:"venus",name:"NEO-VENUS",tag:"terraformed sky-city \xB7 Earth, the Moon, Jupiter & Saturn overhead \xB7 the Censor Array",rail:"SKY-DOCK \u2192 THE ARRAY",boss:"censor",accent:se.pink,sky:["#150826","#9a4a3c","#c8783a"],fog:"#3a1a3a",win:"The Censor Array is dark. Venus keeps her records. The knowledge stays UNERASED."},archive:{key:"archive",name:"THE ARCHIVE DEEP",tag:"the vault beneath the library \xB7 candle-lit stacks \xB7 the Redactor press",rail:"STACKS \u2192 THE PRESS",boss:"redactor",accent:se.violet,sky:["#07040c","#0d0716","#05030a"],fog:"#0a0614",win:"The Redactor is jammed mid-stamp. Every page it swallowed comes back. The knowledge stays UNERASED."}},ti=["ramparts","venus","archive"],Ot={melvinci:{key:"melvinci",queen:!1,name:"MELVINCI",title:"THE KING",skin:"#5f3a20",skinD:"#3e2412",robe:"#241a5e",robeL:"#39299a",robeD:"#150e38",pant:"#181427",hair:"#1a1112",wrapB:se.gold,aura:se.cyan,accent:se.cyan,gem:"#2ee6a8"},kimaya:{key:"kimaya",queen:!0,name:"KI-MAYA",title:"THE QUEEN",skin:"#5f3a20",skinD:"#3e2412",robe:"#0e5c3c",robeL:"#18936a",robeD:"#07321f",pant:"#0d4a32",hair:"#191021",wrapB:se.gold,aura:se.green,accent:se.green,gem:"#ffd76a"},bizzle:{key:"bizzle",queen:!1,name:"3BIZZLE",title:"023 DESTROYER OF INJUSTICES",skin:"#4a2c18",skinD:"#2e1a0c",robe:"#0b0b0d",robeL:"#26262b",robeD:"#050506",pant:"#101012",hair:"#140c0a",wrapB:se.gold,aura:"#2ee6a8",accent:"#2ee6a8",gem:"#ff2b2b"},mahal:{key:"mahal",queen:!0,name:"MAJESTIC HEALER",title:"aka COSMIC08B \xB7 VLTRN8",skin:"#6b4028",skinD:"#452615",robe:"#5b2a9e",robeL:"#8a4fd6",robeD:"#2f1456",pant:"#3a1a66",hair:"#1a0f0c",wrapB:se.gold,aura:"#b56cff",accent:"#b56cff",gem:"#e8c25a"}},vp={engine:{name:"ERASURE-ENGINE",wake:"RAISE THE WARD  [V]",hp:80},censor:{name:"CENSOR ARRAY",wake:"CENSOR ARRAY \u2014 SHOOT THE GAPS",hp:90},redactor:{name:"THE REDACTOR",wake:"THE REDACTOR \u2014 DASH THE SHOCKWAVE",hp:70}},Yh=[{key:"SCRIBE",min:0,hint:"Reach 4,000 style for SCHOLAR \u2014 parries, dash kills and blade finishers grow the multiplier."},{key:"SCHOLAR",min:4e3,hint:"Reach 8,000 style for SAGE \u2014 chain parries; three in a row arm the gold cannon."},{key:"SAGE",min:8e3,hint:"Take zero hits in the boss fight for UNERASED."},{key:"UNERASED",min:8e3,hint:"The knowledge stays UNERASED. There is nothing above this.",noHitBoss:!0}],qh="unerased3d.lb.v1",Kh="unerased3d.codex.v2",go=Qf;function RM(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}var Vn=(i,e)=>i+","+e,CM={ramparts:{seed:11,style:"stone",rooms:[{id:"coast",w:10,h:8,kind:"start"},{id:"court",w:14,h:10,dir:"N",foes:[["grunt",2],["shooter",1]],boxes:["scatter"],pillars:!0,terrace:!0},{id:"stair",w:6,h:10,dir:"N",foes:[["grunt",2]]},{id:"plaza",w:16,h:12,dir:"E",foes:[["grunt",3],["shooter",2]],boxes:["beam"],pillars:!0},{id:"wall",w:8,h:6,dir:"N",len:5,foes:[["shooter",2]]},{id:"bastion",w:14,h:12,dir:"N",foes:[["grunt",2],["shooter",1],["brute",1]],boxes:["rapid","power"],pillars:!0,terrace:!0},{id:"approach",w:10,h:10,dir:"W",len:5,foes:[["grunt",2],["shooter",2]],boxes:["flame","power"]},{id:"gate",w:15,h:11,dir:"N",len:5,kind:"boss",terrace:"boss"}]},venus:{seed:23,style:"slab",rooms:[{id:"dock",w:10,h:8,kind:"start"},{id:"pad1",w:12,h:10,dir:"N",len:6,foes:[["grunt",1],["shooter",1],["flyer",1]],boxes:["rapid"]},{id:"span",w:8,h:8,dir:"E",len:7,foes:[["flyer",2]]},{id:"pad2",w:14,h:12,dir:"N",len:6,foes:[["grunt",2],["shooter",2],["flyer",1]],boxes:["scatter","power"],pillars:!0,terrace:!0},{id:"bridge",w:6,h:8,dir:"W",len:8,foes:[["flyer",2]]},{id:"pad3",w:12,h:12,dir:"N",len:6,foes:[["grunt",2],["shooter",2]],boxes:["beam"],terrace:!0},{id:"hangar",w:12,h:10,dir:"N",len:6,foes:[["shooter",2],["flyer",1],["brute",1]],boxes:["flame","power"]},{id:"array",w:16,h:12,dir:"N",len:7,kind:"boss",terrace:"boss"}]},archive:{seed:37,style:"stacks",rooms:[{id:"well",w:10,h:8,kind:"start"},{id:"stack1",w:14,h:12,dir:"N",foes:[["grunt",2],["shooter",1]],boxes:["scatter"],shelves:!0},{id:"aisle",w:6,h:12,dir:"N",foes:[["grunt",2]]},{id:"stack2",w:16,h:12,dir:"W",foes:[["grunt",2],["shooter",2]],boxes:["power"],shelves:!0},{id:"reading",w:12,h:10,dir:"N",foes:[["grunt",3],["shooter",1]],boxes:["beam"],pillars:!0,terrace:!0},{id:"stack3",w:16,h:12,dir:"E",foes:[["grunt",2],["shooter",2]],boxes:["rapid"],shelves:!0},{id:"vault",w:10,h:10,dir:"N",foes:[["grunt",1],["shooter",2],["brute",1]],boxes:["flame","power"],terrace:!0},{id:"press",w:15,h:11,dir:"N",len:5,kind:"boss",terrace:"boss"}]}},Mp=(i,e,t)=>i.x0-t<e.x1&&i.x1+t>e.x0&&i.z0-t<e.z1&&i.z1+t>e.z0,bp=(i,e)=>{for(let t=i.z0;t<i.z1;t++)for(let n=i.x0;n<i.x1;n++)e(n,t)};function IM(i){let e=[],t=[],n=null;for(let s of i.rooms){let r,o=null;if(!n)r={x0:0,z0:-s.h,x1:s.w,z1:0};else{let l=s.len||4,c=n.rect,h=Math.floor((c.x0+c.x1)/2),u=Math.floor((c.z0+c.z1)/2);if(s.dir==="N"){o={x0:h-1,x1:h+1,z0:c.z0-l,z1:c.z0};let d=h-Math.floor(s.w/2);r={x0:d,x1:d+s.w,z1:o.z0,z0:o.z0-s.h}}else if(s.dir==="E"){o={z0:u-1,z1:u+1,x0:c.x1,x1:c.x1+l};let d=u-Math.floor(s.h/2);r={x0:o.x1,x1:o.x1+s.w,z0:d,z1:d+s.h}}else if(s.dir==="W"){o={z0:u-1,z1:u+1,x1:c.x0,x0:c.x0-l};let d=u-Math.floor(s.h/2);r={x1:o.x0,x0:o.x0-s.w,z0:d,z1:d+s.h}}else throw new Error("room "+s.id+": bad dir "+s.dir)}for(let l of e)if(Mp(r,l.rect,1))throw new Error("room "+s.id+" overlaps "+l.id);for(let l of t)if(Mp(r,l.rect,1)&&l.to!==s.id)throw new Error("room "+s.id+" overlaps corridor into "+l.to);let a={...s,rect:r,doors:[]};if(o){t.push({rect:o,from:n.id,to:s.id,dir:s.dir});let l=s.dir,c=l==="N"?{x:o.x0+1,z:o.z1}:l==="E"?{x:o.x0,z:o.z0+1}:{x:o.x1,z:o.z0+1},h=l==="N"?{x:o.x0+1,z:o.z0}:l==="E"?{x:o.x1,z:o.z0+1}:{x:o.x0,z:o.z0+1};n.doors.push(c),a.doors.push(h)}e.push(a),n=a}return{rooms:e,corrs:t}}function PM(i){let e=[],t=i.rect,n=t.x1-t.x0,s=t.z1-t.z0;if(i.pillars)for(let r of[.25,.75])for(let o of[.25,.75])e.push([t.x0+Math.floor(n*r),t.z0+Math.floor(s*o)]);if(i.shelves){let r=0;for(let o=t.z0+3;o<t.z1-3;o+=3,r++){let a=r%2===0;for(let l=t.x0+2;l<t.x1-2;l++)a&&l<t.x0+5||!a&&l>=t.x1-5||e.push([l,o])}}return e}var Ep=1,Sp=2,LM=1.4;function DM(i){let e=i.rect,t=Math.floor((e.x0+e.x1)/2),n=Math.floor((e.z0+e.z1)/2),s=[];if(i.terrace==="boss"){let r=e.x1-e.x0;for(let o of[e.x0+Math.floor(r*.2),e.x1-Math.floor(r*.2)-2])for(let a=0;a<2;a++)for(let l=0;l<2;l++)s.push([o+a,n+l,LM])}else if(i.terrace)for(let r=-1;r<=0;r++)s.push([t-2,n+r,Ep],[t-1,n+r,Ep],[t,n+r,Sp],[t+1,n+r,Sp]);return s}function Qa(i,e,t,n){return i.doors.some(s=>Math.abs(s.x-e)<n&&Math.abs(s.z-t)<n)}function Zh(i){let e=CM[i];if(!e)throw new Error("no level: "+i);let t=RM(e.seed),{rooms:n,corrs:s}=IM(e),r=new Set,o=new Set;for(let _ of n)bp(_.rect,(y,A)=>r.add(Vn(y,A)));for(let _ of s)bp(_.rect,(y,A)=>r.add(Vn(y,A)));for(let _ of n)for(let[y,A]of PM(_)){let U=Vn(y,A);r.has(U)&&!Qa(_,y,A,3)&&o.add(U)}for(let _ of o)r.delete(_);let a=new Map;for(let _ of n)for(let[y,A,U]of DM(_)){let E=Vn(y,A);r.has(E)&&!o.has(E)&&!Qa(_,y,A,3)&&(a.set(E,U),r.delete(E))}let l=new Set;for(let _ of r){let[y,A]=_.split(",").map(Number);for(let U=-1;U<=1;U++)for(let E=-1;E<=1;E++){let C=Vn(y+E,A+U);!r.has(C)&&!o.has(C)&&!a.has(C)&&l.add(C)}}let c={x0:1/0,z0:1/0,x1:-1/0,z1:-1/0};for(let _ of l){let[y,A]=_.split(",").map(Number);c.x0=Math.min(c.x0,y),c.z0=Math.min(c.z0,A),c.x1=Math.max(c.x1,y+1),c.z1=Math.max(c.z1,A+1)}let h=(_,y)=>({x:(_+.5)*2,z:(y+.5)*2}),u=[],d=[],f=[];for(let _ of n){let y=_.rect,A=[],U=(z,O)=>z>=y.x0+1&&z<y.x1-1&&O>=y.z0+1&&O<y.z1-1&&r.has(Vn(z,O));for(let[z,O]of _.foes||[])for(let B=0;B<O;B++){let k=null;for(let $=0;$<60&&!k;$++){let W=y.x0+1+Math.floor(t()*(y.x1-y.x0-2)),Z=y.z0+1+Math.floor(t()*(y.z1-y.z0-2));!U(W,Z)||Qa(_,W,Z,3)||A.some(pe=>Math.abs(pe[0]-W)<2&&Math.abs(pe[1]-Z)<2)||(k=[W,Z])}k&&(A.push(k),u.push({type:z,...h(k[0],k[1]),room:_.id}))}let E=[[y.x0+1,y.z0+1],[y.x1-2,y.z0+1],[y.x0+1,y.z1-2],[y.x1-2,y.z1-2]].filter(([z,O])=>r.has(Vn(z,O))&&!Qa(_,z,O,2));for(let z=E.length-1;z>0;z--){let O=Math.floor(t()*(z+1));[E[z],E[O]]=[E[O],E[z]]}(_.boxes||[]).forEach((z,O)=>{let B=E[O%E.length];B&&d.push({kind:z,...h(B[0],B[1]),room:_.id})});let C=(z,O,B)=>{l.has(Vn(z,O))&&f.push({...h(z,O),dir:B})};for(let z=y.x0+1;z<y.x1-1;z+=3)C(z,y.z0-1,"S"),C(z,y.z1,"N");for(let z=y.z0+2;z<y.z1-1;z+=3)C(y.x0-1,z,"E"),C(y.x1,z,"W")}let x=n.find(_=>_.kind==="start"),p=n.find(_=>_.kind==="boss"),g=x.rect,m=p.rect,v=h(Math.floor((g.x0+g.x1)/2),Math.floor((g.z0+g.z1)/2)),b=h(Math.floor((m.x0+m.x1)/2),m.z0+3),M=p.doors[0],w=[];if(M){let _=p.dir,y=_==="E"?-1:_==="W"?1:0,A=_==="N"?1:0;for(let U of[0,1])w.push(_==="N"?[M.x-1+U,M.z+A]:[M.x+y,M.z-1+U])}let S=n.map(_=>({id:_.id,kind:_.kind||"room",rect:_.rect,doors:_.doors,pillars:!!_.pillars,shelves:!!_.shelves,center:h((_.rect.x0+_.rect.x1)/2-.5,(_.rect.z0+_.rect.z1)/2-.5)})),T=new Set;return{key:i,style:e.style,cell:2,rooms:S,corridors:s.map(_=>_.rect),floor:r,walls:l,inner:o,dyn:T,plinths:a,bounds:c,start:v,bossPos:b,bossRect:m,gateCells:w,foes:u,boxes:d,torches:f,solidCell(_,y,A=0){let U=Vn(_,y);if(l.has(U)||o.has(U)||T.has(U))return!0;let E=a.get(U);return E!==void 0?A<E-.4:!r.has(U)},heightAt(_,y){return a.get(Vn(_,y))||0},roomAt(_,y){let A=Math.floor(_/2),U=Math.floor(y/2);return S.find(E=>A>=E.rect.x0&&A<E.rect.x1&&U>=E.rect.z0&&U<E.rect.z1)||null},sealGate(){for(let[_,y]of w)T.add(Vn(_,y))},openGate(){T.clear()}}}function wp(i,e,t,n,s=0){let r=!1,o=Math.floor((e-n)/2),a=Math.floor((e+n)/2),l=Math.floor((t-n)/2),c=Math.floor((t+n)/2);for(let h=l;h<=c;h++)for(let u=o;u<=a;u++){if(!i.solidCell(u,h,s))continue;let d=u*2,f=d+2,x=h*2,p=x+2,g=Math.max(d,Math.min(e,f)),m=Math.max(x,Math.min(t,p)),v=e-g,b=t-m,M=v*v+b*b;if(!(M>=n*n))if(r=!0,M>1e-8){let w=Math.sqrt(M),S=n-w;e+=v/w*S,t+=b/w*S}else{let w=e-d,S=f-e,T=t-x,I=p-t,_=Math.min(w,S,T,I);_===w?e=d-n:_===S?e=f+n:_===T?t=x-n:t=p+n}}return{x:e,z:t,hit:r}}function Ar(i,e,t,n,s,r,o=0){let a=Math.max(1,Math.ceil(Math.hypot(s,r)/(n*.5))),l=!1;for(let c=0;c<a;c++){let h=wp(i,e+s/a,t,n,o),u=wp(i,h.x,t+r/a,n,o);e=u.x,t=u.z,l=l||h.hit||u.hit}return{x:e,z:t,hit:l}}function Ss(i,e,t,n,s,r=0){let o=n-e,a=s-t,l=Math.max(1,Math.ceil(Math.hypot(o,a)/(2/2)));for(let c=1;c<=l;c++){let h=c/l;if(i.solidCell(Math.floor((e+o*h)/2),Math.floor((t+a*h)/2),r))return!0}return!1}function Tp(i,e,t,n=1/0){let s=i.heightAt(Math.floor(e/2),Math.floor(t/2));return s&&n>=s-.4?s:0}var NM=8;function Ap(i,e){return{hero:i,world:e,score:0,mult:1,bestMult:1,kills:0,styleKills:0,parries:0,parryChain:0,hits:0,bossHits:0,pages:0,t:0,inBoss:!1}}var Jh=i=>Math.max(1,Math.min(NM,Math.round(i*4)/4));function Rp(i,e=!1){let t=Jh(i.mult+(e?.25:.05)),n=Math.round((e?150:100)*i.mult);return{...i,score:i.score+n,mult:t,bestMult:Math.max(i.bestMult,t),kills:i.kills+1,styleKills:i.styleKills+(e?1:0)}}function Cp(i){let e=Jh(i.mult+.5);return{...i,score:i.score+Math.round(150*i.mult),mult:e,bestMult:Math.max(i.bestMult,e),parries:i.parries+1,parryChain:i.parryChain+1}}function jh(i){return{...i,score:i.score+300,pages:i.pages+1}}function Ip(i,e){return{...i,score:i.score+Math.round(e*10*i.mult)}}function Pp(i){return{...i,mult:Jh(i.mult/2),parryChain:0,hits:i.hits+1,bossHits:i.bossHits+(i.inBoss?1:0)}}function Lp(i,e){return{...i,t:i.t+e}}function Dp(i){return{...i,inBoss:!0}}function Np(i){return{...i,parryChain:0}}function Qh(i){return i.score>=8e3&&i.bossHits===0?"UNERASED":i.score>=8e3?"SAGE":i.score>=4e3?"SCHOLAR":"SCRIBE"}function Up(i){return(Yh.find(e=>e.key===i)||Yh[0]).hint}function Rr(){try{return globalThis.localStorage||null}catch{return null}}function Op(i,e){try{let t=JSON.parse(i.getItem(e)||"{}");return t&&typeof t=="object"?t:{}}catch{return{}}}function zp(i,e,t){try{return i.setItem(e,JSON.stringify(t)),!0}catch{return!1}}function el(i=Rr()){return i?Op(i,qh):{}}function Fp(i,e=Rr()){let t=el(e),n={s:i.score,r:Qh(i),h:i.hero,t:Math.round(i.t),k:i.kills,w:i.parries,d:new Date().toISOString().slice(0,10)},s=[...t[i.world]||[],n].sort((o,a)=>a.s-o.s).slice(0,5),r={...t,[i.world]:s};return e&&zp(e,qh,r),r}function xo(i,e=Rr()){let t=el(e)[i]||[];return t.length?t[0]:null}function _o(i=Rr()){return i?Op(i,Kh):{}}function eu(i,e,t=Rr()){let n=_o(t),s=n[i]||[];if(s.includes(e))return n;let r={...n,[i]:[...s,e]};return t&&zp(t,Kh,r),r}function kp(i,e=Rr()){return(_o(e)[i]||[]).length}function tu(i,e,t=_o()[i]||[]){let n=go[i];return n.find(s=>!t.includes(s.id))||n[e%n.length]}var $h={perScroll:.12,perPower:.15,max:2.2};function nu(i,e){let t=Number.isFinite(i)?Math.max(0,i):0,n=Number.isFinite(e)?Math.max(1,e):1;return Math.min($h.max,1+$h.perScroll*t+$h.perPower*(n-1))}function Bp(){let i=null,e=null,t=!1,n=1,s=()=>t?0:.5*n;function r(){if(i){i.state==="suspended"&&i.resume();return}let p=window.AudioContext||window.webkitAudioContext;p&&(i=new p,e=i.createGain(),e.gain.value=s(),e.connect(i.destination))}function o(p,g,m="square",v=.2,b){if(!i||t)return;let M=i.createOscillator(),w=i.createGain(),S=i.currentTime;M.type=m,M.frequency.setValueAtTime(p,S),b&&M.frequency.exponentialRampToValueAtTime(Math.max(20,b),S+g),w.gain.setValueAtTime(v,S),w.gain.exponentialRampToValueAtTime(.001,S+g),M.connect(w),w.connect(e),M.start(S),M.stop(S+g+.02)}function a(p,g=.2,m=400,v=4e3){if(!i||t)return;let b=Math.floor(i.sampleRate*p),M=i.createBuffer(1,b,i.sampleRate),w=M.getChannelData(0);for(let y=0;y<b;y++)w[y]=(Math.random()*2-1)*(1-y/b);let S=i.createBufferSource();S.buffer=M;let T=i.createBiquadFilter();T.type="highpass",T.frequency.value=m;let I=i.createBiquadFilter();I.type="lowpass",I.frequency.value=v;let _=i.createGain();_.gain.value=g,S.connect(T),T.connect(I),I.connect(_),_.connect(e),S.start()}function l(p,g,m=.3,v=40){if(!i||t)return;let b=i.createOscillator(),M=i.createGain(),w=i.currentTime;b.type="sine",b.frequency.setValueAtTime(p,w),b.frequency.exponentialRampToValueAtTime(Math.max(20,v),w+g*.9),M.gain.setValueAtTime(0,w),M.gain.linearRampToValueAtTime(m,w+.004),M.gain.exponentialRampToValueAtTime(.001,w+g),b.connect(M),M.connect(e),b.start(w),b.stop(w+g+.02)}function c(p,g,m=.1){if(!(!i||t))for(let[v,b]of[[1,m],[2.76,m*.5],[5.4,m*.22]]){let M=i.createOscillator(),w=i.createGain(),S=i.currentTime;M.type="sine",M.frequency.value=p*v*(.99+Math.random()*.02),w.gain.setValueAtTime(b,S),w.gain.exponentialRampToValueAtTime(.001,S+g),M.connect(w),w.connect(e),M.start(S),M.stop(S+g+.02)}}let h=(p,g=.07)=>p*(1-g+Math.random()*g*2),u={shoot(p){({single:()=>o(880,.07,"square",.12,300),scatter:()=>{o(660,.08,"sawtooth",.1,200),a(.05,.05,1500,5e3)},rapid:()=>o(1400,.04,"square",.08,700),beam:()=>o(1800,.14,"sine",.12,2600),flame:()=>a(.12,.08,200,1800)})[p]?.()},charged(){o(220,.35,"sawtooth",.22,1400),a(.2,.12,300,3e3)},chargeFull(){o(1200,.12,"sine",.1,1800)},blade(p){let g=(p%4+4)%4;g===0?(a(.15,.09,h(1400),9e3),o(h(520),.14,"sawtooth",.05,180)):g===1?(a(.1,.1,h(420),2600),l(h(120),.1,.09)):g===2?a(.06,.09,h(900),6e3):(a(.3,.1,h(700),7e3),o(h(200),.3,"sawtooth",.07,900),c(h(320),.35,.05))},bladeHit(p=1){let g=Math.max(1,Math.min(1.8,p));a(.05,.16*g,h(1200),7e3),l(h(150)*(2-g*.4),.16*g,.3*g),c(h(240),.18*g,.05*g),g>1.35&&o(h(90),.2,"sine",.12,40)},berserkHit(){a(.12,.2,300,5e3),l(110,.42,.42,32),c(180,.5,.1),o(70,.45,"sine",.16,28)},parry(){o(1600,.12,"sine",.2,2400),o(2400,.2,"sine",.12,3200)},ward(){o(500,.1,"sine",.08,900)},shatter(){a(.3,.2,600,6e3),o(900,.3,"sawtooth",.12,120)},dash(){a(.1,.08,800,6e3),o(400,.1,"sine",.08,1200)},hurt(){o(180,.3,"sawtooth",.25,50),a(.2,.15,100,1500)},foeHit(){a(.03,.07,h(1600),6e3),l(h(200),.07,.1)},foeDie(){a(.18,.16,h(320),3400),l(h(140),.26,.24,30),c(h(210),.22,.05)},crate(){a(.12,.14,500,4e3),o(320,.1,"square",.1,160)},pickup(){[660,880,1320].forEach((p,g)=>setTimeout(()=>o(p,.12,"sine",.14),g*70))},page(){[523,659,784,1047].forEach((p,g)=>setTimeout(()=>o(p,.22,"sine",.12),g*110))},bossHit(){o(120,.08,"square",.1,70)},bossWake(){o(60,.9,"sawtooth",.3,200),a(.6,.2,80,900)},bossDie(){for(let p=0;p<6;p++)setTimeout(()=>{a(.3,.2,200,3e3),o(90,.4,"sawtooth",.2,30)},p*160)},beamTell(){o(1800,.5,"sine",.08,2600)},beamFire(){a(.4,.3,900,200),o(200,.4,"sawtooth",.2,80)},slam(){a(.5,.4,200,40),o(90,.5,"sawtooth",.3,30)},open(){o(900,.15,"sine",.15,1400)},ui(){o(700,.06,"sine",.08,1e3)},step(){a(.03,.03,300,1200)}};function d(){return t=!t,e&&(e.gain.value=s()),t}function f(p){t=!!p,e&&(e.gain.value=s())}function x(p){n=Math.max(0,Math.min(1,p)),e&&(e.gain.value=s())}return{init:r,beep:o,noise:a,sfx:u,toggleMute:d,setMuted:f,setVolume:x,get muted(){return t},get ready(){return!!i}}}var iu={KeyW:"up",ArrowUp:"up",KeyS:"down",ArrowDown:"down",KeyA:"left",ArrowLeft:"left",KeyD:"right",ArrowRight:"right",Space:"blade",KeyK:"fire",KeyV:"ward",KeyL:"ward",KeyF:"magic",ShiftLeft:"jump",ShiftRight:"jump",KeyC:"swap",KeyR:"camreset",KeyP:"pause",Escape:"pause",KeyM:"mute",KeyN:"nexttrack",Enter:"confirm"};var Vp="WASD / arrows move (double-tap = dash) \xB7 SPACE attack (3-hit combo) \xB7 SHIFT jump (x2) \xB7 right-click / K blaster (hold to charge) \xB7 V or L hold = ward \xB7 F magic \xB7 double-click + drag = spin camera \xB7 wheel zoom \xB7 R reset view";function Gp(i,e,t){let n=.2126*i+.7152*e+.0722*t;return n>=Hp?0:UM*(1-n/Hp)}var Hp=.34,UM=.55;function Wp(i,e,t,n){let s={sprint:!1,orbit:!1,orbitDX:0,orbitDY:0,zoom:0,jump:!1,up:!1,down:!1,left:!1,right:!1,fire:!1,blade:!1,ward:!1,dash:!1,swap:!1,mx:0,mz:0,aimX:0,aimZ:-1,mouseAim:!1,touch:!1,sx:0,sz:0},r=new Set,o={},a=new Fa,l=new On(new N(0,1,0),-.9),c=new we,h=new N,u=0,d=0,f=-1e9,x=0;function p(E){r.add(E)}function g(E){let C=performance.now()/1e3;o[E]&&C-o[E]<lp?(s.sprint=!0,p("dash"),o[E]=0):o[E]=C}let m=()=>s.up||s.down||s.left||s.right;window.addEventListener("keydown",E=>{let C=iu[E.code];C&&(["blade","fire","jump","up","down","left","right"].includes(C)&&E.preventDefault(),!s[C]&&(C==="up"||C==="down"||C==="left"||C==="right")&&(g(C),x=performance.now()),E.repeat||p(C),C in s&&(s[C]=!0))}),window.addEventListener("keyup",E=>{let C=iu[E.code];C&&C in s&&(s[C]=!1),m()||(s.sprint=!1)}),window.addEventListener("blur",()=>{for(let E of["up","down","left","right","fire","blade","ward","dash"])s[E]=!1}),i.addEventListener("contextmenu",E=>E.preventDefault());let v=-1e9,b=0,M=0;i.addEventListener("mousemove",E=>{u=E.clientX,d=E.clientY,s.orbit?(s.orbitDX+=E.clientX-b,s.orbitDY+=E.clientY-M,b=E.clientX,M=E.clientY):f=performance.now()}),i.addEventListener("wheel",E=>{s.zoom+=Math.sign(E.deltaY),E.preventDefault()},{passive:!1}),i.addEventListener("mousedown",E=>{if(!s.touch){if(E.button===0){let C=performance.now();C-v<320?(s.orbit=!0,s.blade=!1,b=E.clientX,M=E.clientY):(s.blade=!0,p("blade")),v=C}E.button===2&&(s.fire=!0,p("fire"))}}),window.addEventListener("mouseup",E=>{E.button===0&&(s.blade=!1,s.orbit=!1),E.button===2&&(s.fire=!1)});let w=null,S=0,T=0,I=52;function _(E,C){let z=E-S,O=C-T,B=Math.hypot(z,O);B>I&&(z*=I/B,O*=I/B),t.style.transform=`translate(${z}px,${O}px)`;let k=.18,$=Math.min(1,Math.hypot(z,O)/I);if($<k){s.sx=0,s.sz=0;return}let W=($-k)/(1-k);s.sx=z/I*W/$,s.sz=O/I*W/$}if(e){e.addEventListener("pointerdown",C=>{s.touch=!0,w=C.pointerId;let z=e.getBoundingClientRect();S=z.left+z.width/2,T=z.top+z.height/2,e.setPointerCapture(C.pointerId),e.classList.add("hit"),_(C.clientX,C.clientY),C.preventDefault()}),e.addEventListener("pointermove",C=>{C.pointerId===w&&_(C.clientX,C.clientY)});let E=C=>{C.pointerId===w&&(w=null,s.sx=0,s.sz=0,t.style.transform="",e.classList.remove("hit"))};e.addEventListener("pointerup",E),e.addEventListener("pointercancel",E)}for(let[E,C]of Object.entries(n||{})){if(!C)continue;C.addEventListener("pointerdown",O=>{s.touch=!0,s[E]=!0,p(E),C.classList.add("hit"),O.preventDefault()});let z=()=>{s[E]=!1,C.classList.remove("hit")};C.addEventListener("pointerup",z),C.addEventListener("pointercancel",z),C.addEventListener("pointerleave",z)}window.addEventListener("touchstart",()=>{s.touch=!0,document.body.classList.add("touch")},{once:!0,passive:!0});function y(E,C,z){let O=(s.right?1:0)-(s.left?1:0),B=(s.down?1:0)-(s.up?1:0);if(E&&(O||B)){let Z=C-E.position.x,pe=z-E.position.z,Se=Math.hypot(Z,pe)||1,K=Z/Se,re=pe/Se,me=-re*O+K*-B,j=K*O+re*-B;O=me,B=j}(s.sx||s.sz)&&(O=s.sx,B=s.sz);let k=Math.hypot(O,B);k>1&&(O/=k,B/=k),s.mx=O,s.mz=B;let $=performance.now();if(!s.touch&&$-f<4e3&&f>x-4e3&&E&&(c.set(u/window.innerWidth*2-1,-(d/window.innerHeight)*2+1),a.setFromCamera(c,E),a.ray.intersectPlane(l,h))){let Z=h.x-C,pe=h.z-z,Se=Math.hypot(Z,pe);if(Se>.3){s.aimX=Z/Se,s.aimZ=pe/Se,s.mouseAim=!0;return}}s.mouseAim=!1,k>.05&&(s.aimX=O/Math.max(k,1e-6),s.aimZ=B/Math.max(k,1e-6))}function A(E){return r.has(E)?(r.delete(E),!0):!1}function U(){r.clear()}return{IN:s,update:y,pressed:A,clearEdges:U,press:p}}var Gn={maxYawRate:1.2,yawAccel:2.4,moveDeadzone:.25,towardInfluence:.3,follow:4.2,lookFollow:5,leadFollow:2.6,pullInRate:9,pullOutRate:1.6};function Xp(i,e,t,n,s=Gn){if(!(n>s.moveDeadzone))return 0;let r=Math.hypot(i,e);if(r<1e-6)return 0;let o=i/r,a=e/r,l=Math.sin(t),c=Math.cos(t),h=o*c-a*l,u=-o*l-a*c,d=u>=0?1:s.towardInfluence+(1-s.towardInfluence)*(1+u),f=-h*s.maxYawRate*d;return Math.max(-s.maxYawRate,Math.min(s.maxYawRate,f))}function Ji(i,e,t,n){return e+(i-e)*Math.exp(-t*n)}var OM={walkRef:2.7,runRef:8.1,strafeRef:6.8,backRef:3.9,walkToRun:4.6,runToWalk:4,minScale:.62,maxScale:1.55,idleSpeed:.35};function Yp(i,e,t,n,s=OM){if(i<s.idleSpeed)return{clip:null,timeScale:1,running:!1};let r=n?i>s.runToWalk:i>s.walkToRun,o=e<-.5,a=!o&&Math.abs(t)>Math.abs(e),l=o?"back":a?t>0?"strafeRight":"strafeLeft":r?"run":"walk",c=o?s.backRef:a?s.strafeRef:r?s.runRef:s.walkRef,h=Math.max(s.minScale,Math.min(s.maxScale,i/c));return{clip:l,timeScale:h,running:r}}function qp(i,e,t=!0){return!t||!Number.isFinite(i)||i<=0?0:Math.min(i,e)}function Kp(i,e,t=.22){if(!(i>0)||!(e>0))return 1;let n=1-Math.max(0,Math.min(1,i/e));return t+(1-t)*n*n}function Zp(i){if(i<=0)return 1;if(i>=1)return 0;let e=Math.exp(-3.2*i*i),t=1-i*i*(3-2*i)*(1-(1-i)*.15);return Math.max(0,e*Math.max(0,t))}var zM={perHit:.22,max:.8};function $p(i,e=zM){return i>0?1+Math.min(e.max,i*e.perHit):1}var su=new Map;function ru(i="rgba(255,255,255,1)",e="rgba(255,255,255,0)",t=128){let n="r"+i+e+t;if(su.has(n))return su.get(n);let s=document.createElement("canvas");s.width=s.height=t;let r=s.getContext("2d"),o=r.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2),a=/rgba?\(([^)]+)\)/.exec(i),[l,c,h]=a?a[1].split(",").slice(0,3).map(f=>parseFloat(f)):[255,255,255],u=a&&a[1].split(",").length>3?parseFloat(a[1].split(",")[3]):1;for(let f=0;f<=16;f++){let x=f/16;o.addColorStop(x,`rgba(${l},${c},${h},${(u*Zp(x)).toFixed(4)})`)}r.fillStyle=o,r.fillRect(0,0,t,t);let d=new An(s);return d.colorSpace=pt,d.minFilter=Sn,d.generateMipmaps=!0,su.set(n,d),d}function FM(){return ru("rgba(0,0,0,0.55)","rgba(0,0,0,0)",64)}function bt(i,e,t=.9){let n=new ao({map:ru(),color:i,transparent:!0,opacity:t,blending:ht,depthWrite:!1}),s=new ba(n);return s.scale.set(e,e,1),s}function Wn(i){let e=new ue(new Tn(i*2,i*2),new We({map:FM(),transparent:!0,depthWrite:!1}));return e.rotation.x=-Math.PI/2,e.position.y=.03,e.renderOrder=1,e}var ws=900,kM=40;function Jp(i){let e=new Float32Array(ws*3),t=new Float32Array(ws*3),n=new Float32Array(ws),s=new Float32Array(ws),r=new lt;r.setAttribute("position",new et(e,3)),r.setAttribute("pcol",new et(t,3)),r.setAttribute("psize",new et(n,1)),r.setAttribute("palpha",new et(s,1));let o=new It({transparent:!0,depthWrite:!1,blending:ht,uniforms:{map:{value:ru()},scaleY:{value:600}},vertexShader:`attribute vec3 pcol; attribute float psize; attribute float palpha; varying vec3 vc; varying float va; uniform float scaleY;
      void main(){ vc=pcol; va=palpha; vec4 mv=modelViewMatrix*vec4(position,1.0); gl_PointSize=psize*scaleY/-mv.z; gl_Position=projectionMatrix*mv; }`,fragmentShader:"uniform sampler2D map; varying vec3 vc; varying float va; void main(){ vec4 t=texture2D(map,gl_PointCoord); gl_FragColor=vec4(vc*t.rgb, t.a*va); }"}),a=new vi(r,o);a.frustumCulled=!1,i.add(a);let l=[],c=new be;function h(M,w,S,T,I=8,_={}){c.set(T);for(let y=0;y<I&&l.length<ws;y++){let A=Math.random()*Math.PI*2,U=(_.spd||4)*(.4+Math.random()*.8),E=(_.up??3)*(.3+Math.random()*.9);l.push({x:M,y:w,z:S,vx:Math.cos(A)*U,vy:E,vz:Math.sin(A)*U,life:_.life||.6,t:0,r:c.r,g:c.g,b:c.b,size:_.size||.5,grav:_.grav??9,drag:_.drag??.9})}}function u(M,w,S,T,I=.4,_=.9,y=1.5){l.length<ws&&(c.set(T),l.push({x:M,y:w,z:S,vx:(Math.random()-.5)*.8,vy:y,vz:(Math.random()-.5)*.8,life:_,t:0,r:c.r,g:c.g,b:c.b,size:I,grav:-.5,drag:.98}))}let d=24,f=[];function x(M,w,S,T,I=1.6,_=.13){let y=f.find(A=>!A.alive);if(!y){if(f.length>=d)return;let A=bt(T,1,1);A.renderOrder=3,i.add(A),y={s:A,alive:!1},f.push(y)}y.alive=!0,y.t=0,y.life=_,y.size=I,y.s.material.color.set(T),y.s.position.set(M,w,S),y.s.visible=!0}let p=new an(.82,1,48),g=[];function m(M,w,S,T=3,I=.5,_=.06){let y=g.find(A=>!A.alive);if(!y){if(g.length>=kM)return;let A=new ue(p,new We({color:S,transparent:!0,blending:ht,depthWrite:!1,side:mt}));A.rotation.x=-Math.PI/2,i.add(A),y={m:A,alive:!1},g.push(y)}y.alive=!0,y.t=0,y.life=I,y.maxR=T,y.m.material.color.set(S),y.m.position.set(M,_,w),y.m.visible=!0}function v(M){for(let w=l.length-1;w>=0;w--){let S=l[w];if(S.t+=M,S.t>=S.life){l[w]=l[l.length-1],l.pop();continue}S.vy-=S.grav*M,S.vx*=S.drag,S.vz*=S.drag,S.x+=S.vx*M,S.y+=S.vy*M,S.z+=S.vz*M,S.y<.05&&S.grav>0&&(S.y=.05,S.vy*=-.3)}for(let w=0;w<ws;w++)if(w<l.length){let S=l[w],T=1-S.t/S.life;e[w*3]=S.x,e[w*3+1]=S.y,e[w*3+2]=S.z,t[w*3]=S.r,t[w*3+1]=S.g,t[w*3+2]=S.b,n[w]=S.size*(.6+.4*T),s[w]=T}else s[w]=0,n[w]=0;r.attributes.position.needsUpdate=!0,r.attributes.pcol.needsUpdate=!0,r.attributes.psize.needsUpdate=!0,r.attributes.palpha.needsUpdate=!0,r.setDrawRange(0,Math.max(1,l.length));for(let w of f){if(!w.alive)continue;w.t+=M;let S=w.t/w.life;if(S>=1){w.alive=!1,w.s.visible=!1;continue}let T=S<.3?S/.3:1,I=S<.3?1:1-(S-.3)/.7;w.s.scale.setScalar(w.size*(.35+.65*T)*(1+S*.5)),w.s.material.opacity=I}for(let w of g){if(!w.alive)continue;w.t+=M;let S=w.t/w.life;if(S>=1){w.alive=!1,w.m.visible=!1;continue}let T=.2+w.maxR*S;w.m.scale.set(T,T,1),w.m.material.opacity=(1-S)*.9}}function b(){l.length=0;for(let M of g)M.alive=!1,M.m.visible=!1;for(let M of f)M.alive=!1,M.s.visible=!1}return{spawn:h,ember:u,ring:m,flash:x,update:v,clear:b,get count(){return l.length}}}function ni(i,e=256){let t=document.createElement("canvas");t.width=t.height=e;let n=t.getContext("2d");i(n,e);let s=new An(t);return s.colorSpace=pt,s.wrapS=s.wrapT=un,s.anisotropy=Cr,s}var BM=new Mr,il=new Map,Cr=8;function em(i){try{Cr=Math.max(1,i.capabilities.getMaxAnisotropy())}catch{Cr=8}for(let e of il.values())for(let t of Object.values(e))t.anisotropy=Cr,t.needsUpdate=!0;return Cr}function Ir(i){if(il.has(i))return il.get(i);let e=(n,s)=>{let r=BM.load(`./assets/tex_ship/${i}_${n}.jpg`);return r.wrapS=r.wrapT=un,r.anisotropy=Cr,s&&(r.colorSpace=pt),r},t={map:e("Diffuse",!0),normalMap:e("nor_gl"),roughnessMap:e("Rough")};return il.set(i,t),t}function tl(i,e,t,n){i.fillStyle=n;for(let s=0;s<t;s++)i.fillRect(Math.random()*e,Math.random()*e,1.5,1.5)}function Pr(i,e,t,n,s,r){i.strokeStyle=s,i.lineWidth=r,i.beginPath();for(let o=0;o<2;o++){let a=o*Math.PI/4;for(let l=0;l<4;l++){let c=a+l*Math.PI/2,h=e+Math.cos(c)*n,u=t+Math.sin(c)*n;l?i.lineTo(h,u):i.moveTo(h,u)}i.closePath()}i.stroke()}var HM={stone:{pbr:{floor:"red_sandstone_pavement",wall:"large_sandstone_blocks_01",tint:"#fff0dc"},props:"ramparts",wallH:2.4,hemi:["#5a3f7a","#2a1a12",1.1],sun:["#ffb070",1.1,[.4,1,.6]],torch:{col:"#ffa040",y:1.75,kind:"flame",light:"#ff9a3c",intensity:14,dist:13},floor:()=>ni((i,e)=>{i.fillStyle="#5c4b3c",i.fillRect(0,0,e,e),tl(i,e,900,"rgba(0,0,0,.25)"),tl(i,e,500,"rgba(255,220,180,.12)"),i.strokeStyle="rgba(20,10,5,.55)",i.lineWidth=4,i.strokeRect(2,2,e-4,e-4),Pr(i,e/2,e/2,e*.36,"rgba(201,168,76,.28)",3),Pr(i,e/2,e/2,e*.18,"rgba(76,224,224,.18)",2)}),wall:()=>ni((i,e)=>{i.fillStyle="#7a6650",i.fillRect(0,0,e,e),tl(i,e,700,"rgba(0,0,0,.22)"),i.strokeStyle="rgba(30,18,10,.6)",i.lineWidth=4;for(let t=0;t<e;t+=64){i.beginPath(),i.moveTo(0,t),i.lineTo(e,t),i.stroke();for(let n=t/64%2?64:0;n<e;n+=128)i.beginPath(),i.moveTo(n,t),i.lineTo(n,t+64),i.stroke()}i.fillStyle="rgba(201,168,76,.5)",i.fillRect(0,18,e,10),Pr(i,e*.25,23,9,"rgba(11,7,19,.6)",2),Pr(i,e*.75,23,9,"rgba(11,7,19,.6)",2)}),top:()=>ni((i,e)=>{i.fillStyle="#8a7560",i.fillRect(0,0,e,e),tl(i,e,600,"rgba(0,0,0,.2)"),i.strokeStyle="rgba(30,18,10,.5)",i.lineWidth=4,i.strokeRect(2,2,e-4,e-4)})},slab:{pbr:{floor:"metal_plate",wall:"metal_plate",tint:"#e8def4",glowFloor:!0},props:"venus",wallH:.9,hemi:["#ffc8ee","#5a3a5c",1.7],sun:["#ffd2a8",1.6,[-.5,1,.5]],torch:{col:se.pink,y:1.4,kind:"pylon",light:"#ff7ad9",intensity:10,dist:12},floor:()=>ni((i,e)=>{i.fillStyle="#4a2a5c",i.fillRect(0,0,e,e);let t=e/4;i.strokeStyle="rgba(255,150,225,.8)",i.lineWidth=3;for(let s=0;s<3;s++)for(let r=0;r<3;r++){let o=r*t*1.6+s%2*t*.8+t*.4,a=s*t*1.4+t*.5;i.beginPath();for(let l=0;l<6;l++){let c=l*Math.PI/3,h=o+Math.cos(c)*t*.45,u=a+Math.sin(c)*t*.45;l?i.lineTo(h,u):i.moveTo(h,u)}i.closePath(),i.stroke()}let n=i.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);n.addColorStop(0,"rgba(255,122,217,.12)"),n.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=n,i.fillRect(0,0,e,e)}),wall:()=>ni((i,e)=>{i.fillStyle="#3b1d45",i.fillRect(0,0,e,e),i.fillStyle="rgba(255,122,217,.85)",i.fillRect(0,0,e,8),i.fillStyle="rgba(76,224,224,.7)";for(let t=16;t<e;t+=48)i.fillRect(t,e/2-3,20,6)}),top:()=>ni((i,e)=>{i.fillStyle="#4a2456",i.fillRect(0,0,e,e),i.strokeStyle="rgba(255,122,217,.8)",i.lineWidth=8,i.strokeRect(4,4,e-8,e-8)})},stacks:{pbr:{floor:"dark_wooden_planks",pillar:"cobblestone_03",tint:"#f0d0a8"},props:"archive",wallH:2.8,hemi:["#6a5aaa","#3a2418",1.9],sun:["#c8a8ff",1.3,[.2,1,.3]],torch:{col:"#ffd27a",y:1.2,kind:"candle",light:"#ffc66a",intensity:9,dist:10},floor:()=>ni((i,e)=>{i.fillStyle="#3a2618",i.fillRect(0,0,e,e),i.strokeStyle="rgba(0,0,0,.45)",i.lineWidth=3;for(let t=0;t<e;t+=42)i.beginPath(),i.moveTo(0,t),i.lineTo(e,t),i.stroke();i.strokeStyle="rgba(255,200,140,.08)",i.lineWidth=1;for(let t=0;t<40;t++){let n=Math.random()*e;i.beginPath(),i.moveTo(0,n),i.bezierCurveTo(e/3,n+6,e*2/3,n-6,e,n),i.stroke()}i.fillStyle="rgba(155,108,255,.10)",i.beginPath(),i.arc(e*.7,e*.3,e*.12,0,7),i.fill()}),wall:()=>ni((i,e)=>{i.fillStyle="#2a1a10",i.fillRect(0,0,e,e);let t=["#8c2f2f","#2f6b4a","#c9a84c","#2f4b8c","#e8dcc0","#6b3a8c","#b56a2a"];for(let n=0;n<3;n++){let s=12+n*82;i.fillStyle="#1a100a",i.fillRect(0,s+66,e,8);let r=4;for(;r<e-4;){let o=9+Math.random()*14;i.fillStyle=t[Math.floor(Math.random()*t.length)],i.fillRect(r,s+6+Math.random()*8,o-2,60),r+=o}}}),top:()=>ni((i,e)=>{i.fillStyle="#3a2618",i.fillRect(0,0,e,e),i.strokeStyle="rgba(0,0,0,.5)",i.lineWidth=6,i.strokeRect(3,3,e-6,e-6)})}};function VM(i,e,t=.5){let n=i.floor.size,s=new Float32Array(n*12),r=new Float32Array(n*12),o=new Float32Array(n*8),a=new Uint32Array(n*6),l=0;for(let h of i.floor){let[u,d]=h.split(",").map(Number),f=u*2,x=d*2,p=f+2,g=x+2,m=l*4;s.set([f,0,x,p,0,x,p,0,g,f,0,g],l*12),r.set([0,1,0,0,1,0,0,1,0,0,1,0],l*12),o.set([f*t,x*t,p*t,x*t,p*t,g*t,f*t,g*t],l*8),a.set([m,m+2,m+1,m,m+3,m+2],l*6),l++}let c=new lt;return c.setAttribute("position",new et(s,3)),c.setAttribute("normal",new et(r,3)),c.setAttribute("uv",new et(o,2)),c.setIndex(new et(a,1)),new ue(c,e)}function GM(i){let e=new It({side:jt,depthWrite:!1,fog:!1,uniforms:{c0:{value:new be(i[0])},c1:{value:new be(i[1])},c2:{value:new be(i[2])}},vertexShader:"varying vec3 vp; void main(){ vp=normalize(position); gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"uniform vec3 c0,c1,c2; varying vec3 vp; void main(){ float h=vp.y; vec3 c = h>0.0 ? mix(c1,c0,smoothstep(0.0,0.7,h)) : mix(c1,c2,smoothstep(0.0,-0.5,h)); gl_FragColor=vec4(c,1.0); }"}),t=new ue(new en(190,24,16),e);return t.frustumCulled=!1,t}function WM(i){let e=new Float32Array(i*3);for(let s=0;s<i;s++){let r=Math.random()*6.283,o=Math.acos(Math.random()*.9+.1),a=175;e.set([a*Math.sin(o)*Math.cos(r),a*Math.cos(o),a*Math.sin(o)*Math.sin(r)],s*3)}let t=new lt;t.setAttribute("position",new et(e,3));let n=new vi(t,new Bi({color:"#fff4dc",size:1.6,sizeAttenuation:!1,transparent:!0,opacity:.85,fog:!1}));return n.frustumCulled=!1,n}function nl(i,e,t,n){let s=ni(e,256),r=new ue(new en(i,32,24),new We({map:s,fog:!1}));if(r.position.set(...t),r.frustumCulled=!1,n){let o=new ue(new an(i*1.4,i*2.3,64),new We({color:"#e8d6a8",transparent:!0,opacity:.75,side:mt,fog:!1}));o.rotation.x=-1.2,o.rotation.y=.3,r.add(o)}return r}function jp(i){return(e,t)=>{for(let n=0;n<i.length;n++)e.fillStyle=i[n],e.fillRect(0,n*t/i.length,t,t/i.length+2);for(let n=0;n<40;n++)e.fillStyle="rgba(255,255,255,.08)",e.beginPath(),e.ellipse(Math.random()*t,Math.random()*t,20+Math.random()*40,4+Math.random()*6,0,0,7),e.fill()}}function XM(i,e){i.fillStyle="#1e5fb8",i.fillRect(0,0,e,e),i.fillStyle="#3f8f3a";for(let t=0;t<9;t++)i.beginPath(),i.ellipse(Math.random()*e,Math.random()*e,20+Math.random()*50,15+Math.random()*35,Math.random()*3,0,7),i.fill();i.fillStyle="rgba(255,255,255,.55)";for(let t=0;t<30;t++)i.beginPath(),i.ellipse(Math.random()*e,Math.random()*e,18+Math.random()*30,4+Math.random()*5,Math.random()*3,0,7),i.fill()}function YM(i,e){i.fillStyle="#c9c4b8",i.fillRect(0,0,e,e);for(let t=0;t<40;t++)i.fillStyle="rgba(60,55,50,.35)",i.beginPath(),i.arc(Math.random()*e,Math.random()*e,3+Math.random()*12,0,7),i.fill()}function ou(i,e,t,n=null,s={}){let r=HM[e.style],o=new ke;i.add(o);let a=[];i.background=new be(t.sky[2]),i.fog=new va(t.fog,34,95);let l=GM(t.sky);o.add(l),e.style!=="stacks"&&o.add(WM(e.style==="slab"?700:400));let c=[];if(e.style==="slab"){c.push(nl(34,XM,[40,-95,-60]),nl(9,YM,[-30,-70,-20]),nl(48,jp(["#c7a27a","#e3c39a","#a9744f","#e8d3b0","#b8865c","#d9b98f","#a06a48"]),[-110,-120,-150]),nl(30,jp(["#e9d8a6","#d4bf8a","#f0e2b8","#c9b07a"]),[120,-105,-110],!0));for(let j of c)o.add(j)}let h=new Na(r.hemi[0],r.hemi[1],r.hemi[2]);o.add(h);let u=new Er(r.sun[0],r.sun[1]*1.3),d=new N(...r.sun[2]).normalize();if(o.add(u,u.target),s.shadows){u.castShadow=!0,u.shadow.mapSize.set(1024,1024);let j=u.shadow.camera;j.left=j.bottom=-16,j.right=j.top=16,j.near=1,j.far=80,u.shadow.bias=-8e-4,u.shadow.normalBias=.03}let f=r.floor(),x=r.wall(),p=r.top();a.push(f,x,p);let g;r.pbr&&r.pbr.floor?(g=new Ye({...Ir(r.pbr.floor),color:r.pbr.tint,roughness:1,metalness:r.pbr.glowFloor?.2:.05,normalScale:new we(1.2,1.2)}),r.pbr.glowFloor&&(g.emissive=new be("#ff7ad9"),g.emissiveIntensity=.75,g.emissiveMap=f)):g=new Ye({map:f,roughness:.88,metalness:.05});let m=VM(e,g,r.pbr?.25:.5);m.receiveShadow=!0,o.add(m),a.push(m.geometry,m.material);let v=r.wallH,b=new Ct(2,v,2);b.translate(0,v/2,0);let M=r.pbr&&r.pbr.wall&&e.style==="stone"?new Ye({...Ir(r.pbr.wall),color:"#f0dcc0",roughness:1}):new Ye({map:x,roughness:.85,...r.pbr&&r.pbr.wall?{normalMap:Ir(r.pbr.wall).normalMap,metalness:.5}:{}}),w=new Ye({map:p,roughness:.9});e.style==="slab"&&(M.emissive=new be("#ff7ad9"),M.emissiveIntensity=.25,M.emissiveMap=x);let S=[M,M,w,w,M,M],T=[...e.walls].map(j=>j.split(",").map(Number)),I=[],_=[];for(let j of e.inner){let[xe,ae]=j.split(",").map(Number),ce=e.roomAt((xe+.5)*2,(ae+.5)*2);(ce&&ce.pillars?_:I).push([xe,ae])}let y=new ki(b,S,T.length+I.length),A=new Ge,U=new be;if([...T,...I].forEach(([j,xe],ae)=>{A.makeTranslation((j+.5)*2,0,(xe+.5)*2),y.setMatrixAt(ae,A),U.setHSL(0,0,.82+Math.random()*.18),y.setColorAt(ae,U)}),y.castShadow=y.receiveShadow=!0,y.instanceMatrix.needsUpdate=!0,y.instanceColor&&(y.instanceColor.needsUpdate=!0),o.add(y),a.push(b,M,w),_.length){let j=new vt(.55,.68,v+.6,12);j.translate(0,(v+.6)/2,0);let xe=r.pbr&&(r.pbr.pillar||r.pbr.wall)?new Ye({...Ir(r.pbr.pillar||r.pbr.wall),color:"#e8d4b8",roughness:1}):new Ye({map:x,roughness:.8}),ae=new ki(j,xe,_.length);ae.castShadow=ae.receiveShadow=!0;let ce=new ki(new Ct(1.6,.3,1.6),new Ye({color:se.gold,roughness:.4,metalness:.6}),_.length);_.forEach(([le,fe],Be)=>{A.makeTranslation((le+.5)*2,0,(fe+.5)*2),ae.setMatrixAt(Be,A),A.makeTranslation((le+.5)*2,v+.6,(fe+.5)*2),ce.setMatrixAt(Be,A)}),ae.instanceMatrix.needsUpdate=!0,ce.instanceMatrix.needsUpdate=!0,o.add(ae,ce),a.push(j,xe)}let E=new ue(new Tn(600,600),new Ye({color:e.style==="stone"?"#0d1a3a":e.style==="slab"?"#1a0a22":"#050308",roughness:1,metalness:0}));E.rotation.x=-Math.PI/2,E.position.y=-.5,e.style!=="slab"&&o.add(E);let C=[];for(let j of e.torches){let xe=j.dir==="S"?[0,1]:j.dir==="N"?[0,-1]:j.dir==="E"?[1,0]:[-1,0],ae=j.x+xe[0]*1.02,ce=j.z+xe[1]*1.02,le=new ke;if(le.position.set(ae,0,ce),r.torch.kind==="flame"){let L=new ue(new Ct(.18,.5,.18),new Ye({color:"#2a1a10"}));L.position.y=r.torch.y-.3,le.add(L);let Te=new ue(new vt(.2,.1,.18,8),new Ye({color:se.gold,metalness:.7,roughness:.3}));Te.position.y=r.torch.y-.02,le.add(Te)}else if(r.torch.kind==="pylon"){let L=new ue(new vt(.08,.12,r.torch.y,8),new Ye({color:"#3b1d45",emissive:se.pink,emissiveIntensity:.8}));L.position.y=r.torch.y/2,le.add(L)}else{let L=new ue(new vt(.07,.09,.5,8),new Ye({color:"#efe3c0"}));L.position.y=r.torch.y-.25,le.add(L);let Te=new ue(new vt(.16,.2,.9,8),new Ye({color:"#1a100a"}));Te.position.y=r.torch.y-.95,le.add(Te)}let fe=bt(r.torch.col,r.torch.kind==="candle"?.9:1.6,.75),Be=bt("#fff2c0",r.torch.kind==="candle"?.35:.6,.9);fe.position.y=Be.position.y=r.torch.y+.22,le.add(fe,Be),o.add(le),C.push({g:le,outer:fe,inner:Be,x:ae,z:ce,seed:Math.random()*10})}let z=[];for(let j=0;j<6;j++){let xe=new Qn(r.torch.light,0,r.torch.dist,2);xe.position.set(0,-50,0),o.add(xe),z.push(xe)}let O=e.gateCells,B=new ke;if(O.length){let j=(O[0][0]+O[1][0]+1)/2*2,xe=(O[0][1]+O[1][1]+1)/2*2,ae=O[0][1]===O[1][1],ce=new Ye({color:"#15151c",emissive:se.char,emissiveIntensity:.35,metalness:.8,roughness:.3});for(let Be=-3;Be<=3;Be++){let L=new ue(new vt(.09,.09,3.2,8),ce);L.position.set(ae?Be*.58:0,1.6,ae?0:Be*.58),B.add(L)}let le=new ue(new Ct(ae?2*2:.3,.26,ae?.3:2*2),ce);le.position.y=3.1,B.add(le);let fe=le.clone();fe.position.y=.4,B.add(fe),B.position.set(j,7,xe),B.visible=!1,o.add(B)}JM(o,e,r,e.style),ZM(o,e,r,n);let k=jM(o,e.style),$=QM(o,e,e.style),W=7,Z=!1;function pe(){Z=!0,B.visible=!0,W=0}function Se(){Z=!1,W=7}let K=0;function re(j,xe,ae,ce){for(let le of C){let fe=.85+Math.sin(xe*13+le.seed)*.1+Math.sin(xe*29+le.seed*3)*.06;le.outer.scale.setScalar((r.torch.kind==="candle"?.9:1.6)*fe),le.inner.scale.setScalar((r.torch.kind==="candle"?.35:.6)*(2-fe))}if(K-=j,K<=0){K=.25;let le=C.map(fe=>({tr:fe,d:(fe.x-ae)**2+(fe.z-ce)**2})).sort((fe,Be)=>fe.d-Be.d).slice(0,z.length);z.forEach((fe,Be)=>{let L=le[Be];L&&L.d<30*30?(fe.userData.on=!0,fe.position.set(L.tr.x,r.torch.y+.3,L.tr.z),fe.userData.seed=L.tr.seed):fe.userData.on=!1})}for(let le of z)le.intensity=le.userData.on?r.torch.intensity*(.85+Math.sin(xe*11+(le.userData.seed||0))*.15):0;for(let le of c)le.rotation.y+=j*.02;B.visible&&(B.position.y+=(W-B.position.y)*Math.min(1,j*6),!Z&&B.position.y>6.5&&(B.visible=!1)),l.position.set(ae,0,ce),k.update(j,xe,ae,ce);for(let le of $)le.material.opacity=le.userData.base*(.75+Math.sin(xe*.7+le.userData.seed)*.25);u.target.position.set(ae,0,ce),u.position.set(ae+d.x*40,d.y*40,ce+d.z*40)}function me(){i.remove(o);for(let j of a)j.dispose&&j.dispose();i.fog=null}return{group:o,update:re,dispose:me,gate:{seal:pe,open:Se},wallH:v,style:e.style}}var qM={ramparts:{floor:["ramp_arch","ramp_pillar","ramp_brazier","ramp_arch","ramp_pillar","rubble_large","box_stacked","barrel_large","sword_shield_broken"],banners:["banner_patternA_red","banner_patternA_yellow","banner_shield_red"]},venus:{floor:["venus_pylon","venus_module","venus_node","venus_pylon","venus_module"],banners:[]},archive:{floor:["arch_stack","arch_candles","arch_press","arch_stack","arch_candles","shelf_small_candles","candle_triple","table_medium_decorated_A","trunk_medium_B"],banners:[]}};function KM(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function ZM(i,e,t,n){let s=qM[t.props];if(!s||!n||!n.props)return;let r=KM(e.key.length*977+e.rooms.length),o=(c,h)=>c+","+h,a=[...e.boxes,e.start].map(c=>[Math.floor(c.x/2),Math.floor(c.z/2)]),l=(c,h,u,d,f=.5,x=0)=>{let p=n.props[c];if(!p)return!1;let g=p.clone(!0);return g.scale.setScalar(f),g.position.set(h,x,u),g.rotation.y=d,g.traverse(m=>{m.isMesh&&(m.castShadow=!0,m.receiveShadow=!0)}),i.add(g),!0};for(let c of e.rooms){if(c.kind==="boss")continue;let h=c.rect,u=[];for(let p=h.x0;p<h.x1;p++)for(let g=h.z0;g<h.z1;g++){if(e.solidCell(p,g))continue;let m=[[1,0],[-1,0],[0,1],[0,-1]].find(([v,b])=>e.walls.has(o(p+v,g+b)));m&&(c.doors.some(v=>Math.abs(v.x-p)<3&&Math.abs(v.z-g)<3)||a.some(([v,b])=>Math.abs(v-p)<2&&Math.abs(b-g)<2)||u.push([p,g,m]))}for(let p=u.length-1;p>0;p--){let g=Math.floor(r()*(p+1));[u[p],u[g]]=[u[g],u[p]]}let d=0,f=[],x=3+Math.floor(r()*3);for(let[p,g,[m,v]]of u){if(d>=x)break;if(f.some(([S,T])=>Math.abs(S-p)<3&&Math.abs(T-g)<3))continue;let b=s.floor[Math.floor(r()*s.floor.length)],M=(p+.5)*2+m*.35,w=(g+.5)*2+v*.35;l(b,M,w,Math.atan2(-m,-v)+(r()-.5)*.6)&&(e.inner.add(o(p,g)),f.push([p,g]),d++)}if(s.banners.length){let p=0;for(let g of e.torches){let m=Math.floor(g.x/2),v=Math.floor(g.z/2);if(m<h.x0-1||m>h.x1||v<h.z0-1||v>h.z1||p++%2)continue;let b=g.dir==="S"?[0,1]:g.dir==="N"?[0,-1]:g.dir==="E"?[1,0]:[-1,0],M=[b[1],-b[0]];l(s.banners[p%s.banners.length],g.x+b[0]*1.02+M[0]*1,g.z+b[1]*1.02+M[1]*1,Math.atan2(b[0],b[1]),.42,.2)}}}}function $M(i){let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d");t.strokeStyle=i,t.lineWidth=6,t.shadowColor=i,t.shadowBlur=18,t.strokeRect(10,10,236,236),Pr(t,128,128,88,i,5),Pr(t,128,128,44,i,3);let n=new An(e);return n.colorSpace=pt,n}var Qp={stone:{wall:"large_sandstone_blocks_01",tint:"#f0dcc0",rune:"#ffc65a"},slab:{wall:"metal_plate",tint:"#b8a8d8",rune:"#ff7ad9"},stacks:{wall:"cobblestone_03",tint:"#e8d4b8",rune:"#b89aff"}};function JM(i,e,t,n){if(!e.plinths||!e.plinths.size)return;let s=Qp[n]||Qp.stone,r=new Ye({...Ir(s.wall),color:s.tint,roughness:1}),o=new Ye({...Ir(s.wall),color:s.tint,roughness:.9}),a=new Ye({color:se.gold,metalness:.75,roughness:.3,emissive:"#3a2a08",emissiveIntensity:.4}),l=new We({map:$M(s.rune),transparent:!0,opacity:.55,blending:ht,depthWrite:!1}),c=new Ct(2,1,2),h=new Ct(2+.06,.1,2+.06),u=new Tn(2*.9,2*.9);for(let[d,f]of e.plinths){let[x,p]=d.split(",").map(Number),g=(x+.5)*2,m=(p+.5)*2,v=new ue(c,[r,r,o,o,r,r]);v.scale.y=f,v.position.set(g,f/2,m),v.castShadow=v.receiveShadow=!0,i.add(v);let b=new ue(h,a);b.position.set(g,f-.05,m),i.add(b);let M=new ue(u,l);M.rotation.x=-Math.PI/2,M.position.set(g,f+.02,m),i.add(M)}}function jM(i,e){let s=new Float32Array(780),r=new Float32Array(260);for(let f=0;f<260;f++)s[f*3]=(Math.random()-.5)*16*2,s[f*3+1]=Math.random()*7,s[f*3+2]=(Math.random()-.5)*16*2,r[f]=Math.random()*6.28;let o=new lt;o.setAttribute("position",new et(s,3));let a=e==="slab"?"#ff9ae6":e==="stacks"?"#ffe2a8":"#ffaa55",l=new Bi({color:a,size:e==="stacks"?.07:.1,transparent:!0,opacity:.75,blending:ht,depthWrite:!1,map:bt(a,1).material.map}),c=new vi(o,l);c.frustumCulled=!1,i.add(c);let h=e==="stone"?.55:e==="slab"?.25:.08,u=0,d=0;return{update(f,x,p,g){let m=p-u,v=g-d;u=p,d=g;for(let b=0;b<260;b++){let M=s[b*3]-m,w=s[b*3+1]+h*f,S=s[b*3+2]-v;M+=Math.sin(x*.6+r[b])*.12*f,S+=Math.cos(x*.5+r[b])*.12*f,M>16?M-=2*16:M<-16&&(M+=2*16),S>16?S-=2*16:S<-16&&(S+=2*16),w>7&&(w-=7),s[b*3]=M,s[b*3+1]=w,s[b*3+2]=S}c.position.set(p,0,g),o.attributes.position.needsUpdate=!0}}}function QM(i,e,t){let n=document.createElement("canvas");n.width=64,n.height=256;let s=n.getContext("2d"),r=s.createLinearGradient(0,0,0,256);r.addColorStop(0,"rgba(255,255,255,0.9)"),r.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=r,s.fillRect(0,0,64,256);let o=s.createLinearGradient(0,0,64,0);o.addColorStop(0,"rgba(0,0,0,1)"),o.addColorStop(.5,"rgba(0,0,0,0)"),o.addColorStop(1,"rgba(0,0,0,1)"),s.globalCompositeOperation="destination-out",s.fillStyle=o,s.fillRect(0,0,64,256);let a=new An(n),l=t==="slab"?"#ffb2ec":t==="stacks"?"#b8a0ff":"#ffd9a0",c=[];for(let h of e.rooms){if(h.kind==="boss")continue;let u=h.center.x+(h.rect.x1-h.rect.x0)*.35,d=h.center.z-1;for(let f of[0,Math.PI/2]){let x=new ue(new Tn(3.2,11),new We({map:a,color:l,transparent:!0,opacity:.1,blending:ht,depthWrite:!1,side:mt}));x.position.set(u,4.8,d),x.rotation.set(0,f,-.28),x.userData={base:t==="stacks"?.14:.1,seed:Math.random()*6},i.add(x),c.push(x)}}return c}var ii=(i,e={})=>new Ye({color:i,roughness:.7,metalness:.05,...e});function Xn(i,e,t,n){return new ue(new Ct(i,e,t),n)}function ji(i,e,t,n,s=10){return new ue(new vt(i,e,t,s),n)}function sl(i,e,t=14,n=10){return new ue(new en(i,t,n),e)}function eb(){let i=document.createElement("canvas");i.width=256,i.height=128;let e=i.getContext("2d");e.fillStyle="rgba(76,224,224,.08)",e.fillRect(0,0,256,128),e.strokeStyle="rgba(200,255,255,.9)",e.lineWidth=2;for(let n=0;n<5;n++)for(let s=0;s<8;s++){let r=s*34+n%2*17,o=n*30+8;e.beginPath();for(let a=0;a<6;a++){let l=a*Math.PI/3+Math.PI/6,c=r+Math.cos(l)*15,h=o+Math.sin(l)*15;a?e.lineTo(c,h):e.moveTo(c,h)}e.closePath(),e.stroke()}let t=new An(i);return t.colorSpace=pt,t.wrapS=t.wrapT=un,t}function tm(i,e){let t=new ke;i.add(t);let n={skin:ii(e.skin),skinD:ii(e.skinD),robe:ii(e.robe),robeL:ii(e.robeL),robeD:ii(e.robeD),pant:ii(e.pant),hair:ii(e.hair,{roughness:.9}),gold:ii(e.wrapB,{metalness:.75,roughness:.3}),boot:ii("#0e0b14",{roughness:.6}),gem:new Ye({color:e.gem,emissive:e.gem,emissiveIntensity:1.2})},s=Object.values(n);t.add(Wn(.62));let r=new Qn(e.aura,5,7,2);r.position.y=1.9,t.add(r);let o=new ue(new an(.5,.78,40),new We({color:e.aura,transparent:!0,opacity:.55,blending:ht,depthWrite:!1,side:mt}));o.rotation.x=-Math.PI/2,o.position.y=.05,t.add(o);let a=new ke;t.add(a);let l=Xn(.5,.22,.3,n.pant);l.position.y=.98,a.add(l);let c=Xn(.54,.07,.34,n.gold);c.position.y=1.1,a.add(c);let h=Xn(.58,.6,.34,n.robe);h.position.y=1.42,a.add(h);let u=Xn(.3,.42,.04,n.gold);u.position.set(0,1.45,.18),a.add(u);let d=Xn(.62,.1,.38,n.robeL);d.position.y=1.72,a.add(d);for(let ae of[-1,1]){let ce=sl(.13,n.robeL);ce.position.set(ae*.34,1.66,0),a.add(ce)}let f=ji(.08,.09,.12,n.skinD);f.position.y=1.8,a.add(f);let x=new ke;x.position.y=1.98,a.add(x),x.add(sl(.21,n.skin,16,12));let p=new ue(new en(.235,16,8,0,Math.PI*2,0,Math.PI*.55),n.hair);if(p.position.y=.02,x.add(p),e.queen){let ae=ji(.06,.05,.55,n.hair);ae.position.set(0,-.2,-.2),ae.rotation.x=.35,x.add(ae);let ce=sl(.2,n.hair,12,8);ce.position.set(0,.16,-.06),ce.scale.set(1.2,.8,1.1),x.add(ce)}else{let ae=ji(.19,.24,.12,n.hair,12);ae.position.y=.17,x.add(ae)}let g=new ue(new jn(.215,.028,8,24),n.gold);g.rotation.x=Math.PI/2,g.position.y=.06,x.add(g);let m=new ue(new vr(.05),n.gem);m.position.set(0,.06,.22),x.add(m);for(let ae of[-1,1]){let ce=new ue(new en(.03,8,6),new We({color:e.accent}));ce.position.set(ae*.08,-.01,.19),x.add(ce)}function v(ae){let ce=new ke;ce.position.set(ae*.36,1.62,0);let le=ji(.085,.075,.36,n.robeL);le.position.y=-.18,ce.add(le);let fe=new ke;fe.position.y=-.36,ce.add(fe);let Be=ji(.07,.06,.34,n.skin);Be.position.y=-.17,fe.add(Be);let L=ji(.09,.09,.06,n.gold);L.position.y=-.04,fe.add(L);let Te=new ke;return Te.position.y=-.36,fe.add(Te),Te.add(sl(.075,n.skinD,10,8)),{g:ce,elbow:fe,hand:Te}}let b=v(1),M=v(-1);a.add(b.g,M.g);let w=new ke;w.rotation.x=Math.PI/2,b.hand.add(w),w.add(Xn(.11,.12,.42,ii("#141020",{metalness:.6,roughness:.35})));let S=Xn(.13,.14,.08,n.gold);S.position.z=.02,w.add(S);let T=new Ye({color:"#ffffff",emissive:"#C9A84C",emissiveIntensity:1.5}),I=new ue(new vt(.05,.06,.16,8),T);I.rotation.x=Math.PI/2,I.position.z=.27,w.add(I);let _=bt("#C9A84C",.5,.8);_.position.z=.3,w.add(_);let y=new We({color:e.aura,transparent:!0,opacity:.95,blending:ht,depthWrite:!1}),A=new ke;A.visible=!1,M.hand.add(A);let U=new ue(new Ct(.06,.06,2),new We({color:"#ffffff",transparent:!0,opacity:.95,blending:ht,depthWrite:!1}));U.position.z=1,A.add(U);let E=new ue(new Ct(.16,.12,2.1),y);E.position.z=1.05,A.add(E);let C=Xn(.08,.08,.26,n.gold);C.position.z=-.05,A.add(C);let z=new ue(new an(.5,ja,28,1,-Ki,Ki*2),new We({color:e.aura,transparent:!0,opacity:0,blending:ht,depthWrite:!1,side:mt}));z.rotation.x=-Math.PI/2,z.rotation.z=-Math.PI/2,z.position.y=1.05,t.add(z);let O=new We({map:eb(),color:e.accent,transparent:!0,opacity:0,blending:ht,depthWrite:!1,side:mt}),B=new ue(new vt(1.05,1.05,2,24,1,!0,-$i,$i*2),O);B.position.y=1.05,t.add(B);let k=bt(e.accent,2.6,0);k.position.set(0,1,.7),t.add(k);function $(ae){let ce=new ke;ce.position.set(ae*.15,.9,0);let le=ji(.11,.095,.42,n.pant);le.position.y=-.21,ce.add(le);let fe=new ke;fe.position.y=-.42,ce.add(fe);let Be=ji(.09,.08,.4,n.pant);Be.position.y=-.2,fe.add(Be);let L=Xn(.2,.14,.32,n.boot);L.position.set(0,-.45,.05),fe.add(L);let Te=Xn(.22,.04,.34,n.gold);return Te.position.set(0,-.39,.05),fe.add(Te),{g:ce,knee:fe}}let W=$(1),Z=$(-1);a.add(W.g,Z.g);let pe=null;if(!e.queen)pe=Xn(.5,.72,.07,n.robeD),pe.position.set(0,.62,-.19),a.add(pe);else{let ae=new ue(new vt(.3,.46,.4,14,1,!0),n.robeL);ae.position.y=.78,a.add(ae)}let Se={phase:0,bladeT:-1,bladeN:0,hurtT:0};function K(ae){T.emissive.set(ae),_.material.color.set(ae)}function re(ae){Se.bladeT=0,Se.bladeN=ae,A.visible=!0}function me(){Se.hurtT=.18}function j(ae,ce,le){t.position.set(le.x,0,le.z),t.rotation.y=Math.atan2(le.fx,le.fz),t.visible=le.alive&&!(le.invuln>0&&Math.floor(ce*14)%2===0);let fe=le.mv;Se.phase+=ae*(9+fe*4)*(fe>.05?1:0);let Be=Math.sin(Se.phase)*.8*fe,L=Math.abs(Math.sin(Se.phase))*.07*fe,Te=le.mvx*le.fx+le.mvz*le.fz,Q=le.mvx*le.fz-le.mvz*le.fx;a.position.y=L,a.rotation.x=le.dashing?.55:.16*Te*fe,a.rotation.z=-.14*Q*fe,W.g.rotation.x=le.dashing?-.9:Be,Z.g.rotation.x=le.dashing?.9:-Be,W.knee.rotation.x=Math.max(0,-Be)*1.2,Z.knee.rotation.x=Math.max(0,Be)*1.2,h.scale.y=1+Math.sin(ce*2.1)*.015*(1-fe);let Fe=le.firing||le.charge>.05||fe<.05;if(b.g.rotation.x=Fe?-Math.PI/2+.1:-Be*.9,b.g.rotation.z=Fe?-.12:0,b.elbow.rotation.x=Fe?0:-.5,Se.bladeT>=0){Se.bladeT+=ae/.22;let Ie=Math.min(1,Se.bladeT),Pe=Se.bladeN,D=Pe===2?-1.4:Pe===1?-Ki:Ki,R=Pe===2?-1.6:-D;M.g.rotation.x=-Math.PI/2+(Pe===2?Ie<.4?-.6*(1-Ie/.4):.35*(Ie-.4)/.6:0),M.g.rotation.y=Pe===2?0:D+(R-D)*(Ie<.5?2*Ie*Ie:1-2*(1-Ie)*(1-Ie)),M.g.rotation.z=0,M.elbow.rotation.x=0,z.material.opacity=.55*(1-Ie),z.scale.setScalar(Pe===2?1.25:1),Se.bladeT>=1.6&&(Se.bladeT=-1,A.visible=!1,z.material.opacity=0)}else le.ward?(M.g.rotation.x=-Math.PI/2+.3,M.g.rotation.y=.3,M.g.rotation.z=.2,M.elbow.rotation.x=-.6):(M.g.rotation.x=Be*.9,M.g.rotation.y=0,M.g.rotation.z=.08,M.elbow.rotation.x=-.5);let oe=le.ward?1:0;if(O.opacity+=(.7*oe-O.opacity)*Math.min(1,ae*14),k.material.opacity=O.opacity*.5,B.scale.setScalar(.8+.2*O.opacity/.7),O.map.offset.y=ce*.15,le.parryFlash>0?(O.color.set("#ffffff"),O.opacity=1):O.color.set(e.accent),o.material.opacity=.4+Math.sin(ce*3)*.12+(le.charge>0?le.charge*.4:0),o.scale.setScalar(1+Math.sin(ce*3)*.05+le.charge*.5),_.scale.setScalar(.5+le.charge*1.4+(le.firing?.25:0)),pe&&(pe.rotation.x=-.25*fe-Math.sin(Se.phase)*.15*fe),Se.hurtT>0){Se.hurtT-=ae;for(let Ie of s)Ie.emissive.set("#ff2b2b"),Ie.emissiveIntensity=Se.hurtT/.18*1.5}else for(let Ie of s)Ie!==n.gem&&(Ie.emissiveIntensity=0)}function xe(){i.remove(t)}return{group:t,update:j,setWeaponColor:K,playBlade:re,hurtFlash:me,dispose:xe,radius:vn}}function im(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new lt,c=0;for(let h=0;h<i.length;++h){let u=i[h],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(t){let h=0,u=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let x=0;x<f.count;++x)u.push(f.getX(x)+h);h+=i[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=nm(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let p=0;p<o[h].length;++p)f.push(o[h][p][d]);let x=nm(f);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(x)}}return l}function nm(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new et(o,t,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let u=l/t;for(let d=0,f=h.count;d<f;d++)for(let x=0;x<t;x++){let p=h.getComponent(d,x);a.setComponent(d+u,x,p)}}else o.set(h.array,l);l+=h.count*t}return s!==void 0&&(a.gpuType=s),a}function au(i,e){if(e===zf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===fo||e===Ba){let t=i.getIndex();if(t===null){let o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===fo)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var rl=class extends Si{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new pu(t)}),this.register(function(t){return new mu(t)}),this.register(function(t){return new Su(t)}),this.register(function(t){return new wu(t)}),this.register(function(t){return new Tu(t)}),this.register(function(t){return new xu(t)}),this.register(function(t){return new _u(t)}),this.register(function(t){return new yu(t)}),this.register(function(t){return new vu(t)}),this.register(function(t){return new fu(t)}),this.register(function(t){return new Mu(t)}),this.register(function(t){return new gu(t)}),this.register(function(t){return new Eu(t)}),this.register(function(t){return new bu(t)}),this.register(function(t){return new uu(t)}),this.register(function(t){return new Au(t)}),this.register(function(t){return new Ru(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=Xi.extractUrlBase(e);o=Xi.resolveURL(c,this.path)}else o=Xi.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new co(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===lm){try{o[tt.KHR_BINARY_GLTF]=new Cu(e)}catch(u){s&&s(u);return}r=JSON.parse(o[tt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Ou(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case tt.KHR_MATERIALS_UNLIT:o[u]=new du;break;case tt.KHR_DRACO_MESH_COMPRESSION:o[u]=new Iu(r,this.dracoLoader);break;case tt.KHR_TEXTURE_TRANSFORM:o[u]=new Pu;break;case tt.KHR_MESH_QUANTIZATION:o[u]=new Lu;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function tb(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}var tt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},uu=class{constructor(e){this.parser=e,this.name=tt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new be(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],tn);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Er(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Qn(h),c.distance=u;break;case"spot":c=new Ua(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,wi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}},du=class{constructor(){this.name=tt.KHR_MATERIALS_UNLIT}getMaterialType(){return We}extendParams(e,t,n){let s=[];e.color=new be(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],tn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,pt))}return Promise.all(s)}},fu=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},pu=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:_n}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new we(a,a)}return Promise.all(r)}},mu=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:_n}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},gu=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:_n}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},xu=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:_n}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new be(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],tn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,pt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},_u=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:_n}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},yu=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:_n}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new be().setRGB(a[0],a[1],a[2],tn),Promise.all(r)}},vu=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:_n}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Mu=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:_n}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new be().setRGB(a[0],a[1],a[2],tn),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,pt)),Promise.all(r)}},bu=class{constructor(e){this.parser=e,this.name=tt.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:_n}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},Eu=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:_n}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},Su=class{constructor(e){this.parser=e,this.name=tt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},wu=class{constructor(e){this.parser=e,this.name=tt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Tu=class{constructor(e){this.parser=e,this.name=tt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Au=class{constructor(e){this.name=tt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=s.byteOffset||0,c=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}},Ru=class{constructor(e){this.name=tt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==Cn.TRIANGLES&&c.mode!==Cn.TRIANGLE_STRIP&&c.mode!==Cn.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(let x of u){let p=new Ge,g=new N,m=new At,v=new N(1,1,1),b=new ki(x.geometry,x.material,d);for(let M=0;M<d;M++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,M),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,M),l.SCALE&&v.fromBufferAttribute(l.SCALE,M),b.setMatrixAt(M,p.compose(g,m,v));for(let M in l)if(M==="_COLOR_0"){let w=l[M];b.instanceColor=new Ms(w.array,w.itemSize,w.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&x.geometry.setAttribute(M,l[M]);Rt.prototype.copy.call(b,x),this.parser.assignFinalMaterial(b),f.push(b)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},lm="glTF",yo=12,sm={JSON:1313821514,BIN:5130562},Cu=class{constructor(e){this.name=tt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,yo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==lm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-yo,r=new DataView(e,yo),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===sm.JSON){let c=new Uint8Array(e,yo+o,a);this.content=n.decode(c)}else if(l===sm.BIN){let c=yo+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Iu=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=tt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let h in o){let u=Nu[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=Nu[h]||h.toLowerCase();if(o[h]!==void 0){let d=n.accessors[e.attributes[h]],f=Lr[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(let x in f.attributes){let p=f.attributes[x],g=l[x];g!==void 0&&(p.normalized=g)}u(f)},a,c,tn,d)})})}},Pu=class{constructor(){this.name=tt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Lu=class{constructor(){this.name=tt.KHR_MESH_QUANTIZATION}},ol=class extends Hi{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=s-t,u=(n-t)/h,d=u*u,f=d*u,x=e*c,p=x-c,g=-2*f+3*d,m=f-d,v=1-g,b=m-d+u;for(let M=0;M!==a;M++){let w=o[p+M+a],S=o[p+M+l]*h,T=o[x+M+a],I=o[x+M]*h;r[M]=v*w+b*S+g*T+m*I}return r}},nb=new At,Du=class extends ol{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return nb.fromArray(r).normalize().toArray(r),r}},Cn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Lr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},rm={9728:Qt,9729:hn,9984:wh,9985:jr,9986:js,9987:Sn},om={33071:mi,33648:no,10497:un},lu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Nu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Qi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},ib={CUBICSPLINE:void 0,LINEAR:dr,STEP:ur},cu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function sb(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Ye({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:$n})),i.DefaultMaterial}function Ts(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function wi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function rb(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;o.push(d)}if(s){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],d=c[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function ob(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function ab(i){let e,t=i.extensions&&i.extensions[tt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+hu(t.attributes):e=i.indices+":"+hu(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+hu(i.targets[n]);return e}function hu(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Uu(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function lb(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var cb=new Ge,Ou=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new tb,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new Mr(this.options.manager):this.textureLoader=new Oa(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new co(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return Ts(r,a,s),wi(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,h]of o.children.entries())r(h,a.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[tt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(Xi.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=lu[s.type],a=Lr[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new et(c,o,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=lu[s.type],c=Lr[s.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,x=s.normalized===!0,p,g;if(f&&f!==u){let m=Math.floor(d/f),v="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count,b=t.cache.get(v);b||(p=new c(a,m*f,s.count*f/h),b=new gr(p,f/h),t.cache.add(v,b)),g=new ys(b,l,d%f/h,x)}else a===null?p=new c(s.count*l):p=new c(a,d,s.count*l),g=new et(p,l,x);if(s.sparse!==void 0){let m=lu.SCALAR,v=Lr[s.sparse.indices.componentType],b=s.sparse.indices.byteOffset||0,M=s.sparse.values.byteOffset||0,w=new v(o[1],b,s.sparse.count*m),S=new c(o[2],M,s.sparse.count*l);a!==null&&(g=new et(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let T=0,I=w.length;T<I;T++){let _=w[T];if(g.setX(_,S[T*l]),l>=2&&g.setY(_,S[T*l+1]),l>=3&&g.setZ(_,S[T*l+2]),l>=4&&g.setW(_,S[T*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=x}return g})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return h.magFilter=rm[d.magFilter]||hn,h.minFilter=rm[d.minFilter]||Sn,h.wrapS=om[d.wrapS]||un,h.wrapT=om[d.wrapT]||un,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Qt&&h.minFilter!==hn,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let o=s.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;let d=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let x=d;t.isImageBitmapLoader===!0&&(x=function(p){let g=new Vt(p);g.needsUpdate=!0,d(g)}),t.load(Xi.resolveURL(u,r.path),x,void 0,f)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),wi(u,o),u.userData.mimeType=o.mimeType||lb(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[tt.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[tt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[tt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Bi,dn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new lo,dn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Ye}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},l=r.extensions||{},c=[];if(l[tt.KHR_MATERIALS_UNLIT]){let u=s[tt.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new be(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],tn),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,pt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=mt);let h=r.alphaMode||cu.OPAQUE;if(h===cu.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===cu.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==We&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new we(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==We&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==We){let u=r.emissiveFactor;a.emissive=new be().setRGB(u[0],u[1],u[2],tn)}return r.emissiveTexture!==void 0&&o!==We&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,pt)),Promise.all(c).then(function(){let u=new o(a);return r.name&&(u.name=r.name),wi(u,r),t.associations.set(u,{materials:e}),r.extensions&&Ts(s,u,r),u})}createUniqueName(e){let t=at.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[tt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return am(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],h=ab(c),u=s[h];if(u)o.push(u.promise);else{let d;c.extensions&&c.extensions[tt.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=am(new lt,c,t),s[h]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let h=o[l].material===void 0?sb(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,x=h.length;f<x;f++){let p=h[f],g=o[f],m,v=c[f];if(g.mode===Cn.TRIANGLES||g.mode===Cn.TRIANGLE_STRIP||g.mode===Cn.TRIANGLE_FAN||g.mode===void 0)m=r.isSkinnedMesh===!0?new xr(p,v):new ue(p,v),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),g.mode===Cn.TRIANGLE_STRIP?m.geometry=au(m.geometry,Ba):g.mode===Cn.TRIANGLE_FAN&&(m.geometry=au(m.geometry,fo));else if(g.mode===Cn.LINES)m=new Ta(p,v);else if(g.mode===Cn.LINE_STRIP)m=new yr(p,v);else if(g.mode===Cn.LINE_LOOP)m=new Aa(p,v);else if(g.mode===Cn.POINTS)m=new vi(p,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(m.geometry.morphAttributes).length>0&&ob(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),wi(m,r),g.extensions&&Ts(s,m,g),t.assignFinalMaterial(m),u.push(m)}for(let f=0,x=u.length;f<x;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&Ts(s,u[0],r),u[0];let d=new ke;r.extensions&&Ts(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,x=u.length;f<x;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new zt(Bf.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Fi(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),wi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],l=[];for(let c=0,h=o.length;c<h;c++){let u=o[c];if(u){a.push(u);let d=new Ge;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new _r(a,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){let f=s.channels[u],x=s.samplers[f.sampler],p=f.target,g=p.node,m=s.parameters!==void 0?s.parameters[x.input]:x.input,v=s.parameters!==void 0?s.parameters[x.output]:x.output;p.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",v)),c.push(x),h.push(p))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],x=u[2],p=u[3],g=u[4],m=[];for(let v=0,b=d.length;v<b;v++){let M=d[v],w=f[v],S=x[v],T=p[v],I=g[v];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();let _=n._createAnimationTracks(M,w,S,T,I);if(_)for(let y=0;y<_.length;y++)m.push(_[y])}return new Wi(r,void 0,m)})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,cb)});for(let f=0,x=u.length;f<x;f++)h.add(u[f]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new vs:c.length>1?h=new ke:c.length===1?h=c[0]:h=new Rt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),wi(h,r),r.extensions&&Ts(n,h,r),r.matrix!==void 0){let u=new Ge;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new ke;n.name&&(r.name=s.createUniqueName(n.name)),wi(r,n),n.extensions&&Ts(t,r,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);let c=h=>{let u=new Map;for(let[d,f]of s.associations)(d instanceof dn||d instanceof Vt)&&u.set(d,f);return h.traverse(d=>{let f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,l=[];Qi[r.path]===Qi.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(Qi[r.path]){case Qi.weights:c=Mi;break;case Qi.rotation:c=bi;break;case Qi.position:case Qi.scale:c=Ei;break;default:switch(n.itemSize){case 1:c=Mi;break;case 2:case 3:default:c=Ei;break}break}let h=s.interpolation!==void 0?ib[s.interpolation]:dr,u=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){let x=new c(l[d]+"."+Qi[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),o.push(x)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Uu(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof bi?Du:ol;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function hb(i,e,t){let n=e.attributes,s=new Yt;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new N(l[0],l[1],l[2]),new N(c[0],c[1],c[2])),a.normalized){let h=Uu(Lr[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new N,l=new N;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,x=d.max;if(f!==void 0&&x!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(x[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(x[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(x[2]))),d.normalized){let p=Uu(Lr[d.componentType]);l.multiplyScalar(p)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new on;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function am(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(let o in n){let a=Nu[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return Qe.workingColorSpace!==tn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Qe.workingColorSpace}" not supported.`),wi(i,e),hb(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?rb(i,e.targets,t):i})}function zu(i){let e=new Map,t=new Map,n=i.clone();return cm(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function cm(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)cm(i.children[n],e.children[n],t)}var ll=i=>at.sanitizeNodeName(i),dm={hips:"root",spine:"hips",chest:"spine",head:"chest","upperarm.l":"chest","lowerarm.l":"upperarm.l","wrist.l":"lowerarm.l","hand.l":"wrist.l","handslot.l":"hand.l","upperarm.r":"chest","lowerarm.r":"upperarm.r","wrist.r":"lowerarm.r","hand.r":"wrist.r","handslot.r":"hand.r","upperleg.l":"hips","lowerleg.l":"upperleg.l","foot.l":"lowerleg.l","toes.l":"foot.l","upperleg.r":"hips","lowerleg.r":"upperleg.r","foot.r":"lowerleg.r","toes.r":"foot.r"},As=["root",...Object.keys(dm)],fm={hipsY:.406,armLen:.576};async function pm(i,e){let t=await i.loadAsync(e),n={};t.scene.traverse(r=>{for(let o of As)r.name===ll(o)&&(n[o]={q:r.quaternion.clone(),p:r.position.clone()})});for(let r of As)if(!n[r])throw new Error("anim library is missing bone "+r);let s={};for(let r of t.animations)s[r.name]=r;return{rest:n,clips:s}}function ub(i){let e=new lt;for(let t of["position","normal","uv"]){let n=i.getAttribute(t);if(!n)continue;let s=new Float32Array(n.count*n.itemSize);for(let r=0;r<n.count;r++)for(let o=0;o<n.itemSize;o++)s[r*n.itemSize+o]=n.getComponent(r,o);e.setAttribute(t,new et(s,n.itemSize))}i.index&&e.setIndex(Array.from(i.index.array));for(let t of i.groups)e.addGroup(t.start,t.count,t.materialIndex);return e}function db(i,e,t){i.updateMatrixWorld(!0);let n=[],s=[];if(i.traverse(l=>{if(!l.isMesh)return;let c=ub(l.geometry);c.applyMatrix4(l.matrixWorld),c.attributes.normal||c.computeVertexNormals(),n.push(c),s.push(l.material)}),!n.length)throw new Error("model has no meshes");let r=n.length===1?n[0]:im(n,!0);r.rotateY(e),r.computeBoundingBox();let o=r.boundingBox,a=t/(o.max.y-o.min.y);return r.translate(-(o.min.x+o.max.x)/2,-o.min.y,-(o.min.z+o.max.z)/2),r.scale(a,a,a),r.computeBoundingBox(),{geo:r,mats:s.length===1?s[0]:s}}function fb(i,e,t){let n=i.array,s=i.count,r={x:e*(t.shoulder??.105),y:e*.815},o=l=>{let c=null,h=-1;for(let u=0;u<s;u++){let d=n[u*3]*l,f=n[u*3+1];f>e*.36&&f<e*.64&&d>h&&(h=d,c=[n[u*3],f,n[u*3+2]])}return c},a=l=>{let c=0,h=0;for(let u=0;u<s;u++){let d=n[u*3];n[u*3+1]<e*.07&&d*l>e*.01&&(c+=d,h++)}return h?c/h:l*e*.07};return{sh:r,tipL:o(1),tipR:o(-1),ankleL:a(1),ankleR:a(-1),hipsY:e*.5,spineY:e*.6,chestY:e*.7,headY:e*.855,legX:e*(t.hipWidth??.085),legTopY:e*.49}}function pb(i,e,t){let n={};for(let o of As){let a=new vs;a.name=ll(o),a.quaternion.copy(i.rest[o].q),n[o]=a}for(let[o,a]of Object.entries(dm))n[a].add(n[o]);n.hips.position.set(0,e.hipsY,0),n.spine.position.set(0,e.spineY-e.hipsY,0),n.chest.position.set(0,e.chestY-e.spineY,0),n.head.position.set(0,e.headY-e.chestY,0);let s=new N(0,1,0),r=(o,a,l,c)=>{let h=s.clone().applyQuaternion(a),u=new N().subVectors(c,l).normalize();o.quaternion.copy(new At().setFromUnitVectors(h,u).multiply(a))};for(let[o,a,l,c]of[["l",1,e.tipL,e.ankleL],["r",-1,e.tipR,e.ankleR]]){let h=new N(a*e.sh.x,e.sh.y,0),u=l?new N(...l):h.clone().add(new N(a*.2*t,-.38*t,0)),d=h.distanceTo(u);n["upperarm."+o].position.set(a*e.sh.x,e.sh.y-e.chestY,0),r(n["upperarm."+o],i.rest["upperarm."+o].q,h,u),n["lowerarm."+o].position.set(0,d*.42,0),n["wrist."+o].position.set(0,d*.38,0),n["hand."+o].position.set(0,d*.08,0),n["handslot."+o].position.copy(i.rest["handslot."+o].p).multiplyScalar(d/fm.armLen);let f=new N(a*e.legX,e.legTopY,0),x=new N(c,t*.045,0),p=f.distanceTo(x);n["upperleg."+o].position.set(a*e.legX,e.legTopY-e.hipsY,0),r(n["upperleg."+o],i.rest["upperleg."+o].q,f,x),n["lowerleg."+o].position.set(0,p*.5,0),n["foot."+o].position.set(0,p*.5,0),n["toes."+o].position.set(0,t*.075,0)}return n}var mb=["hips","spine","chest","head","upperarm.l","lowerarm.l","wrist.l","hand.l","upperarm.r","lowerarm.r","wrist.r","hand.r","upperleg.l","lowerleg.l","foot.l","upperleg.r","lowerleg.r","foot.r"],hm={hips:"spine",spine:"chest",chest:"head","upperarm.l":"lowerarm.l","lowerarm.l":"wrist.l","wrist.l":"hand.l","upperarm.r":"lowerarm.r","lowerarm.r":"wrist.r","wrist.r":"hand.r","upperleg.l":"lowerleg.l","lowerleg.l":"foot.l","foot.l":"toes.l","upperleg.r":"lowerleg.r","lowerleg.r":"foot.r","foot.r":"toes.r"},al=new N,um=new N,gb=new N;function xb(i,e,t){al.subVectors(t,e),um.subVectors(i,e);let n=Math.max(0,Math.min(1,um.dot(al)/Math.max(al.lengthSq(),1e-9)));return i.distanceTo(gb.copy(e).addScaledVector(al,n))}function _b(i,e,t,n){let s={};As.forEach((f,x)=>{s[f]=x});let r=mb.map(f=>{let x=e[f].getWorldPosition(new N),p;if(hm[f])p=e[hm[f]].getWorldPosition(new N);else if(f==="head")p=x.clone().add(new N(0,n*.15,0));else{let m=e["wrist."+f.slice(-1)].getWorldPosition(new N);p=x.clone().add(x.clone().sub(m).normalize().multiplyScalar(n*.1))}let g=f.endsWith(".l")?1:f.endsWith(".r")?-1:0;return{n:f,i:s[f],a:x,b:p,side:g,leg:f.includes("leg")||f.startsWith("foot"),arm:f.includes("arm")||f.startsWith("wrist")||f.startsWith("hand")}}),o=i.attributes.position,a=o.count,l=new Uint16Array(a*4),c=new Float32Array(a*4),h=new N,u=n*.02,d=[];for(let f=0;f<a;f++){h.fromBufferAttribute(o,f),d.length=0;for(let p of r){if(p.side&&h.x*p.side<-n*.02||p.leg&&h.y>t.hipsY+n*.02||p.arm&&(h.y<n*.3||Math.abs(h.x)<n*.07)||p.n==="head"&&h.y<n*.78)continue;let g=xb(h,p.a,p.b);p.arm&&g>n*.075||p.leg&&g>n*.1||d.push([p.i,1/Math.pow(g+u,4)])}d.sort((p,g)=>g[1]-p[1]);let x=0;for(let p=0;p<4&&p<d.length;p++)x+=d[p][1];for(let p=0;p<4;p++)l[f*4+p]=d[p]?d[p][0]:0,c[f*4+p]=d[p]?d[p][1]/(x||1):0}i.setAttribute("skinIndex",new pr(l,4)),i.setAttribute("skinWeight",new nt(c,4))}var Dr=["spine","chest","head","upperarm.l","lowerarm.l","wrist.l","hand.l","handslot.l","upperarm.r","lowerarm.r","wrist.r","hand.r","handslot.r"],vo=As.filter(i=>!Dr.includes(i));function yb(i,e,t=null){let n=new Set((t||As).map(ll)),s=[];for(let r of i.tracks){let{nodeName:o,propertyName:a}=at.parseTrackName(r.name);if(n.has(o)){if(a==="quaternion")s.push(r.clone());else if(a==="position"&&o===ll("hips")){let l=r.clone(),c=e/fm.hipsY;for(let h=0;h<l.values.length;h++)l.values[h]*=c;s.push(l)}}}return new Wi(i.name+(t===Dr?":upper":t===vo?":lower":""),i.duration,s)}function Fu(i,e,t={}){let n=t.height??1.8,{geo:s,mats:r}=db(i,t.yaw??-Math.PI/2,n),o=fb(s.attributes.position,n,t.build||{}),a=pb(e,o,n),l=new xr(s,r);l.add(a.root),l.updateMatrixWorld(!0),_b(s,a,o,n),l.bind(new _r(As.map(x=>a[x]))),s.boundingSphere=new on(new N(0,n*.5,0),n*.9);let c={},h=(x,p=null)=>{let g=x+"|"+(p===Dr?"u":p===vo?"l":"f");if(c[g])return c[g];let m=e.clips[x];return m?c[g]=yb(m,o.hipsY,p):null},u=new bs(l),d={};return{mesh:l,bones:a,mixer:u,action:x=>{if(d[x])return d[x];let p=h(x);return p?d[x]=u.clipAction(p):null},clip:h,landmarks:o,height:n}}function mm(i,{length:e=1,flip:t=!1,grip:n=.12,twist:s=0}={}){i.updateMatrixWorld(!0);let r=[],o=new N;i.traverse(g=>{if(!g.isMesh)return;let m=g.geometry.attributes.position;for(let v=0;v<m.count;v+=3)r.push(new N(m.getX(v),m.getY(v),m.getZ(v)).applyMatrix4(g.matrixWorld))});let a=r.reduce((g,m)=>g.add(m),new N).multiplyScalar(1/r.length),l=[[0,0,0],[0,0,0],[0,0,0]];for(let g of r){let m=[g.x-a.x,g.y-a.y,g.z-a.z];for(let v=0;v<3;v++)for(let b=0;b<3;b++)l[v][b]+=m[v]*m[b]}let c=new N(1,1,1).normalize();for(let g=0;g<40;g++)c=new N(l[0][0]*c.x+l[0][1]*c.y+l[0][2]*c.z,l[1][0]*c.x+l[1][1]*c.y+l[1][2]*c.z,l[2][0]*c.x+l[2][1]*c.y+l[2][2]*c.z).normalize();t&&c.negate();let h=new At().setFromUnitVectors(c,new N(0,1,0)),u=1/0,d=-1/0;for(let g of r){let m=g.clone().sub(a).applyQuaternion(h).y;u=Math.min(u,m),d=Math.max(d,m)}let f=e/(d-u);i.position.sub(a);let x=new ke;x.add(i),x.quaternion.copy(h),x.scale.setScalar(f),x.position.set(0,-u*f-n*e,0);let p=new ke;return p.add(x),p.rotation.y=s,p}var gm="./assets/",Mo={melvinci:{height:1.86,idle:"Idle",idleDrawn:"2H_Melee_Idle",run:"Running_A",walk:"Walking_A",blade:["2H_Melee_Attack_Slice","1H_Melee_Attack_Slice_Diagonal","2H_Melee_Attack_Stab","2H_Melee_Attack_Chop"],weapons:[{file:"melvinci_blade",slot:"handslot.r",length:1.35,grip:.1,flip:!0,glow:"#4CE0E0",drawOn:"melee",sheath:{bone:"chest",pos:[.2,.42,-.3],rot:[.2,0,Math.PI-.62]}},{file:"melvinci_cannon",slot:"handslot.l",length:.72,grip:.45}],castHand:"handslot.l"},kimaya:{height:1.74,idle:"Idle",idleDrawn:"Idle",run:"Running_B",walk:"Walking_B",blade:["1H_Melee_Attack_Slice_Horizontal","1H_Melee_Attack_Slice_Diagonal","1H_Melee_Attack_Stab","1H_Melee_Attack_Chop"],weapons:[{file:"kimaya_saber",slot:"handslot.r",length:1,grip:.14,flip:!0,glow:"#ff7ad9",drawOn:"melee",sheath:{bone:"hips",pos:[.24,.02,.02],rot:[.15,0,Math.PI-.3]}},{file:"kimaya_scepter",slot:"handslot.l",length:1.25,grip:.38,glow:"#3ce08f",drawOn:"cast",sheath:{bone:"chest",pos:[.03,-.23,-.3],rot:[-.15,0,-.36]}}],castHand:"wrist.l",bracers:["wrist.l","wrist.r"]},bizzle:{height:1.98,idle:"Idle",idleDrawn:"2H_Melee_Idle",run:"Running_A",walk:"Walking_A",blade:["2H_Melee_Attack_Slice","1H_Melee_Attack_Slice_Diagonal","2H_Melee_Attack_Stab","2H_Melee_Attack_Chop"],weapons:[{file:"bizzle_blade",slot:"handslot.r",length:1.3,grip:.12,flip:!1,glow:"#ff2b2b",drawOn:"melee",sheath:{bone:"chest",pos:[.2,.44,-.46],rot:[.2,0,Math.PI-.62]}},{file:"bizzle_cannon",slot:"handslot.r",length:1.05,grip:.35,trail:!1,drawOn:"gun",handRot:[Math.PI/2,0,0],sheath:{bone:"hips",pos:[.3,.05,.06],rot:[.1,0,Math.PI-.2]}}],castHand:"handslot.l",gun:{file:"bizzle_cannon",aim:"2H_Ranged_Aiming"}},mahal:{height:1.7,idle:"Idle",idleDrawn:"Idle",run:"Running_B",walk:"Walking_B",blade:["1H_Melee_Attack_Slice_Horizontal","1H_Melee_Attack_Slice_Diagonal","1H_Melee_Attack_Stab","1H_Melee_Attack_Chop"],weapons:[{file:"mahal_sword",slot:"handslot.r",length:1.05,grip:.16,flip:!1,glow:"#b56cff",drawOn:"melee",sheath:{bone:"hips",pos:[.24,.26,.02],rot:[.15,0,Math.PI-.3]}},{file:"mahal_shield",slot:"lowerarm.l",length:.8,grip:.5,twist:0,trail:!1,drawOn:"melee",sheath:{bone:"chest",pos:[0,.12,-.3],rot:[0,Math.PI,0]}}],castHand:"wrist.l",bracers:["wrist.l","wrist.r"]}},xm=[...new Set([...Object.values(Mo).flatMap(i=>i.weapons.map(e=>e.file)),"kimaya_chakram"])],_m={grunt:{file:"grunt",rig:!0,height:2,move:"Running_A",attack:"Unarmed_Melee_Attack_Punch_A",idle:"Unarmed_Idle"},shooter:{file:"shooter",rig:!0,height:2.2,move:"Walking_A",attack:"1H_Ranged_Shoot",idle:"1H_Ranged_Aiming"},brute:{file:"brute",rig:!0,height:2.8,move:"Walking_B",attack:"2H_Melee_Attack_Chop",idle:"2H_Melee_Idle"},flyer:{file:"flyer",rig:!1,size:1.5}},vb=new Set(["ramp_arch","ramp_pillar","ramp_brazier","venus_pylon","venus_module","venus_node","arch_stack","arch_candles","arch_press"]),Mb=-Math.PI/2,bb=["barrel_large","barrel_small_stack","box_stacked","keg_decorated","trunk_large_A","trunk_medium_B","banner_patternA_red","banner_patternA_yellow","banner_shield_red","table_medium_decorated_A","candle_triple","shelf_small_candles","rubble_large","sword_shield_broken","coin_stack_large","ramp_arch","ramp_pillar","ramp_brazier","venus_pylon","venus_module","venus_node","arch_stack","arch_candles","arch_press"],ym={engine:{file:"boss_engine",size:4.6,y:0},censor:{file:"boss_censor",size:5.2,y:-2.6},redactor:{file:"boss_redactor",size:3.8,y:-.2}};async function Cm(i=()=>{}){let e=new rl,t={heroes:{},foes:{},bosses:{},weapons:{},props:{},lib:null,missing:[]},n=async(a,l)=>{try{return await e.loadAsync(gm+a)}catch{return t.missing.push(l),null}},s=0,r=1+xm.length+Object.keys(Mo).length+Object.keys(_m).length+Object.keys(ym).length,o=()=>i(++s/r);t.lib=await pm(e,gm+"anims/kaykit_rig.glb").catch(()=>(t.missing.push("anim library"),null)),o(),await Promise.all(xm.map(a=>n(`models/weapons/${a}.glb`,a).then(l=>{l&&(t.weapons[a]=l.scene),o()})));for(let a of Object.keys(Mo)){let l=await n(`models/heroes/${a}.glb`,a);if(o(),!l||!t.lib)continue;let c=Mo[a],h=Fu(l.scene,t.lib,{height:c.height});for(let u of c.weapons){let d=t.weapons[u.file];if(!d)continue;let f=new ke;f.name=`wpn_${u.file}`,f.add(mm(d.clone(!0),u)),h.bones[u.slot].add(f)}t.heroes[a]=h}for(let[a,l]of Object.entries(_m)){let c=await n(`models/foes/${l.file}.glb`,l.file);o(),c&&(l.rig&&t.lib?t.foes[a]={rig:Fu(c.scene,t.lib,{height:l.height}),spec:l}:t.foes[a]={scene:vm(c.scene,l.size),spec:l})}await Promise.all(bb.map(a=>n(`props/${a}.glb`,a).then(l=>{l&&(vb.has(a)&&(l.scene.rotation.y=Mb),l.scene.name=`prop_${a}`,t.props[a]=l.scene)})));for(let[a,l]of Object.entries(ym)){let c=await n(`models/foes/${l.file}.glb`,l.file);o(),c&&(t.bosses[a]=vm(c.scene,l.size,l.y))}return t}function vm(i,e,t=0){let n=new ke;n.add(i),n.rotation.y=-Math.PI/2,n.updateMatrixWorld(!0);let s=new Yt().setFromObject(n).getSize(new N),r=e/Math.max(s.x,s.y,s.z);n.scale.setScalar(r),n.updateMatrixWorld(!0);let o=new Yt().setFromObject(n),a=o.getCenter(new N);n.position.set(-a.x,-o.min.y+t,-a.z);let l=new ke;return l.add(n),l}function Eb(i){if(!i.emissive||!i.color)return;let e=Gp(i.color.r,i.color.g,i.color.b);e<=0||(i.emissive.copy(i.color),i.emissiveIntensity=Math.max(i.emissiveIntensity??0,e),i.map&&!i.emissiveMap&&(i.emissiveMap=i.map))}function cl(i){let e=[];return i.traverse(t=>{if(!t.isMesh)return;let n=s=>{let r=s.clone();return Eb(r),r.userData.baseEmissive=r.emissive?r.emissive.getHex():0,r.userData.baseEI=r.emissiveIntensity??0,e.push(r),r};t.material=Array.isArray(t.material)?t.material.map(n):n(t.material),t.castShadow=!0}),e}function es(i,e,t="#ffffff"){for(let n of i)n.emissive&&(e>0?(n.emissive.set(t),n.emissiveIntensity=1.4*e):(n.emissive.setHex(n.userData.baseEmissive),n.emissiveIntensity=n.userData.baseEI))}function Im(i,e){let t=new Map,n=(h,u)=>{let d=h+(u===Dr?"|u":u===vo?"|l":"|f");if(t.has(d))return t.get(d);let f=e.clip(h,u);if(!f)return null;let x=i.clipAction(f);return t.set(d,x),x},s=null,r=null,o=null,a=0,l="",c=(h,u,d,f=1)=>(h===u||(h&&h.fadeOut(d),u&&(u.setLoop(Nh,1/0),u.reset().setEffectiveTimeScale(f).setEffectiveWeight(1).fadeIn(d).play())),u);return{loop(h,u=null,d=1){if(o)return;let f=n(h,u?vo:null),x=u?n(u,Dr):null;s=c(s,f,.18,d),s&&s.setEffectiveTimeScale(d),r=c(r,x,.12)},oneShot(h,u=1,d=!1){let f=n(h,null);return f?(s&&s.fadeOut(.08),r&&r.fadeOut(.08),s=null,r=null,o&&o!==f&&o.fadeOut(.06),f.setLoop(Dh,1),f.clampWhenFinished=d,o=f,l=h,f.reset().setEffectiveTimeScale(u).setEffectiveWeight(1).fadeIn(.06).play(),a=f.getClip().duration/u,a):0},update(h){o&&(a-=h,a<=0&&!o.clampWhenFinished&&(o.fadeOut(.15),o=null)),i.update(h)},get busy(){return!!o},get shotName(){return o?l:""}}}function Sb(){let i=document.createElement("canvas");i.width=256,i.height=128;let e=i.getContext("2d");e.strokeStyle="rgba(220,255,255,.95)",e.lineWidth=2;for(let n=0;n<5;n++)for(let s=0;s<8;s++){let r=s*34+n%2*17,o=n*30+8;e.beginPath();for(let a=0;a<6;a++){let l=a*Math.PI/3+Math.PI/6;e.lineTo(r+Math.cos(l)*15,o+Math.sin(l)*15)}e.closePath(),e.stroke()}let t=new An(i);return t.colorSpace=pt,t.wrapS=t.wrapT=un,t}function wb(i,e){let t=.2,n=22,s=new Float32Array(n*2*3),r=new Float32Array(n*2*3),o=[];for(let x=0;x<n-1;x++){let p=x*2;o.push(p,p+1,p+2,p+1,p+3,p+2)}let a=new lt;a.setAttribute("position",new et(s,3)),a.setAttribute("color",new et(r,3)),a.setIndex(o);let l=new We({vertexColors:!0,transparent:!0,blending:ht,depthWrite:!1,side:mt}),c=new ue(a,l);c.frustumCulled=!1,c.visible=!1,i.add(c);let h=new be(e),u=new be("#ffffff"),d=new be,f=[];return{add(x,p){f.unshift({b:x.clone(),t:p.clone(),age:0}),f.length>n&&f.pop()},style(x,p=.2){h.set(x),t=p},update(x){for(let p of f)p.age+=x;for(;f.length&&f[f.length-1].age>t;)f.pop();if(c.visible=f.length>1,!!c.visible){for(let p=0;p<n;p++){let g=f[Math.min(p,f.length-1)],m=p<f.length?Math.max(0,1-g.age/t)*(1-p/n):0;s.set([g.b.x,g.b.y,g.b.z],p*6),s.set([g.t.x,g.t.y,g.t.z],p*6+3),d.copy(h).lerp(u,.3*m),r.set([h.r*m*.35,h.g*m*.35,h.b*m*.35],p*6),r.set([d.r*m,d.g*m,d.b*m],p*6+3)}a.attributes.position.needsUpdate=!0,a.attributes.color.needsUpdate=!0}},dispose(){i.remove(c),a.dispose(),l.dispose()}}}var si=i=>at.sanitizeNodeName(i),Mm=new N,hl=new N,bm=new N,Em=new N,Sm=new N,ul=new At,wm=new At,ku=new At,Tm=new At,dl=new At,Tb=new At;function Pm(i,e){i.getWorldQuaternion(ku),ku.premultiply(e),i.parent.getWorldQuaternion(Tm),i.quaternion.copy(Tm.invert().multiply(ku)),i.updateWorldMatrix(!1,!0)}function Bu(i,e,t,n,s,r,o){!e||!t||o<=.001||(e.getWorldPosition(Mm),t.getWorldPosition(hl),bm.subVectors(hl,Mm).normalize(),i.getWorldQuaternion(dl),Em.set(n,s,r).normalize().applyQuaternion(dl),wm.setFromUnitVectors(bm,Em),ul.slerpQuaternions(Tb,wm,o),Pm(e,ul))}function Am(i,e,t){!e||Math.abs(t)<1e-4||(i.getWorldQuaternion(dl),Sm.set(1,0,0).applyQuaternion(dl),ul.setFromAxisAngle(Sm,t),Pm(e,ul))}var Rm={fire:{lean:.32,upper:[-.22,-.2,1],lower:[-.62,-.05,1],wrist:[-.35,0,1]},rest:{lean:.04,upper:[.26,-1,.06],lower:[.1,-1,.3],wrist:[.05,-1,.3]}};function Lm(i,e,t){let n=e&&e.heroes[t];if(!n)return null;let s=Ot[t],r=Mo[t],o=new ke;i.add(o);let a=new ke;o.add(a);let l=zu(n.mesh);a.add(l);let c=cl(l),h={};l.traverse(L=>{L.isBone&&(h[L.name]=L)});let u=Im(new bs(l),n);o.add(Wn(.7));let d=new Qn(s.aura,6,8,2);d.position.y=2.1,o.add(d);let f=new ue(new an(.55,.85,48),new We({color:s.aura,transparent:!0,opacity:.5,blending:ht,depthWrite:!1,side:mt}));f.rotation.x=-Math.PI/2,f.position.y=.05,o.add(f);let x=h[si(r.castHand)],p=bt("#C9A84C",.6,.85);x&&x.add(p);let g=new ue(new an(.5,ja,32,1,-Ki,Ki*2),new We({color:s.aura,transparent:!0,opacity:0,blending:ht,depthWrite:!1,side:mt}));g.rotation.x=-Math.PI/2,g.rotation.z=-Math.PI/2,g.position.y=1.1,o.add(g);let m=new We({map:Sb(),color:s.accent,transparent:!0,opacity:0,blending:ht,depthWrite:!1,side:mt}),v=new ue(new vt(1.15,1.15,2.3,28,1,!0,-$i,$i*2),m);v.position.y=1.15,o.add(v);let b=(r.bracers||[]).map(L=>{let Te=h[si(L)];if(!Te)return null;let Q=new Ye({color:"#C9A84C",metalness:.8,roughness:.25,emissive:s.aura,emissiveIntensity:.6}),Fe=new ue(new jn(.075,.022,8,24),Q);Fe.rotation.x=Math.PI/2,Te.add(Fe);let oe=bt(s.aura,.35,.6);return Te.add(oe),{ringMat:Q,glow:oe}}).filter(Boolean),M=r.weapons.filter(L=>L.sheath).map(L=>{let Te=l.getObjectByName(`wpn_${L.file}`);if(!Te)return null;let Q=h[si(L.slot)],Fe=h[si(L.sheath.bone)],oe=bt(L.glow||s.aura,.1,0);return Q.add(oe),{w:L,holder:Te,hand:Q,rest:Fe,spark:oe,drawn:!1,igniteT:0,sparkT:0,trail:wb(i,L.glow||s.aura),baseL:new N(0,L.length*.28,0),tipL:new N(0,L.length*(.97-L.grip),0)}}).filter(Boolean);function w(L){L.rest.add(L.holder),L.holder.position.set(...L.w.sheath.pos),L.holder.rotation.set(...L.w.sheath.rot),L.holder.scale.setScalar(1),L.drawn=!1,L.sparkT=.22}function S(L){L.drawn||(L.hand.add(L.holder),L.holder.position.set(0,0,0),L.holder.rotation.set(...L.w.handRot||[0,0,0]),L.drawn=!0,L.igniteT=.14,L.sparkT=.25)}for(let L of M)w(L);let T=0,I=r.bracers?["l","r"].map(L=>({up:h[si("upperarm."+L)],lo:h[si("lowerarm."+L)],wr:h[si("wrist."+L)],hd:h[si("hand."+L)]})).filter(L=>L.up&&L.lo&&L.wr&&L.hd):[],_=h[si("chest")],y=h[si("spine")],A=0,U=0,E=0,C=I.length?[y,_,...I.flatMap(L=>[L.up,L.lo,L.wr])].filter(Boolean):[],z=C.map(L=>L.quaternion.clone()),O=!1,B=!1,k=new N;function $(){if(I.length){C.forEach((L,Te)=>z[Te].copy(L.quaternion)),B=!0,o.updateWorldMatrix(!0,!0);for(let[L,Te]of[[Rm.rest,U],[Rm.fire,A]])if(!(Te<=.001)){Am(o,y,L.lean*.45*Te),Am(o,_,L.lean*.55*Te);for(let Q of I){Q.up.getWorldPosition(k),o.worldToLocal(k);let Fe=Math.sign(k.x)||1;Bu(o,Q.up,Q.lo,L.upper[0]*Fe,L.upper[1],L.upper[2],Te),Bu(o,Q.lo,Q.wr,L.lower[0]*Fe,L.lower[1],L.lower[2],Te),Bu(o,Q.wr,Q.hd,L.wrist[0]*Fe,L.wrist[1],L.wrist[2],Te)}}}}let W=(L="melee")=>{for(let Te of M)(Te.w.drawOn||"melee")===L?S(Te):Te.drawn&&w(Te);T=L==="cast"?1.2:1.7},Z=0,pe=0,Se=!0,K=0,re=!1,me=0,j=()=>r.gun&&M.find(L=>L.w.file===r.gun.file),xe=()=>{let L=j();return!!(L&&L.drawn)},ae=new N,ce=r.height*.55,le=new N,fe=new N;function Be(L,Te,Q){let Fe=Q.y||0;o.position.set(Q.x,Fe,Q.z),o.rotation.y=Math.atan2(Q.fx,Q.fz);{let oe=Q.flip>0?Q.flip*Q.flip*(3-2*Q.flip):0,Ie=Math.PI*2*oe;a.rotation.x=Ie,a.position.set(0,ce-ce*Math.cos(Ie),-ce*Math.sin(Ie))}if(o.visible=!(Q.alive&&Q.invuln>0&&Math.floor(Te*14)%2===0),!Q.alive&&Se&&u.oneShot("Death_A",1,!0),Se=Q.alive,Q.alive){if(Q.dashing&&!Q.longDash&&K<=0){let X=Q.mvx*Q.fx+Q.mvz*Q.fz,te=Q.mvx*Q.fz-Q.mvz*Q.fx,ne=Math.abs(X)>=Math.abs(te)?X>=0?"Dodge_Forward":"Dodge_Backward":te>0?"Dodge_Left":"Dodge_Right";K=u.oneShot(ne,2.6)}K>0&&(K-=L),Q.air&&!re&&!Q.dashing&&u.oneShot("Jump_Start",2.4),!Q.air&&re&&u.oneShot("Jump_Land",2.8),re=!!Q.air;let oe=(Q.firing||Q.charge>.05)&&me<=0;r.gun&&oe&&!xe()&&W("gun");let Ie=Q.ward?"Blocking":oe&&r.gun?r.gun.aim:oe&&!I.length?"Spellcasting":null,D=M.some(X=>X.drawn)?r.idleDrawn:r.idle,R=1;if(Q.air)D="Jump_Idle";else{let X=Q.mvx*Q.fx+Q.mvz*Q.fz,te=Q.mvx*Q.fz-Q.mvz*Q.fx,ne=Yp(Q.speed??Q.mv*$a,X,-te,O);O=ne.running,ne.clip&&(D=ne.clip==="run"?r.run:ne.clip==="walk"?r.walk||"Walking_A":ne.clip==="back"?"Walking_Backwards":ne.clip==="strafeLeft"?"Running_Strafe_Left":"Running_Strafe_Right",R=ne.timeScale)}u.loop(D,Ie,R)}if(B&&(C.forEach((oe,Ie)=>oe.quaternion.copy(z[Ie])),B=!1),u.update(L),I.length){let oe=Q.alive&&(Q.firing||Q.charge>.05||E>0)&&me<=0&&!Q.ward,Ie=Q.alive&&!oe&&!Q.air&&!(Q.mv>.1)&&!u.busy&&!Q.ward;E>0&&(E-=L),A+=((oe?1:0)-A)*Math.min(1,L*16),U+=((Ie?1:0)-U)*Math.min(1,L*6),$()}if(T>0&&(T-=L,T<=0))if(u.busy)T=.15;else for(let oe of M)oe.drawn&&w(oe);for(let oe of M){if(oe.igniteT>0){oe.igniteT-=L;let Ie=1-Math.max(0,oe.igniteT)/.14;oe.holder.scale.set(1,.15+.85*Ie,1)}oe.sparkT>0?(oe.sparkT-=L,oe.spark.material.opacity=Math.max(0,oe.sparkT/.25),oe.spark.scale.setScalar(.4+(1-oe.sparkT/.25)*1.6)):oe.spark.material.opacity=0}m.opacity+=((Q.ward?.75:0)-m.opacity)*Math.min(1,L*14),m.map.offset.y=Te*.15,m.color.set(Q.parryFlash>0?"#ffffff":s.accent),g.material.opacity=0,me>0&&(me-=L);for(let oe of M)me>0&&oe.drawn&&oe.w.drawOn!=="cast"&&oe.w.trail!==!1&&(oe.holder.updateWorldMatrix(!0,!1),oe.trail.add(oe.holder.localToWorld(le.copy(oe.baseL)),oe.holder.localToWorld(fe.copy(oe.tipL)))),oe.trail.update(L);f.material.opacity=(Q.air?.15:.35)+Math.sin(Te*3)*.1+Q.charge*.25,f.scale.setScalar(1+Q.charge*.35),p.scale.setScalar(.5+Q.charge*.9+(Q.firing?.2:0));for(let oe of b){let Ie=Q.firing||Q.charge>.05?1:0;oe.ringMat.emissiveIntensity+=(.6+Ie*2.4+Q.charge*2-oe.ringMat.emissiveIntensity)*Math.min(1,L*12),oe.glow.scale.setScalar(.3+Ie*.35+Q.charge*.6)}d.intensity=5+Q.charge*4,pe>0&&(pe-=L,es(c,Math.max(0,pe/.2),"#ff2b2b"),pe<=0&&es(c,0))}return{group:o,update:Be,dispose(){i.remove(o);for(let L of M)L.trail.dispose()},setWeaponColor(L){p.material.color.set(L)},playBlade(L,Te=2.3,Q=!0,Fe=null){if(Q&&W("melee"),Fe)for(let Ie of M)Ie.w.trail!==!1&&Ie.trail.style(Fe.col,Fe.trailLife||.2);let oe=u.oneShot(r.blade[L%r.blade.length],Te);me=Math.min(.55,oe)},playOnce(L,Te=1){return/Melee/.test(L)?(W("melee"),me=.5):/Spellcast/.test(L)&&W("cast"),u.oneShot(L,Te)},hurtFlash(){pe=.2,u.busy||u.oneShot("Hit_A",1.8)},castPoint(L=new N){return I.length===2?(I[0].wr.getWorldPosition(L),I[1].wr.getWorldPosition(hl),L.add(hl).multiplyScalar(.5)):x?x.getWorldPosition(L):L.set(o.position.x,1.2,o.position.z)},firesFromHands:I.length===2,firesFromGun:!!r.gun,get flipAngle(){return a.rotation.x},muzzlePoint(L=new N){let Te=j();return Te?(Te.drawn||W("gun"),Te.holder.updateWorldMatrix(!0,!1),Te.holder.localToWorld(L.copy(ae.set(0,Te.w.length*(1-Te.w.grip),0)))):L.set(o.position.x,1.2,o.position.z)},brace(){E=.18},get bladeDrawn(){return M.some(L=>L.drawn)},radius:.5,isModel:!0}}function Dm(i,e){let t=i&&i.foes[e];if(!t)return null;let n=new ke;if(n.add(Wn(e==="brute"?1.1:.7)),t.rig){let s=zu(t.rig.mesh);n.add(s);let r=Im(new bs(s),t.rig);r.loop(t.spec.idle),n.userData={mats:cl(s),drv:r,spec:t.spec,model:!0}}else{let s=t.scene.clone(!0);n.add(s),n.userData={mats:cl(s),spec:t.spec,model:!0,body:s}}return n}function Nm(i,e,t){let n=i&&i.bosses[e.key];if(!n)return null;e.mesh.traverse(r=>{r.isMesh&&(r.material.isMeshStandardMaterial||r.geometry&&r.geometry.type==="SphereGeometry")&&(r.visible=!1)});let s=n.clone(!0);return(t||e.mesh).add(s),{inst:s,mats:cl(s)}}var ts={root:"#ff2b2b",sacral:"#ff8a2b",solar:"#ffd23c",heart:"#3ce08f",throat:"#3cb8ff",third:"#6b5bff",crown:"#b56cff"},Um=["root","sacral","solar","heart","throat","third","crown"],Nr={max:100,step:25,kill:8,parry:12,bladeHit:3,trickle:2.5},Om="MAX MELANIN MAGIC BLAST",Ab={melvinci:[{id:"quake",name:"ROOT QUAKE",chakra:"root"},{id:"beam",name:"SOLAR MELANIN BEAM",chakra:"solar"},{id:"blink",name:"THIRD-EYE STEP",chakra:"third"},{id:"nova",name:"CROWN NOVA",chakra:"crown",ult:!0}],kimaya:[{id:"storm",name:"CHAKRAM STORM",chakra:"throat"},{id:"sonic",name:"SACRAL SONIC",chakra:"sacral"},{id:"lotus",name:"HEART LOTUS",chakra:"heart"},{id:"starfall",name:"ANCESTRAL STARFALL",chakra:"crown",ult:!0}],bizzle:[{id:"quake",name:"RALLY STRIPE SLAM",chakra:"root"},{id:"beam",name:"JADE CORE PULSE",chakra:"heart",color:"#2ee6a8"},{id:"blink",name:"BLACK BUMBLE BEE BLITZ",chakra:"solar"},{id:"nova",name:"DESTROYER OF INJUSTICES",chakra:"root",ult:!0,cols:["#ff2b2b","#2ee6a8","#ffd23c","#ffffff"]}],mahal:[{id:"sonic",name:"THE POWER OF BREATH",chakra:"throat"},{id:"storm",name:"MEDIC DRONE SWARM",chakra:"crown",model:null},{id:"lotus",name:"MAJESTIC HEAL",chakra:"heart"},{id:"starfall",name:"COSMIC HEALING RAIN",chakra:"crown",ult:!0,cols:["#fff6c8","#b56cff","#e8c25a","#3ce08f"]}]};function fl(i){return Math.max(0,Math.min(4,Math.floor(i/Nr.step+1e-9)))}function Rb(i){let e=fl(i);return{level:e,meter:e?i-e*Nr.step:i}}function Cb(i,e,t=1){return Math.min(Nr.max,i+(Nr[e]||0)*t)}var zm=i=>i>=4?"MAX":i?"LV"+i:"\u2014";function Fm(i,e,t){let n=Ab[t],s=[],r=0,o=0,a=-1,l=Ib(),c=(v,b,M)=>e.foes.list.filter(w=>w.alive&&Math.hypot(w.x-v,w.z-b)<M+w.r&&Math.abs(w.y-(e.H.y||0))<3.4);function h(v,b,M,w,S=10,T=0){let I=0;for(let y of c(v,b,M)){let A=y.x-v,U=y.z-b,E=Math.hypot(A,U)||1;T&&(y.stunT=Math.max(y.stunT||0,T)),e.foes.damage(y,w,!0,A/E,U/E,S),I++}let _=e.boss;return _&&_.alive&&_.awake&&Math.hypot(_.x-v,_.z-b)<M+_.r&&(_.damage(_.hit({x:v,z:b,y:1})?w*1.2:w*.5,!0),I++),I}let u=v=>ts[v],d=v=>v.color||ts[v.chakra],f=(v,b)=>{e.hero.playOnce&&e.hero.playOnce(v,b)};function x(v,b,M){e.fx.ring(v,b,M,3,.35),e.fx.spawn(v,1,b,M,18,{spd:5,up:3,size:.55}),h(v,b,2.6,3,10)}let p={quake(v,b){f("2H_Melee_Attack_Chop",2.2),s.push({t:.22,run:()=>{let M=d(b);e.fx.ring(v.x,v.z,M,6.5,.55),e.fx.ring(v.x,v.z,"#ffffff",3.5,.3),e.fx.spawn(v.x,.3,v.z,M,40,{spd:9,up:5,size:.6});for(let w=0;w<10;w++){let S=w/10*Math.PI*2;e.fx.spawn(v.x+Math.cos(S)*3,.2,v.z+Math.sin(S)*3,"#8a5a3a",4,{spd:3,up:6,size:.5})}h(v.x,v.z,5.5,4,18),e.shake(10),e.audio.sfx.slam()}})},beam(v,b){f("Spellcast_Long",1.1);let M=d(b),w=17,S=new ue(new vt(.16,.16,w,10,1,!0),new We({color:"#fff6c8",transparent:!0,opacity:.95,blending:ht,depthWrite:!1})),T=new ue(new vt(.55,.55,w,14,1,!0),new We({color:M,transparent:!0,opacity:.45,blending:ht,depthWrite:!1})),I=new ke;S.position.y=w/2,T.position.y=w/2,I.add(S,T),I.rotation.x=Math.PI/2;let _=new ke;_.add(I),i.add(_);let y=bt(M,2.2,.9);i.add(y);let A=0;e.audio.sfx.beamFire(),s.push({t:1.25,every:U=>{if(_.position.set(v.x+v.fx*.6,v.y+1.25,v.z+v.fz*.6),_.rotation.y=Math.atan2(v.fx,v.fz),y.position.copy(_.position),T.scale.x=T.scale.z=.85+Math.random()*.3,A-=U,A<=0){A=.08;for(let E=1;E<w;E+=1.2){let C=_.position.x+v.fx*E,z=_.position.z+v.fz*E;if(e.level.solidCell(Math.floor(C/2),Math.floor(z/2),v.y+.8))break;h(C,z,.9,.9,3)}e.fx.spawn(_.position.x+v.fx*(2+Math.random()*10),v.y+1.25,_.position.z+v.fz*(2+Math.random()*10),M,3,{spd:2,up:1.5,size:.45}),e.shake(2)}},run:()=>{i.remove(_),i.remove(y)}})},blink(v,b){let M=d(b);x(v.x,v.z,M);let w=v.x,S=v.z;for(let T=0;T<14;T++){let I=Ar(e.level,w,S,vn,v.fx*.5,v.fz*.5,v.y);if(I.hit)break;w=I.x,S=I.z}v.x=w,v.z=S,v.invuln=Math.max(v.invuln,.45),f("Dodge_Forward",3),s.push({t:.12,run:()=>x(v.x,v.z,M)}),e.audio.sfx.dash()},storm(v,b){let M=d(b);f("Spellcast_Raise",1.8);let w=b.model===void 0?"kimaya_chakram":b.model,S=[0,1,2].map(()=>{let _=w&&e.assets&&e.assets.weapons[w],y=new ke;if(_){let A=_.clone(!0),U=new Yt().setFromObject(A),E=U.getSize(new N),C=.9/Math.max(E.x,E.y,E.z);A.scale.setScalar(C),A.position.copy(U.getCenter(new N).multiplyScalar(-C)),y.add(A)}return y.add(bt(M,1.8,.7)),i.add(y),y}),T=0,I=0;s.push({t:3.4,every:_=>{I+=_*7,T-=_,S.forEach((y,A)=>{let U=I+A*Math.PI*2/3,E=2.7;if(y.position.set(v.x+Math.cos(U)*E,v.y+1.1,v.z+Math.sin(U)*E),y.rotation.y+=_*20,T<=0){h(y.position.x,y.position.z,.9,1.3,6);for(let C of e.combat.ebullets)C.alive&&Math.hypot(C.x-y.position.x,C.z-y.position.z)<1&&(C.alive=!1,C.mesh.visible=!1)}Math.random()<_*20&&e.fx.spawn(y.position.x,1.1,y.position.z,M,1,{spd:1,up:.5,size:.4,life:.3})}),T<=0&&(T=.18)},run:()=>S.forEach(_=>i.remove(_))}),e.audio.sfx.charged()},lotus(v,b){let M=d(b);f("Spellcast_Raise",1.4),v.lives<Ja?(v.lives++,e.hud.flash(`${b.name} \u2014 A LIFE RESTORED`,M)):e.hud.flash(b.name,M),v.shield=Zi,v.wardBroken=0,v.invuln=Math.max(v.invuln,1);for(let w=0;w<3;w++)e.fx.ring(v.x,v.z,w?"#ffffff":M,3+w*1.5,.5+w*.15);for(let w=0;w<8;w++){let S=w/8*Math.PI*2;e.fx.spawn(v.x+Math.cos(S)*1.2,.2,v.z+Math.sin(S)*1.2,M,6,{spd:1,up:7,size:.55,grav:2})}h(v.x,v.z,4,3,14),e.audio.sfx.page()},sonic(v,b){let M=d(b);f("Spellcast_Shoot",2);let w=.62,S=9;for(let I=1;I<=S;I+=1.5)for(let _=-2;_<=2;_++){let y=Math.atan2(v.fz,v.fx)+_*w/2;e.fx.spawn(v.x+Math.cos(y)*I,1,v.z+Math.sin(y)*I,M,2,{spd:2,up:1,size:.5,life:.4})}for(let I of e.foes.list){if(!I.alive)continue;let _=I.x-v.x,y=I.z-v.z,A=Math.hypot(_,y);A>S||A<.01||(_*v.fx+y*v.fz)/A>Math.cos(w)&&(I.stunT=2.2,e.foes.damage(I,3,!0,_/A,y/A,16))}let T=e.boss;if(T&&T.alive&&T.awake){let I=T.x-v.x,_=T.z-v.z,y=Math.hypot(I,_)||1;y<S+T.r&&(I*v.fx+_*v.fz)/y>Math.cos(w)&&(T.damage(4,!0),T.stun=Math.max(T.stun||0,.8))}e.fx.ring(v.x+v.fx*2,v.z+v.fz*2,M,5,.4),e.shake(6),e.audio.sfx.beamTell()},nova(v,b){g(v,"Spellcast_Raise",b.cols||Um.map(M=>ts[M]),10,12,b.name,!1)},starfall(v,b){g(v,"Spellcast_Long",b.cols||["#fff6c8",ts.crown,ts.throat,"#ffd76a"],7,9,b.name,!0)}};function g(v,b,M,w,S,T,I){f(b,.9),e.hud.flash(`${Om} \xB7 ${T}`,M[M.length-1]),e.hud.screenFlash&&e.hud.screenFlash(M[0]),e.shake(12),e.audio.sfx.bossWake(),v.invuln=Math.max(v.invuln,1.6);let _=[],y=e.boss;y&&y.alive&&y.awake&&Math.hypot(y.x-v.x,y.z-v.z)<22&&_.push({boss:y});for(let U of e.foes.list.filter(E=>E.alive).sort((E,C)=>Math.hypot(E.x-v.x,E.z-v.z)-Math.hypot(C.x-v.x,C.z-v.z)).slice(0,12))Math.hypot(U.x-v.x,U.z-v.z)<18&&_.push({e:U});let A=Math.max(7,_.length);for(let U=0;U<A;U++){let E=M[U%M.length],C=bt(E,1.6,1);C.add(bt("#ffffff",.4,1)),i.add(C);let z=_.length?_[U%_.length]:null,O=U/A*Math.PI*2,B=.5+U*(I?.1:.05),k=0;s.push({t:B+.55,every:$=>{k+=$;let W=z?z.boss?z.boss.x:z.e.x:v.x+Math.cos(O)*7,Z=z?z.boss?z.boss.z:z.e.z:v.z+Math.sin(O)*7;if(k<B)I?C.position.set(W+Math.sin(k*9+U)*.3,16,Z):C.position.set(v.x+Math.cos(O+k*3)*1.6,2.2+k,v.z+Math.sin(O+k*3)*1.6);else{let pe=Math.min(1,(k-B)/.5),Se=I?W:v.x+Math.cos(O)*1.6,K=I?16:2.2+B,re=I?Z:v.z+Math.sin(O)*1.6;C.position.set(Se+(W-Se)*pe,K+(.8-K)*pe*pe,re+(Z-re)*pe)}Math.random()<$*30&&e.fx.spawn(C.position.x,C.position.y,C.position.z,E,1,{spd:.5,up:0,size:.5,life:.35,grav:0})},run:()=>{i.remove(C);let $=C.position.x,W=C.position.z;e.fx.ring($,W,E,4,.45),e.fx.spawn($,.8,W,E,24,{spd:7,up:5,size:.6}),z&&z.boss&&z.boss.alive&&z.boss.damage(S,!0),h($,W,2.4,w,16),e.shake(5),e.audio.sfx.crate()}})}}function m(v,b,M){if(o=Math.max(0,o-v),b.alive&&(r=Math.min(Nr.max,r+Nr.trickle*v)),M("magic")&&b.alive&&o<=0){let{level:S,meter:T}=Rb(r);if(!S)e.audio.beep(160,.08,"square",.06);else{let I=n[S-1];r=T,o=.45,I.ult||e.hud.flash(`${zm(S)} \xB7 ${I.name}`,d(I)),p[I.id](b,I)}}for(let S=s.length-1;S>=0;S--){let T=s[S];T.t-=v,T.every&&T.every(v),T.t<=0&&(s.splice(S,1),T.run&&T.run())}let w=fl(r);w>a&&a>=0&&e.audio.beep(520+w*140,.1,"sine",.05,900+w*180),a=w,Pb(l,n,r)}return{update:m,addMeter(v,b=1){r=Cb(r,v,b)},get meter(){return r},set meter(v){r=v},get level(){return fl(r)},kit:n,dispose(){for(let v of s)v.run&&v.run();s.length=0,l.root.remove()}}}function Ib(){let i=document.createElement("div");i.className="magicbar";let e=document.createElement("b");e.className="mlv";let t=document.createElement("div");t.className="mtrack";let n=document.createElement("i");t.append(n);for(let r=1;r<4;r++){let o=document.createElement("u");o.style.left=r*25+"%",t.append(o)}let s=document.createElement("small");return s.className="mname",i.append(e,t,s),(document.getElementById("hud")||document.body).appendChild(i),n.style.background=`linear-gradient(90deg, ${Um.map(r=>ts[r]).join(",")})`,{root:i,badge:e,fill:n,name:s,btn:document.getElementById("tMagic"),last:""}}function Pb(i,e,t){let n=fl(t),s=n?e[n-1]:null,r=Math.round(t);i.fill.style.width=r+"%";let o=n+"|"+r;o!==i.last&&(i.last=o,i.root.classList.toggle("max",n>=4),i.root.style.setProperty("--c",s?ts[s.chakra]:"#8a7fa8"),i.badge.textContent=zm(n),i.name.textContent=n>=4?`${Om} \xB7 F`:s?`${s.name} \xB7 F`:"MAGIC CHARGING",i.btn&&(i.btn.style.setProperty("--pct",r*3.6+"deg"),i.btn.style.setProperty("--c",s?ts[s.chakra]:"#8a7fa8"),i.btn.classList.toggle("max",n>=4),i.btn.classList.toggle("ready",n>0),i.btn.dataset.lv=n>=4?"MAX":n?"LV"+n:""))}var Bm=[{id:"01",file:"01_i_refuse.mp3",title:"I Refuse"},{id:"02",file:"02_world_wide_wake_up.mp3",title:"World Wide Wake Up"},{id:"03",file:"03_it_is_what_it_is.mp3",title:"It Is What It Is"},{id:"04",file:"04_they_don_t.mp3",title:"They Don't"},{id:"05",file:"05_scfl_10_2.mp3",title:"SCFL 10-2"},{id:"06",file:"06_supa_groovy_plugged_in.mp3",title:"Supa Groovy Plugged In"},{id:"07",file:"07_soulful_plugged_in.mp3",title:"Soulful Plugged In"},{id:"08",file:"08_i_am_affirmation.mp3",title:"I Am Affirmation"},{id:"09",file:"09_the_lion_rises.mp3",title:"The Lion Rises"},{id:"10",file:"10_battle_of_kirina.mp3",title:"Battle of Kirina"},{id:"11",file:"11_nine_witches_of_mali.mp3",title:"Nine Witches of Mali"},{id:"12",file:"12_buffalo_woman_rising.mp3",title:"Buffalo Woman Rising"},{id:"13",file:"13_crippled_prince.mp3",title:"Crippled Prince"},{id:"14",file:"14_nana_triban.mp3",title:"Nana Triban"},{id:"15",file:"15_kurukan_fuga.mp3",title:"Kurukan Fuga"},{id:"16",file:"16_light_as_a_feather.mp3",title:"Light as a Feather"},{id:"17",file:"17_truth_is_the_feather.mp3",title:"Truth Is the Feather"},{id:"18",file:"18_kind_hands.mp3",title:"Kind Hands"},{id:"19",file:"19_my_heart_at_home.mp3",title:"My Heart at Home"},{id:"20",file:"20_balance_of_maat.mp3",title:"Balance of Maat"}],km={menu:["02"],ramparts:["01","05","04","03","06"],venus:["06","07","08","16","17","18"],archive:["09","11","12","13","14","15"],boss:["10"],win:["19","20"]},Hm=new Set(["menu","boss"]),Lb="https://quantummelaninmedia.com/assets/audio/";function Db(i){let e=km[i]||km.menu;return Hm.has(i)?e.slice():[...e,...Bm.map(t=>t.id).filter(t=>!e.includes(t))]}function Vm({base:i="./assets/music/",volume:e=.55}={}){let t=new Audio;t.preload="auto";let n=[],s=0,r=null,o=!1,a=!1,l=!1,c=null,h=!1,u=document.createElement("div");u.id="nowPlaying",u.className="hidden";let d=document.createElement("b");d.textContent="\u266A";let f=document.createElement("span"),x=document.createElement("small");x.textContent="N skip \xB7 M music on/off",u.append(d,f,x),document.body.appendChild(u);let p=b=>Bm.find(M=>M.id===b),g=()=>o?0:a?e*.35:e;function m(b,M,w){clearInterval(c);let S=t.volume,T=performance.now();c=setInterval(()=>{let _=Math.min(1,(performance.now()-T)/M);t.volume=Math.max(0,Math.min(1,S+(b-S)*_)),_>=1&&(clearInterval(c),w&&w())},30)}function v(b){s=(b+n.length)%n.length;let M=p(n[s]);if(!M)return;t.src=(h?Lb:i)+M.file,t.volume=0,f.textContent=M.title.toUpperCase(),u.classList.remove("hidden"),u.classList.remove("flash"),u.offsetWidth,u.classList.add("flash");let w=t.play();w&&w.catch&&w.catch(()=>{}),m(g(),900)}return t.addEventListener("ended",()=>{Hm.has(r)&&n.length===1?(t.currentTime=0,t.play().catch(()=>{})):v(s+1)}),t.addEventListener("error",()=>{h||(h=!0,v(s))}),{play(b){l=!0,b!==r&&(r=b,n=Db(b),t.src&&!t.paused?m(0,500,()=>v(0)):v(0))},next(){l&&n.length&&m(0,300,()=>v(s+1))},setMuted(b){o=b,m(g(),200)},setVolume(b){e=Math.max(0,Math.min(1,b)),m(g(),120)},duck(b){a=b,m(g(),300)},get moment(){return r},get title(){let b=p(n[s]);return b?b.title:""},get usingRemote(){return h},el:t}}var Nb=()=>new Ye({color:"#1b1b24",roughness:.55,metalness:.35}),Ub=()=>new Ye({color:se.char,emissive:se.char,emissiveIntensity:.9}),Hu=()=>new We({color:se.hotred});function fn(i,e,t,n){return new ue(new Ct(i,e,t),n)}function Ob(i){let e=new ke,t=Nb(),n=Ub(),s=[t,n];if(e.add(Wn(.55)),i==="grunt"){let r=fn(.7,.8,.5,t);r.position.y=.95,e.add(r);let o=fn(.5,.06,.04,n);o.position.set(0,1.05,.27),e.add(o);let a=fn(.44,.36,.4,t);a.position.y=1.55,e.add(a);let l=fn(.34,.07,.04,Hu());l.position.set(0,1.56,.21),e.add(l);for(let c of[-1,1]){let h=fn(.18,.62,.18,t);h.position.set(c*.5,.95,.1),h.rotation.x=-.5,e.add(h);let u=fn(.26,.2,.3,n);u.position.set(c*.5,.62,.35),e.add(u);let d=fn(.22,.5,.26,t);d.position.set(c*.18,.28,0),e.add(d)}}else if(i==="shooter"){let r=fn(.56,1,.44,t);r.position.y=1.05,e.add(r);let o=fn(.5,.6,.24,t);o.position.set(0,1.2,-.3),e.add(o);let a=fn(.08,.5,.08,n);a.position.set(0,1.2,-.44),e.add(a);let l=fn(.36,.34,.36,t);l.position.y=1.72,e.add(l);let c=new ue(new vt(.11,.13,.16,10),Hu());c.rotation.x=Math.PI/2,c.position.set(0,1.72,.22),e.add(c);let h=fn(.14,.14,.8,t);h.position.set(.32,1.15,.35),e.add(h);let u=fn(.1,.1,.1,n);u.position.set(.32,1.15,.78),e.add(u);for(let d of[-1,1]){let f=fn(.18,.55,.22,t);f.position.set(d*.15,.28,0),e.add(f)}}else{let r=new ue(new vt(.46,.4,.18,14),t);e.add(r);let o=new ue(new jn(.5,.05,6,18),n);o.rotation.x=Math.PI/2,e.add(o);let a=new ue(new en(.1,8,6),Hu());a.position.set(0,.02,.44),e.add(a);let l=bt(se.cyan,.9,.7);l.position.y=-.2,e.add(l),e.userData.disc=r}return e.userData.mats=s,e}function Gm(i,e){let t=[],n=[];function s(d,f,x){let p=_p[d],g=Dm(e.assets,d)||Ob(d);i.add(g);let m={type:d,x:f,z:x,y:d==="flyer"?p.hover:0,hp:p.hp,max:p.hp,r:p.r,cfg:p,alive:!0,aggro:!1,mesh:g,vx:0,vz:0,kx:0,kz:0,knock:0,shootT:1+Math.random()*(p.shootCd||1),diveT:2+Math.random()*2,dive:0,dx:0,dz:0,anim:Math.random()*6,hurtT:0,fx:0,fz:1,orbit:Math.random()*6.28,strafe:Math.random()<.5?1:-1};return t.push(m),m}function r(d,f,x,p=0,g=0,m=6){d.alive&&(f*=e.comboHit?e.comboHit():1,d.cfg.armor&&!(d.brokenT>0)&&(d.chain=e.t-(d.lastHitT??-9)<sp?(d.chain||0)+1:1,d.lastHitT=e.t,d.chain>=d.cfg.guard?(d.brokenT=rp,d.stunT=Math.max(d.stunT||0,1.2),d.chain=0,e.hud.flash("GUARD BREAK","#ffd76a"),e.fx.ring(d.x,d.z,"#ffd76a",2.6,.35),e.fx.spawn(d.x,d.y+1.4,d.z,"#ffd76a",16,{spd:5,up:3,size:.45}),e.audio.sfx.shatter(),e.hitstop(.08)):(f*=1-d.cfg.armor,e.fx.spawn(d.x,d.y+1.2,d.z,"#c8c8d8",3,{spd:3,up:1.5,size:.3,life:.25}))),d.hp-=f,d.hurtT=.12,d.kx=p,d.kz=g,d.knock=m,d.hp<=0?o(d,x):e.audio.sfx.foeHit())}function o(d,f){d.alive=!1;let x=d.mesh.userData;x.drv?(x.drv.oneShot("Death_A",1.5,!0),n.push({e:d,t:1.6})):i.remove(d.mesh),e.fx.spawn(d.x,d.y+.9,d.z,se.char,14,{spd:5,up:4}),e.fx.spawn(d.x,d.y+.9,d.z,"#ffffff",5,{spd:3,size:.35}),e.fx.ring(d.x,d.z,se.char,2.2,.35),e.audio.sfx.foeDie(),e.onKill(d,f)}function a(d){l(d);let f=e.H,x=e.level;for(let p of t){if(!p.alive)continue;p.anim+=d,p.brokenT>0&&(p.brokenT-=d);let g=f.x-p.x,m=f.z-p.z,v=Math.hypot(g,m)||.001,b=g/v,M=m/v;!p.aggro&&v<p.cfg.aggro&&f.alive&&(p.aggro=!0);let w=0,S=0;if(p.stunT>0)p.stunT-=d,Math.random()<d*12&&e.fx.spawn(p.x,p.y+2.1,p.z,"#ffd76a",1,{spd:1.5,up:.5,size:.35,life:.4,grav:0});else if(p.aggro&&f.alive)if(p.type==="grunt"||p.type==="brute")v>p.r+f.r+.05&&(w=b,S=M);else if(p.type==="shooter")v>p.cfg.keep+1.5?(w=b,S=M):v<p.cfg.keep-1.5&&(w=-b,S=-M),w+=-M*p.strafe*.5,S+=b*p.strafe*.5,p.shootT-=d,p.shootT<=0&&(p.shootT=p.cfg.shootCd*(.85+Math.random()*.3),Ss(x,p.x,p.z,f.x,f.z,(f.y+1.1)*.5)||(e.combat.spawnEBullet({x:p.x+b*.6,y:1.15,z:p.z+M*.6,vx:b*p.cfg.bspd,vz:M*p.cfg.bspd,vy:(f.y+1.1-1.15)/v*p.cfg.bspd,kind:"red"}),e.fx.spawn(p.x+b*.8,1.15,p.z+M*.8,se.hotred,4,{spd:2,up:1,size:.3}),e.audio.beep(520,.08,"square",.08,200)));else if(p.orbit+=d*.9*p.strafe,p.dive===0){let O=f.x+Math.cos(p.orbit)*5,B=f.z+Math.sin(p.orbit)*5,k=O-p.x,$=B-p.z,W=Math.hypot(k,$)||1;w=k/W*Math.min(1,W/2),S=$/W*Math.min(1,W/2),p.y+=(p.cfg.hover+Math.sin(p.anim*3)*.3-p.y)*Math.min(1,d*4),p.diveT-=d,p.diveT<=0&&(p.dive=1,p.diveT=.35,p.dx=b,p.dz=M)}else p.dive===1?(p.diveT-=d,p.y+=(p.cfg.hover+.7-p.y)*d*6,p.diveT<=0&&(p.dive=2,p.diveT=.55,p.dx=b,p.dz=M,e.audio.beep(900,.2,"sawtooth",.1,200))):(p.diveT-=d,w=p.dx*2.4,S=p.dz*2.4,p.y+=(f.y+.9-p.y)*d*10,p.diveT<=0&&(p.dive=0,p.diveT=p.cfg.diveCd));else p.type==="flyer"&&(p.y=p.cfg.hover+Math.sin(p.anim*2)*.25);for(let O of t){if(O===p||!O.alive||O.type==="flyer"!=(p.type==="flyer"))continue;let B=p.x-O.x,k=p.z-O.z,$=Math.hypot(B,k);$<1.2&&$>.001&&(w+=B/$*(1.2-$)*1.5,S+=k/$*(1.2-$)*1.5)}let T=p.cfg.spd*(e.slowMul||1),I=w*T+p.kx*p.knock,_=S*T+p.kz*p.knock;p.knock=Math.max(0,p.knock-d*26);let y=Ar(x,p.x,p.z,p.r,I*d,_*d,p.type==="flyer"?9:0);if(p.x=y.x,p.z=y.z,Math.abs(w)+Math.abs(S)>.05||p.aggro){let O=p.aggro?b:w,B=p.aggro?M:S;p.fx+=(O-p.fx)*Math.min(1,d*8),p.fz+=(B-p.fz)*Math.min(1,d*8)}let A=p.r+f.r+(p.type==="flyer"?.1:.05);f.alive&&v<A&&(p.type==="flyer"?Math.abs(p.y-(f.y+1))<1.3:f.y<.8)&&(e.wardBlocks(p.x,p.z)?(e.wardAbsorb(12,p.x,p.z),p.kx=-b,p.kz=-M,p.knock=10):e.hurt("contact",p.x,p.z)&&(p.kx=-b,p.kz=-M,p.knock=8));let U=p.mesh;U.position.set(p.x,p.y,p.z),U.rotation.y=Math.atan2(p.fx,p.fz);let E=p.type==="flyer"?0:Math.abs(Math.sin(p.anim*8))*.08*(Math.abs(w)+Math.abs(S)>.05?1:0);U.position.y=p.y+E;let C=U.userData,z=Math.abs(w)+Math.abs(S)>.05;if(C.model)C.drv&&(C.drv.loop(z?C.spec.move:C.spec.idle,null,p.type==="brute"?.8:1),C.drv.update(d),U.position.y=p.y),p.type==="flyer"&&(U.rotation.x=p.dive===2?.5:Math.sin(p.anim*2)*.12,U.rotation.z=Math.sin(p.anim*3)*.1),p.hurtT>0&&(p.hurtT-=d,es(C.mats,1),p.hurtT<=0&&es(C.mats,0));else if(p.type==="flyer"&&(C.disc.rotation.y+=d*6,U.rotation.x=p.dive===2?.6:Math.sin(p.anim*2)*.1),p.hurtT>0){p.hurtT-=d;for(let O of C.mats)O.emissive.set("#ffffff"),O.emissiveIntensity=1.5}else C.mats[0].emissiveIntensity=0,C.mats[1].emissive.set(se.char),C.mats[1].emissiveIntensity=.9+Math.sin(p.anim*5)*.3}}function l(d){for(let f=n.length-1;f>=0;f--){let x=n[f];x.t-=d,x.e.mesh.userData.drv.update(d),x.t<.6&&(x.e.mesh.position.y-=d*1.4),x.t<=0&&(i.remove(x.e.mesh),n.splice(f,1))}}function c(){for(let d of t)i.remove(d.mesh);t.length=0,n.length=0}function h(d){return t.filter(f=>f.alive&&(!d||f.type===d)).length}function u(d,f,x){let p=null,g=1/0,m=Math.cos(f);for(let v of t){if(!v.alive)continue;let b=v.x-d.x,M=v.z-d.z,w=Math.hypot(b,M);w>x||w>=g||f<Math.PI&&w>.001&&(b*d.fx+M*d.fz)/w<m||(p=v,g=w)}return p?{foe:p,d:g}:null}return{list:t,spawn:s,update:a,damage:r,clear:c,aliveCount:h,nearestInArc:u}}var zb=160,Fb=200,Vu=i=>i.y+(i.type==="flyer"?0:i.type==="brute"?1.4:1),kb={red:{col:se.hotred,size:.2},ember:{col:se.orange,size:.24},pulse:{col:se.pink,size:.22},ink:{col:se.violet,size:.34}};function Wm(i,e){let t=new ue(new en(i,8,6),new We({color:"#ffffff"})),n=bt(e,i*6,.85);return t.add(n),t.userData.glow=n,t.visible=!1,t}function Xm(i,e){let t=[],n=[],s=[],r=[],o=[],a=[];for(let _=0;_<zb;_++){let y=Wm(.15,se.gold);i.add(y),t.push({alive:!1,mesh:y})}for(let _=0;_<Fb;_++){let y=Wm(.2,se.hotred);i.add(y),n.push({alive:!1,mesh:y})}let l=new an(.86,1,56),c=new Ra(1,24),h=1.05;function u(_,y,A,U,E,C={}){let z=t.find(B=>!B.alive);if(!z)return null;let O=Mt[E];return Object.assign(z,{alive:!0,x:_,y:C.y??h,z:y,vx:A*O.spd*(C.spdMul||1),vz:U*O.spd*(C.spdMul||1),life:C.life||O.life||2.2,dmg:C.dmg||O.dmg,pierce:C.pierce||!!O.pierce,size:C.size||O.size,kind:E,hit:new Set,reflected:!!C.reflected}),z.mesh.visible=!0,z.mesh.scale.setScalar(z.size/.15),z.mesh.userData.glow.material.color.set(C.col||O.col),z.mesh.position.set(_,z.y,y),z.mesh.lookAt(_+A,z.y,y+U),z.mesh.scale.z*=E==="beam"?4:E==="rapid"?2.2:1.4,z}let d=new N;function f(_,y,A,U){h=(_.y||0)+1.05;let E=_.x+_.fx*.9,C=_.z+_.fz*.9;if(e.hero&&e.hero.firesFromHands){e.hero.brace();let W=e.hero.castPoint(d);E=W.x+_.fx*.25,C=W.z+_.fz*.25,h=W.y}else if(e.hero&&e.hero.firesFromGun){let W=e.hero.muzzlePoint(d);E=W.x+_.fx*.1,C=W.z+_.fz*.1,h=W.y}let z=_.fx,O=_.fz,B=1+(A-1)*.35,k=Mt[y].size*(1+(A-1)*.18),$=(W,Z,pe)=>[W*Math.cos(pe)-Z*Math.sin(pe),W*Math.sin(pe)+Z*Math.cos(pe)];if(U)if(y==="single")u(E,C,z,O,y,{dmg:6*B,size:k*2.4,pierce:!0,col:"#ffffff"});else if(y==="scatter")for(let W=0;W<14;W++){let Z=W/14*Math.PI*2;u(_.x+Math.cos(Z)*.8,_.z+Math.sin(Z)*.8,Math.cos(Z),Math.sin(Z),y,{dmg:1.5*B,size:k*1.3})}else if(y==="rapid")for(let W=0;W<9;W++){let[Z,pe]=$(z,O,(W-4)*.16);u(E,C,Z,pe,y,{dmg:.9*B,size:k*1.4,spdMul:.9+W*.03})}else if(y==="beam")for(let W=0;W<5;W++){let[Z,pe]=$(z,O,(W-2)*.28);u(E,C,Z,pe,y,{dmg:2.2*B,size:k*1.5,pierce:!0,col:"#ffffff"})}else for(let W=0;W<12;W++){let Z=W/12*Math.PI*2;u(_.x+Math.cos(Z)*.9,_.z+Math.sin(Z)*.9,Math.cos(Z),Math.sin(Z),y,{dmg:1.2*B,size:k*1.6,life:.7})}else if(y==="single")u(E,C,z,O,y,{dmg:Mt.single.dmg*B,size:k});else if(y==="scatter"){let W=3+Math.min(2,A-1);for(let Z=0;Z<W;Z++){let[pe,Se]=$(z,O,(Z-(W-1)/2)*.22);u(E,C,pe,Se,y,{dmg:Mt.scatter.dmg*B,size:k})}}else if(y==="rapid"){let W=(_.shotIx=(_.shotIx||0)+1)%2?1:-1;u(E-O*.22*W,C+z*.22*W,z,O,y,{dmg:Mt.rapid.dmg*B,size:k})}else if(y==="beam")u(E,C,z,O,y,{dmg:Mt.beam.dmg*B,size:k});else for(let W=0;W<2;W++){let[Z,pe]=$(z,O,(Math.random()-.5)*.5);u(E,C,Z,pe,y,{dmg:Mt.flame.dmg*B,size:k*(.8+Math.random()*.5),spdMul:.8+Math.random()*.5})}}function x(_){let y=n.find(U=>!U.alive);if(!y)return null;let A=kb[_.kind||"red"];return Object.assign(y,{alive:!0,x:_.x,y:_.y??1.1,z:_.z,vx:_.vx,vy:_.vy||0,vz:_.vz,life:_.life||yp,kind:_.kind||"red",grav:!!_.grav,size:A.size}),y.mesh.visible=!0,y.mesh.scale.setScalar(A.size/.2),y.mesh.userData.glow.material.color.set(A.col),y.mesh.position.set(y.x,y.y,y.z),y}function p(_,y,A,U=12,E=10){let C=new ue(l,new We({color:A,transparent:!0,opacity:.95,blending:ht,depthWrite:!1,side:mt}));C.rotation.x=-Math.PI/2,C.position.set(_,.12,y),i.add(C),s.push({x:_,z:y,r:.5,spd:U,maxR:E,mesh:C,col:A,passed:!1})}function g(_,y){let A=new ue(c,new We({color:"#2a0f4a",transparent:!0,opacity:.85,depthWrite:!1}));A.rotation.x=-Math.PI/2,A.position.set(_,.08,y),A.scale.setScalar(1.5),i.add(A),r.push({x:_,z:y,r:1.5,t:3.5,mesh:A})}function m(_){let y=new ke;y.position.set(_.x,0,_.z);let A=new ue(new vt(.75,.85,.3,8),new Ye({color:"#2a2030",roughness:.6}));A.position.y=.15,y.add(A);let U=new ue(new Ct(.85,.85,.85),new Ye({color:"#2D1B4E",roughness:.45,metalness:.3,emissive:se.gold,emissiveIntensity:.15}));U.position.y=.95,y.add(U);let E=new ue(new Ct(.9,.12,.9),new Ye({color:se.gold,metalness:.8,roughness:.25}));E.position.y=.95,y.add(E);let C=E.clone();C.rotation.z=Math.PI/2,y.add(C);let z=bt(se.gold,1.8,.35);z.position.y=1,y.add(z),i.add(y),o.push({x:_.x,z:_.z,kind:_.kind,hp:2,alive:!0,mesh:y,crate:U,glow:z,t:Math.random()*6})}function v(_,y,A){let U=A==="power"?se.gold:Mt[A].col,E=new ke;E.position.set(_,0,y);let C=new ue(A==="power"?new vr(.34):new Ia(.3,0),new Ye({color:U,emissive:U,emissiveIntensity:1.2,metalness:.5,roughness:.2}));C.position.y=1.1,E.add(C);let z=bt(U,1.6,.6);z.position.y=1.1,E.add(z);let O=new ue(new an(.5,.62,24),new We({color:U,transparent:!0,opacity:.6,blending:ht,depthWrite:!1,side:mt}));O.rotation.x=-Math.PI/2,O.position.y=.06,E.add(O),i.add(E),a.push({x:_,z:y,kind:A,mesh:E,core:C,t:0})}function b(_){_.alive=!1,_.mesh.visible=!1}function M(_){let y=e.H,A=e.level,U=e.boss;for(let E of t){if(!E.alive)continue;let C=E.x,z=E.z;if(E.x+=E.vx*_,E.z+=E.vz*_,E.life-=_,E.life<=0){b(E);continue}if(Ss(A,C,z,E.x,E.z,E.y-.4)){e.fx.spawn(C,E.y,z,Mt[E.kind].col,4,{spd:2,up:1.5,size:.3}),b(E);continue}let O=!1;for(let B of e.foes.list){if(!B.alive||E.hit.has(B)||Math.abs(Vu(B)-E.y)>(B.type==="brute"?1.6:1.25))continue;let k=B.x-E.x,$=B.z-E.z;if(k*k+$*$<(B.r+E.size)**2){E.hit.add(B);let W=Math.hypot(E.vx,E.vz)||1;if(e.foes.damage(B,E.dmg,E.reflected,E.vx/W,E.vz/W,E.kind==="flame"?2:5),e.fx.spawn(E.x,E.y,E.z,Mt[E.kind].col,3,{spd:2,up:1,size:.3}),!E.pierce){O=!0;break}}}if(!O&&U&&U.alive&&U.awake){let B=U.x-E.x,k=U.z-E.z;B*B+k*k<(U.r+E.size)**2&&!E.hit.has(U)&&(E.hit.add(U),U.hit(E)?(U.damage(E.dmg,E.reflected),e.fx.spawn(E.x,E.y,E.z,Mt[E.kind].col,4,{spd:2,up:1,size:.3})):(e.fx.spawn(E.x,E.y,E.z,"#ffffff",3,{spd:2,up:1,size:.25}),e.audio.beep(200,.05,"square",.06)),E.pierce||(O=!0))}if(!O)for(let B of o){if(!B.alive)continue;let k=B.x-E.x,$=B.z-E.z;if(k*k+$*$<.85&&(w(B,E.dmg),!E.pierce)){O=!0;break}}if(O){b(E);continue}E.mesh.position.set(E.x,E.y,E.z),E.kind==="flame"&&E.mesh.scale.setScalar(E.size/.15*(1+(1-E.life/.42)*1.4))}for(let E of n){if(!E.alive)continue;let C=E.x,z=E.z;if(E.x+=E.vx*_,E.z+=E.vz*_,E.life-=_,E.grav||(E.y+=E.vy*_),E.grav&&(E.vy-=22*_,E.y+=E.vy*_,E.y<=.2)){g(E.x,E.z),e.fx.spawn(E.x,.3,E.z,se.violet,10,{spd:3,up:2}),e.audio.noise(.1,.1,200,1200),b(E);continue}if(E.life<=0||!E.grav&&Ss(A,C,z,E.x,E.z,E.y-.4)){b(E);continue}if(y.alive){let O=y.x-E.x,B=y.z-E.z;if(O*O+B*B<(vn+E.size)**2&&(E.grav?E.y<y.y+1.9&&E.y>y.y-.2:Math.abs(E.y-(y.y+1.1))<1)){if(e.wardBlocks(E.x,E.z)){if(e.wardAbsorb(18,E.x,E.z)==="parry"){let $=Math.hypot(E.vx,E.vz)||1;u(E.x,E.z,-E.vx/$,-E.vz/$,"single",{dmg:3,size:.28,reflected:!0,col:"#ffffff",spdMul:1.1,y:E.y})}b(E);continue}if(e.hurt("shot",E.x,E.z)){b(E);continue}}}E.mesh.position.set(E.x,E.y,E.z)}for(let E=s.length-1;E>=0;E--){let C=s[E];if(C.r+=C.spd*_,C.mesh.scale.setScalar(C.r),C.mesh.material.opacity=.95*(1-C.r/C.maxR),C.r>=C.maxR){i.remove(C.mesh),C.mesh.material.dispose(),s.splice(E,1);continue}if(y.alive&&!C.passed){let z=Math.hypot(y.x-C.x,y.z-C.z);Math.abs(z-C.r)<.45+vn&&y.y<.35&&(y.dashT>0?(C.passed=!0,e.onStyle("dash")):y.ward?(C.passed=!0,e.wardAbsorb(30,C.x,C.z)):e.hurt("wave",C.x,C.z)&&(C.passed=!0))}}for(let E=r.length-1;E>=0;E--){let C=r[E];if(C.t-=_,C.mesh.material.opacity=Math.min(.85,C.t*.6),C.t<=0){i.remove(C.mesh),C.mesh.material.dispose(),r.splice(E,1);continue}y.y<.1&&Math.hypot(y.x-C.x,y.z-C.z)<C.r&&(e.slowMul=.5)}for(let E of o)E.alive&&(E.t+=_,E.crate.rotation.y=E.t*.6,E.crate.position.y=.95+Math.sin(E.t*2)*.05,E.glow.material.opacity=.3+Math.sin(E.t*3)*.12);for(let E=a.length-1;E>=0;E--){let C=a[E];C.t+=_,C.core.rotation.y=C.t*2,C.core.rotation.x=C.t,C.core.position.y=1.1+Math.sin(C.t*3)*.12,y.alive&&Math.hypot(y.x-C.x,y.z-C.z)<1.1&&(i.remove(C.mesh),a.splice(E,1),e.onPickup(C.kind,C.x,C.z))}}function w(_,y){_.hp-=y,_.crate.material.emissiveIntensity=1.2,setTimeout(()=>{_.crate.material.emissiveIntensity=.15},80),e.audio.beep(300,.05,"square",.08,150),_.hp<=0&&(_.alive=!1,i.remove(_.mesh),e.fx.spawn(_.x,1,_.z,se.gold,18,{spd:5,up:5}),e.fx.spawn(_.x,1,_.z,"#ffffff",6,{spd:3,size:.35}),e.fx.ring(_.x,_.z,se.gold,2.5,.4),e.audio.sfx.crate(),v(_.x,_.z,_.kind),e.onCrate(_))}function S(_,y,A=1,U=1){let E=e.H,C=0,z=ei[_%ei.length],O=_%ei.length===ei.length-1,B=z.reach+(y?.6:0),k=z.arc,$=(Z,pe,Se)=>{let K=Z-E.x,re=pe-E.z,me=Math.hypot(K,re);return me>B+Se?!1:me<.001?!0:(K*E.fx+re*E.fz)/me>Math.cos(k+Math.asin(Math.min(1,Se/Math.max(me,Se))))};for(let Z of e.foes.list){if(!Z.alive||!$(Z.x,Z.z,Z.r)||Math.abs(Vu(Z)-(E.y+1))>1.7)continue;C++;let pe=Z.x-E.x,Se=Z.z-E.z,K=Math.hypot(pe,Se)||1;e.foes.damage(Z,z.dmg*A*U,z.launch||y,pe/K,Se/K,z.knock*A),e.fx.spawn(Z.x,1,Z.z,"#ffffff",5,{spd:3,up:2,size:.35}),e.fx.flash(Z.x,Vu(Z),Z.z,z.col||(O||A>1.3?"#fff4c8":"#ffffff"),(O?3.4:1.9)*(.9+A*.25),O?.18:.12)}C&&O&&e.fx.ring(E.x+E.fx*1.2,E.z+E.fz*1.2,"#fff4c8",3.6,.32);let W=e.boss;W&&W.alive&&W.awake&&$(W.x,W.z,W.r)&&(W.hit({x:W.x,z:W.z,y:1})?(W.damage(z.dmg*A*U,z.launch),C++):e.audio.beep(200,.05,"square",.06));for(let Z of n)Z.alive&&$(Z.x,Z.z,Z.size)&&(b(Z),e.fx.spawn(Z.x,Z.y,Z.z,"#ffffff",4,{spd:3,up:1,size:.3}),e.onStyle("cut"));for(let Z of o)Z.alive&&$(Z.x,Z.z,.6)&&w(Z,2);return C}function T(){for(let _ of t)b(_);for(let _ of n)b(_);for(let _ of s)i.remove(_.mesh);s.length=0;for(let _ of r)i.remove(_.mesh);r.length=0;for(let _ of o)_.alive&&i.remove(_.mesh);o.length=0;for(let _ of a)i.remove(_.mesh);a.length=0}function I(){for(let _ of n)b(_)}return{bullets:t,ebullets:n,waves:s,crates:o,pickups:a,fire:f,spawnEBullet:x,spawnWave:p,spawnCrate:m,spawnPickup:v,bladeStrike:S,update:M,clear:T,clearEnemyShots:I,WEP_ORDER:up}}var Rs=(i={})=>new Ye({color:"#1b1b24",roughness:.5,metalness:.4,...i}),Cs=(i,e=1)=>new Ye({color:i,emissive:i,emissiveIntensity:e});function Yn(i,e,t,n){return new ue(new Ct(i,e,t),n)}var Gu=(i,e,t,n=2)=>{let s=i.bossRect;return[Math.max(s.x0*2+n,Math.min(s.x1*2-n,e)),Math.max(s.z0*2+n,Math.min(s.z1*2-n,t))]};function pl(i,e,t,n=10){let s=i.H;if(!s.alive||s.y>1.3)return;let r=s.x-e.x,o=s.z-e.z,a=Math.hypot(r,o)||.001;if(a<t+vn){let l=r/a,c=o/a;s.ward?(i.wardAbsorb(gp,e.x,e.z),i.shove(l,c,n)):i.hurt("boss",e.x,e.z)&&i.shove(l,c,n*.6)}}function Bb(i,e,t){let n=new ke;i.add(n),n.add(Wn(2.4));let s=Rs(),r=Cs(se.char,.9),o=[s,r],a=Yn(3.4,2.2,2.6,s);a.position.y=1.5,n.add(a);let l=Yn(1.6,1.2,.3,Cs(se.orange,1.6));l.position.set(0,1.3,1.35),n.add(l);let c=bt(se.orange,3.2,.7);c.position.set(0,1.3,1.6),n.add(c);for(let f of[-1,1]){let x=Yn(1,.9,3,Rs({color:"#101016"}));x.position.set(f*1.9,.45,0),n.add(x);let p=Yn(1.02,.1,2.6,r);p.position.set(f*1.9,.5,0),n.add(p)}let h=new ue(new vt(.35,.45,1.6,10),s);h.position.set(-.8,3.2,-.6),n.add(h);let u=h.clone();u.position.x=.8,n.add(u);let d=Yn(2.2,.16,1.2,Cs(se.gold,.4));d.position.set(0,2.7,.4),n.add(d);for(let f of[-1,1]){let x=new ue(new en(.14,8,6),new We({color:se.hotred}));x.position.set(f*.7,2.1,1.32),n.add(x)}Object.assign(t,{mesh:n,mats:o,r:2,y:0,home:{x:t.x,z:t.z},shootT:1.5,pat:0,burst:0,burstT:0,lunge:0,lungeT:0,lungeCd:3,tx:0,tz:0}),t.hit=()=>!0,t.update=f=>{let x=e.H,p=t.x,g=t.z+1.2;if(t.t+=f,t.lunge===0&&(t.x=t.home.x+Math.sin(t.t*.7)*3,t.z=t.home.z+Math.sin(t.t*1.2)*.6),Math.random()<f*22&&e.fx.ember(t.x+(Math.random()-.5)*1.2,1.4,t.z+1.4,se.orange,.35,.8,1.8),Math.random()<f*8&&e.fx.ember(t.x-.8+Math.random()*1.6,4,t.z-.6,"#efe6cf",.3,1.4,.8),t.hp/t.max<.33&&Math.random()<f*6&&e.fx.spawn(t.x+1.2,2.4,t.z,"#ffffff",3,{spd:2,up:2,size:.3}),t.shootT-=f,t.burst>0){if(t.burstT-=f,t.burstT<=0&&x.alive){t.burst--,t.burstT=.16;let m=x.x-p,v=x.z-g,b=Math.hypot(m,v)||1;e.combat.spawnEBullet({x:p,y:1.3,z:g,vx:m/b*11,vz:v/b*11,kind:"ember"}),e.fx.spawn(p,1.3,g,se.orange,5,{spd:2,up:1,size:.3}),e.audio.noise(.08,.14,500,200)}}else if(t.shootT<=0&&x.alive)if(t.pat=(t.pat+1)%3,t.pat===2)t.burst=3,t.burstT=0,t.shootT=1.6;else{t.shootT=1.15;let m=Math.atan2(x.z-g,x.x-p);for(let v=-2;v<=2;v++){let b=m+v*.2+Math.sin(t.t)*.12;e.combat.spawnEBullet({x:p,y:1.3,z:g,vx:Math.cos(b)*9,vz:Math.sin(b)*9,kind:"ember"})}e.fx.spawn(p,1.3,g,se.orange,8,{spd:3,up:2,size:.3}),e.audio.noise(.12,.18,400,150)}if(pl(e,t,t.r),t.hp/t.max<.5)if(t.lungeCd-=f,t.lunge===0&&t.lungeCd<=0)t.lunge=1,t.lungeT=.5,e.audio.noise(.5,.2,200,600),e.flash("TREADS FLARE \u2014 DASH THE WAVE",se.char);else if(t.lunge===1){if(t.lungeT-=f,r.emissiveIntensity=2.5,t.lungeT<=0){t.lunge=2,t.lungeT=.34;let m=x.x-t.x,v=x.z-t.z,b=Math.hypot(m,v)||1;t.tx=m/b,t.tz=v/b}}else if(t.lunge===2){t.lungeT-=f;let[m,v]=Gu(e.level,t.x+t.tx*22*f,t.z+t.tz*22*f,2.6);t.x=m,t.z=v,pl(e,t,t.r+.3),t.lungeT<=0&&(t.lunge=3,t.lungeT=.9,e.shake(10),e.audio.sfx.slam(),e.combat.spawnWave(t.x,t.z,se.char,13,11),e.fx.spawn(t.x,.3,t.z,se.char,24,{spd:6,up:4}),e.fx.ring(t.x,t.z,se.char,4,.5))}else t.lunge===3&&(t.lungeT-=f,r.emissiveIntensity=.9,t.x+=(t.home.x-t.x)*Math.min(1,f*3),t.z+=(t.home.z-t.z)*Math.min(1,f*3),t.lungeT<=0&&(t.lunge=0,t.lungeCd=4.5));n.position.set(t.x,t.y+Math.sin(t.t*1.2)*.06,t.z),n.rotation.y=Math.atan2(x.x-t.x,x.z-t.z)*.25,c.material.opacity=.5+Math.sin(t.t*6)*.2}}function Hb(i,e,t){let n=new ke;i.add(n),n.add(Wn(2.2));let s=Cs(se.pink,1.4),r=Rs({color:"#2a1230"}),o=Cs(se.pink,.8),a=[s,r,o],l=new ke;l.position.y=2.4,n.add(l);let c=new ue(new en(.9,20,14),s);l.add(c);let h=bt(se.pink,3.4,.6);l.add(h);let u=new ue(new jn(2.2,.06,8,48),o);u.rotation.x=Math.PI/2,l.add(u);let d=new ke;l.add(d);let f=[];for(let g=0;g<6;g++){let m=new ke;m.rotation.y=g*Math.PI/3;let v=Yn(1.15,1.7,.22,r);v.position.z=2,m.add(v);let b=Yn(1.17,.08,.24,o);b.position.set(0,.85,2),m.add(b),d.add(m),f.push(v)}let x=bt(se.cyan,1.8,.6);x.position.y=-1.1,l.add(x);let p=new ue(new Tn(1.8,40),new We({color:se.pink,transparent:!0,opacity:0,blending:ht,depthWrite:!1,side:mt}));p.rotation.x=-Math.PI/2,p.position.y=.1,i.add(p),t.mount=d,Object.assign(t,{mesh:n,mats:a,extra:[p],r:2.3,y:2.4,home:{x:t.x,z:t.z},rot:0,open:0,openCd:4,mode:"cruise",modeT:2.2,shootT:1.2,beamOn:0,spawnCd:5,bx:0,bz:0,bdx:0,bdz:1}),t.hit=g=>{if(t.open>0)return!0;let m=Math.atan2(g.x-t.x,g.z-t.z),v=Math.PI/3;return((m-t.rot)%v+v)%v>v*.62},t.update=g=>{let m=e.H;t.t+=g,t.rot+=g*(t.open>0?.3:.9),d.rotation.y=t.rot,t.x=t.home.x+Math.sin(t.t*.5)*4.5,t.z=t.home.z+Math.sin(t.t*1.3)*1.4,t.open>0?t.open-=g:(t.openCd-=g,t.openCd<=0&&(t.open=1.8,t.openCd=4.5,e.flash("ARRAY OPEN \u2014 HIT THE CORE",se.cyan),e.audio.sfx.open()));let v=t.open>0?3.2:2;for(let b of f)b.position.z+=(v-b.position.z)*Math.min(1,g*6);if(Math.random()<g*18&&e.fx.ember(t.x+(Math.random()-.5)*2,1.2,t.z+(Math.random()-.5)*2,se.pink,.3,.7,-1.5),t.modeT-=g,t.spawnCd-=g,t.mode==="cruise"){if(t.shootT-=g,t.shootT<=0&&m.alive){t.shootT=1.1;let b=Math.atan2(m.z-t.z,m.x-t.x);for(let M of[-.12,0,.12])e.combat.spawnEBullet({x:t.x,y:1.3,z:t.z,vx:Math.cos(b+M)*10,vz:Math.sin(b+M)*10,kind:"pulse"});e.fx.spawn(t.x,1.5,t.z,se.pink,6,{spd:3,up:1,size:.3}),e.audio.beep(1400,.08,"sine",.12,600)}if(t.modeT<=0){let b=e.foes.aliveCount("flyer");if(t.mode=t.spawnCd<=0&&b<3?"deploy":"sweep",t.modeT=t.mode==="sweep"?.75:.9,t.mode==="sweep"){let M=m.x-t.x,w=m.z-t.z,S=Math.hypot(M,w)||1;t.bdx=M/S,t.bdz=w/S,t.bx=t.x,t.bz=t.z,e.audio.sfx.beamTell(),e.flash("BEAM \u2014 STEP OFF THE LINE",se.pink)}}}else if(t.mode==="sweep"){if(p.position.set(t.bx+t.bdx*20,.1,t.bz+t.bdz*20),p.rotation.z=-Math.atan2(t.bdx,t.bdz),t.beamOn<=0&&(p.material.opacity=.25+Math.floor(t.t*12)%2*.25),t.modeT<=0&&t.beamOn<=0&&(t.beamOn=.4,e.shake(5),e.audio.sfx.beamFire()),t.beamOn>0){if(t.beamOn-=g,p.material.opacity=.95,Math.random()<g*40&&e.fx.spawn(t.bx+t.bdx*Math.random()*30,.3,t.bz+t.bdz*Math.random()*30,se.pink,2,{spd:2,up:4,size:.3}),m.alive){let b=m.x-t.bx,M=m.z-t.bz,w=b*t.bdx+M*t.bdz,S=Math.abs(b*t.bdz-M*t.bdx);w>0&&w<40&&S<.9+vn&&m.y<1.2&&(m.ward?e.wardAbsorb(70*g,t.x,t.z):e.hurt("beam",t.x,t.z))}t.beamOn<=0&&(t.mode="cruise",t.modeT=2.4,t.shootT=.8,p.material.opacity=0)}}else if(t.mode==="deploy"&&t.modeT<=0){for(let b of[-1.6,1.6]){let[M,w]=Gu(e.level,t.x+b,t.z+1.5);e.foes.spawn("flyer",M,w).aggro=!0}e.fx.spawn(t.x,1.8,t.z,se.cyan,14,{spd:4,up:2}),e.audio.beep(500,.2,"square",.15,250),t.spawnCd=9,t.mode="cruise",t.modeT=2.4}pl(e,t,1.6),n.position.set(t.x,0,t.z),l.position.y=2.4+Math.sin(t.t*1.6)*.2,c.rotation.y+=g,h.material.opacity=t.open>0?.9:.5,s.emissiveIntensity=t.open>0?2.4:1.4}}function Vb(i,e,t){let n=new ke;i.add(n);let s=Wn(2);n.add(s);let r=Rs({color:"#141018"}),o=Cs(se.violet,.9),a=Cs(se.gold,.1),l=[r,o],c=new ke;n.add(c);let h=Yn(3.2,1.8,2.4,r);h.position.y=.9,c.add(h);for(let w of[-1,1]){let S=Yn(.1,.5,2.3,o);S.position.set(w*1.62,.9,0),c.add(S)}let u=new ue(new vt(.7,.7,.14,16),a);u.position.set(0,1.86,.4),c.add(u);let d=bt(se.gold,2.4,0);d.position.set(0,2,.4),c.add(d);let f=new ue(new vt(.4,.5,8,10),Rs({color:"#22202a"}));f.position.y=5.8,c.add(f);let x=e.level.bossRect,p=x.x0*2+1,g=x.x1*2-1,m=x.z0*2+1,v=x.z1*2-1,b=new ke;i.add(b);for(let w of[m+1.5,v-1.5]){let S=Yn(g-p,.3,.5,Rs({color:"#22202a"}));S.position.set((p+g)/2,7.2,w),b.add(S)}let M=Yn(1.4,.4,v-m-2.5,Rs({color:"#22202a"}));M.position.set(Gb(e).x,7.2,(m+v)/2),b.add(M),t.mount=c,Object.assign(t,{mesh:n,mats:l,extra:[b],r:1.9,y:5.5,state:"track",st:2,topY:5.5,botY:0,vul:!1}),t.hit=()=>t.vul,t.update=w=>{let S=e.H;t.t+=w,t.st-=w;let[T,I]=Gu(e.level,S.x,S.z,2.5);if(t.state==="track")t.vul=!1,t.x+=(T-t.x)*Math.min(1,w*2.2),t.z+=(I-t.z)*Math.min(1,w*2.2),t.y=t.topY+Math.sin(t.t*2)*.15,t.st<=0&&(t.state="slam",t.st=.22,e.audio.noise(.2,.2,300,80));else if(t.state==="slam"){if(t.y+=(t.botY-t.y)*Math.min(1,w*14),t.st<=0){t.y=t.botY,t.state="down",t.st=1.1,t.vul=!0,e.shake(12),e.audio.sfx.slam(),e.combat.spawnWave(t.x,t.z,se.violet,13,9);for(let _=0;_<3;_++){let y=Math.atan2(S.z-t.z,S.x-t.x)+(_-1)*.9+(Math.random()-.5)*.4,A=4+Math.random()*3;e.combat.spawnEBullet({x:t.x,y:2.2,z:t.z,vx:Math.cos(y)*A,vz:Math.sin(y)*A,vy:7.5,kind:"ink",grav:!0,life:6})}e.fx.spawn(t.x,.3,t.z,se.violet,26,{spd:6,up:4}),e.fx.ring(t.x,t.z,se.violet,5,.5),e.flash("SEAL EXPOSED \u2014 FIRE",se.gold)}}else t.state==="down"?t.st<=0&&(t.state="rise",t.st=.6,t.vul=!1):t.state==="rise"&&(t.y+=(t.topY-t.y)*Math.min(1,w*6),t.st<=0&&(t.state="track",t.st=1.6+Math.random()*.8));Math.random()<w*8&&e.fx.ember(t.x-1.4+Math.random()*2.8,t.y+.2,t.z+(Math.random()-.5)*2,"#6a3cff",.3,.8,-1),t.state!=="track"&&pl(e,t,1.9),n.position.set(t.x,0,t.z),c.position.y=t.y,s.scale.setScalar(1-t.y/8),M.position.x=t.x,a.emissiveIntensity=t.vul?2.2:.1,d.material.opacity=t.vul?.8:0,o.emissiveIntensity=t.vul?2:.9}}var Gb=i=>i.level.bossPos;function Ym(i,e,t){let n=vp[t],s=e.level.bossPos,r={key:t,name:n.name,wake:n.wake,x:s.x,z:s.z,hp:n.hp,max:n.hp,alive:!0,awake:!1,t:0,hurtT:0,stun:0,extra:[],dying:0};({engine:Bb,censor:Hb,redactor:Vb})[t](i,e,r);let o=Nm(e.assets,r,r.mount),a=r.update;r.damage=(l,c)=>{r.alive&&(l*=e.comboHit?e.comboHit():1,r.hp-=l,r.hurtT=.1,e.audio.sfx.bossHit(),e.onBossDamage(l,c),r.hp<=0&&(r.hp=0,r.alive=!1,r.dying=2.4,e.onBossDead()))},r.update=l=>{if(!r.alive){r.dying-=l,Math.random()<l*14&&(e.fx.spawn(r.x+(Math.random()-.5)*3,1+Math.random()*2,r.z+(Math.random()-.5)*3,Math.random()<.5?"#ffffff":se.orange,10,{spd:6,up:5}),e.shake(4)),r.mesh.position.y-=l*.35,r.mesh.rotation.z+=l*.15;return}if(r.stun>0){r.stun-=l,r.t+=l*.1,r.mesh.rotation.x=Math.sin(r.t*40)*.03;return}if(a(l),r.hurtT>0){r.hurtT-=l,r.wasHurt=!0;for(let c of r.mats)c.emissive.set("#ffffff"),c.emissiveIntensity=1.6;o&&es(o.mats,1),r.hurtT<=0&&o&&es(o.mats,0)}else if(r.wasHurt){r.wasHurt=!1;for(let c of r.mats)c.emissive.setHex(c.userData.def.c),c.emissiveIntensity=c.userData.def.i}};for(let l of r.mats)l.userData.def={c:l.emissive.getHex(),i:l.emissiveIntensity};return r.dispose=()=>{i.remove(r.mesh);for(let l of r.extra)i.remove(l)},r.mesh.position.set(r.x,0,r.z),r}var Wb=i=>document.getElementById(i),ns=i=>String(i).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]);function qm(){let i={};for(let T of["hud","heroName","heroTitle","lives","wep","pow","wardBar","chargeBar","score","mult","pages","rail","flash","bossBar","bossName","bossFill","pageCard","pgTitle","pgLine","pgSrc","menu","select","worldSel","codexPop","pausePop","endPop","cardM","cardK","wrow","cxWrap","endMsg","endSub","rkRank","rkScore","rkGrid","rkHint","rkWorld","rkRows","nextWorld","muteBtn","sfxBtn","pauseBtn","touch","hint"])i[T]=Wb(T);let e=0,t=0;function n(T){for(let I of document.querySelectorAll(".overlay"))I.classList.add("hidden");T&&i[T].classList.remove("hidden"),document.body.classList.toggle("playing",!T),i.pauseBtn.classList.toggle("hidden",!!T),i.muteBtn.classList.toggle("hidden",!!T&&T!=="pausePop"),i.sfxBtn.classList.toggle("hidden",!!T&&T!=="pausePop")}function s(T,I=se.gold){i.flash.textContent=T,i.flash.style.color=I,i.flash.style.textShadow=`0 0 18px ${I}`,e=1.7,i.flash.style.opacity=1}function r(T){i.hint.textContent=T||""}function o(T){i.heroName.textContent=T.name,i.heroName.style.color=T.accent,i.heroTitle.textContent=T.title}function a(T){i.rail.textContent=T.rail,i.rail.style.color=T.accent}function l(T){i.pgTitle.textContent=T.t,i.pgLine.textContent=T.l,i.pgSrc.textContent=T.s,t=4.8,i.pageCard.classList.remove("hidden")}function c(T){i.bossName.textContent=T,i.bossBar.classList.remove("hidden")}function h(T,I){i.bossFill.style.width=Math.max(0,T/I*100)+"%"}function u(){i.bossBar.classList.add("hidden")}function d(T,I,_,y){i.lives.textContent="\u25C6".repeat(Math.max(0,I.lives))+"\u25C7".repeat(Math.max(0,3-I.lives));let A=Mt[I.weapon];i.wep.textContent=A.name,i.wep.style.color=A.col,i.wep.style.borderColor=A.col,i.pow.innerHTML=Array.from({length:Tr},(U,E)=>`<i class="${E<I.power?"on":""}"></i>`).join(""),i.wardBar.firstElementChild.style.width=Math.max(0,I.shield/Zi*100)+"%",i.wardBar.classList.toggle("broken",I.wardBroken>0),i.chargeBar.firstElementChild.style.width=Math.min(1,I.charge/Es)*100+"%",i.chargeBar.classList.toggle("full",I.charge>=Es),i.score.textContent=_.score.toLocaleString(),i.mult.textContent="\xD7"+_.mult.toFixed(2).replace(/\.?0+$/,""),i.mult.style.color=_.mult>=4?se.gold:_.mult>=2?se.cyan:"#cfc6b8",i.pages.textContent=`${_.pages} RECORDS RECOVERED`,e>0&&(e-=T,e<.5&&(i.flash.style.opacity=e/.5)),t>0&&(t-=T,t<=0&&i.pageCard.classList.add("hidden"))}function f(T){document.querySelectorAll(".selcard.hero[data-hero]").forEach(I=>I.classList.toggle("sel",I.dataset.hero===T))}function x(T,I){i.wrow.innerHTML=ti.map(_=>{let y=Mn[_],A=xo(_),U=kp(_),E=!I.includes(_);return`<div class="selcard wcard ${T===_?"sel":""} ${E?"locked":""}" data-w="${_}" style="--acc:${y.accent}">
        <div class="wglyph" style="background:radial-gradient(circle at 50% 60%, ${y.sky[1]}, ${y.sky[2]})"><span style="color:${y.accent}">${_==="ramparts"?"\u26EB":_==="venus"?"\u263F":"\u{1F4DC}"}</span></div>
        <div class="selname" style="color:${y.accent}">${y.name}</div><div class="seltag">${ns(y.tag)}</div>
        <div class="selbest">${A?`BEST ${A.s.toLocaleString()} \xB7 ${A.r} \xB7 ${Ot[A.h]?Ot[A.h].name:A.h}`:"NO RUN YET"} &nbsp;\xB7&nbsp; CODEX ${U}/${go[_].length}</div>
        ${E?'<div class="lock">CLEAR THE PREVIOUS FRONT</div>':""}</div>`}).join("")}function p(){let T=_o(),I=/[?&]codexall/.test(location.search),_=["\u2726 \u25C8 \u2726","\u25C8 \u2726 \u25C8","\u2727 \u2726 \u2727"],y=(A,U,E,C)=>I||U.includes(A.id)?`<div class="cx-scroll"><div class="cx-paper"><span class="cx-glyphs">${_[C%_.length]}</span><b>${ns(A.t)}</b><p>${ns(A.l)}</p><small>${ns(A.s)}</small><span class="cx-seal">\u2726</span></div></div>`:`<div class="cx-scroll sealed"><div class="cx-paper"><span class="cx-glyphs">\u2726 \u2726 \u2726</span><b>${ns(A.t)}</b><span class="cx-ink" style="width:94%"></span><span class="cx-ink" style="width:80%"></span><span class="cx-ink" style="width:88%"></span><span class="cx-ink" style="width:56%"></span><span class="cx-stamp">REDACTED</span><small>Recover it in ${ns(E.name)}</small></div></div>`;i.cxWrap.innerHTML=ti.map(A=>{let U=Mn[A],E=T[A]||[],C=go[A],z=C.filter(B=>E.includes(B.id)).length,O=Hh.filter(B=>C.some(k=>k.v===B.id));return`<div class="cx-world" style="--acc:${U.accent}"><h3>${ns(U.name)} <small>${z}/${C.length} recovered</small></h3>`+O.map(B=>{let k=C.filter(W=>W.v===B.id),$=k.filter(W=>E.includes(W.id)).length;return`<div class="cx-vol">${ns(B.title)} <small>${$}/${k.length}</small></div><div class="cx-grid">${k.map((W,Z)=>y(W,E,U,Z)).join("")}</div>`}).join("")+"</div>"}).join("")}function g(T,I,_,y,A){i.endMsg.textContent=y?"UNERASED":"ERASED",i.endMsg.style.color=y?se.gold:se.hotred,i.endSub.textContent=y?_.win:"The line broke. The pages you recovered stay in the Codex \u2014 the rest are still out there.",i.rkRank.textContent=I,i.rkRank.style.color=I==="UNERASED"?se.gold:I==="SAGE"?se.cyan:I==="SCHOLAR"?se.green:"#cfc6b8",i.rkScore.textContent=T.score.toLocaleString();let U=Math.floor(T.t/60),E=Math.floor(T.t%60),C=[["TIME",`${U}:${String(E).padStart(2,"0")}`],["HITS",T.hits],["KILLS",`${T.kills} \xB7 ${T.styleKills} style`],["PARRIES",T.parries],["BEST MULT","\xD7"+T.bestMult],["RECORDS",T.pages]];i.rkGrid.innerHTML=C.map(([O,B])=>`<div><small>${O}</small><b>${B}</b></div>`).join(""),i.rkHint.textContent=Up(I),i.rkWorld.textContent=_.name;let z=el()[_.key]||[];i.rkRows.innerHTML=z.length?z.map((O,B)=>`<div class="lbrow"><span>${B+1}</span><b>${O.s.toLocaleString()}</b><span>${O.r}</span><span style="color:${Ot[O.h]?Ot[O.h].accent:"#fff"}">${Ot[O.h]?Ot[O.h].name:O.h}</span><span>${O.d}</span></div>`).join(""):'<div class="lbrow"><span>\u2014</span></div>',i.nextWorld.classList.toggle("hidden",!(y&&A)),A&&(i.nextWorld.textContent=`Next: ${Mn[A].name} \u25B8`)}let m=null;function v(T){m||(m=document.createElement("div"),m.className="screenflash",document.body.appendChild(m)),m.style.background=`radial-gradient(circle at 50% 55%, ${T}88, ${T}00 70%)`,m.classList.remove("go"),m.offsetWidth,m.classList.add("go")}let b=null,M=0;function w(T){if(!b){b=document.createElement("div"),b.id="combo";let I=document.createElement("b"),_=document.createElement("small");_.textContent="HIT COMBO",b.append(I,_),i.hud.appendChild(b)}if(T<2){b.classList.remove("on"),M=0;return}b.firstChild.textContent=T,b.classList.add("on"),b.style.color=T>=30?"#ff7ad9":T>=15?"#ffd76a":T>=6?"#4CE0E0":"#f4ecd8",T!==M&&(b.classList.remove("pop"),b.offsetWidth,b.classList.add("pop"),M=T)}function S(T,I){i.muteBtn.classList.toggle("off",!!I),i.muteBtn.title=I?"Music is off (M)":"Music is on (M)",i.sfxBtn.textContent=T?"\u{1F507}":"\u{1F50A}",i.sfxBtn.classList.toggle("off",!!T)}return{el:i,show:n,flash:s,hint:r,setHero:o,setWorld:a,showPage:l,boss:c,bossHp:h,hideBoss:u,update:d,renderSelect:f,renderWorlds:x,renderCodex:p,renderEnd:g,setMuted:S,screenFlash:v,combo:w}}var Zm="unerased3d.sound.v1",bo=Object.freeze({music:.55,sfx:1,musicOn:!0,sfxOn:!0}),Km=i=>typeof i=="number"&&Number.isFinite(i)?Math.max(0,Math.min(1,i)):null;function is(i,e={}){let t={...bo,...i,...e};return{music:Km(t.music)??bo.music,sfx:Km(t.sfx)??bo.sfx,musicOn:typeof t.musicOn=="boolean"?t.musicOn:bo.musicOn,sfxOn:typeof t.sfxOn=="boolean"?t.sfxOn:bo.sfxOn}}function $m(){try{return globalThis.localStorage||null}catch{return null}}function Jm(i=$m()){if(!i)return is({});try{return is(JSON.parse(i.getItem(Zm)||"{}")||{})}catch{return is({})}}function jm(i,e=$m()){if(!e)return!1;try{return e.setItem(Zm,JSON.stringify(i)),!0}catch{return!1}}function Qm(i,e,t){let n=document.createElement("div");n.className="soundpanel";let s=(o,a,l)=>{let c=document.createElement("div");c.className="srow";let h=document.createElement("span");h.textContent=o;let u=document.createElement("input");u.type="range",u.min="0",u.max="100",u.step="1",u.setAttribute("aria-label",o+" volume");let d=document.createElement("b"),f=document.createElement("button");return f.type="button",f.className="stoggle",u.addEventListener("input",()=>t({[a]:Number(u.value)/100,[l]:!0})),f.addEventListener("click",()=>t({[l]:!e()[l]})),c.append(h,u,d,f),{wrap:c,render(x){u.value=String(Math.round(x[a]*100)),d.textContent=x[l]?Math.round(x[a]*100)+"%":"OFF",f.textContent=x[l]?"ON":"OFF",f.classList.toggle("off",!x[l]),c.classList.toggle("muted",!x[l])}}},r=[s("MUSIC","music","musicOn"),s("EFFECTS","sfx","sfxOn")];return n.append(...r.map(o=>o.wrap)),i.appendChild(n),{render(o){for(let a of r)a.render(o)}}}var ln=Vm({base:/quantummelaninmedia\.com$/.test(location.hostname)?"/assets/audio/":"./assets/music/"}),yt=i=>document.getElementById(i),i0=yt("scene"),ri=new ya({canvas:i0,antialias:!0,powerPreference:"high-performance"});em(ri);ri.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5));ri.outputColorSpace=pt;ri.toneMapping=uo;ri.toneMappingExposure=.98;var In=new Ma,pn=new zt(Ut.fov,1,Ut.near,Ut.far),El=new URLSearchParams(location.search).has("lq")?"low":"high";El==="high"&&(ri.shadowMap.enabled=!0,ri.shadowMap.type=yh);var rs=El==="high"?new Ya(ri):null,Yu=null;rs&&(rs.addPass(new qa(In,pn)),Yu=new wr(new we(512,512),.52,.72,.86),rs.addPass(Yu),rs.addPass(new Ka));var Wu=()=>rs?rs.render():ri.render(In,pn);function s0(){let i=window.innerWidth,e=window.innerHeight;ri.setSize(i,e,!1),pn.aspect=i/e,pn.updateProjectionMatrix(),rs&&(rs.setSize(i,e),Yu.setSize(i,e))}window.addEventListener("resize",s0);s0();var gt=Bp(),ze=qm(),Dt=Jp(In),Wt=Wp(i0,yt("stick"),yt("knob"),{fire:yt("tFire"),blade:yt("tBlade"),ward:yt("tWard"),dash:yt("tDash"),swap:yt("tSwap"),jump:yt("tJump"),magic:yt("tMagic")}),rt=Wt.IN,Gt=Jm(),Xb=[yt("menuSound"),yt("pauseSound")].filter(Boolean).map(i=>Qm(i,()=>Gt,e=>To(is(Gt,e))));function To(i){Gt=i,jm(Gt),ln.setVolume(Gt.music),ln.setMuted(!Gt.musicOn),gt.setVolume(Gt.sfx),gt.setMuted(!Gt.sfxOn),ze.setMuted(!Gt.sfxOn,!Gt.musicOn);for(let e of Xb)e.render(Gt)}To(Gt);var F={scene:In,camera:pn,audio:gt,fx:Dt,hud:ze,input:Wt,assets:null,level:null,world:null,hero:null,foes:null,combat:null,boss:null,run:null,t:0,slowMul:1,H:null},Pt="menu",Xt="melvinci",qt="ramparts",os=null,vl=[],Ur=0,Ml=0,Or=-1,So=-1,ml=1,gl=0,Eo=0,ss=1,Is=0,Ps=0,xl=0,_l=1,yl=0,qu=!0,Bt={yaw:0,pitch:1,dist:1},bl=new N,e0=new N,r0=()=>{let i=["ramparts"];return xo("ramparts")&&i.push("venus"),xo("venus")&&i.push("archive"),i};function Yb(i,e){return{x:i,z:e,y:0,vy:0,onGround:!0,airJumps:1,vx:0,vz:0,fx:0,fz:-1,r:vn,alive:!0,invuln:0,dashT:0,dashCd:0,ddx:0,ddz:-1,ward:!1,wardT:9,wardBroken:0,parried:!1,shield:Zi,regenDelay:0,weapon:"single",power:1,owned:["single"],lives:Ja,fireCd:0,charge:0,charged:!1,wasFiring:!1,bladeN:0,bladeT:0,bladeWindow:0,mv:0,mvx:0,mvz:0,parryFlash:0,deadT:0,shotIx:0}}F.flash=(i,e)=>ze.flash(i,e);F.shake=i=>{Ur=Math.max(Ur,i)};F.hitstop=i=>{Ml=Math.max(Ml,i)};F.shove=(i,e,t)=>{F.H.vx+=i*t,F.H.vz+=e*t};F.wardBlocks=(i,e)=>{let t=F.H;if(!t.ward)return!1;let n=i-t.x,s=e-t.z,r=Math.hypot(n,s)||1;return(n*t.fx+s*t.fz)/r>Math.cos($i)};F.wardAbsorb=(i,e,t)=>{let n=F.H;return n.wardT<xp&&!n.parried?(n.parried=!0,F.run=Cp(F.run),F.powers&&F.powers.addMeter("parry"),n.parryFlash=.18,gt.sfx.parry(),Dt.ring(n.x,n.z,"#ffffff",2.4,.3),Dt.spawn(n.x+n.fx*.9,1.1,n.z+n.fz*.9,"#ffffff",10,{spd:4,up:2,size:.35}),ze.flash(F.run.parryChain>=3?"GOLD CANNON ARMED \u2014 FIRE":"PARRY",F.run.parryChain>=3?se.gold:se.cyan),F.hitstop(.05),"parry"):(n.shield-=i,n.regenDelay=Xh,gt.sfx.ward(),Dt.spawn(e+(n.x-e)*.5,1.1,t+(n.z-t)*.5,Ot[Xt].accent,5,{spd:2,up:1,size:.3}),F.shake(2),n.shield<=0?(n.shield=0,n.ward=!1,n.wardBroken=1.6,gt.sfx.shatter(),ze.flash("WARD SHATTERED",se.hotred),Dt.spawn(n.x,1.1,n.z,Ot[Xt].accent,20,{spd:5,up:3}),"shatter"):"block")};F.hurt=(i,e,t)=>{let n=F.H;if(!n.alive||n.invuln>0||n.dashT>0)return!1;if(F.combo.n=0,F.combo.t=0,ze.combo(0),n.lives--,F.run=Pp(F.run),n.invuln=cp,n.weapon="single",n.power=1,n.charge=0,n.charged=!1,n.ward=!1,F.hero.setWeaponColor(Mt.single.col),F.hero.hurtFlash(),gt.sfx.hurt(),F.shake(7),F.hitstop(.06),Dt.spawn(n.x,1.1,n.z,se.hotred,16,{spd:5,up:3}),Dt.ring(n.x,n.z,se.hotred,2.5,.4),e!==void 0){let s=n.x-e,r=n.z-t,o=Math.hypot(s,r)||1;F.shove(s/o,r/o,9)}return n.lives<=0?(n.alive=!1,n.deadT=1.6,ze.flash("THE LINE BREAKS",se.hotred)):ze.flash(n.lives===1?"LAST LIFE \u2014 HOLD THE LINE":"HIT \u2014 BLASTER RESET",se.hotred),!0};F.combo={n:0,t:0,best:0};F.comboHit=()=>{let i=F.combo;return i.n=i.t>0?i.n+1:1,i.t=ip,i.best=Math.max(i.best,i.n),ze.combo(i.n),1+Math.min(1.5,(i.n-1)*.08)};F.onKill=(i,e)=>{F.run=Rp(F.run,e||F.H.dashT>0),F.powers&&F.powers.addMeter("kill")};F.onStyle=i=>{F.run={...F.run,score:F.run.score+(i==="dash"?50:10)},i==="dash"&&ze.flash("DASHED THE WAVE",se.cyan)};F.onCrate=()=>{let i=tu(qt,F.run.pages);F.run=jh(F.run),eu(qt,i.id),ze.showPage(i),gt.sfx.page(),o0()};function o0(){ze.flash(`BLADE \xD7${nu(F.run.pages,F.H.power).toFixed(2)}`,se.gold)}F.onPickup=(i,e,t)=>{let n=F.H;i==="power"?(n.power=Math.min(Tr,n.power+1),setTimeout(o0,900),ze.flash(n.power===Tr?"POWER MAX":"POWER UP",se.gold)):(n.owned.includes(i)||n.owned.push(i),n.weapon=i,F.hero.setWeaponColor(Mt[i].col),ze.flash(Mt[i].name,Mt[i].col)),gt.sfx.pickup(),Dt.spawn(e,1.1,t,i==="power"?se.gold:Mt[i].col,16,{spd:4,up:4})};F.onBossDamage=i=>{F.run=Ip(F.run,i),ze.bossHp(F.boss.hp,F.boss.max)};F.onBossDead=()=>{gt.sfx.bossDie(),ze.flash(F.boss.name+" \u2014 DOWN",se.gold),F.shake(12),So=2.6,ze.hideBoss(),F.world.gate.open(),F.level.openGate()};var a0=i=>Lm(In,F.assets,i)||tm(In,Ot[i]),Ku=Object.keys(Ot),qb=1.5;function Kb(){let i=Zh("ramparts"),e=ou(In,i,Mn.ramparts,F.assets,{shadows:El==="high"});vl=Ku.map(a0),os={level:i,world:e,s:i.start}}function Zb(){if(os){os.world.dispose();for(let i of vl)i.dispose();os=null,vl=[]}}function $b(i,e){let t=os.s;vl.forEach((s,r)=>{let o=Ku[r]===Xt,a=t.x+(r-(Ku.length-1)/2)*qb;s.update(i,e,{x:a,z:t.z,fx:Math.sin(e*.4)*.3,fz:1,mv:0,mvx:0,mvz:0,dashing:!1,invuln:0,alive:!0,ward:!1,charge:Pt==="select"&&o?.5+Math.sin(e*4)*.3:0,firing:!1,parryFlash:0}),s.group.visible=!0});let n=e*.12;bl.set(t.x+Math.sin(n)*9,6.5,t.z+4+Math.cos(n)*5),pn.position.lerp(bl,Math.min(1,i*2)),pn.lookAt(t.x,1.4,t.z),os.world.update(i,e,t.x,t.z)}function wo(i,e){Zb(),l0(),qt=i,Xt=e;let t=Zh(i),n=ou(In,t,Mn[i],F.assets,{shadows:El==="high"});F.level=t,F.world=n,F.hero=a0(e),F.H=Yb(t.start.x,t.start.z),F.foes=Gm(In,F),F.combat=Xm(In,F),F.powers=Fm(In,F,e),F.boss=Ym(In,F,Mn[i].boss),F.run=Ap(e,i),F.t=0,So=-1,Or=-1;for(let s of t.foes)F.foes.spawn(s.type,s.x,s.z);for(let s of t.boxes)F.combat.spawnCrate(s);ze.setHero(Ot[e]),ze.setWorld(Mn[i]),ze.hideBoss(),ze.show(null),ze.flash(Mn[i].name,Mn[i].accent),ze.hint(rt.touch?"":Vp),pn.position.set(F.H.x+Ut.off[0],Ut.off[1],F.H.z+Ut.off[2]),pn.lookAt(F.H.x,1,F.H.z),Pt="play",Wt.clearEdges(),ln.play(i),qu=!0}function l0(){F.level&&(F.powers&&(F.powers.dispose(),F.powers=null),F.world.dispose(),F.hero.dispose(),F.foes.clear(),F.combat.clear(),F.boss&&F.boss.dispose(),Dt.clear(),F.level=null,F.boss=null)}function t0(i){let e=Qh(F.run);Fp(F.run);let t=ti.indexOf(qt),n=i&&t<ti.length-1?ti[t+1]:null;ze.renderEnd(F.run,e,Mn[qt],i,n),ze.show("endPop"),Pt="end",ze.hint(""),ln.play(i?"win":"menu")}function Jb(i){let e=F.H,t=F.level;F.slowMul=1,F.combat.update(i),Wt.update(pn,e.x,e.z);for(let p of["invuln","dashCd","fireCd","regenDelay","wardBroken","bladeT","bladeWindow","parryFlash"])e[p]>0&&(e[p]-=i);if(e.bladeWindow<=0&&e.chain&&(e.chain=0),!e.alive){e.deadT-=i,e.mv=0,e.deadT<=0&&Or<0&&(Or=.01);return}if(Wt.pressed("dash")&&e.dashCd<=0&&e.dashT<=0){e.dashT=op,e.dashCd=Wh,e.invuln=Math.max(e.invuln,ap);let p=Math.hypot(rt.mx,rt.mz);e.ddx=p>.1?rt.mx/p:e.fx,e.ddz=p>.1?rt.mz/p:e.fz,e.ward=!1,gt.sfx.dash(),Dt.ring(e.x,e.z,Ot[Xt].accent,1.8,.3),Dt.spawn(e.x,.4,e.z,Ot[Xt].accent,6,{spd:2,up:1,size:.35})}if(e.dashT>0){e.dashT-=i;let p=e.longDash?3:1;Math.random()<i*40*p&&Dt.spawn(e.x-e.ddx*.4,e.y+.6+Math.random()*.8,e.z-e.ddz*.4,Ot[Xt].accent,e.longDash?3:2,{spd:1,up:.3,size:e.longDash?.55:.4,life:.4,grav:0}),e.dashT<=0&&(e.longDash=!1)}let n=rt.ward&&e.shield>0&&e.wardBroken<=0&&e.dashT<=0&&e.bladeT<=0;n&&!e.ward?(e.ward=!0,e.wardT=0,e.parried=!1,gt.sfx.ward()):n||(e.ward=!1),e.ward?(e.wardT+=i,e.shield-=pp*i,e.regenDelay=Xh,e.shield<=0&&(e.shield=0,e.ward=!1,e.wardBroken=1.6,gt.sfx.shatter(),ze.flash("WARD SHATTERED",se.hotred))):e.regenDelay<=0&&e.shield<Zi&&(e.shield=Math.min(Zi,e.shield+mp*i));let s=ei[(e.bladeN%mo+mo)%mo],r=Kp(e.bladeT,s.t),o=Math.hypot(rt.mx,rt.mz),a=$a*(e.ward?.55:1)*(rt.sprint&&!e.ward?1.55:1)*F.slowMul*r,l,c;if(e.dashT>0){let p=e.longDash?Gh*1.15:Gh;l=e.ddx*p,c=e.ddz*p}else l=rt.mx*a,c=rt.mz*a;l+=e.vx,c+=e.vz,e.vx*=Math.pow(.02,i),e.vz*=Math.pow(.02,i),Wt.pressed("jump")&&(e.onGround?(e.vy=ep,e.onGround=!1,gt.beep(420,.12,"sine",.08,820),Dt.ring(e.x,e.z,Ot[Xt].accent,1.4,.25,e.y+.06)):e.airJumps>0&&(e.airJumps--,e.vy=tp,e.flipT=Vh,gt.beep(620,.12,"sine",.08,1200),Dt.spawn(e.x,e.y+.2,e.z,Ot[Xt].accent,12,{spd:3,up:-1,size:.45}))),e.flipT=Math.max(0,(e.flipT||0)-i),e.vy-=np*i,e.y+=e.vy*i;let h=Ar(t,e.x,e.z,vn,l*i,c*i,e.y);e.speed=i>0?Math.hypot(h.x-e.x,h.z-e.z)/i:0,e.x=h.x,e.z=h.z,t.solidCell(Math.floor(e.x/2),Math.floor(e.z/2),e.y)?e.safeX!==void 0&&(e.x=e.safeX,e.z=e.safeZ,e.vx=e.vz=0,e.dashT=0,e.longDash=!1):(e.safeX=e.x,e.safeZ=e.z);let u=Tp(t,e.x,e.z,e.y);e.y<=u?(!e.onGround&&e.vy<-7&&(F.shake(2),Dt.ring(e.x,e.z,"#c8b8a0",1.6,.3,u+.06)),e.y=u,e.vy=0,e.onGround=!0,e.airJumps=1):e.onGround=!1,e.mv=e.dashT>0?1:Math.min(1,o),e.mvx=e.dashT>0?e.ddx:o>.05?rt.mx/o:0,e.mvz=e.dashT>0?e.ddz:o>.05?rt.mz/o:0,e.mv>.05&&Math.random()<i*8&&e.dashT<=0&&e.onGround&&Dt.spawn(e.x-e.mvx*.3,e.y+.1,e.z-e.mvz*.3,"#8a7560",1,{spd:.6,up:.8,size:.3,life:.4}),e.fx+=(rt.aimX-e.fx)*Math.min(1,i*18),e.fz+=(rt.aimZ-e.fz)*Math.min(1,i*18);let d=Math.hypot(e.fx,e.fz)||1;e.fx/=d,e.fz/=d;let f=rt.fire&&e.bladeT<=0;if(f?(F.run.parryChain>=3&&Wt.pressed("fire")?(F.run=Np(F.run),F.combat.fire(e,"single",Tr,!0),gt.sfx.charged(),ze.flash("GOLD CANNON",se.gold),F.shake(6),F.boss&&F.boss.alive&&F.boss.awake&&(F.boss.stun=1.6,ze.flash("GOLD CANNON \u2014 BOSS STUNNED",se.gold))):e.fireCd<=0&&(e.fireCd=Mt[e.weapon].cd,F.combat.fire(e,e.weapon,e.power,!1),gt.sfx.shoot(e.weapon),Dt.spawn(e.x+e.fx*1.1,1.05,e.z+e.fz*1.1,Mt[e.weapon].col,2,{spd:1.5,up:.6,size:.3,life:.25})),e.charge=Math.min(Es,e.charge+i),e.charge>=Es&&!e.charged&&(e.charged=!0,gt.sfx.chargeFull()),e.charge>.3&&Math.random()<i*30&&Dt.spawn(e.x+e.fx*.9+(Math.random()-.5),1.05+(Math.random()-.5),e.z+e.fz*.9+(Math.random()-.5),Mt[e.weapon].col,1,{spd:.2,up:.3,size:.3,life:.3,grav:-3})):e.wasFiring&&(e.charged&&(F.hero.playOnce&&F.hero.playOnce("Spellcast_Shoot",1.8),F.combat.fire(e,e.weapon,e.power,!0),gt.sfx.charged(),ze.flash(hp[e.weapon],Mt[e.weapon].col),F.shake(4),Dt.ring(e.x,e.z,Mt[e.weapon].col,2.6,.35)),e.charge=0,e.charged=!1),e.wasFiring=f,Wt.pressed("fire"),Wt.pressed("blade")&&e.bladeT<=0){let p=e.bladeWindow>0?(e.bladeN+1)%mo:0,g=ei[p];e.bladeN=p,e.bladeT=g.t,e.bladeWindow=fp+g.t;let m=e.dashT>0||e.dashCd>Wh-.12,v=F.foes.nearestInArc?F.foes.nearestInArc(e,g.arc,g.reach+2.2):null,b=v?v.d-g.reach*.75:1/0,M=qp(b,g.launch?1.5:.9,!!v),w=m?dp:Math.min(4.5,M/Math.max(.12,g.t));e.vx+=e.fx*w,e.vz+=e.fz*w,g.preFreeze&&F.hitstop(g.preFreeze),F.hero.playBlade(p,g.speed,!g.unarmed,{col:g.col,trailLife:g.launch?.34:.22});let S=$p(e.chain||0),T=F.combat.bladeStrike(p,m,S,nu(F.run.pages,e.power));T?(e.chain=(e.chain||0)+1,F.hitstop(g.hitstop*(.85+S*.3)),g.launch?(gt.sfx.berserkHit(),ze.flash(g.name,g.col)):gt.sfx.bladeHit(S),F.shake(g.shake*S),F.powers.addMeter("bladeHit",T),e.chain>=2&&ze.combo(e.chain)):(e.chain=0,gt.sfx.blade(p))}Wt.pressed("swap")&&e.owned.length>1&&(e.weapon=e.owned[(e.owned.indexOf(e.weapon)+1)%e.owned.length],F.hero.setWeaponColor(Mt[e.weapon].col),gt.sfx.ui(),ze.flash(Mt[e.weapon].name,Mt[e.weapon].col)),F.powers.update(i,e,p=>Wt.pressed(p));let x=F.boss;if(x&&x.alive&&!x.awake){let p=t.roomAt(e.x,e.z),g=t.gateCells[0];p&&p.kind==="boss"&&Math.hypot(e.x-(g[0]+.5)*2,e.z-(g[1]+.5)*2)>3.2&&(x.awake=!0,t.sealGate(),F.world.gate.seal(),ze.boss(x.name),ze.bossHp(x.hp,x.max),ze.flash(x.wake,se.hotred),gt.sfx.bossWake(),ln.play("boss"),F.run=Dp(F.run),F.combat.clearEnemyShots(),F.shake(8))}}var n0=performance.now();function c0(i){requestAnimationFrame(c0);let e=Math.min(.05,(i-n0)/1e3);n0=i,h0(e)}function h0(i){let e=i;if(Ml>0&&(Ml-=i,e=i*.08),F.t+=e,Pt==="menu"||Pt==="select"||Pt==="world"||Pt==="codex"){os&&$b(e,F.t),Dt.update(e),Wu();return}if(Pt==="play"){if(Wt.pressed("pause")){Pt="pause",ze.show("pausePop"),ln.duck(!0);return}if(Wt.pressed("mute")&&To(is(Gt,{musicOn:!Gt.musicOn})),Wt.pressed("nexttrack")&&ln.next(),F.run=Lp(F.run,e),F.combo.t>0&&(F.combo.t-=e,F.combo.t<=0&&(F.combo.n=0,ze.combo(0))),Jb(e),F.foes.update(e),F.boss&&F.boss.update(e),F.world.update(e,F.t,F.H.x,F.H.z),Dt.update(e),F.hero.update(e,F.t,{x:F.H.x,y:F.H.y,air:!F.H.onGround,flip:F.H.flipT>0&&!F.H.onGround?1-F.H.flipT/Vh:0,longDash:!!F.H.longDash,sprint:rt.sprint,z:F.H.z,fx:F.H.fx,fz:F.H.fz,mv:F.H.mv,mvx:F.H.mvx,mvz:F.H.mvz,speed:F.H.speed||0,dashing:F.H.dashT>0,invuln:F.H.invuln,alive:F.H.alive,ward:F.H.ward,charge:F.H.charge/Es,firing:rt.fire&&F.H.bladeT<=0,parryFlash:F.H.parryFlash}),ze.update(e,F.H,F.run,Mn[qt]),So>0&&(So-=e,So<=0)){let m=tu(qt,F.run.pages);F.run=jh(F.run),eu(qt,m.id),ze.showPage(m),t0(!0);return}if(Or>0&&(Or-=e,Or<=0)){t0(!1);return}}if(!F.H){Wu();return}let t=F.H;Ur=Math.max(0,Ur-e*22);let n=F.level&&(()=>{let m=F.level.roomAt(t.x,t.z);return m&&m.kind==="boss"})();if(ml+=((n?Ut.bossZoom:1)-ml)*Math.min(1,e*2),rt.orbit&&(Bt.yaw-=rt.orbitDX*.006,Bt.pitch=Math.max(.25,Math.min(1.9,Bt.pitch-rt.orbitDY*.004))),rt.orbitDX=0,rt.orbitDY=0,rt.zoom&&(Bt.dist=Math.max(.35,Math.min(1.8,Bt.dist*(1+rt.zoom*.08))),rt.zoom=0),Wt.pressed("camreset")&&(Bt.yaw=0,Bt.pitch=1,Bt.dist=1,ze.flash("CAMERA RESET",se.cyan)),qu){qu=!1,Eo=0,ss=1,Bt.yaw=0,Is=t.fx*1.2,Ps=t.fz*1.2,xl=t.x+Is,_l=Ut.lookHeight+t.y*.8,yl=t.z+Ps;let m=Ut.off[2]*Bt.dist,v=Ut.off[1]*Bt.dist*Bt.pitch;pn.position.set(t.x+Ut.off[0]+Is,t.y*.75+v,t.z+m+Ps)}let r=!rt.orbit&&gl<=0?Xp(t.mvx,t.mvz,Bt.yaw,t.mv):0;Eo=Ji(Eo,r,Gn.yawAccel,e),rt.orbit&&(Eo=0),Bt.yaw+=Eo*e,rt.orbit?gl=1.6:gl>0&&(gl-=e);let o=rt.orbit?0:1.2;Is=Ji(Is,t.fx*o,Gn.leadFollow,e),Ps=Ji(Ps,t.fz*o,Gn.leadFollow,e);let a=Ut.off[0],l=Ut.off[2]*ml*Bt.dist,c=Ut.off[1]*ml*Bt.dist*Bt.pitch,h=Math.sin(Bt.yaw),u=Math.cos(Bt.yaw),d=u*a+h*l,f=-h*a+u*l,x=1;if(F.level&&!rt.orbit){let m=t.y+1.2;for(;x>.3&&Ss(F.level,t.x,t.z,t.x+d*x,t.z+f*x,m);)x-=.04;Math.hypot(d,f)*x<Ut.minDist&&(x=Math.max(x,Ut.minDist/(Math.hypot(d,f)||1)))}ss=Ji(ss,x,x<ss?Gn.pullInRate:Gn.pullOutRate,e);let p=(1-ss)*1.1;bl.set(t.x+d*ss+Is,t.y*.75+c*(.55+.45*ss)+p,t.z+f*ss+Ps);let g=1-Math.exp(-(rt.orbit?14:Gn.follow)*e);pn.position.lerp(bl,g),xl=Ji(xl,t.x+Is,Gn.lookFollow,e),_l=Ji(_l,Ut.lookHeight+t.y*.8,Gn.lookFollow,e),yl=Ji(yl,t.z+Ps,Gn.lookFollow,e),e0.set(xl+(Math.random()-.5)*Ur*.08,_l+(Math.random()-.5)*Ur*.08,yl),pn.lookAt(e0),Wu()}function Zu(){l0(),os||Kb(),Pt="menu",ze.show("menu"),ze.hideBoss(),ln.moment&&ln.play("menu")}yt("start").onclick=()=>{gt.init(),gt.sfx.ui(),ln.play("menu"),Pt="select",ze.renderSelect(Xt),ze.show("select")};yt("codexBtn").onclick=()=>{gt.init(),ze.renderCodex(),Pt="codex",ze.show("codexPop")};yt("cxBack").onclick=()=>{Pt="menu",ze.show("menu")};document.querySelectorAll(".selcard.hero[data-hero]").forEach(i=>{i.onclick=()=>{Xt=i.dataset.hero,ze.renderSelect(Xt),gt.sfx.ui()}});yt("confirm").onclick=()=>{Pt="world",ze.renderWorlds(qt,r0()),ze.show("worldSel")};yt("wrow").onclick=i=>{let e=i.target.closest(".wcard");!e||e.classList.contains("locked")||(qt=e.dataset.w,ze.renderWorlds(qt,r0()),gt.sfx.ui())};yt("wconfirm").onclick=()=>{gt.init(),wo(qt,Xt)};yt("backSel").onclick=()=>{Pt="select",ze.show("select")};yt("resume").onclick=()=>{Pt="play",ze.show(null),Wt.clearEdges(),ln.duck(!1)};yt("quit").onclick=()=>Zu();yt("again").onclick=()=>wo(qt,Xt);yt("nextWorld").onclick=()=>{let i=ti.indexOf(qt);wo(ti[Math.min(i+1,ti.length-1)],Xt)};yt("toMenu").onclick=()=>Zu();yt("pauseBtn").onclick=()=>{Pt==="play"&&(Pt="pause",ze.show("pausePop"),ln.duck(!0))};yt("muteBtn").onclick=()=>To(is(Gt,{musicOn:!Gt.musicOn}));yt("sfxBtn").onclick=()=>To(is(Gt,{sfxOn:!Gt.sfxOn}));window.addEventListener("keydown",i=>{i.code==="KeyP"&&Pt==="pause"&&(Pt="play",ze.show(null),Wt.clearEdges(),ln.duck(!1)),i.code==="KeyN"&&Pt!=="play"&&ln.next()});window.__unerased={G:F,ready:!1,get mode(){return Pt},step:i=>h0(i),start:(i,e)=>wo(i||qt,e||Xt),warp:i=>{wo(i||qt,Xt);let e=F.level.gateCells[0];F.H.x=(e[0]+.5)*2,F.H.z=(e[1]+.5)*2+3,pn.position.set(F.H.x,Ut.off[1],F.H.z+Ut.off[2])},toBoss:()=>{let i=F.level.gateCells[0];F.H.x=(i[0]+.5)*2,F.H.z=(i[1]+.5)*2-6},snapshot:()=>({mode:Pt,world:qt,hero:Xt,H:F.H&&{x:F.H.x,y:F.H.y,onGround:F.H.onGround,z:F.H.z,lives:F.H.lives,weapon:F.H.weapon,alive:F.H.alive},foes:F.foes&&F.foes.aliveCount(),boss:F.boss&&{awake:F.boss.awake,hp:F.boss.hp,alive:F.boss.alive},run:F.run,fx:Dt.count}),press:i=>Wt.press(i),IN:rt,music:ln,combo:()=>F.combo,fillMeter:()=>{F.powers&&(F.powers.meter=100)},setMeter:i=>{F.powers&&(F.powers.meter=i)}};var u0=yt("start"),Xu=yt("loadLine");u0.disabled=!0;Cm(i=>{Xu.textContent=`SUMMONING THE WARRIORS \xB7 ${Math.round(i*100)}%`}).then(i=>{F.assets=i,Xu.textContent=i.missing.length?"READY \xB7 missing: "+i.missing.join(", "):""}).catch(i=>{F.assets=null,Xu.textContent="READY (classic models) \xB7 "+i.message}).finally(()=>{u0.disabled=!1,Zu(),window.__unerased.ready=!0});requestAnimationFrame(c0);})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
