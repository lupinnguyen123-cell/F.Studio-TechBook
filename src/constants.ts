import { BrandDetail } from './types';

export const BRANDS: BrandDetail[] = [
  {
    id: 'Apple',
    name: 'Apple',
    subtitle: 'iPhone, iPad, Mac',
    gradient: 'from-[#f5f5f7] to-[#d2d2d7]',
    accentColor: '#137fec',
    textColor: 'text-slate-900',
    scripts: [
      { id: 's1', label: 'Tiếp nhận thiết bị', text: '"Dạ em chào anh/chị, em thấy máy mình đang gặp vấn đề này ạ. Để em kiểm tra kỹ lại xem nguyên nhân do đâu rồi em báo lại mình ngay nhé. Anh/chị yên tâm, bên em sẽ bảo quản máy mình cẩn thận nhất ạ."', type: 'premium' },
      { id: 's2', label: 'Giải thích tình trạng', text: '"Dạ lỗi này em kiểm tra thấy có thể do phần cứng bên trong rồi ạ. Để em gửi máy cho bộ phận kỹ thuật chuyên sâu xử lý, em sẽ cố gắng hỗ trợ mình lấy máy sớm nhất có thể nha."', type: 'standard' },
    ],
    processes: [
      { id: 'p1', title: 'Kiểm tra ngoại quan', description: 'Lưu ý chụp ảnh các vết trầy xước, móp méo trước khi nhận máy để tránh khiếu nại.', icon: 'Camera' },
      { id: 'p2', title: 'Sao lưu dữ liệu', description: 'Nhắc khách hàng sao lưu iCloud/Dữ liệu vì quá trình sửa chữa có thể làm mất dữ liệu.', icon: 'Cloud' },
      { id: 'p3', title: 'Vô hiệu hóa Find My', description: 'Yêu cầu khách tắt Tìm iPhone để có thể can thiệp phần cứng/phần mềm chính hãng.', icon: 'ShieldCheck' },
    ],
    dynamicWarnings: [
      { keywords: ['màn hình', 'sọc', 'vỡ', 'cảm ứng'], message: '⚠️ CẢNH BÁO: Thay màn hình iPhone có thể mất tính năng True Tone hoặc thông báo linh kiện không xác định nếu không sàng IC.' },
      { keywords: ['pin', 'sạc', 'nóng'], message: '⚠️ LƯU Ý: Kiểm tra tình trạng pin trong cài đặt. Pin dưới 80% hoặc bảo trì cần tư vấn thay thế.' },
      { keywords: ['mất nguồn', 'treo táo', 'restore'], message: '⚠️ QUAN TRỌNG: Máy treo táo có rủi ro mất dữ liệu 100% khi chạy lại phần mềm. Cần xác nhận với khách.' },
      { keywords: ['face id', 'camera'], message: '⚠️ NHẮC NHỞ: Face ID rất nhạy cảm với nước và va đập. Kiểm tra kỹ thấu kính trước khi tháo máy.' }
    ],
    library: [
      { id: 'lib-a1', symptom: 'Quên mật khẩu Macbook', diagnosis: 'Người dùng không nhớ mật khẩu đăng nhập hoặc mật khẩu Firmware.', solution: 'Sử dụng Apple ID để reset hoặc dùng Recovery Mode. Nếu có chip T2/M1-M3 cần mang qua trung tâm ủy quyền.', keywords: ['macbook', 'mật khẩu', 'pass'] },
      { id: 'lib-a2', symptom: 'Quên mật khẩu iCloud (Activation Lock)', diagnosis: 'Thiết bị bị khóa kích hoạt do không nhớ ID/Pass iCloud.', solution: 'Cung cấp hóa đơn mua hàng chính hãng để Apple hỗ trợ mở khóa, hoặc dùng tính năng iForge nếu là máy đời cũ.', keywords: ['icloud', 'khóa', 'activation'] },
      { id: 'lib-a3', symptom: 'iPhone hao pin, nóng máy nhanh', diagnosis: 'Pin bị chai hoặc có ứng dụng chạy ngầm gây xung đột hệ thống.', solution: 'Kiểm tra tình trạng pin trong Cài đặt. Nếu dưới 80% cần thay pin mới. Thử đặt lại cài đặt dòng 1.', keywords: ['pin', 'hao pin', 'nóng máy'] }
    ]
  },
  {
    id: 'Garmin',
    name: 'Garmin',
    subtitle: 'Fenix, Forerunner, Edge',
    gradient: 'from-[#2c3e50] to-[#000000]',
    accentColor: '#f59e0b',
    textColor: 'text-white',
    scripts: [
      { id: 'gs1', label: 'Tư vấn kỹ thuật', text: '"Dạ chào anh/chị, đồng hồ Garmin của mình đang gặp lỗi GPS đúng không ạ? Để em kiểm tra lại các cảm biến và phần mềm xem có bị xung đột không nha. Em sẽ báo kết quả cho mình sớm nhất ạ."', type: 'premium' },
    ],
    processes: [
      { id: 'gp1', title: 'Kiểm tra chống nước', description: 'Cảnh báo khách hàng về việc tháo máy có thể ảnh hưởng đến chỉ số chống nước nguyên bản.', icon: 'Activity' },
      { id: 'gp2', title: 'Xác minh phụ kiện', description: 'Ghi chú rõ các phụ kiện đi kèm như dây sạc, dây đeo để tránh thất lạc.', icon: 'Package' },
    ],
    dynamicWarnings: [
      { keywords: ['gps', 'bản đồ', 'vị trí'], message: '⚠️ KỸ THUẬT: Thử cập nhật EPO/CPE qua Garmin Express trước khi can thiệp phần cứng.' },
      { keywords: ['pin', 'nguồn', 'sập'], message: '⚠️ LƯU Ý: Pin Garmin thường dính liền vỏ hoặc màn hình. Rủi ro hỏng màn hình khi thay pin là có.' },
      { keywords: ['nước', 'bơi', 'lặn'], message: '⚠️ CẢNH BÁO: Máy vào nước cần sấy khô ngay và không được bấm nút để tránh chập mạch.' }
    ],
    library: [
      { id: 'lib-g1', symptom: 'Lỗi đồng bộ app Garmin Connect', diagnosis: 'Xung đột kết nối Bluetooth hoặc phiên bản app đã cũ.', solution: 'Quên thiết bị trong cài đặt BT của điện thoại, khởi động lại cả 2 và kết nối lại qua App.', keywords: ['đồng bộ', 'connect', 'bluetooth'] },
      { id: 'lib-g2', symptom: 'Đồng hồ Garmin hao pin đột ngột', diagnosis: 'Thường do bật các tính năng đo liên tục như Pulse Ox hoặc mặt đồng hồ bên thứ 3.', solution: 'Tắt Pulse Ox, sử dụng mặt đồng hồ mặc định để kiểm tra lại dòng tiêu thụ.', keywords: ['pin', 'hao pin', 'sụt nguồn'] }
    ]
  },
  {
    id: 'Android',
    name: 'Android',
    subtitle: 'Samsung, Pixel, OnePlus',
    gradient: 'from-[#3DDC84] to-[#073042]',
    accentColor: '#3DDC84',
    textColor: 'text-white',
    scripts: [
      { id: 'as1', label: 'Hỗ trợ phần mềm', text: '"Dạ em chào anh/chị, lỗi văng ứng dụng này thường do bản cập nhật mới chưa tương thích ạ. Để em hỗ trợ mình tối ưu lại hệ thống xem có hết không nha, anh/chị đợi em một chút ạ."', type: 'premium' },
    ],
    processes: [
      { id: 'ap1', title: 'Cảnh báo màn hình', description: 'Lưu ý các vết ám ố, sọc chỉ hoặc điểm chết trên màn hình Android trước khi nhận.', icon: 'Monitor' },
      { id: 'ap2', title: 'Tài khoản Google', description: 'Yêu cầu khách thoát tài khoản Google/Samsung để tránh bị khóa FRP sau khi khôi phục.', icon: 'User' },
    ],
    dynamicWarnings: [
      { keywords: ['màn hình', 'amoled', 'sọc', 'ám'], message: '⚠️ CẢNH BÁO: Màn hình AMOLED rất mỏng, rủi ro sọc màn khi tháo máy cũ là khá cao.' },
      { keywords: ['google', 'frp', 'khóa', 'mật khẩu'], message: '⚠️ LƯU Ý: Kiểm tra kỹ xem khách có nhớ tài khoản Google không trước khi Hard Reset.' },
      { keywords: ['vỏ', 'nắp lưng', 'kính'], message: '⚠️ NHẮC NHỞ: Nắp lưng Android thường bằng kính hoặc nhựa giả kính, dễ vỡ khi gia nhiệt tháo máy.' }
    ],
    library: [
      { id: 'lib-an1', symptom: 'Máy bị treo logo, không vào được màn hình chính', diagnosis: 'Xung đột phần mềm hệ thống hoặc lỗi phân vùng dữ liệu.', solution: 'Thử Wipe Cache trong Recovery, nếu không được cần chạy lại ROM.', keywords: ['treo logo', 'không vào được', 'phần mềm'] },
      { id: 'lib-an2', symptom: 'Cổng sạc lỏng, sạc lúc được lúc không', diagnosis: 'Cổng sạc bị mòn hoặc đóng bụi bẩn.', solution: 'Vệ sinh cổng sạc hoặc thay chân sạc mới.', keywords: ['sạc', 'lỏng', 'không nhận'] }
    ]
  }
];
