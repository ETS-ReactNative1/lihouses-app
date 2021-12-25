import React, { Component } from "react";
import {
  Button,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { connect } from "react-redux";
import cardStyles from "../../styles/cards";
import mainStyles from "../../styles/main";

export class HouseOverview extends Component {
  render() {
    const renderData = (itemData) => {
      return (
        <TouchableOpacity
          style={[
            mainStyles?.gridItem,
            cardStyles.homeCard,
            cardStyles.shadows,
          ]}
          onPress={() => {
            this.props.navigation.navigate("HouseDetails");
          }}
        >
          <View>
            <View style={cardStyles.imgContainer}>
              <Image
                style={cardStyles.image}
                source={{ uri: itemData.item.product_img }}
              />
            </View>
            <View style={cardStyles.actions}>
              <Text style={cardStyles.title}>{itemData.item.title}</Text>
              <Text style={cardStyles.price}>{itemData.item.price}</Text>
            </View>
          </View>
        </TouchableOpacity>
      );
    };
    return (
      <FlatList
        data={this?.props?.availableHouses}
        numColumns={2}
        renderItem={renderData}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  availableHouses: state?.Houses?.availableHouses,
});

export default connect(mapStateToProps, {})(HouseOverview);
