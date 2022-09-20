import NavigationService from "../NavigationService"


import { PermissionsAndroid, Platform, StatusBar } from 'react-native'
import Strings from "../translation/language";

//navigation functions
export const navigate = (routeName, params = {}) => {
    NavigationService.navigate(routeName, params)
}

export const replace = (routeName, params = {}) => {
    NavigationService.replace(routeName, params)
}

export const goBack = () => {
    NavigationService.back()
}

export const openDrawer = () => {
    NavigationService.openDrawer()
}

export const closeDrawer = () => {
    NavigationService.closeDrawer()
}

export const clearStack = (routeName, params) => {
    NavigationService.clearStack(routeName, params)
}


//location functions
export const requestLocationPermission = async () => {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
            {
                title: "Autolizer wants to detect your location",
                message:
                    "Enable location",
                buttonNeutral: "Ask Me Later",
                buttonNegative: "Cancel",
                buttonPositive: "OK"
            }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            return true
        } else {
            return false
        }
    } catch (err) {

    }
};


// FILE EXTENSION FUNCTIONS
export function getFileExt(file) {
    let lastIndex = file.lastIndexOf("?X-A")
    if (lastIndex == -1) {
        let ext = file.split('.').pop()
        return ext
    } else {
        let path = file.substring(0, lastIndex)
        let ext = path.split('.').pop()
        return ext
    }
}


// NUMBER FUNCTIONS
export function getPrice(price) {
    return price + ' ' + Strings.aed
}

export function thousandSeprate(number) {
    return number
}

// STATUS BAR COLOR CHANGE
export function changeStatusBarTheme(barColor, barStyle) {
    if (Platform.OS == 'android') {
        StatusBar.setBackgroundColor(barColor)
        StatusBar.setBarStyle(barStyle)
    }
}