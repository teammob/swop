import React from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import {Text} from 'src/components';
import {configsSelector} from 'src/modules/common/selectors';

class productSwiperScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>cartSwiper</Text>
      </View>
    );
  }
}



const mapStateToProps = state => {
  return {
    configs: configsSelector(state),
  };
};

export default connect(mapStateToProps)(productSwiperScreen);
