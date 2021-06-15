import React from 'react'
import { ContentDropZone, DropContainer, TextDrop } from './styles'

const FileUpload = () => {
  const dragOver = (e: any) => {
    e.preventDefault()
  }

  const dragEnter = (e: any) => {
    e.preventDefault()
  }

  const dragLeave = (e: any) => {
    e.preventDefault()
  }

  const fileDrop = (e: any) => {
    e.preventDefault()
    const files = e.dataTransfer.files
    if (files.length) {
      handleFiles(files)
    }
  }

  const handleFiles = (files: any) => {}

  const validateFile = (file: any) => {
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/x-icon']
    if (validTypes.indexOf(file.type) === -1) {
      return false
    }
    return true
  }

  return (
    <ContentDropZone>
      <DropContainer
        onDragOver={dragOver}
        onDragEnter={dragEnter}
        onDragLeave={dragLeave}
        onDrop={fileDrop}
      >
        <TextDrop>Click para adjuntar Logo (O arrastre el documento)</TextDrop>
      </DropContainer>
    </ContentDropZone>
  )
}

export default FileUpload
