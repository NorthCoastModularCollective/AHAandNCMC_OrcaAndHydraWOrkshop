//water light
src(o0).modulate(noise())
.blend(
  src(o0)
)
.modulate(
  src(o0).modulate(noise(1))

)
.blend(noise(1),0.1)
.out()
