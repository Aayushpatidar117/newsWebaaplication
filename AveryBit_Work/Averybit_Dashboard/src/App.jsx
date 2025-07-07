import { Container } from "@mui/material";
import "./index.css";
import NavBar from "./components/navigationComponents/NavBar.jsx";
import Chart from "./components/bodyComponent/chart/Chart.jsx";
import EmployeeDetails from "./components/bodyComponent/card/EmployeeDetails.jsx";
import EmployeeTable from "./components/tableComponent/EmployeeTable.jsx";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      
      <Container maxWidth="xl" className="mt-24 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Left Section - Chart and Table */}
          <div className="w-full lg:w-[65%] space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 transition-all duration-300 hover:shadow-md">
              <Chart />
            </div>
            <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 transition-all duration-300 hover:shadow-md">
              <EmployeeTable />
            </div>
          </div>

          {/* Right Section - Employee Details */}
          <div className="w-full lg:w-[35%]">
            <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 transition-all duration-300 hover:shadow-md sticky top-24">
              <EmployeeDetails />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default App;
