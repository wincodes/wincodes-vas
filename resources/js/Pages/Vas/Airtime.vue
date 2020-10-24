<template>
  <div>
    <div class="p-6 sm:px-20 bg-white border-b border-gray-200">
      <div class="mt-6 text-gray-500">Buy Airtime</div>
    </div>

    <div
      v-if="paymentMode === false"
      class="bg-gray-200 bg-opacity-25 grid grid-cols-1 md:grid-cols-2"
    >
      <div class="p-6">
        <div class="ml-12">
          <div class="mt-2 text-sm text-gray-500">
            <div class="bill" @click="enterPaymentMode('mtn')">
              <div class="d-flex justify-content-center">
                <img
                  src="../../Assets/mtn_img.png"
                  width="50"
                  class="img img-fluid"
                />
              </div>
              <h4 class="text-center p-4">MTN</h4>
            </div>
          </div>
        </div>
      </div>

      <div class="p-6 border-t border-gray-200 md:border-t-0 md:border-l">
        <div class="ml-12">
          <div class="mt-2 text-sm text-gray-500">
            <div class="bill" @click="enterPaymentMode('glo')">
              <div class="d-flex justify-content-center">
                <img
                  src="../../Assets/glo_img.png"
                  width="50"
                  class="img img-fluid"
                />
              </div>
              <h4 class="text-center p-4">GLO</h4>
            </div>
          </div>
        </div>
      </div>

      <div class="p-6 border-t border-gray-200">
        <div class="ml-12">
          <div class="mt-2 text-sm text-gray-500">
            <div class="bill" @click="enterPaymentMode('airtel')">
              <div class="d-flex justify-content-center">
                <img
                  src="../../Assets/airtel_img.png"
                  width="50"
                  class="img img-fluid"
                />
              </div>
              <h4 class="text-center p-4">AIRTEL</h4>
            </div>
          </div>
        </div>
      </div>

      <div class="p-6 border-t border-gray-200 md:border-l">
        <div class="ml-12">
          <div class="mt-2 text-sm text-gray-500">
            <div class="bill" @click="enterPaymentMode('9mobile')">
              <div class="d-flex justify-content-center">
                <img
                  src="../../Assets/etisalat_img.png"
                  width="50"
                  class="img img-fluid"
                />
              </div>
              <h4 class="text-center p-4">9MOBILE</h4>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="paymentMode === true && show"
      class="bg-gray-200 bg-opacity-25 p-4"
    >
      <div class="d-flex justify-content-center mb-3">
        <img
          src="../../Assets/mtn_img.png"
          width="50"
          class="img img-fluid"
          v-if="selectedNetwork === 'mtn'"
        />

        <img
          src="../../Assets/glo_img.png"
          width="50"
          class="img img-fluid"
          v-if="selectedNetwork === 'glo'"
        />

        <img
          src="../../Assets/airtel_img.png"
          width="50"
          class="img img-fluid"
          v-if="selectedNetwork === 'airtel'"
        />

        <img
          src="../../Assets/etisalat_img.png"
          width="50"
          class="img img-fluid"
          v-if="selectedNetwork === '9mobile'"
        />
      </div>

      <div class="d-flex justify-content-center">
        <b-form @submit="onSubmit" @reset="onReset">
          <b-form-group
            id="input-group-2"
            label="Phone Number:"
            label-for="input-2"
            description="Enter Phone Number to Purchase Airtime."
          >
            <b-form-input
              id="input-2"
              v-model="form.phone"
              required
              placeholder="Enter Phone Number"
            ></b-form-input>
          </b-form-group>

          <div class="d-flex justify-content-center">
            <b-button type="submit" class="m-2" variant="primary">Submit</b-button>
            <b-button type="reset" class="m-2" variant="danger">Close</b-button>
          </div>
        </b-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      paymentMode: false,
      show: true,
      selectedNetwork: "",
      form: {
        phone: "",
      },
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      console.log(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.phone = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
      this.paymentMode = false;
    },
    enterPaymentMode(network) {
      this.selectedNetwork = network;
      this.paymentMode = true;
    },
  },
};
</script>
<style scoped>
.bill {
  cursor: pointer;
}
</style>
