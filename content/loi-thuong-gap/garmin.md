# Garmin — Danh mục lỗi thường gặp

> File này lưu dữ liệu lỗi cho dòng sản phẩm: Fenix, Forerunner, Edge
> Xem hướng dẫn định dạng ở README.md cùng thư mục.

---

### Lỗi đồng bộ app Garmin Connect
- **ID:** lib-g1
- **Chẩn đoán ngắn:** Xung đột kết nối Bluetooth hoặc phiên bản app đã cũ.
- **Từ khóa:** đồng bộ, connect, bluetooth

**🔍 Chẩn đoán:** Kiểm tra phiên bản app Garmin Connect có phải bản mới nhất không, xác nhận Bluetooth điện thoại đang bật.

**🛠️ Hướng dẫn xử lý:**
1. Mở App Store/CH Play kiểm tra app Garmin Connect đã cập nhật bản mới nhất chưa, cập nhật nếu có.
2. Vào Cài đặt điện thoại > Bluetooth, tìm tên đồng hồ trong danh sách đã ghép đôi, chọn "Quên thiết bị này" (Forget This Device).
3. Khởi động lại cả điện thoại và đồng hồ.
4. Mở app Garmin Connect > biểu tượng đồng hồ (góc trên) > "Thêm thiết bị" > làm theo hướng dẫn ghép đôi lại từ đầu.
5. Sau khi ghép xong, vào tab đồng hồ trong app, kéo xuống để đồng bộ dữ liệu thủ công.

**🚫 Tuyệt đối không được làm:** Không xóa app Garmin Connect và cài lại khi chưa thử ghép đôi lại trước — có thể mất lịch sử tập luyện chưa sao lưu lên Garmin Connect Cloud.

**💬 Kịch bản tư vấn:** "Em đã kết nối lại đồng hồ với điện thoại mình rồi ạ, mình thử đồng bộ lại xem đã lên dữ liệu chưa nhé."

**📦 Lưu ý TTBH:** Vấn đề phần mềm thuần túy, không cần gửi TTBH.

---

### Đồng hồ Garmin hao pin đột ngột
- **ID:** lib-g2
- **Chẩn đoán ngắn:** Thường do bật các tính năng đo liên tục như Pulse Ox hoặc mặt đồng hồ bên thứ 3.
- **Từ khóa:** pin, hao pin, sụt nguồn

**🔍 Chẩn đoán:** Kiểm tra các tính năng đo liên tục đang bật (Pulse Ox, đo nhịp tim 24/7), xác nhận có dùng mặt đồng hồ bên thứ 3 không.

**🛠️ Hướng dẫn xử lý:**
1. Trên đồng hồ, vào Cài đặt > Cảm biến & Phụ kiện > Pulse Ox > tắt "Theo dõi cả ngày".
2. Vào Cài đặt > Nhịp tim, kiểm tra chế độ đo có đang để "Liên tục" không, có thể chuyển sang tần suất thấp hơn nếu khách chấp nhận.
3. Kiểm tra mặt đồng hồ (watch face) đang dùng có phải mặt bên thứ 3 tải từ Connect IQ không — nếu có, chuyển tạm về mặt mặc định của Garmin để so sánh.
4. Ghi nhận % pin hiện tại, hẹn khách theo dõi thêm 1-2 ngày để so sánh mức hao pin trước/sau khi tắt các tính năng trên.

**🚫 Tuyệt đối không được làm:** Không tắt các tính năng theo dõi sức khỏe của khách mà không hỏi ý kiến trước — một số khách cần theo dõi Pulse Ox/nhịp tim liên tục cho mục đích luyện tập.

**💬 Kịch bản tư vấn:** "Em tắt bớt vài tính năng đo liên tục cho mình rồi ạ, mình theo dõi thêm 1-2 ngày xem pin có cải thiện không nhé."

**📦 Lưu ý TTBH:** Đã tắt hết tính năng ngốn pin mà vẫn hao nhanh bất thường: đề xuất khách nhận bảo hành; thiết bị sẽ được gửi về Trung tâm bảo hành (TTBH) để kiểm tra pin.

---

### Garmin không lên nguồn, màn hình đen hoàn toàn
- **ID:** lib-g3
- **Chẩn đoán ngắn:** Pin cạn sâu cần thời gian sạc nạp trước khi hiển thị, hoặc lỗi mạch nguồn.
- **Từ khóa:** không lên nguồn, màn hình đen, mất nguồn

