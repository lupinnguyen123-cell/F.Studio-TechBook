# Apple — Danh mục lỗi thường gặp

> File này lưu dữ liệu lỗi cho dòng sản phẩm: iPhone, iPad, Mac, Watch, AirPods
> Xem hướng dẫn định dạng ở README.md cùng thư mục.

---

### Quên mật khẩu Macbook
- **ID:** lib-a1
- **Thiết bị:** Mac
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
- **Thiết bị:** iPhone
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
- **Thiết bị:** iPhone
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
- **Thiết bị:** iPhone
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
- **Thiết bị:** iPhone
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
- **Thiết bị:** iPhone
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
- **Thiết bị:** iPhone
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
- **Thiết bị:** Mac
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
- **Thiết bị:** Mac
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
- **Thiết bị:** iPad
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
- **Thiết bị:** iPhone
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
- **Thiết bị:** iPhone
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
- **Thiết bị:** iPhone
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
- **Thiết bị:** iPhone
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
- **Thiết bị:** Apple Watch
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
- **Thiết bị:** Apple Watch
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
- **Thiết bị:** Apple Watch
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
- **Thiết bị:** AirPods
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
- **Thiết bị:** AirPods
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
- **Thiết bị:** AirPods
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
- **Thiết bị:** iPad
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
- **Thiết bị:** AirPods
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

### iPhone/iPad báo "Không có SIM" hoặc "SIM không hợp lệ"
- **ID:** lib-a23
- **Thiết bị:** iPhone
- **Chẩn đoán ngắn:** Máy không nhận diện được SIM vật lý hoặc eSIM, có thể do khay SIM lỏng, SIM lỗi, hoặc thiết bị bị khóa mạng.
- **Từ khóa:** sim, không có sim, invalid sim, mất sóng

**🔍 Chẩn đoán:** Kiểm tra Cài đặt > Cài đặt chung > Giới thiệu xem có dòng "Không giới hạn SIM" hay không (máy bị khóa mạng sẽ không có). Hỏi khách gần đây có làm rơi máy, thay SIM, hay đổi gói cước không.

**🛠️ Hướng dẫn xử lý:**
1. Khởi động lại máy.
2. Nếu dùng SIM vật lý: tháo khay SIM ra, kiểm tra SIM không cong vênh/bẩn, lắp lại cho khay đóng khít hoàn toàn.
3. Vào Cài đặt > Cài đặt chung > Giới thiệu, kiểm tra và cài bản Cập nhật SIM (Carrier Update) nếu có.
4. Nếu dùng eSIM: hướng dẫn khách liên hệ nhà mạng để được hỗ trợ (do eSIM cần chuyển từ phía nhà mạng).
5. Thử lắp SIM đó sang máy khác (hoặc SIM khác vào máy này) để xác định lỗi do SIM hay do máy.

**🚫 Tuyệt đối không được làm:** Không tự ý bẻ/cắt SIM hoặc dùng vật nhọn không đúng chuẩn để lấy khay SIM (dễ trầy khay, kẹt khay); không khẳng định máy lỗi phần cứng khi chưa thử SIM khác.

**💬 Kịch bản tư vấn:** "Dạ mình kiểm tra thử SIM và khay SIM trước, đa phần trường hợp này do SIM tiếp xúc không tốt, xử lý được ngay ạ."

**📦 Lưu ý TTBH:** Nếu đã thử SIM khác vẫn báo lỗi (loại trừ do SIM/nhà mạng) và máy có "Không giới hạn SIM" nhưng vẫn không nhận bất kỳ SIM nào — khả năng lỗi khay SIM hoặc IC sóng, cần gửi TTBH kiểm tra phần cứng.

---

### iPhone báo SOS hoặc "Không có dịch vụ" liên tục
- **ID:** lib-a24
- **Thiết bị:** iPhone
- **Chẩn đoán ngắn:** Máy không bắt được sóng nhà mạng ổn định, hiển thị SOS/Không có dịch vụ dù ở khu vực có sóng.
- **Từ khóa:** sos, không có dịch vụ, mất sóng, no service

**🔍 Chẩn đoán:** Xác định lỗi xảy ra ở MỌI vị trí hay chỉ một khu vực cụ thể (khu vực cụ thể thường do sóng nhà mạng yếu, không phải lỗi máy). Hỏi khách sự cố xảy ra sau khi cập nhật iOS, đổi SIM, hay tự nhiên.

**🛠️ Hướng dẫn xử lý:**
1. Bật Chế độ máy bay 15 giây rồi tắt lại để máy dò sóng lại từ đầu.
2. Khởi động lại máy.
3. Kiểm tra Cài đặt > Di động, cài Cập nhật SIM (Carrier Update) nếu có bản mới.
4. Kiểm tra máy đã cập nhật iOS bản mới nhất chưa.
5. Nếu máy 2 SIM: kiểm tra cả 2 đường truyền di động đã được bật đúng trong Cài đặt > Di động.
6. Nếu khách đang ở nước ngoài: kiểm tra đã bật Chuyển vùng dữ liệu (Data Roaming) chưa.

**🚫 Tuyệt đối không được làm:** Không kết luận lỗi phần cứng (IC sóng, ăng-ten) ngay khi chưa loại trừ nguyên nhân sóng khu vực/nhà mạng; không yêu cầu khách đổi SIM khi chưa xác minh.

**💬 Kịch bản tư vấn:** "Dạ mình thử vài bước phần mềm trước để loại trừ, nếu vẫn còn báo SOS ở khu vực sóng tốt thì mới cần kiểm tra sâu hơn ạ."

**📦 Lưu ý TTBH:** Đã thử tất cả bước trên, đã xác nhận khu vực có sóng tốt (SIM khác/máy khác dùng bình thường) mà máy vẫn báo SOS/Không có dịch vụ — gửi TTBH kiểm tra IC sóng/ăng-ten.

---

### iPhone không lên nguồn, màn hình đen dù đã sạc
- **ID:** lib-a25
- **Thiết bị:** iPhone
- **Chẩn đoán ngắn:** Máy không phản hồi khi bấm nguồn, màn hình tối đen, có thể do treo phần mềm hoặc hết pin sâu.
- **Từ khóa:** không lên nguồn, màn hình đen, sạc không lên, chết máy

**🔍 Chẩn đoán:** Phân biệt máy "không lên nguồn do hết pin sâu" (thường phục hồi sau khi sạc/force restart) với máy "không lên nguồn dù đã sạc lâu" (nghi ngờ phần cứng). Hỏi khách máy có bị rơi/vào nước trước đó không.

**🛠️ Hướng dẫn xử lý:**
1. Cắm sạc, chờ ít nhất 1 giờ trước khi thử tiếp (pin cạn sâu cần thời gian nạp lại trước khi máy phản hồi).
2. Ép khởi động lại (Force Restart): bấm nhanh Volume Up → bấm nhanh Volume Down → giữ nút nguồn đến khi thấy logo Apple (máy Face ID); với máy có nút Home thì giữ đồng thời nút Home và nút nguồn khoảng 10 giây.
3. Thử cáp sạc và củ sạc khác để loại trừ do phụ kiện.
4. Quan sát khi cắm sạc có hiện biểu tượng pin yếu không — nếu không hiện gì cả sau nhiều lần thử, nghi ngờ phần cứng.

**🚫 Tuyệt đối không được làm:** Không tháo máy kiểm tra pin/main khi chưa loại trừ hết các bước phần mềm; không khẳng định máy "chết nguồn" ngay khi khách vừa mang tới.

**💬 Kịch bản tư vấn:** "Dạ mình thử sạc và ép khởi động lại trước, nhiều trường hợp máy hết pin sâu chỉ cần thời gian nạp lại là lên bình thường ạ."

**📦 Lưu ý TTBH:** Đã sạc đủ 1 giờ, đã thử force restart và đổi cáp/củ sạc khác mà máy vẫn hoàn toàn không phản hồi (không rung, không nóng lên khi sạc) — gửi TTBH kiểm tra nguồn/main máy.

---

### iPhone/iPad báo lỗi khi cập nhật hoặc khôi phục qua máy tính (mã lỗi 4013, 9, 4014, 53...)
- **ID:** lib-a26
- **Thiết bị:** iPhone
- **Chẩn đoán ngắn:** Quá trình update/restore qua Finder hoặc iTunes trên máy tính bị gián đoạn, hiện mã lỗi cụ thể.
- **Từ khóa:** lỗi cập nhật, lỗi khôi phục, itunes, 4013, lỗi 53, restore

