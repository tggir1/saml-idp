
/**
 * User Profile
 */
var profile = {
  userName: 'saml.jackson@example.com',
  nameIdFormat: 'urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress',
  first_name: 'Saml',
  last_name: 'Jackson',
  email: 'saml.jackson@example.com',
}

/**
 * SAML Attribute Metadata
 */
var metadata = [{
  id: "first_name",
  optional: false,
  displayName: 'First Name',
  description: 'The given name of the user',
  multiValue: false
}, {
  id: "last_name",
  optional: false,
  displayName: 'Last Name',
  description: 'The surname of the user',
  multiValue: false
}, {
  id: "email",
  optional: false,
  displayName: 'E-Mail Address',
  description: 'The e-mail address of the user',
  multiValue: false
}];

module.exports = {
  user: profile,
  metadata: metadata
}
