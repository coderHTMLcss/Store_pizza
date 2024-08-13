import { useRef, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import debounce from 'lodash.debounce';
import { SearchIconComponent } from '../UI-Components/SearchIcon';
import CloseIconComponent from '../UI-Components/CloseIcon';
import { setValue } from '../../redux/slices/filterSlice';
import classes from './style.module.scss';

const SearchComponent = () => {
    const [inputValue, setInputValue] = useState('')
    const inputRef = useRef(null);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(setValue(''));
        setInputValue('');
        inputRef.current.focus();
    };

    const debouncedDispatch = useCallback(debounce((value) => {
        setInputValue(value)
        dispatch(setValue(value));
    }, 500), [])


    const handleChange = (event) => {
        setInputValue(event.target.value);
        debouncedDispatch(event.target.value);
    };

    return (
        <div className={classes.root}>
            <SearchIconComponent className={classes.searchIcon} />
            <input
                ref={inputRef}
                className={classes.input}
                value={inputValue}
                onChange={handleChange}
                placeholder='Пошук'
            />
            {inputValue && (
                <CloseIconComponent
                    onClick={handleClick}
                    className={classes.closeIcon}
                />
            )}
        </div>
    );
};

export default SearchComponent;
