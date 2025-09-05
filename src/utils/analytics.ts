/**
 * Dispara um evento do Google Analytics (gtag).
 * @param {string} action - O nome da ação do evento (ex: 'click').
 * @param {string} category - A categoria do evento (ex: 'CTA').
 * @param {string} label - O rótulo do evento (ex: 'Header Button').
 */
export const trackEvent = (action: string, category: string, label: string) => {
  if (window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
    });
  } else {
    console.log(`Analytics Event (gtag not found): ${action}, ${category}, ${label}`);
  }
};
