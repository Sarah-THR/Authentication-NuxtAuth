<script setup lang="ts">
const { signIn } = await useAuth()
</script>

<template>
    <div id="template">
        <v-card elevation="16" width="85%" rounded="lg">
            <v-container>
                <v-row>
                    <v-col cols="12" md="6">
                        <img src="~/public/img/Key-rafiki.png" height="100%" />
                    </v-col>
                    <v-col cols="12" md="6" class="d-flex flex-column align-center justify-center">
                        <h2>Connectez-vous avec Microsoft</h2>
                        <img src="~/public/img/WINDOW.png" width="20%"
                            @click="signIn('azure-ad', { callbackUrl: '/dashboard', scope: 'user.Read' })" id="pointer"
                            class="mt-6" />
                    </v-col>
                </v-row>
            </v-container>
        </v-card>
    </div>
    
</template>
<style scoped>
h2 {
  color: white;
}

.v-card {
  background-color: #212529 !important;
}

#template {
  display: flex;
  justify-content: center;
  align-content: center;
  background: linear-gradient(0deg, #e10600 0%, #000000 100%);
  height: 100vh;
  padding: 10%;
}

#pointer:hover {
  cursor: pointer;
}

@media (min-width: 1280px) {
  .v-container {
    max-width: none;
  }
}

@media (min-width: 960px) {
  .v-container {
    max-width: none;
  }
}
</style>