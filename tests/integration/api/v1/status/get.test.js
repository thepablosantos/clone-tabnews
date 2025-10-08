test("Get to /api/v1/status sould return 200", () => {
  const response = fetch("http://localhost:3000/api/v1/status")
  expect(response.status).toBe(200);
});