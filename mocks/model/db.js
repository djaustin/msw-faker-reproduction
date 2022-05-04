import { factory, primaryKey } from "@mswjs/data";

export const db = factory({
  book: {
    id: primaryKey(() => Math.floor(Math.random() * 9999)),
    title: () => "Book title",
    imageUrl: () =>
      "https://images.dog.ceo/breeds/terrier-toy/n02087046_7469.jpg",
  },
});
