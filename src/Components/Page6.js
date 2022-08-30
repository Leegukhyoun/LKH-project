import React from 'react';

const Page6 = () => {
    const visitClick = () => {
        window.open(`http://freiheit512.dothome.co.kr/baseball/baseball.html`, '_blank');
    }
    const gitClick = () => {
        window.open(`https://github.com/Leegukhyoun/baseball-game`, '_blank');
    }
    return (
<div className='Page' id='P6cover'>
            <div className='info'>
                <div className='infoTitle'>
                    <h2>05</h2>
                    <h3>Baseball Game</h3>
                </div>
                <div className='infoContents'>
                    <p>자바스크립트 야구 게임. 간단한 조작과 랜덤 요소로<br/>
                    재미있는 플레이가 가능하다.
                        </p>
                    <p>- 제작 인원 : <br/><span className='textBold'>3명</span></p>
                    <p>- 기술 스택 : <br/><span className='textBold'>Javascript</span></p>
                    <p>- 제작 기간 : <br/><span className='textBold'>06/07 ~ 06/10</span></p>
                    <p>- 부족한 점 : <br/><span className='textBold'>거의 모든 조작을 if문에 의존.</span></p>
                    <p>
                        - 제작 후기 :<br/><span className='textBold'>첫 프로젝트이니만큼 기술적인 면은 가장 부족하나 첫 프로젝트였기에<br/>
                        가장 열심히 만들게 되었다. 부족한 기술 내에서 가장 수려하게 만들어<br/>진 것 같아 뿌듯했다.</span>
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
            <div className='ppphoto'>
                <img src='./images/액자3.png' alt='#' />
            </div>
        </div>
    );
};

export default Page6;