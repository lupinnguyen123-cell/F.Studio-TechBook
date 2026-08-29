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

### Màn hình iPhone loạn cảm ứng, tự chạm không do người dùng (ghost touch)
- **ID:** lib-a50
- **Thiết bị:** iPhone
- **Chẩn đoán ngắn:** Do lớp cảm ứng (digitizer) bị hỏng, dây cáp màn hình lỏng, hoặc màn hình từng bị va đập/ép kính không đúng chuẩn.
- **Từ khóa:** ghost touch, cảm ứng loạn, tự chạm, màn hình

**🔍 Chẩn đoán:** Quan sát máy có tự bấm/mở ứng dụng ngẫu nhiên ngay cả khi không chạm vào màn hình không, kiểm tra máy có từng bị rơi, ép kính hoặc dán miếng dán cường lực dày/sai kích thước không.

**🛠️ Hướng dẫn xử lý:**
1. Tháo miếng dán màn hình và ốp lưng (nếu có) rồi quan sát lại — nhiều trường hợp do miếng dán kém chất lượng gây nhiễu cảm ứng.
2. Khởi động lại máy (tắt nguồn rồi bật lại) để loại trừ lỗi phần mềm tạm thời.
3. Vào Cài đặt > Cài đặt chung > Chuyển hoặc Đặt lại iPhone > Đặt lại > Đặt lại tất cả cài đặt để loại trừ xung đột phần mềm (không mất dữ liệu).
4. Nếu vẫn còn hiện tượng, kiểm tra lịch sử máy: từng rơi rớt, ép kính ở nơi khác, hoặc vào nước gần đây không.

**🚫 Tuyệt đối không được làm:** Không tự ý tháo màn hình kiểm tra dây cáp nếu không được đào tạo phần cứng; không khẳng định "chắc chắn do phần mềm" khi máy từng có va đập hoặc ép kính bên ngoài.

**💬 Kịch bản tư vấn:** "Dạ em đã kiểm tra và loại trừ được nguyên nhân phần mềm/miếng dán rồi ạ, nếu máy vẫn còn hiện tượng chạm ảo thì khả năng cao là màn hình hoặc cáp kết nối có vấn đề, em cần kiểm tra sâu hơn."

**📦 Lưu ý TTBH:** Sau khi loại trừ phần mềm/miếng dán vẫn còn ghost touch, đặc biệt trên máy chưa từng ép kính lại: đề xuất khách nhận bảo hành; gửi TTBH kiểm tra màn hình/cáp kết nối. Nếu máy từng ép kính không chính hãng, thông báo khách có thể mất bảo hành phần này.

---

### Pin iPhone bị phồng, đội mặt lưng hoặc màn hình
- **ID:** lib-a51
- **Thiết bị:** iPhone
- **Chẩn đoán ngắn:** Pin lithium-ion bị chai/hỏng hóa học sinh khí bên trong, thường sau thời gian sử dụng dài hoặc sạc kém chất lượng.
- **Từ khóa:** pin phồng, phồng pin, an toàn, cháy nổ

**🔍 Chẩn đoán:** Đây là tình huống AN TOÀN CẦN ƯU TIÊN — kiểm tra ngay dấu hiệu phồng bằng mắt (màn hình/lưng bị đội lên, hở khe) và hỏi khách máy có nóng bất thường, có mùi lạ không.

**🛠️ Hướng dẫn xử lý:**
1. Yêu cầu khách NGỪNG SỬ DỤNG và ngừng sạc máy ngay lập tức.
2. Không được ép, đè hoặc cố gắng tháo pin phồng bằng lực — nguy cơ pin phát nổ hoặc bốc cháy.
3. Đặt máy ở nơi thoáng, tránh xa vật dễ cháy, không để trong túi quần/túi xách khi di chuyển đến cửa hàng.
4. Tiếp nhận máy trong hộp/túi chống cháy nếu có, bàn giao ngay cho bộ phận kỹ thuật xử lý bằng quy trình pin lỗi (tháo pin đúng chuẩn an toàn).
5. Thông báo ngay cho quản lý ca trực nếu pin phồng nặng, biến dạng rõ hoặc rò rỉ dịch.

**🚫 Tuyệt đối không được làm:** Tuyệt đối không dùng vật nhọn/kim loại chọc vào khu vực pin phồng; không sạc lại máy để "kiểm tra thử"; không để máy gần nguồn nhiệt hoặc trong ngăn kéo kín; không cố gắng bẻ thẳng lại mặt lưng/màn hình bị đội phồng.

**💬 Kịch bản tư vấn:** "Dạ pin máy mình đang bị phồng, đây là lỗi cần xử lý ngay vì lý do an toàn ạ. Anh/chị vui lòng không sạc hay dùng máy nữa, em sẽ ưu tiên xử lý thay pin mới cho mình ngay hôm nay."

**📦 Lưu ý TTBH:** Pin phồng luôn cần thay thế, không sửa/ép lại được — nếu máy còn bảo hành pin chính hãng và không có dấu hiệu tác động ngoại lực, gửi TTBH xử lý theo chính sách bảo hành pin; nếu hết bảo hành, tư vấn thay pin chính hãng tại cửa hàng càng sớm càng tốt.

---

### Nút nguồn hoặc nút âm lượng bị liệt, kẹt
- **ID:** lib-a52
- **Thiết bị:** iPhone
- **Chẩn đoán ngắn:** Nút vật lý bị kẹt bụi bẩn, oxi hóa tiếp điểm, hoặc dây flex nút bị đứt/lỏng do va đập/vào nước.
- **Từ khóa:** nút nguồn, nút âm lượng, liệt nút, kẹt nút

**🔍 Chẩn đoán:** Xác định nút nào bị lỗi (nguồn/tăng âm/giảm âm/Action Button), kiểm tra máy có từng rơi, vào nước, hoặc dùng ốp lưng dày gây kẹt nút vật lý không.

**🛠️ Hướng dẫn xử lý:**
1. Tháo ốp lưng đang dùng, kiểm tra ốp có che/đè vào nút gây kẹt không.
2. Dùng khí nén hoặc bàn chải mềm vệ sinh nhẹ quanh khe nút để loại bỏ bụi bẩn.
3. Thử bấm giữ nút và quan sát độ nảy (nút liệt thường mất độ nảy, bấm chìm hẳn hoặc không phản hồi).
4. Kiểm tra tính năng thay thế: dùng AssistiveTouch (Cài đặt > Trợ năng > Cảm ứng > AssistiveTouch) để tạm mô phỏng nút nguồn/âm lượng trong lúc chờ sửa.
5. Hỏi khách máy có từng vào nước hoặc rơi mạnh gần đây không để xác định hướng xử lý.

**🚫 Tuyệt đối không được làm:** Không dùng lực mạnh cạy nút để "thử" vì có thể làm gãy chân nút hoặc hỏng dây flex bên trong; không khẳng định thay được ngay tại chỗ khi chưa mở máy kiểm tra.

**💬 Kịch bản tư vấn:** "Dạ em đã kiểm tra bên ngoài, nút này khả năng cao bị lỗi cơ hoặc dây kết nối bên trong ạ, em cần mở máy kiểm tra kỹ hơn để báo chính xác chi phí và thời gian sửa cho mình."

**📦 Lưu ý TTBH:** Nút liệt không do vào nước/rơi vỡ và máy còn bảo hành: gửi TTBH kiểm tra dây flex/cụm nút. Nếu có dấu hiệu vào nước/va đập, tư vấn sửa chữa trả phí tại cửa hàng.

---

### Taptic Engine (rung) không hoạt động hoặc rung yếu bất thường
- **ID:** lib-a53
- **Thiết bị:** iPhone
- **Chẩn đoán ngắn:** Motor rung (Taptic Engine) bị lỏng kết nối, hỏng, hoặc do cài đặt rung bị tắt/xung đột phần mềm.
- **Từ khóa:** rung, taptic engine, không rung, haptic

**🔍 Chẩn đoán:** Kiểm tra Cài đặt > Âm thanh & Xúc giác xem đã bật "Rung khi Đổ chuông"/"Rung khi Im lặng" chưa; thử bấm bàn phím xem có haptic feedback khi gõ không.

**🛠️ Hướng dẫn xử lý:**
1. Kiểm tra công tắc gạt Chuông/Im lặng ở cạnh máy đang ở chế độ nào, và cài đặt rung tương ứng trong Cài đặt > Âm thanh & Xúc giác.
2. Vào Cài đặt > Trợ năng > Cảm ứng > Phản hồi Rung, đảm bảo đang bật.
3. Thử gọi thử vào máy hoặc đặt hẹn giờ để kiểm tra rung thực tế thay vì chỉ xem cài đặt.
4. Khởi động lại máy để loại trừ lỗi phần mềm tạm thời.
5. Nếu vẫn không rung dù cài đặt đúng, khả năng cao do phần cứng (motor Taptic Engine).

**🚫 Tuyệt đối không được làm:** Không khẳng định ngay là hỏng phần cứng khi chưa kiểm tra hết các cài đặt phần mềm liên quan; không tháo máy kiểm tra nếu không được đào tạo phần cứng.

**💬 Kịch bản tư vấn:** "Dạ em đã kiểm tra cài đặt rung của mình rồi ạ, nếu vẫn không rung thì khả năng cao do motor rung bên trong bị lỗi, em cần mở máy kiểm tra thêm."

**📦 Lưu ý TTBH:** Đã loại trừ nguyên nhân cài đặt/phần mềm, máy còn bảo hành và không có dấu hiệu vào nước/va đập: gửi TTBH kiểm tra Taptic Engine.

---

### Cổng sạc/khay SIM bị gỉ sét, ăn mòn do từng vào nước
- **ID:** lib-a54
- **Thiết bị:** iPhone
- **Chẩn đoán ngắn:** Nước/hơi ẩm đọng lại lâu ngày trong cổng sạc hoặc khay SIM gây oxi hóa, ăn mòn tiếp điểm kim loại.
- **Từ khóa:** gỉ sét, ăn mòn, cổng sạc, khay sim, oxi hóa

**🔍 Chẩn đoán:** Soi đèn pin quan sát màu sắc chân tiếp điểm cổng sạc/khay SIM (gỉ thường có màu trắng/xanh lá dạng bột hoặc đóng cặn), kiểm tra chỉ báo tiếp xúc chất lỏng (LCI) trong khay SIM.

**🛠️ Hướng dẫn xử lý:**
1. Hỏi khách máy có từng vào nước, để nơi ẩm ướt, hoặc dùng khi ra mồ hôi nhiều không và từ bao lâu.
2. Soi đèn pin kiểm tra tình trạng gỉ sét ở cổng sạc và khay SIM.
3. Không cắm sạc/SIM vào khi đang thấy rõ gỉ sét — có nguy cơ chập mạch.
4. Đề xuất vệ sinh chuyên sâu bằng dung dịch chuyên dụng và máy hút ẩm chân không tại xưởng kỹ thuật (không tự vệ sinh bằng vật dụng tại quầy).

**🚫 Tuyệt đối không được làm:** Không cắm sạc vào cổng đang gỉ sét rõ để "thử xem còn sạc được không"; không dùng cồn/nước rửa tay thông thường để vệ sinh gỉ sét; không cạy gỉ bằng vật kim loại sắc nhọn.

**💬 Kịch bản tư vấn:** "Dạ cổng sạc của mình đang bị oxi hóa do từng tiếp xúc nước/ẩm ạ, em cần đưa vào xưởng vệ sinh chuyên sâu, không nên tự cắm sạc lúc này vì có thể ảnh hưởng thêm đến máy."

**📦 Lưu ý TTBH:** Gỉ sét do vào nước không thuộc diện bảo hành lỗi nhà sản xuất — tư vấn dịch vụ vệ sinh/sửa chữa trả phí tại cửa hàng, không gửi TTBH.

---

### Màn hình ám vàng/ám xanh, mất True Tone sau khi ép kính
- **ID:** lib-a55
- **Thiết bị:** iPhone
- **Chẩn đoán ngắn:** Màn hình thay thế không chính hãng hoặc chưa cấy IC màn hình đúng chuẩn khiến mất cảm biến True Tone/hiển thị sai màu.
- **Từ khóa:** true tone, ám vàng, ám xanh, màn hình ép, mất true tone

**🔍 Chẩn đoán:** Vào Cài đặt > Màn hình & Độ sáng, kiểm tra mục True Tone còn hiển thị tùy chọn để bật/tắt không (nếu mất hẳn dòng này là dấu hiệu rõ màn hình thay thế chưa cấy đúng chip). Hỏi khách máy có từng thay màn hình ở đâu khác không.

**🛠️ Hướng dẫn xử lý:**
1. Kiểm tra Cài đặt > Cài đặt chung > Giới thiệu, xem có dòng cảnh báo "Không xác định được đây có phải màn hình Apple chính hãng" không.
2. So sánh màu hiển thị với một máy cùng dòng còn màn hình zin để xác nhận chênh lệch màu.
3. Giải thích cho khách nguyên nhân do màn hình thay thế trước đó không phải chính hãng hoặc thợ chưa cấy đúng IC.
4. Tư vấn phương án: chấp nhận màu hiện tại, hoặc thay lại màn hình chính hãng/zin bóc máy để khôi phục True Tone.

**🚫 Tuyệt đối không được làm:** Không cam kết "cấy lại IC là hết ám màu 100%" nếu chưa kiểm tra thực tế; không đổ lỗi hoàn toàn cho khách khi chưa xác nhận rõ lịch sử sửa chữa của máy.

**💬 Kịch bản tư vấn:** "Dạ máy mình từng thay màn hình rồi nên bị mất tính năng tự cân màu ạ, nếu muốn khôi phục đẹp như ban đầu thì cần thay lại màn hình chính hãng, em tư vấn chi tiết chi phí cho mình nhé."

**📦 Lưu ý TTBH:** Màn hình đã từng thay ngoài không phải lỗi bảo hành của Apple — không gửi TTBH cho lỗi này; tư vấn thay màn hình chính hãng trả phí tại cửa hàng nếu khách có nhu cầu.

---

### Không gửi/nhận được iMessage, tin nhắn hiện màu xanh lá thay vì xanh dương
- **ID:** lib-a56
- **Thiết bị:** iPhone
- **Chẩn đoán ngắn:** iMessage chưa được kích hoạt, mất kết nối mạng/Apple ID, hoặc máy nhận đang tắt iMessage/không có dữ liệu di động.
- **Từ khóa:** imessage, tin nhắn xanh lá, tin nhắn xanh dương, không gửi được tin nhắn

**🔍 Chẩn đoán:** Kiểm tra Cài đặt > Tin nhắn xem iMessage đã bật chưa, kiểm tra kết nối Wi-Fi/dữ liệu di động và trạng thái đăng nhập Apple ID.

