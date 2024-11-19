// /* eslint-disable react/prop-types */
// /* eslint-disable no-undef */
// /* eslint-disable no-unsafe-optional-chaining */

// const Field = ({label, children, htmlFor, error}) => {


//   const getChildId = (children) => {
//     const child = React.Children.only(children);

//     if("id" in child?.props){
//       return child.props.id;
//     }
//   };

//   const id = htmlFor || getChildId(children);

//   return (
//     <div className="form-control">
//       {label && <label htmlFor={id} className="auth-label">{label}</label>}
//       {children}
//       {!!error && (
//         <div role="alert" className="text-red-600">
//           {error.message}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Field

/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Field = ({ label, children, htmlFor, error }) => {
  const getChildId = (children) => {
    try {
      const child = React.Children.only(children);
      return child.props?.id || undefined;
    } catch (error) {
      console.warn("Field component expects a single child.");
      return undefined;
    }
  };

  const id = htmlFor || getChildId(children);

  return (
    <div className='flex flex-col items-start justify-start mt-2 p-0 w-full mr-2'>
      {label && <label htmlFor={id} className='mb-1'>{label}</label>}
      {children}
      {!!error && <div className='text-red-500 text-sm mt-1'>{error.message}</div>}
    </div>
  );
};

export default Field;