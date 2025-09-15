import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import styles from './BusinessGuide.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import page1 from "../../assets/BusinessGuide/BusinessGuide1/page1.jpg";
import tableImage from "../../assets/BusinessGuide/BusinessGuide1/tableImage.jpg";
import { Helmet } from "react-helmet-async";




const projectData = [
	{ label: '사업명', value: '대전 유천 벽산블루밍' },
	{ label: '사업위치', value: '대전광역시 중구 유천동 337-1 일원' },
	{ label: '건축규모', value: '지하 4층 ~ 지상 40층, 2개 동' },
	{ label: '세대수', value: '총 301세대' },
];

const BusinessGuide1 = () => {
	const menuContents = [
		{ title: "사업안내", url: "/BusinessGuide/intro" },
		{ title: "분양일정", url: "/BusinessGuide/plan" },
		// { title: "공급안내", url: "/BusinessGuide/documents" }
	];
	const [isScroll, setIsScroll] = useState(false);
	const { pathname } = useLocation(); // 현재 경로를 가져옴
	const isMobile = useMediaQuery({ query: '(max-width: 900px)' }); // 모바일 여부 확인

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
				{/* 페이지별 메타: title/description/og/canonical 만 관리 */}
				<title>대전 유천 벽산블루밍 - 사업안내</title>
				<meta
					name="description"
					content="대전 유천 벽산블루밍 사업 개요와 위치 정보를 확인하세요. 대전 중구 유천동 핵심 입지, 단지 규모와 특징, 임대/분양 안내 등 주요 정보를 한눈에!"
				/>
				<meta name="robots" content="index,follow" />
				<link rel="canonical" href="https://layershop.kr/BusinessGuide/intro" />

				{/* Open Graph */}
				<meta property="og:type" content="website" />
				<meta property="og:site_name" content="대전 유천 벽산블루밍" />
				<meta property="og:title" content="대전 유천 벽산블루밍 - 사업안내" />
				<meta
					property="og:description"
					content="대전 유천 벽산블루밍 사업 개요와 위치 정보를 확인하세요. 대전 중구 유천동 핵심 입지, 단지 규모와 특징, 임대/분양 안내 등 주요 정보를 한눈에!"
				/>
				<meta property="og:url" content="https://layershop.kr/BusinessGuide/intro" />
				<meta property="og:image" content="https://layershop.kr/img/og/business.jpg" />
				<meta property="og:image:width" content="1200" />
				<meta property="og:image:height" content="630" />

				{/* Twitter */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="대전 유천 벽산블루밍 - 사업안내" />
				<meta
					name="twitter:description"
					content="대전 유천 벽산블루밍 사업 개요와 위치 정보를 확인하세요. 대전 중구 유천동 핵심 입지, 단지 규모와 특징, 임대/분양 안내 등 주요 정보를 한눈에!"
				/>
				<meta name="twitter:image" content="https://layershop.kr/img/og/business.jpg" />
				<meta name="twitter:url" content="https://layershop.kr/BusinessGuide/intro" />

				{/* JSON-LD (대표 이미지/브레드크럼 포함) */}
				<script type="application/ld+json">
					{JSON.stringify({
						"@context": "https://schema.org",
						"@type": "WebPage",
						"name": "대전 유천 벽산블루밍 - 사업안내",
						"url": "https://layershop.kr/BusinessGuide/intro",
						"description":
							"대전 유천 벽산블루밍 사업 개요와 위치 정보를 확인하세요. 대전 중구 유천동 핵심 입지, 단지 규모와 특징, 임대/분양 안내 등 주요 정보를 한눈에!",
						"primaryImageOfPage": {
							"@type": "ImageObject",
							"contentUrl": "https://layershop.kr/img/og/business.jpg",
							"width": 1200,
							"height": 630
						},
						"breadcrumb": {
							"@type": "BreadcrumbList",
							"itemListElement": [
								{ "@type": "ListItem", "position": 1, "name": "홈", "item": "https://layershop.kr/" },
								{ "@type": "ListItem", "position": 2, "name": "사업안내", "item": "https://layershop.kr/BusinessGuide/intro" }
							]
						}
					})}
				</script>
			</Helmet>

			<Header isChanged={isScroll} />
			<FixIcon />

			<Bener title="사업개요" />

			<MenuBar contents={menuContents} />
			{/* <h1> 태그를 사용하여 페이지 제목 설정 (SEO 최적화) */}
			<h1 className={styles.screenReaderOnly}>대전 유천 벽산블루밍 - 사업안내</h1>
			<p className={styles.screenReaderOnly}>
				대전 유천 벽산블루밍은 대전 중구 유천동에 들어서는 신축 아파트 단지입니다.
				서대전역 생활권과 도시철도 2호선(트램) 유천역 예정, 유등천 수변 및 생활·의료·쇼핑 인프라를 갖춘 입지로
				지하 4층~지상 40층, 2개 동, 총 301세대(전용 47㎡·84㎡ A/B)로 구성됩니다.
			</p>

			<div className={styles.textBox}>
				<div>특별한 라이프 컬렉션</div>
				<div>대전 유천 벽산블루밍, 유천의 새로운 자부심으로 찾아옵니다.</div>
			</div>

			<img className={styles.img3} src={page1} alt="대전 유천 벽산블루밍-image1"/>

			<div className={styles.tableContainer}>
				{!isMobile && <img className={styles.tableImg} src={tableImage} />}
				<table className={styles.projectTable}>
					<tbody>
						{projectData.map((item, index) => (
							<tr key={index}>
								<td className={styles.label}>{item.label}</td>
								<td className={styles.contents}>{item.value}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			 <div className={styles.commonBox}>
				<div className={styles.notice}>
					※ 본 홈페이지에 표기된 내용은 하기의 내용을 근거로 한 내용이며, 추후 계획의 변동 등은 당사와 무관합니다.
				</div>
				
			</div> 


			<Footer />
		</div>
	)
}

export default BusinessGuide1;
