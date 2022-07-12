<template>
  <div class="card flex">
    <div class="col-6">
      <div class="border-right-1">
        <h5>Thông Tin Doanh Nghiệp</h5>
        <div class="col-12 flex" style="box-shadow: none !important">
          <div class="col-8 flex flex-column">
            <label for="customer_name">Tên Doanh Nghiệp</label>
            <InputText id="customer_name" type="text" />
          </div>
          <div class="col-4 flex flex-column">
            <label for="tax_num">Mã Số Thuế</label>
            <InputText id="tax_num" type="username" />
          </div>
        </div>
        <div class="col-12 flex" style="box-shadow: none !important">
          <div class="col-6 flex flex-column">
            <label for="phone">Số Điện Thoại</label>
            <InputText id="phone" type="number" />
          </div>
          <div class="col-6 flex flex-column">
            <label for="tax_num">Email</label>
            <InputText id="tax_num" type="email" />
          </div>
        </div>
        <div class="col-12 flex" style="box-shadow: none !important">
          <div class="col-12 flex flex-column">
            <label for="address">Địa chỉ Doanh Nghiệp</label>
            <InputText id="address" type="address" />
          </div>
        </div>
        <div class="col-12 flex" style="box-shadow: none !important">
          <div class="col-6 flex flex-column">
            <label for="customer_name">Phường/Xã</label>
            <Dropdown
              v-model="selectedWard"
              :options="wards"
              optionLabel="name"
              optionValue="code"
              placeholder="Chọn phường xã"
            />
          </div>
          <div class="col-6 flex flex-column">
            <label for="tax_num">Mã Số Thuế</label>
            <Dropdown
              v-model="selectedDistrict"
              :options="districts"
              optionLabel="name"
              optionValue="code"
              placeholder="Chọn Quận/Huyện"
            />
          </div>
        </div>
        <div class="col-12 flex" style="box-shadow: none !important">
          <div class="col-6 flex flex-column">
            <label for="city">Thành Phố/Tỉnh</label>
            <Dropdown
              v-model="selectedCity"
              :options="cities"
              optionLabel="name"
              optionValue="code"
              placeholder="Chọn Thành phố/Tỉnh"
            />
          </div>
          <div class="col-6 flex flex-column">
            <label for="country">Quốc Gia </label>
            <Dropdown
              v-model="selectedCountry"
              :options="countries"
              optionLabel="name"
              optionValue="code"
              placeholder="Chọn Quốc Gia"
            />
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="mb-5">
          <h5>Logo</h5>
          <div class="col-12 uploadImg">
            <Upload
              v-model:file-list="fileList"
              name="avatar"
              list-type="picture-card"
              class="avatar-uploader"
              :show-upload-list="false"
              :customRequest="request"
              :before-upload="beforeUpload"
              @change="handleChange"
            >
              <img v-if="imageUrl" :src="imageUrl" alt="avatar" />
              <div v-else class="flex btnUpload">
                <PlusOutlined v-if="!loading" />
                <div class="ant-upload-text ml-2">Upload</div>
              </div>
              <Button
                v-if="imageUrl"
                icon="pi pi-times"
                class="p-button-rounded p-button-danger deleteImg" 
              />
            </Upload>
          </div>
        </div>
        <div>
          <h5>Người Đại Diện</h5>
          <div class="col-12 flex" style="box-shadow: none !important">
            <div class="w-full flex flex-column">
              <label for="text_login">Họ & Tên</label>
              <InputText id="customer_name" type="text" />
            </div>
          </div>
          <div class="col-12 flex" style="box-shadow: none !important">
            <div class="col-6 flex flex-column">
              <label for="phone">Số Điện Thoại</label>
              <InputText id="phone" type="number" />
            </div>
            <div class="col-6 flex flex-column">
              <label for="tax_num">Email</label>
              <InputText id="tax_num" type="email" />
            </div>
          </div>
        </div>
        <div class="col-12">
          <div class="col-12">
            <Button label="Lưu" />
            <Button label="Hủy" class="p-button-outlined ml-4" />
          </div>
        </div>
      </div>
    </div>
    <div class="col-6">
      <div>
        <h5>Trạng Thái Tài Khoản</h5>
        <div class="col-12">
          <div class="col-12 flex flex-column">
            <label for="status">Trạng Thái</label>
            <Dropdown
              v-model="selectedStatus"
              :options="status"
              optionLabel="name"
              optionValue="code"
              :placeholder="name"
            />
          </div>
        </div>
        <div class="col-12">
          <div class="col-12 flex flex-column">
            <label for="customer_type">Hạng Thành Viên</label>
            <Dropdown
              v-model="selectedType"
              :options="types"
              optionLabel="name"
              optionValue="code"
              :placeholder="name"
            />
          </div>
        </div>
      </div>
      <div>
        <h5>Thông Tin Đăng Nhập</h5>
        <div class="col-12">
          <div class="col-12 flex" style="box-shadow: none !important">
            <div class="w-full flex flex-column">
              <label for="text_login">Mã số thuế đăng nhập</label>
              <InputText id="text_login" type="number" />
            </div>
          </div>
          <div class="col-12 flex" style="box-shadow: none !important">
            <div class="w-full flex flex-column">
              <label for="password">Password</label>
              <InputText id="password" type="password" />
            </div>
          </div>
          <div class="col-12 flex" style="box-shadow: none !important">
            <div class="w-full flex flex-column">
              <label for="password">Confirm Password</label>
              <InputText id="password" type="password" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
