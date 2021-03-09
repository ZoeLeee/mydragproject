<template>
  <div class="home">
    <Container direction="vertical">
      <Header>
        <Button>撤销</Button>
        <Button>重做</Button>
        <div class="size">
          <span>画布大小</span>
          <input type="text" v-model="width" />*
          <input type="text" v-model="height" />
        </div>
      </Header>
      <Container>
        <Aside width="300px">
          <LeftPanel />
        </Aside>
        <Main>
          <div class="content">
            <div
              class="editor"
              v-bind:style="{ width: width + 'px', height: height + 'px' }"
            >
              画布
            </div>
          </div>
        </Main>
        <Aside width="300px">
          <RightPanel />
        </Aside>
      </Container>
    </Container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import RightPanel from "@/components/RightPanel.vue"; // @ is an alias to /src
import LeftPanel from "@/components/LeftPanel.vue"; // @ is an alias to /src
import { Container, Header, Aside, Main, Button, Input } from "element-ui";

@Component({
  components: {
    Container,
    Header,
    Aside,
    Main,
    Button,
    Input,
    RightPanel,
    LeftPanel,
  },
})
export default class Home extends Vue {
  data() {
    return {
      width: 1200,
      height: 600,
    };
  }
}
</script>

<style lang="less">
.home {
  height: 100%;
  & > .el-container {
    height: 100%;
    .el-container {
      margin-top: 1px;
    }
  }
  .el-main {
    background: #f5f5f5;
    padding: 2%;
    position: relative;
    overflow: hidden;
  }
  .el-header {
    outline: 1px solid #ccc;
    display: flex;
    align-items: center;
  }
  .el-aside {
    padding: 20px;
  }
  .size {
    margin-left: 20px;
    display: flex;
    align-items: center;
    input {
      height: 20px;
      width: 50px;
    }
  }
  .content {
    overflow: auto;
    height: 100%;
    .editor {
      background: #fff;
      margin: auto;
      position: relative;
    }
  }
}
</style>