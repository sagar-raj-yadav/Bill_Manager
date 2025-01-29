import { useState ,useEffect} from "react";
import { useDispatch } from "react-redux";
import { addBill } from "../redux/slices/billSlice";

const BillForm = () => {
  const dispatch = useDispatch();
  const [bill, setBill] = useState({ description: "", category: "", amount: "", date: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBill(bill));
    setBill({ description: "", category: "", amount: "", date: "" });
  };

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setBill({ ...bill, date: today });
  }, []);


  return (
    <div className="bill-form">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter Description" value={bill.description} onChange={(e) => setBill({ ...bill, description: e.target.value })} />
        <input type="text" placeholder=" Enter Category" value={bill.category} onChange={(e) => setBill({ ...bill, category: e.target.value })} />
        <input type="number" placeholder="Enter Amount" value={bill.amount} onChange={(e) => setBill({ ...bill, amount: e.target.value })} />
        <input type="date" value={bill.date} onChange={(e) => setBill({ ...bill, date: e.target.value })} />
        <button type="submit">Add Bill</button>
      </form>
    </div>
  );
};

export default BillForm;
