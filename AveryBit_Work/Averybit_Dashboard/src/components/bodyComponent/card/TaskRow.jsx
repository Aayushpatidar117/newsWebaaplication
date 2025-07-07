import StatusBadge from "./StatusBadge";

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
        <span className="w-8 text-center">{task.hoursEstimated}</span>
        <div className="w-20 flex justify-end">
          <StatusBadge status={task.status} />
        </div>
      </div>
    </div>
  );
};

export default TaskRow;
