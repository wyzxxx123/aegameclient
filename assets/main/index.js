System.register("chunks:///_virtual/Label3D.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,i,s,n,a,h,r,o,u,_,l,p,c,d,v,g,m;return{setters:[function(t){e=t.applyDecoratedDescriptor,i=t.inheritsLoose,s=t.initializerDefineProperty,n=t.assertThisInitialized,a=t.createClass},function(t){h=t.cclegacy,r=t._decorator,o=t.Material,u=t.Size,_=t.Vec2,l=t.Label,p=t.MeshRenderer,c=t.utils,d=t.ImageAsset,v=t.Texture2D,g=t.RenderTexture,m=t.Component}],execute:function(){var x,f,R,y,M,D,S;h._RF.push({},"72d62BAtutJnJHuMExfyoWO","Label3D",void 0);var w=r.ccclass,b=r.property,z=r.executeInEditMode,L=t("BASELINE_RATIO",.26);t("Label3D",(x=w("Label3D"),f=b({displayOrder:2,multiline:!0}),R=b({type:o,displayOrder:2}),x(y=z((D=e((M=function(t){function e(){for(var e,i=arguments.length,a=new Array(i),h=0;h<i;h++)a[h]=arguments[h];return e=t.call.apply(t,[this].concat(a))||this,s(e,"_string",D,n(e)),s(e,"_material",S,n(e)),e._splitStrings=[],e._assemblerData=null,e._context=null,e._canvas=null,e._texture=null,e._meshRender=null,e._canvasSize=new u,e._worldBounds=null,e._uvs=[],e._positions=[],e._startPosition=new _,e}i(e,t);var h=e.prototype;return h.onLoad=function(){this.initMeshRender()},h.onEnable=function(){this._assemblerData=l._canvasPool.get(),this.updateRenderData()},h.start=function(){this.updateRenderData()},h.updateRenderData=function(){this._assemblerData&&(this._context=this._assemblerData.context,this._canvas=this._assemblerData.canvas,this.initTexture2D(),this.updateFontFormatting(),this.updateFontCanvasSize(),this.updateRenderMesh(),this.updateFontRenderingStyle(),this.updateTexture(),this.updateMaterial(),this.resetRenderData())},h.initMeshRender=function(){this._meshRender=this.node.getComponent(p),this._meshRender||(this._meshRender=this.node.addComponent(p)),this.initRenderMesh()},h.initRenderMesh=function(){var t;this._positions.push(-.5,-.5,0),this._uvs.push(0,1),this._positions.push(.5,-.5,0),this._uvs.push(1,1),this._positions.push(-.5,.5,0),this._uvs.push(0,0),this._positions.push(-.5,.5,0),this._uvs.push(0,0),this._positions.push(.5,-.5,0),this._uvs.push(1,1),this._positions.push(.5,.5,0),this._uvs.push(1,0),this._meshRender.mesh=c.MeshUtils.createMesh({positions:this._positions,uvs:this._uvs,minPos:{x:-.5,y:-.5,z:0},maxPos:{x:.5,y:.5,z:0}}),null==(t=this._meshRender.model)||t.updateWorldBound(),this.updateMeshRenderMaterial()},h.updateMeshRenderMaterial=function(){this._meshRender&&this._material&&(this._meshRender.material=this._material)},h.initTexture2D=function(){if(!this._texture){var t=new d(this._canvas);this._texture=new v,this._texture.image=t}},h.updateTexture=function(){if(this._context&&this._canvas){this._context.clearRect(0,0,this._canvas.width,this._canvas.height);for(var t=0,e=0,i=0;i<this._splitStrings.length;i++){e=this._startPosition.y+(i+1)*this.getLineHeight();var s=this._context.measureText(this._splitStrings[i]).width;t=(this._canvas.width-s)/2,this._context.fillText(this._splitStrings[i],t,e)}0!==this._canvas.width&&0!==this._canvas.height&&(this._texture.reset({width:this._canvas.width,height:this._canvas.height,mipmapLevel:1}),this._texture.uploadData(this._canvas),this._texture.setWrapMode(g.WrapMode.CLAMP_TO_EDGE,g.WrapMode.CLAMP_TO_EDGE))}},h.updateMaterial=function(){this._texture&&(this._meshRender&&this._material&&this._meshRender.getMaterialInstance(0).setProperty("mainTexture",this._texture))},h.updateFontFormatting=function(){if(this._context){var t=this._string.split("\\n");this._splitStrings=t;for(var e=0;e<t.length;e++){var i=this._context.measureText(t[e]).width;i>this._canvasSize.width&&(this._canvasSize.width=i)}this._canvasSize.height=t.length*this.getLineHeight()+L*this.getLineHeight()}},h.updateFontCanvasSize=function(){this._canvasSize.width=Math.min(this._canvasSize.width,2048),this._canvasSize.height=Math.min(this._canvasSize.height,2048),this._canvas.width!=this._canvasSize.width&&(this._canvas.width=this._canvasSize.width),this._canvas.height!=this._canvasSize.height&&(this._canvas.height=this._canvasSize.height),this._context.font=this.getFontDesc()},h.updateFontRenderingStyle=function(){this._context.font=this.getFontDesc(),this._context.lineJoin="round",this._context.textAlign="left",this._context.textBaseline="alphabetic",this._context.fillStyle="rgba(255, 255, 255, 255)"},h.updateRenderMesh=function(){var t,e=this._canvas.width/this._canvas.height;this._positions=[],this._positions.push(-.5*e,-.5,0),this._positions.push(.5*e,-.5,0),this._positions.push(-.5*e,.5,0),this._positions.push(-.5*e,.5,0),this._positions.push(.5*e,-.5,0),this._positions.push(.5*e,.5,0),this._meshRender.mesh=c.MeshUtils.createMesh({positions:this._positions,uvs:this._uvs,minPos:{x:-.5,y:-.5,z:0},maxPos:{x:.5,y:.5,z:0}}),null==(t=this._meshRender.model)||t.updateWorldBound(),this.updateMeshRenderMaterial()},h.getLineHeight=function(){return 50},h.getFontDesc=function(){return"50px ","Arial","50px Arial"},h.resetRenderData=function(){this._canvasSize.width=0,this._canvasSize.height=0},h.update=function(t){},h.onDisable=function(){this._assemblerData&&l._canvasPool.put(this._assemblerData),this._meshRender=null},a(e,[{key:"string",get:function(){return this._string},set:function(t){t=null==t?"":t.toString(),this._string!==t&&(this._string=t,this.updateRenderData())}},{key:"material",get:function(){return this._material},set:function(t){this._material=t,this.updateMeshRenderMaterial()}}]),e}(m)).prototype,"_string",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),e(M.prototype,"string",[f],Object.getOwnPropertyDescriptor(M.prototype,"string"),M.prototype),S=e(M.prototype,"_material",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),e(M.prototype,"material",[R],Object.getOwnPropertyDescriptor(M.prototype,"material"),M.prototype),y=M))||y)||y));h._RF.pop()}}}));

System.register("chunks:///_virtual/LoginHandler.ts",["./rollupPluginModLoBabelHelpers.js","cc","./NetworkManager.ts"],(function(n){var t,e,r,o,i,a,s,c,u,l,p;return{setters:[function(n){t=n.applyDecoratedDescriptor,e=n.inheritsLoose,r=n.initializerDefineProperty,o=n.assertThisInitialized,i=n.asyncToGenerator,a=n.regeneratorRuntime},function(n){s=n.cclegacy,c=n._decorator,u=n.Button,l=n.Component},function(n){p=n.NetworkManager}],execute:function(){var g,d,f,h,y;s._RF.push({},"76c1cN8m5pGLKMag4p1tcze","LoginHandler",void 0);var L=c.ccclass,v=c.property;n("LoginHandler",(g=L("LoginHandler"),d=v({type:u}),g((y=t((h=function(n){function t(){for(var t,e=arguments.length,i=new Array(e),a=0;a<e;a++)i[a]=arguments[a];return t=n.call.apply(n,[this].concat(i))||this,r(t,"loginButton",y,o(t)),t._isLoggedIn=!1,t._rid=null,t._key=null,t}e(t,n);var s=t.prototype;return s.onLoad=function(){this.loginButton&&this.loginButton.node.on(u.EventType.CLICK,this.onLoginButtonClick,this)},s.onLoginButtonClick=function(){var n=i(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!this._isLoggedIn){n.next=2;break}return n.abrupt("return");case 2:return"user","password",n.next=6,p.instance.login("user","password");case 6:(t=n.sent)?(this._isLoggedIn=!0,p.instance.connectWebSocket(t.host_port,t.rid,t.key),this.loginButton.node.active=!1):console.error("登录失败");case 8:case"end":return n.stop()}}),n,this)})));return function(){return n.apply(this,arguments)}}(),t}(l)).prototype,"loginButton",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),f=h))||f));s._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./Label3D.ts","./LoginHandler.ts","./NavMesh.ts","./NetworkManager.ts","./PlayerControl.ts","./TerrainToObj.ts","./TheLowerHeight.ts"],(function(){return{setters:[null,null,null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/NavMesh.ts",["./rollupPluginModLoBabelHelpers.js","cc","./NetworkManager.ts","./Label3D.ts"],(function(t){var e,n,r,o,a,i,s,c,l,u,p,f,h,b,v,y;return{setters:[function(t){e=t.applyDecoratedDescriptor,n=t.inheritsLoose,r=t.initializerDefineProperty,o=t.assertThisInitialized,a=t.asyncToGenerator,i=t.regeneratorRuntime},function(t){s=t.cclegacy,c=t._decorator,l=t.Button,u=t.Prefab,p=t.director,f=t.instantiate,h=t.Vec3,b=t.Component},function(t){v=t.NetworkManager},function(t){y=t.Label3D}],execute:function(){var d,g,w,P,B,k,m,C,M;s._RF.push({},"a3b22TBLAZMfqkhRpkJhAXF","NavMesh",void 0);var N=c.ccclass,L=c.property;t("NavMesh",(d=N("NavMesh"),g=L({type:l}),w=L({type:u}),P=L({type:u}),d((m=e((k=function(t){function e(){for(var e,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return e=t.call.apply(t,[this].concat(a))||this,r(e,"testButton",m,o(e)),r(e,"characterPrefab",C,o(e)),r(e,"labelPrefab",M,o(e)),e}n(e,t);var s=e.prototype;return s.onLoad=function(){this.testButton&&this.testButton.node.on(l.EventType.CLICK,this.onTestButtonClick,this),p.getScene().on("nav-result",this.onNavShow,this)},s.onNavShow=function(t){var e=this;console.log("pos:",t.length),t.forEach((function(t){var n=f(e.characterPrefab);n.scale=new h(10,10,10),n.setPosition(t);var r=f(e.labelPrefab);r.position=new h(0,.07,0),r.scale=new h(.01,.01,.01),r.getComponent(y).string=n.position.toString(),n.addChild(r),e.node.addChild(n)}))},s.onTestButtonClick=function(){var t=a(i().mark((function t(){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:v.instance.send({type:"test-nav",position:new h(0,0,0)});case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),e}(b)).prototype,"testButton",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),C=e(k.prototype,"characterPrefab",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),M=e(k.prototype,"labelPrefab",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),B=k))||B));s._RF.pop()}}}));

System.register("chunks:///_virtual/NetworkManager.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,n,o,r,s;return{setters:[function(e){t=e.createClass,n=e.asyncToGenerator,o=e.regeneratorRuntime},function(e){r=e.cclegacy,s=e.director}],execute:function(){r._RF.push({},"4251b/b3jlPZbOABzHxtiGA","NetworkManager",void 0),e("NetworkManager",function(){function e(){this.ws=null,this._http_url="http://192.168.0.14:2551/api/",this.rid=""}var r=e.prototype;return r.login=function(){var e=n(o().mark((function e(t,n){var r,s;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(this._http_url,{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({account:t,password:n})});case 3:if(!(r=e.sent).ok){e.next=12;break}return e.next=7,r.json();case 7:return s=e.sent,console.info("response.ok:",s),e.abrupt("return",{host_port:s.host_port,rid:s.rid,key:s.key});case 12:console.error("Response failed:",r);case 13:return e.abrupt("return",null);case 16:return e.prev=16,e.t0=e.catch(0),console.error("Login failed:",e.t0),e.abrupt("return",null);case 20:case"end":return e.stop()}}),e,this,[[0,16]])})));return function(t,n){return e.apply(this,arguments)}}(),r.connectWebSocket=function(e,t,n){var o=this;this.ws||(this.ws=new WebSocket("http://"+e+"/ws/"+t),this.rid=t,this.ws.onopen=function(){console.log("WebSocket connected"),s.getScene().emit("websocket-connected"),o.send({type:"scene-login",key:n})},this.ws.onmessage=function(e){o.handleMessage(e.data)},this.ws.onclose=function(){console.log("WebSocket disconnected"),o.ws=null})},r.handleMessage=function(e){try{var t=JSON.parse(e);switch(t.type){case"other-login":s.getScene().emit("other-login-success",t.role_id,t.position,t.direction);break;case"scene-login":s.getScene().emit("scene-login-success",t.position,t.direction);break;case"test-nav":s.getScene().emit("nav-result",t.positions);break;case"other-infos":s.getScene().emit("other-infos",t.base);break;case"leave":s.getScene().emit("other-leave",t.role_id);break;case"other-movement":s.getScene().emit("other-move",t.role_id,t.position,t.direction);break;case"transform":t.valid?s.getScene().emit("transform-valid"):s.getScene().emit("transform-invalid",t.position,t.direction)}}catch(t){console.error("Message parse error:",t,e)}},r.send=function(e){var t;(null==(t=this.ws)?void 0:t.readyState)===WebSocket.OPEN&&this.ws.send(JSON.stringify(e))},t(e,null,[{key:"instance",get:function(){return this._instance||(this._instance=new e),this._instance}}]),e}())._instance=void 0,r._RF.pop()}}}));

System.register("chunks:///_virtual/PlayerControl.ts",["./rollupPluginModLoBabelHelpers.js","cc","./NetworkManager.ts","./Label3D.ts"],(function(t){var e,n,i,o,a,r,s,h,l,c,d,_,u,p,f,m,g,b,y,v,w;return{setters:[function(t){e=t.applyDecoratedDescriptor,n=t.inheritsLoose,i=t.initializerDefineProperty,o=t.assertThisInitialized},function(t){a=t.cclegacy,r=t._decorator,s=t.Prefab,h=t.Node,l=t.Vec3,c=t.Quat,d=t.input,_=t.Input,u=t.director,p=t.instantiate,f=t.Animation,m=t.KeyCode,g=t.EventMouse,b=t.math,y=t.Component},function(t){v=t.NetworkManager},function(t){w=t.Label3D}],execute:function(){var S,E,P,C,T,K,M,N,R,k,D,Y,O,U;a._RF.push({},"637df8m5n1H6p2sjq3MAni3","PlayerControl",void 0);var I=r.ccclass,A=r.property;t("PlayerControl",(S=I("PlayerControl"),E=A({type:s}),P=A({type:h}),C=A({type:s}),S((M=e((K=function(t){function e(){for(var e,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))||this)._lastPosition=new l,e._lastRotation=new c,i(e,"characterPrefab",M,o(e)),i(e,"cameraNode",N,o(e)),i(e,"moveSpeed",R,o(e)),i(e,"rotateSpeed",k,o(e)),i(e,"lookSpeed",D,o(e)),i(e,"maxPitch",Y,o(e)),i(e,"minPitch",O,o(e)),i(e,"labelPrefab",U,o(e)),e._character=null,e._keyStates=new Map,e._pendingPosition=null,e._pendingRotation=null,e._isLoggedIn=!1,e._animationComponent=null,e._dl=null,e._camera_local=new l(0,.15,-.25),e._cameraPivot=void 0,e._other_role=new Map,e._turnCameraEnabled=!1,e._turnRolerEnabled=!1,e._role_dir=new l,e}n(e,t);var a=e.prototype;return a.onLoad=function(){d.on(_.EventType.MOUSE_DOWN,this.onMouseDown.bind(this),this),d.on(_.EventType.MOUSE_UP,this.onMouseUp.bind(this),this),d.on(_.EventType.MOUSE_MOVE,this.onMouseMove.bind(this),this),d.on(_.EventType.KEY_DOWN,this.onKeyDown.bind(this),this),d.on(_.EventType.KEY_PRESSING,this.onKeyPressing.bind(this),this),d.on(_.EventType.KEY_UP,this.onKeyUp.bind(this),this),u.getScene().on("transform-valid",this.onTransformValid.bind(this),this),u.getScene().on("transform-invalid",this.onTransformInvalid.bind(this),this),u.getScene().on("scene-login-success",this.onLoginSuccess.bind(this),this),u.getScene().on("other-login-success",this.onOtherLoginSuccess.bind(this),this),u.getScene().on("other-move",this.onOtherMove.bind(this),this),u.getScene().on("other-leave",this.onOtherLeave.bind(this),this),u.getScene().on("other-infos",this.onOtherInfos.bind(this),this)},a.onOtherInfos=function(t){var e=this;t.forEach((function(t){var n;console.log("base:",t);var i=p(e.characterPrefab);i.scale=new l(10,10,10),e._other_role[t.role_id]=i,i.setPosition(t.position),e.node.addChild(i);var o=p(e.labelPrefab);o.position=new l(0,.07,0),o.scale=new l(.01,.01,.01),o.getComponent(w).string=t.role_id.toString(),i.addChild(o),null==(n=i.getComponent(f).getState("idle"))||n.play()}))},a.onOtherLeave=function(t){if(this._other_role[t]){var e=this._other_role[t];this.node.removeChild(e),this._other_role[t]=null}},a.onOtherLoginSuccess=function(t,e,n){var i;if(!this._other_role[t]){var o=p(this.characterPrefab);o.scale=new l(10,10,10),this._other_role[t]=o,o.setPosition(e),this.node.addChild(o);var a=p(this.labelPrefab);a.position=new l(0,.07,0),a.scale=new l(.01,.01,.01),a.getComponent(w).string=t.toString(),o.addChild(a),null==(i=o.getComponent(f).getState("idle"))||i.play()}},a.onOtherMove=function(t,e,n){if(this._other_role[t]){var i=this._other_role[t];i.setRotation(c.fromViewUp(new c,n,l.UP)),console.log("position",e),i.setPosition(e);var o=i.getComponent(f).getState("run");o.repeatCount=1,o.play()}},a.onLoginSuccess=function(t,e){var n,i;this._character=p(this.characterPrefab),this._character.scale=new l(10,10,10),this._character.setPosition(t),this.node.addChild(this._character);var o=p(this.labelPrefab);o.position=new l(0,.07,0),o.scale=new l(.01,.01,.01),this._dl=o.getComponent(w),this._character.addChild(o),this._dl.string=v.instance.rid,this._cameraPivot=null==(n=this.cameraNode)?void 0:n.parent,this._character.addChild(this._cameraPivot),this.cameraNode.position=this._camera_local,this.cameraNode.lookAt(this._character.position),this._animationComponent=this._character.getComponent(f),null==(i=this._animationComponent)||null==(i=i.getState("idle"))||i.play(),this._isLoggedIn=!0},a.onDestroy=function(){d.off(_.EventType.MOUSE_UP,this.onMouseUp.bind(this),this),d.off(_.EventType.MOUSE_DOWN,this.onMouseDown.bind(this),this),d.off(_.EventType.MOUSE_MOVE,this.onMouseMove.bind(this),this),d.off(_.EventType.KEY_DOWN,this.onKeyDown.bind(this),this),d.off(_.EventType.KEY_PRESSING,this.onKeyPressing.bind(this),this),d.off(_.EventType.KEY_UP,this.onKeyUp.bind(this),this),u.getScene().off("transform-valid",this.onTransformValid.bind(this),this),u.getScene().off("transform-invalid",this.onTransformInvalid.bind(this),this),u.getScene().off("websocket-connected",this.onLoginSuccess.bind(this),this)},a.onKeyDown=function(t){var e,n;switch(console.log("onKeyDown"),this._keyStates.set(t.keyCode,!0),t.keyCode){case m.SPACE:if(null==(e=this._animationComponent)||!e.getState("jump").isPlaying){var i,o=null==(i=this._animationComponent)?void 0:i.getState("jump");o.repeatCount=1,o.play()}break;case m.KEY_W:case m.KEY_S:case m.KEY_A:case m.KEY_D:null==(n=this._animationComponent)||null==(n=n.getState("run"))||n.play()}},a.onKeyPressing=function(t){switch(console.log("onKeyPressing"),this._keyStates.set(t.keyCode,!0),t.keyCode){case m.KEY_W:case m.KEY_S:case m.KEY_A:case m.KEY_D:}},a.onKeyUp=function(t){switch(console.log("onKeyUp"),this._keyStates.set(t.keyCode,!1),t.keyCode){case m.SPACE:break;case m.KEY_W:case m.KEY_S:case m.KEY_A:case m.KEY_D:var e,n,i=!0;if(this._keyStates.forEach((function(t,e){t&&(i=!1)})),i)null==(e=this._animationComponent)||null==(e=e.getState("run"))||e.stop(),null==(n=this._animationComponent)||null==(n=n.getState("idle"))||n.play()}},a.update=function(t){if(this._isLoggedIn&&!this._pendingPosition&&!this._pendingRotation){var e=0,n=0;if(this._keyStates.get(m.KEY_W)&&(n-=.001),this._keyStates.get(m.KEY_S)&&(n+=.001),this._keyStates.get(m.KEY_A)&&(e+=.001),this._keyStates.get(m.KEY_D)&&(e-=.001),0!==n||0!==e){var i=l.transformQuat(new l,l.FORWARD,this._character.rotation).normalize(),o=l.transformQuat(new l,l.RIGHT,this._character.rotation).normalize(),a=l.scaleAndAdd(new l,new l,i,n).add(l.scaleAndAdd(new l,new l,o,e)).normalize().multiplyScalar(t*this.moveSpeed),r=this._character.position.clone().add(a);this._pendingPosition=r,this._pendingRotation=this._character.rotation.clone();var s=l.transformQuat(new l,new l(0,0,1),this._character.rotation);console.log("dir=",s),v.instance.send({type:"movement",position:r,direction:s})}}},a.applyTransform=function(t,e,n){if(n)this._character.position=t,this._dl.string=this._character.position.toString(),this._character.rotation=e,this._lastPosition=t.clone(),this._lastRotation=e.clone();else{console.log("无效运动"),this._character.position=t;var i=new l;c.toEuler(i,this._lastRotation),i.length()<1e-5&&(console.log("onTransformInvalid 欧拉角接近 0 度"),c.fromAxisAngle(this._lastRotation,l.UP,0)),this._character.rotation=this._lastRotation}this._pendingPosition=null,this._pendingRotation=null},a.onTransformValid=function(){this._pendingPosition&&this._pendingRotation&&this.applyTransform(this._pendingPosition,this._pendingRotation,!0)},a.onTransformInvalid=function(t,e){this.applyTransform(t,e,!1)},a.onMouseDown=function(t){switch(t.getButton()){case g.BUTTON_LEFT:this._turnCameraEnabled=!0;break;case g.BUTTON_RIGHT:this._turnRolerEnabled=!0}},a.onMouseUp=function(t){switch(t.getButton()){case g.BUTTON_LEFT:this._turnCameraEnabled=!1,this._cameraPivot.rotation=new c,this.cameraNode.position=this._camera_local.clone(),this.cameraNode.lookAt(this._character.position);break;case g.BUTTON_RIGHT:this._turnRolerEnabled=!1}},a.onMouseMove=function(t){if(this._isLoggedIn){var e=t.getDeltaX(),n=t.getDeltaY();if(this._turnRolerEnabled){var i=new l,o=c.rotateX(new c,c.IDENTITY,b.toRadian(-n));l.transformQuat(i,this.cameraNode.position,o);var a=l.dot(l.normalize(new l,i),l.UP),r=Math.acos(a),s=b.toDegree(r);s>40&&s<90&&(this._camera_local=i,this.cameraNode.position=this._camera_local.clone());var d=-e*this.rotateSpeed;this._character.rotate(b.Quat.rotateY(new b.Quat,b.Quat.IDENTITY,b.toRadian(d)),h.NodeSpace.WORLD),this.cameraNode.lookAt(this._character.position),l.transformQuat(this._role_dir,new l(0,0,1),this._character.rotation)}if(this._turnCameraEnabled){var _=-e*this.rotateSpeed,u=c.rotateY(new c,this._cameraPivot.rotation,b.toRadian(_));this._cameraPivot.rotation=u;var p=c.rotateX(new c,c.IDENTITY,b.toRadian(-n)),f=new l,m=new l;l.subtract(f,this.cameraNode.position,new l(0,0,0)),l.transformQuat(m,f,p),l.add(m,new l(0,0,0),m),this.cameraNode.position=m,this.cameraNode.lookAt(this._character.position)}v.instance.send({type:"rotation",pos:l.transformMat4(new l,this._camera_local,this._character.worldMatrix),yaw:l.transformQuat(new l,new l(0,0,1),this.cameraNode.rotation)})}},e}(y)).prototype,"characterPrefab",[E],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),N=e(K.prototype,"cameraNode",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),R=e(K.prototype,"moveSpeed",[A],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 5}}),k=e(K.prototype,"rotateSpeed",[A],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return.3}}),D=e(K.prototype,"lookSpeed",[A],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return.3}}),Y=e(K.prototype,"maxPitch",[A],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 45}}),O=e(K.prototype,"minPitch",[A],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return-45}}),U=e(K.prototype,"labelPrefab",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=K))||T));a._RF.pop()}}}));

