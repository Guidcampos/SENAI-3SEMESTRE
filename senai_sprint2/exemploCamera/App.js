import { StatusBar } from 'expo-status-bar';
import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import { useEffect, useState, useRef } from 'react';
import { FontAwesome, AntDesign, Ionicons } from '@expo/vector-icons'

export default function App() {
  const cameraRef = useRef(null)
  const [openModal, setOpenModal] = useState(false)
  const [photo, setPhoto] = useState(null)
  const [tipoCamera, setTipoCamera] = useState(CameraType.front)

  useEffect(() => {
    (async () => {
      const { status: cameraStatus } = await Camera.requestCameraPermissionsAsync()
    })();
  }, [])

  async function CapturePhoto() {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync()

      setPhoto(photo.uri)
      setOpenModal(true)

      console.log(photo)
    }
  }

  return (
    <View style={styles.container}>
      <Camera
        ref={cameraRef}
        type={tipoCamera}
        style={styles.camera}
        ratio='16:9'>

        <View style={styles.viewFlip}>
          <TouchableOpacity
            style={styles.btnFlip}
            onPress={() => setTipoCamera(tipoCamera === CameraType.front ? CameraType.back : CameraType.front)}>
            <Ionicons name='camera-reverse' size={40} color="#FFF" />

          </TouchableOpacity>
        </View>

      </Camera>

      <TouchableOpacity style={styles.btnCapture} onPress={() => CapturePhoto()}>
        <FontAwesome name='camera' size={23} color="#FFF" />
      </TouchableOpacity>

      <Modal animationType='slide' transparent={false} visible={openModal}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', margin: 20 }}>

          <Image
            style={{ width: "100%", height: 500, borderRadius: 15 }}
            source={{ uri: photo }}
             />

          <View style={{ margin: 10, flexDirection: 'row' }}>
            <TouchableOpacity style={styles.btnCloseModal} onPress={() => setOpenModal(false)}>
              <AntDesign name='closecircle' size={50} color="#000" />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  camera: {
    flex: 1,
    height: "80%",
    width: "100%"
  },

  viewFlip: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center'
  },

  btnFlip: {
    padding: 20
  },

  txtFlip: {
    fontSize: 20,
    color: '#FFF',
    marginBottom: 20
  },

  btnCapture: {
    padding: 20,
    margin: 20,
    borderRadius: 50,
    backgroundColor: "#121212",
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnCloseModal: {
    margin: 20,
    borderRadius: 50,
    backgroundColor: "#FFF",
    justifyContent: 'center',
    alignItems: 'center',
  },
});
