<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { useRouter } from "vue-router";
import IconClientManagement from '@/components/icons/IconClientManagement.vue';
import IconUserManagement from '@/components/icons/IconUserManagement.vue';
import IconAudit from '@/components/icons/IconAudit.vue';
import IconDataManagement from '@/components/icons/IconDataManagement.vue';
import IconConfiguration from '@/components/icons/IconConfiguration.vue';


const router = useRouter();

const logout = () => {
    router.push({ name: "login" });
};
</script>

<template>
    <div class="sidebar">
        <div class="profile">
            <img :src="profileImage" alt="Profile picture" />
            <h3>{{ profileName }}</h3>
            <p>{{ profileRole }}</p>
        </div>

        <nav>
            <ul>
                <li>
                    <RouterLink to="/">
                        <IconClientManagement />
                        Client Management
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/user">
                        <IconUserManagement/>
                        User Management</RouterLink>
                </li>
                <li>
                    <RouterLink to="/audit">
                        <IconAudit/>Audit</RouterLink>
                </li>
                <li>
                    <RouterLink to="/data">
                        <IconDataManagement/>Data Management</RouterLink>
                </li>
                <li>
                    <RouterLink to="/configuration">
                        <IconConfiguration/>Configuration</RouterLink>
                </li>
            </ul>
        </nav>

        <button @click="logout">Logout</button>
    </div>
</template>



<style scoped>
.sidebar {
    width: 210px;
    height: 100vh;
    background-color: #f8f9fa;
    padding: 1rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

img {
    width: 100%;
    border-radius: 50%;
    object-fit: cover;
}

h3 {
    margin-bottom: 0.5rem;
}

p {
    margin-top: 0.5rem;
    color: #999;
}

nav ul {
    list-style: none;
    padding: 0;
}

nav ul li {
    margin: 1rem 0;
}

nav ul li a {
    text-decoration: none;
    color: #333;
    font-weight: bold;
}

nav ul li a:hover {
    color: #019BFC;
}
</style>
