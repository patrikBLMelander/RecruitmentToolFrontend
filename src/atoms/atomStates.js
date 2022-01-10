
import { atom, selector } from "recoil";
import candidateTestData from '../testData/candidateTestData';
import jobOfferTestData from '../testData/jobOfferingsTestData';
import colorPicker from '../testData/colorPicker';
import animals from '../testData/animals';

export const atomUser = atom({
  key: "atomUser",
  default: {},
});

export const atomAdmin = atom({
  key: "atomAdmin",
  default: {},
});

export const atomIsAdmin = atom({
  key: "atomIsAdmin",
  default: false,
});

export const atomCandidates = atom({
  key: "atomCandidates",
  default: {candidateTestData},
});

export const atomJobOffers = atom({
  key: "atomJobOffers",
  default: {jobOfferTestData},
});

export const atomActiveJob = atom({
  key: "atomActiveJob",
  default: {},
});

export const atomColorPicker = atom({
  key: "atomColorPicker",
  default: {colorPicker},
});

export const atomAnimals = atom({
  key: "atomAnimals",
  default: {animals},
});

export const selectorColorPicker = selector({
  key: 'selectorColorPicker',
  get: ({get}) => {
    const colorPicker = get(atomColorPicker);

        return colorPicker;
    }
  },
);