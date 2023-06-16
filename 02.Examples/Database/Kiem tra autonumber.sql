SELECT
    columnproperty(
        object_id('Products'),
        'Id',
        'IsIdentity'
    ) AS [Identity]