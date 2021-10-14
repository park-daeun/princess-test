const num = document.querySelector('.num');
const question = document.querySelector('.question');

let mbtiList = [
    { name : 'I', value : 0},
    { name : 'E', value : 0},
    { name : 'S', value : 0},
    { name : 'N', value : 0},
    { name : 'T', value : 0},
    { name : 'F', value : 0},
    { name : 'J', value : 0},
    { name : 'P', value : 0},
]

let index = 0;
next(index);

function mbtiSelect(mbti){
    for(let i=0; i<8; i++){
        if(mbti == mbtiList[i].name){
            mbtiList[i].value++;
        }
    }
}

function select(e){
    for(let i=0; questionList[index].a.length; i++){
        console.log(mbtiList);
        if(e.target.innerText == Object.values(questionList[index].a[i])[0]){
            mbtiSelect(Object.values(questionList[index].a[i])[1]);
            break;
        }
    }
}

function addAnswer(text){
    const answerBox = document.querySelector('.answer');
    const answer = document.createElement('button');

    answer.classList.add('answerList');
    answerBox.appendChild(answer);
    answer.innerHTML = text;

    answer.addEventListener("click", function(e){
        const allAnswer = document.querySelectorAll('.answerList');

        for(let i=0; i<allAnswer.length; i++){
            allAnswer[i].disabled = true;
            allAnswer[i].style.display = 'none';
        }

        select(e);
        next(++index);
    });
}

var mbti = '';
function next(idx){
    if(idx === 12){
        if(mbtiList[0].value > mbtiList[1].value){
            mbti += 'I';
        }
        else{
            mbti += 'E';
        }

        if(mbtiList[2].value > mbtiList[3].value){
            mbti += 'S';
        }
        else{
            mbti += 'N';
        }

        if(mbtiList[4].value > mbtiList[5].value){
            mbti += 'T';
        }
        else{
            mbti += 'F';
        }

        if(mbtiList[6].value > mbtiList[7].value){
            mbti += 'J';
        }
        else{
            mbti += 'P';
        }

        localStorage.setItem('type', mbti);
        console.log(mbti);
        location.href = 'result.html';
    }

    num.innerHTML = questionList[idx].n;
    question.innerHTML = questionList[idx].q;

    for(let key in questionList[idx].a){
        addAnswer(questionList[idx].a[key].answer);
    }
}