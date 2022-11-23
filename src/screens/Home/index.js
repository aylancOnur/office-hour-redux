import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  Button,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

import {connect} from 'react-redux';

import {
  setDecrement,
  setIncrement,
  setWithPayload,
} from '../../redux/actions/counter';

import {getProducts, requestAllProducts} from '../../redux/actions/product';

const mapStateToProps = states => ({
  counter: states.counterReducer.counter,
  products: states.productReducer.products,
});
const mapDispatchToProps = dispatch => ({dispatch});

const Home = connect(
  mapStateToProps,
  mapDispatchToProps,
)(props => {
  const {counter, products, dispatch} = props;
  console.log('PRODUCTS HOME', products.products);

  const [number, setNumber] = useState(0);
  // console.log('number', number);

  const handleInput = d => {
    setNumber(d);
  };

  useEffect(() => {
    dispatch(requestAllProducts());
  }, []);

  return (
    <View style={{flex: 1}}>
      {/* <Text>{counter}</Text>
      <View>
        <Button onPress={() => dispatch(setIncrement())} title="INCREMENT" />
      </View>
      <View>
        <Button onPress={() => dispatch(setDecrement())} title="DECREMENT" />
      </View>
      <View>
        <TextInput
          style={{borderWidth: 1, borderColor: 'red'}}
          onChangeText={d => handleInput(d)}
          value={number}
        />
        <Button
          onPress={() => dispatch(setWithPayload(number))}
          title="SET WITH PAYLOAD"
        />
      </View> */}
      <View style={{flex: 1, borderWidth: 1, borderColor: 'red'}}>
        {/* <Button
          title="GET PRODUCTS"
          onPress={() => dispatch(requestAllProducts())}
        /> */}

        <FlatList
          data={products.products}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return (
              <View>
                <Text>{item.title}</Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
});

export {Home};

// export default connect(mapStateToProps, mapDispatchToProps)(Home);
