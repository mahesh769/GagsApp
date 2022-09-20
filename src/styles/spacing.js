import {
    Dimensions
} from 'react-native';

import { moderateScaleVertical, moderateScale, scale, verticalScale } from './responsiveStyles';
const { height, width } = Dimensions.get("window")
const { screenHeight, screenWidth } = Dimensions.get("screen")

export const spacing = {
    PADDING_2: moderateScale(2),
    PADDING_4: moderateScale(4),
    PADDING_8: moderateScale(8),
    PADDING_VERTICAL_8: moderateScaleVertical(8),
    PADDING_10: moderateScale(10),
    PADDING_12: moderateScale(12),
    PADDING_16: moderateScale(16),
    PADDING_15: moderateScale(15),
    PADDING_20: moderateScale(20),
    PADDING_24: moderateScale(24),
    PADDING_25: moderateScale(25),
    PADDING_30: moderateScale(30),
    PADDING_32: moderateScale(32),
    PADDING_36: moderateScale(36),
    PADDING_44: moderateScale(44),
    PADDING_48: moderateScale(48),
    PADDING_68: moderateScale(68),
    PADDING_72: moderateScale(72),

    HEIGHT_300: verticalScale(300),
    HEIGHT_290: verticalScale(290),
    HEIGHT_270: verticalScale(270),
    HEIGHT_260: verticalScale(260),
    HEIGHT_250: verticalScale(250),
    HEIGHT_230: verticalScale(230),
    HEIGHT_240: verticalScale(240),
    HEIGHT_226: verticalScale(226),
    HEIGHT_216: verticalScale(216),
    HEIGHT_196: verticalScale(196),
    HEIGHT_192: verticalScale(192),
    HEIGHT_128: verticalScale(128),
    HEIGHT_136: verticalScale(136),
    HEIGHT_160: verticalScale(160),
    HEIGHT_152: verticalScale(152),
    HEIGHT_110: verticalScale(110),
    HEIGHT_128: verticalScale(128),
    HEIGHT_90: verticalScale(90),
    HEIGHT_88: verticalScale(88),
    HEIGHT_84: verticalScale(84),
    HEIGHT_82: verticalScale(82),
    HEIGHT_80: verticalScale(80),
    HEIGHT_78: verticalScale(78),
    HEIGHT_74: verticalScale(74),
    HEIGHT_72: verticalScale(72),
    HEIGHT_64: verticalScale(64),
    HEIGHT_60: verticalScale(60),
    HEIGHT_56: verticalScale(56),
    HEIGHT_50: verticalScale(50),
    HEIGHT_40: verticalScale(40),
    HEIGHT_44: verticalScale(44),
    HEIGHT_48: verticalScale(48),
    HEIGHT_32: verticalScale(32),
    HEIGHT_30: verticalScale(30),
    HEIGHT_38: verticalScale(38),
    HEIGHT_34: verticalScale(34),
    HEIGHT_28: verticalScale(28),
    HEIGHT_24: verticalScale(24),
    HEIGHT_20: verticalScale(20),
    HEIGHT_18: verticalScale(18),
    HEIGHT_16: verticalScale(16),
    HEIGHT_14: verticalScale(14),
    HEIGHT_12: verticalScale(12),
    HEIGHT_10: verticalScale(10),
    HEIGHT_8: verticalScale(8),
    HEIGHT_6: verticalScale(6),
    HEIGHT_5: verticalScale(5),
    HEIGHT_4: verticalScale(4),
    HEIGHT_2: verticalScale(2),
    HEIGHT_1: verticalScale(1),
    BUTTON_HEIGHT: moderateScaleVertical(48),
    FULL_HEIGHT: height,
    FULL_SCREEN_HEIGHT: screenHeight,

    FULL_WIDTH: width,
    FULL_SCREEN_WIDTH: screenWidth,
    WIDTH_1: scale(1),
    WIDTH_2: scale(2),
    WIDTH_6: scale(6),
    WIDTH_8: scale(8),
    WIDTH_10: scale(10),
    WIDTH_12: scale(12),
    WIDTH_14: scale(14),
    WIDTH_16: scale(16),
    WIDTH_20: scale(20),
    WIDTH_24: scale(24),
    WIDTH_40: scale(40),
    WIDTH_46: scale(46),
    WIDTH_30: scale(30),
    WIDTH_34: scale(34),
    WIDTH_50: scale(50),
    WIDTH_56: scale(56),
    WIDTH_60: scale(60),
    WIDTH_70: scale(70),
    WIDTH_72: scale(72),
    WIDTH_74: scale(74),
    WIDTH_78: scale(78),
    WIDTH_80: scale(80),
    WIDTH_84: scale(84),
    WIDTH_90: scale(90),
    WIDTH_100: scale(100),
    WIDTH_112: scale(112),
    WIDTH_116: scale(116),
    WIDTH_118: scale(118),
    WIDTH_121: scale(121),
    WIDTH_124: scale(124),
    WIDTH_135: scale(135),
    WIDTH_152: scale(152),
    WIDTH_156: scale(156),
    WIDTH_160: scale(160),
    WIDTH_164: scale(164),
    WIDTH_184: scale(184),
    WIDTH_260: scale(260),
    WIDTH_296: scale(296),
    WIDTH_312: scale(312),
    WIDTH_328: scale(328),
    WIDTH_344: scale(344),

    RADIUS_1: moderateScale(1),
    RADIUS_10: moderateScale(10),
    RADIUS_2: moderateScale(2),
    RADIUS_4: moderateScale(4),
    RADIUS_8: moderateScale(8),
    RADIUS_7: moderateScale(7),
    RADIUS_6: moderateScale(6),
    RADIUS_12: moderateScale(12),
    RADIUS_16: moderateScale(16),
    RADIUS_20: moderateScale(20),
    RADIUS_30: moderateScale(30),
    RADIUS_24: moderateScale(24),
    RADIUS_50: moderateScale(50),
    RADIUS_82: moderateScale(82),
    RADIUS_90: moderateScale(90),

    MARGIN_0: moderateScale(0),
    MARGIN_2: moderateScale(2),
    MARGIN_4: moderateScale(4),
    MARGIN_5: moderateScale(5),
    MARGIN_6: moderateScale(6),
    MARGIN_8: moderateScale(8),
    MARGIN_10: moderateScale(10),
    MARGIN_12: moderateScale(12),
    MARGIN_14: moderateScale(14),
    MARGIN_16: moderateScale(16),
    MARGIN_18: moderateScale(18),
    MARGIN_20: moderateScale(20),
    MARGIN_24: moderateScale(24),
    MARGIN_30: moderateScale(30),
    MARGIN_36: moderateScale(36),
    MARGIN_32: moderateScale(32),
    MARGIN_34: moderateScale(34),
    MARGIN_40: moderateScale(40),
    MARGIN_44: moderateScale(44),
    MARGIN_48: moderateScale(48),
    MARGIN_50: moderateScale(50),
    MARGIN_60: moderateScale(60),
    MARGIN_72: moderateScale(72),
    MARGIN_78: moderateScale(78),
    MARGIN_84: moderateScale(84),
    MARGIN_90: moderateScale(90),
    MARGIN_100: moderateScale(100),
    MARGIN_320: moderateScale(320),
}