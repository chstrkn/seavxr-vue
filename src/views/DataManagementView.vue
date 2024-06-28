<script setup lang="ts">
import { ref, computed } from 'vue';
import Sidebar from '@/components/Sidebar.vue';

const companies = ref([
  { id: 1, name: 'Company One', logo: '@/assets/company1.png' },
  { id: 2, name: 'Company Two', logo: '@/assets/company2.png' },
  { id: 3, name: 'Company Three', logo: '@/assets/company3.png' },
  { id: 4, name: 'Company Four', logo: '@/assets/company4.png' },
  { id: 5, name: 'Company Five', logo: '@/assets/company5.png' },
]);

const searchQuery = ref('');

const filteredCompanies = computed(() => {
  return companies.value.filter(company =>
    company.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});
</script>

<template>
  <div class="app-container">
    <Sidebar />
    <main class="main-content">
      <div class="table-header">
        <h2>Data Management</h2>
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Search"
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>Company Name</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="company in filteredCompanies" :key="company.id">
            <td><img :src="company.logo" alt="logo" class="company-logo" />{{ company.name }}</td>
          </tr>
        </tbody>
      </table>
    </main>
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
}

.main-content {
  flex: 1;
  padding: 1rem;
}

.table-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f4f4f4;
}

.company-logo {
  width: 50px;
  height: 50px;
  object-fit: cover;
}

input[type="text"] {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
