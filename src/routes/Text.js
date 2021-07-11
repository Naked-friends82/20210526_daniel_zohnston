import React, { useEffect, useState } from 'react';
import ListText from '../components/ListText';
import "../css/text.css";
import "../css_mobile/text_mobile.css";


const Text = ({setCurrent, setPageList}) => {
  const LIST_text = ["statement"];
  useEffect(() => {
    setCurrent("Text");
    setPageList(LIST_text);
  }
  ,[])

  const [currentText, setCurrentText] = useState("");
  const LIST_statement = [
    {
      title: `① _____`,
      content:  <div>
                  무엇인가에 대해 말할 수 있다는 건 그것에 대한 자신의 신념이 있는 것이라 생각한다. 이런 확고한 자세를 가졌으면 하는 부러움이 있다. <br /><br />
                  내 분수대로 정의했던 의미들이 남들에겐 무의미한 것으로 보일까 두려웠다. 그래서 어떤 한 현상에 대한 나의 입장을 모호하게 하여 남의 주장으로부터 자신을 방어하려 노력해왔다. 그러나 아쉽게도 속마음을 통제하지 하고 발설한 후, 원치 않은 대립 관계와 말다툼에 휩싸였다. 그리고 그 불편한 관계를 지속하는 것에 불안을 느꼈다. <br /><br />
                  이런 상황에서 더 나아가는 방법을 찾으라고 다들 말하는 것만 같다. “말을 할거면 제대로 해라. 네가 말하고자 하는 바가 무엇인가?” 이렇게 묻는다면 나는 명료히 답할 수 없었다. 세계를 규정하거나 얘기할 수 있는 ‘묘수’는 찾을 수 없었다. 혹여 나 또한 고유한 이야기가 있기에 나만의 세계가 있다고 소리치고 싶지만, 남들에게 호소력 있게 전달되기에는 정확함이 희미했다.<br /><br />
                  말하고자 하는 바가 무엇인지 정확하지 않은 채로 회화 작업을 해왔다. 순간 생각나는 초안들을 수첩에 휘갈기듯 작성하는 것처럼, 메시지가 매우 은폐된 활동이었다. 그러면서도 아예 주장할 필요가 없는 망상적인 공간들을 그리기도 했었다. 본격적인 작업을 한다고 했던 올해 초에는, 명확하지 않은 욕구들이 투사된 그림들에 독자들을 전적으로 참여하게 하는 활동부터 시작했다. 내 의미나 가치가 다른 이에게는 필요 이상으로 난해하다고 느낄 수 있다는 조심성을 여전히 가지고 있어서, 아예 남들이 품은 뜻을 내 그림에 적용하는 것으로 재미를 보고 싶었다. 그러면서도 또 다른 작업 방향으로서, 미미한 주장들의 대상 그 자체에 대해서 작업을 해보고 싶다는 생각이 들었다. 누군가의 설교에 대응하여 말하고자 하는 바가 있지만, 암묵적인 무언가로 인해 입을 다물게 되는 나 자신의 경험처럼, 말하지 못하는 것을 먼저 배워버린 모습들을 그리고 싶었다. 그리고 입을 닫는 것의 원인은 거대한 담론이 아닌 사적인 결함들이어서 쉽게 이해받을 수 없음에 슬퍼하는 것으로 자연스레 주목하였다. 추가로 이와 같은 작업에 세부적인 요소를 부가하기 위해서는 조금 더 많은 사람의 정리되지 않은 (넋두리 같은) 이야기들이 필요성을 느낀다. 사람들의 독자적인 세계의 파편을 보면 더 풍부한 작업의 요소로 만들 수 있을 것 같기 때문이다. <br /><br />
                  어쩌면 나는 고유한 주장성이나 개념을 언어화하지 못한 사람일 수 있다. 그래서 주장이 없는 대상을 표현한다는 것으로 작업 방향을 우회한다고 여길 수 있다. 그러나 내 생각 또한 첨예하게 들어가보면 보편적 의미로 정립될 수 있으며, 공감을 얻을 가능성이 있다고 믿기에 해보고자 하는 것을 밀어붙이고 싶다. 개인의 주장이 사회에 묵인되는 것을 두려워한다는 작업주제가 절대로 남들의 작업 주제보다 하등하지 않다는 생각을 한다. 그래서 이런 큰 틀을 바탕으로 기꺼이 작업을 이어서 나가고 싶은 마음이다. 덤으로 자신에 대한 점진적인 정체화와 더불어 그 과정 속 묵인되는 자신의 존재감들을 찾으면서, 평면회화 작업들의 주제를 구체화하고 싶다.

                </div>
    },
    {
      title: "② _____",
      content:  <div>
                  Preparing to install...
                </div>
    },
  ]
  return(
    <article className="text">
    <div className="text_empty">
    
    </div>
      <div className="text_lists">
        {LIST_statement.map((eachT) => 
          <ListText key={eachT.title} eachT={eachT} currenText={currentText} setCurrentText={setCurrentText} />
        )}
      </div>
      <div className="text_boxes">
        {currentText ? (
            <>
              <div className="text_content">
                {currentText.content}
              </div>
            </>
          ):(
            <p className="text_default">
                This is from Daniel_zohnston
              </p>
          )}
      </div>
    </article>
  )
}

export default Text;