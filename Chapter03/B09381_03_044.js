const createEmailCreator = (domain) => {
    return (username) => `${username}@${domain}`;
};

const createGmailAccounts = createEmailCreator('gmail.com');
const createHotmailAccounts = createEmailCreator('hotmail.com');

createGmailAccounts('john_doe'); // john_doe@gmail.com
createGmailAccounts('jane_doe'); // jane_doe@gmail.com

createHotmailAccounts('jimmy_santillana'); // jimmy_santillana@hotmail.com
createHotmailAccounts('gerard_picard'); // gerard_piccard@hotmail.com