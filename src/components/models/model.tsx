import React, { useContext } from 'react'
import Modal from 'react-modal';
import { modelBoxStyles } from '@/utils'
import Quote from './quote';
import { SettingContext } from '@/context/setting-context';

const Qoute = () => {

    const {modalIsOpen, closeModal} = useContext(SettingContext)

     return (
          <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={modelBoxStyles}
          contentLabel="Modal"
        >
          <Quote/>
        </Modal>
     )
}

export default Qoute