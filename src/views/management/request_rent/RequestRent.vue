<template>
  <TabView>
    <TabPanel header="Yêu cầu mới"> <NewRequest /> </TabPanel>
    <TabPanel header="Đang Xử Lý"> <Requesting /> </TabPanel>
    <TabPanel header="Đã Xử Lý"> <Requested /> </TabPanel>
    <TabPanel header="Đã Hủy"> <Canceled /> </TabPanel>
  </TabView>
</template>
<script>
import NewRequest from "./new_request/NewRequest.vue";
import Requested from "./requested/Requested.vue";
import Requesting from "./requesting/Requesting.vue";
import Canceled from "./canceled/Canceled.vue";
export default {
  components: { NewRequest, Requested, Requesting, Canceled },
};
</script>

<style scoped lang="scss">
::v-deep(.tabmenudemo-content) {
  padding: 2rem 1rem;
}
</style>
