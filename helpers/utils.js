export const convertMilliseconds = (milliseconds) => {
    // convert to this format hours:minutes:seconds
    const date = new Date(milliseconds);
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const seconds = date.getUTCSeconds();
    
    if (hours > 0) {
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    } else if( minutes > 0 ) {
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    } else if( seconds > 0 ) {
        return `0:${seconds.toString().padStart(2, '0')}`;
    } else {
        return '0:00';
    }
};

export const getRandomTrackId = (currentTrackId) => {
    // generate a random id from 1 to 114 without the current track id
    let randomId = Math.floor(Math.random() * 114) + 1;
    if (randomId === currentTrackId) {
        return getRandomTrackId(currentTrackId);
    }
    return randomId;
};

export const getNextTrackId = (currentTrackId) => {
    if (Number(currentTrackId) === 114) {
        return 1;
    }
    return Number(currentTrackId) + 1;
};

export const getPreviousTrackId = (currentTrackId) => {
    if (Number(currentTrackId) === 1) {
        return 114;
    }
    return Number(currentTrackId) - 1;
};