import React, { useEffect, useState } from 'react';
import Started from '../components/Signup/Started';
import ProfilesUser from '../components/profileUser/profilesUser';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Profile() {
  const [userExists, setUserExists] = useState(false);
  
  useEffect(() => {
    const checkUser = async () => {
      try {
        const value = await AsyncStorage.getItem('user');
        if (value) {
          setUserExists(true);
          console.log(userExists);
        }
        else {
          setUserExists(false);
        }
      } catch (error) {
        console.log(error);
      }
    };

    checkUser();
  }, []);

  return (
    userExists ? <ProfilesUser/>:<Started/>
  );
}





