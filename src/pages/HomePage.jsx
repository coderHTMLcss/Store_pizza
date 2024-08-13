import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import qs from 'qs';
import CategoryComponent from "../components/category";
import SortComponent, { list } from "../components/sort";
import PizzaBlockComponent from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/skeleton";
import PaginationComponent from "../components/Pagination";
import { setCategoryId, setSortType, setFilters, setCurrentCount } from "../redux/slices/filterSlice";
import useFilteredPizzas from "../hooks/useFilteredPizzas";
import useFetchData from "../hooks/useFetching";

const HomePage = () => {
    const { categoryId, sort, value, currentPage } = useSelector(state => state.filter);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [getPizzasfromApi, pizzas, status] = useFetchData(sort, categoryId, currentPage);
    const filteredPizzas = useFilteredPizzas(pizzas, value);
    const isSearch = useRef(false);
    const isMounted = useRef(false);

    useEffect(() => {
        if (window.location.search) {
            const params = qs.parse(window.location.search.substring(1));
            // console.log('URL Params:', params);

            const sort = list.find(obj => obj.sortProperty === params.sortProperty);
            // console.log('Sort Option:', sort);

            dispatch(setFilters({
                ...params,
                sort
            }));
            isSearch.current = true;
        }
    }, [dispatch]);

    useEffect(() => {
        if (isMounted.current) {
            // console.log(isMounted.current);

            const queryString = qs.stringify({
                sortProperty: sort.sortProperty,
                categoryId,
                currentPage,
            });

            navigate(`?${queryString}`);
        }
        isMounted.current = true;
    }, [categoryId, currentPage, sort.sortProperty, navigate]);

    useEffect(() => {
        if (!isSearch.current) {
            getPizzasfromApi();
        }
        isSearch.current = false;
    }, [categoryId, sort, currentPage]);

    if (status === 'error') return <p className="content__error">Sorry, something went wrong!🧐</p>


    return (
        <div className="container">
            <div className="content__top">
                <CategoryComponent
                    value={categoryId}
                    onClickCategory={(id) => dispatch(setCategoryId(id))}
                />
                <SortComponent
                    value={sort}
                    onClickSort={(obj) => dispatch(setSortType(obj))}
                />
            </div>
            <h2 className="content__title">Весь асортимент</h2>
            <div className="content__items">
                {status === 'loading'
                    ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
                    : filteredPizzas.map((pizza) => (
                        <PizzaBlockComponent key={pizza.id} {...pizza} />
                    ))
                }
            </div>
            <PaginationComponent onChangePage={number => dispatch(setCurrentCount(number))} />
        </div>
    );
};

export default HomePage;
