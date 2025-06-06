// esClient.js
const { Client } = require('@elastic/elasticsearch');

const esClient = new Client({
  node: 'http://localhost:9200', // Or your cloud endpoint
});

module.exports = esClient;
