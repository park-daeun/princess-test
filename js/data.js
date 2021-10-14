// question
const questionList= [
    {
        n : '1 / 12',
        q : '친구의 소개로 소개팅에 나왔습니다.<br>당신의 행동은?',
        a : [
            { answer: '어색한 건 질색이야. 먼저 말을 걸면서 분위기를 띄운다.', type: 'E'},
            { answer: '처음 말을 걸어올 때까진 눈치를 살핀다.', type: 'I'}
        ]
    },

    {
        n : '2 / 12',
        q : '맛있어 보이는 밥집을 발견했습니다.<br>당신이 드는 생각은?',
        a : [
            { answer: '유명하고 리뷰도 많으니 맛은 보장이군!', type: 'S'},
            { answer: '간판에서 맛집의 기운이 느껴진다.. 분명 맛있을 거야!', type: 'N'}
        ]
    },

    {
        n : '3 / 12',
        q : '친구가 취업이 되지 않아 힘들어합니다.<br>당신이 친구에게 건넨 말은?',
        a : [
            { answer: '무슨 준비하고 있어? 이력서는 넣은 거야?', type: 'T'},
            { answer: '(곤란한 질문은 하지 말자.) 힘들지.. 좀만 더 힘내서 취뽀 하자!', type: 'F'}
        ]
    },

    {
        n : '4 / 12',
        q : '내일 해외여행을 갑니다!<br>자기 전에 할 일은?',
        a : [
            { answer: '누워서 휴대폰 하다 잠들기', type: 'P'},
            { answer: '짐을 다 챙겼나? 다시 한번 확인하기!', type: 'J'}
        ]
    },

    {
        n : '5 / 12',
        q : '바쁜 평일을 보내고 드디어 주말!!<br>근데 오늘은 기분이 영 꿀꿀해..',
        a : [
            { answer: '친구들을 만나자! 집에 혼자 있으면 더 울적해.', type: 'E'},
            { answer: '오늘은 집에서 영화나 보면서 쉬자. 이럴 때 나가봤자 기만 빨려.', type: 'I'}
        ]
    },

    {
        n : '6 / 12',
        q : '내일 친구와 1년 만에 만나기로 했어요.<br>당신에게 드는 생각은?',
        a : [
            { answer: '내일 기대된다! 내일 뭐 입지? 늦잠 자면 안 돼!', type: 'S'},
            { answer: '내일 비 오진 않겠지? 가다 사고 나면 어떡하지? 길 잃으면 어떡하지? 갑자기 취소되는 건 아닐까? 그럼 예약해둔 곳은 어떡하지?', type: 'N'}
        ]
    },

    {
        n : '7 / 12',
        q : '친한 친구에게 둘 중에 더 듣고 싶은 말은<br>무엇인가요?',
        a : [
            { answer: '너는 두루두루 재능이 많은 것 같아. 매번 보면서 느껴.', type: 'T'},
            { answer: '넌 진짜 나한테 소중한 사람이야.', type: 'F'}
        ]
    },

    {
        n : '8 / 12',
        q : '3일 동안의 과제 계획을 세웠습니다.<br>그런데 첫째 날부터 못 지킬 것 같아요.',
        a : [
            { answer: '괜찮아~ 내일 더 많이 하지 뭐!', type: 'P'},
            { answer: 'ㅂㄷㅂㄷ.. 늦게 자더라도 최대한 다 하고 자자', type: 'J'}
        ]
    },

    {
        n : '9 / 12',
        q : '데이트 중 길에서 연인의 친구를 만났습니다.<br>당신의 반응은?',
        a : [
            { answer: '자연스럽게 웃으며 대한다.', type: 'E'},
            { answer: '인사 후 쭈뼛쭈뼛.. 조용히 있는다.', type: 'I'}
        ]
    },

    {
        n : '10 / 12',
        q : '멍을 때린다는 건 당신에겐 어떤 의미인가요?',
        a : [
            { answer: '아무 생각 하지 않기.', type: 'S'},
            { answer: '깊은 생각에 잠기기. 이미지나 생각들이 단편적으로 둥둥 떠다니는 상태', type: 'N'}
        ]
    },

    {
        n : '11 / 12',
        q : '"나 너랑은 별로 안 맞는 것 같아."<br>당신의 반응은?',
        a : [
            { answer: '왜? (이유가 궁금해)', type: 'T'},
            { answer: '(마상)', type: 'F'}
        ]
    },

    {
        n : '12 / 12',
        q : '데이트룩을 고를 때 당신은 보통 어떤 편인가요?',
        a : [
            { answer: '나가기 직전까지 고민하다 마음에 드는 옷으로 입는다.', type: 'P'},
            { answer: '전 날 머리부터 발끝까지 풀착장 상상해둔다.', type: 'J'}
        ]
    },
]


