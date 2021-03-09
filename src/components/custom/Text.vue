<template>
  <div>{{ title }}</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Button } from "element-ui";

@Component({
  components: {},
})
export default class IText extends Vue {
  @Prop() private title!: string;
  data() {
    return {};
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
</style>
