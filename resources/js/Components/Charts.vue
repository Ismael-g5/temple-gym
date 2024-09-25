<script setup>
import { onMounted, ref, nextTick } from "vue";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

const chartRef = ref(null);
const chartRef2 = ref(null);

onMounted(async () => {
  await nextTick(); // Espera a renderização completa

  const ctx = chartRef.value.getContext("2d");
  const btx = chartRef2.value.getContext("2d");

  new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      datasets: [
        {
          label: "Sales",
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: true,
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgba(75, 192, 192, 1)",
          tension: 0.4,
        },
      ],
    },
    options: {
      scales: {
        x: {
          ticks: {
            callback: function(value, index, values) {
              return this.getLabelForValue(value).slice(0, 3);
            },
            maxRotation: 0,
            minRotation: 0,
          },
        },
        y: {
          beginAtZero: true,
        },
      },
    },
  });

  new Chart(btx, {
    type: "line",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      datasets: [
        {
          label: "Sales",
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: true,
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgba(75, 192, 192, 1)",
          tension: 0.4,
        },
      ],
    },
    options: {
      scales: {
        x: {
          ticks: {
            callback: function(value, index, values) {
              return this.getLabelForValue(value).slice(0, 3);
            },
            maxRotation: 0,
            minRotation: 0,
          },
        },
        y: {
          beginAtZero: true,
        },
      },
    },
  });
});
</script>

<template>
  <main>
    <div class="px-4 pt-6">
      <div class="grid gap-4 xl:grid-cols-2 2xl:grid-cols-3">
        <div class="p-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
          <div class="flex items-center justify-between mb-4">
            <div class="flex-shrink-0">
              <span class="text-xl font-bold leading-none text-gray-900 sm:text-2xl dark:text-white">$45,385</span>
              <h3 class="text-base font-light text-gray-500 dark:text-gray-400">Sales this week</h3>
            </div>
            <div class="flex items-center justify-end flex-1 text-base font-medium text-green-500 dark:text-green-400">
              12.5%
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
              </svg>
            </div>
          </div>
          <canvas ref="chartRef" width="400" height="200"></canvas>
        </div>
      </div>
    </div>
    
    <div class="px-4 pt-6">
      <div class="grid gap-4 xl:grid-cols-2 2xl:grid-cols-3">
        <div class="p-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
          <div class="flex items-center justify-between mb-4">
            <div class="flex-shrink-0">
              <span class="text-xl font-bold leading-none text-gray-900 sm:text-2xl dark:text-white">$45,385</span>
              <h3 class="text-base font-light text-gray-500 dark:text-gray-400">Sales this week</h3>
            </div>
            <div class="flex items-center justify-end flex-1 text-base font-medium text-green-500 dark:text-green-400">
              12.5%
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
              </svg>
            </div>
          </div>
          <canvas ref="chartRef2" width="400" height="200"></canvas>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>

</style>
