## Download:

- Download Apache JMeter

  > https://dlcdn.apache.org//jmeter/binaries/apache-jmeter-5.5.zip

- Run Jmeter:
  - Xả nén, vào thư mục /bin/
  - Chạy file: jmeter.bat (Windows)
  - Chạy file: jmeter (MacOS)

### WINDOWS

- Install JAVA for Windows (https://www.oracle.com/java/technologies/downloads/#jdk18-windows)
- Config JAVA_HOME
  > https://mkyong.com/java/how-to-set-java_home-on-windows-10/

### MACOS

Install brew, access url https://brew.sh/:

- Copy and run below command in terminal, example:

  > /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

  > brew tap adoptopenjdk/openjdk

  > brew install --cask adoptopenjdk11

# Thực hiện 1 REQUEST:

- Tạo mới 1 Thread (Users) / Thread Group
- Tạo mới 1 Sampler / Http Request

  - Protocal: https
  - Server Name or IP: training.softech.cloud
  - Port: 443
  - Method: POST
  - Path: api/training/users/login
  - Data:

  ```
    username = "tungnt"
    password = "123456789"
  ```

- Tạo mới 1 Listener / View Result Tree
- Run
