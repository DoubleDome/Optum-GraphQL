const handlers = {
  medication: require('../handlers/medication')
};

module.exports = {
  User: {
    medications: handlers.medication.fetchMedications,
    activeMedications: handlers.medication.fetchActiveMedicatons,
    retailMedications: handlers.medication.fetchRetailMedicatons
  }
};
