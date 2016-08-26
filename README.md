## Website Performance Optimization portfolio project

### Part 1: Optimize PageSpeed Insights score for index.html

#### Hosted on GitHub

I used git hub to host the [project](https://eduffner.github.io/WebsiteOptimization/).

#### Grunt tasks

I downloaded grunt to my project and created a Gruntfile.js to start my optimizations. I then optimized the images using imageoptim and responsive images. I minified css and js and then I inlined it.

### Part 2: Optimize Frames per Second in pizza.html

#### Optimized pizza slider loop

I moved certain calculations outside of the loop so limit the forced reflow bottleneck.

#### Scroll at 60fps

I resized the image to 100x100 to limit repaint

I took moved some bottleneck calculations from updatePositions()

I made paint and reflow into a single cycle with an AnimationFrame when calling scroll to update Positions

I optimized the movement of the pizzas by using CSS transform 'translateX()' instead of elem.bestLeft



