import React from 'react';

const Page4 = () => {
    const visitClick = () => {
        window.open(`http://freiheit512.dothome.co.kr/mall/index.php`, '_blank');
    }
    const gitClick = () => {
        window.open(`https://github.com/Leegukhyoun/green-books`, '_blank');
    }
    return (
<div className='Page' id='P4cover'>
            <div className='info'>
                <div className='infoTitle'>
                    <h2>03</h2>
                    <h3>Green Books</h3>
                </div>
                <div className='infoContents'>
                    <p>Green Books라는 가상의 서점을 주제로 만든 웹. DB별로 도서를 나누어 <br/>
                    편리한 분류가 가능하다.
                        </p>
                    <p>- 제작 인원 : <br/><span className='textBold'>3명</span></p>
                    <p>- 기술 스택 : <br/><span className='textBold'>PHP, MySQL 등</span></p>
                    <p>- 제작 기간 : <br/><span className='textBold'>06/20 ~ 07/01</span></p>
                    <p>- 부족한 점 : <br/><span className='textBold'>정리가 되지 않은 DB, 분량 조절의 어려움</span></p>
                    <p>
                        - 제작 후기 :<br/><span className='textBold'>Git 없이 진행한 팀 프로젝트라 굉장히 어려움이 많았다.<br/> php를 사용한 웹이라 기존 웹들과 느낌이 많이 달라 적응이 어려웠지만 재미있었다.<br/>팀 프로젝트를 진행할 때 협업 프로그램이 얼마나 중요한지 깨닫게 되었다.</span>
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
                <img src='./images/액자5.png' alt='#' />
            </div>
        </div>
    );
};

export default Page4;