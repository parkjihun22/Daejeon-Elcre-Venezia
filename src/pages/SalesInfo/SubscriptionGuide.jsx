import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./SalesInfo.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";
import page1 from "../../assets/SalesInfo/SubscriptionGuide/page1.jpg";


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
               <title>대전 유천 벽산블루밍 - 청약방법안내</title>
               <meta
                 name="description"
                 content="대전 유천 벽산블루밍 청약(임차인 모집) 방법을 한눈에 확인하세요. 신청 자격, 준비 서류, 온라인 접수 절차, 일정 및 유의사항을 안내합니다."
               />
               <link rel="canonical" href="https://layershop.kr/SalesInfo/SubscriptionGuide" />
               <meta name="robots" content="index,follow" />
             </Helmet>

      <Header isChanged={isScroll} />
      <FixIcon />

      <Bener title="체크포인트" />

      <MenuBar contents={menuContents} />
      {/* <h1> 태그를 사용하여 페이지 제목 설정 (SEO 최적화) */}
      <h1 className={styles.screenReaderOnly}>
        대전 유천 벽산블루밍 - 체크포인트
      </h1>
      <p className={styles.screenReaderOnly}>
        대전 유천 벽산블루밍 청약(임차인 모집) 전 반드시 확인해야 할 체크포인트입니다.
        신청 자격과 증빙 서류, 온라인 접수 방법, 접수·발표·계약 일정, 인지세 등 유의사항을
        단계별로 점검해 실수 없이 진행하세요.
      </p>

      <div className={styles.textBox}>
        <div>유천의 새로운 시작을 위한 체크리스트</div>
        <div>대전 유천 벽산블루밍 청약(임차인) 절차를 간편하게</div>
      </div>

      {/* 이미지에 애니메이션 효과 추가 */}
      <img
        className={`${styles.image2} ${isImage2Loaded ? styles.showImage2 : ''}`}
        src={page1}
        alt="대전 유천 벽산블루밍 청약방법안내 이미지"
        onLoad={handleImageLoad}  // 이미지 로드 후 애니메이션 실행
      />




      <div className={styles.commonBox2}>
        <div className={styles.notice}>
          ※ 상기 내용은 편집과정상 오류가 있을 수 있으니 반드시 입주자모집공고를
          확인하시기 바랍니다.
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ComplexGuide1;
