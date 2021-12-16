var blips = [];

class blip {
  constructor() {
    var div = document.createElement("div");
    
    const type = ["rect", "circle"][Math.random() * 2 | 0];
    
    div.classList.add(type);
    div.classList.add("blip");
    
    this.x = Math.random()*100;
    this.y = Math.random()*100 + 25;
    
    div.style.top = this.y+"%";
    div.style.left = this.x+"%";
    
    div.style.backgroundColor = ["#9ac7e6", "#305269", "#414d73", "#529a9c"][Math.random() * 4 | 0];
    
    this.speed = [0.25, 0.5, 0.75][Math.random() * 3 | 0];
    
    let width, height;
    switch (type) {
      case "rect":
        width = Math.random()*50 + 10;
        height = Math.random()*300 + 20;
        break;
      case "circle":
        width = Math.random()*200 + 50;
        height = width;
        break;
    }
    
    div.style.width = width+"px";
    div.style.height = height+"px";
    
    this.div = div;
    
    document.body.appendChild(this.div);
    
    this.id = blips;
    
    this.lifetime = Math.random() * 200 + 50;
    this.time = 0;
    
    blips.push(this);
  }
  
  die() {
    document.body.removeChild(this.div);
    blips[this.id] = new blip();
  }
  
  update() {
    this.y -= this.speed;
    
    this.div.style.top = this.y+"%";
    
    if (this.time > -1) {
      this.time++;
      if (this.time >= this.lifetime) {
        this.time = -1;
        this.die();
      }
    }
  }
}

function update() {
  requestAnimationFrame(update);
  
  for (let i=0; i<blips.length; i++) {
    blips[i].update();
  }
}