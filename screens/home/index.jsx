import { View, Text, Button, Image } from 'react-native';
import { useState } from 'react';
import { Audio } from 'expo-av';

import data from '@/data';

export default function HomeScreen(props) {
    const { navigation } = props;
    const [sound, setSound] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
  
    async function playSound() {
      if (sound) {
        await sound.playAsync();
        setIsPlaying(true);
        return;
      }
        
      await Audio.setAudioModeAsync({
        playsInSilentModeIOS: true, // Ensures audio plays in silent mode
      });
  
      const { sound: newSound } = await Audio.Sound.createAsync(
        data[0].audio, // Replace with your audio URL
        { shouldPlay: true }
      );

      setSound(newSound);
      setIsPlaying(true);

      console.log(newSound);
  
      newSound.setOnPlaybackStatusUpdate((status) => {
        if (!status.isLoaded) {
          console.error('Error loading sound:', status.error);
        }
        if (status.didJustFinish) {
          setIsPlaying(false);
        }
      });
    }

    async function pauseSound() {
        if (sound) {
            await sound.pauseAsync();
            setIsPlaying(false);
        }
    }

    async function stopSound() {
        if (sound) {
            await sound.stopAsync();
            setIsPlaying(false);
        }
    }

    return (
        <View>
            <Text>Home Screen</Text>
            <Image
                source={data[0].artwork}
                style={{ width: 100, height: 100 }}
            />
            <Button
                title={isPlaying ? 'Pause' : 'Play'}
                onPress={isPlaying ? pauseSound : playSound}
            />
            <Button title="Stop" onPress={stopSound} disabled={!isPlaying} />
        </View>
    );
}