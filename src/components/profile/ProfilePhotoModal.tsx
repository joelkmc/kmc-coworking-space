import React, { useState } from 'react'
import { Upload, message, Avatar } from 'antd'
import { LoadingOutlined, PlusOutlined, UserOutlined } from '@ant-design/icons';
import ImgCrop from 'antd-img-crop';
import { ButtonType } from '../../utils/ButtonType';

interface ProfilePhotoModalProps {
  className?: string;
}

export const ProfilePhotoModal: React.FC<ProfilePhotoModalProps> = ({ className }) => {

  const [imgLoadingState, setImgLoadingState] = useState({
    loading: false,
    imgUrl: undefined
  });

  const getBase64 = (img:Blob, callback:(imageUrl: any) => void) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img)
  }

  const beforeUpload = (file:any) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  }

  const { imgUrl, loading } = imgLoadingState

  const handleImageChange = (info:any) => {
    console.log(info)
    if (info.file.status === 'uploading') {
      setImgLoadingState({...imgLoadingState, loading: true})
    }
    if (info.file.status === 'done' || info.file.status === 'error') {
      getBase64(info.file.originFileObj, imgUrl => {
        setImgLoadingState({
          loading: false,
          imgUrl
        })
      })
    }
  }

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined style={{ width: '160px', height: '160px', fontSize: 60 }} /> : (
        <div className="flex flex-col items-center justify-center h-full">
          <Avatar size={ 160 } icon={ <UserOutlined /> } shape='square' />
          <ButtonType buttonType='link' text='Edit Profile Photo' buttonClass='font-proxiSemiBold mt-3' />
        </div>
        )}
    </div>
  )
  

  return (
    <ImgCrop>
      <Upload 
        style={{ height: '200px' }}
        name='Profile' 
        className="avatar-uploader flex justify-center" 
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76" 
        onChange={ handleImageChange }
        listType='picture'
        showUploadList={false}
        beforeUpload={ beforeUpload }
      >
        { imgUrl ? <img src={ imgUrl } alt='Profile' style={{ width: '160px', height: '160px' }} className='rounded' /> : uploadButton }
      </Upload>
    </ImgCrop>
  );
}