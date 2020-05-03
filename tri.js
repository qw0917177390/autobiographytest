// first we need to create a stage
var stage = new Konva.Stage({
    container: 'container',   
    width: 500,
    height: 160
  });
  
  var layer = new Konva.Layer();
  
  var rect1 = new Konva.Rect({
    x: 50,
    y: 50,
    width: 100,
    height: 100,
    fill: 'red',
    stroke: 'black',
    strokeWidth: 4
  });
  layer.add(rect1);
  stage.add(layer);
  layer.draw();
  