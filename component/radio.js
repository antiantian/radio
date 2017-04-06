/**
 * Created by zcy on 2017/4/6.
 */
import React,{Component} from 'react'
import {
	View,
	StyleSheet,
	TouchableHighlight,
	Text,
	Image,
} from 'react-native'
var Dimensions = require('Dimensions');
var width=Dimensions.get('window').width;
var height=Dimensions.get('window').height;
export default class RadioModal extends Component{
	constructor(props){
	  super(props);
		this.state={
			clicked:true,
			radioInit:this.props.radioInit,
			indexa:this.props.selectedValue===undefined?'0':this.props.selectedValue,
		}
	}
	click(id,item){
	 this.setState({indexa:id})
	 this.props.onValueChange(id,item)
	}
	componentDidMount(){		
			const indexInit=this.props.selectedValue===undefined?'0':this.props.selectedValue;
			this.setState({
				indexa:indexInit
			})
			//this.props.onValueChange(indexInit)
	}
	createInner(child,index,props){
	const disabled=props?child[this.props.options.disabled]:child.props.disabled;	
    const childC=props?child[this.props.options.value]:child.props.children;
    const values=props?child[this.props.options.id]:child.props.value;
    const hightlight=props?this.state.indexa===child[this.props.options.id]:this.state.indexa===child.props.value;
		return <Raio2 
		      child={childC}
              index={index}
  		      value={values}
              key={index}
			  initStyle={this.props.innerStyle}
			  txtColor={this.props.txtColor}
			  noneColor={this.props.noneColor}
  		      onclick={this.click.bind(this)}
              hightlight={hightlight}
			  disabled={disabled}
              seledImg={this.props.seledImg}
              selImg={this.props.selImg}
			  selnoneImg={this.props.selnoneImg}
			/>
	}
	render(){
		const that=this;
		return(
		 <View {...this.props.style}>
		      {
				!this.props.dataOption&&React.Children.map(this.props.children,(child,index)=>this.createInner(child,index))
			  }
        {
          this.props.dataOption&&this.props.dataOption.map((item,index)=>this.createInner(item,index,true))
        }
		 </View>
		)
	}
}

class Raio2 extends Component{
	constructor(props){
	    super(props);
	}
	click(id,item){
		if(this.props.disabled){
			return
		}else{
			this.props.onclick(id,item);
		}  
	}
	render(){
		imgUrl=this.props.hightlight?this.props.seledImg||require('./imgs/selted.png'):this.props.selImg||require('./imgs/selt.png');
		imgUrlNone=this.props.selnoneImg||require('./imgs/seltnone.png');
		return(
		    <TouchableHighlight
			   underlayColor='transparent'
			   style={[{marginRight:15,width:(width-80)/2,height:24},this.props.initStyle]}
			   onPress={this.click.bind(this,this.props.value,this.props.child)}>
  				<View  style={{flex:1,flexDirection:'row',alignItems:'center'}} >
					{this.props.disabled&&!this.props.hightlight&&<Image source={imgUrlNone} style={{width:14,height:14,marginRight:7}}/>}
					{this.props.disabled&&this.props.hightlight&&<Image source={imgUrl} style={{width:14,height:14,marginRight:7}}/>}
					{!this.props.disabled&&<Image source={imgUrl} style={{width:14,height:14,marginRight:7}}/>}
  				  <Text style={{color:this.props.disabled?this.props.noneColor||'#dfdfdf':this.props.txtColor||'#414141'}}>{this.props.child}</Text>
  				</View>
			</TouchableHighlight>
		)
	}
}
const styles=StyleSheet.create({
	titleCom:{
		marginBottom:5,
	},
	seltedImgs:{
		width:14,
		height:14,
		marginRight:8,
	},
	emailH:{
	 height:28,
	 textAlignVertical:'center',
	 marginRight:10,
	 color:'#141414',
	 fontSize:12,
	},
	inputs:{
		width:width*0.5,
		borderWidth:1,
		borderColor:'#dfdfdf',
		borderRadius:3,
		height:28,
		padding:0,
		paddingLeft:5,
		paddingRight:5,
		marginBottom:10,
		fontSize:12,
	},
	closeBtns:{
		position:'absolute',
		width:14,
		height:14,
		right:10,
		top:7,
	},
	headLog:{
	  backgroundColor:'#e6454a',
	  color:'#ffffff',
	  height:28,
	  textAlignVertical:'center',
	  textAlign:'center'
	},
	border1:{
		borderWidth:1,
		borderColor:'#dfdfdf',
	},
	borderR:{
		borderRightWidth:1,
		borderRightColor:'#dfdfdf',
	},
	borderL:{
		borderLeftWidth:1,
		borderLeftColor:'#dfdfdf',
	},
	eleMess:{
		paddingLeft:10,
		paddingRight:10,
		height:24,
		fontSize:12,
		color:'#ffffff',
		backgroundColor:'#f8cb43',
		borderRadius:3,
		textAlignVertical:'center',
		textAlign:'center',
		width:80,
	},
	electronicTip:{
		width:(width-40)/5,
		flexDirection:'row',
		justifyContent:'center',
		paddingTop:10,
		paddingBottom:10,
	},
	lineRow:{
		backgroundColor:'#ffffff',
		borderRadius:3,
		flexDirection:'row',
		flex:1,
		marginBottom:15,
		padding:10,
		alignItems:'center',
		justifyContent:'space-between',
		flexWrap:'wrap',
		alignItems: 'flex-start',
		
	},
	lineRowB:{
		backgroundColor:'#ffffff',
		borderRadius:3,
		flexDirection:'row',
		flex:1,
		marginBottom:15,
		paddingLeft:10,
		paddingRight:10,
		alignItems:'center',
	},
	inner3:{
		width:(width-40)/3,
		fontSize:12,
		color:'#141414'
	},
	innerS:{
		flexDirection:'row',
        flex:1,
		fontSize:12,
		color:'#141414'
	},
	flex1:{
		flex:1
	},
	flexRow:{

	   flexDirection:'row',
	 },
	flexVer:{
		flexDirection:'column',
	},
	Jcenter:{
		justifyContent:'center',
	},
	Acenter:{
		alignItems:'center',
	},
	BE:{
		justifyContent:'space-between'
	},
	Textcenter:{
		textAlign:'center',
	},
	TextCenterVer:{
		textAlignVertical:'center',
	},
	backCGray:{
	  backgroundColor:'#dfdfdf'
    },
	backWhite:{
		backgroundColor:'#ffffff',
	},
	borderRadius5:{
		borderRadius:5,
	},
	borderRadius3:{
		borderRadius:3,
	},
	horLine:{
		flexDirection:'row',
		flex:1,		
		flexWrap:'wrap',
		alignItems: 'flex-start',
		marginBottom:10,
		},
	paddlr10:{
	   paddingLeft:10,
	   paddingRight:10,
    },
	marginB10:{
		marginBottom:10,
	},
	colorRed:{
	   color:'#b40e12',
	},
	colorBlack:{
	   color:'#141414',
	},
	colorYellow:{
	   color:'#f8cb43', 
	},
	color999:{
	   color:'#999999',
	},
	colorWhite:{
	   color:'#ffffff',
    },	
})
