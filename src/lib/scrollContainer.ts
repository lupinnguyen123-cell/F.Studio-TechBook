export const MAIN_SCROLL_CONTAINER_ID = 'main-scroll-container';

/**
 * Trả về phần tử ĐANG THỰC SỰ cuộn của app.
 *
 * Lưu ý (đã kiểm chứng bằng đo runtime, không phải suy đoán): thẻ <main> tuy có class
 * `overflow-y-auto` nhưng khung bọc ngoài dùng `min-h-screen` (không phải `h-screen`),
 * nên main tự giãn cao theo nội dung — clientHeight luôn bằng scrollHeight và main
 * KHÔNG BAO GIỜ cuộn. Thứ cuộn thật là document/window.
 *
 * Hàm kiểm tra tại runtime thay vì hardcode một trong hai, để nếu sau này layout đổi
 * sang khung cuộn trong (vd: đổi min-h-screen thành h-screen) thì vẫn chạy đúng.
 */
export function getScrollTarget(): HTMLElement | null {
  const main = document.getElementById(MAIN_SCROLL_CONTAINER_ID);
  if (main && main.scrollHeight > main.clientHeight + 1) return main;
  return (document.scrollingElement as HTMLElement | null) ?? document.documentElement;
}
