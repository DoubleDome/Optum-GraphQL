module.exports = `
  extend type User @key(fields: "id") {
    id: ID! @external
    medications(type: String): [Medication]
    activeMedications: [Medication]
    retailMedications: [Medication]
  }
`;
