import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./ComplexGuide.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";


import page1 from "../../assets/ComplexGuide/ComplexGuide3/page1.jpg";



const ComplexGuide3 = () => {
  const menuContents = [
    { title: "단지 배치도", url: "/ComplexGuide/intro" },
    { title: "호수 배치도", url: "/ComplexGuide/detailintro" },
    { title: "커뮤니티", url: "/ComplexGuide/community" },
  ];
  const [isScroll, setIsScroll] = useState(false);
  const [isImage2Loaded, setIsImage2Loaded] = useState(false); // 이미지 로딩 상태 추가
  const { pathname } = useLocation(); // 현재 경로를 가져옴

  // 이미지가 로드되면 호출되는 함수
  const handleImageLoad = () => {
    setIsImage2Loaded(true); // 이미지가 로드되면 상태 업데이트
  };

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

  return (
    <div className={styles.container}>
      <Helmet>
        <title>대전 유천 벽산블루밍 - 커뮤니티</title>
        <meta
          name="description"
          content="대전 유천 벽산블루밍의 커뮤니티 시설을 소개합니다. 피트니스센터, GX룸, 골프연습장, 독서실·작은도서관, 어린이놀이시설, 라운지 등 다양한 편의시설로 생활의 품격을 높여드립니다."
        />
        <link rel="canonical" href="https://layershop.kr/ComplexGuide/community" />
        <meta name="robots" content="index,follow" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="대전 유천 벽산블루밍" />
        <meta property="og:title" content="대전 유천 벽산블루밍 - 커뮤니티" />
        <meta
          property="og:description"
          content="대전 유천 벽산블루밍 커뮤니티: 피트니스·GX, 골프연습장, 독서실·작은도서관, 어린이놀이시설, 라운지 등 다양한 편의시설 안내."
        />
        <meta property="og:url" content="https://layershop.kr/ComplexGuide/community" />
        <meta property="og:image" content="https://layershop.kr/img/og/complex.jpg" />
      </Helmet>


      <Header isChanged={isScroll} />
      <FixIcon />
      <Bener title="단지안내" />
      <MenuBar contents={menuContents} />
      {/* <h1> 태그를 사용하여 페이지 제목 설정 (SEO 최적화) */}
      <h1 className={styles.screenReaderOnly}>
        대전 유천 벽산블루밍 - 커뮤니티
      </h1>
      <p className={styles.screenReaderOnly}>
        대전 유천 벽산블루밍의 커뮤니티 페이지에서는 단지 내 다양한 생활 편의시설을 소개합니다.
        피트니스센터와 GX룸, 실내 골프연습장, 독서실·작은도서관, 어린이놀이시설, 입주민 라운지 등
        일상의 편의를 높여 주는 시설들을 통해 더 나은 공동체 생활과 주거 만족도를 제공합니다.
      </p>

      <div className={styles.textBox}>
        <div>대전 유천 벽산블루밍이 눈부신 가치 위에</div>
        <div>새로운 자부심으로 찾아옵니다.</div>
      </div>


      {/* 이미지에 애니메이션 효과 추가 */}
      <img
				className={`${styles.image2} ${isImage2Loaded ? styles.showImage2 : ''}`}
				src={page1}
				alt="대전 유천 벽산블루밍 커뮤니티 안내 -image1"
				onLoad={handleImageLoad}  // 이미지 로드 후 애니메이션 실행
			/>



      <Footer />
    </div>
  );
};

export default ComplexGuide3;
