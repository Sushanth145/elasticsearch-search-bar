﻿# elasticsearch-search-bar

PS C:\Users\DELL\ecommerce-search-backend> k6 run test.js

         /\      Grafana   /‾‾/
    /\  /  \     |\  __   /  /
   /  \/    \    | |/ /  /   ‾‾\
  /          \   |   (  |  (‾)  |
 / __________ \  |_|\_\  \_____/ 

     execution: local
        script: test.js
        output: -

     scenarios: (100.00%) 1 scenario, 50 max VUs, 40s max duration (incl. graceful stop):
              * default: 50 looping VUs for 10s (gracefulStop: 30s)



  █ TOTAL RESULTS

    checks_total.......................: 1500    143.58424/s
    checks_succeeded...................: 100.00% 1500 out of 1500
    checks_failed......................: 0.00%   0 out of 1500

    ✓ status is 200
    ✓ response is JSON
    ✓ response time < 500ms

    HTTP
    http_req_duration.......................................................: avg=36.22ms min=6.25ms med=19.45ms max=287.87ms p(90)=70.61ms p(95)=162.42ms
      { expected_response:true }............................................: avg=36.22ms min=6.25ms med=19.45ms max=287.87ms p(90)=70.61ms p(95)=162.42ms
    http_req_failed.........................................................: 0.00%  0 out of 500
    http_reqs...............................................................: 500    47.861413/s

    EXECUTION
    iterations..............................................................: 500    47.861413/s
    vus.....................................................................: 50     min=50       max=50

    NETWORK
    data_received...........................................................: 250 kB 24 kB/s
    data_sent...............................................................: 50 kB  4.7 kB/s




running (10.4s), 00/50 VUs, 500 complete and 0 interrupted iterations
