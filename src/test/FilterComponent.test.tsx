import FilterComponent from "@/components/Filter";
import type { JSX } from "react/jsx-runtime";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

// Mock antd components (TreeSelect & DatePicker)
vi.mock("antd", async () => {
  const actual = await vi.importActual<any>("antd");
  return {
    ...actual,
    TreeSelect: ({ placeholder, onChange }: any) => (
      <select
        data-testid={placeholder}
        onChange={(e) => onChange([e.target.value])}
      >
        <option value="">--select--</option>
        <option value="store">Store Transactions</option>
        <option value="digital">Digital Products</option>
      </select>
    ),
    DatePicker: ({ onChange }: any) => (
      <input
        type="date"
        data-testid="datepicker"
        onChange={(e) => onChange(null, e.target.value)}
      />
    ),
  };
});

describe("FilterComponent (Vitest)", () => {
  it("calls close when Apply is clicked", () => {
    const closeMock = vi.fn();
    renderWithChakra(<FilterComponent close={closeMock} />); 

    const applyButton = screen.getByRole("button", { name: /apply/i });
    fireEvent.click(applyButton);

    expect(closeMock).toHaveBeenCalledTimes(1);
  });

  it("calls close when Clear is clicked", () => {
    const closeMock = vi.fn();
    renderWithChakra(<FilterComponent close={closeMock} />); // ✅ use global wrapper

    const clearButton = screen.getByRole("button", { name: /clear/i });
    fireEvent.click(clearButton);

    expect(closeMock).toHaveBeenCalledTimes(1);
  });

  it("handles type and status selection", () => {
    const closeMock = vi.fn();
    renderWithChakra(<FilterComponent close={closeMock} />); // ✅ use global wrapper

    const typeSelect = screen.getByTestId("Select transaction types");
    fireEvent.change(typeSelect, { target: { value: "store" } });

    const applyButton = screen.getByRole("button", { name: /apply/i });
    fireEvent.click(applyButton);

    expect(closeMock).toHaveBeenCalledTimes(1);
  });
function renderWithChakra(ui: JSX.Element) {
  return render(ui);
}
})