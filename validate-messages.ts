const typeTemplate = '${label} không phải là một ${type} hợp lệ';

export const validateMessages = {
	default: 'Lỗi xác thực trường đối với ${label}',
	required: 'Vui lòng nhập ${label}',
	enum: '${label} phải là một trong [${enum}]',
	whitespace: '${label} không thể là ký tự trống',
	date: {
		format: 'Định dạng ngày của ${label} không hợp lệ',
		parse: '${label} không thể được chuyển thành ngày',
		invalid: '${label} là ngày không hợp lệ'
	},
	types: {
		string: typeTemplate,
		method: typeTemplate,
		array: typeTemplate,
		object: typeTemplate,
		number: typeTemplate,
		date: typeTemplate,
		boolean: typeTemplate,
		integer: typeTemplate,
		float: typeTemplate,
		regexp: typeTemplate,
		email: typeTemplate,
		url: typeTemplate,
		hex: typeTemplate
	},
	string: {
		len: '${label} phải có ${len} ký tự',
		min: '${label} phải có ít nhất ${min} ký tự',
		max: '${label} phải có tối đa ${max} ký tự',
		range: '${label} phải có độ dài từ ${min}-${max} ký tự'
	},
	number: {
		len: '${label} phải bằng ${len}',
		min: '${label} phải có giá trị tối thiểu là ${min}',
		max: '${label} phải có giá trị tối đa là ${max}',
		range: '${label} phải có giá trị nằm trong khoảng ${min}-${max}'
	},
	array: {
		len: 'Phải có ${len} ${label}',
		min: 'Ít nhất ${min} ${label}',
		max: 'Tối đa ${max} ${label}',
		range: 'Số lượng ${label} phải nằm trong khoảng ${min}-${max}'
	},
	pattern: {
		mismatch: '${label} không khớp với mẫu ${pattern}'
	},
	confirmPasswordInvalid: 'Mật khẩu nhập lại không khớp'
};
