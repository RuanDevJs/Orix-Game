import React from 'react';
import { SafeAreaView, View, Text, Image, Dimensions, StyleSheet } from 'react-native';

const { height: HEIGHT , width: WIDTH} = Dimensions.get('window');
import { Ionicons } from '@expo/vector-icons';

export default function Header() {
 return (
   <SafeAreaView style={styles.header}>
       <View style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                <View style={[styles.icon]}>
                    <Ionicons name="ios-search" size={24} color="#f9f9f9" />
                </View>
                <View style={{ marginLeft: 4}}>
                    <Text style={styles.title}>Search</Text>
                </View>
            </View>
            <View>
                <Image
                    source={{ uri: "https://avatars.githubusercontent.com/u/82915279?v=4" }}
                    style={styles.profile}
                /> 
            </View>
       </View>
       <View style={{ width: '70%', justifyContent: 'center', paddingVertical: 8}}>
           <View>
               <Text style={styles.mainTitle}>Orix</Text>
               <Text style={styles.subTitle}>Gaming</Text>
           </View>
       </View>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    header: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    icon: {
        padding: 4,
        backgroundColor: '#e64006',
        borderRadius: 50,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontFamily: 'Poppins_500Medium',
        fontSize: 16,
        color: "#333"
    },
    profile:{ 
        width: 50,
        height: 50,
        borderRadius: 12
    },
    mainTitle: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 32,
        color: "#1f1f1f"
    },
    subTitle: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 32,
        color: "#1f1f1f"
    }
})