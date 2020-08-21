const form = document.querySelector(".wirteForm"),
  board = document.querySelector(".boardTable"),
  title = document.querySelector(".writeTitle"),
  writer = document.querySelector(".writeWriter"),
  link = document.querySelector(".writeLink")

let infos = []

function uploadBoard(info) {
  const tr = document.createElement("tr");
  const id = document.createElement("td");
  const nickname = document.createElement("td");
  const title = document.createElement("td");
  const writer = document.createElement("td");
  const link = document.createElement("td");
  const date = document.createElement("td");
  const newId = infos.length + 1;

  tr.appendChild(id);
  tr.appendChild(nickname);
  tr.appendChild(title);
  tr.appendChild(writer);
  tr.appendChild(link);
  tr.appendChild(date);
  tr.id = newId;
  board.appendChild(tr);

  infos.push(info);
  console.log(infos)

  infos.forEach(info => {
    uploadBoard(info);
  })
}

function write(e) {
  e.preventDefault();
  const infoObj = {
    nickname: '율',
    title: title.value,
    writer: writer.value,
    link: link.value,
    date: new Date()
  }
  uploadBoard(infoObj);

  // var xhr = new XMLHttpRequest();
  // xhr.open('POST', '/', true);
  // xhr.setRequestHeader('Content-Type', 'application/json');
  // xhr.send(JSON.stringify(infoObj));
  // xhr.onreadystatechange = function() {
  //   if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
  //     console.log('완료')
  //   }
  // }
}

function getData() {
  console.log('실행완료')
  axios.request({
    method: 'GET',
    url: 'localhost:3000/',
    headers: {'Content-Type': 'application/json'}
  }).then(res => {
    console.log(res);
  })
  // let httpRequest = new XMLHttpRequest();

  // if (!httpRequest) {
  //   alert('만들 수 없어용');
  //   return false;
  // }
  // httpRequest.onreadystatechange = alertContents;
  // httpRequest.open('GET', 'localhost:8000/board');
  // httpRequest.send(null);
}

function alertContents() {
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
      alert(httpRequest.responseText);
    } else {
      alert('request에 문제가 있어요');
    }
  }
}

function init() {
  getData();
  form.addEventListener("submit", write);
  // write();
  console.log(title, writer, link)
}
init();