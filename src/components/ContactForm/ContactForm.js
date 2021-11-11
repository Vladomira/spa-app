// import { useState } from "react";
import PropTypes from "prop-types";
import { Formik, Form, Field, ErrorMessage } from "formik";
// import InputMask from "react-input-mask";
// import MaterialInput from '@material-ui/core/Input';

import * as Yup from "yup";

///
function ContactForm({ onSubmit }) {
  // const [phone, setPhone] = useState("");
  // const [password, setPassword] = useState("");

  // const handleChange = (e) => {
  //   const { name, value } = e.currentTarget;
  //   switch (name) {
  //     case "phone":
  //       setPhone(value);
  //       break;

  //     case "password":
  //       setPassword(value);
  //       break;
  //     default:
  //       return;
  //   }
  // };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     onSubmit(name, number); // отпарвка данных

  //     reset(); // очищение формы
  //   };

  //   const reset = () => {
  //     setName("");
  //     setNumber("");
  //   };
  return (
    <Formik
      initialValues={{ number: "", password: "" }}
      validationSchema={Yup.object({
        email: Yup.number().min(9).max(9).required("Поле обязательное"),
        password: Yup.string()
          .min(8, "Введите минимум 8 символов")
          .max(24, "Максимум 24 символов")
          .required("Поле обязательное"),
      })}
      onSubmit={async (values, { setSubmitting }) => {
        await new Promise((resolve) => setTimeout(() => resolve(""), 2000));
        console.log(values);
        setSubmitting(false); // setTimeout(() => {
        //   alert(JSON.stringify(values, null, 2));
        //   setSubmitting(false);
        // }, 400);
      }}
    >
      <Form autoComplete="off">
        {/* <InputMask
          mask="+3\80 99 999 99 99"
          maskChar=" "
          type="tel"
          name="number"
        /> */}

        <Field type="tel" name="number" />
        <ErrorMessage
          name="number"
          //  component="div"
        />
        <Field type="password" name="password" />
        <ErrorMessage
          name="password"
          // component="div"
        />
        <button
          type="submit"
          // disabled={isSubmitting}
        >
          Submit
        </button>
      </Form>
    </Formik>
  );
}
ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};
export default ContactForm;
// validate={(values) => {
//   const errors = {};
//   if (!values.phone) {
//     errors.phone = "Required";
//   } else if (
//     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
//     //  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//   ) {
//     errors.email = "Invalid phone number";
//   }
//   if (!values.password) {
//     errors.password = "Required";
//   }
//   return errors;
// }}
// Sceme
// validationSchema={Yup.object({
//   email: Yup.string()
//     .email("Iinvalid phone number")
//     .requierd("Поле обязательное"),
//   password: Yup.string()
//     .min(8, "Введите минимум 8 символов")
//     .max(24, "Паксимум 24 символов")
//     .requierd("Поле обязательное"),
// })}
// ++++++
// validate={(values) => {
//   const errors = {};
//   if (!values.email) {
//     errors.email = "Required";
//   } else if (
//     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
//   ) {
//     errors.email = "Invalid email address";
//   }
//   if (!values.password) {
//     errors.password = "Required";
//   }
//   return errors;
// }}
// <form
//   className="form__box"
//   // onSubmit={handleSubmit}
// >
//  {/* <label htmlFor="userPhone" className="form__label-box">
//     <span className="form__label"> Pnone</span>
//     <input
//       className="form__input"
//       placeholder="please, type your phone number"
//       value={phone}
//       onChange={handleChange}
//       id="userPhone"
//       type="phone"
//       name="phone"
//       data-action="phone"
//       pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//       title="Номер телефона должен состоять из цифр, и может содержать пробелы, тире, круглые скобки, и может начинаться с +"
//       required
//     />
//   </label>

//   <label htmlFor="userPassword">
//     <span className="form__label"> Password</span>
//     <input
//       className="form__input"
//       onChange={handleChange}
//       id="userPassword"
//       value={password}
//       type="password"
//       name="parol"
//       data-action="parol"
//       // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//       // title="Номер телефона должен состоять из цифр, и может содержать пробелы, тире, круглые скобки, и может начинаться с +"
//       required
//     />
//   </label>

//   <div className="form__btn-thumb">
//     <button
//       className="form__addBtn"
//       type="submit"
//       disabled={!phone || !password}
//     >
//       Add contact
//     </button>
//   </div> */}
// // </form>

// .....
// <form onSubmit={handleSubmit}>
//   <input
//     type="tel"
//     name="tel"
//     onChange={handleChange}
//     onBlur={handleBlur}
//     value={values.email}
//   />
//   {errors.email && touched.email && errors.email}
//   <input
//     type="password"
//     name="password"
//     onChange={handleChange}
//     onBlur={handleBlur}
//     value={values.password}
//   />
//   {errors.password && touched.password && errors.password}
//   <button type="submit" disabled={isSubmitting}>
//     Submit
//   </button>
// </form>
