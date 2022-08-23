import React from 'react';

const Page3 = () => {
    const visitClick = () => {
        window.open(`https://strato-client1.vercel.app/`, '_blank');
    }
    const gitClick = () => {
        window.open(`https://github.com/Leegukhyoun/strato-client`, '_blank');
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
                    <p>STRATO라는 가상의 호텔 홈페이지를 주제로 만든 웹.<br/>
                        </p>
                    <p>제작 인원 : 2명</p>
                    <p>제작 기간 : 07/08 ~ 07/22</p>
                    <p>부족한 점 : 서브 페이지의 미흡, 로그인으로 쿠키가 아닌 세션 이용<br/>
                        설계 시 반응형 웹 디자인을 고려하지 않아 엉성한 구조</p>
                    <p>
                        제작 후기 : 비주얼 요소를 중심으로 제작하여 상당히 재미있었다.<br/>
                        처음 해본 Git 협업이라 처음에 우여곡절이 많았지만, 
                        성공적으로 <br/>팀프로젝트를 마쳐 Git의 이해도는 물론
                        팀원의 코드를 읽어내는
                        <br/> 연습을 할 수 있었다. 
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