// import React from "react";
// import { View, StyleSheet } from "react-native";
// import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
// import { Avatar, Title, Caption, Drawer, Text } from "react-native-paper";
// import { Ionicons } from "react-native-vector-icons";
// import { TouchableOpacity } from "react-native-gesture-handler";
// export function DrawerContent({ props }) {
//   console.log(props);
//   return (
//     <View style={{ flex: 1, backgroundColor: "#2D2D2D" }}>
//       {/* // <DrawerContentScrollView {...props}> */}
//       {/*-------------------------------Drawer Content------------------------------------------------------------------------------------------------- */}
//       <View style={styles.drawerContent}>
//         {/*-------------------------------User Info------------------------------------------------------------------------------------------------------- */}
//         <View style={styles.userinfo}>
//           <TouchableOpacity>
//             <View style={{ flexDirection: "row" }}>
//               <Avatar.Image
//                 source={{
//                   uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRYGXBks17207cStyw8yIWqeX4R7xKLXgHjw&usqp=CAU",
//                 }}
//                 size={60}
//               />
//               <View style={{ marginLeft: 10 }}>
//                 <Title style={{ color: "#ff8303" }}>Tanisha</Title>
//                 <Caption style={{ fontSize: 15, color: "grey" }}>
//                   abcgmail.com
//                 </Caption>
//               </View>
//             </View>
//           </TouchableOpacity>
//         </View>
//         {/*-------------------------------Drawer Section Content--------------------------------------------------------------------------------------------- */}
//         <Drawer.Section style={styles.section}>
//           {/*-------------------------------Music Content---------------------------------------------------------------------------------------------------- */}
//           <DrawerItem
//             icon={({ color, size }) => (
//               <Ionicons name="musical-notes" color="#ff8303" size={size} />
//             )}
//             label={() => (
//               <Text style={{ color: "#ff8303" }}>My Appointment</Text>
//             )}
//             activeBackgroundColor="red"
//             pressColor="yellow"
//             style={{}}
//             onPress={() => {}}
//           />
//           {/*-------------------------------Settings Content------------------------------------------------------------------------------------------------ */}
//           <DrawerItem
//             icon={({ color, size }) => (
//               <Ionicons name="settings" color="#ff8303" size={size} />
//             )}
//             label={() => <Text style={{ color: "#ff8303" }}>Settings</Text>}
//             pressColor="yellow"
//             style={{}}
//             onPress={() => {}}
//           />
//           <DrawerItem
//             icon={({ color, size }) => (
//               <Ionicons name="settings" color="#ff8303" size={size} />
//             )}
//             label={() => <Text style={{ color: "#ff8303" }}>About Us</Text>}
//             pressColor="yellow"
//             style={{}}
//             onPress={() => {}}
//           />
//         </Drawer.Section>
//       </View>
//       {/* </DrawerContentScrollView> */}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   drawerContent: {
//     flex: 1,
//   },
//   userinfo: {
//     flexDirection: "row",
//     backgroundColor: "black",
//     height: 100,
//     width: "100%",
//     alignItems: "center",
//   },
//   section: {
//     paddingTop: 220,
//   },
// });
