import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import Input from "../Input";


afterEach(() => {
    cleanup();
});

//bu inputun render olup olmadığını test et.
test("should render input", () => {
  render(<Input />);
  expect(screen.getByTestId("input")).toBeInTheDocument();
});

//input değerleri değişiyor mu
test("should value change", () => {
  //onChange fonksiyonunun ateşlenip ateşlenmediğini ve gelen değerin düzgün gelip gelmediğini test ediyoruz.
  render(<Input value={"tes"} onChange={(a) => expect(a).toBe("test")} />);
  const input = screen.getByTestId("input");
  expect(input.value).toBe("tes");
  fireEvent.change(input, { target: { value: "test" } });
  expect(screen.getByTestId("input")).toBeInTheDocument();
});
