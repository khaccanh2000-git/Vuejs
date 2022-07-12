<template>
  <div class="grid card font-medium">
    <div class="col-6 pr-4 pl-4">
      <div class="col-12">
        <div class="grid">
          <h5>Thông Tin Doanh Nghiệp</h5>
          <div class="p-fluid formgrid grid">
            <div class="field col-12 md:col-8">
              <label for="firstname2">Tên Doanh Nghiệp</label>
              <InputText id="firstname2" type="text" />
            </div>
            <div class="field col-12 md:col-4">
              <label for="firstname2">Mã số thuế</label>
              <InputText id="firstname2" type="number" />
            </div>
            <div class="field col-12 md:col-6">
              <label for="firstname2">Số Điện Thoại</label>
              <InputText id="firstname2" type="text" />
            </div>
            <div class="field col-12 md:col-6">
              <label for="lastname2">Email</label>
              <InputText id="lastname2" type="email" />
            </div>
            <div class="field col12 md:col-12">
              <label for="lastname2">Địa Chỉ Doanh Nghiệp</label>
              <InputText id="lastname2" type="text" />
            </div>
            <div class="field col-12 md:col-6">
              <label for="state">Phường/Xã</label>
              <Dropdown
                id="state"
                v-model="dropdownItem"
                :options="dropdownItems"
                option-label="name"
                placeholder="Chọn Phường/Xã"
              />
            </div>
            <div class="field col-12 md:col-6">
              <label for="state">Quận/Huyện</label>
              <Dropdown
                id="state"
                v-model="dropdownItem"
                :options="dropdownItems"
                option-label="name"
                placeholder="Chọn Quận/Huyện"
              />
            </div>
            <div class="field col-12 md:col-6">
              <label for="state">Thành Phố/Tỉnh</label>
              <Dropdown
                id="state"
                v-model="dropdownItem"
                :options="dropdownItems"
                option-label="name"
                placeholder="Chọn Thành Phố/Tỉnh"
              />
            </div>
            <div class="field col-12 md:col-6">
              <label for="state">Quốc gia</label>
              <Dropdown
                id="state"
                v-model="dropdownItem"
                :options="dropdownItems"
                option-label="name"
                placeholder="Chọn Quốc gia"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="col-12">
        <h5>Logo</h5>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  setup() {
    const value1 = ref();
    return {
      value1,
    };
  },
};
</script>
