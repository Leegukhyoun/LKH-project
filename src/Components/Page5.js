import React from 'react';

const Page5 = () => {
    const visitClick = () => {
        window.open(`http://freiheit512.dothome.co.kr/RunningSS/index.html`, '_blank');
    }
    const gitClick = () => {
        window.open(`https://github.com/Leegukhyoun/RunningSS`, '_blank');
    }
    return (
<div className='Page' id='P5cover'>
            <div className='ppphoto'>
                <img src='./images/액자4.png' alt='#' />
            </div>
            <div className='info'>
                <div className='infoTitle'>
                    <h2>04</h2>
                    <h3>성수의 야간 드라이브</h3>
                </div>
                <div className='infoContents'>
                    <p>친한 친구 성수를 주제로 만든 캔버스 게임. <br/>
                        </p>
                    <p>- 제작 인원 : <br/><span className='textBold'>1명</span></p>
                    <p>- 기술 스택 : <br/><span className='textBold'>Javascript, Canvas 등</span></p>
                    <p>- 제작 기간 : <br/><span className='textBold'>06/13 ~ 06/17</span></p>
                    <p>- 부족한 점 : <br/><span className='textBold'>싱글 페이지로 제작하여 퀄리티가 다소 낮아졌고,<br/>캔버스 자체의 생소함, UI 부족</span></p>
                    <p>
                        - 제작 후기 : <br/><span className='textBold'>친구에게 허락은 맡았습니다.<br/>객체가 순환되게 하는 것이 꽤나 까다로웠다. 일자로 다가오는<br/>
                        객체들에게 Y좌표값을 다르게 주어 캐릭터 좌표와 일치시켜 <br/> 이벤트가 발생하게 하는 것이 어려웠지만 캐릭터의 좌표
                        객체<br/>를 따로 만들어 이 문제를 해결했다. </span>
                    </p>
                </div>
                <div className='btns'>
                    <div className='visBtn' onClick={visitClick}>
                        Visit
                    </div>
                    <div className='gitBtn' onClick={gitClick}>
                        <img src='./images/깃.png' alt='' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page5;