<template>
  <div class="col-12">
    <div class="col-12">
      <h5>Vai trò: Giám sát công ty</h5>
    </div>
    <div class="col-12">
      <DataTable
        :value="roleList"
        responsiveLayout="scroll"
        stripedRows="true"
        :rows="10"
        currentPageReportTemplate="Hiển thị {first} đến {last} trong {totalRecords} khách hàng"
      >
        <Column field="stt" header="STT" />
        <Column field="name_role" header="Tên chức năng" />
        <Column field="all_role">
          <template #header>
            <div class="flex flex-column align-items-center w-full">
              <p>Tất cả</p>
              <Checkbox v-model="check_all_all" />
            </div>
          </template>
          <template #body="slotProps">
            <div class="flex flex-column align-items-center">
              <Checkbox
                v-model="slotProps.data[slotProps.field]"
                :binary="true"
                @click="changeCheck(slotProps.data[slotProps.field])"
              />
            </div>
          </template>
        </Column>
        <Column field="read_role">
          <template #header>
            <div class="flex flex-column align-items-center w-full">
              <p>Xem</p>
              <Checkbox v-model="checked_read_all" />
            </div>
          </template>
          <template #body="slotProps">
            <div class="flex flex-column align-items-center">
              <Checkbox
                v-model="slotProps.data[slotProps.field]"
                :binary="true"
                @click="changeCheck(slotProps.data[slotProps.field])"
              />
            </div>
          </template>
        </Column>
        <Column field="add_role">
          <template #header>
            <div class="flex flex-column align-items-center w-full">
              <p>Thêm</p>
              <Checkbox v-model="checked_add__all" />
            </div>
          </template>
          <template #body="slotProps">
            <div class="flex flex-column align-items-center">
              <Checkbox
                v-model="slotProps.data[slotProps.field]"
                :binary="true"
                @click="changeCheck(slotProps.data[slotProps.field])"
              />
            </div>
          </template>
        </Column>
        <Column field="edit_role">
          <template #header>
            <div class="flex flex-column align-items-center w-full">
              <p>Sửa</p>
              <Checkbox v-model="checked_edit_all" />
            </div>
          </template>
          <template #body="slotProps">
            <div class="flex flex-column align-items-center">
              <Checkbox
                v-model="slotProps.data[slotProps.field]"
                :binary="true"
                @click="changeCheck(slotProps.data[slotProps.field])"
              />
            </div>
          </template>
        </Column>
        <Column field="delete_role">
          <template #header>
            <div class="flex flex-column align-items-center w-full">
              <p>Xóa</p>
              <Checkbox v-model="checked_delete_all" />
            </div>
          </template>
          <template #body="slotProps">
            <div class="flex flex-column align-items-center">
              <Checkbox
                v-model="slotProps.data[slotProps.field]"
                :binary="true"
                @click="changeCheck(slotProps.data[slotProps.field])"
              />
            </div>
          </template>
        </Column>
      </DataTable>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  setup() {
    const roleList = ref([
      {
        stt: 1,
        name_role: "Giám sát công tơ",
        all_role: check_all,
        read_role: check_read,
        edit_role: check_edit,
        delete_role: check_delete,
        add_role: check_add,
      },
      {
        stt: 2,
        name_role: "Cấu hình hệ thống",
        all_role: check_all,
        read_role: check_read,
        edit_role: check_edit,
        delete_role: check_delete,
        add_role: check_add,
      },
      {
        stt: 3,
        name_role: "Cảnh báo vận hành",
        all_role: check_all,
        read_role: check_read,
        edit_role: check_edit,
        delete_role: check_delete,
        add_role: check_add,
      },
      {
        stt: 4,
        name_role: "Cảnh báo sự kiện",
        all_role: check_all,
        read_role: check_read,
        edit_role: check_edit,
        delete_role: check_delete,
        add_role: check_add,
      },
    ]);
    const check_all = ref(false);
    const check_read = ref(true);
    const check_add = ref(false);
    const check_edit = ref(false);
    const check_delete = ref(false);

    const changeCheck = (e) => {
      e = !e;
      console.log(e);
    };
    return {
      roleList,
      check_all,
      check_read,
      check_add,
      check_edit,
      check_delete,
      changeCheck,
    };
  },
};
</script>
