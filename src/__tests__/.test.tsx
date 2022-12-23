// import { renderHook } from "@testing-library/react-hooks";
// import { UseIsAuthenticated } from "../hooks/UseIsAuthenticated";
// import axios from "axios";

// describe("UseIsAuthenticated hook", () => {
//   it("sets isAuthenticated to true when the checkUser function is called and the server returns a 200 status code", async () => {
//     // Arrange
//     // Mock the axios.get function to return a 200 status code
//     jest.spyOn(axios, "get").mockResolvedValue({ status: 200 });

//     // Render the hook with the setShowModal function as a prop
//     const { result } = renderHook(() =>
//       UseIsAuthenticated({ setShowModal: jest.fn() })
//     );

//     // Act
//     // Call the checkUser function
//     await result.current.checkUser();

//     // Assert
//     // Check that isAuthenticated is true
//     expect(result.current.isAuthenticated).toBe(true);
//   });
// });
