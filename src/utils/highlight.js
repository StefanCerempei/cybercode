/**
 * Lightweight syntax highlighter for C and Python.
 * Returns an HTML string with <span> color tags.
 */
export function highlight(code, language) {
  let html = code
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  if (language === 'c') {
    html = html.replace(/(#\w+)/g,
      '<span style="color:#bf5af2">$1</span>');
    html = html.replace(
      /\b(int|char|float|double|void|return|if|else|for|while|do|switch|case|break|continue|struct|typedef|include|define|printf|scanf|main|long|short|unsigned|signed|const|static|NULL)\b/g,
      '<span style="color:#ff6b00">$1</span>');
    html = html.replace(/("(?:[^"\\]|\\.)*")/g,
      '<span style="color:#00ff88">$1</span>');
    html = html.replace(/('(?:[^'\\]|\\.)')/g,
      '<span style="color:#00ff88">$1</span>');
    html = html.replace(/(\/\/.*)/g,
      '<span style="color:#3a5a7a;font-style:italic">$1</span>');
    html = html.replace(/(\/\*[\s\S]*?\*\/)/g,
      '<span style="color:#3a5a7a;font-style:italic">$1</span>');
    html = html.replace(/\b(\d+\.?\d*)\b/g,
      '<span style="color:#ff2d55">$1</span>');
    html = html.replace(/\b([a-zA-Z_]\w*)\s*(?=\()/g,
      '<span style="color:#00f5ff">$1</span>');
  } else {
    html = html.replace(
      /\b(def|class|import|from|return|if|elif|else|for|while|in|not|and|or|True|False|None|pass|break|continue|try|except|finally|with|as|lambda|yield|global|nonlocal|del|assert|raise|print|len|range|input|int|str|float|list|dict|tuple|set|type|self)\b/g,
      '<span style="color:#00f5ff">$1</span>');
    html = html.replace(/("(?:[^"\\]|\\.)*")/g,
      '<span style="color:#00ff88">$1</span>');
    html = html.replace(/('(?:[^'\\]|\\.)*')/g,
      '<span style="color:#00ff88">$1</span>');
    html = html.replace(/(#.*)/g,
      '<span style="color:#3a5a7a;font-style:italic">$1</span>');
    html = html.replace(/\b(\d+\.?\d*)\b/g,
      '<span style="color:#ff2d55">$1</span>');
    html = html.replace(/\b([a-zA-Z_]\w*)\s*(?=\()/g,
      '<span style="color:#ff6b00">$1</span>');
    html = html.replace(/(@\w+)/g,
      '<span style="color:#bf5af2">$1</span>');
  }

  return html;
}
