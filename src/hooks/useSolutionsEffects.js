import { useEffect } from 'react';

/** Solutions page tab switching (legacy openTab) */
export function useSolutionsEffects() {
  useEffect(() => {
    const openTab = (tabId, btn) => {
      document.querySelectorAll('.action-tab-content').forEach((content) => {
        content.classList.remove('active');
      });
      document.querySelectorAll('.act-btn').forEach((b) => {
        b.classList.remove('active');
      });
      document.getElementById(tabId)?.classList.add('active');
      btn?.classList.add('active');
    };

    const handlers = [];
    document.querySelectorAll('.act-btn[data-tab]').forEach((btn) => {
      const handler = () => openTab(btn.getAttribute('data-tab'), btn);
      btn.addEventListener('click', handler);
      handlers.push({ btn, handler });
    });

    return () => {
      handlers.forEach(({ btn, handler }) => btn.removeEventListener('click', handler));
    };
  }, []);
}
