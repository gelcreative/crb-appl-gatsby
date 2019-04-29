import React, { Component } from 'react'
import ReactModal from 'react-modal'
import styled from 'styled-components'
import StyledFooter from './Footer'

const customStyles = {
  overlay : {
    height                : '125px',
    position              : 'fixed',
    bottom                : '0',
    top                   : '',
    background            : 'transparent' ,
    zIndex                : '10'   
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
  }
};

class ModalFooter extends Component {
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
          <StyledFooter />
          <span className='close' onClick={this.handleModalClose}>X</span> 
        </ReactModal>
                        
    )
  }
}

export default ModalFooter