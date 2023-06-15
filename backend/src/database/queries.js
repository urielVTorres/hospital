
export const queries = {
//Pacientes
getAllPatients: "SELECT * FROM Paciente",
getCitas: "SELECT * FROM VW_consultar_citas",
registerNewPatient: 'INSERT INTO Paciente (Ap_PaternoP, Ap_MaternoP,NombreP, CURP,FechaNac, Colonia, Calle, Numero, TelefonoP, CorreoP,Edad, Estado, Municipio, CP, Id_Usuario_Paciente) VALUES (@paterno,@materno, @nombre, @CURP, @fechaNac, @colonia, @calle, @numero, @telefono, @correo, @edad, @estado, @municipio, @CP, (SELECT Id_Usuario FROM usuario WHERE correo = @correo))',
    
    
    getPatientByCURP: 'SELECT * FROM Paciente Where CURP = @CURP',
    deletePatient: 'DELETE FROM [hospital].[dbo].[Paciente] WHERE CURP = @CURP',
    getTotalPatients: 'SELECT COUNT(*) FROM Paciente',
    updatePatientById: 'UPDATE Paciente SET CURP = @CURP, firstname = @firstname, f_lastname = @f_lastname, m_lastname = @m_lastname, gender = @gender, birthday = @birthday, NSS = @NSS, street = @street, number = @number, state = @state, CP = @CP, phone=@phone, email=@email, alergies=@alergies, symptoms=@symptoms, medicines=@medicines, area=@area, status=@status, floor=@floor, room=@room, bed=@bed WHERE id_patient=@id_patient',
//Clinica turnos    
    getAllTurnos: "SELECT * FROM TurnoHospital",
    agregarTurno: "INSERT INTO TurnoHospital (Turno) VALUES (@turno)",
    eliminarTurno: "DELETE FROM TurnoHospital WHERE ID_Turno = @id",
    editarTurno: "UPDATE TurnoHospital SET Turno = @turno WHERE ID_Turno = @id",
//Clinica Departamentos (Areas del hospital)
    getAllDepartamentos: "SELECT * FROM Area ORDER BY 1",
    agregarDepartamento: "INSERT INTO Area (Area) VALUES (@departamento)",
    eliminarDepartamento: "DELETE FROM Area WHERE ID_Area = @id",
    editarDepartamento: "UPDATE Area SET Area = @departamento WHERE ID_Area = @id",
//Clinica Especialidades (Especialidad del doctor)
    getAllEspecialidades: "SELECT * FROM Especialidad ORDER BY 1",
    agregarEspecialidad: "INSERT INTO Especialidad (NombreEspecialidad) VALUES (@especialidad)",
    eliminarEspecialidad: "DELETE FROM Especialidad WHERE ID_Area = @id",
    editarEspecialidad: "UPDATE Especialidad SET NombreEspecialidad = @especialidad WHERE ID_Especialidad = @id",

//Agregar Usuario
    agregarUsuario: "INSERT INTO usuario (contraseña, correo, ID_Tipo_Usuario) VALUES (@password, @email, @tipo_usuario)"

}