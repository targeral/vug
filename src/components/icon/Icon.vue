<template>
  <i
    :class="[
        'anticon',
        `anticon-${type}`,
        !!spin || type === 'loading' ? `anticon-spin` : ``
    ]"
  ></i>
</template>

<script>
export default {
  name: 'icon',
  props: {
    type: String,
    spin: {
      type: Boolean,
      default: false,
    }
  }
}
</script>

<style lang="less">
@import '../style/index.less';
</style>
