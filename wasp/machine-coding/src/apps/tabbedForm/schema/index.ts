export const multiTabForm = {
  profile: {
    name: {
      label: "Name",
      type: "input",
      name: "name",
      value: "",
      isValid: () => true,
      errorMsg: "",
    },
    gender: {
      label: "Gender",
      type: "radio",
      name: "gender",
      value: "",
      options: [
        {
          name: "Male",
          value: "male",
        },
        {
          name: "Female",
          value: "female",
        },
      ],
      isValid: () => true,
      errorMsg: "",
    },
  },
  adress: {
    country: {
      label: "Country",
      type: "radio",
      name: "country",
      value: "",
      options: [
        {
          name: "India",
          value: "india",
        },
        {
          name: "USA",
          value: "usa",
        },
      ],
      isValid: () => true,
      errorMsg: "",
    },
  },
  skill: {
    tech: {
      label: "Tech",
      type: "select",
      name: "tech",
      options: [
        {
          name: "FE",
          value: "fe",
        },
        {
          name: "BE",
          value: "be",
        },
      ],
      value: "fe",
      isValid: () => true,
      errorMsg: "",
    },
  },
};