System.register("chunks:///_virtual/TerrainToObj.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,r,n,o,i,a,c,s,l,u,p,h,d,f,v;return{setters:[function(e){t=e.applyDecoratedDescriptor,r=e.inheritsLoose,n=e.initializerDefineProperty,o=e.assertThisInitialized,i=e.createForOfIteratorHelperLoose},function(e){a=e.cclegacy,c=e._decorator,s=e.Node,l=e.Terrain,u=e.Button,p=e.TERRAIN_BLOCK_VERTEX_COMPLEXITY,h=e.TERRAIN_BLOCK_TILE_COMPLEXITY,d=e.Vec2,f=e.TERRAIN_BLOCK_VERTEX_SIZE,v=e.Component}],execute:function(){var b,T,y,j,m;a._RF.push({},"e88708/QcVD1bdqXrdWjxs0","TerrainToObj",void 0);var g=c.ccclass,O=c.property;e("TerrainToObj",(b=g("TerrainToObj"),T=O({type:s,tooltip:"按钮节点"}),b((m=t((j=function(e){function t(){for(var t,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return(t=e.call.apply(e,[this].concat(i))||this).terrain=null,n(t,"buttonNode",m,o(t)),t}r(t,e);var a=t.prototype;return a.start=function(){if(this.buttonNode){this.terrain=this.getComponent(l);var e=this.buttonNode.getComponent(u);e?e.node.on("click",this.exportObj.bind(this),this):console.warn("按钮节点上没有 Button 组件")}else console.warn("请在 Inspector 面板中指定按钮节点")},a.update=function(e){},a.exportObj=function(){if(this.terrain){for(var e,t="",r=[],n=[],o=[],a=[],c=0,s=i(this.terrain.getBlocks());!(e=s()).done;){for(var l=e.value,u=0,v=new Float32Array(f*p*p),b=0;b<p;++b)for(var T=0;T<p;++T){var y=l.getIndex()[0]*h+T,j=l.getIndex()[1]*h+b,m=this.terrain.getPosition(y,j),g=this.terrain.getNormal(y,j),O=new d(T/h,b/h);v[u++]=m.x,v[u++]=m.y,v[u++]=m.z,v[u++]=g.x,v[u++]=g.y,v[u++]=g.z,v[u++]=O.x,v[u++]=O.y}for(var _=p*p,E=h,I=0;I<v.length;I+=f){var R=v[I],L=v[I+1],x=v[I+2];r.push("v "+R+" "+L+" "+x);var C=v[I+6],w=v[I+7];n.push("vt "+C+" "+w);var N=v[I+3],B=v[I+4],F=v[I+5];o.push("vn "+N+" "+B+" "+F)}for(var z=0;z<E;z++)for(var A=0;A<E;A++){var P=z*p+A,X=P+1,k=P+p,D=k+1;a.push(this.formatFace(P,X,k,c)),a.push(this.formatFace(X,D,k,c))}c+=_}t+=r.join("\n")+"\n",t+=n.join("\n")+"\n",t+=o.join("\n")+"\n",t+=a.join("\n")+"\n";var V=new Blob([t],{type:"text/plain"}),K=document.createElement("a");K.href=URL.createObjectURL(V),K.download="terrain.obj",document.body.appendChild(K),K.click(),document.body.removeChild(K)}else console.warn("请把该文件跟Terrain组件放在一起")},a.formatFace=function(e,t,r,n){var o=e+n+1,i=t+n+1,a=r+n+1;return"f "+a+"/"+a+"/"+a+" "+i+"/"+i+"/"+i+" "+o+"/"+o+"/"+o},t}(v)).prototype,"buttonNode",[T],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),y=j))||y));a._RF.pop()}}}));

System.register("chunks:///_virtual/TheLowerHeight.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var r,t,o,n,i,a,c,s,h,l;return{setters:[function(e){r=e.inheritsLoose,t=e.createForOfIteratorHelperLoose},function(e){o=e.cclegacy,n=e._decorator,i=e.Terrain,a=e.TERRAIN_BLOCK_VERTEX_COMPLEXITY,c=e.TERRAIN_BLOCK_TILE_COMPLEXITY,s=e.Vec2,h=e.TERRAIN_BLOCK_VERTEX_SIZE,l=e.Component}],execute:function(){var u;o._RF.push({},"778a164Ww9JY5/k/fAMOTcm","TheLowerHeight",void 0);var g=n.ccclass;n.property,e("TheLowerHeight",g("TheLowerHeight")(u=function(e){function o(){for(var r,t=arguments.length,o=new Array(t),n=0;n<t;n++)o[n]=arguments[n];return(r=e.call.apply(e,[this].concat(o))||this).terrain=null,r}r(o,e);var n=o.prototype;return n.start=function(){this.terrain=this.getComponent(i);for(var e,r=1e4,o=t(this.terrain.getBlocks());!(e=o()).done;)for(var n=e.value,l=0,u=new Float32Array(h*a*a),g=0;g<a;++g)for(var p=0;p<a;++p){var f=n.getIndex()[0]*c+p,T=n.getIndex()[1]*c+g,_=this.terrain.getPosition(f,T),L=this.terrain.getNormal(f,T),v=new s(p/c,g/c);u[l++]=_.x,u[l++]=_.y,r>_.y&&(r=_.y),u[l++]=_.z,u[l++]=L.x,u[l++]=L.y,u[l++]=L.z,u[l++]=v.x,u[l++]=v.y}console.log("min_height:",r)},n.update=function(e){},o}(l))||u);o._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});