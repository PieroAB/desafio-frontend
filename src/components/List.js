import ItemList from "./ItemList";

const List = ({ filterList }) => {
  return (
    <div className="col-12 col-lg-8 m-auto">
      <div className="list-result">
        <p>Se encontró {filterList.length} resultado(s). </p>
      </div>
      <div className="list-item">
        <ul>
          {filterList.map(list => (
            <ItemList key={list.id} list={list} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default List;
