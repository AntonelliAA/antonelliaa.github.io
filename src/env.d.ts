/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_CLARITY_PROJECT_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
