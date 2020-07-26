// @ts-nocheck
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  DeviceEventEmitter,
} from 'react-native';
import {GlobalStyles} from './GlobalStyles';
import CodePush from 'react-native-code-push';

import {width, height} from '../utils/utils';
const deviceInfo = {
  deviceWidth: width,
  deviceHeight: height,
};

const CODE_PUSH_KEY = 'kAn0eMP6Yf2lXtY69SUydz_Vub7hll3aoTS3J2';
let codePushOptions = {
  checkFrequency: CodePush.CheckFrequency.MANUAL,
};

class ProgressBar extends Component {
  constructor(props) {
    super(props);
    this.currProgress = 0.0;
    this.syncMessage = '';
    this.state = {
      modalVisible: false,
      isMandatory: false,
      immediateUpdate: false,
      updateInfo: {},
    };
  }

  codePushStatusDidChange(syncStatus) {
    if (this.state.immediateUpdate) {
      switch (syncStatus) {
        case CodePush.SyncStatus.CHECKING_FOR_UPDATE:
          this.syncMessage = 'Checking for update';
          break;
        case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
          this.syncMessage = 'Downloading package';
          break;
        case CodePush.SyncStatus.AWAITING_USER_ACTION:
          this.syncMessage = 'Awaiting user action';
          break;
        case CodePush.SyncStatus.INSTALLING_UPDATE:
          this.syncMessage = 'Installing update';
          break;
        case CodePush.SyncStatus.UP_TO_DATE:
          this.syncMessage = 'App up to date.';
          break;
        case CodePush.SyncStatus.UPDATE_IGNORED:
          this.syncMessage = 'Update cancelled by user';
          break;
        case CodePush.SyncStatus.UPDATE_INSTALLED:
          this.syncMessage = 'Update installed and will be applied on restart.';
          break;
        case CodePush.SyncStatus.UNKNOWN_ERROR:
          this.syncMessage = 'An unknown error occurred';
          alert('更新出错，请重启应用！');
          this.setState({modalVisible: false});
          break;
      }
    }
  }

  // codePushDownloadDidProgress(progress) {
  //   if (this.state.immediateUpdate) {
  //     this.currProgress = parseFloat(
  //       progress.receivedBytes / progress.totalBytes,
  //     ).toFixed(2);
  //     if (this.currProgress >= 1) {
  //       this.setState({modalVisible: false});
  //     } else {
  //       this.refs.progressBar.progress = this.currProgress;
  //     }
  //   }
  // }

  syncImmediate() {
    CodePush.checkForUpdate(CODE_PUSH_KEY).then(update => {
      console.log('-------', update);
      if (!update) {
        alert('已是最新版本！');
      } else {
        this.setState({
          modalVisible: true,
          updateInfo: update,
          isMandatory: update.isMandatory,
        });
      }

      // deploymentKey: "kAn0eMP6Yf2lXtY69SUydz_Vub7hll3aoTS3J2"
      // description: "第8次更新"
      // label: "v10"
      // appVersion: "1.0"
      // isMandatory: true
      // packageHash: "fefa33e735fd611e9adab730253e73251d7d31cd80257dfae16fa63eb20e683e"
      // packageSize: 246587
      // downloadUrl: "https://codepushupdates.azureedge.net/storagev2/DY0xpGZ8fd9FPtgeXeAqrqBbrjrKd2889634-a050-4265-be12-6acb458787f5"
      // download: ƒ download(downloadProgressCallback)
      // isPending: false
      // failedInstall: false
    });
  }

  componentWillMount() {
    // CodePush.disallowRestart()
    DeviceEventEmitter.addListener('updata', () => {
      this.syncImmediate();
    });
  }

  componentDidMount() {
    CodePush.allowRestart();
  }

  _immediateUpdate() {
    CodePush.sync(
      {
        deploymentKey: CODE_PUSH_KEY,
        updateDialog: false,
        installMode: CodePush.InstallMode.IMMEDIATE,
      },
      this.codePushStatusDidChange.bind(this),
    );
  }

