<template>
  <div class="min-h-full max-h-full p-2">
    <h5 class="w-full card">Quản lý đơn vị</h5>
    <div class="flex justify-content-between min-h-full">
      <div class="col-3 pl-0 pb-0 min-h-full max-h-full">
        <div class="card min-h-full max-h-full border-noround">
          <div class="w-full mb-3">
            <span class="p-input-icon-right w-full">
              <InputText
                type="text"
                v-model="search_unit_menu"
                placeholder="Nhập mã/tên đơn vị"
                class="w-full font-italic"
              />
              <i class="pi pi-search cursor-pointer"></i>
            </span>
          </div>
          <div class="w-full">
            <Tree :value="nodesMenu" class="p-0">
              <template #default="slotProps">
                <b>{{ slotProps.node.label }}</b>
              </template>
              <template #url="slotProps">
                <a :href="slotProps.node.data">{{ slotProps.node.label }}</a>
              </template>
            </Tree>
          </div>
        </div>
      </div>
      <div class="col-9 min-h-full max-h-full pr-0 pb-0 border-circle">
        <div class="w-full">
          <TabView ref="tabview1">
            <TabPanel header="Đơn vị">
              <div class="pb-4">
                <h5>Tiêu chí tìm kiếm</h5>
                <div class="flex w-full">
                  <div class="col-4">
                    <h5>Đơn vị</h5>
                    <TreeSelect
                      v-model="selectedNodeUnit"
                      :options="nodesUnit"
                      optionLabel="label"
                      optionValue="key"
                      class="w-full"
                    />
                  </div>
                  <div class="col-4">
                    <h5>Tên đơn vị</h5>
                    <InputText
                      type="text"
                      v-model="search_unit"
                      placeholder="Nhập mã/tên đơn vị"
                      class="w-full font-italic"
                    />
                  </div>
                  <div class="col-2 flex align-items-end">
                    <div>
                      <Button
                        label="Tìm kiếm"
                        icon="pi pi-search"
                        iconPos="left"
                        style="height: 42px !important"
                        @click="searchUnit"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="pt-4 border-top-1">
                <div class="flex justify-content-between pb-2">
                  <h5>Kết quả tìm kiếm</h5>
                  <Button label="+ Thêm mới" @click="openModal" />
                  <Dialog
                    header="Thêm mới đơn vị"
                    v-model:visible="displayModal"
                    :style="{ width: '50vw' }"
                    :modal="true"
                    closeOnEscape="false"
                  >
                    <AddUnit />
                    <template #footer>
                      <div class="flex justify-content-center">
                        <Button label="Lưu" @click="closeModal" />
                        <Button
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
                    :value="tempUnits"
                    responsiveLayout="scroll"
                    stripedRows="true"
                    :paginator="true"
                    :rows="5"
                    currentPageReportTemplate="Hiển thị {first} đến {last} trong {totalRecords} khách hàng"
                    :resizableColumns="true"
                    columnResizeMode="fit"
                    showGridlines
                  >
                    <Column field="stt" header="STT" />
                    <Column field="code" header="Mã đơn vị" />
                    <Column field="name_unit" header="Tên đơn vị" />
                    <Column field="mng_unit" header="Đơn vị quản lý" />
                    <Column field="customer" header="Người liên hệ" />
                    <Column field="phone" header="Số điện thoại" />
                    <Column field="rank" header="Thứ tự" />
                    <Column field="status" header="Trạng thái" />
                    <Column field="action" header="Thao tác" style="width: 15%">
                      <template #body>
                        <Button
                          icon="pi pi-pencil"
                          class="p-button-rounded p-button-text"
                        />
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
            </TabPanel>
            <TabPanel header="DMA">
              <div class="pb-4">
                <h5>Tiêu chí tìm kiếm</h5>
                <div class="flex w-full">
                  <div class="col-4">
                    <h5>DMA</h5>
                    <TreeSelect
                      v-model="selectedNodeUnit"
                      :options="nodesDMA"
                      optionLabel="label"
                      optionValue="key"
                      class="w-full"
                    />
                  </div>
                  <div class="col-4">
                    <h5>Tên DMA</h5>
                    <InputText
                      type="text"
                      v-model="search_unit"
                      placeholder="Nhập mã/tên đơn vị"
                      class="w-full font-italic"
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
                  <Button label="+ Thêm mới" @click="openModal" />
                  <Dialog
                    header="THÊM MÓI DMA"
                    v-model:visible="displayModal"
                    :style="{ width: '50vw' }"
                    :modal="true"
                    closeOnEscape="false"
                  >
                    <AddDMA />
                    <template #footer>
                      <div class="flex justify-content-center">
                        <Button label="Lưu" @click="closeModal" />
                        <Button
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
                    :value="units"
                    responsiveLayout="scroll"
                    stripedRows="true"
                    :paginator="true"
                    :rows="5"
                    currentPageReportTemplate="Hiển thị {first} đến {last} trong {totalRecords} khách hàng"
                    :resizableColumns="true"
                    columnResizeMode="fit"
                    showGridlines
                  >
                    <Column field="stt" header="STT" />
                    <Column field="code" header="Mã DMA" />
                    <Column field="name_unit" header="Tên DMA" />
                    <Column field="mng_unit" header="DMA Tổng" />
                    <Column field="customer" header="Người liên hệ" />
                    <Column field="phone" header="Số điện thoại" />
                    <Column field="rank" header="Thứ tự" />
                    <Column field="status" header="Trạng thái" />
                    <Column field="action" header="Thao tác" style="width: 15%">
                      <template #body>
                        <Button
                          icon="pi pi-pencil"
                          class="p-button-rounded p-button-text"
                        />
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
            </TabPanel>
          </TabView>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import AddUnit from "./Modal/AddUnit.vue";
