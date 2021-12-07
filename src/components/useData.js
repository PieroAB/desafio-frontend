import { useState } from "react";

function useData() {
  const [list, setList] = useState([]);
  const [search, setSearch] = useState("");
  const [user, setUser] = useState(1);
  const [more, setMore] = useState(true);
  const [loading, setLoading] = useState(true);

  let filterList = [];

  const fetchAPI = async () => {
    const url = `https://jsonplaceholder.typicode.com/users/${user}/posts`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setList([...list, ...data]);
      })
      .catch(error => console.log(error));

    setLoading(false);
  };

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
    user,
    more,
    loading,
    list,
    filterList,
    fetchAPI,
    consultNewData,
  };
}

export { useData };