  renderModal() {
    return (
      <Modal
        animationType={'none'}
        transparent={true}
        visible={this.state.modalVisible}
        onRequestClose={() => this.setState({modalVisible: false})}>
        <View style={styles.modal}>
          <View style={styles.modalContainer}>
            <View>
              <View style={{backgroundColor: GlobalStyles.white}}>
                <View style={{marginHorizontal: 15}}>
                  <Text
                    style={{
                      marginVertical: 20,
                      fontSize: 17,
                      color: GlobalStyles.textBlockColor,
                      fontWeight: 'bold',
                    }}>
                    更新内容
                  </Text>
                  <Text style={{lineHeight: 20}}>
                    {this.state.updateInfo.description}
                  </Text>
                </View>
                <View style={{alignItems: GlobalStyles.center, marginTop: 20}}>
                  <Text
                    style={{fontSize: 14, color: GlobalStyles.textGrayColor}}>
                    wifi情况下更新不到30秒
                  </Text>
                </View>
                {!this.state.isMandatory ? (
                  <View
                    style={{
                      flexDirection: GlobalStyles.row,
                      height: 50,
                      alignItems: GlobalStyles.center,
                      marginTop: 20,
                      borderTopColor: GlobalStyles.lineColor,
                      borderTopWidth: 1,
                    }}>
                    <TouchableOpacity
                      onPress={() => this.setState({modalVisible: false})}>
                      <View
                        style={{
                          flexDirection: GlobalStyles.row,
                          alignItems: GlobalStyles.center,
                          width: (deviceInfo.deviceWidth - 60) / 2,
                          height: 50,
                          borderRightColor: GlobalStyles.lineColor,
                          borderRightWidth: 1,
                          alignItems: GlobalStyles.center,
                          justifyContent: GlobalStyles.center,
                        }}>
                        <Text
                          style={{
                            fontSize: 17,
                            fontWeight: 'bold',
                            color: GlobalStyles.textGrayColor,
                            marginLeft: 10,
                          }}>
                          残忍拒绝
                        </Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{
                        flexDirection: GlobalStyles.row,
                        alignItems: GlobalStyles.center,
                        width: (deviceInfo.deviceWidth - 60) / 2,
                        height: 50,
                        alignItems: GlobalStyles.center,
                        justifyContent: GlobalStyles.center,
                      }}
                      onPress={() => this._immediateUpdate()}>
                      <View
                        style={{
                          backgroundColor: '#3496FA',
                          flex: 1,
                          height: 40,
                          alignItems: GlobalStyles.center,
                          justifyContent: GlobalStyles.center,
                          margin: 10,
                          borderRadius: 20,
                        }}>
                        <Text
                          style={{
                            fontSize: 17,
                            color: GlobalStyles.white,
                            fontWeight: 'bold',
                          }}>
                          立即更新
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                ) : (
                  <View
                    style={{
                      flexDirection: GlobalStyles.row,
                      height: 60,
                      alignItems: GlobalStyles.center,
                      marginTop: 20,
                      borderTopColor: GlobalStyles.lineColor,
                      borderTopWidth: 1,
                      width: deviceInfo.deviceWidth - 60,
                    }}>
                    <TouchableOpacity
                      style={{
                        flexDirection: GlobalStyles.row,
                        alignItems: GlobalStyles.center,
                        width: deviceInfo.deviceWidth - 60,
                        height: 50,
                        alignItems: GlobalStyles.center,
                        justifyContent: GlobalStyles.center,
                      }}
                      onPress={() => this._immediateUpdate()}>
                      <View
                        style={{
                          backgroundColor: '#3496FA',
                          flex: 1,
                          height: 40,
                          alignItems: GlobalStyles.center,
                          justifyContent: GlobalStyles.center,
                          borderRadius: 20,
                          marginHorizontal: 40,
                        }}>
                        <Text
                          style={{
                            fontSize: 17,
                            color: GlobalStyles.white,
                            fontWeight: 'bold',
                          }}>
                          立即更新
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                )}
              </View>
            </View>
          </View>
        </View>
      </Modal>
    );
  }

  render() {
    return this.renderModal();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: GlobalStyles.bgColor,
  },
  modal: {
    height: deviceInfo.deviceHeight,
    width: deviceInfo.deviceWidth,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  modalContainer: {
    marginHorizontal: 60,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});

export default CodePush(codePushOptions)(ProgressBar);
