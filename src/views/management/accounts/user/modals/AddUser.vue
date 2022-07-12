/* eslint-disable vue/valid-v-slot */
<template>
  <div>
    <div class="border-1 p-3 col-12">
      <div class="col-12 flex">
        <div class="col-6">
          <h5>Tài khoản</h5>
          <InputText
            type="text"
            v-model="account"
            placeholder=" "
            class="w-full"
          />
        </div>
        <div class="col-6">
          <h5>Tên người dùng</h5>
          <InputText
            type="text"
            v-model="name"
            placeholder=" "
            class="w-full"
          />
        </div>
      </div>
      <div class="col-12 flex">
        <div class="col-6">
          <h5>Số điện thại</h5>
          <InputText
            type="number"
            v-model="phone"
            placeholder=" "
            class="w-full"
          />
        </div>
        <div class="col-6">
          <h5>Email</h5>
          <InputText
            type="text"
            v-model="name"
            placeholder="abc@gmail.com"
            class="w-full"
          />
        </div>
      </div>
      <div class="col-12">
        <div class="col-12">
          <div class="field-checkbox">
            <Checkbox id="binary" v-model="checked" :binary="true" />
            <label for="binary">Nhận SMS</label>
          </div>
        </div>
      </div>
      <div class="col-12 flex">
        <div class="col-6">
          <h5>Đơn vị</h5>
          <Dropdown
            v-model="selectedUnit"
            :options="units"
            optionLabel="name"
            optionValue="key"
            class="w-full"
          />
        </div>
        <div class="col-6">
          <h5>Vai trò</h5>
          <Dropdown
            v-model="selectedRole"
            :options="roles"
            optionLabel="name"
            optionValue="key"
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
    const units = [
      { name: "Chưa chọn", key: 0 },
      { name: "Tổng công ty", key: 1 },
      { name: "Công ty cổ phần cấp nước Chợ Lớn", key: 2 },
      { name: "Công ty cổ phần cấp nước Trung An", key: 3 },
      { name: "Công ty cổ phần cấp nước Chợ Lớn", key: 4 },
    ];
    const roles = [
      { name: "Chưa chọn", key: 0 },
      { name: "Tất cả", key: 1 },
      { name: "Quản lý khu vực", key: 2 },
      { name: "Giám sát", key: 3 },
    ];
    const checked = ref(false);
    const selectedRole = ref(0);
    const selectedUnit = ref(0);

    return { units, selectedUnit, roles, selectedRole, checked };
  },
};
</script>
