import { useDispatch, useSelector } from "react-redux";
import { fetchPizzas } from "../redux/slices/pizzaSlice";

const useFetchData = (sort, categoryId, currentPage) => {
  const { items: pizzas, status } = useSelector((state) => state.pizza);
  const dispatch = useDispatch();

  const sortBy = sort.sortProperty.replace("-", "");
  const order = sort.sortProperty.includes("-") ? "asc" : "desc";
  const category = categoryId > 0 ? `category=${categoryId}` : "";

  const getPizzasfromApi = () => {
    dispatch(
      fetchPizzas({
        sortBy,
        order,
        category,
        currentPage,
      })
    );
  };

  return [getPizzasfromApi, pizzas, status];
};

export default useFetchData;
