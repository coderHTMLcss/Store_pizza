import { useMemo, useCallback } from "react";

const useFilteredPizzas = (pizzas, filterValue) => {
  const handleFilteredPizzas = useCallback(() => {
    return pizzas.filter((pizza) =>
      pizza.title.toLowerCase().includes(filterValue.toLowerCase())
    );
  }, [filterValue, pizzas]);

  const filteredPizzas = useMemo(
    () => handleFilteredPizzas(pizzas),
    [handleFilteredPizzas, pizzas]
  );

  return filteredPizzas;
};

export default useFilteredPizzas;
