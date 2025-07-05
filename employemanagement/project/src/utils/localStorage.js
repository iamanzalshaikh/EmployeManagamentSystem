const employees = [
  {
    id: "emp001",
    name: "Saaliq",
    firstName: "Saaliq",
    email: "saaliq@gmail.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "UI redesign",
        taskDescription: "Redesign the user interface for better UX",
        taskDate: "2024-10-14",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Navbar Bug Fix",
        taskDescription: "Fix navbar scroll issue on mobile",
        taskDate: "2024-09-28",
        category: "Frontend"
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Component Testing",
        taskDescription: "Write unit tests for React components",
        taskDate: "2024-11-15",
        category: "Testing"
      }
    ]
  },
  {
    id: "emp002",
    name: "Pooja Verma",
    firstName: "Pooja",
    email: "pooja@gmail.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Onboarding Design",
        taskDescription: "Design onboarding flow screens",
        taskDate: "2024-11-01",
        category: "UI/UX"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Landing Page",
        taskDescription: "Create landing page for campaign",
        taskDate: "2024-10-22",
        category: "Frontend"
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "User Research",
        taskDescription: "Conduct user interviews for new features",
        taskDate: "2024-11-10",
        category: "Research"
      }
    ]
  },
  {
    id: "emp003",
    name: "Rohit Patel",
    firstName: "Rohit",
    email: "rohit@gmail.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Backend APIs",
        taskDescription: "Create secure APIs for login",
        taskDate: "2024-11-05",
        category: "Backend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Mongo Integration",
        taskDescription: "Connect backend to MongoDB",
        taskDate: "2024-10-27",
        category: "Database"
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "API Documentation",
        taskDescription: "Write comprehensive API documentation",
        taskDate: "2024-11-12",
        category: "Documentation"
      }
    ]
  }
];

const admin = [
  {
    id: "admin001",
    firstName: "Anzal",
    name: "Anzal Shaikh",
    email: "admin@gmail.com",
    password: "123"
  }
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  return { employees, admin };
};