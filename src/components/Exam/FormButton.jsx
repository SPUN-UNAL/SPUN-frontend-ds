const FormButton = (props) => {
  return (
    <button
      className={`inline-flex w-full justify-center rounded-md 
      bg-emerald-600 hover:bg-emerald-500 font-semibold text-gray-100 hover:text-white  my-4 py-2
      shadow-lg
      sm:text-md
      tracking-wide

      ${props.extraClassNames} 
      `}
      {...props}
    >
      {props.children}
    </button>
  );
};

export default FormButton;
