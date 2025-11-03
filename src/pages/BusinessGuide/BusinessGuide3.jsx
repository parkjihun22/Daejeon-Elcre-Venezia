import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from './BusinessGuide.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/BusinessGuide/documents/contract.jpg";

const BusinessGuide2 = () => {
	const menuContents = [
		{ title: "사업안내", url: "/BusinessGuide/intro" },
    	{ title: "분양일정", url: "/BusinessGuide/plan" },
    	// { title: "계약서류안내", url: "/BusinessGuide/documents" },
	];
	const [isScroll, setIsScroll] = useState(false);
	const [selectedOption, setSelectedOption] = useState(1); // 선택된 옵션 (1~6)
	const [isImageVisible, setIsImageVisible] = useState(false); // isImageVisible 상태 추가
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

	// 이미지 표시 여부를 변경하는 로직 추가 (예시)
	useEffect(() => {
		const handleImageVisibility = () => {
			if (window.scrollY > 200) { // 예시: 스크롤이 200px 이상 내려갔을 때
				setIsImageVisible(true);
			} else {
				setIsImageVisible(false);
			}
		};

		window.addEventListener('scroll', handleImageVisibility);

		return () => {
			window.removeEventListener('scroll', handleImageVisibility);
		};
	}, []);

	return (
		<div className={styles.container}>
			<div className={styles.container}>
			<Helmet>
				{/* 필수 메타 */}
				<title>대전 유천 벽산블루밍 - 당첨자 서류 안내</title>
				<meta
				name="description"
				content="대전 유천 벽산블루밍 청약(임차인 모집) 당첨자를 위한 계약 서류 안내 페이지입니다. 필수 제출 서류와 준비 절차를 확인하고, 빠르고 정확하게 계약을 진행하세요."
				/>
				<meta name="robots" content="index,follow" />
				<link
				rel="canonical"
				href="https://www.delidilly.co.kr/BusinessGuide/documents"
				/>

				{/* Open Graph */}
				<meta property="og:type" content="website" />
				<meta property="og:site_name" content="대전 유천 벽산블루밍" />
				<meta property="og:title" content="대전 유천 벽산블루밍 - 당첨자 서류 안내" />
				<meta
				property="og:description"
				content="대전 유천 벽산블루밍 청약(임차인 모집) 당첨자를 위한 계약 서류 안내 페이지입니다. 필수 제출 서류와 준비 절차를 확인하고, 빠르고 정확하게 계약을 진행하세요."
				/>
				<meta
				property="og:url"
				content="https://www.delidilly.co.kr/BusinessGuide/documents"
				/>
				<meta
				property="og:image"
				content="https://www.delidilly.co.kr/Main1.png"
				/>
			</Helmet>
			</div>



			<Header isChanged={isScroll} />
			<FixIcon />
			<Bener title="당첨자서류안내" />
			<MenuBar contents={menuContents} />
			{/* <h1> 태그를 사용하여 페이지 제목 설정 (SEO 최적화) */}
            <h1 className={styles.screenReaderOnly}>대전 유천 벽산블루밍  - 계약서류안내</h1>
			<p className={styles.screenReaderOnly}>
				계약서류안내 페이지에서는 청약(임차인 모집) 당첨 후 필요한 서류들을 안내합니다.
				계약 체결을 위해 준비해야 할 서류 목록과 제출 기한·방법을 확인하여, 혼동 없이 신속하게 절차를 진행하세요.
			</p>

			<div className={styles.textBox}>
				<div>유천의 눈부신 가치 위에</div>
				<div>대전 유천 벽산블루밍의 새로운 자부심으로 찾아옵니다.</div>
			</div>


			{/* 이미지에 isImageVisible 상태 적용 */}
			<img className={`${styles.image4} ${isImageVisible ? styles.visible : ''}`} src={page1} alt="대전 유천 벽산블루밍 계약서류안내-image1" />

			<Footer /> 
		</div>
	);
};

export default BusinessGuide2;
