import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from './Brand.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/Brand/intro/page1.jpg";

const Brand1 = () => {
    const menuContents = [{ title: "브랜드 소개", url: "/brand/intro" }, { title: "홍보 영상", url: "/brand/video" }];
    const [isScroll, setIsScroll] = useState(false);
    const [isTextVisible, setIsTextVisible] = useState(false); // 텍스트 애니메이션 상태
    const [isImageVisible, setIsImageVisible] = useState(false); // 이미지 애니메이션 상태
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScroll(window.scrollY > 0);
            // 스크롤 시 이미지와 텍스트 애니메이션을 트리거
            if (window.scrollY > 200) {
                setIsImageVisible(true); // 이미지가 보이도록
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsTextVisible(true); // 메뉴 클릭 시 텍스트가 보이도록
        }, 500); // 딜레이를 두고 텍스트 애니메이션 시작

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.container}>
                <Helmet>
                <title>대전 유천 벽산블루밍 - 브랜드 소개</title>
                <meta
                    name="description"
                    content="대전 유천 벽산블루밍의 브랜드 철학과 가치, 설계 품질을 소개합니다. 대전 중구 유천동의 생활 인프라와 교통(서대전역·도시철도 2호선 트램 예정)까지, 프리미엄 라이프스타일을 확인하세요."
                />
                <link rel="canonical" href="https://www.delidilly.co.kr/Brand/intro" />
                <meta name="robots" content="index,follow" />

                {/* 선택: OG 태그 (공통 이미지 사용) */}
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="대전 유천 벽산블루밍" />
                <meta property="og:title" content="대전 유천 벽산블루밍 - 브랜드 소개" />
                <meta
                    property="og:description"
                    content="대전 유천 벽산블루밍의 브랜드 철학과 가치, 설계 품질을 소개합니다. 서대전역 생활권과 트램(2호선) 예정, 유등천 수변과 다양한 생활·의료 인프라를 가까이 누리는 프리미엄을 경험하세요."
                />
                <meta property="og:url" content="https://www.delidilly.co.kr/Brand/intro" />
                <meta property="og:image" content="https://www.delidilly.co.kr/images/og/main.jpg" />
                </Helmet>

            <Header isChanged={isScroll} />
            <FixIcon />

            {/* 브랜드 배너 타이틀 교체 (구조 유지) */}
            <Bener title="대전 유천 벽산블루밍" />

            <MenuBar contents={menuContents} />
            {/* <h1> 태그를 사용하여 페이지 제목 설정 (SEO 최적화) */}
            <h1 className={styles.screenReaderOnly}>대전 유천 벽산블루밍 - 브랜드소개</h1>
			<p className={styles.screenReaderOnly}>
                대전 유천 벽산블루밍은 신뢰와 품질을 바탕으로 한 주거 브랜드입니다.
                합리적인 평면과 세심한 마감, 편의성을 높인 커뮤니티 설계를 통해
                입주자에게 쾌적한 주거 환경을 제공합니다. 서대전역 생활권과
                도시철도 2호선(트램) 유천역 예정, 유등천 수변·대형 쇼핑·의료 인프라 등
                일상에 가까운 편리함을 제시합니다.
            </p>

            <div className={`${styles.textBox} ${isTextVisible ? styles.active : ''}`}>
                <div>생활의 모든 것을 한걸음에</div>
                <div>대전 유천 벽산블루밍, 유천의 중심에 서다</div>
            </div>


            <img className={`${styles.image} ${isImageVisible ? styles.visible : ''}`} src={page1} alt="대전 유천 벽산블루밍 brand-Image1" />

            <Footer />
        </div>
    );
}

export default Brand1;
