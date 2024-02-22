import  {pool} from '../db.js'
//===============================================================================
//export const getEmployees   = (req, res) => res.send('Obteniendo Empleados')
export const getEmployees   = async (req, res) => {
// throw new Error ('My Error') // Simular un error para ver que pasa
try {
//    throw new Error('DBError')
    const [rows]  =  await pool.query ( 'SELECT * FROM employee') 
    res.json(rows)
} catch (error) {
  return res.status(500).json ({
    message: "Algo Salio mal al consultar"
  })  
}


}

//=================1solo empleado=================================================
//export const getEmployees   = (req, res) => res.send('Obteniendo Empleados')
export const getEmployee   =  async (req, res) => {
try {
//    throw new Error('DBError')
    const [rows] =  await pool.query(' SELECT * FROM employee WHERE id = ?', [req.params.id])
    //  console.log(rows)
   if (rows.length <= 0) return res.status(404).json ({
       message: ' Empleado no encontrado'
   }) 
   res.json(rows[0])
   // res.send(' Obteniendo un empleado')
} catch (error) {
    return res.status(500).json ({
        message: 'Algo salio mal al consulta 1 empleado'
    })
}
}

//=================================================================================
// export const createEmployee = (req, res) => res.send('Creando Empleados - Bien')
export const createEmployee = async  (req, res) => {
try {
//    throw new Error('DBError')
    const { name, salary } = req.body   
const [rows] =  await  pool.query ( 'INSERT INTO employee (name, salary) VALUES (?,?)',
 [name, salary] )
// console.log (req.body)  // se envia desde THUNDER los datos en json
// res.send ({ rows})
res.send ({ 
    id: rows.insertId,
    name,
    salary
})  
} catch (error) {
    return res.status(500).json ({
        message: 'Algo salio mal creando empleado'
    })
}
}


//================================DELETE=====================

export const deleteEmployee = async (req, res) => {
try {
//    throw new Error('DBError')    
    const [result] = await pool.query( 'DELETE FROM employee WHERE id = ?', [ req.params.id] )
    if (result.affectedRows <= 0 ) return res.status(404).json ({
        message: 'Empleado no existe'
    })
 //   console.log(result)
 //   res.send(' Empleado Borrado')
      res.sendStatus(204)    
} catch (error) {
    return res.status(500).json ({
        message: 'Algo salio mal borrando empleado'
    })
}
}

//==========================ACTUALIZAR=========================================================

// export const updateEmployee = (req, res) => res.send('Actualizando Empleados')
export const updateEmployee = async (req, res) => {
    const {id} = req.params
    const {name, salary} = req.body
try {
  //  throw new Error('DBError')       
// este se quito para usar PACTH    const [ result] = await pool.query('UPDATE employee SET name = ?, salary = ? WHERE id = ?' , [name, salary, id] )
const [ result] = await pool.query('UPDATE employee SET name = IFNULL (?, name),  salary = IFNULL (?, salary)  WHERE id = ?' , [name, salary, id] )

if ( result.affectedRows === 0) return res.status(404).json ({
    message: 'Empleado NO encontrado'
})

// para saber lo que actualizo hacemos un select para que se vea lo que actualizo
const [rows] = await pool.query( 'SELECT * FROM employee WHERE id = ?', [id] )
//  console.log (id, name, salary)
//    console.log (result)
//  res.json(rows)   Esta forma envia el arreglo compleo asi : ( { ..... })
res.json(rows[0]) // forma 2 , primer elemento asi : { .....}   sin el primer corchete    
} catch (error) {
    return res.status(500).json ({
        message: 'Algo salio mal actualizando'
    })
}
}



