import { memo } from "react";

const ItemList = memo(({ list }) => {
  return (
    <li className="card">
      <div className="card-body">
        <h4 className="card-title">{list.title}</h4>
        <p className="card-text">{list.body}</p>
        <p className="card-text"> Comentario del Usuario : {list.userId}</p>
      </div>
    </li>
  );
});

export default ItemList;
