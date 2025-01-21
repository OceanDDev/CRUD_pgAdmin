
import { useState } from 'react'
import './App.css'
import ModalForm from './component/ModalForm'
import TabList from './component/TableList'
import Navbar from './page/Navbar'

function App() {

  const [isOpen, setIsOpen] = useState(false)
  const [modalModel, setModalModel] = useState('add')

  const handleOpen = (mode) => { 
    setIsOpen(true)
    setModalModel(mode)
  }

  const handleSubmit = () => { 
    if(modalModel === 'add'){
      console.log('modal model Add')
    } else { 
      console.log('modal model Edit')
    }
    }
  return (
    <>
        <Navbar onOpen={()=> handleOpen('add')}/>
        <TabList handleOpen={handleOpen}/>
        <ModalForm 
        isOpen={isOpen}
        onClose={()=> setIsOpen(false)}
        OnSubmit={handleSubmit}
        mode={modalModel}
        />

    </>
  )
}

export default App
