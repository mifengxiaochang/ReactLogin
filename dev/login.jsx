import React,{Component} from 'react';
export default class Login extends Component {
	constructor(props) {
		super(props);
		this.state={
			loginId :" ",
			passWord:" ",
			isRemember:false
		};
	}

	changeLoginId(e){
		let newLoginId = e.target.value;
		this.setState({
			loginId:newLoginId
		})
	}

	changePassWord(e){
		let newPassWord = e.target.value;
		this.setState({
			passWord:newPassWord
		})
	}

	handleCheckbox(e) {
		let isChecked = e.target.checked;
		if(isChecked){
			this.setState({
				isRemember: true
			});
		} else {
			this.setState({
				isRemember:false
			});
		}
	}

	render() {
		return (
			<div id="login">
				<form className="form">
					<div className="form-group">
						<label htmlFor="loginId">Login ID:</label>
						<input type="text" placeholder="Login ID"  className="textBox" onChange={this.changeLoginId.bind(this)}/>
					</div>
					<div className="form-group">
						<label htmlFor="upaw">Password:</label>
						<input type="password" className="password" name="password" placeholder="Password" onChange={this.changePassWord.bind(this)}/>
					</div>
					<div className="form-group drop">
						<label htmlFor="logOnTo">Log on to:</label>
						<select name="select" className="log-on-to">
    						<option value="Local System">Local System</option>
							<option value="Windows Authentication">Windows Authentication</option>
    					</select>
					</div>
					<div className="form-group">
						<label htmlFor="checkedbox" className="check">
							<input type="checkbox" checked={this.state.isRemember} onClick={this.handleCheckbox.bind(this)}/>
							<span >Remember my login ID</span>
						</label>
						<div className="hr">
						</div>
					</div>
					<div className="form-group">
						<button className="btn" type="reset">Reset</button>
						<button className="btn login" type="button">Login</button>
					</div>
				</form>
			</div>
		);
	}
}