import AddDMA from "./Modal/AddDMA.vue";
export default {
  components: { AddUnit, AddDMA },
  setup() {
    const nodesMenu = ref([
      {
        key: "0",
        label: "TỔNG CÔNG TY CẤP NƯỚC SÀI GÒN",
        children: [
          {
            key: "0-0",
            label: "Công ty Cổ phần Cấp nước Chợ Lớn",
            children: [
              { key: "0-0-0", label: "DMA CL01" },
              { key: "0-0-1", label: "DMA CL02" },
              { key: "0-0-2", label: "DMA CL03" },
              { key: "0-0-3", label: "DMA CL04" },
            ],
          },
          {
            key: "0-1",
            label: "Công ty Cổ phần Cấp nước Trung An",
            children: [{ key: "0-1-0", label: "DMA TA01" }],
          },
          {
            key: "0-2",
            label: "Công ty Cổ phần Cấp nước Tân Hòa",
            children: [{ key: "0-2-0", label: "DMA TH01" }],
          },
          {
            key: "0-3",
            label: "Công ty Cổ phần Cấp nước Phú Hòa Tân",
            children: [{ key: "0-3-0", label: "DMA PHT01" }],
          },
        ],
      },
    ]);

    const nodesUnit = ref([
      {
        key: "0",
        label: "TỔNG CÔNG TY CẤP NƯỚC SÀI GÒN",
        children: [
          {
            key: "0-0",
            label: "Công ty Cổ phần Cấp nước Chợ Lớn",
            children: [
              {
                key: "0-0-0",
                label: "DMA CL01",
                icon: "pi pi-fw pi-file",
              },
              {
                key: "0-0-1",
                label: "DMA CL02",
                icon: "pi pi-fw pi-file",
              },
              {
                key: "0-0-2",
                label: "DMA CL03",
                icon: "pi pi-fw pi-file",
              },
            ],
          },
          {
            key: "0-1",
            label: "Công ty Cổ phần Cấp nước Trung An",
            children: [
              {
                key: "0-1-0",
                label: "DMA TA01",
                icon: "pi pi-fw pi-file",
              },
            ],
          },
          {
            key: "0-2",
            label: "Công ty Cổ phần Cấp nước Tân Hòa",
            children: [
              {
                key: "0-2-0",
                label: "DMA TH01",
                icon: "pi pi-fw pi-file",
              },
            ],
          },
          {
            key: "0-3",
            label: "Công ty Cổ phần Cấp nước Phú Hòa Tân",
            children: [
              {
                key: "0-3-0",
                label: "DMA PHT01",
                icon: "pi pi-fw pi-file",
              },
            ],
          },
        ],
      },
    ]);
    const selectedNodeUnit = ref("0");
    const selectedNodeDMA = ref("0");
    const nodesDMA = ref([
      {
        key: "0",
        label: "DMA Cấp nước Chợ Lớn",
        children: [
          {
            key: "0-0",
            label: "Công ty Cổ phần Cấp nước Chợ Lớn",
            children: [
              {
                key: "0-0-0",
                label: "DMA CL01",
                icon: "pi pi-fw pi-file",
              },
              {
                key: "0-0-1",
                label: "DMA CL02",
                icon: "pi pi-fw pi-file",
              },
              {
                key: "0-0-2",
                label: "DMA CL03",
                icon: "pi pi-fw pi-file",
              },
            ],
          },
          {
            key: "0-1",
            label: "Công ty Cổ phần Cấp nước Trung An",
            children: [
              {
                key: "0-1-0",
                label: "DMA TA01",
                icon: "pi pi-fw pi-file",
              },
            ],
          },
          {
            key: "0-2",
            label: "Công ty Cổ phần Cấp nước Tân Hòa",
            children: [
              {
                key: "0-2-0",
                label: "DMA TH01",
                icon: "pi pi-fw pi-file",
              },
            ],
          },
          {
            key: "0-3",
            label: "Công ty Cổ phần Cấp nước Phú Hòa Tân",
            children: [
              {
                key: "0-3-0",
                label: "DMA PHT01",
                icon: "pi pi-fw pi-file",
              },
            ],
          },
        ],
      },
    ]);
    const units = ref([
      {
        stt: 1,
        code: "TCT",
        name_unit: "TỔNG CÔNG TY CẤP NƯỚC SÀI GÒN",
        customer: "Nguyễn Văn A",
        phone: "0979000001",
        rank: "0",
        status: "Hoạt động",
      },
      {
        stt: 2,
        code: "CHOLON",
        name_unit: "Công ty Cổ phần Cấp nước Chợ Lớn",
        mng_unit: "TCT - TỔNG CÔNG TY CẤP NƯỚC SÀI GÒN",
        customer: "Nguyễn Văn B",
        phone: "0979000001",
        rank: "1",
        status: "Hoạt động",
      },
      {
        stt: 3,
        code: "TRUNGAN",
        name_unit: "Công ty Cổ phần Cấp nước Trung An",
        customer: "Nguyễn Văn A",
        mng_unit: "TCT - TỔNG CÔNG TY CẤP NƯỚC SÀI GÒN",
        phone: "0979000001",
        rank: "2",
        status: "Hoạt động",
      },
      {
        stt: 4,
        code: "TANHOA",
        name_unit: "Công ty Cổ phần Cấp nước Tân Hòa",
        customer: "Nguyễn Văn A",
        mng_unit: "TCT - TỔNG CÔNG TY CẤP NƯỚC SÀI GÒN",
        phone: "0979000001",
        rank: "3",
        status: "Hoạt động",
      },
      {
        stt: 5,
        code: "PHUHOATAN",
        name_unit: "Công ty Cổ phần Cấp nước Phú Hòa Tân",
        customer: "Nguyễn Văn A",
        phone: "0979000001",
        mng_unit: "TCT - TỔNG CÔNG TY CẤP NƯỚC SÀI GÒN",
        rank: "4",
        status: "Hoạt động",
      },
    ]);

    const tempUnits = ref([]);
    tempUnits.value = units.value;
    const displayModal = ref(false);
    const openModal = () => {
      displayModal.value = true;
    };
    const closeModal = () => {
      displayModal.value = false;
    };
    const search_unit = ref("");
    const searchUnit = () => {
      tempUnits.value = units.value.filter((unit) => {
        return unit.name_unit
          .toLowerCase()
          .includes(search_unit.value.toLowerCase());
      });
      // console.log(filterList);
    };

    return {
      nodesMenu,
      nodesUnit,
      nodesDMA,
      selectedNodeUnit,
      selectedNodeDMA,
      units,
      tempUnits,
      openModal,
      closeModal,
      displayModal,
      searchUnit,
      search_unit,
    };
  },
};
</script>
<style>
.p-treenode-content {
  padding: 0 !important;
}
</style>
