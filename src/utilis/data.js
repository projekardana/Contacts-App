let contacts = [
        {
            id: 1,
            name: 'Muhammad Dendi Ardana',
            tag: 'mdendiardana',
            imageUrl: '/public/images/mdendiardana.jpg',
        },
        {
            id: 2,
            name: 'Arif Faizin',
            tag: 'arifaizin',
            imageUrl: '/public/images/arifaizin.jpeg',
        },
        {
            id: 3,
            name: 'Rahmat Fajri',
            tag: 'rfajri27',
            imageUrl: '/public/images/rfajri27.jpeg'
        },
    ]

    function getContacts() {
        return contacts;
    }

    function addContact(contact) {
        contacts = [...contacts, { id: +new Date(), imageUrl: '/public/images/default.jpg', ...contact }];
    }

    function deleteContact(id) {
        contacts = contacts.filter((contact) => contact.id !== id);
    }

export { getContacts, addContact, deleteContact };