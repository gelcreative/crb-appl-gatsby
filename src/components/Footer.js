import React, { Component } from 'react'
import styled from 'styled-components'
import SubscriptionForm from './SubscriptionForm'
import ReactModal from 'react-modal'

const customStyles = {
  overlay : {
    height                : '123px',
    position              : 'fixed',
    bottom                : '0',
    top                   : '',
    background            : 'transparent'    

    // display               : 'none'
  },
  content : {
    top                   : '',
    left                  : '',
    right                 : '',
    bottom                : '',
    marginRight           : '',
    border                : '0',
    width                 : '100%',
    padding               : '0',
    borderRadius          : '0',
    background            : 'transparent',
    // height                : '125px'
    // transform             : 'translate(-50%, -50%)',

  }
};

const StyledFooter = styled.footer`
background-color: ${props => props.theme.tertiaryColor};
padding: 0 0;
// position:fixed;
bottom:0;
left:0;
padding:0;
width:100%;
color: ${props => props.theme.white};
section {
  padding:0 0;
  height:125px;
}
.container {
  display: flex;
  // width:100%;
  height:100%;
  align-items: center;
  justify-content: stretch;
  flex-wrap: wrap;
  .column {
    flex:1;
    margin: 2rem;
  }
}
h4 {
  font-weight:600;
  font-size:3.2rem;
}
footer {
  height:inherit;
}
.close {
  position:absolute;
  font-size:2rem;
  top:10px;
  right:10px;
}
`

class Footer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isModalOpen: true,
    }
  }

  handleModalOpen = event => {
    // console.log('handleModalOpen: ', event);
    this.setState({ isModalOpen: true })
  }

  handleModalClose = event => {
    // console.log('handleModalOpen: ', event);
    this.setState({ isModalOpen: false })
  }

  render(){
    return (
      <ReactModal
          isOpen={this.state.isModalOpen}
          onRequestClose={this.handleModalClose}
          contentLabel="FooterModal"
          style={customStyles}
        >
        <StyledFooter>          
          <section>
            <footer>
                  <SubscriptionForm />           
                  
            </footer>
            
          </section>
          <span className='close' onClick={this.handleModalClose}>X</span>
          
        </StyledFooter>        
      </ReactModal>
    )
  }
}

export default Footer