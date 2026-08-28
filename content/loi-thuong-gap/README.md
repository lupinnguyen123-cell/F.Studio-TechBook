# Thư viện lỗi thường gặp — Nguồn dữ liệu

Đây là nơi lưu **toàn bộ nội dung** hiển thị trong mục "Thư viện kỹ thuật" và phần gợi ý tức thì (không cần AI) của app.

- `apple.md` — iPhone, iPad, Mac, Watch, AirPods
- `garmin.md` — Fenix, Forerunner, Edge
- `android.md` — Samsung, Xiaomi, Oppo, Vivo, Pixel...

App hiển thị Thư viện theo dạng danh mục: **Hãng → Thiết bị**, mỗi thiết bị kèm số đếm để dễ quan sát đang thiếu/thừa lỗi ở đâu. Vì vậy mỗi mục **bắt buộc phải gắn đúng 1 thiết bị** trong danh sách chuẩn dưới đây — dùng đúng tên (kể cả dấu câu) để lỗi được xếp đúng nhóm, không tạo nhóm mới tùy ý:

- **Apple:** `iPhone` · `iPad` · `Mac` · `Apple Watch` · `AirPods`
- **Garmin:** `Đồng hồ (Fenix/Forerunner)` · `Edge (xe đạp)`
- **Android:** `Samsung` · `Xiaomi` · `Oppo` · `Vivo` · `Pixel` · `Chung (mọi hãng)` (dùng khi lỗi không đặc thù hãng nào)

Bạn chỉnh sửa nội dung sai, thêm mục mới ngay trong các file này — không cần đụng vào code. Khi xong (hoặc xong từng phần), báo Claude để đồng bộ vào app.

## Cách thêm 1 mục lỗi mới

Copy đúng khối này, dán vào cuối file `.md` tương ứng, rồi điền nội dung:

```markdown
### <Tên triệu chứng — khách/nhân viên mô tả thế nào thì viết vậy>
- **ID:** <để trống — Claude sẽ tự sinh khi đồng bộ>
- **Thiết bị:** <chọn đúng 1 tên trong danh sách chuẩn ở trên>
- **Chẩn đoán ngắn:** <nguyên nhân cốt lõi, 1 câu>
- **Từ khóa:** <3-5 từ khóa cách nhau bằng dấu phẩy, dùng để tìm kiếm>

**🔍 Chẩn đoán:** <cách xác định nhanh, loại trừ nguyên nhân khác>

**🛠️ Hướng dẫn xử lý:**
1. <bước 1 — theo đúng thứ tự nhân viên sẽ làm>
2. <bước 2>
3. <bước 3, nếu có>

**🚫 Tuyệt đối không được làm:** <những thao tác/lời hứa nhân viên KHÔNG được làm, dù chỉ 1 lần — nếu không có rủi ro đặc biệt, ghi lưu ý thận trọng chung>

**💬 Kịch bản tư vấn:** "<câu nói tự nhiên để giải thích/trấn an khách>"

**📦 Lưu ý TTBH:** <lý do kỹ thuật>: đề xuất khách nhận bảo hành; thiết bị sẽ được gửi về Trung tâm bảo hành (TTBH) để kiểm tra và có phương án xử lý. (Nếu xử lý được tại chỗ, ghi rõ hướng xử lý tại chỗ thay vì gửi TTBH.)

---
```

## Quy tắc

- **Thiết bị** quyết định lỗi này hiện ở nhóm nào trong Thư viện — chỉ dùng đúng tên trong danh sách chuẩn ở trên, không tự đặt tên mới (ví dụ đừng ghi "iPhone 13" hay "Realme", ghi đúng "iPhone" hoặc dùng "Chung (mọi hãng)" nếu không đặc thù hãng).
- **Từ khóa** quan trọng nhất cho việc tìm kiếm — nghĩ như khách/nhân viên sẽ gõ gì (ví dụ: "sạc", "không lên nguồn", chứ không chỉ thuật ngữ kỹ thuật).
- **Hướng dẫn xử lý** viết thành các bước đánh số theo đúng thứ tự thao tác thực tế, không viết dồn thành 1 đoạn văn dài — nhân viên mới vào nghề cũng làm theo được.
- **Tuyệt đối không được làm** là mục bắt buộc phải có nội dung cho mọi mục lỗi (không để trống) — kể cả lỗi ít rủi ro cũng nên có ít nhất 1 lưu ý (ví dụ: không tự ý cam kết thời gian sửa chữa, không xóa dữ liệu khách chưa xác nhận).
- **Tên menu/nút bấm** trong "Hướng dẫn xử lý" ghi theo đúng giao diện hiện hành tại thời điểm viết. Nếu giao diện máy khách không khớp 100% (do hãng đổi UI ở bản cập nhật mới), nhân viên tìm mục có chức năng tương đương thay vì máy móc theo đúng câu chữ.
- **Lưu ý TTBH**: khi lỗi không xử lý tại chỗ được, luôn viết theo mẫu "<lý do kỹ thuật>: đề xuất khách nhận bảo hành; thiết bị sẽ được gửi về Trung tâm bảo hành (TTBH) để kiểm tra và có phương án xử lý." — thống nhất cách nhân viên tư vấn khách trên toàn hệ thống. Chỉ bỏ qua mẫu này nếu lỗi thực sự xử lý được tại chỗ hoặc không liên quan phần cứng (ví dụ: vấn đề tài khoản, phần mềm thuần túy).
- Mỗi mục nên tập trung 1 triệu chứng cụ thể, đừng gộp nhiều lỗi khác nhau vào 1 mục.
- Giữ giọng văn tự nhiên, gần gũi ở phần "Kịch bản tư vấn" — đây là câu nhân viên sẽ nói thẳng với khách.
- Muốn **sửa** mục đã có: giữ nguyên dòng `ID`, sửa nội dung bên dưới — Claude sẽ cập nhật đúng mục đó thay vì tạo mục trùng.
- Muốn **xóa** mục: xóa cả khối (từ `###` đến hết `---`) khỏi file.
- Không cần lo về việc trùng ID giữa các file — mỗi hãng có tiền tố ID riêng.

## Quy trình đồng bộ

1. Bạn sửa/thêm nội dung trong `apple.md` / `garmin.md` / `android.md`.
2. Báo Claude: "đã cập nhật file, đồng bộ vào app giúp tôi".
3. Claude đọc lại 3 file, cập nhật `src/constants.ts`, test lại trên app, rồi báo kết quả (mục nào mới, mục nào sửa, có gì cần bạn rà lại không).
