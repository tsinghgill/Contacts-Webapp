import { useForm } from 'react-hook-form';
// import Input from './Input';
import InputSpacer from './InputSpacer';

const FormError = ({ errorMessage }: any) => {
  return <p className="text-red-300 mt-1">{errorMessage}</p>;
};

interface AddContactFormProps {
  onSubmit: any;
}

export default function AddContactForm(props: AddContactFormProps) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  return (
    <form className="flex flex-col" onSubmit={handleSubmit(props.onSubmit)}>
      <InputSpacer>
        <input
          placeholder="First Name"
          {...register("firstName", { required: true })}
          name="firstName"
          className="rounded p-4 text-xl w-full"
        />
        {errors.firstName && (
          <FormError errorMessage="First Name is required" />
        )}
      </InputSpacer>
      <InputSpacer>
        <input
          placeholder="Last Name"
          {...register("lastName", { required: true })}
          name="lastName"
          className="rounded p-4 text-xl w-full"
        />
        {errors.lastName && <FormError errorMessage="Last Name is required" />}
      </InputSpacer>
      <InputSpacer>
        <input
          placeholder="Email"
          {...register("email", { required: true })}
          name="email"
          className="rounded p-4 text-xl w-full"
        />
        {errors.email && <FormError errorMessage="Email is required" />}
      </InputSpacer>
      <InputSpacer>
        <input
          placeholder="Address"
          {...register("address", { required: true })}
          name="address"
          className="rounded p-4 text-xl w-full"
        />
        {errors.address && <FormError errorMessage="Address is required" />}
      </InputSpacer>
      <InputSpacer>
        <input
          {...register("avatar", { required: true })}
          placeholder="Avatar"
          name="avatar"
          className="rounded p-4 text-xl w-full"
        />
        {errors.avatar && <FormError errorMessage="Avatar is required" />}
      </InputSpacer>

      <button
        className="bg-blue-500 rounded-md p-4 text-blue-100"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}
