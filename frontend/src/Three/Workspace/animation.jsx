export const CAMERA_STATES = {
    INTRO: "intro",
    ENTERING: "entering",
    SITTING: "sitting",
    FIRST_PERSON: "firstPerson",
    FOCUSING: "focusing",
    RETURNING: "returning"
};

export const CAMERA_POSITIONS = {
    intro: {
        position: [6, 4, 8],
        lookAt: [0, 1, 0]
    },
    entering: {
        position: [3.5, 2.5, 5],
        lookAt: [0, 1, 0]
    },
    sitting: {
        position: [0, 1.7, 3.2],
        lookAt: [0, 1.4, 0]
    },
    firstPerson: {
        position: [0, 1.7, 2.8],
        lookAt: [0, 1.6, 0]
    }
};