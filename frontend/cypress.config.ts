import { defineConfig } from "cypress";
import { FRONTEND_URL } from './src/config'

export default defineConfig({
  e2e: {
    baseUrl: FRONTEND_URL
  },
});
