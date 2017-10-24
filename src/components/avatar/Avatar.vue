<template>
  <span :class="classString">
    <template v-if="src && isImgExist">
      <img :src="src" @error="handleImgLoadError" />
    </template>
    <template v-else-if="icon">
      <Icon :type="icon" />
    </template>
    <template v-else>
      <span ref="childrenNode" :class="`${ prefixCls }--string`" :style="childrenStyle">
        <slot></slot>
      </span>
    </template>
  </span>
</template>

<script>
import classNames from 'classnames';
import Icon from '../icon';

export default {
  name: 'avatar',
  props: {
    shape: {
      validator: function (value) {
        const SHAPES = ['circle', 'square'];
        console.log(value, SHAPES.indexOf(value) > -1);
        return SHAPES.indexOf(value) > -1;
      },
      default: 'circle',
    },
    size: {
      validator: function (value) {
        const SIZES = ['large', 'small', 'default'];
                console.log(value, SIZES.indexOf(value) > -1);
        return SIZES.indexOf(value) > -1;
      },
      default: 'default',
    },
    src: {
      type: String,
      default: '',
    },
    icon: String,
    prefixCls: {
      type: String,
      default: 'ant-avatar',
    },
    className: {
      type: String,
    },
    children: null,
  },
  data: function () {
    return {
      scale: 1,
      isImgExist: true,
      prevChildren: {},
      prevScale: '',
    }
  },
  computed: {
    childrenStyle () {
      let style = null;
      if(this.$refs.childrenNode || this.scale !== 1) {
        style =  {
          msTransform: `scale(${this.scale})`,
          WebkitTransform: `scale(${this.scale})`,
          transform: `scale(${this.scale})`,
          position: 'absolute',
          display: 'inline-block',
          left: `calc(50% - ${Math.round(this.$refs.childrenNode.offsetWidth / 2)}px)`,
        }; 
      }
      return style;
    },
    sizeCls () {
      let prefixCls = this.prefixCls;
      let size      = this.size;
      return classNames({
        [`${prefixCls}-lg`]: size === 'large',
        [`${prefixCls}-sm`]: size === 'small',
      });
    },
    classString () {
      let prefixCls = this.prefixCls;
      let className = this.className;
      let sizeCls   = this.sizeCls;
      let shape     = this.shape;
      let src       = this.src;
      let icon      = this.icon;

      return classNames(prefixCls, className, sizeCls, {
        [`${prefixCls}-${shape}`]: shape,
        [`${prefixCls}-image`]: src,
        [`${prefixCls}-icon`]: icon,
      });
    }
  },
  components: {
    Icon
  },
  methods: {
    setScale () {
      const childrenNode = this.$refs.childrenNode;
      if (childrenNode) {
        const childrenWidth = childrenNode.offsetWidth;
        const avatarWidth   = this.$el.getBoundingClientRect().width;

        if (avatarWidth - 8 < childrenWidth) {
          this.scale = (avatarWidth - 8) / childrenWidth;
        } else {
          this.scale = 1;
        }
      }
    },
    handleImgLoadError () {
      console.log('image is not exist');
      this.isImgExist = false;
    }
  },
  mounted () {
    this.setScale();
    this.prevChildren = this.$refs.childrenNode;
    this.prevScale = this.scale;
  },
  updated () {
    let prev = this.prevChildren;
    if (prev !== this.$refs.childrenNode || (this.prevScale !== this.scale && this.scale === 1)) {
      this.setScale();
    }
  }
}
</script>

<style lang="less">
@import "../style/index.less";
@import "../style/themes/default.less";

@avatar-prefix-cls: ~"@{ant-prefix}-avatar";
.@{avatar-prefix-cls} {
  display: inline-block;
  text-align: center;
  background: @avatar-bg;
  color: @avatar-color;
  white-space: nowrap;
  position: relative;
  overflow: hidden;

  .avatar-size(@avatar-size-base, @avatar-font-size-base);

  &-lg {
    .avatar-size(@avatar-size-lg, @avatar-font-size-lg);
  }

  &-sm {
    .avatar-size(@avatar-size-sm, @avatar-font-size-sm);
  }

  &-square {
    border-radius: @avatar-border-radius;
  }

  & > img {
    width: 100%;
    height: 100%;
  }
}

.avatar-size(@size, @font-size) {
  width: @size;
  height: @size;
  line-height: @size;
  border-radius: @size / 2;

  & > * {
    line-height: @size;
  }

  &.@{avatar-prefix-cls}-icon {
    font-size: @font-size;
  }
}
</style>
