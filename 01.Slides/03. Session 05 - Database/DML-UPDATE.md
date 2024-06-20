# The SQL UPDATE Statement

The UPDATE statement is used to modify the existing records in a table.

```
UPDATE table_name
SET
  column1 = value1,
  column2 = value2,
  ...
WHERE
  condition;
```

Example

```
UPDATE Customers
SET
  ContactName = 'Alfred Schmidt',
  City= 'Frankfurt'
WHERE
  CustomerID = 1;
```
