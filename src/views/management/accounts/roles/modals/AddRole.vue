<template>
  <div>
    <div class="border-1 p-3 col-12">
      <div class="col-12 flex">
        <div class="col-6">
          <h5>Mã <span class="text-pink-500">(*)</span></h5>
          <InputText
            type="text"
            v-model="code"
            placeholder=" "
            class="w-full"
          />
        </div>
        <div class="col-6">
          <h5>Tên vai trò <span class="text-pink-500">(*)</span></h5>
          <InputText
            type="text"
            v-model="code"
            placeholder=" "
            class="w-full"
          />
        </div>
      </div>
      <div class="col-12">
        <div class="col-12">
          <h5>Mô tả</h5>
          <Textarea class="w-full" style="min-height: 200px" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  setup() {
    const selectedUnitMng = ref(1);
    const units = ref([
      { name: "TỔNG CÔNG TY CẤP NƯỚC SÀI GÒN", key: 1 },
      { name: "Công ty Cổ phần Cấp nước Trung An", key: 2 },
      { name: "Công ty Cổ phần Cấp nước Tân Hòa", key: 3 },
      { name: "Công ty Cổ phần Cấp nước Phú Hòa Tân", key: 4 },
    ]);
    return { units, selectedUnitMng };
  },
};
</script>
