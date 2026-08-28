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
        id: "lib-a1",
        device: "Mac",
        symptom: "Quên mật khẩu Macbook",
        diagnosis: "Người dùng không nhớ mật khẩu đăng nhập hoặc mật khẩu Firmware.",
        solution: "🔍 CHẨN ĐOÁN: Xác định là quên mật khẩu ĐĂNG NHẬP (macOS) hay mật khẩu FIRMWARE (khởi động bằng Option). Kiểm tra máy có chip T2/M1-M3 không (Menu Apple > Giới thiệu về máy Mac này).\n\n🛠️ HƯỚNG DẪN XỬ LÝ:\n1. Hỏi khách quên mật khẩu lúc đăng nhập màn hình chính hay lúc khởi động giữ phím Option (Firmware Password).\n2. Nếu quên mật khẩu đăng nhập: tại màn hình đăng nhập, chọn \"Quên mật khẩu?\" → xác minh qua Apple ID đã liên kết → đặt mật khẩu mới.\n3. Nếu không có Apple ID liên kết: khởi động lại, giữ Cmd+R để vào Recovery Mode → mở Terminal (menu Tiện ích) → gõ `resetpassword` để reset qua công cụ Reset Password.\n4. Yêu cầu khách xuất trình hóa đơn mua hàng hoặc giấy tờ chứng minh chủ sở hữu trước khi hỗ trợ reset.\n\n🚫 TUYỆT ĐỐI KHÔNG ĐƯỢC LÀM: Không reset mật khẩu khi khách chưa xác minh được là chủ sở hữu hợp lệ (đặc biệt với mật khẩu Firmware trên máy chip T2/M1-M3); không tự ý xóa dữ liệu máy nếu khách chưa đồng ý.\n\n💬 KỊCH BẢN TƯ VẤN: \"Dạ máy mình có thể khôi phục lại được ạ, em cần xác minh anh/chị là chủ sở hữu qua Apple ID trước khi hỗ trợ.\"\n\n📦 LƯU Ý TTBH: Là mật khẩu FIRMWARE trên máy có chip T2/M1-M3 và khách không có hóa đơn chứng minh sở hữu: đề xuất khách nhận bảo hành; thiết bị sẽ được gửi về Trung tâm bảo hành (TTBH) chính hãng để kiểm tra và có phương án xử lý.",
        keywords: ["macbook", "mật khẩu", "pass"]
      },
      {
        id: "lib-a2",
        device: "iPhone",
        symptom: "Quên mật khẩu iCloud (Activation Lock)",
        diagnosis: "Thiết bị bị khóa kích hoạt do không nhớ ID/Pass iCloud.",
        solution: "🔍 CHẨN ĐOÁN: Xác nhận máy đang ở màn hình khóa kích hoạt (Activation Lock — logo iCloud kèm dòng \"Find My iPhone đang bật\"), kiểm tra khách còn giữ hóa đơn mua hàng hoặc email Apple ID không.\n\n🛠️ HƯỚNG DẪN XỬ LÝ:\n1. Xác nhận máy đang ở đúng màn hình Activation Lock (không phải màn hình nhập mật khẩu thông thường).\n2. Hỏi khách còn nhớ Apple ID/mật khẩu đã đăng nhập trên máy trước đó không.\n3. Nếu còn nhớ: hướng dẫn khách truy cập iforgot.apple.com trên thiết bị khác → nhập Apple ID để tự khôi phục mật khẩu → đăng nhập lại trên máy.\n4. Nếu không nhớ và có hóa đơn hợp lệ: hướng dẫn khách chuẩn bị hóa đơn mua hàng (ghi rõ IMEI/số serial) để nộp cho Apple xác minh chủ sở hữu.\n\n🚫 TUYỆT ĐỐI KHÔNG ĐƯỢC LÀM: Không dùng bất kỳ công cụ/phần mềm bên thứ 3 nào để \"bẻ khóa\" Activation Lock; không nhận xử lý nếu không xác minh được nguồn gốc máy hợp pháp.\n\n💬 KỊCH BẢN TƯ VẤN: \"Đây là tính năng bảo vệ máy khỏi mất cắp ạ, mình cung cấp hóa đơn mua hàng để Apple xác minh chủ sở hữu và mở khóa giúp mình nhé.\"\n\n📦 LƯU Ý TTBH: Không có hóa đơn hợp lệ và khách không nhớ Apple ID: đề xuất khách nhận bảo hành kèm chứng từ mua hàng (nếu có); thiết bị sẽ được gửi về Trung tâm bảo hành (TTBH) để Apple kiểm tra và xử lý, không có cách nào bỏ qua khóa này tại cửa hàng.",
        keywords: ["icloud", "khóa", "activation"]
      },
      {
        id: "lib-a3",
        device: "iPhone",
        symptom: "iPhone hao pin, nóng máy nhanh",
        diagnosis: "Pin bị chai hoặc có ứng dụng chạy ngầm gây xung đột hệ thống.",
        solution: "🔍 CHẨN ĐOÁN: Kiểm tra tình trạng pin (Cài đặt > Pin > Tình trạng pin & Sạc) và xem ứng dụng nào tiêu hao pin nhiều trong 24h qua (Cài đặt > Pin, kéo xuống mục sử dụng pin).\n\n🛠️ HƯỚNG DẪN XỬ LÝ:\n1. Vào Cài đặt > Pin > Tình trạng pin & Sạc, đọc chỉ số \"Dung lượng tối đa\" (%).\n2. Vào Cài đặt > Pin, xem danh sách ứng dụng tiêu hao pin nhiều nhất trong 24h/10 ngày qua.\n3. Nếu dung lượng pin trên 80%: tắt bớt ứng dụng chạy nền không cần thiết (Cài đặt > Cài đặt chung > Làm mới ứng dụng nền), tắt bớt.\n4. Vào Cài đặt > Cài đặt chung > Chuyển hoặc đặt lại iPhone > Đặt lại > Đặt lại tất cả cài đặt (Reset All Settings) — không mất dữ liệu, chỉ mất cài đặt tùy chỉnh (Wifi đã lưu, layout...).\n5. Khởi động lại máy để làm mới bộ nhớ hệ thống.\n\n🚫 TUYỆT ĐỐI KHÔNG ĐƯỢC LÀM: Không tự ý đặt lại cài đặt gốc (Erase All Content) khi khách chỉ báo hao pin; không khẳng định chắc chắn cần thay pin khi chưa kiểm tra chỉ số Tình trạng pin.\n\n💬 KỊCH BẢN TƯ VẤN: \"Em kiểm tra thấy pin mình đã xuống thấp rồi ạ, để em tối ưu lại phần mềm/tư vấn thay pin mới giúp mình dùng bền hơn nhé.\"\n\n📦 LƯU Ý TTBH: Pin dưới 80% hoặc chai nặng — tư vấn thay pin chính hãng, không cần gửi TTBH sâu nếu chỉ thay pin đơn thuần.",
        keywords: ["pin", "hao pin", "nóng máy"]
      },
      {
        id: "lib-a4",
        device: "iPhone",
        symptom: "iPhone không sạc được, cắm sạc không lên nguồn",
        diagnosis: "Cổng sạc bám bụi/oxi hóa, cáp sạc lỗi, hoặc IC nguồn có vấn đề.",
        solution: "🔍 CHẨN ĐOÁN: Thử cáp/củ sạc khác, soi đèn pin kiểm tra cổng sạc có bụi/xơ vải không.\n\n🛠️ HƯỚNG DẪN XỬ LÝ:\n1. Thử cắm bằng cáp và củ sạc chính hãng khác để loại trừ lỗi phụ kiện.\n2. Soi đèn pin vào cổng sạc Lightning/USB-C, kiểm tra có bụi, xơ vải hay dị vật không.\n3. Vệ sinh cổng sạc bằng tăm tre khô hoặc que nhựa mềm, thao tác nhẹ nhàng, không chọc sâu.\n4. Cắm lại sạc, quan sát biểu tượng pin có hiện sạc không (chờ 1-2 phút vì máy có thể cần thời gian nhận diện).\n5. Kiểm tra chỉ báo tiếp xúc chất lỏng (LCI) trong khay SIM bằng đèn pin — nếu đổi màu đỏ/hồng là dấu hiệu từng vào nước.\n\n🚫 TUYỆT ĐỐI KHÔNG ĐƯỢC LÀM: Không dùng vật kim loại/sắc nhọn để cạy/chọc vào cổng sạc; không khẳng định với khách là \"chắc chắn sửa được tại chỗ\" trước khi xác định rõ nguyên nhân.\n\n💬 KỊCH BẢN TƯ VẤN: \"Dạ em đã vệ sinh và kiểm tra cổng sạc cho mình rồi ạ, nếu vẫn chưa sạc được thì khả năng cao lỗi bên trong, em cần kiểm tra sâu hơn.\"\n\n📦 LƯU Ý TTBH: Vệ sinh xong vẫn không lên nguồn, khả năng lỗi IC nguồn: đề xuất khách nhận bảo hành; thiết bị sẽ được gửi về Trung tâm bảo hành (TTBH) để kiểm tra và có phương án xử lý.",
        keywords: ["sạc", "không lên nguồn", "cổng sạc", "không sạc được"]
      },
      {
        id: "lib-a5",
        device: "iPhone",
        symptom: "Loa iPhone rè, nghe gọi rột rẹt hoặc nhỏ tiếng",
        diagnosis: "Màng loa dính bụi/nước, hoặc có thể do cấu hình âm thanh bị lỗi sau cập nhật.",
        solution: "🔍 CHẨN ĐOÁN: Phát nhạc to (mở Nhạc hoặc video) để xác định rè ở loa thoại (trên/gần camera trước) hay loa ngoài (đáy máy), một bên hay cả hai.\n\n🛠️ HƯỚNG DẪN XỬ LÝ:\n1. Mở app Nhạc/YouTube, bật âm lượng tối đa để xác định vị trí rè (loa thoại trên hay loa ngoài dưới đáy máy).\n2. Kiểm tra Cài đặt > Âm thanh & Xúc giác, xem chế độ âm thanh/EQ có bị chỉnh sai không.\n3. Dùng cọ mềm/tăm bông khô vệ sinh lưới loa, thao tác nhẹ để không đẩy bụi vào sâu hơn.\n4. Khởi động lại máy sau khi vệ sinh, phát lại nhạc để kiểm tra.\n\n🚫 TUYỆT ĐỐI KHÔNG ĐƯỢC LÀM: Không dùng vật nhọn/kim loại chọc vào lưới loa; không dùng khí nén xịt quá mạnh có thể đẩy bụi vào sâu hơn màng loa.\n\n💬 KỊCH BẢN TƯ VẤN: \"Em đã vệ sinh loa và kiểm tra cài đặt âm thanh cho mình rồi ạ, nếu vẫn rè thì màng loa có thể đã hỏng cần thay mới.\"\n\n📦 LƯU Ý TTBH: Vệ sinh không hết rè — cần thay màng loa, có thể xử lý tại chỗ nếu có linh kiện, không nhất thiết phải gửi TTBH.",
        keywords: ["loa", "rè", "nhỏ tiếng", "nghe gọi"]
      },
      {
        id: "lib-a6",
        device: "iPhone",
        symptom: "Face ID không nhận diện khuôn mặt",
        diagnosis: "Cảm biến TrueDepth bị che khuất, kính cường lực dày, hoặc lỗi phần mềm Face ID.",
        solution: "🔍 CHẨN ĐOÁN: Kiểm tra camera trước (cụm TrueDepth quanh tai thỏ/notch) có bị che bởi cường lực dày không, xác nhận cụm camera có từng bị thay ngoài chính hãng chưa.\n\n🛠️ HƯỚNG DẪN XỬ LÝ:\n1. Quan sát vùng camera trước, hỏi khách đang dán loại cường lực nào (cường lực dày/viền đen dễ che cảm biến).\n2. Gỡ thử miếng dán cường lực, lau sạch cụm camera trước bằng khăn microfiber khô.\n3. Vào Cài đặt > Face ID & Mật mã (nhập mật mã) > Đặt lại Face ID.\n4. Thiết lập lại Face ID theo hướng dẫn trên màn hình (đưa mặt vào khung, xoay đầu theo vòng tròn 2 lần).\n5. Kiểm tra máy có báo \"Không thể xác minh linh kiện Camera trước\" trong Cài đặt chung > Giới thiệu không — đây là dấu hiệu cụm camera từng bị thay ngoài.\n\n🚫 TUYỆT ĐỐI KHÔNG ĐƯỢC LÀM: Không cam kết Face ID sẽ hoạt động lại 100% nếu cụm camera trước đã từng thay ngoài chính hãng — phải giải thích rõ với khách trước khi nhận máy để tránh khiếu nại sau này.\n\n💬 KỊCH BẢN TƯ VẤN: \"Em thử thiết lập lại Face ID cho mình xem có nhận được không nhé, nếu cụm camera từng thay ngoài thì máy sẽ báo linh kiện không xác định ạ.\"\n\n📦 LƯU Ý TTBH: Camera trước từng thay ngoài chính hãng — Face ID sẽ không bao giờ khôi phục được, cần giải thích rõ với khách trước khi nhận máy.",
        keywords: ["face id", "không nhận diện", "khuôn mặt"]
      },
      {
        id: "lib-a7",
        device: "iPhone",
        symptom: "iPhone bị vô hiệu hóa (iPhone Unavailable) do nhập sai mật khẩu",
        diagnosis: "Nhập sai passcode quá số lần cho phép, máy tự khóa theo thời gian tăng dần.",
        solution: "🔍 CHẨN ĐOÁN: Xác nhận máy đang ở màn hình \"iPhone Unavailable\" (nền đen, biểu tượng khóa, đồng hồ đếm ngược), kiểm tra phiên bản iOS (từ 15.2 trở lên có Erase iPhone ngay màn hình khóa).\n\n🛠️ HƯỚNG DẪN XỬ LÝ:\n1. Xác nhận máy đang ở màn hình \"iPhone Unavailable\" — hỏi khách có nhớ vừa cập nhật iOS gần đây không.\n2. Kiểm tra: nếu máy đang có mạng (Wi-Fi/di động) và chạy iOS 15.2 trở lên, bên dưới đồng hồ đếm ngược sẽ hiện dòng chữ đỏ \"Erase iPhone\".\n3. Nếu có dòng \"Erase iPhone\": chạm vào đó → chạm \"Erase iPhone\" lần nữa để xác nhận → máy tự xóa dữ liệu và khởi động lại về màn hình thiết lập ban đầu (Hello).\n4. Ở màn hình thiết lập: chọn ngôn ngữ → kết nối Wi-Fi → đến bước \"Apps & Data\", chọn \"Restore from iCloud Backup\" (nếu khách có sao lưu iCloud) hoặc nối máy tính chọn \"Restore from Mac or PC\" → đăng nhập Apple ID của khách → chọn bản sao lưu gần nhất.\n5. Nếu KHÔNG có dòng \"Erase iPhone\" (chưa lên iOS 15.2) hoặc máy không có mạng: nối cáp với máy tính (Finder trên macOS Catalina+, hoặc Apple Devices/iTunes trên Windows) → đưa máy vào Recovery Mode theo đúng dòng máy (từ iPhone 8: nhấn nhanh Volume Up → nhấn nhanh Volume Down → giữ nút Side đến khi hiện màn hình kết nối máy tính) → trên máy tính chọn \"Restore\".\n\n🚫 TUYỆT ĐỐI KHÔNG ĐƯỢC LÀM: Không tự ý bấm Erase iPhone khi chưa xác nhận khách có bản sao lưu hoặc đã hiểu rõ sẽ mất dữ liệu; không hứa chắc chắn khôi phục được dữ liệu nếu khách không có backup.\n\n💬 KỊCH BẢN TƯ VẤN: \"Máy mình bị khóa do nhập sai mật khẩu nhiều lần ạ, nếu mình có backup thì dữ liệu vẫn khôi phục lại được sau khi xóa máy.\"\n\n📦 LƯU Ý TTBH: Không có backup và không nhớ Apple ID: dữ liệu sẽ mất hoàn toàn khi khôi phục, cần xác nhận rõ với khách trước khi thao tác. (Không cần gửi TTBH — xử lý được tại chỗ.)",
        keywords: ["vô hiệu hóa", "unavailable", "sai mật khẩu", "khóa máy"]
      },
      {
        id: "lib-a8",
        device: "Mac",
        symptom: "MacBook không lên nguồn, đèn sạc không sáng",
        diagnosis: "Sạc/cáp lỗi, pin cạn sâu, hoặc lỗi mạch nguồn logic board.",
        solution: "🔍 CHẨN ĐOÁN: Thử cáp/củ sạc chính hãng khác, kiểm tra đèn cổng sạc MagSafe có sáng không.\n\n🛠️ HƯỚNG DẪN XỬ LÝ:\n1. Thử cắm sạc chính hãng khác, quan sát đèn báo trên đầu sạc MagSafe (cam = đang sạc, xanh = đầy pin).\n2. Nếu không có đèn: cắm sạc và giữ tối thiểu 30 phút (đề phòng pin cạn sâu, máy cần thời gian nạp trước khi lên hình).\n3. Sau 30 phút, nhấn giữ nút nguồn khoảng 10 giây để khởi động lại, thả tay và nhấn lại 1 lần để bật máy.\n4. Nếu vẫn không lên hình: thử tổ hợp phím khởi động SMC/NVRAM tương ứng với dòng máy (chip Apple Silicon: tắt máy, giữ nút nguồn 10 giây rồi thả).\n\n🚫 TUYỆT ĐỐI KHÔNG ĐƯỢC LÀM: Không tự ý tháo vỏ máy để kiểm tra pin/mạch nguồn tại cửa hàng nếu không có chuyên môn phần cứng Mac; không sạc bằng củ sạc công suất không phù hợp trong lúc chờ xử lý.\n\n💬 KỊCH BẢN TƯ VẤN: \"Máy mình có thể chỉ bị cạn pin sâu thôi ạ, em đang sạc và thử khởi động lại xem có lên nguồn không nhé.\"\n\n📦 LƯU Ý TTBH: Sạc 30 phút vẫn không lên nguồn, khả năng lỗi mạch nguồn logic board: đề xuất khách nhận bảo hành; thiết bị sẽ được gửi về Trung tâm bảo hành (TTBH) để kiểm tra và có phương án xử lý.",
        keywords: ["macbook", "không lên nguồn", "không sạc", "đèn sạc"]
      },
      {
        id: "lib-a9",
        device: "Mac",
        symptom: "MacBook chạy chậm, quạt kêu to liên tục",
        diagnosis: "Bộ nhớ đầy, quá nhiều ứng dụng chạy nền, hoặc quạt tản nhiệt bám bụi.",
        solution: "🔍 CHẨN ĐOÁN: Mở Activity Monitor (Ứng dụng > Tiện ích) xem tiến trình chiếm CPU cao, kiểm tra dung lượng ổ đĩa còn trống (Menu Apple > Giới thiệu về máy Mac này > Bộ nhớ lưu trữ).\n\n🛠️ HƯỚNG DẪN XỬ LÝ:\n1. Mở Activity Monitor, sắp xếp theo cột \"% CPU\" để tìm tiến trình bất thường đang chiếm tài nguyên cao.\n2. Vào Menu Apple > Giới thiệu về máy Mac này > Bộ nhớ lưu trữ, kiểm tra dung lượng trống (cần tối thiểu 15-20%).\n3. Nếu ổ đĩa gần đầy: hướng dẫn khách dọn bớt file lớn, cache, hoặc dùng tính năng \"Tối ưu hóa bộ nhớ lưu trữ\" trong mục này.\n4. Khởi động lại ở Safe Mode (giữ Shift khi khởi động với Mac Intel, hoặc giữ nút nguồn rồi chọn ổ đĩa + giữ Shift với Apple Silicon) để loại trừ xung đột phần mềm khởi động cùng hệ thống.\n5. Nếu quạt vẫn kêu to ngay cả lúc máy nhàn rỗi (không mở app nặng): ghi nhận lại và cân nhắc đề xuất vệ sinh tản nhiệt chuyên sâu.\n\n🚫 TUYỆT ĐỐI KHÔNG ĐƯỢC LÀM: Không tự ý xóa file/ứng dụng của khách để giải phóng dung lượng khi chưa xác nhận; không tháo vỏ máy để tự vệ sinh quạt tản nhiệt nếu cửa hàng không có quy trình/dụng cụ chuyên dụng cho Mac.\n\n💬 KỊCH BẢN TƯ VẤN: \"Em đang kiểm tra xem có phải do đầy ổ cứng hoặc ứng dụng chạy ngầm gây chậm máy không ạ, mình đợi em chút nhé.\"\n\n📦 LƯU Ý TTBH: Quạt kêu to bất thường kể cả khi máy nhàn rỗi, có thể do tản nhiệt cần vệ sinh chuyên sâu: đề xuất khách nhận bảo hành; thiết bị sẽ được gửi về Trung tâm bảo hành (TTBH) để kiểm tra và có phương án xử lý.",
        keywords: ["macbook", "chạy chậm", "quạt kêu to", "nóng máy"]
      },
      {
        id: "lib-a10",
        device: "iPad",
        symptom: "iPad không nhận sạc hoặc sạc rất chậm",
        diagnosis: "Củ sạc công suất thấp, cáp lỗi, hoặc cổng sạc bám bụi.",
        solution: "🔍 CHẨN ĐOÁN: Kiểm tra công suất củ sạc (tối thiểu 20W cho iPad Pro), soi cổng sạc xem có bụi/xơ vải không.\n\n🛠️ HƯỚNG DẪN XỬ LÝ:\n1. Hỏi khách đang dùng củ sạc công suất bao nhiêu W — đối chiếu với khuyến nghị của dòng máy (iPad Pro cần tối thiểu 20W).\n2. Soi đèn pin vào cổng sạc (Lightning hoặc USB-C tùy đời máy), kiểm tra bụi/xơ vải.\n3. Vệ sinh nhẹ nhàng bằng tăm tre khô hoặc que nhựa mềm.\n4. Đổi sang củ sạc và cáp chính hãng đúng công suất, cắm lại và theo dõi biểu tượng sạc trong 5-10 phút.\n\n🚫 TUYỆT ĐỐI KHÔNG ĐƯỢC LÀM: Không dùng củ sạc không rõ nguồn gốc/công suất quá cao so với khuyến nghị để \"sạc thử nhanh hơn\"; không chọc vật cứng sâu vào cổng sạc.\n\n💬 KỊCH BẢN TƯ VẤN: \"Dạ có thể do củ sạc chưa đủ công suất cho máy mình ạ, em thử đổi sạc đúng chuẩn xem có cải thiện không nhé.\"\n\n📦 LƯU Ý TTBH: Đã đổi sạc/cáp và vệ sinh vẫn chập chờn, khả năng chân cổng sạc cong/hỏng: đề xuất khách nhận bảo hành; thiết bị sẽ được gửi về Trung tâm bảo hành (TTBH) để kiểm tra và có phương án xử lý.",
        keywords: ["ipad", "không nhận sạc", "sạc chậm"]
      },
      {
        id: "lib-a11",
        device: "iPhone",
        symptom: "Wifi hoặc Bluetooth chập chờn, tự ngắt kết nối",
        diagnosis: "Xung đột phần mềm sau cập nhật iOS, hoặc lỗi anten/IC sóng.",
        solution: "🔍 CHẨN ĐOÁN: Kiểm tra máy vừa cập nhật iOS gần đây không, xác nhận máy có từng rơi vỡ/vào nước không.\n\n🛠️ HƯỚNG DẪN XỬ LÝ:\n1. Vuốt mở Trung tâm điều khiển, tắt rồi bật lại Wifi và Bluetooth.\n2. Vào Cài đặt > Wi-Fi, chạm biểu tượng (i) cạnh mạng đang dùng > \"Quên mạng này\", sau đó kết nối lại từ đầu và nhập mật khẩu.\n3. Nếu vẫn chập chờn: vào Cài đặt > Cài đặt chung > Chuyển hoặc Đặt lại iPhone > Đặt lại > Đặt lại Cài đặt Mạng (không mất dữ liệu, chỉ mất mật khẩu Wifi/VPN đã lưu).\n4. Khởi động lại máy sau khi đặt lại cài đặt mạng, kiểm tra kết nối lại.\n\n🚫 TUYỆT ĐỐI KHÔNG ĐƯỢC LÀM: Không đặt lại cài đặt mạng nhiều lần liên tục trong thời gian ngắn (có thể xóa mất cấu hình VPN/Wifi công ty của khách mà không báo trước); không kết luận lỗi phần cứng khi chưa loại trừ nguyên nhân phần mềm.\n\n💬 KỊCH BẢN TƯ VẤN: \"Em đã thử đặt lại cài đặt mạng cho mình rồi ạ, đa số trường hợp là do xung đột phần mềm sau cập nhật thôi.\"\n\n📦 LƯU Ý TTBH: Máy từng rơi vỡ/vào nước và vẫn mất kết nối sau khi reset, khả năng lỗi phần cứng anten: đề xuất khách nhận bảo hành; thiết bị sẽ được gửi về Trung tâm bảo hành (TTBH) để kiểm tra và có phương án xử lý.",
        keywords: ["wifi", "bluetooth", "mất kết nối", "chập chờn"]
      },
      {
        id: "lib-a12",
        device: "iPhone",
        symptom: "iPhone bị vào nước, có dấu hiệu ẩm (LCI đỏ)",
        diagnosis: "Chỉ báo tiếp xúc chất lỏng (Liquid Contact Indicator) đã chuyển đỏ, nước có thể đã vào bo mạch.",
        solution: "🔍 CHẨN ĐOÁN: Kiểm tra chỉ báo LCI trong khay SIM đã chuyển đỏ chưa để xác nhận với khách (dùng khay lấy SIM soi đèn pin vào lỗ nhỏ trong khe SIM).\n\n🛠️ HƯỚNG DẪN XỬ LÝ:\n1. KHÔNG sạc/bấm nguồn máy ngay khi tiếp nhận.\n2. Dùng khăn mềm khô lau sạch ngoại quan (cổng sạc, khe loa, khe SIM).\n3. Kiểm tra chỉ báo LCI trong khay SIM bằng đèn pin để xác nhận với khách.\n4. Đặt máy nơi khô ráo, thoáng khí (không dùng máy sấy tóc, lò vi sóng, hay để dưới nắng gắt), giữ tối thiểu 24-48 giờ.\n5. Sau thời gian chờ, thử cắm sạc và bật nguồn lại để kiểm tra.\n\n🚫 TUYỆT ĐỐI KHÔNG ĐƯỢC LÀM: Không sạc hoặc bấm nguồn ngay sau khi máy vào nước; không dùng nhiệt cao (máy sấy, lò vi sóng, phơi nắng gắt) hoặc gạo để hút ẩm — đều có thể làm hỏng thêm hoặc gây cháy nổ.\n\n💬 KỊCH BẢN TƯ VẤN: \"Máy mình cần để khô tự nhiên trước ạ, em khuyên mình chưa nên sạc hoặc bật máy trong 24-48 giờ tới để tránh chập mạch.\"\n\n📦 LƯU Ý TTBH: Sau thời gian để khô vẫn lỗi (không lên nguồn, chập chờn): đề xuất khách nhận bảo hành; thiết bị sẽ được gửi về Trung tâm bảo hành (TTBH) để vệ sinh bo mạch chuyên sâu và kiểm tra.",
        keywords: ["vào nước", "ẩm", "lci", "rơi nước"]
      },
      {
        id: "lib-a13",
        device: "iPhone",
        symptom: "Màn hình iPhone bị vỡ kính nhưng cảm ứng vẫn dùng được",
        diagnosis: "Kính cường lực bên ngoài nứt/vỡ nhưng lớp cảm ứng và hiển thị bên trong chưa bị ảnh hưởng.",
        solution: "🔍 CHẨN ĐOÁN: Kiểm tra cảm ứng và hiển thị còn hoạt động bình thường không dù kính đã nứt/vỡ (thử vuốt/chạm các góc màn hình, kiểm tra có sọc/ám màu không).\n\n🛠️ HƯỚNG DẪN XỬ LÝ:\n1. Kiểm tra toàn bộ màn hình còn cảm ứng và hiển thị bình thường không, đặc biệt 4 góc (dấu hiệu lớp hiển thị bị ảnh hưởng).\n2. Dán tạm 1 lớp cường lực/dán màn hình để tránh vỡ lan rộng và bảo vệ tay khách trong lúc chờ thay.\n3. Tư vấn khách phương án thay cụm màn hình chính hãng (giữ đúng màu sắc, True Tone) hoặc loại thay thế theo ngân sách.\n4. Báo giá và thời gian dự kiến trước khi tiến hành thay.\n\n🚫 TUYỆT ĐỐI KHÔNG ĐƯỢC LÀM: Không tiếp tục dùng máy trong tình trạng kính vỡ có cạnh sắc mà không dán tạm bảo vệ; không tự ý thay cụm màn hình không rõ nguồn gốc mà không thông báo với khách về ảnh hưởng đến True Tone/chống nước.\n\n💬 KỊCH BẢN TƯ VẤN: \"Máy mình vỡ kính ngoài nhưng cảm ứng vẫn dùng tốt ạ, em tư vấn thay cụm màn hình chính hãng để giữ đúng màu sắc và True Tone nhé.\"\n\n📦 LƯU Ý TTBH: Có thể thay màn hình tại chỗ nếu có linh kiện; chỉ cần gửi TTBH nếu khách muốn giữ zin 100% chính hãng Apple.",
        keywords: ["màn hình vỡ", "vỡ kính", "nứt màn hình"]
      },
      {
        id: "lib-a14",
        device: "iPhone",
        symptom: "iPhone báo đầy bộ nhớ dù đã xóa bớt ứng dụng/ảnh",
        diagnosis: "Dữ liệu cache hệ thống, tin nhắn/video đính kèm, hoặc ảnh chưa đồng bộ xong iCloud vẫn chiếm dung lượng.",
        solution: "🔍 CHẨN ĐOÁN: Vào Cài đặt > Cài đặt chung > Dung lượng iPhone để xem loại dữ liệu chiếm nhiều nhất.\n\n🛠️ HƯỚNG DẪN XỬ LÝ:\n1. Vào Cài đặt > Cài đặt chung > Dung lượng iPhone, đợi máy quét và hiển thị danh sách dung lượng theo loại dữ liệu.\n2. Nếu Ảnh chiếm nhiều: vào Cài đặt > Ảnh > bật \"Tối ưu hóa bộ nhớ iPhone\" (thay vì \"Tải xuống và Giữ bản gốc\").\n3. Vào app Tin nhắn, kiểm tra các đoạn chat có nhiều ảnh/video cũ — xóa bớt file đính kèm không cần thiết (thường bị bỏ sót vì không hiện trong mục Ảnh).\n4. Quay lại mục Dung lượng iPhone, chọn từng app nặng để xóa cache/dữ liệu không cần thiết (Xóa ứng dụng > Cài lại nếu cần).\n\n🚫 TUYỆT ĐỐI KHÔNG ĐƯỢC LÀM: Không tự ý xóa ảnh, video, tin nhắn hoặc ứng dụng của khách khi chưa xác nhận — đặc biệt dữ liệu chưa đồng bộ xong lên iCloud.\n\n💬 KỊCH BẢN TƯ VẤN: \"Em kiểm tra thấy phần lớn dung lượng máy mình do tin nhắn có ảnh/video cũ ạ, mình cho em dọn bớt để máy chạy mượt hơn nhé.\"\n\n📦 LƯU Ý TTBH: Đây là vấn đề phần mềm thuần túy, không cần gửi TTBH.",
        keywords: ["đầy bộ nhớ", "hết dung lượng", "bộ nhớ"]
      },
      {
        id: "lib-a15",
        device: "Apple Watch",
        symptom: "Apple Watch không lên nguồn hoặc không sạc được",
        diagnosis: "Đế sạc từ tính không áp sát, cạn pin sâu, hoặc lỗi mạch nguồn.",
        solution: "🔍 CHẨN ĐOÁN: Kiểm tra đế sạc và mặt sau đồng hồ có khô ráo, sạch sẽ không (nước/mồ hôi cản từ tính).\n\n🛠️ HƯỚNG DẪN XỬ LÝ:\n1. Lau khô mặt sau đồng hồ và mặt đế sạc bằng khăn mềm khô.\n2. Đặt đồng hồ đúng tâm đế sạc từ tính (cảm nhận độ \"hít\" nam châm khớp), quan sát biểu tượng sét vàng hiện lên.\n3. Nếu không lên đèn: đổi sang đế sạc/cáp chính hãng khác.\n4. Cắm giữ tối thiểu 30 phút (đề phòng cạn pin sâu) trước khi kết luận không lên nguồn.\n5. Sau 30 phút, nhấn giữ nút Side đến khi thấy logo Apple để khởi động lại.\n\n🚫 TUYỆT ĐỐI KHÔNG ĐƯỢC LÀM: Không dùng đế sạc từ tính không chính hãng hoặc sai chuẩn (dễ không nhận diện, thậm chí hỏng cổng sạc); không cạy nắp lưng đồng hồ để kiểm tra pin tại quầy.\n\n💬 KỊCH BẢN TƯ VẤN: \"Em đang thử sạc lại cho đồng hồ mình bằng sạc chính hãng khác ạ, có thể chỉ do đế sạc bị bẩn thôi.\"\n\n📦 LƯU Ý TTBH: Sạc 30 phút với sạc khác vẫn không lên nguồn: đề xuất khách nhận bảo hành; thiết bị sẽ được gửi về Trung tâm bảo hành (TTBH) để kiểm tra mạch nguồn và có phương án xử lý.",
        keywords: ["apple watch", "không sạc", "không lên nguồn"]
      },
      {
        id: "lib-a16",
        device: "Apple Watch",
        symptom: "Apple Watch báo lỗi khi ghép đôi với iPhone",
        diagnosis: "Xung đột dữ liệu ghép đôi cũ, sai phiên bản watchOS/iOS tương thích, hoặc Bluetooth lỗi.",
        solution: "🔍 CHẨN ĐOÁN: Xác nhận iPhone đã cập nhật iOS mới nhất, kiểm tra đồng hồ có từng ghép với máy khác chưa.\n\n🛠️ HƯỚNG DẪN XỬ LÝ:\n1. Hỏi khách đồng hồ đã từng ghép đôi với iPhone khác trước đây chưa.\n2. Nếu còn giữ iPhone cũ: mở app Watch trên máy đó > tab \"Đồng hồ của tôi\" > chạm biểu tượng (i) cạnh đồng hồ > \"Bỏ ghép đôi Apple Watch\".\n3. Nếu không còn máy cũ: đăng nhập icloud.com/find bằng Apple ID của khách → chọn thiết bị Apple Watch → Xóa thiết bị/Bỏ ghép đôi từ xa.\n4. Khởi động lại cả iPhone và Apple Watch.\n5. Mở app Watch trên iPhone mới > \"Bắt đầu ghép đôi\" > đưa đồng hồ vào khung camera để ghép lại.\n\n🚫 TUYỆT ĐỐI KHÔNG ĐƯỢC LÀM: Không thao tác bỏ ghép đôi qua iCloud.com khi chưa xác minh chắc chắn đây đúng là tài khoản và thiết bị của khách.\n\n💬 KỊCH BẢN TƯ VẤN: \"Đồng hồ mình cần được gỡ khỏi tài khoản cũ trước khi ghép với máy mới ạ, em hỗ trợ mình làm luôn nhé.\"\n\n📦 LƯU Ý TTBH: Vấn đề phần mềm thuần túy, không cần gửi TTBH.",
        keywords: ["apple watch", "ghép đôi", "pairing", "kết nối"]
      },
      {
        id: "lib-a17",
        device: "Apple Watch",
        symptom: "Kính Apple Watch bị nứt hoặc trầy nặng",
        diagnosis: "Va đập mạnh làm nứt kính Ion-X/Sapphire, chưa chắc ảnh hưởng màn hình cảm ứng bên trong.",
        solution: "🔍 CHẨN ĐOÁN: Kiểm tra cảm ứng/hiển thị còn hoạt động bình thường không dù kính nứt.\n\n🛠️ HƯỚNG DẪN XỬ LÝ:\n1. Kiểm tra cảm ứng và hiển thị của đồng hồ còn hoạt động bình thường không.\n2. Dán tạm miếng bảo vệ lên mặt kính nứt để tránh mảnh vỡ rơi ra gây xước tay khách.\n3. Tư vấn phương án thay kính/màn hình chính hãng, báo rõ chi phí và thời gian.\n4. Giải thích với khách việc thay kính rời có thể ảnh hưởng đến độ kín chống nước của máy, ghi chú vào phiếu tiếp nhận.\n\n🚫 TUYỆT ĐỐI KHÔNG ĐƯỢC LÀM: Không để khách tiếp tục đeo máy có kính nứt sắc cạnh mà không dán bảo vệ tạm; không cam kết máy vẫn chống nước như cũ sau khi thay kính rời nếu chưa kiểm tra lại gioăng.\n\n💬 KỊCH BẢN TƯ VẤN: \"Kính đồng hồ mình bị nứt do va đập ạ, em tư vấn thay kính chính hãng, lưu ý sau khi thay có thể ảnh hưởng độ kín chống nước nhé.\"\n\n📦 LƯU Ý TTBH: Thay kính rời có ảnh hưởng chuẩn chống nước — cần thông báo rõ và ghi vào phiếu trước khi làm.",
        keywords: ["apple watch", "kính nứt", "vỡ kính", "trầy"]
      },
      {
        id: "lib-a18",
        device: "AirPods",
        symptom: "AirPods chỉ một bên có tiếng hoặc mất kết nối một bên",
        diagnosis: "Lệch pin giữa 2 bên tai, bám bụi ở lưới loa, hoặc lỗi đồng bộ cặp đôi.",
        solution: "🔍 CHẨN ĐOÁN: Kiểm tra pin từng bên tai trong app (mở hộp gần iPhone, vuốt thông báo pin hiện lên, hoặc widget Pin), xác nhận vấn đề là mất tiếng hay mất kết nối bên đó.\n\n🛠️ HƯỚNG DẪN XỬ LÝ:\n1. Mở nắp hộp AirPods gần iPhone để xem % pin từng bên tai qua thông báo/widget.\n2. Đặt cả 2 tai vào hộp, đóng nắp, chờ 30 giây rồi mở lại để đồng bộ lại.\n3. Trên iPhone: vào Cài đặt > Bluetooth > chạm (i) cạnh AirPods > \"Quên thiết bị này\" → đặt AirPods vào hộp, mở nắp, giữ nút Thiết lập (mặt sau hộp) đến khi đèn nhấp nháy trắng → ghép đôi lại từ đầu.\n4. Dùng cọ khô vệ sinh lưới loa của bên tai gặp vấn đề.\n\n🚫 TUYỆT ĐỐI KHÔNG ĐƯỢC LÀM: Không dùng vật ướt hoặc chất tẩy rửa để vệ sinh lưới loa AirPods; không khẳng định chắc chắn lỗi phần cứng khi chưa thử đồng bộ lại từ đầu.\n\n💬 KỊCH BẢN TƯ VẤN: \"Em đã đồng bộ lại AirPods cho mình rồi ạ, nếu 1 bên vẫn yếu hơn hẳn thì khả năng bên đó đã chai pin cần thay.\"\n\n📦 LƯU Ý TTBH: Đồng bộ lại vẫn không cải thiện: đề xuất khách nhận bảo hành; thiết bị sẽ được gửi về Trung tâm bảo hành (TTBH) để kiểm tra/thay tai bị lỗi.",
        keywords: ["airpods", "một bên", "mất kết nối", "mất tiếng"]
      },
      {
        id: "lib-a19",
        device: "AirPods",
        symptom: "Hộp sạc AirPods không sạc được hoặc đèn báo không sáng",
        diagnosis: "Cổng sạc/tiếp điểm hộp bám bẩn, cáp/đế sạc lỗi, hoặc pin hộp đã chai.",
        solution: "🔍 CHẨN ĐOÁN: Kiểm tra chấu tiếp điểm kim loại trong hộp có bám bẩn không, thử cáp/đế sạc khác.\n\n🛠️ HƯỚNG DẪN XỬ LÝ:\n1. Mở nắp hộp, soi đèn pin kiểm tra 2 chấu tiếp điểm kim loại (nơi tai nghe chạm vào) có bám bẩn/oxi hóa không.\n2. Dùng tăm bông khô hoặc thấm chút cồn isopropyl lau nhẹ chấu tiếp điểm, để khô hoàn toàn trước khi đặt tai nghe vào lại.\n3. Đặt AirPods vào đúng khớp trong hộp (nghe/cảm nhận tiếng \"cạch\" nam châm hút), đóng nắp.\n4. Cắm sạc bằng cáp/đế sạc chính hãng khác, quan sát đèn LED phía trước hộp (hé nắp để xem đèn khi đang sạc).\n\n🚫 TUYỆT ĐỐI KHÔNG ĐƯỢC LÀM: Không dùng cồn/chất lỏng đổ trực tiếp vào hộp; không cạy mở hộp sạc để kiểm tra pin bên trong tại quầy.\n\n💬 KỊCH BẢN TƯ VẤN: \"Em đã vệ sinh chấu sạc trong hộp cho mình rồi ạ, mình thử sạc lại xem đèn báo đã sáng chưa nhé.\"\n\n📦 LƯU Ý TTBH: Vệ sinh và đổi sạc vẫn không lên đèn: đề xuất khách nhận bảo hành; thiết bị sẽ được gửi về Trung tâm bảo hành (TTBH) để kiểm tra pin/mạch hộp sạc.",
        keywords: ["airpods", "hộp sạc", "không sạc", "đèn không sáng"]
      },
      {
        id: "lib-a20",
        device: "AirPods",
        symptom: "AirPods bị rè hoặc âm thanh rột rẹt khi nghe",
        diagnosis: "Lưới loa bám bụi/ráy tai, xung đột Bluetooth, hoặc màng loa ẩm.",
        solution: "🔍 CHẨN ĐOÁN: Kiểm tra lưới loa có bám bụi/ráy tai không, xác nhận rè liên tục hay chỉ khi di chuyển xa thiết bị.\n\n🛠️ HƯỚNG DẪN XỬ LÝ:\n1. Hỏi khách rè liên tục hay chỉ khi đi xa iPhone (nếu chỉ khi đi xa — là do tín hiệu Bluetooth yếu, không phải lỗi phần cứng).\n2. Quan sát lưới loa từng bên tai có bám bụi/ráy tai bằng đèn pin.\n3. Dùng cọ khô (không dùng vật nhọn) vệ sinh nhẹ nhàng lưới loa.\n4. Trên iPhone: Cài đặt > Bluetooth > (i) cạnh AirPods > \"Quên thiết bị này\", sau đó ghép đôi lại từ đầu (đặt trong hộp, mở nắp, giữ nút Thiết lập).\n\n🚫 TUYỆT ĐỐI KHÔNG ĐƯỢC LÀM: Không dùng vật nhọn/kim loại chọc vào lưới loa; nếu tai nghe vừa qua khu vực ẩm/mưa, không sạc ngay mà để khô tự nhiên trước.\n\n💬 KỊCH BẢN TƯ VẤN: \"Em đã vệ sinh và kết nối lại AirPods cho mình rồi ạ, nếu vừa qua khu vực ẩm thì để khô tự nhiên thêm nhé.\"\n\n📦 LƯU Ý TTBH: Vệ sinh và kết nối lại vẫn rè, khả năng màng loa ẩm/hỏng: đề xuất khách nhận bảo hành; thiết bị sẽ được gửi về Trung tâm bảo hành (TTBH) để kiểm tra và có phương án xử lý.",
        keywords: ["airpods", "rè", "rột rẹt", "âm thanh"]
      },
      {
        id: "lib-a21",
        device: "iPad",
        symptom: "iPhone/iPad bị treo ở màn hình táo (kèm thanh tiến trình) khi đang cập nhật phần mềm",
        diagnosis: "Quá trình cài đặt bản cập nhật iOS/iPadOS bị gián đoạn hoặc kéo dài bất thường.",
        solution: "🔍 CHẨN ĐOÁN: Xác nhận máy đang cập nhật phần mềm (không phải khôi phục dữ liệu), quan sát thanh tiến trình dưới logo Apple có nhích lên trong ít nhất 1 giờ không.\n\n🛠️ HƯỚNG DẪN XỬ LÝ:\n1. Xác nhận với khách máy đang cập nhật phần mềm (không phải đang restore từ backup).\n2. Theo dõi thanh tiến trình dưới logo Apple trong tối thiểu 1 giờ, xem có nhích lên không.\n3. Nếu không nhích sau 1 giờ: kết nối máy với máy tính bằng cáp (Mac dùng Finder trên macOS Catalina trở lên, Windows dùng Apple Devices hoặc iTunes).\n4. Đưa máy vào Recovery Mode theo đúng dòng máy (từ iPhone 8: nhấn nhanh Volume Up → nhấn nhanh Volume Down → giữ Side đến khi hiện màn hình kết nối máy tính).\n5. Trên máy tính, khi được hỏi chọn \"Update\" trước (giữ dữ liệu); chỉ chọn \"Restore\" (xóa toàn bộ máy) nếu Update không thành công.\n\n🚫 TUYỆT ĐỐI KHÔNG ĐƯỢC LÀM: Không tự ý chọn \"Restore\" (xóa máy) ngay từ đầu khi chưa thử \"Update\" trước và chưa xác nhận với khách về khả năng mất dữ liệu.\n\n💬 KỊCH BẢN TƯ VẤN: \"Máy mình đang treo giữa chừng lúc cập nhật ạ, em kết nối với máy tính để cài lại bản cập nhật mà không mất dữ liệu, mình yên tâm chờ em vài phút nhé.\"\n\n📦 LƯU Ý TTBH: Nếu bắt buộc phải Restore (xóa máy) mới hết treo, cần thông báo rõ và xác nhận với khách trước khi thao tác vì sẽ mất dữ liệu chưa sao lưu; nếu Update/Restore qua máy tính vẫn không cứu được máy: đề xuất khách nhận bảo hành, thiết bị sẽ được gửi về Trung tâm bảo hành (TTBH) để kiểm tra phần cứng.",
        keywords: ["treo táo", "treo logo", "cập nhật", "thanh tiến trình", "đứng máy khi update"]
      },
      {
        id: "lib-a22",
        device: "AirPods",
        symptom: "AirPods Pro mất/giảm tính năng khử tiếng ồn (Active Noise Cancellation)",
        diagnosis: "Sai lệch cài đặt, đầu tai không kín (fit) hoặc bám bẩn khiến khử ồn hoạt động không hiệu quả.",
        solution: "🔍 CHẨN ĐOÁN: Kiểm tra AirPods và iPhone đã cập nhật phần mềm mới nhất chưa, xác nhận tính năng \"Khử tiếng ồn chủ động\" đang bật và Adaptive Audio đang tắt trong Cài đặt.\n\n🛠️ HƯỚNG DẪN XỬ LÝ:\n1. Kiểm tra iPhone và AirPods đã cập nhật phiên bản mới nhất chưa (Cài đặt > Cài đặt chung > Giới thiệu, chọn AirPods để xem phiên bản firmware).\n2. Vào Cài đặt > Bluetooth > (i) cạnh AirPods, xác nhận chế độ đang chọn là \"Khử tiếng ồn\" (không phải Trong suốt hoặc Tắt), tắt Adaptive Audio nếu đang bật.\n3. Chạy bài kiểm tra độ khít tai nghe: Cài đặt > Bluetooth > (i) cạnh AirPods > \"Kiểm tra vừa vặn của đầu tai\" (AirPods Pro 1/2) để xác nhận đúng size.\n4. Vệ sinh lưới loa và cảm biến áp suất bằng cọ khô.\n5. Nếu vẫn chưa cải thiện: đặt cả 2 tai vào hộp, giữ nút Thiết lập mặt sau hộp 15 giây đến khi đèn nhấp nháy vàng cam rồi trắng để Reset AirPods, sau đó ghép đôi lại.\n\n🚫 TUYỆT ĐỐI KHÔNG ĐƯỢC LÀM: Không tự ý đổi size đầu tai khi khách chưa xác nhận cảm thấy thoải mái; không dùng vật cứng đâm vào lưới loa/cảm biến khi vệ sinh.\n\n💬 KỊCH BẢN TƯ VẤN: \"Em kiểm tra thấy đầu tai chưa khít/cần vệ sinh nên khử ồn chưa tối ưu ạ, em đổi size đầu tai và vệ sinh lại cho mình, mình đeo thử lại xem đã êm hơn chưa nhé.\"\n\n📦 LƯU Ý TTBH: Đã đổi đầu tai đúng size, vệ sinh và reset vẫn không cải thiện khử ồn: đề xuất khách nhận bảo hành; thiết bị sẽ được gửi về Trung tâm bảo hành (TTBH) để kiểm tra micro/cảm biến áp suất trên tai nghe.",
        keywords: ["airpods", "khử ồn", "chống ồn", "anc", "noise cancellation"]
      }
    ],
    demoGuide: [
      {
        id: 'demo-iphone-ipad',
        name: 'iPhone / iPad',
        sections: [
          {
            id: 'demo-iphone-ipad-install',
            kind: 'install',
            title: 'Cài đặt demo',
            requirements: [
              'Máy Demo iOS đã nâng cấp lên bản iOS mới nhất (tải firmware tại https://ipsw.me/ nếu cần).',
              'Có thêm 1 máy iOS khác (iPhone/iPad) đang dùng bình thường — không phải máy demo — để thao tác đăng ký.',
              'Tài khoản Apple ID đang dùng bình thường (dùng mail FPT).',
              'Apple ID của cửa hàng đã được cấp sẵn.',
              'SIM để kích hoạt máy Demo iOS.'
            ],
            stepGroups: [
              {
                label: 'Phần 1 — Đăng ký mã PIN DCOTA (thao tác trên máy bất kỳ, KHÔNG bật máy demo trước)',
                items: [
                  'Truy cập https://demounit.apple.com, đăng nhập bằng Apple ID đã chuẩn bị từ trước.',
                  'Nếu màn hình "Manage Devices" hiện ra, nhấn biểu tượng 3 vạch ngang (hamburger). Nếu không thấy, nhập số sê-ri của Máy Demo.',
                  'Nhấn/chạm "Thêm thiết bị mới" (Add a new device) từ menu.',
                  'Nhập số sê-ri của Máy Demo, nhấn "Tiếp tục" (Continue).',
                  'Nhập Apple ID của cửa hàng đã được cấp (theo đúng file để chọn đúng cửa hàng và quốc gia) ở bước chọn quốc gia.',
                  'Nhập hoặc chọn tên công ty đang đăng ký Máy Demo.',
                  'Chọn đúng tên cửa hàng đang đăng ký, nhấn "Đăng ký tại vị trí cửa hàng này" (Enroll at this store location). Xác nhận đăng ký/kích hoạt bằng Wi-Fi hay mạng di động.',
                  'Màn hình sẽ hiện mã PIN thiết bị DCOTA gồm 6 số kèm thời gian hiệu lực (thường ~29 phút). Nếu được nhắc chọn ngôn ngữ, chọn ngôn ngữ/loại cho Máy Demo rồi nhấn Tiếp tục. Xong phần này thì chuyển sang thao tác trực tiếp trên Máy Demo.'
                ]
              },
              {
                label: 'Phần 2 — Thao tác trực tiếp trên máy Demo',
                items: [
                  'Lắp SIM vào máy để chuẩn bị kích hoạt. Vuốt mở khóa màn hình "Xin chào" để bắt đầu cài đặt Máy Demo.',
                  'Nếu máy hiện "Update Completed", nhấn "Tiếp tục" (Continue).',
                  'Ở màn hình chọn mạng Wi-Fi, chọn đúng mạng Wi-Fi dùng riêng để đăng ký DCOTA của cửa hàng.',
                  'Ở màn hình "Demo Registration", nhập mã PIN 6 số đã tạo ở Phần 1.',
                  'Máy hiện "Demo update in progress. Do not disturb device." — máy sẽ tự khởi động lại vài lần trong lúc cập nhật, không thao tác vào máy trong giai đoạn này.',
                  'Khi đăng ký thành công, ứng dụng Trình bảo vệ màn hình DemoLoop sẽ xuất hiện khi máy bị khóa hoặc không hoạt động — báo hiệu đăng ký DCOTA đã hoàn tất.'
                ]
              },
              {
                label: 'Phần 3 — Kiểm tra mạng sau khi đăng ký (khuyến nghị làm ngay)',
                items: [
                  'Ở góc trên bên phải màn hình, giữ 3 ngón tay ở vị trí thẳng đứng để kích hoạt trình bảo vệ màn hình.',
                  'Menu DemoLoop hiện ra, chạm "Run Network Diagnostics".',
                  'Đợi mạng kiểm tra tự động chạy xong.',
                  'Khi trang Kết quả hiện ra, nhấn "Gửi" (Submit).',
                  'Khi thông báo thành công hiện ra, nhấn "OK" để đóng, quay lại trang menu bằng cách nhấn "Trạng thái" (Status).',
                  'Nhấn "Xong" (Done) để đóng menu.'
                ]
              }
            ],
            doNots: [
              'Không tự ý chuyển màn hình, thoát ứng dụng hoặc bấm nút nguồn trong lúc máy đang hiện "Demo update in progress" — có thể phải khôi phục và làm lại từ đầu.',
              'Không chọn "Cài đặt nhanh" hoặc rời màn hình sau khi đã nhấn "Thiết lập thủ công" — nếu làm vậy phải khởi động lại Máy Demo và lặp lại toàn bộ từ bước 1.',
              'Không để quá thời gian hiệu lực của mã PIN — nếu hết hạn, dùng chức năng "Làm mới mã" ở mục Xử lý sự cố.'
            ]
          },
          {
            id: 'demo-iphone-ipad-remove',
            kind: 'remove',
            title: 'Xóa demo',
            stepGroups: [
              {
                label: 'Cách 1 — Xóa bằng công cụ quản lý ngay trên máy',
                items: [
                  'Trong khi máy đang chạy màn hình khóa (logo Apple xoay), chạm và giữ 3 ngón tay tương ứng với 3 chấm màu xanh lam trên màn hình, giữ trong 5 giây để hiện menu quản lý.',
                  'Chạm vào dòng "Xóa".',
                  'Chọn "Hủy đăng ký và xóa nội dung minh họa" để đặt lại thiết bị về cài đặt gốc.',
                  'Máy sẽ xóa toàn bộ nội dung, sau đó quay về màn hình "Xin chào" khi hoàn thành.'
                ]
              },
              {
                label: 'Cách 2 — Xóa bằng máy Demo khác tại cửa hàng (khi máy cần xóa không thao tác trực tiếp được)',
                items: [
                  'Trên máy Demo KHÁC đang hoạt động bình thường, ở màn hình khóa, chạm giữ 3 ngón tay ở vị trí 3 chấm xanh lam trong 5 giây để mở menu quản lý.',
                  'Chạm vào dòng "Thiết bị khác" để xem tất cả thiết bị đang chạy demo tại cửa hàng.',
                  'Chọn đúng thiết bị muốn xóa.',
                  'Chạm vào dòng "Xóa".',
                  'Chọn "Hủy đăng ký và xóa nội dung minh họa" để đặt lại thiết bị về cài đặt gốc.',
                  'Máy sẽ xóa toàn bộ nội dung, sau đó quay về màn hình "Xin chào".'
                ]
              }
            ],
            doNots: [
              'Không xóa nhầm thiết bị khi dùng Cách 2 — luôn xác nhận đúng tên/số sê-ri thiết bị trước khi chạm "Xóa", vì thao tác xóa toàn bộ nội dung minh họa không thể hoàn tác.'
            ]
          },
          {
            id: 'demo-iphone-ipad-troubleshoot',
            kind: 'troubleshoot',
            title: 'Xử lý sự cố demo',
            cases: [
              {
                situation: 'Đã nhập số sê-ri vào Máy Demo và nhận mã PIN, nhưng không thấy màn hình đăng ký thiết bị Demo trên Máy Demo.',
                items: [
                  'Đảm bảo Máy Demo đang chạy iOS mới nhất: Cài đặt > Cài đặt chung > Giới thiệu > Phiên bản. Nếu chưa mới nhất, chạy lại (restore) thiết bị từ iTunes/Finder trước.',
                  'Nếu nhập sai số sê-ri vào Máy Demo, thiết bị có số sê-ri đúng sẽ phát tiếng "ping" trong lúc kích hoạt thay vì Máy Demo đang thao tác — kiểm tra lại đã nhập đúng số sê-ri chưa (nhấn nút thông tin ở màn hình "Xin chào" sau khi khôi phục để xem lại số sê-ri).',
                  'Phải tạo mã PIN trước khi bắt đầu kích hoạt trên máy demo.',
                  'Đảm bảo Máy Demo đang kết nối đúng mạng Wi-Fi dùng riêng cho Demo trong lúc đăng ký DCOTA.',
                  'Nếu lỡ chọn "Cài đặt nhanh" hoặc rời màn hình sau khi nhấn "Thiết lập thủ công": phải khởi động lại Máy Demo và lặp lại từ bước 1.',
                  'Không tự làm sai trình tự hướng dẫn đăng ký — mã PIN có thời gian hiệu lực giới hạn.'
                ]
              },
              {
                situation: 'Đến bước kích hoạt thì báo lỗi "không có thẻ SIM".',
                items: [
                  'Cần thẻ SIM để kích hoạt, đăng ký và cập nhật liên tục.',
                  'Nhấn/chọn "Quay lại" trên Máy Demo.',
                  'Tắt nguồn Máy Demo.',
                  'Lắp thẻ SIM vào Máy Demo.',
                  'Lặp lại các bước để đăng ký thiết bị DCOTA.'
                ]
              },
              {
                situation: 'Mã xác thực (mã PIN) đã hết hạn.',
                items: [
                  'Từ trang Xác nhận thiết bị DCOTA của Máy Demo, nhấn "Làm mới mã" (Renew code) để tạo mã mới, sau đó tiếp tục theo hướng dẫn đăng ký ở trên.'
                ]
              }
            ],
            note: 'Không xử lý được / cần hỗ trợ thêm: QLKT Vùng — FRT.QLKT@FPT.COM.VN, hoặc Group Zalo Apple DCOTA — https://zaloapp.com/g/txwazw386'
          }
        ]
      },
      {
        id: 'demo-mac',
        name: 'Mac',
        sections: [
          {
            id: 'demo-mac-install',
            kind: 'install',
            title: 'Cài đặt demo',
            requirements: [
              'Máy Mac đã chạy phiên bản hệ điều hành mới nhất trước khi tiến hành cài DCOTA.',
              'Nếu máy đã thiết lập sẵn demo nhưng chưa đăng ký vào DCOTA: xóa toàn bộ và chạy sạch lại thiết bị trước khi bắt đầu.'
            ],
            stepGroups: [
              {
                label: 'Đăng ký mã PIN DCOTA cho máy Mac (dùng thiết bị bất kỳ, KHÔNG bật máy demo trước)',
                items: [
                  'Dùng thiết bị di động bất kỳ, vào demounit.apple.com, tìm đúng shop (tìm theo ID hoặc theo Thành phố/địa chỉ).',
                  'Khi đã thấy đúng tên shop, chọn biểu tượng > tại đúng địa chỉ shop trên bản đồ.',
                  'Chọn "Enroll a New Device".',
                  'Nhập Serial của máy Mac và làm theo hướng dẫn hiện ra.',
                  'Nếu có 1 danh mục hiện ra, chọn tiếp "Standard".',
                  'Màn hình sẽ hiện ra 1 mã gồm 6 số → chuyển sang thao tác trên máy demo.'
                ]
              },
              {
                label: 'Thao tác trên máy demo sau khi có mã 6 số',
                items: [
                  'Bật máy Mac, thiết bị sẽ vào màn hình "Hello".',
                  'Kết nối vào Wi-Fi của nhân viên shop (sai Wi-Fi sẽ không chạy demo được).',
                  'Ở màn hình "Demo Registration", nhập mã 6 số đã nhận được ở bước trước.',
                  'Máy sẽ tự cập nhật demo ("Demo update in progress. Do not disturb device.") — chỉ cần chờ đến khi hoàn tất, không thao tác vào máy trong lúc này.'
                ]
              }
            ],
            doNots: [
              'Không bật máy Mac demo trước khi hoàn tất phần đăng ký trên demounit.apple.com.',
              'Không kết nối sai mạng Wi-Fi — máy sẽ không cài được demo.',
              'Không tắt máy hoặc rút nguồn khi đang hiện "Demo update in progress".'
            ]
          },
          {
            id: 'demo-mac-remove',
            kind: 'remove',
            title: 'Xóa demo',
            note: 'Cách khuyên dùng để khôi phục máy Mac về cài đặt gốc là dùng Apple Configurator 2 sau khi xóa máy Mac khỏi DCOTA.',
            requirements: [
              '1 máy Mac khác đã cài sẵn Apple Configurator 2.',
              'Cáp 2 đầu chuẩn kết nối USB-C (hỗ trợ Thunderbolt 3 trở lên).'
            ],
            stepGroups: [
              {
                label: 'Bước 1 — Xóa máy Mac khỏi trình bảo vệ màn hình / DemoUnit',
                items: [
                  'Trong khi máy đang chạy màn hình demo, nhấn tổ hợp phím Command-Option-Shift-Mũi tên trái để hiện menu quản lý.',
                  'Chạm vào "Xóa", sau đó chạm "OK" để xóa máy Mac khỏi DCOTA.',
                  'Máy Mac sẽ hiện tài khoản người dùng minh họa và quản trị viên minh họa trên màn hình khóa sau khi hoàn thành.'
                ]
              },
              {
                label: 'Bước 2 — Khôi phục máy Mac về tình trạng ban đầu (dùng máy Mac thứ 2 đã cài Apple Configurator 2)',
                items: [
                  'Khởi chạy Apple Configurator 2 trên máy Mac thứ 2, đặt 2 máy cạnh nhau.',
                  'Kết nối máy Mac cần khôi phục với máy thứ 2 bằng cáp USB-C — cắm vào đúng cổng USB-C trên cùng, gần phím ESC nhất.',
                  'Đưa máy Mac cần khôi phục về chế độ DFU: nhấn giữ Control trái - Option trái - Mũi tên phải - Nút nguồn trong 10 giây, sau đó thả hết các phím TRỪ nút Nguồn, tiếp tục giữ nút Nguồn thêm 7 giây (có thể cần thử vài lần mới đúng thao tác).',
                  'Trên Apple Configurator 2 ở máy thứ 2: chọn máy Mac cần khôi phục trong cửa sổ thiết bị.',
                  'Từ menu Apple Configurator 2, chọn Hành động > Khôi phục, chọn tiếp Khôi phục. Sẽ có cảnh báo: toàn bộ dữ liệu trên máy sẽ bị xóa và firmware sẽ cập nhật — không thể hoàn tác. Xác nhận đúng máy cần khôi phục trước khi đồng ý.',
                  'Chờ hoàn tất — logo Apple sẽ hiện ra và biến mất vài lần trong lúc khôi phục.',
                  'Nếu khôi phục thành công, sẽ thấy trợ lý thiết lập macOS hiện ra để chọn ngôn ngữ.'
                ]
              }
            ],
            doNots: [
              'Không nhấn "Khôi phục" khi chưa chắc chắn đã chọn đúng máy Mac trong Apple Configurator 2 — thao tác này xóa toàn bộ dữ liệu và không thể hoàn tác.',
              'Không rút cáp USB-C hoặc tắt máy khi đang trong quá trình Khôi phục.'
            ]
          }
        ]
      },
      {
        id: 'demo-apple-watch',
        name: 'Apple Watch',
        sections: [
          {
            id: 'demo-apple-watch-install',
            kind: 'install',
            title: 'Cài đặt demo',
            requirements: [
              'Cần máy Mac, PC hoặc điện thoại thông minh để truy cập trang đăng ký https://demounit.apple.com — dùng địa chỉ email của Apple ID để đăng nhập.',
              'Apple Watch cần Wi-Fi chuẩn 802.11n 2.4GHz.',
              'Cần số sê-ri của đồng hồ (kiểm tra trên hộp).',
              'Theo tài liệu gốc (2022): DCOTA hỗ trợ thiết bị chạy watchOS 5 trở lên, gồm Apple Watch Series 3, Series SE, Series 7 — cần xác nhận lại danh sách đời máy hỗ trợ hiện tại vì có thể đã mở rộng thêm.'
            ],
            stepGroups: [
              {
                label: 'Phần A — Đăng ký trên demounit.apple.com (dùng điện thoại/máy tính bất kỳ)',
                items: [
                  'Đi đến demounit.apple.com và chọn "Thêm thiết bị" — nhập số sê-ri của đồng hồ.',
                  'Tìm cửa hàng bằng thanh tìm kiếm (tốt nhất tìm theo ID Apple của cửa hàng).',
                  'Đăng ký cửa hàng đó.',
                  'Xác nhận: sẽ không có mã PIN cần nhập cho Apple Watch (khác với iPhone/iPad và Mac) — nếu đăng ký thành công, sẽ thấy thông báo hoàn tất kích hoạt ngay trên đồng hồ.'
                ]
              },
              {
                label: 'Phần B — Bật đồng hồ và xem trạng thái',
                items: [
                  'Nếu sau khi bật Apple Watch thấy màn hình thiết lập → chuyển ngay sang Phần C bên dưới.',
                  'Nếu sau khi bật thấy màn hình mặt đồng hồ bình thường (không phải màn hình thiết lập demo): mở ứng dụng Cài đặt trên đồng hồ, dùng 2 ngón tay chạm vào màn hình 3 lần liên tiếp để mở menu NanoDemo.'
                ]
              },
              {
                label: 'Phần C — Tiến hành thiết lập đồng hồ',
                items: [
                  'Bật đồng hồ, chạm "Tiếp theo".',
                  'Chọn Vùng/Quốc gia.',
                  'Chạm "Tiếp theo" để chọn chế độ minh họa.',
                  'Chọn chế độ minh họa phù hợp với cách trưng bày tại quầy: "Demo Cổ tay" (Chạm & Thử) hoặc "Demo Cố định" (Bảo vệ MTI).',
                  'Chạm "Tiếp tục".',
                  'Chạm chọn đúng mạng Wi-Fi của cửa hàng.',
                  'Chạm "Cho phép" ở lời nhắc vị trí.',
                  'Nhập mật khẩu Wi-Fi bằng Scribble (viết tay trên mặt đồng hồ) — ký tự mật khẩu hiển thị ở trên cùng, có thể vuốt mũi tên để cuộn và chọn ký tự thay thế nếu viết sai.',
                  'Chạm "Xong" khi nhập mật khẩu xong.',
                  'Nếu đồng hồ có tính năng di động, chạm "Bỏ qua" để bỏ cấp quyền (chỉ áp dụng với cửa hàng của nhà mạng hỗ trợ tính năng này).',
                  'Chạm "Kích hoạt" và đợi thiết bị hoàn tất.',
                  'Đợi thiết bị hoàn tất kích hoạt.',
                  'Thông báo "Device successfully activated" (kích hoạt thành công) sẽ hiện ra.',
                  'Đồng hồ hiện "Demo update in progress, please wait" — đang cập nhật minh họa, không thao tác vào máy.',
                  'Sau khi đăng ký, thiết bị sẽ khởi động lại (hiện logo Apple).',
                  'Mặt đồng hồ demo sẽ hiển thị khi hoàn thành.'
                ]
              }
            ],
            doNots: [
              'Không kết nối sai mạng Wi-Fi ở bước chọn Wi-Fi cửa hàng — đồng hồ sẽ không kích hoạt được demo.',
              'Không tắt đồng hồ hoặc thao tác khác khi đang hiện "Demo update in progress, please wait".',
              'Không bỏ qua bước xác nhận số Serial đã đăng ký trên demounit.apple.com trước khi bật máy — nếu chưa đăng ký, đồng hồ sẽ không vào được luồng thiết lập demo.'
            ]
          },
          {
            id: 'demo-apple-watch-troubleshoot',
            kind: 'troubleshoot',
            title: 'Xử lý sự cố demo',
            cases: [
              {
                situation: 'Khi mở Apple Watch, máy vào thẳng màn hình mặt đồng hồ, không theo các bước hướng dẫn thiết lập bên trong.',
                items: [
                  'Cần thực hiện kích hoạt lại. Đảm bảo đã đăng ký số Serial trên trang demounit.apple.com trước.',
                  'Đi đến nano menu (dùng 2 ngón tay chạm màn hình 3 lần liên tiếp) và làm theo: chạm "Kích hoạt" → chạm "Kích hoạt lại" → đợi thiết bị hoàn tất kích hoạt.',
                  'Thông báo xác nhận sẽ hiện khi hoàn tất — đăng ký DCOTA sẽ bắt đầu.',
                  'Giao diện người dùng khóa sẽ hiện khi kết nối, mặt đồng hồ demo sẽ hiển thị khi hoàn tất.'
                ]
              },
              {
                situation: 'Apple Watch bị sai thời gian hiển thị (từ watchOS 6 trở đi, thao tác như nhau).',
                items: [
                  'Nhấn Digital Crown để chuyển đến màn hình chính, chọn "Cài đặt".',
                  'watchOS 5: chọn "Thời gian". watchOS 6: chọn "Đồng hồ".',
                  'Cuộn xuống dưới cùng, dùng 2 ngón tay chạm vào màn hình và vuốt lên — không chạm vào bất kỳ tùy chọn nào khác (bước này có thể cần thử vài lần).',
                  'watchOS 5: đặt ngày và múi giờ chính xác. watchOS 6: đặt múi giờ.',
                  'watchOS 5: sau khi đặt múi giờ xong, đồng hồ sẽ tự khởi động lại — kiểm tra lại ngày, giờ, múi giờ đã đúng chưa.'
                ]
              }
            ],
            doNots: [
              'Không chạm vào các tùy chọn khác khi đang thao tác vuốt 2 ngón tay ở bước dò xuống cuối danh sách cài đặt — dễ chọn nhầm cài đặt khác trên đồng hồ.'
            ]
          }
        ]
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
        id: "lib-g1",
        device: "Đồng hồ (Fenix/Forerunner)",
        symptom: "Lỗi đồng bộ app Garmin Connect",
        diagnosis: "Xung đột kết nối Bluetooth hoặc phiên bản app đã cũ.",
        solution: "🔍 CHẨN ĐOÁN: Kiểm tra phiên bản app Garmin Connect có phải bản mới nhất không, xác nhận Bluetooth điện thoại đang bật.\n\n🛠️ HƯỚNG DẪN XỬ LÝ:\n1. Mở App Store/CH Play kiểm tra app Garmin Connect đã cập nhật bản mới nhất chưa, cập nhật nếu có.\n2. Vào Cài đặt điện thoại > Bluetooth, tìm tên đồng hồ trong danh sách đã ghép đôi, chọn \"Quên thiết bị này\" (Forget This Device).\n3. Khởi động lại cả điện thoại và đồng hồ.\n4. Mở app Garmin Connect > biểu tượng đồng hồ (góc trên) > \"Thêm thiết bị\" > làm theo hướng dẫn ghép đôi lại từ đầu.\n5. Sau khi ghép xong, vào tab đồng hồ trong app, kéo xuống để đồng bộ dữ liệu thủ công.\n\n🚫 TUYỆT ĐỐI KHÔNG ĐƯỢC LÀM: Không xóa app Garmin Connect và cài lại khi chưa thử ghép đôi lại trước — có thể mất lịch sử tập luyện chưa sao lưu lên Garmin Connect Cloud.\n\n💬 KỊCH BẢN TƯ VẤN: \"Em đã kết nối lại đồng hồ với điện thoại mình rồi ạ, mình thử đồng bộ lại xem đã lên dữ liệu chưa nhé.\"\n\n📦 LƯU Ý TTBH: Vấn đề phần mềm thuần túy, không cần gửi TTBH.",
        keywords: ["đồng bộ", "connect", "bluetooth"]
      },
      {
        id: "lib-g2",
        device: "Đồng hồ (Fenix/Forerunner)",
        symptom: "Đồng hồ Garmin hao pin đột ngột",
        diagnosis: "Thường do bật các tính năng đo liên tục như Pulse Ox hoặc mặt đồng hồ bên thứ 3.",
        solution: "🔍 CHẨN ĐOÁN: Kiểm tra các tính năng đo liên tục đang bật (Pulse Ox, đo nhịp tim 24/7), xác nhận có dùng mặt đồng hồ bên thứ 3 không.\n\n🛠️ HƯỚNG DẪN XỬ LÝ:\n1. Trên đồng hồ, vào Cài đặt > Cảm biến & Phụ kiện > Pulse Ox > tắt \"Theo dõi cả ngày\".\n2. Vào Cài đặt > Nhịp tim, kiểm tra chế độ đo có đang để \"Liên tục\" không, có thể chuyển sang tần suất thấp hơn nếu khách chấp nhận.\n3. Kiểm tra mặt đồng hồ (watch face) đang dùng có phải mặt bên thứ 3 tải từ Connect IQ không — nếu có, chuyển tạm về mặt mặc định của Garmin để so sánh.\n4. Ghi nhận % pin hiện tại, hẹn khách theo dõi thêm 1-2 ngày để so sánh mức hao pin trước/sau khi tắt các tính năng trên.\n\n🚫 TUYỆT ĐỐI KHÔNG ĐƯỢC LÀM: Không tắt các tính năng theo dõi sức khỏe của khách mà không hỏi ý kiến trước — một số khách cần theo dõi Pulse Ox/nhịp tim liên tục cho mục đích luyện tập.\n\n💬 KỊCH BẢN TƯ VẤN: \"Em tắt bớt vài tính năng đo liên tục cho mình rồi ạ, mình theo dõi thêm 1-2 ngày xem pin có cải thiện không nhé.\"\n\n📦 LƯU Ý TTBH: Đã tắt hết tính năng ngốn pin mà vẫn hao nhanh bất thường: đề xuất khách nhận bảo hành; thiết bị sẽ được gửi về Trung tâm bảo hành (TTBH) để kiểm tra pin.",
        keywords: ["pin", "hao pin", "sụt nguồn"]
      },
      {
        id: "lib-g3",
        device: "Đồng hồ (Fenix/Forerunner)",
        symptom: "Garmin không lên nguồn, màn hình đen hoàn toàn",
        diagnosis: "Pin cạn sâu cần thời gian sạc nạp trước khi hiển thị, hoặc lỗi mạch nguồn.",
        solution: "🔍 CHẨN ĐOÁN: Kiểm tra chân sạc từ tính có gỉ/bẩn không, xác nhận máy có khả năng cạn pin sâu (để lâu không dùng).\n\n🛠️ HƯỚNG DẪN XỬ LÝ:\n1. Lau khô/vệ sinh 4 chấu tiếp điểm sạc phía sau đồng hồ và trên cáp sạc bằng khăn khô hoặc tăm bông.\n2. Cắm cáp sạc chính hãng vào đồng hồ, đảm bảo khớp đúng chiều (thường có gờ định hướng), giữ tối thiểu 15-30 phút.\n3. Sau thời gian trên, nhấn giữ nút nguồn (thường là nút trên cùng bên trái hoặc phải tùy dòng máy) khoảng 10-15 giây để thử khởi động.\n4. Nếu vẫn đen màn hình: thử đổi sang cáp sạc Garmin chính hãng khác để loại trừ lỗi cáp.\n\n🚫 TUYỆT ĐỐI KHÔNG ĐƯỢC LÀM: Không dùng cáp sạc không chính hãng/sai chuẩn chấu tiếp điểm (dễ không nhận sạc hoặc hỏng chân sạc); không cạy nắp lưng máy để can thiệp pin tại quầy.\n\n💬 KỊCH BẢN TƯ VẤN: \"Đồng hồ mình có thể chỉ cạn pin sâu thôi ạ, em đang sạc thử trước khi kết luận nhé.\"\n\n📦 LƯU Ý TTBH: Sạc lâu vẫn đen màn hình: đề xuất khách nhận bảo hành; thiết bị sẽ được gửi về Trung tâm bảo hành (TTBH) để kiểm tra mạch nguồn.",
        keywords: ["không lên nguồn", "màn hình đen", "mất nguồn"]
      },
      {
        id: "lib-g4",
        device: "Đồng hồ (Fenix/Forerunner)",
        symptom: "Garmin đo nhịp tim không chính xác hoặc không đo được",
        diagnosis: "Đeo lỏng, cảm biến bám bẩn/mồ hôi khô, hoặc hình xăm/lông tay cản quang học.",
        solution: "🔍 CHẨN ĐOÁN: Kiểm tra cách đeo (độ cao, độ chặt), xác nhận cảm biến mặt sau có sạch không.\n\n🛠️ HƯỚNG DẪN XỬ LÝ:\n1. Hướng dẫn khách đeo đồng hồ cao hơn xương cổ tay khoảng 1 đốt ngón tay, dây đeo vừa chặt (không lỏng lẻo).\n2. Tháo đồng hồ, dùng khăn ẩm lau sạch cảm biến quang học mặt sau (loại bỏ mồ hôi khô/bụi bẩn).\n3. Vào Cài đặt trên đồng hồ > Hệ thống > Cập nhật phần mềm, đảm bảo đang chạy bản mới nhất.\n4. Đeo lại đúng vị trí, đứng yên 1-2 phút để đồng hồ đo lại và so sánh kết quả.\n\n🚫 TUYỆT ĐỐI KHÔNG ĐƯỢC LÀM: Không khẳng định cảm biến nhịp tim \"chính xác 100%\" — cảm biến quang học vốn có sai số với hình xăm/da sậm màu/lông tay dày, cần giải thích rõ giới hạn này với khách.\n\n💬 KỊCH BẢN TƯ VẤN: \"Em hướng dẫn mình đeo đúng vị trí và đã cập nhật phần mềm rồi ạ, thuật toán đo nhịp tim sẽ chính xác hơn sau bản vá này.\"\n\n📦 LƯU Ý TTBH: Đây thường là vấn đề cách dùng/phần mềm, hiếm khi cần gửi TTBH.",
        keywords: ["nhịp tim", "đo sai", "cảm biến"]
      },
      {
        id: "lib-g5",
        device: "Đồng hồ (Fenix/Forerunner)",
        symptom: "Garmin bị treo logo khi khởi động, không vào được giao diện chính",
        diagnosis: "Lỗi phần mềm hệ thống hoặc xung đột sau khi cập nhật dở dang.",
        solution: "🔍 CHẨN ĐOÁN: Xác nhận máy vừa cập nhật phần mềm dở dang hay tự nhiên treo.\n\n🛠️ HƯỚNG DẪN XỬ LÝ:\n1. Hỏi khách máy vừa cập nhật phần mềm dở dang hay tự nhiên bị treo logo.\n2. Nhấn giữ nút nguồn 10-15 giây liên tục đến khi màn hình tắt hẳn (Soft Reset).\n3. Thả tay, đợi 5 giây rồi nhấn nút nguồn 1 lần để khởi động lại.\n4. Quan sát máy có vào được giao diện chính không; nếu vẫn treo, kết nối với Garmin Express trên máy tính để kiểm tra và cài lại phần mềm.\n\n🚫 TUYỆT ĐỐI KHÔNG ĐƯỢC LÀM: Không rút sạc/tháo pin (với máy có thể tháo) trong lúc máy đang cập nhật phần mềm dở dang — dễ làm hỏng vĩnh viễn firmware.\n\n💬 KỊCH BẢN TƯ VẤN: \"Em đang khởi động lại đồng hồ cho mình ạ, đa số trường hợp treo logo là do phần mềm và sẽ hết sau bước này.\"\n\n📦 LƯU Ý TTBH: Soft Reset không hết, cần khôi phục cài đặt gốc qua Garmin Express — báo trước với khách sẽ mất dữ liệu chưa đồng bộ.",
        keywords: ["treo logo", "không khởi động được", "đơ máy"]
      },
      {
        id: "lib-g6",
        device: "Đồng hồ (Fenix/Forerunner)",
        symptom: "Garmin không bắt được GPS hoặc định vị sai vị trí ngoài trời",
        diagnosis: "Dữ liệu vệ tinh (EPO/CPE) đã cũ, hoặc đang ở khu vực nhiều vật cản tín hiệu.",
        solution: "🔍 CHẨN ĐOÁN: Kiểm tra dữ liệu vệ tinh (EPO/CPE) đã cập nhật gần đây chưa, xác nhận môi trường bắt sóng (trong nhà/nhiều tòa cao tầng).\n\n🛠️ HƯỚNG DẪN XỬ LÝ:\n1. Kết nối đồng hồ với điện thoại qua app Garmin Connect (đồng bộ tự động cập nhật dữ liệu vệ tinh) hoặc với Garmin Express trên máy tính.\n2. Chờ đồng bộ hoàn tất, kiểm tra thời gian cập nhật dữ liệu vệ tinh gần nhất trong app.\n3. Hướng dẫn khách mang máy ra khu vực ngoài trời thoáng đãng (tránh nhà cao tầng, cây rậm) để bắt tín hiệu GPS lần đầu.\n4. Trên đồng hồ, bắt đầu 1 bài tập ngoài trời (chạy bộ/đi bộ) để kích hoạt tìm vệ tinh, đợi biểu tượng GPS chuyển sang màu xanh (thường 1-2 phút lần đầu).\n\n🚫 TUYỆT ĐỐI KHÔNG ĐƯỢC LÀM: Không kết luận máy lỗi GPS ngay khi mới thử trong nhà/khu vực nhiều vật cản — phải loại trừ yếu tố môi trường trước.\n\n💬 KỊCH BẢN TƯ VẤN: \"Em đã cập nhật dữ liệu vệ tinh cho đồng hồ mình rồi ạ, lần đầu bắt sóng ngoài trời có thể mất 1-2 phút, mình đợi thêm nhé.\"\n\n📦 LƯU Ý TTBH: Cập nhật dữ liệu và thử ngoài trời thoáng vẫn không bắt được GPS: đề xuất khách nhận bảo hành; thiết bị sẽ được gửi về Trung tâm bảo hành (TTBH) để kiểm tra module GPS.",
        keywords: ["gps", "định vị sai", "không bắt sóng", "vệ tinh"]
      },
      {
        id: "lib-g7",
        device: "Đồng hồ (Fenix/Forerunner)",
        symptom: "Màn hình cảm ứng Garmin không nhạy hoặc không phản hồi",
        diagnosis: "Màn hình dính nước/mồ hôi, đang ở chế độ khóa cảm ứng, hoặc lỗi phần mềm.",
        solution: "🔍 CHẨN ĐOÁN: Kiểm tra có đang bật khóa cảm ứng (Lock) trong cài đặt không, xác nhận màn hình có ẩm không.\n\n🛠️ HƯỚNG DẪN XỬ LÝ:\n1. Kiểm tra biểu tượng khóa trên màn hình — nếu đồng hồ đang ở chế độ Khóa (thường bật bằng cách giữ nút góc hoặc vuốt xuống chọn khóa), tắt khóa theo đúng thao tác của dòng máy.\n2. Lau khô màn hình bằng khăn mềm, đặc biệt nếu vừa đổ mồ hôi hoặc dính nước.\n3. Nếu vẫn không phản hồi: thực hiện Soft Reset (giữ nút nguồn 10-15 giây đến khi tắt hẳn rồi bật lại).\n4. Kiểm tra lại cảm ứng bằng cách vuốt qua các màn hình widget.\n\n🚫 TUYỆT ĐỐI KHÔNG ĐƯỢC LÀM: Không dùng vật cứng/sắc nhọn chạm vào màn hình để \"test\" cảm ứng — có thể gây trầy xước hoặc hỏng thêm.\n\n💬 KỊCH BẢN TƯ VẤN: \"Đồng hồ mình đang bật khóa cảm ứng nên không thao tác được ạ, em tắt lại giúp mình nhé.\"\n\n📦 LƯU Ý TTBH: Đã tắt khóa và lau khô vẫn không phản hồi: đề xuất khách nhận bảo hành; thiết bị sẽ được gửi về Trung tâm bảo hành (TTBH) để kiểm tra màn hình.",
        keywords: ["cảm ứng", "không nhạy", "màn hình", "không phản hồi"]
      },
      {
        id: "lib-g8",
        device: "Edge (xe đạp)",
        symptom: "Garmin Edge (định vị xe đạp) không gắn được vào gá đỡ hoặc mất kết nối cảm biến tốc độ/cadence",
        diagnosis: "Gá đỡ (mount) lệch khớp, hoặc cảm biến ANT+/Bluetooth ngoài (tốc độ, nhịp tim) bị mất ghép đôi.",
        solution: "🔍 CHẨN ĐOÁN: Kiểm tra chốt xoay trên gá đỡ có khớp đúng chiều với rãnh sau máy không, xác nhận cảm biến còn pin không.\n\n🛠️ HƯỚNG DẪN XỬ LÝ:\n1. Kiểm tra chốt xoay (quarter-turn mount) phía sau máy Edge có khớp đúng chiều với rãnh trên gá đỡ không — thử xoay nhẹ theo chiều kim đồng hồ đến khi nghe/cảm nhận tiếng khớp.\n2. Kiểm tra gá đỡ có bị nứt, gãy chân, hoặc mòn ren không.\n3. Nếu là lỗi cảm biến: vào Cài đặt trên Edge > Cảm biến (Sensors) > chọn cảm biến tốc độ/cadence bị mất kết nối > \"Ghép đôi lại\".\n4. Kiểm tra pin cảm biến (thường là pin cúc áo CR2032), thay pin nếu đèn báo yếu hoặc không sáng khi lắc nhẹ.\n\n🚫 TUYỆT ĐỐI KHÔNG ĐƯỢC LÀM: Không để khách tiếp tục dùng gá đỡ đã nứt/gãy khi đạp xe — rủi ro rơi máy khi di chuyển, cần khuyến nghị thay ngay.\n\n💬 KỊCH BẢN TƯ VẤN: \"Em đã kiểm tra và ghép lại cảm biến cho mình rồi ạ, gá đỡ nứt/gãy thì mình nên thay phụ kiện mới để tránh rơi máy khi đạp nhé.\"\n\n📦 LƯU Ý TTBH: Gá đỡ hỏng có thể bán/thay linh kiện tại chỗ, không cần gửi TTBH.",
        keywords: ["edge", "gá đỡ", "mount", "cảm biến", "xe đạp"]
      },
      {
        id: "lib-g9",
        device: "Đồng hồ (Fenix/Forerunner)",
        symptom: "Garmin bị vào nước, có hơi nước đọng dưới mặt kính",
        diagnosis: "Gioăng cao su chống nước bị lão hóa/hở, hoặc máy vượt quá độ sâu/áp suất chịu nước cho phép.",
        solution: "🔍 CHẨN ĐOÁN: Kiểm tra gioăng cao su chống nước có dấu hiệu hở/lão hóa không, xác nhận có vượt độ sâu chịu nước cho phép không.\n\n🛠️ HƯỚNG DẪN XỬ LÝ:\n1. Hỏi khách máy đã tiếp xúc nước trong hoàn cảnh nào (bơi, lặn, mưa) và có vượt quá độ sâu chịu nước ghi trên thông số máy không.\n2. Lau khô ngoại quan bằng khăn mềm, đặc biệt quanh viền kính và nút bấm.\n3. Đặt máy nơi khô ráo, thoáng khí tự nhiên (không sấy nhiệt cao, không phơi nắng gắt).\n4. Trong lúc chờ, hạn chế bấm nút liên tục (bơm ẩm/hơi nước có thể lan thêm qua khe hở).\n5. Theo dõi trong 24 giờ, kiểm tra hơi nước dưới mặt kính có tự bay hết không.\n\n🚫 TUYỆT ĐỐI KHÔNG ĐƯỢC LÀM: Không sấy nhiệt cao hoặc bấm nút liên tục để \"đẩy hơi nước ra\"; không tiếp tục cho khách dùng máy để bơi/lặn cho đến khi xác nhận máy đã khô hoàn toàn và hoạt động bình thường.\n\n💬 KỊCH BẢN TƯ VẤN: \"Máy mình cần để khô tự nhiên trước ạ, em theo dõi cùng mình xem hơi nước có tự bay hết trong 24 giờ không.\"\n\n📦 LƯU Ý TTBH: Hơi nước không hết sau 24 giờ hoặc máy chập chờn: đề xuất khách nhận bảo hành; thiết bị sẽ được gửi về Trung tâm bảo hành (TTBH) để kiểm tra gioăng và bo mạch.",
        keywords: ["vào nước", "hơi nước", "đọng nước", "chống nước"]
      },
      {
        id: "lib-g10",
        device: "Đồng hồ (Fenix/Forerunner)",
        symptom: "Dây đeo (band/strap) Garmin bị đứt, nứt hoặc khóa dây lỏng",
        diagnosis: "Dây cao su/silicone lão hóa theo thời gian, hoặc chốt khóa quick-release bị mòn.",
        solution: "🔍 CHẨN ĐOÁN: Xác định đúng size lug (kích thước chốt) của model để chọn dây thay thế tương thích.\n\n🛠️ HƯỚNG DẪN XỬ LÝ:\n1. Kiểm tra thông số size lug (thường 20mm/22mm/26mm tùy dòng máy) — có thể xem trong thông số kỹ thuật máy hoặc đo trực tiếp.\n2. Chọn dây thay thế chính hãng đúng size lug, có chốt quick-release nếu máy hỗ trợ.\n3. Tháo dây cũ: kéo chốt quick-release (thanh nhỏ ở đầu chốt) và rút dây ra.\n4. Lắp dây mới: gắn 1 đầu chốt vào lug, kéo chốt quick-release để luồn đầu còn lại vào, thả tay kiểm tra dây đã khớp chắc chắn.\n\n🚫 TUYỆT ĐỐI KHÔNG ĐƯỢC LÀM: Không lắp dây sai size lug dù có thể \"gắn tạm được\" — dễ tuột dây gây rơi máy khi khách vận động mạnh.\n\n💬 KỊCH BẢN TƯ VẤN: \"Em thay dây mới đúng chuẩn cho đồng hồ mình ngay tại đây được ạ, mình chọn dây chính hãng để đảm bảo độ bền và chống nước nhé.\"\n\n📦 LƯU Ý TTBH: Xử lý được ngay tại chỗ, không cần gửi TTBH.",
        keywords: ["dây đeo", "đứt dây", "quai đồng hồ", "strap"]
      },
      {
        id: "lib-g11",
        device: "Đồng hồ (Fenix/Forerunner)",
        symptom: "Garmin báo lỗi hoặc treo giữa chừng khi cập nhật firmware",
        diagnosis: "Mất kết nối mạng/Bluetooth giữa chừng khi tải bản cập nhật, hoặc dung lượng trống không đủ.",
        solution: "🔍 CHẨN ĐOÁN: Kiểm tra pin còn trên 50% không, xác nhận kết nối mạng/Bluetooth có ổn định trong lúc cập nhật không.\n\n🛠️ HƯỚNG DẪN XỬ LÝ:\n1. Kiểm tra pin đồng hồ còn trên 50% không, cắm sạc nếu cần trước khi cập nhật lại.\n2. Cài Garmin Express trên máy tính (nếu chưa có), kết nối đồng hồ bằng cáp USB.\n3. Mở Garmin Express, chọn thiết bị, để phần mềm tự kiểm tra và tải bản cập nhật mới nhất.\n4. Giữ nguyên kết nối cáp, không rút ra cho đến khi Garmin Express báo \"Cập nhật hoàn tất\".\n5. Khởi động lại đồng hồ sau khi cập nhật xong, kiểm tra phiên bản phần mềm trong Cài đặt > Hệ thống > Giới thiệu.\n\n🚫 TUYỆT ĐỐI KHÔNG ĐƯỢC LÀM: Không rút cáp USB hoặc tắt máy tính giữa chừng khi Garmin Express đang cập nhật firmware — có thể làm hỏng firmware, khiến máy không khởi động được.\n\n💬 KỊCH BẢN TƯ VẤN: \"Em đang cập nhật lại phần mềm cho đồng hồ mình qua máy tính ạ, cách này ổn định hơn cập nhật qua điện thoại.\"\n\n📦 LƯU Ý TTBH: Cập nhật qua Garmin Express vẫn lỗi liên tục: đề xuất khách nhận bảo hành; thiết bị sẽ được gửi về Trung tâm bảo hành (TTBH) để kiểm tra bộ nhớ trong.",
        keywords: ["cập nhật", "firmware", "update", "treo"]
      },
      {
        id: "lib-g12",
        device: "Đồng hồ (Fenix/Forerunner)",
        symptom: "Đồng hồ Garmin bị đơ giữa chừng khi đang dùng (không phải lúc khởi động)",
        diagnosis: "Phân biệt với lib-g5 (treo ở logo lúc khởi động) — đây là trường hợp máy đang chạy bình thường rồi đơ đột ngột, màn hình không phản hồi nút bấm.",
        solution: "🔍 CHẨN ĐOÁN: Xác nhận máy đơ khi đang dùng bình thường (không phải sau cập nhật/khởi động), thử bấm thử vài nút xem có phản hồi độ rung/âm thanh không.\n\n🛠️ HƯỚNG DẪN XỬ LÝ:\n1. Xác nhận với khách máy đang dùng bình thường rồi đơ đột ngột (không phải vừa cập nhật hay vừa khởi động).\n2. Thử bấm lần lượt các nút vật lý xem máy có phản hồi rung/âm thanh không.\n3. Nhấn giữ nút nguồn tối thiểu 15-20 giây liên tục đến khi màn hình tắt hẳn (force restart).\n4. Thả tay, đợi vài giây rồi nhấn nút nguồn 1 lần để khởi động lại.\n5. Kiểm tra dữ liệu hoạt động gần nhất còn nguyên trong Garmin Connect không sau khi đồng bộ lại.\n\n🚫 TUYỆT ĐỐI KHÔNG ĐƯỢC LÀM: Không rút sạc đột ngột hoặc tháo pin trong lúc force restart nếu máy đang hiển thị màn hình sạc; không thực hiện khôi phục cài đặt gốc ngay khi chỉ mới đơ 1 lần.\n\n💬 KỊCH BẢN TƯ VẤN: \"Đồng hồ mình bị đơ tạm thời thôi ạ, em giữ nút nguồn khởi động lại cho mình, dữ liệu tập luyện đã lưu vẫn còn nguyên không mất đâu ạ.\"\n\n📦 LƯU Ý TTBH: Máy đơ lặp lại nhiều lần dù đã force restart và đã cập nhật phần mềm mới nhất: đề xuất khách nhận bảo hành; thiết bị sẽ được gửi về Trung tâm bảo hành (TTBH) để kiểm tra bộ nhớ/mạch xử lý.",
        keywords: ["đơ máy", "treo giữa chừng", "không phản hồi", "force restart"]
      },
      {
        id: "lib-g13",
        device: "Đồng hồ (Fenix/Forerunner)",
        symptom: "Garmin Pay không thanh toán được / báo lỗi khi chạm thanh toán",
        diagnosis: "Thẻ chưa kích hoạt đúng cách trong Garmin Connect, phần mềm đồng hồ/app cũ, hoặc ngân hàng/loại thẻ chưa hỗ trợ Garmin Pay tại Việt Nam.",
        solution: "🔍 CHẨN ĐOÁN: Xác nhận thẻ đã thêm và kích hoạt thành công trong Garmin Connect (không chỉ thêm mà chưa xác thực OTP ngân hàng), kiểm tra ngân hàng phát hành thẻ có nằm trong danh sách hỗ trợ Garmin Pay không.\n\n🛠️ HƯỚNG DẪN XỬ LÝ:\n1. Mở app Garmin Connect > Menu > Garmin Pay, kiểm tra trạng thái thẻ đã \"Đã kích hoạt\" hay còn \"Chờ xác thực\".\n2. Nếu còn chờ xác thực: hướng dẫn khách hoàn tất OTP từ ngân hàng để kích hoạt thẻ.\n3. Cập nhật app Garmin Connect và phần mềm đồng hồ lên bản mới nhất (Cài đặt trên đồng hồ > Hệ thống > Cập nhật phần mềm).\n4. Trên đồng hồ, mở ví Garmin Pay (thường giữ nút hoặc vuốt theo widget tùy dòng máy), nhập mã PIN Garmin Pay, thử chạm vào máy POS hỗ trợ thanh toán không tiếp xúc.\n5. Nếu vẫn lỗi: vào Garmin Connect > Garmin Pay > chọn thẻ > \"Xóa thẻ\", sau đó thêm lại từ đầu.\n\n🚫 TUYỆT ĐỐI KHÔNG ĐƯỢC LÀM: Không yêu cầu khách cung cấp đầy đủ số thẻ/CVV cho nhân viên để \"thêm hộ\" — việc thêm thẻ phải do chính khách thao tác trên app của họ để đảm bảo an toàn thông tin thanh toán.\n\n💬 KỊCH BẢN TƯ VẤN: \"Em kiểm tra thấy thẻ mình cần xác thực/thêm lại trong app Garmin Connect ạ, mình làm theo hướng dẫn trên điện thoại, xong là quẹt thanh toán lại được bình thường nhé.\"\n\n📦 LƯU Ý TTBH: Đây là vấn đề liên quan tài khoản/ngân hàng, không phải lỗi phần cứng — không cần gửi TTBH; nếu ngân hàng của khách chưa hỗ trợ Garmin Pay, tư vấn khách đợi ngân hàng cập nhật hoặc dùng thẻ khác.",
        keywords: ["garmin pay", "thanh toán", "không quẹt được", "chạm thanh toán"]
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
        id: "lib-an1",
        device: "Chung (mọi hãng)",
        symptom: "Máy bị treo logo, không vào được màn hình chính",
        diagnosis: "Xung đột phần mềm hệ thống hoặc lỗi phân vùng dữ liệu.",
        solution: "🔍 CHẨN ĐOÁN: Xác nhận máy vừa cập nhật phần mềm hay cài ứng dụng mới trước khi treo.\n\n🛠️ HƯỚNG DẪN XỬ LÝ:\n1. Hỏi khách máy vừa cập nhật hệ thống hay cài ứng dụng mới trước khi bị treo.\n2. Tắt máy hoàn toàn (giữ nút Nguồn + Giảm âm lượng nếu máy còn phản hồi, hoặc đợi hết pin).\n3. Vào chế độ Recovery: giữ đồng thời Nguồn + Giảm âm lượng khi máy đang tắt đến khi hiện menu Recovery (tùy hãng có thể là Nguồn + Tăng âm lượng).\n4. Dùng phím Giảm âm lượng để di chuyển, chọn \"Wipe Cache Partition\", xác nhận bằng nút Nguồn.\n5. Sau khi xóa cache xong, chọn \"Reboot System Now\" để khởi động lại.\n\n🚫 TUYỆT ĐỐI KHÔNG ĐƯỢC LÀM: Không chọn \"Factory Reset\"/\"Wipe Data\" ngay từ đầu khi chưa thử Wipe Cache trước — sẽ xóa toàn bộ dữ liệu của khách một cách không cần thiết.\n\n💬 KỊCH BẢN TƯ VẤN: \"Em đang thử xóa cache hệ thống cho máy mình ạ, cách này không mất dữ liệu và thường khắc phục được treo logo.\"\n\n📦 LƯU Ý TTBH: Wipe Cache không hết mới cần chạy lại ROM; nếu khách không đồng ý mất dữ liệu: đề xuất khách nhận bảo hành, thiết bị sẽ được gửi về Trung tâm bảo hành (TTBH) để kiểm tra và đánh giá thêm.",
        keywords: ["treo logo", "không vào được", "phần mềm"]
      },
      {
        id: "lib-an2",
        device: "Chung (mọi hãng)",
        symptom: "Cổng sạc lỏng, sạc lúc được lúc không",
        diagnosis: "Cổng sạc bị mòn hoặc đóng bụi bẩn.",
        solution: "🔍 CHẨN ĐOÁN: Kiểm tra chân cổng sạc có bị mòn, cong hay bám bụi không.\n\n🛠️ HƯỚNG DẪN XỬ LÝ:\n1. Soi đèn pin vào cổng sạc, kiểm tra chân tiếp điểm có bị cong, mòn hoặc bám bụi/xơ vải không.\n2. Dùng tăm tre khô vệ sinh nhẹ nhàng, không chọc sâu hoặc dùng lực mạnh.\n3. Cắm lại cáp sạc, thử lắc nhẹ đầu cáp để xác định vị trí lỏng (nếu sạc chập chờn theo góc cắm).\n4. Thử đổi cáp/củ sạc khác để loại trừ lỗi phụ kiện.\n\n🚫 TUYỆT ĐỐI KHÔNG ĐƯỢC LÀM: Không dùng vật kim loại/sắc nhọn để nạy hoặc bẻ chỉnh chân cổng sạc bị cong.\n\n💬 KỊCH BẢN TƯ VẤN: \"Em đã vệ sinh cổng sạc cho máy mình rồi ạ, mình thử cắm sạc lại xem đã ổn định chưa nhé.\"\n\n📦 LƯU Ý TTBH: Vệ sinh không cải thiện — cần thay chân sạc, có thể xử lý tại chỗ nếu có linh kiện.",
        keywords: ["sạc", "lỏng", "không nhận"]
      },
      {
        id: "lib-an3",
        device: "Chung (mọi hãng)",
        symptom: "Pin điện thoại Android bị phồng",
        diagnosis: "Pin lão hóa hoặc sạc sai chuẩn công suất trong thời gian dài gây phồng rộp.",
        solution: "🔍 CHẨN ĐOÁN: Quan sát mặt lưng/màn hình có bị phồng, cong vênh bất thường không.\n\n🛠️ HƯỚNG DẪN XỬ LÝ:\n1. Xác nhận trực quan vị trí và mức độ phồng (mặt lưng, cạnh viền, hay đẩy phồng màn hình).\n2. Yêu cầu khách ngừng sử dụng và ngừng sạc máy ngay lập tức.\n3. Đặt máy ở nơi thoáng khí, tránh xa vật dễ cháy, không đặt trong túi kín.\n4. Thông báo với khách đây là tình trạng nguy hiểm, cần gửi TTBH kiểm tra và thay pin sớm.\n5. Lập phiếu nhận bảo hành ngay tại quầy, ưu tiên xử lý gấp hơn các lỗi khác.\n\n🚫 TUYỆT ĐỐI KHÔNG ĐƯỢC LÀM: TUYỆT ĐỐI không mở máy, không dùng vật nhọn chọc/ép vào pin, không tiếp tục sạc hoặc dùng máy, không để máy nơi nhiệt độ cao hoặc gần nguồn lửa trong lúc chờ xử lý.\n\n💬 KỊCH BẢN TƯ VẤN: \"Pin máy mình đang bị phồng, khá nguy hiểm nếu tiếp tục dùng ạ, mình mang máy đến TTBH gấp để thay pin nhé, không nên tự xử lý tại nhà.\"\n\n📦 LƯU Ý TTBH: BẮT BUỘC đề xuất khách nhận bảo hành ngay; thiết bị cần được gửi về Trung tâm bảo hành (TTBH) để kiểm tra khẩn, không để máy nơi nhiệt độ cao trong lúc chờ.",
        keywords: ["pin phồng", "phồng pin", "nguy hiểm"]
      },
      {
        id: "lib-an4",
        device: "Chung (mọi hãng)",
        symptom: "Máy Android nóng bất thường khi sạc hoặc dùng nhẹ",
        diagnosis: "Sạc không chính hãng, chạy nhiều ứng dụng nền, hoặc pin/IC sạc có vấn đề.",
        solution: "🔍 CHẨN ĐOÁN: Kiểm tra khách có dùng sạc/cáp không chính hãng không, xác nhận máy nóng cả khi không dùng gì.\n\n🛠️ HƯỚNG DẪN XỬ LÝ:\n1. Hỏi khách đang dùng sạc/cáp đi kèm máy hay mua rời, kiểm tra thông số công suất có khớp máy không.\n2. Vào Cài đặt > Pin, xem danh sách ứng dụng tiêu hao pin/chạy nền nhiều nhất.\n3. Tắt bớt các ứng dụng chạy nền không cần thiết trong mục Pin (tùy hãng: \"Quản lý pin ứng dụng\" hoặc \"Sleeping apps\").\n4. Khuyến nghị khách đổi sang sạc/cáp chính hãng hoặc đạt chuẩn.\n5. Để máy nghỉ 10-15 phút không dùng, đo lại nhiệt độ bằng cảm nhận tay hoặc app đo nhiệt (nếu có) để so sánh.\n\n🚫 TUYỆT ĐỐI KHÔNG ĐƯỢC LÀM: Không để khách tiếp tục sạc bằng phụ kiện không rõ nguồn gốc sau khi đã phát hiện máy nóng bất thường; không dùng đá lạnh/nước để làm mát máy đột ngột.\n\n💬 KỊCH BẢN TƯ VẤN: \"Em kiểm tra thấy sạc mình dùng không đúng chuẩn/có nhiều app chạy nền ạ, mình đổi sạc chính hãng và để em dọn bớt ứng dụng nhé.\"\n\n📦 LƯU Ý TTBH: Máy vẫn nóng khi không sạc, không dùng gì: đề xuất khách nhận bảo hành; thiết bị sẽ được gửi về Trung tâm bảo hành (TTBH) để kiểm tra phần cứng.",
        keywords: ["nóng máy", "nóng khi sạc", "quá nhiệt"]
      },
      {
        id: "lib-an5",
        device: "Samsung",
        symptom: "Samsung báo lỗi Knox hoặc mất bảo hành sau khi flash/root",
        diagnosis: "Knox Warranty Void bị kích hoạt vĩnh viễn khi mở khóa bootloader hoặc root máy.",
        solution: "🔍 CHẨN ĐOÁN: Xác nhận với khách máy đã từng mở khóa bootloader/root chưa.\n\n🛠️ HƯỚNG DẪN XỬ LÝ:\n1. Hỏi khách máy đã từng mở khóa bootloader hoặc root chưa, khi nào.\n2. Kiểm tra trạng thái Knox trong Cài đặt > Giới thiệu điện thoại > Trạng thái Knox (nếu hiện \"0x1\" là đã từng bị kích hoạt).\n3. Xác nhận máy vẫn hoạt động bình thường, không có triệu chứng lỗi phần cứng đi kèm.\n4. Giải thích rõ với khách đây là cờ bảo mật vĩnh viễn, không ảnh hưởng đến việc sử dụng hàng ngày.\n\n🚫 TUYỆT ĐỐI KHÔNG ĐƯỢC LÀM: Không hứa hẹn có thể \"reset\" hoặc khôi phục lại trạng thái Knox ban đầu — đây là cờ phần cứng vĩnh viễn không thể đảo ngược.\n\n💬 KỊCH BẢN TƯ VẤN: \"Đây là cờ bảo mật của Samsung khi máy từng root ạ, không thể đảo ngược được, nhưng máy mình vẫn dùng bình thường không ảnh hưởng gì.\"\n\n📦 LƯU Ý TTBH: Chỉ mất điều kiện bảo hành phần mềm từ Samsung, không liên quan đến lỗi cần sửa chữa.",
        keywords: ["knox", "root", "mất bảo hành", "flash"]
      },
      {
        id: "lib-an6",
        device: "Chung (mọi hãng)",
        symptom: "Loa ngoài Android rè hoặc mất tiếng khi nghe gọi",
        diagnosis: "Màng loa bám bụi/ẩm, hoặc cấu hình âm thanh bị lỗi.",
        solution: "🔍 CHẨN ĐOÁN: Kiểm tra chế độ loa ngoài trong Cài đặt Âm thanh, xác định rè cả 2 loa hay chỉ 1 bên.\n\n🛠️ HƯỚNG DẪN XỬ LÝ:\n1. Mở app nhạc/video, bật loa ngoài ở âm lượng tối đa để xác định rè ở loa nào (đáy máy hay loa thoại).\n2. Vào Cài đặt > Âm thanh và độ rung, kiểm tra chế độ âm thanh có bị chỉnh sai (Dolby Atmos, EQ) không.\n3. Dùng cọ mềm hoặc tăm bông khô vệ sinh nhẹ lưới loa.\n4. Phát lại nhạc test để kiểm tra sau khi vệ sinh.\n\n🚫 TUYỆT ĐỐI KHÔNG ĐƯỢC LÀM: Không dùng vật nhọn/kim loại chọc vào lưới loa; không xịt khí nén quá mạnh trực tiếp vào loa.\n\n💬 KỊCH BẢN TƯ VẤN: \"Em đã vệ sinh loa cho máy mình rồi ạ, mình nghe thử lại xem còn rè không nhé.\"\n\n📦 LƯU Ý TTBH: Vệ sinh vẫn rè — cần thay màng loa, có thể xử lý tại chỗ nếu có linh kiện.",
        keywords: ["loa", "rè", "mất tiếng", "nghe gọi"]
      },
      {
        id: "lib-an7",
        device: "Chung (mọi hãng)",
        symptom: "Màn hình cảm ứng Android đơ, loạn cảm ứng (ghost touch)",
        diagnosis: "Miếng dán màn hình lỗi, xung đột phần mềm, hoặc lớp cảm ứng bị chập.",
        solution: "🔍 CHẨN ĐOÁN: Gỡ thử miếng dán màn hình, khởi động ở Safe Mode để loại trừ xung đột ứng dụng.\n\n🛠️ HƯỚNG DẪN XỬ LÝ:\n1. Gỡ thử miếng dán màn hình hiện tại, quan sát cảm ứng có ổn định lại không.\n2. Nếu vẫn loạn cảm ứng: giữ nút Nguồn > chạm giữ \"Tắt nguồn\" trên màn hình đến khi hiện tùy chọn \"Khởi động lại ở Safe Mode\" (tùy hãng có thể khác thao tác).\n3. Trong Safe Mode (góc màn hình hiện chữ \"Safe Mode\"), quan sát cảm ứng có còn loạn không — nếu hết loạn, nguyên nhân do 1 ứng dụng bên thứ 3 vừa cài.\n4. Khởi động lại bình thường, gỡ ứng dụng nghi ngờ vừa cài gần đây nhất.\n\n🚫 TUYỆT ĐỐI KHÔNG ĐƯỢC LÀM: Không dán loại cường lực/dán màn hình không đúng chuẩn cho máy có cảm ứng dưới màn hình (dễ gây loạn cảm ứng lặp lại); không kết luận lỗi phần cứng ngay khi chưa thử Safe Mode.\n\n💬 KỊCH BẢN TƯ VẤN: \"Em đang kiểm tra xem do miếng dán hay do phần mềm gây loạn cảm ứng cho máy mình ạ.\"\n\n📦 LƯU Ý TTBH: Vẫn loạn cảm ứng ở Safe Mode sau khi gỡ dán: đề xuất khách nhận bảo hành; thiết bị sẽ được gửi về Trung tâm bảo hành (TTBH) để kiểm tra lớp cảm ứng.",
        keywords: ["cảm ứng", "loạn cảm ứng", "đơ máy", "ghost touch"]
      },
      {
        id: "lib-an8",
        device: "Chung (mọi hãng)",
        symptom: "Máy Android bị bootloop, khởi động lặp lại liên tục",
        diagnosis: "Lỗi phân vùng hệ thống sau cập nhật, hoặc xung đột ứng dụng vừa cài.",
        solution: "🔍 CHẨN ĐOÁN: Xác nhận máy vừa cập nhật hệ thống hay cài ứng dụng mới trước khi bootloop.\n\n🛠️ HƯỚNG DẪN XỬ LÝ:\n1. Hỏi khách máy vừa cập nhật hệ thống hay cài ứng dụng mới trước khi bị bootloop.\n2. Tắt máy (đợi máy tự tắt khi đang lặp bootloop, hoặc giữ nút Nguồn 10-15 giây).\n3. Vào Recovery (giữ Nguồn + Tăng/Giảm âm lượng tùy hãng khi máy đang tắt), chọn \"Wipe Cache Partition\" trước.\n4. Chọn \"Reboot System Now\", quan sát máy có vào được bình thường không.\n5. KHÔNG chọn \"Factory Reset\" ngay — chỉ cân nhắc bước này nếu Wipe Cache không giải quyết được và đã báo trước với khách.\n\n🚫 TUYỆT ĐỐI KHÔNG ĐƯỢC LÀM: Không chọn Factory Reset ngay từ đầu để tránh mất dữ liệu oan khi chưa thử Wipe Cache; không tắt nguồn đột ngột giữa lúc máy đang xử lý Wipe Cache.\n\n💬 KỊCH BẢN TƯ VẤN: \"Em đang thử xóa cache hệ thống cho máy mình trước ạ, nếu không hết mới cần tính đến khôi phục cài đặt gốc.\"\n\n📦 LƯU Ý TTBH: Wipe Cache không hết bootloop — cần khôi phục cài đặt gốc, báo trước với khách sẽ mất dữ liệu.",
        keywords: ["bootloop", "khởi động lại liên tục", "treo logo"]
      },
      {
        id: "lib-an9",
        device: "Chung (mọi hãng)",
        symptom: "Điện thoại không nhận SIM hoặc mất sóng liên tục",
        diagnosis: "Khay SIM lỏng/bẩn, SIM lỗi, hoặc lỗi IC sóng sau va đập/vào nước.",
        solution: "🔍 CHẨN ĐOÁN: Vệ sinh chân tiếp xúc khay SIM, thử SIM khác để loại trừ lỗi nhà mạng.\n\n🛠️ HƯỚNG DẪN XỬ LÝ:\n1. Dùng dụng cụ lấy SIM (SIM eject tool) rút khay SIM ra, kiểm tra SIM có đặt đúng chiều, đúng khớp không.\n2. Lau nhẹ chân tiếp xúc trên SIM và trong khay bằng khăn khô/tăm bông.\n3. Lắp lại SIM, khởi động lại máy, quan sát biểu tượng sóng.\n4. Nếu vẫn không nhận: thử lắp SIM đó vào máy khác để loại trừ lỗi SIM/nhà mạng.\n5. Vào Cài đặt > Kết nối > Mạng di động, kiểm tra chế độ máy bay đang tắt và băng tần đang chọn đúng (Tự động chọn mạng).\n\n🚫 TUYỆT ĐỐI KHÔNG ĐƯỢC LÀM: Không dùng vật sắc nhọn không phải dụng cụ lấy SIM chuyên dụng để cạy khay SIM — dễ làm hỏng khay hoặc trầy khung máy.\n\n💬 KỊCH BẢN TƯ VẤN: \"Em đã vệ sinh khay SIM và kiểm tra cài đặt mạng cho máy mình rồi ạ, mình thử lại xem đã bắt sóng chưa nhé.\"\n\n📦 LƯU Ý TTBH: Máy từng rơi/vào nước và vẫn mất sóng, khả năng lỗi IC sóng: đề xuất khách nhận bảo hành; thiết bị sẽ được gửi về Trung tâm bảo hành (TTBH) để kiểm tra.",
        keywords: ["không nhận sim", "mất sóng", "sim"]
      },
      {
        id: "lib-an10",
        device: "Chung (mọi hãng)",
        symptom: "Máy bị khóa FRP (Factory Reset Protection) sau khi khôi phục cài đặt gốc",
        diagnosis: "Máy đã đăng nhập tài khoản Google trước đó nhưng chưa thoát tài khoản trước khi Reset, kích hoạt khóa bảo mật chống trộm.",
        solution: "🔍 CHẨN ĐOÁN: Xác nhận máy đã đăng nhập Google trước khi Reset chưa, kiểm tra khách có nhớ tài khoản không.\n\n🛠️ HƯỚNG DẪN XỬ LÝ:\n1. Xác nhận máy đang ở màn hình yêu cầu đăng nhập lại tài khoản Google đã dùng trước khi Reset (dấu hiệu khóa FRP).\n2. Hỏi khách có nhớ email và mật khẩu Google đã đăng nhập trên máy trước đó không.\n3. Nếu nhớ: hướng dẫn khách nhập đúng email/mật khẩu Google đó theo yêu cầu trên màn hình.\n4. Nếu không nhớ: hướng dẫn khách truy cập trang khôi phục tài khoản Google (accounts.google.com) trên thiết bị khác để lấy lại quyền truy cập trước.\n\n🚫 TUYỆT ĐỐI KHÔNG ĐƯỢC LÀM: Không dùng phần mềm/dịch vụ bẻ khóa FRP bên thứ 3 dưới mọi hình thức, kể cả khi khách năn nỉ hoặc trả thêm phí — đây là tính năng chống trộm, bỏ qua sai quy trình có thể tiếp tay cho máy gian.\n\n💬 KỊCH BẢN TƯ VẤN: \"Máy mình đang bị khóa bảo vệ chống trộm ạ, mình cần đăng nhập lại đúng tài khoản Google đã dùng trước đó để mở khóa.\"\n\n📦 LƯU Ý TTBH: Khách không nhớ/không chứng minh được chủ sở hữu — không có cách nào bỏ qua hợp lệ, cần hướng dẫn khôi phục tài khoản qua Google trước.",
        keywords: ["frp", "khóa máy", "reset", "tài khoản google"]
      },
      {
        id: "lib-an11",
        device: "Xiaomi",
        symptom: "Xiaomi báo khóa Mi Account (Mi Cloud lock), không dùng được máy",
        diagnosis: "Máy còn liên kết tài khoản Mi của chủ cũ, tương tự Activation Lock của Apple hoặc FRP của Google.",
        solution: "🔍 CHẨN ĐOÁN: Xác nhận máy còn liên kết tài khoản Mi của chủ cũ không.\n\n🛠️ HƯỚNG DẪN XỬ LÝ:\n1. Xác nhận máy đang hiện màn hình khóa Mi Account (yêu cầu đăng nhập tài khoản Mi để tiếp tục).\n2. Hỏi khách có liên hệ được với chủ cũ/người bán máy không.\n3. Nếu liên hệ được: hướng dẫn chủ cũ đăng nhập i.mi.com bằng tài khoản Mi của họ → vào mục Tìm thiết bị → chọn thiết bị → \"Xóa thiết bị\"/\"Đăng xuất từ xa\".\n4. Sau khi chủ cũ gỡ liên kết, khởi động lại máy và thiết lập tài khoản Mi mới cho khách.\n\n🚫 TUYỆT ĐỐI KHÔNG ĐƯỢC LÀM: Không dùng công cụ bẻ khóa Mi Account bên thứ 3; không tiếp nhận xử lý nếu không xác minh được máy có nguồn gốc hợp pháp.\n\n💬 KỊCH BẢN TƯ VẤN: \"Máy mình đang bị khóa tài khoản Mi tương tự như khóa iCloud của Apple ạ, mình cần đăng xuất từ xa trước khi em hỗ trợ tiếp.\"\n\n📦 LƯU Ý TTBH: Mua lại máy cũ mà người bán không hỗ trợ gỡ tài khoản Mi — cần liên hệ người bán trước, cửa hàng không thể bỏ qua khóa này.",
        keywords: ["mi account", "mi cloud", "xiaomi", "khóa tài khoản"]
      },
      {
        id: "lib-an12",
        device: "Chung (mọi hãng)",
        symptom: "Màn hình Android bị vỡ kính nhưng cảm ứng vẫn dùng được",
        diagnosis: "Kính bảo vệ ngoài nứt/vỡ do va đập, lớp cảm ứng và hiển thị bên trong có thể chưa bị ảnh hưởng.",
        solution: "🔍 CHẨN ĐOÁN: Kiểm tra 4 góc màn hình có ám màu/sọc kèm theo không (dấu hiệu lớp hiển thị cũng ảnh hưởng).\n\n🛠️ HƯỚNG DẪN XỬ LÝ:\n1. Kiểm tra 4 góc màn hình có ám màu, sọc, hoặc điểm chết đi kèm vết nứt không.\n2. Thử vuốt/chạm để xác nhận cảm ứng còn hoạt động bình thường ở mọi vùng màn hình.\n3. Dán tạm cường lực lên vùng vỡ để tránh vỡ lan rộng, bảo vệ tay khách khi cầm máy.\n4. Tư vấn phương án thay cụm màn hình theo ngân sách: loại zin bóc máy hoặc loại thay thế (aftermarket).\n\n🚫 TUYỆT ĐỐI KHÔNG ĐƯỢC LÀM: Không để khách tiếp tục cầm/dùng máy có mảnh kính vỡ sắc cạnh mà không dán bảo vệ tạm.\n\n💬 KỊCH BẢN TƯ VẤN: \"Màn hình mình vỡ kính ngoài ạ, em tư vấn thay cụm màn hình phù hợp ngân sách, có cả loại zin bóc máy và loại thay thế nhé.\"\n\n📦 LƯU Ý TTBH: Có thể xử lý tại chỗ nếu có linh kiện phù hợp, không nhất thiết phải gửi TTBH.",
        keywords: ["màn hình vỡ", "vỡ kính", "nứt màn hình"]
      },
      {
        id: "lib-an13",
        device: "Chung (mọi hãng)",
        symptom: "Cảm biến vân tay không nhận diện được",
        diagnosis: "Tay/màn hình ẩm bẩn, miếng dán màn hình sai chuẩn che cảm biến, hoặc dữ liệu vân tay lỗi.",
        solution: "🔍 CHẨN ĐOÁN: Kiểm tra tay/màn hình có ẩm bẩn không, xác nhận loại dán cường lực đang dùng có tương thích cảm biến vân tay dưới màn hình không.\n\n🛠️ HƯỚNG DẪN XỬ LÝ:\n1. Lau khô tay khách và vùng cảm biến vân tay trên màn hình/nút bấm.\n2. Hỏi khách đang dán loại cường lực nào — cường lực thường (không chuyên dụng) dễ chặn cảm biến vân tay dưới màn hình.\n3. Vào Cài đặt > Bảo mật (hoặc Sinh trắc học) > Vân tay > xóa toàn bộ vân tay cũ đã lưu.\n4. Đăng ký lại vân tay mới: đặt ngón tay lên cảm biến nhiều lần theo hướng dẫn trên màn hình, di chuyển nhẹ góc ngón tay giữa các lần chạm.\n\n🚫 TUYỆT ĐỐI KHÔNG ĐƯỢC LÀM: Không dán cường lực loại thường (không chuyên dụng cho cảm biến vân tay dưới màn hình) rồi vẫn cam kết vân tay sẽ nhận diện tốt.\n\n💬 KỊCH BẢN TƯ VẤN: \"Em đăng ký lại vân tay cho máy mình rồi ạ, nếu mình đang dán cường lực loại thường thì nên đổi loại chuyên dụng cho cảm biến vân tay nhé.\"\n\n📦 LƯU Ý TTBH: Đăng ký lại vẫn không nhận: đề xuất khách nhận bảo hành; thiết bị sẽ được gửi về Trung tâm bảo hành (TTBH) để kiểm tra phần cứng cảm biến.",
        keywords: ["vân tay", "không nhận diện", "cảm biến vân tay"]
      },
      {
        id: "lib-an14",
        device: "Chung (mọi hãng)",
        symptom: "Máy báo đầy bộ nhớ, không cài được ứng dụng hoặc cập nhật",
        diagnosis: "Cache hệ thống, file tải về, hoặc ảnh/video chưa sao lưu chiếm phần lớn dung lượng.",
        solution: "🔍 CHẨN ĐOÁN: Vào Cài đặt > Bộ nhớ (Storage) để xem loại dữ liệu chiếm nhiều nhất.\n\n🛠️ HƯỚNG DẪN XỬ LÝ:\n1. Vào Cài đặt > Bảo trì thiết bị/Bộ nhớ (Storage), xem biểu đồ phân loại dung lượng đang chiếm nhiều nhất.\n2. Nếu Ảnh/Video chiếm nhiều: hướng dẫn khách sao lưu lên Google Photos (bật \"Sao lưu và đồng bộ hóa\"), sau đó xóa bản gốc trên máy.\n3. Vào mục Ứng dụng, sắp xếp theo dung lượng, xóa cache của các app nặng (Cài đặt > Ứng dụng > chọn app > Bộ nhớ > Xóa bộ nhớ đệm).\n4. Kiểm tra và xóa file trong thư mục Tải xuống (Downloads) không còn cần dùng.\n\n🚫 TUYỆT ĐỐI KHÔNG ĐƯỢC LÀM: Không tự ý xóa ảnh, video, hoặc ứng dụng của khách khi chưa xác nhận — đặc biệt file/ảnh chưa sao lưu lên Google Photos.\n\n💬 KỊCH BẢN TƯ VẤN: \"Em kiểm tra thấy ảnh/video và cache ứng dụng chiếm phần lớn dung lượng máy mình ạ, để em dọn bớt giúp mình nhé.\"\n\n📦 LƯU Ý TTBH: Đây là vấn đề phần mềm thuần túy, không cần gửi TTBH.",
        keywords: ["đầy bộ nhớ", "hết dung lượng", "bộ nhớ"]
      },
      {
        id: "lib-an15",
        device: "Xiaomi",
        symptom: "Máy bị treo hoặc lỗi sau khi cập nhật giao diện (MIUI/ColorOS/FuntouchOS)",
        diagnosis: "Bản cập nhật giao diện hãng (Xiaomi MIUI/HyperOS, Oppo ColorOS, Vivo FuntouchOS/OriginOS) bị lỗi tải hoặc xung đột với dữ liệu cũ.",
        solution: "🔍 CHẨN ĐOÁN: Xác nhận lỗi xuất hiện ngay sau khi cập nhật giao diện hãng, kiểm tra ở Safe Mode có phải do app bên thứ 3 không.\n\n🛠️ HƯỚNG DẪN XỬ LÝ:\n1. Xác nhận với khách lỗi xuất hiện ngay sau đợt cập nhật giao diện hãng gần nhất.\n2. Khởi động lại ở Safe Mode (giữ nút Nguồn > chạm giữ \"Tắt nguồn\" trên màn hình đến khi hiện tùy chọn Safe Mode) để loại trừ xung đột từ app bên thứ 3.\n3. Nếu lỗi hết ở Safe Mode: khởi động lại bình thường, gỡ ứng dụng nghi ngờ vừa cập nhật/cài gần đây.\n4. Nếu lỗi vẫn còn cả ở Safe Mode: vào Recovery (tổ hợp phím theo hãng), chọn Wipe Cache Partition trước khi tính đến các bước sâu hơn.\n\n🚫 TUYỆT ĐỐI KHÔNG ĐƯỢC LÀM: Không tự ý cài ROM/firmware không chính hãng để \"chữa cháy\" khi cửa hàng chưa có công cụ flash chính thức của hãng — rủi ro biến máy thành \"cục gạch\" (brick).\n\n💬 KỊCH BẢN TƯ VẤN: \"Máy mình gặp lỗi ngay sau khi cập nhật giao diện ạ, em đang xóa cache hệ thống để khắc phục trước nhé.\"\n\n📦 LƯU Ý TTBH: Wipe Cache không hết, cần cài lại ROM chính hãng qua công cụ flash riêng của hãng; nếu cửa hàng chưa có công cụ này: đề xuất khách nhận bảo hành, thiết bị sẽ được gửi về Trung tâm bảo hành (TTBH) để kiểm tra và xử lý.",
        keywords: ["miui", "coloros", "funtouchos", "xiaomi", "oppo", "vivo", "cập nhật giao diện", "treo sau cập nhật"]
      },
      {
        id: "lib-an16",
        device: "Chung (mọi hãng)",
        symptom: "Camera Android bị mờ, lấy nét chậm hoặc không lấy nét được",
        diagnosis: "Ống kính bám bụi/dấu vân tay, ốp lưng che cảm biến lấy nét laser, hoặc lỗi phần mềm camera.",
        solution: "🔍 CHẨN ĐOÁN: Kiểm tra ống kính có bám bụi/dấu vân tay không, xác nhận ốp lưng/cường lực camera có che cảm biến lấy nét không.\n\n🛠️ HƯỚNG DẪN XỬ LÝ:\n1. Quan sát ống kính camera dưới ánh sáng, kiểm tra có bám bụi, dấu vân tay hoặc vết xước không.\n2. Lau sạch ống kính bằng khăn mềm chuyên dụng (microfiber), lau theo chuyển động tròn nhẹ nhàng.\n3. Gỡ thử ốp lưng hoặc miếng dán cường lực camera — kiểm tra lỗ camera có bị che khuất/lệch không.\n4. Vào Cài đặt > Ứng dụng > Camera > Bộ nhớ > Xóa bộ nhớ đệm, sau đó mở lại app Camera để test chụp thử.\n\n🚫 TUYỆT ĐỐI KHÔNG ĐƯỢC LÀM: Không dùng khăn giấy khô/vải thô lau ống kính — dễ gây trầy xước lớp phủ chống bám vân tay; không tháo cụm camera để tự vệ sinh bên trong.\n\n💬 KỊCH BẢN TƯ VẤN: \"Em đã vệ sinh ống kính và kiểm tra phụ kiện che camera cho máy mình rồi ạ, mình chụp thử lại xem đã nét chưa nhé.\"\n\n📦 LƯU Ý TTBH: Vệ sinh và gỡ phụ kiện vẫn mờ đều mọi khoảng cách, khả năng lỗi cảm biến/motor lấy nét: đề xuất khách nhận bảo hành; thiết bị sẽ được gửi về Trung tâm bảo hành (TTBH) để kiểm tra.",
        keywords: ["camera mờ", "lấy nét", "camera"]
      },
      {
        id: "lib-an17",
        device: "Chung (mọi hãng)",
        symptom: "Điện thoại Android bị vào nước, ẩm ở cổng sạc/khay SIM",
        diagnosis: "Chỉ báo tiếp xúc chất lỏng (liquid damage indicator) trong khay SIM hoặc cổng sạc đã đổi màu, nước có thể đã vào bên trong máy.",
        solution: "🔍 CHẨN ĐOÁN: Kiểm tra chỉ báo tiếp xúc chất lỏng trong khay SIM (thường đổi từ trắng/bạc sang đỏ/hồng khi dính nước) để xác nhận với khách; xác nhận máy có đạt chuẩn IP nhất định hay không (một số dòng giá rẻ không chống nước).\n\n🛠️ HƯỚNG DẪN XỬ LÝ:\n1. KHÔNG sạc, không bấm nguồn ngay khi tiếp nhận máy.\n2. Dùng khăn khô lau sạch ngoại quan (cổng sạc, khe loa, khay SIM).\n3. Rút khay SIM, soi đèn pin kiểm tra chỉ báo tiếp xúc chất lỏng đã đổi màu chưa.\n4. Đặt máy nơi khô ráo, thoáng khí, không dùng máy sấy tóc hoặc lò vi sóng, giữ tối thiểu 24-48 giờ.\n5. Sau thời gian chờ, thử cắm sạc và bật nguồn lại để kiểm tra.\n\n🚫 TUYỆT ĐỐI KHÔNG ĐƯỢC LÀM: Không sạc/bấm nguồn ngay sau khi máy vào nước; không dùng nhiệt cao hoặc gạo để hút ẩm — dễ làm hỏng thêm hoặc gây cháy nổ.\n\n💬 KỊCH BẢN TƯ VẤN: \"Máy mình có dấu hiệu vào nước ạ, em khuyên mình để máy khô tự nhiên 24-48 giờ, chưa nên sạc hoặc bật nguồn ngay để tránh chập mạch bên trong.\"\n\n📦 LƯU Ý TTBH: Sau thời gian để khô máy vẫn không lên nguồn/chập chờn/có hơi nước dưới màn hình: đề xuất khách nhận bảo hành; thiết bị sẽ được gửi về Trung tâm bảo hành (TTBH) để vệ sinh bo mạch chuyên sâu và kiểm tra — lưu ý với khách là hư hỏng do vào nước thường không thuộc diện bảo hành miễn phí của hãng.",
        keywords: ["vào nước", "ẩm", "ướt máy", "liquid damage", "không sạc được sau khi vào nước"]
      },
      {
        id: "lib-an18",
        device: "Samsung",
        symptom: "Wifi/Bluetooth Samsung tự tắt hoặc chập chờn liên tục",
        diagnosis: "Xung đột tính năng tiết kiệm pin/Wifi thông minh (Smart Wi-Fi toggle) hoặc lỗi phần mềm sau cập nhật One UI.",
        solution: "🔍 CHẨN ĐOÁN: Kiểm tra tính năng \"Tự động chuyển Wi-Fi\" hoặc chế độ tiết kiệm pin có đang bật không, xác nhận máy vừa cập nhật One UI/Android gần đây chưa.\n\n🛠️ HƯỚNG DẪN XỬ LÝ:\n1. Vào Cài đặt > Kết nối > Wi-Fi > biểu tượng 3 chấm (góc trên) > Cài đặt nâng cao, tắt \"Wi-Fi thông minh\"/chuyển mạng tự động.\n2. Quên tất cả mạng Wi-Fi đã lưu: vào Cài đặt > Kết nối > Wi-Fi > chạm giữ từng mạng > \"Quên\", sau đó kết nối lại từ đầu.\n3. Nếu vẫn lỗi: vào Cài đặt > Quản lý chung > Đặt lại > Đặt lại cài đặt mạng (không mất dữ liệu ứng dụng, chỉ mất Wifi/Bluetooth/VPN đã lưu).\n4. Khởi động lại máy sau khi đặt lại cài đặt mạng, kết nối lại Wi-Fi/Bluetooth để kiểm tra.\n\n🚫 TUYỆT ĐỐI KHÔNG ĐƯỢC LÀM: Không đặt lại cài đặt mạng nhiều lần liên tiếp trong thời gian ngắn mà chưa báo khách sẽ mất cấu hình Wifi/VPN đã lưu.\n\n💬 KỊCH BẢN TƯ VẤN: \"Em đã tắt tính năng tự chuyển mạng và đặt lại cài đặt kết nối cho máy mình rồi ạ, mình thử kết nối lại xem đã ổn định chưa nhé.\"\n\n📦 LƯU Ý TTBH: Đặt lại cài đặt mạng vẫn chập chờn liên tục ở nhiều mạng/thiết bị Bluetooth khác nhau, khả năng lỗi phần cứng anten: đề xuất khách nhận bảo hành; thiết bị sẽ được gửi về Trung tâm bảo hành (TTBH) để kiểm tra.",
        keywords: ["wifi tự tắt", "bluetooth tự tắt", "mất kết nối", "chập chờn", "samsung"]
      }
    ]
  }
];
