UPDATE orderItems
SET quantity = $2
WHERE id = $1;