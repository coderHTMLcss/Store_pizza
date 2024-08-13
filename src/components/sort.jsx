import React, { useEffect, useRef, useState } from "react";
export const list = [
  { name: 'популярні (desc)', sortProperty: 'rating' },
  { name: 'популярні (asc)', sortProperty: '-rating' },
  { name: 'ціна (desc)', sortProperty: 'price' },
  { name: 'ціна (asc)', sortProperty: '-price' },
  { name: 'алфавіт (desc)', sortProperty: 'title' },
  { name: 'алфавіт (asc)', sortProperty: '-title' },
];

const SortComponent = ({ value, onClickSort }) => {
  const [isOpen, setIsOpen] = useState(false);
  const sortRef = useRef(null);

  const handleSort = (obj) => {
    onClickSort({ ...obj });
    setIsOpen(false)
  }

  useEffect(() => {
    const handleClick = (event) => {
      if (!event.composedPath().includes(sortRef.current)) {
        setIsOpen(false)
      }
    }

    document.body.addEventListener('click', handleClick);

    return () => document.body.removeEventListener('click', handleClick);

  }, []);

  return (
    <div ref={sortRef} className="sort">
      <div className="sort__label">
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортувати за:</b>
        <span onClick={() => setIsOpen(!isOpen)}>{value.name}</span>
      </div>
      {isOpen && <div className="sort__popup">
        <ul>
          {list && list.length > 0 ? (list.map((list, index) => {
            return <li
              className={value.sortProperty === list.sortProperty ? 'active' : ''}
              onClick={() => handleSort(list)}
              key={index}
            >
              {list.name}
            </li>
          })) : (null)}
        </ul>
      </div>}
    </div>
  );
};

export default SortComponent;
