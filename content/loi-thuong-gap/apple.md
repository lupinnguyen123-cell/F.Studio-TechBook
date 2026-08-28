# Apple — Danh mục lỗi thường gặp

> File này lưu dữ liệu lỗi cho dòng sản phẩm: iPhone, iPad, Mac, Watch, AirPods
> Xem hướng dẫn định dạng ở README.md cùng thư mục.

---

### Quên mật khẩu Macbook
- **ID:** lib-a1
- **Chẩn đoán ngắn:** Người dùng không nhớ mật khẩu đăng nhập hoặc mật khẩu Firmware.
- **Từ khóa:** macbook, mật khẩu, pass

**🔍 Chẩn đoán:** Xác định là quên mật khẩu ĐĂNG NHẬP (macOS) hay mật khẩu FIRMWARE (khởi động bằng Option). Kiểm tra máy có chip T2/M1-M3 không (Menu Apple > Giới thiệu về máy Mac này).

**🛠️ Hướng dẫn xử lý:**
1. Hỏi khách quên mật khẩu lúc đăng nhập màn hình chính hay lúc khởi động giữ phím Option (Firmware Password).
2. Nếu quên mật khẩu đăng nhập: tại màn hình đăng nhập, chọn "Quên mật khẩu?" → xác minh qua Apple ID đã liên kết → đặt mật khẩu mới.
3. Nếu không có Apple ID liên kết: khởi động lại, giữ Cmd+R để vào Recovery Mode → mở Terminal (menu Tiện ích) → gõ `resetpassword` để reset qua công cụ Reset Password.
4. Yêu cầu khách xuất trình hóa đơn mua hàng hoặc giấy tờ chứng minh chủ sở hữu trước khi hỗ trợ reset.

**🚫 Tuyệt đối không được làm:** Không reset mật khẩu khi khách chưa xác minh được là chủ sở hữu hợp lệ (đặc biệt với mật khẩu Firmware trên máy chip T2/M1-M3); không tự ý xóa dữ liệu máy nếu khách chưa đồng ý.

**💬 Kịch bản tư vấn:** "Dạ máy mình có thể khôi phục lại được ạ, em cần xác minh anh/chị là chủ sở hữu qua Apple ID trước khi hỗ trợ."

**📦 Lưu ý TTBH:** Là mật khẩu FIRMWARE trên máy có chip T2/M1-M3 và khách không có hóa đơn chứng minh sở hữu: đề xuất khách nhận bảo hành; thiết bị sẽ được gửi về Trung tâm bảo hành (TTBH) chính hãng để kiểm tra và có phương án xử lý.

---

### Quên mật khẩu iCloud (Activation Lock)
- **ID:** lib-a2
- **Chẩn đoán ngắn:** Thiết bị bị khóa kích hoạt do không nhớ ID/Pass iCloud.
- **Từ khóa:** icloud, khóa, activation

**🔍 Chẩn đoán:** Xác nhận máy đang ở màn hình khóa kích hoạt (Activation Lock — logo iCloud kèm dòng "Find My iPhone đang bật"), kiểm tra khách còn giữ hóa đơn mua hàng hoặc email Apple ID không.

**🛠️ Hướng dẫn xử lý:**
1. Xác nhận máy đang ở đúng màn hình Activation Lock (không phải màn hình nhập mật khẩu thông thường).
2. Hỏi khách còn nhớ Apple ID/mật khẩu đã đăng nhập trên máy trước đó không.
3. Nếu còn nhớ: hướng dẫn khách truy cập iforgot.apple.com trên thiết bị khác → nhập Apple ID để tự khôi phục mật khẩu → đăng nhập lại trên máy.
4. Nếu không nhớ và có hóa đơn hợp lệ: hướng dẫn khách chuẩn bị hóa đơn mua hàng (ghi rõ IMEI/số serial) để nộp cho Apple xác minh chủ sở hữu.

**🚫 Tuyệt đối không được làm:** Không dùng bất kỳ công cụ/phần mềm bên thứ 3 nào để "bẻ khóa" Activation Lock; không nhận xử lý nếu không xác minh được nguồn gốc máy hợp pháp.

**💬 Kịch bản tư vấn:** "Đây là tính năng bảo vệ máy khỏi mất cắp ạ, mình cung cấp hóa đơn mua hàng để Apple xác minh chủ sở hữu và mở khóa giúp mình nhé."

**📦 Lưu ý TTBH:** Không có hóa đơn hợp lệ và khách không nhớ Apple ID: đề xuất khách nhận bảo hành kèm chứng từ mua hàng (nếu có); thiết bị sẽ được gửi về Trung tâm bảo hành (TTBH) để Apple kiểm tra và xử lý, không có cách nào bỏ qua khóa này tại cửa hàng.

---

### iPhone hao pin, nóng máy nhanh
- **ID:** lib-a3
- **Chẩn đoán ngắn:** Pin bị chai hoặc có ứng dụng chạy ngầm gây xung đột hệ thống.
- **Từ khóa:** pin, hao pin, nóng máy

**🔍 Chẩn đoán:** Kiểm tra tình trạng pin (Cài đặt > Pin > Tình trạng pin & Sạc) và xem ứng dụng nào tiêu hao pin nhiều trong 24h qua (Cài đặt > Pin, kéo xuống mục sử dụng pin).

**🛠️ Hướng dẫn xử lý:**
1. Vào Cài đặt > Pin > Tình trạng pin & Sạc, đọc chỉ số "Dung lượng tối đa" (%).
2. Vào Cài đặt > Pin, xem danh sách ứng dụng tiêu hao pin nhiều nhất trong 24h/10 ngày qua.
3. Nếu dung lượng pin trên 80%: tắt bớt ứng dụng chạy nền không cần thiết (Cài đặt > Cài đặt chung > Làm mới ứng dụng nền), tắt bớt.
4. Vào Cài đặt > Cài đặt chung > Chuyển hoặc đặt lại iPhone > Đặt lại > Đặt lại tất cả cài đặt (Reset All Settings) — không mất dữ liệu, chỉ mất cài đặt tùy chỉnh (Wifi đã lưu, layout...).
5. Khởi động lại máy để làm mới bộ nhớ hệ thống.

