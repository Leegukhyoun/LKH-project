import React from 'react';

const Page3 = () => {
    const visitClick = () => {
        window.open(`https://strato-hotel.vercel.app/`, '_blank');
    }
    const gitClick = () => {
        window.open(`https://github.com/Leegukhyoun/strato-hotel`, '_blank');
    }
    return (
<div className='Page' id='P3cover'>
            <div className='ppphoto'>
                <img src='./images/액자2.png' alt='#' />
            </div>
            <div className='info'>
                <div className='infoTitle'>
                    <h2>02</h2>
                    <h3>Strato Hotel</h3>
                </div>
                <div className='infoContents'>
                    <p>STRATO라는 가상의 호텔 홈페이지를 주제로 만든 웹.<br/>화려한 디자인이 특징으로 호텔의 다양한 정보와 예약
                    <br/> 등이 가능하다.
                        </p>
                    <p>- 제작 인원 : <br/><span className='textBold'>2명</span></p>
                    <p>- 기술 스택 : <br/><span className='textBold'>Javascript, React, Node.js, MySQL</span></p>
                    <p>- 제작 기간 : <br/><span className='textBold'>07/08 ~ 07/22</span></p>
                    <p>- 부족한 점 : <br/><span className='textBold'>서브 페이지의 미흡, 로그인으로 쿠키가 아닌 세션 이용,<br/>
                        설계 시 반응형 웹 디자인을 고려하지 않아 엉성한 구조</span></p>
                    <p>
                        - 제작 후기 : <br/><span className='textBold'>비주얼 요소를 중심으로 제작하여 상당히 재미있었다.<br/>
                        처음 해본 Git 협업이라 처음에 우여곡절이 많았지만, 
                        성공적으로 <br/>팀프로젝트를 마쳐 Git의 이해도는 물론
                        팀원의 코드를 읽어내는
                        <br/> 연습을 할 수 있었다. 그리고 마크업 시 설계의 중요성도 느끼게 되었다.</span>
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

export default Page3;