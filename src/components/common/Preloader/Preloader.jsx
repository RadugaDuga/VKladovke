import React from "react";
import s from "./Preloader.module.css"

let Preloader = (props) => {
	return (
		<div className={s.preload}>
			<svg
				width="685"
				height="118"
				viewBox="0 0 685 118"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					className={s.vk}
					d="M0 56.5417C0 29.8933 0 16.5692 8.27914 8.26C16.6076 0 29.9626 0 56.6727 0H61.6007C88.3108 0 101.666 0 109.994 8.26C118.273 16.5692 118.273 29.8933 118.273 56.5417V61.4583C118.273 88.1067 118.273 101.431 109.994 109.74C101.666 118 88.3108 118 61.6007 118H56.6727C29.9626 118 16.6076 118 8.27914 109.74C0 101.431 0 88.1067 0 61.4583V56.5417Z"
					fill="url(#paint0_linear)"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M32.0341 36.8751H23.41C20.9459 36.8751 20.4531 38.0551 20.4531 39.3334C20.4531 41.5951 23.41 52.9033 34.0546 67.85C41.2002 78.0275 51.2535 83.5833 60.3704 83.5833C65.8406 83.5833 66.5305 82.3542 66.5305 80.24V72.5208C66.5305 70.0625 67.0233 69.5708 68.7974 69.5708C70.0787 69.5708 72.2471 70.21 77.3722 75.1267C83.2366 80.9775 84.173 83.5833 87.4748 83.5833H96.0989C98.5629 83.5833 99.7949 82.3542 99.0557 79.945C98.3165 77.4867 95.5075 74.045 91.8114 69.8658C89.8402 67.4567 86.7848 64.9492 85.8978 63.6708C84.6165 61.9992 84.9122 61.2617 85.8978 59.8358C85.8978 59.8358 96.3945 45.0859 97.4787 40.0217C98.0208 38.2026 97.4787 36.8751 94.8668 36.8751H86.2427C85.436 36.827 84.6357 37.0404 83.9606 37.4834C83.2854 37.9264 82.7724 38.5754 82.4974 39.3334C82.4974 39.3334 78.0622 49.9533 71.9021 56.8858C69.8816 58.9017 68.9453 59.5408 67.8611 59.5408C67.3683 59.5408 66.5305 58.9017 66.5305 57.0825V40.0217C66.5305 37.8584 65.8899 36.8751 64.0665 36.8751H50.5143C49.1344 36.8751 48.2966 37.8584 48.2966 38.8417C48.2966 40.9067 51.4507 41.3984 51.7463 47.2001V59.885C51.7463 62.6875 51.2535 63.1792 50.1694 63.1792C47.2125 63.1792 40.1161 52.4608 35.8779 40.2184C35.0895 37.8584 34.2517 36.8751 32.0341 36.8751Z"
					fill="white"
				/>
				<path
					d="M512.518 61.4584C512.518 76.3932 500.385 88.5 485.414 88.5C470.444 88.5 458.31 76.3932 458.31 61.4584C458.31 46.5236 470.444 34.4167 485.414 34.4167C500.385 34.4167 512.518 46.5236 512.518 61.4584ZM469.151 61.4584C469.151 70.419 476.433 77.6834 485.414 77.6834C494.398 77.6834 501.677 70.419 501.677 61.4584C501.677 52.4977 494.398 45.2334 485.414 45.2334C476.433 45.2334 469.151 52.4977 469.151 61.4584Z"
					fill="black"
				/>
				<path
					d="M162.626 87.6853V35.3834H184.256C191.548 35.3834 197.099 36.6402 200.91 39.1538C204.72 41.6351 206.625 45.2121 206.625 49.885C206.625 52.3015 205.853 54.4772 204.309 56.4104C202.798 58.3117 200.548 59.7778 197.559 60.8093C201.041 61.5183 203.8 62.952 205.837 65.1114C207.873 67.2703 208.892 69.8162 208.892 72.7485C208.892 77.6145 207.052 81.3207 203.373 83.8665C199.727 86.4124 194.472 87.6853 187.606 87.6853H162.626ZM174.599 65.4015V78.4041H187.705C193.847 78.4041 196.918 76.2452 196.918 71.9269C196.918 67.5766 193.798 65.4015 187.557 65.4015H174.599ZM174.599 56.9906H184.453C191.253 56.9906 194.652 55.0249 194.652 51.0935C194.652 46.9684 191.433 44.8416 184.995 44.7127H174.599V56.9906Z"
					fill="black"
				/>
				<path
					d="M238.208 66.9965H233.368V87.6853H220.174V35.3834H233.368V56.2653H237.419L252.151 35.3834H266.933L247.667 60.4224L268.559 87.6853H252.989L238.208 66.9965Z"
					fill="black"
				/>
				<path
					d="M327.368 35.3834V87.6853H315.396V44.8577H298.734L297.749 63.0813C297.125 71.8463 295.401 78.1465 292.575 81.9815C289.784 85.784 285.497 87.6853 279.716 87.6853H276.02L275.971 77.9208L278.435 77.6794C281.062 77.3249 282.968 75.7619 284.15 72.9904C285.366 70.1869 286.137 65.0952 286.466 57.7158L287.451 35.3834H327.368Z"
					fill="black"
				/>
				<path
					d="M373.791 87.6853C373.266 86.6863 372.806 85.0588 372.412 82.8031C368.601 86.7025 362.064 88.6519 356.545 88.6519C351.191 88.6519 346.823 87.1533 343.44 84.1566C340.056 81.1594 338.365 77.4537 338.365 73.0386C338.365 67.4636 340.467 63.1939 344.671 60.2292C348.908 57.232 356.826 55.7339 364.676 55.7339H372.017V52.3016C372.017 49.5949 371.246 47.4357 369.702 45.8244C368.158 44.1809 363.936 43.3592 360.783 43.3592C358.056 43.3592 355.823 44.0359 354.082 45.3894C352.341 46.7107 351.47 48.4025 351.47 50.4647H339.498C339.498 47.5968 340.467 44.9221 342.405 42.4408C344.342 39.9272 346.971 37.9615 350.288 36.5435C353.638 35.1256 357.367 34.4167 361.472 34.4167C367.714 34.4167 374.563 35.9635 378.275 39.0571C381.986 42.1185 383.892 46.4368 383.99 52.012V75.6006C383.99 80.3054 384.664 84.0598 386.011 86.8633V87.6853H373.791ZM358.762 79.2262C361.127 79.2262 365.218 78.6623 367.288 77.5344C369.39 76.4065 370.966 74.8917 372.017 72.9904V63.1295H365.563C361.128 63.1295 355.921 63.8867 353.688 65.4015C351.454 66.9158 350.337 69.059 350.337 71.8301C350.337 74.0863 351.093 75.8907 352.604 77.2443C354.148 78.5654 356.2 79.2262 358.762 79.2262Z"
					fill="black"
				/>
				<path
					d="M399.422 72.4171C401.394 72.4171 403.741 69.6298 404.858 66.375C406.008 63.0882 407.096 60.4868 407.326 55.3956L408.015 35.3834H445.018L445.849 73.75H453.24L453.443 91.1796H441.519V84.1566H407.326V91.1796H395.205V72.9904L399.422 72.4171ZM412.966 74.5327H434.427V44.7127H418.421C418.421 51.8143 417.662 58.9007 415.642 65.7103C414.537 69.4346 413.459 72.866 412.966 74.5327Z"
					fill="black"
				/>
				<path
					d="M524.281 87.6853V35.3834H545.911C553.204 35.3834 558.753 36.6402 562.567 39.1538C566.377 41.6351 568.279 45.2121 568.279 49.885C568.279 52.3015 567.51 54.4772 565.963 56.4104C564.455 58.3117 562.203 59.7778 559.216 60.8093C562.695 61.5183 565.455 62.952 567.49 65.1114C569.531 67.2703 570.546 69.8162 570.546 72.7485C570.546 77.6145 568.708 81.3207 565.026 83.8665C561.385 86.4124 556.126 87.6853 549.262 87.6853H524.281ZM536.256 65.4015V78.4041H549.36C555.505 78.4041 558.576 76.2452 558.576 71.9269C558.576 67.5766 555.456 65.4015 549.212 65.4015H536.256ZM536.256 56.9906H546.108C552.908 56.9906 556.309 55.0249 556.309 51.0935C556.309 46.9684 553.091 44.8416 546.65 44.7127H536.256V56.9906Z"
					fill="black"
				/>
				<path
					d="M599.862 66.9965H593.801V87.6853H581.831V35.3834H593.801V56.2653H599.074L613.809 35.3834H628.588L609.324 60.4224L630.214 87.6853H614.642L599.862 66.9965Z"
					fill="black"
				/>
				<path
					d="M661.153 88.6519C653.564 88.6519 645.734 86.3155 641.003 81.6427C636.306 76.938 633.96 70.6864 633.96 62.8876V61.4377C633.96 56.2172 634.976 51.5606 637.016 47.4679C639.086 43.3431 641.973 40.1367 645.684 37.8487C649.395 35.5607 653.535 34.4167 658.103 34.4167C665.362 34.4167 672.631 36.6886 676.573 41.2324C680.55 45.7761 682.536 50.8654 682.536 59.1795V63.9167H646.029C646.029 70.7253 647.853 72.9904 650.415 75.5038C653.012 78.0177 657.935 79.2744 661.843 79.2744C667.328 79.2744 671.793 77.0992 675.243 72.7485L681.699 78.7911C679.565 81.9166 676.706 84.3499 673.124 86.0899C669.58 87.7979 665.589 88.6519 661.153 88.6519ZM658.054 43.8426C654.767 43.8426 652.106 44.9705 650.07 47.2263C648.065 49.4818 646.788 51.2843 646.226 55.3125H670.709V55.7821C670.448 51.8507 669.383 48.8858 667.511 46.8879C665.638 44.8577 661.37 43.8426 658.054 43.8426Z"
					fill="black"
				/>
				<defs>
					<linearGradient
						id="paint0_linear"
						x1="2.63821e-06"
						y1="-9"
						x2="118"
						y2="118"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#2787F5" />
						<stop offset="1" stopColor="#00C2FF" />
					</linearGradient>
				</defs>
			</svg>
		</div>
	)
}

export default Preloader;