**🚫 Tuyệt đối không được làm:** Không tự ý đặt lại cài đặt gốc (Erase All Content) khi khách chỉ báo hao pin; không khẳng định chắc chắn cần thay pin khi chưa kiểm tra chỉ số Tình trạng pin.

**💬 Kịch bản tư vấn:** "Em kiểm tra thấy pin mình đã xuống thấp rồi ạ, để em tối ưu lại phần mềm/tư vấn thay pin mới giúp mình dùng bền hơn nhé."

**📦 Lưu ý TTBH:** Pin dưới 80% hoặc chai nặng — tư vấn thay pin chính hãng, không cần gửi TTBH sâu nếu chỉ thay pin đơn thuần.

---

### iPhone không sạc được, cắm sạc không lên nguồn
- **ID:** lib-a4
- **Chẩn đoán ngắn:** Cổng sạc bám bụi/oxi hóa, cáp sạc lỗi, hoặc IC nguồn có vấn đề.
- **Từ khóa:** sạc, không lên nguồn, cổng sạc, không sạc được

**🔍 Chẩn đoán:** Thử cáp/củ sạc khác, soi đèn pin kiểm tra cổng sạc có bụi/xơ vải không.

**🛠️ Hướng dẫn xử lý:**
1. Thử cắm bằng cáp và củ sạc chính hãng khác để loại trừ lỗi phụ kiện.
2. Soi đèn pin vào cổng sạc Lightning/USB-C, kiểm tra có bụi, xơ vải hay dị vật không.
3. Vệ sinh cổng sạc bằng tăm tre khô hoặc que nhựa mềm, thao tác nhẹ nhàng, không chọc sâu.
4. Cắm lại sạc, quan sát biểu tượng pin có hiện sạc không (chờ 1-2 phút vì máy có thể cần thời gian nhận diện).
5. Kiểm tra chỉ báo tiếp xúc chất lỏng (LCI) trong khay SIM bằng đèn pin — nếu đổi màu đỏ/hồng là dấu hiệu từng vào nước.

**🚫 Tuyệt đối không được làm:** Không dùng vật kim loại/sắc nhọn để cạy/chọc vào cổng sạc; không khẳng định với khách là "chắc chắn sửa được tại chỗ" trước khi xác định rõ nguyên nhân.

**💬 Kịch bản tư vấn:** "Dạ em đã vệ sinh và kiểm tra cổng sạc cho mình rồi ạ, nếu vẫn chưa sạc được thì khả năng cao lỗi bên trong, em cần kiểm tra sâu hơn."

**📦 Lưu ý TTBH:** Vệ sinh xong vẫn không lên nguồn, khả năng lỗi IC nguồn: đề xuất khách nhận bảo hành; thiết bị sẽ được gửi về Trung tâm bảo hành (TTBH) để kiểm tra và có phương án xử lý.

---

### Loa iPhone rè, nghe gọi rột rẹt hoặc nhỏ tiếng
- **ID:** lib-a5
- **Chẩn đoán ngắn:** Màng loa dính bụi/nước, hoặc có thể do cấu hình âm thanh bị lỗi sau cập nhật.
- **Từ khóa:** loa, rè, nhỏ tiếng, nghe gọi

**🔍 Chẩn đoán:** Phát nhạc to (mở Nhạc hoặc video) để xác định rè ở loa thoại (trên/gần camera trước) hay loa ngoài (đáy máy), một bên hay cả hai.

**🛠️ Hướng dẫn xử lý:**
1. Mở app Nhạc/YouTube, bật âm lượng tối đa để xác định vị trí rè (loa thoại trên hay loa ngoài dưới đáy máy).
2. Kiểm tra Cài đặt > Âm thanh & Xúc giác, xem chế độ âm thanh/EQ có bị chỉnh sai không.
3. Dùng cọ mềm/tăm bông khô vệ sinh lưới loa, thao tác nhẹ để không đẩy bụi vào sâu hơn.
4. Khởi động lại máy sau khi vệ sinh, phát lại nhạc để kiểm tra.

**🚫 Tuyệt đối không được làm:** Không dùng vật nhọn/kim loại chọc vào lưới loa; không dùng khí nén xịt quá mạnh có thể đẩy bụi vào sâu hơn màng loa.

**💬 Kịch bản tư vấn:** "Em đã vệ sinh loa và kiểm tra cài đặt âm thanh cho mình rồi ạ, nếu vẫn rè thì màng loa có thể đã hỏng cần thay mới."

**📦 Lưu ý TTBH:** Vệ sinh không hết rè — cần thay màng loa, có thể xử lý tại chỗ nếu có linh kiện, không nhất thiết phải gửi TTBH.

---

### Face ID không nhận diện khuôn mặt
- **ID:** lib-a6
- **Chẩn đoán ngắn:** Cảm biến TrueDepth bị che khuất, kính cường lực dày, hoặc lỗi phần mềm Face ID.
- **Từ khóa:** face id, không nhận diện, khuôn mặt

**🔍 Chẩn đoán:** Kiểm tra camera trước (cụm TrueDepth quanh tai thỏ/notch) có bị che bởi cường lực dày không, xác nhận cụm camera có từng bị thay ngoài chính hãng chưa.

**🛠️ Hướng dẫn xử lý:**
1. Quan sát vùng camera trước, hỏi khách đang dán loại cường lực nào (cường lực dày/viền đen dễ che cảm biến).
2. Gỡ thử miếng dán cường lực, lau sạch cụm camera trước bằng khăn microfiber khô.
3. Vào Cài đặt > Face ID & Mật mã (nhập mật mã) > Đặt lại Face ID.
4. Thiết lập lại Face ID theo hướng dẫn trên màn hình (đưa mặt vào khung, xoay đầu theo vòng tròn 2 lần).
5. Kiểm tra máy có báo "Không thể xác minh linh kiện Camera trước" trong Cài đặt chung > Giới thiệu không — đây là dấu hiệu cụm camera từng bị thay ngoài.

