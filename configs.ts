const imageValidTypes = 'image/webp,image/jpeg,image/png,image/svg+xml,image/gif,image/bmp,image/tiff';
const imageValidTypesPattern = /^image\/(webp|jpeg|jpg|png|svg|gif|bmp|tiff)$/;
const dateFormats = {
	vnDate: 'DD/MM/YYYY',
	date: 'YYYY-MM-DD'
};

export const configs = {
	dateFormats,
	imageValidTypes,
	imageValidTypesPattern
};