**🔍 Chẩn đoán:** Kiểm tra chân sạc từ tính có gỉ/bẩn không, xác nhận máy có khả năng cạn pin sâu (để lâu không dùng).

**🛠️ Hướng dẫn xử lý:**
1. Lau khô/vệ sinh 4 chấu tiếp điểm sạc phía sau đồng hồ và trên cáp sạc bằng khăn khô hoặc tăm bông.
2. Cắm cáp sạc chính hãng vào đồng hồ, đảm bảo khớp đúng chiều (thường có gờ định hướng), giữ tối thiểu 15-30 phút.
3. Sau thời gian trên, nhấn giữ nút nguồn (thường là nút trên cùng bên trái hoặc phải tùy dòng máy) khoảng 10-15 giây để thử khởi động.
4. Nếu vẫn đen màn hình: thử đổi sang cáp sạc Garmin chính hãng khác để loại trừ lỗi cáp.

**🚫 Tuyệt đối không được làm:** Không dùng cáp sạc không chính hãng/sai chuẩn chấu tiếp điểm (dễ không nhận sạc hoặc hỏng chân sạc); không cạy nắp lưng máy để can thiệp pin tại quầy.

**💬 Kịch bản tư vấn:** "Đồng hồ mình có thể chỉ cạn pin sâu thôi ạ, em đang sạc thử trước khi kết luận nhé."

**📦 Lưu ý TTBH:** Sạc lâu vẫn đen màn hình: đề xuất khách nhận bảo hành; thiết bị sẽ được gửi về Trung tâm bảo hành (TTBH) để kiểm tra mạch nguồn.

---

### Garmin đo nhịp tim không chính xác hoặc không đo được
- **ID:** lib-g4
- **Chẩn đoán ngắn:** Đeo lỏng, cảm biến bám bẩn/mồ hôi khô, hoặc hình xăm/lông tay cản quang học.
- **Từ khóa:** nhịp tim, đo sai, cảm biến

**🔍 Chẩn đoán:** Kiểm tra cách đeo (độ cao, độ chặt), xác nhận cảm biến mặt sau có sạch không.

**🛠️ Hướng dẫn xử lý:**
1. Hướng dẫn khách đeo đồng hồ cao hơn xương cổ tay khoảng 1 đốt ngón tay, dây đeo vừa chặt (không lỏng lẻo).
2. Tháo đồng hồ, dùng khăn ẩm lau sạch cảm biến quang học mặt sau (loại bỏ mồ hôi khô/bụi bẩn).
3. Vào Cài đặt trên đồng hồ > Hệ thống > Cập nhật phần mềm, đảm bảo đang chạy bản mới nhất.
4. Đeo lại đúng vị trí, đứng yên 1-2 phút để đồng hồ đo lại và so sánh kết quả.

**🚫 Tuyệt đối không được làm:** Không khẳng định cảm biến nhịp tim "chính xác 100%" — cảm biến quang học vốn có sai số với hình xăm/da sậm màu/lông tay dày, cần giải thích rõ giới hạn này với khách.

**💬 Kịch bản tư vấn:** "Em hướng dẫn mình đeo đúng vị trí và đã cập nhật phần mềm rồi ạ, thuật toán đo nhịp tim sẽ chính xác hơn sau bản vá này."

**📦 Lưu ý TTBH:** Đây thường là vấn đề cách dùng/phần mềm, hiếm khi cần gửi TTBH.

---

### Garmin bị treo logo khi khởi động, không vào được giao diện chính
- **ID:** lib-g5
- **Chẩn đoán ngắn:** Lỗi phần mềm hệ thống hoặc xung đột sau khi cập nhật dở dang.
- **Từ khóa:** treo logo, không khởi động được, đơ máy

**🔍 Chẩn đoán:** Xác nhận máy vừa cập nhật phần mềm dở dang hay tự nhiên treo.

**🛠️ Hướng dẫn xử lý:**
1. Hỏi khách máy vừa cập nhật phần mềm dở dang hay tự nhiên bị treo logo.
2. Nhấn giữ nút nguồn 10-15 giây liên tục đến khi màn hình tắt hẳn (Soft Reset).
3. Thả tay, đợi 5 giây rồi nhấn nút nguồn 1 lần để khởi động lại.
4. Quan sát máy có vào được giao diện chính không; nếu vẫn treo, kết nối với Garmin Express trên máy tính để kiểm tra và cài lại phần mềm.

