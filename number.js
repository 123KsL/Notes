parseInt(7.222) //不四舍五入 7
55.5.toFixed(0) //四舍五入 56

Math.round() //四舍五入的取整
Math.ceil() //向上取整，如Math.cell(0.3)=1 、又如Math.ceil(Math.random()*10) 返回1~10
Math.floor() //向下取整，如Math.floor(0.3)=0、又如Math.floor(Math.random()*10)返回0~9
Math.round(Math.random()*(y-x))+x; //返回x~y的随机数，包换负数。
Math.floor(Math.random()*52 + 1) //1-52