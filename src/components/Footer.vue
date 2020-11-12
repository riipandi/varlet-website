<template>
  <footer class="container flex justify-center w-full py-12 mx-auto opacity-75">
    <p class="flex text-center">
      Brought to you with
      <icon
        icon="heart"
        class="w-5 mx-2 transition-colors duration-200 text-brand motion-safe:animate-pulse"
      />
      by
      <a
        href="https://twitter.com/riipandi"
        class="font-bold"
      >&nbsp;Aris Ripandi&nbsp;</a>
    </p>
  </footer>
</template>

<script>
import Icon from '@/components/Icon';

export default {
  components: { Icon },
};
</script>
