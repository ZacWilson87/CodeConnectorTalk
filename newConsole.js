export default class Console {
    clr() {
        for (let i = 0; i < arguments.length; i++) {
            const randomColor = '#' + Math.floor(Math.random() * 0xffffff).toString(16);
            const allArgs = [...arguments].join(',');
            console.log(`%c ${allArgs}`, `color: ${randomColor}; font-size: 14px;`);
        }
    }
}

export function clr() {
    for (let i = 0; i < arguments.length; i++) {
        const randomColor = '#' + Math.floor(Math.random() * 0xffffff).toString(16);
        const allArgs = [...arguments].join(',');
        console.log(`%c ${allArgs}`, `color: ${randomColor}; font-size: 14px;`);
    }
}