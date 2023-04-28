-- Categories
INSERT INTO Categories (Name, Description) VALUES (N'CPU', N'Cac loai CPU cho may tinh')
INSERT INTO Categories (Name, Description) VALUES (N'HDD', N'Cac loai dia cung cho may tinh')
INSERT INTO Categories (Name, Description) VALUES (N'RAM', N'Cac loai bo nho cho may tinh')
INSERT INTO Categories (Name, Description) VALUES (N'MAINBOARDS', N'Cac loai bo mach chu cho may tinh')
INSERT INTO Categories (Name, Description) VALUES (N'VGA', N'Cac loai vga cho may tinh')
INSERT INTO Categories (Name, Description) VALUES (N'Case', N'Cac loai thung cho may tinh')
INSERT INTO Categories (Name, Description) VALUES (N'Monitor', N'Cac loai man hinh cho may tinh')
-- Supplier
INSERT INTO Suppliers (Name, Email, PhoneNumber, Address) VALUES (N'Sony', 'sony@gmail.com', '090X.XYZ.XYZ', 'Japan')
INSERT INTO Suppliers (Name, Email, PhoneNumber, Address) VALUES (N'Asus', 'asus@gmail.com', '090X.XYZ.XYZ', 'Taiwan')
INSERT INTO Suppliers (Name, Email, PhoneNumber, Address) VALUES (N'Acer', 'acer@gmail.com', '090X.XYZ.XYZ', 'Taiwan')
INSERT INTO Suppliers (Name, Email, PhoneNumber, Address) VALUES (N'Samsung', 'samsung@gmail.com', '090X.XYZ.XYZ', 'Korea')
INSERT INTO Suppliers (Name, Email, PhoneNumber, Address) VALUES (N'LG', 'lg@gmail.com', '090X.XYZ.XYZ', 'Korea')
INSERT INTO Suppliers (Name, Email, PhoneNumber, Address) VALUES (N'Intel', 'intel@gmail.com', '090X.XYZ.XYZ', 'USA')

-- Customers
INSERT INTO Customers (FirstName, LastName, PhoneNumber, Address, Email, Birthday)
VALUES (N'Tom', N'Cruise', '090X.XYZ.123', 'Ha Noi', 'tomcruise@gmail.com', '1960-05-05')

INSERT INTO Customers (FirstName, LastName, PhoneNumber, Address, Email, Birthday)
VALUES (N'Tom', N'Hank', '090X.XYZ.456', 'Da Nang', 'tomhank@gmail.com', '1950-06-06')

INSERT INTO Customers (FirstName, LastName, PhoneNumber, Address, Email, Birthday)
VALUES (N'Peter', N'Jackson', '090X.XYZ.789', 'Hue', 'peterjackson@gmail.com', '1950-06-06')

-- Employees
INSERT INTO Employees (FirstName, LastName, PhoneNumber, Address, Email, Birthday)
VALUES (N'Mary', N'Culi', '090X.XYZ.111', 'Ha Noi', 'maryculi@gmail.com', '1960-05-05')

INSERT INTO Employees (FirstName, LastName, PhoneNumber, Address, Email, Birthday)
VALUES (N'John', N'Culi', '090X.XYZ.222', 'Da Nang', 'johnculi@gmail.com', '1950-06-06')

INSERT INTO Employees (FirstName, LastName, PhoneNumber, Address, Email, Birthday)
VALUES (N'Paul', N'Culi', '090X.XYZ.333', 'Hue', 'paulculi@gmail.com', '1970-06-06')

-- Products
INSERT INTO Products (Name, Price, Discount, Stock, CategoryId, SupplierId, Description)
VALUES (N'Intel Core i3', 250, 0, 20, 1, 1, N'')

INSERT INTO Products (Name, Price, Discount, Stock, CategoryId, SupplierId, Description)
VALUES (N'Intel Core i5', 250, 0, 20, 1, 1, N'')

INSERT INTO Products (Name, Price, Discount, Stock, CategoryId, SupplierId, Description)
VALUES (N'Intel Core i7', 250, 0, 20, 1, 1, N'')

INSERT INTO Products (Name, Price, Discount, Stock, CategoryId, SupplierId, Description)
VALUES (N'SSD 120GB', 50, 0, 100, 2, 6, N'')