**🛠️ Hướng dẫn xử lý:**
1. Vào Cài đặt > Tin nhắn, kiểm tra công tắc iMessage đã bật (màu xanh) chưa.
2. Nếu đã bật, tắt đi rồi bật lại, chờ 1-2 phút để máy đăng ký lại số điện thoại/Apple ID với hệ thống iMessage.
3. Kiểm tra kết nối mạng ổn định (Wi-Fi hoặc dữ liệu di động), vì iMessage cần Internet để hoạt động.
4. Vào Cài đặt > [Tên người dùng] > kiểm tra đã đăng nhập đúng Apple ID chưa; đăng xuất và đăng nhập lại nếu cần.
5. Kiểm tra ngày giờ máy đã đúng tự động chưa (Cài đặt > Cài đặt chung > Ngày & Giờ > Tự động).

**🚫 Tuyệt đối không được làm:** Không đăng xuất Apple ID của khách khi chưa xác nhận khách nhớ mật khẩu để đăng nhập lại; không khẳng định lỗi này luôn là do máy người nhận khi chưa kiểm tra máy người gửi.

**💬 Kịch bản tư vấn:** "Dạ tin nhắn xanh lá là gửi qua SMS thường, còn xanh dương là iMessage qua Internet ạ. Em đã kiểm tra và kích hoạt lại iMessage cho máy mình rồi, mình thử nhắn lại xem đã lên xanh dương chưa nhé."

**📦 Lưu ý TTBH:** Đây là lỗi cấu hình phần mềm/tài khoản, không liên quan phần cứng — không cần gửi TTBH, xử lý ngay tại cửa hàng.

---

### Không khôi phục được từ bản sao lưu iCloud/máy tính khi thiết lập máy mới
- **ID:** lib-a57
- **Thiết bị:** iPhone
- **Chẩn đoán ngắn:** Kết nối mạng không ổn định, dung lượng iCloud không đủ so với bản sao lưu, hoặc bản sao lưu bị lỗi/không tương thích phiên bản iOS.
- **Từ khóa:** khôi phục, restore, sao lưu, icloud backup, thiết lập máy mới

**🔍 Chẩn đoán:** Xác định khôi phục qua iCloud (cần Wi-Fi) hay qua máy tính (cần cáp + Finder/iTunes), kiểm tra dung lượng bản sao lưu và mốc thời gian sao lưu gần nhất.

**🛠️ Hướng dẫn xử lý:**
1. Nếu khôi phục qua iCloud: đảm bảo máy đang kết nối Wi-Fi ổn định và cắm sạc trong suốt quá trình, không tắt màn hình khóa máy giữa chừng.
2. Kiểm tra dung lượng iCloud của khách còn đủ chứa bản sao lưu muốn khôi phục không (Cài đặt > Apple ID > iCloud).
3. Nếu khôi phục qua máy tính: kiểm tra cáp kết nối, cập nhật Finder/iTunes lên bản mới nhất, thử đổi cổng USB khác.
4. Nếu báo lỗi cụ thể, ghi lại mã lỗi để tra cứu hướng xử lý tương ứng (một số lỗi cần cập nhật iOS lên phiên bản mới hơn bản sao lưu).
5. Kiên nhẫn chờ đủ thời gian ước tính hiển thị trên máy, không rút sạc/ngắt kết nối giữa chừng vì có thể làm hỏng dữ liệu khôi phục dở dang.

**🚫 Tuyệt đối không được làm:** Không rút cáp, tắt Wi-Fi hoặc tắt nguồn máy khi đang trong quá trình khôi phục; không xóa bản sao lưu gốc trên iCloud/máy tính khi khôi phục chưa hoàn tất và chưa xác nhận thành công.

**💬 Kịch bản tư vấn:** "Dạ quá trình khôi phục dữ liệu cần thời gian và mạng ổn định ạ, mình vui lòng để máy yên và cắm sạc, em sẽ theo dõi cùng mình đến khi hoàn tất."

**📦 Lưu ý TTBH:** Đây là lỗi phần mềm/tài khoản, không liên quan phần cứng — không gửi TTBH; nếu nghi ngờ bản sao lưu bị hỏng, hướng dẫn khách liên hệ Apple Support qua kênh chính thức để được hỗ trợ khôi phục dữ liệu.

---

### Bàn phím ảo gõ lag, tự sửa sai hoặc nhảy chữ liên tục
- **ID:** lib-a58
- **Thiết bị:** iPhone
- **Chẩn đoán ngắn:** Bộ nhớ đệm bàn phím bị lỗi, từ điển gõ tắt (Text Replacement) xung đột, hoặc máy thiếu bộ nhớ trống khiến hệ thống xử lý chậm.
- **Từ khóa:** bàn phím lag, gõ chữ lag, tự sửa sai, nhảy chữ

**🔍 Chẩn đoán:** Kiểm tra hiện tượng xảy ra ở mọi ứng dụng hay chỉ riêng 1 app cụ thể (Zalo, Facebook...), kiểm tra dung lượng trống còn lại của máy.

**🛠️ Hướng dẫn xử lý:**
1. Khởi động lại máy để làm mới bộ nhớ đệm hệ thống.
2. Vào Cài đặt > Cài đặt chung > Bàn phím, kiểm tra và tắt thử tính năng "Sửa lỗi chính tả"/"Dự đoán" nếu nghi ngờ xung đột.
3. Vào Cài đặt > Cài đặt chung > Chuyển hoặc Đặt lại iPhone > Đặt lại > Đặt lại Từ điển Bàn phím để xóa các từ gõ tắt lỗi.
4. Kiểm tra dung lượng trống của máy (Cài đặt > Cài đặt chung > Dung lượng iPhone) — máy gần đầy bộ nhớ thường gõ giật/lag.
5. Nếu chỉ xảy ra ở 1 ứng dụng cụ thể, gỡ và cài lại ứng dụng đó để loại trừ lỗi riêng của app.

**🚫 Tuyệt đối không được làm:** Không xóa toàn bộ dữ liệu máy (Erase All Content) chỉ để xử lý lỗi gõ phím khi chưa thử các bước nhẹ hơn; không tự ý xóa ứng dụng của khách mà chưa hỏi ý kiến.

**💬 Kịch bản tư vấn:** "Dạ em đã khắc phục lỗi bàn phím cho mình bằng cách làm mới lại từ điển gõ và bộ nhớ đệm rồi ạ, mình thử gõ lại xem còn bị giật/nhảy chữ không nhé."

**📦 Lưu ý TTBH:** Đây là lỗi phần mềm thông thường, không cần gửi TTBH; nếu vẫn còn sau khi thử hết các bước, đề xuất khách sao lưu dữ liệu và cập nhật/cài lại iOS.

---

### Camera trước (Face ID/selfie) bị mờ do bụi bẩn hoặc trầy cảm biến TrueDepth
- **ID:** lib-a59
- **Thiết bị:** iPhone
- **Chẩn đoán ngắn:** Cụm cảm biến TrueDepth (camera trước) bị bám bụi/dấu vân tay, hoặc kính bảo vệ/miếng dán che khuất vùng cảm biến.
- **Từ khóa:** camera trước mờ, selfie mờ, truedepth, face id mờ

**🔍 Chẩn đoán:** Quan sát vùng Dynamic Island/tai thỏ có miếng dán cường lực che phủ không đúng khu vực khoét lỗ cảm biến; kiểm tra vệ sinh cụm camera trước bằng mắt.

**🛠️ Hướng dẫn xử lý:**
1. Dùng khăn microfiber khô lau nhẹ khu vực camera trước/cảm biến TrueDepth.
2. Kiểm tra miếng dán màn hình có che đúng vị trí khoét camera/cảm biến không, gỡ dán lại nếu cần.
3. Mở ứng dụng Camera, chuyển sang chế độ chụp trước, so sánh độ nét trước và sau khi vệ sinh.
4. Nếu vẫn mờ, kiểm tra Face ID có báo lỗi kèm theo không để xác định cụm cảm biến có vấn đề sâu hơn hay chỉ do bụi bẩn ngoài kính.

**🚫 Tuyệt đối không được làm:** Không dùng vật cứng/sắc nhọn cạy hoặc chọc vào cụm cảm biến TrueDepth; không dùng dung dịch tẩy rửa mạnh lau lên khu vực camera.

**💬 Kịch bản tư vấn:** "Dạ em đã vệ sinh camera trước cho mình rồi ạ, nếu ảnh vẫn còn mờ thì khả năng cao là cụm cảm biến bên trong bị trầy hoặc hỏng, cần kiểm tra kỹ hơn."

**📦 Lưu ý TTBH:** Vệ sinh không cải thiện, không có dấu hiệu va đập/vào nước, máy còn bảo hành: gửi TTBH kiểm tra cụm camera trước/TrueDepth.

---

### iPhone tự khởi động lại liên tục khi đang sử dụng bình thường
- **ID:** lib-a60
- **Thiết bị:** iPhone
- **Chẩn đoán ngắn:** Xung đột phần mềm/ứng dụng, lỗi hệ điều hành sau cập nhật, hoặc phần cứng (pin/main) không ổn định gây sập nguồn đột ngột.
- **Từ khóa:** tự khởi động lại, random reboot, tự tắt nguồn, khởi động lại liên tục

**🔍 Chẩn đoán:** Hỏi khách hiện tượng xảy ra khi dùng ứng dụng cụ thể hay ngẫu nhiên, tần suất bao nhiêu lần/ngày, có kèm nóng máy hoặc hao pin bất thường không.

**🛠️ Hướng dẫn xử lý:**
1. Kiểm tra phiên bản iOS hiện tại và xem có bản cập nhật mới hơn để sửa lỗi đã biết không (Cài đặt > Cài đặt chung > Cập nhật phần mềm).
2. Kiểm tra dung lượng trống, gỡ bớt ứng dụng nặng/ít dùng nếu máy gần đầy bộ nhớ.
3. Xác định ứng dụng nào đang mở lúc máy tự khởi động lại (nếu khách nhớ được) — có thể là ứng dụng lỗi cần cập nhật/gỡ cài lại.
4. Kiểm tra tình trạng pin (Cài đặt > Pin > Tình trạng pin & Sạc) — pin chai nặng có thể gây sập nguồn đột ngột khi cần dòng điện cao (chơi game, chụp ảnh).
5. Nếu vẫn tiếp diễn sau khi cập nhật/dọn máy, cần kiểm tra phần cứng (main, pin).

**🚫 Tuyệt đối không được làm:** Không khẳng định chắc chắn là lỗi phần mềm hay phần cứng khi chưa kiểm tra tình trạng pin và log sử dụng; không xóa dữ liệu máy khi khách chưa đồng ý và chưa sao lưu.

**💬 Kịch bản tư vấn:** "Dạ hiện tượng này có thể do phần mềm hoặc pin yếu ạ, em đã kiểm tra tình trạng pin và cập nhật hệ điều hành cho mình, mình theo dõi thêm vài ngày xem còn tự khởi động lại không nhé."

**📦 Lưu ý TTBH:** Đã loại trừ nguyên nhân phần mềm/pin chai, hiện tượng vẫn tiếp diễn và máy còn bảo hành: gửi TTBH kiểm tra bo mạch chủ (main).

---

### Touch ID (iPhone SE/8 trở về trước) không nhận diện vân tay
- **ID:** lib-a61
- **Thiết bị:** iPhone
- **Chẩn đoán ngắn:** Cảm biến vân tay ở nút Home bị bẩn/ẩm, vân tay lưu chưa rõ nét, hoặc dây cáp cảm biến bị lỗi sau sửa chữa nút Home.
- **Từ khóa:** touch id, vân tay, không nhận vân tay, nút home

**🔍 Chẩn đoán:** Kiểm tra tay khách có bị ướt/nhiều mồ hôi/kem dưỡng khi đặt vân tay không, xác nhận máy có từng thay nút Home/màn hình gần đây không (Touch ID gắn liền với IC bảo mật của từng máy, thay nút Home không đúng chuẩn sẽ mất Touch ID vĩnh viễn).

**🛠️ Hướng dẫn xử lý:**
1. Lau khô, sạch ngón tay và mặt cảm biến nút Home trước khi thử lại.
2. Vào Cài đặt > Touch ID & Mã khóa, xóa vân tay cũ và đặt lại vân tay mới, đặt nhiều góc ngón tay khi quét.
3. Khởi động lại máy để làm mới cảm biến.
4. Hỏi khách máy có từng sửa/thay nút Home hoặc màn hình ở nơi khác gần đây không.
5. Nếu chưa từng sửa chữa gì mà vẫn không nhận: khả năng cao lỗi cảm biến/dây cáp bên trong.

**🚫 Tuyệt đối không được làm:** Không tự ý thay hoặc hoán đổi nút Home giữa 2 máy khác nhau — Touch ID không thể hoạt động lại nếu đổi nút Home khác máy do liên kết phần cứng bảo mật; không cam kết khôi phục Touch ID nếu máy đã từng thay nút Home không chính hãng.

**💬 Kịch bản tư vấn:** "Dạ Touch ID được mã hóa riêng cho từng máy nên nếu từng thay nút Home ở nơi khác thì sẽ không dùng lại được đâu ạ, mình có thể dùng mật khẩu thường thay thế hoặc thay lại đúng nút Home chính hãng của máy."

**📦 Lưu ý TTBH:** Máy chưa từng sửa chữa nút Home/màn hình, còn bảo hành: gửi TTBH kiểm tra cảm biến Touch ID. Máy từng thay nút Home không chính hãng: không thể khôi phục Touch ID, tư vấn khách chuyển sang dùng mật khẩu.

---

### Cảnh báo "Không thể xác minh phụ kiện này/Pin không xác định" sau khi thay pin/màn hình
- **ID:** lib-a62
- **Thiết bị:** iPhone
- **Chẩn đoán ngắn:** Pin hoặc màn hình thay thế không phải chính hãng Apple, hoặc chính hãng nhưng chưa được cấy/ghép nối IC đúng chuẩn qua phần mềm hiệu chỉnh của Apple.
- **Từ khóa:** không xác minh phụ kiện, pin không xác định, linh kiện không chính hãng, unable to verify

**🔍 Chẩn đoán:** Kiểm tra Cài đặt > Pin (hoặc Cài đặt > Màn hình & Độ sáng) xem có dòng cảnh báo màu vàng cam không; hỏi khách linh kiện được thay ở đâu, có phải chính hãng không.

