import React from 'react'

const CategoryItemComponent = ({ value, onClickCategory, category, index }) => {
    return (
        <>
            <li
                className={value === index ? 'active' : ''}
                onClick={() => onClickCategory(index)}
            >
                {category.name}
            </li>
        </>
    )
}

export default CategoryItemComponent
