import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./SalesInfo.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";
import page1 from "../../assets/SalesInfo/guide/page1.jpg"

const ComplexGuide1 = () => {
  const menuContents = [
    { title: "청약방법안내", url: "/SalesInfo/SubscriptionGuide" },
    { title: "청약안내문", url: "/SalesInfo/guide" },
    { title: "모집공고안내", url: "/SalesInfo/announcement" },
    { title: "인지세납부안내", url: "/SalesInfo/stampTax" },
  ];

  const [isScroll, setIsScroll] = useState(false);
  const [isImage2Loaded, setIsImage2Loaded] = useState(false); // 이미지 로드 상태
  const { pathname } = useLocation(); // 현재 경로를 가져옴

  useEffect(() => {
    window.scrollTo(0, 0); // 페이지가 로드될 때 스크롤을 최상단으로 이동
  }, [pathname]); // pathname이 변경될 때마다 실행

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // 이미지 로드 후 애니메이션 실행
  const handleImageLoad = () => {
    setIsImage2Loaded(true);
  };

  return (
    <div className={styles.container}>
             <Helmet>
               <title>대전 유천 벽산블루밍 - 청약안내문</title>
               <meta
                 name="description"
                 content="대전 유천 벽산블루밍 청약(임차인 모집) 안내를 한눈에 확인하세요. 온라인 접수 절차, 자격 요건, 제출 서류, 일정 및 유의사항을 안내합니다."
               />
               <link rel="canonical" href="https://layershop.kr/SalesInfo/SubscriptionGuide" />
               <meta name="robots" content="index,follow" />
             </Helmet>

             
      <Header isChanged={isScroll} />
      <FixIcon />

      <Bener title="청약안내" />

      <MenuBar contents={menuContents} />
      {/* <h1> 태그를 사용하여 페이지 제목 설정 (SEO 최적화) */}
      <h1 className={styles.screenReaderOnly}>
        대전 유천 벽산블루밍 - 청약안내문
      </h1>
      <p className={styles.screenReaderOnly}>
        대전 유천 벽산블루밍의 청약(임차인 모집)은 온라인으로 간편하게 신청할 수 있습니다.
        접수 전 자격 요건과 준비 서류, 접수 일정 및 당첨자 발표·계약 절차를 확인하고,
        안내에 따라 순서대로 진행하세요.
      </p>

      <div className={styles.textBox}>
        <div>온라인 청약(임차인) 방법을 확인하세요</div>
        <div>대전 유천 벽산블루밍</div>
      </div>

      {/* 이미지에 애니메이션 효과 추가 */}
      <img
        className={`${styles.image2} ${isImage2Loaded ? styles.showImage2 : ''}`}
        src={page1}
        alt="대전 유천 벽산블루밍 - 청약안내문 이미지"
        onLoad={handleImageLoad}  // 이미지 로드 후 애니메이션 실행
      />


      <div className={styles.commonBox2}>
        <div className={styles.notice}>
          ※ 상기 이미지는 고객의 이해를 돕기 위한 것으로 성공적인 청약을 위해
          도움을 드리고있습니다.
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ComplexGuide1;
