<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';
import Sidebar from '@/Components/Sidebar.vue';
import NavBar from '@/Components/NavBar.vue';
import CountData from '@/Components/CountData.vue';
import Chart from '@/Components/Charts.vue';
import Footer from '@/Components/Footer.vue';
import { usePage } from '@inertiajs/vue3'; // Importa o usePage

const { url } = usePage();


</script>

<template>
    <Head title="Home" />

   
      <NavBar />

        <!-- Container flex para Sidebar e conteúdo principal -->
        <div class="flex">
            <!-- Sidebar -->
            <Sidebar />

            <!-- Conteúdo principal do dashboard -->
            <div class="flex-grow py-4">
                <div class="max-w-5xl mx-auto mr-12 lg:px-3 py-12">
                    <Chart  :key="url" />
                </div>

                <Footer />
            </div>
            
        </div>
  
</template>
