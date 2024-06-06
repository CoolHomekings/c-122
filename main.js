function preload()
{

}
function setup()
{
    canvas=createCanvas(641,481)
    canvas.position(110,250)
    video=createCapture(VIDEO)
    video.hide()
    tint_colour=""
}
function draw()
{
    image(video,0,0,641,481)
    tint(tint_colour)
}
function take_snapshot()
{
    save('hummusisgood.png')
}
function filter_tint()
{
    tint_colour=document.getElementById("colour_name").value
}