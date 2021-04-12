function e_click() {
    var cs = document.getElementById('e_click');
    var ctx = cs.getContext('2d');
    var w = cs.width;
    var h = cs.height;
    var x = 200;
    //var y = 0;
    var f = 50;
    var a1 = 300 - x;
    var f1 = f;
    var f2 = 2*f;
    var af = 300 - f1;
    var af1 = 300 + f1;
    var af2 = 300 - f2;
    var af3 = 300 + f2;

    document.addEventListener('mousemove', onClick);

    function onClick(e) {
        /*
         * rectでcanvasの絶対座標位置を取得し、
         * クリック座標であるe.clientX,e.clientYからその分を引く
         * ※クリック座標はdocumentからの位置を返すため
         * ※rectはスクロール量によって値が変わるので、onClick()内でつど定義
         */
        var rect = e.target.getBoundingClientRect();
        x = e.clientX - rect.left;
        //y = e.clientY - rect.top;

        draw();
    }

        function draw() {
            var b1, b2;
            var bb1, bb2;

            a1 = 300 - x;

            ctx.clearRect(0, 0, w, h); //描画リセット

            f1 = f; //f1の初期化

            ctx.strokeStyle = 'black';
            ctx.beginPath();
            ctx.moveTo(10, 250);
            ctx.lineTo(590, 250);
            ctx.moveTo(300, 110);
            ctx.lineTo(300, 390);
            ctx.stroke();　//光軸とレンズ

            ctx.strokeStyle = 'red';
            ctx.beginPath();
            ctx.moveTo(x, 200);
            ctx.lineTo(x, 250);
            ctx.moveTo(x, 200);
            ctx.lineTo(x-5, 210);
            ctx.moveTo(x, 200);
            ctx.lineTo(x+5, 210);
            ctx.stroke(); //ろうそく

            ctx.strokeStyle = 'magenta';
            ctx.beginPath();
            ctx.moveTo(af-5, 245);
            ctx.lineTo(af+5, 255);
            ctx.moveTo(af+5, 245);
            ctx.lineTo(af-5, 255);
            ctx.moveTo(af1-5, 245);
            ctx.lineTo(af1+5, 255);
            ctx.moveTo(af1+5, 245);
            ctx.lineTo(af1-5, 255);
            ctx.moveTo(af2-5, 245);
            ctx.lineTo(af2+5, 255);
            ctx.moveTo(af2+5, 245);
            ctx.lineTo(af2-5, 255);
            ctx.moveTo(af3-5, 245);
            ctx.lineTo(af3+5, 255);
            ctx.moveTo(af3+5, 245);
            ctx.lineTo(af3-5, 255);
            ctx.stroke(); //焦点

            if (a1 > f){
              bb1 = 300 + a1 * f1 / (a1 - f1);
			        bb2 = 250 + 50 * (bb1-300) / a1;
              b1 = Math.floor(bb1);
              b2 = Math.floor(bb2);

              ctx.strokeStyle = 'black';
              ctx.beginPath();
              ctx.moveTo(x, 200);
              ctx.lineTo(300, 200);　//物体からの平行光
              ctx.lineTo(b1, b2);　//焦点を通る屈折光
              ctx.moveTo(x, 200);
              ctx.lineTo(b1, b2); //レンズの中心を通る光
              ctx.stroke();

              ctx.strokeStyle = 'blue';
              ctx.beginPath();
              ctx.moveTo(b1, 250);
              ctx.lineTo(b1, b2);
              ctx.lineTo(b1-5, b2-10);
              ctx.moveTo(b1, b2);
              ctx.lineTo(b1+5, b2-10);
              ctx.stroke(); //実像
            }
            else if (a1 == f){
              ctx.strokeStyle = 'black';
              ctx.beginPath();
              ctx.moveTo(x, 200);
              ctx.lineTo(300, 200);　//物体からの平行光
              ctx.lineTo(600, 500);　//焦点を通る屈折光
              ctx.moveTo(250, 200);
              ctx.lineTo(600, 550); //レンズの中心を通る光
              ctx.stroke();
            }
            else if (a1 > 15){
              bb1 = 300 + a1 * f1 / (a1 - f1);
			        bb2 = 250 + 50 * (bb1-300) / a1;
              b1 = Math.floor(bb1);
              b2 = Math.floor(bb2);

              ctx.strokeStyle = 'black';
              ctx.beginPath();
              ctx.moveTo(x, 200);
              ctx.lineTo(300, 200);　//物体からの平行光
              ctx.lineTo(b1, b2);　//焦点を通る屈折光
              ctx.moveTo(x, 200);
              ctx.lineTo(b1, b2); //レンズの中心を通る光
              ctx.moveTo(300, 200);
              ctx.lineTo(600, 200+300*(200-b2)/(300-b1)); //焦点を通る屈折光
              ctx.moveTo(x, 200);
              ctx.lineTo(600, 250+300*50/(300-x)); //レンズの中心を通る光
              ctx.stroke();

              ctx.strokeStyle = 'blue';
              ctx.beginPath();
              ctx.moveTo(b1, 250);
              ctx.lineTo(b1, b2);
              ctx.lineTo(b1-5, b2+10);
              ctx.moveTo(b1, b2);
              ctx.lineTo(b1+5, b2+10);
              ctx.stroke(); //虚像
            }
            else if (a1 > 0){
              bb1 = 300 + a1 * f1 / (a1 - f1);
			        bb2 = 250 + 50 * (bb1-300) / a1;
              b1 = Math.floor(bb1);
              b2 = Math.floor(bb2);
            }
            else if (a1 == 0){
              bb1 = 300;
              bb2 = 250;
              b1 = bb1;
              b2 = bb2;
            }
            else if (a1 >= -15){
              f1 = -f;
              bb1 = 300 + a1 * f1 / (a1 - f1);
			        bb2 = 250 + 50 * (bb1-300) / a1;
              b1 = Math.floor(bb1);
              b2 = Math.floor(bb2);
            }
            else if (a1 > -f){
              f1 = -f;
              bb1 = 300 + a1 * f1 / (a1 - f1);
			        bb2 = 250 + 50 * (bb1-300) / a1;
              b1 = Math.floor(bb1);
              b2 = Math.floor(bb2);

              ctx.strokeStyle = 'black';
              ctx.beginPath();
              ctx.moveTo(x, 200);
              ctx.lineTo(300, 200);　//物体からの平行光
              ctx.lineTo(b1, b2);　//焦点を通る屈折光
              ctx.moveTo(x, 200);
              ctx.lineTo(b1, b2); //レンズの中心を通る光
              ctx.moveTo(300, 200);
              ctx.lineTo(0, 200+300*(200-b2)/(b1-300)); //焦点を通る屈折光
              ctx.moveTo(x, 200);
              ctx.lineTo(0, 200-x*(200-b2)/(x-b1)); //レンズの中心を通る光
              ctx.stroke();

              ctx.strokeStyle = 'blue';
              ctx.beginPath();
              ctx.moveTo(b1, 250);
              ctx.lineTo(b1, b2);
              ctx.lineTo(b1-5, b2+10);
              ctx.moveTo(b1, b2);
              ctx.lineTo(b1+5, b2+10);
              ctx.stroke(); //虚像
            }
            else if (a1 == -f){
              ctx.strokeStyle = 'black';
              ctx.beginPath();
              ctx.moveTo(x, 200);
              ctx.lineTo(300, 200);　//物体からの平行光
              ctx.lineTo(0, 500);　//焦点を通る屈折光
              ctx.moveTo(350, 200);
              ctx.lineTo(0, 550); //レンズの中心を通る光
              ctx.stroke();
            }
            else {
              f1 = -f;
              bb1 = 300 + a1 * f1 / (a1 - f1);
			        bb2 = 250 + 50 * (bb1-300) / a1;
              b1 = Math.floor(bb1);
              b2 = Math.floor(bb2);

              ctx.strokeStyle = 'black';
              ctx.beginPath();
              ctx.moveTo(x, 200);
              ctx.lineTo(300, 200);　//物体からの平行光
              ctx.lineTo(b1, b2);　//焦点を通る屈折光
              ctx.moveTo(x, 200);
              ctx.lineTo(b1, b2); //レンズの中心を通る光
              ctx.stroke();

              ctx.strokeStyle = 'blue';
              ctx.beginPath();
              ctx.moveTo(b1, 250);
              ctx.lineTo(b1, b2);
              ctx.lineTo(b1-5, b2-10);
              ctx.moveTo(b1, b2);
              ctx.lineTo(b1+5, b2-10);
              ctx.stroke(); //実像
            }

        }

    }
    e_click();
