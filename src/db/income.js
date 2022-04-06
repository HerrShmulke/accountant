import db from './db';

export function addIncome({ amount, description = null, createdAt = new Date(), isSync = false } = {}) {
  return db.table('income').add({ amount, description, createdAt, isSync });
}

export function removeIncomeById({ id } = {}) {
  return db.table('income').delete(id);
}

export function getAllIncome() {
  return db.table('income').toArray();
}
