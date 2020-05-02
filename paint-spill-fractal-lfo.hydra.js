let lfo = ()=>0.01*(time%10)

osc(11,1,1)
  .blend(o0)
.scale(0.4)
.modulate(
  osc().modulate(noise())
)
.kaleid(3)
.blend(o0)
.blend(o0)
.colorama(lfo())
  .out()
