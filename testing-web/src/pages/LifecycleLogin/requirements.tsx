import { Divider } from 'antd';
import React from 'react';
import ReactMarkdown from 'react-markdown';

const markdown = `
## Thông tin bài tập:
> [Yêu cầu](https://documents.aptech.io/docs/aptech-tester/software-testing/login)

### I. Thông tin đăng nhập thành công

- Email: tungnt@softech.vn
- Password: 123456789
`;

function Requirements() {
  return (
    <div>
      <h3>Hướng dẫn</h3>
      <Divider></Divider>
      <ReactMarkdown children={markdown}></ReactMarkdown>
    </div>
  );
}

export default Requirements;
