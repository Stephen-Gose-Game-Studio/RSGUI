//  Here is a custom game object
ToolTip = function (game, x, y,radius, border,text,warp) {
  this._arrow={height:10,width:20};
  var txtsize=getTextSize('Arial',16,text, false,warp);
  var height=2*border+2*radius+txtsize.height+ this._arrow.height;
  var width=2*border+2*radius+txtsize.width;
  GUIObject.call(this, game, x, y, width, height, text);
  this._text=text;
  this._border=border;
  this._radius=radius;
  this._warp=warp;
};
ToolTip.prototype = Object.create(GUIObject.prototype);
ToolTip.prototype.constructor = ToolTip;

ToolTip.prototype.drawCanvas=function(){
  var b=this._border;
  var r=this._radius;
  var w=this.width;
  var h=this.height;
  var a=this._arrow;
  this._bmd.cls();
  this._bmd.ctx.lineWidth=b;
  this._bmd.ctx.beginPath();
  this._bmd.ctx.moveTo(w/2,0);
  this._bmd.ctx.lineTo(w/2-a.width/2, a.height);
  this._bmd.ctx.lineTo(w/2+a.width/2, a.height);
  this._bmd.ctx.closePath();
  this._bmd.ctx.strokeStyle = "#999";
  this._bmd.ctx.stroke();
  this._bmd.ctx.fillStyle="#999";
  this._bmd.ctx.fill();
  this._bmd.ctx.roundRect(b, b+a.height, this.width-2*b, h-a.height-2*b, r, true);
  this._bmd.ctx.fillStyle='#000';
  this._bmd.ctx.font='16px Arial';
  this._bmd.ctx.textBaseline='top';
  this._bmd.ctx.warpText(this._text, b+r, b+r+a.height,this._warp,16);

}
