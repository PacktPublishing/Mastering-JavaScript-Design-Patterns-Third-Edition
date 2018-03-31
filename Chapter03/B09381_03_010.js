export const getNextAccountId = (accounts) => {
    return accounts.length === 0 ? '0000000000000000' : accounts.slice(-1).accountId + 1;
};

export const getIban = (data) => {
    return data.countryCode + data.checkDigits + 
           data.bankIdentifier + data.branchIdentifier + data.accountId;
}

export const formatIban = (iban) => iban.match(/.{1,4}/g).join(' ');

export const getNewAccount = (bankData, accounts) => {
    let accountId = getNextAccountId(accounts);

    let ibanFormatted = formatIban(getIban({
                            countryCode: bankData.countryCode,
                            checkDigits: bankData.checkDigits,
                            bankIdentifier: bankData.bankIdentifier,
                            branchIdentifier: bankData.branchIdentifier,
                            accountId
                        }));
    
    return {
        accountId,
        ibanFormatted
    };
};