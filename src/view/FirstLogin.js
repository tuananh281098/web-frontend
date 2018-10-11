import React, {Component} from 'react';
import Button from "@material-ui/core/Button";
import Background from "./../assets/img/back.png";

class FirstLogin extends Component{
	login = () => {
		window.location.replace("#/login")
	}
	render(){
		return(
			<div style = {{
				backgroundImage: `url(${Background})`,
				height:'100%',
				backgroundSize: 'cover',
            	overflow: 'hidden',
            }}>
				<div style = {{
					marginLeft:'20%',
					marginRight:'20%',
				}}>
					<div style = {{
						color:'white',
						fontSize:'300%',
						textAlign:'center',
						paddingTop:'20%',
					}}>lưu trữ khoảnh khắc cuộc sống</div>
					<Button style = {{
						backgroundColor: 'white',
						width:'15%',
						height:'15%',
	          			marginLeft: '43%',
	          			marginTop:'20%',
	          		}} onClick={this.login}>
	            	<h1> Sign in </h1>
	          		</Button>
          		</div>
			</div>
		);
	}
}
export default FirstLogin;
