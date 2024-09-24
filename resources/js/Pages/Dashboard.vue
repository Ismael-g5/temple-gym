<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';
import Sidebar from '@/Components/Sidebar.vue';
import Chart from '@/Components/Charts.vue';

</script>

<template>
    <Head title="Dashboard" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>
        </template>

        <!-- Container flex para Sidebar e conteúdo principal -->
        <div class="flex">
            <!-- Sidebar -->
            <Sidebar />

            <!-- Conteúdo principal do dashboard -->
            <div class="flex-grow">
                <div class="max-w-4xl mx-auto lg:px-3">
                    <Chart />
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
