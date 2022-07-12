<template>
  <div class="col-12 card">
    <div class="pb-4">
      <h5>Tiêu chí tìm kiếm</h5>
      <div class="flex w-full">
        <div class="col-2">
          <h5>Vai trò</h5>
          <InputText
            type="text"
            v-model="role_search"
            placeholder="Nhập mã hoặc tên vai trò"
            class="w-full font-italic"
          />
        </div>
        <div class="col-2">
          <h5>Trạng thái</h5>
          <Dropdown
            v-model="selectedStatus"
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
    </div>
    <div class="pt-4 border-top-1">
      <div class="flex justify-content-between pb-2">
        <h5>Kết quả tìm kiếm</h5>
        <Button label="+ Thêm mới" @click="openModalAdd" />
        <Dialog
          header="THÊM MỚI VAI TRÒ"
          v-model:visible="displayModalAdd"
          :style="{ width: '50vw' }"
          :modal="true"
          closeOnEscape="false"
        >
          <AddRole />
          <template #footer>
            <div class="flex justify-content-center">
              <Button
                icon="pi pi-save"
                iconPos="left"
                label="Lưu"
                @click="closeModalAdd"
              />
              <Button
                icon="pi pi-times-circle "
                iconPos="left"
                label="Hủy"
                @click="closeModalAdd"
                class="bg-gray-400"
              />
            </div>
          </template>
        </Dialog>
      </div>
      <div class="table text-center">
        <DataTable
          :value="roleList"
          responsiveLayout="scroll"
          stripedRows="true"
          :paginator="true"
          :rows="10"
          currentPageReportTemplate="Hiển thị {first} đến {last} trong {totalRecords} khách hàng"
        >
          <Column field="stt" header="STT" />
          <Column field="code" header="Mã" />
          <Column field="name" header="Tên" />
          <Column field="description" header="Mô tả" />
          <Column field="status" header="Trạng thái" />
          <Column field="role" header="Phân quyền">
            <template #body>
              <i class="pi pi-user-edit"></i>
            </template>
          </Column>
          <Column field="action" header="Thao tác" style="width: 15%">
            <template #body>
              <Button
                icon="pi pi-pencil"
                class="p-button-rounded p-button-text"
                @click="openModalEdit"
              />
              <Dialog
                header="DANH SÁCH QUYỀN"
                v-model:visible="displayModalEdit"
                :style="{ width: '50vw' }"
                :modal="true"
                closeOnEscape="false"
              >
                <EditRole />
                <template #footer>
                  <div class="flex justify-content-center">
                    <Button
                      icon="pi pi-save"
                      iconPos="left"
                      label="Lưu"
                      @click="closeModalEdit"
                    />
                    <Button
                      icon="pi pi-times-circle "
                      iconPos="left"
                      label="Hủy"
                      @click="closeModalEdit"
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
import { ref } from "vue";
import AddRole from "./modals/AddRole.vue";
import EditRole from "./modals/EditRole.vue";
import { roles, roleList } from "./rolemng.service";
export default {
  components: { AddRole, EditRole },
  setup() {
    const selectedStatus = ref(0);

    const displayModalAdd = ref(false);
    const displayModalEdit = ref(false);

    const openModalAdd = () => {
      displayModalAdd.value = true;
    };
    const openModalEdit = () => {
      displayModalEdit.value = true;
    };
    const closeModalAdd = () => {
      displayModalAdd.value = false;
    };
    const closeModalEdit = () => {
      displayModalEdit.value = false;
    };
    return {
      selectedStatus,
      roles,
      roleList,
      openModalAdd,
      closeModalAdd,
      displayModalAdd,
      openModalEdit,
      closeModalEdit,
      displayModalEdit,
    };
  },
};
</script>
