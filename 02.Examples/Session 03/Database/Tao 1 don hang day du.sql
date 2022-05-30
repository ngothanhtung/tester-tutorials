-- Create an order
INSERT INTO Orders
(
    --[CreatedDate],
    --[ShippedDate],
    --[Status],
    --[Description],
    [ShippingAddress],
    [ShippingCity],
    --[PaymentType],
    [CustomerId],
    [EmployeeId]
)
VALUES 
(
    N'38 Yên Bái',
    N'Đà Nẵng',
    '1000001',
    'E1234'
)


INSERT INTO OrderDetails
(
    OrderId,
    ProductId,
    Quantity,
    Price,
    Discount
)
VALUES
(
    SCOPE_IDENTITY(),
    3,
    1,
    500,
    5
)