AFRAME.registerComponent("comic-posters",{
    init:function(){
      this.posterContainer=this.el;   
      this.createCards();
    },
  
    createCards:function(){
      const thumbNailsRef=[
        {
          id: "avengers",
          title: "The Avengers",
          url: "./assets/comic_1.jpg",
        },
        {
          id: "spider-man",
          title: "The Spiderman",
          url: "./assets/comic_2.jpg",
        },
  
        {
          id: "fantastic-four",
          title: "The Fantastic Four",
          url: "./assets/comic_3.jpg",
        },
        {
          id: "dead-pool",
          title: "Deadpool",
          url: "./assets/comic_4.jpg",
        },
      ];
      
      let prevoiusXPosition=-60;
  
      for(var item of thumbNailsRef){
        const posX=prevoiusXPosition+25;
        const posY=13;
        const posZ=-44;
        const position={ x: posX, y: posY, z: posZ };
        prevoiusXPosition=posX;
  
        const borderEl=this.createBorder(position,item.id);
  
        const thumbNail=this.createThumbNail(item);
        borderEl.appendChild(thumbNail);
  
        const titleEl=this.createTitleEl(position, item);
        borderEl.appendChild(titleEl);
  
        this.posterContainer.appendChild(borderEl);
      }
    },
    createBorder: function(position, id) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("id", id);
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("geometry", {
        primitive: "plane",
        width: 22,
        height: 30
      });
      entityEl.setAttribute("position", position);
      entityEl.setAttribute("material", { color: "#fff" });
      return entityEl;
    },
    createThumbNail: function(item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("geometry", {
        primitive: "plane",
        width: 20,
        height: 28
      });
  
      entityEl.setAttribute("position", { x: 0, y: 0, z: 0.1 });
      entityEl.setAttribute("material", { src: item.url });
  
      return entityEl
    },

    createTitleEl:function(position,item){
      const entityEl=document.createElement("a-entity");
      entityEl.setAttribute("text",{
        font:"exo2bold",
        align:"center",
        width:70,
        color:"#e65100",
        value:item.title,
      });
      const elPosition=position;
      elPosition.y=-20;
      entityEl.setAttribute("position",elPosition);
      entityEl.setAttribute("visible",true);
      return entityEl;
    },
  });
  