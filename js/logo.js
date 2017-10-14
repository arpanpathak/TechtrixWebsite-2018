function animateT() {
    animationCalled();

    var canvas = document.getElementById("canvas"),
        ctx = canvas.getContext("2d");
    var W = 150, H = 150;
    var off1 = 65, off2 = 50, off3 = 40;
    canvas.height = H;
    canvas.width = W;

    reqAnimFrame = window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        window.oRequestAnimationFrame
    ;
    var ball = {};
    ball = {
        radius: 5,
        color: "White",

        draw: function (x, y) {
            // Here, we'll first begin drawing the path and then use the arc() function to draw the circle. The arc function accepts 6 parameters, x position, y position, radius, start angle, end angle and a boolean for anti-clockwise direction.
            ctx.beginPath();
            ctx.arc(x, y, this.radius, 0, Math.PI * 2, false);
            ctx.fillStyle = this.color;
            //ctx.fill();
            //ctx.closePath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = this.color;
            ctx.stroke();
        }
    };
    function drawLine(x1, y1, x2, y2) {
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.lineWidth = 5;
        ctx.strokeStyle = ball.color;
        ctx.stroke();
    }

    function clearCanvas() {
        ctx.clearRect(0, 0, W, H);
    }

    //Draw a ball at center
    clearCanvas();
    ball.draw(W / 2, H / 2);

    //1st Vertical Line
    var h1 = (H / 2);
    var h2 = (H / 2);
    var h3 = h2 - off1;

    function FirstVerti() {
        if (h1 < ((H / 2) + off1) && h2 > ((H / 2) - off1)) {
            reqAnimFrame(FirstVerti);

            //Draw base canvas
            clearCanvas();
            ball.draw(W / 2, H / 2);

            //Draw new element
            ball.draw(W / 2, h1);
            ball.draw(W / 2, h2);

            h1 = h1 + 1;
            h2 = h2 - 1;

            //connect by lineTo
            drawLine(W / 2, H / 2 + ball.radius, W / 2, h1 - ball.radius);
            drawLine(W / 2, H / 2 - ball.radius, W / 2, h2 + ball.radius);
        }
        else {
            //call next Animation
            HorizontalLine();
        }
    }


    //horizontal Line
    var w1 = W / 2;
    var w2 = W / 2;
    //console.log(h2);
    function HorizontalLine() {
        if (w1 < ((W / 2) + off2) && w2 > ((W / 2) - off2)) {
            reqAnimFrame(HorizontalLine);

            //Draw base canvas
            clearCanvas();
            ball.draw(W / 2, H / 2);
            ball.draw(W / 2, h1);
            ball.draw(W / 2, h2);
            drawLine(W / 2, H / 2 + ball.radius, W / 2, h1 - ball.radius);
            drawLine(W / 2, H / 2 - ball.radius, W / 2, h2 + ball.radius);

            //Draw new element
            ball.draw(w1, h2);
            ball.draw(w2, h2);

            w1 = w1 + 1;
            w2 = w2 - 1;

            //Draw Line
            drawLine(W / 2 + ball.radius, h2, w1 - ball.radius, h2);
            drawLine(W / 2 - ball.radius, h2, w2 + ball.radius, h2);
        }
        else {
            //call next Animation
            SecVertical();
        }
    }

    //2nd Vertical Line
    function SecVertical() {
        if (h3 < h2 + off3) {
            reqAnimFrame(SecVertical);

            //Draw Base canvas
            clearCanvas();
            ball.draw(W / 2, H / 2);
            ball.draw(W / 2, h1);
            ball.draw(W / 2, h2);
            ball.draw(w1, h2);
            ball.draw(w2, h2);
            drawLine(W / 2, H / 2 + ball.radius, W / 2, h1 - ball.radius);
            drawLine(W / 2, H / 2 - ball.radius, W / 2, h2 + ball.radius);
            drawLine(W / 2 + ball.radius, h2, w1 - ball.radius, h2);
            drawLine(W / 2 - ball.radius, h2, w2 + ball.radius, h2);
            //draw new element
            ball.draw(w1, h3);
            ball.draw(w2, h3);

            h3 = h3 + 1;

            //draw Line
            drawLine(w1, h2 + ball.radius, w1, h3 - ball.radius);
            drawLine(w2, h2 + ball.radius, w2, h3 - ball.radius);
            //next animation (make text appear)
            $('.date').show('slow');
            $('.date').hide('slow');
            $('#commingsoon').fadeIn('slow');
            $('.clock').css({opacity: 0, visibility: "visible"}).animate({opacity: 1}, 7000);
            $('.techtrix-text').css({opacity: 0, visibility: "visible"}).animate({opacity: 1}, 7000);
            $('.small-text').css({opacity: 0, visibility: "visible"}).animate({opacity: 1}, 7000);
            

            $('.rising').css({"text-shadow": "-2px -1px 2px purple,2px -2px 2px blue,2px -10px 20px white,0 -2px 6px red,2px -2px 10px white, 5px -10px 15px lightyellow,8px -20px 20px yellow,12px -30px 25px orange,5px -60px 40px orange,15px -34px 30px darkorange,0px -36px 35px red,40px -40px 50px red,-20px -60px 40px red,20px -80px 40px red,40px -80px 40px red,20px -120px 60px red,20px -150px 80px black,50px -160px 80px black,100px -200px 100px black,120px -150px 100px black,100px -100px 100px black,120px -220px 100px black,200px -300px 150px black;"}).animate({"text-shadow": "none"}, 3000);
            // setInterval('showClock','1000');
           
        }
    }

    //start the Animation
    FirstVerti();
   // setTimeout('showClock','6000');
}