import Dexie from 'dexie';

const db = new Dexie('feelgoodDB');
db.version(1).stores({ clocks: '++id, datetime' });

export default db;