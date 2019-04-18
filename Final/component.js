AFRAME.registerComponent('s-click', {
    schema: {
        color: {default: 'green'}
      },
    
      init: function () {       
          this.el.addEventListener('click',() => {
                 this.el.setAttribute('material', 'color', this.data.color);
          })
      }
    
});