**🔍 Chẩn đoán:** Ghi lại chính xác mã lỗi hiển thị (vd: 4013, 9, 4005, 4014, 53, 1015) vì mỗi mã có nguyên nhân khác nhau — phần lớn liên quan kết nối cáp/cổng USB hoặc phần mềm máy tính, không phải lỗi phần cứng iPhone/iPad.

**🛠️ Hướng dẫn xử lý:**
1. Cập nhật máy tính (Mac/Windows) và ứng dụng Apple Devices/iTunes lên bản mới nhất.
2. Cắm iPhone/iPad trực tiếp vào cổng USB trên máy tính, KHÔNG qua hub/bàn phím trung gian.
3. Thử cáp Apple chính hãng khác và cổng USB khác.
4. Khởi động lại cả máy tính và iPhone/iPad, thử lại quá trình cập nhật/khôi phục.
5. Kiểm tra phần mềm diệt virus/tường lửa trên máy tính có đang chặn kết nối không, tạm tắt thử nếu nghi ngờ.
6. Nếu vẫn lỗi, thử trên một máy tính khác/mạng khác để loại trừ do môi trường máy tính của khách.

**🚫 Tuyệt đối không được làm:** Không vội kết luận lỗi phần cứng iPhone/iPad khi chưa thử đổi cáp/cổng/máy tính khác; không thực hiện khôi phục (restore) khi khách chưa xác nhận đã sao lưu dữ liệu.

**💬 Kịch bản tư vấn:** "Dạ lỗi này thường do kết nối cáp hoặc phần mềm bên máy tính, chưa chắc do máy mình, em thử đổi cáp/cổng kết nối trước ạ."

**📦 Lưu ý TTBH:** Đã đổi cáp, cổng, và thử trên máy tính khác vẫn báo cùng mã lỗi khi khôi phục (đặc biệt lỗi 53 thường liên quan Touch ID/Face ID hoặc bo mạch) — gửi TTBH kiểm tra phần cứng.

---

### Ứng dụng trên iPhone/iPad bị đứng, tự thoát hoặc không mở được
- **ID:** lib-a27
- **Thiết bị:** iPhone
- **Chẩn đoán ngắn:** Một hoặc nhiều ứng dụng gặp lỗi khi mở, treo, hoặc tự đóng bất thường.
- **Từ khóa:** treo app, ứng dụng lỗi, app crash, không mở được app

**🔍 Chẩn đoán:** Xác định lỗi xảy ra ở MỘT ứng dụng cụ thể (thường do bản thân app lỗi/cần cập nhật) hay TẤT CẢ ứng dụng (nghi ngờ do hệ điều hành/bộ nhớ đầy).

**🛠️ Hướng dẫn xử lý:**
1. Buộc đóng ứng dụng (vuốt lên từ dưới màn hình, giữ giữa màn hình rồi vuốt app lên trên) rồi mở lại.
2. Khởi động lại máy.
3. Kiểm tra và cập nhật ứng dụng trong App Store; nếu không có cập nhật app, kiểm tra cập nhật iOS/iPadOS.
4. Kiểm tra dung lượng máy còn trống (Cài đặt > Cài đặt chung > Dung lượng iPhone) — máy quá đầy dễ gây treo app.
5. Nếu vẫn lỗi: xóa ứng dụng và cài lại từ App Store (lưu ý báo khách có thể mất dữ liệu lưu cục bộ trong app).

**🚫 Tuyệt đối không được làm:** Không xóa app hoặc reset máy khi khách chưa đồng ý (có thể mất dữ liệu chưa đồng bộ); không kết luận lỗi phần cứng khi vấn đề chỉ xảy ra ở phần mềm/ứng dụng.

**💬 Kịch bản tư vấn:** "Dạ mình thử cập nhật và cài lại ứng dụng trước, đa phần lỗi treo app là do bản thân ứng dụng hoặc bộ nhớ máy đầy ạ."

**📦 Lưu ý TTBH:** Trường hợp này thuộc lỗi phần mềm, thường không cần gửi TTBH — chỉ gửi TTBH nếu nghi ngờ chuyển sang lỗi phần cứng khác đi kèm (vd: máy nóng bất thường, tự khởi động lại liên tục).

---

### Mac khởi động lên màn hình trống/xám hoặc bị kernel panic
- **ID:** lib-a28
- **Thiết bị:** Mac
- **Chẩn đoán ngắn:** Máy có lên nguồn (quạt/đèn hoạt động) nhưng màn hình không hiển thị gì hoặc hiện thông báo khởi động lại do sự cố.
- **Từ khóa:** màn hình trống, kernel panic, mac không khởi động, màn hình xám

**🔍 Chẩn đoán:** Phân biệt với lỗi "không lên nguồn" (đèn/quạt không chạy) — trường hợp này máy CÓ hoạt động nhưng màn hình trống hoặc tự khởi động lại kèm thông báo lỗi. Hỏi khách sự cố xảy ra sau khi cài phần mềm/cập nhật macOS hay tự nhiên.

**🛠️ Hướng dẫn xử lý:**
1. Giữ nút nguồn khoảng 10 giây để tắt hẳn máy, sau đó khởi động lại bình thường.
2. Nếu vẫn màn hình trống, thử khởi động vào chế độ Recovery (giữ nút nguồn đến khi thấy tùy chọn khởi động với máy Apple Silicon, hoặc giữ Cmd+R với máy Intel).
3. Nếu vào được Recovery: mở Disk Utility, chạy First Aid trên ổ đĩa khởi động để sửa lỗi ổ đĩa, sau đó khởi động lại bình thường.
4. Kiểm tra có màn hình rời/thiết bị ngoại vi nào gây xung đột không, thử rút hết ra và khởi động lại.
5. Nếu vẫn lỗi và không vào được Recovery: cần công cụ chuyên dụng để khôi phục firmware (thuộc phạm vi TTBH).

**🚫 Tuyệt đối không được làm:** Không tự ý chạy "Xóa và cài lại" (Erase) trong Disk Utility khi chưa xác nhận khách đã sao lưu dữ liệu; không tháo máy khi chưa loại trừ hết các bước phần mềm.

**💬 Kịch bản tư vấn:** "Dạ máy có tín hiệu hoạt động nên khả năng cao là lỗi phần mềm khởi động, mình thử vào chế độ khôi phục để sửa trước ạ."

**📦 Lưu ý TTBH:** Không vào được chế độ Recovery, hoặc đã chạy First Aid/cài lại macOS mà máy vẫn khởi động lên màn hình trống — gửi TTBH kiểm tra phần cứng (ổ đĩa/bo mạch).

---

### Bàn phím hoặc trackpad MacBook không phản hồi, bị đơ hoặc kẹt phím
- **ID:** lib-a29
- **Thiết bị:** Mac
- **Chẩn đoán ngắn:** Bàn phím/trackpad tích hợp gõ không ăn, phản hồi chậm, hoặc một số phím bị kẹt/không nhận.
- **Từ khóa:** bàn phím lỗi, trackpad không phản hồi, kẹt phím, macbook keyboard

**🔍 Chẩn đoán:** Xác định lỗi ở TOÀN BỘ bàn phím/trackpad (nghi phần mềm hoặc kết nối) hay CHỈ MỘT SỐ PHÍM cụ thể (nghi vật lý — dị vật, phím kẹt). Hỏi khách gần đây có làm đổ nước/thức ăn lên máy không.

**🛠️ Hướng dẫn xử lý:**
1. Khởi động lại máy.
2. Kiểm tra Cài đặt hệ thống > Bàn phím / Trackpad xem có tùy chỉnh nào đang gây hiểu nhầm là "lỗi" không.
3. Nếu dùng bàn phím/trackpad rời (Magic Keyboard/Trackpad): kiểm tra pin, tắt/bật lại Bluetooth, thử kết nối lại bằng cáp để sạc và ghép đôi lại.
4. Với bàn phím tích hợp: dùng khí nén thổi nhẹ quanh các phím bị kẹt để loại bỏ bụi/dị vật (không xịt trực tiếp chất lỏng).
5. Khởi động vào Safe Mode (giữ Shift khi khởi động) để kiểm tra có phải do phần mềm/tiện ích bên thứ ba gây xung đột không.

**🚫 Tuyệt đối không được làm:** Không tự ý tháo phím hoặc dùng vật nhọn cạy phím khi chưa được đào tạo (dễ gãy chân phím, hỏng bàn phím); không dùng chất lỏng vệ sinh trực tiếp lên bàn phím.

