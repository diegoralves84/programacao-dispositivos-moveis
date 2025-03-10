import { View, Text } from "react-native";

function PadraoIOS() {
  return (
    <View style={{ flex: 1, justifyContent: "space-between" }}>
      <View style={{ 
        height: 64, 
        backgroundColor: "gray",
        justifyContent: "center",
        alignItems: "center", }}>
        <Text style={{fontSize: 24, fontWeight: "bold", color: "white", }}>Meu APP</Text>
      </View>
      <View style={{ height: 64,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "lightgray" }}>
        <Text style={{fontWeight: "bold"}}>Home</Text>
        <Text style={{fontWeight: "bold"}}>Perfil</Text>
        <Text style={{fontWeight: "bold"}}>Configurações</Text>
      </View>
    </View>
  );
}

export default PadraoIOS;
