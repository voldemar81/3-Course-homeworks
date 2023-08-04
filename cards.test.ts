import { expect } from "@jest/globals"; 
import { mixCards } from "./src/cards storage"; 
let cardsDealt;

describe("mixCards", () => {
    it("должен перемешивать и дублировать правильное количество карт", () => {
      // Подготавливаем
      const page = 3;
      const expectedLength = page * 3;
  
      // Действуем
      const result = mixCards({ page });
  
      // Проверяем
      expect(result).toHaveLength(expectedLength * 2); 
      expect(result).not.toEqual(cardsDealt); // Проверяем, что карты перемешаны
    
    });
  });