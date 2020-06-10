function people(data){
  content='作者：'+data.member;
  if(data.professor) content+='<br>指導教授：'+data.professor;
  return content;
}
function project(data){
  return `
    <div class="project" id="${data.title}">
      <div class="project-text">
        <h1 class="header">${data.title}</h1>
        <p style="text-align: right;">${people(data)}</p>
        ${data.intro.replace('\n','<br>')}
      </div>
      <div>
        <h4>
          <div class="w3-button w3-round-large w3-border w3-border-teal pdfbutton" onclick="pdfbutton(this);">Show PDF</div><div class="w3-dropdown-hover">
            <div class="w3-button w3-round-large w3-border w3-border-teal pdfbutton">Download</div>
            <div class="w3-dropdown-content w3-bar-block w3-card-4">
              <a class="w3-bar-item w3-button" href="./files/${data.title}_作品說明書.pdf" download="${data.title}_作品說明書.pdf">作品說明書</a>
              <a class="w3-bar-item w3-button" href="./files/${data.title}_海報.pdf" download="${data.title}_海報.pdf">海報</a>
            </div>
          </div>
        </h4>
        <div class="project-file">
          <div class="w3-row">
            <div class="w3-col s12 m12 l6">
              <iframe src="./files/${data.title}research.pdf#toolbar=0" width="100%" height="400px"></iframe>
            </div>
            <div class="w3-col s12 m12 l6">
              <iframe src="./files/${data.title}_展板.pdf#toolbar=0" width="100%" height="400px"></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>`;
}
var example=[
  {
    subject: "information",
    intro: "this is an intriduction to this subject.",
    projects: [
      {
        member: "王勻 林尚廷 蕭梓宏",
        professor: "陽明大學 陳麗芬教授",
        title: "以人工智慧技術開發自動配音效系統",
        intro: `<h5 class="intro">　　近日網路發達，影片的流通更為便利，但為影片加上適當的音效往往需要耗費許多人力與時間資源。本研究旨在研究利用人工智慧深度網路技術訓練模型，並期望訓練後的模型能為當下影片的內容配上適當的音效，使得幫影片配音的過程可以加速，並減少人力需求。本研究主要利用 Keras 這個 Python 套件創建模型，並參考 ResNet 這個著名的深度學習模型，透過大量已標記圖片當作訓練資料，並進一步修改模型的架構，使準確率得到提升。研究結果符合預期，能在適合的類別中為影片配上合理的音效。</h5>`
      },
      {
        member: "王勻 林尚廷 蕭梓宏",
        professor: "陽明大學 陳麗芬教授",
        title: "aa",
        intro: `jizzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz`
      },
      {
        member: "王勻 林尚廷 蕭梓宏",
        professor: "陽明大學 陳麗芬教授",
        title: "bb",
        intro: `jizzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz`
      }
    ]
  },
  {
    subject: "chemistry",
    intro: "this is an intriduction to this subject.",
    projects: [
      {
        member: "王勻 林尚廷 蕭梓宏",
        title: "jizz",
        intro: `jizz`
      },
    ]
  },
  {
    subject: "physics",
    intro: "this is an intriduction to this subject.",
    projects: [
      {
        member: "李秉叡",
        professor: "叛逆秉叡",
        title: "反氣泡秉叡",
        intro: "我就是不做專題 爽啦"
      }
    ]
  }
];
function process(data){
  for(var i of data){
    var content='',btnlst='';
    for(var j of i.projects){
      content+=project(j);
      btnlst+=`<a class="w3-bar-item w3-button" onclick="show(this.text);toggle(lst);">${j.title}</a>`;
    }
    document.getElementById(i.subject).innerHTML=content;
    for(j of document.getElementsByClassName(i.subject+'-btn'))
      j.innerHTML=btnlst;
  }
}
process(example);