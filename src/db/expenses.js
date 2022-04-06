import db from './db';

export function addExpense({ amount, name, image, createdAt = new Date(), isSync = false } = {}) {
  return db.table('expenses').add({
    amount,
    name,
    image,
    createdAt,
    isSync,
  });
}

export function getAllExpenses({ limit, offset } = {}) {
  let expensesTable = db.table('expenses');

  if (offset) {
    expensesTable = expensesTable.offset(offset);
  }

  if (limit) {
    expensesTable = expensesTable.limit(limit);
  }

  return expensesTable.toArray();
}
