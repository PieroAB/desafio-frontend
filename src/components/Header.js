import React from "react";

const Header = ({ search, setSearch }) => {
  return (
    <nav className="header d-block d-sm-flex">
      <div className="header-title mb-2 mb-sm-0">
        <a href="https://pieroab.github.io/desafio-frontend/#">
          Minuto a Minuto
        </a>
      </div>

      <div className="d-flex align-items-center col-12 col-sm-5 col-md-4 col-lg-2 ">
        <input
          placeholder="Buscar..."
          className=" form-control m-2"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>
    </nav>
  );
};

export default Header;
