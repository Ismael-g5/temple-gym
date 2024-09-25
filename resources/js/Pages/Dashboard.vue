<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';
import Sidebar from '@/Components/Sidebar.vue';
import NavBar from '@/Components/NavBar.vue';
import Chart from '@/Components/Charts.vue';

</script>

<template>
    <Head title="Dashboard" />

   
      <NavBar />

        <!-- Container flex para Sidebar e conteúdo principal -->
        <div class="flex">
            <!-- Sidebar -->
            <Sidebar />

            <!-- Conteúdo principal do dashboard -->
            <div class="flex-grow py-4">
                <div class="max-w-4xl mx-auto lg:px-3 py-12">
                    <Chart />
                </div>
            </div>
        </div>
  
</template>
