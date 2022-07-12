/* eslint-disable vue/valid-v-slot */
<template>
  <div>
    <div class="border-1 p-3 col-12">
      <div class="col-12 flex">
        <div class="col-5">
          <h5>Mã đơn vị <span class="text-pink-500">(*)</span></h5>
          <InputText
            type="text"
            v-model="code"
            placeholder=" "
            class="w-full"
          />
        </div>
        <div class="col-4">
          <h5>Thứ tự hiển thị</h5>
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
          <h5>Tên đơn vị <span class="text-pink-500">(*)</span></h5>
          <InputText
            type="text"
            v-model="name_unit"
            placeholder=" "
            class="w-full"
          />
        </div>
      </div>
      <div class="col-12">
        <div class="col-12">
          <h5>Đơn vị quản lý</h5>
          <Dropdown
            v-model="selectedUnitMng"
            :options="units"
            optionLabel="name"
            optionValue="key"
            class="w-full"
          />
        </div>
      </div>
      <div class="col-12 flex">
        <div class="col-6">
          <h5>Người liên hệ</h5>
          <InputText
            type="text"
            v-model="customer"
            placeholder=" "
            class="w-full"
          />
        </div>
        <div class="col-6">
          <h5>Email</h5>
          <InputText
            type="email"
            v-model="email"
            placeholder="abc@gmail.com"
            class="w-full"
          />
        </div>
      </div>
      <div class="col-12 flex">
        <div class="col-6">
          <h5>Số điện thoại</h5>
          <InputText
            type="number"
            v-model="phone"
            placeholder=" "
            class="w-full"
          />
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
