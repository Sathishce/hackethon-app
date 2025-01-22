class RekognitionResult {
    constructor({ Name, Confidence }) {
      this.name = Name; // Label name from Rekognition
      this.confidence = Confidence; // Confidence score
    }
  
    // Helper method to format the confidence value
    getFormattedConfidence() {
      return `${this.confidence.toFixed(2)}%`;
    }
  }
  
  export default RekognitionResult;
  