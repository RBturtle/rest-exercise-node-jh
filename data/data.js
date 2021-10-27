module.exports = {
    patient: [
        {"id": "1", "name": "John Bevins"},
        {"id": "2", "name": "John Smith"},
        {"id": "3", "name": "Jack Highland"}
    ],
    doctor: [
        {"id": "1", "name": "Eunotosaurus africanus - stout backed lizard"}, //changed name to turtle species
        {"id": "2", "name": "Odontochelys semitestacea - toothed turtle with a half shell"},
        {"id": "3", "name": "Proganochelys quenstedi - extinct, primitive stem turtle"},
        {"id": "4", "name": "Santanachelys gaffneyi -extinct, sea turtle"},
        {"id": "5", "name": "Archelon ischyros - first early turtle"},
        {"id": "6", "name": "Eretmochelys imbricata - harksbill sea turtle"},
        {"id": "7", "name": "Chelonia mydas - pacific green turtle"},
        {"id": "8", "name": "Lepidochelys olivacea -olive ridly sea turtle"},
        {"id": "9", "name": "Natator depressus - flat back sea turtle"},
        {"id": "10", "name": "Caretta caretta - loggerhead sea turtle"}
    ],
    visit: [
        {"id": "1", "patient_id": "1", "doctor_id": "1", "completed": "1"},
        {"id": "2", "patient_id": "1", "doctor_id": "4", "completed": "0"},
        {"id": "3", "patient_id": "1", "doctor_id": "9", "completed": "0"},
        {"id": "4", "patient_id": "2", "doctor_id": "2", "completed": "0"},
        {"id": "5", "patient_id": "2", "doctor_id": "10", "completed": "1"},
        {"id": "6", "patient_id": "2", "doctor_id": "7", "completed": "0"},
        {"id": "7", "patient_id": "3", "doctor_id": "3", "completed": "0"},
        {"id": "8", "patient_id": "3", "doctor_id": "4", "completed": "0"},
        {"id": "9", "patient_id": "3", "doctor_id": "1", "completed": "1"}
    ]
}