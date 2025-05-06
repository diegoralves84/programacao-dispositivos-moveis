import { useState } from "react";
import { View } from "react-native";
import { TextInput, Button, HelperText } from "react-native-paper";


function RedefinirSenha() {
    const [email, setEmail] = useState("");
    const [erro, setErro] = useState("");

    const trataEnviar = () => {
        if (!email) {
            setErro("E-mail obrigatório, mané!");
            return;
        }

        if (!email.includes("@")) {
            setErro("E-mail inválido, pangaré!")
            return;
        }

        setEmail("");
        setErro("");
        alert("Ufa! E-mail enviado!");

    };

    return (
    <View style={{flex:1, padding: 16}}>
        <TextInput 
        autoCapitalize="none"
        keyboardType="email-address"
        label={"Email"} 
        value={email}
        onChangeText={setEmail}
        mode="outlined"
        style={{marginBottom: 16}}
    />
    <HelperText type="error" visible={erro}>
        {erro}
    </HelperText>
    
    <Button mode="contained" ondPress={trataEnviar}>
        Enviar
    </Button>
   </View>
);
}

export default RedefinirSenha;