import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  vus: 50,         // 50 virtual users
  duration: '10s', // Test duration
};

export default function () {
  const query = 't-shirt';
  const res = http.get(`http://localhost:5000/api/products/search?q=${query}`);

  check(res, {
    'status is 200': (r) => r.status === 200,
    'response is JSON': (r) => r.headers['Content-Type'].includes('application/json'),
    'response time < 500ms': (r) => r.timings.duration < 500,
  });

  sleep(1); // Simulate user wait time
}
