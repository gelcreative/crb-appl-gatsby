import React, { Component } from 'react'
import MailchimpSubscribe from "./MailchimpSubscribe"
import styled from 'styled-components'
import ReactHtmlParser from 'react-html-parser'

const StyledSubscriptionForm = styled.div`
  position: relative;
  z-index: 1;  
  input[type='text'], input[type='email'] {
    max-width:200px;
    margin-right:10px;    
    font-size:1.6rem;
    padding:1rem;
  }
  .column {
    margin:0;
  }
`
// a basic form
const CustomSignupForm = ({ status, message, onValidated, step, formaction }) => {
  let email, fname, lname;
  const submit = () =>
    email &&
    fname &&
    lname &&    
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
      FNAME: fname.value,
      LNAME: lname.value
    });
 
  return (
    <form onSubmit={formaction} name="promoForm" data-netlify="true">
      <div className="columns">
        {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
        {status === "error" && (
          <div
            style={{ color: "red" }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        {status === "success" && (
          <div
            style={{ color: "green" }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        <div className="column">
          <input            
            ref={node => (fname = node)}
            type="text"
            placeholder="First Name"
          />
          <input            
            ref={node => (lname = node)}
            type="text"
            placeholder="Last Name"
          />       
          <input            
            ref={node => (email = node)}
            type="email"
            placeholder="Email"
          />
          <input type="submit" value="Subscribe" onClick={submit} className="button-light" />
        </div>
      </div>
      {/* <div className="columns">
        <div className="column is-narrow">
          <input type="checkbox" id="receive-dealer-offers" name="dealerOffers" ref={node => (dealerOffers = node)} />
          <label htmlFor="receive-dealer-offers">I would like to receive future offers from {promoTitle}</label>
        </div>
        <div className="column is-narrow">
          <input type="checkbox" id="receive-choose-your-promo-offers" name="promoOffers" ref={node => (promoOffers = node)} />
          <label htmlFor="receive-choose-your-promo-offers">I would like to receive future promotions and offers from chooseyourpromo.com</label>
        </div>
      </div> */}      
      <input type="hidden" value={step}/>
    
    </form>
  );
};

class SubscriptionForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      promo: '',
      dealerOffers: false,
      promoOffers: false,
      isSubmitted: false,
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  stripHtml(html) {
    const stripped = html.replace(/(<([^>]+)>)/ig, '')
    return stripped
  }

  buttonClick(promo) {
    this.setState({
      promo
    })
  }

  handleChange(e) {
    const target = e.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.setState({
      isSubmitted: true
    })
  }

  render() {
    // const { main } = this.props.promo
    const url = "https://downtownbarrie.us5.list-manage.com/subscribe/post?u=2c5dfe9183fc9713b3c531c27&amp;id=3b5be07e7f"

    if (this.state.promo !== '' && this.state.isSubmitted === false) {
      return (
        <StyledSubscriptionForm className="container">
          <div className="column">
          
                {/* <h1>Signup Now</h1> */}
           
            <MailchimpSubscribe
              url={url}
              render={({ subscribe, status, message }) => (
                <CustomSignupForm
                  status={status}
                  message={message}
                  offer={ReactHtmlParser(this.state.promo)}
                  step={this.stripHtml(this.state.promo)}
                  onValidated={formData => subscribe(formData)}
                  formaction={this.handleSubmit}
                  currentForm={this.state.promo}
                  promoTitle='{this.props.promo.title}'
                  dealerEmail='{this.props.promo.dealerEmail}'
                />
              )}
            />            
          </div>
        </StyledSubscriptionForm>
      )
    } else if (this.state.promo !== '' && this.state.isSubmitted === true) {
      return (
        <StyledSubscriptionForm className="container">
          <div className="column">
                <h1>THANK YOU FOR SUBSCRIBING.</h1>
                <p>We will send you more event details as things progress.</p>            
          </div>                      
        </StyledSubscriptionForm>
      )
    } else {
      return (
        <StyledSubscriptionForm className="container">
          <div className="column">
                <h4><em>BECOME A</em> CURB APPEAL INSIDER</h4>
                <p>Join our email list for Curb Appeal event updates.</p>
          </div>
          <div className="column">
            <button className="button-light" onClick={() => this.buttonClick('main.promos.promoOne.promoText')}>
              Subscribe Now
            </button>
          </div>
        </StyledSubscriptionForm>
      )
    }
  }
}

export default SubscriptionForm