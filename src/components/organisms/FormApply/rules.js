const isRequired = value => (!value ? 'Required Field.' : '')
const isEmail = value => {
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return regex.test(value) ? '' : 'Invalid e-mail.'
}
const isTelephone = value => {
  const regex = /^((?:\+|00)[17](?: |-)?|(?:\+|00)[1-9]\d{0,2}(?: |-)?|(?:\+|00)1-\d{3}(?: |-)?)?(0\d|\([0-9]{3}\)|[1-9]{0,3})(?:((?: |-)[0-9]{2}){4}|((?:[0-9]{2}){4})|((?: |-)[0-9]{3}(?: |-)[0-9]{4})|([0-9]{7}))$/
  return regex.test(value) ? '' : 'Invalid telephone.'
}

const isDocument = value =>
  /\.(pdf|doc|docx)$/i.test(value)
    ? ''
    : 'Invalid document. Accepted (pdf|doc|docx)'

const maxLength = max => value =>
  value.length >= max ? `Must be a ${max} characters` : ''

export { isRequired, isEmail, isTelephone, isDocument, maxLength }
