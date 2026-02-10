Container classes have barely changed since Bootstrap popularized them over a decade ago: set a max-width, add auto margins, maybe some padding. It works, so why mess with it? 

```css
.container {
  max-width: 1200px;
  margin-left: auto;
  maright-right: auto;
}
```

If you look real close, you kind for some interesting ways people are doing containers out in the wild. The most interesting innovation I've seen with containers has been Kevin Powell's video, where he used CSS grid. 

<div className="relative aspect-video">
  <iframe width="100%" height="100%" src="https://www.youtube.com/embed/c13gpBrnGEw?si=sXaTVwr7x-uLxt7d" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

After working at Opal Camera, Aristide Benoist had introduced to me another flavor of container. This one is pretty interesting. Not only is this restricting the width, it's also adding padding --- all in one calc! 

```css
.wrap-ml {
  --wrap-width: min(1600px, calc(100% - 16px * 2));
  width: var(--wrap-width);
  margin-left: calc((100% - var(--wrap-width)) * .5);
}
```

We're essentially saying: take the smaller of the two values, whether the 1600px, or the full width of the container minus the padding. This results in a maximum size of 1600px, and anytime the viewport is below 1600px, it reduces the container size to 100% minus the size of the padding. The margin left calc value simply adds margin left so the container to be centered. 

This one is great, because unlike the traditional bootstrap container classes, this one will work on position fixed and absolute elements.

You can check out an [example here.](https://codepen.io/anthonykoch/pen/GgqYgoG)