// result
const resultList = [
    {
        name: 'ISTJ',
        title: '[뮬란]',
        princess: '뮬란',
        des: '∙ 의지가 강해요! 자신이 원하는 것을 빠르게 알아차리고 쫓는 타입이에요.<br><br>∙ 누가 내 일에 관여하는 건 질색! 누가 도와준다고 해도 혼자 하는 게 편해요. 내 얘기 하는 것도 싫고 그렇다고 남 얘기 들어주는 것도 그다지..<br><br>∙ 책임감이 강하고 현실적이에요. 매사에 보수적이고 철저한 편이에요. 말투도 직설적인 편이라 가끔 딱딱하다는 소리를 듣기도 해요.<br><br>∙ 혹시 당신의 mbti는 \'ISTJ\'..?',
        alt: '뮬란'
    },

    {
        name: 'ISFJ',
        title: '[이상한 나라의 앨리스]',
        princess: '앨리스',
        des: '∙ 차분하고 헌신적이며 인내심이 강해요. 타인의 감정 변화에 주의를 기울이는 편이에요. 배려심 많고 공감도 잘해주고 생각도 많아요.<br><br>∙ 원칙주의자이자 게으른 완벽주의자예요. 할 일을 미루면서 마음속으로는 고통받고 있진 않나요..?<br><br>∙ 사람 만나는 거 좋은데 싫어요. 어쩔 땐 내향적이고 어쩔 땐 외향적이라 나도 나를 모르겠어요.<br><br>∙ 혹시 당신의 mbti는 \'ISFJ\'..?',
        alt: '앨리스'
    },

    {
        name: 'INFJ',
        title: '[겨울왕국]',
        princess: '엘사',
        des: '∙ 사람들 사이에서 리드하기보다는 상대방이 좋아하는 말과 행동을 통해 주도권을 넘겨주는 편이에요.<br><br>∙ 옳다고 생각하는 일은 끝까지 밀고 나가는 편이에요. 감정 조절 능력이 좋아서 멘탈이 튼튼해요!<br><br>∙ 생각이 많아요. 망상도 많이 하고 감수성이 풍부해요. 심리학, 철학, 인문학 등 추상적으로 생각하는 걸 좋아해요!<br><br>∙ 혹시 당신의 mbti는 \'INFJ\'..?',
        alt: '엘사'
    },

    {
        name: 'INTJ',
        title: '[미녀와 야수]',
        princess: '벨',
        des: '∙ 무언가를 배우고 정보를 이해하는 능력이 뛰어나요. 스펀지처럼 정보를 빨아들이고, 사실에 기반한 논리적인 정보들을 뽑아낼 수 있어요!<br><br>∙ 혼자서 모든 것을 해결하려는 의지가 강해요. 목표 지향적인 성격이라 목표를 달성하면 아~주 큰 행복감을 느껴요.<br><br>∙ 무신경하다는 소리를 듣곤 하지만 좋아하는 일에는 과몰입!<br><br>∙ 혹시 당신의 mbti는 \'INTJ\'..?',
        alt: '벨'
    },

    {
        name: 'ISTP',
        title: '[헤라클레스]',
        princess: '메가라',
        des: '∙ 부정적인 일에 오래 갇혀있는 게 싫어요. 힘든 일에 오래 붙들려있지 않도록 얼른 탈출구를 찾는 편이에요.<br><br>∙ 낯을 가리지만 친해지면 말도 많고 장난도 잘 쳐요! 하지만 남한테 별로 관심이 없고 내 얘기를 잘 안 하는 편이에요.<br><br>∙ 벼락치기 잘해요. 노력을 하지 않는 것에 비해 성적이 잘 나와요. 훗!<br><br>∙ 혹시 당신의 mbti는 \'ISTP\'..?',
        alt: '메가라'
    },

    {
        name: 'ISFP',
        title: '[백설공주와 일곱난쟁이]',
        princess: '백설공주',
        des: '∙ 마음이 따뜻하고 남을 잘 믿어 의심치 않아요. 다른 사람 부탁을 잘 거절하지 못해요. 남에게 민폐 끼치는 건 절대 NO!<br><br>∙ 누가 나에 대해 부정적으로 얘기하면 마상 크게 받아요.. 반대로 칭찬받으면 종종 생각나서 미소 짓곤 해요.<br><br>∙ 다이어리 끝까지 써본 적이 없어요. 생각은 잘 하는데 생각한 걸 실천으로 가는 게 힘들어요.<br><br>∙ 혹시 당신의 mbti는 \'ISFP\'..?',
        alt: '백설공주'
    },

    {
        name: 'INFP',
        title: '[잠자는 숲속의 공주]',
        princess: '오로라',
        des: '∙ 완벽주의적 경향이 있어요. 하지만 일을 잘 벌이고 마무리를 못하는 편이에요. 겉으로는 드러나지 않아도 속으로는 매우 열정적이랍니다!<br><br>∙ 내향적이지만 은근 관심받고 싶어 하는 경향이 있어요. 은근한 관종..?<br><br>∙ 여행과 영화, 책, 음악 같은 걸 좋아해요! 망상하는 것도 너무 좋아요. 반대로 연락하는 건 너무 귀찮아요. 안읽씹도 자주 해요.<br><br>∙ 혹시 당신의 mbti는 \'INFP\'..?',
        alt: '오로라'
    },

    {
        name: 'INTP',
        title: '[알라딘]',
        princess: '자스민',
        des: '∙ 남에게 피해 주는 거 싫어하고 남에게 별로 관심도 없어요. 남이 내 욕을 하든 상관 안 쓰고 남 욕도 잘 안 해요.<br><br>∙ 책 읽는 것은 좋지만 귀찮아요.. 머릿속 리스트에는 한가득이에요.<br><br>∙ 감정 기복이 별로 없고 웬만한 일에는 상처를 받지 않는 편이에요. 자기 주관이 뚜렷하고 호불호도 확실해요!<br><br>∙ 혹시 당신의 mbti는 \'INTP\'..?',
        alt: '자스민'
    },

    {
        name: 'ESTP',
        title: '[메리다와 마법의 숲]',
        princess: '메리다',
        des: '∙ 삶을 즐겨요! 살아지는 대로 살고, 남 눈치도 보지 않아요. 스트레스도 잘 안 받는 편이에요. 당장 놀고먹는 게 너무 좋아요.<br><br>∙ 눈치 엄청 빨라요. 뒤끝도 없고 쿨해요! 생각이 단순해 깊게 생각하지 않는 편이에요.<br><br>∙ 스릴 넘치고 활동적인 게 좋아요. 경쟁, 내기, 번개, 즉흥 좋아해요!<br><br>∙ 혹시 당신의 mbti는 \'ESTP\'..?',
        alt: '메리다'
    },

    {
        name: 'ESFP',
        title: '[인어공주]',
        princess: '에리얼',
        des: '∙ 좋은 게 좋은 거라는 생각을 가지고 살아요. 아무리 화가 나거나 걱정되는 일이 있어도 조금 고민하다가 잠들어버려요.<br><br>∙ 모임 장소에서 침묵이 흐르는 게 제일 싫어요! 여러 사람들과의 술자리가 재밌고 행복해요. 서프라이즈, 깜짝파티 좋아해요!<br><br>∙ 집에 오래 있으면 무기력한 느낌이 들어요. 집에만 있으면 지루한 기분이에요.<br><br>∙ 혹시 당신의 mbti는 \'ESFP\'..?',
        alt: '에리얼'
    },

    {
        name: 'ENFP',
        title: '[라푼젤]',
        princess: '라푼젤',
        des: '∙ 남 얘기에 리액션을 잘 해줘요! 새로운 인간관계에 두려움이 없는 편이에요. 하지만 혼자 있는 시간은 꼭 필요해요!<br><br>∙ 일 머리가 있는 편이에요. 공부할 때 벼락치기 해도 성과가 잘 나와서 매번 벼락치기해요.<br><br>∙ 긍정적이고 낙천적이에요. 흥미 있는 일에는 열정적이지만 관심 없는 건 알고 싶지도 않아요.<br><br>∙ 혹시 당신의 mbti는 \'ENFP\'..?',
        alt: '라푼젤'
    },

    {
        name: 'ESTJ',
        title: '[공주와 개구리]',
        princess: '티아나',
        des: '∙ 한 번 시작한 일은 끝을 보는 편이에요. 계획적인 것을 좋아하고 여유가 생기면 불안해요.<br><br>∙ 누가 고민 상담하면 머릿속으로 누구 잘못인지 따지고 있어요. 하지만 상처받을까 봐 어설프게 위로해 줘요.<br><br>∙ 겉과 속이 일치해요! 차라리 앞담을 하지 뒷담은 절대 NO! 도 아니면 모 좋아해요.<br><br>∙ 혹시 당신의 mbti는 \'ESTJ\'..?',
        alt: '티아나'
    },

    {
        name: 'ESFJ',
        title: '[겨울왕국]',
        princess: '안나',
        des: '∙ 사회생활 잘한다는 소리를 들어봤어요. 다른 사람들에게 인정받으면 기분이 매우 좋아요.<br><br>∙ 새로운 사람 사귀는 것도 좋아하고 같이 노는 것도 좋아요. 혼자 있는 것이 싫고 사람들 사이에서 에너지를 얻는 편이에요!<br><br>∙ 인간관계에서 상처받아도 상대방 생각하느라 얘기를 못해요. 친구, 가족, 내 사람 잘 챙겨요.<br><br>∙ 혹시 당신의 mbti는 \'ESFJ\'..?',
        alt: '안나'
    },

    {
        name: 'ENTP',
        title: '[노트르담의 꼽추]',
        princess: '에스메랄다',
        des: '∙ 다재다능해요. 머리가 똑똑하고 문제 해결력이 뛰어나요! 항상 새로운 것을 추구하고 마음먹으면 못하는 게 없어요.<br><br>∙ 상대방 의견이 내 의견과 다르면 설득하는 스타일이에요. 직설적이고 솔직하게 표현하는 것에 거리낌이 없어요.<br><br>∙ 지나간 일에 후회가 없어요. 힘든 일은 빨리 털어내는 편이에요.<br><br>∙ 혹시 당신의 mbti는 \'ENTP\'..?',
        alt: '에스메랄다'
    },

    {
        name: 'ENFJ',
        title: '[포카혼타스]',
        princess: '포카혼타스',
        des: '∙ 사람들을 이끄는 것에 타고난 기질이 있고 좋아해요. 계획 세우는 게 좋고 계획대로 사람들을 끌어가는 것에 능숙해요.<br><br>∙ 처음 보는 사람들과도 잘 어울려요! 사람들에게 잘 맞춰주는 성격이고, 사람들에게 친절 베푸는 것도 좋아해요.<br><br>∙ 인정과 칭찬을 받으면 좋지만 비판에는 민감하게 반응해요. 화가 나도 묵묵히 참지만 상처를 쉽게 받아요.<br><br>∙ 혹시 당신의 mbti는 \'ENFJ\'..?',
        alt: '포카혼타스'
    },

    {
        name: 'ENTJ',
        title: '[아틀란티스: 잃어버린 제국]',
        princess: '키다',
        des: '∙ 끈기와 책임감이 강해요. 맡은 일은 끝까지 밀고 나가요! 체계적이고 조직적이고 계획적이에요.<br><br>∙ 완벽주의자라 조별 과제할 때 시원찮으면 그냥 내가 총대 메요. 자기 비전이 확고하고 자존감도 높아요! 열등감을 느낀 적이 극히 드물어요.<br><br>∙ 피해 주는 것도 싫고 받는 것도 싫어요. 남 일에 관심도 크게 가지지 않는 편이에요.<br><br>∙ 혹시 당신의 mbti는 \'ENTJ\'..?',
        alt: '키다'
    }
]