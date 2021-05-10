<template>
  <div>
    <table class="table table-striped draggable">
      <thead class="thead-dark">
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Name</th>
          <th scope="col">Sport</th>
        </tr>
      </thead>
      <draggable v-model="list" tag="tbody" item-key="name" @change="onChange">
        <template #item="{ element }">
          <tr>
            <td scope="row">{{ element.id }}</td>
            <td>{{ element.name }}</td>
            <td>{{ element.sport }}</td>
          </tr>
        </template>
      </draggable>
    </table>

    <div class="list">
      <a-alert message="list 数据" type="info" />
      <a-row :gutter="16">
        <a-col v-for="item in list" :key="item.id">
          <a-card :title="item.name" :bordered="false">
            <p>{{ item.id }}-{{ item.name }}-{{ item.sport }}</p>
          </a-card>
        </a-col>
      </a-row>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import draggable from 'vuedraggable';

export default defineComponent({
  components: {
    draggable,
  },
  setup() {
    const list = ref([
      { name: 'dapan', id: 5, sport: 'basketball' },
      { name: 'xiaoming', id: 6, sport: 'football' },
      { name: 'potato', id: 7, sport: 'table tennis' },
    ]);

    const onChange = (params: any) => {};

    return {
      list,
      onChange,
    };
  },
});
</script>
<style scoped lang="scss">
.table {
  width: 100%;
  border: 1px solid rgb(240, 240, 240);
  th {
    border: 1px solid rgb(240, 240, 240);
    border-top: none;
    padding: 10px;
    background-color: rgb(250, 250, 250);
  }
  td {
    border: 1px solid rgb(240, 240, 240);
    padding: 10px;
    background-color: rgb(255, 255, 255);
  }
}
.draggable {
  td {
    cursor: move;
  }
}

.list {
  margin-top: 20px;
}
</style>
