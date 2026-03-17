let budgetValue = 0;
let totalExpensesValue = 0;

const expenseEntries = [
  ["groceries", 33],
  ["restaurants", 50],
  ["transport", 12],
  ["home", 70],
  ["subscriptions", 14],
  ["groceries", 28],
  ["subscriptions", 12],
];

for (const expense of expenseEntries) {
  totalExpensesValue += expense[1];
}

let balanceColor = "green";

function calculateAverageExpense() {
  if (expenseEntries.length === 0) {
    return 0;
  }
  return totalExpensesValue / expenseEntries.length;
}

function calculateBalance() {
  return budgetValue - totalExpensesValue;
}

function updateBalanceColor() {
  const balance = calculateBalance();

  if (balance < 0) {
    balanceColor = "red";
    return;
  }

  if (budgetValue > 0 && balance < budgetValue * 0.25) {
    balanceColor = "orange";
    return;
  }

  balanceColor = "green";
}

function calculateCategoryExpenses(category) {
  let total = 0;
  for (const expense of expenseEntries) {
    if (expense[0] === category) {
      total += expense[1];
    }
  }
  return total;
}

function calculateLargestCategory() {
  const categories = [
    "groceries",
    "restaurants",
    "transport",
    "home",
    "subscriptions",
  ];

  let largestCategory = categories[0];
  let largestTotal = calculateCategoryExpenses(largestCategory);

  for (let i = 1; i < categories.length; i += 1) {
    const category = categories[i];
    const total = calculateCategoryExpenses(category);
    if (total > largestTotal) {
      largestTotal = total;
      largestCategory = category;
    }
  }

  return largestCategory;
}

function addExpenseEntry(values) {
  if (!Array.isArray(values) || values.length < 2) {
    return;
  }

  const category = String(values[0]);
  const amount = Number(values[1]);

  if (!Number.isFinite(amount)) {
    return;
  }

  expenseEntries.unshift([category, amount]);
  totalExpensesValue += amount;
}
