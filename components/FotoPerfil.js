import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import Swal from 'sweetalert2';
import {authAxios} from '../config/axios';

export default function FotoPerfil() {


      const onDropRejected = (message=null) => {
        Swal.fire({
        title: 'Error!',
        text: message || 'No se pudo subir',
        icon: 'error',
        confirmButtonText: 'Cool'
      })
    }

  const maxSize = 2* 1024 *1024 ;

  const onDrop = useCallback(acceptedFiles => {


    const type = acceptedFiles[0].type;


    if(type.includes('jpeg') || type.includes('png')){

   

    // Crear un form Data
        const formData = new FormData();
        formData.append('photo', acceptedFiles[0]);
        // subirArchivo(formData, acceptedFiles[0].path);

        const sendData = async()=>{
          
       try{
         const result = await authAxios.post('photo',formData);

         console.log(result.data);
         
       }catch(error){
        onDropRejected()
         
       }
        }

        sendData();
  }
    else{
       onDropRejected('Solo se acepta png y jpeg')
    }
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop,onDropRejected,maxSize})

  return (
    <div {...getRootProps()} className="dropzone">
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Suelta la foto...</p> :
          <p>Arrastra la foto o da click para seleccionar alguna</p>
      }
    </div>
  )
}

