<template>
  <div class="right">
    <Tabs>
      <TabPane label="属性" name="style"> 属性 </TabPane>
      <TabPane label="动画" name="animate"> 动画 </TabPane>
    </Tabs>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Tabs, TabPane } from "element-ui";

@Component({
  components: {
    Tabs,
    TabPane,
  },
})
export default class RightPanel extends Vue {
  @Prop() private msg!: string;
  data() {
    return {
      activeName: "style",
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
