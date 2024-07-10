/* eslint-disable @typescript-eslint/no-explicit-any */
function trapezoidPath(height: number, topBase: number, bottomBase: number) {
  return `polygon(50% 0%, 100% ${height}%, ${100 - topBase}% ${height}%, ${
    100 - bottomBase
  }% 0%)`;
}

function calculateStyles(data: any) {
  const totalArea = data?.reduce(
    (acc: any, entry: any) => acc + entry.value,
    0,
  );

  let areaAcc = 0;
  let prevSizesCoef = 0;

  const styles = data.map((item: any) => {
    areaAcc = areaAcc + item.value;
    const areaRatio = areaAcc / totalArea;

    const sizesCoef = Math.sqrt(areaRatio);
    const sliceHeight = sizesCoef - prevSizesCoef;

    const path = trapezoidPath(
      sliceHeight * 100,
      prevSizesCoef * 100,
      sizesCoef * 100,
    );

    prevSizesCoef = sizesCoef;

    return {
      clipPath: path,
      height: `${sliceHeight * 100}%`,
      width: "100%",
    };
  });

  return styles;
}

function PyramidChart({ data }: any) {
  const styles = calculateStyles(data);

  return (
    <div className="pyramid-chart-container h-full w-full">
      {data.map((entry: any, index: number) => (
        <div
          key={index}
          className="pyramid-chart-slice"
          title={entry.title}
          style={styles[index]}
        >
          {entry.title}
        </div>
      ))}
    </div>
  );
}

export default PyramidChart;
