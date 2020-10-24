<template>
  <div>
    <div class="p-6 sm:px-20 bg-white border-b border-gray-200">
      <div class="mt-8 text-2xl">Wincodes Value Added Services</div>

      <div class="mt-6 text-gray-500">
        This is An Open Source Demo Implementation of ITEX Bill Payment Platform
        (Vas 4.0). Written in Laravel and Vue
      </div>
    </div>

    <div class="bg-gray-200 bg-opacity-25 grid grid-cols-1 md:grid-cols-2">
      <div class="p-6">
        <div class="ml-12">
          <div class="mt-2 text-sm text-gray-500">
            <router-link to="/airtime">
              <div class="d-flex justify-content-center">
                <img src="../Assets/buy-airtime.svg" class="img img-fluid" />
              </div>
              <h4 class="text-center">Airtime Purchase</h4>
            </router-link>
          </div>
        </div>
      </div>

      <div class="p-6 border-t border-gray-200 md:border-t-0 md:border-l">
        <div class="ml-12">
          <div class="mt-2 text-sm text-gray-500">
            <router-link to="/data">
              <div class="d-flex justify-content-center">
                <img src="../Assets/buy-data.svg" class="img img-fluid" />
              </div>
              <h4 class="text-center">Data Purchase</h4>
            </router-link>
          </div>
        </div>
      </div>

      <div class="p-6 border-t border-gray-200">
        <div class="ml-12">
          <div class="mt-2 text-sm text-gray-500">
            <router-link to="/cabletv">
              <div class="d-flex justify-content-center">
                <img src="../Assets/pay-cabletv.svg" class="img img-fluid" />
              </div>
              <h4 class="text-center">Cable TV Subscription</h4>
            </router-link>
          </div>
        </div>
      </div>

      <div class="p-6 border-t border-gray-200 md:border-l">
        <div class="ml-12">
          <div class="mt-2 text-sm text-gray-500">
            <router-link to="/electricity">
              <div class="d-flex justify-content-center">
                <img src="../Assets/electricity.svg" class="img img-fluid" />
              </div>
              <h4 class="text-center">Electricity Bill Payment</h4>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
