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
        validator (value) {
          return oneOf(value, ['primary', 'ghost', 'dashed', 'danger'])
        }
      },
      htmlType: {
        validator (value) {
          return oneOf(value, ['submit', 'button', 'reset'])
        },
        default: 'button'
      },
      icon: String,
      shape: {
        validator (value) {
          return oneOf(value, ['circle', 'circle-outline'])
        }
      },
      size: {
        validator (value) {
          return oneOf(value, ['small', 'large'])
        },
        default: 'default'
      },
      loading: {
        type: [Boolean, Object],
        default: false
      },
      ghost: {
        type: Boolean,
        default: false
      }
    },
    watch: {
      loading (next, cur) {
        cur && this.delayTimeout && clearTimeout(this.delayTimeout)

        if (typeof next !== 'boolean' && next.delay) {
          this.delayTimeout = setTimeout(() => (this.isLoading = true), next.delay)
        } else {
          this.isLoading = true;
        }
      }
    },
    beforeDestroy () {
      this.timeout && clearTimeout(this.timeout)
      this.delayTimeout && clearTimeout(this.delayTimeout)
    }
  }
</script>

<style lang="less">
@import '../style/index.less';
@import '../style/themes/default.less';
@import '../style/mixins/index.less';
@import './mixin.less';


@btn-prefix-cls: ~"@{ant-prefix}-btn";

// for compatibile
@btn-ghost-color: @text-color;
@btn-ghost-bg: transparent;
@btn-ghost-border: @border-color-base;

// Button styles
// -----------------------------
.@{btn-prefix-cls} {
  .btn;
  .btn-default;

  // Make sure that the target of Button's click event always be `button`
  // Ref: https://github.com/ant-design/ant-design/issues/7034
  > i,
  > span {
    pointer-events: none;
  }

  &-primary {
    .btn-primary;

    .@{btn-prefix-cls}-group &:not(:first-child):not(:last-child) {
      border-right-color: @btn-group-border;
      border-left-color: @btn-group-border;

      &:disabled {
        border-color: @btn-default-border;
      }
    }

    .@{btn-prefix-cls}-group &:first-child {
      &:not(:last-child) {
        border-right-color: @btn-group-border;
        &[disabled] {
          border-right-color: @btn-default-border;
        }
      }
    }

    .@{btn-prefix-cls}-group &:last-child:not(:first-child),
    .@{btn-prefix-cls}-group & + & {
      border-left-color: @btn-group-border;
      &[disabled] {
        border-left-color: @btn-default-border;
      }
    }
  }

  &-ghost {
    .btn-ghost;
  }

  &-dashed {
    .btn-dashed;
  }

  &-danger {
    .btn-danger;
  }

  &-circle,
  &-circle-outline {
    .btn-circle(@btn-prefix-cls);
  }

  &:before {
    position: absolute;
    top: -1px;
    left: -1px;
    bottom: -1px;
    right: -1px;
    background: #fff;
    opacity: 0.35;
    content: '';
    border-radius: inherit;
    z-index: 1;
    transition: opacity .2s;
    pointer-events: none;
    display: none;
  }

  .@{iconfont-css-prefix} {
    transition: margin-left .3s @ease-in-out;
  }

  &&-loading:before {
    display: block;
  }

  &&-loading:not(&-circle):not(&-circle-outline) {
    padding-left: 29px;
    pointer-events: none;
    position: relative;
    .@{iconfont-css-prefix} {
      margin-left: -14px;
    }
  }

  &-sm&-loading:not(&-circle):not(&-circle-outline) {
    padding-left: 24px;
    .@{iconfont-css-prefix} {
      margin-left: -17px;
    }
  }

  &-group {
    .btn-group(@btn-prefix-cls);
  }

  &:not(&-circle):not(&-circle-outline)&-icon-only {
    padding-left: 8px;
    padding-right: 8px;
  }

  // http://stackoverflow.com/a/21281554/3040605
  &:focus > span,
  &:active > span {
    position: relative;
  }

  // To ensure that a space will be placed between character and `Icon`.
  > .@{iconfont-css-prefix} + span,
  > span + .@{iconfont-css-prefix} {
    margin-left: 0.5em;
  }

  &-clicked:after {
    content: '';
    position: absolute;
    top: -1px;
    left: -1px;
    bottom: -1px;
    right: -1px;
    border-radius: inherit;
    border: 0 solid @primary-color;
    opacity: 0.4;
    animation: buttonEffect .4s;
    display: block;
  }

  &-danger&-clicked:after {
    border-color: @btn-danger-color;
  }

  &-background-ghost {
    background: transparent !important;
    border-color: #fff;
    color: #fff;
  }

  &-background-ghost&-primary {
    .button-variant-ghost(@primary-color);
  }

  &-background-ghost&-danger {
    .button-variant-ghost(@btn-danger-color);
  }
}

@keyframes buttonEffect {
  to {
    opacity: 0;
    top: -6px;
    left: -6px;
    bottom: -6px;
    right: -6px;
    border-width: 6px;
  }
}

</style>
