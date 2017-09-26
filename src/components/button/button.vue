<template>
  <button
    :class="[
      prefixCls,
      type ? `${prefixCls}-${type}` : ``,
      shape ? `${prefixCls}-${shape}` : ``,
      size ? `${prefixCls}-${size}` : ``,
      isLoading ? `${prefixCls}-loading` : ``,
      ghost ? `${prefixCls}-background-ghost` : ``,
      clicked ? `${prefixCls}-clicked` : ``,
    ]"
    @click="handleClick"
    @mouseup="handleMouseUp"
  >
  <span>
    <slot></slot>
  </span>
  </button>
</template>

<script>
  import { oneOf } from '../_util';

  export default {
    name: 'button',
    data () {
      return {
        prefixCls: 'ant-btn',
        clicked: false,
        timeout: null,
        delayTimeout: null,
        isLoading: false,
      }
    },
    methods: {
      handleClick (e) {
        this.clicked = true;
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => { this.clicked = false }, 500)
        this.$emit('click', e)
      },
      // Handle auto focus when click button in Chrome
      handleMouseUp (e) {
        e.currentTarget.blur();
      }
    },
    props: {
      type: {
        type: String,
        validator (value) {
          return oneOf(value, ['primary', 'ghost', 'dashed', 'danger'])
        }
      },
      htmlType: {
        type: String,
        validator (value) {
          return oneOf(value, ['submit', 'button', 'reset'])
        }
      },
      icon: String,
      shape: {
        type: String,
        validator (value) {
          return oneOf(value, ['circle', 'circle-outline'])
        }
      }
    }
  }
</script>