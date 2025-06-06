const { Client } = require('@elastic/elasticsearch');
const pool = require('./db'); // Using your existing PostgreSQL pool module

// Elasticsearch client setup (uses ES v8)
const esClient = new Client({
  node: 'http://localhost:9200',
  // Optional: Add auth if needed (e.g., for Elastic Cloud)
  // auth: { username: 'elastic', password: 'changeme' }
});

async function syncToElasticsearch() {
  try {
    const { rows } = await pool.query('SELECT * FROM products');

    for (const product of rows) {
      await esClient.index({
        index: 'products',
        id: product.id,
        document: product, // automatically stringifies object
      });
    }

    console.log(`✅ Synced ${rows.length} products to Elasticsearch`);
  } catch (err) {
    console.error('❌ Sync failed:', err);
  } finally {
    await pool.end(); // gracefully close connection
  }
}

syncToElasticsearch();
