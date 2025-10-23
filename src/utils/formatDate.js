const formatDate = (date) => {
	const d = date * 1000;
	const dateObj = new Date(d);
	const locale = 'ru';
	const options = {
		year: 'numeric',
		month: 'numeric',
		day: 'numeric',
		hour: '2-digit',
		minute: '2-digit',
	};

	// try {
	// // Attempt to create an Intl.DateTimeFormat object
	// const formatter = new Intl.DateTimeFormat('ru', options);
	// // Format the date if successful
	// return formatter.format(dateObj);
	// } catch (error) {
	// eslint-disable-next-line max-len
	// // Handle the error, e.g., log it, provide a fallback, or display a user-friendly message
	// console.error(`Error formatting date for locale "${locale}":`, error);
	//
	// // Example fallback: try with a more general locale (e.g., language-only)
	// if (locale.includes('-')) {
	// const languageOnly = locale.split('-')[0];
	// try {
	// const fallbackFormatter = new Intl.DateTimeFormat(languageOnly, options);
	// return fallbackFormatter.format(dateObj);
	// } catch (fallbackError) {
	// eslint-disable-next-line max-len
	// console.error(`Error with fallback locale "${languageOnly}":`, fallbackError);
	// // Final fallback: use a default locale or a simple string representation
	// return dateObj.toLocaleString();
	// }
	// } else {
	// // If no fallback possible, return a default representation
	// return dateObj.toLocaleString();
	// }
	// }

	return new Intl.DateTimeFormat(locale, options)
		.format(dateObj);
};

export default formatDate;
