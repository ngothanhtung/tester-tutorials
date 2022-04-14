# The SQL INSERT INTO Statement
The INSERT INTO statement is used to insert new records in a table.
```
INSERT INTO table_name 
(
    column1, 
    column2, 
    column3, 
    ...
)
VALUES 
(
    value1, 
    value2, 
    value3, 
    ...
);
```

Example
```
INSERT INTO Customers 
(
    CustomerName, 
    ContactName, 
    Address, 
    City, 
    PostalCode, 
    Country
)
VALUES 
(
    'Cardinal', 
    'Tom B. Erichsen', 
    'Skagen 21', 
    'Stavanger', 
    '4006', 
    'Norway'
);
```