**🚫 Tuyệt đối không được làm:** Không cam kết Face ID sẽ hoạt động lại 100% nếu cụm camera trước đã từng thay ngoài chính hãng — phải giải thích rõ với khách trước khi nhận máy để tránh khiếu nại sau này.

**💬 Kịch bản tư vấn:** "Em thử thiết lập lại Face ID cho mình xem có nhận được không nhé, nếu cụm camera từng thay ngoài thì máy sẽ báo linh kiện không xác định ạ."

**📦 Lưu ý TTBH:** Camera trước từng thay ngoài chính hãng — Face ID sẽ không bao giờ khôi phục được, cần giải thích rõ với khách trước khi nhận máy.

---

### iPhone bị vô hiệu hóa (iPhone Unavailable) do nhập sai mật khẩu
- **ID:** lib-a7
- **Chẩn đoán ngắn:** Nhập sai passcode quá số lần cho phép, máy tự khóa theo thời gian tăng dần.
- **Từ khóa:** vô hiệu hóa, unavailable, sai mật khẩu, khóa máy

**🔍 Chẩn đoán:** Xác nhận máy đang ở màn hình "iPhone Unavailable" (nền đen, biểu tượng khóa, đồng hồ đếm ngược), kiểm tra phiên bản iOS (từ 15.2 trở lên có Erase iPhone ngay màn hình khóa).

**🛠️ Hướng dẫn xử lý:**
1. Xác nhận máy đang ở màn hình "iPhone Unavailable" — hỏi khách có nhớ vừa cập nhật iOS gần đây không.
2. Kiểm tra: nếu máy đang có mạng (Wi-Fi/di động) và chạy iOS 15.2 trở lên, bên dưới đồng hồ đếm ngược sẽ hiện dòng chữ đỏ "Erase iPhone".
3. Nếu có dòng "Erase iPhone": chạm vào đó → chạm "Erase iPhone" lần nữa để xác nhận → máy tự xóa dữ liệu và khởi động lại về màn hình thiết lập ban đầu (Hello).
4. Ở màn hình thiết lập: chọn ngôn ngữ → kết nối Wi-Fi → đến bước "Apps & Data", chọn "Restore from iCloud Backup" (nếu khách có sao lưu iCloud) hoặc nối máy tính chọn "Restore from Mac or PC" → đăng nhập Apple ID của khách → chọn bản sao lưu gần nhất.
5. Nếu KHÔNG có dòng "Erase iPhone" (chưa lên iOS 15.2) hoặc máy không có mạng: nối cáp với máy tính (Finder trên macOS Catalina+, hoặc Apple Devices/iTunes trên Windows) → đưa máy vào Recovery Mode theo đúng dòng máy (từ iPhone 8: nhấn nhanh Volume Up → nhấn nhanh Volume Down → giữ nút Side đến khi hiện màn hình kết nối máy tính) → trên máy tính chọn "Restore".

**🚫 Tuyệt đối không được làm:** Không tự ý bấm Erase iPhone khi chưa xác nhận khách có bản sao lưu hoặc đã hiểu rõ sẽ mất dữ liệu; không hứa chắc chắn khôi phục được dữ liệu nếu khách không có backup.

**💬 Kịch bản tư vấn:** "Máy mình bị khóa do nhập sai mật khẩu nhiều lần ạ, nếu mình có backup thì dữ liệu vẫn khôi phục lại được sau khi xóa máy."

**📦 Lưu ý TTBH:** Không có backup và không nhớ Apple ID: dữ liệu sẽ mất hoàn toàn khi khôi phục, cần xác nhận rõ với khách trước khi thao tác. (Không cần gửi TTBH — xử lý được tại chỗ.)

---

### MacBook không lên nguồn, đèn sạc không sáng
- **ID:** lib-a8
- **Chẩn đoán ngắn:** Sạc/cáp lỗi, pin cạn sâu, hoặc lỗi mạch nguồn logic board.
- **Từ khóa:** macbook, không lên nguồn, không sạc, đèn sạc

**🔍 Chẩn đoán:** Thử cáp/củ sạc chính hãng khác, kiểm tra đèn cổng sạc MagSafe có sáng không.

**🛠️ Hướng dẫn xử lý:**
1. Thử cắm sạc chính hãng khác, quan sát đèn báo trên đầu sạc MagSafe (cam = đang sạc, xanh = đầy pin).
2. Nếu không có đèn: cắm sạc và giữ tối thiểu 30 phút (đề phòng pin cạn sâu, máy cần thời gian nạp trước khi lên hình).
3. Sau 30 phút, nhấn giữ nút nguồn khoảng 10 giây để khởi động lại, thả tay và nhấn lại 1 lần để bật máy.
4. Nếu vẫn không lên hình: thử tổ hợp phím khởi động SMC/NVRAM tương ứng với dòng máy (chip Apple Silicon: tắt máy, giữ nút nguồn 10 giây rồi thả).

**🚫 Tuyệt đối không được làm:** Không tự ý tháo vỏ máy để kiểm tra pin/mạch nguồn tại cửa hàng nếu không có chuyên môn phần cứng Mac; không sạc bằng củ sạc công suất không phù hợp trong lúc chờ xử lý.

**💬 Kịch bản tư vấn:** "Máy mình có thể chỉ bị cạn pin sâu thôi ạ, em đang sạc và thử khởi động lại xem có lên nguồn không nhé."