**🚫 Tuyệt đối không được làm:** Không rút sạc/tháo pin (với máy có thể tháo) trong lúc máy đang cập nhật phần mềm dở dang — dễ làm hỏng vĩnh viễn firmware.

**💬 Kịch bản tư vấn:** "Em đang khởi động lại đồng hồ cho mình ạ, đa số trường hợp treo logo là do phần mềm và sẽ hết sau bước này."

**📦 Lưu ý TTBH:** Soft Reset không hết, cần khôi phục cài đặt gốc qua Garmin Express — báo trước với khách sẽ mất dữ liệu chưa đồng bộ.

---

### Garmin không bắt được GPS hoặc định vị sai vị trí ngoài trời
- **ID:** lib-g6
- **Chẩn đoán ngắn:** Dữ liệu vệ tinh (EPO/CPE) đã cũ, hoặc đang ở khu vực nhiều vật cản tín hiệu.
- **Từ khóa:** gps, định vị sai, không bắt sóng, vệ tinh

**🔍 Chẩn đoán:** Kiểm tra dữ liệu vệ tinh (EPO/CPE) đã cập nhật gần đây chưa, xác nhận môi trường bắt sóng (trong nhà/nhiều tòa cao tầng).

**🛠️ Hướng dẫn xử lý:**
1. Kết nối đồng hồ với điện thoại qua app Garmin Connect (đồng bộ tự động cập nhật dữ liệu vệ tinh) hoặc với Garmin Express trên máy tính.
2. Chờ đồng bộ hoàn tất, kiểm tra thời gian cập nhật dữ liệu vệ tinh gần nhất trong app.
3. Hướng dẫn khách mang máy ra khu vực ngoài trời thoáng đãng (tránh nhà cao tầng, cây rậm) để bắt tín hiệu GPS lần đầu.
4. Trên đồng hồ, bắt đầu 1 bài tập ngoài trời (chạy bộ/đi bộ) để kích hoạt tìm vệ tinh, đợi biểu tượng GPS chuyển sang màu xanh (thường 1-2 phút lần đầu).

**🚫 Tuyệt đối không được làm:** Không kết luận máy lỗi GPS ngay khi mới thử trong nhà/khu vực nhiều vật cản — phải loại trừ yếu tố môi trường trước.

**💬 Kịch bản tư vấn:** "Em đã cập nhật dữ liệu vệ tinh cho đồng hồ mình rồi ạ, lần đầu bắt sóng ngoài trời có thể mất 1-2 phút, mình đợi thêm nhé."

**📦 Lưu ý TTBH:** Cập nhật dữ liệu và thử ngoài trời thoáng vẫn không bắt được GPS: đề xuất khách nhận bảo hành; thiết bị sẽ được gửi về Trung tâm bảo hành (TTBH) để kiểm tra module GPS.

---

### Màn hình cảm ứng Garmin không nhạy hoặc không phản hồi
- **ID:** lib-g7
- **Chẩn đoán ngắn:** Màn hình dính nước/mồ hôi, đang ở chế độ khóa cảm ứng, hoặc lỗi phần mềm.
- **Từ khóa:** cảm ứng, không nhạy, màn hình, không phản hồi

**🔍 Chẩn đoán:** Kiểm tra có đang bật khóa cảm ứng (Lock) trong cài đặt không, xác nhận màn hình có ẩm không.

**🛠️ Hướng dẫn xử lý:**
1. Kiểm tra biểu tượng khóa trên màn hình — nếu đồng hồ đang ở chế độ Khóa (thường bật bằng cách giữ nút góc hoặc vuốt xuống chọn khóa), tắt khóa theo đúng thao tác của dòng máy.
2. Lau khô màn hình bằng khăn mềm, đặc biệt nếu vừa đổ mồ hôi hoặc dính nước.
3. Nếu vẫn không phản hồi: thực hiện Soft Reset (giữ nút nguồn 10-15 giây đến khi tắt hẳn rồi bật lại).
4. Kiểm tra lại cảm ứng bằng cách vuốt qua các màn hình widget.

**🚫 Tuyệt đối không được làm:** Không dùng vật cứng/sắc nhọn chạm vào màn hình để "test" cảm ứng — có thể gây trầy xước hoặc hỏng thêm.

