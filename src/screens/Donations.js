import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Swiper from 'react-native-swiper';
import React, {useState} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Images from '../assests/Images';
import {SelectList} from 'react-native-dropdown-select-list';

const Donations = ({navigation}) => {
  const [selected, setSelected] = useState('Select Donee');

  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [estimateWeight, setEstimateWeight] = useState('');
  const [price, setPrice] = useState('');

  const data = [
    {key: '1', value: 'Select Donee'},
    {key: '2', value: 'Appliances'},
    {key: '3', value: 'Cameras'},
    {key: '5', value: 'Vegetables'},
    {key: '6', value: 'Diary Products'},
    {key: '7', value: 'Drinks'},
  ];

  let detailsData = [
    {
      itemName: itemName,
      quantity: quantity,
      estimateWeight: estimateWeight,
      price: price,
    },
  ];

  return (
    <View
      style={{
        flex: 1,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingTop: 10,
        }}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            navigation.toggleDrawer();
          }}>
          <Entypo name="menu" size={30} style={{marginLeft: 10}} />
        </TouchableOpacity>
        <Text
          style={{
            alignSelf: 'center',
            fontSize: 22,
          }}>
          Donations
        </Text>
        <TouchableOpacity activeOpacity={0.8}>
          <Ionicons
            name="notifications-outline"
            size={30}
            style={{
              alignSelf: 'flex-end',
              marginRight: 10,
            }}
          />
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View>
          <Swiper style={{height: 210, color: '#fff'}}>
            <View>
              <Image
                source={require('../assests/Rectangle.png')}
                style={styles.images}
              />
            </View>
            <View>
              <Image
                source={require('../assests/Rectangle.png')}
                style={styles.images}
              />
            </View>
            <View>
              <Image
                source={require('../assests/Rectangle.png')}
                style={styles.images}
              />
            </View>
          </Swiper>
        </View>

        <View style={{paddingHorizontal: 15}}>
          <View>
            <Text style={styles.itemDetails}>Item Details</Text>
          </View>
          <View style={styles.flexView}>
            <Text style={styles.itemTitle}>Item Name</Text>
            <TextInput
              style={styles.inputFileds}
              placeholder="qwurjw"
              value={itemName}
              onChangeText={text => setItemName(text)}
            />
          </View>
          <View style={styles.flexView}>
            <Text style={styles.itemTitle}>Quantity</Text>
            <TextInput
              style={styles.inputFileds}
              placeholder="4 Boxes"
              value={quantity}
              onChangeText={text => setQuantity(text)}
            />
          </View>
          <View style={styles.flexView}>
            <Text style={styles.itemTitle}>Estimate Weight</Text>
            <TextInput
              style={styles.inputFileds}
              placeholder="2 KG"
              value={estimateWeight}
              onChangeText={text => setEstimateWeight(text)}
            />
          </View>
          <View style={styles.flexView}>
            <Text style={styles.itemTitle}>Pickup time</Text>
            <TextInput style={styles.inputFileds} placeholder="4pm to 6pm" />
          </View>
          <View style={styles.flexView}>
            <Text style={styles.itemTitle}>Price (Optional)</Text>
            <TextInput
              style={styles.inputFileds}
              placeholder="$1.99"
              value={price}
              onChangeText={text => setPrice(text)}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.itemDetails}>Add More</Text>
            <TouchableOpacity activeOpacity={0.8}>
              <Image
                source={Images.addMore}
                style={{
                  height: 20,
                  width: 20,
                  marginRight: 12,
                  marginTop: 20,
                }}
              />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.itemDetails}>Search Donee</Text>
          </View>
          <View
            style={{
              width: '93%',
              alignSelf: 'center',
              marginLeft: 5,
              borderRadius: 5,
              marginTop: 15,
            }}>
            <SelectList
              setSelected={val => setSelected(val)}
              data={data}
              save="value"
            />
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              setEstimateWeight('');
              setItemName('');
              setPrice('');
              setQuantity('');

              navigation.navigate('OrderSummary', {data: detailsData});
              console.log('data', detailsData);
            }}>
            <Text style={styles.signInBtn}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Donations;

const styles = StyleSheet.create({
  images: {
    height: 200,
    width: '90%',
    marginLeft: 20,
    marginTop: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  paneera: {
    height: '41%',
    width: '20%',
    bottom: 20,
    marginLeft: 25,
    borderRadius: 50,
  },
  inputFileds: {
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: '#4E4B66',
    borderRadius: 7,
    width: '45%',
  },
  itemDetails: {
    marginLeft: 20,
    marginTop: 20,
    fontSize: 18,
    color: '#056721',
  },
  itemTitle: {
    marginLeft: 20,
    paddingTop: 25,
    fontSize: 18,
  },
  flexView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  signInBtn: {
    textAlign: 'center',
    backgroundColor: '#056721',
    borderRadius: 10,
    padding: 20,
    margin: 12,
    color: 'white',
    marginTop: 40,
    marginBottom: 30,
  },
});