**📦 Lưu ý TTBH:** Sạc 30 phút vẫn không lên nguồn, khả năng lỗi mạch nguồn logic board: đề xuất khách nhận bảo hành; thiết bị sẽ được gửi về Trung tâm bảo hành (TTBH) để kiểm tra và có phương án xử lý.

---

### MacBook chạy chậm, quạt kêu to liên tục
- **ID:** lib-a9
- **Chẩn đoán ngắn:** Bộ nhớ đầy, quá nhiều ứng dụng chạy nền, hoặc quạt tản nhiệt bám bụi.
- **Từ khóa:** macbook, chạy chậm, quạt kêu to, nóng máy

**🔍 Chẩn đoán:** Mở Activity Monitor (Ứng dụng > Tiện ích) xem tiến trình chiếm CPU cao, kiểm tra dung lượng ổ đĩa còn trống (Menu Apple > Giới thiệu về máy Mac này > Bộ nhớ lưu trữ).

**🛠️ Hướng dẫn xử lý:**
1. Mở Activity Monitor, sắp xếp theo cột "% CPU" để tìm tiến trình bất thường đang chiếm tài nguyên cao.
2. Vào Menu Apple > Giới thiệu về máy Mac này > Bộ nhớ lưu trữ, kiểm tra dung lượng trống (cần tối thiểu 15-20%).
3. Nếu ổ đĩa gần đầy: hướng dẫn khách dọn bớt file lớn, cache, hoặc dùng tính năng "Tối ưu hóa bộ nhớ lưu trữ" trong mục này.
4. Khởi động lại ở Safe Mode (giữ Shift khi khởi động với Mac Intel, hoặc giữ nút nguồn rồi chọn ổ đĩa + giữ Shift với Apple Silicon) để loại trừ xung đột phần mềm khởi động cùng hệ thống.
5. Nếu quạt vẫn kêu to ngay cả lúc máy nhàn rỗi (không mở app nặng): ghi nhận lại và cân nhắc đề xuất vệ sinh tản nhiệt chuyên sâu.

**🚫 Tuyệt đối không được làm:** Không tự ý xóa file/ứng dụng của khách để giải phóng dung lượng khi chưa xác nhận; không tháo vỏ máy để tự vệ sinh quạt tản nhiệt nếu cửa hàng không có quy trình/dụng cụ chuyên dụng cho Mac.

**💬 Kịch bản tư vấn:** "Em đang kiểm tra xem có phải do đầy ổ cứng hoặc ứng dụng chạy ngầm gây chậm máy không ạ, mình đợi em chút nhé."

**📦 Lưu ý TTBH:** Quạt kêu to bất thường kể cả khi máy nhàn rỗi, có thể do tản nhiệt cần vệ sinh chuyên sâu: đề xuất khách nhận bảo hành; thiết bị sẽ được gửi về Trung tâm bảo hành (TTBH) để kiểm tra và có phương án xử lý.

---

### iPad không nhận sạc hoặc sạc rất chậm
- **ID:** lib-a10
- **Chẩn đoán ngắn:** Củ sạc công suất thấp, cáp lỗi, hoặc cổng sạc bám bụi.
- **Từ khóa:** ipad, không nhận sạc, sạc chậm

**🔍 Chẩn đoán:** Kiểm tra công suất củ sạc (tối thiểu 20W cho iPad Pro), soi cổng sạc xem có bụi/xơ vải không.

**🛠️ Hướng dẫn xử lý:**
1. Hỏi khách đang dùng củ sạc công suất bao nhiêu W — đối chiếu với khuyến nghị của dòng máy (iPad Pro cần tối thiểu 20W).
2. Soi đèn pin vào cổng sạc (Lightning hoặc USB-C tùy đời máy), kiểm tra bụi/xơ vải.
3. Vệ sinh nhẹ nhàng bằng tăm tre khô hoặc que nhựa mềm.
4. Đổi sang củ sạc và cáp chính hãng đúng công suất, cắm lại và theo dõi biểu tượng sạc trong 5-10 phút.

**🚫 Tuyệt đối không được làm:** Không dùng củ sạc không rõ nguồn gốc/công suất quá cao so với khuyến nghị để "sạc thử nhanh hơn"; không chọc vật cứng sâu vào cổng sạc.

**💬 Kịch bản tư vấn:** "Dạ có thể do củ sạc chưa đủ công suất cho máy mình ạ, em thử đổi sạc đúng chuẩn xem có cải thiện không nhé."

**📦 Lưu ý TTBH:** Đã đổi sạc/cáp và vệ sinh vẫn chập chờn, khả năng chân cổng sạc cong/hỏng: đề xuất khách nhận bảo hành; thiết bị sẽ được gửi về Trung tâm bảo hành (TTBH) để kiểm tra và có phương án xử lý.

---

### Wifi hoặc Bluetooth chập chờn, tự ngắt kết nối
- **ID:** lib-a11
- **Chẩn đoán ngắn:** Xung đột phần mềm sau cập nhật iOS, hoặc lỗi anten/IC sóng.
- **Từ khóa:** wifi, bluetooth, mất kết nối, chập chờn

**🔍 Chẩn đoán:** Kiểm tra máy vừa cập nhật iOS gần đây không, xác nhận máy có từng rơi vỡ/vào nước không.

**🛠️ Hướng dẫn xử lý:**
1. Vuốt mở Trung tâm điều khiển, tắt rồi bật lại Wifi và Bluetooth.
2. Vào Cài đặt > Wi-Fi, chạm biểu tượng (i) cạnh mạng đang dùng > "Quên mạng này", sau đó kết nối lại từ đầu và nhập mật khẩu.
3. Nếu vẫn chập chờn: vào Cài đặt > Cài đặt chung > Chuyển hoặc Đặt lại iPhone > Đặt lại > Đặt lại Cài đặt Mạng (không mất dữ liệu, chỉ mất mật khẩu Wifi/VPN đã lưu).
4. Khởi động lại máy sau khi đặt lại cài đặt mạng, kiểm tra kết nối lại.

