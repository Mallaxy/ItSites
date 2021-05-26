
export const fetchData = async () => {
	const response = await fetch("http://localhost:3000/items");
	const items = await response.json();
	return items
}