**🛠️ Hướng dẫn xử lý:**
1. Giải thích rõ cho khách đây là cơ chế cảnh báo bảo mật của Apple, không phải máy bị lỗi hay hư hỏng — máy vẫn dùng bình thường.
2. Thông báo các tính năng có thể bị ảnh hưởng: mất Tình trạng pin chính xác (%), mất True Tone, hoặc một số cảnh báo trên màn hình khóa.
3. Với linh kiện chính hãng nhưng thay ngoài: tư vấn khách có thể mang máy đến nơi có thiết bị hiệu chỉnh (calibration) chính hãng để cấy lại, nếu cửa hàng có hỗ trợ dịch vụ này.
4. Với linh kiện không chính hãng: tư vấn khách cân nhắc thay lại linh kiện chính hãng nếu muốn khôi phục đầy đủ tính năng và độ an toàn.

**🚫 Tuyệt đối không được làm:** Không khẳng định cảnh báo này có thể "xóa vĩnh viễn bằng phần mềm bên thứ 3"; không nói cảnh báo này đồng nghĩa máy sắp hỏng để gây hoang mang không cần thiết cho khách.

**💬 Kịch bản tư vấn:** "Dạ đây là cảnh báo bảo mật vì linh kiện thay thế chưa được hệ thống Apple xác minh chính hãng, máy vẫn dùng được bình thường ạ, chỉ mất một số tính năng đo lường/tự động thôi."

**📦 Lưu ý TTBH:** Máy đã can thiệp linh kiện ngoài sẽ không đủ điều kiện bảo hành chính hãng cho phần đó — không gửi TTBH; tư vấn dịch vụ thay lại linh kiện chính hãng tại cửa hàng nếu khách có nhu cầu.

---

### Mất tiếng micro khi gọi FaceTime/Zalo dù loa ngoài vẫn nghe nhạc bình thường
- **ID:** lib-a63
- **Thiết bị:** iPhone
- **Chẩn đoán ngắn:** Ứng dụng chưa được cấp quyền truy cập Microphone, lỗ micro bị bít bụi/nước, hoặc xung đột phần mềm khi gọi qua ứng dụng bên thứ 3.
- **Từ khóa:** mất tiếng micro, facetime không nghe, mic không hoạt động, gọi video không tiếng

**🔍 Chẩn đoán:** Xác định lỗi xảy ra khi gọi điện thoại thường hay chỉ riêng ứng dụng gọi video (FaceTime/Zalo/Messenger); kiểm tra quyền Microphone của ứng dụng đó.

**🛠️ Hướng dẫn xử lý:**
1. Vào Cài đặt > [Tên ứng dụng, ví dụ Zalo], kiểm tra quyền Microphone đã được bật chưa.
2. Thử ghi âm giọng nói bằng ứng dụng Ghi âm giọng nói (Voice Memos) để kiểm tra micro chính có hoạt động không.
3. Nếu micro hoạt động ở ứng dụng khác nhưng không ở app gọi video cụ thể: gỡ và cài lại ứng dụng đó.
4. Soi đèn pin kiểm tra các lỗ micro (cạnh dưới máy, gần camera sau) có bị bít bụi bẩn không.
5. Kiểm tra ốp lưng/miếng dán có che lỗ micro không.

**🚫 Tuyệt đối không được làm:** Không tự ý dùng vật nhọn chọc vào lỗ micro để "thông"; không cấp quyền Microphone cho ứng dụng lạ không rõ nguồn gốc khi hỗ trợ khách kiểm tra.

**💬 Kịch bản tư vấn:** "Dạ em đã kiểm tra và cấp lại quyền micro cho ứng dụng của mình rồi ạ, mình thử gọi lại xem đối phương đã nghe được tiếng chưa nhé."

**📦 Lưu ý TTBH:** Nếu micro chính (ghi âm bằng Voice Memos) cũng không hoạt động ở mọi ứng dụng, không do quyền/phần mềm: gửi TTBH kiểm tra cụm micro phần cứng.

---

### Không cập nhật được iOS qua OTA, báo thiếu dung lượng hoặc tải xuống bị treo
- **ID:** lib-a64
- **Thiết bị:** iPhone
- **Chẩn đoán ngắn:** Máy không đủ dung lượng trống tạm thời cho gói cập nhật, kết nối mạng không ổn định, hoặc máy chủ Apple đang quá tải vào thời điểm phát hành bản mới.
- **Từ khóa:** cập nhật ios, ota, thiếu dung lượng, tải cập nhật treo

**🔍 Chẩn đoán:** Kiểm tra dung lượng trống hiện tại của máy và dung lượng bản cập nhật yêu cầu; kiểm tra mạng Wi-Fi đang dùng có ổn định không.

**🛠️ Hướng dẫn xử lý:**
1. Vào Cài đặt > Cài đặt chung > Dung lượng iPhone, kiểm tra dung lượng trống — cần trống nhiều hơn dung lượng bản cập nhật yêu cầu.
2. Nếu thiếu dung lượng: gỡ tạm vài ứng dụng ít dùng hoặc video/ảnh nặng (đã sao lưu) để giải phóng chỗ trống, cài lại sau khi cập nhật xong.
3. Đảm bảo máy kết nối Wi-Fi ổn định (không dùng dữ liệu di động cho bản cập nhật lớn) và cắm sạc trong suốt quá trình.
4. Nếu tải bị treo: vào Cài đặt > Cài đặt chung > Cập nhật phần mềm, xóa bản tải dở rồi tải lại.
5. Nếu vẫn lỗi, thử cập nhật qua máy tính bằng Finder/iTunes thay vì OTA.

**🚫 Tuyệt đối không được làm:** Không rút sạc hoặc tắt máy khi thanh tiến trình cập nhật đang chạy dở; không xóa dữ liệu quan trọng của khách mà chưa xác nhận đã sao lưu.

**💬 Kịch bản tư vấn:** "Dạ máy mình cần thêm dung lượng trống để tải bản cập nhật ạ, em hỗ trợ dọn bớt và cập nhật lại cho mình, dữ liệu quan trọng mình yên tâm không bị mất."

**📦 Lưu ý TTBH:** Đây là lỗi phần mềm/dung lượng thông thường, không cần gửi TTBH.

---

### Định vị GPS sai vị trí hoặc la bàn chỉ sai hướng
- **ID:** lib-a65
- **Thiết bị:** iPhone
- **Chẩn đoán ngắn:** Nhiễu từ trường do ốp lưng có nam châm/kim loại, chưa hiệu chuẩn la bàn, hoặc tín hiệu GPS yếu do ở trong nhà/tòa nhà cao tầng.
- **Từ khóa:** gps sai, định vị sai, la bàn sai hướng, compass

**🔍 Chẩn đoán:** Kiểm tra khách đang ở trong nhà/hầm hay ngoài trời thoáng khi gặp lỗi định vị; kiểm tra ốp lưng/phụ kiện có gắn nam châm (ví, MagSafe...) không.

**🛠️ Hướng dẫn xử lý:**
1. Ra khu vực thoáng, ngoài trời để có tín hiệu GPS/vệ tinh tốt hơn, tránh nhà cao tầng, hầm, gần thiết bị điện từ mạnh.
2. Tháo thử ốp lưng, ví đựng thẻ từ hoặc phụ kiện có nam châm rồi kiểm tra lại la bàn.
3. Mở ứng dụng La bàn, thực hiện thao tác hiệu chuẩn bằng cách xoay máy theo hình số 8 khi có yêu cầu trên màn hình.
4. Kiểm tra Cài đặt > Quyền riêng tư & Bảo mật > Dịch vụ định vị đã bật cho ứng dụng Bản đồ/La bàn chưa.
5. Khởi động lại máy nếu đã thử các bước trên mà vẫn sai lệch.

**🚫 Tuyệt đối không được làm:** Không khẳng định máy lỗi phần cứng ngay khi khách đang dùng ốp có nam châm hoặc đang ở khu vực tín hiệu yếu; không tắt vĩnh viễn Dịch vụ định vị của khách mà không hỏi ý kiến.

**💬 Kịch bản tư vấn:** "Dạ em đã hướng dẫn mình hiệu chuẩn lại la bàn và kiểm tra phụ kiện gây nhiễu rồi ạ, mình thử lại ở khu vực thoáng xem định vị đã chính xác chưa nhé."

**📦 Lưu ý TTBH:** Đã loại trừ nguyên nhân môi trường/phụ kiện nhiễu từ mà vẫn sai lệch liên tục: gửi TTBH kiểm tra cảm biến la bàn/GPS.

---

### Không thanh toán được bằng Apple Pay dù đã thêm thẻ (chạm NFC không phản hồi)
- **ID:** lib-a66
- **Thiết bị:** iPhone
- **Chẩn đoán ngắn:** Antenna NFC bị lỗi/che khuất bởi ốp lưng dày, máy POS không hỗ trợ đúng chuẩn, hoặc chưa đặt đúng thẻ mặc định/xác thực Face ID-Touch ID khi thanh toán.
- **Từ khóa:** apple pay, thanh toán không chạm, nfc không hoạt động, chạm thanh toán

**🔍 Chẩn đoán:** Xác nhận máy POS của cửa hàng khác có hỗ trợ thanh toán không chạm (contactless) không; kiểm tra khách có đang dùng ốp lưng dày/có tấm chắn kim loại không.

**🛠️ Hướng dẫn xử lý:**
1. Tháo ốp lưng, thử chạm lại khu vực gần camera sau (vị trí ăng-ten NFC) vào máy POS.
2. Xác nhận đã bấm đúp nút nguồn (hoặc nút Home với máy có Touch ID) để mở màn hình thanh toán Apple Pay trước khi chạm, không chỉ đơn thuần mở Ví.
3. Xác thực bằng Face ID/Touch ID khi có yêu cầu, giữ máy chạm ổn định 1-2 giây, không đưa quá xa hoặc quá gần cảm biến POS.
4. Kiểm tra thẻ trong Ví (Wallet) chưa hết hạn/còn hoạt động qua ứng dụng ngân hàng.
5. Thử tại một máy POS khác để loại trừ do đầu đọc thẻ tại điểm đó.

**🚫 Tuyệt đối không được làm:** Không yêu cầu khách cung cấp thông tin thẻ, mã OTP ngân hàng qua điện thoại/tin nhắn để "hỗ trợ kiểm tra"; không tự ý thao tác trên ứng dụng ngân hàng của khách.

**💬 Kịch bản tư vấn:** "Dạ mình thử tháo ốp và mở đúng màn hình thanh toán Apple Pay trước khi chạm nhé, đa số trường hợp là do ốp dày che ăng-ten hoặc chưa mở đúng màn hình thanh toán thôi ạ."

**📦 Lưu ý TTBH:** Đã loại trừ ốp/quy trình thao tác mà vẫn không chạm được ở nhiều máy POS khác nhau: gửi TTBH kiểm tra ăng-ten NFC.

---

### Khung viền/khung máy bị móp cong do rơi, nắp lưng/màn hình lắp không khít
- **ID:** lib-a67
- **Thiết bị:** iPhone
- **Chẩn đoán ngắn:** Va đập mạnh làm biến dạng khung nhôm/thép bên trong, ảnh hưởng độ kín khít và khả năng chống nước của máy.
- **Từ khóa:** móp khung, cong khung, rơi vỡ, lắp không khít, khung viền

**🔍 Chẩn đoán:** Quan sát bằng mắt vị trí móp, kiểm tra độ hở giữa màn hình/nắp lưng với khung viền, hỏi khách thời điểm và độ cao rơi máy.

**🛠️ Hướng dẫn xử lý:**
1. Quan sát và chụp ảnh lại vị trí móp cong, mức độ hở giữa các khe ghép để lưu hồ sơ tình trạng máy trước khi sửa.
2. Thông báo ngay cho khách: khung đã móp gần như chắc chắn làm mất khả năng chống nước/bụi nguyên bản của máy dù có ép khít lại.
3. Kiểm tra các chức năng khác có bị ảnh hưởng theo không (nút bấm gần khu vực móp có bị kẹt không, màn hình có xuất hiện ám/sọc không).
4. Tư vấn phương án: nắn/ép lại khung (thẩm mỹ tạm thời, không đảm bảo phục hồi 100% và không phục hồi chống nước) hoặc thay khung mới (chi phí cao hơn nhưng đảm bảo hơn).

**🚫 Tuyệt đối không được làm:** Không cam kết ép/nắn khung sẽ khôi phục 100% khả năng chống nước như máy mới; không dùng lực mạnh cố nắn thẳng khung khi máy còn gắn màn hình/pin bên trong nếu chưa tháo đúng quy trình.

**💬 Kịch bản tư vấn:** "Dạ khung máy mình bị móp do va đập rồi ạ, em có thể hỗ trợ ép/nắn lại cho khít hơn nhưng sẽ không đảm bảo chống nước như ban đầu, mình cân nhắc phương án thay khung nếu muốn chắc chắn hơn nhé."

**📦 Lưu ý TTBH:** Móp méo do rơi/va đập là lỗi ngoại lực, không thuộc diện bảo hành — không gửi TTBH; tư vấn dịch vụ sửa chữa trả phí tại cửa hàng.

---

### Bàn phím MacBook dính phím, gõ nhảy hoặc lặp ký tự sau khi đổ nước/cà phê
- **ID:** lib-a68
- **Thiết bị:** Mac
- **Chẩn đoán ngắn:** Chất lỏng (nước, cà phê, trà sữa...) đổ vào bàn phím làm dính cơ chế phím bấm hoặc gây chập mạch tạm thời.
- **Từ khóa:** bàn phím dính, đổ nước, đổ cà phê, nhảy phím, macbook

**🔍 Chẩn đoán:** Hỏi khách thời điểm đổ chất lỏng, loại chất lỏng (nước lọc ít rủi ro hơn nước ngọt/cà phê có đường dễ dính), và máy đã tắt nguồn ngay hay vẫn dùng tiếp sau khi đổ.

**🛠️ Hướng dẫn xử lý:**
1. Nếu khách vừa đổ chất lỏng, hướng dẫn tắt nguồn máy ngay lập tức, không gõ thử để kiểm tra.
2. Dựng máy hình chữ V ngược (như mái nhà) để chất lỏng chảy ra ngoài, không lật ngửa lại.
3. Không sấy nóng trực tiếp, để máy khô tự nhiên tối thiểu 24-48 giờ ở nơi thoáng trước khi bật lại.
4. Nếu máy đã bật lại và bị dính/nhảy phím, ghi nhận các phím cụ thể bị ảnh hưởng để báo kỹ thuật kiểm tra.
5. Với chất lỏng có đường (cà phê, nước ngọt): luôn cần vệ sinh sâu vì đường sẽ kết tinh gây dính về sau dù hiện tại có vẻ bình thường.

**🚫 Tuyệt đối không được làm:** Không dùng máy sấy tóc/nhiệt cao sấy trực tiếp; không cố gõ liên tục để "thử xem còn dính không" khi máy vừa bị đổ chất lỏng; không cắm sạc khi máy còn ẩm.

**💬 Kịch bản tư vấn:** "Dạ trường hợp đổ chất lỏng vào bàn phím cần vệ sinh sâu bên trong để tránh dính/ăn mòn về sau ạ, em sẽ kiểm tra và báo lại tình trạng cụ thể cho mình."