**🚫 Tuyệt đối không được làm:** Không đặt lại cài đặt mạng nhiều lần liên tục trong thời gian ngắn (có thể xóa mất cấu hình VPN/Wifi công ty của khách mà không báo trước); không kết luận lỗi phần cứng khi chưa loại trừ nguyên nhân phần mềm.

**💬 Kịch bản tư vấn:** "Em đã thử đặt lại cài đặt mạng cho mình rồi ạ, đa số trường hợp là do xung đột phần mềm sau cập nhật thôi."

**📦 Lưu ý TTBH:** Máy từng rơi vỡ/vào nước và vẫn mất kết nối sau khi reset, khả năng lỗi phần cứng anten: đề xuất khách nhận bảo hành; thiết bị sẽ được gửi về Trung tâm bảo hành (TTBH) để kiểm tra và có phương án xử lý.

---

### iPhone bị vào nước, có dấu hiệu ẩm (LCI đỏ)
- **ID:** lib-a12
- **Chẩn đoán ngắn:** Chỉ báo tiếp xúc chất lỏng (Liquid Contact Indicator) đã chuyển đỏ, nước có thể đã vào bo mạch.
- **Từ khóa:** vào nước, ẩm, lci, rơi nước

**🔍 Chẩn đoán:** Kiểm tra chỉ báo LCI trong khay SIM đã chuyển đỏ chưa để xác nhận với khách (dùng khay lấy SIM soi đèn pin vào lỗ nhỏ trong khe SIM).

**🛠️ Hướng dẫn xử lý:**
1. KHÔNG sạc/bấm nguồn máy ngay khi tiếp nhận.
2. Dùng khăn mềm khô lau sạch ngoại quan (cổng sạc, khe loa, khe SIM).
3. Kiểm tra chỉ báo LCI trong khay SIM bằng đèn pin để xác nhận với khách.
4. Đặt máy nơi khô ráo, thoáng khí (không dùng máy sấy tóc, lò vi sóng, hay để dưới nắng gắt), giữ tối thiểu 24-48 giờ.
5. Sau thời gian chờ, thử cắm sạc và bật nguồn lại để kiểm tra.

**🚫 Tuyệt đối không được làm:** Không sạc hoặc bấm nguồn ngay sau khi máy vào nước; không dùng nhiệt cao (máy sấy, lò vi sóng, phơi nắng gắt) hoặc gạo để hút ẩm — đều có thể làm hỏng thêm hoặc gây cháy nổ.

**💬 Kịch bản tư vấn:** "Máy mình cần để khô tự nhiên trước ạ, em khuyên mình chưa nên sạc hoặc bật máy trong 24-48 giờ tới để tránh chập mạch."

**📦 Lưu ý TTBH:** Sau thời gian để khô vẫn lỗi (không lên nguồn, chập chờn): đề xuất khách nhận bảo hành; thiết bị sẽ được gửi về Trung tâm bảo hành (TTBH) để vệ sinh bo mạch chuyên sâu và kiểm tra.

---

### Màn hình iPhone bị vỡ kính nhưng cảm ứng vẫn dùng được
- **ID:** lib-a13
- **Chẩn đoán ngắn:** Kính cường lực bên ngoài nứt/vỡ nhưng lớp cảm ứng và hiển thị bên trong chưa bị ảnh hưởng.
- **Từ khóa:** màn hình vỡ, vỡ kính, nứt màn hình

**🔍 Chẩn đoán:** Kiểm tra cảm ứng và hiển thị còn hoạt động bình thường không dù kính đã nứt/vỡ (thử vuốt/chạm các góc màn hình, kiểm tra có sọc/ám màu không).

**🛠️ Hướng dẫn xử lý:**
1. Kiểm tra toàn bộ màn hình còn cảm ứng và hiển thị bình thường không, đặc biệt 4 góc (dấu hiệu lớp hiển thị bị ảnh hưởng).
2. Dán tạm 1 lớp cường lực/dán màn hình để tránh vỡ lan rộng và bảo vệ tay khách trong lúc chờ thay.
3. Tư vấn khách phương án thay cụm màn hình chính hãng (giữ đúng màu sắc, True Tone) hoặc loại thay thế theo ngân sách.
4. Báo giá và thời gian dự kiến trước khi tiến hành thay.

**🚫 Tuyệt đối không được làm:** Không tiếp tục dùng máy trong tình trạng kính vỡ có cạnh sắc mà không dán tạm bảo vệ; không tự ý thay cụm màn hình không rõ nguồn gốc mà không thông báo với khách về ảnh hưởng đến True Tone/chống nước.

**💬 Kịch bản tư vấn:** "Máy mình vỡ kính ngoài nhưng cảm ứng vẫn dùng tốt ạ, em tư vấn thay cụm màn hình chính hãng để giữ đúng màu sắc và True Tone nhé."

**📦 Lưu ý TTBH:** Có thể thay màn hình tại chỗ nếu có linh kiện; chỉ cần gửi TTBH nếu khách muốn giữ zin 100% chính hãng Apple.

---

### iPhone báo đầy bộ nhớ dù đã xóa bớt ứng dụng/ảnh
- **ID:** lib-a14
- **Chẩn đoán ngắn:** Dữ liệu cache hệ thống, tin nhắn/video đính kèm, hoặc ảnh chưa đồng bộ xong iCloud vẫn chiếm dung lượng.
- **Từ khóa:** đầy bộ nhớ, hết dung lượng, bộ nhớ

**🔍 Chẩn đoán:** Vào Cài đặt > Cài đặt chung > Dung lượng iPhone để xem loại dữ liệu chiếm nhiều nhất.

