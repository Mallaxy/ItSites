export function filtering(item, filter) {
	if (filter.blade && item.blade !== filter.blade) {
		return false;
	}
	if (filter.handle && item.handle !== filter.handle) {
		return false;
	}
	if (filter.length && item.length !== filter.length) {
		return false;
	}
	return true;
}