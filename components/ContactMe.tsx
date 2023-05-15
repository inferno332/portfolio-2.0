import React from "react";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {};
type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:bhuynhcongkhoa@gmail.com?subject=${formData.subject}&body=Hi, my name is${formData.name}. ${formData.message} (${formData.email})`;
  };
  return (
    <div className='relative mx-auto flex h-screen max-w-7xl flex-col items-center justify-evenly px-10 text-center md:flex-row md:text-left'>
      <h3 className='absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500'>
        Contact
      </h3>

      <div className='flex flex-col space-y-10'>
        <h4 className='text-center text-4xl font-semibold'>
          I have got just what you need.{" "}
          <span className='underline decoration-[#F7AB0A]/50'>Lets Talk.</span>
        </h4>

        <div className='mx-auto space-y-10'>
          <div className='flex items-center space-x-5'>
            <PhoneIcon className='h-7 w-7 animate-pulse text-[#F7AB0A]' />
            <p>+84 793710737</p>
          </div>

          <div className='flex items-center space-x-5'>
            <EnvelopeIcon className='h-7 w-7 animate-pulse text-[#F7AB0A]' />
            <p>bhuynhcongkhoa@gmail.com</p>
          </div>

          <div className='flex items-center space-x-5'>
            <MapPinIcon className='h-7 w-7 animate-pulse text-[#F7AB0A]' />
            <p>Danang, Vietnam</p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='mx-auto flex w-fit flex-col space-y-2'
        >
          <div className='flex space-x-2'>
            <input
              {...register("name")}
              placeholder='Name'
              className='contactInput'
              type='text'
            />
            <input
              {...register("email")}
              placeholder='Email'
              className='contactInput'
              type='email'
            />
          </div>
          <input
            {...register("subject")}
            placeholder='Subject'
            className='contactInput'
            type='text'
          />
          <textarea
            {...register("message")}
            placeholder='Message'
            className='contactInput'
          />
          <button
            type='submit'
            className='rounded-md bg-[#F7AB0A] px-10 py-5 text-lg font-bold text-black'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