**🛠️ Hướng dẫn xử lý:**
1. Vào Cài đặt > Cài đặt chung > Dung lượng iPhone, đợi máy quét và hiển thị danh sách dung lượng theo loại dữ liệu.
2. Nếu Ảnh chiếm nhiều: vào Cài đặt > Ảnh > bật "Tối ưu hóa bộ nhớ iPhone" (thay vì "Tải xuống và Giữ bản gốc").
3. Vào app Tin nhắn, kiểm tra các đoạn chat có nhiều ảnh/video cũ — xóa bớt file đính kèm không cần thiết (thường bị bỏ sót vì không hiện trong mục Ảnh).
4. Quay lại mục Dung lượng iPhone, chọn từng app nặng để xóa cache/dữ liệu không cần thiết (Xóa ứng dụng > Cài lại nếu cần).

**🚫 Tuyệt đối không được làm:** Không tự ý xóa ảnh, video, tin nhắn hoặc ứng dụng của khách khi chưa xác nhận — đặc biệt dữ liệu chưa đồng bộ xong lên iCloud.

**💬 Kịch bản tư vấn:** "Em kiểm tra thấy phần lớn dung lượng máy mình do tin nhắn có ảnh/video cũ ạ, mình cho em dọn bớt để máy chạy mượt hơn nhé."

**📦 Lưu ý TTBH:** Đây là vấn đề phần mềm thuần túy, không cần gửi TTBH.

---

### Apple Watch không lên nguồn hoặc không sạc được
- **ID:** lib-a15
- **Chẩn đoán ngắn:** Đế sạc từ tính không áp sát, cạn pin sâu, hoặc lỗi mạch nguồn.
- **Từ khóa:** apple watch, không sạc, không lên nguồn

**🔍 Chẩn đoán:** Kiểm tra đế sạc và mặt sau đồng hồ có khô ráo, sạch sẽ không (nước/mồ hôi cản từ tính).

**🛠️ Hướng dẫn xử lý:**
1. Lau khô mặt sau đồng hồ và mặt đế sạc bằng khăn mềm khô.
2. Đặt đồng hồ đúng tâm đế sạc từ tính (cảm nhận độ "hít" nam châm khớp), quan sát biểu tượng sét vàng hiện lên.
3. Nếu không lên đèn: đổi sang đế sạc/cáp chính hãng khác.
4. Cắm giữ tối thiểu 30 phút (đề phòng cạn pin sâu) trước khi kết luận không lên nguồn.
5. Sau 30 phút, nhấn giữ nút Side đến khi thấy logo Apple để khởi động lại.

**🚫 Tuyệt đối không được làm:** Không dùng đế sạc từ tính không chính hãng hoặc sai chuẩn (dễ không nhận diện, thậm chí hỏng cổng sạc); không cạy nắp lưng đồng hồ để kiểm tra pin tại quầy.

**💬 Kịch bản tư vấn:** "Em đang thử sạc lại cho đồng hồ mình bằng sạc chính hãng khác ạ, có thể chỉ do đế sạc bị bẩn thôi."

**📦 Lưu ý TTBH:** Sạc 30 phút với sạc khác vẫn không lên nguồn: đề xuất khách nhận bảo hành; thiết bị sẽ được gửi về Trung tâm bảo hành (TTBH) để kiểm tra mạch nguồn và có phương án xử lý.

---

### Apple Watch báo lỗi khi ghép đôi với iPhone
- **ID:** lib-a16
- **Chẩn đoán ngắn:** Xung đột dữ liệu ghép đôi cũ, sai phiên bản watchOS/iOS tương thích, hoặc Bluetooth lỗi.
- **Từ khóa:** apple watch, ghép đôi, pairing, kết nối

**🔍 Chẩn đoán:** Xác nhận iPhone đã cập nhật iOS mới nhất, kiểm tra đồng hồ có từng ghép với máy khác chưa.

**🛠️ Hướng dẫn xử lý:**
1. Hỏi khách đồng hồ đã từng ghép đôi với iPhone khác trước đây chưa.
2. Nếu còn giữ iPhone cũ: mở app Watch trên máy đó > tab "Đồng hồ của tôi" > chạm biểu tượng (i) cạnh đồng hồ > "Bỏ ghép đôi Apple Watch".
3. Nếu không còn máy cũ: đăng nhập icloud.com/find bằng Apple ID của khách → chọn thiết bị Apple Watch → Xóa thiết bị/Bỏ ghép đôi từ xa.
4. Khởi động lại cả iPhone và Apple Watch.
5. Mở app Watch trên iPhone mới > "Bắt đầu ghép đôi" > đưa đồng hồ vào khung camera để ghép lại.

**🚫 Tuyệt đối không được làm:** Không thao tác bỏ ghép đôi qua iCloud.com khi chưa xác minh chắc chắn đây đúng là tài khoản và thiết bị của khách.

**💬 Kịch bản tư vấn:** "Đồng hồ mình cần được gỡ khỏi tài khoản cũ trước khi ghép với máy mới ạ, em hỗ trợ mình làm luôn nhé."

**📦 Lưu ý TTBH:** Vấn đề phần mềm thuần túy, không cần gửi TTBH.

---

### Kính Apple Watch bị nứt hoặc trầy nặng
- **ID:** lib-a17
- **Chẩn đoán ngắn:** Va đập mạnh làm nứt kính Ion-X/Sapphire, chưa chắc ảnh hưởng màn hình cảm ứng bên trong.
- **Từ khóa:** apple watch, kính nứt, vỡ kính, trầy

**🔍 Chẩn đoán:** Kiểm tra cảm ứng/hiển thị còn hoạt động bình thường không dù kính nứt.

**🛠️ Hướng dẫn xử lý:**
1. Kiểm tra cảm ứng và hiển thị của đồng hồ còn hoạt động bình thường không.
2. Dán tạm miếng bảo vệ lên mặt kính nứt để tránh mảnh vỡ rơi ra gây xước tay khách.
3. Tư vấn phương án thay kính/màn hình chính hãng, báo rõ chi phí và thời gian.
4. Giải thích với khách việc thay kính rời có thể ảnh hưởng đến độ kín chống nước của máy, ghi chú vào phiếu tiếp nhận.

