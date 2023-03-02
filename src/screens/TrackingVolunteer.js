import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import Images from '../assests/Images';
import Modal from 'react-native-modal';
import {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import Lottie from 'lottie-react-native';

const TrackingVolunteer = ({navigation}) => {
  const [, setPosition] = useState({
    latitude: 10,
    longitude: 10,
    latitudeDelta: 0.001,
    longitudeDelta: 0.001,
  });

  useEffect(() => {
    Geolocation.getCurrentPosition(pos => {
      const crd = pos.coords;
      setPosition({
        latitude: crd.latitude,
        longitude: crd.longitude,
        latitudeDelta: 0.0421,
        longitudeDelta: 0.0421,
      });
    });
  }, []);
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={position}
          showsUserLocation={true}
          showsMyLocationButton={true}
          followsUserLocation={true}
          showsCompass={true}
          scrollEnabled={true}
          zoomEnabled={true}
          pitchEnabled={true}
          rotateEnabled={true}>
          <Marker
            title="Yor are here"
            description="This is a description"
            coordinate={position}
          />
        </MapView>
        <View style={styles.backcard}>
          <View
            style={{
              paddingHorizontal: 25,
              alignItems: 'center',
              paddingVertical: 20,
              flexDirection: 'row',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: '90%',
              }}>
              <Image source={Images.profileimage} style={styles.cardImage} />
              <Text
                style={{
                  paddingLeft: 15,
                  fontSize: 20,
                  color: '#fff',
                }}>
                Margarita
              </Text>
            </View>
            <Image source={Images.Call_Icon} style={styles.callIcon} />
          </View>
          <View
            style={{
              alignSelf: 'center',
              bottom: 35,
            }}>
            <Text style={{fontSize: 16, color: '#fff'}}>
              completed 2000 volunteer hours
            </Text>
          </View>

          <View style={styles.card}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',

                paddingHorizontal: 20,
              }}>
              <Image
                source={Images.Estimated_Time}
                style={{height: 25, width: 25, resizeMode: 'center'}}
              />
              <Text
                style={{fontSize: 18, paddingHorizontal: 35, color: '#4E4B66'}}>
                Estimated delivery time 45m
              </Text>
            </View>
            <Text
              style={{
                fontSize: 16,
                alignSelf: 'center',
                paddingRight: 20,
                color: '#4E4B66',
              }}>
              Distance from you: 5 miles
            </Text>
            <View style={{paddingLeft: 20}}>
              <Image
                source={Images.Time_distance}
                style={{height: 35, marginLeft: 10}}
              />
              <Image
                source={Images.Distance_from}
                style={{height: 25, width: 25}}
              />
            </View>
            <TouchableOpacity activeOpacity={0.8} onPress={toggleModal}>
              <Text style={styles.acceptedBtn}>Accepted</Text>
            </TouchableOpacity>
          </View>
          <View style={{flex: 1}}>
            <Modal isVisible={isModalVisible}>
              <View
                style={{
                  flex: 0.6,
                  backgroundColor: '#fff',
                  borderRadius: 12,
                }}>
                <View>
                  <View style={styles.closebtn}>
                    <TouchableOpacity activeOpacity={0.8} onPress={toggleModal}>
                      <Image
                        source={Images.Close_Icon}
                        style={styles.closeIcon}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.orderText}>
                    <Text
                      style={{
                        fontSize: 35,
                        color: '#056721',
                      }}>
                      Order Confirmed
                    </Text>
                    <Text style={{fontSize: 20, color: '#4E4B66'}}>
                      Order Number 0215488
                    </Text>
                    <Text
                      style={{fontSize: 14, color: '#4E4B66', paddingTop: 13}}>
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      {'\n'} dolor do amet sint. Velit of
                    </Text>
                    <View
                      style={{
                        paddingTop: 30,
                        // height: 220,
                        // backgroundColor: 'blue',
                      }}>
                      {/* <Image
                        source={Images.Tick_Vector}
                        style={{height: 100, width: 100}}
                      /> */}
                      <Lottie
                        source={Images.acceptLottie}
                        autoPlay
                        style={{
                          height: 120,
                          width: 120,
                        }}
                        loop
                      />
                    </View>
                    <TouchableOpacity
                      activeOpacity={0.8}
                      style={{width: '100%', paddingTop: 10}}>
                      <Text style={styles.TrackYourOrderTxt}>
                        Track your order
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Modal>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TrackingVolunteer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  backcard: {
    width: '100%',
    backgroundColor: '#056721',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    position: 'absolute',
    bottom: 0,
  },
  card: {
    padding: 10,
    backgroundColor: '#fff',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  cardImage: {
    height: 60,
    width: 60,
    alignSelf: 'center',
  },
  callIcon: {
    height: 20,
    width: 20,
    resizeMode: 'stretch',
    justifyContent: 'flex-end',
  },
  closebtn: {
    justifyContent: 'flex-end',
    flex: 1,
    flexDirection: 'row',
    padding: 20,
  },
  closeIcon: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
  },
  orderText: {
    alignItems: 'center',
  },
  acceptedBtn: {
    backgroundColor: '#056721',
    alignSelf: 'center',
    padding: 12,
    margin: 12,
    color: '#fff',
    fontSize: 18,
  },
  TrackYourOrderTxt: {
    textAlign: 'center',
    backgroundColor: '#056721',
    borderRadius: 10,
    padding: 20,
    margin: 12,
    color: 'white',
  },
});
