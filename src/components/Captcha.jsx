import React, { Component }   from 'react';
import { connect }            from 'react-redux'
import { ReCaptcha }          from 'react-recaptcha-google'

import { setToken }           from '../redux/actions/login-actions';

class CaptchaComponent extends Component {
  constructor(props, context) {
    super(props, context);
    this.onLoadRecaptcha = this.onLoadRecaptcha.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);
  }

  componentDidMount() {
    if (this.captchaDemo) {
      console.log("started, just a second...")
      this.captchaDemo.reset();
    }
  }

  onLoadRecaptcha() {
    if (this.captchaDemo) {
      this.captchaDemo.reset();
    }
  }

  verifyCallback(recaptchaToken) {
    this.props.setToken(recaptchaToken)
  }

  render() {
    return (
      <div>
        {/* You can replace captchaDemo with any ref word */}
        <ReCaptcha
          ref={(el) => {
            this.captchaDemo = el;
          }}
          size="normal"
          data-theme="dark"
          render="explicit"
          sitekey="6LdGBMcUAAAAABhZikINgY8TvlKQwoTDTp0bScjN"
          onloadCallback={this.onLoadRecaptcha}
          verifyCallback={this.verifyCallback}
        />
      </div>
    );
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    setToken(token) {
      dispatch(setToken(token))
    }
  }
}

export default connect(null, mapDispatchToProps)(CaptchaComponent)