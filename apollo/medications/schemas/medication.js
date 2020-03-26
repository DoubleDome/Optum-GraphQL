module.exports = `
  type Medication {
    id: ID!
    name: String
    dosage: String
    price: String
    savingsAmount: Float
    supplyAmount: Int
    refillDate: String
    autoRefill: String
    refillCount: String
  }
`;
