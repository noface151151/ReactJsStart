import axios from 'axios';

const CLOUDINARY_UPLOAD_PRESET='rm5cugae';
const  CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/productimage/image/upload'

function dataURLtoFile(dataurl) {
    var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], Math.random(), {type:mime});
}
const handleUpload = (ImageArray) => {
    //     const formData = new FormData();
    //     var file =dataURLtoFile(base64Url);
    //     formData.append('file', file);
    //     formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
    //    return axios.post(CLOUDINARY_UPLOAD_URL,formData)      
    const formData = new FormData();
    return ImageArray.map(entity => new Promise((resolve, reject) => {
        formData.append('file', dataURLtoFile(entity.data.src));
        formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
        axios.post(CLOUDINARY_UPLOAD_URL, formData).then(resp => {
                entity.data.src = resp.data.secure_url;
                resolve(entity)
            })
            .catch(error => {
                reject(error)
            })
    }))
}

  export default handleUpload;