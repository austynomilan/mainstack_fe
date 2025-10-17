import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        primary: {
          100: { value: "#EFF1F6" },
          400: { value: "#56616B" },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
