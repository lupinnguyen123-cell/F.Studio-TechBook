import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { MAIN_SCROLL_CONTAINER_ID, getScrollTarget } from '../lib/scrollContainer';

const SHOW_AFTER_PX = 400;

/**
 * Nút "về đầu trang" nổi ở góc dưới bên phải, phía trên thanh điều hướng.
 *
 * Lắng nghe scroll ở CẢ window lẫn <main>: layout hiện tại cuộn window (xem ghi chú
 * trong lib/scrollContainer.ts), nhưng nếu sau này đổi sang khung cuộn trong thì
 * scroll event của phần tử không nổi bọt lên window nên phải gắn riêng.
 */
export function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const read = () => setVisible((getScrollTarget()?.scrollTop ?? 0) > SHOW_AFTER_PX);
    read(); // đồng bộ ngay khi mount (vd: chuyển tab lúc đang cuộn giữa trang)

    const main = document.getElementById(MAIN_SCROLL_CONTAINER_ID);
    window.addEventListener('scroll', read, { passive: true });
    main?.addEventListener('scroll', read, { passive: true });
    return () => {
      window.removeEventListener('scroll', read);
      main?.removeEventListener('scroll', read);
    };
  }, []);

  if (!visible) return null;

  return (
    // Lớp bọc fixed + max-w-6xl để nút thẳng hàng với mép phải khung nội dung trên
    // màn hình rộng, giống cách thanh nav dưới cùng đang căn. pointer-events-none để
    // lớp bọc trong suốt không chặn thao tác vào nội dung phía sau.
    <div className="fixed bottom-28 left-0 right-0 max-w-6xl mx-auto px-4 z-40 flex justify-end pointer-events-none">
      <button
        onClick={() => getScrollTarget()?.scrollTo({ top: 0, behavior: 'smooth' })}
        title="Về đầu trang"
        aria-label="Về đầu trang"
        className="pointer-events-auto size-11 rounded-full flex items-center justify-center shadow-lg border border-[#d2d2d7] dark:border-slate-700 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md text-[#1d1d1f] dark:text-slate-200 hover:bg-[#f5f5f7] dark:hover:bg-slate-700 active:scale-95 transition-all"
      >
        <ArrowUp size={20} />
      </button>
    </div>
  );
}
