import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import TodoList from "../TodoList";

afterEach(() => {
  cleanup();
});

//bu component ın render olup olmadığını test et.
test("should render input", () => {
  render(<TodoList />);
  expect(screen.getByTestId("todo-list")).toBeInTheDocument();
});

//Integration test componentların birbiri ile etkileşimini test etmek için kullanılır.
test("should render input", () => {
  render(<TodoList />);
  //ilk önce state de bulunan ilk değerin render olup olmadığını test et.(Learn React)
  const todo = screen.getByTestId("todo-1");
  expect(todo).toHaveTextContent("Learn React");
  //sonra todonun düzgün render olup olmadığını üstü çizgili çıkmasını test et.
  expect(todo).toContainHTML("strike");
  //Sonra yeni bir todo eklemek için butona tıklayıp todo ekleme işlemini test et.
  //baştan inputu bul.
  const input = screen.getByTestId("input");
  //inputa yazı yaz.
  fireEvent.change(input, { target: { value: "Learn Redux" } });
  //butonu bul.
  const button = screen.getByTestId("button");
  //butonun click fonksiyonunu çalıştır.
  fireEvent.click(button);
  //Sonra yeni todo eklenen todo render olup olmadığını test et.
  const todo2 = screen.getByTestId("todo-2");
  expect(todo2).toHaveTextContent("Learn Redux");
  //son olarak todo2 nin düzgün render olup olmadığını test et.
  expect(todo2).not.toContainHTML("strike");
});
