export const COLOR = {
    WHITE: `rgba(255,255,255,1)`,
    WHITE_10: `rgba(255,255,255,0.1)`,
    WHITE_20: `rgba(255,255,255,0.2)`,
    WHITE_30: `rgba(255,255,255,0.3)`,
    WHITE_40: `rgba(255,255,255,0.4)`,
    WHITE_50: `rgba(255,255,255,0.5)`,
    WHITE_60: `rgba(255,255,255,0.6)`,
    WHITE_70: `rgba(255,255,255,0.7)`,
    WHITE_80: `rgba(255,255,255,0.8)`,
    WHITE_90: `rgba(255,255,255,0.9)`,

    BLACK: `rgba(0,0,0,1)`,
    BLACK_10: `rgba(0,0,0,0.1)`,
    BLACK_20: `rgba(0,0,0,0.2)`,
    BLACK_30: `rgba(0,0,0,0.3)`,
    BLACK_40: `rgba(0,0,0,0.4)`,
    BLACK_50: `rgba(0,0,0,0.5)`,
    BLACK_60: `rgba(0,0,0,0.6)`,
    BLACK_70: `rgba(0,0,0,0.7)`,
    BLACK_80: `rgba(0,0,0,0.8)`,
    BLACK_90: `rgba(0,0,0,0.9)`,

    TRANSPARANT: `rgba(0,0,0,0)`,

    PRIMARY: `rgba(0,119,200,1)`,
    PRIMARY_40: `rgba(0,119,200,0.4)`,
    PRIMARY_60: `rgba(0,119,200,0.4)`,
    PRIMARYLIGHT: `rgba(188,228,255,1)`,
    PRIMARYLIGHT2: `rgba(226,244,255,1)`,
    PRIMARYLIGHT3: `rgba(242,250,255,1)`,

    LIGHTGRAY: `rgba(246,246,246,1)`,
    GRAY: `rgba(217,217,217,1)`,
    GRAY2: `rgba(221,221,221,1)`,
    GRAY3: `rgba(222,222,222,1)`,

    SLAT: `rgba(49,49,49,1)`,
    SLAT2: `rgba(115,115,115,1)`,
    SLAT3: `rgba(143,143,143,1)`,

    YELLOW: `rgba(255,181,0,1)`,
    DARKRED: `rgba(230,0,0,1)`,
    RED: `rgba(255,56,20,1)`,
}

export const GRADIENTCOLOR = {
    PRIMARY: [COLOR.PRIMARY, COLOR.PRIMARYLIGHT],

    UPLOADBORDER: [COLOR.PRIMARY, COLOR.PRIMARYLIGHT2, `rgba(137,207,255,1)`],

    MENUBACK: [COLOR.PRIMARY_40, COLOR.TRANSPARANT],
    MENUBORDER: [COLOR.TRANSPARANT, COLOR.PRIMARY_60],
}