const StatusBadge = ({ status }) => {
  const getBadgeColor = (status) => {
    switch (status.toLowerCase0()) {
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
export default StatusBadge;