**📦 Lưu ý TTBH:** Đổ chất lỏng là lỗi ngoại lực, không thuộc diện bảo hành — tư vấn dịch vụ vệ sinh/sửa chữa trả phí tại cửa hàng, không gửi TTBH.

---

### Loa MacBook rè hoặc mất tiếng một bên
- **ID:** lib-a69
- **Thiết bị:** Mac
- **Chẩn đoán ngắn:** Loa bị lỗi phần cứng, hoặc cài đặt âm thanh/cân bằng loa (balance) bị lệch.
- **Từ khóa:** loa rè, mất tiếng, loa macbook, âm thanh lệch

**🔍 Chẩn đoán:** Kiểm tra Cài đặt Hệ thống > Âm thanh > Đầu ra, xem thanh cân bằng (Balance) có bị lệch hẳn về 1 bên không; thử phát nhạc/video để xác nhận bên nào bị rè/mất tiếng.

**🛠️ Hướng dẫn xử lý:**
1. Vào Cài đặt Hệ thống > Âm thanh > Đầu ra, kiểm tra thanh trượt Cân bằng đang ở giữa hay lệch.
2. Kiểm tra không có thiết bị Bluetooth/AirPlay nào đang kết nối gây chuyển hướng âm thanh nhầm.
3. Khởi động lại máy để làm mới driver âm thanh.
4. Vào Launchpad > Other > Audio MIDI Setup, kiểm tra cấu hình thiết bị âm thanh mặc định có đúng loa trong máy không.
5. Nếu đã kiểm tra hết cài đặt mà vẫn rè/mất tiếng 1 bên, khả năng lỗi phần cứng loa.

**🚫 Tuyệt đối không được làm:** Không khẳng định hỏng loa ngay khi chưa kiểm tra thanh cân bằng âm thanh; không tháo máy kiểm tra loa nếu không được đào tạo phần cứng.

**💬 Kịch bản tư vấn:** "Dạ em đã kiểm tra cài đặt âm thanh của máy mình rồi ạ, nếu vẫn còn rè/mất tiếng một bên thì khả năng cao là lỗi loa vật lý, em cần kiểm tra sâu hơn."

**📦 Lưu ý TTBH:** Đã loại trừ nguyên nhân cài đặt, máy còn bảo hành và không có dấu hiệu vào nước/va đập: gửi TTBH kiểm tra cụm loa.

---

### Webcam MacBook không hoạt động hoặc hình ảnh mờ/nhiễu xanh
- **ID:** lib-a70
- **Thiết bị:** Mac
- **Chẩn đoán ngắn:** Ứng dụng chưa được cấp quyền Camera, xung đột phần mềm gọi video, hoặc cảm biến camera bị lỗi/bám bụi.
- **Từ khóa:** webcam lỗi, camera mac không hoạt động, hình mờ, facetime camera

**🔍 Chẩn đoán:** Kiểm tra đèn báo camera (đèn xanh cạnh webcam) có sáng khi mở ứng dụng gọi video không; xác định lỗi xảy ra ở mọi ứng dụng hay chỉ riêng 1 app.

**🛠️ Hướng dẫn xử lý:**
1. Vào Cài đặt Hệ thống > Quyền riêng tư & Bảo mật > Camera, kiểm tra ứng dụng đang dùng đã được cấp quyền chưa.
2. Mở ứng dụng Photo Booth có sẵn trên máy để kiểm tra camera hoạt động độc lập với app khác không.
3. Đóng hoàn toàn các ứng dụng khác có thể đang chiếm quyền dùng camera (chỉ 1 ứng dụng dùng được camera tại một thời điểm).
4. Lau nhẹ vùng camera bằng khăn microfiber khô nếu hình ảnh bị mờ/bụi bẩn.
5. Khởi động lại máy để làm mới driver camera.

**🚫 Tuyệt đối không được làm:** Không cấp quyền Camera cho ứng dụng lạ không rõ nguồn gốc; không tháo/cạy viền màn hình để kiểm tra camera nếu không được đào tạo phần cứng.

**💬 Kịch bản tư vấn:** "Dạ em đã kiểm tra quyền camera và thử qua Photo Booth cho mình rồi ạ, nếu vẫn còn lỗi thì khả năng cao do phần cứng camera, em cần kiểm tra thêm."

**📦 Lưu ý TTBH:** Đã loại trừ quyền/phần mềm mà camera vẫn không hoạt động hoặc mờ nặng, máy còn bảo hành: gửi TTBH kiểm tra cụm camera.

---

### Micro MacBook không thu được âm thanh khi gọi Zoom/FaceTime/Teams
- **ID:** lib-a71
- **Thiết bị:** Mac
- **Chẩn đoán ngắn:** Ứng dụng chưa được cấp quyền Microphone, sai thiết bị micro mặc định trong cài đặt, hoặc lỗ micro bị bụi bẩn che khuất.
- **Từ khóa:** mất tiếng micro mac, micro không hoạt động, zoom không nghe, teams

**🔍 Chẩn đoán:** Kiểm tra Cài đặt Hệ thống > Quyền riêng tư & Bảo mật > Microphone đã cấp quyền cho ứng dụng đang dùng chưa; xác định lỗi ở 1 ứng dụng hay toàn bộ.

**🛠️ Hướng dẫn xử lý:**
1. Vào Cài đặt Hệ thống > Âm thanh > Đầu vào, kiểm tra đã chọn đúng "Microphone" tích hợp (không phải micro ngoài không cắm hoặc tai nghe Bluetooth chưa kết nối) chưa.
2. Cấp quyền Microphone cho ứng dụng gọi video trong Cài đặt Hệ thống > Quyền riêng tư & Bảo mật > Microphone.
3. Test thử bằng ứng dụng Voice Memos (Ghi âm giọng nói) có sẵn để xác nhận micro phần cứng còn hoạt động.
4. Gỡ và cài lại ứng dụng gọi video nếu chỉ lỗi riêng ứng dụng đó.
5. Kiểm tra lỗ micro (thường ở cạnh trên bàn phím hoặc gần loa) có bị bụi/vật che khuất không.

**🚫 Tuyệt đối không được làm:** Không tự ý chọc vật vào lỗ micro để "thông"; không cấp quyền Microphone cho ứng dụng lạ không rõ nguồn gốc.

**💬 Kịch bản tư vấn:** "Dạ em đã kiểm tra và cấp lại quyền micro, chọn đúng thiết bị đầu vào cho máy mình rồi ạ, mình thử gọi lại xem đối phương nghe được chưa nhé."

**📦 Lưu ý TTBH:** Micro không hoạt động ở cả Voice Memos (test độc lập), đã loại trừ quyền/cài đặt, máy còn bảo hành: gửi TTBH kiểm tra cụm micro.

---

### MacBook không kết nối được Wi-Fi hoặc mạng chập chờn liên tục
- **ID:** lib-a72
- **Thiết bị:** Mac
- **Chẩn đoán ngắn:** Xung đột cấu hình mạng, vị trí router yếu sóng, hoặc lỗi driver Wi-Fi sau cập nhật macOS.
- **Từ khóa:** wifi chập chờn, mất kết nối mạng, macbook không vào wifi

**🔍 Chẩn đoán:** Kiểm tra các thiết bị khác cùng mạng Wi-Fi đó có bị chập chờn không (loại trừ do router), và xem biểu tượng Wi-Fi trên máy có hiện dấu chấm than không.

**🛠️ Hướng dẫn xử lý:**
1. Tắt Wi-Fi rồi bật lại trên máy, thử quên mạng (Forget This Network) và kết nối lại từ đầu.
2. Khởi động lại router/modem nếu các thiết bị khác cũng bị chập chờn.
3. Vào Cài đặt Hệ thống > Wi-Fi > chi tiết (i), kiểm tra địa chỉ IP có nhận được không (DHCP lease failed là dấu hiệu lỗi xin IP).
4. Đặt lại cài đặt mạng: xóa và tạo lại vị trí mạng mới trong Cài đặt Hệ thống > Mạng.
5. Kiểm tra bản cập nhật macOS mới nhất — Apple thường vá lỗi Wi-Fi qua các bản cập nhật.

**🚫 Tuyệt đối không được làm:** Không khẳng định lỗi phần cứng Wi-Fi khi chưa loại trừ nguyên nhân từ router/mạng; không thay đổi cấu hình mạng công ty/khách sạn khi chưa được phép.

**💬 Kịch bản tư vấn:** "Dạ em đã thử kết nối lại mạng và kiểm tra cấu hình cho máy mình rồi ạ, mình thử dùng thêm ở mạng khác xem có ổn định hơn không nhé để mình xác định rõ nguyên nhân."

**📦 Lưu ý TTBH:** Wifi chập chờn ở nhiều mạng khác nhau, đã loại trừ phần mềm/cấu hình, máy còn bảo hành: gửi TTBH kiểm tra card Wi-Fi/anten.

---

### Mac báo "Đĩa khởi động gần đầy" dù dữ liệu người dùng không nhiều
- **ID:** lib-a73
- **Thiết bị:** Mac
- **Chẩn đoán ngắn:** Bộ nhớ cache hệ thống, file tạm, hoặc dữ liệu "Khác" (ảnh iCloud, thư mục ẩn) chiếm dung lượng lớn dù file người dùng thấy được không nhiều.
- **Từ khóa:** đĩa khởi động đầy, hết dung lượng mac, storage almost full

**🔍 Chẩn đoán:** Vào Apple Menu > Giới thiệu về máy Mac này > Lưu trữ, xem biểu đồ phân loại dung lượng đang chiếm nhiều nhất ở mục nào (Ứng dụng, Tài liệu, Hệ thống, Khác...).

**🛠️ Hướng dẫn xử lý:**
1. Xem chi tiết biểu đồ Lưu trữ để biết mục nào (Hệ thống/Khác/iCloud) đang chiếm dung lượng bất thường.
2. Dọn thùng rác (Trash) — file xóa vẫn chiếm dung lượng cho đến khi dọn sạch thùng rác.
3. Kiểm tra và dọn bớt ảnh/video trong thư viện Photos nếu đang lưu trữ toàn bộ nội dung gốc trên máy thay vì tối ưu iCloud.
4. Sử dụng gợi ý tối ưu hóa lưu trữ có sẵn của macOS (mục "Đề xuất" trong màn hình Lưu trữ) như dọn tự động file tải về cũ.
5. Khởi động lại máy sau khi dọn dẹp để hệ thống cập nhật lại dung lượng hiển thị chính xác.

**🚫 Tuyệt đối không được làm:** Không xóa các thư mục hệ thống ẩn (Library, System) mà không rõ tác dụng; không xóa dữ liệu người dùng khi chưa xác nhận đã sao lưu.

**💬 Kịch bản tư vấn:** "Dạ máy mình báo đầy do một số dữ liệu hệ thống/ảnh chiếm dung lượng chứ không phải hỏng ổ cứng ạ, em hỗ trợ dọn bớt giúp mình nhé."

**📦 Lưu ý TTBH:** Đây là vấn đề dung lượng lưu trữ thông thường, không cần gửi TTBH.

---

### Time Machine sao lưu lỗi hoặc không nhận diện ổ đĩa sao lưu
- **ID:** lib-a74
- **Thiết bị:** Mac
- **Chẩn đoán ngắn:** Ổ đĩa sao lưu bị ngắt kết nối/lỗi định dạng, cấu hình Time Machine bị lỗi, hoặc ổ đĩa mạng (NAS) mất kết nối.
- **Từ khóa:** time machine lỗi, sao lưu không hoạt động, ổ đĩa sao lưu

**🔍 Chẩn đoán:** Xác định ổ sao lưu là ổ cứng ngoài cắm trực tiếp hay ổ mạng (NAS/Time Capsule); kiểm tra ổ đĩa còn được máy nhận diện trong Finder không.

**🛠️ Hướng dẫn xử lý:**
1. Kiểm tra cáp/kết nối ổ cứng ngoài, thử cổng USB khác hoặc cáp khác.
2. Vào Cài đặt Hệ thống > Chung > Time Machine, kiểm tra đã chọn đúng ổ đĩa sao lưu chưa.
3. Nếu là ổ mạng, kiểm tra máy và ổ NAS có cùng mạng Wi-Fi/LAN không, thử kết nối lại thủ công qua Finder > Go > Connect to Server.
4. Kiểm tra định dạng ổ đĩa có tương thích (Mac OS Extended hoặc APFS) không — ổ định dạng cho Windows (NTFS) sẽ không dùng được cho Time Machine.
5. Nếu báo lỗi bản sao lưu bị hỏng, có thể cần bắt đầu sao lưu mới (mất lịch sử sao lưu cũ nhưng đảm bảo sao lưu tiếp tục hoạt động).

**🚫 Tuyệt đối không được làm:** Không định dạng lại (format/xóa) ổ đĩa sao lưu khi chưa xác nhận với khách là được phép, vì sẽ mất toàn bộ lịch sử sao lưu cũ; không rút ổ đĩa giữa lúc đang sao lưu.

**💬 Kịch bản tư vấn:** "Dạ em đã kiểm tra kết nối và cấu hình Time Machine cho máy mình rồi ạ, nếu ổ sao lưu cũ có vấn đề thì mình cân nhắc dùng ổ mới để đảm bảo dữ liệu được sao lưu an toàn."

**📦 Lưu ý TTBH:** Đây là lỗi phần mềm/ổ đĩa ngoài, không thuộc diện bảo hành máy Mac — không gửi TTBH.

---

### Touch ID trên MacBook không nhận diện vân tay
- **ID:** lib-a75
- **Thiết bị:** Mac
- **Chẩn đoán ngắn:** Cảm biến Touch ID bị bẩn/ẩm, vân tay lưu chưa rõ nét, hoặc lỗi phần mềm bảo mật (Secure Enclave) cần khởi động lại.
- **Từ khóa:** touch id mac không nhận, vân tay macbook, touch id lỗi

**🔍 Chẩn đoán:** Kiểm tra tay khách có ướt/nhiều kem dưỡng khi đặt vân tay không; xác định máy có từng sửa chữa bàn phím/Touch ID gần đây không.

**🛠️ Hướng dẫn xử lý:**
1. Lau khô, sạch ngón tay và mặt cảm biến Touch ID trước khi thử lại.
2. Vào Cài đặt Hệ thống > Touch ID & Mật khẩu, xóa vân tay cũ và đặt lại vân tay mới với nhiều góc ngón tay.
3. Khởi động lại máy để làm mới Secure Enclave.
4. Hỏi khách máy có từng sửa/thay bàn phím (nơi tích hợp Touch ID) ở nơi khác không.
5. Nếu chưa từng sửa chữa mà vẫn không nhận: khả năng lỗi cảm biến/phần cứng.