import { PlusOutlined,  } from "@ant-design/icons-vue";
import { Upload, message } from "ant-design-vue";

function getBase64WithFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file.file);
    reader.onload = () => resolve({ result: reader.result, file });
    reader.onerror = (error) => reject(error);
  });
}

export default defineComponent({
  components: {
    
    PlusOutlined,
    Upload,
  },
  setup() {
    const status = [
      { name: "Hoạt động", code: 1 },
      { name: "Không hoạt động", code: 2 },
    ];
    const selectedStatus = ref(1);

    const types = [
      { name: "Hạng tiêu chuẩn", code: 1 },
      { name: "Hạng thương gia", code: 2 },
    ];
    const selectedType = ref(1);

    const fileList = ref([]);
    const loading = ref(false);
    const imageUrl = ref("");

    async function request(file) {
      const res = await getBase64WithFile(file);
      imageUrl.value = res.result;
      const temp = {
        uid: file.uid,
        name: file.name,
        file: file,
        thumbUrl: imageUrl.value,
      };

      fileList.value = [temp];
      console.log(fileList.value);
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      return new Promise(() => {});
    }

    const handleChange = () => {
      FileList.value = [];
    };

    const beforeUpload = (file) => {
      const isJpgOrPng =
        file.type === "image/jpeg" || file.type === "image/png";

      if (!isJpgOrPng) {
        message.error("You can only upload JPG file!");
      }

      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isLt2M) {
        message.error("Image must smaller than 2MB!");
      }

      return isJpgOrPng && isLt2M;
    };
    return {
      status,
      selectedStatus,
      types,
      selectedType,
      fileList,
      loading,
      imageUrl,
      handleChange,
      beforeUpload,
      request,
      
    };
  },
});
</script>

<style lang="scss">
label {
  font-weight: 500;
  padding-bottom: 5px;
}
.avatar-uploader > .ant-upload {
  width: 128px;
  max-height: 128px;
}
.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
  align-items: flex-end;
}
img {
  width: 150px;
  height: 150px;
  border-radius: 10px;
}
.p-button.p-button-icon-only.p-button-rounded {
  height: 2rem;
  width: 2rem;
}
.uploadImg {
  position: relative;
  .deleteImg {
    position: absolute;
    top: 10px;
    left: 125px;
  }
  .btnUpload {
    align-items: flex-end;
    cursor: pointer;
    justify-content: center;
    border: 1px solid;
    border-radius: 5px;
    padding: 10px 0 20px;
  }
}
</style>
