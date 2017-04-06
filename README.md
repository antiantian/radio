# radio
a react-native radio component for android and ios ,user can custom it 
# Installation
-npm i react-native-radio-model --save
#Usage
Import this module:
--javascript
import CommonDialog from 'react-native-dialogs-master';
--
```javascript
import React,{Component} from 'react'
import {
	View,
	StyleSheet,
	Navigator,
	TouchableHighlight,
	Text,
	ScrollView,
	Image,
	ListView,
} from 'react-native'
var Dimensions = require('Dimensions');
var width=Dimensions.get('window').width;
var height=Dimensions.get('window').height;
import RadioModal from './radio2';
var datas= [
            {
              "selecteId": 13,
              "content": "Apple",
              "selected": false
            },
            {
              "selecteId": 14,
              "content": "Banana",
              "selected": false
            },
            {
              "selecteId": 15,
              "content": "Orange",
              "selected": false
            },
            {
              "selecteId": 16,
              "content": "Watermelon",
              "selected": true
            },
            {
              "selecteId": 17,
              "content": "Grape",
              "selected": false
            }
          ]	  

export default class RadioModalItem extends Component{
	constructor(props){
		super(props);
		this.state = {
                language:datas[3].selecteId,
		item:datas[3].content,
		initItem:'选项a',
		initId:'0'
        };
	}
	render(){
		return (
			<View style={{padding:20,flex:1,flexDirection:'column'}}>
			    <Text style={{backgroundColor:'#ffffff',color:'#414141',padding:5,}}>
			      The selected:<Text style={{color:'#ff0000'}}>{this.state.item}</Text>	 
			    </Text>	 
			    <Text style={{backgroundColor:'#ffffff',color:'#414141',padding:5,}}>	 
	                       Unique identification：<Text style={{color:'#ff0000'}}>{this.state.language}</Text>
			    </Text>
			    <RadioModal
				options={{id:'selecteId',value:'content',disabled:'selected'}}
				innerStyle={{width:(width-80)/2}}
				txtColor={'#000000'}
				noneColor={'#efefef'}
				selectedValue={this.state.language}
				onValueChange={(id,item) => this.setState({language: id,item:item})}
				seledImg={require('./imgs/selected.png')}
				selImg={require('./imgs/select.png')}
				selnoneImg={require('./imgs/selectnone.png')}
				dataOption={datas}
				style={{ flexDirection:'row',
					flexWrap:'wrap',
					alignItems:'flex-start',
					flex:1,
					backgroundColor:'#ffffff',padding:5,marginTop:10
				}} 
			     />
			     <Text style={{backgroundColor:'#ffffff',color:'#414141',padding:5,}}>
				The selected:<Text style={{color:'#ff0000'}}>{this.state.initItem}</Text>	 
			    </Text>	 
			    <Text style={{backgroundColor:'#ffffff',color:'#414141',padding:5,}}>	 
                                 Unique identification：<Text style={{color:'#ff0000'}}>{this.state.initId}</Text>
			    </Text>
		            <RadioModal
				selectedValue={this.state.initId}
				onValueChange={(id,item) => this.setState({initId: id,initItem:item})}
				style={{ flexDirection:'row',
					  flexWrap:'wrap',
					  alignItems:'flex-start',
					  flex:1,
					  backgroundColor:'#ffffff',padding:5,marginTop:10
					  }} 
				>
				  <Text value="0">选项a</Text>
				  <Text value="1" disabled="true">选项b</Text>
				  <Text value="2">选项c</Text>
				  <Text value="3">选项d</Text>
			   </RadioModal>
		   </View>

		);
	}
}
```
# Explain
- Two ways of using

  -1.
   ```javascript
   <RadioModal dataOption={data} />
   ```
  -2. 
   ```javascript
      <RadioModal>
          <Text value="0">选项a</Text>
	  <Text value="1" disabled="true">选项b</Text>
	  <Text value="2">选项c</Text>
	  <Text value="3">选项d</Text>
      </RadioModal>
```
# Customization
- innerStyle：Style of each radio button
- txtColor：Style of each radio button text
- noneColor：No click on the button style
- seledImg:Select Picture
- selImg:default Picture
- selnoneImg:disabled Picture
- style：Outer style
# Props 
- options={{id:'selecteId',value:'content',disabled:'selected'}}  Set corresponding name
- selectedValue：default id
- dataOption: data

# Methods

- onValueChange={(id,item) => this.setState({initId: id,initItem:item})}  //return id(Unique identification) item（Text content）