**💬 Kịch bản tư vấn:** "Dạ mình kiểm tra thử có dị vật kẹt ở phím không và thử vài bước phần mềm trước, nếu vẫn còn lỗi thì mới cần kiểm tra sâu hơn ạ."

**📦 Lưu ý TTBH:** Có tiền sử vào nước/chất lỏng, hoặc nhiều phím kẹt vật lý không xử lý được bằng khí nén, hoặc lỗi vẫn còn sau khi loại trừ nguyên nhân phần mềm — gửi TTBH kiểm tra/thay bàn phím.

---

### AirPods không kết nối được hoặc không hiện hộp thoại ghép đôi khi mở nắp gần iPhone
- **ID:** lib-a30
- **Thiết bị:** AirPods
- **Chẩn đoán ngắn:** AirPods không xuất hiện popup ghép đôi hoặc không kết nối được với iPhone/iPad qua Bluetooth.
- **Từ khóa:** airpods không kết nối, không ghép đôi được, airpods pairing, không hiện popup

**🔍 Chẩn đoán:** Xác định đây là lần ghép đôi ĐẦU TIÊN hay AirPods đã từng kết nối được trước đó rồi mất kết nối. Kiểm tra đèn báo trên hộp sạc khi mở nắp (không sáng = có thể hết pin).

**🛠️ Hướng dẫn xử lý:**
1. Cập nhật iOS/iPadOS trên thiết bị lên bản mới nhất.
2. Đặt cả 2 tai nghe vào hộp sạc, sạc đầy để đảm bảo đủ pin.
3. Bật Bluetooth trong Cài đặt trên iPhone/iPad.
4. Mở Trung tâm Điều khiển, kiểm tra AirPods có xuất hiện trong danh sách thiết bị âm thanh không.
5. Đóng nắp hộp, chờ 15 giây, mở lại nắp gần iPhone để kích hoạt lại popup ghép đôi.
6. Nếu vẫn không hiện popup: nhấn giữ nút thiết lập (Setup) ở mặt sau hộp sạc đến khi đèn báo nhấp nháy trắng, sau đó đưa hộp lại gần iPhone.
7. Nếu vẫn lỗi: vào Cài đặt > Bluetooth, chọn "Quên thiết bị" (nếu đã từng ghép) rồi lặp lại bước 6.

**🚫 Tuyệt đối không được làm:** Không khẳng định AirPods lỗi phần cứng khi chưa thử sạc đầy và reset ghép đôi lại từ đầu; không tháo/mở hộp sạc để can thiệp phần cứng.

**💬 Kịch bản tư vấn:** "Dạ mình thử sạc đầy và ghép đôi lại từ đầu trước, phần lớn trường hợp không hiện popup là do pin yếu hoặc cần reset kết nối ạ."

**📦 Lưu ý TTBH:** Đã sạc đầy, đã thử reset ghép đôi (giữ nút Setup) trên nhiều thiết bị Apple khác nhau mà vẫn không nhận/không hiện popup — gửi TTBH kiểm tra AirPods hoặc hộp sạc.

---

### Apple Pencil không ghép đôi hoặc không sạc được với iPad
- **ID:** lib-a31
- **Thiết bị:** iPad
- **Chẩn đoán ngắn:** Apple Pencil không nhận kết nối Bluetooth với iPad hoặc không nạp pin khi gắn/kết nối.
- **Từ khóa:** apple pencil không ghép đôi, pencil không sạc, bút cảm ứng ipad

**🔍 Chẩn đoán:** Xác định đời Apple Pencil (thế hệ 1 gắn cổng Lightning, thế hệ 2 hoặc USB-C gắn nam châm cạnh iPad) và kiểm tra có TƯƠNG THÍCH với model iPad của khách không (một nguyên nhân phổ biến là dùng sai đời Pencil cho iPad).

**🛠️ Hướng dẫn xử lý:**
1. Xác nhận Apple Pencil đúng đời tương thích với iPad đang dùng.
2. Gắn/kết nối Pencil đúng cách vào iPad và giữ nguyên trong lúc khởi động lại iPad.
3. Kiểm tra Bluetooth trên iPad đang bật (Cài đặt > Bluetooth).
4. Nếu đã từng ghép đôi trước đó: vào Cài đặt > Bluetooth, tìm Apple Pencil trong "Thiết bị của tôi", chọn biểu tượng thông tin rồi "Quên thiết bị này", sau đó gắn lại Pencil và chờ nút Ghép đôi xuất hiện.
5. Nếu chưa hiện nút Ghép đôi: tháo Pencil ra, chờ khoảng 1 phút để Pencil được sạc, rồi gắn lại và thử tiếp.
6. Với Pencil thế hệ 2/Pro: gỡ ốp lưng/bao da iPad ra trước khi thử kết nối (ốp dày có thể cản từ tính).

**🚫 Tuyệt đối không được làm:** Không kết luận Pencil hỏng khi chưa xác nhận đúng đời tương thích với iPad; không cạy/tháo đầu ngòi Pencil khi không được hướng dẫn.

**💬 Kịch bản tư vấn:** "Dạ mình kiểm tra lại đời Pencil có đúng với iPad không và thử ghép đôi lại trước ạ, khá nhiều trường hợp là do sai đời Pencil hoặc cần sạc lại."

**📦 Lưu ý TTBH:** Đã xác nhận đúng đời tương thích, đã thử quên thiết bị và ghép đôi lại, đã sạc đủ mà Pencil vẫn không được iPad nhận diện — gửi TTBH kiểm tra Pencil.

---

### Apple Watch đo nhịp tim không chính xác hoặc không hiển thị số đo
- **ID:** lib-a32
- **Thiết bị:** Apple Watch
- **Chẩn đoán ngắn:** Cảm biến nhịp tim trên Apple Watch không cho kết quả đo hoặc kết quả không ổn định/không hợp lý.
- **Từ khóa:** nhịp tim không đo được, cảm biến apple watch, heart rate lỗi

**🔍 Chẩn đoán:** Hỏi khách vấn đề xảy ra lúc nào — trong lúc tập luyện (vận động mạnh, không đều như tennis/boxing dễ gây sai số) hay cả lúc bình thường/nghỉ ngơi. Kiểm tra khách có đeo đúng cách và có hình xăm ở vùng cổ tay đeo đồng hồ không (mực xăm có thể cản cảm biến ánh sáng).

**🛠️ Hướng dẫn xử lý:**
1. Kiểm tra đồng hồ được đeo ĐÚNG CÁCH: ôm sát phía trên cổ tay, không quá lỏng, cảm biến tiếp xúc da tốt (đặc biệt khi tập luyện cần đeo chặt hơn bình thường một chút).
2. Kiểm tra Cài đặt quyền riêng tư: mở app Watch trên iPhone > Quyền riêng tư & Bảo mật, xác nhận Nhịp tim đang được BẬT.
3. Vệ sinh mặt sau đồng hồ và cổ tay (mồ hôi, kem chống nắng, bụi bẩn có thể cản cảm biến).
4. Khởi động lại cả Apple Watch và iPhone đi kèm.
5. Kiểm tra cập nhật watchOS mới nhất.
6. Nếu khách vận động trong môi trường lạnh hoặc máu lưu thông kém ở cổ tay: gợi ý khởi động làm nóng cơ thể trước khi đo, hoặc dùng thêm đai đo nhịp tim Bluetooth ngoài nếu cần độ chính xác cao khi tập các môn vận động không đều.

**🚫 Tuyệt đối không được làm:** Không đưa ra kết luận/tư vấn y tế về tình trạng sức khỏe của khách dựa trên số đo; không khẳng định lỗi phần cứng khi khách đeo sai cách hoặc chưa vệ sinh cảm biến.

**💬 Kịch bản tư vấn:** "Dạ mình kiểm tra lại cách đeo và vệ sinh cảm biến trước ạ, nhiều trường hợp đo không chính xác là do đeo lỏng hoặc cảm biến bị cản chứ không phải lỗi máy."

**📦 Lưu ý TTBH:** Đã đeo đúng cách, đã vệ sinh cảm biến, đã cập nhật watchOS mà nhịp tim vẫn không đo được hoặc sai lệch rõ rệt ngay cả lúc nghỉ ngơi bình thường — gửi TTBH kiểm tra cảm biến.

---

