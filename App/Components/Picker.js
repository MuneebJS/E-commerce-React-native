import React, { Component } from "react";
import { Platform } from "react-native";
import { Container, Header, Title, Content, Button, Icon, Text, Right, Body, Left, Picker as NativeBasePicker, Form, Item as FormItem } from "native-base";



const Item = NativeBasePicker.Item;

export default class Picker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected2: undefined
    };
  }
  onValueChange2(value: string) {
    this.setState({
      selected2: value
    });
  }
  render() {
    return (
            <NativeBasePicker
              mode="dropdown"
              placeholder="Select One"
              selectedValue={this.props.selectedValue}
              onValueChange={this.props.onChange}
              style={this.props.style}
            >
            {this.props.items.map((item) => {
              return <Item label={item.label} value={item.key} />
            })}
            </NativeBasePicker>
    );
  }
}