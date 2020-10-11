import React, {Component} from 'react';
import {StyleSheet,
	TextInput, 
	View,
	} from 'react-native';

class Main extends React.Component {
	onPress = () => {
	this.props.navigation.navigate('Chat',{name: this.state.name });
	}
	onChangeText = name => this.setState({ name });
	render() {
		return(
			<View>	<Text style={styles.title}>Enter your name:</Text>
				<TextInput
				onChangeText={this.onChangeText} // <- Add this
				style ={styles.nameInput}
				placeHolder = "place holder"
				value={this.state.name}
			/>
			<TouchableOpacity onPress={this.onPress}>
				<Text style={styles.buttonText}>Next</Text>
			</TouchableOpacity>
		</View>
	);
	}
}

 
const offset = 24;
const styles = Style.Sheet.create({
	nameInput: {
		height: offset * 2,
		margin: offset,
		paddingHorizontal: offset,
		borderColor: '#111111',
		borderWidth: 1,
	},

	Title: {
		marginTop: offset,
		marginLeft: offset,		
		fontSize: offset,
	},
	buttonText: {
		marginLeft: offset,
		fontsize: offset,
	},
});

export default Main;
