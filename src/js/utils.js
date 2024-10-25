const dom = (el, toEl = true) => {
    const allEl = document.querySelectorAll(el)
    if (allEl.length === 1) {
        return toEl ? allEl[0] : allEl;
    }
    return allEl;
}
const addEvent = (el, event, callback) => {
    el.addEventListener(event, callback)
}
const addEventAll = (arr, event, callback) => {
    for (const el of arr) {
        el.addEventListener(event, callback);
    }
}
const getIndex = (el) => {
    if (typeof el !== 'string') {
        return [...el.parentNode.children].indexOf(el);
    }
    return [...dom(el).parentNode.children].indexOf(dom(el));
}
const offset = (el) => {
    const box = el.getBoundingClientRect();
    const docElem = document.documentElement;
    return {
        top: box.top + window.scrollY - docElem.clientTop,
        left: box.left + window.scrollX - docElem.clientLeft
    };
}
function getRotationDegrees(element) {
    const props = element.style.transform.match(/rotate\((\d+)(.+)\)/)
    if (props) {
        const [a, b, c] = props.slice(1)
        return Number.parseFloat(b)
    } 
    return 0;
}
function generateHtmlFromJson(jsonData) {
    let htmlString = "";

    function processElement(element) {
        switch (element.type) {
            case "h2":
                return `<h2 data-scrollTo=${encodeURI(element.content)} >${element.content}</h2>`
            case "paragraph":
                return`<p>${element.content}</p>`;
            case "ul":
                for (const li of element.content) {
                    return `<li>${li.content}</li>`;
                }
        }
    }

    for (const el of jsonData) {
        htmlString += processElement(el);
    }

    return htmlString;
}
const chunkArray = (array, chunkSize) => {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        result.push(array.slice(i, i + chunkSize));
    }
    return result;
};
function getTranslate(x, y, z) {
    return `translate3d(${x}px, ${y}px, ${z}px)`;
}
const typeSplit = {
    chars: {
        types: 'lines, words, chars',
        lineClass: 'split-line',
        wordClass: 'split-word',
        charClass: 'split-char',
        tagName: 'span'
    },
    words: {
        types: 'lines, words',
        lineClass: 'split-line',
        wordClass: 'split-word',
        tagName: 'span'
    },
    lines: {
        types: 'lines',
        lineClass: 'split-line',
        tagName: 'span'
    },
};
const parseRem = (input) => {
    return input / 10 * Number.parseFloat(window.getComputedStyle(dom('html')).getPropertyValue("font-size"));
}
const parseToRem = (input) => {
    return input * Number.parseFloat(window.getComputedStyle(dom('html')).getPropertyValue("font-size")) / 100;
}
const lerp = (x, y, a = 0.1) => x * (1 - a) + y * a;
const clamp = (a, min = 0, max = 1) => Math.min(max, Math.max(min, a));
const invlerp = (x, y, a) => clamp((a - x) / (y - x));
const range = (x1, y1, x2, y2, a) => lerp(x2, y2, invlerp(x1, y1, a));
const sawtooth = (x, fract) => x % fract;

const xSetter = (el) => gsap.quickSetter(el, 'x', 'px'); // Removed template literals
const xGetter = (el) => gsap.getProperty(el, 'x');

const ySetter = (el) => gsap.quickSetter(el, 'y', 'px');
const yGetter = (el) => gsap.getProperty(el, 'y');

const rotSetter = (el) => gsap.quickSetter(el, 'rotate', 'deg');
const rotGetter = (el) => gsap.getProperty(el, 'rotate');

const scaleXSetter = (el) => gsap.quickSetter(el, 'scaleX');
const scaleXGetter = (el) => gsap.getProperty(el, 'scaleX');

function debounce(func, delay = 100) {
    let timer;
    return (event) => {
        if (timer) clearTimeout(timer);
        timer = setTimeout(func, delay, event);
    };
}

function isEmpty(data) {
    if
        (data === null
        || (typeof data === 'undefined')
        || (typeof data === 'string' && data.trim().length === 0)
        || (typeof data === 'object' && Object.keys(data).length === 0)
        || (typeof data === 'number' && Number.isNaN(data))
        || (typeof data === 'number' && !Number.isFinite(data))
        || (Array.isArray(data) && data.length === 0))
        return true;
    return false;
}

export {
    debounce,
    dom,
    addEvent,
    typeSplit,
    getRotationDegrees,
    addEventAll,
    getIndex,
    offset,
    parseRem,
    parseToRem,
    sawtooth,
    generateHtmlFromJson,
    lerp,
    chunkArray,
    clamp,
    invlerp,
    range,
    getTranslate,
    xSetter,
    xGetter,
    ySetter,
    yGetter,
    rotSetter,
    rotGetter,
    scaleXSetter,
    scaleXGetter,
    isEmpty
}
