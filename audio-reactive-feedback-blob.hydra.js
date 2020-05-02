a.show()
a.setBins(4)
// a.fft[0]

src(s1)
  .blend(osc(9.901, 0.007, 0.59), 0.044)
  .add(shape(4)
       .colorama(0.1)
       .modulate(o0))
  .modulate(noise())
  .modulate(src(o0))
  .blend(src(o0))
  .modulate(src(o0))
  .blend(noise(0.36), 0.1)
  .scale(1.1)
  .scrollY(() => Math.random() * 0.01)
  .out();
