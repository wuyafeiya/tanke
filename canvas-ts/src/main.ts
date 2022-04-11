const el = document.querySelector<HTMLCanvasElement>('#canvas')!
const app = el.getContext('2d')!

// 画矩形
// app.fillStyle = 'red'
// app.fillRect(0, 0, 300, 300)

// app.fillStyle = 'skyblue'
// app.fillRect(el.width/2-50,el.height/2-50,100,100)

//画线条
// app.strokeStyle = 'red'
// // 边框宽度
// app.lineWidth = 30
// //圆角
// app.lineJoin ='round'
// app.strokeRect(0, 0, 300, 300)

// 换圆形
// app.strokeStyle = 'red'
// app.lineWidth=20
// app.arc(100, 100, 50, 0, 2 * Math.PI)
// app.stroke()

//绘制三角形

// app.beginPath() // 起始位置
// app.moveTo(50, 50)
// app.lineTo(200, 50)
// app.lineTo(200,200)
// app.closePath()
// app.fillStyle = 'red'
// app.fill()

// 渐变色
const Gradient = app.createLinearGradient(0, 0, 300, 300)
console.log(Gradient);
Gradient.addColorStop(0, '#16a085')
Gradient.addColorStop(0.5, '#e67e22')
Gradient.addColorStop(1, 'red')
console.log(Gradient);


app.strokeStyle = Gradient
app.lineWidth=30
app.strokeRect(0,0,300,300)
