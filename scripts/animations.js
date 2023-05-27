anime({
  targets: ".mainani",
  translateY: 30,
  scale: 1.3,
  delay: 2300,
  endDelay: 500,
  direction: 'alternate',
});


anime({
  targets: ".navbar",
  left: "50%",
  easing: 'linear',
  duration: 400
});

anime({
  targets: ".navbarani",
  translateY: 20,
  loop: true,
  delay: anime.stagger(200, {start: 2000}),
  direction: 'alternate',
});


anime({
    targets: ".imgani",
    translateY: 650,
    delay: 2000,
});

