# GSAP Basics

GSAP, or GreenSock Animation Platform, is a JavaScript library used to 
create high-performance web animations. It works across all major 
browsers and provides precise control over complex sequences, timelines, 
and property-based animations.

You can install GSAP via npm or use a CDN:

```bash
npm install gsap
```

Or include it via CDN:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js">
</script>
```

## Tweens

A Tween handles all the animation. It's like a powerful tool for changing 
properties. You give it the objects to animate, set a duration, and 
specify which properties to change.

```js
gsap.to(".box", { duration: 1, x: 100 });
```

### Methods

- `to`:  
  Animates from the current state to a new one.

  ```js
  gsap.to(".box", { duration: 1, x: 100, opacity: 0.5 });
  ```

- `from`:  
  Animates from a set of values to the current state.

  ```js
  gsap.from(".box", { duration: 1, x: -100, opacity: 0 });
  ```

- `fromTo`:  
  Animates from specific values to specific values.

  ```js
  gsap.fromTo(
    ".box",
    { x: -100, opacity: 0 },
    { duration: 1, x: 100, opacity: 1 }
  );
  ```

## Timeline

A Timeline in GSAP is a container for multiple tweens. It allows you to 
chain animations together in a sequence or have them overlap precisely.

```js
const tl = gsap.timeline();

tl.to(".box", { x: 100, duration: 1 })
  .to(".box", { y: 100, duration: 1 })
  .to(".box", { rotation: 360, duration: 1 });
```

This will animate `.box`:
1. to the right,
2. then down,
3. then rotate.

### Position Argument

The position argument lets you control **when** a tween starts within a 
timeline. You can use:

- Absolute time: `"+=1"` (1 second after previous)
- Labels: `"labelName"` or `">"` for immediate sequence
- Overlap: `"-=0.5"` starts 0.5 seconds before previous ends

```js
const tl = gsap.timeline();

tl.to(".box1", { x: 100, duration: 1 })               // starts at 0s
  .to(".box2", { x: 100, duration: 1 }, "-=0.5")      // overlaps by 0.5s
  .to(".box3", { x: 100, duration: 1 }, "+=0.2");     // starts 0.2s later
```
