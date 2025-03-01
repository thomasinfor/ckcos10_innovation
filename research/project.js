function people(data){
  content='作者：'+data.member;
  if(data.professor) content+='<br>指導教授：'+data.professor+' 教授';
  return content;
}
function tohtml(x){
  // x=x.replace(/\n/g,'<br>');
  return x;
}
function project(data){
  return `
    <div class="project w3-card" id="${tohtml(data.title)}">
      <div class="project-text">
        <h2 class="header">${tohtml(data.title)}</h2>
        <p style="text-align: right;">${people(data)}</p>
        ${tohtml(data.intro)}
      </div>
      <div>
        <div class="w3-button w3-round-large w3-border w3-border-teal pdfbutton" onclick="pdfbutton(this);">Show PPT</div>
        <a href="../files/${data.title}.pptx" download="${data.title}"><div class="w3-button w3-round-large w3-border w3-border-teal pdfbutton">Download</div></a>
        <a href="${data.yt}" target="_blank"><div class="w3-button w3-round-large w3-border w3-border-teal pdfbutton">報告影片</div></a>
        <div class="project-file" style="display: none;">
          <iframe src="../files/${data.title}-ppt.pdf#toolbar=0" style="width: 95vw;height: 50vw;max-height: 359px;"></iframe>
        </div>
      </div>
    </div>`;
}
function process(data){
  for(var i of data){
    var content='',btnlst='',btnlst2='';
    for(var j of i.projects){
      content+=project(j);
      btnlst+=`<a class="w3-bar-item w3-button" onclick="show(this.text);">${j.title}</a>`;
      btnlst2+=`<a class="w3-bar-item w3-button" onclick="show(this.text);toggle(lst);mobile_show(null);">${j.title}</a>`;
    }
    document.getElementById(i.subject).innerHTML+=content;
    document.getElementById(i.subject+'-btn').innerHTML+=btnlst;
    document.getElementById(i.subject+'-btn-mobile').innerHTML+=btnlst2;
  }
}
process(data);