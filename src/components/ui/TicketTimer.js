import React, { Component } from 'react'
import styled from 'styled-components'

const StyledTicketTimer = styled.div`
  background: ${props => props.theme.white};
`

class TicketTimer extends Component {
  render() {
    return (
      <StyledTicketTimer>
        <h2>Heeyyyyy</h2>
      </StyledTicketTimer>
    )
  }
}

export default TicketTimer