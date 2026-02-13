Container classes have barely changed since Bootstrap popularized them over a decade ago: set a max-width, add auto margins, maybe some padding. It works, so why mess with it? 

```css
.container {
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}
```

### Advancements

Kevin Powell is only one of two people who I've seen show any kind of innovation for container styles. The implementation uses css grid, and allows for various types of "breaking out". While maybe a little complex (perhaps even  over-engineered), it does allow for a few flavors of containing elements.

<div className="relative aspect-video">
  <iframe width="100%" height="100%" src="https://www.youtube.com/embed/c13gpBrnGEw?si=sXaTVwr7x-uLxt7d" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

After working at Opal Camera, Aristide Benoist introduced to me another flavor of container. This one is pretty interesting. Not only is this restricting the width, it's also adding padding -- all in one calc! 

```css
.wrap-ml {
  --wrap-width: min(1600px, calc(100% - 16px * 2));
  width: var(--wrap-width);
  margin: 0 auto;
}
```

This took me a bit to wrap my head around -- but the magic is all in the --wrap-width variable. The first value you pass to `min()` is the desired container size. The desired padding can also be changed in the `calc()` from 16px to whatever you'd like. 

Here's what happens at different viewport widths:


**Above 1632px:** The `min()` returns `1600px` because `1600px < calc(100% - 32px)`. The container stays at its maximum width of 1600px, and the margin auto centers it with equal spacing on both sides.

**Below 1632px:** The `min()` returns `calc(100% - 32px)` because the viewport is now narrower than the desired container width. This automatically maintains 16px gutters on both sides while the container shrinks proportionally with the viewport.

### Breakout

```css
.breakout-container {
  --wrap-width: min(1600px, calc(100% - 16px * 2));
  width: var(--wrap-width);
-  margin: 0 auto;
+  padding-left: calc((100% - var(--wrap-width)) * .5);
}
```

The `padding-left` is a proof of concept that you can "breakout" manually, similarly to how Kevin Powell does it in the video mentioned earlier.

What makes this approach elegant is that it handles both the max-width constraint and padding in a single declaration. Unlike traditional Bootstrap containers, this works perfectly with `position: fixed` and `position: absolute` elements since it doesn't rely on horizontal padding that gets ignored in those positioning contexts.

Why would you need this and where was this useful at Opal? Well, the navigation at Opal was a complex beast. Because some parts use mix-blend-mode -- and some background elements are animated independently of the content -- there winds up being 3 or 4 different sections. 

- The background panel for the main navigation (shown on hover).
- The main navigation (logo and links)
- The "bulletin" panel (showing camera price and information)
- The white bulletin panel background.

Each section is a sibling, set to positioned fixed, and positioned to its place according to a 12 column grid. Using this approach of min() for containers means less wrapping containers.


You can check out an [example here.](https://codepen.io/anthonykoch/pen/GgqYgoG)



