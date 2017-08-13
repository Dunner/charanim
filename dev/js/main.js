$( document ).ready(function() { 
  console.log( "ready!" ); 

  var app = new PIXI.Application(800, 600, { antialias: true });
  document.body.appendChild(app.view);

  var rectGraphics = new PIXI.Graphics();

  // set a fill and line style
  rectGraphics.beginFill(0xFF3300);
  rectGraphics.lineStyle(4, 0xffd900, 1);
  rectGraphics.drawRoundedRect(150, 450, 300, 100, 500);
  rectGraphics.endFill();


  var rectTexture = rectGraphics.generateTexture();

  var rect = new PIXI.Sprite(rectTexture);
  rect.interactive = true;
  rect.on('pointerdown', onClick);

  app.stage.addChild(rect);

  function onClick () {
    rect.scale.x *= 1.25;
    rect.scale.y *= 1.25;
    console.log('click')
  }



}); 
