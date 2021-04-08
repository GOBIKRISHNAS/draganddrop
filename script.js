const draggables = document.querySelectorAll('.draggable')
const containers = document.querySelectorAll('.place')

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', (e) => {
      draggable.classList.add('dragging');
      e.effectAllowed = "copyMove";
    })
  
    draggable.addEventListener('dragend', (e) => {
      draggable.classList.remove('dragging')
    })

  })

containers.forEach(container => {
  container.addEventListener('dragover', (e) => {
    e.preventDefault();
  })

  container.addEventListener('drop', (e) => {
    e.preventDefault();
   var nodeCopy = document.getElementsByClassName('dragging')[0].cloneNode(true);
   nodeCopy.id = "newId";
   nodeCopy.draggable = "false";
   console.log(nodeCopy)
   var width = e.target.offsetWidth
   e.target.style.width = width/2
   console.log(e.target.offsetWidth)
   console.log(e.target.getBoundingClientRect())
   e.target.appendChild(nodeCopy);

   

    // Get mouse position relative to drop target
    var dropPositionX = e.pageX - $(this).offset().left;
    var dropPositionY = e.pageY - $(this).offset().top;


    // Get mouse offset relative to dragged item
    var dragItemOffsetX = e.offsetX;
    var dragItemOffsetY = e.offsetY;

    // Get position of dragged item relative to drop target
    var dragItemPositionX = dropPositionX-dragItemOffsetX;
    var dragItemPositionY = dropPositionY-dragItemOffsetY;
  })
})

 