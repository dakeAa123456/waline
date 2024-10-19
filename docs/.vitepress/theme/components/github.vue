<script setup lang="ts">
import github from 'canvas-confetti'
import { inBrowser } from 'vitepress';

if (inBrowser) {

/* 初始五彩纸屑 */
/*confetti({
    particleCount: 100,
    spread: 170,
    origin: { y: 0.6 },
})
*/

//Emoji纸屑
var scalar = 2;
var unicorn = github.shapeFromText({ text: '🦄', scalar });

var defaults = {
  spread: 360,
  ticks: 60,
  gravity: 0,
  decay: 0.96,
  startVelocity: 20,
  shapes: [unicorn],
  scalar
};

function shoot() {
    github({
    ...defaults,
    particleCount: 30
  });

  github({
    ...defaults,
    particleCount: 5,
    flat: true
  });

  github({
    ...defaults,
    particleCount: 15,
    scalar: scalar / 2,
    shapes: ['circle']
  });
}

setTimeout(shoot, 0);
setTimeout(shoot, 100);
setTimeout(shoot, 200);

}
</script>