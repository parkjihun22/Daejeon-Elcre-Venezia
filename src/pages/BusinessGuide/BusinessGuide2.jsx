import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from './BusinessGuide.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";


import page1 from "../../assets/BusinessGuide/BusinessGuide2/page1.jpg";

const BusinessGuide2 = () => {
    const menuContents = [
      { title: "사업안내", url: "/BusinessGuide/intro" },
      { title: "분양일정", url: "/BusinessGuide/plan" },
      // { title: "계약서류안내", url: "/BusinessGuide/documents" },
    ];

    const [isScroll, setIsScroll] = useState(false);
    const [isImageVisible, setIsImageVisible] = useState(false); // ✅ 기존 이미지 가시성 상태 유지
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }

            // ✅ 기존 이미지 로딩 로직도 유지 (하지만 Ready가 표시됨)
            if (window.scrollY > 200) {
                setIsImageVisible(true);
            } else {
                setIsImageVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={styles.container}>
            <Helmet>
              <title>대전 유천 벽산블루밍 - 분양일정</title>
              <meta
                name="description"
                content="대전 유천 벽산블루밍의 분양 일정을 한눈에 확인하세요. 모델하우스 오픈, 청약(임차인) 접수, 서류제출, 당첨자 발표, 계약, 입주(예정) 등 주요 일정을 안내합니다."
              />
              <link rel="canonical" href="https://layershop.kr/BusinessGuide/plan" />
              <meta name="robots" content="index,follow" />
            </Helmet>

            <Header isChanged={isScroll} />
            <FixIcon />

            <Bener title="분양일정" />
            <MenuBar contents={menuContents} />

            <h1 className={styles.screenReaderOnly}>대전 유천 벽산블루밍 - 분양일정</h1>
            <p className={styles.screenReaderOnly}>
              대전 유천 벽산블루밍의 분양(임차인 모집) 일정을 안내합니다. 모델하우스 오픈부터 청약(임차인) 접수, 서류 제출, 당첨자 발표, 계약, 입주(예정)까지의 절차를 단계별로 확인하세요.
            </p>

            <div className={styles.textBox}>
                <div>유천의 눈부신 가치 위에</div>
                <div>대전 유천 벽산블루밍의 새로운 시작이 펼쳐집니다.</div>
            </div>


            {/* ✅ 기존 이미지 부분 주석 처리하고 Ready 컴포넌트 표시 */}
            <img className={`${styles.image4} ${isImageVisible ? styles.visible : ''}`} src={page1} alt="대전 유천 벽산블루밍 분양일정안내-image1" />

            <div className={styles.readyContainer}>
           
            </div>

            <Footer />
        </div>
    );
};

export default BusinessGuide2;
