import { useState } from "react";
import "./App.css";
import ChickenForm from "./component/ChickenForm";
import ChickenList from "./component/ChickenList";
import Modal from "./component/Modal";
import { useNavigate } from "react-router-dom";

const MainRouter = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // 사용자가 보고싶을 때 볼 수 있도록 처음에는 false 보이지 않음 설정

 
  // 오픈 true 닫음 false
  // const에서 동작하는 기능이 1개일 때 {} 중괄호 생략 가능
  const openModal = () => setIsModalOpen(true);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  

  return (
    <div className="app-container">
      <h1>치킨 가게 메뉴 관리</h1>
      <button onClick={openModal} className="chicken-register-button">
        메뉴등록하기
      </button>
      <ChickenList />

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ChickenForm />
      </Modal>
    </div>
  );
};

export default MainRouter;
