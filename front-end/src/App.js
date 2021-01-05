import React, {useState, useEffect} from 'react';
import './App.css';

function App() {

  const [boardList, setBoardList] = useState([]);

  useEffect(() => {
    const getData_url = 'http://localhost:8000/getdata';
    fetch(getData_url)
    .then(res => res.json())
    .then(data => {
      setBoardList(data);
    })
  }, [])

  const title = document.querySelector('.writeTitle')
  const writer = document.querySelector('.writeWriter')
  const link = document.querySelector('.writeLink')

  const date = new Date();
  const newDate = date.getFullYear() + '-' + (parseInt(date.getMonth()) + 1) + '-' + date.getDay() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

  const writeHandler = (e) => {
    e.preventDefault();

    if (title.value && writer.value && link.value) {
      const writeObj = {
        id: boardList.length + 1,
        nickname: '율',
        title: title.value,
        writer: writer.value,
        link: link.value,
        date: newDate
      }

      const postData_url = 'http://localhost:8000/writedata';
      if (writeObj) {
        fetch(postData_url, {
          method: 'POST',
          body: JSON.stringify(writeObj),
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(res => console.log(res))
      } 
      setBoardList(boardList => [...boardList, writeObj]);
    } else {
      alert('정보를 입력해주세요!')
    }
  }

  return (
    <div className="App">
      <div className="write">
        <form className="writeForm">
          <input className="writeTitle" type="text" placeholder="책 제목" />
          <input className="writeWriter" type="text" placeholder="저자" />
          <input className="writeLink" type="text" placeholder="서평 링크"/>
          <button onClick={writeHandler}>작성</button>
        </form>
      </div>

      <div className="board">
        <table className="boardTable">
          <tbody>
          <tr>
            <td></td>
            <td>작성자</td>
            <td>책 제목</td>
            <td>저자</td>
            <td>서평 링크</td>
            <td>작성 시간</td>
          </tr>
          {boardList && boardList.map((board, i) => (
            <tr key={i}>
              <td>{board.id}</td>
              <td>{board.nickname}</td>
              <td>{board.title}</td>
              <td>{board.writer}</td>
              <td>{board.link}</td>
              <td>{board.date}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
