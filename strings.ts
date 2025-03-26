import { errorCorrectionLevels } from 'qr-code-styling';

export const strings = {
  errors: {
    internalServerError: 'Lỗi máy chủ',
    invalidPhone: 'Số điện thoại không hợp lệ'
  },
  keys: {
    id: 'id',
    _id: '_id',
    key: 'key',
    system: 'system',
    token: 'token',
    auth: 'auth',
    notification: 'notification',
    sort: 'sort',
    menuId: 'menuId',
    name: 'name',
    displayStyle: 'displayStyle',
    title: 'title',
    titleAs: 'titleAs',
    subTitle: 'subTitle',
    subTitleAs: 'subTitleAs',
    description: 'description',
    descriptionAs: 'descriptionAs',
    parent: 'parent',
    parentId: 'parentId',
    isBanner: 'isBanner',
    slug: 'slug',
    padding: 'padding',
    mobilePadding: 'mobilePadding',
    displayOrder: 'displayOrder',
    isActive: 'isActive',
    isShowInHomePage: 'isShowInHomePage',
    action: 'action',
    backgroundColor: 'backgroundColor',
    background: 'background',
    backgroundURL: 'backgroundURL',
    mobileBackground: 'mobileBackground',
    mobileBackgroundURL: 'mobileBackgroundURL',
    image: 'image',
    imageName: 'imageName',
    imageURL: 'imageURL',
    hoverImage: 'hoverImage',
    hoverImageURL: 'hoverImageURL',
    mobileImage: 'mobileImage',
    mobileImageURL: 'mobileImageURL',
    mobileHoverImage: 'mobileHoverImage',
    mobileHoverImageURL: 'mobileHoverImageURL',
    imageHeight: 'imageHeight',
    imageWidth: 'imageWidth',
    mobileImageWidth: 'mobileImageWidth',
    mobileImageHeight: 'mobileImageHeight',
    imageAlt: 'imageAlt',
    thumbnail: 'thumbnail',
    thumbnailURL: 'thumbnailURL',
    fullThumbnailURL: 'fullThumbnailURL',
    thumbnailAlt: 'thumbnailAlt',
    content: 'content',
    categoryId: 'categoryId',
    category: 'category',
    categoryName: 'categoryName',
    createdDate: 'createdDate',
    metaTitle: 'metaTitle',
    metaKeyword: 'metaKeyword',
    metaDescription: 'metaDescription',
    canonical: 'canonical',
    username: 'username',
    password: 'password',
    newPassword: 'newPassword',
    confirmPassword: 'confirmPassword',
    fullName: 'fullName',
    avatar: 'avatar',
    gender: 'gender',
    birthday: 'birthday',
    address: 'address',
    email: 'email',
    phone: 'phone',
    url: 'url',
    isShowInHeader: 'isShowInHeader',
    isShowInFooter: 'isShowInFooter',
    isTargetBlank: 'isTargetBlank',
    FileRepository: 'FileRepository',
    imageBlock: 'imageBlock',
    dataFilename: 'dataFilename',
    dataHyphenFilename: 'data-filename',
    upcast: 'upcast',
    downcast: 'downcast',
    ImageUploadEditing: 'ImageUploadEditing',
    uploadComplete: 'uploadComplete',
    width: 'width',
    height: 'height',
    alt: 'alt',
    banners: 'banners',
    contents: 'contents',
    linkTo: 'linkTo',
    position: 'position',
    ads: 'ads',
    host: 'host',
    domain: 'domain',
    pathname: 'pathname',
    fullPath: 'fullPath',
    searchParams: 'searchParams',
    postContent: 'postContent',
    file: 'file',
    encode: 'encode',
    decode: 'decode',
    final: 'final',
    size: 'size',
    margin: 'margin',
    dotsStyle: 'dotsStyle',
    dotsColorType: 'dotsColorType',
    dotsGradientType: 'dotsGradientType',
    dotsStartColor: 'dotsStartColor',
    dotsEndColor: 'dotsEndColor',
    dotsGradientRotation: 'dotsGradientRotation',
    cornersSquareStyle: 'cornersSquareStyle',
    cornersSquareColorType: 'cornersSquareColorType',
    cornersSquareGradientType: 'cornersSquareGradientType',
    cornersSquareStartColor: 'cornersSquareStartColor',
    cornersSquareEndColor: 'cornersSquareEndColor',
    cornersSquareGradientRotation: 'cornersSquareGradientRotation',
    cornersDotStyle: 'cornersDotStyle',
    cornersDotColorType: 'cornersDotColorType',
    cornersDotGradientType: 'cornersDotGradientType',
    cornersDotStartColor: 'cornersDotStartColor',
    cornersDotEndColor: 'cornersDotEndColor',
    cornersDotGradientRotation: 'cornersDotGradientRotation',
    backgroundColorType: 'backgroundColorType',
    backgroundGradientType: 'backgroundGradientType',
    backgroundStartColor: 'backgroundStartColor',
    backgroundEndColor: 'backgroundEndColor',
    backgroundGradientRotation: 'backgroundGradientRotation',
    hideBackgroundDots: 'hideBackgroundDots',
    imageSize: 'imageSize',
    imageMargin: 'imageMargin',
    checked: 'checked',
    typeNumber: 'typeNumber',
    errorCorrectionLevel: 'errorCorrectionLevel'
  },
  patterns: {
    phone: /^[0-9]{10,11}$/
  },
  ads: 'Quảng cáo',
  adsCode: 'Mã quảng cáo',
  linkTo: 'Link to',
  view: 'Lượt xem',
  totalPosts: 'Tổng bài viết',
  totalCategories: 'Tổng danh mục',
  topViewPost: 'Top bài viết (Lượt xem)',
  displayStyle: 'Display style',
  title: 'Tiêu đề',
  titleAs: 'Tiêu đề như',
  titleAsTip: 'h1, h2, h3, h4, h5, div,...',
  subTitle: 'Tiêu đề phụ',
  padding: 'Padding',
  mobilePadding: 'Padding ở mobile',
  subTitleAs: 'Tiêu đề phụ như',
  description: 'Mô tả',
  descriptionAs: 'Mô tả như',
  comingSoon: 'Coming Soon',
  comingSoonContent: 'Trang này đang được phát triển. Vui lòng quay lại sau khi chúng tôi đã hoàn thành.',
  homePage: 'Trang chủ',
  login: 'Đăng nhập',
  category: 'Danh mục',
  categoryName: 'Tên danh mục',
  categoryParent: 'Danh mục  cha',
  categoryDeleteQuestion: 'Xóa danh mục này?',
  updateCategory: 'Cập nhật danh mục',
  createCategory: 'Thêm mới danh mục',
  categoryStatusUpdateQuestion: 'Cập nhật trạng thái hiển thị của danh mục này?',
  categoryShowInHomePageUpdateQuestion: 'Cập nhật trạng thái hiển thị tại trang chủ của danh mục này?',
  slug: 'Slug',
  displayOrder: 'Ưu tiên',
  status: 'Trạng thái',
  showInHomePage: 'Hiển thị tại trang chủ',
  tools: 'Công cụ',
  public: 'Công khai',
  draff: 'Nháp',
  logout: 'Đăng xuất',
  logoutModalTitle: 'Đăng xuất',
  logoutModalContent: 'Bạn muốn đăng xuất khỏi hệ thống?',
  ok: 'Đồng ý',
  cancel: 'Hủy',
  noHave: 'Không có',
  delete: 'Xóa',
  manage: 'Quản lý',
  update: 'Cập nhật',
  create: 'Thêm mới',
  save: 'Lưu',
  enter: 'Nhập ',
  enterFromName: 'Nhập từ tên',
  enterFromTitle: 'Nhập từ tiêu đề',
  select: 'Chọn ',
  post: 'Bài viết',
  postTitle: 'Tiêu đề bài viết',
  postStatusUpdateQuestion: 'Cập nhật trạng thái hiển thị của bài viết này?',
  postDeleteQuestion: 'Xóa bài viết này?',
  contentStatusUpdateQuestion: 'Cập nhật trạng thái hiển thị của nội dung này?',
  contentDeleteQuestion: 'Xóa nội dung này?',
  backgroundColor: 'Màu nền',
  background: 'Background',
  mobileBackground: 'Mobile background',
  image: 'Hình ảnh',
  hoverImage: 'Ảnh hover',
  mobileImage: 'Hình ảnh mobile',
  mobileHoverImage: 'Ảnh hover ở mobile',
  imageWidth: 'Chiều rộng ảnh',
  imageHeight: 'Chiều cao ảnh',
  mobileImageWidth: 'Chiều rộng ảnh ở mobile',
  mobileImageHeight: 'Chiều cao ảnh ở mobile',
  imageAlt: 'Alt hình ảnh',
  thumbnail: 'Thumbnail',
  thumbnailAlt: 'Thumbnail alt',
  content: 'Nội dung',
  createdDate: 'Ngày tạo',
  metaTitle: 'Meta title',
  metaKeyword: 'Meta keyword',
  metaDescription: 'Meta description',
  canonical: 'Canonical',
  info: 'Thông tin',
  seo: 'SEO',
  username: 'Tài khoản',
  password: 'Mật khẩu',
  newPassword: 'Mật khẩu mới',
  confirmPassword: 'Xác nhận mật khẩu',
  show: 'Hiển thị',
  hide: 'Ẩn',
  profile: 'Hồ sơ',
  myProfile: 'Hồ sơ',
  fullName: 'Họ và tên',
  avatar: 'Ảnh đại diện',
  gender: 'Giới tính',
  birthday: 'Ngày sinh',
  address: 'Địa chỉ',
  email: 'Email',
  phone: 'Số điện thoại',
  restore: 'Khôi phục',
  upload: 'Tải lên',
  updatePassword: 'Cập nhật mật khẩu',
  dashboard: 'Dashboard',
  reset: 'Khôi phục',
  search: 'Tìm kiếm',
  clearAllFilters: 'Khôi phục bộ lọc',
  showOrHideColumns: 'Ẩn/Hiện cột',
  showAll: 'Hiển thị tất cả',
  hideAll: 'Ẩn tất cả',
  sort: 'Sắp xếp',
  url: 'URL',
  createMenu: 'Tạo mới menu',
  updateMenu: 'Cập nhật menu',
  name: 'Tên',
  menu: 'Menu',
  menuParent: 'Menu cấp trên',
  showInHeader: 'Hiển thị trên Header',
  menuShowInHeaderUpdateQuestion: 'Cập nhật trạng thái hiển thị trên Header của menu này?',
  showInFooter: 'Hiển thị ở Footer',
  menuShowInFooterUpdateQuestion: 'Cập nhật trạng thái hiển thị ở Footer của menu này?',
  targetBlank: 'Target blank',
  menuTargetBlankUpdateQuestion: 'Cập nhật Target Blank của menu này?',
  active: 'Kích hoạt',
  inactive: 'Tắt',
  menuDeleteQuestion: 'Xóa menu này?',
  menuStatusUpdateQuestion: 'Cập nhật trạng thái hiển thị của menu này?',
  updateStatus: 'Cập nhật trạng thái hiển thị',
  contents: 'Nội dung',
  banners: 'Banners',
  position: 'Vị trí',
  searchPlaceholder: 'Từ khóa',
  notFoundContent: 'Địa chỉ không tồn tại hoặc đã bị xóa. Vui lòng quay lại',
  viewAll: 'Xem tất cả',
  categories: 'Danh mục',
  newPosts: 'Bài viết mới',
  otherPosts: 'Bài viết liên quan',
  gameOnline: 'Game Online',
  gameOffline: 'Game Offline',
  posts: 'Bài viết',
  viewCount: 'lượt xem',
  noResults: 'Không có kết quả',
  noPosts: 'Không có bài viết',
  copyToClipboardSuccess: 'Đã sao chép',
  copyToClipboardFail: 'Sao chép thất bại!',
  send: 'Gửi',
  draggerText: 'Nhấp hoặc kéo tệp vào khu vực này để tải lên',
  draggerHint: 'Hỗ trợ ảnh jpg, jpeg, png, gif, tiff, bmp, svg, webp',
  convert: 'Chuyển đổi',
  convertAllTo: 'Chuyển đổi tất cả thành',
  download: 'Tải xuống',
  result: 'Kết quả',
  base64: 'Base64',
  conversionSuccess: 'Chuyển đổi thành công',
  conversionFailed: 'Chuyển đổi không thành công',
  invalidBase64: 'Base64 không hợp lệ',
  copySuccess: 'Sao chép thành công',
  copyFailed: 'Sao chép không thành công',
  copyLinkSuccess: 'Sao chép liên kết thành công',
  copyLinkFailed: 'Sao chép liên kết không thành công',
  encode: 'Encode',
  decode: 'Decode',
  copy: 'Sao chép',
  copyLink: 'Sao chép liên kết',
  facebook: 'Facebook',
  twitter: 'Twitter',
  to: 'Đến',
  share: 'Chia sẽ',
  collapsed: 'Thu nhỏ',
  generate: 'Tạo',
  width: 'Chiều rộng',
  height: 'Chiều cao',
  size: 'Kích thước',
  margin: 'Margin',
  mainOptions: 'Tùy chọn chính',
  dotsStyle: 'Kiểu Dots',
  dotsOptions: 'Tùy chọn Dots',
  type: 'Kiểu',
  colorType: 'Kiểu màu',
  gradientType: 'Kiểu gradient',
  gradient: 'Gradient',
  startColor: 'Màu bắt đầu',
  endColor: 'Màu kết thúc',
  color: 'Màu',
  rotation: 'Rotation',
  cornersSquareOptions: 'Tùy chọn Corners Square',
  cornersSquareStyle: 'Kiểu Corners Square',
  cornersDotOptions: 'Tùy chọn Corners Dot',
  cornersDotStyle: 'Kiểu Corners Dot',
  imageOptions: 'Tùy chọn hình',
  backgroundOptions: 'Tùy chọn nền',
  hideBackgroundDots: 'Ẩn nền dots',
  version: 'Phiên bản',
  errorCorrectionLevel: 'Mức độ sửa lỗi',
  qrOptions: 'Tùy chọn QR'
};
