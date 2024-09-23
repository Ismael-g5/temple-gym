<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';
import Sidebar from '@/Components/Sidebar.vue';

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
            <div class="flex-grow py-12">
                <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div class="p-6 text-gray-900">You're logged in!</div>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
