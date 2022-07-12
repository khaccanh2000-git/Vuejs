/* eslint-disable vue/valid-v-slot */
<template>
  <div>
    <div class="border-1 p-3 col-12">
      <div class="col-12 flex">
        <div class="col-6">
          <h5>Tài khoản</h5>
          <InputText type="text" v-model="userRef.acc" class="w-full" />
        </div>
        <div class="col-6">
          <h5>Tên người dùng</h5>
          <InputText
            type="text"
            v-model="userRef.name"
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
            v-model="userRef.phone"
            placeholder=" "
            class="w-full"
          />
        </div>
        <div class="col-6">
          <h5>Email</h5>
          <InputText
            type="text"
            v-model="userRef.email"
            placeholder="abc@gmail.com"
            class="w-full"
          />
        </div>
      </div>
      <div class="col-12">
        <div class="col-12">
          <div class="field-checkbox">
            <Checkbox id="binary" v-model="userRef.checked" :binary="true" />
            <label for="binary">Nhận SMS</label>
          </div>
        </div>
      </div>
      <div class="col-12 flex">
        <div class="col-6">
          <h5>Đơn vị</h5>
          <Dropdown
            v-model="userRef.unit"
            :options="units"
            optionLabel="name"
            optionValue="name"
            class="w-full"
          />
        </div>
        <div class="col-6">
          <h5>Vai trò</h5>
          <Dropdown
            v-model="userRef.role"
            :options="roles"
            optionLabel="name"
            optionValue="name"
            class="w-full"
          />
        </div>
      </div>
      <div class="col-12">
        <div class="col-12">
          <p>Trạng thái: {{ userRef.status }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { reactive, unref, onMounted } from "vue";
import { useCurrentUser } from "./user.service";
import { roles, units } from "../userMng.service";
export default {
  setup() {
    const { getEditing, getCurrentUser } = useCurrentUser();

    const userRef = reactive({
      acc: "",
      name: "",
      phone: "",
      email: "",
      checked: "",
      unit: "",
      role: "",
      status: "",
    });

    function setUser() {
      userRef.acc = unref(getCurrentUser).acc;
      userRef.name = unref(getCurrentUser).name;
      userRef.email = unref(getCurrentUser).email;
      userRef.phone = unref(getCurrentUser).phone;
      userRef.checked = unref(getCurrentUser).checked;
      userRef.unit = unref(getCurrentUser).unit;
      userRef.role = unref(getCurrentUser).role;
      userRef.status = unref(getCurrentUser).status;
      console.log(userRef);
    }

    // function resetUser() {
    //   userRef.acc = "";
    //   userRef.name = "";
    //   userRef.email = "";
    //   userRef.checked = "";
    //   userRef.selectedRole = "";
    //   userRef.selectedStatus = "";
    // }

    // watch(getEditing, () => {
    //   console.log(unref(getEditing));
    //   if (unref(getEditing)) {
    //     setUser();
    //   } else {
    //     resetUser();
    //   }
    // });

    onMounted(() => {
      if (unref(getEditing)) {
        setUser();
      }
    });
    return {
      userRef,
      getCurrentUser,
      setUser,
      units,
      roles,
    };
  },
};
</script>