### MacBook pin hao nhanh dù đã sạc đầy
- **ID:** lib-a33
- **Thiết bị:** Mac
- **Chẩn đoán ngắn:** Pin bị chai (giảm dung lượng tối đa) hoặc có ứng dụng/tiến trình chạy ngầm tiêu hao nhiều năng lượng.
- **Từ khóa:** pin macbook hao nhanh, chai pin, battery health, tình trạng pin

**🔍 Chẩn đoán:** Kiểm tra tình trạng pin tại Cài đặt hệ thống > Pin > Tình trạng pin (xem % Dung lượng tối đa và Số chu kỳ sạc). Mở Activity Monitor (Màn hình hoạt động) > tab Năng lượng để xem ứng dụng nào đang tiêu hao pin bất thường.

**🛠️ Hướng dẫn xử lý:**
1. Kiểm tra % Dung lượng tối đa của pin — dưới 80% là dấu hiệu pin đã chai theo thời gian sử dụng (không phải lỗi).
2. Mở Activity Monitor > tab Năng lượng, sắp xếp theo "Tác động năng lượng" để tìm ứng dụng ngốn pin bất thường.
3. Kiểm tra các tab trình duyệt mở nhiều, hoặc đồng bộ đám mây (iCloud, Dropbox...) chạy ngầm liên tục.
4. Giảm độ sáng màn hình, bật "Tự động điều chỉnh độ sáng" nếu đang tắt.
5. Cập nhật macOS lên bản mới nhất (Apple thường tối ưu quản lý năng lượng qua các bản cập nhật).

**🚫 Tuyệt đối không được làm:** Không khẳng định "pin hỏng cần thay" chỉ dựa vào cảm nhận của khách khi chưa kiểm tra % Dung lượng tối đa và Số chu kỳ sạc thực tế; không tháo pin khi chưa loại trừ nguyên nhân phần mềm.

**💬 Kịch bản tư vấn:** "Dạ mình kiểm tra tình trạng pin thực tế xem còn bao nhiêu % dung lượng gốc, rồi xem thử có ứng dụng nào đang ngốn pin bất thường không nhé."

**📦 Lưu ý TTBH:** % Dung lượng tối đa dưới 80% hoặc số chu kỳ sạc cao và khách còn trong hạn bảo hành/AppleCare — đề xuất khách nhận bảo hành kiểm tra thay pin; nếu hết bảo hành, tư vấn chi phí thay pin dịch vụ ngoài bảo hành.

---

### Màn hình MacBook có vệt sáng bất thường, mất đèn nền một phần hoặc ố màu
- **ID:** lib-a34
- **Thiết bị:** Mac
- **Chẩn đoán ngắn:** Dấu hiệu điển hình của lỗi cáp màn hình/đèn nền (thường gặp ở một số dòng MacBook Pro Touch Bar đời cũ — cộng đồng gọi là "Stage Light"/"Flexgate"), không phải do va đập hay vết bẩn thông thường.
- **Từ khóa:** màn hình macbook ố màu, mất đèn nền, vệt sáng màn hình, stage light, flexgate

**🔍 Chẩn đoán:** Quan sát vết ố/vệt sáng có CỐ ĐỊNH ở một vị trí (thường viền dưới màn hình) và rõ hơn khi mở màn hình quá một góc nhất định không — đây là đặc điểm điển hình của cáp màn hình bị mỏi do gập mở nhiều lần. Hỏi khách máy có từng rơi/va đập ở khu vực màn hình không.

**🛠️ Hướng dẫn xử lý:**
1. Lau thử màn hình bằng khăn khô mềm chuyên dụng để loại trừ khả năng chỉ là bụi/vết bẩn bên ngoài (không xịt dung dịch trực tiếp lên màn hình).
2. Mở màn hình ở nhiều góc độ khác nhau, quan sát vệt sáng có thay đổi độ rõ theo góc mở không — nếu có, đây là dấu hiệu phần cứng, không xử lý được bằng phần mềm.
3. Tra số serial trên trang hỗ trợ Apple hoặc hỏi TTBH xem máy có thuộc diện chương trình sửa chữa mở rộng cho lỗi màn hình không (Apple từng có chương trình này cho một số model/năm sản xuất cụ thể).

**🚫 Tuyệt đối không được làm:** Không cố lau/ấn vào vùng có vệt sáng để "làm hết vết ố" — có thể làm hỏng thêm màn hình; không kết luận đây là lỗi do khách làm rơi/va đập khi chưa kiểm tra kỹ đặc điểm vệt sáng theo góc mở.

**💬 Kịch bản tư vấn:** "Dạ đây là dấu hiệu liên quan đến cáp màn hình bên trong, không phải vết bẩn nên mình không tự lau được ạ, em kiểm tra xem máy mình có thuộc diện được hỗ trợ đặc biệt từ Apple không nhé."

**📦 Lưu ý TTBH:** Vệt sáng/mất đèn nền thay đổi theo góc mở màn hình là lỗi phần cứng — luôn cần gửi TTBH kiểm tra, không xử lý tại chỗ được; kiểm tra thêm serial xem có nằm trong chương trình sửa chữa mở rộng miễn phí không để tư vấn đúng chi phí cho khách.

---

### Bản lề MacBook lỏng, màn hình rung lắc hoặc phát ra tiếng kêu cọt kẹt khi mở/đóng
- **ID:** lib-a35
- **Thiết bị:** Mac
- **Chẩn đoán ngắn:** Bản lề bị lỏng ốc hoặc mòn theo thời gian sử dụng, khiến màn hình không giữ cố định ở góc mở mong muốn.
- **Từ khóa:** bản lề macbook lỏng, màn hình rung lắc, kêu cọt kẹt, hinge

**🔍 Chẩn đoán:** Xác định màn hình chỉ LỎNG/RUNG NHẸ khi di chuyển máy hay đã ĐỔ SẬP/không tự đứng được ở bất kỳ góc nào (mức độ nặng hơn). Hỏi khách máy đã dùng bao lâu, tần suất mở/đóng nắp.

**🛠️ Hướng dẫn xử lý:**
1. Quan sát và mô tả mức độ lỏng: nhẹ (rung khi gõ phím/di chuyển) hay nặng (không giữ được góc mở, tự đóng/mở).
2. Kiểm tra có tiếng kêu lạ (cọt kẹt, lạch cạch) khi mở/đóng không — dấu hiệu bản lề bị nứt/mòn cần thay thế.
3. Hỏi khách có tự ý tháo hoặc từng mang đi sửa bên ngoài không (ảnh hưởng diện bảo hành).
4. Ghi nhận tình trạng kèm hình ảnh/video (nếu có) để chuyển bộ phận kỹ thuật đánh giá — đây là lỗi cơ khí không xử lý được bằng phần mềm hay điều chỉnh bên ngoài.

**🚫 Tuyệt đối không được làm:** Không tự ý vặn/siết ốc bản lề hoặc tháo máy khi không thuộc phạm vi được đào tạo (dễ làm hỏng thêm cáp màn hình đi qua bản lề); không cố mở màn hình quá góc giới hạn khi đã phát hiện lỏng.

**💬 Kịch bản tư vấn:** "Dạ đây là lỗi cơ khí ở bản lề, em không tự điều chỉnh tại quầy được vì bên trong bản lề có cả dây cáp màn hình đi qua, cần bộ phận kỹ thuật kiểm tra kỹ hơn ạ."

**📦 Lưu ý TTBH:** Bản lề lỏng/kêu là lỗi cơ khí, hầu như luôn cần gửi TTBH để kiểm tra và siết/thay bản lề đúng chuẩn, không tự xử lý tại quầy để tránh ảnh hưởng cáp màn hình bên trong.

---

### MacBook không nhận diện ổ cứng ngoài hoặc thiết bị qua cổng USB-C
- **ID:** lib-a36
- **Thiết bị:** Mac
- **Chẩn đoán ngắn:** macOS không phát hiện thiết bị ngoại vi khi cắm qua cổng USB-C/Thunderbolt, có thể do cáp/hub hoặc cổng.
- **Từ khóa:** macbook không nhận ổ cứng ngoài, usb-c không nhận, cổng usb lỗi

**🔍 Chẩn đoán:** Xác định lỗi xảy ra với MỌI thiết bị cắm vào cổng đó (nghi cổng/macOS) hay CHỈ MỘT thiết bị/ổ cứng cụ thể (nghi cáp hoặc chính thiết bị đó). Hỏi khách có dùng hub/adapter chuyển đổi không.

