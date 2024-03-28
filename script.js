/* gsap.to(".a",{
    x:400,
    duration:2,
    delay:2,
    color:"green",
  
    stagger:0.8,
    repeat:-1,
    yoyo:true,
})
*/
var a= gsap.timeline()
a.to("h2",{
    x:350,
    color:"yellow",
    delay:1,
    yoyo:true,
    repeat:-1,

})
a.to("h3",{
    x:700,
    color:"green",
    duration:1,
    delay:2,
    repeat:-1,
    yoyo:true
})
a.to("h4",{
    x:700,
    color:"orange",
    duration:1,
    delay:2,
    repeat:-1,
    yoyo:true
})