**🚫 Tuyệt đối không được làm:** Không để khách tiếp tục đeo máy có kính nứt sắc cạnh mà không dán bảo vệ tạm; không cam kết máy vẫn chống nước như cũ sau khi thay kính rời nếu chưa kiểm tra lại gioăng.

**💬 Kịch bản tư vấn:** "Kính đồng hồ mình bị nứt do va đập ạ, em tư vấn thay kính chính hãng, lưu ý sau khi thay có thể ảnh hưởng độ kín chống nước nhé."

**📦 Lưu ý TTBH:** Thay kính rời có ảnh hưởng chuẩn chống nước — cần thông báo rõ và ghi vào phiếu trước khi làm.

---

### AirPods chỉ một bên có tiếng hoặc mất kết nối một bên
- **ID:** lib-a18
- **Chẩn đoán ngắn:** Lệch pin giữa 2 bên tai, bám bụi ở lưới loa, hoặc lỗi đồng bộ cặp đôi.
- **Từ khóa:** airpods, một bên, mất kết nối, mất tiếng

**🔍 Chẩn đoán:** Kiểm tra pin từng bên tai trong app (mở hộp gần iPhone, vuốt thông báo pin hiện lên, hoặc widget Pin), xác nhận vấn đề là mất tiếng hay mất kết nối bên đó.

**🛠️ Hướng dẫn xử lý:**
1. Mở nắp hộp AirPods gần iPhone để xem % pin từng bên tai qua thông báo/widget.
2. Đặt cả 2 tai vào hộp, đóng nắp, chờ 30 giây rồi mở lại để đồng bộ lại.
3. Trên iPhone: vào Cài đặt > Bluetooth > chạm (i) cạnh AirPods > "Quên thiết bị này" → đặt AirPods vào hộp, mở nắp, giữ nút Thiết lập (mặt sau hộp) đến khi đèn nhấp nháy trắng → ghép đôi lại từ đầu.
4. Dùng cọ khô vệ sinh lưới loa của bên tai gặp vấn đề.

**🚫 Tuyệt đối không được làm:** Không dùng vật ướt hoặc chất tẩy rửa để vệ sinh lưới loa AirPods; không khẳng định chắc chắn lỗi phần cứng khi chưa thử đồng bộ lại từ đầu.

**💬 Kịch bản tư vấn:** "Em đã đồng bộ lại AirPods cho mình rồi ạ, nếu 1 bên vẫn yếu hơn hẳn thì khả năng bên đó đã chai pin cần thay."

**📦 Lưu ý TTBH:** Đồng bộ lại vẫn không cải thiện: đề xuất khách nhận bảo hành; thiết bị sẽ được gửi về Trung tâm bảo hành (TTBH) để kiểm tra/thay tai bị lỗi.

---

### Hộp sạc AirPods không sạc được hoặc đèn báo không sáng
- **ID:** lib-a19
- **Chẩn đoán ngắn:** Cổng sạc/tiếp điểm hộp bám bẩn, cáp/đế sạc lỗi, hoặc pin hộp đã chai.
- **Từ khóa:** airpods, hộp sạc, không sạc, đèn không sáng

**🔍 Chẩn đoán:** Kiểm tra chấu tiếp điểm kim loại trong hộp có bám bẩn không, thử cáp/đế sạc khác.

**🛠️ Hướng dẫn xử lý:**
1. Mở nắp hộp, soi đèn pin kiểm tra 2 chấu tiếp điểm kim loại (nơi tai nghe chạm vào) có bám bẩn/oxi hóa không.
2. Dùng tăm bông khô hoặc thấm chút cồn isopropyl lau nhẹ chấu tiếp điểm, để khô hoàn toàn trước khi đặt tai nghe vào lại.
3. Đặt AirPods vào đúng khớp trong hộp (nghe/cảm nhận tiếng "cạch" nam châm hút), đóng nắp.
4. Cắm sạc bằng cáp/đế sạc chính hãng khác, quan sát đèn LED phía trước hộp (hé nắp để xem đèn khi đang sạc).

**🚫 Tuyệt đối không được làm:** Không dùng cồn/chất lỏng đổ trực tiếp vào hộp; không cạy mở hộp sạc để kiểm tra pin bên trong tại quầy.

**💬 Kịch bản tư vấn:** "Em đã vệ sinh chấu sạc trong hộp cho mình rồi ạ, mình thử sạc lại xem đèn báo đã sáng chưa nhé."

**📦 Lưu ý TTBH:** Vệ sinh và đổi sạc vẫn không lên đèn: đề xuất khách nhận bảo hành; thiết bị sẽ được gửi về Trung tâm bảo hành (TTBH) để kiểm tra pin/mạch hộp sạc.

---

### AirPods bị rè hoặc âm thanh rột rẹt khi nghe
- **ID:** lib-a20
- **Chẩn đoán ngắn:** Lưới loa bám bụi/ráy tai, xung đột Bluetooth, hoặc màng loa ẩm.
- **Từ khóa:** airpods, rè, rột rẹt, âm thanh

**🔍 Chẩn đoán:** Kiểm tra lưới loa có bám bụi/ráy tai không, xác nhận rè liên tục hay chỉ khi di chuyển xa thiết bị.

**🛠️ Hướng dẫn xử lý:**
1. Hỏi khách rè liên tục hay chỉ khi đi xa iPhone (nếu chỉ khi đi xa — là do tín hiệu Bluetooth yếu, không phải lỗi phần cứng).
2. Quan sát lưới loa từng bên tai có bám bụi/ráy tai bằng đèn pin.
3. Dùng cọ khô (không dùng vật nhọn) vệ sinh nhẹ nhàng lưới loa.
4. Trên iPhone: Cài đặt > Bluetooth > (i) cạnh AirPods > "Quên thiết bị này", sau đó ghép đôi lại từ đầu (đặt trong hộp, mở nắp, giữ nút Thiết lập).

