import { Accordion, AccordionDetails, AccordionSummary, Button, Fab, TextField } from '@mui/material'
import React from 'react'
import CustomCardComponent from './Components/CustomCard'
import { CustomAccordion, TextFieldCustom } from './Custom/Custom'

const App = () => {
  return (
    <div style={{ marginRight: 50, marginLeft: 50 }}>
      <h1>sda</h1>
      <Button variant='contained' color='primary'>ClickHere</Button>
      <TextField variant='outlined' placeholder='Name' />

      <TextFieldCustom variant='outlined' placeholder='Name' label="Name" />
      <CustomCardComponent>
        <h1>Card</h1>
      </CustomCardComponent>

      <CustomAccordion>
        <AccordionSummary
          expandIcon={<div>icon</div>}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Accordion 1
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </CustomAccordion>

      <Fab style={{position:'fixed',right:30,bottom:20}} color="secondary" aria-label="edit">
        {/* <EditIcon /> */}
        <h4>sss</h4>
      </Fab>

    </div>
  )
}

export default App
