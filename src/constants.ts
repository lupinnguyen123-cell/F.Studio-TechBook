import { BrandDetail } from './types';

export const BRANDS: BrandDetail[] = [
  {
    id: 'Apple',
    name: 'Apple',
    subtitle: 'iPhone, iPad, Mac, Watch, AirPods',
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
      { keywords: ['face id', 'camera'], message: '⚠️ NHẮC NHỞ: Face ID rất nhạy cảm với nước và va đập. Kiểm tra kỹ thấu kính trước khi tháo máy.' },
      { keywords: ['apple watch', 'đồng hồ'], message: '⚠️ LƯU Ý: Apple Watch dán/thay kính có thể ảnh hưởng độ kín chống nước nguyên bản. Cần thông báo trước cho khách.' },
      { keywords: ['airpods', 'tai nghe'], message: '⚠️ LƯU Ý: Reset AirPods sẽ xóa lịch sử ghép đôi trên toàn bộ thiết bị Apple ID của khách, cần khách kết nối lại từ đầu.' }
    ],
    library: [
      {
        id: 'lib-a1', symptom: 'Quên mật khẩu Macbook',
        diagnosis: 'Người dùng không nhớ mật khẩu đăng nhập hoặc mật khẩu Firmware.',
        solution: '🔍 CHẨN ĐOÁN & LOẠI TRỪ: Xác định là quên mật khẩu ĐĂNG NHẬP (macOS) hay mật khẩu FIRMWARE (khởi động bằng Option). Kiểm tra máy có chip T2/M1-M3 không.\n\n⚡ XỬ LÝ TẠI CHỖ: Dùng Apple ID đã liên kết để reset qua màn hình đăng nhập, hoặc khởi động vào Recovery Mode (Cmd+R) để reset qua Terminal.\n\n💬 KỊCH BẢN TƯ VẤN: "Dạ máy mình có thể khôi phục lại được ạ, em cần xác minh anh/chị là chủ sở hữu qua Apple ID trước khi hỗ trợ."\n\n📦 LƯU Ý TTBH: Nếu là mật khẩu FIRMWARE trên máy có chip T2/M1-M3 và khách không có hóa đơn chứng minh sở hữu, phải chuyển TTBH chính hãng xử lý.',
        keywords: ['macbook', 'mật khẩu', 'pass']
      },
      {
        id: 'lib-a2', symptom: 'Quên mật khẩu iCloud (Activation Lock)',
        diagnosis: 'Thiết bị bị khóa kích hoạt do không nhớ ID/Pass iCloud.',
        solution: '🔍 CHẨN ĐOÁN & LOẠI TRỪ: Xác nhận máy đang ở màn hình khóa kích hoạt (Activation Lock), kiểm tra khách còn giữ hóa đơn mua hàng hoặc email Apple ID không.\n\n⚡ XỬ LÝ TẠI CHỖ: Hướng dẫn khách truy cập iforgot.apple.com để tự khôi phục nếu còn nhớ thông tin đăng nhập.\n\n💬 KỊCH BẢN TƯ VẤN: "Đây là tính năng bảo vệ máy khỏi mất cắp ạ, mình cung cấp hóa đơn mua hàng để Apple xác minh chủ sở hữu và mở khóa giúp mình nhé."\n\n📦 LƯU Ý TTBH: Không có hóa đơn hợp lệ và khách không nhớ Apple ID — cần gửi TTBH kèm chứng từ mua hàng để Apple xử lý, không có cách nào bỏ qua khóa này.',
        keywords: ['icloud', 'khóa', 'activation']
      },
      {
        id: 'lib-a3', symptom: 'iPhone hao pin, nóng máy nhanh',
        diagnosis: 'Pin bị chai hoặc có ứng dụng chạy ngầm gây xung đột hệ thống.',
        solution: '🔍 CHẨN ĐOÁN & LOẠI TRỪ: Kiểm tra tình trạng pin (Cài đặt > Pin > Tình trạng pin) và xem ứng dụng nào tiêu hao pin nhiều trong 24h qua.\n\n⚡ XỬ LÝ TẠI CHỖ: Nếu pin trên 80%, thử tắt bớt ứng dụng chạy nền và đặt lại cài đặt dòng (Reset All Settings, không mất dữ liệu).\n\n💬 KỊCH BẢN TƯ VẤN: "Em kiểm tra thấy pin mình đã xuống thấp rồi ạ, để em tối ưu lại phần mềm/tư vấn thay pin mới giúp mình dùng bền hơn nhé."\n\n📦 LƯU Ý TTBH: Pin dưới 80% hoặc chai nặng — tư vấn thay pin chính hãng, không cần gửi TTBH sâu nếu chỉ thay pin đơn thuần.',
        keywords: ['pin', 'hao pin', 'nóng máy']
      },
      {
        id: 'lib-a4', symptom: 'iPhone không sạc được, cắm sạc không lên nguồn',
        diagnosis: 'Cổng sạc bám bụi/oxi hóa, cáp sạc lỗi, hoặc IC nguồn có vấn đề.',
        solution: '🔍 CHẨN ĐOÁN & LOẠI TRỪ: Thử cáp/củ sạc khác, soi đèn pin kiểm tra cổng sạc có bụi/xơ vải không.\n\n⚡ XỬ LÝ TẠI CHỖ: Vệ sinh cổng sạc bằng tăm tre khô, thử sạc lại. Nếu vẫn không lên nguồn, kiểm tra dấu hiệu vào nước (LCI trong khay SIM).\n\n💬 KỊCH BẢN TƯ VẤN: "Dạ em đã vệ sinh và kiểm tra cổng sạc cho mình rồi ạ, nếu vẫn chưa sạc được thì khả năng cao lỗi bên trong, em cần kiểm tra sâu hơn."\n\n📦 LƯU Ý TTBH: Vệ sinh xong vẫn không lên nguồn — khả năng lỗi IC nguồn, cần gửi TTBH kiểm tra bo mạch.',
        keywords: ['sạc', 'không lên nguồn', 'cổng sạc', 'không sạc được']
      },
      {
        id: 'lib-a5', symptom: 'Loa iPhone rè, nghe gọi rột rẹt hoặc nhỏ tiếng',
        diagnosis: 'Màng loa dính bụi/nước, hoặc có thể do cấu hình âm thanh bị lỗi sau cập nhật.',
        solution: '🔍 CHẨN ĐOÁN & LOẠI TRỪ: Phát nhạc to để xác định rè ở loa thoại hay loa ngoài, một bên hay cả hai.\n\n⚡ XỬ LÝ TẠI CHỖ: Vệ sinh lưới loa bằng cọ mềm, kiểm tra chế độ Loa ngoài trong Cài đặt xem có xung đột không.\n\n💬 KỊCH BẢN TƯ VẤN: "Em đã vệ sinh loa và kiểm tra cài đặt âm thanh cho mình rồi ạ, nếu vẫn rè thì màng loa có thể đã hỏng cần thay mới."\n\n📦 LƯU Ý TTBH: Vệ sinh không hết rè — cần thay màng loa, có thể xử lý tại chỗ nếu có linh kiện, không nhất thiết phải gửi TTBH.',
        keywords: ['loa', 'rè', 'nhỏ tiếng', 'nghe gọi']
      },
      {
        id: 'lib-a6', symptom: 'Face ID không nhận diện khuôn mặt',
        diagnosis: 'Cảm biến TrueDepth bị che khuất, kính cường lực dày, hoặc lỗi phần mềm Face ID.',
        solution: '🔍 CHẨN ĐOÁN & LOẠI TRỪ: Kiểm tra camera trước có bị che bởi cường lực dày không, xác nhận cụm camera có từng bị thay ngoài chính hãng chưa.\n\n⚡ XỬ LÝ TẠI CHỖ: Gỡ thử cường lực che camera, vào Cài đặt xóa Face ID và thiết lập lại từ đầu.\n\n💬 KỊCH BẢN TƯ VẤN: "Em thử thiết lập lại Face ID cho mình xem có nhận được không nhé, nếu cụm camera từng thay ngoài thì máy sẽ báo linh kiện không xác định ạ."\n\n📦 LƯU Ý TTBH: Camera trước từng thay ngoài chính hãng — Face ID sẽ không bao giờ khôi phục được, cần giải thích rõ với khách trước khi nhận máy.',
        keywords: ['face id', 'không nhận diện', 'khuôn mặt']
      },
      {
        id: 'lib-a7', symptom: 'iPhone bị vô hiệu hóa (iPhone Unavailable) do nhập sai mật khẩu',
        diagnosis: 'Nhập sai passcode quá số lần cho phép, máy tự khóa theo thời gian tăng dần.',
        solution: '🔍 CHẨN ĐOÁN & LOẠI TRỪ: Xác nhận máy đang ở màn hình "iPhone Unavailable", kiểm tra phiên bản iOS (từ 15.2 trở lên có Erase iPhone ngay màn hình khóa).\n\n⚡ XỬ LÝ TẠI CHỖ: Nếu có mạng và từ iOS 15.2+, dùng tùy chọn "Erase iPhone" ngay màn hình khóa để xóa và khôi phục từ backup.\n\n💬 KỊCH BẢN TƯ VẤN: "Máy mình bị khóa do nhập sai mật khẩu nhiều lần ạ, nếu mình có backup thì dữ liệu vẫn khôi phục lại được sau khi xóa máy."\n\n📦 LƯU Ý TTBH: Không có backup và không nhớ Apple ID — dữ liệu sẽ mất hoàn toàn khi khôi phục, cần xác nhận rõ với khách trước khi thao tác.',
        keywords: ['vô hiệu hóa', 'unavailable', 'sai mật khẩu', 'khóa máy']
      },
      {
        id: 'lib-a8', symptom: 'MacBook không lên nguồn, đèn sạc không sáng',
        diagnosis: 'Sạc/cáp lỗi, pin cạn sâu, hoặc lỗi mạch nguồn logic board.',
        solution: '🔍 CHẨN ĐOÁN & LOẠI TRỪ: Thử cáp/củ sạc chính hãng khác, kiểm tra đèn cổng sạc MagSafe có sáng không.\n\n⚡ XỬ LÝ TẠI CHỖ: Cắm sạc giữ tối thiểu 30 phút (phòng cạn pin sâu), sau đó nhấn giữ nguồn 10 giây để khởi động lại.\n\n💬 KỊCH BẢN TƯ VẤN: "Máy mình có thể chỉ bị cạn pin sâu thôi ạ, em đang sạc và thử khởi động lại xem có lên nguồn không nhé."\n\n📦 LƯU Ý TTBH: Sạc 30 phút vẫn không lên nguồn — cần gửi TTBH kiểm tra mạch nguồn logic board.',
        keywords: ['macbook', 'không lên nguồn', 'không sạc', 'đèn sạc']
      },
      {
        id: 'lib-a9', symptom: 'MacBook chạy chậm, quạt kêu to liên tục',
        diagnosis: 'Bộ nhớ đầy, quá nhiều ứng dụng chạy nền, hoặc quạt tản nhiệt bám bụi.',
        solution: '🔍 CHẨN ĐOÁN & LOẠI TRỪ: Mở Activity Monitor xem tiến trình chiếm CPU cao, kiểm tra dung lượng ổ đĩa còn trống.\n\n⚡ XỬ LÝ TẠI CHỖ: Dọn bớt dung lượng (cần còn tối thiểu 15-20% trống), khởi động lại ở Safe Mode để loại trừ xung đột phần mềm.\n\n💬 KỊCH BẢN TƯ VẤN: "Em đang kiểm tra xem có phải do đầy ổ cứng hoặc ứng dụng chạy ngầm gây chậm máy không ạ, mình đợi em chút nhé."\n\n📦 LƯU Ý TTBH: Quạt kêu to bất thường kể cả khi máy nhàn rỗi — có thể cần vệ sinh tản nhiệt tại TTBH.',
        keywords: ['macbook', 'chạy chậm', 'quạt kêu to', 'nóng máy']
      },
      {
        id: 'lib-a10', symptom: 'iPad không nhận sạc hoặc sạc rất chậm',
        diagnosis: 'Củ sạc công suất thấp, cáp lỗi, hoặc cổng sạc bám bụi.',
        solution: '🔍 CHẨN ĐOÁN & LOẠI TRỪ: Kiểm tra công suất củ sạc (tối thiểu 20W cho iPad Pro), soi cổng sạc xem có bụi/xơ vải không.\n\n⚡ XỬ LÝ TẠI CHỖ: Dùng đúng củ sạc công suất phù hợp, vệ sinh cổng sạc, thử cáp khác.\n\n💬 KỊCH BẢN TƯ VẤN: "Dạ có thể do củ sạc chưa đủ công suất cho máy mình ạ, em thử đổi sạc đúng chuẩn xem có cải thiện không nhé."\n\n📦 LƯU Ý TTBH: Đã đổi sạc/cáp và vệ sinh vẫn chập chờn — khả năng chân cổng sạc cong/hỏng, cần gửi TTBH kiểm tra.',
        keywords: ['ipad', 'không nhận sạc', 'sạc chậm']
      },
      {
        id: 'lib-a11', symptom: 'Wifi hoặc Bluetooth chập chờn, tự ngắt kết nối',
        diagnosis: 'Xung đột phần mềm sau cập nhật iOS, hoặc lỗi anten/IC sóng.',
        solution: '🔍 CHẨN ĐOÁN & LOẠI TRỪ: Kiểm tra máy vừa cập nhật iOS gần đây không, xác nhận máy có từng rơi vỡ/vào nước không.\n\n⚡ XỬ LÝ TẠI CHỖ: Bật/tắt lại Wifi-Bluetooth, quên mạng và kết nối lại; nếu không hết, Đặt lại Cài đặt Mạng (không mất dữ liệu).\n\n💬 KỊCH BẢN TƯ VẤN: "Em đã thử đặt lại cài đặt mạng cho mình rồi ạ, đa số trường hợp là do xung đột phần mềm sau cập nhật thôi."\n\n📦 LƯU Ý TTBH: Máy từng rơi vỡ/vào nước và vẫn mất kết nối sau khi reset — khả năng lỗi phần cứng anten, cần gửi TTBH.',
        keywords: ['wifi', 'bluetooth', 'mất kết nối', 'chập chờn']
      },
      {
        id: 'lib-a12', symptom: 'iPhone bị vào nước, có dấu hiệu ẩm (LCI đỏ)',
        diagnosis: 'Chỉ báo tiếp xúc chất lỏng (Liquid Contact Indicator) đã chuyển đỏ, nước có thể đã vào bo mạch.',
        solution: '🔍 CHẨN ĐOÁN & LOẠI TRỪ: Kiểm tra chỉ báo LCI trong khay SIM đã chuyển đỏ chưa để xác nhận với khách.\n\n⚡ XỬ LÝ TẠI CHỖ: KHÔNG sạc/bấm nguồn ngay. Lau khô ngoại quan, để máy nơi thoáng khí tối thiểu 24-48 giờ, không dùng nhiệt cao.\n\n💬 KỊCH BẢN TƯ VẤN: "Máy mình cần để khô tự nhiên trước ạ, em khuyên mình chưa nên sạc hoặc bật máy trong 24-48 giờ tới để tránh chập mạch."\n\n📦 LƯU Ý TTBH: Sau thời gian để khô vẫn lỗi (không lên nguồn, chập chờn) — cần gửi TTBH vệ sinh bo mạch chuyên sâu.',
        keywords: ['vào nước', 'ẩm', 'lci', 'rơi nước']
      },
      {
        id: 'lib-a13', symptom: 'Màn hình iPhone bị vỡ kính nhưng cảm ứng vẫn dùng được',
        diagnosis: 'Kính cường lực bên ngoài nứt/vỡ nhưng lớp cảm ứng và hiển thị bên trong chưa bị ảnh hưởng.',
        solution: '🔍 CHẨN ĐOÁN & LOẠI TRỪ: Kiểm tra cảm ứng và hiển thị còn hoạt động bình thường không dù kính đã nứt/vỡ.\n\n⚡ XỬ LÝ TẠI CHỖ: Dán tạm cường lực để tránh vỡ lan rộng và bảo vệ tay khách trong lúc chờ thay.\n\n💬 KỊCH BẢN TƯ VẤN: "Máy mình vỡ kính ngoài nhưng cảm ứng vẫn dùng tốt ạ, em tư vấn thay cụm màn hình chính hãng để giữ đúng màu sắc và True Tone nhé."\n\n📦 LƯU Ý TTBH: Có thể thay màn hình tại chỗ nếu có linh kiện; chỉ cần gửi TTBH nếu khách muốn giữ zin 100% chính hãng Apple.',
        keywords: ['màn hình vỡ', 'vỡ kính', 'nứt màn hình']
      },
      {
        id: 'lib-a14', symptom: 'iPhone báo đầy bộ nhớ dù đã xóa bớt ứng dụng/ảnh',
        diagnosis: 'Dữ liệu cache hệ thống, tin nhắn/video đính kèm, hoặc ảnh chưa đồng bộ xong iCloud vẫn chiếm dung lượng.',
        solution: '🔍 CHẨN ĐOÁN & LOẠI TRỪ: Vào Cài đặt > Cài đặt chung > Dung lượng iPhone để xem loại dữ liệu chiếm nhiều nhất.\n\n⚡ XỬ LÝ TẠI CHỖ: Bật "Tối ưu hóa bộ nhớ" cho ảnh, xóa bớt tin nhắn có video/ảnh cũ (thường bị bỏ sót).\n\n💬 KỊCH BẢN TƯ VẤN: "Em kiểm tra thấy phần lớn dung lượng máy mình do tin nhắn có ảnh/video cũ ạ, mình cho em dọn bớt để máy chạy mượt hơn nhé."\n\n📦 LƯU Ý TTBH: Đây là vấn đề phần mềm thuần túy, không cần gửi TTBH.',
        keywords: ['đầy bộ nhớ', 'hết dung lượng', 'bộ nhớ']
      },
      {
        id: 'lib-a15', symptom: 'Apple Watch không lên nguồn hoặc không sạc được',
        diagnosis: 'Đế sạc từ tính không áp sát, cạn pin sâu, hoặc lỗi mạch nguồn.',
        solution: '🔍 CHẨN ĐOÁN & LOẠI TRỪ: Kiểm tra đế sạc và mặt sau đồng hồ có khô ráo, sạch sẽ không (nước/mồ hôi cản từ tính).\n\n⚡ XỬ LÝ TẠI CHỖ: Lau khô, thử sạc chính hãng khác, cắm giữ tối thiểu 30 phút phòng cạn pin sâu.\n\n💬 KỊCH BẢN TƯ VẤN: "Em đang thử sạc lại cho đồng hồ mình bằng sạc chính hãng khác ạ, có thể chỉ do đế sạc bị bẩn thôi."\n\n📦 LƯU Ý TTBH: Sạc 30 phút với sạc khác vẫn không lên nguồn — cần gửi TTBH kiểm tra mạch nguồn.',
        keywords: ['apple watch', 'không sạc', 'không lên nguồn']
      },
      {
        id: 'lib-a16', symptom: 'Apple Watch báo lỗi khi ghép đôi với iPhone',
        diagnosis: 'Xung đột dữ liệu ghép đôi cũ, sai phiên bản watchOS/iOS tương thích, hoặc Bluetooth lỗi.',
        solution: '🔍 CHẨN ĐOÁN & LOẠI TRỪ: Xác nhận iPhone đã cập nhật iOS mới nhất, kiểm tra đồng hồ có từng ghép với máy khác chưa.\n\n⚡ XỬ LÝ TẠI CHỖ: Unpair hoàn toàn trên máy cũ (hoặc qua iCloud.com nếu không còn máy), khởi động lại cả 2 thiết bị rồi ghép lại.\n\n💬 KỊCH BẢN TƯ VẤN: "Đồng hồ mình cần được gỡ khỏi tài khoản cũ trước khi ghép với máy mới ạ, em hỗ trợ mình làm luôn nhé."\n\n📦 LƯU Ý TTBH: Vấn đề phần mềm thuần túy, không cần gửi TTBH.',
        keywords: ['apple watch', 'ghép đôi', 'pairing', 'kết nối']
      },
      {
        id: 'lib-a17', symptom: 'Kính Apple Watch bị nứt hoặc trầy nặng',
        diagnosis: 'Va đập mạnh làm nứt kính Ion-X/Sapphire, chưa chắc ảnh hưởng màn hình cảm ứng bên trong.',
        solution: '🔍 CHẨN ĐOÁN & LOẠI TRỪ: Kiểm tra cảm ứng/hiển thị còn hoạt động bình thường không dù kính nứt.\n\n⚡ XỬ LÝ TẠI CHỖ: Dán tạm bảo vệ tránh mảnh vỡ rơi ra, tư vấn thay kính/màn hình chính hãng.\n\n💬 KỊCH BẢN TƯ VẤN: "Kính đồng hồ mình bị nứt do va đập ạ, em tư vấn thay kính chính hãng, lưu ý sau khi thay có thể ảnh hưởng độ kín chống nước nhé."\n\n📦 LƯU Ý TTBH: Thay kính rời có ảnh hưởng chuẩn chống nước — cần thông báo rõ và ghi vào phiếu trước khi làm.',
        keywords: ['apple watch', 'kính nứt', 'vỡ kính', 'trầy']
      },
      {
        id: 'lib-a18', symptom: 'AirPods chỉ một bên có tiếng hoặc mất kết nối một bên',
        diagnosis: 'Lệch pin giữa 2 bên tai, bám bụi ở lưới loa, hoặc lỗi đồng bộ cặp đôi.',
        solution: '🔍 CHẨN ĐOÁN & LOẠI TRỪ: Kiểm tra pin từng bên tai trong app, xác nhận vấn đề là mất tiếng hay mất kết nối bên đó.\n\n⚡ XỬ LÝ TẠI CHỖ: Đặt cả 2 tai vào hộp, đóng nắp 30 giây rồi mở lại để đồng bộ, vệ sinh lưới loa bằng cọ khô.\n\n💬 KỊCH BẢN TƯ VẤN: "Em đã đồng bộ lại AirPods cho mình rồi ạ, nếu 1 bên vẫn yếu hơn hẳn thì khả năng bên đó đã chai pin cần thay."\n\n📦 LƯU Ý TTBH: Đồng bộ lại vẫn không cải thiện — cần gửi TTBH kiểm tra/thay tai bị lỗi.',
        keywords: ['airpods', 'một bên', 'mất kết nối', 'mất tiếng']
      },
      {
        id: 'lib-a19', symptom: 'Hộp sạc AirPods không sạc được hoặc đèn báo không sáng',
        diagnosis: 'Cổng sạc/tiếp điểm hộp bám bẩn, cáp/đế sạc lỗi, hoặc pin hộp đã chai.',
        solution: '🔍 CHẨN ĐOÁN & LOẠI TRỪ: Kiểm tra chấu tiếp điểm kim loại trong hộp có bám bẩn không, thử cáp/đế sạc khác.\n\n⚡ XỬ LÝ TẠI CHỖ: Vệ sinh chấu tiếp điểm bằng tăm bông khô hoặc cồn isopropyl, sạc lại với AirPods đặt trong hộp.\n\n💬 KỊCH BẢN TƯ VẤN: "Em đã vệ sinh chấu sạc trong hộp cho mình rồi ạ, mình thử sạc lại xem đèn báo đã sáng chưa nhé."\n\n📦 LƯU Ý TTBH: Vệ sinh và đổi sạc vẫn không lên đèn — cần gửi TTBH kiểm tra pin/mạch hộp sạc.',
        keywords: ['airpods', 'hộp sạc', 'không sạc', 'đèn không sáng']
      },
      {
        id: 'lib-a20', symptom: 'AirPods bị rè hoặc âm thanh rột rẹt khi nghe',
        diagnosis: 'Lưới loa bám bụi/ráy tai, xung đột Bluetooth, hoặc màng loa ẩm.',
        solution: '🔍 CHẨN ĐOÁN & LOẠI TRỪ: Kiểm tra lưới loa có bám bụi/ráy tai không, xác nhận rè liên tục hay chỉ khi di chuyển xa thiết bị.\n\n⚡ XỬ LÝ TẠI CHỖ: Vệ sinh lưới loa bằng cọ khô (không dùng vật nhọn), quên thiết bị trong Bluetooth và ghép lại từ đầu.\n\n💬 KỊCH BẢN TƯ VẤN: "Em đã vệ sinh và kết nối lại AirPods cho mình rồi ạ, nếu vừa qua khu vực ẩm thì để khô tự nhiên thêm nhé."\n\n📦 LƯU Ý TTBH: Vệ sinh và kết nối lại vẫn rè — khả năng màng loa ẩm/hỏng, cần gửi TTBH.',
        keywords: ['airpods', 'rè', 'rột rẹt', 'âm thanh']
      }
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
      {
        id: 'lib-g1', symptom: 'Lỗi đồng bộ app Garmin Connect',
        diagnosis: 'Xung đột kết nối Bluetooth hoặc phiên bản app đã cũ.',
        solution: '🔍 CHẨN ĐOÁN & LOẠI TRỪ: Kiểm tra phiên bản app Garmin Connect có phải bản mới nhất không, xác nhận Bluetooth điện thoại đang bật.\n\n⚡ XỬ LÝ TẠI CHỖ: Quên thiết bị trong cài đặt Bluetooth điện thoại, khởi động lại cả 2 thiết bị rồi kết nối lại qua app.\n\n💬 KỊCH BẢN TƯ VẤN: "Em đã kết nối lại đồng hồ với điện thoại mình rồi ạ, mình thử đồng bộ lại xem đã lên dữ liệu chưa nhé."\n\n📦 LƯU Ý TTBH: Vấn đề phần mềm thuần túy, không cần gửi TTBH.',
        keywords: ['đồng bộ', 'connect', 'bluetooth']
      },
      {
        id: 'lib-g2', symptom: 'Đồng hồ Garmin hao pin đột ngột',
        diagnosis: 'Thường do bật các tính năng đo liên tục như Pulse Ox hoặc mặt đồng hồ bên thứ 3.',
        solution: '🔍 CHẨN ĐOÁN & LOẠI TRỪ: Kiểm tra các tính năng đo liên tục đang bật (Pulse Ox, đo nhịp tim 24/7), xác nhận có dùng mặt đồng hồ bên thứ 3 không.\n\n⚡ XỬ LÝ TẠI CHỖ: Tắt Pulse Ox, chuyển về mặt đồng hồ mặc định để kiểm tra lại dòng tiêu thụ.\n\n💬 KỊCH BẢN TƯ VẤN: "Em tắt bớt vài tính năng đo liên tục cho mình rồi ạ, mình theo dõi thêm 1-2 ngày xem pin có cải thiện không nhé."\n\n📦 LƯU Ý TTBH: Đã tắt hết tính năng ngốn pin mà vẫn hao nhanh bất thường — cần gửi TTBH kiểm tra pin.',
        keywords: ['pin', 'hao pin', 'sụt nguồn']
      },
      {
        id: 'lib-g3', symptom: 'Garmin không lên nguồn, màn hình đen hoàn toàn',
        diagnosis: 'Pin cạn sâu cần thời gian sạc nạp trước khi hiển thị, hoặc lỗi mạch nguồn.',
        solution: '🔍 CHẨN ĐOÁN & LOẠI TRỪ: Kiểm tra chân sạc từ tính có gỉ/bẩn không, xác nhận máy có khả năng cạn pin sâu (để lâu không dùng).\n\n⚡ XỬ LÝ TẠI CHỖ: Cắm sạc chính hãng tối thiểu 15-30 phút trước khi thử bật lại.\n\n💬 KỊCH BẢN TƯ VẤN: "Đồng hồ mình có thể chỉ cạn pin sâu thôi ạ, em đang sạc thử trước khi kết luận nhé."\n\n📦 LƯU Ý TTBH: Sạc lâu vẫn đen màn hình — cần gửi TTBH kiểm tra mạch nguồn.',
        keywords: ['không lên nguồn', 'màn hình đen', 'mất nguồn']
      },
      {
        id: 'lib-g4', symptom: 'Garmin đo nhịp tim không chính xác hoặc không đo được',
        diagnosis: 'Đeo lỏng, cảm biến bám bẩn/mồ hôi khô, hoặc hình xăm/lông tay cản quang học.',
        solution: '🔍 CHẨN ĐOÁN & LOẠI TRỪ: Kiểm tra cách đeo (độ cao, độ chặt), xác nhận cảm biến mặt sau có sạch không.\n\n⚡ XỬ LÝ TẠI CHỖ: Hướng dẫn đeo cao hơn cổ tay 1 đốt ngón tay, vệ sinh cảm biến, cập nhật phần mềm mới nhất.\n\n💬 KỊCH BẢN TƯ VẤN: "Em hướng dẫn mình đeo đúng vị trí và đã cập nhật phần mềm rồi ạ, thuật toán đo nhịp tim sẽ chính xác hơn sau bản vá này."\n\n📦 LƯU Ý TTBH: Đây thường là vấn đề cách dùng/phần mềm, hiếm khi cần gửi TTBH.',
        keywords: ['nhịp tim', 'đo sai', 'cảm biến']
      },
      {
        id: 'lib-g5', symptom: 'Garmin bị treo logo khi khởi động, không vào được giao diện chính',
        diagnosis: 'Lỗi phần mềm hệ thống hoặc xung đột sau khi cập nhật dở dang.',
        solution: '🔍 CHẨN ĐOÁN & LOẠI TRỪ: Xác nhận máy vừa cập nhật phần mềm dở dang hay tự nhiên treo.\n\n⚡ XỬ LÝ TẠI CHỖ: Soft Reset — giữ nút nguồn 10-15 giây đến khi tắt hẳn rồi bật lại.\n\n💬 KỊCH BẢN TƯ VẤN: "Em đang khởi động lại đồng hồ cho mình ạ, đa số trường hợp treo logo là do phần mềm và sẽ hết sau bước này."\n\n📦 LƯU Ý TTBH: Soft Reset không hết, cần khôi phục cài đặt gốc qua Garmin Express — báo trước với khách sẽ mất dữ liệu chưa đồng bộ.',
        keywords: ['treo logo', 'không khởi động được', 'đơ máy']
      },
      {
        id: 'lib-g6', symptom: 'Garmin không bắt được GPS hoặc định vị sai vị trí ngoài trời',
        diagnosis: 'Dữ liệu vệ tinh (EPO/CPE) đã cũ, hoặc đang ở khu vực nhiều vật cản tín hiệu.',
        solution: '🔍 CHẨN ĐOÁN & LOẠI TRỪ: Kiểm tra dữ liệu vệ tinh (EPO/CPE) đã cập nhật gần đây chưa, xác nhận môi trường bắt sóng (trong nhà/nhiều tòa cao tầng).\n\n⚡ XỬ LÝ TẠI CHỖ: Kết nối Garmin Express/Connect để cập nhật dữ liệu vệ tinh mới nhất, hướng dẫn khách đứng ngoài trời thoáng khi bắt tín hiệu lần đầu.\n\n💬 KỊCH BẢN TƯ VẤN: "Em đã cập nhật dữ liệu vệ tinh cho đồng hồ mình rồi ạ, lần đầu bắt sóng ngoài trời có thể mất 1-2 phút, mình đợi thêm nhé."\n\n📦 LƯU Ý TTBH: Cập nhật dữ liệu và thử ngoài trời thoáng vẫn không bắt được GPS — cần gửi TTBH kiểm tra module GPS.',
        keywords: ['gps', 'định vị sai', 'không bắt sóng', 'vệ tinh']
      },
      {
        id: 'lib-g7', symptom: 'Màn hình cảm ứng Garmin không nhạy hoặc không phản hồi',
        diagnosis: 'Màn hình dính nước/mồ hôi, đang ở chế độ khóa cảm ứng, hoặc lỗi phần mềm.',
        solution: '🔍 CHẨN ĐOÁN & LOẠI TRỪ: Kiểm tra có đang bật khóa cảm ứng (Lock) trong cài đặt không, xác nhận màn hình có ẩm không.\n\n⚡ XỬ LÝ TẠI CHỖ: Tắt khóa cảm ứng nếu có, lau khô màn hình.\n\n💬 KỊCH BẢN TƯ VẤN: "Đồng hồ mình đang bật khóa cảm ứng nên không thao tác được ạ, em tắt lại giúp mình nhé."\n\n📦 LƯU Ý TTBH: Đã tắt khóa và lau khô vẫn không phản hồi — cần gửi TTBH kiểm tra màn hình.',
        keywords: ['cảm ứng', 'không nhạy', 'màn hình', 'không phản hồi']
      },
      {
        id: 'lib-g8', symptom: 'Garmin Edge (định vị xe đạp) không gắn được vào gá đỡ hoặc mất kết nối cảm biến tốc độ/cadence',
        diagnosis: 'Gá đỡ (mount) lệch khớp, hoặc cảm biến ANT+/Bluetooth ngoài (tốc độ, nhịp tim) bị mất ghép đôi.',
        solution: '🔍 CHẨN ĐOÁN & LOẠI TRỪ: Kiểm tra chốt xoay trên gá đỡ có khớp đúng chiều với rãnh sau máy không, xác nhận cảm biến còn pin không.\n\n⚡ XỬ LÝ TẠI CHỖ: Vào mục Cảm biến (Sensors) để ghép đôi lại cảm biến tốc độ/cadence.\n\n💬 KỊCH BẢN TƯ VẤN: "Em đã kiểm tra và ghép lại cảm biến cho mình rồi ạ, gá đỡ nứt/gãy thì mình nên thay phụ kiện mới để tránh rơi máy khi đạp nhé."\n\n📦 LƯU Ý TTBH: Gá đỡ hỏng có thể bán/thay linh kiện tại chỗ, không cần gửi TTBH.',
        keywords: ['edge', 'gá đỡ', 'mount', 'cảm biến', 'xe đạp']
      },
      {
        id: 'lib-g9', symptom: 'Garmin bị vào nước, có hơi nước đọng dưới mặt kính',
        diagnosis: 'Gioăng cao su chống nước bị lão hóa/hở, hoặc máy vượt quá độ sâu/áp suất chịu nước cho phép.',
        solution: '🔍 CHẨN ĐOÁN & LOẠI TRỪ: Kiểm tra gioăng cao su chống nước có dấu hiệu hở/lão hóa không, xác nhận có vượt độ sâu chịu nước cho phép không.\n\n⚡ XỬ LÝ TẠI CHỖ: Lau khô ngoại quan, để nơi thoáng khí, KHÔNG sấy nhiệt cao hoặc bấm nút liên tục.\n\n💬 KỊCH BẢN TƯ VẤN: "Máy mình cần để khô tự nhiên trước ạ, em theo dõi cùng mình xem hơi nước có tự bay hết trong 24 giờ không."\n\n📦 LƯU Ý TTBH: Hơi nước không hết sau 24 giờ hoặc máy chập chờn — cần gửi TTBH kiểm tra gioăng và bo mạch.',
        keywords: ['vào nước', 'hơi nước', 'đọng nước', 'chống nước']
      },
      {
        id: 'lib-g10', symptom: 'Dây đeo (band/strap) Garmin bị đứt, nứt hoặc khóa dây lỏng',
        diagnosis: 'Dây cao su/silicone lão hóa theo thời gian, hoặc chốt khóa quick-release bị mòn.',
        solution: '🔍 CHẨN ĐOÁN & LOẠI TRỪ: Xác định đúng size lug (kích thước chốt) của model để chọn dây thay thế tương thích.\n\n⚡ XỬ LÝ TẠI CHỖ: Thay dây quick-release ngay tại quầy cho khách xem trực tiếp.\n\n💬 KỊCH BẢN TƯ VẤN: "Em thay dây mới đúng chuẩn cho đồng hồ mình ngay tại đây được ạ, mình chọn dây chính hãng để đảm bảo độ bền và chống nước nhé."\n\n📦 LƯU Ý TTBH: Xử lý được ngay tại chỗ, không cần gửi TTBH.',
        keywords: ['dây đeo', 'đứt dây', 'quai đồng hồ', 'strap']
      },
      {
        id: 'lib-g11', symptom: 'Garmin báo lỗi hoặc treo giữa chừng khi cập nhật firmware',
        diagnosis: 'Mất kết nối mạng/Bluetooth giữa chừng khi tải bản cập nhật, hoặc dung lượng trống không đủ.',
        solution: '🔍 CHẨN ĐOÁN & LOẠI TRỪ: Kiểm tra pin còn trên 50% không, xác nhận kết nối mạng/Bluetooth có ổn định trong lúc cập nhật không.\n\n⚡ XỬ LÝ TẠI CHỖ: Kết nối qua Garmin Express bằng cáp USB (ổn định hơn qua app điện thoại) để cập nhật lại từ đầu.\n\n💬 KỊCH BẢN TƯ VẤN: "Em đang cập nhật lại phần mềm cho đồng hồ mình qua máy tính ạ, cách này ổn định hơn cập nhật qua điện thoại."\n\n📦 LƯU Ý TTBH: Cập nhật qua Garmin Express vẫn lỗi liên tục — cần gửi TTBH kiểm tra bộ nhớ trong.',
        keywords: ['cập nhật', 'firmware', 'update', 'treo']
      }
    ]
  },
  {
    id: 'Android',
    name: 'Android',
    subtitle: 'Samsung, Xiaomi, Oppo, Vivo, Pixel',
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
      { keywords: ['vỏ', 'nắp lưng', 'kính'], message: '⚠️ NHẮC NHỞ: Nắp lưng Android thường bằng kính hoặc nhựa giả kính, dễ vỡ khi gia nhiệt tháo máy.' },
      { keywords: ['mi account', 'xiaomi', 'tài khoản mi'], message: '⚠️ LƯU Ý: Xiaomi có khóa Mi Account riêng ngoài khóa Google, cần kiểm tra khách còn nhớ tài khoản Mi không trước khi Reset.' }
    ],
    library: [
      {
        id: 'lib-an1', symptom: 'Máy bị treo logo, không vào được màn hình chính',
        diagnosis: 'Xung đột phần mềm hệ thống hoặc lỗi phân vùng dữ liệu.',
        solution: '🔍 CHẨN ĐOÁN & LOẠI TRỪ: Xác nhận máy vừa cập nhật phần mềm hay cài ứng dụng mới trước khi treo.\n\n⚡ XỬ LÝ TẠI CHỖ: Vào Recovery (giữ Nguồn + Giảm âm lượng khi máy tắt) để Wipe Cache Partition trước.\n\n💬 KỊCH BẢN TƯ VẤN: "Em đang thử xóa cache hệ thống cho máy mình ạ, cách này không mất dữ liệu và thường khắc phục được treo logo."\n\n📦 LƯU Ý TTBH: Wipe Cache không hết mới cần chạy lại ROM — nếu khách không đồng ý mất dữ liệu, cần gửi TTBH đánh giá thêm.',
        keywords: ['treo logo', 'không vào được', 'phần mềm']
      },
      {
        id: 'lib-an2', symptom: 'Cổng sạc lỏng, sạc lúc được lúc không',
        diagnosis: 'Cổng sạc bị mòn hoặc đóng bụi bẩn.',
        solution: '🔍 CHẨN ĐOÁN & LOẠI TRỪ: Kiểm tra chân cổng sạc có bị mòn, cong hay bám bụi không.\n\n⚡ XỬ LÝ TẠI CHỖ: Vệ sinh cổng sạc bằng tăm tre khô, thử sạc lại.\n\n💬 KỊCH BẢN TƯ VẤN: "Em đã vệ sinh cổng sạc cho máy mình rồi ạ, mình thử cắm sạc lại xem đã ổn định chưa nhé."\n\n📦 LƯU Ý TTBH: Vệ sinh không cải thiện — cần thay chân sạc, có thể xử lý tại chỗ nếu có linh kiện.',
        keywords: ['sạc', 'lỏng', 'không nhận']
      },
      {
        id: 'lib-an3', symptom: 'Pin điện thoại Android bị phồng',
        diagnosis: 'Pin lão hóa hoặc sạc sai chuẩn công suất trong thời gian dài gây phồng rộp.',
        solution: '🔍 CHẨN ĐOÁN & LOẠI TRỪ: Quan sát mặt lưng/màn hình có bị phồng, cong vênh bất thường không.\n\n⚡ XỬ LÝ TẠI CHỖ: TUYỆT ĐỐI không mở máy hoặc làm thủng pin, ngừng sạc và ngừng sử dụng ngay.\n\n💬 KỊCH BẢN TƯ VẤN: "Pin máy mình đang bị phồng, khá nguy hiểm nếu tiếp tục dùng ạ, mình mang máy đến TTBH gấp để thay pin nhé, không nên tự xử lý tại nhà."\n\n📦 LƯU Ý TTBH: BẮT BUỘC gửi TTBH ngay, không để máy nơi nhiệt độ cao trong lúc chờ.',
        keywords: ['pin phồng', 'phồng pin', 'nguy hiểm']
      },
      {
        id: 'lib-an4', symptom: 'Máy Android nóng bất thường khi sạc hoặc dùng nhẹ',
        diagnosis: 'Sạc không chính hãng, chạy nhiều ứng dụng nền, hoặc pin/IC sạc có vấn đề.',
        solution: '🔍 CHẨN ĐOÁN & LOẠI TRỪ: Kiểm tra khách có dùng sạc/cáp không chính hãng không, xác nhận máy nóng cả khi không dùng gì.\n\n⚡ XỬ LÝ TẠI CHỖ: Khuyến nghị đổi sạc đúng chuẩn, tắt bớt ứng dụng chạy nền trong Cài đặt > Pin.\n\n💬 KỊCH BẢN TƯ VẤN: "Em kiểm tra thấy sạc mình dùng không đúng chuẩn/có nhiều app chạy nền ạ, mình đổi sạc chính hãng và để em dọn bớt ứng dụng nhé."\n\n📦 LƯU Ý TTBH: Máy vẫn nóng khi không sạc, không dùng gì — cần gửi TTBH kiểm tra phần cứng.',
        keywords: ['nóng máy', 'nóng khi sạc', 'quá nhiệt']
      },
      {
        id: 'lib-an5', symptom: 'Samsung báo lỗi Knox hoặc mất bảo hành sau khi flash/root',
        diagnosis: 'Knox Warranty Void bị kích hoạt vĩnh viễn khi mở khóa bootloader hoặc root máy.',
        solution: '🔍 CHẨN ĐOÁN & LOẠI TRỪ: Xác nhận với khách máy đã từng mở khóa bootloader/root chưa.\n\n⚡ XỬ LÝ TẠI CHỖ: Không cần thao tác gì nếu máy vẫn hoạt động bình thường, đây không phải lỗi phần cứng.\n\n💬 KỊCH BẢN TƯ VẤN: "Đây là cờ bảo mật của Samsung khi máy từng root ạ, không thể đảo ngược được, nhưng máy mình vẫn dùng bình thường không ảnh hưởng gì."\n\n📦 LƯU Ý TTBH: Chỉ mất điều kiện bảo hành phần mềm từ Samsung, không liên quan đến lỗi cần sửa chữa.',
        keywords: ['knox', 'root', 'mất bảo hành', 'flash']
      },
      {
        id: 'lib-an6', symptom: 'Loa ngoài Android rè hoặc mất tiếng khi nghe gọi',
        diagnosis: 'Màng loa bám bụi/ẩm, hoặc cấu hình âm thanh bị lỗi.',
        solution: '🔍 CHẨN ĐOÁN & LOẠI TRỪ: Kiểm tra chế độ loa ngoài trong Cài đặt Âm thanh, xác định rè cả 2 loa hay chỉ 1 bên.\n\n⚡ XỬ LÝ TẠI CHỖ: Vệ sinh lưới loa bằng cọ mềm/tăm bông khô, thử phát nhạc test.\n\n💬 KỊCH BẢN TƯ VẤN: "Em đã vệ sinh loa cho máy mình rồi ạ, mình nghe thử lại xem còn rè không nhé."\n\n📦 LƯU Ý TTBH: Vệ sinh vẫn rè — cần thay màng loa, có thể xử lý tại chỗ nếu có linh kiện.',
        keywords: ['loa', 'rè', 'mất tiếng', 'nghe gọi']
      },
      {
        id: 'lib-an7', symptom: 'Màn hình cảm ứng Android đơ, loạn cảm ứng (ghost touch)',
        diagnosis: 'Miếng dán màn hình lỗi, xung đột phần mềm, hoặc lớp cảm ứng bị chập.',
        solution: '🔍 CHẨN ĐOÁN & LOẠI TRỪ: Gỡ thử miếng dán màn hình, khởi động ở Safe Mode để loại trừ xung đột ứng dụng.\n\n⚡ XỬ LÝ TẠI CHỖ: Nếu hết loạn cảm ứng sau khi gỡ dán, đổi loại dán khác; nếu vẫn còn ở Safe Mode, khả năng lỗi phần cứng.\n\n💬 KỊCH BẢN TƯ VẤN: "Em đang kiểm tra xem do miếng dán hay do phần mềm gây loạn cảm ứng cho máy mình ạ."\n\n📦 LƯU Ý TTBH: Vẫn loạn cảm ứng ở Safe Mode sau khi gỡ dán — cần gửi TTBH kiểm tra lớp cảm ứng.',
        keywords: ['cảm ứng', 'loạn cảm ứng', 'đơ máy', 'ghost touch']
      },
      {
        id: 'lib-an8', symptom: 'Máy Android bị bootloop, khởi động lặp lại liên tục',
        diagnosis: 'Lỗi phân vùng hệ thống sau cập nhật, hoặc xung đột ứng dụng vừa cài.',
        solution: '🔍 CHẨN ĐOÁN & LOẠI TRỪ: Xác nhận máy vừa cập nhật hệ thống hay cài ứng dụng mới trước khi bootloop.\n\n⚡ XỬ LÝ TẠI CHỖ: Vào Recovery Wipe Cache Partition trước, KHÔNG chọn Factory Reset ngay để tránh mất dữ liệu oan.\n\n💬 KỊCH BẢN TƯ VẤN: "Em đang thử xóa cache hệ thống cho máy mình trước ạ, nếu không hết mới cần tính đến khôi phục cài đặt gốc."\n\n📦 LƯU Ý TTBH: Wipe Cache không hết bootloop — cần khôi phục cài đặt gốc, báo trước với khách sẽ mất dữ liệu.',
        keywords: ['bootloop', 'khởi động lại liên tục', 'treo logo']
      },
      {
        id: 'lib-an9', symptom: 'Điện thoại không nhận SIM hoặc mất sóng liên tục',
        diagnosis: 'Khay SIM lỏng/bẩn, SIM lỗi, hoặc lỗi IC sóng sau va đập/vào nước.',
        solution: '🔍 CHẨN ĐOÁN & LOẠI TRỪ: Vệ sinh chân tiếp xúc khay SIM, thử SIM khác để loại trừ lỗi nhà mạng.\n\n⚡ XỬ LÝ TẠI CHỖ: Kiểm tra Cài đặt > Mạng di động xem có tắt nhầm chế độ máy bay hoặc chọn sai băng tần không.\n\n💬 KỊCH BẢN TƯ VẤN: "Em đã vệ sinh khay SIM và kiểm tra cài đặt mạng cho máy mình rồi ạ, mình thử lại xem đã bắt sóng chưa nhé."\n\n📦 LƯU Ý TTBH: Máy từng rơi/vào nước và vẫn mất sóng — khả năng lỗi IC sóng, cần gửi TTBH.',
        keywords: ['không nhận sim', 'mất sóng', 'sim']
      },
      {
        id: 'lib-an10', symptom: 'Máy bị khóa FRP (Factory Reset Protection) sau khi khôi phục cài đặt gốc',
        diagnosis: 'Máy đã đăng nhập tài khoản Google trước đó nhưng chưa thoát tài khoản trước khi Reset, kích hoạt khóa bảo mật chống trộm.',
        solution: '🔍 CHẨN ĐOÁN & LOẠI TRỪ: Xác nhận máy đã đăng nhập Google trước khi Reset chưa, kiểm tra khách có nhớ tài khoản không.\n\n⚡ XỬ LÝ TẠI CHỖ: Yêu cầu khách cung cấp đúng tài khoản Google/mật khẩu đã đăng nhập trước đó để xác thực.\n\n💬 KỊCH BẢN TƯ VẤN: "Máy mình đang bị khóa bảo vệ chống trộm ạ, mình cần đăng nhập lại đúng tài khoản Google đã dùng trước đó để mở khóa."\n\n📦 LƯU Ý TTBH: Khách không nhớ/không chứng minh được chủ sở hữu — không có cách nào bỏ qua hợp lệ, cần hướng dẫn khôi phục tài khoản qua Google trước.',
        keywords: ['frp', 'khóa máy', 'reset', 'tài khoản google']
      },
      {
        id: 'lib-an11', symptom: 'Xiaomi báo khóa Mi Account (Mi Cloud lock), không dùng được máy',
        diagnosis: 'Máy còn liên kết tài khoản Mi của chủ cũ, tương tự Activation Lock của Apple hoặc FRP của Google.',
        solution: '🔍 CHẨN ĐOÁN & LOẠI TRỪ: Xác nhận máy còn liên kết tài khoản Mi của chủ cũ không.\n\n⚡ XỬ LÝ TẠI CHỖ: Yêu cầu khách đăng xuất tài khoản Mi từ xa qua i.mi.com trước khi thao tác thêm.\n\n💬 KỊCH BẢN TƯ VẤN: "Máy mình đang bị khóa tài khoản Mi tương tự như khóa iCloud của Apple ạ, mình cần đăng xuất từ xa trước khi em hỗ trợ tiếp."\n\n📦 LƯU Ý TTBH: Mua lại máy cũ mà người bán không hỗ trợ gỡ tài khoản Mi — cần liên hệ người bán trước, cửa hàng không thể bỏ qua khóa này.',
        keywords: ['mi account', 'mi cloud', 'xiaomi', 'khóa tài khoản']
      },
      {
        id: 'lib-an12', symptom: 'Màn hình Android bị vỡ kính nhưng cảm ứng vẫn dùng được',
        diagnosis: 'Kính bảo vệ ngoài nứt/vỡ do va đập, lớp cảm ứng và hiển thị bên trong có thể chưa bị ảnh hưởng.',
        solution: '🔍 CHẨN ĐOÁN & LOẠI TRỪ: Kiểm tra 4 góc màn hình có ám màu/sọc kèm theo không (dấu hiệu lớp hiển thị cũng ảnh hưởng).\n\n⚡ XỬ LÝ TẠI CHỖ: Dán tạm cường lực để tránh vỡ lan rộng và bảo vệ tay khách.\n\n💬 KỊCH BẢN TƯ VẤN: "Màn hình mình vỡ kính ngoài ạ, em tư vấn thay cụm màn hình phù hợp ngân sách, có cả loại zin bóc máy và loại thay thế nhé."\n\n📦 LƯU Ý TTBH: Có thể xử lý tại chỗ nếu có linh kiện phù hợp, không nhất thiết phải gửi TTBH.',
        keywords: ['màn hình vỡ', 'vỡ kính', 'nứt màn hình']
      },
      {
        id: 'lib-an13', symptom: 'Cảm biến vân tay không nhận diện được',
        diagnosis: 'Tay/màn hình ẩm bẩn, miếng dán màn hình sai chuẩn che cảm biến, hoặc dữ liệu vân tay lỗi.',
        solution: '🔍 CHẨN ĐOÁN & LOẠI TRỪ: Kiểm tra tay/màn hình có ẩm bẩn không, xác nhận loại dán cường lực đang dùng có tương thích cảm biến vân tay dưới màn hình không.\n\n⚡ XỬ LÝ TẠI CHỖ: Lau khô tay và vùng cảm biến, xóa vân tay cũ và đăng ký lại từ đầu trong Cài đặt.\n\n💬 KỊCH BẢN TƯ VẤN: "Em đăng ký lại vân tay cho máy mình rồi ạ, nếu mình đang dán cường lực loại thường thì nên đổi loại chuyên dụng cho cảm biến vân tay nhé."\n\n📦 LƯU Ý TTBH: Đăng ký lại vẫn không nhận — cần gửi TTBH kiểm tra phần cứng cảm biến.',
        keywords: ['vân tay', 'không nhận diện', 'cảm biến vân tay']
      },
      {
        id: 'lib-an14', symptom: 'Máy báo đầy bộ nhớ, không cài được ứng dụng hoặc cập nhật',
        diagnosis: 'Cache hệ thống, file tải về, hoặc ảnh/video chưa sao lưu chiếm phần lớn dung lượng.',
        solution: '🔍 CHẨN ĐOÁN & LOẠI TRỪ: Vào Cài đặt > Bộ nhớ (Storage) để xem loại dữ liệu chiếm nhiều nhất.\n\n⚡ XỬ LÝ TẠI CHỖ: Sao lưu ảnh/video lên Google Photos rồi xóa bản gốc, xóa cache ứng dụng nặng.\n\n💬 KỊCH BẢN TƯ VẤN: "Em kiểm tra thấy ảnh/video và cache ứng dụng chiếm phần lớn dung lượng máy mình ạ, để em dọn bớt giúp mình nhé."\n\n📦 LƯU Ý TTBH: Vấn đề phần mềm thuần túy, không cần gửi TTBH.',
        keywords: ['đầy bộ nhớ', 'hết dung lượng', 'bộ nhớ']
      },
      {
        id: 'lib-an15', symptom: 'Máy bị treo hoặc lỗi sau khi cập nhật giao diện (MIUI/ColorOS/FuntouchOS)',
        diagnosis: 'Bản cập nhật giao diện hãng (Xiaomi MIUI/HyperOS, Oppo ColorOS, Vivo FuntouchOS/OriginOS) bị lỗi tải hoặc xung đột với dữ liệu cũ.',
        solution: '🔍 CHẨN ĐOÁN & LOẠI TRỪ: Xác nhận lỗi xuất hiện ngay sau khi cập nhật giao diện hãng, kiểm tra ở Safe Mode có phải do app bên thứ 3 không.\n\n⚡ XỬ LÝ TẠI CHỖ: Vào Recovery thử Wipe Cache trước khi tính đến các bước sâu hơn.\n\n💬 KỊCH BẢN TƯ VẤN: "Máy mình gặp lỗi ngay sau khi cập nhật giao diện ạ, em đang xóa cache hệ thống để khắc phục trước nhé."\n\n📦 LƯU Ý TTBH: Wipe Cache không hết — cần cài lại ROM chính hãng qua công cụ flash riêng của hãng, nên gửi TTBH nếu cửa hàng chưa có công cụ này.',
        keywords: ['miui', 'coloros', 'funtouchos', 'xiaomi', 'oppo', 'vivo', 'cập nhật giao diện', 'treo sau cập nhật']
      },
      {
        id: 'lib-an16', symptom: 'Camera Android bị mờ, lấy nét chậm hoặc không lấy nét được',
        diagnosis: 'Ống kính bám bụi/dấu vân tay, ốp lưng che cảm biến lấy nét laser, hoặc lỗi phần mềm camera.',
        solution: '🔍 CHẨN ĐOÁN & LOẠI TRỪ: Kiểm tra ống kính có bám bụi/dấu vân tay không, xác nhận ốp lưng/cường lực camera có che cảm biến lấy nét không.\n\n⚡ XỬ LÝ TẠI CHỖ: Lau sạch ống kính bằng khăn mềm chuyên dụng, gỡ thử ốp lưng/cường lực, xóa cache ứng dụng Camera.\n\n💬 KỊCH BẢN TƯ VẤN: "Em đã vệ sinh ống kính và kiểm tra phụ kiện che camera cho máy mình rồi ạ, mình chụp thử lại xem đã nét chưa nhé."\n\n📦 LƯU Ý TTBH: Vệ sinh và gỡ phụ kiện vẫn mờ đều mọi khoảng cách — khả năng lỗi cảm biến/motor lấy nét, cần gửi TTBH.',
        keywords: ['camera mờ', 'lấy nét', 'camera']
      }
    ]
  }
];
