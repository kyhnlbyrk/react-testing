import { render, screen, cleanup } from "@testing-library/react";
import Todo from "../Todo";


afterEach(() => {
    cleanup();
});

//bu inputun render olup olmadığını test et.
test("should render todo", () => {
  render(<Todo text={"kayahan"} id={1} completed={false} />);
  const todo = screen.getByTestId("todo-1");
  expect(todo).toBeInTheDocument();
  expect(todo).toHaveTextContent("kayahan");
});

test("should render todo strike for completed", () => {
  render(<Todo text={"kayahan"} id={2} completed={true} />);
  const todo = screen.getByTestId("todo-2");
  //completed false olan strike olmayacak testi
  expect(todo).toContainHTML('strike');
});

test("should not render todo strike for completed", () => {
  render(<Todo text={"kayahan"} id={1} completed={false} />);
  const todo = screen.getByTestId("todo-1");
  //completed false olan strike olmayacak testi
  expect(todo).not.toContainHTML('strike');
});