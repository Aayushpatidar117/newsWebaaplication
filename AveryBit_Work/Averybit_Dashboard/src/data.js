import employee01 from "../src/assets/images/employeeImages/employee01.jpg";
import employee02 from "../src/assets/images/employeeImages/employee02.jpg";
import employee03 from "../src/assets/images/employeeImages/employee03.jpg";
import employee04 from "../src/assets/images/employeeImages/employee04.jpg";
import employee05 from "../src/assets/images/employeeImages/employee05.jpg";
import employee06 from "../src/assets/images/employeeImages/employee06.jpg";
import employee07 from "../src/assets/images/employeeImages/employee07.jpg";
import employee08 from "../src/assets/images/employeeImages/employee08.jpg";
import employee09 from "../src/assets/images/employeeImages/employee09.jpg";
import employee10 from "../src/assets/images/employeeImages/employee10.jpg";
const employeeData = [
  {
    id: 1,
    employeeName: "Aarav Sharma",
    employeeImageUrl: `${employee01}`, // Placeholder - will be managed locally
    projectName: "E-commerce Platform Redesign",
    projectImageUrl: "/images/projects/ecommerce_redesign.jpg", // Placeholder - will be managed locally
    task: [
      {
        id: 1,
        name: "Back Tracker",
        color: "#0066ff",
        time: "3hr",
        estimated: "5hr",
        status: "pending",
      },
      {
        id: 2,
        name: "UI Design",
        color: "#8844ff",
        time: "3hr",
        estimated: "5hr",
        status: "pending",
      },
      {
        id: 3,
        name: "Database",
        color: "#00c8c8",
        time: "6hr",
        estimated: "6hr",
        status: "completed",
      },
    ],
    hoursEstimated: 40,
    status: "In Progress",
  },
  {
    id: 2,
    employeeName: "Priya Verma",
    employeeImageUrl: `${employee02}`, // Placeholder - will be managed locally
    projectName: "Mobile App Feature Implementation",
    projectImageUrl: "/images/projects/mobile_feature.jpg", // Placeholder - will be managed locally
    task: [
      {
        id: 1,
        name: "Back Tracker",
        color: "#0066ff",
        time: "3hr",
        estimated: "5hr",
        status: "pending",
      },
      {
        id: 2,
        name: "UI Design",
        color: "#8844ff",
        time: "3hr",
        estimated: "5hr",
        status: "pending",
      },
      {
        id: 3,
        name: "Database",
        color: "#00c8c8",
        time: "6hr",
        estimated: "6hr",
        status: "completed",
      },
    ],
    hoursEstimated: 30,
    status: "To Do",
  },
  {
    id: 3,
    employeeName: "Rahul Kapoor",
    employeeImageUrl: `${employee03}`, // Placeholder - will be managed locally
    projectName: "Internal Dashboard Enhancement",
    projectImageUrl: "/images/projects/dashboard_enhancement.jpg", // Placeholder - will be managed locally
    task: [
      {
        id: 1,
        name: "Back Tracker",
        color: "#0066ff",
        time: "3hr",
        estimated: "5hr",
        status: "pending",
      },
      {
        id: 2,
        name: "UI Design",
        color: "#8844ff",
        time: "3hr",
        estimated: "5hr",
        status: "pending",
      },
      {
        id: 3,
        name: "Database",
        color: "#00c8c8",
        time: "6hr",
        estimated: "6hr",
        status: "completed",
      },
    ],
    hoursEstimated: 50,
    status: "Completed",
  },
  {
    id: 4,
    employeeName: "Sneha Patel",
    employeeImageUrl: `${employee04}`, // Placeholder - will be managed locally
    projectName: "Customer Support Chatbot Development",
    projectImageUrl: "/images/projects/chatbot_development.jpg", // Placeholder - will be managed locally
    task: [
      {
        id: 1,
        name: "Back Tracker",
        color: "#0066ff",
        time: "3hr",
        estimated: "5hr",
        status: "pending",
      },
      {
        id: 2,
        name: "UI Design",
        color: "#8844ff",
        time: "3hr",
        estimated: "5hr",
        status: "pending",
      },
      {
        id: 3,
        name: "Database",
        color: "#00c8c8",
        time: "6hr",
        estimated: "6hr",
        status: "completed",
      },
    ],
    hoursEstimated: 60,
    status: "In Progress",
  },
  {
    id: 5,
    employeeName: "Vikram Singh",
    employeeImageUrl: `${employee05}`, // Placeholder - will be managed locally
    projectName: "Website Performance Optimization",
    projectImageUrl: "/images/projects/website_optimization.jpg", // Placeholder - will be managed locally
    task: [
      {
        id: 1,
        name: "Back Tracker",
        color: "#0066ff",
        time: "3hr",
        estimated: "5hr",
        status: "pending",
      },
      {
        id: 2,
        name: "UI Design",
        color: "#8844ff",
        time: "3hr",
        estimated: "5hr",
        status: "pending",
      },
      {
        id: 3,
        name: "Database",
        color: "#00c8c8",
        time: "6hr",
        estimated: "6hr",
        status: "completed",
      },
    ],
    hoursEstimated: 35,
    status: "To Do",
  },
  {
    id: 6,
    employeeName: "Anjali Gupta",
    employeeImageUrl: `${employee06}`, // Placeholder - will be managed locally
    projectName: "New Product Landing Page Design",
    projectImageUrl: "/images/projects/new_product_page.jpg", // Placeholder - will be managed locally
    task: [
      {
        id: 1,
        name: "Back Tracker",
        color: "#0066ff",
        time: "3hr",
        estimated: "5hr",
        status: "pending",
      },
      {
        id: 2,
        name: "UI Design",
        color: "#8844ff",
        time: "3hr",
        estimated: "5hr",
        status: "pending",
      },
      {
        id: 3,
        name: "Database",
        color: "#00c8c8",
        time: "6hr",
        estimated: "6hr",
        status: "completed",
      },
    ],
    hoursEstimated: 25,
    status: "Completed",
  },
  {
    id: 7,
    employeeName: "Rohan Mehra",
    employeeImageUrl: `${employee07}`, // Placeholder - will be managed locally
    projectName: "Blog Platform Migration",
    projectImageUrl: "/images/projects/blog_migration.jpg", // Placeholder - will be managed locally
    task: [
      {
        id: 1,
        name: "Back Tracker",
        color: "#0066ff",
        time: "3hr",
        estimated: "5hr",
        status: "pending",
      },
      {
        id: 2,
        name: "UI Design",
        color: "#8844ff",
        time: "3hr",
        estimated: "5hr",
        status: "pending",
      },
      {
        id: 3,
        name: "Database",
        color: "#00c8c8",
        time: "6hr",
        estimated: "6hr",
        status: "completed",
      },
    ],
    hoursEstimated: 45,
    status: "In Progress",
  },
  {
    id: 8,
    employeeName: "Divya Sharma",
    employeeImageUrl: `${employee08}`, // Placeholder - will be managed locally
    projectName: "Marketing Campaign Tracking System",
    projectImageUrl: "/images/projects/marketing_tracking.jpg", // Placeholder - will be managed locally
    task: [
      {
        id: 1,
        name: "Back Tracker",
        color: "#0066ff",
        time: "3hr",
        estimated: "5hr",
        status: "pending",
      },
      {
        id: 2,
        name: "UI Design",
        color: "#8844ff",
        time: "3hr",
        estimated: "5hr",
        status: "pending",
      },
      {
        id: 3,
        name: "Database",
        color: "#00c8c8",
        time: "6hr",
        estimated: "6hr",
        status: "completed",
      },
    ],
    hoursEstimated: 55,
    status: "To Do",
  },
  {
    id: 9,
    employeeName: "Aryan Verma",
    employeeImageUrl: `${employee09}`, // Placeholder - will be managed locally
    projectName: "Internal Tool for Project Management",
    projectImageUrl: "/images/projects/internal_tool.jpg", // Placeholder - will be managed locally
    task: [
      {
        id: 1,
        name: "Back Tracker",
        color: "#0066ff",
        time: "3hr",
        estimated: "5hr",
        status: "pending",
      },
      {
        id: 2,
        name: "UI Design",
        color: "#8844ff",
        time: "3hr",
        estimated: "5hr",
        status: "pending",
      },
      {
        id: 3,
        name: "Database",
        color: "#00c8c8",
        time: "6hr",
        estimated: "6hr",
        status: "completed",
      },
    ],
    hoursEstimated: 70,
    status: "In Progress",
  },
  {
    id: 10,
    employeeName: "Siya Kapoor",
    employeeImageUrl: `${employee10}`, // Placeholder - will be managed locally
    projectName: "Security Audit and Vulnerability Assessment",
    projectImageUrl: "/images/projects/security_audit.jpg", // Placeholder - will be managed locally
    task: [
      {
        id: 1,
        name: "Back Tracker",
        color: "#0066ff",
        time: "3hr",
        estimated: "5hr",
        status: "pending",
      },
      {
        id: 2,
        name: "UI Design",
        color: "#8844ff",
        time: "3hr",
        estimated: "5hr",
        status: "pending",
      },
      {
        id: 3,
        name: "Database",
        color: "#00c8c8",
        time: "6hr",
        estimated: "6hr",
        status: "completed",
      },
    ],
    hoursEstimated: 40,
    status: "Completed",
  },
];
export default employeeData;
