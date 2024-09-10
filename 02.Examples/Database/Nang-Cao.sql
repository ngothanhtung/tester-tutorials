-- Gọi thử tục / chương trình con để kiểm hàng tồn kho tối thiểu: 
-- usp_Products_CheckStock, có 1 tham số truyền vào là số tồn kho tối thiểu cần tra cứu

-- Execute / Call Stored Procedure
EXECUTE usp_Products_CheckStock 3

-- Query View
SELECT * FROM v_Products_NotSold

-- Call Function (Table-Valued Function)
SELECT * FROM dbo.udf_Products_GetByMinPrice(100)

-- Call Function (Scalar Function)
SELECT dbo.udf_Employee_GetFullName('Ngo', 'Tung')

SELECT *, dbo.udf_Employee_GetFullName(FirstName, LastName) AS 'FullName' FROM Customers