**🛠️ Hướng dẫn xử lý:**
1. Thử cắm trực tiếp (không qua hub) vào cổng USB-C khác trên máy để loại trừ do cổng hỏng.
2. Thử cáp/adapter khác, và thử chính thiết bị đó trên máy tính khác để xác định lỗi do đâu.
3. Mở Tiện ích Ổ đĩa (Disk Utility), kiểm tra ổ cứng có hiện tên trong danh sách bên trái không — nếu có hiện nhưng không mount được, chọn ổ và bấm "Gắn kết".
4. Kiểm tra Cài đặt hệ thống > Quyền riêng tư & Bảo mật xem có thông báo chặn phụ kiện cần cho phép thủ công không.
5. Nếu dùng hub/adapter: kiểm tra hub có cần nguồn điện riêng không.

**🚫 Tuyệt đối không được làm:** Không kết luận cổng USB-C của máy hỏng khi chưa thử với cáp/thiết bị/hub khác; không format hoặc "Xóa" ổ cứng ngoài của khách khi chưa xác nhận đã sao lưu dữ liệu quan trọng.

**💬 Kịch bản tư vấn:** "Dạ mình thử đổi cáp và cổng khác trước ạ, phần lớn trường hợp không nhận thiết bị ngoài là do cáp/hub chứ không phải do cổng trên máy."

**📦 Lưu ý TTBH:** Đã thử nhiều cáp/thiết bị/cổng khác nhau mà một cổng cụ thể trên máy luôn không nhận bất kỳ thiết bị nào (trong khi cổng khác vẫn bình thường) — gửi TTBH kiểm tra cổng/bo mạch.

---

### Màn hình iPad chạm sai vị trí hoặc tự chạm không do người dùng (ghost touch)
- **ID:** lib-a37
- **Thiết bị:** iPad
- **Chẩn đoán ngắn:** Màn hình cảm ứng ghi nhận chạm không chính xác hoặc tự phát sinh thao tác dù không ai chạm vào.
- **Từ khóa:** ipad chạm sai, ghost touch, cảm ứng lỗi, tự chạm

**🔍 Chẩn đoán:** Hỏi khách hiện tượng xảy ra ở TOÀN BỘ màn hình hay chỉ MỘT VÙNG cụ thể, và có xảy ra ngay cả khi tháo hết ốp lưng/dán màn hình không (ốp/dán kém chất lượng là nguyên nhân phổ biến). Hỏi máy gần đây có bị rơi hoặc dính nước không.

**🛠️ Hướng dẫn xử lý:**
1. Lau sạch màn hình bằng khăn khô mềm, đảm bảo không có bụi/ẩm trên bề mặt hoặc tay cầm máy.
2. Tháo thử ốp lưng và miếng dán màn hình hiện tại (nếu có) — ốp/dán không đúng chuẩn có thể tạo áp lực không đều lên màn hình gây chạm sai.
3. Khởi động lại máy, cập nhật iPadOS lên bản mới nhất.
4. Vào Cài đặt > Trợ năng > Cảm ứng > Điều chỉnh cảm ứng, thử bật "Thời lượng giữ" để lọc bớt chạm ngoài ý muốn trong lúc chờ xác định nguyên nhân gốc.
5. Nếu hiện tượng chỉ ở một vùng cố định dù đã thử hết các bước trên: khả năng cao là lỗi phần cứng ở khu vực cảm ứng (digitizer) đó.

**🚫 Tuyệt đối không được làm:** Không khẳng định lỗi phần cứng ngay khi khách đang dùng ốp/dán màn hình không rõ nguồn gốc mà chưa thử tháo ra kiểm tra; không thực hiện khôi phục cài đặt gốc khi khách chưa xác nhận đã sao lưu dữ liệu.

**💬 Kịch bản tư vấn:** "Dạ mình thử tháo ốp/dán màn hình hiện tại xem có phải nguyên nhân không trước ạ, khá nhiều trường hợp chạm sai là do phụ kiện gắn thêm chứ không phải máy."

**📦 Lưu ý TTBH:** Đã tháo ốp/dán, lau màn hình, cập nhật phần mềm mà hiện tượng chạm sai vẫn xảy ra (đặc biệt nếu cố định ở một vùng màn hình hoặc sau khi máy từng rơi/vào nước) — gửi TTBH kiểm tra cảm ứng/digitizer.

---

### iPad không nhận diện phụ kiện hoặc ổ đĩa ngoài qua cổng USB-C
- **ID:** lib-a38
- **Thiết bị:** iPad
- **Chẩn đoán ngắn:** iPadOS không phát hiện thiết bị lưu trữ/phụ kiện khi cắm qua cổng USB-C, có thể do cáp, định dạng ổ đĩa, hoặc quyền truy cập.
- **Từ khóa:** ipad không nhận usb, ổ cứng ngoài không nhận, cổng usb-c ipad

**🔍 Chẩn đoán:** Xác định thiết bị cắm vào là loại gì (ổ cứng/USB, máy ảnh, hub) và ổ đĩa định dạng theo chuẩn nào (iPadOS đọc tốt exFAT/FAT32, NTFS bị giới hạn). Hỏi khách đã mở ứng dụng Tệp (Files) để tìm thiết bị chưa.

**🛠️ Hướng dẫn xử lý:**
1. Cắm trực tiếp (không qua hub) vào cổng USB-C của iPad, thử cáp/adapter khác.
2. Mở ứng dụng Tệp (Files) > mục "Duyệt" > xem thiết bị có hiện trong danh sách vị trí không (thiết bị ngoài không tự hiện trên màn hình chính như trên Mac).
3. Kiểm tra định dạng ổ đĩa — nếu định dạng NTFS, khuyến nghị khách đổi sang exFAT bằng máy tính trước khi dùng với iPad.
4. Nếu dùng hub nhiều cổng: kiểm tra hub có cần cấp nguồn riêng không.
5. Khởi động lại iPad và thử lại.

**🚫 Tuyệt đối không được làm:** Không kết luận cổng USB-C của iPad hỏng khi chưa thử cáp/thiết bị/hub khác; không định dạng lại ổ đĩa ngoài của khách khi chưa xác nhận đã sao lưu dữ liệu.

**💬 Kịch bản tư vấn:** "Dạ mình kiểm tra định dạng ổ đĩa và thử đổi cáp trước ạ, iPad có một số giới hạn định dạng khác với máy tính nên đôi khi không phải lỗi máy."

**📦 Lưu ý TTBH:** Đã thử nhiều thiết bị/cáp khác nhau và xác nhận đúng định dạng hỗ trợ mà cổng USB-C trên iPad vẫn không nhận bất kỳ thiết bị nào — gửi TTBH kiểm tra cổng kết nối.

---

### Bàn phím rời (Magic Keyboard/Smart Keyboard) không kết nối được với iPad
- **ID:** lib-a39
- **Thiết bị:** iPad
- **Chẩn đoán ngắn:** iPad không nhận diện bàn phím gắn ngoài qua cổng Smart Connector hoặc Bluetooth.
- **Từ khóa:** bàn phím ipad không kết nối, magic keyboard lỗi, smart keyboard không nhận

**🔍 Chẩn đoán:** Xác định loại bàn phím (gắn qua Smart Connector — không cần Bluetooth/sạc riêng, hay bàn phím Bluetooth rời cần ghép đôi) và kiểm tra có đúng dòng iPad tương thích với bàn phím đó không.

**🛠️ Hướng dẫn xử lý:**
1. Với bàn phím Smart Connector: tháo ra lắp lại đảm bảo các chấu tiếp xúc sạch, không có dị vật; kiểm tra đúng chiều gắn.
2. Khởi động lại iPad trong lúc vẫn gắn bàn phím.
3. Với bàn phím Bluetooth rời: kiểm tra Bluetooth trên iPad đang bật, pin bàn phím còn đủ, vào Cài đặt > Bluetooth để ghép đôi lại nếu cần.
4. Cập nhật iPadOS lên bản mới nhất.
5. Vệ sinh nhẹ các chấu tiếp xúc Smart Connector bằng khăn khô mềm nếu nghi có bụi bẩn/oxi hóa.

**🚫 Tuyệt đối không được làm:** Không kết luận bàn phím hỏng khi chưa xác nhận đúng dòng iPad tương thích; không dùng vật kim loại/sắc nhọn cạy hoặc vệ sinh chấu tiếp xúc Smart Connector.

