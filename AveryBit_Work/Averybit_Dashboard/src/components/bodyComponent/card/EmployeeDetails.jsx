import React from "react";
import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
} from "recharts";
import employeeData from "../../../data";

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

const StatusBadge = ({ status }) => {
  const getBadgeColor = (status) => {
    switch (status.toLowerCase()) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <span
      className={`px-2 py-1 text-xs font-medium rounded-full ${getBadgeColor(
        status
      )}`}
    >
      {status}
    </span>
  );
};

const TaskRow = ({ task }) => {
  return (
    <div className="flex items-center justify-between text-sm my-2">
      <div className="flex items-center">
        <div
          className="w-2 h-2 rounded-full mr-2"
          style={{ backgroundColor: task.color }}
        />
        <span>{task.name}</span>
      </div>
      <div className="flex items-center space-x-8">
        <span className="w-8 text-center">{task.time}</span>
        <span className="w-8 text-center">{task.estimated}</span>
        <div className="w-20 flex justify-end">
          <StatusBadge status={task.status} />
        </div>
      </div>
    </div>
  );
};

const EmployeeCard = ({ employee }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 mb-4 w-full max-w-2xl">
      <div className="flex items-center space-x-4 mb-4">
        <img
          src={employee.employeeImageUrl}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h2 className="text-xl font-bold">{employee.employeeName}</h2>
        </div>
      </div>

      <div className="flex mt-2">
        <div className="w-1/3 flex justify-center flex-col items-center">
          <span className="">
            <p className="text-gray-600 text-center text-[13px] font-bold text-wrap">
              {employee.projectName}
            </p>
          </span>
          <RadarChartComponent />
        </div>
        <div className="w-2/3">
          <div className="flex justify-between text-xs font-medium text-gray-500 mb-1 pr-4">
            <span>Current Tasks</span>
            <div className="flex justify-between space-x-8">
              <span className="w-8 text-center">Time</span>
              <span className="w-8 text-center">Est.</span>
              <span className="w-20 text-center">Status</span>
            </div>
          </div>

          {employee.task.map((task) => (
            <TaskRow key={task.id} task={task} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default function EmployeeDetails() {
  return (
    <div className="overflow-hidden p-1">
      {employeeData.map((employee) => (
        <EmployeeCard key={employee.id} employee={employee} />
      ))}
    </div>
  );
}
