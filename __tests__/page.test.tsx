import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

import HomePage from "@/app/page";

test("homepage renders the name as a heading", () => {
  render(<HomePage />);

  expect(
    screen.getByRole("heading", { name: /paramveer multani/i }),
  ).toBeInTheDocument();
});