**💬 Kịch bản tư vấn:** "Đồng hồ mình đang bật khóa cảm ứng nên không thao tác được ạ, em tắt lại giúp mình nhé."

**📦 Lưu ý TTBH:** Đã tắt khóa và lau khô vẫn không phản hồi: đề xuất khách nhận bảo hành; thiết bị sẽ được gửi về Trung tâm bảo hành (TTBH) để kiểm tra màn hình.

---

### Garmin Edge (định vị xe đạp) không gắn được vào gá đỡ hoặc mất kết nối cảm biến tốc độ/cadence
- **ID:** lib-g8
- **Chẩn đoán ngắn:** Gá đỡ (mount) lệch khớp, hoặc cảm biến ANT+/Bluetooth ngoài (tốc độ, nhịp tim) bị mất ghép đôi.
- **Từ khóa:** edge, gá đỡ, mount, cảm biến, xe đạp

**🔍 Chẩn đoán:** Kiểm tra chốt xoay trên gá đỡ có khớp đúng chiều với rãnh sau máy không, xác nhận cảm biến còn pin không.

**🛠️ Hướng dẫn xử lý:**
1. Kiểm tra chốt xoay (quarter-turn mount) phía sau máy Edge có khớp đúng chiều với rãnh trên gá đỡ không — thử xoay nhẹ theo chiều kim đồng hồ đến khi nghe/cảm nhận tiếng khớp.
2. Kiểm tra gá đỡ có bị nứt, gãy chân, hoặc mòn ren không.
3. Nếu là lỗi cảm biến: vào Cài đặt trên Edge > Cảm biến (Sensors) > chọn cảm biến tốc độ/cadence bị mất kết nối > "Ghép đôi lại".
4. Kiểm tra pin cảm biến (thường là pin cúc áo CR2032), thay pin nếu đèn báo yếu hoặc không sáng khi lắc nhẹ.

**🚫 Tuyệt đối không được làm:** Không để khách tiếp tục dùng gá đỡ đã nứt/gãy khi đạp xe — rủi ro rơi máy khi di chuyển, cần khuyến nghị thay ngay.

**💬 Kịch bản tư vấn:** "Em đã kiểm tra và ghép lại cảm biến cho mình rồi ạ, gá đỡ nứt/gãy thì mình nên thay phụ kiện mới để tránh rơi máy khi đạp nhé."

**📦 Lưu ý TTBH:** Gá đỡ hỏng có thể bán/thay linh kiện tại chỗ, không cần gửi TTBH.

---

### Garmin bị vào nước, có hơi nước đọng dưới mặt kính
- **ID:** lib-g9
- **Chẩn đoán ngắn:** Gioăng cao su chống nước bị lão hóa/hở, hoặc máy vượt quá độ sâu/áp suất chịu nước cho phép.
- **Từ khóa:** vào nước, hơi nước, đọng nước, chống nước

**🔍 Chẩn đoán:** Kiểm tra gioăng cao su chống nước có dấu hiệu hở/lão hóa không, xác nhận có vượt độ sâu chịu nước cho phép không.

**🛠️ Hướng dẫn xử lý:**
1. Hỏi khách máy đã tiếp xúc nước trong hoàn cảnh nào (bơi, lặn, mưa) và có vượt quá độ sâu chịu nước ghi trên thông số máy không.
2. Lau khô ngoại quan bằng khăn mềm, đặc biệt quanh viền kính và nút bấm.
3. Đặt máy nơi khô ráo, thoáng khí tự nhiên (không sấy nhiệt cao, không phơi nắng gắt).
4. Trong lúc chờ, hạn chế bấm nút liên tục (bơm ẩm/hơi nước có thể lan thêm qua khe hở).
5. Theo dõi trong 24 giờ, kiểm tra hơi nước dưới mặt kính có tự bay hết không.

**🚫 Tuyệt đối không được làm:** Không sấy nhiệt cao hoặc bấm nút liên tục để "đẩy hơi nước ra"; không tiếp tục cho khách dùng máy để bơi/lặn cho đến khi xác nhận máy đã khô hoàn toàn và hoạt động bình thường.

**💬 Kịch bản tư vấn:** "Máy mình cần để khô tự nhiên trước ạ, em theo dõi cùng mình xem hơi nước có tự bay hết trong 24 giờ không."

