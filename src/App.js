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
    user,
    more,
    loading,
    filterList,
    fetchAPI,
    consultNewData,
  } = useData();

  useEffect(() => {
    fetchAPI();
  }, [user]);

  return (
    <>
      <Header search={search} setSearch={setSearch} />
      <InfiniteScroll
        dataLength={filterList.length}
        next={consultNewData}
        hasMore={more}
        scrollThreshold={0.9}
        loader={!loading && <Spinner />}
      >
        <div className="container">
          {loading ? <Spinner /> : <List filterList={filterList} />}
        </div>
      </InfiniteScroll>
      <ScrollButton />
    </>
  );
}

export default App;