INSERT INTO Products (Name, Price, Discount, Stock, CategoryId, SupplierId, Description)
VALUES (N'SSD 240GB', 200, 0, 50, 2, 6, N'')

INSERT INTO Products (Name, Price, Discount, Stock, CategoryId, SupplierId, Description)
VALUES (N'SSD 480GB', 350, 0, 50, 2, 6, N'')

INSERT INTO Products (Name, Price, Discount, Stock, CategoryId, SupplierId, Description)
VALUES (N'16GB 1600MHz', 300, 0, 50, 3, 4, N'')

INSERT INTO Products (Name, Price, Discount, Stock, CategoryId, SupplierId, Description)
VALUES (N'8GB 1600MHz', 200, 0, 50, 3, 4, N'')

INSERT INTO Products (Name, Price, Discount, Stock, CategoryId, SupplierId, Description)
VALUES (N'4GB 1600MHz', 100, 0, 50, 3, 4, N'')

-- Orders
INSERT INTO Orders (CreatedDate, ShippedDate, Status, Description, ShippingAddress, ShippingCity, PaymentType, CustomerId, EmployeeId)
VALUES ('2017-05-01', '2017-05-04', 'COMPLETED', '', '38 Yen Bai, Hai Chau', 'Da Nang', 'CASH', 1, 1)

INSERT INTO Orders (CreatedDate, ShippedDate, Status, Description, ShippingAddress, ShippingCity, PaymentType, CustomerId, EmployeeId)
VALUES ('2017-05-01', '2017-05-04', 'COMPLETED', '', '112 Phan Chu Trinh, Hai Chau', 'Da Nang', 'CASH', 2, 2)

INSERT INTO Orders (CreatedDate, ShippedDate, Status, Description, ShippingAddress, ShippingCity, PaymentType, CustomerId, EmployeeId)
VALUES ('2017-05-01', '2017-05-04', 'COMPLETED', '', '123 Hung Vuong, Hai Chau', 'Da Nang', 'CASH', 1, 2)

INSERT INTO Orders (CreatedDate, ShippedDate, Status, Description, ShippingAddress, ShippingCity, PaymentType, CustomerId, EmployeeId)
VALUES ('2017-05-01', '2017-05-04', 'COMPLETED', '', '38 Yen Bai, Hai Chau', 'Da Nang', 'CASH', 3, 3)

-- OrderDetails
INSERT INTO OrderDetails (OrderId, ProductId, Quantity, Price, Discount) VALUES (1, 1, 1, (SELECT Price FROM Products WHERE Id = 1), (SELECT Price FROM Products WHERE Id = 1))
INSERT INTO OrderDetails (OrderId, ProductId, Quantity, Price, Discount) VALUES (1, 2, 1, (SELECT Price FROM Products WHERE Id = 2), (SELECT Price FROM Products WHERE Id = 2))
INSERT INTO OrderDetails (OrderId, ProductId, Quantity, Price, Discount) VALUES (2, 3, 1, (SELECT Price FROM Products WHERE Id = 3), (SELECT Price FROM Products WHERE Id = 3))
INSERT INTO OrderDetails (OrderId, ProductId, Quantity, Price, Discount) VALUES (2, 4, 1, (SELECT Price FROM Products WHERE Id = 4), (SELECT Price FROM Products WHERE Id = 4))
INSERT INTO OrderDetails (OrderId, ProductId, Quantity, Price, Discount) VALUES (3, 3, 1, (SELECT Price FROM Products WHERE Id = 3), (SELECT Price FROM Products WHERE Id = 3))
INSERT INTO OrderDetails (OrderId, ProductId, Quantity, Price, Discount) VALUES (3, 4, 1, (SELECT Price FROM Products WHERE Id = 4), (SELECT Price FROM Products WHERE Id = 4))
INSERT INTO OrderDetails (OrderId, ProductId, Quantity, Price, Discount) VALUES (4, 5, 1, (SELECT Price FROM Products WHERE Id = 5), (SELECT Price FROM Products WHERE Id = 5))
INSERT INTO OrderDetails (OrderId, ProductId, Quantity, Price, Discount) VALUES (4, 6, 1, (SELECT Price FROM Products WHERE Id = 6), (SELECT Price FROM Products WHERE Id = 6))


