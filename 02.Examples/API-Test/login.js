var axios = require('axios');
var data = JSON.stringify({
  username: 'tungnt',
  password: '123456789',
});

var config = {
  method: 'post',
  url: 'https://training.softech.cloud/api/training/users/login',
  headers: {
    'Content-Type': 'application/json',
  },
  data: data,
};

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
