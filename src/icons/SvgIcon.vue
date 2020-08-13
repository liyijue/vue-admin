<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="svgName"></use>
  </svg>
</template>

<script>
export default {
  props: {
    iconName: {
      type: String,
      default: ''
    },
    iconClass: {
      type: String,
      default: ''
    }
  },
  computed: {
    svgName: vm => `#icon-${vm.iconName}`,
    svgClass: vm => (vm.iconClass ? `svg-icon ${vm.iconClass}` : 'svg-icon')
  }
}
</script>

<style lang="scss" scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  fill: currentColor;
  color: #fff;
  &.font12 {
    font-size: 12px;
  }
  &.font20 {
    font-size: 20px;
  }
  &.marginR10 {
    margin-right: 10px;
  }
  &.black {
    color: black;
  }
}
</style>