**🚫 Tuyệt đối không được làm:** Không dùng vật nhọn/kim loại chọc vào lưới loa; nếu tai nghe vừa qua khu vực ẩm/mưa, không sạc ngay mà để khô tự nhiên trước.

**💬 Kịch bản tư vấn:** "Em đã vệ sinh và kết nối lại AirPods cho mình rồi ạ, nếu vừa qua khu vực ẩm thì để khô tự nhiên thêm nhé."

**📦 Lưu ý TTBH:** Vệ sinh và kết nối lại vẫn rè, khả năng màng loa ẩm/hỏng: đề xuất khách nhận bảo hành; thiết bị sẽ được gửi về Trung tâm bảo hành (TTBH) để kiểm tra và có phương án xử lý.

---

### iPhone/iPad bị treo ở màn hình táo (kèm thanh tiến trình) khi đang cập nhật phần mềm
- **ID:** lib-a21
- **Chẩn đoán ngắn:** Quá trình cài đặt bản cập nhật iOS/iPadOS bị gián đoạn hoặc kéo dài bất thường.
- **Từ khóa:** treo táo, treo logo, cập nhật, thanh tiến trình, đứng máy khi update

**🔍 Chẩn đoán:** Xác nhận máy đang cập nhật phần mềm (không phải khôi phục dữ liệu), quan sát thanh tiến trình dưới logo Apple có nhích lên trong ít nhất 1 giờ không.

**🛠️ Hướng dẫn xử lý:**
1. Xác nhận với khách máy đang cập nhật phần mềm (không phải đang restore từ backup).
2. Theo dõi thanh tiến trình dưới logo Apple trong tối thiểu 1 giờ, xem có nhích lên không.
3. Nếu không nhích sau 1 giờ: kết nối máy với máy tính bằng cáp (Mac dùng Finder trên macOS Catalina trở lên, Windows dùng Apple Devices hoặc iTunes).
4. Đưa máy vào Recovery Mode theo đúng dòng máy (từ iPhone 8: nhấn nhanh Volume Up → nhấn nhanh Volume Down → giữ Side đến khi hiện màn hình kết nối máy tính).
5. Trên máy tính, khi được hỏi chọn "Update" trước (giữ dữ liệu); chỉ chọn "Restore" (xóa toàn bộ máy) nếu Update không thành công.

**🚫 Tuyệt đối không được làm:** Không tự ý chọn "Restore" (xóa máy) ngay từ đầu khi chưa thử "Update" trước và chưa xác nhận với khách về khả năng mất dữ liệu.

**💬 Kịch bản tư vấn:** "Máy mình đang treo giữa chừng lúc cập nhật ạ, em kết nối với máy tính để cài lại bản cập nhật mà không mất dữ liệu, mình yên tâm chờ em vài phút nhé."

**📦 Lưu ý TTBH:** Nếu bắt buộc phải Restore (xóa máy) mới hết treo, cần thông báo rõ và xác nhận với khách trước khi thao tác vì sẽ mất dữ liệu chưa sao lưu; nếu Update/Restore qua máy tính vẫn không cứu được máy: đề xuất khách nhận bảo hành, thiết bị sẽ được gửi về Trung tâm bảo hành (TTBH) để kiểm tra phần cứng.

---

### AirPods Pro mất/giảm tính năng khử tiếng ồn (Active Noise Cancellation)
- **ID:** lib-a22
- **Chẩn đoán ngắn:** Sai lệch cài đặt, đầu tai không kín (fit) hoặc bám bẩn khiến khử ồn hoạt động không hiệu quả.
- **Từ khóa:** airpods, khử ồn, chống ồn, anc, noise cancellation

**🔍 Chẩn đoán:** Kiểm tra AirPods và iPhone đã cập nhật phần mềm mới nhất chưa, xác nhận tính năng "Khử tiếng ồn chủ động" đang bật và Adaptive Audio đang tắt trong Cài đặt.

**🛠️ Hướng dẫn xử lý:**
1. Kiểm tra iPhone và AirPods đã cập nhật phiên bản mới nhất chưa (Cài đặt > Cài đặt chung > Giới thiệu, chọn AirPods để xem phiên bản firmware).
2. Vào Cài đặt > Bluetooth > (i) cạnh AirPods, xác nhận chế độ đang chọn là "Khử tiếng ồn" (không phải Trong suốt hoặc Tắt), tắt Adaptive Audio nếu đang bật.
3. Chạy bài kiểm tra độ khít tai nghe: Cài đặt > Bluetooth > (i) cạnh AirPods > "Kiểm tra vừa vặn của đầu tai" (AirPods Pro 1/2) để xác nhận đúng size.
4. Vệ sinh lưới loa và cảm biến áp suất bằng cọ khô.
5. Nếu vẫn chưa cải thiện: đặt cả 2 tai vào hộp, giữ nút Thiết lập mặt sau hộp 15 giây đến khi đèn nhấp nháy vàng cam rồi trắng để Reset AirPods, sau đó ghép đôi lại.

**🚫 Tuyệt đối không được làm:** Không tự ý đổi size đầu tai khi khách chưa xác nhận cảm thấy thoải mái; không dùng vật cứng đâm vào lưới loa/cảm biến khi vệ sinh.

**💬 Kịch bản tư vấn:** "Em kiểm tra thấy đầu tai chưa khít/cần vệ sinh nên khử ồn chưa tối ưu ạ, em đổi size đầu tai và vệ sinh lại cho mình, mình đeo thử lại xem đã êm hơn chưa nhé."

**📦 Lưu ý TTBH:** Đã đổi đầu tai đúng size, vệ sinh và reset vẫn không cải thiện khử ồn: đề xuất khách nhận bảo hành; thiết bị sẽ được gửi về Trung tâm bảo hành (TTBH) để kiểm tra micro/cảm biến áp suất trên tai nghe.

---
