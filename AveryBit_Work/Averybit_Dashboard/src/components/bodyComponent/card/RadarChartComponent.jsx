import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";

const RadarChartComponent = () => {
  const radarData = [
    { subject: "Code", A: 120, fullMark: 150 },
    { subject: "Design", A: 98, fullMark: 150 },
    { subject: "Test", A: 86, fullMark: 150 },
    { subject: "Deploy", A: 99, fullMark: 150 },
    { subject: "Document", A: 85, fullMark: 150 },
  ];

  return (
    <div className="w-24 h-24">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
          <PolarGrid stroke="#8cc7ff" />
          <PolarAngleAxis dataKey="subject" tick={false} />
          <Radar
            name="Skills"
            dataKey="A"
            stroke="#2e86de"
            fill="#2e86de"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};
export default RadarChartComponent;
