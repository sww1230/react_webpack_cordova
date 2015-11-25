'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Text,
  View,
  TextInput
} = React;

module.exports = React.createClass({
  render() {
    return (
      <View style={styles.container}>
         <Text>aaa</Text>
         <Text>bbb</Text>
         <Text>ccc</Text>
      </View>
    );
  }
});