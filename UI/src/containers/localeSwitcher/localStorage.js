export const loadLocale = () => {
    try {
        const locale = localStorage.getItem('locale');
        if (locale === null) {
            return undefined;
        }
        return locale;
    } catch (err) {
        return undefined;
    } 
};

export const saveLocale = (locale) => {
    try {
        localStorage.setItem('locale', locale);
      } catch {
        // ignore write errors
      }
}