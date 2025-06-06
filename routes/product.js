const express = require('express');
const router = express.Router();
const esClient = require('../esClient');

// Add basic input validation and sanitize query param
router.get('/search', async (req, res) => {
  const q = (req.query.q || '').trim();

  if (!q) {
    return res.status(400).json({ error: 'Query parameter "q" is required' });
  }

  try {
    // Limit the size to avoid large response payloads
    const result = await esClient.search({
      index: 'products',
      size: 50,  // limit results for performance
      query: {
        multi_match: {
          query: q,
          fields: ['name^2', 'description', 'category'],
          fuzziness: 'AUTO',
        }
      }
    });

    const hits = result.hits.hits.map(hit => ({
      id: hit._id,
      ...hit._source
    }));

    res.json(hits);
  } catch (err) {
    // Log detailed error for debugging, but respond with generic message to client
    console.error('Elasticsearch search error:', err.meta?.body?.error || err.message || err);
    res.status(500).json({ error: 'Search operation failed' });
  }
});

module.exports = router;
