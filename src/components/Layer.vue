<template>
    <div class="layer">

    </div>
</template>

<script>
    export default {
        name: 'layer',
        data () {
            return {
                mql: null,
            };
        },
        props: {
            rules: {
                type: String,
                default: '',
            }
        },
        methods: {
            init () {
                let rules = this.props;
                this.mql = window.matchMedia(rules);
            }
        }
    }
</script>

<style>

</style>
