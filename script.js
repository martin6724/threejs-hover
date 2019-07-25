new hoverEffect ({
   parent: document.querySelector('.hover-image'),
   intensity1: 1,
   intensity2: 2,
   speedIn: 1,
   speedOut: 1,
   image1: 'https://images.unsplash.com/photo-1516727003284-a96541e51e9c?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ' ,
   image2: 'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
   displacementImage: 'img/strip.png'
    });


    $(document).ready(function(){
       for(var i = 0; i< 15; i++)
         $(".container-right").append("<h1 id='hello'>hi</h1>");
    });
