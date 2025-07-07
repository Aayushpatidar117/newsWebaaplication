import RadarChartComponent from "./RadarChartComponent";
import TaskRow from "./TaskRow";

const EmployeeCard = ({ employee }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 mb-4 w-full max-w-2xl">
      <div className="flex items-center space-x-4 mb-4">
        <img
          src={employee.employeeImageUrl}
          className="w-12 h-12 rounded-full"
        />
        <div>
          <h2 className="text-xl font-bold">{employee.employeeName}</h2>
        </div>
      </div>

      <div className="flex mt-2">
        <div className="w-1/3 flex justify-center">
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

          {employee.task.map((task, index) => (
            <TaskRow key={index} task={task} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;
