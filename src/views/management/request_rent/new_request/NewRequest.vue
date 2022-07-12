<template>
  <div class="card">
    <div class="lg:col-12 mb-2 lg:col-4 lg:mb-0 pl-0 pr-0">
      <span class="p-input-icon-left col-12">
        <i class="pi pi-search pl-2"></i>
        <InputText
          type="text"
          placeholder="Nhập mã khách hàng, họ tên hoặc số điện thoại.."
          class="col-12"
        />
      </span>
    </div>
    <div
      class="flex mt-1 justify-content-between pl-2 pr-2 mb-4"
      style="max-width: 100%; min-width: 100%"
    >
      <div class="flex justify-content-between pr-4 w-12">
        <div class="flex align-items-center">
          <label class="mr-3 pl-0"><strong>LỌC</strong></label>
          <div class="flex mr-3">
            <div class="pr-3">
              <Dropdown
                v-model="selectedCustomer"
                :options="customer"
                optionLabel="customer"
                optionValue="customer_type"
                placeholder="Tất cả khách hàng"
              />
            </div>
            <div class="pr-2">
              <Dropdown
                v-model="selectedStatus"
                :options="status"
                optionLabel="name"
                optionValue="id_stt"
                placeholder="Tất cả trạng thái"
              />
            </div>
          </div>
        </div>
        <div class="flex">
          <div class="flex align-items-center border-left-1">
            <div class="flex align-items-center pl-3 w-4">
              <label for="basic"><strong> ĐĂNG KÝ TỪ </strong> </label>
            </div>
            <div>
              <Calendar
                id="from-date"
                v-model="from_date"
                autocomplete="off"
                class="pr-2"
              />
            </div>
            <div class="flex align-items-center pr-2">
              <label for="basic"><strong> ĐẾN </strong> </label>
            </div>
            <div>
              <Calendar
                id="to-date"
                v-model="to_date"
                autocomplete="off"
                class="pr-4"
              />
            </div>
            <div class="w-5">
              <Button label="Áp dụng" class="p-button bg-blue-600" />
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-content-end w-3">
        <Button
          type="button"
          label="Thêm yêu cầu thuê mới"
          class="bg-blue-600"
          @click="routerPush"
        />
      </div>
    </div>
    <div class="p-2">
      <p>
        Hiển Thị <strong>1-10</strong> trong số
        <strong>{{ data_length }} khách hàng</strong>
      </p>
      <DataTable
        stripedRows="true"
        :value="customers"
        responsiveLayout="scroll"
        :paginator="true"
        :rows="10"
        headerStyle="background-color:#ffffff"
        paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
        :rowsPerPageOptions="[10, 20]"
        currentPageReportTemplate="Hiển thị {first} đến {last} trong {totalRecords} khách hàng"
      >
        <Column
          v-for="col of columns"
          :field="col.field"
          :header="col.header"
          :key="col.field"
          :sortable="col.sortable"
          :rowspan="col.rowspan"
        >
          <template #body="slotProps">
            <div v-if="slotProps.field === 'avt'">
              <img
                src="https://www.primefaces.org/primevue/demo/images/primevue-logo-dark.svg"
                width="50"
                height="50"
              />
            </div>
            <div v-else>
              {{ slotProps.data[slotProps.field] }}
            </div>
          </template>
        </Column>
      </DataTable>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const data = [
      {
        customer_id: "2345637",
        customer_name: "Công ty TNHH Galaxy Go",
        phone: "0982-067-777 (Linh)",
        tax_num: "14523658964",
        address:
          "Số 214/B55 đường Nguyễn trãi, phường Nguyễn Cư Trinh,Quận 1, Thành phố Hồ Chí Minh",
        create_date: "31/08/2019",
        status: "Hoạt động",
      },
      {
        customer_id: "2345638",
        customer_name: "Trần Duy Linh",
        phone: "0979-012-222",
        tax_num: "-",
        address:
          "Số 61-63 Trần Quang Khải, Phường Tân Định, Quận 1,TP. Hồ Chí Minh",
        create_date: "31/09/2019",
        status: "Hoạt động",
      },
      {
        customer_id: "2345638",
        customer_name: "Trần Duy Linh",
        phone: "0979-012-222",
        tax_num: "-",
        address:
          "Số 61-63 Trần Quang Khải, Phường Tân Định, Quận 1,TP. Hồ Chí Minh",
        create_date: "31/09/2019",
        status: "Hoạt động",
      },
      {
        customer_id: "2345638",
        customer_name: "Trần Duy Linh",
        phone: "0979-012-222",
        tax_num: "-",
        address:
          "Số 61-63 Trần Quang Khải, Phường Tân Định, Quận 1,TP. Hồ Chí Minh",
        create_date: "31/09/2019",
        status: "Hoạt động",
      },
      {
        customer_id: "2345638",
        customer_name: "Trần Duy Linh",
        phone: "0979-012-222",
        tax_num: "-",
        address:
          "Số 61-63 Trần Quang Khải, Phường Tân Định, Quận 1,TP. Hồ Chí Minh",
        create_date: "31/09/2019",
        status: "Hoạt động",
      },
      {
        customer_id: "2345638",
        customer_name: "Trần Duy Linh",
        phone: "0979-012-222",
        tax_num: "-",
        address:
          "Số 61-63 Trần Quang Khải, Phường Tân Định, Quận 1,TP. Hồ Chí Minh",
        create_date: "31/09/2019",
        status: "Hoạt động",
      },
      {
        customer_id: "2345638",
        customer_name: "Trần Duy Linh",
        phone: "0979-012-222",
        tax_num: "-",
        address:
          "Số 61-63 Trần Quang Khải, Phường Tân Định, Quận 1,TP. Hồ Chí Minh",
        create_date: "31/09/2019",
        status: "Hoạt động",
      },

      {
        customer_id: "2345637",
        customer_name: "Công ty TNHH Galaxy Go",
        phone: "0982-067-777 (Linh)",
        tax_num: "14523658964",
        address:
          "Số 214/B55 đường Nguyễn trãi, phường Nguyễn Cư Trinh,Quận 1, Thành phố Hồ Chí Minh",
        create_date: "31/08/2019",
        status: "Hoạt động",
      },
      {
        customer_id: "2345637",
        customer_name: "Công ty TNHH Galaxy Go",
        phone: "0982-067-777 (Linh)",
        tax_num: "14523658964",
        address:
          "Số 214/B55 đường Nguyễn trãi, phường Nguyễn Cư Trinh,Quận 1, Thành phố Hồ Chí Minh",
        create_date: "31/08/2019",
        status: "Hoạt động",
      },
      {
        customer_id: "2345637",
        customer_name: "Công ty TNHH Galaxy Go",
        phone: "0982-067-777 (Linh)",
        tax_num: "14523658964",
        address:
          "Số 214/B55 đường Nguyễn trãi, phường Nguyễn Cư Trinh,Quận 1, Thành phố Hồ Chí Minh",
        create_date: "31/08/2019",
        status: "Hoạt động",
      },

      {
        customer_id: "2345637",
        customer_name: "Công ty TNHH Galaxy Go",
        phone: "0982-067-777 (Linh)",
        tax_num: "14523658964",
        address:
          "Số 214/B55 đường Nguyễn trãi, phường Nguyễn Cư Trinh,Quận 1, Thành phố Hồ Chí Minh",
        create_date: "31/08/2019",
        status: "Hoạt động",
      },
      {
        customer_id: "2345637",
        customer_name: "Công ty TNHH Galaxy Go",
        phone: "0982-067-777 (Linh)",
        tax_num: "14523658964",
        address:
          "Số 214/B55 đường Nguyễn trãi, phường Nguyễn Cư Trinh,Quận 1, Thành phố Hồ Chí Minh",
        create_date: "31/08/2019",
        status: "Hoạt động",
      },
      {
        customer_id: "2345637",
        customer_name: "Công ty TNHH Galaxy Go",
        phone: "0982-067-777 (Linh)",
        tax_num: "14523658964",
        address:
          "Số 214/B55 đường Nguyễn trãi, phường Nguyễn Cư Trinh,Quận 1, Thành phố Hồ Chí Minh",
        create_date: "31/08/2019",
        status: "Hoạt động",
      },
      {
        customer_id: "2345637",
        customer_name: "Công ty TNHH Galaxy Go",
        phone: "0982-067-777 (Linh)",
        tax_num: "14523658964",
        address:
          "Số 214/B55 đường Nguyễn trãi, phường Nguyễn Cư Trinh,Quận 1, Thành phố Hồ Chí Minh",
        create_date: "31/08/2019",
        status: "Hoạt động",
      },
      {
        customer_id: "2345637",
        customer_name: "Công ty TNHH Galaxy Go",
        phone: "0982-067-777 (Linh)",
        tax_num: "14523658964",
        address:
          "Số 214/B55 đường Nguyễn trãi, phường Nguyễn Cư Trinh,Quận 1, Thành phố Hồ Chí Minh",
        create_date: "31/08/2019",
        status: "Hoạt động",
      },
      {
        customer_id: "2345637",
        customer_name: "Công ty TNHH Galaxy Go",
        phone: "0982-067-777 (Linh)",
        tax_num: "14523658964",
        address:
          "Số 214/B55 đường Nguyễn trãi, phường Nguyễn Cư Trinh,Quận 1, Thành phố Hồ Chí Minh",
        create_date: "31/08/2019",
        status: "Hoạt động",
      },
      {
        customer_id: "2345637",
        customer_name: "Công ty TNHH Galaxy Go",
        phone: "0982-067-777 (Linh)",
        tax_num: "14523658964",
        address:
          "Số 214/B55 đường Nguyễn trãi, phường Nguyễn Cư Trinh,Quận 1, Thành phố Hồ Chí Minh",
        create_date: "31/08/2019",
        status: "Hoạt động",
      },
      {
        customer_id: "2345637",
        customer_name: "Công ty TNHH Galaxy Go",
        phone: "0982-067-777 (Linh)",
        tax_num: "14523658964",
        address:
          "Số 214/B55 đường Nguyễn trãi, phường Nguyễn Cư Trinh,Quận 1, Thành phố Hồ Chí Minh",
        create_date: "31/08/2019",
        status: "Hoạt động",
      },
      {
        customer_id: "2345637",
        customer_name: "Công ty TNHH Galaxy Go",
        phone: "0982-067-777 (Linh)",
        tax_num: "14523658964",
        address:
          "Số 214/B55 đường Nguyễn trãi, phường Nguyễn Cư Trinh,Quận 1, Thành phố Hồ Chí Minh",
        create_date: "31/08/2019",
        status: "Hoạt động",
      },
      {
        customer_id: "2345637",
        customer_name: "Công ty TNHH Galaxy Go",
        phone: "0982-067-777 (Linh)",
        tax_num: "14523658964",
        address:
          "Số 214/B55 đường Nguyễn trãi, phường Nguyễn Cư Trinh,Quận 1, Thành phố Hồ Chí Minh",
        create_date: "31/08/2019",
        status: "Hoạt động",
      },
      {
        customer_id: "2345637",
        customer_name: "Công ty TNHH Galaxy Go",
        phone: "0982-067-777 (Linh)",
        tax_num: "14523658964",
        address:
          "Số 214/B55 đường Nguyễn trãi, phường Nguyễn Cư Trinh,Quận 1, Thành phố Hồ Chí Minh",
        create_date: "31/08/2019",
        status: "Hoạt động",
      },
      {
        customer_id: "2345637",
        customer_name: "Công ty TNHH Galaxy Go",
        phone: "0982-067-777 (Linh)",
        tax_num: "14523658964",
        address:
          "Số 214/B55 đường Nguyễn trãi, phường Nguyễn Cư Trinh,Quận 1, Thành phố Hồ Chí Minh",
        create_date: "31/08/2019",
        status: "Hoạt động",
      },
    ];
    const columns = ref([
      { field: "customer_id", header: "Mã KH", rowspan: "2", sortable: true },
      { field: "avt", header: "Ảnh đại diện", rowspan: "1" },
      { field: "customer_name", header: "Tên khách hàng", sortable: "true" },
      { field: "tax_num", header: "Mã số thuế" },
      { field: "phone", header: "Số điện thoại" },
      { field: "address", header: "Địa chỉ" },
      {
        field: "create_date",
        header: "Ngày đăng ký",
        sortable: true,
      },
      { field: "status", header: "Trạng thái", sortable: true, rowspan: "2" },
    ]);
    const customers = ref(data);

    const menu = ref();

    const type_add = ref(0);
    let today = new Date();
    const data_length = ref(data.length);
    const from_date = ref();
    const to_date = ref();
    const invalidDates = ref();
    const status = ref([
      {
        id_stt: 1,
        name: "Hoạt động",
      },
      {
        id_stt: 2,
        name: "Không hoạt động",
      },
    ]);
    function routerPush() {
      router.push("/add_person");
    }
    const selectedStatus = ref(0);

    let invalidDate = new Date();
    invalidDate.setDate(today.getDate() - 1);
    invalidDates.value = [today, invalidDate];

    return {
      columns,
      customers,
      from_date,
      to_date,
      invalidDates,
      data_length,
      status,
      selectedStatus,
      type_add,
      menu,
      routerPush,
    };
  },
};
</script>