**💬 Kịch bản tư vấn:** "Dạ mình kiểm tra lại đúng loại bàn phím có tương thích với iPad mình không và vệ sinh thử chấu kết nối trước ạ."

**📦 Lưu ý TTBH:** Đã xác nhận đúng tương thích, đã vệ sinh chấu kết nối/thử ghép đôi lại mà vẫn không nhận — gửi TTBH kiểm tra bàn phím hoặc cổng Smart Connector trên iPad.

---

### iPad hao pin nhanh bất thường dù ít sử dụng
- **ID:** lib-a40
- **Thiết bị:** iPad
- **Chẩn đoán ngắn:** Pin sụt nhanh dù máy ở chế độ chờ hoặc ít thao tác, có thể do ứng dụng chạy ngầm hoặc pin đã chai.
- **Từ khóa:** ipad hao pin nhanh, pin ipad chai, hao pin chế độ chờ

**🔍 Chẩn đoán:** Hỏi khách pin hao nhanh khi ĐANG SỬ DỤNG (thường do ứng dụng/game nặng, độ sáng cao) hay cả khi Ở CHẾ ĐỘ CHỜ không dùng tới (đáng chú ý hơn, có thể do ứng dụng chạy ngầm hoặc lỗi đồng bộ).

**🛠️ Hướng dẫn xử lý:**
1. Vào Cài đặt > Pin, xem biểu đồ mức sử dụng pin theo ứng dụng trong 24h/10 ngày qua để tìm ứng dụng tiêu hao bất thường.
2. Kiểm tra độ sáng màn hình, tắt bớt nếu để quá cao; bật Tự động khóa ở thời gian ngắn hơn nếu đang để dài.
3. Kiểm tra Dịch vụ vị trí và Làm mới ứng dụng nền trong Cài đặt > Cài đặt chung, tắt bớt cho ứng dụng không cần thiết.
4. Cập nhật iPadOS lên bản mới nhất.

**🚫 Tuyệt đối không được làm:** Không khẳng định "pin hỏng cần thay" ngay khi chưa kiểm tra mục sử dụng pin theo ứng dụng; không tự ý tắt hết các tính năng nền của khách mà không giải thích lý do.

**💬 Kịch bản tư vấn:** "Dạ mình xem thử ứng dụng nào đang ngốn pin nhiều bất thường trước ạ, đa phần hao pin nhanh là do phần mềm chứ chưa chắc do pin yếu."

**📦 Lưu ý TTBH:** Đã kiểm tra và loại trừ nguyên nhân ứng dụng/cài đặt, đã cập nhật phần mềm mà pin vẫn hao bất thường ở chế độ chờ, hoặc máy đã dùng lâu năm và khách nghi ngờ pin chai — đề xuất khách nhận bảo hành kiểm tra pin nếu còn trong hạn, hoặc tư vấn chi phí thay pin dịch vụ nếu đã hết bảo hành.

---

### Apple Watch pin hao nhanh bất thường
- **ID:** lib-a41
- **Thiết bị:** Apple Watch
- **Chẩn đoán ngắn:** Pin sụt nhanh hơn bình thường, có thể do cài đặt hao pin, tính năng theo dõi liên tục, hoặc pin đã chai.
- **Từ khóa:** apple watch hao pin, pin watch nhanh hết, watch battery drain

**🔍 Chẩn đoán:** Hỏi khách pin hao nhanh khi tập luyện (bình thường nếu dùng GPS/đo nhịp tim liên tục) hay cả lúc đeo bình thường không tập. Kiểm tra Watch có đang mất kết nối liên tục với iPhone không.

**🛠️ Hướng dẫn xử lý:**
1. Giữ Apple Watch trong phạm vi kết nối Bluetooth với iPhone càng nhiều càng tốt, ưu tiên Wifi hơn dữ liệu di động (bản LTE) khi ở xa iPhone.
2. Tắt bớt tính năng Luôn hiển thị (Always On Display) nếu đang bật.
3. Bật Chế độ Tiết kiệm pin (Low Power Mode) để kiểm tra xem có cải thiện rõ rệt không.
4. Khi tập luyện: giảm tần suất lấy mẫu GPS/nhịp tim nếu không cần độ chính xác cao, dùng AirPods thay vì loa ngoài.
5. Nếu hao pin bất thường ngay sau khi cập nhật watchOS: đợi vài ngày để hệ thống tối ưu lại rồi kiểm tra lại.
6. Kiểm tra Cài đặt > Pin có thông báo "Pin cần được kiểm tra dịch vụ" không.

**🚫 Tuyệt đối không được làm:** Không khẳng định pin hỏng ngay khi khách đang dùng nhiều tính năng theo dõi liên tục mà chưa kiểm tra cách sử dụng thực tế; không tháo pin khi chưa loại trừ nguyên nhân phần mềm.

**💬 Kịch bản tư vấn:** "Dạ mình kiểm tra thử các tính năng đang bật có tiêu hao nhiều pin không trước ạ, một số tính năng theo dõi liên tục sẽ hao pin nhanh hơn bình thường."

**📦 Lưu ý TTBH:** Cài đặt > Pin báo "Pin cần được kiểm tra dịch vụ", hoặc đã thử hết các bước tối ưu mà pin vẫn hao bất thường ngay cả khi dùng nhẹ — đề xuất khách nhận bảo hành kiểm tra pin.

---

### Apple Watch bị treo ở màn hình logo Apple, không vào được máy
- **ID:** lib-a42
- **Thiết bị:** Apple Watch
- **Chẩn đoán ngắn:** Máy đứng ở màn hình logo Apple, không tiếp tục khởi động hoặc cập nhật được, thường xảy ra khi đang cập nhật watchOS.
- **Từ khóa:** apple watch treo logo, watch không cập nhật được, treo màn hình táo

**🔍 Chẩn đoán:** Xác nhận sự cố xảy ra trong lúc đang cập nhật watchOS hay tự nhiên xuất hiện. Kiểm tra Watch có đang gắn sạc và ở gần iPhone đã ghép đôi không (bắt buộc để hoàn tất cập nhật).

**🛠️ Hướng dẫn xử lý:**
1. Đảm bảo Apple Watch đang được sạc và để gần iPhone đã ghép đôi (bắt buộc để hoàn tất cập nhật).
2. Ép khởi động lại: giữ đồng thời nút Bên hông và Digital Crown đến khi màn hình tắt và logo Apple xuất hiện lại.
3. Nếu vẫn treo: mở app Watch trên iPhone > Cài đặt chung > Cập nhật phần mềm, thử cài lại.
4. Nếu vẫn không cải thiện: hủy ghép đôi (Unpair) qua app Watch, sau đó ghép đôi lại từ đầu (có thể khôi phục từ bản sao lưu gần nhất).

**🚫 Tuyệt đối không được làm:** Không hủy ghép đôi khi khách chưa được thông báo rõ về việc cần thiết lập lại từ đầu; không rút sạc giữa chừng khi đang cập nhật.

**💬 Kịch bản tư vấn:** "Dạ đồng hồ đang treo giữa chừng lúc cập nhật, em cắm sạc và để gần điện thoại để đồng hồ tự hoàn tất cập nhật, mình đợi em vài phút nhé."

**📦 Lưu ý TTBH:** Đã sạc, để gần iPhone, ép khởi động lại và thử hủy ghép đôi/ghép đôi lại mà Watch vẫn treo ở logo Apple — gửi TTBH kiểm tra phần cứng.

---

### iCloud không đồng bộ ảnh, danh bạ hoặc dữ liệu giữa các thiết bị
- **ID:** lib-a43
- **Thiết bị:** iPhone
- **Chẩn đoán ngắn:** Ảnh/Danh bạ/Lịch không cập nhật đồng thời trên các thiết bị dùng chung Apple ID, do cài đặt đồng bộ tắt hoặc gián đoạn kết nối.
- **Từ khóa:** icloud không đồng bộ, ảnh không đồng bộ, danh bạ không đồng bộ

**🔍 Chẩn đoán:** Xác nhận các thiết bị đang đăng nhập CÙNG một Apple ID. Mở ứng dụng Ảnh, xem thông báo trạng thái thư viện hiển thị lý do tạm dừng đồng bộ.

