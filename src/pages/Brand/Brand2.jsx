import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import YouTube from 'react-youtube';

import styles from './Brand.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

const Brand2 = () => {
	const menuContents = [
		{ title: "브랜드 소개", url: "/brand/intro" }, 
		{ title: "홍보 영상", url: "/brand/video" }];


	const [isScroll, setIsScroll] = useState(false);
	const [isTextVisible, setIsTextVisible] = useState(true); // isTextVisible 상태 추가
	const isMobile = useMediaQuery({ query: '(max-width: 900px)' });
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

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div className={styles.container}>
			<Helmet>
			<title>대전 유천 벽산블루밍 - 홍보영상</title>
			<meta
				name="description"
				content="대전 유천 벽산블루밍 홍보영상에서 단지 설계와 커뮤니티, 서대전역 생활권과 도시철도 2호선(트램) 예정, 유등천 수변 등 풍부한 인프라를 생생히 확인하세요."
			/>
			<link rel="canonical" href="https://www.delidilly.co.kr/Brand/video" />
			<meta name="robots" content="index,follow" />

			{/* OG 태그 */}
			<meta property="og:type" content="website" />
			<meta property="og:site_name" content="대전 유천 벽산블루밍" />
			<meta property="og:title" content="대전 유천 벽산블루밍 - 홍보영상" />
			<meta property="og:description" content="대전 유천 벽산블루밍 홍보영상으로 초고층 신축의 품격, 서대전역·트램(2호선) 예정, 유등천과 생활·의료·쇼핑 인프라까지 한눈에 만나보세요." />
			<meta property="og:url" content="https://www.delidilly.co.kr/Brand/video" />
			<meta property="og:image" content="https://www.delidilly.co.kr/images/og/main.jpg" />

			{/* Twitter */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content="대전 유천 벽산블루밍 - 홍보영상" />
			<meta name="twitter:description" content="대전 유천 벽산블루밍 홍보영상에서 단지의 매력적인 디자인과 커뮤니티, 서대전역·트램(2호선) 예정 등 입지 프리미엄을 확인하세요." />
			<meta name="twitter:image" content="https://www.delidilly.co.kr/images/og/main.jpg" />
			</Helmet>
			
			
			<Header isChanged={isScroll} />
			<FixIcon />

			<Bener title="홍보영상" />

			<MenuBar contents={menuContents} />

						{/* <h1> 태그를 사용하여 페이지 제목 설정 (SEO 최적화) */}
						<h1 className={styles.screenReaderOnly}>대전 유천 벽산블루밍 - 홍보영상</h1>
						<p className={styles.screenReaderOnly}>대전 유천 벽산블루밍의 홍보영상을 통해 단지의 설계와 커뮤니티, 서대전역 생활권과 도시철도 2호선(트램) 예정, 유등천 수변 등 풍부한 인프라를 생생하게 확인하세요.
						</p>	

			<div className={`${styles.textBox} ${isTextVisible ? styles.active : ''}`}>
                <div>대전 유천 벽산블루밍이 눈부신 가치 위에</div>
                <div>새로운 자부심으로 찾아옵니다.</div>
            </div>


			<div className={styles.videoContainer}>
				<YouTube
					videoId=""
					opts={{
						width: isMobile ? "400" : "1300",
						height: isMobile ? "300" : "500",
						playerVars: {
							autoplay: 1,
							rel: 0,
							modestbranding: 1,
						},
					}}
					onEnd={(e) => {
						e.target.stopVideo(0);  // 비디오 종료 시 정지
					}}
				/>
			</div>

			<Footer />
		</div>
	)
}

export default Brand2;