**📦 Lưu ý TTBH:** Hơi nước không hết sau 24 giờ hoặc máy chập chờn: đề xuất khách nhận bảo hành; thiết bị sẽ được gửi về Trung tâm bảo hành (TTBH) để kiểm tra gioăng và bo mạch.

---

### Dây đeo (band/strap) Garmin bị đứt, nứt hoặc khóa dây lỏng
- **ID:** lib-g10
- **Chẩn đoán ngắn:** Dây cao su/silicone lão hóa theo thời gian, hoặc chốt khóa quick-release bị mòn.
- **Từ khóa:** dây đeo, đứt dây, quai đồng hồ, strap

**🔍 Chẩn đoán:** Xác định đúng size lug (kích thước chốt) của model để chọn dây thay thế tương thích.

**🛠️ Hướng dẫn xử lý:**
1. Kiểm tra thông số size lug (thường 20mm/22mm/26mm tùy dòng máy) — có thể xem trong thông số kỹ thuật máy hoặc đo trực tiếp.
2. Chọn dây thay thế chính hãng đúng size lug, có chốt quick-release nếu máy hỗ trợ.
3. Tháo dây cũ: kéo chốt quick-release (thanh nhỏ ở đầu chốt) và rút dây ra.
4. Lắp dây mới: gắn 1 đầu chốt vào lug, kéo chốt quick-release để luồn đầu còn lại vào, thả tay kiểm tra dây đã khớp chắc chắn.

**🚫 Tuyệt đối không được làm:** Không lắp dây sai size lug dù có thể "gắn tạm được" — dễ tuột dây gây rơi máy khi khách vận động mạnh.

**💬 Kịch bản tư vấn:** "Em thay dây mới đúng chuẩn cho đồng hồ mình ngay tại đây được ạ, mình chọn dây chính hãng để đảm bảo độ bền và chống nước nhé."

**📦 Lưu ý TTBH:** Xử lý được ngay tại chỗ, không cần gửi TTBH.

---

### Garmin báo lỗi hoặc treo giữa chừng khi cập nhật firmware
- **ID:** lib-g11
- **Chẩn đoán ngắn:** Mất kết nối mạng/Bluetooth giữa chừng khi tải bản cập nhật, hoặc dung lượng trống không đủ.
- **Từ khóa:** cập nhật, firmware, update, treo

**🔍 Chẩn đoán:** Kiểm tra pin còn trên 50% không, xác nhận kết nối mạng/Bluetooth có ổn định trong lúc cập nhật không.

**🛠️ Hướng dẫn xử lý:**
1. Kiểm tra pin đồng hồ còn trên 50% không, cắm sạc nếu cần trước khi cập nhật lại.
2. Cài Garmin Express trên máy tính (nếu chưa có), kết nối đồng hồ bằng cáp USB.
3. Mở Garmin Express, chọn thiết bị, để phần mềm tự kiểm tra và tải bản cập nhật mới nhất.
4. Giữ nguyên kết nối cáp, không rút ra cho đến khi Garmin Express báo "Cập nhật hoàn tất".
5. Khởi động lại đồng hồ sau khi cập nhật xong, kiểm tra phiên bản phần mềm trong Cài đặt > Hệ thống > Giới thiệu.

**🚫 Tuyệt đối không được làm:** Không rút cáp USB hoặc tắt máy tính giữa chừng khi Garmin Express đang cập nhật firmware — có thể làm hỏng firmware, khiến máy không khởi động được.

**💬 Kịch bản tư vấn:** "Em đang cập nhật lại phần mềm cho đồng hồ mình qua máy tính ạ, cách này ổn định hơn cập nhật qua điện thoại."

**📦 Lưu ý TTBH:** Cập nhật qua Garmin Express vẫn lỗi liên tục: đề xuất khách nhận bảo hành; thiết bị sẽ được gửi về Trung tâm bảo hành (TTBH) để kiểm tra bộ nhớ trong.

---

### Đồng hồ Garmin bị đơ giữa chừng khi đang dùng (không phải lúc khởi động)
- **ID:** lib-g12
- **Chẩn đoán ngắn:** Phân biệt với lib-g5 (treo ở logo lúc khởi động) — đây là trường hợp máy đang chạy bình thường rồi đơ đột ngột, màn hình không phản hồi nút bấm.
- **Từ khóa:** đơ máy, treo giữa chừng, không phản hồi, force restart

