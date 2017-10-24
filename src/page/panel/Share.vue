<template>
  <div class="share">
    <ul class="share-link social-share">
      <li class="social-share-icon icon-tencent"></li>
      <li class="social-share-icon icon-qq"></li>
      <li class="social-share-icon icon-wechat"></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'share',
    data () {
      return {};
    }
  }
</script>

<style lang="postcss">
.share {
  padding: 10px;
}

.share-link {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  padding: 0;

  li {
    width: 32px;
    height: 32px;
    border: 1px solid #000;
    border-radius: 50%;
  }
}
</style>