**🚫 Tuyệt đối không được làm:** Không tự ý thay bàn phím tích hợp Touch ID giữa 2 máy khác nhau — tương tự iPhone, Touch ID gắn với Secure Enclave riêng của từng máy.

**💬 Kịch bản tư vấn:** "Dạ em đã đặt lại vân tay và khởi động lại máy cho mình rồi ạ, mình thử lại xem đã nhận diện được chưa nhé."

**📦 Lưu ý TTBH:** Máy chưa từng sửa chữa bàn phím/Touch ID, còn bảo hành: gửi TTBH kiểm tra cảm biến. Máy từng thay bàn phím không chính hãng: khó khôi phục, tư vấn dùng mật khẩu thay thế.

---

### MacBook cắm sạc nhưng không tăng phần trăm pin (đèn cáp vẫn sáng)
- **ID:** lib-a76
- **Thiết bị:** Mac
- **Chẩn đoán ngắn:** Cáp/củ sạc lỗi, cổng sạc bám bụi/hỏng, hoặc IC quản lý sạc (SMC) gặp lỗi tạm thời.
- **Từ khóa:** không sạc được macbook, cắm sạc không lên pin, sạc macbook lỗi

**🔍 Chẩn đoán:** Kiểm tra đèn báo trên cáp MagSafe/đầu sạc USB-C (nếu có) có sáng khi cắm không; xem % pin có tăng dù rất chậm hay đứng yên hoàn toàn.

**🛠️ Hướng dẫn xử lý:**
1. Thử cáp và củ sạc chính hãng khác để loại trừ lỗi phụ kiện.
2. Soi đèn pin kiểm tra cổng sạc có bụi bẩn/dị vật không, vệ sinh nhẹ nếu cần.
3. Reset SMC (System Management Controller) theo hướng dẫn tương ứng với dòng máy (quy trình khác nhau giữa máy có chip Apple Silicon và Intel).
4. Kiểm tra Cài đặt Hệ thống > Pin, xem có cảnh báo "Dịch vụ pin" (Service Battery) hay thông báo bất thường nào không.
5. Theo dõi thêm 15-20 phút để loại trừ trường hợp máy đang sạc rất chậm do vừa dùng hết pin sâu.

**🚫 Tuyệt đối không được làm:** Không tự ý tháo pin/khui máy nếu không được đào tạo phần cứng; không khẳng định hỏng pin ngay khi chưa thử cáp/củ sạc khác.

**💬 Kịch bản tư vấn:** "Dạ em đã thử sạc bằng phụ kiện khác và reset lại hệ thống quản lý nguồn cho máy mình rồi ạ, nếu vẫn không lên pin thì em cần kiểm tra sâu hơn về mạch sạc."

**📦 Lưu ý TTBH:** Đã loại trừ cáp/củ sạc/SMC mà vẫn không sạc được, máy còn bảo hành: gửi TTBH kiểm tra mạch sạc/pin.

---

### Ứng dụng trên Mac bị treo, hiện "Không phản hồi" (Not Responding) liên tục
- **ID:** lib-a77
- **Thiết bị:** Mac
- **Chẩn đoán ngắn:** Ứng dụng gặp xung đột bộ nhớ, phiên bản ứng dụng lỗi thời không tương thích macOS, hoặc file dữ liệu ứng dụng bị hỏng.
- **Từ khóa:** ứng dụng treo mac, not responding, app đơ macbook

**🔍 Chẩn đoán:** Xác định 1 ứng dụng cụ thể hay nhiều ứng dụng đều bị treo; kiểm tra ứng dụng đã cập nhật phiên bản mới nhất chưa.

**🛠️ Hướng dẫn xử lý:**
1. Nhấn Cmd+Option+Esc để mở Buộc thoát ứng dụng (Force Quit), chọn ứng dụng đang treo và thoát.
2. Mở lại ứng dụng, kiểm tra và cập nhật lên phiên bản mới nhất qua App Store hoặc trang chủ nhà phát triển.
3. Nếu treo liên tục, gỡ cài đặt và cài lại ứng dụng đó.
4. Kiểm tra dung lượng ổ đĩa còn trống và bộ nhớ RAM đang sử dụng qua Activity Monitor (Giám sát hoạt động).
5. Khởi động lại máy để làm mới toàn bộ tiến trình hệ thống.

**🚫 Tuyệt đối không được làm:** Không ép tắt nguồn bằng cách giữ nút nguồn khi ứng dụng chỉ đơn thuần treo (ưu tiên Force Quit trước) để tránh mất dữ liệu chưa lưu của các ứng dụng khác.

**💬 Kịch bản tư vấn:** "Dạ em đã buộc thoát và cập nhật lại ứng dụng cho máy mình rồi ạ, mình dùng thử lại xem còn bị treo không nhé."

**📦 Lưu ý TTBH:** Đây là lỗi phần mềm ứng dụng thông thường, không cần gửi TTBH.

---

### Cập nhật macOS bị treo hoặc báo lỗi khi cài đặt
- **ID:** lib-a78
- **Thiết bị:** Mac
- **Chẩn đoán ngắn:** Dung lượng trống không đủ, kết nối mạng gián đoạn giữa chừng, hoặc file cập nhật tải về bị lỗi.
- **Từ khóa:** cập nhật macos lỗi, macos treo cập nhật, update macos treo

**🔍 Chẩn đoán:** Kiểm tra dung lượng trống hiện tại và dung lượng bản cập nhật yêu cầu; xác định máy đang treo ở bước tải xuống hay bước cài đặt/khởi động lại.

**🛠️ Hướng dẫn xử lý:**
1. Kiểm tra Apple Menu > Giới thiệu về máy Mac này > Lưu trữ, đảm bảo đủ dung lượng trống (thường cần vài chục GB tùy phiên bản).
2. Đảm bảo máy kết nối mạng ổn định và cắm sạc trong suốt quá trình cập nhật.
3. Nếu treo lâu ở màn hình thanh tiến trình, chờ tối thiểu 30-60 phút trước khi can thiệp (cập nhật lớn có thể mất nhiều thời gian).
4. Nếu thực sự treo cứng, khởi động vào Chế độ khôi phục (Recovery Mode: giữ nguồn hoặc Cmd+R tùy dòng máy) để cài đặt lại macOS.
5. Kiểm tra và xóa bản cập nhật tải dở trong Cài đặt Hệ thống > Cập nhật phần mềm rồi tải lại.

**🚫 Tuyệt đối không được làm:** Không ngắt nguồn hoặc rút sạc khi thanh tiến trình cập nhật đang chạy, kể cả khi có vẻ như đứng yên lâu; không tự ý cài đặt lại macOS khi chưa xác nhận khách đã sao lưu dữ liệu.

**💬 Kịch bản tư vấn:** "Dạ quá trình cập nhật lớn có thể mất thời gian ạ, mình vui lòng để máy yên và cắm sạc, nếu quá lâu không lên được thì em sẽ hỗ trợ cài đặt lại qua chế độ khôi phục."

**📦 Lưu ý TTBH:** Đây là lỗi phần mềm/cập nhật thông thường, không cần gửi TTBH.

---

### Vỏ máy/bản lề MacBook bị nứt, hở ốc sau thời gian sử dụng dài
- **ID:** lib-a79
- **Thiết bị:** Mac
- **Chẩn đoán ngắn:** Hao mòn tự nhiên qua thời gian, va đập nhẹ tích lũy, hoặc ốc vít bị lỏng dần do đóng mở máy nhiều.
- **Từ khóa:** vỏ máy nứt, hở ốc, vỏ macbook, bản lề nứt

**🔍 Chẩn đoán:** Quan sát vị trí nứt/hở ốc, kiểm tra có ảnh hưởng đến độ chắc chắn khi cầm/gõ máy không, hỏi khách máy dùng bao lâu và tần suất mang đi lại.

**🛠️ Hướng dẫn xử lý:**
1. Chụp ảnh lưu lại tình trạng nứt/hở ốc hiện tại trước khi thao tác thêm.
2. Kiểm tra các ốc vít xung quanh khu vực nứt có bị lỏng/thiếu ốc không.
3. Đánh giá mức độ ảnh hưởng: chỉ thẩm mỹ hay đã ảnh hưởng đến độ chắc chắn/an toàn khi sử dụng.
4. Tư vấn phương án: siết lại ốc, dán/ép lại vỏ (thẩm mỹ tạm thời), hoặc thay vỏ máy mới tùy mức độ.

**🚫 Tuyệt đối không được làm:** Không tự ý siết chặt quá lực các ốc vít gần bo mạch/pin vì có thể làm hỏng linh kiện bên trong; không cam kết vỏ nứt có thể phục hồi nguyên bản 100%.

**💬 Kịch bản tư vấn:** "Dạ vỏ máy mình bị hao mòn theo thời gian sử dụng ạ, em tư vấn phương án khắc phục phù hợp, mình cân nhắc thay vỏ mới nếu muốn chắc chắn và thẩm mỹ hơn."

**📦 Lưu ý TTBH:** Hao mòn tự nhiên theo thời gian thường không thuộc diện bảo hành lỗi nhà sản xuất — tư vấn dịch vụ sửa chữa trả phí; nếu nứt bất thường sớm và máy còn bảo hành, có thể đề xuất khách liên hệ TTBH để đánh giá thêm.

---

### Quạt tản nhiệt MacBook kêu to bất thường dù không chạy tác vụ nặng, hoặc có mùi khét
- **ID:** lib-a80
- **Thiết bị:** Mac
- **Chẩn đoán ngắn:** Quạt bám bụi lâu ngày gây mất cân bằng khi quay, keo tản nhiệt khô, hoặc có dấu hiệu chập linh kiện (mùi khét).
- **Từ khóa:** quạt kêu to, mùi khét, quá nhiệt, macbook nóng

**🔍 Chẩn đoán:** Đây là tình huống cần ưu tiên nếu có MÙI KHÉT — hỏi khách rõ có ngửi thấy mùi khét/nhựa cháy không, quạt kêu to xảy ra khi nào (mở máy lên ngay hay sau khi dùng lâu).

**🛠️ Hướng dẫn xử lý:**
1. Nếu khách báo có MÙI KHÉT: yêu cầu tắt máy ngay lập tức, không sử dụng tiếp, chuyển bộ phận kỹ thuật kiểm tra khẩn.
2. Nếu chỉ quạt kêu to không mùi lạ: mở Activity Monitor kiểm tra có ứng dụng nào đang chiếm CPU cao bất thường không.
3. Kiểm tra khe thông gió có bị che (đặt trên gối, chăn) hoặc bám nhiều bụi không.
4. Đề xuất vệ sinh quạt tản nhiệt chuyên sâu tại xưởng kỹ thuật nếu máy dùng lâu chưa vệ sinh lần nào.
5. Theo dõi nhiệt độ máy qua ứng dụng giám sát nếu nghi ngờ quá nhiệt.

**🚫 Tuyệt đối không được làm:** Không tiếp tục dùng hoặc sạc máy khi đã phát hiện mùi khét; không tự ý xịt bất kỳ dung dịch nào vào khe tản nhiệt.

**💬 Kịch bản tư vấn:** "Dạ nếu máy có mùi khét thì mình cần ngừng sử dụng ngay ạ để đảm bảo an toàn, em sẽ ưu tiên kiểm tra ngay cho mình. Còn nếu chỉ quạt kêu to bình thường thì khả năng do bám bụi, em vệ sinh lại giúp mình."

**📦 Lưu ý TTBH:** Có mùi khét/dấu hiệu chập linh kiện: gửi TTBH khẩn ngay, không thao tác thêm tại cửa hàng. Chỉ bám bụi thông thường: vệ sinh trả phí tại cửa hàng.

---

### Trackpad MacBook bị rơ, click đúp không ăn hoặc phát tiếng lạch cạch khi nhấn
- **ID:** lib-a81
- **Thiết bị:** Mac
- **Chẩn đoán ngắn:** Cơ chế Force Touch/Taptic Engine của trackpad bị lỏng, hoặc cài đặt độ nhạy click chưa phù hợp.
- **Từ khóa:** trackpad rơ, trackpad kêu, click đúp không ăn, force touch

**🔍 Chẩn đoán:** Kiểm tra máy dùng trackpad có Force Touch (không lún vật lý, dùng cảm biến áp lực + rung phản hồi) hay trackpad cơ học đời cũ; xác định click đúp lỗi ở toàn màn hình hay chỉ 1 khu vực trackpad.

**🛠️ Hướng dẫn xử lý:**
1. Vào Cài đặt Hệ thống > Trackpad, kiểm tra và điều chỉnh độ nhạy Click (Click Pressure: Light/Medium/Firm).
2. Kiểm tra tính năng Force Click & Haptic Feedback đã bật đúng mức mong muốn chưa.
3. Vệ sinh bề mặt trackpad bằng khăn microfiber khô, kiểm tra có dị vật kẹt dưới viền trackpad không.
4. Khởi động lại máy để làm mới driver trackpad.
5. Nếu chỉ 1 khu vực trackpad phản hồi kém/kêu lạch cạch bất thường, ghi nhận vị trí cụ thể để báo kỹ thuật.

**🚫 Tuyệt đối không được làm:** Không ấn mạnh nhiều lần liên tục để "test" khi nghi ngờ trackpad lỗi cơ, có thể làm nặng thêm tình trạng lỏng; không tháo trackpad nếu không được đào tạo phần cứng.

**💬 Kịch bản tư vấn:** "Dạ em đã kiểm tra và điều chỉnh lại độ nhạy trackpad cho máy mình rồi ạ, nếu vẫn còn tiếng kêu lạ hoặc rơ thì khả năng cao do cơ cấu bên trong, em cần kiểm tra thêm."

**📦 Lưu ý TTBH:** Đã loại trừ cài đặt, trackpad vẫn rơ/kêu lạch cạch bất thường, máy còn bảo hành: gửi TTBH kiểm tra cụm trackpad.

---

### Bản lề MacBook để lại vết lõm/cấn trên màn hình khi đóng nắp
- **ID:** lib-a82
- **Thiết bị:** Mac
- **Chẩn đoán ngắn:** Bụi/dị vật kẹt giữa bàn phím và màn hình khi đóng máy, hoặc áp lực đóng nắp không đều lâu ngày để lại vết hằn.
- **Từ khóa:** vết cấn màn hình, màn hình bị hằn, bản lề cấn

**🔍 Chẩn đoán:** Quan sát vị trí vết cấn có trùng với hàng phím hoặc viền bàn phím không (dấu hiệu điển hình của việc đóng máy khi còn dị vật/bụi trên phím).

