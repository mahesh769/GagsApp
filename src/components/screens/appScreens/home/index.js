import React, { useEffect } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { textScale } from '../../../../styles/responsiveStyles';
import { spacing } from '../../../../styles/spacing';
import colors from '../../../../utility/Colors';
import CommonImage from '../../../common/CommonImage';
import RegularText from '../../../common/RegularText';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getQuickCategoriesAction } from '../../../../redux/actions/categoryActions';
import { KEY_USER_TOKEN } from '../../../../utility/constants';
import { BASE_IMAGE_URL } from '../../../../redux/services/apiTypes';



const HomeScreen = () => {
    const dispatch = useDispatch();

    const { homeRes } = useSelector(state => ({
        homeRes: state.homeReducer.homeRes,
        ishomeSuccess: state.homeReducer.ishomeSuccess,
        homeFetching: state.homeReducer.homeFetching,
        homeError: state.homeReducer.homeError,
    }), shallowEqual)

    useEffect(() => {
        global[KEY_USER_TOKEN] = '3ogqzxcpd6teaww79puqjiibgbcy11a1';
        if (homeRes == undefined) {
            getQuickCategory();
        }
    }, [homeRes])

    function getQuickCategory() {
        dispatch(getQuickCategoriesAction({p:'6291030200070'}))
       setTimeout(()=>{
        dispatch(getQuickCategoriesAction({p:'6291030200049'}))
       },2000)
    }
console.warn('homeRes',homeRes);
    function getAttributeName(key,array) {
        if ( array && array.length > 0) {
            let index = array.findIndex(obj => obj.attribute_code === key);
            if (key === 'image'&&index>=0) {
                let value= BASE_IMAGE_URL + array[index].value;
                return value;
            }else  if (key === 'special_price' &&index>=0) {
                let value= array[index].value;
                return value;
            }else  if (key === 'special_price' &&index===-1) {
                return index;
            }
            return array[index].value;
        }

    }


    return (
        <View style={styles.container}>
            <View style={{ marginBottom: spacing.HEIGHT_10, alignItems: 'center', }}>
                {
                    homeRes && homeRes.length>0 &&
                    <FlatList
                        style={{ width: '100%', height: '100%' }}
                        data={homeRes}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                            <View style={[{
                                paddingHorizontal: spacing.PADDING_20, backgroundColor: colors.white, flexDirection: 'row',
                                alignItems: 'center', paddingVertical: spacing.PADDING_15, width: '100%'
                            },]}>
                                <View style={{ width: spacing.WIDTH_100, height: spacing.WIDTH_100, alignItems: 'center', justifyContent: 'center', borderRadius: (spacing.WIDTH_40) / 2, backgroundColor: colors.theme }}>
                                    <CommonImage item={item} source={{uri:getAttributeName('image',item.custom_attributes)}} style={{ width: spacing.WIDTH_100, height: spacing.WIDTH_100, borderRadius: (spacing.WIDTH_40) / 2 }} />
                                </View>
                                <View style={{ flexDirection: 'column', flex: .8 }}>
                                    <RegularText
                                        title={item.name}
                                        textStyle={{
                                            textAlign: 'left',
                                            color: colors.appBlack, fontSize: textScale(12), paddingHorizontal: spacing.PADDING_10
                                        }}
                                    />
                                    <View style={{ flexDirection: 'row' }}>
                                        <RegularText
                                            title={'Price: ' + item.price}
                                            textStyle={[{
                                                textAlign: 'left',
                                                color: colors.appBlack, fontSize: textScale(12), paddingHorizontal: spacing.PADDING_10,
                                            }, getAttributeName('special_price',item.custom_attributes)>0 && { textDecorationLine: 'line-through', textDecorationStyle: 'solid', color: colors.red900, }]}
                                        />
                                        {getAttributeName('special_price',item.custom_attributes)>0 && <RegularText
                                            title={'Special Price: ' + getAttributeName('special_price',item.custom_attributes)}
                                            textStyle={{
                                                textAlign: 'left',
                                                color: colors.appBlack, fontSize: textScale(12), paddingHorizontal: spacing.PADDING_10
                                            }}
                                        />
                                        }
                                    </View>
                                </View>

                            </View>
                        )}
                    />
                }
            </View>



        </View >
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: colors.theme },
    scrollStyle: {},
    topContainer: {
        height: 260,
    },
    topCurve: {
        backgroundColor: colors.theme,
        height: 260,
    },
    bottomCurve: {
        width: '100%',

    },
});

export default HomeScreen;