import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const PizzaResult = () => {
    // 검색될 피자들을 담을 변수명 설정
    const[pizzas, setPizzas] =useState([]);

    // useLocation = 현재페이지의 정보를 가지고 있음 경로나 검색된 문자들
    // useLocation 안에는 pathnaem, search, hash, state, key 존재함
    const location = useLocation(); // 컴퓨터 상에서 내 위치정보를 변수에 담음
    const query = new URLSearchParams(location.search).get("query");
    // 정보가 담긴 변수 안에서 특정 키의 값을 가지고 오는 것

    // 검색에 대한 정보가 바고 보여야하고, 검색어가 수정되면 재 검색을 해야함
    // 쿼리 = 검색어 = keyword  searchTerm
    useEffect(() => {
        /* 쿼리 값이 바뀔 때마다 다시 db에서 검색된 내용 불러오기 */
        // 만약에 쿼리가 존재하면
        if(query) {
            axios.get(`http://localhost:9090/api/pizza/search?query=${query}`)
            .then((response) => setPizzas(response.data))
            .catch((e) => console.error("문제가 발생하여 검색을 가져오지 못합니다."));
        }
    }, [query])
    return (
        <div className="pizza-search-list">
            <h1>검색 결과 : </h1>
            {/* 검색된 피자들은 map을 이용해서 모두 보기 검색을 length가 0초과 일때만 검색 가능하게 설정 */}
            {query > 0 ? (
                <div>
                    {pizzas.map((p) => (
                        <div key={p.id}>
                            <h3>{p.pizzaName}</h3>
                            <h3>{p.description}</h3>
                            <h3>{p.price}원</h3>
                        </div>
                    ))}
                </div>
        ) : (
            <div>
                검색결과가 존재하지 않습니다.
            </div>
        )}
        </div>
    )
}

export default PizzaResult;