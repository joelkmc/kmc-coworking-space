import { Form, Input } from 'antd';
import React from 'react';
import { useInputState } from '../../hooks/useInputState';
import { ButtonType } from '../../utils/ButtonType';


export const AddSeatForm: React.FC = () => {

  const { value:firstname, bindToInput:bindFirstname } = useInputState('');
  const { value:lastname, bindToInput:bindLastname } = useInputState('');
  const { value:email, bindToInput:bindEmail } = useInputState('');
  const { value:contactNum, bindToInput:bindContactNum } = useInputState('');
  const { value:position, bindToInput:bindPosition } = useInputState('');

  console.log(`
    firstname: ${firstname}
    lastname: ${lastname}
    email: ${email}
    contactNum: ${contactNum}
    position: ${position}
  `)

  return (
    <Form>
      <div className='w-full flex flex-wrap mt-4'>
        <Form.Item className='w-full mb-3 md:mb-4 lg:mb-5 antdSm:w-1/2 antdLg:w-1/5 px-1 antdLg:px-0'>
          <Input name='firstname' placeholder='First Name'className='rounded-none' {...bindFirstname} />
        </Form.Item>
        <Form.Item  className='w-full mb-3 md:mb-4 lg:mb-5 antdSm:w-1/2 antdLg:w-1/5 px-1 antdLg:px-0'>
          <Input name='lastname' placeholder='Last Name' className='rounded-none' {...bindLastname} />
        </Form.Item>
        <Form.Item  className='w-full mb-3 md:mb-4 lg:mb-5 antdSm:w-1/2 antdLg:w-1/5 px-1 antdLg:px-0'>
          <Input name='email' placeholder='Email Address' className='rounded-none' {...bindEmail} />
        </Form.Item>
        <Form.Item  className='w-full mb-3 md:mb-4 lg:mb-5 antdSm:w-1/2 antdLg:w-1/5 px-1 antdLg:px-0'>
          <Input name='contactNum' placeholder='Contact No.' className='rounded-none' {...bindContactNum} />
        </Form.Item>
        <Form.Item  className='w-full mb-3 md:mb-4 lg:mb-5 antdSm:w-1/2 antdLg:w-1/5 px-1 antdLg:px-0'>
          <Input name='position' placeholder='Position' className='rounded-none' {...bindPosition} />
        </Form.Item>
        <Form.Item  className='w-full my-0'>
          <ButtonType buttonType='primary' text='Add Seat Owner' buttonClass='w-full antdLg:w-auto' />
        </Form.Item>
      </div>
    </Form>
  );
}