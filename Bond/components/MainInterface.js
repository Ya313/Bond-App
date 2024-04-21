import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, Modal } from 'react-native';
import { Image } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { Platform, Alert } from 'react-native';

// Function to request location permission
export async function getLocationPermissions() {
  const granted = await request(
    Platform.select({
      android: PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION,
      ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
    }),
    {
       title: 'Location Permission',
       message: 'This app requires access to your location',
       buttonPositive: 'OK',
       buttonNegative: 'Cancel',
    },
  );
  return granted === RESULTS.GRANTED;
}

// Define your screen components
function Messages() {
  return (
    <View style={styles.scene}><Text>First Page</Text></View>
  );
}

function Events() {
  return (
    <View style={styles.scene}><Text>Second Page</Text></View>
  );
}

function Invitation() {
  return (
    <View style={styles.scene}><Text>Third Page</Text></View>
  );
}

function Profile() {
  return (
    <View style={styles.scene}><Text>Fourth Page</Text></View>
  );
}

const Tab = createBottomTabNavigator();
function MainInterface() {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

   useEffect(() => {
      const requestLocationPermission = async () => {
        try {
          const permissionGranted = await getLocationPermissions();
          if (permissionGranted) {
            console.log('Location permission granted');
            // fetch local events
          } else {
            console.log('Location permission denied');
            Alert.alert('Permission Denied', 'Bond needs to access your location to find local events!');
          }
        } catch (err) {
          console.warn(err);
        }
      };

      requestLocationPermission();
    }, []);


  return (
    <>
      <View style={styles.headerRight}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Text style={styles.headerRightText}>Settings</Text>
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Button title="Log Out" onPress={() => {
              setModalVisible(!modalVisible);
              navigation.navigate('LoginPage');
            }} />
          </View>
        </View>
      </Modal>

      <Tab.Navigator
        screenOptions={{
          headerLeft: () => (
            <Image
              source={require('../Bond pics/Bond.jpg')}
              style={{ width: 110, height: 50, marginLeft: 10 }} // Customize as needed
            />
          ),
          headerTitle: '', // Hide the title
        }}
      >
       <Tab.Screen
        name="Messages"
        component={Messages}
        options={{
          tabBarLabel: 'Messages',
          tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="message-text-outline" color={color} size={size} />
      ),
    }}
  />
        <Tab.Screen
          name="Events"
          component={Events}
          options={{
            tabBarLabel: 'Events',
            tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="calendar" color={color} size={size} />
      ),
    }}
  />
        <Tab.Screen
          name="Invitation"
          component={Invitation}
          options={{
          tabBarLabel: 'Invites',
          tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="email-outline" color={color} size={size} />
      ),
    }}
  />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="account-circle-outline" color={color} size={size} />
      ),
    }}
  />
      </Tab.Navigator>
    </>
  );
}


const styles = StyleSheet.create({
  scene: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerRight: {
    backgroundColor: '#FF8F49',
    padding: 5,
    borderRadius: 5,
    position: 'absolute',
    right: 10,
    top: 35,
    zIndex: 1,
  },
  headerRightText: {
    fontSize: 18,
    color: 'white',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default MainInterface;