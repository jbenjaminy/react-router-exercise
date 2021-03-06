var React = require('react');
var Contact = require('./contact');
var CONTACTS = require('./contactlist-container').CONTACTS;

var ContactContainer = function(props) {
    var contact = CONTACTS[props.params.contactId];
    return <Contact id={contact.id} name={contact.name}
                    phoneNumber={contact.phoneNumber} />;
};

module.exports = ContactContainer;