import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./LocationEnvironment.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import Ready from "../../components/Ready/Ready";
import HelmetCOM from "../../components/HelmetCOM/HelmetCOM";
import { Helmet } from "react-helmet-async";
import page1 from "../../assets/LocationEnvironment/LocationEnvironment2/page1.jpg";

const LocationEnvironment1 = () => {
  const menuContents = [
    // { title: "입지 안내영상", url: "/FloorPlan/videos" },
    { title: "입지안내", url: "/LocationEnvironment/intro" },
    { title: "프리미엄", url: "/LocationEnvironment/primium" },
  ];
  const [isScroll, setIsScroll] = useState(false);
  const { pathname } = useLocation(); // 현재 경로를 가져옴

  useEffect(() => {
    window.scrollTo(0, 0); // 페이지가 로드될 때 스크롤을 최상단으로 이동
  }, [pathname]); // pathname이 변경될 때마다 실행

  // 화면 스크롤이 탑이 아니면 isScroll 값 true로 변환
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

  return (
    <div className={styles.container}>
            <Helmet>
              <title>대전 유천 벽산블루밍 - 프리미엄</title>
              <meta
                name="description"
                content="대전 유천 벽산블루밍의 프리미엄을 한눈에 확인하세요. 서대전역 생활권, 도시철도 2호선(트램) 유천역 예정, 유등천 수변·생활·의료·쇼핑 인프라, 전용 47㎡·84㎡(A/B) 평면과 커뮤니티 등 핵심 포인트를 안내합니다."
              />
              <link rel="canonical" href="https://www.delidilly.co.kr/LocationEnvironment/primium" />
              <meta name="robots" content="index,follow" />
            </Helmet>

      <Header isChanged={isScroll} />
      <FixIcon />

      <Bener title="프리미엄" />

      <MenuBar contents={menuContents} />
      {/* <h1> 태그를 사용하여 페이지 제목 설정 (SEO 최적화) */}
      <h1 className={styles.screenReaderOnly}>
        대전 유천 벽산블루밍 - 프리미엄
      </h1>
      <p className={styles.screenReaderOnly}>
        대전 유천 벽산블루밍만의 차별화된 프리미엄을 만나보세요.
        교통(서대전역 생활권·트램 2호선 유천역 예정), 유등천 수변과 풍부한 생활·의료·쇼핑 인프라,
        신축 초고층 설계와 커뮤니티, 전용 47㎡·84㎡(A/B) 실속형 평면 등 실거주 중심의 강점을 제공합니다.
      </p>

      <div className={styles.textBox}>
        <div>유천의 눈부신 가치 위에</div>
        <div>대전 유천 벽산블루밍의 새로운 자부심으로 찾아옵니다.</div>
      </div>

      <img
        src={page1}
        className={styles.image3}
        alt="대전 유천 벽산블루밍-image1"
      />

      <Footer />
    </div>
  );
};

export default LocationEnvironment1;