**🛠️ Hướng dẫn xử lý:**
1. Vệ sinh sạch bàn phím và màn hình trước khi đánh giá, dùng khăn microfiber lau nhẹ vùng bị cấn.
2. Xác định vết cấn là tạm thời (mờ dần sau vài giờ/ngày) hay vĩnh viễn (đã ăn vào lớp phủ màn hình).
3. Nhắc khách luôn vệ sinh bàn phím sạch bụi trước khi đóng nắp máy để tránh tái diễn.
4. Nếu vết cấn nhẹ và mới xuất hiện, có thể cải thiện phần nào theo thời gian, không cần can thiệp ngay.

**🚫 Tuyệt đối không được làm:** Không dùng hóa chất tẩy rửa mạnh chà lên vết cấn màn hình; không cố ấn/miết mạnh vào vết cấn để "làm phẳng lại".

**💬 Kịch bản tư vấn:** "Dạ vết cấn này thường do bụi/dị vật kẹt lúc đóng máy ạ, mình lưu ý vệ sinh bàn phím sạch trước khi đóng nắp để tránh bị thêm nhé, em kiểm tra xem vết này có cải thiện được không."

**📦 Lưu ý TTBH:** Vết cấn do dị vật khi sử dụng là lỗi ngoại lực, không thuộc diện bảo hành — không gửi TTBH.

---

### Mac bị treo với biểu tượng cầu vồng xoay liên tục (spinning beach ball), phải ép buộc khởi động lại
- **ID:** lib-a83
- **Thiết bị:** Mac
- **Chẩn đoán ngắn:** Ứng dụng/tiến trình chiếm dụng CPU hoặc bộ nhớ quá tải, ổ đĩa gần đầy khiến hệ thống xử lý chậm, hoặc xung đột phần mềm sau cập nhật.
- **Từ khóa:** spinning beach ball, macbook treo, cầu vồng xoay, đơ máy

**🔍 Chẩn đoán:** Xác định hiện tượng xảy ra khi dùng ứng dụng cụ thể hay ngẫu nhiên toàn hệ thống; kiểm tra dung lượng ổ đĩa còn trống.

**🛠️ Hướng dẫn xử lý:**
1. Chờ 1-2 phút vì đôi khi hệ thống chỉ đang xử lý tác vụ nặng tạm thời rồi tự hết treo.
2. Nếu treo lâu, mở Activity Monitor (nếu máy vẫn thao tác được) để xem tiến trình nào đang chiếm CPU/bộ nhớ cao nhất và buộc thoát tiến trình đó.
3. Kiểm tra dung lượng ổ đĩa trống (Apple Menu > Giới thiệu về máy Mac này > Lưu trữ) — ổ gần đầy khiến máy dễ bị treo.
4. Nếu máy treo cứng hoàn toàn không thao tác được, giữ nút nguồn 10 giây để ép buộc tắt máy, sau đó khởi động lại.
5. Kiểm tra và cập nhật ứng dụng/macOS lên bản mới nhất nếu tình trạng lặp lại thường xuyên.

**🚫 Tuyệt đối không được làm:** Không ép tắt nguồn ngay lập tức khi máy chỉ mới treo vài giây (nên chờ và thử Activity Monitor trước); không xóa dữ liệu người dùng để "giải phóng dung lượng" khi chưa hỏi ý kiến.

**💬 Kịch bản tư vấn:** "Dạ máy mình bị treo do xử lý tác vụ nặng hoặc gần đầy dung lượng ạ, em đã xử lý và dọn bớt giúp mình rồi, mình theo dõi thêm xem còn bị treo thường xuyên không nhé."

**📦 Lưu ý TTBH:** Tình trạng lặp lại thường xuyên dù đã dọn dung lượng và cập nhật phần mềm, nghi ngờ phần cứng (ổ SSD, RAM): gửi TTBH kiểm tra.

---

### AirDrop hoặc Handoff giữa Mac và iPhone không hoạt động
- **ID:** lib-a84
- **Thiết bị:** Mac
- **Chẩn đoán ngắn:** Wi-Fi/Bluetooth chưa bật đủ trên cả 2 máy, cài đặt AirDrop/Handoff bị giới hạn, hoặc 2 thiết bị chưa đăng nhập cùng Apple ID (với Handoff).
- **Từ khóa:** airdrop không hoạt động, handoff lỗi, chia sẻ file mac iphone

**🔍 Chẩn đoán:** Xác định lỗi ở AirDrop (chia sẻ file) hay Handoff (chuyển tiếp thao tác giữa thiết bị); kiểm tra cả Mac và iPhone/iPad đã bật Wi-Fi và Bluetooth chưa.

**🛠️ Hướng dẫn xử lý:**
1. Đảm bảo cả 2 thiết bị đã bật Wi-Fi và Bluetooth (AirDrop/Handoff cần cả 2 để hoạt động).
2. Trên Mac, vào Finder > AirDrop, kiểm tra chế độ "Cho phép tôi được phát hiện bởi" đã chọn Mọi người hoặc Chỉ liên hệ phù hợp.
3. Trên iPhone/iPad, vào Cài đặt > Chung > AirDrop, kiểm tra tương tự.
4. Với Handoff: kiểm tra cả 2 thiết bị đã đăng nhập cùng Apple ID, bật Handoff trong Cài đặt Hệ thống > Chung > AirDrop & Handoff (Mac) và Cài đặt > Chung > AirPlay & Handoff (iPhone/iPad).
5. Đưa 2 thiết bị lại gần nhau (trong phạm vi Bluetooth) và thử lại.

**🚫 Tuyệt đối không được làm:** Không đăng nhập Apple ID của khách lên thiết bị khác để "test" mà chưa được đồng ý rõ ràng; không tắt vĩnh viễn các tính năng bảo mật liên quan khi chưa hỏi ý kiến khách.

**💬 Kịch bản tư vấn:** "Dạ em đã kiểm tra và bật lại đầy đủ cài đặt AirDrop/Handoff trên cả 2 thiết bị của mình rồi ạ, mình thử lại xem đã hoạt động chưa nhé."

**📦 Lưu ý TTBH:** Đây là lỗi cấu hình phần mềm, không liên quan phần cứng — không gửi TTBH.

---

### Bluetooth Mac không kết nối được hoặc chập chờn với chuột/bàn phím không dây
- **ID:** lib-a85
- **Thiết bị:** Mac
- **Chẩn đoán ngắn:** Xung đột danh sách thiết bị đã ghép đôi (paired), pin phụ kiện yếu, hoặc nhiễu sóng từ thiết bị điện tử khác gần đó.
- **Từ khóa:** bluetooth mac không kết nối, chuột bluetooth chập chờn, bàn phím không dây lỗi

**🔍 Chẩn đoán:** Kiểm tra pin của chuột/bàn phím còn đủ không; xác định thiết bị từng kết nối tốt trước đây hay chưa từng ghép đôi thành công.

**🛠️ Hướng dẫn xử lý:**
1. Kiểm tra và thay pin/sạc đầy cho chuột, bàn phím không dây.
2. Vào Cài đặt Hệ thống > Bluetooth, xóa thiết bị (Remove/Forget) rồi ghép đôi lại từ đầu.
3. Tắt Bluetooth trên Mac, chờ 10 giây rồi bật lại.
4. Di chuyển ra xa các thiết bị phát sóng khác (router Wi-Fi, loa Bluetooth khác) có thể gây nhiễu.
5. Khởi động lại máy để làm mới driver Bluetooth.

**🚫 Tuyệt đối không được làm:** Không khẳng định hỏng module Bluetooth khi chưa thử thay pin và ghép đôi lại từ đầu; không xóa toàn bộ danh sách thiết bị Bluetooth khác của khách mà chưa hỏi ý kiến.

**💬 Kịch bản tư vấn:** "Dạ em đã ghép đôi lại thiết bị Bluetooth cho máy mình rồi ạ, mình thử dùng lại xem còn bị chập chờn không nhé."

**📦 Lưu ý TTBH:** Đã loại trừ pin phụ kiện/ghép đôi lại mà vẫn chập chờn với nhiều thiết bị Bluetooth khác nhau, máy còn bảo hành: gửi TTBH kiểm tra module Bluetooth.

---

### iPad không lên nguồn, màn hình đen dù đã sạc đầy
- **ID:** lib-a86
- **Thiết bị:** iPad
- **Chẩn đoán ngắn:** Lỗi phần mềm treo màn hình, pin cạn sâu cần thời gian sạc trước khi lên logo, hoặc lỗi phần cứng (IC nguồn/màn hình).
- **Từ khóa:** ipad không lên nguồn, màn hình đen, ipad không khởi động

**🔍 Chẩn đoán:** Cắm sạc bằng củ/cáp chính hãng, chờ tối thiểu 15-30 phút trước khi thử bật lại (pin cạn sâu cần thời gian nạp trước khi lên nguồn).

**🛠️ Hướng dẫn xử lý:**
1. Cắm sạc bằng củ sạc và cáp chính hãng, để yên tối thiểu 15-30 phút.
2. Thử ép buộc khởi động lại: nhấn giữ đồng thời nút Nguồn và nút Home (hoặc nút Tăng âm lượng với iPad không có nút Home) trong 10 giây đến khi thấy logo Apple.
3. Thử cổng sạc và cáp khác để loại trừ lỗi phụ kiện.
4. Kết nối với máy tính qua Finder/iTunes, kiểm tra máy tính có nhận diện được thiết bị không (dù màn hình đen).
5. Nếu máy tính nhận diện được, có thể thử khôi phục qua chế độ DFU/Recovery.

**🚫 Tuyệt đối không được làm:** Không sạc bằng củ sạc công suất không rõ nguồn gốc; không tháo máy kiểm tra nếu không được đào tạo phần cứng.

**💬 Kịch bản tư vấn:** "Dạ em đã thử sạc và ép khởi động lại cho máy mình rồi ạ, nếu vẫn không lên nguồn thì em cần kiểm tra sâu hơn về phần cứng."

**📦 Lưu ý TTBH:** Đã thử sạc đủ thời gian và ép khởi động lại không được, không có dấu hiệu vào nước/va đập, máy còn bảo hành: gửi TTBH kiểm tra.

---

### Loa iPad rè hoặc phát nhạc nhỏ tiếng bất thường
- **ID:** lib-a87
- **Thiết bị:** iPad
- **Chẩn đoán ngắn:** Loa bị bụi/dị vật che khuất, cài đặt âm lượng giới hạn (Volume Limit), hoặc lỗi phần cứng loa.
- **Từ khóa:** loa ipad rè, loa nhỏ tiếng, ipad mất tiếng

**🔍 Chẩn đoán:** Kiểm tra Cài đặt > Âm nhạc > Giới hạn âm lượng có đang bật mức thấp không; kiểm tra âm lượng chuông/phương tiện riêng biệt.

**🛠️ Hướng dẫn xử lý:**
1. Kiểm tra và tắt/tăng giới hạn âm lượng trong Cài đặt > Âm nhạc.
2. Soi đèn pin kiểm tra lỗ loa (thường ở 1 hoặc 2 cạnh máy) có bị bụi/dị vật che không, vệ sinh nhẹ nếu cần.
3. Kiểm tra không có ốp lưng/bao da nào che khuất lỗ loa.
4. Phát thử nhạc ở nhiều mức âm lượng để xác định rè xảy ra ở mức nào (thường rè rõ ở âm lượng lớn nếu lỗi màng loa).
5. Khởi động lại máy để loại trừ lỗi phần mềm tạm thời.

**🚫 Tuyệt đối không được làm:** Không chọc vật nhọn vào lỗ loa để vệ sinh; không khẳng định hỏng loa khi chưa kiểm tra cài đặt giới hạn âm lượng.

**💬 Kịch bản tư vấn:** "Dạ em đã kiểm tra cài đặt và vệ sinh loa cho máy mình rồi ạ, nếu vẫn còn rè ở âm lượng lớn thì khả năng do màng loa, em cần kiểm tra thêm."

**📦 Lưu ý TTBH:** Đã loại trừ cài đặt/bụi bẩn, loa vẫn rè rõ, máy còn bảo hành: gửi TTBH kiểm tra cụm loa.

---

### Face ID trên iPad Pro không nhận diện khuôn mặt
- **ID:** lib-a88
- **Thiết bị:** iPad
- **Chẩn đoán ngắn:** Cảm biến TrueDepth bị che/bẩn, góc quét Face ID khác thói quen dùng iPhone theo chiều dọc (iPad Pro có Face ID hoạt động cả khi cầm ngang), hoặc cần đăng ký lại khuôn mặt.
- **Từ khóa:** face id ipad không nhận, face id ipad pro lỗi

**🔍 Chẩn đoán:** Hỏi khách thường cầm máy theo chiều nào khi mở khóa (iPad Pro hỗ trợ Face ID đa hướng nhưng camera phải không bị che); kiểm tra có ốp/bao da che khuất cụm camera trước không.

**🛠️ Hướng dẫn xử lý:**
1. Lau sạch vùng camera trước bằng khăn microfiber khô.
2. Kiểm tra ốp/bao da có che khuất cụm TrueDepth khi mở nắp không.
3. Vào Cài đặt > Face ID & Mã khóa, xóa và đăng ký lại Face ID, quét đủ góc theo hướng dẫn trên màn hình.
4. Đảm bảo đủ ánh sáng khi quét, tránh ngược sáng hoàn toàn.
5. Khởi động lại máy nếu vẫn chưa cải thiện.

**🚫 Tuyệt đối không được làm:** Không dùng vật cứng lau chùi camera; không đăng ký Face ID bằng khuôn mặt người khác để "test hộ" khách.

**💬 Kịch bản tư vấn:** "Dạ em đã vệ sinh camera và đăng ký lại Face ID cho máy mình rồi ạ, mình thử mở khóa lại xem đã nhận diện tốt hơn chưa nhé."

**📦 Lưu ý TTBH:** Đã vệ sinh và đăng ký lại vẫn không cải thiện, không có dấu hiệu va đập/vào nước, máy còn bảo hành: gửi TTBH kiểm tra cụm TrueDepth.

---

### Touch ID ở nút nguồn iPad (Air/mini) không nhận diện vân tay
- **ID:** lib-a89
- **Thiết bị:** iPad
- **Chẩn đoán ngắn:** Cảm biến vân tay tích hợp trong nút nguồn bị bẩn/ẩm, hoặc vân tay lưu chưa đủ rõ nét.
- **Từ khóa:** touch id ipad không nhận, vân tay ipad air, nút nguồn touch id

**🔍 Chẩn đoán:** Kiểm tra tay khách có ướt/nhiều mồ hôi khi đặt vân tay không; xác nhận máy có từng thay nút nguồn ở nơi khác không.

**🛠️ Hướng dẫn xử lý:**
1. Lau khô, sạch ngón tay và bề mặt nút nguồn trước khi thử lại.
2. Vào Cài đặt > Touch ID & Mã khóa, xóa vân tay cũ và đặt lại, đặt trọn vẹn đầu ngón tay lên nút thay vì chỉ chạm nhẹ.
3. Khởi động lại máy để làm mới cảm biến.
4. Hỏi khách máy có từng sửa/thay nút nguồn ở nơi khác gần đây không.

