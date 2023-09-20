var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["dd1e9de0-dc91-4438-8304-f4e268e7f7fa","e8e1bedf-d7d4-49be-a917-aeef0a866b91","c5a80d39-74e2-4246-b49b-448ab2f2cf2d","577ded6e-8b49-4900-a613-095f1914c7c3","5e17c243-aed3-4a37-870c-9a6ef29955fa","f3e8fb10-1a7f-48fa-93d3-4d1f2dbb5114"],"propsByKey":{"dd1e9de0-dc91-4438-8304-f4e268e7f7fa":{"name":"sam","sourceUrl":"assets/api/v1/animation-library/gamelab/92Erx6f0Vu2F9ev0gP0kS7.yWbcHPGMJ/category_vehicles/car_green.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":2,"version":"92Erx6f0Vu2F9ev0gP0kS7.yWbcHPGMJ","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/api/v1/animation-library/gamelab/92Erx6f0Vu2F9ev0gP0kS7.yWbcHPGMJ/category_vehicles/car_green.png"},"e8e1bedf-d7d4-49be-a917-aeef0a866b91":{"name":"s","sourceUrl":"assets/api/v1/animation-library/gamelab/oe91580NRX_lq0_AXmFgzqY7HFhJ5gkQ/category_retro/spacebattle_07.png","frameSize":{"x":380,"y":398},"frameCount":1,"looping":true,"frameDelay":2,"version":"oe91580NRX_lq0_AXmFgzqY7HFhJ5gkQ","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":380,"y":398},"rootRelativePath":"assets/api/v1/animation-library/gamelab/oe91580NRX_lq0_AXmFgzqY7HFhJ5gkQ/category_retro/spacebattle_07.png"},"c5a80d39-74e2-4246-b49b-448ab2f2cf2d":{"name":"s2","sourceUrl":"assets/api/v1/animation-library/gamelab/dE7YDMYwAR.o4jgH3UsE.Psc2H5FeHQ4/category_retro/retroaliens_05.png","frameSize":{"x":400,"y":356},"frameCount":1,"looping":true,"frameDelay":2,"version":"dE7YDMYwAR.o4jgH3UsE.Psc2H5FeHQ4","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":356},"rootRelativePath":"assets/api/v1/animation-library/gamelab/dE7YDMYwAR.o4jgH3UsE.Psc2H5FeHQ4/category_retro/retroaliens_05.png"},"577ded6e-8b49-4900-a613-095f1914c7c3":{"name":"s3","sourceUrl":"assets/api/v1/animation-library/gamelab/gARCvgzR8QMzO4k2ngf_23ha9LkttMVO/category_retro/retroaliens_06.png","frameSize":{"x":356,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"gARCvgzR8QMzO4k2ngf_23ha9LkttMVO","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":356,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/gARCvgzR8QMzO4k2ngf_23ha9LkttMVO/category_retro/retroaliens_06.png"},"5e17c243-aed3-4a37-870c-9a6ef29955fa":{"name":"s4","sourceUrl":"assets/api/v1/animation-library/gamelab/OCvk08hqB.Mgfooy3ajTc22E_.Xgqw5w/category_retro/retroaliens_15.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"OCvk08hqB.Mgfooy3ajTc22E_.Xgqw5w","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/OCvk08hqB.Mgfooy3ajTc22E_.Xgqw5w/category_retro/retroaliens_15.png"},"f3e8fb10-1a7f-48fa-93d3-4d1f2dbb5114":{"name":"1","sourceUrl":"assets/api/v1/animation-library/gamelab/Fv5GbHNtWgeVM_jy6AJa5g.Q_C1G_JmU/category_retro/retroaliens_09.png","frameSize":{"x":356,"y":356},"frameCount":1,"looping":true,"frameDelay":2,"version":"Fv5GbHNtWgeVM_jy6AJa5g.Q_C1G_JmU","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":356,"y":356},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Fv5GbHNtWgeVM_jy6AJa5g.Q_C1G_JmU/category_retro/retroaliens_09.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var life = 0;
var car1, car2, car3,car4;
var boundary1, boundary2;
var sam;

  boundary1 = createSprite(190,120,420,3);
  boundary2 = createSprite(190,260,420,3);
  
  sam = createSprite(20,190,13,13);
  sam.shapeColor = "green";
  sam.setAnimation("s");
 sam.scale=0.1;
   
  car1 = createSprite(100,130,10,10);
car1.setAnimation("s2");
car1.scale=0.1;

  
car2 = createSprite(215,130,10,10);
  car2.setAnimation("s3");
  car2.shapeColor = "red";
  car2.scale=0.1;
  car3 = createSprite(165,250,10,10);
  car3.shapeColor = "red";
  car3.setAnimation("s4");
  car3.scale=0.1;
  car4 = createSprite(270,250,10,10);
  car4.shapeColor = "red";
  car4.setAnimation("1");
  car4.scale=0.1;
  
 car1.velocityY=7;
 car2.velocityY=7
 car3.velocityY=-7
 car4.velocityY=-7
//Agrega velocidad para hacer que el auto se mueva.

function draw() {
   background("black");
  text("Vidas: " + life,200,100);
  strokeWeight(0);
  fill("lightblue");
  rect(0,120,52,140);
  fill("yellow");
  rect(345,120,52,140);
  
// Crea la función bounceoff para hacer que el auto rebote en los límites.
car1.bounceOff(boundary1);
car1.bounceOff(boundary2);
car2.bounceOff(boundary1);
car2.bounceOff(boundary2);
car3.bounceOff(boundary1);
car3.bounceOff(boundary2);
car4.bounceOff(boundary1);
car4.bounceOff(boundary2);
//Agregar la condición para hacer que Sam se mueva de izquiera a derecha.
if(keyDown("right")){
sam.x=sam.x+2;
}

if(keyDown("left")){
sam.x=sam.x-2; 
}
//Agregar la condición de reducir la vida de Sam si toca el carro.
if(sam.isTouching(car1)||
sam.isTouching(car2)||
sam.isTouching(car3)||
sam.isTouching(car4)){
sam.x=20;
sam.y=190;
}
    
 drawSprites();
}
playSound("assets/y2mate.com---Efecto-de-Sonido-Alien--genas.mp3", true);

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
