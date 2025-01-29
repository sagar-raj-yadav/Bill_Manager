# Car Wash Bill Manager
A React application to help Adithya manage his monthly bills. The application allows users to add, edit, remove, and filter bills by category. It also calculates and highlights the minimum set of bills that should be paid without exceeding a monthly budget. Additionally, it provides a time-series chart of the monthly billing cycle.

# Features
Level-1 Features:
Add Bills: Users can manually add bills with the description, category, amount, and date.
Edit Bills: Users can update the details of existing bills.
Delete Bills: Users can remove bills from the list.
Category Filter: Users can filter bills by category using a dropdown.
Time-Series Chart: A chart is displayed to show the billing cycle across the months.


Level-2 Features:
Minimum Bills Calculation: Users can input a monthly budget, and the application will highlight the bills that should be paid while staying within the budget.
Auto Selection: The bills are sorted and selected such that the total does not exceed the budget, and no further bills can be added without exceeding the budget.
Technologies Used
React: For the front-end.
Redux Toolkit: For state management.
Redux Thunk: For asynchronous actions.
Chart.js: For visualizing the billing cycle with a time-series chart.


# Installation
To run the application locally, follow these steps:

1. Clone the repository
git clone https://github.com/sagar-raj-yadav/Bill_Manager.git

2.Navigate to the project directory and install the dependencies:

3. Install dependencies
npm install

3. Run the application
Start the development server: npm run dev

The app will run on http://localhost:5173/


# Folder structure
/project-root
│
├── /src
│   ├── /components
│   │   ├── BillChart.jsx
│   │   ├── BillForm.jsx
│   │   ├── BillList.jsx
│   │   ├── BudgetCalculator.jsx
│   │   └── Navbar.jsx
│   │
│   ├── /redux
│   │   ├── store.js
│   │   └── /slices
│   │       └── billSlice.js
│   │
│   ├── App.js
│   ├── App.css
│   └── index.js
│
├── package.json
└── README.md
