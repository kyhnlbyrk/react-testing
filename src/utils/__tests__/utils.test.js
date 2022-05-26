import { cleanup } from "@testing-library/react";
import { sum } from "../utils";


afterEach(() => {
    cleanup();
});

//dosyadan export edilmiş util fonksiyonlarını test ediyoruz.
test("should return 4 as sum", () => {
  expect(sum(2, 2)).toBe(4);
  expect(sum(3, 1)).toBe(4);
});