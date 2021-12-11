import "./App.css";
import Header from "./components/Header";
import List from "./components/List";
import React, { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "./components/Spinner";
import { useData } from "./components/useData";
import ScrollButton from "./components/ScrollButton";

function App() {
  const {
    search,
    setSearch,
    more,
    loading,
    filterList,
    consultNewData,
    setList,
    setLoading,
    user,
  } = useData();

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users/${user}/posts`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setList(prevList => prevList.concat(data));
      })
      .catch(error => console.log(error));

    setLoading(false);
  }, [user, setList, setLoading]);

  return (
    <>
      <Header search={search} setSearch={setSearch} />
      <InfiniteScroll
        dataLength={filterList.length}
        next={search.length < 1 && consultNewData}
        hasMore={more}
        scrollThreshold={0.9}
        loader={!loading && search.length < 1 && <Spinner />}
      >
        <div className="container">
          {loading ? <Spinner /> : <List filterList={filterList} />}
        </div>

        {search.length > 0 && (
          <div className="text-center p-3 ">
            <p className="new-data">
              El buscador debe de estar vacío si usted desea obtener nuevo
              datos.
            </p>
          </div>
        )}
      </InfiniteScroll>
      <ScrollButton />
    </>
  );
}

export default App;
