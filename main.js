window.onload = function(){
    let cvs = document.getElementById('cvs')
    let ctx = cvs.getContext('2d')

    //fill 填滿
    ctx.fillStyle = "red";  //一定要放在fillRect前面才會生效
    ctx.globalAlpha = '0.5';
    ctx.fillRect(50,50,100,100);

    //stroke描邊
    ctx.globalAlpha = '1';
    ctx.strokeStyle = 'blue'
    ctx.strokeRect(200,200, 50,50)

    //Path 路徑
    ctx.beginPath()  //開始建立路徑
    ctx.moveTo(200,100)  //移到當前所在的位置（當前的點）
    ctx.lineTo(300,300)
    ctx.closePath() //關閉路徑
    ctx.stroke();

    //利用路徑畫出多邊形
    ctx.beginPath()
    ctx.moveTo(300,300);
    ctx.lineTo(400,350);
    ctx.lineTo(250,400);
    ctx.closePath()
    ctx.stroke()
}