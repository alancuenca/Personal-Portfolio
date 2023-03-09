export const saveContact = () => {
    const contact = {
        name: {
            givenName: 'Alan',
            familyName: 'Cuenca',
        },
        email: [
            {
                type: 'home',
                value: 'alan.r.cuenca@gmail.com',
            },
        ],
        phone: [
            {
                type: 'mobile',
                value: '+18053548830',
            },
        ],
    };

    const vcardContent = `BEGIN:VCARD
VERSION:3.0
N:${contact.name.familyName};${contact.name.givenName};;;
FN:${contact.name.givenName} ${contact.name.familyName}
EMAIL;TYPE=HOME:${contact.email[0].value}
TEL;TYPE=CELL:${contact.phone[0].value}
END:VCARD`;

    if (navigator.contacts && navigator.contacts.save) {
        navigator.contacts.save(contact)
            .then(() => console.log('Contact saved'))
            .catch((error) => console.log('Error saving contact', error));
    } else {
        // Fallback
        const blob = new Blob([vcardContent], { type: 'text/vcard' });
        const url = URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = url;
        link.download = 'Alan Cuenca.vcf';
        link.click();
    }
};