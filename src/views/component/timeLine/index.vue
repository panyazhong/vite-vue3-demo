<template>
  <div class="timeline">
    <a-timeline mode="alternate">
      <a-timeline-item>Create a services site 2015-09-01</a-timeline-item>
      <a-timeline-item>
        <template #dot>
          <svg-icon name="cart"></svg-icon>
        </template>
        Solve initial network problems 2015-09-01
      </a-timeline-item>
      <a-timeline-item>
        <template #dot>
          <svg-icon name="user"></svg-icon>
        </template>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo.
      </a-timeline-item>
      <a-timeline-item color="red">
        Network problems being solved 2015-09-01
      </a-timeline-item>
      <a-timeline-item>Create a services site 2015-09-01</a-timeline-item>
      <a-timeline-item>
        <template #dot> <svg-icon name="message"></svg-icon></template>
        Technical testing 2015-09-01
      </a-timeline-item>
    </a-timeline>
  </div>
</template>

<script>
import { TagsOutlined } from '@ant-design/icons-vue';
import { defineComponent } from 'vue';
export default defineComponent({
  components: {
    TagsOutlined,
  },
});
</script>

<style lang="scss" scoped>
.timeline {
  background: #fff;
  padding: 20px;
  border-radius: 10px;
}
.ant-timeline-item {
  padding-bottom: 40px;
  .svg-icon {
    font-size: 26px;
  }
}
</style>
