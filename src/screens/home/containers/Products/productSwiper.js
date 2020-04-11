import React from 'react';
//import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {connect} from 'react-redux';
//import {Text} from 'src/components';
//import {ProductStack, Card} from '../Swiper';
import {configsSelector} from 'src/modules/common/selectors';
import {Header, ListItem, ThemedView} from 'src/components';

import {TextHeader, IconHeader, CartIcon} from 'src/containers/HeaderComponent';

class productSwiperScreen extends React.Component {
  static navigationOptions = {
    headerShown: true,
  };
  render() {
    const {
      // navigation,
      screenProps: {t},
    } = this.props;
    return (
      <ThemedView isFullView>
        <Header
          leftComponent={<IconHeader />}
          centerComponent={<TextHeader title={t('common:text_product')} />}
          rightComponent={<CartIcon />}
        />
      </ThemedView>
    );
  }
}

const mapStateToProps = state => {
  return {
    configs: configsSelector(state),
  };
};

export default connect(mapStateToProps)(productSwiperScreen);
