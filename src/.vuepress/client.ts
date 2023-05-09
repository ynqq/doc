import { defineClientConfig } from "@vuepress/client";
// import NeoCustomFormNext from '@neotrident/neo-custom-form-next'
// import NeoReportBuilder from '@neotrident/fe-report-builder';

// import '@neotrident/neo-custom-form-next/dist/style.css'

export default defineClientConfig({
  enhance: ({ app }) => {
    // app.use(NeoReportBuilder).use(NeoCustomFormNext)
  },
});

