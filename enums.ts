export interface IFileTypes {
	[key: string]: IFileType;
}

export interface IFileType {
	key: string;
	label: string;
	extension: string;
	type: string;
}

const textTypes = {
	txt: {
		key: 'txt',
		label: 'TXT',
		extension: 'txt',
		type: 'text/plain'
	},
	html: {
		key: 'html',
		label: 'HTML',
		extension: 'html',
		type: 'text/html'
	},
	htm: {
		key: 'htm',
		label: 'HTM',
		extension: 'htm',
		type: 'text/html'
	},
	css: {
		key: 'css',
		label: 'CSS',
		extension: 'css',
		type: 'text/css '
	},
	js: {
		key: 'js',
		label: 'JS',
		extension: 'js',
		type: 'text/javascript '
	},
	md: {
		key: 'md',
		label: 'MD',
		extension: 'md',
		type: 'text/markdown '
	},
	xml: {
		key: 'xml',
		label: 'XML',
		extension: 'md',
		type: 'text/xml '
	},
	csv: {
		key: 'csv',
		label: 'CSV',
		extension: 'csv',
		type: 'text/csv '
	}
};

const imageTypes = {
	png: {
		key: 'png',
		label: 'PNG',
		extension: 'png',
		type: 'image/png'
	},
	jpg: {
		key: 'jpg',
		label: 'JPG',
		extension: 'jpg',
		type: 'image/jpg'
	},
	jpeg: {
		key: 'jpeg',
		label: 'JPEG',
		extension: 'jpeg',
		type: 'image/jpeg'
	},
	webp: {
		key: 'webp',
		label: 'WEBP',
		extension: 'webp',
		type: 'image/webp'
	},
	gif: {
		key: 'gif',
		label: 'GIF',
		extension: 'gif',
		type: 'image/gif'
	},
	bmp: {
		key: 'bmp',
		label: 'BMP',
		extension: 'bmp',
		type: 'image/bmp'
	},
	tiff: {
		key: 'tiff',
		label: 'TIFF',
		extension: 'tiff',
		type: 'image/tiff'
	},
	svg: {
		key: 'svg',
		label: 'SVG',
		extension: 'svg',
		type: 'image/svg'
	},
	ico: {
		key: 'ico',
		label: 'ICO',
		extension: 'ico',
		type: 'image/x-icon'
	}
};

const videoTypes = {
	mp4: {
		key: 'mp4',
		label: 'MP4',
		extension: 'mp4',
		type: 'video/mp4'
	},
	webm: {
		key: 'webm',
		label: 'WEBM',
		extension: 'webm',
		type: 'video/webm'
	},
	ogv: {
		key: 'ogv',
		label: 'OGV',
		extension: 'ogv',
		type: 'video/ogg'
	},
	avi: {
		key: 'avi',
		label: 'AVI',
		extension: 'avi',
		type: 'video/x-msvideo'
	},
	flv: {
		key: 'flv',
		label: 'FLV',
		extension: 'flv',
		type: 'video/x-flv'
	}
};

const audioTypes = {
	mp4: {
		key: 'mp4',
		label: 'MP4',
		extension: 'mp4',
		type: 'audio/mpeg'
	},
	oga: {
		key: 'oga',
		label: 'OGA',
		extension: 'oga',
		type: 'audio/ogg'
	},
	ogg: {
		key: 'ogg',
		label: 'OGG',
		extension: 'ogg',
		type: 'audio/ogg'
	},
	wav: {
		key: 'wav',
		label: 'WAV',
		extension: 'wav',
		type: 'audio/wav'
	},
	weba: {
		key: 'webpA',
		label: 'WEBA',
		extension: 'weba',
		type: 'audio/webm'
	}
};

const applicationTypes = {
	json: {
		key: 'json',
		label: 'JSON',
		extension: 'json',
		type: 'application/json'
	},
	oga: {
		key: 'xml',
		label: 'XML',
		extension: 'xml',
		type: 'application/xml'
	},
	pdf: {
		key: 'pdf',
		label: 'PDF',
		extension: 'pdf',
		type: 'application/pdf'
	},
	zip: {
		key: 'zip',
		label: 'ZIP',
		extension: 'zip',
		type: 'application/zip'
	},
	tar: {
		key: 'tar',
		label: 'TAR',
		extension: 'tar',
		type: 'application/x-tar'
	},
	gz: {
		key: 'gz',
		label: 'GZ',
		extension: 'gz',
		type: 'application/x-gz'
	},
	doc: {
		key: 'doc',
		label: 'DOC',
		extension: 'doc',
		type: 'application/msword'
	},
	docx: {
		key: 'docx',
		label: 'DOCX',
		extension: 'docx',
		type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
	},
	xls: {
		key: 'xls',
		label: 'XLS',
		extension: 'xls',
		type: 'application/vnd.ms-excel'
	},
	xlsx: {
		key: 'xlsx',
		label: 'XLSX',
		extension: 'xlsx',
		type: 'application/vnd.ms-powerpoint'
	},
	ppt: {
		key: 'ppt',
		label: 'PPT',
		extension: 'ppt',
		type: 'application/vnd.ms-powerpoint'
	},
	pptx: {
		key: 'pptx',
		label: 'PPTX',
		extension: 'pptx',
		type: 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
	}
};

export interface IStatus {
	key: string;
	label: string;
	color: string;
}

export interface IStatuses {
	[key: string]: IStatus;
}

const statuses = {
	finished: {
		key: 'finished',
		label: 'Kết thúc',
		color: 'success'
	},
	loading: {
		key: 'loading',
		label: 'Đang tải',
		color: 'warning'
	},
	inProgress: {
		key: 'inProgress',
		label: 'Đang thực hiện',
		color: 'warning'
	},
	ready: {
		key: 'ready',
		label: 'Sẵn sàng',
		color: 'processing'
	},
	removed: {
		key: 'removed',
		label: 'Đã xóa',
		color: 'error'
	}
};

export interface IGender {
	key: string;
	label: string;
	id: number;
}

export interface IGenders {
	[key: string]: IGender;
}

const genders = {
	male: {
		key: 'male',
		label: 'Nam',
		id: 0
	},
	female: {
		key: 'female',
		label: 'Nữ',
		id: 1
	},
	other: {
		key: 'other',
		label: 'Khác',
		id: 2
	}
};

export interface IContentPosition {
	key: string;
	label: string;
}

export interface IContentPositions {
	[key: string]: IContentPosition;
}

const contentPositions = {
	top: {
		key: 'top',
		label: 'Trên'
	},
	bottom: {
		key: 'bottom',
		label: 'Dưới'
	},
	left: {
		label: 'Trái',
		key: 'left'
	},
	right: {
		key: 'right',
		label: 'Phải'
	}
};

const statusCodes = {
	informational: {
		continue: 100,
		switchingProtocols: 101
	},
	success: {
		ok: 200,
		created: 201,
		accepted: 202,
		noContent: 204
	},
	redirection: {
		movedPermanently: 301,
		found: 302,
		notModified: 304
	},
	clientError: {
		badRequest: 400,
		unauthorized: 401,
		forbidden: 403,
		notFound: 404,
		methodNotAllowed: 405,
		conflict: 409
	},
	serverError: {
		internalServerError: 500,
		notImplemented: 501,
		badGateway: 502,
		serviceUnavailable: 503,
		gatewayTimeout: 504
	}
};

export const enums = {
	textTypes,
	imageTypes,
	videoTypes,
	audioTypes,
	applicationTypes,
	statuses,
	statusCodes,
	genders,
	contentPositions
};
