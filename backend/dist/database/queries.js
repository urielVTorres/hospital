"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queries = void 0;
var queries = {
  getAllPatients: "SELECT * FROM Paciente",
  registerNewPatient: 'INSERT INTO Paciente (CURP, firstname, f_lastname, m_lastname, gender, birthday, NSS, street, number, state, CP, phone, email) VALUES (@CURP, @firstname, @f_lastname, @m_lastname, @gender, @birthday, @NSS, @street, @number, @state, @CP, @phone, @email)',
  getPatientByCURP: 'SELECT * FROM Paciente Where CURP = @CURP',
  deletePatient: 'DELETE FROM [hospital].[dbo].[Paciente] WHERE CURP = @CURP',
  getTotalPatients: 'SELECT COUNT(*) FROM Paciente',
  updatePatientById: 'UPDATE Paciente SET CURP = @CURP, firstname = @firstname, f_lastname = @f_lastname, m_lastname = @m_lastname, gender = @gender, birthday = @birthday, NSS = @NSS, street = @street, number = @number, state = @state, CP = @CP, phone=@phone, email=@email, alergies=@alergies, symptoms=@symptoms, medicines=@medicines, area=@area, status=@status, floor=@floor, room=@room, bed=@bed WHERE id_patient=@id_patient'
};
exports.queries = queries;