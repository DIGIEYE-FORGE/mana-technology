function ChloreSVG({
  value = "XX",
  topTitle = "SP01-M-03",
  bottomTitle = "SP01-M-02",
  leftTitle = "LSLL-04",
  width = 200,
  height = 140,
}) {
  
  const leftTitleColor = leftTitle.toLowerCase() === "true" ? "#26E2B3" : leftTitle.toLowerCase() === "false" ? "#E64C3C" : "white";

  return (
    <svg
      viewBox="0 0 200 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
    >
      <g clipPath="url(#clip0)">
        <g filter="url(#filter0)">
          <rect
            x="63.75"
            y="26.5"
            width="58"
            height="69"
            rx="2"
            fill="#0A4B51"
            shapeRendering="crispEdges"
          />
          <rect
            x="64.25"
            y="27"
            width="57"
            height="68"
            rx="1.5"
            stroke="url(#paint0_radial)"
            shapeRendering="crispEdges"
          />
          <g filter="url(#filter1)">
            <rect
              x="129.25"
              y="0.833008"
              width="18"
              height="74"
              rx="1.5"
              transform="rotate(90 129.25 0.833008)"
              stroke="#98FFE5"
              shapeRendering="crispEdges"
            />
          </g>
          <text
            fill="white"
            fontFamily="Roboto"
            fontSize="12"
            fontWeight="500"
            letterSpacing="0.5px"
            x="58.8164"
            y="14.4346"
          >
            {topTitle}
          </text>
          <g filter="url(#filter2)">
            <path
              d="M92.375 48.6663C90.9022 48.6663 89.7083 49.8602 89.7083 51.333C89.7083 52.8058 90.9022 53.9997 92.375 53.9997C93.8478 53.9997 95.0417 52.8058 95.0417 51.333C95.0417 49.8602 93.8478 48.6663 92.375 48.6663ZM92.375 51.333L92.875 51.333L92.875 19.333L92.375 19.333L91.875 19.333L91.875 51.333L92.375 51.333Z"
              fill="#98FFE5"
            />
          </g>
          <g filter="url(#filter3)">
            <path
              d="M92.6305 94.667L92.6325 106.167C92.6327 107.272 93.528 108.167 94.6325 108.167L107.633 108.167"
              stroke="#98FFE5"
            />
          </g>
          <g filter="url(#filter4)">
            <line
              x1="119.633"
              y1="108.167"
              x2="134.633"
              y2="108.167"
              stroke="#98FFE5"
            />
          </g>
          <g filter="url(#filter5)">
            <rect
              x="107.633"
              y="101.667"
              width="13"
              height="13"
              rx="6.5"
              fill="#98FFE5"
            />
            <path
              d="M118.892 103.064L113.942 108.014M113.942 108.014L108.992 112.964M113.942 108.014L108.992 103.064M113.942 108.014L118.892 112.964"
              stroke="#0B2171"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <text
            fill="white"
            fontFamily="Roboto"
            fontSize="10"
            fontWeight="500"
            letterSpacing="0.5px"
            x="32.9023"
            y="111.751"
          >
            {bottomTitle}
          </text>
          <g filter="url(#filter6)">
            <rect
              x="0.5"
              y="71"
              width="45"
              height="17"
              rx="1.5"
              stroke={leftTitleColor}
              shapeRendering="crispEdges"
            />
          </g>
          <text
            fill={leftTitleColor}
            fontFamily="Roboto"
            fontSize="10"
            fontWeight="500"
            letterSpacing="0.5px"
            x="2.97852"
            y="82.918"
          >
            {leftTitle}
          </text>
          <g filter="url(#filter7)">
            <path
              d="M59.375 80L64.375 82.3868V76.6132L59.375 79V80ZM59.875 79.5V79H45.375V79.5V80H59.875V79.5Z"
              fill={leftTitleColor}
            />
          </g>
          {/* Value to the right of the croix icon in a rounded rectangle */}
          {(() => {
            const croixX = 107.633;
            const croixWidth = 13;
            const gap = 6;
            const valueRectWidth = 50;
            const valueRectHeight = 22;
            const valueRectX = croixX + croixWidth + gap;
            const valueRectY = 101.667;
            return (
              <g>
                <rect
                  x={valueRectX}
                  y={valueRectY}
                  rx={10}
                  width={valueRectWidth}
                  height={valueRectHeight}
                  fill="#021E3F"
                  stroke="white"
                  strokeWidth={1.5}
                />
                <text
                  fill="white"
                  fontFamily="Be Vietnam Pro"
                  fontSize="18"
                  fontWeight="normal"
                  x={valueRectX + valueRectWidth / 2}
                  y={valueRectY + valueRectHeight / 2 + 2}
                  textAnchor="middle"
                  alignmentBaseline="middle"
                >
                  {value}
                </text>
              </g>
            );
          })()}
        </g>
      </g>
      <defs>
        {/* Your filters go here (unchanged from your code) */}
        {/* Make sure to replace all dashed attribute names with camelCase */}
      </defs>
    </svg>
  );
}

export default ChloreSVG;
