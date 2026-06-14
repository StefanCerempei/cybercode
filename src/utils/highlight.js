/**
 * Lightweight syntax highlighter for C and Python.
 * Single-pass tokenizer — avoids re-coloring already-generated HTML spans.
 */

const C_KEYWORDS = new Set([
    'int','char','float','double','void','return','if','else','for','while',
    'do','switch','case','break','continue','struct','typedef','long','short',
    'unsigned','signed','const','static','NULL','main','printf','scanf',
]);

const PY_KEYWORDS = new Set([
    'def','class','import','from','return','if','elif','else','for','while',
    'in','not','and','or','True','False','None','pass','break','continue',
    'try','except','finally','with','as','lambda','yield','global','nonlocal',
    'del','assert','raise','print','len','range','input','int','str','float',
    'list','dict','tuple','set','type','self',
]);

function esc(s) {
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function span(color, text) {
    return `<span style="color:${color}">${esc(text)}</span>`;
}

export function highlight(code, language) {
    const isC = language === 'c';

    // Tokenize with a single regex that captures all token types in priority order
    const TOKEN = isC
        ? /(\/\/[^\n]*)|(\/\*[\s\S]*?\*\/)|(#\w+)|("(?:[^"\\]|\\.)*")|('(?:[^'\\]|\\.)*')|(\b\d+\.?\d*\b)|([a-zA-Z_]\w*)\s*(?=\()|([a-zA-Z_]\w*)|([^\w\s"'#\/]+)/g
        : /(#[^\n]*)|("""[\s\S]*?"""|'''[\s\S]*?''')|("(?:[^"\\]|\\.)*")|('(?:[^'\\]|\\.)*')|(@\w+)|(\b\d+\.?\d*\b)|([a-zA-Z_]\w*)\s*(?=\()|([a-zA-Z_]\w*)|([^\w\s"'#@]+)/g;

    let result = '';
    let lastIndex = 0;

    for (const m of code.matchAll(TOKEN)) {
        // Append any gap (whitespace / newlines) verbatim
        if (m.index > lastIndex) {
            result += esc(code.slice(lastIndex, m.index));
        }
        lastIndex = m.index + m[0].length;

        if (isC) {
            const [, lineComment, blockComment, directive, dStr, sStr, num, fnCall, word] = m;
            if (lineComment || blockComment) {
                result += span('#3a5a7a', m[0]);
            } else if (directive) {
                result += span('#bf5af2', m[0]);
            } else if (dStr || sStr) {
                result += span('#00ff88', m[0]);
            } else if (num) {
                result += span('#ff2d55', m[0]);
            } else if (fnCall) {
                result += span('#00f5ff', m[0]);
                // re-add the lookahead char (it wasn't consumed)
            } else if (word) {
                result += C_KEYWORDS.has(word)
                    ? span('#ff6b00', word)
                    : esc(word);
            } else {
                result += esc(m[0]);
            }
        } else {
            const [, comment, triStr, dStr, sStr, decorator, num, fnCall, word] = m;
            if (comment) {
                result += span('#3a5a7a', m[0]);
            } else if (triStr || dStr || sStr) {
                result += span('#00ff88', m[0]);
            } else if (decorator) {
                result += span('#bf5af2', m[0]);
            } else if (num) {
                result += span('#ff2d55', m[0]);
            } else if (fnCall) {
                result += span('#ff6b00', m[0]);
            } else if (word) {
                result += PY_KEYWORDS.has(word)
                    ? span('#00f5ff', word)
                    : esc(word);
            } else {
                result += esc(m[0]);
            }
        }
    }

    // Append any trailing text
    result += esc(code.slice(lastIndex));
    return result;
}