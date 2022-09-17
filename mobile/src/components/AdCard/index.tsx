import React from "react";
import { Image, Text, TouchableOpacity, View, ViewProps } from "react-native";
import { Entypo } from "@expo/vector-icons";

import GameController from "../../assets/GameController.png";
import { styles } from "./styles";
import { THEME } from "../../theme";

export interface Ad {
  hoursEnd: number;
  hoursStart: number;
  id: string;
  name: string;
  useVoiceChannel: Boolean;
  weekDays: string[];
  yearsPlaying: number;
}

interface Props extends ViewProps {
  data: Ad;
  buttonCallback?: () => void;
}

export function AdCard({ data, buttonCallback, ...props }: Props) {
  return (
    <View style={styles.container} {...props}>
      <View style={styles.heading}>
        <Text style={styles.label}>Nome</Text>
        <Text style={styles.info} numberOfLines={1}>
          {data.name}
        </Text>
      </View>

      <View style={styles.heading}>
        <Text style={styles.label}>Tempo de jogo</Text>
        <Text
          style={styles.info}
          numberOfLines={1}
        >{`${data.yearsPlaying} ano(s)`}</Text>
      </View>

      <View style={styles.heading}>
        <Text style={styles.label}>Disponibilidade</Text>
        <Text style={styles.info} numberOfLines={1}>{`${
          data.weekDays.length
        } dias \u2022 ${Math.floor(data.hoursStart / 60)}h - ${Math.floor(
          data.hoursEnd / 60
        )}h`}</Text>
      </View>

      <View style={styles.heading}>
        <Text style={styles.label}>Chamada de áudio?</Text>
        <Text
          style={data.useVoiceChannel ? styles.audioTrue : styles.audioFalse}
        >
          {data.useVoiceChannel ? "Sim" : "Não"}
        </Text>
      </View>

      <TouchableOpacity onPress={buttonCallback} style={styles.button}>
        {/* <Entypo name='game-controller' size={20} color={THEME.COLORS.CAPTION_300} /> */}
        <Image source={GameController} style={{ height: 20, width: 20 }} />
        <Text style={styles.buttonContent}>Conectar</Text>
      </TouchableOpacity>
    </View>
  );
}
