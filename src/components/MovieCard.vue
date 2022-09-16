<template>
  <div class="gui-card"
    :style="efeitoClick"
    @click="clickEfeito"
    @mouseout="removeEfeito"
  >
    <div class="gui-card__media">
      <img class="gui-card__img" :src="image" alt=""  />
    </div>
    <div class="gui-card__details">
      <div class="gui-card__title">
        {{ title }}
      </div>
    </div>
  </div>

  </template>

<script>
export default {
  name: 'MovieCard',
  props: ['title', 'image'],
  data () {
    return {
      efeitoClick: null
    }
  },
  methods: {
    clickEfeito: function () {
      this.efeitoClick = 'transform: scale(1.9); margin-right: 110px'
    },
    removeEfeito: function () {
      this.efeitoClick = null
    }
  }
}
</script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>

  </style>
