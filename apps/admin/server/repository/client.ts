import { RowDataPacket } from 'mysql2';
import pool from '../common/database';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getAll: async () => {
    const query = `
        SELECT c.name, c.mac_address, c.ip_address, c.active, co.name as collection_name 
        FROM client c 
        LEFT JOIN collection co on c.collection_id = co.id
    `;

    const [rows] = await pool.query(query);
    return rows as RowDataPacket[];
  },
};
