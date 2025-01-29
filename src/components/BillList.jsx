import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBill, editBill, filterBills } from "../redux/slices/billSlice";

const BillList = () => {
  const dispatch = useDispatch();
  const { filteredBills } = useSelector((state) => state.bills);
  const [editData, setEditData] = useState(null);

  const handleDelete = (id) => dispatch(deleteBill(id));
  const handleFilter = (e) => dispatch(filterBills(e.target.value));
  
  const handleEdit = (bill) => setEditData(bill);
  const handleUpdate = () => {
    dispatch(editBill(editData));
    setEditData(null);
  };

  return (
    <div className="bill-list">
      <select className="filter-dropdown" onChange={handleFilter}>
        <option value="">All Categories</option>
        <option value="FoodNDining">Food & Dining</option>
        <option value="utility">Utility</option>
        <option value="shopping">Shopping</option>
        <option value="education">Education</option>
        <option value="Personal Care">Personal Care</option>
        <option value="Travel">Travel</option>
      </select>
      <ul>
        {filteredBills.map((bill) => (
          <li key={bill.id} className="bill-item">
            {editData?.id === bill.id ? (
              <>
                <input type="text" value={editData.description} onChange={(e) => setEditData({ ...editData, description: e.target.value })} />
                <input type="number" value={editData.amount} onChange={(e) => setEditData({ ...editData, amount: e.target.value })} />
                <button onClick={handleUpdate}>Save</button>
              </>
            ) : (
              <>
                <span>{bill.description} - {bill.amount} - {bill.category}</span>
                <button onClick={() => handleEdit(bill)}>Edit</button>
                <button onClick={() => handleDelete(bill.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BillList;
