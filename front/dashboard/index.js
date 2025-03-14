app.get('/getCounts', (req, res) => {
    pool.getConnection()
        .then(conn => {
            const queries = [
                'SELECT COUNT(*) AS activePersonnel FROM personnel WHERE Assignment_ID IS NOT NULL', 
                'SELECT COUNT(*) AS inactivePersonnel FROM personnel WHERE Assignment_ID IS NULL', 
                'SELECT COUNT(*) AS availableContracts FROM contract WHERE Status_ID = 1' 
            ];

            Promise.all(queries.map(query => conn.query(query)))
                .then(results => {
                    const counts = {
                        activePersonnel: results[0][0].activePersonnel,
                        inactivePersonnel: results[1][0].inactivePersonnel,
                        availableContracts: results[2][0].availableContracts
                    };
                    res.json(counts);
                    conn.release();
                })
                .catch(err => {
                    res.status(500).send('Error fetching counts');
                    console.error('Error fetching counts:', err);
                    conn.release();
                });
        })
        .catch(err => {
            res.status(500).send('Database connection failed');
            console.error('Database connection failed:', err);
        });
});