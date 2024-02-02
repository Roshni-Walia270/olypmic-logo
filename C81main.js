var canvas=document.getElementById("myCanvas")
var draw=canvas.getContext("2d")

draw.beginPath()
draw.strokeStyle="blue"
draw.lineWidth=2
draw.arc(150,150,20,0,360)
draw.stroke()

draw.beginPath()
draw.strokeStyle="black"
draw.lineWidth=2
draw.arc(200,150,20,0,360)
draw.stroke()

draw.beginPath()
draw.strokeStyle="red"
draw.lineWidth=2
draw.arc(250,150,20,0,360)
draw.stroke()

draw.beginPath()
draw.strokeStyle="yellow"
draw.lineWidth=2
draw.arc(170,170,20,0,360)
draw.stroke()

draw.beginPath()
draw.strokeStyle="green"
draw.lineWidth=2
draw.arc(225,170,20,0,360)
draw.stroke()


    

