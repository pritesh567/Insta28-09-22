import React, { Component } from 'react';
// import AmazingCropper from 'react-native-amazing-cropper';
// import CustomCropperFooter from './src/components/CustomCropperFooter.component';

class Imagecrop extends Component {
  onDone = (croppedImageUri) => {
    console.log('croppedImageUri = ');
    // send image to server for example
  }

  onError = (err) => {
    console.log(err);
  }

  onCancel = () => {
    console.log('Cancel button was pressed');
    // navigate back
  }

  render() {
    return (
      <AmazingCropper
        // Use your custom footer component
        // Do NOT pass onDone, onRotate and onCancel to the footer component, the Cropper will do it for you
        // footerComponent={<CustomCropperFooter />}
        onDone={this.onDone}    
        onError={this.onError}
        onCancel={this.onCancel}
        imageUri='https://www.lifeofpix.com/wp-content/uploads/2018/09/manhattan_-11-1600x2396.jpg'
        imageWidth={2040}
        imageHeight={2396}
      />
    );
  }
}

export default Imagecrop;