**🛠️ Hướng dẫn xử lý:**
1. Xác nhận tất cả thiết bị cần đồng bộ đang đăng nhập cùng một Apple ID.
2. Kiểm tra Cài đặt > [tên tài khoản] > iCloud, xác nhận Ảnh/Danh bạ/Lịch đang BẬT trên từng thiết bị.
3. Mở app Ảnh, đọc thông báo trạng thái thư viện — thường nêu lý do: Chế độ tiết kiệm dữ liệu/pin, pin yếu, máy nóng, hoặc bộ nhớ iCloud đầy.
4. Kết nối vào nguồn điện và Wifi, để đồng bộ qua đêm không bị gián đoạn.
5. Kiểm tra dung lượng iCloud còn trống — nếu đầy, cần khách nâng cấp gói hoặc xóa bớt dữ liệu cũ.
6. Cập nhật iOS/iPadOS/macOS lên bản mới nhất trên tất cả thiết bị liên quan.

**🚫 Tuyệt đối không được làm:** Không tắt/bật lại Ảnh iCloud khi khách chưa hiểu rõ có thể ảnh hưởng ảnh lưu cục bộ; không tự ý xóa dữ liệu trên iCloud của khách để "dọn chỗ" khi chưa xác nhận.

**💬 Kịch bản tư vấn:** "Dạ mình kiểm tra lại các thiết bị có đang đăng nhập cùng một tài khoản Apple ID và cùng bật đồng bộ chưa trước ạ, đây là nguyên nhân phổ biến nhất."

**📦 Lưu ý TTBH:** Đây là lỗi phần mềm/tài khoản, không thuộc phạm vi TTBH; nếu đã xác nhận đúng tài khoản, đủ dung lượng, đã thử đồng bộ qua đêm mà vẫn không được, hướng dẫn khách liên hệ Hỗ trợ Apple (Apple Support) để kiểm tra sâu hơn phía máy chủ iCloud.

---

### AirDrop không hoạt động giữa các thiết bị Apple
- **ID:** lib-a44
- **Thiết bị:** iPhone
- **Chẩn đoán ngắn:** Không gửi/nhận được file qua AirDrop giữa 2 thiết bị Apple ở gần nhau.
- **Từ khóa:** airdrop không hoạt động, airdrop không thấy máy, chia sẻ file iphone

**🔍 Chẩn đoán:** Xác nhận cả 2 thiết bị đều bật Wifi VÀ Bluetooth (AirDrop cần cả 2), và không thiết bị nào đang bật Phát điểm truy cập cá nhân. Hỏi thiết bị nhận có phải người lạ/không có trong Danh bạ của người gửi không.

**🛠️ Hướng dẫn xử lý:**
1. Bật Wifi và Bluetooth trên cả 2 thiết bị.
2. Tắt Phát điểm truy cập cá nhân (Personal Hotspot) trên cả 2 máy nếu đang bật.
3. Trên thiết bị NHẬN: mở Trung tâm Điều khiển, nhấn giữ khối mạng, chọn AirDrop, đổi thành "Mọi người trong 10 phút" nếu người gửi không có trong Danh bạ.
4. Đưa 2 thiết bị lại gần nhau hơn.
5. Khởi động lại cả 2 thiết bị nếu vẫn không thấy nhau trong danh sách AirDrop.

**🚫 Tuyệt đối không được làm:** Không hướng dẫn khách chuyển hẳn AirDrop sang "Mọi người" và quên đổi lại — nhắc khách đây chỉ là chế độ tạm 10 phút, tự động tắt sau đó vì lý do bảo mật.

**💬 Kịch bản tư vấn:** "Dạ mình kiểm tra lại Wifi, Bluetooth trên cả 2 máy và chỉnh AirDrop nhận từ 'Mọi người' tạm thời nếu 2 máy chưa lưu danh bạ của nhau nhé."

**📦 Lưu ý TTBH:** Đây là lỗi cài đặt/kết nối phần mềm thuần túy, không cần gửi TTBH; nếu đã kiểm tra đúng hết các bước trên mà vẫn không thấy thiết bị, khả năng do phần cứng Wifi/Bluetooth thì mới cần gửi TTBH kiểm tra.

---

### Find My không định vị được thiết bị (hiện "Không có vị trí")
- **ID:** lib-a45
- **Thiết bị:** iPhone
- **Chẩn đoán ngắn:** Ứng dụng Tìm (Find My) không hiển thị vị trí hiện tại của thiết bị đang tìm, do thiết bị mất kết nối mạng hoặc tắt dịch vụ định vị.
- **Từ khóa:** find my không định vị, tìm iphone không thấy, mất máy, không có vị trí

**🔍 Chẩn đoán:** Xác định thiết bị đang tìm là của CHÍNH KHÁCH hay của người thân được chia sẻ vị trí — quyền và cách xử lý khác nhau. Hỏi thiết bị đó lần cuối online là khi nào.

**🛠️ Hướng dẫn xử lý:**
1. Xác nhận Dịch vụ định vị và tính năng Tìm đang BẬT trên thiết bị cần tìm (nếu khách còn quyền truy cập thiết bị khác cùng Apple ID để kiểm tra).
2. Nếu thiết bị mất kết nối mạng/hết pin: app Tìm sẽ hiển thị VỊ TRÍ CUỐI CÙNG được ghi nhận (không phải thời gian thực) — giải thích rõ điều này cho khách.
3. Với thiết bị nghi bị mất/thất lạc: hướng dẫn khách bật Chế độ Mất (Lost Mode) để khóa từ xa và hiển thị thông tin liên hệ trên màn hình khóa.
4. Kiểm tra thiết bị dùng để TÌM đã đăng nhập đúng Apple ID và có kết nối mạng ổn định không.
5. Với AirTag/phụ kiện Tìm: nhắc rằng các thiết bị này cần mạng lưới Tìm từ thiết bị Apple khác ở gần để cập nhật vị trí, không có GPS riêng.

**🚫 Tuyệt đối không được làm:** Không cam kết chắc chắn định vị được/khôi phục được máy đã mất — Find My phụ thuộc vào việc thiết bị còn bật nguồn, còn kết nối mạng và chưa bị xóa cài đặt; không truy cập thông tin vị trí người khác khi chưa có sự đồng ý hợp lệ.

**💬 Kịch bản tư vấn:** "Dạ vị trí hiện tại đang hiển thị là lần cuối máy còn online, có thể máy đang tắt nguồn hoặc mất mạng nên chưa cập nhật được vị trí mới ạ."

**📦 Lưu ý TTBH:** Đây không phải lỗi phần cứng để gửi TTBH — nếu nghi ngờ thiết bị mất/bị đánh cắp, hướng dẫn khách các bước trong Find My (Đánh dấu là đã mất, khóa máy, trình báo cơ quan chức năng nếu cần) thay vì xử lý kỹ thuật tại cửa hàng.

---

### Không thể thêm thẻ vào Apple Pay / Ví (Wallet)
- **ID:** lib-a46
- **Thiết bị:** iPhone
- **Chẩn đoán ngắn:** Hệ thống báo lỗi khi khách cố thêm thẻ ngân hàng vào ứng dụng Ví để thanh toán bằng Apple Pay.
- **Từ khóa:** apple pay không thêm được thẻ, ví lỗi, wallet error, không thêm thẻ ngân hàng

**🔍 Chẩn đoán:** Xác định lỗi cụ thể hiển thị (vd: "Không thể thêm thẻ", "Thẻ không hợp lệ", "Đã đạt giới hạn số thiết bị") — mỗi lỗi có nguyên nhân khác nhau, phần lớn liên quan phía ngân hàng phát hành thẻ chứ không phải lỗi máy.

**🛠️ Hướng dẫn xử lý:**
1. Xác nhận điều kiện cơ bản: ngân hàng có hỗ trợ Apple Pay không, máy đã cập nhật iOS mới nhất, đã cài Face ID/Touch ID hoặc mã khóa màn hình, đã bật xác thực hai yếu tố (2FA) cho Apple ID.
2. Kiểm tra tình trạng dịch vụ Apple Pay có đang gặp sự cố không.
3. Nếu báo "Không thể thêm thẻ"/"Thẻ không hợp lệ": hướng dẫn khách liên hệ trực tiếp ngân hàng để xác nhận thẻ đã kích hoạt Apple Pay phía ngân hàng (Apple không có quyền phê duyệt/từ chối thẻ).
4. Nếu báo "Đã đạt giới hạn số thiết bị": thẻ đã thêm vào số lượng thiết bị tối đa, cần khách gỡ bớt thẻ khỏi thiết bị cũ qua ngân hàng.

