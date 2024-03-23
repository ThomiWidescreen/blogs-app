import { createOne } from '@/api/messages';
import { FormSchema, Message } from '@/global.types';
import React, { useState } from 'react';

const FormComponent = ({ formSchema }: { formSchema: FormSchema }) => {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, fieldName: string) => {
    setFormData({
      ...formData,
      [fieldName]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newMessageData: Partial<Message> = {
      ...formData,
      originPost: window.location.pathname.replace("/", "")
    }
    setIsLoading(true)
    createOne(newMessageData as Message).then(() => {
      setIsLoading(false)
      alert("Mensaje enviado!")
      setFormData({})
    })
  };

  return (
    <form className='flex flex-col gap-5 mt-5' onSubmit={handleSubmit}>
      {Object.keys(formSchema).map((fieldName) => (
        <div className="flex flex-col gap-1" key={fieldName}>
          <label className='font-semibold' htmlFor={fieldName}>{formSchema[fieldName].label}</label>
          {formSchema[fieldName].type === 'textarea' ? (
            <textarea
              className='p-2 rounded-[4px] border border-gray-400'
              id={fieldName}
              name={fieldName}
              placeholder={formSchema[fieldName].placeholder}
              value={formData[fieldName] || ''}
              onChange={(e) => handleChange(e, fieldName)}
            />
          ) : (
            <input
              className='p-2 rounded-[4px] border border-gray-400'
              type={formSchema[fieldName].type}
              id={fieldName}
              name={fieldName}
              placeholder={formSchema[fieldName].placeholder}
              value={formData[fieldName] || ''}
              onChange={(e) => handleChange(e, fieldName)}
            />
          )}
          {formData[fieldName] && !formSchema[fieldName].regex?.test(formData[fieldName]) && (
            <span className='text-red-600 text-sm'>{formSchema[fieldName].errorMessage}</span>
          )}
        </div>
      ))}
      <button disabled={isLoading} className='text-white px-6 py-2 bg-[#2d2d2d] hover:invert transition-all' type="submit">{isLoading ? "Loading" : "Submit"}</button>
    </form>
  );
};

export default FormComponent;