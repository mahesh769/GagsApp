import React, { useState } from 'react';
import { Dimensions, Image,  View } from 'react-native';
import FastImage from 'react-native-fast-image';


const { height, width } = Dimensions.get('window')

const CommonImage = ({
    source,
    style,
    resizeMode,
}) => {
console.warn(source);
    return (
        <View  >
            {(source.uri == undefined )?
                <Image
                    source={source}
                    style={[style, {}]}
                />
                :
                <FastImage
                    source={source}
                    resizeMode={resizeMode ? resizeMode : 'cover'}
                    style={[style, { resizeMode: 'cover' }]}
                />
            }
        </View>
    )
}

export default CommonImage;