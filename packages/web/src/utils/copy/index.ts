export const copy = (text: string, title: string = ''): void => {
  navigator.clipboard.writeText(text);
  alert(`Copy ${title || text} to Clipboard`);
};

export default copy;
