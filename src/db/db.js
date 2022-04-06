import Dexie from 'dexie';

const db = new Dexie('accountant');

db.version(1).stores({
  income: '++id, amount, description, createdAt, isSync',
  expenses: '++id, amount, name, image, createdAt, isSync',
});

export default db;
