const buttons_map = {
    'Cross or A': 0x00000001,
    'Triangle or Y': 0x00000002,
    'Circle or B': 0x00000004,
    'Square or X': 0x00000008,
    'D-pad Left': 0x00000010,
    'D-pad Right': 0x00000020,
    'D-pad Up': 0x00000040,
    'D-pad Down': 0x00000080,
    'Options or Menu': 0x00000100,
    'L1 or LB': 0x00000200,
    'R1 or RB': 0x00000400,
    'L2 or LT': 0x00000800,
    'R2 or RT': 0x00001000,
    'Left Stick Click': 0x00002000,
    'Right Stick Click': 0x00004000,
    'Right Stick Left': 0x00008000,
    'Right Stick Right': 0x00010000,
    'Right Stick Up': 0x00020000,
    'Right Stick Down': 0x00040000,
    'Special': 0x00080000,
    'UDP Action 1': 0x00100000,
    'UDP Action 2': 0x00200000,
    'UDP Action 3': 0x00400000,
    'UDP Action 4': 0x00800000,
    'UDP Action 5': 0x01000000,
    'UDP Action 6': 0x02000000,
    'UDP Action 7': 0x04000000,
    'UDP Action 8': 0x08000000,
    'UDP Action 9': 0x10000000,
    'UDP Action 10': 0x20000000,
}

module.exports.button_end = (bit) => {
    for (let btn in buttons_map) {
        if( Number(buttons_map[btn].toString(16)) == bit){
            return console.log(btn);
        }
    }
}
