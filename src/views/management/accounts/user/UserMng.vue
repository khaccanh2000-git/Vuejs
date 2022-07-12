<template>
  <div class="col-12 card">
    <div class="pb-2">
      <h5>Tiêu chí tìm kiếm</h5>
      <div class="flex w-full">
        <div class="col-3">
          <h5>Đon vị</h5>
          <Dropdown
            v-model="selectedUnit"
            :options="units"
            optionLabel="name"
            optionValue="key"
            class="w-full"
          />
        </div>
        <div class="col-3">
          <h5>Người dùng</h5>
          <InputText
            placeholder="Nhập thông tin người dùng"
            v-model="user_info"
            class="w-full"
          />
        </div>
        <div class="col-2">
          <h5>Trạng thái</h5>
          <Dropdown
            v-model="selectedStatus"
            :options="status"
            optionLabel="name"
            optionValue="key"
            class="w-full"
          />
        </div>
        <div class="col-2">
          <h5>Vai trò</h5>
          <Dropdown
            v-model="selectedRole"
            :options="roles"
            optionLabel="name"
            optionValue="key"
            class="w-full"
          />
        </div>

        <div class="col-2 flex align-items-end">
          <div>
            <Button
              label="Tìm kiếm"
              icon="pi pi-search"
              iconPos="left"
              style="height: 42px !important"
            />
          </div>
        </div>
      </div>
      <div class="col-3">
        <div class="field-checkbox">
          <Checkbox id="binary" v-model="checked" :binary="true" />
          <label for="binary">Nhận SMS</label>
        </div>
      </div>
    </div>
    <div class="pt-4 border-top-1">
      <div class="flex justify-content-between pb-2">
        <h5>Kết quả tìm kiếm</h5>
        <Button label="+ Thêm mới" @click="openModal" />
        <Dialog
          header="THÊM MỚI NGƯỜI DÙNG"
          v-model:visible="displayModal"
          :style="{ width: '50vw' }"
          :modal="true"
          closeOnEscape="false"
        >
          <ModalUser />
          <template #footer>
            <div class="flex justify-content-center">
              <Button
                icon="pi pi-save"
                iconPos="left"
                label="Lưu"
                @click="closeModal"
              />
              <Button
                icon="pi pi-times-circle "
                iconPos="left"
                label="Hủy"
                @click="closeModal"
                class="bg-gray-400"
              />
            </div>
          </template>
        </Dialog>
      </div>
      <div class="table text-center">
        <DataTable
          :value="userList"
          responsiveLayout="scroll"
          stripedRows="true"
          :paginator="true"
          :rows="10"
          currentPageReportTemplate="Hiển thị {first} đến {last} trong {totalRecords} khách hàng"
        >
          <Column field="stt" header="STT" />
          <Column field="acc" header="Tài khoản" />
          <Column field="name" header="Tên người dùng" />
          <Column field="phone" header="Số điện thoại" />
          <Column field="email" header="Email" />
          <Column field="unit" header="Đơn vị" />
          <Column field="status" header="Trạng thái" />
          <Column field="role" header="Vai trò" />
          <Column field="action" header="Thao tác" style="width: 15%">
            <template #body="slotProps">
              <Button
                icon="pi pi-pencil"
                class="p-button-rounded p-button-text"
                @click="openModal(slotProps.data)"
              />
              <Dialog
                header="CẬP NHẬT NGƯỜI DÙNG"
                v-model:visible="displayModal"
                :style="{ width: '50vw' }"
                :modal="true"
                closeOnEscape="false"
              >
                <ModalUser />
                <template #footer>
                  <div class="flex justify-content-center">
                    <Button
                      icon="pi pi-save"
                      iconPos="left"
                      label="Lưu"
                      @click="closeModal"
                    />
                    <Button
                      icon="pi pi-times-circle "
                      iconPos="left"
                      label="Hủy"
                      @click="closeModal"
                      class="bg-gray-400"
                    />
                  </div>
                </template>
              </Dialog>
              <Button
                icon="pi pi-lock"
                class="p-button-rounded p-button-text"
              />
              <Button
                icon="pi pi-trash"
                class="p-button-rounded p-button-text"
              />
            </template>
          </Column>
        </DataTable>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, unref } from "vue";
// import AddUser from "./modals/AddUser.vue";
import ModalUser from "./modals/ModalUser.vue";
import { useCurrentUser } from "./modals/user.service";
import { roles, status, units } from "./userMng.service";
export default {
  components: { ModalUser },
  setup() {
    const { setCurrentUser, setEditing, getCurrentUser } = useCurrentUser();

    const userList = [
      {
        stt: 1,
        acc: "username1",
        name: "Nguyễn Văn A",
        phone: "090000000",
        email: "username1@gmail.com",
        unit: "Công ty cổ phần cấp nước Chợ Lớn",
        checked: false,
        status: "Đang hoạt động",
        role: "Quản lý khu vực",
      },
      {
        stt: 2,
        acc: "username2",
        name: "Nguyễn Văn B",
        phone: "099000000",
        email: "username2@gmail.com",
        unit: "Công ty cổ phần cấp nước Trung An",
        checked: true,
        status: "Khóa",
        role: "Giám sát",
      },
    ];

    const checked = ref(false);
    const selectedRole = ref(0);
    const selectedStatus = ref(0);
    const selectedUnit = ref(0);

    const displayModal = ref(false);
    const openModal = (user) => {
      console.log(user);
      const state = true;
      setEditing(state);
      setCurrentUser(user);
      console.log(unref(getCurrentUser));
      displayModal.value = true;
    };
    const closeModal = () => {
      setEditing(false);
      displayModal.value = false;
    };
    return {
      selectedStatus,
      status,
      units,
      selectedUnit,
      roles,
      selectedRole,
      userList,
      openModal,
      closeModal,
      displayModal,
      checked,
    };
  },
};
</script>
