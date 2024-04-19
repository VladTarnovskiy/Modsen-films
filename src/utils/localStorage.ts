export class MyLocalStorage {
  static getItem(item: string): string | undefined {
    const theme = localStorage.getItem(item);
    let data: undefined | string = undefined;
    if (theme) {
      if (typeof theme === 'string') {
        data = theme;
      } else {
        data = JSON.parse(theme);
      }
    }
    return data;
  }

  static setItem(name: string, item: string | object | boolean): void {
    if (typeof item === 'string') {
      localStorage.setItem(name, item);
    } else {
      localStorage.setItem(name, JSON.stringify(item));
    }
  }
}
