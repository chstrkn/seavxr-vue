<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const rememberMe = ref(false);
const role = ref("");

const router = useRouter();

const submitForm = () => {
    console.log("Email:", email.value);
    console.log("Password:", password.value);
    console.log("Remember Me:", rememberMe.value);
    console.log("Role:", role.value);
    router.push({ name: "home" });
};

const forgotPassword = () => {
    console.log("Forgot Password clicked");
};
</script>

<template>
    <div class="outer-container">
        <div class="container shadow">
            <div class="row justify-content-center">
                <div class="col-md-12 text-center">
                    <h2>Welcome to Seaversity XR!</h2>
                    <h3>Login to Account</h3>
                    <form @submit.prevent="submitForm">
                        <div class="form-group">
                            <input type="email" class="form-control" id="email" v-model="email" placeholder="Email Address" required />
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control" id="password" v-model="password" placeholder="Password" required />
                        </div>
                        <div class="form-group d-flex justify-content-between align-items-center">
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="rememberMe" v-model="rememberMe" />
                                <label class="form-check-label" for="rememberMe">Remember Me</label>
                            </div>
                            <a href="#" @click.prevent="forgotPassword">Forgot Password?</a>
                        </div>
                        <div class="form-group">
                            <div class="btn-group btn-group-toggle w-100" data-toggle="buttons">
                                <label class="btn btn-role w-100" :class="{ active: role === 'super_admin' }">
                                    <input type="radio" name="role" id="role1" v-model="role" value="super_admin" required /> Super Admin
                                </label>
                                <label class="btn btn-role w-100" :class="{ active: role === 'admin' }">
                                    <input type="radio" name="role" id="role2" v-model="role" value="admin" required /> Admin
                                </label>
                                <label class="btn btn-role w-100" :class="{ active: role === 'instructor' }">
                                    <input type="radio" name="role" id="role3" v-model="role" value="instructor" required /> Instructor
                                </label>
                                <label class="btn btn-role w-100" :class="{ active: role === 'student' }">
                                    <input type="radio" name="role" id="role4" v-model="role" value="student" required /> Student
                                </label>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary btn-block">Login</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
