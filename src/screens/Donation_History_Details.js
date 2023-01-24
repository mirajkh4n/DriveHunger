import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  FlatList,
  ImageBackground,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import React, {useState} from 'react';
import Modal from 'react-native-modal';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Images from '../assests/Images';
import CustomReceiptModal from '../components/CustomReceiptModal';

const Donation_History_Details = ({navigation}) => {
  const [isModalFilterVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalFilterVisible);
  };
  const [isModalReceiptVisible, setModalShow] = useState(false);
  const toggleModalToShow = () => {
    setModalShow(!isModalReceiptVisible);
  };
  // datePicker
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(true);

  const donees = [
    {
      id: 1,
      name: 'Yogie Ismanda',
      date: 'Monday 2022',
      volunteer: 'Ismanda',
      price: '$ 1.99',
    },
    {
      id: 2,
      name: 'Yogie Ismanda',
      date: 'Monday 2022',
      volunteer: 'Ismanda',
      price: '$ 1.99',
    },
    {
      id: 3,
      name: 'Yogie Ismanda',
      date: 'Monday 2022',
      volunteer: 'Ismanda',
      price: '$ 1.99',
    },
    {
      id: 4,
      name: 'Yogie Ismanda',
      date: 'Monday 2022',
      volunteer: 'Ismanda',
      price: '$ 1.99',
    },
    {
      id: 5,
      name: 'Yogie Ismanda',
      date: 'Monday 2022',
      volunteer: 'Ismanda',
      price: '$ 1.99',
    },
    {
      id: 6,
      name: 'Yogie Ismanda',
      date: 'Monday 2022',
      volunteer: 'Ismanda',
      price: '$ 1.99',
    },
    {
      id: 7,
      name: 'Yogie Ismanda',
      date: 'Monday 2022',
      volunteer: 'Ismanda',
      price: '$ 1.99',
    },
    {
      id: 8,
      name: 'Yogie Ismanda',
      date: 'Monday 2022',
      volunteer: 'Ismanda',
      price: '$ 1.99',
    },
    {
      id: 9,
      name: 'Yogie Ismanda',
      date: 'Monday 2022',
      volunteer: 'Ismanda',
      price: '$ 1.99',
    },
  ];
  const doneeOne = ({item}) => (
    <View style={styles.item}>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={{marginLeft: 24, marginTop: 5}}>{item.date}</Text>
        <Text
          style={{
            marginLeft: 20,
            marginTop: 5,
            width: '28%',
          }}>
          {item.volunteer}
        </Text>
        <TouchableOpacity onPress={toggleModalToShow}>
          <Text
            style={{
              alignSelf: 'flex-end',
              marginTop: 5,
              fontWeight: '700',
              color: '#056721',
            }}>
            {item.price}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  // itemSeparator = () => {
  //   return <View style={styles.separator}></View>;

  return (
    <View style={{flex: 1}}>
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
          Donations History
        </Text>
        <TouchableOpacity activeOpacity={0.8} onPress={toggleModal}>
          <AntDesign
            name="filter"
            size={30}
            style={{
              alignSelf: 'flex-end',
              marginRight: 10,
            }}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: '#F3F3F3',
          borderColor: '#F3F3F3',
          paddingTop: 20,
          width: '96%',
        }}>
        <Text style={[styles.titles, {paddingLeft: 20}]}>Donee</Text>
        <Text style={[styles.titles, {paddingLeft: 20}]}>Date</Text>
        <Text style={styles.titles}>Volunteer</Text>
        <Text style={[styles.titles, {paddingRight: 22}]}>Price</Text>
      </View>

      {/* flatList Donatio history */}

      <FlatList
        data={donees}
        renderItem={doneeOne}
        ItemSeparatorComponent={itemSeparator}
      />

      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('')}>
        <Text style={styles.signInBtn}>Load More</Text>
      </TouchableOpacity>

      {/* Modal */}
      <ScrollView>
        <View style={{flex: 1}}>
          <Modal isVisible={isModalFilterVisible} onBackdropPress={toggleModal}>
            <View
              style={{
                flex: 0.8,
                borderRadius: 8,
                paddingLeft: 10,
                backgroundColor: '#fff',
              }}>
              <View>
                <Text
                  style={{
                    fontSize: 35,
                    color: '#4E4B66',
                    paddingTop: 20,
                    paddingLeft: 20,
                    fontWeight: '700',
                  }}>
                  Filter
                </Text>
              </View>
              <ScrollView>
                <View style={{flexDirection: 'row'}}>
                  <TextInput style={styles.input} placeholder="Date From" />
                  <TouchableOpacity onPress={() => setOpen(true)}>
                    <Fontisto
                      name={'date'}
                      size={20}
                      style={{
                        right: 50,
                        marginTop: 25,
                        color: '#4E4B66',
                      }}
                    />
                  </TouchableOpacity>
                  <DatePicker
                    modal
                    open={open}
                    date={date}
                    onConfirm={date => {
                      setOpen(false);
                      setDate(date);
                    }}
                    onCancel={() => {
                      setOpen(false);
                    }}
                  />
                </View>
                <View style={{flexDirection: 'row'}}>
                  <TextInput style={styles.input} placeholder="Date To" />
                  <TouchableOpacity>
                    <Fontisto
                      name={'date'}
                      size={20}
                      style={{
                        right: 50,
                        marginTop: 25,
                        color: '#4E4B66',
                      }}
                    />
                  </TouchableOpacity>
                </View>
                <TextInput style={styles.input} placeholder="Donee Name" />
                <TextInput style={styles.input} placeholder="Volunteer Name" />
              </ScrollView>
              <TouchableOpacity onPress={toggleModal} activeOpacity={0.8}>
                <Text style={styles.signInBtn}>Search</Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </View>
      </ScrollView>

      {/* Modal */}

      <Modal
        isVisible={isModalReceiptVisible}
        onBackdropPress={toggleModalToShow}>
        <CustomReceiptModal />
      </Modal>
    </View>
  );
};

export default Donation_History_Details;

const styles = StyleSheet.create({
  separator: {
    height: 1,
    width: '90%',
    backgroundColor: '#056721',
    alignSelf: 'center',
  },
  input: {
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: '#EEEEEE',
    borderRadius: 10,
    width: '90%',
    backgroundColor: '#EEEEEE',
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    marginTop: 15,
  },
  closebtn: {
    justifyContent: 'flex-end',
    flex: 1,
    flexDirection: 'row',
    padding: 20,
  },
  name: {
    fontWeight: '600',
    fontSize: 15,
    paddingLeft: 20,
    fontWeight: 'bold',
    marginTop: 3,
  },
  checkBox: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    flex: 1,
    marginRight: 20,
  },
  titles: {
    color: '#056721',
    fontSize: 16,
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
    width: '90%',
  },
});
