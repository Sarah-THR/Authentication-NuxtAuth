import AzureADProvider from 'next-auth/providers/azure-ad'
import { NuxtAuthHandler } from "#auth";

export default NuxtAuthHandler({
  // secret needed to run nuxt-auth in production mode (used to encrypt data)
  secret: useRuntimeConfig().private.NUXT_SECRET,
  providers: [
    // @ts-ignore Import is exported on .default during SSR, so we need to call it this way. May be fixed via Vite at some point
    AzureADProvider.default({
        clientId: useRuntimeConfig().private.AZURE_AD_CLIENT_ID,
        clientSecret: useRuntimeConfig().private.AZURE_AD_CLIENT_SECRET,
        scope: useRuntimeConfig().private.AZURE_AD_SCOPES,
        tenantId: useRuntimeConfig().private.AZURE_AD_TENANT_ID,
    }),
  ]
});
