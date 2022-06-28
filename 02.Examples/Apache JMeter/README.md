## Ramp-up

Trong JMeter, Ramp-up là tổng thời gian thực hiện hết tất cả các yêu cầu (request) của bạn.
Ví dụ, nếu bạn có 10 yêu cầu, và bạn thiết lập ramp-up là 100 (giây) thì JMeter sẽ thực hiện 10 yêu cầu đó trong 100 giây, nghĩa là mỗi yêu cầu sẽ được gửi cách nhau 10 giây. Nói cách khác, cứ mỗi 10 giây JMeter sẽ gửi 1 yêu cầu lên server.

Tương tự như vậy, nếu bạn có 30 yêu cầu và ramp-up bạn thiết lập là 120 thì cứ cách 4 giây JMeter sẽ gửi 1 yêu cầu.

The ramp-up period tells JMeter how long to take to “ramp-up” to the full number of threads chosen. If 10 threads are used, and the ramp-up period is 100 seconds, then JMeter will take 100 seconds to get all 10 threads up and running. Each thread will start 10 (100/10) seconds after the previous thread was begun. If there are 30 threads and a ramp-up period of 120 seconds, then each successive thread will be delayed by 4 seconds.