**🚫 Tuyệt đối không được làm:** Không tự ý hoán đổi nút nguồn giữa 2 máy khác nhau — tương tự Touch ID trên iPhone/Mac, không thể hoạt động lại nếu đổi linh kiện khác máy.

**💬 Kịch bản tư vấn:** "Dạ em đã đặt lại vân tay cho máy mình rồi ạ, mình đặt trọn đầu ngón tay lên nút nguồn khi mở khóa để nhận diện tốt hơn nhé."

**📦 Lưu ý TTBH:** Máy chưa từng sửa chữa nút nguồn, còn bảo hành: gửi TTBH kiểm tra cảm biến. Máy từng thay nút nguồn không chính hãng: khó khôi phục, tư vấn dùng mật khẩu.

---

### Camera iPad bị mờ hoặc không lấy nét được
- **ID:** lib-a90
- **Thiết bị:** iPad
- **Chẩn đoán ngắn:** Ống kính camera bị bám bụi/dấu vân tay, ốp lưng che một phần camera, hoặc lỗi phần cứng cụm camera.
- **Từ khóa:** camera ipad mờ, ipad không lấy nét, camera ipad lỗi

**🔍 Chẩn đoán:** Kiểm tra camera trước hay sau bị mờ, quan sát ống kính có vết bẩn/trầy xước bằng mắt không.

**🛠️ Hướng dẫn xử lý:**
1. Dùng khăn microfiber khô lau nhẹ ống kính camera.
2. Kiểm tra ốp lưng có che một phần camera hoặc đèn flash gây lóa không.
3. Mở ứng dụng Camera, thử chụp ở các điều kiện ánh sáng khác nhau để xác nhận mức độ mờ.
4. Kiểm tra Cài đặt > Camera xem có tùy chọn Định dạng/Lưới nào ảnh hưởng không (loại trừ nguyên nhân do cài đặt).
5. Nếu vệ sinh không cải thiện, kiểm tra ống kính có bị trầy xước vật lý rõ ràng không.

**🚫 Tuyệt đối không được làm:** Không dùng vật cứng/sắc nhọn cạy vòng camera; không dùng dung dịch tẩy rửa mạnh lau ống kính.

**💬 Kịch bản tư vấn:** "Dạ em đã vệ sinh camera cho máy mình rồi ạ, nếu ảnh vẫn còn mờ thì khả năng do ống kính trầy hoặc cụm camera bên trong có vấn đề, em cần kiểm tra thêm."

**📦 Lưu ý TTBH:** Vệ sinh không cải thiện, không có dấu hiệu va đập/vào nước, máy còn bảo hành: gửi TTBH kiểm tra cụm camera.

---

### iPad không nhận Wi-Fi hoặc bị ngắt kết nối liên tục
- **ID:** lib-a91
- **Thiết bị:** iPad
- **Chẩn đoán ngắn:** Xung đột cấu hình mạng đã lưu, vị trí yếu sóng, hoặc lỗi phần mềm sau cập nhật iPadOS.
- **Từ khóa:** ipad không nhận wifi, ipad mất wifi, wifi ipad chập chờn

**🔍 Chẩn đoán:** Kiểm tra các thiết bị khác cùng mạng có bị chập chờn không; xác định lỗi xảy ra với mọi mạng Wi-Fi hay chỉ 1 mạng cụ thể.

**🛠️ Hướng dẫn xử lý:**
1. Vào Cài đặt > Wi-Fi, chọn mạng đang dùng > Quên mạng này, sau đó kết nối lại và nhập mật khẩu từ đầu.
2. Khởi động lại router nếu các thiết bị khác cùng mạng cũng chập chờn.
3. Vào Cài đặt > Cài đặt chung > Chuyển hoặc Đặt lại iPad > Đặt lại > Đặt lại Cài đặt Mạng (sẽ mất mật khẩu Wi-Fi đã lưu, cần nhập lại).
4. Kiểm tra bản cập nhật iPadOS mới nhất.
5. Thử kết nối ở một mạng Wi-Fi khác để xác định lỗi do máy hay do mạng ban đầu.

**🚫 Tuyệt đối không được làm:** Không khẳng định lỗi phần cứng Wi-Fi khi chưa loại trừ nguyên nhân từ mạng/router; không thay đổi cấu hình mạng công cộng khi chưa được phép.

**💬 Kịch bản tư vấn:** "Dạ em đã kết nối lại mạng và kiểm tra cấu hình cho máy mình rồi ạ, mình thử dùng thêm ở mạng khác xem có ổn định hơn không nhé."

**📦 Lưu ý TTBH:** Wifi chập chờn ở nhiều mạng khác nhau, đã loại trừ phần mềm, máy còn bảo hành: gửi TTBH kiểm tra ăng-ten Wi-Fi.

---

### Chế độ đa nhiệm Split View/Slide Over trên iPad bị lỗi, không mở được 2 ứng dụng cùng lúc
- **ID:** lib-a92
- **Thiết bị:** iPad
- **Chẩn đoán ngắn:** Ứng dụng không hỗ trợ đa nhiệm, cài đặt đa nhiệm bị tắt, hoặc thao tác kéo thả chưa đúng cách.
- **Từ khóa:** split view lỗi, slide over không hoạt động, đa nhiệm ipad

**🔍 Chẩn đoán:** Kiểm tra ứng dụng khách muốn dùng song song có hỗ trợ Split View không (không phải app nào cũng hỗ trợ); kiểm tra Cài đặt > Trang chủ & Dock > Đa nhiệm đã bật "Cho phép nhiều ứng dụng" chưa.

**🛠️ Hướng dẫn xử lý:**
1. Vào Cài đặt > Trang chủ & Dock > Đa nhiệm & Cử chỉ, đảm bảo "Cho phép Nhiều Ứng dụng" đang bật.
2. Hướng dẫn thao tác đúng: mở app từ Dock, kéo thả sang mép màn hình để mở Split View, hoặc kéo vào giữa để mở Slide Over.
3. Kiểm tra ứng dụng đích có hỗ trợ đa nhiệm không (một số ứng dụng chỉ chạy toàn màn hình).
4. Cập nhật ứng dụng và iPadOS lên bản mới nhất.
5. Khởi động lại máy nếu thao tác đúng mà vẫn không mở được.

**🚫 Tuyệt đối không được làm:** Không khẳng định máy lỗi khi ứng dụng khách chọn vốn không hỗ trợ đa nhiệm; không thay đổi cài đặt trợ năng khác của khách khi không liên quan.

**💬 Kịch bản tư vấn:** "Dạ em đã kiểm tra và bật lại cài đặt đa nhiệm, hướng dẫn thao tác kéo thả cho mình rồi ạ, mình thử lại xem đã mở được 2 ứng dụng cùng lúc chưa nhé."

**📦 Lưu ý TTBH:** Đây là lỗi phần mềm/thao tác, không cần gửi TTBH.

---

### iPad không tải hoặc cài đặt được ứng dụng từ App Store, báo lỗi hoặc treo giữa chừng
- **ID:** lib-a93
- **Thiết bị:** iPad
- **Chẩn đoán ngắn:** Dung lượng trống không đủ, kết nối mạng không ổn định, tài khoản Apple ID có vấn đề thanh toán, hoặc cài đặt hạn chế nội dung (Screen Time) đang chặn.
- **Từ khóa:** app store lỗi, không tải được ứng dụng, cài đặt app treo

**🔍 Chẩn đoán:** Kiểm tra dung lượng trống, kết nối mạng, và Cài đặt > Thời gian sử dụng > Giới hạn Nội dung & Quyền riêng tư xem có đang chặn cài đặt ứng dụng không.

**🛠️ Hướng dẫn xử lý:**
1. Kiểm tra Cài đặt > Cài đặt chung > Dung lượng iPad còn đủ trống không.
2. Đảm bảo kết nối Wi-Fi ổn định, thử tải qua mạng khác để loại trừ do mạng.
3. Vào Cài đặt > [Tên người dùng] > Media & Mua hàng, kiểm tra đăng nhập đúng Apple ID và không có cảnh báo thanh toán.
4. Kiểm tra Cài đặt > Thời gian sử dụng > Giới hạn Nội dung & Quyền riêng tư > Mua hàng trên iTunes & App Store xem có đang chặn Cài đặt ứng dụng không.
5. Khởi động lại máy và thử tải lại.

**🚫 Tuyệt đối không được làm:** Không đăng nhập Apple ID khác vào máy khách để "test" khi chưa được đồng ý; không tắt Giới hạn Nội dung của khách (đặc biệt máy trẻ em) mà không hỏi ý kiến người quản lý thiết bị.

**💬 Kịch bản tư vấn:** "Dạ em đã kiểm tra dung lượng, mạng và cài đặt tài khoản cho máy mình rồi ạ, mình thử tải lại ứng dụng xem đã được chưa nhé."

**📦 Lưu ý TTBH:** Đây là lỗi phần mềm/tài khoản, không cần gửi TTBH.

---

### iPad bị vào nước, có dấu hiệu ẩm (LCI đổi màu)
- **ID:** lib-a94
- **Thiết bị:** iPad
- **Chẩn đoán ngắn:** iPad tiếp xúc trực tiếp với nước/chất lỏng, không có chuẩn chống nước chính thức như iPhone nên rủi ro hư hỏng cao hơn.
- **Từ khóa:** ipad vào nước, ẩm ipad, lci đổi màu

**🔍 Chẩn đoán:** Kiểm tra chỉ báo tiếp xúc chất lỏng (LCI) trong khay SIM (với bản có SIM) hoặc quan sát dấu hiệu ẩm ở cổng sạc/loa; hỏi khách thời điểm và mức độ vào nước.

**🛠️ Hướng dẫn xử lý:**
1. Tắt nguồn máy ngay lập tức, không cắm sạc hoặc bật lại khi còn ẩm.
2. Lau khô bên ngoài bằng khăn mềm, dựng máy nghiêng để nước thoát ra khỏi các khe cổng.
3. Không dùng máy sấy tóc/nhiệt để sấy khô — hơi nóng có thể đẩy hơi ẩm vào sâu hơn.
4. Để máy ở nơi khô thoáng tối thiểu 24-48 giờ trước khi thử bật lại.
5. Đề xuất mang vào xưởng kỹ thuật vệ sinh chuyên sâu, kiểm tra bo mạch sớm nhất có thể (nước để lâu dễ ăn mòn hơn).

**🚫 Tuyệt đối không được làm:** Không cắm sạc hoặc bật máy khi còn nghi ngờ ẩm bên trong; không lắc mạnh máy để "dốc nước ra" vì có thể đẩy nước vào sâu hơn các linh kiện khác.

**💬 Kịch bản tư vấn:** "Dạ máy mình cần được kiểm tra và vệ sinh chuyên sâu sớm sau khi vào nước để tránh ăn mòn thêm ạ, mình không nên bật máy lúc này."

**📦 Lưu ý TTBH:** Vào nước là lỗi ngoại lực (iPad không có chuẩn chống nước như iPhone), không thuộc diện bảo hành — tư vấn dịch vụ vệ sinh/sửa chữa trả phí tại cửa hàng, không gửi TTBH.

---

### iPad bị khóa Activation Lock do quên Apple ID
- **ID:** lib-a95
- **Thiết bị:** iPad
- **Chẩn đoán ngắn:** Tính năng Find My (Tìm iPad) vẫn bật khiến máy yêu cầu xác thực Apple ID cũ trước khi sử dụng được.
- **Từ khóa:** ipad activation lock, khóa kích hoạt ipad, quên apple id

**🔍 Chẩn đoán:** Xác nhận máy đang ở đúng màn hình Activation Lock (logo iCloud kèm dòng chữ khóa kích hoạt), hỏi khách còn giữ hóa đơn mua hàng hoặc nhớ Apple ID không.

**🛠️ Hướng dẫn xử lý:**
1. Hỏi khách còn nhớ Apple ID/mật khẩu đã đăng nhập trên máy trước đó không.
2. Nếu còn nhớ: hướng dẫn khách truy cập iforgot.apple.com trên thiết bị khác để tự khôi phục mật khẩu rồi đăng nhập lại.
3. Nếu không nhớ và có hóa đơn hợp lệ: hướng dẫn khách chuẩn bị hóa đơn mua hàng (ghi rõ số serial) để nộp cho Apple xác minh chủ sở hữu.
4. Kiểm tra máy có phải iPad được mua lại/tặng lại từ người khác không — nếu vậy cần liên hệ đúng chủ Apple ID trước đó để họ gỡ khỏi tài khoản Find My.

**🚫 Tuyệt đối không được làm:** Không dùng bất kỳ công cụ/phần mềm bên thứ 3 nào để "bẻ khóa" Activation Lock; không nhận xử lý nếu không xác minh được nguồn gốc máy hợp pháp.

**💬 Kịch bản tư vấn:** "Dạ đây là tính năng bảo vệ máy khỏi mất cắp ạ, mình cung cấp hóa đơn mua hàng hoặc liên hệ chủ tài khoản trước đó để gỡ khóa giúp mình nhé."

**📦 Lưu ý TTBH:** Không có hóa đơn hợp lệ và khách không nhớ Apple ID: đề xuất khách nhận bảo hành kèm chứng từ mua hàng (nếu có); gửi TTBH để Apple kiểm tra và xử lý, không có cách bỏ qua khóa này tại cửa hàng.

---

### Stage Manager trên iPad Pro/Air bị lỗi hiển thị hoặc treo khi kéo thả cửa sổ
- **ID:** lib-a96
- **Thiết bị:** iPad
- **Chẩn đoán ngắn:** Xung đột phần mềm khi chuyển đổi giữa nhiều cửa sổ, hoặc thiết bị không đủ điều kiện phần cứng chạy đầy đủ tính năng Stage Manager (yêu cầu chip M1 trở lên).
- **Từ khóa:** stage manager lỗi, đa nhiệm ipad pro, stage manager treo

**🔍 Chẩn đoán:** Kiểm tra dòng máy khách đang dùng có đủ điều kiện chạy Stage Manager không (cần chip M1 trở lên), xác định lỗi xảy ra khi thao tác cụ thể nào (kéo thả, thay đổi kích thước cửa sổ...).

**🛠️ Hướng dẫn xử lý:**
1. Vào Trung tâm Điều khiển, kiểm tra Stage Manager đã bật đúng chưa, tắt rồi bật lại.
2. Cập nhật iPadOS lên phiên bản mới nhất — Stage Manager được cải thiện qua nhiều bản cập nhật.
3. Đóng bớt các ứng dụng đang mở trong Stage Manager nếu số lượng cửa sổ quá nhiều.
4. Khởi động lại máy để làm mới giao diện.
5. Nếu vẫn lỗi, hướng dẫn khách tạm quay lại chế độ đa nhiệm thông thường (tắt Stage Manager) trong lúc chờ bản cập nhật vá lỗi.

