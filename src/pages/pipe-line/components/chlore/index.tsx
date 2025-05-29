import { twMerge } from "tailwind-merge";

function ChloreSVG({
  topIndicator = false,
  leftIndicator = false,
  bottomIndicator = false,
  className = "",
}) {
  return (
    <svg
      width="111"
      height="115"
      viewBox="0 0 111 115"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={twMerge("h-[18rem] w-[14rem]", className)}
    >
      <g filter="url(#filter0_d_2010_1196)">
        <rect
          x="37"
          y="21"
          width="58"
          height="69"
          rx="2"
          fill="#0A4B51"
          shape-rendering="crispEdges"
        />
        <rect
          x="37.5"
          y="21.5"
          width="57"
          height="68"
          rx="1.5"
          stroke="url(#paint0_radial_2010_1196)"
          shape-rendering="crispEdges"
        />
        <g filter="url(#filter1_d_2010_1196)">
          <rect
            x="57.375"
            y="1.83301"
            width="16"
            height="12"
            rx="2"
            fill={topIndicator ? "#26E2B3" : "#E64C3C"}
          />
        </g>
        <g filter="url(#filter2_d_2010_1196)">
          <path
            d="M48.3744 58.833C48.3744 55.2267 52.0794 52.8091 55.3803 54.2615L65.3744 58.833L76.1598 54.2615C79.4606 52.8091 83.1657 55.2267 83.1657 58.833C83.1657 62.4393 79.4606 64.8569 76.1598 63.4045L65.3744 58.833L55.3803 63.4045C52.0794 64.8569 48.3744 62.4393 48.3744 58.833Z"
            fill={topIndicator ? "#26E2B3" : "#E64C3C"}
          />
        </g>
        <g filter="url(#filter3_d_2010_1196)">
          <path
            d="M65.3743 56.1663C63.9015 56.1663 62.7076 57.3602 62.7076 58.833C62.7076 60.3058 63.9015 61.4997 65.3743 61.4997C66.847 61.4997 68.0409 60.3058 68.0409 58.833C68.0409 57.3602 66.847 56.1663 65.3743 56.1663ZM65.3743 58.833L65.8743 58.833L65.8743 21.833L65.3743 21.833L64.8743 21.833L64.8743 58.833L65.3743 58.833Z"
            fill={topIndicator ? "#26E2B3" : "#E64C3C"}
          />
        </g>
        <g filter="url(#filter4_d_2010_1196)">
          <path
            d="M65.375 21.833L65.375 13.833"
            stroke={topIndicator ? "#26E2B3" : "#E64C3C"}
          />
        </g>
        <g filter="url(#filter5_d_2010_1196)">
          <path
            d="M65.6305 89.167L65.6325 100.667C65.6327 101.772 66.528 102.667 67.6325 102.667L80.6328 102.667"
            stroke={bottomIndicator ? "#26E2B3" : "#E64C3C"}
          />
        </g>
        <g filter="url(#filter6_d_2010_1196)">
          <line
            x1="92.6328"
            y1="102.667"
            x2="107.633"
            y2="102.667"
            stroke={bottomIndicator ? "#26E2B3" : "#E64C3C"}
          />
        </g>
        <g filter="url(#filter7_d_2010_1196)">
          <g clip-path="url(#clip0_2010_1196)">
            <g filter="url(#filter8_d_2010_1196)">
              <path
                d="M83.3759 107.833L92.3759 102.833L83.3759 97.833"
                stroke={bottomIndicator ? "#26E2B3" : "#E64C3C"}
              />
            </g>
          </g>
          <rect
            x="81.3837"
            y="96.667"
            width="12"
            height="12"
            rx="6"
            stroke={bottomIndicator ? "#26E2B3" : "#E64C3C"}
            shape-rendering="crispEdges"
          />
        </g>
        <g filter="url(#filter9_d_2010_1196)">
          <rect
            x="3.375"
            y="67.833"
            width="16"
            height="12"
            rx="2"
            fill={leftIndicator ? "#26E2B3" : "#E64C3C"}
          />
        </g>
        <g filter="url(#filter10_d_2010_1196)">
          <path
            d="M32.375 74.5L37.375 76.8868V71.1132L32.375 73.5V74.5ZM32.875 74V73.5H18.375V74V74.5H32.875V74Z"
            fill={leftIndicator ? "#26E2B3" : "#E64C3C"}
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_d_2010_1196"
          x="0.375"
          y="0.833008"
          width="110.258"
          height="113.334"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="1.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.529412 0 0 0 0 0.937255 0 0 0 0 0.835294 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2010_1196"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2010_1196"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d_2010_1196"
          x="54.375"
          y="0.833008"
          width="22"
          height="18"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="1.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.529412 0 0 0 0 0.937255 0 0 0 0 0.835294 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2010_1196"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2010_1196"
            result="shape"
          />
        </filter>
        <filter
          id="filter2_d_2010_1196"
          x="45.3744"
          y="52.833"
          width="40.7913"
          height="16"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="1.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.901961 0 0 0 0 0.298039 0 0 0 0 0.235294 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2010_1196"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2010_1196"
            result="shape"
          />
        </filter>
        <filter
          id="filter3_d_2010_1196"
          x="59.7076"
          y="20.833"
          width="11.3333"
          height="45.6666"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="1.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.901961 0 0 0 0 0.298039 0 0 0 0 0.235294 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2010_1196"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2010_1196"
            result="shape"
          />
        </filter>
        <filter
          id="filter4_d_2010_1196"
          x="61.875"
          y="12.833"
          width="7"
          height="14"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="1.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.529412 0 0 0 0 0.937255 0 0 0 0 0.835294 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2010_1196"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2010_1196"
            result="shape"
          />
        </filter>
        <filter
          id="filter5_d_2010_1196"
          x="62.1305"
          y="88.1669"
          width="21.5023"
          height="20.0001"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="1.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.529412 0 0 0 0 0.937255 0 0 0 0 0.835294 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2010_1196"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2010_1196"
            result="shape"
          />
        </filter>
        <filter
          id="filter6_d_2010_1196"
          x="89.6328"
          y="101.167"
          width="21"
          height="7"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="1.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.529412 0 0 0 0 0.937255 0 0 0 0 0.835294 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2010_1196"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2010_1196"
            result="shape"
          />
        </filter>
        <filter
          id="filter7_d_2010_1196"
          x="77.8837"
          y="95.167"
          width="19"
          height="19"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="1.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.529412 0 0 0 0 0.937255 0 0 0 0 0.835294 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2010_1196"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2010_1196"
            result="shape"
          />
        </filter>
        <filter
          id="filter8_d_2010_1196"
          x="80.1331"
          y="96.3959"
          width="16.2723"
          height="16.8743"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="1.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.529412 0 0 0 0 0.937255 0 0 0 0 0.835294 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2010_1196"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2010_1196"
            result="shape"
          />
        </filter>
        <filter
          id="filter9_d_2010_1196"
          x="0.375"
          y="66.833"
          width="22"
          height="18"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="1.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.529412 0 0 0 0 0.937255 0 0 0 0 0.835294 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2010_1196"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2010_1196"
            result="shape"
          />
        </filter>
        <filter
          id="filter10_d_2010_1196"
          x="15.375"
          y="70.1133"
          width="25"
          height="11.7734"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="1.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.529412 0 0 0 0 0.937255 0 0 0 0 0.835294 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2010_1196"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2010_1196"
            result="shape"
          />
        </filter>
        <radialGradient
          id="paint0_radial_2010_1196"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(66 55.5) rotate(90) scale(34.5 43.2469)"
        >
          <stop stop-color={topIndicator ? "#26E2B3" : "#E64C3C"} />
          <stop offset="1" stop-color="#009670" />
        </radialGradient>
        <clipPath id="clip0_2010_1196">
          <rect
            x="80.8837"
            y="96.167"
            width="13"
            height="13"
            rx="6.5"
            fill="white"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default ChloreSVG;
