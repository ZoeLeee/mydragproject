<template>
  <div class="left">
    <Button v-for="item in Components" draggable="true" :key="item.type">
      {{ item.title }}</Button
    >
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Button } from "element-ui";
import { IElement } from "@/application/interfaces/element";

@Component({
  components: {
    Button,
  },
})
export default class LeftPanel extends Vue {
  @Prop() private msg!: string;
  private activeName = "activeName";

  get Components(): IElement[] {
    return this.$$store.state.components;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.left {
  display: flex;
}
</style>
