// import ExpandableText from "./3.Managing Component State/Exercises/ExpandableText";

import { useState } from "react";
import ExpenseTracker from "./components/ExpenseTracker";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseForm from "./components/ExpenseForm";
import categories from "./categories";

function App() {
  const [selectedCategory, setSelectdCategory] = useState("");
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "aaa",
      amount: 10,
      category: "Utilities",
    },
    {
      id: 2,
      description: "bbb",
      amount: 20,
      category: "Gorceries",
    },
    {
      id: 3,
      description: "ccc",
      amount: 30,
      category: "Entertainment",
    },
  ]);
  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <div>
      <div className="mb-5">
        <ExpenseForm />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectdCategory(category)}
        />
      </div>

      <ExpenseTracker
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}
export default App;
