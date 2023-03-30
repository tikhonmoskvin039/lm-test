import { HomeFilled } from "@ant-design/icons";

export const getSortedItems = (items, sortOrder) => {
  const sortedItems = [...items];
  sortedItems.sort((a, b) => {
    const aLowerCaseTitle = a.title.toLowerCase();
    const bLowerCaseTitle = b.title.toLowerCase();
    if (sortOrder === "az") {
      return aLowerCaseTitle > bLowerCaseTitle
        ? 1
        : aLowerCaseTitle === bLowerCaseTitle
        ? 0
        : -1;
    } else if (sortOrder === "za") {
      return aLowerCaseTitle < bLowerCaseTitle
        ? 1
        : aLowerCaseTitle === bLowerCaseTitle
        ? 0
        : -1;
    } else if (sortOrder === "lohi") {
      return a.price > b.price ? 1 : a.price === b.price ? 0 : -1;
    } else if (sortOrder === "hilo") {
      return a.price < b.price ? 1 : a.price === b.price ? 0 : -1;
    }
  });
  return sortedItems;
};

export const sorterOptions = [
  {
    label: "Alphabet a-z",
    value: "az",
  },
  {
    label: "Alphabet z-a",
    value: "za",
  },
  {
    label: "Price Low to High",
    value: "lohi",
  },
  {
    label: "Price High to Low",
    value: "hilo",
  },
];

export const headerItems = [
  {
    label: <HomeFilled />,
    key: "",
  },
  {
    label: "Men",
    key: "men",
    children: [
      {
        label: "Men's Shirts",
        key: "mens-shirts",
      },
      {
        label: "Men's Shoes",
        key: "mens-shoes",
      },
      {
        label: "Men's Watches",
        key: "mens-watches",
      },
    ],
  },
  {
    label: "Women",
    key: "women",
    children: [
      {
        label: "Women's Dresses",
        key: "womens-dresses",
      },
      {
        label: "Women's Shoes",
        key: "womens-shoes",
      },
      {
        label: "Women's Watches",
        key: "womens-watches",
      },
      {
        label: "Women's Bags",
        key: "womens-bags",
      },
      {
        label: "Women's Jewellery",
        key: "womens-jewellery",
      },
    ],
  },
  {
    label: "Fragrances",
    key: "fragrances",
  },
];

export const setLocalState = (key, setStateFunc) => {
  const savedValue = localStorage.getItem(key);
  if (savedValue) {
    setStateFunc(JSON.parse(savedValue));
  }
};
