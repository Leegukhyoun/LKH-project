import React from 'react';

const Page2 = () => {
    const visitClick = () => {
        window.open(`https://my-page-client.vercel.app/`, '_blank');
    }
    const gitClick = () => {
        window.open(`https://github.com/Leegukhyoun/MyPage_client`, '_blank');
    }
    return (
        <div className='Page' id='P2cover'>
            <div className='info'>
                <div className='infoTitle'>
                    <h2>01</h2>
                    <h3>My Diary</h3>
                </div>
                <div className='infoContents'>
                    <p>'나의 일정을 쉽게 관리하자' 라는 명목 하에 만들어진 개인 홈페이지.<br/>
                        각각의 사용자가 자신의 게시글만 확인할 수 있어 철저히 자신만의<br/>
                        자료를 기록하고 사용한다.</p>
                    <p>- 제작 인원 : 1명</p>
                    <p>- 제작 기간 : 07/26 ~ 08/19</p>
                    <p>- 부족한 점 : 미흡한 디자인, 한 화면에 과하게 압축된 인터페이스</p>
                    <p>
                        - 제작 후기 : <br/>처음 구상했던 것과 달리 많은 시간이 들었다.<br/>
                        A처럼 하면 되겠지? 라고 생각하면 B가 말썽이었고, 
                        이를 생각한 방식으로 수정하기가 까다로웠다. <br/>  
                        하지만 다중 쿼리문이나, 이미지 저장 등 새로운 방법을 떠
                        올려야 하는 때가 많았고, 그걸 풀어나가며<br/> 굉장히 다양한 시도를 했다. 그래서 보람차게 만족스런 결과물이 나왔다. 
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
                <img src='./images/액자1.png' alt='#' />
            </div>
        </div>
    );
};

export default Page2;