class UploadedFile {
    constructor({ key, url }) {
      this.key = key; // S3 file key
      this.url = url; // S3 file URL
    }
  
    // Helper to check if the file is an image
    isImage() {
      return /\.(jpg|jpeg|png|gif)$/i.test(this.url);
    }
  
    // Helper to check if the file is a video
    isVideo() {
      return /\.(mp4|webm|mov)$/i.test(this.url);
    }
  }
  
  export default UploadedFile;
  