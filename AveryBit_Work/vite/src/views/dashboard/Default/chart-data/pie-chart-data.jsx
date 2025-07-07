// ==============================|| DASHBOARD - PIE CHART ||============================== //

const chartData = {
  type: 'donut',
  height: 300,
  options: {
    chart: {
      sparkline: {
        enabled: true
      }
    },
    labels: ['Category A', 'Category B', 'Category C'],
    colors: ['#FEB019', '#00E396', '#FF4560'],
    tooltip: {
      fixed: {
        enabled: false
      },
      x: {
        show: false
      },
      y: {
        title: {
          formatter: (seriesName) => seriesName
        }
      },
      marker: {
        show: false
      }
    }
  },
  series: [44, 55, 41]
};

export default chartData;
