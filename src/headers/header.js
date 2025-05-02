export const header = {
    'Cookie' : 'sails.sid=s%3AgMkOWY0j2sPIUZB0pd7bKrZADrNUHcoH.qkJdCNXwly0S5WWLQASVfmVs4g0n29U4Gy%2BflaptULs',
}

export function headerToken(token) {
    return {
        'Accept' : 'application/json',
        'Authorization' : token
    }
}

export const headerPost = {
    'Content-Type':'application/json',
    'Cookie':'sails.sid=s%3AKyzlkTJ4wtf6dEwfPFohpV2SD77Afzar.3SPCHz6sjdSu1rob6UUN7SiI%2BLNs%2BmeIYHnqD6lNVNk'
}