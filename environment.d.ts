declare global {
  namespace NodeJS {
    interface ProcessEnv {
      HUBSPOT_CRM_TOKEN: string;
      DOMAIN: string;
    }
  }
}

export {};
