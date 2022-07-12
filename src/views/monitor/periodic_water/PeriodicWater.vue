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
            <TabPanel header="Chỉ số nước">
              <div class="pb-4">
                <h5>Tiêu chí tìm kiếm</h5>
                <div class="flex w-full">
                  <div class="col-4">
                    <p for="range">Thời gian</p>
                    <Calendar
                      id="range"
                      v-model="dates2"
                      selectionMode="range"
                      :manualInput="false"
                      class="w-full"
                      showIcon="true"
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
                <div class="flex justify-content-between flex-end pb-2">
                  <h5>Kết quả tìm kiếm</h5>
                  <div>
                    <Button label="Xuất Excel" @click="openModal" />
                    <Button class="ml-2" label="Xuất CSV" @click="openModal" />
                  </div>
                </div>
                <div class="table">
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
                    <Column field="time_sys" header="Giờ hệ thống" />
                    <Column field="time_measure" header="Thời điểm đo" />
                    <Column field="water_level">
                      <template #header>
                        <span>Chỉ số nước (m<sup>3</sup>)</span>
                      </template>
                    </Column>
                    <Column field="consumption">
                      <template #header>
                        <span>Tiêu thụ (m<sup>3</sup>)</span>
                      </template>
                    </Column>
                  </DataTable>
                </div>
              </div>
            </TabPanel>
            <TabPanel header="Thông số vận hành"> Thông sô vận hành </TabPanel>
            <TabPanel header="Tức thời">Tức thời</TabPanel>
            <TabPanel header="Sự kiện">Sự kiện</TabPanel>
          </TabView>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
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
              {
                key: "0-0-0",
                label: "DMA CL01",
                children: [
                  {
                    key: "0-0-0-0",
                    label: "1505216412 - Nguyễn Văn A",
                  },
                  {
                    key: "0-0-0-1",
                    label: "1234567890 - Trần Văn Trà",
                  },
                  {
                    key: "0-0-0-2",
                    label: "6668888988 - Nguyễn Thị B",
                  },
                  {
                    key: "0-0-0-3",
                    label: "8789985505 - Ung Văn Chính",
                  },
                ],
              },
              {
                key: "0-0-1",
                label: "DMA CL02",
                children: [
                  {
                    key: "0-0-1-0",
                    label: "2582582582 - Nguyễn Bá Đạo",
                  },
                ],
              },
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

    let id = ref(0);
    const units = ref([
      {
        stt: id.value++,
        time_sys: "01/01/2022 16:00:01",
        time_measure: "01/01/2022 16:00:02",
        water_level: 960,
        consumption: 60,
      },
      {
        stt: id.value++,
        time_sys: "01/01/2022 16:00:01",
        time_measure: "01/01/2022 15:00:02",
        water_level: 900,
        consumption: 50,
      },
      {
        stt: id.value++,
        time_sys: "01/01/2022 16:00:01",
        time_measure: "01/01/2022 14:00:02",
        water_level: 850,
        consumption: 20,
      },
      {
        stt: id.value++,
        time_sys: "01/01/2022 16:00:01",
        time_measure: "01/01/2022 13:00:02",
        water_level: 830,
        consumption: 30,
      },
      {
        stt: id.value++,
        time_sys: "01/01/2022 16:00:01",
        time_measure: "01/01/2022 13:00:02",
        water_level: 830,
        consumption: 30,
      },
      {
        stt: id.value++,
        time_sys: "01/01/2022 16:00:01",
        time_measure: "01/01/2022 13:00:02",
        water_level: 830,
        consumption: 30,
      },
      {
        stt: id.value++,
        time_sys: "01/01/2022 16:00:01",
        time_measure: "01/01/2022 13:00:02",
        water_level: 830,
        consumption: 30,
      },
      {
        stt: id.value++,
        time_sys: "01/01/2022 16:00:01",
        time_measure: "01/01/2022 13:00:02",
        water_level: 830,
        consumption: 30,
      },
      {
        stt: id.value++,
        time_sys: "01/01/2022 16:00:01",
        time_measure: "01/01/2022 13:00:02",
        water_level: 830,
        consumption: 30,
      },
    ]);

    const tempUnits = ref([]);
    tempUnits.value = units.value;

    const search_unit = ref("");
    const searchUnit = () => {
      tempUnits.value = units.value.filter((unit) => {
        return unit.name_unit
          .toLowerCase()
          .includes(search_unit.value.toLowerCase());
      });
      // console.log(filterList);
    };
    const dates2 = ref();
    return {
      nodesMenu,
      nodesUnit,
      nodesDMA,
      selectedNodeUnit,
      selectedNodeDMA,
      units,
      tempUnits,
      searchUnit,
      search_unit,
      dates2,
    };
  },
};
</script>
<style>
.p-treenode-content {
  padding: 0 !important;
}
</style>
