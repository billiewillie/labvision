<script
  setup
  lang="ts">
import {cn} from "~/lib/utils";

const props = defineProps<{
  type?: "submit",
  ariaLabel?: 'submit'
  variant?: 'black'
  class?: string
}>()
</script>

<template>
  <button
    :type="props.type"
    :aria-label="props.ariaLabel"
    class="rainbow-button"
    :class="cn(props.variant === 'black' ? 'black' : '', props.class)">
    <slot/>
  </button>
</template>

<style scoped>
.rainbow-button {
  position: relative;
  color: black;
  font-weight: 600;
  line-height: 1;
  padding: 12px;
  -webkit-appearance: button;
  background-color: transparent;
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
  border-radius: 8px;
  border: .08rem solid transparent;
  background-origin: border-box;
  background-size: 200%;
  background-clip: padding-box, border-box, border-box;
  transition-duration: .15s;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(.4, 0, .2, 1);
  background-image: linear-gradient(#fff, #fff), linear-gradient(#fff 50%, hsla(0, 0%, 100%, .6) 80%, transparent), linear-gradient(90deg, hsl(0, 100%, 63%), hsl(90 100% 63%), hsl(210 100% 63%), hsl(195 100% 63%), hsl(270 100% 63%));
  animation: rainbow 2s infinite linear;

  @media (min-width: 768px) {
    padding: 12px 24px;
  }
}

.rainbow-button.black {
  color: white;
  background-color: black;
  background-image: linear-gradient(#000, #000), linear-gradient(#000 50%, hsla(0, 0%, 100%, .6) 80%, transparent), linear-gradient(90deg, hsl(0, 100%, 63%), hsl(90 100% 63%), hsl(210 100% 63%), hsl(195 100% 63%), hsl(270 100% 63%));

}

.rainbow-button:before {
  content: "";
  position: absolute;
  --tw-translate-x: -50%;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-scale-y: 1;
  --tw-scale-x: 1;
  --tw-skew-y: 0;
  --tw-skew-x: 0;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  filter: blur(.8rem);
  width: 60%;
  height: 20%;
  left: 50%;
  bottom: -20%;
  z-index: 0;
  transition: width .2s ease-in-out;
  background-size: 200%;
  background-image: linear-gradient(90deg, hsl(0 100% 63%), hsl(90 100% 63%), hsl(210 100% 63%), hsl(195 100% 63%), hsl(270 100% 63%));
  animation: rainbow 2s infinite linear;
}

.rainbow-button:hover:before {
  width: 80%;
}

@keyframes rainbow {
  0% {
    background-position: 0;
    content: "";
  }
  100% {
    background-position: 200%;
    content: "";
  }
}
</style>