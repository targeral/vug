<template>
  <div :class="
    `${prefixCls}-grid`
  ">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'CardGrid',
  data () {
    return {
      type: 'Grid',
    }
  },
  props: {
    prefixCls: {
      type: String,
      default: 'ant-card'
    }
  }
}
</script>