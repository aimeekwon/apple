/*eslint-disable*/
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let post = "강남우동맛집";
  // let [글1, a] = useState('여자코트추천');
  // let [글2, b] = useState('남자코트추천');
  // let [글3, c] = useState('커플코트추천');
  let [글, 글변경] = useState(["여자코트추천", "남자코트추천", "커플코트추천"]);
  let [따봉, 따봉변경] = useState(0);
  // let[title, 제목변경] = useState(['제목1','제목2','제목3','제목4','제목5']);
  // let[date, 날짜변경] = useState(['날짜1','날짜2','날짜3','날짜4','날짜5']);
  // let[name, 이름변경] = useState(['이름1','이름2','이름3','이름4','이름5']);
  //state변경함수는 set로 많이 만듬
  let [modal, setModal] = useState(false); //모달이 안보이는 상태

  //state변경용 함수
  let [logo, setLogo] = useState("React blogs");

  //array자료 개수만큼 함수안의 코드 실행해줌
  //함수안의 파라미터는 array안에 있던 자료임
  //return에 뭐 적으면 array로 담아줌
  // [1, 2, 3].map(
  //   function (a) {
  //     return '123321'
  //   }
  // )
  return (
    <div className="App">
      <div className="black_nav">
        <h4>{logo}</h4>
      </div>
      <button
        onClick={() => {
          let copy = [...글];
          copy.sort();
        }}
      >
        정렬하기
      </button>

      <div className="list">
        <h4>
          <span
            onClick={() => {
              let copy = [...글];
              copy[0] = "아이코트추천";
              글변경(copy);
            }}
          >
            {글[0]}
          </span>

          <span
            onClick={() => {
              따봉변경(따봉 + 1);
            }}
          >
            {" "}
            👍
          </span>
          {따봉}
        </h4>
        <p>JUNE. 11. 2023</p>
      </div>
      <div className="list">
        <h4>{글[1]}</h4>
        <p>JUNE. 11. 2023</p>
      </div>
      <div
        onClick={() => {
          setModal(!modal);
        }}
        className="list"
      >
        <h4>{글[2]}</h4>
        <p>JUNE. 11. 2023</p>
      </div>

      {/* {
        글.map(function (a, i) {
          return (
            <div onClick={() => { setModal(!modal) }} className="list">
              <h4>{글[i]}</h4>
              <span onClick={() => { 따봉변경(따봉[i] + 1) }}> 👍</span>{따봉}
              <p>JUNE. 11. 2023</p>
            </div>
          )
        })
      } */}
      {
        //if문 못씀 : html쓰는 영역이기 떄문
        //삼항연산자 가능=> 조건식? 참일때 실행: 거짓일 때 실행
        //1==1 ? 'okay': 'no'
        modal == true ? <Modal 글제목={글제목} /> : null
      }
    </div>
  );
}

// const ModalItem = ({ modal }) => {
//   return (
//     <div className="modal">
//       <h5>{modal.title}</h5>
//       <p>{modal.date}</p>
//       <span>{modal.name}</span>
//     </div>
//   )
//}
//동적인 UI만드는 step
//1. html, css로 미리 디자인 완성
//2. UI의 현재 상태를 state로 저장
//3. state에 따라 UI가 어떻게 보일지 작성
// component만들기

// 파라미터

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.글제목[0]}</h4>
      <p>날짜</p>
      <button>change</button>
    </div>
  );
}
export default App;
//부모-> 자식state전송 하려면 props문법 씀
// 1. 자식컴포넌트 작명={state이름}
// 2. proprs파라미터 등록 후 props.작명사용
