UPDATE [dbo].[OrderDetails]
SET 
	Price = 0
WHERE
	OrderId = 10000112
	And ProductId = 209328