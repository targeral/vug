<template>
  <div
    ref="container"
    :class="
    [
      prefixCls,
      loading ? `${prefixCls}-loading` : '',
      bordered ? `${prefixCls}-bordered` : '',
      noHovering ? `${prefixCls}-no-hovering`: '',
      widerPadding ? `${prefixCls}-wider-padding` : '',
      updateWiderPaddingCalled ? `${prefixCls}-padding-transition` : '',
      isContainGrid() ? `${prefixCls}-contain-grid` : '',
    ]
    ">
    <div :class="`${prefixCls}-head`">
      <template v-if="title">
        <div :class="`${prefixCls}-head-title`" v-html="title"></div>
      </template>
      <template v-if="extra">
        <div :class="`${prefixCls}-extra`" v-html="extra"></div>
      </template>
    </div>
    <div :class="`${prefixCls}-body`" :style="bodyStyle">
      <template v-if="loading">
        <div :class="[
          loading ? `${prefixCls}-loading` : '',
          bordered ? `${prefixCls}-bordered` : '',
          noHovering ? `${prefixCls}-no-hovering`: '',
          widerPadding ? `${prefixCls}-wider-padding` : '',
          updateWiderPaddingCalled ? `${prefixCls}-padding-transition` : '',
          isContainGrid() ? `${prefixCls}-contain-grid` : '',
        ]">
        </div>
        <div :class="`${prefixCls}-loading-content`">
          <p :class="`${prefixCls}-loading-block`" :style="{ width: '94%' }"></p>
          <p>
            <span :class="`${prefixCls}-loading-block`" :style="{ width: '28%' }"></span>
            <span :class="`${prefixCls}-loading-block`" :style="{ width: '62%' }"></span>
          </p>
          <p>
            <span :class="`${prefixCls}-loading-block`" :style="{ width: '22%' }"></span>
            <span :class="`${prefixCls}-loading-block`" :style="{ width: '66%' }"></span>
          </p>
          <p>
            <span :class="`${prefixCls}-loading-block`" :style="{ width: '56%' }"></span>
            <span :class="`${prefixCls}-loading-block`" :style="{ width: '39%' }"></span>
          </p>
          <p>
            <span :class="`${prefixCls}-loading-block`" :style="{ width: '21%' }"></span>
            <span :class="`${prefixCls}-loading-block`" :style="{ width: '15%' }"></span>
            <span :class="`${prefixCls}-loading-block`" :style="{ width: '40%' }"></span>
          </p>
        </div>
      </template>
      <template v-else>
        <slot></slot>
      </template>
    </div>
  </div>
</template>

<script>
  import Grid from './Grid'
  import { throttleByAnimationFrameDecorator } from '../_util/throttleByAnimationFrame';
  export default {
    name: 'card',
    data () {
      return {
        widerPadding: false,
        updateWiderPaddingCalled: false,
      }
    },
    props: {
      prefixCls: {
        type: String,
        default: 'ant-card',
      },
      title: [String, Object],
      extra: [String, Object],
      bordered: {
        type: Boolean,
        default: true,
      },
      bodyStyle: Object,
      loading: {
        type: Boolean,
        default: false
      },
      noHovering: {
        type: Boolean,
        default: false
      },
      children: Object,
      id: String
    },
    watch: {
      widerPadding () {
        this.updateWiderPaddingCalled = true;
      }
    },
    components: {
      Grid,
    },
    methods: {
      updateWiderPadding () {
        console.log(this.updateWiderPadding.cancel);
        if (!this.$refs.container) {
          return ;
        }
        // 936 is a magic card width pixer number indicated by designer
        const WIDTH_BOUDARY_PX = 936;
        if (this.$refs.container.offsetWidth >= WIDTH_BOUDARY_PX && !this.widerPadding) {
          this.widerPadding = true;
        }
        if (this.$refs.container.offsetWidth < WIDTH_BOUDARY_PX && this.widerPadding) {
          this.widerPadding = false;
        }
      },
      isContainGrid () {
        let containGrid
        this.$children.forEach((child) => {
          if (child && child.type && child.type === 'Grid') {
            containGrid = true;
          }
        })
        return containGrid;
      }
    },
    mounted () {
      let self = this
      this.updateWiderPadding()
      this.resizeEvent = window.addEventListener('resize', self.updateWiderPadding);
    },
    beforeDestroy () {
      if (this.resizeEvent) {
        window.removeEventListener('resize', this.resizeEvent);
      }
      //this.updateWiderPadding.cancel();
    }
  }
