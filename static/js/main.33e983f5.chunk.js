(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(t,e,a){t.exports={palette:"Palette_palette__1xbiH","size-tool-palette":"Palette_size-tool-palette__2co_q","tools-palette":"Palette_tools-palette__1dVwG","color-pallete":"Palette_color-pallete__EIaTB"}},15:function(t,e,a){t.exports=a(25)},23:function(t,e,a){},24:function(t,e,a){},25:function(t,e,a){"use strict";a.r(e);var i=a(0),l=a.n(i),n=a(13),r=a.n(n),s=a(3),c=a(4),o=a(6),h=a(5),m=a(7),d=a(11),p=a(2),u=a(9),g=a.n(u),f=15.625,C=f,k=0,v=0,x={small:500,medium:1e3,large:2e3},F={small:32,medium:64,large:128};function S(t,e){var a=t.clientX,i=t.clientY,l=e.getBoundingClientRect();return[a-l.left,i-l.top]}function D(t,e,a,i){var l=this.ctx,n=(a|=0)-(t|=0),r=(i|=0)-(e|=0);if(n<0&&(n=-n),r<0&&(r=-r),n=C||r>=C){var s=a-t,c=i-e,o=(s>0)-(s<0),h=(c>0)-(c<0);if(s*=o,c*=h,l.fillStyle=this.getColorDraw(),l.fillRect(t,e,C,C),!s&&!c)return;var m,d=0,p=t,u=e;if(c<s)for(m=0|(c<<15)/s*h;p^a;p+=o,d&=32767)l.fillRect(p,u+=(d+=m)>>15,C,C);else for(m=0|(s<<15)/c*o;u^i;u+=h,d&=32767)l.fillRect(p+=(d+=m)>>15,u,C,C)}}var z=function(t){function e(){var t,a;Object(s.a)(this,e);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return(a=Object(o.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(n)))).state={size:500,clickMouseDownFlag:!1,imageData:{},startXY:[]},a.ref=Object(i.createRef)(),a.drawMathPixel=function(t,e){var a=Math.floor(t/C),i=Math.floor(e/C),l=a*C,n=i*C,r=l+f,s=n+f,c=r+f,o=s+f;return[l,n,r,s,c,o,c+f,o+f]},a.eraser=function(t,e,i){var l=a.drawMathPixel(t,e);a.ctx.globalCompositeOperation="destination-out",a.ctx.fillRect(l[0],l[1],C,C),a.ctx.globalCompositeOperation="source-over",a.imageData=a.ctx.getImageData(0,0,i.width,i.height),a.setState({imageData:a.imageData})},a.pen=function(t,e,i){var l=a.drawMathPixel(t,e);a.ctx.fillStyle=a.getColorDraw(),a.ctx.fillRect(l[0],l[1],C,C),a.imageData=a.ctx.getImageData(0,0,i.width,i.height),a.setState({imageData:a.imageData})},a.lineMouseMove=function(t,e,i){var l=a.drawMathPixel(t,e),n=a.state.startXY;a.ctx.clearRect(n[0],n[1],t-n[0],e-n[1]),D.call(Object(p.a)(a),n[0],n[1],l[0],l[1])},a.lineMouseUp=function(t,e,i){var l=a.drawMathPixel(t,e),n=a.state.startXY;a.ctx.putImageData(a.copyImageData,0,0),D.call(Object(p.a)(a),n[0],n[1],l[0],l[1]),a.imageData=a.ctx.getImageData(0,0,i.width,i.height),a.setState({imageData:a.imageData})},a.rectangleMouseMove=function(t,e,i){var l=a.drawMathPixel(t,e),n=a.state.startXY;a.ctx.putImageData(a.copyImageData,0,0),a.ctx.strokeRect(n[0],n[1],l[0]-n[0],l[1]-n[1]),a.ctx.lineWidth=(l[0],l[1],C),a.imageData=a.ctx.getImageData(0,0,i.width,i.height),a.setState({imageData:a.imageData})},a.circleMouseMove=function(t,e,i){var l,n,r,s=a.drawMathPixel(t,e),c=a.state.startXY;s[0]>c[0]&&s[1]>c[1]&&(l=(s[0]-c[0])/2,n=c[0]+l,r=c[1]+l),s[0]>c[0]&&s[1]<c[1]&&(l=(s[0]-c[0])/2,n=c[0]+l,r=c[1]-l),s[0]<c[0]&&s[1]<c[1]&&((l=(c[0]-s[0])/2)<0&&(l*=-1),n=c[0]-l,r=c[1]-l),s[0]<c[0]&&s[1]>c[1]&&((l=(c[0]-s[0])/2)<0&&(l*=-1),n=c[0]-l,r=c[1]+l),a.ctx.putImageData(a.copyImageData,0,0),a.ctx.strokeStyle=a.getColorDraw(),a.ctx.beginPath(),a.ctx.arc(n,r,l,2,4*Math.PI,!1),a.ctx.lineWidth=(s[0],s[1],C),a.ctx.stroke(),a.imageData=a.ctx.getImageData(0,0,i.width,i.height),a.setState({imageData:a.imageData})},a.handleMouseDown=function(t){var e=a.ref.current,i=a.props.toolState.tools,l=a.state.size,n=i.penFlag,r=i.eraserFlag,s=i.lineFlag,c=i.rectangleFlag,o=i.circleFlag,h=i.lightenFlag,m=i.ditheringFlag,p=l/x.small,u=S(t,e).map(function(t){return p*t}),g=S(t,e).map(function(t){return p*t}),f=Object(d.a)(g,2),C=f[0],k=f[1];a.currentSizePixel(),a.setState({clickMouseDownFlag:!0,startXY:u}),(s||c||o)&&(a.copyImageData=a.ctx.getImageData(0,0,a.state.size,a.state.size)),n&&a.pen(C,k,e),r&&a.eraser(C,k,e),h&&a.lighten(C,k,e),m&&a.dithering(C,k,e)},a.handleMouseUp=function(t){var e=a.ref.current,i=a.props.toolState.tools,l=a.state.size,n=i.lineFlag,r=i.colorPickerFlag,s=l/x.small,c=S(t,e).map(function(t){return s*t}),o=Object(d.a)(c,2),h=o[0],m=o[1];k=0,v=0,a.setState({clickMouseDownFlag:!1}),n&&a.lineMouseUp(h,m,e),r&&a.colorPicker(h,m,e)},a.handleMouseMove=function(t){var e=a.ref.current,i=a.props.toolState.tools,l=a.state.size,n=i.penFlag,r=i.eraserFlag,s=i.lineFlag,c=i.rectangleFlag,o=i.circleFlag,h=i.moveFlag,m=i.lightenFlag,p=i.ditheringFlag,u=l/x.small,g=S(t,e).map(function(t){return u*t}),f=Object(d.a)(g,2),C=f[0],k=f[1];a.setState({x:C,y:k}),a.state.clickMouseDownFlag&&(n&&a.pen(C,k,e),r&&a.eraser(C,k,e),s&&a.lineMouseMove(C,k,e),c&&a.rectangleMouseMove(C,k,e),o&&a.circleMouseMove(C,k,e),h&&a.moveFieldDraw(C,k,e),m&&a.lighten(C,k,e),p&&a.dithering(C,k,e))},a.handleButtonClick=function(t){var e=t.target.value,i=a.ref.current;a.imageData=a.ctx.getImageData(0,0,i.width,i.height),a.setState({size:e})},a}return Object(m.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){this.ctx=function(t){if(t)return t.getContext("2d")}(this.ref.current),this.imageData=this.ctx.getImageData(0,0,this.state.size,this.state.size),this.props.handlePenClick()}},{key:"componentDidUpdate",value:function(t,e,a){this.state.size!==e.size&&this.ctx.putImageData(e.imageData,0,0),this.state.imageData!==e.imageData&&this.props.onCanvasChanged(this.state.imageData),this.props.toolState.tools.clearFieldFlag!==t.toolState.tools.clearFieldFlag&&(this.ctx.globalCompositeOperation="destination-out",this.ctx.fillRect(0,0,this.state.size,this.state.size),this.ctx.globalCompositeOperation="source-over",this.imageData=this.ctx.getImageData(0,0,this.state.size,this.state.size),this.setState({imageData:this.imageData}))}},{key:"currentSizePixel",value:function(){var t=this.props.toolState.paintSize,e=t.paintSize1pxFlag,a=t.paintSize2pxFlag,i=t.paintSize3pxFlag,l=t.paintSize4pxFlag;e&&(C=f),a&&(C=2*f),i&&(C=3*f),l&&(C=4*f)}},{key:"getColorDraw",value:function(){return!0===this.props.toolState.color.primaryColor?"rgba(0, 0, 0, 255)":"rgba(255, 0, 0, 255) "}},{key:"colorPicker",value:function(t,e,a){255===this.ctx.getImageData(t,e,1,1).data[3]&&255===this.ctx.getImageData(t,e,1,1).data[0]?this.props.handleSecondaryColorClick():(255===this.ctx.getImageData(t,e,1,1).data[3]&&this.ctx.getImageData(t,e,1,1).data[0],this.props.handlePrimaryColorClick())}},{key:"lighten",value:function(t,e,a){if(0===this.ctx.getImageData(t,e,1,1).data[3])return!1;var i=this.ctx.getImageData(t,e,1,1).data[0],l=this.ctx.getImageData(t,e,1,1).data[1],n=this.ctx.getImageData(t,e,1,1).data[2];i<=225&&(i+=25),l<=225&&(l+=25),n<=225&&(n+=25);var r=this.drawMathPixel(t,e);this.ctx.fillStyle="rgba(".concat(i,", ").concat(l,", ").concat(n,", 255)"),this.ctx.fillRect(r[0],r[1],C,C),this.imageData=this.ctx.getImageData(0,0,a.width,a.height),this.setState({imageData:this.imageData})}},{key:"dithering",value:function(t,e,a){var i=this.drawMathPixel(t,e);0===this.ctx.getImageData(i[0]-1,e,1,1).data[3]&&0===this.ctx.getImageData(t,i[1]-1,1,1).data[3]&&0===this.ctx.getImageData(i[0]+f,e,1,1).data[3]&&0===this.ctx.getImageData(t,i[1]+f,1,1).data[3]&&(this.ctx.fillStyle=this.getColorDraw(),this.props.toolState.paintSize.paintSize1pxFlag&&this.ctx.fillRect(i[0],i[1],f,f),this.props.toolState.paintSize.paintSize2pxFlag&&(this.ctx.fillRect(i[0],i[1],f,f),this.ctx.fillRect(i[2],i[3],f,f)),this.props.toolState.paintSize.paintSize3pxFlag&&0===this.ctx.getImageData(i[0]+2*f,e,1,1).data[3]&&0===this.ctx.getImageData(t,i[1]+2*f,1,1).data[3]&&(this.ctx.fillRect(i[2],i[1],f,f),this.ctx.fillRect(i[0],i[3],f,f),this.ctx.fillRect(i[4],i[3],f,f),this.ctx.fillRect(i[2],i[5],f,f)),this.props.toolState.paintSize.paintSize4pxFlag&&0===this.ctx.getImageData(i[0]+3*f,e,1,1).data[3]&&0===this.ctx.getImageData(t,i[1]+3*f,1,1).data[3]&&(this.ctx.fillRect(i[0],i[1],f,f),this.ctx.fillRect(i[4],i[1],f,f),this.ctx.fillRect(i[2],i[3],f,f),this.ctx.fillRect(i[6],i[3],f,f),this.ctx.fillRect(i[0],i[5],f,f),this.ctx.fillRect(i[4],i[5],f,f),this.ctx.fillRect(i[2],i[7],f,f),this.ctx.fillRect(i[6],i[7],f,f)),this.imageData=this.ctx.getImageData(0,0,a.width,a.height),this.setState({imageData:this.imageData}))}},{key:"moveFieldDraw",value:function(t,e,a){var i=this.state.startXY,l=i[0],n=i[1],r=Math.floor((l-t)/f),s=Math.floor((n-e)/f);(r>10||r<-10)&&(r=0,s=0,this.setState({startXY:[t,e]})),(s>10||s<-10)&&(r=0,s=0,this.setState({startXY:[t,e]})),r===k&&s===v||(this.imageData=this.ctx.getImageData(r,s,this.state.size,this.state.size),this.ctx.putImageData(this.imageData,0,0),this.setState({imageData:this.imageData}),k=r,v=s)}},{key:"render",value:function(){var t=this,e=Object.keys(F),a=this.state,i=a.size,n=a.x,r=void 0===n?0:n,s=a.y,c=void 0===s?0:s;return l.a.createElement("section",{className:g.a["field-draw"]},l.a.createElement("canvas",{ref:this.ref,className:g.a["canvas-field-draw"],id:["canvas-field-draw"],width:i,height:i,onMouseDown:this.handleMouseDown,onMouseMove:this.handleMouseMove,onMouseUp:this.handleMouseUp}),l.a.createElement("div",{className:g.a["size-canvas-field-draw"]},e.map(function(e){return l.a.createElement("button",{key:x[e],value:x[e],className:g.a.button,onClick:t.handleButtonClick},"".concat(F[e],"px"))})),l.a.createElement("div",{className:g.a["coordinates-canvas-field-draw"]},l.a.createElement("p",null,"x:",Math.round(r),"px"),l.a.createElement("p",null,"y:",Math.round(c),"px"),l.a.createElement("p",null,"size:",i,"px")))}}]),e}(l.a.Component),y=a(8),b=a.n(y);var w=function(t){function e(){var t,a;Object(s.a)(this,e);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return(a=Object(o.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(n)))).state={size:500,imageData:{},frames:[],shouldShowFrame:!1,countFrame:1},a.addFrame=a.addFrame.bind(Object(p.a)(a)),a.removeFrame=a.removeFrame.bind(Object(p.a)(a)),a.duplicateFrame=a.duplicateFrame.bind(Object(p.a)(a)),a.addStartFrame=a.addStartFrame.bind(Object(p.a)(a)),a.frame=a.frame.bind(Object(p.a)(a)),a.ref=Object(i.createRef)(),a}return Object(m.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){this.ctx=function(t){if(t)return t.getContext("2d")}(this.ref.current),this.setState({})}},{key:"componentDidUpdate",value:function(t,e,a){this.props.frameCanvas!==t.frameCanvas&&(this.imageData=this.props.frameCanvas,this.ctx.putImageData(this.imageData,0,0)),this.props.frameCanvasSize!==t.frameCanvasSize&&this.setState({size:+this.props.frameCanvasSize})}},{key:"addStartFrame",value:function(){return this.frame()}},{key:"addFrame",value:function(){this.setState({frame:this.state.frames.push(this.frame()),countFrame:this.state.countFrame+1})}},{key:"removeFrame",value:function(){this.setState({frames:this.state.frames.splice(-1,1),countFrame:this.state.countFrame-1})}},{key:"duplicateFrame",value:function(){console.log(this.state.frames),this.setState({frames:this.state.frames.concat([this.state.frames.slice(0,1)]),countFrame:this.state.countFrame+1}),console.log(this.state.frames)}},{key:"frame",value:function(){return l.a.createElement("li",{className:"".concat(b.a.frame)},l.a.createElement("canvas",{ref:this.ref,width:this.state.size,height:this.state.size,className:b.a["canvas-frame"]}),l.a.createElement("button",{className:b.a["delete-frame"],onClick:this.removeFrame},"Del"),l.a.createElement("button",{className:b.a["duplicate-frame"],onClick:this.duplicateFrame},"Dup"))}},{key:"render",value:function(){var t=this.state.frames.map(function(t,e){return l.a.createElement("li",{key:e.toString()},t)});return l.a.createElement("section",{className:b.a["frames-section"]},l.a.createElement("ul",{className:b.a["frames-list-section"]},this.addStartFrame(),t),l.a.createElement("button",{className:b.a["add-frames"],onClick:this.addFrame},"Add Frames"))}}]),e}(l.a.Component),E=a(1),P=a.n(E);function M(t){var e=t.onClick;return l.a.createElement("button",{onClick:e},"Pen")}function _(t){var e=t.onClick;return l.a.createElement("button",{onClick:e},"Eraser")}function I(t){var e=t.onClick;return l.a.createElement("button",{onClick:e},"Line")}function O(t){var e=t.onClick;return l.a.createElement("button",{onClick:e},"Rectangle")}function N(t){var e=t.onClick;return l.a.createElement("button",{onClick:e},"Circle")}function j(t){var e=t.onClick;return l.a.createElement("button",{onClick:e},"Color Picker")}function R(t){var e=t.onClick;return l.a.createElement("button",{onClick:e},"1px")}function L(t){var e=t.onClick;return l.a.createElement("button",{onClick:e},"2px")}function U(t){var e=t.onClick;return l.a.createElement("button",{onClick:e},"3px")}function Y(t){var e=t.onClick;return l.a.createElement("button",{onClick:e},"4px")}function X(t){var e=t.onClick;return l.a.createElement("button",{onClick:e},"Lighten")}function B(t){var e=t.onClick;return l.a.createElement("button",{onClick:e},"Move")}function A(t){var e=t.onClick;return l.a.createElement("button",{onClick:e},"Dithering")}function J(t){var e=t.onClick;return l.a.createElement("button",{onClick:e},"ClearField")}function W(t){var e=t.onClick;return l.a.createElement("button",{onClick:e})}function K(t){var e=t.onClick;return l.a.createElement("button",{onClick:e})}var q=function(t){function e(t){var a;return Object(s.a)(this,e),(a=Object(o.a)(this,Object(h.a)(e).call(this,t))).state={},a}return Object(m.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return l.a.createElement("section",{className:P.a.palette},l.a.createElement("div",{className:P.a["size-tool-palette"]},l.a.createElement(R,{className:P.a["1px-tool-palette"],onClick:this.props.handlePaintSize1px}),l.a.createElement(L,{className:P.a["2px-tool-palette"],onClick:this.props.handlePaintSize2px}),l.a.createElement(U,{className:P.a["3px-tool-palette"],onClick:this.props.handlePaintSize3px}),l.a.createElement(Y,{className:P.a["4px-tool-palette"],onClick:this.props.handlePaintSize4px})),l.a.createElement("div",{className:P.a["tools-palette"]},l.a.createElement(M,{className:P.a["pen-tool-palette"],onClick:this.props.handlePenClick}),l.a.createElement(_,{className:P.a["eraser-tool-palette"],onClick:this.props.handleEraserClick}),l.a.createElement(I,{className:P.a["line-tool-palette"],onClick:this.props.handleLineClick}),l.a.createElement(O,{className:P.a["rectangle-tool-palette"],onClick:this.props.handleRectangleClick}),l.a.createElement(N,{className:P.a["circle-tool-palette"],onClick:this.props.handleCircleClick}),l.a.createElement(j,{className:P.a["same-color-tool-palette"],onClick:this.props.handleColorPickerClick}),l.a.createElement(X,{className:P.a["lighten-color-tool-palette"],onClick:this.props.handleLightenClick}),l.a.createElement(A,{className:P.a["dithering-color-tool-palette"],onClick:this.props.handleDitheringClick}),l.a.createElement(B,{className:P.a["choose-color-tool-palette"],onClick:this.props.handleMoveClick}),l.a.createElement(J,{className:P.a["clearField-color-tool-palette"],onClick:this.props.handleClearFieldClick})),l.a.createElement("div",{className:P.a["color-pallete"]},l.a.createElement(W,{className:P.a["primary-color-pallete"],onClick:this.props.handlePrimaryColorClick}),l.a.createElement(K,{className:P.a["secondary-color-pallete"],onClick:this.props.handleSecondaryColorClick})))}}]),e}(l.a.Component),H=a(14);function G(t){for(var e in t)"clearFieldFlag"!==e&&!0===t[e]&&(t[e]=!1)}function T(t){for(var e in t)"clearFieldFlag"!==e&&!0===t[e]&&(t[e]=!1)}var V=function(t){function e(){var t,a;Object(s.a)(this,e);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return(a=Object(o.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(n)))).state={tools:{penFlag:!1,eraserFlag:!1,lineFlag:!1,rectangleFlag:!1,circleFlag:!1,colorPickerFlag:!1,moveFlag:!1,lightenFlag:!1,ditheringFlag:!1,clearFieldFlag:!1},paintSize:{paintSize1pxFlag:!0,paintSize2pxFlag:!1,paintSize3pxFlag:!1,paintSize4pxFlag:!1},color:{primaryColor:!0,secondaryColor:!1}},a.ref=Object(i.createRef)(),a.handleCanvasChanged=function(t){a.setState({imageData:t})},a.handlePaintSize1px=function(){T(a.state.paintSize),a.setState(function(t){return{paintSize:{paintSize1pxFlag:!0}}})},a.handlePaintSize2px=function(){T(a.state.paintSize),a.setState(function(t){return{paintSize:{paintSize2pxFlag:!0}}})},a.handlePaintSize3px=function(){T(a.state.paintSize),a.setState(function(t){return{paintSize:{paintSize3pxFlag:!0}}})},a.handlePaintSize4px=function(){T(a.state.paintSize),a.setState(function(t){return{paintSize:{paintSize4pxFlag:!0}}})},a.handlePenClick=function(){G(a.state.tools),a.setState(function(t){return{tools:{penFlag:!a.state.tools.penFlag}}})},a.handleEraserClick=function(){G(a.state.tools),a.setState(function(t){return{tools:{eraserFlag:!t.tools.eraserFlag}}})},a.handleLineClick=function(){G(a.state.tools),a.setState(function(t){return{tools:{lineFlag:!t.tools.lineFlag}}})},a.handleRectangleClick=function(){G(a.state.tools),a.setState(function(t){return{tools:{rectangleFlag:!t.tools.rectangleFlag}}})},a.handleCircleClick=function(){G(a.state.tools),a.setState(function(t){return{tools:{circleFlag:!t.tools.circleFlag}}})},a.handleColorPickerClick=function(){G(a.state.tools),a.setState(function(t){return{tools:{colorPickerFlag:!t.tools.colorPickerFlag}}})},a.handleLightenClick=function(){G(a.state.tools),a.setState(function(t){return{tools:{lightenFlag:!t.tools.lightenFlag}}})},a.handleMoveClick=function(){G(a.state.tools),a.setState(function(t){return{tools:{moveFlag:!t.tools.moveFlag}}})},a.handleDitheringClick=function(){G(a.state.tools),a.setState(function(t){return{tools:{ditheringFlag:!a.state.tools.ditheringFlag}}})},a.handleClearFieldClick=function(){a.setState(function(t){return{tools:{clearFieldFlag:!a.state.tools.clearFieldFlag}}})},a.handlePrimaryColorClick=function(){a.setState(function(){return{color:{primaryColor:!0,secondaryColor:!1}}})},a.handleSecondaryColorClick=function(){a.setState(function(){return{color:{secondaryColor:!0,primaryColor:!1}}})},a}return Object(m.a)(e,t),Object(c.a)(e,[{key:"onKeyDown",value:function(t,e,a){"shift+1"===t&&this.handlePaintSize1px.apply(this),"shift+2"===t&&this.handlePaintSize2px.apply(this),"shift+3"===t&&this.handlePaintSize3px.apply(this),"shift+4"===t&&this.handlePaintSize4px.apply(this),"shift+p"===t&&this.handlePenClick.apply(this),"shift+e"===t&&this.handleEraserClick.apply(this),"shift+l"===t&&this.handleLineClick.apply(this),"shift+r"===t&&this.handleRectangleClick.apply(this),"shift+c"===t&&this.handleCircleClick.apply(this),"alt+p"===t&&this.handleColorPickerClick.apply(this),"alt+l"===t&&this.handleLightenClick.apply(this),"alt+d"===t&&this.handleDitheringClick.apply(this),"alt+m"===t&&this.handleMoveClick.apply(this),"alt+c"===t&&this.handleClearFieldClick.apply(this),"alt+b"===t&&this.handlePrimaryColorClick.apply(this),"alt+r"===t&&this.handleSecondaryColorClick.apply(this)}},{key:"render",value:function(){return l.a.createElement("div",{className:"piskel"},l.a.createElement(H.a,{keyName:"shift+p, shift+e, shift+l, shift+r, shift+c, shift+1, shift+2, shift+3, shift+4, alt+p, alt+l, alt+d, alt+m, alt+c, alt+b, alt+r",onKeyDown:this.onKeyDown.bind(this)}),l.a.createElement("main",{className:"main"},l.a.createElement(q,{handlePenClick:this.handlePenClick,handleEraserClick:this.handleEraserClick,handleLineClick:this.handleLineClick,handleRectangleClick:this.handleRectangleClick,handleCircleClick:this.handleCircleClick,handleColorPickerClick:this.handleColorPickerClick,handlePaintSize1px:this.handlePaintSize1px,handlePaintSize2px:this.handlePaintSize2px,handlePaintSize3px:this.handlePaintSize3px,handlePaintSize4px:this.handlePaintSize4px,handleMoveClick:this.handleMoveClick,handleLightenClick:this.handleLightenClick,handleDitheringClick:this.handleDitheringClick,handleClearFieldClick:this.handleClearFieldClick,handlePrimaryColorClick:this.handlePrimaryColorClick,handleSecondaryColorClick:this.handleSecondaryColorClick}),l.a.createElement(w,{frameCanvas:this.state.imageData,frameCanvasSize:this.state.size}),l.a.createElement(z,{onCanvasChanged:this.handleCanvasChanged,handlePenClick:this.handlePenClick,handlePrimaryColorClick:this.handlePrimaryColorClick,handleSecondaryColorClick:this.handleSecondaryColorClick,toolState:this.state})))}}]),e}(l.a.Component);a(23),a(24);r.a.render(l.a.createElement(V,null),document.getElementById("root"))},8:function(t,e,a){t.exports={"frames-section":"Frames_frames-section__qyJLD","frames-list-section":"Frames_frames-list-section__UsDcl",frame:"Frames_frame__3J4oW","canvas-frame":"Frames_canvas-frame__1Yp0W","delete-frame":"Frames_delete-frame__DWm7U","duplicate-frame":"Frames_duplicate-frame__K1Fcy","add-frames":"Frames_add-frames__OChLY"}},9:function(t,e,a){t.exports={"field-draw":"FieldDraw_field-draw__14SUU","canvas-field-draw":"FieldDraw_canvas-field-draw__2Usfn","size-canvas-field-draw":"FieldDraw_size-canvas-field-draw__1yy9F","size32-canvas-field-draw":"FieldDraw_size32-canvas-field-draw__24A14","size64-canvas-field-draw":"FieldDraw_size64-canvas-field-draw__1nMJ7","size128-canvas-field-draw":"FieldDraw_size128-canvas-field-draw__xhg19","coordinates-canvas-field-draw":"FieldDraw_coordinates-canvas-field-draw__rHBlM"}}},[[15,1,2]]]);
//# sourceMappingURL=main.33e983f5.chunk.js.map