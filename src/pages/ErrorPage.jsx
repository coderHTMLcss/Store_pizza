import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}🧐</i>
            </p>
            <Link className="error-page__link" to="/">Обрати піцу</Link>
        </div>
    );
}

export default ErrorPage