</script>

<style lang="less">
@import '../style/index.less';
@import "../style/themes/default";
@import "../style/mixins/index";

@card-prefix-cls: ~"@{ant-prefix}-card";
@card-padding-base: 24px;
@card-padding-wider: 32px;

.@{card-prefix-cls} {
  background: @component-background;
  border-radius: @border-radius-sm;
  font-size: @font-size-base;
  position: relative;
  transition: all .3s;

  &:not(&-no-hovering):hover {
    box-shadow: @box-shadow-base;
    border-color: transparent;
  }

  &-bordered {
    border: @border-width-base @border-style-base @border-color-split;
  }

  &-head {
    height: @card-head-height;
    line-height: @card-head-height;
    background: @card-head-background;
    border-bottom: @border-width-base @border-style-base @border-color-split;
    padding: 0 @card-padding-base;
    border-radius: @border-radius-sm @border-radius-sm 0 0;
    .clearfix;
    margin-bottom: -1px; // Fix card grid overflow bug: https://gw.alipayobjects.com/zos/rmsportal/XonYxBikwpgbqIQBeuhk.png
    display: flex;

    &-title {
      font-size: @font-size-lg;
      text-overflow: ellipsis;
      max-width: 100%;
      overflow: hidden;
      white-space: nowrap;
      color: @card-head-color;
      font-weight: 500;
      display: inline-block;
      flex: 1;
    }
  }

  &-extra {
    float: right;
    text-align: right;
    // https://stackoverflow.com/a/22429853/3040605
    margin-left: auto;
  }

  &-body {
    padding: @card-padding-base;
    .clearfix;
  }

  &-loading &-body {
    user-select: none;
    padding: 0;
  }

  &-loading-content {
    padding: @card-padding-base;
  }

  &-loading-block {
    display: inline-block;
    margin: 5px 1% 0;
    height: 14px;
    border-radius: @border-radius-sm;
    background: linear-gradient(90deg, rgba(207, 216, 220, .2), rgba(207, 216, 220, .4), rgba(207, 216, 220, .2));
	  animation: card-loading 1.4s ease infinite;
    background-size: 600% 600%;
  }

  &-contain-grid &-body {
    margin: -1px 0 0 -1px;
    padding: 0;
  }

  &-grid {
    border-radius: 0;
    border: 0;
    box-shadow: 1px 0 0 0 @border-color-split, 0 1px 0 0 @border-color-split, 1px 1px 0 0 @border-color-split, 1px 0 0 0 @border-color-split inset, 0 1px 0 0 @border-color-split inset;
    width: 33.33%;
    float: left;
    padding: @card-padding-base;
    transition: all .3s;
    &:hover {
      position: relative;
      z-index: 1;
      box-shadow: @box-shadow-base;
    }
  }

  &-wider-padding &-head {
    padding: 0 @card-padding-wider;
  }

  &-wider-padding &-body {
    padding: @card-padding-base @card-padding-wider;
  }

  &-wider-padding &-extra {
    right: @card-padding-wider;
  }

  &-padding-transition &-head,
  &-padding-transition &-body {
    transition: padding .3s;
  }

  &-padding-transition &-extra {
    transition: right .3s;
  }
}

@keyframes card-loading {
  0%,
  100% {
		background-position: 0 50%;
	}
	50% {
		background-position: 100% 50%;
	}
}
</style>
