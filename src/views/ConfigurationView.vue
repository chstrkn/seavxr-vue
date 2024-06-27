<script setup lang="ts">
import Sidebar from '@/components/Sidebar.vue';

const buttons = [
    {
        title: 'System Configuration',
        icon: '⚙️',
        description: 'Manage connected experience including configuring system settings such as.',
        links: ['Security Policies', 'Email Settings', 'System Preference'],
    },
    {
        title: 'Access Control',
        icon: '🛡️',
        description: 'Manage access to sensitive areas of the system and give or revoke rights for specific users or groups.',
        links: [],
    },
    {
        title: 'System Maintenance',
        icon: '⚙️',
        description: 'Utilize authority to carry out regular upkeep duties such.',
        links: ['Backup Settings', 'Updates', 'Logs Management'],
    },
    {
        title: 'Emergency Access',
        icon: '🚨',
        description: 'Gain access to the system in an emergency or for critical processes that require enhanced credentials.',
        links: [],
    },
];
</script>

<template>
    <div class="app-container">
        <Sidebar />
        <main class="main-content">
            <div class="button-grid">
                <div v-for="button in buttons" :key="button.title" class="button-item">
                    <div class="button-header">
                        <h3>{{ button.title }}</h3>
                        <span>{{ button.icon }}</span>
                    </div>
                    <p>{{ button.description }}</p>
                    <ul>
                        <li v-for="link in button.links" :key="link">
                            <a href="#">{{ link }}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    </div>
</template>

<style scoped>
.app-container {
    display: flex;
}

.main-content {
    flex: 1;
    padding: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.button-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    justify-items: center;
}

.button-item {
    width: 350px;
    background-color: #019BFC;
    color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    text-align: left;
}

.button-header {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

.button-header h3 {
    margin-left: 8px;
    font-size: 1.2rem;
}

p {
    margin: 10px 0;
    font-size: 0.9rem;
}

ul {
    list-style-type: none;
    padding: 0;
}

ul li {
    margin: 5px 0;
}

a {
    text-decoration: none;
    color: white;
}

a:hover {
    text-decoration: underline;
}
</style>