**🚫 Tuyệt đối không được làm:** Không tự ý nhập/thao tác với thông tin thẻ ngân hàng của khách; không cam kết thay mặt xử lý lỗi phía ngân hàng vì nằm ngoài phạm vi kỹ thuật của cửa hàng.

**💬 Kịch bản tư vấn:** "Dạ lỗi này phần lớn liên quan đến phía ngân hàng phát hành thẻ chứ không phải máy mình, anh/chị liên hệ tổng đài ngân hàng để xác nhận thẻ đã bật Apple Pay chưa nhé, mình chỉ hỗ trợ kiểm tra phần cài đặt trên máy thôi ạ."

**📦 Lưu ý TTBH:** Đây là lỗi liên quan tài khoản/dịch vụ thanh toán, không thuộc phạm vi TTBH; chỉ khi đã loại trừ hết nguyên nhân phía ngân hàng/tài khoản mà nghi ngờ do phần cứng Face ID/Touch ID không xác thực được mới cần kiểm tra thêm phần cứng liên quan.

---

### Camera iPhone/iPad bị mờ hoặc không lấy nét được
- **ID:** lib-a47
- **Thiết bị:** iPhone
- **Chẩn đoán ngắn:** Ảnh/video chụp ra bị mờ, nhòe hoặc camera không tự lấy nét được vào chủ thể.
- **Từ khóa:** camera mờ, không lấy nét, camera iphone lỗi, ảnh nhòe

**🔍 Chẩn đoán:** Xác định lỗi ở camera trước hay camera sau (hoặc cả 2), và có xảy ra với TẤT CẢ ứng dụng camera hay chỉ riêng app Camera mặc định. Kiểm tra ống kính vật lý có bẩn/trầy hoặc bị ốp lưng/dán che khuất một phần không.

**🛠️ Hướng dẫn xử lý:**
1. Lau ống kính camera bằng khăn khô mềm chuyên dụng — bụi bẩn/dấu vân tay là nguyên nhân phổ biến nhất.
2. Kiểm tra ốp lưng/miếng dán có che khuất một phần ống kính không, tháo thử để so sánh.
3. Mở app Camera, chạm vào màn hình để lấy nét thủ công vào chủ thể.
4. Kiểm tra ứng dụng camera bên thứ 3 (nếu khách dùng) có bị mờ tương tự không — nếu chỉ app đó bị mờ, lỗi do ứng dụng chứ không phải phần cứng.
5. Khởi động lại máy, cập nhật iOS/iPadOS lên bản mới nhất.
6. Quan sát kỹ ống kính xem có vết nứt, hơi nước lọt vào bên trong không (dấu hiệu từng vào nước hoặc va đập).

**🚫 Tuyệt đối không được làm:** Không dùng vật cứng/sắc nhọn cạy hoặc lau mạnh lên ống kính; không kết luận lỗi phần cứng khi chưa loại trừ nguyên nhân ốp/dán che khuất hoặc ứng dụng bên thứ 3.

**💬 Kịch bản tư vấn:** "Dạ mình lau thử ống kính và kiểm tra ốp lưng trước ạ, phần lớn trường hợp mờ là do bụi bẩn hoặc ốp che khuất chứ không phải lỗi camera."

**📦 Lưu ý TTBH:** Đã lau ống kính, tháo ốp/dán, thử app Camera mặc định vẫn mờ/không lấy nét được, hoặc quan sát thấy ống kính có hơi nước/nứt vỡ bên trong — gửi TTBH kiểm tra cụm camera.

---

### Mất quyền truy cập Apple ID do quên xác thực hai yếu tố (2FA), không còn thiết bị tin cậy
- **ID:** lib-a48
- **Thiết bị:** iPhone
- **Chẩn đoán ngắn:** Khách không đăng nhập được Apple ID vì không nhận được mã xác minh (không còn thiết bị tin cậy nào hoạt động, đổi số điện thoại...).
- **Từ khóa:** mất quyền truy cập apple id, quên 2fa, khôi phục apple id, xác thực hai yếu tố

**🔍 Chẩn đoán:** Hỏi khách còn giữ BẤT KỲ thiết bị nào từng đăng nhập Apple ID này và vẫn hoạt động không (kể cả máy cũ), hoặc còn quyền truy cập số điện thoại/email khôi phục đã đăng ký không.

**🛠️ Hướng dẫn xử lý:**
1. Hỏi khách có thiết bị Apple nào khác (kể cả máy cũ) đang đăng nhập sẵn Apple ID này không — có thể đổi mật khẩu trực tiếp từ thiết bị đó.
2. Nếu có người thân/bạn bè đã đặt làm "Người liên hệ khôi phục tài khoản": hướng dẫn khách nhờ người đó hỗ trợ khôi phục.
3. Nếu không còn cách nào ở trên: hướng dẫn khách vào iforgot.apple.com, chọn "Đặt lại mật khẩu" và làm theo quy trình Khôi phục tài khoản.
4. Giải thích rõ với khách: quy trình khôi phục có thể mất VÀI NGÀY (Apple xác nhận qua email trong 72 giờ báo thời gian dự kiến) — đây là chính sách bảo mật chung, cửa hàng và cả Apple Support đều không thể rút ngắn thời gian này.
5. Trong lúc chờ: khuyên khách kiểm tra kỹ email/số điện thoại khôi phục đã đăng ký để không bỏ lỡ thông báo từ Apple.

**🚫 Tuyệt đối không được làm:** Không hứa hẹn có thể "mở khóa nhanh" hoặc rút ngắn thời gian khôi phục tài khoản; không yêu cầu khách cung cấp mật khẩu Apple ID cho nhân viên dưới bất kỳ hình thức nào.

**💬 Kịch bản tư vấn:** "Dạ trường hợp này Apple có quy trình khôi phục tài khoản riêng để bảo vệ an toàn cho mình, có thể mất vài ngày, cửa hàng không rút ngắn được thời gian này, mình theo dõi email/tin nhắn Apple gửi để làm tiếp nhé."

**📦 Lưu ý TTBH:** Đây là vấn đề tài khoản/bảo mật phía Apple, không liên quan phần cứng — không gửi TTBH, chỉ hướng dẫn khách quy trình Khôi phục tài khoản chính thức qua iforgot.apple.com.

---

### Mac không nhận diện màn hình ngoài hoặc máy chiếu
- **ID:** lib-a49
- **Thiết bị:** Mac
- **Chẩn đoán ngắn:** Mac không hiển thị hình ảnh lên màn hình rời/máy chiếu dù đã kết nối cáp.
- **Từ khóa:** mac không nhận màn hình ngoài, không xuất hình máy chiếu, external display

**🔍 Chẩn đoán:** Xác định màn hình ngoài có nhận điện (đèn nguồn sáng) nhưng không nhận tín hiệu từ Mac, hay hoàn toàn không phản hồi gì. Hỏi khách đang dùng cổng/adapter chuyển đổi nào.

**🛠️ Hướng dẫn xử lý:**
1. Vào Cài đặt hệ thống > Màn hình, giữ phím Option và bấm "Phát hiện màn hình".
2. Rút cáp màn hình ra khỏi Mac rồi cắm lại, đảm bảo cắm chắc đúng cổng.
3. Kiểm tra đang dùng đúng loại cáp và đúng adapter chuyển đổi nếu cần.
4. Cho Mac vào chế độ ngủ rồi đánh thức lại để máy dò lại thiết bị hiển thị.
5. Với màn hình/máy chiếu bên thứ 3: kiểm tra tài liệu hướng dẫn đi kèm (một số máy chiếu cần bật nguồn trước khi cắm cáp).
6. Thử cáp/adapter khác hoặc thử màn hình khác để xác định lỗi do cáp/màn hình hay do máy.

**🚫 Tuyệt đối không được làm:** Không kết luận cổng xuất hình trên Mac hỏng khi chưa thử cáp/adapter/màn hình khác; không tháo máy khi chưa loại trừ hết nguyên nhân phụ kiện kết nối.

**💬 Kịch bản tư vấn:** "Dạ mình thử đổi cáp/adapter và bấm dò lại màn hình trước ạ, phần lớn trường hợp không nhận màn hình ngoài là do cáp/adapter chứ không phải do máy."

**📦 Lưu ý TTBH:** Đã thử nhiều cáp/adapter/màn hình khác nhau mà Mac vẫn không xuất được hình ảnh ra bất kỳ màn hình ngoài nào — gửi TTBH kiểm tra cổng xuất hình/card đồ họa.

---
