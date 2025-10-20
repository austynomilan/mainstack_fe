import '@testing-library/jest-dom/vitest';

// vitest.setup.ts
import React from "react";
import { afterEach } from "vitest";
import { cleanup, render } from "@testing-library/react";
import { ChakraProvider } from "@chakra-ui/react";

// cleanup DOM after each test
afterEach(() => {
  cleanup();
});
// ✅ Global render helper
global.renderWithChakra = (ui: React.ReactElement) => {
  return render(React.createElement(ChakraProvider, null, ui));
};

