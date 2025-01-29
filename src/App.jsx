import Navbar from "./components/Navbar";
import BillForm from "./components/BillForm";
import BillList from "./components/BillList";
import BillChart from "./components/BillChart";
import BudgetCalculator from "./components/BudgetCalculator";
import './App.css';


const App = () => {
  return (
    <div>
      <Navbar />
      <BillForm />
      <BillList />
      <BillChart />
      <BudgetCalculator />
    </div>
  );
};

export default App;