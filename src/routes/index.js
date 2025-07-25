import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Splash,
  Home,
  Login,
  Account,
  AccountEdit,
  StatusGizi,
  Imt,
  Take,
  StatusGiziHasil,
  DataIbuHamil,
  DataPemeriksaanIbuHami,
  SubDataPemeriksaanIbuHami,
  IbuHamil,
  TrisemesterI,
  TrisemesterII1,
  TrisemesterIII1,
  TrisemesterIII2,
  TrisemesterIII3,
  IbuBersalin,
  IbuNifas,
  IbuNifasKF,
  VideoMateri,
  TanyaJawab,
  Artikel,
  Kuesioner,
  TrisemesterII2,
  InfoLayananKesehatan,
  InfoEdukasiPenyakit,
  InfoEdukasiPenyakitKanker,
  InfoEdukasiPenyakitStroke,
  InfoEdukasiPenyakitJantung,
  InfoEdukasiPenyakitGinjal,
  InfoEdukasiPenyakitDiabetes,
  InteraksiBersamaTim,
  TentangAplikasi,
  InfoEdukasiPenyakitStunting,
  PrintKainRoll,
  PrintJersey,
  CetakSample,
  CetakSampleKainRoll,
  CetakSampleHijab,
  CetakSampleJersey,
  PrintHijab,
  Riwayat,
  MulaiPage,
  Indentitas,
  HasilTekananDarah,
  SubRiwayatPemeriksaanLaboratorium,
  Gula,
  ProfilLipid,
  LainLain,
  RiwayatPemeriksaanRadiologis,
  RiwayatObat,
  EKG,
  PenilaianNyeri,
  Rekomendasi,
  KalkulatorKompos,
  Petunjuk,
  CheckHargaStock,
  BuatPenawaran,
  TambahPenawaran,
  DonwnloadBrosur,
  BuktiPengeluaran,
  TambahBuktiPengeluaran,
  InputAset,
  ONTPage,
  ZTEConfig,
  FhAcsConfig,
  FhPolosConfig,
  ZteDualbandConfig,
  UniversalOntConfig,
  WebViewScreen,



} from '../pages';
import { colors } from '../utils';
import { Icon, Input } from 'react-native-elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigator } from '../components';



const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

// const MainApp = () => {
//   return (
//     <Tab.Navigator initialRouteName='Produk' tabBar={props => <BottomNavigator {...props} />}>
//       <Tab.Screen name="Home" component={Home} />
//       <Tab.Screen name="Profile" component={Account} />

//     </Tab.Navigator>
//   );
// };

export default function Router() {
  return (
    <Stack.Navigator initialRouteName=''>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{
          headerShown: false,
        }}
      />





      <Stack.Screen
        name="Account"
        component={Account}
        options={{
          headerShown: false,

        }}
      />


<Stack.Screen
        name="WebViewScreen"
        component={WebViewScreen}
        options={{
          headerShown: false,

        }}
      />

      
<Stack.Screen
        name="ONTPage"
        component={ONTPage}
        options={{
          headerShown: false,

        }}
      />

      <Stack.Screen
        name="ZTEConfig"
        component={ZTEConfig}
        options={{
          headerShown: false,

        }}
      />

          <Stack.Screen
        name="FhAcsConfig"
        component={FhAcsConfig}
        options={{
          headerShown: false,

        }}
      />


       <Stack.Screen
        name="FhPolosConfig"
        component={FhPolosConfig}
        options={{
          headerShown: false,

        }}
      />

           <Stack.Screen
        name="ZteDualbandConfig"
        component={ZteDualbandConfig}
        options={{
          headerShown: false,

        }}
      />

 <Stack.Screen
        name="UniversalOntConfig"
        component={UniversalOntConfig}
        options={{
          headerShown: false,

        }}
      />




<Stack.Screen
        name="TambahPenawaran"
        component={TambahPenawaran}
        options={{
          headerShown: false,

        }}
      />


<Stack.Screen
        name="DownloadBrosur"
        component={DonwnloadBrosur}
        options={{
          headerShown: false,

        }}
      />

<Stack.Screen
        name="BuktiPengeluaran"
        component={BuktiPengeluaran}
        options={{
          headerShown: false,

        }}
      />

      
<Stack.Screen
        name="TambahBuktiPengeluaran"
        component={TambahBuktiPengeluaran}
        options={{
          headerShown: false,

        }}
      />



<Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,

        }}
      />

<Stack.Screen
        name="CheckHargaStock"
        component={CheckHargaStock}
        options={{
          headerShown: false,

        }}
      />



      <Stack.Screen
        name="KalkulatorKompos"
        component={KalkulatorKompos}
        options={{
          headerShown: false,

        }}
      />


<Stack.Screen
        name="Petunjuk"
        component={Petunjuk}
        options={{
          headerShown: false,

        }}
      />





      <Stack.Screen
        name="AccountEdit"
        component={AccountEdit}
        options={{
          headerShown: false,
          headerTitle: 'Edit Profile',
          headerStyle: {
            backgroundColor: colors.white,
          },
          headerTintColor: '#000',
        }}
      />


      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
















    </Stack.Navigator>
  );
}
