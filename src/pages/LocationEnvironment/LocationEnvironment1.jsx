import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./LocationEnvironment.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import LocationSectionBox from "../../components/LocationSectionBox/LocationSectionBox";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import section2Image1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import section2Image2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import section2Image3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import section2Image4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import section2Image5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import section2Image6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";
import HelmetCOM from "../../components/HelmetCOM/HelmetCOM";

const LocationSection = [
  {
    img: section2Image1,
    titleText: "도심 재생·교통개발 호재<br />미래가치 중심 입지",
    contentText:
      "유천2-1구역 재개발 및 인근 정비사업 추진<br />도시철도 2호선(트램) 유천역 예정·충청권 광역철도 수혜",
  },
  {
    img: section2Image2,
    titleText: "교육 인프라 프리미엄<br />초·중·고 밀집 학세권",
    contentText:
      "버드내초·신평초 등 도보권 초등학교<br />둔산 학원가 접근으로 우수한 사교육 인프라",
  },
  {
    img: section2Image3,
    titleText: "서대전역+트램(2호선) 역세권<br />광역 교통 네트워크",
    contentText:
      "KTX 서대전역 생활권, 트램 유천역(예정)<br />대전~세종 BRT·주요 간선도로로 편리한 이동",
  },
  {
    img: section2Image4,
    titleText: "생활·쇼핑·의료 원스톱<br />도심 인프라 집약 입지",
    contentText:
      "코스트코·홈플러스·세이백화점·유천시장 인접<br />충남대병원·성모병원 등 대형 의료 접근 용이",
  },
  {
    img: section2Image5,
    titleText: "신축 초고층 타워 스케일<br />실속형 평면 구성",
    contentText:
      "지하 4층~지상 40층, 2개 동·301세대<br />전용 47㎡·84㎡(A/B) 실수요 맞춤형 타입",
  },
  {
    img: section2Image6,
    titleText: "유등천 수변·공원 프리미엄<br />쾌적한 힐링 라이프",
    contentText:
      "유등천 산책로·체육공원 가까이<br />녹지·조경 특화로 여유로운 일상",
  },
];


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
          {/* 페이지별 메타: title/description/og/canonical 만 관리 */}
          <title>대전 유천 벽산블루밍 - 입지환경</title>
          <meta
            name="description"
            content="대전 유천 벽산블루밍의 입지환경을 확인하세요. KTX 서대전역 생활권, 도시철도 2호선(트램) 유천역 예정, 유등천 수변과 풍부한 생활·의료·쇼핑 인프라를 갖춘 대전 중구 유천동 핵심 입지 정보를 제공합니다."
          />
          <meta name="robots" content="index,follow" />
          <link rel="canonical" href="https://www.delidilly.co.kr/LocationEnvironment/intro" />

          {/* Open Graph */}
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="대전 유천 벽산블루밍" />
          <meta property="og:title" content="대전 유천 벽산블루밍 - 입지환경" />
          <meta
            property="og:description"
            content="KTX 서대전역 생활권, 트램(2호선) 유천역 예정, 유등천 수변과 생활·의료·쇼핑 인프라까지—대전 유천 벽산블루밍의 핵심 입지를 한눈에 확인하세요."
          />
          <meta property="og:url" content="https://www.delidilly.co.kr/LocationEnvironment/intro" />
          <meta property="og:image" content="https://www.delidilly.co.kr/img/og/location.jpg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="대전 유천 벽산블루밍 - 입지환경" />
          <meta
            name="twitter:description"
            content="KTX 서대전역 생활권, 트램(2호선) 유천역 예정, 유등천 수변과 생활·의료·쇼핑 인프라까지—대전 유천 벽산블루밍의 핵심 입지를 한눈에 확인하세요."
          />
          <meta name="twitter:image" content="https://www.delidilly.co.kr/img/og/location.jpg" />
          <meta name="twitter:url" content="https://www.delidilly.co.kr/LocationEnvironment/intro" />

          {/* JSON-LD (대표 이미지/브레드크럼 포함) */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "대전 유천 벽산블루밍 - 입지환경",
              "url": "https://www.delidilly.co.kr/LocationEnvironment/intro",
              "description":
                "대전 유천 벽산블루밍의 입지환경을 확인하세요. KTX 서대전역 생활권, 도시철도 2호선(트램) 유천역 예정, 유등천 수변과 풍부한 생활·의료·쇼핑 인프라를 갖춘 대전 중구 유천동 핵심 입지 정보를 제공합니다.",
              "primaryImageOfPage": {
                "@type": "ImageObject",
                "contentUrl": "https://www.delidilly.co.kr/img/og/location.jpg",
                "width": 1200,
                "height": 630
              },
              "breadcrumb": {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "홈", "item": "https://www.delidilly.co.kr/" },
                  { "@type": "ListItem", "position": 2, "name": "입지환경", "item": "https://www.delidilly.co.kr/LocationEnvironment/intro" }
                ]
              }
            })}
          </script>
        </Helmet>


      <Header isChanged={isScroll} />
      <FixIcon />

      <Bener title="입지환경" />

      <MenuBar contents={menuContents} />
      {/* <h1> 태그를 사용하여 페이지 제목 설정 (SEO 최적화) */}
      <h1 className={styles.screenReaderOnly}>
        대전 유천 벽산블루밍 - 입지안내
      </h1>
      <p className={styles.screenReaderOnly}>
        대전 유천 벽산블루밍의 입지 정보를 확인하세요. KTX 서대전역 생활권과
        도시철도 2호선(트램) 유천역 예정, 유등천 수변과 코스트코·홈플러스·백화점 등
        풍부한 생활·의료·쇼핑 인프라를 갖춘 편리한 도심 입지입니다.
      </p>

      <div className={styles.textBox}>
        <div>유천의 중심에서 누리는 연결성</div>
        <div>서대전역·트램(2호선) 예정, 유등천 수변 프리미엄</div>
        <div>생활·의료·쇼핑 인프라를 한 걸음에</div>
      </div>


      <img
        src={page1}
        className={styles.image2}
        alt="대전 유천 벽산블루밍입지환경-image1"
      />

      <div className={styles.section2}>
        {LocationSection.map((value, idx) => (
          <LocationSectionBox
            image={value.img}
            title={value.titleText}
            text={value.contentText}
          />
        ))}
      </div>

      <div className={styles.commonBox}>
        <div className={styles.notice}>
          ※본 홍보물의 내용과 지역도는 소비자의 이해를 돕기 위한 것으로, 개발 예정•계획 및 교통, 학교 계획 등에 관한 사항은 해당 기관의 아래 자료를 토대로 제작되었습니다. 사업계획 및 일정은 개발계획별 사업주체에 의해 변경될 수 있으며, 대전 유천 벽산블루밍 사업주체 및 시공사와 무관합니다.
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LocationEnvironment1;
