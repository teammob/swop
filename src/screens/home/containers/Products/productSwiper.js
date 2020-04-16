import React, {Component} from 'react';
import {
  Button,
  StyleSheet,
  View,
  TouchableOpacity,
  Platform,
  ScrollView,
} from 'react-native';
import {connect} from 'react-redux';
import Swiper from 'react-native-deck-swiper';
import {configsSelector} from 'src/modules/common/selectors';
import {Header, ThemedView, Text} from 'src/components';
import Container from 'src/containers/Container';
import {TextHeader, IconHeader, CartIcon} from 'src/containers/HeaderComponent';

// demo purposes only
function* range(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

class productSwiperScreen extends Component {
  static navigationOptions = {
    headerShown: true,
  };
  constructor(props) {
    super(props);
    this.state = {
      cards: [...range(1, 50)],
      swipedAllCards: false,
      swipeDirection: '',
      cardIndex: 0,
      // showSecondCard: true,
      // stackSize: 3,
    };
  }

  renderCard = (card, index) => {
    return (
      //<View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.text}>
          {card} - {index}
        </Text>
      </View>
      //</View>
    );
  };

  onSwiped = type => {
    console.log(`on swiped ${type}`);
  };

  onSwipedAllCards = () => {
    this.setState({
      swipedAllCards: true,
    });
  };

  swipeLeft = () => {
    this.swiper.swipeLeft();
  };
  swipeRight = () => {
    this.swiper.swipeRight();
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
        <Container>
          <Swiper
            ref={swiper => {
              this.swiper = swiper;
            }}
            onSwiped={() => this.onSwiped('general')}
            onSwipedLeft={() => this.onSwiped('left')}
            onSwipedRight={() => this.onSwiped('right')}
            onSwipedTop={() => this.onSwiped('top')}
            onSwipedBottom={() => this.onSwiped('bottom')}
            onTapCard={this.swipeRight}
            cards={this.state.cards}
            cardIndex={this.state.cardIndex}
            cardVerticalMargin={15}
            renderCard={this.renderCard}
            onSwipedAll={this.onSwipedAllCards}
            stackSize={5}
            stackSeparation={15}
            overlayLabels={{
              bottom: {
                title: 'BLEAH',
                style: {
                  label: {
                    backgroundColor: 'black',
                    borderColor: 'black',
                    color: 'white',
                    borderWidth: 1,
                  },
                  wrapper: {
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                  },
                },
              },
              left: {
                title: 'NOPE',
                style: {
                  label: {
                    backgroundColor: 'black',
                    borderColor: 'black',
                    color: 'white',
                    borderWidth: 1,
                  },
                  wrapper: {
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                    justifyContent: 'flex-start',
                    marginTop: 30,
                    marginLeft: -30,
                  },
                },
              },
              right: {
                title: 'LIKE',
                style: {
                  label: {
                    backgroundColor: 'black',
                    borderColor: 'black',
                    color: 'white',
                    borderWidth: 1,
                  },
                  wrapper: {
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    marginTop: 30,
                    marginLeft: 30,
                  },
                },
              },
              top: {
                title: 'SUPER LIKE',
                style: {
                  label: {
                    backgroundColor: 'black',
                    borderColor: 'black',
                    color: 'white',
                    borderWidth: 1,
                  },
                  wrapper: {
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                  },
                },
              },
            }}
            animateOverlayLabelsOpacity
            animateCardOpacity
            swipeBackCard>
            <Button
              onPress={() => this.swiper.swipeRight()}
              title="Swipe Back"
            />
          </Swiper>
        </Container>
      </ThemedView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: '#F5FCFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    // flex: 1,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingVertical: '65%',
    paddingEnd: '65%',
  },
  text: {
    textAlign: 'center',
    fontSize: 50,
    backgroundColor: 'transparent',
  },
  done: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    backgroundColor: 'transparent',
  },
});

const mapStateToProps = state => {
  return {
    configs: configsSelector(state),
  };
};

export default connect(mapStateToProps)(productSwiperScreen);
