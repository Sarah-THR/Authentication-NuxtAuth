<script setup lang="ts">
const { status, signOut, data: user } = await useAuth()
</script>

<template>
  <section class="grid grid-cols-2 wrapper my-6 mx-auto items-center justify-center">
    <div class="max-w-5xl mx-auto mt-5 px-5">
      <h1>Tableau de bord</h1>
      <p v-if="status"><strong>Statut de l'authentification:</strong></p>
      <p v-if="status">{{ status }}</p>
      <div v-if="status === 'authenticated'">
        <h3 class="text-lg font-semibold mt-4">Information de l'utilisateur</h3>
        <p><strong>Prénom Nom:</strong> {{ user?.user?.name }}</p>
        <p><strong>Email:</strong> {{ user?.user?.email }}</p>
        <v-btn @click="signOut()" class="mt-4" color="red">
          Se déconnecter
        </v-btn>
      </div>
    </div>
  </section>
</template>
