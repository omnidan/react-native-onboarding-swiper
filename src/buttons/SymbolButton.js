import { View, TouchableOpacity, Text, ViewPropTypes } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

const SymbolButton = ({ size, onPress, style, textStyle, children }) => (
  <View
    style={{
      height: size,
      width: size,
      justifyContent: 'center',
      alignItems: 'center',
      ...style,
    }}
  >
    <TouchableOpacity
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={onPress}
      hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}
    >
      <Text style={{ textAlign: 'center', fontSize: size / 1.7, ...textStyle }}>
        {children}
      </Text>
    </TouchableOpacity>
  </View>
);

SymbolButton.propTypes = {
  size: PropTypes.number.isRequired,
<<<<<<< HEAD:src/SymbolButton.js
  onPress: PropTypes.func,
=======
  onPress: PropTypes.func.isRequired,
>>>>>>> 36f7b5512687036deacfd352e354b9d34daa265a:src/buttons/SymbolButton.js
  style: ViewPropTypes.style,
  textStyle: Text.propTypes.style,
};

SymbolButton.defaultProps = {
  style: null,
  textStyle: null,
};

export default SymbolButton;
