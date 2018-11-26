<template>
    <div>
        <h3>2.6 插槽相关</h3>
        <task-menu>
            <div slot="title" class="fontSizeBig">
                <p>test</p> {{test}} <p>test</p>
            </div>
        </task-menu>
        <task-menu :title="test"></task-menu>
    </div>
</template>

<script>
import Task from "../components/taskMenu.vue";
export default {
  components: {
    "task-menu": Task
  },
  data() {
    return {
      test: "testcon"
    };
  }
};
</script>

<style lang="stylus">
</style>