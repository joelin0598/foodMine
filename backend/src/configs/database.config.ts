import { Pool } from 'pg';

const pool = new Pool({
    user: 'admin',
    host: 'dpg-cpd461674orc73a08mv0-a.oregon-postgres.render.com',
    database: 'exercisefoodmain',
    password: '91ZgadcLhbTUQz5pSqHFNY5ikDDV46dq',
    port: parseInt('5432'),
    ssl: {
        rejectUnauthorized: false  // Importante en entornos de desarrollo con SSL autofirmado, ajustar para producción
    }
});

export default pool;