**🚫 Tuyệt đối không được làm:** Không khẳng định máy lỗi phần cứng khi đây là vấn đề đã biết của tính năng phần mềm mới; không xóa dữ liệu ứng dụng của khách để "sửa lỗi" khi chưa cần thiết.

**💬 Kịch bản tư vấn:** "Dạ Stage Manager là tính năng khá mới nên đôi khi còn lỗi vặt ạ, em đã cập nhật và khởi động lại cho máy mình rồi, mình dùng thử lại xem ổn định hơn chưa nhé."

**📦 Lưu ý TTBH:** Đây là lỗi phần mềm, không cần gửi TTBH.

---

### Màn hình iPad không tự xoay theo hướng cầm máy (Orientation Lock lỗi)
- **ID:** lib-a97
- **Thiết bị:** iPad
- **Chẩn đoán ngắn:** Tính năng Khóa Xoay Màn hình (Orientation Lock) đang bật trong Trung tâm Điều khiển, hoặc cảm biến gia tốc bị lỗi.
- **Từ khóa:** ipad không xoay màn hình, khóa xoay màn hình, orientation lock

**🔍 Chẩn đoán:** Kiểm tra biểu tượng khóa xoay (hình ổ khóa với mũi tên vòng) trong Trung tâm Điều khiển có đang bật (màu cam) không.

**🛠️ Hướng dẫn xử lý:**
1. Mở Trung tâm Điều khiển (vuốt từ góc trên bên phải), kiểm tra và tắt biểu tượng Khóa Xoay Màn hình nếu đang bật.
2. Kiểm tra ứng dụng đang mở có hỗ trợ xoay ngang/dọc không (một số ứng dụng chỉ hỗ trợ 1 chiều cố định).
3. Khởi động lại máy để làm mới cảm biến gia tốc.
4. Thử xoay máy ở nhiều ứng dụng khác nhau (như Cài đặt, Safari) để xác định lỗi ở 1 app hay toàn hệ thống.

**🚫 Tuyệt đối không được làm:** Không khẳng định lỗi cảm biến phần cứng khi chưa kiểm tra khóa xoay màn hình trong Trung tâm Điều khiển.

**💬 Kịch bản tư vấn:** "Dạ máy mình đang bật khóa xoay màn hình ạ, em đã tắt lại giúp mình rồi, mình thử xoay máy xem đã tự chuyển hướng chưa nhé."

**📦 Lưu ý TTBH:** Đã tắt khóa xoay mà vẫn không xoay được ở nhiều ứng dụng hỗ trợ xoay: gửi TTBH kiểm tra cảm biến gia tốc.

---

### Ứng dụng trên iPad bị crash liên tục hoặc không mở được
- **ID:** lib-a98
- **Thiết bị:** iPad
- **Chẩn đoán ngắn:** Ứng dụng lỗi phiên bản, xung đột dữ liệu cache, hoặc máy thiếu dung lượng/RAM xử lý.
- **Từ khóa:** ứng dụng ipad crash, app ipad không mở được, ipad app đơ

**🔍 Chẩn đoán:** Xác định 1 ứng dụng cụ thể hay nhiều ứng dụng đều crash; kiểm tra ứng dụng đã cập nhật phiên bản mới nhất chưa.

**🛠️ Hướng dẫn xử lý:**
1. Đóng hoàn toàn ứng dụng (vuốt lên từ thanh Home và đóng lại từ danh sách đa nhiệm) rồi mở lại.
2. Kiểm tra và cập nhật ứng dụng lên phiên bản mới nhất qua App Store.
3. Gỡ cài đặt và cài lại ứng dụng nếu vẫn crash sau khi cập nhật.
4. Kiểm tra dung lượng trống của máy, dọn bớt nếu gần đầy.
5. Cập nhật iPadOS lên bản mới nhất nếu nhiều ứng dụng cùng gặp lỗi.

**🚫 Tuyệt đối không được làm:** Không xóa toàn bộ dữ liệu máy khi chỉ 1 ứng dụng cụ thể bị lỗi; không tự ý xóa dữ liệu/tài khoản trong ứng dụng của khách mà chưa hỏi ý kiến.

**💬 Kịch bản tư vấn:** "Dạ em đã cập nhật và cài lại ứng dụng cho máy mình rồi ạ, mình thử mở lại xem còn bị thoát đột ngột không nhé."

**📦 Lưu ý TTBH:** Đây là lỗi phần mềm ứng dụng thông thường, không cần gửi TTBH.

---

### iPad không đồng bộ dữ liệu qua iCloud với các thiết bị khác
- **ID:** lib-a99
- **Thiết bị:** iPad
- **Chẩn đoán ngắn:** Kết nối mạng không ổn định, dung lượng iCloud đầy, hoặc cài đặt đồng bộ của ứng dụng cụ thể (Ảnh, Danh bạ, Ghi chú) đang tắt.
- **Từ khóa:** icloud không đồng bộ, ipad đồng bộ dữ liệu, mất đồng bộ icloud

**🔍 Chẩn đoán:** Kiểm tra dung lượng iCloud còn trống không (Cài đặt > Apple ID > iCloud); xác định loại dữ liệu nào không đồng bộ (ảnh, danh bạ, ghi chú...).

**🛠️ Hướng dẫn xử lý:**
1. Kiểm tra kết nối Wi-Fi ổn định, đăng nhập đúng Apple ID trên tất cả thiết bị cần đồng bộ.
2. Vào Cài đặt > Apple ID > iCloud, kiểm tra đã bật đúng ứng dụng cần đồng bộ (Ảnh, Danh bạ, Ghi chú...) chưa.
3. Kiểm tra dung lượng iCloud còn đủ trống không — hết dung lượng sẽ dừng đồng bộ mới.
4. Đăng xuất rồi đăng nhập lại Apple ID nếu đã kiểm tra cài đặt mà vẫn không đồng bộ (lưu ý xác nhận khách nhớ mật khẩu trước).
5. Khởi động lại máy sau khi kiểm tra cài đặt.

**🚫 Tuyệt đối không được làm:** Không đăng xuất Apple ID của khách khi chưa xác nhận khách nhớ mật khẩu; không xóa dữ liệu trên iCloud để "giải phóng dung lượng" khi chưa hỏi ý kiến khách.

**💬 Kịch bản tư vấn:** "Dạ em đã kiểm tra cài đặt đồng bộ và dung lượng iCloud cho máy mình rồi ạ, mình đợi thêm chút để dữ liệu đồng bộ lại nhé."

**📦 Lưu ý TTBH:** Đây là lỗi phần mềm/tài khoản/dung lượng, không cần gửi TTBH.

---

### Cổng sạc hoặc loa iPad bị gỉ sét, ăn mòn do từng vào nước
- **ID:** lib-a100
- **Thiết bị:** iPad
- **Chẩn đoán ngắn:** Nước/hơi ẩm đọng lại lâu ngày gây oxi hóa, ăn mòn tiếp điểm kim loại ở cổng sạc hoặc lỗ loa.
- **Từ khóa:** gỉ sét ipad, cổng sạc ipad ăn mòn, oxi hóa ipad

**🔍 Chẩn đoán:** Soi đèn pin quan sát màu sắc chân tiếp điểm cổng sạc/lỗ loa; hỏi khách máy có từng vào nước/để nơi ẩm ướt không.

**🛠️ Hướng dẫn xử lý:**
1. Hỏi khách máy có từng vào nước hoặc để nơi ẩm ướt lâu ngày không.
2. Soi đèn pin kiểm tra tình trạng gỉ sét ở cổng sạc và các lỗ loa.
3. Không cắm sạc vào khi đang thấy rõ gỉ sét — có nguy cơ chập mạch.
4. Đề xuất vệ sinh chuyên sâu bằng dung dịch chuyên dụng tại xưởng kỹ thuật.

**🚫 Tuyệt đối không được làm:** Không cắm sạc vào cổng đang gỉ sét rõ để "thử"; không dùng vật kim loại sắc nhọn cạy gỉ.

**💬 Kịch bản tư vấn:** "Dạ cổng sạc của mình đang bị oxi hóa do từng tiếp xúc nước/ẩm ạ, em cần đưa vào xưởng vệ sinh chuyên sâu, không nên tự cắm sạc lúc này."

**📦 Lưu ý TTBH:** Gỉ sét do vào nước không thuộc diện bảo hành — tư vấn dịch vụ vệ sinh/sửa chữa trả phí tại cửa hàng, không gửi TTBH.

---

### Khung viền iPad bị cong/móp do rơi, đóng không khít với bàn phím rời
- **ID:** lib-a101
- **Thiết bị:** iPad
- **Chẩn đoán ngắn:** Va đập mạnh làm biến dạng khung nhôm, ảnh hưởng độ khít khi ghép nối với Magic Keyboard/Smart Keyboard hoặc bao case.
- **Từ khóa:** khung ipad móp, ipad cong, bàn phím rời không khít

**🔍 Chẩn đoán:** Quan sát vị trí móp cong, kiểm tra độ khít khi gắn bàn phím rời/case chính hãng, hỏi khách thời điểm và độ cao rơi máy.

**🛠️ Hướng dẫn xử lý:**
1. Chụp ảnh lưu lại tình trạng móp cong hiện tại trước khi thao tác thêm.
2. Kiểm tra chân kết nối nam châm/Smart Connector có bị ảnh hưởng bởi vết móp không (liên quan đến lỗi bàn phím rời không kết nối).
3. Đánh giá mức độ ảnh hưởng đến khả năng sử dụng cùng phụ kiện chính hãng.
4. Tư vấn phương án: chấp nhận thẩm mỹ hiện tại, hoặc thay khung/vỏ máy nếu ảnh hưởng nhiều đến trải nghiệm dùng phụ kiện.

**🚫 Tuyệt đối không được làm:** Không dùng lực mạnh cố nắn thẳng khung khi máy còn nguyên linh kiện bên trong nếu chưa tháo đúng quy trình; không cam kết phục hồi độ khít 100% như máy mới.

**💬 Kịch bản tư vấn:** "Dạ khung máy mình bị móp do va đập rồi ạ, điều này có thể ảnh hưởng đến việc gắn bàn phím rời, em tư vấn phương án khắc phục phù hợp cho mình nhé."

**📦 Lưu ý TTBH:** Móp méo do rơi/va đập là lỗi ngoại lực, không thuộc diện bảo hành — không gửi TTBH; tư vấn dịch vụ sửa chữa trả phí tại cửa hàng.

---

### Pin iPad bị phồng, đội màn hình lên
- **ID:** lib-a102
- **Thiết bị:** iPad
- **Chẩn đoán ngắn:** Pin lithium-ion bị chai/hỏng hóa học sinh khí bên trong sau thời gian sử dụng dài.
- **Từ khóa:** pin ipad phồng, ipad phồng pin, an toàn cháy nổ

**🔍 Chẩn đoán:** Đây là tình huống AN TOÀN CẦN ƯU TIÊN — kiểm tra dấu hiệu phồng bằng mắt (màn hình bị đội lên, hở khe viền), hỏi khách máy có nóng bất thường không.

**🛠️ Hướng dẫn xử lý:**
1. Yêu cầu khách NGỪNG SỬ DỤNG và ngừng sạc máy ngay lập tức.
2. Không ép, đè hoặc cố tháo pin phồng bằng lực — nguy cơ cháy nổ.
3. Đặt máy nơi thoáng, tránh xa vật dễ cháy.
4. Bàn giao ngay cho bộ phận kỹ thuật xử lý theo quy trình pin lỗi.
5. Báo ngay quản lý ca trực nếu pin phồng nặng hoặc rò rỉ dịch.

**🚫 Tuyệt đối không được làm:** Không dùng vật nhọn chọc vào khu vực pin phồng; không sạc lại để "thử"; không để gần nguồn nhiệt.

**💬 Kịch bản tư vấn:** "Dạ pin máy mình đang bị phồng, đây là lỗi cần xử lý ngay vì lý do an toàn ạ, anh/chị vui lòng không sạc hay dùng máy nữa."

**📦 Lưu ý TTBH:** Pin phồng luôn cần thay thế — máy còn bảo hành và không có tác động ngoại lực: gửi TTBH; hết bảo hành: tư vấn thay pin chính hãng sớm nhất.

---

### Màn hình iPad bị lưu ảnh mờ (ghosting nhẹ) sau khi hiển thị lâu một nội dung tĩnh
- **ID:** lib-a103
- **Thiết bị:** iPad
- **Chẩn đoán ngắn:** Hiện tượng lưu ảnh tạm thời (image persistence) trên tấm nền LCD/OLED do hiển thị lâu 1 hình ảnh tĩnh ở độ sáng cao, thường tự hết sau một thời gian.
- **Từ khóa:** ipad lưu ảnh, ghosting màn hình, burn-in ipad

**🔍 Chẩn đoán:** Hỏi khách trước đó có để máy hiển thị lâu 1 nội dung tĩnh (bản đồ, bảng tính, ứng dụng không tự tắt màn hình) ở độ sáng cao không; kiểm tra vết mờ có biến mất khi hiển thị nội dung khác không.

**🛠️ Hướng dẫn xử lý:**
1. Tắt màn hình, để máy nghỉ vài giờ rồi kiểm tra lại.
2. Phát một video/hình ảnh chuyển động nhiều màu sắc để giúp làm mới lại điểm ảnh.
3. Giảm độ sáng màn hình và bật Tự động khóa ở thời gian ngắn hơn (Cài đặt > Màn hình & Độ sáng > Tự khóa) để tránh tái diễn.
4. Nếu vết mờ không biến mất sau vài giờ đến 1 ngày, có thể đã chuyển thành lưu ảnh vĩnh viễn (burn-in) — hiếm gặp trên iPad nhưng vẫn có thể xảy ra.

**🚫 Tuyệt đối không được làm:** Không ấn mạnh lên màn hình để cố "xóa" vết lưu ảnh; không khẳng định ngay là lỗi phần cứng vĩnh viễn khi chưa chờ máy nghỉ đủ thời gian.

**💬 Kịch bản tư vấn:** "Dạ đây là hiện tượng lưu ảnh tạm thời do hiển thị lâu một nội dung ạ, mình để máy nghỉ vài tiếng là sẽ hết, em cũng hướng dẫn mình chỉnh cài đặt để tránh bị lại nhé."

**📦 Lưu ý TTBH:** Vết mờ không biến mất sau khi đã để máy nghỉ đủ lâu (dấu hiệu burn-in thật), máy còn bảo hành: gửi TTBH kiểm tra màn hình.

---
