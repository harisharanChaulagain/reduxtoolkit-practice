import Chance from "chance";

const chance = Chance();

export const fakeUserData = () => {
    const name = chance.name({ middle: true });
    return { name };
  };
  