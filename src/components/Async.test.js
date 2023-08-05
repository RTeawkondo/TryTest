import { render, screen } from "@testing-library/react";
import { expect, jest, test } from "@jest/globals";
import Async from "./Async";

describe("Async component", () => {
  test("hehe", async () => {
    render(<Async />);
    window.fetch = jest.fn();
    await window.fetch.mockResolveValueOnce({
      json: async () => [{ id: "p1", title: "hehe" }],
    });

    const listItem = await screen.findAllByRole("listitem");
    expect(listItem).not.toHaveLength(0);
  });
});
