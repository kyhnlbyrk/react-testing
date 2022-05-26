import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import Button from "../Button";


afterEach(() => {
    cleanup();
});


//bu butonun düzgün render olup olmadığını test et.
test('should render button', () => {
  render(<Button />);
  expect(screen.getByTestId('button')).toBeInTheDocument();
  //içinde bu text var mı kontrol et
  expect(screen.getByTestId('button')).toHaveTextContent("Click to add!!");
});


//butona tıklanabiliyor mu test et
test('should button clicked', () => {
    const handleClick = jest.fn()
    render(<Button addTodo={handleClick}/>);
    const button = screen.getByTestId('button');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1)
});