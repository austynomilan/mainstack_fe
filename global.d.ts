// global.d.ts
import type { RenderResult } from "@testing-library/react";

declare global {
  function renderWithChakra(ui: React.ReactElement): RenderResult;
}
