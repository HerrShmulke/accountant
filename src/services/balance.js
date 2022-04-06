import * as incomeDb from '@/db/income';
import * as expensesDb from '@/db/expenses';

incomeDb.addIncome({
  amount: 10,
});

export async function getBalance() {
  const incomePromise = incomeDb
    .getAllIncome()
    .then((income) => income.reduce((result, { amount }) => result + amount, 0));
  const expensesPromise = expensesDb
    .getAllExpenses()
    .then((expenses) => expenses.reduce((result, { amount }) => result + amount, 0));

  const [income, expenses] = await Promise.all([incomePromise, expensesPromise]);

  return income - expenses;
}

export function addExpense(data) {
  return expensesDb.addExpense(data);
}

export function getAllExpenses(data) {
  return expensesDb.getAllExpenses(data);
}

export function getAllNamesExpenses() {
  return expensesDb.getAllExpenses().then((expenses) => new Set(expenses.map((expense) => expense.name)));
}
