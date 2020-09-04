# Who are the first 10 authors ordered by date_of_birth?
SELECT *
FROM authors
ORDER BY date_of_birth
LIMIT 10;

# What is the sales total for the author named “Lorelai Gilmore”?
SELECT SUM(quantity) as sales_total
FROM sale_items
JOIN books ON sale_items.book_id=books.id
JOIN authors ON books.author_id=authors.id
WHERE authors.name='Lorelai Gilmore';

# What are the top 10 performing authors, ranked by sales revenue?
SELECT authors.name, SUM(item_price) as revenue
FROM sale_items
JOIN books ON sale_items.book_id=books.id
JOIN authors ON books.author_id=authors.id
GROUP BY authors.name
ORDER BY revenue DESC
LIMIT 10;