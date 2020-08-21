import React, {useEffect} from 'react';
import axios from 'axios';
import './App.css';

function App() {

  useEffect(() => {
    const getData_url = 'localhost:8000/getdata';
    axios.get(getData_url).then((res) => {
      console.log(res);
    })
  })

  return (
    <div className="App">
      <div className="write">
        <form className="writeForm">
          <input className="writeTitle" type="text" placeholder="책 제목" />
          <input className="writeWriter" type="text" placeholder="저자" />
          <input className="writeLink" type="text" placeholder="서평 링크" />
          <button>작성</button>
        </form>
      </div>

      <div className="board">
        <table className="boardTable">
          <tr>
            <td></td>
            <td>작성자</td>
            <td>책 제목</td>
            <td>저자</td>
            <td>서평 링크</td>
            <td>작성 시간</td>
          </tr>
          <tr>
            <td>1</td>
            <td>율</td>
            <td>돈의속성</td>
            <td>김승호</td>
            <td><a href="db9292.blog.me">db9292.blog.me</a></td>
            <td>2020-09-02 09:02</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default App;
