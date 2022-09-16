<template>
  <div class="slider">
      <h3>{{ title }}</h3>
      <span @mouseover="scrollEsquerda()" @mouseout="clearScroll()" class="handle handlePrev active">
        <i class="fa fa-caret-left" aria-hidden="true"></i>
      </span>

      <div ref="scroller" class="row">
        <div class="row__inner">
          <slot></slot>
        </div>
      </div>

      <span @mouseover="scrollDireita()" @mouseout="clearScroll()"  class="handle handleNext active">
        <i class="fa fa-caret-right" aria-hidden="true"></i>
      </span>
    </div>
</template>

<script>

export default {
  name: 'CategoryContainer',
  props: ['title'],
  methods: {
    scrollDireita: function () {
      this.intervalo = setInterval(() => { this.$refs.scroller.scrollLeft += 1 }, 5)
    },
    scrollEsquerda: function () {
      this.intervalo = setInterval(() => { this.$refs.scroller.scrollLeft -= 1 }, 5)
    },
    clearScroll: function () {
      clearInterval(this.intervalo)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
