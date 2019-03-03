SELECT orderItems.id, orderItems.order_id, orderItems.part_id, parts.parts_id, parts.part_name, orderItems.quantity, orderItems.total_price 
FROM orderItems
INNER JOIN parts
ON orderItems.part_id = parts.id
WHERE order_id = ${order_id};    