
export const queries = {
//Pacientes
    getAllPatients: "SELECT * FROM Paciente",
    registerNewPatient: 'INSERT INTO Paciente (CURP, firstname, f_lastname, m_lastname, gender, birthday, NSS, street, number, state, CP, phone, email) VALUES (@CURP, @firstname, @f_lastname, @m_lastname, @gender, @birthday, @NSS, @street, @number, @state, @CP, @phone, @email)',
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
    editarEspecialidad: "UPDATE Especialidad SET NombreEspecialidad = @especialidad WHERE ID_Especialidad = @id"

}