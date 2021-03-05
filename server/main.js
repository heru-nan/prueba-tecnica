import { Meteor } from 'meteor/meteor';
import { MedicCollections } from '../imports/api/MedicCollections';

const insertMedic = obj => MedicCollections.insert(obj);

Meteor.startup(() => {
  if (MedicCollections.find({}).count() === 0){
    [
      {
        nombres: "Sir",
        apellidoPaterno: "William",
        apellidoMaterno: "Oster",
        rut: "111111111",
        especialidad: "Cirugía General.",
        createdAt: new Date(),
      }
    ].forEach(insertMedic);
  }
  
});
