# The SQL SELECT Statement

The SELECT statement is used to select data from a database.

The data returned is stored in a result table, called the result-set.

```
SELECT
    column1,
    column2,
    ...
FROM
    table_name;
WHERE
    condition;
ORDER BY
    column1, column2, ... ASC|DESC;
```

Example

```
SELECT
    CustomerName,
    City
FROM
    Customers
WHERE
    Country = 'Mexico';
ORDER BY
    Country;
```

## Reference:

> https://www.w3schools.com/sql/sql_select.asp

> https://www.w3schools.com/sql/sql_where.asp

> https://www.w3schools.com/sql/sql_orderby.asp
