import React, { useEffect, useState } from "react";
import styles from "./Bener.module.scss";
import img from "../../assets/Bener/bener.jpg";

const Bener = ({ title }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    // 이미지가 로드된 후 애니메이션 시작
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true); // 이미지 로딩 후 애니메이션을 시작
        }, 100); // 0.1초 후에 애니메이션을 시작

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.container}>
            {/* 배너 이미지 */}
            <img
                className={`${styles.benerImage} ${isLoaded ? styles.showImage : ''}`}
                src={img}
                alt="대전 유천 벽산블루밍-benerimage"
            />
            <div className={styles.overlay}></div>
            <div
                className={`${styles.contents} ${isLoaded ? styles.showContents : ''}`}
            >
                <div
                    className={`${styles.title} ${isLoaded ? styles.showTitle : ''}`}
                >
                    {title}
                </div>
                {contents(title, isLoaded)}
            </div>
        </div>
    );
};

export default Bener;

const contents = (text, isLoaded) => {
    if (text === '롯데캐슬 르씨엘' || text === '홍보영상' || text === '체크포인트' || text === '당첨자서류안내' || text === '대전 유천 벽산블루밍') {
        return (
            <>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    하루의 무게를 내려놓고 본연으로 돌아가는 프리미엄.
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    유천·태평 생활권, KTX 서대전역 인접 & 도시철도 2호선(트램) 유천역 예정.
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    도심권 신축, 대전 유천 벽산블루밍과 함께합니다.
                </div>
            </>
        );
    } else if (text === '사업개요' || text === '세대안내' || text === '인테리어' || text === '청약안내' || text === '모집공고안내' || text === '인지세납부안내') {
        return (
            <>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    대전 중구 유천동 생활권의 새로운 주거 중심지.
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    KTX 서대전역 생활권, 도시철도 2호선(트램) 유천역 예정.
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    벽산블루밍 브랜드와 함께 높여가는 일상의 가치.
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    대전 유천 벽산블루밍
                </div>
            </>
        );
    } else if (text === '입지환경') {
        return (
            <>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    교통·교육·생활 모두 가까운 유천 핵심 입지.
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    서대전역·트램 예정, 유등천·대형마트·종합병원 인접.
                </div>
            </>
        );
    } else if (text === '단지안내') {
        return (
            <>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    주거의 품격과 가치를 높이는 특화 설계.
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    쾌적하고 편리한 생활을 위한 최적의 공간.
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    대전 유천 벽산블루밍, 대전 중구 유천동에 자리합니다.
                </div>
            </>
        );
    }
};
