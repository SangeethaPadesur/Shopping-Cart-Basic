class FieldValidations {

    /**
     * Validating input for proper email format and returns boolean
     * @param {*} value 
     */
    static IsValidEmail(value) {
      let emailRegx = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i
      if (emailRegx.test(value)) {
        return true;
      }
      else {
        return false;
      }
    }
}
export default FieldValidations