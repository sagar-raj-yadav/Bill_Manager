import  { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const BudgetCalculator = () => {
  const { bills } = useSelector((state) => state.bills);
  const [budget, setBudget] = useState(500);
  const [highlightedBills, setHighlightedBills] = useState([]);

  const calculateBills = () => {
    const sortedBills = [...bills].sort((a, b) => b.amount - a.amount);
    let total = 0;
    const selectedBills = [];
    
    for (const bill of sortedBills) {
      if (total + bill.amount <= budget) {
        total += bill.amount;
        selectedBills.push(bill);
      }
    }
    setHighlightedBills(selectedBills);
  };

  useEffect(()=>{
    calculateBills()
  },[budget,bills])

  return (
    <div className="budget-calculator">
      <input
        type="number"
        value={budget}
        onChange={(e) => setBudget(Number(e.target.value))}
        placeholder="Monthly Budget"
      />
      <button onClick={calculateBills}>Calculate</button>
      <div className="highlighted-bills">
        <h3>Bills to Pay (Total: ₹{highlightedBills.reduce((sum, bill) => sum + bill.amount, 0)})</h3>
        <ul>
          {highlightedBills.map((bill) => (
            <li key={bill.id} className="highlighted-bill">
              {bill.description} - ₹{bill.amount}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BudgetCalculator;