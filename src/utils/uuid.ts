const generateUUID = () => {
  // It should generate number uuid with max 8 characters
  return Math.floor(Math.random() * 100000000)
}

export { generateUUID }
