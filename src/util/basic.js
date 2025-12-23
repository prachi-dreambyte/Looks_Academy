import Cookies from "js-cookie";

const createExcerpt = (description, length, suffix = '...') => {
    if (!description || description.length <= length) {
        return description || '';
    }

    const trimmedDescription = description.trim();
    const trimmedString = trimmedDescription.substring(0, length);
    const lastSpaceIndex = trimmedString.lastIndexOf(' ');

    if (lastSpaceIndex > 0) {
        return trimmedString.substring(0, lastSpaceIndex) + suffix;
    } else {
        return trimmedString + suffix;
    }
};

export default createExcerpt;