**🔍 Chẩn đoán:** Xác nhận máy đơ khi đang dùng bình thường (không phải sau cập nhật/khởi động), thử bấm thử vài nút xem có phản hồi độ rung/âm thanh không.

**🛠️ Hướng dẫn xử lý:**
1. Xác nhận với khách máy đang dùng bình thường rồi đơ đột ngột (không phải vừa cập nhật hay vừa khởi động).
2. Thử bấm lần lượt các nút vật lý xem máy có phản hồi rung/âm thanh không.
3. Nhấn giữ nút nguồn tối thiểu 15-20 giây liên tục đến khi màn hình tắt hẳn (force restart).
4. Thả tay, đợi vài giây rồi nhấn nút nguồn 1 lần để khởi động lại.
5. Kiểm tra dữ liệu hoạt động gần nhất còn nguyên trong Garmin Connect không sau khi đồng bộ lại.

**🚫 Tuyệt đối không được làm:** Không rút sạc đột ngột hoặc tháo pin trong lúc force restart nếu máy đang hiển thị màn hình sạc; không thực hiện khôi phục cài đặt gốc ngay khi chỉ mới đơ 1 lần.

**💬 Kịch bản tư vấn:** "Đồng hồ mình bị đơ tạm thời thôi ạ, em giữ nút nguồn khởi động lại cho mình, dữ liệu tập luyện đã lưu vẫn còn nguyên không mất đâu ạ."

**📦 Lưu ý TTBH:** Máy đơ lặp lại nhiều lần dù đã force restart và đã cập nhật phần mềm mới nhất: đề xuất khách nhận bảo hành; thiết bị sẽ được gửi về Trung tâm bảo hành (TTBH) để kiểm tra bộ nhớ/mạch xử lý.

---

### Garmin Pay không thanh toán được / báo lỗi khi chạm thanh toán
- **ID:** lib-g13
- **Chẩn đoán ngắn:** Thẻ chưa kích hoạt đúng cách trong Garmin Connect, phần mềm đồng hồ/app cũ, hoặc ngân hàng/loại thẻ chưa hỗ trợ Garmin Pay tại Việt Nam.
- **Từ khóa:** garmin pay, thanh toán, không quẹt được, chạm thanh toán

**🔍 Chẩn đoán:** Xác nhận thẻ đã thêm và kích hoạt thành công trong Garmin Connect (không chỉ thêm mà chưa xác thực OTP ngân hàng), kiểm tra ngân hàng phát hành thẻ có nằm trong danh sách hỗ trợ Garmin Pay không.

**🛠️ Hướng dẫn xử lý:**
1. Mở app Garmin Connect > Menu > Garmin Pay, kiểm tra trạng thái thẻ đã "Đã kích hoạt" hay còn "Chờ xác thực".
2. Nếu còn chờ xác thực: hướng dẫn khách hoàn tất OTP từ ngân hàng để kích hoạt thẻ.
3. Cập nhật app Garmin Connect và phần mềm đồng hồ lên bản mới nhất (Cài đặt trên đồng hồ > Hệ thống > Cập nhật phần mềm).
4. Trên đồng hồ, mở ví Garmin Pay (thường giữ nút hoặc vuốt theo widget tùy dòng máy), nhập mã PIN Garmin Pay, thử chạm vào máy POS hỗ trợ thanh toán không tiếp xúc.
5. Nếu vẫn lỗi: vào Garmin Connect > Garmin Pay > chọn thẻ > "Xóa thẻ", sau đó thêm lại từ đầu.

**🚫 Tuyệt đối không được làm:** Không yêu cầu khách cung cấp đầy đủ số thẻ/CVV cho nhân viên để "thêm hộ" — việc thêm thẻ phải do chính khách thao tác trên app của họ để đảm bảo an toàn thông tin thanh toán.

**💬 Kịch bản tư vấn:** "Em kiểm tra thấy thẻ mình cần xác thực/thêm lại trong app Garmin Connect ạ, mình làm theo hướng dẫn trên điện thoại, xong là quẹt thanh toán lại được bình thường nhé."

**📦 Lưu ý TTBH:** Đây là vấn đề liên quan tài khoản/ngân hàng, không phải lỗi phần cứng — không cần gửi TTBH; nếu ngân hàng của khách chưa hỗ trợ Garmin Pay, tư vấn khách đợi ngân hàng cập nhật hoặc dùng thẻ khác.

---
