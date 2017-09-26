<template>
<div class="person-data">
  <header>
    <Avatar :src="picMock" size="large" :class="'head-pic'" shape="circle" />
    <hgroup>
      <h1>{{ author }}</h1>
      <p>{{ sign }}</p>
    </hgroup>
  </header>
</div>
</template>

<script>
  import { Avatar } from '@/components';

  export default {
    name: 'personData',
    data () {
      return {
        picMock: 'http://litten.me/assets/blogImg/litten.png',
      };
    },
    props: {
      pic: {
        type: String,
        default: 'http://litten.me/assets/blogImg/litten.png',
      },
      author: {
        type: String,
        default: 'author',
      },
      sign: {
        type: String,
        default: 'sign',
      }
    },
    components: {
      Avatar,
    }
  }
</script>

<style lang="postcss">
.person-data {
  background-color: #3890ff;
  padding-top: 200px;

  header {
    height: 100%;
    background-color: #fff;
    position: relative;

    hgroup {
      padding-top: calc(150px/2);

      h1 {
        font-size: 24px;
        line-height: 40px;
      }

      p {
        font-size: 20px;
        line-height: 36px;
      }
    }
  }

  .head-pic {
    width: 150px;
    height: 150px;
    display: block;
    border: 5px solid #fff;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%) rotateZ(0deg);
    transition: transform 1s ease;
    overflow: hidden;

    &:hover {
      transform: translate(-50%, -50%) rotateZ(180deg);
    }
  }
}
</style>
