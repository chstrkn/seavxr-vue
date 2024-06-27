<script setup lang="ts">
import Sidebar from '@/components/Sidebar.vue';
import { ref } from 'vue';

const admins = ref([
  { id: 1, name: 'Admin One', email: 'admin1@example.com', company: 'Company A', website: 'www.companya.com', status: 'active' },
  { id: 2, name: 'Admin Two', email: 'admin2@example.com', company: 'Company B', website: 'www.companyb.com', status: 'inactive' },
  { id: 3, name: 'Admin Three', email: 'admin3@example.com', company: 'Company C', website: 'www.companyc.com', status: 'active' },
  { id: 4, name: 'Admin Four', email: 'admin4@example.com', company: 'Company D', website: 'www.companyd.com', status: 'inactive' },
  { id: 5, name: 'Admin Five', email: 'admin5@example.com', company: 'Company E', website: 'www.companye.com', status: 'active' },
]);

const selectedAdmins = ref<number[]>([]);

const toggleSelection = (id: number) => {
  if (selectedAdmins.value.includes(id)) {
    selectedAdmins.value = selectedAdmins.value.filter(adminId => adminId !== id);
  } else {
    selectedAdmins.value.push(id);
  }
};

const deleteSelectedAdmins = () => {
  admins.value = admins.value.filter(admin => !selectedAdmins.value.includes(admin.id));
  selectedAdmins.value = [];
};

const editAdmin = (id: number) => {
  console.log("Edit admin with ID:", id);
};
</script>

<template>
  <div class="app-container">
    <Sidebar />
    <main class="main-content">
      <h2>Client Management</h2>
      <h3>Admins</h3>
      <div class="controls">
        <button @click="deleteSelectedAdmins">Delete</button>
        <button>Filter</button>
        <button>Sort</button>
        <input type="text" placeholder="Search" />
        <button>Client</button>
      </div>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>🔽 Name</th>
            <th>🔽 Email Address</th>
            <th>🔽 Company</th>
            <th>🔽 Webpage</th>
            <th>🔽 Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="admin in admins" :key="admin.id">
            <td><input type="checkbox" @change="toggleSelection(admin.id)" /></td>
            <td>{{ admin.name }}</td>
            <td>{{ admin.email }}</td>
            <td>{{ admin.company }}</td>
            <td><a :href="'http://' + admin.website" target="_blank">{{ admin.website }}</a></td>
            <td>{{ admin.status }}</td>
            <td>
              <button @click="editAdmin(admin.id)">✏️</button>
            </td>
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

.controls {
  display: flex;
  gap: 10px;
  margin-bottom: 1rem;
  align-items: center;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
}

table, th, td {
  border: 1px solid #ddd;
}

th, td {
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f4f4f4;
}

button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

a {
  color: #007bff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
