import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../App.css';

const Header = () => {

// 검색어 상태 추가 초기 검색값이 없기 때문에 공란
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate(); // 페이지 이동을 위한 hook

  const handle검색 = () => {
    navigate(`/search?query=${searchTerm}`); // 검색 페이지로 이동하면서 검색어 전달
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="검색하고 싶은 치킨 메뉴를 작성해주세요."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <button className="search-button" onClick={handle검색}>
        검색하기
      </button>
    </div>
  );
};
export default Header;
