import React, { useEffect } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { textScale } from '../../../../styles/responsiveStyles';
import { spacing } from '../../../../styles/spacing';
import * as Utils from '../../../../utility';
import colors from '../../../../utility/Colors';
import { navigate } from '../../../../utility/commonFunctions';
import CommonImage from '../../../common/CommonImage';
import RegularText from '../../../common/RegularText';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getQuickCategoriesAction } from '../../../../redux/actions/categoryActions';



const HomeScreen = () => {
    const dispatch = useDispatch();

    const { homeRes } = useSelector(state => ({
        homeRes: state.homeReducer.homeRes,
        ishomeSuccess: state.homeReducer.ishomeSuccess,
        homeFetching: state.homeReducer.homeFetching,
        homeError: state.homeReducer.homeError,
    }), shallowEqual)

    useEffect(() => {
        if (homeRes == undefined) {
            getQuickCategory()
        }
    }, [homeRes])

    function getQuickCategory() {
        dispatch(getQuickCategoriesAction())
    }


    return (
        <View style={styles.container}>
            <View style={{ marginBottom: spacing.HEIGHT_10, alignItems: 'center', }}>
                {
                    homeRes && homeRes.history &&
                    <FlatList
                        style={{ width: '100%', height: '100%' }}
                        data={homeRes.history}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                            <View style={[{
                                paddingHorizontal: spacing.PADDING_20, backgroundColor: colors.white, flexDirection: 'row',
                                alignItems: 'center', paddingVertical: spacing.PADDING_15, width: '100%'
                            },]}>
                                <View style={{ width: spacing.WIDTH_100, height: spacing.WIDTH_100, alignItems: 'center', justifyContent: 'center', borderRadius: (spacing.WIDTH_40) / 2, backgroundColor: colors.theme }}>
                                    <CommonImage item={item} source={item.image} style={{ width: spacing.WIDTH_100, height: spacing.WIDTH_100,borderRadius: (spacing.WIDTH_40) / 2}} />
                                </View>
                                <View style={{ flexDirection: 'column', flex: .8 }}>
                                    <RegularText
                                        title={item.title}
                                        textStyle={{
                                            textAlign: 'left',
                                            color: colors.appBlack, fontSize: textScale(12), paddingHorizontal: spacing.PADDING_10
                                        }}
                                    />
                                    <View style={{flexDirection: 'row'}}>
                                    <RegularText
                                        title={'Price: '+item.price}
                                        textStyle={[{
                                            textAlign: 'left',
                                            color: colors.appBlack, fontSize: textScale(12), paddingHorizontal: spacing.PADDING_10,
                                        }, item.special_price&&{textDecorationLine: 'line-through', textDecorationStyle: 'solid',color: colors.red900, } ]}
                                    />
                                     {item.special_price&&<RegularText
                                        title={'Special Price: '+item.special_price}
                                        textStyle={{
                                            textAlign: 'left',
                                            color: colors.appBlack, fontSize: textScale(12), paddingHorizontal: spacing.PADDING_10
                                        }}
                                    />
                                    }
                                    </View>
                                    <RegularText
                                        title={'Delivery Fee: '+item.delivery_fee}
                                        textStyle={{
                                            textAlign: 'left',
                                            color: colors.appBlack, fontSize: textScale(12), paddingHorizontal: spacing.PADDING_10
                                        }}
                                    />
                                    <RegularText
                                        title={item.subtitle}
                                        textStyle={{
                                            textAlign: 'left',
                                            color: colors.grey400, fontSize: textScale(12), paddingHorizontal: spacing.PADDING_10
                                        }}
                                    />
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