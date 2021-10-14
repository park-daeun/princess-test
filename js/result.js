const mbtiType = localStorage.getItem('type');
const resultType = document.querySelector('.type');
const copyBtn = document.querySelector('.copyBtn');

for(let i=0; i<resultList.length; i++){
    if(resultList[i].name == mbtiType){
        resultAdd(i);
        break;
    }
}

function resultAdd(i){
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    const img = document.createElement('img');
    const h4 = document.createElement('h4');

    const pdiv = document.createElement('div');
    const text = document.createElement('p');

    // 사진, 제목, 공주
    h2.classList.add('typeTitle');
    // h4.classList.add('typeTitle');
    h4.innerText = resultList[i].title;
    img.setAttribute('src', `./image/${mbtiType}.jpg`);
    img.setAttribute('alt', resultList[i].alt);
    h2.innerText = resultList[i].princess;

    resultType.appendChild(div);
    div.appendChild(img);
    div.appendChild(h4);
    div.appendChild(h2);

    // 한마디로 정의, 특징
    text.innerHTML = resultList[i].des;
    div.appendChild(text);
}