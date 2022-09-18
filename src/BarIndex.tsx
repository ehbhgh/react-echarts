import React, {CSSProperties,FC, Fragment, useEffect, useRef } from "react";
import * as echarts from "echarts";
interface seriesType {
  data: number[];
  name: string;
  type?: string;
  barWidth?: number;
}
type IPorps = {
  xData: string[];
  seriesData: seriesType[];
  legendData: string[];
  barStyle: {
    width: string;
    height: string;
  };
};
const BarIndex: FC<IPorps> = ({ xData, legendData, seriesData,barStyle}) => {
  const chartRef = useRef<HTMLDivElement | null>(null);

  const options = {
    // 标题
    title: {
      text: "柱状图",
    },
    // 提示框组件
    tooltip: {
      // trigger: 'axis'
    },
    // 图例组件
    legend: {
      top: "10%",
      x: "81%",
      y: "center",
      itemWidth: 10,
      itemHeight: 10,
      data: legendData,
    },
    // x轴
    xAxis: {
      type: "category",
      data: xData,
    },
    // y轴
    yAxis: {
      type: "value",
    },
    series: seriesData,
  };
  useEffect(() => {
    console.log(barStyle);
    
    // 创建一个echarts实例，返回echarts实例。不能在单个容器中创建多个echarts实例
    const chart = echarts.init(chartRef.current as unknown as HTMLDivElement);
    // 设置图表实例的配置项和数据
    chart.setOption(options);
    // 组件卸载
    return () => {
      // myChart.dispose() 销毁实例。实例销毁后无法再被使用
      chart.dispose();
    };
  }, []);
  return (
    <Fragment>
      <div style={barStyle  as CSSProperties} ref={chartRef}></div>
    </Fragment>
  );
};

export default BarIndex;
