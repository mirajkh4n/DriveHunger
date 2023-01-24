import {
  StyleSheet,
  Image,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Images from '../assests/Images';

const Tax_Deduction = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.goBack()}>
          {/* <Entypo name='menu' size={30} style={{ marginLeft: 10 }} /> */}
          <Image source={Images.backButton} style={styles.backbutton} />
        </TouchableOpacity>
        <View style={{alignItems: 'center', flex: 1}}>
          <Text style={styles.profileText}>Tax Deduction</Text>
        </View>
      </View>
      <View
        style={{
          alignSelf: 'center',
          flex: 0.2,
          width: '90%',
          paddingTop: 20,
        }}>
        <Text style={{fontSize: 18, padding: 10}}>
          Under the enhanced tax deduction, your business may deduct up to 15%
          of your taxable income for food donations
        </Text>
      </View>
      <View style={styles.whatWeDoText}>
        <Text style={{color: '#056721', marginLeft: 10, fontWeight: '700'}}>
          What we do?
        </Text>
        <TouchableOpacity>
          <Image
            source={Images.minus_Vector}
            style={{
              width: 26,
              height: 4,
              resizeMode: 'stretch',
              marginRight: 10,
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={{}}>
        <View
          style={{
            flexDirection: 'row',
            width: '85%',
            alignItems: 'center',
            borderRadius: 3,
            alignSelf: 'center',
            borderTopWidth: 1,
            borderColor: '#F3F3F3',
            backgroundColor: '#E1E1E1',
          }}>
          <Text>1 - </Text>
          <Text>Track and store data of the donated inventory</Text>
          <View></View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: '85%',
            alignItems: 'center',
            borderRadius: 3,
            alignSelf: 'center',
            borderColor: '#F3F3F3',
            backgroundColor: '#E1E1E1',
          }}>
          <Text>2 - </Text>
          <Text style={{marginTop: 20, padding: 10}}>
            Provide you with a written statement of the donations, and our
            signoff's from the qualified public charity
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '85%',
            alignSelf: 'center',
            alignItems: 'center',
            marginTop: 20,
            backgroundColor: '#E1E1E1',
          }}>
          <Text
            style={{
              color: '#056721',

              fontWeight: '700',
              padding: 15,
            }}>
            What your business does?
          </Text>
          <TouchableOpacity>
            <Image
              source={Images.plussVector}
              style={{
                width: 20,
                height: 20,
                resizeMode: 'stretch',
                marginRight: 15,
              }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '85%',
            alignSelf: 'center',
            alignItems: 'center',
            marginTop: 20,
            backgroundColor: '#E1E1E1',
          }}>
          <Text
            style={{
              color: '#056721',
              width: '80%',
              fontWeight: '700',
              padding: 15,
            }}>
            The business donating is able to deduct the lesser of:
          </Text>
          <TouchableOpacity>
            <Image
              source={Images.plussVector}
              style={{
                width: 20,
                height: 20,
                resizeMode: 'stretch',
                marginRight: 15,
              }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '85%',
            alignSelf: 'center',
            alignItems: 'center',
            marginTop: 20,
            backgroundColor: '#E1E1E1',
          }}>
          <Text
            style={{
              color: '#056721',
              width: '80%',
              fontWeight: '700',
              padding: 15,
            }}>
            Form requirement for your tax return based on donation size after
            determining value:
          </Text>
          <TouchableOpacity>
            <Image
              source={Images.plussVector}
              style={{
                width: 20,
                height: 20,
                resizeMode: 'stretch',
                marginRight: 15,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Tax_Deduction;

const styles = StyleSheet.create({
  backbutton: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
    flex: 1,
    marginLeft: 10,
  },
  profileText: {
    fontSize: 22,
    marginTop: 15,
    color: '#4E4B66',
    marginRight: 20,
  },
  whatWeDoText: {
    alignSelf: 'center',
    flexDirection: 'row',
    flex: 0.1,
    width: '85%',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#E1E1E1',
    borderRadius: 3,
    padding: 10,
  },
});
