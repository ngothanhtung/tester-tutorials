IF EXISTS (
   SELECT * FROM [sys].[identity_columns]
   WHERE object_id = OBJECT_ID('Products')
      AND [name] = 'Id'
      AND [seed_value] = 1
      AND [increment_value] = 1)
BEGIN
   PRINT 'Status = PASSED'
END ELSE BEGIN
   PRINT 'Status = FAILED'
END