window.onload = function(){

    let ctx = document.getElementById('cvs').getContext('2d');
    const btn = document.querySelector('.btn')
    //載入影像
    let img = new Image();
    img.src = 'cat2.jpg';
    img.onload = function(){ //註冊load事件，圖片載入之後才做繪製
        ctx.drawImage(this, 0, 0, cvs.width, cvs.height);
    }
    btn.addEventListener('click',invertColor)

    //影像處理
    function invertColor(){
        //取得ImageData物件
        let pixels = ctx.getImageData(0,0, cvs.width, cvs.height)
        //ImageData的data屬性，1px佔據4bytes(r,g,b,a 範圍：0~255)
        let data = pixels.data;
        for(let i=0; i<data.length; i+=4){
            data[i] = 255 -data[i] //red
            data[i+1] = 255 - data[i+1] //green
            data[i+2] = 255 -data[i+2] //blue
        }
        ctx.putImageData(pixels,0,0)
    }
}