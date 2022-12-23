import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { renderHook } from "@testing-library/react-hooks";
import { UseIsAuthenticated } from "./hooks/UseIsAuthenticated";
import axios from "axios";

describe("UseIsAuthenticated hook", () => {
  it("sets isAuthenticated to true when the checkUser function is called and the server returns a 200 status code", async () => {
    // Mock the axios.get function to return a 200 status code
    jest.spyOn(axios, "get").mockResolvedValue({ status: 200 });

    // Render the hook with the setShowModal function as a prop
    const { result } = renderHook(() =>
      UseIsAuthenticated({ setShowModal: jest.fn() })
    );

    await result.current.checkUser();

    expect(result.current.isAuthenticated).toBe(true);
  });
});
