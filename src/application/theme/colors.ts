import { PALETTE } from './palette';

import {
    ColorScheme,
    ColorScope,
    ColorScopeActions,
    ColorScopeApplication,
    ColorScopeContainer, ColorScopeMessages,
    ColorScopeTypography
} from '@dhampir/core';

const {
    AMBER,
    FOGRA_29,
    GRAY,
    RED_MUNSELL,
    CG_BLUE,
    MANTIS,
    BRIGHT_YELLOW_CRYOLA,
    BABY_POWDER,
    BOTTLE_GREEN,
    GRANNY_SMITH_APPLE
} = PALETTE;

export const colors: ColorScheme = {
    [ColorScope.APPLICATION]: {
        [ColorScopeApplication.BG]: GRAY,
    },
    [ColorScope.TYPOGRAPHY]: {
        [ColorScopeTypography.TEXT_REGULAR]: GRAY,
        [ColorScopeTypography.TEXT_DARK]: BABY_POWDER,
        [ColorScopeTypography.LINK]: BOTTLE_GREEN,
        [ColorScopeTypography.LINK_HOVER]: FOGRA_29,
        [ColorScopeTypography.HEADING]: BOTTLE_GREEN,
    },
    [ColorScope.CONTAINER]: {
        [ColorScopeContainer.BORDER]: MANTIS,
        [ColorScopeContainer.BG]: GRANNY_SMITH_APPLE,
        [ColorScopeContainer.FG]: BOTTLE_GREEN,
    },
    [ColorScope.ACTIONS]: {
        [ColorScopeActions.ACTION]: MANTIS,
        [ColorScopeActions.DANGER]: RED_MUNSELL,
        [ColorScopeActions.COMMON]: AMBER,
        [ColorScopeActions.ACTION_DISABLED]: AMBER,
    },
    [ColorScope.MESSAGES]: {
        [ColorScopeMessages.WARNING_BG]: BRIGHT_YELLOW_CRYOLA,
        [ColorScopeMessages.INFO_BG]: CG_BLUE,
        [ColorScopeMessages.ERROR_BG]: RED_MUNSELL,
        [ColorScopeMessages.SUCCESS_BG]: MANTIS,
    },
}
