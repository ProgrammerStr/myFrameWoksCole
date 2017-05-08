var car1 = -10,
    car2 = -10,
    car3 = -10;

$(document).ready(function(){

    console.log("teste");

    setTimeout(function(){

      setInterval(function(){

          $("#headerImage .car01").css('left', car1+'%');

          car1+=0.5;

          console.log(car1);

          if(car1 >= 100){
            car1 = -10;
          }

      }, 100);

    }, 1000)

    setTimeout(function(){

      setInterval(function(){

          $('#headerImage .car02').css('left', car2+'%');

          car2 += 1;

          if(car2 >= 100){
            car2 = -10;
          }

      }, 100);

    }, 2000);


    setTimeout(function(){

      setInterval(function(){

          $('#headerImage .car03').css('left', car3+'%');

          car3 += 0.2;

          if(car3 >= 100){
            car3 = -10;
          }

      }, 100);

    }, 3000)

});
