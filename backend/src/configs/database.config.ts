import { Pool } from 'pg';

const pool = new Pool({
    user: 'admin',
    host: 'dpg-cp8vgf5ds78s73cacr10-a.oregon-postgres.render.com',
    database: 'ejercicio1',
    password: 'fmCgLTDAWmeV5zOMfbNG9Pl2WLQZbWcc',
    port: parseInt('5432'),
    ssl: {
        rejectUnauthorized: false  // Importante en entornos de desarrollo con SSL autofirmado, ajustar para producción
    }
});

export default pool;



