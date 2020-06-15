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
        <div class="project-file" style="display: none;">
          <!-- ${data.ppt} -->
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
      btnlst2+=`<a class="w3-bar-item w3-button" onclick="show(this.text);toggle(lst);">${j.title}</a>`;
    }
    document.getElementById(i.subject).innerHTML+=content;
    document.getElementById(i.subject+'-btn').innerHTML=btnlst;
    document.getElementById(i.subject+'-btn-mobile').innerHTML=btnlst2;
  }
}
process(data);