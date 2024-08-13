import CategoryItemComponent from "./category-item";

const CategoryComponent = ({ value, onClickCategory }) => {
  const pizza = [
    { id: 1, name: 'Всі' },
    { id: 2, name: 'Улюблені піци' },
    { id: 3, name: 'Новинки' },
    { id: 4, name: 'Краща ціна' },
    { id: 5, name: 'Герої' },
    { id: 6, name: 'Дивина' },
    { id: 7, name: 'Гурме' },
  ]

  return (
    <div className="categories">
      <ul>
        {pizza && pizza.length ? (pizza.map((item, index) => {
          return <CategoryItemComponent
            key={item.id}
            index={index}
            category={item}
            value={value}
            onClickCategory={onClickCategory}
          />
        })) : (null)}
      </ul>
    </div>
  );
};

export default CategoryComponent;
