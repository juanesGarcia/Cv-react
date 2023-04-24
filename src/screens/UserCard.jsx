import React from 'react'
import {useContext} from 'react'
import {TaskContext} from "../context/TaskContext";
import Swal from 'sweetalert2';
import '../Style/UserCarsStyle.css'

export const UserCard = ({user}) => {
    const {deleteUser,ModificarUser} = useContext(TaskContext);
    const mostrarFormulario = () => {
      Swal.fire({
        title: 'Modificando los datos del formulario',
        html:
          '<div class="form-group">' +
          '<label for="nombre">Nombre:</label>' +
          '<input type="text" class="form-control" id="nombre" name="nombre" placeholder="ingresa tu nuevo nombre">' +
          '</div>' +
          '<div class="form-group">' +
          '<label for="text">Cuidad:</label>' +
          '<input type="text" class="form-control" id="cuidad" name="cuidad" placeholder="Ingresa tu nueva cuidad">' +
          '</div>' ,
        showCancelButton: true,
        confirmButtonText: 'Modificar',
        cancelButtonText: 'Cancelar',
        showLoaderOnConfirm: true,
        buttonsStyling: false,
        customClass: {
          confirmButton: 'btn btn-dark me-4 mb-4',
          cancelButton: 'btn btn-danger me-4 mb-4',
        },
        preConfirm: () => {
          const nombre = Swal.getPopup().querySelector('#nombre').value;
          const correo = Swal.getPopup().querySelector('#cuidad').value;
          const userid=user.id;
          const newuser={nombre,correo}
          ModificarUser(newuser,userid)
          return { nombre: nombre, correo: correo };
        },
        allowOutsideClick: () => !Swal.isLoading(),
      }).then((result) => {
        if (result.isConfirmed) {
          console.log(result.value);
          Swal.fire({
            title: '¡Enviado!',
            text: 'Tu actualizacion de datos esta hecha.',
            icon: 'success',
            confirmButtonColor: '#343a40',
          });
        }
      });
    };
  return (
    <>
    
                <tr key={user.id}>
                  <th>{user.id}</th>
                  <th>{user.name}</th>
                  <th>{user.address.city}</th>
                  <th className='ali'> 
                    
                    <button type="button" className="del btn btn-dark mb-3"onClick={()=>deleteUser(user.id)}>eliminar </button>
                      <button type="button" className="del btn btn-dark mb-3 ms-2 me-4" onClick={()=>mostrarFormulario()} >modificar</button>
                    
                      
        
                    
                  </th>
                 
                </tr>
    </>
  )
}
