import { useState } from "react";

function useData() {
  const [list, setList] = useState([]);
  const [search, setSearch] = useState("");
  const [user, setUser] = useState(1);
  const [more, setMore] = useState(true);
  const [loading, setLoading] = useState(true);

  let filterList = [];

  const consultNewData = () => {
    if (user >= 10) {
      setMore(false);
      return;
    } else {
      setTimeout(() => {
        setUser(prev => prev + 1);
      }, 500);
    }
  };

  if (search.length < 1) {
    filterList = [...list];
  } else {
    filterList = list.filter(lista => {
      const listaLower = lista.title.toLowerCase();
      return listaLower.includes(search.toLowerCase());
    });
  }

  return {
    search,
    setSearch,
    more,
    loading,
    filterList,
    consultNewData,
    setList,
    setLoading,
    user,
  };
}

export { useData };
