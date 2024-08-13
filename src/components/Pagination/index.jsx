import ReactPaginate from 'react-paginate';
import classes from './style.module.scss'

const PaginationComponent = ({ onChangePage }) => {
    return (
        <>
            <ReactPaginate
                className={classes.root}
                breakLabel="..."
                nextLabel=">"
                onPageChange={(event) => onChangePage(event.selected + 1)}
                pageRangeDisplayed={4}
                pageCount={3}
                previousLabel="<"
                renderOnZeroPageCount={null}
            />
        </>
    );
}

export default PaginationComponent