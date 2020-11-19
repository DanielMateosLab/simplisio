import React from "react"
import { Link, makeStyles, Typography } from "@material-ui/core"
import { Formik } from "formik"
import { useRouter } from "next/router"
import FormikTextInput from "../clientShared/FormikTextInput"
import { signUpFormValidationSchema } from "../clientShared/Validation"

export const signupComponentTitle =
  "¡Buena elección! Para comenzar solo necesitamos..."
export const emailInputText = "Tu email"
export const passwordInputText = "Una contraseña"
export const repeatPasswordInputText = "Que repitas tu contraseña"
export const submitButtonText = "¡Dale candela!"

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(1),
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  formElement: {
    marginTop: theme.spacing(1),
  },
}))

const Signup = () => {
  const classes = useStyles()
  const router = useRouter()

  function handleLoginPageLink(e: React.MouseEvent<HTMLSpanElement>) {
    e.preventDefault()
    router.push("/login")
  }

  return (
    <div className={classes.container}>
      <Typography variant="h6" component="h2" align="center" gutterBottom>
        {signupComponentTitle}
      </Typography>
      <Formik
        initialValues={{
          email: "",
          password: "",
          repeatPassword: "",
        }}
        validationSchema={signUpFormValidationSchema}
        onSubmit={(values) => console.log(values)}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit} className={classes.form}>
            <div className={classes.formElement}>
              <FormikTextInput
                name="email"
                label={emailInputText}
                type="email"
              />
            </div>
            <div className={classes.formElement}>
              <FormikTextInput
                name="password"
                label={passwordInputText}
                type="password"
              />
            </div>
            <div className={classes.formElement}>
              <FormikTextInput
                name="repeatPassword"
                label={repeatPasswordInputText}
                type="password"
              />
            </div>
            <div className={classes.formElement}>
              <button type="submit"> {submitButtonText} </button>
              <Typography variant="body2">
                ¿Ya tienes cuenta?{" "}
                <Link href="#" onClick={handleLoginPageLink}>
                  Inicia sesión
                </Link>
              </Typography>
            </div>
          </form>
        )}
      </Formik>
    </div>
  )
}

export default Signup
