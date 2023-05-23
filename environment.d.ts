declare global {
  namespace NodeJS {
    interface ProcessEnv {
      HUBSPOT_TOKEN: string;
    }
  }
}

export {};
