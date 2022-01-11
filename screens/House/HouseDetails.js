import React, { Component } from "react";
import {
  Button,
  Image,
  SafeAreaView,
  Text,
  ToastAndroid,
  View,
} from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";
import cardStyles from "../../styles/cards";
import utilities from "../../styles/utilities";
import Ionicons from "react-native-vector-icons/Ionicons";
import { addToCart } from "../../store/actions/cart";

export class HouseDetails extends Component {
  render() {
    const product_id = this.props?.route?.params?.product_id;
    const curProd = this?.props?.availableHouses.find(
      (prod) => prod.id === product_id
    );
    const { price, product_img, title, description } = curProd;
    const { addToCart } = this?.props;
    return (
      <SafeAreaView style={cardStyles?.cardContainer}>
        <ScrollView>
          <View>
            <View style={cardStyles?.detImgCont}>
              <Image style={cardStyles.cardImg} source={{ uri: product_img }} />
              <View
                style={[
                  utilities.brTopRtRdsm,
                  utilities.brTopLtRdsm,
                  cardStyles.iconCont,
                ]}
              >
                <TouchableOpacity
                  onPress={() => {
                    addToCart(curProd);
                    ToastAndroid.show(
                      "This item was successfully added to cart."
                    ),
                      ToastAndroid.SHORT;
                  }}
                >
                  <Text style={[cardStyles.btn, cardStyles?.btnCart]}>
                    <Ionicons name="cart-outline" size={40} color="tomato" />
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={[cardStyles.btn, cardStyles?.btnCart]}>
                    <Ionicons name="heart-outline" size={40} color="tomato" />
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <Text
              ellipsizeMode="tail"
              numberOfLines={1}
              style={[
                utilities?.fontSansBold,
                utilities.paddingSm,
                cardStyles.detTitle,
              ]}
            >
              {curProd.title}
            </Text>

            <Button title="Add to Cart" onPress={() => {}} />

            <View style={[utilities.paddingSm, cardStyles.desCont]}>
              <Text style={[utilities.fontSansBold, utilities.fontSizeSm3]}>
                GHc {price.toFixed(2)}
              </Text>
              <Text>{description}</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

HouseDetails.navigationOptions = () => {
  return {
    headerTitle: "Details Screen",
  };
};
const mapStateToProps = (state) => ({
  availableHouses: state?.Houses?.availableHouses,
});
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (product) => dispatch(addToCart(product)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HouseDetails);
